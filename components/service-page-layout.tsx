/*
  Diese Datei stellt das gemeinsame Layout fuer einzelne Leistungsseiten bereit.
  Sie zeigt Hero-Bereich, Vorteile, Servicekarten, Gruende, Formular und Fragen.
  Besucher koennen Informationen lesen und direkt Kontakt aufnehmen.
*/
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, MessageCircle, Phone } from "lucide-react"
import { ReadableText } from "@/components/readable-text"
import { CtaSection } from "@/components/sections/cta-section"
import { StructuredData } from "@/components/StructuredData"
import { Button } from "@/components/ui/button"
import {
  ServiceInquiryForm,
  type ServiceInquiryFields,
  type ServiceInquiryTextOverrides,
} from "@/components/service-inquiry-form"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getLocalizedPath, type Locale } from "@/lib/i18n"
import { buildBreadcrumbSchema, buildServiceSchema } from "@/lib/structuredData"
import { getTranslations } from "@/lib/translations"

export type ServicePageLayoutProps = {
  locale: Locale
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt?: string
  imageClassName?: string
  phone?: string
  heroActions?: readonly ServiceAction[]
  bottomActions?: readonly ServiceAction[]
  heroNotice?: string
  serviceNote?: ServiceDetailCard
  backLinkHref?: string
  servicePath?: string
  detailSections?: readonly ServiceDetailSection[]
  layoutLabels?: ServicePageLayoutLabels
  benefits: readonly string[]
  services: readonly { title: string; description: string }[]
  servicesDescription?: string
  servicesGridClassName?: string
  whyChoose: readonly { title: string; description: string }[]
  faqs?: readonly { question: string; answer: string }[]
  formTitle: string
  ctaTitle?: string
  ctaDescription?: string
  serviceName: string
  badge?: string
  formFields?: ServiceInquiryFields
  formTextOverrides?: ServiceInquiryTextOverrides
  formHelperText?: string
  balancedTypography?: boolean
  singleLineHeadings?: boolean
  titleLines?: readonly string[]
  descriptionLines?: readonly string[]
  serviceTitleLineBreaks?: Readonly<Record<string, readonly string[]>>
  whyChooseTitleLineBreaks?: Readonly<Record<string, readonly string[]>>
  /** Hero-Benefit-Liste: jeder Punkt eine Zeile (kein Textumbruch im Label). */
  benefitsSingleLine?: boolean
}

type ServiceAction = {
  label: string
  href: string
  icon?: "phone" | "message"
  external?: boolean
}
type ServiceDetailCard = {
  title: string
  description: string
}

type ServiceDetailSection = {
  title: string
  description?: string
  items: readonly ServiceDetailCard[]
  wide?: boolean
}

type ServicePageLayoutLabels = Partial<{
  backToServices: string
  servicesTitle: string
  whyTitle: string
  whyDescription: string
  faqTitle: string
  contactCta: string
}>

