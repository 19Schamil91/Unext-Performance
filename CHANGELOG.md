# CHANGELOG.md

Dieses Changelog dokumentiert die Entwicklung des Projekts nach Datum, Aufgabe und Bereich. Es ersetzt nicht die Detailhistorie in `workflow/`.

## 2026-08-19

### Aufgabe 026 - Überschriften der Leistungsübersichten typografisch beruhigt

- Die zuvor auf `22ch` begrenzte H1-Breite erzeugte besonders im Russischen unnötig hohe Überschriftenblöcke. Der gemeinsame Intro-Container wurde deshalb von `max-w-5xl` auf `max-w-6xl` und die gemeinsame H1-Breite auf `30ch` erweitert.
- Nachdem die reine Breitenkorrektur den russischen Titel bei 390 Pixeln noch auf fünf Zeilen beließ, wurde ausschließlich diese dreisprachig gemeinsame H1 auf `clamp(2.3rem, 1.66rem + 2.45vw, 4.7rem)` reduziert. Zeilenhöhe `0.97`, Laufweite `-0.032em`, Textbalance und der Abstand von 24 Pixeln zum Intro blieben erhalten.
- DE und EN stehen bei 390 Pixeln auf drei, RU auf vier Zeilen; bei 768 und 1440 Pixeln stehen DE und EN auf zwei, RU auf drei Zeilen. Alle neun Ansichten besitzen null Pixel horizontalen Overflow.
- Sichtbare Texte, Introbreite, Karten, CTAs, Links, Navigation, Footer, Routen, Redirects, SEO, Metadata, Structured Data, `noindex`, Assets und Dependencies blieben unverändert. `ROADMAP.md` bleibt unverändert, weil sich Planung, Reihenfolge und Prioritäten nicht geändert haben.

### Aufgabe 026 - Dreisprachige Leistungsübersichten bereinigt

- `/leistungen`, `/en/leistungen` und `/ru/leistungen` zeigen weiterhin als bestehende Routen ausschließlich Unfallgutachten, Fahrzeugbewertung und Schadendokumentation in der jeweiligen Sprache und verlinken direkt auf die neun passenden Gutachtenseiten.
- Sichtbare Angebote und Links zu Mietwagen, Werkstatt, Aufbereitung, Zulassung, Pannenhilfe und Abschleppen wurden aus den Übersichten entfernt. Vorhandene Bilder, Icons, Karten-, CTA- und Kontaktmuster wurden weiterverwendet.
- Die DE-/EN-/RU-Inhalte, Kartenreihenfolge, Linkziele und zugänglichen CTA-Namen sind sprachlich angeglichen. Die responsiven Ansichten bei 390, 768 und 1440 Pixeln sowie Accessibility, Typografie, Content-Konsistenz und Codequalität wurden ohne Blocker geprüft.
- Diff-Check, ESLint, TypeScript, Produktions-Build und next-router-check bestanden. Alle neun Zielseiten und die kontexttreuen Sprachwechsel wurden im Produktionsmodus geprüft; Console-, Hydration-, Request-, Bild- und Overflowfehler traten nicht auf.
- `noindex`, Metadata, Canonicals, Hreflang, Structured Data, Sitemap, Robots, Routen, Redirects, Assets, Dependencies und Rechtstexte blieben unverändert. Die 15 Legacy-Service-Routen bleiben bis zur gesondert freizugebenden Phase C bestehen; Aufgabe 026 bleibt aktiv und `in Arbeit`.
- `ROADMAP.md` bleibt unverändert, weil sich Reihenfolge, Prioritäten und Projektphasen durch diesen Phase-B-Zwischenstand nicht geändert haben.

### Aufgabe 026 - Erste technische Cleanup-Phase umgesetzt

- Exakt 52 nachweislich unerreichbare Quellmodule wurden in acht kontrollierten Gruppen entfernt. Der Umfang besteht aus drei nicht mehr gerenderten Home-Sektionen, 46 ungenutzten UI-Modulen, zwei ungenutzten Hooks und dem nicht erreichbaren Browser-Storage-Utility.
- Nach jeder Gruppe bestanden Diff-, Referenz-, ESLint- und TypeScript-Prüfung. Die Produktions-Builds nach A2, A4, A6 und A8 erzeugten jeweils erfolgreich 51 statische Seiten; der next-router-check fand bei 33 geprüften UI-Routen und 16 datenladenden Routen keine fehlende Pflichtdatei.
- Die repräsentative Produktionsprüfung bestätigte 21 DE-/EN-/RU-Kernrouten bei 390 und 1440 Pixeln, 21 kontexttreue Sprachwechsel sowie fünf direkte permanente Gutachten-Redirects mit Query-Erhalt. Ergänzende Home-, Kontaktformular- und Navigations-Smokes bei 390, 430 und 1440 Pixeln bestanden ebenfalls, ohne Formulare abzusenden.
- Codequalität, Accessibility, Mobile, Desktop, Content-Konsistenz und Performance wurden read-only ohne neuen Blocker geprüft. Es traten keine Console-, Hydration-, Request-, Bild- oder Overflowfehler auf.
- Dependencies, `package.json`, Lockfiles, Assets, Übersetzungen, Datenquellen, Leistungsübersichten, Routen, Redirects, SEO-/Metadata-/Structured-Data-Dateien, Sitemap, Robots und `noindex` blieben unverändert. Aufgabe 026 bleibt aktiv und `in Arbeit`; die späteren Cleanup-Phasen sowie Rechts-, Index-, Deployment- und Launch-Gates bleiben offen.
- `ROADMAP.md` bleibt unverändert, weil Reihenfolge, Prioritäten und Projektphasen durch diesen technischen Zwischenstand nicht verändert wurden.

## 2026-08-18

### Aufgabe 026 - Cleanup-Plan nach unabhängiger Prüfung präzisiert

