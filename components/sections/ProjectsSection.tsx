// components/sections/ProjectsSection.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  Server, 
  GitBranch, 
  Database, 
  Container
} from 'lucide-react'

export default function ProjectsSection() {
 const projects = [
   {
     name: 'Bare Metal Virtualization',
     icon: Server,
     description: 'Advanced virtualization using KVM and Proxmox, transforming physical infrastructure into flexible virtual environments.',
     technologies: ['KVM', 'Proxmox', 'Linux'],
     impact: [
       'Increased server utilization by 70%',
       'Reduced hardware costs',
       'Improved disaster recovery'
     ]
   },
   {
     name: 'High-Performance Clustering',
     icon: Container,
     description: 'Deployed high-availability bare metal cluster for mission-critical applications, ensuring maximum uptime.',
     technologies: ['MariaDB', 'Load Balancing', 'DRBD'],
     impact: [
       'Achieved 99.99% system uptime',
       'Implemented seamless failover',
       'Optimized resource allocation'
     ]
   },
   {
     name: 'Network Infrastructure',
     icon: GitBranch,
     description: 'Restructured on-premises network with advanced routing, security, and monitoring solutions.',
     technologies: ['OPNsense', 'Cisco', 'VLANs'],
     impact: [
       'Improved network security',
       'Reduced network latency by 40%',
       'Enhanced threat detection'
     ]
   },
   {
     name: 'Enterprise Backup System',
     icon: Database,
     description: 'Developed robust backup and disaster recovery solution for large-scale infrastructure.',
     technologies: ['Bacula', 'ZFS', 'RAID'],
     impact: [
       'Implemented comprehensive backup strategy',
       'Reduced recovery time',
       'Ensured data protection'
     ]
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
          Professional Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="bg-card p-5 rounded-xl 
                         shadow-sm hover:shadow-md 
                         border border-border/30 
                         hover:border-primary/30 
                         transition-all"
            >
              <div className="flex items-center mb-3">
                <project.icon 
                  className="mr-3 text-primary" 
                  size={36} 
                />
                <h3 className="text-xl font-semibold">{project.name}</h3>
              </div>
              <p className="text-muted-foreground mb-3 text-sm">
                {project.description}
              </p>
              <div className="mb-3">
                <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-secondary/10 px-2 py-1 
                                 rounded-full 
                                 text-xs 
                                 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm">Impact:</h4>
                <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                  {project.impact.map((item, impactIndex) => (
                    <li key={impactIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}