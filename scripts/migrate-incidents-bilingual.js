#!/usr/bin/env node
/**
 * scripts/migrate-incidents-bilingual.js
 *
 * Phase 1 (Schema-Migration ohne Übersetzung):
 * Kopiert die existierenden deutschen Felder additiv in *_de-Felder, so dass
 * I18n.localized() im Frontend funktioniert. Die alten Felder (name, description,
 * etc.) bleiben als Fallback erhalten — Phase 3 kann sie nach erfolgreicher
 * Übersetzung optional entfernen.
 *
 * Idempotent: erkennt bereits migrierte Files am Vorhandensein von name_de.
 *
 * Betroffene Felder pro Incident:
 *   name              -> name_de
 *   description       -> description_de
 *   location.name     -> location.name_de
 *   asm:actors[].name -> asm:actors[].name_de
 *   asm:affectedRights[]                  -> asm:affectedRights_de[]
 *   asm:reverseTimeline[].title           -> asm:reverseTimeline[].title_de
 *   asm:reverseTimeline[].description     -> asm:reverseTimeline[].description_de
 *   asm:sources[].title                   -> asm:sources[].title_de
 *
 * Eigennamen (asm:actors[].asm:systems[], sources[].url, etc.) bleiben
 * unverändert, weil sie sprachneutral sind.
 */
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'data', 'incidents');

function migrate(obj) {
  let changes = 0;

  // Top-level fields
  if (typeof obj.name === 'string' && !obj.name_de) {
    obj.name_de = obj.name;
    changes++;
  }
  if (typeof obj.description === 'string' && !obj.description_de) {
    obj.description_de = obj.description;
    changes++;
  }

  // Location
  if (obj.location && typeof obj.location.name === 'string' && !obj.location.name_de) {
    obj.location.name_de = obj.location.name;
    changes++;
  }

  // Actors
  if (Array.isArray(obj['asm:actors'])) {
    for (const actor of obj['asm:actors']) {
      if (typeof actor.name === 'string' && !actor.name_de) {
        actor.name_de = actor.name;
        changes++;
      }
    }
  }

  // Affected rights
  if (Array.isArray(obj['asm:affectedRights']) && !obj['asm:affectedRights_de']) {
    obj['asm:affectedRights_de'] = obj['asm:affectedRights'].slice();
    changes++;
  }

  // Reverse timeline
  if (Array.isArray(obj['asm:reverseTimeline'])) {
    for (const item of obj['asm:reverseTimeline']) {
      if (typeof item.title === 'string' && !item.title_de) {
        item.title_de = item.title;
        changes++;
      }
      if (typeof item.description === 'string' && !item.description_de) {
        item.description_de = item.description;
        changes++;
      }
    }
  }

  // Sources — title only (urls/publishers stay language-neutral)
  if (Array.isArray(obj['asm:sources'])) {
    for (const src of obj['asm:sources']) {
      if (typeof src.title === 'string' && !src.title_de) {
        src.title_de = src.title;
        changes++;
      }
    }
  }

  return changes;
}

function main() {
  const files = fs.readdirSync(DIR)
    .filter(f => f.endsWith('.json') && !f.startsWith('_'))
    .map(f => path.join(DIR, f));

  let totalChanges = 0, filesChanged = 0, filesUnchanged = 0;
  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const obj = JSON.parse(raw);
    const changes = migrate(obj);
    if (changes > 0) {
      filesChanged++;
      totalChanges += changes;
      fs.writeFileSync(file, JSON.stringify(obj, null, 2) + '\n', 'utf8');
      console.log(`  +${String(changes).padStart(3)} fields  ${path.basename(file)}`);
    } else {
      filesUnchanged++;
    }
  }

  console.log(`\n=== Incidents-Schema-Migration Report ===`);
  console.log(`Files scanned:     ${files.length}`);
  console.log(`Files migrated:    ${filesChanged}`);
  console.log(`Files unchanged:   ${filesUnchanged} (already migrated or empty)`);
  console.log(`Total field-adds:  ${totalChanges}`);
}

if (require.main === module) main();
