/**
 * AIStrikeMap — Map Module
 * Leaflet.js initialization, marker creation, popup logic,
 * strike-pulse animation and staggered entry effect.
 */
const StrikeMap = (function () {
  let map;
  let markerLayer;
  let pulseLayer;
  let pulseOverlays = [];
  const SEVERITY_COLORS = {
    1: '#3498db',
    2: '#f39c12',
    3: '#e67e22',
    4: '#e74c3c',
    5: '#ba68c8'
  };

  // How many days an incident counts as "recent"
  var RECENT_DAYS = 180; // 6 months window

  function init() {
    map = L.map('map', {
      center: [25, 0],
      zoom: 2,
      minZoom: 2,
      maxZoom: 18,
      maxBounds: [[-55, -180], [85, 180]],
      maxBoundsViscosity: 1.0,
      zoomControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      noWrap: true,
      maxZoom: 19
    }).addTo(map);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    markerLayer = L.markerClusterGroup({
      maxClusterRadius: 35,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
      disableClusteringAtZoom: 8,
      iconCreateFunction: function (cluster) {
        var count = cluster.getChildCount();
        var size = count < 10 ? 'small' : count < 30 ? 'medium' : 'large';
        return L.divIcon({
          html: '<div><span>' + count + '</span></div>',
          className: 'marker-cluster marker-cluster--' + size,
          iconSize: L.point(40, 40)
        });
      }
    }).addTo(map);
    pulseLayer = L.layerGroup().addTo(map);

    // Hide pulse rings when markers are clustered, show when unclustered
    map.on('zoomend', function () {
      var zoom = map.getZoom();
      if (zoom >= 8) {
        if (!map.hasLayer(pulseLayer)) map.addLayer(pulseLayer);
      } else {
        if (map.hasLayer(pulseLayer)) map.removeLayer(pulseLayer);
      }
    });
    // Initial state: hidden (start zoom is 2)
    map.removeLayer(pulseLayer);

    return map;
  }

  /**
   * Compute how "fresh" an incident is (0 = old, 1 = brand new).
   */
  function getFreshness(incident) {
    var dateStr = incident.startDate;
    if (!dateStr) return 0;
    var d = new Date(dateStr);
    if (isNaN(d.getTime())) return 0;
    var ageMs = Date.now() - d.getTime();
    var ageDays = ageMs / (1000 * 60 * 60 * 24);
    if (ageDays < 0) ageDays = 0;
    if (ageDays > RECENT_DAYS) return 0;
    return 1 - (ageDays / RECENT_DAYS);
  }

  function addMarkers(incidents, skipAnimation) {
    clearMarkers();

    // Sort: newest first for staggered animation
    var sorted = incidents.slice().sort(function (a, b) {
      var da = a.startDate || '0';
      var db = b.startDate || '0';
      return db.localeCompare(da);
    });

    sorted.forEach(function (incident, index) {
      var geo = incident.location && incident.location.geo;
      if (!geo) return;

      var severity = incident['asm:severity'] || 1;
      var color = SEVERITY_COLORS[severity] || SEVERITY_COLORS[1];
      var severityLabel = I18n.t('severity.' + severity);
      var date = incident.startDate || '';
      var freshness = getFreshness(incident);
      var verification = incident['asm:verificationLevel'] || 1;
      var isUnverified = verification <= 1;
      var isRetracted = !!incident['asm:retracted'];

      // Dynamic radius: recent = bigger (8-14), old = smaller (6-8)
      var radius = 6 + freshness * 8;
      // Dynamic opacity: recent = brighter
      var fillOpacity = 0.4 + freshness * 0.5;

      // Unverified reports get a dashed outline + reduced fill
      // Retracted reports get a grey outline + strikethrough title
      var classNames = [];
      if (!skipAnimation && index < 30 && !isRetracted) classNames.push('strike-enter');
      if (isUnverified && !isRetracted) classNames.push('strike-unverified');
      if (isRetracted) classNames.push('strike-retracted');

      var marker = L.circleMarker([geo.latitude, geo.longitude], {
        radius: isRetracted ? 6 : radius,
        fillColor: isRetracted ? '#666' : color,
        color: isRetracted ? '#888' : color,
        weight: isRetracted ? 1 : (freshness > 0.3 ? 2.5 : 1.5),
        opacity: isRetracted ? 0.6 : (0.6 + freshness * 0.4),
        fillOpacity: isRetracted ? 0.2 : (isUnverified ? fillOpacity * 0.4 : fillOpacity),
        dashArray: isUnverified || isRetracted ? '4,3' : null,
        keyboard: true,
        className: classNames.join(' ')
      });

      var statusBadge = '';
      if (isRetracted) {
        statusBadge = '<span class="popup-retracted" title="' + escapeHtml(I18n.t('verification.retracted') || 'Zurückgezogen') + '">×</span>';
      } else if (isUnverified) {
        statusBadge = '<span class="popup-unverified" title="' + escapeHtml(I18n.t('verification.unverified') || 'Nicht verifiziert') + '">?</span>';
      }

      var titleClass = isRetracted ? 'popup-title popup-title--retracted' : 'popup-title';

      marker.bindPopup(
        '<div class="' + titleClass + '">' + statusBadge + escapeHtml(incident.name) + '</div>' +
        '<div class="popup-meta">' +
          '<span class="popup-severity" style="background:' + color + '">' + escapeHtml(severityLabel) + '</span>' +
          '<span>' + escapeHtml(date) + '</span>' +
        '</div>',
        { closeButton: true, maxWidth: 250 }
      );

      marker.on('click', function () {
        DetailPanel.show(incident);
      });

      marker.incidentData = incident;
      marker.addTo(markerLayer);

      // No pulse rings for retracted incidents
      if (isRetracted) return;

      // Add pulse rings — tiered by freshness/severity
      var pulseClass = null;
      if (freshness > 0.6) {
        pulseClass = 'strike-pulse--hot';
      } else if (freshness > 0.25) {
        pulseClass = 'strike-pulse--warm';
      } else if (severity >= 4) {
        // High-severity older incidents still get a subtle cold pulse
        pulseClass = 'strike-pulse--cold';
      } else if (index < 10) {
        // Top newest always pulse so the map feels alive
        pulseClass = 'strike-pulse--cold';
      }
      if (pulseClass) {
        addPulseRing(geo.latitude, geo.longitude, color, pulseClass);
      }
    });
  }

  /**
   * Add animated pulse ring overlay for a coordinate.
   */
  function addPulseRing(lat, lng, color, extraClass) {
    var pulseIcon = L.divIcon({
      className: 'strike-pulse ' + (extraClass || ''),
      html: '<div class="strike-pulse__ring" style="border-color:' + color + '"></div>' +
            '<div class="strike-pulse__ring" style="border-color:' + color + '"></div>' +
            '<div class="strike-pulse__ring" style="border-color:' + color + '"></div>',
      iconSize: [0, 0],
      iconAnchor: [0, 0]
    });
    var overlay = L.marker([lat, lng], { icon: pulseIcon, interactive: false });
    overlay.addTo(pulseLayer);
    pulseOverlays.push(overlay);
  }

  function clearMarkers() {
    if (markerLayer) markerLayer.clearLayers();
    if (pulseLayer) pulseLayer.clearLayers();
    pulseOverlays = [];
  }

  function getMarkerLayer() {
    return markerLayer;
  }

  function getMap() {
    return map;
  }

  function escapeHtml(str) {
    if (!str) return '';
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  return {
    init: init,
    addMarkers: addMarkers,
    clearMarkers: clearMarkers,
    getMarkerLayer: getMarkerLayer,
    getMap: getMap,
    SEVERITY_COLORS: SEVERITY_COLORS
  };
})();
