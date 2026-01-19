require("dotenv").config();
const { App } = require("@slack/bolt");
const express = require("express");
const {
  buildChecklistModal,
  buildCompletionMessage,
  buildAppHomeView,
  buildInfoModal,
} = require("./blocks");
const { checklistItems } = require("./checklist-data");
const { getUserLanguage, getTranslations } = require("./i18n");

// Create Express app for health checks
const expressApp = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint for Render
expressApp.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

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
    // Get user's language
    const lang = await getUserLanguage(client, command.user_id);
    console.log(`[app.js] Language detected: ${lang}`);
    const modal = buildChecklistModal(lang);

    await client.views.open({
      trigger_id: command.trigger_id,
      view: modal,
    });
  } catch (error) {
    console.error("Error opening modal:", error);
  }
});

/**
 * App home opened event - show App Home view
 */
app.event("app_home_opened", async ({ event, client }) => {
  try {
    // Get user's language
    const lang = await getUserLanguage(client, event.user);
    const appHomeBlocks = buildAppHomeView({ lang });

    await client.views.publish({
      user_id: event.user,
      view: {
        type: "home",
        blocks: appHomeBlocks,
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
 * Handle modal submission
 */
app.view("modal_submit_checklist", async ({ ack, body, view, client }) => {
  await ack();

  // Extract all checked items from the modal state
  const values = view.state.values;
  const checkedItems = [];

  // Iterate through all the checkbox actions
  Object.keys(values).forEach((blockId) => {
    Object.keys(values[blockId]).forEach((actionId) => {
      const selectedOptions = values[blockId][actionId].selected_options || [];
      selectedOptions.forEach((option) => {
        checkedItems.push(option.value);
      });
    });
  });

  const userId = body.user.id;

  // Use shared function to post completion
  await postCompletionToChannel(checkedItems, userId, client);
});

/**
 * Handle App Home submission
 */
app.action("home_submit_checklist", async ({ ack, body, client }) => {
  await ack();

  const userId = body.user.id;
  const userState = homeChecklistState.get(userId) || new Set();

  // Convert Set to array
  const checkedItems = Array.from(userState);

  // Get user's language
  const lang = await getUserLanguage(client, userId);
  const t = getTranslations(lang);

  // Use shared function to post completion
  const success = await postCompletionToChannel(
    checkedItems,
    userId,
    client,
    lang
  );

  // Clear the user's state
  homeChecklistState.delete(userId);

  // Update the App Home to show a success message at the bottom
  const successMessage = success ? t.manualSubmitSuccess : t.submitError;

  const appHomeBlocks = buildAppHomeView({ lang, successMessage });

  await client.views.publish({
    user_id: userId,
    view: {
      type: "home",
      blocks: appHomeBlocks,
    },
  });

  console.log(`✅ Checklist manually submitted by user ${userId} via App Home`);
});

/**
 * Handle checkbox interactions in modal - with auto-submit
 */
app.action(/^modal_checkbox_.*/, async ({ ack, body, action, client }) => {
  await ack();

  const userId = body.user.id;

  // Get user's language
  const lang = await getUserLanguage(client, userId);
  const t = getTranslations(lang);

  // Use shared checkbox handler with modal-specific callback
  await handleCheckboxAction(
    userId,
    action,
    client,
    modalChecklistState,
    "modal",
    lang,
    async () => {
      // Callback to update modal with success message after auto-submit
      try {
        await client.views.update({
          view_id: body.view.id,
          view: {
            type: "modal",
            title: {
              type: "plain_text",
              text: t.successTitle,
              emoji: true,
            },
            close: {
              type: "plain_text",
              text: t.closeButton,
              emoji: true,
            },
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: t.modalSuccess,
                },
              },
            ],
          },
        });
        console.log(`Modal updated with success message for user ${userId}`);
      } catch (error) {
        console.error("Error updating modal on auto-submit:", error);
      }
    }
  );
});

/**
 * Handle checkbox interactions in App Home - with auto-submit
 */
app.action(/^home_checkbox_.*/, async ({ ack, body, action, client }) => {
  await ack();

  const userId = body.user.id;

  // Get user's language
  const lang = await getUserLanguage(client, userId);
  const t = getTranslations(lang);

  // Use shared checkbox handler with App Home-specific callback
  await handleCheckboxAction(
    userId,
    action,
    client,
    homeChecklistState,
    "app_home",
    lang,
    async () => {
      // Callback to update App Home UI after auto-submit
      console.log(
        "[app.js] Auto-submit callback triggered - updating App Home with success message"
      );
      const appHomeBlocks = buildAppHomeView({
        lang,
        successMessage: t.autoSubmitSuccess,
      });

      await client.views.publish({
        user_id: userId,
        view: {
          type: "home",
          blocks: appHomeBlocks,
        },
      });
      console.log("[app.js] App Home updated with success message");
    }
  );
});

/**
 * Handle info button clicks - opens modal with detailed information
 */
app.action(/^item_info_.*/, async ({ ack, body, action, client }) => {
  await ack();

  try {
    // Extract item ID from action_id (format: "item_info_<item_id>")
    const itemId = action.action_id.replace("item_info_", "");

    // Find the item in the checklist
    const item = checklistItems.find((i) => i.id === itemId);

    if (!item) {
      console.error(`Item not found: ${itemId}`);
      return;
    }

    // Get user's language
    const lang = await getUserLanguage(client, body.user.id);

    // Build and open the info modal
    const infoModal = buildInfoModal(item, lang);

    await client.views.open({
      trigger_id: body.trigger_id,
      view: infoModal,
    });

    console.log(`Info modal opened for item: ${itemId}`);
  } catch (error) {
    console.error("Error opening info modal:", error);
  }
});

/**
 * State management for modal checkboxes
 * Store the state in memory (in production, you might want to use a database)
 */
const modalChecklistState = new Map();

/**
 * State management for App Home checkboxes
 */
const homeChecklistState = new Map();

/**
 * Shared function to handle checkbox state updates and auto-submit
 * @param {string} userId - User ID
 * @param {Object} action - Action object from Slack
 * @param {Object} client - Slack client
 * @param {Map} stateMap - State map to use (modal or home)
 * @param {string} source - Source identifier for logging ("modal" or "app_home")
 * @param {string} lang - Language code (en, fr, nl)
 * @param {Function} onAutoSubmit - Optional callback after auto-submit
 * @returns {Promise<boolean>} - True if auto-submitted, false otherwise
 */
async function handleCheckboxAction(
  userId,
  action,
  client,
  stateMap,
  source,
  lang = "en",
  onAutoSubmit = null
) {
  // Initialize user state if needed (now using Set instead of Map)
  if (!stateMap.has(userId)) {
    stateMap.set(userId, new Set());
  }

  const userState = stateMap.get(userId);

  // Extract item ID from action_id (format: "checklist_<item_id>" or "home_checklist_<item_id>")
  const itemId = action.action_id.replace(/^(home_)?(modal_)?checkbox_/, "");

  // Update the state for this specific item
  if (action.selected_options && action.selected_options.length > 0) {
    // Item is checked
    userState.add(itemId);
  } else {
    // Item is unchecked
    userState.delete(itemId);
  }

  // Check if all items are now checked
  const checkedItems = Array.from(userState);
  const totalItems = checklistItems.length;
  const allChecked = checkedItems.length === totalItems;

  console.log(
    `[handleCheckboxAction] ${source}: ${checkedItems.length}/${totalItems} items checked`
  );

  // If all items are checked, automatically submit
  if (allChecked) {
    console.log(
      `All items checked in ${source} by user ${userId}, auto-submitting...`
    );

    // Post completion to channel
    await postCompletionToChannel(checkedItems, userId, client, lang);

    // Clear state
    stateMap.delete(userId);

    // Call optional callback (for App Home to update UI)
    if (onAutoSubmit) {
      await onAutoSubmit();
    }

    console.log(`Auto-submitted from ${source} for user ${userId}`);
    return true;
  }

  return false;
}

/**
 * Shared function to post completion message to channel
 * @param {Array} checkedItems - Array of checked item IDs
 * @param {string} userId - User ID who completed the checklist
 * @param {Object} client - Slack client
 * @param {string} lang - Language code (en, fr, nl)
 * @returns {Promise<boolean>} - True if successful, false otherwise
 */
async function postCompletionToChannel(
  checkedItems,
  userId,
  client,
  lang = "en"
) {
  try {
    // Build completion message
    const completionBlocks = buildCompletionMessage(
      checkedItems,
      `<@${userId}>`,
      lang
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
      return false;
    }

    // Post the completion message to the configured channel
    await client.chat.postMessage({
      channel: channelId,
      text:
        checkedItems.length === checklistItems.length
          ? "✅ Security checklist completed - all items checked!"
          : "Security checklist completed",
      blocks: completionBlocks,
    });

    console.log(
      `Security checklist completed by ${userId} and posted to channel ${channelId}`
    );
    return true;
  } catch (error) {
    console.error("Error posting completion message:", error);

    // Try to notify the user if posting to channel fails
    try {
      await client.chat.postMessage({
        channel: userId,
        text: `⚠️ Error posting security checklist. Please make sure the bot is invited to the channel and has permission to post. Error: ${error.message}`,
      });
    } catch (dmError) {
      console.error("Failed to send error notification to user:", dmError);
    }
    return false;
  }
}

/**
 * Start the app
 */
(async () => {
  try {
    // Start Slack Bolt app (Socket Mode)
    await app.start();

    // Start Express server for health checks
    expressApp.listen(PORT, () => {
      console.log("⚡️ Microfactory Security Checkmate app is running!");
      console.log("🏭 Ready to help secure the warehouse!");
      console.log(
        `📡 Health check endpoint available at http://localhost:${PORT}/health`
      );
    });
  } catch (error) {
    console.error("Failed to start app:", error);
    process.exit(1);
  }
})();
