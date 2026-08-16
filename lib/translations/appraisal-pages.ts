import type { ServiceInquiryTextOverrides } from "@/components/service-inquiry-form"
import type { Locale } from "@/lib/i18n"

type Action = {
  label: string
  ariaLabel?: string
  href: string
  icon?: "phone" | "message"
  external?: boolean
}

type Card = { title: string; description: string }

export type LocalizedAppraisalPage = {
  title: string
  subtitle: string
  description: string
  imageAlt: string
  heroNotice: string
  heroActions: readonly Action[]
  bottomActions: readonly Action[]
  benefits: readonly string[]
  services: readonly Card[]
  servicesDescription?: string
  serviceNote?: Card
  detailSections?: readonly {
    title: string
    description?: string
    items: readonly Card[]
    wide?: boolean
  }[]
  whyChoose: readonly Card[]
  faqs: readonly { question: string; answer: string }[]
  formTitle: string
  ctaTitle: string
  ctaDescription: readonly [string, string]
  formTextOverrides: ServiceInquiryTextOverrides
  formHelperText?: string
  layoutLabels: {
    backToServices: string
    servicesTitle: string
    whyTitle: string
    whyDescription: string
    faqTitle: string
  }
}

const sharedActions = {
  en: { call: "Call now", whatsapp: "Message us on WhatsApp" },
  ru: { call: "Позвонить", whatsapp: "Написать в WhatsApp" },
} as const

function actions(locale: "en" | "ru", requestAriaLabel: string, anchor: string): readonly Action[] {
  const requestLabel = locale === "en" ? "Make an enquiry" : "Оставить заявку"

  return [
    { label: sharedActions[locale].call, href: "tel:+493023613927", icon: "phone" },
    {
      label: sharedActions[locale].whatsapp,
      href: "https://wa.me/4917664365185",
      icon: "message",
      external: true,
    },
    { label: requestLabel, ariaLabel: requestAriaLabel, href: anchor },
  ]
}

