import { Separator } from "@/components/ui/separator"
import { Smile } from "lucide-react"

const navLinks = [
  { key: "services", id: "services" },
  { key: "doctor", id: "doctor" },
  { key: "reviews", id: "reviews" },
  { key: "book", id: "book" },
  { key: "findUs", id: "find-us" },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export default function Footer({ clinic }) {
  const year = new Date().getFullYear()
  const { developer, footer } = clinic.ui

  return (
    <>
    <footer className="bg-navy px-4 py-12 text-slate-400 sm:py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-accent/15">
              <Smile className="size-4 text-accent" />
            </span>
            <p className="font-display text-xl text-white">{clinic.name}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">{clinic.tagline}</p>
        </div>

        <Separator className="bg-white/10 md:hidden" />
        <Separator orientation="vertical" className="hidden bg-white/10 md:block md:h-auto md:self-stretch" />

        <div className="flex-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Explore
          </p>
          <nav className="flex flex-col gap-2.5">
            {navLinks.map(({ key, id }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="w-fit text-left text-sm transition-colors hover:text-white"
              >
                {clinic.ui.nav[key]}
              </button>
            ))}
          </nav>
        </div>

        <Separator className="bg-white/10 md:hidden" />
        <Separator orientation="vertical" className="hidden bg-white/10 md:block md:h-auto md:self-stretch" />

        <div className="flex-1">
          <p className="flex flex-wrap items-center gap-1 text-sm leading-relaxed">
            <span>{footer.siteBy}</span>
            <a
              href={developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent transition-colors hover:text-accent/80 hover:underline"
            >
              {developer.name}
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-slate-500">
        © {year} {clinic.name}. {footer.previewNote}
      </div>
    </footer>
    </>
  )
}