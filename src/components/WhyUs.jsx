import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Calendar, Heart, MessageCircle, ShieldCheck } from "lucide-react"

const icons = [ShieldCheck, Calendar, MessageCircle, Heart]

export default function WhyUs({ clinic }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { title, subtitle } = clinic.ui.sections.whyUs

  return (
    <section
      id="why"
      className="relative overflow-hidden bg-accent/5 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative text-center font-display text-3xl text-navy sm:text-4xl"
      >
        {title}
      </motion.h2>

      <div className="relative mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-navy/60 sm:text-base">
        {subtitle ||
          "Every detail is designed around your comfort, from your first call to your last checkup."}
      </div>

      <div className="relative mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {clinic.whyUs.map(({ point }, index) => {
          const Icon = icons[index] ?? ShieldCheck
          return (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
              className="rounded-3xl border border-navy/8 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-accent/10">
                <Icon className="size-6 text-accent" />
              </div>
              <p className="text-base font-semibold leading-relaxed text-navy">
                {point}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}