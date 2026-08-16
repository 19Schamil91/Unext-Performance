# Aufgabe 051 - EN/RU-V1-Kernseiten, Routen und Nutzerwege umsetzen

## Status

Status: abgeschlossen

## Ziel

Die bereits freigegebene deutsche V1-Webseite wird für den gemeinsamen Launch vollständig und qualitativ gleichwertig auf Englisch und Russisch umgesetzt. Deutsch bleibt die fachliche Referenz. EN und RU sollen natürlich, kompakt und zur jeweiligen Sprache passend formuliert werden, ohne stärkere Aussagen, neue Leistungen oder unbestätigte Versprechen einzuführen.

Die EN/RU-Textentwürfe und menschlichen Prüfpakete wurden während der Umsetzung zunächst als vorläufige Dokumente geführt. Der Nutzer erlaubte ausdrücklich, die Entwürfe nach Freigabe des konkreten Dateiplans vorläufig auf dem lokalen Aufgabenbranch umzusetzen und erst im sichtbaren Seitenkontext menschlich prüfen zu lassen. Die spätere ausdrückliche Nutzerakzeptanz der aktuellen Sprach- und Fachaussagen sowie die formale Abschlussfreigabe sind im Abschlussabschnitt dokumentiert; eine Launchfreigabe ergibt sich daraus nicht.

## Kontext

- Aufgabe 049 hat die dreisprachigen V1-Nutzerwege geprüft und Lücken in EN/RU dokumentiert.
- Aufgabe 050 hat die deutschen Gutachtenarten auf die kanonischen Routen unter /gutachtenarten/ migriert.
- Aufgabe 032 hat den gemeinsamen DE/EN/RU-V1-Launch sowie Übersetzungs-, Routing-, Qualitäts- und Responsive-Vorgehen verbindlich festgelegt.
- Deutsch ist inhaltliche und fachliche Referenz.
- Die Website ist erst launchbereit, wenn EN und RU vollständig umgesetzt, menschlich geprüft und technisch abgenommen sind.

## Verbindliche Grundlagen

Maßgeblich sind in dieser Reihenfolge:

1. specs/00-global-spec/global-spec.md
2. specs/01-functional-map/functional-map.md
3. specs/02-feature-specs/mehrsprachigkeit.md
4. specs/03-technical-specs/routing.md
5. specs/02-feature-specs/seo.md zur Abgrenzung von Aufgabe 029
6. specs/06-work-plans/v1-launch-masterplan.md
7. specs/06-work-plans/launch-readiness.md
8. specs/06-work-plans/routing-redirects-old-service-routes.md
9. workflow/done/032-review-i18n-launch-scope.md
10. workflow/done/049-audit-v1-user-stories-user-journeys.md
11. workflow/done/050-migrate-appraisal-routes-to-gutachtenarten.md

Verbindlich gilt:

- DE, EN und RU gehen gemeinsam mit V1 live.
- Deutsch bleibt die fachliche und inhaltliche Referenz.
- EN und RU müssen vollständig, sinngleich, natürlich und menschlich geprüft sein.
- Keine Leistung, Qualifikation, Mitgliedschaft oder Zusage darf erfunden oder stärker formuliert werden als auf Deutsch.
- Sprachwechsel müssen den fachlichen Seitenkontext erhalten.
- Unternehmens-, Kontakt-, Erreichbarkeits-, Qualifikations- und Trust-Angaben müssen in allen Sprachen inhaltlich identisch sein.
- Fachlich oder rechtlich sensible Texte benötigen eine zusätzliche geeignete Prüfung.

## Ausgangslage

- Die deutschen V1-Kernseiten und drei Gutachtenarten sind umgesetzt.
- EN/RU besitzen bereits Routen und Übersetzungsquellen, enthalten aber teilweise alten Mehrleistungs-Scope und veraltete Aussagen.
- Für Fahrzeugbewertung und Schadendokumentation fehlen lokalisierte EN/RU-Detailrouten.
- Die bisherigen EN/RU-Unfallgutachten-Routen liegen noch unter /en/leistungen/ beziehungsweise /ru/leistungen/.
- Der Sprachumschalter kennt die neuen Gutachtenarten-Seiten noch nicht vollständig und kann bei fehlender Zuordnung fachlich unpassend auf eine Startseite zurückfallen.
- Lokalisierte Formulare besitzen noch nicht durchgängig lokalisierte Feld-, Fehler-, Erfolgs- und Versandkontexte.
- Die lokalisierten datenladenden Routen besitzen Loading- und Error-Grenzen, aber keinen eigenen lokalisierten Not-found-Scope.

## Scope

Aufgabe 051 darf nach Freigabe umsetzen:

- EN/RU-Texte der freigegebenen V1-Kernseiten;
- EN/RU-Detailseiten und Routen für alle drei Gutachtenarten;
- direkte Redirects der alten EN/RU-Unfallgutachten-Routen;
- EN/RU-Navigation, Mobile-Menü, Footer und interne Links;
- kontexttreuen Sprachwechsel über stabile Seiten- beziehungsweise Inhalts-IDs;
- EN/RU-Parität bei Über uns, Trust, Kontakt und Unternehmensdaten;
- lokalisierte Kontakt- und Serviceformulare einschließlich Zuständen und Meldungen;
- lokalisierte Error- und 404-Erfahrung;
- notwendige responsive Anpassungen für natürliche EN/RU-Texte;
- dokumentierte menschliche EN- und RU-Freigaben;
- technische, visuelle und barrierebezogene Prüfung der umgesetzten Nutzerwege.

## Nicht-Scope

- keine Metadata-, Canonical-, Hreflang-, Sitemap-, Robots- oder Structured-Data-Endarbeit; diese bleibt Aufgabe 029;
- kein weitergehender Legacy-Cleanup ungenutzter Komponenten, Daten, Texte oder Assets; dieser bleibt Aufgabe 026;
- keine abschließende projektweite Launch-, Performance- und Accessibility-Abnahme; diese bleibt Aufgabe 033;
- keine Deployment-, Environment- oder echte Versandkonfiguration; diese bleibt Aufgabe 034;
- kein Post-Launch-Monitoring; dieses bleibt Aufgabe 035;
- keine neuen Leistungen, Qualifikationen, Mitgliedschaften oder Garantien;
- keine neue Dependency, kein Supabase, keine KI und kein Portal;
- keine technischen Änderungen vor ausdrücklicher Freigabe des konkreten Dateiplans;
- keine Einstufung vorläufig umgesetzter EN/RU-Texte als final oder launchfähig vor den erforderlichen Sprach-, Fach- und gegebenenfalls Rechtsfreigaben.

## Read-only-Inventur

### Routen und Komponenten

- Deutsche Kernrouten: Startseite, Kontakt, Über uns, Legal-Seiten und drei Gutachtenarten unter /gutachtenarten/.
- Lokalisierte Kernrouten: /en und /ru mit Kontakt, Über uns, Legal-Seiten, /leistungen und der alten Unfallgutachten-Detailroute.
- Fehlend: je drei kanonische Gutachtenartenrouten unter /en/gutachtenarten/ und /ru/gutachtenarten/, wobei die Unfallgutachten-Inhalte bisher nur unter den alten Pfaden existieren.
- Deutsche Fahrzeugbewertung und Schadendokumentation sind aktuell in sprachspezifischen Komponenten umgesetzt und müssen für Locale-Daten wiederverwendbar gemacht werden.
- AccidentServiceDetailContent unterstützt bereits Locale-Daten, verwendet in EN/RU aber teilweise veraltete Inhalte.

### Textquellen

Relevante Quellen liegen insbesondere in:

- lib/translations/home.ts
- lib/translations/home-overrides.ts
- lib/translations/header-footer.ts
- lib/translations/about-overrides.ts
- lib/translations/contact.ts
- lib/translations/legal.ts
- lib/translations/service-details.ts
- lib/translations/service-pages-part1.ts
- lib/translations/service-pages-part2.ts
- lib/translations/services-and-about.ts
- Komponenten mit derzeit direkt hinterlegten deutschen Texten

EN/RU enthalten noch Begriffe und Nutzerwege aus dem früheren Scope, unter anderem Autovermietung, Werkstatt, Detailing, Zulassung, Pannenhilfe und stärkere alte Leistungsversprechen. Diese Inhalte dürfen in den freigegebenen V1-Nutzerwegen nicht sichtbar bleiben.

### Formulare und Zustände

- Kontakt- und Serviceformulare besitzen lokalisierte sichtbare Grundtexte.
- Feldvalidierung, Serverfehler, allgemeine Versandfehler, Erfolgszustände und Versandkontext müssen auf vollständige Locale-Parität geprüft werden.
- Die tatsächliche Versandkonfiguration und der echte Resend-Versand bleiben Aufgabe 034.

### Routing-Grenzen

- next.config.mjs enthält bisher nur die direkten deutschen Redirects aus Aufgabe 050.
- Die alten EN/RU-Unfallgutachten-Pfade benötigen später direkte permanente Ziele ohne Ketten oder Schleifen.
- /leistungen bleibt als deutsche Übersichtsroute bestehen.
- Alte EN/RU-Leistungsübersichten und weitere Legacy-Routen werden in 051 nicht pauschal gelöscht; sie werden aus den V1-Nutzerwegen entfernt und in 026/029 abschließend behandelt.

## Deutscher Referenzstand

Für Inhalt, Reihenfolge, Aussagegrenzen, Trust und Kontakt dienen diese deutschen Bereiche als Referenz:

- Startseite /
- /gutachtenarten/unfallgutachten
- /gutachtenarten/fahrzeugbewertung
- /gutachtenarten/schadendokumentation
- /ueber-uns
- /kontakt
- Header, Mobile-Menü und Footer
- Datenschutz, Impressum und AGB, soweit sie zum V1-Scope gehören

Die Übersetzung soll Aussage, Nutzerziel und Vertrauensniveau erhalten. Wortgetreue Übertragung ist nicht erforderlich, wenn eine natürlichere und kompaktere Formulierung in EN oder RU dieselbe Aussage besser transportiert.

## Seiten- und Inhaltsmatrix

