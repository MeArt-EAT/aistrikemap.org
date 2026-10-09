# Berichte der Bearbeiter (ungeprüft)

Stand 2026-10-09. Die Prüfer-Stufe wurde wegen des Wochenlimits abgebrochen; keine dieser Änderungen ist verifiziert.

---

PM-02 report: all 6 incidents now show 0 ERRORs and 0 WARNs in `node scripts/validate-timelines.js <slug>`. I used 13 of the 16 WebSearch calls. I changed only the `asm:reverseTimeline` of the 6 files on my list. No top-level sources were added, no git commands were run, and the audit script was not run. Helper scripts are in `/tmp/claude-0/-home-user-aistrikemap-org/422c5be0-b13c-5b95-97a6-814f10bcbcec/scratchpad/agent-pm02-k7q/`.

**bahrain-finfisher-aktivisten** (`data/incidents/bahrain-finfisher-aktivisten.json`)
- Retagged [0] 2011-02 infrastructure->doctrine. The entry describes the state of emergency ("Zustand der nationalen Sicherheit") and the crackdown on protesters. That is a government order and legal framework, not technical infrastructure.
- New entry [1] 2011-11, infrastructure: "FinFisher im Einsatz: 30 Ziellizenzen eines Kunden in Bahrain". Content: according to the 2014 leak, an apparently Bahraini government customer wrote to support that it had 30 target licences, all in use, and later complained it was "losing targets daily". Source: https://theintercept.com/2014/08/07/leaked-files-german-spy-company-helped-bahrain-track-arab-spring-protesters/

**detroit-gesichtserkennung-fehlidentifikation**
- Retagged [3] 2021-04 (Williams federal lawsuit) consequences->event. The Williams case is a multi-stage event (arrest, then lawsuit), similar to the briefing's example "Festnahme + Urteil". Porcha Woodruff's arrest [4] 2023-02 stays event because it is itself a wrongful arrest. This gives 3 events (the maximum), and the 2024 settlement stays consequences.

**niederlande-ki-kindesgeld-skandal**
- New entry [1] 2013, doctrine: "Verschärfte Betrugsbekämpfung und Gründung des CAF-Teams". It covers the 'Bulgarenfraude', State Secretary Weekers' announced crackdown, and the creation of the CAF team in 2013. Sources: https://www.taxlive.nl/nl/documenten/nieuws/hoe-kon-de-fraudejacht-op-toeslagouders-zo-uit-de-hand-lopen/ and https://www.om.nl/binaries/om/documenten/wob-woo/map/map/2021/wob-beslissing-transactie-pag-bjz--52419/BJZ+52491_Deel5.pdf
  - The date is only the year because sources disagree on the CAF founding month (August or September 2013).
- The file already had 6 entries, so I merged the old consequences entries [4] (2021-01-15) and [5] (2021-10 bis 2024-05) into one: "2021-01 bis 2024-05" "Rücktritt der Regierung, Amnesty-Bericht und Milliardenkosten der Wiedergutmachung".
  - Sources: https://www.amnesty.org/en/latest/news/2021/10/xenophobic-machines-dutch-child-benefit-scandal/ (new; its snippet covers both the January 2021 resignation and the report) plus the existing rekenkamer.nl URL.
  - Dropped: the exact day (15 January, now "Im Januar 2021"), the caretaker period until Rutte IV, and the €30,000 lump sum. The last two were sourced to aljazeera.com and dutchnews.nl, which I removed because of the 2-source cap.

**tuerkei-imamoglu-deepfake-kommunalwahl-2024**
- Retagged [0] 2022-10 (Disinformation Law No. 7418) infrastructure->doctrine, because it is a law.
- New entry [1] 2023-08, infrastructure: ElevenLabs leaves beta and releases Eleven Multilingual v2, which speaks 28 languages including Turkish and keeps cloned voices across languages. The entry states explicitly that the sources do not say which tool was used for the fake.
  - Sources: https://elevenlabs.io/blog/elevenlabs-comes-out-of-beta-and-releases-eleven-multilingual-v2-a-foundational-ai-speech-model-for-nearly-30-languages and https://gilbane.com/2023/08/elevenlabs-releases-eleven-multilingual-v2/
  - The August date comes only from the Gilbane URL path, and no snippet named Turkish for the ElevenLabs blog post. An npm package page did list Turkish for the model.

**usa-apple-intelligence-bbc-falsche-news-headlines**
- New entry [1] 2024-06, doctrine: "Apple veröffentlicht Grundsätze für verantwortungsvolle KI" (the four principles, including "Design with care", and the foundation models behind Apple Intelligence).
  - Sources: https://machinelearning.apple.com/research/introducing-apple-foundation-models and https://arxiv.org/html/2407.21075v1
  - It sits after [0] "2024-06 bis 2024-10"; the validator treats both as the same month, so the order passes.
