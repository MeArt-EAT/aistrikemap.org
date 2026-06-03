# Audit: Bilinguale Incident-Migration

Datum: 2026-06-03

## Zusammenfassung

- Geprüfte Dateien: **1306**
- Saubere Dateien (keine Findings): **1300**
- Dateien mit Findings: **6**
- Findings insgesamt: **11**

## Findings nach Kategorie

- `dropped_proper_name`: 10
- `german_leakage_german-word`: 1

## Detail pro Datei

### global-online-creators-monetarisieren-ki-desinformation-zum-iran-krieg-ueber-plattform.json

- **dropped_proper_name** @ `description`
  - DE: `Seit Beginn der US-israelischen Operation 'Epic Fury' gegen `
  - EN: `Since the start of joint US-Israeli 'Operation Epic Fury' ag`
  - missing-name: Midjourney

### libanon-operation-grim-beeper-ki-gestuetzte-lieferketten-sabotage-und-palantir-analyse.json

- **dropped_proper_name** @ `timeline[0].description`
  - DE: `Nach Darstellung ehemaliger Mossad-Agenten lief die Operatio`
  - EN: `According to former Mossad agents the operation ran for year`
  - missing-name: Hisbollah
- **dropped_proper_name** @ `timeline[2].title`
  - DE: `Israelische Doktrin der Lieferketten-Sabotage gegen die Hisb`
  - EN: `Israeli doctrine of supply-chain sabotage against Hezbollah`
  - missing-name: Hisbollah
- **dropped_proper_name** @ `timeline[2].description`
  - DE: `Nach der Eskalation an der Nordgrenze seit Oktober 2023 setz`
  - EN: `After the escalation on the northern border since October 20`
  - missing-name: Hisbollah
- **dropped_proper_name** @ `timeline[3].description`
  - DE: `Am 17. September 2024 gegen 15:30 Uhr beginnen landesweit Pa`
  - EN: `On 17 September 2024 around 3:30 p.m. Hezbollah pagers begin`
  - missing-name: Hisbollah
- **dropped_proper_name** @ `timeline[4].title`
  - DE: `Netanjahu bekennt sich zum Angriff; Eskalation gegen die His`
  - EN: `Netanyahu admits the attack; escalation against Hezbollah's `
  - missing-name: Hisbollah
- **dropped_proper_name** @ `timeline[4].description`
  - DE: `Die Operation gilt als Auftakt einer breiteren israelischen `
  - EN: `The operation is seen as the opening of a broader Israeli of`
  - missing-name: Hisbollah

### ungarn-fidesz-nutzt-ki-wahlvideos-gegen-oppositionsfuehrer-magyar-2026.json

- **german_leakage_german-word** @ `description`
  - DE: `Im Vorfeld der ungarischen Parlamentswahl am 12. April 2026 setzte Viktor Orbans`
  - EN: `In the run-up to Hungary's 12 April 2026 parliamentary election, Viktor Orban's `

### usa-mypillow-anwaelte-sanktioniert-nach-chatgpt-generiertem-klageschriftsatz-mit-fake.json

- **dropped_proper_name** @ `name`
  - DE: `USA: MyPillow-Anwälte sanktioniert nach ChatGPT-generiertem `
  - EN: `USA: MyPillow lawyers sanctioned over AI-generated court fil`
  - missing-name: ChatGPT

### usa-networking-firma-dot-nutzt-ki-stimmenklon-von-marques-brownlee-ohne-einwilligung-2024.json

- **dropped_proper_name** @ `description`
  - DE: `Am 14. Oktober 2024 prangerte der bekannte Tech-Youtuber Mar`
  - EN: `On 14 October 2024 prominent tech YouTuber Marques 'MKBHD' B`
  - missing-name: X

### usa-studie-zeigt-systematisches-ueberschaetzen-eigener-fertigkeiten-durch-generative-ki.json

- **dropped_proper_name** @ `description`
  - DE: `Forschende der Carnegie Mellon University verglichen in eine`
  - EN: `In a 2024 Memory & Cognition paper, Carnegie Mellon research`
  - missing-name: Claude

