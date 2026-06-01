#!/usr/bin/env node
/**
 * scripts/promote-candidates.js
 *
 * Promotet verifizierte Kandidaten aus data/incident-candidates/*.json
 * zu vollwertigen JSON-LD-Incidents in data/incidents/*.json plus
 * data/index.json Marker-Manifest-Update.
 *
 * Workflow pro Kandidat:
 *   1. Status-Filter (default: nur status="verified")
 *   2. Slug aus country + name_de generieren (Umlaute transliteriert,
 *      Slugs sind URL-Identifier → CLAUDE.md "bewusste Ausnahme")
 *   3. Dedup-Check vs. data/index.json
 *   4. JSON-LD-Eintrag bauen + nach data/incidents/{slug}.json schreiben
 *   5. data/index.json Marker-Manifest erweitern
 *   6. Kandidaten-status auf "promoted" setzen + promoted_to_slug-Vermerk
 *
 * Nach dem Lauf manuell:
 *   - node scripts/bundle-incidents.js (regeneriert data/all-incidents.json)
 *   - node scripts/audit-bilingual-incidents.js (sanity-check)
 *   - git add data/ && git commit -m "Promote-Rutsch: N neue Incidents"
 *
 * Usage:
 *   node scripts/promote-candidates.js                       (default verified, all files)
 *   node scripts/promote-candidates.js --dry-run             (zeigt was promoted würde)
 *   node scripts/promote-candidates.js --status needs-review (auch needs-review)
 *   node scripts/promote-candidates.js --file PATH           (nur ein File)
 *   node scripts/promote-candidates.js --limit N             (max N Promotionen)
 *   node scripts/promote-candidates.js --min-sources 2       (default 1)
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CANDIDATES_DIR = path.join(ROOT, 'data', 'incident-candidates');
const INCIDENTS_DIR = path.join(ROOT, 'data', 'incidents');
const INDEX_FILE = path.join(ROOT, 'data', 'index.json');
const TODAY = new Date().toISOString().slice(0, 10);

// --- CLI args ----------------------------------------------------------------

function parseArgs(argv) {
  const args = {
    status: 'verified',
    files: [],
    dryRun: false,
    minSources: 1,
    limit: null
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--status') args.status = argv[++i];
    else if (a === '--file') args.files.push(argv[++i]);
    else if (a === '--dry-run') args.dryRun = true;
    else if (a === '--min-sources') args.minSources = parseInt(argv[++i], 10) || 1;
    else if (a === '--limit') args.limit = parseInt(argv[++i], 10) || null;
    else if (a === '--help' || a === '-h') {
      console.log('Usage: node scripts/promote-candidates.js [--status verified] [--file PATH] [--dry-run] [--min-sources N] [--limit N]');
      process.exit(0);
    }
  }
  return args;
}

// --- Slug generation ---------------------------------------------------------

function transliterate(str) {
  return (str || '')
    .replace(/ä/g, 'ae').replace(/Ä/g, 'Ae')
    .replace(/ö/g, 'oe').replace(/Ö/g, 'Oe')
    .replace(/ü/g, 'ue').replace(/Ü/g, 'Ue')
    .replace(/ß/g, 'ss')
    .replace(/[áàâã]/gi, 'a')
    .replace(/[éèê]/gi, 'e')
    .replace(/[íìî]/gi, 'i')
    .replace(/[óòôõ]/gi, 'o')
    .replace(/[úùû]/gi, 'u')
    .replace(/ñ/gi, 'n')
    .replace(/ç/gi, 'c');
}

// Country-prefix map. ISO-2 → slug-prefix (DE-style names where they
// are short, else lowercase ISO-2). Erweiterbar — Default ist ISO-2 lower.
const COUNTRY_PREFIX = {
  DE: 'deutschland', AT: 'oesterreich', CH: 'schweiz', LI: 'liechtenstein',
  US: 'usa', GB: 'uk', UK: 'uk', IE: 'irland', FR: 'frankreich',
  ES: 'spanien', PT: 'portugal', IT: 'italien', NL: 'niederlande',
  BE: 'belgien', LU: 'luxemburg', SE: 'schweden', NO: 'norwegen',
  FI: 'finnland', DK: 'daenemark', IS: 'island',
  PL: 'polen', CZ: 'tschechien', SK: 'slowakei', HU: 'ungarn',
  RO: 'rumaenien', BG: 'bulgarien', GR: 'griechenland', RS: 'serbien',
  HR: 'kroatien', SI: 'slowenien', BA: 'bosnien',
  AL: 'albanien', MK: 'nordmazedonien', ME: 'montenegro',
  EE: 'estland', LV: 'lettland', LT: 'litauen',
  UA: 'ukraine', BY: 'belarus', MD: 'moldau', RU: 'russland',
  TR: 'tuerkei', GE: 'georgien', AM: 'armenien', AZ: 'aserbaidschan',
  KZ: 'kasachstan', UZ: 'usbekistan', KG: 'kirgistan', TJ: 'tadschikistan', TM: 'turkmenistan',
  CN: 'china', JP: 'japan', KR: 'suedkorea', KP: 'nordkorea', TW: 'taiwan',
  HK: 'hongkong', MO: 'macau', MN: 'mongolei',
  IN: 'indien', PK: 'pakistan', BD: 'bangladesch', LK: 'sri-lanka',
  NP: 'nepal', BT: 'bhutan', MV: 'malediven', AF: 'afghanistan',
  ID: 'indonesien', PH: 'philippinen', VN: 'vietnam', TH: 'thailand',
  MY: 'malaysia', SG: 'singapur', MM: 'myanmar', KH: 'kambodscha', LA: 'laos',
  AU: 'australien', NZ: 'neuseeland', PG: 'papua-neuguinea',
  FJ: 'fidschi', SB: 'salomonen', VU: 'vanuatu', TO: 'tonga', WS: 'samoa',
  KI: 'kiribati', FM: 'mikronesien', MH: 'marshallinseln',
  SA: 'saudi-arabien', AE: 'emirate', QA: 'katar', KW: 'kuwait', BH: 'bahrain',
  OM: 'oman', YE: 'jemen', IR: 'iran', IQ: 'irak', SY: 'syrien',
  LB: 'libanon', JO: 'jordanien', IL: 'israel', PS: 'palaestina',
  EG: 'aegypten', LY: 'libyen', TN: 'tunesien', DZ: 'algerien', MA: 'marokko',
  SD: 'sudan', SS: 'suedsudan', ET: 'ethiopia', ER: 'eritrea', DJ: 'dschibuti',
  SO: 'somalia', KE: 'kenia', UG: 'uganda', RW: 'ruanda', BI: 'burundi',
  TZ: 'tansania', NG: 'nigeria', GH: 'ghana', SN: 'senegal', CI: 'elfenbeinkueste',
  ML: 'mali', BF: 'burkina-faso', NE: 'niger', TD: 'tschad', CM: 'kamerun',
  GA: 'gabun', CG: 'kongo', CD: 'drc', CF: 'zentralafrika',
  ZA: 'suedafrika', NA: 'namibia', BW: 'botsuana', ZW: 'simbabwe',
  ZM: 'sambia', MZ: 'mosambik', AO: 'angola', MG: 'madagaskar',
  BR: 'brasilien', AR: 'argentinien', CL: 'chile', UY: 'uruguay', PY: 'paraguay',
  BO: 'bolivien', PE: 'peru', EC: 'ecuador', CO: 'kolumbien', VE: 'venezuela',
  GY: 'guyana', SR: 'suriname', MX: 'mexiko', GT: 'guatemala', HN: 'honduras',
  SV: 'el-salvador', NI: 'nicaragua', CR: 'costa-rica', PA: 'panama',
  CU: 'kuba', DO: 'dominikanische-republik', HT: 'haiti', JM: 'jamaika',
  TT: 'trinidad-tobago', BB: 'barbados',
  CA: 'kanada'
};

function countryPrefix(cc) {
  if (!cc) return 'global';
  const up = cc.toUpperCase();
  return COUNTRY_PREFIX[up] || up.toLowerCase();
}

function slugify(text) {
  return transliterate(text || '')
    .toLowerCase()
    .replace(/&/g, ' und ')
    .replace(/['"„""'']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function generateSlug(candidate) {
  const cd = candidate.candidate_data || {};
  const cc = (cd.location && cd.location.country) || '';
  const prefix = countryPrefix(cc);
  // Slug-Body: deutscher Name ohne Land-Doppelung (z.B. "Brasilien: X" → "X")
  let body = cd.name_de || cd.name_en || candidate.candidate_id || 'untitled';
  // Remove leading "Land: " prefix if present
  body = body.replace(/^[A-Za-zÄÖÜäöüß-]+:\s*/, '');
  // Year from startDate
  const year = (cd.startDate || '').slice(0, 4).match(/^\d{4}$/) ? (cd.startDate || '').slice(0, 4) : null;
  const slugBody = slugify(body);
  let full = prefix + '-' + slugBody;
  // Append year if not already in slug
  if (year && !full.includes(year)) full += '-' + year;
  // Cap length
  if (full.length > 90) full = full.slice(0, 90).replace(/-[^-]*$/, '');
  return full;
}

