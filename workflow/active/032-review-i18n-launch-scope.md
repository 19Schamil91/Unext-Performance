# Aufgabe 032 - Dreisprachigen V1-Launch vollständig planen

## Ziel

Für den verbindlichen gemeinsamen V1-Launch auf Deutsch, Englisch und Russisch wird ein vollständiger, prüfbarer Umsetzungsplan erstellt.

Deutsch bleibt die fachliche Referenz. EN und RU müssen dieselben bestätigten Leistungen, Grenzen, Kontaktwege und Nutzerziele vermitteln, dürfen aber natürlich gekürzt oder umgestellt werden. Wortgetreue Übersetzungen sind nicht erforderlich.

Aufgabe 032 entscheidet nicht mehr über den Sprachumfang und setzt noch keine Website-Inhalte um. Sie legt das Vorgehen für Inhalte, Übersetzung, Routenparität, Sprachwechsel, Formulare, Fehlerzustände, menschliche Freigaben und responsive Qualität fest.

## Kontext und Bezug zu Aufgabe 049

Aufgabe 049 hat die deutschen V1-Nutzerwege und 41 vorhandene DE/EN/RU-Seitenziele read-only geprüft. Die deutsche Referenz ist fachlich weitgehend vollständig. Der gemeinsame Launch ist weiterhin blockiert:

- EN/RU-Seiten für Fahrzeugbewertung und Schadendokumentation fehlen.
- Die EN/RU-Unfallgutachtenseite liegt unter der alten Leistungsstruktur und enthält stärkere Aussagen.
- Der Sprachwechsel verliert auf den neuen deutschen Gutachtenrouten den fachlichen Kontext.
- EN/RU-Startseite, Navigation, Footer, Leistungsübersicht, Über-uns- und Kontaktseite enthalten Nicht-V1-Leistungen.
- Trust, Qualifikation, Anerkennung und Fortbildungen sind in EN/RU nicht gleichwertig.
- Lokalisierte Fehlerzustände enthalten deutsche Texte; ein lokalisierter Not-found-Scope fehlt.
- Formulare sind nicht in allen sichtbaren, Validierungs-, Server- und Versandzuständen sprachlich durchgängig.
- Ein russischer Kartentitel läuft bei 1440 px über.
- Alte Metadata- und Structured-Data-Signale bleiben Aufgabe 029.

## Verbindliche Grundlagen

- `AGENTS.md` und `DECISIONS.md`, insbesondere Entscheidungen 7 und 8
- `specs/00-global-spec/global-spec.md`
- `specs/01-functional-map/functional-map.md`
- `specs/02-feature-specs/mehrsprachigkeit.md`
- `specs/02-feature-specs/seo.md`
- `specs/03-technical-specs/routing.md`
- `specs/06-work-plans/v1-launch-masterplan.md`
- `specs/06-work-plans/launch-readiness.md`
- `specs/06-work-plans/routing-redirects-old-service-routes.md`
- `specs/07-open-questions/open-questions.md`
- `workflow/done/049-audit-v1-user-stories-user-journeys.md`
- `ROADMAP.md` und `CHANGELOG.md`

Die Spec-Hierarchie gilt. Offene Details dürfen keine übergeordnete Entscheidung wieder öffnen.

## Inventarisierung

### Sprach- und Routingarchitektur

- `lib/i18n.ts` definiert `de`, `en` und `ru`. Deutsch bleibt ohne Präfix; EN/RU verwenden `/en` und `/ru`.
- `getLocalizedPath` arbeitet pfadbasiert und kennt keine fachliche Seiten-ID.
- `components/site-header.tsx` führt eine statische Liste lokalisierter Pfade. Die neuen deutschen `/gutachtenarten/...`-Routen fehlen dort.
- Desktop- und Mobile-Sprachwechsel fallen bei nicht zugeordneten Pfaden auf die Zielsprach-Startseite zurück.
- `next.config.mjs` leitet nur die drei alten deutschen Gutachtenpfade permanent auf `/gutachtenarten/...` weiter.
- EN/RU liegen unter `app/(localized)/[locale]/`; eigene EN/RU-Gutachtenartenrouten fehlen.

### Seiten, Texte und Komponenten

