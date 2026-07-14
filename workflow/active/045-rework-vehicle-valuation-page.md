# Aufgabe 045 - Fahrzeugbewertung-Unterseite hochwertig ausbauen

## Ziel

Eine hochwertige deutsche Unterseite für `Fahrzeugbewertung` vorbereiten und später unter `/leistungen/fahrzeugbewertung` umsetzen.

Die Seite soll kompakt und verständlich erklären:

- wann eine Fahrzeugbewertung sinnvoll ist
- was am Fahrzeug berücksichtigt wird
- welche Angaben und Unterlagen hilfreich sind
- wie die Bewertung abläuft
- wie Kontakt aufgenommen werden kann

## Kontext

Aufgabe 043 hat die deutsche Unfallgutachten-Unterseite überarbeitet. Aufgabe 044 hat die deutsche Navigation auf direkte Einstiege in `Unfallgutachten`, `Fahrzeugbewertung` und `Schadendokumentation` ausgerichtet.

Für Fahrzeugbewertung bestehen derzeit nur Übergangslinks zur Startseitenkarte beziehungsweise zum Kontakt. Aufgabe 045 soll später eine eigenständige deutsche Detailseite bereitstellen und danach diese Übergänge auf die neue Route umstellen.

Die Seite soll das Qualitätsniveau der Unfallgutachten-Unterseite erreichen, aber keine Kopie ihrer Struktur oder Texte werden. Fahrzeugbewertung bleibt ein ergänzender Kompetenzbereich unter dem Hauptfokus `KFZ-Gutachten`.

## Aktueller Stand

- Branch: `task-045-rework-vehicle-valuation-page`
- Ausgangscommit: `1d51ec9 Merge pull request #49 from 19Schamil91/task-044-rework-appraisal-navigation`
- Aufgabe 044 liegt in `workflow/done/`.
- `workflow/active/` enthielt vor dem Start nur `.gitkeep`.
- `/leistungen/fahrzeugbewertung` existiert noch nicht.
- Eine Route oder Komponente mit `wertgutachten` im Pfad oder Dateinamen existiert nicht.
- Eine eigene Fahrzeugbewertungs-Detailkomponente existiert nicht.
- 046, 047, 032, 029 und 026 wurden nicht gestartet.
- In diesem Startschritt werden keine Website-Code-Dateien geändert.

## Geprüfte Grundlage

Geprüft wurden die Spec-Hierarchie und die relevanten Vorgängeraufgaben:

- `specs/00-global-spec/global-spec.md`
- `specs/01-functional-map/functional-map.md`
- `specs/02-feature-specs/kfz-gutachten.md`
- `specs/03-technical-specs/frontend.md`
- `specs/03-technical-specs/routing.md`
- `specs/04-visual-rules/visual-rules.md`
- `specs/06-work-plans/v1-launch-masterplan.md`
- `workflow/done/041-define-v1-page-route-scope-before-i18n.md`
- `workflow/done/043-rework-accident-appraisal-page.md`
- `workflow/done/044-rework-appraisal-navigation.md`

Die Specs bestätigen Fahrzeugbewertung beziehungsweise Wertgutachten als zulässigen Anwendungsfall unter `KFZ-Gutachten`. Aufgabe 041 empfahl zusätzliche Detailseiten erst bei ausreichend eigenständigem Inhalt und klarer Strategie. Aufgabe 044 und der aktuelle Auftrag ordnen die Fahrzeugbewertungs-Unterseite nun ausdrücklich als Aufgabe 045 ein; die Eigenständigkeit des Inhalts bleibt im nächsten Planungsschritt nachzuweisen.

## Fachliche Leitentscheidung

- `Fahrzeugbewertung` ist der sichtbare, kundenfreundliche Hauptbegriff.
- `Wertgutachten` darf ergänzend erklärt werden, aber nicht überall als gleichwertiger Doppelbegriff stehen.
- Die Seite wird keine Kopie der Unfallgutachten-Seite.
- Die Seite bleibt kompakt, mobile-first und kundenorientiert.
- Keine langen Textwände.
- Mögliche Anlässe sind Kauf oder Verkauf, nachvollziehbare Einordnung des Fahrzeugwerts, besondere Ausstattung oder Fahrzeugzustand sowie private oder betriebliche Wertfragen.
- Keine ungeprüften Rechts-, Versicherungs- oder Wertgarantien.
- Keine festen Bearbeitungszeiten.
- Keine Aussage, dass ein ermittelter Wert immer von Versicherungen, Gerichten, Banken oder Käufern akzeptiert wird.
- Keine Upload-, Supabase-, KI-, Admin- oder Portal-Funktion als live darstellen.
- Keine fachlich nicht bestätigten Leistungen oder Bewertungsversprechen ergänzen.

