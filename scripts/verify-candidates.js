#!/usr/bin/env node
/**
 * scripts/verify-candidates.js
 *
 * Verifiziert die Quellen-URLs aller Kandidaten in
 * data/incident-candidates/*.json. Pro Quelle:
 *   1. HEAD-Request → HTTP-Status, geht überhaupt?
 *   2. Bei 2xx: leichtgewichtiger GET, schaue ob der Body Stichworte aus
 *      dem Kandidaten-Titel + ein Datum referenziert (Inhalts-Match).
 *
 * Aktualisiert pro Kandidat:
 *   - status: "verified" (≥2 Quellen fetchable + content-match)
 *           | "needs-review" (1 Quelle match)
 *           | "rejected" (alle broken oder wrong-content)
 *   - verification_log: pro-Quelle-Resultat + Aggregat
 *
 * Schreibt die Files mit den aktualisierten Werten zurück, BEHÄLT alle
 * ursprünglichen Felder bei.
 *
 * Usage:
 *   node scripts/verify-candidates.js
 *   node scripts/verify-candidates.js --file data/incident-candidates/latam-... .json
 *   node scripts/verify-candidates.js --concurrency 8
 *   node scripts/verify-candidates.js --dry-run
 *
 * Erfordert Node 18+ (built-in fetch).
 */
'use strict';

const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'data', 'incident-candidates');
const USER_AGENT = 'AIStrikeMap-VerifierBot/1.0 (+https://aistrikemap.org)';
const HEAD_TIMEOUT_MS = 10_000;
const GET_TIMEOUT_MS = 15_000;
const MAX_BODY_BYTES = 2_000_000; // 2 MB cap pro Fetch
const RATE_DELAY_MS = 150;        // zwischen Requests an dieselbe Domain

// --- CLI args ----------------------------------------------------------------

function parseArgs(argv) {
  const args = { files: [], concurrency: 6, dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--file') args.files.push(argv[++i]);
    else if (a === '--concurrency') args.concurrency = Math.max(1, parseInt(argv[++i], 10) || 6);
    else if (a === '--dry-run') args.dryRun = true;
    else if (a === '--help' || a === '-h') {
      console.log('Usage: node scripts/verify-candidates.js [--file PATH] [--concurrency N] [--dry-run]');
      process.exit(0);
    }
  }
  return args;
}

// --- Concurrency limiter -----------------------------------------------------

function pLimit(n) {
  const queue = [];
  let active = 0;
  const next = () => {
    if (active >= n || !queue.length) return;
    const job = queue.shift();
    active++;
    job.run().then(job.resolve, job.reject).finally(() => {
      active--;
      next();
    });
  };
  return (fn) => new Promise((resolve, reject) => {
    queue.push({ run: fn, resolve, reject });
    next();
  });
}

// --- Plain-text helper -------------------------------------------------------

function stripHtmlToText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

