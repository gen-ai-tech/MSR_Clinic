import { useState } from 'react'
import {
  CalendarCheck, User, SmartphoneIcon, Calendar,
  Stethoscope, StickyNote, MessageCircle, Phone,
  CheckCircle2, AlertCircle, Loader2
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
      <label className="block text-slate-700 text-sm font-semibold mb-1.5">
        {label}
      </label>
      <div
        className={`relative flex items-center border-2 rounded-xl transition-all duration-200 ${error
            ? 'border-rose-400 bg-rose-50'
            : 'border-slate-200 bg-white focus-within:border-teal-400 focus-within:shadow-sm focus-within:shadow-teal-100'
          }`}
      >
        <Icon className="w-4 h-4 text-slate-400 ml-3.5 flex-shrink-0" />
        {children}
      </div>
      {error && (
        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> {error}
        </p>
      )}
    </div>
  )
}

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: '',
    gender: '',
    phone: '',
    date: '',
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
        `Name: ${form.name}\nGender: ${form.gender}\nPhone: ${form.phone}\nDepartment: ${form.dept}\nPreferred Date: ${form.date || 'Flexible'}\n` +
        `Note: ${form.note || 'None'}\n\nPlease confirm my appointment. Thank you.`
      )
      window.open(WA_BASE + msg, '_blank')
      setSubmitted(true)
      setSubmitting(false)
    }, 800)
  }

  const reset = () => {
    setForm({ name: '', gender: '', phone: '', date: '', dept: '', note: '' })
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section id="appointment" className="py-10 sm:py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-100/40 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sky-100/30 blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="text-center mb-8 sm:mb-14">
          <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest bg-teal-50 border border-teal-200 px-4 py-2 rounded-full mb-5">
            Online Booking
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Book Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
              Appointment
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Fill in the form below and your details will be sent directly to us via WhatsApp for a quick, confidential confirmation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">

          {/* ── Form ── */}
          <div>
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 overflow-hidden">

              {/* Form header */}
              <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] px-8 py-6">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mb-3">
                  <CalendarCheck className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-1">Book a Private Consultation</h3>
                <p className="text-slate-300 text-sm">100% Confidential &middot; No Judgment &middot; Your data stays private</p>
              </div>

              <div className="p-8">
                {submitted ? (
                  /* ── Success state ── */
                  <div className="text-center py-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-teal-200">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Request Sent! 🎉</h3>
                    <p className="text-slate-500 text-sm mb-8 leading-relaxed max-w-sm mx-auto">
                      Your appointment request has been sent via WhatsApp. Our team will confirm your slot shortly. All communications are completely private.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href="tel:9842766090"
                        className="btn-shimmer text-white font-semibold py-3.5 px-6 rounded-2xl text-sm flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Call to Confirm
                      </a>
                      <button
                        onClick={reset}
                        className="border-2 border-slate-200 hover:border-teal-300 text-slate-600 hover:text-teal-600 font-semibold py-3.5 px-6 rounded-2xl text-sm transition-all"
                      >
                        Book Another
                      </button>
                    </div>
                  </div>
                ) : (
                  /* ── Form ── */
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Your Name *" icon={User} error={errors.name}>
                        <input
                          type="text"
                          value={form.name}
                          onChange={update('name')}
                          placeholder="Enter your full name"
                          className="flex-1 py-3 pl-3 pr-4 bg-transparent text-slate-700 text-sm outline-none placeholder-slate-400"
                        />
                      </Field>

                      <Field label="Phone Number *" icon={SmartphoneIcon} error={errors.phone}>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={update('phone')}
                          placeholder="10-digit mobile number"
                          maxLength={10}
                          className="flex-1 py-3 pl-3 pr-4 bg-transparent text-slate-700 text-sm outline-none placeholder-slate-400"
                        />
                      </Field>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-700 text-sm font-semibold mb-1.5">
                          Gender *
                        </label>
                        <div
                          className={`relative border-2 rounded-xl transition-all ${errors.gender ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-white focus-within:border-teal-400'}`}
                        >
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          <select
                            value={form.gender}
                            onChange={update('gender')}
                            className="w-full py-3 pl-9 pr-4 bg-transparent text-slate-700 text-sm outline-none appearance-none cursor-pointer"
                          >
                            <option value="">Select gender...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        {errors.gender && (
                          <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.gender}
                          </p>
                        )}
                      </div>

                      <Field label="Preferred Date" icon={Calendar} error={errors.date}>
                        <input
                          type="date"
                          value={form.date}
                          onChange={update('date')}
                          min={new Date().toISOString().split('T')[0]}
                          className="flex-1 py-3 pl-3 pr-4 bg-transparent text-slate-700 text-sm outline-none"
                        />
                      </Field>
                    </div>

                    <div>
                        <label className="block text-slate-700 text-sm font-semibold mb-1.5">
                          Department / Specialty *
                        </label>
                        <div
                          className={`relative border-2 rounded-xl transition-all ${errors.dept ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-white focus-within:border-teal-400'
                            }`}
                        >
                          <Stethoscope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          <select
                            value={form.dept}
                            onChange={update('dept')}
                            className="w-full py-3 pl-9 pr-4 bg-transparent text-slate-700 text-sm outline-none appearance-none cursor-pointer"
                          >
                            <option value="">Select department...</option>
                            {DEPARTMENTS.map((d) => (
                              <option key={d} value={d}>{d}</option>
                            ))}
                          </select>
                        </div>
                        {errors.dept && (
                          <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.dept}
                          </p>
                        )}
                      </div>
                    <div>
                      <label className="block text-slate-700 text-sm font-semibold mb-1.5">
                        Any Doubts and Queries (Optional)
                      </label>
                      <div className="relative border-2 border-slate-200 rounded-xl focus-within:border-teal-400 transition-all bg-white">
                        <StickyNote className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                        <textarea
                          value={form.note}
                          onChange={update('note')}
                          placeholder="Share any doubts or queries you have before your visit..."
                          rows={3}
                          className="w-full py-3 pl-9 pr-4 bg-transparent text-slate-700 text-sm outline-none resize-none placeholder-slate-400"
                        />
                      </div>
                    </div>



                    {/* Submit */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-1 justify-center items-center">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-shimmer text-white font-bold px-8 py-4 rounded-2xl text-sm inline-flex items-center gap-2.5 shadow-lg shadow-teal-200 disabled:opacity-70 transition-all hover:scale-[1.01] whitespace-nowrap"
                      >
                        {submitting ? (
                          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                        ) : (
                          <><CalendarCheck className="w-4 h-4" /> Book Appointment</>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
