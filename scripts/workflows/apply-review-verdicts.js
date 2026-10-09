// Apply review + verify verdicts of one Sichtungs-Welle to the candidate files.
// Usage: node apply-review-verdicts.js <waveNo> <runDir> [--dry-run]
const fs = require('fs');
const path = require('path');
const PROJECT = 'C:/Users/meyer/Dropbox/_6.Block/X-Claude-LF11EA/Iron-Hawk/AIStrikeMap/';
const CAND_DIR = PROJECT + 'data/incident-candidates/';
const SCRATCH = __dirname;
const TODAY = '2026-10-09';
const n = parseInt(process.argv[2], 10);
const runDirs = process.argv.slice(3).filter(a => !a.startsWith('--'));
const dry = process.argv.includes('--dry-run');

const waves = JSON.parse(fs.readFileSync(path.join(SCRATCH, 'review-waves.json'), 'utf8'));
const wave = waves[n - 1]; if (!wave) throw new Error('no wave ' + n);
const fileOf = {}; for (const b of wave) for (const c of b) fileOf[c.candidate_id] = c.file;

// Several run dirs may be given (original wave + re-verify runs); later verify verdicts override earlier ones.
const lines = runDirs.flatMap(runDir => fs.readFileSync(path.join(runDir, 'journal.jsonl'), 'utf8').split(/\r?\n/).filter(Boolean)
  .map(l => { try { return JSON.parse(l); } catch (e) { return null; } }).filter(r => r && r.type === 'result'));
const reports = lines.map(r => r.result || r.value || r.output).filter(v => v && Array.isArray(v.results));
const REVIEW_V = new Set(['verified', 'duplicate', 'rejected', 'needs-review']);
const VERIFY_V = new Set(['confirm', 'overturn-duplicate', 'overturn-reject', 'needs-review']);
// Agents occasionally return a slightly mangled candidate_id ("hundred-hundred"). Map such ids
// back to the wave's ids: exact match first, then same AIAAIC number, then longest common prefix.
const waveIds = Object.keys(fileOf);
function canon(id) {
  if (!id) return id;
  if (fileOf[id]) return id;
  const m = String(id).match(/aiaaic(\d+)$/i);
  if (m) { const hit = waveIds.filter(w => w.toLowerCase().endsWith('aiaaic' + m[1])); if (hit.length === 1) return hit[0]; }
  let best = null, bestLen = 0;
  for (const w of waveIds) { let k = 0; while (k < w.length && k < id.length && w[k] === id[k]) k++; if (k > bestLen) { bestLen = k; best = w; } }
  if (best && bestLen >= 25) { console.log(`  id-Zuordnung: "${id}" -> "${best}" (Praefix ${bestLen})`); return best; }
  console.log(`  WARN: unbekannte candidate_id "${id}" (keine Zuordnung)`);
  return id;
}
for (const rep of reports) for (const r of rep.results) if (r && r.candidate_id) r.candidate_id = canon(r.candidate_id);
const review = {}, verify = {};
// Classify per REPORT: verify reports contain confirm/overturn verdicts; review reports contain
// verified/duplicate/rejected or a 'confidence' field. A report made only of 'needs-review'
// verdicts is ambiguous: it is a review report if its ids have no review entry yet, else verify.
for (const rep of reports) {
  const rs = rep.results.filter(r => r && r.candidate_id);
  if (!rs.length) continue;
  const hasVerifyV = rs.some(r => ['confirm', 'overturn-duplicate', 'overturn-reject'].includes(r.verdict));
  const hasReviewV = rs.some(r => ['verified', 'duplicate', 'rejected'].includes(r.verdict) || 'confidence' in r);
  let kind = hasVerifyV ? 'verify' : (hasReviewV ? 'review' : (rs.every(r => !review[r.candidate_id]) ? 'review' : 'verify'));
  for (const r of rs) {
    if (!REVIEW_V.has(r.verdict) && !VERIFY_V.has(r.verdict)) continue;
    if (kind === 'review') { if (!review[r.candidate_id]) review[r.candidate_id] = r; }
    else verify[r.candidate_id] = r;
  }
}
console.log(`Journal: ${reports.length} Reports, ${Object.keys(review).length} Review-Verdikte, ${Object.keys(verify).length} Verify-Verdikte`);

