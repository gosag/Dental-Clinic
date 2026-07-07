import { useRef } from "react"
import { motion, useInView } from "motion/react"
import {
  Activity,
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
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { title, subtitle } = clinic.ui.sections.services

  return (
    <section id="services" className="relative bg-linear-to-b from-[rgba(26,107,138,0.08)] via-white to-slate-50 px-4 py-20 sm:px-6 sm:py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-7xl text-center"
      >
        <div className="mx-auto mb-4 inline-flex rounded-full bg-accent-light px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          Care built around comfort
        </div>
        <h2 className="font-display text-4xl font-bold text-navy sm:text-5xl md:text-6xl mb-4">
          {title}
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">{subtitle}</p>
      </motion.div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-2 sm:grid-cols-2 lg:grid-cols-3">
        {clinic.services.map((service, index) => {
          const Icon = icons[index] ?? Sparkles
          return (
            <MotionCard
              key={service.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -12, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-[0_20px_70px_-40px_rgba(15,25,35,0.28)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_-36px_rgba(15,25,35,0.35)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,107,138,0.12),transparent_30%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardContent className="relative p-8">
                <div className="mb-5 inline-flex rounded-2xl bg-accent-light/80 p-3 transition-all duration-300 group-hover:scale-105 group-hover:bg-accent-light">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-navy">{service.name}</h3>
                <p className="text-base leading-relaxed text-gray-600 transition-colors duration-200 group-hover:text-gray-700">
                  {service.description}
                </p>
              </CardContent>
            </MotionCard>
          )
        })}
      </div>
    </section>
  )
}
