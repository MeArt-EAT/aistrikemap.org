#!/usr/bin/env node
/**
 * scripts/fix-umlauts-incidents.js
 *
 * Mass-Fix für Umlaut-Konventions-Verletzungen in data/incidents/*.json.
 * Bearbeitet AUSSCHLIESSLICH user-sichtbare Display-Felder; technische
 * Identifier (URL-Slugs in @id, Country-ISO-Codes, EN-Slugs in
 * asm:incidentType, asm:actors[].type, phase, etc.) bleiben unverändert.
 *
 * Aufruf:
 *   node scripts/fix-umlauts-incidents.js          (alle Files)
 *   node scripts/fix-umlauts-incidents.js --dry    (Diff-Vorschau)
 *   node scripts/fix-umlauts-incidents.js <file>   (einzeln testen)
 */
const fs = require('fs');
const path = require('path');

const INCIDENTS_DIR = path.join(__dirname, '..', 'data', 'incidents');

/**
 * Replacement-Regeln. Wortgrenzen via \b. Reihenfolge: längere/spezifische
 * Patterns zuerst, damit z.B. "Aethiopisch" nicht vorher von "Aeth" gerissen
 * wird.
 *
 * Case-Erhaltung via separate Patterns für Großbuchstabe (Wortanfang) und
 * Kleinbuchstabe.
 */
