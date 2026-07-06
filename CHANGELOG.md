# CHANGELOG.md

Dieses Changelog dokumentiert die Entwicklung des Projekts nach Datum, Aufgabe und Bereich. Es ersetzt nicht die Detailhistorie in `workflow/`.

## 2026-07-06

### Website

- Die deutsche Unterseite `/leistungen/unfallgutachten` wurde kompakter und conversionstärker auf `KFZ-Unfallgutachten Berlin` ausgerichtet.
- Hero, Kostenhinweis, DESAG-Trust, Entscheidungskarten, Detailbereiche, Ablauf, FAQ, Formular und Abschluss-CTA wurden sprachlich geschärft.
- Die Entscheidungskarten wurden auf drei starke Fälle reduziert und um einen breiten Hinweis zur freien Gutachterwahl ergänzt; die doppelte Hero-Aussage zur Gutachterwahl wurde entfernt.
- Die Detailbereiche `Was enthält das Unfallgutachten?` und `Welche Unterlagen helfen?` werden ab Tablet zweispaltig dargestellt.
- Der Kostenhinweis steht im Hero vor den CTAs, die Hero-Trust-Karten wurden auf zwei stärkere Aussagen reduziert, kompakter dargestellt und stärker vom Bild abgesetzt; Abschnittsüberschriften erhielten mehr Breite, die FAQ wurde auf fünf Fragen erweitert.
- Der finale visuelle Feinschliff verbessert die Freie Gutachterwahl-Infobox, hält die Überschrift einzeilig, stapelt Header/Formular bei 1024px sauberer und reduziert Detail-Headlines innerhalb von Karten auf eine ruhigere Größe.
- Im letzten Sprach- und Typografie-Feinschliff wurden Hero-Text, Versicherungskarte, Gutachterwahl-Hinweis, Detailtexte, Formular-Subline, Ablauf-Schritt 4 und Abschluss-CTA geschärft; der DESAG-Hero-Badge wurde auf eine neutrale Formulierung zurückgenommen und rote Hinweise wurden ruhiger als Trust-Cards gestaltet.

### Checks

- `git diff --check` bestanden.
- `npm run lint` bestanden.
- `npx tsc --noEmit` bestanden.
- `npm run build` bestanden.
- Neue Fullpage-Screenshots für Mobile, Tablet und Desktop wurden erstellt.

### Nicht geändert

- Keine EN/RU-Texte.
- Keine SEO-/Metadata-/Structured-Data-Dateien.
- Keine Routen.
- Keine Assets.
- Keine Upload-/Supabase-/KI-/Admin-/Portal-Funktionen.
- Kein Commit, kein Push und kein PR.

## 2026-07-04

### Workflow

- Aufgabe 042 wurde abgeschlossen und bleibt als erledigte Workflow-Aufgabe dokumentiert.
- Aufgabe 032 wurde nicht gestartet.
- 043 und 044 wurden nicht begonnen.

### Website

- Die Startseite wurde auf `KFZ-Unfallgutachten Berlin` fokussiert.
- Der Hero-Text wurde gestrafft.
- Die Header-Navigation wurde beruhigt: `Startseite`, `Gutachtenarten`, `Über uns`, `Kontakt`.
- Das Dropdown `Gutachtenarten` enthält `Unfallgutachten`, `Fahrzeugbewertung` und `Schadendokumentation`.
- Der Gutachtenbereich wurde auf drei Karten reduziert: `Unfallgutachten`, `Fahrzeugbewertung` und `Schadendokumentation`.
- Die Karte `Anfrage und Ablauf` und ein doppelter Schadenaufnahme-Block wurden entfernt.
- Prozessbereich und Warum-UNEXT-Bereich wurden sprachlich verbessert.
- Die Startseiten-CTA wurde auf `Sie brauchen Hilfe?` geändert.
- Die Über-uns-Seite wurde mit anderem Bild, angeglichener CTA und besseren Qualifikationstexten nachgezogen.
- Bilder im 042-Scope wurden als WebP optimiert.
- Alte direkt ersetzte PNG-Dateien wurden entfernt, sofern sie nicht mehr referenziert wurden.

### Checks

- `git diff --check` bestanden.
- `npm run lint` bestanden.
- `npx tsc --noEmit` bestanden.
- `npm run build` bestanden.

### Nicht geändert

- Keine EN/RU-Texte.
- Keine SEO-/Metadata-/Structured-Data-Dateien.
- Keine Routen.
- Keine Upload-/Supabase-/KI-/Portal-Funktionen.

## 2026-07-03

### Workflow

- Aufgabe 041 wurde als Planungsaufgabe zur V1-Seitenstruktur und zum Routen-Scope vor i18n ausgearbeitet und abgeschlossen.
- Aufgabe 032 wurde weiterhin nicht gestartet.
- Die empfohlene Folge-Reihenfolge wurde auf `041 -> 042 -> 043 -> 044 -> 032 -> 029 -> 026 -> 033 -> 034 -> 035` aktualisiert.

