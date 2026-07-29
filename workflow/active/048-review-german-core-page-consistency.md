# Aufgabe 048 - Deutsche Kernseiten auf Konsistenz, Typografie und Trust prüfen

## Ziel

Nach Abschluss der Aufgaben 046 und 047 sollen diese deutschen Kernseiten gemeinsam geprüft und gezielt harmonisiert werden:

- Startseite `/`
- Unfallgutachten `/leistungen/unfallgutachten`
- Fahrzeugbewertung `/leistungen/fahrzeugbewertung`
- Schadendokumentation `/leistungen/schadendokumentation`
- Über uns `/ueber-uns`
- Kontakt `/kontakt`
- gemeinsamer Header und Footer

Die Seiten sollen sichtbar zur gleichen professionellen Website-Familie gehören, ohne inhaltlich zu Kopien voneinander zu werden.

Zusätzlich sollen kleine sichtbare Qualitätsprobleme gezielt behoben werden. Dazu gehören insbesondere unnötig schmale Textbereiche, unruhige Zeilenumbrüche, vermeidbare Wiederholungen und eine unausgewogene Textbalance auf Mobile, Tablet und Desktop.

## Kontext und Abhängigkeiten

Die Kernseiten werden innerhalb ihrer jeweiligen Aufgaben bereits einzeln auf Mobile, Tablet und Desktop geprüft. Aufgabe 048 führt danach einen gemeinsamen Konsistenz-, Typografie-, Trust- und Darstellungscheck durch.

Die Reihenfolge ist verbindlich:

1. Aufgabe 046 stellt die Schadendokumentations-Unterseite fertig.
2. Aufgabe 047 verstärkt danach die Über-uns-Seite hinsichtlich Trust, Qualifikation und Zertifikat.
3. Erst anschließend startet Aufgabe 048.

Die fertiggestellte Über-uns-Seite dient in Aufgabe 048 als Referenz für:

- Trust-Zeilen
- Qualifikationsformulierungen
- Tonalität
- Bildsprache
- visuelle Vertrauenswirkung

Die Startseite dient als Referenz für:

- zentrale Markenwirkung
- Hauptfokus Unfallgutachten
- Navigation
- CTA-Stil
- Gutachtenkarten
- grundlegende Typografie

Aufgabe 048 darf weder die Startseite noch die Über-uns-Seite vollständig neu umbauen. Größere fachliche Änderungen benötigen einen eigenen Task.

Aufgabe 048 muss vor Aufgabe 050, Aufgabe 049, Aufgabe 032 und Aufgabe 029 abgeschlossen sein, damit Routenmigration, User-Story-Audit, Übersetzungen und SEO auf harmonisierten deutschen Kernseiten aufbauen.

Aufgabe 048 konzentriert sich auf Inhalte, Typografie, Trust und visuelle Konsistenz. Sie nimmt keine URL-Migration vor; diese bleibt Aufgabe 050.

## Vorgehen

### Begriffe und Seitenhierarchie

- Das sichtbare H1-System der Gutachten-Unterseiten vergleichen:
  - `Unfallgutachten in Berlin`
  - `Fahrzeugbewertung in Berlin`
  - `Schadendokumentation in Berlin`
- Den Startseiten-Hauptfokus mit den Detailseiten vergleichen.
- Eyebrows und Trust-Zeilen vergleichen.
- Qualifikationsformulierungen mit der Über-uns-Seite abgleichen.
- Hauptbegriffe konsistent verwenden und unnötige Doppelbegriffe vermeiden.
- Häufige Wiederholungen reduzieren, insbesondere:
  - `nachvollziehbar`
  - `einordnen`
  - `Abstimmung`
  - `Anlass`
  - `Fahrzeugdaten`
  - `sachlich`

### Typografie und Zeilenumbrüche

Folgende Viewports prüfen:

- Desktop: 1440 px
- Tablet: 768 px
- Mobile: 390 px

Dabei prüfen:

- alleinstehende Wörter und ungünstige letzte Textzeilen
- unnötig schmale Textcontainer
- Hero-, Abschnitts- und CTA-Überschriften
- kurze Kartentexte
- kontrollierte, aber responsive Zeilenumbrüche
- keine starren Umbrüche, die andere Viewports verschlechtern
- vergleichbare Textbreiten, Zeilenhöhen und Abstände
- vollständig sichtbare CTA-Texte
- keine künstlich gequetschte Typografie

### Expliziter Prüffokus: Gutachtenkarten der Startseite

- Die Gutachtenkarten der Startseite sind ausdrücklich Teil von Aufgabe 048.
- Besonders zu prüfen sind die Beschreibungstexte der Karten `Fahrzeugbewertung` und `Schadendokumentation`.
- Die aktuell zu schmal wirkenden Textbereiche, unnötige `max-width`-Begrenzungen und der dadurch entstehende rechte Leerraum müssen im tatsächlichen Komponenten- und Viewport-Kontext geprüft werden.
- Beschreibungstexte sollen ihre verfügbare Kartenbreite sinnvoll nutzen und bei 390 px, 768 px und 1440 px ruhig, hochwertig und natürlich umbrechen.
- Text und Layout dürfen nur leicht optimiert werden; Kartenstruktur, Verlinkung und fachliche Bedeutung bleiben erhalten.

Folgende Formulierungen dienen ausschließlich als Prüfrichtung und sind noch nicht als sichtbarer Website-Text freigegeben:

- Fahrzeugbewertung: `Wir ordnen den Fahrzeugwert nachvollziehbar ein – für Verkauf, Kauf oder weitere Entscheidungen.`
- Schadendokumentation: `Schadenfotos und Unterlagen werden geordnet erfasst, damit der Schaden nachvollziehbar bleibt.`

Vor einer Umsetzung werden diese Vorschläge mit dem bestehenden Startseitenkontext, den Detailseiten und den häufigen Wiederholungen abgeglichen.

### Hero-, Bild- und Trust-Wirkung

- Hero-Höhen, Aufbau und Textpositionen vergleichen.
- Trust-Zeilen einheitlich und fachlich korrekt halten.
- Bildzuschnitte auf allen Prüf-Viewports kontrollieren.
- Dunkle oder leere Bildflächen vermeiden.
- Zentrale Bildmotive sinnvoll sichtbar halten.
- Bilder nicht verzerren.
- Bilddateigrößen und vorhandene WebP-Optimierung prüfen.
- Startseite und Über-uns-Seite als visuelle Referenz verwenden.
- Keine unbelegten Zertifikats-, Siegel-, Verbands- oder Mitgliedschaftsclaims ergänzen.

### Seitenstruktur und Informationsdichte

- Abschnittsreihenfolge der drei Gutachten-Detailseiten vergleichen.
- Kartenanzahl und Informationsdichte prüfen.
- FAQ-Umfang vergleichen.
- Prozess- und Ablaufbereiche vergleichen.
- Keine Seite unnötig textlastig machen.
- Jede Detailseite behält ihre fachlich eigenständige Aufgabe.
- Keine Detailseite wird zur Kopie der Startseite oder einer anderen Unterseite.
- Die Startseite bleibt die Haupt-Verkaufsseite.
- Die Über-uns-Seite bleibt die zentrale Trust- und Qualifikationsseite.

### CTAs, Navigation und Formulare

- CTA-Reihenfolge und Beschriftungen vergleichen.
- Telefon, WhatsApp und Anfragewege einheitlich darstellen.
- Header-Dropdown und Mobile-Menü prüfen.
- Startseitenkarten und Detailseitenlinks prüfen.
- Formulare passend zur jeweiligen Gutachtenart formulieren.
- Buttonbreiten und Umbrüche prüfen.
- Abgeschnittene Telefonnummern oder CTA-Texte vermeiden.
- Platzhalter und Feldbezeichnungen vergleichen.
- Accessibility- und ARIA-Texte prüfen.
- Über-uns-CTA und Startseiten-CTA auf konsistente Gestaltung prüfen.

### Technische Qualität

