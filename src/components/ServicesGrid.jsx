import { useState, useCallback } from 'react'
import {
  Microscope, Shield, HeartHandshake, Brain, Leaf, ArrowRight, ChevronDown
} from 'lucide-react'

const services = [
  {
    id: 'skin-clinic',
    icon: Microscope,
    title: 'Skin Clinic',
    tagline: 'Dermatology Care',
    description: 'Advanced dermatological treatments for all skin conditions, delivered with expertise and personalised care.',
    color: 'from-sky-500 to-cyan-600',
    lightColor: 'from-sky-50 to-cyan-50',
    borderColor: 'border-sky-200',
    textColor: 'text-sky-600',
    bgAccent: 'bg-sky-500',
    gradientAccent: 'bg-gradient-to-r from-sky-500 to-cyan-600',
    conditions: [
      'Skin allergies',
      'Acne & pimples',
      'Eczema',
      'Psoriasis',
      'Fungal infections',
      'Hair & scalp disorders',
      'Pigmentation treatment',
    ],
  },
  {
    id: 'venereal-disease',
    icon: Shield,
    title: 'Venereal Disease Clinic',
    tagline: 'Confidential STD Care',
    description: 'Discreet, professional diagnosis and treatment of sexually transmitted infections in a safe, judgment free environment.',
    color: 'from-rose-500 to-pink-600',
    lightColor: 'from-rose-50 to-pink-50',
    borderColor: 'border-rose-200',
    textColor: 'text-rose-600',
    bgAccent: 'bg-rose-500',
    gradientAccent: 'bg-gradient-to-r from-rose-500 to-pink-600',
    conditions: [
      'STD diagnosis',
      'STD treatment',
      'Infection management',
      'Confidential consultation',
    ],
  },
  {
    id: 'sexology',
    icon: HeartHandshake,
    title: 'Sexology Clinic',
    tagline: 'Sexual Wellness',
    description: 'Evidence based sexual health consultations for both men and women, a safe private space for sensitive concerns.',
    color: 'from-violet-500 to-purple-600',
    lightColor: 'from-violet-50 to-purple-50',
    borderColor: 'border-violet-200',
    textColor: 'text-violet-600',
    bgAccent: 'bg-violet-500',
    gradientAccent: 'bg-gradient-to-r from-violet-500 to-purple-600',
    conditions: [
      'Male sexual health',
      'Female sexual health',
      'Erectile dysfunction',
      'Premature ejaculation',
      'Low libido',
      'Marital counseling',
    ],
  },
  {
    id: 'psychiatry',
    icon: Brain,
    title: 'Psychiatrist Clinic',
    tagline: 'Mental Wellness',
    description: 'Holistic psychiatric care combining medication, therapy, and counseling, because mental health is health.',
    color: 'from-teal-500 to-teal-700',
    lightColor: 'from-teal-50 to-cyan-50',
    borderColor: 'border-teal-200',
    textColor: 'text-teal-600',
    bgAccent: 'bg-teal-500',
    gradientAccent: 'bg-gradient-to-r from-teal-500 to-teal-700',
    conditions: [
      'Depression',
      'Anxiety',
      'Stress management',
      'Panic attacks',
      'OCD',
      'Bipolar disorder',
      'Sleep disorders',
    ],
  },
  {
    id: 'deaddiction',
    icon: Leaf,
    title: 'Alcohol De-Addiction Centre',
    tagline: 'Recovery & Rehabilitation',
    description: 'Medically supervised recovery programmes treating addiction with compassion, dignity and evidence based support.',
    color: 'from-emerald-500 to-green-600',
    lightColor: 'from-emerald-50 to-green-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600',
    bgAccent: 'bg-emerald-500',
    gradientAccent: 'bg-gradient-to-r from-emerald-500 to-green-600',
    conditions: [
      'Alcohol addiction treatment',
      'Counseling',
      'Rehabilitation support',
      'Family counseling',
      'Relapse prevention',
    ],
  },
]

