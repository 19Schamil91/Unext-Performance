/*
  Diese Datei zeigt die Kontaktseite.
  Sie zeigt Kontaktwege, das Kontaktformular und den Standort.
  Besucher können anrufen, WhatsApp öffnen, eine echte Nachricht senden oder den Standort ansehen.
*/
"use client"

import { useActionState, type ReactNode } from "react"
import Link from "next/link"
import {
  CheckCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react"
import { FormSubmitButton } from "@/components/FormSubmitButton"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactMessage } from "@/lib/contactActions"
import { initialContactActionState, validateContactForm } from "@/lib/contactForm"
import { getLocalizedPath, type Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"
import { useLocalizedFormValidation } from "@/lib/use-localized-form-validation"

function splitAtSentenceBoundary(text: string) {
  const match = text.match(/^(.+?[.!?])(\s+.+)$/)

  if (!match) {
    return { lead: text, rest: "" }
  }

  return {
    lead: match[1],
    rest: match[2].trim(),
  }
}

type ContactPageClientProps = {
  locale: Locale
  header: ReactNode
  footer: ReactNode
}

export function ContactPageClient({ locale, header, footer }: ContactPageClientProps) {
  // Die Servervalidierung bleibt verbindlich; die gemeinsame Clientprüfung verhindert nur ungültige Requests.
  const [formState, formAction, isPending] = useActionState(sendContactMessage, initialContactActionState)
  const validation = useLocalizedFormValidation({
    locale,
    serverState: formState,
    submitAction: formAction,
    validate: validateContactForm,
  })
  const t = getTranslations(locale).contactPage
  const descriptionParts = splitAtSentenceBoundary(t.description)
  const primaryPhone = "030 23613927"
  const whatsappPhone = "0176 64365185"
  const contactHref = getLocalizedPath(locale, "/kontakt")
  const privacyHref = getLocalizedPath(locale, "/datenschutz")

  const { fieldErrors, getFieldError, handleChange, handleSubmit, message: validationMessage } = validation
  const errorMessage = validationMessage || (formState.status === "error" ? formState.message : "")
  const hasFieldErrors = Object.keys(fieldErrors).length > 0

  return (
    <>
      {header}
      <main>
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)] lg:gap-16">
              <div className="measure-intro max-w-[58rem]">
                <h1
                  className={`text-display-fluid text-foreground ${
                    locale === "de" ? "measure-display" : "max-w-[18ch] [text-wrap:balance]"
                  }`}
                >
                  {t.title}
                </h1>
                <p className="measure-intro mt-6 text-body-fluid text-muted-foreground">
                  {locale === "de" ? (
                    <>
                      <span className="sm:hidden">
                        Sie benötigen ein <span className="whitespace-nowrap">KFZ-Gutachten</span>, eine Fahrzeugbewertung oder eine erste Einschätzung nach einem Schaden? Sie erreichen UNEXT telefonisch, per WhatsApp, per E-Mail oder über das Kontaktformular.
                      </span>
                      <span className="hidden sm:block">
                        <span>Sie benötigen ein <span className="whitespace-nowrap">KFZ-Gutachten</span>, eine Fahrzeugbewertung</span>
                        <span className="block">oder eine erste Einschätzung nach einem Schaden?</span>
                        <span className="mt-4 block">Sie erreichen UNEXT telefonisch, per WhatsApp, per E-Mail</span>
                        <span className="block">oder über das Kontaktformular.</span>
                      </span>
                    </>
                  ) : (
                    <>
                      <span>{descriptionParts.lead}</span>
                      {descriptionParts.rest ? <span className="block">{descriptionParts.rest}</span> : null}
                    </>
                  )}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${primaryPhone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 rounded-2xl border border-border/55 bg-background/78 px-6 py-4 text-foreground shadow-[0_10px_26px_rgba(15,23,42,0.07)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
                >
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">{t.form.phone}</p>
                    <p className="font-semibold">{primaryPhone}</p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/49${whatsappPhone.replace(/\s/g, "").replace(/^0/, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border/55 bg-background/78 px-6 py-4 text-foreground shadow-[0_10px_26px_rgba(15,23,42,0.07)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
                >
                  <MessageCircle className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">WhatsApp</p>
                    <p className="font-semibold">{whatsappPhone}</p>
                  </div>
                </a>
                <a
                  href="mailto:info@unext.de"
                  className="flex items-center gap-4 rounded-2xl border border-border/55 bg-background/78 px-6 py-4 text-foreground shadow-[0_10px_26px_rgba(15,23,42,0.07)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
                >
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">{t.methods.email.title}</p>
                    <p className="font-semibold">info@unext.de</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl">
              {formState.status === "success" ? (
                <Card className="border-primary/35 bg-background">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{t.form.successTitle}</h3>
                    <p className="mt-2 text-muted-foreground">{formState.message || t.form.successText}</p>
                    <Button asChild className="mt-6" variant="outline">
                      <Link href={contactHref}>{t.form.newMessage}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-border/60 bg-background">
                  <CardHeader>
                    <CardTitle>{t.form.title}</CardTitle>
                    <CardDescription>{t.form.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Native Browserblasen sind deaktiviert, damit alle Sprachen dieselbe zugängliche Rückmeldung erhalten. */}
                    <form noValidate onSubmit={handleSubmit} onChange={handleChange}>
                      <input type="hidden" name="locale" value={locale} />
                      <FieldGroup className="space-y-4">
                        {errorMessage ? (
                          <div
                            role={hasFieldErrors ? undefined : "alert"}
                            aria-hidden={hasFieldErrors || undefined}
                            className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                          >
                            {errorMessage}
                          </div>
                        ) : null}
                        <div className="grid gap-4 sm:grid-cols-2">
                          <Field data-invalid={Boolean(getFieldError("name"))}>
                            <FieldLabel htmlFor="name">{t.form.name}</FieldLabel>
                            <Input
                              id="name"
                              name="name"
                              aria-invalid={Boolean(getFieldError("name"))}
                              aria-describedby={getFieldError("name") ? "name-error" : undefined}
                              required
                            />
                            <FieldError id="name-error">{getFieldError("name")}</FieldError>
                          </Field>
                          <Field data-invalid={Boolean(getFieldError("phone"))}>
                            <FieldLabel htmlFor="phone">{t.form.phone}</FieldLabel>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              aria-invalid={Boolean(getFieldError("phone"))}
                              aria-describedby={getFieldError("phone") ? "phone-error" : undefined}
                            />
                            <FieldError id="phone-error">{getFieldError("phone")}</FieldError>
                          </Field>
                        </div>

                        <Field data-invalid={Boolean(getFieldError("email"))}>
                          <FieldLabel htmlFor="email">{t.form.email}</FieldLabel>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder={t.form.emailPlaceholder}
                            aria-invalid={Boolean(getFieldError("email"))}
                            aria-describedby={getFieldError("email") ? "email-error" : undefined}
                            required
                          />
                          <FieldError id="email-error">{getFieldError("email")}</FieldError>
                        </Field>

                        <Field data-invalid={Boolean(getFieldError("subject"))}>
                          <FieldLabel htmlFor="subject">{t.form.subject}</FieldLabel>
                          <Input
                            id="subject"
                            name="subject"
                            aria-invalid={Boolean(getFieldError("subject"))}
                            aria-describedby={getFieldError("subject") ? "subject-error" : undefined}
                            required
                          />
                          <FieldError id="subject-error">{getFieldError("subject")}</FieldError>
                        </Field>

                        <Field data-invalid={Boolean(getFieldError("message"))}>
                          <FieldLabel htmlFor="message">{t.form.message}</FieldLabel>
                          <Textarea
                            id="message"
                            name="message"
                            aria-invalid={Boolean(getFieldError("message"))}
                            aria-describedby={getFieldError("message") ? "message-error" : undefined}
                            rows={5}
                            required
                          />
                          <FieldError id="message-error">{getFieldError("message")}</FieldError>
                        </Field>

                        <FormSubmitButton
                          submitLabel={t.form.submit}
                          ariaLabel={t.form.submitAriaLabel}
                          pendingLabel={t.form.submitting}
                          pending={isPending}
                        />

                        <p className="text-center text-xs text-muted-foreground">
                          {t.form.privacyPrefix}{" "}
                          <Link href={privacyHref} className="underline hover:text-foreground">
                            {t.form.privacyLink}
                          </Link>{" "}
                          {t.form.privacySuffix}
                        </p>
                      </FieldGroup>
                    </form>
                  </CardContent>
                </Card>
              )}

            </div>
          </div>
        </section>

        <section className="bg-background pb-16 pt-8 lg:pb-24 lg:pt-10">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {t.locationTitle}
            </h2>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="min-h-full">
                <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-border/60 bg-card p-6 shadow-[0_14px_34px_rgba(15,23,42,0.1)]">
                  <div className="space-y-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-title-fluid font-semibold text-foreground">Lübarser Str. 25</p>
                      <p className="mt-2 text-body-compact text-muted-foreground">13435 Berlin</p>
                    </div>
                    <p className="max-w-[58ch] text-body-compact text-muted-foreground">
                      {locale === "de" ? (
                        <>
                          <span>UNEXT GmbH befindet sich in Berlin-Reinickendorf.</span>
                          <span className="block">Über Google Maps können Sie den Standort direkt öffnen.</span>
                        </>
                      ) : (
                        t.locationDescription
                      )}
                    </p>
                  </div>
                  <div className="mt-8">
                    <Button asChild variant="outline">
                      <a
                        href="https://maps.google.com/?q=Lübarser+Str.+25,+13435+Berlin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {t.openMaps}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
                <h3 className="mb-4 font-semibold text-foreground">{t.openingHoursTitle}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">{t.openingHours.mondayFriday}</span>
                    <span className="text-right text-foreground">{t.openingHours.mondayFridayValue}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">{t.openingHours.saturday}</span>
                    <span className="text-right text-foreground">{t.openingHours.saturdayValue}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">{t.openingHours.sunday}</span>
                    <span className="text-right text-foreground">{t.openingHours.sundayValue}</span>
                  </div>
                  <p className="mt-4 border-t border-border pt-2 text-xs text-muted-foreground">
                    {t.openingHours.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {footer}
    </>
  )
}
