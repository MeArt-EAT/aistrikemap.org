# Pre-Release-TODOs

Kleine Aufräum-Arbeiten, die **kurz vor einer Veröffentlichung** erledigt werden sollen — zu klein für einen eigenen Planungs-Slot, aber nicht vergessen werden dürfen.

## Offen

### i18n-Vollabdeckung Audit

**Problem:** Beim Sprachwechsel DE↔EN wird aktuell nur ein Teil der UI übersetzt. Body-Copy ist in den meisten Pages bereits via `data-i18n`-Attribute instrumentiert, aber **ARIA-Labels**, **title-Attribute** und einige **dynamisch via JS gesetzte Strings** sind hardcoded deutsch. Für Screenreader-Nutzer wird der Sprachwechsel deshalb unvollständig wirksam.

**Infrastruktur ist da:** `js/i18n.js` unterstützt bereits `data-i18n`, `data-i18n-aria`, `data-i18n-title`, `data-i18n-placeholder` (Zeilen 38–55). Es muss nur konsequent angewendet werden.

#### Diagnose `index.html` (konkret, 2026-05-01)

11 hardcoded ARIA-/Title-Strings identifiziert:

| Zeile | Element | Hardcoded String | Vorschlag i18n-Key |
|---|---|---|---|
| 67 | `<button class="nav-toggle">` | aria-label="Navigation öffnen" | `a11y.navOpen` |
| 94 | `<div class="map-legend">` | aria-label="Kartenlegende" | `a11y.legend` |
| 95 | `<button class="map-legend__toggle">` | title="Legende" | `a11y.legend` (reuse) |
| 115 | `<aside class="filter-panel">` | aria-label="Filter" | `filter.title` (reuse, exists) |
| 118 | `<button class="filter-toggle-btn">` | aria-label="Filter ein-/ausklappen" | `a11y.filterToggle` |
| 124 | `<input id="filter-search">` | aria-label="Vorfälle durchsuchen" | `a11y.searchIncidents` |
| 136 | `<input id="filter-severity">` | aria-label="Mindest-Schweregrad" | `a11y.minSeverity` |
| 147 | `<input id="filter-verification">` | aria-label="Mindest-Verifizierungsstufe" | `a11y.minVerification` |
| 181 | `<section id="detail-panel">` | aria-label="Vorfall-Details" | `a11y.detailPanel` |
| 184 | `<button class="detail-close-btn">` | aria-label="Schließen" | `detail.close` (reuse, exists) |

**Neue i18n-Keys nötig (× 2 Sprachen):** `a11y.navOpen`, `a11y.legend`, `a11y.filterToggle`, `a11y.searchIncidents`, `a11y.minSeverity`, `a11y.minVerification`, `a11y.detailPanel` — 7 Keys × 2 = 14 JSON-Einträge.

**Auch in `index.html` zu fixen:** Dynamischer `incident-counter` (Zeile 230–235) hat manuelle DE/EN-Verzweigung mit Template-Strings. Idiomatisch wäre `I18n.t('counter.format', {count, countries})` mit Platzhalter-Interpolation — erfordert kleine Erweiterung von `js/i18n.js` für Template-Substitution, oder pragmatisch mit zwei Keys `counter.format.de` / `counter.format.en` und `String.replace`. Alternativ Status-quo lassen, weil funktional korrekt; nur als "could-be-cleaner" notiert.

#### Architektur-Frage: Meta-Tags und og:locale

`index.html` hat statische Meta-Tags auf Deutsch (`<title>`, `<meta name="description">`, `og:*`, `twitter:*`, `og:locale: de_DE`). Diese werden von Suchmaschinen-Crawlern und Social-Sharing-Previews gelesen — kein clientseitiger Sprachwechsel möglich. Optionen:

- **(a)** Status quo lassen: Page ist `lang="de"`, Meta-Tags bleiben deutsch. Internationale Sichtbarkeit nur via Body-Content-Übersetzung im Browser.
- **(b)** Eigene `index.en.html`-Page mit englischen Meta-Tags + `<link rel="alternate" hreflang="en" href="...">` Cross-References. Mehr Wartung, bessere SEO.
- **(c)** Single-Page mit JS-gesteuerter Meta-Tag-Mutation post-Load (für Social-Sharing aber wirkungslos, weil Crawler kein JS rendern).

**PL-Empfehlung (b)** für ernste Internationalisierung, aber separate Architektur-Entscheidung für eigenen Implementierungs-Slot. Nicht Teil dieses i18n-Audits.

#### Verbleibende 7 Pages (noch zu auditieren)

`radar.html`, `methodik.html`, `transparenz.html`, `impressum.html`, `datenschutz.html`, `labor-impact.html`, `404.html` — vermutlich ähnliches Muster (Body i18n-instrumentiert, ARIA hardcoded). Erwartete Größenordnung: ~50–80 weitere ARIA/title-Strings + 30–50 neue i18n-Keys.

**Akzeptanz-Kriterium:** Beim Klick auf "EN" tauscht sich JEDE user-wahrnehmbare Phrase aus — inkl. Screenreader-Output (ARIA), Hover-Tooltips (title), Platzhaltertexte, dynamisch JS-gesetzte Status-Werte.

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
