#!/usr/bin/env node
// Variant of apply-en-translations.js that reads en-translations-batch.json.
const fs = require('fs');
const path = require('path');

const INCIDENTS_DIR = path.join(__dirname, '..', 'data', 'incidents');
const translationsPath = path.join(__dirname, 'en-translations-batch.json');

const translations = JSON.parse(fs.readFileSync(translationsPath, 'utf8'));

function withEnInserted(obj, enValues) {
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
  return result;
}

let processed = 0;
let skipped = 0;
let errors = 0;
const errorDetails = [];

for (const [filename, t] of Object.entries(translations)) {
  const filepath = path.join(INCIDENTS_DIR, filename);
  if (!fs.existsSync(filepath)) {
    errors++;
    errorDetails.push(`${filename}: file not found`);
    continue;
  }
  try {
    const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

    if ('name_en' in data) {
      skipped++;
      continue;
    }

    if (data.location && t.location_name_en !== undefined) {
      data.location = processLocation(data.location, t.location_name_en);
    }

    if (Array.isArray(data['asm:actors']) && Array.isArray(t.actors_en)) {
      data['asm:actors'] = data['asm:actors'].map((actor, i) =>
        processActor(actor, t.actors_en[i])
      );
    }

    if (Array.isArray(data['asm:reverseTimeline']) && Array.isArray(t.timeline_en)) {
      data['asm:reverseTimeline'] = data['asm:reverseTimeline'].map((entry, i) =>
        processTimelineEntry(entry, t.timeline_en[i])
      );
    }

    if (Array.isArray(data['asm:sources']) && Array.isArray(t.sources_titles_en)) {
      data['asm:sources'] = data['asm:sources'].map((source, i) =>
        processSource(source, t.sources_titles_en[i])
      );
    }

    const newData = withEnInserted(data, {
      name_en: t.name_en,
      description_en: t.description_en,
      affectedRights_en: t.affectedRights_en
    });

    fs.writeFileSync(filepath, JSON.stringify(newData, null, 2) + '\n', 'utf8');
    processed++;
  } catch (e) {
    errors++;
    errorDetails.push(`${filename}: ${e.message}`);
  }
}

console.log(JSON.stringify({ processed, skipped, errors, errorDetails }, null, 2));
