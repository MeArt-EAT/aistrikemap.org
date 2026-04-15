/**
 * AIStrikeMap — Detail Panel
 * Shows incident details with reverse timeline on marker click.
 */
const DetailPanel = (function () {
  let panelEl, titleEl, bodyEl, closeBtn;
  var radarSituations = null;

  function loadRadarData() {
    if (radarSituations !== null) return;
    fetch('data/all-radar.json?v=' + Date.now())
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

  function show(incident) {
    updateUrl(incident);
    titleEl.textContent = incident.name || '';

    var severity = incident['asm:severity'] || 1;
    var verLevel = incident['asm:verificationLevel'] || 1;
    var color = StrikeMap.SEVERITY_COLORS[severity];

    var html = '';

    // Share / permalink button + social share
    if (getIncidentId(incident)) {
      var shareUrl = window.location.origin + window.location.pathname + '?incident=' + encodeURIComponent(getIncidentId(incident));
      var shareText = encodeURIComponent(incident.name + ' — AIStrikeMap');
      html += '<div class="detail-share-row">';
      html += '<button type="button" class="detail-share-btn" data-share>' +
              '<span class="detail-share-btn__icon" aria-hidden="true">&#128279;</span>' +
              '<span data-i18n="detail.share">Link kopieren</span>' +
              '</button>';
      html += '<a href="https://twitter.com/intent/tweet?text=' + shareText + '&url=' + encodeURIComponent(shareUrl) +
              '" target="_blank" rel="noopener" class="detail-share-icon" title="X / Twitter" aria-label="Share on X">𝕏</a>';
      html += '<a href="https://mastodon.social/share?text=' + shareText + '%20' + encodeURIComponent(shareUrl) +
              '" target="_blank" rel="noopener" class="detail-share-icon" title="Mastodon" aria-label="Share on Mastodon">🐘</a>';
      html += '<a href="https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(shareUrl) +
              '" target="_blank" rel="noopener" class="detail-share-icon" title="LinkedIn" aria-label="Share on LinkedIn">in</a>';
      html += '</div>';
    }

    // Meta badges
    html += '<div class="detail-meta">';
    html += '<span class="badge badge--severity-' + severity + '">' + esc(I18n.t('severity.' + severity)) + '</span>';
    html += '<span class="badge badge--verification">' + esc(I18n.t('verification.' + verLevel)) + '</span>';
    if (incident.startDate) {
      html += '<span style="font-size:0.8rem;color:var(--text-secondary)">' + esc(incident.startDate) + '</span>';
    }
    if (incident.location && incident.location.name) {
      html += '<span style="font-size:0.8rem;color:var(--text-secondary)">' + esc(incident.location.name) + '</span>';
    }
    html += '</div>';

    // Description
    html += '<p class="detail-description">' + esc(incident.description) + '</p>';

    // Actors
    var actors = incident['asm:actors'];
    if (actors && actors.length) {
      html += '<div class="detail-section">';
      html += '<h3 class="detail-section__title">' + esc(I18n.t('detail.actors')) + '</h3>';
      html += '<ul class="actor-list">';
      actors.forEach(function (a) {
        html += '<li class="actor-item">';
        html += '<span>' + esc(a.name) + ' <span class="badge badge--actor">' + esc(I18n.t('actor.' + a.type)) + '</span></span>';
        if (a['asm:systems'] && a['asm:systems'].length) {
          html += '<span class="actor-systems">' + a['asm:systems'].map(esc).join(', ') + '</span>';
        }
        html += '</li>';
      });
      html += '</ul></div>';
    }

    // Affected rights
    var rights = incident['asm:affectedRights'];
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
        html += '<div class="timeline-item__title">' + esc(item.title) + '</div>';
        html += '<div class="timeline-item__desc">' + esc(item.description) + '</div>';
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
        html += '<a href="' + escAttr(s.url) + '" target="_blank" rel="noopener">' + esc(s.title) + '</a>';
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
                  esc(r.name) + ' <span class="radar-status radar-status--' + status +
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
    panelEl.classList.add('open');
    panelEl.focus();

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
              label.textContent = I18n.t('detail.shareCopied') || 'Kopiert!';
              setTimeout(function () { label.textContent = orig; }, 1500);
            }
          }).catch(function () {});
        }
      });
    }
  }

  function hide() {
    panelEl.classList.remove('open');
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