function mergePatch(cd, p) {
  if (!p) return [];
  const changed = [];
  for (const k of ['startDate', 'name_de', 'name_en', 'description_de', 'description_en', 'incidentType', 'candidate_severity', 'candidate_verification']) {
    if (p[k] !== undefined && p[k] !== null && p[k] !== '' && JSON.stringify(p[k]) !== JSON.stringify(cd[k])) { cd[k] = p[k]; changed.push(k); }
  }
  if (p.location && typeof p.location === 'object') {
    cd.location = cd.location || {};
    for (const k of ['name_de', 'name_en', 'country', 'lat', 'lng']) if (p.location[k] !== undefined && p.location[k] !== null && p.location[k] !== '' && cd.location[k] !== p.location[k]) { cd.location[k] = p.location[k]; changed.push('location.' + k); }
  }
  if (Array.isArray(p.add_sources)) {
    cd.sources = cd.sources || [];
    const have = new Set(cd.sources.map(s => (s.url || '').replace(/\/$/, '')));
    for (const s of p.add_sources) {
      if (!s || !s.url || /aiaaic\.org/i.test(s.url)) continue;
      const key = s.url.replace(/\/$/, ''); if (have.has(key)) continue;
      const TYPE_MAP = { news: 'news-article', 'news-report': 'news-article', article: 'news-article', press: 'news-article', 'press-release': 'news-article', report: 'ngo-report', ngo: 'ngo-report', 'court-document': 'court-filing', 'court-ruling': 'legal-ruling', ruling: 'legal-ruling', judgment: 'legal-ruling', 'government': 'government-document', 'official-document': 'government-document', regulator: 'regulatory-decision', 'regulatory': 'regulatory-decision', study: 'research-paper', paper: 'research-paper', 'academic-paper': 'research-paper', research: 'research-paper', blog: 'analysis', 'company-statement': 'analysis', wiki: 'encyclopedia' };
      const VOCAB = new Set(['news-article', 'research-paper', 'ngo-report', 'government-document', 'court-filing', 'legal-ruling', 'regulatory-decision', 'encyclopedia', 'analysis', 'whistleblower-document']);
      const rawType = String(s.type || 'news-article').toLowerCase();
      const type = VOCAB.has(rawType) ? rawType : (TYPE_MAP[rawType] || 'news-article');
      cd.sources.push({ url: s.url, title: s.title || s.url, publisher: s.publisher || '', date: s.date || '', type });
      have.add(key); changed.push('source+');
    }
  }
  return changed;
}

const finals = {}; const summary = { verified: [], duplicate: [], rejected: [], 'needs-review': [], unverified_verified: [] };
for (const b of wave) for (const c of b) {
  const id = c.candidate_id; const rv = review[id]; const vf = verify[id];
  let status, note, dupOf = null;
  if (!rv) { status = 'needs-review'; note = 'kein Review-Ergebnis'; }
  else if (rv.verdict === 'verified') {
    if (vf && vf.verdict === 'confirm') { status = 'verified'; note = `Review: verified (${rv.confidence}) - ${rv.reason} | Verify: confirm - ${vf.reason}`; }
    else if (vf && vf.verdict === 'overturn-duplicate') { status = 'duplicate'; dupOf = vf.duplicate_of || null; note = `Review: verified, Verify: DUBLETTE von ${dupOf} - ${vf.reason}`; }
    else if (vf && vf.verdict === 'overturn-reject') { status = 'rejected'; note = `Review: verified, Verify: ABGELEHNT - ${vf.reason}`; }
    else { status = 'needs-review'; note = `Review: verified (${rv.confidence}) - ${rv.reason} | Verify: ${vf ? 'needs-review - ' + vf.reason : 'FEHLT (kein Gegenpruefer-Ergebnis)'}`; summary.unverified_verified.push(id); }
  } else if (rv.verdict === 'duplicate') { status = 'duplicate'; dupOf = rv.duplicate_of || null; note = `Review: Dublette von ${dupOf} - ${rv.reason}`; }
  else if (rv.verdict === 'rejected') { status = 'rejected'; note = `Review: abgelehnt - ${rv.reason}`; }
  else { status = 'needs-review'; note = `Review: weiterhin needs-review - ${rv.reason}`; }
  finals[id] = { status, note, dupOf, rv, vf };
  summary[status].push(id);
}

