# Supabase

Status: Freigegeben als Basis fuer die naechsten Planungsaufgaben.

Grundlage: `specs/00-global-spec/global-spec.md`, `specs/01-functional-map/functional-map.md`, `specs/02-feature-specs/kfz-gutachten.md`, `specs/02-feature-specs/digitale-schadenaufnahme.md`, `specs/02-feature-specs/ki-voranalyse.md`, `specs/02-feature-specs/contact-flow.md`, `specs/02-feature-specs/seo.md`, `specs/02-feature-specs/faq.md`, `specs/02-feature-specs/mehrsprachigkeit.md`, `specs/03-technical-specs/frontend.md`, `specs/03-technical-specs/routing.md` und `specs/03-technical-specs/data-model.md`.

## 1. Kurzueberblick / Executive Summary

Supabase ist als spaetere Datenplattform fuer Schadenanfragen, Uploads, interne Pruefung und KI-Voranalyse geplant.

Diese Spec ist keine Supabase-Integration.

In dieser Aufgabe werden keine Packages, Environment-Variablen, Clients, Tabellen, Migrationen, Storage Buckets, Policies oder RLS-Regeln erstellt.

Supabase darf erst nach Datenschutzpruefung, Datenmodell-Freigabe, technischer Umsetzungsplanung, Workflow-Aufgabe und ausdruecklicher Freigabe umgesetzt werden.

Version 1 bedeutet nicht automatisch Supabase-Speicherung, Website-Upload oder KI-Verarbeitung.

## 2. Version 1 und Zielversion

### Version 1 / erste veroeffentlichbare Website

Version 1 umfasst als Supabase-Planungsgrenze:

- strukturierte Kontaktaufnahme / Anfragevorbereitung
- Telefon, WhatsApp und E-Mail als Kontaktwege
- Formular nur, wenn es zum Launch umgesetzt und freigegeben ist
- keine Supabase-Speicherung als live Funktion
- kein Website-Upload als live Funktion
- keine KI-Verarbeitung als live Funktion
- keine Admin-/Portal-Funktion als live Funktion

Wenn kein Formular freigegeben ist, werden keine Formular-Pflichtfelder als Live-Anforderung vorausgesetzt.

### Zielversion / Roadmap

Die Zielversion kann spaeter umfassen:

- Schadenanfragen speichern
- Kontakt- und Fahrzeugdaten speichern
- Schadenbeschreibung speichern
- Schadenbilder und Dokumente ueber Storage speichern
- Bearbeitungsstatus verwalten
- interne Notizen ermoeglichen
- interne Gutachterpruefung unterstuetzen
- spaetere KI-Voranalyse-Ergebnisse speichern
- optional spaeter Adminbereich
- optional spaeter Kundenportal

Roadmap-Funktionen duerfen nicht als Bestandteil von Version 1 dargestellt werden.

## 3. Grundsatz und Abgrenzung

Supabase wird in dieser Phase nur geplant.

Keine Supabase-Integration in dieser Aufgabe.

Nicht Teil dieser Aufgabe:

- Installation von Supabase-Paketen
- Environment-Variablen
- Supabase Client
- Tabellen
- Migrationen
- Storage Buckets
- RLS-/Policy-Regeln
- Auth-/Rollen-Implementierung
- Upload-Implementierung
- Admin-/Portal-Implementierung
- KI-Integration

Keine Installation, keine Environment-Variablen, keine Tabellen und keine Storage-Buckets ohne Datenschutzklaerung, Datenmodell-Freigabe, technische Umsetzungsplanung, Workflow-Aufgabe und ausdrueckliche Freigabe.

Supabase-URLs, API Keys, Service Role Keys und sonstige Secrets duerfen nicht im Code, in Specs, in Logs, in Screenshots oder in Commits veroeffentlicht werden.

Environment-Variablen duerfen erst nach technischer Umsetzungsplanung und ausdruecklicher Freigabe angelegt oder geaendert werden.

Service Role Keys duerfen niemals im Frontend verwendet werden.

Welche Keys in lokaler, Staging- und Production-Umgebung benoetigt werden, muss spaeter in der Supabase-Umsetzungsaufgabe geklaert werden.