| Oberfläche | DE-Referenz | EN-Ist | RU-Ist | Quelle/Zielbereich | Menschliche Freigabe | Zusatzprüfung / Zuordnung |
|---|---|---|---|---|---|---|
| Startseite | vorhanden, aktuell | veraltet/teilweise | veraltet/teilweise | HomePageContent, sections, home-Übersetzungen | EN und RU | Fachprüfung sensibler Aussagen |
| Gutachten-/Leistungsübersicht | /leistungen technisch vorhanden, nicht primärer DE-Nutzerweg | alte Übersicht | alte Übersicht | ServicesOverviewContent, Übersetzungen | EN und RU | finale Behandlung 029/026 |
| Unfallgutachten | vorhanden, aktuell | vorhanden, veraltet und alte Route | vorhanden, veraltet und alte Route | AccidentServiceDetailContent, service-details | EN und RU | Fachprüfung, Redirect in 051 |
| Fahrzeugbewertung | vorhanden, aktuell | fehlt | fehlt | VehicleValuationServiceDetailContent, neue Locale-Daten | EN und RU | Fachprüfung |
| Schadendokumentation | vorhanden, aktuell | fehlt | fehlt | DamageDocumentationServiceDetailContent, neue Locale-Daten | EN und RU | Fachprüfung |
| Über uns | vorhanden, aktuell | veraltet/teilweise | veraltet/teilweise | AboutPageContent, about-overrides | EN und RU | Qualifikation/Trust exakt abgleichen |
| Kontakt | vorhanden, aktuell | teilweise/veraltet | teilweise/veraltet | contact-page-client, contact.ts | EN und RU | Firmendaten exakt abgleichen |
| Header | vorhanden, aktuell | alter Leistungs-Scope | alter Leistungs-Scope | site-header, HeaderServicesMenu, header-footer | EN und RU | Accessibility prüfen |
| Mobile-Navigation | vorhanden, aktuell | alter Leistungs-Scope | alter Leistungs-Scope | HeaderMobileMenu, header-footer | EN und RU | Touch, Fokus, Dialog prüfen |
| Footer | vorhanden, aktuell | alter Leistungs-Scope | alter Leistungs-Scope | site-footer, header-footer | EN und RU | interne Links prüfen |
| Sprachumschalter | für DE-Kernseiten teilweise | unvollständige Zuordnung | unvollständige Zuordnung | HeaderLanguageSwitcher, Pfadlogik | sprachunabhängig | Kontext-Mapping in 051 |
| Kontaktformular | vorhanden | teilweise lokalisiert | teilweise lokalisiert | contact-page-client, contactActions, contactForm | EN und RU | Datenschutz/Versandkontext; Versand 034 |
| Serviceformular | vorhanden | teilweise lokalisiert | teilweise lokalisiert | service-inquiry-form, Actions/Schema | EN und RU | Fehler- und Erfolgszustände |
| Error-State | vorhanden, nicht vollständig lokalisiert | teilweise | teilweise | app error-Dateien | EN und RU | technische Prüfung 051/033 |
| 404/Not-found | deutsche Basis vorhanden | lokalisierter Scope fehlt | lokalisierter Scope fehlt | app not-found-Struktur | EN und RU | next-router-check 051/033 |
| Datenschutz | vorhanden | vorhanden, zu prüfen | vorhanden, zu prüfen | legal.ts, LegalPageLayout | EN und RU | Rechtsprüfung erforderlich |
| Impressum | vorhanden | vorhanden, zu prüfen | vorhanden, zu prüfen | legal.ts, LegalPageLayout | EN und RU | Rechts-/Firmendatenprüfung |
| AGB | vorhanden | vorhanden, zu prüfen | vorhanden, zu prüfen | legal.ts, LegalPageLayout | EN und RU | nur bei bestätigter V1-Relevanz; Rechtsprüfung |

## Soll-Routenmatrix

| Inhalt | Deutsch | Englisch | Russisch | Stand |
|---|---|---|---|---|
| Unfallgutachten | /gutachtenarten/unfallgutachten | /en/gutachtenarten/unfallgutachten | /ru/gutachtenarten/unfallgutachten | DE umgesetzt, EN/RU geplant |
| Fahrzeugbewertung | /gutachtenarten/fahrzeugbewertung | /en/gutachtenarten/fahrzeugbewertung | /ru/gutachtenarten/fahrzeugbewertung | DE umgesetzt, EN/RU geplant |
| Schadendokumentation | /gutachtenarten/schadendokumentation | /en/gutachtenarten/schadendokumentation | /ru/gutachtenarten/schadendokumentation | DE umgesetzt, EN/RU geplant |

Geplante direkte permanente Redirects:

- /en/leistungen/unfallgutachten -> /en/gutachtenarten/unfallgutachten
- /ru/leistungen/unfallgutachten -> /ru/gutachtenarten/unfallgutachten

Es dürfen keine Redirect-Ketten oder -Schleifen entstehen. Weitere Legacy-Routen bleiben Aufgabe 026; technische SEO-Endarbeit bleibt Aufgabe 029.

## Sprachwechsel-Matrix

Der Sprachwechsel wird über stabile Seiten- beziehungsweise Inhalts-IDs geplant, nicht über zufällige String-Ersetzung. Für jede ID werden DE-, EN- und RU-Ziele zentral zugeordnet.

| Seiten-ID | DE | EN | RU |
|---|---|---|---|
| home | / | /en | /ru |
| services-overview | /leistungen | /en/leistungen, solange freigegeben | /ru/leistungen, solange freigegeben |
| accident-appraisal | /gutachtenarten/unfallgutachten | /en/gutachtenarten/unfallgutachten | /ru/gutachtenarten/unfallgutachten |
| vehicle-valuation | /gutachtenarten/fahrzeugbewertung | /en/gutachtenarten/fahrzeugbewertung | /ru/gutachtenarten/fahrzeugbewertung |
| damage-documentation | /gutachtenarten/schadendokumentation | /en/gutachtenarten/schadendokumentation | /ru/gutachtenarten/schadendokumentation |
| about | /ueber-uns | /en/ueber-uns | /ru/ueber-uns |
| contact | /kontakt | /en/kontakt | /ru/kontakt |
| privacy | /datenschutz | /en/datenschutz | /ru/datenschutz |
| imprint | /impressum | /en/impressum | /ru/impressum |
| terms | /agb | /en/agb | /ru/agb |
| error | aktueller DE-Kontext | aktueller EN-Kontext | aktueller RU-Kontext |
| not-found | lokalisierte Wiederherstellung | lokalisierte Wiederherstellung | lokalisierte Wiederherstellung |

Alle sechs Wechselrichtungen DE->EN, DE->RU, EN->DE, EN->RU, RU->DE und RU->EN werden pro Seiten-ID geprüft. Solange ein Ziel fehlt, wird es ausgeblendet oder barrierearm als nicht verfügbar dargestellt. Ein stiller Fallback auf eine fachlich andere Startseite ist unzulässig.

## Übersetzungs- und Freigabeprozess

### Phase A - Bestands- und Referenzmatrix

- deutsche Referenztexte und sichtbare Textquellen eindeutig bestimmen;
- doppelte mobile/desktop oder komponenteninterne Texte erkennen;
- Firmendaten, Trust-Aussagen und Kontaktangaben abgleichen;
- alten EN/RU-Scope markieren.

### Phase B - EN/RU-Textentwürfe

- EN und RU getrennt und außerhalb der Website-Implementierung entwerfen;
- sinngleiche, natürliche und kompakte Formulierungen verwenden;
- UI-Längen, mobile Zeilenumbrüche und CTA-Flächen berücksichtigen;
- keine unbestätigten oder stärkeren Aussagen ergänzen;
- vollständige Zuordnung zur deutschen Referenz dokumentieren.

### Phase C - Prüfpakete und Dateiplan

- getrennte menschliche EN- und RU-Prüfpakete vorbereiten;
- konkreten technischen Dateiplan auf Grundlage der Entwürfe und der bestehenden Implementierung erstellen;
- Wiederverwendung, neue Dateien, Risiken und Teilprüfungen je Datei dokumentieren;
- Dateiplan vor der ersten Codeänderung ausdrücklich freigeben lassen.

### Phase D - Vorläufige lokale Umsetzung

Erst nach ausdrücklicher Freigabe des Dateiplans:

- bestehende Locale-, Daten- und Komponentenstrukturen wiederverwenden;
- deutsche Detailkomponenten locale-fähig machen, statt unnötig zu duplizieren;
- sechs EN/RU-Gutachtenartenrouten ergänzen;
- Navigation, Links, Sprachwechsel, Formulare, Trust, Error und 404 angleichen;
- zwei alte EN/RU-Unfallrouten direkt weiterleiten;
- keine technische SEO-Endarbeit aus Aufgabe 029 vorziehen;
- alle eingebauten EN/RU-Texte sichtbar als vorläufigen Review-Stand behandeln.

### Phase E - Lokale visuelle und inhaltliche Prüfung

- EN und RU jeweils bei 390, 768 und 1440 px sichtbar machen;
- Nutzerfeedback zu Layout, Textlängen, Zeilenumbrüchen und inhaltlicher Wirkung einarbeiten;
- alle Kernseiten, Navigationen, Formulare und Zustände im echten Seitenkontext prüfen;
- die lokale visuelle Freigabe nicht als Sprach-, Fach- oder Rechtsfreigabe behandeln.

### Phase F - Menschliche und fachliche Freigaben

- EN durch eine geeignete sprachkundige Person prüfen lassen;
- RU durch eine geeignete sprachkundige Person prüfen lassen;
- fachlich sensible Aussagen zusätzlich fachlich prüfen;
- Rechtstexte nicht neu formulieren und nur auf geeigneter beziehungsweise freigegebener Übersetzungsgrundlage als launchfähig behandeln;
- Korrekturen und Freigaben nachvollziehbar in der Task dokumentieren.

### Phase G - Finale Prüfung

- Links und Sprachwechsel in alle Richtungen testen;
- Redirects auf Ketten und Schleifen prüfen;
- Browserkonsole, Hydration, Requests und Bilder prüfen;
- Accessibility, Tastatur, Fokus und verständliche Statusmeldungen prüfen;
- next-router-check und typography-line-break-check ausführen;
- Lint, TypeScript und Build ausführen;
- erst nach allen Freigaben und ausdrücklicher Nutzerbestätigung abschließen, pushen und einen Pull Request erstellen.

## Formular- und Fehlerzustände

Für Kontakt- und Serviceformulare sind je Sprache zu prüfen und umzusetzen:

- Labels, Platzhalter, Hilfetexte und Auswahlwerte;
- clientseitige Validierung;
- serverseitige Feldfehler;
- allgemeine Versandfehler;
- Erfolgszustände;
- Datenschutzlink und Einwilligungstext;
- sprachlicher Betreff und Versandkontext;
- Erhalt der gewählten Sprache nach Fehlern oder Rücknavigation.

