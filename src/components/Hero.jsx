import { motion } from "motion/react"
import { CheckCircle2, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function Hero({ clinic }) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-linear-to-br from-navy via-[#12202c] to-navy px-4 py-20 text-white before:absolute before:inset-0 before:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_12px)] before:bg-[size:64px_64px]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-5xl text-center"
      >
        <motion.div
          variants={item}
          className="mx-auto mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/75 backdrop-blur-sm"
        >
          Modern dental care in Adama
        </motion.div>

        <motion.h1
          variants={item}
          className="mx-auto max-w-4xl font-display text-5xl font-bold leading-tight bg-linear-to-r from-white via-white to-accent/80 bg-clip-text text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {clinic.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-slate-300 sm:text-xl md:text-2xl"
        >
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center"
        >
          <Button
            asChild
            className="h-12 w-full rounded-full bg-linear-to-r from-accent to-accent/80 px-8 font-semibold text-white transition-all duration-200 hover:shadow-2xl hover:shadow-accent/40 sm:w-auto"
          >
            <a href={`tel:${clinic.phone}`}>
              <Phone className="size-5 mr-2" />
              {clinic.ui.hero.callNow}
            </a>
          </Button>
          <Button
            asChild
            className="h-12 w-full rounded-full border border-white/25 bg-white/8 px-8 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/50 hover:bg-white/15 sm:w-auto"
          >
            <a
              href={`https://wa.me/${clinic.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-5 mr-2" />
              {clinic.ui.hero.whatsappUs}
            </a>
          </Button>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap justify-center gap-3">
          {clinic.whyUs.slice(0, 3).map(({ point }) => (
            <Badge
              key={point}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 sm:text-sm"
            >
              <CheckCircle2 className="mr-1.5 size-4 shrink-0" />
              {point}
            </Badge>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex gap-2">
          <div className="h-6 w-1 rounded-full bg-white/30" />
        </div>
      </motion.div>
    </section>
  )
}
