# Supabase

Status: Finaler Entwurf, wartet auf Freigabe.

Grundlage: `specs/07-open-questions/open-questions.md`, Abschnitt 7.

## Ziel

Supabase bleibt die geplante Datenplattform fuer spaetere Schadenanfragen, Uploads, interne Pruefung und KI-Voranalyse.

## Keine Integration jetzt

Supabase wird in dieser Phase nur geplant. Keine Installation, keine Environment-Variablen, keine Tabellen und keine Storage-Buckets ohne separate Supabase-Spec, Datenschutzklaerung, Datenmodell-Freigabe und ausdrueckliche Freigabe.

## Geplante Funktionen

- Schadenanfragen speichern
- Kontakt- und Fahrzeugdaten speichern
- Schadenbeschreibung speichern
- Schadenbilder ueber Supabase Storage speichern
- Bearbeitungsstatus verwalten
- interne Notizen ermoeglichen
- spaetere KI-Voranalyse-Ergebnisse speichern
- interne Pruefung durch Gutachter unterstuetzen

## Storage

Spaeter speichern koennen:

- Schadenbilder
- Gesamtansichten des Fahrzeugs
- Nahaufnahmen des Schadens
- zusaetzliche Perspektiven
- optional Fahrzeugschein / Zulassungsbescheinigung Teil I, nur wenn erforderlich
- optional weitere relevante Dokumente, nur wenn erforderlich und datenschutzrechtlich sauber geregelt

## Zugriff

- Zugriff auf Anfragen, Uploads und KI-Ergebnisse ist nicht oeffentlich.
- Zugriff zunaechst nur intern fuer berechtigte Personen beziehungsweise Gutachter.
- Rollen und Sicherheitsregeln sind offen und spaeter in der Supabase-Spec zu definieren.

## Adminbereich

Ein Adminbereich ist spaeter wahrscheinlich sinnvoll, aber nicht Teil der ersten reinen Webseitenversion.

Moegliche Funktionen:

- neue Anfragen sehen
- Anfrage-Status verwalten
- Schadenbilder ansehen
- Kundendaten einsehen
- interne Notizen hinterlegen
- KI-Voranalyse-Ergebnisse intern pruefen
- fehlende Unterlagen oder Bilder erkennen

## Datenschutz und Einwilligung

Offen und vor Umsetzung zu klaeren:

- Datenschutztexte
- Einwilligung fuer Upload und Verarbeitung
- Speicherfristen
- Loeschung und Auskunft
- Zugriffskonzept
- Verarbeitung fuer spaetere KI-Voranalyse

Ohne geklaerte Datenschutz- und Einwilligungslogik keine Upload- oder KI-Verarbeitung von Kundendaten.
