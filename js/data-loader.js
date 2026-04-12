/**
 * AIStrikeMap — Data Loader
 * Loads all incidents from a single bundled JSON file.
 * Bundle is generated via: node scripts/bundle-incidents.js
 */
const DataLoader = (function () {
  let incidents = [];

  async function loadAll() {
    try {
      var resp = await fetch('data/all-incidents.json?v=' + Date.now());
      if (!resp.ok) throw new Error('Could not load data/all-incidents.json');
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