- Die vollständige Read-only-Prüfung hat die Inventur auf 42 logisch gruppierte Einheiten korrigiert: A 9, B 6, C 7, D 10, E 3 und F 7. Der frühere A5-Altbildbestand ist wegen möglicher öffentlicher Direkt-URLs nun als F7 geschützt; überschattete EN-/RU-Unfallgutachten-Daten sind als A10 ergänzt.
- Die 52 nachweislich unerreichbaren Quellmodule sind vollständig und in acht kleine, einzeln prüf- und revertierbare technische Gruppen dokumentiert. Die erste spätere Cleanup-Phase ist ausschließlich auf diese Module begrenzt; Dependencies, Assets, Übersetzungen, Daten, Routen, Redirects und SEO-Dateien sind ausgeschlossen.
- Die drei Leistungsübersichten bleiben erhalten und sollen später ausschließlich die drei aktuellen Gutachtenarten in DE, EN und RU zeigen. Die 15 fachfremden Detailrouten sollen erst nach erneuter ausdrücklicher Freigabe ohne unpassende Redirects entfernt und über die vorhandene lokalisierte 404-Struktur geprüft werden; die fünf bestehenden Gutachten-Redirects bleiben geschützt.
- Der Assetplan unterscheidet sechs separat zu prüfende sichere Kandidaten und zwölf vollständig zu erhaltende unklare öffentliche Bilder/Icons. Spec-Ist-Abweichungen, phasenweise technische und responsive Zwischenprüfungen sowie messbare Akzeptanzkriterien sind präzisiert.
- Dies ist ausschließlich ein Planungs- und Workflow-Zwischenstand. Es wurden keine Website-, Code-, Routen-, Redirect-, Übersetzungs-, SEO-, Structured-Data-, Asset-, Dependency- oder Indexierungsänderungen umgesetzt; Aufgabe 026 bleibt aktiv und `in Arbeit`.

### Aufgabe 026 - Legacy-Cleanup gestartet und vollständig inventarisiert

- Aufgabe 026 wurde als reiner Inventur- und Planungsschritt gestartet und nach `workflow/active/` verschoben. Der Status ist `in Arbeit`; technische Löschungen oder Änderungen benötigen weiterhin eine ausdrückliche Planfreigabe.
- Der tatsächliche Bestand an V1-, Legacy- und Redirect-Routen, sichtbaren Altinhalten, Komponenten, Importpfaden, Übersetzungs- und Datenquellen, Metadata/Structured Data sowie Assets wurde read-only geprüft und in 41 logisch gruppierte Kandidateneinheiten der Kategorien A bis F eingeordnet.
- Eine Routenmatrix, ein fünfphasiger Cleanup-Plan, Verwendungsnachweise, Risiken, Rollback-Möglichkeiten und das erneute noindex-/Indexfreigabe-Handoff nach dem Cleanup sind in der aktiven Aufgabe dokumentiert.
- Der next-router-check hat 33 Page-Dateien und 16 datenladende lokalisierte Routen geprüft; im jeweiligen Layout-Scope fehlen keine verpflichtenden Loading-, Error- oder Not-found-Grenzen.
- Website, Code, Routen, Redirects, Übersetzungen, SEO-Ausgaben, Structured Data, Assets, Rechtstexte und Indexierungszustände wurden nicht verändert. Die Website bleibt nicht launchbereit; Aufgaben 033, 034 und 035 bleiben nachgelagert.

### Aufgabe 029 - Dreisprachige SEO-Grundlage formal abgeschlossen

- Die mehrsprachige SEO-/Metadata-Umsetzung für DE, EN und RU ist nach vollständiger Akzeptanzprüfung und ausdrücklicher Nutzerfreigabe abgeschlossen. Canonicals, gegenseitige Hreflang-Verknüpfungen, OpenGraph, Twitter, Sitemap und Robots verwenden die verbindliche Produktions-Origin `https://unext.de`.
- Von den 30 V1-Routen sind 15 freigegebene kanonische Routen indexierbar; 15 Routen bleiben bis zu ihren dokumentierten Gates bewusst vorübergehend `noindex`. Das Structured-Data-Modell ist um bestätigte Seitentypen erweitert und von unpassenden Werkstatt- und Legacy-Service-Signalen bereinigt.
- Nach Aufgabe 026 müssen Leistungsübersicht und Über-uns-Seiten erneut auf ihre Indexfreigabe geprüft werden. Die Legal-Routen bleiben bis zur externen Rechts- und Indexfreigabe `noindex`; vor dem Launch bleibt der vollständige Abgleich von Indexierungsmodell, Sitemap, Canonicals, Hreflang und Robots verpflichtend.
- Aufgabe 029 ist formal abgeschlossen. Legacy-Cleanup, finale Launch-QA, www-/Deployment-Konfiguration und Monitoring bleiben den Aufgaben 026, 033, 034 und 035 zugeordnet; die Website ist weiterhin nicht launchbereit.

### Aufgabe 029 - Dreisprachige SEO-Grundlage technisch umgesetzt

- `https://unext.de` ist als verbindliche Produktions-Origin zentral definiert. Metadata, Canonicals, Hreflang, OpenGraph, Twitter, Sitemap und strukturierte Daten verwenden ausschließlich die non-www-Origin.
- Alle 30 DE/EN/RU-V1-Routen besitzen die freigegebenen sprach- und seitenspezifischen Titles und Descriptions. Startseite, drei Gutachtenarten und Kontakt sind als 15 kanonische Sprach-URLs mit vollständigen Sprachclustern indexierbar; Leistungsübersicht, Über-uns und Legal-Routen bleiben bis zu ihren Folge-Gates `noindex`.
- Die neue Sitemap enthält ausschließlich die 15 indexierbaren kanonischen URLs samt Sprachalternativen. Die Robots-Ausgabe erlaubt deren Crawling und verweist auf `https://unext.de/sitemap.xml`.
- Das Structured-Data-Modell verwendet bestätigte `LocalBusiness`-, `WebSite`-, `WebPage`-, `Service`-, `BreadcrumbList`- und sichtbare `FAQPage`-Daten. `AutoRepair`, unbestätigte Social-Profile und Structured Data für Legacy-Leistungen wurden aus der aktiven Ausgabe entfernt.
- Legacy-Leistungsseiten bleiben physisch bestehen, sind aber `noindex`, ohne Canonical/Hreflang und ohne leistungsbezogenes JSON-LD. Die vorhandenen fünf permanenten Direkt-Redirects bleiben unverändert.
- Die dauerhafte Weiterleitung von `www.unext.de` auf `unext.de` wird nicht durch eine ungeplante App-Sonderlösung erzwungen, sondern bleibt mit Pfad- und Query-Erhalt ein verbindliches Deployment-Gate für Aufgabe 034. Aufgabe 029 macht die Website nicht launchbereit.

