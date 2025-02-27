// components/sections/SkillsSection.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  Cloud, 
  Server, 
  GitBranch, 
  Container,
  Database,
  Code
} from 'lucide-react'

export default function SkillsSection() {
  const skills = [
    { 
      icon: Container, 
      name: 'Containerization', 
      description: 'Kubernetes and Docker orchestration' 
    },
    { 
      icon: Server, 
      name: 'Infrastructure as Code', 
      description: 'Terraform and Ansible automation' 
    },
    { 
      icon: GitBranch, 
      name: 'CI/CD Pipelines', 
      description: 'Jenkins and GitHub Actions' 
    },
    { 
      icon: Database, 
      name: 'Database Management', 
      description: 'MariaDB clustering and tuning' 
    },
    { 
      icon: Code, 
      name: 'Scripting', 
      description: 'Bash and Python automation' 
    },
    { 
      icon: Cloud, 
      name: 'Cloud Engineering', 
      description: 'Multi-cloud strategy' 
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="py-16 bg-secondary/5 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-12 
                     bg-gradient-to-r from-primary 
                     to-secondary text-transparent 
                     bg-clip-text"
        >
          Professional Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="bg-card p-5 rounded-xl 
                         shadow-sm hover:shadow-md 
                         text-center 
                         border border-border/30 
                         hover:border-primary/30 
                         transition-all"
            >
              <div className="bg-primary/10 p-3 rounded-full inline-block mb-3">
                <skill.icon 
                  className="text-primary" 
                  size={36} 
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <p className="text-xs text-muted-foreground">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}