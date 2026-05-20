"use client"

/*
  Diese Datei zeigt einen einzelnen Desktop-Link im Kopfbereich.
  Sie erkennt die aktuelle Seite und hebt den passenden Navigationspunkt dezent hervor.
  Nutzer sehen dadurch schneller, auf welcher Hauptseite sie sich befinden.
*/
import Link from "next/link"
import { usePathname } from "next/navigation"
import { removeLocalePrefix } from "@/lib/i18n"

type HeaderPageLinkProps = {
  name: string
  href: string
}

export function HeaderPageLink({ name, href }: HeaderPageLinkProps) {
  // Dieser Wert kommt aus der aktuellen Browser-URL und bestimmt den aktiven Navigationspunkt.
  const pathname = usePathname()
  const currentPath = removeLocalePrefix(pathname)
  const targetPath = removeLocalePrefix(href)
  const isActive = currentPath === targetPath

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={
        isActive
          ? "relative rounded-lg px-2 py-1 text-sm font-semibold text-foreground transition-colors after:absolute after:inset-x-2 after:-bottom-1 after:h-px after:rounded-full after:bg-primary/80 hover:bg-accent/45"
          : "rounded-lg px-2 py-1 text-sm font-medium text-foreground/72 transition-colors hover:bg-accent/45 hover:text-foreground"
      }
    >
      {name}
    </Link>
  )
}
