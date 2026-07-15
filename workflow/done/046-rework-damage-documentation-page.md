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

## Empfohlener Umsetzungsplan zur Freigabe

Dieser Plan legt eine einzige empfohlene Seiten-, Text- und Umsetzungsrichtung fest. Er ist die Grundlage für die fachliche und sprachliche Freigabe vor der Website-Umsetzung. Bis zu dieser Freigabe werden keine Website-Dateien geändert.

### Finale Informationsarchitektur

Die Seite wird in dieser Reihenfolge aufgebaut:

1. Hero mit Leistungsversprechen, Trust-Zeile und drei Kontaktwegen
2. `Wann ist eine Schadendokumentation sinnvoll?` mit vier kompakten Anwendungsfällen
3. `Was kann dokumentiert werden?` mit sechs fachlich eingegrenzten Punkten
4. `Schadendokumentation oder Unfallgutachten?` als sichtbare Abgrenzung
5. `So läuft die Schadendokumentation ab` mit vier Schritten
6. kurzer Hilfetext unmittelbar vor dem Formular
7. spezifisches Anfrageformular
8. vier kompakte FAQ
9. Abschluss-CTA

Im vorhandenen `ServicePageLayout` stehen Ablauf und Formular auf Desktop nebeneinander. Der Hilfetext sitzt direkt oberhalb des Formulars. Auf Mobile folgen Ablauf, Hilfetext und Formular untereinander. Dadurch bleibt die Seite kompakt, ohne eine künstlich lange Abschnittsfolge oder eine Kopie der Fahrzeugbewertungsseite zu erzeugen.

### Hero

**Eyebrow**

```text
SCHÄDEN GEORDNET FESTHALTEN
```

**H1**

```text
Schadendokumentation in Berlin
```

**Hero-Fließtext**

```text
Eine Schadendokumentation hält Schäden und den aktuellen Zustand Ihres Fahrzeugs geordnet fest. Dabei können betroffene Fahrzeugbereiche, Fotos, Fahrzeugdaten und vorhandene Unterlagen berücksichtigt werden. Vorab besprechen wir mit Ihnen, was genau dokumentiert werden soll.
```

**Trust-Zeile**

```text
Geprüfter und anerkannter Sachverständiger für Schäden an Kraftfahrzeugen und Wertermittlung.
```

**Kontaktaktionen in mobiler und visueller Reihenfolge**

1. Primärer Telefon-CTA: `Jetzt anrufen` -> `tel:+493023613927`
2. WhatsApp-CTA: `WhatsApp schreiben` -> `https://wa.me/4917664365185`
3. Anfrage-CTA: `Dokumentation anfragen` -> `#schadendokumentation-anfrage`

**Kompakte Hero-Vorteile**

- `Schäden geordnet dokumentieren`
- `Fahrzeugzustand festhalten`
- `Fotos und Unterlagen berücksichtigen`
- `Vorgehen vorab besprechen`

Die H1 erhält keinen künstlichen Umbruch innerhalb von `Schadendokumentation`. Auf 390 px ist zu prüfen, ob der Browser sauber vor `in Berlin` umbricht. Eyebrow, Trust-Zeile, CTAs und Vorteile werden ohne manuelle Zeilenumbrüche geplant und später bei 390, 768 und 1440 px geprüft.

### Wann ist eine Schadendokumentation sinnvoll?

**Abschnittsüberschrift**

```text
Wann ist eine Schadendokumentation sinnvoll?
```

**Einleitung**

```text
Eine geordnete Dokumentation kann sinnvoll sein, wenn ein Schaden oder ein bestimmter Fahrzeugzustand für die weitere Abstimmung festgehalten werden soll.
```

**Anwendungsfälle**

1. **Schaden zeitnah festhalten**

   ```text
   Ein erkennbarer Schaden soll zeitnah und geordnet dokumentiert werden.
   ```

2. **Übergabe oder Rückgabe vorbereiten**

   ```text
   Der aktuelle Fahrzeugzustand soll vor einer Übergabe oder Rückgabe festgehalten werden.
   ```

3. **Vorschäden oder Veränderungen erfassen**

   ```text
   Bereits vorhandene Schäden oder Veränderungen am Fahrzeug sollen geordnet erfasst werden.
   ```

