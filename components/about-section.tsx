"use client"

import { motion } from "motion/react"

type TechItem = {
  initials: string
  name: string
  color: string
}

type TechCategory = {
  title: string
  items: TechItem[]
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Framework",
    items: [
      { initials: "E", name: "Express", color: "from-blue-950 to-blue-900 border-blue-800 text-blue-400" },
      { initials: "Ne", name: "Nest.js", color: "from-red-950 to-red-900 border-red-800 text-red-400" },
      { initials: "SB", name: "Spring Boot", color: "from-green-950 to-green-900 border-green-800 text-green-400" },
      { initials: "R", name: "React", color: "from-cyan-950 to-cyan-900 border-cyan-800 text-cyan-400" },
      { initials: "N", name: "Next.js", color: "from-zinc-800 to-zinc-900 border-zinc-700 text-zinc-300" },
    ],
  },
  {
    title: "Linguagens",
    items: [
      { initials: "Ts", name: "TypeScript", color: "from-blue-950 to-blue-900 border-blue-800 text-blue-400" },
      { initials: "J", name: "Java", color: "from-red-950 to-red-900 border-red-800 text-red-400" },
      { initials: "P", name: "PHP", color: "from-indigo-950 to-indigo-900 border-indigo-800 text-indigo-400" },
    ],
  },
  {
    title: "BANCOS",
    items: [
      { initials: "P", name: "PostgreSQL", color: "from-blue-950 to-blue-900 border-blue-800 text-blue-400" },
      { initials: "My", name: "MySQL", color: "from-orange-950 to-orange-900 border-orange-850 text-orange-400" },
      { initials: "M", name: "MongoDB", color: "from-green-950 to-green-900 border-green-800 text-green-400" },
    ],
  },
  {
    title: "DEVOPS",
    items: [
      { initials: "R", name: "Railway", color: "from-emerald-950 to-emerald-900 border-emerald-800 text-emerald-400" },
      { initials: "G", name: "GitHub", color: "from-zinc-800 to-zinc-900 border-zinc-700 text-zinc-300" },
      { initials: "D", name: "Docker", color: "from-sky-950 to-sky-900 border-sky-850 text-sky-400" },
    ],
  },
  {
    title: "OUTROS",
    items: [
      { initials: "O", name: "Obsidian", color: "from-indigo-950 to-indigo-900 border-indigo-800 text-indigo-400" },
      { initials: "IA", name: "Codex, Claude e Antigravity", color: "from-blue-950 to-blue-900 border-blue-800 text-blue-400" },
      { initials: "UML", name: "Astah UML", color: "from-blue-950 to-blue-900 border-blue-800 text-blue-400" },
      { initials: "n8n", name: "n8n", color: "from-red-950 to-red-900 border-red-800 text-red-400" },
    ],
  },


]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      {/* Title section */}
      <div className="mb-10">
        <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">Ferramentas</h2>
        <div className="mt-3 flex items-center gap-2">
          <span className="size-2 rounded-full bg-foreground" />
          <span className="h-0.5 w-16 bg-foreground" />
        </div>
      </div>

      {/* Grid container */}
      <div className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 md:p-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x-0 md:divide-x-0 lg:divide-x divide-border">
          {TECH_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className={`flex flex-col gap-5 ${idx > 0 ? "pt-6 sm:pt-0 lg:pl-6" : ""}`}
            >
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground/70">
                {cat.title}
              </h3>

              <ul className="flex flex-col gap-3.5">
                {cat.items.map((item) => (
                  <motion.li
                    key={item.name}
                    className="flex items-center gap-3 group cursor-default"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Circle Badge with Initials */}
                    <div className={`flex size-7 shrink-0 items-center justify-center rounded-lg border bg-gradient-to-br ${item.color} font-mono text-[10px] font-bold shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-[#820AD1]/10`}>
                      {item.initials}
                    </div>

                    {/* Tech Name */}
                    <span className="text-sm font-medium text-foreground/85 transition-colors duration-200 group-hover:text-[#820AD1]">
                      {item.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