### Aufgabe 029 - Dreisprachige SEO-Umsetzung gestartet und vollständig geplant

- Aufgabe 029 wurde an den abgeschlossenen DE/EN/RU-V1-Stand angepasst, nach `workflow/active/` verschoben und auf `in Arbeit` gesetzt.
- Der aktuelle Bestand zu Metadata, Canonicals, Hreflang, OpenGraph/Twitter, Structured Data, Sitemap, Robots, Indexierung, Redirects, lokalen Assets und Legacy-SEO-Signalen wurde für alle 30 V1-Sprachrouten inventarisiert.
- Ein konkretes Sollmodell mit Routenmatrix, Title-/Description-Entwürfen, Produktions-Origin- und Indexierungs-Gates, zentralem Dateiplan, Abhängigkeiten, Risiken und prüfbaren Akzeptanzkriterien ist dokumentiert.
- Es erfolgte noch keine technische SEO-, Website-, Routen-, Redirect-, Structured-Data-, Sitemap-, Robots-, Übersetzungs-, Layout- oder Assetänderung.

## 2026-08-16

### Aufgabe 051 - EN/RU-V1-Kernwege formal abgeschlossen

- Die englischen und russischen V1-Kernwege sind auf Grundlage der deutschen Referenz vollständig umgesetzt. Dazu gehören sechs lokalisierte Gutachtenartenrouten, kontexttreue Sprachwechsel, Navigation, Formulare, Validierung, Error-/404-Zustände und responsive Hero-, Karten-, Formular- und CTA-Bereiche.
- Alle neun DE/EN/RU-Gutachtenseiten, die direkten permanenten Redirects und die relevanten Nutzerwege wurden technisch, visuell, typografisch und barrierebezogen geprüft. Diff-Check, ESLint, TypeScript, Produktions-Build und Router-Check sind bestanden.
- Der Nutzer akzeptiert die aktuellen EN-/RU-Texte und fachlichen Aussagen für diesen Projektstand ausdrücklich ohne zusätzliche professionelle Sprach- und Fachprüfung; spätere Korrekturen bleiben möglich.
- Die externe Rechtsprüfung wird dadurch nicht ersetzt. Impressum, Datenschutz und AGB bleiben rechtlich vorläufig; SEO, Legacy-Cleanup, finale Launch-QA, AVV/DPA, Deployment, echter Formularversand und Monitoring bleiben den Aufgaben 029, 026, 033, 034 und 035 zugeordnet.
- Aufgabe 051 wurde formal abgeschlossen. Die Website ist dadurch noch nicht launchbereit; der nächste vorgesehene Projektabschnitt ist Aufgabe 029.

### Aufgabe 051 - Letzte englische Textkorrekturen und akzeptierte Abweichungen dokumentiert

- Drei bestätigte englische Formulierungen zu Unterlagen, vorab übermittelten Fotos und Schadendokumentation wurden ohne weitere Text- oder Layoutänderungen korrigiert.
- Der Nutzer akzeptiert die aktuellen EN-/RU-Texte und fachlichen Aussagen für diesen Projektstand ausdrücklich ohne zusätzliche professionelle Sprach- und Fachprüfung; spätere sprachliche oder fachliche Korrekturen bleiben möglich.
- Diese akzeptierte Abweichung ersetzt keine externe Rechtsprüfung. Impressum, Datenschutz und AGB bleiben rechtlich vorläufig; IONOS-AVV, Resend-DPA, echter Formularversand, Deployment, SEO, Legacy-Cleanup und finale Launch-QA verbleiben in den vorgesehenen Folgeaufgaben.
- Aufgabe 051 bleibt aktiv und `in Arbeit`. `ROADMAP.md` bleibt unverändert, weil sich Reihenfolge, Prioritäten und Projektplanung nicht geändert haben.

### Aufgabe 051 - Abschluss-CTAs in DE, EN und RU vereinheitlicht

- Die Abschlussbereiche von Unfallgutachten, Fahrzeugbewertung und Schadendokumentation verwenden in allen drei Sprachen freigegebene, leistungsspezifische Überschriften und jeweils zwei getrennte Beschreibungssätze.
- Die sichtbaren Aktionen sind sprachweit einheitlich benannt. Der Anfrage-Link besitzt je Seite einen vollständigen zugänglichen Namen mit Leistungsbezug; Hero-Aktionen und Formular-Submit-Buttons blieben unverändert.
- Die gemeinsame CTA-Komponente rendert mehrteilige Beschreibungen semantisch als einzelne Absätze und balanciert deren responsive Umbrüche. Eine ausschließlich auf sehr großen Bildschirmen erweiterte Containerbreite verhindert unnötige Restzeilen langer Überschriften.
- Alle 45 Kombinationen aus drei Leistungen, drei Sprachen und fünf Viewports lieferten HTTP 200 ohne Laufzeit-, Overflow-, Überlappungs- oder Buttonfehler. 45 Fullpage-Aufnahmen, 45 CTA-Ausschnitte und 15 Sprachvergleiche wurden tatsächlich visuell geprüft; alle 18 Sprachwechsel bewahren den Seitenkontext.
- Accessibility-, Mobile-, Desktop-, Content- und Codequalitätsprüfung fanden keine durch den Arbeitsschritt eingeführten Verstöße oder Blocker. Aufgabe 051 bleibt bis zur persönlichen Sichtprüfung aktiv und `in Arbeit`.
- `ROADMAP.md` bleibt unverändert, weil sich Reihenfolge, Prioritäten und Projektplanung nicht geändert haben.

