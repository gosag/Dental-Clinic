import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function getInitials(name) {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export default function Doctor({ clinic }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { eyebrow } = clinic.ui.sections.doctor
  const credentials = clinic.doctor.credentials
    .split(/[—,]/)
    .map((part) => part.trim())
    .filter(Boolean)

  return (
    <section id="doctor" className="bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div ref={ref} className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/12 via-transparent to-accent-light blur-2xl" />
          {clinic.doctor.photo ? (
            <img
              src={clinic.doctor.photo}
              alt={clinic.doctor.name}
              className="aspect-square w-full rounded-[1.75rem] object-cover shadow-[0_24px_80px_-36px_rgba(15,25,35,0.35)]"
            />
          ) : (
            <div className="flex aspect-square w-full items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-accent to-[#0f5470] shadow-[0_24px_80px_-36px_rgba(15,25,35,0.35)]">
              <span className="font-display text-7xl text-white">
                {getInitials(clinic.doctor.name)}
              </span>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge className="rounded-full bg-accent-light px-3 py-1 text-accent">{eyebrow}</Badge>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {clinic.doctor.name}
          </h2>
          <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <Award className="size-4 shrink-0" />
            {clinic.doctor.credentials}
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            {clinic.doctor.bio}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {credentials.map((cred) => (
              <Badge key={cred} className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 hover:bg-accent-light hover:text-accent transition-colors">
                {cred}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
