# Aufgabe 041 - V1-Seitenstruktur und Routen-Scope vor i18n festlegen

## Ziel

Den V1-Seiten- und Routen-Scope verbindlich festlegen, bevor weitere Umsetzung startet.

Aufgabe 041 klärt, welche Seiten wirklich zur ersten veröffentlichbaren Version gehören, welche Routen sichtbar bleiben, welche alten Leistungsseiten Legacy sind und welche Folgeaufgaben vor 032 notwendig sind.

## Kontext

Aufgabe 032 `i18n Launch Scope / Deutsch, EN/RU prüfen` wird weiterhin nicht gestartet.

Vor Aufgabe 032 müssen zuerst die deutsche V1-Seitenstruktur und der Routen-Scope geklärt werden, weil diese Entscheidungen Grundlage für Startseiten-Überarbeitung, Unfallgutachten-Unterseite, `/leistungen`, i18n, SEO, Routing und Cleanup sind.

Aktueller Arbeitsstand:

- Branch für diese Aufgabe: `task-041-define-v1-page-route-scope`
- Aufgabe 032 liegt weiterhin in `workflow/todo/`
- `workflow/active/` enthält diese Aufgabe
- Es wird keine Website-Umsetzung vorgenommen

## Hauptentscheidung

Die V1-Website soll klar auf folgendes Hauptthema ausgerichtet werden:

```text
KFZ-Unfallgutachten in Berlin
```

Die weiteren Gutachtenbereiche sind ergänzende Kompetenzbereiche. Sie sollen sichtbar erklärt werden, aber nicht gleichwertig, künstlich getrennt oder aufgeblasen wirken.

Aufgabe 041 soll eine konkrete Entscheidungsvorlage liefern, wie diese Ausrichtung in Seitenstruktur, Navigation, `/leistungen`, `/leistungen/unfallgutachten` und Folgeaufgaben abgebildet wird.

## Begriffslogik

Arbeitsentscheidung für 041:

- `Unfallgutachten` ist die Hauptleistung und soll prominent priorisiert werden.
- `Schadengutachten` ist fachlich nah am Unfallgutachten und soll nicht als künstlich getrennte gleichwertige Hauptleistung aufgebaut werden.
- `Fahrzeugbewertung` ist der kundenfreundliche Hauptbegriff.
- `Wertgutachten` ist ein fachlicher Zusatzbegriff und soll erklärend ergänzt werden.
- `Schadendokumentation` ist kundenfreundlicher als allein `Beweissicherung`.
- `Beweissicherung` darf ergänzend im Text verwendet werden, aber nicht allein als große Hauptleistung positioniert werden.

Diese Begriffslogik muss gegen die freigegebenen Specs geprüft werden, insbesondere gegen:

- `specs/00-global-spec/global-spec.md`
- `specs/01-functional-map/functional-map.md`
- `specs/02-feature-specs/kfz-gutachten.md`
- `specs/03-technical-specs/routing.md`
- `specs/06-work-plans/routing-redirects-old-service-routes.md`
- `specs/06-work-plans/v1-launch-masterplan.md`

## Zu prüfende Seiten/Routen

### Wahrscheinlich V1-relevant

```text
/
/ueber-uns
/kontakt
/leistungen
/leistungen/unfallgutachten
/impressum
/datenschutz
/agb
```

### Nicht V1-relevant / Legacy

```text
/leistungen/autovermietung
/leistungen/autoservice
/leistungen/detailing
/leistungen/zulassungsservice
/leistungen/abschleppdienst-pannenhilfe
```

Diese alten Leistungsseiten sollen nicht aktiv beworben werden und später durch 026/029 sauber behandelt werden.

## Offene Entscheidungen

### 1. Was wird aus `/leistungen`?

Zu prüfen:

- Wird `/leistungen` zu einer Seite `Gutachtenarten im Überblick`?
- Wird `/leistungen` zu `KFZ-Gutachten & Fahrzeugbewertung`?
- Wird `/leistungen` zu `Weitere Gutachten`?
- Oder wird `/leistungen` nicht aktiv verlinkt und später anders behandelt?

Wichtig: `/leistungen` darf nicht mehr als alte 6-Service-Übersicht erscheinen.

### 2. Was wird aus `/leistungen/unfallgutachten`?

Aktuelle Empfehlung:

Diese Route bleibt sichtbar und wird als starke Haupt-Unterseite für die Hauptleistung ausgebaut.

