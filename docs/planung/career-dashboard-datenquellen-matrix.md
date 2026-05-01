# Career Dashboard – Datenquellen-Matrix (V0.1)

**Kontext:** Arbeitsdokument für Item 99 (Konzeptphase Career Dashboard), Punkt 1 *Datenquellen-Recherche*. Gehört zu Items 94–99 in [phase-2-career-dashboard.md](phase-2-career-dashboard.md).

**Zweck:** Pro Land erfassen, welche nationale Behörde welche Arbeitsmarktdaten öffentlich bereitstellt, in welchem Format, unter welcher Lizenz, mit welchem KI-Bezug.

**Hinweis zum KI-Bezug:** Nur sehr wenige nationale Arbeitsämter publizieren heute dedizierte "KI-Exposition"- oder "Automatisierungsrisiko"-Metriken. Der Regelfall ist: Land liefert **Beschäftigungsdaten pro Beruf/Branche**, und wir mappen diese gegen etablierte KI-Exposure-Scores (OECD, ILO, Frey/Osborne, Felten/Raj/Seamans). Das ist in der Matrix-Spalte "KI-Bezug" dokumentiert.

---

## Globale / supranationale Quellen (Baseline für alle Länder)

| Quelle | Scope | Format | Lizenz | KI-Bezug |
|---|---|---|---|---|
| **OECD Employment Outlook / OECD.Stat** | 38 OECD-Mitglieder | API (SDMX-JSON), Bulk-CSV | OECD Terms & Conditions (frei für nicht-kommerzielle Nutzung mit Attribution) | Ja — OECD hat eigene AI-Exposure-Studien (Georgieff/Milanez 2021, Lassébie/Quintini 2024) |
| **ILO ILOSTAT** | ~190 Länder | API (REST), Bulk-CSV | CC BY 4.0 | Indirekt — ISCO-basierte Beschäftigungsdaten, keine eigene AI-Metrik |
| **Eurostat** | EU-27 + EFTA + Kandidaten | API, Bulk-TSV/CSV | Commission Decision 2011/833/EU (frei mit Attribution) | Indirekt — LFS (Labour Force Survey) nach NACE/ISCO |
| **CEDEFOP Skills Forecast** | EU-27 | Interaktiv + CSV-Export | CEDEFOP Terms (frei mit Attribution) | Ja — Skills-Forecast adressiert Technologie-Impact |
| **WEF Future of Jobs Report** | ~50 Länder (survey-basiert) | PDF + Datentabellen | CC BY-NC-ND 4.0 | Ja — Kern-Quelle für Disruption-Erwartungen |

---

## Länder-Matrix (Top-20)

### OECD-Kern (hohe Datenqualität erwartet)

