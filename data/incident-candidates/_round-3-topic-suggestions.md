# Round-3-Topic-Vorschläge — Coverage-Lücken-Analyse

Stand: 2026-06-01. Basis:
- 274 publizierte Incidents (`data/index.json`)
- ~120 Round-1-Kandidaten in 6 Regional-Buckets (`data/incident-candidates/*-round-1-agent-*.json`)
- 12 bereits konfigurierte Round-2-Cloud-Topics (`scripts/research-topics.json`)

---

## 1. Verteilung im Bestand (Incidents + Candidates kombiniert)

### Country-Cluster (Top, geschätzt aus Slugs + Candidate-Country-Feld)

| Cluster | Bestand (Incidents+Candidates) | Bemerkung |
|---|---|---|
| USA | ~80 | Stark übervertreten; weitere US-Only-Topics zurückhalten |
| Deutschland | ~9 | Solide Abdeckung Bestand + Round-1-EU |
| China + HK | ~12 | Round-2 China-Vertical adressiert |
| Indien | ~8 | Gute Basis, mehr Healthcare/Welfare möglich |
| Brasilien | ~9 | Stark durch Round-1-LATAM |
| UK | ~7 | Solide |
| Frankreich | ~6 | Solide |
| Israel/Palästina | ~7 | MENA-Round-1 stark |
| Russland | ~5 | Solide |
| Iran | ~4 | MENA-Round-1 deckt nach |
| Argentinien | ~6 | Round-1 stark |
| Saudi-Arabien, UAE, Türkei | je ~3-4 | OK |
| Kenia, Südafrika, Nigeria, Äthiopien | je ~3-5 | Afrika-Round-1 deckt |

### Country-Wüsten (0 oder 1 Eintrag und keine Round-1-Kandidaten)

- **Zentralasien**: KZ(1), UZ(1), TM(1); TJ/KG/MN komplett leer
- **Pazifik**: FJ, PG, SB, VU, WS, TO, KI komplett leer
- **Karibik**: DO, HT, JM, TT, BB komplett leer (nur CU 1)
- **Subsahara francophon**: ML, BF, NE, TD, CI, GA, CM komplett leer
- **Süd-Asien-Nische**: NP(1), BT(0), MV(1), LK(1)
- **Südosteuropa**: BG, RS(1), AL, MK, ME, BA(1), XK komplett oder fast leer
- **Andenstaaten**: BO, PY, UY, GY, SR komplett leer (PE/EC/VE durch Round-1 dabei)

### IncidentType-Verteilung (nur Bestand, 274 Cases)

| Type | Count | Anteil |
|---|---|---|
| surveillance | 141 | 51 % |
| political-pressure | 118 | 43 % |
| data-misuse | 110 | 40 % |
| discrimination | 74 | 27 % |
| censorship | 51 | 19 % |
| facial-recognition | 48 | 18 % |
| deepfakes | 42 | 15 % |
| predictive-policing | 29 | 11 % |
| labor-exploitation | 29 | 11 % |
| military-ai | 25 | 9 % |
| **autonomous-weapons** | **7** | **3 %** |

**Strukturelle Lücken:**

1. **autonomous-weapons** untervertreten — nur 7 Cases trotz aktiver Konflikte (Ukraine, Gaza, Myanmar, Sudan, Mali, Yemen). Round-2 deckt das ab, aber Round-3-Tiefenbohrung sinnvoll.
2. **predictive-policing** stagniert bei 29 — neue Wellen (Australien NSW, NL CAS, ES VioGén) nicht systematisch erfasst.
3. **labor-exploitation** untervertreten in Bezug auf Plattform-Gig-Workers außerhalb USA/Italien.
4. **Verticals fehlen komplett** als eigenständige Cluster:
   - Healthcare-AI (nur ~5 US-Fälle)
   - Insurance (nur 2 US-Fälle)
   - Schule/K-12 (nur ~3 Fälle, Round-2-Topic deckt nach)
   - Tax/Steuer-AI (0 dedizierte Fälle)
   - Sport / Schiedsrichter-AI (0)
   - Predictive-Maintenance-AI-Failures (0)
   - Crypto-AI-Scams (0 als Cluster)
   - Religion-spezifische Zensur (verstreut, kein Cluster)

### Jahres-Verteilung Candidates

- 2024: ~55 Round-1-Kandidaten (Schwerpunkt)
- 2025: ~30
- 2023: ~15
- 2018-2022: ~10 (Refer-Backs)
- 2026 (sehr frühe Erfassung): 3 Fälle

