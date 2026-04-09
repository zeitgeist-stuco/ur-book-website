// src/components/Hero.tsx
import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section id="hero-section" className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FEF8EE 0%, #FAF6F0 50%, #FDF0D5 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: '#FDF0D5', color: '#7A5C3D' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#CF7923]" />
              KI-Biographie · Gedrucktes Buch
            </div>
            <h1 className="font-display font-bold text-[#332F2B] leading-tight mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
              {t('headline')}
            </h1>
            <p className="font-serif text-[#6B5A4A] leading-relaxed mb-8" style={{ fontSize: '1.15rem' }}>
              {t('subtext')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://zeitgeist-phi.vercel.app/register"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium text-white transition-colors shadow-sm"
                style={{ background: '#CF7923' }}
              >
                {t('cta')}
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
              <a
                href="#wie-es-funktioniert"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium transition-colors border"
                style={{ borderColor: '#E8D9C5', color: '#7A5C3D', background: 'white' }}
              >
                {t('ctaSecondary')}
              </a>
            </div>
          </div>

          {/* Book Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-80">
              {/* Book shadow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full blur-xl" style={{ background: 'rgba(122,92,61,0.2)' }} />
              {/* Book cover */}
              <div className="absolute inset-0 rounded-r-lg rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-8" style={{ background: 'linear-gradient(145deg, #7A5C3D, #504335)' }}>
                {/* Book spine */}
                <div className="absolute left-0 top-0 bottom-0 w-5 rounded-l-sm" style={{ background: '#504335' }} />
                {/* Gold lines */}
                <div className="w-full space-y-2 mt-4">
                  <div className="h-0.5 rounded-full" style={{ background: '#F6C070', opacity: 0.6 }} />
                  <div className="h-0.5 rounded-full w-3/4 mx-auto" style={{ background: '#F6C070', opacity: 0.4 }} />
                </div>
                {/* ur-book text */}
                <div className="mt-6 text-center">
                  <div className="font-display font-bold text-2xl" style={{ color: '#F6C070' }}>ur-book</div>
                  <div className="text-xs mt-2" style={{ color: 'rgba(246,192,112,0.6)' }}>Meine Geschichte</div>
                </div>
                {/* Decorative lines */}
                <div className="w-full space-y-2 mt-6">
                  {[1,0.7,0.5,0.3].map((op, i) => (
                    <div key={i} className="h-px rounded-full" style={{ background: `rgba(246,192,112,${op})` }} />
                  ))}
                </div>
              </div>
              {/* Pages effect */}
              <div className="absolute right-0 top-2 bottom-2 w-3 rounded-r" style={{ background: '#FAF6F0', boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.05)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
