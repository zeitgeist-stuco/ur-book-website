// src/app/[locale]/layout.tsx
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Lora } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import '../globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin', 'cyrillic'], variable: '--font-playfair', display: 'swap' })
const lora = Lora({ subsets: ['latin', 'cyrillic'], variable: '--font-lora', display: 'swap' })

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'hero' })
  return {
    title: { default: 'ur-book — ' + t('headline'), template: '%s | ur-book' },
    description: t('subtext'),
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as 'de' | 'en' | 'fr' | 'es' | 'it' | 'pl' | 'tr' | 'ru')) {
    notFound()
  }
  const messages = await getMessages()
  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
