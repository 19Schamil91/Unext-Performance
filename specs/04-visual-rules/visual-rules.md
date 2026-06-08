# Visual Rules

Status: Freigegeben als Basis fuer die naechsten Planungsaufgaben.

Grundlage:

- `specs/00-global-spec/global-spec.md`
- `specs/01-functional-map/functional-map.md`
- `specs/02-feature-specs/kfz-gutachten.md`
- `specs/02-feature-specs/digitale-schadenaufnahme.md`
- `specs/02-feature-specs/ki-voranalyse.md`
- `specs/02-feature-specs/contact-flow.md`
- `specs/02-feature-specs/seo.md`
- `specs/02-feature-specs/faq.md`
- `specs/02-feature-specs/mehrsprachigkeit.md`
- `specs/03-technical-specs/frontend.md`
- `specs/03-technical-specs/routing.md`
- `specs/03-technical-specs/data-model.md`
- `specs/03-technical-specs/supabase.md`
- `specs/03-technical-specs/ai-analysis.md`

Diese Spec erfindet keine neuen fachlichen Annahmen. Sie beschreibt visuelle, UX- und UI-Leitplanken fuer spaetere Aufgaben.

## 1. Kurzueberblick / Executive Summary

Diese Datei beschreibt visuelle und UX-Leitplanken fuer spaetere UI-, Homepage-, Kontaktflow-, Upload-, Mehrsprachigkeits-, FAQ-, SEO- und Launch-Aufgaben.

Diese Aufgabe ist keine Design-Umsetzung und keine Code-Umsetzung.

Mobile First ist verbindlich.

Die Website muss klar als KFZ-Gutachten-Seite in Berlin wirken, nicht als Autovermietung, Werkstatt oder Fahrzeugservice.

Formular, Upload, Supabase und KI duerfen visuell nicht als live dargestellt werden, solange sie nicht umgesetzt, geprueft und freigegeben sind.

## 2. Version 1 und Zielversion

### Version 1 / erste veroeffentlichbare Website

Version 1 beschreibt die erste veroeffentlichbare Website ohne Upload-, Supabase- oder KI-Livefunktion.

Version 1 enthaelt visuell:

- starke Hauptseite fuer `KFZ-Gutachten Berlin`
- Hero mit klarer Leistungsbeschreibung
- Telefon-/WhatsApp-CTAs mobil sichtbar
- E-Mail ergaenzend
- Formular nur, wenn umgesetzt und freigegeben
- Gutachtenarten als Abschnitte
- Ablauf / Anfrage
- digitale Schadenaufnahme als Anfragevorbereitung
- Unterlagen / Bilder als Vorbereitung
- Vertrauen / Qualifikation
- FAQ
- Kontakt / Standort / Oeffnungszeiten
- Impressum / Datenschutz erreichbar
- keine Upload-/Supabase-/KI-Livefunktion

### Zielversion / Roadmap

Die Zielversion ist eine spaetere Ausbaustufe und darf visuell nicht als bereits live erscheinen.

Moegliche Roadmap-Bereiche:

- spaeterer Formular-/Upload-Flow
- spaetere Supabase-Speicherung
- spaetere interne KI-Voranalyse
- moegliche Admin-/Portal-Bereiche
- moegliche Landingpages
- mehrsprachige Ausbaustufe

## 3. Bestehende UI und Designsystem zuerst pruefen

Vor visuellen Aenderungen muessen vorhandene Komponenten, Layouts, Styles, Farben, Abstaende, Buttons, Icons, Assets und responsive Muster geprueft werden.

Bestehende passende Muster sollen wiederverwendet werden, wenn sie fachlich, technisch und visuell zur neuen KFZ-Gutachten-Ausrichtung passen.

Nichts darf blind ueberschrieben, geloescht oder neu gebaut werden.

Wenn bestehende UI-Muster alte Nicht-Scope-Leistungen wie Autovermietung, Mietwagen, Werkstatt oder Fahrzeugservice staerken, muessen sie im Rework-Plan sauber ersetzt oder zurueckgebaut werden.

## 4. Mobile First

Alle neuen oder geaenderten UI-Bereiche werden zuerst fuer mobile Nutzung geplant und geprueft.

Pflichtregeln:

- Mobile Ansicht zuerst planen.
- Telefon und WhatsApp schnell erreichbar machen.
- Anfrage-CTA nur auf einen freigegebenen Anfrageweg fuehren.
- Grosse Touch-Ziele fuer wichtige Aktionen vorsehen.
- Keine langen Textbloecke auf kleinen Bildschirmen.
- Hero mobil nicht ueberladen.
- FAQ/Accordion mobil gut lesbar halten.
- Kontaktbereich mobil klar gliedern.
- Mobile Zeilenumbrueche pruefen.
- Mehrsprachige Inhalte separat mobil pruefen, weil Textlaengen abweichen koennen.
- Spaetere Upload-Strecke fuer Handy-Kamera und Galerie optimieren, aber nur nach Freigabe.

