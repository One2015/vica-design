'use client'

import Link from 'next/link'

export function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcf6eb] border-b border-[#1a1a1a]/10">
        <div className="px-[60px] h-[70px] flex items-center justify-between">

          <Link href="/" className="font-serif text-[20px] leading-[30px] tracking-[0.5px] hover:opacity-60 transition-opacity">
            VICA DESIGN
          </Link>

          <Link
            href="/contact"
            className="font-serif text-[16px] leading-[24px] uppercase tracking-[2.4px] hover:opacity-60 transition-opacity"
          >
            Contact Us
          </Link>

        </div>
      </header>

      {/* Header spacing placeholder */}
      <div className="h-[70px]" />
    </>
  )
}
