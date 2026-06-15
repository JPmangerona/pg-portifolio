"use client"

import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"

export type Project = {
  name: string
  type: string
  desc: string
  fullDesc: string
  features: string[]
  techStack: string[]
  date: string
  coverImage: string
  videoUrl?: string
  links: {
    demo: string
    repo: string
    linkedin: string
  }
}

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
            className="relative flex w-full max-w-5xl max-h-[85vh] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl md:flex-row"
          >
            {/* Left side: Media & Links */}
            <div className="flex w-full flex-col border-b border-border md:w-1/2 lg:w-[55%] md:border-b-0 md:border-r">
              <div className="relative h-56 w-full bg-[#FAF8F5] md:h-auto md:flex-1 overflow-hidden flex items-center justify-center">
                {project.videoUrl ? (
                  <iframe
                    src={project.videoUrl}
                    className="h-full w-full object-cover"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full overflow-hidden flex items-center justify-center">
                    <img
                      src={project.coverImage || "/placeholder.jpg"}
                      alt={project.name}
                      className="w-full h-auto scale-[1.04]"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-3 bg-muted/10 p-5 border-t border-border">
                <a
                  href={project.links.demo || "#"}
                  target={project.links.demo ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#820AD1] hover:bg-[#820AD1]/95 text-white dark:bg-white dark:hover:bg-white/90 dark:text-black px-4 py-2 text-sm font-medium transition-colors shadow-sm"
                >
                  Abrir site
                </a>
                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    Acessar repositório
                  </a>
                )}
              </div>
            </div>

            {/* Right side: Content */}
            <div className="flex w-full flex-col md:w-1/2 lg:w-[45%] max-h-[85vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-border p-5">
                <h2 className="font-heading text-xl font-bold text-foreground">{project.name}</h2>
                <button
                  onClick={onClose}
                  className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  aria-label="Fechar"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="flex-1 p-5 space-y-5">
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.fullDesc}
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-foreground mb-2 text-xs uppercase tracking-wider">
                    ✨ Principais funcionalidades
                  </h3>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-foreground mb-2 text-xs uppercase tracking-wider">
                    🚀 Tecnologias utilizadas
                  </h3>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    {project.techStack.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-border/50">
                  <p className="text-xs text-primary font-medium">{project.date}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
