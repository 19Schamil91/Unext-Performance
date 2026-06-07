# Data Model

Status: Freigegeben als Basis fuer die naechsten Planungsaufgaben.

Grundlage: `specs/00-global-spec/global-spec.md`, `specs/01-functional-map/functional-map.md`, `specs/02-feature-specs/kfz-gutachten.md`, `specs/02-feature-specs/digitale-schadenaufnahme.md`, `specs/02-feature-specs/ki-voranalyse.md`, `specs/02-feature-specs/contact-flow.md`, `specs/02-feature-specs/seo.md`, `specs/02-feature-specs/faq.md`, `specs/02-feature-specs/mehrsprachigkeit.md`, `specs/03-technical-specs/frontend.md`, `specs/03-technical-specs/routing.md` und `specs/07-open-questions/open-questions.md`, Abschnitt 7.

## 1. Kurzueberblick / Executive Summary

Diese Spec beschreibt geplante Datenbereiche und Datenmodell-Leitplanken fuer den spaeteren Website-Rework.

Sie erzwingt keine finale Tabellenstruktur.

Diese Spec ist keine Supabase-Integration, keine Datenbankmigration, kein Upload-Flow und keine KI-Integration.

Finale Tabellen, RLS-/Sicherheitsregeln, Storage-Struktur und technische Umsetzung werden spaeter in eigenen freigegebenen Specs und Workflow-Aufgaben geplant.

Version 1 bedeutet nicht automatisch Website-Upload, Supabase-Speicherung oder KI-Verarbeitung.

Das Datenmodell muss die reine KFZ-Gutachten-Ausrichtung, Datenminimierung, Datenschutzgrenzen und den klaren Unterschied zwischen Version 1 und Roadmap unterstuetzen.

## 2. Version 1 und Zielversion

### Version 1 / erste veroeffentlichbare Website

Version 1 umfasst als Datenmodell-Planungsgrundlage:

- strukturierte Kontaktaufnahme / Anfragevorbereitung
- Kontakt ueber Telefon, WhatsApp und E-Mail
- Formular nur, wenn es zum Launch umgesetzt und freigegeben ist
- Datenfelder nur als Planungsgrundlage
- keine automatische Website-Upload-Speicherung
- keine Supabase-Speicherung als live Funktion
- keine KI-Verarbeitung als live Funktion
- Bildabstimmung ueber freigegebene Kontaktwege ist nicht gleich Website-Upload

Wenn kein Formular freigegeben ist, werden keine Formular-Pflichtfelder als Live-Anforderung vorausgesetzt.

### Zielversion / Roadmap

Die Zielversion kann spaeter umfassen:

- strukturierte Schadenanfragen
- Website-Upload / Schadenbilder
- Supabase-Speicherung
- interne Gutachterpruefung
- interne KI-Voranalyse
- interne Notizen / Status
- optional spaeter Rollen/Rechte
- optional spaeter Kundenportal

Roadmap-Funktionen duerfen nicht als Bestandteil von Version 1 dargestellt werden.

## 3. Grundsatz und Abgrenzung

Diese Spec beschreibt geplante Datenbereiche.

Sie legt keine finale Tabellenstruktur fest.

Keine Migrationen, Tabellen, Storage Buckets, Policies oder RLS-Regeln werden in dieser Aufgabe erstellt.

Die finale technische Datenstruktur entsteht erst nach Supabase-Spec, Datenschutzpruefung, technischem Umsetzungsplan, Workflow-Aufgabe und ausdruecklicher Freigabe.

Spaetere Aenderungen an Tabellen, Feldern, Storage-Struktur, RLS-Regeln oder Datenbeziehungen duerfen nur ueber eigene freigegebene Technical Specs und Workflow-Aufgaben erfolgen.

Keine spontanen Schema-Aenderungen waehrend Frontend-, Routing-, Content-, SEO- oder sonstigen Umsetzungsaufgaben.

Wenn waehrend der Umsetzung ein neues Datenfeld oder eine neue Beziehung notwendig erscheint, muss dies dokumentiert und vor Umsetzung freigegeben werden.

Das Datenmodell muss Datenminimierung beruecksichtigen.

Nur Daten, die fuer Anfrage, Kontakt, Gutachtenvorbereitung, Beweissicherung, interne Pruefung oder spaeter fachlich und technisch freigegebene Prozesse erforderlich sind, duerfen geplant werden.

## 4. Geplante Datenbereiche

Geplante Datenbereiche:

- Schadenanfragen
- Kontaktdaten
- Fahrzeugdaten
- Schadenbeschreibung
- Schadenbilder / Uploads
- Dokumente
- interne Notizen
- Status / Bearbeitungsstand
- KI-Voranalysen
- Einwilligungen / Datenschutzbestaetigungen
- optional spaeter Benutzer / interne Rollen
- optional spaeter Kundenportal-Zugriffe
- technische Metadaten wie Zeitstempel

