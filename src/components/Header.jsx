import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoImage from '../assets/image/logo.png'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-4 pb-2 pt-3 sm:px-8">
      <nav
        aria-label="Global"
        className="relative mx-auto flex h-[62px] w-full max-w-[1680px] items-center justify-between gap-4 rounded-xl border border-white/30 bg-white/40 px-4 shadow-lg shadow-black/10 ring-1 ring-black/5 backdrop-blur-xl backdrop-saturate-150 sm:px-6"
      >
        <div className="flex items-center md:flex-1">
          <a href="#" className="group shrink-0">
            <span className="sr-only">Brighture</span>
            <img
              src={logoImage}
              alt="Brighture logo"
              className="h-8 w-auto transition-transform duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] group-hover:-translate-y-0.5 group-hover:scale-[1.03] sm:h-9"
            />
          </a>
        </div>

        <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-10">
          <a
            href="#essential"
            className="text-sm font-bold leading-[1.8] tracking-[0.05em] text-[#242833] transition hover:text-[#f24506] [font-family:var(--s-font-ee93ad8a)]"
          >
            発音のコツ
          </a>

          <a
            href="#reasons"
            className="text-sm font-bold leading-[1.8] tracking-[0.05em] text-[#242833] transition hover:text-[#f24506] [font-family:var(--s-font-ee93ad8a)]"
          >
            Brightureについて
          </a>

          <a
            href="#lessons"
            className="text-sm font-bold leading-[1.8] tracking-[0.05em] text-[#242833] transition hover:text-[#f24506] [font-family:var(--s-font-ee93ad8a)]"
          >
            レッスン
          </a>
          <a
            href="#voice"
            className="text-sm font-bold leading-[1.8] tracking-[0.05em] text-[#242833] transition hover:text-[#f24506] [font-family:var(--s-font-ee93ad8a)]"
          >
            受講生の声
          </a>
          <a
            href="#faq"
            className="text-sm font-bold leading-[1.8] tracking-[0.05em] text-[#242833] transition hover:text-[#f24506] [font-family:var(--s-font-ee93ad8a)]"
          >
            よくあるご質問
          </a>
        </PopoverGroup>

        <div className="flex items-center gap-2 sm:ml-auto lg:hidden">
          <a
            href="https://brighture-edu.com/register/index.html"
            className="group relative hidden overflow-hidden rounded-lg border border-[#f24506] bg-transparent px-4 py-2 text-sm font-bold leading-[1.8] tracking-tight [font-family:var(--s-font-ee93ad8a)] sm:inline-flex"
          >
            <span className="absolute inset-0 origin-right bg-[#f24506] transition-transform duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] group-hover:scale-x-0" />
            <span className="relative z-10 text-white transition-colors duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] group-hover:text-[#f24506]">
              まずは無料体験
            </span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/40 bg-white/35 text-[#242833] ring-1 ring-black/5 transition hover:bg-white/55"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-5" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://brighture-edu.com/register/index.html"
            className="group relative inline-flex overflow-hidden rounded-lg border border-[#f24506] bg-transparent px-4 py-2 text-sm font-bold leading-[1.8] tracking-tight [font-family:var(--s-font-ee93ad8a)]"
          >
            <span className="absolute inset-0 origin-right bg-[#f24506] transition-transform duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] group-hover:scale-x-0" />
            <span className="relative z-10 text-white transition-colors duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] group-hover:text-[#f24506]">
              まずは無料体験
            </span>
          </a>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/25" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto border-l border-white/30 bg-white/45 px-6 py-5 shadow-2xl shadow-black/15 ring-1 ring-black/5 backdrop-blur-xl backdrop-saturate-150 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <a href="#" className="group shrink-0">
              <span className="sr-only">Brighture</span>
              <img
                src={logoImage}
                alt="Brighture logo"
                className="h-8 w-auto transition-transform duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] group-hover:-translate-y-0.5 group-hover:scale-[1.03]"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/40 bg-white/35 text-[#242833] ring-1 ring-black/5 transition hover:bg-white/55"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-5" />
            </button>
          </div>

          <div className="mt-6">
            <div className="space-y-2 border-t border-[#d8dde3] pt-6">
              <a
                href="#top"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-[#242833] transition hover:bg-[#eceff2]"
              >
                ヘッダー
              </a>

              <a
                href="#hero"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-[#242833] transition hover:bg-[#eceff2]"
              >
                ヒーロー
              </a>

              <a
                href="#essential"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-[#242833] transition hover:bg-[#eceff2]"
              >
                発音のコツ
              </a>

              <a
                href="#reasons"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-[#242833] transition hover:bg-[#eceff2]"
              >
                Brightureについて
              </a>

              <a
                href="#lessons"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-[#242833] transition hover:bg-[#eceff2]"
              >
                レッスン
              </a>
              <a
                href="#voice"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-[#242833] transition hover:bg-[#eceff2]"
              >
                受講生の声
              </a>
              <a
                href="#faq"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-[#242833] transition hover:bg-[#eceff2]"
              >
                よくあるご質問
              </a>
            </div>

            <div className="mt-6 border-t border-[#d8dde3] pt-6">
              <a
                href="https://brighture-edu.com/register/index.html"
                className="group relative inline-flex overflow-hidden rounded-lg border border-[#f24506] bg-transparent px-4 py-2 text-sm font-bold leading-[1.8] tracking-tight [font-family:var(--s-font-ee93ad8a)]"
              >
                <span className="absolute inset-0 origin-right bg-[#f24506] transition-transform duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] group-hover:scale-x-0" />
                <span className="relative z-10 text-white transition-colors duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] group-hover:text-[#f24506]">
                  まずは無料体験
                </span>
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header
