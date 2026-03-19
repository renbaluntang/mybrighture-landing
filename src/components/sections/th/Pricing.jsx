import { useEffect, useMemo, useRef, useState } from 'react'

const planTypes = {
  subscription: {
    key: 'subscription',
    label: 'Subscription Plan',
    title: 'Subscription Plan',
    description:
      'Points are automatically added to your account each month on your billing date until you cancel. Ideal for learners who take lessons once or twice a week.',
    cards: [
      {
        name: 'Subscription 20',
        summary: 'Ideal for building a consistent study habit at a manageable weekly pace.',
        price: '$80',
        priceSuffix: 'USD / month',
        items: [
          'Receive 20 points per month',
          '1 lesson per week',
          'All lesson types available',
          'Each lesson consumes 4〜6 points',
          'Points valid for 45 days',
          'Book lessons until the end of the expiration date',
          'Additional points can be purchased starting from 1 point',
          'Cancel anytime',
        ],
        note: 'When you buy a subscription plan, any remaining points from a One-Time Plan will be forfeited.',
        popular: false
      },
      {
        name: 'Subscription 40',
        summary: 'Excellent for building a consistent study habit at a slightly faster pace.',
        price: '$154',
        priceSuffix: 'USD / month',
        items: [
          'Receive 40 points per month',
          '2 lessons per week',
          'All lesson types available',
          'Each lesson consumes 4〜6 points',
          'Points valid for 45 days',
          'Book lessons until the end of the expiration date',
          'Additional points can be purchased starting from 1 point',
          'Cancel anytime',
        ],
        note: 'When you buy a subscription plan, any remaining points from a One-Time Plan will be forfeited.',
        popular: true
      },
    ],
  },
  oneTime: {
    key: 'oneTime',
    label: 'One-Time Plan',
    title: 'One-Time Plan',
    description:
      'Buy points for a single lesson or a bundle. Ideal for learners who prefer flexible scheduling, whether you want to try one class or take more than three lessons per week.',
    cards: [
      {
        name: 'One-Time 5',
        summary: 'Great for taking lessons at your own pace.',
        price: '$25',
        priceSuffix: 'USD',
        items: [
          'Receive 5 points',
          'Best for those who prefer buying points per lesson',
          'All lesson types available',
          'Each lesson consumes 4〜6 points',
          'Points valid for 7 days',
          'Book lessons until the end of the expiration date',
          'Additional points can be purchased starting from 1 point',
        ],
        note: 'When you buy a One-Time Plan, any remaining points from a Subscription Plan will be forfeited.',
        popular: false
      },
      {
        name: 'One-Time 100',
        summary: 'Perfect if you want to take many lessons.',
        price: '$370',
        priceSuffix: 'USD',
        items: [
          'Receive 100 points',
          '3+ lessons per week',
          'All lesson types available',
          'Each lesson consumes 4〜6 points',
          'Points valid for 90 days',
          'Book lessons until the end of the expiration date',
          'Additional points can be purchased starting from 1 point',
        ],
        note: 'When you buy a One-Time Plan, any remaining points from a Subscription Plan will be forfeited.',
        popular: false
      },
    ],
  },
}

