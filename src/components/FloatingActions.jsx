import { useState, useRef, useEffect } from 'react'
import { ChevronUp, CalendarCheck, MapPin, Phone } from 'lucide-react'

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {/* ── Desktop: Floating Action Button (hidden on mobile) ── */}
      <div ref={menuRef} className="hidden lg:flex fixed bottom-6 right-6 z-50 flex-col items-center gap-3">
        {/* Menu items */}
        <div
          className={`flex flex-col items-center gap-3 transition-all duration-300 origin-bottom ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10 pointer-events-none'
            }`}
        >
          <a
            href="tel:09842766090"
            className="w-12 h-12 bg-teal-500 hover:bg-teal-400 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            title="Call Us"
            onClick={() => setIsOpen(false)}
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="#location"
            className="w-12 h-12 bg-teal-500 hover:bg-teal-400 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            title="Location"
            onClick={() => setIsOpen(false)}
          >
            <MapPin className="w-5 h-5" />
          </a>
          <a
            href="#appointment"
            className="w-12 h-12 bg-teal-500 hover:bg-teal-400 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            title="Book Appointment"
            onClick={() => setIsOpen(false)}
          >
            <CalendarCheck className="w-5 h-5" />
          </a>
        </div>

        {/* Main toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-105 border border-white/10"
        >
          <ChevronUp className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* ── Mobile: Fixed Bottom Nav Bar (hidden on desktop) ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
        <div className="flex items-stretch">
          {/* Book Appointment */}
          <a
            href="#appointment"
            className="flex-1 flex flex-col items-center justify-center gap-1.5 py-3 text-teal-400 hover:text-white hover:bg-teal-600/30 transition-all duration-200 active:bg-teal-600/50"
          >
            <CalendarCheck className="w-5 h-5" />
            <span className="text-[10px] font-semibold tracking-wide">Book Appt.</span>
          </a>

          {/* Divider */}
          <div className="w-px bg-white/10 my-2" />

          {/* Location */}
          <a
            href="#location"
            className="flex-1 flex flex-col items-center justify-center gap-1.5 py-3 text-teal-400 hover:text-white hover:bg-teal-600/30 transition-all duration-200 active:bg-teal-600/50"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-[10px] font-semibold tracking-wide">Location</span>
          </a>

          {/* Divider */}
          <div className="w-px bg-white/10 my-2" />

          {/* Call */}
          <a
            href="tel:09842766090"
            className="flex-1 flex flex-col items-center justify-center gap-1.5 py-3 text-teal-400 hover:text-white hover:bg-teal-600/30 transition-all duration-200 active:bg-teal-600/50"
          >
            <Phone className="w-5 h-5" />
            <span className="text-[10px] font-semibold tracking-wide">Call Now</span>
          </a>
        </div>
      </div>
    </>
  )
}