## Geplante Zielroute

```text
/leistungen/fahrzeugbewertung
```

Geplant ist ausschließlich die deutsche Route. EN/RU-Routen und Übersetzungen bleiben Aufgabe 032 beziehungsweise einer später freigegebenen i18n-Umsetzung vorbehalten.

## Inventur vorhandener Routen, Dateien und Inhalte

### Route und wiederverwendbare Komponenten

- `app/(de)/leistungen/fahrzeugbewertung/page.tsx` existiert nicht.
- Eine lokalisierte EN/RU-Route existiert ebenfalls nicht und ist nicht Teil von 045.
- `components/AccidentServiceDetailContent.tsx` zeigt wiederverwendbare Muster für Header, Footer, CTAs, Detailabschnitte, FAQ und Anfrageformular; Fachtexte und Seitenstruktur dürfen nicht kopiert werden.
- `components/service-page-layout.tsx` ist grundsätzlich als Leistungsseiten-Layout wiederverwendbar.
- `components/service-inquiry-form.tsx`, `components/site-header.tsx`, `components/site-footer.tsx` und vorhandene UI-Komponenten können geprüft und wiederverwendet werden.

### Startseitenkarte und Navigation

- `components/sections/services-section.tsx` enthält die deutsche Fahrzeugbewertungs-Karte.
- Die Karte nutzt `/kontakt` und den Übergangs-CTA `Bewertung anfragen`.
- Nach Fertigstellung soll sie auf `/leistungen/fahrzeugbewertung` und `Zur Fahrzeugbewertung` umgestellt werden.
- `lib/translations/header-footer.ts` enthält den Dropdown-Eintrag `Fahrzeugbewertung` mit `/#service-fahrzeugbewertung`.
- Nach Fertigstellung soll er auf `/leistungen/fahrzeugbewertung` führen.
- `lib/service-anchors.ts` enthält `service-fahrzeugbewertung`. Der Anker wird nicht nebenbei gelöscht; seine weitere Verwendung gehört in die spätere Prüfung.
- `components/HeaderServicesMenu.tsx` und `components/HeaderMobileMenu.tsx` können unverändert bleiben, wenn nur das deutsche Linkziel angepasst wird.

### Vorhandene Texte

Als Grundlage prüfbar:

- `lib/translations/home-overrides.ts`: Fahrzeugbewertung, Kauf/Verkauf, Fahrzeugdaten, Zustand und Ausstattung.
- `components/sections/services-section.tsx`: mobile Kurzbeschreibung zur Einordnung des Fahrzeugwerts.
- `components/contact-page-client.tsx` und `lib/translations/contact.ts`: Fahrzeugbewertung als Kontaktanlass.
- `components/AboutPageContent.tsx`: Wertermittlung und bestätigte Qualifikationsformulierung.
- `lib/translations/legal.ts`: vorsichtige Abstimmung nach Fahrzeug, Anlass, Unterlagenlage und Leistungsumfang.

Zu schärfen:

- `Fahrzeugwert einordnen` und `Fahrzeugwert klar einordnen` sind doppelt.
- `Persönliche Einordnung` und `weitere Entscheidungen` sind unspezifisch.
- Vorhandene Kurztexte erklären Merkmale, Angaben, Unterlagen und Ablauf noch nicht ausreichend.
- Verbindlicher Marktwert, garantierte Akzeptanz oder festes Ergebnis dürfen nicht versprochen werden.

### Bildinventur

Geprüft wurde `public/images/services/wertgutachten-fahrzeugbewertung.webp`:

- WebP, 1448 x 1086 Pixel, rund 91 KB
- dunkles hochwertiges Fahrzeug mit Unterlagen, Stift, Tablet/Messgerät und Kamera
- aktueller Alt-Text: `Fahrzeugbewertung mit Unterlagen und Kamera`
- bereits in der deutschen Startseitenkarte verwendet

Empfehlung: fachlich passend und bereits optimiert. Das Bild kann nach Prüfung der mobilen Ausschnitte für die Detailseite wiederverwendet werden. Ein neues Asset ist nicht erforderlich. Der Alt-Text ist beim späteren Einsatz kontextbezogen zu prüfen.

### App-Router-Prüfung

Der lokale Skill `next-router-check` wurde lesend ausgeführt:

- 26 bestehende UI-Routen geprüft
- 13 statische deutsche Routen; `app/(de)` enthält `loading.tsx`, `error.tsx` und `not-found.tsx`
- 13 asynchrone lokalisierte Routen mit `notFound()`; `app/(localized)/[locale]` enthält `loading.tsx` und `error.tsx`, aber kein eigenes `not-found.tsx`
- Der lokalisierte Befund ist ein bestehender EN/RU-/i18n-Punkt außerhalb von 045 und wird nicht nebenbei behoben.
- Eine statische deutsche Fahrzeugbewertungs-Route wäre durch den vorhandenen deutschen Route-Group-Scope abgedeckt. Bei anderer Datenlade- oder Fehlerlogik ist dies erneut zu prüfen.

