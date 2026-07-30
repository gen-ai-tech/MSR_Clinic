import { Quote } from 'lucide-react'

const reviews = [
  {
    initials: 'A',
    dept: 'Sexology Consultation',
    text: 'The most understanding doctor I have ever visited. My privacy concerns were addressed immediately and I felt completely at ease. The confidentiality here is real - I cannot recommend them enough.',
    rating: 5,
  },
  {
    initials: 'R',
    name: 'Rajan M.',
    dept: 'De-Addiction Programme',
    text: 'My family member struggled with alcohol dependency for years. The doctor treated us with incredible dignity and the guidance was outstanding. The recovery programme was thorough.',
    rating: 5,
  },
  {
    initials: 'P',
    name: 'Priya S.',
    dept: 'Psychiatry & Mental Health',
    text: 'I battled severe anxiety for two years before coming here. This clinic changed my life. The psychiatrist is extremely knowledgeable - it truly felt like a safe space to open up.',
    rating: 5,
  },
  {
    initials: 'K',
    name: 'Karthi V.',
    dept: 'Dermatology & Venereology',
    text: 'Visited for a sensitive skin condition. The doctor was thorough, professional, and incredibly discreet. No awkward questions, no judgment. Will always return here.',
    rating: 5,
  },
  {
    initials: 'S',
    dept: 'Anonymous',
    text: 'Finding a doctor who truly understood my needs was difficult until I found M.S.R Clinic. I was treated with such respect and warmth. This is genuinely a safe space.',
    rating: 5,
  },
  {
    initials: 'M',
    name: 'Murugan T.',
    dept: 'Sexology',
    text: 'I had been suffering in silence for 3 years due to the stigma. Coming here was the best decision of my life. The doctor was so calm and professional. Issues resolved in just 2 visits.',
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < count ? 'text-amber-400' : 'text-slate-200'}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-10 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-14">
          <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-5">
            Patient Stories
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 sm:mb-4">
            Real People.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
              Real Recovery.
            </span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-lg max-w-xl mx-auto">
            Over 160 verified patient reviews on Google. A few stories that remind us why we do this work.
          </p>
        </div>

        {/* Cards — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {reviews.map(({ initials, name, dept, text, rating }, idx) => (
            <div
              key={idx}
              className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-7 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex flex-col"
            >
              {/* Stars + quote */}
              <div className="flex items-start gap-2 mb-3 sm:mb-4">
                <Stars count={rating} />
                <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300 ml-auto flex-shrink-0 mt-0.5" />
              </div>

              {/* Review text */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic flex-1 mb-4 sm:mb-5">
                &ldquo;{text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-100">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                  {initials}
                </div>
                <div>
                  <div className="text-[#1E293B] text-xs sm:text-sm font-semibold">{name || 'Anonymous Patient'}</div>
                  <div className="text-slate-400 text-[10px] sm:text-xs">{dept}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
