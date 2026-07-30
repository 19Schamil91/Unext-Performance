# Routing- und Redirect-Plan für alte Service-Routen

## Zweck

Dieser Plan hält die Inventur der alten Service-Routen fest und bewertet, wie diese Routen vor dem V1-Launch behandelt werden sollen.

Die Datei entstand als Planungsgrundlage in Aufgabe 030. Die historische Planung bleibt erhalten; der folgende aktuelle Stand ordnet die inzwischen umgesetzten Teile ein, ohne neue Redirects, `noindex`-Regeln oder technische SEO-Änderungen aus diesem Dokument abzuleiten.

## Historische Einordnung und aktueller Stand

Aufgabe 050 hat die deutsche Gutachtenarten-Routenmigration umgesetzt:

- kanonisch: `/gutachtenarten/unfallgutachten`
- kanonisch: `/gutachtenarten/fahrzeugbewertung`
- kanonisch: `/gutachtenarten/schadendokumentation`
- die bisherigen deutschen Detailrouten unter `/leistungen/...` leiten permanent und direkt auf das jeweils passende neue Ziel weiter;
- `/leistungen` bleibt als eigenständige Übersichtsroute technisch bestehen und wurde in 050 nicht gelöscht, umgebaut oder umgeleitet.

Englische und russische Gutachtenarten-Detailrouten sind noch nicht umgesetzt. Für den gemeinsamen V1-Launch sind gleichwertige Ziele unter `/en/gutachtenarten/...` und `/ru/gutachtenarten/...` geplant. Ihre Umsetzung erfolgt erst in einer später ausdrücklich freizugebenden Aufgabe. Verbleibende SEO- und Legacy-Cleanup-Entscheidungen bleiben bei 029 und 026.

## Quellen

- `workflow/done/030-plan-routing-redirects-old-service-routes.md`
- `specs/06-work-plans/v1-launch-masterplan.md`
- `specs/00-global-spec/global-spec.md`
- `specs/01-functional-map/functional-map.md`
- `specs/02-feature-specs/kfz-gutachten.md`
- `specs/02-feature-specs/seo.md`
- `specs/06-work-plans/launch-readiness.md`
- Inventur der vorhandenen Routen unter `app/(de)/leistungen/`
- Inventur der lokalisierten Routen unter `app/(localized)/[locale]/leistungen/`
- Trefferanalyse in Navigation, Übersetzungen, Metadata, Structured Data und alten Service-Komponenten

## Grundsatz für Version 1

Version 1 der Website ist auf KFZ-Gutachten in Berlin ausgerichtet. Sichtbar aktive Leistungen sollen sich auf Gutachten, Fahrzeugbewertung, Unfall-/Schadengutachten, Beweissicherung und direkte Kontaktaufnahme beziehen.

Alte Nicht-V1-Leistungen dürfen nicht mehr als aktive Leistungen beworben werden. Dazu gehören insbesondere Autovermietung, Autoservice/Werkstatt, Detailing, Zulassungsservice sowie Abschleppdienst/Pannenhilfe.

Für alte Service-Routen gilt:

- Keine Route wird blind gelöscht.
- Keine pauschalen Redirects auf KFZ-Gutachten, wenn die Suchintention nicht semantisch passt.
- Redirects sind nur sinnvoll, wenn ein Ziel fachlich wirklich nahe liegt.
- Legacy-Seiten müssen vor Launch hinsichtlich Navigation, Indexierung, 404/410 und Cleanup bewertet werden.
- Der gemeinsame DE/EN/RU-V1-Launch ist inzwischen verbindlich entschieden. Aufgabe 032 konkretisiert nur noch das Vorgehen für Übersetzung, Routing, Qualitätssicherung und responsive Prüfung. EN/RU-Routen gelten bis zur später freizugebenden Umsetzung und Prüfung weiterhin nicht als launchfähig.

## Betroffene Routen

Deutsche Routen:

