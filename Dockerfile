FROM nvidia/cuda:12.8.0-cudnn-runtime-ubuntu24.04

ARG RUNTIME_BRANCH=feat/service-endpoint
# Environment variables
ENV GRADIO_SERVER_NAME=0.0.0.0 \
    PIP_BREAK_SYSTEM_PACKAGES=1 \
    NVIDIA_VISIBLE_DEVICES=all \
    CUDA_VISIBLE_DEVICES=0

WORKDIR /facefusion

# System dependencies
RUN apt-get update && \
    apt-get install -y \
    curl \
    git \
    ffmpeg \
    python3-pip \
    python3.12-venv \
    ocl-icd-opencl-dev \
    libva-dev \
    nvidia-opencl-dev && \
    rm -rf /var/lib/apt/lists/*

# Copy application files
RUN git clone https://github.com/ReallyGreatTech/papya-global.git --branch ${RUNTIME_BRANCH} --single-branch .

# Install Python requirements
RUN cd facefusion && python3 install.py --onnxruntime cuda --skip-conda