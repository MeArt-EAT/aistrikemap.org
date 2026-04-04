/**
 * AIStrikeMap — Data Loader
 * Loads incident index and individual JSON-LD files.
 */
const DataLoader = (function () {
  let incidents = [];

  async function loadAll() {
    try {
      var resp = await fetch('data/index.json?v=' + Date.now());
      if (!resp.ok) throw new Error('Could not load data/index.json');
      var index = await resp.json();

      // Load in batches to avoid browser connection limits
      var BATCH_SIZE = 6;
      var allResults = [];
      for (var i = 0; i < index.incidents.length; i += BATCH_SIZE) {
        var batch = index.incidents.slice(i, i + BATCH_SIZE);
        var promises = batch.map(function (entry) {
          return fetch('data/incidents/' + entry.file)
            .then(function (r) {
              if (!r.ok) throw new Error('Failed to load ' + entry.file);
              return r.json();
            })
            .catch(function (err) {
              console.warn('[DataLoader]', err);
              return null;
            });
        });
        var results = await Promise.all(promises);
        allResults = allResults.concat(results);
      }
      incidents = allResults.filter(function (r) { return r !== null; });
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
