# Übergabe #11 — Sev-2-Offensive (Wellen 46–51)

**Datum:** 2026-06-26
**Vorgänger:** #10 (2026-06-25, Sev-3-Block abgeschlossen, TL 78.5 %)
**Bestand danach:** 2457 Incidents · **2068 mit Reverse-TL (84.2 %)** · 0 Audit-Findings

---

## Zusammenfassung

Nach Abschluss des Sev-3-Blocks (#10) wurde die **Sev-2-Ebene** in Angriff
genommen — gleiche erprobte Workflow-Methode (24 Cases/Welle, Stufe 1 WebSearch-
grounded Generieren → Stufe 2 unabhängige adversariale Verify). **6 Wellen
(46–51), +140 Reverse-Timelines, TL-Quote 78.5 → 84.2 %** (80%-Marke in Welle 47
überschritten). Sev-2 ohne TL: 480 → 340.

| Welle | Cases | pass / fix / needs-human | Δ TL | TL gesamt | Besonderheit |
|---|---|---|---|---|---|
| 46 | 24 | 17 / 7 / 0 | +24 | 1952 (79.4 %) | Faktenfehler cosmos-magazine Grant-Datum 2023→Feb 2024 |
| 47 | 24 | 21 / 2 / 1 | +23 | 1975 (80.4 %) | needs-human: ultraman (2 Fälle vermischt) |
| 48 | 24 | 13 / 9 / 2 | +22 | 1997 (81.3 %) | needs-human: devternity (Land), perspective-api (Urheber); inline-Fix ubisoft La Forge 2011→2016 |
| 49 | 24 | 15 / 9 / 0 | +24 | 2021 (82.3 %) | inline-Fix the-brutalist „Davids"→„David Jancso" (9x); Gender-Begriff harmonisiert |
| 50 | 24 | 16 / 7 / 1 | +23 | 2044 (83.2 %) | needs-human: grok (überzogene MeitY-/Strafe-/§69A-Behauptungen); inline-Fix these-nudes Datum |
| 51 | 24 | 20 / 4 / 0 | +24 | 2068 (84.2 %) | inline-Fix kolumbien-rappi startDate 2024→2023-10 |

**WebSearch in allen 6 Wellen durchgehend verfügbar** (6/6 Gen + 6/6 Verify, kein
Ausfall). Audit nach jeder Welle 0 Findings (Welle 49: 2 length_ratio-False-
Positives bei einem Gender-Begriff → auf Korpus-Standard „Geschlechtergleichheit"
harmonisiert). Translit-Map unverändert 2951 (Prompt-Härtung hält Neueinträge ~0).

---

## Neues Tooling: `scripts/validate-timelines.js`

Bisher lief der „Validator" pro Welle als inline-`node -e`. Da noch ~17 Sev-2-
Wellen + Sev-1 folgen, wurde er als **wiederverwendbares Script** kodifiziert.
Kapselt alle Pre-Commit-Checks:

- `asm:reverseTimeline` vorhanden, 4–6 Einträge, **genau 1 event-Phase**
- `title === title_de`, `description === description_de` pro Eintrag
- **Chronologie strikt aufsteigend** inkl. monat-genau-vor-tag-genau (`2024-05`
  darf nicht vor `2024-05-08`); Datumsformat nur YYYY/YYYY-MM/YYYY-MM-DD
- `@id` endet auf `/<dateiname>` (Permalink, nicht umlautiert)
- `asm:affectedRights === asm:affectedRights_de`, `_en` gleiche Länge
- **Smart-Char-Scan rekursiv** über alle Felder (Em-/En-Dash, typografische Quotes)
- **Umlaut-Gap-Scan**: bekannte Translit-Map-Keys als Vollwort (ERROR) +
  Verdachts-Morpheme (WARN) + Doppel-Umlaut-Heuristik

Aufruf: `node scripts/validate-timelines.js <slug...>` oder `--severity N`.
Exit 1 bei ERROR. **Fing sofort echte Defekte:** Welle 46 einen Datumsbereich
`2024-2025` im date-Feld, Welle 48 ein 4×-systematisch fehlendes `title_de` im
event-Eintrag eines Gen-Agenten (vom Batch-Verify übersehen). Beide mechanisch
gefixt. Gleiche-Datum-Paare laufen als WARN (event→consequences am selben Tag,
akzeptiert).

---

## Kernbefund: Sev-2 hat mehr vorbestehende Daten-Qualitätsmängel als Sev-3

Bei Sev-3 fing die Verify überwiegend Halluzinationen in der *selbst gebauten*
TL. Bei Sev-2 (älterer Bestand, oft AIAAIC-Import) deckt sie zusätzlich **Fehler
im vorbestehenden Incident-Datensatz** auf — Land, Urheberschaft, Fall-Identität,
überzogene Behauptungen. **Pro Welle ~1 needs-human** (W47/48/50). 4 Fälle waren
nicht mechanisch fixbar (TL zurückgerollt, **bleiben ohne TL**):

1. **`china-...-ultraman-urheberrecht`** (W47) — vermischt **zwei reale Fälle**:
   Guangzhou-Internetgericht (Feb 2024, weltweit erster Fall, direkte Verletzung,
   10.000 CNY, kein LoRA, keine Berufung) vs. Hangzhou/Acgnai (Sep 2024, mittelbare
   Verletzung, 30.000 CNY, LoRA, Berufung 30.12.2024). Bestehende description +
   actors (Acgnai) waren bereits vermischt. → Entscheidung welcher Fall, dann
   description/TL/actors/sources neu schreiben.
2. **`estland-...-devternity`** (W48) — **falsches Land**: DevTernity/Eduards
   Sizovs sitzen in Riga, **Lettland (LV)**, nicht Estland (`addressCountry=EE`).
   Der Skandal selbst (KI-erfundene Fake-Rednerinnen, Konferenz abgesagt) ist
   korrekt belegt. → EE→LV + name/title „Estland"→„Lettland"; Slug/@id/index.json-
   Umbenennung abwägen (Permalink-Bruch). TL nach Klärung neu baubar.
3. **`finnland-...-perspective-api`** (W48) — **falsche Urheberschaft**:
   arXiv:1702.08138 („Deceiving Google's Perspective API") ist von der
   **University of Washington** (Hosseini, Kannan, Zhang, Poovendran), nicht
   Aalto/Padua. Vermischt mit dem separaten 2018-Paper arXiv:1808.09115
   (Groendahl et al., Aalto+Padua, „All You Need is Love"). → entscheiden welches
   Paper; Land FI passt nur zum 2018-Paper (dann Titel/Datum/ID anpassen).
4. **`indien-...-grok-chatbot`** (W50) — **überzogene/fehlattribuierte
   Behauptungen**: Kern-Vorfall (Grok „Unhinged Mode" gibt Mitte März 2025 Hindi-
   Beschimpfungen aus, MeitY prüft) korrekt, aber drei Detail-Claims falsch:
   (a) „MeitY warnt offiziell am 16.3." — real nur „in Kontakt", formale Notice
   erst Jan 2026 (anderer Anlass); (b) „50-Crore-Strafe geprüft" — kein Beleg;
   (c) „verletzt §69A IT Act" — die §69A-Frage kam aus X's Klage, nicht als MeitY-
   Vorwurf. Teils vorbestehend in description. → belegt korrigierbar (Verify lieferte
   die Fakten), aber rechtsrelevant → menschliche Korrektur statt autonom.

Diese 4 + `prabowo` (aus #8) sind in STATUS.md unter „Offene Fronten #2" als
needs-human-Sammelblock dokumentiert. **Empfehlung:** Diese Fälle sind echte
redaktionelle Entscheidungen (Außenwirkung auf aistrikemap.org) — bewusst NICHT
autonom entschieden. Für die laufenden Wellen via `grep -v` ausschließen.

---

## Methodische Notizen

- **Prompt iterativ nachgeschärft:** Ab Welle 47 explizites Verbot von Datums-
  bereichen (`"2024-2025"`) im date-Feld im Verify-Prompt — direkte Rückführung
  der Welle-46-Lektion.
- **needs-human-Handhabung:** TL via `git checkout -- <file>` auf HEAD zurückrollen
  (Case bleibt ohne TL wie zuvor), Befund in STATUS dokumentieren. Konsistent mit
  prabowo. Korrekte-aber-zweifelhaft-zugeordnete TLs (devternity-Skandal war ok)
  werden mit verworfen, statt inkonsistente Anzeige-Felder autonom zu ändern.
- **Hygiene-Kette je Welle:** find-missing → fix-umlaut → **validate-timelines.js**
  → Phasen-Check der gleiche-Datum-WARNs → Doppel-Umlaut-Grep → audit → bundle →
  commit. Tooling separat vor den Daten committet.
- **Iterative Härtung über den Block:** Ab Welle 49 zusätzlich „title_de auch im
  event-Eintrag nie weglassen" (Lektion W48) + needs-human-Eskalation bei
  Identitäts-/Land-/Slug-Fehlern explizit im Verify-Prompt.
- **Disk:** 6 Wellen = 72 Agenten → Workflow-Transcripts + Task-Outputs zusammen
  unter ~20 MB. Grün (Warnschwelle 100 MB).

---

## Commits (8, gepusht)

```
ede9835  Add validate-timelines.js: Pre-Commit-Validator für Reverse-Timelines
cec5df9  Reverse-TL Sev-2 Welle 46: +24 (1952, 79.4 %)
58192e9  Reverse-TL Sev-2 Welle 47: +23 (1975, 80.4 %)
88d88aa  Reverse-TL Sev-2 Welle 48: +22 (1997, 81.3 %)
5d7c356  Übergabe #11 (Zwischenstand 46-48)
85ab914  Reverse-TL Sev-2 Welle 49: +24 (2021, 82.3 %)
bd4f716  Reverse-TL Sev-2 Welle 50: +23 (2044, 83.2 %)
b81dee1  Reverse-TL Sev-2 Welle 51: +24 (2068, 84.2 %)
```

---

## Nächster Schritt

- **Sev-2-TL fortsetzen** (340 ohne TL, ~14 Wellen) — Workflow-Methode +
  `validate-timelines.js` je Welle, needs-human via `grep -v` ausschließen.
- ODER **4 needs-human + prabowo klären** (redaktionelle Entscheidungen).
- ODER korpusweiter Smart-Char-Sweep (789 Files), Career-Daten, AIAAIC Batch D.
