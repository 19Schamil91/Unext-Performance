# Routing

Status: Freigegeben als Basis fuer die naechsten Planungsaufgaben.

Grundlage: `specs/00-global-spec/global-spec.md`, `specs/01-functional-map/functional-map.md`, `specs/02-feature-specs/kfz-gutachten.md`, `specs/02-feature-specs/digitale-schadenaufnahme.md`, `specs/02-feature-specs/ki-voranalyse.md`, `specs/02-feature-specs/contact-flow.md`, `specs/02-feature-specs/seo.md`, `specs/02-feature-specs/faq.md`, `specs/02-feature-specs/mehrsprachigkeit.md` und `specs/03-technical-specs/frontend.md`.

## 1. Kurzueberblick / Executive Summary

Diese Spec beschreibt technische Routing-Leitplanken fuer den spaeteren Website-Rework.

Diese Aufgabe ist keine Code-Umsetzung. Es werden keine Code-, App-Router-, Pages-Router-, Middleware-, Sitemap-, Redirect- oder i18n-Dateien geaendert.

Routing muss die neue reine KFZ-Gutachten-Ausrichtung unterstuetzen.

Alte Autovermietung-, Mietwagen-, Werkstatt- oder Service-Routen duerfen nicht blind geloescht oder weiter als aktive Leistungen gefuehrt werden.

Mehrsprachigkeit, Landingpages, Redirects, Canonical, Hreflang und Sitemap werden erst nach Codebestand-Pruefung und Freigabe konkret umgesetzt.

## 2. Version 1 und Zielversion

### Version 1 / erste veroeffentlichbare Website

Version 1 umfasst technisch als Planungsgrundlage:

- eine starke Hauptseite fuer `KFZ-Gutachten Berlin`
- Gutachtenarten als Abschnitte auf der Hauptseite
- Kontakt, FAQ, Standort, Datenschutz und Impressum erreichbar
- keine sofortigen Landingpages ohne Freigabe
- Formularroute nur, wenn Formular umgesetzt und freigegeben ist
- keine Upload-/Supabase-/KI-Routen als live
- keine Admin-/Portal-Routen als live

### Zielversion / Roadmap

Die Zielversion kann spaeter umfassen:

- moegliche spaetere Landingpages fuer Gutachtenarten
- moegliche spaetere digitale Schadenaufnahme / Upload-Route
- moegliche spaetere Admin-/Portal-Routen
- moegliche spaetere mehrsprachige Locale-Struktur
- Redirect-/Sitemap-/Canonical-/Hreflang-Strategie nach Pruefung

Roadmap-Funktionen duerfen nicht als Bestandteil von Version 1 dargestellt werden.

## 3. Bestehende Routing-Struktur zuerst pruefen

Vor Routing-Aenderungen muss geprueft werden:

- vorhandene Routing-Technologie: App Router, Pages Router oder andere Struktur
- vorhandene Routen
- vorhandene dynamische Routen
- vorhandene Redirects/Rewrites
- vorhandene Middleware
- vorhandene Sitemap-/Robots-Konfiguration
- vorhandene Metadata-/Canonical-Struktur
- vorhandene Locale-/i18n-Struktur
- vorhandene alte Leistungsseiten/Routen
- interne Links und Navigation
- Footer-Links
- indexierte oder potenziell indexierte URLs

Keine Route darf blind geloescht, umbenannt oder umgeleitet werden, ohne vorherige Pruefung.

## 4. Hauptseiten-Strategie

Version 1 fokussiert auf eine starke Hauptseite.

Hauptthema:

```text
KFZ-Gutachten Berlin
```

Gutachtenarten wie Unfallgutachten, Schadengutachten, Wertgutachten/Fahrzeugbewertung und Beweissicherung werden zunaechst als Abschnitte der Hauptseite geplant.

Die konkrete Hauptseiten-URL ist offen und wird erst nach Bestandsaufnahme, SEO-Pruefung und Routing-Freigabe festgelegt.

Moegliche Varianten wie `/`, `/kfz-gutachten-berlin` oder andere Routen duerfen nicht ohne Routing- und SEO-Freigabe umgesetzt werden.

Die Hauptseiten-URL muss zur neuen Ausrichtung `KFZ-Gutachten Berlin`, zur SEO-Spec, zur bestehenden Routing-Struktur und zu moeglichen alten indexierten URLs passen.

Eigene Landingpages entstehen erst spaeter nach SEO-Plan, Routing-Plan, Content-Plan und Freigabe.

Keine kuenstlichen Keyword-Dopplungen durch mehrere fast gleiche Seiten.

## 5. Moegliche spaetere Landingpages

Moegliche spaetere Landingpages als Roadmap, nicht als sofortige Umsetzung:

- `/unfallgutachten-berlin`
- `/schadengutachten-berlin`
- `/wertgutachten-berlin`
- `/fahrzeugbewertung-berlin`
- `/digitale-schadenaufnahme`

Landingpages duerfen nur bestaetigte Gutachtenarten behandeln.

Landingpages duerfen keine Inhalte duplizieren.

Landingpages brauchen eigene Content-, SEO- und Routing-Freigabe.

`digitale-schadenaufnahme` darf nicht automatisch Upload bedeuten.

## 6. Alte Routen / Nicht-Scope

Alte oder vorhandene Routen zu folgenden Themen duerfen nicht als aktive Leistungen bestehen bleiben:

- Autovermietung
- Mietwagen
- Ersatzwagen
- Fahrzeugservice
- Autoservice
- Werkstatt
- Service rund ums Fahrzeug
- Reifenservice
- Reifenwechsel
- Dashcam-Einbau
- Zulassungsservice
- Abschleppdienst
- Pannenhilfe
- Fahrzeugaufbereitung
- Detailing

Alte Routen duerfen nicht blind geloescht werden.

Vor einer Entscheidung muss geprueft werden, ob alte Routen existieren, intern verlinkt sind, indexiert sein koennten oder Traffic haben.

Der Umgang wird spaeter entschieden: entfernen, redirecten, noindex, 410, ersetzen oder bereinigen.

Keine alten Nicht-Scope-Routen duerfen in Navigation, Footer, Sitemap oder strukturierte Daten aufgenommen werden.

Keine alten Nicht-Scope-Routen duerfen als aktive SEO-Ziele behalten werden.

## 7. Kontakt-, Formular- und Anfrage-Routing

Telefon, WhatsApp und E-Mail brauchen keine eigene Route.

Ein Formular oder eine Anfrage-Route darf nur erstellt oder verlinkt werden, wenn das Formular umgesetzt und freigegeben ist.

Wenn kein Formular freigegeben ist, muessen CTAs auf Telefon, WhatsApp, E-Mail oder andere freigegebene Kontaktwege ausweichen.

Keine Formularroute darf als live dargestellt werden, solange sie nicht umgesetzt und freigegeben ist.

Routen, Slugs und Navigation duerfen keine Rueckmeldefrist-, Sofortdienst- oder Schadenhoehenversprechen erzeugen.

## 8. Upload, Supabase, KI, Admin und Portal Routing

Keine Upload-Route darf ohne freigegebene Upload-/Supabase-Spec, Datenschutzpruefung, technischen Umsetzungsplan, Workflow-Aufgabe und ausdrueckliche Freigabe erstellt werden.

Diese Spec beschreibt keine Supabase- oder KI-Routen.

Keine KI-Ergebnis-, KI-Gutachten- oder automatische Bewertungsroute darf erstellt oder geplant als live dargestellt werden.

Keine Admin- oder Portal-Route darf ohne eigene Technical Spec und Freigabe erstellt werden.

Roadmap-Routen duerfen nicht sichtbar, nicht verlinkt, nicht indexierbar und nicht in die Sitemap aufgenommen werden, solange sie nicht freigegeben sind.

## 9. Mehrsprachiges Routing

Keine neue technische i18n- oder Locale-Struktur darf ohne eigene Technical Spec und Freigabe umgesetzt werden.

Eine bestehende Mehrsprachigkeitsstruktur muss zuerst geprueft und moeglichst wiederverwendet werden.

Nicht freigegebene Sprachversionen duerfen nicht ueber Route, Navigation, Sprachumschalter, Sitemap, interne Links oder Suchmaschinenindexierung erreichbar sein.

Hreflang und Canonical muessen pro Sprache spaeter gesondert geplant werden.

Deutsch ist die fachliche Referenz.

Keine Sprachversion darf mehr versprechen als Deutsch.

## 10. SEO, Canonical, Hreflang und Sitemap

Routing muss mit der SEO-Spec uebereinstimmen.

Canonical-Regeln werden erst nach Routenentscheidung festgelegt.

Hreflang wird erst nach freigegebenen Sprachversionen eingesetzt.

Die Sitemap darf nur freigegebene, sichtbare und indexierbare Routen enthalten.

Keine alten Nicht-Scope-Routen duerfen in die Sitemap aufgenommen werden.

Keine Roadmap-Routen duerfen in die Sitemap aufgenommen werden, solange sie nicht live sind.

`FAQPage` und strukturierte Daten duerfen nur auf Routen mit sichtbaren, freigegebenen Inhalten verwendet werden.

Keine Review- oder Bewertungs-strukturierten Daten ohne ausdrueckliche Freigabe.

## 11. Redirects, 404, 410 und Cleanup

