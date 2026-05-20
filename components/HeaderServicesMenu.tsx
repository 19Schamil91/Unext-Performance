"use client"

/*
  Diese Datei zeigt das Leistungsmenue im Desktop-Kopfbereich.
  Sie oeffnet eine Linkliste zu den Leistungen und schliesst sie bei Auswahl.
  Nutzer koennen damit direkt zu einer Leistung oder zur Leistungsuebersicht wechseln.
*/
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { removeLocalePrefix } from "@/lib/i18n"

type HeaderServicesMenuProps = {
  name: string
  href: string
  childrenItems: readonly { name: string; href: string }[]
}

export function HeaderServicesMenu({ name, href, childrenItems }: HeaderServicesMenuProps) {
  // Dieser Wert steuert, ob das Leistungsmenue sichtbar ist.
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const servicesMenuRef = useRef<HTMLDivElement | null>(null)
  // Dieser Wert markiert den Leistungsbereich im Header, wenn der Nutzer dort ist.
  const pathname = usePathname()
  const currentPath = removeLocalePrefix(pathname)
  const isActive = currentPath === "/leistungen" || currentPath.startsWith("/leistungen/")

  // Dieser Ablauf schliesst das Leistungsmenue bei Klick ausserhalb oder Escape.
  useEffect(() => {
    if (!servicesMenuOpen) {
      return
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!servicesMenuRef.current?.contains(event.target as Node)) {
        setServicesMenuOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [servicesMenuOpen])

  return (
    <div ref={servicesMenuRef} className="relative">
      <button
        type="button"
        className={
          isActive
            ? "relative flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-semibold text-foreground transition-colors after:absolute after:inset-x-2 after:-bottom-1 after:h-px after:rounded-full after:bg-primary/80 hover:bg-accent/45"
            : "flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-medium text-foreground/72 transition-colors hover:bg-accent/45 hover:text-foreground"
        }
        aria-expanded={servicesMenuOpen}
        aria-current={isActive ? "page" : undefined}
        onClick={() => setServicesMenuOpen((open) => !open)}
      >
        {name}
        <ChevronDown className={`h-4 w-4 transition-transform ${servicesMenuOpen ? "rotate-180" : ""}`} />
      </button>

      {servicesMenuOpen ? (
        <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-2xl border border-border/70 bg-popover/98 p-1.5 shadow-[0_18px_40px_rgba(15,23,42,0.2)]">
          <Link
            href={href}
            className="block w-full rounded-lg px-3 py-2 text-sm font-semibold leading-5 text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            onClick={() => setServicesMenuOpen(false)}
          >
            {name}
          </Link>
          {childrenItems.map((child) => (
            <Link
              key={child.name}
              href={child.href}
              className="block w-full rounded-lg px-3 py-2 text-sm leading-5 text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              onClick={() => setServicesMenuOpen(false)}
            >
              {child.name}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}