Nicht alle Datenbereiche sind Teil von Version 1.

Uploads, Supabase, KI, Rollen und Kundenportal sind Roadmap, solange sie nicht durch eigene Specs, Datenschutzpruefung, technische Umsetzungsplanung, Workflow-Aufgabe und ausdrueckliche Freigabe freigegeben sind.

Geplante Daten sollen spaeter nach Sensibilitaet eingeordnet werden.

Moegliche Einordnung:

- Basisdaten: Name, Telefonnummer, E-Mail-Adresse, bevorzugter Kontaktweg
- Fahrzeugdaten: Marke, Modell, Baujahr, Fahrbereitschaft
- sensible Fahrzeug-/Falldaten: Kennzeichen, FIN, Versicherungsdaten, Schadennummer
- Upload-/Dokumentdaten: Schadenbilder, Dokumente, Zulassungsbescheinigung
- interne Daten: interne Notizen, Status, Bearbeiter, Audit-Informationen
- KI-Daten: interne KI-Zusammenfassungen, Bildqualitaets-Hinweise, erkannte Schadenbereiche

Je sensibler ein Datenbereich ist, desto strenger muessen Erforderlichkeit, Zugriff, Speicherung, Loeschung und Freigabe geprueft werden.

## 5. Schadenanfragen

Die folgenden Felder sind moegliche Leitdaten fuer spaetere Schadenanfragen und bedeuten nicht automatisch, dass alle Felder in Version 1 abgefragt werden.

Voraussichtliche Felder als Planungsgrundlage:

- Name
- Telefonnummer
- E-Mail-Adresse, optional
- bevorzugter Kontaktweg
- Fahrzeugmarke
- Fahrzeugmodell
- Baujahr, falls bekannt
- Kennzeichen, optional
- FIN / Fahrgestellnummer, optional
- Unfall- oder Schadendatum, falls bekannt
- Schadenbeschreibung als Freitext
- Standort des Fahrzeugs oder Ort der Begutachtung, optional
- Versicherungsdaten, falls vorhanden
- Schadennummer, falls vorhanden
- Hinweis, ob das Fahrzeug fahrbereit ist
- Status der Anfrage
- interne Notizen
- Zeitstempel fuer Erstellung und Aktualisierung

Pflichtfelder werden erst im freigegebenen Formular-, Supabase- oder Upload-Plan festgelegt.

Fuer eine erste Anfrage reichen grundsaetzlich wenige Leitdaten wie Name, Telefonnummer, bevorzugter Kontaktweg und kurze Schadenbeschreibung.

Sensible Daten wie Kennzeichen, FIN, Versicherungsdaten und Schadennummer duerfen nur erhoben werden, wenn sie fuer den konkreten Prozess erforderlich sind.

Der Status der Anfrage ist ein spaeterer Planungsbereich. Moegliche neutrale Statusrichtungen:

- neu
- in Pruefung
- Rueckfrage erforderlich
- Termin / Abstimmung
- abgeschlossen
- archiviert

Finale Statuswerte werden spaeter technisch und fachlich freigegeben.

## 6. Kontakt- und Kommunikationsdaten

Telefonnummer und WhatsApp-relevante Telefonnummer sind zentrale Kontaktleitdaten.

E-Mail ist ergaenzend oder optional, solange sie nicht fuer einen bestimmten freigegebenen Prozess erforderlich ist.

Der bevorzugte Kontaktweg darf gespeichert werden, wenn dies fuer Anfragebearbeitung, Rueckfragen oder Terminabstimmung erforderlich ist.

WhatsApp-, Telefon- und E-Mail-Kommunikation sind nicht automatisch Teil des Website-Datenmodells.

Externe Kommunikationsverlaeufe duerfen nicht automatisch importiert, gespeichert oder mit Schadenanfragen verknuepft werden.

Bilder oder Dokumente aus WhatsApp oder E-Mail duerfen nicht automatisch in ein spaeteres Website- oder Supabase-Datenmodell uebernommen werden, solange dafuer kein freigegebener Prozess mit geklaerter Datenschutz- und Einwilligungslogik besteht.

Unnoetige Kommunikationsinhalte sollen nicht gespeichert werden.

Wenn spaeter Kommunikationsinhalte aus WhatsApp, E-Mail oder anderen externen Diensten gespeichert oder verknuepft werden sollen, braucht dies eine eigene fachliche, technische und datenschutzseitige Freigabe.

## 7. Fahrzeugdaten

Moegliche Fahrzeugdaten:

- Fahrzeugmarke
- Fahrzeugmodell
- Baujahr, falls bekannt
- Kennzeichen, optional und sensibel
- FIN / Fahrgestellnummer, optional und sensibel
- Fahrbereitschaft, falls relevant

