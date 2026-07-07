import { Separator } from "@/components/ui/separator"

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
    <footer className="bg-[#070e16] px-4 py-12 text-gray-400">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-start">
        <div className="flex-1">
          <p className="font-display text-xl text-white">{clinic.name}</p>
          <p className="mt-2 text-sm">{clinic.tagline}</p>
        </div>

        <Separator orientation="vertical" className="hidden bg-white/10 md:block md:h-auto md:self-stretch" />

        <div className="flex-1">
          <nav className="flex flex-col gap-2">
            {navLinks.map(({ key, id }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="text-left text-sm transition-colors hover:text-white"
              >
                {clinic.ui.nav[key]}
              </button>
            ))}
          </nav>
        </div>

        <Separator orientation="vertical" className="hidden bg-white/10 md:block md:h-auto md:self-stretch" />

        <div className="flex-1">
          <p className="text-sm">
            {footer.siteBy}
            <a
              href={developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {developer.name}
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-5xl border-t border-white/10 pt-6 text-center text-xs">
        © {year} {clinic.name}. {footer.previewNote}
      </div>
    </footer>
  )
}
