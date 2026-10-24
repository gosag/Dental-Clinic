import { motion, useReducedMotion } from "motion/react"
import {
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smile,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero({ clinic }) {
  const shouldReduceMotion = useReducedMotion()
  const benefits = clinic.whyUs?.slice(0, 3) ?? []

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[#f7fbfc] px-4 py-14 sm:px-6 sm:py-18 lg:py-22"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-[-13rem] h-[31rem] w-[31rem] rounded-full bg-cyan-100/70 blur-3xl" />
        <div className="absolute -bottom-56 -right-28 h-[34rem] w-[34rem] rounded-full bg-teal-100/55 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,107,138,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(26,107,138,0.035)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.div
            variants={item}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-accent/10 bg-white/85 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-accent shadow-sm backdrop-blur lg:mx-0"
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-accent-light">
              <Smile className="size-3 text-accent" />
            </span>
            Trusted care in {clinic.city || "Adama"}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-bold leading-[1.04] tracking-tight text-navy sm:text-5xl lg:text-6xl"
          >
            {clinic.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0"
          >
            {clinic.tagline ||
              "Compassionate, modern care for you and your family."}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <Button
                asChild
                className="h-12 w-full rounded-full bg-accent px-7 font-semibold text-white shadow-[0_14px_28px_-12px_rgba(26,107,138,0.65)] hover:bg-accent/90 sm:w-auto"
              >
                <a href={`tel:${clinic.phone}`}>
                  <Phone className="mr-2 size-4.5" />
                  {clinic.ui.hero.callNow}
                </a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <Button
                asChild
                variant="outline"
                className="h-12 w-full rounded-full border-navy/10 bg-white/80 px-7 font-semibold text-navy shadow-sm hover:border-accent/25 hover:bg-white sm:w-auto"
              >
                <a
                  href={`https://t.me/+${clinic.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 size-4.5 text-accent" />
                  Telegram Us
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {benefits.length > 0 && (
            <motion.div
              variants={item}
              className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2.5 lg:justify-start"
            >
              {benefits.map(({ point }) => (
                <div
                  key={point}
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-600"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-accent" />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 28, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-linear-to-br from-accent/20 via-cyan-100/50 to-transparent blur-sm" />
          <div className="absolute -inset-2 rotate-2 rounded-[2rem] border border-accent/15" />

          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, -7, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-[0_28px_65px_-26px_rgba(15,48,65,0.35)] ring-1 ring-navy/5"
          >
            <img
              src="/smilling.webp"
              alt={`Doctor at ${clinic.name} ready to care for patients`}
              className="h-full w-full object-cover object-top"
            />

            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-navy/25 to-transparent" />
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="absolute -bottom-5 left-3 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_16px_35px_-18px_rgba(15,48,65,0.4)] backdrop-blur sm:left-5"
          >
            <div className="flex size-9 items-center justify-center rounded-full bg-accent-light">
              <Star className="size-4 fill-accent text-accent" />
            </div>

            <div className="leading-tight">
              <p className="text-sm font-bold text-navy">
                {clinic.rating ?? "4.9"} patient rating
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                {clinic.reviewCount
                  ? `${clinic.reviewCount} happy patients`
                  : "Trusted local dental care"}
              </p>
            </div>
          </motion.div>

          <div className="absolute -right-3 top-8 hidden items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3 py-2 text-xs font-semibold text-navy shadow-sm backdrop-blur sm:flex">
            <ShieldCheck className="size-4 text-accent" />
            Gentle, modern care
          </div>
        </motion.div>
      </div>
    </section>
  )
}