const RULES = [
  // === Eigennamen / Ländernamen ===
  [/\bAethiopien\b/g, 'Äthiopien'],
  [/\baethiopien\b/g, 'äthiopien'],
  [/\bAethiopisch/g, 'Äthiopisch'],
  [/\baethiopisch/g, 'äthiopisch'],
  [/\bAethiop/g, 'Äthiop'],
  [/\baethiop/g, 'äthiop'],
  [/\bAegypten\b/g, 'Ägypten'],
  [/\baegypten\b/g, 'ägypten'],
  [/\bAegyptisch/g, 'Ägyptisch'],
  [/\baegyptisch/g, 'ägyptisch'],
  [/\bAegypt/g, 'Ägypt'],
  [/\baegypt/g, 'ägypt'],
  [/\bTuerkei\b/g, 'Türkei'],
  [/\btuerkei\b/g, 'türkei'],
  [/\bTuerkisch/g, 'Türkisch'],
  [/\btuerkisch/g, 'türkisch'],
  [/\bTuerk/g, 'Türk'],
  [/\btuerk/g, 'türk'],

  // === Häufigste Funktionswörter (whole-word) ===
  [/\bUeber\b/g, 'Über'],
  [/\bueber\b/g, 'über'],
  [/\bFuer\b/g, 'Für'],
  [/\bfuer\b/g, 'für'],
  [/\bFuers\b/g, 'Fürs'],
  [/\bfuers\b/g, 'fürs'],
  [/\bMaerz\b/g, 'März'],
  [/\bWaehrend\b/g, 'Während'],
  [/\bwaehrend\b/g, 'während'],

  // === Überwachung (sehr häufig) ===
  [/\bUeberwach/g, 'Überwach'],
  [/\bueberwach/g, 'überwach'],
  [/\bUeberpruef/g, 'Überprüf'],
  [/\bueberpruef/g, 'überprüf'],
  [/\bUebernahm/g, 'Übernahm'],
  [/\buebernahm/g, 'übernahm'],
  [/\bUebernehm/g, 'Übernehm'],
  [/\buebernehm/g, 'übernehm'],
  [/\bUebersicht/g, 'Übersicht'],
  [/\buebersicht/g, 'übersicht'],
  [/\bUeber/g, 'Über'],          // Catch-all für übrige zusammengesetzte
  [/\bueber/g, 'über'],

  // === Adjektive / Adverbien mit "ä" ===
  [/\bNaechst/g, 'Nächst'],
  [/\bnaechst/g, 'nächst'],
  [/\bTaetig/g, 'Tätig'],
  [/\btaetig/g, 'tätig'],
  [/\bAehnlich/g, 'Ähnlich'],
  [/\baehnlich/g, 'ähnlich'],
  [/\bPraezis/g, 'Präzis'],
  [/\bpraezis/g, 'präzis'],
  [/\bGefaehrd/g, 'Gefährd'],
  [/\bgefaehrd/g, 'gefährd'],
  [/\bGefaehrl/g, 'Gefährl'],
  [/\bgefaehrl/g, 'gefährl'],
  [/\bRegelmaess/g, 'Regelmäß'],
  [/\bregelmaess/g, 'regelmäß'],

  // === Adjektive / Adverbien mit "ö" / "ü" ===
  [/\bMoeglich/g, 'Möglich'],
  [/\bmoeglich/g, 'möglich'],
  [/\bUnmoeglich/g, 'Unmöglich'],
  [/\bunmoeglich/g, 'unmöglich'],
  [/\bOeffentl/g, 'Öffentl'],
  [/\boeffentl/g, 'öffentl'],
  [/\bVeroeffentl/g, 'Veröffentl'],
  [/\bveroeffentl/g, 'veröffentl'],
  [/\bUnnoetig/g, 'Unnötig'],
  [/\bunnoetig/g, 'unnötig'],
  [/\bVerfuegb/g, 'Verfügb'],
  [/\bverfuegb/g, 'verfügb'],

  // === Substantive mit ü/ö/ä ===
  [/\bBuerg/g, 'Bürg'],
  [/\bbuerg/g, 'bürg'],
  [/\bBuero/g, 'Büro'],
  [/\bbuero/g, 'büro'],
  [/\bUniversitaet/g, 'Universität'],
  [/\buniversitaet/g, 'universität'],
  [/\bBevoelker/g, 'Bevölker'],
  [/\bbevoelker/g, 'bevölker'],
  [/\bVoelker/g, 'Völker'],
  [/\bvoelker/g, 'völker'],
  [/\bMilitaer/g, 'Militär'],
  [/\bmilitaer/g, 'militär'],
  [/\bPalaestin/g, 'Palästin'],
  [/\bpalaestin/g, 'palästin'],
  [/\bMaedchen\b/g, 'Mädchen'],
  [/\bmaedchen\b/g, 'mädchen'],
  [/\bMaerkte\b/g, 'Märkte'],
  [/\bmaerkte\b/g, 'märkte'],

  // === Kompositionswörter (Endungen) ===
  [/\bStreitkraef/g, 'Streitkräf'],
  [/\bstreitkraef/g, 'streitkräf'],
  [/\bSicherheitskraef/g, 'Sicherheitskräf'],
  [/\bsicherheitskraef/g, 'sicherheitskräf'],
  [/\bLehrkraef/g, 'Lehrkräf'],
  [/\blehrkraef/g, 'lehrkräf'],
  [/\bArbeitskraef/g, 'Arbeitskräf'],
  [/\barbeitskraef/g, 'arbeitskräf'],
  [/\bFachkraef/g, 'Fachkräf'],
  [/\bfachkraef/g, 'fachkräf'],
  [/\bKraefte/g, 'Kräfte'],
  [/\bkraefte/g, 'kräfte'],
  [/\bAnwael/g, 'Anwäl'],
  [/\banwael/g, 'anwäl'],

  // === Verben / Verbformen ===
  [/\bGegruendet/g, 'Gegründet'],
  [/\bgegruendet/g, 'gegründet'],
  [/\bGruenduen/g, 'Gründun'],
  [/\bgruenduen/g, 'gründun'],
  [/\bGruend/g, 'Gründ'],
  [/\bgruend/g, 'gründ'],
  [/\bEinfuehr/g, 'Einführ'],
  [/\beinfuehr/g, 'einführ'],
  [/\bDurchfuehr/g, 'Durchführ'],
  [/\bdurchfuehr/g, 'durchführ'],
  [/\bAusfuehr/g, 'Ausführ'],
  [/\bausfuehr/g, 'ausführ'],
  [/\bAusgefuehr/g, 'Ausgeführ'],
  [/\bausgefuehr/g, 'ausgeführ'],
  [/\bDurchgefuehr/g, 'Durchgeführ'],
  [/\bdurchgefuehr/g, 'durchgeführ'],
  [/\bFuehr/g, 'Führ'],
  [/\bfuehr/g, 'führ'],
  [/\bZurueck/g, 'Zurück'],
  [/\bzurueck/g, 'zurück'],
  [/\bErmoegl/g, 'Ermögl'],
  [/\bermoegl/g, 'ermögl'],
  [/\bErmoglich/g, 'Ermöglich'],
  [/\bermoglich/g, 'ermöglich'],
  [/\bAusloes/g, 'Auslös'],
  [/\bausloes/g, 'auslös'],
  [/\bLoesegeld/g, 'Lösegeld'],
  [/\bloesegeld/g, 'lösegeld'],
  [/\bLoesung/g, 'Lösung'],
  [/\bloesung/g, 'lösung'],
  [/\bSpaeter\b/g, 'Später'],
  [/\bspaeter\b/g, 'später'],
  [/\bSpaeh/g, 'Späh'],
  [/\bspaeh/g, 'späh'],
  [/\bGetoetet/g, 'Getötet'],
  [/\bgetoetet/g, 'getötet'],
  [/\bToetung/g, 'Tötung'],
  [/\btoetung/g, 'tötung'],
  [/\bUnterdrueck/g, 'Unterdrück'],
  [/\bunterdrueck/g, 'unterdrück'],
  [/\bGestuetz/g, 'Gestütz'],
  [/\bgestuetz/g, 'gestütz'],
  [/\bGefaehr/g, 'Gefähr'],
  [/\bgefaehr/g, 'gefähr'],
  [/\bEinschraenk/g, 'Einschränk'],
  [/\beinschraenk/g, 'einschränk'],
  [/\bBeschraenk/g, 'Beschränk'],
  [/\bbeschraenk/g, 'beschränk'],
  [/\bVerstaerk/g, 'Verstärk'],
  [/\bverstaerk/g, 'verstärk'],
  [/\bVerstaend/g, 'Verständ'],
  [/\bverstaend/g, 'verständ'],
  [/\bPraedikt/g, 'Prädikt'],
  [/\bpraedikt/g, 'prädikt'],
  [/\bAusgewaehlt/g, 'Ausgewählt'],
  [/\bausgewaehlt/g, 'ausgewählt'],
  [/\bAuswaehl/g, 'Auswähl'],
  [/\bauswaehl/g, 'auswähl'],
  [/\bQuarantaen/g, 'Quarantän'],
  [/\bquarantaen/g, 'quarantän'],
  [/\bAenderung/g, 'Änderung'],
  [/\baenderung/g, 'änderung'],
  [/\bAenderun/g, 'Änderun'],
  [/\baenderun/g, 'änderun'],
  [/\bAnhoerun/g, 'Anhörun'],
  [/\banhoerun/g, 'anhörun'],
  [/\bAnhoerung/g, 'Anhörung'],
  [/\banhoerung/g, 'anhörung'],
  [/\bAngehoer/g, 'Angehör'],
  [/\bangehoer/g, 'angehör'],
  [/\bVollstaend/g, 'Vollständ'],
  [/\bvollstaend/g, 'vollständ'],
  [/\bZugaeng/g, 'Zugäng'],
  [/\bzugaeng/g, 'zugäng'],
  [/\bFlaechen/g, 'Flächen'],
  [/\bflaechen/g, 'flächen'],
  [/\bKanaele\b/g, 'Kanäle'],
  [/\bkanaele\b/g, 'kanäle'],
  [/\bGeraet/g, 'Gerät'],
  [/\bgeraet/g, 'gerät'],
  [/\bGebaeu/g, 'Gebäu'],
  [/\bgebaeu/g, 'gebäu'],
  [/\bBahnhoef/g, 'Bahnhöf'],
  [/\bbahnhoef/g, 'bahnhöf'],
  [/\bFlughaef/g, 'Flughäf'],
  [/\bflughaef/g, 'flughäf'],
  [/\bKrankenhaeus/g, 'Krankenhäus'],
  [/\bkrankenhaeus/g, 'krankenhäus'],
  [/\bHaeuser\b/g, 'Häuser'],
  [/\bhaeuser\b/g, 'häuser'],
  [/\bStaedt/g, 'Städt'],
  [/\bstaedt/g, 'städt'],
  [/\bGrossst/g, 'Großst'],
  [/\bgrossst/g, 'großst'],
  [/\bFuehrerschein/g, 'Führerschein'],
  [/\bfuehrerschein/g, 'führerschein'],
  [/\bFuehrerbeh/g, 'Führerbeh'],
  [/\bfuehrerbeh/g, 'führerbeh'],
  [/\bBegruend/g, 'Begründ'],
  [/\bbegruend/g, 'begründ'],
  [/\bVerguet/g, 'Vergüt'],
  [/\bverguet/g, 'vergüt'],
  [/\bWiderspruech/g, 'Widersprüch'],
  [/\bwiderspruech/g, 'widersprüch'],
  [/\bWillkuerl/g, 'Willkürl'],
  [/\bwillkuerl/g, 'willkürl'],
  [/\bAusserhalb\b/g, 'Außerhalb'],
  [/\bausserhalb\b/g, 'außerhalb'],
  [/\bAussenwelt\b/g, 'Außenwelt'],
  [/\baussenwelt\b/g, 'außenwelt'],
  [/\bAussen/g, 'Außen'],
  [/\baussen/g, 'außen'],
  [/\bMassnahm/g, 'Maßnahm'],
  [/\bmassnahm/g, 'maßnahm'],
  [/\bStrasse\b/g, 'Straße'],
  [/\bstrasse\b/g, 'straße'],
  [/\bStrassen\b/g, 'Straßen'],
  [/\bstrassen\b/g, 'straßen'],
  [/\bBenoet/g, 'Benöt'],
  [/\bbenoet/g, 'benöt'],
  [/\bErklaer/g, 'Erklär'],
  [/\berklaer/g, 'erklär'],
  [/\bZaehl/g, 'Zähl'],
  [/\bzaehl/g, 'zähl'],
  [/\bAuslaend/g, 'Ausländ'],
  [/\bauslaend/g, 'ausländ'],
  [/\bVermoegen\b/g, 'Vermögen'],
  [/\bvermoegen\b/g, 'vermögen'],
  [/\bGenuegend\b/g, 'Genügend'],
  [/\bgenuegend\b/g, 'genügend'],
  [/\bSchluessel/g, 'Schlüssel'],
  [/\bschluessel/g, 'schlüssel'],
  [/\bSchutzmassnah/g, 'Schutzmaßnah'],
  [/\bschutzmassnah/g, 'schutzmaßnah'],
  [/\bVerschaerf/g, 'Verschärf'],
  [/\bverschaerf/g, 'verschärf'],
  [/\bGeschwaecht\b/g, 'Geschwächt'],
  [/\bgeschwaecht\b/g, 'geschwächt'],

  // Spezialfälle
  [/\bGrueene\b/g, 'Grüne'],
  [/\bgrueene\b/g, 'grüne'],
  [/\bGruene\b/g, 'Grüne'],
  [/\bgruene\b/g, 'grüne'],

  // === Composite-Catch-all (ohne Word-Boundary) ===
  // Greift in zusammengesetzten Wörtern wie "Kommunikationsueberwachung",
  // "Überwachungskapazitaeten". Wird NACH allen \b-Pattern angewendet, damit
  // bereits gefixte Strings (Ueber → Über) nicht doppelt behandelt werden.
  [/ueberwach/g, 'überwach'],
  [/Ueberwach/g, 'Überwach'],
  [/ueberpruef/g, 'überprüf'],
  [/Ueberpruef/g, 'Überprüf'],
  [/kapazitaet/g, 'kapazität'],
  [/Kapazitaet/g, 'Kapazität'],
  [/kanaele/g, 'kanäle'],
  [/Kanaele/g, 'Kanäle'],
  [/kanael/g, 'kanäl'],
  [/Kanael/g, 'Kanäl'],
  [/buerger/g, 'bürger'],
  [/Buerger/g, 'Bürger'],
  [/haeuser/g, 'häuser'],
  [/Haeuser/g, 'Häuser'],
  [/hoefe/g, 'höfe'],   // Bahnhöfe
  [/Hoefe/g, 'Höfe'],
  [/haefen/g, 'häfen'], // Flughäfen
  [/Haefen/g, 'Häfen'],
  [/staedte/g, 'städte'],
  [/Staedte/g, 'Städte'],
  [/maerkte/g, 'märkte'],
  [/Maerkte/g, 'Märkte'],
  [/raeume/g, 'räume'],
  [/Raeume/g, 'Räume'],
  [/raeumen/g, 'räumen'],
  [/Raeumen/g, 'Räumen'],
  [/laeufe/g, 'läufe'],
  [/Laeufe/g, 'Läufe'],
  [/maenner/g, 'männer'],
  [/Maenner/g, 'Männer'],
  [/oeffentlich/g, 'öffentlich'],
  [/Oeffentlich/g, 'Öffentlich'],
  [/aenderung/g, 'änderung'],
  [/Aenderung/g, 'Änderung'],
  [/anhoerung/g, 'anhörung'],
  [/Anhoerung/g, 'Anhörung'],

  // === Suffix-Regeln für häufige Nomen-Endungen ===
  // -itaet → -ität (Universität, Kapazität, Kriminalität, Aktualität,
  // Stabilität, Nationalität, Realität, Diversität, Mobilität, Identität...)
  [/itaet/g, 'ität'],
  [/Itaet/g, 'Ität'],
  // -itaer → -itär (autoritär, militär, humanitär, totalitär)
  [/itaer/g, 'itär'],
  [/Itaer/g, 'Itär'],
  // -taet → -tät (Pietät, Sozietät — seltener, aber sicher)
  // (überlappt mit itaet oben — itaet hat Vorrang durch früheren Match)

  // Typo-Fixes (Original-Falschschreibungen, die im Audit aufgefallen sind)
  [/veroffentl/g, 'veröffentl'],
  [/Veroffentl/g, 'Veröffentl'],
  [/Massenueberwachung/g, 'Massenüberwachung'],
  [/massenueberwachung/g, 'massenüberwachung'],

  // === Zweite Welle: weitere häufige Verb-/Adjektiv-Stämme ===
  [/\bgewaehr/g, 'gewähr'],
  [/\bGewaehr/g, 'Gewähr'],
  [/\bkuenft/g, 'künft'],
  [/\bKuenft/g, 'Künft'],
  [/\bjaehr/g, 'jähr'],
  [/\bJaehr/g, 'Jähr'],
  [/\bschaetz/g, 'schätz'],
  [/\bSchaetz/g, 'Schätz'],
  [/\bgesuender\b/g, 'gesünder'],
  [/\bGesuender\b/g, 'Gesünder'],
  [/\bnaeher\b/g, 'näher'],
  [/\bNaeher\b/g, 'Näher'],
  [/\bgrundsaetzl/g, 'grundsätzl'],
  [/\bGrundsaetzl/g, 'Grundsätzl'],
  [/\baerztl/g, 'ärztl'],
  [/\bAerztl/g, 'Ärztl'],
  [/\bAerzt/g, 'Ärzt'],
  [/\baerzt/g, 'ärzt'],
  [/\bjuenger\b/g, 'jünger'],
  [/\bJuenger\b/g, 'Jünger'],
  [/\bvoellig\b/g, 'völlig'],
  [/\bVoellig\b/g, 'Völlig'],
  [/\bzulaess/g, 'zuläss'],
  [/\bZulaess/g, 'Zuläss'],
  [/\bunzulaess/g, 'unzuläss'],
  [/\bUnzulaess/g, 'Unzuläss'],
  [/\baufloes/g, 'auflös'],
  [/\bAufloes/g, 'Auflös'],
  [/\bzustaend/g, 'zuständ'],
  [/\bZustaend/g, 'Zuständ'],
  [/\bplaen/g, 'plän'],
  [/\bPlaen/g, 'Plän'],
  [/\berlaeut/g, 'erläut'],
  [/\bErlaeut/g, 'Erläut'],
  [/\bschluess/g, 'schlüss'],
  [/\bSchluess/g, 'Schlüss'],
  [/\bsuedlich/g, 'südlich'],
  [/\bSuedlich/g, 'Südlich'],
  [/\bnoerd/g, 'nörd'],
  [/\bNoerd/g, 'Nörd'],
  [/\bunterstuetz/g, 'unterstütz'],
  [/\bUnterstuetz/g, 'Unterstütz'],
  [/\bschuetz/g, 'schütz'],
  [/\bSchuetz/g, 'Schütz'],
  [/\bgekuendigt\b/g, 'gekündigt'],
  [/\bGekuendigt\b/g, 'Gekündigt'],
  [/\bkuendig/g, 'kündig'],
  [/\bKuendig/g, 'Kündig'],
  [/\bgespraech/g, 'gespräch'],
  [/\bGespraech/g, 'Gespräch'],
  [/\bgeschaef/g, 'geschäf'],
  [/\bGeschaef/g, 'Geschäf'],
  [/\btraegt\b/g, 'trägt'],
  [/\bTraegt\b/g, 'Trägt'],
  [/\bbetraegt\b/g, 'beträgt'],
  [/\bBetraegt\b/g, 'Beträgt'],
  [/\baeusser/g, 'äußer'],
  [/\bAeusser/g, 'Äußer'],
  [/\baeusst/g, 'äußt'],
  [/\bAeusst/g, 'Äußt'],
  [/\bweissen?\b/g, m => m.replace('ss', 'ß').replace('SS', 'ß')],

  // === Dritte Welle: noch verbleibende häufige Stämme ===
  // groß-Wortfamilie (Achtung: nur als Wortanfang um "Großbritannien"-Konflikte zu vermeiden)
  [/\bGrossen\b/g, 'Großen'],
  [/\bgrossen\b/g, 'großen'],
  [/\bGrosser\b/g, 'Großer'],
  [/\bgrosser\b/g, 'großer'],
  [/\bGrosse\b/g, 'Große'],
  [/\bgrosse\b/g, 'große'],
  [/\bGrossem\b/g, 'Großem'],
  [/\bgrossem\b/g, 'großem'],
  [/\bGrossteil/g, 'Großteil'],
  [/\bgrossteil/g, 'großteil'],
  // Prüf-/prüf-
  [/\bPruef/g, 'Prüf'],
  [/\bpruef/g, 'prüf'],
  // genügen
  [/\bgenuegt\b/g, 'genügt'],
  [/\bGenuegt\b/g, 'Genügt'],
  [/\bgenuegen\b/g, 'genügen'],
  [/\bGenuegen\b/g, 'Genügen'],
  // führend / Führung im Composite
  [/fuehrend/g, 'führend'],
  [/Fuehrend/g, 'Führend'],
  [/fuehrung/g, 'führung'],
  [/Fuehrung/g, 'Führung'],
  // einführung
  [/einfuehrung/g, 'einführung'],
  [/Einfuehrung/g, 'Einführung'],
  // -keit Suffixe (Möglichkeit, Aufmerksamkeit etc.) bleiben sicher, da -keit nicht problematisch
  // Geld-bezogen
  [/Vermoegens/g, 'Vermögens'],
  [/vermoegens/g, 'vermögens'],
  // wirklich / tatsächlich (häufig)
  [/tatsaechl/g, 'tatsächl'],
  [/Tatsaechl/g, 'Tatsächl'],
  [/erwaehnt/g, 'erwähnt'],
  [/Erwaehnt/g, 'Erwähnt'],
  [/erwaehn/g, 'erwähn'],
  [/Erwaehn/g, 'Erwähn'],
  // -wäre / wäre
  [/\bwaere\b/g, 'wäre'],
  [/\bWaere\b/g, 'Wäre'],
  [/\bwaeren\b/g, 'wären'],
  [/\bWaeren\b/g, 'Wären'],
  // gemäß
  [/\bgemaess\b/g, 'gemäß'],
  [/\bGemaess\b/g, 'Gemäß'],
  // ständig
  [/staendig/g, 'ständig'],
  [/Staendig/g, 'Ständig'],
  // erhältlich
  [/erhaelt/g, 'erhält'],
  [/Erhaelt/g, 'Erhält'],
  // -fügen
  [/verfueg/g, 'verfüg'],
  [/Verfueg/g, 'Verfüg'],
  [/zufueg/g, 'zufüg'],
  [/Zufueg/g, 'Zufüg'],
  // Mehrheit / Minderheit (-heit ist OK, aber Stämme)
  [/Maennl/g, 'Männl'],
  [/maennl/g, 'männl'],
  [/Weibl/g, 'Weibl'],  // no-op; "Weibl" hat kein "ei" als problem
  // wesentl, gegenwär
  [/gegenwaert/g, 'gegenwärt'],
  [/Gegenwaert/g, 'Gegenwärt'],
];

