# Datums-QA Report - Round-6 AIAAIC Batch B

**Datum:** 2026-06-06 · **Methode:** Pro Record WebSearch-Verifikation des *dokumentierten Ereignisses* (Klage/Urteil/Report/Exposure), nicht des KI-System-Jahres. Korrektur nur bei Beleg.

## Zusammenfassung

- Geprüfte Records (verified + needs-review): **975**
- Belegte Datums-Korrekturen gesamt: **41** (von 975 = 4%)
- Davon **27 in `data/incidents/` angewendet** (working tree, uncommitted) + Bundle `all-incidents.json` regeneriert
- Davon **14 offen** (Status needs-review, NICHT promoted; bei künftiger Promotion anzuwenden -> `_date-qa-pending-corrections.json`)

> **Wichtig:** Die Enrichment-Pipeline hat Batch B *während* des QA-Laufs promotet und committet (Commit `59bca35`, 1304 -> 2154 Incidents). Die Korrekturen wurden danach auf die bereits promoteten Incident-Dateien angewendet. Nichts wurde von Claude committet oder gepusht.

## Angewendet auf data/incidents (27)

| Incident-Datei | alt -> neu | Typ | Beleg |
|---|---|---|---|
| `usa-metas-automatisierte-werbesysteme-sollen-milliardenfachen-betrug-ermoeglicht-haben.json` | 2021 -> 2026 | Jahr | https://news.santaclaracounty.gov/county-counsel-files-landmark-civil-prosecution-taking-metas-role-massive-consumer-fraud |
| `usa-instacart-setzte-ki-ein-um-fuer-identische-produkte-unterschiedliche-preise-zu.json` | 2022 -> 2025 | Jahr | https://www.cnbc.com/2025/12/22/instacart-ai-pricing-tests-increased-costs.html |
| `usa-hrt-transgender-datensatz-nutzt-youtuber-daten-ohne-einwilligung-2017.json` | 2017 -> 2022 | Jahr | https://www.vice.com/en/article/facial-recognition-researcher-left-a-trans-database-exposed-for-years-after-using-images-without-permission/ |
| `usa-gesicht-einer-studentin-taylor-klein-in-deepfake-pornos-eingesetzt-2023.json` | 2023-03 -> 2020 | Jahr | https://en.wikipedia.org/wiki/Another_Body |
| `usa-facebook-algorithmus-belohnte-wut-reaktionen-und-verstaerkte-toxische-inhalte-2018.json` | 2018 -> 2017 | Jahr | https://www.washingtonpost.com/technology/2021/10/26/facebook-angry-emoji-algorithm/ |
| `usa-christopher-gatlin-nach-fehlerhaftem-gesichtserkennungs-treffer-17-monate-inhaftiert.json` | 2022-04 -> 2021-08 | Jahr | https://www.washingtonpost.com/business/interactive/2025/police-artificial-intelligence-facial-recognition/ |
| `usa-anthropic-legt-ki-urheberrechtsklage-von-autor-innen-fuer-1-5-milliarden-dollar-bei.json` | 2022 -> 2025 | Jahr | https://www.npr.org/2025/09/05/nx-s1-5529404/anthropic-settlement-authors-copyright-ai |
| `usa-abgestuerzte-amazon-lieferdrohne-loest-feld-brand-aus-2022.json` | 2022-06 -> 2021-06 | Jahr | https://dronedj.com/2022/03/25/amazon-delivery-drone-crash-oregon/ |
| `suedkorea-ai-yoon-deepfake-avatar-im-praesidentschaftswahlkampf-2022.json` | 2022-01 -> 2021-12 | Jahr | https://www.france24.com/en/live-news/20220214-deepfake-democracy-south-korean-candidate-goes-virtual-for-votes |
| `china-pla-nahe-forschende-entwickeln-militaer-chatbot-chatbit-auf-basis-von-metas-llama.json` | 2023 -> 2024-06 | Jahr | https://www.cnbc.com/2024/11/01/chinese-researchers-build-ai-model-for-military-use-on-back-of-metas-llama.html |
| `belgien-deepfake-anzeigen-lockten-tausende-in-700-mio-euro-krypto-betrug-2022.json` | 2022 -> 2025 | Jahr | https://www.europol.europa.eu/media-press/newsroom/news/international-takedown-of-cryptocurrency-fraud-network-laundering-over-eur-700-million |
| `australien-nordkorea-schleust-mit-ki-und-deepfakes-verdeckt-it-arbeiter-in-westliche-tech.json` | 2022 -> 2025 | Jahr | https://www.microsoft.com/en-us/security/blog/2025/06/30/jasper-sleet-north-korean-remote-it-workers-evolving-tactics-to-infiltrate-organizations/ |
| `usa-videospiel-sprecher-mit-geklonten-ki-stimmen-angegriffen-2023.json` | 2023 -> 2023-01 | Monat/Tag | https://www.vice.com/en/article/voice-actors-doxed-with-ai-voices-on-twitter/ |
| `usa-moviepass-will-zuschauer-per-gesichtserkennung-und-eye-tracking-ueberwachen-2022.json` | 2022-03 -> 2022-02 | Monat/Tag | https://www.newsinentertainment.com/articles/2022/02/11/moviepass-announces-relaunch-details-including-software-that-watches-you-watch-ads |
| `usa-ki-tools-wie-chatgpt-befeuern-content-farmen-und-fake-news-seiten-2023.json` | 2023-04 -> 2023-05 | Monat/Tag | https://www.newsguardtech.com/special-reports/newsbots-ai-generated-news-websites-proliferating/ |
| `usa-ki-plattform-civitai-generierte-missbrauchsdarstellungen-von-kindern-2023.json` | 2023-11 -> 2023-12 | Monat/Tag | https://www.404media.co/a16z-funded-ai-platform-generated-images-that-could-be-categorized-as-child-pornography-leaked-documents-show/ |
| `usa-googles-goemotions-datensatz-wegen-fehlannotationen-kritisiert-2022.json` | 2022 -> 2022-04 | Monat/Tag | https://surgehq.ai/blog/30-percent-of-googles-reddit-emotions-dataset-is-mislabeled |
| `usa-anwaelte-sanktioniert-nach-erfundenen-chatgpt-urteilen-mata-v-avianca-2023.json` | 2023-05 -> 2023-06 | Monat/Tag | https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc. |
| `usa-alonzo-sawyer-durch-fehlerhafte-gesichtserkennung-zu-unrecht-inhaftiert-2022.json` | 2022 -> 2022-03 | Monat/Tag | https://www.levelman.com/another-black-man-falsely-accused-thanks-to-facial-recognition-technology/ |
| `uk-sammelklage-wirft-amazon-ueberteuerung-von-verbraucher-innen-um-ueber-1-mrd-gbp-vor.json` | 2023 -> 2023-06 | Monat/Tag | https://charleslyndon.com/cases/buyboxclaim/ |
| `polen-grundschule-wegen-fingerabdruck-scans-in-der-mensa-abgemahnt-und-bestraft-2020.json` | 2020-01 -> 2020-02 | Monat/Tag | https://www.edpb.europa.eu/news/national-news/2020/fine-processing-students-fingerprints-imposed-school_en |
| `libanon-mtv-deepfakes-getoeteter-explosionsopfer-loesen-empoerung-aus-2021.json` | 2021-08 -> 2021-07 | Monat/Tag | https://www.arabnews.com/node/1901606/media |
| `kanada-steuerbehoerden-chatbot-charlie-gab-in-zwei-dritteln-der-tests-falsche-auskuenfte.json` | 2020-03 -> 2020-02 | Monat/Tag | https://incidentdatabase.ai/cite/1310/ |
| `indien-hyderabads-polizei-zwang-aktivist-zur-maskenabnahme-fuer-gesichtsscan-2021.json` | 2021-03 -> 2021-05 | Monat/Tag | https://therecord.media/meet-the-man-who-sued-an-indian-state-over-facial-recognition-technology |
| `deutschland-hassinhalte-in-laion-datensaetzen-steigen-mit-datensatzgroesse-um-12-prozent.json` | 2023 -> 2023-06 | Monat/Tag | https://arxiv.org/abs/2306.13141 |
| `belgien-midjourney-reproduziert-rassistische-stereotype-zeigt-kaum-schwarze-aerzte-mit.json` | 2023-10 -> 2023-08 | Monat/Tag | https://pubmed.ncbi.nlm.nih.gov/37572687/ |
| `australien-snapchats-my-ai-gibt-vermeintlich-13-jaehriger-bedenkliche-ratschlaege-2023.json` | 2023 -> 2023-03 | Monat/Tag | https://www.foxnews.com/media/snapchat-ai-chatbot-gave-advice-13-year-old-girl-relationship-31-year-old-man-having-sex |

