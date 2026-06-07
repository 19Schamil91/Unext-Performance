# AI Analysis

Status: Freigegeben als Basis fuer die naechsten Planungsaufgaben.

Grundlage: `specs/00-global-spec/global-spec.md`, `specs/01-functional-map/functional-map.md`, `specs/02-feature-specs/kfz-gutachten.md`, `specs/02-feature-specs/digitale-schadenaufnahme.md`, `specs/02-feature-specs/ki-voranalyse.md`, `specs/02-feature-specs/contact-flow.md`, `specs/02-feature-specs/seo.md`, `specs/02-feature-specs/faq.md`, `specs/02-feature-specs/mehrsprachigkeit.md`, `specs/03-technical-specs/frontend.md`, `specs/03-technical-specs/routing.md`, `specs/03-technical-specs/data-model.md`, `specs/03-technical-specs/supabase.md` und `specs/07-open-questions/open-questions.md`, Abschnitte 6, 7 und 10.

## 1. Kurzueberblick / Executive Summary

Diese Spec beschreibt technische Leitplanken fuer eine spaetere KI-gestuetzte Voranalyse von Fahrzeugschadenbildern.

Diese Aufgabe ist keine KI-Integration.

In dieser Aufgabe werden keine Dependencies, Environment-Variablen, API-Keys, Clients, Prompts, Model-Auswahl, Upload-, Supabase- oder Admin-Implementierung erstellt.

KI darf erst nach Upload-/Supabase-Grundlage, Datenschutzpruefung, Einwilligungslogik, Anbieter-/Modellentscheidung, technischem Umsetzungsplan, Workflow-Aufgabe und ausdruecklicher Freigabe umgesetzt werden.

Version 1 bedeutet keine aktive KI-Verarbeitung.

## 2. Version 1 und Zielversion

### Version 1 / erste veroeffentlichbare Website

In Version 1 gilt:

- keine KI-Integration
- keine KI-Verarbeitung von Kundendaten
- keine kundensichtbaren KI-Ergebnisse
- digitale Schadenaufnahme nur als Anfragevorbereitung
- Upload, Supabase und KI nicht als live darstellen
- KI hoechstens als geplante Roadmap vorsichtig kommunizieren, wenn fachlich freigegeben

### Zielversion / Roadmap

Die Zielversion kann spaeter umfassen:

- interne KI-Voranalyse von Schadenbildern
- Bildqualitaetspruefung
- Erkennung sichtbarer Schadenbereiche
- Hinweise auf fehlende Perspektiven
- interne Zusammenfassung fuer Gutachter
- Speicherung interner KI-Ergebnisse nur nach Supabase-/Datenschutzfreigabe
- kundensichtbare KI-Hinweise nur nach gesonderter Freigabe

Roadmap-Funktionen duerfen nicht als Bestandteil von Version 1 dargestellt werden.

## 3. Grundsatz und Abgrenzung

Diese Spec ist keine:

- KI-Integration
- Anbieterentscheidung
- Model-Auswahl
- Prompt-Implementierung
- Dependency-Installation
- Environment-Konfiguration
- API-Key-Einrichtung
- Supabase-Integration
- Upload-Implementierung
- Admin-/Portal-Implementierung
- kundensichtbare KI-Funktion

Die Spec plant nur technische Leitplanken fuer spaetere Aufgaben.

## 4. Technische Richtung und Anbieterneutralitaet

Eine spaetere Umsetzung kann ueber eine vision-faehige KI-Schnittstelle erfolgen, zum Beispiel OpenAI oder ein vergleichbarer Anbieter.

Anbieter, Modell und API duerfen nicht hart im Projekt verdrahtet werden.

Die KI-Schicht muss austauschbar geplant werden.

Konkrete Anbieter-/Modellentscheidung gehoert in eine spaetere Umsetzungsaufgabe.

Kein Anbieter-Key oder Secret darf im Frontend, Code, in Logs, Screenshots, Specs oder Commits veroeffentlicht werden.

Service-/API-Keys duerfen nur serverseitig und nach Security-Konzept verwendet werden.

Moegliche spaetere interne Schicht als Beispiel:

