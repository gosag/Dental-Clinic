import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { ChevronDown } from "lucide-react"
import { Accordion as AccordionPrimitive } from "radix-ui"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

function FaqTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all outline-none hover:underline",
          className
        )}
        {...props}
      >
        {children}
        <motion.span
          className="inline-flex shrink-0 text-muted-foreground transition-transform duration-200 ease-out group-data-[state=open]:rotate-180"
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function FaqItem({ item, index }) {
  return (
    <AccordionItem value={`item-${index}`}>
      <FaqTrigger>{item.q}</FaqTrigger>
      <AccordionContent className="text-sm leading-relaxed text-gray-500">
        {item.a}
      </AccordionContent>
    </AccordionItem>
  )
}

export default function FAQ({ clinic }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { title } = clinic.ui.sections.faq

  return (
    <section id="faq" className="bg-white px-4 py-16 sm:px-6 sm:py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-center font-display text-3xl sm:text-4xl">{title}</h2>
        <Accordion type="single" collapsible className="mx-auto mt-10 max-w-2xl">
          {clinic.faq.map((item, index) => (
            <FaqItem key={item.q} item={item} index={index} />
          ))}
        </Accordion>
      </motion.div>
    </section>
  )
}