## 2026-08-15

### Aufgabe 051 - Russischen Abschluss-CTA auf Desktop beruhigt

- Die gemeinsame Abschluss-CTA-Beschreibung nutzt ab Desktop statt der bisherigen `66ch`-Begrenzung eine responsive maximale Textbreite von `72ch`.
- Dadurch stehen die beiden bereits getrennten russischen Sätze beim Unfallgutachten bei 1440 und 2048 Pixeln jeweils vollständig in einer eigenen Zeile; die isolierte Restzeile `в форме.` entfällt.
- Wortlaut, Satzzeichen, Schriftgröße, Überschrift, Buttons, zugängliche Namen und Spaltenaufteilung blieben unverändert. Mobile und Tablet dürfen weiterhin natürlich umbrechen.
- 17 CTA-Ansichten in DE, EN und RU wurden bei 390, 768, 1440 und 2048 Pixeln technisch und visuell geprüft. Es traten keine HTTP-, Console-, Hydration-, Request-, Bild- oder Overflowfehler auf.
- `ROADMAP.md` bleibt unverändert, weil sich Reihenfolge, Prioritäten und Projektplanung nicht geändert haben.

## 2026-08-14

### Aufgabe 051 - Hero-Höhen und große Desktop-Ausrichtung vereinheitlicht

- Die gemeinsame Gutachtenseiten-Logik verwendet ab Desktop eine responsive Mindesthöhe. Dadurch sind alle neun DE/EN/RU-Heros bei 1440 und 2048 Pixeln exakt 912 Pixel hoch; Hintergrundbild und Folgeabschnitt schließen jeweils bündig an.
- Der Startseiten-Hero nutzt ausschließlich ab großen Desktop-Breiten einen gemeinsamen responsiven horizontalen Gutter. Der Textblock beginnt bei 1440 Pixeln bei 115,2 Pixeln und bei 2048 Pixeln bei 160 Pixeln; Mobile, Tablet, vertikale Position, Hero-Höhe und Bildausschnitt bleiben unverändert.
- Sichtbare Texte, Übersetzungen, Schriftgrößen, Zeilenumbrüche, CTAs, Navigation, Formulare, Routen, SEO-Technik und Assets wurden nicht verändert.
- 48 Fullpage- und 24 gezielte Hero-Screenshots wurden bei 390 × 844, 768 × 1024, 1440 × 1100 und 2048 × 1100 Pixeln erzeugt und über Kontaktblätter tatsächlich visuell geprüft. Alle Seiten lieferten HTTP 200 ohne Overflow, Console-, Hydration-, Page- oder Requestfehler.
- Alle 18 Sprachwechselrichtungen der drei Gutachtenarten bewahren weiterhin den fachlichen Kontext. Diff-Check, ESLint, TypeScript, Produktions-Build sowie Router-, Accessibility-, Mobile-, Desktop-, Typografie- und Codequalitätsprüfung bestanden.
- ROADMAP.md bleibt unverändert, weil sich Reihenfolge, Prioritäten und Projektplanung nicht geändert haben.

## 2026-08-05

### Aufgabe 051 - Abschluss-CTA-Sätze in EN/RU typografisch getrennt

- Die unveränderten zwei Beschreibungssätze der Abschluss-CTAs auf allen sechs EN/RU-Gutachtenseiten werden mit der vorhandenen gemeinsamen CTA-Logik als getrennte Textblöcke dargestellt.
- Der zweite Satz beginnt dadurch kontrolliert in einem neuen Block und darf innerhalb dieses Blocks auf Mobile, Tablet und Desktop weiterhin natürlich umbrechen.
- Überschriften, Buttons, zugängliche Namen, deutsche Texte und übrige Seitenbereiche bleiben unverändert. Menschliche Sprach-, Fach- und Rechtsfreigaben bleiben offen.
- Die Router-Zählung wurde eingeordnet: Der aktuelle Skill zählt 16 asynchrone Seiten; frühere 18er-Angaben schlossen zusätzlich die zwei synchronen Catch-all-404-Routen ein. Es fehlt keine Pflichtgrenze.
- Die sechs EN/RU-Seiten bestanden die Browserprüfung bei 390 × 844, 768 × 1024, 1440 × 900 und 1440 × 1100 Pixeln ohne Overflow, Console-, Hydration-, Request- oder Bildfehler. Das frühere rote `1 Issue`-Badge trat in der sauberen Produktionssitzung nicht auf.
- 24 CTA-Ausschnitte und 12 deterministische EN/RU-Vergleichsbilder wurden tatsächlich visuell geprüft und ausschließlich außerhalb des Repositorys gespeichert.

### Aufgabe 051 - CTA-Semantik, Textumbrüche und Desktop-Hero nachgeschärft

- Vorbereitende Formularlinks und echte Submit-Buttons sind in EN/RU sprachlich eindeutig getrennt: sichtbar `Make an enquiry` beziehungsweise `Оставить заявку` vor dem Formular und `Send enquiry` beziehungsweise `Отправить заявку` beim tatsächlichen Absenden.
- Kontextspezifische zugängliche Namen nennen die jeweilige Gutachtenart oder UNEXT und enthalten den sichtbaren CTA-Text vollständig und in derselben Reihenfolge.
- Längere EN/RU-Kontaktüberschriften nutzen ihre responsive Textbreite besser und balancieren ohne Textänderung ruhiger; alle übrigen sichtbaren Überschriftentexte bleiben unverändert.
- Der gemeinsame Startseiten-Hero positioniert den Inhalt nur auf Desktop geringfügig tiefer. Hero-Höhe, Bilder, Bildausschnitte sowie Mobile und Tablet bleiben unverändert.
- Menschliche EN/RU-Sprachfreigaben und geeignete Fach- und Rechtsprüfungen bleiben offen. `ROADMAP.md` bleibt unverändert, weil sich Projektplanung, Reihenfolge und Prioritäten nicht geändert haben.

