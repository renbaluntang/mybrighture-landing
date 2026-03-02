const lessonCards = [
  {
    title: '母音が変わるとリズムも整う',
    description:
      '英語の発音の基本と言えば、絶対に外せないのが母音です。また見落としがちですが、母音により音の長さが異なるものもあり、母音をしっかり身につけることで一気に英語らしいリズムで話せるようになります。',
    code: 'PP101 / PP102',
  },
  {
    title: '子音を学んで脱カタカナ英語',
    description:
      '英語の子音には日本語にない音がたくさんあります。そのため、日本語にない音を発音する時に「無意識に」それに近いカタカナの音に置き換えて発音しています。脱カタカナ英語のために欠かせない子音をしっかり学びましょう。',
    code: 'PP201',
  },
  {
    title: '音と音を繋げより自然に',
    description:
      'リダクション(脱落)やコネクション(連結)のルールを知り、身につけることで、単語や文章を滑らかに繋げるようになり、より自然に発話できるようになります。アメリカ英語特有の音の変化などを学ぶこともできます。',
    code: 'PP202 / SF',
  },
  {
    title: '抑揚で伝わる正しい感情',
    description:
      '感情を乗せるのに重要な役割を果たすのが、イントネーションとアクセントです。どんな気持ちを伝えたいのかを意識しながら、適切なイントネーションやアクセントを身につけることで感情が正しく伝わるようになります。',
    code: 'SF',
  },
]

function Lessons() {
  return (
    <section id="lessons" className="px-4 pb-20 pt-16 sm:px-8 lg:px-16 lg:pb-24 lg:pt-20">
      <div className="mx-auto w-full max-w-[1680px]">
        <h2 className="text-[32px] font-bold leading-[1.15] text-[#1f2128] sm:text-[36px] md:text-[40px]">Lessons</h2>
        <p className="mt-4 text-[18px] font-bold text-[#f24506] sm:text-[20px]">発音関連のレッスン一覧</p>
        <p className="mt-8 max-w-[1260px] text-[15px] leading-[1.75] text-[#2b2b2b]">
          Brighture English Academyでは、一音一音しっかりと学習していくため、いくつかのレッスンに分けて発音レッスンを提供しています。PP101
          (Phonics and Pronunciation - Vowels) から順に学んでいただくことで、スムーズに発音を身につけられます。
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
