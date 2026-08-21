import { ShieldCheck } from 'lucide-react'

export default function CommitmentBanner() {
  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-[2rem] bg-[#0F172A] overflow-hidden px-6 py-12 sm:py-16 sm:px-12 text-center shadow-2xl">
          {/* Subtle dot pattern background */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #14b8a6 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          
          {/* Glowing orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[200px] bg-teal-500/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Our Promise</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
              Strictly <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Confidential.</span>
            </h3>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10">
              Everything you share with us stays strictly within these walls. Your visit is protected by medical professional confidentiality laws and our own comprehensive privacy protocols.
            </p>
          </div>

          {/* Stats - Pure typography layout, ZERO CARDS */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 max-w-4xl mx-auto border-t border-b sm:border-b-0 sm:border-y border-white/10 py-6 sm:py-8">
            
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2 tracking-tighter">
                100<span className="text-2xl sm:text-3xl">%</span>
              </span>
              <span className="text-teal-400 font-semibold tracking-widest uppercase text-[10px] sm:text-xs">Private Records</span>
            </div>

            <div className="flex flex-col items-center justify-center sm:border-x border-white/10">
              <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2 tracking-tighter">
                0
              </span>
              <span className="text-emerald-400 font-semibold tracking-widest uppercase text-[10px] sm:text-xs">Data Shared</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2 tracking-tighter">
                160<span className="text-2xl sm:text-3xl">+</span>
              </span>
              <span className="text-sky-400 font-semibold tracking-widest uppercase text-[10px] sm:text-xs">Trusted Patients</span>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  )
}
