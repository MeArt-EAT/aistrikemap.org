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
