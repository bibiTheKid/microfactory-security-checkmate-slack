# 🏭 MicroFactory Security Checkmate

A beautiful Slack app for managing the security checklist when closing the MicroFactory warehouse in Brussels. This app helps woodworkers and metalworkers ensure all security points are checked before leaving.

## ✨ Features

- 🏠 Complete the checklist directly from the sidebar
- 🎨 Beautiful UI built with Slack's Block Kit framework
- ✅ Real-time completion tracking with checkboxes
- ⚡ Automatically posts to channel when you check the last item
- 📢 Summary report showing completed and missing items in channel
- 🔔 Slash command `/security-check` for modal access
- 👥 Team accountability through public channel posting
- 📱 Works on mobile and desktop

## ✅ Security Checklist Items

The app includes checks for the wood workshop, the metal workshop, the common areas, and the parking.

You can customize the checklist items by editing the `src/checklist-data.js` file and the `src/i18n.js` file.

## 🚀 Setup the app in your Slack workspace

### Prerequisites

- Node.js 18.0.0 or higher
- A Slack workspace where you can install apps
- npm or yarn package manager

### Step 1: Create a Slack App

1. Go to [https://api.slack.com/apps](https://api.slack.com/apps)
2. Click **"Create New App"**
3. Select **"From a manifest"**
4. Choose your workspace
5. Copy and paste the contents of `manifest.json` from this repository
6. Click **"Create"**
7. Review the app configuration and click **"Install to Workspace"**

### Step 2: Get Your Tokens and Channel ID

After creating the app, you need to gather three tokens and configure the channel:

#### Bot Token

1. Go to **"OAuth & Permissions"** in the left sidebar
2. Copy the **"Bot User OAuth Token"** (starts with `xoxb-`)

#### App-Level Token

1. Go to **"Basic Information"** in the left sidebar
2. Scroll to **"App-Level Tokens"**
3. Click **"Generate Token and Scopes"**
4. Name it "Socket Mode" and add the `connections:write` scope
5. Click **"Generate"**
6. Copy the token (starts with `xapp-`)

#### Signing Secret

1. Go to **"Basic Information"** in the left sidebar
2. Scroll to **"App Credentials"**
3. Copy the **"Signing Secret"**

#### Channel ID

1. In Slack, navigate to the channel where you want completion summaries posted (e.g., `#security` or `#warehouse`)
2. Right-click on the channel name and select **"View channel details"**
3. Scroll to the bottom of the details panel
4. Copy the **Channel ID** (it looks like `C01234567890`)
5. **Important:** Make sure to invite the bot to this channel by typing `/invite @Security Checkmate` in the channel

### Step 3: Configure Environment Variables

1. Copy the `.env.sample` file to `.env`:

   ```bash
   cp .env.sample .env
   ```

2. Edit `.env` and add your tokens and channel ID:
   ```
   SLACK_BOT_TOKEN=xoxb-your-bot-token-here
   SLACK_APP_TOKEN=xapp-your-app-token-here
   SLACK_SIGNING_SECRET=your-signing-secret-here
   SLACK_CHANNEL_ID=C01234567890
   ```

### Step 4: Install Dependencies

```bash
npm install
```

### Step 5: Run the App

```bash
npm start
```

You should see:

```
⚡️ MicroFactory Security Checkmate app is running!
🏭 Ready to help secure the warehouse!
```

## 📱 How to Use

### Accessing the App

**Option 1: Via App Home in Sidebar (Recommended)**

1. Look for **"Security Checkmate"** in the left sidebar under "Apps"
2. Click on it to see the App Home with the interactive checklist
3. Check off items directly in the App Home as you complete them
4. When you check the last item, it automatically submits! ⚡
5. Or click **"Complete ✓"** to submit manually at any time

**Option 2: Via Slash Command (Modal)**

1. In any Slack channel or DM, type:

   ```
   /security-check
   ```

2. A modal will open with the complete security checklist
3. Check off items as you complete them
4. When you check the last item, it automatically submits! ⚡
5. Or click **"Complete ✓"** to submit manually at any time

### What Happens After Submission

A summary message will be posted to the configured channel showing:

- Who completed the checklist
- When it was completed
- Which items were checked
- Any missing items (if applicable)

4. The message will be visible to everyone in the channel for accountability

## 🛠️ Development

### Running in Development Mode

For auto-restart on file changes:

```bash
npm run dev
```

### Project Structure

```
MicroFactory-security-checkmate-slack/
├── src                    # Source code of the app
|   ├── app.js             # Main application file
|   ├── blocks.js          # Block Kit UI builders
|   ├── checklist-data.js  # Security checklist items
|   ├── i18n.js            # Translations for multi-language support
├── manifest.json          # Slack app manifest
├── package.json           # Node.js dependencies
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

### Photos

The photos are stored on https://imagekit.io/

### Customizing the Checklist

To add, remove, or modify checklist items, edit `checklist-data.js`:

```javascript
{
  id: 'unique_id',
  category: 'Category Name',
  text: '🔔 Your checklist item text',
  emoji: '🔔'
}
```

Then, add, remove, or modify the translation in `i18n.js`:

```javascript
const translations = {
  en: {
    // ... other translations
    items: {
      unique_id: {
        text: "Your checklist item text",
        description: "A longer description of the item",
      },
    },
  },

  fr: {
    // ... other translations
    items: {
      unique_id: {
        text: "Your checklist item text",
        description: "A longer description of the item",
      },
    },
  },

  nl: {
    // ... other translations
    items: {
      unique_id: {
        text: "Your checklist item text",
        description: "A longer description of the item",
      },
    },
  },
};
```

## Run with Docker Compose (Recommended)

### 1. Create `.env` file

```bash
cp .env.sample .env
```

Edit `.env` with your Slack credentials:

```
SLACK_BOT_TOKEN=xoxb-...
SLACK_APP_TOKEN=xapp-...
SLACK_SIGNING_SECRET=...
SLACK_CHANNEL_ID=C...
```

### 2. Build and Run

```bash
# Build the image
docker-compose build

# Start the container
docker-compose up -d

# View logs
docker-compose logs -f security-checkmate-slack-app

# Stop the container
docker-compose down
```

## 📚 Built With

- [Slack Bolt for JavaScript](https://slack.dev/bolt-js/) - Slack app framework
- [Slack Block Kit](https://api.slack.com/block-kit) - UI framework
- [Node.js](https://nodejs.org/) - Runtime environment

## 📝 License

MIT

## 🤝 Contributing

This app is designed for MicroFactory's specific needs, but feel free to fork and adapt it for your own use case!

## 💡 Tips

- Create a dedicated channel like `#security` or `#warehouse-closing` for completion summaries
- Make sure the bot is invited to the configured channel
- Customize the checklist items based on your warehouse's specific needs

---

Made with ❤️ for MicroFactory Brussels - Supporting the circular economy through shared workshop spaces.

```

```
