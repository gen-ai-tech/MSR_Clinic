import { useState } from 'react'
import {
  Microscope, Brain, HeartHandshake, Leaf,
  ChevronRight, RotateCcw, CalendarCheck, CheckCircle2
} from 'lucide-react'

const STEPS = [
  {
    id: 'concern',
    question: 'What brings you to M.S.R Clinic today?',
    subtitle: 'Select all that apply. This is completely confidential and non-diagnostic.',
    multi: true,
    options: [
      { id: 'skin', label: 'Skin or scalp issues', icon: Microscope, dept: 'Dermatology & Venereology' },
      { id: 'sti', label: 'STI / venereal health concern', icon: Microscope, dept: 'Dermatology & Venereology' },
      { id: 'addiction', label: 'Alcohol or substance dependency', icon: Leaf, dept: 'Alcohol De-Addiction' },
      { id: 'anxiety', label: 'Anxiety, depression or stress', icon: Brain, dept: 'Psychiatry & Mental Health' },
      { id: 'sleep', label: 'Sleep disorders or mood issues', icon: Brain, dept: 'Psychiatry & Mental Health' },
      { id: 'sexual', label: 'Sexual wellness or performance concern', icon: HeartHandshake, dept: 'Sexology' },
      { id: 'relationship', label: 'Relationship or intimacy support', icon: HeartHandshake, dept: 'Sexology' },
      { id: 'general', label: 'General mental health support', icon: Brain, dept: 'Psychiatry & Mental Health' },
    ],
  },
  {
    id: 'urgency',
    question: 'How soon do you need to see a specialist?',
    subtitle: 'This helps us prioritise your appointment.',
    multi: false,
    options: [
      { id: 'today', label: 'As soon as possible / Today', urgency: 'urgent' },
      { id: 'week', label: 'Within this week', urgency: 'soon' },
      { id: 'month', label: 'Within the next few weeks', urgency: 'planned' },
      { id: 'explore', label: 'Just exploring options for now', urgency: 'info' },
    ],
  },
  {
    id: 'visited',
    question: 'Have you visited M.S.R Clinic before?',
    subtitle: 'This helps us prepare your care pathway.',
    multi: false,
    options: [
      { id: 'first', label: 'No - this will be my first visit' },
      { id: 'returning', label: 'Yes - I am a returning patient' },
      { id: 'family', label: 'Enquiring on behalf of a family member' },
    ],
  },
]

function ProgressBar({ step, total }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full flex-1 transition-all duration-500 ${
            i < step ? 'bg-gradient-to-r from-teal-500 to-teal-400' : 'bg-slate-200'
          }`}
        />
      ))}
      <span className="text-slate-400 text-xs font-medium ml-2 whitespace-nowrap">
        {step}/{total}
      </span>
    </div>
  )
}

export default function AssessmentWidget({ onBooking }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({ concern: [], urgency: '', visited: '' })
  const [done, setDone] = useState(false)

  const step = STEPS[currentStep]

  const toggle = (id) => {
    if (step.multi) {
      setAnswers((a) => ({
        ...a,
        concern: a.concern.includes(id)
          ? a.concern.filter((x) => x !== id)
          : [...a.concern, id],
      }))
    } else {
      setAnswers((a) => ({ ...a, [step.id]: id }))
    }
  }

  const isSelected = (id) =>
    step.multi ? answers.concern.includes(id) : answers[step.id] === id

  const canProceed = step.multi
    ? answers.concern.length > 0
    : Boolean(answers[step.id])

  const proceed = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep((s) => s + 1)
    else setDone(true)
  }

  const reset = () => {
    setCurrentStep(0)
    setAnswers({ concern: [], urgency: '', visited: '' })
    setDone(false)
  }

  // Derive recommended department
  const deptCounts = {}
  answers.concern.forEach((id) => {
    const opt = STEPS[0].options.find((o) => o.id === id)
    if (opt) deptCounts[opt.dept] = (deptCounts[opt.dept] || 0) + 1
  })
  const recommendedDept = Object.entries(deptCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Psychiatry & Mental Health'

  if (done) {
    return (
      <section id="assessment" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border-2 border-teal-200 p-10 shadow-xl shadow-teal-50 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-teal-200">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Assessment Complete</h3>
            <p className="text-slate-500 mb-6">
              Based on your responses, we recommend a consultation with our{' '}
              <strong className="text-teal-600">{recommendedDept}</strong> specialist.
            </p>
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 mb-8 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-teal-800 font-semibold text-sm">Recommended Care Path</p>
                  <p className="text-teal-600 text-sm mt-0.5">{recommendedDept}</p>
                  <p className="text-slate-500 text-xs mt-1.5">
                    All consultations are 100% private and confidential. Your assessment data is not stored.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => onBooking(recommendedDept)}
                className="btn-shimmer text-white font-bold px-8 py-3.5 rounded-2xl text-sm flex items-center gap-2 justify-center shadow-lg"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Consultation
              </button>
              <button
                onClick={reset}
                className="flex items-center gap-2 justify-center text-slate-500 hover:text-slate-700 border border-slate-200 hover:border-slate-300 px-8 py-3.5 rounded-2xl text-sm transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                Start Over
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="assessment" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest bg-teal-50 border border-teal-200 px-4 py-2 rounded-full mb-5">
            Self-Assessment Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Find Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
              Care Pathway
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            A quick, anonymous 3-step guide to help connect you with the right specialist. No personal data is stored.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 p-6 pb-0">
            <ProgressBar step={currentStep + 1} total={STEPS.length} />
            <h3 className="text-white font-bold text-xl mb-1.5">{step.question}</h3>
            <p className="text-teal-100 text-sm mb-6">{step.subtitle}</p>
          </div>

          <div className="p-6">
            <div className={`grid ${step.options.length > 4 ? 'sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'} gap-3 mb-6`}>
              {step.options.map((opt) => {
                const Icon = opt.icon
                const selected = isSelected(opt.id)
                return (
                  <button
                    key={opt.id}
                    onClick={() => toggle(opt.id)}
                    className={`text-left p-4 rounded-2xl border-2 transition-all duration-200 flex items-center gap-3 hover:scale-[1.01]
                      ${selected
                        ? 'border-teal-400 bg-teal-50 shadow-md shadow-teal-100'
                        : 'border-slate-100 bg-slate-50 hover:border-slate-200 hover:bg-white hover:shadow-sm'
                      }`}
                  >
                    {Icon && (
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${selected ? 'bg-teal-500' : 'bg-slate-100'}`}>
                        <Icon className={`w-4.5 h-4.5 ${selected ? 'text-white' : 'text-slate-500'}`} strokeWidth={1.8} />
                      </div>
                    )}
                    <span className={`text-sm font-medium ${selected ? 'text-teal-800' : 'text-slate-700'}`}>
                      {opt.label}
                    </span>
                    {selected && (
                      <CheckCircle2 className="w-4 h-4 text-teal-500 ml-auto flex-shrink-0" />
                    )}
                  </button>
                )
              })}
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={reset}
                className="text-slate-400 hover:text-slate-600 text-sm flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
              <button
                onClick={proceed}
                disabled={!canProceed}
                className={`flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200
                  ${canProceed
                    ? 'btn-shimmer text-white shadow-lg hover:scale-105'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
              >
                {currentStep < STEPS.length - 1 ? 'Continue' : 'View My Results'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-400 text-xs mt-5">
          This tool is for informational guidance only and does not constitute medical advice or diagnosis.
        </p>
      </div>
    </section>
  )
}