## 5. Seitenstruktur und visuelle Prioritaet

Empfohlene visuelle Version-1-Struktur:

- H1 / Hero: `KFZ-Gutachten Berlin`
- primaere CTAs: Anrufen, WhatsApp
- unterstuetzende Anfrage nur, wenn freigegeben
- Gutachtenarten
- Ablauf / Anfrage
- digitale Schadenaufnahme als Anfragevorbereitung
- Unterlagen / Bilder
- Vertrauen / Qualifikation
- FAQ
- Kontakt / Standort / Oeffnungszeiten
- Footer mit Impressum und Datenschutz

Regeln:

- Hauptleistung visuell priorisieren.
- Alte Leistungen nicht visuell priorisieren.
- Keine visuelle Ueberladung durch zu viele gleich wichtige Sektionen.

## 6. CTA-Regeln

Haupt-CTAs:

- Jetzt anrufen
- WhatsApp senden
- Gutachten anfragen
- Schaden melden

Regeln:

- CTAs muessen zur tatsaechlich verfuegbaren Funktion passen.
- Wenn kein Formular freigegeben ist, muss Anfrage auf Telefon, WhatsApp, E-Mail oder einen anderen freigegebenen Kontaktweg ausweichen.
- Kein Formular-CTA, solange Formular nicht umgesetzt und freigegeben ist.
- Kein Upload-CTA, solange Upload nicht umgesetzt und freigegeben ist.
- Keine Supabase- oder KI-CTA.
- Keine 24/7-, Sofortdienst-, Schadenhoehen-, Reparaturkosten- oder garantierte Bearbeitungszeit versprechen.
- Mobile Reihenfolge bevorzugt: Anrufen, WhatsApp, Anfrage.

Sticky-CTAs oder mobile Kontaktleisten:

- Duerfen genutzt werden, wenn sie die mobile Nutzung erleichtern und wichtige Inhalte nicht verdecken.
- Duerfen nur freigegebene Kontaktwege enthalten.
- Zulaessig sind insbesondere Anrufen, WhatsApp und Anfrage nur, wenn der Anfrageweg freigegeben ist.
- Wenn kein Formular freigegeben ist, muss `Anfrage` auf Telefon, WhatsApp, E-Mail oder einen anderen freigegebenen Kontaktweg ausweichen.
- Duerfen keine Formular-, Upload-, Supabase-, KI-, Admin- oder Portal-Funktion suggerieren, solange diese nicht umgesetzt, geprueft und ausdruecklich freigegeben sind.
- Muessen mobil gut bedienbar sein, ausreichend grosse Touch-Ziele haben und duerfen Impressum, Datenschutz, FAQ-Inhalte oder Kontaktinformationen nicht verdecken.

## 7. Typografie, Textlaenge und Zeilenumbrueche

- Hauptaussage kurz und klar halten.
- `KFZ-Gutachten Berlin` oder `KFZ-Gutachten in Berlin` als erste erkennbare Positionierung nutzen.
- Lange Fachbegriffe mobil pruefen.
- CTA-Texte kurz halten.
- FAQ-Antworten scanbar halten.
- Mehrsprachige Textlaengen separat pruefen.
- Keine langen unstrukturierten Textbloecke.
- Wichtige Aussagen duerfen auf Mobile nicht unguenstig umbrechen.
- Keine uebertriebenen Claims visuell hervorheben.

## 8. Kontaktbereich

Der Kontaktbereich muss sichtbar machen:

- Telefon
- WhatsApp
- E-Mail ergaenzend
- Standort Berlin
- Adresse aus Global Spec
- Oeffnungszeiten aus Global Spec
- neutrale Rueckmeldeerwartung

Zulaessige neutrale Formulierung:

> Wir melden uns zeitnah zur weiteren Abstimmung.

Regeln:

- Keine frei erfundenen Kontaktdaten oder Oeffnungszeiten.
- Keine konkrete Rueckmeldefrist ohne Bestaetigung.
- Keine Sofortgarantie.
- Keine Schadenhoehe oder Kostenschaetzung im Kontaktbereich versprechen.
- Impressum und Datenschutz muessen erreichbar bleiben.

## 9. Formular-, Upload-, Supabase- und KI-Gating

