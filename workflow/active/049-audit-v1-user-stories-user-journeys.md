# Aufgabe 049 - V1-User-Stories und Nutzerwege vollständig prüfen

## Ziel

Alle relevanten V1-User-Stories und vollständigen Nutzerwege werden systematisch mit der tatsächlich umgesetzten deutschen Website als fachlicher Referenz abgeglichen. Zusätzlich wird der vorhandene englische und russische Stand read-only inventarisiert, damit die spätere dreisprachige Umsetzung auf klar dokumentierten Lücken aufbaut.

Der Audit soll nachvollziehbar zeigen:

- ob jede relevante User Story umgesetzt ist
- ob der zugehörige Nutzerweg vollständig und verständlich ist
- ob User Story, Akzeptanzkriterium und tatsächliche UI übereinstimmen
- ob unnötige Schritte, Sackgassen oder tote Links bestehen
- ob ausschließlich vorhandene Leistungen und Funktionen versprochen werden
- ob Kontaktwege sinnvoll und technisch erreichbar sind
- ob User Stories nicht mehr zum aktuellen V1-Scope passen
- ob umgesetzte Inhalte ohne nachvollziehbare User Story bestehen
- ob frühere User Stories durch den Projekt-Pivot veraltet sind
- welche V1-Kernseiten, Routen, Inhalte und Nutzerwege in EN/RU fehlen oder noch dem alten Leistungsscope entsprechen
- welche sprachspezifischen Qualitäts-, Layout- und Funktionsprüfungen vor dem gemeinsamen Launch erforderlich sind

## Kontext

Die User Stories wurden bei der bisherigen Umsetzung inhaltlich berücksichtigt, aber nicht bei jedem Task vollständig als formale Traceability-Grundlage verwendet.

Nach Fertigstellung und Harmonisierung der deutschen V1-Kernseiten soll deshalb ein vollständiger Audit aller relevanten User Stories und Nutzerwege durchgeführt werden.

Aufgabe 049 erfolgt erst nach:

- 045: Fahrzeugbewertung-Unterseite
- 046: Schadendokumentation-Unterseite
- 047: Über-uns Trust / Qualifikation / Zertifikat
- 048: Deutsche Kernseiten auf Konsistenz, Typografie und Trust prüfen
- 050: Gutachtenarten-URLs und bestehende Leistungsrouten migrieren

Aufgabe 049 startet erst nach Aufgabe 050 und muss vor 032 und 029 abgeschlossen sein, damit der User-Journey-Audit die endgültige deutsche Gutachtenarten-Routenstruktur prüft und Übersetzungen sowie SEO auf einer fachlich und nutzerseitig geprüften deutschen V1-Struktur aufbauen.

Der V1-Sprachumfang ist verbindlich entschieden: Deutsch, Englisch und Russisch müssen gemeinsam launchfähig sein. Deutsch ist die fachliche Referenz. Aufgabe 032 entscheidet nicht mehr über den Sprachumfang, sondern konkretisiert nach diesem Audit das Übersetzungs-, Qualitäts- und responsive Layoutvorgehen. Die eigentliche EN/RU-Umsetzung benötigt eine spätere, ausdrücklich freizugebende Aufgabe.

## Verbindliche Sprach- und Qualitätsgrundlage

- Deutsch bildet die fachliche Inhaltsreferenz für Englisch und Russisch.
- EN/RU müssen fachlich gleichwertig sein und dieselben Leistungsgrenzen, Kontaktwege und Nutzerziele vermitteln.
- Wortgetreue Übersetzungen sind nicht erforderlich. Texte dürfen sprachspezifisch gekürzt oder umgestellt werden, wenn die Aussage erhalten bleibt.
- EN/RU dürfen keine zusätzlichen, unbestätigten oder stärkeren Versprechen enthalten.
- Mobile, Tablet und Desktop müssen für jede Sprache separat geprüft werden.
- Eine menschliche Prüfung der englischen und russischen Texte ist vor dem Launch erforderlich.
- Die finale Launch-Freigabe setzt bestandene fachliche, technische und visuelle Prüfungen für DE, EN und RU voraus.

## Zu lesende Grundlagen

Vor dem Audit müssen mindestens diese Dateien vollständig berücksichtigt werden:

- `specs/05-user-stories/user-stories.md`
- `specs/01-functional-map/functional-map.md`
- `specs/02-feature-specs/kfz-gutachten.md`
- `specs/04-visual-rules/visual-rules.md`
- `specs/06-work-plans/v1-launch-masterplan.md`
- `DECISIONS.md`
- relevante abgeschlossene Workflow-Tasks

Keine neue User Story darf unbemerkt erfunden werden. Neue Empfehlungen müssen ausdrücklich als neue oder zu ergänzende User Story gekennzeichnet werden.

## Zu prüfende deutsche V1-Bereiche

### Kernseiten

- Startseite `/`
- Unfallgutachten `/gutachtenarten/unfallgutachten`
- Fahrzeugbewertung `/gutachtenarten/fahrzeugbewertung`
- Schadendokumentation `/gutachtenarten/schadendokumentation`
- Über uns `/ueber-uns`
- Kontakt `/kontakt`
- Impressum `/impressum`
- Datenschutz `/datenschutz`
- AGB `/agb`

Die bisherigen deutschen `/leistungen/...`-URLs werden im Audit zusätzlich auf korrektes permanentes Redirect-Verhalten zu den endgültigen Gutachtenarten-Routen geprüft.

### Navigation und Nutzerführung

- Desktop-Header
- Dropdown `Gutachtenarten`
- Mobile-Menü
- Footer
- Startseitenkarten
- direkte Einstiege zu den drei Gutachtenarten
- interne Links und CTAs
- Zurück- und Weiter-Navigation

### Kontaktwege

- Telefon
- WhatsApp
- E-Mail
- Kontaktformular
- gutachtenartspezifische Formulare
- Validierung
- Erfolgs- und Fehlermeldungen
- bestehender Resend-Prozess

## Dreisprachige Inventarisierung

Für jede V1-Kernseite wird eine DE/EN/RU-Matrix geführt. Sie enthält mindestens:

- deutsche, englische und russische Route
- Seite technisch vorhanden: ja oder nein
- gemeinsamer oder sprachspezifischer Inhalt
- erkennbar aktueller oder möglicherweise veralteter Inhalt
- Sprachwechsel und technisches Ziel
- Navigation, Kontaktwege, Formulare und Fehlermeldungen
- mögliche Sprachmischung
- Übersetzungs-, Qualitäts- und spätere visuelle Prüfbedarfe
- Abhängigkeiten zu 032, 029, 026 und 033

Diese Inventarisierung schreibt oder bewertet noch keine vollständigen Übersetzungen. Sie schafft die prüfbare Grundlage für das spätere Übersetzungs- und Umsetzungspaket.

## Verpflichtende Traceability-Matrix

Die Ergebnistabelle muss alle relevanten V1-User-Stories abdecken und mindestens diese Spalten enthalten:

- User-Story-ID
- Titel
- Nutzerrolle
- Nutzerziel
- betroffene Seite oder Komponente
- umgesetzt: `ja`, `teilweise`, `nein` oder `nicht mehr V1-relevant`
- konkreter Nachweis
- zugehöriges Akzeptanzkriterium
- erkannte Lücke
- empfohlene Maßnahme
- zuständiger Folgetask

Die Matrix darf nicht nur einzelne Seiten oder ausgewählte User Stories betrachten.

## Zentrale End-to-End-Nutzerwege

### Unfallgutachten

1. Nutzer erkennt Unfallgutachten als Hauptleistung.
2. Nutzer gelangt über Startseite oder Dropdown zur Detailseite.
3. Nutzer versteht, wann ein Unfallgutachten sinnvoll ist.
4. Nutzer erkennt relevante Inhalte und hilfreiche Angaben.
5. Nutzer erreicht Telefon, WhatsApp oder Anfrage.
6. Nutzer landet nicht bei alten Nicht-V1-Leistungen.

### Fahrzeugbewertung

1. Nutzer findet Fahrzeugbewertung über Startseite oder Dropdown.
2. Nutzer versteht typische Bewertungszwecke.
3. Nutzer versteht, welche Merkmale berücksichtigt werden.
4. Nutzer erkennt, dass kein Verkaufspreis garantiert wird.
5. Nutzer erreicht das passende Formular.
6. Keine automatische oder KI-basierte Bewertung wird versprochen.

### Schadendokumentation