Die eigentliche Versandkonfiguration wird in 051 nicht geändert. Echter Resend-Versand bleibt zusätzliches Gate in Aufgabe 034.

Error- und 404-Zustände müssen die aktuelle Sprache bewahren, verständliche Wiederherstellungswege anbieten und dürfen nicht auf eine fachlich unpassende Startseite umleiten.

## Trust- und Unternehmensdaten

Folgende Angaben müssen über DE, EN und RU inhaltlich identisch bleiben:

- Firmenname und Rechtsform;
- Anschrift;
- Telefonnummer und E-Mail-Adresse;
- Öffnungszeiten beziehungsweise Erreichbarkeit;
- rechtlich erforderliche Vertretungsangaben;
- bestätigte Qualifikation;
- DESAG-bezogene, belegte Trust-Aussagen;
- externe Prüf- oder Profilverlinkungen.

EN/RU dürfen diese Angaben sprachlich natürlich erklären, aber nicht erweitern oder stärker darstellen.

## Responsive- und Browserprüfung

Pflichtviewports:

- Mobile: 390 px
- Tablet: 768 px
- Desktop: 1440 px

Je Sprache zu prüfen:

- kein horizontaler Overflow;
- keine abgeschnittenen Überschriften, Absätze, Karten oder Buttons;
- natürliche Zeilenumbrüche und angemessene Textlängen;
- stabile Karten- und CTA-Abmessungen;
- funktionsfähige Desktop- und Mobile-Navigation;
- sichtbarer Tastaturfokus und sinnvolle Lesereihenfolge;
- korrekte Bilder und Alt-Texte;
- keine Browser-, Hydration-, Request- oder Runtime-Fehler.

## Technische Vorgehensweise

- vorhandene Übersetzungsquellen und Locale-Typen konsolidiert weiterverwenden;
- eine zentrale, typisierte Seiten-ID-Zuordnung für Sprachziele vorsehen;
- Gutachtenarten-Komponenten nach bestehendem deutschen Muster locale-fähig machen;
- gemeinsame Unternehmensdaten möglichst aus einer konsistenten Quelle beziehen;
- server- und clientseitige Formularmeldungen nach Locale zuordnen;
- Routen statisch und App-Router-konform ergänzen;
- direkte Redirects ohne Ketten implementieren;
- Änderungen eng auf 051 begrenzen und Altcode erst in 026 entfernen.

## Reviewer und lokale Skills

- next-router-check bei Routenänderungen und vor Abschluss;
- typography-line-break-check für Textlayout und Umbrüche in EN/RU auf allen Pflichtviewports;
- site-launch-audit für die koordinierte Abschlussprüfung der dreisprachigen Kernwege;
- manuelle Accessibility-, Mobile- und Desktop-Prüfung, da dafür keine separaten lokalen Skill-Dateien vorhanden sind;
- menschliche EN- und RU-Sprachprüfung außerhalb der automatisierten Checks;
- geeignete Fach- beziehungsweise Rechtsprüfung für sensible Aussagen.

Technische Abschlusschecks nach Codeänderungen:

- git diff --check
- npm run lint
- npx tsc --noEmit
- npm run build

## Risiken

- Veraltete EN/RU-Texte können alte Leistungen oder stärkere Versprechen wieder sichtbar machen.
- Wortgetreue Übersetzungen können unnatürlich, zu lang oder auf Mobile schlecht lesbar sein.
- Getrennte Textquellen können zu inkonsistenten Aussagen führen.
- Ein unvollständiges Sprachmapping kann Nutzer auf fachlich falsche Seiten führen.
- Redirects können unbeabsichtigt Ketten oder Schleifen erzeugen.
- Formulare können sichtbar lokalisiert sein, aber nicht lokalisierte Serverfehler ausgeben.
- Trust-, Firmen- und Rechtstexte bergen bei Abweichungen ein fachliches oder rechtliches Risiko.
- Neue Routen benötigen vollständige Loading-, Error- und Not-found-Prüfung.

## Freigabe-Gates

1. Der konkrete technische Dateiplan wird erstellt und ausdrücklich freigegeben.
2. Die vorhandenen EN/RU-Entwürfe dürfen danach vorläufig auf dem lokalen Aufgabenbranch umgesetzt werden.
3. Die Seiten werden lokal bei 390, 768 und 1440 px sichtbar gemacht.
4. Visuelle und inhaltliche Rückmeldung des Nutzers wird eingearbeitet.
5. Menschliche EN- und RU-Sprachprüfung wird anschließend dokumentiert und bleibt vor Abschluss verpflichtend.
6. Fachlich sensible Aussagen werden zusätzlich geeignet geprüft.
7. Rechtstexte werden nur nach geeigneter Freigabe als launchfähig behandelt und in 051 nicht ungeprüft neu formuliert.
8. Responsive, funktionale, barrierebezogene und technische Prüfungen werden vollständig bestanden.
9. Abschluss, Push und Pull Request erfolgen erst danach und nur nach ausdrücklicher Nutzerfreigabe.

Historische Gate-Regel während der Umsetzung: Die lokale visuelle Prüfung ersetzte keine Sprach-, Fach- oder Rechtsfreigabe, und vorläufige Texte durften nicht unbemerkt als final oder launchfähig bezeichnet werden. Die spätere Nutzerakzeptanz der Sprach- und Fachabweichung sowie die weiterhin offene Rechtsprüfung sind im Abschlussabschnitt dokumentiert.

## Phase-B-Zwischenstand

Der Plan wurde ausdrücklich für Phase B freigegeben. Die getrennten Textentwürfe liegen hier:

- specs/06-work-plans/task-051-en-content-draft.md
- specs/06-work-plans/task-051-ru-content-draft.md

Beide Dokumente ordnen die Entwürfe über stabile Inhalts-IDs und Abschnittsnamen den aktuellen deutschen Referenztexten zu. Sie decken Navigation, Footer, Startseite, alle drei Gutachtenarten, Über uns, Kontakt, gemeinsame Formulare, Server- und Feldmeldungen sowie Error- und 404-Zustände ab.

Die vorhandenen Legal-Texte werden nicht ungeprüft neu formuliert. Impressum, Datenschutz und AGB bleiben bis zu einer geeigneten beziehungsweise qualifizierten Rechts- und Sprachprüfung ausdrücklich vorläufig.

Zum damaligen Phase-B-Zwischenstand offen:

- menschliche englische Sprachprüfung;
- menschliche russische Sprachprüfung;
- fachliche Prüfung sensibler Gutachten-, Kosten- und Trust-Aussagen;
- geeignete Prüfung der Rechtstexte;
- ausdrückliche Freigabe der korrigierten Textentwürfe;
- konkreter Dateiplan und dessen Freigabe vor jeder Codeänderung; der Plan ist inzwischen erstellt, seine Freigabe bleibt offen.

Die Entwürfe sind keine menschliche Freigabe. Es wurde noch keine Website-, Übersetzungs-, Routen- oder Codeänderung vorgenommen.

## Phase-C-Zwischenstand

Für die reale menschliche Sprachprüfung wurden zwei getrennte, strukturierte Prüfpakete vorbereitet:

- `specs/06-work-plans/task-051-en-human-review-checklist.md`
- `specs/06-work-plans/task-051-ru-human-review-checklist.md`

Die Prüfpakete verweisen auf die jeweiligen Entwürfe aus Commit `0614292`, enthalten leere Prüfer-, Datums- und Ergebnisfelder und trennen Sprachprüfung, Fachprüfung und Rechtsprüfung eindeutig. Sie decken Navigation, Footer, Startseite, alle drei Gutachtenarten, Über uns, Trust, Kontakt, Formulare, Servermeldungen sowie Error und 404 ab. Rechtstexte bleiben ein gesondertes, nicht abgeschlossenes Gate.

Zum damaligen Phase-C-Zwischenstand weiterhin offen:

- menschliche englische Sprachprüfung;
- menschliche russische Sprachprüfung;
- Fachprüfung sensibler Gutachten-, Versicherungs-, Kosten- und Trust-Aussagen;
- geeignete beziehungsweise qualifizierte Rechtsprüfung;
- Korrektur und ausdrückliche Freigabe der Textentwürfe auf Grundlage realer Rückmeldungen;
- konkreter technischer Dateiplan und dessen Freigabe; der Plan ist inzwischen erstellt, seine Freigabe bleibt offen.

Die Vorbereitung der Prüfpakete ist keine Textfreigabe. Es wurde weiterhin keine Website-, Übersetzungs-, Routen- oder Codeumsetzung begonnen.

## Dateiplan-Zwischenstand

Der konkrete technische Dateiplan wurde unter `specs/06-work-plans/task-051-implementation-file-plan.md` erstellt. Er kartiert die tatsächlich geplanten Dateien, die Wiederverwendung vorhandener Komponenten, neue Routen, direkte Redirects, das zentrale Seiten-ID-Modell, Formulare, Error/404, interne Links, responsive Prüfungen sowie die Grenzen zu 029, 026, 033, 034 und 035.

Der Nutzer hat die neue Reihenfolge ausdrücklich festgelegt: Nach Freigabe dieses Dateiplans dürfen die vorhandenen EN/RU-Entwürfe vorläufig lokal umgesetzt und im echten Layout geprüft werden. Menschliche EN/RU-Prüfung, erforderliche Fachprüfung und geeignete Behandlung der Rechtstexte bleiben Abschluss- und Launch-Gates.

Historischer Freigabestand: Der Dateiplan wurde ausdrücklich freigegeben und die vorläufige lokale Codeumsetzung durfte beginnen. Zu diesem Zeitpunkt war die menschliche EN/RU-Prüfung vor Abschluss, Push, Pull Request und Launch noch als verpflichtend eingeordnet; der technische Preview-Stand durfte nicht als sprachlich final oder launchfähig bezeichnet werden. Die spätere Nutzerentscheidung zu dieser Abweichung ist im Abschlussabschnitt dokumentiert.

## Codebase-Explorer vor der Umsetzung

Der vorgeschriebene read-only Codebase-Explorer hat den freigegebenen Plan vor der ersten Codeänderung geprüft:

