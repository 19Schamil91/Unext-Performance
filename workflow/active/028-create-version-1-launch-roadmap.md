# Aufgabe 028 - Version-1-Launch-Roadmap erstellen

## Ziel

Einen klaren Fahrplan fuer Version 1 und den ersten Launch der UNEXT KFZ-Gutachten-Webseite erstellen.

## Kontext

Die Homepage wurde mit Aufgabe 027 erstmals sichtbar auf KFZ-Gutachten ausgerichtet. Vor einem sauberen Launch muessen aber noch offene Themen wie SEO/Metadata, Structured Data, alte Routen, Kontakt/Legal, Mehrsprachigkeit, Qualitaetspruefung und Deployment/Launch-Gate geordnet werden.

022, 023 und 024 bleiben Roadmap-Themen fuer spaeter. 026 Cleanup soll erst starten, wenn SEO, Routing, Legal und Launch-relevante Entscheidungen getroffen sind.

## Vorgehen

- Aktuellen Stand nach 027 pruefen.
- Festlegen, was zu Version 1 / erstem Launch gehoert.
- Festlegen, was ausdruecklich Roadmap nach Launch bleibt.
- Fehlende Tasks bis Launch identifizieren.
- Empfohlene Reihenfolge der naechsten Tasks dokumentieren.
- Pruefen, wann 026 Code-/Asset-Cleanup sinnvoll starten darf.
- Launch-Gate und Post-Launch-Kontrolle als notwendige Schritte pruefen.

## Aktueller Stand nach Aufgabe 027

### Bereits erledigt

- Die deutsche Homepage ist sichtbar auf `KFZ-Gutachten Berlin` ausgerichtet.
- Die alte sichtbare Priorisierung von allgemeinen Service-/Werkstatt-Leistungen wurde auf der deutschen Homepage entfernt.
- Die Homepage enthaelt fuer Version 1 bereits die wichtigen Grundbausteine: Hero, Gutachtenarten, Ablauf, Anfragevorbereitung, Vertrauen, FAQ, Kontakt-CTA und Footer-Pruefung.
- `Digitale Schadenaufnahme` wird auf der Homepage nur als Anfragevorbereitung dargestellt, nicht als fertiger Upload-, Supabase- oder KI-Prozess.
- Aufgabe 027 hat keine Routen, keine Metadata, keine Structured Data, keine Specs, keine Upload-/Supabase-/KI-Funktionen und keine Configs umgesetzt.
- Die Homepage wurde in Aufgabe 027 technisch und visuell geprueft.

### Noch nicht erledigt

- SEO-/Metadata-/Structured-Data-Umsetzung fuer die neue KFZ-Gutachten-Ausrichtung.
- Entscheidung und Umsetzung fuer alte Service-Routen und alte Service-Inhalte.
- Pruefung von Sitemap, Robots, Canonicals, OpenGraph und gegebenenfalls hreflang.
- Kontaktformular-, Resend-, Datenschutz- und Legal-Pruefung.
- Entscheidung, ob Version 1 nur Deutsch startet oder ob Englisch/Russisch zum Launch voll mitgeprueft werden muessen.
- Launch-Qualitaetspruefung mit technischen Checks, visuellen Checks und fachlicher Launch-Pruefung.
- Deployment-/Launch-Gate mit Domain, Umgebung, Produktiv-Konfiguration, Smoke-Test und Rollback-Hinweis.
- Post-Launch-Kontrolle nach dem ersten Livegang.

### Bekannte Risikobereiche

- Alte Routen und alte Inhalte koennen noch Signale senden, die nicht mehr zur reinen KFZ-Gutachten-Webseite passen.
- Alte Metadata oder Structured Data koennen noch falsche Leistungen wie Werkstatt, Fahrzeugservice oder AutoRepair signalisieren.
- Kontaktformular und E-Mail-Versand duerfen vor Launch nur genutzt werden, wenn Empfaenger, Absender, Datenschutztext und Fehlerverhalten geprueft sind.
- Mehrsprachige Seiten duerfen nicht halb-live bleiben, wenn sie inhaltlich, rechtlich oder technisch nicht zum Launch-Stand passen.
- Cleanup darf nicht zu frueh starten, weil Routing-, SEO-, Legal- und Sprachentscheidungen erst klaeren, welche Dateien wirklich wegfallen duerfen.

