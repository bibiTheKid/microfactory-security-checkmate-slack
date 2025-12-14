// Internationalization (i18n) support for English, French, and Dutch

const translations = {
  en: {
    // App Home & Modal Headers
    appTitle: "🏭 Microfactory Security Checklist",
    modalTitle: "Security Checklist",
    taskInfo: "Task Information",
    successTitle: "✅ Complete!",

    // Instructions
    checklistIntro:
      "Check off each item as you complete the closing procedures.",
    modalIntro: "*Please check all items before closing the warehouse*",

    // Buttons
    completeButton: "Complete ✓",
    cancelButton: "Cancel",
    closeButton: "Close",
    infoButton: "More details",

    // Success Messages
    autoSubmitSuccess:
      "✅ *Checklist completed successfully!*\n\n🎉 All items were checked! The completion summary has been posted to the team channel.",
    manualSubmitSuccess:
      "✅ *Checklist submitted successfully!*\n\nThe completion summary has been posted to the team channel.",
    submitError:
      "⚠️ *Checklist submitted with errors.*\n\nPlease check your DMs for details.",
    modalSuccess:
      "✅ *Checklist completed successfully!*\n\n🎉 All items were checked! The completion summary has been posted to the team channel.\n\n_You can close this modal now._",

    // Completion Message
    completionTitle: "🏭 Security Checklist Completed",
    completedBy: "Completed by",
    completedItems: "Completed items",
    missingItems: "⚠️ *Missing items:*",
    allItemsChecked: "✅ All items checked!",

    // How to Use
    howToUseTitle: "📖 How to Use?",
    howToUseStep1: "1️⃣ Check off each item above as you complete it",
    howToUseStep2:
      "2️⃣ Or click *\"Complete ✓\"* if you don't want to check all items one by one and you're sure you've already completed the tasks",
    howToUseStep3: "3️⃣ Summary will be posted to the team channel",
    howToUseFooter:
      "_You can also type `/security-check` in any channel to open the checklist modal._",

    // Categories
    categoryLabel: "Category:",
    descriptionLabel: "Description:",

    // Checklist Items
    items: {
      wood_door_liverpoolstreet: {
        text: "Close and lock the door and metal shutter",
        description:
          "Close and lock the door and metal shutter providing access to Liverpool Street.",
      },
      wood_lights_1: {
        text: "Turn off the lights in the middle of the wood workshop",
        description: "Turn the 3 switches on the electrical panel to the left.",
      },
      wood_lights_2: {
        text: "Turn off the lights at the entrance of the wood workshop",
        description: "Press the black switch to turn off the lights.",
      },
      wood_door: {
        text: "Close the fire door of the wood workshop",
        description: "Pull firmly on the fire door to close the wood workshop.",
      },
      metal_lights: {
        text: "Turn off the lights in the metal workshop",
        description: "Turn the 3 switches on the electrical panel to the left.",
      },
      metal_door: {
        text: "Close and lock the metal workshop door",
        description:
          "Close and lock the small door of the metal workshop. Make sure the lock is fully engaged.",
      },
      common_door_1: {
        text: "Close and lock door 1 and the metal shutter",
        description: "Close and lock the door and the metal shutter.",
      },
      common_lights_1: {
        text: "Turn off the lights in the middle of the common areas",
        description: "Turn the 3 switches on the electrical panel to the left.",
      },
      common_door_2: {
        text: "Close and lock door 2 and the metal shutter",
        description: "Close and lock the door and the metal shutter.",
      },
      common_lights_2: {
        text: "Turn off the lights at the entrance of the common areas",
        description: "Press the black switch to turn off the lights.",
      },
      common_door_serigraphy: {
        text: "Close and lock the serigraphy door providing access to the parking",
        description:
          "Close and lock the serigraphy door providing access to the parking.",
      },
      parking_door_1: {
        text: "Close the gray gate",
        description:
          "Enter the code on the keypad and wait for the confirmation beep.",
      },
      parking_door_2: {
        text: "Close the green gate",
        description:
          "Enter the code on the keypad and wait for the confirmation beep.",
      },
      alarm: {
        text: "Activate the alarm",
        description:
          "Activate the security alarm system as the final step. Enter the code on the keypad and wait for the confirmation beep. You have 60 seconds to exit after activation.",
      },
    },

    // Categories
    categories: {
      "Wood Workshop": "Wood Workshop",
      "Metal Workshop": "Metal Workshop",
      "Common Areas": "Common Areas",
      Security: "Security",
    },
  },

  fr: {
    // App Home & Modal Headers
    appTitle: "🏭 Liste de Sécurité Microfactory",
    modalTitle: "Liste de Sécurité",
    taskInfo: "Informations sur la Tâche",
    successTitle: "✅ Terminé !",

    // Instructions
    checklistIntro:
      "Cochez chaque élément au fur et à mesure que vous terminez les procédures de fermeture.",
    modalIntro:
      "*Veuillez vérifier tous les éléments avant de fermer l'entrepôt*",

    // Buttons
    completeButton: "Terminer ✓",
    cancelButton: "Annuler",
    closeButton: "Fermer",
    infoButton: "Plus de détails",

    // Success Messages
    autoSubmitSuccess:
      "✅ *Liste complétée avec succès !*\n\n🎉 Tous les éléments ont été cochés ! Le résumé a été publié sur le canal de l'équipe.",
    manualSubmitSuccess:
      "✅ *Liste soumise avec succès !*\n\nLe résumé a été publié sur le canal de l'équipe.",
    submitError:
      "⚠️ *Liste soumise avec des erreurs.*\n\nVeuillez vérifier vos messages privés pour plus de détails.",
    modalSuccess:
      "✅ *Liste complétée avec succès !*\n\n🎉 Tous les éléments ont été cochés ! Le résumé a été publié sur le canal de l'équipe.\n\n_Vous pouvez fermer cette fenêtre maintenant._",

    // Completion Message
    completionTitle: "🏭 Liste de Sécurité Complétée",
    completedBy: "Complété par",
    completedItems: "Éléments complétés",
    missingItems: "⚠️ *Éléments manquants :*",
    allItemsChecked: "✅ Tous les éléments cochés !",

    // How to Use
    howToUseTitle: "📖 Comment utiliser cette app ?",
    howToUseStep1: "1️⃣ Cochez chaque élément ci-dessus au fur et à mesure",
    howToUseStep2:
      '2️⃣ Ou cliquez sur *"Terminer ✓"* si vous ne voulez pas cocher tous les éléments un par un et que vous êtes sûr d\'avoir déjà terminé les tâches',
    howToUseStep3: "3️⃣ Le résumé sera publié sur le canal de l'équipe",
    howToUseFooter:
      "_Vous pouvez également taper `/security-check` dans n'importe quel canal pour ouvrir la liste modale._",

    // Categories
    categoryLabel: "Catégorie :",
    descriptionLabel: "Description :",

    // Checklist Items
    items: {
      wood_door_liverpoolstreet: {
        text: "Fermer et verrouiller la porte et le rideau métalique",
        description:
          "Fermez et verrouillez la porte et le rideau métalique donnant accès à la rue de Liverpool.",
      },
      wood_lights_1: {
        text: "Éteindre les lumières au milieu de l'atelier bois",
        description:
          "Tournez les 3 interrupteurs du panneau électrique vers la gauche.",
      },
      wood_lights_2: {
        text: "Éteindre les lumières a l'entrée de l'atelier bois",
        description:
          "Appuyez sur l'interrupteur noir pour éteindre les lumières.",
      },
      wood_door: {
        text: "Fermer la porte coupe-feu de l'atelier bois",
        description:
          "Tirez fermement sur la porte coupe-feu afin de fermer l'atelier bois.",
      },
      metal_lights: {
        text: "Éteindre les lumières de l'atelier métal",
        description:
          "Tournez les 3 interrupteurs du panneau électrique vers la gauche.",
      },
      metal_door: {
        text: "Fermer et verrouiller la porte de l'atelier métal",
        description:
          "Fermez et verrouillez la petite porte de l'atelier métal. Assurez-vous que le verrou est complètement engagé.",
      },
      common_door_1: {
        text: "Fermer et verrouiller la porte 1 et le rideau métalique",
        description: "Fermez et verrouillez la porte et le rideau métalique.",
      },
      common_lights_1: {
        text: "Éteindre les lumières au milieu des espaces communs",
        description:
          "Tournez les 3 interrupteurs du panneau électrique vers la gauche.",
      },
      common_door_2: {
        text: "Fermer et verrouiller la porte 2 et le rideau métalique",
        description: "Fermez et verrouillez la porte et le rideau métalique.",
      },
      common_lights_2: {
        text: "Éteindre les lumières a l'entrée des espaces communs",
        description:
          "Appuyez sur l'interrupteur noir pour éteindre les lumières.",
      },
      common_door_serigraphy: {
        text: "Fermer et verrouiller la porte de la serographie donnant accès au parking",
        description:
          "Fermez et verrouillez la porte de la serographie donnant accès au parking.",
      },
      parking_door_1: {
        text: "Fermer le portail gris",
        description:
          "Tapez le code sur le clavier et attendez le bip de confirmation.",
      },
      parking_door_2: {
        text: "Fermer le portail vert",
        description:
          "Tapez le code sur le clavier et attendez le bip de confirmation.",
      },
      alarm: {
        text: "Activer l'alarme",
        description:
          "Activez le système d'alarme de sécurité comme dernière étape. Entrez le code sur le clavier et attendez le bip de confirmation. Vous avez 60 secondes pour sortir après l'activation.",
      },
    },

    // Categories
    categories: {
      "Wood Workshop": "Atelier Bois",
      "Metal Workshop": "Atelier Métal",
      "Common Areas": "Espaces Communs",
      Security: "Sécurité",
    },
  },

  nl: {
    // App Home & Modal Headers
    appTitle: "🏭 Microfactory Beveiligingschecklist",
    modalTitle: "Beveiligingschecklist",
    taskInfo: "Taakinformatie",
    successTitle: "✅ Voltooid!",

    // Instructions
    checklistIntro:
      "Vink elk item af terwijl u de sluitingsprocedures voltooit.",
    modalIntro: "*Controleer alle items voordat u het magazijn sluit*",

    // Buttons
    completeButton: "Voltooien ✓",
    cancelButton: "Annuleren",
    closeButton: "Sluiten",
    infoButton: "Meer details",

    // Success Messages
    autoSubmitSuccess:
      "✅ *Checklist succesvol voltooid!*\n\n🎉 Alle items zijn aangevinkt! De voltooiingssamenvatting is geplaatst in het teamkanaal.",
    manualSubmitSuccess:
      "✅ *Checklist succesvol ingediend!*\n\nDe voltooiingssamenvatting is geplaatst in het teamkanaal.",
    submitError:
      "⚠️ *Checklist ingediend met fouten.*\n\nControleer uw DM's voor details.",
    modalSuccess:
      "✅ *Checklist succesvol voltooid!*\n\n🎉 Alle items zijn aangevinkt! De voltooiingssamenvatting is geplaatst in het teamkanaal.\n\n_U kunt deze modal nu sluiten._",

    // Completion Message
    completionTitle: "🏭 Beveiligingschecklist Voltooid",
    completedBy: "Voltooid door",
    completedItems: "Voltooide items",
    missingItems: "⚠️ *Ontbrekende items:*",
    allItemsChecked: "✅ Alle items aangevinkt!",

    // How to Use
    howToUseTitle: "📖 Hoe te Gebruiken?",
    howToUseStep1: "1️⃣ Vink elk item hierboven af terwijl u het voltooit",
    howToUseStep2:
      '2️⃣ Of klik op *"Voltooien ✓"* als u niet alle items één voor één wilt aanvinken en u zeker weet dat u de taken al hebt voltooid',
    howToUseStep3: "3️⃣ Samenvatting wordt geplaatst in het teamkanaal",
    howToUseFooter:
      "_U kunt ook `/security-check` typen in elk kanaal om de checklist modal te openen._",

    // Categories
    categoryLabel: "Categorie:",
    descriptionLabel: "Beschrijving:",

    // Checklist Items
    items: {
      wood_door_liverpoolstreet: {
        text: "Sluit en vergrendel de deur en het metalen rolluik",
        description:
          "Sluit en vergrendel de deur en het metalen rolluik die toegang geven tot Liverpool Street.",
      },
      wood_lights_1: {
        text: "Schakel de lichten in het midden van de houtworkshop uit",
        description:
          "Draai de 3 schakelaars op het elektriciteitsschakelbord naar links.",
      },
      wood_lights_2: {
        text: "Schakel de lichten bij de ingang van de houtworkshop uit",
        description:
          "Druk op de zwarte schakelaar om de lichten uit te schakelen.",
      },
      wood_door: {
        text: "Sluit de brandwerende deur van de houtworkshop",
        description:
          "Trek stevig aan de brandwerende deur om de houtworkshop te sluiten.",
      },
      metal_lights: {
        text: "Schakel de lichten in de metaalworkshop uit",
        description:
          "Draai de 3 schakelaars op het elektriciteitsschakelbord naar links.",
      },
      metal_door: {
        text: "Sluit en vergrendel de deur van de metaalworkshop",
        description:
          "Sluit en vergrendel de kleine deur van de metaalworkshop. Zorg ervoor dat het slot volledig is ingeschakeld.",
      },
      common_door_1: {
        text: "Sluit en vergrendel deur 1 en het metalen rolluik",
        description: "Sluit en vergrendel de deur en het metalen rolluik.",
      },
      common_lights_1: {
        text: "Schakel de lichten in het midden van de gemeenschappelijke ruimtes uit",
        description:
          "Draai de 3 schakelaars op het elektriciteitsschakelbord naar links.",
      },
      common_door_2: {
        text: "Sluit en vergrendel deur 2 en het metalen rolluik",
        description: "Sluit en vergrendel de deur en het metalen rolluik.",
      },
      common_lights_2: {
        text: "Schakel de lichten bij de ingang van de gemeenschappelijke ruimtes uit",
        description:
          "Druk op de zwarte schakelaar om de lichten uit te schakelen.",
      },
      common_door_serigraphy: {
        text: "Sluit en vergrendel de serigraficdeur die toegang geeft tot de parkeerplaats",
        description:
          "Sluit en vergrendel de serigraficdeur die toegang geeft tot de parkeerplaats.",
      },
      parking_door_1: {
        text: "Sluit het grijze hek",
        description:
          "Voer de code in op het toetsenpaneel en wacht op de bevestigingspiep.",
      },
      parking_door_2: {
        text: "Sluit het groene hek",
        description:
          "Voer de code in op het toetsenpaneel en wacht op de bevestigingspiep.",
      },
      alarm: {
        text: "Activeer het alarm",
        description:
          "Activeer het beveiligingsalarmsysteem als laatste stap. Voer de code in op het toetsenpaneel en wacht op de bevestigingspiep. U heeft 60 seconden om te vertrekken na activering.",
      },
    },

    // Categories
    categories: {
      "Wood Workshop": "Houtworkshop",
      "Metal Workshop": "Metaalworkshop",
      "Common Areas": "Gemeenschappelijke Ruimtes",
      Security: "Beveiliging",
    },
  },
};

