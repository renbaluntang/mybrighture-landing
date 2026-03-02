const lessonCards = [
  {
    title: 'Better vowels mean better rhythm',
    description:
      'Vowels are the heart of English pronunciation. They’re easy to overlook, but even small differences can change how a word sounds. By learning vowels properly, you’ll speak English with a more natural, smooth rhythm just like a native speaker.',
    code: 'PP101 / PP102',
  },
  {
    title: 'Clear consonants make clear English',
    description:
      'English has many consonant sounds that don’t exist in other languages. It’s easy to substitute unfamiliar sounds with ones from your own language without even noticing. By learning and practicing English consonants correctly, you’ll speak more clearly and naturally.',
    code: 'PP201',
  },
  {
    title: 'Smooth connections sound natural',
    description:
      'By learning the rules of sound reduction and word connection, you can link words and sentences more smoothly and speak more naturally. You’ll also master common American English sound changes, so your speech sounds more natural, fluent, and confident.',
    code: 'PP202 / SF',
  },
  {
    title: 'Intonation brings your words to life',
    description:
      'The way you stress words and use intonation shows your real emotions. By learning how to match your tone with your meaning, your feelings will be clearly understood and sound natural in English.',
    code: 'SF',
  },
]

function Lessons() {
  return (
    <section id="lessons" className="px-4 pb-20 pt-16 sm:px-8 lg:px-16 lg:pb-24 lg:pt-20">
      <div className="mx-auto w-full max-w-[1680px]">
        <h2 className="text-[32px] font-bold leading-[1.15] text-[#1f2128] sm:text-[36px] md:text-[40px]">Lessons</h2>
        <p className="mt-4 text-[18px] font-bold text-[#f24506] sm:text-[20px]">Brighture&apos;s Pronunciation Lessons</p>
        <p className="mt-8 max-w-[1260px] text-[15px] leading-[1.75] text-[#2b2b2b]">
          At Brighture English Academy, our pronunciation course is designed to help you learn one sound at a time. To make
          learning easier and more effective, pronunciation training is divided into several lessons.
        </p>

        <div className="mx-auto mt-11 w-full md:w-10/12">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-7">
          {lessonCards.map((card) => (
            <article
              key={card.title}
              className="group rounded-2xl border border-transparent bg-[#efefef] px-6 py-8 transition-all duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] hover:-translate-y-1 hover:border-[#f2c2b2] hover:bg-[#f5f5f5] hover:shadow-lg sm:px-8 sm:py-9"
            >
              <h3 className="text-[20px] font-bold leading-[1.4] text-[#f24506]">{card.title}</h3>
              <p className="mt-5 text-[14px] leading-[1.75] text-[#474747]">{card.description}</p>
              <div className="mt-7 inline-flex min-w-[170px] items-center justify-center rounded-xl bg-[#f9f9f9] px-4 py-2.5 text-[15px] font-bold tracking-tight text-[#252525] transition-colors duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] group-hover:bg-[#fff3ee]">
                {card.code}
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lessons