// --- Index registry ----------------------------------------------------------

function loadIndex() {
  const raw = fs.readFileSync(INDEX_FILE, 'utf8');
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed.incidents)) throw new Error('index.json hat kein incidents-Array');
  return parsed;
}

function indexHasSlug(index, slug) {
  return index.incidents.some(it => it.id === slug || it.file === slug + '.json');
}

function incidentFileExists(slug) {
  return fs.existsSync(path.join(INCIDENTS_DIR, slug + '.json'));
}

// --- JSON-LD-Eintrag-Builder -------------------------------------------------

function mapSourceType(t) {
  const allowed = new Set([
    'news-article', 'research-paper', 'ngo-report', 'government-document',
    'court-filing', 'legal-ruling', 'regulatory-decision', 'encyclopedia',
    'analysis', 'whistleblower-document'
  ]);
  return allowed.has(t) ? t : 'news-article';
}

function buildSourceEntries(candidate) {
  const sources = (candidate.candidate_data && candidate.candidate_data.sources) || [];
  return sources.map(s => ({
    url: s.url || '',
    title: s.title || '',
    publisher: s.publisher || '',
    date: s.date || '',
    type: mapSourceType(s.type),
    'asm:linkHealth': 'unverified',
    title_de: s.title || '',
    title_en: s.title || ''
  }));
}