- Die vorhandenen deutschen Gutachtenrouten unter `app/(de)/gutachtenarten/` und die lokalisierten `[locale]`-Routen liefern passende App-Router-Muster für die neuen EN/RU-Routen.
- Die bestehende Locale-Validierung erfolgt mit `isUrlLocale(locale)` und `notFound()`; die geplante zentrale Seiten-ID-Zuordnung in `lib/i18n.ts` ist für einen kontexttreuen Sprachwechsel erforderlich.
- `ServicePageLayout`, `ServiceInquiryForm` und die drei vorhandenen Gutachten-Komponenten werden wiederverwendet. Eine neue wiederverwendbare React-Komponente ist nicht erforderlich.
- `app/(localized)/[locale]/not-found.tsx` und die drei lokalisierten Gutachten-`page.tsx`-Dateien sind sinnvolle neue Dateien.
- Der Explorer bestätigte zunächst vier neue Route-/State-Dateien, weil `app/(localized)/[locale]/error.tsx` bereits existiert. Die reale Browserprüfung zeigte anschließend, dass unbekannte Unterpfade ohne eine locale-nahe Catch-all-Route auf die allgemeine Next.js-404 fallen. Deshalb wurde zusätzlich `app/(localized)/[locale]/[...notFound]/page.tsx` angelegt und diese Laufzeitabweichung geprüft.

Diese Abweichung verändert den fachlichen oder technischen Scope nicht. Der freigegebene Dateiplan bleibt umsetzbar.

## Vorläufiger lokaler Umsetzungsstand

Der freigegebene Dateiplan wurde mit Commit `877e057 task-051: plan provisional EN/RU implementation` separat gesichert. Danach wurde der technische Preview-Stand lokal und noch uncommitted umgesetzt.

Umgesetzt sind:

- zentrale, typisierte Seiten-IDs und kontexttreue DE/EN/RU-Ziele;
- sechs neue EN/RU-Gutachtenartenrouten und zwei direkte permanente Redirects;
- Header, Mobile-Menü, Footer und Startseiten auf drei Gutachtenarten ausgerichtet;
- Startseite, Über uns, Trust, Kontakt und alle drei Gutachtenarten in EN/RU an den deutschen V1-Aufbau angeglichen;
- locale-spezifische Formular-, Feld-, Server- und interne Versandkontexte ohne Änderung des echten Versands;
- lokalisierte Error- und 404-Zustände mit sprachrichtigen Rückwegen;
- deutsche Gutachtenrouten ausschließlich technisch um die explizite Locale-Übergabe ergänzt.

Tatsächlich geändert oder neu angelegt wurden:

- `app/(de)/gutachtenarten/fahrzeugbewertung/page.tsx`
- `app/(de)/gutachtenarten/schadendokumentation/page.tsx`
- `app/(localized)/[locale]/error.tsx`
- `app/(localized)/[locale]/not-found.tsx`
- `app/(localized)/[locale]/[...notFound]/page.tsx`
- `app/(localized)/[locale]/gutachtenarten/unfallgutachten/page.tsx`
- `app/(localized)/[locale]/gutachtenarten/fahrzeugbewertung/page.tsx`
- `app/(localized)/[locale]/gutachtenarten/schadendokumentation/page.tsx`
- `components/AboutPageContent.tsx`
- `components/AccidentServiceDetailContent.tsx`
- `components/DamageDocumentationServiceDetailContent.tsx`
- `components/HeaderLanguageSwitcher.tsx`
- `components/HeaderMobileMenu.tsx`
- `components/HomePageContent.tsx`
- `components/VehicleValuationServiceDetailContent.tsx`
- `components/contact-page-client.tsx`
- `components/sections/about-section.tsx`
- `components/sections/hero-section.tsx`
- `components/sections/services-section.tsx`
- `components/site-header.tsx`
- `lib/contactActions.ts`
- `lib/contactForm.ts`
- `lib/i18n.ts`
- `lib/translations.ts`
- `lib/translations/appraisal-pages.ts`
- `lib/translations/contact.ts`
- `lib/translations/header-footer.ts`
- `lib/translations/home-overrides.ts`
- `lib/translations/service-details.ts`
- `next.config.mjs`

Abweichungen vom Dateiplan:

- `lib/translations/service-pages-part1.ts` wurde nicht verändert. Die vorläufigen EN/RU-Unfallgutachten-Daten werden zusammen mit Fahrzeugbewertung und Schadendokumentation in der neuen, typisierten Quelle `lib/translations/appraisal-pages.ts` geführt und im Dictionary zuletzt zusammengeführt. So bleiben die alten Rental-Daten in der Legacy-Datei unberührt.
- `lib/translations/about-overrides.ts` wurde nicht verändert. Der aktuelle deutsche V1-Aufbau wurde direkt in `AboutPageContent.tsx` als gemeinsame locale-fähige Struktur weiterverwendet, damit keine zweite sichtbare Trust-Datenquelle entsteht.
- Die zusätzliche locale-nahe Catch-all-Route ist nötig, weil eine unbekannte EN/RU-Unterroute die verschachtelte `not-found.tsx` sonst nicht zuverlässig erreicht. `notFound()` aktiviert den Next.js-Not-found-Zustand; bei gestreamten Antworten kann Next.js HTTP 200 mit `noindex` ausgeben.

Prüfstand:

- `git diff --check`, ESLint, TypeScript und Produktions-Build bestanden; der Build erzeugt 49 statische Seiten und die dynamische locale-nahe Catch-all-Route.
- `next-router-check`: 32 UI-Routen geprüft, davon 16 datenladende lokalisierte Routen; die zusätzliche locale-nahe Catch-all-Route ist synchron. Vorhandene `loading.tsx`, `error.tsx` und der neue locale-nahe `not-found.tsx` decken die relevanten Scopes ab, keine fehlende Pflichtdatei.
- Alle sechs neuen Routen liefern HTTP 200. Die beiden alten EN/RU-Unfallrouten leiten direkt mit HTTP 308 auf die neuen Ziele, ohne Kette oder Schleife.
- Alle 18 geprüften Sprachwechsel zwischen DE, EN und RU auf den drei Gutachtenarten erhalten den Seitenkontext.
- 50 Fullpage-Screenshots liegen ausschließlich außerhalb des Repositorys unter `C:/tmp/unext-task-051-provisional-preview/`.
- EN/RU wurden bei 390, 768 und 1440 px geprüft; die vier deutschen Referenzseiten bei 390 und 1440 px.
- Keine horizontalen Überläufe, Console-, Hydration-, Request- oder sichtbaren Bildfehler in den geprüften Kernwegen.
- Der gezielte Aufruf einer ungültigen Locale unter `/fr/...` liefert die erwartete globale HTTP-404. Der lokale Next.js-Server protokolliert bei diesem absichtlichen Negativtest intern `NoFallbackError`; im Browser entstehen daraus keine Console-, Hydration- oder Darstellungsfehler. Der Loghinweis bleibt als Framework-/Route-QA-Befund für Aufgabe 033 dokumentiert.
- `a11y_checker`, `quality_reviewer`, `content_consistency_reviewer`, `mobile_visual_checker`, `desktop_visual_checker`, `typography-line-break-check` und `next-router-check` wurden eingesetzt. Der anfängliche 404-Blocker wurde behoben; die übrigen Kernseiten zeigen keine blockierenden Layout- oder Accessibility-Befunde.
- Veraltete EN/RU-Metadata und Structured Data sind technisch weiterhin vorhanden, aber nicht als sichtbarer V1-Inhalt. Ihre finale Bereinigung bleibt ausdrücklich Aufgabe 029; Legacy-Seiten und Alt-Daten bleiben Aufgabe 026.

Weiterhin offen und verpflichtend:

- menschliche englische Sprachprüfung;
- menschliche russische Sprachprüfung;
- fachliche Prüfung sensibler Gutachten-, Versicherungs-, Kosten- und Trust-Aussagen;
- geeignete beziehungsweise qualifizierte Prüfung der Rechtstexte;
- visuelle Nutzerfreigabe des lokalen Preview-Stands.

Dieser damalige Zwischenstand war nicht launchfähig. Die spätere formale Abschlussfreigabe der Aufgabe ist im Abschlussabschnitt dokumentiert und stellt weiterhin keine Launchfreigabe dar.

## Freigegebene Referenztext-Korrekturen

Die nach der vorläufigen Paritätsprüfung ausdrücklich freigegebenen kleinen Referenztext-Korrekturen wurden in DE, EN und RU synchronisiert. Betroffen sind der ergänzende Startseitenhinweis, Prozessschritt 4, zwei Begriffe beziehungsweise Beschreibungen des Unfallgutachtens, die Formularüberschrift der Fahrzeugbewertung sowie der Fortbildungsbereich auf der Über-uns-Seite.

Unbekannte deutsche Pfade erhalten über eine locale-nahe Catch-all-Route nun die vorhandene deutsche 404-Seite. Die bestehenden lokalisierten EN/RU-404-Aktionen wurden auf die freigegebenen Beschriftungen angepasst. Es wurde keine allgemeine `/gutachtenarten`-Route angelegt oder verlinkt.

Die englischen und russischen Fortbildungsformulierungen waren an diesem historischen Zwischenstand ausdrücklich vorläufig und benötigten noch menschliche Sprachprüfung sowie eine geeignete fachliche Prüfung. Gutachterkosten, Legal-Texte, SEO, Legacy-Inhalte und die übrigen gesammelten Layoutbefunde wurden in diesem Korrekturschritt nicht verändert. Die spätere Nutzerakzeptanz der Sprach- und Fachabweichung ist im Abschlussabschnitt dokumentiert.

## Kontrollierte Überarbeitung der Rechtstexte

Die bestätigten Betreiberangaben wurden als verbindliche Arbeitsgrundlage verwendet. Impressum, Datenschutzerklärung und AGB wurden zunächst auf Deutsch neu gefasst und anschließend sinngleich und kompakt auf Englisch und Russisch übertragen. Die Texte bleiben bis zur geeigneten rechtlichen Prüfung sowie zur menschlichen EN/RU-Sprachprüfung ausdrücklich vorläufig und nicht launchfähig.

Umgesetzter Stand:

- Das Impressum enthält ausschließlich die bestätigten Angaben zu UNEXT GmbH, Anschrift, Geschäftsführer, Kontakt, Handelsregister und Umsatzsteuer-ID.
- Veraltete Platzhalter, der frühere RStV-Verweis und der nicht mehr passende EU-ODR-Hinweis wurden entfernt.
- Die Datenschutzerklärung beschreibt IONOS-Hosting und Server-Protokolle, beide Formulararten, Datenkategorien, Zwecke, Rechtsgrundlagen, Empfänger, Resend, das IONOS-Postfach, Speicherkriterien, Browser-Theme, externe Links, lokale Assets, fehlendes aktives Tracking, Sicherheit, Betroffenenrechte und die Berliner Aufsichtsbehörde.
- Die Hinweise an Kontakt- und Serviceformularen informieren neutral über die Datenverarbeitung. Sie stellen keine Einwilligung als Voraussetzung für die Anfrage dar.
- Die AGB beschreiben die Formulare als unverbindliche Anfragen, die drei Gutachtenarten, Kundenmitwirkung, individuelle Termine, Preise und Zahlungen, fehlende pauschale Ausfallgebühren, keine garantierte Versicherungszahlung, gesetzliche Haftung und den nur bei tatsächlicher Relevanz gesondert zu behandelnden Widerruf.
- Es wird weder behauptet, dass ein Vertrag online geschlossen wird, noch dass bereits ein technischer Prozess für den vorzeitigen Leistungsbeginn existiert.
- Es wurde keine deutsche Vorrangklausel für die drei Sprachfassungen eingeführt.

