"use client"

import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/brand-icons"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="font-heading text-2xl font-bold tracking-tight">Vamos conversar</h2>
        <p className="mt-3 text-sm text-muted-foreground">São Paulo, Brasil</p>
        <a
          href="mailto:joaopedromangerona@gmail.com"
          className="mt-1 inline-block font-heading text-2xl font-bold tracking-tight transition-colors hover:text-primary"
        >
          joaopedromangerona@gmail.com
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
          <nav className="flex gap-5">
            <a href="#works" className="transition-colors hover:text-primary">Trabalhos</a>
            <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
            <a href="#about" className="transition-colors hover:text-primary">Sobre</a>
          </nav>
          <span>© 2026 JP_MANGERONA</span>
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