Die Redirect-Strategie wird erst nach Bestandsaufnahme alter Routen festgelegt.

Redirects duerfen nur gesetzt werden, wenn Zielseite, Suchintention und fachlicher Inhalt sinnvoll zusammenpassen.

Keine massenhaften Redirects ohne vorherige Bestandsaufnahme, SEO-Pruefung, Routing-Plan und ausdrueckliche Freigabe.

Alte Routen koennen je nach Pruefung entfernt, weitergeleitet, noindexed oder mit 410 behandelt werden.

Die Entscheidung haengt von bestehender Nutzung, interner Verlinkung, SEO-Risiko und fachlichem Scope ab.

Keine Weiterleitungen auf unpassende Inhalte.

Alte Service-, Mietwagen-, Werkstatt-, Abschleppdienst-, Reifenservice- oder Autovermietungs-Routen duerfen nicht automatisch auf neue KFZ-Gutachten-Seiten umgeleitet werden, wenn dadurch eine irrefuehrende Suchintention entsteht.

Wenn keine passende Zielseite existiert, muessen Alternativen wie 404, 410, noindex oder spaetere Content-Bereinigung geprueft werden.

## 12. Navigation, Footer und interne Links

Navigation und Footer duerfen nur freigegebene aktive Inhalte verlinken.

Impressum und Datenschutz muessen dauerhaft erreichbar, intern verlinkt und technisch stabil bleiben.

Sie duerfen nicht versehentlich durch Redirects, noindex, Middleware, Locale-Regeln oder Sitemap-/Robots-Aenderungen unzugaenglich gemacht werden.

Aenderungen an Datenschutz- oder Impressumsrouten duerfen nur nach Pruefung und Freigabe erfolgen.

Keine alten Nicht-Scope-Leistungen duerfen in Navigation oder Footer verlinkt werden.

Keine Upload-, Supabase-, KI-, Admin- oder Portal-Links duerfen ohne Freigabe angezeigt werden.

Ein Sprachumschalter darf nur fuer freigegebene Sprachversionen angezeigt werden.

Interne Links muessen mit der Seitenstrategie uebereinstimmen.

## 13. Pruefungen vor und nach Routing-Umsetzung

Vor spaeterer Routing-Umsetzung muss geprueft werden:

- Routing-Technologie
- Routenbestand
- interne Links
- Navigation/Footer
- alte Nicht-Scope-Routen
- moegliche indexierte URLs
- Sitemap/Robots
- Metadata/Canonical
- Mehrsprachigkeit/i18n
- Search-Console- oder Analytics-Daten, falls vorhanden
- Datenschutz-/Impressum-Erreichbarkeit
- Formular-/Upload-/Admin-/Portal-Status
- Redirect-Risiken

Die Pruefung muss vor groesseren Routing-Aenderungen dokumentiert oder im jeweiligen Umsetzungsplan nachvollziehbar sein.

Nach spaeteren Routing-, Redirect-, Sitemap-, Robots-, Metadata- oder i18n-Aenderungen muessen passende Checks ausgefuehrt werden, zum Beispiel:

- `git diff --check -- <betroffene Dateien>`
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

Wenn ein Check nicht ausgefuehrt werden kann oder fehlschlaegt, muss der Grund klar dokumentiert werden.

Zusaetzlich muessen betroffene Routen, interne Links, Canonical-/Hreflang-Ausgaben, Sitemap/Robots und wichtige Kontakt-/Rechtsseiten manuell oder mit passenden Reviewern geprueft werden.

Checks ersetzen nicht die fachliche Pruefung und nicht die ausdrueckliche Freigabe durch den Nutzer.

## 14. Grenzen / Nicht-Scope dieser Spec

Diese Spec ist keine:

- Code-Umsetzung
- Route-Erstellung
- Route-Loeschung
- Redirect-Implementierung
- Middleware-Implementierung
- Sitemap-Implementierung
- Robots-Implementierung
- i18n-/Locale-Implementierung
- Supabase-Integration
- KI-Integration
- Upload-Implementierung
- Admin-/Portal-Implementierung

## 15. Offene Entscheidungen

Offen bleiben:

- tatsaechliche aktuelle Routing-Struktur
- Hauptseiten-URL
- spaetere Landingpages
- Umgang mit alten Routen
- Redirect-, noindex-, 404- oder 410-Strategie
- mehrsprachige Locale-Struktur
- Canonical-/Hreflang-Regeln
- Sitemap-/Robots-Strategie
- Formularroute
- Upload-/Supabase-/KI-Routen
- Admin-/Portal-Routen
- Datenschutz-/Impressum-Routen, falls noch nicht stabil
- technische Umsetzung nach Codebestand-Pruefung
