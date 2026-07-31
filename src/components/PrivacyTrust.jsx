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

const clinicPhotos = [
  {
    src: '/clinic-hero-2.png',
    title: 'Reception & Entrance',
    description: 'Warm and welcoming entry area maintaining privacy guidelines.',
  },
  {
    src: '/clinic-office.jpg',
    title: 'Consultation Room',
    description: 'Private workspace for one-on-one medical consulting.',
  },
  {
    src: '/treatment-board.jpg',
    title: 'Treatment Guidelines',
    description: 'Detailed board listing all mental, sexual, and skin wellness programs.',
  },
  {
    src: '/results-board.jpg',
    title: 'Clinical References',
    description: 'Dermatology case board illustrating patient recovery paths.',
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

        {/* Two-column: Doctor Image left + Cards right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-stretch">

          {/* Left: Chief Physician Card */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 h-[520px] w-full max-w-md mx-auto lg:mx-0 flex flex-col justify-end group bg-[#0F172A]">
            <img
              src="/doctor.jpg"
              alt="Dr. Ramesh Kanna - Chief Consultant Doctor at M.S.R Clinic"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/40 to-transparent" />

            {/* Doctor Details */}
            <div className="relative z-10 p-6 md:p-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-bold tracking-widest uppercase mb-3 backdrop-blur-sm">
                Chief Physician
              </div>
              <h3 className="text-white text-2xl font-bold mb-1">Dr. Ramesh Kanna</h3>
              <p className="text-teal-400 font-semibold text-sm mb-1">B.S.M.S., M.D.(Acu)</p>
              <p className="text-slate-300 text-xs mb-2 leading-relaxed">Consultant Physician in Indian Medicine</p>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Expert specialty consultation with completely private, judgment free clinical guidance.
              </p>
            </div>
          </div>

          {/* Right: Protocol grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 lg:gap-5">
            {protocols.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group bg-white hover:bg-gradient-to-br hover:from-teal-50/70 hover:to-emerald-50/50 border border-slate-100 hover:border-teal-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-teal-50 flex flex-col justify-center"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-md shadow-teal-200 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mb-3">
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-[#1E293B] font-bold text-sm mb-1 leading-tight">{title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Clinic Gallery Container */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest bg-teal-50 border border-teal-200 px-4 py-2 rounded-full mb-4">
              clinic gallery
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
              Clinic Gallery
            </h3>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              A brief tour of our consultation space, registry guides, and clinical reference boards in Salem.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicPhotos.map((photo, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md hover:border-slate-200 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-[#1E293B] text-sm mb-1">{photo.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width guarantee banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#0d2f20] to-[#0F172A] rounded-3xl p-10 md:p-14 border border-teal-500/15">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-teal-500/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[150px] bg-emerald-500/10 blur-3xl rounded-full" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-teal-400" />
                </div>
                <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Our Commitment to You</span>
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Everything you share with us stays<br className="hidden md:block" />{' '}
                <span className="text-teal-400">strictly within these walls.</span>
              </h3>
              <p className="text-slate-300 text-base leading-relaxed max-w-xl mx-auto lg:mx-0 text-justify">
                Whether you're seeking help for addiction, exploring sexual health questions, or addressing mental health concerns - your visit is protected by medical professional confidentiality laws and our own comprehensive privacy protocols.
              </p>
            </div>

            {/* Stats column */}
            <div className="flex flex-row lg:flex-col gap-4 flex-shrink-0">
              {[
                { stat: '100%', label: 'Private Records' },
                { stat: '0', label: 'Data Shared' },
                { stat: '160+', label: 'Trusted Patients' },
              ].map(({ stat, label }) => (
                <div key={label} className="glass rounded-2xl px-6 py-5 text-center min-w-[100px]">
                  <div className="text-2xl font-bold text-white">{stat}</div>
                  <div className="text-slate-400 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
