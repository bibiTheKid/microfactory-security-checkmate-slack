# 📢 Channel Configuration Guide

## Why Post to a Channel?

Posting security checklist completions to a dedicated channel provides:

✅ **Team Visibility** - Everyone can see when the warehouse was secured  
✅ **Accountability** - Clear record of who completed the checklist  
✅ **Compliance Tracking** - Easy to review historical closures  
✅ **Missing Items Alerts** - Team can see if anything was skipped  

## Recommended Channel Setup

### Option 1: Dedicated Security Channel (Recommended)

Create a dedicated channel for security-related activities:

1. **Create the channel:**
   - In Slack, click the **+** next to "Channels"
   - Name it `#security` or `#warehouse-closing`
   - Add a description: "Security checklist completions and warehouse closing procedures"
   - Make it **public** so all team members can see

2. **Invite the bot:**
   ```
   /invite @Security Checkmate
   ```

3. **Get the Channel ID:**
   - Right-click on the channel name
   - Select **"View channel details"**
   - Scroll to the bottom
   - Copy the **Channel ID** (e.g., `C01234567890`)

4. **Add to `.env`:**
   ```
   SLACK_CHANNEL_ID=C01234567890
   ```

### Option 2: Existing Operations Channel

Use an existing channel like `#operations` or `#general`:

1. **Invite the bot to the channel:**
   ```
   /invite @Security Checkmate
   ```

2. **Get the Channel ID:**
   - Right-click on the channel name → **"View channel details"**
   - Copy the Channel ID from the bottom

3. **Add to `.env`:**
   ```
   SLACK_CHANNEL_ID=C01234567890
   ```

## How to Get a Channel ID

### Method 1: Via Channel Details (Easiest)

1. Right-click on the channel name in Slack
2. Click **"View channel details"**
3. Scroll all the way to the bottom
4. You'll see the Channel ID (looks like `C01234567890`)
5. Click to copy it

### Method 2: Via Browser URL

1. Open Slack in a web browser
2. Navigate to the channel
3. Look at the URL: `https://app.slack.com/client/T.../C01234567890`
4. The part starting with `C` is your Channel ID

### Method 3: Via Slack API

If you have the Slack CLI installed:

```bash
slack api conversations.list
```

Look for your channel name in the output and find its `id` field.

## Verifying Your Setup

After configuring the channel:

1. **Check the bot is in the channel:**
   - Look for "Security Checkmate" in the channel members list
   - If not there, run: `/invite @Security Checkmate`

2. **Test the configuration:**
   - Run `/security-check`
   - Complete the checklist
   - Check that the summary appears in your configured channel

3. **Check for errors:**
   - If the message doesn't appear, check the app logs
   - Common issues:
     - Bot not invited to channel
     - Wrong Channel ID in `.env`
     - Bot missing `chat:write` permission

## Example Channel Message

When someone completes the checklist, the channel will receive a message like:

```
Security Checkmate APP  6:30 PM

✅ Security Check Complete!

Completed by: @philippe
Time: January 15, 2025 at 6:30 PM

Items checked: 12/12

🎉 All security items have been checked! The warehouse is secure.

─────────────────────────────────────

Completed items:
✓ 💡 Turn off the lights in the wood workshop
✓ 🔌 Unplug all wood workshop machines
✓ 🚪 Close and lock the wood workshop door
... (and 9 more)
```

## Best Practices

### 📌 Pin Important Messages

Pin the first completion message as a reference:
- Hover over a message
- Click the three dots **⋮**
- Select **"Pin to channel"**

### 🔔 Channel Notifications

Set up notifications for the security channel:
- Click the channel name
- Click **"Notifications"**
- Choose your preference (e.g., "All new messages")

### 📊 Review Regularly

- Check the channel weekly to ensure daily closures are happening
- Look for patterns of missing items
- Address any recurring issues

### 🔒 Channel Permissions

- Keep the channel **public** for transparency
- Or make it **private** if security details are sensitive
- Ensure all relevant team members have access

## Troubleshooting

### "Bot can't post to channel"

**Error:** `not_in_channel` or `channel_not_found`

**Solution:**
1. Invite the bot: `/invite @Security Checkmate`
2. Verify the Channel ID is correct
3. Restart the app

### "Message posted to DM instead of channel"

**Cause:** `SLACK_CHANNEL_ID` not set in `.env`

**Solution:**
1. Add the Channel ID to `.env`
2. Restart the app: `npm start`

### "Invalid channel ID"

**Cause:** Wrong format or typo in Channel ID

**Solution:**
1. Channel IDs start with `C` (e.g., `C01234567890`)
2. Don't use the channel name (e.g., `#security`)
3. Copy the ID directly from Slack

## Changing the Channel

To change which channel receives the summaries:

1. Invite the bot to the new channel
2. Get the new Channel ID
3. Update `SLACK_CHANNEL_ID` in `.env`
4. Restart the app

The bot will immediately start posting to the new channel.

---

**Need more help?** Check the main [README.md](README.md) or [QUICKSTART.md](QUICKSTART.md)

