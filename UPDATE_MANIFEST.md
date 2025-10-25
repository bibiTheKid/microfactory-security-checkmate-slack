# 🔄 How to Update Your Slack App Manifest

Since you've already created the app, you need to update the manifest to enable the App Home feature and add the app to the left sidebar.

## Quick Update Steps

### Option 1: Update via Slack Web UI (Recommended)

1. **Go to your Slack app configuration:**
   - Visit https://api.slack.com/apps
   - Click on **"Microfactory Security Checkmate"**

2. **Update the App Manifest:**
   - Click **"App Manifest"** in the left sidebar
   - You'll see the current manifest in YAML or JSON format
   - Click **"JSON"** tab if not already selected
   - Replace the entire content with the updated `manifest.json` from this project
   - Click **"Save Changes"**

3. **Reinstall the app (if prompted):**
   - Slack may ask you to reinstall the app to apply the new permissions
   - Click **"Reinstall to Workspace"**
   - Authorize the new permissions

4. **Verify the app appears in sidebar:**
   - Open Slack
   - Look in the left sidebar under **"Apps"**
   - You should see **"Security Checkmate"** listed
   - Click it to see the App Home

### Option 2: Manual Configuration via UI

If you prefer to update settings manually instead of replacing the manifest:

1. **Enable App Home:**
   - Go to https://api.slack.com/apps
   - Select your app
   - Click **"App Home"** in the left sidebar
   - Under **"Show Tabs"**:
     - ✅ Enable **"Home Tab"**
     - ✅ Enable **"Messages Tab"**
     - ✅ Uncheck **"Allow users to send Slash commands and messages from the messages tab"** (optional)

2. **Subscribe to Events:**
   - Click **"Event Subscriptions"** in the left sidebar
   - Make sure **"Enable Events"** is ON
   - Under **"Subscribe to bot events"**, add:
     - `app_home_opened`
     - `app_mention`
   - Click **"Save Changes"**

3. **Reinstall if needed:**
   - If Slack prompts you to reinstall, click **"Reinstall to Workspace"**

## What Changed in the Manifest

### Added App Home Configuration

```json
"app_home": {
  "home_tab_enabled": true,
  "messages_tab_enabled": true,
  "messages_tab_read_only_enabled": false
}
```

This enables:
- **Home Tab** - A dedicated home screen for the app
- **Messages Tab** - Ability to DM the app
- **Read/Write Messages** - Users can interact with the app via DM

### Added Event Subscriptions

```json
"bot_events": [
  "app_home_opened",
  "app_mention"
]
```

This allows the app to:
- Show content when users open the App Home
- Respond when mentioned in channels

## Verifying the Update

### 1. Check the App Appears in Sidebar

1. Open Slack
2. Look at the left sidebar
3. Under **"Apps"** section, you should see **"Security Checkmate"**
4. If you don't see it, click **"Add apps"** and find it there

### 2. Test the App Home

1. Click on **"Security Checkmate"** in the sidebar
2. You should see a beautiful home screen with:
   - 🏭 Header with app name
   - 👋 Welcome message
   - 📋 List of all checklist items
   - 🚀 Instructions on how to use
   - 💡 Quick tips

### 3. Test the Slash Command

1. From the App Home or any channel, type `/security-check`
2. The checklist modal should open
3. Complete and submit to verify it posts to your channel

## Troubleshooting

### "App doesn't appear in sidebar"

**Possible causes:**
- App Home not enabled in manifest
- Need to reinstall the app
- Slack needs time to sync (wait 1-2 minutes)

**Solutions:**
1. Verify `app_home.home_tab_enabled` is `true` in manifest
2. Reinstall the app to workspace
3. Refresh Slack (Cmd+R on Mac, Ctrl+R on Windows)
4. Try clicking **"Add apps"** in the sidebar and search for "Security Checkmate"

### "App Home shows error or blank screen"

**Possible causes:**
- `app_home_opened` event not subscribed
- App not running (`npm start`)
- Error in the App Home handler

**Solutions:**
1. Make sure the app is running: `npm start`
2. Check that `app_home_opened` is in the bot_events list
3. Check the console logs for errors
4. Verify the manifest was saved correctly

### "Need to reinstall app" message

**This is normal!** When you add new permissions or events, Slack requires reinstallation.

**Steps:**
1. Click **"Reinstall to Workspace"** button
2. Review the permissions
3. Click **"Allow"**
4. The app will be updated with new features

### "Events not working"

**Possible causes:**
- Socket Mode not enabled
- App token not configured
- Events not subscribed in manifest

**Solutions:**
1. Verify Socket Mode is enabled in manifest: `"socket_mode_enabled": true`
2. Check `.env` has `SLACK_APP_TOKEN` configured
3. Restart the app: `npm start`
4. Check bot_events includes `app_home_opened` and `app_mention`

## What Users Will See

### Before Update
- App only accessible via `/security-check` command
- No dedicated app home
- Not visible in sidebar

### After Update
- ✅ App appears in left sidebar under "Apps"
- ✅ Click to see beautiful App Home with instructions
- ✅ Can still use `/security-check` from anywhere
- ✅ Can DM the app for help
- ✅ Better discoverability and user experience

## Benefits of App Home

1. **Easy Access** - Users can find the app in the sidebar
2. **Self-Service Help** - Instructions always available in App Home
3. **Professional Look** - Dedicated space for your app
4. **Better Onboarding** - New users can learn how to use the app
5. **Quick Reference** - See all checklist items at a glance

## Next Steps

After updating the manifest:

1. ✅ Restart your app: `npm start`
2. ✅ Open Slack and find the app in the sidebar
3. ✅ Click on it to see the App Home
4. ✅ Test the `/security-check` command
5. ✅ Share with your team!

---

**Need help?** Check the main [README.md](README.md) or [QUICKSTART.md](QUICKSTART.md)

