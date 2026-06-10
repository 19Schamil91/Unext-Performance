# Aufgabe 026 - Code-Cleanup nach Rework

## Ziel

Code-Cleanup erst nach Rework, Content-Cleanup und Verwendungspruefung durchfuehren.

## Kontext

Alte Komponenten, Imports, Datenarrays, Routen, SEO-Texte, Assets und Uebersetzungen duerfen nicht blind geloescht werden. Cleanup erfolgt erst, wenn die neue KFZ-Gutachten-Webseite umgesetzt und geprueft ist.

## Vorgehen

- Ergebnisse des Content-Cleanup-Plans pruefen.
- Nutzung alter Komponenten, Routen, Imports, Icons, Datenarrays, FAQ-Inhalte, SEO-Texte, Assets und Uebersetzungen pruefen.
- Nur nachgewiesen ungenutzte oder ersetzte Inhalte entfernen.
- Build, Typecheck und Lint nach Code-Aenderungen ausfuehren.
- Risiken und Rollback-Moeglichkeiten dokumentieren.

## Akzeptanzkriterien

- Nichts wurde ohne Verwendungspruefung geloescht.
- Der Cleanup folgt freigegebenen Specs und Rework-Plan.
- `npm run lint`, `npx tsc --noEmit` und `npm run build` werden nach Code-Aenderungen ausgefuehrt.
- Der Build bleibt erfolgreich oder Abweichungen werden klar dokumentiert.

## Status

Status: offen