- `/leistungen`
- `/gutachtenarten/unfallgutachten`
- `/gutachtenarten/fahrzeugbewertung`
- `/gutachtenarten/schadendokumentation`
- `/leistungen/unfallgutachten` als permanente Redirect-Quelle
- `/leistungen/fahrzeugbewertung` als permanente Redirect-Quelle
- `/leistungen/schadendokumentation` als permanente Redirect-Quelle
- `/leistungen/autovermietung`
- `/leistungen/autoservice`
- `/leistungen/detailing`
- `/leistungen/zulassungsservice`
- `/leistungen/abschleppdienst-pannenhilfe`

Lokalisierte Routen:

- `/(localized)/[locale]/leistungen`
- `/(localized)/[locale]/leistungen/unfallgutachten`
- `/(localized)/[locale]/leistungen/autovermietung`
- `/(localized)/[locale]/leistungen/autoservice`
- `/(localized)/[locale]/leistungen/detailing`
- `/(localized)/[locale]/leistungen/zulassungsservice`
- `/(localized)/[locale]/leistungen/abschleppdienst-pannenhilfe`

## Bewertungsmatrix

| Route | Aktueller Status | V1-Einordnung | Risiko | Empfehlung | Abhängigkeiten | Folgeaufgabe | Offene Punkte |
|---|---|---|---|---|---|---|---|
| `/leistungen` | Existiert als eigenständige Übersicht | Technisch beibehalten | Kann weiterhin alte Service-Signale enthalten | Indexierung, Canonical, interne Signale und späteren Cleanup in 029/026 final prüfen | SEO, i18n, Cleanup | 029, 026 | Endgültige SEO- und Cleanup-Behandlung |
| `/leistungen/unfallgutachten` | Permanente direkte Redirect-Quelle | Deutsche Migration abgeschlossen | Kein offener Zielroutenentscheid mehr | Redirect auf `/gutachtenarten/unfallgutachten` beibehalten; Metadata, Canonical und Structured Data in 029 prüfen | SEO, Cleanup | 029, 026 | Keine neue Routingentscheidung |
| `/leistungen/fahrzeugbewertung` und `/leistungen/schadendokumentation` | Permanente direkte Redirect-Quellen | Deutsche Migration abgeschlossen | Kein offener Zielroutenentscheid mehr | Redirects auf die jeweils passenden `/gutachtenarten/...`-Ziele beibehalten; SEO-Signale in 029 prüfen | SEO, Cleanup | 029, 026 | Keine neue Routingentscheidung |
| `/leistungen/autovermietung` | Existiert als alte Detailseite | Legacy | Bewirbt Mietwagen als aktive Leistung | Nicht mehr aktiv bewerben; später Navigation entfernen, `noindex`, 404, 410 oder echten Redirect prüfen | SEO, i18n, Cleanup | 029, 032, 026 | Wird Autovermietung endgültig entfernt oder nur ausgeblendet? |
| `/leistungen/autoservice` | Existiert als alte Detailseite | Legacy | Werkstatt-/AutoRepair-Signal passt nicht zum V1-Scope | Nicht mehr aktiv bewerben; später `noindex`, 404 oder 410 prüfen | SEO, Legal, i18n, Cleanup | 031, 029, 032, 026 | Welche Werkstatt-/Service-Aussagen müssen rechtlich entfernt werden? |
| `/leistungen/detailing` | Existiert als alte Detailseite | Legacy | Detailing passt nicht zum V1-Scope | Nicht mehr aktiv bewerben; später `noindex`, 404 oder 410 prüfen | SEO, i18n, Cleanup | 029, 032, 026 | Ob alte Inhalte vollständig entfernt werden sollen |
| `/leistungen/zulassungsservice` | Existiert als alte Detailseite | Legacy | Zulassungsservice passt nicht zum V1-Scope | Nicht mehr aktiv bewerben; später `noindex`, 404 oder 410 prüfen | SEO, i18n, Cleanup | 029, 032, 026 | Ob Zulassung als spätere Leistung denkbar bleibt |
| `/leistungen/abschleppdienst-pannenhilfe` | Existiert als alte Detailseite | Legacy | Kann falsche Soforthilfe-/Pannenhilfe-Erwartung erzeugen | Nicht mehr aktiv bewerben; später `noindex`, 404 oder 410 prüfen | Legal, SEO, i18n, Cleanup | 031, 029, 032, 026 | Ob und wie Notfall-/Abschleppversprechen entfernt werden |
| EN/RU lokalisierte alte Service-Routen und fehlende Gutachtenarten-Detailseiten | Teilweise vorhanden; neue Detailseiten fehlen | Noch nicht launchfähig | Alte Leistungen bleiben sichtbar und die drei neuen Zielrouten fehlen | Auf V1-Scope umstellen; gleichwertige Detailseiten unter `/en/gutachtenarten/...` und `/ru/gutachtenarten/...` später gesondert umsetzen | i18n, SEO, Cleanup | 032, spätere EN/RU-Umsetzung, 029, 026 | Umsetzung, menschliche Freigabe und Cleanup je Sprache |