Read-only eingeordnete Rechts- und Betriebsfragen:

- Datenschutzbeauftragter: Die bekannte Beschäftigtenzahl liegt unter der Schwelle des § 38 BDSG. Zusätzlich wurden die tätigkeitsbezogenen Kriterien aus Art. 37 DSGVO betrachtet. Im aktuellen Website- und Betriebsumfang wurden keine umfangreiche regelmäßige Überwachung, keine umfangreiche Verarbeitung besonderer Datenkategorien und keine sonstige erkennbare Pflichtkonstellation festgestellt. Ein Datenschutzbeauftragter wird daher derzeit nicht öffentlich benannt. Die abschließende rechtliche Bewertung bleibt offen.
- Medienstaatsvertrag: Die Website enthält nach aktuellem Stand kein journalistisch-redaktionelles, periodisches Angebot, das einen gesonderten Verantwortlichen nach § 18 Abs. 2 MStV erfordert. Die abschließende rechtliche Bewertung bleibt offen.
- Verbraucherstreitbeilegung: Bei höchstens zehn Beschäftigten zum 31. Dezember 2025 und ohne freiwillige Teilnahme oder bekannte Verpflichtung wird derzeit keine öffentliche Erklärung nach § 36 VSBG ergänzt. Eine gegebenenfalls fallbezogene Information nach § 37 VSBG bleibt ein interner Prozesspunkt.
- Dienstleistungsinformationen: Die bestätigten Anbieter- und Kontaktdaten sind im Impressum verfügbar. Vor einem schriftlichen Vertrag beziehungsweise vor Leistungserbringung muss operativ geprüft werden, dass alle im Einzelfall erforderlichen Informationen nach DL-InfoV rechtzeitig bereitgestellt werden.
- Auftragsverarbeitung: IONOS stellt einen Vertrag zur Auftragsverarbeitung bereit; Resend stellt ein DPA mit Angaben zu US-Verarbeitung und Transfermechanismen bereit. Ob diese Vertragsunterlagen in den tatsächlich genutzten Konten wirksam einbezogen beziehungsweise abgeschlossen sind, ist noch nicht belegt und muss vor Launch intern geprüft werden.
- AGB und Widerruf: Die wirksame Einbeziehung der AGB sowie ein gegebenenfalls erforderlicher Widerrufs- und Prozess für einen vorzeitigen Leistungsbeginn müssen außerhalb des reinen Anfrageformulars operativ und rechtlich geprüft werden.

Verwendete Primärquellen:

- § 5 DDG, § 18 MStV, DSGVO, § 38 BDSG, § 25 TDDDG, §§ 305 und 307 BGB, §§ 312b, 312d, 312f, 312g, 312j, 355 und 356 BGB, Art. 246a § 1 EGBGB, §§ 36 und 37 VSBG sowie DL-InfoV;
- offizielle Kontaktdaten der Berliner Beauftragten für Datenschutz und Informationsfreiheit;
- offizielle Datenschutz-, Hosting-, AVV- und Protokollhinweise von IONOS;
- offizielle Privacy-, DPA-, Subprocessor- und Regionshinweise von Resend.

Offene Launch-Gates:

- geeignete beziehungsweise qualifizierte Prüfung der deutschen Rechtstexte;
- menschliche und rechtlich geeignete Prüfung der englischen und russischen Fassungen;
- Prüfung der tatsächlichen AVV-/DPA-Einbeziehung in den IONOS- und Resend-Konten;
- operative Prüfung der AGB-Einbeziehung, DL-InfoV-Informationen, Widerrufsbelehrung und eines gegebenenfalls gewünschten vorzeitigen Leistungsbeginns;
- fallbezogener interner Prozess für § 37 VSBG.

Prüfstand dieses Rechtstext-Schritts:

- git diff --check, ESLint, TypeScript und Produktions-Build bestanden; der Build erzeugt weiterhin 49 Seiten.
- Impressum, Datenschutz und AGB wurden in DE, EN und RU bei 390, 768 und 1440 px geprüft: 27 Seiten-/Viewport-Kombinationen liefern HTTP 200, enthalten die erwarteten Kernangaben und zeigen keinen horizontalen Overflow.
- Neun repräsentative Sprachwechsel zwischen den drei Legal-Seiten bewahren den Seitenkontext.
- In der Produktionsvorschau traten keine Console-, Hydration-, Request- oder Page-Fehler auf.
- 27 Fullpage-Screenshots und der maschinenlesbare QA-Bericht liegen ausschließlich außerhalb des Repositorys unter C:/tmp/unext-task-051-legal-review/.
- Der lokale Skill typography-line-break-check wurde für Textbreiten, Überschriften und Überlaufkontrolle herangezogen. Die direkte Bildansicht des Agenten war wegen einer Windows-Sandbox-Störung des Bildwerkzeugs nicht möglich; die Screenshots bleiben deshalb zusätzlich für die persönliche Sichtprüfung des Nutzers erhalten.
- next-env.d.ts blieb unverändert.
Dieser Schritt ändert keine Metadata, Structured Data, Routen, Assets, Environment-Konfiguration oder Projektplanung. ROADMAP.md bleibt deshalb unverändert.
## Kontrollierter Korrekturstand für Sprache, Parität, Layout und Formulare

Die priorisierten Befunde aus dem vollständigen DE/EN/RU-Text- und Sichtvergleich wurden kontrolliert bearbeitet. Deutsch bleibt die fachliche Referenz; die Fassungen in Englisch und Russisch bleiben bis zur menschlichen Sprachprüfung vorläufig.

Umgesetzt wurden:

- konsistente sichtbare Begriffe für Vehicle appraisal services, Accident damage appraisal, Vehicle valuation, Vehicle damage documentation und enquiry;
- konsistente russische Begriffe für Arten der Autoexpertise, die Bewertung des Unfallschadens, die Fahrzeugbewertung, die Fixierung von Schäden und den merkantilen Minderwert;
- ein klarer DESAG-Bezug in den englischen und russischen Trustaussagen ohne staatliche oder behördliche Anerkennungsbehauptung;
- die Entfernung des deutschen Resttexts zur Zulassungsbescheinigung aus der russischen Unfallgutachtenseite;
- die Entfernung einer doppelten Wortwiederholung im russischen Schadendokumentationsformular;
- die korrekte russische Bedeutung von unverbindlicher Anfrage sowie von Rechten und Ansprüchen in den vorläufigen Rechtstexten;
- eine gemeinsame responsive Hero-Grundlogik für DE, EN und RU;
- ein gemeinsames Kartenraster mit einer Spalte auf Mobile, zwei Spalten und zentrierter dritter Karte auf Tablet sowie drei Spalten auf Desktop;
- eine gemeinsame lokalisierte Clientvalidierung für Kontakt- und Gutachtenformulare auf Grundlage derselben Zod-Schemas wie die Servervalidierung;
- lokalisierte Pflichtfeld-, E-Mail-, Längen- und Datumsfehler mit Fokus auf das erste ungültige Feld, `aria-invalid`, `aria-describedby` und sichtbaren `role="alert"`-Meldungen;
- Schutz vor ungültigen und doppelten Übermittlungen, während gültige Daten weiterhin den bestehenden Server-Action-Ablauf verwenden.

Prüfstand:

- `git diff --check`, ESLint, TypeScript und Produktions-Build bestanden; der Build erzeugt 49 Seiten.
- `next-router-check` prüfte 33 UI-Routen und 18 datenladende Routen ohne fehlende Pflichtgrenzen.
- Startseiten, neun Gutachtenrouten, Kontaktformulare und die korrigierten russischen Rechtstextstellen wurden bei 390, 768 und 1440 Pixeln geprüft.
- DE, EN und RU verwenden bei 1440 Pixeln denselben 1031 Pixel hohen Hero-Rahmen und bei 768 Pixeln denselben 955 Pixel hohen Rahmen. Mobile bleibt textabhängig flexibel und vollständig sichtbar.
- In den geprüften Seiten traten kein horizontaler Overflow, keine Console-, Hydration-, Request- oder fehlerhaften HTTP-Antworten auf.
- Ungültige Formularprüfungen lösten keine POST-Anfrage aus. Tastatur-Submit, Fehlerkorrektur, Fokusführung und die Feldverknüpfungen wurden geprüft.
- Accessibility-, Mobile-, Desktop-, Content-, Typografie- und allgemeine Qualitätsprüfungen wurden ausgeführt. Die zusätzliche menschliche Sichtprüfung bleibt Teil der Nutzerfreigabe.
- Screenshots, Laufzeitdaten und der aktualisierte Textvergleich liegen ausschließlich unter `C:/tmp/unext-task-051-corrections-review/`.
- `next-env.d.ts` und `ROADMAP.md` blieben unverändert.

Weiterhin offen und nicht als erledigt markiert:

- menschliche englische Sprachfreigabe;
- menschliche russische Sprachfreigabe;
- geeignete fachliche Prüfung sensibler Gutachten-, Versicherungs-, Kosten- und Trustaussagen;
- geeignete beziehungsweise qualifizierte Rechtsprüfung der drei vorläufigen Rechtstextfassungen;
- ausdrückliche Nutzerfreigabe des korrigierten Preview-Stands.

Historischer Zwischenstand: Aufgabe 051 war zu diesem Prüfzeitpunkt noch nicht formal abgeschlossen.

## Enger Korrekturschritt für bestätigte Sprach- und Accessibility-Befunde

Das bestätigte externe Sprachfeedback wurde ohne strukturellen Umbau auf die vorläufigen EN/RU-V1-Fassungen angewendet. Fehlende Einleitungen auf den Gutachtenseiten, verkürzte russische Detailbeschreibungen und ausgewählte unnatürliche englische UI-Texte wurden an die deutsche Referenz angeglichen. Die russische Unfallgutachten-Überschrift bleibt grammatisch korrekt auf Berlin bezogen; DESAG-Aussagen nennen DESAG ausdrücklich als prüfende und anerkennende Organisation und behaupten keine staatliche Anerkennung.

