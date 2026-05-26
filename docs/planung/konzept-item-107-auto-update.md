# Item 107 — Auto-Update-Pipeline · Architektur-Entscheidung

**Stand:** 2026-05-26
**Auftrag:** Cost/Privacy/Reuse-Analyse für eine GitHub-Action-basierte Pipeline mit Claude API vs. manuelle Sessions-getriebene Pflege.
**Empfehlung:** **Pipeline-Setup mit Maintainer-Review-Gate** (Option B), wenn ≥3 von 5 Use-Cases tatsächlich aktiviert werden. Sonst: bei manueller Pflege bleiben.

---

## TL;DR

| Aspekt | Manuell (Status quo) | Pipeline (Item 107) |
|---|---|---|
| Setup-Kosten | 0 | 1-2 Sessions (~4-8 Std.) |
| Laufende Kosten pro Monat | 0 EUR + Sessions-Zeit | 3-15 EUR API + 30-60 Min Review-Zeit |
| Reuse-Faktor | 1× pro Use-Case | 5× (alle 5 Use-Cases nutzen dieselbe Pipeline) |
| Maintainer-Kontrolle | 100% (jede Änderung manuell) | 100% bei Gate (PR-Review vor Merge) |
| Datenschutz | Kein API-Datenfluss | Quellen-URLs + Texte gehen an Claude API |
| Wartung | 0 (kein Code) | Pipeline + Workflow-Files |
| Skalierungspfad | Linear mit Aufwand | Logarithmisch (Pipeline trägt) |

**Kernfrage für die Entscheidung:** Wie viele Use-Cases werden tatsächlich Pipeline-relevant?

---

## 1. Hintergrund

Stand der Datenpflege Mai 2026:
- **195 Incidents** (Phase 1) — alle DE-only, EN fehlt komplett
- **6 Radar-Situationen** (Item 100-103) — jetzt bilingual (Schritt 4 vom Pre-Release-Sprint)
- **12 Labor-Impact-Cases** (Item 105) — teilweise bilingual (ai_quote, context); industry, added_by DE-only
- **Cases-Erweiterung** als laufende Sonntags-Routine, ~1-2 Cases pro Session
- **Crowdsourcing-Eingang** (Item 108) live — manueller Maintainer-Review pro Issue

Manuelle Übersetzung der 195 Incidents = ~810-870k Tokens, 3-5 Sessions. Plus Pflege-Aufwand für Updates und neue Cases.

---

## 2. Use-Cases für eine Auto-Update-Pipeline

Eine GitHub-Action-Pipeline mit Claude API könnte folgende Aufgaben übernehmen:

### Use-Case 1: Bulk-EN-Übersetzung Incidents (195 Files, einmalig)
- **Input:** Existierende DE-Strings (name, description, asm:reverseTimeline[].title+description, asm:actors[].name)
- **Output:** PR mit _en-Suffix-Feldern, Maintainer-Review per Commit-by-Commit
- **Tokens:** ~150-200k Input + ~100-150k Output pro Batch von 30 Files
- **Kosten:** Mit Sonnet 4.7: ~2-3 EUR für alle 195 Incidents
- **Effekt:** EN-Lücke geschlossen; Maintainer reviewt PR, kann Korrekturen direkt einarbeiten

### Use-Case 2: Cases-Quellen-Verifikation (laufend)
- **Input:** Neuer Case oder bestehender Case mit Quellen-URLs
- **Pipeline:** WebFetch der Quellen → Cross-Check der Headcount-/Datum-/Company-Fakten
- **Output:** Verifikations-Status pro Quelle als Kommentar im Issue
- **Tokens:** ~10-20k pro Case
- **Kosten:** ~0,10 EUR pro Case
- **Effekt:** Maintainer-Review-Zeit pro Case halbiert (von ~30 auf ~15 Min)

### Use-Case 3: Crowdsourcing-KI-Pre-Check (Item 108)
- **Input:** Issue mit ki-entlassung-melden.yml Template-Daten
- **Pipeline:** Quellen-WebFetch + Plausibilitätsanalyse (AI-Attribution-Stärke 1-5)
- **Output:** PR-Vorschlag mit JSON-Datei + Maintainer-Review-Notizen
- **Tokens:** ~15-30k pro Meldung
- **Kosten:** ~0,15 EUR pro Meldung
- **Effekt:** Pre-Check-Zeit von ~45 auf ~10 Min Maintainer-Zeit

### Use-Case 4: Incident-Updates bei Quellen-Drift
- **Input:** Wöchentlicher Link-Health-Check (`check-links-v2.js` läuft schon)
- **Pipeline:** Wenn neue 404 → WebSearch nach Archiv-Version oder Alternativ-Quelle → PR
- **Output:** PR mit aktualisiertem source.url (z.B. Wayback-Machine-URL)
- **Tokens:** ~5-10k pro defektem Link
- **Kosten:** ~0,05 EUR pro Link
- **Effekt:** Link-Rot wird automatisch gefixt statt manuell

