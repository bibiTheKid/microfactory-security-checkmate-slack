# 🌍 Internationalization (i18n) Implementation

## Overview

Successfully added **multi-language support** to the Microfactory Security Checkmate app! The app now automatically detects each user's Slack language preference and displays content in **English, French, or Dutch**.

## Supported Languages

- 🇬🇧 **English (en)** - Default language
- 🇫🇷 **French (fr)** - Français
- 🇳🇱 **Dutch (nl)** - Nederlands

## How It Works

### 1. **Automatic Language Detection**

The app uses Slack's `users.info` API to get each user's language preference:

```javascript
async function getUserLanguage(client, userId) {
  const userInfo = await client.users.info({ user: userId });
  const slackLocale = userInfo.user.locale || "en-US";
  
  // Map Slack locale to supported languages
  if (slackLocale.startsWith("fr")) return "fr";
  if (slackLocale.startsWith("nl")) return "nl";
  return "en"; // Default to English
}
```

### 2. **Translation System**

All text is stored in `i18n.js` with translations for each language:

```javascript
const translations = {
  en: {
    appTitle: "🏭 Microfactory Security Checklist",
    completeButton: "Complete ✓",
    items: {
      wood_lights: {
        text: "💡 Turn off the lights in the wood workshop",
        description: "Make sure all lights..."
      }
    }
  },
  fr: {
    appTitle: "🏭 Liste de Sécurité Microfactory",
    completeButton: "Terminer ✓",
    items: {
      wood_lights: {
        text: "💡 Éteindre les lumières de l'atelier bois",
        description: "Assurez-vous que toutes les lumières..."
      }
    }
  },
  nl: {
    appTitle: "🏭 Microfactory Beveiligingschecklist",
    completeButton: "Voltooien ✓",
    items: {
      wood_lights: {
        text: "💡 Schakel de lichten in de houtworkshop uit",
        description: "Zorg ervoor dat alle lichten..."
      }
    }
  }
}
```

### 3. **Dynamic Content Loading**

Every UI component now accepts a `lang` parameter and loads the appropriate translations:

```javascript
// Modal
const lang = await getUserLanguage(client, userId);
const modal = buildChecklistModal(lang);

// App Home
const appHomeBlocks = buildAppHomeView({ lang });

// Info Modal
const infoModal = buildInfoModal(item, lang);

// Completion Message
const completionBlocks = buildCompletionMessage(checkedItems, userName, lang);
```

## Files Modified

### 1. **`i18n.js`** (NEW)
- Contains all translations for en, fr, nl
- `getTranslations(lang)` - Returns translations for a language
- `getUserLanguage(client, userId)` - Detects user's language from Slack

### 2. **`checklist-data.js`**
- Removed hardcoded `text` and `description` fields
- Now only contains:
  - `id` - Item identifier
  - `category` - Category name (used as key for translation)
  - `emoji` - Emoji icon
  - `imageUrl` - Image URL (language-independent)

**Before:**
```javascript
{
  id: "wood_lights",
  category: "Wood Workshop",
  text: "💡 Turn off the lights in the wood workshop",
  description: "Make sure all lights...",
  emoji: "💡",
  imageUrl: "https://..."
}
```

**After:**
```javascript
{
  id: "wood_lights",
  category: "Wood Workshop",
  emoji: "💡",
  imageUrl: "https://..."
}
```

### 3. **`blocks.js`**
Updated all block-building functions to accept `lang` parameter:

- `groupItemsByCategory(t)` - Groups items with translated categories
- `buildChecklistBlocks(actionIdPrefix, blockIdPrefix, lang)` - Builds checklist with translated text
- `buildChecklistModal(lang)` - Builds modal with translated content
- `buildInfoModal(item, lang)` - Builds info modal with translated content
- `buildCompletionMessage(checkedItems, userName, lang)` - Builds completion message with translated content
- `buildAppHomeView(options)` - Accepts `options.lang` for language

### 4. **`app.js`**
Updated all handlers to detect user language and pass it to block builders:

- Slash command `/security-check` - Detects language, opens translated modal
- Modal checkbox handler - Uses translated success message
- App Home opened event - Shows App Home in user's language
- App Home checkbox handler - Uses translated success message
- Info button handler - Opens info modal in user's language
- Manual submit handler - Uses translated success messages
- `postCompletionToChannel(checkedItems, userId, client, lang)` - Posts translated completion message
- `handleCheckboxAction(..., lang, ...)` - Handles checkboxes with language support

## Translation Coverage

### UI Elements
- ✅ App title and headers
- ✅ Button labels (Complete, Cancel, Close, More details)
- ✅ Instructions and intro text
- ✅ Success messages
- ✅ Error messages
- ✅ "How to Use" section

### Checklist Items
- ✅ All 12 item texts
- ✅ All 12 item descriptions
- ✅ Category names (Wood Workshop, Metal Workshop, Common Areas, Security)

### Completion Messages
- ✅ Completion title
- ✅ "Completed by" label
- ✅ "Completed items" label
- ✅ "Missing items" label
- ✅ "All items checked" message