4. **Fachliche Prüfung vorbereiten**

   ```text
   Fotos, Fahrzeugdaten und vorhandene Unterlagen sollen für die weitere Prüfung geordnet vorliegen.
   ```

Die vier Karten verwenden für `servicesGridClassName` den Wert `lg:grid-cols-4`. Sie versprechen weder Rechtswirkung noch Versicherungsanerkennung oder Schadenhöhe.

### Was kann dokumentiert werden?

**Abschnittsüberschrift**

```text
Was kann dokumentiert werden?
```

**Einleitung**

```text
Was aufgenommen wird, hängt von Ihrem Fahrzeug und Ihrem Anliegen ab. Dazu können gehören:
```

**Dokumentationspunkte**

1. **Schäden am Fahrzeug**

   ```text
   Art und Lage erkennbarer Schäden am Fahrzeug.
   ```

2. **Betroffene Fahrzeugbereiche**

   ```text
   Fahrzeugbereiche, an denen Schäden oder Veränderungen erkennbar sind.
   ```

3. **Fahrzeugdaten**

   ```text
   Modell und weitere für das Anliegen hilfreiche Grunddaten.
   ```

4. **Fotos aus sinnvollen Perspektiven**

   ```text
   Übersichts- und Detailaufnahmen, soweit sie für die Dokumentation hilfreich sind.
   ```

5. **Vorschäden und Besonderheiten**

   ```text
   Erkennbare Vorschäden oder Besonderheiten, soweit sie für das Anliegen relevant sind.
   ```

6. **Unterlagen und ergänzende Angaben**

   ```text
   Vorhandene Unterlagen sowie ergänzende Angaben zu dem, was dokumentiert werden soll.
   ```

Der Abschnitt wird als breite `detailSection` mit sechs kompakten Punkten umgesetzt. Die Einleitung stellt klar, dass nicht automatisch jeder Punkt Bestandteil jeder Dokumentation ist.

### Schadendokumentation oder Unfallgutachten?

**Abschnittsüberschrift**

```text
Schadendokumentation oder Unfallgutachten?
```

**Erklärung**

```text
Eine Schadendokumentation hält Schäden und den Fahrzeugzustand geordnet fest. Ein Unfallgutachten geht weiter und kann zusätzlich zum Beispiel Reparaturkosten, Wertminderung und weitere wichtige Werte eines Unfallschadens einordnen. Verdeckte oder technisch zu prüfende Schäden lassen sich durch eine reine Dokumentation nicht abschließend beurteilen. Welcher Weg für Ihr Anliegen passt, klären wir gemeinsam mit Ihnen.
```

**Drei Orientierungspunkte**

1. **Schadendokumentation**

   ```text
   Geordnete Erfassung von Schäden oder des Fahrzeugzustands im zuvor besprochenen Rahmen.
   ```

2. **Unfallgutachten**

   ```text
   Weitergehende fachliche Bewertung eines Unfallschadens, zum Beispiel mit Reparaturkosten, Wertminderung und weiteren relevanten Werten.
   ```

3. **Passenden Weg klären**

   ```text
   Sie müssen nicht selbst entscheiden, welche Leistung passend ist. Wir besprechen Ihr Anliegen vorab.
   ```

Auch dieser Bereich wird als breite `detailSection` umgesetzt. Er enthält keine juristische Beratung und keine pauschale Empfehlung für eine bestimmte Leistung.

### So läuft die Schadendokumentation ab

**Abschnittsüberschrift**

```text
So läuft die Schadendokumentation ab
```

**Einleitung**

```text
Vor Beginn besprechen wir mit Ihnen, was dokumentiert werden soll und welche Angaben dafür hilfreich sind.
```

**Ablauf**

1. **1. Anliegen schildern**

   ```text
   Sie beschreiben kurz den Schaden, den betroffenen Fahrzeugbereich oder den Fahrzeugzustand.
   ```

2. **2. Vorgehen besprechen**

   ```text
   Wir klären, welche Fahrzeugbereiche, Fotos und vorhandenen Unterlagen berücksichtigt werden sollen.
   ```

