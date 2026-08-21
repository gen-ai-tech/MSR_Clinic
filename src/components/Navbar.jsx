import { useState, useEffect } from 'react'
import { Menu, X, CalendarCheck } from 'lucide-react'
import logoImg from '../assets/logo.jpeg'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#appointment' },
]

export default function Navbar({ onBooking }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Track which section is in view for active-link highlighting
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'services', 'gallery', 'appointment']
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

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

  const isActive = (href) => {
    const id = href.replace('#', '')
    return activeSection === id
  }

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

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
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="M.S.R Clinic"
            >
              <img
                src={logoImg}
                alt="M.S.R Clinic Logo"
                className="h-10 w-auto rounded-lg object-contain group-hover:scale-110 transition-transform duration-300 shadow-md"
              />
              <div>
                <div className="text-white font-bold text-base tracking-wide leading-none">M.S.R Clinic</div>
                <div className="text-teal-400 text-[10px] font-medium tracking-widest uppercase mt-0.5">Salem, Tamil Nadu</div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7 ml-auto mr-8" aria-label="Main navigation">
              {navLinks.map((l) => (
                <a
                  key={l.href + l.label}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(l.href) }}
                  className={`text-sm font-medium transition-colors duration-200 relative group whitespace-nowrap ${isActive(l.href)
                    ? 'text-teal-400'
                    : 'text-slate-300 hover:text-white'
                    }`}
                >
                  {l.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-teal-400 rounded-full transition-all duration-300 ${isActive(l.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => handleNavClick('#appointment')}
                className="btn-shimmer text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2 hover:shadow-teal-500/25 transition-all w-max"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Appointment
              </button>
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

      {/* ── Mobile Backdrop ── */}
      <div
        className={`fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile Drawer (slides in from right) ── */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] sm:w-1/2 z-[60] bg-[#0F172A] border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-400 ease-in-out lg:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <img
              src={logoImg}
              alt="M.S.R Clinic Logo"
              className="h-8 w-auto rounded-md object-contain"
            />
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

        {/* Nav links */}
        <div className="flex-1 overflow-y-auto">
          <nav className="px-3 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(l.href) }}
                className={`font-medium py-3 px-3 rounded-xl transition-all text-sm flex items-center gap-3 group ${isActive(l.href)
                  ? 'text-teal-400 bg-teal-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/8'
                  }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0 transition-opacity ${isActive(l.href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                {l.label}
              </a>
            ))}

            {/* Book CTA */}
            <div className="mt-4 pt-4 border-t border-white/10 px-2">
              <button
                onClick={() => handleNavClick('#appointment')}
                className="btn-shimmer text-white font-bold py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 w-full shadow-lg"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Appt.
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
