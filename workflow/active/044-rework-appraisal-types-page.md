# Aufgabe 044 - Gutachtenarten-Seite hochwertig überarbeiten

## Ziel

Die bestehende deutsche Seite `/leistungen` soll geprüft, inventarisiert und später zu einer hochwertigen V1-Seite für Gutachtenarten umgebaut werden.

Im Startschritt wird noch keine Website-Umsetzung vorgenommen. Diese Aufgabe wird zunächst angelegt, gestartet und die bestehende Route wird inventarisiert.

## Kontext

Aufgabe 043 hat die Unterseite `/leistungen/unfallgutachten` abgeschlossen und als starke Detailseite für die priorisierte Leistung Unfallgutachten ausgerichtet.

Aufgabe 044 folgt aus der in Aufgabe 041 festgelegten V1-Seitenstruktur:

```text
Startseite -> Unfallgutachten -> Gutachtenarten / KFZ-Gutachten / Weitere Gutachten -> Über uns -> Kontakt
```

Die Navigation zeigt bereits `Gutachtenarten`, verweist technisch aber auf `/leistungen`. Diese Route enthält noch alte Service-Logik und mehrere frühere Fahrzeugleistungen. In 044 soll geklärt und später korrigiert werden, dass `/leistungen` als klare Gutachtenarten-Übersicht funktioniert.

Geplante Reihenfolge:

```text
044: /leistungen zu Gutachtenarten-Seite umbauen
045: Fahrzeugbewertung-Unterseite hochwertig ausbauen
046: Schadendokumentation-Unterseite hochwertig ausbauen
047: Über-uns-Seite Trust / Qualifikation / Zertifikat verstärken
032: i18n Launch Scope
029: SEO / Metadata / Structured Data
026: Cleanup alter Legacy-Seiten
033: Launch Quality Check
034: Deployment Launch Gate
035: Post-Launch Monitoring
```

Spätere Ausbaustufen bleiben:

```text
022: Supabase Damage Upload
023: KI-Voranalyse
024: Customer Portal/Web-App später
```

Nicht gestartet werden in dieser Aufgabe: 032, 029, 026, 033, 034, 035 sowie die späteren Ausbaustufen 022, 023 und 024.

## Aktueller Stand

- Branch zum Start: `task-044-rework-appraisal-types-page`
- Ausgangspunkt: aktueller `main` nach abgeschlossenem Merge von Aufgabe 043.
- Aufgabe 043 liegt in `workflow/done/`.
- `workflow/active/` enthält beim Start nur `.gitkeep`.
- Aufgabe 032 liegt weiterhin in `workflow/todo/`.
- Aufgabe 029 liegt weiterhin in `workflow/todo/`.
- Aufgabe 026 liegt weiterhin in `workflow/todo/`.
- Es wird im Startschritt keine Website-Code-Umsetzung vorgenommen.

## Inhaltliche Leitentscheidung

`/leistungen` soll später nicht mehr als alte Service-Übersicht wirken, sondern als kompakte und hochwertige Übersicht der V1-Gutachtenarten.

Die Seite soll später diese drei Gutachtenarten klar darstellen:

- Unfallgutachten
- Fahrzeugbewertung
- Schadendokumentation

Die Seite soll:

- Besuchern schnell erklären, welche Gutachtenart zu welchem Anliegen passt.
- die Route `/leistungen` als Ziel von `Gutachtenarten` nachvollziehbar machen.
- alte Service-Bezüge wie Autovermietung, Werkstatt, Detailing, Zulassung, Abschlepp- oder Pannenhilfe entfernen, soweit sie auf `/leistungen` sichtbar sind.
- klar zur passenden Detailseite oder Kontaktaufnahme führen, soweit vorhandene Routen und Kontaktwege freigegeben sind.
- kompakt bleiben und nicht als überladene Fachtext-Seite aufgebaut werden.

Fachliche Folgeentscheidung:

- Die Frage, ob Fahrzeugbewertung und Schadendokumentation eigene Unterseiten bekommen, ist entschieden.
- Es gibt keinen separaten Entscheidungs-Task dafür.
- Fahrzeugbewertung und Schadendokumentation werden nach 044 als eigene Unterseiten in 045 und 046 hochwertig ausgebaut.
- 044 bereitet diese beiden Gutachtenarten inhaltlich und navigationslogisch vor, erstellt aber keine neuen Unterseiten und keine neuen Routen.
- Unfallgutachten verlinkt auf die bereits überarbeitete Seite `/leistungen/unfallgutachten`.
- Fahrzeugbewertung und Schadendokumentation dürfen in 044 nicht auf nicht vorhandene Detailseiten zeigen.
- Solange die Unterseiten noch nicht existieren, dürfen die Karten vorläufig auf Abschnitte innerhalb `/leistungen` oder auf Kontakt/Anfrage führen.
- Die Links auf echte Unterseiten werden später in 045 und 046 angepasst.