## Version 1 / erster Launch

Version 1 bedeutet hier: eine saubere, glaubwuerdige erste Live-Version der UNEXT-Webseite als KFZ-Gutachten-Webseite fuer Berlin.

### Muss vor Launch geklaert oder erledigt werden

- Launch-Scope eindeutig festlegen: Welche Seiten sind live, welche Seiten sind nicht live, welche Sprachen sind live.
- SEO und Metadata auf die neue Positionierung `KFZ-Gutachten Berlin` ausrichten.
- Structured Data pruefen und nur passende Daten ausspielen.
- Alte Service-Routen und alte Service-Inhalte fachlich entscheiden: behalten, ersetzen, redirecten, noindex, 404/410 oder spaeter umbauen.
- Sitemap und Robots pruefen, damit nur gewollte Seiten indexierbar sind.
- Canonicals und OpenGraph pruefen, damit geteilte und indexierte Seiten korrekt wirken.
- hreflang nur verwenden, wenn die Sprachversionen zum Launch wirklich sauber sind.
- Kontaktwege pruefen: Telefon, WhatsApp, E-Mail, Kontaktformular, Pflichttexte und Fehlerzustand.
- Resend-/E-Mail-Konfiguration pruefen, falls das Formular zum Launch aktiv sein soll.
- Impressum, Datenschutz, AGB und fachliche Legal-/Trust-Texte pruefen.
- Mobile Darstellung, Desktop-Darstellung, Typografie, CTAs und Formularzustand pruefen.
- Technische Checks fuer den Launch ausfuehren.
- Deployment, Domain, produktive Env-Werte und Live-Smoke-Test planen.
- Rollback- oder Rueckzugsweg fuer den Launch festhalten.
- Post-Launch-Kontrolle festlegen.

### Gehoert nicht zu Version 1

- Supabase-Integration.
- Datei-Upload mit Speicherung.
- KI-Voranalyse.
- Kundenportal, Adminbereich oder Web-App-Funktionen.
- Datenbankstruktur, Authentifizierung oder interne Verwaltung.
- Neue Bezirksseiten.
- Neue einzelne SEO-Landingpages ohne eigene freigegebene Planung.
- Neue Dependencies oder Build-Konfigurationen ohne eigene Aufgabe.
- Vollautomatisierte digitale Schadenakte.

## Roadmap nach Launch

Diese Themen bleiben bewusst nach dem ersten Launch:

- Aufgabe 022: Supabase und Schaden-Upload planen.
- Aufgabe 023: KI-Voranalyse planen.
- Aufgabe 024: Kundenportal/Web-App fuer spaeter planen.
- Eigene SEO-Landingpages fuer Gutachtenarten erst nach gesonderter Inhalts-, SEO- und Routing-Freigabe.
- Bezirksseiten erst nach klarer SEO-Strategie und echter Inhaltsgrundlage.
- Ausbau der digitalen Schadenaufnahme erst nach eigener technischer und rechtlicher Planung.
- Vollstaendige Mehrsprachigkeit, falls Version 1 nicht direkt mit allen Sprachen sauber startet.

## Fehlende Tasks bis Version 1 / Launch

Diese Tasks werden hier nur als Vorschlag dokumentiert. Sie werden durch Aufgabe 028 nicht erstellt und nicht gestartet.

### 029 - SEO, Metadata und Structured Data fuer KFZ-Gutachten umsetzen

Ziel:

- Metadata, OpenGraph und Structured Data auf `KFZ-Gutachten Berlin` ausrichten.
- Alte falsche Leistungs- oder Werkstatt-Signale entfernen.
- Sitemap, Robots, Canonicals und gegebenenfalls hreflang pruefen.

Warum noetig:

- Die Homepage wurde inhaltlich umgestellt, aber die Suchmaschinen- und Sharing-Signale muessen dazu passen.

Nicht Teil davon:

- Keine alten Routen loeschen.
- Kein Deployment.
- Kein Upload, Supabase oder KI.

### 030 - Routing- und Redirect-Plan fuer alte Service-Routen klaeren

