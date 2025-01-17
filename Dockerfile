FROM python:3.12

ENV GRADIO_SERVER_NAME=0.0.0.0
ENV PIP_BREAK_SYSTEM_PACKAGES=1

WORKDIR /facefusion

RUN apt-get update
RUN apt-get install curl -y
RUN apt-get install ffmpeg -y

COPY facefusion/ ./facefusion/
COPY target_video/ ./target_video/

# Install dependencies
RUN python facefusion/install.py --onnxruntime default --skip-conda