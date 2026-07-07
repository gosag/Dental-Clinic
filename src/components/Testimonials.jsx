import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials({ clinic }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { title } = clinic.ui.sections.reviews

  return (
    <section id="reviews" className="bg-[linear-gradient(180deg,rgba(26,107,138,0.08),rgba(255,255,255,1))] px-4 py-16 sm:px-6 sm:py-24">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </motion.h2>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
        {clinic.testimonials.map((review, index) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
          >
            <Card className="h-full rounded-[1.5rem] border border-slate-100 bg-white shadow-[0_16px_60px_-36px_rgba(15,25,35,0.35)]">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-full bg-accent-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Patient story
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`size-4 ${star <= review.stars ? "fill-current text-accent" : "text-gray-200"}`}
                    />
                  ))}
                </div>
                <p className="mt-4 font-semibold text-slate-900">{review.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 italic">
                  {review.text}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
