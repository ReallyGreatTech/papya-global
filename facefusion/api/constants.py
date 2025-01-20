import os
TARGET_VIDEO = "../target_video/papaya-global.mp4"
OUTPUT_DIR = "output"
UPLOAD_DIR = "uploads"
REFERENCE_FACE_POSITION =  0
REFERENCE_FRAME_NUMBER = 107
OUTPUT_VIDEO_PRESENT = "ultrafast"
OUTPUT_VIDEO_QUALITY = "100"
FACE_DETECTOR_SCORE = "0.3"
FACE_SWAPPER_MODEL = "inswapper_128_fp16"

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
