# Übergabe #15 — Redaktionsentscheidungen umgesetzt: Typ-Reform, Aufnahmeregel, Dubletten, ehrliches Prüf-Flag, Kartenkacheln

**Datum:** 2026-10-23
**Vorgänger:** #14 (Sichtung needs-review 120/239) und die Cloud-Linie #13 Nachtrag 7c/7d (PR #93, #231)
**Commits (lokal auf `main`, noch NICHT gepusht):** `b04b328` (Sichtung Welle 4), `81426d6` (Werkzeuge), `538fff8` (Frontend), `698bef1` (Redaktion), `f964f17` (Kartenkacheln), `a90affd` (Aufnahmeregel), dazu dieser Übergabe-Commit

---

## 0. Abstimmung mit der vorigen Session

Lokales `main` war 188 Commits hinter `origin/main`: Die Cloud-Session (Branch `claude/stoic-ride-lt1b0j`) hatte über PR #93 und #231 Link-Check, 243 tote Links, Koordinaten für 413 Incidents, Einzelquellen-Wellen und die Nacharbeit nach dem Merge eingebracht. Per Fast-Forward übernommen; Stand danach: 2452 Incidents, Validator 0 ERRORs, Audit 0. Ihre offene „redaktionelle Prüfliste" (Nachtrag 7) war der Ausgangspunkt dieser Session.

## 1. Sichtung Welle 4 (`b04b328`)

40 needs-review-Kandidaten, Review + adversariale Gegenprüfung mit WebSearch (5/5 + 5/5): **12 verified, 26 rejected, 1 Dublette, 1 offen**. Stand gesamt: 62 verified (promotionsreif), 68 needs-review offen (Wellen 5/6) + 16 alte verified (Zusatzwelle 7).
**Pipeline-Verbesserung:** Prüfer schrieben Nacharbeiten (falsche Quellen entfernen, Akteure ersetzen) nur in `notes`, die nie ausgeführt wurden. Neu: Patch-Felder `remove_sources` und `actors` (`scripts/workflows/review-patch.js`, gemeinsam für `apply-review-verdicts.js` und `apply-manual-patches.js`); Welle 4 per `manual-patches-wave-4.json` nachgezogen (11 Quellen entfernt, 3× Akteure). Wellennummern bleiben über Sessions stabil; die Zusatzwelle erfasst nur nie gesichtete `verified`.

## 2. Redaktionsentscheidungen des Projekteigners (2026-10-23)

Vorlage: `docs/planung/redaktion-entscheidungsvorlage-2026-10-23.md` (44 Fälle, 5 Lese-Agenten ohne Websuche). Freigegeben wurden alle vier Empfehlungen:

| Frage | Entscheidung | Umsetzung |
|---|---|---|
| Aufnahmeregel | KI + algorithmische Systeme | Scope-Prüfung (s. 3), Methodik-Absatz DE/EN |
| Dubletten | Zusammenlegen **mit Verweis** | 11 Gruppen (s. 4) |
| `humanVerified` | korpusweit ehrlich | 182 Incident- + 6 Radar-Dateien auf `false`; Panel/Footer/Transparenztext neu |
| Ausbauten | Robotaxi-Typen + Klarna, Typ-Reform, Weltweit-Element | s. 5–7 |

Nachfrage mit echten Zahlen: Die Aufnahmeregel betraf nicht ~10, sondern 153 Fälle → Entscheidung **„Als Kontextfall"**.

## 3. Aufnahmeregel / Kontextfälle (`a90affd`)

