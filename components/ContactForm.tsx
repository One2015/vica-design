'use client'

import { useState } from 'react'
import Link from 'next/link'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="py-[6rem] text-center">
        <p className="font-serif text-[3.2rem] md:text-[4rem] mb-[2rem]">
          Thanks for subscribing!
        </p>
        <p className="text-[1.6rem] text-white/80 mb-[4rem]">
          Check your email for a confirmation message.
        </p>
        <Link
          href="/contact"
          className="text-[1.4rem] uppercase tracking-[0.15em] border-b border-white/60 hover:opacity-60 transition-opacity pb-[2px]"
        >
          Submit a new message
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-[2rem] max-w-[50rem] mx-auto text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="bg-transparent border-b border-white/40 text-white placeholder:text-white/60 px-0 py-[1rem] text-[1.5rem] focus:outline-none focus:border-white transition-colors"
        />
        <input
          type="tel"
          placeholder="Your Phone"
          className="bg-transparent border-b border-white/40 text-white placeholder:text-white/60 px-0 py-[1rem] text-[1.5rem] focus:outline-none focus:border-white transition-colors"
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        required
        className="w-full bg-transparent border-b border-white/40 text-white placeholder:text-white/60 px-0 py-[1rem] text-[1.5rem] focus:outline-none focus:border-white transition-colors"
      />
      <div>
        <p className="text-[1.5rem] text-white/60 mb-[0.5rem]">Message</p>
        <textarea
          rows={4}
          className="w-full bg-transparent border border-white/30 text-white px-[1.5rem] py-[1rem] text-[1.5rem] focus:outline-none focus:border-white transition-colors resize-none"
        />
      </div>
      <div className="text-center pt-[1rem]">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="
            bg-[#fcf6eb] text-[#1a1a1a]
            px-[3rem] py-[1rem] text-[1.3rem] uppercase tracking-[0.15em]
            transition-all duration-200
            hover:bg-[#1a1a1a] hover:text-[#fcf6eb]
            disabled:opacity-60 disabled:cursor-not-allowed
            min-w-[14rem]
          "
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center gap-[0.8rem]">
              <svg
                className="animate-spin h-[1.4rem] w-[1.4rem]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Sending…
            </span>
          ) : 'SUBMIT'}
        </button>
      </div>
    </form>
  )
}
