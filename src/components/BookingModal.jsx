import { useState } from 'react'
import {
  X, CalendarCheck, Phone, MessageCircle,
  User, SmartphoneIcon, Calendar, Stethoscope,
  StickyNote, CheckCircle2, AlertCircle, Loader2
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
      <div className={`relative flex items-center border-2 rounded-xl transition-all duration-200 ${error ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-white focus-within:border-teal-400 focus-within:shadow-sm focus-within:shadow-teal-100'}`}>
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

export default function BookingModal({ isOpen, onClose, preSelectedDept }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    dept: preSelectedDept || '',
    note: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  // Sync preSelectedDept when modal opens
  useState(() => {
    if (preSelectedDept) setForm((f) => ({ ...f, dept: preSelectedDept }))
  }, [preSelectedDept])

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Your name is required'
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, '')))
      errs.phone = 'Enter a valid 10-digit Indian mobile number'
    if (!form.dept) errs.dept = 'Please select a department'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setSubmitting(true)
    // Simulate async submit → open WhatsApp with pre-filled message
    setTimeout(() => {
      const msg = encodeURIComponent(
        `Hello M.S.R Clinic,\n\nI would like to book a confidential appointment.\n\n` +
        `Name: ${form.name}\nPhone: ${form.phone}\nDepartment: ${form.dept}\nPreferred Date: ${form.date || 'Flexible'}\n` +
        `Note: ${form.note || 'None'}\n\nPlease confirm my appointment. Thank you.`
      )
      window.open(WA_BASE + msg, '_blank')
      setSubmitted(true)
      setSubmitting(false)
    }, 800)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', phone: '', date: '', dept: preSelectedDept || '', note: '' })
      setErrors({})
    }, 300)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/75 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal panel */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden z-10 max-h-[95vh] flex flex-col">

        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] p-6 flex-shrink-0">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-lg"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mb-3">
            <CalendarCheck className="w-5 h-5 text-teal-400" />
          </div>
          <h2 id="modal-title" className="text-white font-bold text-xl mb-1">
            Book a Private Consultation
          </h2>
          <p className="text-slate-300 text-sm">
            100% Confidential &middot; No Judgment &middot; Your data stays private
          </p>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 p-6">
          {submitted ? (
            /* Success state */
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center mx-auto mb-5 shadow-xl shadow-teal-200">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Request Sent!</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Your appointment request has been sent via WhatsApp. Our team will confirm your slot shortly. All communications are completely private.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:9842766090"
                  className="btn-shimmer text-white font-semibold py-3.5 rounded-2xl text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call to Confirm: 98427 66090
                </a>
                <button
                  onClick={handleClose}
                  className="border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium py-3.5 rounded-2xl text-sm transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <Field label="Your Name *" icon={User} error={errors.name}>
                <input
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Enter your name"
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

              <Field label="Preferred Date" icon={Calendar} error={errors.date}>
                <input
                  type="date"
                  value={form.date}
                  onChange={update('date')}
                  min={new Date().toISOString().split('T')[0]}
                  className="flex-1 py-3 pl-3 pr-4 bg-transparent text-slate-700 text-sm outline-none"
                />
              </Field>

              <div>
                <label className="block text-slate-700 text-sm font-semibold mb-1.5">
                  Department / Specialty *
                </label>
                <div className={`relative border-2 rounded-xl transition-all ${errors.dept ? 'border-rose-400 bg-rose-50' : 'border-slate-200 focus-within:border-teal-400'}`}>
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
                  Confidential Note (Optional)
                </label>
                <div className="relative border-2 border-slate-200 rounded-xl focus-within:border-teal-400 transition-all">
                  <StickyNote className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <textarea
                    value={form.note}
                    onChange={update('note')}
                    placeholder="Share anything that helps us prepare for your visit... (completely private)"
                    rows={3}
                    className="w-full py-3 pl-9 pr-4 bg-transparent text-slate-700 text-sm outline-none resize-none placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Privacy note */}
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                <p className="text-teal-700 text-xs leading-relaxed">
                  <strong>Privacy Guarantee:</strong> This form sends your request via encrypted WhatsApp. We never store, share, or disclose your information. All communication is fully confidential.
                </p>
              </div>

              {/* Submit options */}
              <div className="space-y-3 pt-1">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-shimmer text-white font-bold py-4 rounded-2xl text-sm flex items-center justify-center gap-2.5 shadow-lg disabled:opacity-70"
                >
                  {submitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : (
                    <><MessageCircle className="w-4 h-4" /> Send via WhatsApp</>
                  )}
                </button>
                <a
                  href="tel:9842766090"
                  className="w-full flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-teal-300 text-slate-600 hover:text-teal-600 font-semibold py-3.5 rounded-2xl text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Or Call: 98427 66090
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