### Aufgabe 051 - Visuelle Parität der dreisprachigen Kernseiten verfeinert

- Fahrzeugbewertung und Schadendokumentation verwenden in EN/RU auf Tablet und Desktop dieselben breiten Detailbereiche und mehrspaltigen Inhaltsraster wie die deutsche Referenz; Mobile bleibt einspaltig.
- Englische Detailseiten erhalten ab Tablet mehr Titelbreite, ohne Textänderung oder erzwungene Umbrüche. Die englischen FAQ-Bereichstitel wurden einheitlich auf `Frequently asked questions` verkürzt.
- Der gemeinsame Startseiten-Hero positioniert seinen Inhalt ausschließlich auf Desktop etwas tiefer im bestehenden Layoutfluss; Hero-Höhe, Bildausschnitt, Texte und mobile beziehungsweise Tablet-Darstellung bleiben unverändert.
- Menschliche EN/RU-Sprachfreigaben sowie geeignete Fach- und Rechtsprüfungen bleiben offen. `ROADMAP.md` bleibt unverändert, weil sich Reihenfolge, Prioritäten und Projektplanung nicht geändert haben.

### Aufgabe 051 - Bestätigte Sprach- und Accessibility-Lücken korrigiert

- Bestätigtes externes Sprachfeedback wurde eng auf die sichtbaren EN/RU-Kerntexte angewendet: fehlende Einleitungen, verkürzte Fachbeschreibungen, russische Detailtexte und ausgewählte englische UI-Beschriftungen wurden an die deutsche Referenz angeglichen.
- Startseiten-Bildbeschreibungen, Schließen-Beschriftung des mobilen Menüs und Footer-Navigation sind jetzt in DE/EN/RU zugänglich lokalisiert; kompakte englische Kartenaktionen besitzen vollständige zugängliche Zielnamen.
- Die vorhandene deutsche Foto-FAQ blieb unverändert. Ihre vermeintliche Lücke war ausschließlich eine fehlerhafte Zuordnung in der externen Inventur und wird außerhalb des Repositorys berichtigt.
- Rechtstexte, Routing, Redirects, Assets sowie technische SEO-Dateien blieben unverändert. Menschliche EN/RU-Sprachfreigaben sowie geeignete Fach- und Rechtsprüfungen bleiben offen; der russische Fachbegriff für `Wiederbeschaffungswert` wurde nicht neu festgelegt.
- `ROADMAP.md` blieb unverändert, weil Reihenfolge, Prioritäten und Projektplanung nicht geändert wurden.

## 2026-08-03

### Aufgabe 051 - DE/EN/RU-Parität, Layout und Formularvalidierung korrigiert

- Englische und russische Begriffe für Gutachtenarten, Anfragen, Wertminderung und Fahrzeugwerte wurden vereinheitlicht; deutsche Resttexte, ein doppeltes russisches Wort und zwei nachgewiesene Bedeutungsfehler in den russischen Rechtstexten wurden korrigiert.
- Die sichtbaren EN/RU-Trustaussagen nennen DESAG eindeutig als prüfende und anerkennende Organisation, ohne eine staatliche oder behördliche Anerkennung zu behaupten. Menschliche Sprach-, Fach- und Rechtsfreigaben bleiben offen.
- Startseiten-Hero und Gutachtenkarten verwenden in DE, EN und RU dieselbe responsive Grundlogik. Desktop zeigt drei Karten, Tablet zwei Karten mit zentrierter dritter Karte und Mobile eine Karte pro Reihe.
- Kontakt- und Gutachtenformulare verwenden gemeinsame Zod-Regeln für lokalisierte Client- und Servervalidierung. Ungültige Eingaben fokussieren das erste Fehlerfeld, sind barrierearm verknüpft und lösen keine Server Action aus.
- Diff-Check, ESLint, TypeScript, Produktions-Build, Router-, Accessibility-, Mobile-, Desktop-, Content-, Typografie- und Browserprüfungen bestanden. Screenshots und Laufzeitberichte liegen ausschließlich außerhalb des Repositorys unter `C:/tmp/unext-task-051-corrections-review/`.
- `ROADMAP.md` blieb unverändert, weil Reihenfolge, Prioritäten und Projektplanung nicht geändert wurden.
### Aufgabe 051 - Dreisprachige Rechtstexte kontrolliert überarbeitet

- Bestätigte Unternehmens-, Register-, Umsatzsteuer- und Kontaktdaten wurden in das dreisprachige Impressum übernommen; Platzhalter, veralteter RStV-Verweis und früherer EU-ODR-Hinweis wurden entfernt.
- Datenschutzerklärungen in DE/EN/RU wurden an den tatsächlichen Website-Stand mit IONOS-Hosting, Resend-Versand, Formularen, Browser-Theme, externen Links, lokalen Assets, fehlendem aktivem Tracking, Speicherkriterien, Betroffenenrechten und Berliner Aufsichtsbehörde angepasst.
- Kontakt- und Serviceformulare informieren neutral über die Datenverarbeitung und verlangen keine Datenschutzeinwilligung als Voraussetzung der Anfrage.
- AGB in DE/EN/RU bilden nur unverbindliche Anfragen, die drei Gutachtenarten, individuelle Vereinbarungen, Zahlungen, Kundenmitwirkung, Termine, gesetzliche Haftung und einen nur bei Relevanz gesondert zu behandelnden Widerruf ab.
- Datenschutzbeauftragter, MStV-Verantwortlichkeit und VSBG-Hinweis wurden anhand des bestätigten Betriebsstands eingeordnet. AVV/DPA-Nachweise, wirksame AGB-Einbeziehung, DL-InfoV-, Widerrufs- und §-37-VSBG-Prozesse bleiben interne Launch-Gates.
- Alle drei Sprachfassungen bleiben bis zur geeigneten Rechtsprüfung und menschlichen EN/RU-Sprachprüfung ausdrücklich vorläufig. ROADMAP.md blieb unverändert, weil sich Reihenfolge und Projektplanung nicht geändert haben.
- Diff-Check, ESLint, TypeScript, Produktions-Build, 27 responsive Legal-Seiten-Prüfungen und neun kontexttreue Sprachwechsel bestanden; die Screenshots liegen ausschließlich außerhalb des Repositorys.

