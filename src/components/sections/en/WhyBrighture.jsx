import {
  AcademicCapIcon,
  CalendarDaysIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/solid'
import section5Image from '../../../assets/image/section5.png'

function RibbonAwardIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5Zm-2.18 12.9L7.7 21.25a.75.75 0 0 0 1.1.88L12 20.2l3.2 1.93a.75.75 0 0 0 1.1-.88l-2.12-5.6a7.9 7.9 0 0 1-4.36 0Z" />
    </svg>
  )
}

const leftFeatures = [
  {
    title: 'Perfect for Beginners',
    description:
      "Brighture's pronunciation lessons are beginner-friendly. Start by copying your teacher's sounds.",
    icon: AcademicCapIcon,
  },
  {
    title: 'Flexible Schedule',
    description:
      'Book lessons one at a time and learn at your own pace even with a busy schedule.',
    icon: CalendarDaysIcon,
  },
]

const rightFeatures = [
  {
    title: 'Step by Step',
    description:
      'Each lesson focuses on one sound, with regular drills for difficult sounds.',
    icon: PresentationChartLineIcon,
  },
  {
    title: 'Support',
    description:
      "Our teachers are specially trained in Brighture's unique program and are here to guide you every step of your learning journey.",
    icon: RibbonAwardIcon,
  },
]

const allFeatures = [...leftFeatures, ...rightFeatures]

function WhyBrighture() {
  return (
    <section id="reasons" className="relative px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-14">
      <div className="mx-auto w-full max-w-[1680px] text-center">
        <p className="text-sm font-bold tracking-[0.08em] text-[#e8400a] sm:text-base">With Brighture</p>

        <h2 className="mt-4 text-3xl font-bold leading-[1.2] text-[#1f2128] sm:text-4xl md:text-[2.55rem]">
          You will see real results.
        </h2>

        <p className="mx-auto mt-4 max-w-4xl text-xs leading-[1.7] text-[#6b6b6b] sm:text-sm">
          Only teachers who pass strict hiring and training standards teach you.
        </p>

        <div className="mt-9 grid items-start gap-6 lg:grid-cols-[0.85fr_2.2fr_0.85fr] lg:gap-4 xl:gap-6">
          <div className="space-y-8 md:hidden lg:block lg:space-y-11">
            {leftFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <article key={feature.title} className="mx-auto max-w-[300px] rounded-2xl p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-md lg:max-w-none">
                  <Icon className="mx-auto h-9 w-9 text-[#ff4a1f] sm:h-10 sm:w-10" aria-hidden="true" />
                  <h3 className="mt-3 text-[18px] font-bold text-[#1f2128]">{feature.title}</h3>
                  <p className="mx-auto mt-3 max-w-[280px] text-[14px] leading-[1.8] text-[#666]">{feature.description}</p>
                </article>
              )
            })}
          </div>

          <div className="order-first mx-auto w-full max-w-[760px] md:col-span-2 lg:col-span-1 lg:order-none">
            <img
              src={section5Image}
              alt="Brighture instructors"
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="space-y-8 md:hidden lg:block lg:space-y-11">
            {rightFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <article key={feature.title} className="mx-auto max-w-[300px] rounded-2xl p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-md lg:max-w-none">
                  <Icon className="mx-auto h-9 w-9 text-[#ff4a1f] sm:h-10 sm:w-10" aria-hidden="true" />
                  <h3 className="mt-3 text-[18px] font-bold text-[#1f2128]">{feature.title}</h3>
                  <p className="mx-auto mt-3 max-w-[280px] text-[14px] leading-[1.8] text-[#666]">{feature.description}</p>
                </article>
              )
            })}
          </div>

          <div className="hidden md:col-span-2 md:grid md:grid-cols-2 md:gap-x-7 md:gap-y-9 lg:hidden">
            {allFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <article key={`md-${feature.title}`} className="mx-auto max-w-[300px] rounded-2xl p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-md">
                  <Icon className="mx-auto h-9 w-9 text-[#ff4a1f] sm:h-10 sm:w-10" aria-hidden="true" />
                  <h3 className="mt-3 text-[18px] font-bold text-[#1f2128]">{feature.title}</h3>
                  <p className="mx-auto mt-3 max-w-[280px] text-[14px] leading-[1.8] text-[#666]">{feature.description}</p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center sm:mt-9">
          <a
            href="/register/index.html"
            className="group relative inline-flex items-center justify-center rounded-md border border-[#e8400a] bg-[#e8400a] px-7 py-2.5 text-[15px] tracking-tight transition-colors duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] hover:bg-transparent"
          >
            <span className="font-bold text-white transition-colors duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] group-hover:text-[#e8400a]">
              Apply for a free trial
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyBrighture
