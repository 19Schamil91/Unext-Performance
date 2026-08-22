# Aufgabe 026 – Code-Cleanup nach Rework

## Status

Status: in Arbeit

## Ziel

Den nach der fachlichen Neuausrichtung verbliebenen Legacy-Bestand in Code, sichtbaren Inhalten, Übersetzungen, Routen, Daten und Assets kontrolliert bereinigen, ohne die freigegebenen DE-/EN-/RU-V1-Nutzerwege, die neun Gutachtenartenrouten, direkte Redirects, Kontaktwege, Rechtstexte oder das in Aufgabe 029 umgesetzte SEO-Modell zu beschädigen.

Der Startschritt umfasste ausschließlich die read-only Bestandsaufnahme und den Cleanup-Plan. Die anschließend ausdrücklich freigegebene erste technische Cleanup-Phase entfernt ausschließlich die unten dokumentierten 52 unerreichbaren Quellmodule. Routen, Redirects, sichtbare Texte, Dependencies, Assets und die Aufhebung eines `noindex`-Zustands bleiben weiterhin außerhalb dieser Freigabe.

## Kontext und verbindliche Grenzen

- Aufgabe 029 ist abgeschlossen. 15 V1-Routen sind indexierbar; 15 V1-Routen bleiben bis zu ihren dokumentierten Gates `noindex`.
- Aufgabe 051 hat die neun Gutachtenarten-Zielrouten in DE, EN und RU umgesetzt. Diese Routen und ihre fachlich passenden Sprachwechsel sind geschützt.
- Die fünf bestehenden permanenten Direkt-Redirects auf Gutachtenarten müssen erhalten bleiben und dürfen keine Ketten oder Schleifen bilden.
- Die fachfremden Servicebereiche Autovermietung, Autoservice/Werkstatt, Detailing, Zulassungsservice und Abschleppdienst/Pannenhilfe sind nicht Teil des V1-Leistungsumfangs, aber weiterhin direkt erreichbar.
- `/leistungen`, `/en/leistungen` und `/ru/leistungen` dürfen ohne ausdrückliche Routenentscheidung weder gelöscht noch umgeleitet werden.
- Rechtstexte werden in Aufgabe 026 nicht inhaltlich geändert. Ihre externe Rechts- und Indexfreigabe bleibt offen.
- Aufgabe 033 bleibt für die finale Launch-QA zuständig; Aufgabe 034 für Deployment, die reale www-Weiterleitung und echten Formularversand; Aufgabe 035 für Monitoring.
- Die Website bleibt nicht launchbereit.

## Verbindliche Grundlagen und Spec-Hierarchie

Geprüft wurden in dieser Reihenfolge:

1. `specs/00-global-spec/global-spec.md`
2. `specs/01-functional-map/functional-map.md`
3. `specs/02-feature-specs/mehrsprachigkeit.md`
4. `specs/02-feature-specs/seo.md`
5. `specs/03-technical-specs/routing.md`
6. `specs/06-work-plans/v1-launch-masterplan.md`
7. `specs/06-work-plans/routing-redirects-old-service-routes.md`
8. `specs/06-work-plans/launch-readiness.md`
9. `specs/07-open-questions/open-questions.md`
10. `DECISIONS.md`, `ROADMAP.md`, `CHANGELOG.md` und die abgeschlossenen Aufgaben 029, 049, 050 und 051

Die im Startauftrag genannten tatsächlichen Dateipfade wurden gefunden. Ältere Querverweise innerhalb abgeschlossener Dokumente verwenden teilweise historische Dateinamen oder Statusstände; daraus wurden keine Ersatzanforderungen erfunden.

## Dokumentierte Widersprüche und überholte Ist-Aussagen

Die folgenden Aussagen in älteren, weiterhin historisch nachvollziehbaren Grundlagen entsprechen nicht mehr dem tatsächlichen, durch Aufgaben 051 und 029 freigegebenen Stand:

- `mehrsprachigkeit.md`, `seo.md` und `routing.md` beschreiben EN-/RU-Gutachtenartenrouten teilweise noch als fehlend oder geplant.
- `v1-launch-masterplan.md`, `routing-redirects-old-service-routes.md` und `open-questions.md` enthalten noch historische Hinweise auf eine spätere EN-/RU-Umsetzung beziehungsweise eine noch ausstehende Aufgabe 029.
- Der tatsächliche Vorrang für diese Ist-Fragen ergibt sich aus `DECISIONS.md` sowie den abgeschlossenen Aufgaben 051 und 029: Die EN-/RU-Kernrouten und die technische dreisprachige SEO-Grundlage sind umgesetzt.

Diese Abweichungen werden in Aufgabe 026 nicht eigenständig in den Specs korrigiert. Eine spätere Dokumentationsbereinigung benötigt eine gesonderte Freigabe und darf historische Nachweise nicht verfälschen.

## Read-only Inventur – Zählweise

Die unabhängige vollständige Read-only-Prüfung vom 18. August 2026 hat **42 logisch gruppierte Kandidateneinheiten** bestätigt. Eine Einheit kann mehrere eng gekoppelte Dateien oder drei sprachlich gespiegelte Routen enthalten; sie zählt unabhängig von der Anzahl ihrer Dateien einmal. Gegenüber der Startinventur wurde der frühere A5-Bildbestand wegen nicht ausschließbarer öffentlicher Direkt-URLs nach F7 verschoben. Zusätzlich wurde mit A10 ein zuvor nicht erfasster, vollständig überschriebener EN-/RU-Übersetzungsbestand aufgenommen.

| Kategorie | Anzahl | Bedeutung |
|---|---:|---|
| A | 9 | Sicher nicht aus aktuellen Routen erreichbar oder ohne Laufzeitreferenz; voraussichtlich entfernbar, aber erst nach Planfreigabe und erneutem Diff-/Build-Nachweis |
| B | 6 | Legacy-Inhalt, der noch sichtbar oder intern verlinkt ist |
| C | 7 | Legacy- oder Übersichtsroute mit dokumentierter späterer Behandlung und technischem Freigabe-/HTTP-Gate |
| D | 10 | Für V1 weiterhin erforderlich oder ein fachlich legitimer Treffer |
| E | 3 | Historische Dokumentation, die erhalten bleiben muss |
| F | 7 | Freigabe, externe Entscheidung oder zusätzliche Laufzeitprüfung erforderlich |
| **Summe** | **42** | |

## Verwendungsinventar A – voraussichtlich sicher entfernbar

| ID | Pfad/Bestand | Nutzung und Sichtbarkeit | Referenzen/Sprachen/SEO | Empfehlung, Risiko, Rollback, Zuständigkeit |
|---|---|---|---|---|
| A1 | `components/sections/express-courier-section.tsx`, `testimonials-section.tsx`, `trust-section.tsx` | Vom Importgraph aus keiner Route erreichbar; keine dynamischen oder stringbasierten Imports; nicht sichtbar | Übersetzungsdaten existieren in DE/EN/RU; keine Metadata-/Sitemap-/Schema-Nutzung | Nach Freigabe gemeinsam mit abhängigen Daten entfernen. Risiko: versteckte externe Einbindung ist im Repository nicht erkennbar. Rollback: eigener Commit/Revert. Zuständig: Phase A |
| A2 | 46 nicht erreichbare `components/ui/*`-Module plus `hooks/use-mobile.ts` und `hooks/use-toast.ts` | 48 Module sind vom vollständigen App-Routen-Importgraph nicht erreichbar; interne Abhängigkeiten innerhalb des ungenutzten Clusters wurden mit erfasst | Keine Route, kein Test und keine Dokumentation bindet sie als Laufzeitbestand ein | Nur als zusammenhängenden Dependency-Graph bereinigen und danach Dependencies separat prüfen. Risiko: künftige, noch nicht eingecheckte Nutzung. Rollback: atomarer Commit. Zuständig: Phase A; Dependency-Entfernung bleibt F1 |
| A3 | `lib/browser-storage.ts` | Vom App-Routen-Importgraph nicht erreichbar; keine direkte, dynamische oder stringbasierte Referenz gefunden | Keine Locale-, Metadata-, Schema- oder Asset-Abhängigkeit | Nach Freigabe entfernen. Risiko gering; Browser-Speicherverhalten im Regressionstest beobachten. Rollback: Datei aus Cleanup-Commit wiederherstellen |
| A4 | `public/placeholder.jpg`, `placeholder.svg`, `placeholder-logo.png`, `placeholder-logo.svg`, `placeholder-user.jpg` | Keine Code-, CSS-, Metadata-, OpenGraph-, Test- oder Dokumentationsreferenz gefunden | Nicht sprachabhängig; nicht in Sitemap/Schema | Nach Freigabe gemeinsam entfernen. Risiko: externe direkte URL unbekannt, fachlich aber reine Platzhalter. Rollback: Asset-Commit revertieren |
| A6 | `public/images/service-express-courier.webp` | Nur durch die nicht erreichbare Express-Kurier-Sektion referenziert | Keine aktive Route/Metadata/Schema-Ausgabe | Zusammen mit A1 entfernen. Risiko/rollback wie A1 |
| A7 | Nicht gerenderte Übersetzungszweige `home.expressCourier`, `home.testimonials` und `home.trust` in `lib/translations/home.ts`/`home-overrides.ts` | Ausschließlich von A1 referenziert; aktuelle Startseite importiert die drei Sektionen nicht | DE/EN/RU; keine aktive SEO-Ausgabe | Nach Entfernung von A1 typgesichert reduzieren. Risiko: Spread-/Override-Struktur; TypeScript und vollständige dreisprachige Regression erforderlich |
| A8 | `aboutTranslationOverrides` und `aboutPage`-Daten in `about-overrides.ts`/`services-and-about.ts` sowie deren Zusammenführung in `translations.ts` | `AboutPageContent.tsx` verwendet eigenen aktuellen Inhalt und nur `home.cta`; kein Verbraucher liest `getTranslations(...).aboutPage` | DE/EN/RU; About-Metadata liegt separat in `metadata.ts` | Nach Freigabe daten- und importseitig entfernen. Risiko: unbeabsichtigte Typänderung; Rollback über separaten Daten-Commit |
| A9 | Alte `serviceContacts*`-Felder in `lib/translations/contact.ts` | `contact-page-client.tsx` liest diese Felder nicht; keine sichtbare Ausgabe oder Formularauswahl | EN/RU-Altleistungen, keine SEO-/Schema-Nutzung | Feldweise entfernen, nicht die weiterhin benötigte Kontaktübersetzung. Risiko: Spread-Overrides; Regression aller Kontaktseiten/Formzustände |
| A10 | `lib/translations/service-pages-part1.ts`: `servicePagesPart1.en.accident` und `servicePagesPart1.ru.accident` | Beide Objekte werden in `lib/translations.ts` durch den späteren Spread von `appraisalPageTranslations.en` beziehungsweise `.ru` vollständig überschrieben und nicht ausgegeben | EN/RU; keine eigene Route, Metadata-, Schema-, CSS- oder Assetreferenz; der DE-`accident`-Block bleibt erforderlich | Erst in Phase D eigenschaftsgenau entfernen. Risiko: versehentliche Entfernung des benötigten DE-Blocks oder der aktiven `appraisal-pages.ts`-Daten. Rollback: eigener Translation-Commit/Revert; DE/EN/RU-Type- und Renderprüfung |

## Verwendungsinventar B – sichtbar oder verlinkt

| ID | Pfad/Bestand | Nutzung und Sichtbarkeit | Referenzen/Sprachen/SEO | Empfehlung, Risiko, Rollback, Zuständigkeit |
|---|---|---|---|---|
| B1 | `ServicesOverviewContent.tsx` und `servicesPage` in `services-and-about.ts` | Rendert auf `/leistungen`, `/en/leistungen`, `/ru/leistungen` weiterhin sechs bisherige Karten und verlinkt fünf Legacy-Familien | DE/EN/RU; Übersichten sind `noindex`, nicht in Sitemap, ohne V1-Schema; über Sprachzuordnung und Backlinks erreichbar | Freigegebene Planentscheidung: Routen erhalten und in Phase B ausschließlich auf die drei aktuellen Gutachtenarten ausrichten. Hohes Inhaltsrisiko; Rollback über eigenen Overview-Commit |
| B2 | `RentalServiceDetailContent.tsx`, `service-pages-part1.ts` (Rental), `home-service-rental.webp` | Auf drei Autovermietungsrouten sichtbar; enthält Anfrageformular und direkte Telefonnummer | DE/EN/RU, von B1 verlinkt; Route `noindex`, keine Canonicals/Hreflang/Service-Schema | In Phase B aus der Übersicht entfernen; Detailseiten erst in freizugebender Phase C. Risiko: öffentliche Alt-URL und Formulare. Rollback getrennt nach Content und Route |
| B3 | `WorkshopServiceDetailContent.tsx`, Workshop-Daten in `service-pages-part2.ts`, `home-service-workshop.webp` | Auf drei Autoservice-Routen sichtbar; Werkstatt-/Reparaturversprechen und Anfrageformular | DE/EN/RU, von B1 verlinkt; `noindex`, keine aktive Legacy-Schemaausgabe | Wie B2. Hohes fachliches/Trust-Risiko bei Weiterbetrieb; kein Redirect auf unpassende Gutachtenroute |
| B4 | `DetailingServiceDetailContent.tsx`, Detailing-Daten in `service-pages-part2.ts`, `home-service-detailing.webp` | Auf drei Detailing-Routen sichtbar und anfragbar | DE/EN/RU; `noindex`, nicht in Sitemap, kein Service-Schema | Wie B2; Rollback getrennt nach Content und Route |
| B5 | `RegistrationServiceDetailContent.tsx`, Registration-Daten in `service-pages-part2.ts`, `home-service-registration.webp` | Auf drei Zulassungsservice-Routen sichtbar und anfragbar | DE/EN/RU; `noindex`, nicht in Sitemap, kein Service-Schema | Wie B2; Zulassungsbegriffe in echten Fahrzeugdokument-Kontexten nicht pauschal löschen |
| B6 | `TowingServiceDetailContent.tsx`, Towing-Daten in `service-pages-part2.ts`, `service-towing.webp` | Auf drei Abschlepp-/Pannenhilferouten sichtbar; kann Soforthilfe-Erwartung erzeugen | DE/EN/RU; `noindex`, nicht in Sitemap, kein Service-Schema | In Phase B aus der Übersicht entfernen; Detailseiten erst in Phase C. Kein semantisch falscher Redirect; Rollback separat |

## Verwendungsinventar C – dokumentierte Routenbehandlung

| ID | Route/Dateien | Ist-Zustand | Verlinkung/SEO | Spätere Entscheidung und Risiko |
|---|---|---|---|---|
| C1 | `/leistungen`, `/en/leistungen`, `/ru/leistungen`; zwei Page-Dateien | HTTP 200, sichtbarer B1-Inhalt | Nicht im Header als Übersicht angeboten, aber Sprachmapping und Legacy-Backlinks; `noindex`, nicht in Sitemap | Freigegebene Planentscheidung: alle drei Routen erhalten und in Phase B auf die drei sprachlich passenden Gutachtenarten ausrichten. `noindex` bleibt bis zum finalen SEO-/Launch-Gate bestehen |
| C2 | drei Routen Autovermietung; zwei Page-Dateien | HTTP 200, B2 sichtbar | Von B1 verlinkt; `noindex` | In Phase C nach erneuter ausdrücklicher Freigabe entfernen; kein passendes Redirectziel, lokalisierte 404-Struktur und realen HTTP-Status danach prüfen |
| C3 | drei Routen Autoservice; zwei Page-Dateien | HTTP 200, B3 sichtbar | Von B1 verlinkt; `noindex` | Wie C2; keine Weiterleitung auf Gutachten, Start, Kontakt oder Übersicht |
| C4 | drei Routen Detailing; zwei Page-Dateien | HTTP 200, B4 sichtbar | Von B1 verlinkt; `noindex` | Wie C2 |
| C5 | drei Routen Zulassungsservice; zwei Page-Dateien | HTTP 200, B5 sichtbar | Von B1 verlinkt; `noindex` | Wie C2; spätere Leistungspläne nicht erfinden |
| C6 | drei Routen Abschleppdienst/Pannenhilfe; zwei Page-Dateien | HTTP 200, B6 sichtbar | Von B1 verlinkt; `noindex` | Wie C2; keine falsche Notfall-/Erreichbarkeitserwartung oder Umleitung erzeugen |
| C7 | `app/(localized)/[locale]/leistungen/unfallgutachten/page.tsx` | Physische EN/RU-Inhaltsdatei liegt hinter zwei permanenten Redirects und wird bei normalem HTTP-Zugriff nicht als Zielseite benötigt | Redirects führen direkt zu den kanonischen EN/RU-Gutachtenarten; Datei erzeugt selbst Legacy-Metadata, falls sie je erreichbar würde | Nach Laufzeittest der Config-Priorität und Query-Erhaltung eventuell entfernen; Redirects müssen bestehen bleiben. Risiko: abweichendes Hosting-/Buildverhalten; Rollback atomar |

## Verwendungsinventar D – weiterhin erforderlich oder fachlich legitim

| ID | Geschützter Bestand | Begründung |
|---|---|---|
| D1 | Neun `/gutachtenarten/...`-Routen in DE/EN/RU | Freigegebene V1-Zielseiten; indexierbar und in Sitemap/Hreflang-Clustern enthalten |
| D2 | Startseiten und Kontaktseiten in DE/EN/RU | Indexierbare Kernwege und aktive Kontakt-/Formularwege |
| D3 | Über-uns-Seiten in DE/EN/RU | Inhaltlich aktuelle V1-Seiten; vorübergehend `noindex`, erneute Indexprüfung erst nach Cleanup |
| D4 | Impressum, Datenschutz und AGB in DE/EN/RU | Rechtlich erforderliche/prüfbedürftige Seiten; keine Textänderung in 026; `noindex` bis externer Freigabe |
| D5 | `lib/i18n.ts`, Header, Mobile-Menü und Footer | Aktuelle kontexttreue Sprach- und V1-Navigation; keine Legacy-Service-Links im sichtbaren Header/Footer |
| D6 | `service-page-layout.tsx`, `service-inquiry-form.tsx`, Formularlogik | Wird von aktuellen Gutachtenarten und vorläufig auch Legacy-Seiten gemeinsam genutzt; darf nicht zusammen mit Legacy-Komponenten gelöscht werden |
| D7 | `metadata.ts`, `structuredData.ts`, `sitemap.ts`, `robots.ts` | Aufgabe-029-Modell ist aktiv; Legacy-Seiten erhalten `noindex` und kein leistungsbezogenes JSON-LD |
| D8 | Fünf permanente Redirects in `next.config.mjs` | Direkte semantisch passende Migrationen ohne Kette: drei DE- und zwei EN/RU-Altpfade |
| D9 | Aktuelle Logo-, Hero-, About- und Gutachtenbilder | Über `next/image`, OpenGraph oder sichtbare Komponenten aktiv verwendet; nicht löschen |
| D10 | Begriffe wie Werkstatt, Reparaturkosten, Lackierung oder Zulassungsbescheinigung in aktuellen Gutachtentexten | Fachlich legitimer Kontext einer Schadenbewertung oder benötigter Unterlagen; keine pauschale Textsuche als Löschgrund verwenden |

