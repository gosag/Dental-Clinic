import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FindUs({ clinic }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { title, whatsappUs } = clinic.ui.sections.findUs

  return (
    <section id="find-us" className="bg-navy px-4 py-16 text-white sm:px-6 sm:py-24">
      <div ref={ref} className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 md:grid-cols-2">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
          <div className="mt-4 flex items-center gap-3">
            <MapPin className="size-5 shrink-0 text-accent" />
            <span>{clinic.address}</span>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <Phone className="size-5 shrink-0 text-accent" />
            <a href={`tel:${clinic.phone}`} className="text-accent hover:underline">
              {clinic.phone}
            </a>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <MessageCircle className="size-5 shrink-0 text-accent" />
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white/10"
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
          <div className="mt-4 flex items-center gap-3">
            <Mail className="size-5 shrink-0 text-accent" />
            <span>{clinic.email}</span>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <Clock className="size-5 shrink-0 text-accent" />
            <span>{clinic.hours}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <iframe
            src={clinic.mapEmbedUrl}
            title={clinic.ui.sections.findUs.title}
            className="h-64 w-full rounded-xl border-0 sm:h-80"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
