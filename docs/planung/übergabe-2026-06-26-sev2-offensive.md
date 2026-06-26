# Übergabe #11 — Sev-2-Block ABGESCHLOSSEN (Wellen 46–65)

**Datum:** 2026-06-26
**Vorgänger:** #10 (2026-06-25, Sev-3-Block abgeschlossen, TL 78.5 %)
**Bestand danach:** 2457 Incidents · **2400 mit Reverse-TL (97.7 %)** · 0 Audit-Findings

---

## Zusammenfassung

Nach Abschluss des Sev-3-Blocks (#10) wurde die **Sev-2-Ebene** komplett
abgearbeitet — gleiche erprobte Workflow-Methode (24 Cases/Welle, Stufe 1
WebSearch-grounded Generieren → Stufe 2 unabhängige adversariale Verify).
**20 Wellen (46–65), +472 Reverse-Timelines, TL-Quote 78.5 → 97.7 %** (80%-Marke
in Welle 47, 85%- in 52, 90%- in 58). **Sev-2 ohne TL: 480 → 8** (alle 8 sind
needs-human-Fälle) — **der Sev-2-Block ist damit abgeschlossen; Sev-5/4/3/2 alle
~100 %.** Verbleibend gesamt ohne TL: 8 Sev-2-needs-human + 48 Sev-1 + prabowo.

| Welle | Cases | pass / fix / needs-human | Δ TL | TL gesamt | Besonderheit |
|---|---|---|---|---|---|
| 46 | 24 | 17 / 7 / 0 | +24 | 1952 (79.4 %) | Faktenfehler cosmos-magazine Grant-Datum 2023→Feb 2024 |
| 47 | 24 | 21 / 2 / 1 | +23 | 1975 (80.4 %) | needs-human: ultraman (2 Fälle vermischt) |
| 48 | 24 | 13 / 9 / 2 | +22 | 1997 (81.3 %) | needs-human: devternity (Land), perspective-api (Urheber); inline-Fix ubisoft La Forge 2011→2016 |
| 49 | 24 | 15 / 9 / 0 | +24 | 2021 (82.3 %) | inline-Fix the-brutalist „Davids"→„David Jancso" (9x); Gender-Begriff harmonisiert |
| 50 | 24 | 16 / 7 / 1 | +23 | 2044 (83.2 %) | needs-human: grok (überzogene MeitY-/Strafe-/§69A-Behauptungen); inline-Fix these-nudes Datum |
| 51 | 24 | 20 / 4 / 0 | +24 | 2068 (84.2 %) | inline-Fix kolumbien-rappi startDate 2024→2023-10 |
| 52 | 24 | 17 / 7 / 0 | +24 | 2092 (85.1 %) | inline-Fix greta-thunberg-deepfake Kanalname „Snicklick"→„Snicklink" |
| 53 | 24 | 8 / 15 / 1 | +23 | 2115 (86.1 %) | needs-human: hmrc-quantexa (Datum 2024→2026 + Anbieter vermischt); inline-Fix ring-tuerklingel-Distanz, bildgebung-Quelle |
| 54 | 24 | 11 / 11 / 2 | +22 | 2137 (87.0 %) | needs-human: bradford-illustrator (erfundene doctrine-Details), iphone-face-id (erfundene Ethnie); inline-Fix buckingham-Markt-Zeitraum |
| 55 | 24 | 14 / 9 / 1 | +23 | 2160 (87.9 %) | needs-human: amazon-lieferdrohne (Phasen-Verstoss); apple-zwillinge Test-Attribution praezisiert (korrigiert, nicht zurueckgerollt) |
| 56 | 24 | 18 / 5 / 1 | +24 | 2184 (88.9 %) | chatgpt-waffen-kinder USA-Today-Provenienz -> Harvard Williams Lab korrigiert (Identitaet korrekt, nur Quelle); inline-Fix bing-disney-Datum; Validator-Bugfix (beschluss) |
| 57 | 24 | 19 / 5 / 0 | +24 | 2208 (89.9 %) | sauberster Lauf: 0 needs-human, 0 Faktenfehler |
| 58 | 24 | 20 / 4 / 0 | +24 | 2232 (90.8 %) | 90%-Marke; inline-Fix appen 26%=Bruttomarge, google-ad-exchange-Datum |
| 59 | 24 | 16 / 8 / 0 | +24 | 2256 (91.8 %) | 0 needs-human, 0 Faktenfehler |
| 60 | 24 | 20 / 4 / 0 | +24 | 2280 (92.8 %) | inline-Fix hello-barbie/knightscope/mcdonalds-IBM; fix-umlaut 182 Reste (1 Gen-Agent transliterierte stark) + 4 Map-Lücken; Validator-Upgrade |
| 61 | 24 | 12 / 12 / 0 | +24 | 2304 (93.8 %) | 0 needs-human, 0 Faktenfehler |
| 62 | 24 | 19 / 5 / 0 | +24 | 2328 (94.7 %) | Gender-/Due-process-Begriffe korpusweit harmonisiert (length_ratio) |
| 63 | 24 | 15 / 9 / 0 | +24 | 2352 (95.7 %) | inline-Fix bert-co2 Einheitenverwechslung (313 short tons -> 284 t), studie-Jahr 2024->2025 |
| 64 | 24 | 20 / 4 / 0 | +24 | 2376 (96.7 %) | 0 needs-human, 0 Faktenfehler |
| 65 | 24 | 17 / 7 / 0 | +24 | 2400 (97.7 %) | FINAL - Sev-2 abgeschlossen; 0 needs-human |

**WebSearch in allen 20 Wellen durchgehend verfügbar** (6/6 Gen + 6/6 Verify, kein
Ausfall). Audit nach jeder Welle 0 Findings (length_ratio-False-Positives bei Gender-,
LGBTQ- und Due-process-Begriffen → auf Korpus-Standards „Geschlechtergleichheit"/
„LGBTQ-Rechte"/„Faires Verfahren" harmonisiert). Translit-Map unverändert 2951
(Welle 60 ein Ausreißer mit 182 Resten, alle gefixt + 4 Map-Lücken inline).

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
überzogene Behauptungen. **Pro Welle ~1 needs-human** (W47/48/50/53/54/55). 8 Fälle
waren nicht mechanisch fixbar (TL zurückgerollt, **bleiben ohne TL**):

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
5. **`uk-...-hmrc-quantexa`** (W53) — **falsches Datum + vermischte Anbieter**: Der
   HMRC-Quantexa-Vertrag (175 Mio GBP) wurde erst **14.5.2026** bekanntgegeben, nicht
   2024 (Slug/@id/startDate falsch). Die 4,6-Mrd-Mehreinnahmen 2024/25 gehören zur
   Connect-Plattform + Palantir, nicht Quantexa; „Microsoft generative AI" unbelegt.
   → auf 2026-05-14 umdatieren + Slug anpassen ODER auf Connect-Story umstellen.
6. **`uk-...-bradford-literature-festival`** (W54) — **erfundene doctrine-Details**:
   Die doctrine-Phase behauptet eine beauftragte Agentur + Brief, die der Quelle
   widersprechen. Belegt: KI nur für frühe Source-Bilder von 2 der 6 Motive, dann von
   festival-eigenen Illustratoren entwickelt. Kern-Event (Chris Mould zog zurück;
   Festival entschuldigte sich) korrekt. → doctrine-Phase quellengedeckt neu schreiben.
7. **`usa-...-iphone-x-face-id`** (W54) — **erfundene Ethnie über reale Privatpersonen**:
   Familie durchgehend als „libanesisch-amerikanisch" bezeichnet (description/location/
   event, DE+EN), unbelegt. Reale Namen Attaullah Malik / Sana Sherwani / Ammar Malik
   (Staten Island) sind süd-/zentralasiatisch. Ursprung: AIAAIC-Mislabel „global-arab-
   boy". Personenbezogen-sensibel → Ethnie-Zuschreibung entfernen/prüfen, nicht autonom.
