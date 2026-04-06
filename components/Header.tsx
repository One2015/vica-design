'use client'

import Link from 'next/link'

export function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcf6eb] border-b border-[#1a1a1a]/10">
        <div className="px-page py-[2rem] flex items-center justify-between">

          <Link href="/" className="font-serif text-[20px] tracking-wide hover:opacity-60 transition-opacity">
            VICA DESIGN
          </Link>

          <Link
            href="/contact"
            className="text-[16px] uppercase tracking-[0.15em] hover:opacity-60 transition-opacity"
          >
            Contact Us
          </Link>

        </div>
      </header>

      {/* Header spacing placeholder */}
      <div className="h-[7rem]" />
    </>
  )
}
