# KFZ-Gutachten

Status: Freigegeben als Basis fuer die naechsten Planungsaufgaben.

Grundlage: `specs/07-open-questions/open-questions.md`, Abschnitte 2 bis 4, `specs/00-global-spec/global-spec.md`, `specs/01-functional-map/functional-map.md` und bestehende Feature Specs.

## 1. Kurzueberblick / Executive Summary

Diese Spec beschreibt die Hauptleistung `KFZ-Gutachten`.

UNEXT wird als Anbieter fuer KFZ-Gutachten in Berlin positioniert.

Diese Spec ist Grundlage fuer Homepage, Kontaktflow, SEO, FAQ und spaetere Rework-Plaene.

Digitale Schadenaufnahme, Upload und KI-Voranalyse sind unterstuetzende beziehungsweise spaetere Roadmap-Bestandteile.

Die finale Bewertung erfolgt immer durch einen Gutachter.

## 2. Version 1 und Zielversion

### Version 1 / erste veroeffentlichbare Website

Version 1 soll:

- KFZ-Gutachten verstaendlich erklaeren
- Gutachtenarten erklaeren
- Kontaktaufnahme ermoeglichen
- Anfrageprozess vorbereiten
- digitale Schadenaufnahme als Kontakt-/Anfrageprozess beschreiben
- Telefon, WhatsApp und E-Mail nutzen
- keine Upload-/Supabase-/KI-Funktion als live darstellen, solange sie nicht technisch umgesetzt und freigegeben ist

### Zielversion / Roadmap

Die Zielversion umfasst:

- digitale Schadenaufnahme erweitern
- Foto-Upload
- Supabase-Speicherung
- interne Gutachterpruefung
- KI-gestuetzte Voranalyse als Unterstuetzung
- keine finale Bewertung durch KI

## 3. Hauptleistung und Begriffsnutzung

Bestaetigte Hauptleistung:

- KFZ-Gutachten

Der Begriff `Kfz-Sachverstaendigengutachten` darf ergaenzend und erklaerend verwendet werden, aber nicht als zweite getrennte Hauptleistung.

Unfallgutachten, Schadengutachten, Wertgutachten / Fahrzeugbewertung und Beweissicherung sind erklaerende Gutachtenarten beziehungsweise Anwendungsfaelle unter dem Oberbegriff `KFZ-Gutachten`.

## 4. Gutachtenarten

Erlaubt:

- Unfallgutachten
- Schadengutachten
- Wertgutachten
- Fahrzeugbewertung
- Beweissicherung

Empfohlene Struktur:

- Unfallgutachten: fuer Schaeden nach einem Unfall
- Schadengutachten: fuer nachvollziehbare Dokumentation und Bewertung von Fahrzeugschaeden
- Wertgutachten / Fahrzeugbewertung: fuer Ermittlung oder Einschaetzung des Fahrzeugwerts
- Beweissicherung: Dokumentation von Schaeden, Zustand und relevanten Informationen

Weitere Gutachtenarten sind offen und duerfen nicht beworben werden, solange sie nicht bestaetigt sind.

Nicht bewerben:

- Gerichtsgutachten
- amtliche Gutachten
- oeffentlich bestellte Gutachten
- vereidigte Gutachten
- technische Spezialgutachten ausserhalb des KFZ-Bereichs
- sonstige nicht bestaetigte Gutachtenarten

## 5. Zielgruppen

Prioritaet:

- Privatkunden
- Unfallgeschaedigte
- Fahrzeughalter
- Personen mit Bedarf an Beweissicherung
- Personen mit Bedarf an Fahrzeugbewertung
- Versicherungsfaelle

Offen:

- Geschaeftskunden
- Flotten
- Partner

## 6. Anwendungsfaelle

UNEXT soll kontaktiert werden bei:

- Fahrzeugschaden nach Unfall
- Schadendokumentation
- Unfallgutachten
- Schadengutachten
- Fahrzeugbewertung / Wertgutachten
- Beweissicherung
- digitale Schadenaufnahme
- Fragen zum weiteren Vorgehen nach einem Schaden

## 7. Grober Ablauf aus Kundensicht

1. Kunde erkennt Bedarf oder Schaden.
2. Kunde kontaktiert UNEXT per Telefon, WhatsApp, E-Mail oder launchabhaengig ueber ein Formular.
3. Kunde beschreibt den Schaden oder Bedarf kurz.
4. Kunde haelt Unterlagen und Bilder bereit.
5. UNEXT stimmt weiteres Vorgehen oder Termin ab.
6. Nach Verfuegbarkeit ist Vor-Ort-Dokumentation moeglich.
7. Finale Bewertung erfolgt durch Gutachter.

Keine konkrete Bearbeitungszeit oder Rueckmeldefrist versprechen, solange sie nicht bestaetigt ist.

Zulaessige neutrale Formulierung:

> Wir melden uns zeitnah zur weiteren Abstimmung.

## 8. Standort und Vor-Ort-Dokumentation

- Hauptstandort: Berlin
- Adresse: Luebarser Str. 25, 13435 Berlin
- Begutachtung und Kontaktaufnahme koennen ueber den Standort laufen.
- Nach Verfuegbarkeit kann UNEXT vor Ort oder an der Unfallstelle Schaden- und Beweisdokumentation durchfuehren.
- Nicht als 24/7-Notdienst, dauerhaft verfuegbarer Sofortdienst oder garantierter Vor-Ort-Service darstellen.

Offen: konkretes Einzugsgebiet, zum Beispiel ganz Berlin, Berlin + Umgebung oder bestimmte Bezirke.

