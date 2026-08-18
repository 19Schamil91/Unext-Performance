# ROADMAP.md

Diese Roadmap beschreibt den großen Projektverlauf von UNEXT. Sie ersetzt nicht den Workflow in `workflow/`, sondern ordnet die dort geplanten und erledigten Aufgaben in Projektphasen ein.

## Projektziel

UNEXT wird als professionelle KFZ-Gutachter-Webseite für Berlin aufgebaut. Die Website soll die Leistung KFZ-Gutachten klar, vertrauenswürdig, mobil nutzbar und launchfähig darstellen.

## Phasen

### 1. Projekt- und Workflow-Grundlage

Status: abgeschlossen

In den frühen Aufgaben wurden `AGENTS.md`, die Workflow-Struktur und die Spec-Struktur angelegt. Damit ist die Arbeitsweise `SPEC -> PLAN -> CODE -> REVIEW -> DONE` dokumentiert und über `workflow/` nachvollziehbar.

### 2. Neuausrichtung auf KFZ-Gutachten

Status: abgeschlossen

Die fachliche Ausrichtung wurde von einem breiteren alten Leistungsumfang auf KFZ-Gutachten fokussiert. Die dafür relevanten Specs und Fragen wurden in den erledigten Aufgaben zur KFZ-Neuausrichtung dokumentiert.

### 3. Homepage-Rework

Status: abgeschlossen

Die Startseite wurde auf die neue KFZ-Gutachten-Ausrichtung vorbereitet und umgesetzt. Nicht mehr passende alte Inhalte wurden als späterer Cleanup-Bereich geplant.

### 4. Launch-Roadmap und Qualitätsplanung

Status: abgeschlossen

Mit Aufgabe 028 wurde eine Version-1-Launch-Roadmap erstellt. Weitere Launch-Aufgaben liegen im Workflow, unter anderem Routing, Kontakt/Legal, i18n, Qualitätscheck, Deployment und Monitoring.

### 5. Trust, Qualifikation und Zertifizierung

Status: abgeschlossen

Aufgabe 036 hat die belegbare Anerkennung als Sachverständiger fachlich vorsichtig eingeordnet. Aufgabe 038 hat die betroffenen Specs für Trust-, Zertifizierungs-, Fortbildungs- und SEO-Grenzen aktualisiert.

### 6. Projektorganisation

Status: abgeschlossen

Aufgabe 037 hat die Orientierung für Agenten, Nutzer und Reviewende verbessert. Dazu gehören `AGENTS.md`, `ROADMAP.md`, `CHANGELOG.md`, `PROJECT_STRUCTURE.md` und ein lokaler Typografie-/Zeilenumbruch- und Textlayout-Skill.

### 7. V1 Launch-Masterplan

Status: abgeschlossen

Aufgabe 039 hat vor der weiteren SEO-Umsetzung einen zentralen V1-Launch-Masterplan erstellt. Dieser Masterplan bündelt Seiten, Inhalte, Trust-/Qualifikationsbedarf, SEO, Routing, Legal, i18n, Cleanup und die empfohlene Restreihenfolge.

Aufgabe 040, Aufgabe 030, Aufgabe 031 und Aufgabe 041 wurden abgeschlossen. Aufgabe 041 legt vor i18n die V1-Seitenstruktur und den Routen-Scope fest. Aufgabe 042 hat die Startseite stärker auf `KFZ-Unfallgutachten Berlin` ausgerichtet und ist abgeschlossen. Hero, Gutachtenkarten, Header/Dropdown, CTA, Footer sowie Bild- und Performance-Optimierung wurden überarbeitet. Startseite und Über-uns-Seite wurden visuell und textlich besser getrennt.

### 8. Sichtbare Trust- und Qualifikationsumsetzung

Status: abgeschlossen

