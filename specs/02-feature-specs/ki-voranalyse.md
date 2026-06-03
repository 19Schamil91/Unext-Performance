# KI-Voranalyse

Status: Freigegeben als Basis fuer die naechsten Planungsaufgaben.

Grundlage: `specs/07-open-questions/open-questions.md`, Abschnitte 6 und 10, `specs/00-global-spec/global-spec.md`, `specs/01-functional-map/functional-map.md`, `specs/02-feature-specs/kfz-gutachten.md`, `specs/02-feature-specs/digitale-schadenaufnahme.md` und bestehende Technical Specs.

## 1. Kurzueberblick / Executive Summary

KI-Voranalyse ist fester Roadmap-Bestandteil.

KI unterstuetzt spaeter digitale Schadenaufnahme und interne Gutachterpruefung.

KI ist in Version 1 keine aktive Funktion, solange sie nicht technisch umgesetzt, datenschutzseitig geprueft und ausdruecklich freigegeben ist.

KI ersetzt kein Gutachten und keinen Gutachter.

Die finale Bewertung erfolgt immer durch einen Gutachter.

## 2. Version 1 und Zielversion

### Version 1 / erste veroeffentlichbare Website

In Version 1 gilt:

- keine aktive KI-Funktion, solange sie nicht technisch umgesetzt und freigegeben ist
- KI darf hoechstens als geplant, in Vorbereitung oder kuenftig integriert kommuniziert werden
- keine kundensichtbaren KI-Ergebnisse
- keine KI-Verarbeitung von Kundendaten oder Bildern
- keine KI-Schadenbewertung
- keine finale Schadenhoehe

### Zielversion / Roadmap

Die Zielversion umfasst:

- KI-Voranalyse nach freigegebenem Upload-/Supabase-/Datenmodell
- interne Auswertung von Bildern und Schadeninformationen
- strukturierte Zusammenfassung fuer Gutachter
- interne Unterstuetzung der Bearbeitung
- kundensichtbare Hinweise oder Ergebnisse nur nach gesonderter fachlicher, technischer, datenschutzseitiger und rechtlicher Freigabe

## 3. Voraussetzungen fuer technische Umsetzung

Technische Umsetzung erst nach:

- Detail-Spec
- Datenschutzklaerung
- Einwilligung
- Upload-/Supabase-Konzept
- technischem Umsetzungsplan
- Workflow-Aufgabe
- ausdruecklicher Freigabe

Ohne diese Punkte keine KI-Verarbeitung von Kundendaten, Schadenbildern oder Dokumenten.

## 4. Datenbasis der spaeteren KI-Voranalyse

Spaetere moegliche Eingaben:

- hochgeladene Schadenbilder
- Schadenbeschreibung
- Fahrzeugdaten
- Anfrageinformationen
- optional interne Notizen, wenn freigegeben
- keine unnoetigen personenbezogenen Daten

KI soll nur Daten verwenden, die fuer den Zweck erforderlich und freigegeben sind.

Sensible Daten muessen geschuetzt behandelt werden:

- Kennzeichen
- FIN / Fahrgestellnummer
- Versicherungsdaten
- Dokumente
- Schadenbilder
- Personenbezug

## 5. Aufgaben der spaeteren KI-Voranalyse

Die spaetere KI-Voranalyse kann unterstuetzen durch:

- sichtbare Schadenbereiche beschreiben
- moegliche beschaedigte Fahrzeugbereiche strukturieren
- Bildqualitaet pruefen
- fehlende Perspektiven oder weitere benoetigte Fotos erkennen
- Schadenbeschreibung, Fahrzeugdaten und Bilder intern zusammenfuehren
- strukturierte Zusammenfassung fuer Gutachter vorbereiten
- interne Bearbeitung und erste Sichtung unterstuetzen

## 6. Interne Ausgaben / Ergebnisstruktur

KI-Ergebnisse duerfen spaeter intern zum Beispiel enthalten:

- kurze Zusammenfassung der sichtbaren Schaeden
- betroffene Fahrzeugbereiche
- Hinweise zur Bildqualitaet
- fehlende Perspektiven / weitere benoetigte Fotos
- strukturierte Notiz fuer Gutachter
- Unsicherheiten oder Einschraenkungen

Nicht enthalten duerfen:

- finale Schadenhoehe
- verbindliche Reparaturkosten
- vollstaendiges Gutachten
- juristische Einschaetzung
- Versicherungsentscheidung
- automatische finale Entscheidung

## 7. Nutzung und Sichtbarkeit

- KI-Ergebnisse sind zunaechst intern fuer Gutachter vorgesehen.
- Keine kundensichtbaren KI-Ergebnisse in Version 1.
- Kundensichtbare KI-Hinweise oder Ergebnisse nur nach gesonderter fachlicher, technischer, datenschutzseitiger und rechtlicher Freigabe.
- Falls kundensichtbar, immer unverbindlich, unterstuetzend und mit Gutachter-Disclaimer.
- Finale Bewertung immer durch Gutachter.