1. Nutzer findet Schadendokumentation direkt.
2. Nutzer versteht die Abgrenzung zum Unfallgutachten.
3. Nutzer versteht den Nutzen von Fotos, Unterlagen und geordneter Dokumentation.
4. Nutzer kann Kontakt aufnehmen.
5. Kein Upload, Portal oder automatische Analyse wird als live dargestellt.

### Allgemeiner Kontaktweg

1. Nutzer findet Kontaktmöglichkeiten schnell.
2. Nutzer kann zwischen Telefon, WhatsApp, E-Mail und Formular wählen.
3. Formulare sind verständlich und mobil bedienbar.
4. Validierung und Fehlermeldungen sind nachvollziehbar.
5. Anfragen erreichen weiterhin den bestehenden Resend-Prozess.

## Fachliche Grenzen

Ausdrücklich zu prüfen ist:

- Unfallgutachten bleibt Hauptleistung.
- Fahrzeugbewertung und Schadendokumentation sind klar abgegrenzt.
- Es bestehen keine unnötigen Doppelungen zwischen den Seiten.
- Alte Nicht-V1-Leistungen werden nicht aktiv beworben.
- Es gibt keine Rechtsberatung.
- Es gibt keine Kosten-, Zeit-, Preis- oder Anerkennungsgarantie.
- Upload, Supabase, KI-Bewertung und Kundenportal werden nicht als live dargestellt.
- Es gibt keine automatische Schadenhöhe.
- Die finale Bewertung erfolgt durch einen Gutachter.

## UX-, Accessibility- und Mobile-Prüfung

Prüf-Viewports:

- Mobile: 390 px
- Tablet: 768 px
- Desktop: 1440 px

Zu prüfen ist:

- Kontaktwege sind ohne unnötiges Suchen erreichbar.
- CTA-Texte werden nicht abgeschnitten.
- Es bestehen keine toten Links oder unnötigen Zwischenseiten.
- Begriffe sind verständlich.
- Formulare haben keine unnötigen Pflichtfelder.
- Feldbezeichnungen und Platzhalter sind verständlich.
- Screenreader- und Tastaturbedienung funktionieren.
- Fokuszustände sind sichtbar.
- Es gibt keine horizontalen Überbreiten.
- Nutzer können ihre Aufgabe mit möglichst wenigen Schritten erledigen.

## Vorgehen

1. Grundlagen, User Stories und relevante abgeschlossene Tasks vollständig lesen.
2. Relevante V1-User-Stories erfassen und die verpflichtende Traceability-Matrix erstellen.
3. Deutsche Kernseiten, Navigation, Kontaktwege und Formulare statisch und im Browser prüfen.
4. Vorhandene EN/RU-Routen, Inhalte, Sprachwechsel, Navigation, Kontaktwege, Formulare und erkennbare Altinhalte read-only inventarisieren.
5. Zentrale End-to-End-Nutzerwege auf 390 px, 768 px und 1440 px nachvollziehen; im späteren vollständigen Audit jede Sprache separat prüfen.
6. Fachliche Grenzen und tatsächlich verfügbare Leistungen gegen die sichtbaren Aussagen prüfen.
7. Jede erkannte Lücke einordnen und einer Maßnahme oder einem zuständigen Folgetask zuweisen.
8. Technische Checks und passende vorhandene Reviewer gemäß Projektregeln ausführen.
9. Ergebnis und verbleibende Lücken vollständig zusammenfassen.

Für jede erkannte Lücke muss eine der folgenden Einordnungen festgelegt werden:

- kleine Korrektur innerhalb 049
- bestehender späterer Task
- neuer gezielter Folgetask
- bewusst nicht V1-relevant
- spätere Ausbaustufe 022, 023 oder 024

Große Änderungen dürfen nicht unkontrolliert nebenbei umgesetzt werden.

## Ergebnis

Aufgabe 049 muss am Ende eindeutig ausgeben:

`V1 user stories and user journeys passed`

oder:

`V1 user stories and user journeys have gaps`

## Scope-Grenzen

Aufgabe 049 darf:

- User Stories und Nutzerwege prüfen
- eine vollständige Traceability-Matrix erstellen
- vorhandene DE/EN/RU-Routen, Inhalte und Nutzerwege read-only inventarisieren
- kleine, eindeutig begrenzte deutsche UI-, Text- oder Linklücken beheben
- fehlende Folgetasks nach Freigabe dokumentieren
- veraltete User Stories kennzeichnen

