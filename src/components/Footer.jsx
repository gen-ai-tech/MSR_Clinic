import { Phone, MapPin, MessageCircle, CalendarCheck, ArrowRight, Mail } from 'lucide-react'
import logoImg from '../assets/logo.jpeg'

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
              <img
                src={logoImg}
                alt="M.S.R Clinic Logo"
                className="h-12 w-auto rounded-lg object-contain shadow-md"
              />
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
                { label: 'Home', href: '#hero' },
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Appointment', href: '#appointment' },
                { label: 'Location', href: '#location' },
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
                <a href="tel:9842766090" className="hover:text-teal-400 transition-colors font-semibold">98427 66090</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <a href="mailto:rameshsakthivel68@gmail.com" className="hover:text-teal-400 transition-colors break-all">rameshsakthivel68@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6 mt-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center gap-2">
          <p className="text-slate-500 text-xs">
            &copy; {year} M.S.R Clinic, Salem.
          </p>
          <p className="text-slate-500 text-xs">
            Powered by{' '}
            <a 
              href="https://genaitechnology.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-400 font-semibold transition-colors"
            >
              Gen-AI Tech | IT Solutions Salem
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
