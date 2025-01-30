from fastapi import FastAPI, BackgroundTasks, UploadFile, HTTPException
from fastapi.responses import JSONResponse, FileResponse
from . constants import TARGET_VIDEO, OUTPUT_DIR, UPLOAD_DIR, REFERENCE_FACE_POSITION, REFERENCE_FRAME_NUMBER
import subprocess
import os
import uuid
import shutil
from pydantic import BaseModel
from typing import Optional
import logging
import sys
from datetime import datetime
from typing import Dict
from api.services import service_module
from api.s3_service import s3_manager
import requests
import time
import asyncio
import random
import string


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

async def run_command(command):
    process = await asyncio.create_subprocess_exec(
        *command,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE
    )
    stdout, stderr = await process.communicate()
    return process.returncode, stdout.decode(), stderr.decode()

async def process_face_fusion(
    job_id: str,
    source_path: str,
    email:str,
    flag:bool,
    admin_email:str,
    fname:str
):
    """Background task to process face fusion."""
    start_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    try:
        logger.info(f"Starting job {job_id} with source path: {source_path}")

        # Verify files exist
        if not os.path.exists(source_path):
            raise FileNotFoundError(f"Source file not found: {source_path}")
        if not os.path.exists(TARGET_VIDEO):
            raise FileNotFoundError(f"Target video not found: {TARGET_VIDEO}")
        
        # Make a copy of the TARGET_VIDEO and rename it to a random name

        random_name = ''.join(random.choices(string.ascii_letters + string.digits, k=8))
        target_video_copy = os.path.join(UPLOAD_DIR, f"{random_name}.mp4")
        shutil.copy(TARGET_VIDEO, target_video_copy)

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
            "--target-path", target_video_copy,
            "--output-path", first_output_path,
            "--reference-face-position", str(REFERENCE_FACE_POSITION),
            "--reference-frame-number", str(REFERENCE_FRAME_NUMBER),
            "--output-video-quality", "95",
            "--face-detector-score", "0.3",
        ]

        # Log the first command
        first_command_str = " ".join(first_command)
        logger.info(f"Executing first command: {first_command_str}")

        # # Run the first command
        # first_process = subprocess.Popen(
        #     first_command,
        #     stdout=subprocess.PIPE,
        #     stderr=subprocess.PIPE,
        #     text=True  # Return strings instead of bytes
        # )

        returncode, stdout, stderr = await run_command(first_command)


        # stdout, stderr = first_process.communicate()
        logger.info(f"First process stdout: {returncode}{stdout}")
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

            # send email to
            reciepient = email if flag else admin_email 
            await service_module.send_email(msg=error_msg, url="", email=reciepient, name=fname)

            return

        # Generate unique output filename for the second run
        second_output_path = os.path.join(OUTPUT_DIR, f"output_{job_id}_final.mp4")

        # Construct command for the second run
        second_command = [
            sys.executable,  # Use current Python interpreter
            "facefusion.py",
            "headless-run",
            "--processors", "face_swapper",
            "--face-swapper-model", "inswapper_128",
            "--source-paths", source_path,
            "--target-path", first_output_path,  # Use the output of the first run as the new target
            "--output-path", second_output_path,
            "--reference-face-position", "0",  # Updated parameters for the second run
            "--reference-frame-number", "229",
            "--output-video-quality", "95",
            "--face-detector-score", "0.3",
        ]

        # Log the second command
        second_command_str = " ".join(second_command)
        logger.info(f"Executing second command: {second_command_str}")

        # # Run the second command
        # second_process = subprocess.Popen(
        #     second_command,
        #     stdout=subprocess.PIPE,
        #     stderr=subprocess.PIPE,
        #     text=True  # Return strings instead of bytes
        # )

        # stdout, stderr = second_process.communicate()
        returncode, stdout, stderr = await run_command(second_command)

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

            #upload the ouput to s3 and
            #send email to stateholders from here.
            url = await s3_manager.upload_file(f"output_{job_id}_final.mp4",second_output_path)
            # print(url)
            reciepient = email if flag else admin_email 
            await service_module.send_email(msg="", url=url, email=reciepient, name=fname)

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

             # send email to
            reciepient = email if flag else admin_email 
            await service_module.send_email(msg=error_msg, url="", email=reciepient, name=fname)

    except Exception as e:
        end_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        error_msg = f"Error processing job {job_id}: {str(e)}"
        logger.exception(error_msg)  # This will also log the stack trace
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
        send_flag:bool = body['send_flag']
        linkedin_url: str = body['linkedin_url']

        #inport service and call linkedin scrapper API
        linkedin_data = service_module.scrape_profile_proxycurl(linkedin_url)
        print(linkedin_data["profile_pic_url"])

        # Create temporary directory for uploads
        os.makedirs(UPLOAD_DIR, exist_ok=True)

        # Download image with unique name
        source_filename = generate_unique_filename("profile_pic.png")
        source_path = os.path.join(UPLOAD_DIR, source_filename)

        # Download image
        logger.info(f"Downloading image to {source_path}")
        with requests.get(linkedin_data["profile_pic_url"]) as response:
            response.raise_for_status()
            with open(source_path, "wb") as buffer:
                buffer.write(response.content)

        # Validate target video exists
        if not os.path.exists(TARGET_VIDEO):
            error_msg = f"Target video '{TARGET_VIDEO}' not found"
            logger.error(error_msg)
            raise HTTPException(status_code=500, detail=error_msg)

        # Generate job ID
        job_id = str(uuid.uuid4())[:8]
        logger.info(f"Creating new job {job_id}")

        #add second task
        job_statuses[job_id] = JobStatus(
            job_id=job_id,
            status="processing",
            start_time=datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        )

        fname = linkedin_data["first_name"]

        # Add background task
        background_tasks.add_task(
            process_face_fusion,
            job_id,
            source_path,
            email,
            send_flag,
            admin_email,
            fname
        )

        return JSONResponse({
            "job_id": job_id,
            "message": "Processing started",
            "status": "processing"
        })

    except Exception as e:
        error_msg = f"Error creating job: {str(e)}"
        logger.exception(error_msg)
        raise HTTPException(status_code=500, detail=error_msg)