3. **3. Fahrzeug prüfen**

   ```text
   Wir betrachten die relevanten Fahrzeugbereiche und berücksichtigen die zuvor besprochenen Angaben.
   ```

4. **4. Ergebnis besprechen**

   ```text
   Wir führen die dokumentierten Punkte zusammen und besprechen das Ergebnis mit Ihnen.
   ```

Es wird keine feste Dauer oder Rückmeldefrist genannt.

### Hilfreiche Angaben vor dem Formular

Der folgende Hinweis steht unmittelbar über dem Anfrageformular:

```text
Für die erste Kontaktaufnahme genügen Fahrzeugmodell, betroffener Bereich und eine kurze Beschreibung dessen, was dokumentiert werden soll. Vorhandene Fotos oder Unterlagen stimmen wir bei Bedarf anschließend mit Ihnen ab.
```

Der Text ist bewusst keine Pflichtliste, fordert keine sensiblen Unterlagen ungefragt an und suggeriert keinen Website-Upload.

### Verbindliche Formularkonfiguration

**Formularüberschrift**

```text
Schadendokumentation anfragen
```

**Formularbeschreibung**

```text
Beschreiben Sie kurz, was beschädigt ist oder welchen Fahrzeugzustand Sie festhalten lassen möchten. Wir melden uns bei Ihnen und besprechen die nächsten Schritte.
```

**Sichtbare Felder**

- `Name *` mit vorhandenem Platzhalter `Ihr Name`
- `Telefonnummer *` mit Platzhalter `Ihre Telefonnummer`
- `E-Mail *` mit vorhandenem Platzhalter `ihre@email.de`
- `Fahrzeugmodell` mit Platzhalter `z. B. VW Golf, EZ 2021`
- `Schaden oder Fahrzeugzustand` mit Nachrichten-Platzhalter:

  ```text
  Zum Beispiel: Kratzer an der rechten Tür, sichtbarer Unfallschaden oder Zustand vor einer Fahrzeugrückgabe
  ```

**Ausgeblendete Felder**

- Datum: `date: false`
- Betreff: `subject: false`

Das vorhandene Datumsfeld ist technisch ein zukünftiges `Wunschtermin`-Feld und setzt als Mindestwert den aktuellen Tag. Es akzeptiert deshalb keine vergangenen Daten und wird nicht ungeprüft als Schaden- oder Unfallzeitpunkt verwendet. Das Betreffsfeld bietet neben dem spezifischen Nachrichtenfeld keinen zusätzlichen Nutzen.

**Pflichtfelder gemäß bestehender Logik**

- Name
- Telefonnummer
- E-Mail

Fahrzeugmodell und Nachricht bleiben gemäß `lib/contactForm.ts` optional. Diese Validierungsentscheidung wird in 046 nicht global verändert.

**Submit-Button**

```text
Dokumentation anfragen
```

**Unverändert übernommene Formularzustände**

- während des Versands: `Wird gesendet...`
- Erfolgstitel: `Anfrage gesendet!`
- Server-Erfolgsmeldung: `Ihre Anfrage wurde erfolgreich übermittelt.`
- neue Anfrage: `Neue Anfrage`
- Datenschutzhinweis und Link bleiben aus der bestehenden deutschen Formularübersetzung unverändert.

**Technische Konfiguration**

```ts
const formFields = { vehicle: true, date: false, subject: false } as const
```

Die vorhandenen `formTextOverrides` reichen für Beschreibung, Fahrzeuglabel, Fahrzeug-Platzhalter, Telefon-Platzhalter, Nachrichtenlabel, Nachrichten-Platzhalter und Submit-Text aus. Es ist keine neue optionale Prop erforderlich. Resend-, Validierungs-, E-Mail- und Backendlogik bleiben unverändert; andere Formulare erhalten keine sichtbare Änderung.

### FAQ

**Abschnittsüberschrift**

```text
Häufige Fragen zur Schadendokumentation
```

1. **Was ist eine Schadendokumentation?**

   ```text
   Eine Schadendokumentation hält Schäden oder den aktuellen Zustand Ihres Fahrzeugs geordnet fest. Was genau aufgenommen wird, besprechen wir vorher mit Ihnen.
   ```

