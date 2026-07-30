# V1 Launch-Masterplan

## Zweck

Dieser Masterplan zieht die restlichen Version-1-Seiten, Inhalte, Launch-Entscheidungen und Workflow-Aufgaben an einer Stelle zusammen.

Er ersetzt keine Feature-Spec und keine spätere Umsetzung. Er soll verhindern, dass SEO, Trust-Inhalte, Routing, Legal, i18n und Cleanup getrennt voneinander geplant werden und dabei Seiten oder Entscheidungen fehlen.

## Quellen

- `specs/00-global-spec/global-spec.md`
- `specs/01-functional-map/functional-map.md`
- `specs/02-feature-specs/kfz-gutachten.md`
- `specs/02-feature-specs/contact-flow.md`
- `specs/02-feature-specs/seo.md`
- `specs/02-feature-specs/faq.md`
- `specs/02-feature-specs/mehrsprachigkeit.md`
- `specs/04-visual-rules/visual-rules.md`
- `specs/06-work-plans/launch-readiness.md`
- `workflow/done/028-create-version-1-launch-roadmap.md`
- `workflow/done/036-spec-trust-zertifizierung-nachweis.md`
- `workflow/done/038-update-specs-trust-zertifizierung-nachweis.md`
- `workflow/todo/026-code-cleanup-after-rework.md`
- `workflow/todo/029-implement-seo-metadata-kfz-gutachten.md`
- `workflow/done/030-plan-routing-redirects-old-service-routes.md`
- `workflow/done/031-review-contact-legal-kfz-gutachten.md`
- `workflow/active/032-review-i18n-launch-scope.md`
- `workflow/done/047-strengthen-about-trust-qualification-certificate.md`
- `workflow/done/048-review-german-core-page-consistency.md`
- `workflow/done/049-audit-v1-user-stories-user-journeys.md`
- `workflow/done/050-migrate-appraisal-routes-to-gutachtenarten.md`
- `workflow/todo/033-launch-quality-check.md`
- `workflow/todo/034-deployment-launch-gate.md`
- `workflow/todo/035-post-launch-monitoring.md`
- aktuelle App-Routen unter `app/`

## Grundsatz für Version 1

Version 1 ist eine fokussierte KFZ-Gutachten-Webseite für Berlin.

Version 1 umfasst nach den freigegebenen Specs:

- starke Hauptseite für `KFZ-Gutachten Berlin`
- Gutachtenarten als sichtbare Erklärbereiche
- drei eigenständige deutsche Gutachtenarten-Detailseiten unter `/gutachtenarten/...`
- gemeinsamer V1-Launch auf Deutsch, Englisch und Russisch; Deutsch ist die fachliche Referenz
- Ablauf / Anfragevorbereitung
- digitale Schadenaufnahme nur als Kontakt- und Anfrageprozess
- Telefon, WhatsApp und E-Mail als freigegebene Kontaktwege
- Formular nur, wenn es umgesetzt, geprüft und ausdrücklich freigegeben ist
- FAQ, Standort, Öffnungszeiten und Mobile-First-CTAs
- Impressum, Datenschutz und Legal-Prüfung
- keine Upload-, Supabase-, KI-, Admin- oder Portal-Livefunktion
- keine alten Nicht-Scope-Leistungen als aktive Leistungen

Konkrete finale Website-Texte werden in diesem Masterplan nicht erfunden. Fehlende finale Texte bleiben `offen` und müssen in der zuständigen Folgeaufgabe geklärt werden.

## Seiten- und Routenmatrix