Fahrzeugdaten koennen zunaechst direkt an der Schadenanfrage haengen.

Eine separate Fahrzeug-Tabelle ist nur bei spaeterem Bedarf zu planen, zum Beispiel bei Kundenportal, mehreren Fahrzeugen pro Kunde oder komplexerer Verwaltung.

## 8. Uploads / Bilder / Dokumente

Geplante Upload-Arten fuer spaetere Ausbaustufen:

- Schadenbilder
- Gesamtansichten
- Nahaufnahmen
- weitere Perspektiven
- optional Zulassungsbescheinigung Teil I
- optional weitere relevante Dokumente

Website-Upload ist Roadmap und nicht automatisch Version 1.

Bildabstimmung ueber freigegebene Kontaktwege ist nicht Website-Upload.

Upload-Daten duerfen erst nach Upload-/Supabase-Spec, Datenschutzpruefung, Storage-Konzept, Einwilligungstexten, technischem Umsetzungsplan, Workflow-Aufgabe und ausdruecklicher Freigabe gespeichert werden.

Bilder und Dokumente sind sensibel.

Dateitypen, Dateigroessen, Speicherort, Zugriff, Loeschung und Viren-/Sicherheitspruefung bleiben offen.

## 9. KI-Voranalysen

KI-Voranalysen sind Roadmap.

KI-Daten duerfen erst nach technischer Umsetzung, Datenschutzpruefung, Anbieter-/Modellentscheidung und ausdruecklicher Freigabe verarbeitet oder gespeichert werden.

Spaeter strukturiert speicherbare KI-Daten koennen umfassen:

- erkannte Schadenbereiche
- Bildqualitaets-Hinweise
- fehlende Perspektiven
- interne Zusammenfassung
- Zeitpunkt der Analyse
- verwendeter Anbieter / Modell, falls technisch und fachlich sinnvoll
- Hinweis, dass es sich nicht um eine finale Bewertung handelt

KI-Ergebnisse sind intern, unterstuetzend und unverbindlich.

KI ersetzt kein Gutachten und keinen Gutachter.

KI darf keine finale Schadenhoehe, verbindliche Reparaturkosten, Versicherungsentscheidung oder juristische Bewertung speichern oder darstellen.

Kundensichtbare KI-Ergebnisse sind nur nach gesonderter fachlicher, technischer, datenschutzseitiger und rechtlicher Freigabe erlaubt.

Anbieter oder Modell duerfen nur gespeichert werden, wenn dies technisch oder fachlich sinnvoll und datenschutzseitig geklaert ist.

## 10. Interne Notizen und Gutachterpruefung

Interne Notizen sollen berechtigten Personen oder Gutachtern helfen, Rueckfragen, Status und Pruefung nachvollziehbar zu dokumentieren.

Nur berechtigte Personen duerfen interne Notizen sehen.

Interne Notizen duerfen keine unnoetigen personenbezogenen Daten oder unbestaetigten Aussagen enthalten.

Die finale Bewertung erfolgt durch einen Gutachter.

Die Trennung zwischen interner Vorpruefung, KI-Voranalyse und finaler Gutachterbewertung muss beachtet werden.

## 11. Einwilligung / Datenschutz / Rechtsgrundlagen

Datenschutz- und Einwilligungslogik wird spaeter separat geprueft.

Einwilligungen oder Datenschutzbestaetigungen koennen spaeter als eigener Datenbereich erforderlich sein.

Zu klaeren ist, welche Einwilligungen fuer Upload, Speicherung, KI-Verarbeitung und Kontaktaufnahme noetig sind.

Vor technischer Umsetzung muessen Speicherfristen, Loeschlogik, Auskunft, Export und Datenbereinigung geklaert werden.

Keine finale Speicherung von Schadenanfragen, Bildern, Dokumenten, KI-Ergebnissen oder internen Notizen ohne definierte Speicher- und Loeschregeln.

Besonders Uploads, Dokumente, KI-Ergebnisse und interne Notizen duerfen nicht unbegrenzt gespeichert werden, solange dafuer keine freigegebene Regel besteht.

Zugriff bleibt ebenfalls offen und muss spaeter zweckgebunden geplant werden.

Keine Verarbeitung sensibler Daten ohne geklaerte Datenschutz- und Einwilligungslogik.

Diese Spec ersetzt keine Rechtsberatung und keine finale Datenschutzpruefung.

## 12. Rollen, Rechte und Zugriff

Rollen und Rechte sind offen und spaeter in einer Supabase-/Security-Spec zu klaeren.

Moegliche spaetere Rollen oder Zugriffskontexte:

- Admin
- Gutachter
- interne Bearbeitung
- Kunde / Portal

Kein oeffentlich lesbarer Zugriff auf Schadenanfragen, Bilder, Dokumente, KI-Ergebnisse oder interne Notizen.

