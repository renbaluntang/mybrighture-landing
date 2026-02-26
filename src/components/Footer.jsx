import logoImage from '../assets/image/logo-white.svg'

function Footer() {
  return (
    <footer className="relative z-10 m-0 w-full border-t border-white/10 bg-[#05070d] p-0">
      <div className="relative overflow-hidden px-6 py-7 text-white sm:px-8 sm:py-8 lg:px-12">
        <span
          className="pointer-events-none absolute left-1/2 top-full h-[520px] w-[520px] -translate-x-1/2 -translate-y-[44%] rounded-full bg-[radial-gradient(circle,#2a4fff_0%,#23377d_42%,transparent_74%)] opacity-55 blur-[12px]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1680px]">
          <div className="grid gap-6 border-b border-white/10 pb-6 lg:grid-cols-[minmax(200px,1fr)_minmax(320px,1.4fr)_minmax(280px,1fr)] lg:items-center">
            <a href="#" className="inline-flex items-center gap-3">
              <img src={logoImage} alt="Brighture logo" className="h-9 w-auto" />
            </a>

            <p className="max-w-[620px] text-sm leading-7 text-white/70 sm:text-[15px]">
              Speak clearly with confidence. Start your free Brighture trial lesson today.
            </p>

            <div className="flex items-center lg:justify-end">
              <a
                href="https://brighture-edu.com/register/index.html"
                className="inline-flex items-center border-b border-white/40 pb-1 text-sm text-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.45)] active:translate-y-0 active:scale-[0.98] active:border-white/70 active:text-white/85"
              >
                Get free trial lesson now
              </a>
            </div>
          </div>

          <div className="pt-4 text-white/62">
            <p className="!text-[9px]">© 2026 Brighture. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
