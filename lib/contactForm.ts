import { z } from "zod"
import type { Locale } from "@/lib/i18n"

export type ContactActionStatus = "idle" | "success" | "error"

export type ContactActionState = {
  status: ContactActionStatus
  message: string
  fieldErrors: Record<string, string>
}

export const initialContactActionState: ContactActionState = {
  status: "idle",
  message: "",
  fieldErrors: {},
}

export type ContactFormValues = {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

export type ServiceInquiryValues = {
  service: string
  name: string
  phone: string
  email: string
  vehicle: string
  subject: string
  date: string
  message: string
}

const validationMessages = {
  de: {
    required: "Dieses Feld ist erforderlich.",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    tooLong: "Die Eingabe ist zu lang. Bitte kürzen Sie den Text.",
    datePast: "Bitte wählen Sie ein heutiges oder zukünftiges Datum.",
    invalid: "Bitte prüfen Sie die markierten Felder.",
  },
  en: {
    required: "This field is required.",
    email: "Please enter a valid email address.",
    tooLong: "The entry is too long. Please shorten it.",
    datePast: "Please choose today or a future date.",
    invalid: "Please check the highlighted fields.",
  },
  ru: {
    required: "Заполните это поле.",
    email: "Введите корректный адрес электронной почты.",
    tooLong: "Текст слишком длинный. Сократите его.",
    datePast: "Выберите сегодняшнюю или будущую дату.",
    invalid: "Проверьте отмеченные поля.",
  },
} as const satisfies Record<Locale, Record<string, string>>
function buildSchemas(locale: Locale) {
  const messages = validationMessages[locale]
  const requiredText = z.string().trim().min(1, messages.required)
  const optionalText = z.string().trim()

  return {
    contact: z.object({
      name: requiredText.max(120, messages.tooLong),
      phone: optionalText.max(60, messages.tooLong),
      email: requiredText.email(messages.email).max(180, messages.tooLong),
      subject: requiredText.max(160, messages.tooLong),
      message: requiredText.max(4000, messages.tooLong),
    }),
    service: z.object({
      service: requiredText.max(160, messages.tooLong),
      name: requiredText.max(120, messages.tooLong),
      phone: requiredText.max(60, messages.tooLong),
      email: requiredText.email(messages.email).max(180, messages.tooLong),
      vehicle: optionalText.max(160, messages.tooLong),
      subject: optionalText.max(160, messages.tooLong),
      date: optionalText
        .max(40, messages.tooLong)
        .refine(
          (value) => !value || (/^\d{4}-\d{2}-\d{2}$/.test(value) && value >= getCurrentDateInputValue()),
          messages.datePast,
        ),
      message: optionalText.max(4000, messages.tooLong),
    }),
  }
}

export function getCurrentDateInputValue() {
  const now = new Date()
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60_000)

  return localDate.toISOString().slice(0, 10)
}

export function getValidationSummary(locale: Locale) {
  return validationMessages[locale].invalid
}

export function readFormText(formData: FormData, key: string) {
  const value = formData.get(key)

  return typeof value === "string" ? value : ""
}

export function validateContactForm(formData: FormData, locale: Locale) {
  return buildSchemas(locale).contact.safeParse({
    name: readFormText(formData, "name"),
    phone: readFormText(formData, "phone"),
    email: readFormText(formData, "email"),
    subject: readFormText(formData, "subject"),
    message: readFormText(formData, "message"),
  })
}

export function validateServiceInquiry(formData: FormData, locale: Locale) {
  return buildSchemas(locale).service.safeParse({
    service: readFormText(formData, "service"),
    name: readFormText(formData, "name"),
    phone: readFormText(formData, "phone"),
    email: readFormText(formData, "email"),
    vehicle: readFormText(formData, "vehicle"),
    subject: readFormText(formData, "subject"),
    date: readFormText(formData, "date"),
    message: readFormText(formData, "message"),
  })
}

