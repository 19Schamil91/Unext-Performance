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

## Entscheidungsvorlage

Diese Entscheidungsvorlage ist der fachliche Vorschlag für die weitere V1-Struktur. Sie ist noch keine Umsetzung und ersetzt nicht die ausdrückliche Freigabe.

### 1. V1-Hauptfokus

Empfehlung:

```text
KFZ-Unfallgutachten in Berlin
```

Begründung:

- Der konkrete Schadenfall nach einem Unfall ist der klarste Einstieg für Nutzer mit akutem Bedarf.
- `Unfallgutachten` ist nah an den vorhandenen freigegebenen Gutachten-Specs und an der bestehenden Route `/leistungen/unfallgutachten`.
- Die weitere Website kann danach ergänzende Gutachtenbereiche erklären, ohne mehrere ähnliche Leistungen künstlich gleich groß aufzubauen.
- Der Oberbegriff `KFZ-Gutachten Berlin` bleibt für SEO, Struktur und fachliche Einordnung wichtig, während die sichtbare V1-Kommunikation stärker am Unfall-/Schadenfall ansetzt.

### 2. V1-Seitenstruktur

Empfohlene V1-Seiten:

| Route | V1-Entscheidung | Rolle in V1 | Hinweise |
|---|---|---|---|
| `/` | Behalten und in Folgeaufgabe 042 überarbeiten | Hauptseite und erster Einstieg für Unfallgutachten in Berlin | Fokus auf Unfall-/Schadenfall schärfen, weitere Gutachtenbereiche ergänzend erklären. |
| `/ueber-uns` | Behalten | Vertrauen, Qualifikation, Anerkennung, Fortbildungen | Aufgabe 040 hat die deutsche Seite bereits auf V1-Scope ausgerichtet. EN/RU bleiben Aufgabe 032. |
| `/kontakt` | Behalten | Telefon, WhatsApp, E-Mail und freigegebenes Kontaktformular | Kontakt-/Legal-Scope wurde in 031 bereinigt; finale rechtliche Prüfung bleibt vor Launch offen. |
| `/leistungen` | Behalten, aber in Folgeaufgabe 044 umbauen | Übersicht für Gutachtenarten / weitere Gutachtenbereiche | Darf nicht als alte 6-Service-Übersicht sichtbar bleiben. |
| `/leistungen/unfallgutachten` | Behalten und in Folgeaufgabe 043 hochwertig überarbeiten | Haupt-Unterseite für die priorisierte Leistung | Als starke Detailseite für Unfallgutachten ausbauen, keine neue parallele Route in V1. |
| `/impressum` | Behalten | Rechtliche Anbieterangaben | Muss dauerhaft erreichbar bleiben. |
| `/datenschutz` | Behalten | Datenschutzinformationen | Darf Upload, Supabase oder KI nicht als live darstellen. |
| `/agb` | Behalten, falls weiterhin verlinkt/relevant | Rechtlicher Rahmen für konkrete Leistungsabstimmung | Inhalt muss beim Launch zum tatsächlichen Scope passen. |

### 3. Legacy-Routen

Empfehlung:

Die folgenden Routen gehören nicht zum aktiven V1-Scope und dürfen nicht mehr als aktive Leistungen beworben werden:

```text
/leistungen/autovermietung
/leistungen/autoservice
/leistungen/detailing
/leistungen/zulassungsservice
/leistungen/abschleppdienst-pannenhilfe
```

Planungsentscheidung:

- Diese Routen bleiben bis zur späteren SEO-/Routing-/Cleanup-Umsetzung als Legacy-Bestand markiert.
- Keine pauschalen Redirects auf KFZ-Gutachten, wenn die Suchintention nicht passt.
- Kein blindes Löschen und keine 404-/410-/noindex-Umsetzung in Aufgabe 041.
- Die konkrete Behandlung bleibt bei 029/026 beziehungsweise einer späteren freigegebenen Routing-/SEO-Umsetzung.
- EN/RU-Versionen dieser Routen bleiben bis 032 ungeprüft und gelten nicht als launchfähig.

### 4. Entscheidung für `/leistungen`

Empfehlung:

`/leistungen` bleibt in V1 erhalten, wird aber als eigene Folgeaufgabe 044 zu einer Gutachtenarten-/Weitere-Gutachten-Seite umgebaut.

