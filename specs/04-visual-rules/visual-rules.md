# Visual Rules

Status: Finaler Entwurf, wartet auf Freigabe.

Grundlage: `specs/07-open-questions/open-questions.md`, `specs/00-global-spec/global-spec.md`, Aufgabe 017.

## Ziel

Diese Datei beschreibt visuelle und UX-Leitplanken fuer spaetere UI-, Homepage-, Kontaktflow-, Upload- und Launch-Aufgaben. Sie ist keine Umsetzung und ersetzt keine Design- oder Code-Aufgabe.

## Mobile First

Alle neuen oder geaenderten UI-Bereiche werden zuerst fuer mobile Nutzung geplant und geprueft.

Pflichtregeln:

- Telefon und WhatsApp schnell erreichbar machen.
- Anfrage-CTA gut sichtbar platzieren.
- Keine langen Textbloecke auf kleinen Bildschirmen.
- Mobile Zeilenumbrueche pruefen.
- FAQ mobil kurz und gut lesbar halten.
- Kontaktbereich mobil klar gliedern.
- Spaetere Upload-Strecke fuer Handy-Kamera und Galerie optimieren.
- Mehrsprachige Inhalte separat mobil pruefen, weil Textlaengen abweichen koennen.

## CTA-Regeln

Haupt-CTAs:

- Jetzt anrufen
- WhatsApp senden
- Gutachten anfragen
- Schaden melden

Regeln:

- CTAs muessen zur tatsaechlich verfuegbaren Funktion passen.
- Kein Upload-CTA, solange Upload technisch nicht umgesetzt und freigegeben ist.
- Keine KI-CTA, solange KI technisch nicht umgesetzt und freigegeben ist.
- Keine 24/7-, Sofortdienst- oder garantierte Bearbeitungszeit versprechen, solange nicht bestaetigt.
- Mobile Reihenfolge bevorzugt: Anrufen, WhatsApp, Anfrage.

## Typografie und Zeilenumbrueche

- Hauptaussage kurz und klar halten.
- `KFZ-Gutachten in Berlin` als erste erkennbare Positionierung nutzen.
- Lange Fachbegriffe auf Mobile pruefen.
- CTA-Texte kurz halten.
- FAQ-Antworten scanbar halten.
- Mehrsprachige Textlaengen separat pruefen.

## Kontaktbereich

Der Kontaktbereich muss sichtbar machen:

- Telefon
- WhatsApp
- E-Mail
- Standort Berlin
- Adresse
- Oeffnungszeiten
- neutrale Rueckmeldeerwartung

Zulaessige neutrale Formulierung:

> Wir melden uns zeitnah zur weiteren Abstimmung.

Keine konkrete Rueckmeldefrist oder Sofortgarantie, solange nicht bestaetigt.

## Spaetere Upload-Strecke

Wenn Upload umgesetzt wird:

- Mobile First fuer Kamera und Galerie.
- Kurze Formularschritte.
- Klare Hinweise zu benoetigten Bildern.
- Bildqualitaetshinweise sichtbar, aber nicht ueberladen.
- Datenschutz- und Einwilligungshinweise verstaendlich platzieren.
- Upload darf kein fertiges Gutachten oder finale Bewertung versprechen.

## KI-Hinweise

KI darf visuell und textlich nur als unterstuetzende Voranalyse dargestellt werden.

Pflichtgedanke:

> Die finale Bewertung erfolgt immer durch einen Gutachter.

Regeln:

- KI vor technischer Umsetzung nur als geplant, vorbereitet oder in Vorbereitung kommunizieren.
- Keine Darstellung als `KI-Gutachten`.
- Keine Darstellung als Ersatz fuer Gutachter.
- Keine finale Schadenhoehe oder verbindliche Bewertung versprechen.
- Kundensichtbare KI-Ergebnisse nur nach gesonderter Freigabe planen.

## Vertrauen / Sachverstaendigenkompetenz

Vertrauen soll sachlich, nicht uebertrieben wirken.

Zulaessig:

- anerkannte Sachverstaendigenkompetenz
- Kfz-Sachverstaendiger fuer Schaeden an Kraftfahrzeugen und Wertermittlung
- nachvollziehbare Schadenaufnahme
- fachlich gepruefte Bewertung
- Standort Berlin
- Erfahrung im Bereich KFZ-Gutachten seit 2024

Nicht verwenden:

- oeffentlich bestellter Sachverstaendiger
- vereidigter Sachverstaendiger
- Gerichtsgutachter
- amtlich bestellter Gutachter
- amtlich anerkannt
- staatlich geprueft
- langjaehrige Erfahrung
- jahrzehntelange Erfahrung

## Keine Werkstatt- oder Autovermietungswirkung

Die Webseite darf nicht wie eine Autovermietung, Werkstatt oder Fahrzeugservice-Seite wirken.

Nicht visuell oder textlich priorisieren:

- Mietwagen
- Ersatzwagen
- Reparatur
- Werkstattservice
- Reifenservice
- Dashcam-Einbau
- Zulassung
- Abschleppdienst
- Pannenhilfe
- Fahrzeugaufbereitung
- Detailing

## Mehrsprachigkeit

- Deutsch ist fachlich fuehrend.
- Russisch und Englisch duerfen Layouts nicht sprengen.
- CTA-Laengen pro Sprache pruefen.
- KI-, Rechts- und Datenschutztexte je Sprache vorsichtig pruefen.
- Keine Sprachversion darf mehr versprechen als Deutsch.

## Reviewer / Checker

Vor Abschluss groesserer UI-, Content-, SEO-, Performance- oder Launch-Aufgaben nutzen oder bewusst begruendet ueberspringen:

- mobile_visual_checker
- desktop_visual_checker
- typography_checker
- a11y_checker
- local_seo_reviewer
- performance_budget_reviewer
- launch_reviewer
- quality_reviewer

Reviewer ersetzen nicht die Freigabe durch den User.

## Offene Entscheidungen

- Konkrete visuelle Ausgestaltung der Homepage.
- Ob zum ersten Launch alle Sprachversionen live sind.
- Ob Upload, Supabase oder KI beim ersten Launch live sind.
- Welche Reviewer fuer welche spaeteren Aufgaben konkret genutzt werden.
