import { useState } from 'react'
import { Sparkles, Activity, Bug, Footprints, Droplets, CalendarCheck } from 'lucide-react'
import bgImage from '../assets/clinic_interior_bg.jpg'

const categories = [
  {
    title: 'Chronic & Allergic Conditions',
    icon: Activity,
    items: ['Psoriasis', 'Eczema', 'Tinea Versicolor', 'Urticaria (Hives)', 'Skin Itching & Rashes', 'Diabetic Skin Diseases']
  },
  {
    title: 'Face & Pigmentation',
    icon: Droplets,
    items: ['Pimples & Acne', 'Melasma', 'Vitiligo (White Patches)', 'Pigmentation & Dark Spots']
  },
  {
    title: 'Skin Infections',
    icon: Bug,
    items: ['Ringworm', 'Fungal Nail Infection', 'Athlete\'s Foot', 'Scabies & Itch', 'Herpes Zoster (Shingles)', 'Warts']
  },
  {
    title: 'Hair & Scalp Care',
    icon: Sparkles,
    items: ['Hair Fall', 'Dandruff', 'Alopecia Areata', 'Premature Grey Hair', 'Lice Infestation']
  },
  {
    title: 'Foot & General Health',
    icon: Footprints,
    items: ['Corn Foot', 'Fissure Feet', 'Dry Skin', 'Sun-Induced Diseases', 'Sexually Transmitted Diseases']
  }
]

export default function ConditionsTreated() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="relative py-12 lg:py-20 flex items-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="Clinic Interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0F172A]/85 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Side: Headings & Tabs */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Find the Right <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Care for You</span>
            </h2>
            <p className="text-slate-300 text-base mb-6 leading-relaxed max-w-md">
              Not sure where to start? Select your primary concern and our system will recommend the best specialist care for your needs.
            </p>

            {/* Vertical Tabs */}
            <div className="flex flex-col gap-2.5">
              {categories.map((cat, idx) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center justify-between w-full px-5 py-3 rounded-xl transition-all duration-300 border ${
                    activeTab === idx
                      ? 'bg-teal-500/20 border-teal-500/50 shadow-[0_0_20px_rgba(20,184,166,0.15)]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <span className={`font-semibold text-base sm:text-lg ${activeTab === idx ? 'text-teal-400' : 'text-slate-300'}`}>
                    {cat.title}
                  </span>
                  {activeTab === idx && (
                    <div className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.8)]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Glass Card Details */}
          <div className="lg:col-span-7 lg:pl-10 mt-6 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
              {/* Abstract decorative glow inside card */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-all duration-500 group-hover:bg-emerald-500/20" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Dynamic Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-white/10 flex items-center justify-center mb-5 shadow-xl">
                  {(() => {
                    const Icon = categories[activeTab].icon
                    return <Icon className="w-7 h-7 text-white" />
                  })()}
                </div>

                {/* Dynamic Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300 mb-4">
                  {categories[activeTab].title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                  Based on your concerns, we recommend a consultation with our Specialist for a customized treatment ritual. We treat the following conditions:
                </p>

                {/* Condition Pills */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {categories[activeTab].items.map(item => (
                    <span 
                      key={item} 
                      className="inline-flex items-center bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium hover:bg-white/20 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="#appointment"
                  className="btn-shimmer bg-teal-500 hover:bg-teal-400 text-white font-bold text-base px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-xl shadow-teal-500/20"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Book Consultation
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
