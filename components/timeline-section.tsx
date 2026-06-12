"use client"

import { useState } from "react"
import { motion } from "motion/react"

type ExperienceType = "Carreira" | "Projetos"

type Experience = {
  id: string
  year: string
  title: string
  company: string
  description: string
  type: ExperienceType
  image?: string
}

// Ordem cronológica: de trás para frente (mais antigas primeiro)
const EXPERIENCES: Experience[] = [
  {
    id: "1",
    year: "2017",
    title: "1º Emprego / Planfleteiro",
    company: "Supermercado",
    description: "Quando tinha 11 anos queria ter meu primeiro dinheiro, estudava de tarde e de manhã trabalhava",
    type: "Carreira",
    image: "/entregador-de-planfleto.jpeg",
  },
  {
    id: "2",
    year: "2020",
    title: "Garçom",
    company: "Restaurante",
    description: "Trabalhava de segunda a segunda, porém chegou a pandemia então passaram me chamar só nos fins de semana.",
    type: "Carreira",
    image: "/garçom.jpeg",
  },
  {
    id: "3",
    year: "2020",
    title: "Vendedor Ambulante",
    company: "Trabalho Autônomo",
    description: "Como morava em uma cidade pequena, precisei vir para Londrina para poder vender produtos.",
    type: "Carreira",
    image: "/ambulante.jpeg",
  },
  {
    id: "4",
    year: "202X",
    title: "Funcionário",
    company: "RG Car",
    description: "Atuação nas operações diárias da loja, entendendo o mercado automotivo e rotinas administrativas.",
    type: "Carreira",
    image: "/funcionario.jpeg",
  },
  {
    id: "5",
    year: "202X",
    title: "Implementação do Bling (ERP)",
    company: "RG Car",
    description: "Liderei a integração e configuração do sistema Bling, otimizando todo o controle de estoque e notas fiscais.",
    type: "Projetos",
  },
  {
    id: "6",
    year: "202X",
    title: "Gerente",
    company: "RG Car",
    description: "Promoção a gerente. Responsável pela liderança da equipe, estratégias de vendas e gestão geral da loja.",
    type: "Carreira",
    image: "/gerente.jpeg",
  },
  {
    id: "7",
    year: "202X",
    title: "Implementação de Site Online",
    company: "RG Car",
    description: "Desenvolvimento e lançamento do e-commerce/vitrine virtual da loja, expandindo as vendas para o meio digital.",
    type: "Projetos",
  },
]

export function TimelineSection() {
  const [showCareer, setShowCareer] = useState(true)
  const [showProjects, setShowProjects] = useState(true)

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (exp.type === "Carreira" && showCareer) return true
    if (exp.type === "Projetos" && showProjects) return true
    return false
  })

  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">Experiência</h2>
        <p className="mt-1 text-muted-foreground">Minha trajetória acadêmica e profissional</p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="h-0.5 w-16 bg-foreground" />
          <span className="text-xs font-bold uppercase tracking-widest text-foreground">Trajetória</span>
          <span className="h-0.5 w-16 bg-foreground" />
        </div>
      </div>

      <div className="mb-12 flex flex-wrap items-center justify-center gap-6">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={showCareer}
            onChange={(e) => setShowCareer(e.target.checked)}
            className="size-4 cursor-pointer accent-foreground"
          />
          <span className="text-sm font-semibold text-foreground">Carreira</span>
        </label>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={showProjects}
            onChange={(e) => setShowProjects(e.target.checked)}
            className="size-4 cursor-pointer accent-foreground"
          />
          <span className="text-sm font-semibold text-foreground">Projetos</span>
        </label>
      </div>

      {filteredExperiences.length === 0 ? (
        <div className="text-center text-muted-foreground py-10">
          Selecione pelo menos um tipo de experiência para conhecer minha trajetória.
        </div>
      ) : (
        <div className="relative mx-auto max-w-5xl">
          {/* Linha vertical central */}
          <div className="absolute bottom-0 left-[15px] top-0 w-0.5 bg-foreground/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {filteredExperiences.map((exp, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="relative flex flex-col pl-12 md:flex-row md:items-center md:justify-between md:pl-0"
                >
                  {/* Ponto central */}
                  <div className="absolute left-0 top-6 flex size-[32px] items-center justify-center rounded-full border-4 border-background bg-foreground md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2" />

                  {/* Lado esquerdo (Desktop) ou Topo (Mobile) */}
                  <div
                    className={`w-full md:w-5/12 text-left ${isEven ? "md:pr-8" : "md:order-last md:pl-8"
                      }`}
                  >
                    <div className="flex flex-col sm:flex-row overflow-hidden rounded-lg border-2 border-foreground/10 bg-card shadow-sm transition-shadow hover:shadow-md">
                      {exp.image && (
                        <div className="sm:w-2/5 shrink-0">
                          <img
                            src={exp.image}
                            alt={exp.company}
                            className="h-48 sm:h-full w-full object-cover bg-muted"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className={`flex flex-col justify-center p-6 ${exp.image ? 'sm:w-3/5' : 'w-full'}`}>
                        <div className="mb-2 flex items-center justify-between md:hidden">
                          <span className="text-xs font-bold text-foreground">{exp.year}</span>
                          <span className="text-xs font-semibold text-muted-foreground">{exp.type}</span>
                        </div>
                        <h3 className="text-lg font-bold leading-tight text-foreground">{exp.title}</h3>
                        <p className="font-medium text-muted-foreground">{exp.company}</p>
                        <p className="mt-3 text-sm text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Lado direito (Data e Tipo apenas no Desktop) */}
                  <div
                    className={`hidden w-full md:block md:w-5/12 ${isEven ? "md:order-last md:pl-8 text-left" : "md:pr-8 text-right"
                      }`}
                  >
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-foreground">{exp.year}</span>
                      <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}
