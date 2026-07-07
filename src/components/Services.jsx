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
    <section id="services" className="bg-accent-light px-4 py-16 sm:px-6 sm:py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-6xl text-center"
      >
        <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-gray-500">{subtitle}</p>
      </motion.div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {clinic.services.map((service, index) => {
          const Icon = icons[index] ?? Sparkles
          return (
            <MotionCard
              key={service.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="border border-gray-100 bg-white"
            >
              <CardContent className="p-6">
                <Icon className="mb-3 h-8 w-8 text-accent" />
                <h3 className="text-base font-semibold">{service.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">
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
