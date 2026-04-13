// src/components/Hero.tsx
import { useTranslations } from 'next-intl'
import { GlassSurface } from './GlassSurface'
import type { CSSProperties } from 'react'

const TOPICS: {
  label: string
  left: string
  top: string
  rotate: string
  delay: string
  duration: string
}[] = [
  { label: 'Kindheit',      left: '3%',  top: '13%', rotate: '-3deg', delay: '0s',    duration: '8s'  },
  { label: 'Reisen',        left: '63%', top: '7%',  rotate: '2deg',  delay: '1.4s',  duration: '10s' },
  { label: 'Karriere',      left: '79%', top: '44%', rotate: '-1deg', delay: '2.8s',  duration: '9s'  },
  { label: 'Familie',       left: '56%', top: '74%', rotate: '3deg',  delay: '0.6s',  duration: '11s' },
  { label: 'Bildung',       left: '7%',  top: '69%', rotate: '-2deg', delay: '2.1s',  duration: '7s'  },
  { label: 'Personen',      left: '38%', top: '5%',  rotate: '1deg',  delay: '3.9s',  duration: '9s'  },
  { label: 'Erlebnisse',    left: '70%', top: '24%', rotate: '-2deg', delay: '1.1s',  duration: '12s' },
  { label: 'Träume',        left: '21%', top: '83%', rotate: '4deg',  delay: '3.4s',  duration: '8s'  },
  { label: 'Liebe',         left: '86%', top: '71%', rotate: '-3deg', delay: '2.6s',  duration: '10s' },
  { label: 'Freundschaft',  left: '2%',  top: '40%', rotate: '2deg',  delay: '1.7s',  duration: '13s' },
]

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FEF8EE 0%, #FAF6F0 50%, #FDF0D5 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Animated background topic cards */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {TOPICS.map((topic) => (
          <div
            key={topic.label}
            style={
              {
                position: 'absolute',
                left: topic.left,
                top: topic.top,
                '--float-rotate': topic.rotate,
                animationName: 'float-card',
                animationDuration: topic.duration,
                animationDelay: topic.delay,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                transform: `rotate(${topic.rotate})`,
              } as CSSProperties
            }
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 16px',
                borderRadius: 9999,
                background: 'rgba(254, 248, 238, 0.82)',
                border: '1px solid rgba(232, 217, 197, 0.85)',
                boxShadow: '0 2px 8px rgba(122, 92, 61, 0.09)',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: '#7A5C3D',
                whiteSpace: 'nowrap',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#CF7923',
                  flexShrink: 0,
                }}
              />
              {topic.label}
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 lg:py-32 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* Text column wrapped in GlassSurface */}
          <GlassSurface
            borderRadius={32}
            displace={0.018}
            distortionScale={-65}
            redOffset={0}
            greenOffset={8}
            blueOffset={18}
            brightness={18}
            opacity={0.97}
          >
            <div className="p-8 lg:p-10">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
                style={{ background: '#FDF0D5', color: '#7A5C3D' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#CF7923' }} />
                KI-Biographie · Gedrucktes Buch
              </div>

              <h1
                className="font-display font-bold text-[#332F2B] leading-tight mb-6"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
              >
                {t('headline')}
              </h1>

              <p
                className="font-serif text-[#6B5A4A] leading-relaxed mb-8"
                style={{ fontSize: '1.15rem' }}
              >
                {t('subtext')}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://zeitgeist-phi.vercel.app/register"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium text-white transition-colors shadow-sm"
                  style={{ background: '#CF7923' }}
                >
                  {t('cta')}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="#wie-es-funktioniert"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium transition-colors border"
                  style={{
                    borderColor: '#E8D9C5',
                    color: '#7A5C3D',
                    background: 'rgba(255,255,255,0.55)',
                  }}
                >
                  {t('ctaSecondary')}
                </a>
              </div>
            </div>
          </GlassSurface>

          {/* Book illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-80">
              {/* Shadow */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full blur-xl"
                style={{ background: 'rgba(122,92,61,0.2)' }}
              />
              {/* Cover */}
              <div
                className="absolute inset-0 rounded-r-lg rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-8"
                style={{ background: 'linear-gradient(145deg, #7A5C3D, #504335)' }}
              >
                {/* Spine */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-5 rounded-l-sm"
                  style={{ background: '#504335' }}
                />
                {/* Gold lines */}
                <div className="w-full space-y-2 mt-4">
                  <div
                    className="h-0.5 rounded-full"
                    style={{ background: '#F6C070', opacity: 0.6 }}
                  />
                  <div
                    className="h-0.5 rounded-full w-3/4 mx-auto"
                    style={{ background: '#F6C070', opacity: 0.4 }}
                  />
                </div>
                {/* ur-book text */}
                <div className="mt-6 text-center">
                  <div
                    className="font-display font-bold text-2xl"
                    style={{ color: '#F6C070' }}
                  >
                    ur-book
                  </div>
                  <div className="text-xs mt-2" style={{ color: 'rgba(246,192,112,0.6)' }}>
                    Meine Geschichte
                  </div>
                </div>
                {/* Decorative lines */}
                <div className="w-full space-y-2 mt-6">
                  {[1, 0.7, 0.5, 0.3].map((op, i) => (
                    <div
                      key={i}
                      className="h-px rounded-full"
                      style={{ background: `rgba(246,192,112,${op})` }}
                    />
                  ))}
                </div>
              </div>
              {/* Pages effect */}
              <div
                className="absolute right-0 top-2 bottom-2 w-3 rounded-r"
                style={{
                  background: '#FAF6F0',
                  boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.05)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
