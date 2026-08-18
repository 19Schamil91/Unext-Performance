# Aufgabe 026 – Code-Cleanup nach Rework

## Status

Status: in Arbeit

## Ziel

Den nach der fachlichen Neuausrichtung verbliebenen Legacy-Bestand in Code, sichtbaren Inhalten, Übersetzungen, Routen, Daten und Assets kontrolliert bereinigen, ohne die freigegebenen DE-/EN-/RU-V1-Nutzerwege, die neun Gutachtenartenrouten, direkte Redirects, Kontaktwege, Rechtstexte oder das in Aufgabe 029 umgesetzte SEO-Modell zu beschädigen.

Dieser erste Arbeitsschritt umfasst ausschließlich die read-only Bestandsaufnahme und den Cleanup-Plan. Er erteilt noch keine Freigabe für Löschungen, Routen- oder Redirect-Änderungen, Textänderungen, Dependency-Änderungen oder die Aufhebung eines `noindex`-Zustands.

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

Die Inventur umfasst **41 logisch gruppierte Kandidateneinheiten**. Eine Einheit kann mehrere eng gekoppelte Dateien oder drei sprachlich gespiegelte Routen enthalten; sie zählt unabhängig von der Anzahl ihrer Dateien einmal. Damit bleiben Kategorie-Summen nachvollziehbar, ohne 45 sprachlich identische Routen oder einen zusammenhängenden UI-Scaffold künstlich als voneinander unabhängige Entscheidungen darzustellen.

| Kategorie | Anzahl | Bedeutung |
|---|---:|---|
| A | 9 | Sicher nicht aus aktuellen Routen erreichbar oder ohne Laufzeitreferenz; voraussichtlich entfernbar, aber erst nach Planfreigabe und erneutem Diff-/Build-Nachweis |
| B | 6 | Legacy-Inhalt, der noch sichtbar oder intern verlinkt ist |
| C | 7 | Legacy-Route oder Übersichtsroute mit erforderlicher expliziter HTTP-/Redirect-Entscheidung |
| D | 10 | Für V1 weiterhin erforderlich oder ein fachlich legitimer Treffer |
| E | 3 | Historische Dokumentation, die erhalten bleiben muss |
| F | 6 | Freigabe, externe Entscheidung oder zusätzliche Laufzeitprüfung erforderlich |
| **Summe** | **41** | |

## Verwendungsinventar A – voraussichtlich sicher entfernbar

