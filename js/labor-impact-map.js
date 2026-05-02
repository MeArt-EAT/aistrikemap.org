/**
 * AIStrikeMap — Labor-Impact Map (Item 106)
 *
 * Leaflet-basierte Weltkarte mit Markern pro Land. Marker-Größe skaliert
 * mit reduction_headcount. Klick auf Marker → Detail-Panel rechts mit den
 * Cases des Landes (lazy-loaded aus data/labor-impact-by-country/{land}.json).
 *
 * MVP-Schnitt: Country-Center-Marker (kein Choropleth, weil Welt-GeoJSON
 * ~500 KB Bundle-Zuwachs wäre — wird in v2 ergänzt, wenn sinnvoll).
 *
 * Datenquellen:
 *   - data/labor-impact-aggregate.json (country_files-Manifest)
 *   - data/labor-impact-by-country/{land}.json (on-demand pro Klick)
 */
const LaborImpactMap = (function () {
  // Country-Center-Koordinaten (Lat/Lng) für die wichtigsten Länder.
  // Quelle: gemittelte Country-Centers (allgemein verbreitet, public domain).
  // Bei späterer Skalierung: in eigene JSON auslagern oder GeoJSON-Centroids
  // berechnen.
  var COUNTRY_CENTERS = {
    DE: [51.16,  10.45], US: [39.83, -98.58], SE: [60.13,  18.64],
    FR: [46.23,   2.21], GB: [55.38,  -3.43], NL: [52.13,   5.29],
    ES: [40.46,  -3.75], IT: [41.87,  12.57], JP: [36.20, 138.25],
    CN: [35.86, 104.20], IN: [20.59,  78.96], CA: [56.13,-106.35],
    AU: [-25.27,133.78], BR: [-14.24, -51.93], KR: [35.91, 127.77],
    CH: [46.82,   8.23], AT: [47.52,  14.55], BE: [50.50,   4.47],
    DK: [56.26,   9.50], FI: [61.92,  25.75], NO: [60.47,   8.47],
    IE: [53.41,  -8.24], PT: [39.40,  -8.22], PL: [51.92,  19.15],
    MX: [23.63,-102.55], AR: [-38.42, -63.62], ZA: [-30.56,  22.94]
  };

  var aggregate = null;
  var map = null;
  var markerLayer = null;
  var byCountryCache = {};
  var currentCountry = null;

  async function init() {
    try {
      var resp = await fetch('data/labor-impact-aggregate.json?v=' + Date.now());
      if (!resp.ok) throw new Error('aggregate: ' + resp.status);
      aggregate = await resp.json();
      initMap();
      renderMarkers();
      renderStand();
    } catch (err) {
      console.error('[LaborImpactMap]', err);
      var errBox = document.getElementById('labor-map-error');
      if (errBox) errBox.style.display = 'block';
    }
  }

  function initMap() {
    map = L.map('labor-map', {
      worldCopyJump: true,
      zoomControl: true,
      minZoom: 2,
      maxZoom: 6
    }).setView([20, 10], 2);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap, &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    markerLayer = L.layerGroup().addTo(map);
  }

  function markerRadiusFor(headcount) {
    // skaliert sqrt für sinnvolle Visualisierung — Klarna 700 → ~7px,
    // Amazon 14k → ~30px. Bei späteren Großfällen 50k+ → max ~50px gedeckelt.
    if (!headcount || headcount <= 0) return 6;
    var r = Math.sqrt(headcount) / 4;
    return Math.max(6, Math.min(50, r));
  }

  function renderMarkers() {
    var files = (aggregate && aggregate.country_files) || {};
    markerLayer.clearLayers();
    var added = 0;
    Object.keys(files).forEach(function (cc) {
      var center = COUNTRY_CENTERS[cc];
      if (!center) {
        console.warn('[LaborImpactMap] no center for', cc);
        return;
      }
      var summary = files[cc];
      var marker = L.circleMarker(center, {
        radius: markerRadiusFor(summary.reduction_headcount),
        fillColor: '#e74c3c',
        color: '#fff',
        weight: 1.5,
        opacity: 0.9,
        fillOpacity: 0.7
      });
      marker.bindTooltip(
        '<strong>' + cc + '</strong>: '
        + summary.cases_counted + ' '
        + (currentLang() === 'en' ? 'cases · ' : 'Fälle · ')
        + formatCount(summary.reduction_headcount) + ' '
        + (currentLang() === 'en' ? 'positions' : 'Stellen'),
        { direction: 'top', offset: [0, -8] }
      );
      marker.on('click', function () { selectCountry(cc); });
      markerLayer.addLayer(marker);
      added++;
    });
    if (added === 0) {
      var msg = currentLang() === 'en'
        ? 'No cases yet. Be the first to submit one.'
        : 'Noch keine Fälle. Sei der/die erste mit einer Meldung.';
      var emptyEl = document.getElementById('labor-map-detail-empty');
      if (emptyEl) emptyEl.textContent = msg;
    }
  }

  async function loadCountry(cc) {
    if (byCountryCache[cc]) return byCountryCache[cc];
    var resp = await fetch('data/labor-impact-by-country/' + cc.toLowerCase() + '.json?v=' + Date.now());
    if (!resp.ok) throw new Error('country ' + cc + ': ' + resp.status);
    var data = await resp.json();
    byCountryCache[cc] = data;
    return data;
  }

  async function selectCountry(cc) {
    currentCountry = cc;
    var emptyEl = document.getElementById('labor-map-detail-empty');
    var contentEl = document.getElementById('labor-map-detail-content');
    if (!emptyEl || !contentEl) return;
    try {
      var data = await loadCountry(cc);
      emptyEl.hidden = true;
      contentEl.hidden = false;
      contentEl.innerHTML = renderCountryDetail(data);
    } catch (err) {
      console.error('[LaborImpactMap] selectCountry', err);
      contentEl.innerHTML = '<p class="labor-map__detail-error">'
        + (currentLang() === 'en' ? 'Failed to load.' : 'Konnte nicht laden.')
        + '</p>';
      emptyEl.hidden = true;
      contentEl.hidden = false;
    }
  }

  function renderCountryDetail(data) {
    var lang = currentLang();
    var lblCases = lang === 'en' ? 'documented cases' : 'dokumentierte Fälle';
    var lblReduction = lang === 'en' ? 'positions reduced' : 'Stellen reduziert';
    var lblCreation = lang === 'en' ? 'positions created' : 'Stellen geschaffen';
    var headlineKey = lang === 'en' ? 'headline_en' : 'headline_de';
    var methKey = lang === 'en' ? 'methodology_en' : 'methodology_de';
    var quoteKey = lang === 'en' ? 'ai_quote_en' : 'ai_quote_de';
    var ctxKey = lang === 'en' ? 'context_en' : 'context_de';

    var html = '<header class="labor-map__detail-head">'
      + '<h2>' + escapeHtml(data.country) + '</h2>'
      + '<div class="labor-map__detail-stats">'
      + '<span><strong>' + formatCount(data.cases_counted) + '</strong> ' + lblCases + '</span>'
      + '<span><strong>' + formatCount(data.reduction_headcount) + '</strong> ' + lblReduction + '</span>'
      + (data.creation_headcount ? '<span><strong>' + formatCount(data.creation_headcount) + '</strong> ' + lblCreation + '</span>' : '')
      + '</div></header>';

    html += '<ul class="labor-map__case-list">';
    (data.cases || []).forEach(function (c) {
      var quote = c[quoteKey] || '';
      var ctx = c[ctxKey] || '';
      var stableTag = '';
      if (c.net_workforce_change === 'stable') {
        stableTag = ' <span class="labor-map__pill labor-map__pill--stable">'
          + (lang === 'en' ? 'headcount stable' : 'Gesamt stabil') + '</span>';
      }
      var disputedTag = '';
      if (c.tags && c.tags.indexOf('disputed-attribution') >= 0) {
        disputedTag = ' <span class="labor-map__pill labor-map__pill--disputed">'
          + (lang === 'en' ? 'disputed AI attribution' : 'KI-Grund umstritten') + '</span>';
      }
      var reversalTag = '';
      if (c.tags && c.tags.indexOf('reversal') >= 0) {
        reversalTag = ' <span class="labor-map__pill labor-map__pill--reversal">'
          + (lang === 'en' ? 'partly reversed' : 'teils zurückgenommen') + '</span>';
      }
      html += '<li class="labor-map__case">'
        + '<header class="labor-map__case-head">'
        + '<strong>' + escapeHtml(c.company) + '</strong> '
        + '<span class="labor-map__case-meta">(' + (c.industry || '') + ', '
        + (c.date_announced || '').slice(0, 7) + ')</span> '
        + '— <strong>' + formatCount(c.headcount_affected) + '</strong>'
        + stableTag + disputedTag + reversalTag
        + '</header>'
        + (quote ? '<p class="labor-map__case-quote">' + escapeHtml(quote) + '</p>' : '')
        + (ctx ? '<p class="labor-map__case-context">' + escapeHtml(ctx) + '</p>' : '')
        + renderSourceLinks(c.sources || [])
        + '</li>';
    });
    html += '</ul>';
    return html;
  }

  function renderSourceLinks(sources) {
    if (!sources.length) return '';
    var lang = currentLang();
    var label = lang === 'en' ? 'Sources' : 'Quellen';
    var items = sources.map(function (s) {
      var paywall = s.paywall ? ' <span class="labor-map__paywall">'
        + (lang === 'en' ? '(paywall)' : '(Paywall)') + '</span>' : '';
      return '<li><a href="' + s.url + '" target="_blank" rel="noopener noreferrer">'
        + escapeHtml(s.publisher || s.name) + '</a>' + paywall + '</li>';
    }).join('');
    return '<details class="labor-map__sources"><summary>' + label
      + ' (' + sources.length + ')</summary><ul>' + items + '</ul></details>';
  }

  function renderStand() {
    var standEl = document.getElementById('labor-map-stand');
    if (!standEl || !aggregate) return;
    var label = currentLang() === 'en' ? 'As of ' : 'Stand: ';
    var date = (aggregate.generated || '').slice(0, 10);
    standEl.textContent = label + date;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function formatCount(n) {
    var locale = currentLang() === 'en' ? 'en-US' : 'de-DE';
    return new Intl.NumberFormat(locale).format(n || 0);
  }

  function currentLang() {
    var lang = (document.documentElement.lang || 'de').toLowerCase();
    return lang === 'en' ? 'en' : 'de';
  }

  document.addEventListener('i18n:changed', function () {
    if (!aggregate) return;
    renderMarkers();
    renderStand();
    if (currentCountry) selectCountry(currentCountry);
  });

  return { init: init };
})();
