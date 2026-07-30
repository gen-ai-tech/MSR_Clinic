import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import ServicesGrid from './components/ServicesGrid'
import PrivacyTrust from './components/PrivacyTrust'
import BookAppointment from './components/BookAppointment'
import Testimonials from './components/Testimonials'
import LocationSection from './components/LocationSection'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
  const openBooking = (dept = '') => {
    // If we want to pre-select department in the future, we can use state or URL params.
    // For now, scroll to the booking section directly.
    const el = document.querySelector('#appointment')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
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

      <FloatingActions />
    </div>
  )
}
