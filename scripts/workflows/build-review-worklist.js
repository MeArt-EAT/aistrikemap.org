// Build the needs-review worklist with corpus dedup hints.
// Output: review-worklist.json (flat) + review-waves.json (waves of BATCHES x BATCH candidates)
const fs = require('fs');
const path = require('path');
const PROJECT = 'C:/Users/meyer/Dropbox/_6.Block/X-Claude-LF11EA/Iron-Hawk/AIStrikeMap/';
const CAND_DIR = PROJECT + 'data/incident-candidates/';
const OUT = __dirname;
const BATCH = 8, BATCHES_PER_WAVE = 5;

const STOP = new Set(('der die das und oder von zu in im am an auf für mit nach bei aus den dem des eine ein einer eines the of and to in on for with by at from a an as is are was were wegen gegen über ueber durch ohne um als bis vor seit zum zur usa us uk gb global ki ai'.split(' ')));
function tokens(s) {
  return new Set(String(s || '').toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, ' ').split(' ').filter(t => t.length > 2 && !STOP.has(t) && !/^\d{4}$/.test(t)));
}
function jaccard(a, b) { let i = 0; for (const t of a) if (b.has(t)) i++; const u = a.size + b.size - i; return u ? i / u : 0; }

// corpus from lite bundle (name/startDate/country) + index (id)
const lite = JSON.parse(fs.readFileSync(PROJECT + 'data/all-incidents-lite.json', 'utf8'));
const corpus = lite.map(inc => ({
  slug: String(inc['@id']).split('/').pop(),
  name: inc.name_de || inc.name, name_en: inc.name_en || '',
  startDate: inc.startDate || '', country: (inc.location && inc.location.address && inc.location.address.addressCountry) || '',
  retracted: !!inc['asm:retracted'],
})).map(c => ({ ...c, tok: new Set([...tokens(c.name), ...tokens(c.name_en)]) }));

const work = [];
for (const f of fs.readdirSync(CAND_DIR)) {
  if (!f.endsWith('.json') || f.startsWith('_')) continue;
  let arr; try { arr = JSON.parse(fs.readFileSync(CAND_DIR + f, 'utf8')); } catch (e) { continue; }
  if (!Array.isArray(arr)) continue;
  for (const c of arr) {
    if (c.status !== 'needs-review') continue;
    const cd = c.candidate_data || {};
    const ct = new Set([...tokens(cd.name_de), ...tokens(cd.name_en), ...tokens(c.dedup_hint)]);
    const country = (cd.location && cd.location.country) || '';
    const year = parseInt(String(cd.startDate || '').slice(0, 4), 10);
    const scored = corpus.map(x => {
      let s = jaccard(ct, x.tok);
      if (country && x.country === country) s += 0.08;
      const y = parseInt(String(x.startDate).slice(0, 4), 10);
      if (year && y && Math.abs(y - year) <= 1) s += 0.05;
      return { slug: x.slug, name: x.name, startDate: x.startDate, country: x.country, retracted: x.retracted, score: Math.round(s * 100) / 100 };
    }).filter(x => x.score >= 0.2).sort((a, b) => b.score - a.score).slice(0, 4);
    work.push({
      file: f, candidate_id: c.candidate_id, round: c.round,
      candidate_data: {
        name_de: cd.name_de, name_en: cd.name_en, startDate: cd.startDate, location: cd.location,
        incidentType: cd.incidentType, candidate_severity: cd.candidate_severity, candidate_verification: cd.candidate_verification,
        description_de: cd.description_de, description_en: cd.description_en, actors: cd.actors,
        sources: (cd.sources || []).map(s => ({ url: s.url, title: s.title, publisher: s.publisher, date: s.date, type: s.type })),
      },
      researcher_notes: c.researcher_notes || '', dedup_hint: c.dedup_hint || '',
      corpus_matches: scored,
    });
  }
}
// order: candidate-count per file descending keeps AIAAIC batches together; stable
fs.writeFileSync(path.join(OUT, 'review-worklist.json'), JSON.stringify(work, null, 1));
const waves = []; const perWave = BATCH * BATCHES_PER_WAVE;
for (let i = 0; i < work.length; i += perWave) {
  const w = work.slice(i, i + perWave); const batches = [];
  for (let k = 0; k < w.length; k += BATCH) batches.push(w.slice(k, k + BATCH));
  waves.push(batches);
}
fs.writeFileSync(path.join(OUT, 'review-waves.json'), JSON.stringify(waves));
const withHints = work.filter(x => x.corpus_matches.length).length;
console.log(`needs-review: ${work.length} | mit Bestands-Treffern (score>=0.2): ${withHints} | waves: ${waves.map(w => w.reduce((a, b) => a + b.length, 0)).join('/')}`);
console.log('top hint examples:'); work.filter(x => x.corpus_matches.length && x.corpus_matches[0].score >= 0.4).slice(0, 8).forEach(x => console.log(`  ${x.candidate_id}  ->  ${x.corpus_matches[0].slug} (${x.corpus_matches[0].score})`));
