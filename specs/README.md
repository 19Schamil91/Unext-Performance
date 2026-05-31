# Specs README

Status: Strukturhinweis fuer Aufgabe 017.

## Arbeitsprinzip

Fuer dieses Projekt gilt weiterhin:

```text
SPEC -> PLAN -> CODE -> REVIEW -> DONE
```

Umsetzung erfolgt erst nach freigegebenen Specs, freigegebenen Work Plans und passender Workflow-Aufgabe.

Diese Specs bilden die freigegebene Basis fuer die naechsten Planungsaufgaben. Einzelne Specs koennen in spaeteren Aufgaben 018-026 gezielt erweitert oder praezisiert werden, bevor daraus Umsetzung entsteht.

## Dokumentenkarte

Die aktive Spec-Struktur ist nach folgender Reihenfolge aufgebaut:

```text
GLOBAL SPEC -> FUNCTIONAL MAP -> FEATURE SPECS -> TECHNICAL SPECS -> VISUAL RULES / SKILLS -> USER STORIES -> WORK PLANS
```

## Aktive Dateien und Ordner

```text
specs/
|-- 00-global-spec/
|-- 01-functional-map/
|-- 02-feature-specs/
|-- 03-technical-specs/
|-- 04-visual-rules/
|-- 05-user-stories/
|-- 06-work-plans/
|-- 07-open-questions/
`-- README.md
```

## Bedeutung der Bereiche

Aktive Spezifikationen liegen in den nummerierten Ordnern `00` bis `07`.

- `00-global-spec/global-spec.md`: globale fachliche Ausrichtung und verbindliche Leitplanken.
- `01-functional-map/functional-map.md`: Funktionslandkarte ohne technische Umsetzung.
- `02-feature-specs/`: aktive Feature Specs fuer KFZ-Gutachten, digitale Schadenaufnahme, KI-Voranalyse, Kontakt, SEO, FAQ und Mehrsprachigkeit.
- `03-technical-specs/`: technische Planungs-Specs, ohne Integration.
- `04-visual-rules/visual-rules.md`: visuelle und UX-Regeln, insbesondere Mobile First.
- `05-user-stories/user-stories.md`: fachliche User Stories.
- `06-work-plans/`: aktive Work Plans nach freigegebenen Specs.
- `07-open-questions/open-questions.md`: beantwortete und offene Fragen aus der Spezifikationsphase.

## Ersetzte Inhalte

Ersetzte alte Specs und alte Plaene wurden aus dem aktiven Specs-Bereich entfernt. Die Historie ist ueber Git und `workflow/replaced/` nachvollziehbar.

## Umsetzungsregel

Keine Code-, UI-, Supabase-, KI-, Routing- oder Cleanup-Aenderung nur auf Basis dieser README.

Vor Umsetzung braucht es:

- freigegebene fachliche Spec
- freigegebenen Work Plan
- passende Workflow-Aufgabe
- anschliessende Pruefung gemaess `AGENTS.md`
