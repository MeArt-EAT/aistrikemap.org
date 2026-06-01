#!/usr/bin/env node
/**
 * Local coverage analysis for Round-3 topic suggestions.
 * Reads all incidents + candidate files, produces buckets by country, type, year.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const INCIDENTS_DIR = path.join(ROOT, 'data', 'incidents');
const CANDIDATES_DIR = path.join(ROOT, 'data', 'incident-candidates');

function readJson(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); }
  catch (e) { return null; }
}

// --- INCIDENTS ---
const incidentFiles = fs.readdirSync(INCIDENTS_DIR).filter(f => f.endsWith('.json'));
const incidents = [];
for (const f of incidentFiles) {
  const d = readJson(path.join(INCIDENTS_DIR, f));
  if (!d) continue;
  // address country
  const addr = d.location && d.location.address;
  let country = null;
  if (addr && typeof addr === 'object') country = addr.addressCountry || null;
  if (!country && d['asm:metadata'] && d['asm:metadata'].country) country = d['asm:metadata'].country;
  // try fallback: parse from name or slug
  if (!country) {
    const name = (d.name || f).toLowerCase();
    // heuristic: skip
  }
  const startDate = d.startDate || '';
  const year = startDate.length >= 4 ? startDate.slice(0,4) : null;
  const types = d['asm:incidentType'] || [];
  incidents.push({
    file: f,
    slug: f.replace(/\.json$/, ''),
    country,
    year,
    types: Array.isArray(types) ? types : [],
    name: d.name || ''
  });
}

// --- CANDIDATES ---
const candidateFiles = fs.readdirSync(CANDIDATES_DIR).filter(f => f.endsWith('.json') && !f.startsWith('_'));
const candidates = [];
for (const f of candidateFiles) {
  const arr = readJson(path.join(CANDIDATES_DIR, f));
  if (!Array.isArray(arr)) continue;
  for (const c of arr) {
    const cd = c.candidate_data || {};
    const loc = cd.location || {};
    const year = (cd.startDate || '').slice(0,4) || null;
    candidates.push({
      candidate_id: c.candidate_id,
      country: loc.country || null,
      year,
      types: Array.isArray(cd.incidentType) ? cd.incidentType : [],
      source_file: f
    });
  }
}

// --- COUNT ---
function inc(map, key) { if (!key) return; map[key] = (map[key]||0)+1; }

const incByCountry = {}, incByType = {}, incByYear = {};
const candByCountry = {}, candByType = {}, candByYear = {};
const combinedByCountry = {}, combinedByType = {};
const bucketCountryType = {}; // "CC|type" -> count

for (const i of incidents) {
  inc(incByCountry, i.country);
  inc(incByYear, i.year);
  inc(combinedByCountry, i.country);
  for (const t of i.types) {
    inc(incByType, t);
    inc(combinedByType, t);
    if (i.country) inc(bucketCountryType, i.country + '|' + t);
  }
}
for (const c of candidates) {
  inc(candByCountry, c.country);
  inc(candByYear, c.year);
  inc(combinedByCountry, c.country);
  for (const t of c.types) {
    inc(candByType, t);
    inc(combinedByType, t);
    if (c.country) inc(bucketCountryType, c.country + '|' + t);
  }
}

function topN(map, n) {
  return Object.entries(map).sort((a,b)=>b[1]-a[1]).slice(0,n);
}

const out = {
  totals: { incidents: incidents.length, candidates: candidates.length },
  incidents_without_country: incidents.filter(i=>!i.country).length,
  by_country_combined: Object.entries(combinedByCountry).sort((a,b)=>b[1]-a[1]),
  by_type_combined: Object.entries(combinedByType).sort((a,b)=>b[1]-a[1]),
  by_year_incidents: Object.entries(incByYear).sort((a,b)=>a[0].localeCompare(b[0])),
  by_year_candidates: Object.entries(candByYear).sort((a,b)=>a[0].localeCompare(b[0])),
  top_country_type_buckets: topN(bucketCountryType, 30),
  candidates_count_by_file: candidateFiles.map(f => {
    const arr = readJson(path.join(CANDIDATES_DIR, f));
    return [f, Array.isArray(arr) ? arr.length : 0];
  })
};

const outPath = path.join(ROOT, 'data', 'incident-candidates', '_coverage-analysis.json');
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log('Wrote ' + outPath);
