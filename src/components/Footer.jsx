import { Cross, Phone, MapPin, MessageCircle, CalendarCheck, ArrowRight, Mail } from 'lucide-react'

const WA_URL = 'https://wa.me/919842766090?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.'
const MAPS_URL = 'https://www.google.com/maps/place/M.S.R+Clinic+-+Skin+%26+Venereal+Clinic%2FSexology+Clinic%2FAlcohol+De-Addiction+Centre%2FPsychiatrist+Clinic/@11.6634721,78.1449644,853m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3babf16b2517568f:0x5e6d0215e50b1f6f!8m2!3d11.6634721!4d78.1475393!16s%2Fg%2F11n153_ld9'

export default function Footer({ onBooking }) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0F172A] text-white">


      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg">
                <Cross className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">M.S.R Clinic</div>
                <div className="text-teal-400 text-xs tracking-widest uppercase">Salem, Tamil Nadu</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-sm">
              Salem's trusted specialist medical centre, offering compassionate and completely confidential care across Dermatology, Psychiatry, Sexology, and De-Addiction Medicine.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {[
                { label: 'Home',        href: '#hero' },
                { label: 'About Us',    href: '#about' },
                { label: 'Services',    href: '#services' },
                { label: 'Appointment', href: '#appointment' },
                { label: 'Location',    href: '#location' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="flex items-center gap-2 hover:text-teal-400 transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-4 text-slate-400 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>No. 36, Kamaraj Colony, Peramanur Main Rd, opp. Supreme Mobiles, Four Roads, Signal, Salem (M.Corp.), Tamil Nadu 636007</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <a href="tel:09842766090" className="hover:text-teal-400 transition-colors font-semibold">098427 66090</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <a href="mailto:rameshsakthivel68@gmail.com" className="hover:text-teal-400 transition-colors break-all">rameshsakthivel68@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">WhatsApp Chat</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">Get Directions</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <p className="text-slate-500 text-xs">
            &copy; {year} M.S.R Clinic, Salem.
          </p>
        </div>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0F172A]/95 backdrop-blur-xl px-4 py-3 flex gap-2.5 shadow-2xl">
        <a
          href="tel:09842766090"
          className="flex-1 bg-sky-600 hover:bg-sky-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm transition-all active:scale-95"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>
        <button
          onClick={() => onBooking()}
          className="flex-1 btn-shimmer text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm active:scale-95"
        >
          <CalendarCheck className="w-4 h-4" />
          Book
        </button>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm transition-all active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          Chat
        </a>
      </div>

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-20 md:hidden" />
    </footer>
  )
}