| ID | Pfad/Bestand | Nutzung und Sichtbarkeit | Referenzen/Sprachen/SEO | Empfehlung, Risiko, Rollback, Zuständigkeit |
|---|---|---|---|---|
| A1 | `components/sections/express-courier-section.tsx`, `testimonials-section.tsx`, `trust-section.tsx` | Vom Importgraph aus keiner Route erreichbar; keine dynamischen oder stringbasierten Imports; nicht sichtbar | Übersetzungsdaten existieren in DE/EN/RU; keine Metadata-/Sitemap-/Schema-Nutzung | Nach Freigabe gemeinsam mit abhängigen Daten entfernen. Risiko: versteckte externe Einbindung ist im Repository nicht erkennbar. Rollback: eigener Commit/Revert. Zuständig: Phase A |
| A2 | 46 nicht erreichbare `components/ui/*`-Module plus `hooks/use-mobile.ts` und `hooks/use-toast.ts` | 48 Module sind vom vollständigen App-Routen-Importgraph nicht erreichbar; interne Abhängigkeiten innerhalb des ungenutzten Clusters wurden mit erfasst | Keine Route, kein Test und keine Dokumentation bindet sie als Laufzeitbestand ein | Nur als zusammenhängenden Dependency-Graph bereinigen und danach Dependencies separat prüfen. Risiko: künftige, noch nicht eingecheckte Nutzung. Rollback: atomarer Commit. Zuständig: Phase A; Dependency-Entfernung bleibt F1 |
| A3 | `lib/browser-storage.ts` | Vom App-Routen-Importgraph nicht erreichbar; keine direkte, dynamische oder stringbasierte Referenz gefunden | Keine Locale-, Metadata-, Schema- oder Asset-Abhängigkeit | Nach Freigabe entfernen. Risiko gering; Browser-Speicherverhalten im Regressionstest beobachten. Rollback: Datei aus Cleanup-Commit wiederherstellen |
| A4 | `public/placeholder.jpg`, `placeholder.svg`, `placeholder-logo.png`, `placeholder-logo.svg`, `placeholder-user.jpg` | Keine Code-, CSS-, Metadata-, OpenGraph-, Test- oder Dokumentationsreferenz gefunden | Nicht sprachabhängig; nicht in Sitemap/Schema | Nach Freigabe gemeinsam entfernen. Risiko: externe direkte URL unbekannt, fachlich aber reine Platzhalter. Rollback: Asset-Commit revertieren |
| A5 | `about-hero-team-cropped.jpg`, `about-hero-team-cropped.webp`, `hero-car.webp`, `home-hero-new.webp`, `home-hero-team-new.webp.png`, `home-service-accident-wide.webp`, `new hero.png`, `services/schadengutachten-detail.png` | Keine aktuelle Laufzeitreferenz; einzelne Dateien nur in historischen Workflow-Dokumenten erwähnt | Nicht in aktuellem `next/image`, Metadata, OpenGraph oder Schema; zusammen rund 24,4 MB, davon `home-hero-team-new.webp.png` rund 18,5 MB | Historische Dokumentverweise erhalten, Binärdateien nach Freigabe entfernen. Risiko: externe Direktlinks; vor Umsetzung optional Deployment-/Analytics-Abgleich. Rollback: Asset-Commit revertieren |
| A6 | `public/images/service-express-courier.webp` | Nur durch die nicht erreichbare Express-Kurier-Sektion referenziert | Keine aktive Route/Metadata/Schema-Ausgabe | Zusammen mit A1 entfernen. Risiko/rollback wie A1 |
| A7 | Nicht gerenderte Übersetzungszweige `home.expressCourier`, `home.testimonials` und `home.trust` in `lib/translations/home.ts`/`home-overrides.ts` | Ausschließlich von A1 referenziert; aktuelle Startseite importiert die drei Sektionen nicht | DE/EN/RU; keine aktive SEO-Ausgabe | Nach Entfernung von A1 typgesichert reduzieren. Risiko: Spread-/Override-Struktur; TypeScript und vollständige dreisprachige Regression erforderlich |
| A8 | `aboutTranslationOverrides` und `aboutPage`-Daten in `about-overrides.ts`/`services-and-about.ts` sowie deren Zusammenführung in `translations.ts` | `AboutPageContent.tsx` verwendet eigenen aktuellen Inhalt und nur `home.cta`; kein Verbraucher liest `getTranslations(...).aboutPage` | DE/EN/RU; About-Metadata liegt separat in `metadata.ts` | Nach Freigabe daten- und importseitig entfernen. Risiko: unbeabsichtigte Typänderung; Rollback über separaten Daten-Commit |
| A9 | Alte `serviceContacts*`-Felder in `lib/translations/contact.ts` | `contact-page-client.tsx` liest diese Felder nicht; keine sichtbare Ausgabe oder Formularauswahl | EN/RU-Altleistungen, keine SEO-/Schema-Nutzung | Feldweise entfernen, nicht die weiterhin benötigte Kontaktübersetzung. Risiko: Spread-Overrides; Regression aller Kontaktseiten/Formzustände |

## Verwendungsinventar B – sichtbar oder verlinkt