Accessibility-Texte wurden pro Sprache ergänzt: Die drei Startseitenbilder besitzen lokalisierte Alternativtexte, das mobile Menü eine lokalisierte Schließen-Beschriftung und die Footer-Navigation ein sprachspezifisches `aria-label`. Die kurzen englischen Kartenaktionen behalten über vollständige zugängliche Namen ein eindeutiges Ziel. Der zusammengesetzte englische Startseiten-H1 besitzt einen grammatisch vollständigen Screenreader-Text, ohne die sichtbare Zeilenaufteilung zu verändern.

Die deutsche FAQ-Antwort zu vorab gesendeten Fotos war bereits vollständig vorhanden und wurde nicht dupliziert. Der frühere Befund wird ausschließlich als Zuordnungsfehler der externen Inventur korrigiert. Rechtstexte, Routing, Redirects, Assets und technische SEO-Dateien blieben außerhalb dieses Schritts. Der `UNFALLX`-Metadata-Befund bleibt Aufgabe 029 zugeordnet.

An diesem historischen Zwischenstand waren die menschlichen EN/RU-Sprachfreigaben, geeignete Fachprüfungen sensibler Gutachten-, Versicherungs-, Kosten- und DESAG-Aussagen sowie die geeignete Rechtsprüfung der vorläufigen Rechtstexte noch offen. Für `Wiederbeschaffungswert` wurde bewusst kein neuer russischer Fachbegriff festgelegt. Die spätere Nutzerakzeptanz der Sprach- und Fachabweichung sowie die weiterhin offene Rechtsprüfung sind im Abschlussabschnitt dokumentiert.

## Enger visueller Paritätsabgleich

Die bestätigten Layoutabweichungen der lokalisierten Gutachtenseiten wurden mit der bereits vorhandenen gemeinsamen Layoutlogik korrigiert. Die EN/RU-Merkmale der Fahrzeugbewertung sowie beide umfangreichen EN/RU-Bereiche der Schadendokumentation nutzen auf Tablet und Desktop nun wie die deutsche Referenz breite Karten mit responsiven Inhaltsrastern; Mobile bleibt einspaltig.

Die drei englischen Detailseiten erhalten ab Tablet moderat mehr H1-Breite, ohne Texte, Schriftgröße oder Zeilenumbrüche manuell zu verändern. Ihre FAQ-Bereichsüberschrift lautet einheitlich `Frequently asked questions`. Der gemeinsame Startseiten-Hero nutzt ausschließlich auf Desktop einen größeren responsiven oberen Innenabstand, damit der Inhalt im vorhandenen Hero-Rahmen ausgewogener steht. Hero-Höhe, Bilder, Bildausschnitte, Texte und Tablet-/Mobile-Layout bleiben unverändert.

In diesem historischen Korrekturschritt blieben weitere sichtbare Texte, deutsche und russische Inhalte, Rechtstexte, Formulare, Routen, Redirects, technische SEO-Dateien, Navigation und Assets bewusst unverändert. Menschliche EN/RU-Sprachfreigaben sowie geeignete Fach- und Rechtsprüfungen waren zu diesem Zeitpunkt noch offen. Die spätere Nutzerentscheidung zu Sprach- und Fachabweichungen sowie die weiterhin offene Rechtsprüfung sind im Abschlussabschnitt dokumentiert.

## Letzter CTA-, Überschriften- und Desktop-Hero-Feinschliff

Die vorbereitenden Formularlinks der englischen und russischen Gutachtenseiten verwenden nun die kurzen sichtbaren Beschriftungen `Make an enquiry` beziehungsweise `Оставить заявку`. Ihre lokalisierten zugänglichen Namen nennen zusätzlich die jeweilige Gutachtenart. Die tatsächlichen Submit-Buttons sind davon sprachlich eindeutig getrennt und lauten sichtbar `Send enquiry` beziehungsweise `Отправить заявку`; auch hier bleibt der fachliche Kontext im zugänglichen Namen erhalten. Der allgemeine Kontakt verwendet entsprechend `Send enquiry to UNEXT` beziehungsweise `Отправить заявку в UNEXT`.

Für die längeren englischen und russischen Kontakt-H1 wurde ausschließlich die verfügbare responsive Textbreite moderat erweitert und eine ausgeglichene Umbruchregel genutzt. Sichtbare Überschriftentexte, deutsche Texte und die Überschriftenhierarchie blieben unverändert; es wurden keine kürzeren Überschriften vorgeschlagen oder eigenständig formuliert. Der gemeinsame Startseiten-Hero erhält ausschließlich auf Desktop etwas mehr responsiven oberen Innenabstand. Hero-Höhe, Bild, Bildausschnitt, Schriftgrößen sowie Mobile- und Tablet-Positionierung bleiben unverändert.

In diesem historischen Korrekturschritt blieben akzeptierte Kartenraster und Detailbereiche, Rechtstexte, Formularvalidierung und Server Actions, Routing, Redirects, technische SEO-Dateien, Navigation und Assets bewusst unverändert. Menschliche EN-/RU-Sprachfreigaben sowie geeignete Fach- und Rechtsprüfungen waren zu diesem Zeitpunkt noch offen. Die spätere Nutzerentscheidung zu Sprach- und Fachabweichungen sowie die weiterhin offene Rechtsprüfung sind im Abschlussabschnitt dokumentiert. `ROADMAP.md` blieb bei diesem Zwischenstand unverändert, weil sich weder Projektplanung noch Reihenfolge oder Prioritäten geändert hatten.

Der Feinschliff wurde in 44 Seiten-/Viewport-Kombinationen bei 390, 768, 1440 × 900 und 1440 × 1100 Pixeln ohne HTTP-, Console-, Hydration-, Request-, Bild- oder Overflowfehler geprüft. Alle 18 Sprachwechselrichtungen der drei Gutachtenarten bewahren den fachlichen Seitenkontext. 36 Fullpage-Screenshots und 16 deterministische Vergleichsbilder wurden tatsächlich visuell geprüft und liegen ausschließlich außerhalb des Repositorys unter `C:/tmp/unext-task-051-final-cta-linebreak-review/20260805-223500/`. Die geänderten CTA-Texte sind sichtbar einzeilig und unbeschnitten. `next-router-check` prüfte 33 UI-Routen, davon 16 nach seiner Datenlade-Heuristik, ohne fehlende Pflichtgrenzen.

## Kontrollierte Satztrennung der EN/RU-Abschluss-CTAs

Die jeweils zwei bestehenden Beschreibungssätze der Abschluss-CTAs auf den sechs englischen und russischen Gutachtenseiten werden mit der vorhandenen gemeinsamen CTA-Logik als getrennte Textblöcke gerendert. Der zweite Satz beginnt dadurch bewusst in einem neuen Block, während beide Sätze innerhalb ihres Blocks weiterhin responsiv und ohne erzwungene Einzeiligkeit umbrechen dürfen.

Der sichtbare Wortlaut, die Satzzeichen, CTA-Überschriften, Buttons und zugänglichen Namen blieben unverändert. Deutsche Texte und übrige Seitenbereiche wurden nicht angepasst. Die Untersuchung des roten Entwicklungsindikators, die Einordnung der Router-Check-Zählung und die responsive Sichtprüfung wurden in diesem historischen Korrekturschritt dokumentiert. Menschliche EN/RU-Sprachfreigaben sowie geeignete Fach- und Rechtsprüfungen waren zu diesem Zeitpunkt noch offen. Die spätere Nutzerentscheidung zu Sprach- und Fachabweichungen sowie die weiterhin offene Rechtsprüfung sind im Abschlussabschnitt dokumentiert.

Der technische Diff-Check, ESLint, TypeScript und der Produktions-Build mit 49 Seiten bestanden. Der aktuelle `next-router-check` zählt gemäß seiner dokumentierten Async-/Fetch-Heuristik 16 datenladende lokalisierte Seiten. Die frühere Zahl 18 entstand durch eine breitere Einordnung, die zusätzlich die synchrone deutsche und lokalisierte Catch-all-404-Route mitzählte. Beide Catch-all-Routen rufen ausschließlich `notFound()` auf und werden durch die vorhandenen sprachbezogenen `not-found.tsx`-Grenzen abgedeckt; es fehlt keine Route oder Pflichtgrenze.

Die saubere Produktionsprüfung in Playwright/Chromium bestand für alle sechs EN/RU-Gutachtenseiten bei 390 × 844, 768 × 1024, 1440 × 900 und 1440 × 1100 Pixeln. Alle 24 Kombinationen lieferten HTTP 200, renderten genau zwei blockweise Beschreibungssätze und zeigten keinen horizontalen Overflow, keine abgeschnittenen Texte sowie keine Console-, Hydration-, Request- oder Bildfehler. Die CTA-Überschriften und Aktionsbeschriftungen blieben unverändert. Sechs deutsche Stichproben bei 390 × 844 und 1440 × 1100 Pixeln zeigten keine Regression. Alle 18 Sprachwechselrichtungen bewahren den fachlichen Seitenkontext.

Das rote `1 Issue`-Badge erschien in der sauberen, erweiterungsfreien Produktionssitzung nicht. Es gab kein `nextjs-portal`, keine Browserkonsolenfehler, keine Seitenfehler und keine fehlgeschlagenen Requests. Der frühere Screenshot-Befund ist damit dem Next.js-Entwicklungsindikator beziehungsweise der damaligen Entwicklungswerkzeug-Sitzung zuzuordnen und nicht der Produktionsanwendung.

Unter `C:/tmp/unext-task-051-final-cta-sentence-review/20260814T173316Z/` liegen 24 gezielte CTA-Ausschnitte, 12 deterministisch zusammengesetzte EN/RU-Vergleichsbilder, vier Kontaktbögen und der maschinenlesbare QA-Bericht. Alle 24 Einzelansichten und 12 Vergleichsbilder wurden über die vier Kontaktbögen tatsächlich visuell geprüft. Mobile, Tablet und beide Desktop-Höhen wirken ruhig; der zweite Satz beginnt überall in einem eigenen Block, darf darin natürlich umbrechen und erzeugt keine unnatürlich große Absatzlücke. Es wurden keine Formulare versendet und keine Resend-Anfragen ausgelöst.

## Letzter Hero-Konsistenzabgleich

