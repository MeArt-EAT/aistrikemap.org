/**
 * AIStrikeMap — Detail Panel
 * Shows incident details with reverse timeline on marker click.
 */
const DetailPanel = (function () {
  let panelEl, titleEl, bodyEl, closeBtn;
  var radarSituations = null;
  var currentIncident = null;

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
      if (currentIncident && panelEl.classList.contains('open')) {
        show(currentIncident);
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

  function renderBody(incident) {
    var incidentName = I18n.localized(incident, 'name') || incident.name || '';
    var severity = incident['asm:severity'] || 1;
    var verLevel = incident['asm:verificationLevel'] || 1;
    var color = StrikeMap.SEVERITY_COLORS[severity];

    var html = '';

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

    // AI disclosure
    var meta = incident['asm:metadata'];
    if (meta) {
      html += '<div class="ai-disclosure" style="margin-top:1rem;padding-top:0.75rem;border-top:1px solid rgba(255,255,255,0.08)">';
      if (meta.humanVerified) {
        html += esc(I18n.t('footer.ai'));
      }
      html += '</div>';
    }

    bodyEl.innerHTML = html;

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

  return { init: init, show: show, hide: hide, openFromUrl: openFromUrl };
})();
