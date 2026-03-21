/**
 * AIStrikeMap — Map Module
 * Leaflet.js initialization, marker creation and popup logic.
 */
const StrikeMap = (function () {
  let map;
  let markerLayer;
  const SEVERITY_COLORS = {
    1: '#3498db',
    2: '#f39c12',
    3: '#e67e22',
    4: '#e74c3c',
    5: '#8e44ad'
  };

  function init() {
    map = L.map('map', {
      center: [20, 0],
      zoom: 2,
      minZoom: 2,
      maxZoom: 18,
      maxBounds: [[-85, -180], [85, 180]],
      maxBoundsViscosity: 1.0,
      zoomControl: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      noWrap: true
    }).addTo(map);

    markerLayer = L.layerGroup().addTo(map);
    return map;
  }

  function addMarkers(incidents) {
    clearMarkers();
    incidents.forEach(function (incident) {
      var geo = incident.location && incident.location.geo;
      if (!geo) return;

      var severity = incident['asm:severity'] || 1;
      var color = SEVERITY_COLORS[severity] || SEVERITY_COLORS[1];
      var severityLabel = I18n.t('severity.' + severity);
      var date = incident.startDate || '';

      var marker = L.circleMarker([geo.latitude, geo.longitude], {
        radius: 8,
        fillColor: color,
        color: color,
        weight: 2,
        opacity: 0.9,
        fillOpacity: 0.6,
        keyboard: true
      });

      marker.bindPopup(
        '<div class="popup-title">' + escapeHtml(incident.name) + '</div>' +
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
    });
  }

  function clearMarkers() {
    if (markerLayer) markerLayer.clearLayers();
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

  return { init: init, addMarkers: addMarkers, clearMarkers: clearMarkers, getMarkerLayer: getMarkerLayer, getMap: getMap, SEVERITY_COLORS: SEVERITY_COLORS };
})();
