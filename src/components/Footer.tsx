// src/components/Footer.tsx
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

const LANGUAGES = [
  { code: 'de', flag: '🇩🇪' }, { code: 'en', flag: '🇬🇧' }, { code: 'fr', flag: '🇫🇷' },
  { code: 'es', flag: '🇪🇸' }, { code: 'it', flag: '🇮🇹' }, { code: 'pl', flag: '🇵🇱' },
  { code: 'tr', flag: '🇹🇷' }, { code: 'ru', flag: '🇷🇺' },
]

export function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale()

  return (
    <footer style={{ background: '#332F2B' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7A5C3D, #CF7923)' }}>
                <span className="text-white font-bold text-sm font-serif">u</span>
              </div>
              <span className="font-display font-bold text-xl text-white">ur-book</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('tagline')}</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t('product')}</h4>
            <ul className="space-y-3">
              <li><a href="#wie-es-funktioniert" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>{tNav('howItWorks')}</a></li>
              <li><a href="#preise" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>{tNav('pricing')}</a></li>
              <li><a href="https://app.ur-book.org/register" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>{tNav('start')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t('legal')}</h4>
            <ul className="space-y-3">
              <li><Link href={`/${locale}/impressum`} className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('impressum')}</Link></li>
              <li><Link href={`/${locale}/datenschutz`} className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('datenschutz')}</Link></li>
              <li><Link href={`/${locale}/agb`} className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('agb')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t('contact')}</h4>
            <ul className="space-y-2">
              <li><a href="mailto:info@ur-book.org" className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>info@ur-book.org</a></li>
              <li><a href="mailto:support.zeitgeist@gmail.com" className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>support.zeitgeist@gmail.com</a></li>
              <li className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Friedrich-Engels-Straße 15<br />13156 Berlin</li>
            </ul>
          </div>
        </div>

        {/* Language switcher */}
        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="flex flex-wrap gap-2">
            {LANGUAGES.map(lang => (
              <Link
                key={lang.code}
                href={`/${lang.code}`}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-lg transition-colors ${locale === lang.code ? 'bg-[#CF7923]' : 'hover:bg-white/10'}`}
                title={lang.code.toUpperCase()}
              >
                {lang.flag}
              </Link>
            ))}
          </div>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
