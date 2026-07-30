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
- `getLocalizedPath` könnte denselben Pfad lokalisieren, die Headerlogik behandelt die neuen deutschen `/gutachtenarten/...`-Routen jedoch noch nicht als lokalisierte Seiten. Der tatsächlich geprüfte Sprachwechsel fällt deshalb auf `/en` beziehungsweise `/ru` zurück und verliert den gewählten Gutachtenkontext. Direkte Aufrufe der nicht vorhandenen `/en/gutachtenarten/...`- und `/ru/gutachtenarten/...`-Routen liefern `404`.
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

## Vollständiger read-only Audit vom 30. Juli 2026

### Auditmethodik

- Grundlagen gelesen: User Stories, Functional Map, KFZ-Gutachten-Spec, Visual Rules, V1-Launch-Masterplan, Entscheidungen, Roadmap und die abgeschlossenen Aufgaben 045 bis 050.
- Lokale Skills angewendet: `site-launch-audit`, `typography-line-break-check` und `next-router-check`.
- Read-only Reviewer eingesetzt: Content-Konsistenz, Conversion, Legal/Trust, Local SEO, Accessibility, Mobile, Desktop, Typografie, Premium, Performance und Launch.
- Produktionsbuild lokal unter `http://127.0.0.1:3113` geprüft.
- 41 vorhandene DE/EN/RU-Seitenziele auf HTTP-Status, Titel, H1, Sprache, Links, Formulare, Konsolen- und Requestfehler sowie Overflow geprüft.
- 45 Fullpage-Screenshots der Kernseiten bei 390 × 844, 768 × 1024 und 1440 × 1100 erstellt.
- Sechs 404-Screenshots fehlender EN/RU-Gutachtenrouten und sechs Journey-Screenshots ergänzt.
- Sprachwechsel, Mobile-Menü, Escape-Schließen, interne Links, `tel:`, WhatsApp, E-Mail und Datenschutz-Ziele technisch geprüft.
- Formulare nur leer gegen Pflichtfelder geprüft. Keine Anfrage und keine externe Kommunikation wurde ausgelöst.

### Technisches Gesamtergebnis

| Prüfung | Ergebnis |
|---|---|
| Vorhandene Seitenziele | 41 von 41 antworten mit `200` |
| Alte deutsche Gutachten-URLs | drei direkte permanente `308`-Weiterleitungen auf `/gutachtenarten/...` |
| Fehlende EN/RU-Gutachtenrouten | sechs direkte Aufrufe antworten mit `404` |
| Produktions-Browser | keine Console-Errors, Page-Errors oder Requestfehler |
| Responsive Dokumentbreite | kein horizontaler Seiten-Overflow in 45 Kernseiten-Screenshots |
| Mobile-Menü | DE/EN/RU öffnen, besitzen zugänglichen Titel/Beschreibung und schließen mit Escape |
| Lint / TypeScript / Build | bestanden; Build erzeugt 43 Seiten |
| Generierte Datei | `next-env.d.ts` nach dem Audit unverändert |

### V1-Kernroutenmatrix

