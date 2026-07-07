import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Calendar, Heart, MessageCircle, ShieldCheck } from "lucide-react"

const icons = [ShieldCheck, Calendar, MessageCircle, Heart]

export default function WhyUs({ clinic }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { title } = clinic.ui.sections.whyUs

  return (
    <section id="why" className="bg-navy px-4 py-16 text-white sm:px-6 sm:py-24">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center font-display text-3xl sm:text-4xl"
      >
        {title}
      </motion.h2>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {clinic.whyUs.map(({ point }, index) => {
          const Icon = icons[index] ?? ShieldCheck
          return (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
            >
              <Icon className="mb-4 h-10 w-10 text-accent" />
              <p className="text-base font-semibold">{point}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
