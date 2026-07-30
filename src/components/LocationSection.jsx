import {
  MapPin, Phone, MessageCircle, Share2,
  Navigation, Clock
} from 'lucide-react'

const MAPS_URL = 'https://www.google.com/maps/place/M.S.R+Clinic+-+Skin+%26+Venereal+Clinic%2FSexology+Clinic%2FAlcohol+De-Addiction+Centre%2FPsychiatrist+Clinic/@11.6634721,78.1449644,853m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3babf16b2517568f:0x5e6d0215e50b1f6f!8m2!3d11.6634721!4d78.1475393!16s%2Fg%2F11n153_ld9'
const WA_URL = 'https://wa.me/919842766090?text=Hello%2C%20I%20would%20like%20to%20book%20a%20confidential%20appointment.'


export default function LocationSection({ onBooking }) {
  const shareLocation = () => {
    if (navigator.share) {
      navigator.share({ title: 'M.S.R Clinic', text: 'Visit M.S.R Clinic in Salem', url: MAPS_URL })
    } else {
      navigator.clipboard.writeText(MAPS_URL)
      alert('Map link copied to clipboard!')
    }
  }

  return (
    <section id="location" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sky-600 text-xs font-bold uppercase tracking-widest bg-sky-50 border border-sky-200 px-4 py-2 rounded-full mb-5">
            Visit Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Find Us in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
              Salem
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Centrally located at Four Roads Signal - easily accessible by auto, bus, or personal vehicle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Info + Actions */}
          <div className="space-y-5">
            {/* Address card */}
            <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[#1E293B] font-bold text-lg mb-1.5">Clinic Address</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    No. 36, Kamaraj Colony,<br />
                    Peramanur Main Rd, opp. Supreme Mobiles,<br />
                    Four Roads, Signal,<br />
                    <strong className="text-slate-700">Salem (M.Corp.), Tamil Nadu 636007</strong>
                  </p>
                  <p className="text-slate-400 text-xs mt-2 font-mono">Plus Code: M47X+92 Salem</p>
                </div>
              </div>
            </div>

            {/* Phone card */}
            <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[#1E293B] font-bold text-lg mb-0.5">Booking & Emergency</h3>
                  <a href="tel:09842766090" className="text-2xl font-bold text-teal-600 hover:text-teal-700 transition-colors tracking-wide">
                    098427 66090
                  </a>
                  <p className="text-slate-400 text-xs mt-1">Tap to call - available during clinic hours</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-5 h-5 text-teal-500" />
                <h3 className="text-[#1E293B] font-bold text-lg">Clinic Hours</h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: 'Mon – Sat (Morning)', time: '9:00 AM – 1:00 PM', active: true },
                  { day: 'Mon – Sat (Evening)', time: '4:00 PM – 8:00 PM', active: true },
                  { day: 'Sunday', time: 'By Appointment Only', active: false },
                ].map(({ day, time, active }) => (
                  <div key={day} className="flex justify-between items-center py-2.5 border-b border-slate-50 last:border-0">
                    <span className="text-slate-600 text-sm">{day}</span>
                    <span className={`text-sm font-semibold ${active ? 'text-teal-600' : 'text-rose-500'}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>


          </div>

          {/* Right: Map */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg flex flex-col">
            <iframe
              title="M.S.R Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.18!2d78.1475393!3d11.6634721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf16b2517568f%3A0x5e6d0215e50b1f6f!2sM.S.R%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full flex-1 min-h-[380px]"
              style={{ border: 0, filter: 'saturate(0.85) contrast(1.05)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>
        </div>


      </div>
    </section>
  )
}
