# Aufgabe 049 - V1-User-Stories und Nutzerwege vollständig prüfen

## Ziel

Alle relevanten V1-User-Stories und vollständigen Nutzerwege werden systematisch mit der tatsächlich umgesetzten deutschen Website abgeglichen.

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
4. Zentrale End-to-End-Nutzerwege auf 390 px, 768 px und 1440 px nachvollziehen.
5. Fachliche Grenzen und tatsächlich verfügbare Leistungen gegen die sichtbaren Aussagen prüfen.
6. Jede erkannte Lücke einordnen und einer Maßnahme oder einem zuständigen Folgetask zuweisen.
7. Technische Checks und passende vorhandene Reviewer gemäß Projektregeln ausführen.
8. Ergebnis und verbleibende Lücken vollständig zusammenfassen.

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
- kleine, eindeutig begrenzte deutsche UI-, Text- oder Linklücken beheben
- fehlende Folgetasks nach Freigabe dokumentieren
- veraltete User Stories kennzeichnen

Aufgabe 049 darf nicht:

- EN/RU-Texte ändern
- SEO-/Metadata-/Structured-Data-Aufgaben vorwegnehmen
- neue Leistungen erfinden
- Upload-, Supabase-, KI-, Admin- oder Portal-Funktionen bauen
- große Seitenumbauten ohne eigenen Task durchführen
- Aufgabe 033 ersetzen

## Abgrenzung zu Aufgabe 048 und Aufgabe 033

### Aufgabe 048

Gemeinsamer Konsistenz-, Typografie- und Trust-Check von Startseite, Über-uns-Seite und den drei deutschen Gutachten-Unterseiten.

### Aufgabe 049

Vollständiger Abgleich aller relevanten V1-User-Stories und End-to-End-Nutzerwege der deutschen Website.

### Aufgabe 033

Späterer vollständiger technischer, visueller und funktionaler Launch-Qualitätscheck der gesamten Website.

## Akzeptanzkriterien

- Alle genannten Grundlagen wurden vollständig gelesen und bei der Prüfung berücksichtigt.
- Alle relevanten V1-User-Stories sind in einer vollständigen Traceability-Matrix erfasst.
- Jede Matrixzeile enthält Status, konkreten Nachweis, Akzeptanzkriterium, mögliche Lücke, empfohlene Maßnahme und zuständigen Folgetask.
- Die deutschen V1-Kernseiten, Navigation, Nutzerführung und Kontaktwege wurden geprüft.
- Die vier zentralen End-to-End-Nutzerwege wurden vollständig nachvollzogen.
- Die fachlichen Grenzen und vorhandenen Leistungen stimmen mit der sichtbaren Website überein oder Abweichungen sind eindeutig dokumentiert.
- Mobile, Tablet und Desktop wurden auf 390 px, 768 px und 1440 px geprüft.
- Tastaturbedienung, Screenreader-Grundlagen, Fokuszustände, Formulare, Links und Kontaktwege wurden berücksichtigt.
- Jede erkannte Lücke ist einer erlaubten Maßnahme oder einem zuständigen Folgetask zugeordnet.
- Kleine Korrekturen bleiben klar begrenzt; große Änderungen wurden nicht nebenbei umgesetzt.
- EN/RU-, SEO-, Metadata-, Structured-Data-, Upload-, Supabase-, KI-, Admin- und Portal-Scope wurde nicht vorweggenommen.
- Das Ergebnis lautet eindeutig `V1 user stories and user journeys passed` oder `V1 user stories and user journeys have gaps`.
- Aufgabe 049 wurde erst nach 045, 046, 047, 048 und 050 begonnen und vor 032 und 029 abgeschlossen.

## Status

Status: offen
