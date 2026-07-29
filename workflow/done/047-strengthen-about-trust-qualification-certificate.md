# Aufgabe 047 - Über-uns-Seite Trust, Qualifikation und Zertifikatsdarstellung verstärken

## Ziel

Die bestehende deutsche Über-uns-Seite `/ueber-uns` soll als zentrale Trust- und Qualifikationsseite von UNEXT gezielt weiterentwickelt werden.

Die Seite soll nachvollziehbar erklären:

- wofür UNEXT im Bereich KFZ-Gutachten steht
- welche belegte Sachverständigenqualifikation verwendet werden darf
- wie Qualifikation und Anerkennung sachlich einzuordnen sind
- wie belegte Fortbildungen getrennt von Anerkennung und Zertifizierung dargestellt werden
- ob und in welcher datenschutz- und rechtekonformen Form ein Zertifikat beziehungsweise eine Urkunde öffentlich gezeigt werden darf

Es dürfen ausschließlich Aussagen und Nachweise verwendet werden, die durch freigegebene Specs, vorhandene Belege oder eine ausdrückliche Nutzerfreigabe gedeckt sind.

## Kontext und Abhängigkeiten

Aufgabe 040 hat den kurzen Trust-Satz auf der Startseite und die grundlegende deutsche Über-uns-Seite mit Bereichen zu Arbeitsweise, Qualifikation und Weiterbildung umgesetzt.

Der aktuelle deutsche Inhalt liegt in `components/AboutPageContent.tsx`. Dort bestehen bereits:

- ein eigenständiger deutscher Über-uns-Aufbau
- ein Bereich zur sachlichen Begutachtung
- eine gemeinsame Darstellung von Qualifikation und Weiterbildung
- ein bestehender Abschluss-CTA
- ein freigegebenes Bürobild aus `public/images/about-office.webp`

Ein öffentliches Zertifikats-, Urkunden- oder Qualifikations-Asset ist derzeit unter `public/` nicht vorhanden.

Aufgabe 036 hat den belegbaren Zertifizierungsnachweis eingeordnet. Aufgabe 038 hat die daraus abgeleiteten Trust-, Rechte-, Datenschutz- und Darstellungsgrenzen in die freigegebenen Specs übernommen. Aufgabe 040 hat bewusst noch kein Zertifikat eingebunden.

Aufgabe 047 ist der nächste Schritt nach der abgeschlossenen Aufgabe 046. Aufgabe 048 darf erst nach Abschluss von Aufgabe 047 starten und prüft anschließend die deutschen Kernseiten gemeinsam auf Konsistenz, Typografie und Trust.

## Verbindliche Grundlagen

Vor Planung und Umsetzung müssen mindestens diese Grundlagen vollständig berücksichtigt werden:

- `specs/00-global-spec/global-spec.md`
- `specs/01-functional-map/functional-map.md`
- `specs/02-feature-specs/kfz-gutachten.md`
- `specs/04-visual-rules/visual-rules.md`
- `specs/06-work-plans/launch-readiness.md`
- `specs/06-work-plans/v1-launch-masterplan.md`
- `workflow/done/036-spec-trust-zertifizierung-nachweis.md`
- `workflow/done/038-update-specs-trust-zertifizierung-nachweis.md`
- `workflow/done/040-implement-trust-qualification-sections.md`
- `workflow/done/046-rework-damage-documentation-page.md`
- `workflow/todo/048-review-german-core-page-consistency.md`
- `ROADMAP.md`

Bei Widersprüchen gilt die Spec-Hierarchie aus `AGENTS.md`. Offene Entscheidungen dürfen nicht als bestätigte Anforderungen umgesetzt werden.

## Freigabe- und Nachweis-Gate vor der Umsetzung

Vor jeder sichtbaren Änderung müssen zunächst der bestehende Seiteninhalt, vorhandene Nachweise und mögliche Assets inventarisiert werden.

Danach müssen die geplante Seitenstruktur und sämtliche neuen oder geänderten sichtbaren deutschen Texte dem Nutzer zur Freigabe vorgelegt werden.

Für eine sichtbare Urkunde oder ein sichtbares Zertifikat ist zusätzlich eine ausdrückliche Entscheidung erforderlich zu:

- Veröffentlichungs- und Nutzungsrechten
- Datenschutz und personenbezogenen Angaben
- sichtbarer oder geschwärzter Reg.-Nr.
- Name und weiteren Identifikationsdaten
- Datum
- Unterschrift
- Stempel
- Logos und sonstigen geschützten Bestandteilen
- zulässiger Bildform und Alternativtext

Ohne diese ausdrückliche Freigabe wird kein Zertifikats- oder Urkunden-Asset eingebunden. Eine rein textliche, spec-konforme Darstellung der belegten Qualifikation ist dann das zulässige Ergebnis. Es darf kein Platzhalter, Dummy-Zertifikat oder nachgebautes Siegel verwendet werden.