| Sprache | Bereich | Route | HTTP / H1 | Fachstand | Sprachwechsel | Navigation, CTA, Formular | Fehler / Launchstatus |
|---|---|---|---|---|---|---|---|
| DE | Startseite | `/` | 200 / `KFZ-Unfallgutachten Berlin nach Unfall oder Schaden` | V1-Referenz | EN `/en`, RU `/ru` | drei Gutachtenkarten, Telefon, WhatsApp, Kontakt; kein Formular | alte allgemeine Metadata; teilweise launchfähig |
| EN | Startseite | `/en` | 200 / `Vehicle reports and automotive service in one place` | alter Sechs-Leistungen-Scope | DE/RU korrekt | alte Karten und mehrere alte Telefonnummern | Mietwagen, Werkstatt, Detailing, Zulassung, Pannenhilfe, Express-Kurier, UNFALLX; Blocker |
| RU | Startseite | `/ru` | 200 / `Автоэкспертиза и услуги для автомобиля в одном месте` | alter Sechs-Leistungen-Scope | DE/EN korrekt | alte Karten und mehrere alte Telefonnummern | gleiche Altleistungen und lange alte Copy; Blocker |
| DE | Unfallgutachten | `/gutachtenarten/unfallgutachten` | 200 / `Unfallgutachten in Berlin` | aktuelle V1-Seite | tatsächlich EN `/en`, RU `/ru` | Telefon, WhatsApp, Formular | Detailkontext geht verloren; Metadata mit UNFALLX |
| EN | Unfallgutachten | `/en/leistungen/unfallgutachten` | 200 / `Accident Help & Reports` | technisch vorhanden, inhaltlich alt | DE korrekt über Redirect; RU pfadgleich | Telefon, WhatsApp, Formular | stärkere Termin-, Zeit-, Claims- und Gutachtenversprechen; Blocker |
| RU | Unfallgutachten | `/ru/leistungen/unfallgutachten` | 200 / `Экспертиза ДТП и срочная помощь` | technisch vorhanden, inhaltlich alt | DE über Redirect; EN pfadgleich | Telefon, WhatsApp, Formular | stärkere Versprechen; Kartentitel läuft bei 1440 px sichtbar über; Blocker |
| DE | Fahrzeugbewertung | `/gutachtenarten/fahrzeugbewertung` | 200 / `Fahrzeugbewertung in Berlin` | aktuelle V1-Seite | tatsächlich EN `/en`, RU `/ru` | Telefon, WhatsApp, Bewertungsformular | generische alte Metadata; i18n blockiert |
| EN/RU | Fahrzeugbewertung | keine V1-Route | erwartete direkte Pfade 404 | nicht vorhanden | Wechsel von DE fällt auf Sprach-Home zurück | kein V1-Einstieg und keine CTA | Nutzerweg fehlt; Blocker |
| DE | Schadendokumentation | `/gutachtenarten/schadendokumentation` | 200 / `Schadendokumentation in Berlin` | aktuelle V1-Seite | tatsächlich EN `/en`, RU `/ru` | Telefon, WhatsApp, Dokumentationsformular | generische alte Metadata; i18n blockiert |
| EN/RU | Schadendokumentation | keine V1-Route | erwartete direkte Pfade 404 | nicht vorhanden | Wechsel von DE fällt auf Sprach-Home zurück | kein V1-Einstieg und keine CTA | Nutzerweg fehlt; Blocker |
| DE | Leistungsübersicht | `/leistungen` | 200 / `6 Hauptleistungen rund ums Fahrzeug` | Legacy-Bestand | EN/RU pfadgleich | direkt erreichbar | sechs ausgeschlossene Leistungen; 026/029 |
| EN | Leistungsübersicht | `/en/leistungen` | 200 / `Our services` | aktiver Alt-Scope | DE/RU pfadgleich | im Menü erreichbar | sechs ausgeschlossene Leistungen; Blocker |
| RU | Leistungsübersicht | `/ru/leistungen` | 200 / `Наши услуги` | aktiver Alt-Scope | DE/EN pfadgleich | im Menü erreichbar | sechs ausgeschlossene Leistungen; Blocker |
| DE | Über uns | `/ueber-uns` | 200 / `Über UNEXT GmbH` | aktuelle Trust-Seite | EN/RU pfadgleich | DESAG-Link, Telefon, WhatsApp, Kontakt | fachlich erfüllt |
| EN/RU | Über uns | `/en/ueber-uns`, `/ru/ueber-uns` | 200 / lokalisiert | alter Automotive-/UNFALLX-Stand | Header korrekt | Kontakt, kein gleichwertiger DESAG-/Weiterbildungsbereich | Trust-Parität fehlt; Home-CTA führt teils auf deutsches `/ueber-uns`; Blocker |
| DE | Kontakt | `/kontakt` | 200 / `Kontakt für KFZ-Gutachten` | aktuelle Ausrichtung | EN/RU pfadgleich | Telefon, WhatsApp, E-Mail, Formular | Versandkonfiguration nicht End-to-End geprüft |
| EN/RU | Kontakt | `/en/kontakt`, `/ru/kontakt` | 200 / lokalisiert | Formular lokalisiert, Inhalt alt | pfadgleich | Formular plus alte Service-Unterkontakte | 24-Stunden-Versprechen und ausgeschlossene Leistungen; Blocker |
| DE/EN/RU | Impressum | `/impressum`, `/en/impressum`, `/ru/impressum` | jeweils 200 / lokalisiert | vorhanden | pfadgleich | Footer erreichbar | menschliche Rechts-/Sprachprüfung offen |
| DE/EN/RU | Datenschutz | `/datenschutz`, `/en/datenschutz`, `/ru/datenschutz` | jeweils 200 / lokalisiert | vorhanden | pfadgleich | Footer/Formularlink erreichbar | menschliche Rechts-/Sprachprüfung offen |
| DE/EN/RU | AGB | `/agb`, `/en/agb`, `/ru/agb` | jeweils 200 / lokalisiert | vorhanden | pfadgleich | Footer erreichbar | V1-Relevanz und alter EN/RU-Kontext vor Launch prüfen |

