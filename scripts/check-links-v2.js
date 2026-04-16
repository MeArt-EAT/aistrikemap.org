#!/usr/bin/env node
/**
 * V2 link-checker.
 *
 * Differences to v1 (scripts/check-links.js):
 *   - Retry 3x with exponential backoff (1s, 2s, 4s) before giving up.
 *   - URL cache at data/link-cache.json with 7-day TTL: skips URLs whose
 *     last successful check is younger than the TTL.
 *   - UA rotation across 3 realistic browser user-agents per retry.
 *   - Categorises results into { ok, paywall, archived, dead } instead of
 *     a binary broken/ok split. These categories are written into
 *     asm:linkHealth on each source object (only with --apply).
 *
 * Usage:
 *   node scripts/check-links-v2.js             # check all URLs, update cache
 *   node scripts/check-links-v2.js --apply     # also write asm:linkHealth back
 *                                                into data/incidents/*.json
 *                                                and data/radar/*.json
 *   node scripts/check-links-v2.js --force     # ignore cache TTL, recheck all
 *   node scripts/check-links-v2.js --only URL  # check a single URL
 *
 * Output:
 *   - data/link-cache.json (always)
 *   - link-check-v2-report.json (summary)
 *   - asm:linkHealth on sources (with --apply)
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CACHE_PATH = path.join(ROOT, 'data', 'link-cache.json');
const REPORT_PATH = path.join(ROOT, 'link-check-v2-report.json');
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const CONCURRENCY = 10;
const REQUEST_TIMEOUT_MS = 15000;
const RETRY_COUNT = 3;
const RETRY_BACKOFF_MS = [1000, 2000, 4000];

// Three realistic browser UAs, rotated per retry attempt.
const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14.3; rv:124.0) Gecko/20100101 Firefox/124.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Safari/605.1.15',
];

// Known paywall domains. A 2xx response from these is still "paywall"
// because the article body is gated. A non-2xx is "paywall" too — the
// bot was blocked at the edge. This list is intentionally conservative.
const PAYWALL_DOMAINS = [
  'wsj.com', 'ft.com', 'nytimes.com', 'bloomberg.com', 'economist.com',
  'nzz.ch', 'faz.net', 'sueddeutsche.de', 'zeit.de', 'welt.de',
  'handelsblatt.com', 'spiegel.de', 'washingtonpost.com', 'newyorker.com',
  'wired.com', 'theatlantic.com', 'telegraph.co.uk', 'thetimes.co.uk',
  'businessinsider.com', 'theinformation.com', 'foreignaffairs.com',
];

// Archive hosts — URLs on these domains are treated as "archived"
// regardless of status (assuming any HTTP code ≥ 200).
const ARCHIVE_DOMAINS = [
  'web.archive.org', 'archive.org', 'archive.today', 'archive.ph',
  'archive.is', 'perma.cc',
];

/* --------------------------- cache ------------------------------------- */

function loadCache() {
  if (!fs.existsSync(CACHE_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'));
  } catch (e) {
    console.warn('Cache unreadable — starting fresh:', e.message);
    return {};
  }
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2), 'utf8');
}

function isFresh(entry) {
  if (!entry || !entry.checkedAt) return false;
  return (Date.now() - new Date(entry.checkedAt).getTime()) < CACHE_TTL_MS;
}

/* --------------------------- classification ---------------------------- */

function hostnameOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); }
  catch (e) { return ''; }
}

function matchesDomain(host, list) {
  if (!host) return false;
  return list.some(function (d) { return host === d || host.endsWith('.' + d); });
}

function classify(url, status, err) {
  var host = hostnameOf(url);
  if (matchesDomain(host, ARCHIVE_DOMAINS)) return 'archived';

  // 2xx from paywall host → paywall (body gated even if HEAD succeeds)
  if (status >= 200 && status < 300) {
    if (matchesDomain(host, PAYWALL_DOMAINS)) return 'paywall';
    return 'ok';
  }

  // Edge-blocked paywall responses
  if ((status === 401 || status === 402 || status === 403 || status === 451) &&
      matchesDomain(host, PAYWALL_DOMAINS)) {
    return 'paywall';
  }

  // Cloudflare/Akamai bot-walls on paywall hosts often surface as 403 or 429
  if ((status === 403 || status === 429) && matchesDomain(host, PAYWALL_DOMAINS)) {
    return 'paywall';
  }

  // Everything else non-2xx or network error → dead
  return 'dead';
}

/* --------------------------- URL collection ---------------------------- */

