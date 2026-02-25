import { useEffect, useMemo, useState } from 'react'
import Pricing_JP from './Pricing_JP.jsx'

const GEO_CACHE_KEY = 'geo-country-cache-v1'
const GEO_CACHE_TTL_MS = 1000 * 60 * 60 * 24

function getCachedCountry() {
  try {
    const raw = localStorage.getItem(GEO_CACHE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed?.country || !parsed?.timestamp) return null
    if (Date.now() - parsed.timestamp > GEO_CACHE_TTL_MS) return null
    return parsed.country
  } catch {
    return null
  }
}

function setCachedCountry(country) {
  try {
    localStorage.setItem(
      GEO_CACHE_KEY,
      JSON.stringify({
        country,
        timestamp: Date.now(),
      }),
    )
  } catch {
    // ignore storage failures
  }
}

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
      },
    ],
  },
}

function Pricing_EN() {
  const [isJapanIp, setIsJapanIp] = useState(false)
  const [activeType, setActiveType] = useState('subscription')
  const [displayType, setDisplayType] = useState('subscription')
  const [isVisible, setIsVisible] = useState(true)
  const activePlan = useMemo(() => planTypes[displayType], [displayType])

  useEffect(() => {
    const cachedCountry = getCachedCountry()
    if (cachedCountry) {
      setIsJapanIp(cachedCountry === 'JP')
      return undefined
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 2500)

    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/', { signal: controller.signal })
        if (!response.ok) return
        const data = await response.json()
        const countryCode = typeof data?.country_code === 'string' ? data.country_code.toUpperCase() : 'UNKNOWN'
        setCachedCountry(countryCode)
        setIsJapanIp(countryCode === 'JP')
      } catch {
        // keep default non-JP variant on network failure
      } finally {
        clearTimeout(timeoutId)
      }
    }

    detectCountry()

    return () => {
      clearTimeout(timeoutId)
      controller.abort()
    }
  }, [])

  if (isJapanIp) {
    return <Pricing_JP />
  }

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
            Subscription Plan
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
            One-Time Plan
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
          <p className="mt-4 max-w-6xl text-[13px] leading-[1.7] text-[#4a4a4a] sm:text-[14px]">
            {activePlan.description}
          </p>

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
                      Get Started
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
                    ※ {card.note}
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

export default Pricing_EN