## Example Translations

### English
```
🏭 Microfactory Security Checklist
Check off each item as you complete the closing procedures.

Wood Workshop
☐ 💡 Turn off the lights in the wood workshop    [More details]
☐ 🔌 Unplug all wood workshop machines           [More details]

[Complete ✓]
```

### French
```
🏭 Liste de Sécurité Microfactory
Cochez chaque élément au fur et à mesure que vous terminez les procédures de fermeture.

Atelier Bois
☐ 💡 Éteindre les lumières de l'atelier bois     [Plus de détails]
☐ 🔌 Débrancher toutes les machines de l'atelier bois  [Plus de détails]

[Terminer ✓]
```

### Dutch
```
🏭 Microfactory Beveiligingschecklist
Vink elk item af terwijl u de sluitingsprocedures voltooit.

Houtworkshop
☐ 💡 Schakel de lichten in de houtworkshop uit   [Meer details]
☐ 🔌 Haal de stekker uit alle houtworkshop machines  [Meer details]

[Voltooien ✓]
```

## User Experience

### Scenario 1: French User
1. User's Slack language is set to French (fr-FR)
2. User types `/security-check`
3. Modal opens with French title: "Liste de Sécurité"
4. All items are in French
5. Button says "Terminer ✓" instead of "Complete ✓"
6. Success message: "✅ Liste complétée avec succès!"
7. Completion posted to channel in French

### Scenario 2: Dutch User
1. User's Slack language is set to Dutch (nl-NL)
2. User opens App Home
3. Title shows: "🏭 Microfactory Beveiligingschecklist"
4. Instructions in Dutch
5. All checklist items in Dutch
6. Info modals open in Dutch
7. Success messages in Dutch

### Scenario 3: English User (Default)
1. User's Slack language is English or unsupported language
2. App displays in English (default fallback)
3. All content in English

## Testing

### Test Language Detection

```bash
npm start
```

**Test with different Slack language settings:**

1. **English User:**
   - Set Slack language to English
   - Type `/security-check`
   - Verify modal is in English

2. **French User:**
   - Set Slack language to Français
   - Type `/security-check`
   - Verify modal is in French

3. **Dutch User:**
   - Set Slack language to Nederlands
   - Type `/security-check`
   - Verify modal is in Dutch

### Test All Features

For each language, verify:
- ✅ Slash command opens translated modal
- ✅ App Home shows translated content
- ✅ Info buttons open translated modals
- ✅ Checkbox auto-submit shows translated success message
- ✅ Manual submit shows translated success message
- ✅ Completion message posted to channel is translated

## Benefits

### For Users
- 🌍 **Native language support** - Users see content in their preferred language
- 🎯 **Better comprehension** - Instructions are clearer in native language
- 🤝 **Inclusive** - Supports Brussels' multilingual community
- ✅ **Automatic** - No manual language selection needed

### For Maintainers
- 📝 **Centralized translations** - All text in one file (`i18n.js`)
- 🔄 **Easy to update** - Change translations in one place
- 🌐 **Easy to add languages** - Just add new language object
- 🧪 **Easy to test** - Change Slack language setting to test

## Adding New Languages

To add a new language (e.g., German):

1. **Add translation object to `i18n.js`:**
```javascript
de: {
  appTitle: "🏭 Microfactory Sicherheitscheckliste",
  completeButton: "Abschließen ✓",
  // ... all other translations
}
```

2. **Update `getUserLanguage()` function:**
```javascript
if (slackLocale.startsWith("de")) return "de";
```

3. **Update `getTranslations()` function:**
```javascript
const supportedLang = ["en", "fr", "nl", "de"].includes(lang) ? lang : "en";
```

That's it! The app will automatically support the new language.

## Technical Notes

### Language Detection
- Uses Slack's `users.info` API
- Checks `user.locale` field (e.g., "en-US", "fr-FR", "nl-NL")
- Maps to our supported languages
- Falls back to English if language not supported

### Performance
- Language is detected once per interaction
- Translations are loaded from memory (no database calls)
- Minimal performance impact

### Caching
- Currently no caching of user language
- Each interaction calls `getUserLanguage()`
- Could be optimized with caching if needed

## Future Enhancements

Potential improvements:
- 🗄️ **Cache user language** - Store in memory to reduce API calls
- 🌍 **Add more languages** - Spanish, Italian, Portuguese
- 📊 **Language analytics** - Track which languages are used most
- 🎨 **Language-specific images** - Different images per language
- 📝 **User language override** - Let users manually select language
- 🔄 **Dynamic translation loading** - Load translations from database

## Summary

✅ **Multi-language support implemented** - English, French, Dutch  
✅ **Automatic language detection** - Based on Slack user preferences  
✅ **All content translated** - UI, checklist items, messages  
✅ **Easy to maintain** - Centralized in `i18n.js`  
✅ **Easy to extend** - Simple to add new languages  
✅ **Backward compatible** - Defaults to English  

The app now provides a truly multilingual experience for the Brussels Microfactory community! 🎉🌍