## Empfehlungen je Route

### `/leistungen`

Die Route besteht weiterhin als eigenständige Leistungsübersicht. Sie wurde in Aufgabe 050 bewusst nicht gelöscht, umgebaut oder umgeleitet. Sie ist kein sichtbarer allgemeiner Gutachtenarten-Einstieg in der deutschen Hauptnavigation.

Aktuelle Behandlung:

- technisch beibehalten;
- keine pauschale Weiterleitung ohne fachlich passendes Ziel;
- Indexierung, Canonical, interne Links und mögliche Sitemap-Aufnahme in Aufgabe 029 prüfen;
- nicht mehr benötigte alte Inhalte und Quellen erst nach dieser Entscheidung in Aufgabe 026 bereinigen.

Offen bleibt nur die finale SEO- und Cleanup-Behandlung, nicht mehr die Existenz oder Rolle als neue Gutachtenarten-Landingpage.

### `/leistungen/unfallgutachten`

Die frühere Detailroute ist seit Aufgabe 050 keine kanonische Inhaltsroute mehr. Sie leitet permanent und direkt auf `/gutachtenarten/unfallgutachten` weiter.

Aktuelle Behandlung:

- Redirect beibehalten und in 029 auf Canonical-, Sitemap-, Hreflang- und Metadata-Konsistenz prüfen;
- keine erneute Zielroutenentscheidung;
- alte, nachweislich ungenutzte Quellen erst in 026 entfernen.

Dasselbe gilt für `/leistungen/fahrzeugbewertung` und `/leistungen/schadendokumentation`, die direkt auf ihre jeweiligen deutschen `/gutachtenarten/...`-Ziele weiterleiten.

### `/leistungen/autovermietung`

Autovermietung ist nicht Teil des aktiven V1-Scopes.

Empfehlung:

- Nicht mehr als aktive Leistung bewerben.
- Später aus Navigation, Übersichten und sichtbaren V1-Pfaden entfernen, sofern noch vorhanden.
- `noindex`, 404 oder 410 je nach finaler Geschäftsentscheidung prüfen.
- Kein pauschaler Redirect auf KFZ-Gutachten, weil die Suchintention Mietwagen nicht automatisch zu Gutachten passt.
- Redirect nur prüfen, wenn es eine fachlich echte Nähe oder eine bestätigte Ersatzroute gibt.

### `/leistungen/autoservice`

Autoservice/Werkstatt ist nicht Teil des aktiven V1-Scopes und kann falsche Erwartungen an Werkstatt- oder Reparaturleistungen erzeugen.

Empfehlung:

- Nicht mehr als aktive Leistung bewerben.
- Werkstatt-, Reparatur-, Service- und AutoRepair-Signale in Aufgabe 031 und 029 prüfen.
- Später `noindex`, 404 oder 410 prüfen.
- Kein pauschaler Redirect auf KFZ-Gutachten, wenn die Suchintention Werkstatt/Reparatur ist.

