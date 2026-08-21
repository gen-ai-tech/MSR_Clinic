import { useState } from 'react'
import {
  CalendarCheck, User, SmartphoneIcon, Calendar,
  Stethoscope, StickyNote, Phone, CheckCircle2, AlertCircle,
  Loader2, MapPin, Clock
} from 'lucide-react'

const DEPARTMENTS = [
  'Dermatology & Venereology',
  'Sexology',
  'Alcohol De-Addiction',
  'Psychiatry & Mental Health',
]

const WA_BASE = 'https://wa.me/919842766090?text='

function Field({ label, icon: Icon, children, error }) {
  return (
    <div>
      <label className="block text-slate-700 text-xs font-semibold mb-1">
        {label}
      </label>
      <div
        className={`relative flex items-center border-2 rounded-xl transition-all duration-200 ${error
            ? 'border-rose-400 bg-rose-50'
            : 'border-slate-200 bg-white focus-within:border-teal-400 focus-within:shadow-sm focus-within:shadow-teal-100'
          }`}
      >
        <Icon className="w-4 h-4 text-slate-400 ml-3 flex-shrink-0" />
        {children}
      </div>
      {error && (
        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> {error}
        </p>
      )}
    </div>
  )
}

export default function BookAppointment({ onBooking }) {
  const [form, setForm] = useState({
    name: '',
    gender: '',
    phone: '',
    date: '',
    time: '',
    dept: '',
    note: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Your name is required'
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, '')))
      errs.phone = 'Enter a valid 10-digit Indian mobile number'
    if (!form.gender) errs.gender = 'Please select your gender'
    if (!form.dept) errs.dept = 'Please select a department'
    
    // Prevent past time if date is today
    if (form.date && form.time) {
      const today = new Date().toISOString().split('T')[0]
      if (form.date === today) {
        const currentTime = new Date().toTimeString().slice(0, 5)
        if (form.time < currentTime) {
          errs.time = 'Past time not allowed'
        }
      }
    }
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setSubmitting(true)
    setTimeout(() => {
      const msg = encodeURIComponent(
        `Hello M.S.R Clinic,\n\nI would like to book a confidential appointment.\n\n` +
        `Name: ${form.name}\nGender: ${form.gender}\nPhone: ${form.phone}\nDepartment: ${form.dept}\nPreferred Date: ${form.date || 'Flexible'}\nPreferred Time: ${form.time || 'Flexible'}\n` +
        `Note: ${form.note || 'None'}\n\nPlease confirm my appointment. Thank you.`
      )
      window.open(WA_BASE + msg, '_blank')
      setSubmitted(true)
      setSubmitting(false)
    }, 800)
  }

  const reset = () => {
    setForm({ name: '', gender: '', phone: '', date: '', time: '', dept: '', note: '' })
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section id="appointment" className="py-8 sm:py-16 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-teal-100/40 blur-3xl -translate-y-1/2 -translate-x-1/4" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-sky-100/30 blur-3xl translate-y-1/2 translate-x-1/4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT: BOOKING FORM */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="inline-block text-teal-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-teal-50 border border-teal-200 px-3 py-1.5 rounded-full mb-3">
                Online Booking
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">
                Book Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
                  Appointment
                </span>
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Fill in the form below and your details will be sent directly to us via WhatsApp for a quick, confidential confirmation.
              </p>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 overflow-hidden flex-1 flex flex-col">
              <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] px-5 py-4 sm:px-6 sm:py-5">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mb-2">
                  <CalendarCheck className="w-4 h-4 text-teal-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">Book a Private Consultation</h3>
                <p className="text-slate-300 text-xs">100% Confidential &middot; No Judgment</p>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center">
                {submitted ? (
                  <div className="text-center py-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-xl shadow-teal-200">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">Request Sent! 🎉</h3>
                    <p className="text-slate-500 text-xs mb-6 leading-relaxed max-w-sm mx-auto">
                      Your appointment request has been sent via WhatsApp. Our team will confirm your slot shortly. All communications are completely private.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a href="tel:9842766090" className="btn-shimmer text-white font-semibold py-2.5 px-5 rounded-xl text-xs flex items-center justify-center gap-2">
                        <Phone className="w-3.5 h-3.5" />
                        Call to Confirm
                      </a>
                      <button onClick={reset} className="border-2 border-slate-200 hover:border-teal-300 text-slate-600 hover:text-teal-600 font-semibold py-2.5 px-5 rounded-xl text-xs transition-all">
                        Book Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Your Name *" icon={User} error={errors.name}>
                        <input type="text" value={form.name} onChange={update('name')} placeholder="Full name" className="flex-1 py-2.5 pl-2.5 pr-3 bg-transparent text-slate-700 text-sm outline-none" />
                      </Field>
                      <Field label="Phone Number *" icon={SmartphoneIcon} error={errors.phone}>
                        <input type="tel" value={form.phone} onChange={update('phone')} placeholder="10-digit number" maxLength={10} className="flex-1 py-2.5 pl-2.5 pr-3 bg-transparent text-slate-700 text-sm outline-none" />
                      </Field>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 text-xs font-semibold mb-1">Gender *</label>
                        <div className={`relative border-2 rounded-xl transition-all ${errors.gender ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-white focus-within:border-teal-400'}`}>
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          <select value={form.gender} onChange={update('gender')} className="w-full py-2.5 pl-8 pr-3 bg-transparent text-slate-700 text-sm outline-none appearance-none cursor-pointer">
                            <option value="">Select gender...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        {errors.gender && <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.gender}</p>}
                      </div>

                      <div>
                        <label className="block text-slate-700 text-xs font-semibold mb-1">Department / Specialty *</label>
                        <div className={`relative border-2 rounded-xl transition-all ${errors.dept ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-white focus-within:border-teal-400'}`}>
                          <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          <select value={form.dept} onChange={update('dept')} className="w-full py-2.5 pl-8 pr-3 bg-transparent text-slate-700 text-sm outline-none appearance-none cursor-pointer">
                            <option value="">Select department...</option>
                            {DEPARTMENTS.map((d) => <option key={d} value={d}>{d}</option>)}
                          </select>
                        </div>
                        {errors.dept && <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.dept}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Preferred Date" icon={Calendar} error={errors.date}>
                        <input type="date" value={form.date} onChange={update('date')} min={new Date().toISOString().split('T')[0]} className="flex-1 w-full py-2.5 pl-2.5 pr-3 bg-transparent text-slate-700 text-sm outline-none" />
                      </Field>
                      <Field label="Preferred Time" icon={Clock} error={errors.time}>
                        <input 
                          type="time" 
                          value={form.time} 
                          onChange={update('time')} 
                          min={form.date === new Date().toISOString().split('T')[0] ? new Date().toTimeString().slice(0, 5) : undefined}
                          className="flex-1 w-full py-2.5 pl-2.5 pr-3 bg-transparent text-slate-700 text-sm outline-none" 
                        />
                      </Field>
                    </div>

                    <div>
                      <label className="block text-slate-700 text-xs font-semibold mb-1">Any Doubts and Queries (Optional)</label>
                      <div className="relative border-2 border-slate-200 rounded-xl focus-within:border-teal-400 transition-all bg-white">
                        <StickyNote className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <textarea value={form.note} onChange={update('note')} placeholder="Share any doubts or queries..." rows={2} className="w-full py-2.5 pl-8 pr-3 bg-transparent text-slate-700 text-sm outline-none resize-none" />
                      </div>
                    </div>

                    <div className="flex pt-1 justify-center">
                      <button type="submit" disabled={submitting} className="btn-shimmer w-full text-white font-bold px-6 py-3 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-200 disabled:opacity-70 transition-all hover:scale-[1.01]">
                        {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><CalendarCheck className="w-4 h-4" /> Book Appointment</>}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: LOCATION */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="inline-block text-sky-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-full mb-3">
                Visit Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">
                Find Us in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
                  Salem
                </span>
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Centrally located at Four Roads Signal - easily accessible by auto, bus, or personal vehicle.
              </p>
            </div>

            <div className="space-y-4 flex-1 flex flex-col">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#1E293B] font-bold text-sm sm:text-base mb-1">Clinic Address</h3>
                    <p className="text-slate-500 text-[13px] leading-relaxed">
                      No. 36, Kamaraj Colony,<br />
                      Peramanur Main Rd, opp. Supreme Mobiles,<br />
                      Four Roads, Signal,<br />
                      <strong className="text-slate-700">Salem (M.Corp.), Tamil Nadu 636007</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-sm flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0 text-teal-600">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-[#1E293B] font-bold text-[13px]">Emergency</h3>
                  </div>
                  <a href="tel:9842766090" className="text-lg sm:text-xl font-bold text-teal-600 hover:text-teal-700 transition-colors">
                    98427 66090
                  </a>
                </div>

                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-sm flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-teal-500" />
                    <h3 className="text-[#1E293B] font-bold text-[13px]">Hours</h3>
                  </div>
                  <div className="space-y-1 text-[11px] sm:text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Mon-Sat</span>
                      <span className="text-teal-600 font-medium">9 AM - 8 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Sunday</span>
                      <span className="text-rose-500 font-medium">Appt Only</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex-1 min-h-[200px] relative">
                <iframe
                  title="M.S.R Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.18!2d78.1475393!3d11.6634721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf16b2517568f%3A0x5e6d0215e50b1f6f!2sM.S.R%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0, filter: 'saturate(0.85) contrast(1.05)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
