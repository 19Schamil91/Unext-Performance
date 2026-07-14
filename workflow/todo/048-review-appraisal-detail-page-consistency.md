# Aufgabe 048 - Gutachten-Unterseiten auf Konsistenz und Typografie prüfen

## Ziel

Nach Abschluss der Aufgaben 045 und 046 sollen die drei deutschen Gutachten-Detailseiten gemeinsam geprüft und gezielt harmonisiert werden:

- `/leistungen/unfallgutachten`
- `/leistungen/fahrzeugbewertung`
- `/leistungen/schadendokumentation`

Die Seiten sollen sichtbar zur gleichen professionellen Website-Familie gehören, ohne inhaltlich zu Kopien voneinander zu werden.

## Kontext

Die drei Unterseiten werden bereits innerhalb ihrer jeweiligen Aufgaben auf Mobile, Tablet und Desktop geprüft:

- Aufgabe 043: Unfallgutachten
- Aufgabe 045: Fahrzeugbewertung
- Aufgabe 046: Schadendokumentation

Nach Abschluss von Aufgabe 046 folgt mit Aufgabe 048 ein gemeinsamer Konsistenz-, Typografie- und Darstellungscheck. Dieser Feinschliff muss vor Aufgabe 032 `i18n Launch Scope` und Aufgabe 029 `SEO / Metadata / Structured Data` abgeschlossen sein, damit Übersetzungen und SEO auf stabilen deutschen Seiten aufbauen.

## Vorgehen

### Begriffe und Seitenhierarchie

- Das sichtbare H1-System vergleichen:
  - `Unfallgutachten in Berlin`
  - `Fahrzeugbewertung in Berlin`
  - `Schadendokumentation in Berlin`
- Eyebrows und Trust-Zeilen vergleichen.
- Hauptbegriffe konsistent verwenden und unnötige Doppelbegriffe vermeiden.
- Häufige Wiederholungen reduzieren, insbesondere:
  - `nachvollziehbar`
  - `einordnen`
  - `Abstimmung`
  - `Anlass`
  - `Fahrzeugdaten`

### Typografie und Zeilenumbrüche

Folgende Viewports prüfen:

- Desktop: 1440 px
- Tablet: 768 px
- Mobile: 390 px

Dabei prüfen:

- alleinstehende Wörter und ungünstige letzte Zeilen
- unnötig schmale Textcontainer
- kontrollierte Umbrüche bei Überschriften und kurzen Texten
- keine starren Zeilenumbrüche, die andere Viewports verschlechtern
- vergleichbare Textbreiten, Zeilenhöhen und Abstände
- vollständig sichtbare Kartenüberschriften und CTA-Texte

### Hero- und Bildwirkung

- Hero-Höhen, Hero-Aufbau und Textpositionen vergleichen.
- Bildzuschnitte auf allen Prüf-Viewports kontrollieren.
- Dunkle oder leere Bildflächen vermeiden und zentrale Bildmotive sinnvoll sichtbar halten.
- Bilder nicht verzerren.
- Bilddateigrößen und vorhandene WebP-Optimierung kontrollieren.

### Seitenstruktur

- Abschnittsreihenfolge, Kartenanzahl und Informationsdichte vergleichen.
- Keine Seite unnötig textlastig machen.
- Die eigenständige fachliche Funktion jeder Seite erhalten.
- Keine Detailseite als Kopie der Startseite oder einer anderen Detailseite gestalten.
- FAQ-Umfang und Ablaufbereiche vergleichen.

### CTAs und Formulare

- CTA-Reihenfolge und Beschriftungen harmonisieren.
- Telefon, WhatsApp und Anfragewege einheitlich darstellen.
- Formulare passend zur jeweiligen Gutachtenart formulieren.
- Buttonbreiten und Umbrüche prüfen.
- Abgeschnittene Telefonnummern oder CTA-Texte vermeiden.
- Accessibility- und ARIA-Texte prüfen.
- Platzhalter und Feldbezeichnungen vergleichen.

### Technische Qualität

- Kein horizontaler Overflow.
- Keine Browser-Console-Errors oder sichtbaren Next.js-Issues.
- Links und Kontaktwege funktionieren.
- Formulare bleiben technisch funktionsfähig.
- `git diff --check` ausführen.
- `npm run lint` ausführen.
- `npx tsc --noEmit` ausführen.
- `npm run build` ausführen.

## Scope-Grenzen

Aufgabe 048 darf:

- direkt sichtbare deutsche Texte und Layoutdetails der drei Gutachten-Unterseiten harmonisieren
- responsive Zeilenumbrüche korrigieren
- Abstände und Textbreiten angleichen
- Bildpositionen und Zuschnitte nachjustieren
- kleinere seitenübergreifende Qualitätsunterschiede beheben
- CTA- und Formularbeschriftungen konsistent machen

Aufgabe 048 darf nicht:

- neue Leistungen erfinden
- neue Seiten oder Routen erstellen
- die Seiten vollständig neu schreiben
- EN/RU-Texte ändern
- SEO-/Metadata-/Structured-Data-Dateien ändern
- Redirects erstellen
- `/leistungen` wieder als Übersichtsseite aufbauen
- Upload-, Supabase-, KI-, Admin- oder Portal-Funktionen ergänzen
- Aufgaben 032, 029, 026 oder 033 vorwegnehmen

## Abgrenzung zu Aufgabe 033

- Aufgabe 048 ist der gezielte gemeinsame Konsistenz-, Typografie- und Darstellungscheck der drei deutschen Gutachten-Unterseiten.
- Aufgabe 033 bleibt der spätere vollständige Launch-Qualitätscheck der gesamten Website.
- Aufgabe 048 muss vor 032 und 029 abgeschlossen werden, damit Übersetzungen und SEO auf stabilen deutschen Seiten aufbauen.

## Akzeptanzkriterien

- Die drei deutschen Gutachten-Unterseiten wurden gemeinsam bei 1440 px, 768 px und 390 px geprüft.
- H1-System, Eyebrows, Trust-Zeilen und Hauptbegriffe sind nachvollziehbar verglichen und bei Bedarf innerhalb des Scopes harmonisiert.
- Auffällige Wiederholungen, ungünstige Zeilenumbrüche und unnötig schmale Textcontainer sind behoben oder als bewusste Abweichung dokumentiert.
- Hero-Höhen, Bildzuschnitte, Textpositionen und Bilddateigrößen sind geprüft; zentrale Motive bleiben ohne Verzerrung sichtbar.
- Abschnittsreihenfolge, Informationsdichte, Karten, FAQ-Umfang und Ablaufbereiche wirken als gemeinsame Seitenfamilie, ohne die fachliche Eigenständigkeit zu verlieren.
- CTA-Reihenfolge, Kontaktwege, Formularbeschriftungen, Platzhalter sowie Accessibility- und ARIA-Texte sind geprüft und funktionieren.
- Es gibt keinen horizontalen Overflow, keine Browser-Console-Errors und keine sichtbaren Next.js-Issues.
- `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` wurden erfolgreich ausgeführt oder Abweichungen klar dokumentiert.
- Es wurden keine EN/RU-, SEO-, Metadata-, Structured-Data-, Redirect- oder neuen Funktionsänderungen vorgenommen.

## Status

Status: offen
