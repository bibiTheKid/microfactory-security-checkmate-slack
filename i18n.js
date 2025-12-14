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
      wood_lights_1: {
        text: "Turn off the lights in the wood workshop",
        description:
          "Make sure all lights in the wood workshop are turned off to save energy and ensure safety. Check the main overhead lights, task lights at workbenches, and any additional lighting.",
      },
      wood_lights_2: {
        text: "Turn off the lights in the wood workshop",
        description:
          "Make sure all lights in the wood workshop are turned off to save energy and ensure safety. Check the main overhead lights, task lights at workbenches, and any additional lighting.",
      },
      wood_door: {
        text: "Close and lock the wood workshop door",
        description:
          "Ensure the wood workshop door is fully closed and locked. Use the provided key to secure the deadbolt. This prevents unauthorized access to tools and materials.",
      },
      wood_door_liverpoolstreet: {
        text: "Close all windows in the wood workshop",
        description:
          "Close and latch all windows in the wood workshop. This protects against weather, prevents heat loss, and enhances security. Check both upper and lower windows.",
      },
      metal_lights: {
        text: "Turn off the lights in the metal workshop",
        description:
          "Turn off all lighting in the metal workshop including overhead lights, welding area lights, and task lighting. Verify all switches are in the off position.",
      },
      metal_door: {
        text: "Close and lock the metal workshop door",
        description:
          "Secure the metal workshop by closing and locking the door. Ensure the lock is fully engaged. This protects expensive metalworking equipment and materials.",
      },
      common_lights: {
        text: "Turn off all common area lights",
        description:
          "Turn off lights in all common areas including hallways, bathrooms, kitchen, and meeting spaces. Leave only essential security lighting on if required.",
      },
      common_door_1: {
        text: "Lock the main entrance door",
        description:
          "Ensure the main entrance door is fully closed and locked. Engage both the handle lock and the deadbolt. Verify the door is secure by testing it from the outside.",
      },
      common_door_2: {
        text: "Lock the main entrance door",
        description:
          "Ensure the main entrance door is fully closed and locked. Engage both the handle lock and the deadbolt. Verify the door is secure by testing it from the outside.",
      },
      parking_door_1: {
        text: "Lock the main entrance door",
        description:
          "Ensure the main entrance door is fully closed and locked. Engage both the handle lock and the deadbolt. Verify the door is secure by testing it from the outside.",
      },
      parking_door_2: {
        text: "Lock the main entrance door",
        description:
          "Ensure the main entrance door is fully closed and locked. Engage both the handle lock and the deadbolt. Verify the door is secure by testing it from the outside.",
      },
      alarm: {
        text: "Activate the security alarm",
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
      wood_lights_1: {
        text: "Schakel de lichten in de houtworkshop uit",
        description:
          "Zorg ervoor dat alle lichten in de houtworkshop zijn uitgeschakeld om energie te besparen en de veiligheid te waarborgen. Controleer de hoofdverlichting aan het plafond, taakverlichting bij werkbanken en eventuele extra verlichting.",
      },
      wood_lights_2: {
        text: "Schakel de lichten in de houtworkshop uit",
        description:
          "Zorg ervoor dat alle lichten in de houtworkshop zijn uitgeschakeld om energie te besparen en de veiligheid te waarborgen. Controleer de hoofdverlichting aan het plafond, taakverlichting bij werkbanken en eventuele extra verlichting.",
      },
      wood_door: {
        text: "Sluit en vergrendel de deur van de houtworkshop",
        description:
          "Zorg ervoor dat de deur van de houtworkshop volledig gesloten en vergrendeld is. Gebruik de meegeleverde sleutel om het slot te beveiligen. Dit voorkomt ongeautoriseerde toegang tot gereedschap en materialen.",
      },
      wood_door_liverpoolstreet: {
        text: "Sluit en vergrendel de deur van de houtworkshop",
        description:
          "Zorg ervoor dat de deur van de houtworkshop volledig gesloten en vergrendeld is. Gebruik de meegeleverde sleutel om het slot te beveiligen. Dit voorkomt ongeautoriseerde toegang tot gereedschap en materialen.",
      },
      metal_lights: {
        text: "Schakel de lichten in de metaalworkshop uit",
        description:
          "Schakel alle verlichting in de metaalworkshop uit, inclusief plafondverlichting, lasgebied verlichting en taakverlichting. Controleer of alle schakelaars in de uit-positie staan.",
      },
      metal_door: {
        text: "Sluit en vergrendel de deur van de metaalworkshop",
        description:
          "Beveilig de metaalworkshop door de deur te sluiten en te vergrendelen. Zorg ervoor dat het slot volledig is ingeschakeld. Dit beschermt dure metaalbewerkingsapparatuur en materialen.",
      },
      common_lights: {
        text: "Schakel alle lichten in gemeenschappelijke ruimtes uit",
        description:
          "Schakel de lichten uit in alle gemeenschappelijke ruimtes, inclusief gangen, badkamers, keuken en vergaderruimtes. Laat alleen essentiële beveiligingsverlichting aan indien nodig.",
      },
      main_door: {
        text: "Vergrendel de hoofdingang",
        description:
          "Zorg ervoor dat de hoofdingang volledig gesloten en vergrendeld is. Schakel zowel het handvatslot als het veiligheidsslot in. Controleer of de deur veilig is door deze van buitenaf te testen.",
      },
      alarm: {
        text: "Activeer het beveiligingsalarm",
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
