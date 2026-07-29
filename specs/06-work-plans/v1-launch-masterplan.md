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
- `workflow/todo/030-plan-routing-redirects-old-service-routes.md`
- `workflow/todo/031-review-contact-legal-kfz-gutachten.md`
- `workflow/todo/032-review-i18n-launch-scope.md`
- `workflow/todo/033-launch-quality-check.md`
- `workflow/todo/034-deployment-launch-gate.md`
- `workflow/todo/035-post-launch-monitoring.md`
- aktuelle App-Routen unter `app/`

## Grundsatz für Version 1

Version 1 ist eine fokussierte KFZ-Gutachten-Webseite für Berlin.

Version 1 umfasst nach den freigegebenen Specs:

- starke Hauptseite für `KFZ-Gutachten Berlin`
- Gutachtenarten als sichtbare Erklärbereiche
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
| Startseite `/` bzw. `/de` | Ja | V1-relevant | Hauptseite für `KFZ-Gutachten Berlin` | Hero, Gutachtenarten, Ablauf, digitale Schadenaufnahme als Anfragevorbereitung, Vertrauen, FAQ, Kontakt-CTA | Trust-Satz aus Aufgabe 038 fehlt sichtbar noch | Telefon, WhatsApp, Anfrage-CTA; Formular nur bei Freigabe | 029 nach sichtbarer Inhaltsklärung und 030 bis 032 | Kein Redirect-Thema für Hauptseite bekannt | Kontaktdaten müssen stimmen | DE/EN/RU verbindlich; 032 konkretisiert Umsetzung und Prüfung | Altbezüge später über 026 prüfen | 040 empfohlen, 029 nach 030 bis 032 | Sichtbarer Trust-Satz muss vor Trust-SEO geklärt werden |
| Über-uns `/ueber-uns` | Ja | V1-relevant, aber noch zu prüfen | Vertrauen, Einordnung von UNEXT und Qualifikation | `Qualifikation & Anerkennung` und `Fortbildungen & Weiterbildung` fehlen sichtbar | Hoher Bedarf; Zertifikat/Urkunde nur nach Rechte-/Datenschutzfreigabe | Kontaktverweis sinnvoll, konkrete Umsetzung offen | 029 nur nach sichtbarer Inhaltsklärung und 030 bis 032 | Kein Redirect-Thema bekannt | Personen-/Nachweisdaten sensibel | DE/EN/RU verbindlich; 032 konkretisiert Umsetzung und Prüfung | Alte Inhalte später prüfen | 040 empfohlen, 031 bei rechtlichen Bezügen, 029 nach 030 bis 032 | Finale Texte und Zertifikatssichtbarkeit offen |
| Kontakt `/kontakt` | Ja | V1-relevant | Telefon, WhatsApp, E-Mail, Standort, ggf. Formular | Kontaktwege, Standort, Öffnungszeiten, Formularstatus | Trust nur sachlich, nicht Hauptzweck | Primär Telefon und WhatsApp, E-Mail ergänzend | 029 prüft Metadata, falls Seite indexierbar bleibt | Kein Redirect-Thema bekannt | 031 prüft Kontakt, Formular, Resend, Datenschutz | DE/EN/RU verbindlich; 032 konkretisiert Umsetzung und Prüfung | Alte Kontaktbezüge später prüfen | 031 | Formularstatus und Pflichttexte offen |
| Leistungsübersicht `/leistungen` | Ja | Entscheidung offen | Aktuelle oder historische Leistungsübersicht | Darf keine alten Nicht-Scope-Leistungen als aktiv darstellen | Nur KFZ-Gutachten-Trust, falls passend | CTA zu Kontakt/KFZ-Gutachten | 029 prüft alte SEO-Signale | 030 entscheidet Behandlung | 031 falls falsche Leistungsversprechen sichtbar sind | Nicht V1-relevant; lokalisierte Altbestände in 032/026 prüfen | 026 nach Routing-Entscheidung | 030, 029, 026 | Ob die Seite in V1 bleibt, umgebaut oder anders behandelt wird, ist offen |
| Unfallgutachten `/leistungen/unfallgutachten` | Ja | V1-relevant nach KFZ-Gutachten-Scope; finale Inhalts-/Routingprüfung offen | Erklärseite oder Route zu Unfallgutachten | Muss unter `KFZ-Gutachten` eingeordnet bleiben | Sachliche Qualifikation möglich, falls sichtbar | CTA zu Telefon/WhatsApp/Kontakt | 029 prüft Metadata und Structured Data nach 030 bis 032 | 030 prüft Route im alten Service-Kontext | 031 bei Kontakt-/Legal-Bezügen | DE/EN/RU verbindlich; 032 konkretisiert Umsetzung und Prüfung | 026 nach Entscheidung | 030, 031, 032, danach 029 | Finaler Seitenstatus und Inhalte vor Launch prüfen |
| Autovermietung `/leistungen/autovermietung` | Ja | Nicht als aktive V1-Leistung | Altbestand | Keine aktive Leistung in V1 | Kein Trust-Bezug | Keine aktiven Mietwagen-CTAs | Alte SEO-Ziele entfernen/prüfen | 030 entscheidet noindex, Redirect, 404/410 oder anderer Umgang | 031 falls rechtliche/Leistungsversprechen sichtbar | Nicht V1-relevant; lokalisierte Altbestände in 032/026 prüfen | 026 erst nach 030 | 030, 026 | Konkrete Behandlung offen |
| Autoservice/Werkstatt `/leistungen/autoservice` | Ja | Nicht als aktive V1-Leistung | Altbestand | Keine Werkstatt-/Service-Wirkung in V1 | Kein Trust-Bezug als Werkstatt | Keine Werkstatt-CTAs | Alte SEO-Ziele und `AutoRepair` prüfen | 030 entscheidet Behandlung | 031 falls falsche Leistungsversprechen sichtbar | Nicht V1-relevant; lokalisierte Altbestände in 032/026 prüfen | 026 erst nach 030 | 030, 029, 026 | Konkrete Behandlung offen |
| Detailing `/leistungen/detailing` | Ja | Nicht als aktive V1-Leistung | Altbestand | Kein Detailing als aktive Leistung | Kein Trust-Bezug | Keine Detailing-CTAs | Alte SEO-Ziele entfernen/prüfen | 030 entscheidet Behandlung | 031 falls Leistungsversprechen sichtbar | Nicht V1-relevant; lokalisierte Altbestände in 032/026 prüfen | 026 erst nach 030 | 030, 026 | Konkrete Behandlung offen |
| Zulassungsservice `/leistungen/zulassungsservice` | Ja | Nicht als aktive V1-Leistung | Altbestand | Kein Zulassungsservice als aktive Leistung | Kein Trust-Bezug | Keine Zulassungs-CTAs | Alte SEO-Ziele entfernen/prüfen | 030 entscheidet Behandlung | 031 falls Leistungsversprechen sichtbar | Nicht V1-relevant; lokalisierte Altbestände in 032/026 prüfen | 026 erst nach 030 | 030, 026 | Konkrete Behandlung offen |
| Abschleppdienst/Pannenhilfe `/leistungen/abschleppdienst-pannenhilfe` | Ja | Nicht als aktive V1-Leistung | Altbestand | Kein Abschleppdienst/Pannenhilfe als aktive Leistung | Kein Trust-Bezug | Keine Notdienst- oder Pannenhilfe-CTAs | Alte SEO-Ziele entfernen/prüfen | 030 entscheidet Behandlung | 031 wegen Notdienst-/Leistungsversprechen relevant | Nicht V1-relevant; lokalisierte Altbestände in 032/026 prüfen | 026 erst nach 030 | 030, 031, 026 | Konkrete Behandlung offen |
| Impressum `/impressum` | Ja | V1-relevant | Rechtliche Anbieterangaben | Rechtliche Angaben aus freigegebenen Daten | Keine werblichen Trust-Aussagen | Kontaktdaten korrekt | 029 prüft Indexierungs-/Metadata-Kontext, falls relevant | Kein Redirect-Thema bekannt | 031 prüft Inhalt | DE/EN/RU verbindlich; 032 konkretisiert Umsetzung und Prüfung | Kein Cleanup ohne Prüfung | 031 | Finale rechtliche Prüfung offen |
| Datenschutz `/datenschutz` | Ja | V1-relevant | Datenschutzinformationen | Muss zum Launch-Stand passen; kein Upload/Supabase/KI als live | Keine Trust-Aussagen | Kontakt-/Datenschutzkontakt prüfen | 029 prüft Indexierungs-/Metadata-Kontext, falls relevant | Kein Redirect-Thema bekannt | 031 prüft Inhalt | DE/EN/RU verbindlich; 032 konkretisiert Umsetzung und Prüfung | Kein Cleanup ohne Prüfung | 031 | Datenschutztexte für Formular/Sprachen offen |
| AGB `/agb` | Ja | V1-Entscheidung offen, falls verlinkt/relevant | Rechtlicher oder vertraglicher Kontext | Muss zum tatsächlichen Leistungsumfang passen | Keine werblichen Trust-Aussagen | Kontaktverweise prüfen | 029 prüft Indexierungs-/Metadata-Kontext, falls relevant | Kein Redirect-Thema bekannt | 031 prüft Inhalt | DE/EN/RU verbindlich; 032 konkretisiert Umsetzung und Prüfung | Kein Cleanup ohne Prüfung | 031 | Ob AGB für V1 benötigt und inhaltlich passend sind, ist offen |
| EN/RU lokalisierte Routen `/(localized)/[locale]/*` | Ja | Für V1 verbindlich | Mehrsprachige Inhalte | Müssen fachlich gleichwertig zu Deutsch sein und dürfen nicht mehr versprechen | Trust-Aussagen nur nach deutscher Freigabe und Übersetzungsprüfung | CTA-Texte je Sprache prüfen | Hreflang/Metadata erst nach inhaltlicher und technischer Sprachfreigabe | 032 konkretisiert lokalisierte Zielstruktur und Prüfung | Rechtliche Texte pro Sprache menschlich prüfen | 032 konkretisiert Umsetzung und Qualität | 026 erst nach Sprach- und Routenprüfung | 049, 032, spätere freizugebende Umsetzung, danach 029/031 | EN/RU-Inhalte, Routen und responsive Darstellung müssen vor Launch gleichwertig umgesetzt und geprüft werden |