/**
 * Pfade in JSON, an denen user-sichtbare deutsche Strings stehen können.
 * Andere Pfade (URL-Slugs, ISO-Codes, EN-Slugs) werden NICHT angefasst.
 */
function isTextField(pathStack) {
  const last = pathStack[pathStack.length - 1];
  // Top-level: name, description
  if (last === 'name' || last === 'description') {
    // Aber NICHT actors[].type oder asm:incidentType-Elemente
    return true;
  }
  // location.name — ist 'name' im Path-Stack
  if (last === 'name' && pathStack.includes('location')) return true;
  // asm:affectedRights[] — Array-Elemente direkt
  // asm:actors[].asm:systems[] — Array-Elemente
  // asm:reverseTimeline[].title|description
  if (last === 'title') return true;
  if (last === 'publisher') return true;
  // Display-Werte sind Strings; sprachneutrale wie phase, type werden über
  // den Pfad ausgeschlossen — siehe walk()
  return false;
}

/**
 * Recursive walker. Wendet die Regeln auf Strings an Pfaden an, die
 * user-sichtbar sind.
 *
 * Konkret:
 *  - root.name (Display-Titel)
 *  - root.description (Volltext)
 *  - root.location.name (Ort)
 *  - root["asm:affectedRights"][] (Strings im Array)
 *  - root["asm:actors"][].name
 *  - root["asm:actors"][]["asm:systems"][] (Strings im Array)
 *  - root["asm:reverseTimeline"][].title
 *  - root["asm:reverseTimeline"][].description
 *  - root["asm:sources"][].title
 *  - root["asm:sources"][].publisher
 *
 * NICHT angefasst:
 *  - "@id" (URL-Slug)
 *  - "addressCountry" (ISO)
 *  - "asm:incidentType[]" (EN-Slugs)
 *  - actors[].type (slug)
 *  - phase (slug)
 *  - date, dates
 *  - asm:metadata.*
 *  - geo.*
 *  - sources[].url|date|type
 */
