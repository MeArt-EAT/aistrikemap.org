# Übergabe an die nächste Session · 2026-05-26

**Kurz-Übergabe** für den unmittelbaren Sessions-Wechsel. Lange Session-Bilanz: `übergabe-2026-05-26-mega-sprint.md`.

## TL;DR — Wo wir stehen

`main` = **`e93036c`** (lokal + remote synced, working tree clean nach finalem Link-Apply).

Datenbestand jetzt:
- **206 Incidents** (vorher 195, +11 in dieser Session)
- **0 dead Links** von 529 URLs (507 ok / 13 paywall / 9 archived)
- **100% Quellen-Coverage**: alle 206 Incidents haben Top-Level-Primärquellen
- 6 Radar-Situationen + 12 Labor-Cases (alle bilingual)
- 4 statische Pages voll i18n-instrumentiert
- 318 i18n-Keys (DE+EN synchron)

## Quick-Start für die nächste Session

In dieser Reihenfolge lesen (max. 15 Min):
1. **CLAUDE.md** (Repo-Wurzel) — Tech-Stack, Patterns, Konventionen
2. **Diese Übergabe** — Stand und Optionen
3. **`docs/planung/übergabe-2026-05-26-mega-sprint.md`** — Vollständige Session-Bilanz
4. **`docs/planung/audit-2026-05-26-umlaute-und-uebersetzung.md`** — Audit-Befund-Basis
5. **`docs/planung/konzept-item-107-auto-update.md`** — Pending Architektur-Entscheidung

## Offene Spuren (sortiert nach Wirkung)

### A. Original-Daten-Typos cleanup (1 Session)
**Was**: Bei Umlaut-Mass-Fix übrige Tippfehler — `fur` statt `für`/`fuer`, `Universitaten` statt `Universitäten`, `Handbuter` statt `Handbücher`, `konnten` (Konjunktiv-Frage) etc.
**Wie**: Skript wie `scripts/fix-umlauts-incidents.js` erweitern um Typo-Wortliste; Vorsicht wegen False-Positives bei EN-Wörtern (z.B. "fur" = engl. Fell).
**Wirkung**: Daten-Qualität in Display-Strings; vor breiter Bewerbung sinnvoll.

### B. Weitere 2024/2025/2026 Cases (1-2 Sessions)
**Themen-Gaps** aus dem Mega-Sprint-Inventur:
- **EU-AI-Act-Durchsetzungs-Fälle 2025** (erste konkrete Verbote, Geldbußen unter Artikel 5)
- **Climate-AI** (Energie-Verbrauch von Trainings-Runs, CO2-Footprint, Wasserverbrauch — eigene Themen-Kategorie?)
- **Healthcare-Bias außerhalb USA** (UK NHS-Algorithmen, EU eHealth)
- **KI-Krieg-Updates 2025** (Gaza Lavender Folgejahre, Ukraine HIMARS-Targeting, Sudan-Konflikt KI-Drohnen)
- **Afrika erweitern** weiter — Süd-Sudan, Mali, Burkina Faso, Mosambik kaum abgedeckt
- **Süd-Asien** außer IN/BD wenig: Sri Lanka 1, Nepal 0, Pakistan 1
**Methode**: Pro Case ~30-45 Min (Recherche + Schema-Anlage + Quellen). Pro Session ~5-8 Cases realistisch.

### C. Item 107 Architektur-Entscheidung (Projekteigner-Frage)
**Status**: Konzept-Dokument fertig, Decision pending.
**Frage**: Manuell weiter pflegen oder GitHub-Action-Pipeline mit Claude API für Bulk-EN-Übersetzung der 206 Incidents + Crowdsourcing-Pre-Check + Cases-Verifikation?
**Kosten-Schätzung**: ~5-6 EUR/Monat laufend, +2-3 EUR Setup-Sprint.
**Datei**: `docs/planung/konzept-item-107-auto-update.md` — vier konkrete offene Fragen zur Entscheidung am Doku-Ende.

### D. Incidents bilingual (DE+EN) — größter Sprint
**Was**: 206 Incidents auf `name_de`/`name_en`-Schema migrieren (wie Radar in Schritt 4 vom Pre-Release-Sprint gemacht).
**Aufwand**: 
- Manuell: 3-5 Sessions à ~30 Cases (Token-Last ~810k laut früherer Schätzung)
- Mit Item-107-Pipeline: 1 Sprint + Maintainer-Review pro PR
**Wartet auf**: Spur C (Item 107 Entscheidung).