Aufgabe 040 hat die sichtbare Umsetzung des Trust-Satzes auf der Startseite und der deutschen Über-uns-Bereiche `Qualifikation & Anerkennung` sowie `Fortbildungen & Weiterbildung` abgeschlossen. Die deutsche Über-uns-Seite ist damit auf den V1-Scope KFZ-Gutachten, Vertrauen, Qualifikation, Anerkennung und Fortbildungen ausgerichtet.

Erst nach dem abgeschlossenen Routing-Plan aus 030, den Klärungen aus 031 und den weiteren deutschen Seitenentscheidungen sollen Trust-/Qualifikationsaussagen in SEO, Metadata, OpenGraph oder Structured Data verwendet werden. Aufgabe 032 hat das EN/RU-Übersetzungs-, Qualitäts- und Layoutvorgehen verbindlich konkretisiert.

### 9. Routing, Kontakt/Legal und deutsche Seitenklärung

Status: in Arbeit

Die folgenden Abschlussnotizen zu den Aufgaben 044 bis 046 dokumentieren den damaligen Stand vor der späteren Migration in Aufgabe 050.

Aufgabe 030 `Routing- und Redirect-Plan für alte Service-Routen`, Aufgabe 031 `Kontakt, Formular, Impressum, Datenschutz, AGB und Legal prüfen`, Aufgabe 041 `V1-Seitenstruktur und Routen-Scope vor i18n festlegen`, Aufgabe 042 `Startseite stärker auf Unfallgutachten ausrichten`, Aufgabe 043 `/leistungen/unfallgutachten` und Aufgabe 044 `Gutachtenarten-Navigation und direkte Einstiege` sind abgeschlossen.

Die geplante sichtbare Gutachtenarten-Übersichtsseite `/leistungen` wurde in 044 bewusst nicht gebaut. Grund: Die Startseite stellt `Unfallgutachten`, `Fahrzeugbewertung` und `Schadendokumentation` bereits ausreichend vor; eine zusätzliche Übersichtsseite würde Inhalte wiederholen und einen unnötigen Zwischenschritt erzeugen.

Aufgabe 044 hat stattdessen die deutsche Gutachtenarten-Navigation und direkte Einstiege abgeschlossen:

- `Gutachtenarten` ist im deutschen Header ein reiner Dropdown-Trigger und kein Link auf `/leistungen`.
- Es gibt keinen Eintrag `Alle Gutachtenarten`.
- Das Dropdown enthält `Unfallgutachten`, `Fahrzeugbewertung` und `Schadendokumentation`.
- `Unfallgutachten` führt auf die bestehende Detailseite `/leistungen/unfallgutachten`.
- `Fahrzeugbewertung` und `Schadendokumentation` führen auf ihre in 045 und 046 umgesetzten deutschen Unterseiten.
- Die drei Startseitenkarten haben klare Hauptaktionen und kompakte `Anrufen`-Buttons.
- Das mobile Menü wurde mit `SheetTitle` und `SheetDescription` zugänglicher gemacht.

Aufgabe 045 ist abgeschlossen. Die deutsche Fahrzeugbewertungs-Unterseite wurde unter `/leistungen/fahrzeugbewertung` umgesetzt. Deutsche Header-, Mobile- und Startseitenlinks führen auf die neue Route. Die Seite ist kompakt, mobile-first und fachlich vom Unfallgutachten abgegrenzt, verwendet das gemeinsame `ServicePageLayout` und konfiguriert das Anfrageformular seitenbezogen. Es wurden keine EN/RU-, SEO-, Metadata-, Routing- oder Asset-Nebenbaustellen eröffnet. Die indirekte Service- und `BreadcrumbList`-Ausgabe bleibt für Aufgabe 029 dokumentiert; Aufgabe 048 und Aufgabe 049 bleiben spätere offene Todo-Aufgaben.