function collectUrlsFromItem(item, origin) {
  var urls = [];
  var sources = item['asm:sources'] || [];
  sources.forEach(function (s) {
    if (s && s.url) urls.push({ url: s.url, origin: origin, title: s.title || '' });
  });
  var timeline = item['asm:reverseTimeline'] || item['asm:developmentTimeline'] || [];
  timeline.forEach(function (t) {
    (t.sources || []).forEach(function (src) {
      if (typeof src === 'string' && /^https?:/.test(src)) {
        urls.push({ url: src, origin: origin + ' → timeline', title: t.title || '' });
      } else if (src && src.url) {
        urls.push({ url: src.url, origin: origin + ' → timeline', title: t.title || '' });
      }
    });
  });
  return urls;
}

function readJsonDir(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(function (f) { return f.endsWith('.json'); })
    .map(function (f) {
      var full = path.join(dir, f);
      try { return { file: f, full: full, data: JSON.parse(fs.readFileSync(full, 'utf8')) }; }
      catch (e) { console.error('Parse error in', f, e.message); return null; }
    })
    .filter(Boolean);
}

/* --------------------------- fetch logic ------------------------------- */

async function fetchOnce(url, ua, method) {
  var ctrl = new AbortController();
  var timer = setTimeout(function () { ctrl.abort(); }, REQUEST_TIMEOUT_MS);
  try {
    var resp = await fetch(url, {
      method: method,
      redirect: 'follow',
      signal: ctrl.signal,
      headers: {
        'User-Agent': ua,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9,de;q=0.8',
      },
    });
    return { status: resp.status, finalUrl: resp.url };
  } finally {
    clearTimeout(timer);
  }
}

async function checkWithRetries(url) {
  var lastErr = null;
  var lastStatus = 0;
  var finalUrl = url;

  for (var attempt = 0; attempt < RETRY_COUNT; attempt++) {
    var ua = USER_AGENTS[attempt % USER_AGENTS.length];
    try {
      // Try HEAD first; if 405 / 403 / ≥400, retry same attempt with GET.
      var r = await fetchOnce(url, ua, 'HEAD');
      if (r.status === 405 || r.status === 403 || r.status >= 400) {
        r = await fetchOnce(url, ua, 'GET');
      }
      lastStatus = r.status;
      finalUrl = r.finalUrl || url;
      if (r.status >= 200 && r.status < 400) {
        return { status: r.status, finalUrl: finalUrl, error: null, attempts: attempt + 1 };
      }
      // Non-2xx/3xx — retry unless last attempt
    } catch (e) {
      lastErr = e.name === 'AbortError' ? 'timeout' : (e.message || String(e));
      lastStatus = 0;
    }

    if (attempt < RETRY_COUNT - 1) {
      await new Promise(function (res) { setTimeout(res, RETRY_BACKOFF_MS[attempt]); });
    }
  }

  return { status: lastStatus, finalUrl: finalUrl, error: lastErr, attempts: RETRY_COUNT };
}

/* --------------------------- worker pool ------------------------------- */

async function runPool(items, worker, concurrency) {
  var idx = 0;
  var results = new Array(items.length);
  async function next() {
    while (idx < items.length) {
      var my = idx++;
      results[my] = await worker(items[my], my);
      process.stdout.write('.');
      if ((my + 1) % 50 === 0) process.stdout.write(' ' + (my + 1) + '\n');
    }
  }
  var workers = [];
  for (var i = 0; i < concurrency; i++) workers.push(next());
  await Promise.all(workers);
  return results;
}

/* --------------------------- apply to data ----------------------------- */

function applyHealthToFiles(dir, healthByUrl) {
  var items = readJsonDir(dir);
  var changed = 0;
  items.forEach(function (entry) {
    var data = entry.data;
    var dirty = false;

    (data['asm:sources'] || []).forEach(function (s) {
      if (s && s.url && healthByUrl[s.url]) {
        var h = healthByUrl[s.url];
        if (s['asm:linkHealth'] !== h) {
          s['asm:linkHealth'] = h;
          dirty = true;
        }
      }
    });

    var timeline = data['asm:reverseTimeline'] || data['asm:developmentTimeline'] || [];
    timeline.forEach(function (t) {
      if (!Array.isArray(t.sources)) return;
      // Timeline sources are often plain strings; upgrade to objects to
      // attach health. Skip string-only timelines to avoid schema churn.
      t.sources.forEach(function (src) {
        if (src && typeof src === 'object' && src.url && healthByUrl[src.url]) {
          var h = healthByUrl[src.url];
          if (src['asm:linkHealth'] !== h) {
            src['asm:linkHealth'] = h;
            dirty = true;
          }
        }
      });
    });

    if (dirty) {
      fs.writeFileSync(entry.full, JSON.stringify(data, null, 2) + '\n', 'utf8');
      changed++;
    }
  });
  return changed;
}

/* --------------------------- main -------------------------------------- */

