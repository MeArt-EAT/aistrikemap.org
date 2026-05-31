# Audit: Bilinguale Incident-Migration

Datum: 2026-05-31

## Zusammenfassung

- Geprüfte Dateien: **274**
- Saubere Dateien (keine Findings): **5**
- Dateien mit Findings: **269**
- Findings insgesamt: **1227**

## Findings nach Kategorie

- `identical_de_en`: 1080
- `dropped_proper_name`: 98
- `german_leakage_german-word`: 32
- `german_leakage_umlaut`: 15
- `length_ratio`: 2

## Detail pro Datei

### aegypten-ki-protest-identifikation.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Sandvine (Blue Coat Systems)`
  - EN: `Sandvine (Blue Coat Systems)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Egypt: Human Rights Situation`
  - EN: `Egypt: Human Rights Situation`
- **identical_de_en** @ `sources[1].title`
  - DE: `Freedom on the Net 2023: Egypt`
  - EN: `Freedom on the Net 2023: Egypt`

### aethiopien-internet-abschaltung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `#KeepItOn: Ethiopia Internet Shutdowns`
  - EN: `#KeepItOn: Ethiopia Internet Shutdowns`
- **identical_de_en** @ `sources[1].title`
  - DE: `Freedom on the Net 2023: Ethiopia`
  - EN: `Freedom on the Net 2023: Ethiopia`

### aethiopien-ki-ethnische-gewalt.json

- **dropped_proper_name** @ `timeline[3].description`
  - DE: `Das Waffenstillstandsabkommen von Pretoria beendet den aktiv`
  - EN: `The Pretoria ceasefire agreement ended the active conflict. `
  - missing-name: EU
- **identical_de_en** @ `sources[0].title`
  - DE: `Ethiopia: Meta's failures contributed to abuses against Tigrayan community durin`
  - EN: `Ethiopia: Meta's failures contributed to abuses against Tigrayan community durin`
- **identical_de_en** @ `sources[1].title`
  - DE: `Meta sued for £2bn over Ethiopia hate speech revealed by Bureau`
  - EN: `Meta sued for £2bn over Ethiopia hate speech revealed by Bureau`
- **identical_de_en** @ `sources[2].title`
  - DE: `A $1.6 billion lawsuit alleges Facebook's inaction fueled violence in Ethiopia`
  - EN: `A $1.6 billion lawsuit alleges Facebook's inaction fueled violence in Ethiopia`
- **identical_de_en** @ `sources[3].title`
  - DE: `Ethiopians file lawsuit against Meta over hate speech in Tigray war`
  - EN: `Ethiopians file lawsuit against Meta over hate speech in Tigray war`

### aethiopien-telecom-ueberwachung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Champing at the Cyberbit: Ethiopian Dissidents Targeted with New Commercial Spyw`
  - EN: `Champing at the Cyberbit: Ethiopian Dissidents Targeted with New Commercial Spyw`
- **identical_de_en** @ `sources[1].title`
  - DE: `#KeepItOn — Tracking internet shutdowns including Tigray blackout`
  - EN: `#KeepItOn — Tracking internet shutdowns including Tigray blackout`
- **identical_de_en** @ `sources[2].title`
  - DE: `Ethiopia: Communications Shutdown Takes Heavy Toll`
  - EN: `Ethiopia: Communications Shutdown Takes Heavy Toll`
- **identical_de_en** @ `sources[3].title`
  - DE: `Freedom on the Net 2023: Ethiopia`
  - EN: `Freedom on the Net 2023: Ethiopia`

### afghanistan-biometrische-daten-taliban.json

- **identical_de_en** @ `location.name`
  - DE: `Kabul, Afghanistan`
  - EN: `Kabul, Afghanistan`
- **german_leakage_german-word** @ `timeline[3].description`
  - DE: `Berichte belegen gezielte Taliban-Razzien gegen ehemalige Militär- und Regierung`
  - EN: `Reports document targeted Taliban raids against former military and government e`
- **identical_de_en** @ `sources[0].title`
  - DE: `The Taliban Are Now Armed with Biometric Devices That Can ID Afghans Who Helped `
  - EN: `The Taliban Are Now Armed with Biometric Devices That Can ID Afghans Who Helped `

### algerien-internet-shutdown-proteste.json

- **identical_de_en** @ `sources[0].title`
  - DE: `#KeepItOn: Internet Shutdowns Report`
  - EN: `#KeepItOn: Internet Shutdowns Report`

### amazon-ki-hiring-diskriminierung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Why Amazon's Automated Hiring Tool Discriminated Against Women`
  - EN: `Why Amazon's Automated Hiring Tool Discriminated Against Women`

### anthropic-claude-gtg1002-cyberangriff-china.json

- **identical_de_en** @ `location.name`
  - DE: `Global (Anthropic, USA / GTG-1002, China)`
  - EN: `Global (Anthropic, USA / GTG-1002, China)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Disrupting the first reported AI-orchestrated cyber espionage campaign`
  - EN: `Disrupting the first reported AI-orchestrated cyber espionage campaign`
- **identical_de_en** @ `sources[1].title`
  - DE: `Disrupting the first reported AI-orchestrated cyber espionage campaign (technica`
  - EN: `Disrupting the first reported AI-orchestrated cyber espionage campaign (technica`
- **identical_de_en** @ `sources[2].title`
  - DE: `Anthropic warns state-linked actor abused its AI tool in sophisticated espionage`
  - EN: `Anthropic warns state-linked actor abused its AI tool in sophisticated espionage`
- **identical_de_en** @ `sources[3].title`
  - DE: `Chinese hackers used Anthropic's Claude AI agent to automate spying`
  - EN: `Chinese hackers used Anthropic's Claude AI agent to automate spying`
- **identical_de_en** @ `sources[4].title`
  - DE: `Chinese cyber spies used Claude AI to automate 90% of their attack campaign, Ant`
  - EN: `Chinese cyber spies used Claude AI to automate 90% of their attack campaign, Ant`
- **identical_de_en** @ `sources[5].title`
  - DE: `Request to Testify — Letter from House Committee on Homeland Security to Dario A`
  - EN: `Request to Testify — Letter from House Committee on Homeland Security to Dario A`

### anthropic-pentagon-conflict.json

- **identical_de_en** @ `location.name`
  - DE: `Washington D.C., USA`
  - EN: `Washington D.C., USA`
- **identical_de_en** @ `actors[1].name`
  - DE: `U.S. Department of Defense`
  - EN: `U.S. Department of Defense`
- **identical_de_en** @ `actors[2].name`
  - DE: `Palantir Technologies`
  - EN: `Palantir Technologies`

### argentinien-gesichtserkennung-buenos-aires.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Asociación por los Derechos Civiles (ADC)`
  - EN: `Asociación por los Derechos Civiles (ADC)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Reconocimiento facial en América Latina`
  - EN: `Reconocimiento facial en América Latina`

### argentinien-milei-massa-ki-wahlkampf-2023.json

- **identical_de_en** @ `actors[4].name`
  - DE: `Instagram / Meta`
  - EN: `Instagram / Meta`
- **identical_de_en** @ `sources[0].title`
  - DE: `AI-Generated Deepfakes Manipulate Argentine Presidential Election`
  - EN: `AI-Generated Deepfakes Manipulate Argentine Presidential Election`
- **identical_de_en** @ `sources[1].title`
  - DE: `How AI shaped Milei's path to Argentina presidency`
  - EN: `How AI shaped Milei's path to Argentina presidency`
- **identical_de_en** @ `sources[2].title`
  - DE: `How AI shaped Milei's path to Argentina presidency`
  - EN: `How AI shaped Milei's path to Argentina presidency`
- **identical_de_en** @ `sources[3].title`
  - DE: `The Next General Election will be the Deepfake Election — what should be done to`
  - EN: `The Next General Election will be the Deepfake Election — what should be done to`

### australien-centrelink-ki-fraud-2025-robodebt-20.json

- **identical_de_en** @ `actors[3].name`
  - DE: `Antipoverty Centre / Economic Justice Australia / Australian Unemployed Workers'`
  - EN: `Antipoverty Centre / Economic Justice Australia / Australian Unemployed Workers'`
- **identical_de_en** @ `sources[0].title`
  - DE: `Centrelink trials AI to detect fraud, prioritise debts`
  - EN: `Centrelink trials AI to detect fraud, prioritise debts`
- **identical_de_en** @ `sources[1].title`
  - DE: `Automated decision-making using personal information — increasing transparency a`
  - EN: `Automated decision-making using personal information — increasing transparency a`
- **identical_de_en** @ `sources[2].title`
  - DE: `Centrelink Defends AI Trials Amid Concerns Over Fraud Detection And Debt Backlog`
  - EN: `Centrelink Defends AI Trials Amid Concerns Over Fraud Detection And Debt Backlog`
- **identical_de_en** @ `sources[3].title`
  - DE: `What is the law when AI makes the 'decisions'?`
  - EN: `What is the law when AI makes the 'decisions'?`
- **identical_de_en** @ `sources[4].title`
  - DE: `How to avoid algorithmic decision-making mistakes: lessons from the Robodebt deb`
  - EN: `How to avoid algorithmic decision-making mistakes: lessons from the Robodebt deb`

### australien-ki-immigration-scoring.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Australian Department of Home Affairs`
  - EN: `Australian Department of Home Affairs`
- **identical_de_en** @ `sources[0].title`
  - DE: `Australia's new visa system could use AI to spot dubious applicants`
  - EN: `Australia's new visa system could use AI to spot dubious applicants`
- **identical_de_en** @ `sources[1].title`
  - DE: `Robodeport or surveillance fantasy?: how automated is automatic visa cancellatio`
  - EN: `Robodeport or surveillance fantasy?: how automated is automatic visa cancellatio`
- **identical_de_en** @ `sources[2].title`
  - DE: `AI Bias in Australia: An Urgent Call for Regulatory Intervention`
  - EN: `AI Bias in Australia: An Urgent Call for Regulatory Intervention`
- **identical_de_en** @ `sources[3].title`
  - DE: `Description of Artificial Intelligence tools and capabilities (FOI Release)`
  - EN: `Description of Artificial Intelligence tools and capabilities (FOI Release)`

### australien-ki-polizei-nsw.json

- **identical_de_en** @ `actors[0].name`
  - DE: `NSW Police Force`
  - EN: `NSW Police Force`
- **identical_de_en** @ `sources[0].title`
  - DE: `LECC — Law Enforcement Conduct Commission Review of Surveillance Technology`
  - EN: `LECC — Law Enforcement Conduct Commission Review of Surveillance Technology`
- **identical_de_en** @ `sources[1].title`
  - DE: `Human Rights Law Centre — Facial Recognition and Indigenous Australians`
  - EN: `Human Rights Law Centre — Facial Recognition and Indigenous Australians`
- **identical_de_en** @ `sources[2].title`
  - DE: `Digital Rights Watch — Police Surveillance and AI in Australia`
  - EN: `Digital Rights Watch — Police Surveillance and AI in Australia`

### australien-ki-welfare-fraud.json

- **dropped_proper_name** @ `description`
  - DE: `Die australische Regierung setzte ab 2015 ein automatisierte`
  - EN: `From 2015 onwards the Australian government operated an auto`
  - missing-name: Uber
- **length_ratio** @ `actors[0].name`
  - DE: `Australisches Ministerium fur Humandienstleistungen (Departm`
  - EN: `Australian Department of Human Services`
  - ratio: 0.48
- **identical_de_en** @ `sources[0].title`
  - DE: `Report of the Royal Commission into the Robodebt Scheme`
  - EN: `Report of the Royal Commission into the Robodebt Scheme`
- **identical_de_en** @ `sources[2].title`
  - DE: `$548.5 million: The price the government is willing to pay 'to avoid a public tr`
  - EN: `$548.5 million: The price the government is willing to pay 'to avoid a public tr`
- **identical_de_en** @ `sources[3].title`
  - DE: `Robodebt Royal Commission report unravels systemic injustice`
  - EN: `Robodebt Royal Commission report unravels systemic injustice`

### australien-ndis-ican-algorithmus-behindertenrechte.json

- **identical_de_en** @ `actors[0].name`
  - DE: `National Disability Insurance Agency (NDIA) / NDIS`
  - EN: `National Disability Insurance Agency (NDIA) / NDIS`
- **identical_de_en** @ `actors[3].name`
  - DE: `Disability Advocacy Network Australia / People with Disability Australia`
  - EN: `Disability Advocacy Network Australia / People with Disability Australia`
- **identical_de_en** @ `sources[0].title`
  - DE: `Summary of legislation changes (NDIS Amendment Act 2024)`
  - EN: `Summary of legislation changes (NDIS Amendment Act 2024)`
- **identical_de_en** @ `sources[1].title`
  - DE: `Australia: Labor government's NDIS overhaul excluding thousands of children from`
  - EN: `Australia: Labor government's NDIS overhaul excluding thousands of children from`
- **identical_de_en** @ `sources[2].title`
  - DE: `Update — a new way of planning (NDIS)`
  - EN: `Update — a new way of planning (NDIS)`
- **identical_de_en** @ `sources[3].title`
  - DE: `NDIS operational and pricing updates 2025`
  - EN: `NDIS operational and pricing updates 2025`

### australien-robodebt.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Australian Government / Department of Human Services`
  - EN: `Australian Government / Department of Human Services`
- **identical_de_en** @ `actors[1].name`
  - DE: `Services Australia (Centrelink)`
  - EN: `Services Australia (Centrelink)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Robodebt: government to repay 470,000 unlawful Centrelink debts worth $721m`
  - EN: `Robodebt: government to repay 470,000 unlawful Centrelink debts worth $721m`
- **identical_de_en** @ `sources[1].title`
  - DE: `Robodebt royal commission: Key findings from final report`
  - EN: `Robodebt royal commission: Key findings from final report`

### bahrain-finfisher-aktivisten.json

- **dropped_proper_name** @ `description`
  - DE: `Die Regierung Bahrains setzte die kommerzielle Uberwachungss`
  - EN: `The government of Bahrain used the commercial surveillance s`
  - missing-name: Uber
- **identical_de_en** @ `actors[1].name`
  - DE: `FinFisher / Gamma Group`
  - EN: `FinFisher / Gamma Group`
- **dropped_proper_name** @ `affectedRights[3]`
  - DE: `Schutz vor willkurlicher Uberwachung`
  - EN: `protection from arbitrary surveillance`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[0].description`
  - DE: `Im Zuge des Arabischen Fruhlings brechen in Bahrain massive `
  - EN: `In the wake of the Arab Spring, massive pro-democracy protes`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[2].description`
  - DE: `Trotz internationaler Kritik setzt Bahrain die Uberwachung f`
  - EN: `Despite international criticism, Bahrain continued its surve`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `World Report 2012: Bahrain`
  - EN: `World Report 2012: Bahrain`

### bangladesch-digital-security-act.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Rapid Action Battalion (RAB)`
  - EN: `Rapid Action Battalion (RAB)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Bangladesh press freedom overview 2023`
  - EN: `Bangladesh press freedom overview 2023`

### bangladesch-internet-shutdown-proteste.json

- **identical_de_en** @ `actors[1].name`
  - DE: `RAB (Rapid Action Battalion)`
  - EN: `RAB (Rapid Action Battalion)`
- **identical_de_en** @ `sources[0].title`
  - DE: `#KeepItOn: Fighting Internet Shutdowns`
  - EN: `#KeepItOn: Fighting Internet Shutdowns`

### bangladesch-ki-deepfakes-wahl-2024.json

- **identical_de_en** @ `actors[3].name`
  - DE: `Bangladesh Election Commission`
  - EN: `Bangladesh Election Commission`
- **identical_de_en** @ `sources[0].title`
  - DE: `Deepfakes for $24 a month: how AI is disrupting Bangladesh's election`
  - EN: `Deepfakes for $24 a month: how AI is disrupting Bangladesh's election`
- **identical_de_en** @ `sources[1].title`
  - DE: `Bangladesh elections: censorship, AI deepfakes, and social media polarization`
  - EN: `Bangladesh elections: censorship, AI deepfakes, and social media polarization`
- **identical_de_en** @ `sources[2].title`
  - DE: `Deepfake Videos Ahead Of Bangladesh Polls Should Have Us All Concerned`
  - EN: `Deepfake Videos Ahead Of Bangladesh Polls Should Have Us All Concerned`
- **identical_de_en** @ `sources[3].title`
  - DE: `AI disinformation disrupting Bangladesh's election: report`
  - EN: `AI disinformation disrupting Bangladesh's election: report`

### belarus-internet-shutdown-2020.json

- **dropped_proper_name** @ `name`
  - DE: `Belarus: Internetabschaltung und SORM-Uberwachung wahrend de`
  - EN: `Belarus: internet shutdown and SORM surveillance during the `
  - missing-name: Uber
- **dropped_proper_name** @ `description`
  - DE: `Nach der umstrittenen Prasidentschaftswahl vom 9. August 202`
  - EN: `Following the contested presidential election of 9 August 20`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[1].title`
  - DE: `SORM-Abhorung und Sandvine-DPI fur gezielte Uberwachung`
  - EN: `SORM interception and Sandvine DPI for targeted surveillance`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `Die USA verhangen Exportbeschrankungen gegen Sandvine, nachd`
  - EN: `The United States imposed export restrictions on Sandvine af`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `Belarus: Internet Disruptions, Online Censorship`
  - EN: `Belarus: Internet Disruptions, Online Censorship`
- **identical_de_en** @ `sources[1].title`
  - DE: `Belarusian election tainted by internet shutdown and state-sponsored violence`
  - EN: `Belarusian election tainted by internet shutdown and state-sponsored violence`
- **identical_de_en** @ `sources[2].title`
  - DE: `Belarus protests: From internet outages to pervasive website censorship`
  - EN: `Belarus protests: From internet outages to pervasive website censorship`

### belgien-ki-sozialleistungen-betrug.json

- **german_leakage_german-word** @ `description`
  - DE: `Belgiens Sozialversicherungsbehorden setzten KI-Systeme zur automatisierten Betr`
  - EN: `Belgium's social-security authorities deployed AI systems for automated fraud de`
- **german_leakage_german-word** @ `timeline[2].title`
  - DE: `Ligue des Droits Humains reicht Beschwerde ein`
  - EN: `Ligue des Droits Humains files a complaint`
- **german_leakage_german-word** @ `timeline[2].description`
  - DE: `Die belgische Menschenrechtsorganisation Ligue des Droits Humains reicht eine fo`
  - EN: `The Belgian human rights organization Ligue des Droits Humains filed a formal co`
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `Der belgische Datenschutzbeauftragte leitet eine Untersuchun`
  - EN: `The Belgian data protection authority opened an investigatio`
  - missing-name: EU
- **identical_de_en** @ `sources[0].title`
  - DE: `Plainte contre la detection algorithmique des fraudes aux allocations sociales`
  - EN: `Plainte contre la detection algorithmique des fraudes aux allocations sociales`
- **german_leakage_german-word** @ `sources[0].title`
  - DE: `Plainte contre la detection algorithmique des fraudes aux allocations sociales`
  - EN: `Plainte contre la detection algorithmique des fraudes aux allocations sociales`

### bosnien-migration-ki-grenze.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Border Violence Monitoring Network Reports`
  - EN: `Border Violence Monitoring Network Reports`
- **identical_de_en** @ `sources[1].title`
  - DE: `Bosnia and Herzegovina: Pushbacks and violence at borders`
  - EN: `Bosnia and Herzegovina: Pushbacks and violence at borders`

### brasilien-ki-strafverfolgung.json

- **identical_de_en** @ `actors[2].name`
  - DE: `Instituto Igarapé`
  - EN: `Instituto Igarapé`
- **identical_de_en** @ `sources[0].title`
  - DE: `Brazil turns facial recognition on rioters despite racism fears`
  - EN: `Brazil turns facial recognition on rioters despite racism fears`
- **identical_de_en** @ `sources[1].title`
  - DE: `Brazilian Favelas need racial Justice, not Facial Recognition`
  - EN: `Brazilian Favelas need racial Justice, not Facial Recognition`
- **identical_de_en** @ `sources[2].title`
  - DE: `Facial Recognition in Brazil: a gender and race-based perspective`
  - EN: `Facial Recognition in Brazil: a gender and race-based perspective`
- **identical_de_en** @ `sources[3].title`
  - DE: `Regulating facial recognition in Latin America: Buenos Aires and São Paulo`
  - EN: `Regulating facial recognition in Latin America: Buenos Aires and São Paulo`

### brasilien-tse-ki-wahlen-2026-deepfake-regulierung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Brazil's 2026 Elections Are Its First Real Stress Test for AI Regulation`
  - EN: `Brazil's 2026 Elections Are Its First Real Stress Test for AI Regulation`
- **identical_de_en** @ `sources[1].title`
  - DE: `Brazil Election AI Rules Ban Deepfakes, Leave Gaps`
  - EN: `Brazil Election AI Rules Ban Deepfakes, Leave Gaps`
- **identical_de_en** @ `sources[2].title`
  - DE: `Brazil defines rules for AI in elections, candidates could lose mandate if they `
  - EN: `Brazil defines rules for AI in elections, candidates could lose mandate if they `
- **identical_de_en** @ `sources[3].title`
  - DE: `Brazil's electoral deepfake law tested as AI-generated content targeted local el`
  - EN: `Brazil's electoral deepfake law tested as AI-generated content targeted local el`
- **identical_de_en** @ `sources[4].title`
  - DE: `Brazilian Judges Regulate Elections … and AI`
  - EN: `Brazilian Judges Regulate Elections … and AI`

### chile-ki-verfassungsprozess.json

- **identical_de_en** @ `sources[0].title`
  - DE: `World Report 2021: Chile`
  - EN: `World Report 2021: Chile`

### china-deepseek-r1-datentransfer-globale-bans.json

- **identical_de_en** @ `actors[0].name`
  - DE: `DeepSeek (Hangzhou DeepSeek Artificial Intelligence Co., Ltd.)`
  - EN: `DeepSeek (Hangzhou DeepSeek Artificial Intelligence Co., Ltd.)`
- **identical_de_en** @ `actors[2].name`
  - DE: `South Korea Personal Information Protection Commission (PIPC)`
  - EN: `South Korea Personal Information Protection Commission (PIPC)`
- **identical_de_en** @ `sources[0].title`
  - DE: `South Korea says DeepSeek transferred user data to China and the U.S. without co`
  - EN: `South Korea says DeepSeek transferred user data to China and the U.S. without co`
- **identical_de_en** @ `sources[1].title`
  - DE: `EU Regulators' Data Privacy Concerns with Chinese DeepSeek AI`
  - EN: `EU Regulators' Data Privacy Concerns with Chinese DeepSeek AI`
- **identical_de_en** @ `sources[2].title`
  - DE: `DeepSeek Final Report (U.S. House Select Committee on the CCP)`
  - EN: `DeepSeek Final Report (U.S. House Select Committee on the CCP)`
- **identical_de_en** @ `sources[3].title`
  - DE: `DeepSeek in the Crosshairs: Legislative Actions, International Bans, and Censors`
  - EN: `DeepSeek in the Crosshairs: Legislative Actions, International Bans, and Censors`
- **identical_de_en** @ `sources[4].title`
  - DE: `U.S. Federal and State Governments Moving Quickly to Restrict Use of DeepSeek`
  - EN: `U.S. Federal and State Governments Moving Quickly to Restrict Use of DeepSeek`

### china-ki-arbeitsueberwachung-fabriken.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Chinese surveillance is literally getting in workers' heads`
  - EN: `Chinese surveillance is literally getting in workers' heads`
- **identical_de_en** @ `sources[1].title`
  - DE: `Chinese tech workers outraged by surveillance tool that flags employees who look`
  - EN: `Chinese tech workers outraged by surveillance tool that flags employees who look`
- **identical_de_en** @ `sources[2].title`
  - DE: `Suspect AI: Vibraimage, Emotion Recognition Technology, and Algorithmic Opacity`
  - EN: `Suspect AI: Vibraimage, Emotion Recognition Technology, and Algorithmic Opacity`
- **identical_de_en** @ `sources[3].title`
  - DE: `Mass surveillance in China`
  - EN: `Mass surveillance in China`

### china-ki-covid-ueberwachung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `China's bank run victims planned to protest. Then their Covid health codes turne`
  - EN: `China's bank run victims planned to protest. Then their Covid health codes turne`
- **identical_de_en** @ `sources[1].title`
  - DE: `Henan rural bank customers curbed by COVID-19 app as they protest frozen account`
  - EN: `Henan rural bank customers curbed by COVID-19 app as they protest frozen account`
- **identical_de_en** @ `sources[2].title`
  - DE: `Why China's COVID-tracking QR codes raise surveillance concerns`
  - EN: `Why China's COVID-tracking QR codes raise surveillance concerns`

### china-ki-deepfake-propaganda.json

- **identical_de_en** @ `sources[0].title`
  - DE: `China unveils its first AI news anchor`
  - EN: `China unveils its first AI news anchor`
- **identical_de_en** @ `sources[1].title`
  - DE: `Spamouflage Dragon: China's Largest Covert Influence Operation`
  - EN: `Spamouflage Dragon: China's Largest Covert Influence Operation`

### china-ki-journalisten-ueberwachung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `China — Annual Report on Press Freedom`
  - EN: `China — Annual Report on Press Freedom`
- **identical_de_en** @ `sources[1].title`
  - DE: `World Report 2023: China`
  - EN: `World Report 2023: China`

### china-social-credit-system.json

- **identical_de_en** @ `actors[2].name`
  - DE: `Alibaba / Ant Group`
  - EN: `Alibaba / Ant Group`
- **identical_de_en** @ `sources[0].title`
  - DE: `China's Social Credit System in 2021: From fragmentation towards integration`
  - EN: `China's Social Credit System in 2021: From fragmentation towards integration`
- **identical_de_en** @ `sources[1].title`
  - DE: `Planning Outline for the Construction of a Social Credit System (2014-2020)`
  - EN: `Planning Outline for the Construction of a Social Credit System (2014-2020)`

### china-uiguren-ueberwachung.json

- **dropped_proper_name** @ `description`
  - DE: `Seit 2017 betreibt die chinesische Regierung in der Region X`
  - EN: `Since 2017, the Chinese government has operated an unprecede`
  - missing-name: Uber
- **identical_de_en** @ `location.name`
  - DE: `Urumqi, Xinjiang, China`
  - EN: `Urumqi, Xinjiang, China`
- **identical_de_en** @ `actors[3].name`
  - DE: `Dahua Technology`
  - EN: `Dahua Technology`
- **dropped_proper_name** @ `timeline[0].description`
  - DE: `Die chinesische Regierung startet die politische Kampagne 'S`
  - EN: `The Chinese government launches the 'Strike Hard Against Vio`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[1].description`
  - DE: `Ab 2017 werden Hunderttausende Uiguren ohne rechtliches Verf`
  - EN: `Beginning in 2017, hundreds of thousands of Uyghurs are sent`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `China Cables: Leaked Documents Reveal the Mechanics of China's Mass Detention Sy`
  - EN: `China Cables: Leaked Documents Reveal the Mechanics of China's Mass Detention Sy`
- **identical_de_en** @ `sources[1].title`
  - DE: `China's Algorithms of Repression: Reverse Engineering a Xinjiang Police Mass Sur`
  - EN: `China's Algorithms of Repression: Reverse Engineering a Xinjiang Police Mass Sur`

### compas-recidivism-algorithmus.json

- **identical_de_en** @ `location.name`
  - DE: `Broward County, Florida, USA`
  - EN: `Broward County, Florida, USA`
- **identical_de_en** @ `actors[0].name`
  - DE: `Northpointe / Equivant`
  - EN: `Northpointe / Equivant`
- **identical_de_en** @ `timeline[3].title`
  - DE: `Wisconsin Supreme Court: State v. Loomis`
  - EN: `Wisconsin Supreme Court: State v. Loomis`
- **identical_de_en** @ `sources[0].title`
  - DE: `Machine Bias: There's Software Used Across the Country to Predict Future Crimina`
  - EN: `Machine Bias: There's Software Used Across the Country to Predict Future Crimina`
- **identical_de_en** @ `sources[1].title`
  - DE: `How We Analyzed the COMPAS Recidivism Algorithm`
  - EN: `How We Analyzed the COMPAS Recidivism Algorithm`
- **identical_de_en** @ `sources[2].title`
  - DE: `State v. Loomis – Criminal Law – Sentencing Guidelines`
  - EN: `State v. Loomis – Criminal Law – Sentencing Guidelines`

### costa-rica-conti-ransomware.json

- **identical_de_en** @ `location.name`
  - DE: `San José, Costa Rica`
  - EN: `San José, Costa Rica`
- **identical_de_en** @ `sources[0].title`
  - DE: `Costa Rica declares national emergency after Conti ransomware attacks`
  - EN: `Costa Rica declares national emergency after Conti ransomware attacks`
- **identical_de_en** @ `sources[1].title`
  - DE: `Rewards for Justice – Reward Offer for Information on Conti Ransomware`
  - EN: `Rewards for Justice – Reward Offer for Information on Conti Ransomware`

### detroit-gesichtserkennung-fehlidentifikation.json

- **identical_de_en** @ `location.name`
  - DE: `Detroit, Michigan, USA`
  - EN: `Detroit, Michigan, USA`
- **identical_de_en** @ `actors[0].name`
  - DE: `Detroit Police Department`
  - EN: `Detroit Police Department`
- **identical_de_en** @ `actors[2].name`
  - DE: `NIST (National Institute of Standards and Technology)`
  - EN: `NIST (National Institute of Standards and Technology)`
- **identical_de_en** @ `sources[0].title`
  - DE: `NIST Study Evaluates Effects of Race, Age, Sex on Face Recognition Software`
  - EN: `NIST Study Evaluates Effects of Race, Age, Sex on Face Recognition Software`
- **identical_de_en** @ `sources[1].title`
  - DE: `Racial Discrimination in Face Recognition Technology`
  - EN: `Racial Discrimination in Face Recognition Technology`

### deutschland-afd-ki-bilder-bundestagswahl-2025.json

- **german_leakage_german-word** @ `description`
  - DE: `Im Vorfeld der Bundestagswahl vom 23. Februar 2025 nutzt die rechtsextreme Alter`
  - EN: `In the run-up to the German Bundestag election on February 23, 2025, the far-rig`
- **dropped_proper_name** @ `actors[1].name`
  - DE: `Maximilian Krah (AfD-Spitzenkandidat / EU-MdEP)`
  - EN: `Maximilian Krah (AfD lead candidate / MEP)`
  - missing-name: EU
- **identical_de_en** @ `actors[4].name`
  - DE: `Institute for Strategic Dialogue (ISD)`
  - EN: `Institute for Strategic Dialogue (ISD)`
- **identical_de_en** @ `sources[0].title`
  - DE: `How the German Elections Were 'Successfully Manipulated' By Foreign Actors and A`
  - EN: `How the German Elections Were 'Successfully Manipulated' By Foreign Actors and A`
