# Übergabe #4 — 2026-06-06 · AIAAIC Batch B

> 📍 **STAND: 2154 Incidents · Phase 1 Datenausbau · vor AIID & AIAAIC**
> Nächster Schritt: AIAAIC Batch C (2015-2019) oder Reverse-Timelines.
> Schneller Überblick immer in `STATUS.md` (Projekt-Root).

---

## 1. Was diese Session passierte

**Bestand: 1304 → 2154** (+850 netto). Zweiter AIAAIC-Import-Batch.

| Schritt | Ergebnis |
|---|---|
| AIAAIC 2020-2023 konvertiert | 993 Stubs (`convert-aiaaic-to-candidates.js --batch B`) |
| 34 Chunks, 9 Agenten-Wellen | 864 verified, 111 needs-review, 18 rejected |
| Promotet (`--min-sources 2`) | 861 |
| Semantische Dubletten gemergt | 11 (5 false-positives verschont) |
| Audit | **0 Findings** (2154/2154 clean) |
| Commit | `59bca35`, gepusht |

Davor in dieser Session (vor dem Schlusspunkt-Angebot): nichts — Batch B war
der einzige große Block. Die Quick Wins (Dubletten, Schema, Timelines, Audit)
liefen in Übergabe #3 (2026-06-03).

## 2. Liga-Position

| Datenbank | Incidents | Kuratierung |
|---|---|---|
| OECD AIM | ~15.490 | auto-gescraped (nicht vergleichbar) |
| AIAAIC | ~2.263 | roh, CC BY-SA |
| **AIStrikeMap** | **2.154** | bilingual, Geo, Reverse-TL, 0 Findings |
| AIID | ~1.361 | kuratiert |

AIStrikeMap hat AIID fast verdoppelt und liegt auf Augenhöhe mit AIAAIC bei
deutlich höherer Kuratierung. **Größte kuratierte AI-Incident-DB mit
Menschenrechts-Frame.**

## 3. Batch-B-Lektionen (für Batch C wichtig)

- **API-Crashes:** 3 von 34 Agenten crashten (Socket-Error / "Overloaded").
  → IMMER per File-Check verifizieren (`status !== "candidate"`), nicht auf die
  "completed"-Notification vertrauen. Retry mit explizitem Reminder.
- **Effizienz-Hinweis nötig:** Ohne Begrenzung liefen Agenten in
  Endlos-Validierungs-Schleifen (ein Agent 239 Tool-Calls → Crash). Mit
  "max 45 Tool-Calls, ein Write am Ende" im Prompt: stabil bei 34-44 Calls.
- **Datums-Problem:** AIAAIC-Stub-Jahre sind oft das System-/Listungsjahr,
  NICHT das Ereignisjahr. Das `_enrichment-briefing.md` hat jetzt Abschnitt 1b
  dazu (von Hand erweitert). Agenten haben hunderte startDates korrigiert.
- **Mehr Bestand-Überlappung als Batch A:** Die älteren, prominenten Cases
  (ShotSpotter, VioGén, Clearview, NYT v OpenAI, Sama/Kenia) waren aus früheren
  Runden schon da → mehr needs-review/Dubletten. Netto-Quote daher niedriger
  als Batch A (861/993 vs 653/714).
- **Wellengröße:** 5 Agenten/Welle war ok bei niedriger Last, bei Überlastung
  auf 4 reduziert. Disk-Footprint durchgehend ~1 MB.

## 4. Dubletten-Bereinigung (11 gemergt)

`find-internal-duplicates.js` fand 9 strong + 7 likely. Davon 11 echte
gemergt (stärkere Version behalten — TL > mehr Sources), 5 false-positives
verschont. TL-Übertragung bei Berlin-Südkreuz (schwächere hatte die TL).

**Dauerhafte false-positives** (nie mergen): Uber 290 Mio ≠ Clearview 30,5
Mio · Disney/Midjourney ≠ Disney/MiniMax · Coupang ≠ Naver · Tesla-Harley ≠
Tesla-Yamaha · ChatGPT ≠ Bard.

## 5. Inhaltliche Cluster Batch B (2020-2023)

COVID-Moderations-False-Positives 2020 · Proctoring-Welle (Proctorio/ProctorU)
· Tesla/Waymo/Cruise-ADAS-Crashes · China-Uiguren-Überwachung (Hikvision,
Alibaba, Huawei, Dahua) · GenAI-Schockjahr 2023 (ChatGPT-Halluzinationen vor
Gerichten, Deepfakes, Bild-Generatoren) · Gig-Worker-Algorithmen (Uber, Ola,
Deliveroo) · Gesichtserkennungs-Falschverhaftungen (Woodruff, Parks, Reid).

## 6. Nächste Session — Optionen

**Mengen-Hebel:** AIAAIC **Batch C** (2015-2019, ~800 Stubs). Gleiche Pipeline.
```
node scripts/convert-aiaaic-to-candidates.js --years 2015,2016,2017,2018,2019 --batch C
# dann Chunks à 30, Agenten-Wellen à 4-5 (File-Check + Effizienz-Hinweis!),
# merge → promote --min-sources 2 → find-internal-duplicates → fix-umlaut →
# bundle → audit → commit
```
Erwartung: ~600-700 netto (2015-2019 überlappt noch stärker mit Bestand).

**Tiefe:** Reverse-Timelines für severity-5-Cases ohne TL:
```
node -e "const a=require('./data/all-incidents.json');a.filter(i=>i['asm:severity']===5 && !(i['asm:reverseTimeline']||[]).length).forEach(i=>console.log(i['@id'].split('/').pop()))"
```
Briefing: `data/incident-candidates/_timeline-briefing.md`.

**Frontend:** Bei 2154 noch ok (Clustering + gzip). Vor Batch C+D (Richtung
3000) Marker-Performance + Bundle-Lazy-Loading evaluieren.

## 7. Disk-Hygiene (eingehalten)

Trotz 34 Background-Agenten: Temp-Footprint durchgehend ~1.3 MB. Chunks nach
Merge gelöscht, eine verwaiste `.tmp`-Datei vom Crash-Retry entfernt,
`data/external-imports/` gitignored. 443 GB frei.

---

*Stand: 2026-06-06. Commit: 59bca35. Bestand: 1304 → 2154 (+65 %).*
