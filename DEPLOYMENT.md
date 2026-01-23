# Deployment Guide

This guide explains how to set up automated Docker deployment to your VPS.

## Prerequisites

- GitHub repository with this code
- VPS with Docker installed
- SSH access to your VPS
- GitHub Secrets configured

## Setup Steps

### 1. VPS Preparation

SSH into your VPS and run:

```bash
# Create app directory
mkdir -p /opt/microfactory-security-checkmate
cd /opt/microfactory-security-checkmate

# Create .env file with your Slack credentials
cat > .env << EOF
SLACK_BOT_TOKEN=xoxb-your-token
SLACK_APP_TOKEN=xapp-your-token
SLACK_SIGNING_SECRET=your-secret
SLACK_CHANNEL_ID=C1234567890
PORT=3000
EOF

# Make deploy script executable
chmod +x deploy.sh
```

### 2. GitHub Secrets Configuration

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

- `VPS_HOST`: Your VPS IP or domain (e.g., `192.168.1.100`)
- `VPS_USER`: SSH username (e.g., `ubuntu`)
- `VPS_SSH_KEY`: Your private SSH key (paste entire key)
- `VPS_APP_PATH`: App directory path (e.g., `/opt/microfactory-security-checkmate`)

### 3. SSH Key Setup

Generate SSH key pair on your local machine:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/vps_deploy -C "github-deploy"
```

Add public key to VPS:

```bash
ssh-copy-id -i ~/.ssh/vps_deploy.pub user@vps-ip
```

Copy private key content to GitHub secret `VPS_SSH_KEY`.

### 4. Automatic Deployment

The workflow automatically deploys when you push to `main` branch. You can also manually trigger it via GitHub Actions.

## Manual Deployment

To deploy manually on your VPS:

```bash
cd /opt/microfactory-security-checkmate
./deploy.sh ghcr.io/your-org/repo:main
```

## Monitoring

Check container status:

```bash
docker ps -a
docker logs microfactory-security-checkmate
```

View health status:

```bash
docker inspect microfactory-security-checkmate --format='{{.State.Health.Status}}'
```

