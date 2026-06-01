#!/usr/bin/env node
/**
 * scripts/fix-doubled-slug-prefix.js
 *
 * Repariert Incident-Files deren Slug ein verdoppeltes Country-Prefix
 * trägt (z.B. "usa-usa-...", "burkina-faso-burkina-faso-..."). Verursacht
 * durch einen alten Bug in promote-candidates.generateSlug (gefixt
 * Session 2026-06-01).
 *
 * Was passiert:
 *   1. Scan data/incidents/ nach Files deren Slug doppeltes Prefix hat
 *   2. Bestimme neuen Slug (einfach eine Wiederholung des Prefix raus)
 *   3. Datei umbenennen
 *   4. Im JSON: @id-Feld aktualisieren
 *   5. data/index.json: id + file aktualisieren
 *
 * Nach dem Lauf manuell:
 *   node scripts/bundle-incidents.js
 *   node scripts/audit-bilingual-incidents.js
 *   git add data/ && git commit
 *
 * Usage:
 *   node scripts/fix-doubled-slug-prefix.js --dry-run
 *   node scripts/fix-doubled-slug-prefix.js
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { countryPrefix } = require('./promote-candidates.js');

const ROOT = path.join(__dirname, '..');
const INCIDENTS_DIR = path.join(ROOT, 'data', 'incidents');
const INDEX_FILE = path.join(ROOT, 'data', 'index.json');

const ISO_CODES = [
  'DE','AT','CH','LI','US','GB','UK','IE','FR','ES','PT','IT','NL','BE','LU',
  'SE','NO','FI','DK','IS','PL','CZ','SK','HU','RO','BG','GR','RS','HR','SI',
  'BA','AL','MK','ME','EE','LV','LT','UA','BY','MD','RU','TR','GE','AM','AZ',
  'KZ','UZ','KG','TJ','TM','CN','JP','KR','KP','TW','HK','MO','MN','IN','PK',
  'BD','LK','NP','BT','MV','AF','ID','PH','VN','TH','MY','SG','MM','KH','LA',
  'AU','NZ','PG','FJ','SB','VU','TO','WS','KI','FM','MH','SA','AE','QA','KW',
  'BH','OM','YE','IR','IQ','SY','LB','JO','IL','PS','EG','LY','TN','DZ','MA',
  'SD','SS','ET','ER','DJ','SO','KE','UG','RW','BI','TZ','NG','GH','SN','CI',
  'ML','BF','NE','TD','CM','GA','CG','CD','CF','ZA','NA','BW','ZW','ZM','MZ',
  'AO','MG','BR','AR','CL','UY','PY','BO','PE','EC','CO','VE','GY','SR','MX',
  'GT','HN','SV','NI','CR','PA','CU','DO','HT','JM','TT','BB','CA','EU'
];

// All known prefixes from longest to shortest (multi-word first, e.g.
// "burkina-faso" before "burkina"). EU is added manually because it's
// not in the ISO list as a country but is used.
const PREFIXES = Array.from(new Set([
  ...ISO_CODES.map(cc => countryPrefix(cc)),
  'eu'
])).sort((a, b) => b.length - a.length);

function findDoubledPrefix(slug) {
  for (const p of PREFIXES) {
    const doubled = p + '-' + p + '-';
    if (slug.startsWith(doubled)) return p;
  }
  return null;
}

function newSlug(oldSlug, prefix) {
  // Entferne genau eine Wiederholung des Prefix
  return oldSlug.replace(prefix + '-' + prefix + '-', prefix + '-');
}

function main(argv) {
  const dryRun = argv.includes('--dry-run');

  const files = fs.readdirSync(INCIDENTS_DIR).filter(f => f.endsWith('.json'));
  const indexRaw = fs.readFileSync(INDEX_FILE, 'utf8');
  const index = JSON.parse(indexRaw);

  const renames = [];
  for (const file of files) {
    const slug = file.replace(/\.json$/, '');
    const prefix = findDoubledPrefix(slug);
    if (!prefix) continue;
    const fixed = newSlug(slug, prefix);
    renames.push({ oldSlug: slug, newSlug: fixed, prefix });
  }

  console.log('found ' + renames.length + ' doubled-prefix incident files' + (dryRun ? ' (DRY-RUN)' : ''));

  // Sanity-check: collision with existing slug?
  const existingSet = new Set(files.map(f => f.replace(/\.json$/, '')));
  for (const r of renames) {
    if (existingSet.has(r.newSlug)) {
      console.error('  COLLISION: ' + r.oldSlug + ' -> ' + r.newSlug + ' (target slug exists already!)');
      process.exit(1);
    }
  }

  for (const r of renames) {
    console.log('  ' + r.oldSlug);
    console.log('    -> ' + r.newSlug);
    if (dryRun) continue;

    // 1) Read incident JSON, update @id
    const oldPath = path.join(INCIDENTS_DIR, r.oldSlug + '.json');
    const newPath = path.join(INCIDENTS_DIR, r.newSlug + '.json');
    const json = JSON.parse(fs.readFileSync(oldPath, 'utf8'));
    if (json['@id']) {
      json['@id'] = json['@id'].replace('/incidents/' + r.oldSlug, '/incidents/' + r.newSlug);
    }
    fs.writeFileSync(newPath, JSON.stringify(json, null, 2) + '\n', 'utf8');
    fs.unlinkSync(oldPath);

    // 2) Update index.json entry
    const entry = index.incidents.find(it => it.id === r.oldSlug || it.file === r.oldSlug + '.json');
    if (entry) {
      entry.id = r.newSlug;
      entry.file = r.newSlug + '.json';
    } else {
      console.warn('    (no index entry found for ' + r.oldSlug + ')');
    }
  }

  if (!dryRun && renames.length > 0) {
    fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2) + '\n', 'utf8');
    console.log('\nindex.json updated.');
    console.log('\nNext steps:');
    console.log('  node scripts/bundle-incidents.js');
    console.log('  node scripts/audit-bilingual-incidents.js');
    console.log('  git add data/ scripts/ && git commit');
  }
}

if (require.main === module) {
  main(process.argv.slice(2));
}