Ziel:

- Alte Service-Routen und alte Service-Seiten pruefen.
- Je Route entscheiden: weiterfuehren, ersetzen, redirecten, noindex, 404/410 oder spaeter umbauen.
- Navigation, Footer, Sitemap und interne Links mit der Entscheidung abgleichen.

Warum noetig:

- Alte Routen duerfen den neuen KFZ-Gutachten-Fokus nicht verwischen.

Nicht Teil davon:

- Keine blinde Loeschung.
- Kein Cleanup ohne vorherige Entscheidung.

### 031 - Kontakt, Formular, Resend, Datenschutz und Legal pruefen

Ziel:

- Kontaktformular und Kontaktwege fachlich und technisch pruefen.
- Resend-/E-Mail-Konfiguration klaeren, falls das Formular live gehen soll.
- Datenschutz, Impressum, AGB und Pflichttexte fuer den Launch pruefen.

Warum noetig:

- Ein Launch ist riskant, wenn Anfragen nicht ankommen oder rechtliche Texte nicht zum neuen Angebot passen.

Nicht Teil davon:

- Keine neue Upload-Funktion.
- Keine neue Formulararchitektur ohne eigene Freigabe.

### 032 - Sprach- und Launch-Scope entscheiden

Ziel:

- Festlegen, ob Version 1 nur Deutsch startet oder ob Englisch und Russisch mit live gehen.
- Falls Sprachen live bleiben: Inhalte, CTAs, Metadata, rechtliche Texte und hreflang pruefen.
- Falls Sprachen nicht live gehen: sauberen Umgang mit Routen, Links und Indexierung klaeren.

Warum noetig:

- Halb fertige Sprachversionen koennen Vertrauen, SEO und Conversion schwaechen.

Nicht Teil davon:

- Keine komplette Uebersetzungsumsetzung ohne eigene Freigabe.

### 033 - Launch-Quality-Check

Ziel:

- Technische Checks ausfuehren.
- Mobile, Desktop, Typografie, Accessibility, Performance, Conversion, Local SEO, Legal/Trust und Content-Konsistenz pruefen.
- Offene P0/P1/P2/P3-Punkte dokumentieren.

Warum noetig:

- Vor dem Launch muss klar sein, ob die Seite wirklich launchfaehig ist.

Nicht Teil davon:

- Der Check dokumentiert Befunde.
- Groessere Fixes brauchen eigene Freigabe oder eigene Tasks.

### 034 - Deployment- und Launch-Gate

Ziel:

- Produktivumgebung, Domain, Env-Werte, E-Mail-Versand, Build und Live-Smoke-Test pruefen.
- Launch-Freigabe vorbereiten.
- Rollback-Hinweis dokumentieren.

Warum noetig:

- Eine lokal gute Seite ist noch kein sicherer Launch.

Nicht Teil davon:

- Kein automatischer Launch ohne ausdrueckliche Freigabe.

### 035 - Post-Launch-Kontrolle

Ziel:

- Nach Launch pruefen, ob die Live-Seite erreichbar ist.
- Kontaktwege, Formular, Indexierungssignale, Console-Fehler und wichtigste Seiten kontrollieren.
- Kritische Nacharbeiten dokumentieren.

Warum noetig:

- Fehler fallen oft erst nach dem Livegang auf.

Nicht Teil davon:

- Keine Roadmap-Funktionen wie Upload, Supabase, KI oder Portal.

## Empfohlene Reihenfolge

1. Aufgabe 028 fertig ausarbeiten, reviewen und vom Nutzer freigeben lassen.
2. Aufgabe 029 starten: SEO, Metadata und Structured Data.
3. Aufgabe 030 starten: Routing-/Redirect-Plan fuer alte Service-Routen.
4. Aufgabe 031 starten: Kontakt, Formular, Resend, Datenschutz und Legal.
5. Aufgabe 032 starten: Sprach- und Launch-Scope.
6. Erst danach Aufgabe 026 Cleanup starten oder bei Bedarf vorher praezisieren.
7. Aufgabe 033 starten: Launch-Quality-Check.
8. Aufgabe 034 starten: Deployment- und Launch-Gate.
9. Aufgabe 035 nach dem Livegang starten: Post-Launch-Kontrolle.
10. Danach Roadmap-Themen 022, 023 und 024 separat planen.