| ID | Pfad/Bestand | Nutzung und Sichtbarkeit | Referenzen/Sprachen/SEO | Empfehlung, Risiko, Rollback, Zuständigkeit |
|---|---|---|---|---|
| B1 | `ServicesOverviewContent.tsx` und `servicesPage` in `services-and-about.ts` | Rendert auf `/leistungen`, `/en/leistungen`, `/ru/leistungen` weiterhin sechs alte Hauptleistungen und verlinkt fünf Legacy-Familien | DE/EN/RU; Übersichten sind `noindex`, nicht in Sitemap, ohne V1-Schema; über Sprachzuordnung und Backlinks erreichbar | Erst nach C1-Entscheidung ersetzen oder Route stilllegen. Hohes Inhalts-/Routingrisiko; Rollback pro eigenem Commit. Zuständig: Phase B/C |
| B2 | `RentalServiceDetailContent.tsx`, `service-pages-part1.ts` (Rental), `home-service-rental.webp` | Auf drei Autovermietungsrouten sichtbar; enthält Anfrageformular und direkte Telefonnummer | DE/EN/RU, von B1 verlinkt; Route `noindex`, keine Canonicals/Hreflang/Service-Schema | Sichtbarkeit erst nach C2-Entscheidung entfernen. Risiko: öffentliche Alt-URL und Formulare. Rollback: Routen-/Content-Commit revertieren |
| B3 | `WorkshopServiceDetailContent.tsx`, Workshop-Daten in `service-pages-part2.ts`, `home-service-workshop.webp` | Auf drei Autoservice-Routen sichtbar; Werkstatt-/Reparaturversprechen und Anfrageformular | DE/EN/RU, von B1 verlinkt; `noindex`, keine aktive Legacy-Schemaausgabe | Nach C3-Entscheidung entfernen. Hohes fachliches/Trust-Risiko bei Weiterbetrieb; kein Redirect auf unpassende Gutachtenroute |
| B4 | `DetailingServiceDetailContent.tsx`, Detailing-Daten in `service-pages-part2.ts`, `home-service-detailing.webp` | Auf drei Detailing-Routen sichtbar und anfragbar | DE/EN/RU; `noindex`, nicht in Sitemap, kein Service-Schema | Nach C4-Entscheidung entfernen. Rollback wie B2 |
| B5 | `RegistrationServiceDetailContent.tsx`, Registration-Daten in `service-pages-part2.ts`, `home-service-registration.webp` | Auf drei Zulassungsservice-Routen sichtbar und anfragbar | DE/EN/RU; `noindex`, nicht in Sitemap, kein Service-Schema | Nach C5-Entscheidung entfernen. Zulassungsbegriffe in echten Fahrzeugdokument-Kontexten nicht pauschal löschen |
| B6 | `TowingServiceDetailContent.tsx`, Towing-Daten in `service-pages-part2.ts`, `service-towing.webp` | Auf drei Abschlepp-/Pannenhilferouten sichtbar; kann Soforthilfe-Erwartung erzeugen | DE/EN/RU; `noindex`, nicht in Sitemap, kein Service-Schema | Prioritär nach C6-Entscheidung aus sichtbaren Wegen nehmen. Kein semantisch falscher Redirect; Rollback separat |

## Verwendungsinventar C – Routenentscheidung erforderlich

| ID | Route/Dateien | Ist-Zustand | Verlinkung/SEO | Spätere Entscheidung und Risiko |
|---|---|---|---|---|
| C1 | `/leistungen`, `/en/leistungen`, `/ru/leistungen`; zwei Page-Dateien | HTTP 200, sichtbarer B1-Inhalt | Nicht im Header als Übersicht angeboten, aber Sprachmapping und Legacy-Backlinks; `noindex`, nicht in Sitemap | Nutzerentscheidung: durch fokussierte Übersicht ersetzen, 404/410 oder fachlich passenden direkten Redirect wählen. Nicht blind löschen/umleiten |
| C2 | drei Routen Autovermietung; zwei Page-Dateien | HTTP 200, B2 sichtbar | Von B1 verlinkt; `noindex` | 404/410 oder belegbar semantischer Redirect nach externer URL-/Traffic-Prüfung; kein Gutachten-Pauschalredirect |
| C3 | drei Routen Autoservice; zwei Page-Dateien | HTTP 200, B3 sichtbar | Von B1 verlinkt; `noindex` | Wie C2; Werkstatt-Suchintention besonders unpassend für Gutachtenredirect |
| C4 | drei Routen Detailing; zwei Page-Dateien | HTTP 200, B4 sichtbar | Von B1 verlinkt; `noindex` | Wie C2 |
| C5 | drei Routen Zulassungsservice; zwei Page-Dateien | HTTP 200, B5 sichtbar | Von B1 verlinkt; `noindex` | Wie C2; spätere Leistungspläne nicht erfinden |
| C6 | drei Routen Abschleppdienst/Pannenhilfe; zwei Page-Dateien | HTTP 200, B6 sichtbar | Von B1 verlinkt; `noindex` | Wie C2; keine falsche Notfall-/Erreichbarkeitserwartung erzeugen |
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