- The file already had 6 entries, so I merged the old consequences entries 2025-01-16 and 2025-07 into "2025-01-16 bis 2025-07" "Apple pausiert Zusammenfassungen für Nachrichten-Apps und führt sie mit Warnhinweis wieder ein".
  - Sources: the existing techcrunch.com and appleinsider.com URLs. Both were checked against fresh snippets, and the wording was trimmed to what they support.
  - Dropped: the 'vorübergehend nicht verfügbar' quote (now: Apple announces it will re-enable the summaries in a later update), the fall 2025 return with iOS 26, and the "erstellt von Apple Intelligence" label claim. Dropped sources: neowin.net and 9to5mac.com.

**usa-twitter-ki-algorithmischer-bias**
- Retagged [2] 2023-03-31 (Musk takeover and partial release of the algorithm) doctrine->consequences. It comes after the event and is a reaction (partial transparency), not a precondition.
- Retagged [4] 2026-02 (Nature field experiment) event->consequences. It is an independent follow-up report confirming the 2021 finding, and it comes after the 2025 EU fine.
- New entry [1] 2021-04-14, doctrine: Twitter's "Responsible Machine Learning Initiative" (the META team). It ordered the analysis of political content recommendations in seven countries that produced the 2021 event.
  - Sources: https://9to5mac.com/2021/04/14/twitter-announces-responsible-machine-learning-initiative/ and https://techxplore.com/news/2021-04-twitter-unveils-algorithmic-fairness.html

UNRESOLVED: none. Points worth a second look:
- Detroit: putting the lawsuit under event is a judgement call. The only alternative was tagging Woodruff's arrest as consequences, which would call a wrongful arrest a "reaction".
- Detroit: [1] doctrine is a NIST study, which is weak as doctrine. It was not flagged by the validator, so I left it.
- Each of the merges removed some sourced detail; see the "Dropped" lines above.

---

PM-01: all 6 files now pass `node scripts/validate-timelines.js` with 0 ERRORs and 0 WARNs. I used 9 of the 16 WebSearch calls and changed only `asm:reverseTimeline` in these 6 files.

**australien-ki-welfare-fraud** (6 entries)
- Retagged [0] "Planung des automatisierten Einkommensabgleichs trotz Rechtsbedenken" (2014-11 bis 2015) from infrastructure to doctrine. It describes a government decision (budget measure 2015, cabinet submission, internal legal advice), not infrastructure.
- That left no infrastructure, so I added one:
  - Date 1991, phase infrastructure, "Datenabgleich zwischen Sozialverwaltung und Steuerbehörde": data matching with the tax office since 1991 under the Data-matching Program (Assistance and Tax) Act 1990; before automation in 2016, staff checked discrepancies by hand.
  - Sources: https://www.servicesaustralia.gov.au/centrelink-data-matching-activities?context=1 and https://www.canberratimes.com.au/story/5995697/centrelink-spending-more-on-robo-debt-nearly-one-million-letters-sent/
- The file already had 6 entries, so I merged the two adjacent consequences "Royal Commission" (2023-07) and "Zweiter Vergleich" (2025-09 bis 2026-06):
  - New date: 2023-07 bis 2026-06.
  - Sources: the existing theconversation.com link plus https://www.thenewdaily.com.au/news/2026/06/24/robodebt-settlement-approved
  - The second sentence was rewritten to what the new source supports: appeal by Gordon Legal based on the Royal Commission findings, court approval on 23 June 2026, 475 million, 587 million in total.
  - Dropped because their sources did not fit the 2-source limit: the sentence about the mothers' testimony (abc 2023-04-15), the detail "im September 2025 verzichtet die Regierung, sich zu verteidigen" (abc 2025-09-04), and the servicesaustralia settlement URL.

**costa-rica-conti-ransomware** (6 entries)
- Retagged [1] "Neuer Präsident ruft nationalen Notstand aus" (2022-05-08) from consequences to event. The emergency declaration is in the incident title and description, and the entry also covers Conti raising the ransom and leaking data. There are now 3 events (the maximum).
- New entry, date 2020, phase infrastructure, "Conti etabliert sich als Ransomware-Dienst mit doppelter Erpressung":
  - Content: ransomware-as-a-service attributed to Wizard Spider, first seen at the end of 2019, double extortion.
  - Sources: https://www.manageengine.com/malware-protection/adversaries/conti-ransomware.html and https://darktrace.com/blog/the-double-extortion-business-conti-ransomware-gang-finds-new-avenues-of-negotiation
