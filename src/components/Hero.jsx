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
    <section className="flex min-h-screen items-center justify-center bg-navy bg-[image:repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_12px)] px-4 py-20 text-white">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-3xl text-center"
      >
        <motion.h1
          variants={item}
          className="mx-auto max-w-2xl font-display text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {clinic.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-xl text-lg text-gray-300 sm:text-xl"
        >
          {clinic.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center"
        >
          <Button
            asChild
            className="h-12 w-full bg-accent text-white hover:opacity-90 sm:w-auto"
          >
            <a href={`tel:${clinic.phone}`}>
              <Phone className="size-4" />
              {clinic.ui.hero.callNow}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 w-full border-white/40 text-white hover:bg-white/10 sm:w-auto"
          >
            <a
              href={`https://wa.me/${clinic.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" />
              {clinic.ui.hero.whatsappUs}
            </a>
          </Button>
        </motion.div>

        <motion.div variants={item} className="mt-6 flex flex-wrap justify-center gap-2">
          {clinic.whyUs.slice(0, 3).map(({ point }) => (
            <Badge
              key={point}
              variant="outline"
              className="border-white/30 text-xs text-white/80"
            >
              <CheckCircle2 className="size-3" />
              {point}
            </Badge>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
