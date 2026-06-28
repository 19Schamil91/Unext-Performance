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

Status: aktiv

Aufgabe 037 verbessert die Orientierung für Agenten, Nutzer und Reviewende. Dazu gehören `AGENTS.md`, `ROADMAP.md`, `CHANGELOG.md`, `PROJECT_STRUCTURE.md` und ein lokaler Typografie-/Zeilenumbruch- und Textlayout-Skill.

### 7. SEO, Metadata und Structured Data

Status: geplant

Aufgabe 029 bleibt pausiert, bis die vorbereitenden Trust- und Organisationsaufgaben abgeschlossen sind. Danach kann die SEO-/Metadata-/Structured-Data-Arbeit auf Basis der freigegebenen Specs fortgesetzt werden.

### 8. Weitere Launch-Vorbereitung

Status: geplant

Geplante Launch-Themen sind Routing und Redirects, Kontakt- und Legal-Prüfung, i18n-Launch-Scope, Launch-Qualitätscheck, Deployment-Gate und Post-Launch-Monitoring.

### 9. Spätere Ausbaustufen

Status: geplant für später

Spätere Erweiterungen sind Supabase, KI-Voranalyse und ein Kundenportal beziehungsweise eine Web-App. Diese Themen bleiben geplant und werden erst nach eigenen Specs und eigener Freigabe umgesetzt.

## Verhältnis zum Workflow

Die Roadmap zeigt die Phasen. Der konkrete nächste Arbeitsschritt wird immer über `workflow/active/` und `workflow/todo/` gesteuert.