## Routenmatrix

`308` bezeichnet die von Next.js für permanente Redirects erwartete HTTP-Antwort. Query-Parameter sollen von direkten Redirects erhalten bleiben; dies ist in der späteren Umsetzung mit tatsächlichen Requests zu prüfen.

| Bestehende Route(n) | Sprache | HTTP | Sichtbarer Inhalt/Status | Intern verlinkt | Index/Sitemap | Spätere Aktion | Redirect-Risiko |
|---|---|---:|---|---|---|---|---|
| `/`, `/en`, `/ru` | DE/EN/RU | 200 | V1 Startseite, aktiv | ja | index; Sitemap ja | erhalten | keines |
| `/gutachtenarten/unfallgutachten` plus EN/RU | DE/EN/RU | 200 | V1 Unfallgutachten, aktiv | ja | index; Sitemap ja | schützen | Ziel von drei Redirects, keine Kette |
| `/gutachtenarten/fahrzeugbewertung` plus EN/RU | DE/EN/RU | 200 | V1 Fahrzeugbewertung, aktiv | ja | index; Sitemap ja | schützen | Ziel eines DE-Redirects, keine Kette |
| `/gutachtenarten/schadendokumentation` plus EN/RU | DE/EN/RU | 200 | V1 Schadendokumentation, aktiv | ja | index; Sitemap ja | schützen | Ziel eines DE-Redirects, keine Kette |
| `/kontakt`, `/en/kontakt`, `/ru/kontakt` | DE/EN/RU | 200 | V1 Kontakt/Formular, aktiv | ja | index; Sitemap ja | erhalten | keines |
| `/leistungen`, `/en/leistungen`, `/ru/leistungen` | DE/EN/RU | 200 | Legacy-Übersicht | indirekt/Backlinks | noindex; ausgeschlossen | C1 entscheiden | kein Redirect ohne passendes Ziel |
| `/ueber-uns`, `/en/ueber-uns`, `/ru/ueber-uns` | DE/EN/RU | 200 | aktueller V1-Inhalt | ja | noindex; ausgeschlossen | nach Cleanup Indexprüfung | keines |
| `/impressum` plus EN/RU | DE/EN/RU | 200 | Rechtstext | Footer | noindex; ausgeschlossen | externe Freigabe abwarten | keines |
| `/datenschutz` plus EN/RU | DE/EN/RU | 200 | Rechtstext | Footer/Formulare | noindex; ausgeschlossen | externe Freigabe abwarten | keines |
| `/agb` plus EN/RU | DE/EN/RU | 200 | Rechtstext | Footer | noindex; ausgeschlossen | externe Freigabe abwarten | keines |
| `/leistungen/autovermietung` plus EN/RU | DE/EN/RU | 200 | Legacy B2 | B1 | noindex; ausgeschlossen | C2 | kein falscher Gutachtenredirect |
| `/leistungen/autoservice` plus EN/RU | DE/EN/RU | 200 | Legacy B3 | B1 | noindex; ausgeschlossen | C3 | kein falscher Gutachtenredirect |
| `/leistungen/detailing` plus EN/RU | DE/EN/RU | 200 | Legacy B4 | B1 | noindex; ausgeschlossen | C4 | kein falscher Gutachtenredirect |
| `/leistungen/zulassungsservice` plus EN/RU | DE/EN/RU | 200 | Legacy B5 | B1 | noindex; ausgeschlossen | C5 | kein falscher Gutachtenredirect |
| `/leistungen/abschleppdienst-pannenhilfe` plus EN/RU | DE/EN/RU | 200 | Legacy B6 | B1 | noindex; ausgeschlossen | C6 | kein falscher Gutachtenredirect |
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

## Geplanter Ablauf nach ausdrücklicher Planfreigabe

### Phase A – sichere tote Imports, Komponenten, Daten und Assets