### `/leistungen/detailing`

Detailing ist nicht Teil des aktiven V1-Scopes.

Empfehlung:

- Nicht mehr als aktive Leistung bewerben.
- Später aus Navigation, Übersichten und alten Content-Daten entfernen, wenn die Route final deaktiviert wird.
- `noindex`, 404 oder 410 prüfen.
- Kein pauschaler Redirect auf KFZ-Gutachten.

### `/leistungen/zulassungsservice`

Zulassungsservice ist nicht Teil des aktiven V1-Scopes.

Empfehlung:

- Nicht mehr als aktive Leistung bewerben.
- Später `noindex`, 404 oder 410 prüfen.
- Nur dann weiterführen oder weiterleiten, wenn Zulassung ausdrücklich als spätere Leistung bestätigt wird.
- Keine SEO- oder Navigationssignale für Version 1 setzen.

### `/leistungen/abschleppdienst-pannenhilfe`

Abschleppdienst/Pannenhilfe ist nicht Teil des aktiven V1-Scopes und kann besonders schnell falsche Erwartungen an akute Hilfe oder Verfügbarkeit erzeugen.

Empfehlung:

- Nicht mehr als aktive Leistung bewerben.
- Kontakt- und Legal-Aussagen in Aufgabe 031 prüfen.
- Später `noindex`, 404 oder 410 prüfen.
- Kein pauschaler Redirect auf KFZ-Gutachten, weil die Suchintention Pannenhilfe/Abschleppen nicht automatisch zu einem Gutachten passt.

### EN/RU lokalisierte alte Service-Routen

Die lokalisierten Routen existieren weiterhin und enthalten beziehungsweise verlinken alte Service-Angebote.

Empfehlung:

- Bis zur später freizugebenden EN/RU-Umsetzung und vollständigen Prüfung nicht als launchfähig behandeln.
- Entscheidungen zu EN/RU an die finalen deutschen Routenentscheidungen koppeln.
- Keine ungeprüften EN/RU-SEO-, hreflang- oder Sitemap-Signale für alte Service-Routen setzen.
- Wenn eine deutsche Legacy-Route entfernt, noindex gesetzt oder auf 404/410 gestellt wird, muss die entsprechende EN/RU-Route konsistent bewertet werden.

## SEO-Abhängigkeiten für Aufgabe 029

Aufgabe 029 muss die Route-Entscheidungen aus diesem Plan berücksichtigen.

Zu prüfen sind insbesondere:

- alte Keywords in globalen und seitenbezogenen Metadata
- Title und Descriptions alter Service-Seiten
- `robots`, mögliche `noindex`-Regeln und Indexierbarkeit
- Canonicals
- Sitemap-Aufnahme oder Ausschluss
- hreflang-Signale für EN/RU
- strukturierte Daten, insbesondere alte Werkstatt-/AutoRepair-Signale
- interne Linksignale aus Header, Footer, Startseite, Service-Übersichten und Detailseiten

SEO darf keine alten Nicht-V1-Leistungen als aktive Leistungen stärken.

## Historische Kontakt-/Legal-Abhängigkeiten für Aufgabe 031

Aufgabe 031 hat geprüft, ob Kontakt-, AGB-, Datenschutz-, Impressums- oder sichtbare Servicetexte noch alte Leistungsversprechen enthalten. Die Ergebnisse bleiben als Grundlage für 029, 026 und die spätere EN/RU-Umsetzung relevant.

Besonders relevant:

- Mietwagen-/Autovermietungsversprechen
- Werkstatt-, Wartungs- und Reparaturversprechen
- Detailing-/Aufbereitungsversprechen
- Zulassungsservice
- Abschleppdienst, Pannenhilfe, Notfall- oder Soforthilfe-Erwartungen
- Formulare oder Anfrageoptionen, die alte Leistungen weiterhin anbieten

