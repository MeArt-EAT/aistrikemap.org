/**
 * AIStrikeMap — Labor Impact (Item 98 v0.2)
 *
 * Static range display for AI-related labor exposure (substitution vs.
 * augmentation), plus an observation-period progress bar. Replaces the
 * previous Worldometers-style displaced/created counters, which suggested
 * a saldo the source data does not support (asymmetric Brutto-Effekt).
 *
 * Data source: data/labor-impact-rates.json (v0.2 schema)
 */
const LaborImpact = (function () {
  var dataCache = null;

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

  function currentLang() {
    var lang = (document.documentElement.lang || 'de').toLowerCase();
    return (lang === 'en') ? 'en' : 'de';
  }

  function formatPct(n, lang) {
    var locale = (lang === 'en') ? 'en-US' : 'de-DE';
    return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(n) + ' %';
  }

  function formatRangePct(low, high, lang) {
    return formatPct(low, lang) + ' – ' + formatPct(high, lang);
  }

  function renderExposureRange(elementId, exposureBlock, lang) {
    var el = document.getElementById(elementId);
    if (!el || !exposureBlock) return;
    el.textContent = formatRangePct(exposureBlock.low_pct, exposureBlock.high_pct, lang);
  }

  function monthsBetween(startDate, endDate) {
    return (endDate.getFullYear() - startDate.getFullYear()) * 12
         + (endDate.getMonth() - startDate.getMonth());
  }

  function renderProgress(forecast, lang) {
    var anchorEl = document.getElementById('labor-impact-progress-anchor');
    var barEl = document.getElementById('labor-impact-progress-bar');
    var fillEl = document.getElementById('labor-impact-progress-fill');
    var textEl = document.getElementById('labor-impact-progress-text');
    if (!forecast || !anchorEl || !barEl || !fillEl || !textEl) return;

    var start = new Date(forecast.start);
    var end = new Date(forecast.end);
    var now = new Date();

    var totalMonths = monthsBetween(start, end);
    var elapsedRaw = monthsBetween(start, now);
    var elapsed = Math.max(0, Math.min(totalMonths, elapsedRaw));
    var pct = totalMonths > 0 ? (elapsed / totalMonths) * 100 : 0;

    var locale = (lang === 'en') ? 'en-US' : 'de-DE';
    var startLabel = start.toLocaleDateString(locale, { year: 'numeric', month: 'long' });
    var endLabel = end.toLocaleDateString(locale, { year: 'numeric', month: 'long' });
    var anchor = (lang === 'en') ? forecast.anchor_en : forecast.anchor_de;

    var anchorTpl = (lang === 'en')
      ? '{period} · anchor: {anchor}'
      : '{period} · Anker: {anchor}';
    var period = startLabel + ' – ' + endLabel;
    anchorEl.textContent = anchorTpl
      .replace('{period}', period)
      .replace('{anchor}', anchor);

    fillEl.style.width = pct.toFixed(1) + '%';
    barEl.setAttribute('aria-valuenow', pct.toFixed(0));

    var elapsedTpl = (lang === 'en')
      ? '{elapsed} of {total} months elapsed ({pct} %)'
      : '{elapsed} von {total} Monaten vergangen ({pct} %)';
    textEl.textContent = elapsedTpl
      .replace('{elapsed}', elapsed)
      .replace('{total}', totalMonths)
      .replace('{pct}', pct.toFixed(0));
  }

  function renderSources(sources, lang) {
    var container = document.getElementById('labor-impact-sources');
    if (!container) return;
    container.innerHTML = '';
    sources.forEach(function (src) {
      var li = document.createElement('li');
      li.className = 'labor-impact__source';

      var link = document.createElement('a');
      link.href = src.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = src.name;
      li.appendChild(link);

      var headlineKey = (lang === 'en') ? 'headline_en' : 'headline_de';
      var headline = src[headlineKey];
      if (headline) {
        var p = document.createElement('p');
        p.className = 'labor-impact__source-headline';
        p.textContent = headline;
        li.appendChild(p);
      }

      var methKey = (lang === 'en') ? 'methodology_en' : 'methodology_de';
      var meth = src[methKey];
      if (meth) {
        var methP = document.createElement('p');
        methP.className = 'labor-impact__source-method';
        methP.textContent = meth;
        li.appendChild(methP);
      }

      container.appendChild(li);
    });
  }

  function renderStand(lang) {
    var standEl = document.getElementById('labor-impact-stand');
    if (!standEl || !dataCache.updated) return;
    var label = (lang === 'en') ? 'As of ' : 'Stand: ';
    standEl.textContent = label + dataCache.updated;
  }

  function render() {
    if (!dataCache) return;
    var lang = currentLang();

    renderExposureRange('labor-impact-substitution-range', dataCache.exposure.substitution, lang);
    renderExposureRange('labor-impact-augmentation-range', dataCache.exposure.augmentation, lang);
    renderProgress(dataCache.forecast_period, lang);
    renderSources(dataCache.sources || [], lang);
    renderStand(lang);
  }

  document.addEventListener('i18n:changed', function () {
    if (dataCache) render();
  });

  return { init: init };
})();