export async function ServicePageLayout({
  locale,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  imageClassName,
  phone,
  heroActions,
  bottomActions,
  heroNotice,
  serviceNote,
  backLinkHref,
  servicePath: explicitServicePath,
  detailSections,
  layoutLabels,
  benefits,
  services,
  servicesDescription,
  servicesGridClassName,
  whyChoose,
  faqs,
  formTitle,
  ctaTitle,
  ctaDescription,
  serviceName,
  badge,
  formFields,
  formTextOverrides,
  formHelperText,
  balancedTypography = false,
  titleLines,
  descriptionLines,
  serviceTitleLineBreaks,
  whyChooseTitleLineBreaks,
  benefitsSingleLine = false,
}: ServicePageLayoutProps) {
  const translations = getTranslations(locale)
  const t = { ...translations.serviceDetail.layout, ...layoutLabels }
  const inquiryId = `${serviceName}-anfrage`
  const contactHref = getLocalizedPath(locale, "/kontakt")
  const servicesHref = getLocalizedPath(locale, "/leistungen")
  const resolvedBackLinkHref = backLinkHref ?? servicesHref

  const defaultHeroActions = phone
    ? [
        { label: phone, href: `tel:${phone.replace(/\s/g, "")}`, icon: "phone" as const },
        {
          label: "WhatsApp",
          href: `https://wa.me/49${phone.replace(/\s/g, "").replace(/^0/, "")}`,
          icon: "message" as const,
          external: true,
        },
      ]
    : []

  const defaultBottomActions = phone
    ? [
        { label: phone, href: `tel:${phone.replace(/\s/g, "")}`, icon: "phone" as const },
        {
          label: "WhatsApp",
          href: `https://wa.me/49${phone.replace(/\s/g, "").replace(/^0/, "")}`,
          icon: "message" as const,
          external: true,
        },
        { label: t.contactCta, href: contactHref },
      ]
    : [{ label: t.contactCta, href: contactHref }]

  const resolvedHeroActions = heroActions ?? defaultHeroActions
  const resolvedBottomActions = bottomActions ?? defaultBottomActions
  // Lange deutsche und russische Hero-Titel bekommen mobil mehr Zeilenbreite, ohne die Desktop-Groesse zu veraendern.
  const heroTitleClassName =
    locale === "ru" || locale === "de"
      ? "mt-2 measure-heading text-heading-fluid font-semibold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.42)] md:mt-3 md:measure-display md:text-display-fluid"
      : "mt-2 measure-display text-heading-fluid font-semibold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.42)] md:mt-3 md:text-display-fluid"
  const fallbackServicePath =
    serviceName === "abschleppdienst"
      ? "/leistungen/abschleppdienst-pannenhilfe"
      : `/leistungen/${serviceName}`
  const localizedServicePath = getLocalizedPath(locale, explicitServicePath ?? fallbackServicePath)

  const renderLines = (text: string, lines?: readonly string[]) => {
    if (!lines || lines.length === 0) {
      return text
    }

    return lines.map((line, index) => (
      <span key={`${text}-${line}-${index}`} className="block">
        {line}
      </span>
    ))
  }

  const renderAction = (
    action: ServiceAction,
    variant: "default" | "outline" | "secondary",
    className?: string
  ) => {
    const isPhoneAction = action.icon === "phone"
    const label = isPhoneAction ? (
      <span className="transition-colors duration-300 group-hover:text-primary">{action.label}</span>
    ) : (
      action.label
    )
    const icon =
      isPhoneAction ? (
        <Phone className="h-5 w-5 transition-transform duration-300 ease-out group-hover:-rotate-12 group-hover:scale-110" />
      ) : action.icon === "message" ? (
        <MessageCircle className="h-5 w-5" />
      ) : null

    const actionClassName = [
      isPhoneAction
        ? "group transition-all duration-300 hover:-translate-y-0.5 hover:!border-primary/55 hover:!bg-primary/12 hover:!text-foreground"
        : "",
      className,
    ]
      .filter(Boolean)
      .join(" ")

    const contentClassName = isPhoneAction ? "group gap-2" : "gap-2"

    const content = (
      <>
        {icon}
        {label}
      </>
    )

    return (
      <Button asChild size="lg" variant={variant} className={actionClassName}>
        {action.external ? (
          <a href={action.href} target="_blank" rel="noopener noreferrer" className={contentClassName}>
            {content}
          </a>
        ) : action.href.startsWith("/") ? (
          <Link href={action.href} className={contentClassName}>
            {content}
          </Link>
        ) : (
          <a href={action.href} className={contentClassName}>
            {content}
          </a>
        )}
      </Button>
    )
  }

  return (
    <main>
      <StructuredData
        data={[
          buildServiceSchema({
            name: title,
            description,
            path: localizedServicePath,
          }),
          buildBreadcrumbSchema([
            { name: translations.header.navigation[0].name, path: getLocalizedPath(locale, "/") },
            { name: translations.servicesPage.title, path: servicesHref },
            { name: title, path: localizedServicePath },
          ]),
        ]}
      />

      <section className="overflow-hidden bg-black md:relative md:py-20 lg:py-28">
        <div className="relative h-[14.5rem] overflow-hidden bg-black min-[430px]:h-[15.5rem] md:absolute md:inset-0 md:h-auto">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="100vw"
            quality={78}
            className={`scale-110 md:scale-100 ${imageClassName ?? "object-cover"}`}
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,12,0)_0%,rgba(4,7,12,0.08)_56%,rgba(4,7,12,0.42)_100%)] md:bg-[linear-gradient(90deg,rgba(4,7,12,0.82)_0%,rgba(4,7,12,0.68)_42%,rgba(4,7,12,0.34)_72%,rgba(4,7,12,0.18)_100%)]" />
          <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_76%_24%,rgba(255,255,255,0.14),transparent_30%)] md:block" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-9 pt-5 md:pb-0 md:pt-0 lg:px-8">
          <Link
            href={resolvedBackLinkHref}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/6 px-3 py-1.5 text-sm text-white/78 transition-colors hover:border-primary/35 hover:text-white md:mb-8 md:bg-black/28 md:backdrop-blur-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToServices}
          </Link>

          <div className="max-w-4xl xl:max-w-[68rem]">
            {badge && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/12 px-4 py-1.5 md:mb-5">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm sm:tracking-[0.12em]">{badge}</span>
              </div>
            )}

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.14em]">{subtitle}</p>
            <h1 className={heroTitleClassName}>
              {renderLines(title, titleLines)}
            </h1>
            {descriptionLines ? (
              <p className="mt-3 max-w-none text-body-compact leading-[1.55] text-white/88 text-pretty drop-shadow-[0_8px_24px_rgba(0,0,0,0.34)] sm:mt-6 sm:max-w-[68ch] sm:leading-[1.58] md:text-body-fluid lg:max-w-[72ch]">
                {descriptionLines.map((line, index) => (
                  <span
                    key={`${description}-${line}-${index}`}
                    className="inline"
                  >
                    {line}
                    {index < descriptionLines.length - 1 ? " " : null}
                  </span>
                ))}
              </p>
            ) : (
              <ReadableText
                text={description}
                className="mt-3 max-w-none text-body-compact leading-[1.55] text-white/88 drop-shadow-[0_8px_24px_rgba(0,0,0,0.34)] sm:mt-6 md:max-w-[74ch] md:text-body-fluid"
              />
            )}

            {heroNotice && (
              <ReadableText
                text={heroNotice}
                className="mt-5 max-w-[68ch] rounded-2xl border border-white/18 border-l-4 border-l-primary/75 bg-black/50 px-4 py-3 text-body-compact font-medium leading-7 text-white shadow-[0_16px_34px_rgba(0,0,0,0.3)] backdrop-blur-sm md:mt-7"
              />
            )}

            {resolvedHeroActions.length > 0 && (
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-7">
                {resolvedHeroActions.map((action, index) => (
                  <div key={`${action.href}-${action.label}`} className="contents">
                    {renderAction(
                      action,
                      index === 0 ? "default" : "outline",
                      "w-full gap-2 sm:w-auto sm:min-w-[12rem]"
                    )}
                  </div>
                )
                )}
              </div>
            )}
            <ul className="mt-4 grid min-w-0 gap-3 sm:grid-cols-2 md:mt-7">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className={
                    benefitsSingleLine
                      ? "flex min-w-0 items-start gap-3 rounded-2xl border border-white/20 bg-black/55 px-3 py-2.5 text-[0.8125rem] leading-snug text-white shadow-[0_18px_42px_rgba(0,0,0,0.36)] backdrop-blur-sm sm:items-center sm:px-4 sm:py-3 sm:text-body-compact sm:leading-normal"
                      : "flex items-start gap-3 rounded-2xl border border-white/20 bg-black/55 px-4 py-3 text-body-compact text-white shadow-[0_18px_42px_rgba(0,0,0,0.36)] backdrop-blur-sm"
                  }
                >
                  <CheckCircle
                    className={
                      benefitsSingleLine
                        ? "mt-0.5 h-4 w-4 shrink-0 text-primary sm:mt-0"
                        : "mt-0.5 h-4 w-4 shrink-0 text-primary"
                    }
                  />
                  <span
                    className={
                      benefitsSingleLine
                        ? "min-w-0 flex-1 text-pretty"
                        : balancedTypography
                          ? "max-w-[34ch] text-balance"
                          : "max-w-[34ch]"
                    }
                  >
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-12 max-w-[34ch] text-heading-fluid font-semibold text-foreground">
            {t.servicesTitle}
          </h2>

          {servicesDescription && (
            <ReadableText
              text={servicesDescription}
              className="-mt-8 mb-10 max-w-[64ch] text-body-compact text-foreground/78"
            />
          )}

          <div
            className={`grid gap-5 sm:grid-cols-2 ${
              servicesGridClassName ?? "lg:grid-cols-3"
            }`}
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col rounded-[1.6rem] border border-border/55 bg-background p-6 shadow-[0_14px_34px_rgba(15,23,42,0.05)] transition-colors hover:border-primary/25"
              >
                <div className="mb-4 h-1.5 w-12 rounded-full bg-primary/70" />
                <h3
                  className={
                    balancedTypography
                      ? "max-w-[24ch] text-card-heading-fluid text-foreground text-balance"
                      : "max-w-[24ch] text-card-heading-fluid text-foreground"
                  }
                >
                  {renderLines(service.title, serviceTitleLineBreaks?.[service.title])}
                </h3>
                <ReadableText
                  text={service.description}
                  className="mt-3 measure-card-copy-wide text-body-compact text-foreground/78 lg:max-w-[48ch]"
                />
              </div>
            ))}
          </div>

          {serviceNote && (
            <div className="mt-5 rounded-[1.6rem] border border-border/60 border-l-4 border-l-primary/75 bg-card p-6 shadow-[0_14px_34px_rgba(15,23,42,0.05)] sm:p-7">
              <div>
                <div className="mb-4 h-1.5 w-12 rounded-full bg-primary/70" />
                <h3 className="text-card-heading-fluid text-foreground">
                  {serviceNote.title}
                </h3>
              </div>
              <ReadableText
                text={serviceNote.description}
                className="mt-3 max-w-[76ch] text-body-compact text-foreground/78"
              />
            </div>
          )}
        </div>
      </section>

      {detailSections && detailSections.length > 0 && (
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:px-8">
            {detailSections.map((section) => (
              <div
                key={section.title}
                className={`rounded-[1.6rem] border border-border/55 bg-card p-6 shadow-[0_14px_34px_rgba(15,23,42,0.05)] sm:p-7 ${
                  section.wide ? "md:col-span-2" : ""
                }`}
              >
                <h2 className="max-w-[30ch] text-[clamp(1.75rem,2vw,2.35rem)] font-semibold leading-[1.12] text-foreground">
                  {section.title}
                </h2>
                {section.description && (
                  <ReadableText
                    text={section.description}
                    className={
                      section.wide
                        ? "mt-4 max-w-[82ch] text-body-compact text-foreground/78"
                        : "mt-4 max-w-[58ch] text-body-compact text-foreground/78"
                    }
                  />
                )}
                <div
                  className={
                    section.wide
                      ? "mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3"
                      : "mt-6 space-y-4"
                  }
                >
                  {section.items.map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <h3 className="text-[1rem] font-semibold leading-6 text-foreground">
                          {item.title}
                        </h3>
                        <ReadableText
                          text={item.description}
                          className="mt-1 max-w-[54ch] text-body-compact leading-6 text-foreground/76"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section id={inquiryId} className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-16">
            <div>
              <h2 className="measure-heading text-heading-fluid font-semibold text-foreground">
                {t.whyTitle}
              </h2>
              <ReadableText
                text={t.whyDescription}
                className="mt-4 max-w-[60ch] text-body-compact text-foreground/80"
              />

              <div className="mt-8 space-y-4">
                {whyChoose.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-[1.4rem] border border-border/50 bg-card p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3
                        className={
                          balancedTypography
                            ? "max-w-[24ch] text-card-heading-fluid text-foreground text-balance"
                            : "max-w-[24ch] text-card-heading-fluid text-foreground"
                        }
                      >
                        {renderLines(item.title, whyChooseTitleLineBreaks?.[item.title])}
                      </h3>
                      <ReadableText
                        text={item.description}
                        className="mt-2 measure-card-copy-wide text-body-compact text-foreground/78 lg:max-w-[48ch]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {formHelperText && (
                <ReadableText
                  text={formHelperText}
                  className="mb-5 rounded-[1.4rem] border border-border/55 border-l-4 border-l-primary/75 bg-card px-5 py-4 text-body-compact leading-6 text-foreground/78 shadow-[0_12px_28px_rgba(15,23,42,0.04)]"
                />
              )}

              <ServiceInquiryForm
                locale={locale}
                serviceName={serviceName}
                serviceTitle={formTitle}
                fields={formFields}
                textOverrides={formTextOverrides}
              />
            </div>
          </div>
        </div>
      </section>

      {faqs && faqs.length > 0 && (
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-3 sm:px-4 lg:px-8">
            <h2 className="mx-auto mb-12 max-w-[18ch] text-heading-fluid font-semibold text-center text-foreground lg:max-w-none lg:whitespace-nowrap">
              {t.faqTitle}
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="overflow-hidden rounded-2xl border border-border/55 bg-background px-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                >
                  <AccordionTrigger
                    className={
                      balancedTypography
                        ? "py-5 text-left text-[1rem] leading-7 font-medium text-balance sm:text-[1.05rem]"
                        : "py-5 text-left text-[1rem] leading-7 font-medium sm:text-[1.05rem]"
                    }
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/78">
                    <ReadableText
                      text={faq.answer}
                      className="max-w-[64ch] pb-1 text-body-compact leading-[1.5] text-foreground/78"
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <CtaSection
        locale={locale}
        actions={resolvedBottomActions}
        title={ctaTitle}
        description={ctaDescription}
      />
    </main>
  )
}
