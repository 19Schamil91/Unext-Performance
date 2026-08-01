# Aufgabe 051 - Technischer Dateiplan für die vorläufige EN/RU-Umsetzung

## Status und Freigabegrenze

Status: freigegeben für vorläufige lokale Umsetzung

Dieser Dateiplan ist für die vorläufige lokale EN/RU-Umsetzung freigegeben. Die vorhandenen englischen und russischen Textentwürfe dürfen auf dem Aufgabenbranch eingebaut und im echten Layout geprüft werden.

Verbindlich gilt:

- Die technisch eingebauten EN/RU-Texte bleiben bis zur menschlichen Sprachprüfung vorläufig.
- Die lokale visuelle Freigabe ersetzt keine Sprach-, Fach- oder Rechtsfreigabe.
- Fachlich sensible Aussagen bleiben bis zur geeigneten Fachprüfung vorläufig.
- Rechtstexte werden in Aufgabe 051 nicht neu übersetzt und nicht als geprüft oder launchfähig bezeichnet.
- Technisches SEO, Metadata, Canonicals, Hreflang, Sitemap, Robots und Structured Data bleiben Aufgabe 029.
- Weitergehender Legacy-Cleanup bleibt Aufgabe 026.
- Projektweite Launch-, Accessibility- und Performance-QA bleibt Aufgabe 033.
- Deployment, Environment und echter Formularversand bleiben Aufgabe 034.
- Post-Launch-Monitoring bleibt Aufgabe 035.
- Vor den vorgesehenen Prüfungen und Freigaben erfolgen kein Abschluss, kein Push und kein Pull Request.

## Verbindliche Reihenfolge

1. Diesen konkreten Dateiplan prüfen und freigeben.
2. EN/RU-Entwürfe vorläufig auf dem lokalen Aufgabenbranch umsetzen.
3. Seiten lokal bei 390, 768 und 1440 px sichtbar machen.
4. Visuelle und inhaltliche Rückmeldung des Nutzers einarbeiten.
5. Menschliche englische und russische Sprachprüfung dokumentieren.
6. Fachlich sensible Aussagen zusätzlich prüfen.
7. Rechtstexte nur nach geeigneter Freigabe als launchfähig behandeln.
8. Finale technische, funktionale, barrierebezogene und responsive Prüfung durchführen.
9. Aufgabe erst danach mit ausdrücklicher Freigabe abschließen, pushen und als Pull Request einreichen.

## Verwendete Textgrundlagen

- Englisch: `specs/06-work-plans/task-051-en-content-draft.md`
- Russisch: `specs/06-work-plans/task-051-ru-content-draft.md`
- Englisches Prüfpaket: `specs/06-work-plans/task-051-en-human-review-checklist.md`
- Russisches Prüfpaket: `specs/06-work-plans/task-051-ru-human-review-checklist.md`
- Deutsche Referenz: aktuelle sichtbare deutsche V1-Seiten und Komponenten

Die Zuordnung erfolgt über die Abschnittsnamen und vorhandenen Referenz-IDs der beiden Entwürfe, insbesondere `Gemeinsame Navigation`, `Footer`, `Startseite`, `Unfallgutachten`, `Fahrzeugbewertung`, `Schadendokumentation`, `Über uns`, `Kontakt`, `Gemeinsames Serviceformular` sowie `Error und 404`.

## Read-only-Befund

- Die lokalisierten App-Router-Seiten verwenden bereits den gemeinsamen `[locale]`-Bereich für EN und RU.
- `AccidentServiceDetailContent` akzeptiert bereits eine Locale, zeigt in EN/RU aber noch den alten Inhalt und die alte Route.
- `VehicleValuationServiceDetailContent` und `DamageDocumentationServiceDetailContent` sind noch fest auf Deutsch eingestellt.
- `ServicePageLayout`, `ServiceInquiryForm`, `SiteFooter`, `HeaderServicesMenu`, `CtaSection`, `ProcessSection` und `WhySection` können als bestehende UI-Strukturen wiederverwendet werden.
- Der Sprachwechsel arbeitet aktuell mit Präfixen und einer Pfadliste. Er kennt keine fachliche Zuordnung zwischen `/gutachtenarten/...` und den lokalisierten Zielpfaden.
- EN/RU-Startseite, Kontakt und Über uns enthalten noch sichtbare Teile des alten Mehrleistungs-Scope.
- Die serverseitigen allgemeinen Versandmeldungen sind nach Locale getrennt; Zod-Feldfehler und interne E-Mail-Kontexte sind noch nicht durchgängig locale-spezifisch.
- `next-router-check`: Die lokalisierten datenladenden Routen erben `loading.tsx` und `error.tsx`, besitzen aber keinen lokalisierten `not-found.tsx`. Der neue Scope muss nach der Routenänderung erneut geprüft werden.
- `next.config.mjs` enthält bisher nur die drei direkten deutschen Redirects aus Aufgabe 050.

## Geplante Routen und Redirects

