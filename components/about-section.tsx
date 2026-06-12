"use client"

import { motion } from "motion/react"

const paragraphs = [
  "Sou um engenheiro de software com conhecimento solido e experiencia no universo em constante evolucao da tecnologia. Como pessoa, tenho forte disciplina para aprender, melhorar e evoluir.",
  "Minha carreira foi marcada pela dedicacao a excelencia tecnica, com expertise no ecossistema JavaScript, onde aprimorei minhas habilidades para entregar solucoes eficientes e centradas no usuario.",
  "Quando nao estou programando, geralmente estou jogando xadrez, futebol, video games ou assistindo a um bom filme de ficcao cientifica.",
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">README</h2>
        <p className="mt-1 text-muted-foreground">Um pouco sobre mim</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="size-2 rounded-full bg-primary" />
          <span className="h-0.5 w-32 bg-primary" />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { k: "5+", v: "Anos de experiencia" },
            { k: "40+", v: "Projetos entregues" },
            { k: "18", v: "Clientes felizes" },
            { k: "∞", v: "Cafes tomados" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl border border-border bg-card p-5">
              <p className="font-heading text-3xl font-bold text-primary">{s.k}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </motion.div>

        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-pretty leading-relaxed text-muted-foreground"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
