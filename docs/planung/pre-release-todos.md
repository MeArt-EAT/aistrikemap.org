# Pre-Release-TODOs

Kleine Aufräum-Arbeiten, die **kurz vor einer Veröffentlichung** erledigt werden sollen — zu klein für einen eigenen Planungs-Slot, aber nicht vergessen werden dürfen.

## Offen

### i18n-Vollabdeckung Audit

**Problem:** Beim Sprachwechsel DE↔EN wird aktuell nur das Menü übersetzt. Body-Copy, Captions, Status-Indikatoren und sonstige UI-Texte bleiben hardcoded auf Deutsch. Das widerspricht dem Anspruch einer internationalen Seite.

**Aufgabe:**
- Alle HTML-Pages durchgehen (`index.html`, `radar.html`, `methodik.html`, `transparenz.html`, `impressum.html`, `datenschutz.html`, `labor-impact.html`, `404.html`)
- Jeden user-sichtbaren Text identifizieren, der noch keinen `data-i18n`-Hook hat
- Pro Treffer: i18n-Key in `i18n/de.json` und `i18n/en.json` anlegen, HTML-Element mit `data-i18n="key"` markieren
- Sonderfälle: `aria-label`, `title`-Attribute, dynamisch via JS gesetzte Strings (siehe `js/i18n.js` Methoden für Attribute)
- Akzeptanz-Kriterium: vollständiger Sprachwechsel — beim Klick auf "EN" tauscht sich JEDE sichtbare deutsche Phrase aus

### Umlaute-Audit (Bestand)

**Problem:** Im Verlauf der Session wurden Konvention-Verletzungen erkannt. Es ist möglich, dass an manchen Stellen "ae/oe/ue" statt "ä/ö/ü" verwendet wurde (in JSON-Daten, Konzept-Dokumenten, Commit-Messages, Editorial-Texten).

**Aufgabe:**
- Suchlauf über alle Text-Dateien (`*.md`, `*.html`, `*.json`, `*.js`-Kommentare): Pattern `\b(ae|oe|ue|ss)\b` und Treffer manuell prüfen
- Falsche Transliteration → korrekter Umlaut, wo es deutsche Wörter sind
- Ausnahmen bewusst lassen: URL-Slugs (`incidents/aegypten-...`), englische Begriffe, Eigennamen, Lizenz-Codes
- Bei Datei-Encoding kontrollieren, dass UTF-8 ohne BOM verwendet wird

**Konvention für die Zukunft** ist jetzt in `CLAUDE.md` unter "Conventions" verankert — beide Punkte (i18n-Vollabdeckung + Umlaute) sind Pflicht für neue Inhalte.

---

---

## Erledigt

### 2026-04-21 · Link-Checker Paywall-Refinement (Phase 2 V2)

Nach dem ersten Full-Run am 2026-04-21 waren 12 URLs als `dead` klassifiziert, davon mindestens eine fälschlich (`lemonde.fr` → HTTP 402).

- `scripts/check-links-v2.js` → `classify()`: universelle Regel HTTP 402 ⇒ `paywall` (host-unabhängig).
- `PAYWALL_DOMAINS` ergänzt um `lemonde.fr` und `dawn.com`.
- Re-Run mit `--apply --force` und Bundle-Rebuild.
