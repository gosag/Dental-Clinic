import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "motion/react"
import { Calendar, Heart, MessageCircle, ShieldCheck } from "lucide-react"

const icons = [ShieldCheck, Calendar, MessageCircle, Heart]

export default function WhyUs({ clinic }) {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { title, subtitle } = clinic.ui.sections.whyUs

  return (
    <section
      id="why"
      className="relative isolate overflow-hidden bg-[#eff8f9] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      {/* Soft clinic-inspired background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 -top-36 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-52 -left-32 h-[32rem] w-[32rem] rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(26,107,138,0.11)_1px,transparent_0)] bg-[size:26px_26px] opacity-30" />
      </div>

      <div
        ref={ref}
        className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
      >
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/10 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.17em] text-accent shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            The patient experience
          </div>

          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">
            {subtitle ||
              "Every detail is designed around your comfort, from your first call to your last checkup."}
          </p>

          <div className="mx-auto mt-7 flex max-w-md items-start gap-3 rounded-2xl border border-white/80 bg-white/70 p-4 text-left shadow-sm backdrop-blur lg:mx-0">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-light">
              <Heart className="size-5 text-accent" />
            </div>

            <div>
              <p className="text-sm font-bold text-navy">Care that feels personal</p>
              <p className="mt-1 text-sm leading-5 text-slate-600">
                Thoughtful dentistry for every smile, every visit, and every age.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {clinic.whyUs.map(({ point }, index) => {
            const Icon = icons[index] ?? ShieldCheck
            const number = String(index + 1).padStart(2, "0")

            return (
              <motion.article
                key={point}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.14 + index * 0.09,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/90 p-6 shadow-[0_16px_45px_-32px_rgba(15,48,65,0.45)] backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-accent/20 hover:shadow-[0_24px_55px_-30px_rgba(15,48,65,0.45)] sm:p-7"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/[0.06] transition-transform duration-500 group-hover:scale-150" />

                <div className="relative flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-accent-light text-accent ring-1 ring-accent/10 transition duration-300 group-hover:scale-105 group-hover:bg-accent group-hover:text-white">
                    <Icon className="size-5" strokeWidth={1.9} />
                  </div>

                  <span className="font-display text-xs font-bold tracking-[0.16em] text-slate-300 transition-colors duration-300 group-hover:text-accent/45">
                    {number}
                  </span>
                </div>

                <div className="relative mt-6">
                  <div className="mb-3 h-px w-8 bg-accent/30 transition-all duration-300 group-hover:w-12 group-hover:bg-accent" />
                  <p className="text-base font-bold leading-6 text-navy">{point}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}