| Seite/Routenbereich | Existiert aktuell | V1-Entscheidung | Zweck | Content/Sections | Trust/Qualifikation | CTA/Kontakt | SEO/Metadata | Routing/Redirect | Legal/Kontakt | i18n | Cleanup | Zuständige Aufgabe | Offene Punkte |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Startseite `/` bzw. `/de` | Ja | V1-relevant | Hauptseite für `KFZ-Gutachten Berlin` | Hero, Gutachtenarten, Ablauf, digitale Schadenaufnahme als Anfragevorbereitung, Vertrauen, FAQ, Kontakt-CTA | Deutscher Trust- und Qualifikationsstand durch 047/048 sichtbar geklärt | Telefon, WhatsApp, Anfrage-CTA; Formular nur bei Freigabe | 029 nach Abschluss der dreisprachigen Inhalts- und Routenarbeit | Kein Redirect-Thema für Hauptseite bekannt | Kontaktdaten müssen stimmen | DE ist Referenz; EN/RU werden im später freizugebenden Umsetzungsschritt gleichwertig hergestellt | Altbezüge später über 026 prüfen | 032, spätere EN/RU-Umsetzung, danach 029 | EN/RU-Parität und menschliche Freigaben fehlen noch |
| Über-uns `/ueber-uns` | Ja | V1-relevant | Vertrauen, Einordnung von UNEXT und Qualifikation | Deutsche Bereiche `Qualifikation & Anerkennung` und `Fortbildungen & Weiterbildung` sind durch 047 umgesetzt | Namentliche DESAG-Qualifikation und externer Nachweis sind auf Deutsch sichtbar; keine Logos, Siegel oder Urkunden eingebettet | Kontaktverweis vorhanden | 029 erst nach dreisprachiger Inhaltsfreigabe | Kein Redirect-Thema bekannt | Personen-/Nachweisdaten sensibel | DE ist Referenz; EN/RU-Trust muss inhaltlich identisch und menschlich geprüft sein | Alte Inhalte später prüfen | 032, spätere EN/RU-Umsetzung, danach 029 | EN/RU-Parität und Freigabe fehlen noch |
| Kontakt `/kontakt` | Ja | V1-relevant | Telefon, WhatsApp, E-Mail, Standort, ggf. Formular | Kontaktwege, Standort, Öffnungszeiten, Formularstatus | Trust nur sachlich, nicht Hauptzweck | Primär Telefon und WhatsApp, E-Mail ergänzend | 029 prüft Metadata, falls Seite indexierbar bleibt | Kein Redirect-Thema bekannt | Kontakt-/Legal-Prüfung 031 abgeschlossen | DE ist Referenz; EN/RU werden später gleichwertig geprüft | Alte Kontaktbezüge später prüfen | spätere EN/RU-Umsetzung, danach 029/026 | Formularstatus und dreisprachige Pflichttexte vor Launch prüfen |
| Leistungsübersicht `/leistungen` | Ja | Bleibt technisch als eigenständige Übersichtsroute bestehen | Bestehende Leistungsübersicht außerhalb des sichtbaren deutschen Gutachtenarten-Einstiegs | Darf keine alten Nicht-Scope-Leistungen als aktiv darstellen | Nur belegbare Aussagen | Kein sichtbarer allgemeiner Gutachtenarten-Einstieg | 029 prüft Indexierung, Canonical und alte SEO-Signale | In 050 nicht gelöscht, umgebaut oder umgeleitet | 031-Prüfung abgeschlossen | Lokalisierte Altbestände werden in 032/026 abgegrenzt | 026 nach SEO-Entscheidung | 029, 026 | Endgültige SEO- und Cleanup-Behandlung bleibt offen |
| Deutsche Gutachtenarten `/gutachtenarten/unfallgutachten`, `/gutachtenarten/fahrzeugbewertung`, `/gutachtenarten/schadendokumentation` | Ja | V1-relevant und durch 050 kanonisch festgelegt | Eigenständige Detailseiten für die drei Gutachtenarten | Deutsche Inhalte durch 043, 045, 046 und 048 umgesetzt und geprüft | Belegbare Qualifikation im freigegebenen Umfang | CTA zu Telefon/WhatsApp/Kontakt | Finale Metadata und Structured Data bleiben 029 | Alte deutsche `/leistungen/...`-Detailrouten leiten permanent und direkt auf die neuen Ziele | Kontakt-/Legal-Grenzen aus 031 gelten | Geplante gleichwertige EN/RU-Gegenstücke unter `/en/gutachtenarten/...` und `/ru/gutachtenarten/...` | Alte Quellen erst nach 029 über 026 bereinigen | 050 abgeschlossen; 032 und spätere EN/RU-Umsetzung, danach 029/026 | EN/RU-Gegenstücke, Hreflang und finale SEO-Prüfung fehlen noch |
| Autovermietung `/leistungen/autovermietung` | Ja | Nicht als aktive V1-Leistung | Altbestand | Keine aktive Leistung in V1 | Kein Trust-Bezug | Keine aktiven Mietwagen-CTAs | Alte SEO-Ziele entfernen/prüfen | Behandlung durch 030 geplant; finale technische Entscheidung in 029/026 | Rechtliche Prüfung aus 031 berücksichtigen | Lokalisierte Altbestände in 032/026 prüfen | 026 nach 029 | 029, 026 | Konkrete technische Behandlung offen |
| Autoservice/Werkstatt `/leistungen/autoservice` | Ja | Nicht als aktive V1-Leistung | Altbestand | Keine Werkstatt-/Service-Wirkung in V1 | Kein Trust-Bezug als Werkstatt | Keine Werkstatt-CTAs | Alte SEO-Ziele und `AutoRepair` prüfen | Behandlung durch 030 geplant; finale technische Entscheidung in 029/026 | Kontakt-/Legal-Prüfung 031 abgeschlossen | Lokalisierte Altbestände in 032/026 prüfen | 026 nach 029 | 029, 026 | Konkrete technische Behandlung offen |
| Detailing `/leistungen/detailing` | Ja | Nicht als aktive V1-Leistung | Altbestand | Kein Detailing als aktive Leistung | Kein Trust-Bezug | Keine Detailing-CTAs | Alte SEO-Ziele entfernen/prüfen | Behandlung durch 030 geplant; finale technische Entscheidung in 029/026 | Rechtliche Prüfung aus 031 berücksichtigen | Lokalisierte Altbestände in 032/026 prüfen | 026 nach 029 | 029, 026 | Konkrete technische Behandlung offen |
| Zulassungsservice `/leistungen/zulassungsservice` | Ja | Nicht als aktive V1-Leistung | Altbestand | Kein Zulassungsservice als aktive Leistung | Kein Trust-Bezug | Keine Zulassungs-CTAs | Alte SEO-Ziele entfernen/prüfen | Behandlung durch 030 geplant; finale technische Entscheidung in 029/026 | Rechtliche Prüfung aus 031 berücksichtigen | Lokalisierte Altbestände in 032/026 prüfen | 026 nach 029 | 029, 026 | Konkrete technische Behandlung offen |
| Abschleppdienst/Pannenhilfe `/leistungen/abschleppdienst-pannenhilfe` | Ja | Nicht als aktive V1-Leistung | Altbestand | Kein Abschleppdienst/Pannenhilfe als aktive Leistung | Kein Trust-Bezug | Keine Notdienst- oder Pannenhilfe-CTAs | Alte SEO-Ziele entfernen/prüfen | Behandlung durch 030 geplant; finale technische Entscheidung in 029/026 | Kontakt-/Legal-Prüfung 031 abgeschlossen | Lokalisierte Altbestände in 032/026 prüfen | 026 nach 029 | 029, 026 | Konkrete technische Behandlung offen |
| Impressum `/impressum` | Ja | V1-relevant | Rechtliche Anbieterangaben | Rechtliche Angaben aus freigegebenen Daten | Keine werblichen Trust-Aussagen | Kontaktdaten korrekt | 029 prüft Indexierungs-/Metadata-Kontext, falls relevant | Kein Redirect-Thema bekannt | Inhalt in 031 geprüft; dreisprachige Endprüfung bleibt erforderlich | DE/EN/RU verbindlich; 032 konkretisiert Umsetzung und Prüfung | Kein Cleanup ohne Prüfung | spätere EN/RU-Umsetzung, 029 | Menschliche Sprachfreigabe vor Launch |
| Datenschutz `/datenschutz` | Ja | V1-relevant | Datenschutzinformationen | Muss zum Launch-Stand passen; kein Upload/Supabase/KI als live | Keine Trust-Aussagen | Kontakt-/Datenschutzkontakt prüfen | 029 prüft Indexierungs-/Metadata-Kontext, falls relevant | Kein Redirect-Thema bekannt | Inhalt in 031 geprüft; dreisprachige Endprüfung bleibt erforderlich | DE/EN/RU verbindlich; 032 konkretisiert Umsetzung und Prüfung | Kein Cleanup ohne Prüfung | spätere EN/RU-Umsetzung, 029 | Datenschutztexte für Formular und Sprachen vor Launch prüfen |
| AGB `/agb` | Ja | V1-Entscheidung offen, falls verlinkt/relevant | Rechtlicher oder vertraglicher Kontext | Muss zum tatsächlichen Leistungsumfang passen | Keine werblichen Trust-Aussagen | Kontaktverweise prüfen | 029 prüft Indexierungs-/Metadata-Kontext, falls relevant | Kein Redirect-Thema bekannt | Inhalt in 031 geprüft; Launch-Relevanz bleibt zu bestätigen | DE/EN/RU verbindlich; 032 konkretisiert Umsetzung und Prüfung | Kein Cleanup ohne Prüfung | spätere EN/RU-Umsetzung, 029 | Ob AGB für V1 benötigt und inhaltlich passend sind, ist offen |
| EN/RU lokalisierte Routen `/(localized)/[locale]/*` | Teilweise | Für V1 verbindlich, derzeit nicht launchfähig | Mehrsprachige Inhalte | Müssen fachlich gleichwertig zu Deutsch sein und dürfen nicht mehr versprechen | Trust-Aussagen nur nach deutscher Freigabe und Übersetzungsprüfung | CTA-Texte je Sprache prüfen | Hreflang/Metadata erst nach inhaltlicher und technischer Sprachfreigabe | Bestehende Struktur teilweise alt; sechs Gutachtenarten-Ziele unter `/en/gutachtenarten/...` und `/ru/gutachtenarten/...` sind geplant, aber nicht umgesetzt | Rechtliche Texte pro Sprache menschlich prüfen | 032 konkretisiert Umsetzung und Qualität | 026 erst nach Sprach- und Routenprüfung | 032, spätere EN/RU-Umsetzung, danach 029/026 | Umsetzung, Freigaben und responsive Prüfung fehlen noch |