## Verwendungsinventar E – historische Dokumentation erhalten

| ID | Bestand | Regel |
|---|---|---|
| E1 | `workflow/done/*` | Abgeschlossene Aufgaben und damalige Aussagen bleiben als Entscheidungs- und Prüfhistorie erhalten |
| E2 | Specs, Work-Plans, `DECISIONS.md` und `open-questions.md` | Nicht im Code-Cleanup löschen; überholte Ist-Aussagen nur nach separater Freigabe kenntlich machen |
| E3 | `CHANGELOG.md` und historische Roadmap-Abschnitte | Historische Altbegriffe sind keine aktive Website-Werbung und bleiben nachvollziehbar |

## Verwendungsinventar F – vor Umsetzung freizugeben

| ID | Offener Punkt | Erforderliche Entscheidung/Prüfung |
|---|---|---|
| F1 | Dependencies hinter dem ungenutzten UI-Cluster | Entfernen bestehender Dependencies ist nach AGENTS.md gesondert genehmigungspflichtig; zuerst tatsächliche Nutzung nach Phase A erneut berechnen |
| F2 | `public/icon.svg`, `icon-light-32x32.png`, `icon-dark-32x32.png`, `apple-icon.png` | Keine Repository-Referenz, aber mögliche externe Browser-/Deployment-Konvention; vor Löschung gerenderte Head-Ausgabe und Live-/Hosting-Nutzung prüfen |
| F3 | Aufhebung von `noindex` für die drei Leistungsübersichten | Erst nach vollständiger Legacy-Bereinigung, Inhaltsprüfung und ausdrücklicher Indexfreigabe; gehört nicht automatisch zum Cleanup |
| F4 | Aufhebung von `noindex` für die drei Über-uns-Seiten | Erst nach erneuter Inhalts-/Trust-/SEO-Prüfung und ausdrücklicher Freigabe |
| F5 | Legal-Indexierung | Externe Rechts- und separate Indexfreigabe bleibt Voraussetzung; kein Bestandteil der technischen Cleanup-Entscheidung |
| F6 | Bereinigung überholter Spec-Ist-Aussagen | Separater Dokumentationsentscheid; historische Nachweise dürfen nicht stillschweigend umgeschrieben werden |
| F7 | `public/images/about-hero-team-cropped.jpg`, `public/images/about-hero-team-cropped.webp`, `public/images/hero-car.webp`, `public/images/home-hero-new.webp`, `public/images/home-hero-team-new.webp.png`, `public/images/home-service-accident-wide.webp`, `public/images/new hero.png`, `public/images/services/schadengutachten-detail.png` | Keine Repository-Laufzeitreferenz, aber öffentliche Direkt-URLs können durch den Code-Scan nicht ausgeschlossen werden. Alle acht Dateien bleiben erhalten, bis Live-/Hosting-/Trafficdaten oder eine ausdrückliche Risikoakzeptanz vorliegen |

## Routenmatrix

`308` bezeichnet die von Next.js für permanente Redirects erwartete HTTP-Antwort. Query-Parameter sollen von direkten Redirects erhalten bleiben; dies ist in der späteren Umsetzung mit tatsächlichen Requests zu prüfen.

| Bestehende Route(n) | Sprache | HTTP | Sichtbarer Inhalt/Status | Intern verlinkt | Index/Sitemap | Spätere Aktion | Redirect-Risiko |
|---|---|---:|---|---|---|---|---|
| `/`, `/en`, `/ru` | DE/EN/RU | 200 | V1 Startseite, aktiv | ja | index; Sitemap ja | erhalten | keines |
| `/gutachtenarten/unfallgutachten` plus EN/RU | DE/EN/RU | 200 | V1 Unfallgutachten, aktiv | ja | index; Sitemap ja | schützen | Ziel von drei Redirects, keine Kette |
| `/gutachtenarten/fahrzeugbewertung` plus EN/RU | DE/EN/RU | 200 | V1 Fahrzeugbewertung, aktiv | ja | index; Sitemap ja | schützen | Ziel eines DE-Redirects, keine Kette |
| `/gutachtenarten/schadendokumentation` plus EN/RU | DE/EN/RU | 200 | V1 Schadendokumentation, aktiv | ja | index; Sitemap ja | schützen | Ziel eines DE-Redirects, keine Kette |
| `/kontakt`, `/en/kontakt`, `/ru/kontakt` | DE/EN/RU | 200 | V1 Kontakt/Formular, aktiv | ja | index; Sitemap ja | erhalten | keines |
| `/leistungen`, `/en/leistungen`, `/ru/leistungen` | DE/EN/RU | 200 | Legacy-Übersicht | indirekt/Backlinks | noindex; ausgeschlossen | erhalten und in Phase B auf drei Gutachtenarten bereinigen | kein Redirect; Indexfreigabe separat |
| `/ueber-uns`, `/en/ueber-uns`, `/ru/ueber-uns` | DE/EN/RU | 200 | aktueller V1-Inhalt | ja | noindex; ausgeschlossen | nach Cleanup Indexprüfung | keines |
| `/impressum` plus EN/RU | DE/EN/RU | 200 | Rechtstext | Footer | noindex; ausgeschlossen | externe Freigabe abwarten | keines |
| `/datenschutz` plus EN/RU | DE/EN/RU | 200 | Rechtstext | Footer/Formulare | noindex; ausgeschlossen | externe Freigabe abwarten | keines |
| `/agb` plus EN/RU | DE/EN/RU | 200 | Rechtstext | Footer | noindex; ausgeschlossen | externe Freigabe abwarten | keines |
| `/leistungen/autovermietung` plus EN/RU | DE/EN/RU | 200 | Legacy B2 | B1 | noindex; ausgeschlossen | nach erneuter Freigabe entfernen und 404 prüfen | kein Redirect |
| `/leistungen/autoservice` plus EN/RU | DE/EN/RU | 200 | Legacy B3 | B1 | noindex; ausgeschlossen | nach erneuter Freigabe entfernen und 404 prüfen | kein Redirect |
| `/leistungen/detailing` plus EN/RU | DE/EN/RU | 200 | Legacy B4 | B1 | noindex; ausgeschlossen | nach erneuter Freigabe entfernen und 404 prüfen | kein Redirect |
| `/leistungen/zulassungsservice` plus EN/RU | DE/EN/RU | 200 | Legacy B5 | B1 | noindex; ausgeschlossen | nach erneuter Freigabe entfernen und 404 prüfen | kein Redirect |
| `/leistungen/abschleppdienst-pannenhilfe` plus EN/RU | DE/EN/RU | 200 | Legacy B6 | B1 | noindex; ausgeschlossen | nach erneuter Freigabe entfernen und 404 prüfen | kein Redirect |
| `/leistungen/unfallgutachten` | DE | 308 | Redirect | alte/externe URLs möglich | nicht in Sitemap | Redirect erhalten | Ziel ist direkt und kanonisch |
| `/leistungen/fahrzeugbewertung` | DE | 308 | Redirect | alte/externe URLs möglich | nicht in Sitemap | Redirect erhalten | Ziel ist direkt und kanonisch |
| `/leistungen/schadendokumentation` | DE | 308 | Redirect | alte/externe URLs möglich | nicht in Sitemap | Redirect erhalten | Ziel ist direkt und kanonisch |
| `/en/leistungen/unfallgutachten` | EN | 308 | Redirect; physische C7-Datei vorhanden | alte/externe URLs möglich | nicht in Sitemap | Redirect erhalten, C7 prüfen | keine Startseitenumleitung |
| `/ru/leistungen/unfallgutachten` | RU | 308 | Redirect; physische C7-Datei vorhanden | alte/externe URLs möglich | nicht in Sitemap | Redirect erhalten, C7 prüfen | keine Startseitenumleitung |

## Ergebnis des next-router-check

Der lokale Skill `.agents/skills/next-router-check/SKILL.md` wurde vollständig angewendet:

- 33 Verzeichnisse mit `page.tsx` wurden geprüft.
- 16 lokalisierte Page-Dateien sind wegen asynchroner `params`-Auswertung datenladend.
- Für alle 16 greifen `app/(localized)/[locale]/loading.tsx` und `error.tsx` im übergeordneten Layout-Scope.
- Alle datenladenden Routen können bei ungültiger Locale `notFound()` auslösen; `app/(localized)/[locale]/not-found.tsx` liegt im Scope.
- Die deutschen statischen Routen benötigen keine eigenen Loading-/Error-Grenzen; der deutsche Scope besitzt sie dennoch.
- Ergebnis: **0 fehlende Pflichtdateien, 0 Router-Check-Blocker**.

## Verbindliche Liste der 52 unerreichbaren Quellmodule

Die unabhängige Prüfung hat 158 Quellmodule unter `app/`, `components/`, `hooks/` und `lib/` ausgewertet. 106 Module sind vom App-Routen-Graph erreichbar; die folgenden 52 sind nicht erreichbar. Für **jede** Datei wurden statische Imports, Side-Effect-Imports, dynamische `import()`-Aufrufe, `require()`, Barrel-Exports, Routen- und Komponentenregistrierungen, Stringreferenzen, Tests, Build-Nutzung, Übersetzungs-/Datenbezüge sowie CSS-/Assetbezüge geprüft.

Gemeinsames Ergebnis für alle 52 Dateien:

- keine statische, dynamische oder Barrel-basierte Einbindung aus einem erreichbaren Route-/Entry-Modul;
- keine Routenreferenz und keine Test- oder Build-Sonderverwendung;
- interne Imports innerhalb des unerreichbaren Clusters ändern die fehlende Erreichbarkeit nicht;
- keine Datei wird in diesem Planungsschritt gelöscht;
- npm-Dependencies, `package.json` und Lockfiles sind ausdrücklich ausgeschlossen;
- Rollback erfolgt gruppenweise über den jeweiligen atomaren Cleanup-Commit.

Abweichende interne Abhängigkeiten sind ausdrücklich dokumentiert: `express-courier-section.tsx`, `testimonials-section.tsx` und `trust-section.tsx` lesen ausschließlich ihre später separat zu prüfenden Home-Übersetzungszweige; die Express-Sektion referenziert zusätzlich `public/images/service-express-courier.webp`. `sidebar.tsx`, `toaster.tsx`, `toggle-group.tsx` und `command.tsx` besitzen nur Abhängigkeiten innerhalb der unten gemeinsam geplanten unerreichbaren Gruppen. Diese Daten und Assets werden in Phase A nicht entfernt.

| Nr. | Repository-Pfad | Modulart | Frühere Funktion | Daten/CSS/Asset | Cleanup-Gruppe |
|---:|---|---|---|---|---|
| 1 | `components/sections/express-courier-section.tsx` | Home-Sektion | Express-Kurier-Angebot | `home.expressCourier`; Courier-Bild; kein externes CSS | A1 |
| 2 | `components/sections/testimonials-section.tsx` | Home-Sektion | Kundenstimmen | `home.testimonials`; kein Asset/CSS | A1 |
| 3 | `components/sections/trust-section.tsx` | Home-Sektion | Trust-Badges | `home.trust`; kein Asset/CSS | A1 |
| 4 | `components/ui/alert-dialog.tsx` | UI-Overlay | Bestätigungsdialog | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A2 |
| 5 | `components/ui/aspect-ratio.tsx` | UI-Layout | Seitenverhältnis-Wrapper | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A4 |
| 6 | `components/ui/avatar.tsx` | UI-Anzeige | Avatar | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A4 |
| 7 | `components/ui/badge.tsx` | UI-Anzeige | Badge | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A4 |
| 8 | `components/ui/breadcrumb.tsx` | UI-Navigation | generische Breadcrumb-UI | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A4 |
| 9 | `components/ui/button-group.tsx` | UI-Layout | Button-Gruppe | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A4 |
| 10 | `components/ui/calendar.tsx` | UI-Formular | Kalenderauswahl | keine Projektdaten/Übersetzungen/Assets; nur lokale Klassen | A3 |
| 11 | `components/ui/carousel.tsx` | UI-Anzeige | Karussell | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A4 |
| 12 | `components/ui/chart.tsx` | UI-Anzeige | Diagramm-Wrapper | keine Projektdaten/Übersetzungen/Assets; nur lokale Klassen | A4 |
| 13 | `components/ui/checkbox.tsx` | UI-Formular | Checkbox | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A3 |
| 14 | `components/ui/collapsible.tsx` | UI-Disclosure | einklappbarer Bereich | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A5 |
| 15 | `components/ui/command.tsx` | UI-Overlay | Command-Menü | interner Bezug zu `dialog.tsx`; keine Projektdaten/Assets | A2 |
| 16 | `components/ui/context-menu.tsx` | UI-Overlay | Kontextmenü | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A2 |
| 17 | `components/ui/dialog.tsx` | UI-Overlay | Dialog | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A2 |
| 18 | `components/ui/drawer.tsx` | UI-Overlay | Drawer | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A2 |
| 19 | `components/ui/dropdown-menu.tsx` | UI-Overlay | Dropdown-Menü | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A2 |
| 20 | `components/ui/empty.tsx` | UI-Anzeige | Leerzustand | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A4 |
| 21 | `components/ui/form.tsx` | UI-Formular | React-Hook-Form-Adapter | keine Projektdaten/Übersetzungen/Assets; nur lokale Klassen | A3 |
| 22 | `components/ui/hover-card.tsx` | UI-Overlay | Hover-Karte | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A2 |
| 23 | `components/ui/input-group.tsx` | UI-Formular | Eingabegruppe | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A3 |
| 24 | `components/ui/input-otp.tsx` | UI-Formular | OTP-Eingabe | keine Projektdaten/Übersetzungen/Assets; nur lokale Klassen | A3 |
| 25 | `components/ui/item.tsx` | UI-Anzeige | generisches Listenelement | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A4 |
| 26 | `components/ui/kbd.tsx` | UI-Anzeige | Tastaturkürzel | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A4 |
| 27 | `components/ui/menubar.tsx` | UI-Overlay | Menüleiste | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A2 |
| 28 | `components/ui/navigation-menu.tsx` | UI-Overlay | generisches Navigationsmenü | keine Projektdaten/Übersetzungen/Assets; nur lokale Klassen | A2 |
| 29 | `components/ui/pagination.tsx` | UI-Navigation | Pagination | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A4 |
| 30 | `components/ui/popover.tsx` | UI-Overlay | Popover | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A2 |
| 31 | `components/ui/progress.tsx` | UI-Anzeige | Fortschrittsanzeige | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A4 |
| 32 | `components/ui/radio-group.tsx` | UI-Formular | Radio-Gruppe | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A3 |
| 33 | `components/ui/resizable.tsx` | UI-Layout | veränderbare Panels | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A4 |
| 34 | `components/ui/scroll-area.tsx` | UI-Layout | Scrollbereich | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A4 |
| 35 | `components/ui/select.tsx` | UI-Formular | Auswahlfeld | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A3 |
| 36 | `components/ui/sidebar.tsx` | UI-Navigation | generische Sidebar | interne Bezüge zu Skeleton, Tooltip und Mobile-Hook; keine Projektdaten/Assets | A7 |
| 37 | `components/ui/skeleton.tsx` | UI-Anzeige | Ladeplatzhalter | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A7 |
| 38 | `components/ui/slider.tsx` | UI-Formular | Slider | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A3 |
| 39 | `components/ui/sonner.tsx` | UI-Feedback | Sonner-Toaster | keine Projektdaten/Übersetzungen/Assets; nur lokale Klassen | A6 |
| 40 | `components/ui/switch.tsx` | UI-Formular | Schalter | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A3 |
| 41 | `components/ui/table.tsx` | UI-Anzeige | Tabelle | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A4 |
| 42 | `components/ui/tabs.tsx` | UI-Navigation | Tabs | keine Daten/Übersetzungen/Assets; nur lokale Klassen | A4 |
| 43 | `components/ui/toast.tsx` | UI-Feedback | Toast-Komponenten | interne Nutzung nur durch unerreichbaren Toaster/Hook; keine Assets | A6 |
| 44 | `components/ui/toaster.tsx` | UI-Feedback | Toast-Renderer | interne Bezüge zu Toast und Hook; keine Assets | A6 |
| 45 | `components/ui/toggle.tsx` | UI-Disclosure | Toggle | interne Nutzung nur durch unerreichbare Toggle-Gruppe | A5 |
| 46 | `components/ui/toggle-group.tsx` | UI-Disclosure | Toggle-Gruppe | interner Bezug zu `toggle.tsx`; keine Assets | A5 |
| 47 | `components/ui/tooltip.tsx` | UI-Feedback | Tooltip | interne Nutzung nur durch unerreichbare Sidebar; keine Assets | A7 |
| 48 | `components/ui/use-mobile.tsx` | UI-Hook | lokale Mobile-Erkennung | keine Daten/Übersetzungen/Assets | A7 |
| 49 | `components/ui/use-toast.ts` | UI-Hook | lokaler Toast-State | interne Nutzung nur im Toast-Cluster; keine Assets | A6 |
| 50 | `hooks/use-mobile.ts` | Hook | Mobile-Erkennung | interne Nutzung nur durch unerreichbare Sidebar; keine Assets | A7 |
| 51 | `hooks/use-toast.ts` | Hook | Toast-State | interne Nutzung nur durch unerreichbaren Toaster; keine Assets | A6 |
| 52 | `lib/browser-storage.ts` | Datenutility | Browser-Storage-Helfer | keine Datenquelle, Übersetzung, CSS- oder Assetabhängigkeit | A8 |

### Kleine technische Gruppen für die spätere erste Modulphase

Die Gruppenbezeichnungen A1 bis A8 in diesem Abschnitt sind technische Löschgruppen und nicht mit den Inventar-IDs A1 bis A10 gleichzusetzen.