### Indirekte Metadata-/Structured-Data-Berührung

- Eine neue `page.tsx` kann über `generateMetadata()` oder `buildPageMetadata()` neue Metadaten erzeugen, ohne `lib/metadata.ts` zu ändern.
- `components/service-page-layout.tsx` rendert immer Service- und Breadcrumb-Structured-Data.
- Direkte Wiederverwendung gibt daher strukturierte Daten aus, obwohl 045 keine eigene SEO-/Metadata-/Structured-Data-Umsetzung übernimmt.
- Diese indirekte Ausgabe wurde für 045 ausdrücklich freigegeben. Das Layout wird ohne Änderung an den Structured-Data-Dateien wiederverwendet; die finale fachliche und SEO-Prüfung bleibt Aufgabe 029.
- Der automatisch erzeugte Breadcrumb kann weiterhin `/leistungen` enthalten, obwohl diese Route nicht Teil der sichtbaren deutschen V1-Navigation ist.

### Wahrscheinlich später betroffene Dateien

Neu:

- `app/(de)/leistungen/fahrzeugbewertung/page.tsx`
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
- `lib/metadata.ts`
- `lib/structuredData.ts`
- `components/StructuredData.tsx`

### Für spätere Aufgaben belassen

- 029: Metadata, Structured Data, Canonicals, Sitemap, Robots, Hreflang und SEO-Entscheidungen
- 032: EN/RU-Texte, lokalisierte Route und i18n-Launch-Scope
- 026: Legacy-Routen, tote Komponenten, ungenutzte Anker, Imports und Assets
- 046: Schadendokumentations-Unterseite und deren Übergangslinks
- 047: Über-uns, Trust, Qualifikation und Zertifikatsdarstellung

## Scope-Grenzen

### Aufgabe 045 darf später

- `/leistungen/fahrzeugbewertung` als deutsche Route erstellen
- eine hochwertige deutsche Fahrzeugbewertungs-Unterseite aufbauen
- direkt betroffene deutsche Texte und Komponenten erstellen oder anpassen
- vorhandene optimierte Bilder prüfen und verwenden
- Startseitenkarte und deutschen Header-/Dropdown-Link nach Fertigstellung umstellen
- mobile, Tablet- und Desktop-Darstellung prüfen

### Aufgabe 045 darf nicht

- Unfallgutachten, Schadendokumentation, Über-uns oder `/leistungen` umbauen
- Legacy-Routen löschen oder redirecten
- EN/RU ändern
- SEO-/Metadata-/Structured-Data-Dateien, Sitemap, Robots, Canonicals oder Hreflang ändern
- Upload-, Supabase-, KI-, Admin- oder Portal-Funktionen ergänzen
- 046, 047, 032, 029, 026, 033, 034 oder 035 starten
- neue Assets ohne Freigabe einbauen

## Vorgehen

1. Aufgabe 045 auf eigenem Branch und mit Status `in Arbeit` starten.
2. Start-Commit ausschließlich für `workflow/active/` erstellen.
3. Route, Komponenten, Texte, Links, Bild und technische Seiteneffekte inventarisieren.
4. Eine kompakte Seiten- und Textplanung mit eigenständiger Informationsarchitektur ausarbeiten.
5. Metadata-/Structured-Data-Grenze ausdrücklich lösen.
6. Plan und sichtbare deutsche Texte zur Freigabe vorlegen.
7. Erst danach Website-Code mobile-first umsetzen.
8. Technische Checks und passende Reviewer ausführen.
9. Kein Push und kein PR im Startschritt.

## Akzeptanzkriterien

- 045 liegt in `workflow/active/`.
- 045 hat `Status: in Arbeit`.
- `/leistungen/fahrzeugbewertung` ist dokumentiert.
- Bestehende Route, Komponenten und Wertgutachten-Struktur wurden geprüft.
- Betroffene Dateien und Inhalte wurden inventarisiert.
- Späterer Umsetzungsumfang und Scope-Grenzen sind dokumentiert.
- Das vorhandene Bild wurde technisch und visuell geprüft.
- Indirekte Metadata-/Structured-Data-Berührungen sind dokumentiert.
- Keine Code-Umsetzung im Startschritt.
- Keine EN/RU-, SEO-, Routing-, Redirect-, Upload-, Supabase-, KI-, Admin- oder Portal-Änderungen im Startschritt.
- 046, 047, 032, 029 und 026 wurden nicht gestartet.

## Status

Status: wartet auf Review
