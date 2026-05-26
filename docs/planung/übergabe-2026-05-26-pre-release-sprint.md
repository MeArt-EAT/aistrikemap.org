# Übergabe Pre-Release-Sprint · 2026-05-26

**Stand:** `340d813` — 6 Schritte aus der Audit-Roadmap autonom abgearbeitet.

## TL;DR

8 Commits in einer Session: gesamter Audit-Plan vom 2026-05-26 in einem Zug umgesetzt. Site ist jetzt **vollständig bilingual** für statische Pages, Radar-Daten, Labor-Cases-Daten und alle UI-Strings. Umlaut-Konventions-Verletzungen in 77 von 195 Incident-Files behoben. Inkremente nach Schritt-Nummer dokumentiert.

## Commits

| SHA | Schritt | Inhalt |
|---|---|---|
| `8357cf3` | (Vorlauf) | Item 98 v0.4 Verifikation (WEF/OECD/ILO) |
| `f09a032` | (Vorlauf) | Audit-Report 2026-05-26 |
| `17a5059` | **1** | Umlaut-Mass-Fix data/incidents/ — 425 Treffer in 77 Files |
| `46eec92` | **2** | Statische Body-Pages voll i18n-instrumentiert (4 Pages, +121 Keys) |
| `da129d4` | **3** | JS-Lang-Ternäre durch I18n.t() ersetzt (5 Files, +21 Keys) |
| `3a44960` | **4** | Radar-Daten auf bilinguales Schema migriert (6 Files + Helper) |
| `324b3a7` | **5** | Item 107 Architektur-Entscheidungs-Dokument |
| `340d813` | **6** | Labor-Impact-Cases bilingual ergänzt (12 Files) |

## Was die Website jetzt zusätzlich kann

### Vollständig bilingual (DE ↔ EN ohne Reload)

| Modul | Vorher | Jetzt |
|---|---|---|
| Statische Pages (impressum, methodik, transparenz, datenschutz §1-7) | DE-only | Voll bilingual via `data-i18n` / `data-i18n-html` |
| Radar-Detail-Panels (6 Situationen) | DE-only | Voll bilingual via `_de`/`_en`-Suffix in JSON |
| Labor-Impact-Cases (12 Cases) | Teil-bilingual (Quote/Context) | Voll bilingual (+ industry, + added_by) |
| Labor-Impact-Karte JS-Strings (13) | Lang-Ternäre | `I18n.t()` |
| Labor-Impact-Übersicht JS-Strings (5) | Lang-Ternäre | `I18n.t()` |
| Social-Share aria-labels | Hardcoded EN | `I18n.t()` |
| Ticker LIVE-Label + aria-label | Hardcoded DE | `I18n.t()` |

### Neue Infrastruktur

- **`I18n.localized(obj, field)`** — zentraler Helper für bilingual-Schema-Lookups (`obj.field_de` / `obj.field_en` mit Fallback auf `obj.field`). Backwards-kompatibel mit nicht-migrierten Daten.
- **`data-i18n-html`** — neues HTML-Attribut, das `innerHTML` statt `textContent` setzt. Erlaubt `<strong>`/`<br>`/`<a>`-Markup in i18n-Strings. XSS-sicher weil nur eigene i18n-Strings die Quelle sind.
- **`scripts/fix-umlauts-incidents.js`** — Display-string-aware Mass-Fix mit ~200 Regex-Regeln, idempotent
- **`scripts/migrate-cases-bilingual.js`** — Industry-Vokabular-Mapping, idempotent

### Item 107 Auto-Update-Pipeline — Entscheidung dokumentiert

`docs/planung/konzept-item-107-auto-update.md` — Cost/Privacy/Reuse-Analyse:
- 5 Use-Cases (Bulk-EN-Migration, Cases-Verifikation, Crowdsourcing-Pre-Check, Link-Rot, Radar-Sonntags)
- ~5-6 EUR/Monat laufend, +2-3 EUR einmaliger Sprint
- 4-Phasen-Rollout mit Pause-Punkten
- 4 offene Fragen für den Projekteigner

**Entscheidung steht aus** — Dokument ist Vorschlag, kein Implementierungsauftrag.

## Repository-State

- `main` = `340d813`, lokal + remote synced
- 8 Commits dieser Session
- Working tree clean
- Keine offenen Branches
- i18n-Keys: 175 → 296 → 318 (synchron in beiden Sprachen)

