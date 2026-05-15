"use client"

/*
  Diese Datei zeigt den Sprachwechsel im Desktop-Kopfbereich.
  Sie oeffnet ein kleines Sprachmenue und navigiert zur passenden Sprach-URL.
  Nutzer koennen damit zwischen Deutsch, Englisch und Russisch wechseln.
*/
import { useEffect, useRef, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getLocalizedPath, removeLocalePrefix, type Locale } from "@/lib/i18n"

type HeaderLanguageSwitcherProps = {
  locale: Locale
  languages: readonly { code: Locale; name: string }[]
  localizedPagePaths: readonly string[]
}

export function HeaderLanguageSwitcher({
  locale,
  languages,
  localizedPagePaths,
}: HeaderLanguageSwitcherProps) {
  // Diese Werte steuern das Sprachmenue und sperren es kurz waehrend der Navigation.
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const languageMenuRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  // Dieser Ablauf schliesst das Sprachmenue bei Klick ausserhalb oder Escape.
  useEffect(() => {
    if (!languageMenuOpen) {
      return
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!languageMenuRef.current?.contains(event.target as Node)) {
        setLanguageMenuOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLanguageMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [languageMenuOpen])

  // Diese Funktion wechselt auf migrierten Seiten pfadtreu und sonst zur Sprach-Startseite.
  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      setLanguageMenuOpen(false)
      return
    }

    const currentPath = removeLocalePrefix(pathname)
    const isLocalizedPagePath = localizedPagePaths.includes(currentPath)
    const nextPath = getLocalizedPath(
      nextLocale,
      currentPath === "/" || isLocalizedPagePath ? currentPath : "/"
    )

    setIsPending(true)
    setLanguageMenuOpen(false)
    router.push(nextPath)
  }

  return (
    <div ref={languageMenuRef} className="relative hidden sm:block">
      <Button
        variant="ghost"
        size="sm"
        className="gap-2 rounded-full border border-border/75 bg-card/90 px-3 shadow-sm"
        aria-expanded={languageMenuOpen}
        disabled={isPending}
        onClick={() => setLanguageMenuOpen((open) => !open)}
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase">{locale}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${languageMenuOpen ? "rotate-180" : ""}`} />
      </Button>

      {languageMenuOpen ? (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[11rem] rounded-2xl border border-border/70 bg-popover/98 p-1.5 shadow-[0_18px_40px_rgba(15,23,42,0.2)]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              className="flex w-full items-center rounded-lg px-3 py-2 text-left text-sm leading-5 text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
              disabled={isPending}
              onClick={() => handleLocaleChange(lang.code)}
            >
              {lang.name}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
