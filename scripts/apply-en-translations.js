#!/usr/bin/env node
// Apply English translations to incident files.
// Reads translations.json with shape:
// {
//   "filename.json": {
//     "name_en": "...",
//     "description_en": "...",
//     "location_name_en": "...",
//     "actors_en": ["...", "..."],            // by index, parallel to actors[]
//     "affectedRights_en": ["...", "..."],    // parallel to asm:affectedRights_de
//     "timeline_en": [                         // parallel to asm:reverseTimeline
//       {"title_en": "...", "description_en": "..."},
//       ...
//     ],
//     "sources_titles_en": ["...", "..."]      // parallel to asm:sources
//   }
// }
//
// For each *_de field, inserts a *_en field directly after it.
// Idempotent: skips if *_en already present.

const fs = require('fs');
const path = require('path');

const INCIDENTS_DIR = path.join(__dirname, '..', 'data', 'incidents');
const translationsPath = path.join(__dirname, 'en-translations.json');

if (!fs.existsSync(translationsPath)) {
  console.error('Missing translations file:', translationsPath);
  process.exit(1);
}

const translations = JSON.parse(fs.readFileSync(translationsPath, 'utf8'));

// Build a new object with *_en inserted directly after *_de while preserving key order.
function withEnInserted(obj, enValues) {
  // enValues: { name_en, description_en, affectedRights_en }
  const result = {};
  for (const key of Object.keys(obj)) {
    result[key] = obj[key];
    if (key === 'name_de' && enValues.name_en !== undefined && !('name_en' in obj)) {
      result.name_en = enValues.name_en;
    }
    if (key === 'description_de' && enValues.description_en !== undefined && !('description_en' in obj)) {
      result.description_en = enValues.description_en;
    }
    if (key === 'asm:affectedRights_de' && enValues.affectedRights_en !== undefined && !('asm:affectedRights_en' in obj)) {
      result['asm:affectedRights_en'] = enValues.affectedRights_en;
    }
  }
  return result;
}

function processLocation(loc, name_en) {
  if (!loc || typeof loc !== 'object') return loc;
  if ('name_en' in loc) return loc;
  const result = {};
  for (const key of Object.keys(loc)) {
    result[key] = loc[key];
    if (key === 'name_de' && name_en !== undefined) {
      result.name_en = name_en;
    }
  }
  return result;
}

function processActor(actor, name_en) {
  if (!actor || typeof actor !== 'object') return actor;
  if ('name_en' in actor) return actor;
  const result = {};
  for (const key of Object.keys(actor)) {
    result[key] = actor[key];
    if (key === 'name_de' && name_en !== undefined) {
      result.name_en = name_en;
    }
  }
  return result;
}

function processTimelineEntry(entry, en) {
  if (!entry || typeof entry !== 'object') return entry;
  const hasTitleEn = 'title_en' in entry;
  const hasDescEn = 'description_en' in entry;
  if (hasTitleEn && hasDescEn) return entry;
  const result = {};
  for (const key of Object.keys(entry)) {
    result[key] = entry[key];
    if (key === 'title_de' && en && en.title_en !== undefined && !hasTitleEn) {
      result.title_en = en.title_en;
    }
    if (key === 'description_de' && en && en.description_en !== undefined && !hasDescEn) {
      result.description_en = en.description_en;
    }
  }
  return result;
}

function processSource(source, title_en) {
  if (!source || typeof source !== 'object') return source;
  if ('title_en' in source) return source;
  const result = {};
  for (const key of Object.keys(source)) {
    result[key] = source[key];
    if (key === 'title_de' && title_en !== undefined) {
      result.title_en = title_en;
    }
  }
  // Fallback: if no title_de present at all, still leave alone (not our task scope here).
  return result;
}

let processed = 0;
let skipped = 0;
let errors = 0;

for (const [filename, t] of Object.entries(translations)) {
  const filepath = path.join(INCIDENTS_DIR, filename);
  if (!fs.existsSync(filepath)) {
    console.error('Missing:', filename);
    errors++;
    continue;
  }
  try {
    const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

    // Check idempotency: if top-level name_en already exists, skip.
    if ('name_en' in data && 'description_en' in data && 'asm:affectedRights_en' in data) {
      skipped++;
      continue;
    }

    // 1. location
    if (data.location && t.location_name_en !== undefined) {
      data.location = processLocation(data.location, t.location_name_en);
    }

    // 2. actors
    if (Array.isArray(data['asm:actors']) && Array.isArray(t.actors_en)) {
      data['asm:actors'] = data['asm:actors'].map((actor, i) =>
        processActor(actor, t.actors_en[i])
      );
    }

    // 3. reverseTimeline
    if (Array.isArray(data['asm:reverseTimeline']) && Array.isArray(t.timeline_en)) {
      data['asm:reverseTimeline'] = data['asm:reverseTimeline'].map((entry, i) =>
        processTimelineEntry(entry, t.timeline_en[i])
      );
    }

    // 4. sources
    if (Array.isArray(data['asm:sources']) && Array.isArray(t.sources_titles_en)) {
      data['asm:sources'] = data['asm:sources'].map((source, i) =>
        processSource(source, t.sources_titles_en[i])
      );
    }

    // 5. top-level name_en, description_en, affectedRights_en
    const newData = withEnInserted(data, {
      name_en: t.name_en,
      description_en: t.description_en,
      affectedRights_en: t.affectedRights_en
    });

    fs.writeFileSync(filepath, JSON.stringify(newData, null, 2) + '\n', 'utf8');
    processed++;
    console.log('OK:', filename);
  } catch (e) {
    console.error('Error in', filename, e.message);
    errors++;
  }
}

console.log(`\nProcessed: ${processed}, Skipped: ${skipped}, Errors: ${errors}`);
