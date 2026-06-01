#!/usr/bin/env node
/**
 * Bundle career impact data into per-country JSON files plus an index manifest.
 *
 * Skeleton: data loaders are stubs (filled per country in MVP step 2).
 * Aggregation, confidence classification, edge-case flagging and manifest
 * writing are production-ready and unit-tested (bundle-career-data.test.js).
 *
 * Pipeline per ISCO x country x year:
 *   loadAllLayers      -> sources[]
 *   aggregateScore     -> {low, median, high, mean, stddev, sources_count}
 *   markOutliers       -> annotates sources with `outlier: true`
 *   classifyConfidence -> "robust" | "divergent" | "sparse"
 *   flagEdgeCases      -> i18n-key array (career.bias.*)
 *
 * Concept docs:
 *   docs/planung/career-dashboard-score-methodik.md     (Bandbreiten-Modell)
 *   docs/planung/career-dashboard-bias-transparency.md  (Confidence + Flags)
 *   docs/planung/career-dashboard-recht.md              (Lizenz-Manifest)
 *
 * Usage:
 *   node scripts/bundle-career-data.js            (info only; loaders are stubs)
 *   node scripts/bundle-career-data.js --sample   (writes a fixture bundle)
 *   node scripts/bundle-career-data.test.js       (unit tests)
 */
'use strict';

const fs = require('fs');
const path = require('path');

// --- Configuration -----------------------------------------------------------

const MVP_COUNTRIES = ['DE', 'US', 'UK', 'FR', 'CA', 'NL', 'SE', 'AU'];

// Calibration parameters. Re-evaluate after first real run; hardcoded for MVP.
const DIVERGENT_STDDEV_CUTOFF = 0.15;
const OUTLIER_FACTOR = 1.5;
const STALE_THRESHOLD_YEARS = 3;

// Source-layer license metadata, sourced from career-dashboard-recht.md and
// the Quellen-Stand verification of 2026-05-01 in career-dashboard-datenquellen-matrix.md.
// URLs point to stable topic / institution pages; per-datapoint report URLs
// are written to sources[].url at load time.
const LAYER_A_LICENSES = {
  DE: { name: 'IAB Substituierbarkeitspotenzial (Forschungsbericht 23/2025)', license: 'DL-DE BY 2.0', url: 'https://iab.de/' },
  US: { name: 'BLS Employment Projections + O*NET Work Activities', license: 'US Government Works', url: 'https://www.bls.gov/emp/' },
  // UK has no Schicht-A update since 2019 — frontend should treat UK Layer A
  // as stale by default; loaders may prefer Schicht B.
  UK: { name: 'ONS Probability of Automation (2019, no update)', license: 'OGL v3', url: 'https://www.ons.gov.uk/' },
  FR: { name: 'France Stratégie / DARES — Intelligence artificielle et travail', license: 'Etalab Open Licence 2.0', url: 'https://www.strategie-plan.gouv.fr/' },
  CA: { name: 'Statistics Canada AI Occupational Exposure series', license: 'Statistics Canada Open Licence', url: 'https://www150.statcan.gc.ca/' },
  NL: { name: 'CBS AI-monitor / SER-Advies AI en werk', license: 'CBS Open Data', url: 'https://www.cbs.nl/' },
  SE: { name: 'Arbetsförmedlingen Yrkeskompassen + Automatiseringen', license: 'CC0 1.0', url: 'https://arbetsformedlingen.se/' },
  AU: { name: 'Jobs and Skills Australia — Generative AI Capacity Study', license: 'CC BY 4.0', url: 'https://www.jobsandskills.gov.au/' }
};

// Schicht B: methodological anchor is Lassébie/Quintini (2022); follow-up
// OECD reports (Employment Outlook 2025, "Bridging the AI Skills Gap" 2025,
// "Who will be the workers most affected by AI?" 2024) extend the same
// exposure framework and may be loaded as Layer B updates per ISCO/country.
const LAYER_B_LICENSE = {
  name: 'OECD AI Occupational Exposure (Lassébie/Quintini 2022 + follow-ups)',
  license: 'OECD Terms & Conditions',
  url: 'https://www.oecd.org/en/topics/ai-and-work.html'
};

const LAYER_C_LICENSE = {
  name: 'Frey/Osborne 2013 Automation Probability',
  license: 'Academic — fair use with attribution',
  url: 'https://www.oxfordmartin.ox.ac.uk/publications/the-future-of-employment/'
};

const OUTPUT_LICENSE = {
  spdx: 'CC-BY-NC-SA-4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  attribution: 'AIStrikeMap Career Impact Dashboard, https://aistrikemap.org'
};

// --- Pure math helpers -------------------------------------------------------

