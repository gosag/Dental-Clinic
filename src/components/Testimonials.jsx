import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials({ clinic }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { title } = clinic.ui.sections.reviews

  return (
    <section id="reviews" className="bg-accent-light px-4 py-16 sm:px-6 sm:py-24">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center font-display text-3xl sm:text-4xl"
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
            <Card className="h-full border border-gray-100 bg-white">
              <CardContent className="p-6">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`size-4 ${star <= review.stars ? "fill-current text-accent" : "text-gray-200"}`}
                    />
                  ))}
                </div>
                <p className="mt-3 font-semibold">{review.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-500 italic">
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
