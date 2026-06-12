"use client"

import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    name: "Nimbus Analytics",
    type: "Web App",
    desc: "Plataforma de dashboards em tempo real com visualizacoes interativas e relatorios automatizados.",
    tag: "Next.js",
  },
  {
    name: "Vault Pay",
    type: "Fintech",
    desc: "Carteira digital com pagamentos instantaneos, cartoes virtuais e controle de gastos.",
    tag: "React Native",
  },
  {
    name: "Lume CMS",
    type: "SaaS",
    desc: "Sistema de gerenciamento de conteudo headless focado em performance e DX.",
    tag: "Node.js",
  },
  {
    name: "Pulse Fit",
    type: "Mobile",
    desc: "Aplicativo de treinos com planos personalizados e acompanhamento de progresso.",
    tag: "Flutter",
  },
]

export function WorksSection() {
  return (
    <section id="works" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-10">
        <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">Trabalhos selecionados</h2>
        <p className="mt-1 text-muted-foreground">Coisas que eu construí</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="size-2 rounded-full bg-primary" />
          <span className="h-0.5 w-32 bg-primary" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href="#"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary"
          >
            <div className="flex items-start justify-between">
              <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {p.tag}
              </span>
              <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
            </div>
            <div className="mt-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{p.type}</p>
              <h3 className="mt-1 font-heading text-2xl font-bold tracking-tight">{p.name}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
