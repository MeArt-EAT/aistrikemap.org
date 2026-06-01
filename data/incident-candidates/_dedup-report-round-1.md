# Dedup-Report Round-1

_Generiert: 2026-06-01T09:12:03.092Z von `scripts/dedup-candidates-round-1.js`_

## Zusammenfassung

- Bestand-Incidents (data/index.json): **274**
- Kandidaten (data/incident-candidates/*.json): **111**
- Klassifizierungsschwellen: exact-dup ≥ 0.7 · probable-dup ≥ 0.5 · weak-dup ≥ 0.35

| Kategorie | Anzahl Kandidaten |
|---|---:|
| exact-dup | 0 |
| probable-dup | 0 |
| weak-dup (nur Hinweis) | 12 |
| unique (KEEP) | 111 |

Cross-Pair-Statistik:

- Kandidat ↔ Bestand-Paare über Schwelle: **0**
- Kandidat ↔ Kandidat-Paare über Schwelle: **6**

## Exact-Dup-Paare: Kandidat ↔ Bestand (Score ≥ 0.7)

_Keine._

## Probable-Dup-Paare: Kandidat ↔ Bestand (Score 0.5–0.7)

_Keine._

## Exact-Dup-Paare: Kandidat ↔ Kandidat (Score ≥ 0.7)

_Keine._

## Probable-Dup-Paare: Kandidat ↔ Kandidat (Score 0.5–0.7)

_Keine._

## Weak-Dup-Paare (Score 0.35–0.5, nur Hinweis)

| Score | Links | Rechts | Typ |
|---:|---|---|---|
| 0.48 | `usa-bartz-anthropic-copyright-settlement-2025` | `usa-reddit-anthropic-scraping-2025` | kandidat |
| 0.47 | `italien-deepseek-garante-blockierung-2025` | `italien-replika-garante-fine-2025` | kandidat |
| 0.47 | `usa-detroit-porcha-woodruff-frt-policy-2024` | `usa-quran-reid-louisiana-frt-arrest-2023` | kandidat |
| 0.45 | `brazil-sao-paulo-smart-sampa-2024` | `brazil-bahia-feira-de-santana-facial-recognition-carnival` | kandidat |
| 0.41 | `israel-corsight-gaza-facial-recognition-2024` | `israel-ghf-biometric-aid-gaza-2025` | kandidat |
| 0.39 | `usa-tesla-fsd-nhtsa-engineering-analysis-2024` | `usa-tesla-robotaxi-austin-launch-incidents-2025` | kandidat |

## Promote-Empfehlung pro Kandidat

| candidate_id | source_file | klass | action |
|---|---|---|---|
| `aethiopien-amhara-internet-shutdown-2023-2024` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `aethiopien-meta-tigray-hassrede-klage-2025` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `drc-ki-desinformation-m23-konflikt-2024` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `kenia-ruto-finance-bill-deepfake-ueberwachung-2024` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `kenia-sama-meta-content-moderation-klage-berufung-2024` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `kenia-uber-bolt-algorithmus-tawu-petition-2025` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `kenia-worldcoin-high-court-verbot-2025` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `mosambik-internet-shutdown-wahl-protest-2024` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `nigeria-atiku-deepfake-audio-wahl-2023` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `nigeria-cybercrime-amendment-act-journalisten-2024` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `nigeria-nimc-nin-biometric-datenleak-2024` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `sambia-cyber-security-act-massenueberwachung-2024` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `senegal-deepfake-frauen-kandidatinnen-russland-disinfo-2024` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `sudan-rsf-ki-deepfake-burhan-bashir-2023-2024` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `suedafrika-sassa-srd-grant-algorithmus-ausschluss-2024` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `suedafrika-shopping-mall-facial-recognition-lrc-2024` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `suedafrika-trump-zuma-mk-deepfake-wahl-2024` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `suedafrika-vumacam-anpr-johannesburg-cctv-rechtsstreit-2024` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `suedsudan-tiktok-facebook-shutdown-2025` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `tansania-internet-shutdown-wahl-2025` | africa-2023-2025-round-1-agent-c.json | — | KEEP |
| `australien-ai-traffic-cameras-nsw-2024-fehlfines` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `bangladesch-internet-shutdown-juli-2024-aufstand-tote` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `cambodia-myanmar-scam-compounds-ki-deepfake-2025-amnesty` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `china-deepseek-zensur-tiananmen-xi-2025-us-test` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `china-ki-kennzeichnungspflicht-cac-gb-45438-2025` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `china-meituan-algorithmus-tod-rider-2024-gig` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `hongkong-smartview-7000-cctv-gesichtserkennung-2024` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `indien-eci-bjp-amit-shah-deepfake-2024-shakti-whatsapp` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `indien-hyderabad-amnesty-ban-the-scan-cmd-control-2024` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `indien-poshan-tracker-gesichtserkennung-rationen-2025` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `japan-line-naver-datenleck-2023-2024-tokio-direktive` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `myanmar-psms-50000-dissidenten-huawei-2025` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `neuseeland-msd-ki-sozialhilfe-amendment-2026-maori` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `pakistan-firewall-china-dpi-2024-lims-wahlen` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `philippinen-ntf-elcac-facebook-red-tagging-ki-2024` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `sri-lanka-online-safety-act-2024-osc-presse` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `suedkorea-deepfake-telegram-nth-room-2024-universitaeten` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `suedkorea-yoon-kriegsrecht-deepfake-verwirrung-dezember-2024` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `taiwan-china-deepfake-wahl-2024-msmtv-tsai-lai-ko` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `vietnam-telegram-blockade-decree-147-mai-2025` | asia-pacific-2024-2025-round-1-agent-e.json | — | KEEP |
| `daenemark-udk-coded-injustice-welfare-algorithmus-2024` | eu-2024-2025-round-1-agent-d.json | — | KEEP |
| `frankreich-cnaf-scoring-conseil-detat-2024` | eu-2024-2025-round-1-agent-d.json | — | KEEP |
| `frontex-heron-drohnen-mediterranean-pullback-2024` | eu-2024-2025-round-1-agent-d.json | — | KEEP |
| `germany-isd-ai-disinformation-bundestagswahl-2025` | eu-2024-2025-round-1-agent-d.json | — | KEEP |
| `griechenland-centaur-hyperion-asyl-ueberwachung-fine-2024` | eu-2024-2025-round-1-agent-d.json | — | KEEP |
| `irland-dpc-meta-ai-eu-trainingsdaten-2024` | eu-2024-2025-round-1-agent-d.json | — | KEEP |
| `irland-dpc-x-grok-eu-trainingsdaten-2024` | eu-2024-2025-round-1-agent-d.json | — | KEEP |
| `italien-deepseek-garante-blockierung-2025` | eu-2024-2025-round-1-agent-d.json | weak-dup | KEEP |
| `italien-replika-garante-fine-2025` | eu-2024-2025-round-1-agent-d.json | weak-dup | KEEP |
| `niederlande-duo-studienbeihilfe-ethnic-profiling-2024` | eu-2024-2025-round-1-agent-d.json | — | KEEP |
| `poland-pl-belarus-grenze-ai-surveillance-2024` | eu-2024-2025-round-1-agent-d.json | — | KEEP |
| `portugal-worldcoin-iris-scan-suspendierung-2024` | eu-2024-2025-round-1-agent-d.json | — | KEEP |
| `schweden-foersaekringskassan-suspicion-machine-2024` | eu-2024-2025-round-1-agent-d.json | — | KEEP |
| `spanien-bosco-civio-algorithmus-court-2024` | eu-2024-2025-round-1-agent-d.json | — | KEEP |
| `spanien-worldcoin-aepd-iris-sperre-2024` | eu-2024-2025-round-1-agent-d.json | — | KEEP |
| `uk-home-office-ipic-immigration-ai-2024` | eu-2024-2025-round-1-agent-d.json | — | KEEP |
| `argentina-buenos-aires-srfp-unconstitutional-2023` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `argentina-bullrich-uiaas-ai-security-unit-2024` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `argentina-mar-del-plata-live-facial-recognition-2024` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `argentina-milei-massa-deepfake-election-2023` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `argentina-salta-microsoft-teen-pregnancy-prediction` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `brazil-bahia-feira-de-santana-facial-recognition-carnival` | latam-2023-2025-round-1-agent-a.json | weak-dup | KEEP |
| `brazil-cortex-license-plate-mass-surveillance` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `brazil-rio-facial-recognition-wrongful-arrests-2019-2024` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `brazil-sao-paulo-smart-sampa-2024` | latam-2023-2025-round-1-agent-a.json | weak-dup | KEEP |
| `brazil-tse-deepfake-regulation-municipal-elections-2024` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `chile-sistema-alerta-ninez-predictive-child-risk` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `chile-sitia-televigilancia-ai-2024` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `colombia-icbf-rights-violation-probability-model` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `colombia-pretoria-constitutional-court-ai-judges-2024` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `ecuador-ecu911-china-surveillance-system` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `mexico-curp-mandatory-biometric-2025` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `mexico-sheinbaum-deepfake-financial-scam-2024` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `peru-reniec-dnie-biometric-strike-2024` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `venezuela-maduro-ai-digital-jail-2024` | latam-2023-2025-round-1-agent-a.json | — | KEEP |
| `egypt-predator-tantawi-2024` | mena-2024-2025-round-1-agent-b.json | — | KEEP |
| `iran-internet-blackout-protest-2025-2026` | mena-2024-2025-round-1-agent-b.json | — | KEEP |
| `iran-noor-plan-hijab-ai-2024` | mena-2024-2025-round-1-agent-b.json | — | KEEP |
| `iraq-social-media-surveillance-2024` | mena-2024-2025-round-1-agent-b.json | — | KEEP |
| `israel-corsight-gaza-facial-recognition-2024` | mena-2024-2025-round-1-agent-b.json | weak-dup | KEEP |
| `israel-ghf-biometric-aid-gaza-2025` | mena-2024-2025-round-1-agent-b.json | weak-dup | KEEP |
| `israel-unit8200-arabic-chatgpt-2024` | mena-2024-2025-round-1-agent-b.json | — | KEEP |
| `israel-wheres-daddy-gaza-2024` | mena-2024-2025-round-1-agent-b.json | — | KEEP |
| `jordan-pegasus-access-now-2024-expansion` | mena-2024-2025-round-1-agent-b.json | — | KEEP |
| `lebanon-grim-beeper-palantir-2024` | mena-2024-2025-round-1-agent-b.json | — | KEEP |
| `morocco-pegasus-ongoing-2024` | mena-2024-2025-round-1-agent-b.json | — | KEEP |
| `nso-meta-whatsapp-verdict-2025` | mena-2024-2025-round-1-agent-b.json | — | KEEP |
| `saudi-arabia-yahya-assiri-uk-court-2024` | mena-2024-2025-round-1-agent-b.json | — | KEEP |
| `syria-assad-documents-surveillance-2024` | mena-2024-2025-round-1-agent-b.json | — | KEEP |
| `tunisia-decree-54-surveillance-2024` | mena-2024-2025-round-1-agent-b.json | — | KEEP |
| `turkey-imamoglu-deepfake-2024` | mena-2024-2025-round-1-agent-b.json | — | KEEP |
| `uae-microsoft-g42-investment-2024` | mena-2024-2025-round-1-agent-b.json | — | KEEP |
| `kanada-clearview-ai-alberta-kbb-2025` | us-canada-2024-2025-round-1-agent-f.json | — | KEEP |
| `usa-allstate-arity-texas-driver-data-2025` | us-canada-2024-2025-round-1-agent-f.json | — | KEEP |
| `usa-amazon-just-walk-out-india-workers-2024` | us-canada-2024-2025-round-1-agent-f.json | — | KEEP |
| `usa-bartz-anthropic-copyright-settlement-2025` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-detroit-porcha-woodruff-frt-policy-2024` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-disney-universal-midjourney-copyright-2025` | us-canada-2024-2025-round-1-agent-f.json | — | KEEP |
| `usa-eiswert-pikesville-ai-voice-deepfake-2024` | us-canada-2024-2025-round-1-agent-f.json | — | KEEP |
| `usa-itutorgroup-eeoc-age-ai-settlement-2023-2024` | us-canada-2024-2025-round-1-agent-f.json | — | KEEP |
| `usa-mcdonalds-paradox-mchire-olivia-leak-2025` | us-canada-2024-2025-round-1-agent-f.json | — | KEEP |
| `usa-mobley-workday-adea-collective-2025` | us-canada-2024-2025-round-1-agent-f.json | — | KEEP |
| `usa-pasco-county-predictive-policing-settlement-2024` | us-canada-2024-2025-round-1-agent-f.json | — | KEEP |
| `usa-pelkey-ai-victim-impact-statement-arizona-2025` | us-canada-2024-2025-round-1-agent-f.json | — | KEEP |
| `usa-perplexity-ai-wsj-nytimes-copyright-2024` | us-canada-2024-2025-round-1-agent-f.json | — | KEEP |
| `usa-quran-reid-louisiana-frt-arrest-2023` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-reddit-anthropic-scraping-2025` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-scale-surge-ai-tasker-misclassification-2024` | us-canada-2024-2025-round-1-agent-f.json | — | KEEP |
| `usa-tesla-fsd-nhtsa-engineering-analysis-2024` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-tesla-robotaxi-austin-launch-incidents-2025` | us-canada-2024-2025-round-1-agent-f.json | weak-dup | KEEP |
| `usa-thomson-reuters-ross-intelligence-fair-use-2025` | us-canada-2024-2025-round-1-agent-f.json | — | KEEP |

---

_Schwellen, Tokenisierung und Boosts siehe Header dieses Reports + `scripts/dedup-candidates-round-1.js`._