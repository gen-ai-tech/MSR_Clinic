import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import ServicesGrid from './components/ServicesGrid'
import PrivacyTrust from './components/PrivacyTrust'
import BookAppointment from './components/BookAppointment'
import Testimonials from './components/Testimonials'
import LocationSection from './components/LocationSection'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import FloatingActions from './components/FloatingActions'

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [preSelectedDept, setPreSelectedDept] = useState('')

  const openBooking = (dept = '') => {
    setPreSelectedDept(dept)
    setIsBookingOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans overflow-x-hidden w-full relative">
      <Navbar onBooking={openBooking} />

      {/* ── Sections ── */}
      <section id="hero">
        <Hero onBooking={openBooking} />
      </section>

      <TrustBar />

      <section id="about">
        <PrivacyTrust />
      </section>

      <section id="services">
        <ServicesGrid onBooking={openBooking} />
      </section>

      <section id="reviews">
        <Testimonials />
      </section>

      <section id="appointment">
        <BookAppointment />
      </section>

      <section id="location">
        <LocationSection onBooking={openBooking} />
      </section>

      <Footer onBooking={openBooking} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedDept={preSelectedDept}
      />
      <FloatingActions />
    </div>
  )
}