```text
/lib/ai/analyzeVehicleDamage.ts
```

Diese Struktur ist nur eine moegliche spaetere Richtung und kein Codeauftrag in dieser Aufgabe.

## 5. Voraussetzungen vor Umsetzung

Vor KI-Umsetzung muessen geklaert und freigegeben sein:

- Upload-/Supabase-Grundlage
- Datenmodell
- Datenschutztexte
- Einwilligung fuer KI-Verarbeitung
- Speicherfristen
- Zugriff auf KI-Ergebnisse
- Loeschung, Auskunft und Export
- Anbieter-/Modellentscheidung
- Prompt-/Output-Konzept
- Security-/Secrets-Konzept
- Kosten-/Rate-Limit-Ueberlegungen
- technische Umsetzungsplanung
- Workflow-Aufgabe
- ausdrueckliche Freigabe

Ohne diese Punkte keine KI-Verarbeitung echter Kundendaten.

## 6. Eingaben

Spaetere Eingaben koennen sein:

- Schadenbilder aus freigegebenem Storage
- Fahrzeugdaten
- Schadenbeschreibung
- Anfrage-ID
- Metadaten zu Upload und Zeitpunkt
- optional Bildqualitaetsinformationen
- optional Nutzerhinweise / Kontext aus der Schadenbeschreibung

Keine Verarbeitung von Bildern oder personenbezogenen Daten ohne Datenschutz-/Einwilligungsfreigabe.

Keine direkte Analyse von WhatsApp-/E-Mail-Bildern ohne freigegebenen Prozess.

Eingaben muessen datenminimal geplant werden.

## 7. Ausgaben / Ergebnisstruktur

Spaeter strukturiert speichern koennen:

- erkannte sichtbare Schadenbereiche
- Bildqualitaets-Hinweise
- fehlende Perspektiven
- interne Zusammenfassung
- Zeitpunkt der Analyse
- verwendeter Anbieter / Modell, falls sinnvoll und freigegeben
- Hinweis, dass es sich nicht um eine finale Bewertung handelt
- Fehler-/Unsicherheitsstatus, falls Analyse nicht zuverlaessig ist

Die Ergebnisstruktur wird spaeter final festgelegt.

KI-Ergebnisse sind intern, unterstuetzend und unverbindlich.

KI-Ergebnisse duerfen nicht ungeprueft fuer fachliche Aussagen, Kundenkommunikation oder interne Entscheidungen verwendet werden.

KI liefert keine finale Schadenhoehe.

KI liefert keine verbindlichen Reparaturkosten.

KI trifft keine Versicherungsentscheidung.

KI gibt keine juristische Bewertung.

KI erstellt nicht automatisch ein Gutachten.

## 8. Interne Nutzung und Kundensichtbarkeit

KI-Ergebnisse sind zunaechst nur intern fuer Gutachter vorgesehen.

Jede fachliche Nutzung von KI-Ergebnissen braucht eine Pruefung durch einen berechtigten Gutachter oder eine berechtigte interne Person.

Die finale Bewertung erfolgt durch einen Gutachter.

KI-Ergebnisse bleiben unterstuetzend, intern und unverbindlich, solange keine gesonderte fachliche, technische, datenschutzseitige und rechtliche Freigabe fuer eine andere Nutzung besteht.

Kundensichtbare KI-Ergebnisse oder KI-Hinweise sind nur nach gesonderter fachlicher, technischer, datenschutzseitiger und rechtlicher Freigabe erlaubt.

Kundensichtbare Ergebnisse muessen als unverbindliche Vorinformation gekennzeichnet werden.

Keine KI-Ergebnisroute, kein Kundenportal und keine Admin-Darstellung ohne eigene Spec und Freigabe.

## 9. Supabase- und Data-Model-Abgrenzung

- Supabase: Datenbank, Storage, Anfrageverwaltung
- KI-Schicht: Analysefunktion
- Adminbereich: spaetere interne Darstellung und Pruefung

Die KI-Schicht darf nicht unkontrolliert mit Datenbank oder Storage vermischt werden.

Speicherung von KI-Ergebnissen ist nur nach Data-Model-/Supabase-Freigabe erlaubt.

