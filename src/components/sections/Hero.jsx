import heroImage from '../../assets/image/hero.webp'

function Hero() {
  return (
    <section id="hero" className="relative pt-2 pb-8 md:pt-0 md:pb-10">
      <div className="grid w-full max-h-[620px] overflow-hidden md:grid-cols-2 xl:mx-auto lg:h-[87vh] xl:w-10/12">
        <div className="relative z-10 flex items-center px-5 pb-8 pt-6 sm:px-10 md:order-1 lg:px-16">
          <div className="max-w-[620px]">
          <p className="inline-flex items-center rounded-md bg-[#edf0f2] px-4 py-2">
            <span className="mr-2 inline-flex items-center justify-center text-[#e8400a]" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
                <path d="M12 1.5a7.5 7.5 0 0 0-7.5 7.5c0 1.39.38 2.73 1.1 3.9L3.6 20.5a1 1 0 0 0 1.45 1.14l3.08-1.7 3.08 2.85a1 1 0 0 0 1.36 0l3.08-2.85 3.08 1.7a1 1 0 0 0 1.45-1.14l-2-7.6A7.45 7.45 0 0 0 19.5 9 7.5 7.5 0 0 0 12 1.5Zm0 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
              </svg>
            </span>
            <span
              className="inline-flex h-auto w-auto max-w-full flex-1 justify-center px-0 text-center text-sm font-bold leading-[1.4] text-[#e8400a] [text-shadow:none]"
              style={{ fontFamily: 'var(--s-font-6bb12d8c, var(--s-font-ee93ad8a))' }}
            >
              アセスメント付き体験レッスン提供中
            </span>
          </p>
          <h1
            className="h-auto w-auto max-w-full border-0 text-left text-2xl font-bold not-italic leading-[1.35] text-[#1b2d4d] [transform-origin:bottom_center] [z-index:1]"
            style={{
              fontFamily: 'var(--s-font-6bb12d8c, var(--s-font-ee93ad8a))',
              margin: '0',
              transitionDelay: '300ms',
              transitionDuration: '400ms',
              transitionTimingFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
              justifyContent: 'flex-start',
            }}
          >
            英語の悩みは、
            <br />
            発音矯正で改善する
          </h1>
          <p
            className="h-auto w-auto max-w-prose flex-1 px-0 text-justify text-sm font-medium leading-[1.6] text-[#282828]"
            style={{
              fontFamily: 'var(--s-font-ee93ad8a)',
              margin: '48px 0 0 0',
              transitionDelay: '200ms',
              transitionDuration: '600ms',
              transitionTimingFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
            }}
          >
            Brighture English Academyでは、独自の厳しいトレーニングを修了した講師たちが、一人ひとりのウィークポイントに寄り添いながら、粘り強く指導します。特に生徒の口の動きや音を細かくチェックしながら練習する発音レッスンが人気。
          </p>
          <div className="mt-10 flex justify-start max-[425px]:justify-center">
            <a
              href="https://brighture-edu.com/register/index.html"
              className="group relative inline-flex h-auto w-auto max-w-full items-center justify-center rounded-md border border-[#e8400a] bg-[#e8400a] px-8 py-3 text-base tracking-tight transition-colors duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] hover:bg-transparent"
            >
              <span className="font-bold text-white transition-colors duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] group-hover:text-[#e8400a]">
                無料体験に申し込む
              </span>
            </a>
          </div>
          </div>
        </div>

        <div className="relative z-10 flex min-h-[38svh] items-end overflow-hidden rounded-t-[2.6rem] bg-[#ccd3d9] md:order-2 md:min-h-full md:rounded-t-none md:rounded-bl-[4.8rem]">
          <img
            src={heroImage}
            alt="Smiling student talking"
            className="h-full w-full object-cover object-bottom md:object-center"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