**Vor 2020 fast nichts.** Historische Tiefe (2015-2020) wäre für Doktrin/Infrastruktur-Ebene wichtig — nicht Round-3-Priorität, aber merken.

---

## 2. Top-30 Country × IncidentType-Buckets (Bestand+Candidates)

Diese Buckets sind voll und brauchen keine weitere Round-3-Vertiefung:

| Rang | Bucket | ~Count |
|---|---|---|
| 1 | US × surveillance | ~25 |
| 2 | US × discrimination | ~15 |
| 3 | US × data-misuse | ~14 |
| 4 | US × political-pressure | ~12 |
| 5 | US × facial-recognition | ~9 |
| 6 | CN × surveillance | ~8 |
| 7 | BR × facial-recognition | ~5 |
| 8 | IL × military-ai | ~5 |
| 9 | DE × surveillance | ~5 |
| 10 | IN × political-pressure | ~5 |
| 11 | RU × censorship | ~4 |
| 12 | UK × facial-recognition | ~4 |
| 13 | KE × labor-exploitation | ~4 |
| 14 | IR × surveillance | ~4 |
| 15 | AR × deepfakes | ~3 |
| 16 | FR × surveillance | ~3 |
| 17 | NG × deepfakes | ~3 |
| 18 | MX × deepfakes | ~3 |
| 19 | ZA × discrimination | ~3 |
| 20 | PS × military-ai | ~3 |
| 21 | SA × surveillance | ~3 |
| 22 | UAE × surveillance | ~3 |
| 23 | TR × deepfakes | ~3 |
| 24 | AU × predictive-policing | ~3 |
| 25 | NL × discrimination | ~3 |
| 26 | ET × political-pressure | ~3 |
| 27 | PK × surveillance | ~3 |
| 28 | KR × deepfakes | ~3 |
| 29 | CA × surveillance | ~2 |
| 30 | ES × discrimination | ~2 |

---

## 3. Round-3-Topic-Vorschläge (10 Stück)

Format: JSON-konform zu `scripts/research-topics.json`. Begründung jeweils über dem Block.

### Topic 1 — Zentralasien: KZ/UZ/TJ/KG/TM-Vertical

Begründung: Kompletter regionaler weißer Fleck. Russische + chinesische Überwachungstech wird massiv re-exportiert (SORM, Safe-City Huawei). Politische Sensitivität hoch (Andijan, Karakalpakstan, Pamir-Proteste).

```json
{
  "slug": "central-asia-surveillance-2023-2025",
  "title": "Zentralasien-Vertical: Überwachung und Repression (KZ/UZ/TJ/KG/TM)",
  "scope": "AI- und Biometrie-Einsatz in Kasachstan, Usbekistan, Tadschikistan, Kirgistan, Turkmenistan. Schwerpunkt: Safe-City-Programme von Huawei/Hikvision, russische SORM-Re-Exporte, Gesichtserkennung bei Protesten (Karakalpakstan 2022, Pamir 2022, Almaty Januar 2022), Internet-Shutdowns und Blogger-Verfolgung.",
  "region_hint": "KZ, UZ, TJ, KG, TM",
  "time_window": "2022-2025",
  "suggested_searches": [
    "Kazakhstan Sergek surveillance camera 2024",
    "Uzbekistan Safe City Huawei Tashkent 2024",
    "Tajikistan Pamir surveillance protest 2024",
    "Kyrgyzstan facial recognition 2024 protest",
    "Karakalpakstan AI surveillance Nukus 2022",
    "Turkmenistan internet shutdown VPN 2024",
    "Central Asia SORM Russia surveillance export",
    "Almaty Bloody January 2022 facial recognition arrests"
  ],
  "dedup_hint_slugs": [
    "kasachstan-ki-protest-shutdown",
    "usbekistan-ki-smart-city-ueberwachung",
    "turkmenistan-digitale-isolation"
  ]
}
```

### Topic 2 — Pazifik + Karibik: Klima-Migration, China-Tech-Diplomatie

Begründung: Komplett blanke Region. Climate-Migration + China-Huawei-Tech-Diplomatie (Solomons, Fiji, Vanuatu, Tonga-Kabel) + US-Pacific-Deterrence-Initiative + Karibik (Dominikanische Republik Haitianer-Deportationen, Trinidad Venezuela-Migration).