2. **Was ist der Unterschied zu einem Unfallgutachten?**

   ```text
   Ein Unfallgutachten geht über die reine Dokumentation hinaus und kann zusätzlich zum Beispiel Reparaturkosten, Wertminderung und weitere wichtige Werte eines Unfallschadens einordnen. Welcher Weg zu Ihrem Anliegen passt, klären wir gemeinsam mit Ihnen.
   ```

3. **Welche Angaben oder Unterlagen sind hilfreich?**

   ```text
   Für die erste Anfrage genügen wenige Angaben zum Fahrzeug, zum betroffenen Bereich und zu dem, was dokumentiert werden soll. Vorhandene Fotos oder Unterlagen stimmen wir bei Bedarf anschließend über einen passenden Kontaktweg mit Ihnen ab.
   ```

4. **Was passiert nach meiner Anfrage?**

   ```text
   Wir besprechen Ihr Anliegen, klären das passende Vorgehen und teilen Ihnen mit, welche Angaben oder Unterlagen für den nächsten Schritt hilfreich sind.
   ```

Es wird kein `FAQPage`-Schema ergänzt. Die FAQ bleiben sichtbarer Seiteninhalt im bestehenden Accordion.

### Abschluss-CTA

**Überschrift**

```text
Sie möchten einen Schaden oder den Zustand Ihres Fahrzeugs dokumentieren lassen?
```

**Begleittext**

```text
Schildern Sie uns kurz, was festgehalten werden soll. Wir besprechen mit Ihnen, welches Vorgehen zu Ihrem Anliegen passt.
```

**Aktionen**

1. `Jetzt anrufen` -> `tel:+493023613927`
2. `WhatsApp schreiben` -> `https://wa.me/4917664365185`
3. `Dokumentation anfragen` -> `#schadendokumentation-anfrage`

Der Abschluss-CTA wiederholt nicht den Hero-Fließtext und enthält kein Zeit-, Preis- oder Ergebnisversprechen.

### Wiederverwendung vorhandener Komponenten

Die neue Komponente `DamageDocumentationServiceDetailContent` verwendet:

- `SiteHeader` mit `locale` = `de`
- `ServicePageLayout`
- `SiteFooter` mit `locale` = `de`
- vorhandene Action-, Benefit-, Service-, Detail-, Ablauf-, FAQ- und Formular-Props
- `balancedTypography`
- `benefitsSingleLine`
- `servicesGridClassName` = `lg:grid-cols-4`
- `backLinkHref` = `/`
- `serviceName` = `schadendokumentation`

Geplante `layoutLabels`:

```text
backToServices: Zur Startseite
servicesTitle: Wann ist eine Schadendokumentation sinnvoll?
whyTitle: So läuft die Schadendokumentation ab
whyDescription: Vor Beginn besprechen wir mit Ihnen, was dokumentiert werden soll und welche Angaben dafür hilfreich sind.
faqTitle: Häufige Fragen zur Schadendokumentation
```

`components/service-page-layout.tsx` und `components/service-inquiry-form.tsx` benötigen nach aktuellem Komponentenabgleich keine Änderung. Falls die spätere Umsetzung wider Erwarten eine gemeinsame Komponente ändern müsste, ist vorher nachzuweisen, warum die vorhandenen Props nicht ausreichen und dass Unfallgutachten, Fahrzeugbewertung sowie EN/RU unverändert bleiben.

### Bildverwendung

- Bild: `public/images/services/beweissicherung-dokumentation.webp`
- Einsatz: Hero-Bild über die vorhandene `image`-Prop des `ServicePageLayout`
- empfohlener Alt-Text:

  ```text
  Schadendokumentation an einem beschädigten Fahrzeug mit Tablet, Fotos und Unterlagen
  ```

- initiale Positionierung: vorhandenes `object-cover object-center`
- abweichende `object-position`: voraussichtlich nicht nötig; nur seitenbezogen anpassen, wenn der responsive Test einen relevanten Beschnitt zeigt
- 390 px: sichtbare Beschädigung und Tablet dürfen nicht vollständig aus dem Ausschnitt fallen
- 768 px: Fahrzeug, beschädigter Bereich und Dokumentationsmittel sollen ausgewogen erkennbar bleiben
- 1440 px: wichtige Bildelemente dürfen weder vom Textbereich noch vom Verlauf unverständlich verdeckt werden
- keine neue Bilddatei
- `public/images/services/schadengutachten-detail.png` wird nicht verwendet und in 046 nicht gelöscht

