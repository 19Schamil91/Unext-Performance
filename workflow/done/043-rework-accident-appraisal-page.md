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

Planungszusatz vor der Umsetzung:

- Metadata-Grenze: Für die spätere Umsetzung wird zunächst Option B vorgemerkt. Sichtbare deutsche Textänderungen in der gemeinsamen Textquelle dürfen in 043 erfolgen, auch wenn `title` oder `description` indirekt Metadata berühren. Diese Auswirkung muss vor der Umsetzung bewusst geprüft und im Abschluss dokumentiert werden. 043 wird dadurch keine SEO-/Metadata-Aufgabe; finale SEO-, Structured-Data-, Sitemap-, Robots-, Canonical- und Hreflang-Arbeit bleibt bei 029.
- Layout-Grenze: Das bestehende `service-page-layout.tsx` soll bevorzugt weiterverwendet werden. Keine globale Layout-Refaktorierung in 043. Falls Anpassungen nötig sind, sollen sie möglichst seitenbezogen, deutsch und eng auf `/leistungen/unfallgutachten` begrenzt bleiben.
- Textumfang: Der Seitenvorschlag soll bewusst kompakt bleiben. Ziel ist eine hochwertige, mobile gut scannbare Detailseite mit kurzen Absätzen, klaren Karten/Punkten und ohne überladene Fachtext-Wand.

Kurswechsel vor der Umsetzung:

- Die Unterseite soll nicht als zweite Startseite oder lange Wiederholung der Startseite aufgebaut werden.
- Die bereits begonnene breite Umsetzungsrichtung gilt nicht als Zielversion und muss vor einer Fortsetzung kritisch zurückgeschnitten oder ersetzt werden.
- 043 soll eine kompakte, praktische Detailseite für Besucher nach einem Unfall werden: weniger Verkaufsargumentation, mehr konkrete Orientierung.
- Der Mehrwert der Seite soll aus klaren Antworten auf praktische Fragen entstehen: wann ein Unfallgutachten sinnvoll ist, was dokumentiert wird, welche Unterlagen helfen und wie der nächste Schritt abläuft.
- Upload, Supabase, Portal, Datenbank, Storage oder versteckte Upload-Vorbereitung bleiben außerhalb von 043. Die Seite darf nur textlich so vorbereitet werden, dass spätere Upload-Funktionen sauber ergänzt werden können.
- Sichtbare Formulierungen dürfen nicht behaupten, dass Dokumente bereits hochgeladen oder über ein Portal eingereicht werden können.
- Für spätere Supabase-/Upload-Funktionen soll nach 043 oder 044 eine eigene Aufgabe mit eigener Spec geplant werden.

Geplanter Umsetzungsumfang in 043 ab diesem Kurswechsel:

- Hero kurz und eigenständig formulieren, ohne die Startseite zu kopieren.
- Abschnitt `Wann ist ein Unfallgutachten sinnvoll?` mit wenigen klaren Punkten.
- Abschnitt `Was wird dokumentiert?` mit Schadendokumentation, Reparaturkosten, Wertminderung, Wiederbeschaffungswert, Restwert und Fotodokumentation, soweit fachlich passend.
- Abschnitt `Welche Unterlagen helfen?` ohne Upload-Versprechen, zum Beispiel Fahrzeugschein/Zulassungsbescheinigung, vorhandene Schadenfotos, Versicherungs- oder Unfalldaten und kurze Schadenschilderung.
- Ablauf in maximal vier kompakten Schritten von Kontaktaufnahme bis Gutachten/weiterer Abstimmung.
- Vorsichtige Kostenformulierung: Bei unverschuldetem Unfall werden Gutachterkosten in der Regel von der gegnerischen Haftpflichtversicherung übernommen; keine harte `kostenlos`-Hauptaussage.
- Kurze FAQ nur, wenn sie echten Mehrwert hat; maximal wenige Fragen, keine lange Fachtext-Wand.
- CTA klar zu Telefon, WhatsApp, E-Mail oder Anfrage führen, soweit diese Kontaktwege vorhanden und freigegeben sind.

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
- 043 hat `Status: abgeschlossen`.
- Die bestehende Route `/leistungen/unfallgutachten` wurde inventarisiert.
- Betroffene Dateien, Komponenten, deutsche Texte, Bilder, CTAs und Layoutbereiche wurden identifiziert.
- Die deutsche Seite `/leistungen/unfallgutachten` wurde kompakt und hochwertig auf `KFZ-Unfallgutachten Berlin` ausgerichtet.
- Die Seite erklärt verständlich, wann ein Unfallgutachten sinnvoll ist, was dokumentiert wird, welche Unterlagen helfen und wie der Ablauf funktioniert.
- Hero, Kostenhinweis, Trust-Hinweise, Gutachterwahl, Detailbereiche, Ablauf, FAQ, Formular und Abschluss-CTA wurden geprüft und überarbeitet.
- Die Seite bleibt eine Detailseite zur Hauptleistung und ist keine Kopie der Startseite.
- Die Seite verwendet keine harten Aussagen wie `kostenlos`, `garantiert`, `rechtssicher`, `gerichtsfest` oder `Versicherung zahlt immer`.
- Upload, Supabase, Portal, KI, Admin oder Datenbankfunktionen werden nicht als live dargestellt und wurden nicht technisch ergänzt.
- Keine neuen Routen wurden erstellt und keine bestehenden Routen gelöscht oder redirectet.
- Keine Assets wurden hinzugefügt.
- Keine SEO-/Metadata-/Structured-Data-Dateien, Sitemap, Robots, Canonicals oder Hreflang wurden geändert.
- Keine EN/RU-Inhalte der Unfallgutachten-Seite wurden überarbeitet.
- Die globalen Footer-Instagram-Links wurden auf ausdrückliche Freigabe entfernt und im Changelog dokumentiert.
- 032 wurde nicht gestartet.
- 029 wurde nicht gestartet.
- 026 wurde nicht gestartet.
- `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` wurden erfolgreich ausgeführt.
- Finale Fullpage-Screenshots für Mobile, Tablet und Desktop wurden erstellt.
- Umsetzung ist committed, aber noch nicht gepusht und es wurde noch kein PR erstellt.

## Status

Status: abgeschlossen