### Planung

- V1-Hauptfokus wurde als `KFZ-Unfallgutachten in Berlin` dokumentiert.
- `/leistungen` bleibt als bestehende technische Übersichtsroute vorgesehen, soll aber in 044 als Gutachtenarten-/Weitere-Gutachten-Seite sichtbar nutzerfreundlicher benannt und umgebaut werden.
- `/leistungen/unfallgutachten` bleibt als bestehende Detailroute für die Hauptleistung vorgesehen und soll sichtbar stärker priorisiert werden.
- Alte Service-Routen bleiben Legacy und dürfen nicht als aktive V1-Leistungen beworben werden.
- Upload, Supabase, KI, Admin und Portal bleiben spätere separate Ausbaustufen und werden in V1 nicht als Live-Funktionen dargestellt.

### Nicht geändert

- Keine Website-Code-Dateien.
- Keine Routen, Redirects, `noindex`-Regeln oder 404-/410-Umstellungen.
- Keine SEO-/Metadata-/Structured-Data-Dateien.
- Keine EN/RU-Texte.
- Keine Assets.
- Keine Folgeaufgaben 032, 042, 043 oder 044 gestartet.

## 2026-07-02

### Workflow

- Aufgabe 040 wurde abgeschlossen und bleibt als erledigte Workflow-Aufgabe dokumentiert.
- Aufgabe 030 wurde als Planungsaufgabe gestartet; die Routen-Inventur wurde dokumentiert.
- Aufgabe 030 wurde abgeschlossen.
- Aufgabe 031 wurde abgeschlossen.
- Nächster logischer Schritt ist Aufgabe 032 `i18n Launch Scope / Deutsch, EN/RU prüfen`.

### Planung

- Die alten Service-Routen wurden inventarisiert.
- `specs/06-work-plans/routing-redirects-old-service-routes.md` wurde als Planungsgrundlage für alte Service-Routen erstellt.
- `/leistungen` bleibt offen und soll später als mögliche KFZ-Gutachten-/Gutachtenarten-Übersicht behandelt werden.
- `/leistungen/unfallgutachten` wurde als V1-nah und grundsätzlich zu behalten eingeordnet.
- Autovermietung, Autoservice, Detailing, Zulassungsservice und Abschleppdienst/Pannenhilfe wurden als Legacy/Nicht-V1-Leistungen eingeordnet.
- EN/RU alte Service-Routen bleiben bis Aufgabe 032 offen und gelten nicht ungeprüft als launchfähig.
- Aufgabe 029 muss alte Keywords, Metadata, Structured Data, Sitemap/Robots/Canonicals und interne SEO-Signale auf Basis dieses Plans prüfen.
- Aufgabe 026 darf alte Komponenten, Translation-Daten und Assets erst nach den Entscheidungen aus 030, 031, 032 und 029 bereinigen.
- Finale rechtliche Prüfung bleibt vor Launch offen.

### Website

- Der Startseiten-Hero wurde mit einem sichtbaren, sachlichen Trust-Satz verbessert.
- Die deutsche Über-uns-Seite wurde auf den V1-Scope KFZ-Gutachten, Vertrauen, Qualifikation, Anerkennung und Fortbildungen neu ausgerichtet.
- `Qualifikation & Anerkennung` und `Fortbildungen & Weiterbildung` wurden sichtbar und getrennt eingebunden.
- Das freigegebene Bild `/images/home-service-accident.webp` wurde auf der Über-uns-Seite verwendet.
- Die deutsche Kontaktseite wurde auf den KFZ-Gutachten-Scope ausgerichtet.
- Redundante Kontaktkarten wurden entfernt.
- Kontaktformulartexte wurden geprüft und gekürzt.
- E-Mail-Betreff und E-Mail-Text wurden auf Gutachten-Anfrage und Anfragebereich ausgerichtet.
- Deutsche AGB-/Legal-Texte wurden minimal und scope-konform bereinigt.

### Nicht geändert

- Keine Redirects, keine `noindex`-Regeln und keine 404-/410-Umstellung.
- Keine App-/Route-Dateien.
- Resend-/E-Mail-Versandlogik blieb unverändert.
- `lib/contactActions.ts` blieb unverändert.
- Keine SEO-/Metadata-/Structured-Data-Umsetzung.
- Keine EN/RU-Texte.
- Keine Assets, PDFs oder Zertifikate hinzugefügt.

## 2026-06-30

### Workflow

