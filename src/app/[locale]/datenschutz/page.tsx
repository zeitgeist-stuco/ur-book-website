// src/app/[locale]/datenschutz/page.tsx
import { LegalLayout } from '@/components/LegalLayout'
import { getTranslations } from 'next-intl/server'

export default async function DatenschutzPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'footer' })
  const tLegal = await getTranslations({ locale, namespace: 'legal' })
  const isEn = locale === 'en'

  return (
    <LegalLayout title={t('datenschutz')} locale={locale} onlyDeEn onlyDeEnText={tLegal('onlyDeEn')}>
      {isEn ? (
        <>
          <h2>Privacy Policy</h2>
          <h3>1. Controller</h3>
          <p>Henri Hassepass, Friedrich-Engels-Straße 15, 13156 Berlin, Germany<br />Email: <a href="mailto:info@ur-book.org">info@ur-book.org</a></p>
          <h3>2. Hosting</h3>
          <p>This website is hosted by Vercel Inc., 340 Pine Street Suite 700, San Francisco, California 94104, USA. Data may be processed in the USA. Vercel has implemented Standard Contractual Clauses as per EU Commission Decision 2021/914.</p>
          <h3>3. Data We Collect</h3>
          <p>This website does not use tracking cookies or analytics tools. We do not collect personal data through this website beyond what is technically necessary for delivery (server logs, which are deleted within 30 days).</p>
          <h3>4. Contact</h3>
          <p>If you contact us by email, we process your name and email address to respond to your inquiry. This data is deleted once the matter is resolved.</p>
          <h3>5. Your Rights (GDPR Art. 15–21)</h3>
          <ul>
            <li>Right of access (Art. 15)</li>
            <li>Right to rectification (Art. 16)</li>
            <li>Right to erasure (Art. 17)</li>
            <li>Right to restriction (Art. 18)</li>
            <li>Right to data portability (Art. 20)</li>
            <li>Right to object (Art. 21)</li>
          </ul>
          <p>To exercise these rights, contact: <a href="mailto:info@ur-book.org">info@ur-book.org</a></p>
          <h3>6. Right to Lodge a Complaint</h3>
          <p>You have the right to lodge a complaint with a supervisory authority. In Germany: <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer">www.bfdi.bund.de</a></p>
          <p><em>Last updated: April 2025</em></p>
        </>
      ) : (
        <>
          <h2>Datenschutzerklärung</h2>
          <h3>1. Verantwortlicher</h3>
          <p>Henri Hassepass, Friedrich-Engels-Straße 15, 13156 Berlin<br />E-Mail: <a href="mailto:info@ur-book.org">info@ur-book.org</a></p>
          <h3>2. Hosting</h3>
          <p>Diese Website wird von Vercel Inc., 340 Pine Street Suite 700, San Francisco, California 94104, USA gehostet. Daten können in den USA verarbeitet werden. Vercel hat Standardvertragsklauseln gemäß EU-Kommissionsbeschluss 2021/914 implementiert.</p>
          <h3>3. Erhobene Daten</h3>
          <p>Diese Website verwendet keine Tracking-Cookies oder Analysedienste. Es werden keine personenbezogenen Daten erhoben, außer was für die technische Auslieferung notwendig ist (Server-Logs, die innerhalb von 30 Tagen gelöscht werden).</p>
          <h3>4. Kontaktaufnahme</h3>
          <p>Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihren Namen und Ihre E-Mail-Adresse, um Ihre Anfrage zu beantworten. Diese Daten werden nach Abschluss des Vorgangs gelöscht.</p>
          <h3>5. Ihre Rechte (Art. 15–21 DSGVO)</h3>
          <ul>
            <li>Auskunftsrecht (Art. 15)</li>
            <li>Berichtigungsrecht (Art. 16)</li>
            <li>Löschungsrecht (Art. 17)</li>
            <li>Recht auf Einschränkung (Art. 18)</li>
            <li>Datenübertragbarkeit (Art. 20)</li>
            <li>Widerspruchsrecht (Art. 21)</li>
          </ul>
          <p>Zur Ausübung Ihrer Rechte: <a href="mailto:info@ur-book.org">info@ur-book.org</a></p>
          <h3>6. Beschwerderecht</h3>
          <p>Sie haben das Recht, sich bei einer Datenschutzbehörde zu beschweren. In Deutschland: <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer">www.bfdi.bund.de</a></p>
          <p><em>Stand: April 2025</em></p>
        </>
      )}
    </LegalLayout>
  )
}