const englishAccident = {
  title: "Accident Damage Appraisal in Berlin",
  subtitle: "ACCIDENT DAMAGE APPRAISAL",
  description:
    "After an accident, you need clarity quickly: What has been damaged, what costs may arise, and what happens next with the insurer, repair shop or lawyer? UNEXT documents vehicle damage objectively, clearly and independently.",
  imageAlt: "Accident damage to a vehicle in Berlin",
  heroNotice:
    "If you were not at fault, the other party's liability insurer will generally cover the appraisal costs.",
  heroActions: actions("en", "Make an enquiry about an accident damage appraisal", "#unfallgutachten-anfrage"),
  bottomActions: actions("en", "Make an enquiry about an accident appraisal", "#unfallgutachten-anfrage"),
  benefits: ["Assessed by DESAG for vehicle damage and valuation", "Independent damage assessment in Berlin"],
  services: [
    {
      title: "More than a minor scratch",
      description:
        "If repair costs, diminution in value or the full extent of the damage are unclear, an accident damage appraisal provides a reliable basis.",
    },
    {
      title: "Possible hidden damage",
      description:
        "An impact can cause damage that is not immediately visible. The accident damage appraisal provides a professional assessment.",
    },
    {
      title: "A reliable basis for handling the insurance claim",
      description:
        "The appraisal records the extent of the damage, repair costs, photographs and relevant values for the next steps in the claim.",
    },
  ],
  serviceNote: {
    title: "Free choice of appraiser after a non-fault accident",
    description:
      "After a non-fault accident, you can generally choose an independent appraiser yourself. Before you commission us, we will discuss whether an accident damage appraisal is appropriate in your case.",
  },
  detailSections: [
    {
      title: "What does the appraisal include?",
      description:
        "An accident damage appraisal documents vehicle damage clearly and professionally. The exact scope depends on the vehicle, the damage and the findings from the inspection.",
      items: [
        { title: "Repair costs", description: "Required work, replacement parts, paintwork and other identifiable repair items." },
        { title: "Extent of damage", description: "Visible damage, possible hidden damage, previous damage and vehicle-specific details." },
        { title: "Diminution in value", description: "A possible loss in market value despite proper repairs." },
        { title: "Replacement value and residual value", description: "Important values for assessing whether a repair is economically reasonable." },
        { title: "Photo documentation", description: "Clear photographs and a description of the damage for further coordination." },
      ],
    },
    {
      title: "Which documents are helpful?",
      description:
        "If available, a few details can help with the initial assessment. We will agree the appropriate way to send them with you directly.",
      items: [
        { title: "Vehicle registration document", description: "Registration certificate Part I or the main vehicle details." },
        { title: "Damage photos", description: "Existing photographs that may help with the initial assessment." },
        { title: "Accident and insurance details", description: "Details of the other party involved, insurance information or a reference number, if already available." },
        { title: "Brief description of the damage", description: "What happened, which areas are affected and whether the vehicle is still roadworthy." },
      ],
    },
  ],
  whyChoose: [
    { title: "Contact and initial assessment", description: "Call, write via WhatsApp or send a short enquiry. We assess the situation initially and clarify the next steps." },
    { title: "Arrange the inspection", description: "We check what information is already available and how the vehicle inspection can be organised." },
    { title: "Document the damage", description: "An appraiser inspects, photographs and assesses the damage professionally." },
    { title: "Receive the appraisal and discuss the next steps", description: "You receive a clear basis for further discussions with the insurer, repair shop or lawyer." },
  ],
  faqs: [
    { question: "Who pays for the accident damage appraisal?", answer: "If you were not at fault, the other party's liability insurer will generally cover the appraisal costs. For very minor damage, unclear liability or special circumstances, an initial assessment may be useful. We discuss your case before you commission us." },
    { question: "Is a repair estimate enough?", answer: "A repair estimate may be sufficient for minor damage. An independent accident damage appraisal can be useful if the extent of the damage, diminution in value, hidden damage or the claims process is unclear." },
    { question: "Can I send photos in advance?", answer: "Yes. Existing damage photos help with the initial assessment. We will agree the appropriate way to send them with you personally." },
    { question: "Does the vehicle have to be roadworthy?", answer: "Not necessarily. Tell us whether the vehicle can still be driven and where it is located. We will then agree the appropriate process." },
    { question: "How quickly will I receive a response?", answer: "We will contact you promptly after your enquiry to discuss the next steps personally." },
  ],
  formTitle: "Briefly describe the damage and request a call back",
  ctaTitle: "Request an accident appraisal",
  ctaDescription: [
    "Briefly describe the damage.",
    "We will discuss the next steps with you.",
  ],
  formTextOverrides: {
    description: "Briefly describe the damage. We will contact you promptly and discuss the next steps.",
    vehiclePlaceholder: "e.g. BMW 320d, model year 2021",
    date: "Preferred time for a call back or inspection",
    message: "Description of the damage",
    messagePlaceholder: "What happened? Which areas are damaged? Is the vehicle still roadworthy?",
    submit: "Send enquiry",
    submitAriaLabel: "Send enquiry about an accident damage appraisal",
  },
  layoutLabels: {
    backToServices: "Back to home",
    servicesTitle: "When is an accident damage appraisal useful?",
    whyTitle: "How the accident damage appraisal works",
    whyDescription: "Four clear steps from the first contact to the completed appraisal.",
    faqTitle: "Frequently asked questions",
  },
} as const satisfies LocalizedAppraisalPage

