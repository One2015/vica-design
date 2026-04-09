import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { CustomCursor } from '@/components/CustomCursor'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: {
    default: 'Vica Design - Interior & Product Design Studio',
    template: '%s | Vica Design',
  },
  description: 'Vica Design specializes in high-end custom kitchens and architectural millwork systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <CustomCursor />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