In 041 ist zu klären, ob die Unfallgutachten-Unterseite vor 032, 029 und 026 überarbeitet werden muss, weil sie fachlich und strategisch zur Hauptleistung gehört.

### 3. Bekommen weitere Gutachtenarten eigene Unterseiten?

Aktuelle Empfehlung:

Nicht in V1.

Grund:

Eigene Unterseiten für Schadengutachten, Fahrzeugbewertung/Wertgutachten oder Schadendokumentation/Beweissicherung sollen erst später erstellt werden, wenn genug hochwertiger eigener Inhalt und eine klare SEO-Strategie vorhanden sind.

In V1 sollen diese Themen eher auf Startseite und/oder `/leistungen` erklärt werden.

### 4. Wie soll die Startseite später überarbeitet werden?

Direkt nach der Seitenstruktur soll die Startseite als eigener Task überarbeitet werden.

Zielrichtung:

- stärkerer Fokus auf `Unfallgutachten`
- Hero klarer auf Unfall/Schadenfall ausrichten
- vier Karten neu bewerten und reduzieren oder schärfen
- keine künstliche Gleichstellung ähnlicher Begriffe
- `Schadengutachten` eher im Text erklären statt als doppelte Hauptleistung
- `Fahrzeugbewertung` als verständlicher Begriff
- `Wertgutachten` nur ergänzend erklären
- `Schadendokumentation` als verständlicher Begriff
- `Beweissicherung` nur ergänzend im Text verwenden
- klare Kundensicht: Was braucht jemand nach einem Unfall?

### 5. Wie sollen die Startseiten-Karten später heißen?

Zu prüfende Zielrichtung:

```text
Unfallgutachten
Fahrzeugbewertung
Schadendokumentation
Direkte Anfrage / Ablauf / Gutachten nach Schaden
```

Alternativ sind weniger Karten zu prüfen, falls vier Karten künstlich wirken.

Wichtig: Nicht automatisch vier gleichwertige Gutachtenarten bauen, wenn Begriffe sich überschneiden.

### 6. Wie soll die Navigation später wirken?

Zu prüfen:

- Ob `Leistungen` als Begriff noch passend ist.
- Ob `Unfallgutachten` in der Navigation stärker priorisiert werden sollte.
- Ob `/leistungen` eher als `Weitere Gutachten`, `Gutachtenarten` oder `KFZ-Gutachten` bezeichnet werden sollte.
- Ob alte Service-Links aus Header/Footer später entfernt oder ersetzt werden müssen.

### 7. Welche Folgeaufgaben sollen aus 041 entstehen?

041 soll am Ende eine konkrete Empfehlung geben, welche neuen Tasks vor 032 nötig sind.

Voraussichtlich:

```text
042: Rework homepage with accident appraisal focus
043: Rework accident appraisal service page
044: Rework services overview as appraisal types page
```

Zu prüfen ist, ob 043 und 044 in dieser Reihenfolge sinnvoll sind oder ob `/leistungen` zuerst gemacht werden muss.

Danach erst:

```text
032: Review i18n launch scope
029: Implement SEO metadata KFZ Gutachten
026: Code cleanup after rework
```

## Roadmap-Kompatibilität: digitale Schadenaufnahme, Upload, Supabase und KI

041 klärt weiterhin nur die V1-Seitenstruktur und den Routen-Scope.

041 plant und implementiert keine Upload-, Supabase-, KI-, Admin- oder Portal-Funktion.

Trotzdem muss 041 dokumentieren, dass die V1-Seitenstruktur später sauber in diese Roadmap hineinwachsen kann.

Festzuhalten:

- Digitale Schadenaufnahme ist in V1 nur strukturierte Kontaktaufnahme beziehungsweise Anfragevorbereitung.
- Kein Website-Upload wird in V1 als live dargestellt.
- Keine Supabase-, KI-, Admin- oder Portal-Funktion wird in V1 als live dargestellt.
- Keine eigene Route wie `/digitale-schadenaufnahme`, `/upload`, `/ki-voranalyse`, `/portal` oder eine ähnliche Roadmap-Route wird für V1 geplant.
- Startseite, `/leistungen`, `/leistungen/unfallgutachten` und `/kontakt` sollen später logisch in einen Upload-/Supabase-/KI-Prozess überführbar sein.
- CTAs bleiben in V1 auf freigegebene Kontaktwege begrenzt:
  - Telefon
  - WhatsApp
  - E-Mail
  - Kontaktformular