## Entscheidung zu Aufgabe 026 Cleanup

Aufgabe 026 soll jetzt noch nicht starten.

Begruendung:

- Vorher muss klar sein, welche alten Routen bleiben, ersetzt oder weitergeleitet werden.
- Vorher muss klar sein, welche Metadata, Structured Data, Sitemap- und Canonical-Signale gebraucht werden.
- Vorher muss klar sein, welche Sprachversionen zum Launch aktiv bleiben.
- Vorher muss klar sein, welche Kontakt-, Legal- und Trust-Inhalte fuer Version 1 gelten.
- Erst danach kann sauber entschieden werden, welche Komponenten, Inhalte, Assets, Datenarrays, SEO-Texte oder Routen wirklich ungenutzt sind.

Aufgabe 026 darf sinnvoll starten, wenn die Tasks 029 bis 032 erledigt oder mindestens so weit entschieden sind, dass Cleanup keine Launch-relevanten Entscheidungen vorwegnimmt.

## Launch-Gate

Ein Launch darf erst empfohlen werden, wenn mindestens diese Punkte geprueft sind:

- Die Version-1-Seiten und die aktiven Sprachen sind eindeutig festgelegt.
- Alte nicht passende Leistungen sind nicht mehr sichtbar als aktives Angebot.
- SEO, Metadata, OpenGraph und Structured Data passen zum KFZ-Gutachten-Fokus.
- Sitemap, Robots, Canonicals und gegebenenfalls hreflang sind geprueft.
- Alte Service-Routen haben eine bewusste Entscheidung.
- Kontaktwege und Formular funktionieren oder sind bewusst deaktiviert.
- Datenschutz, Impressum, AGB und Pflichttexte passen zum Launch-Stand.
- Mobile und Desktop sind geprueft.
- `npm run lint`, `npx tsc --noEmit` und `npm run build` wurden erfolgreich ausgefuehrt oder Abweichungen sind dokumentiert und freigegeben.
- Produktive Env-Werte, E-Mail-Versand und Domain sind geprueft.
- Die Live-Seite wurde nach Deployment per Smoke-Test geprueft.
- Ein Rueckzugsweg oder Rollback-Hinweis ist bekannt.
- Die Post-Launch-Kontrolle ist eingeplant.
- Der Nutzer hat den Launch ausdruecklich freigegeben.

## Akzeptanzkriterien

- Es ist dokumentiert, was fuer Version 1 / ersten Launch noch fehlt.
- Es ist dokumentiert, was erst nach Launch Roadmap bleibt.
- Es ist geprueft, ob SEO-/Metadata-/Structured-Data-Umsetzung als eigener Task noetig ist.
- Es ist geprueft, ob Routing-/Redirect-Plan fuer alte Service-Routen als eigener Task noetig ist.
- Es ist geprueft, ob Kontaktformular-/Resend-/Datenschutz-/Legal-Pruefung als eigener Task noetig ist.
- Es ist geprueft, ob Sitemap, Robots, Canonicals, OpenGraph und ggf. hreflang vor Launch geprueft werden muessen.
- Es ist geprueft, ob ein Launch-Quality-Task noetig ist.
- Es ist geprueft, ob ein Deployment-/Launch-Gate noetig ist.
- Es ist festgelegt, ob 026 jetzt schon starten darf oder erst spaeter.
- Die empfohlenen Folge-Tasks 029 bis 035 sind nur dokumentiert und nicht erstellt.
- Die empfohlene Reihenfolge bis Launch ist dokumentiert.
- Das Launch-Gate ist als pruefbare Liste dokumentiert.
- 022, 023 und 024 werden nur als Roadmap-Themen eingeordnet und nicht gestartet.
- Keine Code-, UI-, Routing-, Asset-, Config-, Supabase-, Upload-, KI-, Dependency-, Env-, SEO-/Metadata- oder Structured-Data-Umsetzung erfolgt in Aufgabe 028.
- Aufgabe 028 erstellt nur die Roadmap/Planung und keine Umsetzungsdateien.

## Status

Status: in Arbeit