| Gruppe | Dateien | Gemeinsame frühere Funktion und Unabhängigkeit | Abhängigkeiten/Ausschlüsse | Rollback und unmittelbare Prüfungen |
|---|---|---|---|---|
| A1 | Nr. 1–3 | nicht mehr gerenderte Home-Sektionen; kein Route-Inbound | Übersetzungszweige und Courier-Asset bleiben bestehen | eigener Commit/Revert; `git diff --check`, Import-/Exportsuche, Lint, TypeScript; anschließend DE/EN/RU-Home-Smoke |
| A2 | Nr. 4, 15–19, 22, 27–28, 30 | geschlossenes Overlay-/Menü-Cluster | keine Dependencies entfernen | eigener Commit/Revert; Diff-Check, Referenzsuche, Lint, TypeScript |
| A3 | Nr. 10, 13, 21, 23–24, 32, 35, 38, 40 | ungenutzte generische Form-/Input-Primitives | aktive Formularbausteine außerhalb der Liste schützen | eigener Commit/Revert; Diff-Check, Referenzsuche, Lint, TypeScript; Kontakt-/Formular-Smoke ohne Absenden |
| A4 | Nr. 5–9, 11–12, 20, 25–26, 29, 31, 33–34, 41–42 | reine Anzeige-/Layout-Primitives ohne erreichbaren Verbraucher | keine Assets oder Dependencies entfernen | eigener Commit/Revert; Diff-Check, Referenzsuche, Lint, TypeScript |
| A5 | Nr. 14, 45–46 | geschlossenes Disclosure-/Toggle-Cluster | keine Dependencies entfernen | eigener Commit/Revert; Diff-Check, Referenzsuche, Lint, TypeScript |
| A6 | Nr. 39, 43–44, 49, 51 | geschlossenes Toast-/Feedback-Cluster | keine Dependencies entfernen | eigener Commit/Revert; Diff-Check, Referenzsuche, Lint, TypeScript |
| A7 | Nr. 36–37, 47–48, 50 | geschlossenes Sidebar-/Mobile-Hook-Cluster | Header und `HeaderMobileMenu` sind nicht enthalten und bleiben geschützt | eigener Commit/Revert; Diff-Check, Referenzsuche, Lint, TypeScript; 390-/430- und 1440-Smoke der Navigation |
| A8 | Nr. 52 | eigenständiges ungenutztes Browser-Storage-Utility | keine weitere Datei ändern | eigener Commit/Revert; Diff-Check, Referenzsuche, Lint, TypeScript |

Nach A2, A4, A6 und abschließend A8 ist zusätzlich `npm run build` vorgesehen. Der next-router-check wird ausgeführt, wenn eine erneute Referenzprüfung wider Erwarten eine Routen- oder datenladende Abhängigkeit zeigt, und verpflichtend im Endgate. Sichtbare DE-/EN-/RU-Browserprüfungen erfolgen nach A1, A3 und A7. Keine technische Gruppe darf beginnen, bevor dieser präzisierte Plan ausdrücklich freigegeben wurde.

## Vollständiger Assetplan – 18 Kandidaten

OpenGraph-, Twitter-, Metadata-, Structured-Data-, CSS-, `next/image`-, Manifest-, Favicon- und dynamische Stringreferenzen wurden in der Read-only-Prüfung berücksichtigt. Keine Assetdatei gehört zur ersten Modulphase; in diesem Planungsschritt wird nichts gelöscht.

| Pfad | Typ | Referenzlage/Abhängigkeit | Risiko | Spätere Entscheidung |
|---|---|---|---|---|
| `public/placeholder.jpg` | JPG | keine Runtime-Referenz; nur Plan-Dokumentation | sehr geringes öffentliches Direkt-URL-Risiko | als einer von sechs sicheren Kandidaten erst in separater Assetphase erneut prüfen und freigeben |
| `public/placeholder.svg` | SVG | keine Referenz | wie oben | separat prüfen/freigeben |
| `public/placeholder-logo.png` | PNG | keine Referenz | wie oben | separat prüfen/freigeben |
| `public/placeholder-logo.svg` | SVG | keine Referenz | wie oben | separat prüfen/freigeben |
| `public/placeholder-user.jpg` | JPG | keine Referenz | wie oben | separat prüfen/freigeben |
| `public/images/service-express-courier.webp` | WEBP | nur durch Modul Nr. 1 referenziert | Reihenfolge; bleibt in Phase A erhalten | erst nach Entfernung der Express-Sektion separat prüfen/freigeben |
| `public/images/about-hero-team-cropped.jpg` | JPG | keine Runtime-, OG-, Metadata-, CSS- oder `next/image`-Referenz; historische Doku | unbekannte öffentliche Direkt-URL | erhalten; Live-/Hosting-/Trafficprüfung oder Risikoakzeptanz |
| `public/images/about-hero-team-cropped.webp` | WEBP | wie oben | unbekannte öffentliche Direkt-URL | erhalten |
| `public/images/hero-car.webp` | WEBP | keine Repository-Laufzeitreferenz | unbekannte öffentliche Direkt-URL | erhalten |
| `public/images/home-hero-new.webp` | WEBP | keine Repository-Laufzeitreferenz | unbekannte öffentliche Direkt-URL | erhalten |
| `public/images/home-hero-team-new.webp.png` | PNG | keine Runtime-Referenz; historische Doku; größter Kandidat | unbekannte öffentliche Direkt-URL und große Datei | erhalten |
| `public/images/home-service-accident-wide.webp` | WEBP | keine Runtime-Referenz; historische Doku | unbekannte öffentliche Direkt-URL | erhalten |
| `public/images/new hero.png` | PNG | keine Repository-Laufzeitreferenz | unbekannte öffentliche Direkt-URL | erhalten |
| `public/images/services/schadengutachten-detail.png` | PNG | keine Runtime-Referenz; historische Doku | unbekannte öffentliche Direkt-URL | erhalten |
| `public/icon.svg` | SVG | keine Repository-Referenz; Browser-/Hostingkonvention möglich | Favicon-/Deployment-Risiko | erhalten; gerenderten Head und Hosting prüfen |
| `public/icon-light-32x32.png` | PNG | wie oben | Favicon-/Deployment-Risiko | erhalten |
| `public/icon-dark-32x32.png` | PNG | wie oben | Favicon-/Deployment-Risiko | erhalten |
| `public/apple-icon.png` | PNG | keine Repository-Referenz; Apple-Touch-Konvention möglich | Browser-/Deployment-Risiko | erhalten |

Ergebnis: sechs nach Repository-Nachweis sichere, aber erst separat freizugebende Assets; zwölf unklare und vollständig zu erhaltende Assets, davon acht öffentliche Altbilder und vier Icon-Dateien.

## Verbindlicher Plan für die drei Leistungsübersichten

Die Nutzerentscheidung ist dokumentiert: Alle drei Übersichtsrouten bleiben erhalten. Phase B ersetzt die sechs bisherigen Karten durch ausschließlich drei aktuelle Gutachtenarten. Die Routen bleiben während des Cleanups `noindex`, außerhalb der Sitemap und ohne Indexfreigabe.

| Route | Sprache | aktueller Legacy-Inhalt | aktuelle Quelle/Komponente | zukünftiger Zielinhalt und interne Links | Prüf- und Schutzumfang |
|---|---|---|---|---|---|
| `/leistungen` | DE | sechs Karten einschließlich Mietwagen, Werkstatt, Detailing, Zulassung und Pannenhilfe/Abschleppen | `app/(de)/leistungen/page.tsx`, `components/ServicesOverviewContent.tsx`, `servicesAndAboutTranslations.de.servicesPage`, `serviceMeta` | Unfallgutachten → `/gutachtenarten/unfallgutachten`; Fahrzeugbewertung → `/gutachtenarten/fahrzeugbewertung`; Schadendokumentation → `/gutachtenarten/schadendokumentation` | alte Angebote/Links vollständig entfernen; Header, Mobile-Menü und Footer funktionsfähig halten; 390/768/1440; Accessibility, Typografie, DE-Contentprüfung |
| `/en/leistungen` | EN | sechs englische Legacy-Karten | `app/(localized)/[locale]/leistungen/page.tsx`, gemeinsame Komponente, EN-`servicesPage` | Accident Damage Appraisal → `/en/gutachtenarten/unfallgutachten`; Vehicle Valuation → `/en/gutachtenarten/fahrzeugbewertung`; Vehicle Damage Documentation → `/en/gutachtenarten/schadendokumentation` | wie DE; EN-Content-Konsistenz und Sprachwechsel zusätzlich prüfen |
| `/ru/leistungen` | RU | sechs russische Legacy-Karten | lokalisierte Page, gemeinsame Komponente, RU-`servicesPage` | Оценка ущерба после ДТП → `/ru/gutachtenarten/unfallgutachten`; Оценка стоимости автомобиля → `/ru/gutachtenarten/fahrzeugbewertung`; Фиксация повреждений → `/ru/gutachtenarten/schadendokumentation` | wie DE; RU-Content-Konsistenz und Sprachwechsel zusätzlich prüfen |

Die spätere Indexfreigabe erfolgt erst nach vollständiger Bereinigung, visueller und inhaltlicher Prüfung, ausdrücklicher Nutzerfreigabe und dem finalen SEO-/Launch-Gate. Aufgabe 026 ändert `noindex` nicht automatisch.

## Verbindliche Einzelplanung der 15 fachfremden Legacy-Routen

Alle 15 Routen liefern im dokumentierten Ist-Stand HTTP 200, sind `noindex,follow`, nicht in der Sitemap und werden von der Legacy-Übersicht B1 intern verlinkt. Für keine Route existiert ein gleichwertiges neues Ziel. Nach erneuter ausdrücklicher Freigabe für Phase C werden die Page-Dateien entfernt und sämtliche internen Links beseitigt. Es wird **kein** Redirect auf Startseite, Kontakt, `/leistungen` oder eine fachlich andere Gutachtenart eingerichtet. Danach sind die sprachlich passenden vorhandenen DE-/EN-/RU-404-Zustände und der tatsächliche HTTP-Status per Request zu prüfen.

| Route | Sprache | alte Leistung | Page/Quelle | geplante spätere Behandlung | Redirect | Prüfung/Risiko/Rollback |
|---|---|---|---|---|---|---|
| `/leistungen/autovermietung` | DE | Autovermietung | `app/(de)/leistungen/autovermietung/page.tsx`, Rental-Komponente/part1 | Page entfernen, B1-Link entfernen, DE-404 prüfen | keiner | HTTP/404, keine Kette/Schleife; eigener Routen-Commit revertierbar |
| `/en/leistungen/autovermietung` | EN | Rental | lokalisierte Autovermietungs-Page, Rental/part1 | Page entfernen, EN-Link entfernen, EN-404 prüfen | keiner | wie DE; Locale-/Sprachprüfung; Revert |
| `/ru/leistungen/autovermietung` | RU | Аренда | lokalisierte Autovermietungs-Page, Rental/part1 | Page entfernen, RU-Link entfernen, RU-404 prüfen | keiner | wie DE; Revert |
| `/leistungen/autoservice` | DE | Autoservice/Werkstatt | `app/(de)/leistungen/autoservice/page.tsx`, Workshop/part2 | Page und Link entfernen, DE-404 prüfen | keiner | Werkstattintention nicht umleiten; Revert |
| `/en/leistungen/autoservice` | EN | Workshop | lokalisierte Autoservice-Page, Workshop/part2 | Page und Link entfernen, EN-404 prüfen | keiner | Locale-/HTTP-Prüfung; Revert |
| `/ru/leistungen/autoservice` | RU | Автосервис | lokalisierte Autoservice-Page, Workshop/part2 | Page und Link entfernen, RU-404 prüfen | keiner | Locale-/HTTP-Prüfung; Revert |
| `/leistungen/detailing` | DE | Detailing | `app/(de)/leistungen/detailing/page.tsx`, Detailing/part2 | Page und Link entfernen, DE-404 prüfen | keiner | externe Altlinks möglich; Revert |
| `/en/leistungen/detailing` | EN | Detailing | lokalisierte Detailing-Page, Detailing/part2 | Page und Link entfernen, EN-404 prüfen | keiner | Locale-/HTTP-Prüfung; Revert |
| `/ru/leistungen/detailing` | RU | Детейлинг | lokalisierte Detailing-Page, Detailing/part2 | Page und Link entfernen, RU-404 prüfen | keiner | Locale-/HTTP-Prüfung; Revert |
| `/leistungen/zulassungsservice` | DE | Zulassungsservice | `app/(de)/leistungen/zulassungsservice/page.tsx`, Registration/part2 | Page und Link entfernen, DE-404 prüfen | keiner | keine künftige Leistung erfinden; Revert |
| `/en/leistungen/zulassungsservice` | EN | Registration | lokalisierte Zulassungs-Page, Registration/part2 | Page und Link entfernen, EN-404 prüfen | keiner | Locale-/HTTP-Prüfung; Revert |
| `/ru/leistungen/zulassungsservice` | RU | Регистрация | lokalisierte Zulassungs-Page, Registration/part2 | Page und Link entfernen, RU-404 prüfen | keiner | Locale-/HTTP-Prüfung; Revert |
| `/leistungen/abschleppdienst-pannenhilfe` | DE | Abschleppen/Pannenhilfe | `app/(de)/leistungen/abschleppdienst-pannenhilfe/page.tsx`, Towing/part2 | Page und Link entfernen, DE-404 prüfen | keiner | Notfall-/Erreichbarkeitserwartung nicht umlenken; Revert |
| `/en/leistungen/abschleppdienst-pannenhilfe` | EN | Towing/Roadside Help | lokalisierte Towing-Page, Towing/part2 | Page und Link entfernen, EN-404 prüfen | keiner | Locale-/HTTP-Prüfung; Revert |
| `/ru/leistungen/abschleppdienst-pannenhilfe` | RU | Эвакуатор/помощь | lokalisierte Towing-Page, Towing/part2 | Page und Link entfernen, RU-404 prüfen | keiner | Locale-/HTTP-Prüfung; Revert |

Die fünf vorhandenen permanenten Gutachten-Redirects in `next.config.mjs` bleiben unverändert geschützt. Nach Phase C werden alle fünf Quellen einzeln auf 308, direktes Ziel, Query-Erhalt sowie Ketten- und Schleifenfreiheit geprüft. Die technische Routenentfernung darf erst nach einer weiteren ausdrücklichen Nutzerfreigabe beginnen.

## Präzisierter Nachweis überholter Spec-Ist-Aussagen

Global Spec und Functional Map sind konsistent und blockieren die erste Modulphase nicht. Die folgenden untergeordneten Dokumente sind weiterhin verbindliche/historisch relevante Quellen, enthalten aber inzwischen überholte Ist-Stände. In diesem Task werden sie nicht geändert.

| Datei | Abschnitt/Zeilen | überholte Aussage, kurz | Warum überholt / verbindlicher Nachweis | Einordnung | blockiert Modulphase | spätere Korrektur |
|---|---|---|---|---|---|---|
| `specs/02-feature-specs/mehrsprachigkeit.md` | 253–270 | EN/RU-Gutachtenziele fehlen beziehungsweise folgen später | Aufgabe 051 hat die sechs Ziele und Sprachwechsel umgesetzt; Aufgabe 029 hat SEO ergänzt | aktives Dokument mit historischem Ist-Stand | nein | separater Superseded-Hinweis, ohne Historie zu löschen |
| `specs/02-feature-specs/seo.md` | 28, 120–133, 258 | EN/RU-Parität und technische SEO-Umsetzung stehen noch aus | Aufgaben 051 und 029 sind abgeschlossen | aktives Dokument mit überholtem Umsetzungsstatus | nein | Ist-Status in separater Dokumentationsfreigabe kennzeichnen |
| `specs/03-technical-specs/routing.md` | 17, 28, 80–89, 153–155, 267–271 | EN/RU-Routen, Sprachwechsel, Canonical/Hreflang/Sitemap seien zukünftig | Aufgaben 050, 051 und 029 belegen den aktuellen Routen-/SEO-Stand | aktives Dokument mit historischem Ist-Stand | nein | technische Ist-Notiz ergänzen, Regeln erhalten |
| `specs/06-work-plans/v1-launch-masterplan.md` | 62–75, 113, 127–164 | EN/RU-Parität und Aufgabe 029 seien offen | abgeschlossene Aufgaben 051 und 029 sowie aktuelle Roadmap | historischer Work-Plan mit überholtem Status | nein | als historischen Plan kennzeichnen; keine Entscheidungshistorie umschreiben |
| `specs/06-work-plans/routing-redirects-old-service-routes.md` | 19, 46, 87, 178–185, 217, 268 | EN/RU-Ziele und Aufgabe 029 seien später umzusetzen | Aufgaben 051/029 abgeschlossen; Task 026 entscheidet nun Overview/Legacy-Routen | historischer Work-Plan mit teils aktivem Cleanup-Bezug | nein | spätere Statusnotiz/Superseded-Verweis |
| `specs/07-open-questions/open-questions.md` | 424, 481 | Structured Data/029 und EN/RU-Ziele seien noch künftig | technische Umsetzung durch 051/029 dokumentiert | historisch beantwortete Einzelpunkte in aktivem Sammeldokument | nein | Antworten mit aktuellem Erledigungsnachweis verknüpfen |

Übergeordnete verbindliche Quellen für den fachlichen Scope bleiben `global-spec.md` und `functional-map.md`; für den tatsächlich umgesetzten technischen Ist-Stand gelten zusätzlich `DECISIONS.md` sowie die abgeschlossenen Aufgaben 050, 051 und 029. Kein gefundener Dokumentationswiderspruch blockiert die ausschließlich aus unerreichbaren Quellmodulen bestehende erste technische Phase.

## Präzisierter Ablauf nach ausdrücklicher Planfreigabe

### Phasen A1 bis A8 – ausschließlich 52 unerreichbare Quellmodule

- Exakter Scope/Dateien: die technischen Gruppen A1 bis A8 aus der verbindlichen 52er-Liste; jeweils nur die dort nummerierten Dateien.
- Ausdrückliche Ausschlüsse: Dependencies, `package.json`, Lockfiles, Assets, Übersetzungen, Datenquellen, sichtbare Komponenten, Leistungsübersichten, Routen, Redirects, Metadata, Structured Data, Sitemap, Robots, `noindex`, Specs und Rechtstexte.
- Abhängigkeit/Freigabe: erneuter Importgraph unmittelbar vor jeder Gruppe und ausdrückliche Nutzerfreigabe dieses präzisierten Plans vor A1.
- Risiko: übersehener Shared-Import oder interne Clusterkante; bei A1/A3/A7 zusätzlich potenzielle sichtbare Regression trotz fehlender Erreichbarkeit.
- Rollback: jede Gruppe erhält einen eigenen atomaren Commit und kann unabhängig revertiert werden.
- Technische Checks je Gruppe: `git diff --check`, direkte/dynamische/Barrel-/String-Import- und Exportsuche, `npm run lint`, `npx tsc --noEmit`.
- Zusätzliche Checks: Build nach A2, A4, A6 und A8; DE/EN/RU-Browser-Smoke nach A1, A3 und A7; next-router-check bei unerwartetem Routenbezug und im Endgate.

### Phase B – drei Leistungsübersichten bereinigen, keine Route entfernen