## 2026-08-02

### Aufgabe 051 - Freigegebene Referenztexte und deutsche 404 korrigiert

- Kleine freigegebene Referenztext-Korrekturen wurden auf Startseite, Unfallgutachten, Fahrzeugbewertung und Über-uns-Seite in DE sowie vorläufig sinngleich in EN/RU übernommen.
- Eine deutsche Catch-all-Route führt unbekannte deutsche Pfade zur vorhandenen deutschen 404-Ausgabe; EN/RU-Wiederherstellungsaktionen wurden sprachlich angeglichen.
- EN/RU-Fortbildungstexte bleiben bis zur menschlichen Sprach- und geeigneten Fachprüfung ausdrücklich vorläufig. Gutachterkosten, Legal-Texte, SEO, Legacy-Inhalte, Layouts und Assets blieben unverändert.
- `ROADMAP.md` blieb unverändert, weil Reihenfolge, Prioritäten und Projektplanung nicht verändert wurden.

## 2026-08-01

### Aufgabe 051 - Vorläufige lokale Umsetzung und technischer Dateiplan vorbereitet

- Der konkrete technische Dateiplan wurde ausdrücklich für die vorläufige lokale EN/RU-Umsetzung freigegeben; die Codeumsetzung darf auf dem Aufgabenbranch beginnen.
- Der vorläufige lokale Preview-Stand wurde anschließend umgesetzt: sechs neue EN/RU-Gutachtenartenrouten, zwei direkte permanente Redirects, kontexttreuer Sprachwechsel, drei Gutachtenarten, Startseite, Über uns, Trust, Kontakt, Formulare sowie Error- und 404-Zustände.
- Header, Mobile-Menü und Footer führen in EN/RU auf die drei Gutachtenarten; alter sichtbarer Mehrleistungs-Scope wurde aus den V1-Kernwegen entfernt, ohne Legacy-Seiten oder Assets zu löschen.
- Lokalisierte Feld- und Servermeldungen sowie ein sprachlich eindeutiger interner Formularkontext wurden ergänzt; Versand-, Environment- und Empfängerkonfiguration blieben unverändert.
- Alle sechs neuen Routen, beide 308-Redirects und 18 Sprachwechselrichtungen wurden lokal geprüft. 50 Fullpage-Screenshots bei 390, 768 und 1440 px liegen ausschließlich unter `C:/tmp/unext-task-051-provisional-preview/`.
- Diff-Check, ESLint, TypeScript, Produktions-Build, Route-, Accessibility-, Content-, Mobile-, Desktop- und Typografieprüfungen wurden ausgeführt. Ein anfänglicher lokalisierter 404-Befund wurde mit einer locale-nahen Catch-all-Route behoben.
- Alte EN/RU-Metadata und Structured Data bleiben als technischer Folgepunkt bei Aufgabe 029; Legacy-Seiten und Alt-Daten bleiben Aufgabe 026. `ROADMAP.md` bleibt unverändert, weil Reihenfolge und Projektplanung nicht geändert wurden.
- Der entstehende Preview-Stand bleibt bis zur menschlichen EN/RU-Sprachprüfung sowie den erforderlichen Fach- und Rechtsprüfungen vorläufig und nicht launchfähig.
- Die ausdrücklich freigegebene Reihenfolge wurde angepasst: Nach Freigabe des konkreten Dateiplans dürfen die EN/RU-Entwürfe vorläufig lokal umgesetzt und anschließend im echten Layout geprüft werden.
- Menschliche EN/RU-Sprachprüfung, erforderliche Fachprüfung und geeignete Behandlung der Rechtstexte bleiben verbindliche Gates vor Abschluss, Push, Pull Request und Launch.
- Ein konkreter Dateiplan kartiert zentrale Seiten-IDs, sechs EN/RU-Gutachtenartenrouten, zwei direkte Redirects, Navigation, Startseiten, Trust, Kontakt, Formulare, Error/404, interne Links sowie die Prüfungen bei 390, 768 und 1440 px.
- Bestehende Komponenten werden bevorzugt locale-fähig weiterverwendet; eine neue React-Komponente ist nicht geplant.
- Die Codeumsetzung hat noch nicht begonnen. `ROADMAP.md` bleibt unverändert, weil Aufgabe, Projektziel und nachgelagerte Reihenfolge nicht verändert wurden.

## 2026-07-30

### Aufgabe 051 - EN/RU-V1-Kernseiten und Nutzerwege gestartet

- Aufgabe 051 wurde auf einem eigenen Branch angelegt, aktiviert und vollständig als EN/RU-Umsetzungsaufgabe geplant; Deutsch bleibt die fachliche Referenz.
- Bestehende DE/EN/RU-Routen, Übersetzungsquellen, Kernkomponenten, Navigation, Sprachwechsel, Formulare, Trust-Angaben, Legal-Seiten sowie Error- und 404-Zustände wurden read-only inventarisiert.
- Eine Seiten- und Inhaltsmatrix, die neun geplanten Gutachtenartenrouten, direkte EN/RU-Redirectziele, ein seiten-ID-basiertes Sprachwechselmodell und getrennte Text-, Freigabe-, Umsetzungs- und Prüfphasen wurden dokumentiert.
- `next-router-check` erfasste 28 Routen und 13 datenladende lokalisierte Routen mit vorhandenen Loading-/Error-Grenzen; für diese Routen fehlt weiterhin ein lokalisierter Not-found-Scope, der in 051 geplant und vor Abschluss erneut geprüft wird.
- Vor EN/RU-Textentwürfen oder Website-Codeänderungen sind eine ausdrückliche Planfreigabe, separate Textentwürfe, menschliche EN/RU-Freigaben und ein freigegebener Dateiplan erforderlich.
- Es wurden in diesem Startschritt keine Website-, Übersetzungs-, Routen-, Redirect-, SEO-Technik- oder Assetdateien geändert. Die Website ist weiterhin nicht launchbereit.

