import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SkillsSection } from "@/components/skills-section"
import { WorksSection } from "@/components/works-section"
import { AboutSection } from "@/components/about-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <SkillsSection />
        <WorksSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  )
}
