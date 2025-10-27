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
      wood_lights: {
        text: "Turn off the lights in the wood workshop",
        description:
          "Make sure all lights in the wood workshop are turned off to save energy and ensure safety. Check the main overhead lights, task lights at workbenches, and any additional lighting.",
      },
      wood_machines: {
        text: "Unplug all wood workshop machines",
        description:
          "Unplug all power tools and machines including table saws, band saws, sanders, drills, and routers. This prevents electrical hazards and unauthorized use.",
      },
      wood_door: {
        text: "Close and lock the wood workshop door",
        description:
          "Ensure the wood workshop door is fully closed and locked. Use the provided key to secure the deadbolt. This prevents unauthorized access to tools and materials.",
      },
      wood_windows: {
        text: "Close all windows in the wood workshop",
        description:
          "Close and latch all windows in the wood workshop. This protects against weather, prevents heat loss, and enhances security. Check both upper and lower windows.",
      },
      metal_lights: {
        text: "Turn off the lights in the metal workshop",
        description:
          "Turn off all lighting in the metal workshop including overhead lights, welding area lights, and task lighting. Verify all switches are in the off position.",
      },
      metal_machines: {
        text: "Unplug all metal workshop machines",
        description:
          "Disconnect all metal working equipment including welders, grinders, drill presses, and lathes. Ensure gas cylinders for welding are turned off and secured.",
      },
      metal_door: {
        text: "Close and lock the metal workshop door",
        description:
          "Secure the metal workshop by closing and locking the door. Ensure the lock is fully engaged. This protects expensive metalworking equipment and materials.",
      },
      metal_windows: {
        text: "Close all windows in the metal workshop",
        description:
          "Close and secure all windows in the metal workshop. This is especially important for fire safety and to prevent dust and debris from entering overnight.",
      },
      common_lights: {
        text: "Turn off all common area lights",
        description:
          "Turn off lights in all common areas including hallways, bathrooms, kitchen, and meeting spaces. Leave only essential security lighting on if required.",
      },
      heating: {
        text: "Adjust heating/cooling to night mode",
        description:
          "Set the thermostat to night mode (typically 15°C in winter, off in summer). This saves energy while preventing pipes from freezing. The thermostat is located in the main hallway.",
      },
      main_door: {
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
      wood_lights: {
        text: "Éteindre les lumières de l'atelier bois",
        description:
          "Assurez-vous que toutes les lumières de l'atelier bois sont éteintes pour économiser l'énergie et assurer la sécurité. Vérifiez les lumières principales au plafond, les lampes de travail aux établis et tout éclairage supplémentaire.",
      },
      wood_machines: {
        text: "Débrancher toutes les machines de l'atelier bois",
        description:
          "Débranchez tous les outils électriques et machines, y compris les scies à table, scies à ruban, ponceuses, perceuses et défonceuses. Cela prévient les risques électriques et l'utilisation non autorisée.",
      },
      wood_door: {
        text: "Fermer et verrouiller la porte de l'atelier bois",
        description:
          "Assurez-vous que la porte de l'atelier bois est complètement fermée et verrouillée. Utilisez la clé fournie pour sécuriser le verrou. Cela empêche l'accès non autorisé aux outils et matériaux.",
      },
      wood_windows: {
        text: "Fermer toutes les fenêtres de l'atelier bois",
        description:
          "Fermez et verrouillez toutes les fenêtres de l'atelier bois. Cela protège contre les intempéries, empêche la perte de chaleur et améliore la sécurité. Vérifiez les fenêtres supérieures et inférieures.",
      },
      metal_lights: {
        text: "Éteindre les lumières de l'atelier métal",
        description:
          "Éteignez tout l'éclairage de l'atelier métal, y compris les lumières au plafond, les lumières de la zone de soudage et l'éclairage de travail. Vérifiez que tous les interrupteurs sont en position éteinte.",
      },
      metal_machines: {
        text: "Débrancher toutes les machines de l'atelier métal",
        description:
          "Déconnectez tous les équipements de travail du métal, y compris les soudeuses, meuleuses, perceuses à colonne et tours. Assurez-vous que les bouteilles de gaz pour le soudage sont fermées et sécurisées.",
      },
      metal_door: {
        text: "Fermer et verrouiller la porte de l'atelier métal",
        description:
          "Sécurisez l'atelier métal en fermant et verrouillant la porte. Assurez-vous que le verrou est complètement engagé. Cela protège les équipements et matériaux coûteux de travail du métal.",
      },
      metal_windows: {
        text: "Fermer toutes les fenêtres de l'atelier métal",
        description:
          "Fermez et sécurisez toutes les fenêtres de l'atelier métal. C'est particulièrement important pour la sécurité incendie et pour empêcher la poussière et les débris d'entrer pendant la nuit.",
      },
      common_lights: {
        text: "Éteindre toutes les lumières des espaces communs",
        description:
          "Éteignez les lumières dans tous les espaces communs, y compris les couloirs, salles de bain, cuisine et espaces de réunion. Laissez uniquement l'éclairage de sécurité essentiel allumé si nécessaire.",
      },
      heating: {
        text: "Régler le chauffage/climatisation en mode nuit",
        description:
          "Réglez le thermostat en mode nuit (généralement 15°C en hiver, éteint en été). Cela économise l'énergie tout en empêchant les tuyaux de geler. Le thermostat est situé dans le couloir principal.",
      },
      main_door: {
        text: "Verrouiller la porte d'entrée principale",
        description:
          "Assurez-vous que la porte d'entrée principale est complètement fermée et verrouillée. Engagez à la fois la serrure de poignée et le verrou. Vérifiez que la porte est sécurisée en la testant de l'extérieur.",
      },
      alarm: {
        text: "Activer l'alarme de sécurité",
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
      wood_lights: {
        text: "Schakel de lichten in de houtworkshop uit",
        description:
          "Zorg ervoor dat alle lichten in de houtworkshop zijn uitgeschakeld om energie te besparen en de veiligheid te waarborgen. Controleer de hoofdverlichting aan het plafond, taakverlichting bij werkbanken en eventuele extra verlichting.",
      },
      wood_machines: {
        text: "Haal de stekker uit alle houtworkshop machines",
        description:
          "Haal de stekker uit alle elektrisch gereedschap en machines, inclusief tafelzagen, lintzagen, schuurmachines, boren en freesmachines. Dit voorkomt elektrische gevaren en ongeautoriseerd gebruik.",
      },
      wood_door: {
        text: "Sluit en vergrendel de deur van de houtworkshop",
        description:
          "Zorg ervoor dat de deur van de houtworkshop volledig gesloten en vergrendeld is. Gebruik de meegeleverde sleutel om het slot te beveiligen. Dit voorkomt ongeautoriseerde toegang tot gereedschap en materialen.",
      },
      wood_windows: {
        text: "Sluit alle ramen in de houtworkshop",
        description:
          "Sluit en vergrendel alle ramen in de houtworkshop. Dit beschermt tegen weer, voorkomt warmteverlies en verbetert de beveiliging. Controleer zowel de bovenste als onderste ramen.",
      },
      metal_lights: {
        text: "Schakel de lichten in de metaalworkshop uit",
        description:
          "Schakel alle verlichting in de metaalworkshop uit, inclusief plafondverlichting, lasgebied verlichting en taakverlichting. Controleer of alle schakelaars in de uit-positie staan.",
      },
      metal_machines: {
        text: "Haal de stekker uit alle metaalworkshop machines",
        description:
          "Koppel alle metaalbewerkingsapparatuur los, inclusief lasapparaten, slijpmachines, kolomboormachines en draaibanken. Zorg ervoor dat gasflessen voor lassen zijn afgesloten en beveiligd.",
      },
      metal_door: {
        text: "Sluit en vergrendel de deur van de metaalworkshop",
        description:
          "Beveilig de metaalworkshop door de deur te sluiten en te vergrendelen. Zorg ervoor dat het slot volledig is ingeschakeld. Dit beschermt dure metaalbewerkingsapparatuur en materialen.",
      },
      metal_windows: {
        text: "Sluit alle ramen in de metaalworkshop",
        description:
          "Sluit en beveilig alle ramen in de metaalworkshop. Dit is vooral belangrijk voor brandveiligheid en om te voorkomen dat stof en puin 's nachts binnenkomen.",
      },
      common_lights: {
        text: "Schakel alle lichten in gemeenschappelijke ruimtes uit",
        description:
          "Schakel de lichten uit in alle gemeenschappelijke ruimtes, inclusief gangen, badkamers, keuken en vergaderruimtes. Laat alleen essentiële beveiligingsverlichting aan indien nodig.",
      },
      heating: {
        text: "Stel verwarming/koeling in op nachtmodus",
        description:
          "Stel de thermostaat in op nachtmodus (meestal 15°C in de winter, uit in de zomer). Dit bespaart energie terwijl het voorkomt dat leidingen bevriezen. De thermostaat bevindt zich in de hoofdgang.",
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