## Alte Service-Seiten

Alte Service-Seiten sind vorhanden und dürfen für Version 1 nicht als aktive Leistungen stehen bleiben, solange sie nicht ausdrücklich neu freigegeben werden.

Betroffen sind aktuell:

- Autovermietung
- Autoservice/Werkstatt
- Detailing
- Zulassungsservice
- Abschleppdienst/Pannenhilfe

Aufgabe 030 hat die Behandlung je Legacy-Route geplant. Die noch offenen technischen SEO- und Cleanup-Entscheidungen werden in 029 und 026 umgesetzt beziehungsweise finalisiert:

- behalten und umbauen
- auf KFZ-Gutachten-Kontext zurückführen
- noindex
- Redirect
- 404
- 410
- spätere Behandlung

Aufgabe 026 darf diese Bereiche erst bereinigen, wenn 030 und die SEO-/Sprachentscheidungen ausreichend klar sind.

## Sprachrouten EN/RU

Es existieren lokalisierte Routen unter `app/(localized)/[locale]/`.

Für Version 1 ist verbindlich entschieden:

- Deutsch, Englisch und Russisch gehen gemeinsam live.
- Deutsch ist die fachliche Referenz.
- EN/RU müssen sinngleich, fachlich gleichwertig, technisch funktionsfähig und menschlich geprüft sein.
- Sprachspezifische Kürzungen oder Umstellungen sind erlaubt, wenn Aussage, Grenzen und Nutzerziel erhalten bleiben.
- Mobile, Tablet und Desktop werden je Sprache separat geprüft.

