# Audit 2026-05-26 — Umlaute & Übersetzungs-Status

**Stand:** Commit `8357cf3` (Item 98 v0.4 Verifikation gerade gelandet)
**Auftrag:** Gesamte Website auf Umlaut-Konventions-Verletzungen prüfen + Übersicht erstellen, welche Teile noch nicht ins Deutsche bzw. Englische übersetzt sind.

---

## TL;DR

| Audit-Dimension | Status | Größtes Problem |
|---|---|---|
| **Umlaut-Konvention** | ~350+ Treffer in **~75 von 195 Incident-JSON-Files** | Modul-weite systematische Verletzung in `data/incidents/`, alle anderen Module sauber |
| **i18n-Schlüssel-Konsistenz** | 175/175 Keys synchron in beiden Sprachen ✓ | Keine Lücken, keine Broken References |
| **Daten-EN-Übersetzung** | Incidents (195) + Radar (6) komplett DE-only; Cases (12) nur 2 Felder zweisprachig | Größte Migrations-Baustelle: Incidents-Schema |
| **Daten-DE-Übersetzung** | Alle Daten sind primär DE-Original — keine DE-Lücken | n/a |
| **Hardcoded-Strings (HTML)** | ~110 Strings in 5 von 9 HTML-Files | `impressum.html`, `methodik.html`, `transparenz.html`, `datenschutz.html §1-7` komplett ungetaggt |
| **Hardcoded-Strings (JS)** | ~27 Strings in 6 von 10 JS-Files | Labor-Impact-Map: 13 Lang-Ternäre statt `I18n.t()` |

---

## 1. Umlaut-Konventions-Audit

### Status pro Modul