- New entry, date 2021-08, phase doctrine, "Contis Angriffshandbuch gibt das Vorgehen der Partner vor":
  - Content: Conti's attack manual for its affiliates, published in early August 2021 on the XSS forum by an affiliate unhappy with his pay.
  - Sources: https://therecord.media/disgruntled-ransomware-affiliate-leaks-the-conti-gangs-technical-manuals/ and https://www.redscan.com/news/key-insights-from-the-conti-ransomware-playbook-leak-foothold/

**jordanien-pegasus-journalisten** (5 entries)
- New entry, date 2020-07, phase doctrine, "Israelisches Gericht bestätigt die Exportlizenz der NSO Group":
  - Content: Pegasus exports need a licence from the Israeli Ministry of Defence. The Tel Aviv District Court rejected the Amnesty-backed petition to revoke it, so the framework for selling to government clients stays in place.
  - Sources: https://www.occrp.org/en/news/israel-upholds-spyware-firms-export-licence and https://www.jurist.org/news/2020/07/israel-court-dismisses-amnesty-bid-to-stop-nso-group-exporting-spyware
  - I found no Jordanian legal basis for the surveillance in my searches, so the doctrine is NSO's export regime. Other Pegasus incidents in the corpus use the same kind of doctrine.

**suedkorea-10-jahre-haft-fuer-hauptangeklagten-im-seoul-national-university-deepfake-ring**
- Retagged [4] "10 Jahre Haft für Park" (2024-10-30) from event to consequences.
  - Reason: under the briefing, a verdict is a reaction to the crimes. The incident description itself places the case inside the 2024 Telegram deepfake wave, which is event [2].
  - Judgement call: this means the titular verdict is no longer an event.

**usa-ai-bewerbungsfilter-behinderte**
- Retagged [3] "EEOC entfernt KI-Leitlinien" (2025-01-27) from doctrine to consequences. It is dated after the first event, so per briefing step 3 it is not the precondition.
- To avoid a new interleaving, retagged [4] "ACLU-Beschwerde gegen Intuit und HireVue" (2025-03-19) from event to consequences. It is a later legal action following the Workday suit, which stays the only event.
  - Judgement call: the ACLU complaint is about a separate case, so it could also be read as part of the incident.

**usa-proctoring-ki-studenten**
- Retagged [3] "US-Senatoren fordern Auskunft" (2020-12) from doctrine to consequences: a political reaction dated after the first event.
- Retagged [4] "Analyse: 57 % kein Gesicht erkannt" (2021-04) from event to consequences. It is a report that followed the California bar exam event; "Bericht" is listed under consequences in the briefing.
- Note, not a validator error: [1] "EFF kritisiert Proctoring-Apps" (2020-08) is tagged doctrine but is really criticism or debate. A real doctrine would be, for example, the order to hold the October 2020 California bar exam online. I left it unchanged because adding an entry would have meant merging consequences.

UNRESOLVED: none.

---

PM-04: All 6 incidents now pass `node scripts/validate-timelines.js` (6 checked, 0 ERRORs, 0 WARNs). Each file got one new doctrine entry inserted in date order. No other fields were changed, no top-level sources were added, and no entries were removed. I used 8 of the 16 WebSearch calls.

1. **china-ki-arbeitsueberwachung-fabriken**
   - New entry [1] `2017-07` doctrine: State Council adopts the "New Generation Artificial Intelligence Development Plan" (AI as the driving force of industry, intelligent manufacturing as a priority, warning about safety risks).
   - Source: https://digichina.stanford.edu/?p=826
   - Now 6 entries. The search found nothing in the plan on emotion recognition or workplace surveillance, so the entry only says the plan sets the state framework for AI in industry.

2. **indien-sitharaman-deepfake-investment-betrug**
   - New entry [1] `2024-09` doctrine (business model): the Enforcement Directorate describes how organised investment fraud works (luring victims via Facebook, Instagram, WhatsApp and Telegram, then fake apps). Business Standard covers WhatsApp stock scams with fake profits and their link to human trafficking.
   - Sources: https://enforcementdirectorate.gov.in/sites/default/files/latestnews/PRESS%20RELEASE-%20Arrest-Cyber%20Investment%20Scam-0%202.09.2024%204.pdf and https://www.business-standard.com/amp/finance/personal-finance/fake-profits-to-human-trafficking-the-whatsapp-stock-market-scam-decoded-124090900416_1.html
   - Now 5 entries. The closing sentence ("Gefälschte Prominenten-Videos dienen als Köder für solche Maschen") is not carried by these two sources. It rests on the file's own description and the 2024 entry [0].

