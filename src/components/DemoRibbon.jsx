import { Badge } from "@/components/ui/badge"

export default function DemoRibbon({ clinic }) {
  const { demo, developer } = clinic.ui

  return (
    <div className="flex items-center justify-center gap-2 bg-navy px-4 py-2 text-center font-mono text-xs text-white">
      <Badge variant="secondary" className="shrink-0">
        {demo.badge}
      </Badge>
      <span>
        {demo.previewPrefix} {clinic.name} —{" "}
        <a
          href={developer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          {developer.name}
        </a>
      </span>
    </div>
  )
}
