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

Erst nach dem abgeschlossenen Routing-Plan aus 030, den Klärungen aus 031 und den weiteren deutschen Seitenentscheidungen sollen Trust-/Qualifikationsaussagen in SEO, Metadata, OpenGraph oder Structured Data verwendet werden. Aufgabe 032 bleibt danach für i18n zuständig.

### 9. Routing, Kontakt/Legal und deutsche Seitenklärung

Status: in Arbeit

Aufgabe 030 `Routing- und Redirect-Plan für alte Service-Routen`, Aufgabe 031 `Kontakt, Formular, Impressum, Datenschutz, AGB und Legal prüfen`, Aufgabe 041 `V1-Seitenstruktur und Routen-Scope vor i18n festlegen`, Aufgabe 042 `Startseite stärker auf Unfallgutachten ausrichten` und Aufgabe 043 `/leistungen/unfallgutachten` sind abgeschlossen.

Die geplante sichtbare Gutachtenarten-Übersichtsseite `/leistungen` wird nicht gebaut. Grund: Die Startseite stellt `Unfallgutachten`, `Fahrzeugbewertung` und `Schadendokumentation` bereits ausreichend vor; eine zusätzliche Übersichtsseite würde Inhalte wiederholen und einen unnötigen Zwischenschritt erzeugen.

Aufgabe 044 kümmert sich deshalb nicht mehr um einen sichtbaren Umbau von `/leistungen`, sondern um die deutsche Gutachtenarten-Navigation und direkte Einstiege: Startseitenkarten und Header-Dropdown führen Besucher direkt zur passenden Gutachtenart. `Gutachtenarten` ist ein Dropdown-Trigger, kein Link auf `/leistungen`.

Die technische Behandlung von `/leistungen` bleibt offen und wird später bewusst in Aufgabe 029 beziehungsweise Aufgabe 026 entschieden. In 044 wird `/leistungen` weder gelöscht noch umgeleitet und nicht als fertige Gutachtenarten-Seite dargestellt.

Die Folge-Reihenfolge lautet:

```text
044: Gutachtenarten-Navigation und direkte Einstiege
045: Fahrzeugbewertung-Unterseite
046: Schadendokumentation-Unterseite
047: Über-uns Trust / Qualifikation / Zertifikat
032: i18n Launch Scope
029: SEO / Metadata / Structured Data und Routing-Entscheidungen
026: Cleanup alter Legacy-Seiten
033: Launch Quality Check
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

Status: geplant

Aufgabe 029 bleibt weiterhin nach Aufgabe 032 eingeordnet. Die SEO-/Metadata-/Structured-Data-Arbeit muss den abgeschlossenen Routing-Plan aus Aufgabe 030, die abgeschlossene Kontakt-/Legal-Prüfung aus Aufgabe 031, die Seitenstruktur-Entscheidungen aus Aufgabe 041 sowie die noch zu klärenden deutschen Detailseiten und die offenen i18n-Entscheidungen beachten.

### 11. Cleanup und Launch-Schritte

Status: geplant

Aufgabe 026 Cleanup bleibt nach Aufgabe 029 beziehungsweise nach den geklärten Seiten-, Routen-, SEO- und i18n-Entscheidungen eingeordnet. Nach Aufgabe 044 folgen die deutschen Detailseiten 045 und 046, danach Aufgabe 047 für Über-uns / Trust / Qualifikation / Zertifikat. Anschließend bleiben 032, 029, 026, 033, 034 und 035 eingeordnet.

Die alte Route `/leistungen` wird nicht in 044 bereinigt. Ihre endgültige technische Behandlung, mögliche SEO-Einordnung und spätere Entfernung oder Umleitung bleiben den Aufgaben 029 und 026 vorbehalten. Aufgabe 022, Aufgabe 023 und Aufgabe 024 bleiben spätere Ausbaustufen.

### 12. Spätere Ausbaustufen

Status: geplant für später

Spätere Erweiterungen sind Supabase, KI-Voranalyse und ein Kundenportal beziehungsweise eine Web-App. Aufgabe 022, Aufgabe 023 und Aufgabe 024 bleiben spätere Ausbaustufen und werden erst nach eigenen Specs und eigener Freigabe umgesetzt.

## Verhältnis zum Workflow

Die Roadmap zeigt die Phasen. Der konkrete nächste Arbeitsschritt wird immer über `workflow/active/` und `workflow/todo/` gesteuert.
