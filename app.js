require("dotenv").config();
const { App } = require("@slack/bolt");
const {
  buildChecklistModal,
  buildCompletionMessage,
  buildHelpMessage,
} = require("./blocks");

// Initialize the Bolt app
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000,
});

/**
 * Slash command: /security-check
 * Opens the security checklist modal
 */
app.command("/security-check", async ({ command, ack, client }) => {
  await ack();

  try {
    const modal = buildChecklistModal();

    await client.views.open({
      trigger_id: command.trigger_id,
      view: modal,
    });
  } catch (error) {
    console.error("Error opening modal:", error);
  }
});

/**
 * Handle modal submission
 */
app.view("security_checklist_modal", async ({ ack, body, view, client }) => {
  await ack();

  try {
    // Extract all checked items from the modal state
    const values = view.state.values;
    const checkedItems = [];

    // Iterate through all the checkbox actions
    Object.keys(values).forEach((blockId) => {
      Object.keys(values[blockId]).forEach((actionId) => {
        const selectedOptions =
          values[blockId][actionId].selected_options || [];
        selectedOptions.forEach((option) => {
          checkedItems.push(option.value);
        });
      });
    });

    const userId = body.user.id;

    // Build completion message
    const completionBlocks = buildCompletionMessage(
      checkedItems,
      `<@${userId}>`
    );

    // Get the configured channel ID from environment variables
    const channelId = process.env.SLACK_CHANNEL_ID;

    if (!channelId) {
      console.error("SLACK_CHANNEL_ID is not configured in .env file");
      // Fallback to DM if channel is not configured
      await client.chat.postMessage({
        channel: userId,
        text: "⚠️ Security checklist completed, but no channel is configured. Please set SLACK_CHANNEL_ID in your .env file.",
        blocks: completionBlocks,
      });
      return;
    }

    // Post the completion message to the configured channel
    await client.chat.postMessage({
      channel: channelId,
      text: "Security checklist completed",
      blocks: completionBlocks,
    });

    console.log(
      `Security checklist completed by ${userId} and posted to channel ${channelId}`
    );
  } catch (error) {
    console.error("Error handling modal submission:", error);

    // Try to notify the user if posting to channel fails
    try {
      await client.chat.postMessage({
        channel: body.user.id,
        text: `⚠️ Error posting security checklist. Please make sure the bot is invited to the channel and has permission to post. Error: ${error.message}`,
      });
    } catch (dmError) {
      console.error("Failed to send error notification to user:", dmError);
    }
  }
});

/**
 * Handle checkbox interactions (optional - for real-time feedback)
 */
app.action(/^checklist_.*/, async ({ ack }) => {
  // Acknowledge the action immediately
  await ack();
  // No additional action needed - checkboxes update automatically
});

/**
 * App home opened event - show help message
 */
app.event("app_home_opened", async ({ event, client }) => {
  try {
    const helpBlocks = buildHelpMessage();

    await client.views.publish({
      user_id: event.user,
      view: {
        type: "home",
        blocks: helpBlocks,
      },
    });
  } catch (error) {
    console.error("Error publishing home view:", error);
  }
});

/**
 * Handle app mentions - provide help
 */
app.event("app_mention", async ({ event, client }) => {
  try {
    await client.chat.postMessage({
      channel: event.channel,
      text: "Hi! Use `/security-check` to open the security checklist for closing the warehouse.",
    });
  } catch (error) {
    console.error("Error responding to mention:", error);
  }
});

/**
 * Handle checkbox interactions in App Home
 * Store the state in memory (in production, you might want to use a database)
 */
const homeChecklistState = new Map();

app.action(/^home_checklist_.*/, async ({ ack, body, action }) => {
  await ack();

  // Store the selected items for this user
  const userId = body.user.id;
  if (!homeChecklistState.has(userId)) {
    homeChecklistState.set(userId, new Map());
  }

  const userState = homeChecklistState.get(userId);

  // Get the category from the action_id
  const category = action.action_id;

  // Update the state for this specific category
  if (action.selected_options && action.selected_options.length > 0) {
    // Store the selected items for this category
    userState.set(
      category,
      action.selected_options.map((opt) => opt.value)
    );
  } else {
    // No items selected for this category, remove it
    userState.delete(category);
  }
});

/**
 * Handle submit button from App Home
 */
app.action("home_submit_checklist", async ({ ack, body, client }) => {
  await ack();

  const userId = body.user.id;
  const userState = homeChecklistState.get(userId) || new Map();

  // Flatten all selected items from all categories into a single array
  const checkedItems = [];
  userState.forEach((items) => {
    checkedItems.push(...items);
  });

  // Build completion message
  const completionBlocks = buildCompletionMessage(checkedItems, userId);

  try {
    // Get the configured channel ID from environment variables
    const channelId = process.env.SLACK_CHANNEL_ID;

    if (!channelId) {
      console.error("SLACK_CHANNEL_ID is not configured in .env file");
      // Fallback to DM if channel is not configured
      await client.chat.postMessage({
        channel: userId,
        text: "⚠️ Security checklist completed, but no channel is configured. Please set SLACK_CHANNEL_ID in your .env file.",
        blocks: completionBlocks,
      });
      return;
    }

    // Post the completion message to the configured channel
    await client.chat.postMessage({
      channel: channelId,
      text: "Security checklist completed",
      blocks: completionBlocks,
    });

    // Clear the user's state
    homeChecklistState.delete(userId);

    // Update the App Home to show a success message and reset the form
    const helpBlocks = buildHelpMessage();
    await client.views.publish({
      user_id: userId,
      view: {
        type: "home",
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "✅ *Checklist submitted successfully!*\n\nThe completion summary has been posted to the team channel.",
            },
          },
          {
            type: "divider",
          },
          ...helpBlocks,
        ],
      },
    });

    console.log(`✅ Checklist completed by user ${userId} via App Home`);
  } catch (error) {
    console.error("Error posting completion message:", error);

    // Notify the user of the error
    await client.chat.postMessage({
      channel: userId,
      text: `❌ Error posting to channel: ${error.message}\n\nMake sure the bot is invited to the channel and has permission to post.`,
    });
  }
});

/**
 * Start the app
 */
(async () => {
  try {
    await app.start();
    console.log("⚡️ Microfactory Security Checkmate app is running!");
    console.log("🏭 Ready to help secure the warehouse!");
  } catch (error) {
    console.error("Failed to start app:", error);
    process.exit(1);
  }
})();
