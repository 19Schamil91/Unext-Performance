# Aufgabe 038 - Specs fuer Trust- und Zertifizierungsnachweis aktualisieren

## Ziel

Die freigegebenen Projektspecs so aktualisieren, dass der gepruefte Trust- und Zertifizierungsnachweis sicher in Version 1 verwendet werden kann.

## Kontext

Aufgabe 036 hat die belegbare Zertifikatsaussage dokumentiert und empfohlen, die Specs zu aktualisieren, bevor Aufgabe 029 mit SEO-, Metadata- oder Structured-Data-Arbeit fortgesetzt wird.

Der Zertifizierungsnachweis muss vorsichtig behandelt werden:

- keine DESAG-Logo-Nutzung
- keine nicht belegbaren Mitgliedschaftsaussagen
- keine uebertriebenen Werbeaussagen
- nur belegbare Formulierungen aus dem Zertifikat
- sichtbare Website-Texte muessen echte deutsche Umlaute verwenden

Die bevorzugte sichere Website-Formulierung ist:

`Geprüfter und anerkannter Sachverständiger für Schäden an Kraftfahrzeugen und Wertermittlung.`

029 bleibt pausiert, bis diese Aufgabe erledigt ist oder entschieden wurde, dass die Anerkennung nicht in SEO/Metadata/Structured Data einfliesst.

## Vorgehen

- Aufgabe 036 lesen.
- Die in Aufgabe 036 benannten betroffenen Specs pruefen.
- Die relevanten Specs mit den freigegebenen Trust-/Zertifizierungsregeln aktualisieren.
- Dokumentieren, wo der Vertrauenssatz auf der Startseite erscheinen darf.
- Dokumentieren, wie Zertifikat/Nachweis fuer die Ueber-uns-Seite eingeplant werden darf.
- Dokumentieren, dass kein DESAG-Logo verwendet wird, solange keine Nutzungsrechte ausdruecklich geklaert sind.
- Dokumentieren, dass keine nicht belegbare aktive Mitgliedschaft behauptet wird.
- SEO-/Metadata-/Structured-Data-Grenzen fuer Aufgabe 029 dokumentieren.
- Keinen Website-Code aendern.
- Keine Assets hinzufuegen.
- Das Zertifikat nicht visuell umsetzen.

## Akzeptanzkriterien

- Die betroffenen Specs aus Aufgabe 036 sind geprueft.
- Die freigegebene Trust-/Zertifizierungsformulierung ist in den passenden Specs ergaenzt.
- Die Startseiten-Nutzung ist als kurzer Vertrauenssatz spezifiziert.
- Die Ueber-uns-Nutzung ist als Nachweis-/Zertifikatsbereich nur nach Rechts-/Datenschutzpruefung spezifiziert.
- DESAG-Logo-Nutzung ist ausdruecklich ausgeschlossen, solange keine Nutzungsrechte bestaetigt sind.
- Nicht belegbare Mitgliedschaftsaussagen sind ausdruecklich ausgeschlossen.
- SEO-/Metadata-/Structured-Data-Grenzen fuer Aufgabe 029 sind dokumentiert.
- Anforderungen an sichtbare deutsche Website-Texte enthalten echte Umlaute.
- Kein Website-Code wurde geaendert.
- Keine Assets wurden hinzugefuegt.
- Keine SEO-, Metadata- oder Structured-Data-Dateien wurden geaendert.
- Aufgabe 029 wurde nicht gestartet.
- Aufgabe 037 wurde nicht gestartet.

## Umgesetzte Spec-Aktualisierung

Aktualisierte Specs:

- `specs/00-global-spec/global-spec.md`
- `specs/01-functional-map/functional-map.md`
- `specs/02-feature-specs/kfz-gutachten.md`
- `specs/04-visual-rules/visual-rules.md`
- `specs/06-work-plans/launch-readiness.md`
- `specs/02-feature-specs/seo.md`

Ergänzte Regeln:

- Die Anerkennung aus Aufgabe 036 ist als Trust-Merkmal für Version 1 eingeordnet.
- Die sichere sichtbare Website-Formulierung wurde in den passenden Specs dokumentiert: `Geprüfter und anerkannter Sachverständiger für Schäden an Kraftfahrzeugen und Wertermittlung.`
- Die Startseiten-Nutzung wurde als kurzer, sachlicher Vertrauenssatz spezifiziert.
- Die Über-uns-Nutzung wurde als Abschnitt `Qualifikation & Anerkennung` mit vorheriger Rechte-, Datenschutz- und Sichtbarkeitsprüfung für Urkunde/Zertifikat spezifiziert.
- DESAG-Logo, separate Siegel, Badges und werbliche Zertifikatsgrafiken bleiben ohne geklärte Nutzungsrechte ausgeschlossen.
- Nicht belegbare Mitgliedschafts-, Partner-, Amts-, Vereidigungs-, staatliche Prüfungs- und Superlativ-Aussagen bleiben ausgeschlossen.
- SEO-, Metadata-, OpenGraph- und Structured-Data-Grenzen für Aufgabe 029 wurden dokumentiert.
- Fortbildungs-/Weiterbildungsregeln wurden ergänzt: nur belegte Fortbildungen, getrennt von Zertifizierung/Anerkennung/Sachverständigenstatus, ohne pauschale Kompetenzsteigerungen oder erfundene Qualitätsversprechen.
- Software-Schulungen wie `autoiXpert` wurden als öffentliches Trust-/Zertifizierungsmerkmal, Credential, Siegel, Badge, Trust-Logo und Structured-Data-Signal ausgeschlossen.
- Aufgabe 029 bleibt pausiert, bis 038 geprüft und abgeschlossen ist oder entschieden wurde, dass die Anerkennung nicht in SEO/Metadata/Structured Data einfliesst.

Nicht geaendert:

- Kein Code.
- Keine Website-Dateien.
- Keine Assets.
- Keine SEO-/Metadata-/Structured-Data-Umsetzungsdateien.
- `next-env.d.ts` aus dem Scope entfernt.
- Keine neue Task-Datei.
- Aufgabe 029 wurde nicht gestartet.
- Aufgabe 037 wurde nicht gestartet.

## Status

Status: in Arbeit
