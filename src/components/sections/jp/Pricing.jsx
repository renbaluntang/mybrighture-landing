import { useEffect, useMemo, useState } from 'react'

const planTypesJa = {
  subscription: {
    key: 'subscription',
    label: 'サブスクプラン',
    title: 'サブスクプラン',
    description:
      'キャンセルするまで毎月の支払日に自動的にポイントを定期購入します。週1回または2回のペースで受講する方におすすめです。',
    cards: [
      {
        name: 'サブスク20',
        summary: 'まずは英語学習を習慣化したい方におすすめ。',
        price: '80',
        priceSuffix: 'USD / 月',
        items: [
          '毎月 20 ポイント購入',
          '週1回 程度の受講におすすめ',
          'すべての科目を受講可能',
          '1レッスンあたり 4〜6 ポイント消費',
          'ポイント有効期間 45 日間',
          '有効期限日の当日のレッスンまで予約可能',
          'ポイントが足りなくなったら1ポイント単位で追加購入可能',
          'いつでも停止可能',
        ],
        note: '※ベーシックプランを購入すると、プレミアムプランで購入したポイントは破棄されます。',
      },
      {
        name: 'サブスク40',
        summary: 'しっかり学習を進めていきたい方におすすめ。',
        price: '154',
        priceSuffix: 'USD / 月',
        items: [
          '毎月 40 ポイント購入',
          '週2回 程度の受講におすすめ',
          'すべての科目を受講可能',
          '1レッスンあたり 4〜6 ポイント消費',
          'ポイント有効期間 45 日間',
          '有効期限日の当日のレッスンまで予約可能',
          'ポイントが足りなくなったら1ポイント単位で追加購入可能',
          'いつでも停止可能',
        ],
        note: '※ベーシックプランを購入すると、プレミアムプランで購入したポイントは破棄されます。',
      },
    ],
  },
  oneTime: {
    key: 'oneTime',
    label: 'ワンタイムプラン',
    title: 'ワンタイムプラン',
    description:
      'レッスン1回分または20回分のポイントをまとめて購入します。1レッスン分だけ、または週3回以上のペースで受講する方におすすめです。',
    cards: [
      {
        name: 'ワンタイム5',
        summary: '自分のペースで自由に受講したい方におすすめ。',
        price: '25',
        priceSuffix: 'USD',
        items: [
          '1レッスン分の 5 ポイント購入',
          '1レッスン毎にポイントを購入したい人向け',
          'すべての科目を受講可能',
          '1レッスンあたり 4〜6 ポイント消費',
          'ポイント有効期間 7 日間',
          '有効期限日の当日のレッスンまで予約可能',
          'ポイントが足りなくなったら1ポイント単位で追加購入可能',
        ],
        note: '※プレミアムプランを購入すると、ベーシックプランで購入したポイントは破棄されます。',
      },
      {
        name: 'ワンタイム100',
        summary: 'たくさん受講したい方におすすめ。',
        price: '370',
        priceSuffix: 'USD',
        items: [
          'まとめて 100 ポイント購入',
          '週3回 以上の受講におすすめ',
          'すべての科目を受講可能',
          '1レッスンあたり 4〜6 ポイント消費',
          'ポイント有効期間 90 日間',
          '有効期限日の当日のレッスンまで予約可能',
          'ポイントが足りなくなったら1ポイント単位で追加購入可能',
        ],
        note: '※プレミアムプランを購入すると、ベーシックプランで購入したポイントは破棄されます。',
      },
    ],
  },
}

function Pricing_JP() {
  const [activeType, setActiveType] = useState('subscription')
  const [displayType, setDisplayType] = useState('subscription')
  const [isVisible, setIsVisible] = useState(true)
  const activePlan = useMemo(() => planTypesJa[displayType], [displayType])

  useEffect(() => {
    if (activeType === displayType) return undefined
    setIsVisible(false)
    const timer = setTimeout(() => {
      setDisplayType(activeType)
      setIsVisible(true)
    }, 180)
    return () => clearTimeout(timer)
  }, [activeType, displayType])

  return (
    <section id="pricing" className="px-4 py-14 sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto w-full max-w-[1680px]">
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setActiveType('subscription')}
            className={`cursor-pointer rounded-md border px-7 py-3 text-[14px] font-semibold transition-all duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] active:scale-[0.99] sm:min-w-[220px] ${
              activeType === 'subscription'
                ? 'border-[#e8400a] bg-[#e8400a] text-white'
                : 'border-[#6f7784] bg-white text-[#2a2f36] hover:bg-[#f4f6f8]'
            }`}
          >
            サブスクプラン
          </button>
          <button
            type="button"
            onClick={() => setActiveType('oneTime')}
            className={`cursor-pointer rounded-md border px-7 py-3 text-[14px] font-semibold transition-all duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] active:scale-[0.99] sm:min-w-[220px] ${
              activeType === 'oneTime'
                ? 'border-[#e8400a] bg-[#e8400a] text-white'
                : 'border-[#6f7784] bg-white text-[#2a2f36] hover:bg-[#f4f6f8]'
            }`}
          >
            ワンタイムプラン
          </button>
        </div>

        <div
          className={`transition-all duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <div className="mt-12 border-l-[6px] border-[#b9bec6] pl-4">
            <h2 className="text-[24px] font-bold leading-tight text-[#1f2128] sm:text-[26px]">{activePlan.title}</h2>
          </div>
          <p className="mt-4 max-w-6xl text-[13px] leading-[1.7] text-[#4a4a4a] sm:text-[14px]">{activePlan.description}</p>

          <div className="mx-auto mt-7 w-full lg:w-10/12">
            <div className="grid gap-4 md:grid-cols-2">
              {activePlan.cards.map((card) => (
                <article
                  key={card.name}
                  className="flex h-full flex-col rounded-md border border-[#cfd5dc] bg-[#f6f7f8] transition-all duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] hover:-translate-y-1 hover:border-[#bcc6cf] hover:shadow-lg"
                >
                  <div className="grow p-5 sm:p-6">
                    <h3 className="text-[16px] font-bold leading-tight text-[#1f2128] sm:text-[18px]">{card.name}</h3>
                    <p className="mt-3 text-[13px] leading-[1.65] text-[#4a4a4a] sm:text-[14px]">{card.summary}</p>

                    <div className="mt-5 flex items-end gap-2">
                      <p className="text-[26px] font-extrabold leading-none text-[#1f2128] sm:text-[30px]">{card.price}</p>
                      <p className="pb-1 text-[13px] text-[#4a4a4a] sm:text-[14px]">{card.priceSuffix}</p>
                    </div>

                    <a
                      href="https://brighture-edu.com/register/index.html"
                      className="mt-4 inline-flex w-full items-center justify-center rounded border border-[#e8400a] bg-[#e8400a] px-5 py-2.5 text-[14px] font-bold text-white transition-all duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] hover:-translate-y-0.5 hover:bg-[#cf3808] hover:shadow-md active:translate-y-0 active:scale-[0.99]"
                    >
                      プランを購入する
                    </a>

                    <ul className="mt-5 space-y-2">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[13px] leading-[1.55] text-[#4a4a4a] sm:text-[14px]">
                          <span className="mt-0.5 text-[16px] font-bold text-[#128136]">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-[#d7dde3] bg-[#eef1f4] px-5 py-2.5 text-[10px] leading-[1.5] text-[#6b6b6b] sm:text-[11px]">
                    {card.note}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing_JP