- **identical_de_en** @ `sources[1].title`
  - DE: `Coordinated disinformation network uses AI, media impersonation to target German`
  - EN: `Coordinated disinformation network uses AI, media impersonation to target German`
- **identical_de_en** @ `sources[2].title`
  - DE: `AI-Generated Aesthetics and the Politics of the German Far-Right`
  - EN: `AI-Generated Aesthetics and the Politics of the German Far-Right`
- **identical_de_en** @ `sources[3].title`
  - DE: `The influence of Deep Fakes on Elections`
  - EN: `The influence of Deep Fakes on Elections`
- **identical_de_en** @ `sources[4].title`
  - DE: `5 Shocking Cases of AI-Generated Deepfakes Interfering in Global Politics`
  - EN: `5 Shocking Cases of AI-Generated Deepfakes Interfering in Global Politics`

### deutschland-gesichtserkennung-bahnhof.json

- **german_leakage_umlaut** @ `name`
  - DE: `Deutschland: Automatisierte Gesichtserkennung am Berliner Suedkreuz`
  - EN: `Germany: Automated facial recognition at Berlin Südkreuz station`
- **german_leakage_umlaut** @ `description`
  - DE: `Die Bundespolizei testete von 2017 bis 2018 automatisierte Gesichtserkennung am `
  - EN: `From 2017 to 2018, the Federal Police tested automated facial recognition at Ber`
- **identical_de_en** @ `actors[1].name`
  - DE: `Deutsche Bahn AG`
  - EN: `Deutsche Bahn AG`
- **german_leakage_umlaut** @ `timeline[0].title`
  - DE: `Start des Pilotprojekts am Suedkreuz`
  - EN: `Pilot project launches at Berlin Südkreuz station`
- **german_leakage_umlaut** @ `timeline[0].description`
  - DE: `Die Bundespolizei startet in Zusammenarbeit mit der Deutschen Bahn einen sechsmo`
  - EN: `The Federal Police, in cooperation with Deutsche Bahn, launches a six-month pilo`

### deutschland-hessendata-palantir.json

- **german_leakage_umlaut** @ `actors[0].name`
  - DE: `Hessisches Ministerium des Innern und für Sport`
  - EN: `Hessian Ministry of the Interior and Sports (Hessisches Ministerium des Innern u`
- **identical_de_en** @ `actors[1].name`
  - DE: `Palantir Technologies`
  - EN: `Palantir Technologies`
- **german_leakage_umlaut** @ `actors[2].name`
  - DE: `Gesellschaft für Freiheitsrechte (GFF)`
  - EN: `Society for Civil Rights (Gesellschaft für Freiheitsrechte, GFF)`

### drc-kobalt-ki-lieferkette.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Apple, Tesla, Microsoft, Alphabet`
  - EN: `Apple, Tesla, Microsoft, Alphabet`
- **german_leakage_german-word** @ `timeline[0].description`
  - DE: `Amnesty International veröffentlicht den Bericht 'This is What We Die For', der `
  - EN: `Amnesty International publishes the report 'This is What We Die For', tracing th`
- **identical_de_en** @ `sources[0].title`
  - DE: `This Is What We Die For — Human Rights Abuses in the DR Congo's Cobalt Mining Se`
  - EN: `This Is What We Die For — Human Rights Abuses in the DR Congo's Cobalt Mining Se`
- **german_leakage_german-word** @ `sources[0].title`
  - DE: `This Is What We Die For — Human Rights Abuses in the DR Congo's Cobalt Mining Se`
  - EN: `This Is What We Die For — Human Rights Abuses in the DR Congo's Cobalt Mining Se`
- **identical_de_en** @ `sources[1].title`
  - DE: `Cobalt Red — How the Blood of the Congo Powers Our Lives`
  - EN: `Cobalt Red — How the Blood of the Congo Powers Our Lives`

### ecuador-ki-ueberwachung-ece911.json

- **identical_de_en** @ `actors[1].name`
  - DE: `CEIEC — China Electronics Import-Export Corporation`
  - EN: `CEIEC — China Electronics Import-Export Corporation`
- **identical_de_en** @ `sources[0].title`
  - DE: `Ecuador's All-Seeing Eye Is Made in China`
  - EN: `Ecuador's All-Seeing Eye Is Made in China`
- **identical_de_en** @ `sources[1].title`
  - DE: `Ecuador is fighting crime using Chinese surveillance technology`
  - EN: `Ecuador is fighting crime using Chinese surveillance technology`
- **identical_de_en** @ `sources[2].title`
  - DE: `Chinese Government Builds Far-Reaching, Allegedly Corrupt, Surveillance System i`
  - EN: `Chinese Government Builds Far-Reaching, Allegedly Corrupt, Surveillance System i`
- **identical_de_en** @ `sources[3].title`
  - DE: `Chinese Government provides $10 million grant for ECU 911 Project`
  - EN: `Chinese Government provides $10 million grant for ECU 911 Project`

### el-salvador-bukele-mass-inhaftierung-ki-bitcoin-city.json

- **german_leakage_german-word** @ `description`
  - DE: `Seit März 2022 regiert El Salvador unter Präsident Nayib Bukele im 'Régimen de E`
  - EN: `Since March 2022, El Salvador has been governed under President Nayib Bukele's c`
- **identical_de_en** @ `actors[3].name`
  - DE: `Stacy Herbert (Director, El Salvador Bitcoin Office)`
  - EN: `Stacy Herbert (Director, El Salvador Bitcoin Office)`
- **identical_de_en** @ `sources[0].title`
  - DE: `El Salvador and the Bukele Anti-Crime Experiment: Is it Working?`
  - EN: `El Salvador and the Bukele Anti-Crime Experiment: Is it Working?`
- **identical_de_en** @ `sources[1].title`
  - DE: `Podcast: Remember Bitcoin? Now Bukele's All In on A.I.`
  - EN: `Podcast: Remember Bitcoin? Now Bukele's All In on A.I.`
- **identical_de_en** @ `sources[2].title`
  - DE: `Bukele's Gang Crackdown Won't Work Elsewhere`
  - EN: `Bukele's Gang Crackdown Won't Work Elsewhere`
- **identical_de_en** @ `sources[4].title`
  - DE: `El Salvador and Bukele`
  - EN: `El Salvador and Bukele`

### emirate-tosca-ueberwachung.json

- **dropped_proper_name** @ `description`
  - DE: `Die Vereinigten Arabischen Emirate setzten uber das staatlic`
  - EN: `Through the state-funded company DarkMatter, the United Arab`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[0].title`
  - DE: `DarkMatter nimmt Uberwachungsoperationen auf`
  - EN: `DarkMatter begins surveillance operations`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `Das US-Justizministerium klagt drei ehemalige US-Geholandedi`
  - EN: `The US Department of Justice charges three former US intelli`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `Calling app ToTok used as 'spying tool' by UAE: Report`
  - EN: `Calling app ToTok used as 'spying tool' by UAE: Report`
- **identical_de_en** @ `sources[2].title`
  - DE: `Messaging app ToTok is reportedly a spying tool for the UAE`
  - EN: `Messaging app ToTok is reportedly a spying tool for the UAE`
- **identical_de_en** @ `sources[3].title`
  - DE: `Former IDF intelligence personnel likely tied to UAE spy app, report says`
  - EN: `Former IDF intelligence personnel likely tied to UAE spy app, report says`

### eritrea-digitale-repression.json

- **dropped_proper_name** @ `name`
  - DE: `Eritrea: Totale Informationskontrolle durch Uberwachung und `
  - EN: `Eritrea: total information control through surveillance and `
  - missing-name: Uber
- **dropped_proper_name** @ `description`
  - DE: `Eritrea betreibt eine der strengsten Medienkontrollen weltwe`
  - EN: `Eritrea operates one of the strictest media control regimes `
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[1].title`
  - DE: `Ausbau digitaler Uberwachungskapazitaten`
  - EN: `Build-out of digital surveillance capacities`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[1].description`
  - DE: `Berichte von Reporters Without Borders und Freedom House bel`
  - EN: `Reports from Reporters Without Borders and Freedom House doc`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[3].title`
  - DE: `Eritrea bleibt international abgeschirmtes Uberwachungsregim`
  - EN: `Eritrea remains an internationally sealed-off surveillance r`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `Reporters Without Borders listet Eritrea jahrlich als eines `
  - EN: `Reporters Without Borders annually lists Eritrea as one of t`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `Eritrea — Reporters Without Borders Press Freedom Index`
  - EN: `Eritrea — Reporters Without Borders Press Freedom Index`
- **identical_de_en** @ `sources[1].title`
  - DE: `Freedom in the World 2023: Eritrea`
  - EN: `Freedom in the World 2023: Eritrea`

### ethiopia-ki-konflikt-ueberwachung.json

- **dropped_proper_name** @ `name`
  - DE: `Athiopien: Digitale Uberwachung und Internetsperren wahrend `
  - EN: `Ethiopia: digital surveillance and internet shutdowns during`
  - missing-name: Uber
- **dropped_proper_name** @ `description`
  - DE: `Wahrend des bewaffneten Konflikts zwischen der athiopischen `
  - EN: `During the armed conflict between the Ethiopian federal gove`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[0].description`
  - DE: `Unmittelbar nach dem Ausbruch des bewaffneten Konflikts zwis`
  - EN: `Immediately after the outbreak of the armed conflict between`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `Nach dem Waffenstillstand vom November 2022 wurde die Intern`
  - EN: `After the November 2022 ceasefire, internet connectivity in `
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `#KeepItOn: Fighting Internet Shutdowns – Ethiopia`
  - EN: `#KeepItOn: Fighting Internet Shutdowns – Ethiopia`

### finnland-ki-sozialamt-diskriminierung.json

- **german_leakage_umlaut** @ `description`
  - DE: `Die finnische Sozialversicherungsanstalt Kela (Kansaneläkelaitos) setzte automat`
  - EN: `The Finnish Social Insurance Institution Kela (Kansaneläkelaitos) deployed autom`
- **german_leakage_umlaut** @ `actors[0].name`
  - DE: `Kela (Kansaneläkelaitos)`
  - EN: `Kela (Kansaneläkelaitos, Social Insurance Institution of Finland)`
- **length_ratio** @ `actors[0].name`
  - DE: `Kela (Kansaneläkelaitos)`
  - EN: `Kela (Kansaneläkelaitos, Social Insurance Institution of Fin`
  - ratio: 2.71
- **identical_de_en** @ `sources[0].title`
  - DE: `Automating Society Report: Finland`
  - EN: `Automating Society Report: Finland`
- **identical_de_en** @ `sources[1].title`
  - DE: `Parliamentary Ombudsman Annual Report`
  - EN: `Parliamentary Ombudsman Annual Report`
- **identical_de_en** @ `sources[2].title`
  - DE: `Kela: Digital Services and Automation`
  - EN: `Kela: Digital Services and Automation`

### frankreich-algorithme-parcoursup.json

- **german_leakage_german-word** @ `description`
  - DE: `Das 2018 eingeführte Parcoursup-System zur Vergabe von Studienplatzen in Frankre`
  - EN: `The Parcoursup system, introduced in 2018 to allocate university places in Franc`
- **german_leakage_german-word** @ `timeline[2].title`
  - DE: `Défenseur des droits und Transparenzklagen`
  - EN: `Défenseur des droits and transparency lawsuits`
- **german_leakage_german-word** @ `timeline[2].description`
  - DE: `Der Défenseur des droits (französische Ombudsstelle) kritisiert in einem Bericht`
  - EN: `The Défenseur des droits (French Ombudsperson) criticizes the lack of transparen`
- **identical_de_en** @ `sources[0].title`
  - DE: `Parcoursup: tout comprendre au nouveau système d'admission dans le supérieur`
  - EN: `Parcoursup: tout comprendre au nouveau système d'admission dans le supérieur`
- **identical_de_en** @ `sources[1].title`
  - DE: `Origines sociales et géographiques des candidats à Parcoursup`
  - EN: `Origines sociales et géographiques des candidats à Parcoursup`
- **german_leakage_german-word** @ `sources[1].title`
  - DE: `Origines sociales et géographiques des candidats à Parcoursup`
  - EN: `Origines sociales et géographiques des candidats à Parcoursup`

### frankreich-caf-algorithmus-diskriminierung-klage.json

- **german_leakage_german-word** @ `description`
  - DE: `Die französische Caisse Nationale des Allocations Familiales (CNAF / CAF) — Verw`
  - EN: `France's Caisse Nationale des Allocations Familiales (CNAF / CAF) — the administ`
- **identical_de_en** @ `actors[0].name`
  - DE: `Caisse Nationale des Allocations Familiales (CNAF / CAF)`
  - EN: `Caisse Nationale des Allocations Familiales (CNAF / CAF)`
- **german_leakage_german-word** @ `actors[0].name`
  - DE: `Caisse Nationale des Allocations Familiales (CNAF / CAF)`
  - EN: `Caisse Nationale des Allocations Familiales (CNAF / CAF)`
- **german_leakage_german-word** @ `timeline[3].description`
  - DE: `Die Klage läuft parallel zur Anwendung des EU-AI-Acts ab Februar 2025, der besti`
  - EN: `The lawsuit unfolds in parallel with the application of the EU AI Act from Febru`
- **identical_de_en** @ `sources[0].title`
  - DE: `France: Discriminatory algorithm used by the social security agency must be stop`
  - EN: `France: Discriminatory algorithm used by the social security agency must be stop`
- **identical_de_en** @ `sources[1].title`
  - DE: `French family welfare scoring algorithm challenged in court by 15 organisations`
  - EN: `French family welfare scoring algorithm challenged in court by 15 organisations`
- **identical_de_en** @ `sources[2].title`
  - DE: `Scoring of welfare beneficiaries: the indecency of CAF's algorithm now undeniabl`
  - EN: `Scoring of welfare beneficiaries: the indecency of CAF's algorithm now undeniabl`

### frankreich-clearview-cnil-20mio-strafe.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Clearview AI Inc.`
  - EN: `Clearview AI Inc.`
- **identical_de_en** @ `sources[0].title`
  - DE: `Facial recognition: 20 million euros penalty against CLEARVIEW AI`
  - EN: `Facial recognition: 20 million euros penalty against CLEARVIEW AI`
- **identical_de_en** @ `sources[1].title`
  - DE: `The French SA fines Clearview AI EUR 20 million`
  - EN: `The French SA fines Clearview AI EUR 20 million`
- **identical_de_en** @ `sources[2].title`
  - DE: `Facial recognition: the French SA imposes a penalty payment on CLEARVIEW AI`
  - EN: `Facial recognition: the French SA imposes a penalty payment on CLEARVIEW AI`
- **identical_de_en** @ `sources[3].title`
  - DE: `Clearview fined again in France for failing to comply with privacy orders`
  - EN: `Clearview fined again in France for failing to comply with privacy orders`

### frankreich-ki-olympia-ueberwachung.json

- **identical_de_en** @ `actors[1].name`
  - DE: `La Quadrature du Net`
  - EN: `La Quadrature du Net`
- **identical_de_en** @ `sources[0].title`
  - DE: `France: Intrusive Olympics surveillance technologies could usher in a dystopian `
  - EN: `France: Intrusive Olympics surveillance technologies could usher in a dystopian `
- **identical_de_en** @ `sources[1].title`
  - DE: `Paris Olympics crowd scans fuel AI surveillance fears`
  - EN: `Paris Olympics crowd scans fuel AI surveillance fears`
- **identical_de_en** @ `sources[2].title`
  - DE: `Algorithmic Surveillance Takes the Stage at the Paris Olympics`
  - EN: `Algorithmic Surveillance Takes the Stage at the Paris Olympics`
- **identical_de_en** @ `sources[3].title`
  - DE: `The French government wants to impose algorithmic video surveillance on the Olym`
  - EN: `The French government wants to impose algorithmic video surveillance on the Olym`

### frankreich-le-monde-openai-partnership-25-prozent-journalisten.json

- **identical_de_en** @ `actors[2].name`
  - DE: `Louis Dreyfus (Le Monde CEO)`
  - EN: `Louis Dreyfus (Le Monde CEO)`
- **identical_de_en** @ `actors[3].name`
  - DE: `Brad Lightcap (OpenAI COO)`
  - EN: `Brad Lightcap (OpenAI COO)`
- **german_leakage_umlaut** @ `timeline[3].description`
  - DE: `Im Lauf von 2024–2026 wird das Le-Monde-25-Prozent-Modell zur internationalen Re`
  - EN: `Across 2024–2026 the Le Monde 25-percent model becomes an international referenc`
- **identical_de_en** @ `sources[0].title`
  - DE: `In France, AI revenue is going directly to journalists. Could that happen in the`
  - EN: `In France, AI revenue is going directly to journalists. Could that happen in the`
- **identical_de_en** @ `sources[1].title`
  - DE: `Artificial intelligence: the partnership agreement between Le Monde and OpenAI e`
  - EN: `Artificial intelligence: the partnership agreement between Le Monde and OpenAI e`
- **identical_de_en** @ `sources[2].title`
  - DE: `Who's suing AI and who's signing: Encyclopedia Britannica and Merriam-Webster su`
  - EN: `Who's suing AI and who's signing: Encyclopedia Britannica and Merriam-Webster su`
- **identical_de_en** @ `sources[3].title`
  - DE: `2024 in review: A timeline of the major deals between publishers and AI companie`
  - EN: `2024 in review: A timeline of the major deals between publishers and AI companie`
- **identical_de_en** @ `sources[4].title`
  - DE: `AI copyright legal battle reaches France`
  - EN: `AI copyright legal battle reaches France`

### gaza-lavender-ki-targeting.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Israel Defense Forces (IDF)`
  - EN: `Israel Defense Forces (IDF)`
- **identical_de_en** @ `sources[0].title`
  - DE: `The Gospel: How Israel Uses AI to Select Bombing Targets in Gaza`
  - EN: `The Gospel: How Israel Uses AI to Select Bombing Targets in Gaza`

### georgien-russische-cyber-angriffe.json

- **german_leakage_umlaut** @ `timeline[1].description`
  - DE: `Ein koordinierter Angriff legt über 15.000 Websites in Georgien lahm, darunter d`
  - EN: `A coordinated attack paralyzes more than 15,000 websites in Georgia, including t`
- **identical_de_en** @ `sources[0].title`
  - DE: `Digital Forensic Research Lab (DFRLab) — Georgia Investigations`
  - EN: `Digital Forensic Research Lab (DFRLab) — Georgia Investigations`
- **identical_de_en** @ `sources[1].title`
  - DE: `Tallinn Manual on the International Law Applicable to Cyber Operations`
  - EN: `Tallinn Manual on the International Law Applicable to Cyber Operations`

### ghana-ki-disinformation-wahlen-2024.json

- **identical_de_en** @ `location.name`
  - DE: `Accra, Ghana (national)`
  - EN: `Accra, Ghana (national)`
- **identical_de_en** @ `actors[1].name`
  - DE: `WITNESS — Deepfakes Rapid Response Force`
  - EN: `WITNESS — Deepfakes Rapid Response Force`
- **identical_de_en** @ `actors[3].name`
  - DE: `Electoral Commission of Ghana (EC)`
  - EN: `Electoral Commission of Ghana (EC)`
- **identical_de_en** @ `actors[4].name`
  - DE: `CIPESA (Collaboration on International ICT Policy for East and Southern Africa)`
  - EN: `CIPESA (Collaboration on International ICT Policy for East and Southern Africa)`
- **identical_de_en** @ `sources[0].title`
  - DE: `AI, Disinformation and the Battle for Truth: How Ghana's 2024 elections exposed `
  - EN: `AI, Disinformation and the Battle for Truth: How Ghana's 2024 elections exposed `
- **identical_de_en** @ `sources[1].title`
  - DE: `Digital Shadows: Deepfakes Used As Violence Against Women in Journalism and Poli`
  - EN: `Digital Shadows: Deepfakes Used As Violence Against Women in Journalism and Poli`
- **identical_de_en** @ `sources[2].title`
  - DE: `The Promise and Peril of AI in Africa's Elections`
  - EN: `The Promise and Peril of AI in Africa's Elections`
- **identical_de_en** @ `sources[3].title`
  - DE: `Disinformation and Deepfakes in Ghanaian Politics: An Emerging AI Threat`
  - EN: `Disinformation and Deepfakes in Ghanaian Politics: An Emerging AI Threat`
- **identical_de_en** @ `sources[4].title`
  - DE: `Tech Harms During Elections in Africa`
  - EN: `Tech Harms During Elections in Africa`

### ghana-ki-wahlbeeinflussung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `AI, Disinformation and the Battle for Truth: How Ghana's 2024 elections exposed `
  - EN: `AI, Disinformation and the Battle for Truth: How Ghana's 2024 elections exposed `
- **identical_de_en** @ `sources[1].title`
  - DE: `AI-powered bots on X spread disinformation in Ghana's election`
  - EN: `AI-powered bots on X spread disinformation in Ghana's election`
- **identical_de_en** @ `sources[2].title`
  - DE: `Election 2024: Manipulated content targeting presidential frontrunners, Bawumia `
  - EN: `Election 2024: Manipulated content targeting presidential frontrunners, Bawumia `
- **identical_de_en** @ `sources[3].title`
  - DE: `AI-generated audio poses as Ghana Vice President Bawumia`
  - EN: `AI-generated audio poses as Ghana Vice President Bawumia`

### griechenland-predator-files-intellexa-verurteilungen.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Greece: Convictions in 'Predatorgate' scandal offer rare accountability in abuse`
  - EN: `Greece: Convictions in 'Predatorgate' scandal offer rare accountability in abuse`
- **identical_de_en** @ `sources[1].title`
  - DE: `Greek court convicts Intellexa founder Tal Dilian, three others in wiretapping s`
  - EN: `Greek court convicts Intellexa founder Tal Dilian, three others in wiretapping s`
- **identical_de_en** @ `sources[2].title`
  - DE: `Greek Court Finds Spyware Executives Guilty`
  - EN: `Greek Court Finds Spyware Executives Guilty`
- **identical_de_en** @ `sources[3].title`
  - DE: `Greek Court Hands Down Maximum Sentences in 'Predator' Spyware Case, Orders More`
  - EN: `Greek Court Hands Down Maximum Sentences in 'Predator' Spyware Case, Orders More`
- **identical_de_en** @ `sources[4].title`
  - DE: `Notorious 'Predator' spyware firm Intellexa hit with new US sanctions`
  - EN: `Notorious 'Predator' spyware firm Intellexa hit with new US sanctions`

### griechenland-predpol-gefluechtete-evros.json

- **dropped_proper_name** @ `actors[1].name`
  - DE: `EU-Kommission / Frontex`
  - EN: `European Commission / Frontex`
  - missing-name: EU
- **dropped_proper_name** @ `timeline[3].title`
  - DE: `EU-Parlamentsuntersuchungen und anhaltende Pushbacks`
  - EN: `European Parliament inquiries and ongoing pushbacks`
  - missing-name: EU
- **identical_de_en** @ `sources[0].title`
  - DE: `Homo Digitalis — Digital Rights in Greece`
  - EN: `Homo Digitalis — Digital Rights in Greece`

### griechenland-predpol-migration.json

- **identical_de_en** @ `actors[2].name`
  - DE: `European Digital Rights (EDRi)`
  - EN: `European Digital Rights (EDRi)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Europe Is Using AI to Profile and Control Migrants`
  - EN: `Europe Is Using AI to Profile and Control Migrants`
- **identical_de_en** @ `sources[1].title`
  - DE: `iBorderCtrl: EU's AI lie detector for border control`
  - EN: `iBorderCtrl: EU's AI lie detector for border control`

### groenland-datensouveraenitaet-daenemark.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Arctic Council: Sustainable Development and Digital Policy`
  - EN: `Arctic Council: Sustainable Development and Digital Policy`
- **identical_de_en** @ `sources[1].title`
  - DE: `Inuit Circumpolar Council: Data Sovereignty Principles`
  - EN: `Inuit Circumpolar Council: Data Sovereignty Principles`

### hongkong-arup-deepfake-cfo-25-mio-betrug.json

- **identical_de_en** @ `actors[3].name`
  - DE: `Hong Kong Police Force / Interpol`
  - EN: `Hong Kong Police Force / Interpol`
- **identical_de_en** @ `sources[0].title`
  - DE: `Arup revealed as victim of $25 million deepfake scam involving Hong Kong employe`
  - EN: `Arup revealed as victim of $25 million deepfake scam involving Hong Kong employe`
- **identical_de_en** @ `sources[1].title`
  - DE: `A deepfake 'CFO' tricked British design firm Arup in $25 million fraud`
  - EN: `A deepfake 'CFO' tricked British design firm Arup in $25 million fraud`
- **identical_de_en** @ `sources[2].title`
  - DE: `Arup Deepfake: How An AI-Generated Video Stole $25 Million`
  - EN: `Arup Deepfake: How An AI-Generated Video Stole $25 Million`
- **identical_de_en** @ `sources[3].title`
  - DE: `Scammers siphon $25M from engineering firm Arup via AI deepfake 'CFO'`
  - EN: `Scammers siphon $25M from engineering firm Arup via AI deepfake 'CFO'`
- **identical_de_en** @ `sources[4].title`
  - DE: `Arup Deepfake Scam Forensic Analysis`
  - EN: `Arup Deepfake Scam Forensic Analysis`

### hongkong-smart-city-ueberwachung.json

- **dropped_proper_name** @ `name`
  - DE: `Hongkong: Smart-City-Uberwachung und Gesichtserkennung gegen`
  - EN: `Hong Kong: smart-city surveillance and facial recognition ag`
  - missing-name: Uber
- **dropped_proper_name** @ `description`
  - DE: `Nach den massiven Pro-Demokratie-Protesten 2019 baut Hongkon`
  - EN: `Following the massive pro-democracy protests of 2019, Hong K`
  - missing-name: Uber
- **dropped_proper_name** @ `affectedRights[4]`
  - DE: `Schutz vor willkurlicher Uberwachung`
  - EN: `protection from arbitrary surveillance`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[0].title`
  - DE: `Proteste und erste Uberwachungseskalation`
  - EN: `Protests and first escalation of surveillance`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[0].description`
  - DE: `Millionen Menschen protestieren gegen das Auslieferungsgeset`
  - EN: `Millions of people protest against the extradition bill. Aut`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[1].title`
  - DE: `Nationales Sicherheitsgesetz und rechtlicher Uberwachungsrah`
  - EN: `National Security Law and the legal framework for surveillan`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[1].description`
  - DE: `Peking erlasst das Nationale Sicherheitsgesetz (NSL) fur Hon`
  - EN: `Beijing enacts the National Security Law (NSL) for Hong Kong`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[2].title`
  - DE: `Ausbau smarter Uberwachungslampen und KI-Monitoring`
  - EN: `Expansion of smart surveillance lampposts and AI monitoring`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[3].title`
  - DE: `Systemische KI-Uberwachung und Exilgemeinschaft unter Druck`
  - EN: `Systemic AI surveillance and pressure on the exile community`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `Amnesty International und Human Rights Watch dokumentieren, `
  - EN: `Amnesty International and Human Rights Watch document that t`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `Hong Kong protesters' fears of surveillance point to China`
  - EN: `Hong Kong protesters' fears of surveillance point to China`
- **identical_de_en** @ `sources[1].title`
  - DE: `Hong Kong adds hundreds of surveillance cameras in public places`
  - EN: `Hong Kong adds hundreds of surveillance cameras in public places`
- **identical_de_en** @ `sources[2].title`
  - DE: `The Abuse of Facial Recognition Technology in the Hong Kong Protests`
  - EN: `The Abuse of Facial Recognition Technology in the Hong Kong Protests`
- **identical_de_en** @ `sources[3].title`
  - DE: `Hong Kong Protestors Implement Methods to Avoid Facial Recognition Technology`
  - EN: `Hong Kong Protestors Implement Methods to Avoid Facial Recognition Technology`

### indien-aadhaar-massenbiometrie.json

- **identical_de_en** @ `actors[0].name`
  - DE: `UIDAI (Unique Identification Authority of India)`
  - EN: `UIDAI (Unique Identification Authority of India)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Rs 500, 10 minutes, and you have access to billion Aadhaar details`
  - EN: `Rs 500, 10 minutes, and you have access to billion Aadhaar details`
- **identical_de_en** @ `sources[1].title`
  - DE: `Aadhaar: India's giant biometric database`
  - EN: `Aadhaar: India's giant biometric database`
- **identical_de_en** @ `sources[2].title`
  - DE: `India: Identification Project Threatens Rights`
  - EN: `India: Identification Project Threatens Rights`

### indien-ki-kasten-diskriminierung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Caste in the United States and Technology Sector`
  - EN: `Caste in the United States and Technology Sector`
- **identical_de_en** @ `sources[1].title`
  - DE: `India: World Report 2023 – Caste Discrimination`
  - EN: `India: World Report 2023 – Caste Discrimination`

### indien-ki-protest-internet-kashmir.json

- **identical_de_en** @ `sources[0].title`
  - DE: `#KeepItOn: Internet Shutdowns in Kashmir`
  - EN: `#KeepItOn: Internet Shutdowns in Kashmir`
- **identical_de_en** @ `sources[1].title`
  - DE: `Kashmir Internet Shutdown Tracker`
  - EN: `Kashmir Internet Shutdown Tracker`
- **identical_de_en** @ `sources[2].title`
  - DE: `World Report 2022: India`
  - EN: `World Report 2022: India`

### indien-modi-bjp-deepfakes-wahl-2024.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Bharatiya Janata Party (BJP, Modi)`
  - EN: `Bharatiya Janata Party (BJP, Modi)`
- **identical_de_en** @ `actors[3].name`
  - DE: `Election Commission of India (ECI)`
  - EN: `Election Commission of India (ECI)`
- **identical_de_en** @ `sources[0].title`
  - DE: `India's Generative AI Election Pilot Shows Artificial Intelligence In Campaigns `
  - EN: `India's Generative AI Election Pilot Shows Artificial Intelligence In Campaigns `
- **identical_de_en** @ `sources[1].title`
  - DE: `The Era of AI-Generated Election Campaigning is Underway in India`
  - EN: `The Era of AI-Generated Election Campaigning is Underway in India`
- **identical_de_en** @ `sources[2].title`
  - DE: `AI and Deepfakes Played a Big Role in India's Elections`
  - EN: `AI and Deepfakes Played a Big Role in India's Elections`
- **identical_de_en** @ `sources[3].title`
  - DE: `Shaping Robust AI Regulation: Lessons from India's 'Deepfake' Election`
  - EN: `Shaping Robust AI Regulation: Lessons from India's 'Deepfake' Election`

### indien-pegasus-opposition.json

- **identical_de_en** @ `sources[0].title`
  - DE: `The Pegasus Project — India Reporting`
  - EN: `The Pegasus Project — India Reporting`

### indien-sitharaman-deepfake-investment-betrug.json