function applyRules(str) {
  let out = str;
  for (const [pat, rep] of RULES) {
    out = out.replace(pat, rep);
  }
  return out;
}

function processIncident(obj) {
  let changes = 0;
  function setIfChanged(target, key, val) {
    if (typeof val !== 'string') return;
    const fixed = applyRules(val);
    if (fixed !== val) {
      target[key] = fixed;
      changes++;
    }
  }
  function fixStringArray(arr) {
    if (!Array.isArray(arr)) return;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
        const fixed = applyRules(arr[i]);
        if (fixed !== arr[i]) {
          arr[i] = fixed;
          changes++;
        }
      }
    }
  }

  // root.name, root.description
  setIfChanged(obj, 'name', obj.name);
  setIfChanged(obj, 'description', obj.description);

  // location.name
  if (obj.location && typeof obj.location === 'object') {
    setIfChanged(obj.location, 'name', obj.location.name);
  }

  // asm:affectedRights[]
  fixStringArray(obj['asm:affectedRights']);

  // asm:actors[].name, asm:actors[].asm:systems[]
  if (Array.isArray(obj['asm:actors'])) {
    for (const actor of obj['asm:actors']) {
      if (actor && typeof actor === 'object') {
        setIfChanged(actor, 'name', actor.name);
        fixStringArray(actor['asm:systems']);
      }
    }
  }

  // asm:reverseTimeline[].title, .description
  if (Array.isArray(obj['asm:reverseTimeline'])) {
    for (const entry of obj['asm:reverseTimeline']) {
      if (entry && typeof entry === 'object') {
        setIfChanged(entry, 'title', entry.title);
        setIfChanged(entry, 'description', entry.description);
      }
    }
  }

  // asm:sources[].title, .publisher
  if (Array.isArray(obj['asm:sources'])) {
    for (const src of obj['asm:sources']) {
      if (src && typeof src === 'object') {
        setIfChanged(src, 'title', src.title);
        setIfChanged(src, 'publisher', src.publisher);
      }
    }
  }

  return changes;
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry');
  const fileArg = args.find(a => !a.startsWith('--'));

  let files;
  if (fileArg) {
    files = [path.resolve(fileArg)];
  } else {
    files = fs.readdirSync(INCIDENTS_DIR)
      .filter(f => f.endsWith('.json'))
      .map(f => path.join(INCIDENTS_DIR, f));
  }

  let totalChanges = 0;
  let filesChanged = 0;
  const summary = [];

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    let obj;
    try {
      obj = JSON.parse(raw);
    } catch (err) {
      console.error(`[SKIP] ${path.basename(file)} — JSON parse error: ${err.message}`);
      continue;
    }
    const changes = processIncident(obj);
    if (changes > 0) {
      filesChanged++;
      totalChanges += changes;
      summary.push({ file: path.basename(file), changes });
      if (!dryRun) {
        // Pretty-print mit 2-Space-Indent, beibehaltend non-ASCII utf-8
        fs.writeFileSync(file, JSON.stringify(obj, null, 2) + '\n', 'utf8');
      }
    }
  }

  console.log(`\n=== Umlaut-Fix Report ===`);
  console.log(`Mode: ${dryRun ? 'DRY-RUN (no writes)' : 'WRITE'}`);
  console.log(`Files scanned: ${files.length}`);
  console.log(`Files changed: ${filesChanged}`);
  console.log(`Total field-changes: ${totalChanges}\n`);

  summary.sort((a, b) => b.changes - a.changes);
  for (const s of summary.slice(0, 30)) {
    console.log(`  ${s.changes.toString().padStart(3)} changes  ${s.file}`);
  }
  if (summary.length > 30) {
    console.log(`  ... and ${summary.length - 30} more files`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { applyRules, processIncident, RULES };
