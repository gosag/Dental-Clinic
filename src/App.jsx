import { useEffect } from "react"
import { Routes, Route, useParams } from "react-router-dom"
import { getClinicBySlug } from "./data/clinics"
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
import HomePage from "./components/HomePage.jsx"
import { Navigate } from "react-router-dom"

import {CLINICS} from "./data/clinics"
/**
 * ClinicPage Component
 * Renders the full landing page with clinic-specific data
 * Accepts clinic data as prop or fetches from URL params
 */
function ClinicPage({ clinic: propClinic }) {
   const { clinicSlug } = useParams()
  const clinic = getClinicBySlug(clinicSlug) || propClinic
const isThere = Object.prototype.hasOwnProperty.call(CLINICS, clinicSlug)
  if (!clinic || !isThere) {
    return <Navigate to="/" replace />
  }

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", clinic.accentColor)
    document.documentElement.style.setProperty("--accent-light", clinic.accentColorLight)
    document.title = clinic.name
  }, [clinic])
  return (
    <div className="relative overflow-x-hidden font-sans text-gray-800 antialiased">
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

export default function App() {
  return (
    <Routes>
      {/* Default homepage route with Smile Care clinic */}
      <Route path="/" element={<HomePage />} />
      
      {/* Dynamic preview route for any clinic slug */}
      <Route path="/preview/:clinicSlug" element={<ClinicPage />} />
      <Route path="*" element={<div className="flex min-h-screen items-center justify-center text-2xl font-semibold text-gray-600">404 - Page Not Found</div>} />
    </Routes>
  )
}