/* ─── Mobile Accordion Card ─── */
function MobileCard({ service, onBooking, isOpen, onToggle }) {
  const Icon = service.icon
  return (
    <div className={`bg-white rounded-2xl border overflow-hidden shadow-sm transition-all duration-300 ${isOpen ? `border-2 ${service.borderColor} shadow-md` : 'border-slate-200'}`}>
      {/* Colored top strip */}
      <div className={`h-1 w-full bg-gradient-to-r ${service.color}`} />

      {/* Header row — always visible */}
      <div
        className="flex items-center gap-3 px-4 py-3 cursor-pointer select-none"
        onTouchStart={(e) => { e.preventDefault(); onToggle() }}
        onClick={onToggle}
      >
        {/* Icon */}
        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md flex-shrink-0`}>
          <Icon className="w-4 h-4 text-white" strokeWidth={1.8} />
        </div>

        {/* Title + tagline */}
        <div className="flex-1 min-w-0">
          <div className="text-[#1E293B] font-bold text-sm leading-tight truncate">{service.title}</div>
          <div className={`text-[10px] font-semibold ${service.textColor} mt-0.5`}>{service.tagline}</div>
        </div>

        {/* Chevron */}
        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? `${service.gradientAccent} shadow-sm` : 'bg-slate-100'}`}>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-slate-500'}`}
            strokeWidth={2.5}
          />
        </div>
      </div>

      {/* Expandable content */}
      <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-3 pt-0">
          {/* Description */}
          <p className="text-slate-500 text-xs leading-relaxed mb-2 border-t border-slate-100 pt-2">
            {service.description}
          </p>

          {/* Conditions */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 mb-3">
            {service.conditions.map((c) => (
              <div key={c} className="flex items-center gap-1.5 text-slate-600 text-[11px]">
                <div className={`w-1.5 h-1.5 rounded-full ${service.bgAccent} flex-shrink-0`} />
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* Book button — text width, centered */}
        <div className="flex justify-center pb-3">
          <button
            onClick={(e) => { e.stopPropagation(); onBooking(service.id) }}
            className={`w-max flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${service.color} shadow-md active:scale-95 transition-all duration-200`}
          >
            Book Appointment
            <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
          </button>
        </div>
      </div>
    </div>
  )
}

/* ─── Desktop Hover Card ─── */
function DesktopCard({ service, onBooking, isActive, onHover, onLeave }) {
  const Icon = service.icon
  return (
    <div
      className={`relative bg-white rounded-3xl border-2 shadow-sm transition-all duration-300 cursor-pointer overflow-hidden group flex flex-col h-full
        ${isActive ? 'border-teal-400 shadow-2xl shadow-teal-100 scale-[1.02]' : 'border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100'}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
            <Icon className="w-7 h-7 text-white" strokeWidth={1.6} />
          </div>
          <span className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-br ${service.lightColor} border ${service.borderColor} ${service.textColor} ml-2 text-center leading-tight`}>
            {service.tagline}
          </span>
        </div>

        <h3 className="text-[#1E293B] font-bold text-xl mb-2 leading-tight">{service.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.description}</p>

        <div className="space-y-2 mb-6 flex-1">
          {service.conditions.map((c) => (
            <div key={c} className="flex items-center gap-2.5 text-slate-600 text-sm">
              <div className={`w-1.5 h-1.5 rounded-full ${service.bgAccent} flex-shrink-0`} />
              {c}
            </div>
          ))}
        </div>

        <button
          onClick={() => onBooking(service.id)}
          className={`w-max mx-auto px-6 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r ${service.color} shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 mt-auto flex-shrink-0 whitespace-nowrap`}
        >
          Book Appointment
          <ArrowRight className="w-4 h-4 flex-shrink-0" />
        </button>
      </div>
    </div>
  )
}

export default function ServicesGrid({ onBooking }) {
  const [activeCard, setActiveCard] = useState(null)
  const [openMobile, setOpenMobile] = useState(null)

  const handleTap = useCallback((id) => {
    setOpenMobile((prev) => (prev === id ? null : id))
  }, [])

  return (
    <section id="services" className="py-6 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-14">
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
            Expert medical care across five critical specialties always delivered with compassion, clinical excellence, and absolute discretion.
          </p>
        </div>

        {/* ── Mobile Layout (accordion list) ── */}
        <div className="flex flex-col gap-3 sm:hidden">
          {services.map((s) => (
            <MobileCard
              key={s.id}
              service={s}
              onBooking={onBooking}
              isOpen={openMobile === s.id}
              onToggle={() => handleTap(s.id)}
            />
          ))}
        </div>

        {/* ── Desktop Layout (grid cards) ── */}
        <div className="hidden sm:block">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-6">
            {services.slice(0, 3).map((s) => (
              <DesktopCard
                key={s.id}
                service={s}
                onBooking={onBooking}
                isActive={activeCard === s.id}
                onHover={() => setActiveCard(s.id)}
                onLeave={() => setActiveCard(null)}
              />
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-6 items-stretch max-w-2xl lg:max-w-3xl mx-auto">
            {services.slice(3).map((s) => (
              <DesktopCard
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

      </div>
    </section>
  )
}