- **identical_de_en** @ `sources[0].title`
  - DE: `AI-Generated Deepfake Videos Falsely Endorse Investment Scam Using Indian Financ`
  - EN: `AI-Generated Deepfake Videos Falsely Endorse Investment Scam Using Indian Financ`
- **identical_de_en** @ `sources[1].title`
  - DE: `Nirmala Sitharaman flags deepfake videos of herself, urges fintechs to strengthe`
  - EN: `Nirmala Sitharaman flags deepfake videos of herself, urges fintechs to strengthe`
- **identical_de_en** @ `sources[2].title`
  - DE: `Fact Check: Deepfake Video Of Nirmala Sitharaman Announcing Investment Project G`
  - EN: `Fact Check: Deepfake Video Of Nirmala Sitharaman Announcing Investment Project G`
- **identical_de_en** @ `sources[3].title`
  - DE: `#FactCheck: Viral AI Video Showing Finance Minister of India endorsing an invest`
  - EN: `#FactCheck: Viral AI Video Showing Finance Minister of India endorsing an invest`
- **identical_de_en** @ `sources[4].title`
  - DE: `AI-Generated Deepfake Video Falsely Portrays Indian Finance Minister Endorsing F`
  - EN: `AI-Generated Deepfake Video Falsely Portrays Indian Finance Minister Endorsing F`

### indonesien-ki-social-scoring.json

- **identical_de_en** @ `actors[1].name`
  - DE: `SAFEnet (Southeast Asia Freedom of Expression Network)`
  - EN: `SAFEnet (Southeast Asia Freedom of Expression Network)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Freedom on the Net 2023: Indonesia`
  - EN: `Freedom on the Net 2023: Indonesia`
- **identical_de_en** @ `sources[1].title`
  - DE: `SAFEnet: Digital Rights in Southeast Asia`
  - EN: `SAFEnet: Digital Rights in Southeast Asia`

### indonesien-prabowo-gemoy-ki-rebranding-2024.json

- **identical_de_en** @ `sources[0].title`
  - DE: `The Dark Side of Generative AI in Prabowo Subianto's Presidential Campaign`
  - EN: `The Dark Side of Generative AI in Prabowo Subianto's Presidential Campaign`
- **identical_de_en** @ `sources[1].title`
  - DE: `The great rebrand`
  - EN: `The great rebrand`
- **identical_de_en** @ `sources[2].title`
  - DE: `It's Time to Reframe Disinformation: Indonesia's Elections Show Why`
  - EN: `It's Time to Reframe Disinformation: Indonesia's Elections Show Why`
- **identical_de_en** @ `sources[3].title`
  - DE: `Unveiling the Dangers of Deepfakes: Threats to Democracy and Election Integrity`
  - EN: `Unveiling the Dangers of Deepfakes: Threats to Democracy and Election Integrity`
- **identical_de_en** @ `sources[4].title`
  - DE: `What can the Philippines learn from how AI was used in Indonesia's 2024 election`
  - EN: `What can the Philippines learn from how AI was used in Indonesia's 2024 election`

### indonesien-prabowo-suharto-deepfake-2024.json

- **identical_de_en** @ `actors[3].name`
  - DE: `TikTok / ByteDance`
  - EN: `TikTok / ByteDance`
- **identical_de_en** @ `sources[0].title`
  - DE: `AI 'resurrects' long dead dictator in murky new era of deepfake electioneering`
  - EN: `AI 'resurrects' long dead dictator in murky new era of deepfake electioneering`
- **identical_de_en** @ `sources[1].title`
  - DE: `The Dark Side of Generative AI in Prabowo Subianto's Presidential Campaign`
  - EN: `The Dark Side of Generative AI in Prabowo Subianto's Presidential Campaign`
- **identical_de_en** @ `sources[2].title`
  - DE: `Election Integrity in the Age of Artificial Intelligence: Lessons from Indonesia`
  - EN: `Election Integrity in the Age of Artificial Intelligence: Lessons from Indonesia`
- **identical_de_en** @ `sources[3].title`
  - DE: `Fake Suharto video fuels debate on AI use in Indonesian election campaign`
  - EN: `Fake Suharto video fuels debate on AI use in Indonesian election campaign`

### irak-ki-drohnen-angriffe.json

- **identical_de_en** @ `sources[0].title`
  - DE: `The Drone Papers`
  - EN: `The Drone Papers`

### irak-zello-app-isis-ueberwachung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Social media use by the Islamic State`
  - EN: `Social media use by the Islamic State`
- **identical_de_en** @ `sources[1].title`
  - DE: `Digital Counterinsurgency: How to Marginalize the Islamic State Online`
  - EN: `Digital Counterinsurgency: How to Marginalize the Islamic State Online`
- **identical_de_en** @ `sources[2].title`
  - DE: `Trucks, Knives, Bombs, Whatever: Pro-Islamic State Instructional Material on Tel`
  - EN: `Trucks, Knives, Bombs, Whatever: Pro-Islamic State Instructional Material on Tel`
- **identical_de_en** @ `sources[3].title`
  - DE: `ISIS's Use of Social Media Still Poses a Threat to Stability`
  - EN: `ISIS's Use of Social Media Still Poses a Threat to Stability`

### iran-israel-12-tage-cyberwar-ki-2025.json

- **identical_de_en** @ `sources[0].title`
  - DE: `AI and the Evolution of Asymmetric Cyber Warfare: Insights from the 2025 Israel-`
  - EN: `AI and the Evolution of Asymmetric Cyber Warfare: Insights from the 2025 Israel-`
- **identical_de_en** @ `sources[1].title`
  - DE: `Hybrid Warfare Unfolded: Cyberattacks, Hacktivism and Disinformation in the 2025`
  - EN: `Hybrid Warfare Unfolded: Cyberattacks, Hacktivism and Disinformation in the 2025`
- **identical_de_en** @ `sources[2].title`
  - DE: `Inside the Cyberwar: How Israel-Tied Predatory Sparrow Hackers Are Targeting Ira`
  - EN: `Inside the Cyberwar: How Israel-Tied Predatory Sparrow Hackers Are Targeting Ira`
- **identical_de_en** @ `sources[3].title`
  - DE: `As Iran and Israel fought, people turned to AI for facts. They didn't find many`
  - EN: `As Iran and Israel fought, people turned to AI for facts. They didn't find many`
- **identical_de_en** @ `sources[4].title`
  - DE: `Old-school tricks and AI tech are weapons in the Iran war`
  - EN: `Old-school tricks and AI tech are weapons in the Iran war`
- **identical_de_en** @ `sources[5].title`
  - DE: `Digital frontlines: What the 12-day war revealed about the evolution of Iran's c`
  - EN: `Digital frontlines: What the 12-day war revealed about the evolution of Iran's c`

### iran-ki-hijab-erkennung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Independent International Fact-Finding Mission on Iran`
  - EN: `Independent International Fact-Finding Mission on Iran`

### irland-dpc-x-grok-eu-trainingsdaten-verfahren.json

- **identical_de_en** @ `actors[0].name`
  - DE: `X / X Corp. (Elon Musk)`
  - EN: `X / X Corp. (Elon Musk)`
- **identical_de_en** @ `actors[2].name`
  - DE: `Data Protection Commission Ireland (DPC)`
  - EN: `Data Protection Commission Ireland (DPC)`
- **identical_de_en** @ `actors[3].name`
  - DE: `Irish High Court`
  - EN: `Irish High Court`
- **identical_de_en** @ `sources[0].title`
  - DE: `The DPC welcomes X's agreement to suspend its processing of personal data for th`
  - EN: `The DPC welcomes X's agreement to suspend its processing of personal data for th`
- **identical_de_en** @ `sources[1].title`
  - DE: `Elon Musk's X taken to court in Ireland for grabbing EU user data to train Grok `
  - EN: `Elon Musk's X taken to court in Ireland for grabbing EU user data to train Grok `
- **identical_de_en** @ `sources[2].title`
  - DE: `Ireland's privacy watchdog ends legal fight with X over data use for AI after it`
  - EN: `Ireland's privacy watchdog ends legal fight with X over data use for AI after it`
- **identical_de_en** @ `sources[3].title`
  - DE: `Irish Regulator Launches Investigation into X/Twitter's Use of EU Data to Train `
  - EN: `Irish Regulator Launches Investigation into X/Twitter's Use of EU Data to Train `
- **identical_de_en** @ `sources[4].title`
  - DE: `X suspends personal data training of AI chatbot Grok following Irish DPC pressur`
  - EN: `X suspends personal data training of AI chatbot Grok following Irish DPC pressur`

### irland-ki-wohlfahrt-pps.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Data Protection Commission Statement on Conclusion of Investigation of the Publi`
  - EN: `Data Protection Commission Statement on Conclusion of Investigation of the Publi`
- **identical_de_en** @ `sources[1].title`
  - DE: `Data Protection Commissioner finds Public Services Card illegal`
  - EN: `Data Protection Commissioner finds Public Services Card illegal`
- **identical_de_en** @ `sources[2].title`
  - DE: `Public Services Card — campaign and analysis`
  - EN: `Public Services Card — campaign and analysis`
- **identical_de_en** @ `sources[3].title`
  - DE: `Public Services Card`
  - EN: `Public Services Card`

### israel-blue-wolf-palaestina.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Testimonies on Blue Wolf and surveillance in the West Bank`
  - EN: `Testimonies on Blue Wolf and surveillance in the West Bank`
- **identical_de_en** @ `sources[1].title`
  - DE: `World Report 2023: Israel and Palestine`
  - EN: `World Report 2023: Israel and Palestine`

### italien-chatgpt-garante-dsgvo-strafe.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Italy's privacy watchdog fines OpenAI €15 million after probe into ChatGPT data `
  - EN: `Italy's privacy watchdog fines OpenAI €15 million after probe into ChatGPT data `
- **identical_de_en** @ `sources[1].title`
  - DE: `Italy Fines OpenAI €15 Million for ChatGPT GDPR Data Privacy Violations`
  - EN: `Italy Fines OpenAI €15 Million for ChatGPT GDPR Data Privacy Violations`
- **identical_de_en** @ `sources[2].title`
  - DE: `OpenAI faces €15 million fine as the Italian Garante strikes again`
  - EN: `OpenAI faces €15 million fine as the Italian Garante strikes again`
- **identical_de_en** @ `sources[3].title`
  - DE: `Landmark Privacy Enforcement: Italian Regulator Issues €15M Fine to OpenAI for G`
  - EN: `Landmark Privacy Enforcement: Italian Regulator Issues €15M Fine to OpenAI for G`

### italien-chatgpt-verbot.json

- **identical_de_en** @ `sources[1].title`
  - DE: `ChatGPT banned in Italy over privacy concerns`
  - EN: `ChatGPT banned in Italy over privacy concerns`

### italien-ki-migration-scoring.json

- **identical_de_en** @ `sources[2].title`
  - DE: `Bias in Algorithms — Artificial Intelligence and Discrimination`
  - EN: `Bias in Algorithms — Artificial Intelligence and Discrimination`

### italien-meloni-deepfake-pornografie.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Incident 926: Giorgia Meloni Reportedly Targeted by Deepfake Pornography`
  - EN: `Incident 926: Giorgia Meloni Reportedly Targeted by Deepfake Pornography`
- **identical_de_en** @ `sources[1].title`
  - DE: `Italian Prime Minister Sues Over Deepfake Pornographic Videos`
  - EN: `Italian Prime Minister Sues Over Deepfake Pornographic Videos`
- **identical_de_en** @ `sources[2].title`
  - DE: `Italian Prime Minister Giorgia Meloni seeking damages of $108,200 in deepfake po`
  - EN: `Italian Prime Minister Giorgia Meloni seeking damages of $108,200 in deepfake po`
- **identical_de_en** @ `sources[3].title`
  - DE: `Meloni slams AI-generated images of herself, calling deepfakes a 'dangerous tool`
  - EN: `Meloni slams AI-generated images of herself, calling deepfakes a 'dangerous tool`
- **identical_de_en** @ `sources[4].title`
  - DE: `Italian PM Giorgia Meloni criticises sexualised AI deepfake images of her being `
  - EN: `Italian PM Giorgia Meloni criticises sexualised AI deepfake images of her being `

### japan-ki-polizei-vorhersage.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Japanese police turn to AI to help predict crimes before they happen`
  - EN: `Japanese police turn to AI to help predict crimes before they happen`
- **identical_de_en** @ `sources[1].title`
  - DE: `Japan unveils national AI strategy with public sector focus`
  - EN: `Japan unveils national AI strategy with public sector focus`
- **identical_de_en** @ `sources[2].title`
  - DE: `World Report 2024: Japan`
  - EN: `World Report 2024: Japan`

### japan-line-datenleck-china.json

- **identical_de_en** @ `actors[0].name`
  - DE: `LINE Corporation / Z Holdings (SoftBank + Naver)`
  - EN: `LINE Corporation / Z Holdings (SoftBank + Naver)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Japan to probe Line over user data accessible from China`
  - EN: `Japan to probe Line over user data accessible from China`

### japan-perplexity-presseverlage-urheberrecht-klage.json

- **identical_de_en** @ `actors[2].name`
  - DE: `Agency for Cultural Affairs (Japan) / Cultural Council`
  - EN: `Agency for Cultural Affairs (Japan) / Cultural Council`
- **identical_de_en** @ `sources[0].title`
  - DE: `General Understanding on AI and Copyright in Japan — Overview`
  - EN: `General Understanding on AI and Copyright in Japan — Overview`
- **identical_de_en** @ `sources[1].title`
  - DE: `AI and Copyright landscape in Japan and Singapore`
  - EN: `AI and Copyright landscape in Japan and Singapore`
- **identical_de_en** @ `sources[2].title`
  - DE: `Man who used generative AI to create image accused of copyright infringement, in`
  - EN: `Man who used generative AI to create image accused of copyright infringement, in`
- **identical_de_en** @ `sources[3].title`
  - DE: `Japan's New Draft Guidelines on AI and Copyright: Is It Really OK to Train AI Us`
  - EN: `Japan's New Draft Guidelines on AI and Copyright: Is It Really OK to Train AI Us`

### jemen-drohnenkrieg-ki.json

- **dropped_proper_name** @ `timeline[0].description`
  - DE: `Die USA beginnen verdeckte Drohnenangriffe im Jemen unter de`
  - EN: `The United States begins covert drone strikes in Yemen under`
  - missing-name: Meta
- **identical_de_en** @ `sources[0].title`
  - DE: `Day of Judgment: The Role of the United States in Civilian Harm in Yemen`
  - EN: `Day of Judgment: The Role of the United States in Civilian Harm in Yemen`

### jordanien-pegasus-journalisten.json

- **dropped_proper_name** @ `affectedRights[3]`
  - DE: `Schutz vor willkurlicher Uberwachung`
  - EN: `protection from arbitrary surveillance`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[2].description`
  - DE: `Zusatzliche forensische Analysen zeigen, dass auch der Vorsi`
  - EN: `Additional forensic analyses show that the chair of the Jord`
  - missing-name: Uber
- **dropped_proper_name** @ `sources[0].title`
  - DE: `Front Line Defenders: Jordanien — Menschenrechtsverteidiger `
  - EN: `Front Line Defenders: Jordan — human rights defenders under `
  - missing-name: Uber

### kambodscha-chinesische-scam-compounds.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Online Scam Operations and Trafficking into Forced Criminality in Southeast Asia`
  - EN: `Online Scam Operations and Trafficking into Forced Criminality in Southeast Asia`
- **identical_de_en** @ `sources[1].title`
  - DE: `Hundreds of thousands trafficked into online criminality across SE Asia`
  - EN: `Hundreds of thousands trafficked into online criminality across SE Asia`
- **identical_de_en** @ `sources[2].title`
  - DE: `China's Exploitation of Scam Centers in Southeast Asia`
  - EN: `China's Exploitation of Scam Centers in Southeast Asia`
- **identical_de_en** @ `sources[3].title`
  - DE: `Scam States: The Cybercrime-Corruption Complex in Southeast Asia`
  - EN: `Scam States: The Cybercrime-Corruption Complex in Southeast Asia`

### kambodscha-internet-gateway.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Cambodia's National Internet Gateway: A tool for censorship and surveillance`
  - EN: `Cambodia's National Internet Gateway: A tool for censorship and surveillance`
- **identical_de_en** @ `sources[1].title`
  - DE: `Cambodia Internet Gateway reporting`
  - EN: `Cambodia Internet Gateway reporting`

### kanada-ki-wohlfahrt-ontario.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Ontario Ministry of Community and Social Services`
  - EN: `Ontario Ministry of Community and Social Services`
- **identical_de_en** @ `actors[1].name`
  - DE: `Citizen Lab / University of Toronto`
  - EN: `Citizen Lab / University of Toronto`
- **identical_de_en** @ `sources[0].title`
  - DE: `Algorithmic Impact Assessment Tool`
  - EN: `Algorithmic Impact Assessment Tool`

### kanada-moffatt-air-canada-chatbot-falschauskunft.json

- **identical_de_en** @ `actors[2].name`
  - DE: `British Columbia Civil Resolution Tribunal (CRT)`
  - EN: `British Columbia Civil Resolution Tribunal (CRT)`
- **identical_de_en** @ `actors[3].name`
  - DE: `Tribunal Member Christopher C. Rivers`
  - EN: `Tribunal Member Christopher C. Rivers`
- **identical_de_en** @ `sources[0].title`
  - DE: `How can I mislead you? Air Canada found liable for chatbot's bad advice on berea`
  - EN: `How can I mislead you? Air Canada found liable for chatbot's bad advice on berea`
- **identical_de_en** @ `sources[1].title`
  - DE: `BC Tribunal Confirms Companies Remain Liable for Information Provided by AI Chat`
  - EN: `BC Tribunal Confirms Companies Remain Liable for Information Provided by AI Chat`
- **identical_de_en** @ `sources[2].title`
  - DE: `Moffatt v. Air Canada: A Misrepresentation by an AI Chatbot`
  - EN: `Moffatt v. Air Canada: A Misrepresentation by an AI Chatbot`
- **identical_de_en** @ `sources[3].title`
  - DE: `AI Gone Wild: Airline Has to Honor a Refund Policy Its Chatbot Fabricated`
  - EN: `AI Gone Wild: Airline Has to Honor a Refund Policy Its Chatbot Fabricated`
- **identical_de_en** @ `sources[4].title`
  - DE: `The Risks of AI: Air Canada's Chatbot Debacle`
  - EN: `The Risks of AI: Air Canada's Chatbot Debacle`

### kanada-rcmp-clearview.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Royal Canadian Mounted Police (RCMP)`
  - EN: `Royal Canadian Mounted Police (RCMP)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Police use of Facial Recognition Technology in Canada and the way forward — RCMP`
  - EN: `Police use of Facial Recognition Technology in Canada and the way forward — RCMP`
- **identical_de_en** @ `sources[1].title`
  - DE: `Clearview AI ceases offering its facial recognition technology in Canada`
  - EN: `Clearview AI ceases offering its facial recognition technology in Canada`
- **identical_de_en** @ `sources[2].title`
  - DE: `RCMP Use of Face Recognition Tool Violated Privacy Law`
  - EN: `RCMP Use of Face Recognition Tool Violated Privacy Law`
- **identical_de_en** @ `sources[3].title`
  - DE: `RCMP denied using facial recognition technology — then said it had been using it`
  - EN: `RCMP denied using facial recognition technology — then said it had been using it`

### kasachstan-ki-protest-shutdown.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Hikvision / Dahua`
  - EN: `Hikvision / Dahua`
- **identical_de_en** @ `sources[0].title`
  - DE: `Internet disrupted in Kazakhstan amid energy price protests`
  - EN: `Internet disrupted in Kazakhstan amid energy price protests`
- **identical_de_en** @ `sources[1].title`
  - DE: `Freedom on the Net 2023: Kazakhstan`
  - EN: `Freedom on the Net 2023: Kazakhstan`

### katar-arbeiter-ueberwachung-wm.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Qatar's World Cup of Shame`
  - EN: `Qatar's World Cup of Shame`

### kenia-worldcoin-iris-scan.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Worldcoin / Tools for Humanity`
  - EN: `Worldcoin / Tools for Humanity`
- **german_leakage_german-word** @ `timeline[1].title`
  - DE: `MIT Technology Review enthullt problematische Praktiken`
  - EN: `MIT Technology Review reveals problematic practices`
- **german_leakage_german-word** @ `timeline[1].description`
  - DE: `Eine Recherche des MIT Technology Review dokumentiert, dass Worldcoin gezielt ar`
  - EN: `An investigation by MIT Technology Review documents that Worldcoin specifically `
- **identical_de_en** @ `sources[0].title`
  - DE: `Kenya becomes the first country to suspend Sam Altman's Worldcoin A.I.-crypto sc`
  - EN: `Kenya becomes the first country to suspend Sam Altman's Worldcoin A.I.-crypto sc`
- **identical_de_en** @ `sources[1].title`
  - DE: `Kenya suspends Worldcoin scans over security, privacy and financial concerns`
  - EN: `Kenya suspends Worldcoin scans over security, privacy and financial concerns`
- **identical_de_en** @ `sources[2].title`
  - DE: `Worldcoin ignored initial order to stop iris scans in Kenya, records show`
  - EN: `Worldcoin ignored initial order to stop iris scans in Kenya, records show`
- **identical_de_en** @ `sources[3].title`
  - DE: `What to Know About Worldcoin and the Controversy Around It`
  - EN: `What to Know About Worldcoin and the Controversy Around It`
- **identical_de_en** @ `sources[4].title`
  - DE: `Kenya orders Worldcoin to delete biometric data in landmark privacy ruling`
  - EN: `Kenya orders Worldcoin to delete biometric data in landmark privacy ruling`

### kenya-content-moderation.json

- **identical_de_en** @ `sources[1].title`
  - DE: `Inside the Hidden Battles of Africa's Gig Workers: Content Moderators in Kenya`
  - EN: `Inside the Hidden Battles of Africa's Gig Workers: Content Moderators in Kenya`

### kolumbien-ki-migration-profiling.json

- **dropped_proper_name** @ `description`
  - DE: `Kolumbien setzt an der Grenze zu Venezuela, insbesondere in `
  - EN: `Colombia deploys AI-assisted profiling systems at the border`
  - missing-name: Uber
- **identical_de_en** @ `location.name`
  - DE: `Cucuta, Colombia`
  - EN: `Cucuta, Colombia`
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `Human Rights Watch und lokale Organisationen fordern Transpa`
  - EN: `Human Rights Watch and local organizations demand transparen`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `IOM Colombia: Migration Response`
  - EN: `IOM Colombia: Migration Response`

### kolumbien-ki-protest-ueberwachung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `#ParoNacionalColombia and Digital Security Considerations for Police Brutality P`
  - EN: `#ParoNacionalColombia and Digital Security Considerations for Police Brutality P`
- **identical_de_en** @ `sources[1].title`
  - DE: `Paro y pandemia: las respuestas a las protestas masivas en Colombia`
  - EN: `Paro y pandemia: las respuestas a las protestas masivas en Colombia`
- **identical_de_en** @ `sources[2].title`
  - DE: `Colombia: Represión en la mira`
  - EN: `Colombia: Represión en la mira`
- **identical_de_en** @ `sources[3].title`
  - DE: `Protestas en Colombia de 2021`
  - EN: `Protestas en Colombia de 2021`

### kuba-sorm-internet-kontrolle.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
  - EN: `Huawei Technologies`
- **identical_de_en** @ `sources[0].title`
  - DE: `Freedom on the Net 2021: Cuba`
  - EN: `Freedom on the Net 2021: Cuba`
- **identical_de_en** @ `sources[1].title`
  - DE: `Freedom on the Net 2023: Cuba`
  - EN: `Freedom on the Net 2023: Cuba`
- **identical_de_en** @ `sources[2].title`
  - DE: `Keep It On: Internet shutdowns in Cuba`
  - EN: `Keep It On: Internet shutdowns in Cuba`

### laos-chinese-surveillance-export.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
  - EN: `Huawei Technologies`
- **identical_de_en** @ `sources[0].title`
  - DE: `The Global Expansion of AI Surveillance`
  - EN: `The Global Expansion of AI Surveillance`
- **identical_de_en** @ `sources[1].title`
  - DE: `Freedom in the World 2023: Laos`
  - EN: `Freedom in the World 2023: Laos`

### libyen-kargu2-autonome-drohne.json

- **identical_de_en** @ `actors[0].name`
  - DE: `STM (Savunma Teknolojileri Mühendislik)`
  - EN: `STM (Savunma Teknolojileri Mühendislik)`
- **german_leakage_umlaut** @ `actors[0].name`
  - DE: `STM (Savunma Teknolojileri Mühendislik)`
  - EN: `STM (Savunma Teknolojileri Mühendislik)`
- **identical_de_en** @ `sources[0].title`
  - DE: `UN Panel of Experts on Libya: Final Report S/2021/229`
  - EN: `UN Panel of Experts on Libya: Final Report S/2021/229`
- **identical_de_en** @ `sources[1].title`
  - DE: `Drones may have attacked humans fully autonomously for the first time`
  - EN: `Drones may have attacked humans fully autonomously for the first time`

### libyen-migration-ki-pushbacks.json

- **identical_de_en** @ `sources[0].title`
  - DE: `The Nightcrawler: Frontex and the Libyan Coast Guard`
  - EN: `The Nightcrawler: Frontex and the Libyan Coast Guard`

### maduro-raid-caracas.json

- **identical_de_en** @ `location.name`
  - DE: `Caracas, Venezuela`
  - EN: `Caracas, Venezuela`
- **identical_de_en** @ `actors[1].name`
  - DE: `Palantir Technologies`
  - EN: `Palantir Technologies`

### malaysia-ki-arbeitsmigranten.json

- **identical_de_en** @ `location.name`
  - DE: `Kuala Lumpur, Malaysia`
  - EN: `Kuala Lumpur, Malaysia`
- **identical_de_en** @ `sources[0].title`
  - DE: `Malaysia Annual Report — Migrant Workers`
  - EN: `Malaysia Annual Report — Migrant Workers`

### malediven-china-safe-city.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
  - EN: `Huawei Technologies`
- **identical_de_en** @ `sources[0].title`
  - DE: `The Global Expansion of AI Surveillance`
  - EN: `The Global Expansion of AI Surveillance`

### marokko-pegasus-journalisten.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Amnesty International Security Lab`
  - EN: `Amnesty International Security Lab`
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `Reporter ohne Grenzen und das Committee to Protect Journalis`
  - EN: `Reporters Without Borders and the Committee to Protect Journ`
  - missing-name: EU
- **identical_de_en** @ `sources[0].title`
  - DE: `Moroccan journalist targeted with NSO Group's tools`
  - EN: `Moroccan journalist targeted with NSO Group's tools`
- **identical_de_en** @ `sources[1].title`
  - DE: `Emmanuel Macron identified in leaked Pegasus project data`
  - EN: `Emmanuel Macron identified in leaked Pegasus project data`
- **identical_de_en** @ `sources[2].title`
  - DE: `Morocco: Human rights defenders targeted with NSO Group's spyware`
  - EN: `Morocco: Human rights defenders targeted with NSO Group's spyware`

### mexiko-ki-militarisierung.json

- **identical_de_en** @ `actors[0].name`
  - DE: `SEDENA (Secretaría de la Defensa Nacional)`
  - EN: `SEDENA (Secretaría de la Defensa Nacional)`
- **identical_de_en** @ `actors[1].name`
  - DE: `PGR (Procuraduría General de la República)`
  - EN: `PGR (Procuraduría General de la República)`
- **identical_de_en** @ `actors[2].name`
  - DE: `Citizen Lab / R3D / Article 19`
  - EN: `Citizen Lab / R3D / Article 19`
- **identical_de_en** @ `sources[0].title`
  - DE: `Reckless Exploit: Mexican Journalists, Lawyers, and a Child Targeted with NSO Sp`
  - EN: `Reckless Exploit: Mexican Journalists, Lawyers, and a Child Targeted with NSO Sp`
- **identical_de_en** @ `sources[1].title`
  - DE: `Gobierno Espía: Vigilancia sistemática contra periodistas y defensores`
  - EN: `Gobierno Espía: Vigilancia sistemática contra periodistas y defensores`

### mexiko-pegasus-43-studenten.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Million Dollar Dissident — NSO Group's iPhone Zero-Days used against a UAE Human`
  - EN: `Million Dollar Dissident — NSO Group's iPhone Zero-Days used against a UAE Human`

### mexiko-sedena-ejercito-espia-pegasus-journalisten.json

- **identical_de_en** @ `actors[6].name`
  - DE: `Comisión Nacional de los Derechos Humanos (CNDH)`
  - EN: `Comisión Nacional de los Derechos Humanos (CNDH)`
- **identical_de_en** @ `sources[1].title`
  - DE: `Spying on Mexican journalists and activist took place in a secret military unit,`
  - EN: `Spying on Mexican journalists and activist took place in a secret military unit,`
- **identical_de_en** @ `sources[2].title`
  - DE: `He's leading Mexico's probe of the Dirty War. Who's spying on him?`
  - EN: `He's leading Mexico's probe of the Dirty War. Who's spying on him?`
- **identical_de_en** @ `sources[3].title`
  - DE: `Mexico: Pegasus Spyware used on Journalists and Citizens`
  - EN: `Mexico: Pegasus Spyware used on Journalists and Citizens`

### microsoft-azure-unit8200-cutoff-gaza.json

- **identical_de_en** @ `actors[2].name`
  - DE: `The Guardian / +972 Magazine / Local Call`
  - EN: `The Guardian / +972 Magazine / Local Call`
- **identical_de_en** @ `actors[3].name`
  - DE: `Amnesty International`
  - EN: `Amnesty International`
- **identical_de_en** @ `sources[0].title`
  - DE: `Microsoft blocks an Israeli military unit's access to its technology after an in`
  - EN: `Microsoft blocks an Israeli military unit's access to its technology after an in`
- **identical_de_en** @ `sources[1].title`
  - DE: `Microsoft cuts Israeli military's access to some cloud computing, AI`
  - EN: `Microsoft cuts Israeli military's access to some cloud computing, AI`
- **identical_de_en** @ `sources[2].title`
  - DE: `Microsoft cuts off Israeli military unit's access to cloud service after mass su`
  - EN: `Microsoft cuts off Israeli military unit's access to cloud service after mass su`
- **identical_de_en** @ `sources[3].title`
  - DE: `Microsoft cuts cloud services to Israeli military unit over Palestinian surveill`
  - EN: `Microsoft cuts cloud services to Israeli military unit over Palestinian surveill`
- **identical_de_en** @ `sources[4].title`
  - DE: `Israel/OPT: Microsoft terminates Israeli military's access to technology used to`
  - EN: `Israel/OPT: Microsoft terminates Israeli military's access to technology used to`

### mosambik-internet-manipulation.json

- **identical_de_en** @ `sources[0].title`
  - DE: `#KeepItOn: Fighting internet shutdowns`
  - EN: `#KeepItOn: Fighting internet shutdowns`