## 9. Hilfreiche Unterlagen

Kunden sollten bereithalten:

- Fahrzeugschein / Zulassungsbescheinigung Teil I
- Fotos vom Schaden
- Unfallbeschreibung
- Kontaktdaten
- Versicherungsdaten, falls vorhanden
- Schadennummer, falls vorhanden
- Polizeibericht oder Unfallbericht, falls vorhanden

Bilder vom Schaden sind hilfreich, aber Upload ist erst eine aktive Funktion, wenn er technisch umgesetzt und freigegeben ist.

Bis dahin koennen Kontaktwege wie Telefon, WhatsApp, E-Mail oder ein launchabhaengiges Formular fuer die Abstimmung genutzt werden, soweit rechtlich und datenschutzseitig sauber formuliert.

## 10. Digitale Schadenaufnahme und KI-Bezug

Digitale Schadenaufnahme unterstuetzt die strukturierte Vorbereitung einer Anfrage.

In Version 1 bedeutet digitale Schadenaufnahme nur strukturierte Kontaktaufnahme beziehungsweise Anfragevorbereitung ueber Telefon, WhatsApp, E-Mail oder ein launchabhaengiges Formular.

Spaeter kann digitale Schadenaufnahme erweitert werden um:

- Foto-Upload
- Supabase-Speicherung
- KI-Voranalyse

Foto-Upload, Supabase-Speicherung und KI-Voranalyse sind erst aktive Funktionen, wenn sie technisch umgesetzt, datenschutzseitig geprueft und ausdruecklich freigegeben sind.

Fotos vom Schaden koennen fuer die erste Abstimmung hilfreich sein. In Version 1 werden Bilder nur ueber die jeweils freigegebenen Kontaktwege abgestimmt. Ein Website-Upload darf erst angeboten, beschrieben oder beworben werden, wenn die Upload-Funktion technisch umgesetzt, datenschutzseitig geprueft und ausdruecklich freigegeben ist.

KI-Voranalyse ist Roadmap-Unterstuetzung und ersetzt kein Gutachten.

Die finale Bewertung erfolgt immer durch einen Gutachter.

Keine finale Schadenhoehe oder verbindliche Reparaturkosten durch KI.

## 11. Mobile-First-Anforderungen

- Telefon und WhatsApp mobil gut erreichbar
- Gutachtenarten mobil verstaendlich erklaeren
- kurze Abschnitte
- klare CTAs
- keine langen Textbloecke
- spaetere Foto-/Upload-Strecke vom Handy beruecksichtigen

## 12. SEO-Bezug

Hauptbegriff:

- KFZ-Gutachten Berlin

Nebenbegriffe koennen sein:

- Unfallgutachten Berlin
- Schadengutachten Berlin
- Wertgutachten Auto Berlin
- Fahrzeugbewertung Berlin
- Kfz-Sachverstaendiger Berlin

Keine alten SEO-Ziele verwenden:

- Autovermietung
- Mietwagen
- Ersatzwagen
- Fahrzeugservice
- Autoservice
- Werkstatt
- Service rund ums Fahrzeug
- Dashcam-Einbau
- Reifenservice
- Reifenwechsel
- Zulassungsservice
- Abschleppdienst
- Pannenhilfe
- Fahrzeugaufbereitung
- Detailing

## 13. Qualifikation und Vertrauen

Zulaessig:

- anerkannte Sachverstaendigenqualifikation fuer Schaeden an Kraftfahrzeugen und Wertermittlung
- Kfz-Sachverstaendiger fuer Schaeden an Kraftfahrzeugen und Wertermittlung
- anerkannte Sachverstaendigenkompetenz
- Erfahrung im Bereich KFZ-Gutachten seit 2024
- Standort Berlin
- nachvollziehbare Schadenaufnahme
- digitale Prozesse
- finale Bewertung durch einen Gutachter

Qualifikation sachlich verwenden.

Keine Urkunden, Mitgliedsnummern, Ausstellungsdaten, Google-Bewertungen, Kundennamen, Referenzen, konkrete Schadensfaelle oder personenbezogenen Nachweise ohne ausdrueckliche Freigabe veroeffentlichen.

Erfahrung seit 2024 darf sachlich kommuniziert werden, aber nicht als langjaehrige Erfahrung dargestellt werden.

Die Marke UNEXT steht im Vordergrund. Personennamen nicht prominent auf der Startseite platzieren, solange keine persoenliche Expertenpositionierung freigegeben ist.

## 14. Ausgeschlossene Begriffe

Nicht verwenden:

- oeffentlich bestellter Sachverstaendiger
- vereidigter Sachverstaendiger
- Gerichtsgutachter
- amtlich bestellter Gutachter
- Meisterwerkstatt
- Vollservice-Werkstatt
- Kfz-Meisterbetrieb
- amtlich anerkannt
- staatlich geprueft
- langjaehrige Erfahrung
- jahrzehntelange Erfahrung
- seit vielen Jahren
- besonders erfahren

Keine Darstellung als:

- Werkstatt
- Meisterwerkstatt
- Vollservice-Reparaturbetrieb
- Reparaturbetrieb
- amtliche Stelle
- gerichtliche Stelle

## 15. Offene Entscheidungen

Offen bleiben:

- konkretes Einzugsgebiet
- Geschaeftskunden / Flotten / Partner
- weitere Gutachtenarten
- konkrete Rueckmeldefrist / Bearbeitungszeit
- Google-Bewertungen
- ob Formular / Upload / Supabase / KI zum Launch live sind

Offene Entscheidungen duerfen nicht als bestaetigte Leistungen oder Funktionen kommuniziert werden.