## Smoke-Test-Status

Alle Änderungen via Preview-Server verifiziert:
- `impressum.html`, `methodik.html`, `transparenz.html`, `datenschutz.html`: DE↔EN tauscht Headlines + Body
- `radar.html`: alle 6 Card-Titel + Detail-Panel bilingual
- `labor-impact-map.html`: Counter, Tooltips, Country-Detail, Stand bilingual
- `labor-impact.html`: WEF-Plan-Block, Quellen-Block, Caveat bilingual
- Keine Console-Errors über alle Tests

## Offene Loose Ends (für nächste Session)

### Aus Audit-Roadmap noch offen

- **Incidents bilingual** (195 Files) — größter Aufwand, jetzt durch radar.js + I18n.localized Infrastruktur vorbereitet. Wartet auf Item 107 Decision (manuell vs. Pipeline)
- **`data/index.json`** — `name` ist DE-Title-String pro Incident; sollte `name_de`/`name_en` werden (oder reines Manifest)
- **`labor-impact-aggregate.json` `by_industry`-Keys** — sind DE-Industrie-Strings; sollten Slug-basiert sein (`industry.consulting`) statt Display-String
- **JS-Module-Schwächen-Reste** (niedrige Priorität, im Audit dokumentiert):
  - `index.html:139/150` Severity/Verification-Defaults
  - `radar.html:60` Atom-Feed-Link
  - `labor-impact.html:99/118` Screenreader-Headers

### Original-Daten-Typos (separater Cleanup, kein Transliterations-Fix)

Während des Umlaut-Mass-Fixes aufgefallen aber bewusst nicht behandelt:
- `fur` statt `fuer`/`für` (fehlendes 'e')
- `Universitaten` statt `Universitäten` (fehlendes 'ä')
- `Handbuter` statt `Handbücher` (fehlt 'c'+'h')
- `konnten` statt `könnten` (Konjunktiv-Frage, kontextabhängig)

Diese sind reine Data-Quality-Probleme der Original-Recherchen, kein Konventions-Verstoß.

### Pre-Release-TODOs aus früheren Sessions

- Item 98 v0.4 Quellen-Verifikation: VERIFIKATION ERLEDIGT (vorheriger Commit `8357cf3`)
- Item 108 juristisches Review: offen
- hreflang-Architektur: offen (PL-Frage)

## Projektkonventionen (Reminder)

- Pure HTML/CSS/JS, kein Build, kein npm
- UI und Planungs-Docs deutsch, Code-Kommentare englisch
- IIFE-Module-Pattern für JS
- Cache-busting via `?v=` auf CSS/JS, `Date.now()` auf Daten
- Deploy = push zu `main` → GitHub Pages automatisch
- **Bilingual-Schema**: `_de`/`_en`-Suffix bei Display-Feldern; sprachneutrale Slugs für Identifier
- **`I18n.localized(obj, field)`** für bilingual-Lookups
- **`data-i18n-html`** für i18n-Strings mit `<strong>`/`<br>`/`<a>`-Markup

## Context-Files für Quick-Start (nächste Session)

1. `CLAUDE.md` (Wurzel) — wird bald upgedated mit Bilingual-Schema-Hinweisen
2. `docs/planung/audit-2026-05-26-umlaute-und-uebersetzung.md` — Audit-Stand vor diesem Sprint
3. **Diese Übergabe**
4. `docs/planung/konzept-item-107-auto-update.md` — Pipeline-Entscheidung
5. `docs/planung/pre-release-todos.md` — was noch offen ist

## TL;DR — Ein Satz für Eilige

8 Commits in einer Session: kompletter Pre-Release-Audit-Sprint (Umlaut-Fix in 77 Incident-Files, 4 statische Pages voll i18n, 5 JS-Files refactored, Radar voll bilingual, Labor-Cases voll bilingual, Item 107 Decision-Doc) — Website ist jetzt für statische Pages + Radar + Labor-Daten vollständig bilingual; einzige offene große Baustelle bleibt die EN-Migration der 195 Incidents (wartet auf Item 107 Entscheidung).

---

*Dokument erstellt 2026-05-26 am Sessions-Ende. Vorgänger-Übergabe: `docs/planung/übergabe-2026-05-03.md`.*