- **identical_de_en** @ `sources[1].title`
  - DE: `Mozambique Country Page`
  - EN: `Mozambique Country Page`

### myanmar-facebook-genozid.json

- **identical_de_en** @ `location.name`
  - DE: `Naypyidaw / Rakhine, Myanmar`
  - EN: `Naypyidaw / Rakhine, Myanmar`
- **identical_de_en** @ `actors[0].name`
  - DE: `Facebook / Meta Platforms`
  - EN: `Facebook / Meta Platforms`
- **identical_de_en** @ `actors[2].name`
  - DE: `UN Fact-Finding Mission on Myanmar`
  - EN: `UN Fact-Finding Mission on Myanmar`
- **identical_de_en** @ `sources[0].title`
  - DE: `Independent International Fact-Finding Mission on Myanmar`
  - EN: `Independent International Fact-Finding Mission on Myanmar`
- **identical_de_en** @ `sources[1].title`
  - DE: `Rohingya sue Facebook for £150bn over Myanmar genocide`
  - EN: `Rohingya sue Facebook for £150bn over Myanmar genocide`
- **identical_de_en** @ `sources[2].title`
  - DE: `An Independent Assessment of the Human Rights Impact of Facebook in Myanmar`
  - EN: `An Independent Assessment of the Human Rights Impact of Facebook in Myanmar`

### myanmar-ki-militaer-ueberwachung.json

- **dropped_proper_name** @ `name`
  - DE: `Myanmar: Militarjunta setzt KI-Uberwachung gegen Demokratiea`
  - EN: `Myanmar: military junta deploys AI surveillance against pro-`
  - missing-name: Uber
- **dropped_proper_name** @ `description`
  - DE: `Nach dem Militarputsch vom Februar 2021 setzt die myanmarisc`
  - EN: `After the February 2021 military coup, Myanmar's Tatmadaw de`
  - missing-name: Uber
- **identical_de_en** @ `location.name`
  - DE: `Naypyidaw, Myanmar`
  - EN: `Naypyidaw, Myanmar`
- **dropped_proper_name** @ `timeline[0].title`
  - DE: `Militarputsch und Aufbau des Uberwachungsapparats`
  - EN: `Military coup and buildup of the surveillance apparatus`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[0].description`
  - DE: `Das Militar unter General Min Aung Hlaing putschte gegen die`
  - EN: `The military under General Min Aung Hlaing carried out a cou`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[1].title`
  - DE: `Systematische Ausweitung der KI-Uberwachung`
  - EN: `Systematic expansion of AI surveillance`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[1].description`
  - DE: `Justice for Myanmar dokumentiert den Einsatz von Uberwachung`
  - EN: `Justice for Myanmar documents the use of surveillance techno`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[2].description`
  - DE: `Berichte belegen den Einsatz von Managed Security Service Pr`
  - EN: `Reports document the use of Managed Security Service Provide`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `Der UN-Sonderberichterstatter fur Myanmar verurteilt den Ein`
  - EN: `The UN Special Rapporteur for Myanmar condemns the use of su`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `Justice for Myanmar: Surveillance Technology Reports`
  - EN: `Justice for Myanmar: Surveillance Technology Reports`

### myanmar-telecom-daten-militaer.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Myanmar: UN experts condemn military's 'digital dictatorship'`
  - EN: `Myanmar: UN experts condemn military's 'digital dictatorship'`
- **identical_de_en** @ `sources[1].title`
  - DE: `Myanmar activists to sue Norway's Telenor for handing data to military`
  - EN: `Myanmar activists to sue Norway's Telenor for handing data to military`
- **identical_de_en** @ `sources[2].title`
  - DE: `How Myanmar's Junta Uses Telecom Companies to Target Journalists`
  - EN: `How Myanmar's Junta Uses Telecom Companies to Target Journalists`
- **identical_de_en** @ `sources[3].title`
  - DE: `Months After Coup, Myanmar Accelerates Toward Surveillance State`
  - EN: `Months After Coup, Myanmar Accelerates Toward Surveillance State`

### nepal-social-media-ueberwachung.json

- **identical_de_en** @ `location.name`
  - DE: `Kathmandu, Nepal`
  - EN: `Kathmandu, Nepal`
- **identical_de_en** @ `actors[1].name`
  - DE: `Nepal Police Cyber Bureau`
  - EN: `Nepal Police Cyber Bureau`
- **identical_de_en** @ `sources[0].title`
  - DE: `Press Freedom Reports Nepal`
  - EN: `Press Freedom Reports Nepal`
- **identical_de_en** @ `sources[1].title`
  - DE: `Nepal Press Freedom Index`
  - EN: `Nepal Press Freedom Index`

### neuseeland-christchurch-algorithmus.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Facebook / Meta Platforms`
  - EN: `Facebook / Meta Platforms`
- **identical_de_en** @ `actors[1].name`
  - DE: `YouTube / Google`
  - EN: `YouTube / Google`
- **identical_de_en** @ `sources[0].title`
  - DE: `Christchurch Call to Action`
  - EN: `Christchurch Call to Action`
- **identical_de_en** @ `sources[1].title`
  - DE: `Update on New Zealand`
  - EN: `Update on New Zealand`
- **identical_de_en** @ `sources[2].title`
  - DE: `Christchurch shootings: How the attack unfolded`
  - EN: `Christchurch shootings: How the attack unfolded`

### neuseeland-ki-wohlfahrt-algorithmus.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Racist uplift practice cause for alarm`
  - EN: `Racist uplift practice cause for alarm`
- **identical_de_en** @ `sources[1].title`
  - DE: `Oranga Tamariki — Ministry for Children`
  - EN: `Oranga Tamariki — Ministry for Children`
- **identical_de_en** @ `sources[2].title`
  - DE: `The state removal of Māori children from their families is a wound that won't he`
  - EN: `The state removal of Māori children from their families is a wound that won't he`
- **identical_de_en** @ `sources[3].title`
  - DE: `Māori in New Zealand Are Reimagining Child Protection`
  - EN: `Māori in New Zealand Are Reimagining Child Protection`

### niederlande-ki-kindesgeld-skandal.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Dutch childcare benefits scandal`
  - EN: `Dutch childcare benefits scandal`
- **identical_de_en** @ `sources[1].title`
  - DE: `The Algorithm Addiction — Dutch fraud-detection algorithms`
  - EN: `The Algorithm Addiction — Dutch fraud-detection algorithms`
- **identical_de_en** @ `sources[2].title`
  - DE: `The implosion of the Dutch surveillance welfare state`
  - EN: `The implosion of the Dutch surveillance welfare state`
- **identical_de_en** @ `sources[3].title`
  - DE: `Xenophobic Machines: Discrimination Through Unregulated Use of Algorithms in the`
  - EN: `Xenophobic Machines: Discrimination Through Unregulated Use of Algorithms in the`

### niederlande-syri-toeslagenaffaire.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Dutch government resigns over child welfare fraud scandal`
  - EN: `Dutch government resigns over child welfare fraud scandal`

### nigeria-ki-wahlmanipulation-deepfakes.json

- **identical_de_en** @ `actors[1].name`
  - DE: `INEC (Independent National Electoral Commission)`
  - EN: `INEC (Independent National Electoral Commission)`
- **identical_de_en** @ `sources[0].title`
  - DE: `FACT CHECK: Audio of Atiku, Okowa, Tambuwal planning with INEC to rig elections `
  - EN: `FACT CHECK: Audio of Atiku, Okowa, Tambuwal planning with INEC to rig elections `
- **identical_de_en** @ `sources[1].title`
  - DE: `Fact-Check: How Deepfake Audio was used to Frame Atiku, Okowa, Others in 2023 El`
  - EN: `Fact-Check: How Deepfake Audio was used to Frame Atiku, Okowa, Others in 2023 El`
- **identical_de_en** @ `sources[2].title`
  - DE: `Q&A: Hannah Ajakaiye on manipulated media in the 2023 Nigerian presidential elec`
  - EN: `Q&A: Hannah Ajakaiye on manipulated media in the 2023 Nigerian presidential elec`
- **identical_de_en** @ `sources[3].title`
  - DE: `INSIGHT: How deepfakes are fuelling disinformation in Nigeria's political scene`
  - EN: `INSIGHT: How deepfakes are fuelling disinformation in Nigeria's political scene`

### nigeria-social-media-bill-ki.json

- **identical_de_en** @ `actors[1].name`
  - DE: `National Information Technology Development Agency (NITDA)`
  - EN: `National Information Technology Development Agency (NITDA)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Nigeria's Twitter ban is a threat to freedom of expression`
  - EN: `Nigeria's Twitter ban is a threat to freedom of expression`

### nordkorea-ki-it-workers-us-tech-infiltration.json

- **identical_de_en** @ `actors[2].name`
  - DE: `U.S. Department of Justice (DOJ) / FBI`
  - EN: `U.S. Department of Justice (DOJ) / FBI`
- **identical_de_en** @ `sources[0].title`
  - DE: `Justice Department Announces Coordinated, Nationwide Actions to Combat North Kor`
  - EN: `Justice Department Announces Coordinated, Nationwide Actions to Combat North Kor`
- **identical_de_en** @ `sources[1].title`
  - DE: `Jasper Sleet: North Korean remote IT workers' evolving tactics to infiltrate org`
  - EN: `Jasper Sleet: North Korean remote IT workers' evolving tactics to infiltrate org`
- **identical_de_en** @ `sources[2].title`
  - DE: `Five people plead guilty to helping North Koreans infiltrate US companies as 're`
  - EN: `Five people plead guilty to helping North Koreans infiltrate US companies as 're`
- **identical_de_en** @ `sources[3].title`
  - DE: `From Deepfakes to Sanctions Violations: The Rise of North Korean Remote IT Worke`
  - EN: `From Deepfakes to Sanctions Violations: The Rise of North Korean Remote IT Worke`
- **identical_de_en** @ `sources[4].title`
  - DE: `Two North Korean Nationals and Three Facilitators Indicted for Multi-Year Fraudu`
  - EN: `Two North Korean Nationals and Three Facilitators Indicted for Multi-Year Fraudu`

### nordkorea-ki-ueberwachung-buerger.json

- **identical_de_en** @ `sources[0].title`
  - DE: `North Korea: Human Rights Overview`
  - EN: `North Korea: Human Rights Overview`

### nso-pegasus-spyware.json

- **identical_de_en** @ `location.name`
  - DE: `Herzliya, Israel`
  - EN: `Herzliya, Israel`
- **identical_de_en** @ `actors[2].name`
  - DE: `Citizen Lab / University of Toronto`
  - EN: `Citizen Lab / University of Toronto`
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `Das US-Handelsministerium setzt NSO Group auf die Entity Lis`
  - EN: `The US Department of Commerce adds NSO Group to the Entity L`
  - missing-name: EU
- **identical_de_en** @ `sources[0].title`
  - DE: `The Million Dollar Dissident: NSO Group's iPhone Zero-Days`
  - EN: `The Million Dollar Dissident: NSO Group's iPhone Zero-Days`
- **dropped_proper_name** @ `sources[2].title`
  - DE: `EU-Parlament: Untersuchungsbericht des PEGA-Ausschusses`
  - EN: `European Parliament: inquiry report of the PEGA committee`
  - missing-name: EU

### oesterreich-ki-ams-algorithmus.json

- **german_leakage_umlaut** @ `actors[0].name`
  - DE: `AMS — Arbeitsmarktservice Österreich`
  - EN: `AMS — Austrian Public Employment Service (Arbeitsmarktservice Österreich)`

### pakistan-imran-khan-ki-stimm-klon-wahl-2024.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Pakistan Tehreek-e-Insaf (PTI)`
  - EN: `Pakistan Tehreek-e-Insaf (PTI)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Pakistan ex-PM Khan uses AI voice clone to campaign from jail`
  - EN: `Pakistan ex-PM Khan uses AI voice clone to campaign from jail`
- **identical_de_en** @ `sources[1].title`
  - DE: `Ex-PM Imran uses AI voice clone to campaign from jail in virtual PTI rally`
  - EN: `Ex-PM Imran uses AI voice clone to campaign from jail in virtual PTI rally`
- **identical_de_en** @ `sources[2].title`
  - DE: `The campaign volunteer who used AI to help swing Pakistan's elections: Interview`
  - EN: `The campaign volunteer who used AI to help swing Pakistan's elections: Interview`

### pakistan-ki-blasphemie-ueberwachung.json

- **identical_de_en** @ `location.name`
  - DE: `Islamabad, Pakistan`
  - EN: `Islamabad, Pakistan`
- **identical_de_en** @ `actors[0].name`
  - DE: `FIA (Federal Investigation Agency) / Cybercrime Wing`
  - EN: `FIA (Federal Investigation Agency) / Cybercrime Wing`
- **identical_de_en** @ `actors[1].name`
  - DE: `PTA (Pakistan Telecommunication Authority)`
  - EN: `PTA (Pakistan Telecommunication Authority)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Pakistan's Blasphemy Law Targets Youth on Social Media`
  - EN: `Pakistan's Blasphemy Law Targets Youth on Social Media`
- **identical_de_en** @ `sources[1].title`
  - DE: `Pakistan Submission to the UN Human Rights Committee`
  - EN: `Pakistan Submission to the UN Human Rights Committee`
- **identical_de_en** @ `sources[2].title`
  - DE: `Pakistan blasphemy accusations: Islamist gang entraps, extorts`
  - EN: `Pakistan blasphemy accusations: Islamist gang entraps, extorts`
- **identical_de_en** @ `sources[3].title`
  - DE: `TikToker held on blasphemy charges in Muzaffargarh`
  - EN: `TikToker held on blasphemy charges in Muzaffargarh`
- **identical_de_en** @ `sources[4].title`
  - DE: `World Report 2025: Pakistan`
  - EN: `World Report 2025: Pakistan`

### pakistan-safe-city-lahore.json

- **identical_de_en** @ `location.name`
  - DE: `Lahore, Pakistan`
  - EN: `Lahore, Pakistan`
- **identical_de_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
  - EN: `Huawei Technologies`
- **identical_de_en** @ `sources[0].title`
  - DE: `Safe City Project launched in Islamabad`
  - EN: `Safe City Project launched in Islamabad`
- **identical_de_en** @ `sources[1].title`
  - DE: `PSCA surveillance network and civil liberties concerns`
  - EN: `PSCA surveillance network and civil liberties concerns`

### palantir-ice-ueberwachung.json

- **identical_de_en** @ `location.name`
  - DE: `Washington, D.C., USA`
  - EN: `Washington, D.C., USA`
- **identical_de_en** @ `actors[0].name`
  - DE: `Palantir Technologies`
  - EN: `Palantir Technologies`
- **identical_de_en** @ `actors[1].name`
  - DE: `ICE (U.S. Immigration and Customs Enforcement)`
  - EN: `ICE (U.S. Immigration and Customs Enforcement)`
- **identical_de_en** @ `actors[2].name`
  - DE: `DHS (Department of Homeland Security)`
  - EN: `DHS (Department of Homeland Security)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Palantir Provides the Engine for Donald Trump's Deportation Machine`
  - EN: `Palantir Provides the Engine for Donald Trump's Deportation Machine`
- **identical_de_en** @ `sources[1].title`
  - DE: `American Dragnet: Data-Driven Deportation in the 21st Century`
  - EN: `American Dragnet: Data-Driven Deportation in the 21st Century`

### peru-ki-protest-ueberwachung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Peru: Killings and injuries in protests could implicate president and chain of c`
  - EN: `Peru: Killings and injuries in protests could implicate president and chain of c`
- **identical_de_en** @ `sources[1].title`
  - DE: `Peruvian protests (2022–2023)`
  - EN: `Peruvian protests (2022–2023)`
- **identical_de_en** @ `sources[2].title`
  - DE: `Peru: Dina Boluarte ordered the murder of protesters and must stand trial for cr`
  - EN: `Peru: Dina Boluarte ordered the murder of protesters and must stand trial for cr`
- **identical_de_en** @ `sources[3].title`
  - DE: `Peru: Justice for Indigenous Protestors Killed by Police`
  - EN: `Peru: Justice for Indigenous Protestors Killed by Police`

### philippinen-duterte-social-media-ki.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Facebook / Meta Platforms`
  - EN: `Facebook / Meta Platforms`
- **identical_de_en** @ `actors[2].name`
  - DE: `Rappler / Maria Ressa`
  - EN: `Rappler / Maria Ressa`
- **identical_de_en** @ `sources[0].title`
  - DE: `Propaganda War: Weaponizing the Internet`
  - EN: `Propaganda War: Weaponizing the Internet`
- **identical_de_en** @ `sources[1].title`
  - DE: `Philippines: War on Drugs`
  - EN: `Philippines: War on Drugs`
- **identical_de_en** @ `sources[2].title`
  - DE: `Maria Ressa – Facts – Nobel Peace Prize 2021`
  - EN: `Maria Ressa – Facts – Nobel Peace Prize 2021`
- **identical_de_en** @ `sources[3].title`
  - DE: `Removing Coordinated Inauthentic Behavior from the Philippines`
  - EN: `Removing Coordinated Inauthentic Behavior from the Philippines`

### philippinen-ki-red-tagging.json

- **identical_de_en** @ `actors[1].name`
  - DE: `NTF-ELCAC (National Task Force to End Local Communist Armed Conflict)`
  - EN: `NTF-ELCAC (National Task Force to End Local Communist Armed Conflict)`
- **identical_de_en** @ `sources[0].title`
  - DE: `World Report 2024: Philippines`
  - EN: `World Report 2024: Philippines`

### polen-pegasus-opposition.json

- **identical_de_en** @ `actors[2].name`
  - DE: `Citizen Lab / University of Toronto`
  - EN: `Citizen Lab / University of Toronto`
- **dropped_proper_name** @ `timeline[2].description`
  - DE: `Der polnische Senat richtet einen Untersuchungsausschuss ein`
  - EN: `The Polish Senate establishes an inquiry committee. The Euro`
  - missing-name: EU
- **dropped_proper_name** @ `sources[0].title`
  - DE: `EU-Parlament: PEGA-Ausschuss Abschlussbericht`
  - EN: `European Parliament: PEGA committee final report`
  - missing-name: EU

### predpol-predictive-policing.json

- **identical_de_en** @ `name`
  - DE: `PredPol / Geolitica Predictive Policing`
  - EN: `PredPol / Geolitica Predictive Policing`
- **identical_de_en** @ `location.name`
  - DE: `Los Angeles, USA`
  - EN: `Los Angeles, USA`
- **identical_de_en** @ `actors[0].name`
  - DE: `PredPol/Geolitica`
  - EN: `PredPol/Geolitica`
- **identical_de_en** @ `sources[0].title`
  - DE: `Crime Prediction Software Promised to Be Free of Biases. New Data Shows It Perpe`
  - EN: `Crime Prediction Software Promised to Be Free of Biases. New Data Shows It Perpe`

### ruanda-ki-smart-city.json

- **dropped_proper_name** @ `name`
  - DE: `Ruanda: Smart-City-Uberwachungsinfrastruktur und autoritare `
  - EN: `Rwanda: smart-city surveillance infrastructure and authorita`
  - missing-name: Uber
- **dropped_proper_name** @ `description`
  - DE: `Ruanda baut seit 2015 mit Unterstutzung chinesischer Technol`
  - EN: `Since 2015, Rwanda has been building a comprehensive smart-c`
  - missing-name: Uber
- **dropped_proper_name** @ `affectedRights[4]`
  - DE: `Schutz vor willkurlicher Uberwachung`
  - EN: `protection from arbitrary surveillance`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[0].description`
  - DE: `Ruanda startet ambitionierte Smart-City-Programme als Teil s`
  - EN: `Rwanda launches ambitious smart-city programs as part of its`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[2].title`
  - DE: `COVID-Uberwachung und Ausweitung der Kontrollinfrastruktur`
  - EN: `COVID surveillance and expansion of control infrastructure`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[2].description`
  - DE: `Ruanda nutzt die COVID-19-Pandemie, um Uberwachungsmasnahmen`
  - EN: `Rwanda uses the COVID-19 pandemic to significantly expand su`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[3].title`
  - DE: `Grenzuberschreitende Uberwachung ruandischer Dissidenten`
  - EN: `Cross-border surveillance of Rwandan dissidents`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `The Guardian und Citizen Lab berichten uber Falle, in denen `
  - EN: `The Guardian and Citizen Lab report cases in which Rwandan s`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `The chilling tale of mass surveillance and spying in Rwanda`
  - EN: `The chilling tale of mass surveillance and spying in Rwanda`
- **identical_de_en** @ `sources[1].title`
  - DE: `Rwanda: Freedom on the Net 2024 Country Report`
  - EN: `Rwanda: Freedom on the Net 2024 Country Report`
- **identical_de_en** @ `sources[2].title`
  - DE: `China's Smart Cities in Africa: Should the United States Be Concerned?`
  - EN: `China's Smart Cities in Africa: Should the United States Be Concerned?`
- **identical_de_en** @ `sources[3].title`
  - DE: `Africa in the Crosshairs of New Disinformation and Surveillance Schemes That Und`
  - EN: `Africa in the Crosshairs of New Disinformation and Surveillance Schemes That Und`
- **identical_de_en** @ `sources[4].title`
  - DE: `SMART Rwanda Master Plan`
  - EN: `SMART Rwanda Master Plan`

### rumaenien-wahlannullierung-tiktok.json

- **identical_de_en** @ `actors[0].name`
  - DE: `TikTok / ByteDance`
  - EN: `TikTok / ByteDance`
- **identical_de_en** @ `sources[0].title`
  - DE: `Romania annulled its presidential election results amid alleged Russian interfer`
  - EN: `Romania annulled its presidential election results amid alleged Russian interfer`
- **identical_de_en** @ `sources[1].title`
  - DE: `Romania's Election Nullified: Russian Interference and the Struggle for Democrac`
  - EN: `Romania's Election Nullified: Russian Interference and the Struggle for Democrac`
- **identical_de_en** @ `sources[2].title`
  - DE: `What happened on TikTok around the annulled Romanian presidential election? An i`
  - EN: `What happened on TikTok around the annulled Romanian presidential election? An i`
- **identical_de_en** @ `sources[3].title`
  - DE: `Romania Cancels Presidential Election Results After Alleged Russian Meddling on `
  - EN: `Romania Cancels Presidential Election Results After Alleged Russian Meddling on `
- **identical_de_en** @ `sources[4].title`
  - DE: `Hybrid warfare through disinformation: the case of Romania's presidential electi`
  - EN: `Hybrid warfare through disinformation: the case of Romania's presidential electi`

### russland-doppelganger-ki-desinformations-netzwerk.json

- **german_leakage_german-word** @ `description`
  - DE: `Seit 2022 betreibt das russische IT-Unternehmen Social Design Agency (SDA) im Au`
  - EN: `Since 2022 the Russian IT firm Social Design Agency (SDA) has, on behalf of the `
- **identical_de_en** @ `actors[1].name`
  - DE: `Structura National Technology / ANO Dialog`
  - EN: `Structura National Technology / ANO Dialog`
- **german_leakage_german-word** @ `timeline[0].description`
  - DE: `Wenige Wochen nach Beginn der russischen Großinvasion in der Ukraine startet die`
  - EN: `A few weeks after Russia's full-scale invasion of Ukraine begins, the Social Des`
- **identical_de_en** @ `sources[0].title`
  - DE: `Doppelganger (disinformation campaign)`
  - EN: `Doppelganger (disinformation campaign)`
- **identical_de_en** @ `sources[1].title`
  - DE: `Justice Department Disrupts Covert Russian Government-Sponsored Foreign Malign I`
  - EN: `Justice Department Disrupts Covert Russian Government-Sponsored Foreign Malign I`
- **identical_de_en** @ `sources[2].title`
  - DE: `Doppelganger: How Russia mimicked real news sites and created fake ones to targe`
  - EN: `Doppelganger: How Russia mimicked real news sites and created fake ones to targe`
- **identical_de_en** @ `sources[4].title`
  - DE: `DOJ vs. Doppelganger: Four Takeaways From the US Government's Action Against Rus`
  - EN: `DOJ vs. Doppelganger: Four Takeaways From the US Government's Action Against Rus`

### russland-gesichtserkennung-moskau.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Russia: Police target peaceful protesters identified using facial recognition te`
  - EN: `Russia: Police target peaceful protesters identified using facial recognition te`
- **identical_de_en** @ `sources[1].title`
  - DE: `How the Russian state uses cameras against protesters`
  - EN: `How the Russian state uses cameras against protesters`
- **identical_de_en** @ `sources[2].title`
  - DE: `Kremlin Leaks: How Putin's Regime is Building AI Surveillance Operations`
  - EN: `Kremlin Leaks: How Putin's Regime is Building AI Surveillance Operations`
- **identical_de_en** @ `sources[3].title`
  - DE: `Navalny protesters say police are using facial recognition to track them down`
  - EN: `Navalny protesters say police are using facial recognition to track them down`

### russland-ki-deepfake-ukraine-krieg.json

- **identical_de_en** @ `sources[1].title`
  - DE: `EU DisinfoLab — AI-generated Disinformation Reports`
  - EN: `EU DisinfoLab — AI-generated Disinformation Reports`

### russland-ki-zensur-roskomnadzor.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Freedom on the Net 2024: Russia`
  - EN: `Freedom on the Net 2024: Russia`
- **identical_de_en** @ `sources[1].title`
  - DE: `Russia slows down Twitter in dispute over banned content`
  - EN: `Russia slows down Twitter in dispute over banned content`

### saudi-arabien-absher-frauen.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Saudi Arabia: Mobile App Keeps Women at Home`
  - EN: `Saudi Arabia: Mobile App Keeps Women at Home`
- **identical_de_en** @ `sources[1].title`
  - DE: `Apple and Google urged to remove Saudi app that tracks women`
  - EN: `Apple and Google urged to remove Saudi app that tracks women`
- **identical_de_en** @ `sources[2].title`
  - DE: `Apple, Google In Crosshairs For Carrying App That Lets Saudi Men Track Wives`
  - EN: `Apple, Google In Crosshairs For Carrying App That Lets Saudi Men Track Wives`
- **identical_de_en** @ `sources[3].title`
  - DE: `Saudi Sisters Urge Google and Apple to Pull an 'Inhuman' App`
  - EN: `Saudi Sisters Urge Google and Apple to Pull an 'Inhuman' App`

### saudi-arabien-ki-pilgerstrom.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
  - EN: `Huawei Technologies`
- **identical_de_en** @ `sources[0].title`
  - DE: `The Global Expansion of AI Surveillance`
  - EN: `The Global Expansion of AI Surveillance`

### saudi-arabien-neom-line-huwaitat-vertreibung-ki-ueberwachung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Saudi Arabia: Al-Huwaitat tribe urge UN to intervene to stop forced displacement`
  - EN: `Saudi Arabia: Al-Huwaitat tribe urge UN to intervene to stop forced displacement`
- **identical_de_en** @ `sources[1].title`
  - DE: `Neom: the disturbing facts exposed`
  - EN: `Neom: the disturbing facts exposed`
- **identical_de_en** @ `sources[3].title`
  - DE: `The Washington Centre Condemns Human Rights Violations in Saudi Arabia's NEOM Pr`
  - EN: `The Washington Centre Condemns Human Rights Violations in Saudi Arabia's NEOM Pr`
- **identical_de_en** @ `sources[4].title`
  - DE: `The Cost Of Opposing NEOM: Arbitrary Detention And Unjust Sentences For Saudi Ar`
  - EN: `The Cost Of Opposing NEOM: Arbitrary Detention And Unjust Sentences For Saudi Ar`

### schweden-ki-polizei-reva.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Swedish police collect illegal database of Roma`
  - EN: `Swedish police collect illegal database of Roma`
- **identical_de_en** @ `sources[1].title`
  - DE: `How We Work to Combat Ethnic/Racial Profiling`
  - EN: `How We Work to Combat Ethnic/Racial Profiling`
- **identical_de_en** @ `sources[2].title`
  - DE: `Stockholm police end 'racial profiling' push`
  - EN: `Stockholm police end 'racial profiling' push`
- **identical_de_en** @ `sources[3].title`
  - DE: `Swedish Police, Racism and Resistance`
  - EN: `Swedish Police, Racism and Resistance`

### schweden-ki-schule-gesichtserkennung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Guidelines 3/2019 on processing of personal data through video devices`
  - EN: `Guidelines 3/2019 on processing of personal data through video devices`

### schweden-klarna-ki-700-jobs-ersetzt-reversal.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Klarna stopped all hiring a year ago to replace workers with AI`
  - EN: `Klarna stopped all hiring a year ago to replace workers with AI`
- **identical_de_en** @ `sources[1].title`
  - DE: `Klarna CEO admits AI job cuts went too far`
  - EN: `Klarna CEO admits AI job cuts went too far`
- **identical_de_en** @ `sources[2].title`
  - DE: `Klarna Redeploys Staff to Customer Service, Pulls From Marketing, Engineering, a`
  - EN: `Klarna Redeploys Staff to Customer Service, Pulls From Marketing, Engineering, a`
- **identical_de_en** @ `sources[3].title`
  - DE: `Klarna tried to replace its workforce with AI`
  - EN: `Klarna tried to replace its workforce with AI`
- **identical_de_en** @ `sources[4].title`
  - DE: `Klarna Reverses AI Customer Service Replacement`
  - EN: `Klarna Reverses AI Customer Service Replacement`

### schweden-spotify-pfc-fake-artists-ki-musik-royalties.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Spotify Technology S.A. (Stockholm)`
  - EN: `Spotify Technology S.A. (Stockholm)`
- **german_leakage_umlaut** @ `timeline[3].description`
  - DE: `Im Februar 2024 erhebt die French Music Industry Association SNEP öffentlich Vor`
  - EN: `In February 2024 the French music industry association SNEP raises public allega`
- **identical_de_en** @ `sources[0].title`
  - DE: `Controversy over fake artists on Spotify`
  - EN: `Controversy over fake artists on Spotify`

### serbien-biovision-massenuberwachung.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
  - EN: `Huawei Technologies`
- **identical_de_en** @ `actors[2].name`
  - DE: `SHARE Foundation`
  - EN: `SHARE Foundation`
- **dropped_proper_name** @ `timeline[3].title`
  - DE: `EU-Parlament warnt vor Überwachungsexport`
  - EN: `European Parliament warns about surveillance export`
  - missing-name: EU
- **identical_de_en** @ `sources[0].title`
  - DE: `The Global Expansion of AI Surveillance`
  - EN: `The Global Expansion of AI Surveillance`

### simbabwe-ki-chinesische-ueberwachung.json

- **identical_de_en** @ `actors[1].name`
  - DE: `CloudWalk Technology`
  - EN: `CloudWalk Technology`
- **identical_de_en** @ `sources[0].title`
  - DE: `Global Inventory of AI Surveillance`
  - EN: `Global Inventory of AI Surveillance`

### singapur-deepfake-wahlgesetz-pofma-2024-2025.json

