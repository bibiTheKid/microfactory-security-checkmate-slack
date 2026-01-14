# Translation Synchronization Guide

## Overview
This guide ensures that when French (fr) checklist items are updated in `i18n.js`, the English (en) and Dutch (nl) translations are kept in sync.

## Translation Mapping

All three languages share the **same item keys** in the same order:
1. wood_door_liverpoolstreet
2. wood_lights_1
3. wood_lights_2
4. wood_door
5. metal_lights
6. metal_door
7. common_door_1
8. common_lights_1
9. common_door_2
10. common_lights_2
11. common_door_serigraphy
12. parking_door_1
13. parking_door_2
14. alarm

## How to Update Translations

### When updating French (fr) items:
1. Update the French text and description in `i18n.js` (lines 177-244)
2. Translate the changes to English and Dutch
3. Update the corresponding items in the English section (lines 53-116)
4. Update the corresponding items in the Dutch section (lines 306-375)
5. **Update `fr_items.csv` with the new French values** ⚠️ IMPORTANT

### Files to Update:
- `i18n.js` - Main translation file (3 language sections)
- `fr_items.csv` - French items export (for reference/reporting)

### Translation Guidelines

**English (en):**
- Use clear, imperative instructions
- Keep terminology consistent (e.g., "metal shutter", "electrical panel", "keypad")
- Match the structure and tone of French

**Dutch (nl):**
- Use formal Dutch (u/uw instead of je/jouw)
- Keep terminology consistent (e.g., "metalen rolluik", "elektriciteitsschakelbord", "toetsenpaneel")
- Match the structure and tone of French

## Key Terminology

| French | English | Dutch |
|--------|---------|-------|
| rideau métalique | metal shutter | metalen rolluik |
| panneau électrique | electrical panel | elektriciteitsschakelbord |
| interrupteur | switch | schakelaar |
| clavier | keypad | toetsenpaneel |
| porte coupe-feu | fire door | brandwerende deur |
| atelier bois | wood workshop | houtworkshop |
| atelier métal | metal workshop | metaalworkshop |
| espaces communs | common areas | gemeenschappelijke ruimtes |
| serographie | serigraphy | serigraficdeur |
| portail | gate | hek |

## Verification Checklist

After updating translations:
- [ ] All three languages have the same item keys
- [ ] Item keys are in the same order
- [ ] Descriptions match the French meaning
- [ ] Terminology is consistent across all languages
- [ ] CSV file is updated with latest French values

