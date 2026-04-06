/**
 * AIStrikeMap — Filters Module
 * Filter incidents by type, severity, and verification level.
 */
const Filters = (function () {
  let activeTypes = new Set();
  let minSeverity = 1;
  let minVerification = 1;
  let showRetracted = false;
  let allTypes = [
    'surveillance', 'predictive-policing', 'autonomous-weapons',
    'discrimination', 'deepfakes', 'data-misuse', 'military-ai',
    'facial-recognition', 'censorship', 'labor-exploitation', 'political-pressure'
  ];

  function init() {
    var container = document.getElementById('filter-types');
    var severitySlider = document.getElementById('filter-severity');
    var severityValue = document.getElementById('severity-value');
    var verificationSlider = document.getElementById('filter-verification');
    var verificationValue = document.getElementById('verification-value');
    var resetBtn = document.getElementById('filter-reset');
    var retractedToggle = document.getElementById('filter-show-retracted');
    var toggleBtn = document.querySelector('.filter-toggle-btn');
    var panel = document.querySelector('.filter-panel');

    // Build type checkboxes
    allTypes.forEach(function (type) {
      activeTypes.add(type);
      var label = document.createElement('label');
      label.className = 'filter-checkbox';
      var cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = true;
      cb.value = type;
      cb.addEventListener('change', function () {
        if (this.checked) {
          activeTypes.add(type);
        } else {
          activeTypes.delete(type);
        }
        applyFilters();
      });
      var span = document.createElement('span');
      span.setAttribute('data-i18n', 'type.' + type);
      span.textContent = I18n.t('type.' + type);
      label.appendChild(cb);
      label.appendChild(span);
      container.appendChild(label);
    });

    // Severity slider
    severitySlider.addEventListener('input', function () {
      minSeverity = parseInt(this.value);
      severityValue.textContent = I18n.t('severity.' + minSeverity);
      applyFilters();
    });

    // Verification slider
    verificationSlider.addEventListener('input', function () {
      minVerification = parseInt(this.value);
      verificationValue.textContent = I18n.t('verification.' + minVerification);
      applyFilters();
    });

    // Reset
    resetBtn.addEventListener('click', function () {
      allTypes.forEach(function (type) { activeTypes.add(type); });
      container.querySelectorAll('input[type="checkbox"]').forEach(function (cb) { cb.checked = true; });
      severitySlider.value = 1;
      minSeverity = 1;
      severityValue.textContent = I18n.t('severity.1');
      verificationSlider.value = 1;
      minVerification = 1;
      verificationValue.textContent = I18n.t('verification.1');
      if (retractedToggle) {
        retractedToggle.checked = false;
        showRetracted = false;
      }
      applyFilters();
    });

    // Show retracted toggle
    if (retractedToggle) {
      retractedToggle.addEventListener('change', function () {
        showRetracted = this.checked;
        applyFilters();
      });
    }

    // Re-translate slider labels on language change
    document.addEventListener('i18n:changed', function () {
      severityValue.textContent = I18n.t('severity.' + minSeverity);
      verificationValue.textContent = I18n.t('verification.' + minVerification);
    });

    // Toggle collapse
    toggleBtn.addEventListener('click', function () {
      panel.classList.toggle('collapsed');
      this.textContent = panel.classList.contains('collapsed') ? '▶' : '▼';
    });
  }

  function applyFilters() {
    var incidents = DataLoader.getIncidents();
    var filtered = incidents.filter(function (inc) {
      // Retracted incidents are hidden by default
      if (inc['asm:retracted'] && !showRetracted) return false;
      var types = inc['asm:incidentType'] || [];
      var hasType = types.some(function (t) { return activeTypes.has(t); });
      var sev = inc['asm:severity'] || 1;
      var ver = inc['asm:verificationLevel'] || 1;
      return hasType && sev >= minSeverity && ver >= minVerification;
    });
    StrikeMap.addMarkers(filtered);
  }

  function setShowRetracted(value) {
    showRetracted = !!value;
    applyFilters();
  }

  return { init: init, applyFilters: applyFilters, setShowRetracted: setShowRetracted };
})();