async function main() {
  var argv = process.argv.slice(2);
  var apply = argv.includes('--apply');
  var force = argv.includes('--force');
  var onlyIdx = argv.indexOf('--only');
  var only = onlyIdx >= 0 ? argv[onlyIdx + 1] : null;

  var cache = loadCache();

  // Collect URLs
  var all = [];
  readJsonDir(path.join(ROOT, 'data', 'incidents')).forEach(function (x) {
    all = all.concat(collectUrlsFromItem(x.data, 'incidents/' + x.file));
  });
  readJsonDir(path.join(ROOT, 'data', 'radar')).forEach(function (x) {
    all = all.concat(collectUrlsFromItem(x.data, 'radar/' + x.file));
  });

  var seen = new Map();
  all.forEach(function (e) {
    if (!seen.has(e.url)) seen.set(e.url, { url: e.url, origins: [e.origin] });
    else seen.get(e.url).origins.push(e.origin);
  });
  var urls = Array.from(seen.values());

  if (only) urls = urls.filter(function (u) { return u.url === only; });

  // Separate fresh-cache hits from URLs that need a network check
  var toCheck = [];
  var cacheHits = [];
  urls.forEach(function (entry) {
    var cached = cache[entry.url];
    if (!force && isFresh(cached)) {
      entry.health = cached.health;
      entry.status = cached.status;
      entry.fromCache = true;
      cacheHits.push(entry);
    } else {
      toCheck.push(entry);
    }
  });

  console.log(urls.length + ' unique URLs (' + all.length + ' refs)');
  console.log(cacheHits.length + ' served from cache, ' + toCheck.length + ' to check.');
  if (!toCheck.length) console.log('(pass --force to recheck cached URLs)');
  console.log('');

  var results = await runPool(toCheck, async function (entry) {
    var res = await checkWithRetries(entry.url);
    entry.status = res.status;
    entry.finalUrl = res.finalUrl;
    entry.error = res.error;
    entry.attempts = res.attempts;
    entry.health = classify(entry.url, res.status, res.error);
    entry.fromCache = false;
    // Update cache
    cache[entry.url] = {
      health: entry.health,
      status: entry.status,
      finalUrl: entry.finalUrl,
      error: entry.error,
      checkedAt: new Date().toISOString(),
    };
    return entry;
  }, CONCURRENCY);

  // Persist cache immediately — even if a crash happens later, we keep progress.
  saveCache(cache);
  if (toCheck.length) console.log('\n');

  // Summary
  var everything = cacheHits.concat(results);
  var counts = { ok: 0, paywall: 0, archived: 0, dead: 0 };
  everything.forEach(function (e) { counts[e.health] = (counts[e.health] || 0) + 1; });

  console.log('=== RESULTS ===');
  console.log('Total:    ' + everything.length);
  console.log('OK:       ' + counts.ok);
  console.log('Paywall:  ' + counts.paywall);
  console.log('Archived: ' + counts.archived);
  console.log('Dead:     ' + counts.dead);

  var dead = everything.filter(function (e) { return e.health === 'dead'; });
  if (dead.length) {
    console.log('\n=== DEAD LINKS ===');
    dead.sort(function (a, b) { return a.origins[0].localeCompare(b.origins[0]); });
    dead.forEach(function (r) {
      console.log('[' + (r.status || 'ERR') + '] ' + r.url);
      if (r.error) console.log('  error: ' + r.error);
      r.origins.forEach(function (o) { console.log('  in ' + o); });
    });
  }

  // Report
  fs.writeFileSync(REPORT_PATH, JSON.stringify({
    generated: new Date().toISOString(),
    total: everything.length,
    counts: counts,
    ttlDays: CACHE_TTL_MS / (24 * 60 * 60 * 1000),
    cacheHits: cacheHits.length,
    checked: results.length,
    dead: dead.map(function (r) {
      return { url: r.url, status: r.status, error: r.error, origins: r.origins };
    }),
  }, null, 2), 'utf8');
  console.log('\nReport: ' + path.relative(ROOT, REPORT_PATH));
  console.log('Cache:  ' + path.relative(ROOT, CACHE_PATH));

  // Apply
  if (apply) {
    var healthByUrl = {};
    everything.forEach(function (e) { healthByUrl[e.url] = e.health; });
    var inc = applyHealthToFiles(path.join(ROOT, 'data', 'incidents'), healthByUrl);
    var rad = applyHealthToFiles(path.join(ROOT, 'data', 'radar'), healthByUrl);
    console.log('\nApplied asm:linkHealth to ' + inc + ' incidents, ' + rad + ' radar files.');
    console.log('Run `node scripts/bundle-incidents.js` to refresh bundles.');
  }

  process.exit(counts.dead ? 1 : 0);
}

main().catch(function (e) {
  console.error(e);
  process.exit(2);
});