## 8. Kommunikation vor technischer Umsetzung

Zulaessig:

- KI-gestuetzte Voranalyse in Vorbereitung
- digitale Schadenaufnahme mit geplanter KI-Unterstuetzung
- KI-gestuetzte Voranalyse als geplanter Ausbauschritt
- digitale Schadenaufnahme mit kuenftig integrierter KI-Voranalyse

Nicht so formulieren, als waere KI bereits live.

Nicht so formulieren, als wuerde KI eine finale oder verbindliche Schadenbewertung liefern.

Nicht so formulieren, als wuerde KI ein Gutachten erstellen.

Aktive Formulierung `KI-gestuetzte Voranalyse von Fahrzeugschaeden` erst nach technischer Umsetzung, Datenschutzpruefung und Freigabe verwenden.

## 9. Ausgeschlossene Versprechen

Die KI darf nicht versprechen:

- finale Schadenhoehe
- vollstaendiges Gutachten
- rechtlich verbindliche Bewertung
- automatische Gutachtenerstellung
- Ersatz eines Gutachters
- sichere Erkennung aller Schaeden
- garantierte Erkennung aller Schaeden
- verbindliche Reparaturkosten
- versicherungsrechtliche Einschaetzung
- juristische Bewertung
- Haftungsuebernahme durch KI
- automatische Bewertung
- Entscheidung ueber Haftung oder Versicherung
- Aussage, dass KI genauer, schneller oder besser als Gutachter ist

## 10. Disclaimer

Pflichtgedanke fuer alle KI-Kommunikation:

> Die finale Bewertung erfolgt immer durch einen Gutachter.

Laengerer Hinweis fuer Informationsbereiche:

> Die KI-gestuetzte Voranalyse dient ausschliesslich der Unterstuetzung der digitalen Schadenaufnahme. Die finale Bewertung und Erstellung des Gutachtens erfolgt durch einen Gutachter.

Kurzform fuer UI-nahe Hinweise:

> KI unterstuetzt die Voranalyse. Die finale Bewertung erfolgt durch einen Gutachter.

## 11. Datenschutz und Einwilligung

Vor KI-Verarbeitung klaeren:

- welche Daten verarbeitet werden
- Zweck der Verarbeitung
- Upload und Speicherung von Bildern
- Nutzung fuer KI-Voranalyse
- Speicherfristen
- Zugriff
- Loeschung und Auskunft
- ausdrueckliche Einwilligung
- keine unnoetigen personenbezogenen Daten
- keine Nutzung sensibler Daten ohne Zweck und Freigabe

Keine Verarbeitung ohne Freigabe.

Ohne geklaerte Datenschutz- und Einwilligungslogik keine KI-Verarbeitung von Kundendaten oder Schadenbildern.

## 12. Anbieterneutralitaet / technische Richtung

Erste moegliche Umsetzung kann eine Vision-faehige KI-Schnittstelle sein, zum Beispiel OpenAI Vision API oder ein vergleichbarer Anbieter.

Anbieter nicht ueberall hart verdrahten.

KI-Schicht austauschbar planen.

Technische Details gehoeren in `specs/03-technical-specs/ai-analysis.md`.

Konkrete Anbieterwahl, Modellwahl und technische Integration gehoeren in die Technical Spec.

Anbieter, Modelle und Schnittstellen duerfen in dieser Feature Spec nicht hart festgelegt werden.

Moegliche technische Struktur wird dort geplant, nicht in dieser Feature Spec.

## 13. Begriffe

Nicht verwenden:

- KI-Gutachten
- vollautomatisches Gutachten
- rechtssicheres KI-Gutachten
- KI ersetzt den Gutachter
- finale Schadenhoehe durch KI
- verbindliche KI-Schadenanalyse
- automatische Gutachtenerstellung
- KI-Sachverstaendiger
- Gutachten per KI
- KI entscheidet den Schaden
- KI berechnet den Schaden verbindlich

Zulaessig:

- geplante KI-Unterstuetzung
- geplante KI-Voranalyse
- KI-gestuetzte Voranalyse in Vorbereitung
- digitale Schadenaufnahme mit geplanter KI-Unterstuetzung
- digitale Voranalyse
- unterstuetzende Bildanalyse
- interne Vorpruefung

## 14. Offene Entscheidungen

Offen bleiben:

- KI-Anbieter / Modell
- Prompt-/Analyseformat
- interne Ergebnisstruktur im Detail
- Speicherort der KI-Ergebnisse
- Speicherfristen
- Rollen und Zugriffsrechte
- Einwilligungstexte
- ob und wann kundensichtbare KI-Hinweise erlaubt sind
- ob KI mit Upload/Supabase gemeinsam oder stufenweise umgesetzt wird