Keine KI-Routen, Tabellen, Buckets oder Admin-Komponenten in dieser Aufgabe.

## 10. Datenschutz, Einwilligung und Datenminimierung

Vor Umsetzung klaeren:

- Datenschutztexte
- Einwilligung
- Speicherort
- Speicherfristen
- Zugriff auf KI-Ergebnisse
- Loeschung, Auskunft und Export
- Verarbeitung sensibler Bilder und Fahrzeugdaten
- Anbieter-/Drittland-/AVV-Fragen, falls relevant
- Datenminimierung
- keine unnoetige Speicherung von Rohdaten, Prompts, Modellantworten, Analyseinhalten, Bildern oder personenbezogenen Daten
- keine Verarbeitung ohne Klaerung

Prompts, Modellantworten, Rohdaten und Analyseinhalte duerfen nur gespeichert werden, wenn Zweck, Speicherfrist, Zugriff, Datenschutzgrundlage und Loeschlogik ausdruecklich geklaert und freigegeben sind.

Wenn eine Speicherung fuer Debugging, Qualitaetssicherung, Audit oder spaetere Nachvollziehbarkeit erforderlich erscheint, muss dies vorher fachlich, technisch und datenschutzseitig geprueft und freigegeben werden.

Echte Kundendaten duerfen nicht fuer Tests, Prompt-Experimente, Modellvergleiche oder technische Versuche verwendet werden, solange dafuer keine ausdrueckliche Datenschutz- und Freigabegrundlage besteht.

Fuer Tests und Entwicklung sollen nach Moeglichkeit synthetische, anonymisierte oder ausdruecklich freigegebene Testdaten verwendet werden.

Testdaten duerfen keine unnoetigen personenbezogenen Daten, fremden Kennzeichen, Versicherungsdaten, Dokumente oder Bilder realer Personen enthalten.

Diese Spec ersetzt keine Rechtsberatung und keine finale Datenschutzpruefung.

## 11. Prompt-, Modell- und Output-Planung

Prompt-Format wird in dieser Spec nicht festgelegt.

Output-Schema wird in dieser Spec nicht final festgelegt.

Anbieter und Modell werden in dieser Spec nicht final festgelegt.

Prompts duerfen spaeter keine finalen Schadenhoehen, Reparaturkosten, Versicherungsentscheidungen oder juristische Bewertungen anfordern.

Prompt-/Output-Aenderungen brauchen spaeter Review und Freigabe.

Modellantworten muessen auf Unsicherheit und Grenzen geprueft werden.

Modellantworten duerfen nicht automatisch als fachlich richtige oder vollstaendige Analyse uebernommen werden.

## 12. Sicherheit, Secrets und Logging

API-Keys, Anbieter-Secrets oder andere Zugangsdaten duerfen niemals im Frontend, in Specs, Logs, Screenshots, Commits oder oeffentlich sichtbaren Ausgaben erscheinen.

Keine sensiblen Bilder, Prompts, personenbezogenen Daten oder KI-Ausgaben unnoetig in Logs schreiben oder in Screenshots dokumentieren.

Logging und Audit muessen spaeter zweckgebunden, minimal und datenschutzkonform geplant werden.

Fehlerfaelle duerfen keine sensiblen Daten in Fehlermeldungen offenlegen.

Auch bei Tests duerfen keine Secrets, API-Keys, echten Kundendaten oder sensiblen Bilder in Logs, Screenshots, Commits oder externe Tools gelangen.

Vor produktiver KI-Nutzung ist ein Security Review erforderlich.

## 13. Fehlerfaelle, Unsicherheit und Bildqualitaet

KI kann Bilder falsch interpretieren.

Analyse kann bei schlechter Bildqualitaet, verdeckten Schaeden oder fehlenden Perspektiven unsicher sein.

Fehler-/Unsicherheitsstatus muss spaeter geplant werden.

Bei Unsicherheit lieber interne Rueckfrage oder weitere Bilder anfordern, statt verbindliche Aussage erzeugen.