// Plausible content-match heuristic.
// Returns score 0..1, plus the set of matched keywords for the log.
function scoreContentMatch(candidate, bodyText) {
  if (!bodyText || bodyText.length < 200) return { score: 0, hits: [] };
  const cd = candidate.candidate_data || {};

  // Gather candidate keywords from name + actor names + location.
  const keywords = new Set();
  const addWords = (str) => {
    if (!str) return;
    str.toLowerCase()
      .split(/[\s,.;:!?()\/\[\]\-—–"„"']+/u)
      .filter(w => w.length >= 4 && !STOPWORDS.has(w))
      .forEach(w => keywords.add(w));
  };
  addWords(cd.name_de);
  addWords(cd.name_en);
  if (cd.location) {
    addWords(cd.location.name_de);
    addWords(cd.location.name_en);
  }
  if (Array.isArray(cd.actors)) {
    for (const a of cd.actors) addWords(a.name);
  }

  // Year reference: candidate startDate year should appear in body.
  let yearHit = null;
  if (typeof cd.startDate === 'string') {
    const y = cd.startDate.slice(0, 4);
    if (/^\d{4}$/.test(y) && bodyText.indexOf(y) !== -1) yearHit = y;
  }

  // Count keyword hits.
  const hits = [];
  for (const kw of keywords) {
    if (bodyText.indexOf(kw) !== -1) hits.push(kw);
  }

  // Score: hit-ratio plus year-bonus.
  const ratio = keywords.size ? hits.length / keywords.size : 0;
  const yearBonus = yearHit ? 0.15 : 0;
  const score = Math.min(1, ratio + yearBonus);

  return { score, hits: hits.slice(0, 8), yearHit };
}

const STOPWORDS = new Set([
  'und', 'oder', 'aber', 'sich', 'dass', 'eine', 'einen', 'einem',
  'einer', 'eines', 'wird', 'wurde', 'wurden', 'sind', 'ist',
  'nach', 'durch', 'beim', 'vom', 'zur', 'zum', 'das', 'die',
  'der', 'den', 'dem', 'des', 'als', 'auch', 'aber', 'mit',
  'von', 'bei', 'aus', 'auf', 'über', 'unter', 'gegen', 'für',
  'jahr', 'jahre', 'jahren', 'tag', 'tage', 'tagen',
  'and', 'or', 'but', 'with', 'from', 'into', 'onto', 'over',
  'under', 'against', 'between', 'after', 'before', 'about',
  'this', 'that', 'these', 'those', 'their', 'there', 'they',
  'will', 'were', 'been', 'have', 'has', 'had', 'said',
  'year', 'years', 'month', 'months', 'day', 'days',
  'sich', 'haben', 'soll', 'kann', 'kommt'
]);

// --- HTTP fetch with timeout -------------------------------------------------

async function fetchWithTimeout(url, opts, timeoutMs) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    return await fetch(url, Object.assign({ signal: ctrl.signal }, opts));
  } finally {
    clearTimeout(timer);
  }
}

async function verifySource(url, candidate) {
  // URL syntax sanity check
  let parsed;
  try { parsed = new URL(url); }
  catch (e) {
    return { url, http_status: null, matches_content: false, note: 'invalid-url' };
  }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    return { url, http_status: null, matches_content: false, note: 'non-http-protocol' };
  }

  // HEAD first — quick liveness check.
  let headStatus = null;
  try {
    const r = await fetchWithTimeout(url, {
      method: 'HEAD',
      redirect: 'follow',
      headers: { 'user-agent': USER_AGENT }
    }, HEAD_TIMEOUT_MS);
    headStatus = r.status;
  } catch (e) {
    // Some servers don't support HEAD — fall through to GET.
    headStatus = null;
  }

  if (headStatus !== null && headStatus >= 400 && headStatus !== 405) {
    return { url, http_status: headStatus, matches_content: false, note: 'http-error' };
  }

  // GET for content-match. Cap body size.
  let getStatus = null;
  let bodyText = '';
  try {
    const r = await fetchWithTimeout(url, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'user-agent': USER_AGENT,
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    }, GET_TIMEOUT_MS);
    getStatus = r.status;

    if (r.status >= 400) {
      return { url, http_status: r.status, matches_content: false, note: 'http-error-on-get' };
    }

    const reader = r.body && r.body.getReader ? r.body.getReader() : null;
    if (reader) {
      let bytes = 0;
      const chunks = [];
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        bytes += value.length;
        chunks.push(value);
        if (bytes >= MAX_BODY_BYTES) {
          try { reader.cancel(); } catch (e) {}
          break;
        }
      }
      bodyText = Buffer.concat(chunks).toString('utf8');
    } else {
      bodyText = await r.text();
    }
  } catch (e) {
    return { url, http_status: getStatus, matches_content: false, note: 'fetch-error: ' + (e.message || e).slice(0, 80) };
  }

  // Content match.
  const text = stripHtmlToText(bodyText);
  const match = scoreContentMatch(candidate, text);
  const matches = match.score >= 0.25; // tuneable threshold
  return {
    url,
    http_status: getStatus,
    matches_content: matches,
    note: matches
      ? ('match score=' + match.score.toFixed(2) + ' hits=' + match.hits.length + (match.yearHit ? ' year=' + match.yearHit : ''))
      : 'no-content-match score=' + match.score.toFixed(2)
  };
}

// --- Per-file processor ------------------------------------------------------