## Alte Service-Seiten

Alte Service-Seiten sind vorhanden und dürfen für Version 1 nicht als aktive Leistungen stehen bleiben, solange sie nicht ausdrücklich neu freigegeben werden.

Betroffen sind aktuell:

- Autovermietung
- Autoservice/Werkstatt
- Detailing
- Zulassungsservice
- Abschleppdienst/Pannenhilfe

Aufgabe 030 muss je Route entscheiden:

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

Aufgabe 049 inventarisiert die vorhandenen Sprach-, Routen- und Nutzerweglücken. Aufgabe 032 konkretisiert anschließend das Übersetzungs-, Qualitäts- und Layoutvorgehen, entscheidet aber nicht mehr über den Sprachumfang. Die eigentliche EN/RU-Umsetzung erfolgt erst in einer später ausdrücklich freizugebenden Aufgabe. Hreflang, mehrsprachige Metadata sowie lokalisierte Legal- und Kontakttexte gelten bis zur fachlichen und technischen Prüfung nicht als launchfähig.

## Trust-/Qualifikationslücke

Aufgabe 038 hat die Trust-, Qualifikations-, Fortbildungs- und SEO-Grenzen in den Specs geregelt.

Sichtbar noch offen:

- Startseite: kurzer Vertrauenssatz `Geprüfter und anerkannter Sachverständiger für Schäden an Kraftfahrzeugen und Wertermittlung.`
- Über-uns-Seite: Bereich `Qualifikation & Anerkennung`
- Über-uns-Seite: Bereich `Fortbildungen & Weiterbildung`
- Entscheidung, ob ein Zertifikat/Nachweis nur vorbereitet oder nach Rechte-/Datenschutzfreigabe sichtbar eingebunden wird

