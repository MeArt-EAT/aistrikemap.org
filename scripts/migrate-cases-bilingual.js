#!/usr/bin/env node
/**
 * scripts/migrate-cases-bilingual.js
 *
 * Migriert data/labor-impact-cases/*.json zu bilingualem Schema:
 *  - industry → industry_de + industry_en
 *  - added_by → added_by_de + added_by_en
 *
 * Idempotent: erkennt bereits migrierte Files an dem Vorhandensein
 * von industry_de und überspringt sie.
 */
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'data', 'labor-impact-cases');

const INDUSTRY_EN = {
  'E-Commerce / Cloud':              'E-commerce / cloud',
  'EdTech / Sprachlern-App':         'EdTech / language-learning app',
  'Fintech':                         'Fintech',
  'IT-Beratung':                     'IT consulting',
  'IT-Services / Outsourcing':       'IT services / outsourcing',
  'Medien-Monitoring / Pressespiegel': 'Media monitoring / press review',
  'Print-/Online-Medien':            'Print / online media',
  'Software':                        'Software',
  'Software / Cloud':                'Software / cloud',
  'Software / IT-Services':          'Software / IT services',
  'Software / SaaS':                 'Software / SaaS',
  'Telekommunikation':               'Telecommunications'
};

const ADDED_BY_EN = {
  'AIStrikeMap (kuratiert)': 'AIStrikeMap (curated)'
};

function migrate(obj) {
  let changes = 0;
  // industry → industry_de/industry_en
  if (typeof obj.industry === 'string' && !obj.industry_de) {
    const de = obj.industry;
    const en = INDUSTRY_EN[de];
    if (!en) {
      console.warn('  WARN: no EN mapping for industry:', JSON.stringify(de));
      return changes;
    }
    obj.industry_de = de;
    obj.industry_en = en;
    delete obj.industry;
    changes++;
  }
  // added_by → added_by_de/added_by_en
  if (typeof obj.added_by === 'string' && !obj.added_by_de) {
    const de = obj.added_by;
    const en = ADDED_BY_EN[de] || de;
    obj.added_by_de = de;
    obj.added_by_en = en;
    delete obj.added_by;
    changes++;
  }
  return changes;
}

function main() {
  const files = fs.readdirSync(DIR)
    .filter(f => f.endsWith('.json') && !f.startsWith('_'))
    .map(f => path.join(DIR, f));

  let totalChanges = 0, filesChanged = 0;
  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const obj = JSON.parse(raw);
    const changes = migrate(obj);
    if (changes > 0) {
      filesChanged++;
      totalChanges += changes;
      fs.writeFileSync(file, JSON.stringify(obj, null, 2) + '\n', 'utf8');
      console.log(`  ${changes} changes  ${path.basename(file)}`);
    }
  }

  console.log(`\n=== Cases-Bilingual-Migration Report ===`);
  console.log(`Files scanned: ${files.length}`);
  console.log(`Files changed: ${filesChanged}`);
  console.log(`Total field-changes: ${totalChanges}`);
}

if (require.main === module) main();