Technische Einordnung:

- `/leistungen` ist die bestehende Übersichtsroute im Leistungsbereich.
- Die Route bleibt in V1 technisch stabil, damit keine unnötigen Routing-, SEO- oder i18n-Risiken entstehen.
- Sichtbar muss der Begriff `Leistungen` in 044 kritisch geprüft werden, weil er noch nach alter 6-Service-Logik wirken kann.
- Für Nutzer soll die sichtbare Benennung später wahrscheinlich klarer werden, zum Beispiel `Gutachtenarten`, `KFZ-Gutachten` oder `Weitere Gutachten`.
- Ziel ist: bestehende Route stabil halten, aber die sichtbare Benennung nutzerfreundlicher und scope-konform machen.

Empfohlene Rolle:

```text
Gutachtenarten im Überblick
```

Mögliche sichtbare Seitenausrichtung:

```text
KFZ-Gutachten & Fahrzeugbewertung
```

Inhaltliche Struktur für 044:

- Unfallgutachten als priorisierte Hauptleistung mit Verweis auf `/leistungen/unfallgutachten`.
- Fahrzeugbewertung als kundenfreundlicher Bereich; `Wertgutachten` nur erklärend ergänzen.
- Schadendokumentation als kundenfreundlicher Bereich; `Beweissicherung` nur erklärend ergänzen.
- Schadengutachten nicht als eigene gleichwertige Hauptleistung aufblasen, sondern fachlich nah am Unfallgutachten erklären.
- Keine Autovermietung, kein Autoservice, kein Detailing, kein Zulassungsservice, kein Abschleppdienst und keine Pannenhilfe als aktive Karten oder aktive Leistungen.

Begründung:

- Die Route existiert bereits und kann Nutzer sinnvoll auffangen, die eine Leistungsübersicht erwarten.
- Eine gezielte Gutachtenarten-Übersicht ist weniger riskant als eine sofortige Entfernung oder ein unpassender Redirect.
- `/leistungen` kann später interne Links, SEO-Entscheidungen und i18n besser strukturieren, ohne neue Unterseiten für jede Gutachtenart zu erzwingen.

### 5. Entscheidung für `/leistungen/unfallgutachten`

Empfehlung:

`/leistungen/unfallgutachten` bleibt sichtbar und wird vor 032 als eigene Folgeaufgabe 043 überarbeitet.

Rolle in V1:

- `/leistungen/unfallgutachten` ist die bestehende Detailroute für die Hauptleistung.
- Sichtbar darf diese Route als Hauptseite `Unfallgutachten` geführt werden, auch wenn der technische Pfad unter `/leistungen/` liegt.
- Unfallgutachten ist im V1-Nutzerfluss die primäre Folgeseite nach der Startseite.
- Haupt-Unterseite für den wichtigsten konkreten Nutzerbedarf nach einem Unfall.
- Vertiefung zur Startseite und zur Übersichtsroute `/leistungen`, nicht doppelte oder konkurrierende Startseite.
- Die technische Seitenhierarchie `/leistungen` -> `/leistungen/unfallgutachten` ist sinnvoll, solange die sichtbare Navigation nicht wie eine alte allgemeine Service-Struktur wirkt.
- Einordnung unter `KFZ-Gutachten`, ohne neue Route wie `/unfallgutachten-berlin` für V1 zu erstellen.

Inhaltliche Zielrichtung für 043:

- Unfall-/Schadenfall aus Kundensicht erklären.
- Ablauf der Anfrage verständlich machen.
- Telefon, WhatsApp, E-Mail und Kontaktformular als Kontaktwege nutzen.
- Keine Sofortdienst-, 24/7-, Schadenhöhen-, Reparaturkosten- oder KI-Bewertungsversprechen.
- Qualifikation und finale Gutachterprüfung sachlich einordnen.
- Digitale Schadenaufnahme nur als Anfragevorbereitung beschreiben, nicht als Upload-Prozess.

### 6. Keine weiteren Gutachten-Unterseiten in V1

Empfehlung:

In V1 werden keine weiteren neuen Gutachten-Unterseiten erstellt.

Nicht für V1 planen:

```text
/leistungen/schadengutachten
/leistungen/fahrzeugbewertung
/leistungen/wertgutachten
/leistungen/schadendokumentation
/leistungen/beweissicherung
/unfallgutachten-berlin
/gutachtenarten
/schadengutachten-berlin
/wertgutachten-berlin
/fahrzeugbewertung-berlin
/digitale-schadenaufnahme
```

Begründung:

- Die Routing-Spec warnt vor künstlichen Keyword-Dopplungen und sofortigen Landingpages ohne eigene Content-, SEO- und Routing-Freigabe.
- Die vorhandene Startseite, `/leistungen` und `/leistungen/unfallgutachten` reichen für V1 aus, wenn sie inhaltlich sauber strukturiert werden.
- Weitere Unterseiten können später entstehen, wenn genug eigener Inhalt, klare Suchintention und freigegebene SEO-Strategie vorhanden sind.

### 7. Begriffslogik für V1

Verbindliche Empfehlung für Folgeaufgaben 042 bis 044:

- `Unfallgutachten` ist die sichtbare Hauptleistung und darf prominent in Hero, Navigation und Detailseite erscheinen.
- `Schadengutachten` wird fachlich erklärend genutzt, besonders im Kontext von Unfallgutachten und Fahrzeugschaden, aber nicht als künstlich getrennte Hauptleistung mit eigener gleichwertiger Karte oder eigener V1-Unterseite.
- `Fahrzeugbewertung` ist der kundenfreundliche Begriff für Nutzer, die den Wert ihres Fahrzeugs einschätzen lassen möchten.
- `Wertgutachten` bleibt als ergänzender Fachbegriff erhalten, aber nicht als alleiniger Hauptbegriff.
- `Schadendokumentation` ist der kundenfreundliche Begriff für nachvollziehbare Dokumentation von Schaden, Zustand und relevanten Informationen.
- `Beweissicherung` wird ergänzend verwendet, aber nicht allein als große Hauptleistung positioniert.

### 8. Navigationslogik für V1

Empfehlung für spätere Umsetzung:

- Die sichtbare Nutzerfluss-Reihenfolge soll lauten: Startseite -> Unfallgutachten -> Gutachtenarten / KFZ-Gutachten / Weitere Gutachten -> Über uns -> Kontakt.
- Navigation soll V1-relevante Seiten in dieser Reihenfolge priorisieren: Startseite, Unfallgutachten, Gutachtenarten beziehungsweise KFZ-Gutachten oder Weitere Gutachten, Über uns, Kontakt.
- `Unfallgutachten` sollte sichtbar stärker priorisiert werden als die allgemeine alte Leistungslogik.
- Die Navigation soll Unfallgutachten vor der allgemeinen Gutachtenübersicht priorisieren.
- `/leistungen/unfallgutachten` bleibt technisch die bestehende Detailroute, darf sichtbar aber als Hauptseite `Unfallgutachten` geführt werden.
- `/leistungen` bleibt technisch die Übersichtsroute, soll sichtbar aber nicht wichtiger wirken als Unfallgutachten.
- Die Gutachtenarten-Übersicht ist ergänzend und kommt sichtbar nach der Hauptleistung.
- Der Navigationsbegriff `Leistungen` sollte in 044 kritisch geprüft und wahrscheinlich zu `Gutachtenarten`, `KFZ-Gutachten` oder `Weitere Gutachten` geschärft werden.
- Diese Prüfung betrifft die sichtbare Benennung und interne Linklogik, nicht automatisch die technische Route `/leistungen`.
- Keine neue Route wie `/unfallgutachten-berlin` oder `/gutachtenarten` für V1 planen, solange Routing und SEO nicht separat geprüft und freigegeben sind.
- Alte Service-Links zu Autovermietung, Autoservice, Detailing, Zulassungsservice und Abschleppdienst/Pannenhilfe sollen vor Launch nicht mehr als aktive Header-/Footer-Links erscheinen.
- Footer und mobile Navigation müssen dieselbe fachliche Logik abbilden wie Header und Seitenstruktur.
- Ein Sprachumschalter beziehungsweise EN/RU-Navigation darf erst nach 032 als launchfähig gelten.

### 9. Empfehlung für die Startseiten-Überarbeitung

Aufgabe 042 soll die Startseite nach der Seitenstruktur-Entscheidung neu schärfen.

Empfehlung für 042:

- Hero klarer auf Unfall-/Schadenfall ausrichten.
- H1 und Einstieg so formulieren, dass `KFZ-Unfallgutachten in Berlin` sofort erkennbar ist.
- Bestehende Kartenlogik reduzieren oder schärfen, damit keine künstliche Gleichstellung ähnlicher Begriffe entsteht.
- Unfallgutachten als Hauptkarte oder Hauptbereich führen.
- Fahrzeugbewertung und Schadendokumentation als ergänzende Bereiche führen.
- Schadengutachten, Wertgutachten und Beweissicherung erklärend einordnen.
- Kontaktwege mobile-first priorisieren: Telefon, WhatsApp, E-Mail und Kontaktformular.
- Keine Upload-, Supabase-, KI-, Admin- oder Portal-Livefunktion andeuten.

### 10. Roadmap-Kompatibilität für digitale Ausbaustufen

Die V1-Seitenstruktur soll später erweiterbar bleiben, ohne Roadmap-Funktionen vorwegzunehmen.

Planungsentscheidung:

- Startseite, `/leistungen`, `/leistungen/unfallgutachten` und `/kontakt` bilden später sinnvolle Einstiegspunkte in eine digitale Schadenaufnahme.
- V1 beschreibt digitale Schadenaufnahme nur als strukturierte Kontaktaufnahme beziehungsweise Anfragevorbereitung.
- Keine V1-Route für `/upload`, `/portal`, `/ki-voranalyse`, `/digitale-schadenaufnahme`, Admin oder Kundenportal.
- Keine Upload-, Supabase-, KI-, Admin- oder Portal-Links in Navigation, Footer, Sitemap oder CTAs.
- KI darf höchstens als späterer Ausbauschritt erwähnt werden, nicht als aktive Leistung.
- Die finale Bewertung erfolgt immer durch einen Gutachter.
- KI ersetzt kein Gutachten und keinen Gutachter.
- Keine finale Schadenhöhe, keine Reparaturkosten und keine automatische Bewertung durch KI.
- Aufgabe 022 Supabase, Aufgabe 023 KI und Aufgabe 024 Kundenportal/Web-App bleiben separate spätere Ausbaustufen.

### 11. Folgeaufgaben vor 032

Empfohlene Reihenfolge:

```text
041: V1-Seitenstruktur verbindlich festlegen
042: Startseite stärker auf Unfallgutachten ausrichten
043: Unfallgutachten-Unterseite überarbeiten
044: /leistungen als Gutachtenarten-/Weitere-Gutachten-Seite umbauen
032: i18n Launch Scope DE/EN/RU
029: SEO/Metadata/Structured Data
026: Cleanup alter Legacy-Seiten
033: Launch Quality Check
034: Deployment Launch Gate
035: Post Launch Monitoring
```

Begründung der Reihenfolge:

- 042 zuerst, weil die Startseite den Hauptfokus, die Begriffslogik, die Navigationswirkung und den ersten Nutzerweg vorgibt.
- 043 danach, weil Unfallgutachten im V1-Nutzerfluss die primäre Folgeseite nach der Startseite ist.
- 044 danach, weil `/leistungen` als ergänzende Übersichtsseite die in 042 und 043 festgelegte Schwerpunktlogik zusammenfasst und ergänzt.
- 032 erst danach, weil EN/RU auf freigegebenen deutschen Inhalten und einer geklärten Seitenstruktur basieren müssen.
- 029 erst nach 032, weil Metadata, Structured Data, Canonicals, Sitemap und Hreflang von Seiten-, Routen- und Sprachentscheidungen abhängen.
- 026 erst nach 029, weil Cleanup alte Komponenten, Translation-Daten und Assets erst nach geklärten SEO-, Routen- und i18n-Entscheidungen entfernen darf.

### 12. ROADMAP- und CHANGELOG-Prüfung

Prüfergebnis für den aktuellen Arbeitsstand:

- `ROADMAP.md` ist fachlich anzupassen, sobald 041 freigegeben oder abgeschlossen wird, weil dort aktuell weiterhin 032 als nächster logischer Schritt genannt wird.
- `CHANGELOG.md` ist beim Abschluss von 041 zu aktualisieren, weil die Seitenstruktur, die Folge-Reihenfolge vor 032 und die Roadmap-Kompatibilität dokumentiert wurden.
- In dieser Ausarbeitung werden `ROADMAP.md` und `CHANGELOG.md` noch nicht geändert, weil 041 weiterhin `in Arbeit` ist und nicht ohne Nutzerfreigabe abgeschlossen wird.

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

