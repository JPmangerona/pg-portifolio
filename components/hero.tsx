"use client"

import { motion } from "motion/react"
import { Download } from "lucide-react"
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/brand-icons"

const socials = [
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/jp-mangerona" },
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/JPmangerona" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://www.youtube.com/@esforcointeligente/featured" },
]

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative">
          <div className="hidden md:flex absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 flex-col gap-5">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="size-5" aria-hidden="true" />
              </a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background"
          >
            I am
            <span className="absolute -bottom-1.5 left-6 size-3 rotate-45 bg-foreground" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-balance md:text-6xl"
          >
            João Pedro
            <br />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 text-sm font-semibold uppercase tracking-widest text-[#820AD1]"
          >
            Dev Fullstack
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground"
          >
            Desenvolvedor Fullstack focado no ecossistema TypeScript. Curso Atualmente Pós-Graduação em Engenharia de IA Aplicada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#works"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Download CV
              <Download className="size-4" aria-hidden="true" />
            </a>
            <div className="flex items-center gap-4 md:hidden">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <img
            src="/portrait.png"
            alt="Retrato ilustrado de Mateus Andrade"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}
