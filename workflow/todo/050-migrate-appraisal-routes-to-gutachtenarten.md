# Aufgabe 050 - Gutachtenarten-URLs und bestehende Leistungsrouten migrieren

## Ziel

Die endgültige kanonische URL-Struktur der drei deutschen Gutachtenarten prüfen und voraussichtlich von `/leistungen/...` auf `/gutachtenarten/...` umstellen.

Die Migration soll Nutzerführung, interne Links, Redirects und SEO-Signale gemeinsam berücksichtigen. In diesem Planungsschritt wird keine Route geändert und Aufgabe 050 wird nicht gestartet.

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

Status: offen
