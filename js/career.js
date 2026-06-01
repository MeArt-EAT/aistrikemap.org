/**
 * Career Dashboard — Frontend-IIFE (MVP Step 4 Skelett).
 *
 * Aktuelles Scope: Filter-UI mit echter Taxonomie befüllen, Mode-Toggle
 * verkabeln, Placeholder anzeigen. Datenrendering (Map + Chart) folgt in
 * Step 5 + 6, sobald Bulk-Loader-Daten vorhanden sind.
 *
 * Datenflüsse (geplant):
 *   data/career/taxonomy.json (jetzt)
 *   data/career/{cc}.json     (Step 2 — Bulk-Loader-Output)
 *   data/career/index.json    (Manifest)
 */
const Career = (function () {
  'use strict';

  const TAXONOMY_URL = 'data/career/taxonomy.json?v=' + Date.now();

  let taxonomy = null;
  let currentMode = 'map';

  // --- Helpers --------------------------------------------------------------

  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  function t(key, fallback) {
    if (window.I18n && typeof I18n.t === 'function') {
      return I18n.t(key, fallback);
    }
    return fallback || key;
  }

  // --- Taxonomy + Filter-UI --------------------------------------------------

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
    // Empty default
    sel.innerHTML = '';
    const def = document.createElement('option');
    def.value = '';
    def.setAttribute('data-i18n', 'career.filter.allOccupations');
    def.textContent = t('career.filter.allOccupations', 'Alle Berufe');
    sel.appendChild(def);

    // Group by cluster — <optgroup> mit i18n-Cluster-Label.
    const byCluster = new Map();
    for (const occ of taxonomy.occupations || []) {
      if (!byCluster.has(occ.cluster)) byCluster.set(occ.cluster, []);
      byCluster.get(occ.cluster).push(occ);
    }
    // Reihenfolge der Cluster wie in cluster_groups[]
    for (const cg of taxonomy.cluster_groups || []) {
      const occs = byCluster.get(cg.key);
      if (!occs || !occs.length) continue;
      const group = document.createElement('optgroup');
      // i18n-Cluster-Label: zuerst i18n.t() versuchen, sonst label_de/en je
      // nach aktuellem Lang — minimal robust für MVP.
      const lang = (window.I18n && I18n.getStoredLang) ? I18n.getStoredLang() : 'de';
      const fallback = lang === 'en' ? cg.label_en : cg.label_de;
      group.label = t(cg.i18n_key, fallback);
      for (const occ of occs) {
        const opt = document.createElement('option');
        opt.value = occ.isco;
        opt.textContent = (lang === 'en' ? occ.label_en : occ.label_de) + ' (' + occ.isco + ')';
        group.appendChild(opt);
      }
      sel.appendChild(group);
    }
  }

  // --- Mode-Toggle -----------------------------------------------------------

  function setMode(mode) {
    if (mode !== 'map' && mode !== 'chart') return;
    currentMode = mode;
    $$('.career-mode-btn').forEach(btn => {
      const isActive = btn.dataset.mode === mode;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    // Permalink-Update vorbereiten (Step 8 — i18n + Permalink + QA).
    // Stage-Inhalt wird in Step 5/6 modusabhängig gerendert; hier nur State.
    const stage = $('#career-stage');
    if (stage) stage.setAttribute('data-mode', mode);
  }

  function wireModeToggle() {
    $$('.career-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => setMode(btn.dataset.mode));
    });
  }

  // --- Public API ------------------------------------------------------------

  async function init() {
    await loadTaxonomy();
    populateOccupationFilter();
    wireModeToggle();
    setMode('map');
    // I18n re-render: wenn die Sprache nach Init wechselt, sind Optgroup-
    // Labels und Option-Texte bereits im DOM und werden vom I18n-Renderer
    // nicht erfasst (kein data-i18n-Attribut auf <optgroup>, dynamische
    // <option>-Texte). Auf das globale i18n:changed-Event hören und neu
    // befüllen.
    document.addEventListener('i18n:changed', populateOccupationFilter);
  }

  return {
    init,
    // exposed for debugging / future modules
    getTaxonomy: function () { return taxonomy; },
    getMode: function () { return currentMode; },
    setMode: setMode
  };
})();
