# Dedup-Report Round-1

_Generiert: 2026-06-05T23:42:54.995Z von `scripts/dedup-candidates-round-1.js`_

## Zusammenfassung

- Bestand-Incidents (data/index.json): **2154**
- Kandidaten (data/incident-candidates/*.json): **331**
- Klassifizierungsschwellen: exact-dup ≥ 0.7 · probable-dup ≥ 0.5 · weak-dup ≥ 0.35

| Kategorie | Anzahl Kandidaten |
|---|---:|
| exact-dup | 0 |
| probable-dup | 22 |
| weak-dup (nur Hinweis) | 34 |
| unique (KEEP) | 309 |

Cross-Pair-Statistik:

- Kandidat ↔ Bestand-Paare über Schwelle: **1**
- Kandidat ↔ Kandidat-Paare über Schwelle: **40**

## Exact-Dup-Paare: Kandidat ↔ Bestand (Score ≥ 0.7)

_Keine._

## Probable-Dup-Paare: Kandidat ↔ Bestand (Score 0.5–0.7)

_Keine._

## Exact-Dup-Paare: Kandidat ↔ Kandidat (Score ≥ 0.7)

_Keine._

## Probable-Dup-Paare: Kandidat ↔ Kandidat (Score 0.5–0.7)

| Score | Kandidat A | Kandidat B | Hinweis |
|---:|---|---|---|
| 0.64 | `global-faceapp-ethnicity-filters-prompts-accusations-of-racism-2017-aiaaic1674` | `global-faceapp-hot-filter-skin-whitening-slammed-as-2017-aiaaic1673` | same country (RU), same year (2017) |
| 0.64 | `us-oakland-predictive-2016-aiaaic058` | `us-lapd-predictive-2016-aiaaic057` | same country (US), same year (2016) |
| 0.63 | `us-ibm-dataset-uses-millions-of-online-photos-without-consent-2019-aiaaic1546` | `us-ibm-accused-of-secretly-using-nypd-images-to-train-object-2018-aiaaic0124` | same country (US), same year (2019) |
| 0.61 | `us-study-google-images-lists-barbie-as-top-female-2015-aiaaic1188` | `us-study-google-images-under-represents-female-2015-aiaaic026` | same country (US), same year (2015) |
| 0.57 | `us-tesla-model-3-crashes-into-18-wheeler-truck-kills-2019-aiaaic0297` | `us-tesla-hides-data-about-autopilot-crash-that-killed-florida-2019-aiaaic0218` | same country (US), same year (2019) |
| 0.55 | `de-robot-human-emotional-2018-aiaaic0179` | `de-robot-children-2018-aiaaic0178` | same country (DE), same year (2018) |
| 0.52 | `gb-government-review-concludes-gangs-matrix-is-inaccurate-2017-aiaaic0366` | `gb-uk-information-watchdog-warns-gangs-matrix-potentially-2018-aiaaic0129` | same country (GB), same year (2018) |
| 0.51 | `us-tesla-on-autopilot-rear-ends-fire-truck-kills-2019-aiaaic2011` | `us-tesla-model-3-crashes-into-ford-kills-2019-aiaaic0270` | same country (US), same year (2019) |
| 0.51 | `us-bdd100k-dataset-exposes-drivers-to-surveillance-data-2019-aiaaic1528` | `us-bdd100k-driving-video-2019-aiaaic0594` | same country (US), same year (2018) |
| 0.51 | `us-researchers-reveal-hello-barbie-security-2015-aiaaic1338` | `us-ai-powered-hello-barbie-riles-privacy-2015-aiaaic1337` | same country (US), same year (2015) |
| 0.50 | `us-tesla-model-s-crashes-into-fire-engine-with-autopilot-2018-aiaaic0702` | `us-tesla-on-autopilot-veers-off-highway-into-concrete-barrier-2018-aiaaic0188` | same country (US), same year (2018) |

## Weak-Dup-Paare (Score 0.35–0.5, nur Hinweis)

| Score | Links | Rechts | Typ |
|---:|---|---|---|
| 0.49 | `us-megaface-facial-recognition-dataset-raises-privacy-2019-aiaaic1555` | `us-ibm-accused-of-secretly-using-nypd-images-to-train-object-2018-aiaaic0124` | kandidat |
| 0.49 | `global-faceapp-rapped-for-potential-privacy-security-2017-aiaaic1675` | `global-faceapp-hot-filter-skin-whitening-slammed-as-2017-aiaaic1673` | kandidat |
| 0.48 | `global-faceapp-rapped-for-potential-privacy-security-2017-aiaaic1675` | `global-faceapp-ethnicity-filters-prompts-accusations-of-racism-2017-aiaaic1674` | kandidat |
| 0.48 | `gb-uk-gangs-matrix-database-accused-of-being-not-fit-for-2018-aiaaic0132` | `gb-uk-information-watchdog-warns-gangs-matrix-potentially-2018-aiaaic0129` | kandidat |
| 0.47 | `gb-government-review-concludes-gangs-matrix-is-inaccurate-2017-aiaaic0366` | `gb-uk-gangs-matrix-database-accused-of-being-not-fit-for-2018-aiaaic0132` | kandidat |
| 0.46 | `us-study-google-images-lists-barbie-as-top-female-2015-aiaaic1188` | `us-study-google-images-mis-represents-womens-job-2018-aiaaic0133` | kandidat |
| 0.46 | `us-study-google-images-mis-represents-womens-job-2018-aiaaic0133` | `us-study-google-images-under-represents-female-2015-aiaaic026` | kandidat |
| 0.46 | `us-megaface-facial-recognition-dataset-raises-privacy-2019-aiaaic1555` | `us-ibm-dataset-uses-millions-of-online-photos-without-consent-2019-aiaaic1546` | kandidat |
| 0.45 | `us-ibm-watson-recommends-unsafe-and-incorrect-cancer-2018-aiaaic0159` | `in-ibm-ai-oncology-tool-suggests-unsafe-2017-aiaaic0106` | kandidat |
| 0.45 | `us-apple-face-id-fails-to-distinguish-identical-2017-aiaaic099` | `us-apple-face-id-fails-to-distinguish-2017-aiaaic093` | kandidat |
| 0.45 | `us-facebook-accused-of-helping-advertisers-exclude-older-2017-aiaaic084` | `us-facebook-accused-of-enabling-advertisers-to-target-anti-2017-aiaaic083` | kandidat |
| 0.45 | `us-lapd-predictive-2016-aiaaic057` | `us-lapd-hot-spot-predictive-2016-aiaaic056` | kandidat |
| 0.44 | `us-ai-powered-hello-barbie-riles-privacy-2015-aiaaic1337` | `us-mattel-shelves-aristotle-ai-babyminder-after-privacy-2017-aiaaic0116` | kandidat |
| 0.44 | `gb-government-review-concludes-gangs-matrix-is-inaccurate-2017-aiaaic0366` | `gb-gangs-matrix-data-leak-puts-young-londoners-in-serious-2017-aiaaic0285` | kandidat |
| 0.44 | `ru-moscow-city-police-accused-of-selling-citizen-facial-2019-aiaaic1064` | `ru-russian-sex-workers-targeted-using-2016-aiaaic049` | kandidat |
| 0.43 | `us-us-law-enforcement-able-to-access-facial-photos-of-117-2016-aiaaic0708` | `us-fbi-ice-drivers-photo-facial-2019-aiaaic0252` | kandidat |
| 0.42 | `us-uber-self-driving-car-kills-arizona-2018-aiaaic0187` | `us-uber-self-driving-car-crashes-flips-on-2017-aiaaic0120` | kandidat |
| 0.41 | `gb-google-autocomplete-suggests-jews-women-are-2016-aiaaic1091` | `us-google-autocomplete-related-search-reveal-rape-victims-2018-aiaaic1086` | kandidat |
| 0.41 | `us-tesla-model-3-crashes-into-18-wheeler-truck-kills-2019-aiaaic0297` | `us-tesla-on-autopilot-veers-off-highway-into-concrete-barrier-2018-aiaaic0188` | kandidat |
| 0.39 | `us-tesla-model-s-crashes-into-fire-engine-with-autopilot-2018-aiaaic0702` | `us-tesla-model-3-crashes-into-18-wheeler-truck-kills-2019-aiaaic0297` | kandidat |
| 0.39 | `gb-gangs-matrix-data-leak-puts-young-londoners-in-serious-2017-aiaaic0285` | `gb-uk-information-watchdog-warns-gangs-matrix-potentially-2018-aiaaic0129` | kandidat |
| 0.39 | `us-tesla-hides-data-about-autopilot-crash-that-killed-florida-2019-aiaaic0218` | `us-tesla-on-autopilot-veers-off-highway-into-concrete-barrier-2018-aiaaic0188` | kandidat |
| 0.38 | `gb-addiction-to-social-media-contributed-to-molly-russell-2017-aiaaic1028` | `gb-instagram-exacerbates-eating-disorders-self-2019-aiaaic0216` | kandidat |
| 0.36 | `gb-vgg-face-dataset-used-personal-data-without-explicit-2019-aiaaic1572` | `gb-oxford-town-centre-dataset-flagged-for-violating-pedestrian-2019-aiaaic1558` | kandidat |
| 0.36 | `gb-government-review-concludes-gangs-matrix-is-inaccurate-2017-aiaaic0366` | `gb-kings-cross-quietly-uses-live-facial-recognition-to-monitor-2019-aiaaic0288` | kandidat |
| 0.36 | `us-amazon-rekognition-falsely-links-athletes-to-2019-aiaaic0202` | `us-amazon-rekognition-falsely-matches-28-members-of-2018-aiaaic0137` | kandidat |
| 0.36 | `us-megaface-facial-recognition-dataset-raises-privacy-2019-aiaaic1555` | `us-us-government-research-dataset-raises-privacy-misuse-2019-aiaaic1545` | kandidat |
| 0.36 | `jp-pepper-robot-discovered-to-have-security-2018-aiaaic0680` | `jp-nissei-eco-robot-accused-of-undercutting-buddhist-2017-aiaaic0679` | kandidat |
| 0.35 | `us-chicago-predictive-policing-heat-list-2016-aiaaic055` | `usa-predictive-policing-chicago` | bestand |
| 0.35 | `us-waymo-self-driving-car-hits-public-2016-aiaaic066` | `us-google-delphi-self-driving-cars-in-near-2015-aiaaic038` | kandidat |

## Promote-Empfehlung pro Kandidat

| candidate_id | source_file | klass | action |
|---|---|---|---|
| `ar-google-search-links-natalia-denegri-to-coppola-2016-aiaaic1085` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `ar-guillermo-ibarrolla-facial-recognition-wrongful-2019-aiaaic1143` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `at-dun-and-bradstreet-refuses-to-reveal-austrian-telephone-2019-aiaaic1993` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `au-bunnings-facial-recognition-ruled-to-breach-australians-2018-aiaaic1839` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `au-chinese-research-study-uses-facial-recognition-to-identify-2019-aiaaic0735` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `au-dominos-australia-ai-pizza-checker-plans-met-with-2019-aiaaic0231` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `au-google-autocomplete-links-health-researcher-to-false-2015-aiaaic030` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `au-naplan-writing-test-robo-scoring-rewards-verbose-2017-aiaaic0115` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `au-uber-eats-algorithm-update-slashes-drivers-2019-aiaaic0192` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `au-victoria-schools-student-attendance-facial-recognition-2019-aiaaic0280` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `be-deepfake-donald-trump-calls-for-climate-agreement-2018-aiaaic0391` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `be-google-assistant-recording-2019-aiaaic0224` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `br-brazilian-ai-powered-welfare-app-accused-of-unfairly-2018-aiaaic1962` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `br-eucharist-delivery-drone-sparks-religious-2018-aiaaic0788` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `br-president-balsonaro-chapulin-colorado-2019-aiaaic0242` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `br-sao-paulo-metro-ordered-to-stop-using-platform-door-facial-2018-aiaaic0629` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `ca-cadillac-fairview-discovered-to-be-covertly-using-facial-2018-aiaaic0148` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `ca-driverless-tesla-model-3-negotiates-parking-2019-aiaaic0296` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `ca-jordan-peterson-fake-voice-generator-makes-offensive-2019-aiaaic0283` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `ca-sidewalk-labs-toronto-quayside-smart-city-2019-aiaaic0286` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `ca-toronto-pearson-airport-secretly-tests-facial-recognition-2016-aiaaic0684` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-ai-powered-telemarketing-bots-harangue-chinese-2018-aiaaic0287` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-apple-face-id-unlocked-by-work-2017-aiaaic098` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-athena-chu-deepfake-face-swap-prompts-2019-aiaaic0236` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-beijing-subway-passenger-credit-system-slammed-as-2019-aiaaic0250` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-beijings-ai-powered-pan-china-racial-profiling-2019-aiaaic0257` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-bytedance-accuses-tencent-of-automated-link-2018-aiaaic0646` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-china-bans-people-with-social-credit-offences-from-2019-aiaaic0256` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-china-pharmaceutical-university-student-behavioural-2019-aiaaic0271` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-chinese-ai-criminality-prediction-study-criticised-as-2016-aiaaic061` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-chinese-motorist-fined-for-scratching-his-face-whilst-2019-aiaaic0505` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-chinese-police-facial-recognition-sunglasses-prompt-privacy-2018-aiaaic0165` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-chinese-schools-intelligent-uniform-student-monitoring-2018-aiaaic0181` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-hangzhou-no-11-middle-school-student-2018-aiaaic0180` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-henan-detects-and-tracks-foreign-journalists-students-2019-aiaaic0800` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-hive-box-smart-lockers-hacked-by-primary-school-2019-aiaaic0193` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-iflytek-accused-of-faking-automated-speech-2018-aiaaic0144` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-iflytek-automated-speech-recognition-system-prompts-human-2017-aiaaic0108` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-malfunctioning-robot-impales-chinese-factory-2018-aiaaic0157` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-ningbo-facial-recognition-system-confuses-bus-ad-for-2018-aiaaic0170` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-niulanshan-first-secondary-school-classroom-care-system-2018-aiaaic0272` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-report-wechat-censors-images-in-private-chats-in-real-2019-aiaaic0194` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-sensenets-facial-recognition-data-breach-reveals-beijing-2019-aiaaic0196` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-shenzhen-facial-recognition-catches-shames-2018-aiaaic0162` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-temple-of-heaven-park-public-toilet-facial-recognition-2017-aiaaic0110` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-tesla-model-s-crashes-into-road-sweeper-kills-2016-aiaaic070` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-xiao-pang-robot-goes-haywire-at-technology-2016-aiaaic041` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-xiaobing-babyq-chatbots-criticise-chinese-2017-aiaaic094` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-xinhua-deepfake-news-anchors-stir-scepticism-2018-aiaaic0156` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `cn-zao-face-swapping-app-raises-privacy-fraud-2019-aiaaic0212` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `de-amazon-alexa-holds-2am-party-when-owner-is-2017-aiaaic090` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `de-blessu-2-segensroboter-blessing-robot-religious-2017-aiaaic0259` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `de-hamburg-g20-protest-facial-analysis-2017-aiaaic0952` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `de-people-in-photo-albums-dataset-criticised-for-using-2019-aiaaic1559` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `de-robot-children-2018-aiaaic0178` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-de-robot-human-emotional-2018-aiaaic0179 |
| `de-robot-crushes-and-kills-vw-2015-aiaaic039` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `de-robot-human-emotional-2018-aiaaic0179` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-de-robot-children-2018-aiaaic0178 |
| `dk-researchers-share-personal-details-of-70-000-okcupid-2016-aiaaic0933` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `dk-udbetaling-danmark-welfare-payments-optimisation-system-2016-aiaaic068` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `ee-deepnude-nudification-app-provokes-ethics-privacy-2019-aiaaic0210` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `es-barcelona-robot-brothel-triggers-local-2017-aiaaic0237` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `eu-mep-files-lawsuit-to-release-iborderctrl-lie-detection-2018-aiaaic1450` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `fi-digital-minds-scans-job-applicant-emails-to-assess-cultural-2019-aiaaic0436` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `fr-nice-marseille-schools-suspended-for-facial-recognition-2019-aiaaic0282` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-addiction-to-social-media-contributed-to-molly-russell-2017-aiaaic1028` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `gb-adidas-arsenal-daretocreate-2019-aiaaic0240` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-durham-police-rapped-for-crude-criminal-reoffender-2018-aiaaic0135` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-east-sussex-man-jailed-for-generating-and-distributing-2016-aiaaic2174` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-fabio-retail-robot-fired-after-one-2018-aiaaic0147` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-gangs-matrix-data-leak-puts-young-londoners-in-serious-2017-aiaaic0285` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `gb-google-autocomplete-suggests-jews-women-are-2016-aiaaic1091` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `gb-google-deepmind-royal-free-london-rapped-for-patient-data-2016-aiaaic0105` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-government-review-concludes-gangs-matrix-is-inaccurate-2017-aiaaic0366` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-gb-uk-information-watchdog-warns-gangs-matrix-potentially-2018-aiaaic0129 |
| `gb-home-office-secretly-uses-algorithms-to-process-visa-2019-aiaaic1643` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-hotel-booking-sites-mislead-customers-over-room-2019-aiaaic0191` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-instagram-exacerbates-eating-disorders-self-2019-aiaaic0216` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `gb-keele-university-study-predicts-kids-autism-without-2019-aiaaic0274` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-kings-cross-quietly-uses-live-facial-recognition-to-monitor-2019-aiaaic0288` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `gb-manchester-city-blink-identity-fan-lane-facial-2019-aiaaic0241` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-mark-zuckerberg-spectre-data-sharing-2019-aiaaic0238` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-ocado-robot-charger-malfunctions-370-jobs-2019-aiaaic0677` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-oxford-town-centre-dataset-flagged-for-violating-pedestrian-2019-aiaaic1558` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `gb-tiktok-uk-fined-for-misusing-childrens-2019-aiaaic0622` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-tv-advert-propels-amazon-alexa-to-order-cat-2018-aiaaic0139` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-twins-spoof-hsbc-uk-ai-powered-voice-recognition-2017-aiaaic0119` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-uber-under-fire-for-surge-pricing-after-london-terror-2017-aiaaic0104` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-uk-gangs-matrix-database-accused-of-being-not-fit-for-2018-aiaaic0132` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `gb-uk-home-office-ndas-predictive-2018-aiaaic0167` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-uk-information-watchdog-warns-gangs-matrix-potentially-2018-aiaaic0129` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-gb-government-review-concludes-gangs-matrix-is-inaccurate-2017-aiaaic0366 |
| `gb-uk-passport-check-interprets-lips-as-open-2019-aiaaic0264` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-uk-prisoner-risk-categorisation-algorithm-poses-racism-2019-aiaaic1355` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `gb-vgg-face-dataset-used-personal-data-without-explicit-2019-aiaaic1572` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `global-ai-models-fail-to-predict-2018-world-cup-2018-aiaaic0182` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `global-amazon-alexa-reinforces-female-2019-aiaaic0604` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `global-apple-face-id-hacked-with-3d-2017-aiaaic095` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `global-arab-boy-unlocks-mothers-phone-using-face-2017-aiaaic096` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `global-elite-dangerous-ai-update-causes-spaceships-to-create-2016-aiaaic052` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `global-faceapp-ethnicity-filters-prompts-accusations-of-racism-2017-aiaaic1674` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-global-faceapp-hot-filter-skin-whitening-slammed-as-2017-aiaaic1673 |
| `global-faceapp-hot-filter-skin-whitening-slammed-as-2017-aiaaic1673` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-global-faceapp-ethnicity-filters-prompts-accusations-of-racism-2017-aiaaic1674 |
| `global-faceapp-rapped-for-potential-privacy-security-2017-aiaaic1675` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `global-facebook-admits-it-secretly-listened-to-users-messenger-2019-aiaaic0219` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `global-facebook-negotiation-chatbots-create-secret-2017-aiaaic085` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `global-google-allo-smart-reply-gives-offensive-2017-aiaaic082` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `global-iborderctrl-video-lie-detector-is-branded-2018-aiaaic0446` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `global-president-ali-bongo-health-recovery-video-accused-of-being-2019-aiaaic0233` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `global-study-google-hate-speech-detection-system-tricked-by-2018-aiaaic0130` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `global-study-google-translate-accused-of-being-2017-aiaaic077` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `global-study-wikipedia-bots-engage-in-editing-2017-aiaaic0102` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `global-usd-50m-siphoned-in-the-dao-2016-aiaaic063` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `hk-ai-automated-trades-cost-investor-usd-20-2017-aiaaic0183` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `hk-sophia-robot-saudi-citizenship-prompts-2017-aiaaic092` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `hu-fraudsters-clone-ceo-voice-to-steal-usd-243-2019-aiaaic0227` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `id-automated-flight-stablising-system-caused-lion-air-crash-2018-aiaaic0122` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `il-anyvision-google-ayosh-palestinian-2019-aiaaic0215` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `il-facebook-translates-good-morning-as-attack-2017-aiaaic086` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `il-faception-claim-to-identify-paedophiles-from-their-faces-2016-aiaaic1672` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `il-mobileye-630-pro-tricked-by-drones-2019-aiaaic0293` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `il-video-of-gal-gadot-having-sex-with-stepbrother-exposed-as-2017-aiaaic0155` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `in-aadhaar-glitches-result-in-villagers-2017-aiaaic0253` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `in-ibm-ai-oncology-tool-suggests-unsafe-2017-aiaaic0106` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `in-indian-journalist-rana-ayyub-attacked-with-deepfake-porn-2018-aiaaic0152` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `in-investigation-bjp-app-manipulates-opinion-harasses-2019-aiaaic0814` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `in-robot-mitra-malfunctions-at-india-entrepreneuship-2017-aiaaic091` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `in-samagra-vedika-system-pilot-deprives-citizens-of-2016-aiaaic1311` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `in-skh-metals-worker-killed-by-pre-programmed-robotic-2015-aiaaic035` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `it-allocation-algorithm-wrongly-places-thousands-of-2016-aiaaic0705` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `it-matteo-renzi-off-air-interview-2019-aiaaic0243` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `jp-henn-na-hotel-robot-revolution-fails-as-half-are-laid-2019-aiaaic0189` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `jp-henn-na-hotel-tapia-robots-found-to-have-security-2019-aiaaic0681` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `jp-mindar-humanoid-robot-buddhist-priest-criticised-as-2019-aiaaic0232` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `jp-nissei-eco-robot-accused-of-undercutting-buddhist-2017-aiaaic0679` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `jp-pepper-robot-discovered-to-have-security-2018-aiaaic0680` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `jp-tesla-on-autopilot-kills-kanagawa-2018-aiaaic0591` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `kr-lg-cloi-home-robot-voice-recognition-repeatedly-fails-on-2018-aiaaic0143` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `lk-facebook-accused-of-inciting-violence-against-muslims-in-2018-aiaaic0126` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `lk-muslim-activist-wrongly-accused-of-being-sri-lanka-terror-2019-aiaaic1996` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `my-malaysia-minister-aide-gay-sex-2019-aiaaic0234` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `nl-dutch-probation-algorithm-found-to-be-inaccurate-2018-aiaaic2194` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `nl-jumbo-supermarket-warned-for-indiscriminate-facial-2019-aiaaic0230` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `nz-facebook-fails-to-manage-christchurch-mosque-shooting-2019-aiaaic0217` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `nz-new-zealand-immigration-overstayer-predictions-fuel-racial-2018-aiaaic0628` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `nz-new-zealand-student-passport-application-denied-by-racist-2016-aiaaic060` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `ph-grab-fares-surge-in-the-philippines-under-opaque-2016-aiaaic1681` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `pl-poland-forced-to-scrap-unemployed-worker-profiling-2019-aiaaic0339` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `pl-santo-robot-catholic-priest-accused-of-heresy-2019-aiaaic0789` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `ru-ai-beauty-contest-accused-of-racial-2016-aiaaic048` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `ru-artist-uses-findface-to-identify-st-petersburg-subway-2016-aiaaic1309` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `ru-moscow-city-police-accused-of-selling-citizen-facial-2019-aiaaic1064` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `ru-russian-sex-workers-targeted-using-2016-aiaaic049` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `ru-tesla-model-3-hits-tow-truck-2019-aiaaic0295` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `ru-yandexs-alice-chatbot-supports-wife-beating-2017-aiaaic072` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `se-skelleftea-anderstorp-school-illegally-tracks-students-2019-aiaaic0281` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-ai-powered-hello-barbie-riles-privacy-2015-aiaaic1337` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-us-researchers-reveal-hello-barbie-security-2015-aiaaic1338 |
| `us-ajin-usa-worker-crushed-to-death-by-robotic-2016-aiaaic0112` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-alec-baldwin-donald-trump-deepfake-sparks-disinformation-2018-aiaaic0150` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-amazon-accused-of-promoting-anti-vaccine-2019-aiaaic0207` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-amazon-ai-recruitment-tool-favours-men-over-2018-aiaaic0138` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-amazon-alexa-mistakenly-orders-usd-160-2017-aiaaic089` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-amazon-alexa-mistakes-private-conversation-for-2018-aiaaic0140` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-amazon-alexa-records-childrens-voices-without-2019-aiaaic0235` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-amazon-alexa-responds-to-child-with-pornographic-2016-aiaaic051` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-amazon-buy-box-pricing-algorithm-hides-best-deal-from-2016-aiaaic1581` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-amazon-echo-dot-kids-remembers-kids-2019-aiaaic0205` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-amazon-employees-investors-protest-us-government-2018-aiaaic0136` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-amazon-employees-listen-to-alexa-2019-aiaaic0204` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-amazon-hr-system-automatically-fires-inefficient-warehouse-2017-aiaaic0206` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-amazon-patents-voice-sniffing-personality-profiling-2018-aiaaic0141` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-amazon-project-nessie-automated-price-2019-aiaaic1127` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-amazon-rekognition-falsely-links-athletes-to-2019-aiaaic0202` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-amazon-rekognition-falsely-matches-28-members-of-2018-aiaaic0137` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-amazon-retains-alexa-recordings-transcripts-2019-aiaaic0203` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-amazon-robot-accident-hospitalises-24-2018-aiaaic0146` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-amazon-warehouse-worker-tracking-wristband-prompts-2018-aiaaic088` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-apple-card-accused-of-gender-2019-aiaaic0292` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-apple-face-id-fails-to-distinguish-2017-aiaaic093` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-apple-face-id-fails-to-distinguish-identical-2017-aiaaic099` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-apple-facial-recognition-system-misidentifies-shoplifter-2018-aiaaic0640` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-atlantic-plaza-towers-facial-recognition-plan-blasted-as-2019-aiaaic0267` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-automated-hr-system-mysteriously-fires-software-2018-aiaaic0142` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-automatic-soap-dispenser-fails-to-recognise-black-persons-2017-aiaaic0928` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-bdd100k-dataset-exposes-drivers-to-surveillance-data-2019-aiaaic1528` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-us-bdd100k-driving-video-2019-aiaaic0594 |
| `us-bdd100k-dataset-is-worse-at-spotting-people-with-darker-2019-aiaaic1529` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-bdd100k-driving-video-2019-aiaaic0594` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-us-bdd100k-dataset-exposes-drivers-to-surveillance-data-2019-aiaaic1528 |
| `us-bert-consumes-energy-of-transcontinental-round-trip-flight-2019-aiaaic1223` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-bodega-ai-automated-mom-and-pop-stores-accused-of-cultural-2017-aiaaic0100` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-boston-public-schools-bus-scheduling-algorithm-accused-of-2017-aiaaic0114` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-builder-ai-automated-app-development-exposed-as-relying-on-2019-aiaaic0209` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-caliburger-flippy-robot-fired-after-one-2018-aiaaic0650` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-cambridge-analytica-uses-ai-political-manipulation-to-build-2016-aiaaic0128` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-chicago-predictive-policing-heat-list-2016-aiaaic055` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-christies-portrait-of-edmond-belamy-sale-prompts-2018-aiaaic0153` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-colorado-university-professor-secretly-films-campus-2019-aiaaic1571` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-deepfake-barack-obama-calls-donald-trump-a-total-and-2018-aiaaic0154` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-deepgestalt-rare-genetic-disorder-2019-aiaaic0245` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-doordash-accused-of-deliberately-misleading-tipping-2019-aiaaic0537` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-duke-university-pulls-facial-recognition-dataset-after-2019-aiaaic1536` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-epoch-media-group-pro-trump-disinfo-2019-aiaaic0239` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-eric-loomis-algorithmic-risk-assessment-accused-of-denying-2016-aiaaic059` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-everalbum-covertly-uses-personal-data-to-train-facial-2019-aiaaic0843` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-facebook-accused-of-enabling-advertisers-to-target-anti-2017-aiaaic083` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-facebook-accused-of-helping-advertisers-exclude-older-2017-aiaaic084` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-facebook-accused-of-illegally-letting-housing-ads-exclude-2016-aiaaic042` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-facebook-sued-for-failing-to-protect-content-moderators-2018-aiaaic040` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-facebook-sued-for-tagging-users-faces-without-2015-aiaaic032` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-fbi-ice-drivers-photo-facial-2019-aiaaic0252` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-flawed-ai-algorithms-grade-student-essays-in-multiple-us-2019-aiaaic0284` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-flo-covertly-shares-users-menstrual-cycle-2019-aiaaic0906` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-francisco-arteaga-wrongly-jailed-by-us-police-using-facial-2019-aiaaic1832` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-frigid-farrah-sex-robot-enables-rape-2017-aiaaic0103` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-gaggle-student-behavioural-2019-aiaaic0764` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-gaydar-ai-that-predicts-sexual-orientation-accused-of-poor-2017-aiaaic0113` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-generated-photos-infinite-diversity-face-collection-prompts-2019-aiaaic0289` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-gig-economy-drivers-rejected-by-faulty-checkr-automated-2015-aiaaic0484` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-gis-fined-for-providing-inaccurate-employment-background-2015-aiaaic0853` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-gm-chevrolet-bolt-hits-motorbike-injures-2017-aiaaic0701` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-gm-cruise-fails-to-yield-to-pedestrian-at-2018-aiaaic0186` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-google-adsense-shows-lower-paying-jobs-to-2015-aiaaic027` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-google-autocomplete-amplifies-texas-massacre-shooter-antifa-2017-aiaaic1090` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-google-autocomplete-related-search-reveal-rape-victims-2018-aiaaic1086` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-google-delphi-self-driving-cars-in-near-2015-aiaaic038` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-google-duplex-accused-of-being-deceitful-and-2018-aiaaic0134` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-google-hate-detection-ai-mistakes-bullying-for-2017-aiaaic081` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-google-hate-speech-detection-system-accused-of-racial-2019-aiaaic0226` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-google-home-mini-speaker-is-caught-2017-aiaaic078` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-google-photos-assistant-ski-panorama-2018-aiaaic0131` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-google-photos-mislabels-black-americans-as-2015-aiaaic029` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-google-pixel-4-facial-recognition-2019-aiaaic0223` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-google-project-maven-drone-2018-aiaaic0174` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-google-search-prioritises-holocaust-denial-2016-aiaaic047` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-google-sentiment-analyser-thinks-being-gay-is-2017-aiaaic080` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-google-three-black-teenagers-mugshot-2016-aiaaic046` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-google-twitter-let-advertisers-target-people-using-racist-2017-aiaaic076` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-google-university-of-chicago-predictive-medical-assessment-2019-aiaaic0246` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-guns-disguised-as-cases-for-sale-on-facebook-2019-aiaaic0707` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-houston-isd-automated-teacher-evaluation-system-slammed-as-2017-aiaaic0111` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-ibm-accused-of-secretly-using-nypd-images-to-train-object-2018-aiaaic0124` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-us-ibm-dataset-uses-millions-of-online-photos-without-consent-2019-aiaaic1546 |
| `us-ibm-dataset-uses-millions-of-online-photos-without-consent-2019-aiaaic1546` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-us-ibm-accused-of-secretly-using-nypd-images-to-train-object-2018-aiaaic0124 |
| `us-ibm-watson-recommends-unsafe-and-incorrect-cancer-2018-aiaaic0159` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-insurers-accused-of-charging-drivers-in-minority-areas-30-2017-aiaaic0118` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-ji-chang-son-tesla-model-x-suddenly-accelerates-injuring-2016-aiaaic0555` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-judge-overturns-shooting-conviction-citing-shotspotter-2016-aiaaic1359` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-kiwibot-food-delivery-robot-catches-2018-aiaaic0175` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-knightscope-k5-security-robot-drowns-in-2017-aiaaic0117` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-knightscope-k5-security-robot-hits-2016-aiaaic062` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-knightscope-security-robot-ignores-woman-reporting-2019-aiaaic0260` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-lapd-hot-spot-predictive-2016-aiaaic056` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-lapd-predictive-2016-aiaaic057` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-us-oakland-predictive-2016-aiaaic058 |
| `us-las-vegas-self-driving-shuttle-bus-2017-aiaaic0121` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-linkedin-political-2019-aiaaic0251` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-linkedin-search-engine-found-to-favour-mens-2016-aiaaic044` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-lllinois-ends-unreliable-child-abuse-predictive-2017-aiaaic1352` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-lovo-accused-of-stealing-voice-over-artists-2019-aiaaic2046` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-lyft-background-check-fails-to-flag-man-convicted-of-aiding-2017-aiaaic1347` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-magic-city-films-james-dean-2019-aiaaic0244` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-makeapp-makeup-remover-accused-of-gender-2017-aiaaic071` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-mattel-shelves-aristotle-ai-babyminder-after-privacy-2017-aiaaic0116` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-medical-robot-tells-man-he-is-2019-aiaaic0249` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-megaface-facial-recognition-dataset-raises-privacy-2019-aiaaic1555` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-microsoft-tay-chatbot-generates-offensive-2016-aiaaic045` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-mit-scientists-psychopathic-ai-paints-dark-2018-aiaaic0176` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-ms-celeb-1m-facial-recognition-database-criticised-for-2019-aiaaic1556` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-native-americans-are-shut-out-of-us-liver-transplant-2018-aiaaic1383` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-new-orleans-predictive-2018-aiaaic0171` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-nypd-video-surveillance-skin-type-2018-aiaaic0168` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-oakland-predictive-2016-aiaaic058` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-us-lapd-predictive-2016-aiaaic057 |
| `us-okcupid-shares-users-facial-details-with-2019-aiaaic0934` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-outback-steakhouse-employee-performance-tracking-seen-to-2019-aiaaic0190` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-phone-case-design-bot-goes-rogue-offering-thousands-of-2017-aiaaic0101` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-pokemon-go-accused-of-redlining-coloured-poor-2016-aiaaic043` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-police-use-of-robot-to-kill-dallas-shooting-suspect-prompts-2016-aiaaic054` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-portrait-ars-generator-whitens-coloured-peoples-2019-aiaaic0278` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-predictim-babysitter-personality-2018-aiaaic0145` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-princeton-review-charges-asian-americans-more-for-sat-2015-aiaaic2249` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-project-nightingale-patient-data-sharing-slammed-for-2019-aiaaic0247` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-reddit-replaces-opaque-shadowbanning-system-with-account-2015-aiaaic0667` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-republican-congressmen-twitter-2018-aiaaic0354` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-researchers-dispute-openais-claim-that-robot-solved-rubiks-2019-aiaaic0198` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-researchers-reveal-hello-barbie-security-2015-aiaaic1338` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-us-ai-powered-hello-barbie-riles-privacy-2015-aiaaic1337 |
| `us-rikers-island-prisoner-risk-classification-system-increases-2019-aiaaic0534` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-robert-williams-facial-recognition-wrongful-2018-aiaaic0420` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-robot-crushes-and-kills-ventra-ionia-2015-aiaaic0151` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-roomba-hoovers-customers-home-mapping-2017-aiaaic0694` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-sec-charges-american-bitcoin-academy-with-ai-powered-2018-aiaaic1328` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-snapchat-algorithm-recommends-teen-connects-with-sex-2019-aiaaic1349` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-starship-robots-impede-wheelchair-2019-aiaaic1659` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-student-uses-gpt-2-to-dupe-2019-aiaaic0512` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-study-blacks-face-longer-wait-times-on-lyft-2018-aiaaic0123` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-study-facial-recognition-software-misidentifies-dark-2018-aiaaic0125` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-study-finds-amazon-rekognition-suffers-from-racial-and-2019-aiaaic0201` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-study-google-images-lists-barbie-as-top-female-2015-aiaaic1188` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-us-study-google-images-under-represents-female-2015-aiaaic026 |
| `us-study-google-images-mis-represents-womens-job-2018-aiaaic0133` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-study-google-images-under-represents-female-2015-aiaaic026` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-us-study-google-images-lists-barbie-as-top-female-2015-aiaaic1188 |
| `us-study-robotic-surgery-responsible-for-144-deaths-1-000-2015-aiaaic036` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-study-unitedhealth-follow-up-care-algorithm-is-racially-2019-aiaaic0248` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-study-us-mortgage-algorithms-perpetuate-racial-bias-in-2018-aiaaic0161` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-study-virginia-algorithm-increases-criminal-sentences-for-2019-aiaaic1640` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-taylor-swift-uses-facial-recognition-to-detect-2018-aiaaic1126` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-tesla-hides-data-about-autopilot-crash-that-killed-florida-2019-aiaaic0218` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-us-tesla-model-3-crashes-into-18-wheeler-truck-kills-2019-aiaaic0297 |
| `us-tesla-model-3-crashes-into-18-wheeler-truck-kills-2019-aiaaic0297` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-us-tesla-hides-data-about-autopilot-crash-that-killed-florida-2019-aiaaic0218 |
| `us-tesla-model-3-crashes-into-ford-kills-2019-aiaaic0270` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-us-tesla-on-autopilot-rear-ends-fire-truck-kills-2019-aiaaic2011 |
| `us-tesla-model-s-collides-with-tractor-trailor-kills-2016-aiaaic069` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-tesla-model-s-crashes-into-fire-engine-with-autopilot-2018-aiaaic0702` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-us-tesla-on-autopilot-veers-off-highway-into-concrete-barrier-2018-aiaaic0188 |
| `us-tesla-model-s-remotely-controlled-by-2016-aiaaic067` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-tesla-model-s-runs-red-light-kills-2019-aiaaic0290` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-tesla-model-s-tricked-into-veering-into-wrong-2019-aiaaic0294` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-tesla-on-autopilot-rear-ends-fire-truck-kills-2019-aiaaic2011` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-us-tesla-model-3-crashes-into-ford-kills-2019-aiaaic0270 |
| `us-tesla-on-autopilot-veers-off-highway-into-concrete-barrier-2018-aiaaic0188` | aiaaic-batch-c-2015-2019-round-6.json | probable-dup | MERGE-WITH-us-tesla-model-s-crashes-into-fire-engine-with-autopilot-2018-aiaaic0702 |
| `us-titus-henderson-compas-parole-2015-aiaaic0962` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-uber-compensation-algorithm-pays-new-hires-2017-aiaaic0565` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-uber-id-algorithm-suspends-transgender-2018-aiaaic0164` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-uber-self-driving-car-crashes-flips-on-2017-aiaaic0120` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-uber-self-driving-car-kills-arizona-2018-aiaaic0187` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-uber-self-driving-car-runs-red-light-in-san-2016-aiaaic065` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-uber-surge-pricing-criticised-as-people-flee-hurricane-2017-aiaaic1710` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-unfair-instacart-personal-shopper-pay-algorithm-sparks-2018-aiaaic0214` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-us-government-research-dataset-raises-privacy-misuse-2019-aiaaic1545` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-us-law-enforcement-able-to-access-facial-photos-of-117-2016-aiaaic0708` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-violent-spoof-peppa-pig-videos-bypass-youtube-2017-aiaaic0109` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-walmart-ai-anti-shoplifting-system-accuracy-2019-aiaaic0228` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-waymo-self-driving-car-hits-public-2016-aiaaic066` | aiaaic-batch-c-2015-2019-round-6.json | weak-dup | KEEP |
| `us-waze-directs-tourists-to-drive-into-vermont-2018-aiaaic0500` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-waze-google-maps-direct-users-into-san-francisco-2017-aiaaic079` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-wells-fargo-software-error-leads-to-hundreds-of-wrongful-2015-aiaaic0185` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-youtube-autocomplete-suggests-paedophiliac-2017-aiaaic074` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-youtube-kids-accused-of-recommending-adult-content-2015-aiaaic033` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-youtube-lgbtq-2019-aiaaic0222` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-youtube-paedophilia-2019-aiaaic0220` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-youtube-recommendation-algorithm-2019-aiaaic0221` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `us-youtube-slammed-for-amplifying-las-vegas-shooting-fake-2017-aiaaic073` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `za-vumacam-accused-of-driving-ai-powered-2018-aiaaic1713` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |
| `zw-zimbabwe-cloudwalk-facial-recognition-deal-riles-rights-2019-aiaaic0255` | aiaaic-batch-c-2015-2019-round-6.json | — | KEEP |

---

_Schwellen, Tokenisierung und Boosts siehe Header dieses Reports + `scripts/dedup-candidates-round-1.js`._