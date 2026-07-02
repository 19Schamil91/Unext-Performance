# Aufgabe 030 - Routing- und Redirect-Plan für alte Service-Routen klären

## Ziel

Alte Service-Routen prüfen und entscheiden, ob sie behalten, weitergeleitet, noindex gesetzt, als 404 oder als 410 behandelt werden sollen.

## Kontext

Nach Aufgabe 027 existieren alte Service-Routen möglicherweise weiter. Diese dürfen nicht blind gelöscht werden, weil sonst SEO- und Nutzerführungsrisiken entstehen können.

## Vorgehen

- Alte DE-Service-Routen prüfen.
- Alte localized EN/RU-Service-Routen prüfen.
- Entscheiden, welche Routen Version 1 braucht.
- Redirect-/Noindex-/404-/410-Optionen bewerten.
- Empfehlung je Route dokumentieren.
- Keine Umsetzung ohne separate Freigabe.

## Planungsstand

- Routen-Inventur durchgeführt.
- Plan-Datei `specs/06-work-plans/routing-redirects-old-service-routes.md` erstellt.
- Keine Routing-, Redirect-, `noindex`-, 404-/410- oder SEO-Umsetzung durchgeführt.
- Redirects, `noindex`, 404 und 410 bleiben spätere Umsetzungsschritte nach separater Freigabe.

## Akzeptanzkriterien

- Alle alten Service-Routen sind inventarisiert.
- Jede relevante Route hat eine empfohlene Behandlung.
- SEO-Risiken sind dokumentiert.
- EN/RU-Auswirkungen sind berücksichtigt.
- Es wurde nichts gelöscht.
- Es wurden keine Redirects umgesetzt.
- Es wurde kein Code geändert, falls diese Task nur Planung bleibt.

## Status

Status: in Arbeit