Aufgabe 046 ist nach bestandener Akzeptanzprüfung abgeschlossen. Die eigenständige deutsche Schadendokumentations-Unterseite wurde unter `/leistungen/schadendokumentation` umgesetzt; deutscher Desktop- und Mobile-Link sowie die deutsche Startseitenkarte führen auf diese Route. Das vorhandene optimierte WebP, `ServicePageLayout` und das gemeinsame Anfrageformular werden wiederverwendet, ohne eine neue allgemeine Formular-Prop einzuführen. EN/RU, direkte SEO-, Metadata- und Structured-Data-Dateien sowie die spätere Routingmigration blieben unverändert. Die indirekte Ausgabe von `Service` und `BreadcrumbList` ist für 046 akzeptiert und bleibt für Aufgabe 029 dokumentiert. Die spätere URL-Migration bleibt Aufgabe 050. Der bestätigte globale Formular-Semantik- und Autocomplete-Punkt ist als verbindlich zentral zu behebender Punkt in Aufgabe 033 aufgenommen.

Die technische Behandlung von `/leistungen` bleibt offen und wird in Aufgabe 050 gemeinsam mit der Gutachtenarten-Routenmigration geprüft und entschieden. In 044 wurde `/leistungen` weder gelöscht noch umgeleitet und nicht als fertige Gutachtenarten-Seite dargestellt.

Aufgabe 025 bleibt abgeschlossen und wird nicht wieder geöffnet. Die später erkannte Migration der drei deutschen Detailseiten von `/leistungen/...` auf voraussichtlich `/gutachtenarten/...` übernimmt Aufgabe 050. Die in 046 umgesetzte Route `/leistungen/schadendokumentation` bleibt bis dahin bewusst die technische Zwischenroute.

Aktueller Stand nach den abgeschlossenen Aufgaben 047 bis 050:

- 047 hat die deutsche Über-uns-Seite um bestätigte Qualifikation, Fortbildungen, Personenbezug und den externen DESAG-Nachweis ergänzt.
- 048 hat die deutschen Kernseiten auf Textkonsistenz, Typografie und responsive Darstellung geprüft und gezielt nachgeschärft.
- 049 hat die vollständigen DE/EN/RU-User-Journeys auditiert und die verbleibenden Launch-Blocker dokumentiert.
- 050 hat die drei deutschen Detailseiten nach `/gutachtenarten/unfallgutachten`, `/gutachtenarten/fahrzeugbewertung` und `/gutachtenarten/schadendokumentation` migriert. Die bisherigen deutschen `/leistungen/...`-Detailrouten leiten permanent und direkt weiter.
- `/leistungen` bleibt als eigenständige Übersichtsroute technisch bestehen und wurde in 050 nicht gelöscht, umgebaut oder umgeleitet.
- Aufgabe 032 ist abgeschlossen und hat das Übersetzungs-, Routing-, Qualitäts- und Responsive-Vorgehen für den verbindlichen gemeinsamen V1-Launch auf Deutsch, Englisch und Russisch festgelegt.
- Aufgabe 051 ist abgeschlossen. Die englischen und russischen V1-Kernwege, sechs lokalisierte Gutachtenartenrouten, kontexttreue Sprachwechsel sowie lokalisierte Navigation, Formulare und Fehlerzustände sind umgesetzt und geprüft. Die aktuellen Sprach- und Fachaussagen sind für diesen Projektstand mit den dokumentierten Nutzerakzeptanzen eingeordnet; die externe Rechtsprüfung bleibt offen.

Die Next-Image-Quality-Warnungen zu den Werten `88` und `74` blockieren Aufgabe 044 nicht. Sie bleiben als Performance-/Launch-QA-Punkt für Aufgabe 033 beziehungsweise einen passenden Config-/Cleanup-Schritt dokumentiert. In 044 wurde keine `next.config`-Änderung vorgenommen.

Die aktuelle Folge-Reihenfolge lautet:

```text
047: Über-uns-Seite Trust / Qualifikation / Zertifikat verstärken (abgeschlossen)
048: Deutsche Kernseiten auf Konsistenz, Typografie und Trust prüfen (abgeschlossen)
050: Gutachtenarten-URLs und bestehende Leistungsrouten migrieren (abgeschlossen)
049: V1-User-Stories und Nutzerwege vollständig prüfen (abgeschlossen)
032: DE/EN/RU-Übersetzungs-, Routing-, Qualitäts- und Layoutvorgehen konkretisieren (abgeschlossen)
051: EN/RU-V1-Kernseiten, Routen und Nutzerwege umsetzen (abgeschlossen)
029: SEO / Metadata / Structured Data
026: Cleanup alter Legacy-Seiten
033: Launch Quality Check einschließlich zentraler Formularsemantik und Autocomplete-Korrektur
034: Deployment Launch Gate
035: Post-Launch Monitoring
```

Spätere Ausbaustufen bleiben:

```text
022: Supabase Damage Upload
023: KI-Voranalyse
024: Customer Portal/Web-App
```

### 10. SEO, Metadata und Structured Data

Status: in Arbeit

Aufgabe 029 ist nach der abgeschlossenen EN/RU-Umsetzung der aktive Projektabschnitt. Die SEO-/Metadata-/Structured-Data-Arbeit muss den abgeschlossenen Routing-Plan aus Aufgabe 030, die abgeschlossene Kontakt-/Legal-Prüfung aus Aufgabe 031, die Seitenstruktur-Entscheidungen aus Aufgabe 041, die abgeschlossene Gutachtenarten-Routenmigration aus Aufgabe 050 sowie die in Aufgabe 032 abgeschlossene i18n-Umsetzungs- und Qualitätsplanung beachten.

Der V1-Sprachumfang ist verbindlich entschieden: Deutsch, Englisch und Russisch müssen gemeinsam launchfähig sein. Deutsch bildet die fachliche Referenz. Aufgabe 049 hat die früheren Sprach- und Nutzerweglücken inventarisiert, Aufgabe 032 hat die Umsetzung und Prüfung geplant, und Aufgabe 051 hat die EN/RU-Kernwege sowie die lokalisierten Gutachtenartenrouten umgesetzt und abgeschlossen. Die externe Rechtsprüfung und die nachfolgenden Launch-Gates bleiben offen.

### 11. Cleanup und Launch-Schritte

Status: geplant

Aufgabe 026 Cleanup bleibt nach Aufgabe 029 beziehungsweise nach den geklärten Seiten-, Routen-, SEO- und i18n-Entscheidungen eingeordnet. Die Aufgaben 032 sowie 047 bis 051 sind abgeschlossen. Nach dem dreisprachigen Meilenstein aus Aufgabe 051 ist Aufgabe 029 aktiv; danach bleiben 026, 033 einschließlich der zentralen Formularsemantik- und Autocomplete-Korrektur, 034 und 035 eingeordnet. Bis diese Arbeiten, die externe Rechtsprüfung und die weiteren Launch-Gates abgeschlossen und geprüft sind, ist die Website nicht launchbereit.

Die Route `/leistungen` wurde in Aufgabe 050 bewusst nicht gelöscht, umgebaut oder umgeleitet und bleibt technisch als eigenständige Übersicht bestehen. Aufgabe 029 prüft ihre endgültige SEO-, Indexierungs- und Canonical-Behandlung; Aufgabe 026 bleibt für den späteren, verwendungsgeprüften Cleanup zuständig. Aufgabe 022, Aufgabe 023 und Aufgabe 024 bleiben spätere Ausbaustufen.

### 12. Spätere Ausbaustufen

Status: geplant für später

Spätere Erweiterungen sind Supabase, KI-Voranalyse und ein Kundenportal beziehungsweise eine Web-App. Aufgabe 022, Aufgabe 023 und Aufgabe 024 bleiben spätere Ausbaustufen und werden erst nach eigenen Specs und eigener Freigabe umgesetzt.

## Verhältnis zum Workflow

Die Roadmap zeigt die Phasen. Der konkrete nächste Arbeitsschritt wird immer über `workflow/active/` und `workflow/todo/` gesteuert.
