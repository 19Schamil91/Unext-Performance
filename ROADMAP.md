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

Aufgabe 040 wurde abgeschlossen. Der nächste logische Schritt ist Aufgabe 030 `Routing- und Redirect-Plan für alte Service-Routen`. Aufgabe 029 bleibt weiterhin nach 030, 031 und 032 eingeordnet.

### 8. Sichtbare Trust- und Qualifikationsumsetzung

Status: abgeschlossen

Aufgabe 040 hat die sichtbare Umsetzung des Trust-Satzes auf der Startseite und der deutschen Über-uns-Bereiche `Qualifikation & Anerkennung` sowie `Fortbildungen & Weiterbildung` abgeschlossen. Die deutsche Über-uns-Seite ist damit auf den V1-Scope KFZ-Gutachten, Vertrauen, Qualifikation, Anerkennung und Fortbildungen ausgerichtet.

Erst nach den weiteren Klärungen aus 030, 031 und 032 sollen Trust-/Qualifikationsaussagen in SEO, Metadata, OpenGraph oder Structured Data verwendet werden.

### 9. Routing, Kontakt/Legal und i18n-Klärung

Status: geplant

Der nächste logische Schritt ist Aufgabe 030 `Routing- und Redirect-Plan für alte Service-Routen`. Danach müssen Aufgabe 031 und Aufgabe 032 die notwendigen Launch-Entscheidungen klären: alte Service-Routen und Redirects, Kontaktwege, Formularstatus, Datenschutz, Impressum, AGB, Legal-Texte und Deutsch/EN/RU-Launch-Scope.

### 10. SEO, Metadata und Structured Data

Status: geplant

Aufgabe 029 bleibt weiterhin nach Aufgabe 030, Aufgabe 031 und Aufgabe 032 eingeordnet. Die SEO-/Metadata-/Structured-Data-Arbeit muss die im Masterplan festgelegten Seiten, Routen, Inhalte, Kontakt-/Legal-Entscheidungen und Sprachen beachten.

### 11. Cleanup und Launch-Schritte

Status: geplant

Aufgabe 026 Cleanup bleibt nach Aufgabe 029 beziehungsweise nach den geklärten Seiten-, Routen- und SEO-Entscheidungen eingeordnet. Danach folgen Aufgabe 033 Launch-Quality-Check, Aufgabe 034 Deployment- und Launch-Gate und Aufgabe 035 Post-Launch-Monitoring.

### 12. Spätere Ausbaustufen

Status: geplant für später

Spätere Erweiterungen sind Supabase, KI-Voranalyse und ein Kundenportal beziehungsweise eine Web-App. Aufgabe 022, Aufgabe 023 und Aufgabe 024 bleiben spätere Ausbaustufen und werden erst nach eigenen Specs und eigener Freigabe umgesetzt.

## Verhältnis zum Workflow

Die Roadmap zeigt die Phasen. Der konkrete nächste Arbeitsschritt wird immer über `workflow/active/` und `workflow/todo/` gesteuert.