### Neue lokalisierte Routen

Ein gemeinsamer dynamischer Dateipfad bedient jeweils Englisch und Russisch. Technisch entstehen drei neue `page.tsx`-Dateien und damit sechs erreichbare URLs:

| Seiten-ID | Englisch | Russisch |
|---|---|---|
| `accident-appraisal` | `/en/gutachtenarten/unfallgutachten` | `/ru/gutachtenarten/unfallgutachten` |
| `vehicle-valuation` | `/en/gutachtenarten/fahrzeugbewertung` | `/ru/gutachtenarten/fahrzeugbewertung` |
| `damage-documentation` | `/en/gutachtenarten/schadendokumentation` | `/ru/gutachtenarten/schadendokumentation` |

### Direkte permanente Redirects

- `/en/leistungen/unfallgutachten` -> `/en/gutachtenarten/unfallgutachten`
- `/ru/leistungen/unfallgutachten` -> `/ru/gutachtenarten/unfallgutachten`

Die vorhandene lokalisierte Altseiten-Datei wird in 051 nicht gelöscht. Verwendungsgeprüfter Cleanup bleibt Aufgabe 026. Redirect-Ketten und Schleifen werden gesondert geprüft.

## Sprachwechselmodell

`lib/i18n.ts` wird um eine zentrale, typisierte Seiten-ID-Zuordnung erweitert. Vorgesehen sind mindestens diese IDs:

- `home`
- `services-overview`
- `accident-appraisal`
- `vehicle-valuation`
- `damage-documentation`
- `about`
- `contact`
- `privacy`
- `imprint`
- `terms`

Für jede ID werden DE-, EN- und RU-Pfade explizit hinterlegt. Der aktuelle Pfad wird zuerst einer Seiten-ID zugeordnet; anschließend wird das Ziel für die gewählte Sprache ermittelt. Dadurch funktionieren DE -> EN, DE -> RU, EN -> DE, EN -> RU, RU -> DE und RU -> EN ohne fachlich falschen Startseiten-Fallback.

Wenn eine Seiten-ID kein freigegebenes Ziel besitzt, wird die betreffende Sprache nicht still auf eine andere Seite umgeleitet. Die UI blendet das Ziel aus oder stellt es barrierearm als nicht verfügbar dar.

## Tatsächlich geplante Dateien

### Gemeinsame Locale- und Routinglogik

| Dateipfad | Aktueller Zweck | Genaue geplante Änderung | Sprache / Textreferenz | Wiederverwendung / Auswirkungen / Prüfung |
|---|---|---|---|---|
| `lib/i18n.ts` | Locale-Typen, Präfixe und einfache Pfadlokalisierung | Typisierte Seiten-IDs, zentrale DE/EN/RU-Pfadmatrix, Pfad-zu-ID-Auflösung und kontexttreue Zielermittlung ergänzen | DE/EN/RU; Soll-Routen- und Sprachwechselmatrix | Bestehende Locale-Typen bleiben; keine neue Routing-Komponente. Alle sechs Wechselrichtungen, unbekannte Pfade und Accessibility-Verhalten prüfen. Keine Metadata-/Hreflang-Logik aus 029. |
| `components/HeaderLanguageSwitcher.tsx` | Desktop-Sprachmenü | Präfix-/Whitelist-Fallback durch zentrale Seiten-ID-Auflösung ersetzen; nicht verfügbare Ziele nicht fachlich falsch umleiten | `Gemeinsame Navigation` | Bestehendes Menü, Fokus, Escape und Pending-State wiederverwenden; Tastatur und sechs Wechselrichtungen prüfen. |
| `components/HeaderMobileMenu.tsx` | Mobile Navigation und mobiler Sprachwechsel | Dieselbe zentrale Seiten-ID-Auflösung wie Desktop verwenden; bestehende Sheet-Accessibility erhalten | `Gemeinsame Navigation` | Kein neues Mobile-Menü; Touch, Escape, `SheetTitle`, `SheetDescription`, Fokus und Zielpfade prüfen. |
| `components/site-header.tsx` | Serverseitige Header-Navigation | Alte lokalisierte Pfadliste entfernen/ersetzen, drei Gutachtenarten korrekt auflösen und EN/RU-Übersichtslink aus dem primären Menü entfernen | `Gemeinsame Navigation` | `HeaderServicesMenu` bleibt unverändert; Desktop/Mobile-Daten erhalten dieselben Ziele. Keine neue Komponente. |
| `next.config.mjs` | Next.js-Konfiguration und permanente Redirects | Nur die zwei direkten EN/RU-Unfallgutachten-Redirects ergänzen | keine sichtbaren Texte | Ketten, Schleifen, Status und Endziel prüfen. Keine weiteren Legacy-Redirects und keine SEO-Konfiguration aus 029/026. |

### Neue Routen und lokalisierter Not-found-Scope

