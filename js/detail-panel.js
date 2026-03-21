/**
 * AIStrikeMap — Detail Panel
 * Shows incident details with reverse timeline on marker click.
 */
const DetailPanel = (function () {
  let panelEl, titleEl, bodyEl, closeBtn;

  function init() {
    panelEl = document.getElementById('detail-panel');
    titleEl = panelEl.querySelector('.detail-panel__title');
    bodyEl = panelEl.querySelector('.detail-panel__body');
    closeBtn = panelEl.querySelector('.detail-close-btn');

    closeBtn.addEventListener('click', hide);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') hide();
    });
  }

  function show(incident) {
    titleEl.textContent = incident.name || '';

    var severity = incident['asm:severity'] || 1;
    var verLevel = incident['asm:verificationLevel'] || 1;
    var color = StrikeMap.SEVERITY_COLORS[severity];

    var html = '';

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
  }

  function hide() {
    panelEl.classList.remove('open');
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

  return { init: init, show: show, hide: hide };
})();
