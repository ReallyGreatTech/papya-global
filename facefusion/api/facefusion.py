from fastapi import FastAPI, BackgroundTasks, UploadFile, HTTPException
from fastapi.responses import JSONResponse, FileResponse
from .constants import TARGET_VIDEO, OUTPUT_DIR, UPLOAD_DIR, REFERENCE_FACE_POSITION, REFERENCE_FRAME_NUMBER
import os
import uuid
import shutil
from pydantic import BaseModel
from typing import Optional, Dict
import logging
import sys
from datetime import datetime
from api.services import service_module
from api.s3_service import s3_manager
import requests
import trio
from subprocess import PIPE
import os
import sys
# Enhanced logging setup
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('app.log'),
        logging.StreamHandler(sys.stdout)
    ]
)
logger = logging.getLogger(__name__)

app = FastAPI()

# (Swap to proper database)
job_statuses = {}

class JobStatus(BaseModel):
    job_id: str
    status: str
    output_path: Optional[str] = None
    error: Optional[str] = None
    command: Optional[str] = None
    start_time: Optional[str] = None
    end_time: Optional[str] = None

def generate_unique_filename(original_filename: str) -> str:
    """Generate a unique filename using UUID."""
    ext = os.path.splitext(original_filename)[1]
    return f"{str(uuid.uuid4())[:8]}{ext}"

async def trio_subprocess(command: list) -> tuple:
    """Run a subprocess using trio and return stdout, stderr, and return code."""
    try:
        process = await trio._subprocess.run_process(
            command,
            capture_stdout=True,
            capture_stderr=True
        )
        return (
            process.returncode,
            process.stdout.decode() if process.stdout else "",
            process.stderr.decode() if process.stderr else ""
        )
    except Exception as e:
        # Log and re-raise the exception
        logger.error(f"Error in trio_subprocess: {str(e)}")
        raise

