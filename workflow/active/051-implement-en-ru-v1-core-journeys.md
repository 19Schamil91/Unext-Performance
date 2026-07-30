# Aufgabe 051 - EN/RU-V1-Kernseiten, Routen und Nutzerwege umsetzen

## Status

Status: in Arbeit

## Ziel

Die bereits freigegebene deutsche V1-Webseite wird für den gemeinsamen Launch vollständig und qualitativ gleichwertig auf Englisch und Russisch umgesetzt. Deutsch bleibt die fachliche Referenz. EN und RU sollen natürlich, kompakt und zur jeweiligen Sprache passend formuliert werden, ohne stärkere Aussagen, neue Leistungen oder unbestätigte Versprechen einzuführen.

Dieser Startschritt aktiviert und plant die Aufgabe ausschließlich dokumentarisch. EN/RU-Texte und Website-Code dürfen erst nach gesonderter Freigabe der Textentwürfe und des konkreten Dateiplans geändert werden.

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
- keine technischen Änderungen vor Freigabe der EN/RU-Texte und des Dateiplans.

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

### Phase C - Menschliche Freigabe

- EN durch eine geeignete sprachkundige Person prüfen lassen;
- RU durch eine geeignete sprachkundige Person prüfen lassen;
- fachlich sensible Aussagen zusätzlich fachlich prüfen;
- Rechtstexte nur auf geeigneter beziehungsweise freigegebener Übersetzungsgrundlage verwenden;
- Korrekturen und Freigaben nachvollziehbar in der Task dokumentieren.

### Phase D - Technische Umsetzung

Erst nach ausdrücklicher Freigabe von Texten und Dateiplan:

- bestehende Locale-, Daten- und Komponentenstrukturen wiederverwenden;
- deutsche Detailkomponenten locale-fähig machen, statt unnötig zu duplizieren;
- sechs EN/RU-Gutachtenartenrouten ergänzen;
- Navigation, Links, Sprachwechsel, Formulare, Trust, Error und 404 angleichen;
- zwei alte EN/RU-Unfallrouten direkt weiterleiten;
- keine technische SEO-Endarbeit aus Aufgabe 029 vorziehen.

### Phase E - Prüfung

- EN und RU jeweils bei 390, 768 und 1440 px prüfen;
- alle Kernseiten, Navigationen, Formulare und Zustände prüfen;
- Links und Sprachwechsel in alle Richtungen testen;
- Redirects auf Ketten und Schleifen prüfen;
- Browserkonsole, Hydration, Requests und Bilder prüfen;
- Accessibility, Tastatur, Fokus und verständliche Statusmeldungen prüfen;
- Lint, TypeScript und Build ausführen.

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

1. Dieser Plan und die Inventur werden ausdrücklich freigegeben.
2. EN/RU-Textentwürfe und ihre DE-Zuordnung werden separat vorgelegt.
3. Menschliche EN- und RU-Prüfung sowie sensible Fach-/Rechtsprüfung werden dokumentiert.
4. Der konkrete Dateiplan wird vor Codeänderungen freigegeben.
5. Erst danach beginnt die technische Umsetzung.
6. Responsive, funktionale und technische Prüfungen werden vollständig bestanden.
7. Abschluss und Verschiebung nach workflow/done erfolgen nur nach ausdrücklicher Nutzerfreigabe.

## Phase-B-Zwischenstand

Der Plan wurde ausdrücklich für Phase B freigegeben. Die getrennten Textentwürfe liegen hier:

- specs/06-work-plans/task-051-en-content-draft.md
- specs/06-work-plans/task-051-ru-content-draft.md

Beide Dokumente ordnen die Entwürfe über stabile Inhalts-IDs und Abschnittsnamen den aktuellen deutschen Referenztexten zu. Sie decken Navigation, Footer, Startseite, alle drei Gutachtenarten, Über uns, Kontakt, gemeinsame Formulare, Server- und Feldmeldungen sowie Error- und 404-Zustände ab.

Die vorhandenen Legal-Texte werden nicht ungeprüft neu formuliert. Impressum, Datenschutz und AGB bleiben bis zu einer geeigneten beziehungsweise qualifizierten Rechts- und Sprachprüfung ausdrücklich vorläufig.

Noch offen:

- menschliche englische Sprachprüfung;
- menschliche russische Sprachprüfung;
- fachliche Prüfung sensibler Gutachten-, Kosten- und Trust-Aussagen;
- geeignete Prüfung der Rechtstexte;
- ausdrückliche Freigabe der korrigierten Textentwürfe;
- konkreter Dateiplan und dessen Freigabe vor jeder Codeänderung.

Die Entwürfe sind keine menschliche Freigabe. Es wurde noch keine Website-, Übersetzungs-, Routen- oder Codeänderung vorgenommen.

## Zuordnung zu Folgeaufgaben

- 029: technische SEO-Endarbeit für Metadata, Canonicals, Hreflang, Sitemap, Robots und Structured Data;
- 026: verwendungsgeprüfter Cleanup alter Leistungsstrukturen, Komponenten, Daten, Texte und Assets;
- 033: abschließende Launch-, Accessibility-, Performance-, Routing-, Sprach- und Responsive-QA;
- 034: Deployment, Environment und echter Formularversand;
- 035: Monitoring nach dem Launch;
- 022, 023 und 024: spätere Ausbaustufen für Supabase, KI und Portal.

## Vorgehen

1. Plan und Inventur freigeben lassen.
2. Vollständige EN-Textmatrix entwerfen und prüfen lassen.
3. Vollständige RU-Textmatrix entwerfen und prüfen lassen.
4. Fachlich und rechtlich sensible Aussagen gesondert freigeben lassen.
5. Dateiplan und technische Umsetzung freigeben lassen.
6. Routen, Inhalte, Navigation, Sprachwechsel, Formulare und Zustände umsetzen.
7. Reviewer, responsive Prüfungen und technische Checks ausführen.
8. Akzeptanzkriterien einzeln nachweisen.
9. Aufgabe zur Nutzerfreigabe vorlegen.

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
- Aufgabe 051 bleibt bis zur ausdrücklichen Abschlussfreigabe in workflow/active/.
