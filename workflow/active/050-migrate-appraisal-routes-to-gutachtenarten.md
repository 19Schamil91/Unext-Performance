# Aufgabe 050 - Gutachtenarten-URLs und bestehende Leistungsrouten migrieren

## Ziel

Die endgültige kanonische URL-Struktur der drei deutschen Gutachtenarten prüfen und voraussichtlich von `/leistungen/...` auf `/gutachtenarten/...` umstellen.

Die Migration soll Nutzerführung, interne Links, Redirects und SEO-Signale gemeinsam berücksichtigen. Im Start- und Inventurschritt wird keine Route geändert. Aufgabe 050 ist jetzt gestartet; die spätere Umsetzung erfolgt erst nach dokumentiertem Migrationsplan und ausdrücklicher Freigabe.

## Kontext

Die sichtbare deutsche Navigation verwendet den Begriff `Gutachtenarten`. Die drei deutschen Detailseiten liegen technisch jedoch noch unter `/leistungen/...`.

Diese Struktur stammt aus der früheren, breiteren Leistungsarchitektur und passt nicht mehr vollständig zur sichtbaren deutschen V1-Navigation. Aufgabe 050 soll deshalb nach der inhaltlichen und visuellen Harmonisierung der deutschen Kernseiten die endgültige kanonische URL-Struktur prüfen und voraussichtlich umstellen.

Aufgabe 025 bleibt abgeschlossen. Sie enthält diese später erkannte Migration nicht und wird dafür nicht wieder geöffnet.

Aufgabe 046 verwendet `/leistungen/schadendokumentation` bewusst als technische Zwischenroute. Aufgabe 048 erfolgt vor Aufgabe 050. Aufgabe 049 startet erst nach der abgeschlossenen Routenmigration und prüft anschließend die endgültigen Nutzerwege.

## Vorgesehene Migration

Voraussichtlich:

```text
/leistungen/unfallgutachten
-> /gutachtenarten/unfallgutachten

/leistungen/fahrzeugbewertung
-> /gutachtenarten/fahrzeugbewertung

/leistungen/schadendokumentation
-> /gutachtenarten/schadendokumentation
```

Zusätzlich muss die Behandlung der Route `/leistungen` ausdrücklich inventarisiert, geprüft und entschieden werden. Sie darf nicht ohne Bestands-, Routing- und SEO-Prüfung gelöscht oder umgeleitet werden.

Die hier dokumentierten Zielrouten sind eine Planungsgrundlage. Die tatsächliche Migration beginnt erst nach Start von Aufgabe 050, erneuter Bestandsprüfung und ausdrücklicher Freigabe des konkreten Umsetzungsplans.

## Abhängigkeiten

Aufgabe 050 startet erst nach:

- 046: Schadendokumentation-Unterseite
- 047: Über-uns Trust / Qualifikation / Zertifikat
- 048: Deutsche Kernseiten auf Konsistenz, Typografie und Trust prüfen

Aufgabe 050 wird vor diesen Aufgaben abgeschlossen:

- 049: V1-User-Stories und Nutzerwege vollständig prüfen
- 032: i18n Launch Scope
- 029: SEO, Metadata und Structured Data
- 026: Cleanup alter Legacy-Seiten

## Zu prüfende Grundlage

Vor dem Start mindestens lesen und prüfen:

- `specs/00-global-spec/global-spec.md`
- `specs/01-functional-map/functional-map.md`
- `specs/02-feature-specs/seo.md`
- `specs/03-technical-specs/routing.md`
- `specs/03-technical-specs/frontend.md`
- `specs/06-work-plans/routing-redirects-old-service-routes.md`
- `workflow/done/030-plan-routing-redirects-old-service-routes.md`
- `workflow/done/041-define-v1-page-route-scope-before-i18n.md`
- die dann abgeschlossenen Aufgaben 046, 047 und 048
- `workflow/todo/029-implement-seo-metadata-kfz-gutachten.md`
- `ROADMAP.md`

Zusätzlich sind der tatsächliche App-Router-Bestand, interne Links, Redirect-Konfiguration, Breadcrumbs, Metadata-Ausgabe, Structured Data, Sitemap, Robots und mögliche bestehende SEO-Signale zu inventarisieren.

## Scope

Aufgabe 050 soll später prüfen und voraussichtlich umsetzen:

- neue deutsche Routen unter `/gutachtenarten/...`
- permanente Redirects von den bisherigen `/leistungen/...`-URLs
- Aktualisierung aller internen deutschen Links
- Desktop-Navigation
- Mobile-Navigation
- Startseitenkarten
- CTAs
- Breadcrumb-Pfade
- `Service`- und `BreadcrumbList`-Pfade
- Canonicals
- Sitemap
- Vermeidung von Duplicate Content
- Erhalt bestehender SEO-Signale
- Behandlung der Route `/leistungen`

## Scope-Grenzen

Aufgabe 050 darf nicht ungeprüft:

- EN/RU-Routen migrieren
- alte URLs ohne permanente und fachlich passende Redirects entfernen
- `/leistungen` ohne Bestandsprüfung löschen oder umleiten
- Inhalte der Gutachtenseiten umfassend neu schreiben
- nicht passende alte Service-Routen pauschal auf Gutachtenarten umleiten
- Aufgabe 029 vollständig ersetzen
- Upload-, Supabase-, KI-, Admin- oder Portal-Routen ergänzen
- Impressum, Datenschutz oder andere rechtliche Pflichtseiten beeinträchtigen

Die Migration muss auf einem eigenen Branch erfolgen. Riskante Routen-, Redirect-, Canonical- und Sitemap-Änderungen benötigen vor der Umsetzung einen konkreten Plan und ausdrückliche Freigabe.

## Abgrenzung zu Aufgabe 029

### Aufgabe 050

Führt die eigentliche Routenmigration und die unmittelbar notwendigen technischen Anpassungen für Redirects, Links, Breadcrumbs, Canonicals und Sitemap durch.

### Aufgabe 029

Prüft und finalisiert danach die gesamte SEO-, Metadata- und Structured-Data-Qualität einschließlich Indexierbarkeit und möglicher Altlasten nach der Migration.

Aufgabe 050 ersetzt damit nicht den vollständigen SEO-Audit aus Aufgabe 029.

## Vorgehen

1. Aufgabe 050 erst nach Abschluss von 048 auf einem eigenen Branch starten.
2. Status auf `in Arbeit` setzen und die Task nach `workflow/active/` verschieben.
3. Alle betroffenen deutschen Routen, Links und SEO-Ausgaben vollständig inventarisieren.
4. Die kanonische Zielstruktur und die Behandlung von `/leistungen` konkret planen.
5. Redirect-, Canonical-, Sitemap-, Structured-Data- und Duplicate-Content-Risiken dokumentieren.
6. Den konkreten Migrationsplan zur Freigabe vorlegen.
7. Erst nach ausdrücklicher Freigabe Routen und unmittelbar erforderliche technische Ausgaben umstellen.
8. Alte `/leistungen/...`-URLs auf korrekte permanente Redirects prüfen.
9. App-Router-Sonderdateien mit `next-router-check` prüfen.
10. Lint, TypeScript, Produktions-Build sowie manuelle Routen- und Linkchecks ausführen.
11. Aufgabe 049 erst nach geprüfter und freigegebener Migration starten.

## Start- und Inventurnotiz

Aufgabe 050 wurde nach Abschluss von 048 auf dem eigenen Branch `task-050-migrate-appraisal-routes` gestartet. Dieser Schritt ist bewusst eine Planungs- und Inventurphase. Es wurden keine App-Routen, Redirects, Links, Metadata, Structured Data, Sitemap, Robots, sichtbaren Website-Texte, Assets oder Layouts geändert.

Gelesene Grundlagen:

- `specs/00-global-spec/global-spec.md`
- `specs/01-functional-map/functional-map.md`
- `specs/02-feature-specs/seo.md`
- `specs/03-technical-specs/routing.md`
- `specs/03-technical-specs/frontend.md`
- `specs/06-work-plans/routing-redirects-old-service-routes.md`
- `workflow/done/030-plan-routing-redirects-old-service-routes.md`
- `workflow/done/041-define-v1-page-route-scope-before-i18n.md`
- `workflow/done/045-rework-vehicle-valuation-page.md`
- `workflow/done/046-rework-damage-documentation-page.md`
- `workflow/done/047-strengthen-about-trust-qualification-certificate.md`
- `workflow/done/048-review-german-core-page-consistency.md`
- `workflow/todo/029-implement-seo-metadata-kfz-gutachten.md`
- `ROADMAP.md`
- `CHANGELOG.md`

## Inventur der aktuellen Route-Struktur

Aktuell existieren die drei deutschen Gutachtenarten technisch unter alten Leistungs-URLs:

| Aktuelle Route | Aktuelle Datei | Inhalt | Geplante kanonische Zielroute | Bemerkung |
|---|---|---|---|---|
| `/leistungen/unfallgutachten` | `app/(de)/leistungen/unfallgutachten/page.tsx` | Unfallgutachten | `/gutachtenarten/unfallgutachten` | bestehende V1-Detailseite, aktuell mit eigener Metadata-Funktion |
| `/leistungen/fahrzeugbewertung` | `app/(de)/leistungen/fahrzeugbewertung/page.tsx` | Fahrzeugbewertung | `/gutachtenarten/fahrzeugbewertung` | bestehende V1-Detailseite, aktuell ohne eigene `generateMetadata` in der Route |
| `/leistungen/schadendokumentation` | `app/(de)/leistungen/schadendokumentation/page.tsx` | Schadendokumentation | `/gutachtenarten/schadendokumentation` | bestehende V1-Detailseite, aktuell ohne eigene `generateMetadata` in der Route |
| `/leistungen` | `app/(de)/leistungen/page.tsx` | alte Leistungsübersicht | offen | nicht sichtbar beworben; Behandlung muss in 050 ausdrücklich entschieden werden |

Es existieren derzeit keine deutschen App-Router-Seiten unter `/gutachtenarten/...`.

Zusätzlich existieren alte deutsche Legacy-Routen unter `/leistungen/autovermietung`, `/leistungen/autoservice`, `/leistungen/detailing`, `/leistungen/zulassungsservice` und `/leistungen/abschleppdienst-pannenhilfe`. Diese Legacy-Routen gehören nicht zur Gutachtenarten-Migration und dürfen nicht pauschal auf Gutachtenarten weitergeleitet werden.

Lokalisierte EN/RU-Routen existieren weiter unter `app/(localized)/[locale]/leistungen/...`. Für Fahrzeugbewertung und Schadendokumentation wurden keine lokalisierten Detailrouten gefunden. EN/RU werden in 050 nicht ungeprüft migriert; die i18n-Entscheidung bleibt Aufgabe 032.

## Inventur interner Links und Abhängigkeiten

Für die spätere Migration sind mindestens diese Stellen betroffen:

- `lib/translations/header-footer.ts`: deutsche Header-/Footer-Einträge für die drei Gutachtenarten.
- `components/site-header.tsx`: lokalisierte Pfadliste, `servicesHref`, Dropdown-Trigger und Sprachwechsel-Pfadlogik.
- `components/HeaderServicesMenu.tsx`: aktive Markierung prüft aktuell `currentPath.startsWith("/leistungen/")`.
- `components/HeaderMobileMenu.tsx`: mobile Service-Navigation erhält `servicesHref` und Service-Kinderlinks.
- `components/site-footer.tsx`: Footer übernimmt Service-Links aus der Navigation.
- `components/sections/services-section.tsx`: deutsche Startseitenkarten verlinken aktuell auf `/leistungen/...`.
- `components/AboutPageContent.tsx`: interner Link zum Unfallgutachten.
- `components/service-page-layout.tsx`: Backlink, `servicesHref`, Service-Pfad, `Service`-Schema und `BreadcrumbList` verwenden aktuell `/leistungen` beziehungsweise `/leistungen/${serviceName}`.
- `components/AccidentServiceDetailContent.tsx`: Metadata-URL für Unfallgutachten nutzt aktuell `/leistungen/unfallgutachten`.
- `components/VehicleValuationServiceDetailContent.tsx` und `components/DamageDocumentationServiceDetailContent.tsx`: `serviceName` steuert im gemeinsamen Layout aktuell indirekt `/leistungen/...` für strukturierte Daten und Breadcrumbs.
- `components/ServicesOverviewContent.tsx` und `app/(de)/leistungen/page.tsx`: bestehende `/leistungen`-Übersicht mit eigener Metadata-Ausgabe und Breadcrumbs.
- `lib/metadata.ts`: `buildPageMetadata` setzt OpenGraph-URLs aus dem übergebenen Pfad; Canonical/Alternates werden dort aktuell nicht explizit gesetzt.
- `lib/structuredData.ts`: `buildServiceSchema` und `buildBreadcrumbSchema` erzeugen absolute Schema-URLs aus dem übergebenen Pfad.
- `next.config.mjs`: aktuell keine Redirect-Konfiguration; bestehende Config enthält nur `typescript.ignoreBuildErrors`.

