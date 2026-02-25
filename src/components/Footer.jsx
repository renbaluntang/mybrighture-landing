import logoImage from '../assets/image/logo-white.svg'

const navLinks = [
  { label: 'Pronunciation Tips', href: '#essential' },
  { label: 'Why Brighture', href: '#reasons' },
  { label: 'Lessons', href: '#lessons' },
  { label: 'Testimonials', href: '#voice' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const contactLinks = [
  { label: 'Start Free Trial', href: '#contact' },
  { label: 'Ask Questions (FAQ)', href: '#faq' },
  { label: 'Contact Section', href: '#contact' },
]

const legalLinks = [
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookie Settings', href: '#' },
]

function Footer() {
  return (
    <footer className="relative z-10 m-0 w-full border-t border-white/10 bg-[#05070d] p-0">
      <div className="relative overflow-hidden px-6 py-9 text-white sm:px-8 sm:py-10 lg:px-12 lg:pb-4">
        <span
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,#4d5fff_0%,#3f2a7f_38%,transparent_72%)] opacity-55 blur-[2px]"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(7,10,17,0)_0%,rgba(7,10,17,0.9)_100%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1680px]">
          <div className="block md:hidden lg:block">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
              <div className="max-w-[550px]">
                <h2 className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[30px]">
                  Let&apos;s Build
                </h2>
                <p className="mt-1 text-[20px] font-medium leading-[1.15] tracking-[-0.02em] text-white/65 sm:text-[26px]">
                  Better English Confidence
                </p>

                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-sm transition hover:bg-white/10"
                >
                  <img src={logoImage} alt="Brighture logo" className="h-8 w-auto sm:h-9" />
                  <span className="text-left">
                    <span className="block text-[12px] font-semibold text-white">Brighture</span>
                    <span className="block text-[11px] text-white/70">Have any question? Let&apos;s connect.</span>
                  </span>
                </a>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white">Resources</h3>
                <ul className="mt-5 space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-[13px] text-white/82 transition hover:text-[#f24506]">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white">Contact</h3>
                <ul className="mt-5 space-y-3">
                  {contactLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-[13px] text-white/82 transition hover:text-[#f24506]">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white">Legal</h3>
                <ul className="mt-5 space-y-3">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-[13px] text-white/82 transition hover:text-[#f24506]">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden md:block md:mx-auto md:w-11/12 lg:hidden">
            <div className="border-b border-white/10 pb-5 md:flex md:items-start md:justify-between md:gap-8">
              <div className="max-w-[560px]">
                <h2 className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[30px]">
                  Let&apos;s Build
                </h2>
                <p className="mt-1 text-[20px] font-medium leading-[1.15] tracking-[-0.02em] text-white/65 sm:text-[26px]">
                  Better English Confidence
                </p>
              </div>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-sm transition hover:bg-white/10 md:mt-0 md:flex-shrink-0"
              >
                <img src={logoImage} alt="Brighture logo" className="h-8 w-auto sm:h-9" />
                <span className="text-left">
                  <span className="block text-[12px] font-semibold text-white">Brighture</span>
                  <span className="block text-[11px] text-white/70">Have any question? Let&apos;s connect.</span>
                </span>
              </a>
            </div>

            <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)]">
              <div>
                <h3 className="text-[15px] font-semibold text-white">Resources</h3>
                <ul className="mt-5 space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-[13px] text-white/82 transition hover:text-[#f24506]">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white">Contact</h3>
                <ul className="mt-5 space-y-3">
                  {contactLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-[13px] text-white/82 transition hover:text-[#f24506]">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white">Legal</h3>
                <ul className="mt-5 space-y-3">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-[13px] text-white/82 transition hover:text-[#f24506]">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-5 text-[11px] text-white/78">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span>Based in Tokyo</span>
              </div>
              <p className="text-[10px] text-white/62">© 2026 Brighture. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
