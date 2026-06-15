"use client"

import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/brand-icons"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-sm text-muted-foreground"></p>
        <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight">Contatos</h2>
        <a
          href="mailto:joaopedromangerona@gmail.com"
          className="mt-1 block font-heading text-lg font-medium tracking-tight transition-colors hover:text-primary"
        >
          joaopedromangerona@gmail.com
        </a>
        <a
          href="https://wa.me/5543999502889"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 block font-heading text-base font-medium transition-colors hover:text-primary"
        >
          (43) 99950-2889
        </a>
        <div className="mt-8 flex items-center justify-center gap-3">
          {[
            { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/jp-mangerona" },
            { icon: GithubIcon, label: "GitHub", href: "https://github.com/JPmangerona" },
            { icon: YoutubeIcon, label: "YouTube", href: "https://www.youtube.com/@esforcointeligente/featured" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Icon className="size-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-muted-foreground sm:flex-row">
          <span className="font-mono font-bold text-foreground">
            <span className="text-[#820AD1]">{"<"}</span>
            <span>JP_MANGERONA</span>
            <span className="text-[#820AD1]">{"/>"}</span>
          </span>
          <nav className="flex flex-wrap gap-5 justify-center sm:justify-start">
            <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
            <a href="#works" className="transition-colors hover:text-primary">Destaques</a>
            <a href="#about" className="transition-colors hover:text-primary">Ferramentas</a>
            <a href="#experience" className="transition-colors hover:text-primary">Experiência</a>
          </nav>
          <span>© 2026 OPTY Automações.</span>
        </div>
        <div className="flex h-1.5 w-full">
          <span className="flex-1 bg-primary" />
          <span className="flex-1 bg-primary/70" />
          <span className="flex-1 bg-primary/40" />
          <span className="flex-1 bg-foreground/60" />
        </div>
      </div>
    </footer>
  )
}
