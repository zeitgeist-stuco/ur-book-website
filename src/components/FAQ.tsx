// src/components/FAQ.tsx
'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

const QUESTIONS = ['q1','q2','q3','q4','q5','q6'] as const

export function FAQ() {
  const t = useTranslations('faq')
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-[#332F2B] mb-4">{t('title')}</h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: '#CF7923' }} />
        </div>

        <div className="space-y-3">
          {QUESTIONS.map((qKey) => {
            const aKey = qKey.replace('q', 'a') as 'a1'|'a2'|'a3'|'a4'|'a5'|'a6'
            const isOpen = open === qKey
            return (
              <div key={qKey} className="border border-[#E8D9C5] rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors"
                  style={{ background: isOpen ? '#FEF8EE' : 'white' }}
                  onClick={() => setOpen(isOpen ? null : qKey)}
                >
                  <span className="font-medium text-[#332F2B] pr-4">{t(qKey)}</span>
                  <svg
                    className="w-5 h-5 flex-shrink-0 transition-transform"
                    style={{ color: '#CF7923', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 border-t border-[#E8D9C5]" style={{ background: '#FEF8EE' }}>
                    <p className="font-serif text-[#6B5A4A] leading-relaxed pt-4">{t(aKey)}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
