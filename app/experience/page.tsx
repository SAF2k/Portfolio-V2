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
    company: 'PCube Agency',
    position: 'DevOps Engineer & IT Administrator',
    duration: 'Oct 2022 – Apr 2025',
    location: 'Udupi, Karnataka',
    icon: CloudCog, // Assuming CloudCog is an icon representing DevOps/Cloud
    responsibilities: [
      'Designed and maintained CI/CD pipelines using GitLab, reducing deployment time by 35% and ensuring consistent delivery.',
      'Managed production-grade Kubernetes clusters and Docker containers for orchestrating microservices and application components.',
      'Implemented Infrastructure as Code using Ansible for automated provisioning, configuration, and application deployments.',
      'Monitored system performance and availability using Prometheus, Grafana, and custom alert rules, reducing incident response times by 40%.',
      'Administered secure networking infrastructure including OPNsense firewall, site-to-site VPNs, VLANs, and traffic shaping.',
      'Maintained high-availability MySQL environments with MaxScale + Galera cluster for load balancing and fault tolerance.',
      'Managed Ceph and RAID-based storage clusters for scalable and redundant data storage solutions.',
      'Developed and maintained FTP and NFS services for internal backups and CI/CD artifact storage.',
      'Oversaw Microsoft Azure Active Directory and Office 365 for identity management and hybrid cloud collaboration.',
      'Created and maintained internal documentation, SOPs, and runbooks to streamline onboarding and knowledge transfer.'
    ],
    technologies: ['GitLab CI/CD', 'Kubernetes', 'Docker', 'Ansible', 'Prometheus', 'Grafana', 'OPNsense', 'MySQL', 'MaxScale', 'Galera', 'Ceph', 'RAID', 'FTP', 'NFS', 'Azure Active Directory', 'Office 365']
  },
  {
    company: 'Prime Computers Pvt Ltd',
    position: 'IT Support Engineer',
    duration: 'Apr 2021 – Sep 2022',
    location: 'Udupi, Karnataka',
    icon: Network, // Assuming Network is an icon representing IT Support/Networking
    responsibilities: [
      'Provided support across on-prem and cloud systems, resolving incidents in Windows/Linux/macOS environments.',
      'Deployed and configured network components, POS systems, and endpoint security across branches.',
      'Wrote basic Bash and PowerShell scripts for automating repetitive support tasks and system checks.',
      'Ensured 99% uptime for retail billing infrastructure and implemented backup strategies.',
      'Monitored systems using tools like Zabbix and performed log reviews for proactive issue mitigation.',
      'Streamlined onboarding with Office 365 automation and user provisioning in Active Directory.'
    ],
    technologies: ['Windows', 'Linux', 'macOS', 'Networking', 'POS Systems', 'Endpoint Security', 'Bash', 'PowerShell', 'Zabbix', 'Office 365', 'Active Directory']
  },
  {
    company: 'Crystal Systems',
    position: 'Junior System Assembler & Technician',
    duration: 'Jan 2019 – Mar 2020',
    location: 'Udupi, Karnataka',
    icon: Server,
    responsibilities: [
      'Assembled and configured custom desktops for development, gaming, and business use cases.',
      'Installed Linux and Windows OS images, drivers, and software using bootable tools and prebuilt scripts.',
      'Offered post-deployment troubleshooting and performance tuning based on user needs.',
      'Built systems with focus on thermal management, cable management, and component compatibility.'
    ],
    technologies: ['Linux', 'Windows', 'Hardware Assembly', 'Troubleshooting']
  }
] as const;
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