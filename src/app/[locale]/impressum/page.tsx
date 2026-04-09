// src/app/[locale]/impressum/page.tsx
import { LegalLayout } from '@/components/LegalLayout'
import { getTranslations } from 'next-intl/server'

export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'footer' })
  const tLegal = await getTranslations({ locale, namespace: 'legal' })

  const isEn = locale === 'en'

  return (
    <LegalLayout title={t('impressum')} locale={locale} onlyDeEn onlyDeEnText={tLegal('onlyDeEn')}>
      {isEn ? (
        <>
          <h2>Legal Notice</h2>
          <p>Information according to § 5 TMG (German Telemedia Act)</p>
          <p><strong>Henri Hassepass</strong><br />Friedrich-Engels-Straße 15<br />13156 Berlin<br />Germany</p>
          <h2>Contact</h2>
          <p>Email: <a href="mailto:info@ur-book.org">info@ur-book.org</a><br />Email: <a href="mailto:support.zeitgeist@gmail.com">support.zeitgeist@gmail.com</a></p>
          <h2>Responsible for Content</h2>
          <p>Henri Hassepass, Friedrich-Engels-Straße 15, 13156 Berlin</p>
          <h2>EU Online Dispute Resolution</h2>
          <p>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></p>
          <p>We are not obligated to participate in dispute resolution proceedings before a consumer arbitration board.</p>
        </>
      ) : (
        <>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p><strong>Henri Hassepass</strong><br />Friedrich-Engels-Straße 15<br />13156 Berlin</p>
          <h2>Kontakt</h2>
          <p>E-Mail: <a href="mailto:info@ur-book.org">info@ur-book.org</a><br />E-Mail: <a href="mailto:support.zeitgeist@gmail.com">support.zeitgeist@gmail.com</a></p>
          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>Henri Hassepass, Friedrich-Engels-Straße 15, 13156 Berlin</p>
          <h2>Streitschlichtung</h2>
          <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></p>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </>
      )}
    </LegalLayout>
  )
}
