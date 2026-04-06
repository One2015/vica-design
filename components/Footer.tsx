import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border px-page py-[6rem] bg-warm text-primary overflow-hidden">

      {/* Footer body */}
      <div className="max-w-content mx-auto">
        <div className="flex flex-wrap justify-between gap-y-8">

          {/* Contact */}
          <section className="w-full sm:w-[calc(50%-1.5rem)] lg:w-auto">
            <h3 className="text-[1.3rem] uppercase tracking-wider mb-4">Contact</h3>
            <address className="not-italic text-[1.3rem] leading-[1.7] space-y-1">
              <a
                href="https://maps.google.com/?q=450+Matheson+Blvd+E+unit+59,Mississauga,ON+L4Z+1P1"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-60 transition-opacity"
              >
                450 Matheson Blvd E<br />
                Unit 59, 67-70<br />
                Mississauga, ON L4Z 1P1
              </a>
              <a
                href="tel:+14379991137"
                className="block hover:opacity-60 transition-opacity"
              >
                +1 (437) 999-1137
              </a>
              <a
                href="mailto:belle.vicadesign@gmail.com"
                className="block hover:opacity-60 transition-opacity"
              >
                belle.vicadesign@gmail.com
              </a>
            </address>
          </section>

          {/* Enquiries */}
          <section className="w-full sm:w-[calc(50%-1.5rem)] lg:w-auto">
            <h3 className="text-[1.3rem] uppercase tracking-wider mb-4">Enquiries</h3>
            <p className="text-[1.3rem] leading-[1.7]">
              Have a project in mind?<br />
              <Link href="/contact" className="hover:opacity-60 transition-opacity underline underline-offset-4">
                Send us a message
              </Link>
            </p>
          </section>
        </div>

        {/* Copyright bar */}
        <div className="mt-[5rem] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span className="text-[1.3rem]">
            © Vica Design. All Rights Reserved
            <Link href="/privacy" className="ml-4 hover:opacity-60 transition-opacity">Privacy Policy</Link>
            <Link href="/terms" className="ml-4 hover:opacity-60 transition-opacity">Terms &amp; Conditions</Link>
          </span>
          <span className="text-[1.3rem]">
            Design &amp; Build by{' '}
            <a href="#" className="hover:opacity-60 transition-opacity underline underline-offset-4">Studio</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