## Scope

Aufgabe 047 darf:

- ausschließlich die deutsche Über-uns-Seite `/ueber-uns` fachlich und visuell gezielt überarbeiten
- den bestehenden deutschen Inhalt auf Klarheit, Informationshierarchie, Trust-Wirkung und belegbare Aussagen prüfen
- den Bereich `Qualifikation & Anerkennung` klar benennen und stärken
- den Bereich `Fortbildungen & Weiterbildung` sichtbar und inhaltlich von Anerkennung und Zertifizierung trennen
- die freigegebene Formulierung verwenden:
  `Geprüfter und anerkannter Sachverständiger für Schäden an Kraftfahrzeugen und Wertermittlung.`
- bestehende Texte an die exakte freigegebene Formulierung und die geltenden fachlichen Grenzen angleichen
- belegte Fortbildungen nur dann konkret nennen, wenn dafür ein prüfbarer Nachweis und eine ausdrückliche Freigabe vorliegen
- ein Zertifikat oder eine Urkunde nur nach bestandenem Freigabe- und Nachweis-Gate datensparsam und sachlich einbinden
- vorhandene freigegebene Komponenten, Layoutmuster und Assets wiederverwenden
- die deutsche Über-uns-Seite mobile-first für 390 px, 768 px und 1440 px optimieren
- bestehende Kontaktwege und den Abschluss-CTA auf Verständlichkeit und Erreichbarkeit prüfen

## Abgrenzung und Nicht-Scope

Aufgabe 047 darf nicht:

- die Startseite oder die drei Gutachten-Unterseiten überarbeiten; der gemeinsame Konsistenzcheck bleibt Aufgabe 048
- englische oder russische Inhalte ändern oder neue Übersetzungen erstellen
- SEO-, Metadata-, OpenGraph- oder Structured-Data-Dateien ändern; dies bleibt Aufgabe 029
- Routen, Redirects, Canonicals oder Sitemap ändern; die Gutachtenarten-Migration bleibt Aufgabe 050
- Kontakt-, Formular-, Resend-, E-Mail-, Backend- oder Legal-Logik ändern
- neue Dependencies, Umgebungsvariablen oder Build-Konfigurationen einführen
- Upload-, Supabase-, KI-, Admin- oder Portal-Funktionen ergänzen
- ein DESAG-Logo, ein separates Siegel, ein Badge oder eine werbliche Zertifikatsgrafik verwenden
- eine aktive DESAG-Mitgliedschaft, DESAG-Partnerschaft oder BSG-Mitgliedschaft behaupten
- eine öffentliche Bestellung, Vereidigung, amtliche Anerkennung, staatliche Prüfung oder hoheitliche Stellung behaupten oder visuell suggerieren
- Superlative, Erfolgsversprechen, Garantien oder eine nicht belegte besondere Erfahrung behaupten
- Fortbildungen, Zertifikate, Qualifikationen, Zeiträume oder Kompetenzsteigerungen erfinden
- Software-Schulungen wie `autoiXpert` als öffentliches Trust-, Zertifizierungs-, Credential-, Badge- oder Siegelmerkmal darstellen
- sensible Daten, Reg.-Nr., Unterschrift, Stempel oder personenbezogene Angaben ohne ausdrückliche Sichtbarkeitsfreigabe veröffentlichen
- Dummy-Inhalte, Platzhalter-Zertifikate, Fake-Reviews oder nicht freigegebene Trust-Elemente verwenden

## Geplantes Vorgehen

1. Aktuellen Branch, Working Tree, aktive Workflow-Aufgabe und Abhängigkeiten erneut prüfen.
2. Verbindliche Specs, Aufgaben 036, 038, 040 und 046 sowie Aufgabe 048 vollständig berücksichtigen.
3. Die deutsche Über-uns-Seite und alle wiederverwendeten Komponenten, Texte und Assets inventarisieren.
4. Bestehende sichtbare Aussagen gegen die freigegebenen Trust-, Qualifikations- und Fortbildungsregeln prüfen.
5. Vorhandene Nachweise und mögliche Zertifikats-/Urkunden-Assets prüfen, ohne sie ungefragt zu veröffentlichen.
6. Die Entscheidung zur Zertifikatsdarstellung und zu allen sichtbaren beziehungsweise zu schwärzenden Angaben dokumentieren.
7. Eine begrenzte neue Seitenstruktur sowie sämtliche sichtbaren deutschen Texte zur ausdrücklichen Nutzerfreigabe vorlegen.
8. Erst nach Freigabe die deutsche Über-uns-Seite umsetzen; vorhandene Komponenten und Muster vorrangig wiederverwenden.
9. Mobile zuerst prüfen, danach Tablet und Desktop bei 390 px, 768 px und 1440 px.
10. `typography-line-break-check` für sichtbare Texte, Fachbegriffe, Umlaute und Zeilenumbrüche verwenden.
11. `next-router-check` für die betroffene App-Router-Route verwenden und fehlende Sonderdateien einordnen.
12. Tastaturbedienung, semantische Überschriftenstruktur, Alternativtexte, Fokuszustände, CTA-Erreichbarkeit, horizontalen Overflow sowie Browser-Console- und Hydration-Fehler prüfen.
13. `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` ausführen.
14. Akzeptanzkriterien prüfen und Roadmap sowie Changelog auf notwendigen Aktualisierungsbedarf bewerten.
15. Ergebnis, geänderte Dateien, Checks, Reviewer und offene Punkte zusammenfassen und vor dem Verschieben nach `workflow/done/` ausdrücklich die Nutzerfreigabe abwarten.