```json
{
  "slug": "pacific-caribbean-ai-blind-spots-2023-2025",
  "title": "Pazifik + Karibik: KI-blinde-Flecken (Migration, China-Tech, Climate)",
  "scope": "AI-Vorfälle in Pazifik-Inselstaaten (FJ, PG, SB, VU, TO, WS, KI, FM, MH) und Karibik (DO, HT, JM, TT, BB). Schwerpunkt: chinesische Tech-Deals (Huawei Smart City Solomons, PNG digital ID), US-Pacific-Initiative-Überwachung, Karibik-Klima-Migration mit biometrischen Tests, dominikanisches AI-Deportationsprogramm gegen Haitianer.",
  "region_hint": "FJ, PG, SB, VU, TO, WS, KI, FM, DO, HT, JM, TT, BB",
  "time_window": "2023-2025",
  "suggested_searches": [
    "Solomon Islands Huawei surveillance 2024",
    "Papua New Guinea digital identity AI 2024",
    "Fiji Vanuatu China telecom 2024",
    "Dominican Republic Haitian deportation biometric 2024",
    "Trinidad Tobago Venezuelan migration AI 2024",
    "Tonga undersea cable surveillance 2024",
    "Pacific Deterrence Initiative AI surveillance 2024",
    "Jamaica facial recognition police 2024"
  ],
  "dedup_hint_slugs": []
}
```

### Topic 3 — AI-Healthcare-Vertical EU + Asia (komplementär zu US-Fokus)

Begründung: Round-2-Healthcare-Topic fokussiert auf US. EU/UK NHS-AI-Triage, deutsche TI-eRezept-Algorithmen, NL DigiD-Health, KR Severance-AI, SG SingHealth, IN Aadhaar-Health-Verknüpfung haben dokumentierte Schäden.

```json
{
  "slug": "ai-healthcare-eu-asia-vertical",
  "title": "AI-Healthcare-Vertical EU + Asien (Diagnostik, Triage, eHealth)",
  "scope": "AI-Fehler und Diskriminierung im Gesundheitswesen außerhalb der USA: NHS-AI-Triage UK, deutsche eRezept/TI-Algorithmen, NL DigiD-Health, französische Doctolib-AI, KR Severance/Asan AI-Diagnose, SG SingHealth, IN Aadhaar-Health-Verknüpfung-Ausschlüsse, JP rinsho-AI.",
  "region_hint": "UK, DE, NL, FR, ES, KR, JP, SG, IN, AU",
  "time_window": "2022-2025",
  "suggested_searches": [
    "NHS AI triage error 2024 patient harm",
    "Babylon Health AI 2024 UK GP",
    "Germany eRezept Telematikinfrastruktur AI 2024",
    "France Doctolib AI patient data 2024",
    "Korea Lunit AI radiology false negative 2024",
    "India Aadhaar health exclusion AI 2024",
    "Singapore SingHealth AI triage 2024",
    "Japan Ubie AI symptom checker harm 2024"
  ],
  "dedup_hint_slugs": [
    "usa-epic-sepsis-model-krankenhaus-falsche-alarme",
    "usa-openai-whisper-medizin-halluzinationen-nabla"
  ]
}
```

### Topic 4 — AI-Tax / Sozialfinanzbehörden-Vertical

Begründung: 0 dedizierte Tax-AI-Cases im Bestand. NL Belastingdienst (parallel zu Toeslagenaffaire), italienische AdE-Algorithmen, FR DGFiP-RIALTO, US IRS-AI-Audit-Bias gegen Schwarze (TIGTA 2023), AU ATO-Robotax, ES AEAT-AI sind hochwertige Fälle.

```json
{
  "slug": "ai-tax-revenue-discrimination-2023-2025",
  "title": "AI in Finanz-/Steuerbehörden — Audit-Bias und Algorithmen-Klagen",
  "scope": "Steuer-, Zoll- und Finanzbehörden-AI mit dokumentierter Diskriminierung oder fehlerhaften Audit-Auswahl: US IRS racial audit bias, NL Belastingdienst Fraud Signaling Facility, IT Agenzia delle Entrate, FR DGFiP, AU ATO Robotax-Welle, ES AEAT, UK HMRC AI fraud detection, KR National Tax Service AI.",
  "region_hint": "US, NL, IT, FR, AU, UK, KR, ES, BR (Receita Federal), JP",
  "time_window": "2022-2025",
  "suggested_searches": [
    "IRS racial audit bias Stanford 2023 TIGTA",
    "Netherlands Belastingdienst FSV black list algorithm 2024",
    "Italy Agenzia Entrate AI tax audit 2024",
    "Australia ATO robotax small business AI 2024",
    "France DGFiP RIALTO AI tax fraud 2024",
    "UK HMRC AI fraud detection 2024",
    "Korea AI tax audit National Tax Service 2024",
    "Brazil Receita Federal AI selecao 2024"
  ],
  "dedup_hint_slugs": [
    "niederlande-syri-toeslagenaffaire",
    "niederlande-ki-kindesgeld-skandal"
  ]
}
```

