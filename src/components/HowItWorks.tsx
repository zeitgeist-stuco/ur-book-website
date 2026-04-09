// src/components/HowItWorks.tsx
import { useTranslations } from 'next-intl'

const steps = [
  {
    num: '01',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    titleKey: 'step1Title',
    textKey: 'step1Text',
  },
  {
    num: '02',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    titleKey: 'step2Title',
    textKey: 'step2Text',
  },
  {
    num: '03',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    titleKey: 'step3Title',
    textKey: 'step3Text',
  },
]

export function HowItWorks() {
  const t = useTranslations('how')

  return (
    <section id="wie-es-funktioniert" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-[#332F2B] mb-4">{t('title')}</h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: '#CF7923' }} />
        </div>

        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px" style={{ background: 'linear-gradient(90deg, #E8D9C5, #F6C070, #E8D9C5)' }} />

          {steps.map((step) => (
            <div key={step.num} className="relative flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-2xl flex items-center justify-center mb-6 shadow-sm" style={{ background: '#FEF8EE', border: '1px solid #E8D9C5' }}>
                <div style={{ color: '#CF7923' }}>{step.icon}</div>
                <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center text-white" style={{ background: '#CF7923' }}>
                  {step.num}
                </span>
              </div>
              <h3 className="font-display font-semibold text-xl text-[#332F2B] mb-3">{t(step.titleKey as 'step1Title' | 'step2Title' | 'step3Title')}</h3>
              <p className="font-serif text-[#6B5A4A] leading-relaxed">{t(step.textKey as 'step1Text' | 'step2Text' | 'step3Text')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