### Navigation und Startseitenkarte

Nach Umsetzung werden ausschließlich die deutschen Ziele angepasst:

- Desktop-Navigation: `Schadendokumentation` -> `/leistungen/schadendokumentation`
- Mobile-Navigation: `Schadendokumentation` -> `/leistungen/schadendokumentation`
- Startseitenkarte: Linkziel `/leistungen/schadendokumentation`
- Startseitenkarten-CTA: `Zur Schadendokumentation`
- kompakter Telefon-Button: `Anrufen` bleibt unverändert
- EN/RU bleiben unverändert
- `service-schadendokumentation` wird in 046 nicht gelöscht

Die spätere Prüfung muss bestätigen, dass Desktop- und Mobile-Navigation dieselbe deutsche Übersetzungsquelle verwenden und deshalb mit der einen deutschen Linkänderung korrekt auf die neue Route führen.

### Routinggrenze und spätere URL-Migration

Der technische Zwischenstand von Aufgabe 046 ist:

```text
/leistungen/schadendokumentation
```

Eine mögliche spätere kanonische Umstellung auf:

```text
/gutachtenarten/schadendokumentation
```

gehört zu Aufgabe 050. Diese spätere Migration muss gemeinsam prüfen beziehungsweise umsetzen:

- permanente Redirects
- interne Links
- Breadcrumbs
- Canonicals
- Sitemap
- Structured Data
- Erhalt bestehender SEO-Signale

Aufgabe 025 ist abgeschlossen, wird nicht wieder geöffnet und enthält diese neu erkannte Migration nicht. Aufgabe 046 nimmt die Migration ebenfalls nicht vor und ändert weder Redirect- noch Routingkonfiguration. Sie setzt ausschließlich `/leistungen/schadendokumentation` als technische Zwischenroute um. Aufgabe 050 liegt als zukünftige Aufgabe mit Status `offen` in `workflow/todo/` und wird in 046 nicht gestartet.

### Akzeptierte indirekte Structured-Data-Ausgabe

Für Aufgabe 046 ist die Wiederverwendung von `ServicePageLayout` und die dadurch automatisch entstehende Ausgabe folgender Schemas akzeptiert:

- `Service`
- `BreadcrumbList`

Dabei gelten verbindlich:

- keine Änderung an `lib/structuredData.ts`
- keine Änderung an `components/StructuredData.tsx`
- keine Änderung an `lib/metadata.ts`
- kein `FAQPage`-Schema
- keine neue zentrale SEO-Architektur
- `/leistungen` darf vorerst weiterhin im automatisch erzeugten Breadcrumb enthalten sein
- die abschließende fachliche und technische Prüfung erfolgt in Aufgabe 029
- die mögliche spätere URL-Migration bleibt Aufgabe 050 und außerhalb von 046

Die bestehende Fahrzeugbewertungsroute verwendet kein lokales `generateMetadata()` und keine eigene Metadata-Hilfsfunktion. Die neue deutsche `page.tsx` folgt diesem tatsächlichen Muster und rendert ausschließlich `DamageDocumentationServiceDetailContent`. Aufgabe 046 führt somit keine neue lokale oder zentrale Metadata-Architektur ein. Die indirekten `Service`- und `BreadcrumbList`-Daten entstehen ausschließlich über das unveränderte `ServicePageLayout`.

### Verbindliche Dateiliste für die spätere Umsetzung

**Neu**

- `app/(de)/leistungen/schadendokumentation/page.tsx`
- `components/DamageDocumentationServiceDetailContent.tsx`

**Anzupassen**

- `components/sections/services-section.tsx`
- `lib/translations/header-footer.ts`

**Nach aktuellem Plan nur prüfen, nicht ändern**

