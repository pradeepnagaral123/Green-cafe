import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specialties from './components/Specialties'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Reservation from './components/Reservation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import ReservationModal from './components/ReservationModal'

export default function App() {
  const [reserveOpen, setReserveOpen] = useState(false)
  const openReserve = () => setReserveOpen(true)

  return (
    <>
      <Navbar onReserve={openReserve} />
      <main>
        <Hero onReserve={openReserve} />
        <Specialties />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <ReservationModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </>
  )
}
