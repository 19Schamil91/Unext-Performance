# Digitale Schadenaufnahme

Status: Finaler Entwurf, wartet auf Freigabe.

Grundlage: `specs/07-open-questions/open-questions.md`, Abschnitt 5.

## Ziel

Die digitale Schadenaufnahme ist ein zentraler zukuenftiger Prozess der Webseite. Kunden sollen Fahrzeugschaeden einfach digital melden koennen, damit UNEXT eine strukturierte Schadenaufnahme vorbereiten kann.

## Erste Webseitenversion

In Version 1 wird digitale Schadenaufnahme mindestens als klarer Anfrageprozess beschrieben:

- Telefon
- WhatsApp
- Formular

Ein echter Datei-Upload ist nicht automatisch Teil des ersten Launches.

## Spaetere Upload-Funktion

Foto-Upload ist eine Kernfunktion der spaeteren digitalen Schadenaufnahme. Kunden muessen Schadenbilder direkt vom Handy aufnehmen oder aus der Galerie hochladen koennen.

Upload erst nach separater Spec und Freigabe fuer:

- Supabase
- Storage
- Datenschutz
- Einwilligung
- Upload-Flow

## Geplante Datenfelder

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

Kennzeichen und FIN sind sensible Daten und nur zu erheben, wenn erforderlich.

## Bildperspektiven

Spaeter anfragen:

- Gesamtansicht des Fahrzeugs
- Schadenbereich aus normaler Entfernung
- Nahaufnahme des Schadens
- mehrere Perspektiven des Schadens
- Foto vom Kennzeichen, falls notwendig und datenschutzrechtlich zulaessig
- Fahrzeugschein / Zulassungsbescheinigung Teil I, optional und nur wenn erforderlich
- Unfallstelle oder relevante Umgebung, falls fuer Beweissicherung sinnvoll

## Bildqualitaetshinweise

Kundenhinweise:

- gute Beleuchtung
- nicht verwackelt
- Schadenbereich vollstaendig sichtbar
- Fotos aus mehreren Perspektiven
- keine unnoetigen personenbezogenen Daten im Bild
- bei Unsicherheit lieber mehrere Bilder hochladen

## Mobile First

Spaeterer Upload vom Handy muss Mobile First geplant werden:

- Kamera/Fotogalerie beruecksichtigen
- einfache Bedienung
- kurze Formularschritte
- klare Hinweise zu benoetigten Bildern
- keine langen Textbloecke auf kleinen Bildschirmen

## Erster spaeterer Upload-Scope

Prioritaet:

- Foto-Upload
- Schadenbeschreibung als Freitext
- Kontaktdaten
- Fahrzeugdaten

## Sprachaufnahmen

Sprachaufnahmen sind eine spaetere optionale Erweiterung und nicht Teil des ersten Upload-Scopes.

Vor Planung klaeren:

- Datenschutz
- Einwilligung
- Speicherung
- Dateigroesse
- Transkription
- interne Verarbeitung

Moegliche spaetere Funktion: Kunde spricht Schadenbeschreibung ein, System erstellt Transkription, Gutachter sieht Text und Originalaufnahme intern.

## Grenzen

Digitale Schadenaufnahme dient Vorbereitung und Strukturierung. Sie ersetzt kein vollstaendiges Gutachten und keine finale Bewertung.

Die spaetere KI-Voranalyse kann auf Bildern und Schadeninformationen aufbauen. Sie ist Teil der Roadmap, darf aber erst nach eigener Spec, Datenschutzklaerung und Freigabe technisch umgesetzt und aktiv kommuniziert werden.