function buildActorEntries(candidate) {
  const actors = (candidate.candidate_data && candidate.candidate_data.actors) || [];
  return actors.map(a => ({
    name: a.name || '',
    type: a.type || 'organization',
    'asm:systems': Array.isArray(a.systems) ? a.systems : [],
    name_de: a.name || '',
    name_en: a.name || ''
  }));
}

function buildLocation(candidate) {
  const loc = (candidate.candidate_data && candidate.candidate_data.location) || {};
  const out = {
    '@type': 'Place',
    name: loc.name_de || loc.name_en || ''
  };
  if (typeof loc.lat === 'number' && typeof loc.lng === 'number') {
    out.geo = {
      '@type': 'GeoCoordinates',
      latitude: loc.lat,
      longitude: loc.lng
    };
  }
  out.address = {
    '@type': 'PostalAddress',
    addressCountry: (loc.country || '').toUpperCase()
  };
  out.name_de = loc.name_de || '';
  out.name_en = loc.name_en || '';
  return out;
}

function buildIncidentJsonLd(candidate, slug) {
  const cd = candidate.candidate_data || {};
  const types = Array.isArray(cd.incidentType) && cd.incidentType.length ? cd.incidentType : ['data-misuse'];
  const severity = typeof cd.candidate_severity === 'number' ? cd.candidate_severity : 3;
  const verification = typeof cd.candidate_verification === 'number' ? cd.candidate_verification : 2;

  return {
    '@context': {
      '@vocab': 'https://schema.org/',
      asm: 'https://aistrikemap.org/schema/'
    },
    '@type': 'Event',
    '@id': 'https://aistrikemap.org/incidents/' + slug,
    name: cd.name_de || '',
    name_de: cd.name_de || '',
    name_en: cd.name_en || '',
    description: cd.description_de || '',
    description_de: cd.description_de || '',
    description_en: cd.description_en || '',
    startDate: cd.startDate || '',
    location: buildLocation(candidate),
    'asm:incidentType': types,
    'asm:affectedRights': [],
    'asm:affectedRights_de': [],
    'asm:affectedRights_en': [],
    'asm:actors': buildActorEntries(candidate),
    'asm:severity': severity,
    'asm:verificationLevel': verification,
    'asm:reverseTimeline': [],
    'asm:sources': buildSourceEntries(candidate),
    'asm:metadata': {
      created: TODAY,
      lastUpdated: TODAY,
      author: 'AIStrikeMap (promoted from candidate)',
      aiGenerated: true,
      humanVerified: false,
      promotedFromCandidateId: candidate.candidate_id || null,
      promotedFromRound: candidate.round || null
    }
  };
}

function buildIndexEntry(candidate, slug) {
  const cd = candidate.candidate_data || {};
  const loc = cd.location || {};
  return {
    id: slug,
    file: slug + '.json',
    name: cd.name_de || cd.name_en || slug,
    latitude: typeof loc.lat === 'number' ? loc.lat : null,
    longitude: typeof loc.lng === 'number' ? loc.lng : null,
    severity: typeof cd.candidate_severity === 'number' ? cd.candidate_severity : 3,
    verificationLevel: typeof cd.candidate_verification === 'number' ? cd.candidate_verification : 2,
    types: Array.isArray(cd.incidentType) && cd.incidentType.length ? cd.incidentType : ['data-misuse']
  };
}

// --- Hauptlogik --------------------------------------------------------------

function collectCandidatesFromFile(file, args) {
  const raw = fs.readFileSync(file, 'utf8');
  let arr;
  try { arr = JSON.parse(raw); } catch (e) {
    console.error('  PARSE ERROR ' + path.basename(file) + ': ' + e.message);
    return [];
  }
  if (!Array.isArray(arr)) return [];
  return arr.map((c, i) => ({ candidate: c, file, idx: i }));
}

