import HeroSection from '@/components/sections/HeroSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
import { AnimatedBackground } from '@/components/ui/layout/AnimatedBackground'

export default function Home() {
  return (
    <AnimatedBackground>
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
    </AnimatedBackground>
  )
}