Die neun Gutachten-Heros verwendeten bereits dieselbe Komponente, besaßen auf Desktop aber nur gemeinsame vertikale Innenabstände. Ihre Gesamthöhe blieb dadurch vom jeweiligen Titel, Beschreibungstext, Hinweis, CTA und den Merkmalszeilen abhängig. Bei 1440 Pixeln lagen die gemessenen Hero-Höhen vor der Korrektur zwischen 726,4 und 885,9 Pixeln.

Umgesetzt wurden ausschließlich zwei gemeinsame Layoutkorrekturen:

- service-page-layout.tsx verwendet ab Desktop eine responsive Mindesthöhe mit clamp(). Inhalt bleibt wachstumsfähig, sodass längere EN/RU-Fassungen weder abgeschnitten noch durch feste Platzhalter ausgeglichen werden.
- hero-section.tsx verwendet ausschließlich ab xl einen größeren gemeinsamen horizontalen Gutter. Die Inhaltsbreite, Schriftgrößen, vertikale Position, Hero-Höhe, Hintergrundbilder und Bildfokuspunkte bleiben unverändert.

Prüfergebnis:

- Alle neun Gutachten-Heros sind bei 1440 × 1100 und 2048 × 1100 Pixeln exakt 912 Pixel hoch.
- Alle neun Hintergrundbilder füllen jeweils die vollständigen 912 Pixel ohne Verzerrung oder leeren Streifen.
- Der nachfolgende Abschnitt beginnt in beiden Desktop-Viewports auf allen neun Seiten einheitlich bei y = 981 Pixeln.
- Auf der Startseite beginnt der Hero-Inhalt bei 1440 Pixeln bei x = 115,2 Pixeln und bei 2048 Pixeln bei x = 160 Pixeln. Bei 768 Pixeln bleibt der bisherige Einzug von 38,4 Pixeln unverändert.
- Mobile und Tablet bleiben inhaltsabhängig flexibel. Bei 390 und 768 Pixeln sind alle Texte, Trustbereiche und CTAs vollständig sichtbar; es gibt keinen horizontalen Overflow.
- Sichtbare Texte, Übersetzungen, Schriftgrößen, CTA-Beschriftungen, Navigation, Formulare, Routen, Redirects, technische SEO-Dateien und Assets blieben unverändert.
- 48 Fullpage-Screenshots und 24 gezielte Hero-Screenshots wurden unter C:/tmp/unext-task-051-final-hero-consistency-review/2026-08-14T20-02-56-761Z/ erstellt. Die Aufnahmen wurden über 16 zusätzliche Kontaktblätter und vollständig geladene kompakte Vorschauen tatsächlich visuell geprüft.
- Alle 48 Seiten-/Viewport-Kombinationen lieferten HTTP 200 ohne horizontalen Overflow, Console-, Hydration-, Page- oder Requestfehler. Sichtbare Bilder wurden in den Aufnahmen korrekt geladen.
- Alle 18 Sprachwechselrichtungen der drei Gutachtenarten bewahren den fachlichen Seitenkontext.
- git diff --check, ESLint, TypeScript und der Produktions-Build mit 49 Seiten bestanden.
- next-router-check prüfte 33 UI-Routen und 16 datenladende lokalisierte Seiten. Loading-, Error- und erforderliche Not-found-Grenzen fehlen nicht.
- Accessibility-, Mobile-, Desktop-, Typografie- und allgemeine Codequalitätsprüfungen fanden keine aufgabenbezogenen Verstöße. Die direkte lokale Bildansicht der Reviewer war unter der Windows-Sandbox eingeschränkt; die Hauptprüfung öffnete die vollständigen Kontaktblätter deshalb über vollständig übertragene, unverzerrte Vorschauen.
- next-env.d.ts blieb unverändert. ROADMAP.md bleibt unverändert, weil sich Projektplanung, Reihenfolge und Prioritäten nicht geändert haben.
- Der Produktionsserver läuft mit dem aktuellen Build auf Port 3000 für die persönliche Sichtprüfung weiter.

Historischer Zwischenstand: Aufgabe 051 war zu diesem Prüfzeitpunkt noch nicht formal abgeschlossen.

## Letzter russischer CTA-Breitenabgleich

Der erste Satz der russischen Abschluss-CTA-Beschreibung beim Unfallgutachten war bereits als eigener Block ausgezeichnet. Die gemeinsame `measure-intro`-Begrenzung auf `66ch` ließ bei 1440 und 2048 Pixeln jedoch nur knapp zu wenig Platz, sodass `в форме.` als kurze dritte Beschreibungslinie isoliert wurde.

Die gemeinsame CTA-Komponente überschreibt die Textbreite deshalb ausschließlich ab Desktop responsiv mit maximal `72ch`. Die Regel gilt für alle Sprachen und nutzt die vorhandene linke Textspalte besser, ohne deren Grid-/Flex-Aufteilung oder die rechte Buttonspalte zu verändern. Wortlaut, Satzzeichen, Schriftgrößen, CTA-Überschriften, Buttons und zugängliche Namen blieben unverändert. Mobile und Tablet verwenden weiterhin die bestehende natürliche Breitenbegrenzung.

Prüfergebnis:

- Beim russischen Unfallgutachten stehen bei 1440 × 900, 1440 × 1100 und 2048 × 996 Pixeln beide vollständigen Beschreibungssätze jeweils in einer eigenen Zeile. `в форме.` erscheint nicht mehr isoliert.
- Bei 390 × 844 und 768 × 1024 Pixeln darf der Text weiterhin natürlich umbrechen; alle Inhalte und Buttons bleiben vollständig sichtbar.
- Die russische Überschrift bleibt auf den Desktopansichten zweizeilig. Buttonbreiten, Beschriftungen und Proportionen blieben unverändert.
- Deutsche und englische Unfallgutachten-CTAs sowie die englischen und russischen Abschluss-CTAs von Fahrzeugbewertung und Schadendokumentation zeigen keine aufgabenbezogene Regression.
- 17 gezielte CTA-Screenshots und der maschinenlesbare QA-Bericht liegen ausschließlich außerhalb des Repositorys unter `C:/tmp/unext-task-051-final-ru-cta-copy-width-review/2026-08-15T20-07-28-539Z/`. Alle Ansichten wurden über Kontaktblätter und eine lesbare russische Desktop-Einzelansicht tatsächlich visuell geprüft.
- Alle geprüften Seiten lieferten HTTP 200 ohne horizontalen Overflow, Console-, Hydration-, Page-, Request- oder sichtbare Bildfehler.
- `git diff --check`, ESLint, TypeScript und der Produktions-Build mit 49 Seiten bestanden. Der Router-Check prüfte 33 UI-Routen und 16 datenladende Seiten ohne fehlende Pflichtgrenzen.
- Accessibility-, Mobile-, Desktop-, Typografie- und Codequalitätsprüfung fanden keine Blocker oder aufgabenbezogenen Verstöße. Der unterschiedliche deutsche CTA-Überschriftenumbruch zwischen 1440 und 2048 Pixeln war bereits im vorherigen Referenzstand vorhanden und wurde durch diesen engen Beschreibungstext-Schritt nicht verändert.
- `next-env.d.ts` blieb unverändert. `ROADMAP.md` bleibt unverändert, weil sich Projektplanung, Reihenfolge und Prioritäten nicht geändert haben.
- Der Produktionsserver läuft mit dem aktuellen Build auf Port 3000 für die persönliche Sichtprüfung weiter.

Historischer Zwischenstand: Aufgabe 051 war zu diesem Prüfzeitpunkt noch nicht formal abgeschlossen.

## Abschließende Vereinheitlichung der DE/EN/RU-Abschluss-CTAs

Die Abschlussbereiche von Unfallgutachten, Fahrzeugbewertung und Schadendokumentation verwenden jetzt in DE, EN und RU die bestätigten leistungsspezifischen Überschriften und jeweils zwei kurze Beschreibungssätze. Die sichtbaren Aktionsbeschriftungen sind innerhalb jeder Sprache einheitlich: `Jetzt anrufen`, `WhatsApp schreiben`, `Anfrage stellen`; `Call now`, `Message us on WhatsApp`, `Make an enquiry`; sowie `Позвонить`, `Написать в WhatsApp`, `Оставить заявку`.

Der Anfrage-Link besitzt auf jeder Seite einen lokalisierten zugänglichen Namen mit eindeutigem Leistungsbezug. Telefon- und WhatsApp-Link verwenden ihren vollständigen sichtbaren Text als zugänglichen Namen. Hero-Aktionen, Formular-Submit-Buttons, Formulare, Routen, Navigation, Rechtstexte, technische SEO-Dateien und Assets blieben unverändert.

Die gemeinsame CTA-Komponente akzeptiert einen einzelnen Beschreibungstext oder mehrere Sätze und rendert mehrere Sätze semantisch als getrennte Absätze. `text-balance` sorgt auf kleinen Viewports für ruhige Umbrüche, ohne manuelle Zeilenumbrüche, `nowrap`, feste Höhen oder kleinere Schriftgrößen. Ab `2xl` nutzt der CTA-Container mehr der verfügbaren Breite, damit lange Überschriften keine unnötigen Restzeilen erzeugen; der Inhalt bleibt vollständig responsiv und darf natürlich wachsen.

Prüfergebnis:

- Alle 45 Seiten-/Viewport-Kombinationen aus drei Leistungen, drei Sprachen und 390 × 844, 768 × 1024, 1366 × 900, 1440 × 1100 sowie 2048 × 996 Pixeln lieferten HTTP 200.
- Es gab keine Console-, Hydration-, Page-, Request-, Bild-, Overflow-, Überlappungs-, semantischen oder Buttonfehler.
- Auf den drei Desktop-Breiten steht jeder Beschreibungssatz vollständig in einer Zeile. Lange russische Überschriften dürfen kontrolliert zweizeilig bleiben.
- Mobile und Tablet zeigen natürliche, balancierte Umbrüche ohne isolierte Wörter oder problematische Restzeilen; alle Aktionsbeschriftungen bleiben vollständig sichtbar.
- Alle 18 Sprachwechselrichtungen der drei Gutachtenarten bewahren den fachlichen Seitenkontext.
- 45 Fullpage-Screenshots, 45 gezielte CTA-Ausschnitte und 15 deterministische DE/EN/RU-Vergleichsbilder liegen ausschließlich außerhalb des Repositorys unter `C:/tmp/unext-task-051-unified-final-cta-review/2026-08-16T18-12-50-298Z/`. Alle 15 Vergleichsbilder wurden tatsächlich einzeln geöffnet und visuell geprüft.
- Accessibility-, Mobile-, Desktop-, Content- und Codequalitätsprüfung fanden keine durch den Arbeitsschritt eingeführten Verstöße oder Blocker. Mobile und Desktop sind ohne Überläufe oder problematische Umbrüche launch-ready; die Content-Prüfung bestätigte die konsistente CTA-Tonalität und Premium-Wirkung.
- Die bereits zuvor vorhandenen kebab-case-Dateinamen der gemeinsamen CTA- und Service-Layout-Komponenten sind kein durch diesen Diff eingeführter Naming-Verstoß und bleiben wegen der Scope-Regel unverändert. Die unterschiedliche englische Leistungsbezeichnung im bestehenden Hero (`accident damage appraisal`) und im bestätigten Abschluss-CTA (`accident appraisal`) ist ein nicht blockierender Bestandsbefund für einen möglichen späteren Text-Review; der Hero war ausdrücklich nicht Teil dieses Arbeitsschritts.
- ESLint, TypeScript und der Produktions-Build mit 49 Seiten bestanden. `next-env.d.ts` blieb unverändert.
- `ROADMAP.md` bleibt unverändert, weil sich Projektplanung, Reihenfolge und Prioritäten nicht geändert haben.