## Akzeptanzkriterien

- Aufgabe 047 wurde erst nach ausdrücklicher Freigabe aus `workflow/todo/` gestartet und auf einem eigenen passenden Branch bearbeitet.
- Der Working Tree war vor dem Start sauber und es lag keine andere aktive Aufgabe in `workflow/active/`.
- Alle verbindlichen Grundlagen wurden geprüft und Widersprüche oder offene Entscheidungen wurden vor der Umsetzung benannt.
- Die bestehende deutsche Über-uns-Seite, ihre Komponenten, sichtbaren Texte und verwendeten Assets wurden vollständig inventarisiert.
- Die geplante Seitenstruktur und sämtliche neuen oder geänderten sichtbaren deutschen Texte wurden vor der Umsetzung ausdrücklich vom Nutzer freigegeben.
- Die deutsche Über-uns-Seite bleibt eine gezielte Weiterentwicklung der Umsetzung aus Aufgabe 040 und wird nicht ohne Freigabe vollständig neu aufgebaut.
- `Qualifikation & Anerkennung` ist als zentraler, sachlicher Trust-Bereich klar erkennbar.
- Die sichtbare Qualifikationsaussage bleibt auf die freigegebene Formulierung `Geprüfter und anerkannter Sachverständiger für Schäden an Kraftfahrzeugen und Wertermittlung.` begrenzt oder verwendet eine nachweislich gleichbedeutende, ausdrücklich freigegebene Formulierung.
- `Fortbildungen & Weiterbildung` ist sichtbar von Anerkennung, Zertifizierung und Sachverständigenstatus getrennt.
- Konkrete Fortbildungen werden nur genannt, wenn Nachweis und ausdrückliche Freigabe dokumentiert sind.
- Die Entscheidung, ob ein Zertifikat beziehungsweise eine Urkunde öffentlich dargestellt wird, ist ausdrücklich dokumentiert.
- Ohne vollständige Rechte-, Datenschutz- und Sichtbarkeitsfreigabe wurde kein Zertifikats- oder Urkunden-Asset, kein Platzhalter und keine nachgebaute Darstellung eingebunden.
- Falls ein Zertifikat beziehungsweise eine Urkunde freigegeben eingebunden wurde, sind alle sichtbaren und geschwärzten Angaben dokumentiert, sensible Daten datensparsam behandelt, Nutzungsrechte bestätigt und Darstellung sowie Alternativtext sachlich und barrierearm umgesetzt.
- Es werden keine DESAG-Logos, separaten Siegel, Badges, werblichen Zertifikatsgrafiken oder Software-Schulungen als Trust-Merkmale verwendet.
- Es bestehen keine unbelegten Mitgliedschafts-, Partner-, Amts-, Vereidigungs-, staatlichen Prüfungs-, Erfahrungs-, Superlativ- oder Garantieaussagen.
- Sichtbare deutsche Texte verwenden echte Umlaute und sind fachlich verständlich.
- Überschriftenhierarchie, Textbreiten, Zeilenumbrüche, Karten und mögliche Nachweisdarstellung funktionieren bei 390 px, 768 px und 1440 px ohne gequetschte Typografie oder horizontalen Overflow.
- Bestehende Kontaktwege und der Abschluss-CTA bleiben erreichbar und funktionsfähig.
- Tastaturbedienung, semantische Struktur, Alternativtexte und Fokuszustände sind geprüft.
- Es gibt keine Browser-Console-, Page-, Hydration- oder sichtbaren Next.js-Fehler.
- `typography-line-break-check` wurde ausgeführt und das Ergebnis dokumentiert.
- `next-router-check` wurde ausgeführt und das Ergebnis dokumentiert.
- `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` wurden erfolgreich ausgeführt oder Abweichungen klar dokumentiert.
- EN/RU-, SEO-, Metadata-, Structured-Data-, Routing-, Redirect-, Kontakt-/Backend-, Legal-, Upload-, Supabase-, KI-, Admin- und Portal-Scope wurde nicht vorweggenommen.
- Aufgabe 048 wurde vor Abschluss und Freigabe von Aufgabe 047 nicht gestartet.
- Roadmap und Changelog wurden geprüft und bei tatsächlichem Änderungsbedarf aktualisiert oder die Nichtänderung wurde begründet.
- Aufgabe 047 wurde nicht automatisch nach `workflow/done/` verschoben; Review und ausdrückliche Nutzerfreigabe wurden abgewartet.

