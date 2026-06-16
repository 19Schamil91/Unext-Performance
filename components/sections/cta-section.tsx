/*
  Diese Datei definiert den gemeinsamen abschliessenden Kontaktbereich.
  Sie zeigt eine kurze Frage, einen Beratungshinweis und direkte Kontaktaktionen.
  Nutzer koennen direkt anrufen, WhatsApp oeffnen oder zur Kontaktseite wechseln.
*/
import Link from "next/link"
import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getLocalizedPath, type Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

export type CtaAction = {
  label: string
  href: string
  icon?: "phone" | "message"
  external?: boolean
}

function renderDescriptionLines(text: string) {
  return text.split("\n").map((line, index) => (
    <span key={`${line}-${index}`} className="block">
      {line}
    </span>
  ))
}

type Props = {
  locale: Locale
  actions?: readonly CtaAction[]
  title?: string
  description?: string
  note?: string
}

export function CtaSection({ locale, actions, title, description, note }: Props) {
  // Dieser Bereich nutzt auf allen Seiten denselben Abschluss und laesst nur die Kontaktziele austauschbar.
  const t = getTranslations(locale).serviceDetail.layout
  const contactHref = getLocalizedPath(locale, "/kontakt")

  const defaultActions = [
    { label: "030 23613927", href: "tel:+493023613927", icon: "phone" as const },
    {
      label: "WhatsApp",
      href: "https://wa.me/4917664365185",
      icon: "message" as const,
      external: true,
    },
    { label: t.contactCta, href: contactHref },
  ] satisfies readonly CtaAction[]

  const resolvedActions = actions ?? defaultActions

  const renderAction = (action: CtaAction, index: number) => {
    const icon =
      action.icon === "phone" ? (
        <Phone className="h-5 w-5" />
      ) : action.icon === "message" ? (
        <MessageCircle className="h-5 w-5" />
      ) : null

    const content = (
      <>
        {icon}
        <span className="button-text-wrap">{action.label}</span>
      </>
    )

    const className =
      index === 0
        ? "w-full gap-2 bg-white font-semibold text-primary shadow-[0_16px_34px_rgba(15,23,42,0.28)] hover:bg-white/92 hover:text-primary"
        : "w-full gap-2 border-white/15 bg-black/10 font-semibold text-white hover:bg-white/12 hover:text-white"

    return (
      <Button
        key={`${action.href}-${action.label}`}
        asChild
        size="lg"
        variant={index === 0 ? "secondary" : "outline"}
        className={className}
      >
        {action.external ? (
          <a href={action.href} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        ) : action.href.startsWith("/") ? (
          <Link href={action.href}>{content}</Link>
        ) : (
          <a href={action.href}>{content}</a>
        )}
      </Button>
    )
  }

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#10090b] py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(82,8,16,0.82),rgba(32,8,12,0.72)_42%,rgba(9,11,14,0.96)_78%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-[30rem] text-heading-fluid font-semibold text-primary-foreground lg:max-w-none lg:text-[clamp(2rem,2.25vw,2.65rem)] lg:leading-[1.08] lg:whitespace-nowrap">
              {title ?? t.questionsTitle}
            </h2>
            <p className="mt-4 measure-intro text-body-fluid text-primary-foreground/86">
              {renderDescriptionLines(description ?? t.questionsDescription)}
            </p>
          </div>

          <div className="flex w-full max-w-[28rem] flex-col gap-3 lg:shrink-0">
            {resolvedActions.map((action, index) => renderAction(action, index))}
          </div>
        </div>
        {note && (
          <p className="mx-auto mt-4 max-w-[62ch] text-sm leading-7 text-primary-foreground/80">
            {note}
          </p>
        )}
      </div>
    </section>
  )
}