Bewertung:

- Eine neue Folgeaufgabe 040 für sichtbare Trust-/Qualifikationsbereiche ist nötig.
- 029 sollte Trust-/Qualifikationsaussagen in Metadata, OpenGraph oder Structured Data erst verwenden, wenn diese Aussagen sichtbar auf der jeweiligen Seite stehen und in 040 umgesetzt oder ausdrücklich ausgeschlossen wurden.
- 029 kann ohne Trust-Bezug fortgesetzt werden, wäre dann aber nicht die empfohlene Reihenfolge für eine vollständige Version 1.

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

- Masterplan 039 muss die Seiten und Zuständigkeiten zusammenziehen.
- Die sichtbaren Trust-/Qualifikationsinhalte aus Folgeaufgabe 040 müssen geklärt sein, bevor 029 Trust-Aussagen in Metadata, OpenGraph oder Structured Data final verwendet.
- 029 soll Routing-/Redirect-Entscheidungen aus 030 berücksichtigen, insbesondere alte Service-Routen, Sitemap, Robots und Canonicals.
- 029 soll die Kontakt-/Legal-Prüfung aus 031 berücksichtigen, insbesondere Kontaktwege, Formularstatus, Datenschutz, Impressum, AGB und rechtliche Pflichttexte.
- 029 soll den verbindlichen DE/EN/RU-Launch-Scope und das in 032 konkretisierte Qualitätsvorgehen berücksichtigen, insbesondere Hreflang und mehrsprachige Metadata.
- Falls 029 vor Abschluss einzelner Klärungen technisch vorbereitet wird, dürfen offene Punkte nicht erfunden, vorweggenommen oder übergangen werden.
- Sitemap, Robots, Canonicals und Hreflang dürfen nicht ohne geklärte Seiten-, Routen- und Sprachentscheidungen finalisiert werden.
- Alte Routen dürfen in 029 nicht blind gelöscht werden; Redirects bleiben Aufgabe 030.

