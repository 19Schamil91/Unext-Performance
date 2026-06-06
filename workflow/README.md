# Workflow

Dieses Projekt arbeitet nach:

```text
SPEC -> PLAN -> CODE -> REVIEW -> DONE
```

Alle geplanten Aufgaben liegen in `workflow/todo/`.

Abgeschlossene Aufgaben liegen in `workflow/done/`.

Eine Aufgabe darf erst nach ausdruecklicher Freigabe nach `done/` verschoben werden.

Vor dem Abschluss immer fragen:

```text
Soll diese Aufgabe abgeschlossen und nach done verschoben werden?
```

## Task-Dateien

Groessere Aufgaben werden als eigene Task-Dateien in `workflow/todo/` dokumentiert.

Eine Task-Datei sollte mindestens enthalten:

- Ziel
- Kontext
- Vorgehen
- Akzeptanzkriterien
- Status

Erlaubte Statuswerte sind:

- `offen`
- `in Arbeit`
- `wartet auf Review`
- `wartet auf Freigabe`
- `abgeschlossen`

Kleine Rueckfragen, Spec-Pruefungen oder reine Abstimmungen muessen nicht automatisch eine eigene Task-Datei bekommen.

Neue Task-Dateien duerfen nur erstellt werden, wenn der Nutzer dies bestaetigt oder ausdruecklich beauftragt.

Wenn waehrend der Arbeit ein neues Problem oder eine neue Idee auffaellt, wird daraus nicht automatisch eine neue Aufgabe. Stattdessen soll der Punkt kurz genannt und gefragt werden, ob dafuer eine neue Task-Datei in `workflow/todo/` erstellt werden soll.

## Bestehende Aenderungen

Vor Commits muss geprueft werden, ob der Working Tree nur Aenderungen enthaelt, die zur aktuellen Aufgabe gehoeren.

Unerwartete oder fremde Aenderungen duerfen nicht unbeachtet mitcommitted werden.

Wenn unklar ist, ob eine Datei zur aktuellen Aufgabe gehoert, muss vor dem Commit nachgefragt werden.

## Standardablauf pro Arbeitspaket

1. Neues Arbeitspaket auf eigenem Branch starten.
2. Aenderungen durchfuehren.
3. Pruefen und passende Checks ausfuehren.
4. Einen oder mehrere sinnvolle Commits erstellen.
5. Wenn das Arbeitspaket PR-bereit ist: Branch pushen.
6. PR gegen `main` erstellen.
7. PR pruefen lassen und nur nach ausdruecklicher Freigabe mergen.
8. Lokal `main` aktualisieren.
9. Neuen Branch fuer das naechste Arbeitspaket erstellen.

Kein automatischer Merge ohne ausdruecklichen Auftrag.
