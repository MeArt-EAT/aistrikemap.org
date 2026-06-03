# Dedup-Report Round-1

_Generiert: 2026-06-03T21:27:38.787Z von `scripts/dedup-candidates-round-1.js`_

## Zusammenfassung

- Bestand-Incidents (data/index.json): **666**
- Kandidaten (data/incident-candidates/*.json): **1126**
- Klassifizierungsschwellen: exact-dup ≥ 0.7 · probable-dup ≥ 0.5 · weak-dup ≥ 0.35

| Kategorie | Anzahl Kandidaten |
|---|---:|
| exact-dup | 7 |
| probable-dup | 177 |
| weak-dup (nur Hinweis) | 282 |
| unique (KEEP) | 945 |

Cross-Pair-Statistik:

- Kandidat ↔ Bestand-Paare über Schwelle: **323**
- Kandidat ↔ Kandidat-Paare über Schwelle: **157**

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
| 0.61 | `australia-robodebt-royal-commission-2023` | `australien-robodebt-royal-commission-crude-cruel-and-unlawful-mit-zwei-suiziden-in` | Australien: Robodebt Royal Commission — "crude, cruel and un ↔ Australien: Robodebt Royal Commission — "crude, cruel and un |
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
| 0.58 | `ug-huawei-bobi-wine-spying-2024` | `uganda-huawei-safe-city-kameras-verfolgen-opposition-rund-um-bobi-wine-2024` | Uganda: Huawei-Safe-City-Kameras verfolgen Opposition rund u ↔ Uganda: Huawei-Safe-City-Kameras verfolgen Opposition rund u |
| 0.58 | `kenia-sama-massenentlassung-content-moderation-exit-januar-2023` | `kenia-sama-entlaesst-ueber-180-content-moderatoren-und-beendet-das-meta-geschaeft-januar` | Kenia: Sama entlaesst ueber 180 Content-Moderatoren und been ↔ Kenia: Sama entlaesst ueber 180 Content-Moderatoren und been |
| 0.58 | `schweden-foersaekringskassan-suspicion-machine-2024` | `schweden-foersaekringskassan-suspicion-machine-sozialamts-ki-diskriminiert-frauen-und` | Schweden: Försäkringskassan-"Suspicion Machine" — Sozialamts ↔ Schweden: Försäkringskassan-"Suspicion Machine" — Sozialamts |
| 0.56 | `kolumbien-teleperformance-tiktok-moderatoren-uni-abkommen-2023` | `kolumbien-tiktok-subunternehmer-teleperformance-unterzeichnet-historisches-gewerkschafts` | Kolumbien: TikTok-Subunternehmer Teleperformance unterzeichn ↔ Kolumbien: TikTok-Subunternehmer Teleperformance unterzeichn |
| 0.56 | `irland-dpc-meta-ai-eu-trainingsdaten-2024` | `irland-dpc-stoppt-metas-eu-nutzer-ai-training-auf-facebook-instagram-juni-2024-edpb` | Irland: DPC stoppt Metas EU-Nutzer-AI-Training auf Facebook/ ↔ Irland: DPC stoppt Metas EU-Nutzer-AI-Training auf Facebook/ |
| 0.56 | `jamaica-constable-smart-ai-2025` | `jamaika-ki-assistent-constable-smart-der-jamaica-constabulary-force-fuer-buerger-kontakte` | Jamaika: KI-Assistent 'Constable Smart' der Jamaica Constabu ↔ Jamaika: KI-Assistent 'Constable Smart' der Jamaica Constabu |
| 0.55 | `daenemark-udk-coded-injustice-welfare-algorithmus-2024` | `daenemark-udbetaling-danmark-bis-zu-60-ki-modelle-fuer-sozialbetrugs-jagd-amnesty-bericht` | Dänemark: Udbetaling Danmark — bis zu 60 KI-Modelle für Sozi ↔ Dänemark: Udbetaling Danmark — bis zu 60 KI-Modelle für Sozi |
| 0.55 | `niger-drohnenschlag-kokoloko-tillaberi-2024` | `niger-drohnenangriffe-der-junta-toeten-zivilist-innen-in-tiawa-und-kokoloko-region` | Niger: Drohnenangriffe der Junta toeten Zivilist:innen in Ti ↔ Niger: Drohnenangriffe der Junta toeten Zivilist:innen in Ti |
| 0.55 | `ru-sberbank-china-ai-pact-2025` | `russland-sberbank-china-pakt-fuer-gemeinsame-ki-forschung-nach-deepseek-sprung-2025` | Russland: Sberbank-China-Pakt für gemeinsame KI-Forschung na ↔ Russland: Sberbank-China-Pakt für gemeinsame KI-Forschung na |
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
| 0.53 | `usa-nyc-patternizr-sealed-records-2025` | `usa-new-york-gericht-ordnet-ueberholung-von-nypd-predictive-policing-wegen` | USA: New York — Gericht ordnet Überholung von NYPD-Predictiv ↔ USA: New York — Gericht ordnet Überholung von NYPD-Predictiv |
| 0.52 | `suedafrika-trump-zuma-mk-deepfake-wahl-2024` | `suedafrika-duduzile-zuma-sambudla-verbreitet-trump-deepfake-zur-wahl-werbung-fuer-mk` | Südafrika: Duduzile Zuma-Sambudla verbreitet Trump-Deepfake  ↔ Südafrika: Duduzile Zuma-Sambudla verbreitet Trump-Deepfake  |
| 0.52 | `cl-emotiv-supreme-court-brain-data-2023` | `chile-oberster-gerichtshof-zwingt-emotiv-zur-loeschung-von-hirndaten-erstes-neurorights` | Chile: Oberster Gerichtshof zwingt Emotiv zur Loeschung von  ↔ Chile: Oberster Gerichtshof zwingt Emotiv zur Loeschung von  |
| 0.52 | `global-appen-google-vertragskuendigung-bard-2024` | `usa-global-usa-google-kuendigt-82-8-mio-usd-vertrag-mit-appen-gefaehrdet-2-000-search` | Global/USA: Google kuendigt 82,8-Mio-USD-Vertrag mit Appen,  ↔ Global/USA: Google kuendigt 82,8-Mio-USD-Vertrag mit Appen,  |
| 0.52 | `korea-scatterlab-iruda-kakaotalk-pipc-bussgeld-2021` | `suedkorea-pipc-verhaengt-103-millionen-won-bussgeld-gegen-scatterlab-fuer-ki-chatbot` | Suedkorea: PIPC verhaengt 103 Millionen Won Bussgeld gegen S ↔ Suedkorea: PIPC verhaengt 103 Millionen Won Bussgeld gegen S |
| 0.52 | `deutschland-charite-ki-fairness-erhebung-2023` | `deutschland-charite-studie-zeigt-nur-ein-drittel-der-ki-entwickler-innen-im` | Deutschland: Charite-Studie zeigt - nur ein Drittel der KI-E ↔ Deutschland: Charite-Studie zeigt - nur ein Drittel der KI-E |
| 0.52 | `uk-hugh-nelson-bolton-ai-csam-18-years-2024` | `uk-hugh-nelson-zu-18-jahren-haft-verurteilt-landmark-urteil-zu-ki-csam-mit-daz-3d-2024` | Großbritannien: Hugh Nelson zu 18 Jahren Haft verurteilt — L ↔ Großbritannien: Hugh Nelson zu 18 Jahren Haft verurteilt — L |
| 0.52 | `neuseeland-msd-ki-sozialhilfe-amendment-2026-maori` | `neuseeland-social-security-modernisation-amendment-ministerium-darf-ki-ueber-sozialhilfe` | Neuseeland: Social Security Modernisation Amendment — Minist ↔ Neuseeland: Social Security Modernisation Amendment — Minist |
| 0.52 | `kenia-data-labelers-offener-brief-biden-mai-2024` | `kenia-97-datenlabler-und-content-moderatoren-in-nairobi-schreiben-offenen-brief-an-us` | Kenia: 97 Datenlabler und Content-Moderatoren in Nairobi sch ↔ Kenia: 97 Datenlabler und Content-Moderatoren in Nairobi sch |
| 0.52 | `usa-microsoft-tay-chatbot-2016` | `usa-microsoft-tay-ki-chatbot-wird-in-16-stunden-zum-rassistischen-nazi-bot-2016` | USA: Microsoft Tay — KI-Chatbot wird in 16 Stunden zum rassi ↔ USA: Microsoft Tay — KI-Chatbot wird in 16 Stunden zum rassi |
| 0.51 | `turkey-imamoglu-deepfake-2024` | `tuerkei-deepfake-video-von-istanbul-buergermeister-imamoglu-vor-kommunalwahlen-2024` | Tuerkei: Deepfake-Video von Istanbul-Buergermeister Imamoglu ↔ Tuerkei: Deepfake-Video von Istanbul-Buergermeister Imamoglu |
| 0.51 | `usa-colorado-sb21-169-lebensversicherung-2024` | `usa-colorado-sb21-169-wird-operativ-lebensversicherer-muessen-bis-dezember-2024-ki-bias` | USA: Colorado SB21-169 wird operativ — Lebensversicherer mue ↔ USA: Colorado SB21-169 wird operativ — Lebensversicherer mue |
| 0.51 | `sri-lanka-online-safety-act-2024-osc-presse` | `sri-lanka-online-safety-act-no-9-2024-online-safety-commission-ohne` | Sri Lanka: Online Safety Act No. 9/2024 — Online Safety Comm ↔ Sri Lanka: Online Safety Act No. 9/2024 — Online Safety Comm |
| 0.51 | `nato-revised-ai-strategy-2024` | `belgien-revidierte-ki-strategie-2024-autonomy-implementation-plan-und-data-und-ai-review` | NATO: Revidierte KI-Strategie 2024 — Autonomy Implementation ↔ NATO: Revidierte KI-Strategie 2024 — Autonomy Implementation |
| 0.51 | `colombia-pretoria-constitutional-court-ai-judges-2024` | `kolumbien-verfassungsgericht-erlaubt-ki-nutzung-durch-richter-urteil-t-323-2024-zu` | Kolumbien: Verfassungsgericht erlaubt KI-Nutzung durch Richt ↔ Kolumbien: Verfassungsgericht erlaubt KI-Nutzung durch Richt |
| 0.51 | `portugal-worldcoin-iris-scan-suspendierung-2024` | `portugal-cnpd-suspendiert-worldcoin-iris-scan-operation-fuer-90-tage-wegen-datenerfassung` | Portugal: CNPD suspendiert Worldcoin-Iris-Scan-Operation für ↔ Portugal: CNPD suspendiert Worldcoin-Iris-Scan-Operation für |
| 0.51 | `global-unodc-southeast-asia-scam-compounds-ai-deepfake-2024` | `myanmar-unodc-bericht-oktober-2024-scam-compounds-nutzen-ki-deepfakes-1-530-anstieg-bei` | Suedostasien: UNODC-Bericht Oktober 2024 - Scam-Compounds nu ↔ Suedostasien: UNODC-Bericht Oktober 2024 - Scam-Compounds nu |
| 0.51 | `china-zion-church-facial-recognition-mandate-2024` | `china-gesichtserkennungs-pflicht-fuer-alle-staatlich-registrierten-kirchen-razzia-auf` | China: Gesichtserkennungs-Pflicht für alle staatlich registr ↔ China: Gesichtserkennungs-Pflicht für alle staatlich registr |
| 0.50 | `aethiopien-meta-tigray-hassrede-klage-2025` | `ethiopia-aethiopien-kenia-2-milliarden-pfund-klage-gegen-meta-wegen-tigray-hassrede` | Äthiopien/Kenia: 2-Milliarden-Pfund-Klage gegen Meta wegen T ↔ Äthiopien/Kenia: 2-Milliarden-Pfund-Klage gegen Meta wegen T |
| 0.50 | `usa-pennsylvania-sentencing-risk-tool-2024` | `usa-pennsylvania-strafzumessungs-risikoinstrument-der-sentencing-commission-unter` | USA: Pennsylvania — Strafzumessungs-Risikoinstrument der Sen ↔ USA: Pennsylvania — Strafzumessungs-Risikoinstrument der Sen |
| 0.50 | `au-deepfake-musk-crypto-quantum-ai-80k-victim-2024` | `australien-deepfake-musk-video-kostet-einzelnen-anleger-80-000-aud-asic-nimmt-3-500-scam` | Australien: Deepfake-Musk-Video kostet einzelnen Anleger 80. ↔ Australien: Deepfake-Musk-Video kostet einzelnen Anleger 80. |
| 0.50 | `frankreich-cegedim-cyberangriff-15-millionen-patientendaten-2026` | `frankreich-cyberangriff-auf-cegedim-sante-15-8-millionen-patientendaten-gestohlen-2025` | Frankreich: Cyberangriff auf Cegedim Sante - 15,8 Millionen  ↔ Frankreich: Cyberangriff auf Cegedim Sante - 15,8 Millionen  |
| 0.50 | `usa-state-farm-kelly-alabama-ki-diskriminierung-2024` | `usa-state-farm-verklagt-wegen-ki-diskriminierung-schwarzer-behinderter-hausbesitzer-in` | USA: State Farm verklagt wegen KI-Diskriminierung Schwarzer  ↔ USA: State Farm verklagt wegen KI-Diskriminierung Schwarzer  |
| 0.50 | `israel-gospel-habsora-ai-targeting-2023` | `palaestina-habsora-gospel-ki-system-markiert-gebaeude-in-gaza-als-bombenziele-2023` | Israel: Habsora (Gospel) — KI-System markiert Gebäude in Gaz ↔ Israel: Habsora (Gospel) — KI-System markiert Gebäude in Gaz |
| 0.50 | `usa-switchblade-600-ai-target-recognition-2024` | `ukraine-usa-ukraine-switchblade-600-block-2-ki-zielerkennung-in-loitering-munition` | USA/Ukraine: Switchblade 600 Block 2 — KI-Zielerkennung in L ↔ USA/Ukraine: Switchblade 600 Block 2 — KI-Zielerkennung in L |
| 0.50 | `sa-huawei-smart-city-hajj-2024` | `saudi-arabien-huawei-ki-kameras-zur-hadsch-ueberwachung-und-neom-identifizierung-2024` | Saudi-Arabien: Huawei-KI-Kameras zur Hadsch-Überwachung und  ↔ Saudi-Arabien: Huawei-KI-Kameras zur Hadsch-Überwachung und  |
| 0.50 | `uz-huawei-tashkent-safe-city-2024` | `usbekistan-huawei-safe-city-fuer-1-mrd-usd-setzt-ki-verkehrs-und-buergerueberwachung-in` | Usbekistan: Huawei-Safe-City für 1 Mrd. USD setzt KI-Verkehr ↔ Usbekistan: Huawei-Safe-City für 1 Mrd. USD setzt KI-Verkehr |
| 0.50 | `kolumbien-teleperformance-class-action-2023` | `kolumbien-sammelklage-gegen-teleperformance-wegen-arbeitsbedingungen-im-tiktok-und-meta` | Kolumbien: Sammelklage gegen Teleperformance wegen Arbeitsbe ↔ Kolumbien: Sammelklage gegen Teleperformance wegen Arbeitsbe |
| 0.50 | `wiz-deepfake-rappaport-voice-2024` | `usa-israel-wiz-cloud-security-deepfake-voicemail-von-ceo-rappaport-an-dutzende` | USA/Israel: Wiz (Cloud-Security) — Deepfake-Voicemail von CE ↔ USA/Israel: Wiz (Cloud-Security) — Deepfake-Voicemail von CE |
| 0.50 | `italien-deepseek-garante-blockierung-2025` | `italien-garante-blockiert-chinesische-ki-deepseek-wegen-gdpr-verstoessen-januar-2025` | Italien: Garante blockiert chinesische KI DeepSeek wegen GDP ↔ Italien: Garante blockiert chinesische KI DeepSeek wegen GDP |
| 0.50 | `mali-internet-shutdown-boni-medienverbote-2023-2024` | `mali-mehrmonatiger-internet-shutdown-in-boni-und-suspendierung-auslaendischer-medien` | Mali: Mehrmonatiger Internet-Shutdown in Boni und Suspendier ↔ Mali: Mehrmonatiger Internet-Shutdown in Boni und Suspendier |
| 0.50 | `brazil-bahia-feira-de-santana-facial-recognition-carnival` | `brasilien-96-falsch-treffer-rate-gesichtserkennung-beim-karneval-in-feira-de-santana` | Brasilien: 96 % Falsch-Treffer-Rate — Gesichtserkennung beim ↔ Brasilien: 96 % Falsch-Treffer-Rate — Gesichtserkennung beim |
| 0.50 | `mexico-curp-mandatory-biometric-2025` | `mexiko-biometrische-curp-wird-verpflichtend-ki-gestuetzte-gesicht-fingerabdruck-und-iris` | Mexiko: Biometrische CURP wird verpflichtend — KI-gestützte  ↔ Mexiko: Biometrische CURP wird verpflichtend — KI-gestützte  |
| 0.50 | `peru-reniec-dnie-biometric-strike-2024` | `peru-reniec-streik-2024-biometrisches-dnie-system-wegen-staendiger-ausfaelle-in-der-kritik` | Peru: RENIEC-Streik 2024 — biometrisches DNIe-System wegen ' ↔ Peru: RENIEC-Streik 2024 — biometrisches DNIe-System wegen ' |
| 0.50 | `usa-apple-card-goldman-sachs-2019` | `usa-apple-card-goldman-sachs-kredit-algorithmus-benachteiligt-frauen-ny-dfs-untersucht` | USA: Apple Card / Goldman Sachs — Kredit-Algorithmus benacht ↔ USA: Apple Card / Goldman Sachs — Kredit-Algorithmus benacht |
| 0.50 | `usa-robert-williams-wrongful-arrest-2020` | `usa-robert-williams-detroit-erste-oeffentlich-bekannte-falsch-verhaftung-durch` | USA: Robert Williams (Detroit) — erste oeffentlich bekannte  ↔ USA: Robert Williams (Detroit) — erste oeffentlich bekannte  |
| 0.50 | `pakistan-fia-digital-blasphemy-entrapment-2024` | `pakistan-fia-cyber-crime-einheit-kooperiert-mit-entrapment-ring-legal-commission-on` | Pakistan: FIA-Cyber-Crime-Einheit kooperiert mit Entrapment- ↔ Pakistan: FIA-Cyber-Crime-Einheit kooperiert mit Entrapment- |
| 0.50 | `usa-detroit-porcha-woodruff-frt-policy-2024` | `usa-porcha-woodruff-v-detroit-fehl-festnahme-einer-hochschwangeren-durch` | USA: Porcha Woodruff v. Detroit — Fehl-Festnahme einer Hochs ↔ USA: Porcha Woodruff v. Detroit — Fehl-Festnahme einer Hochs |

## Exact-Dup-Paare: Kandidat ↔ Kandidat (Score ≥ 0.7)

| Score | Kandidat A | Kandidat B | Files |
|---:|---|---|---|
| 0.93 | `us-waymo-robotaxi-crashes-into-wooden-utility-pole-in-2024-aiaaic2144` | `us-waymo-in-autonomous-mode-crashes-into-wooden-utility-pole-2024-aiaaic1770` | aiaaic-batch-a-2024-2026-round-6.json / aiaaic-batch-a-2024-2026-round-6.json |
| 0.79 | `nl-dutch-regulator-fines-clearview-ai-for-privacy-2024-aiaaic1728` | `niederlande-uber-290m-eurofine-gdpr-2024` | aiaaic-batch-a-2024-2026-round-6.json / gig-worker-platforms-2023-2025-round-2-agent-e.json |
| 0.75 | `il-israel-facial-recognition-system-misidentifies-innocent-2024-aiaaic1413` | `israel-corsight-gaza-facial-recognition-2024` | aiaaic-batch-a-2024-2026-round-6.json / mena-2024-2025-round-1-agent-b.json |

## Probable-Dup-Paare: Kandidat ↔ Kandidat (Score 0.5–0.7)

| Score | Kandidat A | Kandidat B | Hinweis |
|---:|---|---|---|
| 0.70 | `uk-hugh-nelson-bolton-ai-csam-18-years-2024` | `gb-uk-man-jailed-for-18-years-for-creating-ai-child-abuse-2024-aiaaic1790` | same country (GB), same year (2024) |
| 0.68 | `kenia-sama-meta-content-moderation-klage-berufung-2024` | `kenia-meta-sama-content-moderator-berufungsurteil-2024` | same country (KE), same year (2024) |
| 0.65 | `griechenland-centaur-hyperion-asyl-ueberwachung-fine-2024` | `greece-centaur-hyperion-gdpr-fine-2024` | same country (GR), same year (2024) |
| 0.61 | `global-warner-music-warns-ai-companies-about-training-models-on-2024-aiaaic1595` | `global-sony-warns-ai-companies-to-not-misuse-its-2024-aiaaic1496` | same country (US), same year (2024) |
| 0.61 | `global-study-deepseek-fails-to-block-100-percent-of-jailbreaking-2025-aiaaic1896` | `global-study-deepseek-repeats-30-per-cent-of-false-news-2025-aiaaic1895` | same country (GLOBAL), same year (2025) |
| 0.59 | `usa-mobley-workday-ki-altersdiskriminierung-2024` | `usa-mobley-workday-adea-collective-2025` | same country (US) |
| 0.59 | `gb-uk-ai-immigration-enforcement-tool-criticised-as-2024-aiaaic1824` | `uk-home-office-ipic-immigration-algorithm-2024` | same country (GB), same year (2024) |
| 0.58 | `gr-greece-fined-for-ai-powered-asylum-centre-monitoring-2024-aiaaic1446` | `griechenland-centaur-hyperion-asyl-ueberwachung-fine-2024` | same country (GR), same year (2024) |
| 0.58 | `uk-home-office-ipic-immigration-ai-2024` | `uk-home-office-ipic-immigration-algorithm-2024` | same country (GB), same year (2024) |
| 0.57 | `iran-noor-plan-hijab-ai-2024` | `iran-nazer-app-bahai-frauen-citizen-reporting-2024` | same country (IR), same year (2024) |
| 0.57 | `uk-moj-homicide-prediction-2025` | `gb-uk-slammed-for-opaque-orwellian-murder-prediction-2025-aiaaic1949` | same country (GB), same year (2025) |
| 0.57 | `usa-anderegg-wisconsin-stable-diffusion-csam-2024` | `us-wisconsin-man-arrested-for-using-ai-to-create-thousands-of-2024-aiaaic1917` | same country (US), same year (2024) |
| 0.57 | `us-deepfake-kamala-harris-slurs-her-2024-aiaaic1617` | `us-elon-musk-shares-kamala-harris-voice-clone-video-2024-aiaaic1616` | same country (US), same year (2024) |
| 0.57 | `poland-pl-belarus-grenze-ai-surveillance-2024` | `poland-belarus-border-surveillance-pushback-system-2024` | same country (PL), same year (2024) |
| 0.57 | `gb-fans-in-fury-over-paul-mccartney-show-dynamic-price-2024-aiaaic1725` | `gb-ticketmaster-dynamic-pricing-accused-of-oasis-fans-2024-aiaaic1721` | same country (GB), same year (2024) |
| 0.56 | `us-waymo-sued-after-cyclist-is-doored-by-robotaxi-2025-aiaaic2146` | `us-waymo-robotaxi-injures-cyclist-in-san-2024-aiaaic1333` | same country (US) |
| 0.56 | `global-hundreds-of-thousands-of-grok-chats-exposed-in-google-2025-aiaaic2032` | `global-chatgpt-exposes-user-chats-to-google-2025-aiaaic2031` | same country (GLOBAL), same year (2025) |
| 0.56 | `us-top-ai-models-generate-misleading-us-election-information-2024-aiaaic1729` | `us-ai-models-found-to-generate-inaccurate-and-untrue-election-2024-aiaaic1364` | same country (US), same year (2024) |
| 0.56 | `frankreich-iqva-cnil-bussgeld-gesundheitsdaten-2026` | `frankreich-cegedim-cnil-bussgeld-gesundheitsdaten-2024` | same country (FR) |
| 0.55 | `us-ford-mustang-mach-e-crashes-into-honda-in-texas-kills-2024-aiaaic1472` | `us-ford-mustang-mach-e-fatally-crashes-into-two-parked-2024-aiaaic1471` | same country (US), same year (2024) |
| 0.55 | `au-sydney-schoolgirls-targeted-with-nonconsensual-deepfake-2025-aiaaic1877` | `au-50-melbourne-school-girls-targeted-using-ai-nude-2024-aiaaic1532` | same country (AU), same year (2024) |
| 0.55 | `china-tibet-drichu-wechat-douyin-scan-2024` | `china-tibet-monastery-facial-recognition-gate-2024` | same country (CN), same year (2024) |
| 0.55 | `us-baltimore-high-school-athletic-director-uses-ai-to-smear-2024-aiaaic1463` | `usa-eiswert-pikesville-ai-voice-deepfake-2024` | same country (US), same year (2024) |
| 0.54 | `gb-uk-ai-immigration-enforcement-tool-criticised-as-2024-aiaaic1824` | `uk-home-office-ipic-immigration-ai-2024` | same country (GB), same year (2024) |
| 0.54 | `us-dow-jones-sues-perplexity-ai-for-copyright-2024-aiaaic1776` | `usa-perplexity-ai-wsj-nytimes-copyright-2024` | same country (US), same year (2024) |
| 0.54 | `us-eight-newspapers-sue-openai-and-microsoft-for-copyright-2024-aiaaic1495` | `us-three-news-publishers-sue-openai-for-copyright-2024-aiaaic1440` | same country (US), same year (2024) |
| 0.53 | `us-tesla-mad-max-mode-accused-of-enabling-reckless-automated-2025-aiaaic2083` | `usa-tesla-robotaxi-austin-launch-incidents-2025` | same country (US), same year (2025) |
| 0.53 | `dk-report-denmark-ai-welfare-system-profoundly-affects-mental-2024-aiaaic1820` | `daenemark-udk-coded-injustice-welfare-algorithmus-2024` | same country (DK), same year (2024) |
| 0.52 | `us-nyt-orders-perplexity-to-stop-misusing-its-2024-aiaaic1772` | `us-conde-nast-demands-perplexity-ai-stop-using-its-2024-aiaaic1599` | same country (US), same year (2024) |
| 0.52 | `global-google-ai-overviews-tell-users-to-add-glue-to-2024-aiaaic1499` | `global-google-sge-suggests-user-drinks-urine-to-pass-kidney-2024-aiaaic1484` | same country (US), same year (2024) |
| 0.52 | `uk-oasys-reoffending-profiling-2025` | `gb-uk-slammed-for-opaque-orwellian-murder-prediction-2025-aiaaic1949` | same country (GB), same year (2025) |
| 0.52 | `us-tesla-with-fsd-activated-crashes-into-rear-of-motorcycle-2024-aiaaic2010` | `usa-tesla-fsd-nhtsa-engineering-analysis-2024` | same country (US), same year (2024) |
| 0.52 | `kr-north-korean-hackers-use-chatgpt-to-make-deepfake-military-2025-aiaaic2034` | `kimsuky-deepfake-south-korea-military-id-2025` | same country (KR), same year (2025) |
| 0.52 | `hk-deepfake-cfo-scams-finance-worker-for-usd-25-2024-aiaaic1321` | `arup-hong-kong-deepfake-cfo-25m-2024` | same country (HK), same year (2024) |
| 0.51 | `us-dream-machine-ai-video-generator-copies-disneys-monsters-2024-aiaaic1637` | `us-dream-machine-ai-video-generator-makes-2024-aiaaic1539` | same country (US), same year (2024) |
| 0.51 | `us-dow-jones-sues-perplexity-ai-for-copyright-2024-aiaaic1776` | `us-three-news-publishers-sue-openai-for-copyright-2024-aiaaic1440` | same country (US), same year (2024) |
| 0.51 | `pt-portugal-bans-worldcoin-for-90-days-for-jeopardising-2024-aiaaic1480` | `portugal-worldcoin-iris-scan-suspendierung-2024` | same country (PT), same year (2024) |
| 0.51 | `us-disney-universal-warner-bros-sue-chinas-minimax-for-ai-2024-aiaaic2079` | `us-disney-universal-sue-midjourney-for-stealing-countless-2025-aiaaic2076` | same country (US), same year (2025) |
| 0.51 | `us-disney-universal-warner-bros-sue-chinas-minimax-for-ai-2024-aiaaic2079` | `us-warner-bros-discovery-accuses-midjourney-of-systematic-2025-aiaaic2075` | same country (US), same year (2025) |
| 0.51 | `usa-allstate-arity-texas-paxton-klage-2025` | `usa-allstate-arity-texas-driver-data-2025` | same country (US), same year (2025) |
| 0.51 | `global-spacex-solareclipse-deepfake-musk-crypto-2024-04` | `global-musk-deepfake-youtube-livestream-50k-2024-06` | same country (US), same year (2024) |
| 0.51 | `uk-channel-ai-age-assessment-asylum-2025` | `uk-channel-ai-surveillance-isr-network-2025` | same country (GB), same year (2025) |
| 0.51 | `au-images-of-australian-children-are-used-to-train-2024-aiaaic1569` | `br-laion-5b-links-to-photos-of-identifiable-brazilian-2024-aiaaic1518` | cross-country, same year (2024) |
| 0.50 | `korea-telegram-deepfake-wave-230-rooms-2024` | `suedkorea-deepfake-telegram-nth-room-2024-universitaeten` | same country (KR), same year (2024) |
| 0.50 | `global-meta-creates-flirty-chatbots-of-taylor-swift-other-2025-aiaaic2022` | `global-meta-ai-chatbots-imitate-hitler-jesus-christ-taylor-2025-aiaaic1870` | same country (GLOBAL), same year (2025) |
| 0.50 | `global-deepseek-tricked-into-setting-out-how-to-steal-the-mona-2025-aiaaic1897` | `global-study-deepseek-fails-to-block-100-percent-of-jailbreaking-2025-aiaaic1896` | same country (GLOBAL), same year (2025) |
| 0.50 | `au-meta-admits-quietly-farming-australians-facebook-photos-to-2024-aiaaic1740` | `au-images-of-australian-children-are-used-to-train-2024-aiaaic1569` | same country (AU), same year (2024) |

## Weak-Dup-Paare (Score 0.35–0.5, nur Hinweis)

| Score | Links | Rechts | Typ |
|---:|---|---|---|
| 0.49 | `bangladesh-rohingya-biometrische-registrierung-2024` | `bangladesch-unhcr-biometrie-registrierung-neuer-rohingya-gefluechteter-ab-dezember-2024` | bestand |
| 0.49 | `indien-karya-ki-datenlabler-faire-loehne-2023-2024` | `indien-non-profit-karya-zahlt-rurale-datenlabler-5-usd-stunde-und-gibt-ihnen` | bestand |
| 0.49 | `syria-assad-documents-surveillance-2024` | `syrien-nach-assads-sturz-im-dezember-2024-enthuellen-geheimdienst-archive-das-volle` | bestand |
| 0.49 | `my-pm-anwar-deepfake-investment-scam-2024-2025` | `in-ambani-tendulkar-kohli-deepfake-investment-scam-2024` | kandidat |
| 0.49 | `russia-lancet-ai-targeting-ukraine-2024` | `usa-switchblade-600-ai-target-recognition-2024` | kandidat |
| 0.49 | `global-mcdonald-s-ai-chatbot-exposes-64-million-job-applicants-2025-aiaaic2059` | `usa-mcdonalds-paradox-mchire-olivia-leak-2025` | kandidat |
| 0.49 | `us-adobe-firefly-shows-woke-photos-of-black-2024-aiaaic1391` | `us-google-gemini-generates-woke-racial-2024-aiaaic1345` | kandidat |
| 0.49 | `uk-home-office-ipic-immigration-ai-2024` | `uk-geheimer-home-office-algorithmus-ipic-beeinflusst-abschiebungen-von-41-000-migranten` | bestand |
| 0.49 | `argentina-milei-massa-deepfake-election-2023` | `argentinien-erste-ki-wahl-deepfakes-auf-beiden-seiten-im-milei-vs-massa-wahlkampf-2023` | bestand |
| 0.49 | `us-disney-universal-sue-midjourney-for-stealing-countless-2025-aiaaic2076` | `usa-disney-universal-midjourney-copyright-2025` | kandidat |
| 0.49 | `global-slack-forces-users-to-opt-out-of-training-its-ai-2024-aiaaic1492` | `global-stack-overflow-users-rebel-against-openai-llm-training-2024-aiaaic1487` | kandidat |
| 0.49 | `hk-deepfake-romance-scam-ring-46m-arrests-2024-10` | `hongkong-polizei-zerschlaegt-deepfake-romance-scam-ring-mit-46-mio-usd-beute-2024` | bestand |
| 0.49 | `us-waymo-robotaxi-strikes-child-outside-santa-monica-2026-aiaaic2183` | `usa-waymo-santa-monica-kind-2026` | bestand |
| 0.49 | `cote-divoire-coup-disinformation-2024` | `elfenbeinkueste-cote-divoire-virale-social-media-falschmeldungen-ueber-angeblichen-putsch` | bestand |
| 0.49 | `us-tesla-cybertruck-attempts-to-turn-into-oncoming-2025-aiaaic1914` | `us-tesla-cybertruck-using-fsd-crashes-into-2025-aiaaic1913` | kandidat |
| 0.49 | `korea-inha-university-telegram-deepfake-arrest-2024` | `suedkorea-deepfake-telegram-nth-room-2024-universitaeten` | kandidat |
| 0.48 | `us-waymo-sued-after-cyclist-is-doored-by-robotaxi-2025-aiaaic2146` | `us-bicyclist-suffers-brain-spine-injuries-from-waymo-safe-exit-2025-aiaaic2063` | kandidat |
| 0.48 | `gb-rotherham-man-wrongly-accused-of-fraud-after-facial-2025-aiaaic2036` | `gb-woman-wrongly-accused-of-shoplifting-toilet-roll-due-to-2025-aiaaic2035` | kandidat |
| 0.48 | `uk-met-police-lfr-protests-2023-2024` | `uk-vereinigtes-koenigreich-met-police-und-south-wales-police-setzen-live-facial` | bestand |
| 0.48 | `burkina-faso-internet-shutdowns-medienverbote-2023-2024` | `burkina-faso-junta-sperrt-13-internationale-medien-raeumt-csc-befugnis-ueber` | bestand |
| 0.48 | `deutschland-getir-gorillas-marktaustritt-2024` | `deutschland-getir-gorillas-zieht-sich-aus-deutschland-zurueck-algorithmisch-gesteuertes` | bestand |
| 0.48 | `uk-fca-ai-uninsurable-warnung-2024` | `uk-fca-chef-warnt-vor-uninsurable-buerger-innen-durch-hyper-personalisierung-2024` | bestand |
| 0.48 | `iraq-social-media-surveillance-2024` | `irak-ministerium-innen-denunzier-plattform-social-media-ueberwachung-von-journalist-innen` | bestand |
| 0.48 | `gb-bbc-castigated-for-using-generative-ai-to-promote-dr-2024-aiaaic1416` | `uk-mod-ai-targeting-contracts-2024` | kandidat |
| 0.48 | `usa-bartz-anthropic-copyright-settlement-2025` | `usa-reddit-anthropic-scraping-2025` | kandidat |
| 0.48 | `nigeria-cybercrime-amendment-act-journalisten-2024` | `nigeria-cybercrime-amendment-act-2024-ermoeglicht-ueberwachung-ohne-gerichtsbeschluss` | bestand |
| 0.48 | `iran-bahai-frauen-noor-plan-digitale-ueberwachung-2024` | `iran-systematische-ueberwachung-und-verhaftung-von-bahai-frauen-unter-dem-noor-plan-mit` | bestand |
| 0.48 | `kazakhstan-tls-mitm-ooni-2024` | `kazakhstan-data-leak-16-million-2024` | kandidat |
| 0.48 | `kenia-sama-meta-content-moderation-klage-berufung-2024` | `kenia-berufungsgericht-erlaubt-185-facebook-moderator-innen-sammelklage-gegen-meta` | bestand |
| 0.48 | `korea-telegram-deepfake-wave-230-rooms-2024` | `kr-deepfake-porn-engulfs-south-korean-2024-aiaaic1727` | kandidat |
| 0.48 | `gb-mumsnet-sues-openai-for-scraping-its-2024-aiaaic1743` | `gb-bbc-castigated-for-using-generative-ai-to-promote-dr-2024-aiaaic1416` | kandidat |
| 0.48 | `us-elon-musk-shares-fake-ai-generated-image-of-communist-2024-aiaaic1737` | `us-elon-musk-shares-kamala-harris-voice-clone-video-2024-aiaaic1616` | kandidat |
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
| 0.47 | `usa-optum-healthcare-algorithm-bias-2019` | `usa-optum-healthcare-algorithmus-racial-bias-trifft-200-millionen-patient-innen-jaehrlich` | bestand |
| 0.47 | `usa-allstate-arity-texas-driver-data-2025` | `usa-texas-v-allstate-arity-daten-sammelklage-gegen-fahrer-tracking-fuer-ki-underwriting` | bestand |
| 0.47 | `vietnam-telegram-blockade-decree-147-mai-2025` | `vietnam-telegram-blockade-juni-2025-vorwurf-anti-staatliche-inhalte-10-000-kanaele-a05` | bestand |
| 0.47 | `morocco-pegasus-ongoing-2024` | `marokko-anhaltender-pegasus-einsatz-gegen-sahraoui-aktivist-innen-amnesty-bestaetigung` | bestand |
| 0.47 | `iran-nazer-app-bahai-frauen-citizen-reporting-2024` | `iran-nazer-app-als-crowdsourced-denunziations-plattform-unter-noor-plan-2024-un` | bestand |
| 0.47 | `korea-park-snu-deepfake-10-years-2024` | `korea-inha-university-telegram-deepfake-arrest-2024` | kandidat |
| 0.47 | `gb-amazon-alexa-falsely-attributes-false-facts-to-fact-2024-aiaaic1783` | `gb-amazon-sells-ai-generated-books-about-king-charles-2024-aiaaic1331` | kandidat |
| 0.47 | `usa-detroit-porcha-woodruff-frt-policy-2024` | `usa-quran-reid-louisiana-frt-arrest-2023` | kandidat |
| 0.47 | `spain-catalonia-riscanvi-audit-2024` | `spanien-katalonien-audit-deckt-maengel-im-parol-algorithmus-riscanvi-auf-2024` | bestand |
| 0.47 | `us-dow-jones-sues-perplexity-ai-for-copyright-2024-aiaaic1776` | `us-the-center-for-investigative-reporting-sues-microsoft-2024-aiaaic1561` | kandidat |
| 0.47 | `gb-mumsnet-sues-openai-for-scraping-its-2024-aiaaic1743` | `gb-bbc-replaces-mamma-mia-star-sara-poyzer-with-2024-aiaaic1418` | kandidat |
| 0.47 | `us-the-center-for-investigative-reporting-sues-microsoft-2024-aiaaic1561` | `us-three-news-publishers-sue-openai-for-copyright-2024-aiaaic1440` | kandidat |
| 0.47 | `usa-pentagon-replicator-initiative-deployment-2024` | `usa-pentagon-replicator-initiative-hunderte-autonome-systeme-bis-2025-ausgeliefert-2024` | bestand |
| 0.47 | `usa-palantir-maven-smart-system-pentagon-2024` | `usa-palantir-maven-smart-system-wird-offizielles-pentagon-programm-20-000-nutzer-13-mrd` | bestand |
| 0.47 | `usa-thomson-reuters-ross-intelligence-fair-use-2025` | `usa-thomson-reuters-v-ross-intelligence-erstes-us-urteil-gegen-fair-use-beim-ki-training` | bestand |
| 0.47 | `usa-pasco-county-predictive-policing-settlement-2024` | `usa-pasco-county-sheriff-vergleich-beendet-algorithmisches-intelligence-led-policing` | bestand |

_… und 269 weitere weak-dup-Paare._

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
| `argentina-prosecutor-chatgpt-rulings-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | weak-dup | KEEP |
| `brazil-judge-chatgpt-fabricated-judgment-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | weak-dup | KEEP |
| `canada-csc-risk-tools-indigenous-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | weak-dup | KEEP |
| `eu-ai-act-predictive-justice-ban-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | weak-dup | KEEP |
| `italy-justemotions-ai-courts-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `netherlands-prokid-eu-ai-act-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | weak-dup | KEEP |
| `spain-catalonia-riscanvi-audit-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | weak-dup | KEEP |
| `spain-civio-prison-temporary-release-algorithm-2025` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `spain-viogen-femicide-risk-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | weak-dup | KEEP |
| `uk-moj-homicide-prediction-2025` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | probable-dup | MERGE-WITH-gb-uk-slammed-for-opaque-orwellian-murder-prediction-2025-aiaaic1949 |
| `uk-oasys-reoffending-profiling-2025` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | probable-dup | MERGE-WITH-gb-uk-slammed-for-opaque-orwellian-murder-prediction-2025-aiaaic1949 |
| `usa-california-cdcr-blocks-parole-audit-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `usa-new-jersey-psa-firearms-reform-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | — | KEEP |
| `usa-nyc-patternizr-sealed-records-2025` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | probable-dup | MERGE-INTO-usa-new-york-gericht-ordnet-ueberholung-von-nypd-predictive-policing-wegen |
| `usa-pennsylvania-sentencing-risk-tool-2024` | ai-criminal-justice-sentencing-bail-round-5-2026-06-01.json | probable-dup | MERGE-INTO-usa-pennsylvania-strafzumessungs-risikoinstrument-der-sentencing-commission-unter |
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
| `uk-hugh-nelson-bolton-ai-csam-18-years-2024` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | probable-dup | MERGE-WITH-gb-uk-man-jailed-for-18-years-for-creating-ai-child-abuse-2024-aiaaic1790 |
| `uk-iwf-380-percent-ai-csam-2024` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | — | KEEP |
| `usa-anderegg-wisconsin-stable-diffusion-csam-2024` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | probable-dup | MERGE-INTO-usa-steven-anderegg-in-wisconsin-erste-doj-anklage-wegen-ki-generierter-csam-mit-stable |
| `usa-lancaster-country-day-deepfake-charges-2024` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | weak-dup | KEEP |
| `usa-miami-pinecrest-deepfake-arrests-2023` | ai-csam-enforcement-2024-2025-round-2-agent-d.json | weak-dup | KEEP |
| `australia-deepfake-norman-swan-karl-kruszelnicki-2024` | ai-health-misinformation-round-5-2026-06-01.json | weak-dup | KEEP |
| `brazil-meta-lawsuit-deepfake-drauzio-varella-2024` | ai-health-misinformation-round-5-2026-06-01.json | weak-dup | KEEP |
| `canada-quebec-doctors-deepfake-scam-2025` | ai-health-misinformation-round-5-2026-06-01.json | — | KEEP |
| `canada-theresa-tam-deepfake-vaccine-2025` | ai-health-misinformation-round-5-2026-06-01.json | — | KEEP |
| `global-frontiers-rat-genitalia-ai-image-2024` | ai-health-misinformation-round-5-2026-06-01.json | weak-dup | KEEP |
| `south-africa-abdool-karim-deepfake-vaccine-2025` | ai-health-misinformation-round-5-2026-06-01.json | weak-dup | KEEP |
| `uk-bmj-deepfake-doctors-mosley-jones-2024` | ai-health-misinformation-round-5-2026-06-01.json | weak-dup | KEEP |
| `usa-amazon-ai-mushroom-foraging-books-2023` | ai-health-misinformation-round-5-2026-06-01.json | weak-dup | KEEP |
| `usa-jama-chatgpt-cancer-treatment-hallucinations-2023` | ai-health-misinformation-round-5-2026-06-01.json | — | KEEP |
| `usa-neda-tessa-chatbot-eating-disorder-2023` | ai-health-misinformation-round-5-2026-06-01.json | weak-dup | KEEP |
| `usa-nejm-retraction-ai-image-bronchial-cast-2026` | ai-health-misinformation-round-5-2026-06-01.json | — | KEEP |
| `usa-tom-hanks-ai-deepfake-drug-ads-2024` | ai-health-misinformation-round-5-2026-06-01.json | weak-dup | KEEP |
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
| `uk-nhs-foresight-llama-57m-pause-datenschutz-2025` | ai-healthcare-eu-asia-round-2-agent-c.json | weak-dup | KEEP |
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
| `al-actress-accuses-albanian-government-of-abusing-her-voice-2025-aiaaic2217` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ar-deepfake-videos-attempt-to-mislead-buenos-aires-2025-aiaaic1991` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `at-ai-chatbots-lure-vulnerable-gamblers-to-unlicensed-betting-2026-aiaaic2261` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `at-chatgpt-accused-of-violating-gdpr-by-not-correcting-2024-aiaaic1469` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-50-melbourne-school-girls-targeted-using-ai-nude-2024-aiaaic1532` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-au-sydney-schoolgirls-targeted-with-nonconsensual-deepfake-2025-aiaaic1877 |
| `au-ai-article-sends-tourists-to-fictional-tasmanian-hot-2026-aiaaic2188` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-ai-companion-app-muah-hack-reveals-users-trying-to-simulate-2024-aiaaic1764` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-ai-generated-exam-image-draws-student-2024-aiaaic1799` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-australian-activist-caitlin-roper-targeted-with-ai-2025-aiaaic2173` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-australian-bank-employees-train-chatbot-are-2025-aiaaic2072` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-australian-lawyer-confesses-using-chatgpt-to-create-court-2024-aiaaic1899` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-australian-voice-artists-lose-work-to-ai-2024-aiaaic1594` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-cosmos-magazine-ai-generated-articles-prompt-2024-aiaaic1668` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-deloitte-australia-fined-for-ai-error-strewn-government-2025-aiaaic2049` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-fiction-analytics-platform-prosecraft-folds-after-ai-2024-aiaaic1563` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-georgia-based-group-uses-deepfake-celebrity-ads-to-push-2024-aiaaic1937` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-grok-generates-sexualised-images-of-children-on-2025-aiaaic2178` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-grok-spews-misinformation-about-bondi-beach-mass-2025-aiaaic2165` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-images-of-australian-children-are-used-to-train-2024-aiaaic1569` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-br-laion-5b-links-to-photos-of-identifiable-brazilian-2024-aiaaic1518 |
| `au-leap-ai-invents-family-court-legal-case-2024-aiaaic1765` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-meta-admits-quietly-farming-australians-facebook-photos-to-2024-aiaaic1740` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-au-images-of-australian-children-are-used-to-train-2024-aiaaic1569 |
| `au-nine-news-uses-ai-to-sexualise-image-of-2024-aiaaic1317` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-outabox-data-breach-exposes-1m-biometric-2024-aiaaic1705` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-spotify-fails-to-detect-king-gizzard-ai-2025-aiaaic2157` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `au-sydney-schoolgirls-targeted-with-nonconsensual-deepfake-2025-aiaaic1877` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-au-50-melbourne-school-girls-targeted-using-ai-nude-2024-aiaaic1532 |
| `au-trendii-ai-shopping-ads-appear-on-gaza-destruction-2024-aiaaic1822` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `be-belgian-photographer-criticised-for-ai-generated-russia-2024-aiaaic1852` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `be-european-parliament-ai-model-is-unable-to-identify-first-2025-aiaaic1938` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `be-far-right-activists-use-ai-to-generate-dystopian-european-2025-aiaaic2065` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `be-google-maps-falsely-labels-german-autobahns-as-2025-aiaaic2001` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `be-l-observatoire-de-l-europe-uses-ai-to-plagiarise-euronews-2024-aiaaic1436` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `br-ai-manipulated-video-of-brazilian-footballer-ronaldo-scams-2024-aiaaic1903` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `br-ai-systems-used-to-conduct-sexual-violence-against-1-in-5-2024-aiaaic2237` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `br-brazilian-football-fan-wrongly-arrested-using-facial-2024-aiaaic1482` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `br-laion-5b-links-to-photos-of-identifiable-brazilian-2024-aiaaic1518` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-au-images-of-australian-children-are-used-to-train-2024-aiaaic1569 |
| `br-parana-school-attendance-facial-recognition-system-2025-aiaaic2252` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ca-canadian-law-database-canlii-sues-caseway-ai-over-content-2024-aiaaic1818` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ca-canadian-news-publishers-sue-openai-for-copyright-2024-aiaaic1835` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ca-chatgpt-persuades-software-developer-his-world-is-a-2024-aiaaic2093` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ca-chatgpt-triggers-severe-mental-breakdown-in-canadian-2025-aiaaic2080` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ca-google-ai-falsely-accuses-musician-of-being-a-sex-2025-aiaaic2181` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ca-iranian-hackers-interrupt-tv-streaming-services-with-2024-aiaaic1392` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ca-meta-trains-ai-on-ray-ban-smart-glass-photos-2024-aiaaic1761` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ca-netflix-documentary-uses-ai-to-manipulate-true-crime-2024-aiaaic1458` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ca-robin-williams-daughter-slams-disgusting-ai-versions-of-her-2025-aiaaic2052` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ca-sec-fines-money-makers-for-misleading-ai-2024-aiaaic1396` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ca-university-of-waterloo-found-to-be-covertly-using-facial-2024-aiaaic1348` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ca-viggle-admits-to-training-ai-models-on-youtube-data-without-2024-aiaaic1712` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ca-wildbrain-accuses-kartoon-studios-of-ip-infringement-over-2024-aiaaic1478` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-ai-company-found-guilty-of-violating-ultraman-copyright-in-2024-aiaaic1428` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `cn-amazon-ai-coding-bot-causes-aws-china-2025-aiaaic2214` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-baidu-ride-hailing-driverless-car-hits-pedestrian-crossing-2024-aiaaic1805` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-beijing-uses-ai-to-suppress-tibetan-refugees-in-2025-aiaaic2170` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-bytedance-agentic-ai-phone-restricts-account-2025-aiaaic2155` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-chinese-ai-actors-spark-personality-rights-2026-aiaaic2263` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-chinese-chatbot-accused-of-giving-inaccurate-university-2025-aiaaic2186` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-chinese-geo-chatbot-accused-of-censorship-2024-aiaaic1548` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-chinese-large-language-model-thinks-it-is-2024-aiaaic1856` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-chinese-novel-platform-trains-ai-on-authors-works-without-2024-aiaaic1603` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-cloned-ukrainian-youtuber-promotes-russia-china-2024-aiaaic1375` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-deepseek-accused-of-denying-claims-of-uyghur-2025-aiaaic1916` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-deepseek-ai-database-exposes-user-data-chat-2025-aiaaic1891` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-fatal-xiaomi-su7-ultra-fire-raises-questions-over-automated-2025-aiaaic2070` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-godfrey-lao-coco-lee-ai-resurrections-spark-2024-aiaaic1410` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-hellobike-robotaxi-injures-zhuzhou-2025-aiaaic2167` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-huawei-p70-ultra-ai-editing-tool-removes-peoples-2024-aiaaic1468` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-humanoid-robot-attacks-crowd-of-people-at-tianjin-2025-aiaaic1989` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-humanoid-robot-tries-to-attack-chinese-factory-2025-aiaaic1988` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-kids-smartwatch-racially-insults-chinese-2024-aiaaic1854` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-peer-reviewed-journal-publishes-ai-generated-rat-2024-aiaaic1343` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-shanghai-triples-facial-urveillance-in-xuhui-district-2024-aiaaic1521` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `cn-xiaomi-su7-on-autopilot-collides-with-cement-pole-kills-2025-aiaaic1944` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `de-copilot-falsely-accuses-journalist-of-being-a-child-2024-aiaaic1726` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `de-german-broadcaster-publishes-fake-ai-us-immigration-2026-aiaaic2202` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `de-german-music-rights-organisation-sues-openai-for-copyright-2024-aiaaic1825` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `de-german-tv-star-accuses-husband-of-spreading-deepfake-porn-2024-aiaaic2262` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `de-investigative-reporter-patrizia-schlosser-targeted-in-2025-aiaaic1890` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `de-suno-ai-accused-of-violating-mambo-no-5-2025-aiaaic2073` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `de-youtuber-found-guilty-of-cloning-voice-of-german-voice-2024-aiaaic2040` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `dk-danish-child-protection-algorithm-criticised-for-age-2024-aiaaic1551` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `dk-danish-man-uses-ai-chatbot-to-plan-violent-attack-on-his-2025-aiaaic2152` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `dk-openais-gpt-store-faces-copyright-2024-aiaaic1455` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `dk-report-denmark-ai-welfare-system-profoundly-affects-mental-2024-aiaaic1820` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-daenemark-udk-coded-injustice-welfare-algorithmus-2024 |
| `ec-chinese-influence-operation-uses-chatgpt-to-manipulate-2025-aiaaic1920` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `es-meqa-drug-safety-app-closed-after-producing-inaccurate-2025-aiaaic1995` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `es-rt-fails-to-disclose-ai-2024-aiaaic1575` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `es-spain-suspends-worldcoin-over-privacy-2024-aiaaic1381` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `eu-chatbots-misinform-citizens-about-european-parliament-2024-aiaaic1448` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `fi-starship-robot-damages-car-flees-scene-of-2024-aiaaic1652` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `fr-ai-brad-pitt-defrauds-french-woman-of-eur-830-2024-aiaaic1875` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `fr-deepfake-france-24-journalist-calls-seine-water-2024-aiaaic1611` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `fr-elevenlabs-accused-of-recreating-french-dubbing-artists-2024-aiaaic1881` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `fr-facebook-fails-to-block-thousands-of-misleading-political-2024-aiaaic1747` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `fr-facebook-job-ad-algorithm-ruled-sexist-by-french-2025-aiaaic2114` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `fr-frances-lucie-chatbot-tells-people-to-eat-cows-2025-aiaaic1888` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `fr-french-court-rules-city-of-orleans-use-of-ai-is-2024-aiaaic1610` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `fr-french-teenager-uses-chatgpt-to-plan-jihadist-terrorist-2025-aiaaic2098` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `fr-google-fined-for-training-gemini-on-news-content-without-2024-aiaaic1402` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `fr-grok-chatbot-denies-use-of-gas-chambers-at-2025-aiaaic2129` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `fr-grok-repeats-false-far-right-rumours-about-2015-bataclan-2025-aiaaic2128` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `fr-paris-olympics-ai-scans-fuel-surveillance-2024-aiaaic1607` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `fr-russian-ai-voice-campaign-attempts-to-undermine-european-2024-aiaaic1846` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `fr-tiktok-accused-of-promoting-suicide-amongst-french-2025-aiaaic2130` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-advance-uk-secretly-uses-fake-ai-influencer-to-post-anti-2026-aiaaic2251` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-ai-generated-peatland-map-confuses-bogs-with-stone-2025-aiaaic1997` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-airbnb-host-tries-to-scam-customer-using-fake-ai-smash-and-2025-aiaaic2037` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-al-system-directs-amazon-delivery-van-on-to-dangerous-2026-aiaaic2221` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-amazon-alexa-falsely-attributes-false-facts-to-fact-2024-aiaaic1783` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-amazon-sells-ai-generated-books-about-king-charles-2024-aiaaic1331` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-apple-ai-alert-falsely-claims-luke-littler-has-won-darts-2025-aiaaic1861` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-apple-ai-transcription-service-calls-grandmother-a-piece-2025-aiaaic1925` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-apple-intelligence-falsely-claims-luigi-mangione-shot-2024-aiaaic1850` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-bbc-castigated-for-using-generative-ai-to-promote-dr-2024-aiaaic1416` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-bbc-presenter-s-ai-generated-voice-used-to-trick-2024-aiaaic1475` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-bbc-replaces-mamma-mia-star-sara-poyzer-with-2024-aiaaic1418` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-british-bangladeshi-man-wrongfully-arrested-for-theft-after-2026-aiaaic2224` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-british-museum-ai-generated-visitors-spark-2026-aiaaic2192` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-chatgpt-answers-english-users-in-2024-aiaaic1686` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-chelmer-valley-high-school-illegally-used-facial-2024-aiaaic1604` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-chester-grandfather-wrongly-accused-of-theft-after-home-2026-aiaaic2223` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-deepfake-applicants-discovered-duping-uk-university-2025-aiaaic1912` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-deepfake-pierce-brosnan-scam-cripples-art-2024-aiaaic1907` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-deepfakes-of-uk-health-expert-used-to-promote-health-2024-aiaaic1624` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-dpd-chatbot-criticises-own-2024-aiaaic1307` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-dwp-algorithm-wrongly-flags-200-000-people-for-possible-2024-aiaaic1576` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-edinburgh-airport-accused-of-arbitrary-ai-generated-parking-2024-aiaaic1752` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-evolv-backtacks-on-uk-testing-2024-aiaaic1490` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-facebook-ai-bans-female-photo-charity-hundred-2024-aiaaic1755` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-fake-ai-david-attenborough-delivers-news-2024-aiaaic1827` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-fake-ai-video-allegedly-shows-george-freeman-mp-moving-to-2025-aiaaic2069` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-fans-in-fury-over-paul-mccartney-show-dynamic-price-2024-aiaaic1725` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-gb-ticketmaster-dynamic-pricing-accused-of-oasis-fans-2024-aiaaic1721 |
| `gb-financial-analyst-cloned-in-ai-powered-social-media-2025-aiaaic1931` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-google-ai-overviews-generates-false-claims-about-asylum-2025-aiaaic2068` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-google-bafta-automated-news-alert-includes-n-2026-aiaaic2226` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-grok-ai-digitally-removes-female-journalist-samantha-smiths-2026-aiaaic2176` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-grok-falsely-suggests-police-misrepresented-london-far-2025-aiaaic2033` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-grok-generates-hyperrealistic-racist-images-of-football-2025-aiaaic1874` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-grok-generates-offensive-posts-about-hillsborough-heysel-2026-aiaaic2246` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-grok-google-ai-claim-fake-imagery-shows-huntingdon-train-2025-aiaaic2127` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-haringey-council-homeless-application-cites-fake-law-2024-aiaaic1786` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-home-bargains-shopper-misidentified-by-facewatch-facial-2024-aiaaic1506` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-ibms-catch-me-up-feature-at-wimbledon-panned-for-making-2024-aiaaic1564` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-innocent-customer-thrown-out-of-supermarket-after-facial-2026-aiaaic2209` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-intrusive-ai-speed-cameras-criticised-by-uk-2024-aiaaic1459` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-investigation-x-algorithm-amplifies-right-wing-extreme-2025-aiaaic2113` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-kate-middleton-accused-of-using-ai-to-manipulate-2024-aiaaic1387` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-mary-nightingale-likeness-used-in-deepfake-2024-aiaaic1660` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-michael-parkinson-ai-podcast-series-sparks-ethics-2024-aiaaic1792` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-molly-russell-brianna-ghey-chatbots-discovered-on-character-2024-aiaaic1793` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-mumsnet-sues-openai-for-scraping-its-2024-aiaaic1743` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-new-google-uk-data-centre-ruining-lives-making-people-2024-aiaaic1593` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-nhs-plan-to-ai-generate-patient-notes-draws-2024-aiaaic1397` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-rotherham-man-wrongly-accused-of-fraud-after-facial-2025-aiaaic2036` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-royal-opera-house-slammed-for-dynamically-priced-2025-aiaaic2119` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-sacked-uk-gaming-journalists-misleadingly-replaced-with-ai-2026-aiaaic2234` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-serco-ordered-to-halt-using-facial-recognition-to-monitor-2024-aiaaic1354` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-sheerluxe-criticised-for-introducing-insulting-ai-fashion-2024-aiaaic1630` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-social-work-ai-transcription-tools-wrongly-indicate-2025-aiaaic2195` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-sri-lankan-network-uses-ai-to-monetise-anti-migrant-2025-aiaaic2131` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-study-ai-powered-toys-tell-kids-how-to-start-2025-aiaaic2126` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-suno-ai-used-to-incite-uk-anti-immigrant-2024-aiaaic1633` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-synthesia-accused-of-violating-ai-actors-integrity-2024-aiaaic1787` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-ticketmaster-dynamic-pricing-accused-of-oasis-fans-2024-aiaaic1721` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-gb-fans-in-fury-over-paul-mccartney-show-dynamic-price-2024-aiaaic1725 |
| `gb-tiktok-disney-ai-filter-turns-lesbian-psychologist-into-a-2024-aiaaic1769` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-toilet-sensors-actively-listen-to-school-2024-aiaaic1330` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-tony-blair-institute-criticised-for-using-ai-to-predict-job-2024-aiaaic1588` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-tourists-tricked-by-buckingham-palace-fake-ai-royal-2025-aiaaic2134` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-uk-ai-immigration-enforcement-tool-criticised-as-2024-aiaaic1824` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-uk-home-office-ipic-immigration-algorithm-2024 |
| `gb-uk-man-jailed-for-18-years-for-creating-ai-child-abuse-2024-aiaaic1790` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-uk-hugh-nelson-bolton-ai-csam-18-years-2024 |
| `gb-uk-police-use-pimeyes-raising-privacy-2024-aiaaic1473` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-uk-slammed-for-opaque-orwellian-murder-prediction-2025-aiaaic1949` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-uk-moj-homicide-prediction-2025 |
| `gb-uk-watchdog-investigates-microsoft-recall-ai-2024-aiaaic1503` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-uk-welfare-fraud-ai-system-criticised-as-biased-and-2024-aiaaic1840` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-under-armour-ai-powered-ad-plagiarises-earlier-2024-aiaaic1393` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-voiceify-jammable-sued-for-training-ai-with-copyrighted-2024-aiaaic1398` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-welshman-kills-mother-with-sledgehammer-after-speaking-to-2025-aiaaic2257` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-west-midlands-police-use-fake-ai-output-to-ban-israeli-fans-2025-aiaaic2182` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gb-woman-wrongly-accused-of-shoplifting-toilet-roll-due-to-2025-aiaaic2035` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-wpp-ceo-impersonated-in-deepfake-2024-aiaaic1483` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `gb-youtuber-accused-of-cloning-voice-of-game-makers-2025-aiaaic2050` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gh-fake-ai-bots-use-chatgpt-to-boost-ghana-2024-aiaaic1808` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gh-ghana-moderators-sue-meta-over-impact-of-extreme-2025-aiaaic1965` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `global-18-percent-of-daily-uploads-to-deezer-are-fully-ai-2025-aiaaic1952` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-adobe-terms-of-use-update-sparks-ai-privacy-copyright-2024-aiaaic1522` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-adobe-trained-firefly-ai-model-on-competitor-2024-aiaaic1449` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-adult-chatbot-exposes-2-million-ai-porn-womens-yearbook-2025-aiaaic2141` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-ai-agent-criticises-human-developer-for-rejecting-its-2026-aiaaic2198` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-ai-agent-hacks-mckinsey-employee-2026-aiaaic2253` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-ai-agent-tricked-into-sharing-45-000-financial-services-2024-aiaaic2206` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-ai-bot-management-error-drives-massive-cloudfare-2025-aiaaic2136` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-ai-chat-app-exposes-300-million-private-2026-aiaaic2239` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `global-ai-companion-apps-expose-400-000-users-intimate-2025-aiaaic2142` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `global-ai-generated-code-error-results-in-usd-1-8m-smart-contract-2026-aiaaic2211` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-ai-generated-fake-id-passes-crypto-exchange-2024-aiaaic1350` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-ai-is-used-to-dupe-families-into-willy-wonka-experience-2024-aiaaic1363` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-ai-modified-minion-gore-videos-plague-social-media-2024-aiaaic1868` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-ai-powered-coca-cola-ad-campaign-misrepresents-j-g-2025-aiaaic1987` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-ai-researcher-claims-amazon-ignored-copyright-2024-aiaaic1479` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-ai-robot-company-closure-leaves-kids-2024-aiaaic1887` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-ai-website-generation-tool-lovable-accused-of-being-highly-2025-aiaaic2005` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-ai-written-research-paper-seeks-to-undermine-climate-change-2025-aiaaic1951` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-al-account-recovery-scam-calls-target-gmail-2024-aiaaic1771` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-amazon-ai-anime-dubs-spark-backlash-over-quality-2025-aiaaic2149` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-amazon-replaces-14-000-jobs-with-2025-aiaaic2089` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-anthropic-accused-of-aggressive-data-2024-aiaaic1629` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-apple-automated-photo-data-sharing-prompts-privacy-2024-aiaaic1863` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-apple-intelligence-rewords-prioritises-scam-2024-aiaaic1873` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-businessman-castigated-for-dehumanised-ai-generated-glasgow-2026-aiaaic2203` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-character-ai-fake-celebrity-chatbots-send-risque-messages-2025-aiaaic2017` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-character-ai-lets-children-talk-with-chatbots-based-on-2025-aiaaic2091` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `global-character-ai-users-are-able-to-see-each-others-chat-2024-aiaaic1848` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-chatgpt-criticised-for-addressing-users-by-their-personal-2025-aiaaic1955` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `global-chatgpt-exposes-user-chats-to-google-2025-aiaaic2031` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-global-hundreds-of-thousands-of-grok-chats-exposed-in-google-2025-aiaaic2032 |
| `global-chatgpt-goes-crazy-speaks-2024-aiaaic1356` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `global-chatgpt-imitates-users-voices-without-2024-aiaaic1671` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `global-chatgpt-invents-holocaust-by-2024-aiaaic1549` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-chatgpt-linked-to-student-memory-loss-2024-aiaaic1417` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-chatgpt-models-found-to-provide-detailed-weapons-creation-2025-aiaaic2081` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `global-chatgpt-refusal-to-acknowledge-david-mayer-prompts-privacy-2024-aiaaic1843` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-chatgpt-uses-10-times-more-power-than-google-2024-aiaaic1746` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-chinese-hackers-use-anthropic-ai-agent-to-attack-foreign-2025-aiaaic2125` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-claude-opus-4-ai-agent-blackmails-supervisor-to-prevent-2025-aiaaic2054` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-cursor-ai-support-agent-invents-user-policy-causing-2025-aiaaic1956` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-dangerous-ai-generated-mushrooms-flood-2024-aiaaic1757` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-deep-cam-live-ai-impersonator-prompts-misuse-2024-aiaaic1680` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-deepfake-john-swinney-thanks-nicola-sturgeon-for-his-2024-aiaaic1474` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-deepseek-tricked-into-setting-out-how-to-steal-the-mona-2025-aiaaic1897` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-global-study-deepseek-fails-to-block-100-percent-of-jailbreaking-2025-aiaaic1896 |
| `global-fake-ai-airline-reviews-take-off-after-chatgpt-2024-aiaaic1801` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-fans-revolt-over-2026-fifa-world-cup-dynamic-2025-aiaaic2122` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-freysa-crypto-ai-agent-manipulated-to-reduce-prize-money-2024-aiaaic2055` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-generative-ai-pollutes-terminates-human-language-use-2024-aiaaic1750` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-google-ai-overviews-tell-users-to-add-glue-to-2024-aiaaic1499` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-global-google-sge-suggests-user-drinks-urine-to-pass-kidney-2024-aiaaic1484 |
| `global-google-ai-search-summaries-give-cancer-patients-wrong-2024-aiaaic2256` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-google-books-indexes-low-quality-ai-generated-2024-aiaaic1438` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-google-sge-recommends-malware-fraud-2024-aiaaic1412` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-google-sge-suggests-user-drinks-urine-to-pass-kidney-2024-aiaaic1484` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-global-google-ai-overviews-tell-users-to-add-glue-to-2024-aiaaic1499 |
| `global-googles-ai-overviews-recommends-parents-smear-human-faeces-2024-aiaaic1748` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-gpt-4-able-to-hack-websites-without-human-2024-aiaaic1353` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-grammarly-ai-expert-review-rapped-for-unauthorised-use-of-2026-aiaaic2241` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-grok-2-generates-nazi-micky-mouse-taylor-swift-2024-aiaaic1682` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-grok-chatbot-undresses-sexualises-2025-aiaaic1976` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-grok-details-how-to-make-bombs-and-groom-2024-aiaaic1621` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `global-grok-stirs-backlash-over-holocaust-death-toll-2025-aiaaic1979` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-grokipedia-under-fire-for-ai-automated-fact-fudging-bias-2025-aiaaic2105` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-hacker-discovers-chatgpt-details-how-to-make-homemade-2024-aiaaic1738` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `global-hundreds-of-thousands-of-grok-chats-exposed-in-google-2025-aiaaic2032` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-global-chatgpt-exposes-user-chats-to-google-2025-aiaaic2031 |
| `global-infostealer-malware-steals-openclaw-ai-assistant-2026-aiaaic2207` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-iran-war-with-iran-monetised-by-online-creators-using-ai-2026-aiaaic2243` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-journal-of-human-evolution-ai-use-prompts-editorial-board-2025-aiaaic1864` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-lego-uses-non-licensed-ip-in-ai-generated-toy-2024-aiaaic1401` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-leonardo-ai-generates-celebrity-non-consensual-porn-2024-aiaaic1414` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-linkedin-trains-ai-models-without-user-2024-aiaaic1744` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-mahindra-ai-influencer-pulled-after-jobs-2024-aiaaic1297` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-mcdonald-s-ai-chatbot-exposes-64-million-job-applicants-2025-aiaaic2059` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `global-meta-ai-chatbots-imitate-hitler-jesus-christ-taylor-2025-aiaaic1870` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-global-meta-creates-flirty-chatbots-of-taylor-swift-other-2025-aiaaic2022 |
| `global-meta-ai-smart-glass-videos-secretly-shared-with-overseas-2026-aiaaic2236` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-meta-creates-flirty-chatbots-of-taylor-swift-other-2025-aiaaic2022` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-global-meta-ai-chatbots-imitate-hitler-jesus-christ-taylor-2025-aiaaic1870 |
| `global-meta-digital-companions-role-play-sex-with-2025-aiaaic1964` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-meta-under-fire-for-decision-to-train-generative-ai-on-user-2024-aiaaic1541` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-meta-withdraws-ai-characters-after-authenticity-2024-aiaaic1867` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-microsoft-ai-recall-feature-found-to-capture-credit-card-2024-aiaaic1849` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-microsoft-app-accused-of-enabling-employee-mobile-2024-aiaaic1718` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-microsoft-copilot-can-be-turned-into-automated-phishing-2024-aiaaic1676` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-microsoft-copilot-generates-fake-putin-comments-on-navalny-2024-aiaaic1368` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-netflix-korean-cooking-show-ai-posters-draw-2025-aiaaic1865` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-newsbreak-publishes-scores-of-fake-ai-news-2024-aiaaic1515` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-nomi-ai-companion-bot-faces-scrutiny-for-inciting-self-harm-2025-aiaaic1939` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-nude-detection-dataset-contains-child-sexual-abuse-2025-aiaaic2159` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-openai-accused-of-ai-generating-scarlett-johanssons-voice-2024-aiaaic1498` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-openai-scrapes-youtube-to-train-gpt-2024-aiaaic1439` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-opendream-ai-art-generator-accused-of-generating-child-sex-2024-aiaaic1942` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-optifye-roasted-for-shop-floor-ai-2025-aiaaic1923` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-perplexity-ai-is-accused-of-ripping-off-news-2024-aiaaic1517` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-pixel-9-reimagine-ai-photo-editing-tool-blasted-for-lack-of-2024-aiaaic1711` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-poor-quality-ai-generated-resumes-swamp-2024-aiaaic1679` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-reddit-warns-ai-companies-not-to-misuse-its-2024-aiaaic1477` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-report-ai-companion-apps-relentlessly-pry-and-exploit-user-2024-aiaaic1723` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-report-hidden-text-able-to-manipulate-2024-aiaaic1732` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-roblox-ai-age-verification-system-accused-of-misidentifying-2026-aiaaic2191` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-royal-school-armagh-students-targeted-with-explicit-ai-2025-aiaaic2201` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-scientific-journals-publish-papers-with-ai-generated-2024-aiaaic1395` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-slack-forces-users-to-opt-out-of-training-its-ai-2024-aiaaic1492` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `global-sony-playstation-game-dynamic-pricing-test-sparks-2025-aiaaic2247` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-sony-warns-ai-companies-to-not-misuse-its-2024-aiaaic1496` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-global-warner-music-warns-ai-companies-about-training-models-on-2024-aiaaic1595 |
| `global-soundcloud-quietly-trains-ai-on-user-2024-aiaaic1977` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-spammers-use-openai-to-blast-240-000-websites-with-unwanted-2024-aiaaic1946` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-spotify-uses-fake-artists-to-cut-real-artists-royalty-2024-aiaaic1857` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-stack-overflow-users-rebel-against-openai-llm-training-2024-aiaaic1487` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `global-study-ai-chatbots-fail-to-summarise-news-2025-aiaaic1908` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-study-chatgpt-consumes-a-bottle-of-water-per-2024-aiaaic1754` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-study-chatgpt-systematically-amplifies-global-2025-aiaaic2193` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-study-deepseek-explains-biochemical-interactions-of-mustard-2025-aiaaic1893` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-study-deepseek-fails-to-block-100-percent-of-jailbreaking-2025-aiaaic1896` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-global-study-deepseek-repeats-30-per-cent-of-false-news-2025-aiaaic1895 |
| `global-study-deepseek-repeats-30-per-cent-of-false-news-2025-aiaaic1895` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-global-study-deepseek-fails-to-block-100-percent-of-jailbreaking-2025-aiaaic1896 |
| `global-study-devin-ai-software-engineer-fails-at-most-2025-aiaaic1883` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-study-generative-ai-e-waste-to-surge-1000x-by-2024-aiaaic1806` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-study-language-models-gather-and-pass-personal-info-to-2024-aiaaic1802` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-study-larger-language-models-less-likely-to-admit-2024-aiaaic1759` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-study-sora-2-generates-false-claim-videos-80-percent-of-the-2025-aiaaic2208` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-study-top-chatbots-spread-russian-2024-aiaaic1543` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-taylor-and-francis-sells-access-to-authors-research-to-2024-aiaaic1597` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-tenerife-lawyer-fined-for-multiple-ai-generated-legal-2026-aiaaic2231` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-the-brutalist-ai-voice-cloning-sparks-2025-aiaaic1882` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-thousands-of-openclaw-ai-agent-servers-exposed-to-2026-aiaaic2199` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-top-chatbots-tricked-into-generating-instructions-on-how-to-2025-aiaaic1974` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-udemy-threatens-instructors-who-opt-out-of-ai-2024-aiaaic1756` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-university-of-zurich-researchers-run-opaque-ai-powered-2025-aiaaic1969` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-up-to-17-percent-of-ai-conference-reviews-written-by-2024-aiaaic1434` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-voiceover-artist-accuses-scotrail-of-using-ai-version-of-2025-aiaaic2000` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-warner-music-warns-ai-companies-about-training-models-on-2024-aiaaic1595` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-global-sony-warns-ai-companies-to-not-misuse-its-2024-aiaaic1496 |
| `global-who-chatbot-provides-inaccurate-health-2024-aiaaic1456` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `global-x-automatically-harvests-user-data-to-train-ai-2024-aiaaic1620` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `global-youtube-secretly-uses-ai-to-alter-creators-videos-without-2025-aiaaic2016` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `gr-greece-fined-for-ai-powered-asylum-centre-monitoring-2024-aiaaic1446` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-griechenland-centaur-hyperion-asyl-ueberwachung-fine-2024 |
| `hk-deepfake-cfo-scams-finance-worker-for-usd-25-2024-aiaaic1321` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-arup-hong-kong-deepfake-cfo-25m-2024 |
| `hk-hong-kong-gang-use-facial-deepfakes-to-defraud-banks-of-hkd-2025-aiaaic1954` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `hk-hong-kong-privacy-watchdog-probes-2024-aiaaic1407` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `hr-studies-ai-nudification-bots-swamp-2024-aiaaic1774` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `hu-fidesz-causes-outcry-with-divisive-ai-generated-political-2026-aiaaic2213` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `id-indonesia-suspends-worldcoin-over-data-privacy-and-2025-aiaaic1999` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `id-scammers-impersonate-indonesia-president-using-ai-2024-aiaaic1960` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ie-deepfake-bono-bob-geldof-hold-israeli-2024-aiaaic1853` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ie-fake-ai-halloween-parade-misleads-irish-2024-aiaaic1798` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `il-all-eyes-on-rafah-deepfake-criticised-for-sanitising-gaza-2024-aiaaic1507` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `il-deepfake-ai-video-shows-al-aqsa-mosque-2024-aiaaic1739` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `il-israel-facial-recognition-system-misidentifies-innocent-2024-aiaaic1413` | aiaaic-batch-a-2024-2026-round-6.json | exact-dup | KEEP (drop duplicate israel-corsight-gaza-facial-recognition-2024) |
| `il-polymarket-traders-weaponise-ai-generated-iran-war-2026-aiaaic2244` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `il-report-israel-runs-ai-powered-covert-us-political-influence-2024-aiaaic1511` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-200-people-duped-by-trump-hotel-rentals-2025-aiaaic1998` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-bengaluru-techie-fires-cook-after-ai-monitoring-system-2026-aiaaic2233` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-call-centre-uses-ai-to-neutralise-the-accent-of-indian-2025-aiaaic1928` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-chatbots-demonstrate-significant-caste-bias-in-2025-aiaaic2060` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-chatgpt-accused-of-illegally-excluding-indian-online-2025-aiaaic2179` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-deepfake-video-accuses-indian-prime-minister-of-2025-aiaaic2169` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-delhi-court-orders-takedown-of-ai-doctored-content-of-2025-aiaaic2006` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-faridabad-teen-dies-by-suicide-after-obscene-ai-2025-aiaaic2085` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-gemini-characterises-indian-pm-policies-as-2024-aiaaic1351` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-grok-slammed-in-india-for-abusive-offensive-2025-aiaaic1933` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-india-accused-of-using-ai-to-create-pahalgam-attack-2025-aiaaic1972` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-indian-woman-loses-kidney-after-chatgpt-2025-aiaaic2139` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-microsoft-mekaguda-data-centre-allegedly-dumps-industrial-2024-aiaaic1695` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-parivar-pehchan-patra-algorithm-declares-living-people-2024-aiaaic1313` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-professional-model-s-ai-likeness-used-in-ad-without-her-2024-aiaaic1542` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-three-men-die-after-google-maps-directs-them-over-2024-aiaaic1828` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `in-us-professor-falsely-quoted-by-ai-generated-news-2024-aiaaic1523` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ir-grok-generates-fake-iran-missile-attack-2024-aiaaic1437` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ir-pentagon-uses-anthropics-claude-to-plan-and-support-iran-2026-aiaaic2232` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `it-ai-powered-spyware-used-to-track-italian-2024-aiaaic2238` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `it-audio-deepfake-scam-imitates-italian-defence-minister-guido-2025-aiaaic1985` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `it-google-ai-overviews-wrongly-reports-italian-doctors-2025-aiaaic2066` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `it-italian-league-party-uses-ai-images-of-immigrant-attacks-to-2025-aiaaic1953` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `it-italian-privacy-watchdog-opens-investigation-into-2024-aiaaic1415` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `it-teacher-uses-ai-to-harass-italys-prime-ministers-2025-aiaaic2007` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `it-trento-council-fined-for-ai-citizen-surveillance-2024-aiaaic1385` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `jm-ai-videos-spread-hurricane-melissa-2025-aiaaic2090` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `jp-ai-generated-drama-performance-cancelled-over-plagiarism-2024-aiaaic1476` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `jp-fukuoka-campaign-invents-ai-generated-tourist-2024-aiaaic1823` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `jp-japanese-men-charged-with-creating-obscene-ai-anime-2025-aiaaic1886` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `jp-japanese-student-launches-chatgpt-powered-cyberattack-2025-aiaaic2150` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `jp-japanese-woman-marries-chatgpt-generated-2025-aiaaic2121` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `jp-openai-accused-of-violating-studio-ghibli-2025-aiaaic1932` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `jp-palworld-accused-of-plagiarising-pokemon-designs-using-2024-aiaaic1308` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ke-ai-search-engines-promote-white-2024-aiaaic1791` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `kr-deepfake-porn-engulfs-south-korean-2024-aiaaic1727` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `kr-gennomis-ai-art-generator-accused-of-producing-explicit-2025-aiaaic1941` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `kr-korean-government-robot-falls-down-2024-aiaaic1574` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `kr-korean-woman-accused-of-using-chatgpt-to-plan-2026-aiaaic2212` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `kr-mass-ai-cheating-uncovered-at-south-koreas-yonsei-2025-aiaaic2115` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `kr-naver-ai-mislabels-dokdo-as-japanese-2025-aiaaic2118` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `kr-naver-sued-for-using-broadcaster-content-to-train-ai-2025-aiaaic1880` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `kr-north-korean-hackers-use-chatgpt-to-make-deepfake-military-2025-aiaaic2034` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-kimsuky-deepfake-south-korea-military-id-2025 |
| `kr-police-arrest-45-in-12-billion-won-deepfake-romance-2024-aiaaic1967` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `kr-south-korea-plan-for-ai-textbooks-receives-2024-aiaaic1691` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `kr-south-korea-privacy-watchdog-investigates-2024-aiaaic1408` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `lt-whitebridge-ai-accused-of-producing-inaccurate-invasive-2025-aiaaic2057` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `mm-fake-ai-videos-amplify-myanmar-earthquake-2025-aiaaic1936` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `mx-hacker-used-claude-chatgpt-to-steal-mexican-government-2025-aiaaic2225` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `mx-microsoft-queretaro-ai-data-centre-linked-to-water-2024-aiaaic2088` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `my-ai-depictions-of-malaysian-national-flag-spark-2025-aiaaic1966` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `nl-ai-actress-tilly-norwood-provokes-creative-industry-2025-aiaaic2051` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `nl-copyright-watchdog-takes-down-dutch-language-ai-training-2024-aiaaic1722` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `nl-dutch-regulator-fines-clearview-ai-for-privacy-2024-aiaaic1728` | aiaaic-batch-a-2024-2026-round-6.json | exact-dup | DROP-EXACT-DUP (duplicate of niederlande-uber-290m-eurofine-gdpr-2024) |
| `nl-illegal-pirate-streaming-worlds-discovered-on-2024-aiaaic1601` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `nl-political-chatbots-provide-biased-political-advice-about-2025-aiaaic2084` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `no-chatgpt-falsely-tells-man-he-killed-his-2025-aiaaic1924` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `nz-maori-woman-misidentified-by-foodstuffs-facial-2024-aiaaic1452` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `nz-pensioner-loses-nzd-224-000-to-deepfake-bitcoin-2024-aiaaic1788` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ph-deepfake-philippines-president-urges-military-action-2024-aiaaic1486` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `pk-researchers-uncover-covert-ai-powered-pro-india-influence-2024-aiaaic1731` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `pl-chatgpt-encourages-ukrainian-teenager-to-kill-2025-aiaaic2112` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `pl-chatgpt-recommends-unsafe-mountain-hiking-route-to-tourists-2025-aiaaic1878` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `pl-polish-radio-station-replaces-humans-with-2024-aiaaic1779` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `pt-portugal-bans-worldcoin-for-90-days-for-jeopardising-2024-aiaaic1480` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-portugal-worldcoin-iris-scan-suspendierung-2024 |
| `ru-moscow-arrests-navalny-funeral-attendees-using-facial-2024-aiaaic1380` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ru-pro-ukrainian-hackers-use-ai-generated-decoy-documents-to-2025-aiaaic2180` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ru-russian-humanoid-ai-robot-collapses-on-2025-aiaaic2124` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ru-russian-state-tv-deepfake-blames-ukraine-for-crocus-city-2024-aiaaic1405` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ru-ukraine-robot-only-force-attacks-russian-2024-aiaaic1858` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ru-ukrainian-ai-powered-drones-decimate-russian-war-2025-aiaaic2004` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `sa-male-saudi-robot-touches-female-2024-aiaaic1376` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `sg-singapore-actor-laurence-pang-loses-sgd-35-000-in-ai-2024-aiaaic1959` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `sg-singapore-sports-school-students-attacked-with-nude-2024-aiaaic1812` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `sg-singapore-writers-resist-government-plan-to-train-ai-using-2024-aiaaic1494` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `th-robot-crushes-thai-factory-worker-to-2024-aiaaic1442` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `th-thai-auntie-unable-to-buy-food-after-poor-card-facial-2024-aiaaic1481` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `th-thai-beauty-queen-robbed-of-usd-118-000-in-ai-assisted-2024-aiaaic1958` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `th-thailand-s-prime-minister-targeted-in-asean-ai-voice-2025-aiaaic1902` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `th-thailand-suspends-worldcoin-iris-scanning-2025-aiaaic2215` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `tr-grok-chatbot-banned-after-insulting-turkish-president-recep-2025-aiaaic2025` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ua-fake-ai-videos-show-ukrainian-soldiers-in-mass-2025-aiaaic2132` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ua-openai-bot-crushes-small-ukrainian-e-commerce-2025-aiaaic1879` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `ua-russian-ai-fake-news-video-makes-false-claims-about-2025-aiaaic1984` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-26-us-members-of-congress-attacked-using-porn-2024-aiaaic1844` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-29-year-old-healthcare-consultant-takes-own-life-after-2025-aiaaic2097` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-7-deaths-linked-to-faulty-abbott-ai-glucose-2025-aiaaic2140` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-activision-accused-of-selling-ai-generated-cosmetic-in-call-2024-aiaaic1605` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-adobe-called-out-for-selling-ai-generated-ansel-adams-2024-aiaaic1508` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-adobe-firefly-shows-woke-photos-of-black-2024-aiaaic1391` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-ai-agent-runs-wsj-vending-machine-into-the-2025-aiaaic2168` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-chatbot-convinces-woman-to-euthanise-her-2024-aiaaic1751` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-chatbots-found-to-be-covertly-racist-despite-anti-racism-2024-aiaaic1382` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-chatbots-spread-false-information-about-charlie-kirks-2025-aiaaic2029` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-companies-appropriate-139-000-tv-film-scripts-to-train-2024-aiaaic1830` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-data-centres-spike-electricity-costs-in-maryland-new-2025-aiaaic2116` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-detector-falsely-accuses-autistic-student-of-2024-aiaaic1780` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-error-sees-innocent-tennessee-grandmother-jailed-for-six-2025-aiaaic2254` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-generated-gun-video-shuts-down-baltimore-high-2025-aiaaic2102` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-generated-product-listings-flood-2024-aiaaic1306` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-generated-toys-r-us-video-ad-sparks-2024-aiaaic1568` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-generates-visuals-for-wizards-of-the-coast-marketing-2024-aiaaic1291` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-gun-detector-fails-to-detect-nashville-school-shooting-2025-aiaaic1885` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-hallucinations-cause-chaos-at-missouri-2025-aiaaic2038` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-hiring-chatbot-hack-violates-applicants-2024-aiaaic1296` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-is-used-to-create-chicago-sun-times-summer-book-2025-aiaaic1992` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-malware-scam-destroys-disney-employees-2024-aiaaic1927` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-models-found-to-generate-inaccurate-and-untrue-election-2024-aiaaic1364` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-top-ai-models-generate-misleading-us-election-information-2024-aiaaic1729 |
| `us-ai-news-site-falsely-accuses-us-attorney-of-2024-aiaaic1833` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-ai-office-vending-agent-incurs-losses-runs-2025-aiaaic2053` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-powered-celebrity-deepfake-hits-back-at-kanye-west-anti-2025-aiaaic1910` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-powered-ring-doorbell-dog-finder-blasted-as-2025-aiaaic2205` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-powered-u-s-private-school-generates-faulty-2026-aiaaic2204` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-review-platform-sitejabber-charged-with-deceiving-us-2024-aiaaic1817` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-robocall-service-is-caught-lying-and-pretending-to-be-2024-aiaaic1573` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ai-unbuttons-conference-participants-2024-aiaaic1804` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-alexandria-ocasio-cortez-depicted-as-deepfake-2024-aiaaic1447` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-amaurie-lacey-commits-suicide-after-chatgpt-2025-aiaaic2107` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-amazon-ai-agent-driven-shopping-trial-sparks-2026-aiaaic2187` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-amazon-ai-generated-fallout-season-1-recap-is-riddled-with-2025-aiaaic2161` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-amazon-ai-publishes-false-suicide-helpline-2025-aiaaic1926` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-amazon-alexa-accused-of-favouring-kamala-2024-aiaaic1733` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-amazon-charges-local-school-districts-different-prices-for-2025-aiaaic2248` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-amazon-studios-lawsuit-alleges-use-of-genai-to-clone-actors-2024-aiaaic1432` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-anthropic-accused-of-using-fake-ai-source-in-copyright-2025-aiaaic1981` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-apple-ai-dictation-system-translates-racist-as-2025-aiaaic1921` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-apple-nvidia-anthropic-use-thousands-of-youtube-videos-2024-aiaaic1589` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-arc-raiders-slammed-for-replacing-voice-actors-with-2025-aiaaic2133` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-arizona-accuses-amazon-of-harming-consumers-with-its-buy-2024-aiaaic1586` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-autonomous-ai-coding-agent-deletes-company-2025-aiaaic2030` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-backlash-as-mark-zuckerberg-uses-ai-to-illustrate-childrens-2024-aiaaic1762` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-baltimore-high-school-athletic-director-uses-ai-to-smear-2024-aiaaic1463` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-usa-eiswert-pikesville-ai-voice-deepfake-2024 |
| `us-baltimore-student-handcuffed-after-ai-system-mistakes-bag-2025-aiaaic2077` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-beverly-hills-students-created-and-shared-ai-nude-images-of-2024-aiaaic1377` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-bicyclist-suffers-brain-spine-injuries-from-waymo-safe-exit-2025-aiaaic2063` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-biden-robocall-advises-voters-skip-new-hampshire-primary-2024-aiaaic1424` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-bipolar-disorder-sufferer-ends-life-after-bonding-with-2025-aiaaic2094` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-botify-ai-hosts-sexual-conversations-with-underage-2025-aiaaic1943` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-boy-commits-suicide-after-relationship-with-character-ai-2024-aiaaic1781` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-brian-cranston-voice-likeness-used-without-consent-to-train-2025-aiaaic2078` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-california-bar-criticised-for-using-ai-to-develop-exam-2025-aiaaic1961` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-character-ai-bots-simulate-misrepresent-george-2024-aiaaic1851` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-character-ai-chatbot-suggests-son-kills-his-2024-aiaaic1845` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-character-ai-encourages-kids-to-engage-in-disordered-2024-aiaaic1884` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-character-ai-suicide-paedophile-chatbots-openly-groom-2024-aiaaic1814` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-character-ai-used-to-create-disturbing-jennifer-ann-2024-aiaaic1773` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-chatgpt-accused-of-acting-as-suicide-coach-in-death-of-2025-aiaaic2184` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-chatgpt-accused-of-enabling-florida-state-university-mass-2025-aiaaic2260` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-chatgpt-advises-exec-on-how-to-fire-company-founders-to-2025-aiaaic2258` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-chatgpt-coaches-joshua-enneking-on-how-to-commit-2025-aiaaic2108` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-chatgpt-copilot-repeat-false-claim-about-us-presidential-2024-aiaaic1565` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-chatgpt-drives-jacob-irwin-into-2025-aiaaic2110` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-chatgpt-encourages-violent-stalker-to-harass-women-across-5-2025-aiaaic2151` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-chatgpt-fails-to-debunk-us-election-2024-aiaaic1815` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-chatgpt-fails-to-intervene-in-joe-ceccanti-2025-aiaaic2109` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-chatgpt-found-to-display-racial-bias-against-job-2024-aiaaic1379` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-chatgpt-incorrectly-diagnoses-most-pediatric-2024-aiaaic1281` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-chatgpt-invents-fake-links-to-news-partners-2024-aiaaic1577` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-chatgpt-misdirects-us-voters-in-key-battleground-2024-aiaaic1566` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-chatgpt-persuades-california-teenager-to-hang-himself-in-2025-aiaaic2012` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-chatgpt-persuades-depressive-man-to-take-2024-aiaaic2171` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-chatgpt-tries-to-convince-man-to-jump-off-19-story-2025-aiaaic2095` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-chinese-ai-video-tool-accused-of-abusing-us-copyrighted-2026-aiaaic2197` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-cohere-accused-of-violating-publishers-copyright-2025-aiaaic1911` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-company-uses-marques-brownlee-ai-voice-clone-to-promote-2024-aiaaic1784` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-conde-nast-demands-perplexity-ai-stop-using-its-2024-aiaaic1599` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-nyt-orders-perplexity-to-stop-misusing-its-2024-aiaaic1772 |
| `us-critics-slam-exploitative-washington-post-ai-personalised-2026-aiaaic2250` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-dc-comics-pulls-ai-generated-covers-after-2024-aiaaic1464` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-deepfake-j-d-vance-accuses-elon-musk-of-making-us-look-2025-aiaaic1934` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-deepfake-kamala-harris-slurs-her-2024-aiaaic1617` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-elon-musk-shares-kamala-harris-voice-clone-video-2024-aiaaic1616 |
| `us-deepfake-taylor-swift-offers-free-le-creuset-cookware-2024-aiaaic1293` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-deepseek-accused-of-using-openai-models-to-train-ai-2025-aiaaic1892` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-deloitte-systems-accused-of-making-inaccurate-unreliable-2024-aiaaic1918` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-delta-smart-pricing-accused-of-psychological-brain-2025-aiaaic2056` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-disney-accuses-character-ai-of-blatant-copyright-2025-aiaaic2071` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-disney-universal-sue-midjourney-for-stealing-countless-2025-aiaaic2076` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-disney-universal-warner-bros-sue-chinas-minimax-for-ai-2024-aiaaic2079 |
| `us-disney-universal-warner-bros-sue-chinas-minimax-for-ai-2024-aiaaic2079` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-disney-universal-sue-midjourney-for-stealing-countless-2025-aiaaic2076 |
| `us-doge-uses-chatgpt-to-cancel-woke-u-s-government-humanities-2025-aiaaic2242` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-doge-uses-faulty-ai-to-cut-veterans-affairs-2025-aiaaic2020` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-dominos-sued-for-ai-phone-order-voice-print-2024-aiaaic1394` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-donald-trump-uses-ai-to-fake-taylor-swift-2024-aiaaic1700` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-dow-jones-sues-perplexity-ai-for-copyright-2024-aiaaic1776` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-usa-perplexity-ai-wsj-nytimes-copyright-2024 |
| `us-drake-threatened-with-lawsuit-over-ai-generated-tupac-2024-aiaaic1462` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-dream-machine-ai-video-generator-copies-disneys-monsters-2024-aiaaic1637` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-dream-machine-ai-video-generator-makes-2024-aiaaic1539 |
| `us-dream-machine-ai-video-generator-makes-2024-aiaaic1539` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-dream-machine-ai-video-generator-copies-disneys-monsters-2024-aiaaic1637 |
| `us-dudesy-sued-for-ai-generated-george-carlin-copyright-2024-aiaaic1315` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-eight-newspapers-sue-openai-and-microsoft-for-copyright-2024-aiaaic1495` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-three-news-publishers-sue-openai-for-copyright-2024-aiaaic1440 |
| `us-eightfold-ai-recruitment-start-up-accused-of-secret-job-2025-aiaaic2185` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-elon-musk-shares-fake-ai-generated-image-of-communist-2024-aiaaic1737` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-elon-musk-shares-kamala-harris-voice-clone-video-2024-aiaaic1616` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-deepfake-kamala-harris-slurs-her-2024-aiaaic1617 |
| `us-engineer-creates-ai-powered-robotic-sentry-2025-aiaaic1876` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-engineer-warns-microsoft-copilot-designer-creates-violent-2024-aiaaic1374` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-epic-games-accused-of-illegally-using-ai-to-replicate-darth-2025-aiaaic1982` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-error-strewn-ai-generated-obituaries-compound-2024-aiaaic1649` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-eventbrite-recommendation-algorithm-promotes-illegal-opioid-2024-aiaaic1505` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-evicore-algorithm-accused-of-helping-health-insurance-2024-aiaaic1900` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-fable-ai-reader-summary-tells-user-to-read-more-white-2025-aiaaic1862` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-father-justin-ai-priest-defrocked-after-inappropriate-2024-aiaaic1465` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-figma-make-design-tool-found-to-plagiarise-apple-weather-2024-aiaaic1560` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-film-studio-use-of-ai-to-promote-civil-war-2024-aiaaic1454` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ford-mustang-mach-e-crashes-into-honda-in-texas-kills-2024-aiaaic1472` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-ford-mustang-mach-e-fatally-crashes-into-two-parked-2024-aiaaic1471 |
| `us-ford-mustang-mach-e-fatally-crashes-into-two-parked-2024-aiaaic1471` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-ford-mustang-mach-e-crashes-into-honda-in-texas-kills-2024-aiaaic1472 |
| `us-ford-recalls-4-4-million-vehicles-over-faulty-automated-2025-aiaaic2228` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-fully-automated-ai-local-newsletter-network-rapped-for-poor-2025-aiaaic1894` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-gab-ai-chatbots-seen-to-radicalise-incite-2024-aiaaic1346` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-gabby-petito-docuseries-sparks-backlash-for-using-ai-2025-aiaaic1922` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-gaming-cheats-company-aimjunkies-found-guilty-of-copyright-2024-aiaaic1502` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-gemini-allegedly-coached-jonathan-gavalas-to-commit-2025-aiaaic2235` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-gemini-chatbot-tells-student-please-2024-aiaaic1816` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-google-accused-of-stealing-david-greens-voice-for-2024-aiaaic2200` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-google-accused-of-using-gemini-ai-to-snoop-on-2025-aiaaic2120` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-google-ai-agent-deletes-users-hard-drive-and-2025-aiaaic2154` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-google-ai-model-falsely-accuses-us-senator-marsha-blackburn-2025-aiaaic2099` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-google-ai-overestimates-global-supply-of-gouda-2025-aiaaic1904` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-google-autocomplete-omits-news-of-trump-assassination-2024-aiaaic1618` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-google-gemini-generates-woke-racial-2024-aiaaic1345` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-google-microsoft-image-searches-list-nonconsensual-deepfake-2024-aiaaic1500` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-googles-veo3-creates-convincing-election-fraud-video-2025-aiaaic2018` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-gpt-4o-generation-of-realistic-fake-receipts-raises-scam-2025-aiaaic1940` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-grok-accused-of-censoring-criticism-of-trump-2025-aiaaic1980` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-grok-ai-wrongly-accuses-klay-thompson-of-brick-vandalism-2024-aiaaic1466` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-grok-amplifies-fake-claims-about-donald-trumps-missing-2024-aiaaic1693` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-grok-boosts-claims-that-donald-trump-is-a-2024-aiaaic1622` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-grok-called-out-for-mistaking-sensitive-medical-2024-aiaaic1826` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-grok-chatbot-praises-hitler-calls-itself-2025-aiaaic2024` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-grok-falsely-claims-indian-pm-modi-ejected-from-2024-aiaaic1626` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-grok-generates-sexualised-images-of-mother-of-one-of-elon-2025-aiaaic2177` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-grok-misleads-voters-about-us-presidential-2024-aiaaic1627` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-grok-posts-incorrect-information-about-trump-assassination-2024-aiaaic1623` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-grok-threatens-to-rape-political-analyst-will-2025-aiaaic2101` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-hannah-madden-institutionalised-after-chatgpt-2025-aiaaic2111` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-harvard-students-add-facial-recognition-to-meta-smart-2024-aiaaic1760` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-hawaii-newspaper-replaces-journalists-with-ai-2024-aiaaic1749` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-hoodline-use-of-ai-to-generate-news-solicits-2024-aiaaic1493` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-hr-team-fired-after-applicant-tracking-system-auto-rejects-2024-aiaaic1836` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-hr-tech-company-plan-to-treat-ai-bots-as-employees-2024-aiaaic1602` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ice-ai-tool-sends-recruits-into-field-offices-without-2025-aiaaic2210` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ice-facial-recognition-app-misidentifies-woman-2025-aiaaic2218` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-instacart-ai-generated-recipes-food-images-panned-as-2024-aiaaic1319` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-instagram-ai-chatbots-pretend-to-be-licensed-mental-health-2025-aiaaic1968` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-intellivision-banned-from-misrepresenting-facial-2024-aiaaic1842` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-investigation-match-group-dating-app-ai-systems-fail-to-2025-aiaaic1915` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-iranian-group-uses-chatgpt-to-target-us-presidential-2024-aiaaic1696` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-klarna-halves-marketing-team-by-using-2024-aiaaic1514` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-kroger-under-fire-for-ai-powered-dynamic-2024-aiaaic1683` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-late-night-with-the-devil-ai-interstitials-provoke-2024-aiaaic1404` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-lawsuit-claims-amazon-buy-box-algorithm-overcharges-2024-aiaaic1332` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-legal-tech-company-evenup-accused-of-systemic-misleading-2024-aiaaic1948` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-major-music-labels-sue-ai-startups-suno-udio-for-copyright-2024-aiaaic1553` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-man-develops-rare-condition-after-following-chatgpt-2025-aiaaic2058` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-marketeam-fake-ai-co-workers-violate-linkedin-terms-of-2025-aiaaic1889` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-massachusetts-man-found-guilty-of-ai-powered-2024-aiaaic1898` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-massachusetts-stalker-doxxes-and-harasses-woman-using-ai-2024-aiaaic1736` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-matthew-livelsberger-used-chatgpt-to-plan-trump-hotel-2025-aiaaic1869` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-megalopolis-trailer-includes-ai-generated-critics-2024-aiaaic1703` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-meta-ai-agent-leaks-sensitive-company-and-user-2026-aiaaic2255` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-meta-ai-bot-drives-uk-childcare-worker-into-2024-aiaaic2062` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-meta-ai-hallucinates-that-trump-was-not-2024-aiaaic1625` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-meta-ai-image-generator-struggles-to-produce-interracial-2024-aiaaic1433` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-meta-ai-powered-ad-platform-overspends-customer-2024-aiaaic1524` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-meta-fined-usd-1-4-billion-for-unlawful-use-of-facial-2024-aiaaic1628` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-meta-ray-ban-glass-users-film-and-harass-massage-parlour-2025-aiaaic2092` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-michel-janse-deepfake-used-for-advert-without-2024-aiaaic1457` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-misinfo-expert-accused-of-using-ai-in-court-2024-aiaaic1829` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-music-producer-accused-of-using-ai-songs-to-scam-streaming-2024-aiaaic1734` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-mypillow-lawyers-fined-for-ai-generated-court-2025-aiaaic2043` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-neo-humanoid-robot-sparks-privacy-fears-and-autonomy-2025-aiaaic2103` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-netflix-blasted-for-disrespectful-arcane-ai-marketing-2024-aiaaic1831` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-neuroscientists-sue-apple-for-illegally-using-their-books-2025-aiaaic2061` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-nevada-ai-student-risk-model-prompts-funding-2024-aiaaic1809` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-new-mexico-lawsuit-accuses-snap-of-failing-to-act-on-2024-aiaaic1763` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-new-york-city-finds-shotspotter-identifies-13-percent-of-2024-aiaaic1663` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-new-york-lawyer-cites-fake-ai-generated-court-2024-aiaaic1329` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-newsbreak-publishes-untrue-story-about-harvest19-2024-aiaaic1516` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-nomi-ai-chatbot-recommends-podcast-host-al-nowatzki-kills-2025-aiaaic1901` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-nvidia-caught-scraping-content-from-youtube-2024-aiaaic1638` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-nvidia-sued-for-training-nemo-on-authors-copyrighted-2024-aiaaic1427` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-nyc-ai-chatbot-tells-businesses-to-break-2024-aiaaic1419` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-nyt-orders-perplexity-to-stop-misusing-its-2024-aiaaic1772` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-conde-nast-demands-perplexity-ai-stop-using-its-2024-aiaaic1599 |
| `us-opaque-cybercheck-ai-crime-fighting-tool-accused-of-2024-aiaaic1777` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-openai-accused-of-using-chatgpt-to-act-as-unlicensed-2026-aiaaic2240` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-openai-accused-of-using-netflix-shows-to-train-sora-ai-2025-aiaaic2042` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-openai-bans-bot-impersonating-us-presidential-2024-aiaaic1421` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-openai-deleted-training-datasets-believed-to-contain-2024-aiaaic1485` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-openai-operator-agent-buys-eggs-without-2025-aiaaic1957` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-openclaw-ai-agent-deletes-meta-engineers-2026-aiaaic2219` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-otter-ai-transcription-leaks-confidential-investor-2024-aiaaic1796` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-paranoid-man-kills-himself-and-his-mother-after-chatgpt-2025-aiaaic2008` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-pentagon-uses-anthropics-claude-to-capture-venezuela-2026-aiaaic2220` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-perplexity-accused-of-copyright-infringement-by-chicago-2025-aiaaic2164` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-perplexity-ai-ignores-requests-not-to-scrape-2024-aiaaic1552` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-perplexity-ai-shopping-agent-accused-of-violating-amazon-2025-aiaaic2117` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-philadelphia-sheriff-posts-fake-ai-generated-news-2024-aiaaic1324` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-pro-trumper-creates-fake-ai-photo-of-kamala-harris-as-2024-aiaaic1797` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-radnor-high-school-hit-by-fake-ai-sexualised-images-of-2026-aiaaic2227` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-republicans-support-trump-using-ai-generated-kitten-and-2024-aiaaic1735` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-retired-chef-dies-trying-to-meet-flirty-ai-chatbot-2025-aiaaic2023` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-roadzen-stock-price-drops-after-ai-generated-article-2025-aiaaic2028` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-robert-dillon-wrongfully-arrested-in-facial-recognition-2024-aiaaic2027` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-rt-bot-farm-spreads-disinformation-via-968-x-2024-aiaaic1580` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-runway-uses-youtube-videos-without-consent-for-ai-2024-aiaaic1606` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-san-francisco-city-attorney-sues-16-nudification-2024-aiaaic1692` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-san-jose-homeless-detection-ai-sparks-privacy-inequality-2024-aiaaic1426` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-sec-launches-investigation-into-evolv-2024-aiaaic1491` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-solar-company-accuses-google-of-false-information-in-ai-2025-aiaaic2123` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-sora-2-accused-of-violating-disney-nintendo-2025-aiaaic2044` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-sora-2-used-to-create-fake-kids-jeffrey-epstein-toy-set-2025-aiaaic2048` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-sora-ai-video-generator-accused-of-perpetuating-sexist-2025-aiaaic1929` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-sora-users-create-ai-videos-of-martin-luther-king-making-2025-aiaaic2067` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-soulless-ai-generated-coca-cola-christmas-ad-2024-aiaaic1821` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-stable-diffusion-3-churns-out-anatomically-incorrect-2024-aiaaic1562` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-stalker-uses-sora-2-to-harass-technology-2025-aiaaic2047` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-steak-n-shake-sued-for-alleged-facial-biometric-2024-aiaaic1730` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-students-create-deepfake-nudes-of-st-thomas-aquinas-2024-aiaaic1973` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-study-ai-chatbots-fail-disabled-2024-aiaaic1742` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-study-chatgpt-health-fails-critical-emergency-and-suicide-2026-aiaaic2222` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-study-chatgpt-misattributes-misrepresents-news-publisher-2024-aiaaic1837` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-study-generative-ai-systems-overstate-what-they-2024-aiaaic1800` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-study-google-ai-overviews-is-inaccurate-in-43-percent-of-2024-aiaaic1795` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-study-openai-voice-agents-can-automate-phone-2024-aiaaic1789` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-study-suno-ai-makes-racist-and-anti-semitic-2024-aiaaic1635` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-study-tiktok-fails-to-ban-political-2024-aiaaic1778` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-study-whisper-ai-speech-recognition-creates-violent-2024-aiaaic1847` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-study-whisper-ai-transcription-invents-medical-2024-aiaaic1785` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-study-x-algorithm-boosts-right-wing-accounts-during-us-2024-aiaaic1819` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-taco-bell-ai-roll-out-in-disarray-after-customer-orders-18-2025-aiaaic2019` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-ted-cruz-uses-fake-ai-video-to-attack-msnbc-over-no-kings-2025-aiaaic2086` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-tenncare-automated-system-accused-of-illegally-denying-2024-aiaaic1720` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-tesla-cybertruck-attempts-to-drive-off-houston-2026-aiaaic2245` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-tesla-cybertruck-attempts-to-turn-into-oncoming-2025-aiaaic1914` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-tesla-cybertruck-using-fsd-crashes-into-2025-aiaaic1913` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-tesla-driver-using-autopilot-kills-2024-aiaaic1460` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-tesla-in-fsd-attempts-to-drive-into-passing-2024-aiaaic1501` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-tesla-mad-max-mode-accused-of-enabling-reckless-automated-2025-aiaaic2083` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-usa-tesla-robotaxi-austin-launch-incidents-2025 |
| `us-tesla-sued-for-using-blade-runner-2049-imagery-to-launch-2024-aiaaic1775` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-tesla-with-fsd-activated-crashes-into-rear-of-motorcycle-2024-aiaaic2010` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-usa-tesla-fsd-nhtsa-engineering-analysis-2024 |
| `us-tesla-with-fsd-activated-hits-and-kills-pedestrian-in-2025-aiaaic2009` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-texas-staar-automated-scoring-engine-criticised-for-dumbing-2024-aiaaic1451` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-the-center-for-investigative-reporting-sues-microsoft-2024-aiaaic1561` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-three-news-publishers-sue-openai-for-copyright-2024-aiaaic1440` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-eight-newspapers-sue-openai-and-microsoft-for-copyright-2024-aiaaic1495 |
| `us-top-ai-image-generators-produce-misleading-election-2024-aiaaic1373` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-top-ai-models-generate-misleading-us-election-information-2024-aiaaic1729` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-ai-models-found-to-generate-inaccurate-and-untrue-election-2024-aiaaic1364 |
| `us-trevis-williams-wrongfully-arrested-due-to-nypd-facial-2025-aiaaic2026` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-trump-supporters-target-black-voters-with-fake-ai-2024-aiaaic1367` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-turbotax-h-and-r-block-chatbots-provide-inaccurate-tax-2024-aiaaic1370` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-two-journalists-sue-microsoft-openai-for-using-content-to-2024-aiaaic1685` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-unitedhealth-algorithm-accused-of-systematically-limiting-2024-aiaaic1838` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-university-of-michigan-partner-sells-student-data-for-ai-2024-aiaaic1403` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-unprompted-grok-exposes-porn-workers-legal-name-and-2026-aiaaic2216` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-unreleased-sora-model-leaked-online-in-protest-against-2024-aiaaic1930` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-us-authorities-use-license-plate-readers-to-monitor-2025-aiaaic2153` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-us-ftc-cracks-down-on-donotpay-robot-2024-aiaaic1753` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-us-government-health-report-riddled-with-ai-2025-aiaaic2002` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-us-government-sued-over-ai-powered-social-media-2025-aiaaic2074` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-us-law-firms-fined-for-false-ai-generated-legal-citations-2025-aiaaic1983` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-us-plan-to-train-ai-system-by-scanning-migrants-kids-faces-2024-aiaaic1684` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-us-plan-to-use-ai-to-revoke-pro-hamas-foreign-student-visas-2025-aiaaic1950` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-us-veterans-affairs-suicide-prevention-algorithm-favours-2024-aiaaic1509` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-voice-actors-sue-ai-start-up-for-voice-2024-aiaaic1497` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-wacom-ai-generated-chinese-new-year-promotion-2024-aiaaic1320` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-walmart-product-liability-lawsuit-cites-fake-legal-2025-aiaaic1919` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-walmart-sells-fake-chanel-ai-artwork-at-2024-aiaaic1470` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-warner-bros-discovery-accuses-midjourney-of-systematic-2025-aiaaic2075` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-disney-universal-warner-bros-sue-chinas-minimax-for-ai-2024-aiaaic2079 |
| `us-waymo-blocks-ambulance-from-reaching-austin-mass-2026-aiaaic2230` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-waymo-honking-robotaxis-keep-neighbourhood-2024-aiaaic1698` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-waymo-in-autonomous-mode-crashes-into-wooden-utility-pole-2024-aiaaic1770` | aiaaic-batch-a-2024-2026-round-6.json | exact-dup | KEEP (drop duplicate us-waymo-robotaxi-crashes-into-wooden-utility-pole-in-2024-aiaaic2144) |
| `us-waymo-robotaxi-crashes-into-wooden-utility-pole-in-2024-aiaaic2144` | aiaaic-batch-a-2024-2026-round-6.json | exact-dup | DROP-EXACT-DUP (duplicate of us-waymo-in-autonomous-mode-crashes-into-wooden-utility-pole-2024-aiaaic1770) |
| `us-waymo-robotaxi-fails-to-stop-for-school-2025-aiaaic2138` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-waymo-robotaxi-hits-and-kills-san-francisco-corner-store-2025-aiaaic2147` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-waymo-robotaxi-injures-cyclist-in-san-2024-aiaaic1333` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-waymo-sued-after-cyclist-is-doored-by-robotaxi-2025-aiaaic2146 |
| `us-waymo-robotaxi-strikes-child-outside-santa-monica-2026-aiaaic2183` | aiaaic-batch-a-2024-2026-round-6.json | weak-dup | KEEP |
| `us-waymo-sued-after-cyclist-is-doored-by-robotaxi-2025-aiaaic2146` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-us-waymo-robotaxi-injures-cyclist-in-san-2024-aiaaic1333 |
| `us-wendys-dynamic-pricing-plan-prompts-2024-aiaaic1701` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-white-house-appears-to-use-ai-to-calculate-tariff-2025-aiaaic1935` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-white-house-chief-of-staff-targeted-in-ai-powered-security-2025-aiaaic2003` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-wisconsin-man-arrested-for-using-ai-to-create-thousands-of-2024-aiaaic1917` | aiaaic-batch-a-2024-2026-round-6.json | probable-dup | MERGE-WITH-usa-anderegg-wisconsin-stable-diffusion-csam-2024 |
| `us-wyoming-reporter-uses-ai-to-invent-2024-aiaaic1687` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-x-twitter-fails-to-remove-graphic-ai-images-of-taylor-2024-aiaaic1314` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-xai-accused-of-worsening-memphis-2024-aiaaic1724` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-youth-advocacy-worker-misidentified-by-met-police-facial-2024-aiaaic1510` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-youtube-crime-page-discovered-to-be-entirely-ai-2024-aiaaic1719` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-zane-shamblin-commits-suicide-after-chatgpt-2025-aiaaic2106` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-zoox-robotaxi-collides-with-passenger-vehicle-in-las-2025-aiaaic1975` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `us-zoox-robotaxis-recalled-for-veering-into-oncoming-2025-aiaaic2175` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `vn-two-vietnamese-women-are-nearly-killed-after-following-2025-aiaaic2162` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
| `za-grok-posts-unsolicited-white-genocide-responses-to-x-2025-aiaaic1978` | aiaaic-batch-a-2024-2026-round-6.json | — | KEEP |
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
| `cl-emotiv-supreme-court-brain-data-2023` | brain-computer-interface-privacy-round-5-2026-06-01.json | probable-dup | MERGE-INTO-chile-oberster-gerichtshof-zwingt-emotiv-zur-loeschung-von-hirndaten-erstes-neurorights |
| `cn-brainco-school-eeg-headbands-2019` | brain-computer-interface-privacy-round-5-2026-06-01.json | weak-dup | KEEP |
| `cn-deayea-train-driver-eeg-monitoring-2018` | brain-computer-interface-privacy-round-5-2026-06-01.json | — | KEEP |
| `fr-unesco-neurotech-ethics-recommendation-2025` | brain-computer-interface-privacy-round-5-2026-06-01.json | weak-dup | KEEP |
| `usa-california-neural-data-sb1223-2024` | brain-computer-interface-privacy-round-5-2026-06-01.json | — | KEEP |
| `usa-colorado-neural-data-law-hb24-1058-2024` | brain-computer-interface-privacy-round-5-2026-06-01.json | weak-dup | KEEP |
| `usa-emotiv-consumer-eeg-neurorights-report-2024` | brain-computer-interface-privacy-round-5-2026-06-01.json | weak-dup | KEEP |
| `usa-neuralink-arbaugh-thread-retraction-2024` | brain-computer-interface-privacy-round-5-2026-06-01.json | weak-dup | KEEP |
| `usa-neuralink-monkey-deaths-2023` | brain-computer-interface-privacy-round-5-2026-06-01.json | weak-dup | KEEP |
| `usa-second-sight-argus-abandoned-patients-2022` | brain-computer-interface-privacy-round-5-2026-06-01.json | weak-dup | KEEP |
| `usa-ut-austin-semantic-decoder-fmri-2023` | brain-computer-interface-privacy-round-5-2026-06-01.json | weak-dup | KEEP |
| `ae-g42-china-decoupling-2024` | brics-ai-cooperation-round-5-2026-06-01.json | — | KEEP |
| `cn-russia-garpiya-drone-2024` | brics-ai-cooperation-round-5-2026-06-01.json | weak-dup | KEEP |
| `ir-china-shahed-beidou-2025` | brics-ai-cooperation-round-5-2026-06-01.json | — | KEEP |
| `ir-tiandy-tehran-surveillance-2024` | brics-ai-cooperation-round-5-2026-06-01.json | weak-dup | KEEP |
| `pk-lahore-cpec-ai-policing-2024` | brics-ai-cooperation-round-5-2026-06-01.json | weak-dup | KEEP |
| `rs-huawei-belgrade-elte-expansion-2024` | brics-ai-cooperation-round-5-2026-06-01.json | weak-dup | KEEP |
| `ru-alabuga-shahed-ai-upgrade-2024` | brics-ai-cooperation-round-5-2026-06-01.json | — | KEEP |
| `ru-sberbank-china-ai-pact-2025` | brics-ai-cooperation-round-5-2026-06-01.json | probable-dup | MERGE-INTO-russland-sberbank-china-pakt-fuer-gemeinsame-ki-forschung-nach-deepseek-sprung-2025 |
| `sa-huawei-smart-city-hajj-2024` | brics-ai-cooperation-round-5-2026-06-01.json | probable-dup | MERGE-INTO-saudi-arabien-huawei-ki-kameras-zur-hadsch-ueberwachung-und-neom-identifizierung-2024 |
| `ug-huawei-bobi-wine-spying-2024` | brics-ai-cooperation-round-5-2026-06-01.json | probable-dup | MERGE-INTO-uganda-huawei-safe-city-kameras-verfolgen-opposition-rund-um-bobi-wine-2024 |
| `uz-huawei-tashkent-safe-city-2024` | brics-ai-cooperation-round-5-2026-06-01.json | probable-dup | MERGE-INTO-usbekistan-huawei-safe-city-fuer-1-mrd-usd-setzt-ki-verkehrs-und-buergerueberwachung-in |
| `ve-cantv-zte-fatherland-card-2024` | brics-ai-cooperation-round-5-2026-06-01.json | weak-dup | KEEP |
| `zw-cloudwalk-facial-bias-2024` | brics-ai-cooperation-round-5-2026-06-01.json | weak-dup | KEEP |
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
| `arup-hong-kong-deepfake-cfo-25m-2024` | cybersecurity-ai-2023-2025-round-4-agent-c.json | probable-dup | MERGE-WITH-hk-deepfake-cfo-scams-finance-worker-for-usd-25-2024-aiaaic1321 |
| `deepseek-r1-jailbreak-malware-2025` | cybersecurity-ai-2023-2025-round-4-agent-c.json | weak-dup | KEEP |
| `ferrari-deepfake-ceo-vigna-2024` | cybersecurity-ai-2023-2025-round-4-agent-c.json | probable-dup | MERGE-INTO-italien-ferrari-deepfake-anruf-imitiert-ceo-vigna-vereitelt-durch-buch-frage-2024 |
| `funksec-ai-ransomware-algeria-2024` | cybersecurity-ai-2023-2025-round-4-agent-c.json | weak-dup | KEEP |
| `google-gtig-gemini-apt-2025` | cybersecurity-ai-2023-2025-round-4-agent-c.json | weak-dup | KEEP |
| `hp-wolf-asyncrat-ai-malware-france-2024` | cybersecurity-ai-2023-2025-round-4-agent-c.json | weak-dup | KEEP |
| `kimsuky-deepfake-south-korea-military-id-2025` | cybersecurity-ai-2023-2025-round-4-agent-c.json | probable-dup | MERGE-WITH-kr-north-korean-hackers-use-chatgpt-to-make-deepfake-military-2025-aiaaic2034 |
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
| `portugal-worldcoin-iris-scan-suspendierung-2024` | eu-2024-2025-round-1-agent-d.json | probable-dup | MERGE-WITH-pt-portugal-bans-worldcoin-for-90-days-for-jeopardising-2024-aiaaic1480 |
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
| `niederlande-uber-290m-eurofine-gdpr-2024` | gig-worker-platforms-2023-2025-round-2-agent-e.json | exact-dup | KEEP (drop duplicate nl-dutch-regulator-fines-clearview-ai-for-privacy-2024-aiaaic1728) |
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
| `israel-corsight-gaza-facial-recognition-2024` | mena-2024-2025-round-1-agent-b.json | exact-dup | DROP-EXACT-DUP (duplicate of il-israel-facial-recognition-system-misidentifies-innocent-2024-aiaaic1413) |
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
| `uk-home-office-ipic-immigration-algorithm-2024` | migration-border-ai-2023-2025-round-3-agent-d.json | probable-dup | MERGE-WITH-gb-uk-ai-immigration-enforcement-tool-criticised-as-2024-aiaaic1824 |
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
| `australia-robodebt-royal-commission-2023` | pre-2022-historical-round-5-2026-06-01.json | probable-dup | MERGE-INTO-australien-robodebt-royal-commission-crude-cruel-and-unlawful-mit-zwei-suiziden-in |
| `china-xinjiang-ijop-hrw-2018` | pre-2022-historical-round-5-2026-06-01.json | weak-dup | KEEP |
| `global-buolamwini-gender-shades-2018` | pre-2022-historical-round-5-2026-06-01.json | weak-dup | KEEP |
| `hk-protests-facial-recognition-lampposts-2019` | pre-2022-historical-round-5-2026-06-01.json | weak-dup | KEEP |
| `netherlands-sweetie-terre-des-hommes-2013` | pre-2022-historical-round-5-2026-06-01.json | weak-dup | KEEP |
| `netherlands-syri-court-ruling-2020` | pre-2022-historical-round-5-2026-06-01.json | weak-dup | KEEP |
| `netherlands-toeslagenaffaire-childcare-2021` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `uk-ofqual-a-level-algorithm-2020` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `usa-amazon-ai-hiring-tool-2018` | pre-2022-historical-round-5-2026-06-01.json | weak-dup | KEEP |
| `usa-apple-card-goldman-sachs-2019` | pre-2022-historical-round-5-2026-06-01.json | probable-dup | MERGE-INTO-usa-apple-card-goldman-sachs-kredit-algorithmus-benachteiligt-frauen-ny-dfs-untersucht |
| `usa-clearview-ai-nyt-expose-2020` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `usa-facebook-emotional-contagion-2014` | pre-2022-historical-round-5-2026-06-01.json | — | KEEP |
| `usa-google-photos-gorilla-2015` | pre-2022-historical-round-5-2026-06-01.json | weak-dup | KEEP |
| `usa-houston-vam-evaas-2017` | pre-2022-historical-round-5-2026-06-01.json | weak-dup | KEEP |
| `usa-microsoft-tay-chatbot-2016` | pre-2022-historical-round-5-2026-06-01.json | probable-dup | MERGE-INTO-usa-microsoft-tay-ki-chatbot-wird-in-16-stunden-zum-rassistischen-nazi-bot-2016 |
| `usa-nsa-skynet-program-2013` | pre-2022-historical-round-5-2026-06-01.json | weak-dup | KEEP |
| `usa-optum-healthcare-algorithm-bias-2019` | pre-2022-historical-round-5-2026-06-01.json | weak-dup | KEEP |
| `usa-robert-williams-wrongful-arrest-2020` | pre-2022-historical-round-5-2026-06-01.json | probable-dup | MERGE-INTO-usa-robert-williams-detroit-erste-oeffentlich-bekannte-falsch-verhaftung-durch |
| `usa-uber-greyball-2017` | pre-2022-historical-round-5-2026-06-01.json | weak-dup | KEEP |
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
| `usa-eiswert-pikesville-ai-voice-deepfake-2024` | us-canada-2024-2025-round-1-agent-f.json | probable-dup | MERGE-WITH-us-baltimore-high-school-athletic-director-uses-ai-to-smear-2024-aiaaic1463 |
| `usa-itutorgroup-eeoc-age-ai-settlement-2023-2024` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-mcdonalds-paradox-mchire-olivia-leak-2025` | us-canada-2024-2025-round-1-agent-f.json | probable-dup | MERGE-INTO-usa-mchire-olivia-paradox-ai-recruiting-chatbot-legt-64-mio-bewerber-daten-frei-2025 |
| `usa-mobley-workday-adea-collective-2025` | us-canada-2024-2025-round-1-agent-f.json | probable-dup | MERGE-WITH-usa-mobley-workday-ki-altersdiskriminierung-2024 |
| `usa-pasco-county-predictive-policing-settlement-2024` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-pelkey-ai-victim-impact-statement-arizona-2025` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-perplexity-ai-wsj-nytimes-copyright-2024` | us-canada-2024-2025-round-1-agent-f.json | probable-dup | MERGE-WITH-us-dow-jones-sues-perplexity-ai-for-copyright-2024-aiaaic1776 |
| `usa-quran-reid-louisiana-frt-arrest-2023` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-reddit-anthropic-scraping-2025` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-scale-surge-ai-tasker-misclassification-2024` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-tesla-fsd-nhtsa-engineering-analysis-2024` | us-canada-2024-2025-round-1-agent-f.json | probable-dup | MERGE-WITH-us-tesla-with-fsd-activated-crashes-into-rear-of-motorcycle-2024-aiaaic2010 |
| `usa-tesla-robotaxi-austin-launch-incidents-2025` | us-canada-2024-2025-round-1-agent-f.json | probable-dup | MERGE-WITH-us-tesla-mad-max-mode-accused-of-enabling-reckless-automated-2025-aiaaic2083 |
| `usa-thomson-reuters-ross-intelligence-fair-use-2025` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |

---

_Schwellen, Tokenisierung und Boosts siehe Header dieses Reports + `scripts/dedup-candidates-round-1.js`._