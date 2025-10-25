# 🚀 Quick Start Guide

Get your Microfactory Security Checkmate app running in 5 minutes!

## Step-by-Step Setup

### 1️⃣ Install Dependencies (1 minute)

```bash
npm install
```

### 2️⃣ Create Your Slack App (2 minutes)

1. Visit: https://api.slack.com/apps
2. Click **"Create New App"** → **"From a manifest"**
3. Select your workspace
4. Copy-paste the entire `manifest.json` file
5. Click **"Create"** → **"Install to Workspace"**

### 3️⃣ Get Your Tokens and Channel ID (2 minutes)

**Bot Token:**

- Go to **OAuth & Permissions**
- Copy the **Bot User OAuth Token** (starts with `xoxb-`)

**App Token:**

- Go to **Basic Information**
- Scroll to **App-Level Tokens**
- Click **"Generate Token and Scopes"**
- Name: "Socket Mode", Scope: `connections:write`
- Copy the token (starts with `xapp-`)

**Signing Secret:**

- Go to **Basic Information**
- Copy the **Signing Secret**

**Channel ID:**

- In Slack, go to the channel where you want summaries posted (e.g., `#security`)
- Right-click the channel → **View channel details**
- Scroll to bottom and copy the **Channel ID** (e.g., `C01234567890`)
- **Important:** Invite the bot to this channel: `/invite @Security Checkmate`

### 4️⃣ Configure Environment (30 seconds)

```bash
cp .env.sample .env
```

Edit `.env` with your tokens and channel ID:

```
SLACK_BOT_TOKEN=xoxb-...
SLACK_APP_TOKEN=xapp-...
SLACK_SIGNING_SECRET=...
SLACK_CHANNEL_ID=C01234567890
```

### 5️⃣ Run the App (30 seconds)

```bash
npm start
```

You should see:

```
⚡️ Microfactory Security Checkmate app is running!
🏭 Ready to help secure the warehouse!
```

## 🎉 Test It Out!

1. Open Slack
2. Make sure the bot is in your configured channel: `/invite @Security Checkmate`
3. Type `/security-check` in any channel
4. Check off the security items
5. Click **"Complete ✓"**
6. See the completion summary posted in your configured channel!

## 🆘 Troubleshooting

**"Error: An API error occurred: invalid_auth"**

- Check that your tokens are correct in `.env`
- Make sure there are no extra spaces

**"Command not found: /security-check"**

- Wait a minute for Slack to sync
- Try reinstalling the app to your workspace

**"App won't start"**

- Make sure Node.js 18+ is installed: `node --version`
- Delete `node_modules` and run `npm install` again

**"Bot can't post to channel"**

- Make sure you invited the bot to the channel: `/invite @Security Checkmate`
- Verify the channel ID is correct in `.env`
- Check that the bot has `chat:write` permission (should be in manifest)

## 📞 Need Help?

Check the full [README.md](README.md) for detailed documentation.
