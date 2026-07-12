import { motion } from "motion/react"
import { CheckCircle2, MessageCircle, Phone, Smile, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

// Male Black doctor at work — reads as welcoming and general-purpose
// rather than dental-specific.
export default function Hero({ clinic }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#FBFAF7] px-4 py-16 sm:py-20 lg:py-28"
    >
      {/* soft ambient shapes, no grid/blueprint pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-navy/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* text column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.div
            variants={item}
            className="mx-auto mb-5 inline-flex items-center gap-1.5 rounded-full border border-navy/10 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy/70 shadow-sm lg:mx-0"
          >
            <Smile className="size-3.5 text-accent" />
            Trusted Care in {clinic.city || "Adama"}
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.1] text-navy sm:text-5xl lg:text-6xl"
          >
            {clinic.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-md text-base leading-relaxed text-navy/60 sm:text-lg lg:mx-0"
          >
            {clinic.tagline || "Compassionate, modern care for you and your family."}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center lg:justify-start"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                className="h-12 w-full rounded-full bg-accent px-8 font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent/90 sm:w-auto"
              >
                <a href={`tel:${clinic.phone}`}>
                  <Phone className="mr-2 size-5" />
                  {clinic.ui.hero.callNow}
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                className="h-12 w-full rounded-full border border-navy/15 bg-white px-8 font-semibold text-navy hover:bg-navy/5 sm:w-auto"
              >
                <a
                  href={`https://t.me/+${clinic.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 size-5 text-accent" />
                  Telegram Us
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start"
          >
            {clinic.whyUs.slice(0, 3).map(({ point }) => (
              <Badge
                key={point}
                className="rounded-full border border-navy/10 bg-white px-3 py-1.5 text-xs font-medium text-navy/80 hover:bg-navy/5 sm:text-sm"
              >
                <CheckCircle2 className="mr-1.5 size-4 shrink-0 text-accent" />
                {point}
              </Badge>
            ))}
          </motion.div>
        </motion.div>

        {/* image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          {/* offset accent panel behind photo — the crafted, human detail */}
          <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-accent/15" />
          <div className="absolute -inset-3 rotate-1 rounded-[2rem] border-2 border-accent/20" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-4/5 overflow-hidden rounded-[1.75rem] shadow-xl ring-1 ring-black/5"
          >
            <img
              src="/hero-doctor.png"
              alt={`Doctor at ${clinic.name} ready to care for patients`}
              className="h-full w-full object-cover object-top"
            />
          </motion.div>

          {/* floating trust card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute -bottom-4 left-2 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-bottom-6 sm:left-4"
          >
            <div className="flex size-9 items-center justify-center rounded-full bg-accent/10">
              <Star className="size-4 fill-accent text-accent" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-navy">
                {clinic.rating ?? "4.9"} rating
              </p>
              <p className="text-xs text-navy/50">
                {clinic.reviewCount} and happy patients
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}