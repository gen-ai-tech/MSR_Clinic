import { useEffect, useRef } from 'react'
import { CalendarCheck, ChevronDown, ShieldCheck } from 'lucide-react'

const CLINIC_NUMBER = 'tel:09842766090'

export default function Hero({ onBooking }) {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const handler = (e) => {
      const { clientX, clientY } = e
      const { width, height, left, top } = el.getBoundingClientRect()
      const x = ((clientX - left) / width - 0.5) * 20
      const y = ((clientY - top) / height - 0.5) * -20
      el.style.setProperty('--tx', `${x}px`)
      el.style.setProperty('--ty', `${y}px`)
    }
    el.addEventListener('mousemove', handler)
    return () => el.removeEventListener('mousemove', handler)
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-bg min-h-screen relative flex items-center pt-28 sm:pt-32 pb-20 overflow-hidden"
      style={{ '--tx': '0px', '--ty': '0px' }}
    >
      {/* Decorative orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-teal-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-teal-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-teal-500/8" />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left Column ── */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold px-4 py-2 rounded-full mb-7 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
              Salem's Most Trusted Speciality Clinic - Est. for Compassionate Care
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-white leading-[1.15] mb-6">
              Holistic Care.<br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                  Complete Privacy.
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 8" fill="none" preserveAspectRatio="none">
                  <path d="M2 6 C75 2, 225 2, 298 6" stroke="url(#u1)" strokeWidth="2.5" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="u1" x1="0" y1="0" x2="1" y2="0">
                      <stop stopColor="#2dd4bf" /><stop offset="1" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              No Judgment.
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-9 max-w-lg mx-auto lg:mx-0">
              Expert specialist care across <span className="text-teal-300 font-medium">Dermatology</span>,{' '}
              <span className="text-teal-300 font-medium">Psychiatry</span>,{' '}
              <span className="text-teal-300 font-medium">Sexology</span> &amp;{' '}
              <span className="text-teal-300 font-medium">De-Addiction</span>.
            </p>

            {/* Primary CTA */}
            <div className="flex justify-center lg:justify-start mb-8 w-auto">
              <button
                onClick={() => onBooking()}
                className="btn-shimmer pulse-ring text-white font-bold px-6 py-3.5 rounded-2xl text-sm sm:text-base shadow-xl shadow-teal-900/40 flex items-center justify-center gap-2.5 w-auto"
              >
                <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                Book Appointment
              </button>
            </div>

          </div>

          {/* ── Right Column: Clinic Image ── */}
          <div className="flex items-center justify-center mt-4 sm:mt-6 lg:mt-0">
            <div className="relative w-full max-w-lg">
              {/* Glow ring behind image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/30 to-sky-500/20 blur-2xl scale-105" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/40 border border-white/10">
                <img
                  src="/clinic-hero-2.png"
                  alt="M.S.R Clinic - Salem"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 glass rounded-2xl px-5 py-3 flex items-center justify-between backdrop-blur-md">
                  <div>
                    <p className="text-white font-bold text-sm">M.S.R Clinic</p>
                    <p className="text-teal-300 text-xs">Salem, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  )
}