## 4. Bezug zum Data Model

`specs/03-technical-specs/data-model.md` ist die fachliche Grundlage fuer spaetere Supabase-Strukturen.

Supabase-Strukturen duerfen nicht vom freigegebenen Datenmodell abweichen, ohne dass eine neue Freigabe erfolgt.

Die spaetere Supabase-Struktur muss die Datenklassifizierung aus `specs/03-technical-specs/data-model.md` beruecksichtigen.

Tabellen, Storage Buckets, Policies, Rollen und Zugriff duerfen nicht nur nach technischer Bequemlichkeit geplant werden, sondern muessen sich nach Sensibilitaet und Zweckbindung der Daten richten.

Besonders sensible Bereiche wie Schadenbilder, Dokumente, Kennzeichen, FIN, Versicherungsdaten, KI-Ergebnisse und interne Notizen brauchen strengere Zugriffs-, Speicher- und Loeschregeln.

Tabellen, Felder, Beziehungen, Statuswerte und Storage-Strukturen werden erst spaeter final festgelegt.

Neue Datenfelder oder Beziehungen duerfen nicht spontan waehrend Frontend-, Routing-, Content-, SEO- oder sonstigen Umsetzungsaufgaben entstehen.

Wenn spaeter ein neues Datenfeld oder eine neue Beziehung notwendig erscheint, muss dies dokumentiert und vor Umsetzung freigegeben werden.

## 5. Geplante Supabase-Datenbereiche

Geplante Supabase-Datenbereiche:

- Schadenanfragen
- Kontaktdaten
- Fahrzeugdaten
- Schadenbeschreibung
- Bearbeitungsstatus
- interne Notizen
- Uploads / Schadenbilder
- Dokumente
- Einwilligungen / Datenschutzbestaetigungen
- spaetere KI-Voranalyse-Ergebnisse
- technische Metadaten
- optional spaeter Rollen / interne Benutzer
- optional spaeter Kundenportal-Zugriffe

Nicht alle Datenbereiche sind Teil von Version 1.

Upload, KI, Rollen und Portal sind Roadmap, solange sie nicht durch eigene Specs, Datenschutzpruefung, technische Umsetzungsplanung, Workflow-Aufgabe und ausdrueckliche Freigabe freigegeben sind.

## 6. Tabellen / Schema-Leitplanken

Diese Spec legt keine finale Tabellenstruktur fest.

Moegliche Tabellen duerfen hoechstens als spaetere Planungsbereiche verstanden werden.

Finale Tabellenstruktur wird erst in einer eigenen Supabase-Umsetzungsaufgabe festgelegt.

Schema-Aenderungen brauchen eigene Freigabe.

Keine spontanen Tabellen- oder Feldaenderungen waehrend anderer Aufgaben.

Spaetere Aenderungen an Tabellen, Feldern, Beziehungen, Statuswerten oder technischen Metadaten duerfen nur ueber eigene freigegebene Technical Specs und Workflow-Aufgaben erfolgen.

## 7. Storage-Leitplanken

Storage ist Roadmap.

In dieser Aufgabe werden keine Storage Buckets erstellt.

Spaeter speichern koennen:

- Schadenbilder
- Gesamtansichten des Fahrzeugs
- Nahaufnahmen des Schadens
- zusaetzliche Perspektiven
- optional Fahrzeugschein / Zulassungsbescheinigung Teil I, nur wenn erforderlich
- optional weitere relevante Dokumente, nur wenn erforderlich und datenschutzrechtlich sauber geregelt

Schadenbilder, Dokumente und Zulassungsbescheinigung sind sensible Daten.

Uploads duerfen erst nach Upload-/Supabase-Spec, Datenschutzpruefung, Storage-Konzept, Einwilligungstexten, technischem Umsetzungsplan, Workflow-Aufgabe und ausdruecklicher Freigabe gespeichert werden.

Dateitypen, Dateigroessen, Speicherort, Zugriff, Loeschung und Viren-/Sicherheitspruefung bleiben offen.

Bildabstimmung ueber WhatsApp oder E-Mail ist nicht Website-Upload und nicht automatisch Supabase Storage.

