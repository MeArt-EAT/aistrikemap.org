// Pre-promotion check for status=verified candidates: generated slug, @id ASCII, corpus similarity,
// source count, smart chars. Usage: node pre-promote-check.js [--only-reviewed]
const fs = require('fs');
const PROJECT = 'C:/Users/meyer/Dropbox/_6.Block/X-Claude-LF11EA/Iron-Hawk/AIStrikeMap/';
const CAND_DIR = PROJECT + 'data/incident-candidates/';
const promote = require(PROJECT + 'scripts/promote-candidates.js');
const onlyReviewed = process.argv.includes('--only-reviewed');
const index = JSON.parse(fs.readFileSync(PROJECT + 'data/index.json', 'utf8')).incidents;
const indexIds = new Set(index.map(e => e.id));
const STOP = new Set(('der die das und oder von zu in im am an auf für mit nach bei aus den dem des eine ein einer eines the of and to in on for with by at from a an as is are was were wegen gegen über ueber durch ohne um als bis vor seit zum zur usa us uk gb global ki ai'.split(' ')));
function tokens(s) { return new Set(String(s || '').toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9]+/g, ' ').split(' ').filter(t => t.length > 2 && !STOP.has(t) && !/^\d{4}$/.test(t))); }
function jaccard(a, b) { let i = 0; for (const t of a) if (b.has(t)) i++; const u = a.size + b.size - i; return u ? i / u : 0; }
const lite = JSON.parse(fs.readFileSync(PROJECT + 'data/all-incidents-lite.json', 'utf8'));
const corpus = lite.map(inc => ({ slug: String(inc['@id']).split('/').pop(), name: inc.name_de || inc.name, name_en: inc.name_en || '', country: (inc.location && inc.location.address && inc.location.address.addressCountry) || '', tok: new Set([...tokens(inc.name_de || inc.name), ...tokens(inc.name_en || '')]) }));
const SMART = /[\u2014\u2013\u2018\u2019\u201C\u201D\u201E\u2026\u00AD]/;
const rows = [];
for (const f of fs.readdirSync(CAND_DIR)) {
  if (!f.endsWith('.json') || f.startsWith('_')) continue;
  let arr; try { arr = JSON.parse(fs.readFileSync(CAND_DIR + f, 'utf8')); } catch (e) { continue; }
  if (!Array.isArray(arr)) continue;
  for (const c of arr) {
    if (c.status !== 'verified') continue;
    if (onlyReviewed && !c.reviewed_at) continue;
    const cd = c.candidate_data || {};
    let slug = null; try { slug = promote.generateSlug(c); } catch (e) { slug = 'ERR:' + e.message; }
    const ct = new Set([...tokens(cd.name_de), ...tokens(cd.name_en)]);
    const country = (cd.location && cd.location.country) || '';
    let best = { slug: '-', score: 0 };
    for (const x of corpus) { let s = jaccard(ct, x.tok); if (country && x.country === country) s += 0.08; if (s > best.score) best = { slug: x.slug, score: Math.round(s * 100) / 100 }; }
    const smart = SMART.test(JSON.stringify(cd));
    rows.push({ file: f, id: c.candidate_id, slug, inIndex: indexIds.has(slug), nonAscii: /[^\x00-\x7F]/.test(slug), sources: (cd.sources || []).length, best, smart, reviewed: c.reviewed_at || '' });
  }
}
rows.sort((a, b) => b.best.score - a.best.score);
console.log(`verified candidates: ${rows.length} | already in index (slug): ${rows.filter(r => r.inIndex).length} | <2 sources: ${rows.filter(r => r.sources < 2).length} | non-ASCII slug: ${rows.filter(r => r.nonAscii).length} | smart chars: ${rows.filter(r => r.smart).length}`);
console.log('\nHOHE BESTANDS-AEHNLICHKEIT (>= 0.5) - vor Promotion manuell bestaetigen:');
rows.filter(r => r.best.score >= 0.5 && !r.inIndex).forEach(r => console.log(`  ${r.best.score}  ${r.id}  ->  ${r.best.slug}`));
console.log('\nPROMOTE-LISTE (Slug nicht im Index, >=2 Quellen):');
rows.filter(r => !r.inIndex && r.sources >= 2).forEach(r => console.log(`  ${r.slug}${r.nonAscii ? '  [NON-ASCII!]' : ''}${r.smart ? '  [smart-chars]' : ''}  (${r.id}, best ${r.best.score})`));
console.log('\nBLOCKIERT (<2 Quellen):'); rows.filter(r => !r.inIndex && r.sources < 2).forEach(r => console.log(`  ${r.id} (${r.sources} Quelle)`));
fs.writeFileSync(__dirname + '/pre-promote-rows.json', JSON.stringify(rows, null, 1));
