// components/sections/HeroSection.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Linkedin, 
  Github, 
  Code, 
  Cloud, 
  Shield 
} from 'lucide-react'

export default function HeroSection() {
  const [subtitle, setSubtitle] = useState('')
  const [skillDescriptions, setSkillDescriptions] = useState<{[key: string]: string[]}>({
    'Infrastructure as Code': [
      'Automating infrastructure deployment',
      'Scalable cloud configurations',
      'Reproducible environment setups'
    ],
    'Cloud Native Architecture': [
      'Microservices design patterns',
      'Containerization strategies',
      'Kubernetes orchestration'
    ],
    'DevOps & Security': [
      'Implementing robust security protocols',
      'Continuous compliance monitoring',
      'Threat detection and mitigation'
    ]
  })

  const [activeDescriptions, setActiveDescriptions] = useState<{[key: string]: string}>({
    'Infrastructure as Code': skillDescriptions['Infrastructure as Code'][0],
    'Cloud Native Architecture': skillDescriptions['Cloud Native Architecture'][0],
    'DevOps & Security': skillDescriptions['DevOps & Security'][0]
  })

  useEffect(() => {
    const descriptionCycleInterval = setInterval(() => {
      setActiveDescriptions(prev => {
        const newDescriptions: {[key: string]: string} = {}
        
        Object.keys(skillDescriptions).forEach(skill => {
          const currentDescIndex = skillDescriptions[skill].indexOf(prev[skill])
          const nextDescIndex = (currentDescIndex + 1) % skillDescriptions[skill].length
          newDescriptions[skill] = skillDescriptions[skill][nextDescIndex]
        })

        return newDescriptions
      })
    }, 3000)

    return () => clearInterval(descriptionCycleInterval)
  }, [skillDescriptions])

  const fullSubtitle = "Crafting scalable cloud infrastructure and transforming complex systems into elegant solutions."

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullSubtitle.length) {
        setSubtitle(prev => prev + fullSubtitle.charAt(i))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 50)

    return () => clearInterval(typingEffect)
  }, [])

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/safwat-s-khan/',
      label: 'LinkedIn',
      color: 'hover:text-[#0A66C2]'
    },
    {
      icon: Github,
      href: 'https://github.com/saf2k',
      label: 'GitHub',
      color: 'hover:text-[#333]'
    }
  ]

  const keySkills = [
    { 
      icon: Code, 
      label: 'Infrastructure as Code',
      description: activeDescriptions['Infrastructure as Code']
    },
    { 
      icon: Cloud, 
      label: 'Cloud Native Architecture',
      description: activeDescriptions['Cloud Native Architecture']
    },
    { 
      icon: Shield, 
      label: 'DevOps & Security',
      description: activeDescriptions['DevOps & Security']
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
      className="min-h-screen flex items-center bg-secondary/5 overflow-hidden"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Introduction */}
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold 
                       bg-gradient-to-r from-primary 
                       to-secondary text-transparent 
                       bg-clip-text"
          >
            Safwat Shabbir Khan
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground text-lg"
          >
            {subtitle}
            <span className="animate-pulse">|</span>
          </motion.p>
          
          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex space-x-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`text-muted-foreground transition-colors ${link.color}`}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Key Skills */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 gap-6"
        >
          {keySkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-card p-5 rounded-xl 
                         border border-border/30 
                         hover:border-primary/30 
                         shadow-sm hover:shadow-md 
                         transition-all"
            >
              <div className="flex items-center mb-3">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <skill.icon className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">{skill.label}</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}