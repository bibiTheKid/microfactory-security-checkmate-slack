#!/bin/bash

# Deployment script for Microfactory Security Checkmate Slack App
# Usage: ./deploy.sh <docker-image-uri>

set -e

IMAGE_URI="${1:-ghcr.io/your-org/microfactory-security-checkmate-slack:main}"
CONTAINER_NAME="microfactory-security-checkmate"
ENV_FILE=".env"

echo "🚀 Starting deployment of $IMAGE_URI"

# Check if .env file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "❌ Error: $ENV_FILE not found. Please create it with required environment variables."
    exit 1
fi

# Load environment variables
set -a
source "$ENV_FILE"
set +a

# Pull the latest image
echo "📥 Pulling Docker image..."
docker pull "$IMAGE_URI"

# Stop and remove existing container if running
if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    echo "🛑 Stopping existing container..."
    docker stop "$CONTAINER_NAME" || true
    docker rm "$CONTAINER_NAME" || true
fi

# Run the new container
echo "🐳 Starting new container..."
docker run -d \
    --name "$CONTAINER_NAME" \
    --restart unless-stopped \
    -p 3000:3000 \
    -e SLACK_BOT_TOKEN="$SLACK_BOT_TOKEN" \
    -e SLACK_APP_TOKEN="$SLACK_APP_TOKEN" \
    -e SLACK_SIGNING_SECRET="$SLACK_SIGNING_SECRET" \
    -e SLACK_CHANNEL_ID="$SLACK_CHANNEL_ID" \
    -e PORT=3000 \
    --health-cmd='node -e "require('"'"'http'"'"').get('"'"'http://localhost:3000/health'"'"', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"' \
    --health-interval=30s \
    --health-timeout=10s \
    --health-retries=3 \
    --health-start-period=5s \
    --log-driver json-file \
    --log-opt max-size=10m \
    --log-opt max-file=3 \
    "$IMAGE_URI"

echo "✅ Deployment successful!"
echo "📊 Container status:"
docker ps --filter "name=$CONTAINER_NAME"

# Cleanup old images (keep last 3)
echo "🧹 Cleaning up old images..."
docker image prune -f --filter "until=72h" || true

echo "✨ Done!"