- `components/service-page-layout.tsx`
- `components/service-inquiry-form.tsx`
- `lib/contactForm.ts`
- `lib/contactActions.ts`
- `lib/service-anchors.ts`
- `components/site-header.tsx`
- `components/site-footer.tsx`

**Spätere Routingaufgabe**

- `workflow/todo/050-migrate-appraisal-routes-to-gutachtenarten.md` wird nur dokumentiert und nicht gestartet

**Nicht ändern**

- EN/RU-Dateien und lokalisierte EN/RU-Routen
- `lib/metadata.ts`
- `lib/structuredData.ts`
- `components/StructuredData.tsx`
- Redirect- oder Routingkonfiguration
- Sitemap, Robots, Canonicals und Hreflang
- Dateien unter `public/`
- Unfallgutachten- und Fahrzeugbewertungs-Inhalte
- Über-uns-Seite
- Aufgaben 047, 048 und 049
- Aufgabe 050

### Technische und visuelle Prüfschritte nach der späteren Umsetzung

1. `git status --short`
2. `git diff --name-only`
3. `git diff --check`
4. `git diff -- next-env.d.ts`
5. `npm run lint`
6. `npx tsc --noEmit`
7. `npm run build`
8. `next-router-check` für die neue statische Route erneut ausführen
9. Route, Headerlink, Mobile-Link, Startseitenkarte und alle drei CTA-Ziele prüfen
10. Formularfelder, Pflichtfelder, Validierung, Versandzustände und unveränderte andere Formulare prüfen
11. Browser-Konsole auf Fehler prüfen
12. horizontalen Overflow ausschließen
13. Screenshots und Sichtprüfung bei 390, 768 und 1440 px
14. Bildfokus und Alt-Text prüfen
15. `typography-line-break-check` für H1, Eyebrow, Trust-Zeile, Kartenüberschriften, FAQ und CTA-Texte ausführen
16. Umlaute, Fachbegriffe und verbotene Claims erneut prüfen

### Typografie- und Textprüfung des Entwurfs

Der lokale Skill `typography-line-break-check` wurde für den Plan berücksichtigt:

- echte deutsche Umlaute werden verwendet
- CTA-Texte bleiben kurz
- Kartenüberschriften sind kompakt und parallel aufgebaut
- FAQ-Antworten bleiben kurze Absätze
- keine manuellen Trennungen innerhalb von Fachbegriffen
- `Schadendokumentation in Berlin`, die lange Trust-Zeile und `Zur Schadendokumentation` müssen bei 390 px visuell geprüft werden
- auf 768 und 1440 px sind ruhige Kartenumbrüche und ausgeglichene Textlängen zu prüfen

Da in diesem Schritt keine UI existiert, sind tatsächliche Zeilenumbrüche, Viewport-Screenshots und Layoutwirkung noch nicht prüfbar. Diese Prüfung ist Teil der späteren Umsetzung und keine Freigabe des visuellen Ergebnisses vorweg.

### Verbindliche Scope-Grenze für die Umsetzung

Die spätere Umsetzung darf ausschließlich:

- die neue deutsche Detailseite und ihre eigene Content-Komponente erstellen
- die zwei deutschen Übergangslinks auf die neue Route umstellen
- den deutschen Startseitenkarten-CTA ändern
- vorhandenes Layout, Formular und vorhandenes WebP unverändert wiederverwenden
- seitenbezogene Texte und Props innerhalb der neuen Komponente ergänzen

Sie darf nicht:

- Website-Upload, neue Upload-Felder oder Bildversand im Formular einführen
- Resend-, Validierungs-, E-Mail- oder Backendlogik ändern
- Supabase-, KI-, Portal- oder Adminfunktionen ergänzen
- automatische Schadenbewertung, Schadenhöhe, Rechtsberatung oder garantierte Verwertbarkeit versprechen
- EN/RU, zentrale SEO-/Structured-Data-Dateien, Redirects, Sitemap, Robots oder Assets ändern
- Unfallgutachten, Fahrzeugbewertung, Über-uns oder andere Aufgaben mitbearbeiten
- die spätere URL-Migration vorwegnehmen
- Aufgabe 050 starten

Die Umsetzung beginnt erst nach ausdrücklicher Freigabe dieses Plans und der sichtbaren deutschen Texte.