- Betroffen: A1 bis A9; zunächst keine C-/D-/F-Bestände.
- Änderung: nachweislich nicht erreichbare Module, unreferenzierte Platzhalter/Altbilder und ausschließlich daran gebundene Übersetzungszweige in kleinen atomaren Commits entfernen.
- Abhängigkeiten: Planfreigabe; bei A2 erneuter Importgraph; Dependencies aus `package.json` nur nach separater Genehmigung F1.
- Risiken: versteckte externe Asset-URLs, gekoppelte TypeScript-Typen, Spread-Overrides.
- Rollback: je Kandidatengruppe separater Commit/Revert; keine Misch-Commits.
- Prüfungen: `rg`, Importgraph, `git diff --check`, ESLint, TypeScript, Build, Asset-/Image-Request-Prüfung.
- Nicht ändern: Routen, Redirects, sichtbare Texte, SEO-Ausgaben, Rechtstexte, Indexierung.

### Phase B – sichtbare Legacy-Inhalte auf aktuellen erreichbaren Seiten

- Betroffen: B1 bis B6 und die zugehörigen Übersetzungsdaten/Bilder/Formularinstanzen.
- Änderung: erst nach den C-Entscheidungen Legacy-Verlinkung und sichtbare fachfremde Angebote aus freigegebenen Nutzerwegen entfernen beziehungsweise durch ausdrücklich freigegebenen V1-Inhalt ersetzen.
- Abhängigkeiten: Entscheidung zu `/leistungen` und allen fünf Legacy-Routen; keine neuen Leistungen erfinden.
- Risiken: öffentliche Alt-URLs, falsche Kontakt-/Formularwege, unbeabsichtigtes Löschen gemeinsamer Layout-/Formularlogik.
- Rollback: Content-/Linkänderungen getrennt von Routenentscheidungen committen.
- Prüfungen: DE/EN/RU-Textvergleich, Formularzustände ohne Absenden, mobile/tablet/desktop, Accessibility, Typografie, Browserkonsole, Requests und Bilder.
- Nicht ändern: aktuelle Gutachteninhalte, Rechtstexte, `noindex`-Gates.

### Phase C – Legacy-Routen und direkte Redirects

- Betroffen: C1 bis C7, `next.config.mjs` nur nach ausdrücklicher konkreter Redirect-Freigabe.
- Änderung: routeweise 404, 410, Beibehaltung oder semantisch passendes Direktziel umsetzen; C7 nur entfernen, wenn Redirect-Priorität und Hostingverhalten bestätigt sind.
- Abhängigkeiten: Nutzerentscheidung, optional Search-Console-/Analytics-/Hostingdaten; keine pauschalen Gutachtenredirects.
- Risiken: verlorene externe Links, falsche Suchintention, Redirect-Kette/-Schleife, Locale- oder Query-Verlust.
- Rollback: Redirect-/Route-Commit separat; vorherige Dateien und Config jederzeit wiederherstellbar.
- Prüfungen: Statuscode, `Location`, Pfad-/Query-Erhalt, alle Sprachen, keine Kette/Schleife, 404/410-Erlebnis, next-router-check, Build.
- Nicht ändern: neun Zielrouten und fünf bestehende Direkt-Redirects ohne ausdrückliche Ersatzentscheidung.

### Phase D – Übersetzungs-, Metadata- und Structured-Data-Reste

- Betroffen: nach A–C belegbar verwaiste Translation-Unterbäume und Legacy-Hilfswege; das Aufgabe-029-Modell nur bei zwingender Folgeanpassung.
- Änderung: nicht mehr erreichbare Legacy-Daten entfernen; aktive Ausgabe erneut auf alte Servicebegriffe und JSON-LD prüfen.
- Abhängigkeiten: abgeschlossene Routen-/Contentbereinigung; Indexänderungen F3–F5 bleiben gesondert.
- Risiken: deutsche Resttexte in EN/RU, beschädigte Typinferenz, falsche Canonicals/Hreflang/Sitemap-/Schemaausgabe.
- Rollback: Daten- und SEO-Folgeänderungen getrennt committen.
- Prüfungen: gerenderte Metadata/JSON-LD, Sitemap/Robots, 30 V1-Routen, Sprachcluster und Legacy-Statuscodes.
- Nicht ändern: Rechtstexte und noindex ohne Freigabe.

### Phase E – vollständige technische und visuelle Regression