### Topic 5 — Generative-AI-CSAM Enforcement-Cluster 2024-2025

Begründung: Bestand hat 1 generischen US-CSAM-Case. 2024-2025 explodierten Strafverfahren weltweit (US DOJ Anderegg, UK Hugh Nelson, KR deepfake teacher rings, ES Almendralejo Folgefälle, AU Operation Beaufort). Eigenes Vertical lohnt sich.

```json
{
  "slug": "generative-ai-csam-enforcement-2024-2025",
  "title": "Generative-AI-CSAM — Strafverfahren weltweit 2024-2025",
  "scope": "Strafverfahren und Verurteilungen wegen KI-generierter Darstellungen sexuellen Kindsmissbrauchs. Schwerpunkt 2024-2025: US DOJ Anderegg Wisconsin, UK Hugh Nelson 18 Jahre, KR Telegram-Deepfake-Lehrerinnen-Ringe, AU Operation Beaufort, DE BKA Operation Streamline, schulische Folgefälle Almendralejo/Westfield-Welle.",
  "region_hint": "US, UK, KR, AU, DE, ES, FR, CA, JP, BR",
  "time_window": "2024-2025",
  "suggested_searches": [
    "Steven Anderegg AI CSAM Wisconsin 2024 DOJ",
    "Hugh Nelson UK AI child abuse images 18 years 2024",
    "Korea Telegram deepfake teacher rings 2024 arrest",
    "Australia Operation Beaufort AI CSAM 2024",
    "BKA Operation Streamline AI CSAM Germany 2024",
    "Spain Almendralejo deepfake schoolgirls verdict 2024",
    "Japan AI CSAM arrest 2024",
    "Brazil deepfake minors investigation 2024"
  ],
  "dedup_hint_slugs": [
    "usa-ai-generated-csam",
    "usa-westfield-nj-schul-deepfake-mani",
    "suedkorea-deepfake-sexualverbrechen"
  ]
}
```

### Topic 6 — Plattform-Gig-Worker-Klagen Vertical (Uber/Lyft/Bolt/Deliveroo)

Begründung: Nur 2 Cases (Glovo IT, Uber-Algorithm US generisch). 2023-2025 lief europäische Klagewelle: NL ROB-Klagen, UK Worker-Info-Rights Aslam-Folge, ES Riders-Ley-Enforcement, FR Cour de Cassation Uber-Salariat, Bolt Estland/Litauen-Klagen, Brazil iFood, KE Bolt-Klagen.

```json
{
  "slug": "platform-gig-worker-algorithmic-management-2023-2025",
  "title": "Plattform-Gig-Worker — Klagen gegen algorithmisches Management",
  "scope": "Klagen, Gewerkschafts-Aktionen und behördliche Verfahren gegen algorithmisches Management auf Uber/Lyft/Bolt/Deliveroo/iFood/Glovo/Rappi: Konto-Deaktivierungen ohne Rechtsweg, dynamische Löhne, Surge-Pricing-Diskriminierung, Worker-Info-Rights-Klagen unter DSGVO Art. 22.",
  "region_hint": "NL, UK, FR, ES, IT, EE, LT, DE, BR, MX, KE, ZA, IN, AU",
  "time_window": "2023-2025",
  "suggested_searches": [
    "Worker Info Exchange Uber GDPR Article 22 2024",
    "Netherlands ROB platform workers algorithmic dismissal 2024",
    "EU Platform Workers Directive Uber 2024",
    "Bolt drivers lawsuit Estonia Lithuania 2024",
    "iFood Brazil delivery algorithm lawsuit 2024",
    "Glovo Spain Rider Law enforcement 2024",
    "Kenya Bolt Uber drivers strike algorithm 2024",
    "Deliveroo France Cour Cassation 2024"
  ],
  "dedup_hint_slugs": [
    "italien-ki-arbeitsbewertung-glovo",
    "usa-uber-lyft-gig-worker-algorithmus"
  ]
}
```