## Inventarisierung vom 29. Juli 2026

### Workflow- und Git-Stand

- Aufgabe 047 wurde ausdrücklich freigegeben.
- Aktiver Branch: `task-047-strengthen-about-trust-qualification-certificate`.
- Aufgabe 047 ist die einzige Task-Datei in `workflow/active/` und hat den Status `in Arbeit`.
- Aufgabe 048 bleibt nachgelagert und wurde nicht gestartet.
- Es wurden noch keine Website-, Layout-, Text- oder Asset-Änderungen durchgeführt.

### Route und Komponenten

- Die deutsche Route liegt in `app/(de)/ueber-uns/page.tsx` und rendert `AboutPageContent` mit festem Locale `de`.
- Die Route selbst ist statisch: Die Page-Komponente ist nicht `async`, lädt keine Daten und verwendet kein `notFound()`.
- Metadata werden in der Route über `buildPageMetadata` aus `getTranslations(de).aboutPage` erzeugt. Diese Metadata bleiben gemäß Scope unverändert.
- Der sichtbare deutsche Seiteninhalt liegt in `components/AboutPageContent.tsx` im getrennten Zweig `GermanAboutPageContent`.
- Englisch und Russisch verwenden den anderen, gemeinsamen lokalisierten Zweig derselben Komponente. Dieser Bereich darf in Aufgabe 047 nicht geändert werden.
- Wiederverwendet werden `SiteHeader`, `SiteFooter`, `ReadableText`, `Card`, `CtaSection` und `next/image`.
- Der Abschluss-CTA übernimmt Titel und Beschreibung aus `getTranslations(de).home.cta`; Telefon, WhatsApp und Kontaktlink kommen aus der gemeinsamen `CtaSection`.

### Aktuelle sichtbare deutsche Seitenstruktur

1. Hero mit Eyebrow `KFZ-Gutachten Berlin`, H1 `Über UNEXT GmbH` und kurzer Einordnung.
2. Bereich `Persönlicher Kontakt` / `Wer hinter UNEXT steht` mit Bürobild und zwei Textabsätzen.
3. Bereich `Arbeitsweise` / `Sachliche Begutachtung` mit zwei Textabsätzen.
4. Gemeinsamer Bereich `Vertrauen und Weiterbildung` / `Qualifikation & Weiterbildung` mit zwei Karten.
5. Bestehender Abschluss-CTA mit Telefon, WhatsApp und Kontaktweg.

Die vorhandene Grundstruktur ist für eine gezielte Weiterentwicklung ausreichend. Ein vollständiger Seitenumbau ist nicht erforderlich und nicht geplant.

### Aktuelle sichtbare Textbefunde

- Die Qualifikationskarte verwendet derzeit `geprüften und anerkannten Sachverständigen für KFZ-Schäden und Wertermittlung`. Das ist inhaltlich nah an der freigegebenen Aussage, aber nicht die exakt spezifizierte Formulierung `Geprüfter und anerkannter Sachverständiger für Schäden an Kraftfahrzeugen und Wertermittlung.`
- Die Überschrift `Qualifikation & Weiterbildung` verbindet zwei Bereiche, die laut Specs sichtbar getrennt werden müssen.
- Die Kartenüberschrift `Qualifikation, die im Schadenfall zählt` wirkt werblicher und weniger präzise als der freigegebene Bereichstitel `Qualifikation & Anerkennung`.
- Die Kartenüberschrift `Fortbildung für aktuelle Fachkenntnis` steht im Singular und kann konkreter wirken, als der vorhandene Nachweisstand erlaubt.
- Im sichtbaren deutschen Text wird `nachvollziehbar` mehrfach verwendet. Der Textplan reduziert diese Wiederholung, ohne die sachliche Tonalität zu verändern.
- Sichtbare deutsche Texte verwenden echte Umlaute. ASCII-Umschreibungen kommen nur in nicht sichtbaren Code-Kommentaren vor.
- Die CTA-Texte sind kurz und müssen in Aufgabe 047 inhaltlich nicht geändert werden.

### Assets und Nachweise

