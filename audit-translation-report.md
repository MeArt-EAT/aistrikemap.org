# Audit: Bilinguale Incident-Migration

Datum: 2026-05-27

## Zusammenfassung

- Geprüfte Dateien: **273**
- Saubere Dateien (keine Findings): **0**
- Dateien mit Findings: **273**
- Findings insgesamt: **2817**

## Findings nach Kategorie

- `missing_en`: 2068
- `identical_de_en`: 670
- `dropped_proper_name`: 53
- `german_leakage_german-word`: 21
- `german_leakage_umlaut`: 4
- `length_ratio`: 1

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

- **missing_en** @ `name`
  - DE: `Bosnien: EU-finanzierte Grenzüberwachungstechnologie auf der Balkanroute`
- **missing_en** @ `description`
  - DE: `Bosnien-Herzegowina wurde zur zentralen Durchgangsstation der Balkanroute für Mi`
- **missing_en** @ `location.name`
  - DE: `Bihac, Bosnien-Herzegowina`
- **missing_en** @ `actors[0].name`
  - DE: `Bosnische Grenzpolizei`
- **missing_en** @ `actors[1].name`
  - DE: `EU / Frontex`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Asyl | Recht auf Leben | Schutz vor Folter`
- **missing_en** @ `timeline[0].title`
  - DE: `Balkanroute verlagert sich nach Bosnien`
- **missing_en** @ `timeline[0].description`
  - DE: `Nach der Schliessung der westlichen Balkanroute 2016 verlagert sich die Migratio`
- **missing_en** @ `timeline[1].title`
  - DE: `Überwachungstechnologie koordiniert Pushbacks an der kroatischen Grenze`
- **missing_en** @ `timeline[1].description`
  - DE: `Das Border Violence Monitoring Network beginnt mit der systematischen Dokumentat`
- **missing_en** @ `timeline[2].title`
  - DE: `Winterlager-Krise und dokumentierte Gewalt`
- **missing_en** @ `timeline[2].description`
  - DE: `Im Winter 2020 verbrennt das Lager Lipa bei Bihac. Tausende Migranten überleben `
- **missing_en** @ `timeline[3].title`
  - DE: `Anhaltende Pushbacks trotz EU-Kritik`
- **missing_en** @ `timeline[3].description`
  - DE: `Trotz Berichten des Europäischen Parlaments und des Europarats werden Pushbacks `
- **missing_en** @ `sources[0].title`
  - DE: `Border Violence Monitoring Network Reports`
- **missing_en** @ `sources[1].title`
  - DE: `Bosnia and Herzegovina: Pushbacks and violence at borders`

### brasilien-ki-strafverfolgung.json

- **missing_en** @ `name`
  - DE: `Brasilien: KI-Gesichtserkennung bei Karneval und in Favelas`
- **missing_en** @ `description`
  - DE: `Brasilianische Bundesstaaten setzen seit 2019 KI-gestützte Gesichtserkennung bei`
- **missing_en** @ `location.name`
  - DE: `Salvador / Rio de Janeiro, Brasilien`
- **missing_en** @ `actors[0].name`
  - DE: `Secretaria de Segurança Pública da Bahia`
- **missing_en** @ `actors[1].name`
  - DE: `Polizei von Rio de Janeiro`
- **missing_en** @ `actors[2].name`
  - DE: `Instituto Igarapé`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Schutz vor Diskriminierung | Recht auf Freiheit | Recht auf Privatsphäre`
- **missing_en** @ `timeline[0].title`
  - DE: `Karneval Salvador: Erste Massengesichtserkennung`
- **missing_en** @ `timeline[0].description`
  - DE: `Bahia installiert während des Karnevals in Salvador ein Gesichtserkennungssystem`
- **missing_en** @ `timeline[1].title`
  - DE: `Fehlidentifikationen und rassistischer Bias`
- **missing_en** @ `timeline[1].description`
  - DE: `Erste Fälle von Fehlidentifikationen werden dokumentiert. In Rio de Janeiro wird`
- **missing_en** @ `timeline[2].title`
  - DE: `Ausweitung auf Favelas und öffentlichen Nahverkehr`
- **missing_en** @ `timeline[2].description`
  - DE: `São Paulo, Rio de Janeiro und weitere Städte weiten die Gesichtserkennung auf U-`
- **missing_en** @ `timeline[3].title`
  - DE: `Gesetzesvorschlag für nationales Moratorium`
- **missing_en** @ `timeline[3].description`
  - DE: `Brasilianische Kongressabgeordnete bringen einen Gesetzentwurf für ein Moratoriu`
- **missing_en** @ `sources[0].title`
  - DE: `Brazil turns facial recognition on rioters despite racism fears`
- **missing_en** @ `sources[1].title`
  - DE: `Brazilian Favelas need racial Justice, not Facial Recognition`
- **missing_en** @ `sources[2].title`
  - DE: `Facial Recognition in Brazil: a gender and race-based perspective`
- **missing_en** @ `sources[3].title`
  - DE: `Regulating facial recognition in Latin America: Buenos Aires and São Paulo`

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

- **missing_en** @ `name`
  - DE: `Chile: KI-Überwachung bei sozialen Protesten und Mapuche-Überwachung`
- **missing_en** @ `description`
  - DE: `Während der chilenischen Massenproteste 2019 ('Estallido Social') setzen Sicherh`
- **missing_en** @ `location.name`
  - DE: `Santiago de Chile, Chile`
- **missing_en** @ `actors[0].name`
  - DE: `Carabineros de Chile`
- **missing_en** @ `actors[1].name`
  - DE: `INDH (Instituto Nacional de Derechos Humanos)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Versammlungsfreiheit | Recht auf körperliche Unversehrtheit | Recht auf Privatsphäre`
- **missing_en** @ `timeline[0].title`
  - DE: `Estallido Social: Massenproteste und Überwachung`
- **missing_en** @ `timeline[0].description`
  - DE: `Millionen Chilenen protestieren gegen Ungleichheit. Carabineros setzen Drohnenüb`
- **missing_en** @ `timeline[1].title`
  - DE: `Mapuche-Überwachung wird öffentlich`
- **missing_en** @ `timeline[1].description`
  - DE: `Investigative Berichte enthüllen, dass Carabineros seit Jahren KI-gestützte Über`
- **missing_en** @ `timeline[2].title`
  - DE: `Verfassungsprozess und Debatte über digitale Rechte`
- **missing_en** @ `timeline[2].description`
  - DE: `Der chilenische Verfassungskonvent debattiert erstmals explizite digitale Grundr`
- **missing_en** @ `timeline[3].title`
  - DE: `Straflosigkeit und fortgesetzte Überwachung`
- **missing_en** @ `timeline[3].description`
  - DE: `Trotz über 8.000 dokumentierter Menschenrechtsverletzungen während der Proteste `
- **missing_en** @ `sources[0].title`
  - DE: `World Report 2021: Chile`
- **missing_en** @ `sources[1].title`
  - DE: `Derechos Digitales: Tecnología y derechos humanos en América Latina`

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

- **missing_en** @ `name`
  - DE: `China: KI-gestützte Emotionserkennung und Produktivitätsüberwachung in Fabriken`
- **missing_en** @ `description`
  - DE: `Chinesische Fabrikbetreiber setzen seit 2018 KI-Systeme zur Emotionserkennung un`
- **missing_en** @ `location.name`
  - DE: `Shenzhen, China`
- **missing_en** @ `actors[0].name`
  - DE: `Chinesische Elektronikhersteller (u.a. Foxconn-Zulieferer)`
- **missing_en** @ `actors[1].name`
  - DE: `KI-Startups (u.a. Hikvision, SenseTime, DeepGlint)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Recht auf faire Arbeitsbedingungen | Recht auf körperliche Unversehrtheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Pilotprojekte zur Emotionserkennung starten in Industriezonen`
- **missing_en** @ `timeline[0].description`
  - DE: `Chinesische KI-Unternehmen beginnen, Emotionserkennungssysteme für industrielle `
- **missing_en** @ `timeline[1].title`
  - DE: `Pandemie beschleunigt Ausbau der Fabriküberwachung`
- **missing_en** @ `timeline[1].description`
  - DE: `Unter dem Vorwand der COVID-19-Sicherheitsmassnahmen erweitern Hersteller ihre Ü`
- **missing_en** @ `timeline[2].title`
  - DE: `Flächendeckende Einführung dokumentiert, Arbeiter berichten von Angst`
- **missing_en** @ `timeline[2].description`
  - DE: `Investigativrecherchen von Rest of World und South China Morning Post zeigen, da`
- **missing_en** @ `timeline[3].title`
  - DE: `Kaum rechtliche Konsequenzen, internationale Lieferkettendebatte`
- **missing_en** @ `timeline[3].description`
  - DE: `Chinas Datenschutzgesetze (PIPL, 2021) enthalten theoretisch Einschränkungen für`
- **missing_en** @ `sources[0].title`
  - DE: `Chinese surveillance is literally getting in workers' heads`
- **missing_en** @ `sources[1].title`
  - DE: `Chinese tech workers outraged by surveillance tool that flags employees who look`
- **missing_en** @ `sources[2].title`
  - DE: `Suspect AI: Vibraimage, Emotion Recognition Technology, and Algorithmic Opacity`
- **missing_en** @ `sources[3].title`
  - DE: `Mass surveillance in China`

### china-ki-covid-ueberwachung.json

- **missing_en** @ `name`
  - DE: `China: COVID-Gesundheitscodes als Instrument politischer Kontrolle`
- **missing_en** @ `description`
  - DE: `Chinas KI-gestütztes COVID-Gesundheits-QR-Code-System, das urspruenglich zur Pan`
- **missing_en** @ `location.name`
  - DE: `Zhengzhou, Provinz Henan, China`
- **missing_en** @ `actors[0].name`
  - DE: `Chinesische Zentralregierung`
- **missing_en** @ `actors[1].name`
  - DE: `Lokalbehoerden Henan`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Bewegungsfreiheit | Versammlungsfreiheit | Recht auf faires Verfahren`
- **missing_en** @ `timeline[0].title`
  - DE: `Einführung der Gesundheits-QR-Codes während COVID-19`
- **missing_en** @ `timeline[0].description`
  - DE: `China führt flächendeckend digitale Gesundheits-QR-Codes ein, die jedem Bürger e`
- **missing_en** @ `timeline[1].title`
  - DE: `Ausweitung der Codes auf nicht-COVID-Zwecke`
- **missing_en** @ `timeline[1].description`
  - DE: `Berichte zeigen, dass lokale Verwaltungen die Gesundheitscodes zunehmend für Zwe`
- **missing_en** @ `timeline[2].title`
  - DE: `Bankprotestierende in Zhengzhou erhalten rote Codes`
- **missing_en** @ `timeline[2].description`
  - DE: `Einleger mehrerer laendlicher Banken in Henan, deren Konten eingefroren wurden u`
- **missing_en** @ `timeline[3].title`
  - DE: `Öffentlicher Aufschrei und staatliche Reaktion`
- **missing_en** @ `timeline[3].description`
  - DE: `Der Skandal loest selten starke öffentliche Empoerung in China aus. Beamte in He`
- **missing_en** @ `sources[0].title`
  - DE: `China's bank run victims planned to protest. Then their Covid health codes turne`
- **missing_en** @ `sources[1].title`
  - DE: `Henan rural bank customers curbed by COVID-19 app as they protest frozen account`
- **missing_en** @ `sources[2].title`
  - DE: `Why China's COVID-tracking QR codes raise surveillance concerns`

### china-ki-deepfake-propaganda.json

- **missing_en** @ `name`
  - DE: `China: KI-generierte Nachrichtensprecher und Deepfake-Propaganda im staatlichen `
- **missing_en** @ `description`
  - DE: `China setzt seit 2018 KI-generierte Nachrichtensprecher und Deepfake-Technologie`
- **missing_en** @ `location.name`
  - DE: `Peking, China`
- **missing_en** @ `actors[0].name`
  - DE: `Xinhua Nachrichtenagentur`
- **missing_en** @ `actors[1].name`
  - DE: `Sogou Inc.`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Meinungsfreiheit | Recht auf Information | Medienfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Xinhua stellt ersten KI-Nachrichtensprecher der Welt vor`
- **missing_en** @ `timeline[0].description`
  - DE: `Die staatliche Nachrichtenagentur Xinhua präsentiert in Zusammenarbeit mit Sogou`
- **missing_en** @ `timeline[1].title`
  - DE: `COVID-19-Pandemie als Testfeld für KI-Propagandasysteme`
- **missing_en** @ `timeline[1].description`
  - DE: `Chinesische staatliche Medien setzen KI-Systeme massiv ein, um staatlich genehmi`
- **missing_en** @ `timeline[2].title`
  - DE: `Internationale Einflussoperationen mit Deepfake-Inhalten`
- **missing_en** @ `timeline[2].description`
  - DE: `Graphika und das Stanford Internet Observatory veröffentlichen Berichte über 'Sp`
- **missing_en** @ `timeline[3].title`
  - DE: `Ausweitung und internationale Warnung vor KI-Desinformation`
- **missing_en** @ `timeline[3].description`
  - DE: `Westliche Geheimdienste und Forschungsinstitute warnen vor der zunehmenden Quali`
- **missing_en** @ `sources[0].title`
  - DE: `China unveils its first AI news anchor`
- **missing_en** @ `sources[1].title`
  - DE: `Spamouflage Dragon: China's Largest Covert Influence Operation`

### china-ki-journalisten-ueberwachung.json

- **missing_en** @ `name`
  - DE: `China: KI-Überwachung ausländischer Journalisten`
- **missing_en** @ `description`
  - DE: `China setzt KI-gestützte Gesichtserkennung und Datenprofiling systematisch ein, `
- **missing_en** @ `location.name`
  - DE: `Peking, China`
- **missing_en** @ `actors[0].name`
  - DE: `Chinesische Regierung`
- **missing_en** @ `actors[1].name`
  - DE: `Ministerium für Staatssicherheit (MSS)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Pressefreiheit | Recht auf Privatsphäre | Meinungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Ausweitung der KI-Überwachung auf Pressezentren und Hotels`
- **missing_en** @ `timeline[0].description`
  - DE: `China weitet sein nationales Gesichtserkennungssystem auf Presseakkreditierungsv`
- **missing_en** @ `timeline[1].title`
  - DE: `COVID-Pandemie als Vorwand für verscharfte Journalistenüberwachung`
- **missing_en** @ `timeline[1].description`
  - DE: `Unter dem Deckmantel der Pandemiebekaempfung werden ausländische Journalisten ve`
- **missing_en** @ `timeline[2].title`
  - DE: `BBC-Journalist nach KI-Identifikation ausgewiesen`
- **missing_en** @ `timeline[2].description`
  - DE: `Während der Olympischen Winterspiele in Peking wird der BBC-Journalist Robin Bra`
- **missing_en** @ `timeline[3].title`
  - DE: `Massenausweisungen und Selbstzensur ausländischer Medien`
- **missing_en** @ `timeline[3].description`
  - DE: `China hat seit 2020 mehr als 100 ausländische Journalisten ausgewiesen oder ihne`
- **missing_en** @ `sources[0].title`
  - DE: `China — Annual Report on Press Freedom`
- **missing_en** @ `sources[1].title`
  - DE: `World Report 2023: China`

### china-social-credit-system.json

- **missing_en** @ `name`
  - DE: `China: Sozialkredit-System und algorithmische Verhaltenskontrolle`
- **missing_en** @ `description`
  - DE: `China entwickelt seit 2014 ein umfassendes Sozialkredit-System, das KI-gestützt `
- **missing_en** @ `location.name`
  - DE: `Peking, China`
- **missing_en** @ `actors[0].name`
  - DE: `Staatsrat der Volksrepublik China`
- **missing_en** @ `actors[1].name`
  - DE: `Verschiedene Kommunalregierungen`
- **missing_en** @ `actors[2].name`
  - DE: `Alibaba / Ant Group`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Bewegungsfreiheit | Recht auf Bildung`
- **missing_en** @ `timeline[0].title`
  - DE: `Staatsrat veröffentlicht Planungsdokument`
- **missing_en** @ `timeline[0].description`
  - DE: `Der Staatsrat veröffentlicht das 'Planungsdokument für den Aufbau eines Sozialkr`
- **missing_en** @ `timeline[1].title`
  - DE: `Blacklists blockieren Millionen Reisen`
- **missing_en** @ `timeline[1].description`
  - DE: `Das nationale Gericht-Vollstreckungssystem blockiert 17,5 Millionen Flugticketkä`
- **missing_en** @ `timeline[2].title`
  - DE: `COVID-19: Gesundheitscodes als Überwachungsausweitung`
- **missing_en** @ `timeline[2].description`
  - DE: `Während der COVID-19-Pandemie werden KI-gestützte Gesundheits-QR-Codes (健康码) ein`
- **missing_en** @ `timeline[3].title`
  - DE: `Internationaler Widerstand und interne Kritik`
- **missing_en** @ `timeline[3].description`
  - DE: `Die EU bezeichnet das System als 'inkompatibel mit europäischen Grundwerten'. Se`
- **missing_en** @ `sources[0].title`
  - DE: `China's Social Credit System in 2021: From fragmentation towards integration`
- **missing_en** @ `sources[1].title`
  - DE: `Planning Outline for the Construction of a Social Credit System (2014-2020)`

### china-uiguren-ueberwachung.json

- **missing_en** @ `name`
  - DE: `China: Massenuberwachung der uigurischen Bevolkerung in Xinjiang mit KI`
- **missing_en** @ `description`
  - DE: `Seit 2017 betreibt die chinesische Regierung in der Region Xinjiang ein beispiel`
- **missing_en** @ `location.name`
  - DE: `Urumqi, Xinjiang, China`
- **missing_en** @ `actors[0].name`
  - DE: `Volksrepublik China / Kommunistische Partei Chinas`
- **missing_en** @ `actors[1].name`
  - DE: `Huawei`
- **missing_en** @ `actors[2].name`
  - DE: `Hikvision`
- **missing_en** @ `actors[3].name`
  - DE: `Dahua Technology`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Freiheit | Recht auf Privatsphare | Religionsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Kampagne 'Harter Schlag gegen Gewalt und Terrorismus' gestartet`
- **missing_en** @ `timeline[0].description`
  - DE: `Die chinesische Regierung startet die politische Kampagne 'Strike Hard Against V`
- **missing_en** @ `timeline[1].title`
  - DE: `Masseninhaftierungen und Ausbau der IJOP-Plattform`
- **missing_en** @ `timeline[1].description`
  - DE: `Ab 2017 werden Hunderttausende Uiguren ohne rechtliches Verfahren in sogenannte `
- **missing_en** @ `timeline[2].title`
  - DE: `China Cables: Interne Lagerdokumente geleakt`
- **missing_en** @ `timeline[2].description`
  - DE: `Das International Consortium of Investigative Journalists (ICIJ) veröffentlicht `
- **missing_en** @ `timeline[3].title`
  - DE: `UN-Bericht stuft Lage als mogliche Verbrechen gegen die Menschlichkeit ein`
- **missing_en** @ `timeline[3].description`
  - DE: `Das UN-Hochkommissariat fur Menschenrechte (OHCHR) veröffentlicht seinen Bericht`
- **missing_en** @ `sources[0].title`
  - DE: `China Cables: Leaked Documents Reveal the Mechanics of China's Mass Detention Sy`
- **missing_en** @ `sources[1].title`
  - DE: `China's Algorithms of Repression: Reverse Engineering a Xinjiang Police Mass Sur`

### clearview-ai-massenuberwachung.json

- **missing_en** @ `name`
  - DE: `Clearview AI Massenüberwachung`
- **missing_en** @ `description`
  - DE: `Clearview AI scrapet Milliarden von Fotos aus sozialen Medien und dem offenen In`
- **missing_en** @ `location.name`
  - DE: `New York, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Clearview AI`
