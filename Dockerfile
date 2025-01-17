FROM python:3.12

ENV GRADIO_SERVER_NAME=0.0.0.0
ENV PIP_BREAK_SYSTEM_PACKAGES=1

WORKDIR /app

# Combine apt commands to reduce layers
RUN apt-get update && \
    apt-get install -y curl ffmpeg

# Copy files
COPY facefusion/ ./facefusion/
COPY target_video/ ./target_video/

# Install requirements
WORKDIR /app/facefusion
RUN pip install -r requirements.txt

# Run installer
RUN python facefusion/install.py --onnxruntime default --skip-conda