- Verwendetes deutsches Seitenbild: `public/images/about-office.webp`, 960 × 1200 Pixel, 68.346 Byte.
- Zusätzlich vorhanden, aber nur im lokalisierten EN/RU-Zweig genutzt: `about-hero-team-cropped.webp` und `about-hero-team-cropped.jpg`, jeweils 5022 × 1795 Pixel.
- Unter `public/` existiert kein Zertifikats-, Urkunden-, DESAG-, Qualifikations- oder Fortbildungs-Asset.
- Das vorhandene Bürobild kann weiterverwendet werden. Seine konkrete Personenzuordnung ist nicht belegt und darf nicht erfunden werden.
- Eine visuelle Browser- und Viewport-Prüfung wurde in dieser reinen Planungsphase nicht durchgeführt. Bildzuschnitt, tatsächliche Zeilenumbrüche und Layoutwirkung bleiben Teil der späteren Umsetzungskontrolle.

### Ergebnis `next-router-check`

- 28 UI-Routen wurden geprüft, davon gelten 13 nach der Skill-Regel als datenladend.
- Die deutsche Route `/ueber-uns` ist nicht datenladend. Im übergeordneten Scope `app/(de)` sind `loading.tsx`, `error.tsx` und `not-found.tsx` vorhanden; für Aufgabe 047 fehlt keine Pflichtdatei.
- Die lokalisierte Route `/[locale]/ueber-uns` ist asynchron, verwendet `notFound()` und besitzt im lokalisierten Scope `loading.tsx` und `error.tsx`, aber keine `not-found.tsx`.
- Insgesamt betrifft derselbe fehlende `not-found.tsx`-Scope 13 lokalisierte Routen. Das ist kein Blocker für die statische deutsche Route und liegt außerhalb des Scopes von Aufgabe 047. Der Befund wird Aufgabe 033 beziehungsweise einem ausdrücklich freigegebenen Routing-/Qualitätstask zugeordnet und hier nicht behoben.

### Ergebnis der vorbereitenden Typografieprüfung

- Der lange freigegebene Qualifikationssatz ist auf Mobile ein erwartbarer Umbruchschwerpunkt. Er soll als normaler Text mit kontrollierter Textbreite erscheinen, nicht in einem Button, Badge oder künstlich schmalen Element.
- Harte `<br>`-Umbrüche werden nicht vorab festgelegt. Die tatsächlichen Umbrüche müssen später bei 390 px, 768 px und 1440 px geprüft werden.
- `Qualifikation & Anerkennung` und `Fortbildungen & Weiterbildung` benötigen getrennte Überschriften und genügend vertikalen Abstand.
- Die vorhandene H1 `Über UNEXT GmbH`, die Eyebrows und die CTA-Beschriftungen sind aus dem Quelltext heraus unkritisch.
- Nicht geprüft wurden die tatsächliche Browserdarstellung, Bildwirkung und konkreten Zeilenumbrüche, da in dieser Phase bewusst kein Dev-Server und keine Website-Umsetzung gestartet wurde.

### Festgestellte Punkte außerhalb von Aufgabe 047

- Die deutschen About-Metadata beziehen ihre Description weiterhin aus alten Übersetzungsdaten mit `Automotive-Partner`-Ausrichtung. Aufgabe 047 darf Metadata nicht ändern; der Punkt bleibt für Aufgabe 029 beziehungsweise den späteren kontrollierten Legacy-Cleanup dokumentiert.
- Die EN/RU-Über-uns-Inhalte enthalten weiterhin alte Automotive-Service-Inhalte. Sie bleiben gemäß Scope unverändert und gehören zur späteren i18n-/Cleanup-Prüfung.
- Es wurde keine neue Folgeaufgabe angelegt.

## Abschließend freigegebene Entscheidungen vom 29. Juli 2026

- Die aktive DESAG-Mitgliedschaft von Selimchan Kasumov wurde vom Nutzer bestätigt und zusätzlich über das öffentliche DESAG-Profil verifiziert.
- Die namentliche Zuordnung von Name und Qualifikation zu Selimchan Kasumov ist für `unext.de` freigegeben.
- Das bereitgestellte Personenfoto darf auf `unext.de` veröffentlicht werden; die erforderlichen Bildrechte wurden bestätigt.
- Das öffentliche DESAG-Profil `https://www.desag.de/zertifikat/selimchankasumov/` darf als normaler externer Textlink verknüpft werden.
- Es werden keine Urkunde, keine Teilnahmebestätigung, kein DESAG-Logo, kein persönliches Siegel, kein Badge und kein Zertifikatsbild veröffentlicht.
- Es wird kein DESAG-Embed-Code verwendet und kein externes Zertifikatsbild automatisch geladen.
- Die Qualifikation wird ausschließlich textlich dargestellt und über den bewusst anklickbaren externen Profil-Link verifiziert.
- Die ausgewählten Fachwebinare werden ausschließlich textlich und als nachgewiesene Fachwebinare genannt.
- Das neue Personenfoto ersetzt im deutschen Bereich `Wer hinter UNEXT steht` das bisherige Bürobild.
- Das bisherige Asset `about-office.webp` wird nicht gelöscht, bevor alle Referenzen geprüft und eine gesonderte Löschfreigabe erteilt wurde.
- Es werden keine öffentliche Bestellung, Vereidigung, staatliche Prüfung oder amtliche Anerkennung behauptet oder suggeriert.