8. **`usa-...-amazon-lieferdrohne`** (W55) — **Phasen-Verstoß**: doctrine (2022) liegt
   NACH event (2021-06). Absturz real Juni 2021; der doctrine-Eintrag beschreibt einen
   Zeitraum NACH dem Ereignis. Kein +1-Tag-Fix — Datum UND Inhalt der doctrine-Phase
   müssten auf einen echten Vorläufer-Zeitraum umgeschrieben werden. → neu strukturieren.

Diese 8 + `prabowo` (aus #8) sind in STATUS.md unter „Offene Fronten #2" als
needs-human-Sammelblock dokumentiert. **Empfehlung:** Diese Fälle sind echte
redaktionelle Entscheidungen (Außenwirkung auf aistrikemap.org) — bewusst NICHT
autonom entschieden. Für die laufenden Wellen via `grep -v` ausschließen.

**Verfeinerung der Handhabung (ab W55/56):** Wenn die **Fall-Identität korrekt** ist
und nur ein **klar belegtes, abgrenzbares Einzeldetail** falsch (Quellenzuschreibung,
Attribution), wird inline **korrigiert statt zurückgerollt** — Beispiele: `apple-face-id-
zwillinge` (Test-Attribution auf Mashable/BI-Faktenlage präzisiert), `chatgpt-waffen-
kinder` (unbelegte „USA Today"-Provenienz → belegte Harvard-Williams-Lab-Quelle). Nur
Identitäts-/Land-/Slug-/Fall-Vermischungs-Fehler bleiben echtes needs-human.

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
- **Validator-Verfeinerungen:** (W56) „beschluss" aus Verdachtsliste entfernt
  (korrektes Deutsch, ss nach kurzem Vokal); (W60) Umlaut-Gap-Scan von Ganzwort-
  Liste auf **Morphem-Teilstring** umgestellt — fängt jetzt Komposita wie
  `uebergibt`/`ueberfuehrt`/`ueberschaetzte`, die die alte Liste durchließ.
- **Translit-Ausreißer (W60):** Ein Gen-Agent transliterierte stark → 182 fix-umlaut-
  Ersetzungen + 4 unbekannte Map-Lücken inline. Lehre: fix-umlaut + Validator-Morphem-
  Scan + Doppel-Umlaut-Grep zusammen fangen es; einzeln nicht.
- **Korpus-Harmonisierungen (length_ratio-False-Positives):** Gender-Begriff →
  „Geschlechtergleichheit", LGBTQ → „LGBTQ-Rechte", Due process → „Faires Verfahren".
  Dies sind wiederkehrende Gen-Agenten-Varianten; pro Auftreten korpusweit vereinheitlicht.
- **Disk:** 20 Wellen = 240 Agenten → Workflow-Transcripts ~45 MB + Task-Outputs
  ~1.3 MB = ~46 MB. Grün (Warnschwelle 100 MB).

---

## Commits (gepusht)

```
ede9835  Add validate-timelines.js: Pre-Commit-Validator für Reverse-Timelines
cec5df9  Reverse-TL Sev-2 Welle 46: +24 (1952, 79.4 %)
58192e9  Reverse-TL Sev-2 Welle 47: +23 (1975, 80.4 %)
88d88aa  Reverse-TL Sev-2 Welle 48: +22 (1997, 81.3 %)
5d7c356  Übergabe #11 (Zwischenstand 46-48)
85ab914  Reverse-TL Sev-2 Welle 49: +24 (2021, 82.3 %)
bd4f716  Reverse-TL Sev-2 Welle 50: +23 (2044, 83.2 %)
b81dee1  Reverse-TL Sev-2 Welle 51: +24 (2068, 84.2 %)
0d55d48  Übergabe #11 erweitert (49-51)
436b9b0  Reverse-TL Sev-2 Welle 52: +24 (2092, 85.1 %)
377c228  Reverse-TL Sev-2 Welle 53: +23 (2115, 86.1 %)
e6b50f7  Reverse-TL Sev-2 Welle 54: +22 (2137, 87.0 %)
a721009  Übergabe #11 (52-54)
15d5b14  Reverse-TL Sev-2 Welle 55: +23 (2160, 87.9 %)
2fdaa58  Reverse-TL Sev-2 Welle 56: +24 (2184, 88.9 %)
a321016  Reverse-TL Sev-2 Welle 57: +24 (2208, 89.9 %)
870b40e  Übergabe #11 (55-57)
8ed0814  Reverse-TL Sev-2 Welle 58: +24 (2232, 90.8 %)
5870026  Reverse-TL Sev-2 Welle 59: +24 (2256, 91.8 %)
1b9e261  Reverse-TL Sev-2 Welle 60: +24 (2280, 92.8 %)
5703566  Harmonisiere LGBTQ-Begriff korpusweit
bb90975  Übergabe #11 (58-60)
888aa39  Reverse-TL Sev-2 Welle 61: +24 (2304, 93.8 %)
b5d12b3  Reverse-TL Sev-2 Welle 62: +24 (2328, 94.7 %)
848e2a8  Harmonisiere Gender-/Due-process-Begriffe korpusweit
751d78f  Reverse-TL Sev-2 Welle 63: +24 (2352, 95.7 %)
8064399  Reverse-TL Sev-2 Welle 64: +24 (2376, 96.7 %)
92d8230  Reverse-TL Sev-2 Welle 65 (FINAL): +24 (2400, 97.7 %) - Sev-2 abgeschlossen
```

---

## Nächster Schritt

Sev-2 ist abgeschlossen (Sev-5/4/3/2 alle ~100 %). Optionen:
- **Sev-1** (48 ohne TL, ~2 Wellen) → TL-Quote dann ~99,6 % (nur 8+1 needs-human offen).
  Gleiche Workflow-Methode + `validate-timelines.js`.
- ODER **8 Sev-2-needs-human + prabowo klären** (redaktionelle Entscheidungen):
  ultraman / devternity / perspective-api / grok / hmrc-quantexa / bradford /
  iphone-face-id / amazon-lieferdrohne.
- ODER korpusweiter Smart-Char-Sweep (789 Files), Career-Daten, AIAAIC Batch D.