Die bestätigten CTA-Texte ersetzten zu diesem Zeitpunkt keine allgemeine menschliche EN-/RU-Sprach-, Fach- oder Rechtsfreigabe. Die Aufgabe war für die persönliche Sichtprüfung noch nicht formal abgeschlossen. Die spätere Nutzerentscheidung zu Sprach- und Fachabweichungen sowie die weiterhin offene Rechtsprüfung sind im Abschlussabschnitt dokumentiert. Es wurden keine Formulare versendet und keine Resend-Anfragen ausgelöst.

## Letzte englische Textkorrekturen und akzeptierte Abweichungen

Drei in der abschließenden Textprüfung bestätigte englische Formulierungen wurden eng begrenzt korrigiert: zweimal wurde der Übermittlungsweg für Unterlagen beziehungsweise Fotos natürlich formuliert, und im Schadendokumentationsbereich beschreibt `recorded` jetzt eindeutig das Festhalten eines Fahrzeugzustands. Weitere sichtbare Texte, Überschriften, CTAs, Formulare, zugängliche Namen, Layouts, Routen, SEO-, Metadata-, Structured-Data-, Legal- oder Assetbereiche bleiben unverändert.

Der Nutzer akzeptiert die aktuellen englischen und russischen Texte für Aufgabe 051 ausdrücklich, obwohl keine zusätzliche professionelle EN-/RU-Sprachprüfung durchgeführt wurde. Später entdeckte sprachliche Fehler dürfen nachträglich korrigiert werden. Ebenso bestätigt der Nutzer die aktuell sichtbaren fachlichen Aussagen für diesen Projektstand vorläufig; später entdeckte fachliche Fehler oder ungenaue Aussagen dürfen nachträglich korrigiert werden. Die fehlende zusätzliche professionelle Sprach- und Fachprüfung ist damit als ausdrücklich akzeptierte Abweichung dokumentiert.

Diese Nutzerentscheidung ersetzt keine geeignete externe Rechtsprüfung. Impressum, Datenschutz und AGB bleiben rechtlich vorläufig und müssen vor dem Launch extern geprüft werden. IONOS-AVV, Resend-DPA, echter Formularversand, Deployment, SEO, Legacy-Cleanup und finale Launch-QA bleiben den bereits vorgesehenen Folgeaufgaben zugeordnet. Historischer Zwischenstand dieses Korrekturschritts: Aufgabe 051 war zu diesem Zeitpunkt noch nicht formal abgeschlossen.

## Abschluss

Abschlussdatum: 16.08.2026

Aufgabe 051 ist nach ausdrücklicher Nutzerfreigabe formal abgeschlossen. Die englischen und russischen V1-Kernwege wurden auf Grundlage der deutschen Referenz umgesetzt. Sechs neue EN/RU-Gutachtenartenrouten, alle neun DE/EN/RU-Gutachtenseiten, direkte permanente Redirects der alten EN/RU-Unfallgutachtenrouten, kontexttreue Sprachwechsel, lokalisierte Navigation, Formulare, Validierung, Servermeldungen, Error- und 404-Zustände sowie die gemeinsamen responsiven Hero-, Karten-, Formular- und CTA-Bereiche sind enthalten.

`git diff --check`, ESLint, TypeScript und der Produktions-Build mit 49 Seiten wurden im Abschlusslauf bestanden. Der vollständig wiederholte `next-router-check` prüfte 33 UI-Routen und 16 datenladende Seiten ohne fehlende Loading-, Error- oder erforderliche Not-found-Grenzen. Die dokumentierten Browser-, Responsive-, Accessibility-, Sprachwechsel- und visuellen Prüfungen bleiben gültig. Der letzte Textkorrekturstand wurde zusätzlich auf den betroffenen englischen Seiten bei 390, 768 und 1440 Pixeln ohne Overflow, abgeschnittene Inhalte oder Laufzeitfehler geprüft. Es wurden keine Formulare versendet und keine Resend-Anfragen ausgelöst.

Der Nutzer akzeptiert die aktuellen EN-/RU-Texte und fachlichen Aussagen für diesen Projektstand ausdrücklich ohne zusätzliche professionelle Sprach- und Fachprüfung. Diese akzeptierte Abweichung bleibt dokumentiert; spätere sprachliche und fachliche Korrekturen sind möglich. Sie ersetzt keine geeignete externe Rechtsprüfung. Impressum, Datenschutz und AGB bleiben rechtlich vorläufig und vor dem Launch extern zu prüfen.

SEO und Metadata bleiben Aufgabe 029, Legacy-Cleanup bleibt Aufgabe 026, finale Launch-, Accessibility-, Routing- und Performance-QA bleibt Aufgabe 033, IONOS-AVV, Resend-DPA, Deployment und echter Formularversand bleiben Aufgabe 034, und Monitoring bleibt Aufgabe 035. Der Abschluss von Aufgabe 051 bedeutet ausdrücklich nicht, dass die Website launchbereit ist. Es wurde keine Folgeaufgabe gestartet.

## Zuordnung zu Folgeaufgaben

- 029: technische SEO-Endarbeit für Metadata, Canonicals, Hreflang, Sitemap, Robots und Structured Data;
- 026: verwendungsgeprüfter Cleanup alter Leistungsstrukturen, Komponenten, Daten, Texte und Assets;
- 033: abschließende Launch-, Accessibility-, Performance-, Routing-, Sprach- und Responsive-QA;
- 034: Deployment, Environment und echter Formularversand;
- 035: Monitoring nach dem Launch;
- 022, 023 und 024: spätere Ausbaustufen für Supabase, KI und Portal.

## Vorgehen

1. Konkreten Dateiplan erstellen und ausdrücklich freigeben lassen.
2. EN/RU-Entwürfe vorläufig auf dem lokalen Branch umsetzen.
3. EN/RU-Seiten bei 390, 768 und 1440 px sichtbar machen.
4. Visuelle und inhaltliche Rückmeldung des Nutzers einarbeiten.
5. Menschliche EN- und RU-Sprachprüfung dokumentieren.
6. Fachlich sensible Aussagen zusätzlich prüfen.
7. Rechtstexte nur nach geeigneter Freigabe als launchfähig behandeln.
8. Reviewer, responsive, funktionale und technische Prüfungen vollständig ausführen.
9. Akzeptanzkriterien einzeln nachweisen und Aufgabe zur ausdrücklichen Abschlussfreigabe vorlegen.

## Akzeptanzkriterien

- Alle freigegebenen V1-Kernseiten besitzen vollständige, fachlich gleichwertige EN- und RU-Versionen.
- Startseite, Über uns, Kontakt, Header, Footer und Mobile-Navigation sind in EN/RU vollständig und frei vom alten, nicht freigegebenen Leistungs-Scope.
- Unfallgutachten, Fahrzeugbewertung und Schadendokumentation sind in DE, EN und RU vorhanden.
- Alle neun geplanten Gutachtenartenrouten funktionieren.
- Die alten EN/RU-Unfallgutachten-Routen leiten direkt und permanent ohne Ketten oder Schleifen auf die neuen Ziele.
- Der Sprachwechsel erhält bei allen Kern- und Legal-Seiten den fachlichen Kontext in allen sechs Richtungen.
- Es gibt keinen stillen Fallback auf eine fachlich unpassende Startseite.
- EN/RU-Navigation und interne Links sind vollständig und verweisen nicht auf fehlende Ziele.
- Alte, nicht freigegebene Leistungswerbung ist in den V1-Nutzerwegen nicht mehr sichtbar.
- EN/RU-Texte sind natürlich, kompakt und nicht stärker als die deutsche Referenz formuliert.
- Die menschliche EN-Freigabe ist dokumentiert.
- Die menschliche RU-Freigabe ist dokumentiert.
- Fachlich sensible Aussagen sind geeignet geprüft.
- Rechtstexte sind geeignet geprüft oder bis zur Freigabe nicht als launchfähig eingeordnet.
- Trust- und Unternehmensdaten sind in DE/EN/RU inhaltlich identisch.
- Kontakt- und Serviceformulare sind einschließlich Labels, Hilfetexten, Validierung, Fehlern, Erfolg und Datenschutzkontext vollständig lokalisiert.
- Error- und 404-Zustände bewahren die aktuelle Sprache und bieten lokalisierte Wiederherstellungswege.
- EN und RU wurden jeweils bei 390, 768 und 1440 px geprüft.
- Es gibt keinen horizontalen Overflow und keine problematischen Text- oder Buttonüberläufe.
- Browserkonsole, Hydration, Requests und Bilder zeigen in den geprüften Kernwegen keine Fehler.
- Accessibility, Tastaturbedienung und Fokusführung wurden geprüft.
- next-router-check wurde nach den Routenänderungen ausgeführt und alle relevanten Befunde wurden behoben oder ausdrücklich zugeordnet.
- git diff --check, npm run lint, npx tsc --noEmit und npm run build sind bestanden.
- Aufgabe 029, 026, 033, 034 und 035 wurden nicht ungeplant vorgezogen oder vermischt.
- Es wurden keine Leistungen, Qualifikationen, Mitgliedschaften oder Versprechen erfunden.
- CHANGELOG.md ist aktualisiert; ROADMAP.md ist nur bei veränderter Projektplanung angepasst.
- Nach der ausdrücklichen Abschlussfreigabe ist Aufgabe 051 mit Status `abgeschlossen` in `workflow/done/` dokumentiert.
