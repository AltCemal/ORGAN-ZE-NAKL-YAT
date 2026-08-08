import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-heading' })
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  metadataBase: new URL('https://organizenakliyatsamsun.com'),
  title: {
    default: 'Organize Nakliyat Samsun | Samsun Nakliye & Yük Eşleştirme Komisyoncusu',
    template: '%s | Organize Nakliyat Samsun',
  },
  description:
    'Samsun merkezli nakliye komisyonculuğu. Yükünüze uygun tır/kamyon buluyor, tırcılara dönüş ve komple yük ayarlıyoruz. Türkiye geneli güvenli yük eşleştirme ve taşımacılık.',
  keywords: [
    'Samsun nakliye',
    'Samsun nakliye komisyoncusu',
    'Samsun tır garajı',
    'yük ilanları',
    'boş araç bildir',
    'yük eşleştirme',
    'komple yük',
    'parsiyel yük',
    'Karadeniz nakliye',
    'dönüş yükü',
    'Samsun kamyon',
    'tır bul',
  ],
  authors: [{ name: 'Organize Nakliyat Samsun' }],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://organizenakliyatsamsun.com',
    siteName: 'Organize Nakliyat Samsun',
    title: 'Organize Nakliyat Samsun | Güvenli Nakliye & Yük Eşleştirme',
    description:
      'Yükünüz mü var? Uygun aracı anında bulalım. Tırınız boş mu? Size en uygun yükü ayarlayalım. Samsun ve tüm Türkiye.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#1a2b4a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`light bg-background ${manrope.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
