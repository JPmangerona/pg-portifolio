"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ProjectModal, type Project } from "./project-modal"

const projects: Project[] = [
  {
    name: "Collage.fm",
    type: "Destaques",
    desc: "Crie belas colagens musicais a partir do seu Last.fm",
    fullDesc: "Muito animado pra compartilhar meu novo projeto: Collage.fm — uma ferramenta que transforma seus dados do Last.fm em colagens musicais visuais e personalizadas.\n\nComo usuário assíduo do Last.fm e fã de plataformas como TapMusic e LastCollage, decidi criar minha própria versão de um gerador de colagens musicais, com foco em uma interface moderna, responsiva e de alta performance.",
    features: [
      "Gere colagens dos seus álbuns mais ouvidos no Last.fm",
      "Escolha diferentes períodos de tempo (1 semana, 1 mês, 3 meses, 6 meses, 12 meses ou todo o histórico)",
      "Selecione diferentes tamanhos de grade (3x3, 4x4, 5x5 ou 10x10)",
      "Personalize sua colagem com opções de título e contagem de reproduções",
      "Faça o download de imagens em diferentes níveis de qualidade",
      "Interface moderna e responsiva com suporte a modo claro/escuro e navegação acessível",
      "Internacionalização com suporte a Português e Inglês"
    ],
    techStack: [
      "Next.js 15 com App Router",
      "React 19",
      "TailwindCSS 4",
      "Shadcn UI para componentes",
      "Framer Motion para animações",
      "Next-Intl para Internacionalização",
      "React Hook Form e Zod para validação de formulários",
      "Integração com a API do Last.fm"
    ],
    date: "13 de Março de 2025",
    coverImage: "/placeholder.jpg",
    links: {
      demo: "https://collage.fm",
      repo: "https://github.com/JPmangerona",
      linkedin: "https://linkedin.com/in/jp-mangerona"
    }
  },
  {
    name: "The Movie Guide",
    type: "Destaques",
    desc: "Um guia de filmes moderno com interface rica.",
    fullDesc: "Um portal completo para você buscar e favoritar seus filmes preferidos, consumindo uma API externa e mostrando detalhes ricos sobre a produção, elenco e notas.",
    features: [
      "Busca em tempo real com debounce",
      "Página de detalhes com trailer e informações de elenco",
      "Sistema de favoritos usando LocalStorage"
    ],
    techStack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Framer Motion",
      "TMDB API"
    ],
    date: "10 de Fevereiro de 2025",
    coverImage: "/placeholder.jpg",
    links: {
      demo: "https://themovieguide.com",
      repo: "https://github.com/JPmangerona",
      linkedin: "https://linkedin.com/in/jp-mangerona"
    }
  },
  {
    name: "Daily Weather",
    type: "Destaques",
    desc: "Previsão do tempo precisa e em tempo real.",
    fullDesc: "Um aplicativo de clima limpo e direto ao ponto que usa a geolocalização do usuário para entregar a previsão do tempo exata e em tempo real com belas imagens de fundo dinâmicas.",
    features: [
      "Geolocalização automática do usuário",
      "Previsão para os próximos 7 dias",
      "Imagens de fundo que mudam de acordo com o clima atual"
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript Vanilla",
      "OpenWeather API"
    ],
    date: "05 de Janeiro de 2025",
    coverImage: "/placeholder.jpg",
    links: {
      demo: "https://dailyweather.com",
      repo: "https://github.com/JPmangerona",
      linkedin: "https://linkedin.com/in/jp-mangerona"
    }
  }
]

export function WorksSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <section id="works" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10">
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">Destaques</h2>
          <div className="mt-3 flex items-center gap-2">
            <span className="size-2 rounded-full bg-foreground" />
            <span className="h-0.5 w-16 bg-foreground" />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card cursor-pointer border-b-2 border-b-primary transition-all hover:-translate-y-1 hover:shadow-xl"
              onClick={() => setSelectedProject(p)}
              style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
            >
              {/* Cover Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src={p.coverImage} 
                  alt={p.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/50" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <h3 className="font-heading text-2xl font-bold text-white drop-shadow-md text-center">{p.name}</h3>
                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {p.techStack.slice(0, 4).map((tech) => (

                      <span key={tech} className="rounded bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                        {tech.split(' ')[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Hover bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-[120%] flex items-center justify-between p-4 transition-transform duration-300 group-hover:translate-y-0 bg-background/95 backdrop-blur-md border-t border-border rounded-b-xl">
                <span className="text-xs font-medium text-muted-foreground">{p.date}</span>
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Ver mais
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Preview Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  )
}