- Formular visuell nur anzeigen, wenn umgesetzt und freigegeben.
- Upload visuell nur anzeigen, wenn umgesetzt, datenschutzseitig geprueft und freigegeben.
- Supabase nicht als kundensichtbare Funktion darstellen.
- KI nicht als aktive Live-Funktion darstellen, solange nicht umgesetzt und freigegeben.
- Roadmap-Hinweise nur vorsichtig und nicht wie aktive Funktionen darstellen.
- Keine UI-Elemente, Buttons, Badges oder Icons verwenden, die eine nicht freigegebene Funktion als verfuegbar erscheinen lassen.

## 10. Spaetere Upload-Strecke

Wenn Upload umgesetzt wird:

- Mobile First fuer Kamera und Galerie.
- Kurze Formularschritte.
- Klare Hinweise zu benoetigten Bildern.
- Bildqualitaetshinweise sichtbar, aber nicht ueberladen.
- Datenschutz- und Einwilligungshinweise verstaendlich platzieren.
- Upload darf kein fertiges Gutachten oder finale Bewertung versprechen.
- Dateitypen, Dateigroessen, Fehlerzustaende und Sicherheits-/Virenpruefung spaeter UI-seitig beruecksichtigen.
- Upload nur mit freigegebenem Supabase-/Storage-/Datenschutzkonzept.

## 11. KI-Hinweise

KI darf visuell und textlich nur als unterstuetzende Voranalyse dargestellt werden.

Pflichtgedanke:

> Die finale Bewertung erfolgt immer durch einen Gutachter.

Regeln:

- KI vor technischer Umsetzung nur als geplant, vorbereitet oder in Vorbereitung kommunizieren.
- Keine Darstellung als `KI-Gutachten`.
- Keine Darstellung als Ersatz fuer Gutachter.
- Keine finale Schadenhoehe oder verbindliche Bewertung versprechen.
- Keine automatisierte Gutachtenerstellung visualisieren.
- Keine KI-Ergebnisse kundensichtbar zeigen ohne Freigabe.
- KI-Unsicherheit, interne Pruefung und Gutachterpruefung muessen spaeter visuell verstaendlich abgebildet werden, falls KI kundensichtbar wird.

## 12. Vertrauen / Sachverstaendigenkompetenz

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

Regeln:

- Trust-Bereich sachlich halten.
- Keine nicht freigegebenen Zertifikate, Siegel, Mitgliedschaften oder Reviews verwenden.
- Bewertungssterne, Review-Badges, Trust-Siegel, Kundenstimmen, Referenzen oder Zertifikatsdarstellungen duerfen nicht als Platzhalter verwendet werden, solange keine ausdrueckliche Freigabe und keine gepruefte Quelle vorliegt.
- Google-Bewertungen, Reviews oder Referenzen nur visuell einbinden, wenn sie fachlich, rechtlich und inhaltlich freigegeben sind.
- Keine erfundenen Kundenstimmen, Beispielbewertungen, Fake-Sterne, Dummy-Siegel oder Platzhalter-Reviews verwenden.
- Keine uebertriebenen Erfolgsgarantien oder Versicherungsversprechen.
- Trust-Elemente duerfen keine nicht bestaetigten Qualifikationen, Erfolgsgarantien, Versicherungsversprechen oder uebertriebenen Erfahrungsaussagen suggerieren.

## 13. Keine Werkstatt- oder Autovermietungswirkung

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
- Autovermietung
- Fahrzeugservice

Regeln:

- Keine entsprechenden Hero-Bilder, Icons, Karten, CTA-Gruppen oder Navigationspunkte als aktive Leistungen.
- Alte Inhalte spaeter sauber entfernen oder visuell zurueckbauen.
- Keine alten Nicht-Scope-Leistungen in Footer, Navigation oder FAQ visuell staerken.

## 14. Bilder, Icons und visuelle Motive

- Bilder muessen zur KFZ-Gutachten-/Schadendokumentations-Ausrichtung passen.
- Keine Mietwagen-, Werkstatt-, Reifenservice-, Abschleppdienst- oder Fahrzeugaufbereitungs-Bildwelt als Hauptmotiv.
- Icons duerfen keine nicht freigegebenen Leistungen suggerieren.
- Bildwelt sachlich, serioes und nicht uebertrieben dramatisch halten.
- Keine sensiblen Schadenbilder echter Kunden ohne Freigabe.
- Performance beachten: Bilder optimieren und keine unnoetig grossen Assets verwenden.
- Inhaltlich relevante Bilder brauchen sinnvolle Alt-Texte.
- Dekorative Bilder sollen entsprechend als dekorativ behandelt werden.
- Alt-Texte duerfen keine nicht freigegebenen Leistungen, uebertriebenen Claims, 24/7-Versprechen, Schadenhoehen, Reparaturkosten oder KI-Gutachten suggerieren.
- Bilder, Icons und Alt-Texte muessen zur bestaetigten Ausrichtung `KFZ-Gutachten Berlin` passen und duerfen keine Werkstatt-, Mietwagen-, Abschleppdienst-, Reifenservice- oder Autovermietungswirkung erzeugen.