3. **polen-ki-sozialleistungen-profiling**
   - New entry [0] `2014-03-14` doctrine: the Sejm passes the labour market reform amending the employment promotion act, which requires a support profile for every unemployed person.
   - Sources: https://for.org.pl/pliki/artykuly/2112_1022-forpopiera-reformapolitykirynkupracy.pdf and https://kadry.infor.pl/wiadomosci/682576,Urzedy-pracy-zmiany-od-27-maja-2014-r.html
   - Now 6 entries. Entry [1] (2014-05-27) stays infrastructure.

4. **ungarn-ki-ueberwachung-orban**
   - New entry [0] `2016-01-12` doctrine: under Hungarian law the justice minister, not a judge, authorises national-security surveillance. The ECtHR ruled in Szabó and Vissy v. Hungary that this violates Art. 8 (final 6 June 2016). The governing party later cites justice-ministry authorisation for Pegasus.
   - Sources: https://policehumanrightsresources.org/content/uploads/2018/07/CASE-OF-SZAB_-AND-VISSY-v.-HUNGARY.pdf?x19059 and https://therecord.media/hungarian-official-confirms-governments-bought-and-used-pegasus-spyware/
   - Now 5 entries. The entry is dated by the judgment, because the search results did not give the year the law was passed.

5. **usa-nhtsa-untersuchung-gegen-tesla-full-self-driving-sichtbehinderungs-crashs-mit**
   - New entry [1] `2022-11-24` doctrine (company decision): Musk opens FSD Beta to all North American customers who bought the option ($15,000 in the US), while approval for driverless operation is still pending.
   - Sources: https://teslanorth.com/2022/11/24/tesla-launches-full-self-driving-beta-for-all-paid-customers-in-north-america/ and https://businesstoday.in/auto/story/teslas-full-self-driving-beta-now-available-to-all-in-north-america-elon-musk-354137-2022-11-25
   - Now 5 entries.

6. **usbekistan-ki-smart-city-ueberwachung**
   - New entry [0] `2017-08-29` doctrine: presidential resolution PP-3245 on ICT project management. According to UzDaily it provides for a unified "Safe City" hardware and software complex (Tashkent by 2019, regional centres by 2021, the whole country by 2023), to be run by a centre under the ICT ministry.
   - Sources: https://www.uzdaily.uz/ru/v-uzbekistane-sozdadut-sistemu-bezopasnyi-gorod/ and https://base.spinform.ru/show_doc.fwx?rgn=143086
   - Now 6 entries. The 2023 decree stays consequences.
   - That UzDaily's resolution and PP-3245 dated 29 August 2017 are the same document rests on the identical resolution title in both sources. The UzDaily snippet itself shows no date.

UNRESOLVED: none.

---

All six incidents in PM-03 now pass `node scripts/validate-timelines.js` with 0 ERRORs and 0 WARNs. I used 8 of the 16 WebSearch calls and edited only the six files on the work list.

**belarus-internet-shutdown-2020** (missing doctrine)
- Retagged [0] 2016-07 "SORM: Pflicht-Abhörschnittstelle bei allen Telekom-Anbietern" from infrastructure to doctrine. The entry describes a state legal obligation, imposed before the shutdown, for all telecom operators to make their equipment SORM-compatible. A search confirmed that Decree No. 60 (2010) obliges providers to use SORM. [1] Sandvine DPI stays infrastructure. Title and text are unchanged.
- I did not add an entry for Decree 60 itself. The timeline already has 6 entries, and the only adjacent consequences pairs are on unrelated topics, so merging two of them would have been forced.

**deutschland-schauspielerin-collien-ulmen-fernandes-beschuldigt-ehemann-der-deepfake** ([4] event came after [3] consequences)
- Retagged [3] "2025-09 bis 2025-12" "Trennung und Anzeige auf Mallorca" from consequences to event. Fernandes's formal complaint against her ex-husband in Palma is a stage of the incident itself, which is the accusation against her ex-husband.
- There are now 3 events: [2] 2024-12, [3] and [4] 2026-03 (Spiegel publication and denial). [5] 2026-04 stays consequences. No search was needed.

**papua-neuguinea-huawei-nationaldatencenter-offen-fuer-spionage-ict-minister-erklaert-147** (missing doctrine)
- New entry [0], date "2010", phase doctrine: "Kabinett beschließt E-Government-Projekt mit Huawei".
  - Content: the National Executive Council approves IGIS and engages Huawei. Telikom PNG and Huawei sign the contract on 7 Sept 2010, and it includes the main government data centre. A China EXIM loan of about USD 53M is signed on 23 Dec 2010.
  - Sources: https://china.aiddata.org/projects/39381 and https://www.thenational.com.pg/?p=7121
  - The cabinet decision itself is undated in the source. The text does not give it a date; only the 2010 contract and loan dates are stated. The timeline now has 5 entries.

