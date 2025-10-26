const { checklistItems } = require("./checklist-data");
const { getTranslations } = require("./i18n");

/**
 * Helper function to group checklist items by category
 * @param {Object} t - Translations object
 * @returns {Object} Items grouped by category
 */
function groupItemsByCategory(t) {
  const categories = {};
  checklistItems.forEach((item) => {
    const translatedCategory = t.categories[item.category];
    if (!categories[translatedCategory]) {
      categories[translatedCategory] = [];
    }
    categories[translatedCategory].push(item);
  });
  return categories;
}

/**
 * Build checklist blocks with checkboxes and info buttons
 * @param {string} actionIdPrefix - Prefix for action_id (e.g., "checklist" or "home_checklist")
 * @param {string} blockIdPrefix - Prefix for block_id (e.g., "category" or "home_category")
 * @param {string} lang - Language code (en, fr, nl)
 * @returns {Array} Array of Block Kit blocks
 */
function buildChecklistBlocks(actionIdPrefix, blockIdPrefix, lang = "en") {
  const t = getTranslations(lang);
  const categories = groupItemsByCategory(t);
  const blocks = [];

  // Add each category with its items
  Object.keys(categories).forEach((category) => {
    // Category header
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*${category}*`,
      },
    });

    // Add each item as a separate row with checkbox and info button
    categories[category].forEach((item) => {
      // Combine emoji from checklist-data.js with translated text from i18n.js
      const itemText = `${item.emoji} ${t.items[item.id].text}`;

      blocks.push({
        type: "actions",
        block_id: `${blockIdPrefix}_${item.id}`,
        elements: [
          {
            type: "checkboxes",
            action_id: `${actionIdPrefix}_${item.id}`,
            options: [
              {
                text: {
                  type: "mrkdwn",
                  text: itemText,
                },
                value: item.id,
              },
            ],
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              text: t.infoButton,
              emoji: true,
            },
            action_id: `info_${item.id}`,
            value: item.id,
          },
        ],
      });
    });

    // const options = categories[category].map((item) => ({
    //   text: {
    //     type: "mrkdwn",
    //     text: item.text,
    //   },
    //   value: item.id,
    // }));

    // blocks.push({
    //   type: "actions",
    //   block_id: `${blockIdPrefix}_${categorySlug}`,
    //   elements: [
    //     {
    //       type: "checkboxes",
    //       action_id: `${actionIdPrefix}_${categorySlug}`,
    //       options: options,
    //     },
    //   ],
    // });

    blocks.push({
      type: "divider",
    });
  });

  return blocks;
}

/**
 * Build the Block Kit modal view for the security checklist
 * @param {string} lang - Language code (en, fr, nl)
 */
function buildChecklistModal(lang = "en") {
  const t = getTranslations(lang);

  const blocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: t.appTitle,
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: t.modalIntro,
      },
    },
    {
      type: "divider",
    },
    // Add the checklist blocks
    ...buildChecklistBlocks("checklist", "category", lang),
  ];

  return {
    type: "modal",
    callback_id: "security_checklist_modal",
    title: {
      type: "plain_text",
      text: t.modalTitle,
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: t.completeButton,
      emoji: true,
    },
    close: {
      type: "plain_text",
      text: t.cancelButton,
      emoji: true,
    },
    blocks: blocks,
  };
}

/**
 * Build info modal for a specific checklist item
 * @param {Object} item - The checklist item
 * @param {string} lang - Language code (en, fr, nl)
 * @returns {Object} Modal view object
 */
function buildInfoModal(item, lang = "en") {
  const t = getTranslations(lang);
  const itemText = t.items[item.id].text;
  const itemDescription = t.items[item.id].description;
  const translatedCategory = t.categories[item.category];

  return {
    type: "modal",
    title: {
      type: "plain_text",
      text: t.taskInfo,
      emoji: true,
    },
    close: {
      type: "plain_text",
      text: t.closeButton,
      emoji: true,
    },
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `${item.emoji} ${itemText}`,
          emoji: true,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*${t.categoryLabel}* ${translatedCategory}`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: itemDescription,
        },
      },
      {
        type: "image",
        image_url: item.imageUrl,
        alt_text: `${item.emoji} ${itemText}`,
      },
    ],
  };
}

/**
 * Build a completion message with summary
 * @param {Array} checkedItems - Array of checked item IDs
 * @param {string} userName - Name of the user who completed the checklist
 * @param {string} lang - Language code (en, fr, nl)
 */
function buildCompletionMessage(checkedItems, userName, lang = "en") {
  const t = getTranslations(lang);
  const totalItems = checklistItems.length;
  const checkedCount = checkedItems.length;
  const allChecked = checkedCount === totalItems;

  const blocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: t.completionTitle,
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*${t.completedBy}:* ${userName}\n*Time:* <!date^${Math.floor(
          Date.now() / 1000
        )}^{date_short_pretty} at {time}|${new Date().toLocaleString()}>`,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*${t.completedItems}:* ${checkedCount}/${totalItems}`,
      },
    },
  ];

  if (allChecked) {
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: t.allItemsChecked,
      },
    });
  } else {
    const uncheckedItems = checklistItems.filter(
      (item) => !checkedItems.includes(item.id)
    );

    const uncheckedList = uncheckedItems
      .map((item) => `• ${item.emoji} ${t.items[item.id].text}`)
      .join("\n");

    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `${t.missingItems}\n${uncheckedList}`,
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
      .map((item) => `✓ ${item.emoji} ${t.items[item.id].text}`)
      .join("\n");

    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*${t.completedItems}:*\n${checkedItemsList}`,
      },
    });
  }

  return blocks;
}

/**
 * Build App Home view with interactive checklist
 * @param {Object} options - Optional configuration
 * @param {string} options.successMessage - Optional success message to show at bottom
 * @param {string} options.lang - Language code (en, fr, nl)
 * @returns {Array} Array of Block Kit blocks
 */
function buildAppHomeView(options = {}) {
  const lang = options.lang || "en";
  const t = getTranslations(lang);

  const blocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: t.appTitle,
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: t.checklistIntro,
      },
    },
    {
      type: "divider",
    },
    // Add the checklist blocks
    ...buildChecklistBlocks("home_checklist", "home_category", lang),
  ];

  // Add success message OR submit button (not both)
  if (options.successMessage) {
    // Show success message instead of submit button
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
  } else {
    // Show submit button
    blocks.push({
      type: "actions",
      block_id: "home_submit_actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: t.completeButton,
            emoji: true,
          },
          style: "primary",
          action_id: "home_submit_checklist",
          value: "submit",
        },
      ],
    });
  }

  blocks.push({
    type: "divider",
  });

  // Add "How to Use" section
  blocks.push({
    type: "section",
    text: {
      type: "mrkdwn",
      text: `*${t.howToUseTitle}*\n\n${t.howToUseStep1}\n${t.howToUseStep2}\n${t.howToUseStep3}\n\n${t.howToUseFooter}`,
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

module.exports = {
  buildChecklistModal,
  buildCompletionMessage,
  buildAppHomeView,
  buildInfoModal,
};
