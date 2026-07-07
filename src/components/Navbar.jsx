import { useState } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { key: "services", id: "services" },
  { key: "doctor", id: "doctor" },
  { key: "reviews", id: "reviews" },
  { key: "book", id: "book" },
  { key: "findUs", id: "find-us" },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export default function Navbar({ clinic }) {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 4px 20px rgba(0,0,0,0.08)"]
  )

  const links = navItems.map(({ key, id }) => ({
    id,
    label: clinic.ui.nav[key],
  }))

  return (
    <motion.nav
      style={{ boxShadow }}
      className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="group rounded-full px-2 py-1 text-left transition-transform hover:scale-[1.02]"
          aria-label={clinic.name}
        >
          <span className="block font-display text-xl font-bold bg-linear-to-r from-navy to-accent bg-clip-text text-transparent">
          {clinic.name}
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="group relative text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-accent"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-accent to-accent/60 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="hidden sm:flex rounded-full bg-linear-to-r from-accent to-accent/80 font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
            onClick={() => scrollTo("book")}
          >
            {clinic.ui.nav.bookNow}
          </Button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-slate-100 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? clinic.ui.nav.closeMenu : clinic.ui.nav.openMenu}
          >
            {open ? <X className="size-5 text-navy" /> : <Menu className="size-5 text-navy" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/60 bg-linear-to-b from-white to-slate-50/80 md:hidden"
          >
            <div className="px-4 py-2">
              {links.map(({ id, label }, index) => (
                <motion.button
                  key={id}
                  type="button"
                  onClick={() => {
                    scrollTo(id)
                    setOpen(false)
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block h-11 w-full rounded-xl px-3 text-left text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-accent-light/70 hover:text-accent"
                >
                  {label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-2 border-t border-slate-200/80 pt-2"
              >
                <Button
                  className="h-10 w-full rounded-full bg-linear-to-r from-accent to-accent/80 font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
                  onClick={() => {
                    scrollTo("book")
                    setOpen(false)
                  }}
                >
                  {clinic.ui.nav.bookNow}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
