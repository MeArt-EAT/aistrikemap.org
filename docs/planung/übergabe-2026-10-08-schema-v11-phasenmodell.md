# Übergabe #13 — Schema v1.1 (Phasen-Modell) + Timeline-Korrekturwellen 1–3

**Datum:** 2026-10-08
**Vorgänger:** #12 (2026-08-07, Smart-Char-Sweep + Validator-Vollscan)
**Commits:** `2399ade` (Validator v1.1 + 9 Swaps), `0ec1e95` (Welle 1), `015cddb` (Wellen 2+3) — auf `main`
**Session-Ende:** Nutzungslimit erreicht; Wellen 4–6 und ein Re-Verify stehen aus (siehe unten).

---

## 1. Modellentscheidung: „genau 1 event" → Phasen-Modell v1.1

Die in #12 offene Frage ist entschieden und umgesetzt. Begründung aus der
Datenanalyse: Das Frontend (`detail-panel.js`) rendert die Timeline in
Array-Reihenfolge mit Phasen-Label pro Eintrag, es hängt nichts an „genau 1
event". Von 134 Mehrfach-event-Files waren 124 makro-monoton (Vorgeschichte →
Ereignis-Stufen → Folgen) und damit inhaltlich korrekt.

**Regeln (jetzt in `validate-timelines.js` und `_timeline-briefing.md`):**

| Regel | Status |
|---|---|
| Vorgeschichte {infrastructure, doctrine} in beliebiger Reihenfolge (Doktrin darf älter sein als Infrastruktur) | ERROR nur bei Chronologie-Verstoß |
| ≥ 1 event, mehrere erlaubt (mehrstufiges Ereignis), > 3 | ERROR bei 0, WARN bei > 3 |
| ≥ 1 consequences | ERROR |
| Verschränkung (Vorgeschichte NACH event, event NACH consequences) | ERROR |
| Mindestens eine Vorgeschichte-Phase | ERROR |
| infrastructure ODER doctrine einzeln fehlend | WARN (nach Welle 6 auf ERROR heben) |
| Neuer Schalter `--all` für den Korpus-Vollscan | |

**Überraschung:** Der neue Makro-Ordnungs-Check fand **68 verschränkte
Timelines, die der alte event-Zähler durchließ** — fast alle alte handgebaute
Fälle mit Muster I-E-D-C, bei denen eine *Reaktion* (UN-Bericht, Debatte,
Urteil) als `doctrine` getaggt war. Vollscan nach Commit 1: 152 → 81 ERRORs
(80 Files) + 31 Files ohne infrastructure- oder doctrine-Phase = **111 Files
Arbeitsliste**.

## 2. Korrekturwellen (Workflow: Fix mit WebSearch-Pflicht → unabhängige adversariale Verify)

| Welle | Files | Fix WebSearch | Verify WebSearch | Ergebnis |
|---|---|---|---|---|
| 1 | 24 | 6/6 | 6/6 | 72 bestätigt, 25 korrigiert, 6 nicht belegbar entfernt/gekürzt; 0 needs-human |
| 2 | 24 | 6/6 | 3/6 | 12 Files nur aus Modellwissen verifiziert → **Re-Verify offen** |
| 3 | 24 | 6/6 | 2/6 → Re-Verify 4/4 | 16 Files nachgeprüft (13 fix-applied), 2 needs-human |

Alle 72 Files: Validator 0 ERRORs, fix-umlaut/Smart-Chars/Audit sauber, Feld-Diff
gegen HEAD zeigt keine Änderung außerhalb der Timeline. Frontend für Welle 1 im
Browser geprüft (DE + EN, 0 Konsolenfehler).

**Kern-Lektion — WebSearch-Turn-Budget (Memory `websearch-turn-budget`):**
Es gibt ein Budget von **200 WebSearch-Aufrufen pro Turn**, geteilt von allen
in diesem Turn gestarteten Agenten. Wellen 2+3 parallel gestartet → nach den
Fix-Stufen war es leer, die Verify-Agenten meldeten `websearch_used:false`.
Regel: **ein Workflow pro Turn, Wellen ≤ 16 Files.** Für betroffene Batches
gibt es `reverify-template.js` + `gen-reverify.js` (nur Verify-Stufe, mit
Fix-Report und Erstbefund im Prompt).

## 3. needs-human (Incident-Ebene, redaktionelle Entscheidung des Projekteigners)

- **`tschechien-ki-sozialhilfe-scoring`** — Faktenbasis nicht belegbar. Einzige
  Quelle (Automating Society 2020) hat kein Tschechien-Kapitel und ist falsch
  datiert; keine Dokumentation eines algorithmischen MPSV-Scorings auffindbar.
  Metadata sagt `humanVerified:true`. Empfehlung: `asm:retracted` ODER Umbau auf
  das belegbare Thema (bezdoplatkové zóny 2017–2021, regelbasiert, nicht KI).
- **`usa-rekognition-immigration-ice`** — Timeline jetzt belegt, aber Incident-
  Haupttext nicht: DMV-Abfragen liefen über staatliche Systeme, kein Rekognition-
  Vertrag mit ICE; 600 Mio. ist der GAO-Wert für FBI-Zugriff; Location Portland
  ohne Bezug. Name/Beschreibung/Location/Actors neu fassen.
- `ukraine-russland-zala-lancet-autonome-ki-drohnen` — in der Hauptsession per
  WebSearch **geklärt** (HUR-Offenlegung 23.03.2026, 62 Komponenten, Kiew 16.03.).

## 4. Nächste Schritte (Prio)

1. **Re-Verify Welle 2** — Script liegt bereit (Scratchpad `asm/reverify-2.js`,
   3 Batches/12 Files); Scratchpad ist session-spezifisch → bei neuer Session mit
   `gen-reverify.js 2 <journal-dir wf_e91199ae-7cd>` neu erzeugen oder die 12
   Slugs (siehe Commit `015cddb`) direkt in eine Verify-Welle geben.
2. **Wellen 4, 5, 6** (16/16/7 Files; Arbeitsliste = `validate-timelines.js --all`,
   ERROR-Files zuerst, dann WARN „keine doctrine/infrastructure-Phase"). Ein
   Workflow pro Turn.
3. Danach WARN „keine infrastructure/doctrine-Phase" im Validator auf ERROR heben.
4. Zwei needs-human-Fälle entscheiden (Abschnitt 3).
5. Unverändert: Career-Daten via Dataset-Download · AIAAIC Batch D · needs-review-Cases · Slug-Migration.

## Disk-Hygiene

Workflow-Journale ~10 MB pro 24er-Welle unter `~/.claude/projects/…/subagents/workflows/`
(4 Läufe ≈ 35 MB). Unter der 100-MB-Warnschwelle; bei Bedarf nach Übergabe löschen.