## Freigegebener Seitenplan

Die bestehende Seitenstruktur bleibt erhalten und wird nur im Trust-Bereich gezielt geschärft:

1. **Hero**
   - Eyebrow `KFZ-Gutachten Berlin` beibehalten.
   - H1 `Über UNEXT GmbH` beibehalten.
   - Einleitung kürzen und Wiederholungen reduzieren.
2. **Persönlicher Kontakt**
   - Zweispaltigen Aufbau beibehalten und das freigegebene Personenfoto von Selimchan Kasumov verwenden.
   - `Wer hinter UNEXT steht` beibehalten.
   - Texte auf Spezialisierung, Erreichbarkeit und klare Abstimmung konzentrieren.
3. **Arbeitsweise**
   - `Sachliche Begutachtung` beibehalten.
   - Strukturierte Schadenaufnahme, digitale Anfragevorbereitung und finale fachliche Einordnung durch den Gutachter klar trennen.
4. **Fachliche Grundlage**
   - Bisherigen gemeinsamen Block `Qualifikation & Weiterbildung` ersetzen.
   - Zwei sichtbar getrennte, gleichwertige Bereiche verwenden:
     - `Qualifikation & Anerkennung`
     - `Fortbildungen & Weiterbildung`
   - Die Qualifikation rein textlich darstellen und mit einem dezenten externen Verifikationslink zum öffentlichen DESAG-Profil ergänzen.
   - Keine Logos, Siegel, Badges, Zertifikatsbilder, externen Bilder oder Zertifikatsplatzhalter verwenden.
5. **Abschluss-CTA**
   - Bestehende gemeinsame `CtaSection` unverändert wiederverwenden.
   - Telefon, WhatsApp und Kontaktweg unverändert lassen.

Es werden keine neue Route, keine neue allgemeine Komponente und keine zusätzliche Seitenebene benötigt.

## Freigegebener Textplan

### Hero

Eyebrow:

`KFZ-Gutachten Berlin`

H1:

`Über UNEXT GmbH`

Einleitung:

> UNEXT steht für KFZ-Gutachten in Berlin – mit persönlichem Kontakt, strukturierter Schadenaufnahme und verständlicher Einordnung. Von der ersten Anfrage bis zur weiteren Abstimmung erhalten Sie klare Informationen zu Ihrem Fahrzeug und dem nächsten sinnvollen Schritt.

### Persönlicher Kontakt

Eyebrow:

`Persönlicher Kontakt`

H2:

`Wer hinter UNEXT steht`

Absatz 1:

> UNEXT ist auf die Begutachtung von Fahrzeugschäden und die Wertermittlung spezialisiert. Im Mittelpunkt stehen der persönliche Kontakt, eine strukturierte Aufnahme der relevanten Informationen und eine verständliche Abstimmung.

Absatz 2:

> Sie erreichen UNEXT telefonisch, per WhatsApp oder über eine Anfrage. So können Fahrzeugdaten, Schadeninformationen und das weitere Vorgehen frühzeitig geklärt werden.

### Arbeitsweise

Eyebrow:

`Arbeitsweise`

H2:

`Sachliche Begutachtung`

Absatz 1:

> Fahrzeugschäden werden strukturiert dokumentiert und fachlich bewertet. Je nach Fall werden sichtbare Schäden, relevante Fahrzeugdaten und wertbezogene Merkmale berücksichtigt.

Absatz 2:

> Digitale Angaben können die Anfrage vorbereiten. Die fachliche Einordnung und die finale Bewertung erfolgen durch den Gutachter.

### Fachliche Grundlage

Eyebrow:

`Vertrauen und fachliche Grundlage`

H2:

`Qualifikation und Weiterbildung`

Bereich 1 – H3:

`Qualifikation & Anerkennung`

Text:

> Selimchan Kasumov ist durch die DESAG als Sachverständiger für Schäden an Kraftfahrzeugen und Wertermittlung geprüft und anerkannt.

Darunter als normaler externer Textlink:

> Qualifikation bei DESAG ansehen

Linkziel: `https://www.desag.de/zertifikat/selimchankasumov/`

Der Link öffnet sich in einem neuen Tab, verwendet `rel=noopener noreferrer`, besitzt einen sichtbaren Tastaturfokus und löst erst nach einem bewussten Klick eine Anfrage an DESAG aus.

Bereich 2 – H3:

`Fortbildungen & Weiterbildung`

Text:

> Zu den nachgewiesenen Fachwebinaren gehören Wertdefinitionen sowie Kürzungen und fachliche Stellungnahmen.

### Abschluss-CTA

Der bestehende freigegebene CTA bleibt unverändert:

- Titel: `Sie brauchen Hilfe?`
- Beschreibung: `Rufen Sie an, schreiben Sie per WhatsApp oder senden Sie eine Anfrage. UNEXT meldet sich zeitnah zur weiteren Abstimmung.`
- Aktionen: Telefon, WhatsApp und `Kontakt aufnehmen`

### Bild und Alternativtext

- `public/images/about-selimchan-kasumov.webp` ersetzt das bisherige Bürobild ausschließlich im deutschen Bereich `Wer hinter UNEXT steht`.
- Alternativtext: `Selimchan Kasumov im Büro der UNEXT GmbH in Berlin`.
- `about-office.webp` bleibt für bestehende EN/RU-Referenzen erhalten und wird in Aufgabe 047 nicht gelöscht.
- Es wird kein Zertifikatsbild und kein zusätzlicher Bildplatzhalter eingeplant.

## Verbindliche Nachweis- und Darstellungsentscheidung

Die Umsetzung bleibt rein textlich. Weder die beiden Grundnachweise noch die fünf Teilnahmebestätigungen werden als Datei oder Abbildung veröffentlicht. Die öffentliche Verifikation erfolgt ausschließlich über einen normalen externen Link zum DESAG-Profil. Die Webinarteilnahmen werden nicht als Zertifizierung dargestellt.

Nicht sichtbar verwendet werden:

- autoiXpert Schaden-Portal
- VDI-MT 5900 oder ISO/IEC 17024
- Zweiradgutachten
- BSG-Mitgliedschaft
- Mitglieds- oder Registernummern
- DESAG-Logo, persönliches Siegel, Badge, Zertifikatsbild oder Embed-Code

## Freigegebener Umsetzungsplan

### Voraussichtlich betroffene Dateien

- `components/AboutPageContent.tsx`
  - ausschließlich `germanAbout` und `GermanAboutPageContent`
  - EN/RU-Zweig unverändert lassen
- `public/images/about-selimchan-kasumov.webp`
  - ausschließlich die freigegebene WebP-Datei ohne weitere Bearbeitung übernehmen
- `workflow/active/047-strengthen-about-trust-qualification-certificate.md`
  - Review-, Check- und Freigabeergebnisse dokumentieren
- `CHANGELOG.md`
  - tatsächliche Website-Änderungen nach Umsetzung dokumentieren
- `ROADMAP.md`
  - nur ändern, wenn sich Reihenfolge oder Projektstand tatsächlich ändern

### Technisches Vorgehen

1. Nur die freigegebenen deutschen Texte im bestehenden `germanAbout`-Objekt ersetzen.
2. Den vorhandenen Trust-Bereich innerhalb von `GermanAboutPageContent` in zwei semantisch getrennte Bereiche beziehungsweise Karten gliedern.
3. Den externen DESAG-Link als normalen Link mit neuem Tab, den Werten `noopener` und `noreferrer` im `rel`-Attribut sowie sichtbarem Fokuszustand umsetzen.
4. Das freigegebene Personenfoto ausschließlich in den deutschen Personenbereich übernehmen.
5. Bestehende `Card`, `ReadableText`, Abstände, Farben und responsive Layoutmuster wiederverwenden.
6. Keine neue allgemeine Komponente und keine neue Dependency anlegen.
7. Den langen Qualifikationssatz mit ausreichender Textbreite und ohne Badge-/Button-Darstellung ausgeben.
8. Keine harten Zeilenumbrüche vorab erzwingen; Umbrüche nach Browserprüfung nur gezielt und responsive korrigieren.
9. Deutschen Code-Kommentar am Dateianfang bei Bedarf an die tatsächlich sichtbare Struktur anpassen.
10. Keine Änderung an `app/(de)/ueber-uns/page.tsx`, `lib/translations.ts`, Metadata oder EN/RU-Inhalten durchführen.

### Prüfplan nach Umsetzung

1. Statische Prüfung aller sichtbaren deutschen Texte gegen die freigegebenen Specs.
2. Mobile zuerst bei 390 px prüfen, anschließend 768 px und 1440 px.
3. `typography-line-break-check` mit Fokus auf Hero, H2/H3, Qualifikationssatz, Kartenbreiten, Umlaute und CTA ausführen.
4. Bildzuschnitt, Alternativtext, Überschriftenhierarchie, Tastaturbedienung, Fokuszustände und horizontalen Overflow prüfen.
5. Browser-Console-, Page- und Hydration-Fehler prüfen.
6. `next-router-check` erneut ausführen; der lokalisierte `not-found.tsx`-Befund bleibt außerhalb von Aufgabe 047.
7. `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` ausführen.
8. Diff gegen Scope und Akzeptanzkriterien prüfen.
9. Ergebnis und offene Punkte zusammenfassen und vor Abschluss beziehungsweise Verschieben nach `workflow/done/` ausdrücklich die Nutzerfreigabe abwarten.

