# Digitale Schadenaufnahme

Status: Freigegeben als Basis fuer die naechsten Planungsaufgaben.

Grundlage: `specs/07-open-questions/open-questions.md`, Abschnitt 5, `specs/00-global-spec/global-spec.md`, `specs/01-functional-map/functional-map.md`, `specs/02-feature-specs/kfz-gutachten.md` und bestehende Technical Specs.

## 1. Kurzueberblick / Executive Summary

Diese Spec beschreibt die digitale Schadenaufnahme als zentralen Prozess der Webseite.

Version 1 bedeutet strukturierte Kontaktaufnahme beziehungsweise Anfragevorbereitung.

Foto-Upload, Supabase-Speicherung und KI-Voranalyse sind spaetere Roadmap-Funktionen.

Digitale Schadenaufnahme bereitet die Pruefung vor, ersetzt aber kein Gutachten.

Die finale Bewertung erfolgt immer durch einen Gutachter.

## 2. Version 1 und Zielversion

### Version 1 / erste veroeffentlichbare Website

Version 1 umfasst:

- digitale Schadenaufnahme als Kontakt-/Anfrageprozess
- Telefon
- WhatsApp
- E-Mail
- launchabhaengiges Formular
- kurze Schadenbeschreibung
- Abstimmung weiterer Schritte
- kein Website-Upload, solange er nicht technisch umgesetzt und freigegeben ist
- keine Supabase-/KI-Funktion als live darstellen, solange sie nicht technisch umgesetzt und freigegeben ist

### Zielversion / Roadmap

Die Zielversion umfasst:

- Foto-Upload vom Handy
- Supabase Storage
- strukturierte Schadenanfrage
- interne Gutachterpruefung
- KI-Voranalyse als Unterstuetzung
- spaetere Admin-/Portal-Funktionen

## 3. Zweck der digitalen Schadenaufnahme

Digitale Schadenaufnahme soll ermoeglichen:

- einfache erste Schadenmeldung
- strukturierte Vorbereitung fuer UNEXT
- Sammlung relevanter Kontakt-, Fahrzeug- und Schadeninformationen
- bessere Vorbereitung der Gutachterpruefung

Digitale Schadenaufnahme liefert:

- keine finale Bewertung
- kein vollstaendiges Gutachten
- keine verbindliche Schadenhoehe

## 4. Kontaktwege in Version 1

Kontaktwege in Version 1:

- Telefon
- WhatsApp
- E-Mail
- Formular, wenn es zum Launch umgesetzt und freigegeben ist

WhatsApp kann fuer erste Abstimmung und gegebenenfalls Bildabstimmung genutzt werden, sofern rechtlich und datenschutzseitig sauber formuliert.

Bildabstimmung ueber Kontaktwege ist nicht gleich Website-Upload.

Website-Upload darf erst angeboten, beschrieben oder beworben werden, wenn er technisch umgesetzt, datenschutzseitig geprueft und ausdruecklich freigegeben ist.

## 5. Spaetere Upload-Funktion

Foto-Upload ist eine Kernfunktion der spaeteren digitalen Schadenaufnahme.

Kunden sollen Schadenbilder spaeter direkt vom Handy ueber Kamera oder Galerie hochladen koennen.

Upload erst nach:

- Detail-Spec
- Datenschutzklaerung
- Einwilligung
- technischem Umsetzungsplan
- Workflow-Aufgabe
- ausdruecklicher Freigabe

Supabase Storage erst nach Freigabe.

Kein Upload als live darstellen, solange er nicht technisch umgesetzt, datenschutzseitig geprueft und ausdruecklich freigegeben ist.

## 6. Geplante Datenfelder

Geplante Datenfelder:

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

Diese Datenfelder sind Planungsgrundlage und bedeuten nicht automatisch, dass alle Felder in Version 1 abgefragt werden.

Pflichtfelder und optionale Felder muessen spaeter im Formular-/Upload-Plan getrennt werden.

Sensible Daten:

- Kennzeichen
- FIN / Fahrgestellnummer
- Versicherungsdaten
- Dokumente
- Bilder
- personenbezogene Daten Dritter

Sensible Daten nur erheben, wenn erforderlich.

Keine unnoetigen personenbezogenen Daten sammeln.

## 7. Bildperspektiven und Bildqualitaet

Fuer spaetere Upload-Funktion oder freigegebene Bildabstimmung anfragen:

- Gesamtansicht des Fahrzeugs
- Schadenbereich aus normaler Entfernung
- Nahaufnahme des Schadens
- mehrere Perspektiven des Schadens
- Foto vom Kennzeichen, falls notwendig und datenschutzrechtlich zulaessig
- Fahrzeugschein / Zulassungsbescheinigung Teil I, optional und nur wenn erforderlich
- Unfallstelle oder relevante Umgebung, falls fuer Beweissicherung sinnvoll

Kundenhinweise:

- gute Beleuchtung
- nicht verwackelt
- Schadenbereich vollstaendig sichtbar
- Fotos aus mehreren Perspektiven
- keine unnoetigen personenbezogenen Daten im Bild
- bei freigegebener Upload-Funktion oder freigegebener Bildabstimmung bei Unsicherheit lieber mehrere Bilder bereitstellen

Bildhinweise muessen fuer Mobile verstaendlich sein.

Kunden sollen keine unnoetigen Personen, fremden Kennzeichen oder personenbezogenen Daten fotografieren, soweit vermeidbar.

Fahrzeugschein und Dokumente nur anfragen, wenn erforderlich und datenschutzseitig freigegeben.

## 8. Mobile First

Spaeterer Upload vom Handy muss Mobile First geplant werden.

Besonders wichtig:

- Kamera/Galerie
- einfache Bedienung
- kurze Formularschritte
- klare Fehlermeldungen
- Fortschritt/Status bei Upload spaeter
- verstaendliche Dateihinweise
- grosse Touch-Ziele
- klare Hinweise zu benoetigten Bildern
- keine langen Textbloecke auf kleinen Bildschirmen

## 9. Prioritaet erste Upload-Ausbaustufe

Prioritaet:

- Foto-Upload
- Schadenbeschreibung als Freitext
- Kontaktdaten
- Fahrzeugdaten

Nicht Teil der ersten Upload-Ausbaustufe:

- Sprachaufnahmen
- Kundenportal
- automatische Bewertung
- kundensichtbare KI-Ergebnisse

## 10. Sprachaufnahmen

Sprachaufnahmen sind ein optionaler spaeterer Ausbau.

Sprachaufnahmen sind nicht Teil von Version 1.

Sprachaufnahmen sind nicht Teil der ersten Upload-Ausbaustufe.

Vor Planung klaeren:

- eigene Spec
- Datenschutz
- Einwilligung
- Speicherung
- Dateigroesse
- Transkription
- interne Verarbeitung
- ausdrueckliche Freigabe

Moegliche spaetere Funktion: Kunde spricht Schadenbeschreibung ein, System erstellt Transkription, Gutachter sieht Text und Originalaufnahme intern.

## 11. Supabase- und KI-Bezug

Supabase ist geplante Datenplattform fuer spaetere Anfragen, Bilder, interne Notizen, Status und KI-Ergebnisse.

Keine Supabase-Integration in dieser Spec.

KI-Voranalyse kann spaeter auf Bildern und Schadeninformationen aufbauen.

KI bleibt unterstuetzend und intern, solange keine kundensichtbare Freigabe besteht.

KI ersetzt kein Gutachten und keine finale Bewertung.

Keine finale Schadenhoehe oder verbindliche Reparaturkosten durch KI.

## 12. Datenschutz / Einwilligung / Zugriff

Datenschutz- und Einwilligungstexte muessen vor Upload umgesetzt und freigegeben werden.

Offen bleiben:

- Speicherfristen
- Loeschung
- Auskunft
- Rollen
- Zugriffsrechte
- konkrete Datenschutztexte
- konkrete Einwilligungstexte

Zugriff auf Schadenanfragen, Bilder und KI-Ergebnisse muss spaeter eingeschraenkt werden.

Keine unnoetigen Daten speichern.

Keine Verarbeitung von Uploads oder KI-Daten ohne Freigabe.

## 13. Grenzen / Nicht-Scope

Digitale Schadenaufnahme bedeutet nicht:

- vollstaendiges Gutachten
- finale Bewertung
- verbindliche Schadenhoehe
- automatische Reparaturkostenberechnung
- automatische Versicherungsentscheidung
- Upload ohne Freigabe
- KI-Verarbeitung ohne Freigabe
- Sprachaufnahme ohne eigene Spec
- Kundenportal in Version 1

## 14. Offene Entscheidungen

Offen bleiben:

- ob Formular direkt zum Launch live ist
- ob Upload zum ersten Launch live ist
- Pflichtfelder vs. optionale Felder
- Dateiarten / Dateigroessen
- Speicherfristen
- Rollen und Zugriffsrechte
- genaue Datenschutz-/Einwilligungstexte
- ob und wann Sprachaufnahmen geplant werden
- ob Upload, Supabase und KI gemeinsam oder stufenweise umgesetzt werden