| # | Land | Behörde(n) | URL | Format | Lizenz | KI-Bezug |
|---|---|---|---|---|---|---|
| 1 | **DE** | Bundesagentur für Arbeit, Destatis, IAB | statistik.arbeitsagentur.de, destatis.de, iab.de | CSV, XLSX, API (Destatis GENESIS) | DL-DE BY 2.0 (frei mit Attribution) | IAB publiziert "Substituierbarkeitspotenzial" — direkt AI/Automation-relevant |
| 2 | **US** | Bureau of Labor Statistics (BLS), O*NET | bls.gov, onetonline.org | CSV, API, Bulk-Files | US-Government Works (gemeinfrei) | O*NET liefert "Work Activities" → Basis für Felten/Frey/Osborne-Scores |
| 3 | **UK** | Office for National Statistics (ONS) | ons.gov.uk | CSV, API | OGL v3 (Open Government Licence) | ONS-Studie "The probability of automation" (2019) |
| 4 | **FR** | DARES, France Travail (ex-Pôle emploi), INSEE | dares.travail-emploi.gouv.fr, francetravail.fr, insee.fr | CSV, API | Etalab Open Licence 2.0 | France Stratégie + DARES publizieren regelmäßig zu "transformation numérique" |
| 5 | **JP** | MHLW, MIC Statistics Bureau (e-Stat) | mhlw.go.jp, e-stat.go.jp | CSV, Excel, API | Government of Japan Standard Terms of Use (CC BY 4.0 kompatibel) | METI/RIETI-Studien zu Automation, nicht MHLW-Kern |
| 6 | **CA** | Statistics Canada, ESDC | statcan.gc.ca, jobbank.gc.ca | CSV, API | Statistics Canada Open Licence | StatCan hat AI-Exposure-Indexierung auf NOC-Basis (2023) |
| 7 | **AU** | Jobs and Skills Australia, ABS | jobsandskills.gov.au, abs.gov.au | CSV, API | CC BY 4.0 | JSA publiziert "AI and the Australian labour market" (2024) |
| 8 | **ES** | SEPE, INE | sepe.es, ine.es | CSV, XLSX, API (INE) | Aviso Legal INE (frei mit Attribution) | Indirekt — EPA (Encuesta Población Activa) |
| 9 | **IT** | ANPAL, ISTAT, INAPP | anpal.gov.it, istat.it, inapp.gov.it | CSV, API (I.Stat) | CC BY 3.0 IT | INAPP-Studien zu "rischio automazione" |
| 10 | **NL** | CBS, UWV | cbs.nl, uwv.nl | CSV, API (StatLine OData) | CBS Open Data | CBS hat "Risico op automatisering"-Erhebung |
| 11 | **SE** | SCB, Arbetsförmedlingen | scb.se, arbetsformedlingen.se | CSV, API (PxWeb) | CC0 1.0 | Arbetsförmedlingen "Yrkeskompassen" inkl. Digitalisierungsrisiko |
| 12 | **KR** | KOSIS, KEIS | kosis.kr, keis.or.kr | CSV, Excel, API (KOSIS) | KOGL Type 1 (frei mit Attribution) | KEIS publiziert AI-Impact-Reports (koreanisch) |
| 13 | **CH** | SECO, BFS | seco.admin.ch, bfs.admin.ch | CSV, API | OGD CH (frei mit Attribution) | BFS hat Digitalisierungs-Indikatorensystem |
| 14 | **AT** | AMS, Statistik Austria | ams.at, statistik.at | CSV, API (OGD Austria) | CC BY 4.0 | AMS "Qualifikationsbarometer" mit Technologie-Komponente |
| 15 | **MX** | INEGI, STPS (ENOE) | inegi.org.mx, stps.gob.mx | CSV, API | Términos de Libre Uso INEGI (frei mit Attribution) | Kein dediziertes AI-Framework, ENOE-Rohdaten verfügbar |

### Schwellenländer / Rest der Welt (Datenqualität variabel)

| # | Land | Behörde(n) | URL | Format | Lizenz | KI-Bezug |
|---|---|---|---|---|---|---|
| 16 | **BR** | IBGE, Ministério do Trabalho (CAGED/RAIS) | ibge.gov.br, gov.br/trabalho | CSV, API (SIDRA) | Creative Commons BR (frei mit Attribution) | IPEA-Studien (Think-Tank), nicht Ministerium direkt |
| 17 | **IN** | MOSPI (PLFS), Ministry of Labour | mospi.gov.in, labour.gov.in | PDF-Report + Unit-Level-Microdata (Anfrage) | Government of India Open Data Licence (CC BY 4.0) | NITI Aayog AI-Strategie-Dokumente, keine Arbeitsmarkt-spezifische Metrik |
| 18 | **CN** | National Bureau of Statistics (NBS) | stats.gov.cn | Jahrbücher (PDF), begrenzt CSV, kaum API | Restriktiv, inoffiziell | Kein offenes AI-Impact-Framework |
| 19 | **ID** | BPS (Statistics Indonesia) | bps.go.id | CSV, XLSX, API | Free-to-use mit Attribution | Sakernas (Labour Force Survey) — kein AI-Bezug |
| 20 | **ZA** | Statistics South Africa, DEL | statssa.gov.za, labour.gov.za | XLSX, PDF, begrenzt API | StatsSA-Terms (frei mit Attribution) | QLFS-Daten, kein AI-Framework |

---

## Erkenntnisse aus Matrix-V0.1

**1. Keine einheitliche "AI-Exposure"-Metrik weltweit.**
Nur ca. 6–8 Länder (DE/IAB, UK/ONS, CA/StatCan, AU/JSA, NL/CBS, SE, FR, + OECD-übergreifend) publizieren eigene, staatlich autorisierte KI-Automatisierungs-Indizes. Alle anderen liefern "nur" Beschäftigungs-/Berufsdaten.

