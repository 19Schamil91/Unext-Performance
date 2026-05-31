# Functional Map

Status: Finaler Entwurf, wartet auf Freigabe.

Grundlage: `specs/07-open-questions/open-questions.md`, `specs/00-global-spec/global-spec.md`, Aufgabe 017.

## Ziel

Diese Functional Map beschreibt die fachlichen Nutzerwege und Funktionsbereiche der UNEXT-Webseite. Sie beschreibt keine technische Umsetzung und ersetzt keinen Work Plan.

## Grundrichtung

UNEXT wird als reine KFZ-Gutachten-Webseite fuer Berlin geplant. Nutzer sollen schnell verstehen, welche Gutachtenleistungen angeboten werden, wie sie UNEXT kontaktieren koennen und wie die digitale Schadenaufnahme spaeter erweitert wird.

## Hauptnutzerwege

### Kunde sucht KFZ-Gutachten in Berlin

- Nutzer findet klare Positionierung `KFZ-Gutachten in Berlin`.
- Nutzer versteht die Gutachtenarten: Unfallgutachten, Schadengutachten, Wertgutachten / Fahrzeugbewertung und Beweissicherung.
- Nutzer sieht Standort, Kontaktwege und Vertrauenselemente.

### Kunde hatte Unfall und braucht schnelle Kontaktaufnahme

- Nutzer sieht Telefon- und WhatsApp-CTA schnell, besonders mobil.
- Nutzer kann ohne lange Erklaerung Kontakt aufnehmen.
- Keine 24/7- oder Sofortdienst-Garantie, solange nicht bestaetigt.

### Kunde moechte Schaden melden

- Nutzer kann einen Schaden ueber Telefon, WhatsApp oder spaeter Formular melden.
- In der ersten Webseitenversion wird die digitale Schadenaufnahme als vorbereiteter Anfrageprozess beschrieben.
- Spaeter kann die Schadenmeldung durch Upload, Supabase-Speicherung und interne Pruefung erweitert werden.

### Kunde moechte telefonisch Kontakt aufnehmen

- Telefon ist primaerer Kontaktweg.
- Telefonnummer ist in Kontaktbereich, CTA-Bereichen und mobil schnell erreichbar.
- Telefon dient Rueckfragen, Terminabstimmung und dringenden Faellen.

### Kunde moechte per WhatsApp Kontakt aufnehmen

- WhatsApp ist primaerer mobiler Kontaktweg.
- WhatsApp kann fuer schnelle Erstnachrichten und gegebenenfalls erste Bilduebermittlung genutzt werden, solange Upload/Supabase noch nicht umgesetzt ist.
- Datenschutz- und Einwilligungshinweise sind vor intensiver Bild- oder Dokumentverarbeitung separat zu klaeren.

### Kunde moechte strukturierte Anfrage stellen

- Die Webseite soll einen strukturierten Anfrageweg planen.
- Erste Anfragefelder: Name, Telefonnummer, bevorzugter Kontaktweg und kurze Schadenbeschreibung.
- Weitere Felder fuer Fahrzeugdaten, Versicherungsdaten und Schadennummer bleiben optional oder werden spaeter im Upload-Flow konkretisiert.

### Kunde moechte spaeter Bilder hochladen

- Foto-Upload ist Teil der Zielversion.
- Upload darf erst nach eigener Upload-/Supabase-Spec, Datenschutzklaerung und Freigabe umgesetzt werden.
- Upload muss Mobile First fuer Kamera und Galerie geplant werden.

### Gutachter moechte spaeter Anfrage intern pruefen

- Interne Pruefung durch Gutachter ist Teil der Zielversion.
- Der Gutachter soll spaeter Anfrage, Fahrzeugdaten, Schadenbeschreibung, Bilder, interne Notizen und KI-Voranalyse einsehen koennen.
- Die finale Bewertung erfolgt immer durch einen Gutachter.

### KI soll spaeter intern Voranalyse unterstuetzen

- KI-Voranalyse ist fester Roadmap-Bestandteil.
- KI unterstuetzt spaeter Bildanalyse, Strukturierung, Bildqualitaet und interne Zusammenfassung.
- KI ist kein finaler Entscheider, erstellt kein Gutachten und liefert keine verbindliche Schadenhoehe.

## Version 1 / erste veroeffentlichbare Website

Zur ersten veroeffentlichbaren Version gehoeren:

- Informationen zu KFZ-Gutachten
- Erklaerung der Gutachtenarten
- Kontakt ueber Telefon
- Kontakt ueber WhatsApp
- Kontakt ueber E-Mail
- strukturierter Anfrageprozess / Formular als Planung
- digitale Schadenaufnahme als vorbereiteter Prozess
- Mobile-First-Kontaktwege
- FAQ-Grundlage
- Standort Berlin, Adresse und Oeffnungszeiten
- sachliche Vertrauenselemente

Falls technisch noch nicht umgesetzt, gehoeren nicht aktiv zur ersten Version:

- aktiver Datei-Upload
- Supabase-Speicherung
- KI-Auswertung
- kundensichtbare KI-Ergebnisse
- Adminbereich
- Kundenportal

## Zielversion / Roadmap

Geplante Zielversion:

- Foto-Upload fuer Schadenbilder
- Supabase-Speicherung von Anfragen und Bildern
- interne Gutachterpruefung
- KI-gestuetzte Voranalyse als interne Unterstuetzung
- Speicherung der KI-Voranalyse
- spaetere Admin-Funktionen
- spaetere Kundenportal- oder Web-App-Funktionen

Diese Funktionen sind feste Roadmap-Bestandteile, aber erst nach eigener Spec, Datenschutzklaerung, technischer Planung und ausdruecklicher Freigabe umzusetzen.

## Nicht-Scope

Nicht als aktive Leistungen planen, bewerben oder in Nutzerwege aufnehmen:

- Autovermietung
- Mietwagen
- Ersatzwagen
- Fahrzeugservice
- Autoservice
- Werkstatt
- Service rund ums Fahrzeug
- Dashcam
- Dashcam-Einbau
- Reifenservice
- Reifenwechsel
- Zulassung
- Zulassungsservice
- Abschleppdienst
- Pannenhilfe
- Fahrzeugaufbereitung
- Detailing

Alte Inhalte aus diesen Bereichen duerfen nur ueber einen freigegebenen Cleanup-Plan entfernt, ersetzt oder archiviert werden.

## Offene Entscheidungen

- Ob das konkrete Einzugsgebiet ueber Berlin hinaus genannt wird.
- Ob zum ersten Launch ein Formular live ist oder nur Telefon/WhatsApp/E-Mail priorisiert werden.
- Ob Deutsch, Russisch und Englisch direkt live gehen oder Deutsch zuerst.
- Ob Upload, Supabase und KI beim ersten Launch live sind oder spaeter aktiviert werden.