@app.post("/process-face-fusion/")
async def create_face_fusion_job(
    background_tasks: BackgroundTasks,
    source_image: UploadFile,
):
    try:
        # Validate target video exists
        if not os.path.exists(TARGET_VIDEO):
            error_msg = f"Target video '{TARGET_VIDEO}' not found"
            logger.error(error_msg)
            raise HTTPException(status_code=500, detail=error_msg)

        # Generate job ID
        job_id = str(uuid.uuid4())[:8]
        logger.info(f"Creating new job {job_id}")

        # Create temporary directory for uploads
        os.makedirs(UPLOAD_DIR, exist_ok=True)

        # Save uploaded file with unique name
        source_filename = generate_unique_filename(source_image.filename)
        source_path = os.path.join(UPLOAD_DIR, source_filename)

        # Save uploaded file
        logger.info(f"Saving uploaded file to {source_path}")
        with open(source_path, "wb") as buffer:
            shutil.copyfileobj(source_image.file, buffer)

        # Initialize job status
        job_statuses[job_id] = JobStatus(
            job_id=job_id,
            status="processing",
            start_time=datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        )

        # Add background task
        background_tasks.add_task(
            process_face_fusion,
            job_id,
            source_path,
        )

        return JSONResponse({
            "job_id": job_id,
            "message": "Processing started",
            "status": "processing"
        })
    


    except Exception as e:
        error_msg = f"Error creating job: {str(e)}"
        logger.exception(error_msg)
        raise HTTPException(status_code=500, detail=error_msg)

@app.get("/job-status/{job_id}")
async def get_job_status(job_id: str):
    """Get the status of a processing job."""
    logger.info(f"Checking status for job {job_id}")
    if job_id not in job_statuses:
        error_msg = f"Job {job_id} not found"
        logger.error(error_msg)
        raise HTTPException(status_code=404, detail=error_msg)

    job_status = job_statuses[job_id]

    if job_status.status == "completed":
        return FileResponse(job_status.output_path, media_type="video/mp4", filename=f"output_{job_id}.mp4")
    else:
        return job_status