Aufgabe 049 darf nicht:

- umfangreiche Übersetzungen umsetzen
- EN/RU-Texte ändern
- EN/RU-Routen migrieren oder neu erstellen
- SEO-/Metadata-/Structured-Data-Aufgaben vorwegnehmen
- neue Leistungen erfinden
- Upload-, Supabase-, KI-, Admin- oder Portal-Funktionen bauen
- große Seitenumbauten ohne eigenen Task durchführen
- Aufgabe 033 ersetzen

## Abgrenzung zu Aufgabe 048 und Aufgabe 033

### Aufgabe 048

Gemeinsamer Konsistenz-, Typografie- und Trust-Check von Startseite, Über-uns-Seite und den drei deutschen Gutachten-Unterseiten.

### Aufgabe 049

Vollständiger Abgleich aller relevanten V1-User-Stories und End-to-End-Nutzerwege der deutschen Referenzwebsite sowie Inventarisierung der Übertragungs-, Routen- und Qualitätslücken für EN/RU.

### Aufgabe 033

Späterer vollständiger technischer, visueller und funktionaler Launch-Qualitätscheck der gesamten Website.

## Akzeptanzkriterien

- Alle genannten Grundlagen wurden vollständig gelesen und bei der Prüfung berücksichtigt.
- Alle relevanten V1-User-Stories sind in einer vollständigen Traceability-Matrix erfasst.
- Jede Matrixzeile enthält Status, konkreten Nachweis, Akzeptanzkriterium, mögliche Lücke, empfohlene Maßnahme und zuständigen Folgetask.
- Die deutschen V1-Kernseiten, Navigation, Nutzerführung und Kontaktwege wurden geprüft.
- Die vorhandenen DE-, EN- und RU-Routen und Kernseiten sind in einer nachvollziehbaren Matrix inventarisiert.
- Alte, fehlende oder möglicherweise veraltete EN/RU-Inhalte, Sprachmischungen und nicht vorhandene Zielrouten sind dokumentiert.
- Sprachwechsel, Navigation, Kontaktwege, Formulare und Fehlermeldungen sind im dreisprachigen Audit-Scope berücksichtigt.
- Die vier zentralen End-to-End-Nutzerwege wurden vollständig nachvollzogen.
- Die fachlichen Grenzen und vorhandenen Leistungen stimmen mit der sichtbaren Website überein oder Abweichungen sind eindeutig dokumentiert.
- Mobile, Tablet und Desktop wurden auf 390 px, 768 px und 1440 px geprüft.
- Tastaturbedienung, Screenreader-Grundlagen, Fokuszustände, Formulare, Links und Kontaktwege wurden berücksichtigt.
- Jede erkannte Lücke ist einer erlaubten Maßnahme oder einem zuständigen Folgetask zugeordnet.
- Kleine Korrekturen bleiben klar begrenzt; große Änderungen wurden nicht nebenbei umgesetzt.
- Es wurden keine EN/RU-Texte geschrieben, keine EN/RU-Routen migriert und keine SEO-, Metadata-, Structured-Data-, Upload-, Supabase-, KI-, Admin- oder Portal-Umsetzung vorweggenommen.
- Deutsch ist als fachliche Referenz und DE/EN/RU als verbindlicher gemeinsamer V1-Launch-Scope dokumentiert.
- Die spätere menschliche Textprüfung und separate responsive Prüfung bei 390 px, 768 px und 1440 px je Sprache sind verbindlich zugeordnet.
- Das Ergebnis lautet eindeutig `V1 user stories and user journeys passed` oder `V1 user stories and user journeys have gaps`.
- Aufgabe 049 wurde erst nach 045, 046, 047, 048 und 050 begonnen und vor 032 und 029 abgeschlossen.

## Start- und Inventurnotiz vom 29. Juli 2026

### Geprüfter Ausgangsstand

- Aufgabe 049 wurde nach den abgeschlossenen Aufgaben 045, 046, 047, 048 und 050 gestartet.
- Die deutsche Website ist die fachliche Referenz für den späteren dreisprachigen Launch.
- Die Prüfung in diesem Startschritt war ausschließlich statisch und read-only. Es wurden keine Screenshots und keine vollständige visuelle oder funktionale Abnahme durchgeführt.
- Die vollständige Traceability-Matrix und die Browserprüfung der Nutzerwege bleiben Bestandteil der weiteren Bearbeitung von 049.

