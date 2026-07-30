import { useState, useEffect } from 'react'
import { Menu, X, CalendarCheck, Cross } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Appointment', href: '#appointment' },
  { label: 'Location', href: '#location' },
]

export default function Navbar({ onBooking }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#0F172A]/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/5'
          : 'bg-[#0F172A]/40 backdrop-blur-md shadow-md border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group flex-shrink-0" aria-label="M.S.R Clinic">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-900/40 group-hover:scale-110 transition-transform duration-300">
                <Cross className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-bold text-base tracking-wide leading-none">M.S.R Clinic</div>
                <div className="text-teal-400 text-[10px] font-medium tracking-widest uppercase mt-0.5">Salem, Tamil Nadu</div>
              </div>
            </a>

            {/* Desktop nav — pushed toward the right with ml-auto */}
            <nav className="hidden lg:flex items-center gap-7 ml-auto mr-8" aria-label="Main navigation">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200 relative group whitespace-nowrap"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <a
                href="#appointment"
                className="btn-shimmer text-white font-semibold px-5 py-2.5 rounded-xl text-sm shadow-lg shadow-teal-900/30 flex items-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Appointment
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors z-[60] relative"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Slide-in Drawer (right → left) ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel — slides in from the right */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 z-[60] bg-[#0F172A] border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-400 ease-in-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
              <Cross className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-sm tracking-wide">M.S.R Clinic</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links and CTA */}
        <div className="flex-1 overflow-y-auto">
          <nav className="px-3 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-slate-300 hover:text-white hover:bg-white/8 font-medium py-3 px-3 rounded-xl transition-all text-sm flex items-center gap-3 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                {l.label}
              </a>
            ))}

            {/* CTA directly below Location */}
            <div className="mt-4 pt-4 border-t border-white/10 px-2">
              <a
                href="#appointment"
                onClick={() => setMobileOpen(false)}
                className="btn-shimmer text-white font-bold py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 w-full shadow-lg"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Appt.
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
