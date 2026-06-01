# Incident Candidates — Staging Area

Dieser Ordner ist die **Sammel-Schleuse** für noch nicht verifizierte
KI-Ethik-Fälle. Nichts hier landet automatisch in `data/incidents/`.

## Workflow

```
WebSuche (Agent)
   ↓
data/incident-candidates/{angle}-{timestamp}.json   ← Grobanalyse (hier)
   ↓
manuelle Dedup vs. data/incidents/index.json        ← Feinanalyse
   ↓
manuelle Quellen-Verifizierung pro URL              ← Feinstanalyse
   ↓
Promotion: Kandidaten → data/incidents/{slug}.json  ← Eintragung
   ↓
node scripts/bundle-incidents.js + commit
```

## Promotion-Regel

**500-Pakete:** Erst wenn 500 verifizierte Kandidaten in der Pipeline
sind, läuft ein gemeinsamer "Rutsch" — Multi-File-Commit mit allen
gepromoteten Cases auf einmal.

Bis dahin: Kandidaten sammeln, verifizieren, deduplizieren, aber NICHT
einzeln promoten.

## Status-Werte

In jedem Kandidaten-Eintrag (`status`-Feld):

| Wert | Bedeutung |
|---|---|
| `candidate` | Initialer Sammel-Stand. Quelle existiert, Inhalt grob plausibel. |
| `needs-review` | Manuelle Review angefragt — z.B. Schweregrad unklar. |
| `duplicate` | Bereits in `data/incidents/` oder in anderem Kandidaten-File vorhanden. |
| `rejected` | Quelle nicht erreichbar / Inhalt passt nicht / spekulativ. |
| `verified` | Alle URLs OK, Inhalt geprüft, bereit für Promotion. |

## Dateinamens-Konvention

`{region-or-topic-slug}-{round}-{agent-id}.json`

Beispiele:
- `asia-2024-surveillance-round-1-agent-a3.json`
- `latam-2023-2025-welfare-ai-round-1-agent-c1.json`
- `eu-ai-act-cases-round-1-agent-e2.json`

## Schema

Siehe `_schema.md` für die Kandidaten-Datenstruktur.

## Hinweise für Research-Agenten

- **NIE Fälle erfinden.** Wenn keine Quelle existiert, Eintrag weglassen.
- **NIE URLs fabrizieren.** Nur URLs einfügen, die du tatsächlich gefetcht hast.
- **Explizit Unsicherheit benennen.** Im `researcher_notes`-Feld.
- **2+ Quellen empfohlen,** mind. 1 ist Hard-Requirement.
- **Sprache:** Beschreibungen in DE + EN, Quelle bleibt in Originalsprache.
- **Schwerpunkt:** Menschenrechts-relevant — Überwachung, Diskriminierung,
  Tod/Verletzung durch KI, Arbeitsausbeutung, Zensur, Wahlmanipulation.
- **Ausgeschlossen:** reine Tech-News ohne Menschenrechts-Bezug, KI-Hype-Artikel.