- **identical_de_en** @ `actors[3].name`
  - DE: `Elections Department Singapore (ELD)`
  - EN: `Elections Department Singapore (ELD)`
- **identical_de_en** @ `sources[0].title`
  - DE: `The deepfake election nightmare hasn't happened. Singapore still wants to ban th`
  - EN: `The deepfake election nightmare hasn't happened. Singapore still wants to ban th`
- **identical_de_en** @ `sources[1].title`
  - DE: `S'pore government moving to ban deepfakes of candidates made to affect electoral`
  - EN: `S'pore government moving to ban deepfakes of candidates made to affect electoral`
- **identical_de_en** @ `sources[2].title`
  - DE: `Here's how Singapore plans to combat deepfakes during elections`
  - EN: `Here's how Singapore plans to combat deepfakes during elections`

### singapur-ki-massenueberwachung.json

- **dropped_proper_name** @ `description`
  - DE: `Singapur betreibt unter dem Programm 'Smart Nation' eines de`
  - EN: `Under the 'Smart Nation' program, Singapore operates one of `
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[1].title`
  - DE: `Lamppost-as-a-Platform: Strasseninfrastruktur als Uberwachun`
  - EN: `Lamppost-as-a-Platform: street infrastructure as a surveilla`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `Singapur erweitert sein Netz auf uber 90.000 Uberwachungskam`
  - EN: `Singapore expands its network to over 90,000 surveillance ca`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `COVID app triggers overdue debate on privacy in Singapore`
  - EN: `COVID app triggers overdue debate on privacy in Singapore`
- **identical_de_en** @ `sources[1].title`
  - DE: `Someone to Watch Over Me: Trusting Surveillance in Singapore's 'Smart Nation'`
  - EN: `Someone to Watch Over Me: Trusting Surveillance in Singapore's 'Smart Nation'`
- **identical_de_en** @ `sources[2].title`
  - DE: `Singapore's Smart Nation: Privacy in the World's Most Connected City`
  - EN: `Singapore's Smart Nation: Privacy in the World's Most Connected City`
- **identical_de_en** @ `sources[3].title`
  - DE: `Tracing surveillance and auto-regulation in Singapore: 'smart' responses to COVI`
  - EN: `Tracing surveillance and auto-regulation in Singapore: 'smart' responses to COVI`

### slowakei-deepfake-wahl-simecka.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Beyond the deepfake hype: AI, democracy, and 'the Slovak case'`
  - EN: `Beyond the deepfake hype: AI, democracy, and 'the Slovak case'`
- **identical_de_en** @ `sources[1].title`
  - DE: `Slovakia: Deepfake audio of Denník N journalist offers worrying example of AI ab`
  - EN: `Slovakia: Deepfake audio of Denník N journalist offers worrying example of AI ab`
- **identical_de_en** @ `sources[2].title`
  - DE: `Slovak election targeted by pro-Kremlin deepfake hoax`
  - EN: `Slovak election targeted by pro-Kremlin deepfake hoax`
- **identical_de_en** @ `sources[3].title`
  - DE: `Incident 573: Deepfake Recordings Allegedly Influence Slovakian Election`
  - EN: `Incident 573: Deepfake Recordings Allegedly Influence Slovakian Election`
- **identical_de_en** @ `sources[4].title`
  - DE: `A fake recording of a candidate saying he'd rigged the election went viral. Expe`
  - EN: `A fake recording of a candidate saying he'd rigged the election went viral. Expe`

### somalia-drohnen-ki-zivile-opfer.json

- **identical_de_en** @ `location.name`
  - DE: `Mogadishu, Somalia`
  - EN: `Mogadishu, Somalia`
- **identical_de_en** @ `actors[0].name`
  - DE: `US AFRICOM (Africa Command)`
  - EN: `US AFRICOM (Africa Command)`
- **identical_de_en** @ `sources[0].title`
  - DE: `The Hidden US War in Somalia`
  - EN: `The Hidden US War in Somalia`
- **identical_de_en** @ `sources[1].title`
  - DE: `Covert Drone War: Somalia`
  - EN: `Covert Drone War: Somalia`

### spanien-ki-arbeitsmarkt-algorithmus.json

- **dropped_proper_name** @ `timeline[2].title`
  - DE: `Offizielles Audit bestätigt Bias, EU-Datenschutzbehörde ermi`
  - EN: `Official audit confirms bias, Spanish data protection author`
  - missing-name: EU
- **identical_de_en** @ `sources[0].title`
  - DE: `Algoritmos discriminatorios en el acceso al empleo`
  - EN: `Algoritmos discriminatorios en el acceso al empleo`
- **identical_de_en** @ `sources[1].title`
  - DE: `Derecho a la igualdad y a la no discriminación en el entorno digital`
  - EN: `Derecho a la igualdad y a la no discriminación en el entorno digital`
- **identical_de_en** @ `sources[2].title`
  - DE: `IA que contrata, pero discrimina: el riesgo de automatizar sesgos en el empleo`
  - EN: `IA que contrata, pero discrimina: el riesgo de automatizar sesgos en el empleo`
- **identical_de_en** @ `sources[3].title`
  - DE: `La situación de las mujeres en el mercado de trabajo 2022`
  - EN: `La situación de las mujeres en el mercado de trabajo 2022`

### spanien-ki-grenzueberwachung-ceuta.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Spain/Morocco: No Justice for Deaths at Melilla Border`
  - EN: `Spain/Morocco: No Justice for Deaths at Melilla Border`
- **identical_de_en** @ `sources[1].title`
  - DE: `Digital Technologies for Migration Control at EU Borders`
  - EN: `Digital Technologies for Migration Control at EU Borders`
- **identical_de_en** @ `sources[2].title`
  - DE: `Melilla and Ceuta: What's behind the deaths at Morocco's land border with the EU`
  - EN: `Melilla and Ceuta: What's behind the deaths at Morocco's land border with the EU`
- **identical_de_en** @ `sources[3].title`
  - DE: `Europe's treacherous borders: Seeking justice for Ceuta victims`
  - EN: `Europe's treacherous borders: Seeking justice for Ceuta victims`

### spanien-ki-sozialhilfe-diskriminierung.json

- **german_leakage_german-word** @ `timeline[2].description`
  - DE: `COVID-19 und steigende Energiepreise verschärfen die Energiearmut in Spanien. Sc`
  - EN: `COVID-19 and rising energy prices aggravate energy poverty in Spain. An estimate`
- **identical_de_en** @ `sources[0].title`
  - DE: `Automating Society Report 2020: Spain`
  - EN: `Automating Society Report 2020: Spain`

### spanien-viogen-algorithmus-femizide-fehlklassifizierung.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Policía Nacional / Guardia Civil`
  - EN: `Policía Nacional / Guardia Civil`
- **identical_de_en** @ `sources[0].title`
  - DE: `Spain's Gender Violence Detection Algorithm Reveals Failures in Saving Domestic `
  - EN: `Spain's Gender Violence Detection Algorithm Reveals Failures in Saving Domestic `
- **identical_de_en** @ `sources[1].title`
  - DE: `In Spain, the VioGén algorithm attempts to forecast gender violence`
  - EN: `In Spain, the VioGén algorithm attempts to forecast gender violence`
- **identical_de_en** @ `sources[2].title`
  - DE: `Incident 186: Algorithm Assessing Risk Faced by Victims of Gender Violence Miscl`
  - EN: `Incident 186: Algorithm Assessing Risk Faced by Victims of Gender Violence Miscl`
- **identical_de_en** @ `sources[3].title`
  - DE: `Eticas Foundation external audits VioGén`
  - EN: `Eticas Foundation external audits VioGén`
- **identical_de_en** @ `sources[4].title`
  - DE: `Spain security algorithm fails Malaganian woman`
  - EN: `Spain security algorithm fails Malaganian woman`

### sri-lanka-ki-social-media-zensur.json

- **identical_de_en** @ `location.name`
  - DE: `Colombo, Sri Lanka`
  - EN: `Colombo, Sri Lanka`
- **identical_de_en** @ `sources[0].title`
  - DE: `Sri Lanka blocks most social media after Easter Sunday bombings`
  - EN: `Sri Lanka blocks most social media after Easter Sunday bombings`
- **identical_de_en** @ `sources[1].title`
  - DE: `Sri Lanka blocks social media after Easter Sunday bombings`
  - EN: `Sri Lanka blocks social media after Easter Sunday bombings`
- **identical_de_en** @ `sources[2].title`
  - DE: `Sri Lanka has blocked access to social media to stop the spread of misinformatio`
  - EN: `Sri Lanka has blocked access to social media to stop the spread of misinformatio`

### sudan-internet-shutdown-krieg.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Rapid Support Forces (RSF)`
  - EN: `Rapid Support Forces (RSF)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Sudan: Internet shutdown threatens delivery of humanitarian and emergency servic`
  - EN: `Sudan: Internet shutdown threatens delivery of humanitarian and emergency servic`
- **identical_de_en** @ `sources[1].title`
  - DE: `#KeepItOn in times of war: Sudan's communications shutdown must be reversed urge`
  - EN: `#KeepItOn in times of war: Sudan's communications shutdown must be reversed urge`
- **identical_de_en** @ `sources[2].title`
  - DE: `Internet shutdowns in Sudan`
  - EN: `Internet shutdowns in Sudan`
- **identical_de_en** @ `sources[3].title`
  - DE: `Sudan Conflict Affects Digital Communications and Critical Services Delivery`
  - EN: `Sudan Conflict Affects Digital Communications and Critical Services Delivery`
- **identical_de_en** @ `sources[4].title`
  - DE: `Internet in Conflict: Sudan's Battle for Connection`
  - EN: `Internet in Conflict: Sudan's Battle for Connection`

### suedafrika-ki-ungleichheit-scoring.json

- **identical_de_en** @ `actors[1].name`
  - DE: `SAPS (South African Police Service)`
  - EN: `SAPS (South African Police Service)`
- **identical_de_en** @ `actors[2].name`
  - DE: `Research ICT Africa`
  - EN: `Research ICT Africa`
- **identical_de_en** @ `sources[0].title`
  - DE: `Apartheid by Algorithm`
  - EN: `Apartheid by Algorithm`
- **identical_de_en** @ `sources[1].title`
  - DE: `Credit Scoring Apartheid in Post-Apartheid South Africa`
  - EN: `Credit Scoring Apartheid in Post-Apartheid South Africa`
- **identical_de_en** @ `sources[2].title`
  - DE: `Algorithmic Apartheid? African Lives Matter in Responsible AI Discourse`
  - EN: `Algorithmic Apartheid? African Lives Matter in Responsible AI Discourse`
- **identical_de_en** @ `sources[3].title`
  - DE: `Navigating algorithm bias in AI: ensuring fairness and trust in Africa`
  - EN: `Navigating algorithm bias in AI: ensuring fairness and trust in Africa`

### suedkorea-deepfake-sexualverbrechen.json

- **identical_de_en** @ `sources[0].title`
  - DE: `South Korea investigates Telegram over alleged sexual deepfakes`
  - EN: `South Korea investigates Telegram over alleged sexual deepfakes`
- **identical_de_en** @ `sources[1].title`
  - DE: `Some 60% of deepfake sex crime victims in South Korea are minors, police say`
  - EN: `Some 60% of deepfake sex crime victims in South Korea are minors, police say`
- **identical_de_en** @ `sources[2].title`
  - DE: `Deepfake crisis at schools: Lack of awareness fuels digital exploitation among m`
  - EN: `Deepfake crisis at schools: Lack of awareness fuels digital exploitation among m`
- **identical_de_en** @ `sources[3].title`
  - DE: `The digital misogyny pipeline: deepfake-based sexual violence in South Korean sc`
  - EN: `The digital misogyny pipeline: deepfake-based sexual violence in South Korean sc`

### suedkorea-ki-militaer-roboter-grenze.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Samsung Techwin / Hanwha`
  - EN: `Samsung Techwin / Hanwha`
- **identical_de_en** @ `sources[0].title`
  - DE: `ICRAC Statement on Autonomous Weapon Systems`
  - EN: `ICRAC Statement on Autonomous Weapon Systems`
- **identical_de_en** @ `sources[1].title`
  - DE: `Country Views on Killer Robots: South Korea`
  - EN: `Country Views on Killer Robots: South Korea`
- **identical_de_en** @ `sources[2].title`
  - DE: `Autonomous Weapons: Korea's SGR-A1 Sentry Robot`
  - EN: `Autonomous Weapons: Korea's SGR-A1 Sentry Robot`

### suedkorea-yoon-kriegsrecht-social-media-2024.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Martial Law Command / Defense Counterintelligence Command (DCC)`
  - EN: `Martial Law Command / Defense Counterintelligence Command (DCC)`
- **identical_de_en** @ `actors[4].name`
  - DE: `Democratic Party of Korea (DPK)`
  - EN: `Democratic Party of Korea (DPK)`
- **identical_de_en** @ `sources[0].title`
  - DE: `2024 South Korean martial law crisis`
  - EN: `2024 South Korean martial law crisis`
- **identical_de_en** @ `sources[1].title`
  - DE: `Social media erupts over six hours of martial law as citizens stay vigilant desp`
  - EN: `Social media erupts over six hours of martial law as citizens stay vigilant desp`
- **identical_de_en** @ `sources[2].title`
  - DE: `Yoon Declares Martial Law in South Korea`
  - EN: `Yoon Declares Martial Law in South Korea`
- **identical_de_en** @ `sources[3].title`
  - DE: `Mass Protests Force South Korean President to Revoke Shocking Martial Law Declar`
  - EN: `Mass Protests Force South Korean President to Revoke Shocking Martial Law Declar`
- **identical_de_en** @ `sources[4].title`
  - DE: `2024 Martial Law Crisis in South Korea and Democratic Resilience`
  - EN: `2024 Martial Law Crisis in South Korea and Democratic Resilience`

### syrien-ki-ueberwachung-assad.json

- **dropped_proper_name** @ `name`
  - DE: `Syrien: Assad-Regime setzt europaische Uberwachungstechnolog`
  - EN: `Syria: Assad regime uses European surveillance technology ag`
  - missing-name: Uber
- **dropped_proper_name** @ `description`
  - DE: `Ab 2011 nutzte das Assad-Regime Uberwachungstechnologie euro`
  - EN: `From 2011 onward, the Assad regime used surveillance technol`
  - missing-name: Uber
- **identical_de_en** @ `actors[2].name`
  - DE: `Blue Coat Systems (USA)`
  - EN: `Blue Coat Systems (USA)`
- **dropped_proper_name** @ `timeline[0].title`
  - DE: `Syrischer Burgerkrieg beginnt — Uberwachungssystem steht ber`
  - EN: `Syrian civil war begins — surveillance system is in place`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[2].description`
  - DE: `Bloomberg Businessweek berichtet, dass Qosmos-Technologie in`
  - EN: `Bloomberg Businessweek reports that Qosmos technology was us`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `In Frankreich wird gegen Amesys Strafanzeige wegen Beihilfe `
  - EN: `In France, criminal complaints are filed against Amesys for `
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `Behind Blue Coat: Investigations of Commercial Filtering in Syria`
  - EN: `Behind Blue Coat: Investigations of Commercial Filtering in Syria`

### taiwan-deepfake-politiker.json

- **identical_de_en** @ `sources[0].title`
  - DE: `IORG — Internet Observatory Research Group Taiwan`
  - EN: `IORG — Internet Observatory Research Group Taiwan`

### tansania-internet-kontrolle-wahlen.json

- **identical_de_en** @ `actors[1].name`
  - DE: `TCRA (Tanzania Communications Regulatory Authority)`
  - EN: `TCRA (Tanzania Communications Regulatory Authority)`
- **identical_de_en** @ `sources[0].title`
  - DE: `#KeepItOn: Fighting Internet Shutdowns`
  - EN: `#KeepItOn: Fighting Internet Shutdowns`

### thailand-lese-majeste-ki.json

- **dropped_proper_name** @ `name`
  - DE: `Thailand: KI-Uberwachung zur Durchsetzung der Majestatsbelei`
  - EN: `Thailand: AI surveillance to enforce lèse-majesté laws`
  - missing-name: Uber
- **dropped_proper_name** @ `description`
  - DE: `Thailand setzt KI-gestutztes Social-Media-Monitoring und dig`
  - EN: `Thailand uses AI-supported social-media monitoring and digit`
  - missing-name: Uber
- **identical_de_en** @ `location.name`
  - DE: `Bangkok, Thailand`
  - EN: `Bangkok, Thailand`
- **dropped_proper_name** @ `timeline[0].title`
  - DE: `Militarputsch und digitale Uberwachungsinfrastruktur`
  - EN: `Military coup and digital surveillance infrastructure`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[2].description`
  - DE: `Das Cyber Crime Investigation Bureau bestatigt den Einsatz a`
  - EN: `The Cyber Crime Investigation Bureau confirms the use of aut`
  - missing-name: Uber

### tschechien-ki-sozialhilfe-scoring.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Automating Society Report 2020`
  - EN: `Automating Society Report 2020`

### tuerkei-imamoglu-deepfake-kommunalwahl-2024.json

- **german_leakage_german-word** @ `description`
  - DE: `Im Januar 2024 verbreitet sich in der Türkei ein KI-generiertes Audio-Video, das`
  - EN: `In January 2024 an AI-generated audio-video spreads in Turkey that purports to s`
- **german_leakage_umlaut** @ `actors[5].name`
  - DE: `Yüksek Seçim Kurulu (YSK, türkische Wahlbehörde)`
  - EN: `Yüksek Seçim Kurulu (YSK, Turkish Electoral Commission)`
- **identical_de_en** @ `sources[0].title`
  - DE: `AI-Generated Video Targets Istanbul Mayor Ahead of Elections`
  - EN: `AI-Generated Video Targets Istanbul Mayor Ahead of Elections`
- **identical_de_en** @ `sources[1].title`
  - DE: `Fears of AI disinformation cast shadow over Turkish local elections`
  - EN: `Fears of AI disinformation cast shadow over Turkish local elections`
- **identical_de_en** @ `sources[2].title`
  - DE: `Deepfakes, censorship and media pressure ahead of Turkey's local elections`
  - EN: `Deepfakes, censorship and media pressure ahead of Turkey's local elections`
- **identical_de_en** @ `sources[3].title`
  - DE: `Deepfake videos used in local elections in Turkey as Erdogan battles for Istanbu`
  - EN: `Deepfake videos used in local elections in Turkey as Erdogan battles for Istanbu`
- **identical_de_en** @ `sources[4].title`
  - DE: `AI content is meddling in Turkey's election. Experts warn it's just the beginnin`
  - EN: `AI content is meddling in Turkey's election. Experts warn it's just the beginnin`

### tuerkei-ki-kurdische-ueberwachung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `World Report 2023: Turkey`
  - EN: `World Report 2023: Turkey`
- **identical_de_en** @ `sources[1].title`
  - DE: `Turkey: Human Rights Overview`
  - EN: `Turkey: Human Rights Overview`

### tuerkei-social-media-gesetz.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Freedom on the Net 2023: Turkey`
  - EN: `Freedom on the Net 2023: Turkey`
- **identical_de_en** @ `sources[1].title`
  - DE: `Turkey: Social Media Law Will Increase Censorship`
  - EN: `Turkey: Social Media Law Will Increase Censorship`
- **identical_de_en** @ `sources[2].title`
  - DE: `Turkey – Press Freedom Index`
  - EN: `Turkey – Press Freedom Index`

### tunesien-internet-ueberwachung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Tunisia: Digital Rights Under Saied`
  - EN: `Tunisia: Digital Rights Under Saied`
- **identical_de_en** @ `sources[1].title`
  - DE: `Tunisia: Press Freedom Index`
  - EN: `Tunisia: Press Freedom Index`
- **identical_de_en** @ `sources[2].title`
  - DE: `Tunisia's Decree 54: Criminalizing Online Speech`
  - EN: `Tunisia's Decree 54: Criminalizing Online Speech`

### uber-algorithmisches-management.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Uber Technologies`
  - EN: `Uber Technologies`
- **identical_de_en** @ `sources[0].title`
  - DE: `How Uber Uses Psychological Tricks to Push Its Drivers' Buttons`
  - EN: `How Uber Uses Psychological Tricks to Push Its Drivers' Buttons`
- **identical_de_en** @ `sources[1].title`
  - DE: `Uber BV and others v Aslam and others`
  - EN: `Uber BV and others v Aslam and others`

### uganda-ki-wahlmanipulation.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Uganda Police / CMI (Chieftaincy of Military Intelligence)`
  - EN: `Uganda Police / CMI (Chieftaincy of Military Intelligence)`
- **identical_de_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
  - EN: `Huawei Technologies`
- **identical_de_en** @ `actors[2].name`
  - DE: `Uganda Communications Commission (UCC)`
  - EN: `Uganda Communications Commission (UCC)`
- **identical_de_en** @ `timeline[0].title`
  - DE: `Huawei Safe City in Kampala`
  - EN: `Huawei Safe City in Kampala`
- **identical_de_en** @ `sources[0].title`
  - DE: `Uganda: Elections Marred by Violence`
  - EN: `Uganda: Elections Marred by Violence`
- **identical_de_en** @ `sources[1].title`
  - DE: `Freedom on the Net 2022: Uganda`
  - EN: `Freedom on the Net 2022: Uganda`

### uganda-safe-city-huawei.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
  - EN: `Huawei Technologies`
- **identical_de_en** @ `sources[0].title`
  - DE: `Uganda is using Huawei's facial recognition tech to crack down on dissent after `
  - EN: `Uganda is using Huawei's facial recognition tech to crack down on dissent after `
- **identical_de_en** @ `sources[1].title`
  - DE: `In Uganda, Dissidents Adapt to Evade Huawei Assisted Government Spying`
  - EN: `In Uganda, Dissidents Adapt to Evade Huawei Assisted Government Spying`
- **identical_de_en** @ `sources[2].title`
  - DE: `Across East Africa, Big Brother is watching your every move`
  - EN: `Across East Africa, Big Brother is watching your every move`
- **identical_de_en** @ `sources[3].title`
  - DE: `Revealed: How Huawei helped Museveni spy on Bobi Wine`
  - EN: `Revealed: How Huawei helped Museveni spy on Bobi Wine`

### uk-bridges-south-wales-police-gesichtserkennung-urteil.json

- **identical_de_en** @ `location.name`
  - DE: `Cardiff, Wales / London (Court of Appeal)`
  - EN: `Cardiff, Wales / London (Court of Appeal)`
- **identical_de_en** @ `actors[3].name`
  - DE: `Court of Appeal of England and Wales (Master of the Rolls Sir Terence Etherton e`
  - EN: `Court of Appeal of England and Wales (Master of the Rolls Sir Terence Etherton e`
- **identical_de_en** @ `actors[5].name`
  - DE: `Surveillance Camera Commissioner / Equality and Human Rights Commission`
  - EN: `Surveillance Camera Commissioner / Equality and Human Rights Commission`
- **identical_de_en** @ `sources[0].title`
  - DE: `Legal Challenge: Ed Bridges v South Wales Police`
  - EN: `Legal Challenge: Ed Bridges v South Wales Police`
- **identical_de_en** @ `sources[1].title`
  - DE: `Facial recognition technology needs proper regulation — Court of Appeal`
  - EN: `Facial recognition technology needs proper regulation — Court of Appeal`
- **identical_de_en** @ `sources[2].title`
  - DE: `Case Law: R (on the application of Bridges) v Chief Constable of South Wales — f`
  - EN: `Case Law: R (on the application of Bridges) v Chief Constable of South Wales — f`
- **identical_de_en** @ `sources[3].title`
  - DE: `Key takeaways for the private sector from The Bridges v South Wales police facia`
  - EN: `Key takeaways for the private sector from The Bridges v South Wales police facia`
- **identical_de_en** @ `sources[4].title`
  - DE: `Surveillance Camera Commissioner's statement: Court of Appeal judgment Bridges v`
  - EN: `Surveillance Camera Commissioner's statement: Court of Appeal judgment Bridges v`

### uk-facial-recognition-south-wales.json

- **identical_de_en** @ `actors[0].name`
  - DE: `South Wales Police`
  - EN: `South Wales Police`
- **identical_de_en** @ `sources[0].title`
  - DE: `Stop Facial Recognition — Campaign Documentation`
  - EN: `Stop Facial Recognition — Campaign Documentation`

### uk-ki-wohlfahrt-universal-credit.json

- **identical_de_en** @ `actors[0].name`
  - DE: `UK Department for Work and Pensions (DWP)`
  - EN: `UK Department for Work and Pensions (DWP)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Rolling out Universal Credit`
  - EN: `Rolling out Universal Credit`
- **identical_de_en** @ `sources[1].title`
  - DE: `Universal Credit: early progress`
  - EN: `Universal Credit: early progress`

### uk-met-police-gangs-matrix.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Metropolitan Police Service (Met Police)`
  - EN: `Metropolitan Police Service (Met Police)`
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `Die Metropolitan Police verabschiedet eine reformierte Versi`
  - EN: `The Metropolitan Police adopts a reformed version of the Gan`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `Metropolitan Police gangs matrix — ICO investigation findings`
  - EN: `Metropolitan Police gangs matrix — ICO investigation findings`
- **identical_de_en** @ `sources[1].title`
  - DE: `ICO Enforcement Notice — Metropolitan Police Gangs Matrix`
  - EN: `ICO Enforcement Notice — Metropolitan Police Gangs Matrix`
- **identical_de_en** @ `sources[2].title`
  - DE: `Met Police to scrap and replace 'racist' Gangs Violence Matrix`
  - EN: `Met Police to scrap and replace 'racist' Gangs Violence Matrix`
- **identical_de_en** @ `sources[3].title`
  - DE: `ICO finds Gangs Matrix breached Data Protection Laws`
  - EN: `ICO finds Gangs Matrix breached Data Protection Laws`
- **identical_de_en** @ `sources[4].title`
  - DE: `Trapped in the Matrix: Secrecy, stigma, and bias in the Met's Gangs Database`
  - EN: `Trapped in the Matrix: Secrecy, stigma, and bias in the Met's Gangs Database`

### uk-ofqual-a-levels-algorithmus.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Ofqual (Office of Qualifications and Examinations Regulation)`
  - EN: `Ofqual (Office of Qualifications and Examinations Regulation)`
- **identical_de_en** @ `actors[1].name`
  - DE: `UK Department for Education`
  - EN: `UK Department for Education`
- **identical_de_en** @ `sources[0].title`
  - DE: `A-levels: Nearly 40% of results in England were downgraded`
  - EN: `A-levels: Nearly 40% of results in England were downgraded`
- **identical_de_en** @ `sources[1].title`
  - DE: `A-levels and GCSEs: U-turn as teacher-predicted grades approach adopted`
  - EN: `A-levels and GCSEs: U-turn as teacher-predicted grades approach adopted`

### uk-post-office-horizon-fujitsu-fehlurteile.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Post Office Limited (UK)`
  - EN: `Post Office Limited (UK)`
- **identical_de_en** @ `actors[3].name`
  - DE: `Alan Bates (Mr Bates vs The Post Office, Justice for Subpostmasters Alliance)`
  - EN: `Alan Bates (Mr Bates vs The Post Office, Justice for Subpostmasters Alliance)`
- **identical_de_en** @ `actors[5].name`
  - DE: `Criminal Cases Review Commission (CCRC)`
  - EN: `Criminal Cases Review Commission (CCRC)`
- **identical_de_en** @ `sources[0].title`
  - DE: `British Post Office scandal`
  - EN: `British Post Office scandal`
- **identical_de_en** @ `sources[1].title`
  - DE: `Post Office Horizon scandal explained: Everything you need to know`
  - EN: `Post Office Horizon scandal explained: Everything you need to know`
- **identical_de_en** @ `sources[2].title`
  - DE: `Post Office Horizon IT scandal: Progress of compensation`
  - EN: `Post Office Horizon IT scandal: Progress of compensation`
- **identical_de_en** @ `sources[3].title`
  - DE: `Post Office 'Horizon' Cases`
  - EN: `Post Office 'Horizon' Cases`
- **identical_de_en** @ `sources[4].title`
  - DE: `Fujitsu boss said Post Office inquiry report wasn't 'that bad', despite link to `
  - EN: `Fujitsu boss said Post Office inquiry report wasn't 'that bad', despite link to `

### ukraine-clearview-kriegseinsatz.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Ukraine using ClearviewAI facial recognition to identify Russian war dead`
  - EN: `Ukraine using ClearviewAI facial recognition to identify Russian war dead`
- **identical_de_en** @ `sources[1].title`
  - DE: `Ukraine's 'Secret Weapon' Against Russia Is Clearview AI`
  - EN: `Ukraine's 'Secret Weapon' Against Russia Is Clearview AI`
- **identical_de_en** @ `sources[2].title`
  - DE: `Ukraine using Clearview AI facial-recognition software to ID dead Russian soldie`
  - EN: `Ukraine using Clearview AI facial-recognition software to ID dead Russian soldie`
- **identical_de_en** @ `sources[3].title`
  - DE: `Ukraine has started using Clearview AI's facial recognition during war`
  - EN: `Ukraine has started using Clearview AI's facial recognition during war`

### ukraine-ki-gesichtserkennung-tote.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Ukraine using ClearviewAI facial recognition to identify Russian war dead`
  - EN: `Ukraine using ClearviewAI facial recognition to identify Russian war dead`
- **identical_de_en** @ `sources[1].title`
  - DE: `Facial recognition technology: how it's being used in Ukraine and why it's still`
  - EN: `Facial recognition technology: how it's being used in Ukraine and why it's still`
- **identical_de_en** @ `sources[2].title`
  - DE: `Ukraine uses Clearview AI to identify Russian dead`
  - EN: `Ukraine uses Clearview AI to identify Russian dead`
- **identical_de_en** @ `sources[3].title`
  - DE: `How 'clear' is the legality of Clearview AI in Ukraine?`
  - EN: `How 'clear' is the legality of Clearview AI in Ukraine?`

### ukraine-russland-zala-lancet-autonome-ki-drohnen.json

- **identical_de_en** @ `sources[1].title`
  - DE: `Russia's Lancet Drones Packed With Western Tech, AI Despite Sanctions`
  - EN: `Russia's Lancet Drones Packed With Western Tech, AI Despite Sanctions`
- **identical_de_en** @ `sources[2].title`
  - DE: `Russia Unleashes Next-Gen Lancet Drone With Extended Range and Deadlier Payload `
  - EN: `Russia Unleashes Next-Gen Lancet Drone With Extended Range and Deadlier Payload `
- **identical_de_en** @ `sources[3].title`
  - DE: `Russia Unveils Upgraded ZALA Lancet Drone with Advanced EW Resistance`
  - EN: `Russia Unveils Upgraded ZALA Lancet Drone with Advanced EW Resistance`
- **identical_de_en** @ `sources[4].title`
  - DE: `Russia's Kamikaze Drones Are Now Deadlier than Ever`
  - EN: `Russia's Kamikaze Drones Are Now Deadlier than Ever`