const englishVehicleValuation = {
  title: "Vehicle Valuation in Berlin",
  subtitle: "PROFESSIONAL VEHICLE VALUE ASSESSMENT",
  description:
    "We consider the vehicle's condition, equipment and key details. Before we begin, we discuss which scope is appropriate for your situation.",
  imageAlt: "Vehicle, documents and camera prepared for a vehicle valuation",
  heroNotice: "Assessed and recognised by DESAG as an expert in motor vehicle damage and valuation.",
  heroActions: actions("en", "Make an enquiry about a vehicle valuation", "#fahrzeugbewertung-anfrage"),
  bottomActions: actions("en", "Make an enquiry about a vehicle valuation", "#fahrzeugbewertung-anfrage"),
  benefits: ["Check condition and equipment", "Consider special features", "Clarify the purpose of the valuation", "Explain the result to you personally"],
  services: [
    { title: "Before selling", description: "You want a realistic professional assessment before entering sales discussions." },
    { title: "Before buying", description: "You want the condition, equipment and key details checked before making a decision." },
    { title: "For private or business purposes", description: "You need an objective basis for a private or business decision." },
    { title: "For special features", description: "Modifications, optional equipment or an unusual vehicle condition should be considered appropriately." },
  ],
  servicesDescription:
    "Before a purchase, sale or another important decision, a professional assessment of the vehicle's value can provide clarity.",
  detailSections: [
    {
      title: "Which features are considered?",
      wide: true,
      description:
        "Depending on the purpose, the assessment considers the basic vehicle details, mileage, condition, equipment and special features together. This provides a professionally reasoned valuation. A later purchase or sale price cannot be guaranteed.",
      items: [
        { title: "Basic details", description: "Model, first registration and other key vehicle details." },
        { title: "Age and mileage", description: "Vehicle age and current mileage." },
        { title: "Condition and care", description: "Bodywork, interior and the visible standard of care." },
        { title: "Equipment", description: "Standard equipment, optional equipment and notable equipment features." },
        { title: "Damage and previous damage", description: "Known damage where it is relevant to the valuation." },
        { title: "Modifications and special features", description: "Documented modifications and vehicle-specific features." },
      ],
    },
  ],
  whyChoose: [
    { title: "State the purpose", description: "Tell us what you need the valuation for." },
    { title: "Discuss the details", description: "We clarify which documents and information are needed." },
    { title: "Inspect the vehicle", description: "Condition, equipment, mileage and special features are considered." },
    { title: "Explain the result to you personally", description: "The relevant factors and result are explained clearly within the agreed scope." },
  ],
  faqs: [
    { question: "What is the difference between a vehicle valuation and a valuation report?", answer: "A vehicle valuation considers the basic details, condition, mileage and equipment. A valuation report often refers to a more extensively documented assessment. We clarify the appropriate scope with you in advance." },
    { question: "Do I need all documents before contacting you?", answer: "No. A few key vehicle details and the reason for the valuation are enough for the first contact." },
    { question: "Will the valuation equal the later sale price?", answer: "No. It is a professional assessment at the time of valuation. The actual purchase or sale price may differ." },
    { question: "What happens after my enquiry?", answer: "We discuss the purpose, available information and appropriate scope." },
  ],
  formTitle: "Request a vehicle valuation",
  ctaTitle: "Request a vehicle valuation",
  ctaDescription: [
    "Tell us about the vehicle and the reason for the valuation.",
    "We will clarify which details are required.",
  ],
  formTextOverrides: {
    description: "Briefly describe the vehicle and the purpose of the valuation. We will contact you to discuss the next steps.",
    vehicle: "Vehicle model",
    vehiclePlaceholder: "e.g. BMW 5 Series, first registered in 2020",
    message: "Vehicle details and additional information",
    messagePlaceholder: "For example sale, mileage, equipment or known previous damage",
    submit: "Send enquiry",
    submitAriaLabel: "Send enquiry about a vehicle valuation",
  },
  formHelperText:
    "For the first contact, the vehicle model, first registration, mileage and reason for the valuation are sufficient. We will discuss any additional documents with you afterwards.",
  layoutLabels: {
    backToServices: "Back to home",
    servicesTitle: "When is a vehicle valuation useful?",
    whyTitle: "How the vehicle valuation works",
    whyDescription: "The scope and process depend on the vehicle and the purpose of the valuation.",
    faqTitle: "Frequently asked questions",
  },
} as const satisfies LocalizedAppraisalPage