- Kein horizontaler Overflow.
- Keine Browser-Console-Errors.
- Keine sichtbaren Next.js-Issues.
- Links und Kontaktwege funktionieren.
- Formulare bleiben funktionsfähig.
- `git diff --check` ausführen.
- `npm run lint` ausführen.
- `npx tsc --noEmit` ausführen.
- `npm run build` ausführen.

## Scope-Grenzen

Aufgabe 048 darf:

- direkt sichtbare deutsche Texte der genannten Kernseiten harmonisieren
- sichtbare deutsche Texte der Kontaktseite sowie gemeinsame Header- und Footer-Texte prüfen und bei kleinen Konsistenzproblemen korrigieren
- responsive Zeilenumbrüche korrigieren
- Abstände und Textbreiten angleichen
- Bildpositionen und Zuschnitte nachjustieren
- kleinere seitenübergreifende Qualitätsunterschiede beheben
- CTA-, Trust- und Formularbeschriftungen konsistent machen
- die Gutachtenkarten der Startseite textlich und visuell leicht optimieren, ohne ihre Struktur oder Verlinkung grundlegend zu verändern

Aufgabe 048 darf nicht:

- neue Leistungen erfinden
- neue Seiten oder Routen erstellen
- Startseite oder Über-uns-Seite vollständig neu schreiben
- größere fachliche Umbauten ohne eigenen Task durchführen
- EN/RU-Texte ändern
- SEO-/Metadata-/Structured-Data-Dateien ändern
- Redirects erstellen
- Routen ändern oder die Migration von `/leistungen` zu `/gutachtenarten` vorwegnehmen
- `/leistungen` wieder als Übersichtsseite aufbauen
- Upload-, Supabase-, KI-, Admin- oder Portal-Funktionen ergänzen
- die Aufgaben 049, 050, 032, 029, 026, 033, 034 oder 035 starten oder vorwegnehmen

## Abgrenzung zu anderen Aufgaben

### Aufgabe 047

- überarbeitet und verstärkt die Über-uns-Seite fachlich
- prüft Qualifikation, Zertifikat, Fortbildungen und Trust-Inhalte
- erfolgt vor Aufgabe 048

### Aufgabe 048

- prüft Startseite, Über-uns-Seite und die drei Gutachten-Unterseiten gemeinsam auf visuelle, typografische und sprachliche Konsistenz
- nimmt nur begrenzte Harmonisierungen vor

### Aufgabe 049

- prüft alle relevanten User Stories und vollständigen End-to-End-Nutzerwege der deutschen Website

### Aufgabe 050

- übernimmt ausschließlich die spätere Routenmigration zu `/gutachtenarten`

### Aufgabe 032

- übernimmt den späteren i18n- und Übersetzungsumfang

### Aufgabe 029

- übernimmt SEO, Metadata und Structured Data

### Aufgabe 026

- übernimmt den kontrollierten Cleanup alter Legacy-Seiten und nicht mehr benötigter Strukturen

### Aufgabe 033

- bleibt der spätere umfassende technische, visuelle und funktionale Launch-Qualitätscheck der gesamten Website

## Akzeptanzkriterien

- Startseite, Über-uns-Seite, Kontaktseite, die drei deutschen Gutachten-Unterseiten sowie Header und Footer wurden gemeinsam bei 1440 px, 768 px und 390 px geprüft.
- Aufgabe 048 wurde erst nach Abschluss von Aufgabe 046 und Aufgabe 047 gestartet.
- Das H1-System, der Startseiten-Hauptfokus, Eyebrows, Trust-Zeilen, Qualifikationsformulierungen und Hauptbegriffe wurden nachvollziehbar verglichen.
- Auffällige Wiederholungen, ungünstige Zeilenumbrüche, unnötig schmale Textcontainer und gequetschte Typografie sind behoben oder als bewusste Abweichung dokumentiert.
- Die Karten `Fahrzeugbewertung` und `Schadendokumentation` nutzen ihre verfügbare Textbreite ausgewogen; unnötiger rechter Leerraum und unruhige Beschreibungstext-Umbrüche sind behoben oder begründet dokumentiert.
- Hero-Höhen, Bildzuschnitte, Textpositionen, Trust-Wirkung und Bilddateigrößen sind geprüft; zentrale Motive bleiben ohne Verzerrung sichtbar.
- Abschnittsreihenfolge, Informationsdichte, Karten, FAQ-Umfang und Ablaufbereiche wirken als gemeinsame Seitenfamilie, ohne die fachliche Eigenständigkeit zu verlieren.
- Startseite bleibt Haupt-Verkaufsseite und Über-uns bleibt zentrale Trust- und Qualifikationsseite.
- CTA-Reihenfolge, Navigation, Kontaktwege, Formularbeschriftungen, Platzhalter sowie Accessibility- und ARIA-Texte sind geprüft und funktionieren.
- Es gibt keinen horizontalen Overflow, keine Browser-Console-Errors und keine sichtbaren Next.js-Issues.
- `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` wurden erfolgreich ausgeführt oder Abweichungen klar dokumentiert.
- Es wurden keine EN/RU-, SEO-, Metadata-, Structured-Data-, Redirect- oder neuen Funktionsänderungen vorgenommen.
- Die Aufgaben 049, 050, 032, 029, 026, 033, 034 und 035 wurden weder gestartet noch vorweggenommen.