### Vorläufige DE/EN/RU-Routen- und Seitenmatrix

| V1-Bereich | Deutsch | Englisch | Russisch | Technischer und inhaltlicher Erstbefund |
|---|---|---|---|---|
| Startseite | `/` | `/en` | `/ru` | Alle drei Routen vorhanden; EN/RU verwenden weiterhin den alten breiten Fahrzeugservice-Scope mit sechs Leistungen, UNFALLX-Bezügen und Express-Kurierbereich. |
| Unfallgutachten | `/gutachtenarten/unfallgutachten` | `/en/leistungen/unfallgutachten` | `/ru/leistungen/unfallgutachten` | Alle drei Inhalte technisch vorhanden, aber Route und Inhalt sind nicht gleichgezogen; EN/RU liegen noch unter der alten Leistungsstruktur. |
| Fahrzeugbewertung | `/gutachtenarten/fahrzeugbewertung` | nicht vorhanden | nicht vorhanden | Deutsche V1-Seite vorhanden; eigenständige EN/RU-Detailseiten und passende Zielrouten fehlen. |
| Schadendokumentation | `/gutachtenarten/schadendokumentation` | nicht vorhanden | nicht vorhanden | Deutsche V1-Seite vorhanden; eigenständige EN/RU-Detailseiten und passende Zielrouten fehlen. |
| Leistungsübersicht | `/leistungen` | `/en/leistungen` | `/ru/leistungen` | Technisch in allen drei Sprachen vorhanden; EN/RU zeigen weiterhin alte Nicht-V1-Leistungen. Die deutsche Route bleibt ein technischer Legacy-Fall für 026/029. |
| Über uns | `/ueber-uns` | `/en/ueber-uns` | `/ru/ueber-uns` | Alle drei Routen vorhanden; EN/RU enthalten weiterhin alte Fahrzeugservice-, UNFALLX- und Ausbauaussagen und bilden den neuen deutschen Trust-/Qualifikationsstand nicht ab. |
| Kontakt | `/kontakt` | `/en/kontakt` | `/ru/kontakt` | Alle drei Routen und lokalisierte Kontakttexte/Formulare vorhanden; fachliche Gleichwertigkeit, Fehlermeldungen und responsive Darstellung sind später vollständig zu prüfen. |
| Impressum | `/impressum` | `/en/impressum` | `/ru/impressum` | Alle drei Routen vorhanden; menschliche inhaltliche und rechtliche Sprachprüfung vor Launch erforderlich. |
| Datenschutz | `/datenschutz` | `/en/datenschutz` | `/ru/datenschutz` | Alle drei Routen vorhanden; menschliche inhaltliche und rechtliche Sprachprüfung vor Launch erforderlich. |
| AGB | `/agb` | `/en/agb` | `/ru/agb` | Alle drei Routen vorhanden; V1-Relevanz und menschliche inhaltliche/rechtliche Sprachprüfung bleiben zu bestätigen. |

### Navigation, Sprachwechsel und Formulare

- Desktop-Header, Mobile-Menü und Footer besitzen grundsätzlich Locale-Varianten.
- Die deutsche Navigation folgt dem neuen Gutachtenarten-Scope. EN/RU führen noch alte Leistungen wie Mietwagen, Werkstatt, Detailing, Zulassung sowie Abschlepp- und Pannenhilfe.
- `getLocalizedPath` überträgt grundsätzlich denselben Pfad in die gewählte Sprache. Beim Wechsel von einer neuen deutschen `/gutachtenarten/...`-Route entstehen dadurch derzeit `/en/gutachtenarten/...` beziehungsweise `/ru/gutachtenarten/...`, obwohl diese Zielrouten noch fehlen.
- Die lokalisierten Kontakt- und Serviceformulare besitzen EN/RU-Labels sowie lokalisierte Erfolgs- und Aktionsmeldungen. Vollständigkeit, Verständlichkeit, Validierungsfehler und tatsächlicher End-to-End-Versand werden erst im vollständigen Audit geprüft.
- Der gemeinsame lokalisierte `error.tsx` zeigt derzeit deutsche Fehlertexte auf EN/RU-Routen. Das ist eine bestätigte Sprachmischung.
- Im lokalisierten App-Router-Scope fehlt weiterhin ein eigenes `not-found.tsx`. Dieser bekannte Befund wird nicht in diesem Startschritt behoben und bleibt für die spätere i18n-/Launch-QA-Einordnung offen.
- Hreflang, mehrsprachige Metadata, Canonicals und Structured Data bleiben von 049 unberührt und werden nach der Sprach- und Routenklärung in 029 behandelt.