const englishDamageDocumentation = {
  title: "Vehicle Damage Documentation in Berlin",
  subtitle: "RECORD DAMAGE CLEARLY",
  description:
    "Vehicle damage documentation records visible damage and the current condition of your vehicle in a clear, structured way. It can include affected areas, photographs, vehicle details and available records. We discuss in advance what should be documented.",
  imageAlt: "Vehicle damage documentation with vehicle photographs and available records",
  heroNotice: "Assessed and recognised by DESAG as an expert in motor vehicle damage and valuation.",
  heroActions: actions("en", "Make an enquiry about vehicle damage documentation", "#schadendokumentation-anfrage"),
  bottomActions: actions("en", "Make an enquiry about damage documentation", "#schadendokumentation-anfrage"),
  benefits: ["Record damage systematically", "Document the vehicle's condition", "Include photos and available records", "Discuss the process in advance"],
  services: [
    { title: "Record damage promptly", description: "Visible damage should be documented promptly and systematically." },
    { title: "Prepare for a handover or return", description: "The current vehicle condition should be recorded before a handover or return." },
    { title: "Record previous damage or changes", description: "Existing damage or changes to the vehicle should be documented clearly." },
    { title: "Prepare for a professional review", description: "Photos, vehicle details and available records should be organised for further review." },
  ],
  servicesDescription:
    "A structured record can be useful when damage or a specific vehicle condition should be retained for further coordination.",
  detailSections: [
    {
      title: "What can be included in the documentation?",
      wide: true,
      description: "What is recorded depends on your vehicle and your request. This may include:",
      items: [
        { title: "Damage to the vehicle", description: "Visible damage within the agreed scope." },
        { title: "Affected vehicle areas", description: "The relevant body and vehicle areas." },
        { title: "Vehicle details", description: "The information needed to identify the vehicle." },
        { title: "Photographs", description: "Overview and detail photographs from useful angles." },
        { title: "Previous damage and special features", description: "Known previous damage, changes and other relevant features." },
        { title: "Available records", description: "Existing documents and additional information." },
      ],
    },
    {
      title: "Vehicle damage documentation or accident damage appraisal?",
      wide: true,
      description: "Vehicle damage documentation records damage and the vehicle condition in a structured way. An accident damage appraisal goes further and may also assess repair costs, diminution in value and other relevant accident-related values. Hidden or technically complex damage cannot be assessed conclusively through documentation alone. We will help you clarify which option is appropriate.",
      items: [
        { title: "Vehicle damage documentation", description: "A structured record of damage or vehicle condition within the scope agreed in advance." },
        { title: "Accident damage appraisal", description: "A more detailed professional assessment of accident damage, for example including repair costs, diminution in value and other relevant values." },
        { title: "Clarify the right option", description: "You do not need to decide on your own. We will discuss your situation first." },
      ],
    },
  ],
  whyChoose: [
    { title: "Describe your request", description: "Briefly explain the damage, affected area or vehicle condition." },
    { title: "Discuss the process", description: "We clarify which areas, photos and existing records should be considered." },
    { title: "Inspect the vehicle", description: "We examine the relevant areas and consider the agreed information." },
    { title: "Discuss the result", description: "We bring the documented points together and explain the result to you." },
  ],
  faqs: [
    { question: "What is vehicle damage documentation?", answer: "It records damage or the current condition of your vehicle in a structured way. We agree the exact scope with you beforehand." },
    { question: "How does it differ from an accident damage appraisal?", answer: "An accident damage appraisal goes beyond documentation and may also assess repair costs, diminution in value and other relevant values. We will help you choose the appropriate option." },
    { question: "Which details or documents are useful?", answer: "For the first enquiry, a few details about the vehicle, affected area and what should be documented are sufficient. We can agree how to send existing photos or documents afterwards." },
    { question: "What happens after my enquiry?", answer: "We discuss your request, agree the appropriate process and explain which details or documents are useful for the next step." },
  ],
  formTitle: "Request vehicle damage documentation",
  ctaTitle: "Request damage documentation",
  ctaDescription: [
    "Briefly describe what should be documented.",
    "We will discuss the next steps with you.",
  ],
  formTextOverrides: {
    description: "Briefly describe what is damaged or which vehicle condition you would like documented. We will contact you to discuss the next steps.",
    vehicle: "Vehicle model",
    vehiclePlaceholder: "e.g. VW Golf, first registered in 2021",
    message: "Damage or vehicle condition",
    messagePlaceholder: "For example a scratch on the right door, visible accident damage or the condition before returning a vehicle",
    submit: "Send enquiry",
    submitAriaLabel: "Send enquiry about vehicle damage documentation",
  },
  formHelperText:
    "For the first contact, the vehicle model, affected area and a short description are sufficient. We can agree how to provide existing photos or documents afterwards.",
  layoutLabels: {
    backToServices: "Back to home",
    servicesTitle: "When is vehicle damage documentation useful?",
    whyTitle: "How vehicle damage documentation works",
    whyDescription: "We discuss what should be documented and which information is useful before the inspection.",
    faqTitle: "Frequently asked questions",
  },
} as const satisfies LocalizedAppraisalPage