- Exakter Scope: zwei Overview-Page-Dateien, `components/ServicesOverviewContent.tsx` und die eigenschaftsgenau erforderlichen `servicesPage`-/Karten-Daten für DE/EN/RU; Dateiliste vor Beginn erneut fixieren.
- Änderung: `/leistungen`, `/en/leistungen`, `/ru/leistungen` erhalten; sechs alte Angebote und Links durch die drei dokumentierten Gutachtenarten und sprachlich passenden Ziele ersetzen.
- Ausschlüsse: keine der 15 Legacy-Page-Dateien löschen; keine bestehenden Redirects, Indexregeln, Legal-Texte oder Formulare ändern.
- Abhängigkeit/Freigabe: konkrete DE-/EN-/RU-Texte und tatsächlicher Diff brauchen vor Umsetzung eigene Freigabe.
- Risiken: falsche Locale-Ziele, alte Links, beschädigte Header-/Mobile-/Footer-Funktion, Text-/Layoutregression.
- Rollback: eigener Overview-Content-Commit, getrennt von Route-/Datenlöschung.
- Checks: Diff, Lint, TypeScript, Build; Links und Sprachwechsel; 390/768/1440 in DE/EN/RU; Accessibility, Linkzweck/Accessible Names, Typografie/Zeilenumbrüche, Konsole, Hydration, Requests und Bilder; Content-Konsistenzreview.

### Phase C – 15 Legacy-Service-Routen entfernen

- Exakter Scope: die 15 einzeln dokumentierten URLs und zehn zugehörigen Page-Dateien; interne B1-Links müssen bereits in Phase B entfernt sein.
- Änderung: Page-Dateien nach erneuter ausdrücklicher Freigabe löschen; keinen neuen Redirect anlegen; vorhandene sprachlich passende 404-Struktur nutzen und tatsächlichen Status verifizieren.
- Ausschlüsse: neun Gutachtenartenrouten, drei Overview-Routen, gemeinsame Layout-/Formularlogik, fünf bestehende Gutachten-Redirects und `noindex`-Modell nicht beschädigen.
- Abhängigkeit/Freigabe: erneute ausdrückliche Nutzerfreigabe unmittelbar vor Phase C; Status-/Hostingverhalten read-only vor der Löschung prüfen.
- Risiken: externe Altlinks, unerwarteter 200-/Soft-404-Zustand, Locale-/Recovery-Fehler, Redirectkette oder -schleife.
- Rollback: eigener Routen-Commit; entfernte Pages vollständig wiederherstellbar.
- Checks: Diff, Import-/Linksuche, Lint, TypeScript, Build, next-router-check; Requests auf alle 15 URLs; lokalisierte 404, Fokus, Rückkehrpfad und Sprache; fünf Redirects auf 308, direktes Ziel, Query-Erhalt, keine Kette/Schleife.

### Phase D – Übersetzungs-, Daten-, Asset- und Dependency-Reste erneut prüfen

- Exakter Scope: A7 bis A10 nur eigenschaftsgenau, sechs sichere Assetkandidaten nur nach separater Freigabe, verbliebene Legacy-Daten nach B/C; jede Untergruppe erhält vor Beginn eine Dateiliste.
- Ausschlüsse: zwölf unklare Assets bleiben vollständig erhalten; aktive Gutachten-, Kontakt-, Legal- und Home-Daten schützen; keine automatische Metadata-/Structured-Data- oder `noindex`-Änderung.
- Dependencies: erst nach neuem Nutzungsabgleich separat bewerten und gemäß AGENTS.md ausdrücklich genehmigen; keine gemeinsame Änderung mit Modulgruppen.
- Abhängigkeit/Freigabe: A–C abgeschlossen; separate Nutzerfreigabe für Translation-, Asset- und Dependency-Untergruppen.
- Risiken: Spread-Overrides, DE-Text in EN/RU, öffentliche Asset-URLs, aktive Paketnutzung.
- Rollback: Translation, Daten, Assets und Dependencies in getrennten Commits.
- Checks: Diff, Referenz-/Asset-/Importgraph, Lint, TypeScript, Build, Bildrequests, DE/EN/RU-Rendervergleich; Metadata/JSON-LD/Sitemap/Robots nur read-only verifizieren.

### Phase E – vollständige technische, visuelle und inhaltliche Regression

- Exakter Scope: alle 30 V1-Routen, drei bereinigte Übersichten, alle 15 entfernten Legacy-URLs, fünf bestehende Redirects, Navigation, Sprachwechsel, Formulare und globale Shell.
- Ausschlüsse: keine neue Funktion, Indexfreigabe, Legal-, Deployment-, Formularversand- oder Monitoringarbeit der Aufgaben 033–035.
- Abhängigkeit/Freigabe: alle technischen Cleanup-Phasen abgeschlossen; passende read-only Reviewer verfügbar.
- Risiken: Link-, Bild-, Hydration-, Typografie-, Accessibility-, Content- oder SEO-Regression.
- Rollback: fehlerverursachende Phase beziehungsweise deren atomaren Commit zurücknehmen.
- Technische Checks: `git diff --check`, `npm run lint`, `npx tsc --noEmit`, `npm run build`, next-router-check, Status-/Redirectmatrix, Metadata/JSON-LD, Sitemap/Robots, Canonicals/Hreflang und `noindex`.
- Browserprüfungen: DE/EN/RU bei mindestens 390, 768 und 1440 px; zusätzlich 430 und 2048 px bei erkennbaren Grenzfällen; Accessibility, Fokus/Recovery, Touchziele, Typografie/Zeilenumbrüche, Konsole, Hydration, Requests und Bilder.
- Abschluss: Zusammenfassung und ausdrückliche Nutzerfreigabe; erst danach darf Aufgabe 026 nach `workflow/done/` verschoben werden.

## Noindex- und SEO-Handoff

- Nach der Cleanup-Umsetzung müssen `/leistungen`, `/en/leistungen`, `/ru/leistungen`, `/ueber-uns`, `/en/ueber-uns` und `/ru/ueber-uns` erneut inhaltlich geprüft werden.
- Erst nach vollständiger Legacy-Bereinigung und ausdrücklicher Freigabe darf ihre Indexierung geändert werden.
- Metadata, Sitemap, Canonicals, Hreflang und Robots werden in diesem Planungsschritt nicht geändert.
- Vor Launch ist erneut zu prüfen, dass keine wichtige Seite versehentlich `noindex` geblieben ist und keine ausgeschlossene Seite in Sitemap/Hreflang gelangt.
- Impressum, Datenschutz und AGB bleiben bis zur externen Rechts- und Indexfreigabe separat `noindex` behandelt.
- Aufgabe 033 bleibt finale Launch-QA, Aufgabe 034 Deployment/www-Redirect/echter Formularversand, Aufgabe 035 Monitoring.

## Risiken und übergreifende Rollback-Strategie

- Cleanup wird in kleine, thematisch getrennte Commits aufgeteilt: tote Module/Assets, sichtbare Inhalte, Routen/Redirects, Translation-/SEO-Folgen.
- Vor jeder Löschung werden direkte Imports, dynamische Imports, Strings, CSS, `next/image`, Metadata/OpenGraph, Structured Data, Tests und Dokumentation erneut geprüft.
- Öffentliche Routen und Assets können externe Referenzen besitzen, die das Repository nicht zeigt; Route-/Assetentscheidungen benötigen deshalb bei relevantem Risiko Analytics/Search Console beziehungsweise eine ausdrückliche Risikoakzeptanz.
- Keine Dependency wird ohne separate Genehmigung entfernt.
- Jeder Cleanup-Commit muss einzeln revertierbar sein; kein Force-Push, kein Umschreiben abgeschlossener Task-Commits.

## Umsetzungsstand der ersten technischen Cleanup-Phase

Die ausdrücklich freigegebene erste technische Phase wurde am 19. August 2026 vollständig umgesetzt. Exakt die 52 nummerierten, zuvor erneut referenzgeprüften Quellmodule wurden entfernt; zusätzliche Dateien wurden nicht gelöscht.

| Gruppe | Entfernte Module | Ergebnis |
|---|---:|---|
| A1 | 3 | Diff-, Referenz-, ESLint- und TypeScript-Prüfung bestanden |
| A2 | 10 | Diff-, Referenz-, ESLint-, TypeScript- und Produktions-Build-Prüfung bestanden |
| A3 | 9 | Diff-, Referenz-, ESLint- und TypeScript-Prüfung bestanden |
| A4 | 16 | Diff-, Referenz-, ESLint-, TypeScript- und Produktions-Build-Prüfung bestanden |
| A5 | 3 | Diff-, Referenz-, ESLint- und TypeScript-Prüfung bestanden |
| A6 | 5 | Diff-, Referenz-, ESLint-, TypeScript- und Produktions-Build-Prüfung bestanden |
| A7 | 5 | Diff-, Referenz-, ESLint- und TypeScript-Prüfung bestanden |
| A8 | 1 | Diff-, Referenz-, ESLint-, TypeScript- und abschließende Produktions-Build-Prüfung bestanden |

- Vor der Löschung bestätigte die erneute Prüfung 52 eindeutige bestehende Pfade, acht Gruppen, null externe Laufzeit-Inbounds und neun ausschließlich gruppeninterne Importkanten. Das Kontrollmanifest liegt außerhalb des Repositorys unter `C:/tmp/unext-task-026-phase-a/module-removal-manifest.md`.
- Nach jeder Gruppe wurden `git status --short`, `git diff --name-status`, `git diff --check`, die Suche nach direkten, dynamischen, Barrel- und Stringreferenzen, `npm run lint` sowie `npx tsc --noEmit` ausgeführt. Alle Zwischenprüfungen bestanden.
- Die strengeren Produktions-Build-Gates nach A2, A4, A6 und A8 bestanden jeweils mit 51 statisch generierten Seiten. `next-env.d.ts` blieb unverändert.
- Die gruppenspezifischen Home-, Kontakt-/Formular- und Navigations-Smokes für A1, A3 und A7 wurden vor dem Commit im vollständigen Phase-A-Stand nochmals gezielt bestätigt: DE/EN/RU bei 390 Pixeln, Navigation zusätzlich bei 430 und 1440 Pixeln, sichtbare Formulare ohne Absenden, jeweils ohne Fehler oder horizontalen Overflow.
- Der abschließende Produktions-Smoke prüfte 21 DE-/EN-/RU-Kernrouten bei 390 und 1440 Pixeln mit HTTP 200, sichtbarer Hauptüberschrift, Header und Footer. Alle 21 Sprachwechsel über sieben fachliche Seitenkontexte blieben korrekt.
- Die fünf bestehenden Gutachten-Redirects antworteten direkt mit 308, erhielten den Query-Parameter und führten ohne Kette zum erwarteten Ziel. Console-, Hydration-, interne Request-, Bild-, Error-State- und Overflowfehler: null.
- Der next-router-check prüfte 33 UI-Routen, davon 16 datenladend; `loading.tsx`, `error.tsx` und erforderliche `not-found.tsx`-Grenzen fehlen auf keiner Route.
- Read-only Reviewer für Codequalität, Accessibility, Mobile, Desktop, Content-Konsistenz und Performance meldeten jeweils null durch diesen Diff verursachte Blocker. Die abschließende Launch-Synthese bestätigt die technische Commitreife dieser Phase, nicht jedoch die Launchreife der gesamten Website.
- Dependencies, `package.json`, Lockfiles, Assets, Übersetzungen, Datenquellen, Leistungsübersichten, Routen, Redirects, Metadata, Structured Data, Sitemap, Robots, `noindex`, Specs und Rechtstexte blieben unverändert. Leere Verzeichnisse, verwaiste Exporte und tote Importpfade wurden nicht gefunden.
- Phase B bis E, der separate Dependency-Abgleich, Assetentscheidungen, die externe Rechts- und Indexfreigabe sowie die Aufgaben 033 bis 035 bleiben offen. Aufgabe 026 bleibt in `workflow/active/` und der Status bleibt `in Arbeit`.
- `ROADMAP.md` bleibt unverändert, weil sich Reihenfolge, Prioritäten und Projektphasen nicht geändert haben.

## Umsetzungsstand Phase B – dreisprachige Leistungsübersichten

Die ausdrücklich freigegebene Phase B wurde am 19. August 2026 umgesetzt und vollständig geprüft. Die drei bestehenden Übersichtsrouten bleiben erhalten und zeigen ausschließlich die drei aktuellen Gutachtenarten.

### Tatsächlich geänderte Dateien

- `components/ServicesOverviewContent.tsx`
- `lib/translations/services-and-about.ts`
- `CHANGELOG.md`
- `workflow/active/026-code-cleanup-after-rework.md`

Route-, Redirect-, SEO-, Metadata-, Structured-Data-, Sitemap-, Robots-, Asset-, Dependency-, Lockfile- und Legal-Dateien wurden nicht geändert. `ROADMAP.md` und `next-env.d.ts` blieben unverändert.

### Sichtbarer Zielstand und Links

| Reihenfolge | Deutsch | Englisch | Russisch | Sprachlich passendes Ziel |
|---:|---|---|---|---|
| 1 | Unfallgutachten | Accident Damage Appraisal | Оценка ущерба после ДТП | `/gutachtenarten/unfallgutachten` mit optionalem `/en`- oder `/ru`-Präfix |
| 2 | Fahrzeugbewertung | Vehicle Valuation | Оценка стоимости автомобиля | `/gutachtenarten/fahrzeugbewertung` mit optionalem `/en`- oder `/ru`-Präfix |
| 3 | Schadendokumentation | Vehicle Damage Documentation | Фиксация повреждений | `/gutachtenarten/schadendokumentation` mit optionalem `/en`- oder `/ru`-Präfix |

- Mietwagen, Autovermietung, Werkstatt, Reparatur, Aufbereitung, Detailing, Zulassungsservice, Pannenhilfe, Abschleppen sowie weitere fachfremde Vollserviceaussagen sind auf den drei Übersichten weder sichtbar noch verlinkt.
- Bestehende aktuelle Bilder, Icons, Texte und Karten-/CTA-Muster wurden wiederverwendet. Jede Karte enthält drei tatsächlich sichtbare Merkmale; es bleibt kein zusätzlicher ausgeblendeter Feature-Text in der neuen Quelle.
- Die Detail-CTAs und Telefonaktionen besitzen lokalisierte sichtbare Texte sowie zugängliche Namen mit sichtbarem Text und Leistungskontext. Die drei Übersichtssprachen wechseln kontexttreu zwischen `/leistungen`, `/en/leistungen` und `/ru/leistungen`.
- Alle drei Routen bleiben `noindex, follow`. Metadata, Canonicals, Hreflang, Structured Data, Sitemap und Robots wurden read-only kontrolliert und nicht verändert.

### Responsive, technische und read-only Prüfungen

- DE, EN und RU wurden im Produktionsmodus bei 390 × 844, 768 × 1024 und 1440 × 1100 Pixeln geprüft. Mobile zeigt eine Spalte, Tablet zwei Karten plus kontrolliert zentrierte dritte Karte und Desktop drei gleichwertige Karten nebeneinander.
- Alle neun Ansichten lieferten HTTP 200 mit genau einer H1, genau drei Karten in korrekter Reihenfolge, korrektem `lang`, Header, Footer und `noindex, follow`. Horizontaler Overflow, abgeschnittene Inhalte, defekte Bilder, fehlgeschlagene Requests, Console-, Page- oder Hydrationfehler: jeweils null.
- Alle neun verlinkten Gutachtenziele wurden stichprobenartig im Produktionsmodus geöffnet und lieferten HTTP 200. Die drei real ausgeführten Sprachwechsel erhielten den Übersichtskontext. Formulare wurden nicht abgesendet und Resend wurde nicht aufgerufen.
- `git diff --check`, ESLint, TypeScript, Produktions-Build und der lokale next-router-check bestanden. Der Build erzeugte 51 statische Seiten; 33 Page-Routen und 16 datenladende Routen besitzen die erforderlichen Layout-Grenzen.
- Der lokale Skill `typography-line-break-check` bestätigte natürliche, lesbare Umbrüche ohne manuelle `<br>`-Elemente, feste Inhaltshöhen, `nowrap`-Regeln oder sprachspezifische Magic Numbers.
- Read-only Accessibility-, Mobile-, Desktop- und Content-Konsistenz-Reviews fanden keine Blocker. Das Content-Review erkannte einen neu eingeführten unsichtbaren vierten Feature-Text je Karte; Quelle und Ausgabe wurden daraufhin auf exakt drei sichtbare Merkmale angeglichen.
- Neun Fullpage-Screenshots und drei dreisprachige Vergleichsbilder liegen außerhalb des Repositorys unter `C:/tmp/unext-task-026-phase-b-overviews/`. Alle zwölf finalen Bilder wurden tatsächlich visuell geöffnet und ohne Layoutblocker geprüft.

### Offener Scope

- Die 15 Legacy-Service-Detailrouten bleiben vollständig bestehen und unangetastet. Ihre Entfernung erfordert unmittelbar vor Phase C eine erneute ausdrückliche Nutzerfreigabe; es wurde kein Ersatzredirect angelegt.
- Die fünf bestehenden permanenten Gutachten-Redirects, sämtliche Assets und Dependencies bleiben unverändert.
- Die Phasen C bis E, der separate Dependency- und Assetabgleich, die externe Rechts- und Indexfreigabe sowie die Aufgaben 033 bis 035 bleiben offen. Aufgabe 026 bleibt in `workflow/active/` und der Status bleibt `in Arbeit`; die Website bleibt nicht launchbereit.

## Typografie-Feinschliff der Leistungsübersichten

Der am 19. August 2026 ausdrücklich freigegebene Feinschliff betrifft ausschließlich die große H1 und ihren Introbereich auf `/leistungen`, `/en/leistungen` und `/ru/leistungen`. Ursache war die für diese langen dreisprachigen Titel zu enge bisherige H1-Begrenzung von `22ch`, die vor allem den russischen Titel unnötig turmartig umbrechen ließ.

