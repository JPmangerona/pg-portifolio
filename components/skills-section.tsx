"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "motion/react"
import { Layout, Server, Smartphone } from "lucide-react"

const skills = [
  {
    icon: Layout,
    title: "FRONTEND",
    text: "Construo aplicacoes client-side com recursos modernos como SPA e mantenho um estilo semantico, seguindo boas praticas de SEO usando Next.js, React, TailwindCSS e Motion.",
    tags: ["React", "Next.js", "TailwindCSS", "Motion"],
  },
  {
    icon: Server,
    title: "BACKEND",
    text: "Desenvolvo aplicacoes escalaveis e de facil manutencao usando tecnologias de ponta como Node.js, Docker, Redis, PostgreSQL e MongoDB.",
    tags: ["Node.js", "Docker", "PostgreSQL", "Redis"],
  },
  {
    icon: Smartphone,
    title: "MOBILE",
    text: "Crio aplicativos nativos com experiencia fluida e performatica, focando em interfaces consistentes entre plataformas com React Native e Flutter.",
    tags: ["React Native", "Flutter", "Expo"],
  },
]

function SkillCard({
  skill,
  index,
  total,
  progress,
}: {
  skill: (typeof skills)[number]
  index: number
  total: number
  progress: MotionValue<number>
}) {
  // Each card occupies a slice of the scroll progress.
  const start = index / total
  const end = (index + 1) / total
  const clamp = (n: number) => Math.min(1, Math.max(0, n))

  // Build a monotonically increasing set of offsets within [0, 1].
  const inStart = clamp(start - 0.12)
  const fadeOutStart = clamp(end - 0.05)

  const opacity = useTransform(
    progress,
    [inStart, start, fadeOutStart, end],
    [index === 0 ? 1 : 0, 1, 1, index === total - 1 ? 1 : 0.35],
  )
  const scale = useTransform(progress, [start, end], [1, index === total - 1 ? 1 : 0.92])
  const y = useTransform(progress, [inStart, start], [index === 0 ? 0 : 60, 0])
  const Icon = skill.icon

  return (
    <motion.div
      style={{ opacity, scale, y, zIndex: index }}
      className="absolute inset-0 flex items-center"
    >
      <div className="grid w-full gap-8 rounded-2xl border border-border bg-card p-8 shadow-sm md:grid-cols-[1.1fr_1fr] md:p-12">
        <div>
          <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="size-6" aria-hidden="true" />
          </div>
          <h3 className="mt-5 font-heading text-2xl font-bold tracking-tight">{skill.title}</h3>
          <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">{skill.text}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {skill.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div
            className="flex aspect-square w-full max-w-[220px] items-center justify-center rounded-2xl bg-primary/5 font-mono text-7xl font-bold text-primary/30"
            aria-hidden="true"
          >
            0{index + 1}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  return (
    <section id="skills" ref={sectionRef} className="relative" style={{ height: `${skills.length * 100}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-8">
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">Minhas principais skills</h2>
            <p className="mt-1 text-muted-foreground">O que eu faço</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" />
              <span className="h-0.5 w-32 bg-primary" />
            </div>
          </div>

          <div className="relative h-[340px] md:h-[360px]">
            {skills.map((skill, i) => (
              <SkillCard
                key={skill.title}
                skill={skill}
                index={i}
                total={skills.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