### Legacy-Routeninventar

Alle folgenden Altpfade antworten in DE, EN und RU jeweils mit `200` und stellen die Leistung sichtbar als aktiv dar:

| Altleistung | DE | EN | RU | Zuständigkeit |
|---|---|---|---|---|
| Autovermietung | `/leistungen/autovermietung` | `/en/leistungen/autovermietung` | `/ru/leistungen/autovermietung` | 026/029 |
| Autoservice/Werkstatt | `/leistungen/autoservice` | `/en/leistungen/autoservice` | `/ru/leistungen/autoservice` | 026/029 |
| Detailing | `/leistungen/detailing` | `/en/leistungen/detailing` | `/ru/leistungen/detailing` | 026/029 |
| Zulassungsservice | `/leistungen/zulassungsservice` | `/en/leistungen/zulassungsservice` | `/ru/leistungen/zulassungsservice` | 026/029 |
| Abschleppdienst/Pannenhilfe | `/leistungen/abschleppdienst-pannenhilfe` | `/en/leistungen/abschleppdienst-pannenhilfe` | `/ru/leistungen/abschleppdienst-pannenhilfe` | 026/029 |

### Redirect-, Loading- und Fehlerzustände

- Die alten deutschen Unfallgutachten-, Fahrzeugbewertungs- und Schadendokumentationspfade antworten mit `308` direkt auf die jeweilige neue `/gutachtenarten/...`-Route.
- `next-router-check`: 28 UI-Routendefinitionen, davon 13 asynchrone lokalisierte Routen.
- DE erbt `loading.tsx`, `error.tsx` und `not-found.tsx` aus dem deutschen Scope.
- EN/RU erben `loading.tsx` und `error.tsx`; für alle 13 datenladenden lokalisierten Routen fehlt `app/(localized)/[locale]/not-found.tsx`.
- Der lokalisierte `error.tsx` zeigt deutsche Texte.
- Fehlende EN/RU-Gutachtenpfade zeigen die generische englische Next.js-404 ohne gesetztes `lang`-Attribut.

### Nutzerwege

| Sprache | Nutzerweg | Einstieg / Ziel | CTA | Schritte | Ergebnis / Sackgasse | User Stories |
|---|---|---|---|---:|---|---|
| DE | Unfall | Home/Dropdown → Unfallgutachten | Telefon, WhatsApp, Anfrage | 2 | vollständig; Ablauf, Unterlagen, FAQ und Trust verständlich | US-01, 02, 04, 05, 13, 14, 15, 16, 20 |
| EN/RU | Unfall | alte Homekarte/Services → alte Unfallroute | Telefon, WhatsApp, Formular | 2 | technisch vollständig, fachlich alte/stärkere Versprechen; RU mit Desktop-Überlauf | US-01, 02, 04, 05, 11, 13, 14, 20 |
| DE | Fahrzeugbewertung | Home/Dropdown → Fahrzeugbewertung | Telefon, WhatsApp, Anfrage | 2 | vollständig, keine automatische Bewertung | US-03, 04, 13, 16, 20 |
| EN/RU | Fahrzeugbewertung | kein V1-Einstieg | keine | - | nicht vorhanden; direkte Pfade 404, Sprachwechsel fällt auf Home | US-03, 11 |
| DE | Schadendokumentation | Home/Dropdown → Schadendokumentation | Telefon, WhatsApp, Anfrage | 2 | vollständig abgegrenzt, kein Upload-/Berechnungsversprechen | US-02, 04, 05, 13, 16, 20 |
| EN/RU | Schadendokumentation | kein V1-Einstieg | keine | - | nicht vorhanden; direkte Pfade 404, Sprachwechsel fällt auf Home | US-02, 05, 11 |
| DE | Vertrauen/Kontakt | Home/Header → Über uns → Kontakt | DESAG, Telefon, WhatsApp, E-Mail, Formular | 2-3 | vollständig; externer Nachweis erst nach Klick | US-13, 15, 16, 19, 20 |
| EN/RU | Vertrauen/Kontakt | Header lokalisiert; Home-CTA teils deutsch | Kontaktwege vorhanden | 2-3 | Trust alt, DESAG-Parität fehlt, Home-CTA kann Sprache verlieren | US-11, 13, 15, 19 |

