import section2Image from '../../../assets/image/section2.png'

const painPoints = [
  {
    title: 'Often asked to repeat yourself',
    description:
      'Speaking English can feel stressful when people ask you to repeat yourself all the time. You might even start avoiding speaking, even though you’ve worked hard to learn.',
  },
  {
    title: 'Your listening score doesn’t improve',
    description:
      'Even if you study listening books seriously, your test score may still not improve. Many English sounds can be hard to catch, making it frustrating to follow conversations or exams.',
  },
  {
    title: 'Speak English with confidence',
    description:
      'You want to speak English naturally and confidently just like a native speaker.',
  },
]

function PainPoints() {
  return (
    <section className="relative pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-11/12 max-w-[1680px] px-4 sm:px-8 lg:px-16">
        <p className="text-center text-xs font-semibold text-[#5e5e5e] sm:text-sm md:text-base">The Key to Improvement</p>
        <p className="mt-3 h-auto w-auto max-w-full justify-center pb-6 text-center text-base font-bold not-italic tracking-normal text-[#e8400a] sm:mt-4 sm:text-lg md:text-xl lg:text-2xl" style={{ lineHeight: '1.4' }}>
          Pronunciation is the first step to mastering English
        </p>

        <div className="mt-8 flex justify-center sm:mt-10">
          <img
            src={section2Image}
            alt="Concerned person illustration"
            className="h-auto w-full max-w-[170px] object-contain sm:max-w-[200px] md:max-w-[220px]"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:gap-5 xl:grid-cols-3">
          {painPoints.map((item, index) => (
            <article
              key={item.title}
              className={`border-l-4 border-[#ff4a1f] bg-white p-4 sm:p-5 lg:p-6 ${
                index === painPoints.length - 1 && painPoints.length % 2 !== 0
                  ? 'md:col-span-2 md:mx-auto md:w-1/2 xl:col-span-1 xl:mx-0 xl:w-auto'
                  : ''
              }`}
            >
              <div className="pl-3 sm:pl-4 lg:pl-5">
                <h3 className="text-xs font-bold leading-[1.3] tracking-tight text-[#e8400a] sm:text-sm md:text-base">
                  {item.title}
                </h3>
              </div>
              <hr className="my-3 border-t border-[#d6d6d6] sm:my-4 lg:my-5" />
              <p className="max-w-prose text-xs font-medium leading-[1.55] tracking-tight text-[#2b2b2b] sm:text-sm">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PainPoints
