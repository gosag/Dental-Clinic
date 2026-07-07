import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FindUs({ clinic }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { title, whatsappUs } = clinic.ui.sections.findUs

  return (
    <section id="find-us" className="bg-linear-to-br from-navy via-[#12202c] to-navy px-4 py-16 text-white sm:px-6 sm:py-24">
      <div ref={ref} className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-2">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-[1.75rem] border border-white/10 bg-white/8 p-6 backdrop-blur-sm sm:p-8"
        >
          <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
            Visit us
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{title}</h2>

          <div className="mt-6 space-y-4 text-sm text-slate-200 sm:text-base">
            <div className="flex items-start gap-3 rounded-2xl bg-white/6 p-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
              <span>{clinic.address}</span>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white/6 p-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-accent" />
              <a href={`tel:${clinic.phone}`} className="text-white transition-colors hover:text-accent-light">
                {clinic.phone}
              </a>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white/6 p-4">
              <MessageCircle className="mt-0.5 size-5 shrink-0 text-accent" />
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/12"
              >
                <a
                  href={`https://wa.me/${clinic.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {whatsappUs}
                </a>
              </Button>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white/6 p-4">
              <Mail className="mt-0.5 size-5 shrink-0 text-accent" />
              <span>{clinic.email}</span>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white/6 p-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-accent" />
              <span>{clinic.hours}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-[1.75rem] border border-white/10 bg-white/8 p-3 shadow-[0_24px_90px_-50px_rgba(0,0,0,0.55)] backdrop-blur-sm"
        >
          <iframe
            src={clinic.mapEmbedUrl}
            title={clinic.ui.sections.findUs.title}
            className="h-72 w-full rounded-[1.5rem] border-0 sm:h-120"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
