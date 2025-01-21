import ffmpeg
import os
import math
import asyncio
import uuid
from datetime import timedelta
import logging
from concurrent.futures import ThreadPoolExecutor
from typing import List, Dict
import json

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel

# Setup logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[logging.FileHandler('pipeline.log'), logging.StreamHandler()]
)
logger = logging.getLogger(__name__)

app = FastAPI()


class VideoProcessor:
    def __init__(self, input_video: str, output_dir: str = "processed_videos"):
        self.input_video = input_video
        self.base_output_dir = output_dir
        self.segment_dir = os.path.join(output_dir, "segments")
        self.processed_dir = os.path.join(output_dir, "processed")
        self.job_id = str(uuid.uuid4())[:8]

        # Create necessary directories
        for directory in [self.base_output_dir, self.segment_dir, self.processed_dir]:
            os.makedirs(directory, exist_ok=True)

        # High quality video settings
        self.video_settings = {
            'vcodec': 'libx265',
            'crf': '18',
            'preset': 'slow',
            'x265-params': 'profile=main10',
            'pix_fmt': 'yuv420p10le'
        }

        self.audio_settings = {
            'acodec': 'libopus',
            'b:a': '192k',
            'ar': '48000'
        }

    async def split_video(self, segment_duration: int = 10) -> List[str]:
        """Split video into segments of specified duration."""
        try:
            probe = ffmpeg.probe(self.input_video)
            duration = float(probe['format']['duration'])
            logger.info(f"Video duration: {timedelta(seconds=int(duration))}")

            num_segments = math.floor(duration / segment_duration)
            remaining_time = duration % segment_duration
            segments_to_process = num_segments if remaining_time == 0 else num_segments - 1

            segment_files = []

            for i in range(segments_to_process):
                start_time = i * segment_duration
                output_path = os.path.join(self.segment_dir, f"segment_{i+1:03d}_{self.job_id}.mp4")
                await self._create_segment(start_time, segment_duration, output_path)
                segment_files.append(output_path)

            if remaining_time > 0:
                start_time = segments_to_process * segment_duration
                last_duration = segment_duration + remaining_time
                output_path = os.path.join(self.segment_dir, f"segment_{segments_to_process+1:03d}_{self.job_id}.mp4")
                await self._create_segment(start_time, last_duration, output_path)
                segment_files.append(output_path)

            order_file = os.path.join(self.base_output_dir, f"segment_order_{self.job_id}.json")
            with open(order_file, 'w') as f:
                json.dump({'segments': segment_files, 'job_id': self.job_id}, f)

            return segment_files

        except Exception as e:
            logger.error(f"Error splitting video: {str(e)}")
            raise

    async def _create_segment(self, start_time: float, duration: float, output_path: str):
        """Create individual segment with high quality settings."""
        try:
            stream = (
                ffmpeg.input(self.input_video, ss=start_time, t=duration)
                .output(output_path, **self.video_settings, **self.audio_settings, map_metadata=0, movflags='+faststart')
                .overwrite_output()
            )

            # Capture stdout and stderr
            process = await asyncio.create_subprocess_exec(
                *stream.compile(), stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.PIPE
            )
            stdout, stderr = await process.communicate()

            # Log both stdout and stderr
            logger.debug(f"FFmpeg stdout: {stdout.decode()}")
            logger.debug(f"FFmpeg stderr: {stderr.decode()}")

            # Check if process succeeded
            if process.returncode != 0:
                raise Exception(f"FFmpeg failed with return code {process.returncode}: {stderr.decode()}")

        except Exception as e:
            logger.error(f"Error creating segment: {str(e)}")
            raise

    async def process_segment(self, segment_path: str, source_image: str, ref_position: str, ref_frame: str) -> str:
        """Process individual segment using the face fusion command."""
        try:
            output_filename = os.path.basename(segment_path).replace("segment_", "processed_")
            output_path = os.path.join(self.processed_dir, output_filename)

            command = [
                "python", "facefusion.py", "headless-run",
                "--processors", "face_swapper",
                "--face-swapper-model", "inswapper_128",
                "--source-paths", source_image,
                "--target-path", segment_path,
                "--output-path", output_path,
                "--reference-face-position", ref_position,
                "--reference-frame-number", ref_frame,
                "--output-video-quality", "95",
                "--face-detector-score", "0.3"
            ]

            process = await asyncio.create_subprocess_exec(*command, stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.PIPE)
            stdout, stderr = await process.communicate()

            if process.returncode == 0:
                logger.info(f"Successfully processed segment: {segment_path}")
                return output_path
            else:
                raise Exception(f"Processing failed: {stderr.decode()}")

        except Exception as e:
            logger.error(f"Error processing segment: {str(e)}")
            raise

    async def merge_processed_segments(self, processed_segments: List[str]) -> str:
        """Merge processed segments back together."""
        try:
            processed_segments.sort(key=lambda x: int(x.split('_')[1].split('.')[0]))

            list_file = os.path.join(self.base_output_dir, f"merge_list_{self.job_id}.txt")
            with open(list_file, 'w') as f:
                for segment in processed_segments:
                    f.write(f"file '{segment}'\n")

            output_path = os.path.join(self.base_output_dir, f"final_output_{self.job_id}.mp4")

            stream = (
                ffmpeg.input(list_file, format='concat', safe=0)
                .output(output_path, **self.video_settings, **self.audio_settings, movflags='+faststart')
                .overwrite_output()
            )

            process = await asyncio.create_subprocess_exec(*stream.compile(), stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.PIPE)
            stdout, stderr = await process.communicate()

            os.remove(list_file)

            return output_path

        except Exception as e:
            logger.error(f"Error merging segments: {str(e)}")
            raise

    async def run_pipeline(self, source_image: str, reference_positions: List[str], reference_frames: List[str]) -> str:
        """Run the complete pipeline."""
        try:
            logger.info("Starting video splitting...")
            segments = await self.split_video()

            logger.info("Processing segments...")
            tasks = [
                self.process_segment(segment, source_image, ref_position, ref_frame)
                for segment, ref_position, ref_frame in zip(segments, reference_positions, reference_frames)
            ]
            processed_segments = await asyncio.gather(*tasks)

            logger.info("Merging processed segments...")
            final_output = await self.merge_processed_segments(processed_segments)

            return final_output

        except Exception as e:
            logger.error(f"Pipeline error: {str(e)}")
            raise


@app.post("/process-video")
async def process_video(
    input_video: UploadFile = File(...),
    source_image: UploadFile = File(...),
    reference_positions: List[str] = ["0", "10", "20", "30"],
    reference_frames: List[str] = ["0", "100", "200", "300"]
):
    try:
        # Save uploaded video and source image temporarily
        input_video_path = f"temp_{uuid.uuid4()}_{input_video.filename}"
        source_image_path = f"temp_{uuid.uuid4()}_{source_image.filename}"

        with open(input_video_path, "wb") as f:
            f.write(await input_video.read())

        with open(source_image_path, "wb") as f:
            f.write(await source_image.read())

        # Initialize VideoProcessor and run the pipeline
        processor = VideoProcessor(input_video=input_video_path)
        final_output = await processor.run_pipeline(
            source_image=source_image_path,
            reference_positions=reference_positions,
            reference_frames=reference_frames
        )

        return JSONResponse(content={"message": "Processing completed", "output_path": final_output})

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Processing failed: {str(e)}")

    finally:
        # Cleanup the temporary files if needed
        if os.path.exists(input_video_path):
            os.remove(input_video_path)
        if os.path.exists(source_image_path):
            os.remove(source_image_path)