function eligible(candidate, args) {
  if (candidate.status !== args.status) return false;
  if (candidate.candidate_data && Array.isArray(candidate.candidate_data.sources)) {
    if (candidate.candidate_data.sources.length < args.minSources) return false;
  } else {
    return false;
  }
  if (!candidate.candidate_data || !candidate.candidate_data.name_de || !candidate.candidate_data.name_en) return false;
  return true;
}

function main(argv) {
  const args = parseArgs(argv);
  const files = args.files.length ? args.files : (
    fs.readdirSync(CANDIDATES_DIR)
      .filter(f => f.endsWith('.json') && !f.startsWith('_'))
      .map(f => path.join(CANDIDATES_DIR, f))
  );

  console.log('promote-candidates start — status=' + args.status + ' files=' + files.length
    + ' min-sources=' + args.minSources + (args.limit ? ' limit=' + args.limit : '')
    + (args.dryRun ? ' DRY-RUN' : ''));

  // Index laden
  let index;
  try { index = loadIndex(); }
  catch (e) {
    console.error('index.json laden gescheitert: ' + e.message);
    process.exit(1);
  }

  // Kandidaten sammeln + eligible filtern
  const candidates = [];
  for (const f of files) candidates.push(...collectCandidatesFromFile(f, args));
  const eligibleC = candidates.filter(c => eligible(c.candidate, args));
  console.log('  kandidaten total=' + candidates.length + ' eligible=' + eligibleC.length);

  // Bei Limit truncen
  const target = args.limit ? eligibleC.slice(0, args.limit) : eligibleC;

  // Mutations-Map: source-file → updates (für Promote-Markierung)
  const fileUpdates = new Map();

  let promoted = 0;
  let skippedDup = 0;
  let skippedExists = 0;
  const promotedSlugs = [];

  for (const item of target) {
    const slug = generateSlug(item.candidate);
    if (indexHasSlug(index, slug)) {
      skippedDup++;
      console.log('  SKIP (index dup) ' + slug);
      continue;
    }
    if (incidentFileExists(slug)) {
      skippedExists++;
      console.log('  SKIP (file exists) ' + slug);
      continue;
    }

    const incident = buildIncidentJsonLd(item.candidate, slug);
    const indexEntry = buildIndexEntry(item.candidate, slug);

    if (!args.dryRun) {
      const outFile = path.join(INCIDENTS_DIR, slug + '.json');
      fs.writeFileSync(outFile, JSON.stringify(incident, null, 2) + '\n', 'utf8');
      index.incidents.push(indexEntry);

      // Mark Source-Candidate als promoted
      if (!fileUpdates.has(item.file)) fileUpdates.set(item.file, new Set());
      fileUpdates.get(item.file).add(item.idx);
      // Stash slug for later write
      item.candidate._promoted_slug = slug;
    }
    promoted++;
    promotedSlugs.push(slug);
    console.log('  PROMOTE ' + slug);
  }

  if (!args.dryRun && promoted > 0) {
    // Index schreiben
    fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2) + '\n', 'utf8');

    // Source-Candidate-Files aktualisieren (status → promoted, ergänze Marker)
    for (const [file, indices] of fileUpdates) {
      const raw = fs.readFileSync(file, 'utf8');
      const arr = JSON.parse(raw);
      for (const i of indices) {
        const c = arr[i];
        if (!c) continue;
        c.status = 'promoted';
        c.promoted_to_slug = c._promoted_slug || generateSlug(c);
        c.promoted_at = new Date().toISOString();
      }
      // Remove temporary _promoted_slug markers
      for (const c of arr) { if (c._promoted_slug) delete c._promoted_slug; }
      fs.writeFileSync(file, JSON.stringify(arr, null, 2) + '\n', 'utf8');
    }
  }

  console.log('\n=== Summary ===');
  console.log('  promoted:           ' + promoted);
  console.log('  skipped (index):    ' + skippedDup);
  console.log('  skipped (file):     ' + skippedExists);
  if (args.dryRun) console.log('  (DRY-RUN — keine Datei geschrieben)');
  if (!args.dryRun && promoted > 0) {
    console.log('\nNächste Schritte:');
    console.log('  node scripts/bundle-incidents.js');
    console.log('  node scripts/audit-bilingual-incidents.js');
    console.log('  git add data/ && git commit -m "Promote-Rutsch: ' + promoted + ' neue Incidents"');
  }
}

if (require.main === module) {
  main(process.argv.slice(2));
}

module.exports = {
  transliterate,
  slugify,
  countryPrefix,
  generateSlug,
  mapSourceType,
  buildIncidentJsonLd,
  buildIndexEntry,
  eligible
};
