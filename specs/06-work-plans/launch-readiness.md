# Launch Readiness

Status: Finaler Entwurf, wartet auf Freigabe.

Grundlage: `specs/07-open-questions/open-questions.md`, Abschnitt 12.

## Mindestinhalte fuer erste veroeffentlichbare Version

- Hero mit klarer Aussage `KFZ-Gutachten in Berlin`
- kurze Erklaerung, was UNEXT anbietet
- Gutachtenarten
- Ablauf der Anfrage
- digitale Schadenaufnahme als Prozess
- Hinweis auf geplante KI-Unterstuetzung, falls KI noch nicht live ist
- Sachverstaendigenkompetenz / Vertrauen
- Kontaktmoeglichkeiten
- Telefonnummer
- WhatsApp
- E-Mail
- Standort
- Oeffnungszeiten
- FAQ
- Impressum
- Datenschutz
- klare Mobile-First-CTAs

## Alte Inhalte nicht sichtbar

Vor Launch nicht mehr als aktuelle Leistungen sichtbar:

- Autovermietung
- Mietwagen / Ersatzwagen
- Fahrzeugservice
- Werkstatt
- Reifenservice
- Dashcam-Einbau
- Zulassungsservice
- Abschleppdienst
- Pannenhilfe
- Fahrzeugaufbereitung
- alte SEO-Texte zu diesen Themen
- alte FAQ-Inhalte zu diesen Themen
- alte strukturierte Daten zu diesen Themen
- alte Navigationspunkte zu diesen Themen

Nicht benoetigter Code erst nach Verwendungspruefung und Cleanup-Plan entfernen.

## Rechtliche Seiten

Zu pruefen und anzupassen:

- Impressum
- Datenschutz
- Cookie-/Consent-Hinweise, falls vorhanden
- Kontaktformular-Hinweise
- spaetere Upload-Hinweise
- spaetere KI-Verarbeitungshinweise
- Einwilligungstexte fuer Upload und spaetere KI-Voranalyse

## Trust- und Nachweisregeln

Oeffentlich nur ausdruecklich freigegebene Trust-Elemente nutzen:

- anerkannte Sachverstaendigenqualifikation, sachlich formuliert
- Standort Berlin
- Erfahrung im Bereich KFZ-Gutachten seit 2024
- digitale Schadenaufnahme als Prozess
- geplante KI-Voranalyse als Ausbauschritt, solange nicht live
- KI-gestuetzte Voranalyse von Fahrzeugschaeden erst nach technischer Umsetzung und Freigabe

Nicht ohne Freigabe zeigen oder nennen:

- Urkunden
- Mitgliedsnummern
- Ausstellungsdaten
- personenbezogene Nachweise
- Kundenreferenzen
- konkrete Google-Bewertungen
- Kundennamen
- Versicherungs- oder Schadensfaelle
- interne Dokumente
- interne KI-Auswertungen
- konkrete Gutachtenbeispiele

## Mobile-First-Checks

Vor Launch pruefen:

- Startseite Mobile
- Telefon-CTA
- WhatsApp-CTA
- Anfrage-CTA
- Textlaengen und Zeilenumbrueche
- FAQ mobil
- Kontaktbereich mobil
- Sprachversionen mobil, falls mehrsprachig live
- Upload-Strecke mobil, falls Upload live ist

## Reviewer / Checker

Vor Launch nutzen oder bewusst begruendet ueberspringen:

- mobile_visual_checker
- desktop_visual_checker
- typography_checker
- a11y_checker
- local_seo_reviewer
- performance_budget_reviewer
- launch_reviewer
- quality_reviewer

## Technische Checks nach Code-Aenderungen

Nach Code-Aenderungen ausfuehren:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

## Offene Launch-Entscheidungen

- Ob Deutsch, Russisch und Englisch direkt live gehen oder Deutsch zuerst.
- Ob Upload, Supabase oder KI beim ersten Launch live sind oder spaeter aktiviert werden.
- Konkretes Einzugsgebiet ueber Berlin hinaus.
- Nutzung konkreter Google-Bewertungen.

## Dokumentation vor Launch

Dokumentieren:

- freigegebene Specs
- entfernte Inhalte
- alte Bereiche, die nicht mehr sichtbar sind
- erfolgreiche Checks
- genutzte Reviewer
- bewusst spaeter verschobene offene Punkte
- ob Upload, Supabase und KI live sind oder als geplante Ausbaustufe kommuniziert werden
