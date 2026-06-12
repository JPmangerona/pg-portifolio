"use client"

import { Moon, Sun, Mail } from "lucide-react"
import { useTheme } from "@/components/use-theme"

const NAV = [
  { label: "Trabalhos", href: "#works" },
  { label: "Skills", href: "#skills" },
  { label: "Sobre", href: "#about" },
]

export function SiteHeader() {
  const { theme, toggleTheme, mounted } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-1 font-mono text-lg font-bold tracking-tight">
          <span className="text-primary">{"<"}</span>
          <span>JP_MANGERONA</span>
          <span className="text-primary">{"/>"}</span>
        </a>

        <div className="hidden items-center gap-2 text-sm text-muted-foreground md:flex">
          <Mail className="size-4" aria-hidden="true" />
          <span>joaopedromangerona@gmail.com</span>
        </div>

        <nav className="flex items-center gap-1 sm:gap-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary sm:px-3"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Alternar modo de cor"
            className="ml-1 inline-flex size-9 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {mounted && theme === "dark" ? (
              <Sun className="size-4" aria-hidden="true" />
            ) : (
              <Moon className="size-4" aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
