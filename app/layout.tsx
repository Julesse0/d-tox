import type { Metadata, Viewport } from 'next'
import { Roboto_Condensed, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto-condensed',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'D-tox | Kombucha Artisanal',
  description: 'D-tox - Kombucha artisanal brasse en France. Saveurs naturelles, fermentation vivante et energie au quotidien.',
}

export const viewport: Viewport = {
  themeColor: '#1A1A1A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${robotoCondensed.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