// apply per file
const byFile = {}; for (const id of Object.keys(finals)) (byFile[fileOf[id]] = byFile[fileOf[id]] || []).push(id);
let touched = 0;
for (const [file, ids] of Object.entries(byFile)) {
  const p = CAND_DIR + file; const t = fs.readFileSync(p, 'utf8');
  const crlf = t.includes('\r\n'); const indent = /\n {4}"/.test(t.replace(/\r\n/g, '\n')) ? 2 : 2;
  const arr = JSON.parse(t);
  for (const id of ids) {
    const c = arr.find(x => x.candidate_id === id); if (!c) { console.log('  FEHLT in Datei:', id); continue; }
    if (c.status === 'promoted') { console.log('  uebersprungen (promoted):', id); continue; }
    const f = finals[id];
    // Re-run guard: already applied today with the same outcome -> no second note.
    if (c.reviewed_at === TODAY && c.status === f.status && (c.researcher_notes || '').includes(`Sichtung ${TODAY}`)) continue;
    const changed = [];
    if (f.rv && f.rv.patch) changed.push(...mergePatch(c.candidate_data, f.rv.patch));
    if (f.vf && f.vf.patch) changed.push(...mergePatch(c.candidate_data, f.vf.patch));
    c.status = f.status;
    if (f.dupOf) c.duplicate_of = f.dupOf;
    c.reviewed_at = TODAY;
    c.researcher_notes = (c.researcher_notes || '') + ` | Sichtung ${TODAY}: ${f.note}` + (changed.length ? ` | Patch: ${changed.join(', ')}` : '');
    touched++;
  }
  if (!dry) { let s = JSON.stringify(arr, null, indent); if (crlf) s = s.replace(/\n/g, '\r\n'); if (/\n$/.test(t)) s += crlf ? '\r\n' : '\n'; fs.writeFileSync(p, s); }
}
console.log(`${dry ? '[DRY-RUN] ' : ''}Welle ${n}: ${touched} Kandidaten aktualisiert | verified ${summary.verified.length} | duplicate ${summary.duplicate.length} | rejected ${summary.rejected.length} | needs-review ${summary['needs-review'].length} (davon Review-verified ohne Bestaetigung: ${summary.unverified_verified.length})`);
if (summary.verified.length) console.log('VERIFIED:\n  ' + summary.verified.join('\n  '));
if (summary.duplicate.length) console.log('DUPLICATE:\n  ' + summary.duplicate.map(id => id + ' -> ' + (finals[id].dupOf || '?')).join('\n  '));
if (summary.unverified_verified.length) console.log('REVIEW-VERIFIED OHNE BESTAETIGUNG (bleiben needs-review):\n  ' + summary.unverified_verified.join('\n  '));
fs.writeFileSync(path.join(SCRATCH, `review-result-${n}.json`), JSON.stringify({ summary, finals: Object.fromEntries(Object.entries(finals).map(([k, v]) => [k, { status: v.status, note: v.note, dupOf: v.dupOf }])) }, null, 1));