**2. Mapping-Strategie ist unausweichlich.**
Der Dashboard-Score muss ein **mehrschichtiges Modell** werden:
- **Schicht A (primär):** Nationaler Index, wenn verfügbar (priorisieren)
- **Schicht B (fallback):** OECD Exposure Score × nationale Beschäftigungsstruktur
- **Schicht C (letzter fallback):** ILO-Schätzung × ISCO-Mapping

Pro Land muss transparent gemacht werden, welche Schicht greift → direkte Anknüpfung ans Bias-Transparency-Konzept (Item 99 Punkt 4).

**3. Lizenz-Situation ist überwiegend gutmütig.**
Fast alle OECD-Länder nutzen CC-BY-kompatible oder vergleichbare offene Lizenzen. Attribution-Pflicht als einziges wiederkehrendes Muster.
**Ausnahme:** WEF (NC-ND), CN (keine klare offene Lizenz), IN Microdata (formeller Antragsprozess).

**4. Format-Heterogenität ist der echte Aufwand.**
15 der 20 Länder haben eine API; 5 liefern nur Bulk-Dateien oder PDF. Für Phase-2-MVP realistisch: **Zielstart 8 Länder mit API-Zugang** (DE, US, UK, FR, CA, NL, SE, AU), Rest nachziehen.

---

## Entschieden

### 2026-05-01 · MVP-Zielmenge = 8 API-Länder

Startmenge für die erste umsetzbare Iteration: **DE, US, UK, FR, CA, NL, SE, AU**.
Auswahlkriterium: dokumentierter API-Zugang + offene Lizenz + (überwiegend) eigener nationaler KI-Exposure-Index. Restliche 12 Länder der Matrix werden in späteren Iterationen nachgezogen.

---

## Offene TODOs (vor Umsetzung zu klären)

### TODO-1 · Beruf-Taxonomie

ISCO-08 als Lingua Franca + nationale Crosswalks (DE KldB-2010, US SOC-2018, UK SOC-2020, FR ROME, CA NOC-2021, NL ISCO-direct, SE SSYK-2012, AU ANZSCO)?

Alternative: nur ISCO-08, nationale Codes verwerfen — Verlust an Granularität, aber massive Vereinfachung.

**Entscheidungsbedarf:** Granularität vs. Wartungsaufwand.

---

### TODO-2 · Update-Rhythmus

- **Jährlich** = passt zu Report-Zyklen (WEF-Future-of-Jobs, OECD Employment Outlook), niedriger Wartungsaufwand, aber Daten können bis zu 12 Monate veraltet sein.
- **Quartalsweise** = aktueller, aber viele nationale Quellen aktualisieren selbst nicht quartalsweise → Schein-Aktualität.
- **Hybrid** = Beschäftigungs-Microdata quartalsweise (wo verfügbar), Score-Modell jährlich.

**Entscheidungsbedarf:** Was ist ehrlich kommunizierbar — und was rechtfertigt der Pflegeaufwand für eine Solo-Betreiber-Site?

---

### TODO-3 · Datenarchitektur (Build-time vs. Client-side)

- **Build-Time-Bundle** (empfohlen): Skript zieht alle APIs, schreibt statische JSON-Files in `data/career/` — passt zum bestehenden Stack (pure HTML/CSS/JS, kein Build-Step im Browser, GitHub Pages kompatibel). Cache-busting via `?v=`. Nachteil: Daten nur so frisch wie der letzte Lauf des Bundling-Scripts.
- **Client-side fetch**: Daten werden im Browser direkt von BLS/ONS/etc. nachgeladen. Vorteil: Live-Daten. Nachteil: CORS-Probleme bei vielen Behörden-APIs, instabile Latenz, Abhängigkeit von externer Verfügbarkeit.

**Entscheidungsbedarf:** Build-time ist klar überlegen für diesen Stack — aber explizit bestätigen, weil es Konsequenzen für TODO-2 hat (Update-Rhythmus = Lauf-Rhythmus des Bundling-Scripts).

---

*Dokument erstellt: 2026-04-21*
*Version: 0.1 (Arbeitsstand)*
*Status: Ideensammlung, keine Umsetzungsfreigabe — Matrix-Einträge ungeprüft, URLs und Lizenzen vor Umsetzung verifizieren*
