from fastapi import FastAPI, BackgroundTasks, UploadFile, HTTPException, Form, File
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
from pymongo import MongoClient
from bson.objectid import ObjectId
import requests
import time
import asyncio
import random
import string


# Enhanced logging setup
logging.basicConfig(
    # level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('app.log'),
        logging.StreamHandler(sys.stdout)
    ]
)
logger = logging.getLogger(__name__)

# MongoDB setup
MONGO_DETAILS = "mongodb+srv://bargains_pro:MOIookr5SFne3vWK@cluster0.je8x5oh.mongodb.net/"
client = MongoClient(MONGO_DETAILS)
db = client.face_fusion_db
jobs_collection = db.get_collection("jobs")

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

class FusionRequest(BaseModel):
    linkedin_url: str
    email: str
    send_flag: bool

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
    email: str,
    flag: bool,
    admin_email: str,
    fname: str
):
    """Background task to process face fusion."""
    start_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    try:
        logger.info(f"Starting job {job_id} with source path: {source_path}")

		# Insert initial job status in MongoDB
        jobs_collection.insert_one({
            "job_id": job_id,
            "status": "processing",
            "start_time": start_time,
            "email": email,
        })

        # Validate source file path
        if not os.path.exists(source_path):
            raise FileNotFoundError(f"Source file not found: {source_path}")

        # Validate the file is an image (extension check )
        logger.debug(f"Validating the format of source file: {source_path}")
        if not source_path.lower().endswith(('.png', '.jpg', '.jpeg')):
            raise ValueError(f"Invalid source file format: {source_path}. Must be an image.")

        # Validate the target video path
        logger.debug(f"Validating the presence of target video: {TARGET_VIDEO}")
        if not os.path.exists(TARGET_VIDEO):
            raise FileNotFoundError(f"Target video not found: {TARGET_VIDEO}")
        
        # Make a copy of the TARGET_VIDEO and rename it to a random name

        random_name = ''.join(random.choices(string.ascii_letters + string.digits, k=8))
        target_video_copy = os.path.join(UPLOAD_DIR, f"{random_name}.mp4")
        shutil.copy(TARGET_VIDEO, target_video_copy)

        # Create output directory if it doesn't exist
        os.makedirs(OUTPUT_DIR, exist_ok=True)

        # Generate a random name for the target video copy
        random_name = ''.join(random.choices(string.ascii_letters + string.digits, k=8))
        target_video_copy = os.path.join(UPLOAD_DIR, f"{random_name}.mp4")
        shutil.copy(TARGET_VIDEO, target_video_copy)

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
           	"--execution-device-id", "0",  # Set device ID (default 0)
			"--execution-providers", "cuda",
    		"--execution-thread-count", "32",  # Maximum thread count
    		"--execution-queue-count", "5",

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
            #save status of the step 1
            jobs_collection.update_one(
                {"job_id": job_id},
                {"$set": {
                "status": "failed",
                "error": error_msg,
                "command": first_command_str,
                "end_time": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }})

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
			"--execution-providers", "cuda",
            "--execution-thread-count", "32",  # Maximum thread count
            "--execution-queue-count", "5"
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

            # Upload the output to S3 and get the URL
            url = await s3_manager.upload_file(f"output_{job_id}_final.mp4", second_output_path)

            # Return the URL in the job status
            job_statuses[job_id].output_path = url

            # Update the job status in the database
            jobs_collection.update_one(
                {"job_id": job_id},
                {"$set": {
                    "status": "completed",
                    "output_path": url,
                    # "command": f"First command: {first_command_str}\nSecond command: {second_command_str}",
                    "end_time": end_time
                }}
            )

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

            # Update job status in database for failed second step
            jobs_collection.update_one(
                {"job_id": job_id},
                {"$set": {
                    "status": "failed",
                    "error": error_msg,
                    "end_time": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                }}
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
    request: FusionRequest
):
    try:
        admin_email = "awal@reallygreattech.com"

        linkedin_url = request.linkedin_url
        email = request.email
        send_flag = request.send_flag

        # Import service and call LinkedIn scraper API
        linkedin_data = service_module.scrape_profile_proxycurl(linkedin_url)
        source_filename = linkedin_data['first_name'] + '.jpeg'

        # Save the source file from LinkedIn profile pic URL
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


@app.get("/job/{job_id}/status/")
async def get_job_status(job_id: str):
    """API endpoint to get the status of a job."""
    try:
        # Fetch the job status from MongoDB
        job_status =  jobs_collection.find_one({"job_id": job_id}, {"_id": 0})

        if job_status:
            return JSONResponse(status_code=200, content=job_status)
        else:
            raise HTTPException(status_code=404, detail="Job not found")

    except Exception as e:
        logger.error(f"Error in /job/{job_id}/status endpoint: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")



@app.get("/health")
async def health_check():
    """API endpoint for health check."""
    try:
        # Check if the MongoDB connection is healthy
        client.server_info()

        # Add any other health checks as needed (e.g., checking other dependencies)

        return JSONResponse(status_code=200, content={"status": "ok"})

    except Exception as e:
        logger.error(f"Error in /health endpoint: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