- Betroffen: alle 30 V1-Routen, entschiedene Legacy-URLs, fünf Redirects und globale Navigation/Formulare.
- Änderung: keine neue Funktion; ausschließlich Prüfung und notwendige, scope-konforme Korrekturen nach gesonderter Bewertung.
- Risiken: übersehene Link-, Bild-, Hydration-, Typografie-, Accessibility- oder SEO-Regression.
- Rollback: fehlerhafte Phase zurücknehmen; keine nachträgliche Vermischung.
- Prüfungen: 390, 768 und 1440 px in DE/EN/RU; Accessibility; Typografie/Zeilenumbrüche; Browserkonsole, Hydration, Requests und Bilder; `git diff --check`; `npm run lint`; `npx tsc --noEmit`; `npm run build`; next-router-check; passende Reviewer.
- Nicht ändern: Launch-/Deployment-/Monitoring-Scope der Aufgaben 033–035.

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

## Akzeptanzkriterien

- [ ] Keine Datei, Route, Übersetzung, Datenstruktur oder kein Asset wird ohne dokumentierte Verwendungsprüfung gelöscht.
- [ ] Die DE-/EN-/RU-V1-Nutzerwege und alle neun Gutachtenartenrouten bleiben funktionsfähig.
- [ ] Die fünf notwendigen direkten Redirects bleiben ohne Ketten und Schleifen erhalten; Pfad-/Query-Verhalten ist geprüft.
- [ ] Keine EN-/RU-Sprachroute wird auf eine fachlich falsche Startseite umgeleitet.
- [ ] `/leistungen` wird nicht ohne ausdrückliche Entscheidung gelöscht oder umgeleitet.
- [ ] Auf freigegebenen V1-Seiten sind keine fachfremden alten Leistungen sichtbar oder verlinkt.
- [ ] Aktive Metadata und Structured Data enthalten keine Legacy-Service-, Werkstatt- oder `AutoRepair`-Signale.
- [ ] Nach dem Cleanup bleiben keine nachweislich ungenutzten Imports oder toten Daten im freigegebenen Scope.
- [ ] Kein erforderliches Asset wird versehentlich gelöscht; alle Bilder laden fehlerfrei.
- [ ] EN/RU enthalten keine unbeabsichtigten deutschen Resttexte.
- [ ] Rechtstexte werden ohne gesonderte Freigabe nicht geändert.
- [ ] Kein `noindex` wird vorzeitig aufgehoben.
- [ ] Die erneute Indexprüfung der drei Leistungsübersichten und drei Über-uns-Seiten ist nach Cleanup dokumentiert.
- [ ] Legal-Routen bleiben bis zur externen Rechts- und Indexfreigabe getrennt behandelt.
- [ ] Mobile-, Tablet- und Desktopprüfung bei mindestens 390, 768 und 1440 px ist in allen drei Sprachen bestanden.
- [ ] Accessibility- sowie Typografie-/Zeilenumbruchprüfung sind bestanden.
- [ ] Browserkonsole, Hydration, Requests und Bilder sind auf den geprüften Wegen fehlerfrei.
- [ ] `git diff --check` ist bestanden.
- [ ] `npm run lint` ist nach technischen Änderungen bestanden.
- [ ] `npx tsc --noEmit` ist nach technischen Änderungen bestanden.
- [ ] `npm run build` ist nach technischen Änderungen bestanden.
- [ ] Der next-router-check ist nach Routenänderungen bestanden.
- [ ] Risiken, externe Abhängigkeiten und Rollback je Phase sind im Abschlussstand dokumentiert.
- [ ] Aufgabe 026 wird erst nach vollständigem Review und ausdrücklicher Nutzerfreigabe abgeschlossen.

## Ergebnis dieses Startschritts

- Inventur und Plan wurden erstellt; es gab keine Website-, Code-, Routen-, Redirect-, Übersetzungs-, SEO-, Structured-Data-, Asset- oder Konfigurationsänderung.
- Es wurde nichts gelöscht und kein Server gestartet.
- ESLint, TypeScript und Produktions-Build sind für diesen reinen Dokumentations-/Planungsschritt nicht erforderlich; sie werden verpflichtend nach technischen Cleanup-Änderungen ausgeführt.
- Nächster Schritt ist die Nutzerprüfung und ausdrückliche Freigabe dieses Plans vor jeder technischen Löschung oder Änderung.
