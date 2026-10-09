# Nacharbeit nach dem Merge mit main (Stand 2026-10-09)

Nach dem Merge von `main` (Schema v1.1) in PR #93 sind zwei Aufgaben offen. Die Bearbeiter
haben sie erledigt, die unabhängige Prüfung wurde aber wegen des Wochenlimits abgebrochen.
**Keine Änderung aus diesem Ordner ist in den Daten.**

| Aufgabe | Arbeitslisten | Umfang |
|---|---|---|
| Phasen-Fehler (Schema v1.1): meist fehlende doctrine-Phase, 8 x Verschränkung | `arbeitsliste-pm-01..04.json` | 24 Dateien |
| Einträge aus der main-Fassung ohne Quelle belegen, 10 beim Merge automatisch übertragene Quellen prüfen, 1 toter Link (SumOfUs) | `arbeitsliste-pm-05..08.json` | 35 Einträge in 34 Dateien (PM-07/08 nur teilweise bearbeitet) |

## Fortsetzen

1. `git apply docs/planung/nacharbeit-merge-2026-10-09/ungepruefte-aenderungen.patch`
   (53 Dateien; Bearbeiter-Berichte in `bearbeiter-berichte.md`).
2. Je Gruppe die Prüfer-Stufe aus `workflow.js` laufen lassen (Pfad `M` auf diesen Ordner
   umstellen; Regeln in `briefing.md`). Der Prüfer kontrolliert jede Änderung per
   `git diff` gegen Suchergebnisse und korrigiert oder setzt zurück.
3. Erst dann committen. Gate: `node scripts/validate-timelines.js --all` = 0 ERRORs
   (vorher 24 Dateien mit Phasen-ERROR), Bundles neu bauen.

Höchstens etwa 4 Gruppen pro Turn starten (WebSearch-Kontingent ca. 200 pro Turn).
