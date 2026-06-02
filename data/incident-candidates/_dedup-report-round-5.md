# Dedup-Report Round-1

_Generiert: 2026-06-01T21:06:23.142Z von `scripts/dedup-candidates-round-1.js`_

## Zusammenfassung

- Bestand-Incidents (data/index.json): **601**
- Kandidaten (data/incident-candidates/*.json): **412**
- Klassifizierungsschwellen: exact-dup ≥ 0.7 · probable-dup ≥ 0.5 · weak-dup ≥ 0.35

| Kategorie | Anzahl Kandidaten |
|---|---:|
| exact-dup | 1 |
| probable-dup | 111 |
| weak-dup (nur Hinweis) | 175 |
| unique (KEEP) | 300 |

Cross-Pair-Statistik:

- Kandidat ↔ Bestand-Paare über Schwelle: **269**
- Kandidat ↔ Kandidat-Paare über Schwelle: **47**

## Exact-Dup-Paare: Kandidat ↔ Bestand (Score ≥ 0.7)

| Score | Kandidat (Datei) | Bestand-Slug | Befund |
|---:|---|---|---|
| 0.81 | `openai-sweetspecter-storm0817-cyberav3ngers-2024-10` (cybersecurity-ai-2023-2025-round-4-agent-c.json) | `usa-openai-oktober-2024-report-sweetspecter-storm-0817-und-cyberav3ngers-nutzen-chatgpt` | Global: OpenAI Oktober-2024-Report — SweetSpecter, Storm-0817 und CyberAv3ngers  ↔ Global: OpenAI Oktober-2024-Report — SweetSpecter, Storm-0817 und CyberAv3ngers  |

## Probable-Dup-Paare: Kandidat ↔ Bestand (Score 0.5–0.7)

| Score | Kandidat | Bestand-Slug | Kandidat-Titel ↔ Bestand-Name |
|---:|---|---|---|
| 0.68 | `kenia-african-content-moderators-union-gruendung-2023` | `kenia-gruendung-der-african-content-moderators-union-in-nairobi-mai-2023` | Kenia: Gruendung der African Content Moderators Union in Nai ↔ Kenia: Gruendung der African Content Moderators Union in Nai |
| 0.68 | `kenia-openai-sama-rlhf-datenlabler-2-dollar-2022-2023` | `kenia-openai-liess-chatgpt-trainingsdaten-von-sama-arbeitern-in-nairobi-fuer-unter-2-usd` | Kenia: OpenAI liess ChatGPT-Trainingsdaten von Sama-Arbeiter ↔ Kenia: OpenAI liess ChatGPT-Trainingsdaten von Sama-Arbeiter |
| 0.67 | `samoa-national-digital-id-act-2024` | `samoa-national-digital-identification-act-2024-und-21-mio-usd-weltbank-grant-fuer-ndids` | Samoa: National Digital Identification Act 2024 und 21-Mio-U ↔ Samoa: National Digital Identification Act 2024 und 21-Mio-U |
| 0.67 | `nigeria-jatau-whatsapp-blasphemie-freispruch-2024` | `nigeria-rhoda-jatau-nach-19-monaten-haft-wegen-whatsapp-video-im-dezember-2024` | Nigeria: Rhoda Jatau nach 19 Monaten Haft wegen WhatsApp-Vid ↔ Nigeria: Rhoda Jatau nach 19 Monaten Haft wegen WhatsApp-Vid |
| 0.66 | `jp-maezawa-meta-deepfake-investment-ad-lawsuit-2024-05` | `japan-milliardaer-yusaku-maezawa-verklagt-meta-wegen-deepfake-investment-anzeigen-2024` | Japan: Milliardaer Yusaku Maezawa verklagt Meta wegen Deepfa ↔ Japan: Milliardaer Yusaku Maezawa verklagt Meta wegen Deepfa |
| 0.66 | `suedsudan-tiktok-facebook-shutdown-2025` | `suedsudan-90-tage-social-media-sperre-fuer-facebook-und-tiktok-ab-22-januar-2025-nach` | Südsudan: 90-Tage-Social-Media-Sperre für Facebook und TikTo ↔ Südsudan: 90-Tage-Social-Media-Sperre für Facebook und TikTo |
| 0.65 | `global-buterin-deepfake-wallet-drainer-cryptocore-2024` | `usa-deepfake-vitalik-buterin-video-als-koeder-fuer-wallet-drainer-phishing-cryptocore` | Deepfake-Vitalik-Buterin-Video als Koeder fuer Wallet-Draine ↔ Deepfake-Vitalik-Buterin-Video als Koeder fuer Wallet-Draine |
| 0.63 | `italien-agenzia-entrate-vera-algorithmus-2022` | `italien-vera-ki-der-agenzia-delle-entrate-scannt-bankkonten-und-e-rechnungen-2022` | Italien: VeRa-KI der Agenzia delle Entrate scannt Bankkonten ↔ Italien: VeRa-KI der Agenzia delle Entrate scannt Bankkonten |
| 0.62 | `kenia-remotasks-abrupte-schliessung-maerz-2024` | `kenia-nigeria-pakistan-scale-ai-schliesst-remotasks-abrupt-und-sperrt-tausende-ki` | Kenia/Nigeria/Pakistan: Scale AI schliesst Remotasks abrupt  ↔ Kenia/Nigeria/Pakistan: Scale AI schliesst Remotasks abrupt  |
| 0.62 | `in-ambani-tendulkar-kohli-deepfake-investment-scam-2024` | `indien-deepfake-videos-von-mukesh-ambani-sachin-tendulkar-und-virat-kohli-treiben` | Indien: Deepfake-Videos von Mukesh Ambani, Sachin Tendulkar  ↔ Indien: Deepfake-Videos von Mukesh Ambani, Sachin Tendulkar  |
| 0.60 | `tansania-internet-shutdown-wahl-2025` | `tansania-sechs-taegiger-landesweiter-internet-shutdown-bei-wahl-2025-un-expert-innen` | Tansania: Sechs-tägiger landesweiter Internet-Shutdown bei W ↔ Tansania: Sechs-tägiger landesweiter Internet-Shutdown bei W |
| 0.60 | `my-pm-anwar-deepfake-investment-scam-2024-2025` | `malaysia-deepfake-videos-von-pm-anwar-ibrahim-treiben-investment-scam-welle-2024` | Malaysia: Deepfake-Videos von PM Anwar Ibrahim treiben Inves ↔ Malaysia: Deepfake-Videos von PM Anwar Ibrahim treiben Inves |
| 0.60 | `usa-anderegg-wisconsin-stable-diffusion-csam-2024` | `usa-steven-anderegg-in-wisconsin-erste-doj-anklage-wegen-ki-generierter-csam-mit-stable` | USA: Steven Anderegg in Wisconsin — erste DOJ-Anklage wegen  ↔ USA: Steven Anderegg in Wisconsin — erste DOJ-Anklage wegen  |
| 0.60 | `korea-inha-university-telegram-deepfake-arrest-2024` | `suedkorea-inha-universitaet-deepfake-telegram-raum-mit-1-200-mitgliedern-aufgeflogen` | Südkorea: Inha-Universität-Deepfake-Telegram-Raum mit 1.200  ↔ Südkorea: Inha-Universität-Deepfake-Telegram-Raum mit 1.200  |
| 0.60 | `brazil-school-deepfake-bahia-mato-grosso-2024` | `brasilien-schulische-deepfake-wellen-2024-in-bahia-und-mato-grosso-nach-rio-de-janeiro` | Brasilien: Schulische Deepfake-Wellen 2024 in Bahia und Mato ↔ Brasilien: Schulische Deepfake-Wellen 2024 in Bahia und Mato |
| 0.60 | `usa-nydfs-circular-letter-7-2024` | `usa-new-york-dfs-circular-letter-no-7-2024-verbindliche-ki-regeln-fuer-versicherungs` | USA: New York DFS Circular Letter No. 7 (2024) — verbindlich ↔ USA: New York DFS Circular Letter No. 7 (2024) — verbindlich |
| 0.60 | `canada-ircc-chinook-mehrara-court-2024` | `kanada-bundesgericht-prueft-2024-einsatz-des-visa-sortierungstools-chinook-in-mehrara` | Kanada: Bundesgericht prueft 2024 Einsatz des Visa-Sortierun ↔ Kanada: Bundesgericht prueft 2024 Einsatz des Visa-Sortierun |
| 0.60 | `usa-mcdonalds-paradox-mchire-olivia-leak-2025` | `usa-mchire-olivia-paradox-ai-recruiting-chatbot-legt-64-mio-bewerber-daten-frei-2025` | USA: McHire/Olivia — Paradox.ai-Recruiting-Chatbot legt 64 M ↔ USA: McHire/Olivia — Paradox.ai-Recruiting-Chatbot legt 64 M |
| 0.59 | `frankreich-cegedim-cnil-bussgeld-gesundheitsdaten-2024` | `frankreich-cnil-verhaengt-800-000-euro-bussgeld-gegen-cegedim-sante-wegen-unbefugter` | Frankreich: CNIL verhaengt 800.000 Euro Bussgeld gegen Ceged ↔ Frankreich: CNIL verhaengt 800.000 Euro Bussgeld gegen Ceged |
| 0.59 | `indien-hyderabad-amnesty-ban-the-scan-cmd-control-2024` | `indien-hyderabad-command-und-control-centre-fuer-600-000-gesichtserkennungs-kameras` | Indien: Hyderabad — Command & Control Centre für 600.000 Ges ↔ Indien: Hyderabad — Command & Control Centre für 600.000 Ges |
| 0.59 | `pacific-deterrence-initiative-isr-fy2025` | `usa-pacific-deterrence-initiative-9-86-mrd-usd-fuer-ki-gestuetzte-isr-und-indo` | USA Pacific Deterrence Initiative: 9,86 Mrd USD für KI-gestü ↔ USA Pacific Deterrence Initiative: 9,86 Mrd USD für KI-gestü |
| 0.58 | `aethiopien-amhara-internet-shutdown-2023-2024` | `ethiopia-fast-einjaehriger-internet-blackout-in-der-amhara-region-august-2023-juli-2024` | Äthiopien: Fast einjähriger Internet-Blackout in der Amhara- ↔ Äthiopien: Fast einjähriger Internet-Blackout in der Amhara- |
| 0.58 | `irland-dpc-x-grok-eu-trainingsdaten-2024` | `irland-dpc-erzwingt-stopp-der-grok-ki-training-datenverwendung-von-x-twitter-erstmaliger` | Irland: DPC erzwingt Stopp der Grok-KI-Training-Datenverwend ↔ Irland: DPC erzwingt Stopp der Grok-KI-Training-Datenverwend |
| 0.58 | `saudi-arabia-yahya-assiri-uk-court-2024` | `saudi-arabien-uk-high-court-laesst-spyware-klage-saudischer-aktivist-yahya-assiri-gegen` | Saudi-Arabien: UK-High-Court laesst Spyware-Klage saudischer ↔ Saudi-Arabien: UK-High-Court laesst Spyware-Klage saudischer |
| 0.58 | `kenia-sama-massenentlassung-content-moderation-exit-januar-2023` | `kenia-sama-entlaesst-ueber-180-content-moderatoren-und-beendet-das-meta-geschaeft-januar` | Kenia: Sama entlaesst ueber 180 Content-Moderatoren und been ↔ Kenia: Sama entlaesst ueber 180 Content-Moderatoren und been |
| 0.58 | `schweden-foersaekringskassan-suspicion-machine-2024` | `schweden-foersaekringskassan-suspicion-machine-sozialamts-ki-diskriminiert-frauen-und` | Schweden: Försäkringskassan-"Suspicion Machine" — Sozialamts ↔ Schweden: Försäkringskassan-"Suspicion Machine" — Sozialamts |
| 0.56 | `kolumbien-teleperformance-tiktok-moderatoren-uni-abkommen-2023` | `kolumbien-tiktok-subunternehmer-teleperformance-unterzeichnet-historisches-gewerkschafts` | Kolumbien: TikTok-Subunternehmer Teleperformance unterzeichn ↔ Kolumbien: TikTok-Subunternehmer Teleperformance unterzeichn |
| 0.56 | `irland-dpc-meta-ai-eu-trainingsdaten-2024` | `irland-dpc-stoppt-metas-eu-nutzer-ai-training-auf-facebook-instagram-juni-2024-edpb` | Irland: DPC stoppt Metas EU-Nutzer-AI-Training auf Facebook/ ↔ Irland: DPC stoppt Metas EU-Nutzer-AI-Training auf Facebook/ |
| 0.56 | `jamaica-constable-smart-ai-2025` | `jamaika-ki-assistent-constable-smart-der-jamaica-constabulary-force-fuer-buerger-kontakte` | Jamaika: KI-Assistent 'Constable Smart' der Jamaica Constabu ↔ Jamaika: KI-Assistent 'Constable Smart' der Jamaica Constabu |
| 0.55 | `daenemark-udk-coded-injustice-welfare-algorithmus-2024` | `daenemark-udbetaling-danmark-bis-zu-60-ki-modelle-fuer-sozialbetrugs-jagd-amnesty-bericht` | Dänemark: Udbetaling Danmark — bis zu 60 KI-Modelle für Sozi ↔ Dänemark: Udbetaling Danmark — bis zu 60 KI-Modelle für Sozi |
| 0.55 | `niger-drohnenschlag-kokoloko-tillaberi-2024` | `niger-drohnenangriffe-der-junta-toeten-zivilist-innen-in-tiawa-und-kokoloko-region` | Niger: Drohnenangriffe der Junta toeten Zivilist:innen in Ti ↔ Niger: Drohnenangriffe der Junta toeten Zivilist:innen in Ti |
| 0.55 | `kenia-meta-sama-content-moderator-berufungsurteil-2024` | `kenia-berufungsgericht-nairobi-laesst-klage-von-185-facebook-moderatoren-gegen-meta-zu` | Kenia: Berufungsgericht Nairobi lässt Klage von 185 Facebook ↔ Kenia: Berufungsgericht Nairobi lässt Klage von 185 Facebook |
| 0.55 | `ghana-meta-teleperformance-accra-moderatoren-suizidversuch-2024-2025` | `ghana-meta-verlagert-content-moderation-nach-accra-zu-teleperformance-suizidversuch-und` | Ghana: Meta verlagert Content-Moderation nach Accra zu Telep ↔ Ghana: Meta verlagert Content-Moderation nach Accra zu Telep |
| 0.55 | `kolumbien-rappi-defensoria-mediator-kritik-2024` | `kolumbien-rappi-richtet-defensoria-al-repartidor-ein-fairwork-und-rider-innen-kritisieren` | Kolumbien: Rappi richtet „Defensoría al Repartidor“ ein — Fa ↔ Kolumbien: Rappi richtet „Defensoría al Repartidor“ ein — Fa |
| 0.55 | `cameroun-yaounde-douala-gesichtserkennung-2023-2024` | `kamerun-live-gesichtserkennung-in-yaounde-und-douala-huawei-camtel-smart-cities-projekt` | Kamerun: Live-Gesichtserkennung in Yaounde und Douala — Huaw ↔ Kamerun: Live-Gesichtserkennung in Yaounde und Douala — Huaw |
| 0.54 | `kr-elon-musk-romance-deepfake-70m-won-2023-2024` | `suedkorea-frau-verliert-70-mio-won-an-deepfake-elon-musk-romance-scam-2023` | Suedkorea: Frau verliert 70 Mio. Won an Deepfake-'Elon-Musk' ↔ Suedkorea: Frau verliert 70 Mio. Won an Deepfake-'Elon-Musk' |
| 0.54 | `tunisia-decree-54-surveillance-2024` | `tunesien-decree-law-54-ki-ueberwachung-2024-welle-von-journalist-innen-haft-unter-saied` | Tunesien: Decree-Law 54 + KI-Ueberwachung — 2024-Welle von J ↔ Tunesien: Decree-Law 54 + KI-Ueberwachung — 2024-Welle von J |
| 0.54 | `tajikistan-safe-city-facial-recognition-2022` | `tadschikistan-huawei-safe-city-in-duschanbe-erhaelt-gesichtserkennungs-upgrade-25-prozent` | Tadschikistan: Huawei-Safe-City in Duschanbe erhält Gesichts ↔ Tadschikistan: Huawei-Safe-City in Duschanbe erhält Gesichts |
| 0.54 | `vanuatu-pm-huawei-policing-visit-2024` | `vanuatu-premier-salwai-besucht-huawei-polizeitechnik-in-shenzhen-datenzentrum-fuer` | Vanuatu: Premier Salwai besucht Huawei-Polizeitechnik in She ↔ Vanuatu: Premier Salwai besucht Huawei-Polizeitechnik in She |
| 0.54 | `nigeria-atiku-deepfake-audio-wahl-2023` | `nigeria-viraler-deepfake-audio-ueber-atiku-abubakar-okowa-und-tambuwal-angeblich-zur` | Nigeria: Viraler Deepfake-Audio über Atiku Abubakar, Okowa u ↔ Nigeria: Viraler Deepfake-Audio über Atiku Abubakar, Okowa u |
| 0.54 | `jordan-pegasus-access-now-2024-expansion` | `jordanien-access-now-citizen-lab-bericht-2024-erweitert-pegasus-faelle-auf-35-opfer` | Jordanien: Access-Now/Citizen-Lab-Bericht 2024 erweitert Peg ↔ Jordanien: Access-Now/Citizen-Lab-Bericht 2024 erweitert Peg |
| 0.54 | `uk-hmrc-quantexa-connect-2024-vertrag` | `uk-hmrc-unterzeichnet-175-mio-gbp-vertrag-mit-quantexa-fuer-ki-steuerfahndung-2024` | Grossbritannien: HMRC unterzeichnet 175-Mio-GBP-Vertrag mit  ↔ Grossbritannien: HMRC unterzeichnet 175-Mio-GBP-Vertrag mit  |
| 0.54 | `india-modi-ki-deepfakes-anti-muslim-wahlkampf-2024` | `indien-ki-generierte-anti-muslimische-deepfakes-und-hindu-suprematistische-werbeanzeigen` | Indien: KI-generierte anti-muslimische Deepfakes und Hindu-s ↔ Indien: KI-generierte anti-muslimische Deepfakes und Hindu-s |
| 0.54 | `usa-bartz-anthropic-copyright-settlement-2025` | `usa-bartz-v-anthropic-1-5-mrd-dollar-vergleich-wegen-training-mit-piraten-buechern-2025` | USA: Bartz v. Anthropic — 1,5-Mrd.-Dollar-Vergleich wegen Tr ↔ USA: Bartz v. Anthropic — 1,5-Mrd.-Dollar-Vergleich wegen Tr |
| 0.54 | `uk-just-stop-oil-m25-whole-truth-five-2024` | `uk-vereinigtes-koenigreich-whole-truth-five-just-stop-oil-gruender-roger-hallam-zu-fuenf` | Vereinigtes Königreich: „Whole Truth Five“ — Just-Stop-Oil-G ↔ Vereinigtes Königreich: „Whole Truth Five“ — Just-Stop-Oil-G |
| 0.53 | `mosambik-internet-shutdown-wahl-protest-2024` | `mosambik-internet-und-social-media-sperren-nach-umstrittener-wahl-2024-315-tote-bei` | Mosambik: Internet- und Social-Media-Sperren nach umstritten ↔ Mosambik: Internet- und Social-Media-Sperren nach umstritten |
| 0.53 | `frankreich-cnaf-scoring-conseil-detat-2024` | `frankreich-cnaf-familienkassen-scoring-algorithmus-koalition-aus-15-ngos-klagt-vor` | Frankreich: CNAF-Familienkassen-Scoring-Algorithmus — Koalit ↔ Frankreich: CNAF-Familienkassen-Scoring-Algorithmus — Koalit |
| 0.53 | `mexico-sheinbaum-deepfake-financial-scam-2024` | `mexiko-deepfake-videos-von-claudia-sheinbaum-im-wahlkampf-2024-anlagebetrug-und` | Mexiko: Deepfake-Videos von Claudia Sheinbaum im Wahlkampf 2 ↔ Mexiko: Deepfake-Videos von Claudia Sheinbaum im Wahlkampf 2 |
| 0.53 | `philippinen-ntf-elcac-facebook-red-tagging-ki-2024` | `philippinen-ntf-elcac-nutzt-facebook-fuer-red-tagging-450-faelle-im-1-halbjahr-2024` | Philippinen: NTF-ELCAC nutzt Facebook für Red-Tagging — 450+ ↔ Philippinen: NTF-ELCAC nutzt Facebook für Red-Tagging — 450+ |
| 0.53 | `china-church-of-almighty-god-zero-out-ki-ueberwachung-2024` | `china-19-053-verhaftungen-von-church-of-almighty-god-mitgliedern-2024-mittels-skynet-und` | China: 19.053 Verhaftungen von Church-of-Almighty-God-Mitgli ↔ China: 19.053 Verhaftungen von Church-of-Almighty-God-Mitgli |
| 0.53 | `usa-perplexity-ai-wsj-nytimes-copyright-2024` | `usa-perplexity-ai-verklagt-von-dow-jones-new-york-post-und-new-york-times-wegen` | USA: Perplexity AI verklagt von Dow Jones / New York Post un ↔ USA: Perplexity AI verklagt von Dow Jones / New York Post un |
| 0.53 | `sg-pm-lee-deepfake-crypto-investment-scam-2023-2024` | `singapur-deepfake-videos-von-pm-lee-hsien-loong-bewerben-gefaelschtes-krypto-investment` | Singapur: Deepfake-Videos von PM Lee Hsien Loong bewerben ge ↔ Singapur: Deepfake-Videos von PM Lee Hsien Loong bewerben ge |
| 0.53 | `uzbekistan-karakalpakstan-internet-shutdown-2022` | `usbekistan-internet-blackout-in-karakalpakstan-begleitet-toedliche-niederschlagung-der` | Usbekistan: Internet-Blackout in Karakalpakstan begleitet tö ↔ Usbekistan: Internet-Blackout in Karakalpakstan begleitet tö |
| 0.53 | `sambia-cyber-security-act-massenueberwachung-2024` | `sambia-cyber-security-act-2024-ermoeglicht-echtzeit-ueberwachung-und-datenlokalisierung` | Sambia: Cyber Security Act 2024 ermöglicht Echtzeit-Überwach ↔ Sambia: Cyber Security Act 2024 ermöglicht Echtzeit-Überwach |
| 0.53 | `uzbekistan-biometric-border-foreigners-2024` | `usbekistan-biometrische-erfassung-aller-einreisenden-auslaender-an-grenzkontrollpunkten` | Usbekistan: Biometrische Erfassung aller einreisenden Auslän ↔ Usbekistan: Biometrische Erfassung aller einreisenden Auslän |
| 0.53 | `usa-scale-ai-outlier-schuster-ptbs-sammelklage-januar-2025` | `usa-sammelklage-schuster-v-scale-ai-outlier-wegen-psychischer-schaeden-durch-ki-safety` | USA: Sammelklage Schuster v. Scale AI/Outlier wegen psychisc ↔ USA: Sammelklage Schuster v. Scale AI/Outlier wegen psychisc |
| 0.53 | `usa-scale-ai-outlier-warn-act-massenentlassung-oktober-2024` | `usa-scale-ai-outlier-und-hireart-verklagt-wegen-massenentlassung-von-500-datenlabler-ohne` | USA: Scale AI, Outlier und HireArt verklagt wegen Massenentl ↔ USA: Scale AI, Outlier und HireArt verklagt wegen Massenentl |
| 0.53 | `ferrari-deepfake-ceo-vigna-2024` | `italien-ferrari-deepfake-anruf-imitiert-ceo-vigna-vereitelt-durch-buch-frage-2024` | Italien: Ferrari — Deepfake-Anruf imitiert CEO Vigna, vereit ↔ Italien: Ferrari — Deepfake-Anruf imitiert CEO Vigna, vereit |
| 0.53 | `spanien-worldcoin-aepd-iris-sperre-2024` | `spanien-aepd-verhaengt-sofortmassnahme-gegen-worldcoin-iris-scan-stopp-wegen` | Spanien: AEPD verhängt Sofortmaßnahme gegen Worldcoin — Iris ↔ Spanien: AEPD verhängt Sofortmaßnahme gegen Worldcoin — Iris |
| 0.52 | `suedafrika-trump-zuma-mk-deepfake-wahl-2024` | `suedafrika-duduzile-zuma-sambudla-verbreitet-trump-deepfake-zur-wahl-werbung-fuer-mk` | Südafrika: Duduzile Zuma-Sambudla verbreitet Trump-Deepfake  ↔ Südafrika: Duduzile Zuma-Sambudla verbreitet Trump-Deepfake  |
| 0.52 | `global-appen-google-vertragskuendigung-bard-2024` | `usa-global-usa-google-kuendigt-82-8-mio-usd-vertrag-mit-appen-gefaehrdet-2-000-search` | Global/USA: Google kuendigt 82,8-Mio-USD-Vertrag mit Appen,  ↔ Global/USA: Google kuendigt 82,8-Mio-USD-Vertrag mit Appen,  |
| 0.52 | `korea-scatterlab-iruda-kakaotalk-pipc-bussgeld-2021` | `suedkorea-pipc-verhaengt-103-millionen-won-bussgeld-gegen-scatterlab-fuer-ki-chatbot` | Suedkorea: PIPC verhaengt 103 Millionen Won Bussgeld gegen S ↔ Suedkorea: PIPC verhaengt 103 Millionen Won Bussgeld gegen S |
| 0.52 | `deutschland-charite-ki-fairness-erhebung-2023` | `deutschland-charite-studie-zeigt-nur-ein-drittel-der-ki-entwickler-innen-im` | Deutschland: Charite-Studie zeigt - nur ein Drittel der KI-E ↔ Deutschland: Charite-Studie zeigt - nur ein Drittel der KI-E |
| 0.52 | `uk-hugh-nelson-bolton-ai-csam-18-years-2024` | `uk-hugh-nelson-zu-18-jahren-haft-verurteilt-landmark-urteil-zu-ki-csam-mit-daz-3d-2024` | Großbritannien: Hugh Nelson zu 18 Jahren Haft verurteilt — L ↔ Großbritannien: Hugh Nelson zu 18 Jahren Haft verurteilt — L |
| 0.52 | `neuseeland-msd-ki-sozialhilfe-amendment-2026-maori` | `neuseeland-social-security-modernisation-amendment-ministerium-darf-ki-ueber-sozialhilfe` | Neuseeland: Social Security Modernisation Amendment — Minist ↔ Neuseeland: Social Security Modernisation Amendment — Minist |
| 0.52 | `kenia-data-labelers-offener-brief-biden-mai-2024` | `kenia-97-datenlabler-und-content-moderatoren-in-nairobi-schreiben-offenen-brief-an-us` | Kenia: 97 Datenlabler und Content-Moderatoren in Nairobi sch ↔ Kenia: 97 Datenlabler und Content-Moderatoren in Nairobi sch |
| 0.51 | `turkey-imamoglu-deepfake-2024` | `tuerkei-deepfake-video-von-istanbul-buergermeister-imamoglu-vor-kommunalwahlen-2024` | Tuerkei: Deepfake-Video von Istanbul-Buergermeister Imamoglu ↔ Tuerkei: Deepfake-Video von Istanbul-Buergermeister Imamoglu |
| 0.51 | `usa-colorado-sb21-169-lebensversicherung-2024` | `usa-colorado-sb21-169-wird-operativ-lebensversicherer-muessen-bis-dezember-2024-ki-bias` | USA: Colorado SB21-169 wird operativ — Lebensversicherer mue ↔ USA: Colorado SB21-169 wird operativ — Lebensversicherer mue |
| 0.51 | `sri-lanka-online-safety-act-2024-osc-presse` | `sri-lanka-online-safety-act-no-9-2024-online-safety-commission-ohne` | Sri Lanka: Online Safety Act No. 9/2024 — Online Safety Comm ↔ Sri Lanka: Online Safety Act No. 9/2024 — Online Safety Comm |
| 0.51 | `nato-revised-ai-strategy-2024` | `belgien-revidierte-ki-strategie-2024-autonomy-implementation-plan-und-data-und-ai-review` | NATO: Revidierte KI-Strategie 2024 — Autonomy Implementation ↔ NATO: Revidierte KI-Strategie 2024 — Autonomy Implementation |
| 0.51 | `colombia-pretoria-constitutional-court-ai-judges-2024` | `kolumbien-verfassungsgericht-erlaubt-ki-nutzung-durch-richter-urteil-t-323-2024-zu` | Kolumbien: Verfassungsgericht erlaubt KI-Nutzung durch Richt ↔ Kolumbien: Verfassungsgericht erlaubt KI-Nutzung durch Richt |
| 0.51 | `portugal-worldcoin-iris-scan-suspendierung-2024` | `portugal-cnpd-suspendiert-worldcoin-iris-scan-operation-fuer-90-tage-wegen-datenerfassung` | Portugal: CNPD suspendiert Worldcoin-Iris-Scan-Operation für ↔ Portugal: CNPD suspendiert Worldcoin-Iris-Scan-Operation für |
| 0.51 | `global-unodc-southeast-asia-scam-compounds-ai-deepfake-2024` | `myanmar-unodc-bericht-oktober-2024-scam-compounds-nutzen-ki-deepfakes-1-530-anstieg-bei` | Suedostasien: UNODC-Bericht Oktober 2024 - Scam-Compounds nu ↔ Suedostasien: UNODC-Bericht Oktober 2024 - Scam-Compounds nu |
| 0.51 | `china-zion-church-facial-recognition-mandate-2024` | `china-gesichtserkennungs-pflicht-fuer-alle-staatlich-registrierten-kirchen-razzia-auf` | China: Gesichtserkennungs-Pflicht für alle staatlich registr ↔ China: Gesichtserkennungs-Pflicht für alle staatlich registr |
| 0.50 | `aethiopien-meta-tigray-hassrede-klage-2025` | `ethiopia-aethiopien-kenia-2-milliarden-pfund-klage-gegen-meta-wegen-tigray-hassrede` | Äthiopien/Kenia: 2-Milliarden-Pfund-Klage gegen Meta wegen T ↔ Äthiopien/Kenia: 2-Milliarden-Pfund-Klage gegen Meta wegen T |
| 0.50 | `au-deepfake-musk-crypto-quantum-ai-80k-victim-2024` | `australien-deepfake-musk-video-kostet-einzelnen-anleger-80-000-aud-asic-nimmt-3-500-scam` | Australien: Deepfake-Musk-Video kostet einzelnen Anleger 80. ↔ Australien: Deepfake-Musk-Video kostet einzelnen Anleger 80. |
| 0.50 | `frankreich-cegedim-cyberangriff-15-millionen-patientendaten-2026` | `frankreich-cyberangriff-auf-cegedim-sante-15-8-millionen-patientendaten-gestohlen-2025` | Frankreich: Cyberangriff auf Cegedim Sante - 15,8 Millionen  ↔ Frankreich: Cyberangriff auf Cegedim Sante - 15,8 Millionen  |
| 0.50 | `usa-state-farm-kelly-alabama-ki-diskriminierung-2024` | `usa-state-farm-verklagt-wegen-ki-diskriminierung-schwarzer-behinderter-hausbesitzer-in` | USA: State Farm verklagt wegen KI-Diskriminierung Schwarzer  ↔ USA: State Farm verklagt wegen KI-Diskriminierung Schwarzer  |
| 0.50 | `israel-gospel-habsora-ai-targeting-2023` | `palaestina-habsora-gospel-ki-system-markiert-gebaeude-in-gaza-als-bombenziele-2023` | Israel: Habsora (Gospel) — KI-System markiert Gebäude in Gaz ↔ Israel: Habsora (Gospel) — KI-System markiert Gebäude in Gaz |
| 0.50 | `usa-switchblade-600-ai-target-recognition-2024` | `ukraine-usa-ukraine-switchblade-600-block-2-ki-zielerkennung-in-loitering-munition` | USA/Ukraine: Switchblade 600 Block 2 — KI-Zielerkennung in L ↔ USA/Ukraine: Switchblade 600 Block 2 — KI-Zielerkennung in L |
| 0.50 | `kolumbien-teleperformance-class-action-2023` | `kolumbien-sammelklage-gegen-teleperformance-wegen-arbeitsbedingungen-im-tiktok-und-meta` | Kolumbien: Sammelklage gegen Teleperformance wegen Arbeitsbe ↔ Kolumbien: Sammelklage gegen Teleperformance wegen Arbeitsbe |
| 0.50 | `wiz-deepfake-rappaport-voice-2024` | `usa-israel-wiz-cloud-security-deepfake-voicemail-von-ceo-rappaport-an-dutzende` | USA/Israel: Wiz (Cloud-Security) — Deepfake-Voicemail von CE ↔ USA/Israel: Wiz (Cloud-Security) — Deepfake-Voicemail von CE |
| 0.50 | `italien-deepseek-garante-blockierung-2025` | `italien-garante-blockiert-chinesische-ki-deepseek-wegen-gdpr-verstoessen-januar-2025` | Italien: Garante blockiert chinesische KI DeepSeek wegen GDP ↔ Italien: Garante blockiert chinesische KI DeepSeek wegen GDP |
| 0.50 | `mali-internet-shutdown-boni-medienverbote-2023-2024` | `mali-mehrmonatiger-internet-shutdown-in-boni-und-suspendierung-auslaendischer-medien` | Mali: Mehrmonatiger Internet-Shutdown in Boni und Suspendier ↔ Mali: Mehrmonatiger Internet-Shutdown in Boni und Suspendier |
| 0.50 | `brazil-bahia-feira-de-santana-facial-recognition-carnival` | `brasilien-96-falsch-treffer-rate-gesichtserkennung-beim-karneval-in-feira-de-santana` | Brasilien: 96 % Falsch-Treffer-Rate — Gesichtserkennung beim ↔ Brasilien: 96 % Falsch-Treffer-Rate — Gesichtserkennung beim |
| 0.50 | `mexico-curp-mandatory-biometric-2025` | `mexiko-biometrische-curp-wird-verpflichtend-ki-gestuetzte-gesicht-fingerabdruck-und-iris` | Mexiko: Biometrische CURP wird verpflichtend — KI-gestützte  ↔ Mexiko: Biometrische CURP wird verpflichtend — KI-gestützte  |
| 0.50 | `peru-reniec-dnie-biometric-strike-2024` | `peru-reniec-streik-2024-biometrisches-dnie-system-wegen-staendiger-ausfaelle-in-der-kritik` | Peru: RENIEC-Streik 2024 — biometrisches DNIe-System wegen ' ↔ Peru: RENIEC-Streik 2024 — biometrisches DNIe-System wegen ' |
| 0.50 | `pakistan-fia-digital-blasphemy-entrapment-2024` | `pakistan-fia-cyber-crime-einheit-kooperiert-mit-entrapment-ring-legal-commission-on` | Pakistan: FIA-Cyber-Crime-Einheit kooperiert mit Entrapment- ↔ Pakistan: FIA-Cyber-Crime-Einheit kooperiert mit Entrapment- |
| 0.50 | `usa-detroit-porcha-woodruff-frt-policy-2024` | `usa-porcha-woodruff-v-detroit-fehl-festnahme-einer-hochschwangeren-durch` | USA: Porcha Woodruff v. Detroit — Fehl-Festnahme einer Hochs ↔ USA: Porcha Woodruff v. Detroit — Fehl-Festnahme einer Hochs |

## Exact-Dup-Paare: Kandidat ↔ Kandidat (Score ≥ 0.7)

_Keine._

## Probable-Dup-Paare: Kandidat ↔ Kandidat (Score 0.5–0.7)

| Score | Kandidat A | Kandidat B | Hinweis |
|---:|---|---|---|
| 0.68 | `kenia-sama-meta-content-moderation-klage-berufung-2024` | `kenia-meta-sama-content-moderator-berufungsurteil-2024` | same country (KE), same year (2024) |
| 0.65 | `griechenland-centaur-hyperion-asyl-ueberwachung-fine-2024` | `greece-centaur-hyperion-gdpr-fine-2024` | same country (GR), same year (2024) |
| 0.59 | `usa-mobley-workday-ki-altersdiskriminierung-2024` | `usa-mobley-workday-adea-collective-2025` | same country (US) |
| 0.58 | `uk-home-office-ipic-immigration-ai-2024` | `uk-home-office-ipic-immigration-algorithm-2024` | same country (GB), same year (2024) |
| 0.57 | `iran-noor-plan-hijab-ai-2024` | `iran-nazer-app-bahai-frauen-citizen-reporting-2024` | same country (IR), same year (2024) |
| 0.57 | `poland-pl-belarus-grenze-ai-surveillance-2024` | `poland-belarus-border-surveillance-pushback-system-2024` | same country (PL), same year (2024) |
| 0.56 | `frankreich-iqva-cnil-bussgeld-gesundheitsdaten-2026` | `frankreich-cegedim-cnil-bussgeld-gesundheitsdaten-2024` | same country (FR) |
| 0.55 | `china-tibet-drichu-wechat-douyin-scan-2024` | `china-tibet-monastery-facial-recognition-gate-2024` | same country (CN), same year (2024) |
| 0.51 | `usa-allstate-arity-texas-paxton-klage-2025` | `usa-allstate-arity-texas-driver-data-2025` | same country (US), same year (2025) |
| 0.51 | `global-spacex-solareclipse-deepfake-musk-crypto-2024-04` | `global-musk-deepfake-youtube-livestream-50k-2024-06` | same country (US), same year (2024) |
| 0.51 | `uk-channel-ai-age-assessment-asylum-2025` | `uk-channel-ai-surveillance-isr-network-2025` | same country (GB), same year (2025) |
| 0.50 | `korea-telegram-deepfake-wave-230-rooms-2024` | `suedkorea-deepfake-telegram-nth-room-2024-universitaeten` | same country (KR), same year (2024) |

## Weak-Dup-Paare (Score 0.35–0.5, nur Hinweis)

| Score | Links | Rechts | Typ |
|---:|---|---|---|
| 0.49 | `bangladesh-rohingya-biometrische-registrierung-2024` | `bangladesch-unhcr-biometrie-registrierung-neuer-rohingya-gefluechteter-ab-dezember-2024` | bestand |
| 0.49 | `indien-karya-ki-datenlabler-faire-loehne-2023-2024` | `indien-non-profit-karya-zahlt-rurale-datenlabler-5-usd-stunde-und-gibt-ihnen` | bestand |
| 0.49 | `syria-assad-documents-surveillance-2024` | `syrien-nach-assads-sturz-im-dezember-2024-enthuellen-geheimdienst-archive-das-volle` | bestand |
| 0.49 | `my-pm-anwar-deepfake-investment-scam-2024-2025` | `in-ambani-tendulkar-kohli-deepfake-investment-scam-2024` | kandidat |
| 0.49 | `russia-lancet-ai-targeting-ukraine-2024` | `usa-switchblade-600-ai-target-recognition-2024` | kandidat |
| 0.49 | `uk-home-office-ipic-immigration-ai-2024` | `uk-geheimer-home-office-algorithmus-ipic-beeinflusst-abschiebungen-von-41-000-migranten` | bestand |
| 0.49 | `argentina-milei-massa-deepfake-election-2023` | `argentinien-erste-ki-wahl-deepfakes-auf-beiden-seiten-im-milei-vs-massa-wahlkampf-2023` | bestand |
| 0.49 | `hk-deepfake-romance-scam-ring-46m-arrests-2024-10` | `hongkong-polizei-zerschlaegt-deepfake-romance-scam-ring-mit-46-mio-usd-beute-2024` | bestand |
| 0.49 | `cote-divoire-coup-disinformation-2024` | `elfenbeinkueste-cote-divoire-virale-social-media-falschmeldungen-ueber-angeblichen-putsch` | bestand |
| 0.49 | `korea-inha-university-telegram-deepfake-arrest-2024` | `suedkorea-deepfake-telegram-nth-room-2024-universitaeten` | kandidat |
| 0.48 | `uk-met-police-lfr-protests-2023-2024` | `uk-vereinigtes-koenigreich-met-police-und-south-wales-police-setzen-live-facial` | bestand |
| 0.48 | `burkina-faso-internet-shutdowns-medienverbote-2023-2024` | `burkina-faso-junta-sperrt-13-internationale-medien-raeumt-csc-befugnis-ueber` | bestand |
| 0.48 | `deutschland-getir-gorillas-marktaustritt-2024` | `deutschland-getir-gorillas-zieht-sich-aus-deutschland-zurueck-algorithmisch-gesteuertes` | bestand |
| 0.48 | `uk-fca-ai-uninsurable-warnung-2024` | `uk-fca-chef-warnt-vor-uninsurable-buerger-innen-durch-hyper-personalisierung-2024` | bestand |
| 0.48 | `iraq-social-media-surveillance-2024` | `irak-ministerium-innen-denunzier-plattform-social-media-ueberwachung-von-journalist-innen` | bestand |
| 0.48 | `usa-bartz-anthropic-copyright-settlement-2025` | `usa-reddit-anthropic-scraping-2025` | kandidat |
| 0.48 | `nigeria-cybercrime-amendment-act-journalisten-2024` | `nigeria-cybercrime-amendment-act-2024-ermoeglicht-ueberwachung-ohne-gerichtsbeschluss` | bestand |
| 0.48 | `iran-bahai-frauen-noor-plan-digitale-ueberwachung-2024` | `iran-systematische-ueberwachung-und-verhaftung-von-bahai-frauen-unter-dem-noor-plan-mit` | bestand |
| 0.48 | `kazakhstan-tls-mitm-ooni-2024` | `kazakhstan-data-leak-16-million-2024` | kandidat |
| 0.48 | `kenia-sama-meta-content-moderation-klage-berufung-2024` | `kenia-berufungsgericht-erlaubt-185-facebook-moderator-innen-sammelklage-gegen-meta` | bestand |
| 0.48 | `uk-nhs-anima-health-annie-falsche-diagnose-london-2025` | `uk-nhs-ki-tool-annie-von-anima-health-erfindet-diabetes-und-herzdiagnosen-fuer-londoner` | bestand |
| 0.48 | `argentina-buenos-aires-srfp-unconstitutional-2023` | `argentinien-berufungsgericht-buenos-aires-erklaert-fluechtigen-gesichtserkennung-srfp` | bestand |
| 0.48 | `usa-amazon-just-walk-out-india-workers-2024` | `usa-amazon-just-walk-out-angebliche-ki-lief-in-wahrheit-ueber-1-000-niedriglohn-worker-in` | bestand |
| 0.48 | `italien-garante-ki-medizindaten-statement-2025` | `italien-deepseek-garante-blockierung-2025` | kandidat |
| 0.47 | `mali-bayraktar-amasrakad-douna-zivilisten-2024` | `mali-bayraktar-tb2-drohnenangriffe-der-fama-toeten-13-zivilist-innen-in-amasrakad-und-14` | bestand |
| 0.47 | `korea-park-snu-deepfake-10-years-2024` | `suedkorea-10-jahre-haft-fuer-hauptangeklagten-im-seoul-national-university-deepfake-ring` | bestand |
| 0.47 | `australia-operation-cumberland-arrests-2025` | `australien-afp-anklage-gegen-zwei-maenner-im-rahmen-der-operation-cumberland-ki-csam` | bestand |
| 0.47 | `wormgpt-fraudgpt-dark-llm-2023-2024` | `russland-wormgpt-und-fraudgpt-dark-llms-auf-gpt-j-basis-im-darknet-als-cybercrime-as-a` | bestand |
| 0.47 | `kenia-meta-sama-content-moderator-berufungsurteil-2024` | `kenia-sama-massenentlassung-content-moderation-exit-januar-2023` | kandidat |
| 0.47 | `italien-deepseek-garante-blockierung-2025` | `italien-replika-garante-fine-2025` | kandidat |
| 0.47 | `omnigpt-data-breach-2025-02` | `usa-omnigpt-datenleck-30-000-nutzer-und-34-mio-chat-nachrichten-auf-breachforums-verkauft` | bestand |
| 0.47 | `bahamas-rbpf-facial-recognition-expansion-2024` | `bs-royal-bahamas-police-force-weitet-gesichtserkennungs-cctv-mit-briefcam-und-shotspotter` | bestand |
| 0.47 | `usa-allstate-arity-texas-driver-data-2025` | `usa-texas-v-allstate-arity-daten-sammelklage-gegen-fahrer-tracking-fuer-ki-underwriting` | bestand |
| 0.47 | `vietnam-telegram-blockade-decree-147-mai-2025` | `vietnam-telegram-blockade-juni-2025-vorwurf-anti-staatliche-inhalte-10-000-kanaele-a05` | bestand |
| 0.47 | `morocco-pegasus-ongoing-2024` | `marokko-anhaltender-pegasus-einsatz-gegen-sahraoui-aktivist-innen-amnesty-bestaetigung` | bestand |
| 0.47 | `iran-nazer-app-bahai-frauen-citizen-reporting-2024` | `iran-nazer-app-als-crowdsourced-denunziations-plattform-unter-noor-plan-2024-un` | bestand |
| 0.47 | `korea-park-snu-deepfake-10-years-2024` | `korea-inha-university-telegram-deepfake-arrest-2024` | kandidat |
| 0.47 | `usa-detroit-porcha-woodruff-frt-policy-2024` | `usa-quran-reid-louisiana-frt-arrest-2023` | kandidat |
| 0.47 | `usa-pentagon-replicator-initiative-deployment-2024` | `usa-pentagon-replicator-initiative-hunderte-autonome-systeme-bis-2025-ausgeliefert-2024` | bestand |
| 0.47 | `usa-palantir-maven-smart-system-pentagon-2024` | `usa-palantir-maven-smart-system-wird-offizielles-pentagon-programm-20-000-nutzer-13-mrd` | bestand |
| 0.47 | `usa-thomson-reuters-ross-intelligence-fair-use-2025` | `usa-thomson-reuters-v-ross-intelligence-erstes-us-urteil-gegen-fair-use-beim-ki-training` | bestand |
| 0.47 | `usa-pasco-county-predictive-policing-settlement-2024` | `usa-pasco-county-sheriff-vergleich-beendet-algorithmisches-intelligence-led-policing` | bestand |
| 0.46 | `taiwan-china-deepfake-wahl-2024-msmtv-tsai-lai-ko` | `taiwan-wahl-2024-chinesische-ki-deepfakes-von-tsai-lai-und-ko-microsoft-dokumentiert-mss` | bestand |
| 0.46 | `suedkorea-yoon-kriegsrecht-deepfake-verwirrung-dezember-2024` | `suedkorea-yoons-kriegsrechts-erklaerung-3-dezember-2024-opposition-und-bank-chef-hielten` | bestand |
| 0.46 | `china-tibet-drichu-wechat-douyin-scan-2024` | `china-wechat-und-douyin-massenscan-zur-identifikation-tibetisch-buddhistischer-drichu` | bestand |
| 0.46 | `spanien-bosco-civio-algorithmus-court-2024` | `spanien-bosco-algorithmus-fuer-strom-sozialtarif-audiencia-nacional-verweigert-2024` | bestand |
| 0.46 | `bangladesch-internet-shutdown-juli-2024-aufstand-tote` | `bangladesch-juli-2024-internet-blackout-22-tage-shutdown-waehrend-studentenaufstand` | bestand |
| 0.46 | `china-meituan-algorithmus-tod-rider-2024-gig` | `china-meituan-ele-me-algorithmus-rider-tod-hangzhou-nach-18-stunden-schichten-reform` | bestand |
| 0.46 | `deepseek-r1-jailbreak-malware-2025` | `china-deepseek-r1-open-source-llm-versagt-in-58-der-jailbreak-tests-generiert-keylogger` | bestand |
| 0.46 | `uz-huawei-tashkent-safe-city-2024` | `uzbekistan-safe-city-huawei-expansion-2024` | kandidat |
| 0.46 | `uk-hugh-nelson-bolton-ai-csam-18-years-2024` | `uk-just-stop-oil-m25-whole-truth-five-2024` | kandidat |
| 0.45 | `senegal-deepfake-frauen-kandidatinnen-russland-disinfo-2024` | `senegal-koordinierte-deepfake-kampagnen-gegen-weibliche-kandidatinnen-und-russisch` | bestand |
| 0.45 | `usa-miami-pinecrest-deepfake-arrests-2023` | `usa-erste-bekannte-us-strafanklage-gegen-schueler-wegen-ki-deepfake-nacktbildern` | bestand |
| 0.45 | `israel-corsight-gaza-facial-recognition-2024` | `palaestina-israel-gaza-corsight-gesichtserkennung-mit-google-photos-hunderte` | bestand |
| 0.45 | `israel-unit8200-arabic-chatgpt-2024` | `israel-unit-8200-entwickelt-arabisches-chatgpt-aehnliches-sprachmodell-aus-abgehoerten` | bestand |
| 0.45 | `iran-noor-plan-hijab-ai-2024` | `iran-noor-plan-und-nazer-app-drohnen-gesichtserkennung-und-buerger-denunziation-gegen` | bestand |
| 0.45 | `china-quran-app-removal-hui-uyghur-2024` | `china-algorithmische-klassifikation-islamischer-religions-apps-als-terror-indikator-hui` | bestand |
| 0.45 | `usa-pelkey-ai-victim-impact-statement-arizona-2025` | `usa-chris-pelkey-ki-avatar-eines-getoeteten-mannes-spricht-eigenes-opfer-statement-vor` | bestand |
| 0.45 | `uk-bolt-employment-tribunal-worker-status-2024` | `uk-cma-uber-bolt-pricing-investigation-2024` | kandidat |
| 0.45 | `global-musk-deepfake-youtube-livestream-50k-2024-06` | `usa-globaler-pop-up-livestream-juni-2024-deepfake-musk-haust-50-000-usd-ab` | bestand |

_… und 154 weitere weak-dup-Paare._

## Promote-Empfehlung pro Kandidat

| candidate_id | source_file | klass | action |
|---|---|---|---|
| `aethiopien-amhara-internet-shutdown-2023-2024` | africa-2023-2025-round-1-agent-c.json | probable-dup | MERGE-INTO-ethiopia-fast-einjaehriger-internet-blackout-in-der-amhara-region-august-2023-juli-2024 |
| `aethiopien-meta-tigray-hassrede-klage-2025` | africa-2023-2025-round-1-agent-c.json | probable-dup | MERGE-INTO-ethiopia-aethiopien-kenia-2-milliarden-pfund-klage-gegen-meta-wegen-tigray-hassrede |
| `drc-ki-desinformation-m23-konflikt-2024` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `kenia-ruto-finance-bill-deepfake-ueberwachung-2024` | africa-2023-2025-round-1-agent-c.json | weak-dup | KEEP |
| `kenia-sama-meta-content-moderation-klage-berufung-2024` | africa-2023-2025-round-1-agent-c.json | probable-dup | MERGE-WITH-kenia-meta-sama-content-moderator-berufungsurteil-2024 |
| `kenia-uber-bolt-algorithmus-tawu-petition-2025` | africa-2023-2025-round-1-agent-c.json | weak-dup | KEEP |
| `kenia-worldcoin-high-court-verbot-2025` | africa-2023-2025-round-1-agent-c.json | weak-dup | KEEP |
| `mosambik-internet-shutdown-wahl-protest-2024` | africa-2023-2025-round-1-agent-c.json | probable-dup | MERGE-INTO-mosambik-internet-und-social-media-sperren-nach-umstrittener-wahl-2024-315-tote-bei |
| `nigeria-atiku-deepfake-audio-wahl-2023` | africa-2023-2025-round-1-agent-c.json | probable-dup | MERGE-INTO-nigeria-viraler-deepfake-audio-ueber-atiku-abubakar-okowa-und-tambuwal-angeblich-zur |
| `nigeria-cybercrime-amendment-act-journalisten-2024` | africa-2023-2025-round-1-agent-c.json | weak-dup | KEEP |
| `nigeria-nimc-nin-biometric-datenleak-2024` | africa-2023-2025-round-1-agent-c.json | weak-dup | KEEP |
| `sambia-cyber-security-act-massenueberwachung-2024` | africa-2023-2025-round-1-agent-c.json | probable-dup | MERGE-INTO-sambia-cyber-security-act-2024-ermoeglicht-echtzeit-ueberwachung-und-datenlokalisierung |
| `senegal-deepfake-frauen-kandidatinnen-russland-disinfo-2024` | africa-2023-2025-round-1-agent-c.json | weak-dup | KEEP |
| `sudan-rsf-ki-deepfake-burhan-bashir-2023-2024` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `suedafrika-sassa-srd-grant-algorithmus-ausschluss-2024` | africa-2023-2025-round-1-agent-c.json | weak-dup | KEEP |
| `suedafrika-shopping-mall-facial-recognition-lrc-2024` | africa-2023-2025-round-1-agent-c.json | weak-dup | KEEP |
| `suedafrika-trump-zuma-mk-deepfake-wahl-2024` | africa-2023-2025-round-1-agent-c.json | probable-dup | MERGE-INTO-suedafrika-duduzile-zuma-sambudla-verbreitet-trump-deepfake-zur-wahl-werbung-fuer-mk |
| `suedafrika-vumacam-anpr-johannesburg-cctv-rechtsstreit-2024` | africa-2023-2025-round-1-agent-c.json | weak-dup | KEEP |
| `suedsudan-tiktok-facebook-shutdown-2025` | africa-2023-2025-round-1-agent-c.json | probable-dup | MERGE-INTO-suedsudan-90-tage-social-media-sperre-fuer-facebook-und-tiktok-ab-22-januar-2025-nach |
| `tansania-internet-shutdown-wahl-2025` | africa-2023-2025-round-1-agent-c.json | probable-dup | MERGE-INTO-tansania-sechs-taegiger-landesweiter-internet-shutdown-bei-wahl-2025-un-expert-innen |
| `argentina-prosecutor-chatgpt-rulings-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `brazil-judge-chatgpt-fabricated-judgment-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `canada-csc-risk-tools-indigenous-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `eu-ai-act-predictive-justice-ban-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `italy-justemotions-ai-courts-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `netherlands-prokid-eu-ai-act-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | weak-dup | KEEP |
| `spain-catalonia-riscanvi-audit-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `spain-civio-prison-temporary-release-algorithm-2025` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `spain-viogen-femicide-risk-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `uk-moj-homicide-prediction-2025` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `uk-oasys-reoffending-profiling-2025` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `usa-california-cdcr-blocks-parole-audit-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `usa-new-jersey-psa-firearms-reform-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `usa-nyc-patternizr-sealed-records-2025` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `usa-pennsylvania-sentencing-risk-tool-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `au-deepfake-musk-crypto-quantum-ai-80k-victim-2024` | ai-crypto-scams-2024-2025-round-3-agent-a.json | probable-dup | MERGE-INTO-australien-deepfake-musk-video-kostet-einzelnen-anleger-80-000-aud-asic-nimmt-3-500-scam |
| `de-merz-deepfake-investment-platform-2024-2025` | ai-crypto-scams-2024-2025-round-3-agent-a.json | — | KEEP |
| `global-apple-glowtime-tim-cook-deepfake-crypto-2024-09` | ai-crypto-scams-2024-2025-round-3-agent-a.json | weak-dup | KEEP |
| `global-buterin-deepfake-wallet-drainer-cryptocore-2024` | ai-crypto-scams-2024-2025-round-3-agent-a.json | probable-dup | MERGE-INTO-usa-deepfake-vitalik-buterin-video-als-koeder-fuer-wallet-drainer-phishing-cryptocore |
| `global-musk-deepfake-youtube-livestream-50k-2024-06` | ai-crypto-scams-2024-2025-round-3-agent-a.json | probable-dup | MERGE-WITH-global-spacex-solareclipse-deepfake-musk-crypto-2024-04 |
| `global-spacex-solareclipse-deepfake-musk-crypto-2024-04` | ai-crypto-scams-2024-2025-round-3-agent-a.json | probable-dup | MERGE-WITH-global-musk-deepfake-youtube-livestream-50k-2024-06 |
| `global-unodc-southeast-asia-scam-compounds-ai-deepfake-2024` | ai-crypto-scams-2024-2025-round-3-agent-a.json | probable-dup | MERGE-INTO-myanmar-unodc-bericht-oktober-2024-scam-compounds-nutzen-ki-deepfakes-1-530-anstieg-bei |
| `hk-deepfake-romance-scam-ring-46m-arrests-2024-10` | ai-crypto-scams-2024-2025-round-3-agent-a.json | weak-dup | KEEP |
| `in-ambani-tendulkar-kohli-deepfake-investment-scam-2024` | ai-crypto-scams-2024-2025-round-3-agent-a.json | probable-dup | MERGE-INTO-indien-deepfake-videos-von-mukesh-ambani-sachin-tendulkar-und-virat-kohli-treiben |
| `jp-maezawa-meta-deepfake-investment-ad-lawsuit-2024-05` | ai-crypto-scams-2024-2025-round-3-agent-a.json | probable-dup | MERGE-INTO-japan-milliardaer-yusaku-maezawa-verklagt-meta-wegen-deepfake-investment-anzeigen-2024 |
| `kp-lazarus-unc1069-deepfake-zoom-crypto-firms-2024-2025` | ai-crypto-scams-2024-2025-round-3-agent-a.json | weak-dup | KEEP |
| `kr-elon-musk-romance-deepfake-70m-won-2023-2024` | ai-crypto-scams-2024-2025-round-3-agent-a.json | probable-dup | MERGE-INTO-suedkorea-frau-verliert-70-mio-won-an-deepfake-elon-musk-romance-scam-2023 |
| `my-pm-anwar-deepfake-investment-scam-2024-2025` | ai-crypto-scams-2024-2025-round-3-agent-a.json | probable-dup | MERGE-INTO-malaysia-deepfake-videos-von-pm-anwar-ibrahim-treiben-investment-scam-welle-2024 |
| `sg-pm-lee-deepfake-crypto-investment-scam-2023-2024` | ai-crypto-scams-2024-2025-round-3-agent-a.json | probable-dup | MERGE-INTO-singapur-deepfake-videos-von-pm-lee-hsien-loong-bewerben-gefaelschtes-krypto-investment |
| `uk-martin-lewis-deepfake-celebrity-crypto-27m-pounds-2024-2025` | ai-crypto-scams-2024-2025-round-3-agent-a.json | weak-dup | KEEP |
| `us-fbi-ic3-2024-crypto-fraud-93b-aigeneration-aggregate` | ai-crypto-scams-2024-2025-round-3-agent-a.json | weak-dup | KEEP |
| `australia-operation-cumberland-arrests-2025` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | weak-dup | KEEP |
| `australia-tasmania-ai-csam-jailed-2024` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | — | KEEP |
| `brazil-school-deepfake-bahia-mato-grosso-2024` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | probable-dup | MERGE-INTO-brasilien-schulische-deepfake-wellen-2024-in-bahia-und-mato-grosso-nach-rio-de-janeiro |
| `europol-operation-cumberland-ai-csam-2025` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | weak-dup | KEEP |
| `interpol-20-arrests-ai-csam-2025` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | weak-dup | KEEP |
| `japan-ai-csam-sales-arrests-2025` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | weak-dup | KEEP |
| `korea-inha-university-telegram-deepfake-arrest-2024` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | probable-dup | MERGE-INTO-suedkorea-inha-universitaet-deepfake-telegram-raum-mit-1-200-mitgliedern-aufgeflogen |
| `korea-park-snu-deepfake-10-years-2024` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | weak-dup | KEEP |
| `korea-telegram-deepfake-wave-230-rooms-2024` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | probable-dup | MERGE-WITH-suedkorea-deepfake-telegram-nth-room-2024-universitaeten |
| `spain-almendralejo-15-minors-probation-2024` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | weak-dup | KEEP |
| `uk-hugh-nelson-bolton-ai-csam-18-years-2024` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | probable-dup | MERGE-INTO-uk-hugh-nelson-zu-18-jahren-haft-verurteilt-landmark-urteil-zu-ki-csam-mit-daz-3d-2024 |
| `uk-iwf-380-percent-ai-csam-2024` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | — | KEEP |
| `usa-anderegg-wisconsin-stable-diffusion-csam-2024` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | probable-dup | MERGE-INTO-usa-steven-anderegg-in-wisconsin-erste-doj-anklage-wegen-ki-generierter-csam-mit-stable |
| `usa-lancaster-country-day-deepfake-charges-2024` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | weak-dup | KEEP |
| `usa-miami-pinecrest-deepfake-arrests-2023` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | weak-dup | KEEP |
| `australia-deepfake-norman-swan-karl-kruszelnicki-2024` | ai-health-misinformation-round-5-2026-06-01.json | — | KEEP |
| `brazil-meta-lawsuit-deepfake-drauzio-varella-2024` | ai-health-misinformation-round-5-2026-06-01.json | — | KEEP |
| `canada-quebec-doctors-deepfake-scam-2025` | ai-health-misinformation-round-5-2026-06-01.json | — | KEEP |
| `canada-theresa-tam-deepfake-vaccine-2025` | ai-health-misinformation-round-5-2026-06-01.json | — | KEEP |
| `global-frontiers-rat-genitalia-ai-image-2024` | ai-health-misinformation-round-5-2026-06-01.json | — | KEEP |
| `south-africa-abdool-karim-deepfake-vaccine-2025` | ai-health-misinformation-round-5-2026-06-01.json | — | KEEP |
| `uk-bmj-deepfake-doctors-mosley-jones-2024` | ai-health-misinformation-round-5-2026-06-01.json | — | KEEP |
| `usa-amazon-ai-mushroom-foraging-books-2023` | ai-health-misinformation-round-5-2026-06-01.json | — | KEEP |
| `usa-jama-chatgpt-cancer-treatment-hallucinations-2023` | ai-health-misinformation-round-5-2026-06-01.json | — | KEEP |
| `usa-neda-tessa-chatbot-eating-disorder-2023` | ai-health-misinformation-round-5-2026-06-01.json | — | KEEP |
| `usa-nejm-retraction-ai-image-bronchial-cast-2026` | ai-health-misinformation-round-5-2026-06-01.json | — | KEEP |
| `usa-tom-hanks-ai-deepfake-drug-ads-2024` | ai-health-misinformation-round-5-2026-06-01.json | — | KEEP |
| `australien-imed-harrison-annalise-ki-training-radiologie-2024` | ai-healthcare-eu-asia-round-2-agent-c.json | weak-dup | KEEP |
| `deutschland-charite-ki-fairness-erhebung-2023` | ai-healthcare-eu-asia-round-2-agent-c.json | probable-dup | MERGE-INTO-deutschland-charite-studie-zeigt-nur-ein-drittel-der-ki-entwickler-innen-im |
| `deutschland-frankreich-ada-symptoma-symptomchecker-unterdiagnose-er-2024` | ai-healthcare-eu-asia-round-2-agent-c.json | — | KEEP |
| `frankreich-cegedim-cnil-bussgeld-gesundheitsdaten-2024` | ai-healthcare-eu-asia-round-2-agent-c.json | probable-dup | MERGE-INTO-frankreich-cnil-verhaengt-800-000-euro-bussgeld-gegen-cegedim-sante-wegen-unbefugter |
| `frankreich-cegedim-cyberangriff-15-millionen-patientendaten-2026` | ai-healthcare-eu-asia-round-2-agent-c.json | probable-dup | MERGE-INTO-frankreich-cyberangriff-auf-cegedim-sante-15-8-millionen-patientendaten-gestohlen-2025 |
| `frankreich-health-data-hub-microsoft-conseil-etat-2024` | ai-healthcare-eu-asia-round-2-agent-c.json | weak-dup | KEEP |
| `frankreich-iqva-cnil-bussgeld-gesundheitsdaten-2026` | ai-healthcare-eu-asia-round-2-agent-c.json | probable-dup | MERGE-WITH-frankreich-cegedim-cnil-bussgeld-gesundheitsdaten-2024 |
| `indien-aadhaar-biometrische-authentifizierungsausschluss-gesundheit-2024` | ai-healthcare-eu-asia-round-2-agent-c.json | — | KEEP |
| `italien-garante-drei-krankenhaeuser-ki-risikostratifizierung-2023` | ai-healthcare-eu-asia-round-2-agent-c.json | weak-dup | KEEP |
| `italien-garante-ki-medizindaten-statement-2025` | ai-healthcare-eu-asia-round-2-agent-c.json | weak-dup | KEEP |
| `korea-lunit-mammografie-14-prozent-uebersehene-invasive-krebse-2025` | ai-healthcare-eu-asia-round-2-agent-c.json | — | KEEP |
| `korea-scatterlab-iruda-kakaotalk-pipc-bussgeld-2021` | ai-healthcare-eu-asia-round-2-agent-c.json | probable-dup | MERGE-INTO-suedkorea-pipc-verhaengt-103-millionen-won-bussgeld-gegen-scatterlab-fuer-ki-chatbot |
| `niederlande-uwv-algorithmische-diskriminierung-betrug-2024` | ai-healthcare-eu-asia-round-2-agent-c.json | — | KEEP |
| `uk-babylon-health-zusammenbruch-mhra-gp-at-hand-2023` | ai-healthcare-eu-asia-round-2-agent-c.json | weak-dup | KEEP |
| `uk-deepmind-streams-royal-free-class-action-2024` | ai-healthcare-eu-asia-round-2-agent-c.json | weak-dup | KEEP |
| `uk-nhs-anima-health-annie-falsche-diagnose-london-2025` | ai-healthcare-eu-asia-round-2-agent-c.json | weak-dup | KEEP |
| `uk-nhs-foresight-llama-57m-pause-datenschutz-2025` | ai-healthcare-eu-asia-round-2-agent-c.json | — | KEEP |
| `uk-synnovis-ransomware-pathologie-patiententod-2024` | ai-healthcare-eu-asia-round-2-agent-c.json | weak-dup | KEEP |
| `australien-ato-robotax-altschulden-2024` | ai-tax-insurance-2023-2025-round-3-agent-c.json | — | KEEP |
| `deutschland-finanzamt-ki-risikomanagement-nrw-2025` | ai-tax-insurance-2023-2025-round-3-agent-c.json | — | KEEP |
| `frankreich-dgfip-foncier-innovant-pool-detektion-2023` | ai-tax-insurance-2023-2025-round-3-agent-c.json | weak-dup | KEEP |
| `italien-agenzia-entrate-vera-algorithmus-2022` | ai-tax-insurance-2023-2025-round-3-agent-c.json | probable-dup | MERGE-INTO-italien-vera-ki-der-agenzia-delle-entrate-scannt-bankkonten-und-e-rechnungen-2022 |
| `niederlande-belastingdienst-fsv-bussgeld-2022` | ai-tax-insurance-2023-2025-round-3-agent-c.json | weak-dup | KEEP |
| `spanien-aeat-teseo-hlf-risikoscoring-2024` | ai-tax-insurance-2023-2025-round-3-agent-c.json | weak-dup | KEEP |
| `uk-fca-ai-uninsurable-warnung-2024` | ai-tax-insurance-2023-2025-round-3-agent-c.json | weak-dup | KEEP |
| `uk-hmrc-quantexa-connect-2024-vertrag` | ai-tax-insurance-2023-2025-round-3-agent-c.json | probable-dup | MERGE-INTO-uk-hmrc-unterzeichnet-175-mio-gbp-vertrag-mit-quantexa-fuer-ki-steuerfahndung-2024 |
| `usa-allstate-arity-texas-paxton-klage-2025` | ai-tax-insurance-2023-2025-round-3-agent-c.json | probable-dup | MERGE-WITH-usa-allstate-arity-texas-driver-data-2025 |
| `usa-colorado-sb21-169-lebensversicherung-2024` | ai-tax-insurance-2023-2025-round-3-agent-c.json | probable-dup | MERGE-INTO-usa-colorado-sb21-169-wird-operativ-lebensversicherer-muessen-bis-dezember-2024-ki-bias |
| `usa-humana-nh-predict-medicare-klage-2023` | ai-tax-insurance-2023-2025-round-3-agent-c.json | weak-dup | KEEP |
| `usa-irs-eitc-rassendisparitaet-audit-algorithmus` | ai-tax-insurance-2023-2025-round-3-agent-c.json | — | KEEP |
| `usa-lemonade-bipa-biometrie-klage-illinois` | ai-tax-insurance-2023-2025-round-3-agent-c.json | weak-dup | KEEP |
| `usa-mobley-workday-ki-altersdiskriminierung-2024` | ai-tax-insurance-2023-2025-round-3-agent-c.json | probable-dup | MERGE-WITH-usa-mobley-workday-adea-collective-2025 |
| `usa-naic-model-bulletin-ai-2023` | ai-tax-insurance-2023-2025-round-3-agent-c.json | weak-dup | KEEP |
| `usa-nydfs-circular-letter-7-2024` | ai-tax-insurance-2023-2025-round-3-agent-c.json | probable-dup | MERGE-INTO-usa-new-york-dfs-circular-letter-no-7-2024-verbindliche-ki-regeln-fuer-versicherungs |
| `usa-senate-pmi-medicare-advantage-ki-bericht-2024` | ai-tax-insurance-2023-2025-round-3-agent-c.json | — | KEEP |
| `usa-state-farm-kelly-alabama-ki-diskriminierung-2024` | ai-tax-insurance-2023-2025-round-3-agent-c.json | probable-dup | MERGE-INTO-usa-state-farm-verklagt-wegen-ki-diskriminierung-schwarzer-behinderter-hausbesitzer-in |
| `australien-ai-traffic-cameras-nsw-2024-fehlfines` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `bangladesch-internet-shutdown-juli-2024-aufstand-tote` | asia-pacific-2024-2025-round-1-agent-e.json | weak-dup | KEEP |
| `cambodia-myanmar-scam-compounds-ki-deepfake-2025-amnesty` | asia-pacific-2024-2025-round-1-agent-e.json | weak-dup | KEEP |
| `china-deepseek-zensur-tiananmen-xi-2025-us-test` | asia-pacific-2024-2025-round-1-agent-e.json | weak-dup | KEEP |
| `china-ki-kennzeichnungspflicht-cac-gb-45438-2025` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `china-meituan-algorithmus-tod-rider-2024-gig` | asia-pacific-2024-2025-round-1-agent-e.json | weak-dup | KEEP |
| `hongkong-smartview-7000-cctv-gesichtserkennung-2024` | asia-pacific-2024-2025-round-1-agent-e.json | weak-dup | KEEP |
| `indien-eci-bjp-amit-shah-deepfake-2024-shakti-whatsapp` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `indien-hyderabad-amnesty-ban-the-scan-cmd-control-2024` | asia-pacific-2024-2025-round-1-agent-e.json | probable-dup | MERGE-INTO-indien-hyderabad-command-und-control-centre-fuer-600-000-gesichtserkennungs-kameras |
| `indien-poshan-tracker-gesichtserkennung-rationen-2025` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `japan-line-naver-datenleck-2023-2024-tokio-direktive` | asia-pacific-2024-2025-round-1-agent-e.json | weak-dup | KEEP |
| `myanmar-psms-50000-dissidenten-huawei-2025` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `neuseeland-msd-ki-sozialhilfe-amendment-2026-maori` | asia-pacific-2024-2025-round-1-agent-e.json | probable-dup | MERGE-INTO-neuseeland-social-security-modernisation-amendment-ministerium-darf-ki-ueber-sozialhilfe |
| `pakistan-firewall-china-dpi-2024-lims-wahlen` | asia-pacific-2024-2025-round-1-agent-e.json | weak-dup | KEEP |
| `philippinen-ntf-elcac-facebook-red-tagging-ki-2024` | asia-pacific-2024-2025-round-1-agent-e.json | probable-dup | MERGE-INTO-philippinen-ntf-elcac-nutzt-facebook-fuer-red-tagging-450-faelle-im-1-halbjahr-2024 |
| `sri-lanka-online-safety-act-2024-osc-presse` | asia-pacific-2024-2025-round-1-agent-e.json | probable-dup | MERGE-INTO-sri-lanka-online-safety-act-no-9-2024-online-safety-commission-ohne |
| `suedkorea-deepfake-telegram-nth-room-2024-universitaeten` | asia-pacific-2024-2025-round-1-agent-e.json | probable-dup | MERGE-WITH-korea-telegram-deepfake-wave-230-rooms-2024 |
| `suedkorea-yoon-kriegsrecht-deepfake-verwirrung-dezember-2024` | asia-pacific-2024-2025-round-1-agent-e.json | weak-dup | KEEP |
| `taiwan-china-deepfake-wahl-2024-msmtv-tsai-lai-ko` | asia-pacific-2024-2025-round-1-agent-e.json | weak-dup | KEEP |
| `vietnam-telegram-blockade-decree-147-mai-2025` | asia-pacific-2024-2025-round-1-agent-e.json | weak-dup | KEEP |
| `iran-russia-shahed-136ms-ai-upgrade-2024` | autonomous-weapons-military-ai-2022-2025-round-4-agent-a.json | weak-dup | KEEP |
| `israel-gospel-habsora-ai-targeting-2023` | autonomous-weapons-military-ai-2022-2025-round-4-agent-a.json | probable-dup | MERGE-INTO-palaestina-habsora-gospel-ki-system-markiert-gebaeude-in-gaza-als-bombenziele-2023 |
| `myanmar-junta-chinese-drones-civilian-strikes-2024` | autonomous-weapons-military-ai-2022-2025-round-4-agent-a.json | weak-dup | KEEP |
| `nato-revised-ai-strategy-2024` | autonomous-weapons-military-ai-2022-2025-round-4-agent-a.json | probable-dup | MERGE-INTO-belgien-revidierte-ki-strategie-2024-autonomy-implementation-plan-und-data-und-ai-review |
| `russia-lancet-ai-targeting-ukraine-2024` | autonomous-weapons-military-ai-2022-2025-round-4-agent-a.json | weak-dup | KEEP |
| `sudan-bayraktar-tb2-civilian-strikes-2024` | autonomous-weapons-military-ai-2022-2025-round-4-agent-a.json | — | KEEP |
| `uk-mod-ai-targeting-contracts-2024` | autonomous-weapons-military-ai-2022-2025-round-4-agent-a.json | weak-dup | KEEP |
| `ukraine-delta-avengers-ai-battlefield-2024` | autonomous-weapons-military-ai-2022-2025-round-4-agent-a.json | — | KEEP |
| `ukraine-magura-v5-sea-drone-black-sea-2024` | autonomous-weapons-military-ai-2022-2025-round-4-agent-a.json | weak-dup | KEEP |
| `ukraine-saker-scout-autonomous-strike-2023` | autonomous-weapons-military-ai-2022-2025-round-4-agent-a.json | — | KEEP |
| `un-gge-laws-rolling-text-negotiations-2025` | autonomous-weapons-military-ai-2022-2025-round-4-agent-a.json | weak-dup | KEEP |
| `un-unga-resolution-78-241-laws-2023` | autonomous-weapons-military-ai-2022-2025-round-4-agent-a.json | weak-dup | KEEP |
| `usa-anduril-roadrunner-deployment-2024` | autonomous-weapons-military-ai-2022-2025-round-4-agent-a.json | weak-dup | KEEP |
| `usa-palantir-maven-smart-system-pentagon-2024` | autonomous-weapons-military-ai-2022-2025-round-4-agent-a.json | weak-dup | KEEP |
| `usa-pentagon-replicator-initiative-deployment-2024` | autonomous-weapons-military-ai-2022-2025-round-4-agent-a.json | weak-dup | KEEP |
| `usa-switchblade-600-ai-target-recognition-2024` | autonomous-weapons-military-ai-2022-2025-round-4-agent-a.json | probable-dup | MERGE-INTO-ukraine-usa-ukraine-switchblade-600-block-2-ki-zielerkennung-in-loitering-munition |
| `cl-emotiv-supreme-court-brain-data-2023` | brain-computer-interface-privacy-round-5-2026-06-01.json | — | KEEP |
| `cn-brainco-school-eeg-headbands-2019` | brain-computer-interface-privacy-round-5-2026-06-01.json | — | KEEP |
| `cn-deayea-train-driver-eeg-monitoring-2018` | brain-computer-interface-privacy-round-5-2026-06-01.json | — | KEEP |
| `fr-unesco-neurotech-ethics-recommendation-2025` | brain-computer-interface-privacy-round-5-2026-06-01.json | — | KEEP |
| `usa-california-neural-data-sb1223-2024` | brain-computer-interface-privacy-round-5-2026-06-01.json | — | KEEP |
| `usa-colorado-neural-data-law-hb24-1058-2024` | brain-computer-interface-privacy-round-5-2026-06-01.json | — | KEEP |
| `usa-emotiv-consumer-eeg-neurorights-report-2024` | brain-computer-interface-privacy-round-5-2026-06-01.json | — | KEEP |
| `usa-neuralink-arbaugh-thread-retraction-2024` | brain-computer-interface-privacy-round-5-2026-06-01.json | — | KEEP |
| `usa-neuralink-monkey-deaths-2023` | brain-computer-interface-privacy-round-5-2026-06-01.json | — | KEEP |
| `usa-second-sight-argus-abandoned-patients-2022` | brain-computer-interface-privacy-round-5-2026-06-01.json | — | KEEP |
| `usa-ut-austin-semantic-decoder-fmri-2023` | brain-computer-interface-privacy-round-5-2026-06-01.json | — | KEEP |
| `ae-g42-china-decoupling-2024` | brics-ai-cooperation-round-5-2026-06-01.json | — | KEEP |
| `cn-russia-garpiya-drone-2024` | brics-ai-cooperation-round-5-2026-06-01.json | — | KEEP |
| `ir-china-shahed-beidou-2025` | brics-ai-cooperation-round-5-2026-06-01.json | — | KEEP |
| `ir-tiandy-tehran-surveillance-2024` | brics-ai-cooperation-round-5-2026-06-01.json | — | KEEP |
| `pk-lahore-cpec-ai-policing-2024` | brics-ai-cooperation-round-5-2026-06-01.json | — | KEEP |
| `rs-huawei-belgrade-elte-expansion-2024` | brics-ai-cooperation-round-5-2026-06-01.json | weak-dup | KEEP |
| `ru-alabuga-shahed-ai-upgrade-2024` | brics-ai-cooperation-round-5-2026-06-01.json | — | KEEP |
| `ru-sberbank-china-ai-pact-2025` | brics-ai-cooperation-round-5-2026-06-01.json | — | KEEP |
| `sa-huawei-smart-city-hajj-2024` | brics-ai-cooperation-round-5-2026-06-01.json | weak-dup | KEEP |
| `ug-huawei-bobi-wine-spying-2024` | brics-ai-cooperation-round-5-2026-06-01.json | — | KEEP |
| `uz-huawei-tashkent-safe-city-2024` | brics-ai-cooperation-round-5-2026-06-01.json | weak-dup | KEEP |
| `ve-cantv-zte-fatherland-card-2024` | brics-ai-cooperation-round-5-2026-06-01.json | — | KEEP |
| `zw-cloudwalk-facial-bias-2024` | brics-ai-cooperation-round-5-2026-06-01.json | — | KEEP |
| `kazakhstan-bloody-january-facial-recognition-2022` | central-asia-2022-2025-round-2-agent-a.json | weak-dup | KEEP |
| `kazakhstan-data-leak-16-million-2024` | central-asia-2022-2025-round-2-agent-a.json | weak-dup | KEEP |
| `kazakhstan-fr-fugitives-debtors-2024` | central-asia-2022-2025-round-2-agent-a.json | weak-dup | KEEP |
| `kazakhstan-pegasus-activists-journalists-2024` | central-asia-2022-2025-round-2-agent-a.json | weak-dup | KEEP |
| `kazakhstan-sergek-aws-expansion-2024` | central-asia-2022-2025-round-2-agent-a.json | — | KEEP |
| `kazakhstan-sim-biometric-mandatory-2026` | central-asia-2022-2025-round-2-agent-a.json | — | KEEP |
| `kazakhstan-tls-mitm-ooni-2024` | central-asia-2022-2025-round-2-agent-a.json | weak-dup | KEEP |
| `kyrgyzstan-bishkek-facial-recognition-2022-2024` | central-asia-2022-2025-round-2-agent-a.json | weak-dup | KEEP |
| `kyrgyzstan-tiktok-ban-2024` | central-asia-2022-2025-round-2-agent-a.json | — | KEEP |
| `tajikistan-gbao-internet-shutdown-2022` | central-asia-2022-2025-round-2-agent-a.json | weak-dup | KEEP |
| `tajikistan-likes-criminalization-2018-2024` | central-asia-2022-2025-round-2-agent-a.json | weak-dup | KEEP |
| `tajikistan-safe-city-facial-recognition-2022` | central-asia-2022-2025-round-2-agent-a.json | probable-dup | MERGE-INTO-tadschikistan-huawei-safe-city-in-duschanbe-erhaelt-gesichtserkennungs-upgrade-25-prozent |
| `turkmenistan-internet-monopoly-isolation-2024` | central-asia-2022-2025-round-2-agent-a.json | — | KEEP |
| `turkmenistan-vpn-paid-corruption-2023-2024` | central-asia-2022-2025-round-2-agent-a.json | weak-dup | KEEP |
| `uzbekistan-biometric-border-foreigners-2024` | central-asia-2022-2025-round-2-agent-a.json | probable-dup | MERGE-INTO-usbekistan-biometrische-erfassung-aller-einreisenden-auslaender-an-grenzkontrollpunkten |
| `uzbekistan-blogger-crackdown-2023-2024` | central-asia-2022-2025-round-2-agent-a.json | weak-dup | KEEP |
| `uzbekistan-karakalpakstan-internet-shutdown-2022` | central-asia-2022-2025-round-2-agent-a.json | probable-dup | MERGE-INTO-usbekistan-internet-blackout-in-karakalpakstan-begleitet-toedliche-niederschlagung-der |
| `uzbekistan-safe-city-huawei-expansion-2024` | central-asia-2022-2025-round-2-agent-a.json | weak-dup | KEEP |
| `france-sainte-soline-drone-surveillance-2023` | climate-protest-surveillance-2023-2025-round-4-agent-d.json | weak-dup | KEEP |
| `france-soulevements-terre-dissolution-2023` | climate-protest-surveillance-2023-2025-round-4-agent-d.json | weak-dup | KEEP |
| `germany-letzte-generation-bundesweite-razzia-2023` | climate-protest-surveillance-2023-2025-round-4-agent-d.json | weak-dup | KEEP |
| `germany-letzte-generation-tkue-2022-2023` | climate-protest-surveillance-2023-2025-round-4-agent-d.json | weak-dup | KEEP |
| `germany-luetzerath-raeumung-datenextraktion-2023` | climate-protest-surveillance-2023-2025-round-4-agent-d.json | weak-dup | KEEP |
| `italy-ultima-generazione-special-surveillance-2024` | climate-protest-surveillance-2023-2025-round-4-agent-d.json | weak-dup | KEEP |
| `netherlands-xr-amnesty-recording-dissent-2024` | climate-protest-surveillance-2023-2025-round-4-agent-d.json | — | KEEP |
| `uae-cop28-mass-surveillance-2023` | climate-protest-surveillance-2023-2025-round-4-agent-d.json | weak-dup | KEEP |
| `uk-drax-operation-infusion-2024` | climate-protest-surveillance-2023-2025-round-4-agent-d.json | — | KEEP |
| `uk-just-stop-oil-m25-whole-truth-five-2024` | climate-protest-surveillance-2023-2025-round-4-agent-d.json | probable-dup | MERGE-INTO-uk-vereinigtes-koenigreich-whole-truth-five-just-stop-oil-gruender-roger-hallam-zu-fuenf |
| `uk-met-police-lfr-protests-2023-2024` | climate-protest-surveillance-2023-2025-round-4-agent-d.json | weak-dup | KEEP |
| `uk-prevent-environmental-referrals-2023` | climate-protest-surveillance-2023-2025-round-4-agent-d.json | weak-dup | KEEP |
| `us-cop-city-rico-indictment-2023` | climate-protest-surveillance-2023-2025-round-4-agent-d.json | weak-dup | KEEP |
| `us-tigerswan-pipeline-surveillance-playbook-2023` | climate-protest-surveillance-2023-2025-round-4-agent-d.json | weak-dup | KEEP |
| `ghana-meta-teleperformance-accra-moderatoren-suizidversuch-2024-2025` | content-moderation-worker-exploitation-2022-2025-round-4-agent-b.json | probable-dup | MERGE-INTO-ghana-meta-verlagert-content-moderation-nach-accra-zu-teleperformance-suizidversuch-und |
| `global-appen-google-vertragskuendigung-bard-2024` | content-moderation-worker-exploitation-2022-2025-round-4-agent-b.json | probable-dup | MERGE-INTO-usa-global-usa-google-kuendigt-82-8-mio-usd-vertrag-mit-appen-gefaehrdet-2-000-search |
| `indien-karya-ki-datenlabler-faire-loehne-2023-2024` | content-moderation-worker-exploitation-2022-2025-round-4-agent-b.json | weak-dup | KEEP |
| `kenia-african-content-moderators-union-gruendung-2023` | content-moderation-worker-exploitation-2022-2025-round-4-agent-b.json | probable-dup | MERGE-INTO-kenia-gruendung-der-african-content-moderators-union-in-nairobi-mai-2023 |
| `kenia-data-labelers-offener-brief-biden-mai-2024` | content-moderation-worker-exploitation-2022-2025-round-4-agent-b.json | probable-dup | MERGE-INTO-kenia-97-datenlabler-und-content-moderatoren-in-nairobi-schreiben-offenen-brief-an-us |
| `kenia-meta-sama-content-moderator-berufungsurteil-2024` | content-moderation-worker-exploitation-2022-2025-round-4-agent-b.json | probable-dup | MERGE-WITH-kenia-sama-meta-content-moderation-klage-berufung-2024 |
| `kenia-openai-sama-rlhf-datenlabler-2-dollar-2022-2023` | content-moderation-worker-exploitation-2022-2025-round-4-agent-b.json | probable-dup | MERGE-INTO-kenia-openai-liess-chatgpt-trainingsdaten-von-sama-arbeitern-in-nairobi-fuer-unter-2-usd |
| `kenia-remotasks-abrupte-schliessung-maerz-2024` | content-moderation-worker-exploitation-2022-2025-round-4-agent-b.json | probable-dup | MERGE-INTO-kenia-nigeria-pakistan-scale-ai-schliesst-remotasks-abrupt-und-sperrt-tausende-ki |
| `kenia-sama-massenentlassung-content-moderation-exit-januar-2023` | content-moderation-worker-exploitation-2022-2025-round-4-agent-b.json | probable-dup | MERGE-INTO-kenia-sama-entlaesst-ueber-180-content-moderatoren-und-beendet-das-meta-geschaeft-januar |
| `kolumbien-teleperformance-class-action-2023` | content-moderation-worker-exploitation-2022-2025-round-4-agent-b.json | probable-dup | MERGE-INTO-kolumbien-sammelklage-gegen-teleperformance-wegen-arbeitsbedingungen-im-tiktok-und-meta |
| `kolumbien-teleperformance-tiktok-moderatoren-uni-abkommen-2023` | content-moderation-worker-exploitation-2022-2025-round-4-agent-b.json | probable-dup | MERGE-INTO-kolumbien-tiktok-subunternehmer-teleperformance-unterzeichnet-historisches-gewerkschafts |
| `philippinen-scale-ai-remotasks-digitale-sweatshops-2023` | content-moderation-worker-exploitation-2022-2025-round-4-agent-b.json | weak-dup | KEEP |
| `usa-scale-ai-outlier-schuster-ptbs-sammelklage-januar-2025` | content-moderation-worker-exploitation-2022-2025-round-4-agent-b.json | probable-dup | MERGE-INTO-usa-sammelklage-schuster-v-scale-ai-outlier-wegen-psychischer-schaeden-durch-ki-safety |
| `usa-scale-ai-outlier-warn-act-massenentlassung-oktober-2024` | content-moderation-worker-exploitation-2022-2025-round-4-agent-b.json | probable-dup | MERGE-INTO-usa-scale-ai-outlier-und-hireart-verklagt-wegen-massenentlassung-von-500-datenlabler-ohne |
| `usa-surge-ai-unpaid-wages-sammelklage-2025` | content-moderation-worker-exploitation-2022-2025-round-4-agent-b.json | weak-dup | KEEP |
| `anthropic-gtg-5004-uk-ransomware-as-a-service-2025` | cybersecurity-ai-2023-2025-round-4-agent-c.json | — | KEEP |
| `anthropic-north-korea-it-worker-claude-2025` | cybersecurity-ai-2023-2025-round-4-agent-c.json | weak-dup | KEEP |
| `anthropic-vibe-hacking-extortion-17-orgs-2025` | cybersecurity-ai-2023-2025-round-4-agent-c.json | weak-dup | KEEP |
| `arup-hong-kong-deepfake-cfo-25m-2024` | cybersecurity-ai-2023-2025-round-4-agent-c.json | — | KEEP |
| `deepseek-r1-jailbreak-malware-2025` | cybersecurity-ai-2023-2025-round-4-agent-c.json | weak-dup | KEEP |
| `ferrari-deepfake-ceo-vigna-2024` | cybersecurity-ai-2023-2025-round-4-agent-c.json | probable-dup | MERGE-INTO-italien-ferrari-deepfake-anruf-imitiert-ceo-vigna-vereitelt-durch-buch-frage-2024 |
| `funksec-ai-ransomware-algeria-2024` | cybersecurity-ai-2023-2025-round-4-agent-c.json | weak-dup | KEEP |
| `google-gtig-gemini-apt-2025` | cybersecurity-ai-2023-2025-round-4-agent-c.json | weak-dup | KEEP |
| `hp-wolf-asyncrat-ai-malware-france-2024` | cybersecurity-ai-2023-2025-round-4-agent-c.json | weak-dup | KEEP |
| `kimsuky-deepfake-south-korea-military-id-2025` | cybersecurity-ai-2023-2025-round-4-agent-c.json | weak-dup | KEEP |
| `omnigpt-data-breach-2025-02` | cybersecurity-ai-2023-2025-round-4-agent-c.json | weak-dup | KEEP |
| `openai-disruption-five-state-actors-2024-02` | cybersecurity-ai-2023-2025-round-4-agent-c.json | weak-dup | KEEP |
| `openai-sweetspecter-storm0817-cyberav3ngers-2024-10` | cybersecurity-ai-2023-2025-round-4-agent-c.json | exact-dup | DROP-EXACT-DUP (matches Bestand usa-openai-oktober-2024-report-sweetspecter-storm-0817-und-cyberav3ngers-nutzen-chatgpt) |
| `ta547-rhadamanthys-llm-powershell-germany-2024` | cybersecurity-ai-2023-2025-round-4-agent-c.json | — | KEEP |
| `wiz-deepfake-rappaport-voice-2024` | cybersecurity-ai-2023-2025-round-4-agent-c.json | probable-dup | MERGE-INTO-usa-israel-wiz-cloud-security-deepfake-voicemail-von-ceo-rappaport-an-dutzende |
| `wormgpt-fraudgpt-dark-llm-2023-2024` | cybersecurity-ai-2023-2025-round-4-agent-c.json | weak-dup | KEEP |
| `daenemark-udk-coded-injustice-welfare-algorithmus-2024` | eu-2024-2025-round-1-agent-d.json | probable-dup | MERGE-INTO-daenemark-udbetaling-danmark-bis-zu-60-ki-modelle-fuer-sozialbetrugs-jagd-amnesty-bericht |
| `frankreich-cnaf-scoring-conseil-detat-2024` | eu-2024-2025-round-1-agent-d.json | probable-dup | MERGE-INTO-frankreich-cnaf-familienkassen-scoring-algorithmus-koalition-aus-15-ngos-klagt-vor |
| `frontex-heron-drohnen-mediterranean-pullback-2024` | eu-2024-2025-round-1-agent-d.json | weak-dup | KEEP |
| `germany-isd-ai-disinformation-bundestagswahl-2025` | eu-2024-2025-round-1-agent-d.json | — | KEEP |
| `griechenland-centaur-hyperion-asyl-ueberwachung-fine-2024` | eu-2024-2025-round-1-agent-d.json | probable-dup | MERGE-WITH-greece-centaur-hyperion-gdpr-fine-2024 |
| `irland-dpc-meta-ai-eu-trainingsdaten-2024` | eu-2024-2025-round-1-agent-d.json | probable-dup | MERGE-INTO-irland-dpc-stoppt-metas-eu-nutzer-ai-training-auf-facebook-instagram-juni-2024-edpb |
| `irland-dpc-x-grok-eu-trainingsdaten-2024` | eu-2024-2025-round-1-agent-d.json | probable-dup | MERGE-INTO-irland-dpc-erzwingt-stopp-der-grok-ki-training-datenverwendung-von-x-twitter-erstmaliger |
| `italien-deepseek-garante-blockierung-2025` | eu-2024-2025-round-1-agent-d.json | probable-dup | MERGE-INTO-italien-garante-blockiert-chinesische-ki-deepseek-wegen-gdpr-verstoessen-januar-2025 |
| `italien-replika-garante-fine-2025` | eu-2024-2025-round-1-agent-d.json | weak-dup | KEEP |
| `niederlande-duo-studienbeihilfe-ethnic-profiling-2024` | eu-2024-2025-round-1-agent-d.json | — | KEEP |
| `poland-pl-belarus-grenze-ai-surveillance-2024` | eu-2024-2025-round-1-agent-d.json | probable-dup | MERGE-WITH-poland-belarus-border-surveillance-pushback-system-2024 |
| `portugal-worldcoin-iris-scan-suspendierung-2024` | eu-2024-2025-round-1-agent-d.json | probable-dup | MERGE-INTO-portugal-cnpd-suspendiert-worldcoin-iris-scan-operation-fuer-90-tage-wegen-datenerfassung |
| `schweden-foersaekringskassan-suspicion-machine-2024` | eu-2024-2025-round-1-agent-d.json | probable-dup | MERGE-INTO-schweden-foersaekringskassan-suspicion-machine-sozialamts-ki-diskriminiert-frauen-und |
| `spanien-bosco-civio-algorithmus-court-2024` | eu-2024-2025-round-1-agent-d.json | weak-dup | KEEP |
| `spanien-worldcoin-aepd-iris-sperre-2024` | eu-2024-2025-round-1-agent-d.json | probable-dup | MERGE-INTO-spanien-aepd-verhaengt-sofortmassnahme-gegen-worldcoin-iris-scan-stopp-wegen |
| `uk-home-office-ipic-immigration-ai-2024` | eu-2024-2025-round-1-agent-d.json | probable-dup | MERGE-WITH-uk-home-office-ipic-immigration-algorithm-2024 |
| `burkina-faso-bayraktar-tb2-zivilisten-2023` | francophone-africa-sahel-2023-2025-round-2-agent-f.json | weak-dup | KEEP |
| `burkina-faso-internet-shutdowns-medienverbote-2023-2024` | francophone-africa-sahel-2023-2025-round-2-agent-f.json | weak-dup | KEEP |
| `burkina-faso-traore-deepfake-kult-2025` | francophone-africa-sahel-2023-2025-round-2-agent-f.json | weak-dup | KEEP |
| `cameroun-yaounde-douala-gesichtserkennung-2023-2024` | francophone-africa-sahel-2023-2025-round-2-agent-f.json | probable-dup | MERGE-INTO-kamerun-live-gesichtserkennung-in-yaounde-und-douala-huawei-camtel-smart-cities-projekt |
| `central-african-republic-russia-disinformation-2024` | francophone-africa-sahel-2023-2025-round-2-agent-f.json | weak-dup | KEEP |
| `cote-divoire-biometrische-wahl-2025` | francophone-africa-sahel-2023-2025-round-2-agent-f.json | — | KEEP |
| `cote-divoire-coup-disinformation-2024` | francophone-africa-sahel-2023-2025-round-2-agent-f.json | weak-dup | KEEP |
| `gabon-internet-shutdown-coup-2023` | francophone-africa-sahel-2023-2025-round-2-agent-f.json | weak-dup | KEEP |
| `mali-bayraktar-amasrakad-douna-zivilisten-2024` | francophone-africa-sahel-2023-2025-round-2-agent-f.json | weak-dup | KEEP |
| `mali-internet-shutdown-boni-medienverbote-2023-2024` | francophone-africa-sahel-2023-2025-round-2-agent-f.json | probable-dup | MERGE-INTO-mali-mehrmonatiger-internet-shutdown-in-boni-und-suspendierung-auslaendischer-medien |
| `mali-tinzaouaten-drohnenschlag-disinformation-2024` | francophone-africa-sahel-2023-2025-round-2-agent-f.json | weak-dup | KEEP |
| `niger-drohnenschlag-kokoloko-tillaberi-2024` | francophone-africa-sahel-2023-2025-round-2-agent-f.json | probable-dup | MERGE-INTO-niger-drohnenangriffe-der-junta-toeten-zivilist-innen-in-tiawa-und-kokoloko-region |
| `sahel-african-initiative-russland-medien-infrastruktur-2024` | francophone-africa-sahel-2023-2025-round-2-agent-f.json | weak-dup | KEEP |
| `senegal-mobile-internet-shutdown-wahl-2024` | francophone-africa-sahel-2023-2025-round-2-agent-f.json | weak-dup | KEEP |
| `tchad-praesidentschaftswahl-disinformation-2024` | francophone-africa-sahel-2023-2025-round-2-agent-f.json | weak-dup | KEEP |
| `australien-fair-work-closing-loopholes-deactivation-2024` | gig-worker-platforms-2023-2025-round-2-agent-e.json | — | KEEP |
| `brasilien-ifood-trt2-r10mio-2024` | gig-worker-platforms-2023-2025-round-2-agent-e.json | — | KEEP |
| `deutschland-getir-gorillas-marktaustritt-2024` | gig-worker-platforms-2023-2025-round-2-agent-e.json | weak-dup | KEEP |
| `eu-platform-workers-directive-adoption-2024` | gig-worker-platforms-2023-2025-round-2-agent-e.json | weak-dup | KEEP |
| `frankreich-deliveroo-cour-cassation-algorithmische-sanktionen-2024` | gig-worker-platforms-2023-2025-round-2-agent-e.json | weak-dup | KEEP |
| `indien-swiggy-zomato-strike-phantom-boss-2024` | gig-worker-platforms-2023-2025-round-2-agent-e.json | — | KEEP |
| `italien-foodinho-glovo-garante-5mio-2024` | gig-worker-platforms-2023-2025-round-2-agent-e.json | weak-dup | KEEP |
| `italien-glovo-iudicial-supervision-2024` | gig-worker-platforms-2023-2025-round-2-agent-e.json | weak-dup | KEEP |
| `italien-glovo-palermo-jarvis-disclosure-2023` | gig-worker-platforms-2023-2025-round-2-agent-e.json | — | KEEP |
| `kenia-uber-bolt-fahrer-streik-algorithm-2024` | gig-worker-platforms-2023-2025-round-2-agent-e.json | weak-dup | KEEP |
| `kolumbien-rappi-defensoria-mediator-kritik-2024` | gig-worker-platforms-2023-2025-round-2-agent-e.json | probable-dup | MERGE-INTO-kolumbien-rappi-richtet-defensoria-al-repartidor-ein-fairwork-und-rider-innen-kritisieren |
| `niederlande-uber-290m-eurofine-gdpr-2024` | gig-worker-platforms-2023-2025-round-2-agent-e.json | weak-dup | KEEP |
| `niederlande-uber-ola-amsterdam-court-of-appeal-art22-2023` | gig-worker-platforms-2023-2025-round-2-agent-e.json | — | KEEP |
| `spanien-glovo-205mio-rider-law-2024` | gig-worker-platforms-2023-2025-round-2-agent-e.json | — | KEEP |
| `uk-bolt-employment-tribunal-worker-status-2024` | gig-worker-platforms-2023-2025-round-2-agent-e.json | weak-dup | KEEP |
| `uk-cma-uber-bolt-pricing-investigation-2024` | gig-worker-platforms-2023-2025-round-2-agent-e.json | weak-dup | KEEP |
| `uk-uber-eats-manjang-facial-recognition-settlement-2024` | gig-worker-platforms-2023-2025-round-2-agent-e.json | — | KEEP |
| `argentina-buenos-aires-srfp-unconstitutional-2023` | latam-2023-2025-round-1-agent-a.json | weak-dup | KEEP |
| `argentina-bullrich-uiaas-ai-security-unit-2024` | latam-2023-2025-round-1-agent-a.json | weak-dup | KEEP |
| `argentina-mar-del-plata-live-facial-recognition-2024` | latam-2023-2025-round-1-agent-a.json | weak-dup | KEEP |
| `argentina-milei-massa-deepfake-election-2023` | latam-2023-2025-round-1-agent-a.json | weak-dup | KEEP |
| `argentina-salta-microsoft-teen-pregnancy-prediction` | latam-2023-2025-round-1-agent-a.json | weak-dup | KEEP |
| `brazil-bahia-feira-de-santana-facial-recognition-carnival` | latam-2023-2025-round-1-agent-a.json | probable-dup | MERGE-INTO-brasilien-96-falsch-treffer-rate-gesichtserkennung-beim-karneval-in-feira-de-santana |
| `brazil-cortex-license-plate-mass-surveillance` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `brazil-rio-facial-recognition-wrongful-arrests-2019-2024` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `brazil-sao-paulo-smart-sampa-2024` | latam-2023-2025-round-1-agent-a.json | weak-dup | KEEP |
| `brazil-tse-deepfake-regulation-municipal-elections-2024` | latam-2023-2025-round-1-agent-a.json | weak-dup | KEEP |
| `chile-sistema-alerta-ninez-predictive-child-risk` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `chile-sitia-televigilancia-ai-2024` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `colombia-icbf-rights-violation-probability-model` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `colombia-pretoria-constitutional-court-ai-judges-2024` | latam-2023-2025-round-1-agent-a.json | probable-dup | MERGE-INTO-kolumbien-verfassungsgericht-erlaubt-ki-nutzung-durch-richter-urteil-t-323-2024-zu |
| `ecuador-ecu911-china-surveillance-system` | latam-2023-2025-round-1-agent-a.json | weak-dup | KEEP |
| `mexico-curp-mandatory-biometric-2025` | latam-2023-2025-round-1-agent-a.json | probable-dup | MERGE-INTO-mexiko-biometrische-curp-wird-verpflichtend-ki-gestuetzte-gesicht-fingerabdruck-und-iris |
| `mexico-sheinbaum-deepfake-financial-scam-2024` | latam-2023-2025-round-1-agent-a.json | probable-dup | MERGE-INTO-mexiko-deepfake-videos-von-claudia-sheinbaum-im-wahlkampf-2024-anlagebetrug-und |
| `peru-reniec-dnie-biometric-strike-2024` | latam-2023-2025-round-1-agent-a.json | probable-dup | MERGE-INTO-peru-reniec-streik-2024-biometrisches-dnie-system-wegen-staendiger-ausfaelle-in-der-kritik |
| `venezuela-maduro-ai-digital-jail-2024` | latam-2023-2025-round-1-agent-a.json | weak-dup | KEEP |
| `egypt-predator-tantawi-2024` | mena-2024-2025-round-1-agent-b.json | weak-dup | KEEP |
| `iran-internet-blackout-protest-2025-2026` | mena-2024-2025-round-1-agent-b.json | — | KEEP |
| `iran-noor-plan-hijab-ai-2024` | mena-2024-2025-round-1-agent-b.json | probable-dup | MERGE-WITH-iran-nazer-app-bahai-frauen-citizen-reporting-2024 |
| `iraq-social-media-surveillance-2024` | mena-2024-2025-round-1-agent-b.json | weak-dup | KEEP |
| `israel-corsight-gaza-facial-recognition-2024` | mena-2024-2025-round-1-agent-b.json | weak-dup | KEEP |
| `israel-ghf-biometric-aid-gaza-2025` | mena-2024-2025-round-1-agent-b.json | weak-dup | KEEP |
| `israel-unit8200-arabic-chatgpt-2024` | mena-2024-2025-round-1-agent-b.json | weak-dup | KEEP |
| `israel-wheres-daddy-gaza-2024` | mena-2024-2025-round-1-agent-b.json | weak-dup | KEEP |
| `jordan-pegasus-access-now-2024-expansion` | mena-2024-2025-round-1-agent-b.json | probable-dup | MERGE-INTO-jordanien-access-now-citizen-lab-bericht-2024-erweitert-pegasus-faelle-auf-35-opfer |
| `lebanon-grim-beeper-palantir-2024` | mena-2024-2025-round-1-agent-b.json | weak-dup | KEEP |
| `morocco-pegasus-ongoing-2024` | mena-2024-2025-round-1-agent-b.json | weak-dup | KEEP |
| `nso-meta-whatsapp-verdict-2025` | mena-2024-2025-round-1-agent-b.json | weak-dup | KEEP |
| `saudi-arabia-yahya-assiri-uk-court-2024` | mena-2024-2025-round-1-agent-b.json | probable-dup | MERGE-INTO-saudi-arabien-uk-high-court-laesst-spyware-klage-saudischer-aktivist-yahya-assiri-gegen |
| `syria-assad-documents-surveillance-2024` | mena-2024-2025-round-1-agent-b.json | weak-dup | KEEP |
| `tunisia-decree-54-surveillance-2024` | mena-2024-2025-round-1-agent-b.json | probable-dup | MERGE-INTO-tunesien-decree-law-54-ki-ueberwachung-2024-welle-von-journalist-innen-haft-unter-saied |
| `turkey-imamoglu-deepfake-2024` | mena-2024-2025-round-1-agent-b.json | probable-dup | MERGE-INTO-tuerkei-deepfake-video-von-istanbul-buergermeister-imamoglu-vor-kommunalwahlen-2024 |
| `uae-microsoft-g42-investment-2024` | mena-2024-2025-round-1-agent-b.json | weak-dup | KEEP |
| `australia-smartgate-biometric-expansion-2024` | migration-border-ai-2023-2025-round-3-agent-d.json | — | KEEP |
| `canada-ircc-chinook-mehrara-court-2024` | migration-border-ai-2023-2025-round-3-agent-d.json | probable-dup | MERGE-INTO-kanada-bundesgericht-prueft-2024-einsatz-des-visa-sortierungstools-chinook-in-mehrara |
| `croatia-bosnia-border-thermal-drone-network-2024` | migration-border-ai-2023-2025-round-3-agent-d.json | — | KEEP |
| `estonia-russia-drone-wall-ai-vessel-2025` | migration-border-ai-2023-2025-round-3-agent-d.json | — | KEEP |
| `eu-dias-language-biometric-pilot-2024` | migration-border-ai-2023-2025-round-3-agent-d.json | — | KEEP |
| `eu-ees-biometric-rollout-chaos-2025` | migration-border-ai-2023-2025-round-3-agent-d.json | weak-dup | KEEP |
| `eu-frontex-heron-drones-pullbacks-mediterranean-2024` | migration-border-ai-2023-2025-round-3-agent-d.json | weak-dup | KEEP |
| `eu-iborderctrl-ai-lie-detector-revival-2024` | migration-border-ai-2023-2025-round-3-agent-d.json | weak-dup | KEEP |
| `greece-centaur-hyperion-gdpr-fine-2024` | migration-border-ai-2023-2025-round-3-agent-d.json | probable-dup | MERGE-WITH-griechenland-centaur-hyperion-asyl-ueberwachung-fine-2024 |
| `israel-westbank-red-wolf-checkpoint-faceprint-2023-2024` | migration-border-ai-2023-2025-round-3-agent-d.json | — | KEEP |
| `italy-asylum-speech-to-text-pilot-2024` | migration-border-ai-2023-2025-round-3-agent-d.json | — | KEEP |
| `latvia-belarus-smart-border-2024` | migration-border-ai-2023-2025-round-3-agent-d.json | weak-dup | KEEP |
| `lithuania-belarus-smart-border-sensor-network-2024` | migration-border-ai-2023-2025-round-3-agent-d.json | — | KEEP |
| `poland-belarus-border-surveillance-pushback-system-2024` | migration-border-ai-2023-2025-round-3-agent-d.json | probable-dup | MERGE-WITH-poland-pl-belarus-grenze-ai-surveillance-2024 |
| `spain-canary-islands-sive-radar-2024` | migration-border-ai-2023-2025-round-3-agent-d.json | weak-dup | KEEP |
| `uk-channel-ai-age-assessment-asylum-2025` | migration-border-ai-2023-2025-round-3-agent-d.json | probable-dup | MERGE-WITH-uk-channel-ai-surveillance-isr-network-2025 |
| `uk-channel-ai-surveillance-isr-network-2025` | migration-border-ai-2023-2025-round-3-agent-d.json | probable-dup | MERGE-WITH-uk-channel-ai-age-assessment-asylum-2025 |
| `uk-home-office-ipic-immigration-algorithm-2024` | migration-border-ai-2023-2025-round-3-agent-d.json | probable-dup | MERGE-WITH-uk-home-office-ipic-immigration-ai-2024 |
| `us-mexico-anduril-autonomous-surveillance-towers-2024` | migration-border-ai-2023-2025-round-3-agent-d.json | weak-dup | KEEP |
| `bahamas-rbpf-facial-recognition-expansion-2024` | pacific-caribbean-2023-2025-round-2-agent-b.json | weak-dup | KEEP |
| `barbados-cctv-island-wide-rollout-2025` | pacific-caribbean-2023-2025-round-2-agent-b.json | weak-dup | KEEP |
| `dominican-republic-mass-deportation-haitians-2024-2025` | pacific-caribbean-2023-2025-round-2-agent-b.json | — | KEEP |
| `dominican-republic-pedernales-facial-recognition-haiti-border-2025` | pacific-caribbean-2023-2025-round-2-agent-b.json | weak-dup | KEEP |
| `east-micronesia-cable-emcs-china-rejected-2024-2025` | pacific-caribbean-2023-2025-round-2-agent-b.json | weak-dup | KEEP |
| `fiji-national-digital-id-biometric-2024-2027` | pacific-caribbean-2023-2025-round-2-agent-b.json | weak-dup | KEEP |
| `haiti-msf-gang-violence-no-id-police-killings-2024` | pacific-caribbean-2023-2025-round-2-agent-b.json | weak-dup | KEEP |
| `jamaica-constable-smart-ai-2025` | pacific-caribbean-2023-2025-round-2-agent-b.json | probable-dup | MERGE-INTO-jamaika-ki-assistent-constable-smart-der-jamaica-constabulary-force-fuer-buerger-kontakte |
| `jamaica-eye-cctv-facial-recognition-expansion-2025` | pacific-caribbean-2023-2025-round-2-agent-b.json | weak-dup | KEEP |
| `pacific-deterrence-initiative-isr-fy2025` | pacific-caribbean-2023-2025-round-2-agent-b.json | probable-dup | MERGE-INTO-usa-pacific-deterrence-initiative-9-86-mrd-usd-fuer-ki-gestuetzte-isr-und-indo |
| `papua-new-guinea-facebook-ban-misinformation-2025` | pacific-caribbean-2023-2025-round-2-agent-b.json | weak-dup | KEEP |
| `papua-new-guinea-huawei-data-centre-spy-vulnerabilities-2024` | pacific-caribbean-2023-2025-round-2-agent-b.json | weak-dup | KEEP |
| `samoa-national-digital-id-act-2024` | pacific-caribbean-2023-2025-round-2-agent-b.json | probable-dup | MERGE-INTO-samoa-national-digital-identification-act-2024-und-21-mio-usd-weltbank-grant-fuer-ndids |
| `solomon-islands-huawei-tower-network-2023-2025` | pacific-caribbean-2023-2025-round-2-agent-b.json | — | KEEP |
| `tonga-tongapass-digital-id-2025` | pacific-caribbean-2023-2025-round-2-agent-b.json | weak-dup | KEEP |
| `trinidad-tobago-venezuelan-registration-biometric-2023-2024` | pacific-caribbean-2023-2025-round-2-agent-b.json | — | KEEP |
| `vanuatu-midas-biometric-border-launch-2024` | pacific-caribbean-2023-2025-round-2-agent-b.json | — | KEEP |
| `vanuatu-pm-huawei-policing-visit-2024` | pacific-caribbean-2023-2025-round-2-agent-b.json | probable-dup | MERGE-INTO-vanuatu-premier-salwai-besucht-huawei-polizeitechnik-in-shenzhen-datenzentrum-fuer |
| `australia-robodebt-royal-commission-2023` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `china-xinjiang-ijop-hrw-2018` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `global-buolamwini-gender-shades-2018` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `hk-protests-facial-recognition-lampposts-2019` | pre-2022-historical-round-5-2026-06-01.json | weak-dup | KEEP |
| `netherlands-sweetie-terre-des-hommes-2013` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `netherlands-syri-court-ruling-2020` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `netherlands-toeslagenaffaire-childcare-2021` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `uk-ofqual-a-level-algorithm-2020` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `usa-amazon-ai-hiring-tool-2018` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `usa-apple-card-goldman-sachs-2019` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `usa-clearview-ai-nyt-expose-2020` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `usa-facebook-emotional-contagion-2014` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `usa-google-photos-gorilla-2015` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `usa-houston-vam-evaas-2017` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `usa-microsoft-tay-chatbot-2016` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `usa-nsa-skynet-program-2013` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `usa-optum-healthcare-algorithm-bias-2019` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `usa-robert-williams-wrongful-arrest-2020` | pre-2022-historical-round-5-2026-06-01.json | weak-dup | KEEP |
| `usa-uber-greyball-2017` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `bangladesh-rohingya-biometrische-registrierung-2024` | religion-ai-censorship-2023-2025-round-3-agent-b.json | weak-dup | KEEP |
| `china-church-of-almighty-god-zero-out-ki-ueberwachung-2024` | religion-ai-censorship-2023-2025-round-3-agent-b.json | probable-dup | MERGE-INTO-china-19-053-verhaftungen-von-church-of-almighty-god-mitgliedern-2024-mittels-skynet-und |
| `china-quran-app-removal-hui-uyghur-2024` | religion-ai-censorship-2023-2025-round-3-agent-b.json | weak-dup | KEEP |
| `china-shen-yun-falun-gong-transnational-repression-2024` | religion-ai-censorship-2023-2025-round-3-agent-b.json | weak-dup | KEEP |
| `china-tibet-drichu-wechat-douyin-scan-2024` | religion-ai-censorship-2023-2025-round-3-agent-b.json | probable-dup | MERGE-WITH-china-tibet-monastery-facial-recognition-gate-2024 |
| `china-tibet-monastery-facial-recognition-gate-2024` | religion-ai-censorship-2023-2025-round-3-agent-b.json | probable-dup | MERGE-WITH-china-tibet-drichu-wechat-douyin-scan-2024 |
| `china-zion-church-facial-recognition-mandate-2024` | religion-ai-censorship-2023-2025-round-3-agent-b.json | probable-dup | MERGE-INTO-china-gesichtserkennungs-pflicht-fuer-alle-staatlich-registrierten-kirchen-razzia-auf |
| `egypt-coptic-youtuber-samaan-blasphemie-2024-2026` | religion-ai-censorship-2023-2025-round-3-agent-b.json | weak-dup | KEEP |
| `india-modi-ki-deepfakes-anti-muslim-wahlkampf-2024` | religion-ai-censorship-2023-2025-round-3-agent-b.json | probable-dup | MERGE-INTO-indien-ki-generierte-anti-muslimische-deepfakes-und-hindu-suprematistische-werbeanzeigen |
| `indonesia-ahmadiyya-lombok-social-media-monitoring-2024` | religion-ai-censorship-2023-2025-round-3-agent-b.json | — | KEEP |
| `iran-bahai-frauen-noor-plan-digitale-ueberwachung-2024` | religion-ai-censorship-2023-2025-round-3-agent-b.json | weak-dup | KEEP |
| `iran-nazer-app-bahai-frauen-citizen-reporting-2024` | religion-ai-censorship-2023-2025-round-3-agent-b.json | probable-dup | MERGE-WITH-iran-noor-plan-hijab-ai-2024 |
| `nigeria-jatau-whatsapp-blasphemie-freispruch-2024` | religion-ai-censorship-2023-2025-round-3-agent-b.json | probable-dup | MERGE-INTO-nigeria-rhoda-jatau-nach-19-monaten-haft-wegen-whatsapp-video-im-dezember-2024 |
| `north-korea-underground-church-digital-surveillance-2024` | religion-ai-censorship-2023-2025-round-3-agent-b.json | weak-dup | KEEP |
| `pakistan-fia-digital-blasphemy-entrapment-2024` | religion-ai-censorship-2023-2025-round-3-agent-b.json | probable-dup | MERGE-INTO-pakistan-fia-cyber-crime-einheit-kooperiert-mit-entrapment-ring-legal-commission-on |
| `saudi-arabien-x-twitter-religioese-dissidenten-2024` | religion-ai-censorship-2023-2025-round-3-agent-b.json | — | KEEP |
| `kanada-clearview-ai-alberta-kbb-2025` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-allstate-arity-texas-driver-data-2025` | us-canada-2024-2025-round-1-agent-f.json | probable-dup | MERGE-WITH-usa-allstate-arity-texas-paxton-klage-2025 |
| `usa-amazon-just-walk-out-india-workers-2024` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-bartz-anthropic-copyright-settlement-2025` | us-canada-2024-2025-round-1-agent-f.json | probable-dup | MERGE-INTO-usa-bartz-v-anthropic-1-5-mrd-dollar-vergleich-wegen-training-mit-piraten-buechern-2025 |
| `usa-detroit-porcha-woodruff-frt-policy-2024` | us-canada-2024-2025-round-1-agent-f.json | probable-dup | MERGE-INTO-usa-porcha-woodruff-v-detroit-fehl-festnahme-einer-hochschwangeren-durch |
| `usa-disney-universal-midjourney-copyright-2025` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-eiswert-pikesville-ai-voice-deepfake-2024` | us-canada-2024-2025-round-1-agent-f.json | — | KEEP |
| `usa-itutorgroup-eeoc-age-ai-settlement-2023-2024` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-mcdonalds-paradox-mchire-olivia-leak-2025` | us-canada-2024-2025-round-1-agent-f.json | probable-dup | MERGE-INTO-usa-mchire-olivia-paradox-ai-recruiting-chatbot-legt-64-mio-bewerber-daten-frei-2025 |
| `usa-mobley-workday-adea-collective-2025` | us-canada-2024-2025-round-1-agent-f.json | probable-dup | MERGE-WITH-usa-mobley-workday-ki-altersdiskriminierung-2024 |
| `usa-pasco-county-predictive-policing-settlement-2024` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-pelkey-ai-victim-impact-statement-arizona-2025` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-perplexity-ai-wsj-nytimes-copyright-2024` | us-canada-2024-2025-round-1-agent-f.json | probable-dup | MERGE-INTO-usa-perplexity-ai-verklagt-von-dow-jones-new-york-post-und-new-york-times-wegen |
| `usa-quran-reid-louisiana-frt-arrest-2023` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-reddit-anthropic-scraping-2025` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-scale-surge-ai-tasker-misclassification-2024` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-tesla-fsd-nhtsa-engineering-analysis-2024` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-tesla-robotaxi-austin-launch-incidents-2025` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-thomson-reuters-ross-intelligence-fair-use-2025` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |

---

_Schwellen, Tokenisierung und Boosts siehe Header dieses Reports + `scripts/dedup-candidates-round-1.js`._