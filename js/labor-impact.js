/**
 * AIStrikeMap — Labor Impact (Item 98 v0.3)
 *
 * Tickender Hochrechnungs-Counter mit fixem Anker (anchor_date in JSON,
 * NICHT Date.now()), so dass jeder Aufruf dieselbe Stelle zeigt — der
 * Counter "läuft" seit dem Anker und wirkt damit wie eine globale Zählung
 * statt einer Aufruf-relativen Animation.
 *
 * Zusätzlich pro Karte: statische Bandbreite (low–high %) und
 * Quellen-Beleg-Zeile. KEIN Saldo zwischen den Kategorien — Substitution
 * und Augmentation sind getrennt, weil Brutto-Effekte asymmetrisch sind
 * (Bagger-Hebel, siehe Caveat-Box).
 *
 * Lifecycle: Bei neuer Studien-Edition (WEF FoJ 2027 etc.) werden
 * anchor_date + tick_per_second + Quellen-Block in der JSON-Datei
 * aktualisiert. Keine UI-Änderung nötig. Eine Forecast-Periode wird
 * bewusst NICHT in der UI angezeigt (verhindert Verfallsdatum-Effekt).
 *
 * Datenquelle: data/labor-impact-rates.json (v0.3 Schema)
 */
const LaborImpact = (function () {
  var TICK_INTERVAL_MS = 100; // 10 Hz visuelle Aktualisierung
  var dataCache = null;
  var anchorMs = null;
  var intervalId = null;

  async function init() {
    try {
      var resp = await fetch('data/labor-impact-rates.json?v=' + Date.now());
      if (!resp.ok) throw new Error('labor-impact-rates: ' + resp.status);
      dataCache = await resp.json();
      anchorMs = Date.parse(dataCache.anchor_date);
      if (isNaN(anchorMs)) throw new Error('Invalid anchor_date: ' + dataCache.anchor_date);
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

  function formatCount(n, lang) {
    var locale = (lang === 'en') ? 'en-US' : 'de-DE';
    return new Intl.NumberFormat(locale).format(n);
  }

  function formatPct(n, lang) {
    var locale = (lang === 'en') ? 'en-US' : 'de-DE';
    return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(n) + ' %';
  }

  function formatRate(perSec, lang) {
    var locale = (lang === 'en') ? 'en-US' : 'de-DE';
    var fmt = new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    var perSecLabel = (lang === 'en') ? '/ sec' : '/ Sek';
    return '≈ ' + fmt.format(perSec) + ' ' + perSecLabel;
  }

  function elapsedSeconds() {
    return Math.max(0, (Date.now() - anchorMs) / 1000);
  }

  function tickCounter(elementId, perSec, lang) {
    var el = document.getElementById(elementId);
    if (!el) return;
    var count = Math.floor(elapsedSeconds() * perSec);
    el.textContent = formatCount(count, lang);
  }

  function renderCounterMeta(category, idPrefix, lang) {
    var labelKey = (lang === 'en') ? 'primary_total_label_en' : 'primary_total_label_de';
    var srcEl = document.getElementById(idPrefix + '-source');
    var rangeEl = document.getElementById(idPrefix + '-range');
    if (srcEl) {
      srcEl.textContent = formatRate(category.tick_per_second, lang) + ' · ' + category[labelKey];
    }
    if (rangeEl) {
      var rangeLabel = (lang === 'en') ? 'Range across sources: ' : 'Bandbreite über Quellen: ';
      rangeEl.textContent = rangeLabel
        + formatPct(category.low_pct, lang) + ' – ' + formatPct(category.high_pct, lang);
    }
  }

  function renderAnchorLine(lang) {
    var el = document.getElementById('labor-impact-anchor-line');
    if (!el) return;
    var locale = (lang === 'en') ? 'en-US' : 'de-DE';
    var d = new Date(anchorMs);
    var date = d.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
    var anchorLabel = (lang === 'en')
      ? dataCache.anchor_label_en
      : dataCache.anchor_label_de;
    var tpl = (lang === 'en')
      ? 'Counters tick from {date} (anchor: {label}).'
      : 'Counter zählen seit {date} (Anker: {label}).';
    el.textContent = tpl.replace('{date}', date).replace('{label}', anchorLabel);
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

  function startTickLoop(lang) {
    if (intervalId) clearInterval(intervalId);
    var sub = dataCache.exposure.substitution;
    var aug = dataCache.exposure.augmentation;
    // Initialer Tick, damit der Counter nicht eine Sekunde "leer" steht.
    tickCounter('labor-impact-substitution-counter', sub.tick_per_second, lang);
    tickCounter('labor-impact-augmentation-counter', aug.tick_per_second, lang);
    intervalId = setInterval(function () {
      tickCounter('labor-impact-substitution-counter', sub.tick_per_second, lang);
      tickCounter('labor-impact-augmentation-counter', aug.tick_per_second, lang);
    }, TICK_INTERVAL_MS);
  }

  function render() {
    if (!dataCache) return;
    var lang = currentLang();

    renderCounterMeta(dataCache.exposure.substitution, 'labor-impact-substitution', lang);
    renderCounterMeta(dataCache.exposure.augmentation, 'labor-impact-augmentation', lang);
    renderAnchorLine(lang);
    renderSources(dataCache.sources || [], lang);
    renderStand(lang);
    startTickLoop(lang);
  }

  document.addEventListener('i18n:changed', function () {
    if (dataCache) render();
  });

  return { init: init };
})();
