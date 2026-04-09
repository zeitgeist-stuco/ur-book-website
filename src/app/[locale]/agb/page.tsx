// src/app/[locale]/agb/page.tsx
import { LegalLayout } from '@/components/LegalLayout'
import { getTranslations } from 'next-intl/server'

export default async function AGBPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'footer' })
  const tLegal = await getTranslations({ locale, namespace: 'legal' })
  const isEn = locale === 'en'

  return (
    <LegalLayout title={t('agb')} locale={locale} onlyDeEn onlyDeEnText={tLegal('onlyDeEn')}>
      {isEn ? (
        <>
          <h2>Terms and Conditions</h2>
          <h3>1. Scope</h3>
          <p>These Terms apply to all contracts between Henri Hassepass (Friedrich-Engels-Straße 15, 13156 Berlin, Germany; &quot;Provider&quot;) and customers (&quot;Customer&quot;) for the use of the ur-book service.</p>
          <h3>2. Services</h3>
          <p><strong>Digital (€179):</strong> AI-powered biography interview and generation of a personal biography as a PDF download.</p>
          <p><strong>Premium (€199):</strong> All Digital services plus a professionally printed and bound copy delivered to the Customer&apos;s address.</p>
          <h3>3. Contract Formation</h3>
          <p>The contract is formed when the Customer completes the registration and payment process on zeitgeist-phi.vercel.app.</p>
          <h3>4. Payment</h3>
          <p>Payment is due in full before service delivery. Accepted payment methods are listed at checkout.</p>
          <h3>5. Right of Withdrawal</h3>
          <p>Customers have a 14-day right of withdrawal from the date of contract conclusion. For digital content: the right of withdrawal expires upon commencement of execution with the Customer&apos;s explicit consent and acknowledgment that this constitutes a waiver of the withdrawal right.</p>
          <p>To exercise withdrawal, contact: <a href="mailto:info@ur-book.org">info@ur-book.org</a></p>
          <h3>6. Delivery</h3>
          <p>Digital: immediate download after payment. Print: 10–14 business days within Germany and the EU.</p>
          <h3>7. Warranty</h3>
          <p>Statutory warranty rights apply.</p>
          <h3>8. Governing Law &amp; Jurisdiction</h3>
          <p>German law applies. Jurisdiction: Berlin, Germany.</p>
          <p><em>Last updated: April 2025</em></p>
        </>
      ) : (
        <>
          <h2>Allgemeine Geschäftsbedingungen</h2>
          <h3>1. Geltungsbereich</h3>
          <p>Diese AGB gelten für alle Verträge zwischen Henri Hassepass (Friedrich-Engels-Straße 15, 13156 Berlin; „Anbieter") und Kunden („Käufer") über die Nutzung des ur-book-Dienstes.</p>
          <h3>2. Leistungsbeschreibung</h3>
          <p><strong>Digital (179 €):</strong> KI-gestütztes Biographie-Interview und Erstellung einer persönlichen Biographie als PDF-Download.</p>
          <p><strong>Premium (199 €):</strong> Alle Leistungen von Digital sowie ein professionell gedrucktes und gebundenes Exemplar per Lieferung an die Adresse des Käufers.</p>
          <h3>3. Vertragsschluss</h3>
          <p>Der Vertrag kommt zustande, wenn der Käufer den Registrierungs- und Zahlungsvorgang auf zeitgeist-phi.vercel.app abschließt.</p>
          <h3>4. Zahlung</h3>
          <p>Die Zahlung ist vollständig vor Leistungserbringung fällig. Akzeptierte Zahlungsmethoden werden beim Checkout angezeigt.</p>
          <h3>5. Widerrufsrecht</h3>
          <p>Der Käufer hat ein 14-tägiges Widerrufsrecht ab Vertragsschluss (§ 355 BGB). Bei digitalen Inhalten erlischt das Widerrufsrecht mit Beginn der Ausführung, wenn der Käufer ausdrücklich zugestimmt hat und bestätigt hat, dass er damit sein Widerrufsrecht verliert.</p>
          <p>Widerruf richten an: <a href="mailto:info@ur-book.org">info@ur-book.org</a></p>
          <h3>6. Lieferung</h3>
          <p>Digital: sofortiger Download nach Zahlung. Print: 10–14 Werktage innerhalb Deutschlands und der EU.</p>
          <h3>7. Gewährleistung</h3>
          <p>Es gelten die gesetzlichen Gewährleistungsrechte.</p>
          <h3>8. Anwendbares Recht und Gerichtsstand</h3>
          <p>Es gilt deutsches Recht. Gerichtsstand: Berlin.</p>
          <p><em>Stand: April 2025</em></p>
        </>
      )}
    </LegalLayout>
  )
}