### Aufgabe 051 - Englische und russische V1-Textentwürfe vorbereitet

- Nach ausdrücklicher Freigabe des Plans wurden getrennte englische und russische Textentwürfe mit Zuordnung zur aktuellen deutschen Referenz erstellt.
- Die Entwürfe decken Navigation, Footer, Startseite, alle drei Gutachtenarten, Über uns, Kontakt, Formulare sowie Error- und 404-Zustände ab und vermeiden den früheren Mehrleistungs-Scope.
- Natürlichkeit, sinngleiche Aussage und kompakte UI-Texte wurden als Ziel berücksichtigt; die Entwürfe sind noch nicht menschlich sprachlich, fachlich oder rechtlich freigegeben.
- Rechtstexte bleiben bis zu einer geeigneten beziehungsweise qualifizierten Prüfung vorläufig. Vor Codeänderungen bleiben Textfreigabe und ein gesondert freizugebender Dateiplan erforderlich.
- Es wurden keine Website-, Übersetzungs-, Routen-, Redirect-, SEO-Technik- oder Assetdateien geändert.

### Aufgabe 051 - Menschliche EN/RU-Sprachprüfung dokumentarisch vorbereitet

- Für den englischen und russischen V1-Textentwurf wurden getrennte Prüfpakete mit Prüferfeldern, Ergebnisstatus, Bereichschecklisten und Korrekturtabellen vorbereitet.
- Die Pakete trennen Sprachprüfung, Fachprüfung und Rechtsprüfung und kennzeichnen Versicherungs-, Kosten-, Gutachterwahl-, Qualifikations-, DESAG- und Legal-Aussagen als zusätzliche Prüf-Gates.
- Unternehmens- und Kontaktdaten sind als feste sprachübergreifende Referenz aufgenommen; reale Daten dürfen durch die Sprachprüfung nicht eigenständig geändert werden.
- Eine menschliche EN- oder RU-Freigabe wird nicht behauptet. Textfreigabe, Fach-/Rechtsprüfung, technischer Dateiplan und Website-Umsetzung bleiben offen.
- Es wurden ausschließlich Dokumentationsdateien geändert; `ROADMAP.md` blieb unverändert, weil Reihenfolge und Projektplanung unverändert bleiben.

### Aufgabe 032 - Dreisprachige V1-Launch-Planung abgeschlossen

- Alle Akzeptanzkriterien wurden geprüft, erfüllt und nach ausdrücklicher Nutzerfreigabe abgeschlossen.
- Der gemeinsame DE/EN/RU-V1-Launch, Deutsch als fachliche Referenz und das Vorgehen für Übersetzung, Routen, Sprachwechsel, Formulare, Fehlerzustände, menschliche Freigaben und responsive Qualität sind verbindlich dokumentiert.
- Alle Befunde aus Aufgabe 049 sind einer später gesondert freizugebenden EN/RU-Umsetzung oder den Aufgaben 029, 026, 033, 034 und 035 zugeordnet; der fehlende lokalisierte Not-found-Scope bleibt der EN/RU-Umsetzung und Aufgabe 033 zugeordnet.
- Aufgabe 032 wurde nach `workflow/done/` verschoben. Es wurden keine Website-, Code-, Übersetzungs-, Routen-, Redirect-, SEO-Technik- oder Assetänderungen umgesetzt.

### Aufgabe 032 - Aktive Routing- und Launch-Dokumentation synchronisiert

- Mehrsprachigkeits-, SEO- und Routing-Specs wurden mit den durch Aufgabe 050 umgesetzten deutschen `/gutachtenarten/...`-Routen und den direkten permanenten Weiterleitungen der früheren `/leistungen/...`-Detailrouten synchronisiert.
- `/leistungen` ist dokumentarisch als weiterhin bestehende eigenständige Übersichtsroute eingeordnet; ihre finale SEO- und Cleanup-Behandlung bleibt bei 029 und 026.
- Die geplanten, noch nicht implementierten EN/RU-Gutachtenartenrouten wurden klar vom deutschen Ist-Stand getrennt; der fachliche Seitenkontext muss beim späteren Sprachwechsel erhalten bleiben.
- Open Questions, V1-Launch-Masterplan, historischer Routing-/Redirectplan, Roadmap und die aktive Aufgabe 032 wurden auf die abgeschlossenen Aufgaben 047 bis 050 und die aktive dreisprachige Planung aktualisiert.
- Es wurden ausschließlich Dokumentationsdateien geändert; keine Website-, Übersetzungs-, Routen-, Redirect-, SEO-Technik- oder Assetänderung wurde umgesetzt.

### Aufgabe 032 - Dreisprachige V1-Launch-Planung gestartet

- Aufgabe 032 wurde für den gemeinsamen V1-Launch auf Deutsch, Englisch und Russisch offiziell gestartet; Deutsch bleibt die fachliche Referenz.
- Der Bestand aus Aufgabe 049 wurde mit Routing, Übersetzungen, Navigation, Formularen, Fehlerzuständen und Trust read-only abgeglichen.
- Soll-Routen, fachlicher Sprachwechsel, natürlicher Übersetzungsprozess, menschliche Freigaben und responsive Prüfungen bei 390, 768 und 1440 px wurden geplant.
- Die spätere EN/RU-Umsetzung wurde von SEO in 029, Legacy-Cleanup in 026, Launch-QA in 033, Deployment/Formularversand in 034 und Monitoring in 035 abgegrenzt.
- `next-router-check` bestätigte 28 Routen, davon 13 datenladende lokalisierte Routen mit vorhandenen Loading-/Error-Grenzen und fehlendem lokalisiertem Not-found-Scope.
- Es wurden keine Website-, Übersetzungs-, Routen-, SEO-, Metadata-, Structured-Data- oder Assetdateien geändert.

### Dreisprachige V1-Launch-Entscheidung in Specs konsolidiert

