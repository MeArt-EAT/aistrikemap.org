/**
 * Career Dashboard — Frontend-IIFE.
 *
 * MVP-Schritte abgedeckt:
 *   3 (Taxonomie): Beruf-Dropdown aus data/career/taxonomy.json befüllen.
 *   4 (Skelett):   Filterleiste, Mode-Toggle.
 *   5 (Map-Modus): Leaflet-Choropleth via Welt-GeoJSON-CDN, 5-Bucket-
 *                  Color-Scale, Country-Click → Detail-Panel.
 *
 * Datenflüsse:
 *   data/career/taxonomy.json   (Beruf-Katalog)
 *   data/career/{cc}.json       (Per-Land-Bundle aus --build)
 *   data/career/index.json      (Manifest)
 *   CDN: johan/world.geo.json   (Welt-Boundaries, feature.id = ISO-3-letter)
 */
const Career = (function () {
  'use strict';

  // --- Constants ------------------------------------------------------------

  const TAXONOMY_URL = 'data/career/taxonomy.json?v=' + Date.now();
  const COUNTRY_BUNDLE_URL = function (cc) {
    return 'data/career/' + cc.toLowerCase() + '.json?v=' + Date.now();
  };
  const WORLD_GEOJSON_URL =
    'https://cdn.jsdelivr.net/gh/johan/world.geo.json@master/countries.geo.json';

  const MVP_COUNTRIES = ['DE', 'US', 'UK', 'FR', 'CA', 'NL', 'SE', 'AU'];

  // ISO 3166-1 alpha-2 ↔ alpha-3 für die 8 MVP-Länder.
  // johan/world.geo.json benutzt 3-Buchstaben-IDs.
  const ISO2_TO_ISO3 = {
    DE: 'DEU', US: 'USA', UK: 'GBR', FR: 'FRA',
    CA: 'CAN', NL: 'NLD', SE: 'SWE', AU: 'AUS'
  };
  const ISO3_TO_ISO2 = {};
  Object.keys(ISO2_TO_ISO3).forEach(function (k) {
    ISO3_TO_ISO2[ISO2_TO_ISO3[k]] = k;
  });

  // 5-Bucket-Color-Scale, dark-theme-tauglich. UX-Konzept W-1 Legende.
  const COLORS = {
    'no-data':   '#3a3a3e',
    'low':       '#2ecc71',
    'mid':       '#f1c40f',
    'high':      '#e67e22',
    'very-high': '#e74c3c'
  };

  // --- Module state --------------------------------------------------------

  let taxonomy = null;
  let currentMode = 'map';
  let currentIsco = null;
  let currentCountry = null;
  let leafletMap = null;
  let geoJsonLayer = null;
  // country → entry (best/latest for currentIsco), or null when no data.
  const countryData = new Map();
  // raw per-country fetched payloads, cached by country code (uppercase).
  const countryCache = new Map();

  // --- Helpers --------------------------------------------------------------

  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  function t(key, fallback) {
    if (window.I18n && typeof I18n.t === 'function') {
      return I18n.t(key, fallback);
    }
    return fallback || key;
  }

  function currentLang() {
    return (window.I18n && I18n.getStoredLang) ? I18n.getStoredLang() : 'de';
  }

  function bucketForScore(score) {
    if (score == null || typeof score.median !== 'number') return 'no-data';
    const m = score.median;
    if (m < 0.3) return 'low';
    if (m < 0.6) return 'mid';
    if (m < 0.9) return 'high';
    return 'very-high';
  }

  function findEntryForIsco(entries, isco) {
    if (!Array.isArray(entries) || !entries.length || !isco) return null;
    const matching = entries.filter(function (e) { return e.isco === isco; });
    if (!matching.length) return null;
    matching.sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
    return matching[0];
  }

  function occupationLabel(isco) {
    if (!taxonomy || !isco) return isco || '';
    const occ = (taxonomy.occupations || []).find(function (o) { return o.isco === isco; });
    if (!occ) return isco;
    return (currentLang() === 'en' ? occ.label_en : occ.label_de) + ' (' + isco + ')';
  }

  // --- Taxonomy + Filter-UI ------------------------------------------------

  async function loadTaxonomy() {
    try {
      const res = await fetch(TAXONOMY_URL, { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      taxonomy = await res.json();
    } catch (err) {
      console.error('[Career] taxonomy load failed:', err);
      taxonomy = { cluster_groups: [], occupations: [] };
    }
  }

  function populateOccupationFilter() {
    const sel = $('#career-filter-occupation');
    if (!sel || !taxonomy) return;
    const prevValue = sel.value;
    sel.innerHTML = '';
    const def = document.createElement('option');
    def.value = '';
    def.setAttribute('data-i18n', 'career.filter.allOccupations');
    def.textContent = t('career.filter.allOccupations', 'Alle Berufe');
    sel.appendChild(def);

    const byCluster = new Map();
    for (const occ of taxonomy.occupations || []) {
      if (!byCluster.has(occ.cluster)) byCluster.set(occ.cluster, []);
      byCluster.get(occ.cluster).push(occ);
    }
    for (const cg of taxonomy.cluster_groups || []) {
      const occs = byCluster.get(cg.key);
      if (!occs || !occs.length) continue;
      const group = document.createElement('optgroup');
      const fallback = currentLang() === 'en' ? cg.label_en : cg.label_de;
      group.label = t(cg.i18n_key, fallback);
      for (const occ of occs) {
        const opt = document.createElement('option');
        opt.value = occ.isco;
        opt.textContent = (currentLang() === 'en' ? occ.label_en : occ.label_de) + ' (' + occ.isco + ')';
        group.appendChild(opt);
      }
      sel.appendChild(group);
    }
    if (prevValue) sel.value = prevValue;
  }

  // --- Per-country data loading --------------------------------------------

  async function loadCountryBundle(cc) {
    if (countryCache.has(cc)) return countryCache.get(cc);
    try {
      const res = await fetch(COUNTRY_BUNDLE_URL(cc), { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      countryCache.set(cc, Array.isArray(data) ? data : []);
      return countryCache.get(cc);
    } catch (err) {
      // 404 / missing is expected for countries without bulk-imported data.
      countryCache.set(cc, []);
      return [];
    }
  }

  async function refreshCountryDataForIsco(isco) {
    countryData.clear();
    if (!isco) {
      MVP_COUNTRIES.forEach(function (cc) { countryData.set(cc, null); });
      return;
    }
    await Promise.all(MVP_COUNTRIES.map(async function (cc) {
      const bundle = await loadCountryBundle(cc);
      countryData.set(cc, findEntryForIsco(bundle, isco));
    }));
  }

  // --- Leaflet map + choropleth --------------------------------------------

  function initMap() {
    if (leafletMap || typeof L === 'undefined') return;
    leafletMap = L.map('career-map', {
      center: [25, 0],
      zoom: 2,
      minZoom: 2,
      maxZoom: 6,
      worldCopyJump: false,
      zoomControl: true,
      attributionControl: true,
      maxBounds: [[-60, -180], [85, 180]],
      maxBoundsViscosity: 1.0
    });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      noWrap: true,
      maxZoom: 6
    }).addTo(leafletMap);
  }

  async function loadWorldGeoJson() {
    const res = await fetch(WORLD_GEOJSON_URL);
    if (!res.ok) throw new Error('GeoJSON load failed: HTTP ' + res.status);
    return await res.json();
  }

  function styleFeature(feature) {
    const iso3 = feature.id;
    const iso2 = ISO3_TO_ISO2[iso3];
    // Non-MVP-countries: faintly outlined, no fill.
    if (!iso2) {
      return {
        fillColor: 'transparent',
        weight: 0.4,
        color: 'rgba(255,255,255,0.07)',
        fillOpacity: 0
      };
    }
    const entry = countryData.get(iso2);
    const bucket = bucketForScore(entry ? entry.score : null);
    return {
      fillColor: COLORS[bucket],
      weight: 1,
      color: 'rgba(255,255,255,0.35)',
      fillOpacity: bucket === 'no-data' ? 0.35 : 0.72
    };
  }

  function onEachFeature(feature, layer) {
    const iso3 = feature.id;
    const iso2 = ISO3_TO_ISO2[iso3];
    if (!iso2) return; // non-MVP countries are not interactive

    layer.on('click', function () { openDetailPanel(iso2); });
    layer.on('mouseover', function () {
      layer.setStyle({ weight: 2, color: '#fff' });
      if (layer.bringToFront) layer.bringToFront();
    });
    layer.on('mouseout', function () {
      if (geoJsonLayer) geoJsonLayer.resetStyle(layer);
    });
  }

  async function renderChoropleth() {
    if (!leafletMap) return;
    if (geoJsonLayer) {
      // Restyle in place — avoids redownloading geojson on every filter change.
      geoJsonLayer.setStyle(styleFeature);
      return;
    }
    try {
      const gj = await loadWorldGeoJson();
      geoJsonLayer = L.geoJSON(gj, {
        style: styleFeature,
        onEachFeature: onEachFeature
      }).addTo(leafletMap);
    } catch (err) {
      console.error('[Career] world geojson failed:', err);
    }
  }

  // --- Detail panel --------------------------------------------------------

  function countryLabel(cc) {
    // Reuse <select> options as a quick lookup for human-readable name.
    const opt = $('#career-filter-country option[value="' + cc + '"]');
    return opt ? opt.textContent.trim() : cc;
  }

  function renderEntryInPanel(entry, isco, cc) {
    const body = $('.career-detail-panel__body');
    if (!body) return;
    body.innerHTML = '';

    if (!entry) {
      const empty = document.createElement('div');
      empty.className = 'career-detail__empty';
      empty.innerHTML =
        '<p>' + t('career.detail.noData', 'Für diese Beruf-Land-Kombination liegt noch kein Datenpunkt vor.') + '</p>' +
        '<p class="career-detail__hint">' +
        t('career.detail.hint', 'Schicht-A-Bulk-Import ist die nächste Welle. Bis dahin Schicht B (OECD) und Schicht C (Frey/Osborne) als Fallback geplant.') +
        '</p>';
      body.appendChild(empty);
      return;
    }

    const score = entry.score || {};
    const flags = Array.isArray(entry.flags) ? entry.flags : [];
    const confKey = 'career.confidence.' + (entry.confidence_quality || 'sparse');
    const confLabel = t(confKey, entry.confidence_quality || '');
    const sources = Array.isArray(entry.sources) ? entry.sources : [];

    // --- Score band
    const scoreSect = document.createElement('section');
    scoreSect.className = 'career-detail__score';
    const median = typeof score.median === 'number' ? score.median.toFixed(2) : '–';
    const low = typeof score.low === 'number' ? score.low.toFixed(2) : '–';
    const high = typeof score.high === 'number' ? score.high.toFixed(2) : '–';
    scoreSect.innerHTML =
      '<div class="career-detail__score-row">' +
        '<span class="career-detail__score-median">' + median + '</span>' +
        '<span class="career-detail__score-range">' + low + ' – ' + high + '</span>' +
      '</div>' +
      '<div class="career-detail__confidence" data-conf="' + (entry.confidence_quality || 'sparse') + '">' +
        '<span class="career-detail__confidence-label">' + t('career.detail.confidence', 'Konfidenz') + ':</span> ' +
        '<strong>' + confLabel + '</strong>' +
      '</div>';
    body.appendChild(scoreSect);

    // --- Flags
    if (flags.length) {
      const flagSect = document.createElement('section');
      flagSect.className = 'career-detail__flags';
      const ul = document.createElement('ul');
      flags.forEach(function (key) {
        const li = document.createElement('li');
        li.textContent = t(key, key);
        ul.appendChild(li);
      });
      flagSect.appendChild(ul);
      body.appendChild(flagSect);
    }

    // --- Sources
    const srcSect = document.createElement('section');
    srcSect.className = 'career-detail__sources';
    const h3 = document.createElement('h3');
    h3.textContent = t('career.detail.sources', 'Quellen');
    srcSect.appendChild(h3);
    const ul = document.createElement('ul');
    sources.forEach(function (s) {
      const li = document.createElement('li');
      li.className = 'career-detail__source-item';
      li.innerHTML =
        '<div class="career-detail__source-name">' +
          (s.url ? '<a href="' + s.url + '" target="_blank" rel="noopener">' + s.name + '</a>' : s.name) +
        '</div>' +
        '<div class="career-detail__source-value">→ ' + (typeof s.value === 'number' ? s.value.toFixed(2) : '–') + '</div>' +
        (s.methodology ? '<div class="career-detail__source-method">' + s.methodology + '</div>' : '') +
        '<div class="career-detail__source-meta">' +
          (s.year ? '<span>' + s.year + '</span>' : '') +
          (s.license ? '<span> · ' + s.license + '</span>' : '') +
        '</div>';
      ul.appendChild(li);
    });
    srcSect.appendChild(ul);
    body.appendChild(srcSect);
  }

  function openDetailPanel(cc) {
    currentCountry = cc;
    const panel = $('#career-detail-panel');
    if (!panel) return;
    const country = $('.career-detail-panel__country');
    const occ = $('.career-detail-panel__occupation');
    if (country) country.textContent = countryLabel(cc);
    if (occ) occ.textContent = currentIsco ? occupationLabel(currentIsco) : t('career.filter.allOccupations', 'Alle Berufe');
    renderEntryInPanel(countryData.get(cc) || null, currentIsco, cc);
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    panel.focus({ preventScroll: true });
  }

  function closeDetailPanel() {
    const panel = $('#career-detail-panel');
    if (!panel) return;
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
  }

  // --- Mode-Toggle ---------------------------------------------------------

  function setMode(mode) {
    if (mode !== 'map' && mode !== 'chart') return;
    currentMode = mode;
    $$('.career-mode-btn').forEach(function (btn) {
      const isActive = btn.dataset.mode === mode;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    const stage = $('#career-stage');
    if (stage) stage.setAttribute('data-mode', mode);
    if (mode === 'map' && leafletMap) {
      // Leaflet braucht ein invalidateSize nach unhidden, sonst zeichnet es falsch.
      setTimeout(function () { leafletMap.invalidateSize(); }, 50);
    }
  }

  function wireModeToggle() {
    $$('.career-mode-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { setMode(btn.dataset.mode); });
    });
  }

  function wireOccupationFilter() {
    const sel = $('#career-filter-occupation');
    if (!sel) return;
    sel.addEventListener('change', async function () {
      currentIsco = sel.value || null;
      await refreshCountryDataForIsco(currentIsco);
      renderChoropleth();
      if (currentCountry) {
        // Refresh open panel with new ISCO context.
        openDetailPanel(currentCountry);
      }
    });
  }

  function wireDetailPanelClose() {
    const btn = $('.career-detail-panel__close');
    if (btn) btn.addEventListener('click', closeDetailPanel);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDetailPanel();
    });
  }

  // --- Public API ----------------------------------------------------------

  async function init() {
    await loadTaxonomy();
    populateOccupationFilter();
    wireModeToggle();
    wireOccupationFilter();
    wireDetailPanelClose();
    setMode('map');
    initMap();
    await refreshCountryDataForIsco(null);
    await renderChoropleth();

    document.addEventListener('i18n:changed', function () {
      populateOccupationFilter();
      // If panel open, re-render with new labels.
      if (currentCountry) openDetailPanel(currentCountry);
    });
  }

  return {
    init: init,
    // Debug / future-module hooks
    getTaxonomy: function () { return taxonomy; },
    getMode: function () { return currentMode; },
    setMode: setMode,
    openDetailPanel: openDetailPanel,
    closeDetailPanel: closeDetailPanel
  };
})();