function median(values) {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function mean(values) {
  if (!values.length) return null;
  return values.reduce((s, v) => s + v, 0) / values.length;
}

// Population stddev — full population of available sources, not a sample.
function stddev(values) {
  if (values.length < 2) return 0;
  const m = mean(values);
  const variance = values.reduce((s, v) => s + (v - m) ** 2, 0) / values.length;
  return Math.sqrt(variance);
}

function round(n, digits = 4) {
  const f = 10 ** digits;
  return Math.round(n * f) / f;
}

// --- Aggregation pipeline ----------------------------------------------------

/**
 * Aggregate a Score object from a list of source records.
 * source shape: {layer, name, value, year, license?, url?, methodology?}
 * Returns null when no numeric values are available.
 */
function aggregateScore(sources) {
  const values = sources
    .map(s => s.value)
    .filter(v => typeof v === 'number' && Number.isFinite(v));
  if (!values.length) return null;
  return {
    low: round(Math.min(...values)),
    median: round(median(values)),
    high: round(Math.max(...values)),
    mean: round(mean(values)),
    stddev: round(stddev(values)),
    sources_count: values.length
  };
}

/**
 * Annotate sources whose value departs from the median by more than
 * OUTLIER_FACTOR (symmetric: too high or too low). Source values stay in the
 * bandwidth — equal-weight principle from score-methodik.md is preserved.
 */
function markOutliers(sources, medianValue) {
  if (medianValue === null || medianValue === 0) return sources;
  const upper = medianValue * OUTLIER_FACTOR;
  const lower = medianValue / OUTLIER_FACTOR;
  return sources.map(s => {
    if (typeof s.value !== 'number' || !Number.isFinite(s.value)) return s;
    const isOutlier = s.value > upper || s.value < lower;
    return isOutlier ? { ...s, outlier: true } : s;
  });
}

/**
 * Classify confidence per career-dashboard-bias-transparency.md, Säule B:
 *   robust    : sources_count >= 3 AND stddev <  DIVERGENT_STDDEV_CUTOFF
 *   divergent : sources_count >= 3 AND stddev >= DIVERGENT_STDDEV_CUTOFF
 *   sparse    : sources_count <  3
 */
function classifyConfidence(score) {
  if (!score) return 'sparse';
  if (score.sources_count < 3) return 'sparse';
  return score.stddev < DIVERGENT_STDDEV_CUTOFF ? 'robust' : 'divergent';
}

/**
 * Edge-case flags per career-dashboard-bias-transparency.md, Säule C.
 * Returns an array of i18n keys; UI iterates and renders the matching string.
 */
function flagEdgeCases(score, sources, currentYear) {
  const flags = [];
  if (!score) return flags;

  if (score.sources_count === 1) flags.push('career.bias.singleSource');

  if (classifyConfidence(score) === 'divergent') flags.push('career.bias.divergent');

  if (!sources.some(s => s.layer === 'A')) flags.push('career.bias.noNationalData');

  const stale = sources.some(s =>
    typeof s.year === 'number' && (currentYear - s.year) > STALE_THRESHOLD_YEARS
  );
  if (stale) flags.push('career.bias.staleSource');

  if (sources.some(s => s.outlier)) flags.push('career.bias.outlier');

  return flags;
}

/**
 * Compose a full per-cell entry consumed by the frontend.
 */
function buildEntry({ isco, country, year, sources, currentYear }) {
  const score = aggregateScore(sources);
  const annotated = score ? markOutliers(sources, score.median) : sources;
  return {
    isco,
    country,
    year,
    score,
    confidence_quality: classifyConfidence(score),
    flags: flagEdgeCases(score, annotated, currentYear),
    sources: annotated
  };
}

// --- Layer loaders (stubs, replaced in MVP step 2) ---------------------------

function loadLayerA(country, isco, year) {
  // TODO step 2: per-country adapter (DE IAB, US BLS+O*NET, UK ONS, FR DARES,
  // CA StatCan, NL CBS, SE Arbetsförmedlingen, AU JSA).
  void country; void isco; void year;
  return null;
}

function loadLayerB(country, isco, year) {
  // TODO step 2: OECD Lassébie/Quintini lookup keyed by ISCO + country.
  void country; void isco; void year;
  return null;
}

function loadLayerC(country, isco, year) {
  // TODO step 2: Frey/Osborne 2013 with ISCO crosswalk; values are universal
  // (same probability per ISCO across all countries) but kept per-cell so
  // future country-specific adjustments can attach without schema change.
  void country; void isco; void year;
  return null;
}

function loadAllLayers(country, isco, year) {
  return [
    loadLayerA(country, isco, year),
    loadLayerB(country, isco, year),
    loadLayerC(country, isco, year)
  ].filter(Boolean);
}

// --- Taxonomy ----------------------------------------------------------------

/**
 * Load the curated ISCO-08 4-digit taxonomy (MVP step 3).
 * Returns { version, isco_revision, cluster_groups[], occupations[] }.
 * Path is overridable for tests via the `taxonomyPath` parameter.
 */
function loadTaxonomy(taxonomyPath) {
  const file = taxonomyPath || path.join(__dirname, '..', 'data', 'career', 'taxonomy.json');
  const raw = fs.readFileSync(file, 'utf8');
  return JSON.parse(raw);
}

// --- Manifest ----------------------------------------------------------------

function buildManifest({ countries, generatedAt, sourcesUsed }) {
  return {
    license: OUTPUT_LICENSE.spdx,
    licenseUrl: OUTPUT_LICENSE.url,
    attribution: OUTPUT_LICENSE.attribution,
    generated: generatedAt,
    countries,
    sources: sourcesUsed
  };
}

function collectSourcesUsed(entries) {
  const seen = new Map();
  for (const e of entries) {
    for (const s of e.sources || []) {
      const key = `${s.layer}::${s.name}`;
      if (!seen.has(key)) {
        seen.set(key, {
          layer: s.layer,
          name: s.name,
          license: s.license || null,
          url: s.url || null
        });
      }
    }
  }
  return [...seen.values()];
}

// --- File output -------------------------------------------------------------

function writeBundle(outDir, entries) {
  fs.mkdirSync(outDir, { recursive: true });
  const byCountry = new Map();
  for (const e of entries) {
    if (!byCountry.has(e.country)) byCountry.set(e.country, []);
    byCountry.get(e.country).push(e);
  }
  for (const [country, rows] of byCountry) {
    const file = path.join(outDir, `${country.toLowerCase()}.json`);
    fs.writeFileSync(file, JSON.stringify(rows));
    console.log(`Bundled ${rows.length} entries -> ${path.relative(process.cwd(), file)}`);
  }
  return [...byCountry.keys()];
}

function writeManifest(outDir, manifest) {
  fs.mkdirSync(outDir, { recursive: true });
  const file = path.join(outDir, 'index.json');
  fs.writeFileSync(file, JSON.stringify(manifest, null, 2));
  console.log(`Manifest -> ${path.relative(process.cwd(), file)}`);
}

// --- Sample fixture (used by --sample run) -----------------------------------

function sampleEntries(currentYear) {
  // Two illustrative entries that exercise robust + sparse paths and several
  // edge-case flags. Year fields reflect actual source editions (verified
  // 2026-05-01) so the stale-source flag fires authentically when applicable.
  // Replaced by real loader output in step 2.
  const robust = buildEntry({
    isco: '2330',
    country: 'DE',
    year: currentYear,
    currentYear,
    sources: [
      { layer: 'A', ...LAYER_A_LICENSES.DE, value: 0.55, year: 2025, methodology: 'Anteil ersetzbarer Tätigkeiten (IAB-Forschungsbericht 23/2025)' },
      { layer: 'B', ...LAYER_B_LICENSE,     value: 0.50, year: 2022, methodology: 'AI-Exposure deskriptiv (Lassébie/Quintini 2022)' },
      { layer: 'C', ...LAYER_C_LICENSE,     value: 0.62, year: 2013, methodology: 'Automation probability 10–20 Jahre' }
    ]
  });
  const sparse = buildEntry({
    isco: '5322',
    country: 'AU',
    year: currentYear,
    currentYear,
    sources: [
      { layer: 'B', ...LAYER_B_LICENSE, value: 0.38, year: 2022, methodology: 'AI-Exposure deskriptiv (Lassébie/Quintini 2022)' }
    ]
  });
  return [robust, sparse];
}

// --- Entry point -------------------------------------------------------------

function main(argv) {
  const isSample = argv.includes('--sample');
  const outDir = path.join(__dirname, '..', 'data', 'career');
  const currentYear = new Date().getFullYear();

  if (!isSample) {
    console.log('Layer loaders are stubs (MVP step 2 wires real APIs).');
    console.log('Run with --sample to materialize a fixture bundle in data/career/.');
    return;
  }

  const entries = sampleEntries(currentYear);
  const countries = writeBundle(outDir, entries);
  writeManifest(outDir, buildManifest({
    countries,
    generatedAt: new Date().toISOString(),
    sourcesUsed: collectSourcesUsed(entries)
  }));
  console.log(`Done. ${entries.length} sample entries across ${countries.length} country file(s).`);
}

if (require.main === module) {
  main(process.argv.slice(2));
}

module.exports = {
  // configuration
  MVP_COUNTRIES,
  DIVERGENT_STDDEV_CUTOFF,
  OUTLIER_FACTOR,
  STALE_THRESHOLD_YEARS,
  LAYER_A_LICENSES,
  LAYER_B_LICENSE,
  LAYER_C_LICENSE,
  OUTPUT_LICENSE,
  // pure helpers
  median,
  mean,
  stddev,
  round,
  // pipeline
  aggregateScore,
  markOutliers,
  classifyConfidence,
  flagEdgeCases,
  buildEntry,
  loadAllLayers,
  loadTaxonomy,
  // manifest + IO
  buildManifest,
  collectSourcesUsed,
  writeBundle,
  writeManifest,
  // fixture
  sampleEntries
};
