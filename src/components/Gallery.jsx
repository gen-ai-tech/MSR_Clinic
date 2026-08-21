import React from 'react'

const galleryItems = [
  {
    title: 'Reception & Entrance',
    description: 'Warm and welcoming entry area maintaining privacy guidelines.',
    // You can adjust these image paths if they differ
    image: '/clinic-hero-2.png', 
  },
  {
    title: 'Consultation Room',
    description: 'Private workspace for one-on-one medical consulting.',
    image: '/clinic-office.jpg',
  },
  {
    title: 'Treatment Guidelines',
    description: 'Detailed board listing all mental, sexual, and skin wellness programs.',
    image: '/treatment-board.jpg',
  },
  {
    title: 'Clinical References',
    description: 'Dermatology case board illustrating patient recovery paths.',
    image: '/results-board.jpg',
  }
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-10 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest bg-teal-50 border border-teal-200 px-4 py-2 rounded-full mb-4">
            Clinic Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Clinic Gallery
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A brief tour of our consultation space, registry guides, and clinical reference boards in Salem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-48 sm:h-56 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback just in case the image isn't found
                    e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
                  }}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[#1E293B] font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
