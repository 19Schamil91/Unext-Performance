# Aufgabe 043 - Unfallgutachten-Unterseite hochwertig überarbeiten

## Ziel

Die bestehende deutsche Seite `/leistungen/unfallgutachten` soll geprüft, inventarisiert und anschließend hochwertig auf den neuen V1-Fokus `KFZ-Unfallgutachten Berlin` ausgerichtet werden.

Im Startschritt wird noch keine Website-Umsetzung vorgenommen. Diese Aufgabe wird zunächst angelegt, gestartet und die bestehende Route wird inventarisiert.

## Kontext

Aufgabe 042 hat die Startseite klarer auf `KFZ-Unfallgutachten Berlin` ausgerichtet.

Aufgabe 043 folgt aus der in Aufgabe 041 festgelegten V1-Seitenstruktur:

```text
Startseite -> Unfallgutachten -> Gutachtenarten / KFZ-Gutachten / Weitere Gutachten -> Über uns -> Kontakt
```

Die Route `/leistungen/unfallgutachten` bleibt technisch bestehen und soll sichtbar als starke Haupt-Unterseite für die priorisierte Leistung Unfallgutachten funktionieren.

Geplante Reihenfolge:

```text
043: Unfallgutachten-Unterseite hochwertig überarbeiten
044: /leistungen als Gutachtenarten-/Weitere-Gutachten-Seite klären/umbauen
032: i18n Launch Scope DE/EN/RU
029: SEO/Metadata/Structured Data
026: Cleanup alter Legacy-Seiten
```

Nicht gestartet werden in dieser Aufgabe: 032, 029 und 026.

## Aktueller Stand

- Branch zum Start: `task-043-rework-accident-appraisal-page`
- Ausgangspunkt: aktueller `main`
- `workflow/active/` enthält beim Start diese Aufgabe.
- Aufgabe 042 liegt in `workflow/done/`.
- Aufgabe 032 liegt weiterhin in `workflow/todo/`.
- Aufgabe 029 liegt weiterhin in `workflow/todo/`.
- Aufgabe 026 liegt weiterhin in `workflow/todo/`.
- Es wird im Startschritt keine Website-Code-Umsetzung vorgenommen.

## Inhaltliche Leitentscheidung

`/leistungen/unfallgutachten` soll später zur Startseite passen und die Hauptleistung aus Kundensicht vertiefen.

Die Seite soll:

- Besucher nach einem Unfall oder Fahrzeugschaden verständlich abholen.
- erklären, wann ein Unfallgutachten sinnvoll ist.
- erklären, was bei der Schadenaufnahme und Dokumentation geprüft wird.
- den Ablauf von erster Kontaktaufnahme bis weiterer Abstimmung verständlich machen.
- klar zu Telefon, WhatsApp, E-Mail oder Kontaktformular führen, soweit diese Kontaktwege freigegeben und vorhanden sind.
- als Detailseite zur Hauptleistung wirken, nicht als Kopie der Startseite.

Begriffslogik:

- `Unfallgutachten` ist die sichtbare Hauptleistung.
- `Schadengutachten` darf nur erklärend im Kontext verwendet werden und wird nicht als gleichwertige zweite Hauptleistung aufgebaut.
- `Schadendokumentation` ist kundenfreundlicher als allein `Beweissicherung`.
- `Beweissicherung` darf vorsichtig ergänzend verwendet werden, soll aber nicht als harte oder übertriebene Hauptaussage dominieren.
- `Fahrzeugbewertung` und `Wertgutachten` bleiben ergänzende Themen und dürfen nicht künstlich mit Unfallgutachten gleichgestellt werden.

## Zu prüfende Dateien/Routen

Im Inventurschritt sind mindestens zu prüfen:

- Welche Datei rendert `/leistungen/unfallgutachten`?
- Welche Komponenten werden dort genutzt?
- Welche Übersetzungs- oder Content-Dateien liefern sichtbare Texte?
- Welche Bilder und Alt-Texte werden auf der Seite genutzt?
- Welche CTAs sind vorhanden?
- Welche alten Begriffe oder alten Leistungsbezüge sind sichtbar?
- Ob die Seite sprachlich und visuell zur neuen Startseite aus Aufgabe 042 passt.

Technisch zu prüfen:

```text
app/
components/
lib/
```

## Scope-Grenzen

### 043 darf

- die deutsche Seite `/leistungen/unfallgutachten` prüfen und später überarbeiten.
- direkt betroffene deutsche Texte und Komponenten dieser Seite anpassen.
- sichtbare alte Leistungsbezüge auf dieser Seite entfernen.
- CTA und Ablauf auf dieser Seite an den neuen V1-Fokus anpassen.
- mobile/desktop Typografie und Bildwirkung dieser Seite prüfen.
- vorhandene Bilder prüfen.

### 043 darf nicht

- `/leistungen` umbauen.
- alte Legacy-Routen löschen oder redirecten.
- EN/RU-Texte ändern.
- SEO-/Metadata-/Structured-Data-Dateien ändern.
- Sitemap, Robots oder Canonicals ändern.
- Upload-, Supabase-, KI-, Admin- oder Portal-Funktionen ergänzen.
- Upload, Supabase, KI, Admin oder Portal als live darstellen.
- neue Routen erstellen.
- andere Service-Seiten umbauen.
- neue Assets ohne Freigabe einbauen.
- Aufgabe 032 starten.
- Aufgabe 029 starten.
- Aufgabe 026 starten.

## Vorgehen

1. Branch von aktuellem `main` erstellen.
2. Diese Task-Datei in `workflow/active/` anlegen und Status auf `in Arbeit` setzen.
3. Start-Commit nur für den Workflow-Start erstellen.
4. Bestehende Route `/leistungen/unfallgutachten` inventarisieren.
5. Betroffene Dateien, Komponenten, Texte, Bilder und CTAs dokumentieren.
6. Sichtbare Probleme, alte Leistungsbezüge und schwache Stellen benennen.
7. Konkrete Empfehlung für die spätere Umsetzung innerhalb von 043 formulieren.
8. Noch keinen PR erstellen und keinen Push ausführen.

## Akzeptanzkriterien

- 043 liegt in `workflow/active/`.
- 043 hat `Status: in Arbeit`.
- Die bestehende Route `/leistungen/unfallgutachten` wurde inventarisiert.
- Betroffene Dateien/Komponenten wurden identifiziert.
- Es ist klar dokumentiert, welche Inhalte der Seite später überarbeitet werden müssen.
- Es ist klar dokumentiert, welche Änderungen nicht zu 043 gehören.
- 032 wurde nicht gestartet.
- 029 wurde nicht gestartet.
- 026 wurde nicht gestartet.
- Keine Code-Umsetzung im Startschritt.
- Keine EN/RU-, SEO-, Routen-, Upload-, Supabase-, KI- oder Portal-Änderungen im Startschritt.

## Status

Status: in Arbeit
