# Crowdsourcing — Rechtlicher Rahmen + Pre-Veröffentlichungs-Pflicht-Check

**Status:** Konzept 2026-05-01. Architektur-Verbindlichkeit für **alle** Crowdsourcing-Eingaben (Item 105 Labor-Impact-Cases, künftig Radar-Eingaben, künftig Incident-Meldungen).

**Disclaimer:** Diese Dokumentation ist eine **redaktionelle Risiko-Einschätzung**, keine Rechtsberatung. Vor produktiver Inbetriebnahme der Crowdsourcing-Pipeline soll juristisches Review durch einen IT-Recht-/Medienrecht-Anwalt erfolgen.

---

## 1. Ausgangslage — warum diese Doku

AIStrikeMap erlaubt Nutzern (geplant), **ethisch relevante Vorfälle / Stellen-Veränderungen / Situationen zu melden** — via GitHub Issue Templates. Die Daten landen — nach Kuration — als JSON-Files im öffentlichen Repository und werden auf aistrikemap.org dargestellt.

**Konsequenz:** Die meldende Person liefert Information. Der **Betreiber** (Ironhark / Kommuniziere in) **veröffentlicht und haftet** für die Darstellung. Hier entstehen drei Risiken:

1. **Diskreditierung von Firmen** (Geschäftsehre, UWG, Kreditgefährdung BGB §824)
2. **Diskreditierung von Personen** (Persönlichkeitsrechte GG Art. 2, §823 BGB, §185–187 StGB)
3. **Datenschutz** des Meldenden (DSGVO bei Klarname-Erfassung)

Plus geschäftlicher Wunsch: Ironhark **möchte** zur Qualitätssicherung Klarname + Kontakt der Meldenden erfassen, um Rückfragen stellen zu können.

---

## 2. Rechtliche Grundlagen (Deutschland / EU)

### 2.1 Diskreditierungs-Risiken

| Tatbestand | Norm | Schutzgut |
|---|---|---|
| Üble Nachrede | §186 StGB | Person — unwahre Tatsachenbehauptung |
| Verleumdung | §187 StGB | Person — wider besseres Wissen |
| Beleidigung | §185 StGB | Person — Werturteil |
| Kreditgefährdung | §824 BGB | Unternehmen — unwahre, geschäftsschädigende Tatsachenbehauptung |
| Geschäftsehre | §824 BGB, UWG | Unternehmen |
| Persönlichkeitsrecht | Art. 2 I i.V.m. Art. 1 I GG, §823 BGB | Person |

**Kern-Unterscheidung:**
- **Tatsachenbehauptungen** müssen wahr und belegbar sein. Quellen-Pflicht.
- **Werturteile** sind grundsätzlich von Art. 5 GG (Meinungsfreiheit) gedeckt — **außer** Schmähkritik (Diffamierung steht im Vordergrund, nicht die Sachauseinandersetzung).

### 2.2 Haftung des Betreibers

- **TMG / DSA**: AIStrikeMap ist Hosting-Provider eigener Inhalte (kein Plattform-Privileg wie bei reiner Pinnwand). Damit volle redaktionelle Verantwortung.
- **Notice-and-takedown**: Bei Beanstandung (Anwaltsschreiben, GitHub-Issue mit substantieller Beschwerde) muss schnell reagiert werden — Inhalt prüfen, ggf. binnen 24-48h offline nehmen.
- **Vorab-Prüfungs-Pflicht**: AIStrikeMap kuratiert vor Veröffentlichung — damit übernimmt Betreiber **erhöhte Sorgfaltspflicht**.

### 2.3 DSGVO bei Klarname-Erfassung

- **Rechtsgrundlage** (Art. 6 DSGVO): berechtigtes Interesse (Art. 6(1)(f)) — Qualitätssicherung der Meldungen
- **Datensparsamkeit** (Art. 5(1)(c)): nur das Nötigste erheben
- **Speicherbegrenzung** (Art. 5(1)(e)): nicht länger speichern als nötig
- **Auskunftsrecht** (Art. 15) + Löschungsrecht (Art. 17): Meldende Person kann jederzeit Auskunft + Löschung verlangen
- **Datenschutzerklärung** muss diesen Vorgang abdecken

---

## 3. Drei-Stufen-Veröffentlichungs-Pipeline

### Stufe 1 — Eingang (User-Submission via GitHub Issue)

**Issue-Template** (z. B. `.github/ISSUE_TEMPLATE/ki-entlassung-melden.yml`) erfordert:

**Pflicht-Felder (öffentlich im Issue):**
- Firma / Organisation
- Land
- Datum
- Anzahl betroffener Stellen
- Mind. 1 Quellen-URL (journalistisch oder Pressemitteilung)
- KI-Bezug (Zitat aus der Quelle, nicht eigene Interpretation)
- Kategorie (Branche, Beruf-ISCO falls bekannt)

**Pflicht-Bestätigungen (Checkboxen):**
- ☐ Ich versichere, die Angaben entsprechen nach bestem Wissen den Quellen.
- ☐ Ich verstehe, dass Tatsachenbehauptungen quellengestützt sein müssen, Werturteile klar als Wertung markiert werden.
- ☐ Ich übernehme keine eigenständige Haftung — der Betreiber prüft vor Veröffentlichung.

**Optional (öffentlich oder privat):**
- Klarname Meldender (für Rückfragen — Pflicht bei Personen-betreffenden Meldungen)
- Kontakt (E-Mail, optional)
- Hinweis: "Sie können die Meldung anonym absenden, aber dann erfolgen keine Rückfragen — wir verwerfen sie ggf. ohne weitere Prüfung."

### Stufe 2 — KI-Pre-Check (LLM-gestützte Erst-Prüfung)

Eine GitHub-Action triggert nach Issue-Eröffnung einen LLM-API-Call mit dem Prüf-Prompt (siehe Anhang A). Die KI liefert ein strukturiertes Urteil:

| Prüfdimension | LLM-Ausgabe | Konsequenz |
|---|---|---|
| **Quellen-Belastbarkeit** | strong / weak / missing | weak/missing → Maintainer-Frage an Meldenden |
| **Tatsachen vs. Werturteil** | sauber getrennt / vermischt | vermischt → Maintainer-Edit nötig |
| **Diskreditierungs-Risiko Firma** | none / low / high | high → manueller Anwaltsblick erwägen |
| **Diskreditierungs-Risiko Person** | none / low / high | high → fast immer ablehnen oder Person anonymisieren |
| **Schmähkritik-Indikatoren** | gefunden / nicht gefunden | gefunden → ablehnen |
| **DSGVO-Risiko** | nur öffentliche Personen / Privatperson erkennbar | Privatperson → Anonymisierung Pflicht |

LLM macht **kein endgültiges Veröffentlichungs-Urteil** — nur Vor-Sortierung. Der Mensch entscheidet immer.

### Stufe 3 — Manueller Maintainer-Review + Veröffentlichung

Maintainer (Betreiber selbst oder von ihm benannte Person):

1. Liest Issue + LLM-Urteil
2. Prüft Quellen via Klick (mind. eine eigenständige Verifikation)
3. Entscheidet:
   - **Annehmen** → konvertiert in JSON, committet, schließt Issue mit Verweis
   - **Anpassen + Annehmen** → editiert Wertung/Sprache, dokumentiert die Änderung
   - **Rückfragen** → an Meldenden über Issue-Kommentar
   - **Ablehnen** → mit Begründung, Issue bleibt offen oder wird geschlossen

**Audit-Pflicht:** Jede Veröffentlichung wird per Git-Commit nachvollziehbar dokumentiert (Wer hat was wann veröffentlicht, mit welcher Begründung).

---

## 4. Klarname-Erfassung — Daten-Architektur (Ironhark-Aspekt)

Wunsch: Ironhark möchte Klarname + Kontakt erfassen, um damit "genauer arbeiten zu können" (Rückfragen, Qualitätssicherung, Quellen-Verifikation, Beziehungsaufbau zu Hinweisgebern).

### 4.1 Zwei-Kanal-Trennung

| Kanal | Inhalt | Sichtbarkeit | Speicherort |
|---|---|---|---|
| **Öffentlich** | Firma, Land, Datum, Anzahl, Quellen, AI-Zitat | jeder | `data/labor-impact-cases/*.json` (Repo) |
| **Privat (Ironhark intern)** | Klarname Meldender, E-Mail, Kontext-Notizen, Maintainer-Bemerkungen | nur Maintainer / Ironhark | **NICHT im Repo** — separater verschlüsselter Speicher |

### 4.2 Wo wird "Privat" gespeichert?

**Optionen** (nicht entschieden, eigene Entscheidung in Architektur-Slot):

- **A** — Verschlüsselte JSON-Dateien lokal (Bitwarden, KeePass, Cryptomator-Container)
- **B** — Privates GitHub-Repository (`ironhark-internal/labor-impact-meta`) mit Repo-Sichtbarkeit nur für Ironhark
- **C** — Klassische DSGVO-konforme Datenbank (PostgreSQL etc.) mit Server-Hosting