## Review / Prüfabschnitt

Akzeptanzkriterien-Prüfung am 2026-07-03:

| Akzeptanzkriterium | Bewertung | Hinweis |
|---|---|---|
| Aufgabe 041 liegt in `workflow/active/`. | erfüllt | `workflow/active/041-define-v1-page-route-scope-before-i18n.md` ist die aktive Aufgabe. |
| Status ist `in Arbeit`. | erfüllt | Bis zur Prüfung war der Status `in Arbeit`; danach stand die Aufgabe auf `wartet auf Freigabe`; nach Nutzerfreigabe wird sie auf `abgeschlossen` gesetzt. |
| Aufgabe 032 wurde nicht gestartet. | erfüllt | 032 liegt weiterhin in `workflow/todo/`. |
| Es wurden keine Code-Dateien geändert. | erfüllt | In Aufgabe 041 wurden nur Workflow-, Roadmap- und Changelog-Dokumentation geändert. |
| Es wurden keine Website-Seiten, Routen, EN/RU-Texte, SEO-/Metadata-/Structured-Data-Dateien oder Assets geändert. | erfüllt | Keine entsprechenden Dateien wurden geändert. |
| Die V1-relevanten Seiten und Legacy-Routen sind als zu prüfender Scope dokumentiert. | erfüllt | V1-Seiten und Legacy-Routen sind in der Entscheidungsvorlage dokumentiert. |
| Die offene Entscheidung zu `/leistungen` ist dokumentiert. | erfüllt | `/leistungen` ist als bestehende Übersichtsroute und spätere Gutachtenarten-/Weitere-Gutachten-Seite eingeordnet. |
| Die offene Entscheidung zu `/leistungen/unfallgutachten` ist dokumentiert. | erfüllt | `/leistungen/unfallgutachten` ist als bestehende Detailroute für die Hauptleistung eingeordnet. |
| Die Begriffslogik für Unfallgutachten, Schadengutachten, Fahrzeugbewertung, Wertgutachten, Schadendokumentation und Beweissicherung ist dokumentiert. | erfüllt | Die Begriffslogik ist in der Entscheidungsvorlage und im Ausgangsteil dokumentiert. |
| Die Folge-Reihenfolge vor 032 ist dokumentiert. | erfüllt | Empfohlen ist `041 -> 042 -> 043 -> 044 -> 032 -> 029 -> 026 -> 033 -> 034 -> 035`. |
| Die Task dokumentiert, wie die V1-Seitenstruktur spätere digitale Schadenaufnahme, Upload, Supabase und KI vorbereitet, ohne diese Funktionen als live darzustellen. | erfüllt | Roadmap-Kompatibilität ist dokumentiert. |
| Es wird ausdrücklich dokumentiert, dass keine Upload-, Supabase-, KI-, Admin- oder Portal-Route in V1 erstellt oder beworben wird. | erfüllt | V1-Routen wie `/upload`, `/portal`, `/ki-voranalyse` und `/digitale-schadenaufnahme` sind ausgeschlossen. |
| CTA- und Navigationslogik bleibt auf freigegebene Kontaktwege begrenzt. | erfüllt | Telefon, WhatsApp, E-Mail und Kontaktformular sind als Kontaktwege dokumentiert. |
| 022 Supabase, 023 KI und 024 Kundenportal/Web-App bleiben spätere separate Ausbaustufen. | erfüllt | Diese Aufgaben bleiben in `workflow/todo/` und sind in 041 als spätere Ausbaustufen dokumentiert. |
| Der nächste Schritt ist klar: 041 inhaltlich ausarbeiten und Entscheidungsvorschlag für die Seitenstruktur liefern. | erfüllt | Die Ausarbeitung und Entscheidungsvorlage liegen vor; Nutzerfreigabe wurde erteilt. |

Offene Punkte:

- Aufgabe 041 wurde durch den Nutzer ausdrücklich freigegeben.
- Die Done-Regel wurde angewendet und die Aufgabe wird nach `workflow/done/` verschoben.
- 032, 042, 043 und 044 bleiben weiterhin nicht gestartet.
## Status

Status: abgeschlossen
