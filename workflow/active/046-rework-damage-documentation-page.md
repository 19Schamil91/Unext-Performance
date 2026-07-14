# Aufgabe 046 - Schadendokumentation-Unterseite hochwertig ausbauen

## Ziel

Eine hochwertige deutsche Unterseite für `Schadendokumentation` vorbereiten und später unter `/leistungen/schadendokumentation` umsetzen.

Die Seite soll kompakt und verständlich erklären:

- wann eine Schadendokumentation sinnvoll ist
- wie sie sich von einem Unfallgutachten abgrenzt
- welchen Nutzen Fotos, Unterlagen und eine geordnete Dokumentation haben
- welche Angaben für die erste Abstimmung hilfreich sind
- wie Kontakt aufgenommen werden kann

## Kontext

Aufgabe 043 hat die deutsche Unfallgutachten-Unterseite überarbeitet. Aufgabe 044 hat die deutsche Navigation auf direkte Einstiege in `Unfallgutachten`, `Fahrzeugbewertung` und `Schadendokumentation` ausgerichtet. Aufgabe 045 hat anschließend die Fahrzeugbewertungs-Unterseite umgesetzt.

Für Schadendokumentation bestehen derzeit nur Übergangslinks zur Startseitenkarte beziehungsweise zum Kontakt. Aufgabe 046 soll später eine eigenständige deutsche Detailseite bereitstellen und danach diese Übergänge auf die neue Route umstellen.

Aufgabe 041 hatte eine eigenständige Detailseite nur bei ausreichend eigenständigem Inhalt empfohlen. Aufgabe 044, die aktuelle Roadmap und der aktuelle Auftrag ordnen die Route nun ausdrücklich Aufgabe 046 zu. Die Seite muss deshalb eine klare Abgrenzung und einen eigenen Nutzwert bieten, ohne das Unfallgutachten als Hauptleistung zu duplizieren.

## Aktueller Stand

- Branch: `task-046-rework-damage-documentation-page`
- Ausgangscommit: `2a27723 Merge pull request #50 from 19Schamil91/task-045-rework-vehicle-valuation-page`
- `main` und `origin/main` wurden vor Branch-Erstellung als synchron verifiziert.
- Aufgabe 045 liegt in `workflow/done/`.
- `workflow/active/` enthielt vor dem Start nur `.gitkeep`.
- `/leistungen/schadendokumentation` existiert noch nicht.
- Eine eigene Schadendokumentations-Detailkomponente existiert nicht.
- Aufgaben 047, 048 und 049 wurden nicht gestartet.
- In diesem Startschritt werden keine Website-Code-, Text-, Layout-, Routing- oder Asset-Dateien geändert.

## Geprüfte Grundlage

Geprüft wurden die Spec-Hierarchie und die relevanten Vorgänger- und Folgeaufgaben:

- `specs/00-global-spec/global-spec.md`
- `specs/01-functional-map/functional-map.md`
- `specs/02-feature-specs/kfz-gutachten.md`
- `specs/02-feature-specs/digitale-schadenaufnahme.md`
- `specs/02-feature-specs/contact-flow.md`
- `specs/03-technical-specs/frontend.md`
- `specs/03-technical-specs/routing.md`
- `specs/04-visual-rules/visual-rules.md`
- `specs/05-user-stories/user-stories.md`
- `specs/06-work-plans/v1-launch-masterplan.md`
- `workflow/done/041-define-v1-page-route-scope-before-i18n.md`
- `workflow/done/043-rework-accident-appraisal-page.md`
- `workflow/done/044-rework-appraisal-navigation.md`
- `workflow/done/045-rework-vehicle-valuation-page.md`
- `workflow/todo/048-review-german-core-page-consistency.md`
- `workflow/todo/049-audit-v1-user-stories-user-journeys.md`
- `ROADMAP.md`

Die Specs bestätigen Schadendokumentation beziehungsweise Beweissicherung als zulässigen Anwendungsfall unter `KFZ-Gutachten`. Die digitale Schadenaufnahme bleibt in V1 eine Vorbereitung der Kontaktaufnahme. Ein Website-Upload, eine automatische Schadenanalyse oder eine automatische Bewertung sind nicht umgesetzt und dürfen nicht als live dargestellt werden.

