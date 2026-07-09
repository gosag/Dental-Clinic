import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactRows = [
  { key: "address", icon: MapPin },
  { key: "phone", icon: Phone },
  { key: "email", icon: Mail },
  { key: "hours", icon: Clock },
]

export default function FindUs({ clinic }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { title, whatsappUs } = clinic.ui.sections.findUs

  return (
    <section id="find-us" className="bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div ref={ref} className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
        {/* solid navy contact card — the one deliberately bold element on the page */}
        <motion.div
          initial={{ x: -32, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-[1.75rem] bg-navy p-6 text-white sm:p-8"
        >
          <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Visit us
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{title}</h2>

          <div className="mt-6 space-y-3 text-sm sm:text-base">
            {clinic.address && (
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent">
                  <MapPin className="size-4 text-white" />
                </span>
                <span className="text-slate-200">{clinic.address}</span>
              </div>
            )}
            {clinic.phone && (
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Phone className="size-4 text-white" />
                </span>
                <a href={`tel:${clinic.phone}`} className="text-slate-200 transition-colors hover:text-white">
                  {clinic.phone}
                </a>
              </div>
            )}
            {clinic.whatsapp && (
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent">
                  <MessageCircle className="size-4 text-white" />
                </span>
                <Button
                  asChild
                  size="sm"
                  className="rounded-full bg-white px-4 text-navy hover:bg-white/90"
                >
                  <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    {whatsappUs}
                  </a>
                </Button>
              </div>
            )}
            {clinic.email && (
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Mail className="size-4 text-white" />
                </span>
                <span className="text-slate-200">{clinic.email}</span>
              </div>
            )}
            {clinic.hours && (
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Clock className="size-4 text-white" />
                </span>
                <span className="text-slate-200">{clinic.hours}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* map card — light, matches the rest of the page */}
        <motion.div
          initial={{ x: 32, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="overflow-hidden rounded-[1.75rem] border border-navy/8 bg-white p-3 shadow-[0_24px_90px_-50px_rgba(18,32,44,0.25)]"
        >
          <iframe
            src={clinic.mapEmbedUrl}
            title={title}
            className="h-72 w-full rounded-[1.5rem] border-0 sm:h-120"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}