| Bereich | Deutsche Referenz | Aktueller EN/RU-Bestand | Planungsfolge |
| --- | --- | --- | --- |
| Startseite | `HomePageContent.tsx`, `home-overrides.ts`, deutsche Kartenlogik | alter Inhalt in `home.ts` und `home-overrides.ts` | V1-Aufbau sinngleich übertragen; alte Leistungen ersetzen |
| Header/Footer | `header-footer.ts`, `site-header.tsx`, `site-footer.tsx` | sechs alte Leistungen und alte Positionierung | drei Gutachtenarten, korrekte Kontaktwege und Trust-Parität |
| Unfallgutachten | `AccidentServiceDetailContent.tsx`, gemeinsame Detailbausteine | alte EN/RU-Texte unter `/leistungen/unfallgutachten` | auf DE angleichen und Route migrieren |
| Fahrzeugbewertung | `VehicleValuationServiceDetailContent.tsx` | keine EN/RU-Seite | vollständige gleichwertige Seiten |
| Schadendokumentation | `DamageDocumentationServiceDetailContent.tsx` | keine EN/RU-Seite | vollständige gleichwertige Seiten |
| Über uns/Trust | `AboutPageContent.tsx`, deutsche Overrides, DESAG-Nachweis | alter Automotive-/UNFALLX-Stand | Qualifikation und Fortbildungen innerhalb der Nachweisgrenzen übertragen |
| Kontakt | `contact-page-client.tsx`, `contact.ts` | lokalisierte Form, aber Altleistungen und 24-Stunden-Aussagen | sichtbaren Inhalt und Form auf V1 angleichen |
| Formulare | `service-inquiry-form.tsx`, `contactActions.ts`, `contactForm.ts`, Übersetzungen | Labels teilweise lokalisiert; Validierung und Versand nicht durchgängig | alle Nutzer- und Versandzustände je Locale planen |
| Legal | `legal-page-layout.tsx`, `legal.ts` | Routen vorhanden | sprachlich inventarisieren; rechtliche Freigabe absichern |
| Fehler/404 | gruppierte `error.tsx`, deutsches `not-found.tsx` | lokalisierter Fehler deutsch; lokalisierte 404 fehlt | EN/RU-Zustände und korrekte Ziele umsetzen |
| SEO-Grenze | `metadata.ts`, `structuredData.ts`, Route-Metadata | alte Service- und `AutoRepair`-Signale | nur dokumentieren; Umsetzung in 029 |

Übersetzungsquellen liegen in `lib/translations.ts` und `lib/translations/`. Zusätzlich bestehen komponentennahe Texte und responsive Varianten. Die spätere Umsetzung muss beide Arten erfassen.

### Aktuelle Routenmatrix

| Bereich | DE aktuell | EN aktuell | RU aktuell | Befund |
| --- | --- | --- | --- | --- |
| Startseite | `/` | `/en` | `/ru` | EN/RU veraltet |
| Unfallgutachten | `/gutachtenarten/unfallgutachten` | `/en/leistungen/unfallgutachten` | `/ru/leistungen/unfallgutachten` | EN/RU nicht gleichgezogen |
| Fahrzeugbewertung | `/gutachtenarten/fahrzeugbewertung` | fehlt | fehlt | Launch-Blocker |
| Schadendokumentation | `/gutachtenarten/schadendokumentation` | fehlt | fehlt | Launch-Blocker |
| Leistungsübersicht | `/leistungen` | `/en/leistungen` | `/ru/leistungen` | Legacy, keine freigegebene V1-Kernseite |
| Über uns | `/ueber-uns` | `/en/ueber-uns` | `/ru/ueber-uns` | EN/RU veraltet |
| Kontakt | `/kontakt` | `/en/kontakt` | `/ru/kontakt` | EN/RU mit Altbezügen |
| Impressum | `/impressum` | `/en/impressum` | `/ru/impressum` | menschliche Sprach-/Rechtsprüfung offen |
| Datenschutz | `/datenschutz` | `/en/datenschutz` | `/ru/datenschutz` | menschliche Sprach-/Rechtsprüfung offen |
| AGB | `/agb` | `/en/agb` | `/ru/agb` | V1-Relevanz und Rechtsprüfung offen |
| Fehler | DE-Scope | gemeinsamer lokalisierter Scope | gemeinsamer lokalisierter Scope | EN/RU zeigen Deutsch |
| Not found | DE-Scope vorhanden | kein lokalisierter Scope | kein lokalisierter Scope | 13 lokalisierte Routen betroffen |