## Fachliche Leitentscheidung

- `Schadendokumentation` ist der sichtbare, kundenfreundliche Hauptbegriff.
- `Beweissicherung` darf ergänzend erklärt werden, aber nicht überall als gleichwertiger Doppelbegriff stehen.
- `Unfallgutachten` bleibt die Hauptleistung; Schadendokumentation wird als klar abgegrenzter Anwendungsfall dargestellt.
- Die Seite darf kein zweites Unfallgutachten oder ein künstlich getrenntes `Schadengutachten` versprechen.
- Fotos, Unterlagen, sichtbarer Fahrzeugzustand und nachvollziehbare Dokumentation dürfen als Nutzen erklärt werden.
- Die erste Anfrage darf über Telefon, WhatsApp oder das vorhandene Formular vorbereitet werden.
- Eine mögliche Bildabstimmung über freigegebene Kontaktwege ist nicht mit einem Website-Upload gleichzusetzen.
- Die fachliche Prüfung und finale Bewertung bleiben beim Gutachter.
- Keine automatische Schadenhöhe, KI-Auswertung, Rechtsberatung oder garantierte Verwertbarkeit versprechen.
- Keine 24/7-, Sofort-, Festpreis- oder festen Bearbeitungszeit-Versprechen ergänzen.
- Die Seite bleibt kompakt, mobile-first und kundenorientiert.

## Geplante Zielroute

```text
/leistungen/schadendokumentation
```

Geplant ist ausschließlich die deutsche Route. EN/RU-Routen und Übersetzungen bleiben Aufgabe 032 beziehungsweise einer später freigegebenen i18n-Umsetzung vorbehalten.

## Inventur vorhandener Routen, Dateien und Inhalte

### Route und wiederverwendbare Komponenten

- `app/(de)/leistungen/schadendokumentation/page.tsx` existiert nicht.
- Eine lokalisierte EN/RU-Route existiert ebenfalls nicht und ist nicht Teil von 046.
- `app/(de)/leistungen/fahrzeugbewertung/page.tsx` und `components/VehicleValuationServiceDetailContent.tsx` zeigen ein aktuelles Muster für eine statische deutsche Leistungsdetailseite.
- `components/AccidentServiceDetailContent.tsx` zeigt wiederverwendbare Muster für Header, Footer, CTAs, Detailabschnitte, FAQ und Anfrageformular; Fachtexte und Informationsarchitektur dürfen nicht kopiert werden.
- `components/service-page-layout.tsx` ist grundsätzlich als Leistungsseiten-Layout wiederverwendbar.
- `components/service-inquiry-form.tsx`, `components/site-header.tsx`, `components/site-footer.tsx` und vorhandene UI-Komponenten können später geprüft und wiederverwendet werden.

### Startseitenkarte und Navigation

- `components/sections/services-section.tsx` enthält die deutsche Schadendokumentations-Karte.
- Die Karte nutzt `/kontakt` und den Übergangs-CTA `Dokumentation anfragen`.
- Nach Fertigstellung soll sie auf `/leistungen/schadendokumentation` und `Zur Schadendokumentation` umgestellt werden.
- `lib/translations/header-footer.ts` enthält den Dropdown-Eintrag `Schadendokumentation` mit `/#service-schadendokumentation`.
- Nach Fertigstellung soll der deutsche Eintrag auf `/leistungen/schadendokumentation` führen.
- `lib/service-anchors.ts` enthält `service-schadendokumentation`. Der Anker wird nicht nebenbei gelöscht; seine weitere Verwendung gehört in die spätere Prüfung.
- `components/HeaderServicesMenu.tsx` und `components/HeaderMobileMenu.tsx` können voraussichtlich unverändert bleiben, wenn nur das deutsche Linkziel angepasst wird.
- EN/RU-Navigation und EN/RU-Startseitenkarten bleiben unverändert.

### Vorhandene Texte und Nutzerweg

