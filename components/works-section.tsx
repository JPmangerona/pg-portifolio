"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ProjectModal, type Project } from "./project-modal"

const projects: Project[] = [
  {
    name: "PHP Monolito - Html, Css",
    type: "Projetos",
    desc: "Plataforma de catálogo online desenvolvida com arquitetura robusta em PHP.",
    fullDesc: "Criação de uma plataforma de catálogo digital personalizada utilizando PHP para o portfólio e serviços de Junior Rivoredo. O sistema permite o gerenciamento dinâmico de produtos, categorias e contatos diretos do painel de administração customizado.",
    features: [
      "Painel administrativo sob medida para gerenciar catálogo",
      "Otimização de SEO dinâmico para cada item cadastrado",
      "Sistema de e-mail integrado para solicitações de orçamento",
      "Banco de dados otimizado para consultas rápidas"
    ],
    techStack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "Arquitetura MVC"
    ],
    date: "2025",
    coverImage: "/juniorrivoredo.png",
    links: {
      demo: "https://culinariajuniorrivoredo.up.railway.app/",
      repo: "https://github.com/JPmangerona",
      linkedin: "https://linkedin.com/in/jp-mangerona"
    }
  },
  {
    name: "Typescript - Express, React",
    type: "Projetos",
    desc: "Aplicação web completa para gestão industrial com backend robusto.",
    fullDesc: "Desenvolvimento de um web app corporativo (Minha Fábrica) focado na gestão e monitoramento de processos de fabricação. A aplicação oferece controle de ordens de produção, cadastro de insumos e relatórios analíticos de eficiência das máquinas.",
    features: [
      "Autenticação segura JWT e controle de permissões por cargo (RBAC)",
      "Gestão completa de ordens de serviço e status de produção",
      "Painel analítico (Dashboard) com gráficos de produtividade",
      "Backend modular e escalável com tipagem forte"
    ],
    techStack: [
      "TypeScript",
      "Node.js",
      "Express",
      "React",
      "PostgreSQL",
      "Chart.js"
    ],
    date: "2025",
    coverImage: "/minhafabrica.png",
    links: {
      demo: "https://minhafabrica.up.railway.app/",
      repo: "https://github.com/JPmangerona",
      linkedin: "https://linkedin.com/in/jp-mangerona"
    }
  },
  {
    name: "Nest.js, Next, Multitenant",
    type: "Projetos",
    desc: "Aplicativo web moderno baseado em arquitetura de microsserviços.",
    fullDesc: "Construção de uma aplicação web robusta utilizando a estrutura do Nest.js. O sistema conta com arquitetura limpa (Clean Architecture), injeção de dependência nativa, monitoramento de saúde do app e suporte a múltiplos bancos de dados.",
    features: [
      "Arquitetura escalável modular com Nest.js",
      "Testes automatizados integrados (Jest)",
      "Validação rigorosa de dados com Class-Validator",
      "Documentação de API automática com Swagger/OpenAPI"
    ],
    techStack: [
      "Nest.js",
      "TypeScript",
      "Prisma ORM",
      "Jest",
      "Swagger API"
    ],
    date: "2025",
    coverImage: "/wise.png",
    links: {
      demo: "https://wise-advocacia.up.railway.app/",
      repo: "https://github.com/JPmangerona",
      linkedin: "https://linkedin.com/in/jp-mangerona"
    }
  },
  {
    name: "Página animada",
    type: "Projetos",
    desc: "Fundação da minha própria empresa de automações e desenvolvimento de software.",
    fullDesc: "Criação da Opty Automações, empresa pela qual presto serviços especializados de desenvolvimento de software, integrações de sistemas, automação de processos de negócios e consultoria tecnológica sob medida para diversas empresas parceiras.",
    features: [
      "Prestação de serviços corporativos (B2B) de desenvolvimento de software",
      "Modelagem de integrações e arquitetura de sistemas personalizados",
      "Consultoria de tecnologia e automação de processos internos",
      "Entrega ágil de projetos focados em ganho de eficiência"
    ],
    techStack: [
      "Consultoria B2B",
      "Arquitetura de Software",
      "Integrações de APIs",
      "Automação de Processos"
    ],
    date: "2024",
    coverImage: "/opty2.png",
    links: {
      demo: "https://pg-opty.vercel.app/",
      repo: "https://github.com/JPmangerona",
      linkedin: "https://linkedin.com/in/jp-mangerona"
    }
  },
  {
    name: "Deploy",
    type: "Projetos",
    desc: "Design premium e elegante para escritório de advocacia.",
    fullDesc: "Desenvolvimento de um site institucional de alto padrão voltado para o setor jurídico (advogada). A interface foi projetada com design minimalista e sóbrio, transmitindo confiança, credibilidade e profissionalismo, com área dedicada para artigos e agendamento de consultas online.",
    features: [
      "Design elegante, clean e profissional para o setor de advocacia",
      "Área de Blog/Artigos jurídicos integrada",
      "Agendamento direto de consultas online",
      "Totalmente responsivo e otimizado para dispositivos móveis"
    ],
    techStack: [
      "Next.js",
      "React",
      "TailwindCSS",
      "Framer Motion",
      "Headless CMS"
    ],
    date: "2025",
    coverImage: "/advogada.png",
    links: {
      demo: "https://advocaciajessicalima.com.br/",
      repo: "https://github.com/JPmangerona",
      linkedin: "https://linkedin.com/in/jp-mangerona"
    }
  },
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
                  className="w-full h-full object-cover scale-[1.04] transition-transform duration-500 group-hover:scale-[1.10]"
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