### Use-Case 5: Radar-Sonntags-Recherche (Item 100-103)
- **Input:** "Welche neuen KI-Geschehnisse der letzten Woche passen in den Radar?"
- **Pipeline:** WebSearch + Filter auf Radar-Kategorien + Strukturierungs-PR
- **Output:** PR mit Radar-Vorschlägen + Quellen
- **Tokens:** ~30-50k pro Wochen-Run
- **Kosten:** ~0,30 EUR pro Woche, ~15 EUR/Jahr
- **Effekt:** Sonntags-Routine teilautomatisiert, Maintainer wählt aus

### Total laufende Kosten bei Vollnutzung
- UC1 (einmalig): ~2-3 EUR
- UC2 (10 Cases/Monat): ~1 EUR/Monat
- UC3 (20 Meldungen/Monat, geschätzt): ~3 EUR/Monat
- UC4 (5 dead Links/Monat, geschätzt): ~0,25 EUR/Monat
- UC5 (4 Wochen/Monat): ~1,20 EUR/Monat
- **Gesamt:** ~5-6 EUR/Monat laufend, +2-3 EUR einmaliger Sprint

---

## 3. Privacy / Datenschutz

**Was geht an Claude API:**
- Quellen-URLs (öffentlich)
- Quellen-Texte (öffentlich, journalistische Inhalte)
- Bestehende Incident/Radar/Case-Strings (DE)
- Bei UC3 (Crowdsourcing): Issue-Inhalte (Pflichtfelder sind öffentlich im Repo)
- **NICHT:** Klarname/E-Mail von Hinweisgebern (sind im privaten Slot, siehe Datenschutz §8)

**DSGVO-Bewertung:**
- Verarbeitung erfolgt zur "Qualitätssicherung und Quellen-Verifikation" (§8 deckt das)
- Anthropic ist Datenverarbeiter; Verarbeitung in US-Rechenzentren
- Auftragsdatenverarbeitungs-Vertrag (DPA) mit Anthropic ist möglich (Standard-Vorlage existiert)
- Empfehlung: DPA abschließen, in Datenschutz §8 ergänzen, dass "ein US-Sprachmodell-Dienstleister (Anthropic) für Quellen-Verifikation eingesetzt wird"

**Pipeline-spezifische Schutzmaßnahmen:**
- Keine User-Telemetrie an Claude (keine IP, kein User-Agent — nur Quellen-Inhalte)
- API-Key in GitHub-Secrets, nicht im Repo
- Rate-Limiting (max N Requests/Tag) als Cost-Cap

---

## 4. Maintainer-Kontrolle (kritisch wichtig)

Die Pipeline darf **niemals** ohne Maintainer-Review auf `main` schreiben. Das Pattern:

```
GitHub Action triggert auf:
  - issue_comment "/translate" (UC1)
  - issues opened mit label "needs-verification" (UC2/UC3)
  - schedule wöchentlich (UC4/UC5)
↓
Action ruft Claude API
↓
Action öffnet PR (NIE push direkt!)
↓
Maintainer reviewt PR im Browser, akzeptiert / korrigiert / verwirft
↓
Bei Merge: PR wird auf main gemerged, normale Deploy-Pipeline läuft
```

Damit bleibt der Maintainer 100% in Kontrolle, die Pipeline ist Vorschlags-Generator, kein Auto-Commiter.

---

## 5. Aufwand & Risiken

### Setup-Aufwand
- **Pipeline-Infrastruktur** (~1 Session): `.github/workflows/claude-translate.yml`, Helper-Script `scripts/translate-via-claude.js`
- **Pro Use-Case** (~0,5 Session jeweils): Prompt-Templates + Maintainer-Review-Checkliste
- **DPA mit Anthropic abschließen** (~1 Std., admin)
- **Datenschutz §8 erweitern** (~30 Min)

### Risiken
| Risiko | Wahrscheinlichkeit | Mitigation |
|---|---|---|
| Falsche Übersetzungen (Fachbegriffe, Eigennamen) | Mittel | Maintainer-Review-Gate, explizite Term-Liste in Prompt |
| Kosten-Explosion (Endlos-Loop) | Niedrig | Rate-Limit, Per-Run-Budget, Cost-Alert ab 30 EUR/Monat |
| Anthropic-Service-Ausfall | Niedrig | Pipeline ist optional; manuell weiter möglich |
| Anthropic-Preisänderung | Mittel | Pipeline ist Provider-agnostisch designbar (Helper-Script abstrahiert API) |
| Datenschutz-Beschwerde | Niedrig | DPA + §8-Update; Quellen sind öffentlich |
| Pipeline-Wartungs-Aufwand | Mittel | Bewusst kleine GitHub Action, ~200 Zeilen JS |

