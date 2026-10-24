import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "motion/react"
import {
  Activity,
  ArrowUpRight,
  Scissors,
  Shield,
  Smile,
  Sparkles,
  Sun,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const icons = [Sparkles, Sun, Scissors, Activity, Smile, Shield]
const MotionCard = motion.create(Card)

export default function Services({ clinic }) {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { title, subtitle } = clinic.ui.sections.services

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#f7fbfc] px-4 py-20 sm:px-6 sm:py-28 lg:py-36"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-12rem] top-[-15rem] h-[32rem] w-[32rem] rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="absolute bottom-[-16rem] right-[-12rem] h-[34rem] w-[34rem] rounded-full bg-teal-100/50 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,107,138,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(26,107,138,0.035)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <motion.div
        ref={ref}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/10 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-accent shadow-sm backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Care designed around you
        </div>

        <h2 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      </motion.div>

      <div className="mx-auto mt-14 grid max-w-7xl gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
        {clinic.services.map((service, index) => {
          const Icon = icons[index] ?? Sparkles
          const serviceNumber = String(index + 1).padStart(2, "0")

          return (
            <MotionCard
              key={service.name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: shouldReduceMotion ? 0 : index * 0.08,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={shouldReduceMotion ? {} : { y: -8 }}
              className="group relative min-h-[285px] overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/85 shadow-[0_18px_50px_-32px_rgba(15,48,65,0.36)] backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-accent/20 hover:shadow-[0_28px_65px_-30px_rgba(15,48,65,0.42)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-accent to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-accent/[0.06] transition-transform duration-500 group-hover:scale-150" />

              <CardContent className="relative flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-start justify-between">
                  <div className="inline-flex rounded-2xl bg-accent-light p-3.5 text-accent shadow-sm ring-1 ring-accent/10 transition duration-300 group-hover:scale-105 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>

                  <span className="font-display text-sm font-bold tracking-[0.16em] text-slate-300 transition-colors duration-300 group-hover:text-accent/40">
                    {serviceNumber}
                  </span>
                </div>

                <div className="mt-8">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                    Personalized dental care
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight text-navy">
                    {service.name}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center gap-2 pt-7 text-sm font-semibold text-navy">
                  <span className="transition-colors duration-200 group-hover:text-accent">
                    Learn more
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                </div>
              </CardContent>
            </MotionCard>
          )
        })}
      </div>
    </section>
  )
}