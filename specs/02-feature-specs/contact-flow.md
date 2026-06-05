# Contact Flow

Status: Freigegeben als Basis fuer die naechsten Planungsaufgaben.

Grundlage: `specs/07-open-questions/open-questions.md`, Abschnitt 8, `specs/00-global-spec/global-spec.md`, `specs/01-functional-map/functional-map.md`, `specs/02-feature-specs/kfz-gutachten.md`, `specs/02-feature-specs/digitale-schadenaufnahme.md` und `specs/02-feature-specs/ki-voranalyse.md`.

## 1. Kurzueberblick / Executive Summary

Der Contact Flow fuehrt Nutzer schnell zu einer KFZ-Gutachten-Anfrage.

Primaere Kontaktwege sind Telefon und WhatsApp.

E-Mail ist ein ergaenzender Kontaktweg.

Ein Formular ist launchabhaengig und nur aktiv, wenn es umgesetzt und ausdruecklich freigegeben ist.

Digitale Schadenaufnahme bedeutet in Version 1 strukturierte Kontaktaufnahme beziehungsweise Anfragevorbereitung.

Upload, Supabase und KI sind Roadmap-Funktionen und nicht automatisch Teil des ersten Launches.

## 2. Version 1 und Zielversion

### Version 1 / erste veroeffentlichbare Website

Version 1 umfasst:

- Telefon
- WhatsApp
- E-Mail
- Formular nur, wenn es zum Launch umgesetzt und freigegeben ist
- Anfrage / Schadenmeldung starten
- kurze Schadenbeschreibung
- Rueckmeldung zur weiteren Abstimmung
- Standort und Oeffnungszeiten sichtbar
- keine Upload-/Supabase-/KI-Funktion als live darstellen, solange sie nicht technisch umgesetzt, datenschutzseitig geprueft und freigegeben ist

### Zielversion / Roadmap

Die Zielversion umfasst:

- strukturierter Formular-/Upload-Flow
- Foto-Upload
- Supabase-Speicherung
- interne Gutachterpruefung
- KI-Voranalyse als interne Unterstuetzung
- automatische Eingangsbestaetigung optional spaeter
- Admin-/Portal-Funktionen optional spaeter

## 3. Kontaktwege

Primaere Kontaktwege:

- Telefon: 030 23613927
- WhatsApp: 0176 64365185

Telefon ist wichtig fuer Rueckfragen, Terminabstimmung und dringende Faelle.

WhatsApp ist wichtig fuer mobile Erstnachrichten und gegebenenfalls Bildabstimmung.

Bildabstimmung ueber WhatsApp ist nicht gleich Website-Upload.

WhatsApp-Bildabstimmung nur soweit rechtlich und datenschutzseitig sauber formuliert.

Ergaenzende Kontaktwege:

- E-Mail: `info@unext.de`
- Formular nur, wenn es zum Launch umgesetzt und freigegeben ist

E-Mail ist ergaenzend und nicht primaerer Haupt-CTA.

## 4. CTAs und Mobile-Reihenfolge

Moegliche CTA-Texte:

- Gutachten anfragen
- Schaden melden
- KFZ-Gutachten anfragen
- WhatsApp senden
- Jetzt anrufen

Mobile Prioritaet:

1. Jetzt anrufen
2. WhatsApp senden
3. Gutachten anfragen / Schaden melden

CTAs duerfen nicht zu Upload, Supabase oder KI fuehren, solange diese Funktionen nicht freigegeben sind.

Wenn das Formular zum Launch nicht umgesetzt oder nicht ausdruecklich freigegeben ist, duerfen Formular-CTAs nicht sichtbar sein und muessen auf Telefon, WhatsApp oder E-Mail ausweichen.

CTA-Texte duerfen keine Sofortgarantie, keinen 24/7-Notdienst und keine automatische Schadenbewertung versprechen.

## 5. Sofortkontakt

Sofortkontakt umfasst:

- Telefon
- WhatsApp
- schnelle Rueckfrage
- Terminabstimmung
- erste Einschaetzung des weiteren Vorgehens

Nicht versprechen:

- Sofortgarantie
- 24/7-Notdienst
- garantierte Vor-Ort-Dokumentation
- konkrete Bearbeitungszeit ohne Bestaetigung
- erste Schadenhoehe oder Kostenschaetzung

Eine erste Abstimmung zum weiteren Vorgehen darf nicht als Schadenhoehe, Reparaturkostenschaetzung, automatische Bewertung oder verbindliche Rueckmeldung verstanden werden.

## 6. Digitale Schadenaufnahme im Kontaktflow

### Version 1

Digitale Schadenaufnahme bedeutet in Version 1:

- strukturierte Kontaktaufnahme / Anfragevorbereitung
- kurze Schadenbeschreibung
- relevante Kontaktinformationen
- Abstimmung weiterer Schritte
- kein Website-Upload ohne Freigabe

### Roadmap

Digitale Schadenaufnahme umfasst spaeter:

- strukturierte Anfrage
- Kontaktdaten
- Fahrzeugdaten
- Schadenbeschreibung
- Foto-Upload
- Supabase-Speicherung
- interne KI-Voranalyse als spaetere Unterstuetzung

Website-Upload erst nach technischer Umsetzung, Datenschutzpruefung und Freigabe.

KI-Voranalyse erst nach technischer Umsetzung, Datenschutzpruefung und Freigabe.

Wenn Website-Upload, Supabase oder KI-Voranalyse nicht umgesetzt, datenschutzseitig geprueft und ausdruecklich freigegeben sind, duerfen diese Funktionen weder als Kontaktweg noch als aktiver Prozess dargestellt werden.

Keine kundensichtbaren KI-Ergebnisse in Version 1.

## 7. Version-1-Schritte

Schritte:

1. Kunde waehlt Telefon, WhatsApp, E-Mail oder ein freigegebenes Formular.
2. Kunde nennt Kontaktdaten und kurze Schadenbeschreibung.
3. UNEXT meldet sich zeitnah zur weiteren Abstimmung.
4. Falls noetig, werden Bilder, Unterlagen oder ein Termin ueber freigegebene Kontaktwege abgestimmt.

Das Formular darf nicht so dargestellt werden, als sei es sicher zum Launch live.

## 8. Spaetere Upload-Version

Die spaetere Upload-Version ist Roadmap und erst nach technischer Umsetzung, Datenschutzpruefung und Freigabe aktiv.

Schritte:

1. Kunde startet digitale Schadenaufnahme.
2. Kunde gibt Kontaktdaten ein.
3. Kunde gibt Fahrzeugdaten ein.
4. Kunde beschreibt den Schaden.
5. Kunde laedt Schadenbilder hoch.
6. Kunde bestaetigt Datenschutz- und Verarbeitungshinweise.
7. Anfrage wird gespeichert.
8. UNEXT prueft intern und meldet sich.
9. KI-Voranalyse kann intern unterstuetzen, wenn technisch umgesetzt, datenschutzseitig geprueft und freigegeben.

## 9. Felder

Leitdaten fuer eine erste Anfrage:

- Name
- Telefonnummer
- bevorzugter Kontaktweg
- kurze Schadenbeschreibung

Optionale Leitdaten:

- E-Mail-Adresse
- Fahrzeugmarke
- Fahrzeugmodell
- Baujahr
- Kennzeichen
- Unfall- oder Schadendatum
- Standort des Fahrzeugs
- Versicherungsdaten
- Schadennummer

Diese Felder sind Planungsgrundlage.

Sie bedeuten nicht automatisch, dass alle Felder in Version 1 abgefragt werden.

Technische Pflichtfelder gelten nur fuer ein freigegebenes Formular.

Weitere Pflichtfelder im Upload-Flow erst nach Supabase-/Upload-Spec festlegen.

Sensible Daten wie Kennzeichen, Versicherungsdaten und Schadennummer nur erheben, wenn erforderlich.

## 10. Rueckmeldung und Eingangsbestaetigung

Bis eine konkrete Rueckmeldefrist bestaetigt ist, nur neutral formulieren:

> Wir melden uns zeitnah zur weiteren Abstimmung.

Keine konkrete Rueckmeldefrist ohne Bestaetigung verwenden.

Eine automatische Eingangsbestaetigung ist spaeter sinnvoll, aber nicht zwingend Teil der ersten Webseitenversion.

Keine automatische Eingangsbestaetigung versprechen, solange sie nicht umgesetzt ist.

Keine Bearbeitungszeit garantieren.

## 11. Standort und Oeffnungszeiten

Der Standort Berlin soll im Kontaktbereich sichtbar sein:

- Luebarser Str. 25, 13435 Berlin
- Oeffnungszeiten gemaess Global Spec

Oeffnungszeiten und Kontaktdaten muessen aus der Global Spec uebernommen werden und duerfen nicht frei erfunden werden.

Vor-Ort-Dokumentation nur nach Verfuegbarkeit.

Kein garantierter Sofortdienst oder Vor-Ort-Service.

## 12. Mobile First

- Telefon-Button mobil direkt erreichbar
- WhatsApp-Button mobil direkt erreichbar
- Formular kurz und einfach, falls freigegeben
- grosse klickbare Buttons
- keine langen Textbloecke
- CTA-Reihenfolge mobil pruefen
- spaetere Upload-Strecke fuer Handy-Kamera und Galerie optimieren
- mehrsprachige Textlaengen spaeter beachten

## 13. Grenzen / Nicht-Scope

Contact Flow bedeutet nicht:

- 24/7-Notdienst
- garantierter Sofortdienst
- garantierter Vor-Ort-Service
- automatische Schadenbewertung
- erste Schadenhoehe oder Reparaturkostenschaetzung
- Website-Upload ohne Freigabe
- Supabase- oder KI-Funktion ohne Freigabe
- kundensichtbare KI-Ergebnisse in Version 1
- Mietwagen-/Ersatzwagen-/Werkstatt-/Fahrzeugservice-Anfrageflow

## 14. Offene Entscheidungen

Offen bleiben:

- ob Formular direkt zum Launch live ist
- welche Felder im Formular Pflichtfelder sind
- ob automatische Eingangsbestaetigung zum Launch umgesetzt wird
- konkrete Rueckmeldefrist / Bearbeitungszeit
- ob Upload/Supabase/KI gemeinsam oder stufenweise umgesetzt werden
- mehrsprachige CTA-/Kontakttexte
- genaue Datenschutz-/Einwilligungstexte fuer Formular und spaetere Upload-Version
