# Aufgabe 048 - Deutsche Kernseiten auf Konsistenz, Typografie und Trust prüfen

## Ziel

Nach Abschluss der Aufgaben 046 und 047 sollen diese deutschen Kernseiten gemeinsam geprüft und gezielt harmonisiert werden:

- Startseite `/`
- Unfallgutachten `/leistungen/unfallgutachten`
- Fahrzeugbewertung `/leistungen/fahrzeugbewertung`
- Schadendokumentation `/leistungen/schadendokumentation`
- Über uns `/ueber-uns`

Die Seiten sollen sichtbar zur gleichen professionellen Website-Familie gehören, ohne inhaltlich zu Kopien voneinander zu werden.

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
- responsive Zeilenumbrüche korrigieren
- Abstände und Textbreiten angleichen
- Bildpositionen und Zuschnitte nachjustieren
- kleinere seitenübergreifende Qualitätsunterschiede beheben
- CTA-, Trust- und Formularbeschriftungen konsistent machen

Aufgabe 048 darf nicht:

- neue Leistungen erfinden
- neue Seiten oder Routen erstellen
- Startseite oder Über-uns-Seite vollständig neu schreiben
- größere fachliche Umbauten ohne eigenen Task durchführen
- EN/RU-Texte ändern
- SEO-/Metadata-/Structured-Data-Dateien ändern
- Redirects erstellen
- `/leistungen` wieder als Übersichtsseite aufbauen
- Upload-, Supabase-, KI-, Admin- oder Portal-Funktionen ergänzen
- Aufgabe 049 oder Aufgabe 033 ersetzen

## Abgrenzung zu Aufgabe 047, Aufgabe 049 und Aufgabe 033

### Aufgabe 047

- überarbeitet und verstärkt die Über-uns-Seite fachlich
- prüft Qualifikation, Zertifikat, Fortbildungen und Trust-Inhalte
- erfolgt vor Aufgabe 048

### Aufgabe 048

- prüft Startseite, Über-uns-Seite und die drei Gutachten-Unterseiten gemeinsam auf visuelle, typografische und sprachliche Konsistenz
- nimmt nur begrenzte Harmonisierungen vor

### Aufgabe 049

- prüft alle relevanten User Stories und vollständigen End-to-End-Nutzerwege der deutschen Website

### Aufgabe 033

- bleibt der spätere umfassende technische, visuelle und funktionale Launch-Qualitätscheck der gesamten Website

## Akzeptanzkriterien

- Startseite, Über-uns-Seite und die drei deutschen Gutachten-Unterseiten wurden gemeinsam bei 1440 px, 768 px und 390 px geprüft.
- Aufgabe 048 wurde erst nach Abschluss von Aufgabe 046 und Aufgabe 047 gestartet.
- Das H1-System, der Startseiten-Hauptfokus, Eyebrows, Trust-Zeilen, Qualifikationsformulierungen und Hauptbegriffe wurden nachvollziehbar verglichen.
- Auffällige Wiederholungen, ungünstige Zeilenumbrüche, unnötig schmale Textcontainer und gequetschte Typografie sind behoben oder als bewusste Abweichung dokumentiert.
- Hero-Höhen, Bildzuschnitte, Textpositionen, Trust-Wirkung und Bilddateigrößen sind geprüft; zentrale Motive bleiben ohne Verzerrung sichtbar.
- Abschnittsreihenfolge, Informationsdichte, Karten, FAQ-Umfang und Ablaufbereiche wirken als gemeinsame Seitenfamilie, ohne die fachliche Eigenständigkeit zu verlieren.
- Startseite bleibt Haupt-Verkaufsseite und Über-uns bleibt zentrale Trust- und Qualifikationsseite.
- CTA-Reihenfolge, Navigation, Kontaktwege, Formularbeschriftungen, Platzhalter sowie Accessibility- und ARIA-Texte sind geprüft und funktionieren.
- Es gibt keinen horizontalen Overflow, keine Browser-Console-Errors und keine sichtbaren Next.js-Issues.
- `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` wurden erfolgreich ausgeführt oder Abweichungen klar dokumentiert.
- Es wurden keine EN/RU-, SEO-, Metadata-, Structured-Data-, Redirect- oder neuen Funktionsänderungen vorgenommen.
- Aufgabe 049 und Aufgabe 033 wurden nicht vorweggenommen.

## Status

Status: offen