Bilder oder Dokumente aus WhatsApp oder E-Mail duerfen nicht automatisch in Supabase uebernommen werden, solange dafuer kein freigegebener Prozess mit geklaerter Datenschutz- und Einwilligungslogik besteht.

## 8. RLS, Policies, Rollen und Zugriff

Zugriff auf Anfragen, Uploads, Dokumente, KI-Ergebnisse und interne Notizen ist nicht oeffentlich.

Keine produktive Speicherung von Schadenanfragen, Uploads, Dokumenten, KI-Ergebnissen oder internen Notizen ohne freigegebenes RLS-/Policy-Konzept.

Produktive Tabellen mit personenbezogenen oder sensiblen Daten duerfen nicht ohne aktivierte und gepruefte RLS-/Policy-Regeln verwendet werden.

RLS, Policies, Rollen und Zugriffstests muessen vor produktiver Nutzung umgesetzt und geprueft sein.

Wenn RLS oder Policies fehlen, unklar sind oder fehlschlagen, darf Supabase nicht fuer echte Kundendaten genutzt werden.

Policies werden nicht in dieser Spec definiert.

Rollen und Rechte bleiben offen.

Moegliche spaetere Rollen oder Zugriffskontexte:

- Admin
- Gutachter
- interne Bearbeitung
- Kunde / Portal

Kein oeffentlicher Lesezugriff auf sensible Daten.

Zugriff muss minimal, zweckgebunden und nachvollziehbar geplant werden.

Zugriff muss sich nach Sensibilitaet und Zweckbindung der Daten richten, nicht nach technischer Bequemlichkeit.

## 9. Datenschutz, Einwilligung und Speicherfristen

Datenschutz- und Einwilligungslogik muss vor Umsetzung geklaert werden.

Speicherfristen und Loeschlogik muessen vor Umsetzung geklaert werden.

Auskunft, Export / Portabilitaet und Loeschung muessen vor Umsetzung geklaert werden.

Keine Speicherung sensibler Daten ohne geklaerte Datenschutz- und Einwilligungslogik.

Upload, KI-Verarbeitung und interne Notizen brauchen besondere Pruefung.

Vor produktiver Supabase-Nutzung muessen Backup-, Restore-, Loesch- und Datenbereinigungsprozesse geklaert werden.

Besonders bei Schadenbildern, Dokumenten, personenbezogenen Daten, KI-Ergebnissen und internen Notizen muss klar sein, wie Daten geloescht, wiederhergestellt, exportiert oder bereinigt werden koennen.

Backup- und Restore-Prozesse duerfen Loeschpflichten und Datenschutzanforderungen nicht unterlaufen.

Offen und vor Umsetzung zu klaeren:

- Datenschutztexte
- Einwilligung fuer Upload und Verarbeitung
- Speicherfristen
- Loeschung, Auskunft und Export
- Zugriffskonzept
- Verarbeitung fuer spaetere KI-Voranalyse

Ohne geklaerte Datenschutz- und Einwilligungslogik keine Upload- oder KI-Verarbeitung von Kundendaten.

Diese Spec ersetzt keine Rechtsberatung und keine finale Datenschutzpruefung.

## 10. KI-Voranalyse und Supabase

KI-Voranalyse ist Roadmap.

Keine KI-Datenverarbeitung oder Speicherung ohne technische Umsetzung, Datenschutzpruefung, Anbieter-/Modellentscheidung und ausdrueckliche Freigabe.

KI-Ergebnisse sind intern, unterstuetzend und unverbindlich.

KI ersetzt kein Gutachten und keinen Gutachter.

KI darf keine finale Schadenhoehe, verbindliche Reparaturkosten, Versicherungsentscheidung oder juristische Bewertung speichern oder darstellen.

Kundensichtbare KI-Ergebnisse sind nur nach gesonderter fachlicher, technischer, datenschutzseitiger und rechtlicher Freigabe erlaubt.

## 11. Adminbereich und Kundenportal

Ein Adminbereich ist Roadmap und nicht Teil der ersten reinen Website-Version.

Kein Adminbereich ohne eigene Technical Spec und ausdrueckliche Freigabe.

Ein Kundenportal ist optional spaeter und braucht eine eigene Spec.

