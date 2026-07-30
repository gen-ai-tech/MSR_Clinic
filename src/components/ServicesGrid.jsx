import { useState } from 'react'
import {
  Microscope, Brain, HeartHandshake, Leaf, ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 'dermatology',
    icon: Microscope,
    title: 'Dermatology & Venereology',
    tagline: 'Skin & Venereal Health',
    description: 'Comprehensive skin care and venereal health services - delivered in a confidential, judgment-free clinic environment.',
    color: 'from-sky-500 to-cyan-600',
    lightColor: 'from-sky-50 to-cyan-50',
    borderColor: 'border-sky-200',
    textColor: 'text-sky-600',
    bgAccent: 'bg-sky-500',
    conditions: [
      'Acne, Eczema & Psoriasis',
      'STI / STD Screening & Treatment',
      'Fungal & Bacterial Infections',
      'Hair Loss & Scalp Disorders',
      'Skin Allergies & Dermatitis',
      'Wart & Mole Removal',
    ],
  },
  {
    id: 'sexology',
    icon: HeartHandshake,
    title: 'Advanced Sexology',
    tagline: 'Confidential Sexual Wellness',
    description: 'Discreet, evidence-based sexual health consultations. A safe, private space to address sensitive concerns with expert clinical guidance.',
    color: 'from-violet-500 to-purple-600',
    lightColor: 'from-violet-50 to-purple-50',
    borderColor: 'border-violet-200',
    textColor: 'text-violet-600',
    bgAccent: 'bg-violet-500',
    conditions: [
      'Erectile Dysfunction',
      'Premature Ejaculation',
      'Low Libido & Testosterone Issues',
      'Sexual Anxiety & Counseling',
      'Hormone & Reproductive Health',
      'Inclusive Sexual Health Care',
    ],
  },
  {
    id: 'deaddiction',
    icon: Leaf,
    title: 'Alcohol De-Addiction',
    tagline: 'Recovery & Rehabilitation',
    description: 'Medically supervised detox and holistic recovery programmes. Treating addiction as a medical condition - with compassion, not shame.',
    color: 'from-emerald-500 to-green-600',
    lightColor: 'from-emerald-50 to-green-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600',
    bgAccent: 'bg-emerald-500',
    conditions: [
      'Medical Alcohol Detoxification',
      'Substance Use Counseling',
      'Nicotine & Tobacco De-Addiction',
      'Relapse Prevention Planning',
      'Family Support & Guidance',
      'Motivational Interviewing',
    ],
  },
  {
    id: 'psychiatry',
    icon: Brain,
    title: 'Psychiatry & Mental Health',
    tagline: 'Compassionate Mental Wellness',
    description: 'Holistic psychiatric care combining medication, therapy, and counseling - because mental health is health.',
    color: 'from-teal-500 to-teal-700',
    lightColor: 'from-teal-50 to-cyan-50',
    borderColor: 'border-teal-200',
    textColor: 'text-teal-600',
    bgAccent: 'bg-teal-500',
    conditions: [
      'Depression & Anxiety Disorders',
      'Bipolar & Mood Disorders',
      'OCD & PTSD Treatment',
      'Schizophrenia Management',
      'Sleep Disorders & Insomnia',
      'Stress & Burnout Recovery',
    ],
  },
]

function ServiceCard({ service, onBooking, isActive, onHover, onLeave }) {
  const Icon = service.icon

  return (
    <div
      className={`relative bg-white rounded-3xl border-2 shadow-sm transition-all duration-300 cursor-pointer overflow-hidden group flex flex-col h-full
        ${isActive ? 'border-teal-400 shadow-2xl shadow-teal-100 scale-[1.02]' : 'border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100'}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Top gradient strip */}
      <div className={`h-1 w-full bg-gradient-to-r ${service.color} flex-shrink-0`} />

      <div className="p-4 sm:p-7 flex flex-col flex-1">
        {/* Icon + Tagline */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
            <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" strokeWidth={1.6} />
          </div>
          <span className={`text-[10px] sm:text-xs font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-gradient-to-br ${service.lightColor} border ${service.borderColor} ${service.textColor} ml-2 text-center leading-tight`}>
            {service.tagline}
          </span>
        </div>

        <h3 className="text-[#1E293B] font-bold text-base sm:text-xl mb-1.5 sm:mb-2 leading-tight">{service.title}</h3>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">{service.description}</p>

        {/* Conditions list — fixed 6 items per card */}
        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 flex-1">
          {service.conditions.map((c) => (
            <div key={c} className="flex items-center gap-2 sm:gap-2.5 text-slate-600 text-xs sm:text-sm">
              <div className={`w-1.5 h-1.5 rounded-full ${service.bgAccent} flex-shrink-0`} />
              {c}
            </div>
          ))}
        </div>

        {/* CTA — always at bottom */}
        <button
          onClick={() => onBooking(service.id)}
          className={`w-max mx-auto px-6 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 rounded-2xl text-[11px] sm:text-sm font-semibold text-white bg-gradient-to-r ${service.color} shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 mt-auto flex-shrink-0 whitespace-nowrap`}
        >
          Book Appointment
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
        </button>
      </div>
    </div>
  )
}

export default function ServicesGrid({ onBooking }) {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <section id="services" className="py-10 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest bg-teal-50 border border-teal-200 px-4 py-2 rounded-full mb-5">
            Our Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
            Specialized{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
              Care Hubs
            </span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Expert medical care across four critical specialties - always delivered with compassion, clinical excellence, and absolute discretion.
          </p>
        </div>

        {/* Cards Grid — items-stretch ensures equal height */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-6 items-stretch">
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              service={s}
              onBooking={onBooking}
              isActive={activeCard === s.id}
              onHover={() => setActiveCard(s.id)}
              onLeave={() => setActiveCard(null)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