| Dateipfad | Aktueller Zweck | Genaue geplante Änderung | Sprache / Textreferenz | Wiederverwendung / Auswirkungen / Prüfung |
|---|---|---|---|---|
| `app/(localized)/[locale]/gutachtenarten/unfallgutachten/page.tsx` | neue Datei | Locale validieren und `AccidentServiceDetailContent` für EN/RU rendern | Entwürfe `Unfallgutachten` | Bestehende Content-Komponente wiederverwenden; Route, ungültige Locale und Formularanker prüfen. Finale Metadata/Canonical-Arbeit bleibt 029. |
| `app/(localized)/[locale]/gutachtenarten/fahrzeugbewertung/page.tsx` | neue Datei | Locale validieren und locale-fähige Fahrzeugbewertungs-Komponente rendern | Entwürfe `Fahrzeugbewertung` | Bestehende Content- und Layout-Komponenten wiederverwenden; Route und Formular prüfen. Finale Metadata/Canonical-Arbeit bleibt 029. |
| `app/(localized)/[locale]/gutachtenarten/schadendokumentation/page.tsx` | neue Datei | Locale validieren und locale-fähige Schadendokumentations-Komponente rendern | Entwürfe `Schadendokumentation` | Bestehende Content- und Layout-Komponenten wiederverwenden; Route und Formular prüfen. Finale Metadata/Canonical-Arbeit bleibt 029. |
| `app/(localized)/[locale]/not-found.tsx` | neue Datei | Lokalisierte 404-Darstellung anhand des aktuellen Sprachpfads mit passenden Wiederherstellungslinks ergänzen | Entwürfe `Error und 404` | Deutsche 404-Struktur als visuelle Referenz; EN/RU-Inhalt, Fokus, Links und falsche Pfade prüfen. Deckt den aktuellen `next-router-check`-Befund im 051-Scope ab. |
| `app/(localized)/[locale]/error.tsx` | lokalisierter Error-Boundary, derzeit mit deutschem Text | Sprache aus aktuellem Pfad bestimmen und EN/RU-Error-Texte sowie sprachrichtige Wiederherstellungswege anzeigen | Entwürfe `Error und 404` | Bestehende Error-UI und Reset-Funktion wiederverwenden; Fehlerzustand je Locale und Tastatur prüfen. |

### Navigation, Footer und Startseite

| Dateipfad | Aktueller Zweck | Genaue geplante Änderung | Sprache / Textreferenz | Wiederverwendung / Auswirkungen / Prüfung |
|---|---|---|---|---|
| `lib/translations/header-footer.ts` | Header-, Mobile- und Footertexte samt Links | EN/RU auf drei Gutachtenarten, aktuelle Unternehmensdaten und freigegebene kompakte Texte umstellen | `Gemeinsame Navigation`, `Footer` | Bestehende Datenform beibehalten; keine doppelten Linkquellen. Textlänge und Links bei 390/768/1440 prüfen. |
| `components/HomePageContent.tsx` | Zusammensetzung der Startseitenbereiche | Alten EN/RU-`ExpressCourierSection` aus den V1-Startseiten entfernen | `Startseite` | Bestehende V1-Bereiche wiederverwenden; alte Komponente nicht löschen, Cleanup bleibt 026. |
| `components/sections/hero-section.tsx` | Startseiten-Hero und direkte Sprungziele | EN/RU ebenfalls auf die drei Gutachtenarten-Anker und die neuen lokalen Ziele ausrichten; nur notwendige responsive Textbehandlung | `Startseite > Hero` | Bestehende Hero-Komponente und Assets wiederverwenden; CTA-Ziele, Zeilenumbrüche und Overflow prüfen. |
| `components/sections/services-section.tsx` | Startseitenkarten | EN/RU auf dieselben drei Gutachtenarten-Strukturen wie DE umstellen, locale-spezifische Texte/Alt-Texte/CTAs einsetzen und alte sechs Leistungen aus dem V1-Nutzerweg entfernen | `Startseite > Gutachtenkarten` | `reportServiceMeta` und vorhandene Karten wiederverwenden; keine neue Kartenkomponente. Links, Telefonaktionen, gleiche Kartenhöhe und 390/768/1440 prüfen. |
| `components/sections/about-section.tsx` | Über-uns-Teaser der Startseite | Hart codierte alte EN/RU-Mobiletexte und alte Kennzahlenlogik entfernen; Übersetzungsdaten und lokalisierten Über-uns-Link verwenden | `Startseite > Über-uns-Teaser` | Bestehende Sektion wiederverwenden; Textlängen, Bildwirkung und Link prüfen. |
| `lib/translations/home-overrides.ts` | aktuelle sprachspezifische Startseitentexte | EN/RU vollständig durch die vorläufigen V1-Entwürfe für Hero, drei Karten, Warum, Ablauf, Über-uns-Teaser und CTA ersetzen | alle Abschnitte unter `Startseite` | Bestehende Override-Struktur; keine parallelen neuen Textquellen. Menschliche Prüfung bleibt offen. |