Kein Login, keine Auth-Implementierung und kein Rollenmodell in dieser Aufgabe.

Admin-/Portal-Funktionen duerfen nicht sichtbar, verlinkt oder als live dargestellt werden, solange sie nicht umgesetzt und freigegeben sind.

Moegliche spaetere Adminbereich-Funktionen:

- neue Anfragen sehen
- Anfrage-Status verwalten
- Schadenbilder ansehen
- Kundendaten einsehen
- interne Notizen hinterlegen
- KI-Voranalyse-Ergebnisse intern pruefen
- fehlende Unterlagen oder Bilder erkennen

## 12. Datenminimierung und sensible Daten

Nur Daten speichern, die fuer Anfrage, Gutachtenvorbereitung, Beweissicherung, Kontakt oder fachlich und technisch freigegebene interne Prozesse erforderlich sind.

Sensibel behandeln:

- Kennzeichen
- FIN
- Versicherungsdaten
- Schadennummer
- Bilder
- Dokumente
- Kontaktdaten
- personenbezogene Daten Dritter

Keine Ausweisdokumente ohne Notwendigkeit.

Keine unnoetigen Bilder mit fremden Personen.

Keine externen Kommunikationsverlaeufe automatisch importieren oder speichern.

Bilder oder Dokumente aus WhatsApp oder E-Mail duerfen nicht automatisch in Supabase uebernommen werden, solange dafuer kein freigegebener Prozess mit geklaerter Datenschutz- und Einwilligungslogik besteht.

## 13. Nicht-Scope

Supabase plant keine aktiven Datenbereiche fuer:

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

Keine Tabellen, Buckets oder Felder fuer diese Leistungen als aktive Geschaeftsbereiche planen, solange sie nicht ausdruecklich freigegeben sind.

## 14. Pruefungen vor Supabase-Umsetzung

Vor spaeterer Supabase-Umsetzung muss geprueft werden:

- freigegebenes Datenmodell
- finale Tabellen / Felder / Beziehungen
- Pflichtfelder vs. optionale Felder
- RLS-/Security-Konzept
- Security Review vor produktiver Nutzung
- Rollen / Rechte
- Storage-Konzept
- Dateitypen und Dateigroessen
- Datenschutz / Einwilligung
- Speicherfristen / Loeschung / Auskunft / Export
- Backup-/Restore-Konzept
- Loesch- und Datenbereinigungsprozesse
- KI-Datenverarbeitung
- Admin-/Portal-Bedarf
- Secrets-/Environment-Konzept
- lokale / Staging / Production Umgebung
- Rollback-/Migrationsstrategie

Die Pruefung muss vor technischer Umsetzung dokumentiert oder im jeweiligen Umsetzungsplan nachvollziehbar sein.

Migrationen duerfen spaeter nur mit dokumentiertem Plan, Review und Rollback-Ueberlegung durchgefuehrt werden.

## 15. Grenzen / Nicht-Scope dieser Spec

Diese Spec ist keine:

- Supabase-Implementierung
- Package-Installation
- Environment-Konfiguration
- Client-Implementierung
- Datenbankmigration
- finale Tabellenstruktur
- RLS-/Policy-Spec
- Storage-Implementierung
- Upload-Implementierung
- KI-Integration
- Auth-/Login-Implementierung
- Adminbereich-Spec
- Kundenportal-Spec
- Rechtsberatung
- finale Datenschutzpruefung

## 16. Offene Entscheidungen

Offen bleiben:

- finale Tabellenstruktur
- Tabellen / Felder / Beziehungen
- Datenklassifizierung in Supabase-Strukturen
- RLS-/Sicherheitsregeln
- RLS-/Policy-Teststrategie
- Rollen und Rechte
- Storage Buckets
- Dateitypen und Dateigroessen
- Speicherfristen
- Loeschung, Auskunft, Export
- Backup-/Restore-Konzept
- Loesch- und Datenbereinigungsprozesse
- Einwilligungstexte
- Adminbereich
- Kundenportal
- Auth / Login
- KI-Anbieter / Modell
- KI-Datenspeicherung
- Secrets-/Environment-Konzept
- Migration-/Rollback-Plan
- lokale / Staging / Production Umgebung
