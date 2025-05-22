#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
sudo apt update
sudo apt upgrade -y
sudo apt autoremove -y


# install aws cli
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# install Docker and configure user
sudo curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh
sudo usermod -aG docker ubuntu
newgrp docker

sudo apt install -y dkms linux-headers-aws linux-modules-extra-aws unzip gcc make libglvnd-dev pkg-config

DISTRO=$(. /etc/os-release;echo $ID$VERSION_ID | sed -e 's/\.//g')
if (arch | grep -q x86); then
  ARCH=x86_64
else
  ARCH=sbsa
fi
cd /tmp
curl -L -O https://developer.download.nvidia.com/compute/cuda/repos/$DISTRO/$ARCH/cuda-keyring_1.1-1_all.deb
sudo apt install -y ./cuda-keyring_1.1-1_all.deb
sudo apt update

sudo apt install -y cuda-drivers

sudo apt install -y cuda-toolkit

sudo apt install -y nvidia-container-toolkit

sudo nvidia-ctk runtime configure --runtime=docker

# Write new configuration to daemon.json
sudo tee /etc/docker/daemon.json > /dev/null <<EOF
{
    "runtimes": {
        "nvidia": {
            "runtimeArgs": [],
            "path": "/usr/bin/nvidia-container-runtime"
        }
    },
    "default-runtime": "nvidia"
}
EOF

sudo systemctl restart docker

sudo reboot