## Offen - needs-review, nicht promoted (14)

| candidate_id | alt -> neu | Typ | Beleg |
|---|---|---|---|
| `us-amazon-data-centre-linked-to-rare-cancers-in-2022-aiaaic2148` | 2022 -> 2025 | Jahr | https://www.rollingstone.com/culture/culture-features/data-center-water-pollution-amazon-oregon-1235466613/ |
| `us-fascist-chatbots-run-wild-on-character-2023-aiaaic1550` | 2023 -> 2024-01 | Jahr | https://www.isdglobal.org/isd-in-the-news/generative-ai-advances-shows-clear-need-for-laws-to-keep-up-with-the-shifting-online-extremism-landscape/ |
| `gb-starship-robot-tries-to-run-over-2023-aiaaic1654` | 2023 -> 2024-09 | Jahr | https://www.thegrocer.co.uk/news/delivery-robot-driver-gets-extra-training-after-trying-to-run-over-pedestrian/685869.article |
| `us-replika-ai-companions-sexually-harass-their-2023-aiaaic1181` | 2023 -> 2025-04 | Jahr | https://arxiv.org/pdf/2504.04299 |
| `gb-facebook-algorithm-blocks-images-of-sexual-cows-office-2021-aiaaic0527` | 2021 -> 2020-10 | Jahr | https://www.upi.com/Odd_News/2020/10/07/Facebook-flags-onion-seed-ad-as-overtly-sexual/4691602099240/ |
| `dk-employment-risk-2020-aiaaic0412` | 2020 -> 2019 | Jahr | https://algorithmwatch.org/en/automating-society-2019/denmark/ |
| `gb-starship-robot-delivering-groceries-veers-into-2020-aiaaic1657` | 2020-10 -> 2020-08 | Monat/Tag | https://www.miltonkeynes.co.uk/news/people/one-of-milton-keynes-famous-starship-robots-is-found-face-down-in-river-2933564 |
| `gb-starship-robot-knocks-child-in-brunel-shopping-2022-aiaaic1656` | 2022 -> 2022-04 | Monat/Tag | https://www.miltonkeynes.co.uk/news/people/robots-under-investigation-after-alleged-incident-involving-a-child-while-making-a-delivery-in-milton-keynes-3649302 |
| `us-utah-online-dispute-resolution-system-benefits-lenders-not-2022-aiaaic1642` | 2022 -> 2022-03 | Monat/Tag | https://themarkup.org/remote-justice/2022/03/16/payday-lenders-are-big-winners-in-utahs-chatroom-justice-program |
| `us-study-google-bard-exhibits-left-leaning-political-2023-aiaaic1613` | 2023 -> 2023-03 | Monat/Tag | https://davidrozado.substack.com/p/the-political-biases-of-google-bard |
| `cn-deepfake-chechnyan-soldier-posts-false-ukraine-war-2023-aiaaic1048` | 2023-03 -> 2023-06 | Monat/Tag | https://www.washingtontimes.com/news/2023/jun/21/china-tiktok-figure-fingered-deepfake-anti-us-russ/ |
| `cn-tesla-model-y-collides-with-two-cars-in-taizhou-kills-2022-aiaaic0975` | 2022-11-11 -> 2022-11-28 | Monat/Tag | https://carnewschina.com/2022/11/28/tesla-model-y-crashed-into-two-cars-for-the-second-time-killing-two-people-in-china/ |
| `cn-tesla-model-y-crash-kills-two-injures-2022-aiaaic0963` | 2022-11-13 -> 2022-11-05 | Monat/Tag | https://carnewschina.com/2022/11/28/tesla-model-y-crashed-into-two-cars-for-the-second-time-killing-two-people-in-china/ |
| `cn-agricultural-bank-of-china-facial-recognition-age-2020-aiaaic0489` | 2020 -> 2020-11 | Monat/Tag | https://www.chinadaily.com.cn/a/202011/26/WS5fbee21fa31024ad0ba96788.html |
