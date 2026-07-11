# Aufgabe 044 - Gutachtenarten-Navigation und direkte Einstiege überarbeiten

## Ziel

Aufgabe 044 baut keine neue Gutachtenarten-Seite und überarbeitet `/leistungen` nicht als sichtbare Landingpage.

Stattdessen richtet 044 die deutsche Nutzerführung so aus, dass Besucher direkt über die Startseitenkarten und das Header-Dropdown zur passenden Gutachtenart gelangen.

## Kontext

Aufgabe 043 hat die Detailseite `/leistungen/unfallgutachten` abgeschlossen. Während der Planung von 044 wurde entschieden, die ursprünglich geplante sichtbare Gutachtenarten-Übersichtsseite unter `/leistungen` nicht zu bauen.

Begründung:

- Die Startseite stellt Unfallgutachten, Fahrzeugbewertung und Schadendokumentation bereits ausreichend vor.
- Eine zusätzliche Auswahlseite würde dieselben Inhalte wiederholen und einen unnötigen Zwischenschritt erzeugen.
- Besucher sollen direkt auf der Startseite oder über das Header-Dropdown zur gewünschten Gutachtenart gelangen.
- Die fachliche Vertiefung erfolgt auf den jeweiligen Unterseiten.

Für die sichtbare V1-Nutzerführung gilt künftig:

```text
Startseite
Gutachtenarten ▼
  Unfallgutachten
  Fahrzeugbewertung
  Schadendokumentation
Über uns
Kontakt
```

`Gutachtenarten` ist ausschließlich ein Dropdown-Trigger und kein Link auf `/leistungen`. Es wird kein Eintrag `Alle Gutachtenarten` ergänzt.

## Aktueller Stand

- Branch zum Start: `task-044-rework-appraisal-types-page`
- Aufgabe 043 liegt in `workflow/done/`.
- Aufgabe 044 liegt in `workflow/active/` und bleibt `in Arbeit`.
- Der verworfene uncommittete `/leistungen`-Entwurf wurde vor dem Zurücksetzen als Patch gesichert.
- Aufgabe 045 ist noch nicht gestartet.
- Aufgabe 046 ist noch nicht gestartet.
- Aufgabe 047 ist noch nicht gestartet.
- Aufgabe 032 liegt weiterhin in `workflow/todo/`.
- Aufgabe 029 liegt weiterhin in `workflow/todo/`.
- Aufgabe 026 liegt weiterhin in `workflow/todo/`.
- Aufgabe 033 liegt weiterhin in `workflow/todo/`.
- Aufgabe 034 liegt weiterhin in `workflow/todo/`.
- Aufgabe 035 liegt weiterhin in `workflow/todo/`.

## Inhaltliche Leitentscheidung

`/leistungen` ist nicht Bestandteil der sichtbaren V1-Nutzerführung.

Aufgabe 044 soll stattdessen:

- den deutschen Headerpunkt `Gutachtenarten` als reinen Dropdown-Trigger führen.
- sicherstellen, dass `Gutachtenarten` nicht auf `/leistungen` verlinkt.
- ausschließlich diese drei Dropdown-Einträge zeigen:
  - `Unfallgutachten`
  - `Fahrzeugbewertung`
  - `Schadendokumentation`
- keinen Eintrag `Alle Gutachtenarten` anzeigen.
- sichtbare deutsche Header-/Footer-Links auf die alte Seite `/leistungen` entfernen.
- die direkte Nutzerführung über Startseite und Detailseiten vorbereiten.
- die CTA-Logik der drei Startseitenkarten dokumentieren.
- `/leistungen` technisch unverändert lassen, bis die Route in 029/026 bewusst behandelt wird.

## Verbindliche Linklogik

### Unfallgutachten

Bereits vorhandene Unterseite:

```text
/leistungen/unfallgutachten
```

Header-Dropdown und Startseitenkarte dürfen direkt dorthin führen.

Bevorzugter Karten-CTA:

```text
Zum Unfallgutachten
```

### Fahrzeugbewertung

Die echte Unterseite entsteht in Aufgabe 045.

Bis 045 abgeschlossen ist:

- keine nicht vorhandene Route verlinken.
- bestehender Startseitenanker darf vorläufig erhalten bleiben.
- keine irreführende direkte Unterseiten-Verlinkung.
- Aufgabe 045 richtet anschließend Header-Dropdown und Startseitenkarte auf die echte Unterseite aus.
- Der aktuelle Karten-CTA bleibt bis dahin bewusst `Bewertung anfragen`, weil noch keine echte Unterseite existiert.
- Sobald die echte Unterseite in 045 existiert, soll der Karten-CTA auf `Zur Fahrzeugbewertung` geändert werden.

Später bevorzugter Karten-CTA:

```text
Zur Fahrzeugbewertung
```

### Schadendokumentation

Die echte Unterseite entsteht in Aufgabe 046.

Bis 046 abgeschlossen ist:

- keine nicht vorhandene Route verlinken.
- bestehender Startseitenanker darf vorläufig erhalten bleiben.
- keine irreführende direkte Unterseiten-Verlinkung.
- Aufgabe 046 richtet anschließend Header-Dropdown und Startseitenkarte auf die echte Unterseite aus.
- Der aktuelle Karten-CTA bleibt bis dahin bewusst `Dokumentation anfragen`, weil noch keine echte Unterseite existiert.
- Sobald die echte Unterseite in 046 existiert, soll der Karten-CTA auf `Zur Schadendokumentation` geändert werden.

