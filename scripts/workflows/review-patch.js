// Merge a review/verify correction patch into candidate_data. Shared by apply-review-verdicts.js
// and apply-manual-patches.js. Returns the list of changed fields.
const SOURCE_VOCAB = new Set(['news-article', 'research-paper', 'ngo-report', 'government-document', 'court-filing', 'legal-ruling', 'regulatory-decision', 'encyclopedia', 'analysis', 'whistleblower-document']);
const SOURCE_TYPE_MAP = { news: 'news-article', 'news-report': 'news-article', article: 'news-article', press: 'news-article', 'press-release': 'news-article', report: 'ngo-report', ngo: 'ngo-report', 'court-document': 'court-filing', 'court-ruling': 'legal-ruling', ruling: 'legal-ruling', judgment: 'legal-ruling', 'government': 'government-document', 'official-document': 'government-document', regulator: 'regulatory-decision', 'regulatory': 'regulatory-decision', study: 'research-paper', paper: 'research-paper', 'academic-paper': 'research-paper', research: 'research-paper', blog: 'analysis', 'company-statement': 'analysis', wiki: 'encyclopedia' };
const ACTOR_TYPES = new Set(['organization', 'government', 'individual', 'company', 'ngo', 'military', 'regulator', 'criminal', 'civil-society', 'international-organization', 'judiciary']);

const normUrl = u => String(u || '').trim().replace(/^https?:\/\/(www\.)?/i, '').replace(/[?#].*$/, '').replace(/\/$/, '').toLowerCase();

function mergePatch(cd, p) {
  if (!p) return [];
  const changed = [];
  for (const k of ['startDate', 'name_de', 'name_en', 'description_de', 'description_en', 'incidentType', 'candidate_severity', 'candidate_verification']) {
    if (p[k] !== undefined && p[k] !== null && p[k] !== '' && JSON.stringify(p[k]) !== JSON.stringify(cd[k])) { cd[k] = p[k]; changed.push(k); }
  }
  if (p.location && typeof p.location === 'object') {
    cd.location = cd.location || {};
    for (const k of ['name_de', 'name_en', 'country', 'lat', 'lng']) if (p.location[k] !== undefined && p.location[k] !== null && p.location[k] !== '' && cd.location[k] !== p.location[k]) { cd.location[k] = p.location[k]; changed.push('location.' + k); }
    // GLOBAL incidents have no map point; stale coordinates would put them on a random city.
    if (String(cd.location.country || '').toUpperCase() === 'GLOBAL' && (cd.location.lat !== undefined || cd.location.lng !== undefined)) {
      delete cd.location.lat; delete cd.location.lng; changed.push('location.geo-');
    }
  }
  if (Array.isArray(p.actors) && p.actors.length) {
    const actors = p.actors.filter(a => a && a.name).map(a => ({
      name: a.name,
      type: ACTOR_TYPES.has(String(a.type || '').toLowerCase()) ? String(a.type).toLowerCase() : 'organization',
      ...(Array.isArray(a.systems) && a.systems.length ? { systems: a.systems } : {}),
    }));
    if (actors.length && JSON.stringify(actors) !== JSON.stringify(cd.actors)) { cd.actors = actors; changed.push('actors'); }
  }
  if (Array.isArray(p.remove_sources) && p.remove_sources.length && Array.isArray(cd.sources)) {
    const drop = new Set(p.remove_sources.map(normUrl));
    const before = cd.sources.length;
    cd.sources = cd.sources.filter(s => !drop.has(normUrl(s.url)));
    for (let i = before - cd.sources.length; i > 0; i--) changed.push('source-');
  }
  if (Array.isArray(p.add_sources)) {
    cd.sources = cd.sources || [];
    const have = new Set(cd.sources.map(s => normUrl(s.url)));
    const drop = new Set((p.remove_sources || []).map(normUrl));
    for (const s of p.add_sources) {
      if (!s || !s.url || /aiaaic\.org/i.test(s.url)) continue;
      const key = normUrl(s.url); if (have.has(key) || drop.has(key)) continue;
      const rawType = String(s.type || 'news-article').toLowerCase();
      const type = SOURCE_VOCAB.has(rawType) ? rawType : (SOURCE_TYPE_MAP[rawType] || 'news-article');
      cd.sources.push({ url: s.url, title: s.title || s.url, publisher: s.publisher || '', date: s.date || '', type });
      have.add(key); changed.push('source+');
    }
  }
  return changed;
}

module.exports = { mergePatch, normUrl };
