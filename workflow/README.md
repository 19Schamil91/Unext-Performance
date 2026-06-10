# Workflow

Dieses Projekt arbeitet nach:

```text
SPEC -> PLAN -> CODE -> REVIEW -> DONE
```

Geplante Aufgaben liegen in `workflow/todo/`.

Genau die aktuell bearbeitete Aufgabe liegt in `workflow/active/`.

Abgeschlossene Aufgaben liegen in `workflow/done/`.

Ersetzte oder historische Aufgaben liegen in `workflow/replaced/`.

Eine Aufgabe darf nur nach ausdrücklicher Freigabe von `todo/` nach `active/` verschoben werden.

Wenn eine Aufgabe nach `active/` verschoben wird, muss ihr Status auf `in Arbeit` gesetzt werden.

In `workflow/active/` darf immer höchstens eine aktive Aufgabe liegen, außer der Nutzer erlaubt ausdrücklich eine Ausnahme.

Eine Aufgabe darf erst nach Review und ausdrücklicher Freigabe von `active/` nach `done/` verschoben werden.

`workflow/replaced/` bleibt nur für ersetzte oder historische Aufgaben.

Vor dem Abschluss immer fragen:

```text
Soll diese Aufgabe abgeschlossen und nach done verschoben werden?
```

## Task-Dateien

Größere Aufgaben werden als eigene Task-Dateien in `workflow/todo/` dokumentiert und erst nach Freigabe nach `workflow/active/` verschoben.

Eine Task-Datei sollte mindestens enthalten:

- Ziel
- Kontext
- Vorgehen
- Akzeptanzkriterien
- Status

Jede neue Task-Datei in `workflow/todo/` oder `workflow/active/` muss einen Abschnitt `## Akzeptanzkriterien` enthalten.

Die Akzeptanzkriterien beschreiben prüfbar, wann die Aufgabe erfüllt ist.

Vor dem Verschieben einer Aufgabe von `todo/` nach `active/` muss geprüft werden, ob Akzeptanzkriterien vorhanden und ausreichend klar sind.

Falls sie fehlen oder zu unklar sind, müssen sie vor oder beim Start der Aufgabe ergänzt werden.

Vor dem Verschieben einer Aufgabe von `active/` nach `done/` muss gegen diese Akzeptanzkriterien geprüft werden.

Eine Aufgabe darf nur nach `done/`, wenn die Kriterien erfüllt sind oder offene Abweichungen ausdrücklich vom Nutzer freigegeben wurden.

Neue Akzeptanzkriterien dürfen den Scope einer Aufgabe nicht heimlich erweitern.

Wenn neue größere Themen entstehen, müssen sie als eigene spätere Task vorgeschlagen werden.

Bestehende Todo-Aufgaben müssen nicht sofort pauschal umgeschrieben werden.

Sie werden spätestens vor oder beim Start geprüft und bei Bedarf ergänzt.

Erlaubte Statuswerte sind:

- `offen`
- `in Arbeit`
- `wartet auf Review`
- `wartet auf Freigabe`
- `abgeschlossen`

Kleine Rückfragen, Spec-Prüfungen oder reine Abstimmungen müssen nicht automatisch eine eigene Task-Datei bekommen.

Neue Task-Dateien dürfen nur erstellt werden, wenn der Nutzer dies bestätigt oder ausdrücklich beauftragt.

Wenn während der Arbeit ein neues Problem oder eine neue Idee auffällt, wird daraus nicht automatisch eine neue Aufgabe. Stattdessen soll der Punkt kurz genannt und gefragt werden, ob dafür eine neue Task-Datei in `workflow/todo/` erstellt werden soll.

## Bestehende Änderungen

Vor Commits muss geprüft werden, ob der Working Tree nur Änderungen enthält, die zur aktuellen Aufgabe gehören.

Unerwartete oder fremde Änderungen dürfen nicht unbeachtet mitcommitted werden.

Wenn unklar ist, ob eine Datei zur aktuellen Aufgabe gehört, muss vor dem Commit nachgefragt werden.

## Standardablauf pro Arbeitspaket

1. Neues Arbeitspaket auf eigenem Branch starten.
2. Änderungen durchführen.
3. Prüfen und passende Checks ausführen.
4. Einen oder mehrere sinnvolle Commits erstellen.
5. Wenn das Arbeitspaket PR-bereit ist: Branch pushen.
6. PR bevorzugt direkt per GitHub CLI erstellen:
   `gh pr create --base main --head <aktueller-branch> --title "<konkreter PR-Titel>" --body-file <pr-body-datei>`
7. PR prüfen lassen und nur nach ausdrücklicher Freigabe mergen.
8. Lokal `main` aktualisieren.
9. Neuen Branch für das nächste Arbeitspaket erstellen.

Kein automatischer Merge ohne ausdrücklichen Auftrag.

Ein bloßer GitHub-Compare-Link reicht nicht als PR-Erstellung. `gh pr create --web` soll nicht verwendet werden.

## PR-Beschreibung

Beim Erstellen eines Pull Requests muss die Beschreibung konkret anhand des tatsächlichen Diffs ausgefüllt werden.

Das PR-Template dient nur als Struktur. Hinweise, Platzhalter, Checkboxen oder Auswahlpunkte dürfen nicht unverändert stehen bleiben.

Die PR-Beschreibung muss kurz und reviewfähig enthalten:

- konkrete Zusammenfassung des Arbeitspakets
- zugehörige Aufgabe oder Spec
- konkret geänderte Dateien und Bereiche
- ausgeführte Checks mit Ergebnis oder nachvollziehbare Begründung, warum Checks nicht erforderlich waren
- konkrete Risiken oder Hinweise
- offene Punkte nur, wenn es wirklich welche gibt; sonst `None` oder `Keine offenen Punkte`

## Branch-Handoff nach Push

Nach einem erfolgreichen Push darf nicht direkt mit einer neuen Aufgabe weitergearbeitet werden.

Vor jeder weiteren Dateiänderung, jedem Commit und jedem Push muss zuerst gefragt werden, ob der PR bereits gemerged wurde.

Wenn der PR gemerged wurde:

1. `git status`
2. auf `main` wechseln
3. `git pull origin main`
4. neuen Branch für die nächste Aufgabe erstellen
5. erst danach Änderungen machen

Wenn der PR noch nicht gemerged wurde:

- auf demselben Branch nur Änderungen machen, die genau zu diesem PR gehören
- keine neue Aufgabe auf diesem Branch beginnen

Diese Regel ist verpflichtend für jede neue Aufgabe nach einem Push.
