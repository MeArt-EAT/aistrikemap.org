/**
 * AIStrikeMap — Strike Ticker
 * Scrolling ticker showing the most recent incidents,
 * inspired by blitzortung.org's live strike display.
 */
const StrikeTicker = (function () {
  var TICKER_COUNT = 20; // show latest N incidents
  var SCROLL_SPEED = 60; // pixels per second
  var allIncidents = null;

  function init(incidents) {
    allIncidents = incidents;
    build();
    document.addEventListener('i18n:changed', build);
  }

  function build() {
    if (!allIncidents) return;

    // Remove any existing ticker so language switches replace it cleanly.
    var existing = document.querySelector('.strike-ticker');
    if (existing && existing.parentNode) existing.parentNode.removeChild(existing);

    // Sort by date, newest first
    var sorted = allIncidents.slice().sort(function (a, b) {
      var da = a.startDate || '0';
      var db = b.startDate || '0';
      return db.localeCompare(da);
    });

    var latest = sorted.slice(0, TICKER_COUNT);
    if (latest.length === 0) return;

    // Build ticker DOM
    var ticker = document.createElement('div');
    ticker.className = 'strike-ticker';
    ticker.setAttribute('aria-label', I18n.t('ticker.ariaLabel'));

    // Label
    var label = document.createElement('div');
    label.className = 'strike-ticker__label';
    label.textContent = I18n.t('ticker.live');
    ticker.appendChild(label);

    // Track
    var track = document.createElement('div');
    track.className = 'strike-ticker__track';

    var scroll = document.createElement('div');
    scroll.className = 'strike-ticker__scroll';

    // Create items twice for seamless loop
    for (var loop = 0; loop < 2; loop++) {
      latest.forEach(function (incident) {
        var item = createTickerItem(incident);
        scroll.appendChild(item);
      });
    }

    track.appendChild(scroll);
    ticker.appendChild(track);

    // Insert before footer or at bottom of map-wrapper
    var mapWrapper = document.querySelector('.map-wrapper');
    if (mapWrapper) {
      mapWrapper.appendChild(ticker);
    }

    // Calculate animation duration based on content width
    requestAnimationFrame(function () {
      var halfWidth = scroll.scrollWidth / 2;
      var duration = halfWidth / SCROLL_SPEED;
      scroll.style.animationDuration = duration + 's';
    });

    // Add class for footer spacing
    document.body.classList.add('has-ticker');
  }

  function createTickerItem(incident) {
    var severity = incident['asm:severity'] || 1;
    var colors = StrikeMap.SEVERITY_COLORS;
    var color = colors[severity] || colors[1];
    var date = incident.startDate || '';
    var name = I18n.localized(incident, 'name') || incident.name || '';

    var item = document.createElement('span');
    item.className = 'strike-ticker__item';

    // Severity dot
    var dot = document.createElement('span');
    dot.className = 'strike-ticker__dot';
    dot.style.background = color;
    item.appendChild(dot);

    // Date badge
    if (date) {
      var dateEl = document.createElement('span');
      dateEl.className = 'strike-ticker__date';
      dateEl.textContent = date;
      item.appendChild(dateEl);
    }

    // Name
    var nameEl = document.createElement('span');
    nameEl.textContent = truncate(name, 60);
    item.appendChild(nameEl);

    // Click to show detail
    item.addEventListener('click', function () {
      DetailPanel.show(incident);
      // Pan map to incident
      var geo = incident.location && incident.location.geo;
      if (geo) {
        StrikeMap.getMap().setView([geo.latitude, geo.longitude], 6, { animate: true });
      }
    });

    return item;
  }

  function truncate(str, max) {
    if (!str) return '';
    if (str.length <= max) return str;
    return str.substring(0, max - 1) + '\u2026';
  }

  return { init: init };
})();