### Topic 7 — Crypto + AI-Scam-Welle 2024-2025

Begründung: 0 dedizierte Crypto-AI-Cases. 2024-2025 Pig-Butchering-Scams via Voice-Clone + Deepfake-Video-Call, Sora-Wallet-Scams, Korea Crypto-CEO-Imposter, HK Arup-Folgefälle ohne CFO, SE Klarna-Scams.

```json
{
  "slug": "ai-crypto-scam-wave-2024-2025",
  "title": "Crypto-AI-Scam-Welle 2024-2025 (Voice-Clone, Deepfake-Video-Call, Pig-Butchering)",
  "scope": "KI-Stimm-Klone und Deepfake-Video-Calls für Crypto-Investment-Betrug, Pig-Butchering-Camps Südostasien mit KI-Personas, Sora/Veo-Wallet-Scams, gefakte CEO-Endorsements (Musk/Altman/Buterin) auf YouTube-Lives, Promi-Endorsement-Welle.",
  "region_hint": "global, Schwergewicht US, HK, SG, MY, KH, KR, JP, AU, UK, DE",
  "time_window": "2024-2025",
  "suggested_searches": [
    "AI deepfake Musk crypto scam YouTube live 2024",
    "pig butchering AI voice clone 2024 Cambodia Myanmar",
    "Hong Kong deepfake video call CFO crypto fraud 2024",
    "Saylor Buterin Altman deepfake endorsement crypto 2024",
    "Korea AI voice clone crypto CEO impersonation 2024",
    "Sora deepfake wallet scam 2024",
    "FBI IC3 AI crypto fraud report 2024",
    "Japan deepfake crypto scam Maezawa 2024"
  ],
  "dedup_hint_slugs": [
    "hongkong-arup-deepfake-cfo-25-mio-betrug",
    "kambodscha-chinesische-scam-compounds"
  ]
}
```

### Topic 8 — Sub-Sahara francophon (Sahel + Zentralafrika)

Begründung: ML, BF, NE, TD, CI, CM, GA komplett leer. Russland-Africa-Corps-Desinformation, Sahel-Coup-Welle 2023-2024 mit AI-Propaganda, KI-Drohnen MINUSMA-Nachfolge, frankophone Censure-AI Cameroon Anglophone-Krise.

```json
{
  "slug": "francophone-africa-sahel-ai-repression-2023-2025",
  "title": "Frankophones Afrika + Sahel — AI-Propaganda, Drohnen, Zensur",
  "scope": "AI-bedingte Menschenrechtsvorfälle in ML, BF, NE, TD, CI, CM, GA, CG, CF: Russland-Africa-Corps-Desinformation rund um die Sahel-Coups, KI-Drohnen-Einsätze (türkische Bayraktar Mali/BF, iranische in Sudan-Konflikt), Internet-Shutdowns während Wahlen, Camerounische Anglophone-Krise-Überwachung, Tchad-Präsidentschaft-Wahl-Deepfakes.",
  "region_hint": "ML, BF, NE, TD, CI, CM, GA, CG, CF",
  "time_window": "2023-2025",
  "suggested_searches": [
    "Mali Burkina Faso Russia Africa Corps disinformation AI 2024",
    "Niger coup junta internet shutdown AI 2023",
    "Cameroon Anglophone crisis surveillance AI 2024",
    "Tchad presidential election deepfake 2024",
    "Bayraktar TB2 Mali Burkina Faso strikes 2024",
    "Cote d'Ivoire facial recognition election 2024 2025",
    "Gabon coup AI propaganda 2023 2024",
    "Sahel Wagner Africa Corps social media manipulation 2024"
  ],
  "dedup_hint_slugs": []
}
```

### Topic 9 — Religion-spezifische KI-Zensur und Verfolgung

Begründung: Verstreute Cases (PK Blasphemie 1, China Uiguren, Iran Hijab, IN Caste) aber kein systematisches Religion-Vertical. Christen in Nordkorea, Falun Gong China, Ahmadiyya PK, Bahá'í IR, Buddhisten Tibet/Sri-Lanka-Muslime, evangelikale Censorship Brasilien.