`components/site-footer.tsx`, `components/HeaderServicesMenu.tsx`, `components/sections/process-section.tsx`, `components/sections/why-section.tsx` und `components/sections/cta-section.tsx` bleiben voraussichtlich unverändert: Sie können die neuen Übersetzungs- und Linkdaten bereits darstellen. Sie werden trotzdem funktional und responsiv geprüft.

### Drei Gutachtenarten

| Dateipfad | Aktueller Zweck | Genaue geplante Änderung | Sprache / Textreferenz | Wiederverwendung / Auswirkungen / Prüfung |
|---|---|---|---|---|
| `lib/translations/service-pages-part1.ts` | Daten für Unfallgutachten und alte Autovermietung | Ausschließlich EN/RU-Unfallgutachten auf den vollständigen aktuellen V1-Aufbau angleichen; deutsche Referenz und Legacy-Rental-Daten nicht fachfremd umbauen | `Unfallgutachten` | Bestehenden `accident`-Schlüssel wiederverwenden; fachlich sensible Kosten-, Gutachterwahl- und Trust-Aussagen bleiben vorläufig. |
| `lib/translations/appraisal-pages.ts` | neue Datei | Typisierte DE/EN/RU-Daten für Fahrzeugbewertung und Schadendokumentation zentral ablegen | `Fahrzeugbewertung`, `Schadendokumentation` | Neue Datei ist nötig, weil beide Seiten bisher nur hart codierte deutsche Daten besitzen. Verhindert Komponenten-Duplikate und hält drei Sprachen synchron. |
| `lib/translations.ts` | Zusammenführung aller Übersetzungsquellen | Neue Gutachtenarten-Daten in `serviceDetail.pages` je Locale einbinden | keine eigenen Texte | Bestehenden Dictionary-Zugriff beibehalten; TypeScript-Parität aller drei Locales prüfen. |
| `components/AccidentServiceDetailContent.tsx` | Unfallgutachten für DE/EN/RU | EN/RU mit demselben kompakten Seitenaufbau, Aktionen, Detailbereichen, FAQ und Formularumfang wie DE rendern; neue Route als UI-Ziel verwenden | `Unfallgutachten` | `ServicePageLayout` wiederverwenden; keine neue Komponente. Responsive Text, Fachhinweise, Links und Formular prüfen. Technische SEO-Pfade/Structured Data nicht finalisieren; 029 bleibt Gate. |
| `components/VehicleValuationServiceDetailContent.tsx` | derzeit deutsche Fahrzeugbewertungsseite | `locale` als Prop akzeptieren und alle sichtbaren Daten aus der zentralen Gutachtenarten-Quelle beziehen | `Fahrzeugbewertung` | Bestehende Komponente und `ServicePageLayout` für DE/EN/RU wiederverwenden; Formulardaten und CTA-Anker prüfen. |
| `components/DamageDocumentationServiceDetailContent.tsx` | derzeit deutsche Schadendokumentationsseite | `locale` als Prop akzeptieren und alle sichtbaren Daten aus der zentralen Gutachtenarten-Quelle beziehen | `Schadendokumentation` | Bestehende Komponente und `ServicePageLayout` für DE/EN/RU wiederverwenden; Abgrenzung zum Unfallgutachten fachlich prüfen. |
| `app/(de)/gutachtenarten/fahrzeugbewertung/page.tsx` | deutsche Fahrzeugbewertungsroute | Beim Aufruf der locale-fähigen Komponente ausdrücklich `de` übergeben | keine Textänderung | Deutsche Ausgabe muss unverändert bleiben; visueller Regressionscheck. |
| `app/(de)/gutachtenarten/schadendokumentation/page.tsx` | deutsche Schadendokumentationsroute | Beim Aufruf der locale-fähigen Komponente ausdrücklich `de` übergeben | keine Textänderung | Deutsche Ausgabe muss unverändert bleiben; visueller Regressionscheck. |
| `lib/translations/service-details.ts` | gemeinsame Layout- und Serviceformulartexte | Vorläufige EN/RU-Formular- und Layouttexte aus den Entwürfen einsetzen | `Gemeinsames Serviceformular` | `ServiceInquiryForm` bleibt unverändert datengetrieben; Labels, Platzhalter, Datenschutzlink, Erfolg und Buttonlängen prüfen. |

`components/service-page-layout.tsx` und `components/service-inquiry-form.tsx` werden voraussichtlich unverändert wiederverwendet. Falls die reale Umsetzung eine nicht durch Daten lösbare Layoutabweichung zeigt, muss diese vor einer Änderung eng begründet und im Diff separat geprüft werden. Eine neue Service- oder Formular-Komponente ist nicht geplant.

### Über uns und Trust

