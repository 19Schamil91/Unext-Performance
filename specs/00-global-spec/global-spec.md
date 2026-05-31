# Global Spec

Status: Finaler Entwurf, wartet auf Freigabe.

Grundlage: `specs/07-open-questions/open-questions.md`, Aufgabe 017.

## Projektziel

UNEXT wird als reine KFZ-Gutachten-Webseite fuer Berlin aufgebaut. Die Webseite soll Kunden klar zu KFZ-Gutachten, Unfallgutachten, Schadengutachten, Wertgutachten / Fahrzeugbewertung, Beweissicherung und digitaler Schadenaufnahme fuehren.

Die geplante Zielversion umfasst spaeter Foto-Upload, Supabase-Speicherung von Anfragen und Bildern, KI-gestuetzte Voranalyse von Fahrzeugschaeden und interne Pruefung durch einen Gutachter.

## Aktive Positionierung

- Hauptbegriff: KFZ-Gutachten
- Standortfokus: Berlin
- Primaere Zielgruppen: Privatkunden und Versicherungsfaelle
- Geschaeftskunden, Flotten oder Partner bleiben als spaetere Erweiterung offen.
- Finale Bewertung und Gutachtenerstellung erfolgen immer durch einen Gutachter.

## Nicht-Scope

Nicht als aktive Leistungen planen oder bewerben:

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

Alte Inhalte aus diesen Bereichen duerfen nur ueber einen freigegebenen Cleanup-Plan entfernt oder ersetzt werden.

## Firmendaten

- Rechtlicher Firmenname: Unext GmbH
- Marke auf der Webseite: UNEXT
- Adresse: Luebarser Str. 25, 13435 Berlin
- Register: Amtsgericht Charlottenburg (Berlin), HRB 265091 B
- E-Mail: info@unext.de
- Haupttelefon: 030 23613927
- WhatsApp: 0176 64365185

## Oeffnungszeiten

- Montag bis Freitag: 09:00 - 18:00 Uhr
- Samstag: 10:00 - 16:00 Uhr
- Sonntag: Geschlossen
- Ausserhalb der Oeffnungszeiten nach Vereinbarung

## Marken- und Firmennamensregel

- In Marketingbereichen hauptsaechlich `UNEXT` verwenden.
- In Impressum, Datenschutz, strukturierten Daten und Footer-Rechtsangaben `Unext GmbH` verwenden.
- Die Adresse darf oeffentlich als Standort auf der Webseite verwendet werden.

## Mobile First

Alle UI-, Homepage-, Kontaktflow-, Formular-, Upload-, Portal- und Launch-Aufgaben muessen Mobile First geplant und geprueft werden.

Besonders wichtig:

- Telefon- und WhatsApp-CTA mobil schnell erreichbar
- kurze Formularschritte
- keine langen Textbloecke
- mobile Zeilenumbrueche pruefen
- spaeterer Upload vom Handy mit Kamera und Galerie
- mehrsprachige Texte separat auf Mobile pruefen

## Mehrsprachigkeit

Die Webseite wird grundsaetzlich dreisprachig geplant:

- Deutsch
- Russisch
- Englisch

Deutsch ist fachlich fuehrend fuer Specs, Freigaben und sensible rechtliche oder fachliche Formulierungen.

Offen: Ob alle drei Sprachen direkt zum Launch live gehen oder ob Deutsch zuerst veroeffentlicht wird.

## Roadmap fuer Upload, Supabase und KI

Upload, Supabase und KI-Voranalyse sind feste Bestandteile der geplanten Zielversion. Sie sind keine unverbindlichen Vielleicht-Funktionen.

Gleichzeitig gilt:

- Upload ist erst nach eigener Upload-/Supabase-Spec, Datenschutzklaerung und Freigabe umzusetzen.
- Supabase ist erst nach eigener technischer Spec, Datenmodell-Freigabe und Freigabe zu integrieren.
- KI-Voranalyse ist erst nach eigener Spec, Datenschutzklaerung und Freigabe technisch umzusetzen und aktiv zu kommunizieren.
- Solange Funktionen nicht live sind, duerfen sie nur als geplant, vorbereitet oder in Vorbereitung kommuniziert werden.

## Umsetzungsregel

Keine Code-, UI-, Supabase-, KI-, Routing- oder Cleanup-Aenderung ohne freigegebene Spec, freigegebenen Plan und passende Workflow-Aufgabe.
