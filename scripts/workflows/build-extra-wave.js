// Add an extra review wave for candidates already marked "verified" by research agents
// but never promoted (slug not in index). They get the same review + adversarial verify.
const fs = require('fs');
const path = require('path');
const PROJECT = 'C:/Users/meyer/Dropbox/_6.Block/X-Claude-LF11EA/Iron-Hawk/AIStrikeMap/';
const CAND_DIR = PROJECT + 'data/incident-candidates/';
const OUT = __dirname;
const promote = require(PROJECT + 'scripts/promote-candidates.js');
const index = JSON.parse(fs.readFileSync(PROJECT + 'data/index.json', 'utf8')).incidents;
const indexIds = new Set(index.map(e => e.id));

const STOP = new Set(('der die das und oder von zu in im am an auf für mit nach bei aus den dem des eine ein einer eines the of and to in on for with by at from a an as is are was were wegen gegen über ueber durch ohne um als bis vor seit zum zur usa us uk gb global ki ai'.split(' ')));
function tokens(s) { return new Set(String(s || '').toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9]+/g, ' ').split(' ').filter(t => t.length > 2 && !STOP.has(t) && !/^\d{4}$/.test(t))); }
function jaccard(a, b) { let i = 0; for (const t of a) if (b.has(t)) i++; const u = a.size + b.size - i; return u ? i / u : 0; }
const lite = JSON.parse(fs.readFileSync(PROJECT + 'data/all-incidents-lite.json', 'utf8'));
const corpus = lite.map(inc => ({ slug: String(inc['@id']).split('/').pop(), name: inc.name_de || inc.name, name_en: inc.name_en || '', startDate: inc.startDate || '', country: (inc.location && inc.location.address && inc.location.address.addressCountry) || '', retracted: !!inc['asm:retracted'] })).map(c => ({ ...c, tok: new Set([...tokens(c.name), ...tokens(c.name_en)]) }));

const work = [];
for (const f of fs.readdirSync(CAND_DIR)) {
  if (!f.endsWith('.json') || f.startsWith('_')) continue;
  let arr; try { arr = JSON.parse(fs.readFileSync(CAND_DIR + f, 'utf8')); } catch (e) { continue; }
  if (!Array.isArray(arr)) continue;
  for (const c of arr) {
    if (c.status !== 'verified') continue;
    const cd = c.candidate_data || {};
    if (!cd.name_de || !cd.name_en || (cd.sources || []).length < 2) continue;
    let slug; try { slug = promote.generateSlug(c); } catch (e) { continue; }
    if (indexIds.has(slug)) continue;
    const ct = new Set([...tokens(cd.name_de), ...tokens(cd.name_en), ...tokens(c.dedup_hint)]);
    const country = (cd.location && cd.location.country) || '';
    const year = parseInt(String(cd.startDate || '').slice(0, 4), 10);
    const scored = corpus.map(x => { let s = jaccard(ct, x.tok); if (country && x.country === country) s += 0.08; const y = parseInt(String(x.startDate).slice(0, 4), 10); if (year && y && Math.abs(y - year) <= 1) s += 0.05; return { slug: x.slug, name: x.name, startDate: x.startDate, country: x.country, retracted: x.retracted, score: Math.round(s * 100) / 100 }; }).filter(x => x.score >= 0.2).sort((a, b) => b.score - a.score).slice(0, 4);
    work.push({ file: f, candidate_id: c.candidate_id, round: c.round, would_be_slug: slug,
      candidate_data: { name_de: cd.name_de, name_en: cd.name_en, startDate: cd.startDate, location: cd.location, incidentType: cd.incidentType, candidate_severity: cd.candidate_severity, candidate_verification: cd.candidate_verification, description_de: cd.description_de, description_en: cd.description_en, actors: cd.actors, sources: (cd.sources || []).map(s => ({ url: s.url, title: s.title, publisher: s.publisher, date: s.date, type: s.type })) },
      researcher_notes: (c.researcher_notes || '') + ' | HINWEIS: Status war bereits "verified" (Research-Agent, Juni 2026), aber nie promotet und nie gegengeprueft.', dedup_hint: c.dedup_hint || '', corpus_matches: scored });
  }
}
console.log('verified-unpromoted:', work.length); work.forEach(w => console.log('  ' + w.candidate_id + '  (' + w.file + ')  top-hint: ' + (w.corpus_matches[0] ? w.corpus_matches[0].slug + ' ' + w.corpus_matches[0].score : '-')));
const waves = JSON.parse(fs.readFileSync(path.join(OUT, 'review-waves.json'), 'utf8'));
const BATCH = 8; const batches = []; for (let k = 0; k < work.length; k += BATCH) batches.push(work.slice(k, k + BATCH));
const n = waves.length + 1; waves.push(batches);
fs.writeFileSync(path.join(OUT, 'review-waves.json'), JSON.stringify(waves));
const tpl = fs.readFileSync(path.join(OUT, 'review-template.js'), 'utf8');
const s = tpl.split('__N__').join(String(n)).replace('__BATCHES__', () => JSON.stringify(batches));
fs.writeFileSync(path.join(OUT, `review-wave-${n}.js`), s);
new Function('agent', 'pipeline', 'parallel', 'log', 'phase', 'args', 'budget', 'return (async()=>{' + s.replace('export const meta', 'const meta') + '})()');
console.log(`review-wave-${n}.js: ${batches.length} batches, ${work.length} candidates, parses OK`);
