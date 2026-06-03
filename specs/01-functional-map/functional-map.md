# Functional Map

Status: Freigegeben als Basis fuer die naechsten Planungsaufgaben.

Grundlage: `specs/07-open-questions/open-questions.md`, `specs/00-global-spec/global-spec.md`, bestehende Feature Specs und bestehende Technical Specs.

## Ziel

Diese Functional Map beschreibt die fachlichen Nutzerwege und Funktionsbereiche der neuen UNEXT-Webseite. Sie ist die Bruecke zwischen Global Spec und spaeterem Rework-Plan.

Sie beschreibt keine technische Umsetzung und ersetzt keinen Work Plan.

## 1. Funktionsuebersicht

### Version 1 / erste veroeffentlichbare Website

Version 1 umfasst:

- Information zu KFZ-Gutachten in Berlin
- Gutachtenarten erklaeren
- Vertrauen / Sachverstaendigenkompetenz
- Kontaktwege Telefon, WhatsApp und E-Mail
- Anfrageprozess / Formular als geplanten oder launchabhaengigen strukturierten Anfrageweg
- digitale Schadenaufnahme als Kontakt- und Anfrageprozess
- FAQ
- Impressum
- Datenschutz
- Mobile-First-CTAs
- geplante KI-Unterstuetzung nur korrekt als geplant, in Vorbereitung oder kuenftig integriert kommunizieren, falls KI noch nicht live ist

### Zielversion / Roadmap

Die Zielversion umfasst:

- Foto-Upload
- Supabase-Speicherung
- interne Gutachterpruefung
- KI-gestuetzte Voranalyse
- spaetere Admin-/Portal-Funktionen
- spaetere Kundenportal-/Web-App-Planung

Upload, Supabase und KI sind feste Roadmap-Bestandteile, aber nicht automatisch Teil des ersten Launches.

## 2. Hauptnutzerwege

### Kunde sucht KFZ-Gutachten in Berlin

Ziel:
Der Nutzer versteht sofort, dass UNEXT KFZ-Gutachten in Berlin anbietet.

Funktionen:

- Hero / klare Hauptaussage `KFZ-Gutachten in Berlin`
- Gutachtenarten
- Kontaktmoeglichkeiten
- Vertrauen / Qualifikation
- FAQ

### Kunde hatte Unfall und braucht schnelle Kontaktaufnahme

Ziel:
Der Nutzer kann schnell anrufen oder WhatsApp nutzen.

Funktionen:

- Telefon-CTA
- WhatsApp-CTA
- keine 24/7- oder Sofortdienst-Versprechen
- Vor-Ort-Dokumentation nur nach Verfuegbarkeit

### Kunde moechte Schaden melden

Ziel:
Der Nutzer kann eine erste Schadenmeldung starten.

Funktionen:

- Telefon
- WhatsApp
- E-Mail als ergaenzender Kontaktweg
- strukturierte Anfrage / Formular als geplante oder launchabhaengige Funktion
- kurze Schadenbeschreibung
- digitale Schadenaufnahme zunaechst als Kontakt-/Anfrageprozess, spaeter erweitert um Foto-Upload, Supabase und KI-Voranalyse

### Kunde nutzt die Webseite am Smartphone

Ziel:
Mobile Nutzer sollen schnell und ohne lange Wege handeln koennen.

Funktionen:

- Telefon direkt erreichbar
- WhatsApp direkt erreichbar
- Gutachten anfragen / Schaden melden
- kurze Textabschnitte
- mobile FAQ
- spaeter Foto-Upload per Kamera oder Galerie
- mobile Zeilenumbrueche und CTA-Reihenfolge pruefen

### Kunde moechte spaeter Bilder hochladen

Ziel:
Der Nutzer kann in der Zielversion Schadenbilder digital einreichen.

Funktionen:

- Foto-Upload
- Hinweise zu Bildperspektiven
- Hinweise zu Bildqualitaet
- Upload vom Handy
- Datenschutz-/Einwilligungshinweise
- Supabase Storage
- keine Upload-Funktion als live darstellen, solange technisch nicht umgesetzt

### Mehrsprachiger Nutzer

Ziel:
Der Nutzer kann Inhalte grundsaetzlich auf Deutsch, Russisch oder Englisch verstehen.

Funktionen:

- Deutsch ist fachlich fuehrend
- Russisch und Englisch basieren auf freigegebenen deutschen Inhalten
- keine Sprache darf mehr versprechen als Deutsch
- KI-/Rechts-/Datenschutzformulierungen je Sprache vorsichtig pruefen
- mobile Textlaengen je Sprache beruecksichtigen

### Gutachter / interner Bearbeiter

Ziel:
Interne Bearbeitung soll spaeter strukturierte Anfragen, Bilder und KI-Voranalysen pruefen koennen.

Funktionen:

- Anfrage pruefen
- Bilder ansehen
- interne Notizen
- KI-Voranalyse intern sehen
- finale Bewertung durch Gutachter
- keine automatische finale Entscheidung durch KI

