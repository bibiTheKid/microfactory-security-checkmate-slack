# 🏭 Microfactory Security Checkmate

A beautiful Slack app for managing the security checklist when closing the Microfactory warehouse in Brussels. This app helps woodworkers and metalworkers ensure all security points are checked before leaving.

## ✨ Features

- 📋 **Interactive checklist in App Home** - Complete the checklist directly from the sidebar
- 🎨 Beautiful UI built with Slack's Block Kit framework
- ✅ Real-time completion tracking with checkboxes
- ⚡ **Auto-submit when all items checked** - Automatically posts to channel when you check the last item!
- 📊 Summary report showing completed and missing items
- 📢 **Posts completion summary to a configurable channel for team visibility**
- 🔔 Slash command `/security-check` for modal access
- 🏠 **App Home in left sidebar** - Always accessible, no need to remember commands
- 👥 Team accountability through public channel posting
- 📱 Works on mobile and desktop
- 💾 Remembers your selections as you check items

## 🔧 Security Checklist Items

The app includes checks for:

### Wood Workshop

- 💡 Turn off the lights
- 🔌 Unplug all machines
- 🚪 Close and lock the door
- 🪟 Close all windows

### Metal Workshop

- 💡 Turn off the lights
- 🔌 Unplug all machines
- 🚪 Close and lock the door
- 🪟 Close all windows

### Common Areas

- 💡 Turn off all common area lights
- 🌡️ Adjust heating/cooling to night mode
- 🔐 Lock the main entrance door

### Security

- 🚨 Activate the security alarm

## 🚀 Setup Instructions

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

> **📝 Already created the app?** If you created the app before the App Home feature was added, see [UPDATE_MANIFEST.md](UPDATE_MANIFEST.md) for instructions on updating your existing app.

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
⚡️ Microfactory Security Checkmate app is running!
🏭 Ready to help secure the warehouse!
```

## 📱 How to Use

### Accessing the App

**Option 1: Via App Home in Sidebar (Recommended)**

1. Look for **"Security Checkmate"** in the left sidebar under "Apps"
2. Click on it to see the App Home with the **interactive checklist**
3. Check off items directly in the App Home as you complete them
4. **When you check the last item, it automatically submits!** ⚡
5. Or click **"Complete ✓"** to submit manually at any time

**Option 2: Via Slash Command (Modal)**

1. In any Slack channel or DM, type:

   ```
   /security-check
   ```

2. A modal will open with the complete security checklist
3. Check off items as you complete them
4. **When you check the last item, it automatically submits!** ⚡
5. Or click **"Complete ✓"** to submit manually at any time

### What Happens After Submission

A summary message will be posted to the configured channel showing:

- Who completed the checklist
- When it was completed
- Which items were checked
- Any missing items (if applicable)

4. The message will be visible to everyone in the channel for accountability

### Getting Help

- Mention the bot: `@Security Checkmate`
- Visit the App Home tab

## 🛠️ Development

### Running in Development Mode

For auto-restart on file changes:

```bash
npm run dev
```

### Project Structure

```
microfactory-security-checkmate-slack/
├── app.js                 # Main application file
├── blocks.js              # Block Kit UI builders
├── checklist-data.js      # Security checklist items
├── manifest.json          # Slack app manifest
├── package.json           # Node.js dependencies
├── .env.sample            # Environment variables template
├── .gitignore            # Git ignore rules
└── README.md             # This file
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

## 📚 Built With

- [Slack Bolt for JavaScript](https://slack.dev/bolt-js/) - Slack app framework
- [Slack Block Kit](https://api.slack.com/block-kit) - UI framework
- [Node.js](https://nodejs.org/) - Runtime environment

## 🔒 Security & Privacy

- All tokens are stored locally in `.env` (never committed to git)
- Socket Mode is used (no public endpoints needed)
- The app only has access to channels where it's invited
- No data is stored or logged externally

## 📝 License

MIT

## 🤝 Contributing

This app is designed for Microfactory's specific needs, but feel free to fork and adapt it for your own use case!

## 💡 Tips

- Run the checklist at the end of each day
- Create a dedicated channel like `#security` or `#warehouse-closing` for completion summaries
- Make sure the bot is invited to the configured channel
- Customize the checklist items based on your warehouse's specific needs
- Use the completion summary to track security compliance over time
- Review the channel history to ensure all closing procedures are being followed

---

Made with ❤️ for Microfactory Brussels - Supporting the circular economy through shared workshop spaces.