---

## 6. Trade-Off-Analyse

### Wann manuell sinnvoll bleibt
- **Wenige Use-Cases aktiv** (<3 von 5): Pipeline-Setup-Aufwand höher als Einsparung
- **Wenig Volumen** (<5 Cases/Monat, kein Bulk-Übersetzungs-Bedarf): laufende Kosten lohnen sich nicht
- **Maintainer schätzt manuellen Touch**: jede Übersetzung selbst denken → höhere Qualität als KI-Erstvorschlag
- **Sprache-Sensitivität**: Anthropic-API-Fluss zu Quellen-Texten ist unerwünscht (manche NGOs/Whistleblower)

### Wann Pipeline klar besser ist
- **Bulk-EN-Migration der 195 Incidents** ansteht (UC1) → manuell 3-5 Sessions, Pipeline 1 Sprint + Review
- **Crowdsourcing skaliert** (>10 Meldungen/Monat) → manueller Pre-Check wird Engpass
- **Sonntags-Routine wird zur Pflicht** statt Hobby → Automatisierung lohnt sich
- **Mehrsprachigkeit erweitert** (FR/ES nach EN) → Pipeline trägt ohne Mehraufwand

---

## 7. Konkrete Empfehlung

**Pipeline jetzt bauen** wenn:
- ✓ EN-Migration der 195 Incidents (UC1) als nächste Phase ansteht
- ✓ Crowdsourcing aktiv beworben werden soll (Item 108 → erwartete >10 Meldungen/Monat)
- ✓ Mehrsprachigkeit über DE/EN hinaus geplant (FR, ES, etc.)

**Manuell bleiben** wenn:
- ✗ Nur 1-2 Use-Cases tatsächlich aktiv (z.B. nur UC1 ohne Crowdsourcing-Skalierung)
- ✗ Datenschutz-Sensitivität bei Quellen-Texten überwiegt
- ✗ Maintainer-Zeit > Kosten (Pipeline-Setup-Aufwand)

### Konkrete Reihenfolge (falls Pipeline beschlossen wird)

1. **Phase 0** (1 Session): DPA mit Anthropic, Datenschutz §8 Pipeline-Erwähnung, GitHub-Secret für API-Key
2. **Phase 1** (1 Session): Pipeline-Skelett `.github/workflows/translate.yml` + `scripts/translate-via-claude.js` für UC1
3. **Phase 2** (1 Sprint, ~6 Batches à 30 Incidents): Bulk-Übersetzung 195 Incidents, Maintainer reviewt jeden PR
4. **Phase 3** (1 Session): UC2 + UC3 (Cases-Verifikation + Crowdsourcing-Pre-Check) nach Maintainer-Erfahrung mit Phase 2
5. **Phase 4** (1 Session, optional): UC4 + UC5 (Link-Rot + Radar-Sonntags)

**Pause-Punkt:** Nach Phase 2 evaluieren — wenn Maintainer-Review-Zeit pro PR <10 Min und Übersetzungsqualität OK, weiter mit Phase 3. Sonst zurück zu manuell.

---

## 8. Offene Fragen für den Projekteigner

1. **Wie hoch ist die EN-Übersetzungs-Priorität für 195 Incidents?**
   - Hoch (vor Launch): Pipeline lohnt sich
   - Niedrig (nice-to-have): manuell ist OK
2. **Wird Crowdsourcing (Item 108) aktiv beworben oder bleibt es Soft-Launch?**
   - Aktiv: Pre-Check-Pipeline (UC3) ist kritisch
   - Soft: manueller Review reicht
3. **Sollen weitere Sprachen kommen (FR, ES, IT)?**
   - Ja: Pipeline ist Pflicht
   - Nein: einmalige EN-Übersetzung kann auch manuell
4. **Datenschutz-Bedenken bei US-API-Provider?**
   - Show-Stopper → manuell bleiben oder lokales Modell
   - Akzeptabel mit DPA → Pipeline OK

---

## 9. Verwandte Dokumente

- `docs/planung/recht-crowdsourcing.md` — DSGVO-Konzept für Item 108
- `docs/planung/audit-2026-05-26-umlaute-und-uebersetzung.md` — Audit-Befund EN-Lücke
- `docs/planung/inventar-index.md` — Items 105-108 Stand
- `docs/planung/pre-release-todos.md` — übersicht offener Aufgaben

---

*Dokument erstellt 2026-05-26 im Pre-Release-Sprint. Entscheidung steht aus.*