Eine statische Sitemap- oder Robots-Datei wurde im App-/Root-Bestand nicht gefunden. Falls eine Sitemap/Robots-Ausgabe später ergänzt oder bereits indirekt erzeugt wird, muss das in der Umsetzungsphase erneut geprüft werden.

## App-Router-Prüfung mit `next-router-check`

Der lokale `next-router-check` wurde read-only angewendet.

Ergebnis:

- 28 UI-Routen geprüft.
- 13 lokalisierte Routen gelten als datenladend, weil sie `async`/`notFound()` verwenden.
- Für diese 13 Routen sind `loading.tsx` und `error.tsx` im lokalisierten Scope vorhanden.
- Im lokalisierten Scope fehlt weiterhin ein eigenes `not-found.tsx`; dieser bekannte Befund betrifft EN/RU und wird in 050 nicht nebenbei behoben.
- Die deutschen Routen sind durch `app/(de)/loading.tsx`, `app/(de)/error.tsx` und `app/(de)/not-found.tsx` im übergeordneten Scope abgedeckt.

Bei der späteren Erstellung neuer deutscher `/gutachtenarten/...`-Routen ist erneut zu prüfen, ob sie statisch bleiben oder eigene Sonderdateien brauchen.

## Vorläufige Migrationsentscheidung für den Umsetzungsplan

Die geplante kanonische deutsche Struktur für die drei V1-Gutachtenarten lautet:

```text
/gutachtenarten/unfallgutachten
/gutachtenarten/fahrzeugbewertung
/gutachtenarten/schadendokumentation
```

Die bisherigen URLs sollen nicht gelöscht werden, sondern permanent und direkt auf die passende neue Zielroute weiterleiten:

```text
/leistungen/unfallgutachten -> /gutachtenarten/unfallgutachten
/leistungen/fahrzeugbewertung -> /gutachtenarten/fahrzeugbewertung
/leistungen/schadendokumentation -> /gutachtenarten/schadendokumentation
```

Die Redirects müssen direkt sein: keine Redirect-Ketten, keine Schleifen, keine fachfremden Ziele.

Die Route `/leistungen` bleibt ein eigener Entscheidungsfall. Sie darf nicht automatisch auf `/gutachtenarten/...` oder auf die Startseite weitergeleitet werden, ohne vorher zu prüfen, ob dadurch Suchintention, alte interne Links, mögliche indexierte URLs oder Duplicate-Content-Risiken sauber behandelt werden.

## Risiken und SEO-Auswirkungen

Für die spätere Umsetzung sind besonders zu prüfen:

- alte `/leistungen/...`-URLs dürfen keine indexierbaren Duplicate-Content-Seiten neben den neuen `/gutachtenarten/...`-URLs bleiben.
- interne deutsche Links müssen konsequent auf die neuen Zielrouten zeigen.
- Redirects müssen permanent, direkt und fachlich passend sein.
- Service-Structured-Data und `BreadcrumbList` dürfen keine alten kanonischen `/leistungen/...`-Pfade mehr ausgeben.
- OpenGraph-URLs und mögliche Canonical-Ausgaben müssen auf die neuen Zielrouten zeigen.
- `/leistungen` muss entweder bewusst erhalten, weitergeleitet, nicht indexiert oder später bereinigt werden; die Entscheidung darf nicht nebenbei erfolgen.
- alte Legacy-Service-Routen dürfen nicht pauschal auf Gutachtenarten geleitet werden.
- EN/RU-Routen und Hreflang bleiben bis 032/029 gesondert zu prüfen.
- Aufgabe 029 bleibt nach 050 für den vollständigen SEO-, Metadata-, Structured-Data-, Canonical-, Sitemap-, Robots- und Hreflang-Abschluss zuständig.

## Konkreter späterer Umsetzungsplan

Nach Freigabe des Migrationsplans soll die spätere Umsetzung in 050 in dieser Reihenfolge erfolgen:

