/**
 * AIStrikeMap — Radar Module
 * Loads radar situations, renders grid, filters, detail panel.
 */
const Radar = (function () {
  // Reuse central bilingual helper from I18n module.
  var localized = I18n.localized;

  var situations = [];
  var STATUS_ORDER = ['eskalierend', 'aktiv', 'stabil', 'deeskalierend', 'abgeschlossen'];
  var DIMENSIONS = [
    'cybersicherheit', 'regulierung', 'geopolitik', 'militaer', 'ueberwachung',
    'unternehmensethik', 'arbeitsmarkt', 'diskriminierung', 'umwelt', 'desinformation'
  ];
  var SEVERITY_COLORS = {
    1: '#3498db', 2: '#f39c12', 3: '#e67e22', 4: '#e74c3c', 5: '#ba68c8'
  };

  async function init() {
    try {
      var resp = await fetch('data/all-radar.json');
      if (!resp.ok) throw new Error('Could not load data/all-radar.json');
      situations = await resp.json();
    } catch (err) {
      console.warn('[Radar]', err);
      situations = [];
    }

    buildDimensionFilter();
    bindFilters();
    render();
    initDetailPanel();
  }

  function buildDimensionFilter() {
    var select = document.getElementById('radar-filter-dimension');
    DIMENSIONS.forEach(function (dim) {
      var opt = document.createElement('option');
      opt.value = dim;
      opt.setAttribute('data-i18n', 'radar.dimension.' + dim);
      opt.textContent = I18n.t('radar.dimension.' + dim);
      select.appendChild(opt);
    });
  }

  function bindFilters() {
    var dimFilter = document.getElementById('radar-filter-dimension');
    var statusFilter = document.getElementById('radar-filter-status');
    var completedToggle = document.getElementById('radar-show-completed');

    dimFilter.addEventListener('change', render);
    statusFilter.addEventListener('change', render);
    completedToggle.addEventListener('change', render);
    document.addEventListener('i18n:changed', render);
  }

  function getFiltered() {
    var dim = document.getElementById('radar-filter-dimension').value;
    var status = document.getElementById('radar-filter-status').value;
    var showCompleted = document.getElementById('radar-show-completed').checked;

    return situations.filter(function (s) {
      if (!showCompleted && s['asm:radarStatus'] === 'abgeschlossen') return false;
      if (status && s['asm:radarStatus'] !== status) return false;
      if (dim && (!s['asm:radarDimensions'] || s['asm:radarDimensions'].indexOf(dim) === -1)) return false;
      return true;
    }).sort(function (a, b) {
      var ia = STATUS_ORDER.indexOf(a['asm:radarStatus']);
      var ib = STATUS_ORDER.indexOf(b['asm:radarStatus']);
      if (ia !== ib) return ia - ib;
      // Within same status, newest first
      var da = a.startDate || '';
      var db = b.startDate || '';
      return db.localeCompare(da);
    });
  }

  function render() {
    var grid = document.getElementById('radar-grid');
    var empty = document.getElementById('radar-empty');
    var filtered = getFiltered();

    grid.innerHTML = '';

    if (filtered.length === 0) {
      empty.style.display = '';
      return;
    }
    empty.style.display = 'none';

    filtered.forEach(function (s) {
      grid.appendChild(createCard(s));
    });

    // Update counter
    var counterEl = document.getElementById('radar-counter');
    if (counterEl) {
      var eskal = situations.filter(function (s) { return s['asm:radarStatus'] === 'eskalierend'; }).length;
      var aktiv = situations.filter(function (s) { return s['asm:radarStatus'] === 'aktiv'; }).length;
      var parts = [];
      parts.push(situations.length + ' ' + I18n.t('radar.counter.total'));
      if (eskal) parts.push(eskal + ' ' + I18n.t('radar.counter.escalating'));
      if (aktiv) parts.push(aktiv + ' ' + I18n.t('radar.counter.active'));
      counterEl.textContent = parts.join(' · ');
      counterEl.style.display = '';
    }
  }

  function createCard(s) {
    var status = s['asm:radarStatus'] || 'aktiv';
    var severity = s['asm:severity'] || 1;
    var dims = s['asm:radarDimensions'] || [];
    var actors = s['asm:actors'] || [];
    var sources = s['asm:sources'] || [];
    var timeline = s['asm:developmentTimeline'] || [];

    var card = document.createElement('article');
    card.className = 'radar-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    // Header
    var header = document.createElement('div');
    header.className = 'radar-card__header';

    var title = document.createElement('h3');
    title.className = 'radar-card__title';
    title.textContent = localized(s, 'name');

    var badge = document.createElement('span');
    badge.className = 'radar-status radar-status--' + status;
    badge.innerHTML = '<span class="radar-status__dot"></span>' + esc(I18n.t('radar.status.' + status));

    header.appendChild(title);
    header.appendChild(badge);
    card.appendChild(header);

    // Description (truncated)
    var descText = localized(s, 'description');
    if (descText) {
      var desc = document.createElement('p');
      desc.className = 'detail-description';
      desc.style.marginBottom = '0';
      desc.textContent = truncate(descText, 120);
      card.appendChild(desc);
    }

    // Dimensions
    if (dims.length) {
      var dimContainer = document.createElement('div');
      dimContainer.className = 'radar-card__dimensions';
      dims.forEach(function (d) {
        var tag = document.createElement('span');
        tag.className = 'radar-dim-tag radar-dim-tag--' + d;
        tag.textContent = I18n.t('radar.dimension.' + d);
        dimContainer.appendChild(tag);
      });
      card.appendChild(dimContainer);
    }

    // Meta
    var meta = document.createElement('div');
    meta.className = 'radar-card__meta';
    meta.innerHTML =
      '<span>' + I18n.t('radar.detail.actors') + ': ' + actors.length + '</span>' +
      '<span>' + I18n.t('radar.detail.sources') + ': ' + sources.length + '</span>' +
      '<span>' + I18n.t('radar.detail.since') + ': ' + esc(s.startDate || '') + '</span>';
    card.appendChild(meta);

    // Severity bar
    var bar = document.createElement('div');
    bar.className = 'radar-card__severity';
    bar.style.background = SEVERITY_COLORS[severity] || SEVERITY_COLORS[1];
    card.appendChild(bar);

    // Click handler
    card.addEventListener('click', function () { showDetail(s); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showDetail(s); }
    });

    return card;
  }

  // Detail Panel
  var panelEl, titleEl, bodyEl, closeBtn;

  function initDetailPanel() {
    panelEl = document.getElementById('radar-detail');
    titleEl = panelEl.querySelector('.detail-panel__title');
    bodyEl = panelEl.querySelector('.detail-panel__body');
    closeBtn = panelEl.querySelector('.detail-close-btn');

    closeBtn.addEventListener('click', hideDetail);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') hideDetail();
    });
  }

  function getId(s) {
    return s['@id'] || s.id || null;
  }

  function getSlug(s) {
    var id = getId(s);
    if (!id) return null;
    return id.split('/').pop();
  }

  function showDetail(s) {
    // Update URL
    var slug = getSlug(s);
    if (slug) {
      var url = new URL(window.location.href);
      url.searchParams.set('radar', slug);
      history.replaceState(null, '', url.toString());
    }

    titleEl.textContent = localized(s, 'name');

    var status = s['asm:radarStatus'] || 'aktiv';
    var severity = s['asm:severity'] || 1;
    var dims = s['asm:radarDimensions'] || [];
    var actors = s['asm:actors'] || [];
    var timeline = s['asm:developmentTimeline'] || [];
    var sources = s['asm:sources'] || [];

    var html = '';

    // Share button + social share
    if (slug) {
      var shareUrl = window.location.origin + window.location.pathname + '?radar=' + encodeURIComponent(slug);
      var shareText = encodeURIComponent(localized(s, 'name') + ' — AIStrikeMap Live-Radar');
      html += '<div class="detail-share-row">';
      html += '<button type="button" class="detail-share-btn" data-share>' +
              '<span class="detail-share-btn__icon" aria-hidden="true">&#128279;</span>' +
              '<span data-i18n="radar.detail.share">' + esc(I18n.t('radar.detail.share')) + '</span></button>';
      html += '<a href="https://twitter.com/intent/tweet?text=' + shareText + '&url=' + encodeURIComponent(shareUrl) +
              '" target="_blank" rel="noopener" class="detail-share-icon" title="X / Twitter" aria-label="' + I18n.t('detail.share.x') + '">𝕏</a>';
      html += '<a href="https://mastodon.social/share?text=' + shareText + '%20' + encodeURIComponent(shareUrl) +
              '" target="_blank" rel="noopener" class="detail-share-icon" title="Mastodon" aria-label="' + I18n.t('detail.share.mastodon') + '">🐘</a>';
      html += '<a href="https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(shareUrl) +
              '" target="_blank" rel="noopener" class="detail-share-icon" title="LinkedIn" aria-label="' + I18n.t('detail.share.linkedin') + '">in</a>';
      html += '</div>';
    }

    // Status + Severity + Date
    html += '<div class="detail-meta">';
    html += '<span class="radar-status radar-status--' + status + '"><span class="radar-status__dot"></span>' + esc(I18n.t('radar.status.' + status)) + '</span>';
    html += '<span class="badge badge--severity-' + severity + '">' + esc(I18n.t('severity.' + severity)) + '</span>';
    if (s.startDate) html += '<span style="font-size:0.8rem;color:var(--text-secondary)">' + esc(I18n.t('radar.detail.since')) + ' ' + esc(s.startDate) + '</span>';
    var locName = s.location ? localized(s.location, 'name') : '';
    if (locName) html += '<span style="font-size:0.8rem;color:var(--text-secondary)">' + esc(locName) + '</span>';
    html += '</div>';

    // Description
    var descFull = localized(s, 'description');
    if (descFull) html += '<p class="detail-description">' + esc(descFull) + '</p>';

    // Dimensions
    if (dims.length) {
      html += '<div class="detail-section"><h3 class="detail-section__title">' + esc(I18n.t('radar.detail.dimensions')) + '</h3><div class="radar-card__dimensions">';
      dims.forEach(function (d) {
        html += '<span class="radar-dim-tag radar-dim-tag--' + d + '">' + esc(I18n.t('radar.dimension.' + d)) + '</span>';
      });
      html += '</div></div>';
    }

    // Actors
    if (actors.length) {
      html += '<div class="detail-section"><h3 class="detail-section__title">' + esc(I18n.t('radar.detail.actors')) + '</h3><ul class="actor-list">';
      actors.forEach(function (a) {
        html += '<li class="actor-item"><span>' + esc(localized(a, 'name')) + ' <span class="badge badge--actor">' + esc(I18n.t('actor.' + a.type)) + '</span></span>';
        if (a['asm:systems'] && a['asm:systems'].length) {
          html += '<span class="actor-systems">' + a['asm:systems'].map(esc).join(', ') + '</span>';
        }
        html += '</li>';
      });
      html += '</ul></div>';
    }

    // Development Timeline
    if (timeline.length) {
      html += '<div class="detail-section"><h3 class="detail-section__title">' + esc(I18n.t('radar.detail.timeline')) + '</h3><div class="timeline">';
      // Show newest first
      var sorted = timeline.slice().sort(function (a, b) {
        return (b.date || '').localeCompare(a.date || '');
      });
      sorted.forEach(function (item) {
        var sig = item.significance || 'mittel';
        html += '<div class="timeline-item">';
        html += '<div class="timeline-item__dot timeline-item__dot--event"></div>';
        html += '<div class="timeline-item__date">' + esc(item.date || '') +
                ' <span class="significance-badge significance-badge--' + sig + '">' + esc(I18n.t('radar.significance.' + sig)) + '</span></div>';
        html += '<div class="timeline-item__title">' + esc(localized(item, 'title')) + '</div>';
        html += '<div class="timeline-item__desc">' + esc(localized(item, 'description')) + '</div>';
        if (item.sources && item.sources.length) {
          html += '<div class="timeline-item__sources">';
          item.sources.forEach(function (src, i) {
            html += '<a href="' + escAttr(src) + '" target="_blank" rel="noopener">[' + (i + 1) + ']</a>';
          });
          html += '</div>';
        }
        html += '</div>';
      });
      html += '</div></div>';
    }

    // Sources with perspective badges
    if (sources.length) {
      html += '<div class="detail-section"><h3 class="detail-section__title">' + esc(I18n.t('radar.detail.sources')) + '</h3><ul class="source-list">';
      sources.forEach(function (src) {
        var perspective = src['asm:perspective'] || 'unklar';
        html += '<li class="source-item">';
        var srcTitle = localized(src, 'title');
        if (src.url) {
          html += '<a href="' + escAttr(src.url) + '" target="_blank" rel="noopener">' + esc(srcTitle) + '</a>';
        } else {
          html += '<span class="source-item__broken" title="' + I18n.t('detail.share.broken') + '">' + esc(srcTitle) + '</span>';
        }
        html += ' <span class="perspective-badge perspective-badge--' + perspective + '">' + esc(I18n.t('radar.perspective.' + perspective)) + '</span>';
        if (src.publisher || src.date) {
          html += '<div class="source-item__publisher">';
          if (src.publisher) html += esc(src.publisher);
          if (src.publisher && src.date) html += ' · ';
          if (src.date) html += esc(src.date);
          html += '</div>';
        }
        html += '</li>';
      });
      html += '</ul>';

      // Bias summary
      var counts = { neutral: 0, kritisch: 0, befuerwortend: 0, unklar: 0 };
      sources.forEach(function (src) {
        var p = src['asm:perspective'] || 'unklar';
        if (counts[p] !== undefined) counts[p]++;
      });
      html += '<div class="bias-summary">' + esc(I18n.t('radar.bias.summary')) + ': ';
      var parts = [];
      if (counts.kritisch) parts.push(counts.kritisch + ' ' + I18n.t('radar.perspective.kritisch'));
      if (counts.neutral) parts.push(counts.neutral + ' ' + I18n.t('radar.perspective.neutral'));
      if (counts.befuerwortend) parts.push(counts.befuerwortend + ' ' + I18n.t('radar.perspective.befuerwortend'));
      if (counts.unklar) parts.push(counts.unklar + ' ' + I18n.t('radar.perspective.unklar'));
      html += parts.join(', ') + '</div>';
      html += '</div>';
    }

    // Related incidents
    var related = s['asm:relatedIncidents'] || [];
    if (related.length) {
      html += '<div class="detail-section"><h3 class="detail-section__title">' + esc(I18n.t('radar.detail.relatedIncidents')) + '</h3><ul class="related-list">';
      related.forEach(function (slug) {
        html += '<li><a href="index.html?incident=' + escAttr(slug) + '" class="related-link">' + esc(slug.replace(/-/g, ' ').replace(/\b\w/g, function(c){ return c.toUpperCase(); })) + '</a></li>';
      });
      html += '</ul></div>';
    }

    // Show on map link with coordinates
    if (s.location && s.location.geo) {
      var lat = s.location.geo.latitude;
      var lng = s.location.geo.longitude;
      html += '<div style="margin-top:1rem"><a href="index.html#lat=' + lat + '&lng=' + lng + '&z=6" class="detail-share-btn" style="text-decoration:none;display:inline-flex">' +
              '<span>' + esc(I18n.t('radar.detail.showOnMap')) + '</span></a></div>';
    }

    bodyEl.innerHTML = html;
    panelEl.classList.add('open');
    panelEl.focus();

    // Wire share button
    var shareBtn = bodyEl.querySelector('[data-share]');
    if (shareBtn) {
      shareBtn.addEventListener('click', function () {
        var url = window.location.href;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(function () {
            var label = shareBtn.querySelector('[data-i18n="radar.detail.share"]');
            if (label) {
              var orig = label.textContent;
              label.textContent = I18n.t('radar.detail.shareCopied');
              setTimeout(function () { label.textContent = orig; }, 1500);
            }
          }).catch(function () {});
        }
      });
    }
  }

  function hideDetail() {
    panelEl.classList.remove('open');
    var url = new URL(window.location.href);
    if (url.searchParams.has('radar')) {
      url.searchParams.delete('radar');
      history.replaceState(null, '', url.toString());
    }
  }

  function openFromUrl() {
    var params = new URLSearchParams(window.location.search);
    var slug = params.get('radar');
    if (!slug || !situations.length) return;
    var match = situations.find(function (s) { return getSlug(s) === slug; });
    if (match) showDetail(match);
  }

  function truncate(str, max) {
    if (!str) return '';
    if (str.length <= max) return str;
    return str.substring(0, max - 1) + '\u2026';
  }

  function esc(str) {
    if (!str) return '';
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function escAttr(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  return { init: init, openFromUrl: openFromUrl };
})();
