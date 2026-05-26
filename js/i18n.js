/**
 * AIStrikeMap — i18n Module
 * Simple JSON-based internationalization. DE active, EN prepared.
 */
const I18n = (function () {
  let strings = {};
  let currentLang = 'de';

  async function load(lang) {
    try {
      const resp = await fetch(`i18n/${lang}.json`);
      if (!resp.ok) throw new Error(`i18n: ${lang}.json not found`);
      strings = await resp.json();
      currentLang = lang;
      document.documentElement.lang = lang;
      try { localStorage.setItem('asm-lang', lang); } catch (e) {}
      applyAll();
      // Notify listeners (e.g. dynamic widgets)
      document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang: lang } }));
    } catch (err) {
      console.error('[i18n]', err);
    }
  }

  function getStoredLang() {
    try {
      var stored = localStorage.getItem('asm-lang');
      if (stored === 'de' || stored === 'en') return stored;
    } catch (e) {}
    var nav = (navigator.language || 'de').toLowerCase();
    return nav.indexOf('en') === 0 ? 'en' : 'de';
  }

  function t(key) {
    return strings[key] || key;
  }

  function applyAll() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    // data-i18n-html for strings that contain HTML markup (e.g. <strong>,
    // <br>, <a>). Use only with trusted strings from our own i18n files —
    // no user input flows here, so XSS is not a concern.
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(key);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', t(key));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      el.title = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', t(key));
    });
  }

  function getLang() {
    return currentLang;
  }

  return { load: load, t: t, applyAll: applyAll, getLang: getLang, getStoredLang: getStoredLang };
})();