**uk-bridges-south-wales-police-gesichtserkennung-urteil** (missing doctrine)
- New entry [0], date "2013", phase doctrine: "Surveillance Camera Code of Practice: Rechtsrahmen ohne eigenes Gesetz".
  - Content: the Code is issued in 2013. There is no dedicated statute for police facial recognition; SWP relies on its common law powers plus data protection law, codes of practice and its own local policies.
  - Sources: https://assets.publishing.service.gov.uk/media/61a73dd6d3bf7f055c4b7723/E02688418_Surveillance_Camera_Code_EM_Accessible_v02.pdf and https://caselaw.nationalarchives.gov.uk/ewhc/admin/2019/2341
  - The timeline now has 6 entries.

**usa-face-id-ice-drivers-license** (missing doctrine)
- New entry [0], date "1994", phase doctrine: "Driver's Privacy Protection Act nimmt Behörden von Datenschutzregeln aus".
  - Content: the DPPA restricts disclosure of state motor-vehicle records but exempts use by government agencies, including courts and law enforcement.
  - Sources: https://egov.maryland.gov/mva/idvr/Home/Dppa and https://www.lawfaremedia.org/article/ices-use-maryland-facial-recognition-database-lawful
  - The existing entry's reference to a roughly two-decade-old federal law is not explicitly identified as the DPPA in the sources, so the new text does not make that link. The timeline now has 5 entries.

**usa-westfield-nj-schul-deepfake-mani** (missing doctrine)
- New entry [1], date "2023-01", phase doctrine (business model): "Nudify-Dienste werden zum skalierten Online-Geschäft".
  - Content: Graphika describes the shift from a custom service on niche forums to an automated, scaled online business that markets and monetizes itself. Links advertising undressing apps on X and Reddit rose by more than 2,400% since the beginning of 2023.
  - Sources: https://time.com/6344068 and https://www.deccanherald.com/technology/apps-that-use-ai-to-undress-women-in-photos-soaring-in-use-2803981
  - The date "2023-01" stands for "since the beginning of 2023" in the sources. The timeline now has 6 entries.

UNRESOLVED: none.

---

PM-05 report: all 10 files pass `node scripts/validate-timelines.js` with 0 ERRORs. The only output is 2 WARNs in the SumOfUs file about entries that share a date; those dates were already there. No timeline entry is left without a source. I used 18 WebSearch calls, counting one that the API rejected because web.archive.org was in the allowed domains. No WebFetch, so every source below was checked against search snippets, not the full articles.