```json
{
  "slug": "religion-specific-ai-censorship-persecution-2023-2025",
  "title": "Religions-spezifische KI-Zensur und Verfolgung (christlich, muslimisch, buddhistisch, bahá'í)",
  "scope": "KI-gestützte Identifizierung, Zensur oder Verfolgung religiöser Minderheiten: Ahmadiyya Pakistan Online-Tracking, Bahá'í Iran AI-Identifikation, Falun Gong China Gesichtserkennung Drittstaaten, Untergrundkirchen Nordkorea + China AI-Detection, Rohingya Myanmar Folge-Überwachung Bangladesch, Hindus-Pakistan + Muslims-India AI-Hass-Klassifikation.",
  "region_hint": "PK, IR, CN, KP, IN, MM, BD, LK, SA, NG, EG, ID",
  "time_window": "2023-2025",
  "suggested_searches": [
    "Ahmadiyya Pakistan online surveillance AI 2024",
    "Bahai Iran AI identification 2024 Gozaar",
    "Falun Gong China facial recognition abroad 2024",
    "North Korea underground church AI detection 2024",
    "China house church surveillance AI 2024",
    "Rohingya Bangladesh biometric registry UNHCR 2024",
    "India Muslim AI hate speech classification 2024",
    "Sri Lanka Muslims surveillance post-Easter 2024"
  ],
  "dedup_hint_slugs": [
    "pakistan-ki-blasphemie-ueberwachung",
    "china-uiguren-ueberwachung",
    "iran-ki-hijab-erkennung",
    "indien-ki-kasten-diskriminierung"
  ]
}
```

### Topic 10 — AI-Insurance-Discrimination Cross-Sector (Life, Auto, Property)

Begründung: Nur 2 dedizierte Cases (US Cigna, UnitedHealth). 2024-2025 NAIC Model Bulletin Adoption-Welle, CO/NY/CT-Insurance-Algorithm-Audits, Allstate/State-Farm-Klagen, UK FCA-AI-Insurance-Review, EU Solvency-II-AI-Modelle, Lemonade-AI-Anti-Fraud-Diskriminierung.

```json
{
  "slug": "ai-insurance-discrimination-cross-sector-2023-2025",
  "title": "AI-Insurance-Diskriminierung Cross-Sector (Health, Life, Auto, Property)",
  "scope": "Algorithmische Diskriminierung in Versicherungs-Sparten über Health hinaus: Auto-Insurance-AI-Rating-Bias (Allstate, State Farm), Lemonade-AI-Anti-Fraud-Klagen, Life-Underwriting-AI gegen Behinderte, Property-Insurance-Climate-Risk-Redlining, FCA-UK-Insurance-AI-Review, EU Solvency-II-AI-Modelle, NAIC Model Bulletin Enforcement durch CO/NY/CT/CA.",
  "region_hint": "US, UK, EU (DE, FR, IT, NL), CA, AU",
  "time_window": "2023-2025",
  "suggested_searches": [
    "Allstate AI auto insurance discrimination 2024 lawsuit",
    "State Farm AI rating bias 2024",
    "Lemonade AI anti-fraud lawsuit 2024",
    "NAIC Model Bulletin AI insurance enforcement Colorado 2024",
    "FCA UK AI insurance review 2024",
    "Germany BaFin AI insurance algorithm 2024",
    "AI climate risk insurance redlining 2024 NY DFS",
    "Australia AFCA AI insurance complaint 2024"
  ],
  "dedup_hint_slugs": [
    "usa-cigna-pxdx-algorithmus-claim-ablehnungen",
    "usa-unitedhealth-nhpredict-medicare-ablehnungen",
    "usa-saferent-tenant-screening-ki-diskriminierung"
  ]
}
```

---

## 4. Nächste Schritte

1. Slugs in `scripts/research-topics.json` einpflegen oder als separates `scripts/research-topics-round-3.json` ablegen.
2. Round-2-Cloud-Pipeline parallel weiterlaufen lassen, Round-3 zeitversetzt starten.
3. Optional: vor Round-3-Lauf einen 11. Topic ergänzen, wenn Round-2-Resultate klare Folge-Lücken zeigen.

Methodischer Hinweis: Alle 10 Topics sind so geschnitten, dass sie nicht in Round-2 enthaltene Achsen abdecken (Region-Vertical, Branche-Vertical, oder Domain-Vertical). `dedup_hint_slugs` ist nur teilweise gefüllt — beim Lauf den Researcher zusätzlich auf `data/index.json` referenzieren lassen.
