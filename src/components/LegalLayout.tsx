// src/components/LegalLayout.tsx
import { Header } from './Header'
import { Footer } from './Footer'
import Link from 'next/link'

interface LegalLayoutProps {
  title: string
  children: React.ReactNode
  locale: string
  onlyDeEn?: boolean
  onlyDeEnText?: string
}

export function LegalLayout({ title, children, locale, onlyDeEn, onlyDeEnText }: LegalLayoutProps) {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-sm mb-8 transition-colors" style={{ color: '#A56E37' }}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Zurück
        </Link>
        <h1 className="font-display font-bold text-3xl text-[#332F2B] mb-8">{title}</h1>
        {onlyDeEn && !['de','en'].includes(locale) ? (
          <div className="p-6 rounded-xl border border-[#E8D9C5]" style={{ background: '#FEF8EE' }}>
            <p className="text-[#6B5A4A]">{onlyDeEnText}</p>
            <div className="flex gap-3 mt-4">
              <Link href={`/de`} className="text-sm font-medium" style={{ color: '#CF7923' }}>🇩🇪 Deutsch</Link>
              <Link href={`/en`} className="text-sm font-medium" style={{ color: '#CF7923' }}>🇬🇧 English</Link>
            </div>
          </div>
        ) : (
          <div className="prose max-w-none">
            <style>{`
              .prose h2 { font-family: var(--font-playfair); font-size: 1.5rem; font-weight: 700; color: #332F2B; margin-top: 2rem; margin-bottom: 1rem; }
              .prose h3 { font-family: var(--font-playfair); font-size: 1.2rem; font-weight: 600; color: #332F2B; margin-top: 1.5rem; margin-bottom: 0.75rem; }
              .prose p { font-family: var(--font-lora); color: #6B5A4A; line-height: 1.8; margin-bottom: 1rem; }
              .prose a { color: #CF7923; text-decoration: underline; }
              .prose ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1rem; }
              .prose li { font-family: var(--font-lora); color: #6B5A4A; margin-bottom: 0.5rem; }
            `}</style>
            {children}
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
