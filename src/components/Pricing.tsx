// src/components/Pricing.tsx
import { useTranslations } from 'next-intl'

export function Pricing() {
  const t = useTranslations('pricing')

  const digitalFeatures = [t('feature1'), t('feature2'), t('feature3')]
  const premiumFeatures = [t('feature1'), t('feature2'), t('feature3'), t('feature4')]

  return (
    <section id="preise" className="py-24" style={{ background: '#FAF6F0' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-[#332F2B] mb-4">{t('title')}</h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: '#CF7923' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Digital */}
          <div className="bg-white rounded-2xl border border-[#E8D9C5] p-8 flex flex-col">
            <div className="mb-6">
              <h3 className="font-display font-bold text-xl text-[#332F2B] mb-2">{t('digitalName')}</h3>
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-4xl text-[#332F2B]">{t('digitalPrice')}</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {digitalFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#6B5A4A]">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#CF7923' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {f}
                </li>
              ))}
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                {t('feature4')}
              </li>
            </ul>
            <a
              href="https://zeitgeist-phi.vercel.app/register"
              className="w-full text-center py-3 rounded-xl font-medium text-sm border transition-colors"
              style={{ borderColor: '#E8D9C5', color: '#7A5C3D' }}
            >
              {t('cta')}
            </a>
          </div>

          {/* Premium */}
          <div className="relative bg-white rounded-2xl p-8 flex flex-col shadow-lg" style={{ border: '2px solid #CF7923' }}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white" style={{ background: '#CF7923' }}>
              {t('recommended')}
            </div>
            <div className="mb-6">
              <h3 className="font-display font-bold text-xl text-[#332F2B] mb-2">{t('premiumName')}</h3>
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-4xl text-[#CF7923]">{t('premiumPrice')}</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {premiumFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#6B5A4A]">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#CF7923' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://zeitgeist-phi.vercel.app/register"
              className="w-full text-center py-3 rounded-xl font-medium text-sm text-white transition-colors"
              style={{ background: '#CF7923' }}
            >
              {t('cta')}
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-[#A89282] mt-8">{t('note')}</p>
      </div>
    </section>
  )
}