| Dateipfad | Aktueller Zweck | Genaue geplante Änderung | Sprache / Textreferenz | Wiederverwendung / Auswirkungen / Prüfung |
|---|---|---|---|---|
| `lib/translations/about-overrides.ts` | aktuelle sprachspezifische Über-uns-Daten | EN/RU um den deutschen V1-Aufbau mit persönlichem Kontakt, Arbeitsweise, Qualifikation, DESAG-Link und Fortbildungen erweitern | `Über uns` | Bestätigte Firmendaten und Trust-Grenzen beibehalten; keine stärkere Zertifizierungsbehauptung. Menschliche und fachliche Prüfung erforderlich. |
| `components/AboutPageContent.tsx` | getrennte deutsche und veraltete EN/RU-Darstellung | Bestehenden deutschen V1-Aufbau als gemeinsame locale-fähige Darstellung für DE/EN/RU verwenden; Personenfoto und externe DESAG-Verlinkung sprachrichtig einbinden | `Über uns` | Keine neue Komponente und keine neuen Assets. Alt-EN/RU-Struktur später in 026 bereinigen. Bild, Alt-Text, externer Link, Fokus und 390/768/1440 prüfen. |

### Kontakt, Formulare und Servermeldungen

| Dateipfad | Aktueller Zweck | Genaue geplante Änderung | Sprache / Textreferenz | Wiederverwendung / Auswirkungen / Prüfung |
|---|---|---|---|---|
| `lib/translations/contact.ts` | Kontaktseiten- und Kontaktformulartexte | EN/RU an den deutschen V1-Kontaktumfang und die vorläufigen Entwürfe angleichen; alte Servicekontakte und unbestätigte Reaktionsversprechen aus sichtbaren Daten entfernen | `Kontakt`, `Kontaktformular` | Bestehende Datenstruktur; Firmendaten müssen exakt übereinstimmen. |
| `components/contact-page-client.tsx` | Kontaktseite und Kontaktformular | Veralteten EN/RU-Mehrleistungs-/Instagram-Bereich aus dem V1-Nutzerweg entfernen, gemeinsamen V1-Aufbau und locale-spezifische Texte verwenden | `Kontakt` | Bestehende Kontaktkarten und Formular-UI wiederverwenden; Telefon, WhatsApp, E-Mail, Datenschutzlink, Fokus und responsive Darstellung prüfen. |
| `lib/contactActions.ts` | Server Actions und allgemeine Versandzustände | Vorläufig freigegebene EN/RU-Servermeldungen verwenden und Locale an Validierung/E-Mail-Kontext weiterreichen | `Gemeinsames Serviceformular > Server- und Feldfehler` | Versandmechanismus und Resend-Konfiguration nicht ändern; 034 bleibt zuständig. Fehler-/Erfolgszustände je Locale testen. |
| `lib/contactForm.ts` | Zod-Schemas, Feldfehler und interne E-Mail-Aufbereitung | Locale-spezifische Feldmeldungen sowie sprachlich eindeutigen internen Betreff/Versandkontext ermöglichen, ohne Versandkonfiguration zu ändern | `Gemeinsames Serviceformular`, `Server- und Feldfehler` | Bestehende Validierungs- und E-Mail-Funktionen erweitern; keine neue Dependency. Pflichtfelder, E-Mail-Fehler, Längenfehler und sichere HTML-Escapes prüfen. |

`components/service-inquiry-form.tsx`, `components/FormSubmitButton.tsx` und die vorhandenen UI-Feldkomponenten bleiben unverändert. Das Formular übermittelt bereits `locale`; die geplanten Übersetzungs- und Serveränderungen nutzen diese vorhandene Schnittstelle.

## Geplante Typänderungen

- `Locale` und `UrlLocale` bleiben die zentralen Sprachtypen.
- In `lib/i18n.ts` kommt ein neuer typisierter `LocalizedPageId` mit einer vollständigen `Record<LocalizedPageId, Record<Locale, string | null>>`-Zuordnung hinzu.
- Die Props von `VehicleValuationServiceDetailContent` und `DamageDocumentationServiceDetailContent` werden jeweils um `locale: Locale` erweitert.
- Das Übersetzungs-Dictionary erhält die typgleichen Seitenschlüssel `vehicleValuation` und `damageDocumentation` in DE, EN und RU.
- Die vorhandenen `ServiceInquiryFields` und `ServiceInquiryTextOverrides` bleiben bestehen. Für die Locale-Weitergabe an Validierung und internen E-Mail-Kontext werden bestehende Funktionssignaturen in `contactActions.ts` und `contactForm.ts` erweitert, ohne einen zweiten Formular-Datentyp oder eine neue Formular-Komponente einzuführen.

## Querschnittsauswirkungen je geplanter Datei

`Keine` bedeutet, dass die Datei die betreffende Ebene nicht direkt verändert. Die Funktion wird dennoch im Gesamtfluss geprüft.

