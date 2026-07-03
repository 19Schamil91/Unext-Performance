# Aufgabe 042 - Startseite stärker auf Unfallgutachten ausrichten

## Ziel

Die spätere Überarbeitung der Startseite so planen, dass sie klarer auf `KFZ-Unfallgutachten in Berlin` ausgerichtet wird.

Aufgabe 042 bereitet nur die Umsetzung vor. Die Startseite wird in dieser Aufgabe noch nicht umgebaut.

## Kontext

Aufgabe 041 wurde abgeschlossen und hat die V1-Seitenstruktur sowie den Routen-Scope vor i18n festgelegt.

Wichtige Entscheidungen aus 041:

- V1-Hauptfokus ist `KFZ-Unfallgutachten in Berlin`.
- Die Startseite ist der erste Einstieg in diesen Nutzerfluss.
- `Unfallgutachten` ist im V1-Nutzerfluss die primäre Folgeseite nach der Startseite.
- `/leistungen/unfallgutachten` bleibt technisch die bestehende Detailroute, darf sichtbar aber als Hauptseite `Unfallgutachten` geführt werden.
- `/leistungen` bleibt technisch die Übersichtsroute für Gutachtenarten beziehungsweise weitere Gutachtenbereiche, soll sichtbar aber nicht wichtiger wirken als Unfallgutachten.
- Die sichtbare Nutzerfluss-Reihenfolge soll lauten: Startseite -> Unfallgutachten -> Gutachtenarten / KFZ-Gutachten / Weitere Gutachten -> Über uns -> Kontakt.
- Aufgabe 032 bleibt pausiert, bis Startseite, Unfallgutachten-Unterseite und `/leistungen` fachlich geklärt beziehungsweise umgesetzt sind.

Relevante Grundlagen:

- `workflow/done/041-define-v1-page-route-scope-before-i18n.md`
- `specs/00-global-spec/global-spec.md`
- `specs/01-functional-map/functional-map.md`
- `specs/02-feature-specs/kfz-gutachten.md`
- `specs/06-work-plans/v1-launch-masterplan.md`

## Scope

Diese Aufgabe plant die spätere Startseiten-Überarbeitung.

In dieser Aufgabe wird nicht umgesetzt:

- keine Startseite umbauen
- keine Website-Code-Dateien ändern
- keine Routen ändern
- keine SEO-/Metadata-/Structured-Data-Dateien ändern
- keine EN/RU-Texte ändern
- keine Assets ändern
- keine Upload-, Supabase-, KI-, Admin- oder Portal-Funktion planen oder umsetzen
- Aufgabe 032 nicht starten
- Aufgabe 043 nicht starten
- Aufgabe 044 nicht starten

## Zu klärende Punkte

### 1. Hero-Fokus

Zu prüfen ist, wie der Startseiten-Hero später klarer auf den akuten Unfall-/Schadenfall ausgerichtet werden soll.

Zielrichtung:

- `KFZ-Unfallgutachten in Berlin` sofort erkennbar machen.
- `KFZ-Gutachten Berlin` als fachlichen Oberbegriff erhalten.
- Keine 24/7-, Sofortdienst-, garantierte Vor-Ort-, Schadenhöhen- oder Reparaturkostenversprechen machen.
- Trust-Satz sachlich integrieren, ohne Übertreibung oder ungeprüfte Zertifikats-/Logo-Nutzung.

### 2. Karten- und Abschnittslogik

Zu prüfen ist, ob die bestehenden Startseiten-Karten reduziert, geschärft oder neu geordnet werden müssen.

Zielrichtung aus 041:

```text
Unfallgutachten
Fahrzeugbewertung
Schadendokumentation
Direkte Anfrage / Ablauf / Gutachten nach Schaden
```

Wichtig:

- `Unfallgutachten` ist die sichtbare Hauptleistung.
- `Schadengutachten` wird fachlich erklärend genutzt, aber nicht als künstlich getrennte gleichwertige Hauptleistung aufgebaut.
- `Fahrzeugbewertung` ist der kundenfreundliche Hauptbegriff.
- `Wertgutachten` bleibt ergänzender Fachbegriff.
- `Schadendokumentation` ist kundenfreundlicher als allein `Beweissicherung`.
- `Beweissicherung` darf ergänzend verwendet werden, aber nicht allein als große Hauptleistung erscheinen.