const russianAccident = {
  title: "Оценка ущерба после ДТП в Берлине",
  subtitle: "НЕЗАВИСИМАЯ ОЦЕНКА ПОСЛЕ ДТП",
  description:
    "После ДТП важно быстро получить ясность: что повреждено, какие расходы могут возникнуть и как действовать дальше со страховой компанией, сервисом или адвокатом? UNEXT объективно, понятно и независимо документирует повреждения автомобиля.",
  imageAlt: "Повреждение автомобиля после ДТП в Берлине",
  heroNotice:
    "Если вы не виноваты в ДТП, расходы на оценку ущерба, как правило, оплачивает страховая компания гражданской ответственности виновной стороны.",
  heroActions: actions("ru", "Оставить заявку на оценку ущерба после ДТП", "#unfallgutachten-anfrage"),
  bottomActions: actions("ru", "Оставить заявку на оценку ущерба", "#unfallgutachten-anfrage"),
  benefits: ["Квалификация по повреждениям автомобилей и оценке стоимости проверена DESAG", "Независимая оценка ущерба в Берлине"],
  services: [
    { title: "Повреждение серьёзнее небольшой царапины", description: "Если стоимость ремонта, утрата товарной стоимости автомобиля или полный объём повреждений неясны, независимая оценка ущерба создаёт надёжную основу для дальнейших действий." },
    { title: "Возможны скрытые повреждения", description: "После удара могут возникнуть повреждения, которые не видны сразу. Осмотр помогает профессионально оценить ситуацию." },
    { title: "Понятная основа для страховой компании", description: "Экспертное заключение фиксирует объём повреждений, стоимость ремонта, фотографии и существенные показатели для дальнейшего урегулирования." },
  ],
  serviceNote: {
    title: "Свободный выбор эксперта после ДТП не по вашей вине",
    description: "После ДТП, в котором вы не виноваты, вы, как правило, можете самостоятельно выбрать независимого эксперта. До оформления заказа мы обсудим, имеет ли такая оценка ущерба смысл в вашем случае.",
  },
  detailSections: [
    {
      title: "Что включает экспертное заключение?",
      description:
        "Экспертное заключение понятно и профессионально фиксирует повреждения автомобиля. Точный объём зависит от автомобиля, характера повреждений и результатов осмотра.",
      items: [
        { title: "Стоимость ремонта", description: "Необходимые работы, запасные части, покраска и другие выявленные позиции ремонта." },
        { title: "Объём повреждений", description: "Видимые и возможные скрытые повреждения, прежние повреждения и особенности автомобиля." },
        { title: "Утрата товарной стоимости", description: "Возможная потеря рыночной стоимости даже после качественного ремонта." },
        { title: "Стоимость замещения и остаточная стоимость", description: "Важные показатели для оценки экономической целесообразности ремонта." },
        { title: "Фотодокументация", description: "Понятные фотографии и описание повреждений для дальнейшего согласования." },
      ],
    },
    {
      title: "Какие документы помогут?",
      description: "Если эти сведения уже есть, они помогут при первичной оценке. Подходящий способ передачи мы согласуем с вами напрямую.",
      items: [
        { title: "Свидетельство о регистрации", description: "Свидетельство о регистрации транспортного средства, часть I, или основные данные автомобиля." },
        { title: "Фотографии повреждений", description: "Имеющиеся фотографии, которые могут помочь при первичной оценке." },
        { title: "Данные о ДТП и страховании", description: "Данные другого участника ДТП, сведения о страховой компании или номер дела, если они уже имеются." },
        { title: "Краткое описание повреждения", description: "Что произошло, какие участки повреждены и может ли автомобиль передвигаться." },
      ],
    },
  ],
  whyChoose: [
    { title: "Связь и первичная оценка", description: "Позвоните, напишите в WhatsApp или отправьте короткий запрос. Мы предварительно оценим ситуацию и уточним дальнейшие шаги." },
    { title: "Согласование осмотра", description: "Мы уточним, какие сведения уже есть и как лучше организовать осмотр автомобиля." },
    { title: "Фиксация повреждений", description: "Автоэксперт осмотрит, сфотографирует и профессионально оценит повреждения." },
    { title: "Получение заключения", description: "Вы получите понятную основу для дальнейшего общения со страховой компанией, сервисом или адвокатом." },
  ],
  faqs: [
    { question: "Кто оплачивает оценку ущерба после ДТП?", answer: "Если вы не виноваты в ДТП, расходы на оценку ущерба, как правило, оплачивает страховая компания гражданской ответственности виновной стороны. При незначительных повреждениях, неясной ответственности или особых обстоятельствах сначала может потребоваться предварительная оценка. Мы обсудим ваш случай до оформления заказа." },
    { question: "Достаточно ли калькуляции ремонта?", answer: "При небольших повреждениях калькуляции может быть достаточно. Независимая оценка ущерба может быть полезна, если неясны объём повреждений, утрата товарной стоимости, возможные скрытые дефекты или дальнейшее урегулирование." },
    { question: "Можно ли заранее отправить фотографии?", answer: "Да. Фотографии помогут при первичной оценке. Подходящий способ передачи мы согласуем с вами лично." },
    { question: "Автомобиль должен быть на ходу?", answer: "Не обязательно. Сообщите, может ли автомобиль передвигаться и где он находится. Мы согласуем подходящий порядок действий." },
    { question: "Как быстро я получу ответ?", answer: "После запроса мы свяжемся с вами в ближайшее время и лично обсудим дальнейшие шаги." },
  ],
  formTitle: "Кратко опишите повреждение и закажите обратный звонок",
  ctaTitle: "Запросить оценку ущерба",
  ctaDescription: [
    "Кратко опишите повреждение.",
    "Мы согласуем с вами дальнейшие шаги.",
  ],
  formTextOverrides: {
    description: "Кратко опишите повреждение. Мы свяжемся с вами и согласуем дальнейшие шаги.",
    vehiclePlaceholder: "например, BMW 320d, 2021 года выпуска",
    date: "Удобное время для звонка или осмотра",
    message: "Описание повреждения",
    messagePlaceholder: "Что произошло? Какие участки повреждены? Автомобиль на ходу?",
    submit: "Отправить заявку",
    submitAriaLabel: "Отправить заявку на оценку ущерба после ДТП",
  },
  layoutLabels: {
    backToServices: "На главную",
    servicesTitle: "Когда нужна оценка ущерба после ДТП?",
    whyTitle: "Как проходит оценка ущерба",
    whyDescription: "Четыре понятных шага от первого обращения до заключения.",
    faqTitle: "Частые вопросы об оценке ущерба после ДТП",
  },
} as const satisfies LocalizedAppraisalPage

