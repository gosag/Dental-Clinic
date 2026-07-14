import React, { useRef, useState, useEffect } from "react"
import { motion, useScroll, useInView } from "framer-motion"
import {
  Hotel,
  Stethoscope,
  Utensils,
  Layers,
  Bot,
  Zap,
  Search,
  Code2,
  Send,
  Handshake,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react"

/* ---------------------------------------------------------------
   Design tokens
   Ink            #0A1120   base background
   Panel          #101B2D   card / surface
   Panel border   rgba(95,211,218,0.16)
   Grid line      rgba(95,211,218,0.07)
   Signal cyan    #5FD3DA   schematic accent / traces
   Signal amber   #F2A65A   live indicator / primary CTA
   Paper text     #E8EFF6
   Muted text     #8CA0B5
----------------------------------------------------------------*/

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');

  .gg-root { font-family: 'Inter', sans-serif; background:#0A1120; color:#E8EFF6; }
  .gg-display { font-family: 'Space Grotesk', sans-serif; }
  .gg-mono { font-family: 'IBM Plex Mono', monospace; }

  @keyframes gg-pulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(242,166,90,0.55); }
    50% { opacity: 0.55; box-shadow: 0 0 0 6px rgba(242,166,90,0); }
  }
  @keyframes gg-drift {
    0% { background-position: 0 0, 0 0; }
    100% { background-position: 120px 120px, 120px 120px; }
  }
  .gg-live-dot { animation: gg-pulse 2.2s ease-in-out infinite; }
  .gg-grid-drift { animation: gg-drift 60s linear infinite; }

  .gg-corner { position: absolute; width: 16px; height: 16px; border-color: rgba(95,211,218,0.55); }
  .gg-corner-tl { top: -1px; left: -1px; border-top: 1.5px solid; border-left: 1.5px solid; }
  .gg-corner-tr { top: -1px; right: -1px; border-top: 1.5px solid; border-right: 1.5px solid; }
  .gg-corner-bl { bottom: -1px; left: -1px; border-bottom: 1.5px solid; border-left: 1.5px solid; }
  .gg-corner-br { bottom: -1px; right: -1px; border-bottom: 1.5px solid; border-right: 1.5px solid; }

  .gg-gradient-text {
    background: linear-gradient(90deg, #5FD3DA, #F2A65A);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .gg-input {
    background: #0C1524;
    border: 1px solid rgba(95,211,218,0.18);
    color: #E8EFF6;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }
  .gg-input::placeholder { color: #5A6E82; }
  .gg-input:focus {
    outline: none;
    border-color: #5FD3DA;
    box-shadow: 0 0 0 3px rgba(95,211,218,0.14);
  }

  @media (prefers-reduced-motion: reduce) {
    .gg-live-dot, .gg-grid-drift { animation: none !important; }
  }
`

function GridBackdrop({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 gg-grid-drift"
        style={{
          backgroundImage:
            "linear-gradient(rgba(95,211,218,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(95,211,218,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px, 40px 40px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(95,211,218,0.10), transparent 70%)",
        }}
      />
    </div>
  )
}

function CornerMarks() {
  return (
    <>
      <span className="gg-corner gg-corner-tl" />
      <span className="gg-corner gg-corner-tr" />
      <span className="gg-corner gg-corner-bl" />
      <span className="gg-corner gg-corner-br" />
    </>
  )
}

const sectionVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
}

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-2 gg-mono text-[11px] tracking-[0.25em] uppercase text-[#5FD3DA]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#5FD3DA]" />
      {children}
    </div>
  )
}

/* ---------------------------------------------------------------
   Nav
----------------------------------------------------------------*/
function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.onChange((v) => setScrolled(v > 8))
  }, [scrollY])

  return (
    <header
      className="sticky top-0 z-50 transition-colors duration-300"
      style={{
        background: scrolled ? "rgba(10,17,32,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(95,211,218,0.12)" : "1px solid transparent",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="gg-mono text-sm tracking-wide text-[#E8EFF6]">
          GOSA<span className="text-[#5FD3DA]">.GIRMA</span>
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 h-10 px-4 rounded-md bg-[#F2A65A] text-[#1A1105] text-sm font-medium gg-display hover:bg-[#f5b678] transition-colors"
        >
          Let's Work
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  )
}

/* ---------------------------------------------------------------
   Hero
----------------------------------------------------------------*/
function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <GridBackdrop />
      <div className="relative max-w-4xl mx-auto px-6 text-center py-32">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 gg-mono text-[11px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-full border border-[rgba(95,211,218,0.25)] text-[#5FD3DA]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F2A65A] gg-live-dot" />
            Live demo protocol
          </div>
        </motion.div>

        <motion.h1
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="gg-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight"
        >
          I build websites that{" "}
          <span className="gg-gradient-text">sell themselves.</span>
        </motion.h1>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-[#5FD3DA] text-[#0A1120] font-medium gg-display hover:bg-[#7fdde3] transition-colors"
          >
            See My Services
          </a>
          <a
            href="https://gosagirma.me"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md border border-[rgba(232,239,246,0.25)] text-[#E8EFF6] font-medium gg-display hover:border-[#5FD3DA] hover:text-[#5FD3DA] transition-colors"
          >
            View My Work
          </a>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={4}
          className="mt-12 gg-mono text-xs tracking-wide text-[#5A6E82]"
        >
          Full-Stack Developer · Adama, Ethiopia · ECE @ ASTU
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------
   Services
----------------------------------------------------------------*/
function ServiceCard({ icon: Icon, title, children, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="relative p-5 rounded-lg"
      style={{ background: "#101B2D", border: "1px solid rgba(95,211,218,0.14)" }}
    >
      <CornerMarks />
      <div className="flex items-center gap-3">
        <div
          className="p-2.5 rounded-md flex items-center justify-center"
          style={{ background: "rgba(95,211,218,0.10)" }}
        >
          <Icon className="w-4.5 h-4.5 text-[#5FD3DA]" strokeWidth={1.75} />
        </div>
        <div className="gg-display text-sm font-semibold text-[#E8EFF6]">{title}</div>
      </div>
      <p className="mt-3 text-sm text-[#8CA0B5] leading-relaxed">{children}</p>
    </motion.div>
  )
}

function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const services = [
    { icon: Hotel, title: "Hotel Websites", desc: "Beautiful, reservation-ready demos." },
    { icon: Stethoscope, title: "Clinic Websites", desc: "Patient-friendly clinic landing pages." },
    { icon: Utensils, title: "Restaurant Sites", desc: "Menus, bookings, and mouthwatering layouts." },
    { icon: Layers, title: "Full-Stack Apps", desc: "Production-ready apps with auth and DB." },
    { icon: Bot, title: "AI Features", desc: "Smart chat, suggestions, automations." },
    { icon: Zap, title: "Live Demo First", desc: "Try a live demo — pay only if you like it." },
  ]

  return (
    <section id="services" ref={ref} className="relative py-24" style={{ background: "#0A1120" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow>Services</Eyebrow>
          <h2 className="gg-display mt-3 text-2xl sm:text-3xl font-semibold text-[#E8EFF6]">
            What I build
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} index={i}>
              {s.desc}
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------
   How It Works — signature circuit-trace signal path
----------------------------------------------------------------*/
function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    { icon: Search, id: "01", title: "I Find You" },
    { icon: Code2, id: "02", title: "I Build It" },
    { icon: Send, id: "03", title: "I Show You" },
    { icon: Handshake, id: "04", title: "You Decide" },
  ]

  return (
    <section ref={ref} className="relative py-24 overflow-hidden" style={{ background: "#0A1120" }}>
      <GridBackdrop />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center">
            <Eyebrow>Signal path</Eyebrow>
          </div>
          <h3 className="gg-display mt-3 text-2xl sm:text-3xl font-semibold text-[#E8EFF6]">
            How it works
          </h3>
        </motion.div>

        {/* desktop / tablet: horizontal trace */}
        <div className="relative mt-16 hidden sm:block">
          <svg
            viewBox="0 0 800 4"
            preserveAspectRatio="none"
            className="absolute left-0 right-0 top-6 w-full h-0.5"
          >
            <motion.line
              x1="0"
              y1="2"
              x2="800"
              y2="2"
              stroke="rgba(95,211,218,0.35)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </svg>

          <div className="relative grid grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center text-center px-2"
              >
                <div
                  className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "#0A1120", border: "1.5px solid #5FD3DA" }}
                >
                  <s.icon className="w-4.5 h-4.5 text-[#5FD3DA]" strokeWidth={1.75} />
                </div>
                <div className="gg-mono text-[10px] tracking-[0.2em] text-[#F2A65A] mt-3">
                  STEP.{s.id}
                </div>
                <div className="gg-display text-sm font-medium text-[#E8EFF6] mt-1">
                  {s.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* mobile: vertical trace */}
        <div className="relative mt-12 sm:hidden pl-6">
          <svg
            viewBox="0 4 4 400"
            preserveAspectRatio="none"
            className="absolute left-5.5 top-0 w-0.5 h-full"
          >
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="400"
              stroke="rgba(95,211,218,0.35)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </svg>
          <div className="flex flex-col gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-4"
              >
                <div
                  className="relative z-10 w-11 h-11 shrink-0 rounded-full flex items-center justify-center"
                  style={{ background: "#0A1120", border: "1.5px solid #5FD3DA" }}
                >
                  <s.icon className="w-4 h-4 text-[#5FD3DA]" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="gg-mono text-[10px] tracking-[0.2em] text-[#F2A65A]">
                    STEP.{s.id}
                  </div>
                  <div className="gg-display text-sm font-medium text-[#E8EFF6]">
                    {s.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------
   Contact
----------------------------------------------------------------*/
function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [form, setForm] = useState({ name: "", contact: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [isPhoneOrEmail, setIsPhoneOrEmail] = useState("")
  const [errors, setErrors] = useState({})
    useEffect(() => {
        document.title = "GOSA GIRMA · Full-Stack Developer"
    }, [])

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = "Required"
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact.trim())
    const isPhone = /^[\d+\s()-]{7,}$/.test(form.contact.trim())
    if(isEmail) setIsPhoneOrEmail("email")
    else if(isPhone) setIsPhoneOrEmail("phone")
    if (!isEmail && !isPhone) e.contact = "Enter a valid phone or email"
    if (!form.message.trim()) e.message = "Required"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(ev) {
    ev.preventDefault()
    if (!validate()) return
    const formData = new FormData()
    formData.append("name", form.name)
    formData.append("contact", form.contact)
    formData.append("message", form.message)
    const res= await fetch("https://formspree.io/f/mpqgeqno", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
    if (!res.ok) {
        console.log("Form submission failed:", res.statusText);
        alert("Form submission failed. Please try again later.");
        return;
    }
    const data = await res.json()
    console.log("Form submission successful:", data)
    setSubmitted(true)
  }

  return (
    <section id="contact" ref={ref} className="relative py-24" style={{ background: "#0A1120" }}>
      <div className="max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center">
            <Eyebrow>Contact</Eyebrow>
          </div>
          <h3 className="gg-display mt-3 text-2xl sm:text-3xl font-semibold text-[#E8EFF6]">
            Let's start something
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative p-6 sm:p-8 rounded-lg"
          style={{ background: "#101B2D", border: "1px solid rgba(95,211,218,0.14)" }}
        >
          <CornerMarks />

          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle2 className="mx-auto text-[#5FD3DA] w-10 h-10" strokeWidth={1.5} />
              <p className="gg-mono text-xs text-[#5FD3DA] mt-4 tracking-wide">
                &gt; message received
              </p>
              <p className="mt-2 text-[#8CA0B5] text-sm">
                I'll get back to you shortly at the {isPhoneOrEmail} you provided.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="gg-mono text-[10px] tracking-[0.2em] uppercase text-[#5A6E82]">
                  Name
                </label>
                <input
                  className="gg-input w-full h-11 mt-1.5 px-3 rounded-md text-sm"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && (
                  <div className="text-xs text-[#F2846A] mt-1">{errors.name}</div>
                )}
              </div>

              <div>
                <label className="gg-mono text-[10px] tracking-[0.2em] uppercase text-[#5A6E82]">
                  Phone or Email
                </label>
                <input
                  className="gg-input w-full h-11 mt-1.5 px-3 rounded-md text-sm"
                  placeholder="+251 XXX XXX XXX or you@example.com"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                />
                {errors.contact && (
                  <div className="text-xs text-[#F2846A] mt-1">{errors.contact}</div>
                )}
              </div>

              <div>
                <label className="gg-mono text-[10px] tracking-[0.2em] uppercase text-[#5A6E82]">
                  Message
                </label>
                <textarea
                  className="gg-input w-full mt-1.5 px-3 py-2.5 rounded-md text-sm min-h-27.5 resize-none"
                  placeholder="Tell me about your project"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                {errors.message && (
                  <div className="text-xs text-[#F2846A] mt-1">{errors.message}</div>
                )}
              </div>

              <button
                type="submit"
                className="group w-full h-12 rounded-md bg-[#F2A65A] text-[#1A1105] font-medium gg-display hover:bg-[#f5b678] transition-colors inline-flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------
   Footer
----------------------------------------------------------------*/
import { NavLink } from "react-router-dom"
import { CLINICS } from "../data/clinics"

import clinic from "@/data/clinic"
function Footer() {
 const newClinic = Object.values(CLINICS).filter(clinic => clinic.name && clinic.slug);
  const year = new Date().getFullYear()
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  return (
    <footer className="py-8" style={{ background: "#070D17", borderTop: "1px solid rgba(95,211,218,0.10)" }}>
     
        <div className="flex flex-col ml-2">
          {newClinic.map((clinic,index) => {

            if(!clinic.name){
              return null
            }
            return (
              <NavLink
                key={clinic.name}
                to={`preview/${clinic.slug}`}
                className="text-[#5A6E82] hover:text-[#5FD3DA] transition-colors border-b border-[#5A6E82] hover:border-[#5FD3DA] py-1"
              >
                {index + 1}, {clinic.name} And place: {clinic.address}
              </NavLink>
            )
          })}
        </div>
    
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 gg-mono text-xs text-[#5A6E82]">
        <div>
          GOSA GIRMA © {year} ·{" "}
          <a href="https://gosagirma.me" className="text-[#5FD3DA] hover:underline">
            gosagirma.me
          </a>
        </div>
        <div className="tracking-wide">ADAMA, ETHIOPIA</div>
      </div>

    </footer>
  )
}

export default function HomePage() {
  return (
    <div className="gg-root antialiased">
      <style>{fontStyles}</style>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}