### 3. Navigation und Nutzerfluss

Zu prüfen ist, wie die Startseite den späteren V1-Nutzerfluss vorbereitet:

```text
Startseite -> Unfallgutachten -> Gutachtenarten / KFZ-Gutachten / Weitere Gutachten -> Über uns -> Kontakt
```

Die Startseite soll Unfallgutachten sichtbar vor der allgemeinen Gutachtenübersicht priorisieren.

Keine neue Route wie `/unfallgutachten-berlin`, `/gutachtenarten`, `/digitale-schadenaufnahme`, `/upload`, `/ki-voranalyse` oder `/portal` für V1 planen.

### 4. CTA- und Kontaktlogik

CTAs bleiben in V1 auf freigegebene Kontaktwege begrenzt:

- Telefon
- WhatsApp
- E-Mail
- Kontaktformular, soweit freigegeben und vorhanden

Digitale Schadenaufnahme wird auf der Startseite nur als strukturierte Kontaktaufnahme beziehungsweise Anfragevorbereitung verstanden.

Kein Website-Upload, keine Supabase-Funktion, keine KI-Voranalyse, kein Adminbereich und kein Portal dürfen als live dargestellt werden.

Falls KI erwähnt wird, dann nur als späterer Ausbauschritt. Die finale Bewertung erfolgt immer durch einen Gutachter. KI ersetzt kein Gutachten und keinen Gutachter.

### 5. Mobile-First und Textwirkung

Die spätere Umsetzung muss mobile-first geplant werden.

Zu prüfen:

- Telefon und WhatsApp mobil schnell erreichbar.
- Hero-Text und Trust-Satz dürfen auf Mobile nicht überladen wirken.
- Karten- und Abschnittstexte müssen kurz, verständlich und gut scannbar sein.
- Umlaute und Zeilenumbrüche müssen in sichtbaren deutschen Texten sauber geprüft werden.

## Vorgehen

1. Bestehende Startseite und relevante Komponenten lesen.
2. Relevante Specs und die Entscheidung aus 041 gegen die aktuelle Startseite abgleichen.
3. Hero-Zielrichtung für die spätere Umsetzung formulieren.
4. Karten- und Abschnittslogik für Unfallgutachten, Fahrzeugbewertung und Schadendokumentation vorbereiten.
5. CTA- und Kontaktlogik auf Telefon, WhatsApp, E-Mail und freigegebenes Kontaktformular begrenzen.
6. Roadmap-Grenzen für Upload, Supabase, KI, Admin und Portal dokumentieren.
7. Mobile-First- und Typografie-Prüfpunkte für die spätere Umsetzung festhalten.
8. Entscheiden, ob die Task nach der Planung direkt in `workflow/active/` gestartet werden soll oder ob zuerst weitere Freigabe nötig ist.

## Akzeptanzkriterien

- Aufgabe 042 liegt in `workflow/todo/`.
- Status ist `offen`.
- Aufgabe 042 wurde nicht nach `workflow/active/` verschoben.
- Aufgabe 032 wurde nicht gestartet.
- Aufgabe 043 wurde nicht gestartet.
- Aufgabe 044 wurde nicht gestartet.
- Es wurden keine Website-Code-Dateien geändert.
- Es wurden keine Startseiten-, Routen-, SEO-/Metadata-/Structured-Data-, EN/RU- oder Asset-Dateien geändert.
- Die Task dokumentiert den V1-Hauptfokus `KFZ-Unfallgutachten in Berlin`.
- Die Task dokumentiert, dass Unfallgutachten die primäre Folgeseite nach der Startseite ist.
- Die Task dokumentiert die zu prüfende Hero-, Karten-, Navigations- und CTA-Logik.
- Die Task begrenzt CTAs auf Telefon, WhatsApp, E-Mail und freigegebenes Kontaktformular.
- Die Task dokumentiert, dass Upload, Supabase, KI, Admin und Portal keine V1-Livefunktionen sind.
- Der nächste Schritt ist klar: Aufgabe 042 kann nach Freigabe aus `workflow/todo/` nach `workflow/active/` gestartet und dann inhaltlich ausgearbeitet werden.

## Status

Status: in Arbeit