Als Grundlage prüfbar:

- `lib/translations/home-overrides.ts`: Fotos und Unterlagen strukturiert vorbereiten, Schaden nachvollziehbar halten und Prüfung durch den Gutachter.
- `components/sections/services-section.tsx`: deutsche Kartenbeschreibung und CTA-Konfiguration.
- `lib/translations/service-pages-part1.ts`: vorhandene Formulierungen zu Schadenprüfung, Fotos und Kategorisierung im Unfallgutachten-Kontext.
- `lib/translations/legal.ts`: vorsichtige Beschreibung von Beweissicherung und Schadenaufnahme im abgestimmten Einzelfall.
- `specs/05-user-stories/user-stories.md`: mobile Kontaktwege und Bildabstimmung über freigegebene Kontaktwege ohne Website-Upload.
- `workflow/todo/049-audit-v1-user-stories-user-journeys.md`: direkter Einstieg, Abgrenzung zum Unfallgutachten, Nutzen von Fotos und Unterlagen und anschließende Kontaktaufnahme.

Zu schärfen:

- Der vorhandene Kurztext erklärt Anlass, Abgrenzung, Ablauf und hilfreiche Angaben noch nicht ausreichend.
- `Schadendokumentation`, `Beweissicherung`, `Schadenaufnahme` und `Schadengutachten` dürfen nicht unscharf als austauschbare Hauptbegriffe verwendet werden.
- Es muss klar bleiben, dass kein Upload, Portal oder automatischer Analyseprozess live ist.
- Hilfreiche Unterlagen dürfen nicht als starre Pflichtliste für die erste Kontaktaufnahme wirken.

### Formular- und Kontaktinventur

- `components/service-inquiry-form.tsx` unterstützt eine seitenbezogene Konfiguration vorhandener Felder und Texte.
- Name, Telefon und E-Mail sind in der bestehenden Formularlogik Pflichtfelder; Fahrzeug, Datum, Anlass und Nachricht sind abhängig von der Konfiguration optional.
- `lib/contactForm.ts` und `lib/contactActions.ts` enthalten die bestehende Validierungs- und Versandlogik.
- Aufgabe 046 soll diese Logik nicht neu erfinden und weder Upload-Felder noch neue Backend-Funktionen ergänzen.
- Die endgültige Feldkonfiguration und die sichtbaren deutschen Formulartexte sind im nächsten Planungs- und Freigabeschritt festzulegen.

### Bildinventur

Geprüft wurde `public/images/services/beweissicherung-dokumentation.webp`:

- WebP, 1448 x 1086 Pixel, rund 96 KB
- dunkles Fahrzeug mit sichtbarer Beschädigung, Tablet mit Schadenfotos, Unterlagen, Stift und Kamera
- aktueller Alt-Text auf der Startseitenkarte: `Dokumentation eines Fahrzeugschadens mit Fotos`
- bereits in der deutschen Startseitenkarte verwendet
- bei der visuellen Prüfung waren keine erkennbaren personenbezogenen Kundendaten sichtbar

Empfehlung: fachlich passend und bereits optimiert. Das Bild kann nach Prüfung der responsiven Ausschnitte für die Detailseite wiederverwendet werden. Ein neues Asset ist nicht erforderlich. Der Alt-Text ist beim späteren Einsatz kontextbezogen zu prüfen.

Zusätzlich vorhanden ist `public/images/services/schadengutachten-detail.png`:

- PNG, 1448 x 1086 Pixel, rund 1,91 MB
- aktuell nicht als Verwendung im Projekt gefunden
- wegen Dateigröße und unklarem Mehrwert nicht für die neue Seite vorgesehen
- keine Löschung oder Asset-Bereinigung in Aufgabe 046; dies bleibt bei Bedarf Aufgabe 026

### App-Router-Prüfung

Der lokale Skill `next-router-check` wurde lesend ausgeführt:

- 27 bestehende UI-Routen geprüft
- 13 datenladende lokalisierte Routen geprüft
- die benötigten `loading.tsx`- und `error.tsx`-Grenzen sind über den jeweiligen Route-Group-Scope vorhanden
- 13 lokalisierte Routen verwenden `notFound()`, haben aber im lokalisierten Scope kein eigenes `not-found.tsx`
- der lokalisierte Befund ist ein bestehender EN/RU-/i18n-Punkt außerhalb von 046 und wird nicht nebenbei behoben
- die geplante deutsche Route ist statisch und durch die vorhandenen Sonderdateien unter `app/(de)` abgedeckt

### Indirekte Metadata-/Structured-Data-Berührung

- Eine neue `page.tsx` könnte über `generateMetadata()` oder `buildPageMetadata()` Metadaten erzeugen, ohne zentrale SEO-Dateien zu ändern.
- `components/service-page-layout.tsx` rendert bei Wiederverwendung Service- und Breadcrumb-Structured-Data.
- Direkte Wiederverwendung würde daher strukturierte Daten ausgeben, obwohl 046 keine eigene SEO-/Metadata-/Structured-Data-Umsetzung übernimmt.
- Diese indirekte Seitenausgabe muss vor der Code-Umsetzung ausdrücklich bestätigt werden; direkte Änderungen an SEO-, Metadata- oder Structured-Data-Dateien bleiben Aufgabe 029.
- Der bestehende automatisch erzeugte Breadcrumb kann `/leistungen` enthalten, obwohl diese Route nicht Teil der sichtbaren deutschen V1-Navigation ist. Die abschließende SEO-Einordnung bleibt Aufgabe 029.

### Wahrscheinlich später betroffene Dateien

Neu:

- `app/(de)/leistungen/schadendokumentation/page.tsx`
- voraussichtlich eine eigene deutsche Detailkomponente unter `components/`

Anzupassen:

- `components/sections/services-section.tsx`
- `lib/translations/header-footer.ts`
- abhängig vom freigegebenen Plan direkt betroffene deutsche Content-Daten

Nur prüfen, nicht automatisch ändern:

- `components/service-page-layout.tsx`
- `components/service-inquiry-form.tsx`
- `components/site-header.tsx`
- `components/site-footer.tsx`
- `lib/service-anchors.ts`
- `lib/contactForm.ts`
- `lib/contactActions.ts`
- `lib/metadata.ts`
- `lib/structuredData.ts`
- `components/StructuredData.tsx`

### Für spätere Aufgaben belassen

- 047: Über-uns, Trust, Qualifikation und Zertifikatsdarstellung
- 048: gemeinsame Konsistenz-, Typografie- und Trust-Prüfung der deutschen Kernseiten
- 049: vollständiger V1-User-Story- und User-Journey-Audit
- 029: Metadata, Structured Data, Canonicals, Sitemap, Robots, Hreflang und SEO-Entscheidungen
- 032: EN/RU-Texte, lokalisierte Route und i18n-Launch-Scope
- 026: Legacy-Routen, tote Komponenten, ungenutzte Anker, Imports und Assets

## Scope-Grenzen

### Aufgabe 046 darf später

- `/leistungen/schadendokumentation` als statische deutsche Route erstellen
- eine hochwertige, eigenständige deutsche Schadendokumentations-Unterseite aufbauen
- direkt betroffene deutsche Texte und Komponenten erstellen oder anpassen
- vorhandene optimierte Bilder prüfen und verwenden
- das vorhandene Leistungsseiten-Layout und Anfrageformular seitenbezogen konfigurieren
- Startseitenkarte und deutschen Header-/Dropdown-Link nach Fertigstellung umstellen
- mobile, Tablet- und Desktop-Darstellung sowie Browser-Konsole prüfen

### Aufgabe 046 darf nicht

- Unfallgutachten, Fahrzeugbewertung, Über-uns oder `/leistungen` grundsätzlich umbauen
- Legacy-Routen löschen oder redirecten
- EN/RU ändern
- SEO-/Metadata-/Structured-Data-Dateien, Sitemap, Robots, Canonicals oder Hreflang ändern
- einen Website-Upload oder neue Upload-Felder einführen
- Supabase-, KI-, Admin- oder Portal-Funktionen ergänzen
- automatische Schadenhöhen, Rechtsberatung, garantierte Verwertbarkeit oder unbestätigte Leistungsversprechen ergänzen
- Aufgaben 047, 048, 049, 032, 029, 026, 033, 034 oder 035 starten
- neue Assets ohne nachgewiesenen Bedarf und ausdrückliche Freigabe einbauen