- Zuerst wurde ausschließlich die verfügbare Breite erweitert: der gemeinsame Intro-Container von `max-w-5xl` auf `max-w-6xl` und die H1 auf `max-w-[30ch]`.
- Da RU bei 390 Pixeln nach dieser reinen Breitenkorrektur weiterhin fünf Zeilen beanspruchte, wurde danach die kleinste gemeinsame Schriftanpassung vorgenommen: `clamp(2.3rem, 1.66rem + 2.45vw, 4.7rem)` statt der bisherigen globalen Display-Skalierung `clamp(2.45rem, 1.72rem + 2.75vw, 5rem)`.
- Zeilenhöhe `0.97`, Laufweite `-0.032em`, `[text-wrap:balance]`, Introbreite `58ch`, der Abstand `mt-6` beziehungsweise 24 Pixel und das vorhandene Section-Padding blieben unverändert. Es wurden keine manuellen `<br>`-Elemente, `nowrap`-Regeln, festen Inhaltshöhen, sprachspezifischen Klassen oder Magic Numbers ergänzt.
- Finale Messung bei 390 Pixeln: DE 3 Zeilen, EN 3 Zeilen, RU 4 Zeilen bei 36,8 Pixeln Schriftgröße. Bei 768 Pixeln: DE 2, EN 2, RU 3 Zeilen bei 45,376 Pixeln. Bei 1440 Pixeln: DE 2, EN 2, RU 3 Zeilen bei 61,84 Pixeln. Der Introabstand beträgt in allen neun Fällen 24 Pixel; horizontaler Overflow jeweils 0 Pixel.
- Neun Fullpage-Screenshots und drei dreisprachige Vergleiche wurden im Produktionsmodus erzeugt, tatsächlich geöffnet und visuell geprüft. Sie liegen ausschließlich außerhalb des Repositorys unter `C:/tmp/unext-task-026-phase-b-heading-refinement/`.
- Die Browserprüfung bestätigte für alle neun Übersichtsansichten HTTP 200, korrektes `lang`, genau eine H1, genau drei korrekte Karten, alle neun richtigen Gutachtenlinks, `noindex, follow`, Header und Footer sowie null Console-, Page-, Request-, Bild-, Hydration- oder Overflowfehler. Alle neun verlinkten Gutachtenziele lieferten ebenfalls HTTP 200 ohne Laufzeit- oder Bildfehler.
- Sichtbare Texte, Karten, CTAs, zugängliche Linknamen, Linkziele, Navigation, Footer, Routen, Redirects, SEO, Metadata, Structured Data, `noindex`, Sitemap, Robots, Assets, Dependencies und die 15 Legacy-Service-Routen blieben unverändert. `ROADMAP.md` bleibt unverändert, weil sich Planung, Reihenfolge, Prioritäten und Projektphasen nicht geändert haben.
- Aufgabe 026 bleibt in `workflow/active/`, der Status bleibt `in Arbeit`; dieser Feinschliff wird nicht committet, gepusht oder als Pull Request vorbereitet und schließt die Aufgabe nicht ab.

## Umsetzungsstand Phase C – Legacy-Routen entfernt und deutsche Not-found-Ausgabe korrigiert

Die am 19. August 2026 ausdrücklich freigegebene Phase C wurde exakt auf die 15 dokumentierten öffentlichen Legacy-URLs begrenzt. Diese URLs wurden von zehn physischen `page.tsx`-Dateien bereitgestellt, weil jede der fünf dynamischen `[locale]`-Dateien sowohl die englische als auch die russische URL abdeckte. Exakt diese zehn Dateien wurden gelöscht; keine zusätzliche Datei wurde entfernt und kein Redirect ergänzt.

### Entfernte Quelldateien

1. `app/(de)/leistungen/autovermietung/page.tsx`
2. `app/(de)/leistungen/autoservice/page.tsx`
3. `app/(de)/leistungen/detailing/page.tsx`
4. `app/(de)/leistungen/zulassungsservice/page.tsx`
5. `app/(de)/leistungen/abschleppdienst-pannenhilfe/page.tsx`
6. `app/(localized)/[locale]/leistungen/autovermietung/page.tsx`
7. `app/(localized)/[locale]/leistungen/autoservice/page.tsx`
8. `app/(localized)/[locale]/leistungen/detailing/page.tsx`
9. `app/(localized)/[locale]/leistungen/zulassungsservice/page.tsx`
10. `app/(localized)/[locale]/leistungen/abschleppdienst-pannenhilfe/page.tsx`

### Deutsche Catch-all-Korrektur

Die erste Laufzeitprüfung nach den Löschungen zeigte für die fünf deutschen URLs zunächst die generische englische Next.js-Standardseite. Ursache war, dass `app/(de)/[...notFound]/page.tsx` unbekannte Unterpfade unter dem bereits vorhandenen statischen `/leistungen`-Segment nicht übernahm.

Die ausdrücklich freigegebene Korrektur ergänzt ausschließlich `app/(de)/leistungen/[...notFound]/page.tsx`. Die Route verwendet das bestehende Projektmuster, ruft ausschließlich `notFound()` auf und dupliziert keine sichtbare Oberfläche. `/leistungen` bleibt eine eigenständige statische Seite; die fünf Redirects in `next.config.mjs` behalten Vorrang und wurden nicht verändert. Die generische englische Ausgabe auf den deutschen Legacy-Pfaden ist damit behoben.

### Vollständige HTTP-, Not-found- und noindex-Matrix

Alle 15 URLs zeigen jetzt den sichtbaren lokalisierten UNEXT-Zustand fehlerfrei. Durch die gestreamten Catch-all-Routen antworten DE, EN und RU technisch jeweils mit HTTP 200 und `noindex`; dieser Soft-404-Status wird nicht als HTTP 404 dargestellt. Console-, Hydration-, Page-, interne Request-, Bild- oder Overflowfehler traten nicht auf.

| Sprache | Bisheriger Pfad | Entfernte Quelldatei | HTTP | Sichtbarer Not-found-Zustand | `noindex` | Kein Redirect | Browser-/Recovery-Ergebnis |
|---|---|---|---:|---|---|---|---|
| DE | `/leistungen/autovermietung` | `app/(de)/leistungen/autovermietung/page.tsx` | 200 | DE, `lang="de"` | ja | ja | Recovery korrekt; keine Laufzeitfehler |
| EN | `/en/leistungen/autovermietung` | `app/(localized)/[locale]/leistungen/autovermietung/page.tsx` | 200 | EN | ja | ja | Recovery korrekt; keine Laufzeitfehler |
| RU | `/ru/leistungen/autovermietung` | `app/(localized)/[locale]/leistungen/autovermietung/page.tsx` | 200 | RU | ja | ja | Recovery korrekt; keine Laufzeitfehler |
| DE | `/leistungen/autoservice` | `app/(de)/leistungen/autoservice/page.tsx` | 200 | DE, `lang="de"` | ja | ja | Recovery korrekt; keine Laufzeitfehler |
| EN | `/en/leistungen/autoservice` | `app/(localized)/[locale]/leistungen/autoservice/page.tsx` | 200 | EN | ja | ja | Recovery korrekt; keine Laufzeitfehler |
| RU | `/ru/leistungen/autoservice` | `app/(localized)/[locale]/leistungen/autoservice/page.tsx` | 200 | RU | ja | ja | Recovery korrekt; keine Laufzeitfehler |
| DE | `/leistungen/detailing` | `app/(de)/leistungen/detailing/page.tsx` | 200 | DE, `lang="de"` | ja | ja | Recovery korrekt; keine Laufzeitfehler |
| EN | `/en/leistungen/detailing` | `app/(localized)/[locale]/leistungen/detailing/page.tsx` | 200 | EN | ja | ja | Recovery korrekt; keine Laufzeitfehler |
| RU | `/ru/leistungen/detailing` | `app/(localized)/[locale]/leistungen/detailing/page.tsx` | 200 | RU | ja | ja | Recovery korrekt; keine Laufzeitfehler |
| DE | `/leistungen/zulassungsservice` | `app/(de)/leistungen/zulassungsservice/page.tsx` | 200 | DE, `lang="de"` | ja | ja | Recovery korrekt; keine Laufzeitfehler |
| EN | `/en/leistungen/zulassungsservice` | `app/(localized)/[locale]/leistungen/zulassungsservice/page.tsx` | 200 | EN | ja | ja | Recovery korrekt; keine Laufzeitfehler |
| RU | `/ru/leistungen/zulassungsservice` | `app/(localized)/[locale]/leistungen/zulassungsservice/page.tsx` | 200 | RU | ja | ja | Recovery korrekt; keine Laufzeitfehler |
| DE | `/leistungen/abschleppdienst-pannenhilfe` | `app/(de)/leistungen/abschleppdienst-pannenhilfe/page.tsx` | 200 | DE, `lang="de"` | ja | ja | Recovery korrekt; keine Laufzeitfehler |
| EN | `/en/leistungen/abschleppdienst-pannenhilfe` | `app/(localized)/[locale]/leistungen/abschleppdienst-pannenhilfe/page.tsx` | 200 | EN | ja | ja | Recovery korrekt; keine Laufzeitfehler |
| RU | `/ru/leistungen/abschleppdienst-pannenhilfe` | `app/(localized)/[locale]/leistungen/abschleppdienst-pannenhilfe/page.tsx` | 200 | RU | ja | ja | Recovery korrekt; keine Laufzeitfehler |

### Regression und Prüfergebnis

- Die drei Leistungsübersichten liefern HTTP 200, korrektes `lang`, genau die drei aktuellen Gutachtenlinks und weiterhin `noindex, follow`. Es gibt dort keine Links zu den entfernten URLs.
- Alle neun aktuellen Gutachtenarten-Zielseiten liefern HTTP 200. Canonicals, Hreflang und Structured Data enthalten keine Legacy-Leistung; die Sitemap enthält keine entfernte URL.
- Die fünf geschützten Gutachten-Redirects bleiben unverändert, antworten direkt mit 308, erhalten die geprüften Query-Parameter und führen ohne Kette oder Schleife auf ein Ziel mit HTTP 200.
- Die real ausgeführten Sprachwechsel der drei Leistungsübersichten erhalten den Seitenkontext. Header, Footer, aktuelle Karten und weitere interne V1-Links enthalten keine entfernte Route.
- Zehn `page.tsx`-Dateien wurden entfernt und eine eng begrenzte Catch-all-Route ergänzt. Dadurch beträgt die Anzahl der UI-Page-Quelldateien 24; die Anzahl der fachlichen öffentlichen Sprachseiten sank weiterhin um 15. Der Produktions-Build sank von 51 auf 36 statische Seiten.
- Der lokale `next-router-check` fand unter den 24 verbleibenden UI-Routen elf datenladende Routen und keine fehlende erforderliche `loading.tsx`-, `error.tsx`- oder `not-found.tsx`-Grenze im jeweiligen Layout-Scope. Die neue `/leistungen/[...notFound]`-Route ist nicht datenladend und verwendet die deutsche Scope-Grenze.
- `git diff --check`, ESLint, TypeScript und ein vollständig neu erzeugter Produktions-Build bestanden. Ein erster TypeScript-Lauf referenzierte ausschließlich veraltete ignorierte `.next/dev/types`; nach dem frischen Build und dem Entfernen dieses generierten Cachebestands bestand TypeScript ohne Quellcodekorrektur.
- Alle 15 Legacy-URLs sowie `/leistungen/unbekannte-leistung` und `/leistungen/unbekannt/weiter` zeigen die korrekte Sprache, das passende HTML-`lang`, `noindex` und drei sprachgerechte Recovery-Links ohne Weiterleitung. Neun Tastaturprüfungen bestätigten sichtbaren Fokus und Enter-Navigation für alle drei Recovery-Ziele in DE, EN und RU.
- Sechs Fullpage-Screenshots und je ein DE-/EN-/RU-Vergleich bei 390 × 844 und 1440 × 1100 Pixeln wurden unter `C:/tmp/unext-task-026-phase-c-german-not-found-fix/` erzeugt und tatsächlich geöffnet. Alle Sprachen sind vollständig sichtbar, ohne fremdsprachige Resttexte, Overflow, abgeschnittene Inhalte oder defekte Bilder.
- `ROADMAP.md` bleibt unverändert, weil Reihenfolge, Prioritäten und Projektphasen unverändert bleiben. Phase D wurde nicht begonnen. Aufgabe 026 bleibt aktiv und `in Arbeit`; die deutsche Lokalisierungsabweichung ist behoben, die tatsächlichen DE-/EN-/RU-HTTP-200-Soft-404s bleiben offen dokumentiert.

## Umsetzungsstand Phase D1a – ungenutzte Übersetzungs- und Wörterbuchdaten entfernt

Die am 19. August 2026 ausdrücklich freigegebene Untergruppe D1a wurde ausschließlich auf die zehn bestätigten logischen Kandidaten A7 bis A10 begrenzt. Es wurden keine sichtbaren Texte geändert und keine ähnlich wirkenden zusätzlichen Altwerte bereinigt.

### Exakt entfernte Eigenschaften

- A7.1: `homeTranslations.de/en/ru.expressCourier`
- A7.2: `homeTranslations.de/en/ru.testimonials`
- A7.3: `homeTranslations.de/en/ru.trust`, `legacyHomeTranslationOverrides.en/ru.trust` sowie ausschließlich die EN-/RU-Trust-Zusammenführungen in `lib/translations.ts`
- A8.1: `aboutTranslationOverrides.de/en/ru`, ihr Import und ihre drei Spreads; die danach verbraucherlose Datei `lib/translations/about-overrides.ts` wurde vollständig gelöscht
- A8.2 bis A8.4: `servicesAndAboutTranslations.de/en/ru.aboutPage` und ausschließlich die drei `aboutPage`-Zusammenführungen in `lib/translations.ts`
- A9.1/A9.2: die über `contactTranslations.en/ru` ausgegebenen Quellfelder `legacyContactTranslations.en/ru.serviceContactsTitle`, `.serviceContactsDescription` und `.serviceContacts`
- A10: ausschließlich `servicePagesPart1.en.accident` und `servicePagesPart1.ru.accident`

Der benötigte `servicePagesPart1.de.accident`-Block, alle drei `rental`-Blöcke, `service-pages-part2.ts`, `appraisal-pages.ts` und sämtliche `appraisalPageTranslations` blieben unverändert. Ebenso unverändert blieben aktuelle Home-, About-, Kontakt-, Formular-, Legal-, Navigations- und Footertexte sowie Komponenten, Routen, Redirects, Metadata, Structured Data, Sitemap, Robots, `noindex`, Assets, Dependencies und Lockfiles.

### Referenz-, Wörterbuch- und Ausgabevergleich

- Vor jeder Änderung wurde unter `C:/tmp/unext-task-026-phase-d1a-baseline/` eine maschinenlesbare Baseline mit vollständigen resultierenden DE-/EN-/RU-Wörterbüchern, geschützten Wörterbuchbereichen, sichtbarer Ausgabe, Navigation, Sprachwechseln, Formulartexten, Metadata, Structured Data, Git-Dateiliste und Referenzsuchen angelegt.
- Die erneute direkte, dynamische, Barrel-, Re-Export-, Property-, Spread-, String-, Key-, Typ-, Test-, Skript-, Server-, Client-, Metadata-, Structured-Data-, Sitemap- und Robots-Suche fand keinen verbliebenen Verbraucher der entfernten Eigenschaften. Die Override-Reihenfolge der aktiven Daten bleibt unverändert.
- Der maschinenlesbare Vergleich meldet `protectedDictionariesIdentical: true` und `browserSnapshotsIdentical: true` ohne Differenz. Alle geschützten Schlüssel und Werte, sichtbaren Texte, Metadata und Structured Data sind vor und nach D1a identisch; EN und RU erhielten keine deutschen oder anderssprachigen Fallbacktexte.
- Wegen der vollständig identischen sichtbaren Ausgabe waren weder neue Fullpage-Screenshots noch der `typography-line-break-check` erforderlich.

### Technische und dreisprachige Regression

- `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` bestanden. Der Produktions-Build erzeugte weiterhin 36 statische Seiten.
- Der lokale `next-router-check` prüfte 24 UI-Routen, stufte 14 als datenladend beziehungsweise `notFound()`-fähig ein und fand 0 fehlende erforderliche `loading.tsx`-, `error.tsx`- oder `not-found.tsx`-Dateien im jeweiligen Scope.
- Browsergestützt geprüft wurden Startseite, Über uns und Kontakt in DE, EN und RU sowie alle neun aktuellen Gutachtenartenseiten, insgesamt 18 Routen. Jede Route lieferte HTTP 200 und das erwartete `html lang`.
- Sichtbare Haupttexte, Navigation, Sprachwechsel, Kontakt- und Formulartexte, Metadata, Structured Data und Bildpfade blieben identisch. Es gab 0 Console-, Hydration-, Page-, Request- oder HTTP-Fehler sowie nach vollständigem Scrollen 0 sichtbare defekte Bilder. Kein Formular wurde abgesendet und kein Resend-Aufruf ausgelöst.
- `next-env.d.ts` blieb unverändert. `ROADMAP.md` bleibt unverändert, weil Reihenfolge, Prioritäten und Projektphasen nicht geändert wurden.
- D1b, D1c, D2, D3 und Phase E wurden nicht begonnen. Aufgabe 026 bleibt in `workflow/active/` und im Status `in Arbeit`.

## Umsetzungsstand Phase D1b – verwaiste Legacy-Service-Detailkomponenten entfernt

Die am 19. August 2026 ausdrücklich freigegebene Untergruppe D1b wurde ausschließlich auf fünf nach Phase C verwaiste React-Komponenten begrenzt. Vor der Löschung bestätigten getrennte Suchen nach direkten und dynamischen Imports, Barrel-Exports, Re-Exports, Symbolen, Dateipfaden, Strings, Typen, Tests, Skripten, Server- und Clientverbrauchern, App-Routen, Metadata sowie Structured Data für jede Komponente null Verbraucher außerhalb ihrer eigenen Datei.

### Exakt gelöschte Komponenten

- `components/RentalServiceDetailContent.tsx`
- `components/WorkshopServiceDetailContent.tsx`
- `components/DetailingServiceDetailContent.tsx`
- `components/RegistrationServiceDetailContent.tsx`
- `components/TowingServiceDetailContent.tsx`

`components/AccidentServiceDetailContent.tsx`, `components/DamageDocumentationServiceDetailContent.tsx`, `components/VehicleValuationServiceDetailContent.tsx`, `components/service-page-layout.tsx` und `components/service-inquiry-form.tsx` blieben unverändert. Es wurde keine ähnlich wirkende Komponente und keine weitere technische Datei gelöscht.

### Referenz- und Vorher-/Nachher-Nachweis