## Umsetzungsfreigabe

Seitenplan, sichtbare Texte, Personenfoto, Namensnennung, externe Profilverlinkung und die rein textliche Nachweisdarstellung wurden abschließend freigegeben. Die Website-Umsetzung darf innerhalb der beschriebenen Grenzen erfolgen.

## Umsetzung und Prüfung vom 29. Juli 2026

### Umgesetzte Bereiche

- Die bestehende deutsche Seitenstruktur aus Hero, persönlichem Kontakt, Arbeitsweise, fachlicher Grundlage und Abschluss-CTA blieb erhalten.
- Die freigegebenen deutschen Texte wurden ausschließlich im deutschen Zweig von `components/AboutPageContent.tsx` umgesetzt.
- `Qualifikation & Anerkennung` und `Fortbildungen & Weiterbildung` sind als getrennte Karten erkennbar.
- Die Qualifikation wird namentlich und rein textlich dargestellt; der externe DESAG-Link öffnet in einem neuen Tab und verwendet `noopener` sowie `noreferrer`.
- Das freigegebene WebP wurde unverändert als `public/images/about-selimchan-kasumov.webp` übernommen und ausschließlich im deutschen Personenbereich verwendet.
- EN/RU-Inhalte, Übersetzungen, Routen, Metadata, SEO, Structured Data und Funktionslogik blieben unverändert.
- Es wurden keine Urkunden, Teilnahmebestätigungen, Logos, Siegel, Badges, Zertifikatsbilder, externen Bilder oder Embed-Codes eingebunden.

### Responsive und visuelle Prüfung

- 390 px: Bildausschnitt und Gesicht vollständig sichtbar; ruhige Textumbrüche; getrennte Trust-Karten; kein horizontaler Overflow.
- 768 px: Bild und Texte klar skaliert; kein horizontaler Overflow.
- 1440 px: ausgewogene Zweispaltenbereiche; beide Trust-Karten klar getrennt; kein horizontaler Overflow.
- Bildabmessungen: 752 × 940 Pixel; Dateigröße: 42.780 Byte; Seitenverhältnis: 4:5.
- Alternativtext, Überschriftenhierarchie, Telefon, WhatsApp und Kontakt-CTA wurden geprüft.
- Der DESAG-Link besitzt einen sichtbaren Tastaturfokus und wirkt als normaler Textlink, nicht als Badge oder Siegel.
- Beim bloßen Seitenaufruf wurde keine Anfrage an `desag.de` ausgelöst. Der bewusste Klick öffnete das richtige Profil von Selimchan Kasumov.

### Reviewer-Ergebnisse

- `typography-line-break-check`: keine problematischen Einzelwörter, gequetschten Überschriften oder unruhigen Umbrüche bei 390 px, 768 px und 1440 px; echte deutsche Umlaute sind sichtbar korrekt.
- `next-router-check`: 28 UI-Routen geprüft, davon 13 datenladend. Für die statische deutsche Route `/ueber-uns` fehlt keine Pflichtdatei. Der bereits bekannte fehlende `not-found.tsx`-Scope der 13 lokalisierten Routen bleibt außerhalb von Aufgabe 047.
- Accessibility: H1/H2/H3-Reihenfolge, Bildalternativtext, Linktext, neues Tab, `rel`-Werte und sichtbarer Fokuszustand bestanden.

### Prüfnachweise und Abgrenzungen

- Dev- und Produktionsseite antworten mit Status 200; keine Page-, Hydration- oder sichtbaren Next.js-Fehler.
- Der Produktionscheck zeigt ausschließlich den bereits bestehenden, aufgabenfremden 404 für `/favicon.ico`. Eine Behebung würde die freigegebenen Dateigrenzen von Aufgabe 047 überschreiten und wurde deshalb nicht vorgenommen.
- `about-office.webp` bleibt im EN/RU-Zweig von `AboutPageContent.tsx` verwendet und wurde nicht gelöscht.
- `ROADMAP.md` wurde nicht geändert, weil Reihenfolge, Prioritäten und Projektplanung unverändert bleiben.
- Review-Screenshots liegen ausschließlich temporär unter `C:\tmp\unext-task-047-review`.

## Abschluss

- Die Umsetzung wurde gegen die Akzeptanzkriterien geprüft und vom Nutzer visuell freigegeben.
- Responsive Darstellung, Typografie, Accessibility, externer DESAG-Link und die technischen Checks wurden erfolgreich geprüft.
- Aufgabe 047 wurde am 29. Juli 2026 formal abgeschlossen; der aufgabenfremde `/favicon.ico`-Befund bleibt außerhalb des Scopes.
- Aufgabe 048 bleibt der nächste nachgelagerte Workflow-Schritt und wurde nicht vorzeitig gestartet.

## Status

Status: abgeschlossen