Bei Fehlern, Unsicherheiten oder fehlender KI-Verfuegbarkeit soll eine interne Pruefung oder Rueckfrage erfolgen, statt eine automatische oder verbindliche Aussage zu erzeugen.

KI darf keine sichere Erkennung aller Schaeden versprechen.

## 14. Kosten, Rate Limits und Betrieb

Kosten, Rate Limits, Timeouts und Wiederholungen muessen spaeter geprueft werden.

Keine automatische Massenauswertung ohne Freigabe.

Betrieb und Monitoring muessen spaeter geplant werden.

Fehler- und Ausfallverhalten muessen spaeter geplant werden.

Wenn KI-Auswertung fehlschlaegt, nicht verfuegbar ist, ein Timeout auftritt oder ein Rate Limit erreicht wird, muss der Anfrageprozess ohne KI fortgesetzt werden koennen.

KI darf den Kontaktflow, die Anfragevorbereitung, die interne Pruefung oder die weitere Abstimmung mit dem Kunden nicht blockieren.

## 15. Mehrsprachigkeit

KI-Kommunikation und Disclaimer muessen in allen freigegebenen Sprachen gleich vorsichtig sein.

Deutsch bleibt fachliche Referenz.

Keine Sprache darf mehr KI-Leistung versprechen als Deutsch.

Kundensichtbare KI-Hinweise duerfen mehrsprachig nur nach Freigabe erscheinen.

## 16. Nicht-Scope

Diese AI Analysis Spec plant nicht:

- KI-Gutachten
- vollautomatisches Gutachten
- automatische Gutachtenerstellung
- finale Schadenhoehe
- verbindliche Reparaturkosten
- Versicherungsentscheidung
- juristische Bewertung
- Haftungsentscheidung
- Ersatz eines Gutachters
- automatische Kundenentscheidung
- aktive Upload-/Supabase-/Admin-/Portal-Umsetzung

## 17. Pruefungen vor KI-Umsetzung

Vor spaeterer Umsetzung pruefen:

- freigegebene KI-Voranalyse-Feature-Spec
- Upload-/Supabase-Grundlage
- Datenmodell
- Datenschutz / Einwilligung
- Anbieter / Modell
- Prompt-/Output-Konzept
- Security-/Secrets-Konzept
- Logging / Audit
- Kosten / Rate Limits
- Fehler-/Fallback-Verhalten
- Testdatenstrategie
- Rohdaten-, Prompt-, Modellantwort- und Analyseinhalte-Speicherung
- menschliche Pruefung / Review-Prozess fuer KI-Ergebnisse
- interne Sichtbarkeit
- Kundensichtbarkeit
- Mehrsprachigkeit
- Reviewer / Security Review
- Workflow-Aufgabe
- ausdrueckliche Freigabe

Die Pruefung muss vor technischer Umsetzung dokumentiert oder im jeweiligen Umsetzungsplan nachvollziehbar sein.

## 18. Grenzen / Nicht-Scope dieser Spec

Diese Spec ist keine:

- KI-Integration
- Anbieterentscheidung
- Model-Auswahl
- Prompt-Implementierung
- API-Client-Implementierung
- Dependency-Installation
- Environment-Konfiguration
- Supabase-Integration
- Upload-Implementierung
- Admin-/Portal-Implementierung
- kundensichtbare KI-Funktion
- Rechtsberatung
- finale Datenschutzpruefung

## 19. Offene Entscheidungen

Offen bleiben:

- Anbieter / Modell
- Prompt-/Output-Format
- Ergebnisstruktur
- Speicherung von KI-Ergebnissen
- Datenschutz / Einwilligung
- Speicherfristen
- Zugriff / Rollen
- Speicherung von Prompts, Modellantworten und Analyseinhalten
- Testdatenstrategie
- Kundensichtbarkeit
- Fehler-/Unsicherheitsstatus
- Fallback-Verhalten bei KI-Ausfall
- menschliche Pruefung / Review-Prozess fuer KI-Ergebnisse
- Kosten / Rate Limits
- Logging / Audit
- Umgang mit Debugging-, QA- und Audit-Daten
- Security Review
- Mehrsprachige KI-Hinweise
- Integration mit Supabase / Adminbereich
