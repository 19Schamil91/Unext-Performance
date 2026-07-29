# CHANGELOG.md

Dieses Changelog dokumentiert die Entwicklung des Projekts nach Datum, Aufgabe und Bereich. Es ersetzt nicht die Detailhistorie in `workflow/`.

## 2026-07-29
### Aufgabe 050 - Routenmigration umgesetzt

- Die drei deutschen Gutachtenarten wurden auf neue kanonische Routen unter `/gutachtenarten/...` migriert.
- Die bisherigen deutschen Detail-URLs unter `/leistungen/unfallgutachten`, `/leistungen/fahrzeugbewertung` und `/leistungen/schadendokumentation` leiten permanent und direkt auf die passenden neuen Zielrouten weiter.
- Deutsche Header-/Footer-Links, Startseitenkarten, der Über-uns-Link sowie Service-Structured-Data- und Breadcrumb-Pfade wurden auf die neue Routenstruktur angepasst.
- `/leistungen` bleibt technisch erhalten und wurde nicht gelöscht, nicht umgebaut und nicht umgeleitet.
- EN/RU-Routen und alte Legacy-Service-Routen bleiben unverändert.
- `next-router-check`, `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` wurden ausgeführt; der erste TypeScript-Lauf benötigte nach der Routenentfernung neu erzeugte `.next`-Router-Typen und bestand nach `npm run build`.
- Route-/Redirect-Prüfung erfolgte lokal auf `127.0.0.1:3108`; Screenshots wurden außerhalb des Repositorys unter `C:/tmp/unext-task-050-route-migration-review/` erstellt.
- `next-env.d.ts` wurde nach Dev-Server-Nutzung wieder auf den committed Stand zurückgesetzt.
- `ROADMAP.md` blieb unverändert, weil Reihenfolge, Prioritäten und Projektplanung nicht geändert wurden.

### Aufgabe 050 - Start und Inventur

- Aufgabe 050 wurde auf dem eigenen Branch `task-050-migrate-appraisal-routes` gestartet und nach `workflow/active/` verschoben.
- Die aktuelle deutsche Gutachtenarten-Struktur unter `/leistungen/...`, die geplanten Zielrouten unter `/gutachtenarten/...`, interne Links, Redirect-Abhängigkeiten, Structured-Data-/Breadcrumb-Ausgaben und Metadata-Auswirkungen wurden inventarisiert.
- `/leistungen` wurde als eigener Entscheidungsfall dokumentiert und nicht umgebaut, gelöscht oder umgeleitet.
- `next-router-check` wurde read-only angewendet; der bekannte lokalisierte `not-found.tsx`-Befund bleibt außerhalb dieses Startschritts.
- Es wurden keine Website-, Code-, Routen-, Redirect-, SEO-, Metadata-, Structured-Data-, Sitemap-, Robots-, Text-, Layout- oder Asset-Änderungen umgesetzt.

### Aufgabe 048 - Abschluss

- Aufgabe 048 wurde nach finaler Akzeptanzprüfung formal abgeschlossen und nach `workflow/done/` verschoben.
- Die Umsetzung bleibt auf deutsche sichtbare Inhalte und responsive Darstellung begrenzt.
- `ROADMAP.md` blieb unverändert, weil der Abschluss keine Reihenfolge, Priorität oder Projektplanung ändert.

### Aufgabe 048 - Kartenabgleich

- Die drei deutschen Gutachtenkarten der Startseite wurden in ihren Beschreibungstexten final vereinheitlicht.
- Bei 1440 px nutzen alle drei Karten zwei Beschreibungszeilen; die Stichpunktlisten beginnen gleichmäßig.
- Für den Kartenabgleich war keine Desktop-Mindesthöhe erforderlich.
- Neue Screenshots wurden außerhalb des Repositorys unter `C:/tmp/unext-task-048-card-alignment-review/` erstellt.
### Aufgabe 048 - Feinschliff