RLS-/Sicherheitsregeln werden in dieser Spec nicht festgelegt.

Zugriff muss minimal, zweckgebunden und nachvollziehbar geplant werden.

## 13. Technische Metadaten und Audit

Zeitstempel fuer Erstellung und Aktualisierung sind sinnvoll.

Moegliche spaetere technische Metadaten:

- Statusaenderung
- Bearbeiter
- Upload-Zeitpunkt
- Analysezeitpunkt

Audit-Logs duerfen keine unnoetigen Inhalte aus Schadenbeschreibungen, internen Notizen, Bildern oder Dokumenten speichern.

Audit- und Protokollierungsbedarf bleibt offen und muss spaeter zweckgebunden, minimal und datenschutzkonform geplant werden.

Keine unnoetige Protokollierung personenbezogener Daten.

## 14. Datenminimierung und sensible Daten

Nur Daten speichern, die fuer Anfrage, Gutachtenvorbereitung, Beweissicherung, Kontakt oder rechtlich und fachlich freigegebene Prozesse erforderlich sind.

Sensibel behandeln:

- Kennzeichen
- FIN
- Versicherungsdaten
- Schadennummer
- Dokumente
- Bilder
- personenbezogene Daten Dritter
- Kontaktdaten

Nicht unnoetig speichern:

- nicht benoetigte Ausweisdokumente
- unnoetige personenbezogene Daten Dritter
- unnoetige Fotos mit fremden Personen
- unnoetige sensible Versicherungsdaten
- Daten ohne Erforderlichkeit fuer Anfrage, Gutachtenvorbereitung, Beweissicherung, Kontakt oder freigegebene interne Pruefung

Keine Ausweisdokumente ohne Notwendigkeit.

Keine Fotos mit fremden Personen, wenn sie fuer den Prozess nicht erforderlich sind.

Keine alten Nicht-Scope-Datenbereiche fuer Mietwagen, Werkstatt, Ersatzwagen, Reifenservice oder aehnliche alte Leistungsbereiche planen.

## 15. Nicht-Scope

Dieses Datenmodell plant keine Datenbereiche fuer aktive:

- Autovermietung
- Mietwagen
- Ersatzwagen
- Fahrzeugservice
- Autoservice
- Werkstatt
- Reifenservice
- Reifenwechsel
- Dashcam-Einbau
- Zulassungsservice
- Abschleppdienst
- Pannenhilfe
- Fahrzeugaufbereitung
- Detailing

Keine Tabellen oder Felder fuer diese Leistungen als aktive Geschaeftsbereiche planen, solange sie nicht ausdruecklich freigegeben sind.

## 16. Pruefungen vor technischer Umsetzung

Vor spaeterer Umsetzung muss geprueft werden:

- finale Formularfelder
- Pflichtfelder vs. optionale Felder
- Datenklassifizierung
- Datenschutz / Einwilligung
- Speicherfristen
- Rollen / Rechte / RLS
- Storage-Konzept
- Dateitypen und Dateigroessen
- Loeschung / Auskunft / Export
- KI-Datenverarbeitung
- interne Notizen und Zugriff
- Audit-/Logging-Konzept
- Umgang mit externen Kommunikationsdaten
- Umgang mit spaeteren Schema-Aenderungen
- Roadmap-Funktionen vs. Version 1
- ob Supabase wirklich fuer die jeweilige Ausbaustufe freigegeben ist

Die Pruefung muss vor technischer Umsetzung dokumentiert oder im jeweiligen Umsetzungsplan nachvollziehbar sein.

## 17. Grenzen / Nicht-Scope dieser Spec

Diese Spec ist keine:

- Supabase-Implementierung
- Datenbankmigration
- finale Tabellenstruktur
- RLS-/Policy-Spec
- Storage-Spec
- Upload-Implementierung
- KI-Integration
- Kundenportal-Spec
- Adminbereich-Spec
- Rechtsberatung
- finale Datenschutzpruefung

## 18. Offene Entscheidungen

Offen bleiben:

- finale Tabellenstruktur
- Pflichtfelder
- Datenklassifizierung
- Speicher- und Loeschregeln
- Rollen und Rechte
- RLS/Sicherheitsregeln
- Storage-Struktur
- Dateitypen und Dateigroessen
- Auskunftsprozesse und Datenbereinigung
- Export / Portabilitaet
- Einwilligungstexte
- KI-Anbieter / Modell
- KI-Datenspeicherung
- interne Notizen
- Audit-/Logging-Konzept
- Umgang mit externen Kommunikationsdaten
- Umgang mit spaeteren Schema-Aenderungen
- ob und wann Kundenportal-Zugriffe entstehen
- ob separate Fahrzeug-, Kunden- oder Benutzertabellen noetig sind