- Die bereits bestätigte gemeinsame V1-Veröffentlichung auf Deutsch, Englisch und Russisch wurde in Global Spec, Functional Map, Mehrsprachigkeits-Spec, Open Questions und Launch Readiness konsistent nachgeführt.
- Die frühere offene Frage `Deutsch zuerst oder alle drei Sprachen` wurde dokumentarisch geschlossen; Deutsch bleibt fachliche Referenz, EN/RU müssen gleichwertig, menschlich freigegeben und separat responsiv geprüft sein.
- Der alte Routingplan wurde nur hinsichtlich der überholten Sprachumfangsentscheidung eingeordnet; bestehende Routing- und Cleanup-Empfehlungen blieben erhalten.
- Aufgabe 032 wurde noch nicht gestartet und bleibt mit Status `offen` in `workflow/todo/`.

### Aufgabe 049 - Vollständiger dreisprachiger V1-User-Journey-Audit

- 41 vorhandene DE/EN/RU-Seitenziele und sechs fehlende Gutachtenziele read-only auf HTTP-Status, Inhalt, Navigation, Sprachwechsel, Kontaktwege, Formulare und Fehlerzustände geprüft.
- Vier zentrale Nutzerwege in Deutsch, Englisch und Russisch mit den V1-User-Stories abgeglichen und als Traceability-Matrix dokumentiert.
- 57 Screenshots bei 390, 768 und 1440 px ausschließlich außerhalb des Repositorys unter `C:/tmp/unext-task-049-multilingual-audit/` erstellt.
- Die deutschen Kernnutzerwege funktionieren weitgehend; die alten deutschen Gutachten-URLs leiten korrekt permanent auf `/gutachtenarten/...` weiter.
- Launch-Blocker dokumentiert: fehlende EN/RU-Seiten, verlorener Detailkontext beim Sprachwechsel, alter EN/RU-Multi-Service-Scope, stärkere EN/RU-Versprechen, fehlende Trust-Parität, veraltete Metadata/Structured Data, verbleibende Legacy-Seiten und ein russischer Desktop-Textüberlauf.
- Performance-Folgepunkte dokumentiert: nicht konfigurierte Next-Image-Qualitätswerte für 033 sowie ein unreferenziertes 19,4-MB-Asset zur kontrollierten Prüfung in 026; keine akute Laufzeitregression festgestellt.
- Formulare ohne echten Versand auf Pflichtfelder, Labels, Datenschutzlinks und Kontaktziele geprüft; Deployment-Konfiguration und kontrollierter Versand bleiben Launch-Gate.
- `site-launch-audit`, `typography-line-break-check`, `next-router-check` sowie read-only Spezialreviewer eingesetzt.
- `npm run lint`, `npx tsc --noEmit` und `npm run build` bestanden; 43 Seiten erzeugt.
- Aufgabe 049 wurde nach erfüllter Akzeptanzprüfung und ausdrücklicher Nutzerfreigabe als Audit abgeschlossen. Das Ergebnis bleibt `V1 user stories and user journeys have gaps`; die Website ist wegen der dokumentierten Blocker weiterhin nicht launchbereit.
- Keine Website-, Routen-, Übersetzungs-, SEO- oder Assetdatei wurde durch den Audit geändert.
- `ROADMAP.md` blieb unverändert, weil der Audit keine bestätigte Reihenfolge, Priorität oder neue Aufgabe eingeführt hat.

## 2026-07-29

### Aufgabe 049 - Dreisprachigen V1-User-Journey-Audit gestartet

- Aufgabe 049 wurde auf dem eigenen Branch gestartet und nach `workflow/active/` verschoben.
- Der gemeinsame V1-Launch auf Deutsch, Englisch und Russisch wurde als verbindliche Projektentscheidung dokumentiert; Deutsch bleibt die fachliche Referenz.
- Aufgabe 032 wurde als spätere Konkretisierung des Übersetzungs-, Qualitäts- und Layoutvorgehens eingeordnet und entscheidet nicht mehr über den Sprachumfang.
- Deutsche V1-Kernrouten sowie vorhandene EN/RU-Routen, Inhalte, Navigation, Sprachwechsel, Kontaktwege und Formulare wurden read-only inventarisiert.
- Erkennbare EN/RU-Lücken und Altinhalte wurden in Aufgabe 049 dokumentiert; es wurden keine Website-Dateien, Übersetzungen oder Routen geändert.

### Aufgabe 050 - Routenmigration umgesetzt und abgeschlossen

- Die drei deutschen Gutachtenarten wurden auf neue kanonische Routen unter `/gutachtenarten/...` migriert.
- Die bisherigen deutschen Detail-URLs unter `/leistungen/unfallgutachten`, `/leistungen/fahrzeugbewertung` und `/leistungen/schadendokumentation` leiten permanent und direkt auf die passenden neuen Zielrouten weiter.
- Deutsche Header-/Footer-Links, Startseitenkarten, der Über-uns-Link sowie Service-Structured-Data- und Breadcrumb-Pfade wurden auf die neue Routenstruktur angepasst.
- `/leistungen` bleibt technisch erhalten und wurde nicht gelöscht, nicht umgebaut und nicht umgeleitet.
- EN/RU-Routen und alte Legacy-Service-Routen bleiben unverändert.
- `next-router-check`, `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` wurden ausgeführt; der erste TypeScript-Lauf benötigte nach der Routenentfernung neu erzeugte `.next`-Router-Typen und bestand nach `npm run build`.
- Route-/Redirect-Prüfung erfolgte lokal auf `127.0.0.1:3108`; Screenshots wurden außerhalb des Repositorys unter `C:/tmp/unext-task-050-route-migration-review/` erstellt.
- `next-env.d.ts` wurde nach Dev-Server-Nutzung wieder auf den committed Stand zurückgesetzt.
- `ROADMAP.md` blieb unverändert, weil Reihenfolge, Prioritäten und Projektplanung nicht geändert wurden.
- Aufgabe 050 wurde nach bestandener Abschlussprüfung und Nutzerfreigabe formal abgeschlossen und nach `workflow/done/` verschoben.

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
