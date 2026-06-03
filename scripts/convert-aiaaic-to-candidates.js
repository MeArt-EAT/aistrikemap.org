#!/usr/bin/env node
/**
 * scripts/convert-aiaaic-to-candidates.js
 *
 * Konvertiert AIAAIC-CSV-Einträge zu AIStrikeMap-Candidate-Stubs.
 *
 * WICHTIG — Pfad B (facts-only):
 *   AIAAIC ist CC BY-SA 4.0 lizenziert. Um den Share-Alike-Trigger zu
 *   vermeiden, übernehmen wir aus AIAAIC NUR Fakten (Headline, Datum,
 *   Land, Akteure), NICHT die AIAAIC-Beschreibungen / Taxonomien.
 *   Die AIAAIC-URL wird in researcher_notes als Backref vermerkt, NICHT
 *   als asm:sources-Eintrag. Sources müssen vor Promote separat aus
 *   Original-Outlets nachgereichert werden.
 *
 * Default-Filter: Occurred-Year in [2024, 2025, 2026] (= Batch A).
 *
 * Output: data/incident-candidates/aiaaic-batch-a-2024-2026-round-6.json
 *   - 1 JSON-Array mit ~700 Stubs
 *   - status: "candidate" (NICHT verified/promote-ready)
 *   - sources: [] (muss enrichment durchlaufen)
 *
 * Usage:
 *   node scripts/convert-aiaaic-to-candidates.js
 *   node scripts/convert-aiaaic-to-candidates.js --years 2024,2025,2026
 *   node scripts/convert-aiaaic-to-candidates.js --years 2020-2023 --batch B
 *   node scripts/convert-aiaaic-to-candidates.js --dry-run
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CSV_PATH = path.join(ROOT, 'data', 'external-imports', 'aiaaic-incidents.csv');
const OUT_DIR = path.join(ROOT, 'data', 'incident-candidates');
const TODAY = new Date().toISOString().slice(0, 10);

// --- CSV-Parser --------------------------------------------------------------

function parseCSV(raw) {
  const rows = []; let row = []; let cur = ''; let inQ = false;
  for (let i = 0; i < raw.length; i++) {
    const c = raw[i];
    if (inQ) { if (c === '"' && raw[i+1] === '"') { cur += '"'; i++; } else if (c === '"') inQ = false; else cur += c; }
    else { if (c === '"') inQ = true; else if (c === ',') { row.push(cur); cur = ''; } else if (c === '\n') { row.push(cur); cur=''; rows.push(row); row=[]; } else if (c !== '\r') cur += c; }
  }
  if (cur.length || row.length) { row.push(cur); rows.push(row); }
  return rows;
}

// --- Country-Name → ISO2 (häufige AIAAIC-Schreibweisen) ---------------------

const COUNTRY_NAME_TO_ISO2 = {
  'usa': 'US', 'united states': 'US', 'us': 'US',
  'uk': 'GB', 'united kingdom': 'GB', 'britain': 'GB', 'england': 'GB',
  'germany': 'DE', 'austria': 'AT', 'switzerland': 'CH',
  'france': 'FR', 'spain': 'ES', 'portugal': 'PT', 'italy': 'IT',
  'netherlands': 'NL', 'belgium': 'BE', 'luxembourg': 'LU',
  'sweden': 'SE', 'norway': 'NO', 'finland': 'FI', 'denmark': 'DK', 'iceland': 'IS',
  'ireland': 'IE', 'poland': 'PL', 'czechia': 'CZ', 'czech republic': 'CZ',
  'slovakia': 'SK', 'hungary': 'HU', 'romania': 'RO', 'bulgaria': 'BG',
  'greece': 'GR', 'serbia': 'RS', 'croatia': 'HR', 'slovenia': 'SI',
  'bosnia': 'BA', 'albania': 'AL', 'north macedonia': 'MK', 'macedonia': 'MK',
  'montenegro': 'ME', 'estonia': 'EE', 'latvia': 'LV', 'lithuania': 'LT',
  'ukraine': 'UA', 'belarus': 'BY', 'moldova': 'MD', 'russia': 'RU',
  'turkey': 'TR', 'türkiye': 'TR',
  'china': 'CN', 'japan': 'JP', 'south korea': 'KR', 'korea': 'KR',
  'north korea': 'KP', 'taiwan': 'TW', 'hong kong': 'HK', 'macau': 'MO',
  'india': 'IN', 'pakistan': 'PK', 'bangladesh': 'BD', 'sri lanka': 'LK',
  'nepal': 'NP', 'afghanistan': 'AF',
  'indonesia': 'ID', 'philippines': 'PH', 'vietnam': 'VN', 'thailand': 'TH',
  'malaysia': 'MY', 'singapore': 'SG', 'myanmar': 'MM', 'cambodia': 'KH', 'laos': 'LA',
  'australia': 'AU', 'new zealand': 'NZ', 'papua new guinea': 'PG',
  'fiji': 'FJ', 'samoa': 'WS',
  'saudi arabia': 'SA', 'uae': 'AE', 'united arab emirates': 'AE', 'qatar': 'QA',
  'kuwait': 'KW', 'bahrain': 'BH', 'oman': 'OM', 'yemen': 'YE',
  'iran': 'IR', 'iraq': 'IQ', 'syria': 'SY', 'lebanon': 'LB', 'jordan': 'JO',
  'israel': 'IL', 'palestine': 'PS',
  'egypt': 'EG', 'libya': 'LY', 'tunisia': 'TN', 'algeria': 'DZ', 'morocco': 'MA',
  'sudan': 'SD', 'south sudan': 'SS', 'ethiopia': 'ET', 'eritrea': 'ER',
  'somalia': 'SO', 'kenya': 'KE', 'uganda': 'UG', 'rwanda': 'RW', 'burundi': 'BI',
  'tanzania': 'TZ', 'nigeria': 'NG', 'ghana': 'GH', 'senegal': 'SN',
  'mali': 'ML', 'burkina faso': 'BF', 'niger': 'NE', 'chad': 'TD', 'cameroon': 'CM',
  'south africa': 'ZA', 'namibia': 'NA', 'botswana': 'BW', 'zimbabwe': 'ZW',
  'zambia': 'ZM', 'mozambique': 'MZ', 'angola': 'AO', 'madagascar': 'MG',
  'brazil': 'BR', 'argentina': 'AR', 'chile': 'CL', 'uruguay': 'UY',
  'paraguay': 'PY', 'bolivia': 'BO', 'peru': 'PE', 'ecuador': 'EC',
  'colombia': 'CO', 'venezuela': 'VE', 'guyana': 'GY', 'suriname': 'SR',
  'mexico': 'MX', 'guatemala': 'GT', 'honduras': 'HN', 'el salvador': 'SV',
  'nicaragua': 'NI', 'costa rica': 'CR', 'panama': 'PA',
  'cuba': 'CU', 'dominican republic': 'DO', 'haiti': 'HT', 'jamaica': 'JM',
  'canada': 'CA',
  'eu': 'EU', 'european union': 'EU',
  'multiple': 'GLOBAL', 'global': 'GLOBAL', 'international': 'GLOBAL'
};

// US-States als Country=US erkennen (AIAAIC nutzt manchmal Bundesstaaten)
const US_STATES = new Set([
  'alabama','alaska','arizona','arkansas','california','colorado','connecticut',
  'delaware','florida','georgia','hawaii','idaho','illinois','indiana','iowa',
  'kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan',
  'minnesota','mississippi','missouri','montana','nebraska','nevada','new hampshire',
  'new jersey','new mexico','new york','north carolina','north dakota','ohio',
  'oklahoma','oregon','pennsylvania','rhode island','south carolina','south dakota',
  'tennessee','texas','utah','vermont','virginia','washington','west virginia',
  'wisconsin','wyoming','district of columbia','dc','puerto rico'
]);

function jurisdictionToCountry(j) {
  if (!j) return '';
  const first = j.split(';')[0].trim().toLowerCase();
  if (COUNTRY_NAME_TO_ISO2[first]) return COUNTRY_NAME_TO_ISO2[first];
  if (US_STATES.has(first)) return 'US';
  // Fallback: gib leeren String → wird in Stub als 'GLOBAL' gehandelt
  return '';
}

function jurisdictionLabel(j) {
  // Erst-Eintrag als Display-Name
  if (!j) return '';
  return j.split(';')[0].trim();
}

// --- Technology → asm:incidentType -----------------------------------------

const TECH_TO_TYPE = [
  { re: /deepfake/i, types: ['deepfakes'] },
  { re: /facial recognition|biometric/i, types: ['facial-recognition', 'surveillance'] },
  { re: /predictive policing/i, types: ['predictive-policing'] },
  { re: /autonomous (vehicle|weapon|drone)|military/i, types: ['military-ai', 'autonomous-weapons'] },
  { re: /surveillance|monitoring/i, types: ['surveillance'] },
  { re: /generative ai|llm|large language|chatgpt|gemini|claude|copilot/i, types: ['data-misuse'] },
  { re: /content moderation|moderation/i, types: ['labor-exploitation'] },
  { re: /credit|loan|insurance|welfare/i, types: ['discrimination'] },
  { re: /censor|blocking/i, types: ['censorship'] }
];

function mapTechnology(tech) {
  if (!tech) return ['data-misuse'];
  const set = new Set();
  for (const m of TECH_TO_TYPE) if (m.re.test(tech)) m.types.forEach(t => set.add(t));
  return set.size > 0 ? Array.from(set) : ['data-misuse'];
}

// --- Slug-Generation --------------------------------------------------------

function transliterate(str) {
  return (str || '').replace(/[äÄ]/g, 'ae').replace(/[öÖ]/g, 'oe').replace(/[üÜ]/g, 'ue')
    .replace(/ß/g, 'ss').replace(/[áàâã]/gi, 'a').replace(/[éèê]/gi, 'e')
    .replace(/[íìî]/gi, 'i').replace(/[óòôõ]/gi, 'o').replace(/[úùû]/gi, 'u');
}

function slugify(text) {
  return transliterate(text).toLowerCase()
    .replace(/&/g, ' and ').replace(/['"„""'']/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function buildCandidateId(row, countryCode) {
  const cc = (countryCode || 'global').toLowerCase();
  const body = slugify(row.headline).slice(0, 60).replace(/-[^-]*$/, '');
  const year = (row.occurred || '').match(/(20\d{2}|19\d{2})/);
  const y = year ? year[1] : 'unknown';
  return `${cc}-${body}-${y}-${row.id.toLowerCase()}`;
}

// --- Builder ----------------------------------------------------------------

function buildCandidate(row, roundId) {
  const yearMatch = (row.occurred || '').match(/(20\d{2}|19\d{2})/);
  const year = yearMatch ? yearMatch[1] : '';
  const country = jurisdictionToCountry(row.jurisdiction);
  const countryLabel = jurisdictionLabel(row.jurisdiction);

  const actors = [];
  if (row.deployer) actors.push({ name: row.deployer.trim(), type: 'organization' });
  if (row.developer && row.developer !== row.deployer) actors.push({ name: row.developer.trim(), type: 'organization' });

  return {
    candidate_id: buildCandidateId(row, country),
    discovered_at: new Date().toISOString().replace(/\.\d+Z$/, 'Z'),
    researcher: 'aiaaic-importer-' + row.id,
    round: roundId,
    status: 'candidate',
    candidate_data: {
      name_de: '',                   // bleibt leer — Übersetzung im Enrichment-Schritt
      name_en: row.headline.trim(),
      startDate: year || '',
      location: {
        name_de: countryLabel,
        name_en: countryLabel,
        country: country || 'GLOBAL',
        // lat/lng werden im Enrichment ergänzt
      },
      incidentType: mapTechnology(row.technology),
      candidate_severity: 3,         // Default — muss im Enrichment angepasst werden
      candidate_verification: 2,     // Default — muss im Enrichment angepasst werden
      description_de: '',            // bleibt leer
      description_en: '',            // bleibt leer (AIAAIC-Summary nicht übernommen wegen CC BY-SA)
      actors,
      sources: []                    // MUSS im Enrichment-Schritt aus Original-Outlets gefüllt werden
    },
    researcher_notes: 'AIAAIC backref (NICHT als Source): ' + (row.summaryLinks || '').trim() +
      ' | Technology="' + row.technology + '" | Sector="' + row.sector + '" | Purpose="' + row.purpose + '"' +
      ' | NEEDS-ENRICHMENT: Übersetzung DE, eigene Source-Recherche, severity/verification kalibrieren.',
    dedup_hint: ((row.headline || '').toLowerCase() + ' | ' + countryLabel.toLowerCase() + ' | ' + year).slice(0, 200)
  };
}

// --- CLI --------------------------------------------------------------------

function parseArgs(argv) {
  const args = { years: [2024, 2025, 2026], batch: 'A', dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--years') {
      const spec = argv[++i];
      if (spec.includes('-')) {
        const [from, to] = spec.split('-').map(Number);
        args.years = []; for (let y = from; y <= to; y++) args.years.push(y);
      } else {
        args.years = spec.split(',').map(Number);
      }
    } else if (a === '--batch') args.batch = argv[++i];
    else if (a === '--dry-run') args.dryRun = true;
  }
  return args;
}

function main(argv) {
  const args = parseArgs(argv);
  const yearSet = new Set(args.years);
  const roundId = `round-6-aiaaic-batch-${args.batch.toLowerCase()}-${TODAY}`;
  const outFile = path.join(OUT_DIR, `aiaaic-batch-${args.batch.toLowerCase()}-${args.years[0]}-${args.years[args.years.length-1]}-round-6.json`);

  const raw = fs.readFileSync(CSV_PATH, 'utf8');
  const rows = parseCSV(raw).slice(3).filter(r => /^AIAAIC\d+$/.test(r[0] || ''))
    .map(r => ({
      id: r[0], headline: r[1] || '', occurred: r[2] || '',
      deployer: r[3] || '', developer: r[4] || '',
      systemName: r[5] || '', technology: r[6] || '', purpose: r[7] || '',
      jurisdiction: r[10] || '', sector: r[11] || '', summaryLinks: r[17] || ''
    }));

  const filtered = rows.filter(r => {
    const y = (r.occurred || '').match(/(20\d{2}|19\d{2})/);
    return y && yearSet.has(parseInt(y[1], 10));
  });

  console.log('AIAAIC total rows:', rows.length);
  console.log('Years filter:', Array.from(yearSet).join(','));
  console.log('Filtered:', filtered.length);

  const stubs = filtered.map(r => buildCandidate(r, roundId));

  // candidate_id-Dedup innerhalb des Batches
  const seenIds = new Set();
  const uniqueStubs = [];
  let dupSkipped = 0;
  for (const s of stubs) {
    if (seenIds.has(s.candidate_id)) { dupSkipped++; continue; }
    seenIds.add(s.candidate_id);
    uniqueStubs.push(s);
  }

  console.log('Unique stubs:', uniqueStubs.length, '(skipped ' + dupSkipped + ' candidate_id-Dubletten innerhalb Batch)');

  if (args.dryRun) {
    console.log('\n--- DRY-RUN sample (first 3 stubs) ---');
    console.log(JSON.stringify(uniqueStubs.slice(0, 3), null, 2));
    return;
  }

  fs.writeFileSync(outFile, JSON.stringify(uniqueStubs, null, 2) + '\n', 'utf8');
  const size = fs.statSync(outFile).size;
  console.log('\nwrote:', outFile);
  console.log('size:', (size / 1024).toFixed(1) + ' KB');
  console.log('\nNächste Schritte:');
  console.log('  1. Eyeball-Sanity-Check des Batch-Files');
  console.log('  2. Enrichment-Pipeline (Übersetzung, Source-Recherche) — separates Konzept');
  console.log('  3. Erst nach Enrichment: verify → score → dedup → promote');
}

if (require.main === module) main(process.argv.slice(2));