const russianVehicleValuation = {
  title: "Оценка стоимости автомобиля в Берлине",
  subtitle: "ПРОФЕССИОНАЛЬНАЯ ОЦЕНКА СТОИМОСТИ",
  description: "При оценке учитываются состояние, комплектация и важные данные автомобиля. Подходящий для вашей ситуации объём работы мы согласуем заранее.",
  imageAlt: "Автомобиль, документы и камера для оценки стоимости",
  heroNotice: "Квалификация эксперта по повреждениям транспортных средств и оценке стоимости проверена и признана DESAG.",
  heroActions: actions("ru", "Оставить заявку на оценку стоимости автомобиля", "#fahrzeugbewertung-anfrage"),
  bottomActions: actions("ru", "Оставить заявку на оценку стоимости автомобиля", "#fahrzeugbewertung-anfrage"),
  benefits: ["Проверить состояние и комплектацию", "Учесть особые характеристики", "Заранее определить цель оценки", "Понятно объяснить результат"],
  services: [
    { title: "Перед продажей", description: "Вы хотите начать переговоры с реалистичной профессиональной оценкой." },
    { title: "Перед покупкой", description: "Вы хотите проверить состояние, комплектацию и основные данные до принятия решения." },
    { title: "Для личных или деловых целей", description: "Вам нужна объективная основа для личного или делового решения." },
    { title: "При особых характеристиках", description: "Необходимо правильно учесть переоборудование, дополнительную комплектацию или необычное состояние автомобиля." },
  ],
  servicesDescription: "Перед покупкой, продажей или другим важным решением профессиональная оценка стоимости автомобиля помогает получить ясность.",
  detailSections: [
    {
      title: "Какие характеристики учитываются?",
      wide: true,
      description:
        "В зависимости от цели оценки основные данные, пробег, состояние, комплектация и особенности автомобиля рассматриваются в совокупности. На этой основе формируется профессионально обоснованная оценка. Гарантировать будущую цену покупки или продажи невозможно.",
      items: [
        { title: "Основные данные", description: "Модель, дата первой регистрации и другие важные данные автомобиля." },
        { title: "Возраст и пробег", description: "Возраст автомобиля и его текущий пробег." },
        { title: "Состояние и уход", description: "Состояние кузова и салона, а также видимые признаки ухода за автомобилем." },
        { title: "Комплектация", description: "Серийная комплектация, дополнительное оборудование и особые элементы оснащения." },
        { title: "Повреждения и прежние повреждения", description: "Известные повреждения, если они имеют значение для оценки." },
        { title: "Переоборудование и особенности", description: "Документально подтверждённые переоборудования и особенности конкретного автомобиля." },
      ],
    },
  ],
  whyChoose: [
    { title: "Указать цель", description: "Сообщите, для чего вам нужна оценка." },
    { title: "Согласовать данные", description: "Мы уточним, какие документы и сведения необходимы." },
    { title: "Осмотреть автомобиль", description: "Учитываются состояние, комплектация, пробег и особые характеристики." },
    { title: "Объяснить результат", description: "Мы понятно объясним учтённые факторы и результат в согласованном объёме." },
  ],
  faqs: [
    { question: "Чем оценка автомобиля отличается от подробного отчёта о стоимости?", answer: "Оценка учитывает основные данные, состояние, пробег и комплектацию. Подробный отчёт обычно содержит более развёрнутую документацию. Подходящий объём мы согласуем заранее." },
    { question: "Нужно ли сразу иметь все документы?", answer: "Нет. Для первого обращения достаточно основных данных автомобиля и причины оценки." },
    { question: "Будет ли оценка равна будущей цене продажи?", answer: "Нет. Это профессиональная оценка на определённую дату. Фактическая цена покупки или продажи может отличаться." },
    { question: "Что произойдёт после запроса?", answer: "Мы обсудим цель оценки, имеющиеся сведения и подходящий объём работы." },
  ],
  formTitle: "Запросить оценку стоимости автомобиля",
  ctaTitle: "Запросить оценку стоимости автомобиля",
  ctaDescription: [
    "Укажите автомобиль и цель оценки.",
    "Мы уточним, какие данные понадобятся.",
  ],
  formTextOverrides: {
    description: "Кратко опишите автомобиль и цель оценки. Мы свяжемся с вами для дальнейшего согласования.",
    vehicle: "Модель автомобиля",
    vehiclePlaceholder: "например, BMW 5 серии, первая регистрация в 2020 году",
    message: "Данные автомобиля и дополнительная информация",
    messagePlaceholder: "Например, продажа, пробег, комплектация или известные прежние повреждения",
    submit: "Отправить заявку",
    submitAriaLabel: "Отправить заявку на оценку стоимости автомобиля",
  },
  formHelperText: "Для первого обращения достаточно модели, даты первой регистрации, пробега и причины оценки. Дополнительные документы мы согласуем позже.",
  layoutLabels: {
    backToServices: "На главную",
    servicesTitle: "Когда полезна оценка стоимости?",
    whyTitle: "Как проходит оценка автомобиля",
    whyDescription: "Объём и порядок зависят от автомобиля и цели оценки.",
    faqTitle: "Частые вопросы об оценке стоимости",
  },
} as const satisfies LocalizedAppraisalPage

