/**
 * AIStrikeMap — Data Loader
 * Loads the lightweight map-view bundle (markers, filter/search fields, ticker)
 * generated via: node scripts/bundle-incidents.js
 *
 * The lite bundle omits the detail-only fields (reverseTimeline, sources,
 * metadata) — the detail panel lazy-fetches the full per-incident file on click.
 * No cache-busting query param: GitHub Pages serves an ETag + max-age, so the
 * browser revalidates after a deploy but reuses the cached copy on repeat visits.
 */
const DataLoader = (function () {
  let incidents = [];

  async function loadAll() {
    try {
      var resp = await fetch('data/all-incidents-lite.json');
      if (!resp.ok) throw new Error('Could not load data/all-incidents-lite.json');
      incidents = await resp.json();
      return incidents;
    } catch (err) {
      console.error('[DataLoader]', err);
      return [];
    }
  }

  function getIncidents() {
    return incidents;
  }

  return { loadAll: loadAll, getIncidents: getIncidents };
})();
