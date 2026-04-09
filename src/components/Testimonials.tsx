// src/components/Testimonials.tsx
import { useTranslations } from 'next-intl'

const FALLBACK = [
  { quote: "I never thought my story could sound so vivid. The book is a treasure for the whole family.", name: "Maria S.", city: "Hamburg" },
  { quote: "The AI asked me questions I had never asked myself. The result moved me to tears.", name: "Klaus W.", city: "Munich" },
  { quote: "A perfect gift for my father on his 75th birthday. He is still reading it.", name: "Sandra K.", city: "Vienna" },
]

export function Testimonials() {
  const t = useTranslations('testimonials')

  let testimonials: { quote: string; name: string; city: string }[]
  try {
    testimonials = [
      { quote: t('quote1'), name: t('name1'), city: t('city1') },
      { quote: t('quote2'), name: t('name2'), city: t('city2') },
      { quote: t('quote3'), name: t('name3'), city: t('city3') },
    ]
  } catch {
    testimonials = FALLBACK
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-[#332F2B] mb-4">
            {t('title')}
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: '#CF7923' }} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 flex flex-col gap-4"
              style={{ background: '#FAF6F0', border: '1px solid #E8D9C5' }}
            >
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4" viewBox="0 0 20 20" fill="#CF7923">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="font-serif italic text-[#6B5A4A] leading-relaxed flex-1">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div>
                <p className="font-sans font-semibold text-sm text-[#332F2B]">{item.name}</p>
                <p className="font-sans text-xs text-[#A89282]">{item.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