**afghanistan-biometrische-daten-taliban**
- [4] (2022, consequences): added 2 sources, HRW 2022-03-30 (https://www.hrw.org/news/2022/03/30/new-evidence-biometric-data-systems-imperil-afghans) and Free Beacon (https://freebeacon.com/national-security/congress-probes-biden-admin-after-taliban-uses-us-biometric-data-to-target-allies/).
- [4] rewritten to what those sources support: HRW says the Taliban control the left-behind biometric systems and may already have used them; the case of the former commander held 12 days in Nov 2021 and scanned; members of Congress demand answers from the Biden administration.
- [4] removed claims: "MIT TR / The Intercept documented several cases" and the call for new deletion standards.
- [4] new title: "Hinweise auf Verfolgung und Forderungen nach Aufklärung" / "Signs of persecution and calls for accountability".

**china-ki-studie-zur-vorhersage-von-kriminalitaet-anhand-von-gesichtsmerkmalen-als**
- [1] (2012, infrastructure): added sources https://classic.d2l.ai/chapter_convolutional-modern/alexnet.html and https://arxiv.org/pdf/1611.04135 (the arXiv one was already a top-level source; it supports the four classifiers).
- [1] small rewrite: the 2012 breakthrough is now tied to AlexNet winning ImageNet, and SVM, KNN and logistic regression are called classic classifiers next to CNNs.

**indonesien-prabowo-suharto-deepfake-2024**
- [3] ported sources checked: the Al Jazeera article (2024-02-14, quick count) cannot carry the official 58.6% figure, so I replaced it with https://asianews.network/indonesias-general-elections-commission-confirms-prabowos-landslide-win (KPU final result). The Fulcrum source stays.
- [3] removed claims: "60% Gen Z / 42% millennials" and "voters who know him only as a TikTok avatar".
- [3] rewritten to what the Fulcrum exit-poll analysis says: young Gen Z and millennial voters plus Jokowi's approval drove the win.
- [3] new title: "Prabowo gewinnt mit 58,6 Prozent - getragen von jungen Wählern" / "Prabowo wins with 58.6 percent - carried by young voters".

**kasachstan-ki-protest-shutdown**
- [3] (2022-01-06, event): added sources https://www.dhakatribune.com/world/asia/261394/kazakh-leader-rejects-talks-tells-forces-to and https://www.rferl.org/a/kazakhstan-unrest-death-toll-238/31991206.html.
- [3] rewritten: CSTO request; the 7 Jan "shoot to kill without warning" order; talks rejected; the official toll of 238 published in Aug 2022, including 6 people tortured to death in custody; human rights groups say the number of killed demonstrators is higher.
- [3] removed claims: "fired upon without warning in Almaty", "thousands wounded", and the sentence about the shutdown hiding evidence.

**mexiko-ki-militarisierung**
- [3] (2022-10, event): added sources https://www.xataka.com.mx/investigacion/ejercito-tiene-departamento-secreto-que-usa-pegasus-a-discrecion-secretario-defensa-mexico-filtracion-guacamaya and https://zetatijuana.com/2022/10/el-hackeo-mas-grande-al-gobierno-de-mexico/.
- [3] rewritten to the "Ejército Espía" findings (R3D, Article 19, SocialTIC, Citizen Lab): the Centro Militar de Inteligencia used Pegasus under López Obrador against 2 journalists and Raymundo Ramos, with Sandoval's knowledge.
- [3] removed claims: the López Obrador "promise to end" Pegasus, and the general "extensive surveillance" wording.

**nigeria-ki-wahlmanipulation-deepfakes**
- [3] ported sources checked (TheCable IReV "HTTP server error", Dubawa): they only carry the IReV upload failure, so I rewrote [3] to that.
- [3] removed claims: BVAS failing "particularly in opposition strongholds" and the opposition's manipulation claim.
- [3] new title: "Wahltag: Ergebnisportal IReV versagt" / "Election day: IReV results portal fails".
- [4] ported sources checked: kept the EEAS source. Replaced TheCable (EU final report) with https://blueprint.ng/pept-judgement-on-2023-presidential-election-how-tinubu-obi-atiku-won-and-lost/, which covers the court challenge.
- [4] rewritten: Atiku and Obi challenge the result at the tribunal over BVAS/IReV; the EU criticism now matches the statement's own wording, "lack of transparency and operational failures".
- [4] removed claims: the quote "severe operational shortcomings" and the 2 sentences on the AI debate.
- [5] (2024, consequences): added source https://daidac.thecjid.org/ai-and-disinformation-a-discursive-analysis-of-west-african-election/ and rewrote [5] to that CJID analysis (Nigeria 2023, Liberia 2023, Ghana 2024).
- [5] removed claims: AU/ECOWAS talks, South Africa/Senegal, and the call for African languages in fact-check tools.
- [5] new title: "Westafrikanische Debatte über KI und Wahlen" / "West African debate on AI and elections".

**uganda-ki-wahlmanipulation**
- [3] (2021-01-13, event): added sources https://abc17news.com/news/national-world/2021/01/18/after-five-days-of-internet-blackout-ugandans-are-back-online-as-bobi-wine-remains-under-house-arrest/ and https://www.citizen.co.za/news/news-africa/uganda-eases-internet-shutdown-imposed-over-election/.
- [3] rewritten: shutdown on 13 Jan, back online on 18 Jan after 5 days, social media still blocked, Museveni declared winner with 58.6%, Bobi Wine under house arrest calls the result rigged.
- [3] removed claims: "45 million people" and "observers cannot report".

**usa-chatgpt-urheberrecht-nyt**
- [4] (2025, consequences): added source https://www.exchangewire.com/blog/2024/05/22/deals-with-the-devil-publishings-uneasy-alliance-with-ai/.
- [4] rewritten: other publishers have signed licensing deals with OpenAI (AP, Axel Springer, Le Monde, FT, Prisa) while the lawsuit is pending.
- [4] removed the EU AI Act training-data sentence.
- [4] new title: "Lizenzdeals und Grundsatzdebatte" / "Licensing deals and a fundamental debate".

**usa-kroger-gesichtserkennung-supermarkt**
- [4] (2024, consequences): added sources https://therecord.media/kroger-facial-recognition-lawmakers-concerns and https://idtechwire.com/krogers-use-of-facial-recognition-spurs-price-gouging-concerns.
- [4] rewritten to the Aug 2024 letter from Warren and Casey about cameras that estimate customers' age and gender, the profiling and price-label concerns, Tlaib's separate letter, and Kroger denying "surge pricing".
- [4] removed claims: states considering their own laws, and the ACLU calling for a ban.
- [4] new title: "Druck auf Kroger: Abgeordnete fragen nach Gesichtserkennung" / "Pressure on Kroger: lawmakers question facial recognition plans".

**usa-sumofus-forscherin-berichtet-von-virtueller-vergewaltigung-in-metas-horizon-worlds**
- deadLink: no new URL or archive copy of the report PDF turned up, so I removed the dead top-level object (https://www.eko.org/images/Metaverse_report_May_2022.pdf). The Gizmodo top-level source remains. The timeline was not changed.

**UNRESOLVED**
- **usa-chatgpt-urheberrecht-nyt [4]:** I had no searches left for the AI Act sentence, so it was removed, not sourced. The remaining source is from May 2024 but the entry is dated 2025, so the date is only loosely supported. It could be re-anchored with an AI Act training-data source from 2025.
- **nigeria-ki-wahlmanipulation-deepfakes [5]:** I don't know when the CJID analysis was published. It covers Ghana's December 2024 election, so it may be from 2025 while the entry stays dated 2024.
- **usa-sumofus-forscherin-berichtet-von-virtueller-vergewaltigung-in-metas-horizon-worlds:** the original report PDF has no working URL. The SumOfUs press release on the report (https://www.sumofus.org/media/sumofus-releases-new-report-on-meta-platforms-to-rally-support-for-shareholder-resolutions-in-advance-of-agm/) could be added as a top-level source if a reviewer agrees.

Helper files are in `/tmp/claude-0/-home-user-aistrikemap-org/422c5be0-b13c-5b95-97a6-814f10bcbcec/scratchpad/agent-pm05-x7k2/`.

---

PM-06 report. All 9 incidents now pass `node scripts/validate-timelines.js <slug>` with 0 ERRORs and 0 WARNs. I used 16 of the 18 WebSearch calls. WebFetch and curl were blocked, so every source below is backed only by search results and snippets. I changed nothing outside `asm:reverseTimeline` and added no new top-level sources.

**argentinien-milei-massa-ki-wahlkampf-2023**
- [2] Sources added: deccanherald.com/world/is-argentina-the-first-ai-election-2-2771908 (NYT reprint) and tribunadosertao.com.br/.../490301-campanha-presidencial-na-argentina-usa-ia-em-grande-escala.
- [2] Reworded DE and EN:
  - The Massa video now says "allegedly cocaine use". Massa's campaign accuses the Milei camp of deepfakes.
  - The organ-market deepfake is now described as published by the Massa team on its own Instagram account for AI content and later deleted.
  - Removed the unsupported "reagiert mit", "beide werfen sich gegenseitig Fälschung vor" and the electoral-commission sentence (entry [0] already covers that point).

**frankreich-algorithme-parcoursup** (checkPorted [3])
- [3] I could not verify the ported juridique.defenseurdesdroits.fr and legifrance CETATEXT links. Replaced them with next.ink/7155/107523-le-defenseur-droits-reclame-plus-transparence-sur-algorithmes-parcoursup/ and banquedesterritoires.fr/la-transparence-des-algorithmes-de-parcoursup-lepreuve-du-conseil-detat.
- [3] Reworded:
  - Défenseur des droits decision of 18 January 2019.
  - "Mehrere Verwaltungsgerichte geben statt" was wrong: only TA Guadeloupe ruled for UNEF (February 2019), and the Conseil d'État overturned that on 12 June 2019.
  - Removed the unsupported CNIL sentence.

**japan-line-datenleck-china**
- [0] Sources added: pymnts.com/?p=1035585 (over 86 million users in Japan) and sbbit.jp/article/refers/56760 (municipal use of LINE).
- [0] Reworded:
  - The 86 million figure is now dated "early 2021".
  - Removed the anachronistic COVID-19 surveys (the entry is dated 2018). Municipal services are now daycare applications, resident consultations and bulky-waste bookings.
  - "Naver-Tochtergesellschaften" became "verbundenes Unternehmen in China".
- [2] checkPorted: kept the abs-cbn and mlex sources but reworded to what they carry:
  - Contractor technicians in China accessed names, phone numbers and e-mail addresses, possible since 2018.
  - LINE had not told officials about servers abroad.
  - Removed "Chat-Verläufe", "mindestens 32 Zugriffe" and "behauptete, alle Daten in Japan".
- [4] Sources added: koreajoongangdaily.com/business/tokyo-traces-line-security-failure-to-navers-governance/10817725 and digitalpolicyalert.org/event/18026-...
- [4] Reworded:
  - About 510,000 records leaked via Naver Cloud (the 440,000 figure was not found in any source).
  - Ministry of Internal Affairs and Communications guidance in March and April 2024: reduce dependence on Naver, review the capital ties, report quarterly.
  - Removed "Data Localization" and "treibt Datenschutzgesetzgebung voran".

**malaysia-ki-arbeitsmigranten**
- [4] Sources added: aljazeera.com/amp/news/2023/2/23/malaysia-pressed-to-probe-deaths-of-150-foreigners-in-detention and malaysianow.com/news/2023/02/23/govt-pressed-to-probe-deaths-of-150-foreigners-in-detention-last-year.
- [4] Rewritten to what can be sourced:
  - 150 deaths in immigration detention in 2022, disclosed to parliament in February 2023.
  - Amnesty calls for investigations and criticises the lack of independent monitoring.
  - UNHCR has been denied access since August 2019.
  - Removed the unsupported employer wage-withholding claim and the Fortify Rights/Amnesty demand about biometrics.
- [4] Date changed from 2022 to 2023-02. This also clears the earlier same-date warning.

**mosambik-internet-manipulation**
- [0] Sources added: vanguardafrica.com/africawatch/2021/4/6/on-the-unfolding-crisis-in-cabo-delgado-mozambique and amnesty.org.uk/urgent-actions/journalist-forcibly-disappeared.
- [0] Reworded: October 2017 attacks on police posts in Mocímboa da Praia, and the media ban for the affected districts. Removed "digitale Infrastruktur von Beginn an kontrolliert".
- [3] Sources added: africanews.com/amp/2021/07/11/rwanda-deploys-1000-troops-to-mozambique-in-sadc-anti-jihadist-mission/ and acleddata.com/update/cabo-ligado-weekly-5-11-july-2021.
- [3] Rewritten: Rwanda deploys about 1,000 soldiers and police from 9 July 2021 on a bilateral basis, and SADC prepares its own mission. Removed the unsupported drone, signals-intelligence and EU sentences.
- [3] Title changed to "Internationale Militärintervention" / "International military intervention".

**polen-pegasus-opposition**
- [5] Sources added: notesfrompoland.com/2024/04/16/almost-600-people-targeted-with-pegasus-spyware-under-former-polish-government/ and tvn24.pl/tvn24-news-in-english/pegasus-targeted-578-people-in-2017-2022-says-polands-chief-prosecutor-st7872288.
- [5] Reworded:
  - The Tusk government pledges to investigate.
  - The Sejm committee is set up in February 2024 and calls Kaczyński as its first witness in March.
  - Bodnar reports in April 2024 that 578 people were surveilled from 2017 to 2022.
  - Removed "Anklagen vorbereitet" and the "Symbol" sentence.

**uk-ofqual-a-levels-algorithmus**
- [3] Sources added: jerseyeveningpost.com/morenews/uknews/2020/08/16/hundreds-of-a-level-students-protest-over-results-downgrades/ and channel4.com/news/students-burn-their-a-level-results-outside-parliament-in-protest-of-downgrading.
- [3] Reworded: hundreds of students protest outside the Department for Education on 16 August 2020, call for Williamson to resign and for universities to honour offers, and one student burns her results. Removed "Tausende landesweit", the #AResultsDay hashtag and the opposition demand.
- [3] Title changed to "Schülerproteste und politischer Druck" / "Student protests and political pressure".

**usa-ftc-untersucht-openai-wegen-moeglicher-verbraucherschaeden-2023**
- [0] Sources added: venturebeat.com/ai/the-hidden-danger-of-chatgpt-and-generative-ai-the-ai-beat and techstartups.com/2022/12/05/chatgpt-crosses-1-million-users-five-days-launch/.
- [0] Reworded:
  - Research preview launched on 30 November 2022.
  - OpenAI itself admits "plausible-sounding but incorrect" answers.
  - Over 1 million users after five days.
  - Removed the anachronistic Plus payment data (Plus did not exist yet) and "Aussagen über Personen".

**usa-mobley-v-workday-eeoc-stuetzt-sammelklage-zu-ki-bewerber-screening-alter-race** (checkPorted [0])
- [0] Kept the globenewswire Skills Cloud release. Replaced the unverifiable SEC exhibit with joshbersin.com/2024/03/workday-to-acquire-hiredscore-a-potential-shakeup-in-hr-technology.
- [0] Reworded:
  - Skills Cloud delivered in 2018.
  - HiredScore acquisition announced in February 2024.
  - More than 4,000 companies use Workday's applicant tracking system.
  - Removed "auto-ablehnen in Minuten/über Nacht" (event [2] already covers it) and "keine Bias-Audit-Pflicht" (doctrine [1] already covers it).
- [0] Date changed from 2017 to 2018-10.

**UNRESOLVED (none blocking):**
- mosambik [3] is still tagged event, but without the unsupported surveillance claims it no longer describes the internet manipulation itself. Retagging it to consequences, or finding a sourced surveillance angle, may be worth a later pass.
- Lower-confidence sources: the claim each one carries comes from the search summary, which did not show which result it was quoted from:
  - japan [4]: koreajoongangdaily for the 510,000 figure.
  - mosambik [0]: vanguardafrica for October 2017.
