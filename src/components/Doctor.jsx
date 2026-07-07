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
        >
          {clinic.doctor.photo ? (
            <img
              src={clinic.doctor.photo}
              alt={clinic.doctor.name}
              className="aspect-square w-full rounded-2xl object-cover shadow-lg"
            />
          ) : (
            <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-accent">
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
          <Badge variant="secondary">{eyebrow}</Badge>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            {clinic.doctor.name}
          </h2>
          <p className="mt-2 flex items-center gap-2 font-mono text-sm text-gray-400">
            <Award className="size-4 shrink-0" />
            {clinic.doctor.credentials}
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            {clinic.doctor.bio}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {credentials.map((cred) => (
              <Badge key={cred} className="bg-accent-light text-accent">
                {cred}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
