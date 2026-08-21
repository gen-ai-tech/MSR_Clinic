import { useState } from 'react'
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    id: 'skin-clinic',
    image: '/images/skin_clinic.jpg',
    title: 'Skin Clinic',
    tagline: 'Dermatology Care',
    description: 'Advanced dermatological treatments for all skin conditions, delivered with expertise and personalised care.',
    color: 'from-sky-500 to-cyan-600',
    textColor: 'text-sky-600',
  },
  {
    id: 'venereal-disease',
    image: 'src/assets/venerealdisease.png',
    title: 'Venereal Disease Clinic',
    tagline: 'Confidential STD Care',
    description: 'Discreet, professional diagnosis and treatment of sexually transmitted infections in a safe, judgment free environment.',
    color: 'from-rose-500 to-pink-600',
    textColor: 'text-rose-600',
  },
  {
    id: 'sexology',
    image: '/images/sexology.jpg',
    title: 'Sexology Clinic',
    tagline: 'Sexual Wellness',
    description: 'Evidence based sexual health consultations for both men and women, a safe private space for sensitive concerns.',
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-600',
  },
  {
    id: 'psychiatry',
    image: 'src/assets/psychiatrist.png',
    title: 'Psychiatrist Clinic',
    tagline: 'Mental Wellness',
    description: 'Holistic psychiatric care combining medication, therapy, and counseling, because mental health is health.',
    color: 'from-teal-500 to-teal-700',
    textColor: 'text-teal-600',
  },
  {
    id: 'deaddiction',
    image: 'src/assets/deaddiction.png',
    title: 'Alcohol De-Addiction',
    tagline: 'Recovery & Rehab',
    description: 'Medically supervised recovery programmes treating addiction with compassion, dignity and evidence based support.',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-600',
  },
]

function ServiceCard({ service, onBooking, isOpen, onToggle }) {
  return (
    <motion.div 
      layout
      onClick={!isOpen ? onToggle : undefined}
      className={`relative overflow-hidden w-full ${isOpen ? 'rounded-[2rem] shadow-xl' : 'rounded-full bg-white border border-slate-100 shadow-sm hover:shadow-md cursor-pointer'}`}
      initial={false}
      animate={{ height: isOpen ? 420 : 80 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
    >
      {/* Background Image (only visible when open) */}
      <AnimatePresence>
        {isOpen && (
           <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             exit={{ opacity: 0 }}
             className="absolute inset-0 z-0"
             transition={{ duration: 0.3 }}
           >
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />
              
              {/* Close Button */}
              <div 
                className="absolute top-5 right-5 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 z-20" 
                onClick={(e) => { e.stopPropagation(); onToggle(); }}
              >
                <ChevronUp className="w-5 h-5 text-white" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 flex flex-col justify-end h-full">
                <div>
                  <span className={`inline-block px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold mb-3 uppercase tracking-wider bg-white ${service.textColor}`}>
                    {service.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-200 text-sm mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  <button
                    onClick={(e) => { e.stopPropagation(); onBooking(service.id) }}
                    className={`px-6 py-3 flex items-center justify-center gap-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${service.color} hover:shadow-lg transition-all active:scale-95 w-max`}
                  >
                    Book Appointment
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
           </motion.div>
        )}
      </AnimatePresence>

      {/* Closed State Content */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center p-2.5 sm:p-3 z-10"
            transition={{ duration: 0.2 }}
          >
            <img src={service.image} alt={service.title} className="w-14 h-14 sm:w-14 sm:h-14 rounded-full object-cover shadow-sm flex-shrink-0" />
            
            <div className="ml-4 flex-1 min-w-0">
              <h3 className="text-[#1E293B] font-bold text-sm sm:text-base truncate">{service.title}</h3>
              <p className={`text-[11px] sm:text-xs font-semibold ${service.textColor} truncate mt-0.5`}>{service.tagline}</p>
            </div>

            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
              <ChevronDown className={`w-5 h-5 ${service.textColor}`} strokeWidth={2.5} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ServicesGrid({ onBooking }) {
  const [activeCard, setActiveCard] = useState(null)

  const handleToggle = (id) => {
    setActiveCard((prev) => (prev === id ? null : id))
  }

  return (
    <section id="services" className="py-10 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest bg-teal-50 border border-teal-200 px-4 py-2 rounded-full mb-5">
            Our Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
            Specialized{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
              Care Hubs
            </span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Expert medical care across five critical specialties always delivered with compassion, clinical excellence, and absolute discretion.
          </p>
        </div>

        {/* Interactive Accordion Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              service={s}
              onBooking={onBooking}
              isOpen={activeCard === s.id}
              onToggle={() => handleToggle(s.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
