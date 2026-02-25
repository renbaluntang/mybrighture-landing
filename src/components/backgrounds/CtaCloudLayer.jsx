const clouds = [
  { id: 'a', left: '-18%', bottom: '0.75rem', width: '11.5rem', height: '4.2rem', opacity: 0.55, duration: '11s', delay: '0s', shape: 'puffWide' },
  { id: 'b', left: '-9%', bottom: '4.8rem', width: '6.5rem', height: '2.2rem', opacity: 0.36, duration: '12.4s', delay: '-1.5s', shape: 'flat' },
  { id: 'c', left: '-1%', bottom: '2.5rem', width: '8.2rem', height: '3.1rem', opacity: 0.41, duration: '8.5s', delay: '-1.2s', shape: 'puffTall' },
  { id: 'd', left: '6%', bottom: '6rem', width: '5.5rem', height: '1.9rem', opacity: 0.3, duration: '10.9s', delay: '-2.6s', shape: 'tiny' },
  { id: 'e', left: '12%', bottom: '0.35rem', width: '7rem', height: '2.75rem', opacity: 0.36, duration: '9.4s', delay: '-2.1s', shape: 'puffWide' },
  { id: 'f', left: '18%', bottom: '3.8rem', width: '5.8rem', height: '2rem', opacity: 0.31, duration: '9.9s', delay: '-1.6s', shape: 'tiny' },
  { id: 'g', left: '24%', bottom: '0.8rem', width: '7.8rem', height: '3rem', opacity: 0.4, duration: '12s', delay: '-3s', shape: 'puffTall' },
  { id: 'h', left: '29%', bottom: '6.2rem', width: '6rem', height: '2.2rem', opacity: 0.32, duration: '10.3s', delay: '-0.9s', shape: 'flat' },
  { id: 'i', left: '33%', bottom: '3.9rem', width: '11.4rem', height: '4rem', opacity: 0.48, duration: '9.8s', delay: '-1.9s', shape: 'puffWide' },
  { id: 'j', left: '42%', bottom: '5.9rem', width: '8rem', height: '2.75rem', opacity: 0.4, duration: '11.6s', delay: '-0.7s', shape: 'flat' },
  { id: 'k', left: '46%', bottom: '0.2rem', width: '6.2rem', height: '2.2rem', opacity: 0.35, duration: '9.1s', delay: '-2.3s', shape: 'tiny' },
  { id: 'l', left: '50%', bottom: '1.5rem', width: '13rem', height: '4.9rem', opacity: 0.58, duration: '10s', delay: '-2.4s', shape: 'puffTall' },
  { id: 'm', left: '59%', bottom: '6.4rem', width: '6.8rem', height: '2.35rem', opacity: 0.34, duration: '8.9s', delay: '-3.2s', shape: 'flat' },
  { id: 'n', left: '64%', bottom: '0.45rem', width: '8.7rem', height: '3.4rem', opacity: 0.44, duration: '8.8s', delay: '-2.7s', shape: 'puffWide' },
  { id: 'o', left: '70%', bottom: '4.6rem', width: '5.6rem', height: '2rem', opacity: 0.3, duration: '11.8s', delay: '-1.9s', shape: 'tiny' },
  { id: 'p', left: '74%', bottom: '6.5rem', width: '6.5rem', height: '2.3rem', opacity: 0.33, duration: '12.6s', delay: '-1.4s', shape: 'flat' },
  { id: 'q', left: '80%', bottom: '3.4rem', width: '7.2rem', height: '3rem', opacity: 0.42, duration: '9s', delay: '-0.8s', shape: 'puffTall' },
  { id: 'r', left: '86%', bottom: '5.7rem', width: '6.7rem', height: '2.5rem', opacity: 0.37, duration: '10.6s', delay: '-1.1s', shape: 'flat' },
  { id: 's', left: '90%', bottom: '1.3rem', width: '10rem', height: '4rem', opacity: 0.5, duration: '10.8s', delay: '-0.4s', shape: 'puffWide' },
  { id: 't', left: '96%', bottom: '4.7rem', width: '6rem', height: '2.2rem', opacity: 0.35, duration: '9.7s', delay: '-1.8s', shape: 'tiny' },
  { id: 'u', left: '101%', bottom: '2.9rem', width: '8.2rem', height: '3rem', opacity: 0.39, duration: '12.1s', delay: '-2.6s', shape: 'puffTall' },
  { id: 'v', left: '108%', bottom: '5.3rem', width: '7.1rem', height: '2.4rem', opacity: 0.33, duration: '11.2s', delay: '-1.1s', shape: 'flat' },
]

const cloudShapes = {
  puffWide: {
    one: { width: '42%', height: '95%', left: '14%', top: '-46%' },
    two: { width: '36%', height: '78%', right: '12%', top: '-34%' },
  },
  puffTall: {
    one: { width: '46%', height: '105%', left: '10%', top: '-56%' },
    two: { width: '34%', height: '88%', right: '10%', top: '-40%' },
  },
  flat: {
    one: { width: '38%', height: '72%', left: '18%', top: '-32%' },
    two: { width: '33%', height: '62%', right: '15%', top: '-24%' },
  },
  tiny: {
    one: { width: '35%', height: '68%', left: '16%', top: '-26%' },
    two: { width: '29%', height: '54%', right: '18%', top: '-18%' },
  },
}

function CtaCloudLayer() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[36%] overflow-hidden" aria-hidden="true">
        {clouds.map((cloud) => {
          const shape = cloudShapes[cloud.shape] ?? cloudShapes.puffWide
          return (
          <span
            key={cloud.id}
            className="absolute rounded-full bg-white"
            style={{
              left: cloud.left,
              bottom: cloud.bottom,
              width: cloud.width,
              height: cloud.height,
              opacity: cloud.opacity,
              // opacity: Math.min(cloud.opacity + 0.08, 0.72),
              // filter: 'blur(0.6px)',
              animation: `driftCloud ${cloud.duration} ease-in-out infinite`,
              animationDelay: cloud.delay,
            }}
          >
            <span
              className="absolute rounded-full bg-inherit"
              style={shape.one}
            />
            <span
              className="absolute rounded-full bg-inherit"
              style={shape.two}
            />
          </span>
          )
        })}
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
