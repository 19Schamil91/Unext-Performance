/*
  Diese Datei zeigt das Anfrageformular auf den Leistungsseiten.
  Besucher koennen ihre Kontaktdaten, Fahrzeugdaten und eine Nachricht eingeben.
  Nach dem Absenden wird die Anfrage per Server verarbeitet und als E-Mail zugestellt.
*/
"use client"

import { useActionState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CheckCircle } from "lucide-react"
import { FormSubmitButton } from "@/components/FormSubmitButton"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendServiceInquiry } from "@/lib/contactActions"
import { getCurrentDateInputValue, initialContactActionState, validateServiceInquiry } from "@/lib/contactForm"
import { getLocalizedPath, type Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"
import { useLocalizedFormValidation } from "@/lib/use-localized-form-validation"

type ServiceInquiryFormProps = {
  locale: Locale
  serviceName: string
  serviceTitle: string
  fields?: ServiceInquiryFields
  textOverrides?: ServiceInquiryTextOverrides
}

export type ServiceInquiryFields = {
  vehicle?: boolean
  date?: boolean
  subject?: boolean
}

export type ServiceInquiryTextOverrides = Partial<{
  description: string
  successText: string
  vehicle: string
  vehiclePlaceholder: string
  phonePlaceholder: string
  date: string
  message: string
  messagePlaceholder: string
  submit: string
  submitAriaLabel: string
}>

export function ServiceInquiryForm({
  locale,
  serviceName,
  serviceTitle,
  fields = { vehicle: true, date: true, subject: false },
  textOverrides,
}: ServiceInquiryFormProps) {
  // Die Servervalidierung bleibt verbindlich; die gemeinsame Clientprüfung verhindert nur ungültige Requests.
  const [formState, formAction, isPending] = useActionState(sendServiceInquiry, initialContactActionState)
  const validation = useLocalizedFormValidation({
    locale,
    serverState: formState,
    submitAction: formAction,
    validate: validateServiceInquiry,
  })
  const pathname = usePathname()
  const t = { ...getTranslations(locale).serviceDetail.form, ...textOverrides }
  const privacyHref = getLocalizedPath(locale, "/datenschutz")

  const { fieldErrors, getFieldError, handleChange, handleSubmit, message: validationMessage } = validation
  const errorMessage = validationMessage || (formState.status === "error" ? formState.message : "")
  const hasFieldErrors = Object.keys(fieldErrors).length > 0

  if (formState.status === "success") {
    return (
      <Card className="rounded-[1.6rem] border-primary/30 bg-card shadow-[0_16px_36px_rgba(15,23,42,0.06)]">
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{t.successTitle}</h3>
          <p className="mt-2 text-muted-foreground">{formState.message || t.successText}</p>
          <Button asChild className="mt-6" variant="outline">
            <Link href={pathname}>{t.newInquiry}</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="rounded-[1.6rem] border-border/50 bg-card shadow-[0_18px_40px_rgba(15,23,42,0.07)]">
      <CardHeader className="space-y-3 p-7 pb-5 sm:p-8 sm:pb-6">
        <CardTitle className="max-w-[22ch] text-[clamp(1.22rem,1.08rem+0.5vw,1.65rem)] leading-[1.14]">
          {serviceTitle}
        </CardTitle>
        <CardDescription className="max-w-none text-body-compact text-muted-foreground lg:whitespace-nowrap">
          {t.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-7 pb-7 pt-0 sm:px-8 sm:pb-8">
        {/* Native Browserblasen sind deaktiviert, damit alle Sprachen dieselbe zugängliche Rückmeldung erhalten. */}
        <form noValidate onSubmit={handleSubmit} onChange={handleChange}>
          <FieldGroup className="space-y-4">
            <input type="hidden" name="locale" value={locale} />
            <input type="hidden" name="service" value={serviceName} />
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
                <FieldLabel htmlFor="name">{t.name}</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  placeholder={t.namePlaceholder}
                  aria-invalid={Boolean(getFieldError("name"))}
                  aria-describedby={getFieldError("name") ? "name-error" : undefined}
                  required
                />
                <FieldError id="name-error">{getFieldError("name")}</FieldError>
              </Field>
              <Field data-invalid={Boolean(getFieldError("phone"))}>
                <FieldLabel htmlFor="phone">{t.phone}</FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t.phonePlaceholder}
                  aria-invalid={Boolean(getFieldError("phone"))}
                  aria-describedby={getFieldError("phone") ? "phone-error" : undefined}
                  required
                />
                <FieldError id="phone-error">{getFieldError("phone")}</FieldError>
              </Field>
            </div>

            <Field data-invalid={Boolean(getFieldError("email"))}>
              <FieldLabel htmlFor="email">{t.email}</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t.emailPlaceholder}
                aria-invalid={Boolean(getFieldError("email"))}
                aria-describedby={getFieldError("email") ? "email-error" : undefined}
                required
              />
              <FieldError id="email-error">{getFieldError("email")}</FieldError>
            </Field>

            {fields.vehicle && (
              <Field data-invalid={Boolean(getFieldError("vehicle"))}>
                <FieldLabel htmlFor="vehicle">{t.vehicle}</FieldLabel>
                <Input
                  id="vehicle"
                  name="vehicle"
                  placeholder={t.vehiclePlaceholder}
                  aria-invalid={Boolean(getFieldError("vehicle"))}
                  aria-describedby={getFieldError("vehicle") ? "vehicle-error" : undefined}
                />
                <FieldError id="vehicle-error">{getFieldError("vehicle")}</FieldError>
              </Field>
            )}

            {fields.subject && (
              <Field data-invalid={Boolean(getFieldError("subject"))}>
                <FieldLabel htmlFor="subject">{t.subject}</FieldLabel>
                <Input
                  id="subject"
                  name="subject"
                  placeholder={t.subjectPlaceholder}
                  aria-invalid={Boolean(getFieldError("subject"))}
                  aria-describedby={getFieldError("subject") ? "subject-error" : undefined}
                />
                <FieldError id="subject-error">{getFieldError("subject")}</FieldError>
              </Field>
            )}

            {fields.date && (
              <Field data-invalid={Boolean(getFieldError("date"))}>
                <FieldLabel htmlFor="date">{t.date}</FieldLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  min={getCurrentDateInputValue()}
                  aria-invalid={Boolean(getFieldError("date"))}
                  aria-describedby={getFieldError("date") ? "date-error" : undefined}
                />
                <FieldError id="date-error">{getFieldError("date")}</FieldError>
              </Field>
            )}

            <Field data-invalid={Boolean(getFieldError("message"))}>
              <FieldLabel htmlFor="message">{t.message}</FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder={t.messagePlaceholder}
                aria-invalid={Boolean(getFieldError("message"))}
                aria-describedby={getFieldError("message") ? "message-error" : undefined}
                rows={4}
              />
              <FieldError id="message-error">{getFieldError("message")}</FieldError>
            </Field>

            <FormSubmitButton
              submitLabel={t.submit}
              ariaLabel={t.submitAriaLabel}
              pendingLabel={t.submitting}
              pending={isPending}
            />

            <p className="mx-auto max-w-[42ch] text-center text-xs leading-6 text-muted-foreground">
              {t.privacyPrefix}{" "}
              <Link href={privacyHref} className="underline hover:text-foreground">
                {t.privacyLink}
              </Link>{" "}
              {t.privacySuffix}
            </p>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
