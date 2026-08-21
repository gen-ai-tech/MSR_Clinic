import { Lock, FileX, EyeOff, UserCheck, Scale, HeartHandshake } from 'lucide-react'

const protocols = [
  {
    icon: Lock,
    title: 'Private Consultation Rooms',
    description: 'Every session conducted in fully soundproofed, private rooms. Your conversation stays between you and your doctor - always.',
  },
  {
    icon: FileX,
    title: 'Secure Medical Records',
    description: 'All medical records are stored in encrypted, access-controlled systems. Never shared with third parties without your explicit consent.',
  },
  {
    icon: EyeOff,
    title: 'Discreet Appointment Scheduling',
    description: 'Book appointments with zero waiting-room visibility. We offer staggered, private entry slots for sensitive consultations.',
  },
  {
    icon: UserCheck,
    title: 'Staff Confidentiality Training',
    description: 'Every team member undergoes rigorous patient confidentiality training. Our staff is bound by strict professional ethics codes.',
  },
  {
    icon: Scale,
    title: 'No Judgment - Ever',
    description: 'We treat every patient with unconditional positive regard. Your identity, orientation, choices, and history are never judged here.',
  },
  {
    icon: HeartHandshake,
    title: 'Affirming Practice',
    description: 'We are an open, safe and affirming clinic. Our doctors are trained in gender-sensitive and culturally competent care.',
  },
]


export default function PrivacyTrust() {
  return (
    <section id="about" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-widest bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full mb-5">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
            Confidentiality{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
              First.
            </span>{' '}
            Always.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            We understand that the courage to seek help is profound. Our entire clinic infrastructure is designed to protect your privacy and dignity at every step.
          </p>
        </div>

        {/* Unique 3-column layout: Protocols - Doctor - Protocols */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 items-center mb-20 max-w-6xl mx-auto">
          
          {/* Left Column: Protocols 1-3 */}
          <div className="space-y-8 order-2 lg:order-1">
            {protocols.slice(0, 3).map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4 lg:flex-row-reverse text-left lg:text-right group">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-[#1E293B] font-bold text-base mb-1.5">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Doctor Image (Reduced size, unique shape) */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-[350px] lg:w-[280px] lg:h-[420px] rounded-full overflow-hidden shadow-2xl shadow-teal-900/20 group border-8 border-white">
              <img
                src="/doctor.jpg"
                alt="Dr. Ramesh Kanna - Chief Consultant Doctor"
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />
              
              <div className="absolute bottom-8 left-0 right-0 px-6 text-center">
                <div className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-bold tracking-widest uppercase mb-2 backdrop-blur-sm">
                  Chief Physician
                </div>
                <h3 className="text-white text-xl font-bold mb-0.5">Dr. Ramesh Kanna</h3>
                <p className="text-teal-400 font-semibold text-[11px]">B.S.M.S., M.D.(Acu)</p>
              </div>
            </div>
          </div>

          {/* Right Column: Protocols 4-6 */}
          <div className="space-y-8 order-3 lg:order-3">
            {protocols.slice(3, 6).map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4 text-left group">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-[#1E293B] font-bold text-base mb-1.5">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>



      </div>
    </section>
  )
}