const russianDamageDocumentation = {
  title: "Фиксация повреждений в Берлине",
  subtitle: "ПОСЛЕДОВАТЕЛЬНО ЗАФИКСИРОВАТЬ ПОВРЕЖДЕНИЯ",
  description:
    "Фиксация повреждений позволяет последовательно отразить видимые повреждения и текущее состояние автомобиля. При этом можно учесть повреждённые участки, фотографии, данные автомобиля и имеющиеся документы. Заранее мы обсудим, что именно необходимо зафиксировать.",
  imageAlt: "Фиксация повреждений автомобиля с фотографиями и документами",
  heroNotice: "Квалификация эксперта по повреждениям транспортных средств и оценке стоимости проверена и признана DESAG.",
  heroActions: actions("ru", "Оставить заявку на фиксацию повреждений", "#schadendokumentation-anfrage"),
  bottomActions: actions("ru", "Оставить заявку на фиксацию повреждений", "#schadendokumentation-anfrage"),
  benefits: ["Последовательно зафиксировать повреждения", "Зафиксировать состояние автомобиля", "Учесть фотографии и имеющиеся документы", "Заранее согласовать порядок действий"],
  services: [
    { title: "Оперативно зафиксировать повреждение", description: "Видимое повреждение необходимо своевременно и последовательно зафиксировать." },
    { title: "Подготовить передачу или возврат", description: "Текущее состояние автомобиля следует зафиксировать перед передачей или возвратом." },
    { title: "Зафиксировать прежние повреждения или изменения", description: "Имеющиеся повреждения или изменения автомобиля нужно зафиксировать в понятном виде." },
    { title: "Подготовить профессиональную проверку", description: "Фотографии, данные автомобиля и документы должны быть систематизированы для дальнейшей проверки." },
  ],
  servicesDescription: "Последовательная фиксация полезна, когда повреждение или состояние автомобиля нужно сохранить для дальнейшего согласования.",
  detailSections: [
    {
      title: "Что можно зафиксировать?",
      wide: true,
      description: "Объём фиксации зависит от вашего автомобиля и вашего запроса. В него могут входить:",
      items: [
        { title: "Повреждения автомобиля", description: "Вид и расположение видимых повреждений автомобиля." },
        { title: "Повреждённые участки", description: "Участки автомобиля, на которых видны повреждения или изменения." },
        { title: "Данные автомобиля", description: "Модель и другие основные данные, полезные для вашего запроса." },
        { title: "Фотографии", description: "Общие и детальные снимки с подходящих ракурсов." },
        { title: "Прежние повреждения и особенности", description: "Известные прежние повреждения, изменения и особенности." },
        { title: "Имеющиеся документы", description: "Имеющиеся документы и дополнительная информация о том, что необходимо зафиксировать." },
      ],
    },
    {
      title: "Фиксация повреждений или оценка ущерба после ДТП?",
      wide: true,
      description:
        "Фиксация повреждений последовательно отражает повреждения и состояние автомобиля. Оценка ущерба после ДТП выходит за рамки фиксации и может дополнительно учитывать, например, стоимость ремонта, утрату товарной стоимости и другие важные показатели, связанные с ущербом после ДТП. Скрытые или требующие технической проверки повреждения нельзя окончательно оценить только на основании фиксации. Какой вариант подходит для вашего запроса, мы обсудим вместе с вами.",
      items: [
        { title: "Фиксация повреждений", description: "Последовательная фиксация повреждений или состояния автомобиля в согласованном объёме." },
        { title: "Оценка ущерба после ДТП", description: "Более подробная профессиональная оценка ущерба после ДТП, например с учётом стоимости ремонта, утраты товарной стоимости и других важных показателей." },
        { title: "Выбор подходящего варианта", description: "Вам не нужно решать самостоятельно. Сначала мы обсудим вашу ситуацию." },
      ],
    },
  ],
  whyChoose: [
    { title: "Описать запрос", description: "Кратко расскажите о повреждении, затронутом участке или состоянии автомобиля." },
    { title: "Согласовать порядок", description: "Мы уточним, какие участки, фотографии и имеющиеся документы следует учесть." },
    { title: "Осмотреть автомобиль", description: "Мы осмотрим соответствующие участки и учтём согласованные сведения." },
    { title: "Обсудить результат", description: "Мы объединим зафиксированные данные и объясним вам результат." },
  ],
  faqs: [
    { question: "Что такое фиксация повреждений?", answer: "Это последовательная фиксация повреждений или текущего состояния автомобиля. Точный объём мы согласуем с вами заранее." },
    { question: "Чем она отличается от оценки ущерба после ДТП?", answer: "Оценка ущерба после ДТП выходит за рамки простой фиксации и может дополнительно учитывать стоимость ремонта, утрату товарной стоимости и другие существенные показатели. Мы поможем выбрать подходящий вариант." },
    { question: "Какие сведения или документы полезны?", answer: "Для первого запроса достаточно основных данных автомобиля, информации о повреждённом участке и цели фиксации. Подходящий способ передачи фотографий или документов мы согласуем позже." },
    { question: "Что произойдёт после запроса?", answer: "Мы обсудим ситуацию, согласуем подходящий порядок и сообщим, какие сведения или документы нужны для следующего шага." },
  ],
  formTitle: "Запросить фиксацию повреждений",
  ctaTitle: "Запросить фиксацию повреждений",
  ctaDescription: [
    "Кратко опишите, что нужно зафиксировать.",
    "Мы согласуем с вами дальнейшие шаги.",
  ],
  formTextOverrides: {
    description: "Кратко опишите повреждение или состояние автомобиля, которое необходимо зафиксировать. Мы свяжемся с вами и согласуем дальнейшие шаги.",
    vehicle: "Модель автомобиля",
    vehiclePlaceholder: "например, VW Golf, первая регистрация в 2021 году",
    message: "Повреждение или состояние автомобиля",
    messagePlaceholder: "Например, царапина на правой двери, видимое повреждение после ДТП или состояние перед возвратом автомобиля",
    submit: "Отправить заявку",
    submitAriaLabel: "Отправить заявку на фиксацию повреждений",
  },
  formHelperText: "Для первого обращения достаточно модели автомобиля, повреждённого участка и краткого описания. Подходящий способ передачи фотографий или документов мы согласуем позже.",
  layoutLabels: {
    backToServices: "На главную",
    servicesTitle: "Когда полезна фиксация повреждений?",
    whyTitle: "Как проходит фиксация повреждений",
    whyDescription: "До осмотра мы обсудим, что нужно зафиксировать и какие сведения помогут.",
    faqTitle: "Частые вопросы о фиксации повреждений",
  },
} as const satisfies LocalizedAppraisalPage

export const appraisalPageTranslations = {
  en: {
    accident: englishAccident,
    vehicleValuation: englishVehicleValuation,
    damageDocumentation: englishDamageDocumentation,
  },
  ru: {
    accident: russianAccident,
    vehicleValuation: russianVehicleValuation,
    damageDocumentation: russianDamageDocumentation,
  },
} as const satisfies Record<Exclude<Locale, "de">, Record<string, LocalizedAppraisalPage>>
