const { checklistItems } = require("./checklist-data");

/**
 * Helper function to group checklist items by category
 */
function groupItemsByCategory() {
  const categories = {};
  checklistItems.forEach((item) => {
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push(item);
  });
  return categories;
}

/**
 * Build checklist blocks with checkboxes
 * @param {string} actionIdPrefix - Prefix for action_id (e.g., "checklist" or "home_checklist")
 * @param {string} blockIdPrefix - Prefix for block_id (e.g., "category" or "home_category")
 * @returns {Array} Array of Block Kit blocks
 */
function buildChecklistBlocks(actionIdPrefix, blockIdPrefix) {
  const categories = groupItemsByCategory();
  const blocks = [];

  // Add each category with its items
  Object.keys(categories).forEach((category) => {
    const categorySlug = category.toLowerCase().replace(/\s+/g, "_");

    // Category header
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*${category}*`,
      },
    });

    // Add checkboxes for each item in the category
    const options = categories[category].map((item) => ({
      text: {
        type: "mrkdwn",
        text: item.text,
      },
      value: item.id,
    }));

    blocks.push({
      type: "actions",
      block_id: `${blockIdPrefix}_${categorySlug}`,
      elements: [
        {
          type: "checkboxes",
          action_id: `${actionIdPrefix}_${categorySlug}`,
          options: options,
        },
      ],
    });

    blocks.push({
      type: "divider",
    });
  });

  return blocks;
}

/**
 * Build the Block Kit modal view for the security checklist
 */
function buildChecklistModal() {
  const blocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "🏭 Microfactory Security Checklist",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Please check all items before closing the warehouse*",
      },
    },
    {
      type: "divider",
    },
    // Add the checklist blocks
    ...buildChecklistBlocks("checklist", "category"),
  ];

  return {
    type: "modal",
    callback_id: "security_checklist_modal",
    title: {
      type: "plain_text",
      text: "Security Checklist",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Complete ✓",
      emoji: true,
    },
    close: {
      type: "plain_text",
      text: "Cancel",
      emoji: true,
    },
    blocks: blocks,
  };
}

/**
 * Build a completion message with summary
 */
function buildCompletionMessage(checkedItems, userName) {
  const totalItems = checklistItems.length;
  const checkedCount = checkedItems.length;
  const allChecked = checkedCount === totalItems;

  const blocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: allChecked
          ? "✅ Security Check Complete!"
          : "⚠️ Security Check Submitted",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Completed by:* ${userName}\n*Time:* <!date^${Math.floor(
          Date.now() / 1000
        )}^{date_short_pretty} at {time}|${new Date().toLocaleString()}>`,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Items checked:* ${checkedCount}/${totalItems}`,
      },
    },
  ];

  if (allChecked) {
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: "🎉 *All security items have been checked!* The warehouse is secure.",
      },
    });
  } else {
    const uncheckedItems = checklistItems.filter(
      (item) => !checkedItems.includes(item.id)
    );

    const uncheckedList = uncheckedItems
      .map((item) => `• ${item.text}`)
      .join("\n");

    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `⚠️ *Missing items:*\n${uncheckedList}`,
      },
    });
  }

  blocks.push({
    type: "divider",
  });

  // Add checked items summary
  if (checkedCount > 0) {
    const checkedItemsList = checklistItems
      .filter((item) => checkedItems.includes(item.id))
      .map((item) => `✓ ${item.text}`)
      .join("\n");

    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Completed items:*\n${checkedItemsList}`,
      },
    });
  }

  return blocks;
}

/**
 * Build App Home view with interactive checklist
 * @param {Object} options - Optional configuration
 * @param {string} options.successMessage - Optional success message to show at bottom
 * @returns {Array} Array of Block Kit blocks
 */
function buildAppHomeView(options = {}) {
  const blocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "🏭 Microfactory Security Checklist",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Check off each item as you complete the closing procedures.",
      },
    },
    {
      type: "divider",
    },
    // Add the checklist blocks
    ...buildChecklistBlocks("home_checklist", "home_category"),
  ];

  // Add submit button
  blocks.push({
    type: "actions",
    block_id: "home_submit_actions",
    elements: [
      {
        type: "button",
        text: {
          type: "plain_text",
          text: "Complete ✓",
          emoji: true,
        },
        style: "primary",
        action_id: "home_submit_checklist",
        value: "submit",
      },
    ],
  });

  // Add success message at the bottom if provided
  if (options.successMessage) {
    blocks.push(
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: options.successMessage,
        },
      }
    );
  }

  blocks.push({
    type: "divider",
  });

  // Add "How to Use" section
  blocks.push({
    type: "section",
    text: {
      type: "mrkdwn",
      text: '*� How to Use:*\n\n1️⃣ Check off each item above as you complete it\n2️⃣ Click *"Complete ✓"* when done\n3️⃣ Summary will be posted to the team channel\n\n_You can also type `/security-check` in any channel to open the checklist modal._',
    },
  });

  blocks.push({
    type: "context",
    elements: [
      {
        type: "mrkdwn",
        text: "🌱 _Supporting the circular economy through shared workshop spaces_ | Made for Microfactory Brussels",
      },
    ],
  });

  return blocks;
}

/**
 * Build a simple help message (kept for backwards compatibility)
 */
function buildHelpMessage() {
  return buildAppHomeView();
}

module.exports = {
  buildChecklistModal,
  buildCompletionMessage,
  buildHelpMessage,
  buildAppHomeView,
};
