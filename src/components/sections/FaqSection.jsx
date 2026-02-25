import { useState } from 'react'

const faqs = [
  {
    question: '初心者でも受講できますか？',
    answer:
      'はい。Brightureの発音レッスンは初心者でも受講できます。まずは講師の音を真似するところから、段階的に進めていきます。',
  },
  {
    question: 'どのくらいの頻度で受講すれば良いですか？',
    answer:
      '週1回程度からの受講が目安です。予約制なので、仕事や学業に合わせて無理なく継続できます。',
  },
  {
    question: 'レッスンはどの順番で進みますか？',
    answer:
      'PP101（母音）から順に進めるのがおすすめです。基礎音を固めながら、子音・連結・抑揚へとステップアップします。',
  },
  {
    question: '無料体験レッスンはありますか？',
    answer: 'はい。アセスメント付きの無料体験レッスンをご用意しています。',
  },
]

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section id="faq" className="px-4 pb-20 pt-14 sm:px-8 lg:px-16">
      <div className="mx-auto w-full max-w-[1680px]">
        <div className="rounded-3xl bg-[#f6f4f2] p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(260px,420px)_1fr] lg:gap-14">
            <div>
              <h2 className="text-[clamp(1.9rem,2.2vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.01em] text-[#1f2128]">
                FAQs
              </h2>
              <p className="mt-4 text-[clamp(0.98rem,1.05vw,1.1rem)] leading-[1.75] text-[#4f4f4f] sm:mt-5">
                プロダクトや請求に関する必要な情報をすべてご案内します。お探しの回答が見つからない場合は、
                <a
                  href="#contact"
                  className="inline-block underline decoration-[#4f4f4f] underline-offset-4 transition-transform duration-200 hover:scale-[1.04]"
                >
                  フレンドリーなチームにチャットでお問い合わせください。
                </a>
              </p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index

                return (
                  <article
                    key={item.question}
                    className={`border-b border-[#d7d2cb] px-1 pb-2.5 transition-colors sm:px-2 sm:pb-4 ${
                      isOpen ? 'rounded-xl bg-[#fff1e9]' : ''
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="group flex w-full cursor-pointer items-start justify-between gap-3 rounded-lg px-2 py-2 text-left transition-all duration-200 hover:bg-[#ffe7dc] active:scale-[0.995] active:bg-[#ffd9c6] sm:gap-4"
                      aria-expanded={isOpen}
                    >
                      <h3
                        className={`pr-2 text-[clamp(1.02rem,1.25vw,1.32rem)] font-bold leading-[1.45] transition-colors duration-200 sm:pr-4 ${
                          isOpen ? 'text-[#1f2128]' : 'text-[#2c2f36] group-hover:text-[#1f2128]'
                        }`}
                      >
                        {item.question}
                      </h3>
                      <span
                        className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[16px] font-semibold leading-none transition-all duration-200 sm:h-7 sm:w-7 sm:text-[18px] ${
                          isOpen
                            ? 'border-[#e8400a] bg-[#ffd9c6] text-[#c23809]'
                            : 'border-[#5b5b5b] text-[#5b5b5b] group-hover:border-[#e8400a] group-hover:bg-[#ffe7dc] group-hover:text-[#e8400a]'
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? '-' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <p className="pr-9 text-[clamp(0.94rem,0.82vw,1rem)] leading-[1.8] text-[#4f4f4f] sm:pr-12">
                        {item.answer}
                      </p>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
