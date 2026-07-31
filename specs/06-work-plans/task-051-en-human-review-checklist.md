# Aufgabe 051 - Prüfpaket für die menschliche englische Sprachprüfung

Status: vorbereitet, menschliche Prüfung offen

## Bezug

- Englischer Textentwurf: `specs/06-work-plans/task-051-en-content-draft.md`
- Entwurfscommit: `0614292 task-051: draft EN/RU V1 content`
- Fachliche Referenz: freigegebene deutsche V1-Inhalte
- Aktive Aufgabe: `workflow/active/051-implement-en-ru-v1-core-journeys.md`

## Zweck

Dieses Prüfpaket dient einer realen menschlichen Prüfung des englischen V1-Textentwurfs. Es strukturiert sprachliche Korrekturen und dokumentiert, welche zusätzlichen fachlichen oder rechtlichen Prüfungen erforderlich sind.

Eine Codex-, KI- oder Agentenprüfung ist keine menschliche Sprachfreigabe. Dieses Dokument darf erst durch eine reale prüfende Person ausgefüllt und als geprüft oder freigegeben gekennzeichnet werden.

## Angaben zur prüfenden Person

- Name oder Kennung: ______________________________________________
- Datum der Prüfung: ______________________________________________
- Sprachliche Qualifikation oder Rolle: _____________________________
- Zusätzliche fachliche oder rechtliche Rolle, falls vorhanden: ______

## Ergebnisstatus

Nur die reale prüfende Person darf genau einen Status markieren:

- [ ] offen
- [ ] mit Korrekturen freigegeben
- [ ] ohne Korrekturen freigegeben
- [ ] nicht freigegeben

Offene Bedingungen oder Einschränkungen:

____________________________________________________________________

## Trennung der Prüfungen

| Prüfung | Gegenstand | Grenze |
|---|---|---|
| Sprachprüfung | Natürlichkeit, Grammatik, Ton, Verständlichkeit, Terminologie und UI-Länge | Keine fachliche oder rechtliche Freigabe allein durch Sprachprüfung |
| Fachprüfung | Gleichwertigkeit mit der deutschen Referenz, Leistungsgrenzen, Gutachtenbegriffe, Trust und Versicherungsbezug | Durch eine fachlich geeignete Person zu bestätigen |
| Rechtsprüfung | Kostenübernahme, Gutachterwahl, Haftung, Versicherungsfragen, Legaltexte und Aussagen mit rechtlicher Wirkung | Benötigt eine geeignete beziehungsweise qualifizierte Rechtsprüfung |

Ein Sprachbefund mit fachlicher oder rechtlicher Auswirkung muss in der Korrekturtabelle entsprechend gekennzeichnet und an die passende Prüfrolle weitergegeben werden.

## Instructions for the English-language reviewer

Please review the English draft against the approved German source for meaning, scope and tone. The English wording should sound natural, professional and concise. It does not need to follow German sentence structure or word order literally.

Please verify that:

- the English reads naturally and does not sound translated word for word;
- navigation labels, headings and calls to action are clear and compact;
- terminology is suitable for British or internationally understandable English;
- the same technical terms are used consistently across all pages;
- every statement has the same professional meaning as the German reference;
- no legal, technical or promotional statement is stronger than the German source;
- wording around qualification, recognition and appraisal does not imply official, governmental, court-appointed or state-certified status;
- no former services outside the approved V1 scope are advertised;
- company and contact details do not contradict the fixed reference data below;
- form labels, placeholders, validation messages, server messages and success states are clear;
- error and 404 messages are understandable and provide useful next steps;
- calls to action are not unnecessarily long for mobile interfaces.

Do not approve legal meaning solely as part of this language review. Please flag legal, insurance-related or professional-content concerns separately.

## Besondere englische Prüfschwerpunkte

Bitte jede Formulierung im jeweiligen Seitenkontext bewerten, nicht isoliert:

- `Appraisal types`
- `Accident appraisal`
- `Vehicle accident appraisal`
- `Damage documentation`
- `Request documentation`
- `Record supporting information`
- `Qualified vehicle appraiser`
- `qualified and recognised appraiser`
- `diminution in value`
- `free choice of appraiser`
- Aussagen zur Kostenübernahme durch die gegnerische Haftpflichtversicherung
- Formulierungen zu `insurer`, `repair shop` und `lawyer`

Insbesondere ist zu prüfen, ob `appraisal`, `valuation`, `assessment`, `documentation`, `qualified` und `recognised` in ihrem jeweiligen Kontext natürlich und fachlich passend verwendet werden.

## Feste Unternehmensdaten als Prüfreferenz

Diese tatsächlichen Angaben dürfen durch die Sprachprüfung nicht verändert werden. Nur ihre sprachliche Darstellung darf kommentiert werden.

- Firma: UNEXT GmbH
- Anschrift: Lübarser Str. beziehungsweise Lübarser Straße 25, 13435 Berlin
- Telefon: 030 23613927
- WhatsApp: 0176 64365185
- E-Mail: info@unext.de
- Montag bis Freitag: 09:00 bis 18:00 Uhr
- Samstag: 10:00 bis 16:00 Uhr
- Sonntag: geschlossen
- Außerhalb der Öffnungszeiten nach Vereinbarung

Abweichungen sind als `Unternehmensdaten` zu markieren und dürfen nicht eigenständig durch neue tatsächliche Angaben ersetzt werden.

## Bereichscheckliste

Für jeden Bereich Sprache, Aussagegleichheit, Terminologie und angemessene UI-Länge prüfen.

| Bereich | Geprüft | Korrektur nötig | Fach-/Rechtsprüfung nötig | Notiz oder Referenz-ID |
|---|---|---|---|---|
| Header und Mobile-Menü | [ ] | [ ] | [ ] | |
| Footer | [ ] | [ ] | [ ] | |
| Startseite | [ ] | [ ] | [ ] | |
| Unfallgutachten | [ ] | [ ] | [ ] | |
| Fahrzeugbewertung | [ ] | [ ] | [ ] | |
| Schadendokumentation | [ ] | [ ] | [ ] | |
| Über uns | [ ] | [ ] | [ ] | |
| Trust und Qualifikation | [ ] | [ ] | [ ] | |
| Kontakt | [ ] | [ ] | [ ] | |
| Kontaktformular | [ ] | [ ] | [ ] | |
| Gemeinsames Serviceformular | [ ] | [ ] | [ ] | |
| Serverseitige Feld- und Versandmeldungen | [ ] | [ ] | [ ] | |
| Error | [ ] | [ ] | [ ] | |
| 404 | [ ] | [ ] | [ ] | |
| Rechtstexte als gesondertes, nicht abgeschlossenes Gate | [ ] | [ ] | [x] | Sprachprüfung ersetzt keine Rechtsfreigabe |

## Fach- und Rechts-Gates

Eine allgemeine englische Sprachfreigabe reicht für folgende Inhalte nicht aus:

- Kostenübernahme von Gutachterkosten;
- freie Gutachterwahl;
- Haftungs- oder Versicherungsfragen;
- Qualifikation und Anerkennung;
- DESAG-Bezug;
- Aussagen mit rechtlicher Wirkung;
- Impressum;
- Datenschutz;
- AGB.

Diese Inhalte benötigen zusätzlich eine geeignete Fachprüfung beziehungsweise qualifizierte Rechtsprüfung. Die vorhandenen englischen Legaltexte gelten durch dieses Prüfpaket nicht als freigegeben.

## Korrekturtabelle

Diese Tabelle ist durch die reale prüfende Person auszufüllen. Bei Bedarf weitere Zeilen ergänzen.

| Bereich oder Referenz-ID | Aktueller englischer Entwurf | Vorgeschlagene Korrektur | Begründung | Art des Befunds: Sprache, Fachlichkeit, Recht, Unternehmensdaten oder Layout | Freigabestatus |
|---|---|---|---|---|---|
| | | | | | |

## Abschluss durch die prüfende Person

- Alle Inhaltsbereiche geprüft: [ ]
- Korrekturen vollständig dokumentiert: [ ]
- Fachliche Befunde separat gekennzeichnet: [ ]
- Rechtliche Befunde separat gekennzeichnet: [ ]
- Unternehmensdaten mit der festen Referenz abgeglichen: [ ]
- Ergebnisstatus oben persönlich gesetzt: [ ]

Name/Kennung und Bestätigung: ______________________________________