### ungarn-ki-ueberwachung-orban.json

- **identical_de_en** @ `sources[0].title`
  - DE: `World Report 2023: Hungary`
  - EN: `World Report 2023: Hungary`

### ungarn-orban-gesichtserkennung-pride-verbot-2025.json

- **dropped_proper_name** @ `timeline[2].description`
  - DE: `Am 28. Juni 2025 findet die Budapest Pride statt — Bürgermei`
  - EN: `On June 28, 2025 Budapest Pride takes place — Mayor Karácson`
  - missing-name: EU
- **identical_de_en** @ `sources[0].title`
  - DE: `Hungary passes constitutional amendment to ban LGBTQ+ public events`
  - EN: `Hungary passes constitutional amendment to ban LGBTQ+ public events`
- **identical_de_en** @ `sources[1].title`
  - DE: `Facial Recognition to Target Pride in Hungary: Civil Society Orgs Call On The EU`
  - EN: `Facial Recognition to Target Pride in Hungary: Civil Society Orgs Call On The EU`
- **identical_de_en** @ `sources[2].title`
  - DE: `Hungary Bans LGBT Pride Events`
  - EN: `Hungary Bans LGBT Pride Events`
- **identical_de_en** @ `sources[3].title`
  - DE: `Hungary law permitting live facial recognition at outlawed Pride event challenge`
  - EN: `Hungary law permitting live facial recognition at outlawed Pride event challenge`
- **identical_de_en** @ `sources[4].title`
  - DE: `Pride With Pride! Stop Mass Surveillance at Pride, Stop Face Recognition Now`
  - EN: `Pride With Pride! Stop Mass Surveillance at Pride, Stop Face Recognition Now`

### usa-adobe-firefly-midjourney-ethik-kontroverse.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Adobe's AI Firefly Used AI-Generated Images From Rivals for Training`
  - EN: `Adobe's AI Firefly Used AI-Generated Images From Rivals for Training`
- **identical_de_en** @ `sources[1].title`
  - DE: `Adobe struggles to stay creator-friendly in AI push`
  - EN: `Adobe struggles to stay creator-friendly in AI push`
- **identical_de_en** @ `sources[2].title`
  - DE: `Adobe's Firefly Image Generator Was Partially Trained on AI Images From Midjourn`
  - EN: `Adobe's Firefly Image Generator Was Partially Trained on AI Images From Midjourn`
- **identical_de_en** @ `sources[3].title`
  - DE: `Adobe Firefly used thousands of Midjourney images in training its 'ethical AI' m`
  - EN: `Adobe Firefly used thousands of Midjourney images in training its 'ethical AI' m`
- **identical_de_en** @ `sources[4].title`
  - DE: `Adobe Stock creators aren't happy with Firefly, the company's 'commercially safe`
  - EN: `Adobe Stock creators aren't happy with Firefly, the company's 'commercially safe`

### usa-ai-bewerbungsfilter-behinderte.json

- **identical_de_en** @ `actors[2].name`
  - DE: `Equal Employment Opportunity Commission (EEOC)`
  - EN: `Equal Employment Opportunity Commission (EEOC)`
- **identical_de_en** @ `sources[0].title`
  - DE: `U.S. EEOC and U.S. Department of Justice Warn against Disability Discrimination`
  - EN: `U.S. EEOC and U.S. Department of Justice Warn against Disability Discrimination`
- **identical_de_en** @ `sources[1].title`
  - DE: `Algorithms, Artificial Intelligence, and Disability Discrimination in Hiring (AD`
  - EN: `Algorithms, Artificial Intelligence, and Disability Discrimination in Hiring (AD`
- **identical_de_en** @ `sources[2].title`
  - DE: `U.S. warns of discrimination in using AI to screen job candidates`
  - EN: `U.S. warns of discrimination in using AI to screen job candidates`
- **identical_de_en** @ `sources[3].title`
  - DE: `AI hiring software was biased against deaf employees, ACLU alleges in ADA case`
  - EN: `AI hiring software was biased against deaf employees, ACLU alleges in ADA case`
- **identical_de_en** @ `sources[4].title`
  - DE: `US Government Agencies Warned about AI Hiring Tech that Discriminates against Di`
  - EN: `US Government Agencies Warned about AI Hiring Tech that Discriminates against Di`

### usa-ai-generated-csam.json

- **identical_de_en** @ `actors[1].name`
  - DE: `National Center for Missing and Exploited Children (NCMEC)`
  - EN: `National Center for Missing and Exploited Children (NCMEC)`
- **identical_de_en** @ `sources[0].title`
  - DE: `How AI is being abused to create child sexual abuse imagery`
  - EN: `How AI is being abused to create child sexual abuse imagery`
- **identical_de_en** @ `sources[1].title`
  - DE: `The AI child exploitation crisis is here`
  - EN: `The AI child exploitation crisis is here`
- **identical_de_en** @ `sources[2].title`
  - DE: `Investigation Finds AI Image Generation Models Trained on Child Abuse`
  - EN: `Investigation Finds AI Image Generation Models Trained on Child Abuse`
- **identical_de_en** @ `sources[3].title`
  - DE: `Evolution of AI in child sexual abuse material`
  - EN: `Evolution of AI in child sexual abuse material`

### usa-ai-voice-clone-betrug.json

- **identical_de_en** @ `location.name`
  - DE: `Phoenix, Arizona, USA`
  - EN: `Phoenix, Arizona, USA`
- **identical_de_en** @ `sources[0].title`
  - DE: `An AI cloned her daughter's voice and tried to scam her. She's not alone.`
  - EN: `An AI cloned her daughter's voice and tried to scam her. She's not alone.`

### usa-ai-waffenerkennung-schulen.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Evolv Technology`
  - EN: `Evolv Technology`
- **identical_de_en** @ `actors[1].name`
  - DE: `New York City Public Schools`
  - EN: `New York City Public Schools`
- **identical_de_en** @ `sources[0].title`
  - DE: `FTC Takes Action Against Evolv Technologies for Deceiving Users About its AI-Pow`
  - EN: `FTC Takes Action Against Evolv Technologies for Deceiving Users About its AI-Pow`
- **identical_de_en** @ `sources[1].title`
  - DE: `AI Tries (and Fails) to Detect Weapons in Schools`
  - EN: `AI Tries (and Fails) to Detect Weapons in Schools`
- **identical_de_en** @ `sources[2].title`
  - DE: `Schools are buying AI software to detect guns. Some experts say it's a mistake`
  - EN: `Schools are buying AI software to detect guns. Some experts say it's a mistake`
- **identical_de_en** @ `sources[3].title`
  - DE: `As More Schools Turn to AI Weapons Detection, Questions Persist`
  - EN: `As More Schools Turn to AI Weapons Detection, Questions Persist`

### usa-amazon-rekognition-polizei.json

- **german_leakage_german-word** @ `description`
  - DE: `Amazon vermarktete ab 2016 seinen Cloud-Dienst 'Rekognition' aktiv an US-Polizei`
  - EN: `Starting in 2016, Amazon actively marketed its cloud service 'Rekognition' to U.`
- **identical_de_en** @ `location.name`
  - DE: `Seattle, Washington, USA`
  - EN: `Seattle, Washington, USA`
- **identical_de_en** @ `actors[0].name`
  - DE: `Amazon Web Services`
  - EN: `Amazon Web Services`
- **identical_de_en** @ `actors[1].name`
  - DE: `Orlando Police Department`
  - EN: `Orlando Police Department`
- **identical_de_en** @ `actors[2].name`
  - DE: `Washington County Sheriff's Office`
  - EN: `Washington County Sheriff's Office`
- **german_leakage_german-word** @ `timeline[1].description`
  - DE: `Die ACLU testet Rekognition, indem sie Fotos aller 535 US-Kongress-mitglieder ge`
  - EN: `The ACLU tests Rekognition by matching photos of all 535 members of the U.S. Con`
- **dropped_proper_name** @ `timeline[1].description`
  - DE: `Die ACLU testet Rekognition, indem sie Fotos aller 535 US-Ko`
  - EN: `The ACLU tests Rekognition by matching photos of all 535 mem`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `Amazon's Face Recognition Falsely Matched 28 Members of Congress With Mugshots`
  - EN: `Amazon's Face Recognition Falsely Matched 28 Members of Congress With Mugshots`
- **identical_de_en** @ `sources[1].title`
  - DE: `Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classifi`
  - EN: `Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classifi`
- **identical_de_en** @ `sources[2].title`
  - DE: `We are implementing a one-year moratorium on police use of Rekognition`
  - EN: `We are implementing a one-year moratorium on police use of Rekognition`

### usa-amazon-warehouse-ki-kuendigung.json

- **identical_de_en** @ `location.name`
  - DE: `Seattle, Washington, USA`
  - EN: `Seattle, Washington, USA`
- **dropped_proper_name** @ `timeline[2].title`
  - DE: `COVID-19 verscharft Uberwachungsdruck`
  - EN: `COVID-19 intensifies surveillance pressure`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `Ein US-Senatsbericht kritisiert Amazons algorithmisches Uber`
  - EN: `A U.S. Senate report criticizes Amazon's algorithmic surveil`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `Amazon reportedly fires workers using automated system without human review`
  - EN: `Amazon reportedly fires workers using automated system without human review`

### usa-angela-lipps-fargo-clearview-fehlhaftung.json

- **identical_de_en** @ `location.name`
  - DE: `Fargo, North Dakota / Tennessee, USA`
  - EN: `Fargo, North Dakota / Tennessee, USA`
- **identical_de_en** @ `actors[1].name`
  - DE: `West Fargo Police Department`
  - EN: `West Fargo Police Department`
- **identical_de_en** @ `actors[2].name`
  - DE: `Fargo Police Department`
  - EN: `Fargo Police Department`
- **identical_de_en** @ `sources[0].title`
  - DE: `Police used AI facial recognition to arrest a Tennessee woman for crimes committ`
  - EN: `Police used AI facial recognition to arrest a Tennessee woman for crimes committ`
- **identical_de_en** @ `sources[1].title`
  - DE: `AI error jails innocent grandmother for months in Fargo fraud case`
  - EN: `AI error jails innocent grandmother for months in Fargo fraud case`
- **identical_de_en** @ `sources[2].title`
  - DE: `A Grandmother Lost Five Months, Her Home, Her Car, and Her Dog to a Facial Recog`
  - EN: `A Grandmother Lost Five Months, Her Home, Her Car, and Her Dog to a Facial Recog`
- **identical_de_en** @ `sources[3].title`
  - DE: `Fargo police refuse to apologize to Tennessee grandma jailed on bogus AI evidenc`
  - EN: `Fargo police refuse to apologize to Tennessee grandma jailed on bogus AI evidenc`
- **identical_de_en** @ `sources[4].title`
  - DE: `Facial recognition jails innocent grandmother, attorney says`
  - EN: `Facial recognition jails innocent grandmother, attorney says`

### usa-apple-intelligence-bbc-falsche-news-headlines.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Apple urged to remove new AI feature after falsely summarizing news reports`
  - EN: `Apple urged to remove new AI feature after falsely summarizing news reports`
- **identical_de_en** @ `sources[1].title`
  - DE: `Apple responds to BBC complaint over AI accuracy`
  - EN: `Apple responds to BBC complaint over AI accuracy`
- **identical_de_en** @ `sources[2].title`
  - DE: `Apple's inaccurate AI news alerts shows the tech has a growing misinformation pr`
  - EN: `Apple's inaccurate AI news alerts shows the tech has a growing misinformation pr`
- **identical_de_en** @ `sources[3].title`
  - DE: `BBC Criticizes Apple Intelligence Over False News Summaries`
  - EN: `BBC Criticizes Apple Intelligence Over False News Summaries`

### usa-automated-license-plate-readers.json

- **identical_de_en** @ `location.name`
  - DE: `Los Angeles, USA`
  - EN: `Los Angeles, USA`
- **identical_de_en** @ `actors[0].name`
  - DE: `Vigilant Solutions / Motorola Solutions`
  - EN: `Vigilant Solutions / Motorola Solutions`
- **identical_de_en** @ `sources[0].title`
  - DE: `License Plate Readers`
  - EN: `License Plate Readers`

### usa-biden-deepfake-robocall.json

- **identical_de_en** @ `location.name`
  - DE: `New Hampshire, USA`
  - EN: `New Hampshire, USA`
- **identical_de_en** @ `actors[4].name`
  - DE: `New Hampshire Department of Justice`
  - EN: `New Hampshire Department of Justice`
- **identical_de_en** @ `sources[0].title`
  - DE: `Steven Kramer Charged with Voter Suppression Over AI-Generated President Biden R`
  - EN: `Steven Kramer Charged with Voter Suppression Over AI-Generated President Biden R`
- **identical_de_en** @ `sources[1].title`
  - DE: `A political consultant faces charges and fines for Biden deepfake robocalls`
  - EN: `A political consultant faces charges and fines for Biden deepfake robocalls`
- **identical_de_en** @ `sources[2].title`
  - DE: `Steve Kramer Instigated Illegal Spoofed Robocall — FCC Enforcement Action`
  - EN: `Steve Kramer Instigated Illegal Spoofed Robocall — FCC Enforcement Action`
- **identical_de_en** @ `sources[3].title`
  - DE: `Steve Kramer, who deepfaked Biden's voice in New Hampshire Democratic primary, i`
  - EN: `Steve Kramer, who deepfaked Biden's voice in New Hampshire Democratic primary, i`

### usa-cambridge-analytica.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Cambridge Analytica / SCL Group`
  - EN: `Cambridge Analytica / SCL Group`
- **identical_de_en** @ `actors[1].name`
  - DE: `Facebook / Meta Platforms`
  - EN: `Facebook / Meta Platforms`
- **dropped_proper_name** @ `timeline[2].description`
  - DE: `Christopher Wylie, ehemaliger Mitarbeiter von Cambridge Anal`
  - EN: `Christopher Wylie, a former Cambridge Analytica employee, re`
  - missing-name: EU
- **identical_de_en** @ `sources[0].title`
  - DE: `Revealed: 50 million Facebook profiles harvested for Cambridge Analytica`
  - EN: `Revealed: 50 million Facebook profiles harvested for Cambridge Analytica`
- **identical_de_en** @ `sources[1].title`
  - DE: `FTC Imposes $5 Billion Penalty on Facebook`
  - EN: `FTC Imposes $5 Billion Penalty on Facebook`
- **identical_de_en** @ `sources[2].title`
  - DE: `ICO Investigation into use of personal data in political campaigns`
  - EN: `ICO Investigation into use of personal data in political campaigns`

### usa-cellebrite-telefon-forensik.json

- **identical_de_en** @ `sources[0].title`
  - DE: `EFF: Cell Phone Extraction and Digital Forensics`
  - EN: `EFF: Cell Phone Extraction and Digital Forensics`
- **identical_de_en** @ `sources[1].title`
  - DE: `Exploiting vulnerabilities in Cellebrite UFED and Physical Analyzer`
  - EN: `Exploiting vulnerabilities in Cellebrite UFED and Physical Analyzer`
- **identical_de_en** @ `sources[2].title`
  - DE: `Cellebrite Can Break Into iPhones — But It's Not Just iPhones`
  - EN: `Cellebrite Can Break Into iPhones — But It's Not Just iPhones`
- **identical_de_en** @ `sources[3].title`
  - DE: `Mass Extraction: The Widespread Power of U.S. Law Enforcement to Search Mobile P`
  - EN: `Mass Extraction: The Widespread Power of U.S. Law Enforcement to Search Mobile P`

### usa-character-ai-setzer-suizid-florida.json

- **identical_de_en** @ `location.name`
  - DE: `Orlando, Florida, USA`
  - EN: `Orlando, Florida, USA`
- **identical_de_en** @ `actors[4].name`
  - DE: `U.S. District Court Middle District of Florida (Orlando)`
  - EN: `U.S. District Court Middle District of Florida (Orlando)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Incident 826: Character.ai Chatbot Allegedly Influenced Teen User Toward Suicide`
  - EN: `Incident 826: Character.ai Chatbot Allegedly Influenced Teen User Toward Suicide`
- **identical_de_en** @ `sources[1].title`
  - DE: `Lawsuit claims Character.AI is responsible for teen's suicide`
  - EN: `Lawsuit claims Character.AI is responsible for teen's suicide`
- **identical_de_en** @ `sources[2].title`
  - DE: `Google and Character.AI agree to settle lawsuit linked to teen suicide`
  - EN: `Google and Character.AI agree to settle lawsuit linked to teen suicide`
- **identical_de_en** @ `sources[3].title`
  - DE: `AI company, Google settle lawsuit over Florida teen's suicide linked to Characte`
  - EN: `AI company, Google settle lawsuit over Florida teen's suicide linked to Characte`
- **identical_de_en** @ `sources[4].title`
  - DE: `Google and chatbot maker settle lawsuit alleging teen's death was linked to chat`
  - EN: `Google and chatbot maker settle lawsuit alleging teen's death was linked to chat`

### usa-chatgpt-urheberrecht-nyt.json

- **identical_de_en** @ `location.name`
  - DE: `New York City, USA`
  - EN: `New York City, USA`
- **identical_de_en** @ `actors[1].name`
  - DE: `Microsoft Corporation`
  - EN: `Microsoft Corporation`
- **identical_de_en** @ `actors[2].name`
  - DE: `The New York Times Company`
  - EN: `The New York Times Company`
- **identical_de_en** @ `sources[0].title`
  - DE: `The New York Times Company v. Microsoft Corporation et al. — Complaint`
  - EN: `The New York Times Company v. Microsoft Corporation et al. — Complaint`

### usa-cigna-pxdx-algorithmus-claim-ablehnungen.json

- **identical_de_en** @ `actors[1].name`
  - DE: `U.S. District Court Eastern District of California`
  - EN: `U.S. District Court Eastern District of California`
- **identical_de_en** @ `actors[2].name`
  - DE: `U.S. District Judge Dale Drozd`
  - EN: `U.S. District Judge Dale Drozd`
- **identical_de_en** @ `sources[0].title`
  - DE: `Cigna accused of using an algorithm to automatically reject patient claims`
  - EN: `Cigna accused of using an algorithm to automatically reject patient claims`
- **identical_de_en** @ `sources[1].title`
  - DE: `Cigna using AI to reject claims, lawsuit charges`
  - EN: `Cigna using AI to reject claims, lawsuit charges`
- **identical_de_en** @ `sources[2].title`
  - DE: `Cigna suit brings AI and algorithm complaints to healthcare`
  - EN: `Cigna suit brings AI and algorithm complaints to healthcare`
- **identical_de_en** @ `sources[3].title`
  - DE: `Judge advances case over Cigna use of algorithms to deny health claims`
  - EN: `Judge advances case over Cigna use of algorithms to deny health claims`
- **identical_de_en** @ `sources[4].title`
  - DE: `The Legal Landscape for AI-Enabled Decisions for Health Care Claims and Coverage`
  - EN: `The Legal Landscape for AI-Enabled Decisions for Health Care Claims and Coverage`

### usa-clearview-ai-scraping.json

- **identical_de_en** @ `location.name`
  - DE: `New York City, USA`
  - EN: `New York City, USA`
- **dropped_proper_name** @ `affectedRights[2]`
  - DE: `Schutz vor willkurlicher Uberwachung`
  - EN: `protection from arbitrary surveillance`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `ACLU Sues Clearview AI for Violating Illinois Biometric Privacy Law`
  - EN: `ACLU Sues Clearview AI for Violating Illinois Biometric Privacy Law`

### usa-databrokerage-ki-abtreibung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Location Data Firm Selling Visits to Abortion Clinics`
  - EN: `Location Data Firm Selling Visits to Abortion Clinics`

### usa-doj-elegant-ki-jobanzeigen-diskriminierung.json

- **identical_de_en** @ `actors[1].name`
  - DE: `U.S. Department of Justice — Civil Rights Division`
  - EN: `U.S. Department of Justice — Civil Rights Division`
- **identical_de_en** @ `actors[2].name`
  - DE: `Protecting U.S. Workers Initiative (DOJ)`
  - EN: `Protecting U.S. Workers Initiative (DOJ)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Civil Rights Division Obtains Settlement with a Company that Used AI-Generated A`
  - EN: `Civil Rights Division Obtains Settlement with a Company that Used AI-Generated A`
- **identical_de_en** @ `sources[1].title`
  - DE: `AI-Generated Job Ads Discriminated Against US Workers, Says Civil Rights Unit`
  - EN: `AI-Generated Job Ads Discriminated Against US Workers, Says Civil Rights Unit`
- **identical_de_en** @ `sources[2].title`
  - DE: `Department of Justice Obtains Settlement Based on AI-Generated Job Advertisement`
  - EN: `Department of Justice Obtains Settlement Based on AI-Generated Job Advertisement`
- **identical_de_en** @ `sources[3].title`
  - DE: `DOJ settles with IT professional service provider over AI-generated job ads`
  - EN: `DOJ settles with IT professional service provider over AI-generated job ads`
- **identical_de_en** @ `sources[4].title`
  - DE: `Justice Department settles with Va. company accused of excluding U.S. workers fr`
  - EN: `Justice Department settles with Va. company accused of excluding U.S. workers fr`

### usa-doj-realpage-mietalgorithmus-kartell.json

- **identical_de_en** @ `actors[0].name`
  - DE: `RealPage Inc. (Richardson, Texas)`
  - EN: `RealPage Inc. (Richardson, Texas)`
- **identical_de_en** @ `actors[1].name`
  - DE: `U.S. Department of Justice — Antitrust Division`
  - EN: `U.S. Department of Justice — Antitrust Division`
- **identical_de_en** @ `sources[0].title`
  - DE: `Justice Department Sues RealPage for Algorithmic Pricing Scheme that Harms Milli`
  - EN: `Justice Department Sues RealPage for Algorithmic Pricing Scheme that Harms Milli`
- **identical_de_en** @ `sources[1].title`
  - DE: `DOJ and RealPage Agree to Settle Rental Price-Fixing Case`
  - EN: `DOJ and RealPage Agree to Settle Rental Price-Fixing Case`
- **identical_de_en** @ `sources[2].title`
  - DE: `DOJ accuses real estate software company of helping landlords collude to raise r`
  - EN: `DOJ accuses real estate software company of helping landlords collude to raise r`
- **identical_de_en** @ `sources[3].title`
  - DE: `New limits for rent algorithm that prosecutors say let landlords drive up prices`
  - EN: `New limits for rent algorithm that prosecutors say let landlords drive up prices`
- **identical_de_en** @ `sources[4].title`
  - DE: `U.S. antitrust case alleges rent collusion enabled by RealPage software`
  - EN: `U.S. antitrust case alleges rent collusion enabled by RealPage software`

### usa-epic-sepsis-model-krankenhaus-falsche-alarme.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Epic Systems Corporation (Verona, Wisconsin)`
  - EN: `Epic Systems Corporation (Verona, Wisconsin)`
- **identical_de_en** @ `sources[0].title`
  - DE: `A popular algorithm to predict sepsis misses most cases and sends frequent false`
  - EN: `A popular algorithm to predict sepsis misses most cases and sends frequent false`
- **identical_de_en** @ `sources[1].title`
  - DE: `Incident 123: Epic Systems's Sepsis Prediction Algorithms Revealed to Have High `
  - EN: `Incident 123: Epic Systems's Sepsis Prediction Algorithms Revealed to Have High `
- **identical_de_en** @ `sources[2].title`
  - DE: `Epic's widely used sepsis prediction model falls short among Michigan Medicine p`
  - EN: `Epic's widely used sepsis prediction model falls short among Michigan Medicine p`
- **identical_de_en** @ `sources[3].title`
  - DE: `Accuracy of Epic's sepsis model faces scrutiny`
  - EN: `Accuracy of Epic's sepsis model faces scrutiny`
- **identical_de_en** @ `sources[4].title`
  - DE: `Epic's Algorithm To Predict Deadly Conditions, Misses Most Cases`
  - EN: `Epic's Algorithm To Predict Deadly Conditions, Misses Most Cases`

### usa-face-id-ice-drivers-license.json

- **identical_de_en** @ `location.name`
  - DE: `Washington, D.C., USA`
  - EN: `Washington, D.C., USA`
- **identical_de_en** @ `actors[0].name`
  - DE: `ICE (Immigration and Customs Enforcement)`
  - EN: `ICE (Immigration and Customs Enforcement)`
- **identical_de_en** @ `sources[0].title`
  - DE: `America Under Watch: Face Surveillance in the United States`
  - EN: `America Under Watch: Face Surveillance in the United States`

### usa-facial-recognition-flughaefen.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Transportation Security Administration (TSA)`
  - EN: `Transportation Security Administration (TSA)`
- **identical_de_en** @ `actors[1].name`
  - DE: `Customs and Border Protection (CBP)`
  - EN: `Customs and Border Protection (CBP)`
- **identical_de_en** @ `sources[0].title`
  - DE: `A Border Officer Told Me I Couldn't Opt Out of the Face Recognition Scan. They W`
  - EN: `A Border Officer Told Me I Couldn't Opt Out of the Face Recognition Scan. They W`
- **identical_de_en** @ `sources[1].title`
  - DE: `Facial Recognition Technology: CBP Traveler Identity Verification and Efforts to`
  - EN: `Facial Recognition Technology: CBP Traveler Identity Verification and Efforts to`
- **identical_de_en** @ `sources[2].title`
  - DE: `Statement for the Record on Assessing CBP's Use of Facial Recognition Technology`
  - EN: `Statement for the Record on Assessing CBP's Use of Facial Recognition Technology`
- **identical_de_en** @ `sources[3].title`
  - DE: `EPIC v. CBP (Biometric Entry/Exit Program)`
  - EN: `EPIC v. CBP (Biometric Entry/Exit Program)`
- **identical_de_en** @ `sources[4].title`
  - DE: `The Government's Nightmare Vision for Face Recognition at Airports and Beyond`
  - EN: `The Government's Nightmare Vision for Face Recognition at Airports and Beyond`

### usa-geofeedia-social-media-polizei.json

- **identical_de_en** @ `location.name`
  - DE: `Chicago, Illinois, USA`
  - EN: `Chicago, Illinois, USA`
- **identical_de_en** @ `actors[1].name`
  - DE: `Chicago Police Department`
  - EN: `Chicago Police Department`
- **identical_de_en** @ `actors[2].name`
  - DE: `Baltimore Police Department`
  - EN: `Baltimore Police Department`
- **identical_de_en** @ `sources[0].title`
  - DE: `How Facebook and Twitter gave data access to a company that surveilled Black act`
  - EN: `How Facebook and Twitter gave data access to a company that surveilled Black act`

### usa-github-copilot-urheberrecht.json

- **german_leakage_german-word** @ `description`
  - DE: `GitHub Copilot, ein KI-gestütztes Programmierwerkzeug von GitHub (Microsoft) und`
  - EN: `GitHub Copilot, an AI-assisted coding tool from GitHub (Microsoft) and OpenAI, w`
- **identical_de_en** @ `location.name`
  - DE: `San Francisco, USA`
  - EN: `San Francisco, USA`
- **identical_de_en** @ `actors[0].name`
  - DE: `GitHub / Microsoft`
  - EN: `GitHub / Microsoft`
- **identical_de_en** @ `sources[0].title`
  - DE: `If Software is My Copilot, Who Programmed My Copilot?`
  - EN: `If Software is My Copilot, Who Programmed My Copilot?`
- **identical_de_en** @ `sources[1].title`
  - DE: `Doe v. GitHub, Inc. — Class Action Lawsuit`
  - EN: `Doe v. GitHub, Inc. — Class Action Lawsuit`
- **identical_de_en** @ `sources[2].title`
  - DE: `Give Up GitHub: The Time Has Come!`
  - EN: `Give Up GitHub: The Time Has Come!`

### usa-google-gemini-bildgenerierung-diversity-debakel.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Google / Alphabet Inc.`
  - EN: `Google / Alphabet Inc.`
- **identical_de_en** @ `sources[0].title`
  - DE: `Google to pause Gemini AI model's image generation`
  - EN: `Google to pause Gemini AI model's image generation`
- **identical_de_en** @ `sources[1].title`
  - DE: `Google pauses Gemini's AI image generation after diversity controversies`
  - EN: `Google pauses Gemini's AI image generation after diversity controversies`
- **identical_de_en** @ `sources[2].title`
  - DE: `Google CEO Pichai says Gemini's AI image results 'offended our users'`
  - EN: `Google CEO Pichai says Gemini's AI image results 'offended our users'`
- **identical_de_en** @ `sources[3].title`
  - DE: `Google explains why Gemini's image generation feature overcorrected for diversit`
  - EN: `Google explains why Gemini's image generation feature overcorrected for diversit`
- **identical_de_en** @ `sources[4].title`
  - DE: `Why Google's AI tool was slammed for showing images of people of colour`
  - EN: `Why Google's AI tool was slammed for showing images of people of colour`

### usa-google-location-history-polizei.json

- **identical_de_en** @ `location.name`
  - DE: `Mountain View, USA`
  - EN: `Mountain View, USA`
- **identical_de_en** @ `sources[0].title`
  - DE: `Tracking Phones, Google Is a Dragnet for the Police`
  - EN: `Tracking Phones, Google Is a Dragnet for the Police`

### usa-hirevue-intuit-aclu-ki-job-diskriminierung.json

- **identical_de_en** @ `actors[0].name`
  - DE: `HireVue Inc. (South Jordan, Utah)`
  - EN: `HireVue Inc. (South Jordan, Utah)`
- **identical_de_en** @ `actors[2].name`
  - DE: `American Civil Liberties Union (ACLU) Colorado`
  - EN: `American Civil Liberties Union (ACLU) Colorado`
- **identical_de_en** @ `actors[3].name`
  - DE: `Colorado Civil Rights Division / U.S. Equal Employment Opportunity Commission (E`
  - EN: `Colorado Civil Rights Division / U.S. Equal Employment Opportunity Commission (E`
- **identical_de_en** @ `sources[0].title`
  - DE: `AI hiring software was biased against deaf employees, ACLU alleges in ADA case`
  - EN: `AI hiring software was biased against deaf employees, ACLU alleges in ADA case`
- **identical_de_en** @ `sources[1].title`
  - DE: `AI Job Screening, Interview & Hiring Lawsuits — Privacy, Bias Concerns`
  - EN: `AI Job Screening, Interview & Hiring Lawsuits — Privacy, Bias Concerns`
- **identical_de_en** @ `sources[2].title`
  - DE: `AI Screening Systems Face Fresh Scrutiny: 6 Key Takeaways From Claims Filed Agai`
  - EN: `AI Screening Systems Face Fresh Scrutiny: 6 Key Takeaways From Claims Filed Agai`
- **identical_de_en** @ `sources[3].title`
  - DE: `New Lie-Detecting AI for Job Interviews Risks Violating Old Laws`
  - EN: `New Lie-Detecting AI for Job Interviews Risks Violating Old Laws`