### Navigation, Accessibility und Formulare

- Deutscher Header, Mobile-Menü und Footer führen zu den drei neuen Gutachtenrouten.
- EN/RU führen weiterhin zu Unfallgutachten plus fünf ausgeschlossenen Altleistungen.
- Mobile-Menüs besitzen je Sprache einen screenreader-zugänglichen Titel und eine Beschreibung und schließen nach Escape.
- Primäre Ziele sind konsistent: `tel:+493023613927`, `https://wa.me/4917664365185`, `mailto:info@unext.de`.
- EN/RU zeigen zusätzlich alte servicebezogene Telefonnummern und WhatsApp-Ziele.
- Das Kontaktformular hat in allen Sprachen vier Pflichtfelder: Name, E-Mail, Betreff und Nachricht. Labels und Datenschutzlinks sind lokalisiert.
- Gutachtenformulare verlangen Name, Telefon und E-Mail. Diese zusätzliche Reibung ist in 033 fachlich zu prüfen.
- Leere Pflichtfelder wurden ohne Versand abgefangen. Die native Meldung war wegen der Headless-Browser-Locale englisch und ist kein belastbarer Website-Sprachbefund.
- Erfolgs-, Konfigurations- und Versandmeldungen sind lokalisiert. Zod-Feldfehler werden als rohe Standardsprache ausgegeben.
- Resend wurde nicht extern ausgelöst. Zielumgebungsvariablen und kontrollierter Versandtest bleiben für 034.
- Grundlegende Semantik, Fokuslogik, Alt-Texte und Mobile-Menü-Bedienung sind vorhanden. Vollständige Kontrast-, Screenreader- und Tastaturabnahme bleibt 033.

### Traceability-Matrix

Jede Zeile enthält die getrennte Bewertung für DE, EN und RU.

| User Story | Sprache / Einstieg / Route / CTA | Erwartung und tatsächliches Ergebnis | Status | Priorität / Folgetask |
|---|---|---|---|---|
| US-01 Unfallkunde | DE: Home/Unfallseite, Telefon/WhatsApp/Anfrage. EN/RU: alte Home/Unfallseite | DE klar und ohne Sofortgarantie. EN/RU technisch erreichbar, aber alter Scope und stärkere Zusagen | DE erfüllt; EN/RU teilweise | hoch, EN/RU-Umsetzung |
| US-02 Fahrzeugschaden | DE: Detailseiten/Formulare. EN/RU: alte Unfallseite/Formular | DE erklärt Unterlagen; Pflichtfeldlogik prüfen. EN/RU enthalten Zeit-/Claims-Zusagen | DE/EN/RU teilweise | mittel DE: 033; EN/RU Blocker |
| US-03 Fahrzeugbewertung | DE: neue Detailseite/Anfrage. EN/RU: kein Einstieg | DE als Gutachtenart verständlich. EN/RU fehlen vollständig | DE erfüllt; EN/RU nicht vorhanden | Blocker, 032 + EN/RU-Umsetzung |
| US-04 Smartphone | DE/EN/RU: Mobile Header/CTAs | 390 px ohne Seiten-Overflow, CTAs erreichbar; EN/RU führen fachlich falsch | DE erfüllt; EN/RU teilweise | hoch, EN/RU-Umsetzung/033 |
| US-05 Bilder | DE/EN/RU: WhatsApp/Formular | kein Website-Upload; EN/RU ohne Dokumentationsparität | DE erfüllt; EN/RU teilweise | hoch, EN/RU-Umsetzung |
| US-11 Mehrsprachigkeit | Sprachumschalter und drei Sprachstände | DE Referenz; Wechsel verliert Gutachtenkontext; EN/RU versprechen mehr | DE teilweise; EN/RU nicht erfüllt | Blocker, 032 + EN/RU-Umsetzung |
| US-12 keine Altleistungen | Legacy-Routen, Home, Header, Footer | DE-Legacy direkt aktiv; EN/RU bewerben fünf Altleistungen sichtbar | nicht erfüllt in DE/EN/RU | Blocker, 026/029/EN-RU |
| US-13 Kontakt | Telefon, WhatsApp, E-Mail, Formulare | DE primäre Wege korrekt. EN/RU zusätzlich alte Servicekontakte | DE erfüllt; EN/RU teilweise | hoch EN/RU; Versand 034 |
| US-14 FAQ | Gutachten-Detailseiten | DE kurz und bestätigt. EN/RU enthalten stärkere Aussagen | DE erfüllt; EN/RU teilweise | hoch, EN/RU-Umsetzung |
| US-15 Trust | Über uns/DESAG/Kontakt | DE sachlich. EN/RU ohne gleichwertige Qualifikation/Weiterbildung | DE erfüllt; EN/RU nicht erfüllt | Blocker, EN/RU-Umsetzung |
| US-16 Accessibility | Menüs, Links, FAQ, Formulare | Grundsemantik/Escape bestanden; Vollabnahme offen; RU-Textüberlauf | teilweise in DE/EN/RU | mittel/hoch, 033 + EN/RU |
| US-17 Datenschutz | Formulare/Datenschutz | kein Upload/Supabase/KI; Legaltexte und Deployment noch prüfen | DE erfüllt; EN/RU teilweise | 032/034 |
| US-18 Cleanup | alte Seiten, Navigation, SEO | Gutachten migriert, Alt-Scope bleibt aktiv | DE teilweise; EN/RU nicht erfüllt | hoch, 026/029/EN-RU |
| US-19 Pflichtseiten | Footer/Formularlinks | Impressum/Datenschutz in allen Sprachen erreichbar | erfüllt in DE/EN/RU | menschliche Prüfung 032/034 |
| US-20 mobile Konsistenz | 390/768/1440 | kein Dokument-Overflow; RU-Unfallkarte überläuft bei 1440 | DE erfüllt; EN teilweise; RU teilweise | hoch RU, 033 + EN/RU |