- Die deutschen Startseitenbeschreibungen für `Fahrzeugbewertung` und `Schadendokumentation` wurden final gekürzt, damit sie auf Desktop ruhiger umbrechen.
- Die deutsche Startseiten-Prozesskomponente nutzt auf Mobile die verfügbare Karteninnenbreite besser; Tablet und Desktop behalten ihre begrenzte Lesebreite.
- Neue Screenshots wurden außerhalb des Repositorys unter `C:/tmp/unext-task-048-final-refinement/` erstellt.
- `ROADMAP.md` blieb unverändert, weil Reihenfolge, Prioritäten und Projektplanung nicht geändert wurden.

### Aufgabe 048 - Umsetzung

- Die deutschen Startseitenkarten `Fahrzeugbewertung` und `Schadendokumentation` wurden sprachlich harmonisiert.
- Die zugehörigen deutschen mobilen Kartentexte wurden konsistent mit den Desktop-/Tablet-Texten aktualisiert.
- Die CTA-Anordnung der deutschen Gutachtenkarten wurde so angepasst, dass bei Mobile und im schmalen Tablet-Zweispaltenlayout keine Button-Überstände entstehen.
- Die sichtbare deutsche Unfallgutachten-H1 wurde zu `Unfallgutachten in Berlin` vereinheitlicht.
- Aufgabe 048 bleibt in `workflow/active/` und wartet nach erfolgreichen Checks auf Review.

### Aufgabe 048 - Checks

- `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` bestanden.
- Responsive Prüfung bei 390 px, 768 px und 1440 px ohne horizontalen Overflow und ohne abgeschnittene Startseitenkarten-CTAs.
- `next-env.d.ts` blieb unverändert.
- `ROADMAP.md` blieb unverändert, weil Reihenfolge, Prioritäten und Projektplanung nicht geändert wurden.
### Workflow

- Der Entwurf von Aufgabe 047 wurde ausdrücklich freigegeben.
- Aufgabe 047 wurde auf dem eigenen Branch `task-047-strengthen-about-trust-qualification-certificate` nach `workflow/active/` verschoben und auf `in Arbeit` gesetzt.
- Bestand, sichtbare Texte, Komponenten, Assets, Route und Nachweisgrenzen wurden inventarisiert und der Seiten-, Text- und Umsetzungsplan wurde abschließend freigegeben.
- Aktive DESAG-Mitgliedschaft, Namensnennung, Qualifikation, Personenfoto, Bildrechte und der externe Profil-Link wurden für die Umsetzung bestätigt.
- Die Umsetzung wurde gegen die Akzeptanzkriterien geprüft, visuell freigegeben und Aufgabe 047 formal nach `workflow/done/` abgeschlossen.

### Website

- Die deutsche Über-uns-Seite wurde innerhalb ihrer bestehenden Struktur textlich geschärft.
- Der Personenbereich zeigt das freigegebene Foto von Selimchan Kasumov mit personenbezogenem Alternativtext.
- `Qualifikation & Anerkennung` und `Fortbildungen & Weiterbildung` sind als getrennte Bereiche umgesetzt.
- Die Qualifikation wird sachlich und namentlich eingeordnet; ein normaler externer Link führt erst nach bewusstem Klick zum öffentlichen DESAG-Profil.
- Die belegten Fachwebinare zu Wertdefinitionen sowie Kürzungen und fachlichen Stellungnahmen werden ausschließlich textlich genannt.

### Assets und Nachweise

- `public/images/about-selimchan-kasumov.webp` wurde als unveränderte Kopie der freigegebenen WebP-Datei ergänzt.
- Keine Urkunde, Teilnahmebestätigung, kein DESAG-Logo, Siegel, Badge, Zertifikatsbild, Embed-Code oder extern geladenes Bild wurde eingebunden.

### Checks

- Responsive Prüfung bei 390 px, 768 px und 1440 px ohne horizontalen Overflow bestanden.
- Typografie-, Zeilenumbruch-, Router-, Accessibility-, Link-, Netzwerk- und Bildprüfung durchgeführt.
- Der bekannte aufgabenfremde 404 für `/favicon.ico` bleibt außerhalb der freigegebenen Dateigrenzen von Aufgabe 047.
- `npm run lint`, `npx tsc --noEmit` und `npm run build` erfolgreich.

### Nicht geändert

- EN/RU-Inhalte, Übersetzungen, Routen, Redirects, SEO, Metadata, Structured Data, Kontakt-, Formular-, E-Mail- und Backend-Logik blieben unverändert.
- `ROADMAP.md` blieb unverändert, weil Reihenfolge, Prioritäten und Projektplanung durch die Umsetzung nicht geändert wurden.