async def process_face_fusion(
    job_id: str,
    source_path: str,
    email: str,
    flag: bool,
    admin_email: str,
    fname: str
):
    """Background task to process face fusion."""
    start_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    try:
        logger.info(f"Starting job {job_id} with source path: {source_path}")

        # Validate source file path
        if not os.path.exists(source_path):
            raise FileNotFoundError(f"Source file not found: {source_path}")

        # Validate the file is an image (extension check or use PIL)
        logger.debug(f"Validating the format of source file: {source_path}")
        if not source_path.lower().endswith(('.png', '.jpg', '.jpeg')):
            raise ValueError(f"Invalid source file format: {source_path}. Must be an image.")

        # Validate the target video path
        logger.debug(f"Validating the presence of target video: {TARGET_VIDEO}")
        if not os.path.exists(TARGET_VIDEO):
            raise FileNotFoundError(f"Target video not found: {TARGET_VIDEO}")

        # Create output directory if it doesn't exist
        os.makedirs(OUTPUT_DIR, exist_ok=True)

        # Generate unique output filename for the first run
        first_output_path = os.path.join(OUTPUT_DIR, f"output_{job_id}_first_run.mp4")

        # Construct command for the first run
        first_command = [
            sys.executable,  # Use current Python interpreter
            "facefusion.py",
            "headless-run",
            "--processors", "face_swapper",
            "--face-swapper-model", "inswapper_128",
            "--source-paths", source_path,
            "--target-path", TARGET_VIDEO,
            "--output-path", first_output_path,
            "--reference-face-position", str(REFERENCE_FACE_POSITION),
            "--reference-frame-number", str(REFERENCE_FRAME_NUMBER),
            "--output-video-quality", "95",
            "--face-detector-score", "0.3",
            "--execution-device-id", "0",  # Set device ID (default 0)
            "--execution-thread-count", "32",  # Maximum thread count
            "--execution-queue-count", "2"
        ]

        # Log the first command
        first_command_str = " ".join(first_command)
        logger.info(f"Executing first command: {first_command_str}")

        # Run the first command using trio
        returncode, stdout, stderr = await trio_subprocess(first_command)

        logger.info(f"First process stdout: {stdout}")
        if stderr:
            logger.error(f"First process stderr: {stderr}")

        if returncode != 0 or not os.path.exists(first_output_path):
            error_msg = f"First process failed with return code {returncode}\nSTDOUT:\n{stdout}\nSTDERR:\n{stderr}"
            logger.error(f"Job {job_id} failed during first run: {error_msg}")
            job_statuses[job_id] = JobStatus(
                job_id=job_id,
                status="failed",
                error=error_msg,
                command=first_command_str,
                start_time=start_time,
                end_time=datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            )
            return

        # Generate unique output filename for the second run
        second_output_path = os.path.join(OUTPUT_DIR, f"output_{job_id}_final.mp4")

        # Construct command for the second run
        second_command = [
            sys.executable,  # Use current Python interpreter
            "facefusion.py",
            "headless-run",
            "--processors", "face_swapper",
            "--face-swapper-model", "inswapper_128_fp16",
            "--source-paths", source_path,
            "--target-path", first_output_path,  # Use the output of the first run as the new target
            "--output-path", second_output_path,
            "--reference-face-position", "0",  # Updated parameters for the second run
            "--reference-frame-number", "229",
            "--output-video-quality", "95",
            "--face-detector-score", "0.3",
            "--execution-device-id", "0",  # Set device ID (default 0)
            "--execution-thread-count", "32",  # Maximum thread count
            "--execution-queue-count", "2"
        ]

        # Log the second command
        second_command_str = " ".join(second_command)
        logger.info(f"Executing second command: {second_command_str}")

        # Run the second command using trio
        returncode, stdout, stderr = await trio_subprocess(second_command)

        logger.info(f"Second process stdout: {stdout}")
        if stderr:
            logger.error(f"Second process stderr: {stderr}")

        end_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        if returncode == 0 and os.path.exists(second_output_path):
            logger.info(f"Job {job_id} completed successfully")
            job_statuses[job_id] = JobStatus(
                job_id=job_id,
                status="completed",
                output_path=second_output_path,
                command=f"First command: {first_command_str}\nSecond command: {second_command_str}",
                start_time=start_time,
                end_time=end_time
            )

            # Delete the source file and first run output after processing
            os.remove(source_path)
            os.remove(first_output_path)

            # Upload the output to S3 and get the URL
            url = await s3_manager.upload_file(f"output_{job_id}_final.mp4", second_output_path)

            # Return the URL in the job status
            job_statuses[job_id].output_path = url

            # Send email to admin or user based on flag (keep commented for future use)
            # if flag:
            #     send_email(admin_email, f"Job {job_id} completed.", "Your job is done!")
            # else:
            #     send_email(email, f"Job {job_id} completed.", "Your job is done!")

        else:
            error_msg = f"Second process failed with return code {returncode}\nSTDOUT:\n{stdout}\nSTDERR:\n{stderr}"
            logger.error(f"Job {job_id} failed during second run: {error_msg}")
            job_statuses[job_id] = JobStatus(
                job_id=job_id,
                status="failed",
                error=error_msg,
                command=f"First command: {first_command_str}\nSecond command: {second_command_str}",
                start_time=start_time,
                end_time=end_time
            )

    except Exception as e:
        end_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        error_msg = f"Error processing job {job_id}: {str(e)}"
        logger.exception(error_msg)
        job_statuses[job_id] = JobStatus(
            job_id=job_id,
            status="failed",
            error=error_msg,
            start_time=start_time,
            end_time=end_time
        )

@app.post("/process-swap/")
async def create_face_fusion_job(
    background_tasks: BackgroundTasks,
    body: Dict
):
    try:
        admin_email = "awal@reallygreattech.com"
        email: str = body['email']
        send_flag: bool = body['send_flag']
        linkedin_url: str = body['linkedin_url']

        # Import service and call LinkedIn scraper API
        linkedin_data = service_module.scrape_profile_proxycurl(linkedin_url)
        source_filename = linkedin_data['first_name'] + '.jpeg'

        # Save the source file
        try:
            source_path = os.path.join(UPLOAD_DIR, generate_unique_filename(source_filename))
            response = requests.get(linkedin_data['profile_pic_url'])
            with open(source_path, 'wb') as file:
                file.write(response.content)
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Error downloading image: {e}")

        # Process fusion asynchronously
        job_id = str(uuid.uuid4())

        # Pass arguments as positional arguments to trio.run
        background_tasks.add_task(
            trio.run,
            process_face_fusion,
            job_id,  # Positional argument
            source_path,  # Positional argument
            email,  # Positional argument
            send_flag,  # Positional argument
            admin_email,  # Positional argument
            source_filename  # Positional argument
        )

        return JSONResponse({
            "job_id": job_id,
            "message": "Face fusion job started successfully.",
            "status": "processing"
        })

    except Exception as e:
        logger.error(f"Error creating fusion job: {e}")
        raise HTTPException(status_code=500, detail=f"Error processing face fusion job: {e}")

@app.get("/job-status/{job_id}")
async def get_job_status(job_id: str):
    if job_id in job_statuses:
        return job_statuses[job_id]
    else:
        raise HTTPException(status_code=404, detail="Job not found.")