## Umsetzungsnotiz

Auf Grundlage der abgeschlossenen read-only Prüfung wurde ein kleines, gezieltes Änderungspaket umgesetzt:

- Die deutsche Startseitenkarte `Fahrzeugbewertung` wurde sprachlich präzisiert, um Wiederholungen von `einordnen` und `Einordnung` zu reduzieren.
- Die deutsche Startseitenkarte `Schadendokumentation` wurde verständlicher formuliert und vermeidet unnatürliche Punkte wie `Ablauf sammeln` oder `Schaden nachvollziehbar halten`.
- Die deutschen Desktop-/Tablet-Texte in `lib/translations/home-overrides.ts` und die deutschen mobilen Duplikate in `components/sections/services-section.tsx` wurden inhaltlich konsistent aktualisiert.
- Die CTA-Anordnung der deutschen Gutachtenkarten wurde so angepasst, dass Buttons auf Mobile und im schmalen Tablet-Zweispaltenlayout gestapelt bleiben und erst ab `lg` wieder nebeneinander stehen.
- Die sichtbare deutsche H1 der Unfallgutachten-Seite wurde von `Unfallgutachten Berlin` auf `Unfallgutachten in Berlin` vereinheitlicht.

Nicht geändert wurden EN/RU-Texte, Routen, SEO, Metadata, Structured Data, Assets, globale Styles, Header, Footer, Kontaktseite, Über-uns-Seite und `ROADMAP.md`.

## Prüfergebnisse

Technische Checks:

- `git diff --check`: bestanden.
- `git diff -- next-env.d.ts`: unverändert.
- `npm run lint`: bestanden.
- `npx tsc --noEmit`: bestanden.
- `npm run build`: bestanden, 43 Seiten erzeugt.

Visuelle und funktionale Prüfung:

- Startseite bei 390 px, 768 px und 1440 px geprüft.
- Unfallgutachten-Seite bei 390 px, 768 px und 1440 px geprüft.
- Kein horizontaler Overflow bei den geprüften Viewports.
- Die sichtbare H1 lautet `Unfallgutachten in Berlin`.
- Die Startseitenkarten `Fahrzeugbewertung` und `Schadendokumentation` zeigen die neuen deutschen Beschreibungstexte.
- Bei 390 px und 768 px sind Haupt-CTA und `Anrufen` gestapelt und vollständig sichtbar.
- Bei 1440 px stehen die CTAs wieder nebeneinander und bleiben vollständig sichtbar.
- Es wurden keine Page-, Hydration-, Request- oder Bildfehler festgestellt.
- Im Headless-Dev-Server traten nur HMR-WebSocket-Meldungen des Entwicklungsservers auf; sie betreffen keine Seitenfunktion und blockieren Aufgabe 048 nicht.

Screenshots wurden außerhalb des Repositorys abgelegt:

- `C:/tmp/unext-task-048-implementation-review/home-390-full.png`
- `C:/tmp/unext-task-048-implementation-review/home-768-full.png`
- `C:/tmp/unext-task-048-implementation-review/home-1440-full.png`
- `C:/tmp/unext-task-048-implementation-review/accident-390-full.png`
- `C:/tmp/unext-task-048-implementation-review/accident-768-full.png`
- `C:/tmp/unext-task-048-implementation-review/accident-1440-full.png`

## Feinschliffnotiz

Auf Grundlage der finalen visuellen Prüfung wurde ein gezielter Feinschliff ergänzt:

- Die deutschen Startseitenbeschreibungen für `Fahrzeugbewertung` und `Schadendokumentation` wurden nochmals gekürzt, damit sie auf Desktop ruhiger umbrechen.
- Endgültiger Text `Fahrzeugbewertung`: `Wir bewerten den Fahrzeugwert fachlich – etwa vor Verkauf, Kauf oder weiteren Entscheidungen.`
- Endgültiger Text `Schadendokumentation`: `Wir dokumentieren Schäden und Fahrzeugzustand mit Fotos und vorhandenen Unterlagen.`
- Die mobilen und Desktop-/Tablet-Texte bleiben inhaltlich konsistent.
- Die Ursache der schmal wirkenden mobilen Ablauftexte lag in `components/sections/process-section.tsx`: Die Beschreibung nutzte auf Mobile ebenfalls `measure-card-copy` und damit eine zusätzliche Lesebreitenbegrenzung.
- Die Korrektur wurde lokal auf die deutsche Startseiten-Prozesskomponente begrenzt: Auf Mobile nutzt der Beschreibungstext jetzt `max-w-none` und `text-wrap: pretty`; ab `sm` greift wieder `measure-card-copy`, damit Tablet und Desktop keine überlangen Zeilen bekommen.

Nicht geändert wurden weitere Detailseitenabschnitte, Header, Footer, Kontaktseite, Über-uns-Seite, EN/RU, Routen, SEO, Metadata, Structured Data, Assets, globale Styles und `ROADMAP.md`.

## Finale Prüfergebnisse

Technische Checks nach dem Feinschliff:

- `git diff --check`: bestanden.
- `git diff -- next-env.d.ts`: unverändert.
- `npm run lint`: bestanden.
- `npx tsc --noEmit`: bestanden.
- `npm run build`: bestanden, 43 Seiten erzeugt.

Visuelle und funktionale Prüfung nach dem Feinschliff:

- Startseite, Unfallgutachten, Fahrzeugbewertung und Schadendokumentation wurden bei 390 px, 768 px und 1440 px geprüft.
- Kein horizontaler Overflow bei den geprüften Seiten und Viewports.
- Keine abgeschnittenen Startseitenkarten-CTAs; die Tablet-CTA-Korrektur bleibt wirksam.
- Die Startseitenkarten `Fahrzeugbewertung` und `Schadendokumentation` zeigen die final gekürzten deutschen Beschreibungstexte.
- Die mobilen Prozesskarten `Schaden schildern`, `Unterlagen vorbereiten` und `Weitere Schritte klären` nutzen bei 390 px die verfügbare innere Kartenbreite.
- Bei 390 px beträgt die Kartenbreite der geprüften Prozesskarten 358 px und die Textbreite 316 px; es bleibt nur der reguläre Innenabstand.
- Bei 768 px bleibt die Prozess-Textbreite im Zweispaltenlayout bei 318 px; bei 1440 px bleibt sie mit 280 px ruhig lesbar.
- Die Detailseiten-Ablaufbereiche wurden bei 390 px und 1440 px als Screenshots geprüft; es wurde keine Layoutverschlechterung festgestellt.
- Es wurden keine Browser-Console-Errors, Hydration-Fehler, neuen Bildfehler oder Requestfehler festgestellt. Sichtbar war nur der React-DevTools-Hinweis des lokalen Entwicklungsservers.

Screenshots wurden außerhalb des Repositorys abgelegt:

- `C:/tmp/unext-task-048-final-refinement/home-390-full.png`
- `C:/tmp/unext-task-048-final-refinement/home-768-full.png`
- `C:/tmp/unext-task-048-final-refinement/home-1440-full.png`
- `C:/tmp/unext-task-048-final-refinement/home-cards-390.png`
- `C:/tmp/unext-task-048-final-refinement/home-cards-768.png`
- `C:/tmp/unext-task-048-final-refinement/home-cards-1440.png`
- `C:/tmp/unext-task-048-final-refinement/home-process-390.png`
- `C:/tmp/unext-task-048-final-refinement/home-process-768.png`
- `C:/tmp/unext-task-048-final-refinement/home-process-1440.png`
- `C:/tmp/unext-task-048-final-refinement/accident-process-390.png`
- `C:/tmp/unext-task-048-final-refinement/accident-process-1440.png`
- `C:/tmp/unext-task-048-final-refinement/valuation-process-390.png`
- `C:/tmp/unext-task-048-final-refinement/valuation-process-1440.png`
- `C:/tmp/unext-task-048-final-refinement/damage-process-390.png`
- `C:/tmp/unext-task-048-final-refinement/damage-process-1440.png`
## Letzter Kartenabgleich

Nach der letzten Kartenprüfung wurden ausschließlich die drei deutschen Startseitenbeschreibungen der Gutachtenkarten in den vorgesehenen Desktop-/Tablet- und Mobile-Quellen vereinheitlicht:

- Unfallgutachten: `UNEXT ordnet den Fahrzeugschaden fachlich ein und klärt mit Ihnen die nächsten Schritte.`
- Fahrzeugbewertung: `Wir bewerten den Fahrzeugwert fachlich – etwa vor Verkauf, Kauf oder weiteren Entscheidungen.`
- Schadendokumentation: `Wir halten Schäden und Fahrzeugzustand mit Fotos und vorhandenen Unterlagen fest.`

Feststellungen zur Wiederverwendung:

- Die Desktop-/Tablet-Quelle ist `lib/translations/home-overrides.ts` unter `homeTranslationOverrides.de.services.items`.
- Die mobile deutsche Duplikatquelle ist `components/sections/services-section.tsx` unter `mobileServiceDescriptions.de`.
- Die Texte erscheinen nicht als gemeinsam genutzte EN/RU-Quelle.
- Die CTA-Breakpoint-Korrektur bleibt durch `isGerman` auf deutsche Gutachtenkarten begrenzt.
- Die Prozesskarten-Korrektur in `components/sections/process-section.tsx` greift nur für `locale === "de"`; EN/RU behalten die bestehende Klasse.
- `measure-card-copy` wird auch in weiteren Komponenten genutzt, wurde aber nicht global verändert.

Prüfergebnis des Kartenabgleichs:

- Bei 390 px belegen die Beschreibungen 2, 3 und 2 Zeilen; mobile Karten stehen untereinander, daher ist keine identische Zeilenzahl erforderlich.
- Bei 768 px belegen alle drei Beschreibungen 3 Zeilen; die CTA-Korrektur bleibt wirksam und es gibt keine abgeschnittenen Buttons.
- Bei 1440 px belegen alle drei Beschreibungen 2 Zeilen, haben dieselbe Beschreibungshöhe und die erste Stichpunktzeile beginnt bei allen drei Karten auf derselben Höhe.
- Eine Desktop-Mindesthöhe war nicht notwendig.
- Kein horizontaler Overflow, keine Browser-Console-Errors, keine Hydration-Fehler und keine Request- oder Bildfehler wurden festgestellt.
- Die sichtbare H1 der Unfallgutachten-Seite bleibt `Unfallgutachten in Berlin`.

Screenshots wurden außerhalb des Repositorys abgelegt:

- `C:/tmp/unext-task-048-card-alignment-review/home-cards-390.png`
- `C:/tmp/unext-task-048-card-alignment-review/home-cards-768.png`
- `C:/tmp/unext-task-048-card-alignment-review/home-cards-1440.png`
- `C:/tmp/unext-task-048-card-alignment-review/accident-process-390.png`
- `C:/tmp/unext-task-048-card-alignment-review/valuation-process-390.png`
- `C:/tmp/unext-task-048-card-alignment-review/damage-process-390.png`
## Status

Status: wartet auf Review
