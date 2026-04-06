import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { CustomCursor } from '@/components/CustomCursor'

const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
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
