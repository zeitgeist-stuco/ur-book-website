// src/components/Header.tsx
'use client'

import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'

const LANGUAGES = [
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
]

export function Header() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [langOpen, setLangOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  function switchLocale(newLocale: string) {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
    setLangOpen(false)
  }

  const currentLang = LANGUAGES.find(l => l.code === locale)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E8D9C5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7A5C3D, #CF7923)' }}>
            <span className="text-white font-bold text-sm font-serif">u</span>
          </div>
          <span className="font-display font-bold text-xl text-[#332F2B] tracking-wide">ur-book</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#wie-es-funktioniert" className="text-sm text-[#6B5A4A] hover:text-[#332F2B] transition-colors">{t('howItWorks')}</a>
          <a href="#preise" className="text-sm text-[#6B5A4A] hover:text-[#332F2B] transition-colors">{t('pricing')}</a>
          <a href="#faq" className="text-sm text-[#6B5A4A] hover:text-[#332F2B] transition-colors">{t('faq')}</a>
        </nav>

        {/* Right: Lang + CTA */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E8D9C5] text-sm text-[#6B5A4A] hover:bg-[#FEF8EE] transition-colors"
            >
              <span>{currentLang?.flag}</span>
              <span className="hidden sm:inline">{locale.toUpperCase()}</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-[#E8D9C5] rounded-xl shadow-lg overflow-hidden z-50 min-w-[160px]">
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => switchLocale(lang.code)}
                    className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-[#FEF8EE] transition-colors text-left ${locale === lang.code ? 'text-[#CF7923] font-medium' : 'text-[#332F2B]'}`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="https://zeitgeist-phi.vercel.app/register"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium text-white transition-colors"
            style={{ background: '#CF7923' }}
          >
            {t('start')}
          </a>

          {/* Mobile menu toggle */}
          <button className="md:hidden p-2 text-[#6B5A4A]" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E8D9C5] bg-white px-4 py-4 space-y-3">
          <a href="#wie-es-funktioniert" className="block text-sm text-[#6B5A4A] py-2" onClick={() => setMobileOpen(false)}>{t('howItWorks')}</a>
          <a href="#preise" className="block text-sm text-[#6B5A4A] py-2" onClick={() => setMobileOpen(false)}>{t('pricing')}</a>
          <a href="#faq" className="block text-sm text-[#6B5A4A] py-2" onClick={() => setMobileOpen(false)}>{t('faq')}</a>
          <a href="https://zeitgeist-phi.vercel.app/register" className="block w-full text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: '#CF7923' }}>{t('start')}</a>
        </div>
      )}
    </header>
  )
}