## 2026-07-28

### Workflow

- Aufgabe 047 wurde als vollständiger Entwurf unter `workflow/todo/` angelegt.
- Die Aufgabe bleibt `offen`, wurde nicht nach `workflow/active/` verschoben und enthält ein ausdrückliches Rechte-, Datenschutz- und Sichtbarkeits-Gate für eine mögliche Zertifikatsdarstellung.
- Aufgabe 048 bleibt bis zum geprüften und freigegebenen Abschluss von Aufgabe 047 nachgelagert.

### Nicht geändert

- Keine Website-, Komponenten-, Routen-, SEO-, Metadata-, Structured-Data- oder Asset-Änderungen.
- Kein Zertifikat, keine Urkunde, kein Logo, kein Siegel und kein Badge wurde eingebunden.

## 2026-07-15

### Workflow

- Aufgabe 046 wurde nach bestandener Akzeptanzprüfung formal abgeschlossen und nach `workflow/done/` verschoben.
- Der bereits vor 046 bestehende globale Formular-Semantik- und Autocomplete-Punkt wurde als verbindlich zentral zu behebender Punkt in Aufgabe 033 dokumentiert; er war kein 046-Blocker.
- Nächster logischer Task ist `047: Über-uns-Seite Trust / Qualifikation / Zertifikat verstärken`.

### Website

- Die neue deutsche Route `/leistungen/schadendokumentation` wurde als eigenständige Schadendokumentations-Unterseite umgesetzt.
- Die Seite besitzt einen kompakten mobile-first Hero mit Telefon, WhatsApp und Anfrage als direkten Kontaktwegen.
- Vier Anwendungsfälle, sechs dokumentierbare Bereiche, die klare Abgrenzung zum Unfallgutachten, vier Ablaufschritte, vier FAQ und ein Abschluss-CTA strukturieren den Informationsfluss.
- Das gemeinsame Anfrageformular wurde schadendokumentationsspezifisch konfiguriert; Fahrzeugmodell und Nachricht sind sichtbar, Datum und Betreff ausgeblendet.
- Das vorhandene WebP `public/images/services/beweissicherung-dokumentation.webp` wird unverändert wiederverwendet.
- Deutscher Header-, Mobile- und Startseitenlink führen auf die neue Route.
- `ServicePageLayout` und das vorhandene Anfrageformular werden ohne neue allgemeine Formular-Prop wiederverwendet.

### Checks

- Responsive Darstellung bei 390 px, 768 px und 1440 px bestanden.
- Kein horizontaler Overflow und keine Browser-Console-, Page- oder Hydration-Fehler.
- `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` bestanden.
- Die neue Route wird statisch erzeugt; die formale Akzeptanzprüfung wurde bestanden.

### Nicht geändert

- Keine Änderung an Validierungs-, Resend-, E-Mail- oder Backendlogik.
- Keine EN/RU-Schadendokumentationsroute und keine Route unter `/gutachtenarten/...`.
- Keine Redirects und keine direkte Änderung an SEO-, Metadata- oder Structured-Data-Dateien; die indirekte `Service`- und `BreadcrumbList`-Ausgabe bleibt akzeptiert.
- Kein Upload, Supabase, KI, Adminbereich oder Portal.
- Die spätere URL-Migration bleibt Aufgabe 050.

## 2026-07-14

### Workflow

- Aufgabe 045 wurde nach bestandener Akzeptanzprüfung formal abgeschlossen und nach `workflow/done/` verschoben.
- Aufgabe 048 wurde als späterer gemeinsamer Konsistenz-, Typografie- und Trust-Check der deutschen Kernseiten verbreitert.
- Aufgabe 049 bleibt als späterer vollständiger V1-User-Story- und Nutzerwege-Audit dokumentiert.
- Nächster logischer Task ist `046: Schadendokumentation-Unterseite hochwertig ausbauen`.

### Website

