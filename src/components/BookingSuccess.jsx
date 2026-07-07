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
      <CheckCircle2 className="mx-auto h-16 w-16 text-accent" />
      <h3 className="mt-4 font-display text-2xl font-bold">{thanks}</h3>
      <p className="mt-2 text-sm text-gray-500">{book.successMessage}</p>
      <Button
        asChild
        className="mt-6 h-12 bg-accent text-white hover:opacity-90"
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
    <section id="book" className="bg-white px-4 py-16 sm:px-6 sm:py-24">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center font-display text-3xl sm:text-4xl"
      >
        {clinic.ui.sections.book.title}
      </motion.h2>
      <Card className="mx-auto mt-10 max-w-lg border border-gray-100 shadow-xl">
        <CardContent className="p-6">
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
