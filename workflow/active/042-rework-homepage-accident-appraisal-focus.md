# Aufgabe 042 - Startseite stärker auf Unfallgutachten ausrichten

## Ziel

Die Startseite auf `KFZ-Unfallgutachten in Berlin` ausrichten und die Hauptleistung Unfallgutachten sichtbar priorisieren.

Aufgabe 042 ist jetzt eine aktive Umsetzungsaufgabe. Sie darf die Startseite und direkt zugehörige Startseiten-Komponenten ändern, bleibt aber innerhalb der unten dokumentierten Scope-Grenzen.

## Kontext

Aufgabe 041 wurde abgeschlossen und hat die V1-Seitenstruktur sowie den Routen-Scope vor i18n festgelegt.

042 folgt direkt aus 041 und setzt den Startseiten-Teil dieser Entscheidung um.

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

Diese Aufgabe setzt die Startseiten-Überarbeitung um.

Erlaubt:

- Startseite `/` beziehungsweise deutsche Startseitenroute prüfen und anpassen
- direkt zugehörige Startseiten-Komponenten ändern
- deutsche Startseiten-Texte, Hero, Karten, Ablauf, CTA-Logik und Startseiten-Abschnitte anpassen
- vorhandene Assets innerhalb der Startseite anders verwenden, falls nötig
- mobile-first Layout, Typografie, Zeilenumbrüche und CTA-Darstellung für die Startseite prüfen und korrigieren

Nicht erlaubt:

- keine `/leistungen`-Seite umbauen
- keine `/leistungen/unfallgutachten`-Seite umbauen
- keine Routen ändern
- keine EN/RU-Texte ändern
- keine SEO-/Metadata-/Structured-Data-Dateien ändern
- keine neuen Assets hinzufügen oder bestehende Assets ändern
- kein Upload, Supabase, KI, Admin oder Portal als Livefunktion darstellen
- Aufgabe 032 nicht starten
- Aufgabe 043 nicht starten
- Aufgabe 044 nicht starten

## Inhaltliche Zielrichtung

### 1. Hero-Fokus

Der Startseiten-Hero soll klarer auf den akuten Unfall-/Schadenfall ausgerichtet werden.

Zielrichtung:

- `KFZ-Unfallgutachten in Berlin` sofort erkennbar machen.
- `KFZ-Gutachten Berlin` als fachlichen Oberbegriff erhalten.
- Unfallgutachten als Hauptleistung sichtbar priorisieren.
- Keine 24/7-, Sofortdienst-, garantierte Vor-Ort-, Schadenhöhen- oder Reparaturkostenversprechen machen.
- Trust-Satz sachlich integrieren, ohne Übertreibung oder ungeprüfte Zertifikats-/Logo-Nutzung.

### 2. Karten- und Abschnittslogik

Die Startseiten-Karten sollen die neue Schwerpunktlogik abbilden.

Zu prüfen und umzusetzen:

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

Die Startseite soll den späteren V1-Nutzerfluss vorbereiten:

```text
Startseite -> Unfallgutachten -> Gutachtenarten / KFZ-Gutachten / Weitere Gutachten -> Über uns -> Kontakt
```

Die Startseite soll Unfallgutachten sichtbar vor der allgemeinen Gutachtenübersicht priorisieren.

Keine neue Route wie `/unfallgutachten-berlin`, `/gutachtenarten`, `/digitale-schadenaufnahme`, `/upload`, `/ki-voranalyse` oder `/portal` für V1 planen oder einbauen.

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

Die Umsetzung muss mobile-first geprüft werden.

Zu prüfen:

- Telefon und WhatsApp mobil schnell erreichbar.
- Hero-Text und Trust-Satz dürfen auf Mobile nicht überladen wirken.
- Karten- und Abschnittstexte müssen kurz, verständlich und gut scannbar sein.
- Umlaute und Zeilenumbrüche müssen in sichtbaren deutschen Texten sauber geprüft werden.

## Vorgehen

1. Bestehende Startseite und relevante Komponenten lesen.
2. Relevante Specs und die Entscheidung aus 041 gegen die aktuelle Startseite abgleichen.
3. Konkreten Umsetzungsplan formulieren.
4. Startseite mobile-first auf `KFZ-Unfallgutachten in Berlin` überarbeiten.
5. Typografie, Zeilenumbrüche, CTAs und Mobile-Darstellung prüfen.
6. `npm run lint`, `npx tsc --noEmit`, `npm run build`, passende visuelle/mobile Prüfung und `git diff --check` ausführen.
7. Prüfen, ob `CHANGELOG.md` oder `ROADMAP.md` nach der Umsetzung aktualisiert werden müssen.

## Akzeptanzkriterien

- Aufgabe 042 liegt in `workflow/active/`.
- Status ist `in Arbeit`.
- Die Startseite ist auf `KFZ-Unfallgutachten in Berlin` ausgerichtet.
- Unfallgutachten ist sichtbar als Hauptleistung priorisiert.
- `/leistungen/unfallgutachten` darf sichtbar als Hauptseite `Unfallgutachten` verlinkt werden.
- `/leistungen` bleibt nur ergänzende Übersicht und wirkt nicht wichtiger als Unfallgutachten.
- Es gibt keine künstliche Gleichstellung ähnlicher Begriffe wie Unfallgutachten und Schadengutachten.
- CTAs bleiben auf Telefon, WhatsApp, E-Mail und freigegebenes Kontaktformular begrenzt.
- Keine Upload-, Supabase-, KI-, Admin- oder Portal-Funktion wird als live dargestellt.
- Aufgabe 032 wurde nicht gestartet.
- Aufgabe 043 wurde nicht gestartet.
- Aufgabe 044 wurde nicht gestartet.
- Keine `/leistungen`-Seite wurde umgebaut.
- Keine `/leistungen/unfallgutachten`-Seite wurde umgebaut.
- Keine Routen, SEO-/Metadata-/Structured-Data-Dateien, EN/RU-Texte oder Assets wurden geändert.
- `npm run lint` wurde ausgeführt.
- `npx tsc --noEmit` wurde ausgeführt.
- `npm run build` wurde ausgeführt.
- Mobile- und typografische Prüfung für Hero, CTAs, Karten, Zeilenumbrüche und Umlaute ist vorgesehen beziehungsweise dokumentiert.

## Status

Status: in Arbeit