Aufgabe 049 hat die vorhandenen Sprach-, Routen- und Nutzerweglücken inventarisiert. Aufgabe 032 konkretisiert das Übersetzungs-, Qualitäts-, Routing- und Layoutvorgehen, entscheidet aber nicht mehr über den Sprachumfang. Die geplanten Gutachtenarten-Ziele lauten `/en/gutachtenarten/...` und `/ru/gutachtenarten/...`; sie sind noch nicht umgesetzt. Die eigentliche EN/RU-Umsetzung erfolgt erst in einer später ausdrücklich freizugebenden Aufgabe. Hreflang, mehrsprachige Metadata sowie lokalisierte Legal- und Kontakttexte gelten bis zur fachlichen und technischen Prüfung nicht als launchfähig.

## Trust-/Qualifikationsstand

Aufgabe 038 hat die Trust-, Qualifikations-, Fortbildungs- und SEO-Grenzen in den Specs geregelt. Die Aufgaben 040, 047 und 048 haben die freigegebenen deutschen Trust- und Qualifikationsinhalte sichtbar umgesetzt und geprüft.

Für den dreisprachigen Launch bleibt offen:

- EN und RU müssen dieselben bestätigten Unternehmens-, Kontakt-, Qualifikations- und Trust-Angaben wie Deutsch enthalten.
- Die Übersetzungen müssen natürlich formuliert, fachlich gleichwertig und menschlich freigegeben sein.
- Aufgabe 029 darf Trust-Aussagen in Metadata, OpenGraph oder Structured Data erst nach dieser inhaltlichen Freigabe final verwenden.

## SEO-Abhängigkeiten

Aufgabe 029 bleibt zuständig für:

- Metadata
- OpenGraph/Twitter
- Structured Data
- Canonicals
- Sitemap/Robots
- alte Keyword-Bezüge
- Bewertung unpassender Typen wie `AutoRepair`

Abhängigkeiten vor 029:

- Masterplan 039, Routingplan 030, Kontakt-/Legal-Prüfung 031, Seitenstruktur 041, Trust-Umsetzung 047/048 und deutsche Routenmigration 050 sind abgeschlossen und bilden die dokumentarische Grundlage.
- 029 soll die tatsächlich umgesetzten deutschen Gutachtenartenrouten und direkten permanenten Redirects aus 050 berücksichtigen.
- 029 soll die Ergebnisse aus 031 sowie die in 032 geplante und später freizugebende EN/RU-Umsetzung berücksichtigen.
- 029 soll den verbindlichen DE/EN/RU-Launch-Scope und das in 032 konkretisierte Qualitätsvorgehen berücksichtigen, insbesondere Hreflang und mehrsprachige Metadata.
- Falls 029 vor Abschluss einzelner Klärungen technisch vorbereitet wird, dürfen offene Punkte nicht erfunden, vorweggenommen oder übergangen werden.
- Sitemap, Robots, Canonicals und Hreflang dürfen nicht ohne geklärte Seiten-, Routen- und Sprachentscheidungen finalisiert werden.
- Alte Routen dürfen in 029 nicht blind gelöscht werden; die durch 050 umgesetzten deutschen Redirects bleiben bestehen, weitere Legacy-Behandlungen folgen dem Plan aus 030 und dem Cleanup aus 026.

## Routing- und Cleanup-Abhängigkeiten

Aufgabe 030 hat den Umgang mit alten Service-Routen geplant. Aufgabe 050 hat ausschließlich die drei deutschen Gutachtenarten-Detailrouten migriert und ihre bisherigen URLs direkt permanent weitergeleitet.

Aufgabe 026 Cleanup gehört danach, sobald mindestens diese Punkte geklärt sind:

- welche alten Routen bleiben, ersetzt oder anders behandelt werden
- welche SEO-/Metadata-/Structured-Data-Signale gebraucht werden
- wie die verbindlichen Sprachversionen DE/EN/RU technisch, inhaltlich und visuell launchfähig gemacht werden
- welche Kontakt-, Legal- und Trust-Inhalte für Version 1 gelten

Vorher darf Cleanup keine Routen, Inhalte, Komponenten, Assets oder SEO-Texte entfernen, nur weil sie aktuell alt wirken.

## Empfohlene Restreihenfolge

1. Aufgabe 032 abschließen: Übersetzungs-, Qualitäts-, Routing- und Layoutvorgehen für den verbindlichen DE/EN/RU-Launch freigeben.
2. Eine gesonderte EN/RU-Umsetzungsaufgabe erst nach ausdrücklicher Nutzerfreigabe anlegen und durchführen.
3. Aufgabe 029 durchführen: SEO, Metadata, OpenGraph, Structured Data, Sitemap/Robots, Canonicals und Hreflang auf Basis der freigegebenen dreisprachigen Seiten und Routen.
4. Aufgabe 026 durchführen: Code-, Content-, Asset- und SEO-Cleanup nach Verwendungsprüfung.
5. Aufgabe 033 durchführen: Launch-Quality-Check.
6. Aufgabe 034 durchführen: Deployment- und Launch-Gate.
7. Aufgabe 035 durchführen: Post-Launch-Kontrolle nach Livegang.
8. Spätere Roadmap-Themen separat behandeln: 022 Supabase, 023 KI-Voranalyse, 024 Kundenportal/Web-App.

## Offene Entscheidungen

- Ob das Formular zum Launch live ist.
- Umsetzung und menschliche Freigabe der geplanten EN/RU-Zielrouten einschließlich der drei Gutachtenarten-Detailseiten.
- Wie jede alte Service-Route behandelt wird.
- Finale SEO- und Cleanup-Behandlung der weiterhin bestehenden Route `/leistungen`.
- Finale Meta-Titel, Meta-Descriptions, OpenGraph-Texte und Structured-Data-Typen.
- Datenschutz-/Legal-Texte für Formular, Kontakt und mögliche mehrsprachige Versionen.
- Konkretes Einzugsgebiet über Berlin hinaus.
- Ob AGB für Version 1 aktiv benötigt und verlinkt werden.
