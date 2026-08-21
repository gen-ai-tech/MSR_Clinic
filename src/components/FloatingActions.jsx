import { useState, useRef, useEffect } from 'react'
import { ChevronUp, CalendarCheck, MapPin, Phone } from 'lucide-react'

const MAPS_URL = 'https://www.google.com/maps/place/M.S.R+Clinic+-+Skin+%26+Venereal+Clinic%2FSexology+Clinic%2FAlcohol+De-Addiction+Centre%2FPsychiatrist+Clinic/@11.6634721,78.1449644,853m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3babf16b2517568f:0x5e6d0215e50b1f6f!8m2!3d11.6634721!4d78.1475393!16s%2Fg%2F11n153_ld9'

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
            href="tel:9842766090"
            className="w-12 h-12 bg-teal-500 hover:bg-teal-400 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            title="Call Us"
            onClick={() => setIsOpen(false)}
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
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
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] px-2 py-2">
        <div className="flex items-stretch gap-2">
          {/* Book Appointment */}
          <a
            href="#appointment"
            className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 bg-[#0F172A] text-white rounded-xl active:bg-[#1E293B] transition-colors shadow-sm"
          >
            <CalendarCheck className="w-5 h-5 text-teal-400" />
            <span className="text-[10px] font-semibold tracking-wide">Book Appt.</span>
          </a>

          {/* Location */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 bg-[#0F172A] text-white rounded-xl active:bg-[#1E293B] transition-colors shadow-sm"
          >
            <MapPin className="w-5 h-5 text-teal-400" />
            <span className="text-[10px] font-semibold tracking-wide">Location</span>
          </a>

          {/* Call */}
          <a
            href="tel:9842766090"
            className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 bg-[#0F172A] text-white rounded-xl active:bg-[#1E293B] transition-colors shadow-sm"
          >
            <Phone className="w-5 h-5 text-teal-400" />
            <span className="text-[10px] font-semibold tracking-wide">Call Now</span>
          </a>
        </div>
      </div>
    </>
  )
}
