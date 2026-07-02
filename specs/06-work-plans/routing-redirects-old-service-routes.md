# Routing- und Redirect-Plan für alte Service-Routen

## Zweck

Dieser Plan hält die Inventur der alten Service-Routen fest und bewertet, wie diese Routen vor dem V1-Launch behandelt werden sollen.

Die Datei ist eine Planungsgrundlage für spätere Umsetzungsschritte. Sie setzt keine Redirects um, löscht keine Routen, setzt keine `noindex`-Regeln und ändert keine SEO-, Metadata- oder Structured-Data-Dateien.

## Quellen

- `workflow/active/030-plan-routing-redirects-old-service-routes.md`
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
- EN/RU-Routen bleiben bis Aufgabe 032 offen und gelten nicht ungeprüft als launchfähig.

## Betroffene Routen

Deutsche Routen:

- `/leistungen`
- `/leistungen/unfallgutachten`
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
| `/leistungen` | Existiert als Leistungsübersicht | Offen | Kann als alte 6-Service-Übersicht wirken | Später zu KFZ-Gutachten-/Gutachtenarten-Übersicht umbauen oder vorerst gesondert behandeln | SEO, i18n, Navigation | 029, 032, 026 | Soll die Route in V1 öffentlich bleiben? |
| `/leistungen/unfallgutachten` | Existiert als Detailseite | V1-nah | Alte Service-Struktur und Metadata prüfen | Grundsätzlich behalten, Inhalt und Metadata später sauber auf KFZ-Gutachten ausrichten | SEO, i18n | 029, 032 | Soll sie eigenständige Landingpage oder Teil einer Gutachtenarten-Struktur sein? |
| `/leistungen/autovermietung` | Existiert als alte Detailseite | Legacy | Bewirbt Mietwagen als aktive Leistung | Nicht mehr aktiv bewerben; später Navigation entfernen, `noindex`, 404, 410 oder echten Redirect prüfen | SEO, i18n, Cleanup | 029, 032, 026 | Wird Autovermietung endgültig entfernt oder nur ausgeblendet? |
| `/leistungen/autoservice` | Existiert als alte Detailseite | Legacy | Werkstatt-/AutoRepair-Signal passt nicht zum V1-Scope | Nicht mehr aktiv bewerben; später `noindex`, 404 oder 410 prüfen | SEO, Legal, i18n, Cleanup | 031, 029, 032, 026 | Welche Werkstatt-/Service-Aussagen müssen rechtlich entfernt werden? |
| `/leistungen/detailing` | Existiert als alte Detailseite | Legacy | Detailing passt nicht zum V1-Scope | Nicht mehr aktiv bewerben; später `noindex`, 404 oder 410 prüfen | SEO, i18n, Cleanup | 029, 032, 026 | Ob alte Inhalte vollständig entfernt werden sollen |
| `/leistungen/zulassungsservice` | Existiert als alte Detailseite | Legacy | Zulassungsservice passt nicht zum V1-Scope | Nicht mehr aktiv bewerben; später `noindex`, 404 oder 410 prüfen | SEO, i18n, Cleanup | 029, 032, 026 | Ob Zulassung als spätere Leistung denkbar bleibt |
| `/leistungen/abschleppdienst-pannenhilfe` | Existiert als alte Detailseite | Legacy | Kann falsche Soforthilfe-/Pannenhilfe-Erwartung erzeugen | Nicht mehr aktiv bewerben; später `noindex`, 404 oder 410 prüfen | Legal, SEO, i18n, Cleanup | 031, 029, 032, 026 | Ob und wie Notfall-/Abschleppversprechen entfernt werden |
| EN/RU lokalisierte alte Service-Routen | Existieren | Offen bis 032 | Alte Leistungen werden in EN/RU weiter sichtbar und verlinkbar | Bis 032 nicht als launchfähig behandeln; Entscheidung an DE-Routen koppeln | i18n, SEO, Cleanup | 032, 029, 026 | Ob EN/RU zum Launch aktiv bleiben |

## Empfehlungen je Route

### `/leistungen`

Die Route existiert als Leistungsübersicht und darf in Version 1 nicht mehr wie eine alte Übersicht über sechs Fahrzeugservices wirken.

Empfehlung:

- Nicht als alte 6-Service-Übersicht launchfähig behandeln.
- Später entweder zu einer KFZ-Gutachten-/Gutachtenarten-Übersicht umbauen oder bis zur Entscheidung gesondert behandeln.
- Keine pauschale Weiterleitung ohne Zielentscheidung.
- Metadata, interne Links und mögliche Sitemap-Aufnahme in Aufgabe 029 prüfen.

Offen bleibt, ob `/leistungen` in Version 1 als eigenständige Übersichtsseite benötigt wird oder ob die Startseite und `/leistungen/unfallgutachten` ausreichen.

### `/leistungen/unfallgutachten`

Die Route ist fachlich nah am V1-Scope, weil Unfallgutachten und Schadengutachten zum Kernbereich KFZ-Gutachten gehören.

Empfehlung:

- Grundsätzlich behalten.
- Inhalt, Metadata, interne Links und mögliche strukturierte Daten später sauber auf KFZ-Gutachten, Unfallgutachten und Schadengutachten ausrichten.
- Prüfen, ob die Route als eigenständige Landingpage bestehen bleibt oder in eine neue Gutachtenarten-Struktur eingebunden wird.
- Keine Entfernung und kein 410 für diese Route planen, solange V1 weiterhin Unfallgutachten sichtbar braucht.

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

- Bis Aufgabe 032 nicht als launchfähig behandeln.
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

## Kontakt-/Legal-Abhängigkeiten für Aufgabe 031

Aufgabe 031 muss prüfen, ob Kontakt-, AGB-, Datenschutz-, Impressums- oder sichtbare Servicetexte noch alte Leistungsversprechen enthalten.

Besonders relevant:

- Mietwagen-/Autovermietungsversprechen
- Werkstatt-, Wartungs- und Reparaturversprechen
- Detailing-/Aufbereitungsversprechen
- Zulassungsservice
- Abschleppdienst, Pannenhilfe, Notfall- oder Soforthilfe-Erwartungen
- Formulare oder Anfrageoptionen, die alte Leistungen weiterhin anbieten

Diese Punkte müssen geklärt sein, bevor alte Routen final öffentlich bewertet oder entfernt werden.

## i18n-Abhängigkeiten für Aufgabe 032

Aufgabe 032 muss entscheiden, ob EN/RU zum V1-Launch aktiv bleiben und welche Inhalte dort sichtbar sein dürfen.

Zu prüfen sind:

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

## Nicht umsetzen in Aufgabe 030

In Aufgabe 030 wird nicht umgesetzt:

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

- Soll `/leistungen` in Version 1 als eigene KFZ-Gutachten-/Gutachtenarten-Übersicht bestehen bleiben?
- Soll `/leistungen/unfallgutachten` als eigenständige Landingpage erhalten bleiben?
- Welche Legacy-Routen sollen später `noindex`, 404 oder 410 erhalten?
- Gibt es für einzelne Legacy-Routen eine echte semantische Redirect-Zielroute?
- Bleiben EN/RU-Seiten zum V1-Launch aktiv?
- Welche alten Kontakt-, Legal- und Serviceversprechen müssen vor Launch entfernt werden?
- Welche alten Komponenten, Daten und Assets dürfen nach den Entscheidungen aus 030/031/032/029 bereinigt werden?