- Die neue deutsche Route `/leistungen/fahrzeugbewertung` wurde umgesetzt.
- Eine eigenständige Fahrzeugbewertungs-Komponente stellt einen kompakten Hero mit Telefon, WhatsApp und Anfrageweg bereit.
- Die Seite enthält vier Bewertungsanlässe, sechs relevante Bewertungsmerkmale, vier Ablaufschritte, vier kompakte FAQ und einen Abschluss-CTA.
- Das Anfrageformular wurde seitenbezogen für Fahrzeugmodell und Bewertungszweck konfiguriert.
- Das vorhandene optimierte WebP `public/images/services/wertgutachten-fahrzeugbewertung.webp` wird wiederverwendet.
- Deutsche Header-, Mobile- und Startseitenlinks führen auf die neue Fahrzeugbewertungsroute.

### Checks

- Responsive Darstellung bei 390 px, 768 px und 1440 px geprüft.
- Kein horizontaler Overflow und keine Browser-Console-Errors auf den geprüften Seiten.
- `git diff --check` bestanden.
- `npm run lint` bestanden.
- `npx tsc --noEmit` bestanden.
- `npm run build` bestanden; die Fahrzeugbewertungsroute wird statisch erzeugt.

### Nicht geändert

- Keine EN/RU-Fahrzeugbewertungsroute erstellt.
- Keine SEO-/Metadata-/Structured-Data-Datei geändert; die indirekte Service- und `BreadcrumbList`-Ausgabe bleibt für Aufgabe 029 dokumentiert.
- Keine zusätzlichen Routen oder Assets erstellt.
- Keine Upload-, Supabase-, KI-, Admin- oder Portal-Funktion ergänzt.

## 2026-07-11

### Workflow

- Aufgabe 044 wurde nach bestandener Prüfung formal abgeschlossen und nach `workflow/done/` verschoben.
- Nächster logischer Task ist `045: Fahrzeugbewertung-Unterseite hochwertig ausbauen`.

### Website

- Der deutsche Headerpunkt `Gutachtenarten` ist ein reiner Dropdown-Trigger und verlinkt nicht mehr auf `/leistungen`.
- Es gibt keinen Eintrag `Alle Gutachtenarten`.
- Das deutsche Dropdown enthält nur `Unfallgutachten`, `Fahrzeugbewertung` und `Schadendokumentation`.
- `Unfallgutachten` führt auf die bestehende Detailseite `/leistungen/unfallgutachten`.
- `Fahrzeugbewertung` und `Schadendokumentation` nutzen vorläufige Übergangslinks, bis 045 und 046 echte Unterseiten bereitstellen.
- Die drei Startseitenkarten haben klare Hauptaktionen und kompakte `Anrufen`-Buttons.
- Das mobile Menü wurde mit `SheetTitle` und `SheetDescription` zugänglicher gemacht.
- `/leistungen` wurde nicht als neue Gutachtenarten-Seite umgebaut und bleibt technisch vorerst bestehen.

### Launch-QA-Hinweis

- Die separaten Next-Image-Quality-Warnungen zu den Werten `88` und `74` wurden für Aufgabe 033 beziehungsweise Launch-/Performance-QA dokumentiert.
- Keine `next.config`-Änderung in 044.

### Nicht geändert

- Keine EN/RU-Inhalte.
- Keine SEO-/Metadata-/Structured-Data-Dateien.
- Keine Routen, Redirects oder Assets.
- Keine Upload-/Supabase-/KI-/Admin-/Portal-Funktionen.

### Planung

- Aufgabe 044 wurde fachlich neu ausgerichtet: Der geplante Umbau von `/leistungen` zu einer sichtbaren Gutachtenarten-Landingpage wurde verworfen.
- Grund ist die unnötige Dopplung zur Startseite und zu den späteren Detailseiten für Fahrzeugbewertung und Schadendokumentation.
- Die direkte Nutzerführung erfolgt künftig über Header-Dropdown und Startseitenkarten.
- `/leistungen` bleibt vorerst technisch bestehen, wird aber nicht aktiv als Gutachtenarten-Seite beworben.
- Die endgültige Behandlung der Route erfolgt später in Aufgabe 029 beziehungsweise Aufgabe 026.
- Es wurden keine neuen Unterseiten oder Routen erstellt.
- Aufgabe 044 bleibt in Arbeit; die konkrete Navigation-/Link-Umsetzung erfolgt erst nach erneuter Freigabe.

