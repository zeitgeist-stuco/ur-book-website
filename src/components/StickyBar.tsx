// src/components/StickyBar.tsx
'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

export function StickyBar() {
  const t = useTranslations('stickybar')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero-section')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300"
      style={{
        background: '#332F2B',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <p className="hidden sm:block text-sm text-white/70 truncate">
          {t('tagline')}
        </p>
        <a
          href="https://app.ur-book.org/register"
          className="sm:w-auto w-full text-center px-6 py-2.5 rounded-xl text-sm font-medium text-white flex-shrink-0 transition-opacity hover:opacity-90"
          style={{ background: '#CF7923' }}
        >
          {t('cta')}
        </a>
      </div>
    </div>
  )
}
