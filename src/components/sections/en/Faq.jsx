import { useState } from 'react'

const faqs = [
  {
    question: 'Do you offer a free trial lesson?',
    answer:
      'Yes. After creating an account, you’ll receive one free trial lesson with an assessment.',
  },
  {
    question: 'Do I need to buy any textbooks?',
    answer:
      'No.\nBrighture’s lessons use a fully original curriculum.\nAll learning materials are shared via Google Docs, so there’s no need to purchase textbooks.',
  },
  {
    question: 'How often should I take lessons?',
    answer:
      'Practicing pronunciation regularly is key to making progress. We recommend taking lessons at least once a week and keeping a consistent schedule to see the best results.',
  },
  {
    question: 'Is it okay to skip vowels and start later?',
    answer:
      'Vowels are the most important sounds in English. If you don’t have much time to study, we recommend starting with vowels first, even before moving on to other sounds.',
  },
]

function Faq() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section id="faq" className="px-4 pb-20 pt-14 sm:px-8 lg:px-16">
      <div className="mx-auto w-full max-w-[1680px]">
        <div className="rounded-3xl bg-[#f6f4f2] p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(260px,420px)_1fr] lg:gap-14">
            <div>
              <h2 className="text-[clamp(1.9rem,2.2vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.01em] text-[#1f2128]">FAQs</h2>
              <p className="mt-4 text-[clamp(0.98rem,1.05vw,1.1rem)] leading-[1.75] text-[#4f4f4f] sm:mt-5">
                Here is key information before you start. If you cannot find what you need, please contact our team.
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

export default Faq