## 15. Navigation, Footer und interne Verlinkung

- Navigation und Footer duerfen nur freigegebene aktive Inhalte visuell hervorheben.
- Keine alten Nicht-Scope-Leistungen als aktive Navigationspunkte.
- Keine Upload-/Supabase-/KI-/Admin-/Portal-Links ohne Freigabe.
- Sprachumschalter nur fuer freigegebene Sprachversionen anzeigen.
- Impressum und Datenschutz muessen sichtbar und erreichbar bleiben.

## 16. Mehrsprachigkeit

- Deutsch ist fachlich fuehrend.
- Russisch und Englisch duerfen Layouts nicht sprengen.
- CTA-Laengen pro Sprache pruefen.
- KI-, Rechts- und Datenschutztexte je Sprache vorsichtig pruefen.
- Keine Sprachversion darf mehr versprechen als Deutsch.
- Nicht freigegebene Sprachversionen nicht im Sprachumschalter anzeigen.
- Mehrsprachige Hero-, CTA-, FAQ- und Kontakttexte separat mobil pruefen.

## 17. Accessibility

- Semantische Ueberschriftenstruktur visuell unterstuetzen.
- Buttons und Links klar unterscheidbar gestalten.
- Ausreichende Kontraste einhalten.
- Grosse Touch-Ziele vorsehen.
- Tastaturbedienbarkeit bei interaktiven Elementen spaeter pruefen.
- FAQ/Accordion zugaenglich planen.
- Formulare spaeter mit Labels, Fehlermeldungen und Datenschutz-Hinweisen planen.
- Bildzugaenglichkeit ueber passende Alt-Texte oder dekorative Behandlung einplanen.
- Keine rein farbliche Informationsvermittlung.

## 18. Performance

- Mobile Performance beachten.
- Bilder und Icons optimieren.
- Keine unnoetigen Animationen.
- Keine schweren visuellen Effekte ohne Nutzen.
- Keine Roadmap-Funktionen visuell oder technisch laden, solange sie nicht aktiv sind.
- Wichtige Kontakt-CTAs schnell sichtbar und nutzbar halten.

## 19. SEO- und FAQ-Darstellung

- H1 und sichtbare Seitenstruktur muessen zur SEO-Spec passen.
- Standard-H1: `KFZ-Gutachten Berlin`
- FAQ nur mit bestaetigten Inhalten.
- FAQ darf keine nicht freigegebenen Leistungen oder Versprechen visuell staerken.
- Strukturierte Daten/FAQPage nur spaeter nach Freigabe und sichtbaren Inhalten.
- Keine alten SEO-Ziele visuell priorisieren.

## 20. Reviewer / Checker

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

Wenn kein Reviewer genutzt wurde, muss kurz begruendet werden, warum keiner erforderlich war.

## 21. Pruefungen vor visueller Umsetzung

Vor spaeterer UI-/Design-/Frontend-Umsetzung pruefen:

- bestehende UI / Designsystem
- freigegebene Feature Specs
- freigegebene Technical Specs
- Mobile First
- CTA-Verfuegbarkeit
- Formular-/Upload-/Supabase-/KI-Status
- Sticky-CTAs / mobile Kontaktleisten
- Mehrsprachigkeit
- SEO/FAQ
- Kontakt/Standort/Oeffnungszeiten
- Nicht-Scope-Leistungen
- Alt-Texte / Bildzugaenglichkeit
- Reviews / Trust-Elemente
- Accessibility
- Performance
- Reviewer/Checker

## 22. Grenzen / Nicht-Scope dieser Spec

Diese Spec ist keine:

- Design-Umsetzung
- UI-Implementierung
- Code-Umsetzung
- finale Homepage-Gestaltung
- finale Content-Ausarbeitung
- Upload-Implementierung
- Supabase-Integration
- KI-Integration
- Admin-/Portal-Umsetzung
- finale Rechts- oder Datenschutzpruefung

## 23. Offene Entscheidungen

- konkrete visuelle Ausgestaltung der Homepage
- finale Sektionen
- finale CTA-Texte
- finale Bildwelt / Icons / Assets
- ob zum ersten Launch alle Sprachversionen live sind
- ob Formular zum Launch live ist
- ob Upload, Supabase oder KI beim ersten Launch live sind
- ob Sticky-CTAs oder mobile Kontaktleisten genutzt werden
- finale Alt-Text-/Bildstrategie
- ob Reviews/Bewertungen eingebunden werden
- finale Trust-/Review-Darstellung
- konkrete Accessibility-/Performance-Checks
- welche Reviewer fuer welche spaeteren Aufgaben genutzt werden