Später bevorzugter Karten-CTA:

```text
Zur Schadendokumentation
```

## Umgang mit `/leistungen`

- `/leistungen` ist nicht Bestandteil der sichtbaren V1-Nutzerführung.
- `/leistungen` wird nicht im deutschen Header-Dropdown beworben.
- `/leistungen` wird nicht im deutschen Footer beworben.
- In 044 wird die Route weder gelöscht noch umgeleitet.
- Keine Redirect-, Canonical-, Robots-, Sitemap-, Hreflang- oder Metadata-Änderungen in 044.
- Die endgültige technische Behandlung der alten Route wird in 029 und 026 entschieden.
- Die alte Seite darf bis dahin nicht als fertige Gutachtenarten-Seite dargestellt werden.

## Zu prüfende Dateien/Routen

Im nächsten Umsetzungsschritt sind mindestens zu prüfen:

- deutsche Header-/Dropdown-Navigation
- deutsche Mobile-Navigation
- deutsche Footer-Links
- Startseitenkarten und deren CTA-/Linklogik
- vorhandene Übergangsanker für Fahrzeugbewertung und Schadendokumentation

Technisch zu prüfen:

```text
components/site-header.tsx
components/HeaderServicesMenu.tsx
components/HeaderMobileMenu.tsx
components/site-footer.tsx
components/sections/services-section.tsx
lib/translations/header-footer.ts
lib/translations/home-overrides.ts
```

## Scope-Grenzen

### 044 darf

- deutsche Header-/Dropdown-Navigation für Gutachtenarten anpassen.
- deutsche sichtbare Links auf `/leistungen` aus Header/Footer entfernen.
- direkte Verlinkung zum bestehenden Unfallgutachten einrichten oder prüfen.
- vorhandene Übergangslinks für Fahrzeugbewertung und Schadendokumentation prüfen.
- die Startseiten-CTA-Logik für die späteren Detailseiten dokumentieren.
- Mobile-, Tablet- und Desktop-Navigation prüfen.

### 044 darf nicht

- `/leistungen` als neue Seite umbauen.
- `/leistungen` löschen oder redirecten.
- neue Unterseiten erstellen.
- Fahrzeugbewertungs-Unterseite umsetzen.
- Schadendokumentations-Unterseite umsetzen.
- `/leistungen/unfallgutachten` erneut umbauen.
- EN/RU ändern.
- SEO-, Metadata- oder Structured-Data-Dateien ändern.
- Sitemap, Robots, Canonicals oder Hreflang ändern.
- alte Legacy-Routen löschen.
- Upload-, Supabase-, KI-, Admin- oder Portal-Funktionen ergänzen.
- Aufgabe 045 starten.
- Aufgabe 046 starten.
- Aufgabe 047 starten.
- Aufgabe 032 starten.
- Aufgabe 029 starten.
- Aufgabe 026 starten.
- Aufgabe 033 starten.
- Aufgabe 034 starten.
- Aufgabe 035 starten.

## Vorgehen

1. Verworfenen uncommitteten `/leistungen`-Entwurf als Patch sichern.
2. Verworfene uncommittete Website-Änderungen zurücksetzen.
3. Aufgabe 044 auf Navigation und direkte Einstiege ausrichten.
4. ROADMAP.md und CHANGELOG.md zur neuen Entscheidung prüfen und aktualisieren.
5. Danach noch keine Website-Code-Umsetzung ohne erneute Freigabe durchführen.
6. Später nach Freigabe deutsche Header-/Footer-/Startseiten-Linklogik umsetzen und prüfen.
7. Noch keinen Push ausführen und keinen PR erstellen.

## Akzeptanzkriterien

- 044 liegt in `workflow/active/`.
- 044 hat `Status: in Arbeit`.
- Der deutsche Headerpunkt `Gutachtenarten` ist als reiner Dropdown-Trigger dokumentiert.
- `Gutachtenarten` verlinkt nicht auf `/leistungen`.
- Es gibt keinen sichtbaren Eintrag `Alle Gutachtenarten`.
- Das Dropdown enthält ausschließlich:
  - Unfallgutachten
  - Fahrzeugbewertung
  - Schadendokumentation
- Unfallgutachten führt direkt auf `/leistungen/unfallgutachten`.
- Fahrzeugbewertung und Schadendokumentation verlinken nicht auf nicht vorhandene Routen.
- Die späteren direkten Links werden verbindlich in 045 und 046 eingerichtet.
- `/leistungen` wird nicht als neue Gutachtenarten-Seite umgesetzt.
- `/leistungen` wird nicht aus technischen Routing-/SEO-Gründen nebenbei gelöscht oder umgeleitet.
- Keine EN/RU-, SEO-, Metadata-, Structured-Data-, Redirect-, Upload-, Supabase-, KI-, Admin- oder Portal-Änderungen.
- Aufgaben 045 und 046 bleiben noch ungestartet.
- 032, 029, 026, 033, 034 und 035 bleiben ungestartet.

## Status

Status: in Arbeit