- Falls KI erwähnt wird, dann nur als geplanter Ausbauschritt, nicht als aktive Leistung.
- Die finale Bewertung erfolgt immer durch einen Gutachter.
- KI ersetzt kein Gutachten und keinen Gutachter.
- Keine finale Schadenhöhe, keine Reparaturkosten und keine automatische Bewertung durch KI versprechen.
- 022 Supabase, 023 KI und 024 Kundenportal/Web-App bleiben spätere separate Ausbaustufen.

## Folgeaufgaben vor 032

Aufgabe 041 soll ausdrücklich prüfen und dokumentieren, ob vor 032 diese Reihenfolge gilt:

```text
041: V1-Seitenstruktur verbindlich festlegen
042: Startseite stärker auf Unfallgutachten ausrichten
043: Unfallgutachten-Unterseite hochwertig überarbeiten
044: /leistungen als Gutachtenarten-/Weitere-Gutachten-Seite klären/umbauen
032: i18n Launch Scope DE/EN/RU
029: SEO/Metadata/Structured Data
026: Cleanup alter Legacy-Seiten
```

Die genaue Reihenfolge von 043 und 044 darf in 041 geprüft werden.

Grundsatz:

```text
Startseite, Unfallgutachten-Unterseite und /leistungen müssen vor 032, 029 und 026 fachlich geklärt bzw. umgesetzt sein.
```

## Scope-Grenzen

In 041 wird nicht umgesetzt:

- keine Startseite umbauen
- keine Unfallgutachten-Unterseite umbauen
- keine `/leistungen`-Seite umbauen
- keine Routen ändern
- keine EN/RU-Texte ändern
- keine SEO-/Metadata-/Structured-Data-Dateien ändern
- keine Redirects einbauen
- keine alten Seiten löschen
- keine Assets ändern
- keine Upload-Funktion planen oder umsetzen
- keine Supabase-Funktion planen oder umsetzen
- keine KI-Funktion planen oder umsetzen
- keine Admin- oder Portal-Funktion planen oder umsetzen
- Aufgabe 032 nicht starten

## Vorgehen

1. Relevante Specs und Work Plans prüfen.
2. Bestehende Routen- und Seitenentscheidungen aus 030, 031, 039 und 040 einordnen.
3. V1-relevante Seiten und Legacy-Seiten bewerten.
4. Entscheidungsvorschlag für `/leistungen` erstellen.
5. Entscheidungsvorschlag für `/leistungen/unfallgutachten` erstellen.
6. Empfehlung zur Startseiten-Folgeaufgabe formulieren.
7. Roadmap-Kompatibilität für digitale Schadenaufnahme, Upload, Supabase und KI dokumentieren, ohne diese Funktionen zu planen oder umzusetzen.
8. Folgeaufgaben vor 032 konkret empfehlen.
9. Prüfen, ob `CHANGELOG.md` oder `ROADMAP.md` nach Abschluss der Planungsaufgabe aktualisiert werden müssen.

## Akzeptanzkriterien

- Aufgabe 041 liegt in `workflow/active/`.
- Status ist `in Arbeit`.
- Aufgabe 032 wurde nicht gestartet.
- Es wurden keine Code-Dateien geändert.
- Es wurden keine Website-Seiten, Routen, EN/RU-Texte, SEO-/Metadata-/Structured-Data-Dateien oder Assets geändert.
- Die V1-relevanten Seiten und Legacy-Routen sind als zu prüfender Scope dokumentiert.
- Die offene Entscheidung zu `/leistungen` ist dokumentiert.
- Die offene Entscheidung zu `/leistungen/unfallgutachten` ist dokumentiert.
- Die Begriffslogik für Unfallgutachten, Schadengutachten, Fahrzeugbewertung, Wertgutachten, Schadendokumentation und Beweissicherung ist dokumentiert.
- Die Folge-Reihenfolge vor 032 ist dokumentiert.
- Die Task dokumentiert, wie die V1-Seitenstruktur spätere digitale Schadenaufnahme, Upload, Supabase und KI vorbereitet, ohne diese Funktionen als live darzustellen.
- Es wird ausdrücklich dokumentiert, dass keine Upload-, Supabase-, KI-, Admin- oder Portal-Route in V1 erstellt oder beworben wird.
- CTA- und Navigationslogik bleibt auf freigegebene Kontaktwege begrenzt.
- 022 Supabase, 023 KI und 024 Kundenportal/Web-App bleiben spätere separate Ausbaustufen.
- Der nächste Schritt ist klar: 041 inhaltlich ausarbeiten und Entscheidungsvorschlag für die Seitenstruktur liefern.

## Status

Status: in Arbeit