/**
 * Get translations for a specific language
 * @param {string} lang - Language code (en, fr, nl)
 * @returns {Object} Translations object
 */
function getTranslations(lang) {
  // Default to English if language not supported
  const supportedLang = ["en", "fr", "nl"].includes(lang) ? lang : "en";
  return translations[supportedLang];
}

/**
 * Get user's language from Slack user info
 * @param {Object} client - Slack client
 * @param {string} userId - User ID
 * @returns {Promise<string>} Language code (en, fr, nl)
 */
async function getUserLanguage(client, userId) {
  try {
    const userInfo = await client.users.info({ user: userId });
    const slackLocale = userInfo.user.locale || "en-US";

    console.log(`[i18n] User ${userId} has Slack locale: ${slackLocale}`);

    // Map Slack locale to our supported languages
    let detectedLang = "en";
    if (slackLocale.startsWith("fr")) {
      detectedLang = "fr";
    } else if (slackLocale.startsWith("nl")) {
      detectedLang = "nl";
    }

    console.log(`[i18n] Detected language: ${detectedLang}`);
    return detectedLang;
  } catch (error) {
    console.error("[i18n] Error getting user language:", error);
    return "en"; // Default to English
  }
}

module.exports = {
  getTranslations,
  getUserLanguage,
};