### Ergebnis `next-router-check`

Der lokale Skill wurde am 30. Juli 2026 read-only angewendet:

- 28 `page.tsx`-Definitionen geprüft, davon 13 datenladende lokalisierte Routen.
- Alle 13 besitzen geerbte `loading.tsx`- und `error.tsx`-Grenzen.
- Alle 13 rufen `notFound()` auf, erben aber kein `app/(localized)/[locale]/not-found.tsx`.
- Aufgabe 032 erstellt keine Datei. Die spätere EN/RU-Umsetzung behebt den Befund; Aufgabe 033 prüft ihn erneut.

## Verbindliche Planungsentscheidungen

### A. Inhalts- und Übersetzungsgrundlage

1. Die freigegebene deutsche Website wird abschnittsweise als Referenz festgehalten.
2. Pro Seite werden H1, Einleitung, Karten, Bullets, CTAs, FAQ, Trust, Kontakt und Formulare in einer Übertragungsmatrix erfasst.
3. EN/RU werden sinngleich und natürlich formuliert. Länge, Satzbau und Reihenfolge dürfen variieren, wenn Bedeutung und Grenzen erhalten bleiben.
4. Keine Übersetzung darf neue Leistungen, Zertifikate, Garantien, Reaktionszeiten, Kostenübernahmen oder stärkere Versprechen ergänzen.
5. Wiederkehrende Fachbegriffe werden in einem Terminologieblatt konsistent geführt.
6. Automatische Übersetzung darf nur Entwurf sein. Veröffentlichung ohne menschliche Prüfung ist ausgeschlossen.
7. EN und RU erhalten je eine menschliche Sprachprüfung; sensible Aussagen zusätzlich einen Fachabgleich mit Deutsch.
8. Rechtstexte benötigen freigegebene Übersetzungen beziehungsweise geeignete qualifizierte Prüfung.
9. Freigaben dokumentieren Seite, Sprache, Prüferrolle, Datum und offene Abweichungen.
10. Gemeinsame Unternehmens-, Kontakt- und Trust-Daten werden sprachübergreifend gegen eine bestätigte Referenz geprüft. Nur die sprachliche Form darf abweichen.

### B. Soll-Routenparität

| Seiten-ID | Deutsch | Englisch | Russisch | Behandlung |
| --- | --- | --- | --- | --- |
| `home` | `/` | `/en` | `/ru` | EN/RU-Inhalt vollständig ersetzen |
| `accident-appraisal` | `/gutachtenarten/unfallgutachten` | `/en/gutachtenarten/unfallgutachten` | `/ru/gutachtenarten/unfallgutachten` | neue EN/RU-Ziele; alte gleichsprachige Unfallpfade direkt permanent weiterleiten |
| `vehicle-valuation` | `/gutachtenarten/fahrzeugbewertung` | `/en/gutachtenarten/fahrzeugbewertung` | `/ru/gutachtenarten/fahrzeugbewertung` | neue gleichwertige EN/RU-Seiten |
| `damage-documentation` | `/gutachtenarten/schadendokumentation` | `/en/gutachtenarten/schadendokumentation` | `/ru/gutachtenarten/schadendokumentation` | neue gleichwertige EN/RU-Seiten |
| `about` | `/ueber-uns` | `/en/ueber-uns` | `/ru/ueber-uns` | Pfade behalten, Inhalt angleichen |
| `contact` | `/kontakt` | `/en/kontakt` | `/ru/kontakt` | Pfade behalten, Inhalt/Form angleichen |
| `legal-notice` | `/impressum` | `/en/impressum` | `/ru/impressum` | Pfade behalten, menschlich/rechtlich prüfen |
| `privacy` | `/datenschutz` | `/en/datenschutz` | `/ru/datenschutz` | Pfade behalten, menschlich/rechtlich prüfen |
| `terms` | `/agb` | `/en/agb` | `/ru/agb` | nur bei bestätigter V1-Relevanz freigeben |
| `error` | deutsch | englisch | russisch | natürliche Texte und korrekte Kontaktziele |
| `not-found` | deutsch | englisch | russisch | lokalisierter Scope mit korrektem `lang` und V1-Zielen |

