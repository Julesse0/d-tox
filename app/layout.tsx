import type { Metadata, Viewport } from 'next'
import { League_Spartan, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
})

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-league-spartan',
})

export const metadata: Metadata = {
  title: 'DTÖX | Kombucha Artisanal',
  description: 'DTÖX - Kombucha artisanal brassé en France. Saveurs naturelles, fermentation vivante et énergie au quotidien.',
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
    <html lang="fr" className={`${montserrat.variable} ${leagueSpartan.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
