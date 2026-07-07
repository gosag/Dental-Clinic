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
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <span className="font-display text-lg font-bold">{clinic.name}</span>

        <div className="hidden items-center gap-6 md:flex">
          {links.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="text-sm text-gray-600 transition-colors hover:text-navy"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="bg-accent text-white hover:opacity-90"
            onClick={() => scrollTo("book")}
          >
            {clinic.ui.nav.bookNow}
          </Button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? clinic.ui.nav.closeMenu : clinic.ui.nav.openMenu}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t md:hidden"
          >
            {links.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  scrollTo(id)
                  setOpen(false)
                }}
                className="flex h-12 w-full items-center px-4 text-sm text-gray-700 hover:bg-gray-50"
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
