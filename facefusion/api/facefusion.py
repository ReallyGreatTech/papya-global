# 1. Access and split the video in 10 sec segments - DONE
# 2. For each segment run the command - specified
# 3. Combine the video segments

from fastapi import FastAPI, File, UploadFile, HTTPException
import ffmpeg
import os
import math
from datetime import timedelta
from typing import List

app = FastAPI()

def split_video_ffmpeg(input_file: str, segment_duration: int = 10) -> List[str]:
    """
    Split a video file into segments of specified duration using ffmpeg with high quality settings.

    Parameters:
    input_file (str): Path to the input video file
    segment_duration (int): Duration of each segment in seconds (default: 10)

    Returns:
    list: List of output file paths in order
    """
    try:
        # Get video information
        probe = ffmpeg.probe(input_file)
        video_info = next(s for s in probe['streams'] if s['codec_type'] == 'video')
        duration = float(probe['format']['duration'])

        print(f"Video duration: {timedelta(seconds=int(duration))}")

        # Calculate number of full segments and remaining time
        num_segments = math.floor(duration / segment_duration)
        remaining_time = duration % segment_duration

        # Create output directory if it doesn't exist
        output_dir = "split_videos"
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)

        # Store output paths in order
        output_files = []

        # Base filename without extension
        filename = os.path.splitext(os.path.basename(input_file))[0]

        # High quality ffmpeg settings
        video_settings = {
            'vcodec': 'libx265',  # H.265/HEVC codec for better compression
            'crf': '18',          # Constant Rate Factor (18 is very high quality, lower = better)
            'preset': 'slow',     # Slower encoding = better compression
            'x265-params': 'profile=main10',  # 10-bit encoding
            'pix_fmt': 'yuv420p10le'         # 10-bit pixel format
        }

        audio_settings = {
            'acodec': 'libopus',  # Opus codec for better audio quality
            'b:a': '192k',        # Audio bitrate
            'ar': '48000'         # Audio sample rate
        }

        # Process all segments except the last one if there's remaining time
        segments_to_process = num_segments if remaining_time == 0 else num_segments - 1

        for i in range(segments_to_process):
            start_time = i * segment_duration

            # Format times for filename (MM_SS)
            start_str = f"{int(start_time//60):02d}_{int(start_time%60):02d}"
            end_str = f"{int((start_time + segment_duration)//60):02d}_{int((start_time + segment_duration)%60):02d}"

            output_path = os.path.join(
                output_dir,
                f"{filename}_seq{i+1:03d}_time{start_str}_to_{end_str}.mp4"
            )

            print(f"Creating segment {i+1}: {start_time}s to {start_time + segment_duration}s")

            # Use ffmpeg with high quality settings
            stream = (
                ffmpeg
                .input(input_file, ss=start_time, t=segment_duration)
                .output(
                    output_path,
                    **video_settings,
                    **audio_settings,
                    map_metadata=0,
                    movflags='+faststart'  # Enable streaming-friendly output
                )
                .overwrite_output()
            )

            # Run ffmpeg command
            stream.run(capture_stdout=True, capture_stderr=True)

            output_files.append(output_path)

        # Handle the last segment with remaining time if any
        if remaining_time > 0:
            start_time = (num_segments - 1) * segment_duration
            last_duration = segment_duration + remaining_time

            start_str = f"{int(start_time//60):02d}_{int(start_time%60):02d}"
            end_str = f"{int((start_time + last_duration)//60):02d}_{int((start_time + last_duration)%60):02d}"

            output_path = os.path.join(
                output_dir,
                f"{filename}_seq{num_segments:03d}_time{start_str}_to_{end_str}.mp4"
            )

            print(f"Creating final segment: {start_time}s to {start_time + last_duration}s "
                  f"(includes remaining {remaining_time:.2f}s)")

            # Use ffmpeg with high quality settings for final segment
            stream = (
                ffmpeg
                .input(input_file, ss=start_time, t=last_duration)
                .output(
                    output_path,
                    **video_settings,
                    **audio_settings,
                    map_metadata=0,
                    movflags='+faststart'
                )
                .overwrite_output()
            )

            stream.run(capture_stdout=True, capture_stderr=True)

            output_files.append(output_path)

        # Generate an order verification file
        order_file = os.path.join(output_dir, "segment_order.txt")
        with open(order_file, 'w') as f:
            f.write("Video Segment Order:\n\n")
            for idx, file_path in enumerate(output_files, 1):
                f.write(f"Sequence {idx:03d}: {os.path.basename(file_path)}\n")

        return output_files

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/split-video/")
async def split_video(file: UploadFile = File(...), segment_duration: int = 10):
    # Save the uploaded file temporarily
    temp_file_path = f"temp_{file.filename}"
    with open(temp_file_path, "wb") as buffer:
        buffer.write(await file.read())

    try:
        output_files = split_video_ffmpeg(temp_file_path, segment_duration)
        return {"output_files": output_files}
    finally:
        # Clean up the temporary file
        if os.path.exists(temp_file_path):
            os.remove(temp_file_path)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