- Vor jeder Änderung wurde unter `C:/tmp/unext-task-026-phase-d1b-baseline/` eine maschinenlesbare Baseline mit Git-Dateiliste, App- und Build-Routenlisten, Import-, Export-, Symbol-, Pfad- und Stringreferenzen, Hashes aller geschützten Dateien sowie vollständiger Browserausgabe für 18 Kernrouten und 15 Legacy-URLs angelegt.
- Nach der Löschung blieb außerhalb der historischen und aktiven Workflow-Dokumentation keine Referenz auf einen der fünf Komponentennamen oder Dateipfade bestehen. Direkte und dynamische Imports, Barrel- und Re-Exports, TypeScript-Verwendungen, Tests, Skripte, Metadata-, Structured-Data-, Server- und Clientverbraucher wurden nicht gefunden.
- Der normalisierte maschinenlesbare Vergleich meldet `dictionariesIdentical: true`, `browserSnapshotsIdentical: true`, `protectedFilesIdentical: true`, `routeFilesIdentical: true` und `buildRoutesIdentical: true`, jeweils ohne Differenz. Normalisiert wurden ausschließlich die verschiedenen lokalen Prüfports, daraus abgeleitete absolute Bild-URLs, nicht semantische Build-Chunk-Namen und die nicht deterministische Reihenfolge der Dateiausgabe.
- Sichtbare Haupttexte, Navigation, Kontakt- und Formulartexte, Metadata, Structured Data, Bildpfade und die lokalisierte Not-found-/Recovery-Ausgabe blieben identisch. Da keine sichtbare Abweichung vorlag, waren neue Fullpage-Screenshots sowie zusätzliche Accessibility-, Typografie- oder visuelle Reviewer nicht erforderlich.

### Technische und dreisprachige Regression

- `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` bestanden. Der Produktions-Build erzeugte vor und nach D1b jeweils 36 statische Seiten; `next-env.d.ts` blieb unverändert.
- Der lokale `next-router-check` prüfte 24 UI-Routen, davon elf datenladend, und fand null fehlende erforderliche `loading.tsx`-, `error.tsx`- oder `not-found.tsx`-Dateien im jeweiligen Scope.
- Browsergestützt wurden Startseite, Über uns und Kontakt in DE, EN und RU sowie alle neun Gutachtenartenseiten geprüft, insgesamt 18 Kernrouten. Zusätzlich wurden alle 15 in Phase C entfernten Legacy-URLs geprüft. Alle 33 URLs antworteten weiterhin mit HTTP 200 und korrektem `html lang`; die Legacy-URLs behielten exakt ihren lokalisierten `noindex`-Soft-404-/Recovery-Zustand.
- Der vollständige Browser- und Bild-Smoke meldete null Console-, Hydration-, Page-, Request-, HTTP- oder sichtbare Bildfehler. Sechs Sprachwechsel bewahrten den Seitenkontext, drei Navigationstests führten zum korrekten Kontaktziel. Kein Formular wurde abgesendet und kein Resend-Aufruf ausgelöst.
- Alle Übersetzungs- und Wörterbuchdaten einschließlich `service-pages-part1.ts`, `service-pages-part2.ts` und `appraisal-pages.ts` blieben unverändert. Ebenso unverändert blieben die fünf zugehörigen Bilder, sämtliche Routen und Redirects, Metadata, Structured Data, Sitemap, Robots, Canonicals, Hreflang, `noindex`, Dependencies, Lockfiles und Konfigurationen.
- `ROADMAP.md` bleibt unverändert, weil Reihenfolge, Prioritäten und Projektphasen nicht geändert wurden. D1c, D2, D3 und Phase E wurden nicht begonnen. Aufgabe 026 bleibt in `workflow/active/` und im Status `in Arbeit`.

## Umsetzungsstand Phase D1c – verbliebene Legacy-Service-Wörterbuchdaten entfernt

Die am 21. August 2026 ausdrücklich freigegebene Untergruppe D1c wurde eigenschaftsgenau auf die nicht mehr gelesenen Wörterbuchblöcke der fünf in Phase C entfernten und in D1b komponentenseitig bereinigten Legacy-Leistungsfamilien begrenzt. Vor der Änderung bestätigten direkte, dynamische, Barrel-, Re-Export-, Property-, Symbol-, String-, Key-, Spread-, Typ-, Test-, Skript-, Server-, Client-, Metadata-, Structured-Data-, Sitemap- und Robots-Suchen für jeden Zielblock null Verbraucher außerhalb seiner Definition und bisherigen Zusammenführung in `lib/translations.ts`.

### Exakt entfernte Sprachblöcke und Zusammenführungen

- `servicePagesPart1.de.rental`, `servicePagesPart1.en.rental`, `servicePagesPart1.ru.rental`
- `servicePagesPart2.de/en/ru.workshop`
- `servicePagesPart2.de/en/ru.detailing`
- `servicePagesPart2.de/en/ru.registration`
- `servicePagesPart2.de/en/ru.towing`

Aus `lib/translations.ts` wurden ausschließlich der Import von `servicePagesPart2`, die Spreads `servicePagesPart2.de`, `servicePagesPart2.en` und `servicePagesPart2.ru` sowie die danach funktionslosen Spreads `servicePagesPart1.en` und `servicePagesPart1.ru` entfernt. Der Import von `servicePagesPart1`, der deutsche Spread `servicePagesPart1.de` und die EN-/RU-Spreads von `appraisalPageTranslations` blieben erhalten. `service-pages-part2.ts` enthielt nach der Entfernung der zwölf freigegebenen Part-2-Blöcke keine fachlichen Daten mehr und wurde vollständig gelöscht; die leeren Locale-Hüllen `servicePagesPart1.en` und `.ru` bleiben aus Typgründen erhalten.

### Wörterbuch-, Referenz- und Schutzvergleich

- Unter `C:/tmp/unext-task-026-phase-d1c-baseline/` liegt die maschinenlesbare Vorher-Baseline mit vollständigen Part-1-/Part-2-Quellobjekten, resultierenden DE-/EN-/RU-Wörterbüchern, Git-, App- und Build-Dateilisten, Referenzsuchen, geschützten Datei-Hashes sowie Browser-, Metadata- und Structured-Data-Ausgaben für 33 URLs.
- Der vollständige Wörterbuchvergleich zeigt exakt die 15 freigegebenen Pfade `de/en/ru.serviceDetail.pages.rental/workshop/detailing/registration/towing` als entfernt. `protectedDictionariesIdentical: true` bestätigt null weitere Schlüssel- oder Wertänderung; alle fünf Legacy-Familien fehlen anschließend wie vorgesehen im resultierenden Wörterbuch.
- `servicePagesPart1.de.accident` blieb vollständig wertgleich; sein stabiler Hash lautet vor und nach D1c `23faf7df9c541a34e55b82a5957ebf1b6d947debfae21f2e169f978d4d9498ee`. `appraisal-pages.ts`, sämtliche `appraisalPageTranslations`, aktuelle Gutachtenarten-, Layout-, Formular-, Services-, Home-, About-, Kontakt-, Legal-, Header- und Footerwerte blieben unverändert.
- Die erneute Referenzprüfung fand keine verbliebene Definition, Zusammenführung oder Verwendung der 15 Zielblöcke beziehungsweise von `servicePagesPart2`. Ähnliche legitime Wörter in aktuellen Home-, Gutachten-, Schaden-, Dokumenten- oder Kontakttexten wurden nicht verändert; der bereits vorhandene Legacy-Routenstring in der geschützten gemeinsamen Layout-Komponente blieb außerhalb von D1c dokumentiert und unangetastet.

### Technische und dreisprachige Regression

- `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` bestanden. Der Produktions-Build erzeugte vor und nach D1c jeweils 36 statische Seiten; `next-env.d.ts` blieb unverändert.
- Der lokale `next-router-check` prüfte 24 UI-Routen, davon elf datenladend, und fand null fehlende erforderliche `loading.tsx`-, `error.tsx`- oder `not-found.tsx`-Dateien im jeweiligen Scope.
- Der normalisierte Browservergleich meldet `browserSnapshotsIdentical: true` für Startseite, Über uns und Kontakt in DE, EN und RU, alle neun Gutachtenartenseiten sowie alle 15 Legacy-URLs. Sichtbare Haupttexte, Navigation, Kontakt- und Formulartexte, Metadata, Structured Data, Bildpfade und Fehlerzustände blieben identisch; EN und RU erhielten keine fremdsprachigen Fallbacktexte.
- Alle 18 Kernrouten und alle 15 Legacy-URLs antworteten mit HTTP 200 und korrektem `html lang`; die Legacy-URLs behielten exakt ihre lokalisierte `noindex`-Soft-404-/Recovery-Ausgabe. Sechs Sprachwechsel, drei Navigationstests und der vollständige Bild-Smoke bestanden ohne Console-, Hydration-, Page-, Request-, HTTP- oder sichtbare Bildfehler.
- Die fünf geschützten Gutachten-Redirects antworteten unverändert direkt mit 308, erhielten die Query-Parameter und führten ohne Kette oder Schleife auf Ziele mit HTTP 200. Kein Formular wurde abgesendet und kein Resend-Aufruf ausgelöst.
- Komponenten, Routen, Catch-all-/Not-found-Dateien, Redirectkonfiguration, Assets, Dependencies, Lockfiles, Metadata, Structured Data, Sitemap, Robots, Canonicals, Hreflang und `noindex` blieben unverändert. Neue Fullpage-Screenshots sowie Accessibility-, Typografie- oder visuelle Reviewer waren wegen identischer sichtbarer Ausgabe nicht erforderlich.
- `ROADMAP.md` bleibt unverändert, weil Reihenfolge, Prioritäten und Projektphasen nicht geändert wurden. D2, D3 und Phase E wurden nicht begonnen. Aufgabe 026 bleibt in `workflow/active/` und im Status `in Arbeit`.

## Umsetzungsstand Phase D2 – ungenutzte statische Assets entfernt

Die am 21. August 2026 ausdrücklich freigegebene Untergruppe D2 wurde exakt auf fünf ungenutzte Platzhalterdateien und das nach Entfernung der Express-Kurier-Sektion verwaiste Courier-Bild begrenzt. Vor der Löschung bestätigten getrennte Suchen nach direkten, dynamischen und zusammengesetzten Pfaden, Imports, `require`-Aufrufen, CSS-/Style-, `next/image`-/`img`-, App-, Server-, Client-, Test-, Skript-, JSON-, Konfigurations-, Metadata-, OpenGraph-, Twitter-, Structured-Data-, Manifest-, Favicon-, Sitemap- und Robots-Verwendungen für jedes Asset null aktive Verbraucher. Auch die erzeugte Build-Ausgabe und die Browserbaseline enthielten keine Zielreferenz beziehungsweise keinen Request auf eines der sechs Assets.

### Exakt gelöschte Assets und Baseline

- `public/placeholder.jpg` – 1.064 Bytes, SHA-256 `14be0c7aa11cca1e78f0966176b286a6d36d00ec64be027775dfeb33d8e2dfdf`, `image/jpeg`
- `public/placeholder.svg` – 3.253 Bytes, SHA-256 `64badf7aabda0b9630b87020ffb6095cb858ccbcf66b355c2aa08b1063954d3b`, `image/svg+xml`
- `public/placeholder-logo.png` – 568 Bytes, SHA-256 `d7c39d978af643ba9525de6fb8171e0f834882db4110c82ecad0df3f4f69551a`, `image/png`
- `public/placeholder-logo.svg` – 3.208 Bytes, SHA-256 `19a9e968f4656d52a4c249b4056117ad109370ba9da51cdc630ddded74cec73b`, `image/svg+xml`
- `public/placeholder-user.jpg` – 1.635 Bytes, SHA-256 `22be067d748175598a5e00123902f5c8332dd7f101de03dfb92ec08d85bb5e53`, `image/jpeg`
- `public/images/service-express-courier.webp` – 74.528 Bytes, SHA-256 `6ec714b9bd01c80e54c6642b81611d2a822612703766d18fce2a00cb5713ccac`, `image/webp`

Alle sechs Dateien waren Git-getrackt und ihre direkten öffentlichen URLs lieferten vor D2 jeweils HTTP 200 mit dem erwarteten Bild-Content-Type und exakt dem dokumentierten Binärinhalt. Die maschinenlesbare Vorher-Baseline und die Nachher-Ergebnisse liegen außerhalb des Repositorys unter `C:/tmp/unext-task-026-phase-d2-baseline/`.

### Direkte URLs nach der Löschung

- `/placeholder.jpg`, `/placeholder.svg`, `/placeholder-logo.png`, `/placeholder-logo.svg` und `/placeholder-user.jpg` antworten aufgrund des vorhandenen lokalisierten Root-Fallbacks mit HTTP 200 und `text/html; charset=utf-8`.
- `/images/service-express-courier.webp` antwortet mit HTTP 404 und `text/html; charset=utf-8`.
- Keine der sechs URLs liefert den früheren Binärinhalt oder einen Bild-Content-Type. Es besteht kein Redirect; es wurde weder eine Ersatzdatei noch ein neuer Placeholder angelegt.

### Schutz-, Referenz- und Ausgabevergleich

- Der normalisierte Vergleich meldet `dictionariesIdentical: true`, `browserSnapshotsIdentical: true`, `protectedFilesIdentical: true`, `routeFilesIdentical: true` und `buildRoutesIdentical: true`, jeweils ohne Differenz. Die sechs Zieldateien fehlen wie vorgesehen; Laufzeit- und Buildreferenzsuchen blieben ohne Treffer.
- Die zwölf ausdrücklich geschützten unklaren Assets, die fünf ehemaligen Legacy-Service-Bilder und sämtliche aktiven Logo-, Marken-, Hero-, About-, Gutachtenarten-, OpenGraph-, Social-Media-, Favicon- und Icon-Assets blieben bytegleich erhalten.
- Sichtbare Haupttexte, Navigation, Sprachwechsel, Kontakt- und Formulartexte, Metadata, Structured Data, Bildpfade und Fehlerzustände blieben auf allen geschützten DE-/EN-/RU-Ausgaben identisch. Wegen der vollständig identischen Ausgabe und null Bildfehler waren keine neuen Fullpage-Screenshots sowie keine zusätzlichen Accessibility-, Typografie-, Mobile- oder Desktop-Reviewer erforderlich.

### Technische, Browser- und Reviewer-Prüfung

- `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` bestanden. Der Produktions-Build erzeugte vor und nach D2 jeweils 36 statische Seiten; `next-env.d.ts` blieb unverändert.
- Der lokale `next-router-check` prüfte 24 UI-Routen, davon elf datenladend, und fand null fehlende erforderliche `loading.tsx`-, `error.tsx`- oder `not-found.tsx`-Dateien im jeweiligen Scope.
- Der Produktions-Browservergleich prüfte 18 Kernrouten und alle 15 in Phase C entfernten Legacy-URLs. Alle 33 URLs antworteten wie zuvor mit HTTP 200 und korrektem `html lang`; die Legacy-URLs behielten ihren lokalisierten `noindex`-Soft-404-/Recovery-Zustand. 48 Baseline-Bildrequests enthielten kein Zielasset; nach D2 traten null defekte Bilder oder Requestfehler auf.
- Sechs kontexttreue Sprachwechsel und drei Navigationswege bestanden. Die fünf geschützten Gutachten-Redirects antworteten direkt mit 308, erhielten `?phase=d2&keep=1`, führten ohne Kette oder Schleife zum erwarteten Ziel und dieses antwortete mit HTTP 200. Es gab null Console-, Hydration-, Page-, Request- oder HTTP-Fehler. Kein Formular wurde abgesendet und kein Resend-Aufruf ausgelöst.
- Der verpflichtende `quality_reviewer` meldete null Verstöße und null Hinweise. Der `performance_budget_reviewer` meldete null Performance-Blocker und null Budget-Risiken; die Löschung reduziert ausschließlich tote statische Assets und führt nach den Messdaten zu keinem neuen LCP-, CLS- oder INP-Risiko.
- Komponenten, Routen, Catch-all-/Not-found-Dateien, Redirects, Übersetzungen, Wörterbuchdaten, Metadata, Structured Data, Sitemap, Robots, Canonicals, Hreflang, `noindex`, Dependencies, Lockfiles, Next.js-Konfigurationen und Specs blieben unverändert. `ROADMAP.md` bleibt unverändert, weil Reihenfolge, Prioritäten und Projektphasen nicht geändert wurden. D3 und Phase E wurden nicht begonnen. Aufgabe 026 bleibt in `workflow/active/` und im Status `in Arbeit`.

## Umsetzungsstand Phase D3 – ungenutzte direkte Dependencies entfernt

Die am 21. August 2026 ausdrücklich freigegebene Untergruppe D3 wurde als unteilbare Gruppe exakt auf 35 direkte Runtime-Dependencies begrenzt. Vor der Änderung bestätigten direkte, dynamische, `require`-, `import()`-, Type-Import-, Re-Export-, Barrel-, CSS-, Plugin-, Konfigurations-, Komponenten-, Routen-, Server-, Client-, Test-, Skript- und Build-Suchen für jeden Kandidaten null aktive Verbraucher. Historische Workflow-, Spec- und Changelog-Erwähnungen wurden erkannt, aber nicht als Laufzeitverbraucher gewertet und nicht umgeschrieben. Die vollständige maschinenlesbare Baseline liegt außerhalb des Repositorys unter `C:/tmp/unext-task-026-phase-d3-baseline/`.

### Exakt entfernte direkte Dependencies

- Formularreste: `@hookform/resolvers`, `react-hook-form`
- Nicht mehr verwendete Radix-Primitives: `@radix-ui/react-alert-dialog`, `@radix-ui/react-aspect-ratio`, `@radix-ui/react-avatar`, `@radix-ui/react-checkbox`, `@radix-ui/react-collapsible`, `@radix-ui/react-context-menu`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-hover-card`, `@radix-ui/react-menubar`, `@radix-ui/react-navigation-menu`, `@radix-ui/react-popover`, `@radix-ui/react-progress`, `@radix-ui/react-radio-group`, `@radix-ui/react-scroll-area`, `@radix-ui/react-select`, `@radix-ui/react-slider`, `@radix-ui/react-switch`, `@radix-ui/react-tabs`, `@radix-ui/react-toast`, `@radix-ui/react-toggle`, `@radix-ui/react-toggle-group`, `@radix-ui/react-tooltip`
- Weitere UI-/Hilfspakete: `@vercel/analytics`, `autoprefixer`, `cmdk`, `date-fns`, `embla-carousel-react`, `input-otp`, `react-day-picker`, `react-resizable-panels`, `recharts`, `sonner`, `vaul`

Die Änderung erfolgte mit genau einem `npm uninstall --no-audit --no-fund --ignore-scripts` und exakt diesen 35 Paketnamen. Es wurde keine weitere Dependency oder Dev-Dependency entfernt, ergänzt, aktualisiert oder herabgesetzt.

### Dependency- und Lockfile-Ergebnis

- Die Anzahl direkter Runtime-Dependencies sank wie geplant von 49 auf 14; die Anzahl der Dev-Dependencies blieb bei elf. Die Root-Einträge von `package.json` und `package-lock.json` stimmen exakt überein.
- Alle geschützten Runtime-Pakete blieben versionsgleich: `@radix-ui/react-accordion`, `@radix-ui/react-dialog`, `@radix-ui/react-label`, `@radix-ui/react-separator`, `@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `lucide-react`, `next`, `next-themes`, `react`, `react-dom`, `tailwind-merge` und `zod`. Accordion, mobiles Dialog-/Sheet-Menü, Labels, Separator, Button-Slot/CVA, Theme-System und Zod-Formularvalidierung bleiben damit technisch erhalten.
- Sämtliche Dev-Dependencies einschließlich `@playwright/test`, `@tailwindcss/postcss`, `postcss`, Tailwind, ESLint und TypeScript blieben mit unveränderten Versionsangaben erhalten. `autoprefixer` war ausschließlich eine ungenutzte normale Runtime-Dependency; die unveränderte PostCSS-Konfiguration registriert weiterhin nur `@tailwindcss/postcss`.
- Das syntaktisch gültige Lockfile blieb bei Version 3. Npm entfernte exakt die 35 direkten Root-Einträge und insgesamt 99 nicht mehr benötigte Paketeinträge. Es kam kein Lockfile-Eintrag hinzu; bei allen verbleibenden Einträgen blieben Version, `resolved` und `integrity` unverändert. `@radix-ui/react-collapsible` bleibt korrekt transitiv erhalten, weil es vom geschützten Accordion-System benötigt wird.
- Die Vorher-Baseline meldete einen bereits bestehenden, nicht versionierten lokalen `node_modules`-Versatz: installiertes `next` 16.2.6 statt der unverändert deklarierten und gelockten Version 16.2.4 sowie fünf extraneous optionale WASM-Verzeichnisse. Der freigegebene npm-Lauf richtete `next` lokal wieder auf 16.2.4 aus. `npm ls --depth=0` endet danach mit Exit 0 und meldet keine fehlende oder ungültige direkte Dependency; die fünf schon vorher vorhandenen extraneous Verzeichnisse bleiben als lokaler, nicht eingecheckter Hinweis bestehen und wurden ohne zusätzlichen npm-Befehl nicht bereinigt.