async function processFile(file, limiter, args) {
  const raw = fs.readFileSync(file, 'utf8');
  let candidates;
  try {
    candidates = JSON.parse(raw);
  } catch (e) {
    console.error('  PARSE ERROR ' + path.basename(file) + ': ' + e.message);
    return { file, processed: 0, verified: 0, needsReview: 0, rejected: 0, error: e.message };
  }
  if (!Array.isArray(candidates)) {
    console.error('  ' + path.basename(file) + ': not an array, skipping');
    return { file, processed: 0, verified: 0, needsReview: 0, rejected: 0, error: 'not-array' };
  }

  const stats = { file, processed: 0, verified: 0, needsReview: 0, rejected: 0 };

  for (const cand of candidates) {
    const sources = (cand.candidate_data && Array.isArray(cand.candidate_data.sources))
      ? cand.candidate_data.sources : [];
    if (!sources.length) {
      cand.status = 'needs-review';
      cand.verification_log = cand.verification_log || {};
      cand.verification_log.note = 'no-sources';
      stats.processed++;
      stats.needsReview++;
      continue;
    }
    const perSource = await Promise.all(sources.map((s) =>
      limiter(async () => {
        // Small per-source delay to avoid hammering any single host.
        await new Promise((r) => setTimeout(r, RATE_DELAY_MS));
        return await verifySource(s.url, cand);
      })
    ));
    const matchCount = perSource.filter((s) => s.matches_content).length;
    const newStatus = matchCount >= 2 ? 'verified'
                    : matchCount === 1 ? 'needs-review'
                    : 'rejected';
    cand.status = newStatus;
    cand.verification_log = {
      verified_at: new Date().toISOString(),
      agent: 'scripts/verify-candidates.js',
      per_source: perSource,
      match_count: matchCount,
      sources_count: sources.length
    };
    stats.processed++;
    if (newStatus === 'verified') stats.verified++;
    else if (newStatus === 'needs-review') stats.needsReview++;
    else stats.rejected++;
    const pad = (n) => String(n).padStart(3);
    console.log('    [' + pad(stats.processed) + '/' + pad(candidates.length) + '] ' + newStatus
      + ' (' + matchCount + '/' + sources.length + ' matched) — ' + (cand.candidate_data?.name_de || cand.candidate_id || '?').slice(0, 70));
  }

  if (!args.dryRun) {
    fs.writeFileSync(file, JSON.stringify(candidates, null, 2) + '\n', 'utf8');
  }
  return stats;
}

// --- Main --------------------------------------------------------------------

async function main(argv) {
  const args = parseArgs(argv);
  const files = args.files.length ? args.files : (
    fs.readdirSync(DIR)
      .filter(f => f.endsWith('.json') && !f.startsWith('_'))
      .map(f => path.join(DIR, f))
  );

  console.log('verify-candidates start — files=' + files.length + ' concurrency=' + args.concurrency + (args.dryRun ? ' DRY-RUN' : ''));
  const limiter = pLimit(args.concurrency);

  const totals = { processed: 0, verified: 0, needsReview: 0, rejected: 0, errors: 0 };
  for (const file of files) {
    console.log('\n=== ' + path.basename(file) + ' ===');
    try {
      const s = await processFile(file, limiter, args);
      if (s.error) totals.errors++;
      totals.processed += s.processed;
      totals.verified += s.verified;
      totals.needsReview += s.needsReview;
      totals.rejected += s.rejected;
    } catch (e) {
      console.error('  FILE ERROR ' + path.basename(file) + ': ' + (e.message || e));
      totals.errors++;
    }
  }

  console.log('\n=== Summary ===');
  console.log('  files processed: ' + files.length + (totals.errors ? ' (' + totals.errors + ' errors)' : ''));
  console.log('  candidates processed: ' + totals.processed);
  console.log('  verified:     ' + totals.verified);
  console.log('  needs-review: ' + totals.needsReview);
  console.log('  rejected:     ' + totals.rejected);
}

if (require.main === module) {
  main(process.argv.slice(2)).catch(err => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = {
  scoreContentMatch,
  stripHtmlToText,
  verifySource,
  processFile
};
