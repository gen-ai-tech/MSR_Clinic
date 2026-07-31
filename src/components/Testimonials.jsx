import { Quote } from 'lucide-react'

const reviews = [
  {
    initials: 'B',
    name: 'Bharathi Vidhya R',
    dept: 'Clinic Visit',
    text: 'Dr. S. Ramesh is incredible.For his excellent diagnosis, treatment, curiosity, investigative mind and ability to connect, I would highly recommend his clinic to anyone.',
    rating: 5,
  },
  {
    initials: 'S',
    name: 'Sai Sahe',
    dept: 'Consulting and Treatment',
    text: 'I am first time visit the hospital my own experience is first visit best consulting and treatment , medicine best results',
    rating: 5,
  },
  {
    initials: 'P',
    name: 'Priya 123',
    dept: 'Hair Treatment',
    text: 'Hiii, I took hair treatment in salem MSR CLINIC. Visible results in short period. Thank you Dr.Ramesh kanna sir.nice results',
    rating: 5,
  },
  {
    initials: 'A',
    name: 'Ammu Ammu',
    dept: 'Clinic Visit',
    text: 'Very good clinic, doctor so humble and very kind person, clinic maintain very neet and clean, also treatment was so ',
    rating: 5,
  },
  {
    initials: 'P',
    name: 'Poongodi Palanisamy',
    dept: 'Skin Treatment',
    text: 'I have undertaken treatment for skin. Really Very effective and feeling good. Thanks a lot sir',
    rating: 5,
  },
  {
    initials: 'B',
    name: 'Bharathi Vidhya',
    dept: 'Clinic Visit',
    text: 'Dr. S. Ramesh is incredible.For his excellent diagnosis, treatment, curiosity, investigative mind and ability to connect, I would highly recommend his clinic to anyone.',
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

        {/* Cards - 1 col mobile, 2 col tablet, 3 col desktop */}
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