| Modul | Status | Treffer |
|---|---|---|
| **HTML** (`*.html` root, 9 Files) | ✓ sauber | 0 |
| **i18n/de.json** | ✓ sauber | 0 echte (1 Treffer = `radar.dimension.ueberwachung` ist technischer Key, Ausnahme) |
| **JS** (`js/*.js`) | ✓ sauber | 0 echte (1 Treffer = Dimensions-Array in `radar.js:9`, technischer Identifier) |
| **data/radar/** (6 Files) | ✓ sauber | 0 echte (1 Treffer = `"ueberwachung"` als dimension-Identifier, OK) |
| **data/labor-impact-cases/** (12 Files) | ✓ sauber | 0 |
| **data/labor-impact-rates.json** | ✓ sauber | 0 |
| **docs/planung/*.md** | ✓ sauber | 0 echte (2 Treffer auf technische Identifier in Tabellen) |
| **data/incidents/** (195 Files) | ❌ **massiv verletzt** | **~350+ in ~75 Files** |

### Konzentration in `data/incidents/`

Die Konventions-Verletzung ist **systemisch und ausschließlich** in den Phase-1-Incident-Daten. Alle Display-Felder (`name`, `description`, `asm:reverseTimeline[].title/description`, `asm:actors[].name`, `asm:affectedRights[]`) verwenden `ue/oe/ae/ss`-Transliteration statt `ü/ö/ä/ß`.

Besonders auffällig: Manche Files **mischen** korrekte und transliterierte Schreibweise im selben String:
> `"name": "Aethiopien: Massenüberwachung ueber staatliches Telekommonopol"`

→ `Massenüberwachung` korrekt, aber `Aethiopien` und `ueber` falsch.

### Top-belastete Files (Auszug)

| Datei | ≈ Treffer |
|---|---|
| `aethiopien-telecom-ueberwachung.json` | 17 |
| `tuerkei-ki-kurdische-ueberwachung.json` | 16 |
| `china-ki-covid-ueberwachung.json` | 13 |
| `katar-arbeiter-ueberwachung-wm.json` | 12 |
| `china-ki-journalisten-ueberwachung.json` | 11 |
| `usa-ai-waffenerkennung-schulen.json` | 11 |
| `australien-ki-polizei-nsw.json` | 11 |
| `deutschland-gesichtserkennung-bahnhof.json` | 11 |
| `usbekistan-ki-smart-city-ueberwachung.json` | ~11 |
| `usa-racial-bias-healthcare-ki.json` | 10 |
| `kuba-sorm-internet-kontrolle.json` | 10 |
| `usa-github-copilot-urheberrecht.json` | 10 |
| weitere ~63 Files | je 1–9 |

### Typische Korrektur-Wortliste

```
ueber → über          fuer → für            Maerz → März
oeffentlich → öffentlich  zurueck → zurück  naechst → nächst
taetig → tätig        verfuegb → verfügb    moeglich → möglich
aehnlich → ähnlich    waehrend → während    haeuf → häuf
kraefte → kräfte      haeuser → häuser      staedte → städte
gegruendet → gegründet  laeuf → läuf       aethiop → äthiop
aegypt → ägypt        tuerk → türk          buerger → bürger
universitaet → universität  bevoelker → bevölker
voelker → völker      aeuss → äuß          fluehl → fühl
massnahm → maßnahm    strasse → straße      groß → groß
einfuehr → einführ    aenderun → änderun    erklaer → erklär
```

### Ausnahmen (bewusst lassen)

- URL-Slugs in `@id` (`https://aistrikemap.org/incidents/aethiopien-...`)
- Dateinamen (`aethiopien-telecom-ueberwachung.json`)
- Werte in `asm:radarDimensions[]` (`"ueberwachung"`)
- i18n-Keys (`radar.dimension.ueberwachung`)

### Empfehlung

Skript-gestützter Mass-Fix-Pass über `data/incidents/*.json`, **display-string-aware**:
- Nur Werte von `name`, `description`, `title`, `actors[].name`, `affectedRights[]`, `asm:reverseTimeline[].title/description`
- **NICHT** `@id`, URLs, Slugs, sprachneutrale Identifier

Aufwand: ein dedizierter Audit-Pass (Skript + manuelle Review der ~75 betroffenen Files), ~1 Session.

---

## 2. i18n-Schlüssel-Audit (`i18n/de.json` vs `i18n/en.json`)

### Status: ✓ vollständig synchronisiert

| Metrik | Wert |
|---|---|
| Total Keys in `de.json` | 175 |
| Total Keys in `en.json` | 175 |
| Fehlende EN-Übersetzungen (nur DE) | **0** |
| Fehlende DE-Übersetzungen (nur EN) | **0** |
| Leere Strings | 0 |
| Identische DE/EN-Strings (Verdacht "vergessen") | 0 |
| Broken HTML-References (data-i18n verweist auf fehlenden Key) | 0 |

**Bewertung:** i18n-Infrastruktur ist sauber gepflegt. Alle Keys sind doppelt vorhanden, vollständig übersetzt, alle HTML-Referenzen auflösen.

---

## 3. Daten-Übersetzungs-Audit

### Übersicht

| Datentyp | Files | Schema | DE | EN | Status |
|---|---|---|---|---|---|
| **Incidents** | 195 | `name`, `description`, `location.name`, `asm:affectedRights[]`, `asm:actors[].name`, `asm:reverseTimeline[].title/description`, `asm:sources[].title` (single-lang) | ✓ | ❌ | **EN fehlt komplett** |
| **Radar** | 6 | `name`, `description`, `location.name`, `asm:developmentTimeline[].title/description/significance`, `asm:actors[].name` (single-lang) | ✓ | ❌ | **EN fehlt komplett** |
| **Labor-Impact-Cases** | 12 | `ai_quote_de`+`ai_quote_en`, `context_de`+`context_en` (bilingual); `industry`, `headquarters_city`, `sources[].name`, `added_by` (DE-only) | ✓ | teilweise | **2 Felder bilingual, Rest DE-only** |
| **Labor-Impact-Rates** | 1 | `anchor_label_de/_en`, `primary_total_label_de/_en`, `headline_de/_en`, `methodology_de/_en` (alle bilingual) | ✓ | ✓ | **vollständig zweisprachig ✓** |
| **`data/index.json`** | 1 | `name` (DE-Display-Title für Marker-Vorab-Render) | ✓ | ❌ | DE-only Manifest |
| **`all-incidents.json`** | 1 Bundle | aus Source dupliziert | wie Source | wie Source | DE-only |
| **`all-radar.json`** | 1 Bundle | aus Source dupliziert | wie Source | wie Source | DE-only |
| **`labor-impact-aggregate.json`** | 1 | `by_industry`-Keys sind DE-Industrie-Namen; `by_tag`-Keys sind EN-Slugs (sprachneutral) | gemischt | nein | Industrie-Labels DE-only |
| **`labor-impact-by-country/*.json`** | 6 | volle Case-Objekte | wie Cases | wie Cases | wie Cases |

### Detail: Incidents-Schema (größte Baustelle)

**Single-language Felder (alle DE):**
- `name`
- `description`
- `location.name` (z.B. `"Kairo, Ägypten"`)
- `asm:affectedRights[]` (Freitext-Liste, z.B. `"Versammlungsfreiheit"`)
- `asm:actors[].name` (mal Eigenname, mal DE-String)
- `asm:actors[].asm:systems[]` (gemischt)
- `asm:reverseTimeline[].title` + `.description` (4 Einträge pro Incident, alle DE)
- `asm:sources[].title` (Original-Sprache der Quelle, mal DE/mal EN)

**Sprachneutral (kein Übersetzungs-Bedarf):**
- `startDate`, `geo.*`, `addressCountry`
- `asm:severity`, `asm:verificationLevel`
- `asm:incidentType[]` (EN-Slugs)
- `asm:metadata.*`
- `asm:sources[].url/date/type/publisher`

### Detail: Radar-Schema (schneller Win, nur 6 Files)

Analog zu Incidents, aber kleinere Datenmenge:
- `name`, `description`, `location.name`, `asm:developmentTimeline[].title/description` — alle DE-only → brauchen `_de`/`_en`
- `asm:radarStatus`, `asm:radarDimensions[]`, `significance`, `asm:perspective` — bereits Slug-artig, sollten via i18n-File gemappt werden (nicht in Datei dupliziert)
- `asm:actors[].name` analog Incidents

### Detail: Labor-Cases (schon halb fertig)

**Bereits bilingual:**
- `ai_quote_de` / `ai_quote_en`
- `context_de` / `context_en`

**Noch DE-only:**
- `industry` (z.B. `"IT-Beratung"`, `"Fintech"`)
- `headquarters_city` Klammer-Annotationen (z.B. `"Dublin / New York / Chicago (HQ-funktional verteilt)"`)
- `sources[].name` (Original-Sprache der Quelle)
- `added_by` (`"AIStrikeMap (kuratiert)"`)

### Migrations-Pfad-Empfehlung (Reihenfolge)

1. **Radar (6 Files)** — Test-Pilot für bilingual-Schema. Klein, überschaubar.
2. **Labor-Cases (12 Files)** — schon teil-bilingual; `industry`, `added_by`, `headquarters_city`-Annotationen ergänzen.
3. **Aggregate-Schema** — `by_industry`-Keys auf Industrie-Slugs umstellen (statt DE-Strings als Keys).
4. **Incidents (195 Files)** — größter Aufwand, ggf. mit AI-Übersetzungs-Pipeline (Item 107).
5. **`data/index.json`** — `name` → `name_de`/`name_en` oder reines Manifest ohne Display-String.

---

## 4. Hardcoded-Strings-Audit

### HTML-Files

| File | Status | Treffer | Bemerkung |
|---|---|---|---|
| **404.html** | ✓ sauber | 0 | Komplett i18n-instrumentiert |
| **index.html** | ⚠ leicht | 2 | `severity-value`/`verification-value` Defaults |
| **radar.html** | ⚠ leicht | 1 | `title="Atom Feed"` ungetaggt (akzeptabel) |
| **labor-impact.html** | ⚠ medium | 3 | 2× Screenreader-Headers DE-only, 1× JS-Placeholder |
| **labor-impact-map.html** | ⚠ leicht | 1 | JS-Placeholder `"Stand: …"` |
| **datenschutz.html** | ❌ **schwer** | ~40 | §1-7 komplett ungetaggt (§8 Crowdsourcing korrekt instrumentiert) |
| **impressum.html** | ❌ **schwer** | ~15 | Komplette Body-Seite ungetaggt |
| **methodik.html** | ❌ **schwer** | ~30 | Komplette Body-Seite ungetaggt (4-Stufen-Verifizierung, Taxonomie, Schweregrad-Tabelle, Quellenstandards) |
| **transparenz.html** | ❌ **schwer** | ~20 | Komplette Body-Seite ungetaggt |

**Praktischer Effekt:** Im EN-Mode bleiben **die vier statischen Hauptseiten** (Impressum, Methodik, Transparenz, Datenschutz §1-7) **komplett deutsch**. Das ist die klassische CLAUDE.md-Konventions-Verletzung.

### JS-Files

| File | Status | Treffer | Bemerkung |
|---|---|---|---|
| **js/i18n.js** | ✓ sauber | 0 | Quelle der i18n-Infrastruktur |
| **js/nav.js** | ✓ sauber | 0 | |
| **js/data-loader.js** | ✓ sauber | 0 | |
| **js/filters.js** | ✓ sauber | 0 | `▶`/`▼` sind universelle Glyphs |
| **js/strike-ticker.js** | ⚠ leicht | 2 | `aria-label="Neueste Vorfälle"` (DE-hardcoded), `'LIVE'` (universell) |
| **js/map.js** | ⚠ leicht | 2 | Fallback-Strings `'Zurückgezogen'`/`'Nicht verifiziert'` |
| **js/detail-panel.js** | ⚠ medium | 4 | Social-Share `aria-label="Share on X/Mastodon/LinkedIn"` (EN-hardcoded in DE-UI), `title="Link nicht mehr verfügbar"` (DE-hardcoded) |
| **js/radar.js** | ⚠ medium | 4 | Analog detail-panel.js |
| **js/labor-impact.js** | ⚠ medium | 5 | DE/EN-Ternäre statt `I18n.t()` |
| **js/labor-impact-map.js** | ❌ **schwer** | 13 | Komplette Render-Pipeline mit Lang-Ternären — Sprachwechsel zur Laufzeit (`i18n:changed`) nicht erkannt |

### Prioritätsliste der Fixes

#### Priorität 1 (sichtbarer Bug)
1. **`impressum.html`, `methodik.html`, `transparenz.html`, `datenschutz.html` §1-7** — komplette Body-Content-Instrumentierung. Erfordert ~80–100 neue i18n-Keys + Translations. Aufwand: 2–3 Sessions.
2. **`js/labor-impact-map.js`** — 13 Lang-Ternäre auf `I18n.t()` umstellen. Sprachwechsel zur Laufzeit funktioniert sonst nicht.

#### Priorität 2 (Konsistenz / Screenreader)
3. **`js/labor-impact.js`** — 5 Lang-Ternäre auf `I18n.t()` umstellen.
4. **`js/detail-panel.js:173` + `js/radar.js:312`** — `title="Link nicht mehr verfügbar"` auf i18n-Key umstellen.
5. **`js/strike-ticker.js:24`** — `aria-label="Neueste Vorfälle"` auf i18n-Key umstellen.
6. **`labor-impact.html` Zeilen 99 + 118** — `<h3 class="visually-hidden">` Screenreader-Headers instrumentieren.

#### Priorität 3 (Polish)
7. **`index.html` L139 + L150** — `severity-value`/`verification-value` Defaults via `data-i18n` statt hardcoded `"Bedenklich"`/`"Gemeldet"`.
8. **`js/detail-panel.js` + `js/radar.js` Social-Share** — `aria-label="Share on X/Mastodon/LinkedIn"` auf i18n-Keys umstellen (oder akzeptieren als universelle EN-Marken-Bezeichnung).
9. **`radar.html:60`** — `title="Atom Feed"` instrumentieren (oder als universell akzeptieren).
10. **Lang-Switcher** `aria-label="Sprache / Language"` etc. via `data-i18n-aria` (bewusst bilingual, niedrige Priorität).

---

## 5. Aktions-Empfehlung (Reihenfolge für Pre-Release-Sprint)

Sortiert nach Aufwand × Sichtbarkeit:

| # | Aufgabe | Aufwand | Sichtbarkeits-Impact |
|---|---|---|---|
| 1 | **Umlaut-Mass-Fix `data/incidents/`** (Skript + Review) | ~1 Session | Hoch (DE-User: 75 Files lesbar falsch) |
| 2 | **Statische Body-Pages instrumentieren** (Impressum/Methodik/Transparenz/Datenschutz §1-7) | 2–3 Sessions | Hoch (EN-User: 4 Hauptseiten komplett deutsch) |
| 3 | **JS-Module Lang-Ternäre → `I18n.t()`** (labor-impact-map.js + labor-impact.js + Reste) | 1 Session | Medium (Sprachwechsel zur Laufzeit funktioniert) |
| 4 | **Radar bilingual** (6 Files Schema-Migration als Test-Pilot) | 1–2 Sessions | Medium (Test für Incidents-Migration) |
| 5 | **Architektur-Entscheidung Item 107** (Auto-Übersetzungs-Pipeline ja/nein) | 1 Session | Strategisch (entscheidet Aufwand für Incidents) |
| 6 | **Labor-Cases-Felder ergänzen** (`industry`, `added_by`, `headquarters_city`) | 1 Session | Niedrig (kleine Daten-Menge) |
| 7 | **Incidents bilingual** (195 Files, Schema + Übersetzung) | 3–5 Sessions manuell ODER Pipeline | Hoch (Hauptdaten der Site) |
| 8 | **JS-Polish** (Social-Share, Defaults, Screenreader-Headers) | 0.5 Session | Niedrig (Edge-Cases) |

---

*Audit-Dokument erstellt 2026-05-26. Grundlage: 3 spezialisierte Sub-Agents (Umlaut-Audit, i18n-Keys-Compare, Daten-Inventar, Hardcoded-Strings).*
