/**
 * AIStrikeMap — Mobile Navigation Toggle
 * Shared across all pages.
 */
(function () {
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (!navToggle || !nav) return;

  navToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    var expanded = nav.classList.contains('open');
    navToggle.setAttribute('aria-expanded', expanded);
  });
})();

/* Language switcher */
(function () {
  var buttons = document.querySelectorAll('.lang-btn');
  if (!buttons.length || typeof I18n === 'undefined') return;

  function setActive(lang) {
    buttons.forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      I18n.load(lang).then(function () { setActive(lang); });
    });
  });

  // Sync on i18n events fired elsewhere
  document.addEventListener('i18n:changed', function (e) {
    setActive(e.detail.lang);
  });

  // Initial sync
  setActive(I18n.getLang());
})();
