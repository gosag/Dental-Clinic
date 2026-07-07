import { useEffect } from "react"
import clinic from "./data/clinic.js"
import DemoRibbon from "./components/DemoRibbon.jsx"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Services from "./components/Services.jsx"
import Doctor from "./components/Doctor.jsx"
import WhyUs from "./components/WhyUs.jsx"
import BookingForm from "./components/BookingForm.jsx"
import Testimonials from "./components/Testimonials.jsx"
import FAQ from "./components/FAQ.jsx"
import FindUs from "./components/FindUs.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", clinic.accentColor)
    document.documentElement.style.setProperty("--accent-light", clinic.accentColorLight)
    document.title = clinic.name
  }, [])

  return (
    <div className="font-sans text-gray-800 bg-white antialiased">
      <DemoRibbon clinic={clinic} />
      <Navbar clinic={clinic} />
      <Hero clinic={clinic} />
      <Services clinic={clinic} />
      <Doctor clinic={clinic} />
      <WhyUs clinic={clinic} />
      <BookingForm clinic={clinic} />
      <Testimonials clinic={clinic} />
      <FAQ clinic={clinic} />
      <FindUs clinic={clinic} />
      <Footer clinic={clinic} />
    </div>
  )
}