### KI als unterstuetzender Prozess

Ziel:
KI unterstuetzt spaeter intern die Voranalyse, ersetzt aber nicht den Gutachter.

Funktionen:

- sichtbare Schadenbereiche beschreiben
- Bildqualitaet bewerten
- fehlende Perspektiven erkennen
- Zusammenfassung vorbereiten
- keine finale Schadenhoehe
- kein vollstaendiges Gutachten
- keine kundensichtbaren KI-Ergebnisse ohne gesonderte Freigabe

## 3. Version 1 / erste veroeffentlichbare Website

Version 1 umfasst mindestens:

- Startseite / Hauptseite fuer KFZ-Gutachten Berlin
- Gutachtenarten
- Ablauf der Anfrage
- digitale Schadenaufnahme als Kontakt-/Anfrageprozess
- Telefon
- WhatsApp
- E-Mail
- Standort
- Oeffnungszeiten
- FAQ
- Impressum
- Datenschutz
- Mobile-First-CTAs
- korrekte Kommunikation geplanter KI-Unterstuetzung, falls KI erwaehnt wird

Wichtig:

- Formular ist als strukturierter Anfrageweg geplant.
- Ob Formular direkt zum Launch live ist, bleibt launchabhaengig.
- Digitale Schadenaufnahme bedeutet in Version 1 noch nicht automatisch Datei-Upload. Foto-Upload, Supabase-Speicherung und KI-Voranalyse gehoeren erst dann zur aktiven Funktion, wenn sie technisch umgesetzt und freigegeben sind.
- Upload, Supabase und KI duerfen nicht als live dargestellt werden, solange sie technisch nicht umgesetzt sind.
- Kundensichtbare KI-Ergebnisse gehoeren nicht zu Version 1, solange sie nicht gesondert fachlich, technisch und rechtlich freigegeben sind.

## 4. Zielversion / Roadmap

Zur Zielversion / Roadmap gehoeren:

- Foto-Upload
- Supabase-Speicherung von Anfragen und Bildern
- interne Gutachterpruefung
- KI-gestuetzte Voranalyse
- Speicherung von KI-Ergebnissen
- spaeter optional Adminbereich
- spaeter optional Kundenportal / Web-App

Technische Umsetzung erst nach:

- Detail-Spec
- Datenschutzklaerung
- technischem Umsetzungsplan
- Workflow-Aufgabe
- ausdruecklicher Freigabe

## 5. Supabase als Roadmap-Funktionsbereich

Supabase soll spaeter ermoeglichen:

- Schadenanfragen speichern
- Kontakt- und Fahrzeugdaten speichern
- Schadenbilder speichern
- interne Notizen ermoeglichen
- Bearbeitungsstatus verwalten
- KI-Voranalyse-Ergebnisse speichern
- spaetere Admin-/Portal-Funktionen unterstuetzen

Keine Supabase-Integration in dieser Aufgabe.

## 6. Nicht-Scope

Diese Nutzerwege und Funktionen gehoeren nicht zur neuen Functional Map:

- Auto mieten
- Mietwagen buchen
- Ersatzwagen anfragen
- Fahrzeugservice buchen
- Werkstatttermin vereinbaren
- Reifenservice / Reifenwechsel anfragen
- Dashcam-Einbau anfragen
- Zulassungsservice anfragen
- Abschleppdienst / Pannenhilfe anfragen
- Fahrzeugaufbereitung / Detailing buchen

Diese alten Bereiche duerfen nur noch als zu entfernende Altinhalte im Cleanup-Kontext auftauchen.

## 7. Offene Entscheidungen

Offen bleiben:

- konkretes Einzugsgebiet ueber Berlin hinaus
- ob Formular direkt zum Launch live ist
- ob Upload/Supabase/KI beim ersten Launch live sind oder spaeter aktiviert werden
- Launch-Sprachen: Deutsch zuerst oder Deutsch/Russisch/Englisch direkt
- konkrete Rueckmeldefrist/Bearbeitungszeit
- Nutzung von Google-Bewertungen
- weitere Gutachtenarten
- spaetere Admin-/Portal-Funktionen

Offene Entscheidungen duerfen nicht als bestaetigte Leistungen oder Funktionen kommuniziert werden.

## 8. Abhaengigkeiten zu anderen Specs

- Global Spec ist die oberste Leitplanke: `specs/00-global-spec/global-spec.md`
- Feature Specs enthalten Detailregeln: `specs/02-feature-specs/`
- Technical Specs enthalten technische Planung fuer Supabase, Datenmodell und KI: `specs/03-technical-specs/`
- Visual Rules enthalten Mobile-First- und UI-Regeln: `specs/04-visual-rules/visual-rules.md`
- User Stories beschreiben konkrete Nutzerperspektiven: `specs/05-user-stories/user-stories.md`
- Work Plans steuern spaetere konkrete Umsetzung: `specs/06-work-plans/`