function Pricing() {
  const [activeType, setActiveType] = useState('subscription')
  const [displayType, setDisplayType] = useState('subscription')
  const [isVisible, setIsVisible] = useState(true)
  const [slideDirection, setSlideDirection] = useState('right')
  const transitionTimerRef = useRef(undefined)
  const activePlan = useMemo(() => planTypes[displayType], [displayType])

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current)
      }
    }
  }, [])

  const handleTypeChange = (nextType) => {
    if (nextType === activeType) return

    setSlideDirection(nextType === 'oneTime' ? 'right' : 'left')
    setActiveType(nextType)
    setIsVisible(false)
    if (transitionTimerRef.current) {
      clearTimeout(transitionTimerRef.current)
    }
    transitionTimerRef.current = setTimeout(() => {
      setDisplayType(nextType)
      setIsVisible(true)
    }, 180)
  }

  return (
    <section id="pricing" className="relative px-4 py-16 sm:px-8 sm:py-24 lg:px-16 overflow-hidden bg-white">
      {/* Decorative Blob */}
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-gradient-to-t from-[#fde8e3]/40 to-[#fff4f0]/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto w-full max-w-[1680px] text-center relative z-10">
        <span className="text-sm font-bold tracking-[0.08em] text-[#e8400a] sm:text-base">
          Pricing
        </span>
        <h2 className="text-[32px] font-bold leading-[1.15] text-[#1f2128] sm:text-[36px] md:text-[40px]">
          Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8400a] to-[#ff7b54]">Transparent Pricing</span>
        </h2>
        
        {/* Toggle Design */}
        <div className="mt-12 flex justify-center w-full">
          <div className="relative inline-flex rounded-xl p-1.5 bg-[#f1f5f9] shadow-inner border border-[#e2e8f0]">
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-lg bg-white shadow-sm transition-transform duration-300 ease-out ${
                activeType === 'subscription' ? 'translate-x-0' : 'translate-x-full'
              }`}
            />
            <button
              type="button"
              onClick={() => handleTypeChange('subscription')}
              className={`relative z-10 cursor-pointer rounded-lg px-8 py-3.5 text-sm font-bold transition-all duration-300 ease-out sm:min-w-[200px] ${
                activeType === 'subscription'
                  ? 'text-[#1a202c]'
                  : 'text-[#64748b] hover:text-[#e8400a]'
              }`}
            >
              Subscription Plan
            </button>
            <button
              type="button"
              onClick={() => handleTypeChange('oneTime')}
              className={`relative z-10 cursor-pointer rounded-lg px-8 py-3.5 text-sm font-bold transition-all duration-300 ease-out sm:min-w-[200px] ${
                activeType === 'oneTime'
                  ? 'text-[#1a202c]'
                  : 'text-[#64748b] hover:text-[#e8400a]'
              }`}
            >
              One-Time Plan
            </button>
          </div>
        </div>

        <div className="relative mt-16 w-full text-left">
          <div
            className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : slideDirection === 'right'
                  ? '-translate-x-6 opacity-0'
                  : 'translate-x-6 opacity-0'
            }`}
          >
          <div className="mx-auto max-w-3xl text-center mb-10">
             <h3 className="text-lg font-bold leading-tight text-[#1a202c] sm:text-xl mb-3">{activePlan.title}</h3>
             <p className="text-sm leading-[1.65] text-[#4a5568] font-medium mx-auto max-w-2xl">
               {activePlan.description}
             </p>
          </div>

          <div className="mx-auto mt-8 w-full max-w-[1080px]">
            <div className="grid gap-5 md:grid-cols-2 lg:gap-6 justify-center">
              {activePlan.cards.map((card) => (
                <article
                  key={card.name}
                  className={`group relative flex flex-col rounded-[1.25rem] bg-white transition-all duration-300 ease-out hover:-translate-y-1
                    ${card.popular 
                      ? 'border-2 border-[#e8400a] shadow-[0_20px_40px_-15px_rgba(232,64,10,0.2)]' 
                      : 'border border-[#e2e8f0] shadow-[0_4px_15px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-[#cbd5e1]'
                    }
                  `}
                >
                  {/* Popular Badge */}
                  {card.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-[#e8400a] to-[#ff7b54] text-white text-xs font-bold uppercase tracking-widest shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="grow p-5 sm:p-6 flex flex-col">
                    <h3 className="text-base font-extrabold leading-tight text-[#1a202c] tracking-tight sm:text-lg">{card.name}</h3>
                    <p className="mt-2 text-xs leading-[1.6] text-[#64748b] font-medium">{card.summary}</p>

                    <div className="mt-5 mb-5 flex items-baseline gap-2 border-b border-[#e2e8f0] pb-5">
                      <p className="text-xl font-extrabold tracking-tight text-[#1a202c] sm:text-2xl">{card.price}</p>
                      <p className="text-xs font-bold text-[#64748b] uppercase tracking-wide">{card.priceSuffix}</p>
                    </div>

                    <ul className="space-y-3 mb-7 flex-grow">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start text-xs leading-[1.5] text-[#4a5568] font-medium">
                           <div className="flex-shrink-0 flex items-center justify-center w-4.5 h-4.5 rounded-full bg-[#e8f5e9] mr-2.5 mt-0.5">
                             <span className="text-[12px] font-bold text-[#10b981]">✓</span>
                           </div>
                           <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                        <a
                          href="/register/index.html"
                          className={`flex w-full items-center justify-center rounded-lg px-4.5 py-3 text-sm font-bold transition-all duration-300 ease-out active:scale-[0.98] ${
                            card.popular
                              ? 'bg-gradient-to-r from-[#e8400a] to-[#ff6a3d] text-white shadow-[0_8px_20px_-5px_rgba(232,64,10,0.4)] hover:shadow-[0_12px_25px_-5px_rgba(232,64,10,0.5)]'
                              : 'bg-[#f1f5f9] text-[#1a202c] hover:bg-[#e2e8f0]'
                          }`}
                        >
                          Get Started Today
                        </a>
                    </div>
                  </div>

                  <div className="rounded-b-[1.25rem] bg-[#f8fafc] px-5 py-2.5 border-t border-[#edf2f7]">
                     <p className="text-xs leading-[1.5] text-[#94a3b8] font-medium">
                       ※ {card.note}
                     </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
