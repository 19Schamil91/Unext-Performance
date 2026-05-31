# Contact Flow

Status: Finaler Entwurf, wartet auf Freigabe.

Grundlage: `specs/07-open-questions/open-questions.md`, Abschnitt 8.

## Ziel

Der Kontaktflow soll Kunden schnell zu einer KFZ-Gutachten-Anfrage fuehren und zwischen Sofortkontakt und digitaler Schadenaufnahme unterscheiden.

## Kontaktwege

Primaere Kontaktwege:

- Telefon: 030 23613927
- WhatsApp: 0176 64365185

Telefon ist wichtig fuer schnelle Rueckfragen, Terminabstimmung und dringende Faelle. WhatsApp ist wichtig fuer mobile Erstnachrichten und gegebenenfalls erste Bilduebermittlung, solange Upload/Supabase noch nicht umgesetzt ist.

Weitere Kontaktwege:

- Formular als strukturierter Anfrageweg
- E-Mail `info@unext.de` als zusaetzlicher Kontaktweg, aber nicht als primaerer CTA im sichtbaren Hauptbereich

## CTAs

Moegliche CTA-Texte:

- Gutachten anfragen
- Schaden melden
- KFZ-Gutachten anfragen
- WhatsApp senden
- Jetzt anrufen

Mobile Reihenfolge: Anrufen, WhatsApp, Anfrage.

## Sofortkontakt

Sofortkontakt umfasst:

- Telefon
- WhatsApp
- schnelle Rueckfrage
- Terminabstimmung
- erste Einschaetzung des weiteren Vorgehens

Keine Sofortgarantie oder 24/7-Notdienst-Aussage verwenden.

## Digitale Schadenaufnahme

Digitale Schadenaufnahme umfasst spaeter:

- strukturierte Anfrage
- Kontaktdaten
- Fahrzeugdaten
- Schadenbeschreibung
- Foto-Upload
- Supabase-Speicherung
- interne KI-Voranalyse als geplante spaetere Unterstuetzung

## Erste Webseitenversion

Schritte:

1. Kunde waehlt Telefon, WhatsApp oder Formular.
2. Kunde uebermittelt Kontaktdaten und kurze Schadenbeschreibung.
3. UNEXT meldet sich zur weiteren Abstimmung.
4. Falls noetig, werden Bilder, Unterlagen oder ein Termin abgestimmt.

## Spaetere Upload-Version

Schritte:

1. Kunde startet digitale Schadenaufnahme.
2. Kunde gibt Kontaktdaten ein.
3. Kunde gibt Fahrzeugdaten ein.
4. Kunde beschreibt den Schaden.
5. Kunde laedt Schadenbilder hoch.
6. Kunde bestaetigt Datenschutz- und Verarbeitungshinweise.
7. Anfrage wird gespeichert.
8. UNEXT prueft intern und meldet sich.
9. KI-Voranalyse kann intern unterstuetzen, wenn technisch umgesetzt und freigegeben.

## Felder

Pflichtfelder fuer eine erste Anfrage:

- Name
- Telefonnummer
- bevorzugter Kontaktweg
- kurze Schadenbeschreibung

Optionale Felder:

- E-Mail-Adresse
- Fahrzeugmarke
- Fahrzeugmodell
- Baujahr
- Kennzeichen
- Unfall- oder Schadendatum
- Standort des Fahrzeugs
- Versicherungsdaten
- Schadennummer

Weitere Pflichtfelder im Upload-Flow erst nach Supabase-/Upload-Spec festlegen.

## Rueckmeldung

Bis eine konkrete Rueckmeldefrist bestaetigt ist, nur neutral formulieren:

> Wir melden uns zeitnah zur weiteren Abstimmung.

Eine automatische Eingangsbestaetigung ist spaeter sinnvoll, aber nicht zwingend Teil der ersten Webseitenversion.

## Standort

Der Standort Berlin soll sichtbar sein:

- Luebarser Str. 25, 13435 Berlin
- Oeffnungszeiten gemaess Global Spec

## Mobile First

- Telefon-Button mobil direkt erreichbar
- WhatsApp-Button mobil direkt erreichbar
- Formular kurz und einfach
- grosse klickbare Buttons
- keine langen Textbloecke
- spaetere Upload-Strecke fuer Handy-Kamera und Galerie optimieren
