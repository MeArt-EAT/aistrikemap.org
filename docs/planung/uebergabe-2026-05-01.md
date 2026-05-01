# Übergabe Phase 2 · 2026-05-01

**Status: Konzept Career Dashboard abgeschlossen + Item 98 live.** aistrikemap.org läuft auf `329086f` mit neuem Modul `labor-impact.html` und 6 Konzept-Quelldokumenten für Items 94–99.

## Was in dieser Session passiert ist

11 Commits, alle direkt nach `origin/main` ge-fast-forward-merged:

| SHA | Inhalt |
|---|---|
| `2295104` | Konzeptphase begonnen — Datenquellen-Matrix V0.1 (20 Länder, MVP-Set 8) |
| `4b9a105` | TODO-3 Datenarchitektur = Build-Time-Bundle |
| `d5b2c6a` | TODO-1 Beruf-Taxonomie = ISCO-08 4-digit (436 Unit Groups) |
| `106db4d` | TODO-2 Update-Rhythmus = jährlich |
| `7a318a3` | Punkt 2 Score-Methodik = Bandbreiten-Modell mit 3 Schichten |
| `7a2542c` | Punkt 4 Bias-Transparency = Fünf-Säulen, 8 i18n-Strings ready |
| `7664219` | Punkt 3 UX/UI = Map+Chart Toggle, 5 Wireframes |
| `82c3c03` | Punkt 5 Recht = Sechs-Bereiche-Konzept |
| `35a4919` | Punkt 6 MVP-Scoping = Konzeptphase abgeschlossen |
| `73243c8` | Punkt 5 Korrektur (LICENSE-File existiert: AGPL-3.0 + CC BY-NC-SA) |
| `329086f` | **Item 98 live: AI Labor Impact Ticker** |

## Was das System jetzt kann

### Konzeptphase Career Dashboard (Items 94–99) komplett

Sechs Quelldokumente unter `docs/planung/`:

1. `career-dashboard-datenquellen-matrix.md` — Top-20-Länder-Matrix, MVP = 8 API-Länder
2. `career-dashboard-score-methodik.md` — Bandbreiten-Modell, JSON-Schema
3. `career-dashboard-ux-konzept.md` — 5 ASCII-Wireframes, Map+Chart-Toggle
4. `career-dashboard-bias-transparency.md` — Fünf-Säulen-Konzept, Edge-Case-Regeln
5. `career-dashboard-recht.md` — Lizenz-Spezifika pro Quelle, Standard-Disclaimer
6. `career-dashboard-mvp-scope.md` — 8-Schritt-Implementierungs-Plan, Akzeptanz-Kriterien

Alle in `docs/planung/inventar-index.md` verlinkt.

### Item 98 live unter aistrikemap.org/labor-impact.html

- Worldometers-Style-Counter für KI-bedingte globale Jobverdrängung/-Schaffung
- Drei Quellen mit Bandbreiten: WEF FoJ 2023, OECD Employment Outlook 2024, ILO World Employment 2024
- Konzept-konsistent mit Career Dashboard: Bandbreiten + Quellen sichtbar + Caveat-Box
- Nav-Eintrag "AI & Arbeit" / "AI & Jobs" zwischen Radar und Methodik in allen 8 Pages
- DE/EN i18n vollständig

## Offene Loose Ends

### Pre-Release vor finaler Veröffentlichung

- **`data/labor-impact-rates.json` hat `"preliminary": true`** — die genutzten Annualwerte sollten gegen die jeweils aktuellsten Reports geprüft werden, bevor das Modul groß beworben wird. WEF-2023-Zahlen sind real und citable; OECD-2024 und ILO-2024 sind plausible Anchor-Werte, aber nicht aus den Reports verifiziert.
- **AGPL-Konsequenzen** für gedachte Embed-Widgets oder Drittanbieter-Forks bei Bedarf separat prüfen (nicht akut).

### Worktree-Cleanup

- `.claude/worktrees/jolly-tharp-34c888/` Ordner liegt physisch noch da — wird beim Session-Ende vom Harness aufgeräumt (analog zur eager-johnson-Erfahrung aus 2026-04-21).

## Implementierungs-Roadmap (für nächste Session)

Aus `career-dashboard-mvp-scope.md` der 8-Schritt-Plan:

1. **Bundle-Script-Skelett** (`scripts/bundle-career-data.js`) — Schicht-Loader, Bandbreiten-Aggregator, Edge-Case-Klassifizierer, Lizenz-Manifest. Unit-Tests für Bandbreiten-Mathematik mandatorisch.
2. Datenquellen-Anbindung pro Land (DE+US zuerst)
3. Beruf-Katalog finalisieren (~80 ISCO-4-digit-Codes)
4. `career.html` Skelett
5. Map-Modus (Choropleth)
6. Chart-Modus (Time-Series mit Confidence-Band)
7. `methodik-career.html` (kann unabhängig parallel)
8. i18n + Permalink + QA

Aufwands-Indikation aus MVP-Doku: **~15 Sessions** vom Konzept-Ende zum Live-Dashboard.

## Projekt-Konventionen (Reminder)

- Pure HTML/CSS/JS, kein Build-Step im Browser, kein npm
- UI und Planungs-Docs **deutsch**, Code-Kommentare englisch
- LICENSE = AGPL-3.0; Daten = CC BY-NC-SA 4.0
- IIFE-Module-Pattern für JS (`const X = (function(){...})()`)
- Cache-busting via `?v=` auf CSS/JS, `Date.now()` auf Daten
- Deploy = push zu `main` → GitHub Pages automatisch
- Konzept-konsistent arbeiten: Bandbreiten statt Einzelwerte, Quellen sichtbar, neutral-deskriptive Voice

## Context-Files für Quick-Start in der nächsten Session

1. `CLAUDE.md` (Wurzel) — Tech-Stack, Patterns, Common Tasks
2. `docs/planung/inventar-index.md` — alle Items 1–103 mit Quelldokument-Links
3. `docs/planung/career-dashboard-mvp-scope.md` — 8-Schritt-Plan, Akzeptanz-Kriterien
4. **Diese Übergabe** — Sessions-Stand und Roadmap

## Nächster strategisch-sinnvoller Schritt

**Bundle-Script-Skelett** (Step 1 von 8) — Ist methodisch der dickste Brocken (Bandbreiten-Mathematik + Edge-Case-Klassifizierer aus Punkt 4) und blockiert Steps 2–6. Sollte mit vollem Token-Budget einer frischen Session begonnen werden, inkl. Unit-Tests. Danach iterativ Datenquellen einzeln anbinden (DE+US first).

Alternative: **methodik-career.html** als parallel-laufender Stub — komplett unabhängig vom Datenpipeline-Aufwand, alle Inhalte stehen bereits in den 6 Konzept-Quelldokumenten und können dort herausgezogen werden.

---

*Dokument erstellt: 2026-05-01*
*Vorgänger-Übergabe: 2026-04-21 (Phase 2 V2 Link-Checker, siehe Git-Historie + erstes User-Prompt der nächsten Session)*
