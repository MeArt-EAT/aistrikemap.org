# 📍 AIStrikeMap — AKTUELLER STAND

> **Diese Datei zuerst lesen.** Sie zeigt immer den aktuellen Projektstand.
> Bei jeder Session aktualisieren. Details in `docs/planung/übergabe-*.md`.

---

## ⏱️ STAND: 2026-08-07

| | |
|---|---|
| 📊 **Bestand** | **2457 Incidents** · **2457 mit Reverse-TL (100.0 %)** ✅ · **0 Audit-Findings** · Anzeigetext korpusweit ä/ö/ü/ß (Translit-Map **2951** Mappings) · **Satzzeichen korpusweit ASCII** (0 Smart-Chars) · Lite-Bundle 7.9 MB (1.6 MB gzip) |
| 🔢 **Übergabe-Nr** | **#12** (2026-08-07) |
| 🚩 **Phase** | 1 — Datenausbau (Items 1–93) |
| ✅ **Zuletzt fertig** | **(2026-08-07, Übergabe #12)** **Korpusweiter Smart-Char-Sweep + Atom-Feed-Fix.** 743 Files auf ASCII-Satzzeichen normalisiert (7776 Ersetzungen: 6818 ` — `, 531 ` – `, 204 Bis-Striche, 146 typografische Quotes, 55 **unsichtbare Soft-Hyphens U+00AD**, 7 kaputte ` —,`, 6 Ellipsen). Neues Tooling `scripts/normalize-smart-chars.js` (idempotent, `--dry-run`, Text-Level statt parse/stringify → minimaler Diff, JSON-Parse-Gate vor UND nach der Ersetzung). Verifikation: 743/743 Files mit identischem Textkern gegen HEAD, **0 Datumsfelder verändert**, Audit 0, Validator 0 Smart-Char-Fehler, Frontend live geprüft (2457 geladen, Detail-Panel + Permalink OK). **Entscheidung: i18n/*.json + *.html behalten den Em-Dash** (handgesetzter Hausstil „Stufe 1 — Gemeldet", vom Validator nicht erfasst). **Bonus-Fund: Atom-Feed war seit der Bilingual-Migration inhaltsleer** (`<title> [ESKALIEREND]</title>`, `undefined — undefined`, ungültiges RFC3339) — `generate-feed.js` las noch `s.name`/`newest.title` statt `*_de`; behoben. Stale Worktrees entfernt (6,9 MB → 4 KB). — **(2026-06-26, Übergabe #11)** **Reverse-TL-Feature KOMPLETT — 2457/2457 = 100.0 %.** 22 TL-Wellen 46–67 (+519, Sev-2-Block 46–65 +472, Sev-1 66–67 +47; Sev-5..1 alle abgearbeitet) + **alle 10 needs-human-Fälle geklärt** (Recherche-Workflow: prabowo→Anies Baswedan, ultraman→Hangzhou/Acgnai, devternity→Lettland, perspective-api→Univ. of Washington/USA, grok/hmrc/bradford/iphone/lieferdrohne/tesla-burger-king korrigiert; 10/10 adversarial verifiziert). Workflow-Methode (24 Cases/Welle, Gen→adversariale Verify), WebSearch durchgehend, 0 Stalls. **Neues Tooling: `scripts/validate-timelines.js`** (Pre-Commit-Validator). Slug/@id bei Korrekturen unverändert (Permalink; correctionNote in metadata wo Slug inhaltlich abweicht). Audit durchgehend 0. |
| ➡️ **Nächster Schritt** | **Entscheidung offen: Phasen-Regel lockern oder 134 Files umbauen.** Der Validator-Vollscan ist von 606 auf **152 ERRORs** runter (Lücken geschlossen + 14 echte Fehler behoben, inkl. eines Live-404 im Detail-Panel). Was bleibt, ist **eine Modellfrage**: „genau 1 `event`-Phase" kollidiert mit „chronologisch aufsteigend" — 117 Files bilden ein mehrstufiges Ereignis korrekt geordnet ab und verstossen trotzdem. **Empfehlung: Regel lockern.** Details in Front 6. · Danach: Career-Daten via Dataset-Download · AIAAIC Batch D (pre-2015) · `needs-review`-Cases sichten (~180) · Slug-Migration der abweichenden Permalinks |
| 🏆 **Liga** | **Größte kuratierte AI-Incident-DB weltweit** — vor AIID (~1361) und AIAAIC (~2249 roh) |

**In einem Satz:** AIStrikeMap ist nach drei AIAAIC-Import-Batches (A+B+C, 2015-2026)
die größte *kuratierte* AI-Incident-Datenbank mit Menschenrechts-Frame —
bilingual DE/EN, Geo-Mapping, Reverse-Timelines, 0 Audit-Findings.

---

## 🎯 Offene Fronten (nach Priorität)

1. **AIAAIC Batch D** (pre-2015, ~300 Stubs) — letzter AIAAIC-Block, niedrige
   Prio (frühe Cases haben weniger Aktualität). Bringt aber historische Tiefe.
   Workflow: siehe Memory `aiaaic-import-workflow` + Übergabe #5.
2. **Reverse-Timelines** ✅ **KOMPLETT — 2457/2457 (100.0 %)** haben die TL (Kern-Feature).
   Sev-5/4/3/2/1 alle abgearbeitet; **alle 10 needs-human-Fälle geklärt** (Recherche-
   Workflow, 10/10 adversarial verifiziert — Details in Übergabe #11 + Commit `3e19118`).
   Bei 5 Fällen weicht der URL-Slug jetzt inhaltlich ab (estland=Lettland, finnland=USA,
   hmrc=2026, prabowo=Anies, ultraman=Hangzhou) — bewusst beibehalten (Permalink-
   Stabilität), in `asm:metadata.asm:correctionNote` dokumentiert; optionale Slug-
   Migration als spätere Aufgabe.
   Methode unverändert (Workflow, 24 Cases/Welle, Gen→adversariale Verify).
   **NEU: `scripts/validate-timelines.js`** als Pre-Commit-Validator je Welle
   (kapselt alle Checks; fing Datumsbereich + fehlendes title_de + length_ratio).
   ⚠️ **WebSearch-Abhängigkeit (Lektion aus Welle 26):** Die Methode braucht WebSearch
   zwingend (Grounding + adversariale Verifikation). Welle 26 (Übergabe #9) fiel in
   einen globalen WebSearch-Ausfall → komplett verworfen, nach Recovery frisch
   wiederholt. **Vor/nach jeder Welle `websearch_used` im Gen-Output prüfen; bei
   Ausfall NICHT committen, sondern `git checkout -- data/incidents` und später neu.**
   In den Wellen 34–45 (Übergabe #10) war WebSearch durchgehend verfügbar.
   **Bewährte Methode:** **eine Welle = 24 Cases (6 Gen × 4 → 6 unabhängige
   adversariale Verify), ~12–15 Min, 0 Stalls über 45 Wellen.** Die Verify-Stufe
   fängt zuverlässig Halluzinationen + Faktenfehler. Hygiene je Welle:
   `find-missing-timelines.js` → `fix-umlaut` → Gap-Scan (DE-Felder gegen Translit-
   Morpheme) → `audit` → **Validator** (Chronologie strikt aufsteigend inkl.
   monat-vs-tag-genau, title==title_de, @id==Dateiname, Smart-Char/Em-Dash, ≤6
   Einträge, genau 1 event-Phase) → `bundle` → commit. Briefing: `_timeline-briefing.md`.
   **Prompt-Härtung (ab Welle 36):** explizite Umlaut-Pflicht für Komposita +
   Chronologie-Sortierbeispiele + „kein Em-Dash" → Translit-Nacharbeit von 268
   (Welle 35) auf ~0. **Em-Dash-Normalisierung** robust via charCode (nicht
   Shell-Unicode-Regex). Detail: Memory `tl-workflow-methodik`.
   **🔖 needs-human — ALLE 10 GEKLÄRT ✅ (2026-06-26, Commit `3e19118`):** Die
   adversariale Verify hatte über die Wellen 10 vorbestehende Daten-Qualitätsmängel
   aufgedeckt (Fehlzuordnungen, falsche Länder/Urheber, vermischte Fälle, überzogene
   Behauptungen). Per dediziertem Recherche-Workflow (10 Korrektur- + 10 Verify-Agenten,
   10/10 als korrekt bestätigt, WebSearch durchgehend) quellengedeckt korrigiert + TL
   gebaut: prabowo→**Anies Baswedan**, ultraman→**Hangzhou/Acgnai** (CN, 2024-09),
   devternity→**Lettland**, perspective-api→**Univ. of Washington/USA** (2017),
   grok (MeitY-/Strafe-/§69A-Behauptungen entschärft), hmrc-quantexa (→2026-05),
   bradford (doctrine belegt), iphone (Ethnie entfernt), amazon-lieferdrohne (Phasen
   korrigiert), tesla-burger-king (Eigenname entfernt). **Slug/@id/Dateiname bei allen
   unverändert** (Permalink-Stabilität) — wo der Slug jetzt inhaltlich abweicht
   (estland/finnland/hmrc/prabowo/ultraman), ist dies in `asm:metadata.asm:correctionNote`
   dokumentiert; optionale Slug-Migration als spätere Aufgabe.
   ✅ **Smart-Char-Sweep ERLEDIGT (2026-08-07, Übergabe #12)** — siehe Front 5.
3. ~~Frontend-Recheck~~ ✓ **ERLEDIGT** (2026-06-18): Lite-Bundle + Lazy-Detail +
   Caching-Fix. Erstabruf 3.9→1.6 MB gzip; TL-Wachstum trifft nur noch die
   lazy-geladenen Einzeldateien. `bundle-incidents.js` erzeugt jetzt
   `all-incidents-lite.json` (Map) neben `all-incidents.json` (Scripts).
4. **needs-review-Cases** — Batch A+B+C haben zusammen ~180 needs-review (oft
   Bestand-Dubletten oder schwache Quellen) in den `*-round-6.json`-Files,
   nicht promotet. Manuell sichten lohnt für 20-30 weitere Promotes.
5. **Smart-Chars / Satzzeichen** ✅ **ERLEDIGT** (2026-08-07): 743 Files auf
   ASCII normalisiert, 7776 Ersetzungen. Tool: `scripts/normalize-smart-chars.js`
   (idempotent, `--dry-run`). **Scope-Entscheidung:** nur `data/` — `i18n/*.json`
   und `*.html` behalten den Em-Dash als handgesetzten Hausstil. Wer das später
   ändern will, muss auch `generate-feed.js` (FEED_TITLE, Trenner) anfassen.
   Nebenbefund: 55 **unsichtbare Soft-Hyphens U+00AD** im Anzeigetext entfernt —
   die brachen Volltextsuche und String-Matching lautlos. Beim nächsten
   KI-Batch mitprüfen (`normalize-smart-chars.js --dry-run` als Gate).
6. 🟡 **Timeline-Validator korpusweit — grösstenteils erledigt, 1 Modellfrage offen.**
   Erster Vollscan (2026-08-07) meldete 463 Files / 606 ERRORs. Nach Validator-
   Korrektur + Daten-Fixes: **150 Files / 152 ERRORs**.
   ✅ **Validator-Lücken geschlossen** (Commit `0f93881`): Zeiträume
   (`2018-2021`, `2023-06 bis 2024-06`) werden erkannt, Chronologie vergleicht
   auf **gemeinsamer Granularität** (`2021-08-15` vs `2021-08` ist kein
   Widerspruch — das waren allein 283 Falsch-Positive).
   ✅ **14 eindeutige Datenfehler behoben** (Commit `15543ad`), darunter ein
   **Live-Bug**: 2 `@id` enthielten echte Umlaute, während die Dateien
   transliteriert heissen → `detail-panel.js:224` leitet den Dateinamen aus der
   `@id` ab, der Detail-Fetch lief auf **404**. Behoben und im Browser
   gegengeprüft (jetzt 200 + Timeline).
   🔴 **OFFEN — Modellfrage, keine Schlamperei:** Die verbleibenden 152 ERRORs
   sind fast alle **134× „genau 1 event-Phase erwartet"**. Davon haben **117**
   eine korrekte Phasen-Reihenfolge und bilden nur ein **mehrstufiges Ereignis**
   ab (Festnahme + Urteil); 16 haben wirklich verschränkte Phasen, 1 gar kein
   event. **Ursache:** Die Regel „genau 1 event" kollidiert mit der Regel
   „chronologisch aufsteigend" — sobald die Doktrin nach dem ersten Ereignis
   datiert, *müssen* sich die Phasen verschränken. Dazu 14× Chronologie, davon
   8× `infrastructure → doctrine` mit **älterer Doktrin** (Maschinenrichtlinie
   2006, OSHA 1989, japanisches Obszönitätsrecht 1907) — kausal korrekt, nur
   nicht aufsteigend. **Entscheidung nötig:** Regel lockern (mehrere `event`
   erlauben, Reihenfolge nur innerhalb der Phase prüfen) ODER 134 Files
   umbauen. Empfehlung: Regel lockern — die Daten sind plausibler als das Schema.

## 🧱 Bekannte false-positives (KEIN Handlungsbedarf)
Dubletten-Check meldet dauerhaft als "strong/likely", sind aber verschiedene
Cases — NICHT mergen:
- Uber-Bußgeld (290 Mio) ≠ Clearview (30,5 Mio)
- Disney/Midjourney ≠ Disney/MiniMax
- Coupang ≠ Naver
- Tesla-Harley ≠ Tesla-Yamaha
- ChatGPT-Phishing ≠ Bard-Phishing
- IBM-DiF/1M-Faces ≠ MegaFace (UW-Washington) — beide aus Exposing.AI-Welle 2019, verschiedene Datasets

## 📦 Pipeline-Werkzeuge (scripts/)
`convert-aiaaic-to-candidates.js` · `merge-aiaaic-chunks.js --batch X` ·
`find-internal-duplicates.js` · `merge-internal-duplicates.js` ·
`fix-smart-quotes-chunks.js` (neu Batch C) · `promote-candidates.js` ·
`fix-umlaut-transliterations.js` · `bundle-incidents.js` ·
`audit-bilingual-incidents.js` · `validate-timelines.js` ·
**`normalize-smart-chars.js`** (neu 2026-08-07)

> ⚠️ **Translit-Tooling (Stand 2026-06-25):** Fixer + Audit teilen
> `data/translit-extra-map.json` (**2951** validierte `ae/oe/ue/ss`→`ä/ö/ü/ß`-Mappings,
> bleiben dadurch synchron). Neue Mappings → in die JSON eintragen, nicht in den
> Code. Beide `über`-Regexes nutzen Unicode-Lookbehind (vorher ASCII-`\b` →
> korrumpierte `Räuber`→`Räüber`). **Bekannte Lücke geschlossen (2026-06-21):** Die
> `UBER_COMPOUND_RE` matcht nur `Uber...` (fehlender Umlaut), NICHT `Ueber...`
> (transliteriert mit „e"); deshalb fehlten `Ueberwachungskameras`/`Uebernahme`/
> `Aenderung`-Komposita als Vollwort → +96 Mappings ergänzt. **Wichtig:** `fix-umlaut`
> + `audit` melden NUR Wörter, die in der Map stehen — neue KI-Batches mit einem
> **Gap-Scan** (DE-Felder gegen Translit-Morpheme, gegen Map abgeglichen) prüfen,
> sonst bleiben unbekannte Transliterationen unentdeckt. Detail: Memory `translit-tooling`.

Briefings: `data/incident-candidates/_enrichment-briefing.md` (Abschnitt 1b
Datums-Verifikation), `_timeline-briefing.md`.

## 📜 Übergabe-Historie (neueste zuerst)
- **#12** 2026-08-07 → `docs/planung/übergabe-2026-08-07-smart-char-sweep.md` — **Korpusweiter Smart-Char-Sweep** (743 Files, 7776 Ersetzungen, neues Tool `normalize-smart-chars.js`), **Atom-Feed-Fix** (war seit Bilingual-Migration inhaltsleer: leere Titel, `undefined — undefined`, ungültiges RFC3339), **erster korpusweiter Validator-Vollscan** → 463 Files / 606 ERRORs aufgedeckt (neue Top-Prio), Worktree-Cleanup 6,9 MB → 4 KB, 2 Commits
- **#11** 2026-06-26 → `docs/planung/übergabe-2026-06-26-sev2-offensive.md` — **Reverse-TL-Feature KOMPLETT: 2457/2457 = 100.0 %** — 22 TL-Wellen 46–67 (+519, Sev-2-Block 46–65 +472, Sev-1 66–67 +47; Sev-5..1 alle abgearbeitet) + **alle 10 needs-human-Fälle per Recherche-Workflow geklärt** (10/10 adversarial verifiziert; prabowo→Anies, ultraman→Hangzhou/Acgnai, devternity→Lettland, perspective-api→UW/USA, grok/hmrc/bradford/iphone/lieferdrohne/tesla-burger-king korrigiert). Neues Tooling `scripts/validate-timelines.js` (Pre-Commit-Validator, Morphem-Gap-Scan); Korpus-Begriffe harmonisiert (Gender/LGBTQ/Due-process); WebSearch durchgehend, 0 Stalls, Audit 0; Slug/@id stabil (correctionNote wo abweichend), ~45 Commits gepusht
- **#10** 2026-06-25 → `docs/planung/übergabe-2026-06-25-sev3-abschluss-wellen-34-45.md` — **12 Sev-3-TL-Wellen 34–45** (+288, TL 66.7→**78.5 %**), **Sev-3-Block abgeschlossen** (Sev-5/4/3 alle ~100 %), Prompt-Härtung drückte Translit-Nacharbeit auf ~0, Validator um @id/Chronologie/Em-Dash erweitert, Map 2903→2951, User-Faktenkorrektur New-Orleans-6:1, korpusweiter Smart-Char-Befund (789 Files), 12+ Commits gepusht
- **#9** 2026-06-21 → `docs/planung/übergabe-2026-06-21-sev3-wellen-24-33-und-websearch-vorfall.md` — **10 weitere Sev-3-TL-Wellen 24–33** (+240, TL 57.0→**66.7 %**, kumuliert 17–33 = +407), WebSearch-Ausfall-Vorfall (Welle 26 verworfen + frisch wiederholt), laufende Translit-Map-Pflege (2870→2903), 19 Commits gepusht
- **#8** 2026-06-21 → `docs/planung/übergabe-2026-06-21-sev3-wellen-17-23-und-translit-luecke.md` — **7 Sev-3-TL-Wellen 17–23** (+167, TL 50.2→**57.0 %**) via Workflow-Tool + adversariale Verify (echte Faktenfehler gefangen), korpusweiter Translit-Map-Lückenschluss (+96, Map 2870), 1 Fehlzuordnung (prabowo) zurückgehalten
- **#7** 2026-06-19 → `docs/planung/übergabe-2026-06-19-sev3-offensive-und-translit-sweep.md` — **16 Sev-3-TL-Wellen** (+256, TL 39.8→**50.2 %**, 50%-Marke), korpusweiter Transliterations-Sweep (~1300 Files, 2774 Mappings, `über`-Regex-Bugfix), Career-Pilot (Negativ-Befund), Radar-Check
- **#6** 2026-06-18 → `docs/planung/übergabe-2026-06-18-tl-offensive-und-frontend.md` — TL 11.9→39.8 % (Sev-5+Sev-4 zu 100 %), Brasilien-Dedup, Frontend-Lite-Bundle
- **#5** 2026-06-06 → `docs/planung/übergabe-2026-06-06-batch-c.md` — Batch C, 2154→2458
- **#4** 2026-06-06 → `docs/planung/übergabe-2026-06-06-batch-b.md` — Batch B, 1304→2154
- **#3** 2026-06-03 → `docs/planung/übergabe-2026-06-03-aiaaic-import-und-quick-wins.md` — Batch A + Quick Wins, 666→1304
- **#2** 2026-06-01 → `docs/planung/übergabe-2026-06-01-research-pipeline-und-600er-rutsch.md` — Pipeline + 600er, 274→601