| Dateipfad | Routingauswirkung | Formularauswirkung | Accessibility-Auswirkung | Responsive-Prüfbedarf | Hauptrisiko |
|---|---|---|---|---|---|
| `lib/i18n.ts` | zentrale Seiten-ID-Ziele | keine | verhindert irreführende Sprachziele | indirekt über alle Menüs | unvollständige oder mehrdeutige Pfadzuordnung |
| `components/HeaderLanguageSwitcher.tsx` | alle sechs Wechselrichtungen | keine | Fokus, Escape, Disabled-Ziele | Desktop ab 768/1440 | falscher Fallback oder verlorener Kontext |
| `components/HeaderMobileMenu.tsx` | mobiler Sprachwechsel und Gutachtenlinks | keine | Sheet-Titel/-Beschreibung, Fokus, Touch, Escape | 390/768 | Regression der bereits behobenen Dialog-Warnungen |
| `components/site-header.tsx` | liefert korrekte Navigationsziele | keine | verständlicher Trigger und Linknamen | 390/768/1440 | Desktop- und Mobile-Daten laufen auseinander |
| `next.config.mjs` | zwei permanente Direkt-Redirects | keine | keine direkte UI | alle Zielseiten | Redirect-Kette, Schleife oder falscher Status |
| `app/(localized)/[locale]/gutachtenarten/unfallgutachten/page.tsx` | neue EN/RU-Ziele | indirekt über Detailseite | gültige Seitenstruktur und Locale-Fehlerpfad | 390/768/1440 | ungültige Locale oder falsche Content-Zuordnung |
| `app/(localized)/[locale]/gutachtenarten/fahrzeugbewertung/page.tsx` | neue EN/RU-Ziele | indirekt über Detailseite | gültige Seitenstruktur und Locale-Fehlerpfad | 390/768/1440 | falsche Locale oder deutsche Resttexte |
| `app/(localized)/[locale]/gutachtenarten/schadendokumentation/page.tsx` | neue EN/RU-Ziele | indirekt über Detailseite | gültige Seitenstruktur und Locale-Fehlerpfad | 390/768/1440 | falsche Locale oder deutsche Resttexte |
| `app/(localized)/[locale]/not-found.tsx` | Wiederherstellungslinks in aktueller Sprache | keine | klare H1, Linknamen und Fokus | 390/768/1440 | 404 fällt auf falsche Sprache zurück |
| `app/(localized)/[locale]/error.tsx` | sprachrichtige Wiederherstellungswege | keine | Reset-Button, Link-/Telefonname, Fokus | 390/768/1440 | Client-Boundary ermittelt Locale falsch |
| `lib/translations/header-footer.ts` | Linkdaten für Header/Footer | keine | verständliche Namen und kurze Labels | 390/768/1440 | alte sechs Leistungen oder zu lange Labels bleiben sichtbar |
| `components/HomePageContent.tsx` | keine neuen Pfade, entfernt alten V1-Einstieg | keine | sinnvolle Abschnittsreihenfolge | 390/768/1440 | unbeabsichtigte Lücke nach Entfernen der alten Sektion |
| `components/sections/hero-section.tsx` | Sprungziele zu drei Gutachtenarten | keine | CTA-Namen und Lesereihenfolge | 390/768/1440 | EN/RU-Text überläuft oder zeigt alte Anker |
| `components/sections/services-section.tsx` | sechs Detailziele über drei Karten je Locale | Telefonaktionen bleiben | Alt-Texte, CTA-Namen, Fokus | 390/768/1440 | Kartenhöhen, CTA-Überlauf oder falsche Links |
| `components/sections/about-section.tsx` | lokalisierter Über-uns-Link | keine | Bild-Alt-Text und CTA-Fokus | 390/768/1440 | hart codierte Alttexte oder alte Kennzahlen bleiben sichtbar |
| `lib/translations/home-overrides.ts` | liefert CTA- und Kartenlinklabels | keine | verständliche, nicht zu lange Texte | 390/768/1440 | stärkere Aussagen oder unnatürliche Umbrüche |
| `lib/translations/service-pages-part1.ts` | keine Route, liefert Unfallinhalt | Formulartexte teilweise | verständliche Überschriften/FAQ | 390/768/1440 | alte Garantien, Zeitversprechen oder Mehrleistungs-Scope |
| `lib/translations/appraisal-pages.ts` | keine Route, liefert zwei Detailseiten | seitenbezogene Formulardaten | strukturierte Überschriften und Labels | 390/768/1440 | DE/EN/RU-Datenformen driften auseinander |
| `lib/translations.ts` | keine direkte Route | stellt Form-/Seitendaten bereit | keine direkte UI | indirekt alle Seiten | Dictionary-Typen oder Locale-Zweige unvollständig |
| `components/AccidentServiceDetailContent.tsx` | nutzt neues kanonisches UI-Ziel | vollständiges Serviceformular | H1-Hierarchie, FAQ, CTA-Fokus | 390/768/1440 | alter EN/RU-Aufbau oder fachlich stärkere Aussage |
| `components/VehicleValuationServiceDetailContent.tsx` | locale-fähige Ziele | Fahrzeugbewertungsformular | H1-Hierarchie, FAQ, CTA-Fokus | 390/768/1440 | deutsche Regression oder fehlende Locale-Daten |
| `components/DamageDocumentationServiceDetailContent.tsx` | locale-fähige Ziele | Dokumentationsformular | H1-Hierarchie, FAQ, CTA-Fokus | 390/768/1440 | fachliche Abgrenzung geht in Übersetzung verloren |
| `app/(de)/gutachtenarten/fahrzeugbewertung/page.tsx` | deutscher Pfad unverändert | indirekt | keine direkte Änderung | deutscher Regressionscheck | Prop-Umstellung verändert DE-Ausgabe |
| `app/(de)/gutachtenarten/schadendokumentation/page.tsx` | deutscher Pfad unverändert | indirekt | keine direkte Änderung | deutscher Regressionscheck | Prop-Umstellung verändert DE-Ausgabe |
| `lib/translations/service-details.ts` | keine | gemeinsame Labels, Fehler-/Erfolgstexte | verständliche Labels und Statusmeldungen | 390/768/1440 | zu lange Buttons oder unklare Datenschutztexte |
| `lib/translations/about-overrides.ts` | liefert interne/externe Linklabels | keine | Alt-Texte und verständliche Trust-Links | 390/768/1440 | DESAG-/Qualifikationsaussage wird verstärkt |
| `components/AboutPageContent.tsx` | interne Gutachten- und Kontaktziele | keine | H1/H2/H3, Alt-Text, externer Link, Fokus | 390/768/1440 | alte EN/RU-Struktur oder Trust-Abweichung |
| `lib/translations/contact.ts` | Datenschutz- und Standortlinklabels | vollständige Kontaktformulartexte | Feldlabels und Statusmeldungen | 390/768/1440 | unbestätigte Reaktionszeit oder falsche Firmendaten |
| `components/contact-page-client.tsx` | Datenschutz-, Maps- und Kontaktziele | Kontaktformular und Zustände | Labels, Alerts, `aria-invalid`, Fokus | 390/768/1440 | alter Mehrleistungsbereich oder abgeschnittene Texte |
| `lib/contactActions.ts` | keine | Locale für Serverfehler und Versandkontext | verständliche serverseitige Meldungen | Statuskarten bei 390/768/1440 | falsche Locale nach Serverantwort |
| `lib/contactForm.ts` | keine | lokalisierte Zod-Fehler und interne E-Mail-Texte | Feldfehler werden eindeutig zugeordnet | indirekt über Formulare | Validierungslogik oder HTML-Escaping wird beschädigt |

