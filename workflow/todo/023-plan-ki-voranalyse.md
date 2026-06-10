# Aufgabe 023 - KI-Voranalyse planen

## Ziel

Die KI-Voranalyse fachlich, rechtlich und technisch planen.

## Kontext

Die KI soll spaeter die digitale Schadenaufnahme und interne Voranalyse unterstuetzen. Sie ersetzt kein Gutachten. Die finale Bewertung erfolgt immer durch einen Gutachter.

## Vorgehen

- KI-Kommunikationsgrenzen aus den Specs pruefen.
- Grundlage der Voranalyse planen: hochgeladene Schadenbilder, Anfrage- und Fahrzeugdaten aus Supabase.
- Interne Analyse planen: sichtbare Schadenbereiche beschreiben, fehlende Perspektiven erkennen, Bildqualitaet bewerten und strukturierte Zusammenfassung fuer den Gutachter vorbereiten.
- Ausschluesse dokumentieren: keine finale Schadenhoehe, kein vollstaendiges Gutachten, keine rechtlich verbindliche Bewertung.
- Speicherung der KI-Ergebnisse in Supabase planen.
- Sichtbarkeit zunaechst intern fuer den Gutachter planen.
- Kundensichtbare KI-Hinweise nur nach gesonderter Freigabe vorsehen.
- Erste moegliche Umsetzung mit OpenAI Vision API als Option dokumentieren.
- Austauschbare KI-Schicht planen, zum Beispiel `/lib/ai/analyzeVehicleDamage.ts`.
- Datenschutz, Einwilligung und Disclaimer planen.

## Akzeptanzkriterien

- Es wurde keine KI-Integration umgesetzt.
- KI wird nur als unterstuetzende Voranalyse geplant.
- Die finale Bewertung bleibt beim Gutachter.
- Anbieter werden nicht ueberall hart verdrahtet.
- Solange KI technisch nicht umgesetzt ist, wird nur geplante KI-Unterstuetzung oder geplante KI-Voranalyse kommuniziert.
- Erst nach technischer Umsetzung darf von KI-gestuetzter Voranalyse gesprochen werden.

## Status

Status: offen
