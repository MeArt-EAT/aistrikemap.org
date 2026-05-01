/**
 * AIStrikeMap — Labor Impact Ticker (Item 98)
 *
 * Worldometers-style live counters for AI-related labor market impact.
 * Two counters: jobs displaced and jobs created.
 * Per-second tick rate computed from annual estimates published by
 * WEF, OECD and ILO. Range (low/high) shown alongside median.
 *
 * Data source: data/labor-impact-rates.json
 * Counter starts at 0 when page loads ("seit Sie diese Seite geöffnet haben").
 */
const LaborImpact = (function () {
  var SECONDS_PER_YEAR = 365.25 * 24 * 3600;
  var TICK_INTERVAL_MS = 100; // 10 Hz visual refresh
  var dataCache = null;
  var startTime = null;
  var rafId = null;
  var intervalId = null;

  async function init() {
    try {
      var resp = await fetch('data/labor-impact-rates.json?v=' + Date.now());
      if (!resp.ok) throw new Error('labor-impact-rates: ' + resp.status);
      dataCache = await resp.json();
      render();
    } catch (err) {
      console.error('[LaborImpact]', err);
      var errBox = document.getElementById('labor-impact-error');
      if (errBox) errBox.style.display = 'block';
    }
  }

  function aggregateRates(scenario) {
    // Convert each annual estimate to per-second, then aggregate.
    var perSec = scenario.annual_estimates.map(function (est) {
      return est.value / SECONDS_PER_YEAR;
    });
    perSec.sort(function (a, b) { return a - b; });
    var low = perSec[0];
    var high = perSec[perSec.length - 1];
    // Median (works for any count, but for 3 it's the middle one)
    var median;
    if (perSec.length % 2 === 1) {
      median = perSec[Math.floor(perSec.length / 2)];
    } else {
      var mid = perSec.length / 2;
      median = (perSec[mid - 1] + perSec[mid]) / 2;
    }
    return { low: low, median: median, high: high, count: perSec.length };
  }

  function render() {
    if (!dataCache) return;
    var lang = (document.documentElement.lang || 'de').toLowerCase();
    if (lang !== 'de' && lang !== 'en') lang = 'de';

    var displaced = dataCache.scenarios.displaced;
    var created = dataCache.scenarios.created;
    var displacedRates = aggregateRates(displaced);
    var createdRates = aggregateRates(created);

    // Counter values
    var dispCounter = document.getElementById('labor-impact-displaced-counter');
    var createdCounter = document.getElementById('labor-impact-created-counter');
    var dispRange = document.getElementById('labor-impact-displaced-range');
    var createdRange = document.getElementById('labor-impact-created-range');
    var dispLabel = document.getElementById('labor-impact-displaced-label');
    var createdLabel = document.getElementById('labor-impact-created-label');

    if (dispLabel) dispLabel.textContent = displaced.label[lang] || displaced.label.de;
    if (createdLabel) createdLabel.textContent = created.label[lang] || created.label.de;

    // Range display: "ca. X–Y pro Sekunde"
    var perSecKey = (lang === 'en') ? 'labor.perSecond' : 'labor.perSecond';
    var perSecText = (typeof I18n !== 'undefined') ? I18n.t(perSecKey) : 'pro Sekunde';
    if (dispRange) {
      dispRange.textContent = formatRangePerSec(displacedRates, lang) + ' ' + perSecText;
    }
    if (createdRange) {
      createdRange.textContent = formatRangePerSec(createdRates, lang) + ' ' + perSecText;
    }

    // Sources
    renderSources(displaced, 'labor-impact-displaced-sources', lang);
    renderSources(created, 'labor-impact-created-sources', lang);

    // Stand
    var standEl = document.getElementById('labor-impact-stand');
    if (standEl && dataCache.updated) {
      var dateLabel = (lang === 'en') ? 'As of ' : 'Stand: ';
      standEl.textContent = dateLabel + dataCache.updated;
    }

    // Start counters
    startTime = Date.now();
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(function () {
      tick(displacedRates.median, dispCounter, lang, '−');
      tick(createdRates.median, createdCounter, lang, '+');
    }, TICK_INTERVAL_MS);
  }

  function tick(perSecRate, el, lang, prefix) {
    if (!el || !startTime) return;
    var elapsedSec = (Date.now() - startTime) / 1000;
    var count = Math.floor(elapsedSec * perSecRate);
    el.textContent = prefix + formatNumber(count, lang);
  }

  function formatNumber(n, lang) {
    try {
      var locale = (lang === 'en') ? 'en-US' : 'de-DE';
      return new Intl.NumberFormat(locale).format(n);
    } catch (e) {
      return String(n);
    }
  }

  function formatRangePerSec(rates, lang) {
    var locale = (lang === 'en') ? 'en-US' : 'de-DE';
    var fmt = new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return fmt.format(rates.low) + ' – ' + fmt.format(rates.high);
  }

  function renderSources(scenario, containerId, lang) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    scenario.annual_estimates.forEach(function (est) {
      var li = document.createElement('li');
      li.className = 'labor-impact__source';

      var link = document.createElement('a');
      link.href = est.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = est.source;
      li.appendChild(link);

      var horizonLabel = (lang === 'en') ? ' years' : ' Jahre';
      var totalLabel = (lang === 'en') ? 'total' : 'gesamt';
      var totalFmt = formatNumber(est.horizon_total, lang);
      var meta = document.createElement('span');
      meta.className = 'labor-impact__source-meta';
      meta.textContent = ' · ' + totalFmt + ' ' + totalLabel + ' / ' + est.horizon_years + horizonLabel;
      li.appendChild(meta);

      var methKey = (lang === 'en') ? 'methodology_en' : 'methodology_de';
      var methText = est[methKey] || est.methodology_de;
      if (methText) {
        var methP = document.createElement('p');
        methP.className = 'labor-impact__source-method';
        methP.textContent = methText;
        li.appendChild(methP);
      }

      container.appendChild(li);
    });
  }

  // Re-render on language change
  document.addEventListener('i18n:changed', function () {
    if (dataCache) render();
  });

  return { init: init };
})();
