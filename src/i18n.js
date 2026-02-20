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
        text: "Close the door and shutters on Liverpool Street",
        description:
          "(1) Close the inner shutter by pressing the down arrow. If it doesn't work, turn on the control box by setting it to position 1.\n\n(2) Close the outer shutter by turning the key on the control box on the right wall to the left.\n\n(3) If the door is not already locked, lock it using the key placed on the control box for closing the outer shutter.",
      },
      wood_lights_1: {
        text: "Turn off the lights in the middle of the wood workshop",
        description:
          "Turn the 3 switches on the electrical panel to the right (position 0).",
      },
      wood_lights_2: {
        text: "Turn off the lights at the entrance of the wood workshop",
        description: "Press the black switch to turn off the lights.",
      },
      wood_door: {
        text: "Close the fire door of the wood workshop",
        description: "Pull firmly on the fire door to close the wood workshop.",
      },
      metal_back_door: {
        text: "Close the door at the back of the metal workshop",
        description:
          "Pull the door firmly and close the lock. Make sure the lock is fully engaged.",
      },
      metal_lights: {
        text: "Turn off the lights in the metal workshop",
        description:
          "Turn the 2 switches on the electrical panel to the right (position 0).",
      },
      metal_door: {
        text: "Close the door and shutter of the metal workshop",
        description: "Lock the door and close the shutter.",
      },
      common_door_1: {
        text: "Close door 1 and the white inner shutter",
        description:
          "(1) Close the white inner shutter by pressing the down arrow.\n\n(2) If the key is present on the door, lock the door.",
      },
      common_lights_1: {
        text: "Turn off the lights in the corner of the common areas",
        description:
          "Turn all the switches on the electrical panel to the right (position 0). This electrical panel is located in the right corner when looking towards the metal workshop.",
      },
      common_lights_2: {
        text: "Turn off the lights in the middle of the common areas",
        description:
          "Turn all the switches on the electrical panel to the right (position 0). This electrical panel is located in the middle of the left wall when looking at the metal shutter facing the parking.",
      },
      common_lights_3: {
        text: "Turn off the serigraphy light",
        description:
          "Press the switch located to the left of the metal shutter facing the parking. This switch turns off the serigraphy light located to the right of the metal shutter.",
      },
      common_door_2: {
        text: "Close door 2 and the metal shutter",
        description:
          "(1) Close the metal shutter by pressing the down arrow.\n\n(2) Lock the door.",
      },
      common_door_serigraphy: {
        text: "Close the serigraphy door providing access to the parking",
        description:
          'Go through the "LABO PEINTURE" door, then close the serigraphy door providing access to the parking. There is no lock, just let the door close on its own.',
      },
      parking_door_1: {
        text: "Close the green gate",
        description:
          "Enter the code on the keypad and wait for the confirmation beep.",
      },
      alarm: {
        text: "Activate the alarm",
        description:
          "Due to technical problems, we can no longer activate the alarm ourselves.\n\nPlease send a text message to Annelies, the site supervisor, to ask her to activate the alarm at 0496 24 73 23.",
      },
      parking_door_2: {
        text: "Close the gray gate",
        description:
          "Enter the code on the keypad and wait for the gate to be completely closed.",
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
    taskInfo: "Informations",
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
        text: "Fermer la porte et les rideaux de la rue de Liverpool",
        description:
          "(1) Fermez le rideau intérieur en appuyant sur la fleche du bas. Si cela ne fonctionne pas, il faut allumer le boitier en le mettant en position 1.\n\n(2) Fermez le rideau extérieur en tournant la clé du boitier du mur de droite vers la gauche.\n\n(3) Si la porte n'est pas déjà verrouillée, verrouillez la à l'aide de la clé posée sur le boitier permettant de fermer le rideau extérieur.",
      },
      wood_lights_1: {
        text: "Éteindre les lumières au milieu de l'atelier bois",
        description:
          "Tournez les 3 interrupteurs du panneau électrique vers la droite (position 0).",
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
      metal_back_door: {
        text: "Fermer la porte au fond de l'atelier métal",
        description:
          "Tirez fermement la porte et fermez le verrou. Assurez-vous que le verrou est complètement engagé.",
      },
      metal_lights: {
        text: "Éteindre les lumières de l'atelier métal",
        description:
          "Tournez les 2 interrupteurs du panneau électrique vers la droite (position 0).",
      },
      metal_door: {
        text: "Fermer la porte et le rideau de l'atelier métal",
        description: "Verrouillez la porte et fermez le rideau",
      },
      common_door_1: {
        text: "Fermer la porte 1 et le rideau intérieur blanc",
        description:
          "(1) Fermez le rideau intérieur blanc appuyant sur la fleche du bas.\n\n(2) Si la clé est présente sur la porte, verrouillez la porte.",
      },
      common_lights_1: {
        text: "Éteindre les lumières dans le coin des espaces communs",
        description:
          "Tournez tous les interrupteurs du panneau électrique vers la droite (position 0). Ce panneau électrique est situé dans le coin droit lorsque vous regardez en direction de l'atelier métal.",
      },
      common_lights_2: {
        text: "Éteindre les lumières au milieu des espaces communs",
        description:
          "Tournez tous les interrupteurs du panneau électrique vers la droite (position 0). Ce panneau électrique est situé au milieu du mur gauche lorsque vous regardez le rideau métallique donnant sur le parking.",
      },
      common_lights_3: {
        text: "Éteindre la lumière de la sérigraphie",
        description:
          "Appuyez sur l'interrupteur situé a gauche du rideau métallique donnant sur le parking. Cet interrupteur éteint la lumière de la sérigraphie située a droite du rideau métallique.",
      },
      common_door_2: {
        text: "Fermer la porte 2 et le rideau métallique",
        description:
          "(1) Fermez le rideau métallique appuyant sur la fleche du bas.\n\n(2) Verrouillez la porte.",
      },
      common_door_serigraphy: {
        text: "Fermer la porte de la sérigraphie donnant accès au parking",
        description:
          'Passez par la porte "LABO PEINTURE", puis fermez la porte de la sérigraphie donnant accès au parking. Il n\'y a pas de verrou, il suffit de laisser la porte se refermer.',
      },
      parking_door_1: {
        text: "Fermer le portail vert",
        description:
          "Tapez le code sur le clavier et attendez le bip de confirmation.",
      },
      alarm: {
        text: "Activer l'alarme",
        description:
          "Suite à des problemes techniques, nous ne pouvons plus activer l'alarme nous-même.\n\nVeuillez envoyer un message texte à Annelies, la surveillante du site, pour lui demander d'activer l'alarme au 0496 24 73 23.",
      },
      parking_door_2: {
        text: "Fermer le portail gris",
        description:
          "Tapez le code sur le clavier et attendez que le portail soit complétement fermé.",
      },
    },

    // Categories
    categories: {
      "Wood Workshop": "ATELIER BOIS",
      "Metal Workshop": "ATELIER MÉTAL",
      "Common Areas": "ESPACES COMMUNS",
      Security: "SÉCURITÉ",
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
        text: "Sluit de deur en de rolluiken van de Liverpoolstraat",
        description:
          "(1) Sluit het binnenrolluik door op de pijl omlaag te drukken. Als dit niet werkt, zet de bedieningskast aan door deze op positie 1 te zetten.\n\n(2) Sluit het buitenrolluik door de sleutel op de bedieningskast aan de rechtermuur naar links te draaien.\n\n(3) Als de deur nog niet vergrendeld is, vergrendel deze dan met de sleutel die op de bedieningskast ligt voor het sluiten van het buitenrolluik.",
      },
      wood_lights_1: {
        text: "Schakel de lichten in het midden van de houtworkshop uit",
        description:
          "Draai de 3 schakelaars op het elektrische paneel naar rechts (positie 0).",
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
      metal_back_door: {
        text: "Sluit de deur aan de achterkant van de metaalworkshop",
        description:
          "Trek de deur stevig dicht en sluit de grendel. Zorg ervoor dat de grendel volledig vergrendeld is.",
      },
      metal_lights: {
        text: "Schakel de lichten van de metaalworkshop uit",
        description:
          "Draai de 2 schakelaars op het elektrische paneel naar rechts (positie 0).",
      },
      metal_door: {
        text: "Sluit de deur en het rolluik van de metaalworkshop",
        description: "Vergrendel de deur en sluit het rolluik.",
      },
      common_door_1: {
        text: "Sluit deur 1 en het witte binnenrolluik",
        description:
          "(1) Sluit het witte binnenrolluik door op de pijl omlaag te drukken.\n\n(2) Als de sleutel aanwezig is op de deur, vergrendel de deur.",
      },
      common_lights_1: {
        text: "Schakel de lichten in de hoek van de gemeenschappelijke ruimtes uit",
        description:
          "Draai alle schakelaars op het elektrische paneel naar rechts (positie 0). Dit elektrische paneel bevindt zich in de rechterhoek wanneer u in de richting van de metaalworkshop kijkt.",
      },
      common_lights_2: {
        text: "Schakel de lichten in het midden van de gemeenschappelijke ruimtes uit",
        description:
          "Draai alle schakelaars op het elektrische paneel naar rechts (positie 0). Dit elektrische paneel bevindt zich in het midden van de linkermuur wanneer u naar het metalen rolluik kijkt dat uitgeeft op de parkeerplaats.",
      },
      common_lights_3: {
        text: "Schakel het licht van de zeefdrukkerij uit",
        description:
          "Druk op de schakelaar links van het metalen rolluik dat uitgeeft op de parkeerplaats. Deze schakelaar schakelt het licht van de zeefdrukkerij rechts van het metalen rolluik uit.",
      },
      common_door_2: {
        text: "Sluit deur 2 en het metalen rolluik",
        description:
          "(1) Sluit het metalen rolluik door op de pijl omlaag te drukken.\n\n(2) Vergrendel de deur.",
      },
      common_door_serigraphy: {
        text: "Sluit de zeefdrukkerijdeur die toegang geeft tot de parkeerplaats",
        description:
          'Ga door de deur "LABO PEINTURE", sluit vervolgens de zeefdrukkerijdeur die toegang geeft tot de parkeerplaats. Er is geen slot, laat de deur gewoon dichtvallen.',
      },
      parking_door_1: {
        text: "Sluit het groene hek",
        description:
          "Voer de code in op het toetsenbord en wacht op de bevestigingspiep.",
      },
      alarm: {
        text: "Activeer het alarm",
        description:
          "Door technische problemen kunnen we het alarm niet meer zelf activeren.\n\nStuur een sms naar Annelies, de toezichthouder van de site, om haar te vragen het alarm te activeren op 0496 24 73 23.",
      },
      parking_door_2: {
        text: "Sluit het grijze hek",
        description:
          "Voer de code in op het toetsenbord en wacht tot het hek volledig gesloten is.",
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
    const userInfo = await client.users.info({
      user: userId,
      include_locale: true,
    });
    const slackLocale = userInfo.user.locale;

    console.log(`[i18n] User ${userId} has Slack locale: ${slackLocale}`);

    // Map Slack locale to our supported languages (Slack locales can be: "en-US", "fr-FR", "nl-NL", or just "en", "fr", "nl")
    let detectedLang = "en";

    if (slackLocale) {
      const localeLower = slackLocale.toLowerCase();
      if (localeLower.startsWith("fr")) {
        detectedLang = "fr";
      } else if (localeLower.startsWith("nl")) {
        detectedLang = "nl";
      } else if (localeLower.startsWith("en")) {
        detectedLang = "en";
      }
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