export function buildFieldErrors(error: z.ZodError) {
  const fieldErrors: Record<string, string> = {}

  for (const issue of error.issues) {
    const fieldName = issue.path[0]

    if (typeof fieldName === "string" && !fieldErrors[fieldName]) {
      fieldErrors[fieldName] = issue.message
    }
  }

  return fieldErrors
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function renderEmailParagraph(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 0; color: #6b7280; font-size: 13px; width: 130px; vertical-align: top;">${escapeHtml(label)}</td>
      <td style="padding: 10px 0; color: #111827; font-size: 15px; font-weight: 600; vertical-align: top;">${escapeHtml(value)}</td>
    </tr>
  `
}

function renderMessageBlock(value: string) {
  return `
    <div style="margin-top: 24px;">
      <div style="color: #6b7280; font-size: 13px; margin-bottom: 8px;">Nachricht</div>
      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; color: #111827; font-size: 15px; line-height: 1.65; padding: 18px 20px;">
        ${escapeHtml(value).replaceAll("\n", "<br />")}
      </div>
    </div>
  `
}

function renderEmailHtml(input: { eyebrow: string; title: string; rows: string[]; message: string }) {
  return `
    <!doctype html>
    <html>
      <body style="margin: 0; padding: 0; background: #f3f4f6; font-family: Arial, Helvetica, sans-serif;">
        <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
          ${escapeHtml(input.title)}
        </div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #f3f4f6; padding: 32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 18px; max-width: 640px; overflow: hidden;">
                <tr>
                  <td style="background: #050505; padding: 26px 30px;">
                    <div style="color: #ef4444; font-size: 12px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;">${escapeHtml(input.eyebrow)}</div>
                    <h1 style="color: #ffffff; font-size: 24px; line-height: 1.25; margin: 10px 0 0;">${escapeHtml(input.title)}</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 28px 30px 32px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                      ${input.rows.join("")}
                    </table>
                    ${renderMessageBlock(input.message)}
                    <p style="border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; line-height: 1.6; margin: 26px 0 0; padding-top: 16px;">
                      Antworten auf diese E-Mail gehen an die im Formular angegebene Kundenadresse.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}

const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "Englisch",
  ru: "Russisch",
}

export function buildContactEmail(values: ContactFormValues, locale: Locale) {
  const localeName = localeNames[locale]

  return {
    subject: `[${locale.toUpperCase()}] Kontaktformular: ${values.subject}`,
    text: [
      "Neue Nachricht über das Kontaktformular.",
      `Formularsprache: ${localeName}`,
      "",
      `Name: ${values.name}`,
      `Telefon: ${values.phone || "Nicht angegeben"}`,
      `E-Mail: ${values.email}`,
      `Betreff: ${values.subject}`,
      "",
      "Nachricht:",
      values.message,
    ].join("\n"),
    html: renderEmailHtml({
      eyebrow: "Kontaktformular",
      title: "Neue Nachricht über das Kontaktformular",
      rows: [
        renderEmailParagraph("Formularsprache", localeName),
        renderEmailParagraph("Name", values.name),
        renderEmailParagraph("Telefon", values.phone || "Nicht angegeben"),
        renderEmailParagraph("E-Mail", values.email),
        renderEmailParagraph("Betreff", values.subject),
      ],
      message: values.message,
    }),
  }
}

export function buildServiceInquiryEmail(values: ServiceInquiryValues, locale: Locale) {
  const localeName = localeNames[locale]

  return {
    subject: `[${locale.toUpperCase()}] Gutachten-Anfrage: ${values.service}`,
    text: [
      "Neue Gutachten-Anfrage über die UNEXT Website.",
      `Formularsprache: ${localeName}`,
      "",
      `Anfragebereich: ${values.service}`,
      `Name: ${values.name}`,
      `Telefon: ${values.phone}`,
      `E-Mail: ${values.email}`,
      `Fahrzeug: ${values.vehicle || "Nicht angegeben"}`,
      `Betreff: ${values.subject || "Nicht angegeben"}`,
      `Wunschtermin: ${values.date || "Nicht angegeben"}`,
      "",
      "Nachricht:",
      values.message || "Nicht angegeben",
    ].join("\n"),
    html: renderEmailHtml({
      eyebrow: "Gutachten-Anfrage",
      title: `Neue Gutachten-Anfrage: ${values.service}`,
      rows: [
        renderEmailParagraph("Formularsprache", localeName),
        renderEmailParagraph("Anfragebereich", values.service),
        renderEmailParagraph("Name", values.name),
        renderEmailParagraph("Telefon", values.phone),
        renderEmailParagraph("E-Mail", values.email),
        renderEmailParagraph("Fahrzeug", values.vehicle || "Nicht angegeben"),
        renderEmailParagraph("Betreff", values.subject || "Nicht angegeben"),
        renderEmailParagraph("Wunschtermin", values.date || "Nicht angegeben"),
      ],
      message: values.message || "Nicht angegeben",
    }),
  }
}
