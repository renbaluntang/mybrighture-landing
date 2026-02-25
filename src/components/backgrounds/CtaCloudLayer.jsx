const clouds = [
  { id: 'a', left: '-16%', bottom: '1rem', width: '10rem', height: '4rem', opacity: 0.55, duration: '11s', delay: '0s' },
  { id: 'b', left: '-4%', bottom: '5.4rem', width: '7rem', height: '2.5rem', opacity: 0.38, duration: '12.4s', delay: '-1.5s' },
  { id: 'c', left: '8%', bottom: '3rem', width: '9rem', height: '3.5rem', opacity: 0.45, duration: '8.5s', delay: '-1.2s' },
  { id: 'd', left: '14%', bottom: '0.25rem', width: '7rem', height: '2.75rem', opacity: 0.36, duration: '9.4s', delay: '-2.1s' },
  { id: 'e', left: '22%', bottom: '0.75rem', width: '7.5rem', height: '3rem', opacity: 0.4, duration: '12s', delay: '-3s' },
  { id: 'f', left: '30%', bottom: '6.4rem', width: '6rem', height: '2.2rem', opacity: 0.32, duration: '10.3s', delay: '-0.9s' },
  { id: 'g', left: '34%', bottom: '4rem', width: '11rem', height: '4rem', opacity: 0.48, duration: '9.8s', delay: '-1.9s' },
  { id: 'h', left: '44%', bottom: '6rem', width: '8rem', height: '2.75rem', opacity: 0.4, duration: '11.6s', delay: '-0.7s' },
  { id: 'i', left: '49%', bottom: '0.1rem', width: '6.2rem', height: '2.2rem', opacity: 0.35, duration: '9.1s', delay: '-2.3s' },
  { id: 'j', left: '52%', bottom: '1.4rem', width: '13rem', height: '5rem', opacity: 0.58, duration: '10s', delay: '-2.4s' },
  { id: 'k', left: '60%', bottom: '5.2rem', width: '7rem', height: '2.5rem', opacity: 0.34, duration: '8.9s', delay: '-3.2s' },
  { id: 'l', left: '66%', bottom: '0.4rem', width: '8.5rem', height: '3.5rem', opacity: 0.44, duration: '8.8s', delay: '-2.7s' },
  { id: 'm', left: '72%', bottom: '6.7rem', width: '6.5rem', height: '2.3rem', opacity: 0.33, duration: '12.6s', delay: '-1.4s' },
  { id: 'n', left: '82%', bottom: '3.5rem', width: '7rem', height: '3rem', opacity: 0.42, duration: '9s', delay: '-0.8s' },
  { id: 'o', left: '88%', bottom: '5.5rem', width: '7rem', height: '2.5rem', opacity: 0.37, duration: '10.6s', delay: '-1.1s' },
  { id: 'p', left: '92%', bottom: '1.2rem', width: '10rem', height: '4rem', opacity: 0.5, duration: '10.8s', delay: '-0.4s' },
  { id: 'q', left: '98%', bottom: '4.8rem', width: '6rem', height: '2.25rem', opacity: 0.35, duration: '9.7s', delay: '-1.8s' },
  { id: 'r', left: '102%', bottom: '3rem', width: '8rem', height: '3rem', opacity: 0.39, duration: '12.1s', delay: '-2.6s' },
]

function CtaCloudLayer() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[36%] overflow-hidden" aria-hidden="true">
        {clouds.map((cloud) => (
          <span
            key={cloud.id}
            className="absolute rounded-full bg-white"
            style={{
              left: cloud.left,
              bottom: cloud.bottom,
              width: cloud.width,
              height: cloud.height,
              opacity: Math.min(cloud.opacity + 0.08, 0.72),
              filter: 'blur(0.6px)',
              animation: `driftCloud ${cloud.duration} ease-in-out infinite`,
              animationDelay: cloud.delay,
            }}
          >
            <span
              className="absolute rounded-full bg-inherit"
              style={{ width: '42%', height: '95%', left: '14%', top: '-46%' }}
            />
            <span
              className="absolute rounded-full bg-inherit"
              style={{ width: '36%', height: '78%', right: '12%', top: '-34%' }}
            />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes driftCloud {
          0% { transform: translateX(0); }
          50% { transform: translateX(24px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </>
  )
}

export default CtaCloudLayer