### Nicht geändert

- Keine Website-Code-Umsetzung.
- Keine EN/RU-Inhalte.
- Keine SEO-/Metadata-/Structured-Data-Dateien.
- Keine Routen, Redirects oder Assets.
- Keine Upload-/Supabase-/KI-/Admin-/Portal-Funktionen.

## 2026-07-07

### Workflow

- Aufgabe 043 wurde nach Umsetzung, Checks, PR-Merge und Freigabe nach `workflow/done/` verschoben.
- Die Akzeptanzkriterien in `workflow/active/043-rework-accident-appraisal-page.md` wurden vom ursprünglichen Start-/Inventurstand auf den tatsächlichen Umsetzungs- und Reviewstand aktualisiert.
- Die Roadmap wurde aktualisiert: 043 ist abgeschlossen, nächster fachlicher Schritt ist 044 für `/leistungen`.

### Status

- Kein Push und kein PR.
- Nächster Schritt ist die finale PR-Vorbereitung für 043.
## 2026-07-06

### Website

- Die deutsche Unterseite `/leistungen/unfallgutachten` wurde kompakter und conversionstärker auf `KFZ-Unfallgutachten Berlin` ausgerichtet.
- Hero, Kostenhinweis, DESAG-Trust, Entscheidungskarten, Detailbereiche, Ablauf, FAQ, Formular und Abschluss-CTA wurden sprachlich geschärft.
- Die Entscheidungskarten wurden auf drei starke Fälle reduziert und um einen breiten Hinweis zur freien Gutachterwahl ergänzt; die doppelte Hero-Aussage zur Gutachterwahl wurde entfernt.
- Die Detailbereiche `Was enthält das Unfallgutachten?` und `Welche Unterlagen helfen?` werden ab Tablet zweispaltig dargestellt.
- Der Kostenhinweis steht im Hero vor den CTAs, die Hero-Trust-Karten wurden auf zwei stärkere Aussagen reduziert, kompakter dargestellt und stärker vom Bild abgesetzt; Abschnittsüberschriften erhielten mehr Breite, die FAQ wurde auf fünf Fragen erweitert.
- Der finale visuelle Feinschliff verbessert die Freie Gutachterwahl-Infobox, hält die Überschrift einzeilig, stapelt Header/Formular bei 1024px sauberer und reduziert Detail-Headlines innerhalb von Karten auf eine ruhigere Größe.
- Im letzten Sprach- und Typografie-Feinschliff wurden Hero-Text, Versicherungskarte, Gutachterwahl-Hinweis, Detailtexte, Formular-Subline, Ablauf-Schritt 4 und Abschluss-CTA geschärft; der DESAG-Hero-Badge wurde auf eine neutrale Formulierung zurückgenommen und rote Hinweise wurden ruhiger als Trust-Cards gestaltet.
- Die zwei Instagram-Verlinkungen wurden aus dem globalen Footer entfernt; der Footer zeigt dort nur noch die direkten Kontaktwege und Seitenlinks.

### Checks

- `git diff --check` bestanden.
- `npm run lint` bestanden.
- `npx tsc --noEmit` bestanden.
- `npm run build` bestanden.
- Neue Fullpage-Screenshots für Mobile, Tablet und Desktop wurden erstellt.

### Nicht geändert

- Keine EN/RU-Inhalte der Unfallgutachten-Seite; die globalen Footer-Social-Links wurden auf ausdrückliche Freigabe entfernt.
- Keine SEO-/Metadata-/Structured-Data-Dateien.
- Keine Routen.
- Keine Assets.
- Keine Upload-/Supabase-/KI-/Admin-/Portal-Funktionen.
- Commits wurden erstellt; kein Push und kein PR.

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

- Keine EN/RU-Inhalte der Unfallgutachten-Seite; die globalen Footer-Social-Links wurden auf ausdrückliche Freigabe entfernt.
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
- Keine EN/RU-Inhalte der Unfallgutachten-Seite; die globalen Footer-Social-Links wurden auf ausdrückliche Freigabe entfernt.
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
- Keine EN/RU-Inhalte der Unfallgutachten-Seite; die globalen Footer-Social-Links wurden auf ausdrückliche Freigabe entfernt.
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