- **identical_de_en** @ `sources[4].title`
  - DE: `Algorithmic Bias in Hiring: Amending Title VII to Prohibit AI Discrimination`
  - EN: `Algorithmic Bias in Hiring: Amending Title VII to Prohibit AI Discrimination`

### usa-ice-babel-street.json

- **dropped_proper_name** @ `name`
  - DE: `USA: ICE kauft kommerzielle Standortdaten zur Einwanderer-Ub`
  - EN: `USA: ICE buys commercial location data to surveil immigrants`
  - missing-name: Uber
- **identical_de_en** @ `actors[0].name`
  - DE: `ICE (U.S. Immigration and Customs Enforcement)`
  - EN: `ICE (U.S. Immigration and Customs Enforcement)`
- **dropped_proper_name** @ `timeline[0].description`
  - DE: `ICE schliesst einen Vertrag mit Babel Street uber den Zugang`
  - EN: `ICE signs a contract with Babel Street for access to the 'Lo`
  - missing-name: Uber
- **dropped_proper_name** @ `timeline[1].title`
  - DE: `ACLU enthullt ICE-Uberwachungspraktiken per FOIA`
  - EN: `ACLU exposes ICE surveillance practices via FOIA`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `DHS is Circumventing Constitution by Buying Data It Would Normally Need a Warran`
  - EN: `DHS is Circumventing Constitution by Buying Data It Would Normally Need a Warran`
- **identical_de_en** @ `sources[1].title`
  - DE: `EPIC FOIA Response: ICE Babel Street Contract Documents`
  - EN: `EPIC FOIA Response: ICE Babel Street Contract Documents`
- **identical_de_en** @ `sources[2].title`
  - DE: `EPIC v. ICE (Location and Social Media Surveillance)`
  - EN: `EPIC v. ICE (Location and Social Media Surveillance)`
- **identical_de_en** @ `sources[3].title`
  - DE: `Inside Fog Data Science, the Secretive Company Selling Mass Surveillance to Loca`
  - EN: `Inside Fog Data Science, the Secretive Company Selling Mass Surveillance to Loca`
- **identical_de_en** @ `sources[4].title`
  - DE: `ICE Doesn't Need a Warrant to Spy on You`
  - EN: `ICE Doesn't Need a Warrant to Spy on You`

### usa-ice-mobile-fortify-fehlidentifikation-oregon.json

- **identical_de_en** @ `actors[0].name`
  - DE: `ICE (U.S. Immigration and Customs Enforcement)`
  - EN: `ICE (U.S. Immigration and Customs Enforcement)`
- **identical_de_en** @ `actors[1].name`
  - DE: `DHS (U.S. Department of Homeland Security)`
  - EN: `DHS (U.S. Department of Homeland Security)`
- **identical_de_en** @ `actors[2].name`
  - DE: `CBP (U.S. Customs and Border Protection)`
  - EN: `CBP (U.S. Customs and Border Protection)`
- **identical_de_en** @ `actors[4].name`
  - DE: `404 Media / Center for Investigative Reporting`
  - EN: `404 Media / Center for Investigative Reporting`
- **identical_de_en** @ `sources[0].title`
  - DE: `ICE's Facial Recognition App Misidentified a Woman. Twice`
  - EN: `ICE's Facial Recognition App Misidentified a Woman. Twice`
- **identical_de_en** @ `sources[1].title`
  - DE: `Newly Released Footage Highlights ICE's Use of Facial Recognition Technology`
  - EN: `Newly Released Footage Highlights ICE's Use of Facial Recognition Technology`
- **identical_de_en** @ `sources[2].title`
  - DE: `Bodycam footage reveals ICE officers used facial recognition and violent tactics`
  - EN: `Bodycam footage reveals ICE officers used facial recognition and violent tactics`

### usa-kroger-dynamic-pricing-ki.json

- **identical_de_en** @ `location.name`
  - DE: `Cincinnati, Ohio, USA`
  - EN: `Cincinnati, Ohio, USA`
- **identical_de_en** @ `sources[0].title`
  - DE: `Warren, Casey Investigate Kroger's Use of Digital Price Tags, Warn of Grocery Gi`
  - EN: `Warren, Casey Investigate Kroger's Use of Digital Price Tags, Warn of Grocery Gi`
- **identical_de_en** @ `sources[1].title`
  - DE: `Lawmakers Raise Concerns About 'Dynamic Pricing' at Kroger`
  - EN: `Lawmakers Raise Concerns About 'Dynamic Pricing' at Kroger`
- **identical_de_en** @ `sources[2].title`
  - DE: `'Corporate Greed Is Out of Control': Warren Slams Kroger's AI Pricing Scheme`
  - EN: `'Corporate Greed Is Out of Control': Warren Slams Kroger's AI Pricing Scheme`
- **identical_de_en** @ `sources[3].title`
  - DE: `Kroger Asked About Surge Pricing and Facial Recognition at Grocery Stores`
  - EN: `Kroger Asked About Surge Pricing and Facial Recognition at Grocery Stores`

### usa-kroger-gesichtserkennung-supermarkt.json

- **identical_de_en** @ `location.name`
  - DE: `Cincinnati, Ohio, USA`
  - EN: `Cincinnati, Ohio, USA`
- **identical_de_en** @ `actors[2].name`
  - DE: `Federal Trade Commission (FTC)`
  - EN: `Federal Trade Commission (FTC)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Rite Aid Banned from Using AI Facial Recognition After FTC Says Retailer Deploye`
  - EN: `Rite Aid Banned from Using AI Facial Recognition After FTC Says Retailer Deploye`
- **identical_de_en** @ `sources[1].title`
  - DE: `Rite Aid used facial recognition system to falsely tag people as shoplifters, FT`
  - EN: `Rite Aid used facial recognition system to falsely tag people as shoplifters, FT`
- **identical_de_en** @ `sources[2].title`
  - DE: `Rite Aid Secretly Used Facial Recognition in Poorer Communities of Color`
  - EN: `Rite Aid Secretly Used Facial Recognition in Poorer Communities of Color`

### usa-lensa-ai-bilder-missbrauch.json

- **identical_de_en** @ `location.name`
  - DE: `San Francisco, USA`
  - EN: `San Francisco, USA`
- **identical_de_en** @ `sources[0].title`
  - DE: `The viral AI avatar app Lensa undressed me—without my consent`
  - EN: `The viral AI avatar app Lensa undressed me—without my consent`
- **identical_de_en** @ `sources[1].title`
  - DE: `Lensa image-generation app: concerns regarding bias, harassment, privacy, and EU`
  - EN: `Lensa image-generation app: concerns regarding bias, harassment, privacy, and EU`
- **identical_de_en** @ `sources[2].title`
  - DE: `Users Complain That Lensa AI Selfie Generator is 'Sexualizing' Their Photos`
  - EN: `Users Complain That Lensa AI Selfie Generator is 'Sexualizing' Their Photos`
- **identical_de_en** @ `sources[3].title`
  - DE: `Trendy Portrait App Lensa Is Accused of Creating Nonconsensual Nudes, Child Abus`
  - EN: `Trendy Portrait App Lensa Is Accused of Creating Nonconsensual Nudes, Child Abus`

### usa-mata-avianca-chatgpt-fake-zitate.json

- **identical_de_en** @ `location.name`
  - DE: `New York City, USA (U.S. District Court SDNY)`
  - EN: `New York City, USA (U.S. District Court SDNY)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Lawyer apologizes for fake court citations from ChatGPT`
  - EN: `Lawyer apologizes for fake court citations from ChatGPT`
- **identical_de_en** @ `sources[1].title`
  - DE: `Judge sanctions lawyers for brief written by A.I. with fake citations`
  - EN: `Judge sanctions lawyers for brief written by A.I. with fake citations`
- **identical_de_en** @ `sources[2].title`
  - DE: `MATA v. AVIANCA INC (2023) (court ruling, full text)`
  - EN: `MATA v. AVIANCA INC (2023) (court ruling, full text)`
- **identical_de_en** @ `sources[3].title`
  - DE: `Practical Lessons from the Attorney AI Missteps in Mata v. Avianca`
  - EN: `Practical Lessons from the Attorney AI Missteps in Mata v. Avianca`
- **identical_de_en** @ `sources[4].title`
  - DE: `Update on the ChatGPT Case: Counsel Who Submitted Fake Cases Are Sanctioned`
  - EN: `Update on the ChatGPT Case: Counsel Who Submitted Fake Cases Are Sanctioned`

### usa-maui-feuer-ki-desinformation-china-russland-2023.json

- **identical_de_en** @ `location.name`
  - DE: `Lahaina, Maui, Hawaii, USA`
  - EN: `Lahaina, Maui, Hawaii, USA`
- **identical_de_en** @ `actors[2].name`
  - DE: `Microsoft Threat Analysis Center (MTAC)`
  - EN: `Microsoft Threat Analysis Center (MTAC)`
- **german_leakage_german-word** @ `timeline[0].description`
  - DE: `Am 8. August 2023 entzünden Hurrikan-Dora-induzierte Trockenheit und ein vermutl`
  - EN: `On August 8, 2023 hurricane-Dora-induced drought and a likely power-line spark i`
- **identical_de_en** @ `sources[0].title`
  - DE: `Researchers: Disinformation campaign spread after wildfires slowed disaster resp`
  - EN: `Researchers: Disinformation campaign spread after wildfires slowed disaster resp`
- **identical_de_en** @ `sources[1].title`
  - DE: `How rumors and conspiracy theories got in the way of Maui's fire recovery`
  - EN: `How rumors and conspiracy theories got in the way of Maui's fire recovery`
- **identical_de_en** @ `sources[2].title`
  - DE: `China sows disinformation about Hawaii fires using new techniques`
  - EN: `China sows disinformation about Hawaii fires using new techniques`
- **identical_de_en** @ `sources[3].title`
  - DE: `Hirono Highlights Spread of Disinformation by Foreign Entities in Wake of Maui W`
  - EN: `Hirono Highlights Spread of Disinformation by Foreign Entities in Wake of Maui W`
- **identical_de_en** @ `sources[4].title`
  - DE: `Hirono raises concern about Maui wildfire disinformation`
  - EN: `Hirono raises concern about Maui wildfire disinformation`

### usa-meta-ki-mental-health-teens.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Attorney General James and Multistate Coalition Sue Meta for Harming Youth`
  - EN: `Attorney General James and Multistate Coalition Sue Meta for Harming Youth`
- **identical_de_en** @ `sources[1].title`
  - DE: `States sue Meta, claiming Instagram, Facebook fueled youth mental health crisis`
  - EN: `States sue Meta, claiming Instagram, Facebook fueled youth mental health crisis`
- **identical_de_en** @ `sources[2].title`
  - DE: `41 states sue Meta, claiming Instagram, Facebook are addictive, harm kids`
  - EN: `41 states sue Meta, claiming Instagram, Facebook are addictive, harm kids`
- **identical_de_en** @ `sources[3].title`
  - DE: `AG Miyares Files Lawsuit Against Meta for Harming Youth Mental Health`
  - EN: `AG Miyares Files Lawsuit Against Meta for Harming Youth Mental Health`

### usa-meta-whatsapp-nso-group-pegasus-verurteilung.json

- **identical_de_en** @ `actors[0].name`
  - DE: `NSO Group (Israel)`
  - EN: `NSO Group (Israel)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Global: Ruling against NSO Group in WhatsApp case a 'momentous win in fight agai`
  - EN: `Global: Ruling against NSO Group in WhatsApp case a 'momentous win in fight agai`
- **identical_de_en** @ `sources[1].title`
  - DE: `Pegasus spyware maker NSO must pay $167M in WhatsApp lawsuit`
  - EN: `Pegasus spyware maker NSO must pay $167M in WhatsApp lawsuit`
- **identical_de_en** @ `sources[2].title`
  - DE: `Meta and WhatsApp awarded $168 million in damages following spyware trial`
  - EN: `Meta and WhatsApp awarded $168 million in damages following spyware trial`
- **identical_de_en** @ `sources[3].title`
  - DE: `US Court Bans NSO Group from WhatsApp, Fines $4M+`
  - EN: `US Court Bans NSO Group from WhatsApp, Fines $4M+`
- **identical_de_en** @ `sources[4].title`
  - DE: `NSO Fined $168 Million for Pegasus Spyware Attack on WhatsApp`
  - EN: `NSO Fined $168 Million for Pegasus Spyware Attack on WhatsApp`

### usa-microsoft-bing-ki-desinformation.json

- **identical_de_en** @ `location.name`
  - DE: `Redmond, Washington, USA`
  - EN: `Redmond, Washington, USA`
- **identical_de_en** @ `sources[0].title`
  - DE: `Microsoft's Bing is an emotionally manipulative liar, and people love it`
  - EN: `Microsoft's Bing is an emotionally manipulative liar, and people love it`

### usa-microsoft-recall-ki-screenshot-privacy-debakel.json

- **identical_de_en** @ `location.name`
  - DE: `Redmond, Washington, USA (Microsoft HQ); global (Copilot+ PCs)`
  - EN: `Redmond, Washington, USA (Microsoft HQ); global (Copilot+ PCs)`
- **identical_de_en** @ `actors[0].name`
  - DE: `Microsoft Corporation`
  - EN: `Microsoft Corporation`
- **identical_de_en** @ `actors[3].name`
  - DE: `Dr. Kris Shrishak (Irish Council for Civil Liberties)`
  - EN: `Dr. Kris Shrishak (Irish Council for Civil Liberties)`
- **identical_de_en** @ `actors[4].name`
  - DE: `Information Commissioner's Office (ICO, UK)`
  - EN: `Information Commissioner's Office (ICO, UK)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Microsoft to delay launch of AI Recall tool due to security concerns`
  - EN: `Microsoft to delay launch of AI Recall tool due to security concerns`
- **identical_de_en** @ `sources[1].title`
  - DE: `Why Microsoft's New AI Feature Has Prompted Privacy Concerns`
  - EN: `Why Microsoft's New AI Feature Has Prompted Privacy Concerns`
- **identical_de_en** @ `sources[2].title`
  - DE: `Microsoft Windows Users: Beware This Growing Privacy Threat on Your Computer`
  - EN: `Microsoft Windows Users: Beware This Growing Privacy Threat on Your Computer`
- **identical_de_en** @ `sources[3].title`
  - DE: `Microsoft to Reintroduce AI Tool 'Recall' with Enhanced Privacy Measures`
  - EN: `Microsoft to Reintroduce AI Tool 'Recall' with Enhanced Privacy Measures`
- **identical_de_en** @ `sources[4].title`
  - DE: `Microsoft Recall is gradually rolling out — will new privacy features get you to`
  - EN: `Microsoft Recall is gradually rolling out — will new privacy features get you to`

### usa-naacp-xai-memphis-colossus.json

- **identical_de_en** @ `location.name`
  - DE: `Memphis, Tennessee / Southaven, Mississippi, USA`
  - EN: `Memphis, Tennessee / Southaven, Mississippi, USA`
- **identical_de_en** @ `actors[4].name`
  - DE: `Southern Environmental Law Center`
  - EN: `Southern Environmental Law Center`
- **identical_de_en** @ `sources[0].title`
  - DE: `NAACP sues Elon Musk's xAI over Memphis data center air pollution`
  - EN: `NAACP sues Elon Musk's xAI over Memphis data center air pollution`
- **identical_de_en** @ `sources[1].title`
  - DE: `Civil rights group sues xAI for illegal pollution from data center power plant`
  - EN: `Civil rights group sues xAI for illegal pollution from data center power plant`
- **identical_de_en** @ `sources[2].title`
  - DE: `Illegal Pollution from Data Center Power Plants Shouldn't Harm Our Communities. `
  - EN: `Illegal Pollution from Data Center Power Plants Shouldn't Harm Our Communities. `
- **identical_de_en** @ `sources[3].title`
  - DE: `NAACP Asks Court for Emergency Action to Stop Illegal Air Pollution from xAI's D`
  - EN: `NAACP Asks Court for Emergency Action to Stop Illegal Air Pollution from xAI's D`
- **identical_de_en** @ `sources[4].title`
  - DE: `"Colossus Failure": Elon Musk's Data Centers Face Lawsuit for Polluting Black Ne`
  - EN: `"Colossus Failure": Elon Musk's Data Centers Face Lawsuit for Polluting Black Ne`

### usa-nypd-domain-awareness.json

- **german_leakage_german-word** @ `description`
  - DE: `Das New York Police Department betreibt mit dem Domain Awareness System (DAS) ei`
  - EN: `With its Domain Awareness System (DAS), the New York Police Department operates `
- **identical_de_en** @ `location.name`
  - DE: `New York City, USA`
  - EN: `New York City, USA`
- **identical_de_en** @ `actors[0].name`
  - DE: `New York Police Department (NYPD)`
  - EN: `New York Police Department (NYPD)`
- **identical_de_en** @ `actors[1].name`
  - DE: `Microsoft Corporation`
  - EN: `Microsoft Corporation`
- **identical_de_en** @ `actors[2].name`
  - DE: `Amnesty International`
  - EN: `Amnesty International`
- **german_leakage_german-word** @ `timeline[1].description`
  - DE: `NYPD integriert Gesichtserkennung in das DAS. Fotos aus Überwachungskameras werd`
  - EN: `NYPD integrates facial recognition into DAS. Photos from surveillance cameras ar`
- **german_leakage_german-word** @ `timeline[3].description`
  - DE: `Der POST Act verpflichtet NYPD erstmals, Informationen über eingesetzte Überwach`
  - EN: `The POST Act requires NYPD for the first time to disclose information about the `
- **identical_de_en** @ `sources[0].title`
  - DE: `Ban the Scan: New York City`
  - EN: `Ban the Scan: New York City`

### usa-openai-copyrights-autoren.json

- **identical_de_en** @ `sources[0].title`
  - DE: `The Atlantic: The Secret Sauce of ChatGPT Training Data`
  - EN: `The Atlantic: The Secret Sauce of ChatGPT Training Data`

### usa-openai-sora2-deepfake-launch-abschaltung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `OpenAI cracks down on Sora 2 deepfakes after pressure from Bryan Cranston, SAG-A`
  - EN: `OpenAI cracks down on Sora 2 deepfakes after pressure from Bryan Cranston, SAG-A`
- **identical_de_en** @ `sources[1].title`
  - DE: `Advocacy group calls on OpenAI to address Sora 2's deepfake risks`
  - EN: `Advocacy group calls on OpenAI to address Sora 2's deepfake risks`
- **identical_de_en** @ `sources[2].title`
  - DE: `Sora 2 Bans Celebrity Deepfakes — but People Found a Loophole`
  - EN: `Sora 2 Bans Celebrity Deepfakes — but People Found a Loophole`
- **identical_de_en** @ `sources[3].title`
  - DE: `OpenAI pulls the plug on Sora, the viral AI video app that sparked deepfake conc`
  - EN: `OpenAI pulls the plug on Sora, the viral AI video app that sparked deepfake conc`
- **identical_de_en** @ `sources[4].title`
  - DE: `Watchdog Urges OpenAI to Pull Sora 2 Over Risks`
  - EN: `Watchdog Urges OpenAI to Pull Sora 2 Over Risks`

### usa-openai-studio-ghibli-stilkopie-2025.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Studio Ghibli / Hayao Miyazaki`
  - EN: `Studio Ghibli / Hayao Miyazaki`
- **identical_de_en** @ `sources[0].title`
  - DE: `OpenAI's Studio Ghibli-style images renew the debate over AI and copyright`
  - EN: `OpenAI's Studio Ghibli-style images renew the debate over AI and copyright`
- **identical_de_en** @ `sources[1].title`
  - DE: `ChatGPT's Studio Ghibli-style images show its creative power – but raise new cop`
  - EN: `ChatGPT's Studio Ghibli-style images show its creative power – but raise new cop`
- **identical_de_en** @ `sources[2].title`
  - DE: `ChatGPT's Studio Ghibli-style images are no laughing matter`
  - EN: `ChatGPT's Studio Ghibli-style images are no laughing matter`
- **identical_de_en** @ `sources[3].title`
  - DE: `The backlash against ChatGPT's Studio Ghibli filter`
  - EN: `The backlash against ChatGPT's Studio Ghibli filter`

### usa-openai-superalignment-aufloesung-sutskever-leike.json

- **identical_de_en** @ `sources[0].title`
  - DE: `OpenAI dissolves Superalignment AI safety team`
  - EN: `OpenAI dissolves Superalignment AI safety team`
- **identical_de_en** @ `sources[1].title`
  - DE: `OpenAI Dissolves Key Safety Team After Chief Scientist Ilya Sutskever's Exit`
  - EN: `OpenAI Dissolves Key Safety Team After Chief Scientist Ilya Sutskever's Exit`
- **identical_de_en** @ `sources[2].title`
  - DE: `Top OpenAI researcher resigns, saying company prioritized 'shiny products' over `
  - EN: `Top OpenAI researcher resigns, saying company prioritized 'shiny products' over `
- **identical_de_en** @ `sources[3].title`
  - DE: `More OpenAI drama: Exec quits over concerns about focus on profit over safety`
  - EN: `More OpenAI drama: Exec quits over concerns about focus on profit over safety`
- **identical_de_en** @ `sources[4].title`
  - DE: `OpenAI's long-term safety team has disbanded`
  - EN: `OpenAI's long-term safety team has disbanded`

### usa-openai-whisper-medizin-halluzinationen-nabla.json

- **identical_de_en** @ `sources[0].title`
  - DE: `OpenAI's Whisper transcription tool has hallucination issues, researchers say`
  - EN: `OpenAI's Whisper transcription tool has hallucination issues, researchers say`
- **identical_de_en** @ `sources[1].title`
  - DE: `OpenAI's transcription tool hallucinates more than any other, experts say — but `
  - EN: `OpenAI's transcription tool hallucinates more than any other, experts say — but `
- **identical_de_en** @ `sources[2].title`
  - DE: `AI Model Used By Hospitals Caught Making Up Details About Patients, Inventing No`
  - EN: `AI Model Used By Hospitals Caught Making Up Details About Patients, Inventing No`
- **identical_de_en** @ `sources[3].title`
  - DE: `OpenAI's transcription tool Whisper makes up words patients have never said`
  - EN: `OpenAI's transcription tool Whisper makes up words patients have never said`
- **identical_de_en** @ `sources[4].title`
  - DE: `Investigation of Whisper ASR Hallucinations Induced by Non-Speech Audio`
  - EN: `Investigation of Whisper ASR Hallucinations Induced by Non-Speech Audio`

### usa-palantir-gotham-militaer.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Palantir Technologies`
  - EN: `Palantir Technologies`
- **identical_de_en** @ `sources[0].title`
  - DE: `Palantir Technologies`
  - EN: `Palantir Technologies`
- **identical_de_en** @ `sources[1].title`
  - DE: `Gotham — Defense Decision Making Platform`
  - EN: `Gotham — Defense Decision Making Platform`
- **identical_de_en** @ `sources[2].title`
  - DE: `Palantir, the Secretive Tech Giant Shaping Ukraine's War Effort`
  - EN: `Palantir, the Secretive Tech Giant Shaping Ukraine's War Effort`
- **identical_de_en** @ `sources[3].title`
  - DE: `Military AI: Ukraine shares data for autonomous weapons and Palantir's role`
  - EN: `Military AI: Ukraine shares data for autonomous weapons and Palantir's role`

### usa-predictive-policing-chicago.json

- **identical_de_en** @ `location.name`
  - DE: `Chicago, Illinois, USA`
  - EN: `Chicago, Illinois, USA`
- **identical_de_en** @ `actors[0].name`
  - DE: `Chicago Police Department`
  - EN: `Chicago Police Department`
- **identical_de_en** @ `actors[1].name`
  - DE: `Illinois Institute of Technology`
  - EN: `Illinois Institute of Technology`
- **identical_de_en** @ `sources[0].title`
  - DE: `Risk, race, and predictive policing: A critical race theory analysis of the stra`
  - EN: `Risk, race, and predictive policing: A critical race theory analysis of the stra`
- **identical_de_en** @ `sources[1].title`
  - DE: `Predictive Policing Explained`
  - EN: `Predictive Policing Explained`
- **identical_de_en** @ `sources[2].title`
  - DE: `The Real Minority Report: Predictive Policing Algorithms Reflect Racial Bias`
  - EN: `The Real Minority Report: Predictive Policing Algorithms Reflect Racial Bias`
- **identical_de_en** @ `sources[3].title`
  - DE: `Predictive Policing and the Long Road to Transparency`
  - EN: `Predictive Policing and the Long Road to Transparency`
- **identical_de_en** @ `sources[4].title`
  - DE: `Challenging Racist Predictive Policing Algorithms Under the Equal Protection Cla`
  - EN: `Challenging Racist Predictive Policing Algorithms Under the Equal Protection Cla`

### usa-predpol-la-aufloesung.json

- **identical_de_en** @ `location.name`
  - DE: `Los Angeles, USA`
  - EN: `Los Angeles, USA`
- **identical_de_en** @ `actors[0].name`
  - DE: `LAPD (Los Angeles Police Department)`
  - EN: `LAPD (Los Angeles Police Department)`
- **identical_de_en** @ `actors[1].name`
  - DE: `PredPol / Geolitica`
  - EN: `PredPol / Geolitica`
- **identical_de_en** @ `sources[0].title`
  - DE: `Crime Prediction Software Promised to Be Free of Biases. New Data Shows It Perpe`
  - EN: `Crime Prediction Software Promised to Be Free of Biases. New Data Shows It Perpe`

### usa-proctoring-ki-studenten.json

- **dropped_proper_name** @ `description`
  - DE: `Im Zuge der COVID-19-Pandemie setzten US-amerikanische Hochs`
  - EN: `During the COVID-19 pandemic, U.S. universities deployed AI-`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `Proctoring Apps Subject Students to Unnecessary Surveillance`
  - EN: `Proctoring Apps Subject Students to Unnecessary Surveillance`

### usa-proctorio-honorlock-ki-pruefungsueberwachung.json

- **identical_de_en** @ `location.name`
  - DE: `USA (national) / international (NL, UK, CA)`
  - EN: `USA (national) / international (NL, UK, CA)`
- **identical_de_en** @ `actors[5].name`
  - DE: `EPIC (Electronic Privacy Information Center)`
  - EN: `EPIC (Electronic Privacy Information Center)`
- **identical_de_en** @ `sources[0].title`
  - DE: `EPIC Complaint to FTC re Online Test Proctoring Companies`
  - EN: `EPIC Complaint to FTC re Online Test Proctoring Companies`
- **identical_de_en** @ `sources[1].title`
  - DE: `Judge Rules Schools Can't Scan Your Bedroom With Creepy Proctoring Apps`
  - EN: `Judge Rules Schools Can't Scan Your Bedroom With Creepy Proctoring Apps`
- **identical_de_en** @ `sources[2].title`
  - DE: `AI Proctoring: Academic Integrity vs. Student Rights`
  - EN: `AI Proctoring: Academic Integrity vs. Student Rights`
- **identical_de_en** @ `sources[3].title`
  - DE: `Beyond Surveillance: The Case Against AI Proctoring & AI Detection`
  - EN: `Beyond Surveillance: The Case Against AI Proctoring & AI Detection`
- **identical_de_en** @ `sources[4].title`
  - DE: `Proctoring companies erode trust between students and faculty with claims of wid`
  - EN: `Proctoring companies erode trust between students and faculty with claims of wid`

### usa-racial-bias-healthcare-ki.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Optum (UnitedHealth Group)`
  - EN: `Optum (UnitedHealth Group)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Dissecting racial bias in an algorithm used to manage the health of populations`
  - EN: `Dissecting racial bias in an algorithm used to manage the health of populations`
- **identical_de_en** @ `sources[1].title`
  - DE: `Racial bias in a medical algorithm favors white patients over sicker black patie`
  - EN: `Racial bias in a medical algorithm favors white patients over sicker black patie`
- **identical_de_en** @ `sources[2].title`
  - DE: `Millions of black people affected by racial bias in health-care algorithms`
  - EN: `Millions of black people affected by racial bias in health-care algorithms`
- **identical_de_en** @ `sources[3].title`
  - DE: `Widely used health care prediction algorithm biased against black people`
  - EN: `Widely used health care prediction algorithm biased against black people`

### usa-raine-openai-chatgpt-suizid.json

- **dropped_proper_name** @ `timeline[2].description`
  - DE: `Adam Raine stirbt durch Suizid. In den späteren Klageunterla`
  - EN: `Adam Raine dies by suicide. In the subsequent complaint, the`
  - missing-name: OpenAI
- **identical_de_en** @ `sources[1].title`
  - DE: `Parents of 16-year-old Adam Raine sue OpenAI, claiming ChatGPT advised on his su`
  - EN: `Parents of 16-year-old Adam Raine sue OpenAI, claiming ChatGPT advised on his su`
- **identical_de_en** @ `sources[2].title`
  - DE: `OpenAI denies allegations that ChatGPT is to blame for a teenager's suicide`
  - EN: `OpenAI denies allegations that ChatGPT is to blame for a teenager's suicide`
- **identical_de_en** @ `sources[3].title`
  - DE: `A teen's final weeks with ChatGPT illustrate the AI suicide crisis`
  - EN: `A teen's final weeks with ChatGPT illustrate the AI suicide crisis`
- **identical_de_en** @ `sources[4].title`
  - DE: `ChatGPT encouraged college graduate to commit suicide, family claims in lawsuit `
  - EN: `ChatGPT encouraged college graduate to commit suicide, family claims in lawsuit `

### usa-rekognition-immigration-ice.json

- **identical_de_en** @ `location.name`
  - DE: `Portland, Oregon, USA`
  - EN: `Portland, Oregon, USA`
- **identical_de_en** @ `actors[0].name`
  - DE: `Immigration and Customs Enforcement (ICE)`
  - EN: `Immigration and Customs Enforcement (ICE)`
- **identical_de_en** @ `actors[1].name`
  - DE: `Amazon Web Services`
  - EN: `Amazon Web Services`
- **identical_de_en** @ `sources[0].title`
  - DE: `The Perpetual Line-Up: Unregulated Police Face Recognition in America`
  - EN: `The Perpetual Line-Up: Unregulated Police Face Recognition in America`
- **identical_de_en** @ `sources[1].title`
  - DE: `FBI, ICE find state driver's license photos are a gold mine for facial-recogniti`
  - EN: `FBI, ICE find state driver's license photos are a gold mine for facial-recogniti`
- **identical_de_en** @ `sources[2].title`
  - DE: `We are implementing a one-year moratorium on police use of Rekognition`
  - EN: `We are implementing a one-year moratorium on police use of Rekognition`

### usa-replika-luka-companion-chatbot-belaestigung-ftc.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Luka Inc. (San Francisco)`
  - EN: `Luka Inc. (San Francisco)`
- **identical_de_en** @ `actors[3].name`
  - DE: `U.S. Federal Trade Commission (FTC)`
  - EN: `U.S. Federal Trade Commission (FTC)`
- **identical_de_en** @ `actors[4].name`
  - DE: `Tech Justice Law Project / Young People's Alliance / Encode`
  - EN: `Tech Justice Law Project / Young People's Alliance / Encode`