`/leistungen`, `/en/leistungen` und `/ru/leistungen` werden nicht als neue V1-Gutachtenübersicht vorausgesetzt. Sie bleiben Legacy und werden nicht beworben. Ihre endgültige Indexierungs-, Redirect- oder Cleanup-Behandlung bleibt 029/026.

Alte EN/RU-Routen zu Mietwagen, Werkstatt, Detailing, Zulassung und Pannenhilfe dürfen nicht irreführend auf Gutachtenseiten umgeleitet werden. Sie werden aus sichtbaren V1-Wegen entfernt und später routeweise in 026/029 bewertet. Redirects müssen direkt, semantisch passend und frei von Ketten oder Schleifen sein.

### C. Sprachwechsel

Eine explizite Zuordnung über fachliche Seiten-IDs ersetzt für V1-Kernseiten die reine Pfadableitung.

| Seiten-ID | DE-Ziel | EN-Ziel | RU-Ziel | Regel |
| --- | --- | --- | --- | --- |
| `home` | `/` | `/en` | `/ru` | jeweilige Sprach-Startseite |
| `accident-appraisal` | `/gutachtenarten/unfallgutachten` | `/en/gutachtenarten/unfallgutachten` | `/ru/gutachtenarten/unfallgutachten` | Detailkontext in allen sechs Richtungen erhalten |
| `vehicle-valuation` | `/gutachtenarten/fahrzeugbewertung` | `/en/gutachtenarten/fahrzeugbewertung` | `/ru/gutachtenarten/fahrzeugbewertung` | Detailkontext in allen sechs Richtungen erhalten |
| `damage-documentation` | `/gutachtenarten/schadendokumentation` | `/en/gutachtenarten/schadendokumentation` | `/ru/gutachtenarten/schadendokumentation` | Detailkontext in allen sechs Richtungen erhalten |
| `about` | `/ueber-uns` | `/en/ueber-uns` | `/ru/ueber-uns` | pfadtreu per Seiten-ID |
| `contact` | `/kontakt` | `/en/kontakt` | `/ru/kontakt` | pfadtreu per Seiten-ID |
| `legal-notice` | `/impressum` | `/en/impressum` | `/ru/impressum` | nur zwischen freigegebenen Fassungen |
| `privacy` | `/datenschutz` | `/en/datenschutz` | `/ru/datenschutz` | nur zwischen freigegebenen Fassungen |
| `terms` | `/agb` | `/en/agb` | `/ru/agb` | nur zwischen freigegebenen, V1-relevanten Fassungen |
| `error` | lokalisierter deutscher Fehlerzustand | lokalisierter englischer Fehlerzustand | lokalisierter russischer Fehlerzustand | aktuelle Sprache beibehalten; nur bei bekanntem fachlichem Gegenstück sprachlich wechseln |
| `not-found` | lokalisierte deutsche 404 | lokalisierte englische 404 | lokalisierte russische 404 | aktuelle Sprache beibehalten; Wiederherstellung klar als sprachlich passende Orientierung kennzeichnen |

Ein Sprachwechsel darf nie auf eine fachlich andere Seite führen. Solange für eine Seite kein fachlich entsprechendes Sprachziel existiert, darf die betreffende Sprache nicht als funktionierender Link angeboten werden. Sie wird vorübergehend ausgeblendet oder eindeutig und barrierearm als nicht verfügbar dargestellt. Die konkrete UI-Ausführung wird erst in der späteren EN/RU-Umsetzungsaufgabe festgelegt. Zum finalen V1-Launch müssen für alle freigegebenen Kernseiten vollständige Sprachgegenstücke existieren; der fachliche Seitenkontext bleibt in allen Sprachrichtungen erhalten.

Fehler- und Not-found-Zustände behalten die aktuelle Sprache bei. Retry-, Kontakt-, Zurück- und Startseitenoptionen werden in derselben Sprache angeboten. Insbesondere die russische 404 darf keine deutschen oder unpassenden englischen Texte enthalten. Ein Sprachwechsel ist nur zulässig, wenn für den ursprünglich angeforderten Inhalt ein bekanntes fachliches Sprachgegenstück existiert. Fehlt dieses Gegenstück, darf keine andere Seite als vermeintlich gleiche Seite geöffnet werden. Eine Wiederherstellung darf stattdessen zu einer klar bezeichneten, sprachlich passenden Orientierung oder Startseite führen. Die spätere EN/RU-Umsetzungsaufgabe implementiert dieses Verhalten; Aufgabe 033 prüft es funktional und sprachlich.