## Nicht geplante Dateiänderungen

- `lib/translations/legal.ts`: bestehende Legal-Texte bleiben sichtbar, aber ausdrücklich vorläufig und ungeprüft; keine Neuübersetzung in diesem Schritt.
- `components/ServicesOverviewContent.tsx`: `/leistungen` bleibt technisch bestehen, ist aber kein primärer V1-Nutzerweg. Finale Behandlung bleibt 026/029.
- `components/site-footer.tsx`: stellt die neuen Links und Texte bereits datengetrieben dar.
- `components/HeaderServicesMenu.tsx`: stellt die drei gelieferten Einträge bereits korrekt dar.
- `components/service-page-layout.tsx`: vorhandenes gemeinsames Detailseiten-Layout wird wiederverwendet.
- `components/service-inquiry-form.tsx`: vorhandenes locale-fähiges Formular wird wiederverwendet.
- `app/(localized)/[locale]/loading.tsx`: bestehender sprachneutraler Loading-Zustand wird geerbt und geprüft.
- `lib/metadata.ts`, `lib/structuredData.ts`, Sitemap-, Robots- und andere SEO-Dateien: bleiben Aufgabe 029.
- Legacy-Komponenten, alte Übersetzungsdaten und ungenutzte Assets: werden nicht blind gelöscht; Cleanup bleibt Aufgabe 026.

## Kontrollierte Umsetzungsabschnitte

### Teil 1 - Locale, Seiten-IDs, Routen und Redirects

Erwartete Dateien:

- `lib/i18n.ts`
- `components/HeaderLanguageSwitcher.tsx`
- `components/HeaderMobileMenu.tsx`
- `components/site-header.tsx`
- drei neue lokalisierte Gutachtenarten-`page.tsx`
- `next.config.mjs`

Prüfungen:

- sechs Sprachwechselrichtungen je Seiten-ID;
- alle sechs neuen EN/RU-Routen;
- zwei direkte Redirects ohne Kette oder Schleife;
- Desktop- und Mobile-Menü, Tastatur, Escape und Fokus;
- `git diff --check`, Lint und TypeScript-Zwischencheck.

### Teil 2 - Navigation, Footer, Startseiten, Über uns und Trust

Erwartete Dateien:

- `lib/translations/header-footer.ts`
- `components/HomePageContent.tsx`
- `components/sections/hero-section.tsx`
- `components/sections/services-section.tsx`
- `components/sections/about-section.tsx`
- `lib/translations/home-overrides.ts`
- `lib/translations/about-overrides.ts`
- `components/AboutPageContent.tsx`

