# Data Model

Status: Finaler Entwurf, wartet auf Freigabe.

Grundlage: `specs/07-open-questions/open-questions.md`, Abschnitt 7.

## Grundsatz

Diese Spec beschreibt geplante Datenbereiche. Sie erzwingt noch keine finale Tabellenstruktur. Die finale Struktur wird erst in einer freigegebenen Supabase-Spec festgelegt.

## Geplante Datenbereiche

- Schadenanfragen
- Schadenbilder / Uploads
- KI-Voranalysen
- interne Notizen
- optional spaeter Benutzer / interne Rollen
- optional spaeter Kundenportal-Zugriffe

## Schadenanfragen

Voraussichtliche Felder:

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

Fahrzeugdaten koennen in der ersten Supabase-Version direkt in der Schadenanfrage gespeichert werden.

Offen: separate Fahrzeug-Tabelle, falls Kundenportal, mehrere Fahrzeuge pro Kunde oder komplexere Verwaltung erforderlich werden.

## Uploads / Bilder

Geplante Upload-Arten:

- Schadenbilder
- Gesamtansichten
- Nahaufnahmen
- weitere Perspektiven
- optional Zulassungsbescheinigung Teil I
- optional weitere relevante Dokumente

## KI-Voranalysen

Spaeter strukturiert speichern:

- erkannte Schadenbereiche
- Bildqualitaets-Hinweise
- fehlende Perspektiven
- interne Zusammenfassung
- Zeitpunkt der Analyse
- verwendeter Anbieter / Modell, falls technisch sinnvoll
- Hinweis, dass es sich nicht um eine finale Bewertung handelt

## Interne Notizen

Interne Notizen sollen berechtigten Personen oder Gutachtern helfen, Rueckfragen, Status und Pruefung nachvollziehbar zu dokumentieren.

## Sensible Daten

Sensibel behandeln:

- Kennzeichen
- FIN
- Versicherungsdaten
- Dokumente
- Bilder
- personenbezogene Daten Dritter

Nicht unnoetig speichern:

- nicht benoetigte Ausweisdokumente
- unnoetige personenbezogene Daten Dritter
- unnoetige Fotos mit fremden Personen
- unnoetige sensible Versicherungsdaten
- Daten ohne Erforderlichkeit fuer Anfrage, Gutachtenvorbereitung oder Beweissicherung

## Offene Entscheidungen

- Speicherfristen
- Rollen und Rechte
- RLS/Sicherheitsregeln
- Loesch- und Auskunftsprozesse
- ob und wann Kundenportal-Zugriffe entstehen
