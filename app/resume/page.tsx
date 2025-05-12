// File Path: /app/resume/page.tsx

'use client'

import { motion } from 'framer-motion'
import { 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin,
  Download,
  Server,
  Code,
  GitBranch,
  Database,
  Linkedin,
  Github,
  Monitor,
  Network
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedBackground } from '@/components/ui/layout/AnimatedBackground'

export default function ResumePage() {
  // Contact Information
  const contactInfo = {
    name: 'Safwat Shabbir Khan',
    email: 'safwat.s.khan@gmail.com',
    phone: '+971 547877919',
    location: 'Dubai, UAE',
    linkedin: 'linkedin.com/in/safwat-s-khan/',
    github: 'github.com/saf2k'
  }

  // Professional Experience
  const professionalExperience = [
    {
      company: 'PCube PVT LTD',
      position: 'DevOps Engineer',
      duration: 'Oct 2023 - Apr 2025',
      location: 'Udupi, Karnataka',
      responsibilities: [
        'Fine-tuned Kubernetes clusters, enhancing scalability by 30% and ensuring seamless microservices operations',
        'Deployed Ceph storage on bare metal servers, improving storage reliability by 25%',
        'Automated Docker container solutions, reducing deployment cycles by 20% and increasing portability',
        'Streamlined hybrid and multi-cloud environments with Anthos, cutting deployment time by 35% and boosting security',
        'Configured and optimized OPNsense firewall for enhanced network security and efficient traffic management'
      ]
    },
    {
      company: 'Prime Computers PVT LTD',
      position: 'Technical Support Engineer',
      duration: 'Dec 2022 - Sep 2023',
      location: 'Udupi, Karnataka',
      responsibilities: [
        'Delivered exceptional end-user support for Mac, Linux, and Windows systems, swiftly resolving hardware/software issues',
        'Configured and deployed customized applications based on client requirements, ensuring seamless onboarding',
        'Managed essential networking tasks, including the setup of switches, routers, and IoT devices',
        'Enhanced troubleshooting processes and documentation, significantly reducing issue resolution times'
      ]
    },
    {
      company: 'Reliance SMART',
      position: 'IT Support & Billing',
      duration: 'May 2021 - Nov 2022',
      location: 'Udupi, Karnataka',
      responsibilities: [
        'Maintained 99% uptime for billing systems and in-store technology',
        'Resolved technical issues with a 90% success rate, ensuring smooth customer service',
        'Efficiently managed billing counters with 98% transaction accuracy, minimizing downtime',
        'Acquired hands-on experience in retail IT systems, improving operational efficiency by 15%'
      ]
    }
  ]

  // Education
  const education = [
    {
      institution: 'Mangalore University',
      degree: 'Bachelor of Computer Applications',
      duration: 'June 2019 - Oct 2022',
      location: 'Mangalore, Karnataka',
      highlights: [
        'Comprehensive coursework in computer applications',
        'Developed strong foundation in IT and software development'
      ]
    }
  ]

  // Technical Skills
  const skillCategories = [
    {
      name: 'DevOps & Cloud',
      icon: Server,
      skills: ['Kubernetes', 'Docker', 'Ceph', 'Anthos', 'Helmchart', 'Jenkins', 'GitLab CI/CD']
    },
    {
      name: 'IT Systems & Support',
      icon: Monitor,
      skills: ['Windows Server', 'Linux Administration', 'Active Directory', 'Help Desk', 'System Troubleshooting', 'Hardware Support']
    },
    {
      name: 'Networking',
      icon: Network,
      skills: ['TCP/IP', 'Routing & Switching', 'VLANs', 'Firewalls', 'VPN', 'Network Security']
    },
    {
      name: 'Programming Languages',
      icon: Code,
      skills: ['Golang', 'Python', 'TypeScript', 'JavaScript']
    },
    {
      name: 'Web Development',
      icon: GitBranch,
      skills: ['Next.js', 'React.js', 'Node.js', 'Tailwind', 'Prisma']
    },
    {
      name: 'Version Control',
      icon: Database,
      skills: ['GitLab', 'GitHub']
    }
  ]

  // Projects
  const projects = [
    {
      title: 'E-Commerce Apparel Store',
      technologies: 'Next.js, Tailwind, Prisma, PlanetScale, TypeScript',
      duration: 'June 2020 - Oct 2022',
      description: [
        'Developed an Admin Portal for managing products, sizes, colors, and billboards with full CRUD functionality',
        'Built a customer-facing Storefront with real-time updates using Next.js APIs, ensuring a seamless shopping experience',
        'Utilized modern tools and frameworks for a dynamic, responsive, and scalable e-commerce platform'
      ]
    },
    {
      title: 'Enterprise IT Infrastructure Management',
      technologies: 'Windows Server, Linux, macOS, Cisco Switches, OPNsense, Active Directory, VMware',
      duration: 'Dec 2022 - Sep 2023',
      description: [
        'Managed multi-platform environment supporting Windows, Linux, and Mac systems across 200+ end-users with 99% uptime',
        'Implemented and maintained network infrastructure including Cisco switches, firewalls, and VLANs for optimal performance',
        'Orchestrated server room operations: rack mounting, cable management, hardware diagnostics, and component replacements',
        'Provided rapid response IT support, resolving hardware/software issues and maintaining detailed documentation of solutions'
      ]
    },
    {
      title: 'Bare Metal Infrastructure Modernization',
      technologies: 'Kubernetes, Ceph, Ansible, OPNsense, LDAP, VMware ESXi',
      duration: 'Jan 2023 - Sep 2023',
      description: [
        'Designed and implemented a high-availability Kubernetes cluster on bare metal servers, reducing deployment time by 40%',
        'Set up Ceph distributed storage system across physical nodes, achieving 99.9% data availability and 25% cost reduction',
        'Automated IT infrastructure tasks using Ansible, including user management, system updates, and security configurations',
        'Deployed OPNsense firewall and configured VLANs for network segmentation, enhancing security and performance'
      ]
    }
  ]

  // Personal Strengths
  const strengths = [
    'Organized and Self-Motivated',
    'Team Player Under Pressure',
    'Leadership & Decision-Making',
    'Attention to Detail'
  ]

  // Profile Summary
  const profileSummary = 'Seeking a dynamic work environment to leverage my skills, expand my expertise, and contribute meaningfully to the growth of both the company and myself.'

  // Animation Variants
  const pageVariants = {
    initial: { opacity: 0 },
    in: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    out: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  }

  const sectionVariants = {
    initial: { y: 50, opacity: 0 },
    in: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <AnimatedBackground>
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 mt-12"
    >
      <motion.section 
        variants={sectionVariants}
        className="max-w-5xl mx-auto bg-card shadow-xl rounded-2xl mb-8 overflow-hidden"
      >
        <div className="bg-primary/10 p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold 
                           bg-gradient-to-r from-primary 
                           to-secondary text-transparent 
                           bg-clip-text">
              {contactInfo.name}
            </h1>
            <p className="text-muted-foreground text-xl mt-2">
              IT Administrator | Cloud Native Specialist
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right space-y-2">
            <div className="flex items-center justify-center md:justify-end">
              <Mail className="mr-2 text-primary" size={20} />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Phone className="mr-2 text-primary" size={20} />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <MapPin className="mr-2 text-primary" size={20} />
              <span>{contactInfo.location}</span>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Linkedin className="mr-2 text-primary" size={20} />
              <span>{contactInfo.linkedin}</span>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Github className="mr-2 text-primary" size={20} />
              <span>{contactInfo.github}</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Profile Summary Section */}
      <motion.section 
        variants={sectionVariants}
        className="max-w-5xl mx-auto bg-card shadow-xl rounded-2xl mb-8"
      >
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Profile Summary</h2>
          <p className="text-muted-foreground">{profileSummary}</p>
        </div>
      </motion.section>

      {/* Professional Experience Section */}
      <motion.section 
        variants={sectionVariants}
        className="max-w-5xl mx-auto bg-card shadow-xl rounded-2xl mb-8"
      >
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Briefcase className="mr-3 text-primary" size={28} />
            Professional Experience
          </h2>
          {professionalExperience.map((job, index) => (
            <div 
              key={index}
              className="mb-6 pb-6 border-b border-secondary/20 last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                <h3 className="text-xl font-semibold">{job.position}</h3>
                <span className="text-muted-foreground text-sm">
                  {job.duration}
                </span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p className="font-medium">{job.company}</p>
                <p className="text-muted-foreground text-sm">{job.location}</p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {job.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        variants={sectionVariants}
        className="max-w-5xl mx-auto bg-card shadow-xl rounded-2xl mb-8"
      >
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <GraduationCap className="mr-3 text-primary" size={28} />
            Education
          </h2>
          {education.map((edu, index) => (
            <div 
              key={index}
              className="mb-6 pb-6 border-b border-secondary/20 last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <span className="text-muted-foreground text-sm">
                  {edu.duration}
                </span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p className="font-medium">{edu.institution}</p>
                <p className="text-muted-foreground text-sm">{edu.location}</p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {edu.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        variants={sectionVariants}
        className="max-w-5xl mx-auto bg-card shadow-xl rounded-2xl mb-8"
      >
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-secondary/10 p-4 rounded-xl">
                <div className="flex items-center mb-4">
                  <category.icon className="mr-3 text-primary" size={24} />
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-secondary/20 px-3 py-1 
                                 rounded-full text-sm 
                                 text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        variants={sectionVariants}
        className="max-w-5xl mx-auto bg-card shadow-xl rounded-2xl mb-8"
      >
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Code className="mr-3 text-primary" size={28} />
            Projects
          </h2>
          {projects.map((project, index) => (
            <div 
              key={index}
              className="mb-6 pb-6 border-b border-secondary/20 last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="text-muted-foreground text-sm">
                  {project.duration}
                </span>
              </div>
              <p className="text-muted-foreground mb-2">{project.technologies}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {project.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Strengths Section */}
      <motion.section 
        variants={sectionVariants}
        className="max-w-5xl mx-auto bg-card shadow-xl rounded-2xl mb-8"
      >
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Strengths</h2>
          <div className="flex flex-wrap gap-4">
            {strengths.map((strength, index) => (
              <div 
                key={index}
                className="bg-secondary/10 px-4 py-2 rounded-full"
              >
                <span className="font-medium">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Download Resume */}
      <motion.section 
        variants={sectionVariants}
        className="max-w-5xl mx-auto text-center"
      >
        <a 
          href="/Safwat_Resume.pdf" 
          download 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button 
            variant="default" 
            size="lg" 
            className="flex items-center gap-2 mx-auto"
          >
            <Download size={20} /> Download Full Resume
          </Button>
        </a>
      </motion.section>
    </motion.div>
    </AnimatedBackground>
  )
}