Prüfungen:

- alter Mehrleistungs-Scope in den EN/RU-V1-Nutzerwegen nicht sichtbar;
- genau drei Gutachtenarten in Navigation und Startseitenkarten;
- Footer-Links und interne Links;
- Trust-, Firmen- und Kontaktdaten gegen DE;
- vorläufige visuelle Prüfung bei 390, 768 und 1440 px.

### Teil 3 - Drei Gutachtenarten

Erwartete Dateien:

- `lib/translations/service-pages-part1.ts`
- neue `lib/translations/appraisal-pages.ts`
- `lib/translations.ts`
- `components/AccidentServiceDetailContent.tsx`
- `components/VehicleValuationServiceDetailContent.tsx`
- `components/DamageDocumentationServiceDetailContent.tsx`
- zwei deutsche Fahrzeugbewertungs-/Schadendokumentations-`page.tsx`
- drei neue lokalisierte Gutachtenarten-`page.tsx` aus Teil 1
- `lib/translations/service-details.ts`

Prüfungen:

- Inhaltsparität mit den deutschen Referenzseiten;
- keine stärkeren Leistungs-, Kosten-, Trust- oder Zeitversprechen;
- Formulare und interne Links;
- deutsche Regression;
- 390, 768 und 1440 px je EN/RU-Seite;
- `typography-line-break-check` nach der vorläufigen Umsetzung.

### Teil 4 - Kontakt, Formulare, Validierung und Servermeldungen

Erwartete Dateien:

- `lib/translations/contact.ts`
- `components/contact-page-client.tsx`
- `lib/translations/service-details.ts`
- `lib/contactActions.ts`
- `lib/contactForm.ts`

Prüfungen:

- Labels, Platzhalter, Hilfetexte, Datenschutzlinks;
- clientseitige Browservalidierung im richtigen Dokument-Locale;
- serverseitige Pflichtfeld-, E-Mail- und allgemeine Fehler;
- Erfolg und erneute Anfrage;
- interner Betreff und Sprachkontext;
- keine Änderung an Resend-/Environment-Konfiguration;
- Tastatur, Fokus, `aria-invalid` und Alert-Zustände.

### Teil 5 - Error, 404, Not-found und interne Links

Erwartete Dateien:

- `app/(localized)/[locale]/error.tsx`
- neue `app/(localized)/[locale]/not-found.tsx`
- `lib/i18n.ts`
- bereits in Teil 1 bis 4 geänderte Linkquellen

Prüfungen:

- EN/RU-Error und 404 bleiben in der aktuellen Sprache;
- Wiederholen-, Startseiten-, Gutachtenarten- und Kontaktwege;
- keine fachlich falschen Fallbacks;
- ungültige Locale und unbekannte Pfade;
- `next-router-check` nach allen Routenänderungen.

### Teil 6 - Finale Prüfung nach Nutzer-, Sprach- und Fachfeedback

Erwartete Dateiänderungen:

- nur Korrekturen in den bereits freigegebenen 051-Dateien;
- keine ungeplante Scope-Erweiterung.

Prüfungen:

- `git diff --check`;
- `npm run lint`;
- `npx tsc --noEmit`;
- `npm run build`;
- `next-router-check`;
- `typography-line-break-check`;
- Browserkonsole, Hydration, Requests und Bilder;
- Tastatur, Fokus und Statusmeldungen;
- vollständige EN/RU-Screenshots bei 390, 768 und 1440 px;
- dokumentierte menschliche EN- und RU-Freigaben;
- dokumentierte Fachprüfung sensibler Aussagen;
- Legal-Seiten nur bei geeigneter Freigabe als launchfähig einstufen.

## Neue Dateien und Komponentenentscheidung

Geplante neue Dateien:

1. `app/(localized)/[locale]/gutachtenarten/unfallgutachten/page.tsx`
2. `app/(localized)/[locale]/gutachtenarten/fahrzeugbewertung/page.tsx`
3. `app/(localized)/[locale]/gutachtenarten/schadendokumentation/page.tsx`
4. `app/(localized)/[locale]/not-found.tsx`
5. `lib/translations/appraisal-pages.ts`

Eine neue React-Komponente ist nicht erforderlich. Die neuen Routen verwenden bestehende Content-Komponenten; Fahrzeugbewertung und Schadendokumentation werden locale-fähig gemacht. Gemeinsame Layout-, Formular-, Header-, Footer- und Kartenkomponenten werden wiederverwendet.

## Abschlussgrenze

Die vorläufige lokale Umsetzung darf nach Freigabe dieses Plans beginnen. Sie bleibt ein Review-Stand. Aufgabe 051 darf erst abgeschlossen werden, wenn Nutzerfeedback, menschliche EN/RU-Prüfung, erforderliche Fachprüfung, geeignete Behandlung der Rechtstexte sowie alle technischen und responsiven Prüfungen dokumentiert sind.
