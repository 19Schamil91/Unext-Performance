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

Status: in Arbeit

Aufgabe 039 erstellt vor der weiteren SEO-Umsetzung einen zentralen V1-Launch-Masterplan. Dieser Masterplan bündelt Seiten, Inhalte, Trust-/Qualifikationsbedarf, SEO, Routing, Legal, i18n, Cleanup und die empfohlene Restreihenfolge.

Aufgabe 029 bleibt bis zum Abschluss von 039 pausiert. Falls der Masterplan die sichtbare Trust-/Qualifikationslücke bestätigt, soll vor 029 eine Folgeaufgabe für die sichtbare Umsetzung auf Startseite und Über-uns-Seite eingeordnet werden.

### 8. Sichtbare Trust- und Qualifikationsumsetzung

Status: geplant nach 039

Der aktuelle Masterplan sieht eine Folgeaufgabe 040 für die sichtbare Umsetzung des Trust-Satzes und der Über-uns-Bereiche `Qualifikation & Anerkennung` sowie `Fortbildungen & Weiterbildung` vor. Die Aufgabe wird nach Freigabe von 039 angelegt.

Erst danach sollen Trust-/Qualifikationsaussagen in SEO, Metadata, OpenGraph oder Structured Data verwendet werden.

### 9. Routing, Kontakt/Legal und i18n-Klärung

Status: geplant

Vor der finalen SEO-/Metadata-/Structured-Data-Umsetzung müssen Aufgabe 030, Aufgabe 031 und Aufgabe 032 die notwendigen Launch-Entscheidungen klären: alte Service-Routen und Redirects, Kontaktwege, Formularstatus, Datenschutz, Impressum, AGB, Legal-Texte und Deutsch/EN/RU-Launch-Scope.

### 10. SEO, Metadata und Structured Data

Status: geplant

Aufgabe 029 folgt nach Aufgabe 039, nach der sichtbaren Trust-/Qualifikationsumsetzung sowie nach den Klärungen aus 030, 031 und 032. Die SEO-/Metadata-/Structured-Data-Arbeit muss die im Masterplan festgelegten Seiten, Routen, Inhalte, Kontakt-/Legal-Entscheidungen und Sprachen beachten.

### 11. Cleanup und Launch-Schritte

Status: geplant

Nach 029 folgt Aufgabe 026 für Code-, Content-, Asset- und SEO-Cleanup nach Verwendungsprüfung. Danach folgen Aufgabe 033 Launch-Quality-Check, Aufgabe 034 Deployment- und Launch-Gate und Aufgabe 035 Post-Launch-Monitoring.

### 12. Spätere Ausbaustufen

Status: geplant für später

Spätere Erweiterungen sind Supabase, KI-Voranalyse und ein Kundenportal beziehungsweise eine Web-App. Diese Themen bleiben geplant und werden erst nach eigenen Specs und eigener Freigabe umgesetzt.

## Verhältnis zum Workflow

Die Roadmap zeigt die Phasen. Der konkrete nächste Arbeitsschritt wird immer über `workflow/active/` und `workflow/todo/` gesteuert.
