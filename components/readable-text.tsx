/*
  Diese Datei stellt einen gut lesbaren Textabschnitt bereit.
  Sie zeigt vorhandenen Text als normalen Fliesstext ohne erzwungene Zeilenumbrueche.
  Besucher koennen den Text mit natuerlichem Browser-Umbruch lesen.
*/

type ReadableTextProps = {
  text: string
  className: string
}

export function ReadableText({
  text,
  className,
}: ReadableTextProps) {
  return <p className={className}>{text}</p>
}
