# Übergabe #7 — 2026-06-19

> Sev-3-TL-Offensive (50%-Marke geknackt) + korpusweiter Transliterations-Sweep
> + Tooling-Bugfix + Career-Pilot + Radar-Check.
> Vorgänger: [Übergabe #6](übergabe-2026-06-18-tl-offensive-und-frontend.md).

## TL;DR

| | Start (06-18) | Ende (06-19) |
|---|---|---|
| Bestand | 2457 Incidents | 2457 (unverändert) |
| Reverse-TL | 977 (39,8 %) | **1233 (50,2 %)** ✅ 50%-Marke |
| Sev-3 ohne TL | 952 | **696** |
| Anzeigetext | ~1300 Files transliteriert | **korpusweit ä/ö/ü/ß** |
| Audit | „0" (mit Blindfleck) | **echte 0** (vollständige Wortliste) |

## 1. Sev-3 Reverse-TL-Offensive (16 Wellen, +256 Incidents)

- **Methode:** manuelle Agenten-Wellen (4 Agents × 4 Cases), thematisch gruppiert.
  0 Crashes über 16 Wellen (kumuliert 37+ Wellen projektweit).
- **Cluster abgearbeitet (Welle 1–16):** AU, AR, AL, DZ, BD, BE, BA, BR, BF, BS,
  CL, CN, DE, EU, FR, IN, USA (Amazon/Justiz/Gesundheit/Militär/Bias/Urheberrecht),
  UK, IL, IT, CA, RU, ES, NL, JP, Kenia, Nigeria, Ghana, Südafrika, Malaysia,
  Myanmar, Thailand, Pakistan, Philippinen, Südkorea, global.
- **Welle-Hygiene pro Welle** (Pflicht-Pipeline): Struktur-Check (title==title_de,
  ≥4 TL-Einträge, ≥3 Rechte, Phasen-/DUP-Check) → `fix-umlaut-transliterations.js`
  (Netz) → `audit-bilingual-incidents.js` (0) → Doppel-Umlaut-Grep `[äöü][äöü]`
  → `bundle-incidents.js` → commit. Details Memory `tl-workflow-methodik`.
- **Wiederkehrende Befunde, die der Check fing:** vereinzelt DUP-Tippfehler
  (`gesunder`→`gesundes`), `dropped_proper_name` (Google/Amazon im EN-Titel),
  `length_ratio` (DE „Gleichbehandlung der Geschlechter" vs EN „Gender equality"
  → EN auf „Equal treatment of the genders" angeglichen). Agenten fingen pro Welle
  ~0–3 vorbestehende Long-Tail-Transliterationen in Fremd-Files mit.
- **Sev-5 + Sev-4 weiterhin 100 %.** Sev-3: 360/1056 (34 %), **696 ohne TL = nächster Schritt**.

## 2. Korpus-Transliterations-Sweep (~1300 Files)

**Befund:** Audit + Fixer teilten eine *unvollständige* kuratierte Wortliste →
~1300 von 2457 Files hatten `ae/oe/ue/ss` statt `ä/ö/ü/ß` in `name_de`/`description_de`
(Altlast der AIAAIC-Importe), die das Audit NICHT erfasste („0 Findings" war überzeichnet).

**Lösung:** Workflow (`translit-classify-verify`) — ~6200 Kandidaten-Token in 32 Batches
klassifiziert + adversarial verifiziert (64 Agenten) → **2774 validierte Mappings**.
Mechanik-Filter `normalize(from)===normalize(to)` garantiert reine Umlaut-Substitution
(keine Wort-Korruption). Anwendung wert-genau im Rohtext (erhält CRLF/LF + Minimal-Diffs).
~17k Wort-Fixes über 1268 Files.

**Tooling-Bugfix (wichtig):** Die `über`-Regexes in **Fixer UND Audit** nutzten ASCII-`\b`,
das nach einem Umlaut greift → aus korrektem `Räuber` machte der nächste Fixer-Lauf `Räüber`
(Doppel-Umlaut-Korruption; hatte in Vorsessions schon 2 Files still beschädigt). Jetzt
Unicode-Lookbehind `(?<![A-Za-zÄÖÜäöüß0-9_])`. **Pflicht-Check nach jedem Fixer-Lauf:**
grep `[äöüÄÖÜ][äöüÄÖÜ]`.

**Nachhaltigkeit:** Beide Scripts laden jetzt die gemeinsame `data/translit-extra-map.json`
→ bleiben synchron. **Neue Mappings dort eintragen, nicht im Code.** Detail: Memory `translit-tooling`.

## 3. Career-Dashboard-Pilot (Negativ-Befund, wertvoll)

Frage: „Können Agenten die Career-Layer-A-Daten füllen?" — Pilot mit 4 WebSearch-Agenten
(US/UK/CA/AU). **Ergebnis: nein.** US 10 Werte (nur via Frey/Osborne, nicht die nationale
BLS-Quelle), UK 4 (ONS), CA 0, AU 0. Grund: per-Beruf-Werte stecken in herunterladbaren
CSV/XLS/PDF, nicht auf Webseiten. Agenten verhielten sich korrekt (keine erfundenen Zahlen).
**Richtiger Weg:** Hauptsession mit WebFetch/Bash → Dataset-Download + Crosswalk. Pilot-Stubs
verworfen. Detail + Anleitung: Memory `career-data-curation-blocker`. Frontend ist fertig,
nur Daten fehlen (de.json: 1 von ~80 Berufen).

## 4. Radar-Check

Gesund: 6 Situationen, alle mit `developmentTimeline`, 0 Transliterationen, Status 2 eskalierend
/ 4 aktiv. Kein Rückstand; optional erweiterbar.

## Commits (alle auf main gepusht)

`8512246` `f05c1db` `dc47987` (Wellen 1–3) · `3af121b` (Korpus-Sweep + Bugfix) ·
`f343f5b` (STATUS) · `7511bac` `0b8e85e` `54b31fe` `7d3ac35` `631e418` `0c2408e`
`105ff14` `98ca23a` `395b9f9` (Wellen 4–16 + Zwischen-STATUS).

## Nächster Schritt

1. **Sev-3 weiter** (696 ohne TL) — Wellen-Methode, Welle-Hygiene wie oben.
2. **ODER Career-Daten** richtig: Dataset-Download (ONS-XLS, BLS/O*NET, StatCan-CSV,
   JSA-Tool) + Crosswalk in Hauptsession, ~1 Land pro Durchgang.
3. **ODER AIAAIC Batch D** (pre-2015) · Dedup-Backlog · needs-review-Cases.
