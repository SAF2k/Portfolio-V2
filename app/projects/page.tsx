// app/projects/page.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Server, 
  Github, 
  ExternalLink, 
  CloudCog,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const CATEGORIES = ['All', 'DevOps', 'Next.js', 'Cloud Infrastructure', 'Containerization']

const PROJECTS = [
  {
    title: 'Kubernetes Microservices Platform',
    description: 'Scalable microservices architecture with advanced Kubernetes orchestration and multi-cloud deployment.',
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'AWS EKS', 'Helm'],
    category: 'DevOps',
    githubLink: 'https://github.com/saf2k/k8s-microservices',
    liveLink: '#',
    image: '/images.png'
  },
  {
    title: 'Next.js Restaurant Management System',
    description: 'Full-stack web application with serverless architecture, real-time analytics, and robust authentication.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel'],
    category: 'Next.js',
    githubLink: 'https://github.com/saf2k/restaurant-management',
    liveLink: 'https://restaurant-management.vercel.app',
    image: '/images.png'
  },
  {
    title: 'CI/CD Pipeline Automation',
    description: 'Comprehensive CI/CD solution with automated testing, security scanning, and multi-environment deployments.',
    technologies: ['GitHub Actions', 'Docker', 'Terraform', 'SonarQube', 'Prometheus'],
    category: 'DevOps',
    githubLink: 'https://github.com/saf2k/cicd-automation',
    liveLink: '#',
    image: '/images.png'
  },
  {
    title: 'Cloud-Native Next.js Application',
    description: 'Serverless Next.js application with distributed tracing, performance monitoring, and auto-scaling.',
    technologies: ['Next.js', 'AWS Lambda', 'CloudWatch', 'OpenTelemetry', 'Grafana'],
    category: 'Next.js',
    githubLink: 'https://github.com/saf2k/cloud-native-nextjs',
    liveLink: 'https://cloud-native-app.vercel.app',
    image: '/images.png'
  }
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-blob top-1/4 left-1/4"></div>
        <div className="absolute w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000 top-1/2 right-1/4"></div>
        <div className="absolute w-64 h-64 bg-destructive/20 rounded-full blur-3xl animate-blob animation-delay-4000 bottom-1/4 left-1/2"></div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10 mt-16">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="flex justify-center items-center space-x-2 md:space-x-4 mb-4 md:mb-6">
            <CloudCog className="w-8 md:w-10 h-8 md:h-10 text-primary animate-bounce" />
            <h1 className="text-2xl md:text-5xl font-bold 
                           bg-gradient-to-r from-primary to-secondary 
                           text-transparent bg-clip-text">
              DevOps & Infrastructure Projects
            </h1>
            <Server className="w-8 md:w-10 h-8 md:h-10 text-yellow-500 animate-pulse" />
          </div>
          <p className="mt-2 md:mt-4 text-muted-foreground max-w-2xl mx-auto text-xs md:text-lg px-2">
            Showcasing innovative DevOps solutions, cloud-native architectures, 
            and scalable infrastructure projects that demonstrate 
            advanced technological expertise.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center space-x-2 md:space-x-4 mb-8 flex-wrap"
        >
          {CATEGORIES.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              size="sm"
              className={`m-1
                ${selectedCategory === category 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground'}
              `}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-secondary/5 rounded-2xl border border-border/30 
                       shadow-xl backdrop-blur-sm overflow-hidden 
                       hover:border-primary/30 transition-all"
          >
            {/* Project Image */}
            <div className="relative">
              <Image 
                src={project.image} 
                alt={project.title} 
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <motion.a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="bg-secondary/20 p-2 rounded-full"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                {project.liveLink !== '#' && (
                  <motion.a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="bg-secondary/20 p-2 rounded-full"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                )}
              </div>
            </div>

              {/* Project Details */}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="bg-secondary/20 px-2 py-1 
                                 rounded-full text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Wave Element */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
          className="w-full h-24 md:h-32 fill-primary/5 -scale-x-100"
        >
          <path 
            fillOpacity="1" 
            d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,202.7C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0L192,0L96,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}