Diese Punkte müssen geklärt sein, bevor alte Routen final öffentlich bewertet oder entfernt werden.

## i18n-Abhängigkeiten für Aufgabe 032

Der gemeinsame DE/EN/RU-V1-Launch ist durch `DECISIONS.md`, `ROADMAP.md`, den V1-Masterplan und Aufgabe 049 verbindlich entschieden. Aufgabe 032 entscheidet nicht mehr über den Sprachumfang, sondern konkretisiert Zielrouten, Übersetzungsregeln, Sprachwechsel, Freigaben und responsive Prüfung für die spätere EN/RU-Umsetzung.

Zu prüfen sind:

- geplante Zielseiten `/en/gutachtenarten/unfallgutachten`, `/en/gutachtenarten/fahrzeugbewertung`, `/en/gutachtenarten/schadendokumentation`
- geplante Zielseiten `/ru/gutachtenarten/unfallgutachten`, `/ru/gutachtenarten/fahrzeugbewertung`, `/ru/gutachtenarten/schadendokumentation`
- fachlicher Sprachwechsel ohne unpassenden Startseiten-Fallback
- lokalisierte alte Service-Routen
- EN/RU Header- und Footer-Links
- EN/RU Service-Übersichten und Detailseiten
- EN/RU Metadata und mögliche hreflang-Signale
- Konsistenz zwischen deutscher Route-Entscheidung und lokalisierter Route

EN/RU alte Service-Routen dürfen nicht ungeprüft als launchfähig gelten.

## Cleanup-Abhängigkeiten für Aufgabe 026

Aufgabe 026 darf alte Komponenten, Translation-Daten und Assets erst bereinigen, wenn die Entscheidungen aus 030, 031, 032 und 029 getroffen sind.

Mögliche spätere Cleanup-Bereiche:

- alte Service-Detailkomponenten
- alte Service-Übersichtsdaten
- alte Header-/Footer-Service-Links
- alte Kontakt-Service-Auswahl
- alte AGB-/Legal-Service-Texte
- alte Service-Bilder und ungenutzte Assets
- alte Metadata- und Structured-Data-Hilfsdaten

Kein Cleanup darf blind erfolgen.

## Historische Umsetzungsgrenze von Aufgabe 030

In Aufgabe 030 wurde nicht umgesetzt:

- keine Redirects
- keine `noindex`-Regeln
- keine 404-/410-Umstellung
- keine Routendateien löschen
- keine App-/Route-Dateien ändern
- keine Navigation ändern
- keine SEO-/Metadata-/Structured-Data-Dateien ändern
- keine EN/RU-Texte ändern
- keine Assets entfernen oder hinzufügen
- kein Code-Cleanup

## Offene Entscheidungen

- Gelöst durch 050: Die drei deutschen Gutachtenarten besitzen kanonische Detailrouten unter `/gutachtenarten/...`; ihre bisherigen `/leistungen/...`-URLs leiten permanent und direkt weiter.
- Gelöst durch 050: `/leistungen` bleibt technisch als eigenständige Übersichtsroute bestehen und wurde nicht in die Gutachtenarten-Routenmigration einbezogen.
- Offen für 029/026: finale SEO-, Indexierungs- und Cleanup-Behandlung von `/leistungen` sowie der übrigen Legacy-Routen.
- Offen für die später freizugebende EN/RU-Umsetzung: Aufbau der sechs geplanten Gutachtenarten-Detailseiten, fachliche Sprachwechsel-Zuordnung und menschliche Freigaben.
- Welche Legacy-Routen sollen später `noindex`, 404 oder 410 erhalten?
- Gibt es für einzelne Legacy-Routen eine echte semantische Redirect-Zielroute?
- Welche alten Kontakt-, Legal- und Serviceversprechen müssen vor Launch entfernt werden?
- Welche alten Komponenten, Daten und Assets dürfen nach den Entscheidungen aus 032/029 bereinigt werden?
