function CtaAmbientBackground() {
  return (
    <>
      <span
        className="pointer-events-none absolute -left-20 -top-16 h-52 w-52 rounded-full bg-[#ffffff]/55 blur-2xl"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-white/60 blur-2xl"
        aria-hidden="true"
      />
    </>
  )
}

export default CtaAmbientBackground
