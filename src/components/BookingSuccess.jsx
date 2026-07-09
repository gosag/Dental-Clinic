import { useRef } from "react"
import { AnimatePresence, motion, useInView } from "motion/react"
import { CheckCircle2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function BookingSuccess({ clinic, name }) {
  const { book } = clinic.ui.sections
  const thanks = book.successThanks.replace("{name}", name)

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="py-8 text-center"
    >
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent-light">
        <CheckCircle2 className="h-10 w-10 text-accent" />
      </div>
      <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">{thanks}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{book.successMessage}</p>
      <Button
        asChild
        className="mt-6 h-12 rounded-full bg-accent px-6 font-semibold text-white hover:opacity-90"
      >
        <a
          href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(book.whatsappPrefill)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="size-4" />
          {book.openWhatsapp}
        </a>
      </Button>
    </motion.div>
  )
}

export function BookingFormWrapper({ clinic, submitted, name, children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="book" className="bg-linear-to-b from-white to-slate-50 px-4 py-16 sm:px-6 sm:py-24">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {clinic.ui.sections.book.title}
      </motion.h2>
      <Card className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-[0_24px_90px_-50px_rgba(15,25,35,0.45)]">
        <CardContent className="p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {submitted ? (
              <BookingSuccess key="success" clinic={clinic} name={name} />
            ) : (
              <motion.div
                key="form"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </section>
  )
}