### D. Zuordnung der Task-049-Befunde

| Befund | Behandlung | Zuständigkeit |
| --- | --- | --- |
| fehlende Bewertungs-/Dokumentationsseiten | Seiten und Routen auf Basis von DE erstellen | spätere EN/RU-Umsetzung |
| alte Unfallroute/-inhalte | Inhalt ersetzen, neue Route, alten Pfad direkt weiterleiten | EN/RU-Umsetzung; 029 prüft SEO |
| Kontextverlust beim Sprachwechsel | Seiten-ID-Matrix umsetzen und sechs Richtungen testen | EN/RU-Umsetzung; 033 Regression |
| alte Leistungen/Kontakte | aus sichtbaren EN/RU-Wegen entfernen | EN/RU-Umsetzung; Rest-Cleanup 026 |
| stärkere Versprechen | gegen DE ersetzen und menschlich prüfen | EN/RU-Umsetzung |
| fehlende Trust-Parität | innerhalb deutscher Nachweisgrenzen übertragen | EN/RU-Umsetzung |
| deutsche Fehlertexte/fehlende 404 | localeabhängige Zustände ergänzen | EN/RU-Umsetzung; 033 Prüfung |
| russischer Überlauf | natürlich kürzen, 390/768/1440 prüfen | EN/RU-Umsetzung; 033 Abnahme |
| veraltete Links | auf Soll-Routen und korrekte Locale umstellen | EN/RU-Umsetzung |
| alte Metadata/`AutoRepair` | nach Inhalts-/Routenfreigabe bereinigen | 029 |
| Legacy-Routen/Altstrukturen | Verwendung prüfen und kontrolliert entfernen | 026 |
| Accessibility/Performance/Regression | dreisprachige Launchprüfung | 033 |

### E. Formulare

Pro Sprache werden gemeinsam umgesetzt und geprüft:

- Labels, Pflichtfeldkennzeichnung, Platzhalter und Hilfetexte;
- browser- und serverseitige Feldvalidierung;
- Konfigurations-, Versand-, Lade-, Erfolgs- und Fehlerzustände;
- Datenschutzsatz und sprachlich passender Datenschutzlink;
- `locale` und Anfragebereich als Versandkontext;
- E-Mail-Betreff, Feldbezeichnungen, Fallbackwerte und Nachrichtentext;
- keine alten Serviceauswahlen, Telefonnummern oder 24-Stunden-Versprechen;
- gleiche fachliche Pflichtfeldlogik oder dokumentierte Abweichungen;
- Autocomplete, Semantik und Accessibility.

Echter Resend-Versand, produktive Variablen und kontrollierte Zustellung bleiben Aufgabe 034. Eine übersetzte Erfolgsmeldung allein ist keine Launchfreigabe.

### F. Responsive und sprachliche Qualität

| Viewport | Pflichtprüfung je Sprache |
| --- | --- |
| 390 px | natürliche Umbrüche, vollständige Buttons, erreichbare CTAs/Menüs, Formulare ohne horizontales Scrollen |
| 768 px | sinnvolle Spalten, vollständige CTA-Zeilen, ruhige Kartenhöhen |
| 1440 px | ausgeglichene Textbreiten, keine überlangen Kartentitel oder leeren/überladenen Bereiche |

Zusätzlich: kein horizontaler Overflow, keine künstliche Schriftverkleinerung, keine deutschen Zwangsumbrüche in EN/RU, natürliche statt wortgetreuer Sprache, Prüfung von Header, Menü, Footer, Karten, CTA, FAQ, Trust, Formularen, Legal, Fehler und 404, keine neuen Konsolen- oder Hydration-Fehler sowie Tastatur-, Fokus- und Screenreader-Grundprüfung.

### G. Gemeinsame Unternehmens-, Kontakt- und Trust-Daten

Folgende Angaben müssen in DE, EN und RU sachlich identisch sein; nur ihre sprachliche Form darf sich unterscheiden:

- Firmenname und Rechtsform;
- Anschrift;
- Telefonnummer und E-Mail-Adresse;
- Öffnungszeiten beziehungsweise bestätigte Erreichbarkeitsangaben;
- vertretungsberechtigte und weitere rechtlich erforderliche Unternehmensangaben;
- bestätigte Qualifikation und Trust-Aussagen.

Jede inhaltliche Abweichung gilt als Fehler. Änderungen dieser Angaben erfolgen nicht in Aufgabe 032; die spätere EN/RU-Umsetzung übernimmt den Abgleich und Aufgabe 033 prüft die veröffentlichungsnahe Parität erneut.

## Zuordnung zu Folgeaufgaben

- **032:** Plan, Inventur, Soll-Matrizen, Qualitäts- und Freigabeverfahren; keine Website-Umsetzung.
- **Spätere EN/RU-Umsetzungsaufgabe:** Texte, Gutachtenseiten/-routen, Navigation, Footer, Trust, Kontakt, Formulare, Sprachwechsel, Fehler/404 und responsive Sichtprüfung.
- **029:** Metadata, OpenGraph, Canonicals, Hreflang, Sitemap, Robots, Structured Data und alte SEO-Signale.
- **026:** kontrollierter Cleanup von Legacy-Inhalten, Leistungen, Komponenten, Übersetzungen, Links, Assets und Routenstrukturen.
- **033:** dreisprachige Launch-, Accessibility-, Performance-, Routing-, Formular-, Typografie- und Responsive-Regression.
- **034:** Deployment, Resend-Variablen, echter Formularversand und externe Dienste.
- **035:** Monitoring von Routing, Formularen, Fehlern und Nutzerwegen nach Launch.

Keine neue Aufgabe wird in 032 angelegt. Empfohlener späterer Titel:

`EN/RU-V1-Kernseiten, Routen und Nutzerwege umsetzen`

Empfohlener Scope:

- natürliche und fachlich gleichwertige EN/RU-Texte;
- drei lokalisierte Gutachtenartenrouten je Sprache;
- Angleichung von Startseite, Über uns, Kontakt, Trust, Legal, Fehlern und 404;
- interne Links sowie Desktop-Header, Footer und Mobile-Navigation;
- explizite fachliche Sprachwechsel-Zuordnung ohne unpassenden Startseiten-Fallback;
- direkte permanente Weiterleitungen der bestehenden alten EN/RU-Unfallgutachten-Routen auf die jeweils gleichsprachigen neuen Ziele;
- Ausschluss von Redirect-Ketten, Redirect-Schleifen und fachfremden Zielen;
- vollständig lokalisierte Formularlabels, Validierung, Erfolgs- und Fehlerzustände einschließlich serverseitiger Feld- und Versandfehler;
- Entfernung sichtbarer Altbezüge, ohne den allgemeinen Cleanup aus 026 oder die SEO-Technik aus 029 vorwegzunehmen;
- Browser-Console-, Hydration-, Request- und Bildfehlerprüfung;
- responsive Sichtprüfung bei 390, 768 und 1440 px für Englisch und Russisch;
- dokumentierte menschliche Sprachfreigabe der englischen Texte;
- dokumentierte menschliche Sprachfreigabe der russischen Texte;
- zusätzliche fachliche beziehungsweise qualifizierte Prüfung sensibler Fach-, Versicherungs-, Datenschutz- und Rechtstexte.

Ausgeschlossen bleiben technische SEO-Endarbeit, allgemeiner Legacy-Cleanup und produktiver Versandtest.

## Dokumentationsabgleich vor der Umsetzung

Der ausdrücklich freigegebene Dokumentationsabgleich wurde innerhalb von Aufgabe 032 durchgeführt. Die aktiven Specs, Work-Pläne und die Roadmap unterscheiden jetzt konsistent zwischen dem bereits umgesetzten deutschen Stand und dem geplanten, noch nicht implementierten EN/RU-Ziel.

Synchronisiert wurden:

- `specs/02-feature-specs/mehrsprachigkeit.md`
- `specs/02-feature-specs/seo.md`
- `specs/03-technical-specs/routing.md`
- `specs/07-open-questions/open-questions.md`
- `specs/06-work-plans/v1-launch-masterplan.md`
- `specs/06-work-plans/routing-redirects-old-service-routes.md`
- `ROADMAP.md`
- diese aktive Task-Datei und `CHANGELOG.md`