### E. JS-Module-Reste (kleine Polish-Arbeit, 0.5 Session)
**Aus Audit** (`docs/planung/audit-2026-05-26-umlaute-und-uebersetzung.md`):
- `index.html` L139/L150: Severity/Verification-Defaults sollten via `data-i18n` statt hardcoded "Bedenklich"/"Gemeldet"
- `radar.html` L60: `title="Atom Feed"` instrumentieren
- `labor-impact.html` L99+L118: `<h3 class="visually-hidden">` Screenreader-Headers
- `js/detail-panel.js` + `js/radar.js` Social-Share `aria-label="Share on X/Mastodon/LinkedIn"` — aktuell hardcoded EN

### F. Verfeinerung der Methodik (1 Session)
- **AI-Attribution-Skala** (1-5) aus Labor-Impact-Cases auf Incidents übertragen (`asm:aiAttributionStrength`)
- **Verifikations-Level**-Cleanup für die 11 neuen Cases (jetzt sind alle Verif=3 oder 4; manuelle Review-Pass könnte einige auf Verif=4 hochstufen)
- **Schema-Konsolidierung**: 206 Incidents haben uneinheitliche `asm:incidentType[]`-Reihenfolge — Sortierungs-Skript für deterministische Ausgabe

## Konventionen (Reminder)

- Pure HTML/CSS/JS, kein Build, kein npm
- UI und Planungs-Docs deutsch, Code-Kommentare englisch
- IIFE-Pattern für JS-Module
- Cache-Busting via `?v=` auf CSS/JS, `Date.now()` auf Daten
- Deploy = push zu `main` → GitHub Pages automatisch
- **`I18n.localized(obj, field)`** für bilingual-Lookups (Radar/Cases)
- **`data-i18n-html`** für i18n-Strings mit `<strong>`/`<br>`/`<a>`-Markup
- **Cases-Workflow**: JSON in `data/labor-impact-cases/`, dann `node scripts/bundle-labor-cases.js`
- **Incidents-Workflow**: JSON in `data/incidents/`, Index-Eintrag in `data/index.json`, dann `node scripts/bundle-incidents.js` + `node scripts/generate-feed.js`
- **Quellen-Mindeststandard für neue Cases**: ≥2 unabhängige Primärquellen, Mix Gov+NGO+News (Stand dieser Session)
- **`asm:linkHealth`-Pflege**: nach jedem neuen Case `node scripts/check-links-v2.js --apply` laufen lassen

## Repository-State (technisch)

- `main` = `e93036c`, lokal + remote synced
- Working tree clean (alle pending changes committed)
- Branch `claude/*` Worktrees werden vom Harness am Session-Ende aufgeräumt
- Letzter erfolgreicher Link-Check: 529 URLs, 0 dead
- Letzter erfolgreicher Bundle: 206 incidents → 888 KB, 6 radar → 30 KB

## Commits dieser Session (22 total, Chronologie)

```
8357cf3  Item 98 v0.4 Verifikation
f09a032  Audit-Report 2026-05-26
17a5059  Schritt 1: Umlaut-Mass-Fix
46eec92  Schritt 2: Statische Body-Pages instrumentiert
da129d4  Schritt 3: JS-Lang-Ternäre → I18n.t()
3a44960  Schritt 4: Radar bilingual
324b3a7  Schritt 5: Item 107 Decision-Doc
340d813  Schritt 6: Labor-Cases bilingual
f0fd229  Übergabe Schritte 1-6
0277e5e  Link-Check + Repair (10 dead → 0)
af928b1  Quellen-Anreicherung Phase 1 (16 Files Verif=4)
99b4b1e  Phase 1 URL-Fixes
0e21ead  Phase 2 (6 Files Verif=3 Sev=5)
8bae299  Phase 3 Batch A (6 Files Verif=3 Sev=4)
7b465db  Phase 3 Batch B (6 Files)
9820607  Phase 3 Batch C (3 USA-Files)
f455ae0  Phase 4 Batch A (6 Files Verif=3 Sev=3)
f10c8f3  Phase 4 Batch B (6 Files)
ab8a55c  Phase 5 FINAL — 100% Quellen-Coverage
84add08  11 neue 2024-2025 Cases (195 → 206)
e39edac  Mega-Sprint-Übergabe + finale URL-Bereinigung
e93036c  Final 2 URL-Korrekturen → 0 dead Links
```

## Ein-Satz-Empfehlung

**Wenn die nächste Session ein klares Ziel braucht**: Spur C (Item-107-Entscheidung) — sie blockiert die mit Abstand größte verbleibende Arbeit (Spur D, Incidents-EN-Migration). Wenn diese Entscheidung steht, ist der nächste Schritt klar; wenn nicht, läuft die Site stabil und kann mit Cases-Erweiterung (Spur B) als Sonntags-Routine wachsen.

---

*Übergabe erstellt 2026-05-26 zum Sessions-Ende. Sessions-Stand-SHA: `e93036c`. Datenstand: 206 Incidents, 6 Radar, 12 Labor-Cases, 0 dead Links.*
