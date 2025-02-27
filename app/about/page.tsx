// app/about/page.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Rocket, 
  Award, 
  Globe,
  Server,
  CloudCog,
  Zap
} from 'lucide-react'

const SKILLS = [
  { name: 'Web Development', icon: Code },
  { name: 'DevOps Engineering', icon: CloudCog },
  { name: 'Cloud Infrastructure', icon: Server },
  { name: 'Continuous Learning', icon: Zap }
]

const ACHIEVEMENTS = [
  {
    title: 'Cloud Infrastructure Optimization',
    description: 'Successfully implemented Kubernetes and Ceph storage solutions at Omnion Premedia',
    icon: Award
  },
  {
    title: 'Automation Excellence',
    description: 'Developed advanced automation scripts reducing deployment time by 35%',
    icon: Rocket
  }
]

const CORE_COMPETENCIES = [
  'Next.js & React',
  'Docker Containerization',
  'Kubernetes',
  'CI/CD Pipelines',
  'OPNsense Firewall',
  'Cloud Security'
]

export default function AboutPage() {
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
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="min-h-screen bg-secondary/5 pt-24"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center space-x-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold 
                           bg-gradient-to-r from-primary to-secondary 
                           text-transparent bg-clip-text">
              About Me
            </h1>
            <Globe className="w-10 h-10 text-primary animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Cloud Infrastructure Engineer specializing in transforming complex 
            technological landscapes into scalable, secure, and efficient ecosystems. 
            Passionate about pushing the boundaries of cloud-native technologies 
            and DevOps methodologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Personal Introduction */}
          <motion.div
            variants={itemVariants}
            className="bg-card p-8 
                       rounded-xl 
                       border border-border/30 
                       shadow-md 
                       hover:shadow-lg 
                       transition-all"
          >
            <h2 className="text-2xl font-semibold mb-6 
                           bg-gradient-to-r from-primary to-secondary 
                           text-transparent bg-clip-text">
              Professional Journey
            </h2>
           <p className="text-base text-muted-foreground mb-4">
             With over 3 years of web development experience and 1.5 years 
             in DevOps, I bridge the gap between software development and 
             infrastructure. I help businesses create robust, efficient 
             web applications by combining coding skills with smart 
             cloud technologies and automation strategies.
           </p>
           <p className="text-base text-muted-foreground">
             My approach blends technical expertise from web development 
             and DevOps to deliver practical solutions. I focus on making 
             software development faster, more reliable, and more 
             productive for development teams.
           </p>
          </motion.div>

          {/* Core Competencies */}
          <motion.div
            variants={itemVariants}
            className="bg-card p-8 
                       rounded-xl 
                       border border-border/30 
                       shadow-md 
                       hover:shadow-lg 
                       transition-all"
          >
            <h2 className="text-2xl font-semibold mb-6 
                           bg-gradient-to-r from-primary to-secondary 
                           text-transparent bg-clip-text">
              Core Competencies
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {CORE_COMPETENCIES.map((competency, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 
                             bg-secondary/10 p-3 rounded-lg 
                             transition-all"
                >
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{competency}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills and Expertise */}
        <motion.div
          variants={itemVariants}
          className="mt-12 bg-card 
                     p-8 rounded-xl 
                     border border-border/30 
                     shadow-md 
                     hover:shadow-lg 
                     transition-all"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center
                         bg-gradient-to-r from-primary to-secondary 
                         text-transparent bg-clip-text">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {SKILLS.map(({ name, icon: Icon }) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-6 
                           bg-secondary/10 p-6 rounded-lg 
                           transition-all"
              >
                <div className="bg-primary/10 p-4 rounded-full">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{name}</h3>
                  <p className="text-base text-muted-foreground">
                    {name === 'Infrastructure as Code' && 
                      'Automating infrastructure deployment and management'}
                    {name === 'Cloud Native Architecture' && 
                      'Designing scalable and resilient cloud ecosystems'}
                    {name === 'DevOps & Security' && 
                      'Implementing robust security and continuous integration'}
                    {name === 'Continuous Learning' && 
                      'Staying ahead of emerging technologies and best practices'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 bg-card 
                     p-8 rounded-xl 
                     border border-border/30 
                     shadow-md 
                     hover:shadow-lg 
                     transition-all"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center
                         bg-gradient-to-r from-primary to-secondary 
                         text-transparent bg-clip-text">
            Professional Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ACHIEVEMENTS.map(({ title, description, icon: Icon }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-6 
                           bg-secondary/10 p-6 rounded-lg 
                           transition-all"
              >
                <div className="bg-primary/10 p-4 rounded-full">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{title}</h3>
                  <p className="text-base text-muted-foreground">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}