Pragmatisch für Solo-Betrieb: **B** — privates GitHub-Repo, gleiche Toolchain, einfach zu sichern, kostet nichts. JSON pro Issue mit Klarname/Kontakt/internen Notizen, getrennt vom öffentlichen Datenstand.

### 4.3 DSGVO-Mindestanforderungen

- **Datenschutzhinweis** im Issue-Template (Link auf `datenschutz.html`)
- **`datenschutz.html`** ergänzen um Abschnitt "Crowdsourcing-Meldungen" mit:
  - Welche Daten werden erfasst (Klarname, E-Mail, Kontext)
  - Rechtsgrundlage (berechtigtes Interesse, Art. 6(1)(f) DSGVO)
  - Zweck (Qualitätssicherung, Rückfragen)
  - Speicherdauer (z. B. 5 Jahre nach letzter Aktivität)
  - Empfänger (Ironhark intern, keine Weitergabe)
  - Rechte (Auskunft, Löschung) — Kontakt-E-Mail
- **Anonyme Meldungen erlauben**: Wer keine Klarnamen-Erfassung will, kann anonym melden — Konsequenz: keine Rückfragen, ggf. Verwerfung.

---

## 5. Was diese Doku **nicht** klärt

(Punkte für eigene Architektur-Slots oder spätere juristische Prüfung)

- Konkrete Anwalts-Verifikation der Pipeline
- Ob NY-Style "AI-Disclosure-Pflicht" auf eingehende Meldungen anwendbar gemacht werden soll
- Notice-and-takedown-Workflow im Detail (wer reagiert, wie schnell, wie wird dokumentiert)
- Versicherungs-Frage (Medien-Haftpflicht)
- Cross-Border-Aspekte: was wenn deutsche Firma im US-Issue diskreditiert wird?

---

## 6. Anhang A — Prompt-Skelett für KI-Pre-Check

Skizze für die LLM-API. Wird in eigenem Implementierungs-Slot ausgearbeitet.

```text
SYSTEM: Du bist Pre-Check-Assistent für AIStrikeMap-Crowdsourcing-Meldungen.
Prüfe die folgende User-Submission gegen die definierten Kriterien.
Liefere strukturiertes Urteil (JSON), kein endgültiges Veröffentlichungs-Verdikt.

USER-SUBMISSION:
{issue_body}

PRÜFUNG:
1. quellen_belastbarkeit: strong | weak | missing
2. tatsachen_werturteil_trennung: clean | mixed
3. diskreditierungs_risiko_firma: none | low | high (mit Begründung)
4. diskreditierungs_risiko_person: none | low | high (mit Begründung)
5. schmaehkritik_indikatoren: [Liste konkreter Phrasen oder leer]
6. dsgvo_personenbezug: nur_oeffentliche_personen | privatperson_erkennbar | unklar
7. zusammenfassung_2_saetze: was die Meldung sagt, neutral
8. maintainer_empfehlung: annehmen | rueckfrage | anpassen | ablehnen (mit Kurz-Begründung)
```

---

## 7. Verbindung zu anderen Modulen

| Modul | Bezug |
|---|---|
| **Item 105 Labor-Impact-Cases** | Erstes Modul mit Crowdsourcing-Eingang. Diese Doku gilt für `.github/ISSUE_TEMPLATE/ki-entlassung-melden.yml` |
| **Item 103 Live-Radar** | Aktuell rein redaktionell. Falls künftig Crowdsourcing eröffnet wird, gilt diese Doku |
| **Incident-Karte (Phase 1)** | Bestehender Issue-Template `vorfall-melden.yml` muss gegen diese Doku abgeglichen und erweitert werden (DSGVO-Hinweis + KI-Pre-Check) |
| **Item 107 Auto-Update-Architektur** | KI-Pre-Check-Pipeline kann technisch mit Auto-Update geteilt werden (gleicher LLM-API-Setup) |
| **Datenschutz-Page** | Muss Crowdsourcing-Abschnitt bekommen — eigener Mini-Slot |
| **Methodik-Page** | Muss erläutern: "Wir kuratieren — KI-Pre-Check + manuelle Review — keine ungeprüfte Veröffentlichung" |

---

*Konzept erstellt: 2026-05-01*
*Status: Architektur-Konzept; juristische Verifikation vor produktiver Crowdsourcing-Inbetriebnahme erforderlich*