1. Neue deutsche App-Router-Routen unter `app/(de)/gutachtenarten/...` für die drei Gutachtenarten anlegen oder bestehende Seiten dorthin verschieben.
2. Deutsche alte URLs unter `/leistungen/...` als permanente, direkte Redirects auf die passenden `/gutachtenarten/...`-Zielrouten behandeln.
3. Alle deutschen internen Links in Header, Mobile-Menü, Footer, Startseitenkarten, Über-uns-Link, CTAs und Breadcrumb-Ausgaben auf die neuen Zielrouten umstellen.
4. Das gemeinsame `ServicePageLayout` so anpassen, dass Gutachtenarten-Pfade, Backlinks, `Service`-Schema und `BreadcrumbList` nicht mehr automatisch `/leistungen/${serviceName}` verwenden.
5. Metadata-/OpenGraph-Pfade der drei Gutachtenarten auf die neuen URLs prüfen und anpassen, soweit dies für die Migration unmittelbar notwendig ist.
6. Behandlung von `/leistungen` separat entscheiden und dokumentieren, ohne alte Service-Intentionen falsch umzuleiten.
7. EN/RU unverändert lassen, sofern keine separate i18n-Freigabe vorliegt.
8. Manuelle Routenprüfung durchführen: neue URLs erreichbar, alte URLs redirecten, keine Schleifen, keine Ketten, keine 404 für Kontakt/Legal.
9. `next-router-check`, `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` ausführen.
10. Aufgabe 049 erst nach abgeschlossener, geprüfter und freigegebener 050-Migration starten.

## Präzisierte Akzeptanzkriterien für 050

Zusätzlich zu den bestehenden Kriterien gilt:

- Der Start- und Inventurschritt enthält keine Website-, Route-, Redirect-, Link-, Metadata-, Structured-Data-, Sitemap-, Robots-, Text-, Layout- oder Asset-Änderungen.
- Die betroffenen aktuellen Routen, geplanten Zielrouten, internen Links, Redirect-Abhängigkeiten und SEO-Ausgaben sind in dieser Task-Datei inventarisiert.
- Die Behandlung von `/leistungen` ist als eigener Entscheidungsfall dokumentiert.
- Die späteren Redirects müssen permanent, direkt und fachlich passend sein; Redirect-Ketten und Redirect-Schleifen sind ausgeschlossen.
- Alte Legacy-Service-Routen werden nicht pauschal auf Gutachtenarten weitergeleitet.
- `Service`- und `BreadcrumbList`-Structured-Data sowie OpenGraph-/Metadata-Pfade werden in der späteren Umsetzung geprüft und dürfen keine alten kanonischen Gutachtenarten-URLs ausgeben.
- Sitemap-/Robots-/Canonical-/Hreflang-Auswirkungen werden inventarisiert; die finale SEO-Qualität bleibt Aufgabe 029.
- Der bekannte lokalisierte `not-found.tsx`-Befund aus `next-router-check` wird dokumentiert und nicht nebenbei in 050 gelöst.
- Aufgabe 049 wird erst nach Abschluss von 050 gestartet.

## Akzeptanzkriterien

- Aufgabe 050 wurde erst nach Abschluss von 048 gestartet.
- Die endgültige deutsche kanonische Gutachtenarten-Struktur wurde geprüft und dokumentiert.
- Die drei freigegebenen deutschen Zielrouten unter `/gutachtenarten/...` sind erreichbar.
- Die bisherigen drei `/leistungen/...`-URLs leiten permanent und jeweils fachlich passend auf die neuen Zielrouten weiter.
- Alle internen deutschen Links, Desktop- und Mobile-Navigation, Startseitenkarten und CTAs verwenden die neuen Zielrouten.
- Breadcrumbs sowie `Service`- und `BreadcrumbList`-Pfade verwenden die neue Struktur.
- Canonicals und Sitemap bilden die neue kanonische Struktur ohne Duplicate Content ab.
- Die Behandlung von `/leistungen` wurde nach Bestandsprüfung ausdrücklich entschieden und dokumentiert.
- Bestehende SEO-Signale und mögliche indexierte URLs wurden berücksichtigt.
- EN/RU-Routen wurden nicht ungeprüft migriert.
- Alte URLs wurden nicht ohne passende Redirects entfernt.
- Inhalte der Gutachtenseiten wurden nicht umfassend neu geschrieben.
- Aufgabe 029 bleibt als nachgelagerter vollständiger SEO-, Metadata- und Structured-Data-Check bestehen.
- Impressum, Datenschutz, Kontaktwege und andere nicht betroffene Routen bleiben erreichbar.
- `next-router-check`, `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` wurden erfolgreich ausgeführt oder Abweichungen klar dokumentiert.
- Aufgabe 049 wurde vor Abschluss von 050 nicht gestartet.
- Aufgabe 050 wird erst nach Review und ausdrücklicher Freigabe abgeschlossen.

## Status

Status: in Arbeit