### Technische und Build-Prüfung

- `git diff --check`, `npm run lint`, `npx tsc --noEmit` und der Produktions-Build bestanden. Der Build erzeugte vor und nach D3 jeweils 36 statische Seiten ohne Client-, Server- oder Buildfehler; Routenliste, App-Manifest und Anzahl der erfassten Client-/Server-Chunks blieben mit 281 identisch.
- Chunknamen und -Hashes wurden neu erzeugt, weil der lokale Next-Installationsbaum von der vorher abweichenden Version 16.2.6 auf die in `package.json` und Lockfile unverändert vorgeschriebene Version 16.2.4 zurückgeführt wurde. Dies ist keine Manifest- oder Lockfile-Versionsänderung. Der anschließende vollständige Browservergleich bestätigt null sichtbare, funktionale oder SEO-relevante Abweichung.
- Der lokale `next-router-check` prüfte 24 UI-Routen, davon elf datenladend, und fand null fehlende erforderliche `loading.tsx`-, `error.tsx`- oder `not-found.tsx`-Dateien im jeweiligen Scope.
- Die erneute Import-, Type-Import-, Re-Export-, `require`-, String-, CSS-, Konfigurations-, Skript- und Buildsuche fand keine aktive Verwendung eines entfernten direkten Pakets. Außer `package.json` und dem npm-generierten `package-lock.json` wurde keine technische Datei verändert.

### Dreisprachige Browser- und Funktionsregression

- Der normalisierte Browservergleich meldet identische sichtbare Haupttexte, Navigation, Kontakt- und Formulartexte, Metadata, Structured Data, Bildpfade und Fehlerzustände auf 18 Kernrouten und allen 15 in Phase C entfernten Legacy-URLs. Alle 33 URLs antworteten weiterhin mit HTTP 200 und korrektem `html lang`; die Legacy-URLs behielten ihren lokalisierten `noindex`-Soft-404-/Recovery-Zustand.
- Der vollständige Bild- und Request-Smoke meldete vor und nach D3 auf 33 URLs null defekte Bilder und null Requestfehler. Es gab keine Console-, Hydration-, Page-, Modul- oder HTTP-Fehler.
- Drei mobile Menüs ließen sich öffnen und schließen, drei Theme-Toggles wechselten und restaurierten den Modus, alle neun aktuellen Gutachten-Akkordeons ließen sich öffnen und schließen, sechs kontexttreue Sprachwechsel und drei lokalisierte Recovery-Wege bestanden. Die Vorher-/Nachher-Ergebnisse sind maschinenlesbar identisch.
- Kontakt- und Unfallgutachten-Anfrageformulare wurden in DE, EN und RU geprüft: Eingabefelder, Labels, Textbereiche und bedienbare Submit-Buttons blieben vorhanden; die lokale Validierung markierte leere Pflichtfelder. Kein Formular wurde an eine Server Action gesendet und kein Resend-Aufruf ausgelöst.
- Die fünf geschützten Gutachten-Redirects antworteten unverändert direkt mit 308, erhielten `?phase=d3&keep=1`, führten ohne Kette oder Schleife auf die erwarteten Ziele und diese antworteten mit HTTP 200.
- Der verpflichtende `quality_reviewer` meldete null Verstöße. Der `performance_budget_reviewer` meldete null Performance-Blocker und bewertete D3 nach den vorhandenen Build-, Referenz- und Browserdaten als performance-seitig launch-ready. Als nicht versionierten lokalen Hinweis bestätigte er die fünf bereits vor D3 extraneous vorhandenen WASM-Verzeichnisse; neue Lighthouse-/PageSpeed-Messwerte waren wegen identischer sichtbarer Ausgabe und unveränderter Quellmodule nicht Teil dieses Dependency-Checks.
- Zusätzliche Accessibility-, Typografie-, Mobile- oder Desktop-Reviewer sowie neue Fullpage-Screenshots waren nicht erforderlich, weil die normalisierten sichtbaren Ausgaben vollständig identisch blieben und die gezielten mobilen sowie desktopbasierten Funktionsprüfungen null Abweichung meldeten.
- Quellcode, Komponenten, Formularlogik, Routen, Catch-all-/Not-found-Dateien, Redirects, Übersetzungen, Wörterbuchdaten, Styles, Assets, Konfigurationen, Metadata, Structured Data, Sitemap, Robots, Canonicals, Hreflang, `noindex` und Specs blieben unverändert. `next-env.d.ts` und `ROADMAP.md` bleiben unverändert. Phase E wurde nicht begonnen; Aufgabe 026 bleibt in `workflow/active/` und im Status `in Arbeit`.

## Phase E – Abschlussregression

Die am 22. August 2026 ausdrücklich freigegebene Phase E wurde als vollständige Read-only-Abschlussregression des kumulierten Task-026-Stands ausgeführt. Der Prüfstart erfolgte auf Branch `task-026-clean-up-legacy-code` bei Commit `28649bfdd0951f575e960770d94806f72c9c1b45` mit sauberem Working Tree, ohne Staging und unverändertem `next-env.d.ts`. Der kumulierte Diff gegenüber `main` umfasste zu diesem Zeitpunkt 89 Dateien mit 1.193 Ergänzungen und 10.296 Löschungen. Die Nachweise liegen ausschließlich außerhalb des Repositorys unter `C:/tmp/unext-task-026-phase-e-final-regression/`.

### Cleanup-Scope und technische Regression

- Der kumulierte Task-Diff enthält ausschließlich die freigegebenen Schritte: 52 unerreichbare Quellmodule, die Bereinigung der drei Leistungsübersichten, zehn Page-Dateien für 15 Legacy-Service-URLs, die eng begrenzte deutsche Catch-all-Korrektur, freigegebene Übersetzungs- und Wörterbuchbereinigungen, fünf verwaiste Legacy-Detailkomponenten, sechs ungenutzte Assets sowie 35 direkte Runtime-Dependencies mit den zugehörigen Lockfile-Einträgen. Specs, `workflow/done/`, die zwölf geschützten unklaren Assets und sämtliche aktiven Marken-, Hero-, Gutachtenarten-, OpenGraph-, Favicon- und Icon-Assets blieben unangetastet.
- `git diff --check main...HEAD`, `npm ls --depth=0`, `npm run lint`, `npx tsc --noEmit` und `npm run build` bestanden. Der Produktions-Build mit Next.js 16.2.4 erzeugte 36 statische Seiten ohne Warnung. Der lokale `next-router-check` prüfte 24 UI-Routen, darunter elf datenladende beziehungsweise Not-found-fähige Routen, und fand keine fehlenden erforderlichen `loading.tsx`-, `error.tsx`- oder `not-found.tsx`-Dateien. `next-env.d.ts` blieb unverändert.
- Die direkten Runtime-Dependencies stehen weiterhin bei 14, die Dev-Dependencies bei elf. `npm ls --depth=0` meldet keine fehlende oder ungültige direkte Dependency; ausschließlich fünf bereits vor D3 vorhandene, nicht versionierte optionale WASM-Verzeichnisse bleiben als `extraneous` lokaler Hinweis bestehen.
- Eine erneute Quell- und Buildsuche bestätigte die entfernten Module, Routen, Komponenten, Datenblöcke, Assets und direkten Dependencies weiterhin ohne aktiven Verbraucher. Als neue, nicht freigegebene Cleanup-Kandidaten wurden ausschließlich nicht gerenderte alte Service-Literale in `lib/translations/home.ts` und `lib/translations/home-overrides.ts`, der ungenutzte Export `homeServiceAnchors` sowie ein toter `abschleppdienst`-Fallback in `components/service-page-layout.tsx` dokumentiert. Sie erzeugen keine sichtbaren, Metadata- oder Structured-Data-Ausgaben und wurden in Phase E nicht verändert.

### Routen-, SEO-, Formular- und Interaktionsprüfung

- Alle 30 V1-Routen antworten mit HTTP 200, korrektem `html lang`, exakt einer sichtbaren H1 und den erwarteten Header-/Footer-Strukturen. 15 Routen sind indexierbar: drei Startseiten, neun Gutachtenarten und drei Kontaktseiten. Die übrigen 15 freigegebenen Übersichts-, Über-uns- und Legal-Routen bleiben `noindex`. Canonicals, Hreflang, Robots und Metadata sind korrekt; die Sitemap enthält exakt die 15 freigegebenen kanonischen URLs. Aktive Metadata und JSON-LD enthalten keine Legacy-Service-, Werkstatt- oder `AutoRepair`-Signale.
- 27 interne aktuelle Links und 60 kontexttreue Sprachwechsel in DE, EN und RU bestanden ohne Fehlziel, Redirect oder Legacy-Pfad. Die fünf geschützten Gutachten-Redirects antworten direkt mit 308, erhalten Query-Parameter, besitzen keine Kette oder Schleife und führen auf indexierbare HTTP-200-Ziele mit korrektem Canonical und Hreflang.
- Alle 15 entfernten Legacy-Service-URLs zeigen den korrekten lokalisierten UNEXT-Recovery-Inhalt, `noindex`, passende Sprache sowie funktionierende Recovery-Links; 45 Enter-Interaktionen auf ihren drei jeweiligen Links bestanden. Sie antworten technisch jedoch sämtlich mit HTTP 200. Damit bleiben 15 Soft-404-Zustände bestehen, obwohl das Akzeptanzkriterium fehlende Bilder und Soft-404-Zustände ausdrücklich als Fehler wertet. Das ist ein P1-Blocker.
- Alle zwölf Formulare der drei Kontakt- und neun Gutachtenarten-Seiten wurden ohne Versand geprüft. Sämtliche 75 Controls besitzen zugängliche Namen, die erwartete Leerformular-Validierung arbeitet, und es gibt keine alten Service-Optionen, externen Form-Actions oder Resend-Aufrufe.
- Mobile Menüs, Theme-Umschaltungen und Akkordeons funktionieren in DE, EN und RU per Tastatur. Das mobile Menü schließt per Escape und hält keinen Fokus fest, gibt den Fokus danach aber in allen drei Sprachen nicht an den Menü-Auslöser zurück. Der Accessibility-Review wertet dies als zu behebenden P1-Verstoß. Viele Form- und Header-Controls sind außerdem etwa 40 statt der idealen 44 Pixel hoch; dies bleibt ein nachrangiger P3-Hinweis.

### Visuelle, responsive und fachliche Prüfung

- Alle 30 V1-Routen wurden automatisiert bei 390, 768 und 1440 Pixeln geprüft. 21 repräsentative Routen erhielten zusätzliche Grenzprüfungen bei 430, 768 und 2048 Pixeln. Insgesamt wurden 123 Rohscreenshots erzeugt; die 60 Pflichtansichten bei 390 und 1440 Pixeln wurden einzeln, die 63 Grenzansichten über zwölf Kontaktbögen geprüft. Es gab keinen horizontalen Overflow, keine abgeschnittenen Kerninhalte, keine defekten sichtbaren Bilder und keine Console-, Hydration-, Page-, Request-, Modul- oder HTTP-Fehler.
- Der Mobile- und Desktop-Visual-Review fand keinen visuellen P0-/P1-Blocker. Als P3 bleibt auf den Recovery-Seiten bei 2048 Pixeln viel vertikaler Weißraum. Die Typografieprüfung fand keine blockierenden Zeilenumbrüche, Button-Wraps, Überläufe, falschen sichtbaren ASCII-Umlautformen oder unbeabsichtigten Sprachmischungen; längere englische und russische H1 stehen mobil teilweise auf drei bis vier gut lesbaren Zeilen.
- Der Conversion-Review bestätigte schnelle Telefon-, WhatsApp- und Formularwege ohne Task-026-Blocker. Der Local-SEO-Review bestätigte alle aktuellen SEO-Signale, stufte aber die 15 Soft-404-Antworten als P1 ein. Legal/Trust bestätigte konsistente Firmen- und Kontaktdaten und keine sichtbare Darstellung als Werkstatt oder Meisterbetrieb; externe Rechtsprüfung und die menschliche Verifikation der DESAG-Angabe bleiben nachgelagert und außerhalb dieses Tasks.
- Der Performance-Review fand keinen Task-026-P0/P1. Als spätere Budgetpunkte bleiben ein geschütztes Asset von ungefähr 19,4 MB, etwa 635 KB gemeinsames und 874–881 KB routenbezogenes unkomprimiertes First-Load-JavaScript sowie Build-Sourcemaps und lokale optionale WASM-Reste. Der Content-Review fand keine sichtbaren P0/P1-Inkonsistenzen; die neuen, nicht gerenderten Legacy-Literale bleiben ein P2-Cleanup-Kandidat außerhalb der bisher freigegebenen Gruppen.
- Der Accessibility-Review verlangt die Fokus-Rückgabe des mobilen Menüs vor Abschluss. Der Premium-Review führt diesen Fokusfehler und die Soft-404-Antworten als Abschlussblocker. Damit bestehen zwei P1-Blocker; P0-Findings liegen nicht vor. Task 026 ist trotz vollständig ausgeführter Regression noch nicht abschluss- oder freigabebereit.
- Der verpflichtende Codequalitätsreview bestand mit null Verstößen. Der abschließende Launch-Review bestätigte die Priorisierung, die Abgrenzung nachgelagerter Gates und die Bewertung von 21 aus 24 erfüllten Akzeptanzkriterien. Er fand keine weiteren Task-026-P0/P1-Findings und erteilte wegen der zwei bestehenden P1-Blocker keine Launch-Freigabe. Die zusätzlich offene externe Rechtsprüfung bleibt ein Gesamt-Launch-Gate, ist aber ausdrücklich kein Defekt und kein Umsetzungsscope von Aufgabe 026.

### Abschlussbewertung und Abgrenzung

- Von 24 Akzeptanzkriterien sind 21 erfüllt. Offen bleiben die vollständige Accessibility-Anforderung, die Fehlerfreiheit ohne Soft-404-Zustände sowie das abschließende Gesamt- und Freigabekriterium.
- Aufgabe 026 bleibt in `workflow/active/` und im Status `in Arbeit`. Es erfolgt keine Verschiebung nach `workflow/done/` und keine Abschlussfrage, solange die beiden P1-Blocker nicht behoben und erneut geprüft sind.
- Phase E änderte keine technischen Dateien. Externe Rechtsfreigabe, echter Formularversand, Deployment, Monitoring sowie die Aufgaben 033 bis 035 bleiben unverändert und außerhalb des Scopes.
- `ROADMAP.md` bleibt unverändert, weil sich weder Projektphasen noch Reihenfolge, Prioritäten oder Meilensteine geändert haben. Der atomare Revert dieses reinen Dokumentationsschritts besteht ausschließlich aus dem Rücksetzen des Phase-E-Abschnitts in dieser Task-Datei und des zugehörigen Changelog-Eintrags.

## Follow-up E1 – echte 404-Antworten für entfernte Legacy-Service-URLs

Das am 22. August 2026 ausdrücklich freigegebene Follow-up E1 behebt ausschließlich den in Phase E dokumentierten P1-Soft-404-Blocker. Der separate P1 zur fehlenden Fokus-Rückgabe nach Escape im mobilen Menü bleibt unverändert außerhalb dieses Schritts. Technisch wurde ausschließlich die neue Root-Datei `proxy.ts` ergänzt; zusätzlich werden nur diese Task-Datei und `CHANGELOG.md` dokumentiert.

### Ursache und Vorher-Baseline

- Die vorhandenen Catch-all-Seiten rufen `notFound()` auf und verwenden die bestehenden lokalisierten `not-found.tsx`-Komponenten. Durch die im jeweiligen Layout-Scope vorhandenen `loading.tsx`-/Suspense-Grenzen beginnt die Antwort jedoch als Stream; Next.js 16.2.4 kann den Status danach nicht mehr von HTTP 200 auf 404 ändern.
- Die vollständige Produktions-Baseline unter `C:/tmp/unext-task-026-follow-up-e1-soft-404/` bestätigt deshalb für alle 15 Legacy-URLs bei GET, HEAD, Query und Reload HTTP 200, `text/html`, keinen `Location`-Header, korrekte Sprache, `noindex`, die jeweilige lokalisierte H1 und exakt drei Recovery-Links.
- Der Ausgangszustand war sauber auf Branch `task-026-clean-up-legacy-code` bei Commit `0e979a5`; alle Task-026-Zwischencommits einschließlich D1a, D1b, D1c, D2 und D3 waren enthalten. Nichts war gestaged, `next-env.d.ts` war unverändert, und weder `proxy.ts` noch `middleware.ts` existierte. Für den Branch existierten weder Remote-Branch noch Pull Request.

### Exakt implementierte Proxy-Strategie