Dabei wurden folgende überholte Annahmen korrigiert:

- Die deutschen Gutachtenarten sind nicht mehr nur Startseitenabschnitte, sondern besitzen drei kanonische Detailrouten unter `/gutachtenarten/...`.
- Die früheren deutschen Detailrouten unter `/leistungen/...` sind permanente direkte Redirect-Quellen und keine offenen Zielroutenentscheidungen mehr.
- `/leistungen` bleibt als eigenständige Übersichtsroute bestehen; nur ihre spätere SEO- und Cleanup-Behandlung ist noch offen.
- Die Trust-, Über-uns-, Konsistenz-, User-Journey- und deutsche Routenarbeit aus 047, 048, 049 und 050 ist abgeschlossen.
- Die geplanten EN/RU-Gutachtenartenrouten unter `/en/gutachtenarten/...` und `/ru/gutachtenarten/...` sind verbindliches V1-Ziel, aber noch nicht implementiert.
- Der spätere Sprachwechsel muss den fachlichen Seitenkontext erhalten und darf nicht auf eine fachlich unpassende Startseite führen.

Historische Aufgaben- und Planungsstände bleiben erhalten, sind aber als historisch, entschieden oder durch Aufgabe 050 ersetzt gekennzeichnet. `specs/03-technical-specs/frontend.md`, `specs/04-visual-rules/visual-rules.md`, `DECISIONS.md` und abgeschlossene Workflow-Dateien wurden nicht geändert, weil ihre Aussagen weiterhin gelten oder bewusst historische Entscheidungsverläufe dokumentieren.

Dieser Abgleich enthält keine EN/RU-Codeumsetzung, keine Routenerstellung und keine technische SEO-Änderung. Eine spätere EN/RU-Umsetzungsaufgabe darf erst nach gesonderter ausdrücklicher Freigabe angelegt werden.

## Scope

Aufgabe 032 darf:

- Specs, Aufgabe 049 und Code read-only inventarisieren;
- den dreisprachigen Umsetzungs- und Prüfplan dokumentieren;
- Routen-, Text-, Sprachwechsel-, Formular- und Responsive-Matrizen planen;
- Risiken, Gates und Zuständigkeiten dokumentieren;
- Titel und Scope einer späteren EN/RU-Aufgabe vorschlagen;
- `CHANGELOG.md` zum Start aktualisieren.

## Nicht-Scope

Aufgabe 032 darf nicht:

- Website-Texte übersetzen oder sichtbare Inhalte ändern;
- Code-, UI-, Übersetzungs- oder Assetdateien ändern;
- Routen erstellen, verschieben, löschen oder umleiten;
- Metadata, Structured Data, Canonicals, Hreflang, Sitemap oder Robots umsetzen;
- Legacy-Inhalte bereinigen;
- produktive Formular-, Resend- oder Deployment-Konfiguration ändern;
- Upload, Supabase, KI, Admin oder Portal ergänzen;
- ohne Freigabe eine neue EN/RU-Aufgabe anlegen;
- 026, 029, 033, 034 oder 035 starten.

## Vorgehen

1. Specs, Entscheidungen, Masterplan und Aufgabe 049 lesen.
2. Routen, Textquellen, Navigation, Sprachwechsel, Formulare, Fehler, Legal und SEO-Grenzen read-only inventarisieren.
3. `next-router-check` read-only durchführen.
4. Deutsche Referenzseiten und zu übertragende Texte abgrenzen.
5. Soll-Routen- und Sprachwechsel-Matrix festlegen.
6. Übersetzungs-, Fach-, Rechts- und menschlichen Freigabeprozess festlegen.
7. Formular-, Fehler- und Responsive-Prüfmatrix festlegen.
8. Task-049-Befunde einer Folgeaufgabe zuordnen.
9. Spätere EN/RU-Aufgabe zur Freigabe vorschlagen.
10. Bis zur Planfreigabe keine Website-Umsetzung starten.

## Risiken und Freigabe-Gates

