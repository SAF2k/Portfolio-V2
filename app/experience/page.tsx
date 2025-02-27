// app/experience/page.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Server, 
  Network, 
  CloudCog,
  Zap
} from 'lucide-react'

// Memoize the experiences to prevent unnecessary re-renders
const EXPERIENCES = [
  {
    company: 'Omnion Premedia PVT LTD',
    position: 'DevOps Engineer',
    duration: 'Oct 2023 - Present',
    location: 'Udupi, Karnataka',
    icon: CloudCog,
    responsibilities: [
      'Fine-tuned Kubernetes clusters, enhancing scalability by 30% and ensuring seamless microservices operations',
      'Deployed Ceph storage on bare metal servers, improving storage reliability by 25%',
      'Automated Docker container solutions, reducing deployment cycles by 20% and increasing portability',
      'Streamlined hybrid and multi-cloud environments with Anthos, cutting deployment time by 35% and boosting security',
      'Configured and optimized OPNsense firewall for enhanced network security and efficient traffic management'
    ],
    technologies: ['Kubernetes', 'Docker', 'Ceph', 'Anthos', 'OPNsense', 'GitLab CI/CD']
  },
  {
    company: 'Reliance SMART',
    position: 'IT Support & Billing',
    duration: 'May 2021 - Nov 2022',
    location: 'Udupi, Karnataka',
    icon: Server,
    responsibilities: [
      'Maintained 99% uptime for billing systems and in-store technology',
      'Resolved technical issues with a 90% success rate, ensuring smooth customer service',
      'Efficiently managed billing counters with 98% transaction accuracy, minimizing downtime',
      'Acquired hands-on experience in retail IT systems, improving operational efficiency by 15%'
    ],
    technologies: ['Billing Systems', 'IT Support', 'Retail Technology']
  }
] as const

export default function ExperiencePage() {
  // Use static variants to prevent hydration mismatches
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
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="min-h-screen bg-secondary/5 pt-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Page Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Network className="w-8 md:w-10 h-8 md:h-10 text-primary animate-pulse" />
            <h1 className="text-3xl md:text-4xl font-bold 
                           bg-gradient-to-r from-primary to-secondary 
                           text-transparent bg-clip-text">
              Professional Journey
            </h1>
            <Zap className="w-8 md:w-10 h-8 md:h-10 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A chronicle of innovation and expertise in DevOps and Infrastructure Engineering
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <motion.div 
              key={exp.company}
              variants={itemVariants}
              className="bg-card rounded-xl border border-border/30 
                         shadow-sm hover:shadow-md 
                         transition-all p-6"
            >
              {/* Company and Position */}
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <exp.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{exp.position}</h2>
                  <p className="text-muted-foreground text-sm">{exp.company}</p>
                </div>
              </div>

              {/* Duration and Location */}
              <div className="flex justify-between mb-4 text-xs text-muted-foreground">
                <span>{exp.duration}</span>
                <span>{exp.location}</span>
              </div>

              {/* Responsibilities */}
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-secondary/20 px-2 py-1 
                               rounded-full text-xs 
                               text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}