- **identical_de_en** @ `sources[0].title`
  - DE: `AI: the Italian Supervisory Authority fines company behind chatbot 'Replika'`
  - EN: `AI: the Italian Supervisory Authority fines company behind chatbot 'Replika'`
- **identical_de_en** @ `sources[1].title`
  - DE: `Complaint and Petition for Investigation Re: Replika (FTC complaint, 67 pages)`
  - EN: `Complaint and Petition for Investigation Re: Replika (FTC complaint, 67 pages)`
- **identical_de_en** @ `sources[2].title`
  - DE: `AI Companion App Replika Faces FTC Complaint`
  - EN: `AI Companion App Replika Faces FTC Complaint`
- **identical_de_en** @ `sources[3].title`
  - DE: `What Happens When a Companion Chatbot Crosses the Line?`
  - EN: `What Happens When a Companion Chatbot Crosses the Line?`
- **identical_de_en** @ `sources[4].title`
  - DE: `Senators demand information from AI companion apps in the wake of kids' safety c`
  - EN: `Senators demand information from AI companion apps in the wake of kids' safety c`

### usa-riaa-suno-udio-ki-musik-urheberrecht.json

- **identical_de_en** @ `location.name`
  - DE: `Boston, Massachusetts / New York, USA`
  - EN: `Boston, Massachusetts / New York, USA`
- **identical_de_en** @ `actors[0].name`
  - DE: `Suno, Inc. (Boston)`
  - EN: `Suno, Inc. (Boston)`
- **identical_de_en** @ `actors[1].name`
  - DE: `Uncharted Labs, Inc. (Udio, New York)`
  - EN: `Uncharted Labs, Inc. (Udio, New York)`
- **identical_de_en** @ `actors[2].name`
  - DE: `Recording Industry Association of America (RIAA)`
  - EN: `Recording Industry Association of America (RIAA)`
- **identical_de_en** @ `actors[4].name`
  - DE: `U.S. District Court District of Massachusetts / SDNY`
  - EN: `U.S. District Court District of Massachusetts / SDNY`
- **identical_de_en** @ `sources[0].title`
  - DE: `Record Companies Bring Landmark Cases for Responsible AI Against Suno and Udio i`
  - EN: `Record Companies Bring Landmark Cases for Responsible AI Against Suno and Udio i`
- **identical_de_en** @ `sources[1].title`
  - DE: `Udio Complaint (RIAA, June 24, 2024, full PDF)`
  - EN: `Udio Complaint (RIAA, June 24, 2024, full PDF)`
- **identical_de_en** @ `sources[2].title`
  - DE: `Record Labels Sue AI Music Services Suno and Udio for Copyright Infringement`
  - EN: `Record Labels Sue AI Music Services Suno and Udio for Copyright Infringement`
- **identical_de_en** @ `sources[3].title`
  - DE: `RIAA Sues AI Music Generators For Copyright Infringement`
  - EN: `RIAA Sues AI Music Generators For Copyright Infringement`
- **identical_de_en** @ `sources[4].title`
  - DE: `AI Infringement Case Updates: November 24, 2025`
  - EN: `AI Infringement Case Updates: November 24, 2025`

### usa-ring-polizei-ueberwachung.json

- **identical_de_en** @ `actors[2].name`
  - DE: `Electronic Frontier Foundation (EFF)`
  - EN: `Electronic Frontier Foundation (EFF)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Ring Reveals They Give Videos to Police Without User Consent or a Warrant`
  - EN: `Ring Reveals They Give Videos to Police Without User Consent or a Warrant`

### usa-saferent-tenant-screening-ki-diskriminierung.json

- **identical_de_en** @ `actors[0].name`
  - DE: `SafeRent Solutions LLC`
  - EN: `SafeRent Solutions LLC`
- **identical_de_en** @ `actors[3].name`
  - DE: `U.S. District Court District of Massachusetts / Judge Angel Kelley`
  - EN: `U.S. District Court District of Massachusetts / Judge Angel Kelley`
- **identical_de_en** @ `sources[0].title`
  - DE: `Rental Applicants Win Ground-Breaking Settlement`
  - EN: `Rental Applicants Win Ground-Breaking Settlement`
- **identical_de_en** @ `sources[1].title`
  - DE: `Incident 844: SafeRent AI Screening Tool Allegedly Discriminated Against Housing`
  - EN: `Incident 844: SafeRent AI Screening Tool Allegedly Discriminated Against Housing`
- **identical_de_en** @ `sources[2].title`
  - DE: `Ghosts in the Machine: How Past and Present Biases Haunt Algorithmic Tenant Scre`
  - EN: `Ghosts in the Machine: How Past and Present Biases Haunt Algorithmic Tenant Scre`
- **identical_de_en** @ `sources[3].title`
  - DE: `Class Action Lawsuit on AI-Related Discrimination Reaches Final Settlement`
  - EN: `Class Action Lawsuit on AI-Related Discrimination Reaches Final Settlement`
- **identical_de_en** @ `sources[4].title`
  - DE: `A Powerful Victory Against Discrimination in Tenant Screening`
  - EN: `A Powerful Victory Against Discrimination in Tenant Screening`

### usa-scarlett-johansson-openai-sky-stimme.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Scarlett Johansson wants answers about ChatGPT voice that sounds like 'Her'`
  - EN: `Scarlett Johansson wants answers about ChatGPT voice that sounds like 'Her'`
- **identical_de_en** @ `sources[1].title`
  - DE: `Scarlett Johansson lawyers up over ChatGPT voice that 'shocked and angered' her`
  - EN: `Scarlett Johansson lawyers up over ChatGPT voice that 'shocked and angered' her`
- **identical_de_en** @ `sources[2].title`
  - DE: `Scarlett Johansson says OpenAI copied 'Her' voice after she said no`
  - EN: `Scarlett Johansson says OpenAI copied 'Her' voice after she said no`
- **identical_de_en** @ `sources[3].title`
  - DE: `OpenAI's use of Scarlett Johansson-like voice in ChatGPT exposed gaps in the law`
  - EN: `OpenAI's use of Scarlett Johansson-like voice in ChatGPT exposed gaps in the law`
- **identical_de_en** @ `sources[4].title`
  - DE: `'In disbelief': Scarlett Johansson says lawyers got OpenAI to shut down 'Her' vo`
  - EN: `'In disbelief': Scarlett Johansson says lawyers got OpenAI to shut down 'Her' vo`

### usa-shotspotter-fehlalarme.json

- **identical_de_en** @ `location.name`
  - DE: `Chicago, Illinois, USA`
  - EN: `Chicago, Illinois, USA`
- **identical_de_en** @ `actors[1].name`
  - DE: `Chicago Police Department`
  - EN: `Chicago Police Department`
- **identical_de_en** @ `sources[0].title`
  - DE: `Class Action Lawsuit Takes Aim at Chicago's Use of ShotSpotter After Unfounded A`
  - EN: `Class Action Lawsuit Takes Aim at Chicago's Use of ShotSpotter After Unfounded A`
- **identical_de_en** @ `sources[1].title`
  - DE: `ShotSpotter Generated Over 40,000 Dead-End Police Deployments in Chicago in 21 M`
  - EN: `ShotSpotter Generated Over 40,000 Dead-End Police Deployments in Chicago in 21 M`
- **identical_de_en** @ `sources[2].title`
  - DE: `City's watchdog finds ShotSpotter rarely leads to evidence of gun crimes`
  - EN: `City's watchdog finds ShotSpotter rarely leads to evidence of gun crimes`
- **identical_de_en** @ `sources[3].title`
  - DE: `Lawsuit Alleges Chicago Police Made False Arrests Based on Faulty ShotSpotter Al`
  - EN: `Lawsuit Alleges Chicago Police Made False Arrests Based on Faulty ShotSpotter Al`

### usa-social-media-kinderschutz-ueberwachung.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Kids Online Safety Act Continues to Threaten Our Rights Online: 2024 in Review`
  - EN: `Kids Online Safety Act Continues to Threaten Our Rights Online: 2024 in Review`
- **identical_de_en** @ `sources[1].title`
  - DE: `ACLU Slams Senate Passage of Kids Online Safety Act, Urges House to Protect Free`
  - EN: `ACLU Slams Senate Passage of Kids Online Safety Act, Urges House to Protect Free`
- **identical_de_en** @ `sources[2].title`
  - DE: `Kids Online Safety Act`
  - EN: `Kids Online Safety Act`
- **identical_de_en** @ `sources[3].title`
  - DE: `What to Know About the Kids Online Safety Act`
  - EN: `What to Know About the Kids Online Safety Act`

### usa-stability-ai-urheberrecht.json

- **identical_de_en** @ `location.name`
  - DE: `San Francisco, USA`
  - EN: `San Francisco, USA`
- **identical_de_en** @ `sources[0].title`
  - DE: `Getty Images sues Stability AI for scraping its photos to train AI art`
  - EN: `Getty Images sues Stability AI for scraping its photos to train AI art`
- **identical_de_en** @ `sources[1].title`
  - DE: `AI and Copyright`
  - EN: `AI and Copyright`
- **identical_de_en** @ `sources[2].title`
  - DE: `LAION-5B: A new era of open large-scale multi-modal datasets`
  - EN: `LAION-5B: A new era of open large-scale multi-modal datasets`

### usa-stargate-500-mrd-ki-infrastruktur-trump.json

- **identical_de_en** @ `actors[1].name`
  - DE: `OpenAI / Sam Altman`
  - EN: `OpenAI / Sam Altman`
- **identical_de_en** @ `actors[2].name`
  - DE: `Oracle / Larry Ellison`
  - EN: `Oracle / Larry Ellison`
- **identical_de_en** @ `sources[0].title`
  - DE: `Announcing The Stargate Project`
  - EN: `Announcing The Stargate Project`
- **identical_de_en** @ `sources[1].title`
  - DE: `Stargate: Trump announces a $500 billion AI infrastructure investment in the US`
  - EN: `Stargate: Trump announces a $500 billion AI infrastructure investment in the US`
- **identical_de_en** @ `sources[3].title`
  - DE: `OpenAI, Oracle, and SoftBank expand Stargate with five new AI data center sites`
  - EN: `OpenAI, Oracle, and SoftBank expand Stargate with five new AI data center sites`
- **identical_de_en** @ `sources[4].title`
  - DE: `Stargate's $500 billion AI infrastructure project reportedly stalls over unresol`
  - EN: `Stargate's $500 billion AI infrastructure project reportedly stalls over unresol`

### usa-stingray-massenueberwachung.json

- **identical_de_en** @ `location.name`
  - DE: `Baltimore, Maryland, USA`
  - EN: `Baltimore, Maryland, USA`
- **identical_de_en** @ `actors[0].name`
  - DE: `Baltimore Police Department`
  - EN: `Baltimore Police Department`
- **identical_de_en** @ `actors[1].name`
  - DE: `FBI (Federal Bureau of Investigation)`
  - EN: `FBI (Federal Bureau of Investigation)`
- **identical_de_en** @ `actors[2].name`
  - DE: `Harris Corporation`
  - EN: `Harris Corporation`
- **identical_de_en** @ `sources[0].title`
  - DE: `Stingray Tracking Devices: Who's Got Them?`
  - EN: `Stingray Tracking Devices: Who's Got Them?`

### usa-suchir-balaji-openai-whistleblower-tod.json

- **identical_de_en** @ `actors[2].name`
  - DE: `San Francisco Police Department`
  - EN: `San Francisco Police Department`
- **identical_de_en** @ `sources[1].title`
  - DE: `OpenAI whistleblower who raised legal concerns about ChatGPT's datasets has died`
  - EN: `OpenAI whistleblower who raised legal concerns about ChatGPT's datasets has died`
- **identical_de_en** @ `sources[2].title`
  - DE: `OpenAI whistleblower Suchir Balaji dead at age 26; family seeks answers as death`
  - EN: `OpenAI whistleblower Suchir Balaji dead at age 26; family seeks answers as death`
- **identical_de_en** @ `sources[3].title`
  - DE: `Parents sue apartment complex over death of OpenAI whistleblower`
  - EN: `Parents sue apartment complex over death of OpenAI whistleblower`

### usa-taylor-swift-deepfake-x-twitter.json

- **dropped_proper_name** @ `description`
  - DE: `Am 24. Januar 2024 verbreiten sich auf X (ehemals Twitter) K`
  - EN: `On January 24, 2024, AI-generated sexually explicit deepfake`
  - missing-name: EU
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `US-Senatorinnen Klobuchar (D), Hawley (R), Coons (D) und Bla`
  - EN: `U.S. Senators Klobuchar (D), Hawley (R), Coons (D), and Blac`
  - missing-name: EU
- **identical_de_en** @ `sources[0].title`
  - DE: `Taylor Swift deepfake pornography controversy`
  - EN: `Taylor Swift deepfake pornography controversy`
- **identical_de_en** @ `sources[1].title`
  - DE: `Taylor Swift Searches Are Blocked On X/Twitter. Here's Why`
  - EN: `Taylor Swift Searches Are Blocked On X/Twitter. Here's Why`
- **identical_de_en** @ `sources[2].title`
  - DE: `Taylor Swift and the Dangers of Deepfake Pornography`
  - EN: `Taylor Swift and the Dangers of Deepfake Pornography`
- **identical_de_en** @ `sources[3].title`
  - DE: `Taylor Swift, Deepfakes, and the First Amendment: Changing the Legal Landscape f`
  - EN: `Taylor Swift, Deepfakes, and the First Amendment: Changing the Legal Landscape f`

### usa-tech-konzerne-ice-zusammenarbeit.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Palantir Technologies`
  - EN: `Palantir Technologies`
- **identical_de_en** @ `actors[1].name`
  - DE: `Amazon Web Services (AWS)`
  - EN: `Amazon Web Services (AWS)`
- **identical_de_en** @ `actors[3].name`
  - DE: `Immigration and Customs Enforcement (ICE)`
  - EN: `Immigration and Customs Enforcement (ICE)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Amazon: Stop Powering ICE's Deportation Machine`
  - EN: `Amazon: Stop Powering ICE's Deportation Machine`
- **identical_de_en** @ `sources[1].title`
  - DE: `Palantir granted $30 million to build 'ImmigrationOS' surveillance platform for `
  - EN: `Palantir granted $30 million to build 'ImmigrationOS' surveillance platform for `
- **identical_de_en** @ `sources[2].title`
  - DE: `Amazon Employees Demand It Stop Working With ICE`
  - EN: `Amazon Employees Demand It Stop Working With ICE`
- **identical_de_en** @ `sources[3].title`
  - DE: `Meet the billionaire oligarchs and corporations enabling ICE's deportation machi`
  - EN: `Meet the billionaire oligarchs and corporations enabling ICE's deportation machi`

### usa-tesla-autopilot-todesfaelle.json

- **identical_de_en** @ `actors[1].name`
  - DE: `NHTSA (National Highway Traffic Safety Administration)`
  - EN: `NHTSA (National Highway Traffic Safety Administration)`
- **identical_de_en** @ `sources[0].title`
  - DE: `List of Tesla Autopilot crashes`
  - EN: `List of Tesla Autopilot crashes`
- **identical_de_en** @ `sources[1].title`
  - DE: `NHTSA Investigation EA22002 — Tesla Autopilot Crashes Report`
  - EN: `NHTSA Investigation EA22002 — Tesla Autopilot Crashes Report`
- **identical_de_en** @ `sources[2].title`
  - DE: `U.S. opens new investigation into Tesla's 'Full Self-Driving' system after fatal`
  - EN: `U.S. opens new investigation into Tesla's 'Full Self-Driving' system after fatal`
- **identical_de_en** @ `sources[3].title`
  - DE: `Tesla recalls 2 million vehicles to fix autopilot safety system`
  - EN: `Tesla recalls 2 million vehicles to fix autopilot safety system`

### usa-tiktok-daten-china.json

- **identical_de_en** @ `actors[0].name`
  - DE: `ByteDance / TikTok`
  - EN: `ByteDance / TikTok`
- **identical_de_en** @ `sources[0].title`
  - DE: `Leaked Audio From 80 Internal TikTok Meetings Shows China Had Access to US Data`
  - EN: `Leaked Audio From 80 Internal TikTok Meetings Shows China Had Access to US Data`

### usa-trump-ice-cecot-deportationen-venezolaner-2025.json

- **identical_de_en** @ `actors[1].name`
  - DE: `U.S. Immigration and Customs Enforcement (ICE)`
  - EN: `U.S. Immigration and Customs Enforcement (ICE)`
- **identical_de_en** @ `actors[7].name`
  - DE: `U.S. Supreme Court / Federal District Courts`
  - EN: `U.S. Supreme Court / Federal District Courts`
- **identical_de_en** @ `sources[0].title`
  - DE: `March 2025 American deportations of Venezuelans`
  - EN: `March 2025 American deportations of Venezuelans`
- **identical_de_en** @ `sources[1].title`
  - DE: `Inside Donald Trump's Mass-Deportation Operation`
  - EN: `Inside Donald Trump's Mass-Deportation Operation`
- **identical_de_en** @ `sources[2].title`
  - DE: `Venezuelan Men Sent to CECOT on What They Endured and Reuniting With Their Famil`
  - EN: `Venezuelan Men Sent to CECOT on What They Endured and Reuniting With Their Famil`
- **identical_de_en** @ `sources[3].title`
  - DE: `Venezuelan migrant sues Trump administration over deportation to notorious CECOT`
  - EN: `Venezuelan migrant sues Trump administration over deportation to notorious CECOT`
- **identical_de_en** @ `sources[4].title`
  - DE: `Mass Deportation: Analyzing the Trump Administration's Attacks on Immigrants, De`
  - EN: `Mass Deportation: Analyzing the Trump Administration's Attacks on Immigrants, De`

### usa-twitter-ki-algorithmischer-bias.json

- **identical_de_en** @ `location.name`
  - DE: `San Francisco, USA`
  - EN: `San Francisco, USA`
- **identical_de_en** @ `sources[0].title`
  - DE: `Examining algorithmic amplification of political content on Twitter`
  - EN: `Examining algorithmic amplification of political content on Twitter`

### usa-uber-lyft-gig-worker-algorithmus.json

- **german_leakage_german-word** @ `description`
  - DE: `Uber und Lyft setzen undurchsichtige Algorithmen ein, die Löhne von Fahrern dyna`
  - EN: `Uber and Lyft use opaque algorithms that dynamically manipulate drivers' pay, tr`
- **identical_de_en** @ `actors[0].name`
  - DE: `Uber Technologies`
  - EN: `Uber Technologies`
- **german_leakage_german-word** @ `timeline[0].description`
  - DE: `Rechtswissenschaftlerin Veena Dubal (UC Hastings) beginnt umfangreiche Untersuch`
  - EN: `Legal scholar Veena Dubal (UC Hastings) begins extensive research on algorithmic`
- **identical_de_en** @ `sources[0].title`
  - DE: `Exposing the Rideshare Industry's Misleading Wage Claims`
  - EN: `Exposing the Rideshare Industry's Misleading Wage Claims`
- **identical_de_en** @ `sources[1].title`
  - DE: `Uber and Lyft's Fight Over Proposition 22 Isn't Over. It's Just Heating Up.`
  - EN: `Uber and Lyft's Fight Over Proposition 22 Isn't Over. It's Just Heating Up.`
- **identical_de_en** @ `sources[2].title`
  - DE: `Uber and the labor market: Uber drivers' compensation, wages, and the scale of U`
  - EN: `Uber and the labor market: Uber drivers' compensation, wages, and the scale of U`

### usa-unitedhealth-nhpredict-medicare-ablehnungen.json

- **identical_de_en** @ `location.name`
  - DE: `Minnesota / USA (national)`
  - EN: `Minnesota / USA (national)`
- **identical_de_en** @ `actors[0].name`
  - DE: `UnitedHealth Group`
  - EN: `UnitedHealth Group`
- **identical_de_en** @ `actors[2].name`
  - DE: `U.S. Senate Permanent Subcommittee on Investigations`
  - EN: `U.S. Senate Permanent Subcommittee on Investigations`
- **identical_de_en** @ `actors[3].name`
  - DE: `U.S. District Court District of Minnesota`
  - EN: `U.S. District Court District of Minnesota`
- **identical_de_en** @ `sources[0].title`
  - DE: `UnitedHealth uses faulty AI to deny elderly patients medically necessary coverag`
  - EN: `UnitedHealth uses faulty AI to deny elderly patients medically necessary coverag`
- **identical_de_en** @ `sources[1].title`
  - DE: `UnitedHealth Group's 'Flawed' AI Model Wrongfully Denies Elderly Patients Post-A`
  - EN: `UnitedHealth Group's 'Flawed' AI Model Wrongfully Denies Elderly Patients Post-A`
- **identical_de_en** @ `sources[2].title`
  - DE: `Federal Court Orders Broad Discovery Against UHC in AI Coverage Denial Lawsuit`
  - EN: `Federal Court Orders Broad Discovery Against UHC in AI Coverage Denial Lawsuit`
- **identical_de_en** @ `sources[3].title`
  - DE: `Class action lawsuit against UnitedHealth's AI claim denials advances`
  - EN: `Class action lawsuit against UnitedHealth's AI claim denials advances`
- **identical_de_en** @ `sources[4].title`
  - DE: `How insurance companies use AI to deny claims`
  - EN: `How insurance companies use AI to deny claims`

### usa-waymo-cruise-autonome-unfaelle.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Cruise / General Motors`
  - EN: `Cruise / General Motors`
- **identical_de_en** @ `actors[1].name`
  - DE: `Waymo / Alphabet`
  - EN: `Waymo / Alphabet`
- **identical_de_en** @ `sources[0].title`
  - DE: `DMV Suspends Cruise LLC's Autonomous Vehicle Deployment and Driverless Testing P`
  - EN: `DMV Suspends Cruise LLC's Autonomous Vehicle Deployment and Driverless Testing P`
- **identical_de_en** @ `sources[1].title`
  - DE: `Cruise to Pause Driverless Cars in California After Suspension of License`
  - EN: `Cruise to Pause Driverless Cars in California After Suspension of License`
- **identical_de_en** @ `sources[2].title`
  - DE: `GM's Cruise recalls self-driving software after pedestrian incident`
  - EN: `GM's Cruise recalls self-driving software after pedestrian incident`
- **identical_de_en** @ `sources[3].title`
  - DE: `NHTSA Opens Investigation into Cruise Autonomous Vehicles`
  - EN: `NHTSA Opens Investigation into Cruise Autonomous Vehicles`

### usa-waymo-santa-monica-kind-2026.json

- **identical_de_en** @ `actors[0].name`
  - DE: `Waymo (Alphabet / Google)`
  - EN: `Waymo (Alphabet / Google)`
- **identical_de_en** @ `actors[1].name`
  - DE: `National Highway Traffic Safety Administration (NHTSA)`
  - EN: `National Highway Traffic Safety Administration (NHTSA)`
- **identical_de_en** @ `actors[2].name`
  - DE: `Grant Elementary School (Santa Monica)`
  - EN: `Grant Elementary School (Santa Monica)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Waymo robotaxi hits child at school drop-off, triggering safety inquiry`
  - EN: `Waymo robotaxi hits child at school drop-off, triggering safety inquiry`
- **identical_de_en** @ `sources[1].title`
  - DE: `Waymo faces federal scrutiny after child is struck near Santa Monica school`
  - EN: `Waymo faces federal scrutiny after child is struck near Santa Monica school`
- **identical_de_en** @ `sources[2].title`
  - DE: `NHTSA probes Waymo after its AV struck a child near elementary school`
  - EN: `NHTSA probes Waymo after its AV struck a child near elementary school`
- **identical_de_en** @ `sources[3].title`
  - DE: `Federal probe launched into Waymo crash in Santa Monica school zone`
  - EN: `Federal probe launched into Waymo crash in Santa Monica school zone`

### usa-westfield-nj-schul-deepfake-mani.json

- **identical_de_en** @ `location.name`
  - DE: `Westfield, New Jersey, USA`
  - EN: `Westfield, New Jersey, USA`
- **identical_de_en** @ `actors[1].name`
  - DE: `Westfield Public School District (New Jersey)`
  - EN: `Westfield Public School District (New Jersey)`
- **identical_de_en** @ `sources[0].title`
  - DE: `Incident 597: Female Students at Westfield High School in New Jersey Reportedly `
  - EN: `Incident 597: Female Students at Westfield High School in New Jersey Reportedly `
- **identical_de_en** @ `sources[1].title`
  - DE: `New Jersey high school students accused of making AI-generated pornographic imag`
  - EN: `New Jersey high school students accused of making AI-generated pornographic imag`
- **identical_de_en** @ `sources[2].title`
  - DE: `New Jersey teen sues classmate for allegedly creating, sharing fake AI nudes`
  - EN: `New Jersey teen sues classmate for allegedly creating, sharing fake AI nudes`
- **identical_de_en** @ `sources[3].title`
  - DE: `AI-Generated Deepfake Images: Lawsuit Seeks Justice For Westfield NJ teen victim`
  - EN: `AI-Generated Deepfake Images: Lawsuit Seeks Justice For Westfield NJ teen victim`
- **identical_de_en** @ `sources[4].title`
  - DE: `New Law Regarding Deepfakes Says, "Take It Down"`
  - EN: `New Law Regarding Deepfakes Says, "Take It Down"`

### usa-ziprecruiter-ki-diskriminierung.json

- **identical_de_en** @ `location.name`
  - DE: `Santa Monica, USA`
  - EN: `Santa Monica, USA`
- **dropped_proper_name** @ `timeline[0].description`
  - DE: `HireVue nutzt ein KI-System, das Videointerviews von Bewerbe`
  - EN: `HireVue uses an AI system that automatically scores applican`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `In re HireVue — Complaint, Request for Investigation and Injunction`
  - EN: `In re HireVue — Complaint, Request for Investigation and Injunction`
- **identical_de_en** @ `sources[1].title`
  - DE: `EEOC Guidance on Artificial Intelligence and Equal Employment Opportunity`
  - EN: `EEOC Guidance on Artificial Intelligence and Equal Employment Opportunity`

### usbekistan-ki-smart-city-ueberwachung.json

- **identical_de_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
  - EN: `Huawei Technologies`
- **identical_de_en** @ `sources[0].title`
  - DE: `Freedom in the World: Uzbekistan`
  - EN: `Freedom in the World: Uzbekistan`

### venezuela-patria-ueberwachung.json

- **dropped_proper_name** @ `description`
  - DE: `Venezuela hat mit Unterstutzung von ZTE (China) ein digitale`
  - EN: `With support from ZTE (China), Venezuela has built a digital`
  - missing-name: Uber
- **identical_de_en** @ `location.name`
  - DE: `Caracas, Venezuela`
  - EN: `Caracas, Venezuela`
- **dropped_proper_name** @ `timeline[1].title`
  - DE: `Reuters-Enthullung: ZTE baut Chinas Uberwachungsmodell nach`
  - EN: `Reuters reveals: ZTE replicates China's surveillance model`
  - missing-name: Uber
- **identical_de_en** @ `sources[0].title`
  - DE: `Access Now: Digital Rights in Venezuela`
  - EN: `Access Now: Digital Rights in Venezuela`
- **identical_de_en** @ `sources[1].title`
  - DE: `World Report 2023: Venezuela`
  - EN: `World Report 2023: Venezuela`
- **identical_de_en** @ `sources[2].title`
  - DE: `Freedom in the World 2023: Venezuela`
  - EN: `Freedom in the World 2023: Venezuela`

### vietnam-decree-147-internet-zensur-id-pflicht-2024.json

- **identical_de_en** @ `actors[5].name`
  - DE: `Human Rights Watch / Article 19 / Freedom House / The Vietnamese Magazine`
  - EN: `Human Rights Watch / Article 19 / Freedom House / The Vietnamese Magazine`
- **identical_de_en** @ `sources[0].title`
  - DE: `Vietnam: Repeal Harmful Internet Laws`
  - EN: `Vietnam: Repeal Harmful Internet Laws`
- **identical_de_en** @ `sources[1].title`
  - DE: `New Cybersecurity Decree Imposes More Stringent Control Over Online Activities`
  - EN: `New Cybersecurity Decree Imposes More Stringent Control Over Online Activities`
- **identical_de_en** @ `sources[2].title`
  - DE: `Vietnam: Freedom on the Net 2024 Country Report`
  - EN: `Vietnam: Freedom on the Net 2024 Country Report`
- **identical_de_en** @ `sources[3].title`
  - DE: `Sweeping Vietnam internet law comes into force`
  - EN: `Sweeping Vietnam internet law comes into force`
- **identical_de_en** @ `sources[4].title`
  - DE: `Vietnam cybersecurity law violates freedoms of speech and expression: HRW report`
  - EN: `Vietnam cybersecurity law violates freedoms of speech and expression: HRW report`

### vietnam-ki-zensur-firewall.json

- **identical_de_en** @ `sources[0].title`
  - DE: `Vietnam – Press Freedom Index`
  - EN: `Vietnam – Press Freedom Index`
- **identical_de_en** @ `sources[1].title`
  - DE: `Freedom on the Net 2023: Vietnam`
  - EN: `Freedom on the Net 2023: Vietnam`

### worldcoin-global-iris-scan-verbots-welle-2024-2025.json

- **german_leakage_german-word** @ `timeline[1].description`
  - DE: `Am 24. Juli 2023 launcht Worldcoin global mit der WLD-Token-Emission. Innerhalb `
  - EN: `On July 24, 2023 Worldcoin launches globally with the WLD token emission. Within`
- **identical_de_en** @ `sources[0].title`
  - DE: `Brazil Upholds Ban on Worldcoin's Biometric Data-for-Crypto Program`
  - EN: `Brazil Upholds Ban on Worldcoin's Biometric Data-for-Crypto Program`
- **identical_de_en** @ `sources[1].title`
  - DE: `Brazil bans Worldcoin from giving crypto for eye scans`
  - EN: `Brazil bans Worldcoin from giving crypto for eye scans`
- **identical_de_en** @ `sources[2].title`
  - DE: `US tech embraces Sam Altman's World iris-scan ID banned in places`
  - EN: `US tech embraces Sam Altman's World iris-scan ID banned in places`
- **identical_de_en** @ `sources[3].title`
  - DE: `List of Countries Where Worldcoin is Banned or Investigated`
  - EN: `List of Countries Where Worldcoin is Banned or Investigated`
- **identical_de_en** @ `sources[4].title`
  - DE: `Worldcoin may not be legal in Colombia, but that's not stopping it`
  - EN: `Worldcoin may not be legal in Colombia, but that's not stopping it`

### xinjiang-ueberwachung.json

- **identical_de_en** @ `location.name`
  - DE: `Ürümqi, Xinjiang, China`
  - EN: `Ürümqi, Xinjiang, China`
- **german_leakage_umlaut** @ `location.name`
  - DE: `Ürümqi, Xinjiang, China`
  - EN: `Ürümqi, Xinjiang, China`