### Priorisierte Befunde

#### Launch-Blocker

1. Fehlende EN/RU-V1-Seiten für Fahrzeugbewertung und Schadendokumentation.
2. Sprachwechsel von deutschen Gutachtenseiten verliert den Detailkontext; direkte neue lokalisierte Pfade liefern 404.
3. EN/RU-Startseite, Navigation, Footer, Leistungsübersicht, Über uns, Kontakt und AGB bewerben ausgeschlossene Altleistungen.
4. EN/RU enthalten stärkere unbestätigte Zeit-, Soforthilfe-, Claims- und Gutachtenversprechen.
5. EN/RU bilden die deutsche Qualifikation und Weiterbildung nicht gleichwertig ab.
6. Gemeinsame Metadata bewirbt Altleistungen; Structured Data verwendet `AutoRepair`. Zuständig ist 029.
7. `/leistungen` und fünf deutsche Altleistungsrouten bleiben direkt als aktive Angebote erreichbar. Zuständig sind 026/029.
8. Der russische Kartentitel `Сертифицированные эксперты` läuft bei 1440 px sichtbar über.

#### Hohe und mittlere Folgepunkte

- EN/RU-Home-Über-uns-Link kann auf die deutsche Route führen.
- Lokalisierter Error-State ist deutsch; lokalisierter Not-Found-State fehlt.
- Resend-Deployment und echter kontrollierter Versand sind nicht geprüft.
- Serverseitige Zod-Feldfehler sind nicht sprachspezifisch.
- Gutachtenformulare verlangen gleichzeitig Telefon und E-Mail.
- Schreibweise `UNEXT GmbH` gegenüber `Unext GmbH` in Specs menschlich bestätigen.
- Legaltexte in allen drei Sprachen menschlich prüfen.
- Next Image meldete im Dev-Modus nicht konfigurierte Qualitätswerte `72`, `74`, `78`, `82`, `86` und `88`; der Build besteht, die Konfiguration bleibt 033.
- Das nicht referenzierte Asset `public/images/home-hero-team-new.webp.png` ist mit rund 19,4 MB ein Cleanup- und Deployment-Bloat-Risiko, aber kein aktueller Laufzeitfehler. Nutzung und Entfernung sind in 026 kontrolliert zu prüfen.
- Inline-`clamp()`-Typografie und einzelne harte Blockumbrüche sind derzeit keine sichtbaren Clippingfehler, bleiben aber 033-Punkte.