- **Fachlichkeit:** Jede EN/RU-Seite wird gegen Deutsch und bestätigte Leistungsgrenzen geprüft.
- **Versprechen:** Keine Zeit-, Kosten-, Soforthilfe- oder Garantieaussage ohne freigegebenes deutsches Gegenstück.
- **Recht:** Legal-, Versicherungs-, Kosten- und Datenschutztexte benötigen geeignete Prüfung.
- **Routen:** Kein Launch bei fehlender Kernseite, 404 oder falschem Sprachwechsel-Kontext.
- **Legacy:** Kein Launch, solange EN/RU ausgeschlossene Leistungen aktiv bewerben.
- **Formulare:** Kein Launch bei sprachlich uneinheitlichen Labels, Zuständen, Datenschutzlinks oder Versandkontexten.
- **Responsive:** Kein Launch bei Überlauf, abgeschnittenen CTAs oder unlesbaren Pflichtviewport-Umbrüchen.
- **SEO:** Hreflang, Canonical und lokalisierte Metadata erst nach Parität in 029.
- **Deployment:** Produktiver Formularversand erst nach 034.
- **Menschliche Freigabe:** EN/RU benötigen dokumentierte Sprachfreigabe; sensible Inhalte zusätzlich fachlich/rechtlich.

## Akzeptanzkriterien

- Der gemeinsame DE/EN/RU-V1-Launch und Deutsch als fachliche Referenz sind verbindlich berücksichtigt.
- Bestehende Seiten, Routen und Textquellen sind nachvollziehbar inventarisiert.
- Soll-Routenmatrix für Startseite, drei Gutachtenarten, Über uns, Kontakt, Legal, Fehler und 404 ist dokumentiert.
- `/leistungen` und alte EN/RU-Leistungsrouten sind zu 026/029 abgegrenzt.
- Sprachwechsel-Matrix deckt alle sechs Richtungen, lokalisierte Fehler-/404-Zustände und den Entwicklungsübergang ohne fachlich unpassenden Fallback ab.
- Fehlende Sprachziele werden nicht als funktionierende Links angeboten; zum finalen V1-Launch bestehen alle freigegebenen Sprachgegenstücke.
- Natürlicher, gleichwertiger Übersetzungsprozess statt Wort-für-Wort-Übertragung ist festgelegt.
- Menschliche Sprachprüfung sowie Fach-/Rechts-Gates sind festgelegt.
- Firmenname, Rechtsform, Anschrift, Kontakt- und Erreichbarkeitsdaten, rechtlich erforderliche Unternehmensangaben sowie bestätigte Qualifikation und Trust sind als sprachübergreifend identische Prüfdaten festgelegt.
- Startseite, Header, Footer, Gutachtenarten, Über uns, Kontakt, Formulare, Trust, Legal, Fehler und 404 sind berücksichtigt.
- Labels, Platzhalter, Hilfen, Validierungs-, Server-, Erfolgs-/Fehlerzustände, Datenschutzlinks und Versandkontext sind eingeplant.
- Responsive Prüfmatrix enthält 390, 768 und 1440 px für jede Sprache.
- Konsole, Hydration, Accessibility, Tastatur, Fokus und Overflow sind als spätere Prüfungen berücksichtigt.
- Alle Task-049-Befunde sind EN/RU-Umsetzung oder 026, 029, 033, 034 beziehungsweise 035 zugeordnet.
- `next-router-check` wurde read-only durchgeführt und der lokalisierte Not-found-Befund dokumentiert.
- Titel und Scope der späteren EN/RU-Aufgabe sind einschließlich interner Links, Navigation, Redirects ohne Ketten/Schleifen, vollständiger Formularzustände, Browser-/Hydration-/Request-/Bildprüfung, Pflichtviewports und dokumentierter menschlicher EN-/RU-Freigaben vorgeschlagen, aber keine neue Aufgabe wurde angelegt.
- Aktive Routing-, SEO-, Open-Questions-, Masterplan- und Roadmap-Aussagen wurden freigegeben mit dem Abschlussstand von Aufgabe 050 und dem geplanten EN/RU-Ziel synchronisiert.
- Keine Website-, Code-, Übersetzungs-, Routen-, SEO-, Metadata-, Structured-Data- oder Assetänderung wurde umgesetzt.
- Aufgabe 032 bleibt mit `Status: in Arbeit` in `workflow/active/`, bis der Plan geprüft und freigegeben wurde.

## Status

Status: in Arbeit