- `proxy.ts` importiert `NextRequest` und `NextResponse` aus `next/server` und exportiert die benannte Funktion `proxy`. Sie klont `request.nextUrl`, ändert ausschließlich dessen internen Pfad und gibt `NextResponse.rewrite(rewriteUrl, { status: 404 })` zurück. Dadurch wird der 404-Status vor dem Streaming gesetzt, während Browser-URL und Query erhalten bleiben und kein Redirect entsteht.
- Die fünf deutschen Matcher schreiben intern auf `/leistungen/__entfernte-legacy-leistung`, die fünf englischen auf `/en/__removed-legacy-service` und die fünf russischen auf `/ru/__udalennaya-legacy-usluga` um. Diese absichtlich nicht existierenden Pfade verwenden die bereits vorhandenen Catch-all- und Not-found-Strukturen, sind selbst kein Matcher und erzeugen keine Schleife.
- `config.matcher` enthält exakt die folgenden 15 literalen Pfade, ohne Präfix-, Wildcard- oder globale Regel:

| Nr. | Statischer Matcher |
|---:|---|
| 1 | `/leistungen/autovermietung` |
| 2 | `/leistungen/autoservice` |
| 3 | `/leistungen/detailing` |
| 4 | `/leistungen/zulassungsservice` |
| 5 | `/leistungen/abschleppdienst-pannenhilfe` |
| 6 | `/en/leistungen/autovermietung` |
| 7 | `/en/leistungen/autoservice` |
| 8 | `/en/leistungen/detailing` |
| 9 | `/en/leistungen/zulassungsservice` |
| 10 | `/en/leistungen/abschleppdienst-pannenhilfe` |
| 11 | `/ru/leistungen/autovermietung` |
| 12 | `/ru/leistungen/autoservice` |
| 13 | `/ru/leistungen/detailing` |
| 14 | `/ru/leistungen/zulassungsservice` |
| 15 | `/ru/leistungen/abschleppdienst-pannenhilfe` |

- Der Proxy enthält keine Datenbank-, Fetch-, Dependency-, Environment-, Cookie-, Tracking-, Canonical-, Hreflang- oder SEO-Header-Logik. Ähnlich benannte unbekannte Pfade, die drei internen Recovery-Ziele und die 30 V1-Routen werden nach realer Produktionsprüfung nicht vom Proxy erfasst.

### Vollständige GET-, HEAD-, Query- und Reload-Matrix

Alle Antworten besitzen `text/html; charset=utf-8`, keinen `Location`-Header und keinen 3xx-Status. Die jeweilige ursprüngliche Browser-URL bleibt sichtbar; Query-URLs behalten `?e1=1&keep=1`.

| Nr. | Legacy-URL | GET | HEAD | Query | Reload | `lang` / H1 / Robots |
|---:|---|---:|---:|---:|---:|---|
| 1 | `/leistungen/autovermietung` | 404 | 404 | 404 | 404 | DE / `Seite nicht gefunden` / `noindex` |
| 2 | `/leistungen/autoservice` | 404 | 404 | 404 | 404 | DE / `Seite nicht gefunden` / `noindex` |
| 3 | `/leistungen/detailing` | 404 | 404 | 404 | 404 | DE / `Seite nicht gefunden` / `noindex` |
| 4 | `/leistungen/zulassungsservice` | 404 | 404 | 404 | 404 | DE / `Seite nicht gefunden` / `noindex` |
| 5 | `/leistungen/abschleppdienst-pannenhilfe` | 404 | 404 | 404 | 404 | DE / `Seite nicht gefunden` / `noindex` |
| 6 | `/en/leistungen/autovermietung` | 404 | 404 | 404 | 404 | EN / `Page not found` / `noindex` |
| 7 | `/en/leistungen/autoservice` | 404 | 404 | 404 | 404 | EN / `Page not found` / `noindex` |
| 8 | `/en/leistungen/detailing` | 404 | 404 | 404 | 404 | EN / `Page not found` / `noindex` |
| 9 | `/en/leistungen/zulassungsservice` | 404 | 404 | 404 | 404 | EN / `Page not found` / `noindex` |
| 10 | `/en/leistungen/abschleppdienst-pannenhilfe` | 404 | 404 | 404 | 404 | EN / `Page not found` / `noindex` |
| 11 | `/ru/leistungen/autovermietung` | 404 | 404 | 404 | 404 | RU / `Страница не найдена` / `noindex` |
| 12 | `/ru/leistungen/autoservice` | 404 | 404 | 404 | 404 | RU / `Страница не найдена` / `noindex` |
| 13 | `/ru/leistungen/detailing` | 404 | 404 | 404 | 404 | RU / `Страница не найдена` / `noindex` |
| 14 | `/ru/leistungen/zulassungsservice` | 404 | 404 | 404 | 404 | RU / `Страница не найдена` / `noindex` |
| 15 | `/ru/leistungen/abschleppdienst-pannenhilfe` | 404 | 404 | 404 | 404 | RU / `Страница не найдена` / `noindex` |

- Trailing-Slash-Requests behalten unverändert die Next.js-Normalisierung: Der erste Request antwortet mit 308 auf den slashlosen Originalpfad, der anschließend HTTP 404 liefert. Es wurde keine globale Normalisierungskonfiguration geändert.
- Der maschinenlesbare Vergleich meldet keine Abweichung bei Sprache, Title, Description, Robots, Canonical, Hreflang, sichtbarer H1, Erklärungstext, Recovery-Links, JSON-LD, Bildern oder Layout. Alle sechs repräsentativen DE-/EN-/RU-Screenshots bei 390 × 844 und 1440 × 1100 Pixeln sind bytegleich zur HTTP-200-Baseline.
- Neun Tastaturprüfungen decken alle drei sichtbaren Recovery-Links je Sprache ab. Jeder Link wurde per Tab mit `:focus-visible` erreicht, per Enter zum erwarteten Ziel geöffnet und per Zurücknavigation auf die ursprüngliche Legacy-URL zurückgeführt.
- Es gab null Hydration-, Page-, Request-, Subresource-, Modul-, Bild- oder Overflowfehler. Chromium protokolliert bei jeder absichtlich mit 404 antwortenden Hauptnavigation erwartungsgemäß die generische Meldung `Failed to load resource: the server responded with a status of 404 (Not Found)`; darüber hinaus trat kein Console- oder Anwendungsfehler auf.

### Geschützte Redirects, V1-Routen und SEO

| Redirect-Quelle | Direktes Ziel | Status | Query | Zielstatus |
|---|---|---:|---|---:|
| `/leistungen/unfallgutachten` | `/gutachtenarten/unfallgutachten` | 308 | erhalten | 200 |
| `/leistungen/fahrzeugbewertung` | `/gutachtenarten/fahrzeugbewertung` | 308 | erhalten | 200 |
| `/leistungen/schadendokumentation` | `/gutachtenarten/schadendokumentation` | 308 | erhalten | 200 |
| `/en/leistungen/unfallgutachten` | `/en/gutachtenarten/unfallgutachten` | 308 | erhalten | 200 |
| `/ru/leistungen/unfallgutachten` | `/ru/gutachtenarten/unfallgutachten` | 308 | erhalten | 200 |

- Die Produktionsprüfung bestätigt damit die Next.js-Ausführungsreihenfolge: Alle fünf in `next.config.mjs` konfigurierten Redirects bleiben vor dem Proxy wirksam, direkt, ohne Kette oder Schleife. `next.config.mjs` blieb unverändert.
- Alle 30 V1-Routen liefern weiterhin HTTP 200 mit korrektem `html lang`, unveränderter sichtbarer Ausgabe, Robots-Status, Canonical, Hreflang, Metadata und Structured Data. Die Indexierungsmatrix bleibt bei 15 indexierbaren und 15 `noindex`-Routen.
- Die Sitemap enthält weiterhin exakt 15 freigegebene kanonische V1-URLs. Keine Legacy-URL und kein internes Rewrite-Ziel erscheint in Sitemap, Canonical, Hreflang, Navigation oder internen Links. Die internen Ziele sind bei direktem Aufruf `noindex`, besitzen keinen Canonical und kein Hreflang.
- Der Structured-Data-Vergleich aller 30 V1-Routen ist ohne Abweichung. Es gibt keine neuen oder aktiven Legacy-Service-, Werkstatt- oder `AutoRepair`-Signale; die JSON-LD-Ausgabe der Recovery-Seiten blieb unverändert.

### Technische Checks und Reviewer

- `git diff --check`, `npm ls --depth=0`, `npm run lint`, `npx tsc --noEmit` und `npm run build` bestanden. Die fünf bereits dokumentierten lokalen `extraneous`-WASM-Verzeichnisse blieben unverändert; fehlende oder ungültige direkte Dependencies wurden nicht gemeldet.
- Der Produktions-Build mit Next.js 16.2.4 erzeugte weiterhin 36 statische Seiten und weist den Proxy separat als Middleware aus. Der lokale `next-router-check` prüfte unverändert 24 UI-Routen, davon elf datenladend beziehungsweise `notFound()`-fähig, und fand null fehlende erforderliche `loading.tsx`-, `error.tsx`- oder `not-found.tsx`-Grenzen.
- Der read-only `local_seo_reviewer` bestätigt den behobenen Soft-404-P1, unveränderte SEO- und Structured-Data-Signale sowie keine SEO-Blocker. Der read-only `performance_budget_reviewer` bestätigt exakt 15 statische Matcher, keine globale Ausführung, keine Daten-/Fetch-/Client-/Dependency-Auswirkung und keine P0-, P1- oder P2-Performance-Risiken.
- Der verpflichtende read-only `quality_reviewer` bestätigt den deutschen Dateikommentar, den benannten Proxy-Export, die exakt begrenzte 15er-Matcher-Liste, den fehlenden Redirect-/Loop-/Scope-Zuwachs, den Drei-Dateien-Scope sowie Status- und Akzeptanzkriterienführung mit null Verstößen.
- Der atomare Revert besteht aus dem Entfernen von `proxy.ts` und dem Rücksetzen dieses E1-Abschnitts sowie des zugehörigen Changelog-Eintrags. Komponenten, Routen, Catch-all-, Not-found-, Loading-, Error-, Layout-, Header-, Mobile-Menü-, Style-, Übersetzungs-, Metadata-, Structured-Data-, Sitemap-, Robots-, Asset-, Dependency-, Spec- und Roadmap-Dateien blieben unverändert.

### E1-Ergebnis und verbleibender Status

- Das Soft-404-Akzeptanzkriterium ist mit 15 von 15 erfolgreichen GET- und HEAD-Antworten geschlossen. Aufgabe 026 erfüllt damit 22 von 24 Akzeptanzkriterien.
- Der mobile Menüfokus nach Escape bleibt der einzige technische P1 dieses Tasks und wird in E1 weder geändert noch neu bewertet. Das finale Abschluss-/Freigabekriterium bleibt ebenfalls offen.
- Aufgabe 026 bleibt in `workflow/active/` und im Status `in Arbeit`. Die Website wird nicht als launchbereit bezeichnet; es erfolgt keine Verschiebung nach `workflow/done/`. `ROADMAP.md` bleibt unverändert, weil Reihenfolge, Prioritäten und Projektphasen nicht geändert wurden.

## Akzeptanzkriterien

- [x] Vor jeder Löschgruppe stimmt die gestagte Dateiliste exakt mit der in dieser Task freigegebenen Gruppenliste überein; Nachweis: `git diff --cached --name-only` und erneuter Import-/Exportgraph.
- [x] Keine Datei, Route, Übersetzung, Datenstruktur oder kein Asset wird ohne belegte Prüfung statischer, dynamischer, Barrel-, String-, Daten-, CSS-, Asset-, Test- und Build-Referenzen gelöscht; Nachweis wird je Gruppe dokumentiert.
- [x] Phase A verändert ausschließlich die 52 nummerierten Quellmodule in den Gruppen A1 bis A8; Assets, Übersetzungen, Daten, Routen, Redirects und SEO-Dateien sind im Diff nicht enthalten.
- [x] Dependencies, `package.json` und Lockfiles bleiben in Phase A unverändert; eine spätere Dependency-Entfernung setzt erneuten Nutzungsnachweis und separate ausdrückliche Freigabe voraus.
- [x] Die sechs sicheren Assetkandidaten bleiben außerhalb der Modulphase und werden nur nach eigener Dateiliste/Freigabe behandelt; die zwölf unklaren Assets sind im gesamten Task-Diff unverändert, solange Live-Nutzung oder Risikoakzeptanz fehlt.
- [x] `/leistungen`, `/en/leistungen` und `/ru/leistungen` bleiben als Routen erhalten und zeigen nach Phase B ausschließlich die drei dokumentierten Gutachtenarten mit sprachlich passenden Direktlinks; Prüfung: Route-/Linkmatrix und DE/EN/RU-Browserausgabe.
- [x] Auf den drei Leistungsübersichten sind Mietwagen, Werkstatt, Detailing, Zulassungsservice, Pannenhilfe und Abschleppen nach Phase B weder sichtbar noch verlinkt; Prüfung: gerenderte Ausgabe plus Repository- und Linksuche.
- [x] Die 15 einzeln dokumentierten Legacy-Service-Routen werden erst nach erneuter ausdrücklicher Freigabe in Phase C entfernt; bis dahin bleiben ihre Page-Dateien unverändert.
- [x] Für die 15 Legacy-Routen wurde kein fachlich falscher Redirect auf Start, Kontakt, `/leistungen` oder Gutachtenarten angelegt; tatsächlicher HTTP-Status, lokalisierte Recovery-Ausgabe, Fokus und Recovery wurden für jede URL geprüft. Alle 15 URLs liefern dabei weiterhin HTTP 200 und werden deshalb separat im Soft-404-Kriterium als Fehler geführt.
- [x] Die fünf bestehenden Gutachten-Redirects bleiben unverändert, antworten direkt mit 308, erhalten Query-Parameter und besitzen keine Kette oder Schleife; Prüfung per Requestmatrix.
- [x] Alle DE-/EN-/RU-V1-Nutzerwege, neun Gutachtenartenrouten, drei Startseiten, drei Kontaktseiten, Navigation, Sprachwechsel und Formulare bleiben funktionsfähig; Formulare werden bei der Regression nicht abgesendet.
- [x] Aktive Metadata und Structured Data enthalten keine Legacy-Service-, Werkstatt- oder `AutoRepair`-Signale; Prüfung der gerenderten Metadata/JSON-LD auf allen betroffenen Routentypen.
- [x] `noindex` der Leistungsübersichten, Über-uns- und Legal-Routen bleibt bis zur jeweils gesonderten Index-/Rechtsfreigabe bestehen; Sitemap, Canonicals, Hreflang und Robots wurden im finalen SEO-/Launch-Gate erneut abgeglichen.
- [x] Nach jeder technischen Gruppe bestehen `git diff --check`, Import-/Export-/Stringreferenzsuche, `npm run lint` und `npx tsc --noEmit`; Ergebnisse werden gruppenbezogen dokumentiert.
- [x] Nach A2, A4, A6 und A8 sowie nach den Phasen B bis D besteht `npm run build`; Build-Ausgabe und relevante Seitenanzahl werden dokumentiert.
- [x] Der next-router-check besteht nach Phase C und bei jeder früheren Gruppe, die wider Erwarten Routen oder datenladende Abhängigkeiten berührt.
- [x] Mobile-, Tablet- und Desktopprüfungen bei mindestens 390, 768 und 1440 px bestehen in DE, EN und RU nach jeder sichtbaren Phase; A1, A3 und A7 erhalten die dokumentierten gezielten Smoke-Checks.
- [ ] Accessibility-Prüfungen decken Tastaturfokus, sichtbaren Fokus, Linkzweck, Accessible Names, Sprache, Touchziele und 404-/Error-Recovery ab; Typografieprüfungen decken Zeilenumbrüche, Overflow und CTA-Lesbarkeit ab.
  - Phase E deckt alle Punkte ab, der Fokus kehrt nach Escape jedoch in DE, EN und RU nicht zum Auslöser des mobilen Menüs zurück. Das Kriterium bleibt bis zur Korrektur und erneuten Prüfung offen.
- [x] Browserkonsole, Hydration, Requests, interne Links und Bilder sind auf den pro Phase benannten Wegen fehlerfrei; fehlende Bilder oder Soft-404-Zustände gelten als Fehler.
  - Follow-up E1 setzt den Status vor dem Streaming per eng begrenztem Rewrite auf 404. Alle 15 Legacy-URLs bestehen GET, HEAD, Query und Reload ohne Redirect; lokalisierte Recovery-Ausgabe, `noindex`, Links und Bilder bleiben unverändert. Die einzige Console-Meldung ist Chromiums erwartetes Statussignal der absichtlich geladenen 404-Hauptdokumente, kein Anwendungsfehler.
- [x] EN/RU enthalten keine unbeabsichtigten deutschen Resttexte und bleiben fachlich gleichwertig zu DE; Prüfung durch dreisprachigen Content-Vergleich nach B und D.
- [x] Rechtstexte, Legal-Routen, externe Rechtsfreigabe, echter Formularversand, Deployment und Monitoring bleiben unverändert und außerhalb von Aufgabe 026.
- [x] Für jede Phase sind exakter Scope, Ausschlüsse, Abhängigkeiten, Risiken, Prüfungen und atomarer Revert-Weg im tatsächlichen Abschlussstand dokumentiert.
- [x] ROADMAP wird nur geändert, wenn sich Reihenfolge, Priorität oder Projektphase tatsächlich ändert; reine Task-Planpräzisierungen werden im CHANGELOG nachvollziehbar dokumentiert.
- [ ] Aufgabe 026 wird erst nach vollständiger technischer und visueller Regression, passender Reviewer-Prüfung, Ergebniszusammenfassung und ausdrücklicher Nutzerfreigabe abgeschlossen und nach `workflow/done/` verschoben.
  - Die Regression und Reviewer-Prüfung sind dokumentiert; wegen der zwei P1-Blocker und fehlender Abschlussfreigabe bleibt das Kriterium offen.

## Ergebnis dieses Startschritts

- Inventur und Plan wurden anhand des vollständigen unabhängigen Read-only-Reviews präzisiert; 42 Einheiten, die gruppierte 52er-Modulliste, der 18er-Assetplan, die Overview- und Legacy-Routenentscheidungen, Spec-Abweichungen, Phasengates und messbare Akzeptanzkriterien sind dokumentiert.
- Es gab keine Website-, Code-, Routen-, Redirect-, Übersetzungs-, SEO-, Structured-Data-, Asset-, Dependency-, Indexierungs- oder Konfigurationsänderung.
- Es wurde nichts gelöscht und kein Server gestartet.
- ESLint, TypeScript und Produktions-Build sind für diesen reinen Dokumentations-/Planungsschritt nicht erforderlich; sie werden verpflichtend nach technischen Cleanup-Änderungen ausgeführt.
- Der präzisierte Plan ist aus Review-Sicht für eine ausdrückliche Freigabe der ersten, ausschließlich modulbezogenen technischen Phase geeignet. Diese technische Freigabe und Umsetzung erfolgt nicht durch den vorliegenden Planungsauftrag.
