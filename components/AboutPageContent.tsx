/*
  Diese Datei zeigt die gemeinsame V1-Ueber-uns-Seite in Deutsch, Englisch und Russisch.
  Besucher sehen die Person hinter UNEXT, die Arbeitsweise sowie belegte Qualifikation und Weiterbildung.
  Sie koennen die DESAG-Qualifikation oeffnen oder direkt Kontakt aufnehmen.
*/
import Image from "next/image"
import { ReadableText } from "@/components/readable-text"
import { CtaSection } from "@/components/sections/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent } from "@/components/ui/card"
import type { Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

type AboutPageContentProps = {
  locale: Locale
}

const aboutContent = {
  de: {
    heroEyebrow: "KFZ-Gutachten Berlin",
    title: "Über UNEXT GmbH",
    hero: "UNEXT steht für KFZ-Gutachten in Berlin – mit persönlichem Kontakt, strukturierter Schadenaufnahme und verständlicher Einordnung. Von der ersten Anfrage bis zur weiteren Abstimmung erhalten Sie klare Informationen zu Ihrem Fahrzeug und dem nächsten sinnvollen Schritt.",
    imageAlt: "Selimchan Kasumov im Büro der UNEXT GmbH in Berlin",
    introEyebrow: "Persönlicher Kontakt",
    introTitle: "Wer hinter UNEXT steht",
    intro: [
      "UNEXT ist auf die Begutachtung von Fahrzeugschäden und die Wertermittlung spezialisiert. Im Mittelpunkt stehen der persönliche Kontakt, eine strukturierte Aufnahme der relevanten Informationen und eine verständliche Abstimmung.",
      "Sie erreichen UNEXT telefonisch, per WhatsApp oder über eine Anfrage. So können Fahrzeugdaten, Schadeninformationen und das weitere Vorgehen frühzeitig geklärt werden.",
    ],
    methodEyebrow: "Arbeitsweise",
    methodTitle: "Sachliche Begutachtung",
    method: [
      "Fahrzeugschäden werden strukturiert dokumentiert und fachlich bewertet. Je nach Fall werden sichtbare Schäden, relevante Fahrzeugdaten und wertbezogene Merkmale berücksichtigt.",
      "Digitale Angaben können die Anfrage vorbereiten. Die fachliche Einordnung und die finale Bewertung erfolgen durch den Gutachter.",
    ],
    trustEyebrow: "Vertrauen und fachliche Grundlage",
    trustTitle: "Qualifikation und Weiterbildung",
    qualificationTitle: "Qualifikation & Anerkennung",
    qualification: "Selimchan Kasumov ist durch die DESAG als Sachverständiger für Schäden an Kraftfahrzeugen und Wertermittlung geprüft und anerkannt.",
    qualificationLink: "Qualifikation bei DESAG ansehen",
    trainingTitle: "Fort- und Weiterbildung",
    training: "Die nachgewiesenen Fachwebinare behandeln unter anderem Wertdefinitionen, Kürzungen und fachliche Stellungnahmen.",
  },
  en: {
    heroEyebrow: "Vehicle appraisals in Berlin",
    title: "About UNEXT GmbH",
    hero: "UNEXT provides vehicle appraisals in Berlin with personal contact, structured damage assessment and clear explanations. From the first enquiry to the next steps, you receive clear information about your vehicle and the appropriate way forward.",
    imageAlt: "Selimchan Kasumov at the UNEXT GmbH office in Berlin",
    introEyebrow: "Personal contact",
    introTitle: "The person behind UNEXT",
    intro: [
      "UNEXT specialises in assessing vehicle damage and determining vehicle values. Personal contact, a structured review of the relevant information and clear communication are central to our work.",
      "You can contact UNEXT by phone, WhatsApp or the enquiry form. This allows us to clarify vehicle details, damage information and the next steps at an early stage.",
    ],
    methodEyebrow: "How we work",
    methodTitle: "Objective vehicle assessment",
    method: [
      "Vehicle damage is documented systematically and assessed professionally. Depending on the case, visible damage, relevant vehicle details and value-related features are considered.",
      "Digital information can help prepare the enquiry. The professional assessment and final valuation are completed by the appraiser.",
    ],
    trustEyebrow: "Trust and professional background",
    trustTitle: "Qualifications and continuing education",
    qualificationTitle: "Qualification and recognition",
    qualification: "Selimchan Kasumov has been assessed and recognised by DESAG as an expert in motor vehicle damage and valuation.",
    qualificationLink: "View qualification at DESAG",
    trainingTitle: "Training and continuing professional development",
    training: "The documented specialist webinars cover value definitions, reductions applied to claims and the preparation of technical opinions.",
  },
  ru: {
    heroEyebrow: "Автоэкспертиза в Берлине",
    title: "О компании UNEXT GmbH",
    hero: "UNEXT проводит автоэкспертизу в Берлине с личным сопровождением, последовательным осмотром повреждений и понятным объяснением. От первого запроса до дальнейшего согласования вы получаете ясную информацию об автомобиле и разумных следующих шагах.",
    imageAlt: "Селимхан Касумов в офисе UNEXT GmbH в Берлине",
    introEyebrow: "Личный контакт",
    introTitle: "Кто стоит за UNEXT",
    intro: [
      "UNEXT специализируется на оценке повреждений и определении стоимости автомобилей. В центре нашей работы — личный контакт, последовательный сбор важной информации и понятное согласование.",
      "Связаться с UNEXT можно по телефону, WhatsApp или через форму запроса. Это позволяет заранее уточнить данные автомобиля, информацию о повреждении и дальнейший порядок действий.",
    ],
    methodEyebrow: "Как мы работаем",
    methodTitle: "Объективная автоэкспертиза",
    method: [
      "Повреждения автомобиля последовательно документируются и профессионально оцениваются. В зависимости от случая учитываются видимые повреждения, существенные данные автомобиля и характеристики, влияющие на стоимость.",
      "Цифровые сведения помогают подготовить запрос. Профессиональную оценку и окончательное заключение выполняет автоэксперт.",
    ],
    trustEyebrow: "Доверие и профессиональная основа",
    trustTitle: "Квалификация и повышение квалификации",
    qualificationTitle: "Квалификация и признание",
    qualification: "Селимчан Касумов прошёл проверку DESAG и признан этой организацией экспертом по повреждениям транспортных средств и оценке стоимости.",
    qualificationLink: "Посмотреть квалификацию на сайте DESAG",
    trainingTitle: "Повышение квалификации и профессиональное обучение",
    training: "Подтверждённые профильные вебинары посвящены определениям стоимости, сокращениям страховых выплат и подготовке профессиональных заключений.",
  },
} as const satisfies Record<Locale, object>

export function AboutPageContent({ locale }: AboutPageContentProps) {
  const content = aboutContent[locale]
  const homeCta = getTranslations(locale).home.cta

  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{content.heroEyebrow}</p>
              <h1 className="mt-3 max-w-4xl text-display-fluid font-semibold text-foreground">{content.title}</h1>
              <ReadableText text={content.hero} className="mt-6 measure-intro text-body-fluid text-foreground/82" />
            </div>
          </div>
        </section>

        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 lg:px-8">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[27rem] overflow-hidden rounded-[1.5rem] border border-border/50 bg-background shadow-sm lg:mx-0">
              <Image src="/images/about-selimchan-kasumov.webp" alt={content.imageAlt} fill sizes="(min-width: 1024px) 44vw, 100vw" quality={82} className="object-cover object-center" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{content.introEyebrow}</p>
              <h2 className="mt-2 measure-heading text-heading-fluid font-semibold text-foreground">{content.introTitle}</h2>
              <div className="mt-6 space-y-4">
                {content.intro.map((paragraph) => (
                  <ReadableText key={paragraph} text={paragraph} className="measure-intro-tight text-body-fluid text-foreground/82" />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{content.methodEyebrow}</p>
              <h2 className="mt-2 measure-heading text-heading-fluid font-semibold text-foreground">{content.methodTitle}</h2>
            </div>
            <div className="space-y-4">
              {content.method.map((paragraph) => (
                <ReadableText key={paragraph} text={paragraph} className="measure-intro-tight text-body-fluid text-foreground/82" />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{content.trustEyebrow}</p>
              <h2 className="mt-2 text-heading-fluid font-semibold text-foreground">{content.trustTitle}</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <Card className="border-border/60 bg-background">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-title-fluid font-semibold text-foreground">{content.qualificationTitle}</h3>
                  <ReadableText text={content.qualification} className="mt-5 text-body-compact leading-7 text-foreground/82" />
                  <a href="https://www.desag.de/zertifikat/selimchankasumov/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-sm text-sm font-semibold text-primary underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
                    {content.qualificationLink}
                  </a>
                </CardContent>
              </Card>
              <Card className="border-border/60 bg-background">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-title-fluid font-semibold text-foreground">{content.trainingTitle}</h3>
                  <ReadableText text={content.training} className="mt-5 text-body-compact leading-7 text-foreground/82" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <CtaSection locale={locale} title={homeCta.title} description={homeCta.description} />
      </main>
      <SiteFooter locale={locale} />
    </>
  )
}
