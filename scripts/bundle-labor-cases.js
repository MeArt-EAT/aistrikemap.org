#!/usr/bin/env node
/**
 * Bundle Labor-Impact-Cases (kuratierte KI-bedingte Stellen-Veränderungen
 * weltweit) zu einem aggregierten JSON, das die Übersichts-Page lädt.
 *
 * Quelle: data/labor-impact-cases/*.json (eine Datei pro Case)
 * Schema: data/labor-impact-cases/_schema.md
 * Output: data/labor-impact-aggregate.json
 *
 * Counter-Logik: Nur Cases mit ai_attribution_strength >= MIN_STRENGTH zählen
 * in den Aggregat-Counter "konkret realisiert". Schwächere Cases erscheinen
 * in der Detail-Liste mit Markierung, aber nicht im Counter.
 *
 * Usage: node scripts/bundle-labor-cases.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const MIN_STRENGTH = 4; // siehe _schema.md AI-Attribution-Stärke-Skala
const CASES_DIR = path.join(__dirname, '..', 'data', 'labor-impact-cases');
const OUT_FILE = path.join(__dirname, '..', 'data', 'labor-impact-aggregate.json');

function loadCases() {
  if (!fs.existsSync(CASES_DIR)) {
    console.log(`No cases directory: ${CASES_DIR}`);
    return [];
  }
  return fs.readdirSync(CASES_DIR)
    .filter(f => f.endsWith('.json') && !f.startsWith('_'))
    .map(f => {
      const full = path.join(CASES_DIR, f);
      try {
        return JSON.parse(fs.readFileSync(full, 'utf8'));
      } catch (err) {
        console.error(`Skipping malformed ${f}: ${err.message}`);
        return null;
      }
    })
    .filter(Boolean);
}

function aggregate(cases) {
  const counted = cases.filter(c =>
    typeof c.ai_attribution_strength === 'number'
    && c.ai_attribution_strength >= MIN_STRENGTH
  );

  const reductions = counted.filter(c => c.direction !== 'creation');
  const creations = counted.filter(c => c.direction === 'creation');

  const sumHeadcount = arr => arr.reduce((s, c) => s + (Number(c.headcount_affected) || 0), 0);

  const totalReduction = sumHeadcount(reductions);
  const totalCreation = sumHeadcount(creations);

  const byCountry = {};
  for (const c of counted) {
    const key = c.country || 'XX';
    if (!byCountry[key]) byCountry[key] = { reduction: 0, creation: 0, cases: 0 };
    byCountry[key].cases += 1;
    if (c.direction === 'creation') {
      byCountry[key].creation += Number(c.headcount_affected) || 0;
    } else {
      byCountry[key].reduction += Number(c.headcount_affected) || 0;
    }
  }

  const byIndustry = {};
  for (const c of counted) {
    const key = c.industry || 'unknown';
    if (!byIndustry[key]) byIndustry[key] = { reduction: 0, creation: 0, cases: 0 };
    byIndustry[key].cases += 1;
    if (c.direction === 'creation') {
      byIndustry[key].creation += Number(c.headcount_affected) || 0;
    } else {
      byIndustry[key].reduction += Number(c.headcount_affected) || 0;
    }
  }

  // Top-Cases-Vorschau (für Übersichts-Page): max. 5 Reduktionen sortiert nach
  // Headcount, mit minimalem Feld-Set für Front-End-Performance.
  const topReductions = [...reductions]
    .sort((a, b) => (b.headcount_affected || 0) - (a.headcount_affected || 0))
    .slice(0, 5)
    .map(c => ({
      company: c.company,
      country: c.country,
      date: c.date_announced,
      headcount: c.headcount_affected,
      strength: c.ai_attribution_strength,
      net_workforce_change: c.net_workforce_change || null
    }));

  return {
    version: '0.1',
    generated: new Date().toISOString(),
    license: 'CC-BY-NC-SA-4.0',
    methodology: {
      min_attribution_strength: MIN_STRENGTH,
      schema: 'data/labor-impact-cases/_schema.md',
      _note: `Counter zählt nur Cases mit ai_attribution_strength >= ${MIN_STRENGTH}. Schwächere Cases werden für die Detail-Liste mitgezählt, aber nicht im Aggregat-Counter.`
    },
    totals: {
      cases_total: cases.length,
      cases_counted: counted.length,
      reduction_headcount: totalReduction,
      creation_headcount: totalCreation,
      countries_with_cases: Object.keys(byCountry).length
    },
    by_country: byCountry,
    by_industry: byIndustry,
    top_reductions: topReductions
  };
}

function main() {
  const cases = loadCases();
  const out = aggregate(cases);
  fs.writeFileSync(OUT_FILE, JSON.stringify(out, null, 2));
  console.log(`Bundled ${cases.length} cases (${out.totals.cases_counted} counted) -> ${path.relative(process.cwd(), OUT_FILE)}`);
  console.log(`  reduction headcount: ${out.totals.reduction_headcount.toLocaleString('de-DE')}`);
  console.log(`  creation headcount:  ${out.totals.creation_headcount.toLocaleString('de-DE')}`);
  console.log(`  countries:           ${out.totals.countries_with_cases}`);
}

if (require.main === module) main();

module.exports = { loadCases, aggregate, MIN_STRENGTH };