### Zuordnung zu Folgeaufgaben

| Zuständigkeit | Befunde |
|---|---|
| 032 | Übersetzungs-, Qualitäts-, Review- und Responsive-Vorgehen; Route-Mapping; menschliche EN/RU-Prüfung |
| spätere freizugebende EN/RU-Umsetzung | neue Gutachtenseiten, V1-Texte, Navigation, Trust, Kontakt, Fehlerzustände, Link- und Layoutparität |
| 029 | Metadata, OpenGraph, Structured Data, `AutoRepair`, Canonicals, Hreflang, Sitemap/Robots |
| 026 | kontrollierter Rückbau der Legacy-Inhalte nach Routing-/SEO-Entscheidung |
| 033 | Accessibility, Typografie, Geräte, Formulare, Performance und Regression |
| 034 | Deployment-Variablen, kontrollierter Formularversand und externe Dienste |
| 035 | Fehler-, Formular- und Routingmonitoring nach Launch |
| 026 | zusätzlich Nutzung und kontrollierte Entfernung des unreferenzierten 19,4-MB-Assets prüfen |

Keine neue Aufgabe wurde angelegt. Aufgabe 032 wurde nicht gestartet.

### Reviewer- und Skill-Ergebnisse

- Content-Konsistenz: nicht launchfähig wegen altem EN/RU-Scope, fehlenden Seiten und Zeitversprechen.
- Conversion: nicht launchfähig wegen fehlenden V1-Journeys und altem Multi-Service-Fluss.
- Legal/Trust: nicht launchfähig; Scope- und Trust-/Firmierungsfragen benötigen menschliche Klärung, ohne Rechtsberatung zu ersetzen.
- Local SEO: nicht launchfähig; Metadata, interne Verlinkung und Structured Data zeigen alte Suchintentionen.
- Accessibility: Grundsemantik des Mobile-Menüs funktioniert; Sprachwechsel, Alt-Navigation und deutsche Fehlertexte brechen die mehrsprachige Journey.
- Premium: EN/RU wirken wie ein älteres anderes Angebot.
- Typografie: kein allgemeiner Dokument-Overflow; ein bestätigter russischer Desktop-Kartentitel läuft über.
- Desktop: nicht launchfähig wegen fehlender Sprachrouten und russischem Textüberlauf.
- Mobile: 390 px ohne horizontalen Overflow; Menüs, CTAs und Formulare bedienbar, fachliche EN/RU-Journeys falsch.
- Performance: keine akute Laufzeitregression; Route-Parität blockiert den Launch, Bild-Quality-Konfiguration bleibt 033 und das unreferenzierte 19,4-MB-Asset bleibt 026.
- `next-router-check`: 28 Definitionen, 13 datenladende lokalisierte Routen, ein fehlender lokalisierter Not-Found-Scope mit 13 betroffenen Routen.

### Screenshot- und Auditpfade

Auditwurzel: `C:/tmp/unext-task-049-multilingual-audit/`

| Ordner | Inhalt |
|---|---|
| `de/` | 21 Fullpage-Screenshots: Home, drei Gutachtenarten, `/leistungen`, Über uns, Kontakt bei 390/768/1440 |
| `en/` | 12 Fullpage-Screenshots: Home, Unfallgutachten, Über uns, Kontakt bei 390/768/1440 |
| `ru/` | 12 Fullpage-Screenshots: Home, Unfallgutachten, Über uns, Kontakt bei 390/768/1440 |
| `missing-routes/` | sechs 390-px-Screenshots der fehlenden EN/RU-`/gutachtenarten/...`-Routen |
| `journeys/` | sechs Journey-Screenshots und `interaction-results.json` |
| `audit-results.json` | Status-, Titel-, H1-, Link-, Formular-, Konsolen- und Overflow-Ergebnisse |

Insgesamt wurden 57 PNG-Dateien ausschließlich außerhalb des Repositorys erzeugt.

### Ergebnis

`V1 user stories and user journeys have gaps`

Die vier deutschen Kernnutzerwege sind fachlich weitgehend vollständig und responsiv nutzbar. Der gemeinsame DE/EN/RU-Launch ist noch nicht möglich, weil EN/RU nicht dieselben Seiten, denselben bestätigten Leistungsumfang, dieselben Grenzen und dieselbe Trust-/Routingqualität besitzen.

## Status

Status: wartet auf Review