- Aufgabe 039 wurde als neue Planungsaufgabe gestartet und später abgeschlossen.
- Aufgabe 039 wurde abgeschlossen; der V1-Launch-Masterplan wurde erstellt und freigegeben.
- Grund: Vor der Fortsetzung von Aufgabe 029 fehlte ein zentraler V1-Launch-Masterplan, der Seiten, Inhalte, SEO, Routing, Legal, i18n, Cleanup und Zuständigkeiten zusammenzieht.
- Aufgabe 029 wurde nicht umgesetzt und bleibt bis zum Abschluss des Masterplans in `workflow/todo/` pausiert.
- Die frühere Einordnung von 029 als direkter nächster Schritt nach 037 wurde durch Aufgabe 039 ersetzt.

### Planung

- `specs/06-work-plans/v1-launch-masterplan.md` wurde als zentrale Work-Plan-Datei angelegt.
- Der Masterplan dokumentiert die Seiten-/Content-/SEO-/Routing-/Legal-/i18n-/Cleanup-Matrix, die sichtbare Trust-/Qualifikationslücke, SEO-Abhängigkeiten und die empfohlene Restreihenfolge bis Launch.
- Die Restreihenfolge wurde festgelegt: `039 → 040 → 030 → 031 → 032 → 029 → 026 → 033 → 034 → 035`.
- Aufgabe 029 wurde nicht umgesetzt und bleibt bis zu den vorgelagerten Klärungen pausiert.
- `ROADMAP.md` wurde angepasst, damit Aufgabe 039 vor Aufgabe 029 eingeordnet ist.

### Nicht geändert

- Keine Website-Code-Dateien.
- Keine UI-Komponenten.
- Keine SEO-/Metadata-/Structured-Data-Implementierung.
- Keine alten Routen, Redirects oder Assets.
- Keine Kontakt-/Legal-Umsetzung.
- Keine Supabase-, Upload-, KI- oder Portal-Themen.

## 2026-06-28

### Workflow

- Aufgabe 037 wurde abgeschlossen. Projektorganisation, Agentenregeln, Roadmap, Changelog, Projektstruktur und lokale Skills wurden verbessert.
- Aufgabe 038 wurde abgeschlossen und liegt in `workflow/done/`.
- Aufgabe 029 bleibt in `workflow/todo/` pausiert und ist der nächste logische Task nach Abschluss von 037.

### Specs

- Aufgabe 038 hat die Regeln für Trust, Qualifikation, Zertifizierung, Fortbildungen, Software-Schulungen, SEO-Grenzen, Visual Rules und Launch Readiness aktualisiert.
- Es wurde festgelegt, dass Zertifikats- und Qualifikationsaussagen nur belegbar, vorsichtig und ohne ungeprüfte Logo-, Mitgliedschafts- oder Partnerbehauptungen genutzt werden dürfen.

### Organisation

- Aufgabe 037 hat `AGENTS.md`, `ROADMAP.md`, `CHANGELOG.md`, `PROJECT_STRUCTURE.md`, `.agents/skills/typography-line-break-check/SKILL.md` und `.agents/skills/site-launch-audit/SKILL.md` erstellt oder ergänzt.
- Ein lokaler Typografie-/Zeilenumbruch- und Textlayout-Skill wurde für sichtbare Texte, Umlaute, Zeilenumbrüche und Layoutwirkung auf Desktop, Tablet und Mobile angelegt.
- Die Roadmap-/Changelog-Pflegeprüfung wurde als verbindliche Agentenregel in `AGENTS.md` ergänzt.

### Website

- In Aufgabe 037 wurden keine Website-Dateien geändert und keine Website-Umsetzung vorgenommen.
- Frühere erledigte Aufgaben haben die Website auf die KFZ-Gutachten-Ausrichtung vorbereitet und die Startseite entsprechend überarbeitet.

### SEO

- In Aufgabe 037 wurde keine SEO-, Metadata- oder Structured-Data-Umsetzung vorgenommen.
- Aufgabe 029 bleibt der geplante nächste SEO-/Metadata-/Structured-Data-Schritt.

### Assets

- In Aufgabe 037 wurden keine Assets hinzugefügt oder geändert.

### Nicht geändert

- Keine App-/Component- oder Code-Implementierung.
- Keine fachlichen Content-Specs oder sonstigen Specs.
- Keine Routen.
- Keine SEO-/Metadata-/Structured-Data-Umsetzung.
- Keine Assets, Zertifikatsdateien oder Logos.

## Frühere wichtige Aufgaben

- Aufgabe 028: Version-1-Launch-Roadmap erstellt.
- Aufgabe 027: Homepage-Rework für die KFZ-Gutachten-Ausrichtung umgesetzt.
- Aufgabe 020: Homepage-Rework geplant.
- Aufgabe 017: finale KFZ-Specs erstellt.
- Aufgabe 014: Specs auf KFZ-Gutachten neu ausgerichtet.
- Aufgaben 001 bis 004: Agentenregeln, Workflow-Struktur, Spec-Struktur und offene Fragen angelegt.
