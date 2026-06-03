# Audit: Bilinguale Incident-Migration

Datum: 2026-06-03

## Zusammenfassung

- Geprüfte Dateien: **1319**
- Saubere Dateien (keine Findings): **1314**
- Dateien mit Findings: **5**
- Findings insgesamt: **5**

## Findings nach Kategorie

- `dropped_proper_name`: 4
- `german_leakage_german-word`: 1

## Detail pro Datei

### global-online-creators-monetarisieren-ki-desinformation-zum-iran-krieg-ueber-plattform.json

- **dropped_proper_name** @ `description`
  - DE: `Seit Beginn der US-israelischen Operation 'Epic Fury' gegen `
  - EN: `Since the start of joint US-Israeli 'Operation Epic Fury' ag`
  - missing-name: Midjourney

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