## Vorgehen

1. Aufgabe 046 auf eigenem Branch und mit Status `in Arbeit` starten.
2. Start-Commit ausschließlich für `workflow/active/` erstellen.
3. Route, Komponenten, Texte, Links, Formular, Bilder und technische Seiteneffekte inventarisieren.
4. Eine kompakte Seiten- und Textplanung mit eigenständiger Informationsarchitektur ausarbeiten.
5. Indirekte Metadata-/Structured-Data-Berührung ausdrücklich klären.
6. Plan und sichtbare deutsche Texte zur Freigabe vorlegen.
7. Erst danach Website-Code mobile-first umsetzen.
8. Bei der Umsetzung Lint, TypeScript, Produktions-Build, Browser-Konsole und responsive Darstellung prüfen.
9. Für die spätere UI-Prüfung `typography-line-break-check` und passende manuelle Mobile-/Desktop-Prüfungen verwenden.
10. Aufgabe erst nach Review und ausdrücklicher Nutzerfreigabe abschließen.

## Akzeptanzkriterien

### Start und Inventur

- 046 liegt als einzige Aufgabe in `workflow/active/`.
- 046 hat `Status: in Arbeit`.
- Der Branch lautet `task-046-rework-damage-documentation-page`.
- `/leistungen/schadendokumentation` ist als deutsche Zielroute dokumentiert.
- Bestehende Routen, Komponenten, Texte, Übergangslinks, Formularlogik und Assets wurden inventarisiert.
- Das vorhandene Bild wurde technisch und visuell geprüft.
- App-Router-Sonderdateien und indirekte Metadata-/Structured-Data-Berührungen sind dokumentiert.
- Scope-Grenzen und spätere Prüfungen sind dokumentiert.
- Im Startschritt wurden keine Website-Code-, Text-, Layout-, Routing- oder Asset-Dateien geändert.

### Spätere Umsetzung und Prüfung

- `/leistungen/schadendokumentation` ist als eigenständige deutsche Detailseite erreichbar.
- Die Seite erklärt Anlass, Nutzen und Ablauf verständlich und grenzt sich klar vom Unfallgutachten ab.
- `Schadendokumentation` ist der Hauptbegriff; `Beweissicherung` wird nur ergänzend und verständlich verwendet.
- Fotos und Unterlagen werden als hilfreiche Grundlage dargestellt, nicht als starre Voraussetzung für die erste Kontaktaufnahme.
- Telefon, WhatsApp und Anfrageformular sind klar erreichbar; die bestehende Validierungs- und Versandlogik bleibt intakt.
- Es wird kein Website-Upload, Portal, automatischer Analyseprozess oder automatische Schadenhöhe als live dargestellt.
- Deutsche Startseitenkarte und deutscher Header-/Dropdown-Link führen auf die neue Route.
- EN/RU-Texte, -Routen und -Navigation bleiben unverändert.
- Keine direkten SEO-/Metadata-/Structured-Data-, Sitemap-, Robots-, Canonical- oder Hreflang-Dateien wurden geändert.
- Das vorhandene optimierte Bild funktioniert in sinnvollen Ausschnitten auf Mobile, Tablet und Desktop.
- Die Seite funktioniert ohne horizontalen Overflow und ohne Browser-Console-Errors bei 390 px, 768 px und 1440 px.
- `npm run lint`, `npx tsc --noEmit`, `npm run build` und `git diff --check` sind erfolgreich.
- Passende Reviewer wurden verwendet oder nachvollziehbar als nicht erforderlich begründet.
- Aufgabe 046 wird erst nach Review und ausdrücklicher Freigabe abgeschlossen und nach `workflow/done/` verschoben.

## Status

Status: in Arbeit
