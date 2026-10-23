/**
 * AIStrikeMap — Detail Panel
 * Shows incident details with reverse timeline on marker click.
 */
const DetailPanel = (function () {
  let panelEl, titleEl, bodyEl, closeBtn;
  var radarSituations = null;
  var currentIncident = null;
  var currentList = null; // {incidents, titleKey, introKey} while a list is shown

  function loadRadarData() {
    if (radarSituations !== null) return;
    fetch('data/all-radar.json')
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (data) { radarSituations = data; })
      .catch(function () { radarSituations = []; });
  }

  function init() {
    loadRadarData();
    panelEl = document.getElementById('detail-panel');
    titleEl = panelEl.querySelector('.detail-panel__title');
    bodyEl = panelEl.querySelector('.detail-panel__body');
    closeBtn = panelEl.querySelector('.detail-close-btn');

    closeBtn.addEventListener('click', hide);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') hide();
    });

    // Re-render currently-open incident when language changes,
    // so the panel content tracks the active language without
    // requiring the user to close and re-open.
    document.addEventListener('i18n:changed', function () {
      if (!panelEl.classList.contains('open')) return;
      if (currentIncident) {
        show(currentIncident);
      } else if (currentList) {
        // The list is rebuilt by StrikeMap on i18n:changed; refresh its texts here.
        showList(currentList.incidents, I18n.t('map.global.title'), I18n.t('map.global.intro'));
      }
    });
  }

  function getIncidentId(incident) {
    return incident['@id'] || incident.id || incident.identifier || null;
  }

  function updateUrl(incident) {
    var id = getIncidentId(incident);
    if (!id) return;
    var url = new URL(window.location.href);
    url.searchParams.set('incident', id);
    history.replaceState(null, '', url.toString());
  }

  function clearUrl() {
    var url = new URL(window.location.href);
    if (url.searchParams.has('incident')) {
      url.searchParams.delete('incident');
      history.replaceState(null, '', url.toString());
    }
  }

  function hydrate(incident) {
    // The lite map bundle omits reverseTimeline/sources/metadata. Fetch the
    // full per-incident file on first open so timeline + sources render.
    // No cache-busting param — rely on ETag/max-age revalidation.
    if (!incident || incident.__hydrated || incident['asm:reverseTimeline'] !== undefined) {
      return Promise.resolve(incident);
    }
    var id = getIncidentId(incident);
    var slug = id ? id.split('/').pop() : null;
    if (!slug) { incident.__hydrated = true; return Promise.resolve(incident); }
    return fetch('data/incidents/' + slug + '.json')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (full) {
        if (full) { Object.keys(full).forEach(function (k) { incident[k] = full[k]; }); }
        incident.__hydrated = true;
        return incident;
      })
      .catch(function () { incident.__hydrated = true; return incident; });
  }

  function show(incident) {
    currentIncident = incident;
    currentList = null;
    updateUrl(incident);
    titleEl.textContent = I18n.localized(incident, 'name') || incident.name || '';
    panelEl.classList.add('open');
    panelEl.focus();
    bodyEl.innerHTML = '<p class="detail-description" style="opacity:0.55">…</p>';
    hydrate(incident).then(function (full) {
      if (currentIncident !== incident) return; // a different incident was opened meanwhile
      renderBody(full);
    });
  }

  /**
   * Show a list of incidents (e.g. the cross-border incidents without a map
   * point). Clicking an entry opens its detail view.
   */
  function showList(incidents, title, intro) {
    currentIncident = null;
    currentList = { incidents: incidents };
    clearUrl();
    titleEl.textContent = title || '';
    var sorted = incidents.slice().sort(function (a, b) {
      return String(b.startDate || '').localeCompare(String(a.startDate || ''));
    });
    var html = '';
    if (intro) html += '<p class="detail-description">' + esc(intro) + '</p>';
    if (!sorted.length) {
      html += '<p class="detail-description">' + esc(I18n.t('map.global.empty')) + '</p>';
    } else {
      html += '<ul class="incident-list">';
      sorted.forEach(function (inc, i) {
        var sev = inc['asm:severity'] || 1;
        html += '<li><button type="button" class="incident-list__item" data-list-index="' + i + '">' +
                '<span class="incident-list__dot" style="background:' + StrikeMap.SEVERITY_COLORS[sev] + '" title="' + escAttr(I18n.t('severity.' + sev)) + '"></span>' +
                '<span class="incident-list__date">' + esc(inc.startDate || '') + '</span>' +
                '<span class="incident-list__name">' + esc(I18n.localized(inc, 'name') || inc.name || '') + '</span>' +
                '</button></li>';
      });
      html += '</ul>';
    }
    bodyEl.innerHTML = html;
    bodyEl.querySelectorAll('[data-list-index]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        show(sorted[parseInt(btn.getAttribute('data-list-index'), 10)]);
      });
    });
    panelEl.classList.add('open');
    panelEl.focus();
  }

  function findIncidentBySlug(slug) {
    if (!slug || typeof DataLoader === 'undefined') return null;
    var all = DataLoader.getIncidents() || [];
    for (var i = 0; i < all.length; i++) {
      if ((getIncidentId(all[i]) || '').split('/').pop() === slug) return all[i];
    }
    return null;
  }

  function renderBody(incident) {
    var incidentName = I18n.localized(incident, 'name') || incident.name || '';
    var severity = incident['asm:severity'] || 1;
    var verLevel = incident['asm:verificationLevel'] || 1;
    var color = StrikeMap.SEVERITY_COLORS[severity];

    var html = '';

    // Retraction / merge notice: permalinks of retracted and merged incidents
    // stay valid, so the reason has to be visible right at the top.
    if (incident['asm:retracted']) {
      var mergedTarget = findIncidentBySlug(incident['asm:mergedInto']);
      html += '<div class="detail-retracted" role="note">';
      html += '<div class="detail-retracted__title">' + esc(I18n.t(incident['asm:mergedInto'] ? 'detail.merged.title' : 'detail.retracted.title')) +
              (incident['asm:retractedDate'] ? ' <span class="detail-retracted__date">' + esc(incident['asm:retractedDate']) + '</span>' : '') + '</div>';
      var reason = I18n.localized(incident, 'asm:retractionReason');
      if (reason) html += '<p class="detail-retracted__reason">' + esc(reason) + '</p>';
      if (mergedTarget) {
        html += '<button type="button" class="detail-retracted__link" data-merged-into>' +
                esc(I18n.t('detail.merged.link')) + ' ' + esc(I18n.localized(mergedTarget, 'name') || mergedTarget.name) + ' &rarr;</button>';
      }
      html += '</div>';
    } else if (incident['asm:scope'] === 'context') {
      // Context case: kept for its human-rights relevance, but no AI or
      // algorithmic element is documented (scope rule 2026-10-23).
      html += '<div class="detail-retracted detail-retracted--context" role="note">';
      html += '<div class="detail-retracted__title">' + esc(I18n.t('detail.context.title')) + '</div>';
      var note = I18n.localized(incident, 'asm:scopeNote');
      if (note) html += '<p class="detail-retracted__reason">' + esc(note) + '</p>';
      html += '</div>';
    }

    // Share / permalink button + social share
    if (getIncidentId(incident)) {
      var shareUrl = window.location.origin + window.location.pathname + '?incident=' + encodeURIComponent(getIncidentId(incident));
      var shareText = encodeURIComponent(incidentName + ' — AIStrikeMap');
      html += '<div class="detail-share-row">';
      html += '<button type="button" class="detail-share-btn" data-share>' +
              '<span class="detail-share-btn__icon" aria-hidden="true">&#128279;</span>' +
              '<span data-i18n="detail.share">Link kopieren</span>' +
              '</button>';
      html += '<a href="https://twitter.com/intent/tweet?text=' + shareText + '&url=' + encodeURIComponent(shareUrl) +
              '" target="_blank" rel="noopener" class="detail-share-icon" title="X / Twitter" aria-label="' + I18n.t('detail.share.x') + '">𝕏</a>';
      html += '<a href="https://mastodon.social/share?text=' + shareText + '%20' + encodeURIComponent(shareUrl) +
              '" target="_blank" rel="noopener" class="detail-share-icon" title="Mastodon" aria-label="' + I18n.t('detail.share.mastodon') + '">🐘</a>';
      html += '<a href="https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(shareUrl) +
              '" target="_blank" rel="noopener" class="detail-share-icon" title="LinkedIn" aria-label="' + I18n.t('detail.share.linkedin') + '">in</a>';
      html += '</div>';
    }

    // Meta badges
    html += '<div class="detail-meta">';
    html += '<span class="badge badge--severity-' + severity + '">' + esc(I18n.t('severity.' + severity)) + '</span>';
    html += '<span class="badge badge--verification">' + esc(I18n.t('verification.' + verLevel)) + '</span>';
    if (incident.startDate) {
      html += '<span style="font-size:0.8rem;color:var(--text-secondary)">' + esc(incident.startDate) + '</span>';
    }
    if (incident.location && (incident.location.name || incident.location.name_de || incident.location.name_en)) {
      html += '<span style="font-size:0.8rem;color:var(--text-secondary)">' + esc(I18n.localized(incident.location, 'name') || incident.location.name) + '</span>';
    }
    html += '</div>';

    // Description
    html += '<p class="detail-description">' + esc(I18n.localized(incident, 'description') || incident.description) + '</p>';

    // Actors
    var actors = incident['asm:actors'];
    if (actors && actors.length) {
      html += '<div class="detail-section">';
      html += '<h3 class="detail-section__title">' + esc(I18n.t('detail.actors')) + '</h3>';
      html += '<ul class="actor-list">';
      actors.forEach(function (a) {
        html += '<li class="actor-item">';
        html += '<span>' + esc(I18n.localized(a, 'name') || a.name) + ' <span class="badge badge--actor">' + esc(I18n.t('actor.' + a.type)) + '</span></span>';
        if (a['asm:systems'] && a['asm:systems'].length) {
          html += '<span class="actor-systems">' + a['asm:systems'].map(esc).join(', ') + '</span>';
        }
        html += '</li>';
      });
      html += '</ul></div>';
    }

    // Affected rights
    var lang = I18n.getLang();
    var rights = incident['asm:affectedRights_' + lang]
              || incident['asm:affectedRights_de']
              || incident['asm:affectedRights']
              || [];
    if (rights && rights.length) {
      html += '<div class="detail-section">';
      html += '<h3 class="detail-section__title">' + esc(I18n.t('detail.rights')) + '</h3>';
      html += '<div class="detail-meta">';
      rights.forEach(function (r) {
        html += '<span class="badge badge--actor">' + esc(r) + '</span>';
      });
      html += '</div></div>';
    }

    // Reverse Timeline
    var timeline = incident['asm:reverseTimeline'];
    if (timeline && timeline.length) {
      html += '<div class="detail-section">';
      html += '<h3 class="detail-section__title">' + esc(I18n.t('detail.timeline')) + '</h3>';
      html += '<div class="timeline">';
      timeline.forEach(function (item) {
        html += '<div class="timeline-item">';
        html += '<div class="timeline-item__dot timeline-item__dot--' + item.phase + '"></div>';
        html += '<div class="timeline-item__phase timeline-item__phase--' + item.phase + '">' + esc(I18n.t('phase.' + item.phase)) + '</div>';
        html += '<div class="timeline-item__date">' + esc(item.date) + '</div>';
        html += '<div class="timeline-item__title">' + esc(I18n.localized(item, 'title') || item.title) + '</div>';
        html += '<div class="timeline-item__desc">' + esc(I18n.localized(item, 'description') || item.description) + '</div>';
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

    // Sources
    var sources = incident['asm:sources'];
    if (sources && sources.length) {
      html += '<div class="detail-section">';
      html += '<h3 class="detail-section__title">' + esc(I18n.t('detail.sources')) + '</h3>';
      html += '<ul class="source-list">';
      sources.forEach(function (s) {
        html += '<li class="source-item">';
        var health = s['asm:linkHealth'];
        var healthIcon = renderHealthIcon(health);
        var sTitle = I18n.localized(s, 'title') || s.title;
        if (s.url) {
          var linkClass = health && health !== 'ok' ? ' source-item__link--' + health : '';
          html += '<a href="' + escAttr(s.url) + '" target="_blank" rel="noopener" class="source-item__link' + linkClass + '">' +
                  healthIcon + esc(sTitle) + '</a>';
        } else {
          html += '<span class="source-item__broken" title="' + I18n.t('detail.share.broken') + '">' + esc(sTitle) + '</span>';
        }
        if (s.publisher || s.date) {
          html += '<div class="source-item__publisher">';
          if (s.publisher) html += esc(s.publisher);
          if (s.publisher && s.date) html += ' · ';
          if (s.date) html += esc(s.date);
          html += '</div>';
        }
        html += '</li>';
      });
      html += '</ul></div>';
    }

    // Related radar situations (cross-link)
    if (radarSituations && radarSituations.length) {
      var incidentSlug = (getIncidentId(incident) || '').split('/').pop();
      var relatedRadar = radarSituations.filter(function (r) {
        var ri = r['asm:relatedIncidents'] || [];
        return ri.indexOf(incidentSlug) !== -1;
      });
      if (relatedRadar.length) {
        html += '<div class="detail-section">';
        html += '<h3 class="detail-section__title">' + esc(I18n.t('detail.relatedRadar')) + '</h3>';
        html += '<ul class="related-list">';
        relatedRadar.forEach(function (r) {
          var rSlug = (r['@id'] || '').split('/').pop();
          var status = r['asm:radarStatus'] || 'aktiv';
          html += '<li><a href="radar.html?radar=' + escAttr(rSlug) + '" class="related-link">' +
                  esc(I18n.localized(r, 'name')) + ' <span class="radar-status radar-status--' + status +
                  '" style="font-size:0.55rem;vertical-align:middle"><span class="radar-status__dot"></span>' +
                  esc(I18n.t('radar.status.' + status)) + '</span></a></li>';
        });
        html += '</ul></div>';
      }
    }

    // AI disclosure: every entry is AI-assisted research with source backing and
    // adversarial cross-checks. A human review is only claimed with a date.
    var meta = incident['asm:metadata'] || {};
    html += '<div class="ai-disclosure detail-ai-disclosure">';
    if (meta.humanVerified && meta.reviewedAt) {
      html += esc(I18n.t('detail.reviewed').replace('{date}', meta.reviewedAt));
    } else {
      html += esc(I18n.t('detail.aiDisclosure'));
    }
    html += '</div>';

    bodyEl.innerHTML = html;

    var mergedBtn = bodyEl.querySelector('[data-merged-into]');
    if (mergedBtn) {
      mergedBtn.addEventListener('click', function () {
        var target = findIncidentBySlug(incident['asm:mergedInto']);
        if (target) show(target);
      });
    }

    // Wire share button
    var shareBtn = bodyEl.querySelector('[data-share]');
    if (shareBtn) {
      shareBtn.addEventListener('click', function () {
        var url = window.location.href;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(function () {
            var label = shareBtn.querySelector('[data-i18n="detail.share"]');
            if (label) {
              var orig = label.textContent;
              label.textContent = I18n.t('detail.shareCopied');
              setTimeout(function () { label.textContent = orig; }, 1500);
            }
          }).catch(function () {});
        }
      });
    }
  }

  function hide() {
    panelEl.classList.remove('open');
    currentIncident = null;
    currentList = null;
    clearUrl();
  }

  function openFromUrl(incidents) {
    var params = new URLSearchParams(window.location.search);
    var wanted = params.get('incident');
    if (!wanted || !incidents || !incidents.length) return false;
    var match = incidents.find(function (i) { return getIncidentId(i) === wanted; });
    if (!match) return false;
    show(match);
    var geo = match.location && match.location.geo;
    if (geo && typeof StrikeMap !== 'undefined') {
      var map = StrikeMap.getMap();
      if (map) map.setView([geo.latitude, geo.longitude], 5, { animate: true });
    }
    return true;
  }

  // Render a small health icon for source links. Returns empty string for
  // unknown / ok health so the default link style stays clean.
  function renderHealthIcon(health) {
    if (!health || health === 'ok') return '';
    var map = {
      paywall:  { char: '\uD83D\uDD12', key: 'source.health.paywall' },  // 🔒
      archived: { char: '\uD83D\uDCE6', key: 'source.health.archived' }, // 📦
      dead:     { char: '\u26A0\uFE0F', key: 'source.health.dead' },     // ⚠️
    };
    var entry = map[health];
    if (!entry) return '';
    var label = I18n.t(entry.key) || health;
    return '<span class="source-health source-health--' + health +
           '" title="' + escAttr(label) + '" aria-label="' + escAttr(label) + '">' +
           entry.char + '</span> ';
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

  return { init: init, show: show, showList: showList, hide: hide, openFromUrl: openFromUrl };
})();
