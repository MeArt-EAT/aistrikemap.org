#!/usr/bin/env node
/**
 * scripts/merge-internal-duplicates.js
 *
 * Bereinigt die in find-internal-duplicates.js identifizierten ECHTEN
 * Dubletten-Gruppen. Pro Gruppe:
 *   - keep = die zu behaltende Version (Timeline > mehr Sources)
 *   - drop[] = zu entfernende Dubletten
 *   - Sources aus drop werden in keep gemergt (dedupliziert nach URL)
 *   - keep behaelt seine reverseTimeline / affectedRights
 *   - drop-Files werden geloescht + aus index.json entfernt
 *
 * Gruppen sind per eindeutigem Slug-Teilstring definiert. Jeder Teilstring
 * MUSS genau einen Incident matchen, sonst Abbruch (keine versehentlichen
 * Loeschungen).
 *
 * FALSE-POSITIVES bewusst NICHT enthalten:
 *   - NL Uber (290 Mio) vs Clearview (30,5 Mio) = verschiedene Bussgelder
 *   - Disney/Midjourney vs Disney/MiniMax = verschiedene Verfahren
 *
 * Usage:
 *   node scripts/merge-internal-duplicates.js            (DRY-RUN)
 *   node scripts/merge-internal-duplicates.js --apply
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const INCIDENTS_DIR = path.join(ROOT, 'data', 'incidents');
const INDEX_FILE = path.join(ROOT, 'data', 'index.json');

// keep-Teilstring + drop-Teilstrings (je genau 1 Incident)
const GROUPS = [
  { keep: 'griechenland-175-000-rekordbussgeld-gegen-migrations',
    drop: ['griechenland-datenschutzbehoerde-verhaengt-rekordbus', 'griechenland-rekordbussgeld-fuer-ki-ueberwachungssys'] },
  { keep: 'australien-50-schuelerinnen-der-bacchus-marsh-gramma',
    drop: ['australien-ki-deepfake-pornografie-von-bacchus-marsh'] },
  { keep: 'usa-fahrerloses-waymo-robotaxi-prallt-in-phoenix-geg',
    drop: ['usa-waymo-robotaxi-prallt-in-phoenix-gegen-telefonma'] },
  { keep: 'usa-mcdonalds-ki-chatbot-olivia-exponiert-daten',
    drop: ['usa-mchire-olivia-paradox-ai-recruiting-chatbot'] },
  { keep: 'usa-waymo-santa-monica-kind-2026',
    drop: ['usa-waymo-robotaxi-erfasst-kind-vor-grant-elementary'] },
  { keep: 'usa-dow-jones-und-new-york-post-verklagen-perplexity',
    drop: ['usa-perplexity-ai-verklagt-von-dow-jones-new-york-po'] },
  { keep: 'usa-character-ai-setzer-suizid-florida',
    drop: ['usa-14-jaehriger-sewell-setzer-iii-nimmt-sich-nach-c'] },
  { keep: 'palaestina-israel-gaza-corsight-gesichtserkennung-mit-google-photos-hunderte',
    drop: ['palaestina-gesichtserkennung-in-gaza-identifiziert-unschuldige-palaestinenser-falsch'] },
  { keep: 'uk-hugh-nelson-zu-18-jahren-haft-verurteilt-landmark',
    drop: ['uk-hugh-nelson-zu-18-jahren-haft-wegen-ki-generierte'] },
  { keep: "usa-disney-und-universal-verklagen-midjourney-wegen-zahlloser",
    drop: ['usa-disney-und-universal-verklagen-midjourney-wegen-massiver'] },
  { keep: 'usa-riaa-suno-udio-ki-musik-urheberrecht',
    drop: ['usa-sony-universal-und-warner-verklagen-suno-und-udi'] },
  { keep: 'suedkorea-nordkoreanische-hackergruppe-kimsuky-nutzt',
    drop: ['suedkorea-kimsuky-generiert-mit-chatgpt-deepfake-mil'] },
  // Batch C internal-dedup (2026-06-06):
  { keep: 'ibm-nutzte-ohne-einwilligung-der-abgebildeten',
    drop: ['ibms-diversity-in-faces-nutzte-eine-million'] },
  { keep: 'obermeyer-studie-deckt-rassen-bias',
    drop: ['optum-healthcare-algorithmus-racial-bias'] },
  { keep: 'sprecherinnen-klagen-gegen-lovo-wegen-unautorisi',
    drop: ['synchronsprecher-innen-verklagen-ki-start-up-lov'] }
];

function listSlugs() {
  return fs.readdirSync(INCIDENTS_DIR).filter(f => f.endsWith('.json')).map(f => f.replace(/\.json$/, ''));
}
function resolve(slugs, sub) {
  const m = slugs.filter(s => s.includes(sub));
  if (m.length === 0) throw new Error('NO MATCH for "' + sub + '"');
  if (m.length > 1) throw new Error('AMBIGUOUS "' + sub + '" -> ' + m.join(', '));
  return m[0];
}
function loadInc(slug) { return JSON.parse(fs.readFileSync(path.join(INCIDENTS_DIR, slug + '.json'), 'utf8')); }
function srcUrls(inc) { return new Set((inc['asm:sources'] || []).map(s => (s.url || '').trim()).filter(Boolean)); }

function main(argv) {
  const apply = argv.includes('--apply');
  const slugs = listSlugs();
  const index = JSON.parse(fs.readFileSync(INDEX_FILE, 'utf8'));

  console.log('merge-internal-duplicates ' + (apply ? '(APPLY)' : '(DRY-RUN)'));
  console.log('groups: ' + GROUPS.length);

  const toDelete = [];
  let sourcesMerged = 0;

  let skippedGroups = 0;
  for (const g of GROUPS) {
    // Drops idempotent: bereits gemergte (= nicht mehr existierende) ueberspringen.
    const liveDrops = g.drop.filter(d => slugs.some(s => s.includes(d)));
    if (liveDrops.length === 0) { skippedGroups++; continue; }
    // Keep muss existieren, sonst Konfig-Fehler.
    const keepSlug = resolve(slugs, g.keep);
    const keepInc = loadInc(keepSlug);
    const keepUrls = srcUrls(keepInc);
    const dropSlugs = liveDrops.map(d => resolve(slugs, d));

    console.log('\nKEEP ' + keepSlug + ' (' + (keepInc['asm:sources'] || []).length + 's'
      + ((keepInc['asm:reverseTimeline'] || []).length ? ',TL' : '') + ')');

    for (const ds of dropSlugs) {
      const di = loadInc(ds);
      // Merge new sources into keep
      let added = 0;
      for (const s of (di['asm:sources'] || [])) {
        const u = (s.url || '').trim();
        if (u && !keepUrls.has(u)) { keepInc['asm:sources'].push(s); keepUrls.add(u); added++; sourcesMerged++; }
      }
      console.log('  DROP ' + ds + ' (+' + added + ' sources merged)');
      toDelete.push(ds);
    }

    if (apply) {
      fs.writeFileSync(path.join(INCIDENTS_DIR, keepSlug + '.json'), JSON.stringify(keepInc, null, 2) + '\n', 'utf8');
    }
  }

  if (apply) {
    // Delete drop files
    for (const ds of toDelete) fs.unlinkSync(path.join(INCIDENTS_DIR, ds + '.json'));
    // Filter index
    const before = index.incidents.length;
    const dropSet = new Set(toDelete);
    index.incidents = index.incidents.filter(it => !dropSet.has(it.id) && !dropSet.has((it.file || '').replace(/\.json$/, '')));
    fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2) + '\n', 'utf8');
    console.log('\nindex: ' + before + ' -> ' + index.incidents.length);
  }

  console.log('\n=== Summary ===');
  console.log('  groups configured: ' + GROUPS.length);
  console.log('  groups skipped:    ' + skippedGroups + ' (drops bereits gemergt)');
  console.log('  files to delete:   ' + toDelete.length);
  console.log('  sources merged:    ' + sourcesMerged);
  if (!apply) console.log('\n  DRY-RUN — nichts geaendert. Mit --apply ausfuehren.');
  else {
    console.log('\nNaechste Schritte:');
    console.log('  node scripts/bundle-incidents.js');
    console.log('  node scripts/audit-bilingual-incidents.js');
  }
}

if (require.main === module) main(process.argv.slice(2));
