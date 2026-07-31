import { Star, ShieldCheck, Rainbow, Clock } from 'lucide-react'

const badges = [
  {
    icon: Star,
    title: '4.8 Star Rated',
    subtitle: '160+ Verified Google Reviews',
    color: 'from-amber-500/20 to-amber-600/10',
    border: 'border-amber-500/20',
    iconColor: 'text-amber-400',
  },
  {
    icon: ShieldCheck,
    title: '100% Confidential',
    subtitle: 'All records strictly private',
    color: 'from-teal-500/20 to-teal-600/10',
    border: 'border-teal-500/20',
    iconColor: 'text-teal-400',
  },
  {
    icon: Rainbow,
    title: 'Safe Space',
    subtitle: 'Inclusive & affirming care',
    color: 'from-violet-500/20 to-indigo-600/10',
    border: 'border-violet-500/20',
    iconColor: 'text-violet-400',
  },
  {
    icon: Clock,
    title: 'Flexible Timings',
    subtitle: 'Mon - Sat: 9am-1pm & 4pm-8pm',
    color: 'from-sky-500/20 to-blue-600/10',
    border: 'border-sky-500/20',
    iconColor: 'text-sky-400',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-[#0F172A] py-8 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map(({ icon: Icon, title, subtitle, color, border, iconColor }) => (
            <div
              key={title}
              className={`bg-gradient-to-br ${color} border ${border} rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-3 hover:scale-105 transition-transform duration-300`}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} strokeWidth={1.8} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-xs sm:text-sm leading-tight truncate sm:whitespace-normal">{title}</div>
                <div className="text-slate-400 text-[10px] sm:text-xs mt-1 leading-tight line-clamp-2 sm:line-clamp-none">{subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