Scope-Prüfung: 345 Fälle ohne KI-Stichwort in Titel/Beschreibung, je Fall ganze Datei gelesen, jede Außerhalb-Einstufung adversarial gegengeprüft (keine Websuche). Ergebnis: 120 KI, 68 algorithmisch, 4 KI vermutet, **153 ohne KI-/Algorithmus-Element** (97 davon Sev 4–5: Spyware, Shutdowns, klassische TK-Überwachung, konventionelle Drohnen …). Liste: `docs/planung/scope-pruefung-2026-10-23.md`.
- **144 Kontextfälle:** `asm:scope: "context"` + `asm:scopeNote`/`_de`/`_en`. Standardmäßig ausgeblendet (Schalter „Kontextfälle ohne KI-Bezug anzeigen"), nicht im Zähler/Ticker, im Panel gekennzeichnet, auf der Karte gestrichelt ohne Puls.
- **10 Rückzüge** (in der Vorlage einzeln freigegeben): Conti, Malaysia, Südsudan, Kaiser Permanente, Nepal, 2× Yoon, Google-BAFTA, Sony, China-Journalisten.
- **70 Klarstellungssätze** (DE/EN) bei algorithmischen Systemen bzw. vermuteter KI.
- Zähler jetzt **2284 Vorfälle in 113 Ländern** (vorher 2450 / 132).

## 4. Dubletten zusammengelegt (`698bef1`)

Verfahren neu: Die Dublette bleibt als zurückgezogener Eintrag mit `asm:mergedInto` (Permalink + Sitemap bleiben gültig, Panel verlinkt), die bleibende Datei bekommt `asm:metadata.mergedFrom` (Array) + `mergeNote`. Je Gruppe Bearbeiter + unabhängiger Prüfer (11/11 ok): Johansson/Sky, Klarna, Mexiko-Pegasus, Ofqual (3→1), VRChat, Proof-News-Wahlstudie, Proctoring, Adobe, Spotify PFC, Glovo, Griechenland. `merge-internal-duplicates.js` (löscht Dateien) nicht mehr verwenden.

## 5. Typ-Reform (`698bef1`)

`data-misuse` war über einen Import-Default (`convert-aiaaic`, `promote-candidates`) zum Sammeltyp für 1327 Fälle geworden. Alle 1327 neu eingeordnet: je Batch zwei unabhängige Klassifizierer, 148 Abweichungen per Schiedsrichter → **1169 geändert**. Neue Typen: `malfunction` 490, `fraud` 218, `copyright` 142, `environmental` 15; `data-misuse` bleibt nur bei Personendaten (381); alle 12 Robotaxi-Fälle → `autonomous-vehicle`. Ergebnisliste `scripts/workflows/typ-reform-2026-10-23.json`. Werkzeug `scripts/apply-incident-types.js` (Text-Edit, minimaler Diff). Import-Tooling ohne Ersatztyp: Kandidaten ohne `incidentType` werden nicht promotet.
⚠️ **Die 62+ verified Kandidaten tragen noch Typen nach altem Schema** → nach der Promotion einmal klassifizieren (gleiche Methode, kleiner Lauf).

## 6. Frontend (`538fff8`, `f964f17`, `a90affd`)

- Button **„Weltweit (n)"** (unten rechts über dem Zoom): Liste der 123 länderübergreifenden Fälle im Panel, Filter/Suche wirken mit; Zähler ohne GLOBAL/EU als „Land".
- Erster Kartenaufbau läuft durch die Filterkette (zurückgezogene Fälle waren bis zur ersten Filteränderung sichtbar).
- Panel: Rückzugs-/Zusammenlegungs-/Kontext-Hinweis oben mit Begründung und Link; ehrliche KI-Kennzeichnung; Popup-Titel lokalisiert.
- 4 neue Typen in Filter, i18n, Methodik (dort auch das fehlende `autonomous-vehicle`).
- **Kartenkacheln:** CARTO liefert `basemaps.cartocdn.com` seit Oktober 2026 an alle Clients ohne API-Schlüssel mit Stempel „API KEY REQUIRED" aus (auch auf aistrikemap.org, per ETag `wm-…` nachgewiesen; Kachel-URL war seit März unverändert). Umgestellt auf **Esri World Dark Gray** (Basis + Beschriftung, ohne Schlüssel) für Hauptkarte, AI-&-Arbeit-Karte und Career-Karte; **Datenschutzerklärung DE/EN angepasst** (Esri statt CARTO). Alternative bei Bedarf: CARTO- oder Stadia-Konto mit Schlüssel/Domainfreigabe.
- i18n +24 Keys je Sprache, i18n-Audit 0 Befunde; alles im Browser DE/EN geprüft.

## 7. Weitere Korrekturen

- **Klarna (AI & Arbeit):** 700 = Arbeitslast-Äquivalenz, keine Entlassungen → neues Feld `headcount_basis: "workload-equivalent"` (gelistet, nicht gezählt), unbelegte Kontextsätze entfernt; Zähler 84.875 → 84.175.
- **6. Fixer-Bug:** `fix-umlaut-transliterations.js` ignorierte `--dry-run` (schrieb trotzdem) und umlautierte Slugs in `asm:mergedInto`/`mergedFrom` → 3 Verweise gebrochen, repariert. Fixer schützt jetzt diese Felder und jedes existierende Slug-Token im Fließtext. Validator prüft `asm:mergedInto` und `asm:scope`.
- `sed -i` im Dropbox-Ordner ist gefährlich (Umbenennen scheiterte, Datei war weg) → für Dateiänderungen `node` oder den Editor benutzen.

## 8. Nächste Schritte (Reihenfolge)

1. **Push freigeben** (Deploy): Die Live-Karte zeigt bis dahin den CARTO-Stempel.
2. **Recherche-Workflow** für die Punkte, die Websuche brauchen (ein Workflow pro Turn): Johansson (WaPo-Bericht über OpenAI-Unterlagen), Lauren Book (Deepfake-Bezug?), Stadtrat-Bots (KI belegt?), australische Psychologin (Verification senken?), Raymundo Ramos (OFAC-Sanktion neutral darstellen, 2 Mexiko-Dateien), Collien Ulmen-Fernandes (Persönlichkeitsrecht, OLG Hamburg), Indonesien + Türkei (unbelegte TL-Sätze), Glovo-Caporalato (Datum 2026-02-09), VRChat (NME-Pfad), ZipRecruiter (auf HireVue zuschneiden).
3. **Korpusweiter Dubletten-Scan** round-6-Importe gegen kuratierte Dateien (Muster: Mata v. Avianca doppelt).
4. **Sichtung Wellen 5, 6+7** (`scripts/workflows/review-wave-5.js` … `-7.js`, schon gebaut), je Welle `apply-review-verdicts.js`.
5. **Promotion** der verified (`pre-promote-check.js` → `promote-candidates.js --min-sources 2`) → **Typ-Klassifizierung der neuen Fälle** → **Timeline-Bau** (`gen-tl-waves.js`, 16 je Turn) → Validator → Bundle.
6. Danach: Career-Daten, AIAAIC Batch D, Slug-Migration.

**Tipp:** Wegen des WebSearch-Kontingents (~200 pro Turn) braucht jede Recherche-/Sichtungs-/TL-Welle einen eigenen Turn. Mit `/loop` (ohne Intervall) kann die Pipeline selbstständig Turn für Turn weiterlaufen.

## Disk-Hygiene

Agenten-Transkripte dieser und der beiden Vorgänger-Sessions geprunt (102 MB + 169 MB → 31 MB, `journal.jsonl` behalten). Verwaiste `data/incidents/*.json.tmp.*` (16 Dateien vom Juni) gelöscht.