Metadata-Grenze:

- `servicesPage.title` und `servicesPage.description` können Metadata indirekt berühren.
- Sichtbare deutsche Textänderungen in 044 dürfen erfolgen, auch wenn sie diese gemeinsame Textquelle betreffen.
- Mögliche indirekte Metadata-Auswirkungen müssen vor der Umsetzung bewusst geprüft und im Abschluss dokumentiert werden.
- 044 wird dadurch keine SEO-/Metadata-Aufgabe; finale SEO-, Metadata-, Structured-Data-, Sitemap-, Robots-, Canonical- und Hreflang-Arbeit bleibt bei 029.

## Zu prüfende Dateien/Routen

Im Inventurschritt sind mindestens zu prüfen:

- Welche Datei rendert `/leistungen`?
- Welche Komponenten werden dort genutzt?
- Welche Übersetzungs- oder Content-Dateien liefern sichtbare Texte?
- Welche Bilder und Alt-Texte werden auf der Seite genutzt?
- Welche CTAs sind vorhanden?
- Wie ist die Navigation aktuell mit `/leistungen` verbunden?
- Welche alten Servicebegriffe oder alten Leistungsbezüge sind sichtbar?
- Ob die Seite sprachlich und visuell zur neuen Startseite und zur Unfallgutachten-Unterseite passt.

Technisch zu prüfen:

```text
app/
components/
lib/
```

## Scope-Grenzen

### 044 darf

- `/leistungen` prüfen und später überarbeiten.
- deutsche sichtbare Texte für `/leistungen` anpassen.
- alte Service-Logik auf `/leistungen` entfernen.
- Gutachtenarten klar darstellen.
- Navigation/Gutachtenarten-Logik prüfen.
- mobile/desktop Typografie prüfen.
- vorhandene Bilder prüfen.

### 044 darf nicht

- `/leistungen/unfallgutachten` erneut umbauen.
- neue Routen erstellen.
- Redirects einbauen.
- alte Legacy-Routen löschen.
- EN/RU-Texte ändern.
- SEO-/Metadata-/Structured-Data-Dateien ändern.
- Upload-, Supabase-, KI-, Admin- oder Portal-Funktionen ergänzen.
- Upload, Supabase, KI, Admin oder Portal als live darstellen.
- Unterseiten für Fahrzeugbewertung oder Schadendokumentation erstellen.
- Aufgabe 045 starten oder eine Fahrzeugbewertung-Unterseite umsetzen.
- Aufgabe 046 starten oder eine Schadendokumentation-Unterseite umsetzen.
- Aufgabe 047 starten oder die Über-uns-Seite erneut umbauen.
- Aufgabe 032 starten.
- Aufgabe 029 starten.
- Aufgabe 026 starten.
- Aufgabe 033 starten.
- Aufgabe 034 starten.
- Aufgabe 035 starten.

## Vorgehen

1. Diese Task-Datei in `workflow/active/` anlegen und Status auf `in Arbeit` setzen.
2. Start-Commit nur für den Workflow-Start erstellen.
3. Bestehende Route `/leistungen` inventarisieren.
4. Betroffene Dateien, Komponenten, Texte, Bilder und CTAs dokumentieren.
5. Sichtbare Probleme, alte Service-Bezüge und schwache Stellen benennen.
6. Konkrete Empfehlung für die spätere Umsetzung innerhalb von 044 formulieren.
7. Noch keinen Push ausführen und keinen PR erstellen.

## Akzeptanzkriterien

- 044 liegt in `workflow/active/`.
- 044 hat `Status: in Arbeit`.
- Die bestehende Route `/leistungen` wurde inventarisiert.
- Betroffene Dateien/Komponenten wurden identifiziert.
- Es ist klar dokumentiert, welche Inhalte der Seite später überarbeitet werden müssen.
- Es ist klar dokumentiert, welche Änderungen nicht zu 044 gehören.
- 032 wurde nicht gestartet.
- 029 wurde nicht gestartet.
- 026 wurde nicht gestartet.
- Keine Code-Umsetzung im Startschritt.
- Keine EN/RU-, SEO-, Routen-, Redirect-, Upload-, Supabase-, KI-, Admin- oder Portal-Änderungen im Startschritt.
- Keine neuen Routen oder Unterseiten im Startschritt.
- Keine 045-, 046- oder 047-Dateien im Startschritt.
- 033, 034 und 035 bleiben als bestehende Launch-Aufgaben in `workflow/todo/`.
- 022, 023 und 024 bleiben spätere Ausbaustufen und werden in 044 nicht gestartet.

## Status

Status: in Arbeit