### Vorbereitete deutsche Kernnutzerwege

| Nutzerweg | Einstieg und Entscheidung | Zielroute und CTA | Kontaktweg | Vorläufige User-Story-Zuordnung | Im vollständigen Audit zu prüfen |
|---|---|---|---|---|---|
| Unfallgutachten | Startseiten-Hauptfokus, Gutachtenkarte oder Dropdown | `/gutachtenarten/unfallgutachten`; Telefon, WhatsApp, Anfrage | Telefon, WhatsApp, Formular | US-01, US-02, US-04, US-05, US-13, US-14, US-16, US-20 | Verständlichkeit, Sackgassen, Redirects, Formular und vollständiger Abschluss |
| Fahrzeugbewertung | Startseitenkarte oder Dropdown | `/gutachtenarten/fahrzeugbewertung`; Detailseite und Bewertungsanfrage | Telefon, WhatsApp, Formular | US-03, US-04, US-13, US-16, US-20 | Bewertungsgrenzen, keine Preisgarantie, Formular und vollständiger Abschluss |
| Schadendokumentation | Startseitenkarte oder Dropdown | `/gutachtenarten/schadendokumentation`; Detailseite und Dokumentationsanfrage | Telefon, WhatsApp, Formular | US-02, US-04, US-05, US-13, US-16, US-20 | Abgrenzung zum Unfallgutachten, kein Uploadversprechen und fehlende eigene Story-Abdeckung |
| Vertrauen und Kontakt | Startseite, Über uns, Header oder Footer | `/ueber-uns`, externer DESAG-Nachweis, `/kontakt` | Telefon, WhatsApp, E-Mail, Formular | US-13, US-15, US-16, US-19, US-20 | Nachweise, externe Links, Legal-Erreichbarkeit und Kontaktabschluss |

Diese Tabelle ist eine vorbereitende Zuordnung und noch nicht die abschließende Traceability-Matrix. Insbesondere für Schadendokumentation ist im vollständigen Audit zu entscheiden, ob die vorhandenen User Stories ausreichen oder eine ergänzende User Story vorgeschlagen werden muss.

### Bestätigte Sprach- und Qualitätslücken

- EN/RU bilden den deutschen V1-Scope noch nicht fachlich gleichwertig ab.
- Eigenständige EN/RU-Routen für Fahrzeugbewertung und Schadendokumentation fehlen.
- EN/RU-Startseite, Navigation, Leistungsübersicht und Über-uns-Seite enthalten wahrscheinlich veraltete Nicht-V1-Leistungen und stärkere beziehungsweise andere Leistungsversprechen.
- Sprachwechsel von neuen deutschen Gutachtenarten-Routen kann auf nicht vorhandene EN/RU-Ziele führen.
- Der lokalisierte Fehlerzustand enthält deutsche sichtbare Texte.
- EN/RU-Kontakt-, Formular- und Legaltexte sind technisch vorhanden, benötigen aber eine vollständige menschliche Fach- und Sprachprüfung.
- Jede Sprache benötigt später eine eigene visuelle Prüfung bei 390 px, 768 px und 1440 px; längere englische und russische Texte dürfen nicht unkontrolliert das deutsche Layout übernehmen.
- Eine eigene EN/RU-Umsetzungsaufgabe ist nach 032 voraussichtlich erforderlich, darf aber erst nach ausdrücklicher Nutzerfreigabe angelegt werden.

### Abgrenzung dieses Startschritts

Nicht durchgeführt wurden:

- vollständige Traceability- und Browserprüfung
- Screenshots oder responsive Sichtprüfung
- neue oder geänderte EN/RU-Texte
- EN/RU-Routenmigration
- Website-, Komponenten-, Layout- oder Formularänderungen
- SEO-, Metadata-, Structured-Data-, Hreflang-, Sitemap-, Robots- oder Canonical-Änderungen
- Start von Aufgabe 032 oder Anlage einer neuen Übersetzungsaufgabe

## Status

Status: in Arbeit
