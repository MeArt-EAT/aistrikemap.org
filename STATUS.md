# 📍 AIStrikeMap — AKTUELLER STAND

> **Diese Datei zuerst lesen.** Sie zeigt immer den aktuellen Projektstand.
> Bei jeder Session aktualisieren. Details in `docs/planung/übergabe-*.md`.

---

## ⏱️ STAND: 2026-09-25

| | |
|---|---|
| 📊 **Bestand** | **2453 Incidents** (4 Dubletten zusammengelegt) · **2453 mit Reverse-TL (100.0 %)** ✅ · **Validator korpusweit 0 ERRORs** ✅ · **0 Timelines ohne Quellen** ✅ · **0 Audit-Findings** · Anzeigetext korpusweit ä/ö/ü/ß (Translit-Map **2951** Mappings) · **Satzzeichen korpusweit ASCII** (0 Smart-Chars) · Lite-Bundle 7.9 MB (1.6 MB gzip) |
| 🔢 **Übergabe-Nr** | **#13** (2026-09-25) · Branch `claude/stoic-ride-lt1b0j`, **noch nicht auf `main`** |
| 🚩 **Phase** | 1 — Datenausbau (Items 1–93) |
| ✅ **Zuletzt fertig** | **(2026-09-26, Übergabe #13, Nachtrag 2)** **Quellen-Offensive komplett: alle 89 quellenlosen Timelines faktengeprüft und belegt** (Wellen 1-7). In praktisch **jedem** File echte Fehler, darunter erfundene Berichte, Zitate, Zahlen, Folgen, ein nicht existierendes System ('TOSCA') und zwei komplett unbelegte Kernbehauptungen (kolumbien, spanien-arbeitsmarkt -> neu aufgebaut). 4 Dubletten zusammengelegt (2457 -> 2453), 20 Titel mit correctionNote an Belege angepasst. **Zwei weitere Werkzeug-Bugs:** 'lander' (Eigenname Brad Lander) und **URL-Zerstörung** durch den Umlaut-Fixer (31 Links, z.B. lto.de/.../hintergründe) - behoben, Validator prüft jetzt Umlaute in Quellen-URLs. — **(2026-09-25, Übergabe #13, Nachtrag)** 11 frühe Seed-Incidents faktengeprüft + vollständig belegt - in **allen 11** echte Faktenfehler gefunden und korrigiert (Commit `5367c4e`). — **(2026-09-25, Übergabe #13)** **Kausale Phasen-Regel + Validator korpusweit 0 ERRORs (2457/2457).** „Genau 1 event" ersetzt durch `checkPhaseOrder`: mind. 1 event, vor dem ersten nur Vorbedingung, nach dem letzten nur Folgen, I/D als gemeinsamer Block. Deckte **68 bisher unentdeckte Fehletiketten** auf (v.a. Folgen wie UN-Bericht/Bußgeld als `doctrine` nach dem Vorfall). 7 mechanisch getauscht, **69 per Workflow korrigiert** (18 Fix- + 18 adversariale Verify-Agenten, 68/69 direkt bestätigt, 1 nach Reparatur, 0 needs-human; 13 inhaltliche Änderungen alle WebSearch-belegt, 0 Felder außerhalb der TL verändert). **Bonus-Bug:** `fix-umlaut` enthielt `falle→fälle`/`fallen→fällen` (echte Wörter!) und zerstörte bei jedem Lauf korrektes Deutsch, auch in Titeln („Biometriedatenbanken fällen nach Taliban-Machtübernahme"); behoben + **114 Ersetzungen in 43 Files** repariert. Frontend im Browser geprüft. — **(2026-08-07, Übergabe #12)** **Korpusweiter Smart-Char-Sweep + Atom-Feed-Fix.** 743 Files auf ASCII-Satzzeichen normalisiert (7776 Ersetzungen: 6818 ` — `, 531 ` – `, 204 Bis-Striche, 146 typografische Quotes, 55 **unsichtbare Soft-Hyphens U+00AD**, 7 kaputte ` —,`, 6 Ellipsen). Neues Tooling `scripts/normalize-smart-chars.js` (idempotent, `--dry-run`, Text-Level statt parse/stringify → minimaler Diff, JSON-Parse-Gate vor UND nach der Ersetzung). Verifikation: 743/743 Files mit identischem Textkern gegen HEAD, **0 Datumsfelder verändert**, Audit 0, Validator 0 Smart-Char-Fehler, Frontend live geprüft (2457 geladen, Detail-Panel + Permalink OK). **Entscheidung: i18n/*.json + *.html behalten den Em-Dash** (handgesetzter Hausstil „Stufe 1 — Gemeldet", vom Validator nicht erfasst). **Bonus-Fund: Atom-Feed war seit der Bilingual-Migration inhaltsleer** (`<title> [ESKALIEREND]</title>`, `undefined — undefined`, ungültiges RFC3339) — `generate-feed.js` las noch `s.name`/`newest.title` statt `*_de`; behoben. Stale Worktrees entfernt (6,9 MB → 4 KB). — **(2026-06-26, Übergabe #11)** **Reverse-TL-Feature KOMPLETT — 2457/2457 = 100.0 %.** 22 TL-Wellen 46–67 (+519, Sev-2-Block 46–65 +472, Sev-1 66–67 +47; Sev-5..1 alle abgearbeitet) + **alle 10 needs-human-Fälle geklärt** (Recherche-Workflow: prabowo→Anies Baswedan, ultraman→Hangzhou/Acgnai, devternity→Lettland, perspective-api→Univ. of Washington/USA, grok/hmrc/bradford/iphone/lieferdrohne/tesla-burger-king korrigiert; 10/10 adversarial verifiziert). Workflow-Methode (24 Cases/Welle, Gen→adversariale Verify), WebSearch durchgehend, 0 Stalls. **Neues Tooling: `scripts/validate-timelines.js`** (Pre-Commit-Validator). Slug/@id bei Korrekturen unverändert (Permalink; correctionNote in metadata wo Slug inhaltlich abweicht). Audit durchgehend 0. |
| ➡️ **Nächster Schritt** | **PR #93 mergen** (Branch `claude/stoic-ride-lt1b0j`, grün). Danach optional: **569 einzelne TL-Einträge ohne Quelle** in sonst belegten Timelines (vorher 943) - gleiche Methode, aber geringere Fehlerquote zu erwarten, da diese Files schon teilweise belegt sind. Weitere Fronten: Career-Daten via Dataset-Download · AIAAIC Batch D (pre-2015) · `needs-review`-Cases (~180) · alte Koordinaten-/Titel-Drift in `data/index.json` (nur Hilfsskripte betroffen). |
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
6. ✅ **Timeline-Validator korpusweit — ERLEDIGT (2026-09-25, Übergabe #13): 0 ERRORs.**
   Verlauf: 606 → 166 (Zeiträume + Granularität, `0f93881`) → 152 (14 Datenfehler,
   `15543ad`) → 80 (neue Phasen-Regel, `707d2c5`) → **0** (76 Files korrigiert,
   `05a14bc`). **Phasen-Regel jetzt kausal** (`checkPhaseOrder`): mind. 1 `event`,
   vor dem ersten nur `infrastructure`/`doctrine`, nach dem letzten nur
   `consequences`, dazwischen alles; I/D als gemeinsamer Vorbedingungs-Block,
   dort entscheidet die Chronologie. Die Modellfrage aus #12 ist damit
   beantwortet: lockern **und** die bis dahin ungeprüfte Reihenfolge prüfen.
   Regel steht auch im Briefing. **Gate ab jetzt korpusweit**, nicht nur pro Welle:
   `ls data/incidents/*.json | sed 's#.*/##; s#\.json$##' | node scripts/validate-timelines.js --stdin`
7. ✅ **Vorbestehende Faktenbefunde (12 Files) — ERLEDIGT (2026-09-25, Commit `5367c4e`).**
   11 Seed-Incidents korrigiert (Mali war durch den fallen-Fix erledigt), jeder TL-Eintrag
   belegt, 3 adversariale Prüfer + Nachbesserungsrunde. **In allen 11 Files echte
   Faktenfehler**, u.a. Schweden-Test 2018 statt 2019, CENTAUR ≠ Grenzroboter, 464 % global
   statt Brasilien, „erste DSGVO-Strafe weltweit" → Schwedens erste.
8. ✅ **Quellenlose Timelines - ERLEDIGT (2026-09-26): 89 -> 0.** Details Übergabe #13, Nachtrag 2. Vorher: 943/10.923 TL-Einträge ohne Quelle
   (425 Files), davon **89 Files komplett ohne**. Nach der Erfahrung aus Front 7 ist dort
   mit einer hohen Fehlerquote zu rechnen. Methode wie Front 7.

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
>
> 🐛 **Echtwort-Kollision (behoben 2026-09-25, #13):** Die fest eingebaute FIX_MAP
> enthielt `falle→fälle` und `fallen→fällen`. Beides sind echte Wörter, der Fixer
> hat damit korpusweit korrektes Deutsch zerstört (114 Stellen repariert). **Regel:
> Umlaut-lose Schlüssel ohne ae/oe/ue nur aufnehmen, wenn sie kein echtes Wort
> sind.** Seltene Restkandidaten (`verhangen`, `gestutzt*`, `wahrend`, `lander`)
> stehen in Übergabe #13. Nach `fix-umlaut` auf „Per file" achten: Der Fixer
> kann frische Agenten-Korrekturen still zurückdrehen.

Briefings: `data/incident-candidates/_enrichment-briefing.md` (Abschnitt 1b
Datums-Verifikation), `_timeline-briefing.md`.

## 📜 Übergabe-Historie (neueste zuerst)
- **#13** 2026-09-25 → `docs/planung/übergabe-2026-09-25-phasen-regel-und-fallen-bug.md` — **Kausale Phasen-Regel** statt „genau 1 event" (`checkPhaseOrder`), deckt 68 unentdeckte Fehletiketten auf; **76 Files korrigiert → Validator korpusweit 0 ERRORs (2457/2457)** (Workflow: 18 Fix- + 18 adversariale Verify-Agenten, 68/69 direkt bestätigt, 0 needs-human); **Bug im Umlaut-Fixer** (`fallen→fällen`, echte Wörter) behoben + 114 Stellen in 43 Files repariert; Browsertest in der Cloud via npm-Leaflet-Umleitung (unpkg gesperrt); 4 Commits auf `claude/stoic-ride-lt1b0j`
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