## Implementierungsnotiz

- Die statische deutsche Zwischenroute `/leistungen/schadendokumentation` wurde mit `app/(de)/leistungen/schadendokumentation/page.tsx` erstellt.
- `components/DamageDocumentationServiceDetailContent.tsx` enthält die freigegebenen Hero-, Anwendungsfall-, Dokumentations-, Abgrenzungs-, Ablauf-, Formular-, FAQ- und CTA-Inhalte.
- Das vorhandene `ServicePageLayout`, das vorhandene `ServiceInquiryForm` und das WebP `public/images/services/beweissicherung-dokumentation.webp` werden wiederverwendet; gemeinsame Layout-, Formular-, Validierungs- und Versandlogik wurden nicht geändert.
- Das Formular zeigt Fahrzeugmodell und Nachricht, blendet Datum und Betreff aus und verwendet weiterhin ausschließlich Name, Telefonnummer und E-Mail als Pflichtfelder.
- Der deutsche Desktop- und Mobile-Link sowie die deutsche Startseitenkarte führen auf die Zwischenroute; der Karten-CTA lautet `Zur Schadendokumentation`, der Telefon-CTA bleibt `Anrufen`.
- Die indirekte Ausgabe von `Service` und `BreadcrumbList` erfolgt unverändert über `ServicePageLayout`; ein `FAQPage`-Schema wurde nicht ergänzt.
- EN/RU, Unfallgutachten, Fahrzeugbewertung, Über-uns, Assets, Redirects, Sitemap, Robots, Canonicals, Hreflang und zentrale SEO-/Structured-Data-Dateien blieben unverändert. Es wurde keine Route unter `/gutachtenarten/` angelegt.
- `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` sind erfolgreich. Der Build führt die neue Route als statisch prerenderte Seite auf; `next-env.d.ts` blieb unverändert.
- Der lokale `next-router-check` bestätigt eine statische Route ohne eigene Datenladung. Die vorhandenen deutschen `loading.tsx`-, `error.tsx`- und `not-found.tsx`-Grenzen im übergeordneten Scope sind ausreichend.
- Die Browser- und Typografieprüfung bei 390, 768 und 1440 px sowie ergänzend bei 430 und 2048 px bestätigt HTTP 200, vollständige Bilder, funktionierende CTAs, Navigation und FAQ, keinen horizontalen Scroll sowie keine Console- oder Page-Errors. Ein zunächst abgeschnittener Desktop-Formulartext wurde seitenbezogen korrigiert und erneut geprüft.
- Aufgabe 050 wurde nicht gestartet; die spätere Migration auf `/gutachtenarten/schadendokumentation` bleibt vollständig außerhalb von Aufgabe 046.

## Abschlussnotiz

- Sämtliche Akzeptanzkriterien wurden in der formalen Read-only-Prüfung bestanden.
- Die Route `/leistungen/schadendokumentation` und eine eigenständige Schadendokumentations-Seitenkomponente wurden umgesetzt.
- Das vorhandene `ServicePageLayout` und das vorhandene Anfrageformular werden wiederverwendet.
- Deutscher Desktop-, Mobile- und Startseitenlink führen auf die neue Route.
- Das bestehende optimierte WebP wird unverändert wiederverwendet.
- Das Formular ist passend zur Schadendokumentation konfiguriert; gemeinsame Validierungs-, Resend- und Versandlogik blieben unverändert.
- Die responsive Darstellung wurde bei 390 px, 768 px und 1440 px geprüft.
- `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` wurden bestanden.
- Es bestehen keine fachlichen, rechtlichen, technischen, visuellen oder 046-spezifischen Accessibility-Blocker.
- Die indirekte `Service`- und `BreadcrumbList`-Ausgabe bleibt für Aufgabe 029 dokumentiert.
- Die spätere Routenmigration bleibt Aufgabe 050.
- Der globale Formular-Semantik- und Autocomplete-Punkt wurde verbindlich als zentral zu behebender Punkt in Aufgabe 033 dokumentiert.
- Aufgaben 047, 048, 049 und 050 wurden nicht gestartet.
- Nächster logischer Task ist Aufgabe 047.

## Status

Status: abgeschlossen