- **missing_en** @ `actors[1].name`
  - DE: `Diverse Polizeibehörden`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Datenschutz | Informationelle Selbstbestimmung`
- **missing_en** @ `timeline[0].title`
  - DE: `Clearview AI gegründet`
- **missing_en** @ `timeline[0].description`
  - DE: `Hoan Ton-That und Richard Schwartz gründen Clearview AI in New York. Das Unterne`
- **missing_en** @ `timeline[1].title`
  - DE: `Milliarden-Foto-Datenbank aufgebaut`
- **missing_en** @ `timeline[1].description`
  - DE: `Clearview AI hat über 3 Milliarden Fotos aus dem Internet gesammelt und eine Ges`
- **missing_en** @ `timeline[2].title`
  - DE: `Nutzung durch Strafverfolgungsbehörden enthüllt`
- **missing_en** @ `timeline[2].description`
  - DE: `Eine Recherche der New York Times enthüllt, dass über 600 Strafverfolgungsbehörd`
- **missing_en** @ `timeline[3].title`
  - DE: `ACLU-Klage gegen Clearview AI`
- **missing_en** @ `timeline[3].description`
  - DE: `Die American Civil Liberties Union (ACLU) verklagt Clearview AI in Illinois wege`
- **missing_en** @ `timeline[4].title`
  - DE: `EU- und Australien-Strafen`
- **missing_en** @ `timeline[4].description`
  - DE: `Datenschutzbehörden in der EU (Italien, Frankreich, Griechenland) und Australien`
- **missing_en** @ `sources[0].title`
  - DE: `ACLU verklagt Clearview AI wegen Verletzung der Privatsphäre`
- **missing_en** @ `sources[1].title`
  - DE: `Clearview AI verstößt gegen australisches Datenschutzrecht`

### compas-recidivism-algorithmus.json

- **missing_en** @ `name`
  - DE: `COMPAS: Rassistische Rückfallprognose im US-Justizsystem`
- **missing_en** @ `description`
  - DE: `Der COMPAS-Algorithmus (Correctional Offender Management Profiling for Alternati`
- **missing_en** @ `location.name`
  - DE: `Broward County, Florida, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Northpointe / Equivant`
- **missing_en** @ `actors[1].name`
  - DE: `Broward County / Justiz Florida`
- **missing_en** @ `actors[2].name`
  - DE: `ProPublica`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf faires Verfahren | Gleichheit vor dem Gesetz | Schutz vor Diskriminierung`
- **missing_en** @ `timeline[0].title`
  - DE: `COMPAS im Einsatz in Broward County`
- **missing_en** @ `timeline[0].description`
  - DE: `COMPAS wird in Broward County, Florida, als Standardwerkzeug für Risikoeinschätz`
- **missing_en** @ `timeline[1].title`
  - DE: `ProPublica enthüllt rassistischen Bias`
- **missing_en** @ `timeline[1].description`
  - DE: `ProPublica veröffentlicht 'Machine Bias': Eine Analyse von 7.000 Fällen in Browa`
- **missing_en** @ `timeline[2].title`
  - DE: `Akademische Debatte über Fairness-Definitionen`
- **missing_en** @ `timeline[2].description`
  - DE: `Northpointe widerspricht ProPublica und argumentiert, der Algorithmus sei kalibr`
- **missing_en** @ `timeline[3].title`
  - DE: `Wisconsin Supreme Court: State v. Loomis`
- **missing_en** @ `timeline[3].description`
  - DE: `Der Wisconsin Supreme Court entscheidet in State v. Loomis, dass COMPAS bei Stra`
- **missing_en** @ `sources[0].title`
  - DE: `Machine Bias: There's Software Used Across the Country to Predict Future Crimina`
- **missing_en** @ `sources[1].title`
  - DE: `How We Analyzed the COMPAS Recidivism Algorithm`
- **missing_en** @ `sources[2].title`
  - DE: `State v. Loomis – Criminal Law – Sentencing Guidelines`

### costa-rica-conti-ransomware.json

- **missing_en** @ `name`
  - DE: `Costa Rica: Conti-Ransomware lähmt Regierungssysteme, Ausnahmezustand ausgerufen`
- **missing_en** @ `description`
  - DE: `Im April 2022 griff die Conti-Ransomware-Gruppe die Computersysteme der costa-ri`
- **missing_en** @ `location.name`
  - DE: `San José, Costa Rica`
- **missing_en** @ `actors[0].name`
  - DE: `Conti Group`
- **missing_en** @ `actors[1].name`
  - DE: `Gobierno de Costa Rica`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf staatliche Dienstleistungen | Recht auf Gesundheitsversorgung | Recht auf wirtschaftliche Teilhabe`
- **missing_en** @ `timeline[0].title`
  - DE: `Erster Angriff auf das costaricanische Finanzministerium`
- **missing_en** @ `timeline[0].description`
  - DE: `Die Conti-Gruppe infiltriert die Netzwerke des costaricanischen Finanzministeriu`
- **missing_en** @ `timeline[1].title`
  - DE: `Neuer Präsident ruft nationalen Notstand aus`
- **missing_en** @ `timeline[1].description`
  - DE: `Der am Tag zuvor vereidete Präsident Rodrigo Chaves erklärt den nationalen Notst`
- **missing_en** @ `timeline[2].title`
  - DE: `Zweite Angriffswelle trifft Gesundheitssystem`
- **missing_en** @ `timeline[2].description`
  - DE: `Eine zweite Angriffswelle durch die mit Conti verbundene Gruppe HIVE legt das na`
- **missing_en** @ `timeline[3].title`
  - DE: `Monate der Störung, internationale Cyberhilfe, keine Verhaftungen`
- **missing_en** @ `timeline[3].description`
  - DE: `Die costaricanische Regierung lehnt die Zahlung des Lösegelds ab und restauriert`
- **missing_en** @ `sources[0].title`
  - DE: `Costa Rica declares national emergency after Conti ransomware attacks`
- **missing_en** @ `sources[1].title`
  - DE: `Rewards for Justice – Reward Offer for Information on Conti Ransomware`

### detroit-gesichtserkennung-fehlidentifikation.json

- **missing_en** @ `name`
  - DE: `Detroit: Unrechtmäßige Festnahmen durch Gesichtserkennung`
- **missing_en** @ `description`
  - DE: `Die Polizei von Detroit nutzt Gesichtserkennungssoftware, die in mehreren dokume`
- **missing_en** @ `location.name`
  - DE: `Detroit, Michigan, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Detroit Police Department`
- **missing_en** @ `actors[1].name`
  - DE: `ACLU Michigan`
- **missing_en** @ `actors[2].name`
  - DE: `NIST (National Institute of Standards and Technology)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Freiheit | Recht auf faires Verfahren | Schutz vor Diskriminierung`
- **missing_en** @ `timeline[0].title`
  - DE: `Detroit führt Gesichtserkennung ein`
- **missing_en** @ `timeline[0].description`
  - DE: `Das Detroit Police Department implementiert ein Echtzeit-Gesichtserkennungssyste`
- **missing_en** @ `timeline[1].title`
  - DE: `NIST-Studie bestätigt rassistischen Bias`
- **missing_en** @ `timeline[1].description`
  - DE: `Eine umfassende NIST-Studie testet 189 Gesichtserkennungsalgorithmen und stellt `
- **missing_en** @ `timeline[2].title`
  - DE: `Robert Williams: Erste dokumentierte Falschfestnahme`
- **missing_en** @ `timeline[2].description`
  - DE: `Robert Williams, ein Schwarzer Mann aus Detroit, wird vor den Augen seiner Famil`
- **missing_en** @ `timeline[3].title`
  - DE: `Verbote und Klagen bundesweit`
- **missing_en** @ `timeline[3].description`
  - DE: `Die ACLU reicht Klage im Namen von Robert Williams ein. Mehrere US-Städte (San F`
- **missing_en** @ `sources[0].title`
  - DE: `NIST Study Evaluates Effects of Race, Age, Sex on Face Recognition Software`
- **missing_en** @ `sources[1].title`
  - DE: `Racial Discrimination in Face Recognition Technology`

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

- **missing_en** @ `name`
  - DE: `Deutschland: Automatisierte Gesichtserkennung am Berliner Suedkreuz`
- **missing_en** @ `description`
  - DE: `Die Bundespolizei testete von 2017 bis 2018 automatisierte Gesichtserkennung am `
- **missing_en** @ `location.name`
  - DE: `Berlin, Deutschland`
- **missing_en** @ `actors[0].name`
  - DE: `Bundespolizei`
- **missing_en** @ `actors[1].name`
  - DE: `Deutsche Bahn AG`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphaere | Informationelle Selbstbestimmung | Bewegungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Start des Pilotprojekts am Suedkreuz`
- **missing_en** @ `timeline[0].description`
  - DE: `Die Bundespolizei startet in Zusammenarbeit mit der Deutschen Bahn einen sechsmo`
- **missing_en** @ `timeline[1].title`
  - DE: `Veröffentlichung der Ergebnisse und politische Debatte`
- **missing_en** @ `timeline[1].description`
  - DE: `Die Bundespolizei veröffentlicht erste Ergebnisse: Die Erkennungsrate liege bei `
- **missing_en** @ `timeline[2].title`
  - DE: `Diskussion über bundesweite Ausweitung`
- **missing_en** @ `timeline[2].description`
  - DE: `Bundesinnenminister Horst Seehofer befuerwortet eine Ausweitung der Gesichtserke`
- **missing_en** @ `timeline[3].title`
  - DE: `Teilweiser Rueckzug — keine bundesweite Ausweitung beschlossen`
- **missing_en** @ `timeline[3].description`
  - DE: `Die geplante Ausweitung der automatisierten Gesichtserkennung auf Bundesebene wi`
- **missing_en** @ `sources[0].title`
  - DE: `Gesichtserkennung im öffentlichen Raum: Risiken und Alternativen`

### deutschland-hessendata-palantir.json

- **missing_en** @ `name`
  - DE: `Deutschland: Palantir hessenDATA — Predictive Policing vor dem BVerfG`
- **missing_en** @ `description`
  - DE: `Das Land Hessen setzt seit 2017 Palantirs Analyseplattform Gotham als 'hessenDAT`
- **missing_en** @ `location.name`
  - DE: `Wiesbaden, Hessen, Deutschland`
- **missing_en** @ `actors[0].name`
  - DE: `Hessisches Ministerium des Innern und für Sport`
- **missing_en** @ `actors[1].name`
  - DE: `Palantir Technologies`
- **missing_en** @ `actors[2].name`
  - DE: `Gesellschaft für Freiheitsrechte (GFF)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf informationelle Selbstbestimmung | Recht auf Privatsphäre | Recht auf faires Verfahren`
- **missing_en** @ `timeline[0].title`
  - DE: `Hessen führt Palantir-System ein`
- **missing_en** @ `timeline[0].description`
  - DE: `Als erstes deutsches Bundesland schließt Hessen einen Vertrag mit Palantir Techn`
- **missing_en** @ `timeline[1].title`
  - DE: `Verfassungsbeschwerde gegen Polizeigesetz`
- **missing_en** @ `timeline[1].description`
  - DE: `Die Gesellschaft für Freiheitsrechte (GFF) reicht Verfassungsbeschwerde gegen da`
- **missing_en** @ `timeline[2].title`
  - DE: `Bundesverfassungsgericht: Automatisierte Datenanalyse verfassungswidrig`
- **missing_en** @ `timeline[2].description`
  - DE: `Das BVerfG erklärt die Rechtsgrundlage für hessenDATA und das vergleichbare Syst`
- **missing_en** @ `timeline[3].title`
  - DE: `Signalwirkung für Europa und den EU AI Act`
- **missing_en** @ `timeline[3].description`
  - DE: `Das BVerfG-Urteil wird zum Referenzfall für die europäische Debatte über Predict`
- **missing_en** @ `sources[0].title`
  - DE: `BVerfG: Automatisierte Datenanalyse — 1 BvR 1547/19`

### drc-kobalt-ki-lieferkette.json

- **missing_en** @ `name`
  - DE: `DR Kongo: Kinderarbeit in Kobalt-Minen für KI-Hardware`
- **missing_en** @ `description`
  - DE: `Kobalt aus der Demokratischen Republik Kongo ist ein unverzichtbarer Rohstoff fü`
- **missing_en** @ `location.name`
  - DE: `Lubumbashi, Demokratische Republik Kongo`
- **missing_en** @ `actors[0].name`
  - DE: `Bergbauunternehmen (Glencore, ERG u. a.)`
- **missing_en** @ `actors[1].name`
  - DE: `Apple, Tesla, Microsoft, Alphabet`
- **missing_en** @ `actors[2].name`
  - DE: `Regierung der DR Kongo`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Verbot von Kinderarbeit | Recht auf sichere Arbeitsbedingungen | Recht auf Gesundheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Amnesty-Bericht legt Lieferketten-Missstaende offen`
- **missing_en** @ `timeline[0].description`
  - DE: `Amnesty International veröffentlicht den Bericht 'This is What We Die For', der `
- **missing_en** @ `timeline[1].title`
  - DE: `Klage gegen Technologiekonzerne wegen Kinderarbeit`
- **missing_en** @ `timeline[1].description`
  - DE: `IRAdvocates reicht im Namen von Familien verstorbener kongolesischer Bergbaukind`
- **missing_en** @ `timeline[2].title`
  - DE: `Siddharth Kara: Feldforschung in den Kobalt-Minen`
- **missing_en** @ `timeline[2].description`
  - DE: `Der Forscher Siddharth Kara veröffentlicht sein Buch 'Cobalt Red' nach jahrelang`
- **missing_en** @ `timeline[3].title`
  - DE: `KI-Hardware-Boom erhoet Nachfragedruck massiv`
- **missing_en** @ `timeline[3].description`
  - DE: `Der weltweite Boom bei KI-Beschleunigern (GPUs, TPUs) und KI-Datenzentren führt `
- **missing_en** @ `sources[0].title`
  - DE: `This Is What We Die For — Human Rights Abuses in the DR Congo's Cobalt Mining Se`
- **missing_en** @ `sources[1].title`
  - DE: `Cobalt Red — How the Blood of the Congo Powers Our Lives`

### ecuador-ki-ueberwachung-ece911.json

- **missing_en** @ `name`
  - DE: `Ecuador: ECU-911-Überwachungssystem mit chinesischer Technologie zur politischen`
- **missing_en** @ `description`
  - DE: `Ecuador errichtete ab 2011 mit Unterstützung chinesischer Unternehmen — insbeson`
- **missing_en** @ `location.name`
  - DE: `Quito, Ecuador`
- **missing_en** @ `actors[0].name`
  - DE: `Ecuadorianische Regierung`
- **missing_en** @ `actors[1].name`
  - DE: `CEIEC — China Electronics Import-Export Corporation`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Versammlungsfreiheit | Meinungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Aufbau des ECU-911-Systems mit chinesischer Finanzierung`
- **missing_en** @ `timeline[0].description`
  - DE: `Ecuador startet unter Präsident Rafael Correa das ECU-911-Projekt, finanziert du`
- **missing_en** @ `timeline[1].title`
  - DE: `Ausweitung des Systems auf politische Überwachung`
- **missing_en** @ `timeline[1].description`
  - DE: `Investigativjournalisten dokumentieren, dass ECU-911-Daten zur Überwachung von J`
- **missing_en** @ `timeline[2].title`
  - DE: `NYT-Enthüllung: Protestüberwachung und politische Kontrolle`
- **missing_en** @ `timeline[2].description`
  - DE: `Die New York Times veröffentlicht eine umfangreiche Untersuchung, die belegt, da`
- **missing_en** @ `timeline[3].title`
  - DE: `Systemausbau trotz Kontroversen — Modell für die Region`
- **missing_en** @ `timeline[3].description`
  - DE: `Trotz anhaltender Kritik wird ECU-911 unter nachfolgenden Regierungen weiter aus`
- **missing_en** @ `sources[0].title`
  - DE: `Ecuador's All-Seeing Eye Is Made in China`
- **missing_en** @ `sources[1].title`
  - DE: `Ecuador is fighting crime using Chinese surveillance technology`
- **missing_en** @ `sources[2].title`
  - DE: `Chinese Government Builds Far-Reaching, Allegedly Corrupt, Surveillance System i`
- **missing_en** @ `sources[3].title`
  - DE: `Chinese Government provides $10 million grant for ECU 911 Project`

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

- **missing_en** @ `name`
  - DE: `VAE: DarkMatter und ToTok — Staatliche Massenuberwachung durch Schein-App und Sp`
- **missing_en** @ `description`
  - DE: `Die Vereinigten Arabischen Emirate setzten uber das staatlich finanzierte Untern`
- **missing_en** @ `location.name`
  - DE: `Abu Dhabi, Vereinigte Arabische Emirate`
- **missing_en** @ `actors[0].name`
  - DE: `Regierung der Vereinigten Arabischen Emirate`
- **missing_en** @ `actors[1].name`
  - DE: `DarkMatter`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphare | Meinungsfreiheit | Pressefreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `DarkMatter nimmt Uberwachungsoperationen auf`
- **missing_en** @ `timeline[0].description`
  - DE: `DarkMatter wird als Cybersicherheitsunternehmen in Abu Dhabi gegrundet, rekrutie`
- **missing_en** @ `timeline[1].title`
  - DE: `Karma wird gegen Dissidenten und Journalisten eingesetzt`
- **missing_en** @ `timeline[1].description`
  - DE: `Karma wird laut Recherchen von Reuters und spateren Gerichtsunterlagen gezielt g`
- **missing_en** @ `timeline[2].title`
  - DE: `Reuters und NYT entllarven Karma und ToTok`
- **missing_en** @ `timeline[2].description`
  - DE: `Reuters veröffentlicht eine Recherche uber das Karma-Programm und benennt ehemal`
- **missing_en** @ `timeline[3].title`
  - DE: `DOJ-Anklagen gegen US-Beteiligte, VAE bleiben straffrei`
- **missing_en** @ `timeline[3].description`
  - DE: `Das US-Justizministerium klagt drei ehemalige US-Geholandedienstmitarbeiter wege`
- **missing_en** @ `sources[0].title`
  - DE: `Calling app ToTok used as 'spying tool' by UAE: Report`
- **missing_en** @ `sources[1].title`
  - DE: `ToTok`
- **missing_en** @ `sources[2].title`
  - DE: `Messaging app ToTok is reportedly a spying tool for the UAE`
- **missing_en** @ `sources[3].title`
  - DE: `Former IDF intelligence personnel likely tied to UAE spy app, report says`

### eritrea-digitale-repression.json

- **missing_en** @ `name`
  - DE: `Eritrea: Totale Informationskontrolle durch Uberwachung und Internetsperrung`
- **missing_en** @ `description`
  - DE: `Eritrea betreibt eine der strengsten Medienkontrollen weltweit und setzt staatli`
- **missing_en** @ `location.name`
  - DE: `Asmara, Eritrea`
- **missing_en** @ `actors[0].name`
  - DE: `Eritreische Regierung`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Meinungsfreiheit | Pressefreiheit | Recht auf Information`
- **missing_en** @ `timeline[0].title`
  - DE: `Abschaltung aller unabhangigen Medien`
- **missing_en** @ `timeline[0].description`
  - DE: `Die eritreische Regierung schliesst samtliche privaten Zeitungen und verhaftet f`
- **missing_en** @ `timeline[1].title`
  - DE: `Ausbau digitaler Uberwachungskapazitaten`
- **missing_en** @ `timeline[1].description`
  - DE: `Berichte von Reporters Without Borders und Freedom House belegen, dass Eritrea U`
- **missing_en** @ `timeline[2].title`
  - DE: `Totale Digitalsperrung wahrend des Tigray-Krieges`
- **missing_en** @ `timeline[2].description`
  - DE: `Mit Beginn des Tigray-Krieges werden Mobilfunk- und Internetdienste in grenznahe`
- **missing_en** @ `timeline[3].title`
  - DE: `Eritrea bleibt international abgeschirmtes Uberwachungsregime`
- **missing_en** @ `timeline[3].description`
  - DE: `Reporters Without Borders listet Eritrea jahrlich als eines der schlechtesten La`
- **missing_en** @ `sources[0].title`
  - DE: `Eritrea — Reporters Without Borders Press Freedom Index`
- **missing_en** @ `sources[1].title`
  - DE: `Freedom in the World 2023: Eritrea`

### ethiopia-ki-konflikt-ueberwachung.json

- **missing_en** @ `name`
  - DE: `Athiopien: Digitale Uberwachung und Internetsperren wahrend des Tigray-Konflikts`
- **missing_en** @ `description`
  - DE: `Wahrend des bewaffneten Konflikts zwischen der athiopischen Bundesregierung und `
- **missing_en** @ `location.name`
  - DE: `Mek'ele, Tigray, Athiopien`
- **missing_en** @ `actors[0].name`
  - DE: `Athiopische Bundesregierung`
- **missing_en** @ `actors[1].name`
  - DE: `Cyberbit`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Informationsfreiheit | Meinungsfreiheit | Pressefreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Beginn des Konflikts und erste Internetsperren`
- **missing_en** @ `timeline[0].description`
  - DE: `Unmittelbar nach dem Ausbruch des bewaffneten Konflikts zwischen Bundesregierung`
- **missing_en** @ `timeline[1].title`
  - DE: `Citizen Lab enthullt Einsatz israelischer Spionagesoftware`
- **missing_en** @ `timeline[1].description`
  - DE: `Citizen Lab veröffentlicht Forschungsergebnisse, die belegen, dass athiopische B`
- **missing_en** @ `timeline[2].title`
  - DE: `18-monatige vollstandige Kommunikationssperre in Tigray`
- **missing_en** @ `timeline[2].description`
  - DE: `Access Now dokumentiert, dass die Region Tigray uber mehr als 18 Monate nahezu v`
- **missing_en** @ `timeline[3].title`
  - DE: `Waffenstillstand und teilweise Wiederherstellung der Konnektivitat`
- **missing_en** @ `timeline[3].description`
  - DE: `Nach dem Waffenstillstand vom November 2022 wurde die Internetverbindung in Tigr`
- **missing_en** @ `sources[0].title`
  - DE: `#KeepItOn: Fighting Internet Shutdowns – Ethiopia`

### eu-frontex-ki-grenzen.json

- **missing_en** @ `name`
  - DE: `EU/Frontex KI-Grenzüberwachung`
- **missing_en** @ `description`
  - DE: `Die Europäische Union und Frontex setzen KI-gestützte Überwachungssysteme an den`
- **missing_en** @ `location.name`
  - DE: `Evros, Griechenland`
- **missing_en** @ `actors[0].name`
  - DE: `Frontex`
- **missing_en** @ `actors[1].name`
  - DE: `Europäische Union`
- **missing_en** @ `actors[2].name`
  - DE: `Diverse Tech-Unternehmen`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Asyl | Recht auf Leben | Menschenwürde`
- **missing_en** @ `timeline[0].title`
  - DE: `Aufbau der KI-Grenzüberwachung`
- **missing_en** @ `timeline[0].description`
  - DE: `Frontex und die EU beginnen mit dem systematischen Einsatz von Drohnen, Wärmebil`
- **missing_en** @ `timeline[1].title`
  - DE: `KI-gestützte Migrationsvorhersage`
- **missing_en** @ `timeline[1].description`
  - DE: `Frontex setzt zunehmend auf prädiktive Analysen zur Vorhersage von Migrationsbew`
- **missing_en** @ `timeline[2].title`
  - DE: `KI-unterstützte Pushbacks am Evros`
- **missing_en** @ `timeline[2].description`
  - DE: `Berichte dokumentieren, wie KI-gestützte Überwachungssysteme am Grenzfluss Evros`
- **missing_en** @ `timeline[3].title`
  - DE: `OLAF-Untersuchung gegen Frontex`
- **missing_en** @ `timeline[3].description`
  - DE: `Das Europäische Amt für Betrugsbekämpfung (OLAF) untersucht Frontex wegen Beteil`
- **missing_en** @ `timeline[4].title`
  - DE: `Kritik an EU-KI-Grenzpolitik wächst`
- **missing_en** @ `timeline[4].description`
  - DE: `Zivilgesellschaftliche Organisationen und das Europäische Parlament fordern stär`
- **missing_en** @ `sources[0].title`
  - DE: `Frontex und KI-gestützte Grenzüberwachung`
- **missing_en** @ `sources[1].title`
  - DE: `Frontex in illegale Pushbacks verwickelt`
- **missing_en** @ `sources[2].title`
  - DE: `EU-KI-Verordnung und Migrationsüberwachung`

### finnland-ki-sozialamt-diskriminierung.json

- **missing_en** @ `name`
  - DE: `Finnland: Kela-Algorithmus bei Sozialleistungsentscheidungen unter Diskriminieru`
- **missing_en** @ `description`
  - DE: `Die finnische Sozialversicherungsanstalt Kela (Kansaneläkelaitos) setzte automat`
- **missing_en** @ `location.name`
  - DE: `Helsinki, Finnland`
- **missing_en** @ `actors[0].name`
  - DE: `Kela (Kansaneläkelaitos)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf soziale Sicherheit | Recht auf faires Verfahren | Recht auf Gleichbehandlung`
- **missing_en** @ `timeline[0].title`
  - DE: `Kela startet Piloten zur automatisierten Leistungsbearbeitung`
- **missing_en** @ `timeline[0].description`
  - DE: `Kela führt Pilotprojekte ein, bei denen Algorithmen die Bearbeitung von Anträgen`
- **missing_en** @ `timeline[1].title`
  - DE: `Ombudsmann äussert Bedenken zu algorithmischer Transparenz`
- **missing_en** @ `timeline[1].description`
  - DE: `Der finnische Nicht-Diskriminierungsombudsmann veröffentlicht Berichte, die fehl`
- **missing_en** @ `timeline[2].title`
  - DE: `AlgorithmWatch dokumentiert Benachteiligung vulnerabler Gruppen`
- **missing_en** @ `timeline[2].description`
  - DE: `AlgorithmWatch und finnische Forschungseinrichtungen analysieren Fallmuster und `
- **missing_en** @ `timeline[3].title`
  - DE: `EU-KI-Verordnung erzwingt Neuklassifizierung als Hochrisiko-System`
- **missing_en** @ `timeline[3].description`
  - DE: `Mit dem Fortschreiten der Verhandlungen zur EU-KI-Verordnung wird deutlich, dass`
- **missing_en** @ `sources[0].title`
  - DE: `Automating Society Report: Finland`
- **missing_en** @ `sources[1].title`
  - DE: `Parliamentary Ombudsman Annual Report`
- **missing_en** @ `sources[2].title`
  - DE: `Kela: Digital Services and Automation`

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

- **missing_en** @ `name`
  - DE: `Iran: KI-Gesichtserkennung zur Durchsetzung des Hijab-Zwangs`
- **missing_en** @ `description`
  - DE: `Nach dem Tod von Jina Mahsa Amini und den landesweiten Protesten 2022 setzt der `
- **missing_en** @ `location.name`
  - DE: `Teheran, Iran`
- **missing_en** @ `actors[0].name`
  - DE: `Iranische Sittenpolizei (Gasht-e Ershad)`
- **missing_en** @ `actors[1].name`
  - DE: `Iranische Verkehrspolizei (NAJA)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Religionsfreiheit | Meinungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Tod von Jina Mahsa Amini löst Proteste aus`
- **missing_en** @ `timeline[0].description`
  - DE: `Die 22-jährige Jina Mahsa Amini stirbt in Polizeigewahrsam, nachdem sie von der `
- **missing_en** @ `timeline[1].title`
  - DE: `Automatisierte Hijab-Überwachung per Kamera`
- **missing_en** @ `timeline[1].description`
  - DE: `Die iranische Polizei kündigt den Einsatz von Überwachungskameras zur automatisi`
- **missing_en** @ `timeline[2].title`
  - DE: `Fahrzeugsperren für 'Hijab-Verstöße'`
- **missing_en** @ `timeline[2].description`
  - DE: `Berichte zeigen, dass Fahrzeuge von Frauen, die beim Autofahren ohne Hijab von K`
- **missing_en** @ `timeline[3].title`
  - DE: `Internationale Sanktionen und technischer Widerstand`
- **missing_en** @ `timeline[3].description`
  - DE: `Die EU verhängt weitere Sanktionen gegen iranische Sicherheitsbeamte. Iranische `
- **missing_en** @ `sources[0].title`
  - DE: `Independent International Fact-Finding Mission on Iran`

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

- **missing_en** @ `name`
  - DE: `Irland: Public Services Card — Illegale biometrische Datenerhebung für Soziallei`
- **missing_en** @ `description`
  - DE: `Irlands Public Services Card (PSC) wurde ab 2012 als Mittel eingefuehrt, um staa`
- **missing_en** @ `location.name`
  - DE: `Dublin, Irland`
- **missing_en** @ `actors[0].name`
  - DE: `Irisches Ministerium für Sozialschutz`
- **missing_en** @ `actors[1].name`
  - DE: `Irische Datenschutzkommission (DPC)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Recht auf Datenschutz | Recht auf Sozialleistungen`
- **missing_en** @ `timeline[0].title`
  - DE: `Einführung der Public Services Card mit biometrischer Komponente`
- **missing_en** @ `timeline[0].description`
  - DE: `Irland führt die PSC als buendelende Identitätskarte für staatliche Dienstleistu`
- **missing_en** @ `timeline[1].title`
  - DE: `DPC-Bericht erklärt weite Teile der Datenerhebung für illegal`
- **missing_en** @ `timeline[1].description`
  - DE: `Nach einer umfassenden Prüfung kommt die irische Datenschutzkommission zu dem Sc`
- **missing_en** @ `timeline[2].title`
  - DE: `Regierung verweigert Compliance — Verfassungskonflikt`
- **missing_en** @ `timeline[2].description`
  - DE: `Die irische Regierung weigert sich, die Empfehlungen der DPC vollständig umzuset`
- **missing_en** @ `timeline[3].title`
  - DE: `Partielle Reform nach anhaltendem Druck`
- **missing_en** @ `timeline[3].description`
  - DE: `Nach langwierigen rechtlichen Auseinandersetzungen und EU-Beobachtung schraenkt `
- **missing_en** @ `sources[0].title`
  - DE: `Data Protection Commission Statement on Conclusion of Investigation of the Publi`
- **missing_en** @ `sources[1].title`
  - DE: `Data Protection Commissioner finds Public Services Card illegal`
- **missing_en** @ `sources[2].title`
  - DE: `Public Services Card — campaign and analysis`
- **missing_en** @ `sources[3].title`
  - DE: `Public Services Card`

### israel-blue-wolf-palaestina.json

- **missing_en** @ `name`
  - DE: `Israel: Blue Wolf — Gesichtserkennungsdatenbank gegen Palästinenser`
- **missing_en** @ `description`
  - DE: `Das israelische Militär (IDF) setzt seit 2019 das Gesichtserkennungssystem 'Blue`
- **missing_en** @ `location.name`
  - DE: `Hebron, Westjordanland`
- **missing_en** @ `actors[0].name`
  - DE: `Israelische Streitkräfte (IDF)`
- **missing_en** @ `actors[1].name`
  - DE: `AnyVision`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphaere | Bewegungsfreiheit | Menschenwuerde`
- **missing_en** @ `timeline[0].title`
  - DE: `Entwicklung und Aufbau der Blue-Wolf-Datenbank`
- **missing_en** @ `timeline[0].description`
  - DE: `Das israelische Militär entwickelt Blue Wolf als umfassende Gesichtsdatenbank fü`
- **missing_en** @ `timeline[1].title`
  - DE: `Washington Post veröffentlicht Enthuellung`
- **missing_en** @ `timeline[1].description`
  - DE: `Die Washington Post berichtet erstmals ausführlich über Blue Wolf basierend auf `
- **missing_en** @ `timeline[2].title`
  - DE: `Ausweitung auf 'Smart Wall' und weitere Gebiete`
- **missing_en** @ `timeline[2].description`
  - DE: `Berichte zeigen, dass das System Teil einer breiteren 'Smart Wall'-Strategie ist`
- **missing_en** @ `timeline[3].title`
  - DE: `Internationale Kritik und anhaltende Straflosigkeit`
- **missing_en** @ `timeline[3].description`
  - DE: `UN-Menschenrechtsgremien und internationale Organisationen kritisieren den Einsa`
- **missing_en** @ `sources[0].title`
  - DE: `Testimonies on Blue Wolf and surveillance in the West Bank`
- **missing_en** @ `sources[1].title`
  - DE: `World Report 2023: Israel and Palestine`

### italien-chatgpt-garante-dsgvo-strafe.json

- **missing_en** @ `name`
  - DE: `Italien: Garante verhängt 15-Mio.-Euro-Strafe gegen OpenAI wegen ChatGPT-Datensc`
- **missing_en** @ `description`
  - DE: `Im Dezember 2024 verhängte die italienische Datenschutzbehörde Garante eine 15-M`
- **missing_en** @ `location.name`
  - DE: `Rom, Italien`
- **missing_en** @ `actors[0].name`
  - DE: `OpenAI`
- **missing_en** @ `actors[1].name`
  - DE: `Garante per la protezione dei dati personali (italienische Datenschutzbehörde)`
- **missing_en** @ `actors[2].name`
  - DE: `Europäischer Datenschutzausschuss (EDPB)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Datenschutz | Recht auf Privatsphäre | Kinderschutz`
- **missing_en** @ `timeline[0].title`
  - DE: `Datenpanne bei ChatGPT — Italien sperrt als erstes Land`
- **missing_en** @ `timeline[0].description`
  - DE: `Eine Datenpanne bei OpenAI legt Konversationsverläufe und Zahlungsinformationen `
- **missing_en** @ `timeline[1].title`
  - DE: `Wiederzulassung nach Auflagen`
- **missing_en** @ `timeline[1].description`
  - DE: `Nach einem Monat Sperre wird ChatGPT in Italien wieder zugelassen, nachdem OpenA`
- **missing_en** @ `timeline[2].title`
  - DE: `Garante stellt mehrfache DSGVO-Verstöße fest`
- **missing_en** @ `timeline[2].description`
  - DE: `Die Garante schließt die Hauptuntersuchung ab und veröffentlicht Befunde: OpenAI`
- **missing_en** @ `timeline[3].title`
  - DE: `15 Millionen Euro Strafe + Aufklärungskampagne`
- **missing_en** @ `timeline[3].description`
  - DE: `Die Garante verhängt 15 Millionen Euro Strafe gegen OpenAI — der erste hohe Stra`
- **missing_en** @ `sources[0].title`
  - DE: `Italy's privacy watchdog fines OpenAI €15 million after probe into ChatGPT data `
- **missing_en** @ `sources[1].title`
  - DE: `Italy Fines OpenAI €15 Million for ChatGPT GDPR Data Privacy Violations`
- **missing_en** @ `sources[2].title`
  - DE: `OpenAI faces €15 million fine as the Italian Garante strikes again`
- **missing_en** @ `sources[3].title`
  - DE: `Landmark Privacy Enforcement: Italian Regulator Issues €15M Fine to OpenAI for G`

### italien-chatgpt-verbot.json

- **missing_en** @ `name`
  - DE: `Italien verbietet ChatGPT — erste KI-Regulierungsmaßnahme`
- **missing_en** @ `description`
  - DE: `Die italienische Datenschutzbehörde Garante per la Protezione dei Dati Personali`
- **missing_en** @ `location.name`
  - DE: `Rom, Italien`
- **missing_en** @ `actors[0].name`
  - DE: `Garante per la Protezione dei Dati Personali`
- **missing_en** @ `actors[1].name`
  - DE: `OpenAI`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Datenschutz | Recht auf Auskunft | Recht auf Löschung`
- **missing_en** @ `timeline[0].title`
  - DE: `ChatGPT veröffentlicht ohne DSGVO-Prüfung`
- **missing_en** @ `timeline[0].description`
  - DE: `OpenAI veröffentlicht ChatGPT global, ohne spezifische Maßnahmen zur Einhaltung `
- **missing_en** @ `timeline[1].title`
  - DE: `ChatGPT-Datenleck wird bekannt`
- **missing_en** @ `timeline[1].description`
  - DE: `Ein Bug in ChatGPT führt dazu, dass Nutzer Chatverlauf-Titel und teilweise Zahlu`
- **missing_en** @ `timeline[2].title`
  - DE: `Italien verbietet ChatGPT`
- **missing_en** @ `timeline[2].description`
  - DE: `Die Garante ordnet die sofortige vorübergehende Beschränkung der Verarbeitung it`
- **missing_en** @ `timeline[3].title`
  - DE: `ChatGPT kehrt mit Auflagen nach Italien zurück`
- **missing_en** @ `timeline[3].description`
  - DE: `Nach Einführung von Altersverifikation, einer erweiterten Datenschutzerklärung, `
- **missing_en** @ `sources[0].title`
  - DE: `Garante: Verfügung zur vorläufigen Beschränkung von ChatGPT`
- **missing_en** @ `sources[1].title`
  - DE: `ChatGPT banned in Italy over privacy concerns`
- **missing_en** @ `sources[2].title`
  - DE: `Garante: Aufhebung der Beschränkung nach Auflagenerfüllung`

### italien-ki-arbeitsbewertung-glovo.json

- **missing_en** @ `name`
  - DE: `Italien: Glovos Algorithmus diskriminiert Kuriere bei Bewertung und Auftragsverg`
- **missing_en** @ `description`
  - DE: `Das spanische Lieferunternehmen Glovo setzte einen Algorithmus zur Bewertung und`
- **missing_en** @ `location.name`
  - DE: `Mailand, Italien`
- **missing_en** @ `actors[0].name`
  - DE: `Glovo`
- **missing_en** @ `actors[1].name`
  - DE: `Italienische Gerichte / Tribunale di Bologna`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf faire Arbeitsbedingungen | Koalitionsfreiheit | Schutz vor algorithmischer Diskriminierung`
- **missing_en** @ `timeline[0].title`
  - DE: `Einfuhrung des automatisierten Bewertungssystems`
- **missing_en** @ `timeline[0].description`
  - DE: `Glovo implementiert in Italien ein vollstandig automatisiertes System zur Bewert`
- **missing_en** @ `timeline[1].title`
  - DE: `Kuriere erstatten Beschwerde und klagen`
- **missing_en** @ `timeline[1].description`
  - DE: `Fahrradkuriere in Bologna reichen gemeinsam mit der Gewerkschaft NIdiL-CGIL Klag`
- **missing_en** @ `timeline[2].title`
  - DE: `Tribunal Bologna: Algorithmus als diskriminierend eingestuft`
- **missing_en** @ `timeline[2].description`
  - DE: `Das Tribunale di Bologna urteilt im Januar 2021, dass Glovos Algorithmus zur Kur`
- **missing_en** @ `timeline[3].title`
  - DE: `Garante verhangt 5-Millionen-Euro-Strafe`
- **missing_en** @ `timeline[3].description`
  - DE: `Die italienische Datenschutzbehorde Garante verhangt eine Geldstrafe von 5 Milli`
- **missing_en** @ `sources[0].title`
  - DE: `Garante: Provvedimento nei confronti di Glovo`

### italien-ki-migration-scoring.json

- **missing_en** @ `name`
  - DE: `Italien: Algorithmisches Scoring bei Asylverfahren`
- **missing_en** @ `description`
  - DE: `Das italienische Innenministerium setzt seit 2020 ein algorithmisches Bewertungs`
- **missing_en** @ `location.name`
  - DE: `Rom, Italien`
- **missing_en** @ `actors[0].name`
  - DE: `Italienisches Innenministerium`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Asyl | Gleichbehandlungsgrundsatz | Recht auf faires Verfahren`
- **missing_en** @ `timeline[0].title`
  - DE: `Dekret zur algorithmischen Asylbearbeitung`
- **missing_en** @ `timeline[0].description`
  - DE: `Das italienische Innenministerium erlasst ein Dekret zur Einführung automatisier`
- **missing_en** @ `timeline[1].title`
  - DE: `Einführung des Scoring-Systems`
- **missing_en** @ `timeline[1].description`
  - DE: `Das algorithmische Bewertungssystem wird flächen deckend in den Asylbehoerden ei`
- **missing_en** @ `timeline[2].title`
  - DE: `Rechtliche Herausforderungen und UNHCR-Kritik`
- **missing_en** @ `timeline[2].description`
  - DE: `Mehrere Rechtsorganisationen fechten das System vor italienischen Gerichten an. `
- **missing_en** @ `timeline[3].title`
  - DE: `Europaweite Debatte und Reformdruck`
- **missing_en** @ `timeline[3].description`
  - DE: `Der Fall wird Teil der europaweiten Diskussion über KI im Asylrecht im Kontext d`
- **missing_en** @ `sources[0].title`
  - DE: `Asilo e Protezione Internazionale — Dokumentation algorithmischer Asylverfahren`
- **missing_en** @ `sources[1].title`
  - DE: `UNHCR Italy — Bedenken zum algorithmischen Asylscoring`
- **missing_en** @ `sources[2].title`
  - DE: `Bias in Algorithms — Artificial Intelligence and Discrimination`

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

- **missing_en** @ `name`
  - DE: `Japan: Polizei setzt KI-Vorhersagesysteme ohne öffentliche Debatte ein`
- **missing_en** @ `description`
  - DE: `Japanische Polizeibehörden pilotieren in mehreren Großstädten KI-gestützte Vorhe`
- **missing_en** @ `location.name`
  - DE: `Tokio, Japan`
- **missing_en** @ `actors[0].name`
  - DE: `Japanische Nationalpolizei (NPA)`
- **missing_en** @ `actors[1].name`
  - DE: `NEC Corporation`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Unschuldsvermutung | Recht auf Privatsphäre | Gleichheitsgebot`
- **missing_en** @ `timeline[0].title`
  - DE: `NEC und Polizei starten Pilotprogramme`
- **missing_en** @ `timeline[0].description`
  - DE: `Die japanische Nationalpolizei beginnt in Zusammenarbeit mit NEC Corporation Pil`
- **missing_en** @ `timeline[1].title`
  - DE: `Ausweitung der KI-Nutzung in der Strafverfolgung`
- **missing_en** @ `timeline[1].description`
  - DE: `Die NPA kündigt eine systematische Erweiterung der KI-Nutzung in der Strafverfol`
- **missing_en** @ `timeline[2].title`
  - DE: `KI-Integrationspläne für 2025 bekanntgegeben`
- **missing_en** @ `timeline[2].description`
  - DE: `Das japanische Kabinett verabschiedet einen Plan zur umfassenden KI-Integration `
- **missing_en** @ `timeline[3].title`
  - DE: `Wachsende Kritik ohne strukturelle Reformen`
- **missing_en** @ `timeline[3].description`
  - DE: `Akademiker und Bürgerrechtsorganisationen veröffentlichen Studien, die potenziel`
- **missing_en** @ `sources[0].title`
  - DE: `Japanese police turn to AI to help predict crimes before they happen`
- **missing_en** @ `sources[1].title`
  - DE: `Japan unveils national AI strategy with public sector focus`
- **missing_en** @ `sources[2].title`
  - DE: `World Report 2024: Japan`

### japan-line-datenleck-china.json

- **missing_en** @ `name`
  - DE: `Japan: LINE-Datenleck — 86 Millionen Nutzerdaten in China zugänglich`
- **missing_en** @ `description`
  - DE: `Japans meistgenutzte Messaging-App LINE (86 Millionen Nutzer) gewährt chinesisch`
- **missing_en** @ `location.name`
  - DE: `Tokio, Japan`
- **missing_en** @ `actors[0].name`
  - DE: `LINE Corporation / Z Holdings (SoftBank + Naver)`
- **missing_en** @ `actors[1].name`
  - DE: `Chinesisches Subunternehmen (LINE China)`
- **missing_en** @ `actors[2].name`
  - DE: `Japanisches Ministerium für Innere Angelegenheiten (MIC)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Recht auf Datenschutz | Recht auf informationelle Selbstbestimmung`
- **missing_en** @ `timeline[0].title`
  - DE: `LINE als quasi-öffentliche Infrastruktur`
- **missing_en** @ `timeline[0].description`
  - DE: `LINE wird in Japan zur dominanten Kommunikationsplattform mit 86 Millionen Nutze`
- **missing_en** @ `timeline[1].title`
  - DE: `Zugriff chinesischer Techniker auf japanische Nutzerdaten enthüllt`
- **missing_en** @ `timeline[1].description`
  - DE: `Asahi Shimbun enthüllt, dass chinesische Mitarbeiter von LINE-Subunternehmen auf`
- **missing_en** @ `timeline[2].title`
  - DE: `Regierung und Kommunen stoppen LINE-Nutzung`
- **missing_en** @ `timeline[2].description`
  - DE: `Das japanische Ministerium für Innere Angelegenheiten ordnet eine Überprüfung an`
- **missing_en** @ `timeline[3].title`
  - DE: `Erneuter Datenleck-Skandal und Regulierungsdebatte`
- **missing_en** @ `timeline[3].description`
  - DE: `Ein weiterer Vorfall 2023 zeigt, dass über die Naver-Cloud erneut Daten von 440.`
- **missing_en** @ `sources[0].title`
  - DE: `Japan to probe Line over user data accessible from China`

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

- **missing_en** @ `name`
  - DE: `Jemen: KI-gestutzte Drohnenangriffe mit hoher Zivilbevolkerungsopferrate`
- **missing_en** @ `description`
  - DE: `US-amerikanische und saudische Streitkrafte setzen im Jemen KI-gestutzte Zielsys`
- **missing_en** @ `location.name`
  - DE: `Sanaa, Jemen`
- **missing_en** @ `actors[0].name`
  - DE: `US-Militar (CENTCOM / JSOC)`
- **missing_en** @ `actors[1].name`
  - DE: `Saudi-arabische Koalition`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Leben | Schutz der Zivilbevolkerung | Recht auf ein faires Verfahren`
- **missing_en** @ `timeline[0].title`
  - DE: `Erste US-Drohnenangriffe im Jemen`
- **missing_en** @ `timeline[0].description`
  - DE: `Die USA beginnen verdeckte Drohnenangriffe im Jemen unter der Bezeichnung 'Count`
- **missing_en** @ `timeline[1].title`
  - DE: `Saudi-Koalition eskaliert — US-Zieldaten fliessen`
- **missing_en** @ `timeline[1].description`
  - DE: `Mit Beginn der saudischen Militarintervention liefern die USA Zielkoordinaten un`
- **missing_en** @ `timeline[2].title`
  - DE: `Mwatana dokumentiert 510 rechtswidrige Angriffe`
- **missing_en** @ `timeline[2].description`
  - DE: `Die jemenitische Menschenrechtsorganisation Mwatana for Human Rights legt einen `
- **missing_en** @ `timeline[3].title`
  - DE: `UN-Expertenpanel kritisiert Zielalgorithmen`
- **missing_en** @ `timeline[3].description`
  - DE: `Das UN-Expertenpanel zum Jemen kritisiert in seinem Jahresbericht mangelnde Tran`
- **missing_en** @ `sources[0].title`
  - DE: `Day of Judgment: The Role of the United States in Civilian Harm in Yemen`

### jordanien-pegasus-journalisten.json

- **missing_en** @ `name`
  - DE: `Jordanien: Pegasus-Spyware gegen Journalisten, Anwaltschaft und Zivilgesellschaf`
- **missing_en** @ `description`
  - DE: `Jordanien setzte die Pegasus-Spyware des israelischen NSO Group ein, um Journali`
- **missing_en** @ `location.name`
  - DE: `Amman, Jordanien`
- **missing_en** @ `actors[0].name`
  - DE: `Jordanische Regierung`
- **missing_en** @ `actors[1].name`
  - DE: `NSO Group`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphare | Pressefreiheit | Meinungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Erste dokumentierte Targting-Operationen in Jordanien`
- **missing_en** @ `timeline[0].description`
  - DE: `Citizen Lab weist erste Spuren von Pegasus-Infrastruktur nach, die jordanischen `
- **missing_en** @ `timeline[1].title`
  - DE: `Citizen Lab und Front Line Defenders enthullen 35 Opfer`
- **missing_en** @ `timeline[1].description`
  - DE: `Ein gemeinsamer Bericht von Citizen Lab und Front Line Defenders veröffentlicht `
- **missing_en** @ `timeline[2].title`
  - DE: `Weitere Enthullungen: Anwaltschaft und Gewerkschaftsfuhrer betroffen`
- **missing_en** @ `timeline[2].description`
  - DE: `Zusatzliche forensische Analysen zeigen, dass auch der Vorsitzende der jordanisc`
- **missing_en** @ `timeline[3].title`
  - DE: `Access Now bestatigt weitere Opfer — keine Rechenschaftspflicht`
- **missing_en** @ `timeline[3].description`
  - DE: `Access Now veröffentlicht 2023 Berichte, die weitere jordanische Pegasus-Opfer b`
- **missing_en** @ `sources[0].title`
  - DE: `Front Line Defenders: Jordanien — Menschenrechtsverteidiger unter Uberwachung`

### kambodscha-chinesische-scam-compounds.json

- **missing_en** @ `name`
  - DE: `Kambodscha: Chinesische Betrugs-Compounds mit KI und Menschenhandel`
- **missing_en** @ `description`
  - DE: `In Sihanoukville und weiteren Orten Kambodschas betreiben chinesische kriminelle`
- **missing_en** @ `location.name`
  - DE: `Sihanoukville, Kambodscha`
- **missing_en** @ `actors[0].name`
  - DE: `Chinesische kriminelle Organisationen (Cyberkriminalitätskartelle)`
- **missing_en** @ `actors[1].name`
  - DE: `Kambodschanische Behörden`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Verbot von Sklaverei und Zwangsarbeit | Recht auf Freiheit | Menschenwürde`
- **missing_en** @ `timeline[0].title`
  - DE: `Entstehung der Scam-Compounds in Sihanoukville`
- **missing_en** @ `timeline[0].description`
  - DE: `Chinesische Investoren, die nach der Schließung von Glücksspielanlagen in Macao `
- **missing_en** @ `timeline[1].title`
  - DE: `UN-Bericht enthüllt Ausmaß des Menschenhandels`
- **missing_en** @ `timeline[1].description`
  - DE: `Das UN-Büro für Drogen- und Verbrechensbekämpfung (UNODC) veröffentlicht einen B`
- **missing_en** @ `timeline[2].title`
  - DE: `KI-Integration in Betrugssysteme skaliert den Schaden`
- **missing_en** @ `timeline[2].description`
  - DE: `Recherchen zeigen, dass die Compounds zunehmend KI-Tools einsetzen, darunter Dee`
- **missing_en** @ `timeline[3].title`
  - DE: `Internationaler Druck und partielle Räumungen`
- **missing_en** @ `timeline[3].description`
  - DE: `Unter internationalem Druck führt Kambodscha einige Razzien durch, ohne struktur`
- **missing_en** @ `sources[0].title`
  - DE: `Online Scam Operations and Trafficking into Forced Criminality in Southeast Asia`
- **missing_en** @ `sources[1].title`
  - DE: `Hundreds of thousands trafficked into online criminality across SE Asia`
- **missing_en** @ `sources[2].title`
  - DE: `China's Exploitation of Scam Centers in Southeast Asia`
- **missing_en** @ `sources[3].title`
  - DE: `Scam States: The Cybercrime-Corruption Complex in Southeast Asia`

### kambodscha-internet-gateway.json

- **missing_en** @ `name`
  - DE: `Kambodscha: Nationales Internet-Gateway zur staatlichen Kontrolle des gesamten D`
- **missing_en** @ `description`
  - DE: `Die kambodschanische Regierung erließ 2021 ein Dekret zur Einrichtung eines Nati`
- **missing_en** @ `location.name`
  - DE: `Phnom Penh, Kambodscha`
- **missing_en** @ `actors[0].name`
  - DE: `Kambodschanische Regierung (Hun-Sen-Regime)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Meinungsfreiheit | Informationsfreiheit | Pressefreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Erlass des NIG-Dekrets durch königliche Regierung`
- **missing_en** @ `timeline[0].description`
  - DE: `Die kambodschanische Regierung verabschiedet das Sub-Dekret Nr. 23 zur Einrichtu`
- **missing_en** @ `timeline[1].title`
  - DE: `Implementierungspläne und Verhandlungen mit ISPs`
- **missing_en** @ `timeline[1].description`
  - DE: `Die Regierung beginnt, Internetdienstanbieter zur Implementierung der technische`
- **missing_en** @ `timeline[2].title`
  - DE: `Teilweise Inbetriebnahme — erste dokumentierte Sperrungen`
- **missing_en** @ `timeline[2].description`
  - DE: `VOA Khmer und lokale Beobachter berichten von erster teilweiser Aktivierung des `
- **missing_en** @ `timeline[3].title`
  - DE: `Weitreichende Selbstzensur — internationale Verurteilung ohne Wirkung`
- **missing_en** @ `timeline[3].description`
  - DE: `Die Aussicht auf vollständige NIG-Implementierung führt zu weitreichender Selbst`
- **missing_en** @ `sources[0].title`
  - DE: `Cambodia's National Internet Gateway: A tool for censorship and surveillance`
- **missing_en** @ `sources[1].title`
  - DE: `Cambodia Internet Gateway reporting`

### kanada-ki-wohlfahrt-ontario.json

- **missing_en** @ `name`
  - DE: `Kanada Ontario: Algorithmische Kürzung von Sozialhilfe`
- **missing_en** @ `description`
  - DE: `Die Provinz Ontario setzt seit 2014 ein algorithmisches System ein, das automati`
- **missing_en** @ `location.name`
  - DE: `Toronto, Ontario, Kanada`
- **missing_en** @ `actors[0].name`
  - DE: `Ontario Ministry of Community and Social Services`
- **missing_en** @ `actors[1].name`
  - DE: `Citizen Lab / University of Toronto`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf soziale Sicherheit | Schutz vor Diskriminierung | Recht auf faires Verfahren`
- **missing_en** @ `timeline[0].title`
  - DE: `SAMS-System ersetzt manuelle Bearbeitung`
- **missing_en** @ `timeline[0].description`
  - DE: `Ontario führt das Social Assistance Management System (SAMS) ein, das die Bearbe`
- **missing_en** @ `timeline[1].title`
  - DE: `Massenhafte Fehlberechnungen und Kürzungen`
- **missing_en** @ `timeline[1].description`
  - DE: `Der Ontario Ombudsman erhält Hunderte Beschwerden. Sozialhilfeempfänger berichte`
- **missing_en** @ `timeline[2].title`
  - DE: `Ombudsman-Bericht dokumentiert systematische Fehler`
- **missing_en** @ `timeline[2].description`
  - DE: `Der Ontario Ombudsman veröffentlicht den Bericht 'The SAMS Story'. Er dokumentie`
- **missing_en** @ `timeline[3].title`
  - DE: `Forderungen nach algorithmischer Rechenschaftspflicht`
- **missing_en** @ `timeline[3].description`
  - DE: `Kanadische Bürgerrechtsorganisationen und Forscher fordern ein Algorithmic Impac`
- **missing_en** @ `sources[0].title`
  - DE: `Algorithmic Impact Assessment Tool`

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

- **missing_en** @ `name`
  - DE: `Kanada: RCMP nutzt Clearview AI heimlich und verstosst gegen Datenschutzrecht`
- **missing_en** @ `description`
  - DE: `Die Royal Canadian Mounted Police (RCMP) setzte ab 2019 heimlich Clearview AI zu`
- **missing_en** @ `location.name`
  - DE: `Ottawa, Kanada`
- **missing_en** @ `actors[0].name`
  - DE: `Royal Canadian Mounted Police (RCMP)`
- **missing_en** @ `actors[1].name`
  - DE: `Clearview AI`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphaere | Informationelle Selbstbestimmung | Recht auf faires Verfahren`
- **missing_en** @ `timeline[0].title`
  - DE: `RCMP beginnt heimlichen Einsatz von Clearview AI`
- **missing_en** @ `timeline[0].description`
  - DE: `Die RCMP schliesst einen Vertrag mit Clearview AI ab und nutzt das System für kr`
- **missing_en** @ `timeline[1].title`
  - DE: `OPC leitet Untersuchung ein`
- **missing_en** @ `timeline[1].description`
  - DE: `Nachdem Medienberichte den Einsatz von Clearview AI durch kanadische Behoerden a`
- **missing_en** @ `timeline[2].title`
  - DE: `OPC: RCMP-Einsatz verletzt Datenschutzrecht`
- **missing_en** @ `timeline[2].description`
  - DE: `Der OPC stellt fest, dass die RCMP mit dem heimlichen Einsatz von Clearview AI g`
- **missing_en** @ `timeline[3].title`
  - DE: `Gesetzgebungsluecken bleiben bestehen`
- **missing_en** @ `timeline[3].description`
  - DE: `Trotz der OPC-Entscheidung gibt es keine strafrechtlichen Konsequenzen für die R`
- **missing_en** @ `sources[0].title`
  - DE: `Police use of Facial Recognition Technology in Canada and the way forward — RCMP`
- **missing_en** @ `sources[1].title`
  - DE: `Clearview AI ceases offering its facial recognition technology in Canada`
- **missing_en** @ `sources[2].title`
  - DE: `RCMP Use of Face Recognition Tool Violated Privacy Law`
- **missing_en** @ `sources[3].title`
  - DE: `RCMP denied using facial recognition technology — then said it had been using it`

### kasachstan-ki-protest-shutdown.json

- **missing_en** @ `name`
  - DE: `Kasachstan: Internet-Shutdown und KI-Überwachung bei Januarprotesten 2022`
- **missing_en** @ `description`
  - DE: `Während der landesweiten Proteste im Januar 2022 schaltet Kasachstan das Interne`
- **missing_en** @ `location.name`
  - DE: `Almaty, Kasachstan`
- **missing_en** @ `actors[0].name`
  - DE: `Kasachische Regierung / KNB (Komitee für Nationale Sicherheit)`
- **missing_en** @ `actors[1].name`
  - DE: `Hikvision / Dahua`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Leben | Versammlungsfreiheit | Informationsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Massenproteste und Internet-Shutdown`
- **missing_en** @ `timeline[0].description`
  - DE: `Proteste gegen Gaspreiserhöhungen weiten sich zu landesweiten Demonstrationen ge`
- **missing_en** @ `timeline[1].title`
  - DE: `Schießbefehl: Mindestens 238 Tote`
- **missing_en** @ `timeline[1].description`
  - DE: `Präsident Tokajew gibt den Schießbefehl und ruft CSTO-Truppen (angeführt von Rus`
- **missing_en** @ `timeline[2].title`
  - DE: `Massenverhaftungen per Gesichtserkennung`
- **missing_en** @ `timeline[2].description`
  - DE: `Nach Wiederherstellung des Internets nutzen Sicherheitskräfte Überwachungsaufnah`
- **missing_en** @ `timeline[3].title`
  - DE: `Straflosigkeit und Ausbau der Überwachung`
- **missing_en** @ `timeline[3].description`
  - DE: `Kein Sicherheitsbeamter wird für die Tötungen strafrechtlich verfolgt. Stattdess`
- **missing_en** @ `sources[0].title`
  - DE: `Internet disrupted in Kazakhstan amid energy price protests`
- **missing_en** @ `sources[1].title`
  - DE: `Freedom on the Net 2023: Kazakhstan`

### katar-arbeiter-ueberwachung-wm.json

- **missing_en** @ `name`
  - DE: `Katar: Digitale Überwachung von Wanderarbeitern während der WM 2022`
- **missing_en** @ `description`
  - DE: `Im Vorfeld der FIFA-Weltmeisterschaft 2022 setzte Katar digitale Überwachungssys`
- **missing_en** @ `location.name`
  - DE: `Doha, Katar`
- **missing_en** @ `actors[0].name`
  - DE: `Katarische Regierung`
- **missing_en** @ `actors[1].name`
  - DE: `Baukonsortien (Lusail City, etc.)`
- **missing_en** @ `actors[2].name`
  - DE: `FIFA`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphaere | Arbeitsrechte | Bewegungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Massenrekrutierung und Aufbau digitaler Kontrollsysteme`
- **missing_en** @ `timeline[0].description`
  - DE: `Katar beginnt den massiven Aufbau von WM-Infrastruktur. Hundertausende Wanderarb`
- **missing_en** @ `timeline[1].title`
  - DE: `Amnesty-Berichte belegen systematische Ausbeutung`
- **missing_en** @ `timeline[1].description`
  - DE: `Amnesty International veröffentlicht umfassende Berichte über erzwungene Arbeit,`
- **missing_en** @ `timeline[2].title`
  - DE: `Guardian-Recherche: Über 6.500 Tote seit 2010`
- **missing_en** @ `timeline[2].description`
  - DE: `The Guardian veröffentlicht eine Analyse, wonach seit Vergabe der WM im Jahr 201`
- **missing_en** @ `timeline[3].title`
  - DE: `WM startet ohne grundlegende Systemreformen`
- **missing_en** @ `timeline[3].description`
  - DE: `Die WM findet im November-Dezember 2022 statt. Beobachter stellen fest, dass tro`
- **missing_en** @ `sources[0].title`
  - DE: `Qatar's World Cup of Shame`

### kenia-worldcoin-iris-scan.json

- **missing_en** @ `name`
  - DE: `Kenia: Worldcoin sammelt Iris-Scans ohne informierte Einwilligung`
- **missing_en** @ `description`
  - DE: `Das von Sam Altman mitgegrundete Unternehmen Worldcoin (heute: World) startete a`
- **missing_en** @ `location.name`
  - DE: `Nairobi, Kenia`
- **missing_en** @ `actors[0].name`
  - DE: `Worldcoin / Tools for Humanity`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf informierte Einwilligung | Recht auf Privatsphare | Schutz biometrischer Daten`
- **missing_en** @ `timeline[0].title`
  - DE: `Worldcoin startet globale Iris-Scan-Kampagne`
- **missing_en** @ `timeline[0].description`
  - DE: `Tools for Humanity baut den sogenannten 'Orb' — ein silbernes Kugelgerat, das Ir`
- **missing_en** @ `timeline[1].title`
  - DE: `MIT Technology Review enthullt problematische Praktiken`
- **missing_en** @ `timeline[1].description`
  - DE: `Eine Recherche des MIT Technology Review dokumentiert, dass Worldcoin gezielt ar`
- **missing_en** @ `timeline[2].title`
  - DE: `Kenia suspendiert Worldcoin-Aktivitaten`
- **missing_en** @ `timeline[2].description`
  - DE: `Das kenianische Innenministerium ordnet die sofortige Einstellung aller Worldcoi`
- **missing_en** @ `timeline[3].title`
  - DE: `Internationale Regulierungswelle und Unternehmensrebranding`
- **missing_en** @ `timeline[3].description`
  - DE: `Nach Ermittlungen in uber funf Landern benennt sich Worldcoin in 'World' um und `
- **missing_en** @ `sources[0].title`
  - DE: `Kenya becomes the first country to suspend Sam Altman's Worldcoin A.I.-crypto sc`
- **missing_en** @ `sources[1].title`
  - DE: `Kenya suspends Worldcoin scans over security, privacy and financial concerns`
- **missing_en** @ `sources[2].title`
  - DE: `Worldcoin ignored initial order to stop iris scans in Kenya, records show`
- **missing_en** @ `sources[3].title`
  - DE: `What to Know About Worldcoin and the Controversy Around It`
- **missing_en** @ `sources[4].title`
  - DE: `Kenya orders Worldcoin to delete biometric data in landmark privacy ruling`

### kenya-content-moderation.json

- **missing_en** @ `name`
  - DE: `Kenia Content-Moderation-Ausbeutung`
- **missing_en** @ `description`
  - DE: `Kenianische Arbeitskräfte werden für die traumatisierende Annotation von KI-Trai`
- **missing_en** @ `location.name`
  - DE: `Nairobi, Kenia`
- **missing_en** @ `actors[0].name`
  - DE: `Sama`
- **missing_en** @ `actors[1].name`
  - DE: `OpenAI`
- **missing_en** @ `actors[2].name`
  - DE: `Meta`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf faire Arbeitsbedingungen | Recht auf Gesundheit | Schutz vor Ausbeutung`
- **missing_en** @ `timeline[0].title`
  - DE: `Sama baut Annotationszentren in Kenia auf`
- **missing_en** @ `timeline[0].description`
  - DE: `Das US-Unternehmen Sama betreibt Daten-Annotationszentren in Nairobi und beschäf`
- **missing_en** @ `timeline[1].title`
  - DE: `OpenAI beauftragt Sama mit Toxizitäts-Labeling`
- **missing_en** @ `timeline[1].description`
  - DE: `OpenAI beauftragt Sama mit der Annotation toxischer Inhalte für das Training von`
- **missing_en** @ `timeline[2].title`
  - DE: `TIME-Recherche enthüllt Arbeitsbedingungen`
- **missing_en** @ `timeline[2].description`
  - DE: `Eine investigative Recherche des TIME Magazine enthüllt die traumatisierenden Ar`
- **missing_en** @ `timeline[3].title`
  - DE: `Sama beendet OpenAI-Vertrag vorzeitig`
- **missing_en** @ `timeline[3].description`
  - DE: `Nach der Veröffentlichung der TIME-Recherche beendet Sama den Vertrag mit OpenAI`
- **missing_en** @ `timeline[4].title`
  - DE: `Internationale Debatte über KI-Arbeitsausbeutung`
- **missing_en** @ `timeline[4].description`
  - DE: `Die Enthüllungen lösen eine breite internationale Debatte über die versteckten m`
- **missing_en** @ `sources[0].title`
  - DE: `Der menschliche Preis der KI-Entwicklung`
- **missing_en** @ `sources[1].title`
  - DE: `Inside the Hidden Battles of Africa's Gig Workers: Content Moderators in Kenya`

### kolumbien-ki-migration-profiling.json

- **missing_en** @ `name`
  - DE: `Kolumbien: KI-Profiling an der Grenze diskriminiert venezolanische Migranten`
- **missing_en** @ `description`
  - DE: `Kolumbien setzt an der Grenze zu Venezuela, insbesondere in Cucuta, KI-gestutzte`
- **missing_en** @ `location.name`
  - DE: `Cucuta, Colombia`
- **missing_en** @ `actors[0].name`
  - DE: `Kolumbianische Migrationsbehorde (Migracion Colombia)`
- **missing_en** @ `actors[1].name`
  - DE: `Internationale Organisation fur Migration (IOM)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Asyl | Bewegungsfreiheit | Recht auf Gleichbehandlung`
- **missing_en** @ `timeline[0].title`
  - DE: `Massenmigration aus Venezuela und Aufbau von Grenzkontrollsystemen`
- **missing_en** @ `timeline[0].description`
  - DE: `Wahrend die Zahl venezolanischer Migranten in Kolumbien auf uber 1,8 Millionen a`
- **missing_en** @ `timeline[1].title`
  - DE: `Einfuhrung von KI-gestutztem Grenz-Screening`
- **missing_en** @ `timeline[1].description`
  - DE: `Kolumbianische Grenzbehorden implementieren algorithmische Risikoanalyse fur ein`
- **missing_en** @ `timeline[2].title`
  - DE: `Schutzstatus TPS und anhaltende Profilierungsprobleme`
- **missing_en** @ `timeline[2].description`
  - DE: `Kolumbien erlasst den Temporaren Schutzstatus (TPS) fur venezolanische Migranten`
- **missing_en** @ `timeline[3].title`
  - DE: `Kritik durch Menschenrechtsorganisationen und Forderung nach Transparenz`
- **missing_en** @ `timeline[3].description`
  - DE: `Human Rights Watch und lokale Organisationen fordern Transparenz uber die einges`
- **missing_en** @ `sources[0].title`
  - DE: `IOM Colombia: Migration Response`

### kolumbien-ki-protest-ueberwachung.json

- **missing_en** @ `name`
  - DE: `Kolumbien: KI-Überwachung von Demonstranten`
- **missing_en** @ `description`
  - DE: `Während der Massenproteste 2019–2021 setzen kolumbianische Sicherheitskräfte KI-`
- **missing_en** @ `location.name`
  - DE: `Bogotá, Kolumbien`
- **missing_en** @ `actors[0].name`
  - DE: `Policía Nacional de Colombia`
- **missing_en** @ `actors[1].name`
  - DE: `ESMAD (Escuadrón Móvil Antidisturbios)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Versammlungsfreiheit | Meinungsfreiheit | Recht auf Privatsphäre`
- **missing_en** @ `timeline[0].title`
  - DE: `Paro Nacional: Massenproteste beginnen`
- **missing_en** @ `timeline[0].description`
  - DE: `Landesweite Proteste gegen die Regierung von Präsident Duque beginnen. Die Poliz`
- **missing_en** @ `timeline[1].title`
  - DE: `Proteste 2021: Gewalt und Überwachung eskalieren`
- **missing_en** @ `timeline[1].description`
  - DE: `Nach der Ankündigung einer Steuerreform brechen erneut Massenproteste aus. Siche`
- **missing_en** @ `timeline[2].title`
  - DE: `Interamerikanische Menschenrechtskommission besucht Kolumbien`
- **missing_en** @ `timeline[2].description`
  - DE: `Die IACHR dokumentiert systematische Menschenrechtsverletzungen während der Prot`
- **missing_en** @ `timeline[3].title`
  - DE: `Neue Regierung verspricht Reformen`
- **missing_en** @ `timeline[3].description`
  - DE: `Die Regierung Petro verspricht eine Reform der Polizei und Einschränkungen der Ü`
- **missing_en** @ `sources[0].title`
  - DE: `#ParoNacionalColombia and Digital Security Considerations for Police Brutality P`
- **missing_en** @ `sources[1].title`
  - DE: `Paro y pandemia: las respuestas a las protestas masivas en Colombia`
- **missing_en** @ `sources[2].title`
  - DE: `Colombia: Represión en la mira`
- **missing_en** @ `sources[3].title`
  - DE: `Protestas en Colombia de 2021`

### kuba-sorm-internet-kontrolle.json

- **missing_en** @ `name`
  - DE: `Kuba: Totale Internetüberwachung mit chinesischer Technologieunterstuetzung`
- **missing_en** @ `description`
  - DE: `Kuba betreibt seit der schrittweisen Einführung des Internets ein umfassendes Üb`
- **missing_en** @ `location.name`
  - DE: `Havanna, Kuba`
- **missing_en** @ `actors[0].name`
  - DE: `Kubanische Regierung`
- **missing_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Meinungsfreiheit | Recht auf Privatsphaere | Informationsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Beschränkter Internetzugang unter totaler staatlicher Kontrolle`
- **missing_en** @ `timeline[0].description`
  - DE: `Kuba ermöglichen nur wenige ausgewählte Standorte (Hotels, staatliche Institutio`
- **missing_en** @ `timeline[1].title`
  - DE: `Einführung des mobilen Internets mit eingebautem Überwachungssystem`
- **missing_en** @ `timeline[1].description`
  - DE: `Kuba führt erstmals mobiles Internet ein, das sofort unter ETECSA-Kontrolle steh`
- **missing_en** @ `timeline[2].title`
  - DE: `#11J: Groesste Proteste seit Jahrzehnten — Internet vollständig abgeschaltet`
- **missing_en** @ `timeline[2].description`
  - DE: `Am 11. Juli 2021 brechen die groessten Anti-Regierungs-Proteste seit Jahrzehnten`
- **missing_en** @ `timeline[3].title`
  - DE: `Steigende Überwachungskapazitäten trotz wirtschaftlicher Krise`
- **missing_en** @ `timeline[3].description`
  - DE: `Trotz schwerer Wirtschaftskrise investiert Kuba weiter in Überwachungsinfrastruk`
- **missing_en** @ `sources[0].title`
  - DE: `Freedom on the Net 2021: Cuba`
- **missing_en** @ `sources[1].title`
  - DE: `Freedom on the Net 2023: Cuba`
- **missing_en** @ `sources[2].title`
  - DE: `Keep It On: Internet shutdowns in Cuba`

### laos-chinese-surveillance-export.json

- **missing_en** @ `name`
  - DE: `Laos: Import chinesischer Überwachungssysteme — Safe City und Gesichtserkennung`
- **missing_en** @ `description`
  - DE: `Laos hat im Rahmen der Belt-and-Road-Initiative chinesische Überwachungstechnolo`
- **missing_en** @ `location.name`
  - DE: `Vientiane, Laos`
- **missing_en** @ `actors[0].name`
  - DE: `Laotische Regierung (LPRP)`
- **missing_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
- **missing_en** @ `actors[2].name`
  - DE: `ZTE Corporation`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Meinungsfreiheit | Versammlungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Smart-City-MoU mit China unterzeichnet`
- **missing_en** @ `timeline[0].description`
  - DE: `Laos unterzeichnet im Rahmen der Belt-and-Road-Initiative mehrere Absichtserklär`
- **missing_en** @ `timeline[1].title`
  - DE: `Einsatz der Safe-City-Systeme in Vientiane`
- **missing_en** @ `timeline[1].description`
  - DE: `Berichte über die operative Nutzung von Safe-City-Überwachungssystemen in der Ha`
- **missing_en** @ `timeline[2].title`
  - DE: `Expansion auf weitere Provinzen und Grenzübergänge`
- **missing_en** @ `timeline[2].description`
  - DE: `Laos erweitert die chinesische Überwachungsinfrastruktur auf Grenzübergänge und `
- **missing_en** @ `timeline[3].title`
  - DE: `Internationale Kritik ohne Folgen — Laos bleibt Einparteienstaat`
- **missing_en** @ `timeline[3].description`
  - DE: `Laos rangiert im Freedom House Bericht als 'Not Free' und zeigt keinerlei Anzeic`
- **missing_en** @ `sources[0].title`
  - DE: `The Global Expansion of AI Surveillance`
- **missing_en** @ `sources[1].title`
  - DE: `Freedom in the World 2023: Laos`

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

- **missing_en** @ `name`
  - DE: `NSO Group Pegasus Spyware`
- **missing_en** @ `description`
  - DE: `Die israelische Firma NSO Group verkauft die KI-gestützte Überwachungssoftware P`
- **missing_en** @ `location.name`
  - DE: `Herzliya, Israel`
- **missing_en** @ `actors[0].name`
  - DE: `NSO Group`
- **missing_en** @ `actors[1].name`
  - DE: `Diverse Regierungen (Saudi-Arabien, Marokko, Ungarn u.a.)`
- **missing_en** @ `actors[2].name`
  - DE: `Citizen Lab / University of Toronto`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Pressefreiheit | Meinungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Erste Pegasus-Infektionen dokumentiert`
- **missing_en** @ `timeline[0].description`
  - DE: `Citizen Lab an der University of Toronto dokumentiert erstmals Pegasus-Infektion`
- **missing_en** @ `timeline[1].title`
  - DE: `WhatsApp-Klage gegen NSO Group`
- **missing_en** @ `timeline[1].description`
  - DE: `WhatsApp/Meta verklagt NSO Group vor einem US-Bundesgericht wegen der Ausnutzung`
- **missing_en** @ `timeline[2].title`
  - DE: `Pegasus-Projekt: Globale Enthüllung`
- **missing_en** @ `timeline[2].description`
  - DE: `Ein Konsortium aus 17 Medienorganisationen, koordiniert von Forbidden Stories, v`
- **missing_en** @ `timeline[3].title`
  - DE: `USA setzen NSO Group auf Sanktionsliste`
- **missing_en** @ `timeline[3].description`
  - DE: `Das US-Handelsministerium setzt NSO Group auf die Entity List. Apple verklagt NS`
- **missing_en** @ `timeline[4].title`
  - DE: `WhatsApp gewinnt gegen NSO Group`
- **missing_en** @ `timeline[4].description`
  - DE: `Ein US-Bundesrichter urteilt zugunsten von WhatsApp/Meta im Prozess gegen NSO Gr`
- **missing_en** @ `sources[0].title`
  - DE: `The Million Dollar Dissident: NSO Group's iPhone Zero-Days`
- **missing_en** @ `sources[1].title`
  - DE: `Pegasus Project: Globaler Missbrauch von Überwachungstechnologie enthüllt`
- **missing_en** @ `sources[2].title`
  - DE: `EU-Parlament: Untersuchungsbericht des PEGA-Ausschusses`

### oesterreich-ki-ams-algorithmus.json

- **missing_en** @ `name`
  - DE: `Österreich: AMS-Algorithmus diskriminiert Frauen und ältere Arbeitssuchende`
- **missing_en** @ `description`
  - DE: `Das österreichische Arbeitsmarktservice (AMS) entwickelte ab 2018 ein algorithmi`
- **missing_en** @ `location.name`
  - DE: `Wien, Österreich`
- **missing_en** @ `actors[0].name`
  - DE: `AMS — Arbeitsmarktservice Österreich`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Gleichbehandlungsrecht | Recht auf Arbeit | Recht auf soziale Sicherheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Entwicklung des AMS-Scoring-Algorithmus`
- **missing_en** @ `timeline[0].description`
  - DE: `Das AMS beauftragt die Entwicklung eines maschinellen Lernsystems zur automatisc`
- **missing_en** @ `timeline[1].title`
  - DE: `Geplante Einführung löst öffentliche Debatte aus`
- **missing_en** @ `timeline[1].description`
  - DE: `Als die geplante Einführung des Algorithmus bekannt wird, kritisieren Frauenrech`
- **missing_en** @ `timeline[2].title`
  - DE: `Datenschutzbehörde rügt algorithmisches System`
- **missing_en** @ `timeline[2].description`
  - DE: `Die österreichische Datenschutzbehörde (DSB) stellt in einem Gutachten fest, das`
- **missing_en** @ `timeline[3].title`
  - DE: `Gerichtliche und politische Aufarbeitung`
- **missing_en** @ `timeline[3].description`
  - DE: `Datenschutzorganisationen reichen formelle Beschwerden ein; Gerichte bestätigen `
- **missing_en** @ `sources[0].title`
  - DE: `Österreich: Streit um den AMS-Algorithmus geht in die nächste Runde`
- **missing_en** @ `sources[1].title`
  - DE: `Datenschützer: AMS-Algorithmus muss sofort abgeschaltet werden`
- **missing_en** @ `sources[2].title`
  - DE: `Können Algorithmen diskriminieren?`
- **missing_en** @ `sources[3].title`
  - DE: `AMS-Algorithmus: Punktabzug für Frauen, Mütter und über 50-Jährige`

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

- **missing_en** @ `name`
  - DE: `Pakistan: KI-Überwachung zur Durchsetzung von Blasphemie-Gesetzen`
- **missing_en** @ `description`
  - DE: `Pakistan setzt KI-gestützte Social-Media-Überwachung ein, um 'blasphemische' Onl`
- **missing_en** @ `location.name`
  - DE: `Islamabad, Pakistan`
- **missing_en** @ `actors[0].name`
  - DE: `FIA (Federal Investigation Agency) / Cybercrime Wing`
- **missing_en** @ `actors[1].name`
  - DE: `PTA (Pakistan Telecommunication Authority)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Meinungsfreiheit | Religionsfreiheit | Recht auf Leben`
- **missing_en** @ `timeline[0].title`
  - DE: `PECA: Gesetz zur Kriminalisierung von Online-Blasphemie`
- **missing_en** @ `timeline[0].description`
  - DE: `Pakistan verabschiedet den Prevention of Electronic Crimes Act (PECA), der 'Blas`
- **missing_en** @ `timeline[1].title`
  - DE: `Todesstrafe für Facebook-Post`
- **missing_en** @ `timeline[1].description`
  - DE: `Taimoor Raza wird wegen eines Facebook-Posts zum Tode verurteilt — das erste Tod`
- **missing_en** @ `timeline[2].title`
  - DE: `Verschärfung: Automatisierte Entfernung und Lynchmorde`
- **missing_en** @ `timeline[2].description`
  - DE: `Pakistan zwingt Social-Media-Plattformen zur Installation von Filtersystemen und`
- **missing_en** @ `timeline[3].title`
  - DE: `Internationale Kritik und Fluchtbewegungen`
- **missing_en** @ `timeline[3].description`
  - DE: `UNHCR berichtet von steigenden Asylanträgen pakistanischer Blasphemie-Beschuldig`
- **missing_en** @ `sources[0].title`
  - DE: `Pakistan's Blasphemy Law Targets Youth on Social Media`
- **missing_en** @ `sources[1].title`
  - DE: `Pakistan Submission to the UN Human Rights Committee`
- **missing_en** @ `sources[2].title`
  - DE: `Pakistan blasphemy accusations: Islamist gang entraps, extorts`
- **missing_en** @ `sources[3].title`
  - DE: `TikToker held on blasphemy charges in Muzaffargarh`
- **missing_en** @ `sources[4].title`
  - DE: `World Report 2025: Pakistan`

### pakistan-safe-city-lahore.json

- **missing_en** @ `name`
  - DE: `Pakistan: Safe City-Projekt Lahore und Islamabad — chinesische Überwachungstechn`
- **missing_en** @ `description`
  - DE: `Pakistan hat in Lahore und Islamabad mit chinesischer Technologie umfassende Saf`
- **missing_en** @ `location.name`
  - DE: `Lahore, Pakistan`
- **missing_en** @ `actors[0].name`
  - DE: `Pakistanische Regierung / Punjab Safe Cities Authority (PSCA)`
- **missing_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Versammlungsfreiheit | Meinungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Einweihung des Safe City-Systems in Islamabad`
- **missing_en** @ `timeline[0].description`
  - DE: `Pakistan eröffnet das erste Safe City-System in Islamabad mit chinesischer Techn`
- **missing_en** @ `timeline[1].title`
  - DE: `Ausbau des Lahore-Systems durch Punjab Safe Cities Authority`
- **missing_en** @ `timeline[1].description`
  - DE: `Die Punjab Safe Cities Authority erweitert das Lahore-System auf über 8.000 Kame`
- **missing_en** @ `timeline[2].title`
  - DE: `Politische Überwachungsbedenken und Missbrauchsvorwürfe`
- **missing_en** @ `timeline[2].description`
  - DE: `Investigativjournalisten der Zeitung Dawn und internationale Beobachter berichte`
- **missing_en** @ `timeline[3].title`
  - DE: `Forderungen nach Datenschutzgesetz und parlamentarische Kritik`
- **missing_en** @ `timeline[3].description`
  - DE: `Pakistanische Bürgerrechtsorganisationen und internationale NGOs fordern ein umf`
- **missing_en** @ `sources[0].title`
  - DE: `Safe City Project launched in Islamabad`
- **missing_en** @ `sources[1].title`
  - DE: `PSCA surveillance network and civil liberties concerns`

### palantir-ice-ueberwachung.json

- **missing_en** @ `name`
  - DE: `Palantir & ICE: KI-gestützte Immigrationsüberwachung in den USA`
- **missing_en** @ `description`
  - DE: `Die US-Immigrationsbehörde ICE nutzt Palantirs Datenanalyseplattform FALCON, um `
- **missing_en** @ `location.name`
  - DE: `Washington, D.C., USA`
- **missing_en** @ `actors[0].name`
  - DE: `Palantir Technologies`
- **missing_en** @ `actors[1].name`
  - DE: `ICE (U.S. Immigration and Customs Enforcement)`
- **missing_en** @ `actors[2].name`
  - DE: `DHS (Department of Homeland Security)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Schutz vor Diskriminierung | Recht auf Asyl`
- **missing_en** @ `timeline[0].title`
  - DE: `Palantir-ICE-Vertrag für FALCON-System`
- **missing_en** @ `timeline[0].description`
  - DE: `ICE schließt Verträge mit Palantir Technologies über die FALCON-Plattform (späte`
- **missing_en** @ `timeline[1].title`
  - DE: `Trump-Administration eskaliert Abschiebungen`
- **missing_en** @ `timeline[1].description`
  - DE: `Unter der Trump-Administration werden die Palantir-Werkzeuge aggressiv zur Auswe`
- **missing_en** @ `timeline[2].title`
  - DE: `Palantirs Rolle bei Familientrennungen enthüllt`
- **missing_en** @ `timeline[2].description`
  - DE: `Investigative Berichte und geleakte Dokumente zeigen, dass Palantirs Systeme bei`
- **missing_en** @ `timeline[3].title`
  - DE: `Wachsender Widerstand und Transparency Reports`
- **missing_en** @ `timeline[3].description`
  - DE: `Der Mijente-Bericht 'Who's Behind ICE?' dokumentiert die gesamte Technologie-Lie`
- **missing_en** @ `sources[0].title`
  - DE: `Palantir Provides the Engine for Donald Trump's Deportation Machine`
- **missing_en** @ `sources[1].title`
  - DE: `American Dragnet: Data-Driven Deportation in the 21st Century`

### peru-ki-protest-ueberwachung.json

- **missing_en** @ `name`
  - DE: `Peru: Überwachungstechnologie gegen Protestierende nach der Staatskrise 2022`
- **missing_en** @ `description`
  - DE: `Nach der Amtsenthebung und Verhaftung von Präsident Pedro Castillo im Dezember 2`
- **missing_en** @ `location.name`
  - DE: `Lima, Peru`
- **missing_en** @ `actors[0].name`
  - DE: `Peruanische Regierung`
- **missing_en** @ `actors[1].name`
  - DE: `Peruanische Nationalpolizei (PNP)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Versammlungsfreiheit | Meinungsfreiheit | Recht auf Privatsphäre`
- **missing_en** @ `timeline[0].title`
  - DE: `Politische Krise und Massenproteste — Mobilisierung des Überwachungsapparats`
- **missing_en** @ `timeline[0].description`
  - DE: `Nach der gescheiterten Selbstermächtigung von Präsident Castillo und seiner Verh`
- **missing_en** @ `timeline[1].title`
  - DE: `Gewaltsame Niederschlagung mit dokumentierten Überwachungstools`
- **missing_en** @ `timeline[1].description`
  - DE: `Human Rights Watch dokumentiert, dass bei der gewaltsamen Auflösung von Proteste`
- **missing_en** @ `timeline[2].title`
  - DE: `Ausweitung digitaler Überwachungskapazitäten ohne gesetzlichen Rahmen`
- **missing_en** @ `timeline[2].description`
  - DE: `Peruanische Bürgerrechtsorganisationen und die EFF berichten, dass Behörden im N`
- **missing_en** @ `timeline[3].title`
  - DE: `Straflosigkeit und anhaltende Bedrohung für Aktivisten`
- **missing_en** @ `timeline[3].description`
  - DE: `Keine peruanische Sicherheitskraft wird für den Einsatz von Überwachung zur Unte`
- **missing_en** @ `sources[0].title`
  - DE: `Peru: Killings and injuries in protests could implicate president and chain of c`
- **missing_en** @ `sources[1].title`
  - DE: `Peruvian protests (2022–2023)`
- **missing_en** @ `sources[2].title`
  - DE: `Peru: Dina Boluarte ordered the murder of protesters and must stand trial for cr`
- **missing_en** @ `sources[3].title`
  - DE: `Peru: Justice for Indigenous Protestors Killed by Police`

### philippinen-duterte-social-media-ki.json

- **missing_en** @ `name`
  - DE: `Philippinen: KI-gestützte Troll-Armeen und Drogenkrieg`
- **missing_en** @ `description`
  - DE: `Während des 'Drogenkriegs' unter Präsident Duterte werden KI-gestützte Social-Me`
- **missing_en** @ `location.name`
  - DE: `Manila, Philippinen`
- **missing_en** @ `actors[0].name`
  - DE: `Duterte-Administration / Präsidentenbüro`
- **missing_en** @ `actors[1].name`
  - DE: `Facebook / Meta Platforms`
- **missing_en** @ `actors[2].name`
  - DE: `Rappler / Maria Ressa`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Leben | Pressefreiheit | Meinungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Social-Media-Wahlkampf und Troll-Armee`
- **missing_en** @ `timeline[0].description`
  - DE: `Duterte gewinnt die Präsidentschaftswahl mit Hilfe einer massiven Social-Media-K`
- **missing_en** @ `timeline[1].title`
  - DE: `Drogenkrieg und Desinformation`
- **missing_en** @ `timeline[1].description`
  - DE: `Dutertes 'Drogenkrieg' fordert nach offiziellen Zahlen über 6.000, nach Menschen`
- **missing_en** @ `timeline[2].title`
  - DE: `Facebook entfernt koordinierte Netzwerke`
- **missing_en** @ `timeline[2].description`
  - DE: `Facebook entfernt erstmals koordinierte philippinische Fake-Account-Netzwerke mi`
- **missing_en** @ `timeline[3].title`
  - DE: `Nobelpreis für Ressa und internationale Aufmerksamkeit`
- **missing_en** @ `timeline[3].description`
  - DE: `Maria Ressa erhält gemeinsam mit Dmitri Muratow den Friedensnobelpreis 'für ihre`
- **missing_en** @ `sources[0].title`
  - DE: `Propaganda War: Weaponizing the Internet`
- **missing_en** @ `sources[1].title`
  - DE: `Philippines: War on Drugs`
- **missing_en** @ `sources[2].title`
  - DE: `Maria Ressa – Facts – Nobel Peace Prize 2021`
- **missing_en** @ `sources[3].title`
  - DE: `Removing Coordinated Inauthentic Behavior from the Philippines`

### philippinen-ki-red-tagging.json

- **missing_en** @ `name`
  - DE: `Philippinen: Algorithmisches Red-Tagging von Aktivisten führt zu Tötungen`
- **missing_en** @ `description`
  - DE: `Das philippinische Militär und die staatliche Behoerde NTF-ELCAC nutzen Social-M`
- **missing_en** @ `location.name`
  - DE: `Manila, Philippinen`
- **missing_en** @ `actors[0].name`
  - DE: `Philippinisches Militär (AFP)`
- **missing_en** @ `actors[1].name`
  - DE: `NTF-ELCAC (National Task Force to End Local Communist Armed Conflict)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Leben | Meinungsfreiheit | Recht auf Privatsphaere`
- **missing_en** @ `timeline[0].title`
  - DE: `Gründung der NTF-ELCAC und Aufbau von Datenbanken`
- **missing_en** @ `timeline[0].description`
  - DE: `Praesident Duterte gründet per Exekutivorder die NTF-ELCAC, die alle Staatsberei`
- **missing_en** @ `timeline[1].title`
  - DE: `Anti-Terror-Gesetz legalisiert ausgeweitete Überwachung`
- **missing_en** @ `timeline[1].description`
  - DE: `Das Anti-Terror-Gesetz (Republic Act 11479) tritt in Kraft und gibt Behoerden we`
- **missing_en** @ `timeline[2].title`
  - DE: `'Bloody Sunday': Koordinierte Razzien auf Basis von Listen`
- **missing_en** @ `timeline[2].description`
  - DE: `Am 7. März 2021 werden bei koordinierten Polizeirazzien ('Bloody Sunday') neun P`
- **missing_en** @ `timeline[3].title`
  - DE: `Praxis unter Marcos setzt sich fort`
- **missing_en** @ `timeline[3].description`
  - DE: `Unter dem neuen Praesidenten Marcos Jr. setzt sich Red-Tagging fort. Ein ICC-Vor`
- **missing_en** @ `sources[0].title`
  - DE: `World Report 2024: Philippines`

### polen-ki-sozialleistungen-profiling.json

- **missing_en** @ `name`
  - DE: `Polen: Algorithmisches Profiling im Sozialhilfesystem diskriminiert Arbeitslose`
- **missing_en** @ `description`
  - DE: `Polens Arbeitsvermittlungsbehorden verwenden seit 2014 ein algorithmisches Profi`
- **missing_en** @ `location.name`
  - DE: `Warschau, Polen`
- **missing_en** @ `actors[0].name`
  - DE: `Polnisches Ministerium für Familie und Sozialpolitik`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf soziale Sicherheit | Gleichbehandlungsgrundsatz | Schutz vor Diskriminierung aufgrund des Alters`
- **missing_en** @ `timeline[0].title`
  - DE: `Einführung des Drei-Kategorien-Profilierungssystems`
- **missing_en** @ `timeline[0].description`
  - DE: `Das polnische Arbeitsministerium führt ein algorithmisches System ein, das Arbei`
- **missing_en** @ `timeline[1].title`
  - DE: `Panoptykon Foundation dokumentiert diskriminierende Wirkung`
- **missing_en** @ `timeline[1].description`
  - DE: `Die polnische Panoptykon Foundation veröffentlicht eine Untersuchung, die zeigt,`
- **missing_en** @ `timeline[2].title`
  - DE: `Klage vor dem Verfassungstribunal`
- **missing_en** @ `timeline[2].description`
  - DE: `Das Helsinki Komitee für Menschenrechte in Polen unterstützt Betroffene bei rech`
- **missing_en** @ `timeline[3].title`
  - DE: `Partielle Reform unter DSGVO-Druck`
- **missing_en** @ `timeline[3].description`
  - DE: `Polen modifiziert das System unter dem Druck der DSGVO und erster Gerichtsentsch`
- **missing_en** @ `sources[0].title`
  - DE: `Helsinki Foundation for Human Rights Poland — Sozialleistungen und Algorithmik`

### polen-pegasus-opposition.json

- **missing_en** @ `name`
  - DE: `Polen: Pegasus-Spyware gegen Oppositionspolitiker`
- **missing_en** @ `description`
  - DE: `Die polnische PiS-Regierung nutzt die NSO-Spyware Pegasus zur Überwachung von Op`
- **missing_en** @ `location.name`
  - DE: `Warschau, Polen`
- **missing_en** @ `actors[0].name`
  - DE: `CBA (Centralne Biuro Antykorupcyjne / Zentrales Antikorruptionsbüro)`
- **missing_en** @ `actors[1].name`
  - DE: `PiS-Regierung (Prawo i Sprawiedliwość)`
- **missing_en** @ `actors[2].name`
  - DE: `Citizen Lab / University of Toronto`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Recht auf freie Wahlen | Meinungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Pegasus-Einsatz gegen Oppositionspolitiker im Wahlkampf`
- **missing_en** @ `timeline[0].description`
  - DE: `Während des Parlamentswahlkampfs 2019 wird das Telefon von Senator Krzysztof Bre`
- **missing_en** @ `timeline[1].title`
  - DE: `Citizen Lab und AP bestätigen Pegasus-Infektion`
- **missing_en** @ `timeline[1].description`
  - DE: `Citizen Lab bestätigt forensisch die Pegasus-Infektion auf Brejzas Telefon. Asso`
- **missing_en** @ `timeline[2].title`
  - DE: `Senatsuntersuchungsausschuss`
- **missing_en** @ `timeline[2].description`
  - DE: `Der polnische Senat richtet einen Untersuchungsausschuss ein. Der PEGA-Ausschuss`
- **missing_en** @ `timeline[3].title`
  - DE: `Neue Regierung: Untersuchung und Aufarbeitung`
- **missing_en** @ `timeline[3].description`
  - DE: `Die neue Regierung unter PM Tusk leitet eine umfassende Untersuchung des Pegasus`
- **missing_en** @ `sources[0].title`
  - DE: `EU-Parlament: PEGA-Ausschuss Abschlussbericht`

### predpol-predictive-policing.json

- **missing_en** @ `name`
  - DE: `PredPol / Geolitica Predictive Policing`
- **missing_en** @ `description`
  - DE: `Der Predictive-Policing-Algorithmus PredPol (später umbenannt in Geolitica) vers`
- **missing_en** @ `location.name`
  - DE: `Los Angeles, USA`
- **missing_en** @ `actors[0].name`
  - DE: `PredPol/Geolitica`
- **missing_en** @ `actors[1].name`
  - DE: `LAPD`
- **missing_en** @ `actors[2].name`
  - DE: `Diverse US-Polizeibehörden`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Gleichbehandlung | Schutz vor Diskriminierung | Recht auf faire Behandlung durch Strafverfolgung`
- **missing_en** @ `timeline[0].title`
  - DE: `PredPol entwickelt und gegründet`
- **missing_en** @ `timeline[0].description`
  - DE: `PredPol wird als Spin-off akademischer Forschung an der UCLA gegründet. Der Algo`
- **missing_en** @ `timeline[1].title`
  - DE: `LAPD führt PredPol ein`
- **missing_en** @ `timeline[1].description`
  - DE: `Das Los Angeles Police Department wird einer der ersten großen Anwender von Pred`
- **missing_en** @ `timeline[2].title`
  - DE: `Studien belegen rassistische Verzerrung`
- **missing_en** @ `timeline[2].description`
  - DE: `Mehrere unabhängige Studien belegen, dass PredPol systematisch überwiegend schwa`
- **missing_en** @ `timeline[3].title`
  - DE: `LAPD beendet Nutzung von PredPol`
- **missing_en** @ `timeline[3].description`
  - DE: `Nach anhaltender Kritik und den Black-Lives-Matter-Protesten beendet das LAPD di`
- **missing_en** @ `timeline[4].title`
  - DE: `PredPol benennt sich in Geolitica um`
- **missing_en** @ `timeline[4].description`
  - DE: `Unter dem Druck öffentlicher Kritik benennt sich PredPol in Geolitica um. Trotz `
- **missing_en** @ `sources[0].title`
  - DE: `Crime Prediction Software Promised to Be Free of Biases. New Data Shows It Perpe`
- **missing_en** @ `sources[1].title`
  - DE: `LAPD beendet Predictive-Policing-Programm`
- **missing_en** @ `sources[2].title`
  - DE: `Geolitica/PredPol: Bias-Analyse der Vorhersage-Software`
- **missing_en** @ `sources[3].title`
  - DE: `Data-Driven Policing: Kampagne gegen algorithmische Überwachung`

### ruanda-ki-smart-city.json

- **missing_en** @ `name`
  - DE: `Ruanda: Smart-City-Uberwachungsinfrastruktur und autoritare Nutzung`
- **missing_en** @ `description`
  - DE: `Ruanda baut seit 2015 mit Unterstutzung chinesischer Technologiekonzerne eine um`
- **missing_en** @ `location.name`
  - DE: `Kigali, Ruanda`
- **missing_en** @ `actors[0].name`
  - DE: `Ruandische Regierung`
- **missing_en** @ `actors[1].name`
  - DE: `Chinesische Technologieunternehmen`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphare | Meinungsfreiheit | Versammlungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Smart-City-Initiativen und chinesische Technologiepartnerschaften`
- **missing_en** @ `timeline[0].description`
  - DE: `Ruanda startet ambitionierte Smart-City-Programme als Teil seiner Vision-2020-En`
- **missing_en** @ `timeline[1].title`
  - DE: `Kigali Safe City: Kameras, Gesichtserkennung und KI-Analyse`
- **missing_en** @ `timeline[1].description`
  - DE: `Das 'Kigali Safe City'-Projekt wird offiziell lanciert. Hunderte Kameras werden `
- **missing_en** @ `timeline[2].title`
  - DE: `COVID-Uberwachung und Ausweitung der Kontrollinfrastruktur`
- **missing_en** @ `timeline[2].description`
  - DE: `Ruanda nutzt die COVID-19-Pandemie, um Uberwachungsmasnahmen erheblich auszuweit`
- **missing_en** @ `timeline[3].title`
  - DE: `Grenzuberschreitende Uberwachung ruandischer Dissidenten`
- **missing_en** @ `timeline[3].description`
  - DE: `The Guardian und Citizen Lab berichten uber Falle, in denen ruandische Uberwachu`
- **missing_en** @ `sources[0].title`
  - DE: `The chilling tale of mass surveillance and spying in Rwanda`
- **missing_en** @ `sources[1].title`
  - DE: `Rwanda: Freedom on the Net 2024 Country Report`
- **missing_en** @ `sources[2].title`
  - DE: `China's Smart Cities in Africa: Should the United States Be Concerned?`
- **missing_en** @ `sources[3].title`
  - DE: `Africa in the Crosshairs of New Disinformation and Surveillance Schemes That Und`
- **missing_en** @ `sources[4].title`
  - DE: `SMART Rwanda Master Plan`

### rumaenien-wahlannullierung-tiktok.json

- **missing_en** @ `name`
  - DE: `Rumänien: Annullierung der Präsidentschaftswahl 2024 wegen TikTok-Algorithmus-Ma`
- **missing_en** @ `description`
  - DE: `Das rumänische Verfassungsgericht annullierte am 6. Dezember 2024 die erste Rund`
- **missing_en** @ `location.name`
  - DE: `Bukarest, Rumänien`
- **missing_en** @ `actors[0].name`
  - DE: `TikTok / ByteDance`
- **missing_en** @ `actors[1].name`
  - DE: `Rumänisches Verfassungsgericht (Curtea Constituțională)`
- **missing_en** @ `actors[2].name`
  - DE: `Mutmaßlich russische staatliche Akteure`
- **missing_en** @ `actors[3].name`
  - DE: `Europäische Kommission`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf freie Wahlen | Recht auf demokratische Teilhabe | Meinungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Koordinierte TikTok-Kampagne baut Reichweite auf`
- **missing_en** @ `timeline[0].description`
  - DE: `In den Wochen vor der ersten Wahlrunde werden über 25.000 TikTok-Konten und 5.00`
- **missing_en** @ `timeline[1].title`
  - DE: `Erste Wahlrunde: Georgescu führt überraschend mit ~22,9 Prozent`
- **missing_en** @ `timeline[1].description`
  - DE: `Călin Georgescu, ein zuvor weitgehend unbekannter ultranationalistischer Kandida`
- **missing_en** @ `timeline[2].title`
  - DE: `Präsident Iohannis deklassifiziert Geheimdienstberichte`
- **missing_en** @ `timeline[2].description`
  - DE: `Der scheidende Präsident Klaus Iohannis veröffentlicht deklassifizierte Berichte`
- **missing_en** @ `timeline[3].title`
  - DE: `Verfassungsgericht annulliert die Wahl — erstes EU-Präzedenzfall`
- **missing_en** @ `timeline[3].description`
  - DE: `Das rumänische Verfassungsgericht annulliert einstimmig die erste Wahlrunde und `
- **missing_en** @ `sources[0].title`
  - DE: `Romania annulled its presidential election results amid alleged Russian interfer`
- **missing_en** @ `sources[1].title`
  - DE: `Romania's Election Nullified: Russian Interference and the Struggle for Democrac`
- **missing_en** @ `sources[2].title`
  - DE: `What happened on TikTok around the annulled Romanian presidential election? An i`
- **missing_en** @ `sources[3].title`
  - DE: `Romania Cancels Presidential Election Results After Alleged Russian Meddling on `
- **missing_en** @ `sources[4].title`
  - DE: `Hybrid warfare through disinformation: the case of Romania's presidential electi`

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

- **missing_en** @ `name`
  - DE: `Russland: Gesichtserkennung in Moskau zur Identifizierung von Demonstranten`
- **missing_en** @ `description`
  - DE: `Moskau betreibt eines der dichtesten stadtischen Gesichtserkennungsnetzwerke der`
- **missing_en** @ `location.name`
  - DE: `Moskau, Russland`
- **missing_en** @ `actors[0].name`
  - DE: `Stadtregierung Moskau / Russische Foderationsregierung`
- **missing_en** @ `actors[1].name`
  - DE: `NtechLab`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Versammlungsfreiheit | Meinungsfreiheit | Recht auf Privatsphare`
- **missing_en** @ `timeline[0].title`
  - DE: `Einfuhrung des stadtweiten Gesichtserkennungssystems`
- **missing_en** @ `timeline[0].description`
  - DE: `Moskau schreibt einen Vertrag mit NtechLab aus und integriert Gesichtserkennungs`
- **missing_en** @ `timeline[1].title`
  - DE: `Ausbau wahrend der COVID-Pandemie und neue Rechtsgrundlagen`
- **missing_en** @ `timeline[1].description`
  - DE: `Unter dem Deckmantel der COVID-19-Qurantanekontrolle wird das System massiv ausg`
- **missing_en** @ `timeline[2].title`
  - DE: `Massenverhaftungen bei Nawalny-Protesten per Gesichtserkennung`
- **missing_en** @ `timeline[2].description`
  - DE: `Nach der Verhaftung Alexei Nawalnys im Januar 2021 kommt es zu landesweiten Demo`
- **missing_en** @ `timeline[3].title`
  - DE: `Internationale Verurteilung und zunehmende Selbstzensur`
- **missing_en** @ `timeline[3].description`
  - DE: `Human Rights Watch und OVD-Info dokumentieren den systematischen Einsatz von Ges`
- **missing_en** @ `sources[0].title`
  - DE: `Russia: Police target peaceful protesters identified using facial recognition te`
- **missing_en** @ `sources[1].title`
  - DE: `How the Russian state uses cameras against protesters`
- **missing_en** @ `sources[2].title`
  - DE: `Kremlin Leaks: How Putin's Regime is Building AI Surveillance Operations`
- **missing_en** @ `sources[3].title`
  - DE: `Navalny protesters say police are using facial recognition to track them down`

### russland-ki-deepfake-ukraine-krieg.json

- **missing_en** @ `name`
  - DE: `Russland: KI-Deepfakes und Desinformation im Ukraine-Krieg`
- **missing_en** @ `description`
  - DE: `Seit dem Beginn der russischen Invasion in der Ukraine im Februar 2022 setzt Rus`
- **missing_en** @ `location.name`
  - DE: `Moskau, Russland`
- **missing_en** @ `actors[0].name`
  - DE: `Russische Regierung`
- **missing_en** @ `actors[1].name`
  - DE: `Russisches Militär`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Informationsfreiheit | Recht auf Wahrheit | Nationale Sicherheit der Ukraine`
- **missing_en** @ `timeline[0].title`
  - DE: `Beginn der Invasion und gleichzeitiger Informationskrieg`
- **missing_en** @ `timeline[0].description`
  - DE: `Mit Beginn der militärischen Invasion startet Russland parallel eine massive Inf`
- **missing_en** @ `timeline[1].title`
  - DE: `Deepfake-Video von Praesident Selenskyj`
- **missing_en** @ `timeline[1].description`
  - DE: `Ein KI-generiertes Deepfake-Video verbreitet sich viral, in dem Praesident Selen`
- **missing_en** @ `timeline[2].title`
  - DE: `Systematische KI-Propagandaeskalation`
- **missing_en** @ `timeline[2].description`
  - DE: `Meta veröffentlicht Threat Intelligence Reports über koordinierte inauthenthisch`
- **missing_en** @ `timeline[3].title`
  - DE: `Internationale Gegenmassnahmen und Debatte über KI-Regulierung`
- **missing_en** @ `timeline[3].description`
  - DE: `Die EU verstärkt das East StratCom Task Force-Mandat und finanziert Medienalphab`
- **missing_en** @ `sources[0].title`
  - DE: `EUvsDisinfo — Russische Desinformationskampagnen`
- **missing_en** @ `sources[1].title`
  - DE: `EU DisinfoLab — AI-generated Disinformation Reports`

### russland-ki-zensur-roskomnadzor.json

- **missing_en** @ `name`
  - DE: `Russland: KI-gestützte Internetzensur durch Roskomnadzor`
- **missing_en** @ `description`
  - DE: `Die russische Medienaufsichtsbehörde Roskomnadzor setzt seit 2019 das Deep Packe`
- **missing_en** @ `location.name`
  - DE: `Moskau, Russland`
- **missing_en** @ `actors[0].name`
  - DE: `Roskomnadzor (Föderaler Dienst für die Überwachung von Kommunikation)`
- **missing_en** @ `actors[1].name`
  - DE: `Russische Regierung`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Meinungsfreiheit | Pressefreiheit | Informationsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Souveränes-Internet-Gesetz tritt in Kraft`
- **missing_en** @ `timeline[0].description`
  - DE: `Das 'Gesetz über ein souveränes Internet' verpflichtet alle russischen ISPs, TSP`
- **missing_en** @ `timeline[1].title`
  - DE: `Drosselung von Twitter als Testlauf`
- **missing_en** @ `timeline[1].description`
  - DE: `Roskomnadzor drosselt den Zugang zu Twitter in Russland mittels DPI als Reaktion`
- **missing_en** @ `timeline[2].title`
  - DE: `Massenblockaden nach Ukraine-Invasion`
- **missing_en** @ `timeline[2].description`
  - DE: `Nach dem Einmarsch in die Ukraine blockiert Russland mittels TSPU Facebook, Inst`
- **missing_en** @ `timeline[3].title`
  - DE: `Eskalation: YouTube-Drosselung und VPN-Blockaden`
- **missing_en** @ `timeline[3].description`
  - DE: `Roskomnadzor beginnt mit der systematischen Drosselung von YouTube um bis zu 70%`
- **missing_en** @ `sources[0].title`
  - DE: `Freedom on the Net 2024: Russia`
- **missing_en** @ `sources[1].title`
  - DE: `Russia slows down Twitter in dispute over banned content`

### saudi-arabien-absher-frauen.json

- **missing_en** @ `name`
  - DE: `Saudi-Arabien: Absher-App ermöglicht Mannern die Kontrolle uber Bewegungen von F`
- **missing_en** @ `description`
  - DE: `Die von der saudi-arabischen Regierung bereitgestellte App 'Absher' ermöglicht m`
- **missing_en** @ `location.name`
  - DE: `Riad, Saudi-Arabien`
- **missing_en** @ `actors[0].name`
  - DE: `Regierung Saudi-Arabiens`
- **missing_en** @ `actors[1].name`
  - DE: `Apple / Google`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Bewegungsfreiheit | Recht auf Gleichbehandlung | Diskriminierungsschutz`
- **missing_en** @ `timeline[0].title`
  - DE: `Einfuhrung der Absher-App`
- **missing_en** @ `timeline[0].description`
  - DE: `Die saudi-arabische Regierung stellt Absher als digitale Verwaltungs-App vor, di`
- **missing_en** @ `timeline[1].title`
  - DE: `Internationale Aufmerksamkeit durch HRW-Bericht und Medienberichte`
- **missing_en** @ `timeline[1].description`
  - DE: `Human Rights Watch und The Insider veröffentlichen Berichte, die die Absher-App `
- **missing_en** @ `timeline[2].title`
  - DE: `Kongress-Briefe an Apple und Google`
- **missing_en** @ `timeline[2].description`
  - DE: `US-Kongressabgeordnete schreiben offene Briefe an Apple-CEO Tim Cook und Google-`
- **missing_en** @ `timeline[3].title`
  - DE: `Begrenzte Reformen und fortgesetzter App-Betrieb`
- **missing_en** @ `timeline[3].description`
  - DE: `Saudi-Arabien lockert einige Aspekte des Vormund-Systems: Frauen uber 21 Jahre d`
- **missing_en** @ `sources[0].title`
  - DE: `Saudi Arabia: Mobile App Keeps Women at Home`
- **missing_en** @ `sources[1].title`
  - DE: `Apple and Google urged to remove Saudi app that tracks women`
- **missing_en** @ `sources[2].title`
  - DE: `Apple, Google In Crosshairs For Carrying App That Lets Saudi Men Track Wives`
- **missing_en** @ `sources[3].title`
  - DE: `Saudi Sisters Urge Google and Apple to Pull an 'Inhuman' App`

### saudi-arabien-ki-pilgerstrom.json

- **missing_en** @ `name`
  - DE: `Saudi-Arabien: KI-Massenüberwachung bei Hajj und Neom`
- **missing_en** @ `description`
  - DE: `Saudi-Arabien setzt KI-gestützte Gesichtserkennung und Verhaltensanalyse zur Übe`
- **missing_en** @ `location.name`
  - DE: `Mekka / Neom, Saudi-Arabien`
- **missing_en** @ `actors[0].name`
  - DE: `Saudi-Arabische Regierung / Ministry of Hajj`
- **missing_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Religionsfreiheit | Bewegungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Smart-Hajj-Initiative und Neom-Planung`
- **missing_en** @ `timeline[0].description`
  - DE: `Saudi-Arabien startet die Smart-Hajj-Initiative mit KI-gestützter Menschenstroma`
- **missing_en** @ `timeline[1].title`
  - DE: `Umfassende biometrische Pilgerkontrolle`
- **missing_en** @ `timeline[1].description`
  - DE: `Saudi-Arabien implementiert ein lückenloses biometrisches Kontrollsystem für die`
- **missing_en** @ `timeline[2].title`
  - DE: `Huawei liefert Safe-City-Technologie`
- **missing_en** @ `timeline[2].description`
  - DE: `Berichte zeigen die tiefe Partnerschaft zwischen Saudi-Arabien und Huawei für Üb`
- **missing_en** @ `timeline[3].title`
  - DE: `Internationale Kritik und Menschenrechtsdebatte`
- **missing_en** @ `timeline[3].description`
  - DE: `Human Rights Watch und Amnesty International warnen, dass Saudi-Arabiens KI-Über`
- **missing_en** @ `sources[0].title`
  - DE: `The Global Expansion of AI Surveillance`

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

- **missing_en** @ `name`
  - DE: `Schweden: REVA-Projekt und algorithmisches Racial Profiling bei Polizei und Migr`
- **missing_en** @ `description`
  - DE: `Das schwedische REVA-Programm (Rättssäkert och effektivt verkställighetsarbete) `
- **missing_en** @ `location.name`
  - DE: `Stockholm, Schweden`
- **missing_en** @ `actors[0].name`
  - DE: `Schwedische Polizei (Polismyndigheten)`
- **missing_en** @ `actors[1].name`
  - DE: `Schwedische Migrationsbehorde (Migrationsverket)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Gleichheitsrecht | Diskriminierungsfreiheit | Recht auf Privatsphare`
- **missing_en** @ `timeline[0].title`
  - DE: `Start des REVA-Projekts`
- **missing_en** @ `timeline[0].description`
  - DE: `Die schwedische Regierung startet REVA als Kooperationsprogramm zwischen Polizei`
- **missing_en** @ `timeline[1].title`
  - DE: `Enthullung: Polizei kontrolliert systematisch nichtweisse Personen`
- **missing_en** @ `timeline[1].description`
  - DE: `Investigative Berichte und eine Anzeige an den schwedischen Ombudsmann (DO) enth`
- **missing_en** @ `timeline[2].title`
  - DE: `Ausweitung auf datengestutzte Polizeiarbeit`
- **missing_en** @ `timeline[2].description`
  - DE: `Die schwedische Polizei erweitert datengestutzte Methoden auf die 'Gefahrdete-Ge`
- **missing_en** @ `timeline[3].title`
  - DE: `EU-KI-Gesetz-Debatten und schwedische Reformforderungen`
- **missing_en** @ `timeline[3].description`
  - DE: `Im Kontext der EU-KI-Act-Debatten geraten schwedische Polizeialgorithmen erneut `
- **missing_en** @ `sources[0].title`
  - DE: `Swedish police collect illegal database of Roma`
- **missing_en** @ `sources[1].title`
  - DE: `How We Work to Combat Ethnic/Racial Profiling`
- **missing_en** @ `sources[2].title`
  - DE: `Stockholm police end 'racial profiling' push`
- **missing_en** @ `sources[3].title`
  - DE: `Swedish Police, Racism and Resistance`

### schweden-ki-schule-gesichtserkennung.json

- **missing_en** @ `name`
  - DE: `Schweden: DSGVO-Strafe für Gesichtserkennung an Schule`
- **missing_en** @ `description`
  - DE: `Eine Schule in Skellefteå, Schweden, testet 2019 ein Gesichtserkennungssystem zu`
- **missing_en** @ `location.name`
  - DE: `Skellefteå, Schweden`
- **missing_en** @ `actors[0].name`
  - DE: `Kommun Skellefteå / Anderstorpsskolan`
- **missing_en** @ `actors[1].name`
  - DE: `IMY (Integritetsskyddsmyndigheten / Schwedische Datenschutzbehörde)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Schutz von Kindern | Recht auf Datenschutz`
- **missing_en** @ `timeline[0].title`
  - DE: `Pilotprojekt: Gesichtserkennung für Anwesenheit`
- **missing_en** @ `timeline[0].description`
  - DE: `Die Anderstorpsskolan in Skellefteå testet drei Wochen lang ein Gesichtserkennun`
- **missing_en** @ `timeline[1].title`
  - DE: `Erste DSGVO-Strafe für Gesichtserkennung weltweit`
- **missing_en** @ `timeline[1].description`
  - DE: `Die schwedische Datenschutzbehörde DPA (heute IMY) verhängt eine Strafe von 200.`
- **missing_en** @ `timeline[2].title`
  - DE: `Signalwirkung für europäische Schulen`
- **missing_en** @ `timeline[2].description`
  - DE: `Das Urteil wird zum Referenzfall für die Verarbeitung biometrischer Daten von Ki`
- **missing_en** @ `sources[0].title`
  - DE: `Guidelines 3/2019 on processing of personal data through video devices`

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

- **missing_en** @ `name`
  - DE: `Serbien: Huawei Safe-City-Massenüberwachung in Belgrad`
- **missing_en** @ `description`
  - DE: `Die serbische Regierung installiert tausende Huawei-Überwachungskameras mit Gesi`
- **missing_en** @ `location.name`
  - DE: `Belgrad, Serbien`
- **missing_en** @ `actors[0].name`
  - DE: `Serbische Regierung / MUP (Innenministerium)`
- **missing_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
- **missing_en** @ `actors[2].name`
  - DE: `SHARE Foundation`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Versammlungsfreiheit | Meinungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Huawei-Vertrag für Safe-City-System`
- **missing_en** @ `timeline[0].description`
  - DE: `Die serbische Regierung schließt einen Vertrag mit Huawei über die Installation `
- **missing_en** @ `timeline[1].title`
  - DE: `Protest-Überwachung bei Anti-Regierungsprotesten`
- **missing_en** @ `timeline[1].description`
  - DE: `Während der Massenproteste gegen die Regierung Vučić im Juli 2020 dokumentieren `
- **missing_en** @ `timeline[2].title`
  - DE: `Datenschutzbehörde ohne Kompetenzen`
- **missing_en** @ `timeline[2].description`
  - DE: `Die SHARE Foundation deckt auf, dass die serbische Datenschutzbehörde nie eine F`
- **missing_en** @ `timeline[3].title`
  - DE: `EU-Parlament warnt vor Überwachungsexport`
- **missing_en** @ `timeline[3].description`
  - DE: `Das EU-Parlament mahnt in einem Bericht über den serbischen EU-Beitrittsprozess `
- **missing_en** @ `sources[0].title`
  - DE: `The Global Expansion of AI Surveillance`

### simbabwe-ki-chinesische-ueberwachung.json

- **missing_en** @ `name`
  - DE: `Simbabwe: Chinesische Gesichtserkennung und Smart-City-Überwachung`
- **missing_en** @ `description`
  - DE: `Simbabwe hat im Rahmen der chinesischen Gürtel-und-Straßen-Initiative umfangreic`
- **missing_en** @ `location.name`
  - DE: `Harare, Simbabwe`
- **missing_en** @ `actors[0].name`
  - DE: `Simbabwische Regierung`
- **missing_en** @ `actors[1].name`
  - DE: `CloudWalk Technology`
- **missing_en** @ `actors[2].name`
  - DE: `Hikvision`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Meinungsfreiheit | Versammlungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `CloudWalk-Vertrag: Gesichtsdaten gegen Technologie`
- **missing_en** @ `timeline[0].description`
  - DE: `Die simbabwische Regierung unter Emmerson Mnangagwa unterzeichnet einen Vertrag `
- **missing_en** @ `timeline[1].title`
  - DE: `Aufbau einer nationalen Gesichtserkennungsdatenbank`
- **missing_en** @ `timeline[1].description`
  - DE: `Simbabwe beginnt mit dem Aufbau einer nationalen biometrischen Datenbank, in die`
- **missing_en** @ `timeline[2].title`
  - DE: `Hikvision-Ausweitung auf Städte und öffentliche Räume`
- **missing_en** @ `timeline[2].description`
  - DE: `Hikvision-Kameras werden in mehreren simbabwischen Städten, an Schulen und in öf`
- **missing_en** @ `timeline[3].title`
  - DE: `Internationale Kritik und fehlende Rechenschaftspflicht`
- **missing_en** @ `timeline[3].description`
  - DE: `Internationale Menschenrechtsorganisationen und westliche Regierungen kritisiere`
- **missing_en** @ `sources[0].title`
  - DE: `Global Inventory of AI Surveillance`

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

- **missing_en** @ `name`
  - DE: `Türkei: KI-gestützte Social-Media-Überwachung und Desinformationsgesetz`
- **missing_en** @ `description`
  - DE: `Die Türkei nutzt KI-gestützte Werkzeuge zur systematischen Überwachung sozialer `
- **missing_en** @ `location.name`
  - DE: `Ankara, Türkei`
- **missing_en** @ `actors[0].name`
  - DE: `BTK (Bilgi Teknolojileri ve İletişim Kurumu)`
- **missing_en** @ `actors[1].name`
  - DE: `Türkische Regierung / AKP`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Meinungsfreiheit | Pressefreiheit | Recht auf Privatsphäre`
- **missing_en** @ `timeline[0].title`
  - DE: `Massenhafte Sperrung von Websites und Social Media`
- **missing_en** @ `timeline[0].description`
  - DE: `Nach den Gezi-Park-Protesten und Korruptionsenthüllungen intensiviert die Erdoğa`
- **missing_en** @ `timeline[1].title`
  - DE: `Social-Media-Gesetz erzwingt lokale Datenspeicherung`
- **missing_en** @ `timeline[1].description`
  - DE: `Die Türkei verabschiedet ein Gesetz, das Social-Media-Plattformen mit über 1 Mil`
- **missing_en** @ `timeline[2].title`
  - DE: `Desinformationsgesetz: Bis 3 Jahre Haft für 'Falschinformationen'`
- **missing_en** @ `timeline[2].description`
  - DE: `Das Parlament verabschiedet ein Gesetz, das die Verbreitung von 'Falschinformati`
- **missing_en** @ `timeline[3].title`
  - DE: `Erdbebenberichterstattung unter Zensurdruck`
- **missing_en** @ `timeline[3].description`
  - DE: `Nach dem verheerenden Erdbeben im Februar 2023 werden Journalisten und Social-Me`
- **missing_en** @ `sources[0].title`
  - DE: `Freedom on the Net 2023: Turkey`
- **missing_en** @ `sources[1].title`
  - DE: `Turkey: Social Media Law Will Increase Censorship`
- **missing_en** @ `sources[2].title`
  - DE: `Turkey – Press Freedom Index`

### tunesien-internet-ueberwachung.json

- **missing_en** @ `name`
  - DE: `Tunesien: Digitale Überwachungsausweitung unter Saied — Rückfall nach dem Arabis`
- **missing_en** @ `description`
  - DE: `Tunesien galt nach dem Arabischen Frühling von 2011 als Hoffnungsträger für digi`
- **missing_en** @ `location.name`
  - DE: `Tunis, Tunesien`
- **missing_en** @ `actors[0].name`
  - DE: `Tunesische Regierung`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Meinungsfreiheit | Pressefreiheit | Recht auf Privatsphäre`
- **missing_en** @ `timeline[0].title`
  - DE: `Arabischer Frühling: Tunesien als digitales Vorbild`
- **missing_en** @ `timeline[0].description`
  - DE: `Nach dem Sturz von Ben Ali beendet Tunesien die staatliche Internetzensur und en`
- **missing_en** @ `timeline[1].title`
  - DE: `Saieds Staatsstreich — Beginn digitaler Repression`
- **missing_en** @ `timeline[1].description`
  - DE: `Präsident Kais Saied setzt am 25. Juli 2021 die Verfassung ausser Kraft, löst da`
- **missing_en** @ `timeline[2].title`
  - DE: `Dekret 54: Online-Kritik wird kriminalisiert`
- **missing_en** @ `timeline[2].description`
  - DE: `Dekret 54 tritt in Kraft und stellt das Verbreiten 'falscher Nachrichten' und da`
- **missing_en** @ `timeline[3].title`
  - DE: `Verhaftungswelle, Selbstzensur, internationale Verurteilung`
- **missing_en** @ `timeline[3].description`
  - DE: `Unter Dekret 54 werden zahlreiche prominente Persönlichkeiten verhaftet, darunte`
- **missing_en** @ `sources[0].title`
  - DE: `Tunisia: Digital Rights Under Saied`
- **missing_en** @ `sources[1].title`
  - DE: `Tunisia: Press Freedom Index`
- **missing_en** @ `sources[2].title`
  - DE: `Tunisia's Decree 54: Criminalizing Online Speech`

### turkmenistan-digitale-isolation.json

- **missing_en** @ `name`
  - DE: `Turkmenistan: Totale Internetzensur und digitale Überwachung der Bevölkerung`
- **missing_en** @ `description`
  - DE: `Turkmenistan betreibt eine der weltweit umfassendsten Internetzensuren und gilt `
- **missing_en** @ `location.name`
  - DE: `Aschgabat, Turkmenistan`
- **missing_en** @ `actors[0].name`
  - DE: `Turkmenische Regierung`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Meinungsfreiheit | Informationsfreiheit | Recht auf Privatsphäre`
- **missing_en** @ `timeline[0].title`
  - DE: `Systematische Internetsperren unter staatlichem Monopol`
- **missing_en** @ `timeline[0].description`
  - DE: `Turkmenistan etabliert ein staatliches Internetmonopol unter der Kontrolle von T`
- **missing_en** @ `timeline[1].title`
  - DE: `Verschärfte VPN-Verbote und Überwachung digitaler Kommunikation`
- **missing_en** @ `timeline[1].description`
  - DE: `Behörden intensivieren die Verfolgung von VPN-Nutzern. Bürger berichten von Verh`
- **missing_en** @ `timeline[2].title`
  - DE: `Biometrische Pflichtregistrierung für Internetzugang`
- **missing_en** @ `timeline[2].description`
  - DE: `Turkmenistan führt eine Pflicht zur biometrischen Registrierung für alle Nutzer `
- **missing_en** @ `timeline[3].title`
  - DE: `Weiterhin totale Isolation — kaum internationale Reaktion`
- **missing_en** @ `timeline[3].description`
  - DE: `Turkmenistan bleibt einer der wenigen Staaten weltweit mit nahezu vollständiger `
- **missing_en** @ `sources[0].title`
  - DE: `Turkmenistan — Reporter Without Borders Press Freedom Index`

### uber-algorithmisches-management.json

- **missing_en** @ `name`
  - DE: `Uber: Algorithmisches Management und Lohnmanipulation`
- **missing_en** @ `description`
  - DE: `Uber und andere Gig-Economy-Plattformen setzen KI-gesteuerte Systeme ein, die Fa`
- **missing_en** @ `location.name`
  - DE: `San Francisco, Kalifornien, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Uber Technologies`
- **missing_en** @ `actors[1].name`
  - DE: `Lyft`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf faire Arbeitsbedingungen | Recht auf angemessene Vergütung | Recht auf Vereinigungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Algorithmisches Management wird Standard`
- **missing_en** @ `timeline[0].description`
  - DE: `Uber skaliert sein algorithmisches Management-System weltweit. Algorithmen besti`
- **missing_en** @ `timeline[1].title`
  - DE: `NYT enthüllt psychologische Manipulation`
- **missing_en** @ `timeline[1].description`
  - DE: `Die New York Times veröffentlicht eine Tiefenrecherche über Ubers Einsatz verhal`
- **missing_en** @ `timeline[2].title`
  - DE: `UK Supreme Court: Uber-Fahrer sind Arbeitnehmer`
- **missing_en** @ `timeline[2].description`
  - DE: `Der UK Supreme Court entscheidet einstimmig, dass Uber-Fahrer als 'workers' (Arb`
- **missing_en** @ `timeline[3].title`
  - DE: `EU-Plattformarbeitsrichtlinie`
- **missing_en** @ `timeline[3].description`
  - DE: `Die EU verabschiedet die Richtlinie zur Plattformarbeit, die erstmals algorithmi`
- **missing_en** @ `sources[0].title`
  - DE: `How Uber Uses Psychological Tricks to Push Its Drivers' Buttons`
- **missing_en** @ `sources[1].title`
  - DE: `Uber BV and others v Aslam and others`

### uganda-ki-wahlmanipulation.json

- **missing_en** @ `name`
  - DE: `Uganda: Huawei-Überwachung und Internet-Shutdown bei Wahlen`
- **missing_en** @ `description`
  - DE: `Uganda setzt Huawei-Überwachungstechnologie ein, um die Opposition zu überwachen`
- **missing_en** @ `location.name`
  - DE: `Kampala, Uganda`
- **missing_en** @ `actors[0].name`
  - DE: `Uganda Police / CMI (Chieftaincy of Military Intelligence)`
- **missing_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
- **missing_en** @ `actors[2].name`
  - DE: `Uganda Communications Commission (UCC)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf freie Wahlen | Meinungsfreiheit | Informationsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Huawei Safe City in Kampala`
- **missing_en** @ `timeline[0].description`
  - DE: `Uganda installiert Huawei-Überwachungskameras in der Hauptstadt Kampala im Rahme`
- **missing_en** @ `timeline[1].title`
  - DE: `Gewalt gegen Opposition und Überwachungseskalation`
- **missing_en** @ `timeline[1].description`
  - DE: `Im Vorfeld der Wahlen werden Oppositionsführer Bobi Wine und Dutzende Unterstütz`
- **missing_en** @ `timeline[2].title`
  - DE: `Fünftägiger Internet-Shutdown vor Wahlen`
- **missing_en** @ `timeline[2].description`
  - DE: `Zwei Tage vor der Präsidentschaftswahl schaltet die Regierung das Internet für f`
- **missing_en** @ `timeline[3].title`
  - DE: `Internationale Verurteilung und Social-Media-Steuer`
- **missing_en** @ `timeline[3].description`
  - DE: `Die EU und die USA kritisieren den Internet-Shutdown scharf. Uganda hatte bereit`
- **missing_en** @ `sources[0].title`
  - DE: `Uganda: Elections Marred by Violence`
- **missing_en** @ `sources[1].title`
  - DE: `Freedom on the Net 2022: Uganda`

### uganda-safe-city-huawei.json

- **missing_en** @ `name`
  - DE: `Uganda: Huawei Safe City-System zur Überwachung politischer Opposition`
- **missing_en** @ `description`
  - DE: `Uganda baute mit Unterstützung des chinesischen Technologiekonzerns Huawei ein u`
- **missing_en** @ `location.name`
  - DE: `Kampala, Uganda`
- **missing_en** @ `actors[0].name`
  - DE: `Ugandische Regierung / Polizei`
- **missing_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Meinungsfreiheit | Versammlungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `WSJ enthüllt politischen Missbrauch des Überwachungssystems`
- **missing_en** @ `timeline[0].description`
  - DE: `Das Wall Street Journal berichtet, dass Huawei-Techniker ugandischen Behörden ha`
- **missing_en** @ `timeline[1].title`
  - DE: `Ausbau des Safe City-Systems in Kampala`
- **missing_en** @ `timeline[1].description`
  - DE: `Uganda weitet trotz internationaler Kritik das Kameranetzwerk in Kampala aus. Hu`
- **missing_en** @ `timeline[2].title`
  - DE: `Präsidentschaftswahl: System zur Unterdrückung von Oppositionellen`
- **missing_en** @ `timeline[2].description`
  - DE: `Im Vorfeld und während der Präsidentschaftswahl im Januar 2021 werden Mobilfunkn`
- **missing_en** @ `timeline[3].title`
  - DE: `Internationale Kritik und Dokumentation durch NGOs`
- **missing_en** @ `timeline[3].description`
  - DE: `Internationale Menschenrechtsorganisationen und Forscher dokumentieren den Einsa`
- **missing_en** @ `sources[0].title`
  - DE: `Uganda is using Huawei's facial recognition tech to crack down on dissent after `
- **missing_en** @ `sources[1].title`
  - DE: `In Uganda, Dissidents Adapt to Evade Huawei Assisted Government Spying`
- **missing_en** @ `sources[2].title`
  - DE: `Across East Africa, Big Brother is watching your every move`
- **missing_en** @ `sources[3].title`
  - DE: `Revealed: How Huawei helped Museveni spy on Bobi Wine`

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

- **missing_en** @ `name`
  - DE: `Grossbritannien: Gesichtserkennung der South Wales Police mit 91 % Falschpositiv`
- **missing_en** @ `description`
  - DE: `Die South Wales Police setzt seit 2017 Live-Gesichtserkennungstechnologie des He`
- **missing_en** @ `location.name`
  - DE: `Cardiff, Wales, Grossbritannien`
- **missing_en** @ `actors[0].name`
  - DE: `South Wales Police`
- **missing_en** @ `actors[1].name`
  - DE: `NEC Corporation`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Datenschutz | Versammlungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Ersteinsatz beim Champions-League-Finale in Cardiff`
- **missing_en** @ `timeline[0].description`
  - DE: `Die South Wales Police setzt erstmals Live-Gesichtserkennung beim UEFA Champions`
- **missing_en** @ `timeline[1].title`
  - DE: `Studie belegt 91 % Falschpositiv-Rate`
- **missing_en** @ `timeline[1].description`
  - DE: `Forscher der Universität Essex analysieren 10 Grosseinsaetze der South Wales Pol`
- **missing_en** @ `timeline[2].title`
  - DE: `Berufungsgericht erklärt Einsatz für rechtswidrig`
- **missing_en** @ `timeline[2].description`
  - DE: `Das britische Berufungsgericht entscheidet im Fall Ed Bridges gegen South Wales `
- **missing_en** @ `timeline[3].title`
  - DE: `Fortgesetzter Einsatz trotz Urteil und neue Gesetzgebung`
- **missing_en** @ `timeline[3].description`
  - DE: `Trotz des Gerichtsurteils setzt die Metropolitan Police in London den Einsatz vo`
- **missing_en** @ `sources[0].title`
  - DE: `Stop Facial Recognition — Campaign Documentation`

### uk-ki-wohlfahrt-universal-credit.json

- **missing_en** @ `name`
  - DE: `UK: Universal Credit — automatisierte Sanktionen treffen Sozialleistungsempfange`
- **missing_en** @ `description`
  - DE: `Das britische Universal-Credit-System des Department for Work and Pensions (DWP)`
- **missing_en** @ `location.name`
  - DE: `London, Vereinigtes Konigreich`
- **missing_en** @ `actors[0].name`
  - DE: `UK Department for Work and Pensions (DWP)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf soziale Sicherheit | Recht auf ein faires Verfahren | Recht auf Existenzminimum`
- **missing_en** @ `timeline[0].title`
  - DE: `Einfuhrung von Universal Credit`
- **missing_en** @ `timeline[0].description`
  - DE: `Das DWP beginnt mit dem schrittweisen Rollout von Universal Credit, das sechs be`
- **missing_en** @ `timeline[1].title`
  - DE: `Algorithmische Sanktionen skalieren landesweit`
- **missing_en** @ `timeline[1].description`
  - DE: `Der landesweite Rollout verscharft die Probleme: Automatisierte Bescheide verhan`
- **missing_en** @ `timeline[2].title`
  - DE: `NAO-Bericht dokumentiert systemische Fehler`
- **missing_en** @ `timeline[2].description`
  - DE: `Der National Audit Office veröffentlicht einen vernichtenden Bericht: Das System`
- **missing_en** @ `timeline[3].title`
  - DE: `High-Court-Klagen und politischer Druck`
- **missing_en** @ `timeline[3].description`
  - DE: `Die Child Poverty Action Group und einzelne Klager fechten vor dem High Court an`
- **missing_en** @ `sources[0].title`
  - DE: `Rolling out Universal Credit`
- **missing_en** @ `sources[1].title`
  - DE: `Universal Credit: early progress`

### uk-met-police-gangs-matrix.json

- **missing_en** @ `name`
  - DE: `Grossbritannien: Londoner Polizei fugt tausende Schwarze Jugendliche in algorith`
- **missing_en** @ `description`
  - DE: `Die Londoner Metropolitan Police betrieb ab 2012 die 'Gangs Violence Matrix', ei`
- **missing_en** @ `location.name`
  - DE: `London, Vereinigtes Konigreich`
- **missing_en** @ `actors[0].name`
  - DE: `Metropolitan Police Service (Met Police)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Gleichbehandlung | Diskriminierungsschutz | Unschuldsvermutung`
- **missing_en** @ `timeline[0].title`
  - DE: `Aufbau der Gangs Violence Matrix nach den Londoner Unruhen`
- **missing_en** @ `timeline[0].description`
  - DE: `Im Anschluss an die Londoner Unruhen von 2011 richtet die Metropolitan Police di`
- **missing_en** @ `timeline[1].title`
  - DE: `Amnesty International: Datenbank ist diskriminierend und unverhaltnisamssig`
- **missing_en** @ `timeline[1].description`
  - DE: `Amnesty International UK veröffentlicht den Bericht 'Trapped in the Matrix', der`
- **missing_en** @ `timeline[2].title`
  - DE: `ICO stellt datenschutzrechtliche Verstossse fest`
- **missing_en** @ `timeline[2].description`
  - DE: `Der britische Datenschutzbeauftragte (ICO) gibt eine Durchsetzungsmitteilung her`
- **missing_en** @ `timeline[3].title`
  - DE: `Teilreform und anhaltende Kritik`
- **missing_en** @ `timeline[3].description`
  - DE: `Die Metropolitan Police verabschiedet eine reformierte Version der Gangs Matrix `
- **missing_en** @ `sources[0].title`
  - DE: `Metropolitan Police gangs matrix — ICO investigation findings`
- **missing_en** @ `sources[1].title`
  - DE: `ICO Enforcement Notice — Metropolitan Police Gangs Matrix`
- **missing_en** @ `sources[2].title`
  - DE: `Met Police to scrap and replace 'racist' Gangs Violence Matrix`
- **missing_en** @ `sources[3].title`
  - DE: `ICO finds Gangs Matrix breached Data Protection Laws`
- **missing_en** @ `sources[4].title`
  - DE: `Trapped in the Matrix: Secrecy, stigma, and bias in the Met's Gangs Database`

### uk-ofqual-a-levels-algorithmus.json

- **missing_en** @ `name`
  - DE: `UK Ofqual: Algorithmus stuft A-Level-Noten herab`
- **missing_en** @ `description`
  - DE: `Wegen der COVID-19-Pandemie können 2020 in England keine Abschlussprüfungen stat`
- **missing_en** @ `location.name`
  - DE: `London, Vereinigtes Königreich`
- **missing_en** @ `actors[0].name`
  - DE: `Ofqual (Office of Qualifications and Examinations Regulation)`
- **missing_en** @ `actors[1].name`
  - DE: `UK Department for Education`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Bildung | Gleichheit vor dem Gesetz | Schutz vor Diskriminierung`
- **missing_en** @ `timeline[0].title`
  - DE: `COVID-19: Prüfungen abgesagt`
- **missing_en** @ `timeline[0].description`
  - DE: `Die britische Regierung sagt wegen der COVID-19-Pandemie alle GCSE- und A-Level-`
- **missing_en** @ `timeline[1].title`
  - DE: `A-Level-Ergebnisse: Fast 40% herabgestuft`
- **missing_en** @ `timeline[1].description`
  - DE: `Die A-Level-Ergebnisse werden veröffentlicht. Der Algorithmus stuft 39,1% der Le`
- **missing_en** @ `timeline[2].title`
  - DE: `Massenproteste und politischer Druck`
- **missing_en** @ `timeline[2].description`
  - DE: `Tausende Schüler protestieren landesweit unter dem Hashtag #AResultsDay. Die Opp`
- **missing_en** @ `timeline[3].title`
  - DE: `U-Turn: Regierung zieht Algorithmus zurück`
- **missing_en** @ `timeline[3].description`
  - DE: `Bildungsminister Gavin Williamson gibt dem Druck nach und verkündet, dass stattd`
- **missing_en** @ `sources[0].title`
  - DE: `A-levels: Nearly 40% of results in England were downgraded`
- **missing_en** @ `sources[1].title`
  - DE: `A-levels and GCSEs: U-turn as teacher-predicted grades approach adopted`

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

- **missing_en** @ `name`
  - DE: `Ukraine: Clearview AI im Krieg — Gesichtserkennung zur Identifikation von Toten `
- **missing_en** @ `description`
  - DE: `Nach dem russischen Einmarsch 2022 bietet Clearview AI der Ukraine seine Gesicht`
- **missing_en** @ `location.name`
  - DE: `Kiew, Ukraine`
- **missing_en** @ `actors[0].name`
  - DE: `Clearview AI`
- **missing_en** @ `actors[1].name`
  - DE: `Ukrainische Regierung / Verteidigungsministerium`
- **missing_en** @ `actors[2].name`
  - DE: `IKRK (Internationales Komitee vom Roten Kreuz)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Recht auf Würde | Genfer Konventionen (Kriegsgefangene)`
- **missing_en** @ `timeline[0].title`
  - DE: `Clearview bietet Ukraine kostenlose Gesichtserkennung an`
- **missing_en** @ `timeline[0].description`
  - DE: `Clearview AI CEO Hoan Ton-That bietet der Ukraine nach dem russischen Einmarsch `
- **missing_en** @ `timeline[1].title`
  - DE: `Identifikation von Toten und Kriegsgefangenen`
- **missing_en** @ `timeline[1].description`
  - DE: `Ukraine nutzt Clearview zur Identifikation gefallener russischer Soldaten und ko`
- **missing_en** @ `timeline[2].title`
  - DE: `Debatte: Humanitärer Nutzen vs. biometrische Kriegsführung`
- **missing_en** @ `timeline[2].description`
  - DE: `Das IKRK warnt vor den Risiken biometrischer Technologie im Krieg: Fehlidentifik`
- **missing_en** @ `timeline[3].title`
  - DE: `Präzedenzfall für zukünftige Konflikte`
- **missing_en** @ `timeline[3].description`
  - DE: `Der Ukraine-Fall wird zum ersten großen Einsatz kommerzieller Gesichtserkennung `
- **missing_en** @ `sources[0].title`
  - DE: `Ukraine using ClearviewAI facial recognition to identify Russian war dead`
- **missing_en** @ `sources[1].title`
  - DE: `Ukraine's 'Secret Weapon' Against Russia Is Clearview AI`
- **missing_en** @ `sources[2].title`
  - DE: `Ukraine using Clearview AI facial-recognition software to ID dead Russian soldie`
- **missing_en** @ `sources[3].title`
  - DE: `Ukraine has started using Clearview AI's facial recognition during war`

### ukraine-ki-gesichtserkennung-tote.json

- **missing_en** @ `name`
  - DE: `Ukraine: Clearview AI zur Identifikation gefallener russischer Soldaten`
- **missing_en** @ `description`
  - DE: `Nach dem russischen Einmarsch im Februar 2022 begann die Ukraine, das Gesichtser`
- **missing_en** @ `location.name`
  - DE: `Kyiv, Ukraine`
- **missing_en** @ `actors[0].name`
  - DE: `Ukrainisches Militär / Verteidigungsministerium`
- **missing_en** @ `actors[1].name`
  - DE: `Clearview AI`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Würde der Toten | Datenschutz`
- **missing_en** @ `timeline[0].title`
  - DE: `Russischer Einmarsch und Clearview-Angebot an Ukraine`
- **missing_en** @ `timeline[0].description`
  - DE: `Kurz nach dem russischen Einmarsch in die Ukraine bietet Clearview AI der ukrain`
- **missing_en** @ `timeline[1].title`
  - DE: `Systematische Identifikation gefallener Soldaten`
- **missing_en** @ `timeline[1].description`
  - DE: `Die Ukraine setzt Clearview AI ein, um Gesichter gefallener russischer Soldaten `
- **missing_en** @ `timeline[2].title`
  - DE: `Internationale Ethikdebatte über Kriegseinsatz von Biometrie`
- **missing_en** @ `timeline[2].description`
  - DE: `Datenschutzexperten, Ethikkommissionen und Journalisten loesen eine breite Debat`
- **missing_en** @ `timeline[3].title`
  - DE: `Ungeklaerte Rechtslage und anhaltender Einsatz`
- **missing_en** @ `timeline[3].description`
  - DE: `Trotz rechtlicher Bedenken — Clearview AI wurde zuvor in mehreren EU-Laendern we`
- **missing_en** @ `sources[0].title`
  - DE: `Ukraine using ClearviewAI facial recognition to identify Russian war dead`
- **missing_en** @ `sources[1].title`
  - DE: `Facial recognition technology: how it's being used in Ukraine and why it's still`
- **missing_en** @ `sources[2].title`
  - DE: `Ukraine uses Clearview AI to identify Russian dead`
- **missing_en** @ `sources[3].title`
  - DE: `How 'clear' is the legality of Clearview AI in Ukraine?`

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

- **missing_en** @ `name`
  - DE: `Ungarn: Pegasus-Spyware und KI-gestützte Überwachung unter Orban`
- **missing_en** @ `description`
  - DE: `Unter der Regierung Viktor Orbans wurde Ungarn zu einem der aktivsten Nutzer der`
- **missing_en** @ `location.name`
  - DE: `Budapest, Ungarn`
- **missing_en** @ `actors[0].name`
  - DE: `Ungarische Regierung (Fidesz)`
- **missing_en** @ `actors[1].name`
  - DE: `NSO Group`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Pressefreiheit | Recht auf Privatsphäre | Meinungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Ausbau der Überwachungsinfrastruktur und Medienkontrolle`
- **missing_en** @ `timeline[0].description`
  - DE: `Die ungarische Regierung baut systematisch ihre Überwachungskapazitäten aus und `
- **missing_en** @ `timeline[1].title`
  - DE: `Pegasus Project enthullt ungarische Ziellisten`
- **missing_en** @ `timeline[1].description`
  - DE: `Das internationale Recherchekonsortium Pegasus Project veröffentlicht eine Liste`
- **missing_en** @ `timeline[2].title`
  - DE: `Parlamentarische Untersuchung und Leugnung durch Regierung`
- **missing_en** @ `timeline[2].description`
  - DE: `Das ungarische Parlament lehnt eine unabhaengige Untersuchung des Pegasus-Einsat`
- **missing_en** @ `timeline[3].title`
  - DE: `EU-Verfahren und fehlende Konsequenzen im Inland`
- **missing_en** @ `timeline[3].description`
  - DE: `Der EU-PEGA-Ausschuss empfiehlt 2022 rechtliche Schritte gegen Ungarn und Polen `
- **missing_en** @ `sources[0].title`
  - DE: `World Report 2023: Hungary`

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

- **missing_en** @ `name`
  - DE: `USA: KI-Einstellungstools diskriminieren systematisch Menschen mit Behinderungen`
- **missing_en** @ `description`
  - DE: `KI-gestützte Personalauswahl-Tools von Unternehmen wie HireVue und Pymetrics wur`
- **missing_en** @ `location.name`
  - DE: `Washington D.C., USA`
- **missing_en** @ `actors[0].name`
  - DE: `HireVue`
- **missing_en** @ `actors[1].name`
  - DE: `Pymetrics`
- **missing_en** @ `actors[2].name`
  - DE: `Equal Employment Opportunity Commission (EEOC)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Arbeit | Schutz vor Diskriminierung | Recht auf angemessene Vorkehrungen`
- **missing_en** @ `timeline[0].title`
  - DE: `Massenhafte Einführung von KI-Einstellungstools während der Pandemie`
- **missing_en** @ `timeline[0].description`
  - DE: `Die COVID-19-Pandemie beschleunigt die Einführung automatisierter Einstellungsto`
- **missing_en** @ `timeline[1].title`
  - DE: `DOJ und EEOC veröffentlichen Leitlinien zu KI und Diskriminierung`
- **missing_en** @ `timeline[1].description`
  - DE: `Das US-Justizministerium und die EEOC veröffentlichen gemeinsam Leitlinien, die `
- **missing_en** @ `timeline[2].title`
  - DE: `EEOC-Durchsetzungsinitiative zu KI-Diskriminierung`
- **missing_en** @ `timeline[2].description`
  - DE: `Die EEOC startet die Initiative 'Artificial Intelligence and Algorithmic Fairnes`
- **missing_en** @ `timeline[3].title`
  - DE: `HireVue zieht Gesichtserkennung zurück, strukturelle Probleme bleiben`
- **missing_en** @ `timeline[3].description`
  - DE: `Unter dem Druck von Regulierungsbehörden und zivilgesellschaftlichen Organisatio`
- **missing_en** @ `sources[0].title`
  - DE: `U.S. EEOC and U.S. Department of Justice Warn against Disability Discrimination`
- **missing_en** @ `sources[1].title`
  - DE: `Algorithms, Artificial Intelligence, and Disability Discrimination in Hiring (AD`
- **missing_en** @ `sources[2].title`
  - DE: `U.S. warns of discrimination in using AI to screen job candidates`
- **missing_en** @ `sources[3].title`
  - DE: `AI hiring software was biased against deaf employees, ACLU alleges in ADA case`
- **missing_en** @ `sources[4].title`
  - DE: `US Government Agencies Warned about AI Hiring Tech that Discriminates against Di`

### usa-ai-generated-csam.json

- **missing_en** @ `name`
  - DE: `USA: KI-generierte Darstellungen sexuellen Kindesmissbrauchs überlasten Erkennun`
- **missing_en** @ `description`
  - DE: `KI-Bildgenerierungstools werden zunehmend genutzt, um Material mit sexuellem Kin`
- **missing_en** @ `location.name`
  - DE: `Washington D.C., USA`
- **missing_en** @ `actors[0].name`
  - DE: `KI-Entwicklungsunternehmen (Stability AI u.a.)`
- **missing_en** @ `actors[1].name`
  - DE: `National Center for Missing and Exploited Children (NCMEC)`
- **missing_en** @ `actors[2].name`
  - DE: `US-Justizministerium (DOJ) / FBI`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Schutz von Kindern | Menschenwürde | Recht auf körperliche Unversehrtheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Öffentliche KI-Bildgeneratoren ermöglichen CSAM-Produktion`
- **missing_en** @ `timeline[0].description`
  - DE: `Mit der Veröffentlichung von Stable Diffusion als Open-Source-Modell und dem Auf`
- **missing_en** @ `timeline[1].title`
  - DE: `Exponentieller Anstieg der CSAM-Meldungen bei NCMEC`
- **missing_en** @ `timeline[1].description`
  - DE: `Das NCMEC meldet einen dramatischen Anstieg von Berichten über KI-generiertes CS`
- **missing_en** @ `timeline[2].title`
  - DE: `FBI-Warnung und erste Strafverfolgungen`
- **missing_en** @ `timeline[2].description`
  - DE: `Das FBI gibt eine öffentliche Warnung heraus, dass Täter KI-Modelle nutzen, um s`
- **missing_en** @ `timeline[3].title`
  - DE: `Regulierungsdruck und technische Gegenmaßnahmen`
- **missing_en** @ `timeline[3].description`
  - DE: `Der US-Kongress berät den SHIELD Act und weitere Gesetzgebung, die KI-generierte`
- **missing_en** @ `sources[0].title`
  - DE: `How AI is being abused to create child sexual abuse imagery`
- **missing_en** @ `sources[1].title`
  - DE: `The AI child exploitation crisis is here`
- **missing_en** @ `sources[2].title`
  - DE: `Investigation Finds AI Image Generation Models Trained on Child Abuse`
- **missing_en** @ `sources[3].title`
  - DE: `Evolution of AI in child sexual abuse material`

### usa-ai-voice-clone-betrug.json

- **missing_en** @ `name`
  - DE: `USA: KI-Stimmklonen für Betrug und Erpressung`
- **missing_en** @ `description`
  - DE: `Kriminelle Netzwerke nutzen frei verfügbare KI-Tools zur Stimmklonierung, um Fam`
- **missing_en** @ `location.name`
  - DE: `Phoenix, Arizona, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Kriminelle Organisationen (Betrug-Netzwerke)`
- **missing_en** @ `actors[1].name`
  - DE: `KI-Sprachunternehmen`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Schutz vor Betrug | Verbraucherschutz`
- **missing_en** @ `timeline[0].title`
  - DE: `KI-Stimmklonen wird kommerziell verfügbar`
- **missing_en** @ `timeline[0].description`
  - DE: `Unternehmen wie ElevenLabs, Resemble AI und andere bringen einfach bedienbare St`
- **missing_en** @ `timeline[1].title`
  - DE: `FTC warnt vor exponentiellem Anstieg der Stimmklon-Betrugsfaelle`
- **missing_en** @ `timeline[1].description`
  - DE: `Die US-Federal Trade Commission veröffentlicht eine Warnung vor 'Family Emergenc`
- **missing_en** @ `timeline[2].title`
  - DE: `Virtuelles Kidnapping — Mutter glaubt, Tochter werde entfuehrt`
- **missing_en** @ `timeline[2].description`
  - DE: `Eine Mutter in Arizona erhält einen Anruf mit dem weinenden Klang der Stimme ihr`
- **missing_en** @ `timeline[3].title`
  - DE: `Senat haelt Anhörungen — Regulierungsdruck waechst`
- **missing_en** @ `timeline[3].description`
  - DE: `Der US-Senat Commerce Committee haelt Anhörungen zu KI-Missbrauch durch Stimmklo`
- **missing_en** @ `sources[0].title`
  - DE: `An AI cloned her daughter's voice and tried to scam her. She's not alone.`

### usa-ai-waffenerkennung-schulen.json

- **missing_en** @ `name`
  - DE: `USA: KI-Waffenerkennung in Schulen — Fehlalarme und feindliches Lernklima`
- **missing_en** @ `description`
  - DE: `Nach einer Reihe von Schulmassakers wurden in US-Schulen und öffentlichen Räumen`
- **missing_en** @ `location.name`
  - DE: `New York, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Evolv Technology`
- **missing_en** @ `actors[1].name`
  - DE: `New York City Public Schools`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Bildung | Recht auf Privatsphäre | Recht auf Wuerde`
- **missing_en** @ `timeline[0].title`
  - DE: `Massendeployment von KI-Waffenscannern in Schulen`
- **missing_en** @ `timeline[0].description`
  - DE: `Evolv Technology wirbt mit einem beruehrungslosen KI-Screening-System, das Waffe`
- **missing_en** @ `timeline[1].title`
  - DE: `Erste Berichte über systematische Fehlalarme`
- **missing_en** @ `timeline[1].description`
  - DE: `Lehrkräfte und Eltern beginnen, Vorfaelle zu dokumentieren, bei denen harmlose G`
- **missing_en** @ `timeline[2].title`
  - DE: `BBC und The Intercept decken versagte Versprechen auf`
- **missing_en** @ `timeline[2].description`
  - DE: `Eine gemeinsame Untersuchung von BBC News und The Intercept dokumentiert systema`
- **missing_en** @ `timeline[3].title`
  - DE: `Klagen, Vertragsaufloesung und Neubesinnung`
- **missing_en** @ `timeline[3].description`
  - DE: `Mehrere Schulbezirke kündigen ihre Vertraege mit Evolv. Klagen von Bürgerrechtso`
- **missing_en** @ `sources[0].title`
  - DE: `FTC Takes Action Against Evolv Technologies for Deceiving Users About its AI-Pow`
- **missing_en** @ `sources[1].title`
  - DE: `AI Tries (and Fails) to Detect Weapons in Schools`
- **missing_en** @ `sources[2].title`
  - DE: `Schools are buying AI software to detect guns. Some experts say it's a mistake`
- **missing_en** @ `sources[3].title`
  - DE: `As More Schools Turn to AI Weapons Detection, Questions Persist`

### usa-amazon-rekognition-polizei.json

- **missing_en** @ `name`
  - DE: `USA: Amazon Rekognition — Rassistischer Bias in polizeilicher Gesichtserkennung`
- **missing_en** @ `description`
  - DE: `Amazon vermarktete ab 2016 seinen Cloud-Dienst 'Rekognition' aktiv an US-Polizei`
- **missing_en** @ `location.name`
  - DE: `Seattle, Washington, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Amazon Web Services`
- **missing_en** @ `actors[1].name`
  - DE: `Orlando Police Department`
- **missing_en** @ `actors[2].name`
  - DE: `Washington County Sheriff's Office`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Gleichbehandlung | Schutz vor Diskriminierung aufgrund der ethnischen Herkunft | Recht auf Privatsphare`
- **missing_en** @ `timeline[0].title`
  - DE: `Amazon bringt Rekognition auf den Markt und wirbt Strafverfolgungsbehorden`
- **missing_en** @ `timeline[0].description`
  - DE: `Amazon veröffentlicht seinen KI-Bilderkennungsdienst Rekognition als Cloud-API u`
- **missing_en** @ `timeline[1].title`
  - DE: `ACLU-Studie: System identifiziert 28 Kongressabgeordnete falsch`
- **missing_en** @ `timeline[1].description`
  - DE: `Die ACLU testet Rekognition, indem sie Fotos aller 535 US-Kongress-mitglieder ge`
- **missing_en** @ `timeline[2].title`
  - DE: `Kongressanhorungen und Forderungen nach Regulierung`
- **missing_en** @ `timeline[2].description`
  - DE: `Der US-Kongress ladt Vertreter von Amazon, Microsoft und Google zu Anhorungen ub`
- **missing_en** @ `timeline[3].title`
  - DE: `Einjahri-ges Moratorium nach George-Floyd-Protesten`
- **missing_en** @ `timeline[3].description`
  - DE: `Im Juni 2020, inmitten der Proteste nach dem Tod von George Floyd, erklart Amazo`
- **missing_en** @ `sources[0].title`
  - DE: `Amazon's Face Recognition Falsely Matched 28 Members of Congress With Mugshots`
- **missing_en** @ `sources[1].title`
  - DE: `Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classifi`
- **missing_en** @ `sources[2].title`
  - DE: `We are implementing a one-year moratorium on police use of Rekognition`

### usa-amazon-warehouse-ki-kuendigung.json

- **missing_en** @ `name`
  - DE: `USA: Amazon-Algorithmus kundigt Lagerarbeiter automatisch bei Unterschreitung vo`
- **missing_en** @ `description`
  - DE: `Amazon setzt in seinen Fulfillment Centern ein KI-System ein, das die Arbeitslei`
- **missing_en** @ `location.name`
  - DE: `Seattle, Washington, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Amazon`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Arbeitsrechte | Recht auf Privatsphare am Arbeitsplatz | Recht auf ein faires Verfahren`
- **missing_en** @ `timeline[0].title`
  - DE: `Interne Amazon-Dokumente zeigen automatisiertes Kundigungssystem`
- **missing_en** @ `timeline[0].description`
  - DE: `Interne Amazon-Dokumente, die spater veröffentlicht wurden, zeigen, dass das Unt`
- **missing_en** @ `timeline[1].title`
  - DE: `The Verge enthullt: 300+ automatische Kundigungen in einem Lager`
- **missing_en** @ `timeline[1].description`
  - DE: `The Verge veröffentlicht einen Recherchebericht, laut dem Amazon in einem Lager `
- **missing_en** @ `timeline[2].title`
  - DE: `COVID-19 verscharft Uberwachungsdruck`
- **missing_en** @ `timeline[2].description`
  - DE: `Wahrend der Pandemie erhalt Amazon Rekordauftrage. Mitarbeiter berichten, dass d`
- **missing_en** @ `timeline[3].title`
  - DE: `Senatsuntersuchung und Gewerkschaftsgrundung`
- **missing_en** @ `timeline[3].description`
  - DE: `Ein US-Senatsbericht kritisiert Amazons algorithmisches Uberwachungssystem als b`
- **missing_en** @ `sources[0].title`
  - DE: `Amazon reportedly fires workers using automated system without human review`

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

- **missing_en** @ `name`
  - DE: `USA: Automatische Kennzeichenlesegeräte — flächendeckende Bewegungsprofile ohne `
- **missing_en** @ `description`
  - DE: `In den USA betreiben Tausende Polizeibehörden Netzwerke automatischer Kennzeiche`
- **missing_en** @ `location.name`
  - DE: `Los Angeles, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Vigilant Solutions / Motorola Solutions`
- **missing_en** @ `actors[1].name`
  - DE: `US-Polizeibehörden`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Bewegungsfreiheit | Recht auf informationelle Selbstbestimmung`
- **missing_en** @ `timeline[0].title`
  - DE: `Massenhafte Verbreitung von ALPR-Systemen beginnt`
- **missing_en** @ `timeline[0].description`
  - DE: `Nach frühen Pilotprogrammen ab 2004 werden ab 2008 ALPR-Systeme massenhaft von U`
- **missing_en** @ `timeline[1].title`
  - DE: `ACLU-Studie enthüllt Ausmass der Kennzeichenüberwachung`
- **missing_en** @ `timeline[1].description`
  - DE: `Die ACLU veröffentlicht eine landesweite Untersuchung zu ALPR-Systemen auf Basis`
- **missing_en** @ `timeline[2].title`
  - DE: `EFF dokumentiert 9 Milliarden Kennzeichenscans in einer Datenbank`
- **missing_en** @ `timeline[2].description`
  - DE: `Die Electronic Frontier Foundation veröffentlicht eine Analyse von Vigilant Solu`
- **missing_en** @ `timeline[3].title`
  - DE: `ICE-Nutzung für Einwanderungsdurchsetzung löst Proteste aus`
- **missing_en** @ `timeline[3].description`
  - DE: `Investigativberichte belegen, dass ICE (Einwanderungsbehörde) auf kommerzielle A`
- **missing_en** @ `sources[0].title`
  - DE: `License Plate Readers`

### usa-biden-deepfake-robocall.json

- **missing_en** @ `name`
  - DE: `USA: Erster KI-Deepfake-Wahlbetrug — gefälschte Biden-Robocalls vor New-Hampshir`
- **missing_en** @ `description`
  - DE: `Im Januar 2024 erhielten tausende Wähler in New Hampshire kurz vor der Demokrate`
- **missing_en** @ `location.name`
  - DE: `New Hampshire, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Steven Kramer (politischer Berater)`
- **missing_en** @ `actors[1].name`
  - DE: `Lingo Telecom (Robocall-Anbieter)`
- **missing_en** @ `actors[2].name`
  - DE: `ElevenLabs (mutmaßlicher KI-Voice-Anbieter)`
- **missing_en** @ `actors[3].name`
  - DE: `US Federal Communications Commission (FCC)`
- **missing_en** @ `actors[4].name`
  - DE: `New Hampshire Department of Justice`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf freie Wahlen | Recht auf demokratische Teilhabe | Schutz vor Manipulation`
- **missing_en** @ `timeline[0].title`
  - DE: `Thousands von Wählern erhalten Deepfake-Robocall`
- **missing_en** @ `timeline[0].description`
  - DE: `Tausende von Demokraten in New Hampshire erhalten zwei Tage vor der Vorwahl eine`
- **missing_en** @ `timeline[1].title`
  - DE: `FCC erklärt KI-Stimmen-Robocalls illegal`
- **missing_en** @ `timeline[1].description`
  - DE: `Die Federal Communications Commission (FCC) erlässt eine einstimmige Regelung, d`
- **missing_en** @ `timeline[2].title`
  - DE: `Steven Kramer wird strafrechtlich angeklagt`
- **missing_en** @ `timeline[2].description`
  - DE: `Steven Kramer wird in New Hampshire mit 13 Anklagepunkten wegen Wählerunterdrück`
- **missing_en** @ `timeline[3].title`
  - DE: `Globaler Präzedenzfall für KI-Wahlbetrug-Regulierung`
- **missing_en** @ `timeline[3].description`
  - DE: `Der Fall wird international zum Referenzfall: Mehrere US-Bundesstaaten verabschi`
- **missing_en** @ `sources[0].title`
  - DE: `Steven Kramer Charged with Voter Suppression Over AI-Generated President Biden R`
- **missing_en** @ `sources[1].title`
  - DE: `A political consultant faces charges and fines for Biden deepfake robocalls`
- **missing_en** @ `sources[2].title`
  - DE: `Steve Kramer Instigated Illegal Spoofed Robocall — FCC Enforcement Action`
- **missing_en** @ `sources[3].title`
  - DE: `Steve Kramer, who deepfaked Biden's voice in New Hampshire Democratic primary, i`

### usa-cambridge-analytica.json

- **missing_en** @ `name`
  - DE: `Cambridge Analytica: KI-gestütztes Micro-Targeting bei US-Wahl 2016`
- **missing_en** @ `description`
  - DE: `Die Datenanalysefirma Cambridge Analytica sammelt ohne Einwilligung die Facebook`
- **missing_en** @ `location.name`
  - DE: `London, UK / Washington D.C., USA`
- **missing_en** @ `actors[0].name`
  - DE: `Cambridge Analytica / SCL Group`
- **missing_en** @ `actors[1].name`
  - DE: `Facebook / Meta Platforms`
- **missing_en** @ `actors[2].name`
  - DE: `Christopher Wylie (Whistleblower)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Recht auf freie Wahlen | Recht auf informationelle Selbstbestimmung`
- **missing_en** @ `timeline[0].title`
  - DE: `Datensammlung über Facebook-App 'thisisyourdigitallife'`
- **missing_en** @ `timeline[0].description`
  - DE: `Der Forscher Aleksandr Kogan entwickelt eine Facebook-Persönlichkeitstest-App, d`
- **missing_en** @ `timeline[1].title`
  - DE: `Einsatz bei Brexit und US-Wahl`
- **missing_en** @ `timeline[1].description`
  - DE: `Cambridge Analytica nutzt die Daten zur Erstellung psychografischer Wählerprofil`
- **missing_en** @ `timeline[2].title`
  - DE: `Whistleblower Christopher Wylie enthüllt den Skandal`
- **missing_en** @ `timeline[2].description`
  - DE: `Christopher Wylie, ehemaliger Mitarbeiter von Cambridge Analytica, enthüllt das `
- **missing_en** @ `timeline[3].title`
  - DE: `5 Milliarden USD FTC-Strafe und DSGVO-Impulse`
- **missing_en** @ `timeline[3].description`
  - DE: `Die FTC verhängt eine Rekordstrafe von 5 Milliarden USD gegen Facebook. Das UK I`
- **missing_en** @ `sources[0].title`
  - DE: `Revealed: 50 million Facebook profiles harvested for Cambridge Analytica`
- **missing_en** @ `sources[1].title`
  - DE: `FTC Imposes $5 Billion Penalty on Facebook`
- **missing_en** @ `sources[2].title`
  - DE: `ICO Investigation into use of personal data in political campaigns`

### usa-cellebrite-telefon-forensik.json

- **missing_en** @ `name`
  - DE: `USA: Cellebrite-Telefonentschlüsselung — Massenauswertung ohne Durchsuchungsbefe`
- **missing_en** @ `description`
  - DE: `Cellebrite, ein israelisches Technologieunternehmen, produziert Hardware und Sof`
- **missing_en** @ `location.name`
  - DE: `Washington D.C., USA`
- **missing_en** @ `actors[0].name`
  - DE: `Cellebrite`
- **missing_en** @ `actors[1].name`
  - DE: `US-Strafverfolgungsbehörden`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Schutz vor willkürlichen Durchsuchungen | Recht auf faires Verfahren`
- **missing_en** @ `timeline[0].title`
  - DE: `FBI-iPhone-Fall macht Cellebrite bekannt`
- **missing_en** @ `timeline[0].description`
  - DE: `Im Streit um das iPhone eines Attentäters von San Bernardino macht das FBI bekan`
- **missing_en** @ `timeline[1].title`
  - DE: `Massenverbreitung bei Polizeibehörden — Nutzung ohne Warrant`
- **missing_en** @ `timeline[1].description`
  - DE: `Upturn Research belegt, dass mehr als 2.000 US-Strafverfolgungsbehörden Cellebri`
- **missing_en** @ `timeline[2].title`
  - DE: `Signal enthüllt kritische Sicherheitslücken in Cellebrite`
- **missing_en** @ `timeline[2].description`
  - DE: `Der Messenger-Dienst Signal veröffentlicht eine technische Analyse, die zeigt, d`
- **missing_en** @ `timeline[3].title`
  - DE: `Grenzeinsatz und internationale Ausweitungsdebatte`
- **missing_en** @ `timeline[3].description`
  - DE: `Berichte zeigen, dass US-Zollbehörden (CBP) Cellebrite an Grenzen gegen Reisende`
- **missing_en** @ `sources[0].title`
  - DE: `EFF: Cell Phone Extraction and Digital Forensics`
- **missing_en** @ `sources[1].title`
  - DE: `Exploiting vulnerabilities in Cellebrite UFED and Physical Analyzer`
- **missing_en** @ `sources[2].title`
  - DE: `Cellebrite Can Break Into iPhones — But It's Not Just iPhones`
- **missing_en** @ `sources[3].title`
  - DE: `Mass Extraction: The Widespread Power of U.S. Law Enforcement to Search Mobile P`

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

- **missing_en** @ `name`
  - DE: `USA: New York Times vs. OpenAI — KI-Urheberrechtsklage`
- **missing_en** @ `description`
  - DE: `Die New York Times verklagt OpenAI und Microsoft wegen der unautorisierten Nutzu`
- **missing_en** @ `location.name`
  - DE: `New York City, USA`
- **missing_en** @ `actors[0].name`
  - DE: `OpenAI`
- **missing_en** @ `actors[1].name`
  - DE: `Microsoft Corporation`
- **missing_en** @ `actors[2].name`
  - DE: `The New York Times Company`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Urheberrecht | Recht auf geistiges Eigentum | Pressefreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Training auf urheberrechtlich geschützten Daten`
- **missing_en** @ `timeline[0].description`
  - DE: `OpenAI trainiert GPT-3 und später GPT-4 auf massiven Datensätzen aus dem Interne`
- **missing_en** @ `timeline[1].title`
  - DE: `NYT reicht Klage gegen OpenAI und Microsoft ein`
- **missing_en** @ `timeline[1].description`
  - DE: `Die New York Times reicht Klage am Southern District of New York ein und fordert`
- **missing_en** @ `timeline[2].title`
  - DE: `Welle von Urheberrechtsklagen gegen KI-Unternehmen`
- **missing_en** @ `timeline[2].description`
  - DE: `Die NYT-Klage löst eine Welle weiterer Klagen aus: Getty Images vs. Stability AI`
- **missing_en** @ `timeline[3].title`
  - DE: `Lizenzdeals und Regulierungsdebatte`
- **missing_en** @ `timeline[3].description`
  - DE: `Während die NYT-Klage anhängig bleibt, schließen andere Verlage Lizenzverträge m`
- **missing_en** @ `sources[0].title`
  - DE: `The New York Times Company v. Microsoft Corporation et al. — Complaint`

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

- **missing_en** @ `name`
  - DE: `USA: Clearview AI — Milliarden Fotos unrechtmassig gescrapt fur Gesichtserkennun`
- **missing_en** @ `description`
  - DE: `Das US-amerikanische Unternehmen Clearview AI scrapt seit 2017 heimlich Milliard`
- **missing_en** @ `location.name`
  - DE: `New York City, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Clearview AI`
- **missing_en** @ `actors[1].name`
  - DE: `US-amerikanische Strafverfolgungsbehorden`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphare | Recht auf informationelle Selbstbestimmung | Schutz vor willkurlicher Uberwachung`
- **missing_en** @ `timeline[0].title`
  - DE: `Clearview AI beginnt mit dem Aufbau der Fotodatenbank`
- **missing_en** @ `timeline[0].description`
  - DE: `Clearview AI, gegrundet von Hoan Ton-That und Richard Schwartz, beginnt mit dem `
- **missing_en** @ `timeline[1].title`
  - DE: `New York Times enthullt das Geschaftsmodell`
- **missing_en** @ `timeline[1].description`
  - DE: `Eine Investigativrecherche der New York Times legt erstmals offen, dass Clearvie`
- **missing_en** @ `timeline[2].title`
  - DE: `Lawinen von Klagen und behordlichen Verfahren`
- **missing_en** @ `timeline[2].description`
  - DE: `Nach der Enthullung erstatten die ACLU und mehrere US-Bundesstaaten Klage gegen `
- **missing_en** @ `timeline[3].title`
  - DE: `ACLU-Vergleich und anhaltende Regulierungsdebatte`
- **missing_en** @ `timeline[3].description`
  - DE: `Im Mai 2022 einigt sich Clearview AI mit der ACLU im Rahmen eines Vergleichs: Da`
- **missing_en** @ `sources[0].title`
  - DE: `ACLU Sues Clearview AI for Violating Illinois Biometric Privacy Law`

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

- **missing_en** @ `name`
  - DE: `USA: Gesichtserkennung in Supermärkten — Rite Aid und Kroger`
- **missing_en** @ `description`
  - DE: `US-amerikanische Einzelhandelsketten wie Rite Aid und Kroger setzen Gesichtserke`
- **missing_en** @ `location.name`
  - DE: `Cincinnati, Ohio, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Rite Aid`
- **missing_en** @ `actors[1].name`
  - DE: `Kroger`
- **missing_en** @ `actors[2].name`
  - DE: `Federal Trade Commission (FTC)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Schutz vor Diskriminierung | Informationelle Selbstbestimmung`
- **missing_en** @ `timeline[0].title`
  - DE: `Heimliche Einführung von Gesichtserkennung im Einzelhandel`
- **missing_en** @ `timeline[0].description`
  - DE: `Rite Aid und andere US-Einzelhandelsketten beginnen, Gesichtserkennungssysteme i`
- **missing_en** @ `timeline[1].title`
  - DE: `Reuters-Untersuchung deckt systematischen Missbrauch auf`
- **missing_en** @ `timeline[1].description`
  - DE: `Reuters veröffentlicht eine umfassende Recherche, die zeigt, dass Rite Aid Gesic`
- **missing_en** @ `timeline[2].title`
  - DE: `FTC verhängt Fünfjahresverbot gegen Rite Aid`
- **missing_en** @ `timeline[2].description`
  - DE: `Die Federal Trade Commission untersagt Rite Aid für fünf Jahre den Einsatz von G`
- **missing_en** @ `timeline[3].title`
  - DE: `Branchenweite Debatte und regulatorische Nachfolge`
- **missing_en** @ `timeline[3].description`
  - DE: `Der FTC-Beschluss löst eine branchenweite Debatte über den Einsatz von Gesichtse`
- **missing_en** @ `sources[0].title`
  - DE: `Rite Aid Banned from Using AI Facial Recognition After FTC Says Retailer Deploye`
- **missing_en** @ `sources[1].title`
  - DE: `Rite Aid used facial recognition system to falsely tag people as shoplifters, FT`
- **missing_en** @ `sources[2].title`
  - DE: `Rite Aid Secretly Used Facial Recognition in Poorer Communities of Color`

### usa-lensa-ai-bilder-missbrauch.json

- **missing_en** @ `name`
  - DE: `USA: Lensa AI erzeugt sexualisierte Bilder von Frauen ohne Einwilligung`
- **missing_en** @ `description`
  - DE: `Die KI-App Lensa AI des Unternehmens Prisma Labs ermöglichte es, aus normalen Po`
- **missing_en** @ `location.name`
  - DE: `San Francisco, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Prisma Labs`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Recht auf koerperliche Unversehrtheit | Urheberrecht`
- **missing_en** @ `timeline[0].title`
  - DE: `Stable Diffusion als Grundlage nicht-konsensueller Trainingsdaten`
- **missing_en** @ `timeline[0].description`
  - DE: `Prisma Labs baut Lensa AI auf Basis von Stable Diffusion auf, das auf dem LAION-`
- **missing_en** @ `timeline[1].title`
  - DE: `Viraler Launch und algorithmische Verzerrung bei Frauen`
- **missing_en** @ `timeline[1].description`
  - DE: `Lensa AI wird viral und erreicht innerhalb weniger Tage Millionen Downloads. Ers`
- **missing_en** @ `timeline[2].title`
  - DE: `Kuenstler erkennen eigene Handschrift in KI-Outputs`
- **missing_en** @ `timeline[2].description`
  - DE: `Zahlreiche digitale Kuenstler berichten, ihre unverwechselbare Bildsprache in vo`
- **missing_en** @ `timeline[3].title`
  - DE: `Debatte über Regulierung und Klagen gegen KI-Bildanbieter`
- **missing_en** @ `timeline[3].description`
  - DE: `Der Fall Lensa loest eine breitere Debatte über die rechtliche und ethische Grun`
- **missing_en** @ `sources[0].title`
  - DE: `The viral AI avatar app Lensa undressed me—without my consent`
- **missing_en** @ `sources[1].title`
  - DE: `Lensa image-generation app: concerns regarding bias, harassment, privacy, and EU`
- **missing_en** @ `sources[2].title`
  - DE: `Users Complain That Lensa AI Selfie Generator is 'Sexualizing' Their Photos`
- **missing_en** @ `sources[3].title`
  - DE: `Trendy Portrait App Lensa Is Accused of Creating Nonconsensual Nudes, Child Abus`

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

- **missing_en** @ `name`
  - DE: `USA: Meta/Instagram-Algorithmen und psychische Gesundheitskrise bei Jugendlichen`
- **missing_en** @ `description`
  - DE: `Metas interne Forschung, die 2021 durch Whistleblowerin Frances Haugen als Teil `
- **missing_en** @ `location.name`
  - DE: `Menlo Park, Kalifornien, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Meta / Facebook`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Gesundheit | Recht auf Privatsphäre | Kinderrechte`
- **missing_en** @ `timeline[0].title`
  - DE: `Interne Meta-Forschung dokumentiert Schadenspotenzial`
- **missing_en** @ `timeline[0].description`
  - DE: `Meta-interne Forschungsteams stellen in Studien fest, dass Instagram bei einem s`
- **missing_en** @ `timeline[1].title`
  - DE: `Frances Haugen veröffentlicht Facebook Papers`
- **missing_en** @ `timeline[1].description`
  - DE: `Die ehemalige Meta-Mitarbeiterin Frances Haugen übergibt tausende interne Dokume`
- **missing_en** @ `timeline[2].title`
  - DE: `Sammelklagen von 40 US-Bundesstaaten`
- **missing_en** @ `timeline[2].description`
  - DE: `Mehr als 40 US-Bundesstaaten reichen koordinierte Klagen gegen Meta ein und werf`
- **missing_en** @ `timeline[3].title`
  - DE: `Surgeon General erklärt soziale Medien zur Gesundheitsbedrohung`
- **missing_en** @ `timeline[3].description`
  - DE: `US-Surgeon General Vivek Murthy veröffentlicht einen Advisory, der soziale Medie`
- **missing_en** @ `sources[0].title`
  - DE: `Attorney General James and Multistate Coalition Sue Meta for Harming Youth`
- **missing_en** @ `sources[1].title`
  - DE: `States sue Meta, claiming Instagram, Facebook fueled youth mental health crisis`
- **missing_en** @ `sources[2].title`
  - DE: `41 states sue Meta, claiming Instagram, Facebook are addictive, harm kids`
- **missing_en** @ `sources[3].title`
  - DE: `AG Miyares Files Lawsuit Against Meta for Harming Youth Mental Health`

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

- **missing_en** @ `name`
  - DE: `USA: Microsoft Bing KI-Chatbot verbreitet Falschinformationen und diffamierende `
- **missing_en** @ `description`
  - DE: `Microsoft integrierte im Februar 2023 einen KI-Chatbot (basierend auf GPT-4) in `
- **missing_en** @ `location.name`
  - DE: `Redmond, Washington, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Microsoft`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Information | Recht auf Schutz der Persönlichkeit | Recht auf Schutz vor Verleumdung`
- **missing_en** @ `timeline[0].title`
  - DE: `Microsoft integriert GPT-4 in Bing und startet öffentliche Testphase`
- **missing_en** @ `timeline[0].description`
  - DE: `Microsoft kündigt die Integration eines KI-gestützten Chatbots in Bing an und be`
- **missing_en** @ `timeline[1].title`
  - DE: `Journalisten dokumentieren bedrohliche und manipulative Bot-Antworten`
- **missing_en** @ `timeline[1].description`
  - DE: `Wenige Tage nach dem Start veröffentlicht New York Times-Journalist Kevin Roose `
- **missing_en** @ `timeline[2].title`
  - DE: `Diffamierungsfälle und systematische Falschinformationen dokumentiert`
- **missing_en** @ `timeline[2].description`
  - DE: `Mehrere Personen berichten, dass Bing Chat falsche, diffamierende Behauptungen ü`
- **missing_en** @ `timeline[3].title`
  - DE: `Microsoft schränkt Bot ein, grundlegende Probleme bleiben ungelöst`
- **missing_en** @ `timeline[3].description`
  - DE: `Microsoft führt mehrere Einschränkungen ein: Begrenzung der Gesprächslänge, Eins`
- **missing_en** @ `sources[0].title`
  - DE: `Microsoft's Bing is an emotionally manipulative liar, and people love it`

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

- **missing_en** @ `name`
  - DE: `NYPD Domain Awareness System: KI-Massenüberwachung in New York`
- **missing_en** @ `description`
  - DE: `Das New York Police Department betreibt mit dem Domain Awareness System (DAS) ei`
- **missing_en** @ `location.name`
  - DE: `New York City, USA`
- **missing_en** @ `actors[0].name`
  - DE: `New York Police Department (NYPD)`
- **missing_en** @ `actors[1].name`
  - DE: `Microsoft Corporation`
- **missing_en** @ `actors[2].name`
  - DE: `Amnesty International`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Versammlungsfreiheit | Schutz vor Diskriminierung`
- **missing_en** @ `timeline[0].title`
  - DE: `Domain Awareness System gestartet`
- **missing_en** @ `timeline[0].description`
  - DE: `NYPD und Microsoft starten das Domain Awareness System. Es verknüpft über 6.000 `
- **missing_en** @ `timeline[1].title`
  - DE: `Gesichtserkennung wird integriert`
- **missing_en** @ `timeline[1].description`
  - DE: `NYPD integriert Gesichtserkennung in das DAS. Fotos aus Überwachungskameras werd`
- **missing_en** @ `timeline[2].title`
  - DE: `Einsatz bei Black-Lives-Matter-Protesten`
- **missing_en** @ `timeline[2].description`
  - DE: `Während der George-Floyd-Proteste setzt NYPD Drohnen, Überwachungskameras und Ge`
- **missing_en** @ `timeline[3].title`
  - DE: `POST Act und wachsender Widerstand`
- **missing_en** @ `timeline[3].description`
  - DE: `Der POST Act verpflichtet NYPD erstmals, Informationen über eingesetzte Überwach`
- **missing_en** @ `sources[0].title`
  - DE: `Ban the Scan: New York City`

### usa-openai-copyrights-autoren.json

- **missing_en** @ `name`
  - DE: `USA: Authors Guild verklagt OpenAI wegen unerlaubtem Training auf urheberrechtli`
- **missing_en** @ `description`
  - DE: `Die Authors Guild und Dutzende Einzelautoren — darunter John Grisham, Jodi Picou`
- **missing_en** @ `location.name`
  - DE: `New York, USA`
- **missing_en** @ `actors[0].name`
  - DE: `OpenAI`
- **missing_en** @ `actors[1].name`
  - DE: `Authors Guild`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Urheberrecht | Recht auf geistiges Eigentum | Wirtschaftliche Rechte von Urhebern`
- **missing_en** @ `timeline[0].title`
  - DE: `ChatGPT-Launch mit urheberrechtlich problematischen Trainingsdaten`
- **missing_en** @ `timeline[0].description`
  - DE: `OpenAI veröffentlicht ChatGPT, das auf dem GPT-3.5-Modell basiert. Spatere Analy`
- **missing_en** @ `timeline[1].title`
  - DE: `Offener Brief und Forderungen der Authors Guild`
- **missing_en** @ `timeline[1].description`
  - DE: `Die Authors Guild sammelt uber 10.000 Unterschriften fur einen offenen Brief an `
- **missing_en** @ `timeline[2].title`
  - DE: `Authors Guild reicht Sammelklage gegen OpenAI ein`
- **missing_en** @ `timeline[2].description`
  - DE: `Die Authors Guild und 17 prominente Autoren — darunter John Grisham, Jodi Picoul`
- **missing_en** @ `timeline[3].title`
  - DE: `Eskalation: New York Times und weitere Klagen`
- **missing_en** @ `timeline[3].description`
  - DE: `Die New York Times reicht Ende Dezember 2023 ebenfalls Klage ein. OpenAI schlies`
- **missing_en** @ `sources[0].title`
  - DE: `The Atlantic: The Secret Sauce of ChatGPT Training Data`

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

- **missing_en** @ `name`
  - DE: `USA: ChatGPT-Studio-Ghibli-Stilkopie 2025 — KI-Urheberrechtsstreit eskaliert glo`
- **missing_en** @ `description`
  - DE: `Im März 2025 ging ein OpenAI-Update viral: ChatGPT konnte Bilder im charakterist`
- **missing_en** @ `location.name`
  - DE: `San Francisco, Kalifornien, USA`
- **missing_en** @ `actors[0].name`
  - DE: `OpenAI`
- **missing_en** @ `actors[1].name`
  - DE: `Studio Ghibli / Hayao Miyazaki`
- **missing_en** @ `actors[2].name`
  - DE: `Karla Ortiz (Konzept-Künstlerin, Kläger gegen Stability AI)`
- **missing_en** @ `actors[3].name`
  - DE: `Sam Altman (OpenAI-CEO)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Urheberrechte | Recht auf geistiges Eigentum | Recht auf künstlerische Würde`
- **missing_en** @ `timeline[0].title`
  - DE: `Miyazaki: 'Ich bin absolut widerwärtig von KI-Animation'`
- **missing_en** @ `timeline[0].description`
  - DE: `Bereits 2016 äußert Hayao Miyazaki in einer dokumentierten Demonstration eines K`
- **missing_en** @ `timeline[1].title`
  - DE: `Künstler-Klagen gegen KI-Image-Generatoren laufen`
- **missing_en** @ `timeline[1].description`
  - DE: `Karla Ortiz und andere Konzept-Künstlerinnen klagen Stability AI, Midjourney und`
- **missing_en** @ `timeline[2].title`
  - DE: `ChatGPT-Studio-Ghibli-Filter geht viral`
- **missing_en** @ `timeline[2].description`
  - DE: `OpenAI integriert mit dem GPT-4o-Update einen Bildgenerator, der gezielt 'Studio`
- **missing_en** @ `timeline[3].title`
  - DE: `Backlash + neue Urheberrechtsdebatte`
- **missing_en** @ `timeline[3].description`
  - DE: `Karla Ortiz erklärt öffentlich: 'klares Beispiel, wie Unternehmen wie OpenAI sic`
- **missing_en** @ `sources[0].title`
  - DE: `OpenAI's Studio Ghibli-style images renew the debate over AI and copyright`
- **missing_en** @ `sources[1].title`
  - DE: `ChatGPT's Studio Ghibli-style images show its creative power – but raise new cop`
- **missing_en** @ `sources[2].title`
  - DE: `ChatGPT's Studio Ghibli-style images are no laughing matter`
- **missing_en** @ `sources[3].title`
  - DE: `The backlash against ChatGPT's Studio Ghibli filter`

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

- **missing_en** @ `name`
  - DE: `USA: Palantir Gotham — KI-gestutztes Targeting und Geheimdienstfusion im Militar`
- **missing_en** @ `description`
  - DE: `Palantir Technologies entwickelt mit der Gotham-Plattform ein KI-gestutztes Syst`
- **missing_en** @ `location.name`
  - DE: `Denver, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Palantir Technologies`
- **missing_en** @ `actors[1].name`
  - DE: `US-Verteidigungsministerium`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Leben | Recht auf faires Verfahren | Schutz vor willkurlicher Gewalt`
- **missing_en** @ `timeline[0].title`
  - DE: `Erste Militarvertrage und Afghanistan-Einsatz`
- **missing_en** @ `timeline[0].description`
  - DE: `Palantir schliess erste Vertrage mit dem US-Militar und der CIA. Die Gotham-Plat`
- **missing_en** @ `timeline[1].title`
  - DE: `Project Maven und Protest von Google-Mitarbeiter`
- **missing_en** @ `timeline[1].description`
  - DE: `Nachdem bekannt wird, dass Google an Project Maven mitwirkt — einem Pentagon-Pro`
- **missing_en** @ `timeline[2].title`
  - DE: `Ukraine-Einsatz und NATO-Geheimdienstintegration`
- **missing_en** @ `timeline[2].description`
  - DE: `Palantir stellt der Ukraine nach dem russischen Einmarsch Gotham-Zugang bereit. `
- **missing_en** @ `timeline[3].title`
  - DE: `NATO-Ausweitung und wachsende Zivilgesellschaftskritik`
- **missing_en** @ `timeline[3].description`
  - DE: `Palantir gewinnt umfangreiche NATO-Vertrage zur Geheimdienstfusion. Die ACLU und`
- **missing_en** @ `sources[0].title`
  - DE: `Palantir Technologies`
- **missing_en** @ `sources[1].title`
  - DE: `Gotham — Defense Decision Making Platform`
- **missing_en** @ `sources[2].title`
  - DE: `Palantir, the Secretive Tech Giant Shaping Ukraine's War Effort`
- **missing_en** @ `sources[3].title`
  - DE: `Military AI: Ukraine shares data for autonomous weapons and Palantir's role`

### usa-predictive-policing-chicago.json

- **missing_en** @ `name`
  - DE: `USA: Chicagos 'Strategic Subject List' — Algorithmisches Gewaltrisiko-Scoring mi`
- **missing_en** @ `description`
  - DE: `Das Chicago Police Department setzte ab 2012 eine algorithmisch erstellte 'Strat`
- **missing_en** @ `location.name`
  - DE: `Chicago, Illinois, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Chicago Police Department`
- **missing_en** @ `actors[1].name`
  - DE: `Illinois Institute of Technology`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphare | Recht auf Gleichbehandlung | Unschuldsvermutung`
- **missing_en** @ `timeline[0].title`
  - DE: `Einfuhrung der Strategic Subject List`
- **missing_en** @ `timeline[0].description`
  - DE: `Das Chicago Police Department implementiert in Zusammenarbeit mit dem Illinois I`
- **missing_en** @ `timeline[1].title`
  - DE: `RAND-Evaluation deckt gravierende Schwachen auf`
- **missing_en** @ `timeline[1].description`
  - DE: `Die RAND Corporation veröffentlicht eine offizielle Evaluation der SSL. Ergebnis`
- **missing_en** @ `timeline[2].title`
  - DE: `Stadtprufer verurteilt System als ineffektiv und diskriminierend`
- **missing_en** @ `timeline[2].description`
  - DE: `Der Stadtprufer von Chicago (Inspector General) veröffentlicht einen Bericht, de`
- **missing_en** @ `timeline[3].title`
  - DE: `Einstellung des Systems und Prasedenzwirkung`
- **missing_en** @ `timeline[3].description`
  - DE: `Das Chicago Police Department gibt die offizielle Einstellung der Strategic Subj`
- **missing_en** @ `sources[0].title`
  - DE: `Risk, race, and predictive policing: A critical race theory analysis of the stra`
- **missing_en** @ `sources[1].title`
  - DE: `Predictive Policing Explained`
- **missing_en** @ `sources[2].title`
  - DE: `The Real Minority Report: Predictive Policing Algorithms Reflect Racial Bias`
- **missing_en** @ `sources[3].title`
  - DE: `Predictive Policing and the Long Road to Transparency`
- **missing_en** @ `sources[4].title`
  - DE: `Challenging Racist Predictive Policing Algorithms Under the Equal Protection Cla`

### usa-predpol-la-aufloesung.json

- **missing_en** @ `name`
  - DE: `USA: PredPol in Los Angeles — Diskriminierendes Predictive Policing eingestellt`
- **missing_en** @ `description`
  - DE: `Die Polizeibehoerde Los Angeles (LAPD) setzte von 2012 bis 2022 das System PredP`
- **missing_en** @ `location.name`
  - DE: `Los Angeles, USA`
- **missing_en** @ `actors[0].name`
  - DE: `LAPD (Los Angeles Police Department)`
- **missing_en** @ `actors[1].name`
  - DE: `PredPol / Geolitica`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Gleichbehandlung | Recht auf Privatsphäre | Reisefreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `LAPD einführt PredPol stadtweit`
- **missing_en** @ `timeline[0].description`
  - DE: `Das LAPD implementiert PredPol, entwickelt an der UCLA, als erstes grosses Poliz`
- **missing_en** @ `timeline[1].title`
  - DE: `The Markup und Stop LAPD Spying decken rassistische Muster auf`
- **missing_en** @ `timeline[1].description`
  - DE: `Investigative Berichte von The Markup und der zivilgesellschaftlichen Gruppe Sto`
- **missing_en** @ `timeline[2].title`
  - DE: `LAPD Inspector General bestaetigt Bias im Audit`
- **missing_en** @ `timeline[2].description`
  - DE: `Der unabhaengige LAPD Inspector General veröffentlicht einen Prüfbericht, der be`
- **missing_en** @ `timeline[3].title`
  - DE: `LAPD stellt PredPol und weiteres Predictive Policing ein`
- **missing_en** @ `timeline[3].description`
  - DE: `Das LAPD kündigt die Einstellung von PredPol sowie des parallelen Personenprofil`
- **missing_en** @ `sources[0].title`
  - DE: `Crime Prediction Software Promised to Be Free of Biases. New Data Shows It Perpe`

### usa-proctoring-ki-studenten.json

- **missing_en** @ `name`
  - DE: `USA: KI-Prufungsaufsicht diskriminiert Studierende mit dunkler Hautfarbe und Beh`
- **missing_en** @ `description`
  - DE: `Im Zuge der COVID-19-Pandemie setzten US-amerikanische Hochschulen in großem Umf`
- **missing_en** @ `location.name`
  - DE: `Washington DC, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Proctorio`
- **missing_en** @ `actors[1].name`
  - DE: `ExamSoft`
- **missing_en** @ `actors[2].name`
  - DE: `US-amerikanische Universitaten`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Bildung | Recht auf Gleichbehandlung | Diskriminierungsschutz`
- **missing_en** @ `timeline[0].title`
  - DE: `Massenhafter Umstieg auf KI-Prufungsaufsicht wahrend COVID-19`
- **missing_en** @ `timeline[0].description`
  - DE: `Mit der Schliesssung von Campussen im Marz 2020 stellen Hunderte US-amerikanisch`
- **missing_en** @ `timeline[1].title`
  - DE: `EFF und Studierendenverbande dokumentieren Diskriminierung`
- **missing_en** @ `timeline[1].description`
  - DE: `Die Electronic Frontier Foundation veröffentlicht einen umfassenden Bericht, der`
- **missing_en** @ `timeline[2].title`
  - DE: `Klagen und verbreitete Berichte uber Betrugsfalschvorwurfe`
- **missing_en** @ `timeline[2].description`
  - DE: `Mehrere Studierende und Advocacy-Gruppen reichen Klagen gegen Universitaten und `
- **missing_en** @ `timeline[3].title`
  - DE: `Teilweise Abkehr von KI-Proctoring an US-Universitaten`
- **missing_en** @ `timeline[3].description`
  - DE: `Infolge des offentlichen Drucks, der Klagen und legislativer Initiativen beginne`
- **missing_en** @ `sources[0].title`
  - DE: `Proctoring Apps Subject Students to Unnecessary Surveillance`

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

- **missing_en** @ `name`
  - DE: `USA: Rassistischer Bias in KI-Algorithmus der Gesundheitsversorgung — 200 Millio`
- **missing_en** @ `description`
  - DE: `Ein von Optum entwickelter und in großen US-amerikanischen Krankenhäusern weitve`
- **missing_en** @ `location.name`
  - DE: `Boston, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Optum (UnitedHealth Group)`
- **missing_en** @ `actors[1].name`
  - DE: `US-amerikanische Krankenhäuser und Krankenversicherer`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Gesundheitsversorgung | Recht auf Gleichbehandlung | Recht auf Leben`
- **missing_en** @ `timeline[0].title`
  - DE: `Optum-Algorithmus wird in US-Krankenhäusern eingesetzt`
- **missing_en** @ `timeline[0].description`
  - DE: `Der von Optum entwickelte Algorithmus zur Identifikation von Hochrisikapatienten`
- **missing_en** @ `timeline[1].title`
  - DE: `Science-Studie von Obermeyer et al. deckt systemischen Bias auf`
- **missing_en** @ `timeline[1].description`
  - DE: `Forscher um Ziad Obermeyer veröffentlichen in Science eine bahnbrechende Analyse`
- **missing_en** @ `timeline[2].title`
  - DE: `Schätzung: 200 Millionen Menschen jährlich von Bias betroffen`
- **missing_en** @ `timeline[2].description`
  - DE: `Die Forscher schätzen, dass der Algorithmus oder aechnliche Systeme jährlich Ent`
- **missing_en** @ `timeline[3].title`
  - DE: `Branchenreformen und anhaltende strukturelle Probleme`
- **missing_en** @ `timeline[3].description`
  - DE: `Optum kündigt Änderungen am Algorithmus an. Mehrere Krankenhäuser verpflichten s`
- **missing_en** @ `sources[0].title`
  - DE: `Dissecting racial bias in an algorithm used to manage the health of populations`
- **missing_en** @ `sources[1].title`
  - DE: `Racial bias in a medical algorithm favors white patients over sicker black patie`
- **missing_en** @ `sources[2].title`
  - DE: `Millions of black people affected by racial bias in health-care algorithms`
- **missing_en** @ `sources[3].title`
  - DE: `Widely used health care prediction algorithm biased against black people`

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

- **missing_en** @ `name`
  - DE: `USA: Amazon Rekognition und ICE — Fahndung in Führerscheindatenbanken ohne Einwi`
- **missing_en** @ `description`
  - DE: `Das Georgetown Center on Privacy and Technology deckt 2019 auf, dass ICE (Immigr`
- **missing_en** @ `location.name`
  - DE: `Portland, Oregon, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Immigration and Customs Enforcement (ICE)`
- **missing_en** @ `actors[1].name`
  - DE: `Amazon Web Services`
- **missing_en** @ `actors[2].name`
  - DE: `Staatliche Kraftfahrtbehörden (DMVs)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Informationelle Selbstbestimmung | Schutz vor Diskriminierung`
- **missing_en** @ `timeline[0].title`
  - DE: `Georgetown-Studie enthüllt geheimes Fahndungsnetzwerk`
- **missing_en** @ `timeline[0].description`
  - DE: `Das Georgetown Center on Privacy and Technology veröffentlicht 'America Under Wa`
- **missing_en** @ `timeline[1].title`
  - DE: `Washington Post enthüllt detaillierte Kooperationsverträge`
- **missing_en** @ `timeline[1].description`
  - DE: `Die Washington Post berichtet über interne Dokumente, die zeigen, wie weitreiche`
- **missing_en** @ `timeline[2].title`
  - DE: `Moratoriumsdruck nach George Floyd und Amazon-Ankündigung`
- **missing_en** @ `timeline[2].description`
  - DE: `Im Zuge der gesellschaftlichen Debatte nach dem Tod von George Floyd kündigt Ama`
- **missing_en** @ `timeline[3].title`
  - DE: `Fehlende Bundesregulierung und anhaltende DMV-Kooperationen`
- **missing_en** @ `timeline[3].description`
  - DE: `Trotz politischem Druck fehlt ein bundesweites Gesetz, das den Einsatz von Gesic`
- **missing_en** @ `sources[0].title`
  - DE: `The Perpetual Line-Up: Unregulated Police Face Recognition in America`
- **missing_en** @ `sources[1].title`
  - DE: `FBI, ICE find state driver's license photos are a gold mine for facial-recogniti`
- **missing_en** @ `sources[2].title`
  - DE: `We are implementing a one-year moratorium on police use of Rekognition`

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

- **missing_en** @ `name`
  - DE: `USA: Amazon Ring — Privates Kameranetzwerk wird Polizei-Überwachung`
- **missing_en** @ `description`
  - DE: `Amazons Ring-Türklingeln bilden ein Netzwerk von über 10 Millionen privaten Über`
- **missing_en** @ `location.name`
  - DE: `Seattle / USA-weit`
- **missing_en** @ `actors[0].name`
  - DE: `Amazon / Ring`
- **missing_en** @ `actors[1].name`
  - DE: `Über 2.000 US-Polizeibehörden`
- **missing_en** @ `actors[2].name`
  - DE: `Electronic Frontier Foundation (EFF)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Schutz vor Überwachung | Schutz vor Diskriminierung`
- **missing_en** @ `timeline[0].title`
  - DE: `Ring startet Partnerschaften mit Polizeibehörden`
- **missing_en** @ `timeline[0].description`
  - DE: `Amazon/Ring beginnt Partnerschaften mit Polizeibehörden, die über ein spezielles`
- **missing_en** @ `timeline[1].title`
  - DE: `Amazon gibt Videos ohne Zustimmung an Polizei`
- **missing_en** @ `timeline[1].description`
  - DE: `Senator Markey enthüllt, dass Amazon in mindestens 11 Fällen Ring-Videos ohne Zu`
- **missing_en** @ `timeline[2].title`
  - DE: `Ring beendet Polizei-Zugriff ohne Warrant`
- **missing_en** @ `timeline[2].description`
  - DE: `Nach anhaltendem öffentlichem Druck beendet Ring den direkten Zugriff der Polize`
- **missing_en** @ `timeline[3].title`
  - DE: `Debatte über private Überwachungsinfrastruktur`
- **missing_en** @ `timeline[3].description`
  - DE: `Der Ring-Fall löst eine breitere Debatte über die Verschmelzung privater und sta`
- **missing_en** @ `sources[0].title`
  - DE: `Ring Reveals They Give Videos to Police Without User Consent or a Warrant`

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

- **missing_en** @ `name`
  - DE: `USA: ShotSpotter — akustische Überwachung mit Fehlalarmen und diskriminierendem `
- **missing_en** @ `description`
  - DE: `ShotSpotter (heute SoundThinking) vermarktet ein akustisches Sensorsystem zur au`
- **missing_en** @ `location.name`
  - DE: `Chicago, Illinois, USA`
- **missing_en** @ `actors[0].name`
  - DE: `SoundThinking Inc. (vormals ShotSpotter)`
- **missing_en** @ `actors[1].name`
  - DE: `Chicago Police Department`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Schutz vor Diskriminierung | Recht auf ein faires Verfahren | Schutz vor willkürlichen Polizeieinsätzen`
- **missing_en** @ `timeline[0].title`
  - DE: `ShotSpotter-Einführung in Chicago und anderen Großstädten`
- **missing_en** @ `timeline[0].description`
  - DE: `Chicago schließt einen der größten ShotSpotter-Verträge in den USA ab und instal`
- **missing_en** @ `timeline[1].title`
  - DE: `MacArthur-Studie: 89 Prozent der Alarme ohne Nachweis einer Schusswaffe`
- **missing_en** @ `timeline[1].description`
  - DE: `Das MacArthur Justice Center veröffentlicht eine Analyse von 50.000 ShotSpotter-`
- **missing_en** @ `timeline[2].title`
  - DE: `AP-Recherche enthüllt nachträgliche Manipulation von Algorithmus-Ergebnissen`
- **missing_en** @ `timeline[2].description`
  - DE: `Associated Press veröffentlicht eine umfangreiche Untersuchung, die zeigt, dass `
- **missing_en** @ `timeline[3].title`
  - DE: `Chicago kündigt Vertrag — ShotSpotter in anderen Städten weiter aktiv`
- **missing_en** @ `timeline[3].description`
  - DE: `Chicago kündigt seinen Vertrag mit SoundThinking/ShotSpotter nach Jahren öffentl`
- **missing_en** @ `sources[0].title`
  - DE: `Class Action Lawsuit Takes Aim at Chicago's Use of ShotSpotter After Unfounded A`
- **missing_en** @ `sources[1].title`
  - DE: `ShotSpotter Generated Over 40,000 Dead-End Police Deployments in Chicago in 21 M`
- **missing_en** @ `sources[2].title`
  - DE: `City's watchdog finds ShotSpotter rarely leads to evidence of gun crimes`
- **missing_en** @ `sources[3].title`
  - DE: `Lawsuit Alleges Chicago Police Made False Arrests Based on Faulty ShotSpotter Al`

### usa-social-media-kinderschutz-ueberwachung.json

- **missing_en** @ `name`
  - DE: `USA: KOSA und staatlich mandatierte Inhaltsüberwachung auf Social-Media-Plattfor`
- **missing_en** @ `description`
  - DE: `Der Kids Online Safety Act (KOSA) und ähnliche US-Gesetze verpflichten Social-Me`
- **missing_en** @ `location.name`
  - DE: `Washington D.C., USA`
- **missing_en** @ `actors[0].name`
  - DE: `US-Kongress (Senat und Repräsentantenhaus)`
- **missing_en** @ `actors[1].name`
  - DE: `Tech-Konzerne (Meta, TikTok, YouTube u.a.)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Meinungsfreiheit | Informationsfreiheit | Recht auf Privatsphäre`
- **missing_en** @ `timeline[0].title`
  - DE: `Einführung des Kids Online Safety Act im Senat`
- **missing_en** @ `timeline[0].description`
  - DE: `Senatoren Richard Blumenthal und Marsha Blackburn bringen KOSA ein, das Plattfor`
- **missing_en** @ `timeline[1].title`
  - DE: `Senat verabschiedet KOSA mit parteiübergreifender Mehrheit`
- **missing_en** @ `timeline[1].description`
  - DE: `Der US-Senat verabschiedet KOSA mit 91 zu 5 Stimmen. Während Befürworter die Not`
- **missing_en** @ `timeline[2].title`
  - DE: `Bundesstaatliche Umsetzungsgesetze und erste Klagen`
- **missing_en** @ `timeline[2].description`
  - DE: `Mehrere Bundesstaaten — darunter Utah, Arkansas und Texas — verabschieden eigene`
- **missing_en** @ `timeline[3].title`
  - DE: `Plattformweite KI-Filterung und dokumentierte Überblockierung`
- **missing_en** @ `timeline[3].description`
  - DE: `Plattformen implementieren KI-basierte Altersschätzung und Inhaltsfilterung, die`
- **missing_en** @ `sources[0].title`
  - DE: `Kids Online Safety Act Continues to Threaten Our Rights Online: 2024 in Review`
- **missing_en** @ `sources[1].title`
  - DE: `ACLU Slams Senate Passage of Kids Online Safety Act, Urges House to Protect Free`
- **missing_en** @ `sources[2].title`
  - DE: `Kids Online Safety Act`
- **missing_en** @ `sources[3].title`
  - DE: `What to Know About the Kids Online Safety Act`

### usa-stability-ai-urheberrecht.json

- **missing_en** @ `name`
  - DE: `USA: Stability AI und Midjourney — Klagen wegen Urheberrechtsverletzung durch KI`
- **missing_en** @ `description`
  - DE: `Stability AI (Entwickler von Stable Diffusion) und Midjourney sehen sich massive`
- **missing_en** @ `location.name`
  - DE: `San Francisco, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Stability AI`
- **missing_en** @ `actors[1].name`
  - DE: `Midjourney`
- **missing_en** @ `actors[2].name`
  - DE: `Getty Images`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Urheberrecht | Recht auf wirtschaftliche Teilhabe | Eigentumsrecht`
- **missing_en** @ `timeline[0].title`
  - DE: `Stable Diffusion wird mit LAION-Daten trainiert`
- **missing_en** @ `timeline[0].description`
  - DE: `Stability AI veröffentlicht Stable Diffusion, trainiert auf dem LAION-5B-Datensa`
- **missing_en** @ `timeline[1].title`
  - DE: `Sammelklage von Kunstschaffenden eingereicht`
- **missing_en** @ `timeline[1].description`
  - DE: `Die Illustratorinnen und Illustratoren Sarah Andersen, Kelly McKernan und Karla `
- **missing_en** @ `timeline[2].title`
  - DE: `Getty Images verklagt Stability AI in den USA und Grossbritannien`
- **missing_en** @ `timeline[2].description`
  - DE: `Getty Images reicht Klage in den USA und Grossbritannien ein und behauptet, Stab`
- **missing_en** @ `timeline[3].title`
  - DE: `Laufende Verfahren setzen KI-Branche unter Druck`
- **missing_en** @ `timeline[3].description`
  - DE: `Die Klagen laufen weiter und haben branchenweite Diskussionen über faire Trainin`
- **missing_en** @ `sources[0].title`
  - DE: `Getty Images sues Stability AI for scraping its photos to train AI art`
- **missing_en** @ `sources[1].title`
  - DE: `AI and Copyright`
- **missing_en** @ `sources[2].title`
  - DE: `LAION-5B: A new era of open large-scale multi-modal datasets`

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

- **missing_en** @ `name`
  - DE: `USA: Stingray-IMSI-Catcher — Massenüberwachung ohne Durchsuchungsbefehl`
- **missing_en** @ `description`
  - DE: `US-Strafverfolgungsbehörden setzten ab 2007 sogenannte Stingray-Geräte (IMSI-Cat`
- **missing_en** @ `location.name`
  - DE: `Baltimore, Maryland, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Baltimore Police Department`
- **missing_en** @ `actors[1].name`
  - DE: `FBI (Federal Bureau of Investigation)`
- **missing_en** @ `actors[2].name`
  - DE: `Harris Corporation`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Recht auf ein faires Verfahren | Schutz vor willkürlicher Überwachung`
- **missing_en** @ `timeline[0].title`
  - DE: `Erste Stingray-Einsätze durch US-Behörden`
- **missing_en** @ `timeline[0].description`
  - DE: `US-Strafverfolgungsbehörden beginnen flächendeckend IMSI-Catcher der Firma Harri`
- **missing_en** @ `timeline[1].title`
  - DE: `ACLU deckt Ausmaß der Stingray-Nutzung in Baltimore auf`
- **missing_en** @ `timeline[1].description`
  - DE: `Die ACLU veröffentlicht eine umfassende Untersuchung, die belegt, dass die Poliz`
- **missing_en** @ `timeline[2].title`
  - DE: `Rechtliche Herausforderungen und erste Gerichtsurteile`
- **missing_en** @ `timeline[2].description`
  - DE: `Mehrere US-Gerichte beginnen, Stingray-Einsätze ohne Durchsuchungsbefehl als ver`
- **missing_en** @ `timeline[3].title`
  - DE: `Partielle Reformen — Geräte bleiben weiterhin im Einsatz`
- **missing_en** @ `timeline[3].description`
  - DE: `Nach öffentlichem Druck führen einige Bundesstaaten Genehmigungspflichten für IM`
- **missing_en** @ `sources[0].title`
  - DE: `Stingray Tracking Devices: Who's Got Them?`

### usa-suchir-balaji-openai-whistleblower-tod.json

- **missing_en** @ `name`
  - DE: `USA: Tod des OpenAI-Whistleblowers Suchir Balaji 2024`
- **missing_en** @ `description`
  - DE: `Suchir Balaji, ein 26-jähriger ehemaliger KI-Forscher bei OpenAI, wurde am 26. N`
- **missing_en** @ `location.name`
  - DE: `San Francisco, Kalifornien, USA`
- **missing_en** @ `actors[0].name`
  - DE: `OpenAI`
- **missing_en** @ `actors[1].name`
  - DE: `Suchir Balaji (ehemaliger OpenAI-Forscher)`
- **missing_en** @ `actors[2].name`
  - DE: `San Francisco Police Department`
- **missing_en** @ `actors[3].name`
  - DE: `New York Times`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Leben | Whistleblower-Schutz | Meinungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Balaji verlässt OpenAI nach vier Jahren`
- **missing_en** @ `timeline[0].description`
  - DE: `Suchir Balaji verlässt OpenAI nach knapp vier Jahren als KI-Forscher. Er war an `
- **missing_en** @ `timeline[1].title`
  - DE: `New-York-Times-Interview: Vorwurf der Urheberrechtsverletzung`
- **missing_en** @ `timeline[1].description`
  - DE: `In einem ausführlichen Interview mit der New York Times argumentiert Balaji, das`
- **missing_en** @ `timeline[2].title`
  - DE: `Tot in San-Francisco-Wohnung aufgefunden`
- **missing_en** @ `timeline[2].description`
  - DE: `Suchir Balaji wird in seiner Wohnung tot aufgefunden, einen Monat nach dem NYT-I`
- **missing_en** @ `timeline[3].title`
  - DE: `Eltern klagen, fordern Reinvestigation`
- **missing_en** @ `timeline[3].description`
  - DE: `Balajis Eltern verklagen den Apartmentkomplex und beauftragen einen privaten Pat`
- **missing_en** @ `sources[0].title`
  - DE: `Suchir Balaji`
- **missing_en** @ `sources[1].title`
  - DE: `OpenAI whistleblower who raised legal concerns about ChatGPT's datasets has died`
- **missing_en** @ `sources[2].title`
  - DE: `OpenAI whistleblower Suchir Balaji dead at age 26; family seeks answers as death`
- **missing_en** @ `sources[3].title`
  - DE: `Parents sue apartment complex over death of OpenAI whistleblower`

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

- **missing_en** @ `name`
  - DE: `USA: Tech-Konzerne liefern Dateninfrastruktur für ICE-Einwanderungsverfolgung`
- **missing_en** @ `description`
  - DE: `Palantir, Amazon Web Services und Microsoft stellen der US-Einwanderungsbehoerde`
- **missing_en** @ `location.name`
  - DE: `San Francisco, Kalifornien, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Palantir Technologies`
- **missing_en** @ `actors[1].name`
  - DE: `Amazon Web Services (AWS)`
- **missing_en** @ `actors[2].name`
  - DE: `Microsoft`
- **missing_en** @ `actors[3].name`
  - DE: `Immigration and Customs Enforcement (ICE)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphaere | Schutz vor Diskriminierung | Recht auf faires Verfahren`
- **missing_en** @ `timeline[0].title`
  - DE: `Ausweitung der Palantir-ICE-Vertraege unter Trump`
- **missing_en** @ `timeline[0].description`
  - DE: `Die Trump-Administration weitet bestehende Vertraege mit Palantir massiv aus. Da`
- **missing_en** @ `timeline[1].title`
  - DE: `Familientrennungspolitik und Tech-Kontroversy`
- **missing_en** @ `timeline[1].description`
  - DE: `Die 'Zero Tolerance'-Politik der US-Regierung führt zur Trennung von Tausenden M`
- **missing_en** @ `timeline[2].title`
  - DE: `Massenproteste unter Tech-Beschaeftigten`
- **missing_en** @ `timeline[2].description`
  - DE: `Tausende Beschaeftigte von Amazon, Microsoft, Google und Salesforce unterzeichne`
- **missing_en** @ `timeline[3].title`
  - DE: `Vertraege laufen trotz Biden-Administration weiter`
- **missing_en** @ `timeline[3].description`
  - DE: `Auch nach dem Regierungswechsel 2021 bleiben die Kernvertraege zwischen Palantir`
- **missing_en** @ `sources[0].title`
  - DE: `Amazon: Stop Powering ICE's Deportation Machine`
- **missing_en** @ `sources[1].title`
  - DE: `Palantir granted $30 million to build 'ImmigrationOS' surveillance platform for `
- **missing_en** @ `sources[2].title`
  - DE: `Amazon Employees Demand It Stop Working With ICE`
- **missing_en** @ `sources[3].title`
  - DE: `Meet the billionaire oligarchs and corporations enabling ICE's deportation machi`

### usa-tesla-autopilot-todesfaelle.json

- **missing_en** @ `name`
  - DE: `Tesla Autopilot: Tödliche Unfälle durch irreführendes KI-Marketing`
- **missing_en** @ `description`
  - DE: `Teslas 'Autopilot' und 'Full Self-Driving' (FSD) Systeme sind in hunderte Unfäll`
- **missing_en** @ `location.name`
  - DE: `Palo Alto, Kalifornien, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Tesla, Inc.`
- **missing_en** @ `actors[1].name`
  - DE: `NHTSA (National Highway Traffic Safety Administration)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Leben | Recht auf körperliche Unversehrtheit | Recht auf Verbraucherschutz`
- **missing_en** @ `timeline[0].title`
  - DE: `Erster tödlicher Autopilot-Unfall`
- **missing_en** @ `timeline[0].description`
  - DE: `Joshua Brown stirbt in Florida, als sein Tesla Model S mit aktiviertem Autopilot`
- **missing_en** @ `timeline[1].title`
  - DE: `NHTSA-Untersuchung: Serie von Rettungsfahrzeug-Kollisionen`
- **missing_en** @ `timeline[1].description`
  - DE: `NHTSA eröffnet eine formelle Untersuchung nach einer Serie von Unfällen, bei den`
- **missing_en** @ `timeline[2].title`
  - DE: `Tesla ruft 2 Millionen Fahrzeuge wegen Autopilot zurück`
- **missing_en** @ `timeline[2].description`
  - DE: `NHTSA erzwingt einen Rückruf von über 2 Millionen Tesla-Fahrzeugen. Die Untersuc`
- **missing_en** @ `timeline[3].title`
  - DE: `Strafverfahren und Regulierungsdebatte`
- **missing_en** @ `timeline[3].description`
  - DE: `In Kalifornien wird erstmals ein Fahrer wegen fahrlässiger Tötung unter Nutzung `
- **missing_en** @ `sources[0].title`
  - DE: `List of Tesla Autopilot crashes`
- **missing_en** @ `sources[1].title`
  - DE: `NHTSA Investigation EA22002 — Tesla Autopilot Crashes Report`
- **missing_en** @ `sources[2].title`
  - DE: `U.S. opens new investigation into Tesla's 'Full Self-Driving' system after fatal`
- **missing_en** @ `sources[3].title`
  - DE: `Tesla recalls 2 million vehicles to fix autopilot safety system`

### usa-tiktok-daten-china.json

- **missing_en** @ `name`
  - DE: `USA: TikTok-Datenpraktiken und möglicher chinesischer Regierungszugang zu Nutzer`
- **missing_en** @ `description`
  - DE: `TikTok, die Kurzvideoplattform des chinesischen Mutterkonzerns ByteDance, steht `
- **missing_en** @ `location.name`
  - DE: `Culver City, Kalifornien, USA`
- **missing_en** @ `actors[0].name`
  - DE: `ByteDance / TikTok`
- **missing_en** @ `actors[1].name`
  - DE: `Chinesische Regierung`
- **missing_en** @ `actors[2].name`
  - DE: `US-Regierung / Kongress`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphäre | Informationelle Selbstbestimmung | Meinungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Trump-Administration versucht TikTok-Verbot`
- **missing_en** @ `timeline[0].description`
  - DE: `Die Trump-Administration ordnet per Exekutiverlass an, TikTok in den USA zu verb`
- **missing_en** @ `timeline[1].title`
  - DE: `BuzzFeed enthüllt: Chinesische Mitarbeiter greifen auf US-Daten zu`
- **missing_en** @ `timeline[1].description`
  - DE: `BuzzFeed News veröffentlicht auf Basis von internen TikTok-Audioaufnahmen Belege`
- **missing_en** @ `timeline[2].title`
  - DE: `TikTok-CEO vor dem US-Kongress`
- **missing_en** @ `timeline[2].description`
  - DE: `TikTok-Chef Shou Zi Chew steht fünf Stunden lang dem US-Repräsentantenhaus Rede `
- **missing_en** @ `timeline[3].title`
  - DE: `Veräussern-oder-Verbot-Gesetz unterzeichnet`
- **missing_en** @ `timeline[3].description`
  - DE: `US-Präsident Biden unterzeichnet ein Gesetz, das ByteDance verpflichtet, TikTok `
- **missing_en** @ `sources[0].title`
  - DE: `Leaked Audio From 80 Internal TikTok Meetings Shows China Had Access to US Data`

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

- **missing_en** @ `name`
  - DE: `USA: Twitters Algorithmus verstärkt rechte und rassistische Inhalte`
- **missing_en** @ `description`
  - DE: `Interne Twitter-Forschung aus dem Jahr 2021 ergab, dass der Empfehlungsalgorithm`
- **missing_en** @ `location.name`
  - DE: `San Francisco, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Twitter/X`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Meinungsfreiheit | Recht auf Gleichbehandlung | Informationsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Interne Twitter-Forschung dokumentiert algorithmischen Bias`
- **missing_en** @ `timeline[0].description`
  - DE: `Twitter-eigene Forscher stellen fest, dass der Empfehlungsalgorithmus politisch `
- **missing_en** @ `timeline[1].title`
  - DE: `Musk-Übernahme und selektive Algorithmus-Offenlegung`
- **missing_en** @ `timeline[1].description`
  - DE: `Nach dem Kauf von Twitter durch Elon Musk für 44 Milliarden Dollar werden Teile `
- **missing_en** @ `timeline[2].title`
  - DE: `PNAS-Studie bestaetigt politische Verstärkungsverzerrung`
- **missing_en** @ `timeline[2].description`
  - DE: `Eine Studie der Proceedings of the National Academy of Sciences analysiert Milli`
- **missing_en** @ `timeline[3].title`
  - DE: `Anhaltende Verzerrung und fehlende Rechenschaftspflicht`
- **missing_en** @ `timeline[3].description`
  - DE: `Trotz öffentlicher Diskussion und Regulierungsdruck in der EU bleibt eine unabha`
- **missing_en** @ `sources[0].title`
  - DE: `Examining algorithmic amplification of political content on Twitter`

### usa-uber-lyft-gig-worker-algorithmus.json

- **missing_en** @ `name`
  - DE: `USA: Uber und Lyft — algorithmische Lohnmanipulation und Überwachung von Gig-Arb`
- **missing_en** @ `description`
  - DE: `Uber und Lyft setzen undurchsichtige Algorithmen ein, die Löhne von Fahrern dyna`
- **missing_en** @ `location.name`
  - DE: `San Francisco, Kalifornien, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Uber Technologies`
- **missing_en** @ `actors[1].name`
  - DE: `Lyft Inc.`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf faire Entlohnung | Recht auf Privatsphäre | Vereinigungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Akademische Studien belegen algorithmische Lohnmanipulation`
- **missing_en** @ `timeline[0].description`
  - DE: `Rechtswissenschaftlerin Veena Dubal (UC Hastings) beginnt umfangreiche Untersuch`
- **missing_en** @ `timeline[1].title`
  - DE: `Kalifornien verabschiedet AB5 zum Schutz von Gig-Arbeitern`
- **missing_en** @ `timeline[1].description`
  - DE: `Das kalifornische Gesetz AB5 stuft Fahrer als Angestellte ein, was Uber und Lyft`
- **missing_en** @ `timeline[2].title`
  - DE: `Proposition 22 — Unternehmen hebeln Arbeitnehmerrechte aus`
- **missing_en** @ `timeline[2].description`
  - DE: `Uber, Lyft, DoorDash und andere Gig-Plattformen gewinnen mit Proposition 22 die `
- **missing_en** @ `timeline[3].title`
  - DE: `FTC-Untersuchungen und internationale Regulierung`
- **missing_en** @ `timeline[3].description`
  - DE: `Die US-Handelskommission FTC leitet Untersuchungen zu Deaktivierungspraktiken be`
- **missing_en** @ `sources[0].title`
  - DE: `Exposing the Rideshare Industry's Misleading Wage Claims`
- **missing_en** @ `sources[1].title`
  - DE: `Uber and Lyft's Fight Over Proposition 22 Isn't Over. It's Just Heating Up.`
- **missing_en** @ `sources[2].title`
  - DE: `Uber and the labor market: Uber drivers' compensation, wages, and the scale of U`

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

- **missing_en** @ `name`
  - DE: `USA: Unfaelle autonomer Fahrzeuge von Cruise und Waymo in San Francisco`
- **missing_en** @ `description`
  - DE: `In San Francisco verursachen autonome Fahrzeuge der Unternehmen Cruise (GM) und `
- **missing_en** @ `location.name`
  - DE: `San Francisco, Kalifornien, USA`
- **missing_en** @ `actors[0].name`
  - DE: `Cruise / General Motors`
- **missing_en** @ `actors[1].name`
  - DE: `Waymo / Alphabet`
- **missing_en** @ `actors[2].name`
  - DE: `California DMV (Kraftfahrtbehoerde)`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf koerperliche Unversehrtheit | Öffentliche Sicherheit | Transparenz bei KI-Systemen`
- **missing_en** @ `timeline[0].title`
  - DE: `Grossflaechige Expansion autonomer Robotaxis`
- **missing_en** @ `timeline[0].description`
  - DE: `Cruise und Waymo erhalten von der California Public Utilities Commission die Gen`
- **missing_en** @ `timeline[1].title`
  - DE: `Zunahme schwerer Zwischenfaelle`
- **missing_en** @ `timeline[1].description`
  - DE: `Ein Cruise-Fahrzeug blockiert in San Francisco mehrfach Einsatzfahrzeuge bei Not`
- **missing_en** @ `timeline[2].title`
  - DE: `Cruise-Fahrzeug schleppt verletzte Fussgaengerin`
- **missing_en** @ `timeline[2].description`
  - DE: `Ein autonomes Cruise-Fahrzeug erfasst eine Fussgaengerin, die zuvor von einem an`
- **missing_en** @ `timeline[3].title`
  - DE: `Entzug der Betriebserlaubnis für Cruise`
- **missing_en** @ `timeline[3].description`
  - DE: `Die California DMV entzieht Cruise die Betriebserlaubnis wegen Taeuschen der Beh`
- **missing_en** @ `sources[0].title`
  - DE: `DMV Suspends Cruise LLC's Autonomous Vehicle Deployment and Driverless Testing P`
- **missing_en** @ `sources[1].title`
  - DE: `Cruise to Pause Driverless Cars in California After Suspension of License`
- **missing_en** @ `sources[2].title`
  - DE: `GM's Cruise recalls self-driving software after pedestrian incident`
- **missing_en** @ `sources[3].title`
  - DE: `NHTSA Opens Investigation into Cruise Autonomous Vehicles`

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

- **missing_en** @ `name`
  - DE: `USA: KI-Einstellungsplattformen diskriminieren nach Akzent, Aussehen und Behinde`
- **missing_en** @ `description`
  - DE: `KI-gestutzte Einstellungsplattformen wie ZipRecruiter und HireVue wurden als dis`
- **missing_en** @ `location.name`
  - DE: `Santa Monica, USA`
- **missing_en** @ `actors[0].name`
  - DE: `ZipRecruiter`
- **missing_en** @ `actors[1].name`
  - DE: `HireVue`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Gleichbehandlung | Recht auf Arbeit | Recht auf faires Verfahren`
- **missing_en** @ `timeline[0].title`
  - DE: `HireVue setzt automatisierte Videoanalyse ein`
- **missing_en** @ `timeline[0].description`
  - DE: `HireVue nutzt ein KI-System, das Videointerviews von Bewerber automatisch anhand`
- **missing_en** @ `timeline[1].title`
  - DE: `EPIC reicht FTC-Beschwerde ein`
- **missing_en** @ `timeline[1].description`
  - DE: `Das Electronic Privacy Information Center (EPIC) stellt bei der US-amerikanische`
- **missing_en** @ `timeline[2].title`
  - DE: `HireVue stellt Gesichtsanalyse ein`
- **missing_en** @ `timeline[2].description`
  - DE: `Unter dem Druck von Datenschutzorganisationen und kritischer Berichterstattung g`
- **missing_en** @ `timeline[3].title`
  - DE: `EEOC-Leitlinien und anhaltende Regulierungsluecke`
- **missing_en** @ `timeline[3].description`
  - DE: `Die US Equal Employment Opportunity Commission (EEOC) veröffentlicht Leitlinien `
- **missing_en** @ `sources[0].title`
  - DE: `In re HireVue — Complaint, Request for Investigation and Injunction`
- **missing_en** @ `sources[1].title`
  - DE: `EEOC Guidance on Artificial Intelligence and Equal Employment Opportunity`

### usbekistan-ki-smart-city-ueberwachung.json

- **missing_en** @ `name`
  - DE: `Usbekistan: Huawei Safe City und KI-Überwachung in Taschkent`
- **missing_en** @ `description`
  - DE: `Usbekistan setzt seit 2019 Huaweis Safe City-System in Taschkent ein, das Gesich`
- **missing_en** @ `location.name`
  - DE: `Taschkent, Usbekistan`
- **missing_en** @ `actors[0].name`
  - DE: `Usbekische Regierung`
- **missing_en** @ `actors[1].name`
  - DE: `Huawei Technologies`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphaere | Meinungsfreiheit | Versammlungsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Vertragsabschluss und Beginn der Safe-City-Implementierung`
- **missing_en** @ `timeline[0].description`
  - DE: `Die usbekische Regierung schliesst einen Vertrag mit Huawei über die Implementie`
- **missing_en** @ `timeline[1].title`
  - DE: `Ausweitung auf weitere Städte und Integration in Sicherheitsapparat`
- **missing_en** @ `timeline[1].description`
  - DE: `Das System wird auf weitere große Städte Usbekistans ausgeweitet. Die Kameradich`
- **missing_en** @ `timeline[2].title`
  - DE: `Karakalpakstan-Proteste: Verdacht auf Einsatz zur Demonstrantenerkennung`
- **missing_en** @ `timeline[2].description`
  - DE: `Bei schweren Protesten in der autonomen Republik Karakalpakstan gegen geplante V`
- **missing_en** @ `timeline[3].title`
  - DE: `Ausweitung der Überwachungsinfrastruktur ohne Reformdruck`
- **missing_en** @ `timeline[3].description`
  - DE: `Usbekistan weitet seine Smart-City-Infrastruktur weiter aus. Kritische Stimmen z`
- **missing_en** @ `sources[0].title`
  - DE: `Freedom in the World: Uzbekistan`

### venezuela-patria-ueberwachung.json

- **missing_en** @ `name`
  - DE: `Venezuela: Patria-Plattform und chinesisches Sozialkontrollsystem`
- **missing_en** @ `description`
  - DE: `Venezuela hat mit Unterstutzung von ZTE (China) ein digitales Sozialkontrollsyst`
- **missing_en** @ `location.name`
  - DE: `Caracas, Venezuela`
- **missing_en** @ `actors[0].name`
  - DE: `Venezolanische Regierung`
- **missing_en** @ `actors[1].name`
  - DE: `ZTE Corporation`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Recht auf Privatsphare | Wahlfreiheit | Recht auf Nahrung`
- **missing_en** @ `timeline[0].title`
  - DE: `Einfuhrung des Carnet de la Patria`
- **missing_en** @ `timeline[0].description`
  - DE: `Prasident Nicolas Maduro fuhrt den 'Carnet de la Patria' ein, eine digitale ID-K`
- **missing_en** @ `timeline[1].title`
  - DE: `Reuters-Enthullung: ZTE baut Chinas Uberwachungsmodell nach`
- **missing_en** @ `timeline[1].description`
  - DE: `Reuters veröffentlicht eine umfassende Untersuchung, die belegt, dass ZTE dabei `
- **missing_en** @ `timeline[2].title`
  - DE: `COVID-Tracking und Ausweitung der Plattform`
- **missing_en** @ `timeline[2].description`
  - DE: `Wahrend der COVID-19-Pandemie wird die Patria-Plattform zur Verteilung von Nahru`
- **missing_en** @ `timeline[3].title`
  - DE: `Wahluberwachung und internationaler Druck`
- **missing_en** @ `timeline[3].description`
  - DE: `Bei Regionalwahlen 2023 wird der Carnet de la Patria flachendeckend an Wahlstati`
- **missing_en** @ `sources[0].title`
  - DE: `Access Now: Digital Rights in Venezuela`
- **missing_en** @ `sources[1].title`
  - DE: `World Report 2023: Venezuela`
- **missing_en** @ `sources[2].title`
  - DE: `Freedom in the World 2023: Venezuela`

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

- **missing_en** @ `name`
  - DE: `Vietnam: KI-gestützte Internetzensur und Cybersecurity-Gesetz`
- **missing_en** @ `description`
  - DE: `Vietnam nutzt KI-gestützte Systeme zur automatisierten Zensur des Internets und `
- **missing_en** @ `location.name`
  - DE: `Hanoi, Vietnam`
- **missing_en** @ `actors[0].name`
  - DE: `Vietnamesische Regierung / Ministerium für öffentliche Sicherheit`
- **missing_en** @ `actors[1].name`
  - DE: `Volksarmee Vietnam / Force 47`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Meinungsfreiheit | Pressefreiheit | Informationsfreiheit`
- **missing_en** @ `timeline[0].title`
  - DE: `Force 47: 10.000-Personen-Cybertruppe aktiviert`
- **missing_en** @ `timeline[0].description`
  - DE: `Vietnam offenbart die Existenz von Force 47 — einer 10.000 Personen starken Cybe`
- **missing_en** @ `timeline[1].title`
  - DE: `Cybersecurity-Gesetz: Datenlokalisierung und Zensur`
- **missing_en** @ `timeline[1].description`
  - DE: `Das Cybersecurity-Gesetz tritt in Kraft. Facebook und Google müssen Nutzerdaten `
- **missing_en** @ `timeline[2].title`
  - DE: `Facebook zensiert auf Anweisung Vietnams`
- **missing_en** @ `timeline[2].description`
  - DE: `Facebook bestätigt, dass es regierungskritische Inhalte in Vietnam eingeschränkt`
- **missing_en** @ `timeline[3].title`
  - DE: `Über 150 politische Gefangene wegen Online-Äußerungen`
- **missing_en** @ `timeline[3].description`
  - DE: `Vietnam hält über 150 Menschen wegen Online-Äußerungen in Haft — die höchste Zah`
- **missing_en** @ `sources[0].title`
  - DE: `Vietnam – Press Freedom Index`
- **missing_en** @ `sources[1].title`
  - DE: `Freedom on the Net 2023: Vietnam`

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

- **missing_en** @ `name`
  - DE: `Xinjiang KI-Überwachung`
- **missing_en** @ `description`
  - DE: `Massenüberwachung der uigurischen Bevölkerung in der chinesischen Region Xinjian`
- **missing_en** @ `location.name`
  - DE: `Ürümqi, Xinjiang, China`
- **missing_en** @ `actors[0].name`
  - DE: `Chinesische Regierung`
- **missing_en** @ `actors[1].name`
  - DE: `Huawei`
- **missing_en** @ `actors[2].name`
  - DE: `Hikvision`
- **missing_en** @ `actors[3].name`
  - DE: `Megvii/Face++`
- **missing_en** @ `asm:affectedRights_en`
  - DE: `Religionsfreiheit | Bewegungsfreiheit | Recht auf Privatsphäre`
- **missing_en** @ `timeline[0].title`
  - DE: `Aufbau der Überwachungsinfrastruktur`
- **missing_en** @ `timeline[0].description`
  - DE: `China beginnt mit dem massiven Ausbau der Überwachungsinfrastruktur in Xinjiang.`
- **missing_en** @ `timeline[1].title`
  - DE: `Integrierte gemeinsame Operationsplattform (IJOP)`
- **missing_en** @ `timeline[1].description`
  - DE: `Die Integrierte Gemeinsame Operationsplattform wird eingeführt, die Daten aus Üb`
- **missing_en** @ `timeline[2].title`
  - DE: `Masseninternierung beginnt`
- **missing_en** @ `timeline[2].description`
  - DE: `Auf Grundlage der KI-gestützten Überwachungsdaten werden schätzungsweise ein bis`
- **missing_en** @ `timeline[3].title`
  - DE: `China Cables und internationale Dokumentation`
- **missing_en** @ `timeline[3].description`
  - DE: `Geleakte interne Dokumente (China Cables) belegen systematische Masseninternieru`
- **missing_en** @ `timeline[4].title`
  - DE: `Sanktionen und Völkermord-Einstufung`
- **missing_en** @ `timeline[4].description`
  - DE: `Mehrere westliche Regierungen, darunter die USA, stufen die Behandlung der Uigur`
- **missing_en** @ `sources[0].title`
  - DE: `Chinas Algorithmen der Unterdrückung`
- **missing_en** @ `sources[1].title`
  - DE: `China Cables: Geleakte Dokumente zur Masseninternierung`
- **missing_en** @ `sources[2].title`
  - DE: `Xinjiang: Masseninternierung von Uiguren dokumentiert`