## Routing- und Cleanup-Abhängigkeiten

Aufgabe 030 entscheidet den Umgang mit alten Service-Routen.

Aufgabe 026 Cleanup gehört danach, sobald mindestens diese Punkte geklärt sind:

- welche alten Routen bleiben, ersetzt oder anders behandelt werden
- welche SEO-/Metadata-/Structured-Data-Signale gebraucht werden
- wie die verbindlichen Sprachversionen DE/EN/RU technisch, inhaltlich und visuell launchfähig gemacht werden
- welche Kontakt-, Legal- und Trust-Inhalte für Version 1 gelten

Vorher darf Cleanup keine Routen, Inhalte, Komponenten, Assets oder SEO-Texte entfernen, nur weil sie aktuell alt wirken.

## Empfohlene Restreihenfolge

1. Aufgabe 039 abschließen: V1-Launch-Masterplan prüfen und freigeben.
2. Neue Folgeaufgabe 040 anlegen: sichtbare Trust-/Qualifikationsbereiche auf Startseite und Über-uns-Seite planen und umsetzen.
3. Aufgabe 030 durchführen: Routing- und Redirect-Plan für alte Service-Routen.
4. Aufgabe 031 durchführen: Kontakt, Formular, Resend, Datenschutz, Impressum, AGB und Legal prüfen.
5. Aufgabe 032 durchführen: Übersetzungs-, Qualitäts- und Layoutvorgehen für den verbindlichen DE/EN/RU-Launch konkretisieren.
6. Aufgabe 029 fortsetzen: SEO, Metadata, OpenGraph, Structured Data, Sitemap/Robots, Canonicals und Hreflang auf Basis der geklärten Seiten, Routen, Inhalte und Sprachen.
7. Aufgabe 026 durchführen: Code-, Content-, Asset- und SEO-Cleanup nach Verwendungsprüfung.
8. Aufgabe 033 durchführen: Launch-Quality-Check.
9. Aufgabe 034 durchführen: Deployment- und Launch-Gate.
10. Aufgabe 035 durchführen: Post-Launch-Kontrolle nach Livegang.
11. Spätere Roadmap-Themen separat behandeln: 022 Supabase, 023 KI-Voranalyse, 024 Kundenportal/Web-App.

## Offene Entscheidungen

- Finale sichtbare Texte für den Trust-Satz und die Über-uns-Bereiche.
- Ob Zertifikat/Urkunde sichtbar eingebunden wird oder nur intern bleibt.
- Ob das Formular zum Launch live ist.
- Konkrete EN/RU-Zielrouten, Übersetzungsfreigabe, menschliche Prüfung und responsive Qualitätsabnahme.
- Wie jede alte Service-Route behandelt wird.
- Ob `/leistungen` und `/leistungen/unfallgutachten` als eigene V1-Seiten bleiben oder anders eingeordnet werden.
- Finale Meta-Titel, Meta-Descriptions, OpenGraph-Texte und Structured-Data-Typen.
- Datenschutz-/Legal-Texte für Formular, Kontakt und mögliche mehrsprachige Versionen.
- Konkretes Einzugsgebiet über Berlin hinaus.
- Ob AGB für Version 1 aktiv benötigt und verlinkt werden.
