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
  Network,
  CloudCog
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
    skills: [
      'Kubernetes', 
      'Docker', 
      'Ceph', 
      'Anthos', 
      'Helm Charts',   // fixed spacing & plural for Helm
      'Jenkins', 
      'GitLab CI/CD',
      'Terraform',
      'Prometheus',
      'Grafana',
      'AWS',
      'Azure'
    ],
  },
  {
    name: 'IT Systems & Support',
    icon: Monitor,
    skills: [
      'Windows Server', 
      'Linux Administration', 
      'Active Directory', 
      'Help Desk Support', 
      'System Troubleshooting', 
      'Hardware Support',
      'Virtualization (VMware, Hyper-V)',
      'Backup & Recovery'
    ],
  },
  {
    name: 'Networking',
    icon: Network,
    skills: [
      'TCP/IP', 
      'Routing & Switching', 
      'VLANs', 
      'Firewalls', 
      'VPN', 
      'Network Security',
      'DNS', 
      'Load Balancing',
      'Wireless Networking'
    ],
  },
  {
    name: 'Programming Languages',
    icon: Code,
    skills: [
      'Golang', 
      'Python', 
      'TypeScript', 
      'JavaScript', 
      'Shell Scripting (Bash)'
    ],
  },
  {
    name: 'Web Development',
    icon: GitBranch,
    skills: [
      'Next.js', 
      'React.js', 
      'Node.js', 
      'Tailwind CSS',  // added "CSS" for clarity
      'Prisma', 
      'REST APIs',
      'GraphQL'
    ],
  },
  {
    name: 'Version Control',
    icon: Database,
    skills: [
      'GitLab', 
      'GitHub', 
      'Bitbucket'
    ],
  },
];


  // Projects
  const projects = [
    {
      title: 'Kubernetes Bare-Metal Cluster Setup',
      technologies: 'Kubernetes, Docker, GitLab Container Registry, CI/CD Tools',
      duration: 'Jan 2023 - Apr 2023',
      description: [
        'Configured and deployed Kubernetes cluster on bare-metal servers.',
        'Set up Docker container runtime and integrated GitLab Container Registry.',
        'Installed essential tools to support CI/CD pipelines.'
      ]
    },
    {
      title: 'Storage Infrastructure Setup',
      technologies: 'Ceph, RAID Storage',
      duration: 'May 2023 - Jul 2023',
      description: [
        'Designed and implemented Ceph distributed storage system.',
        'Configured RAID storage for enhanced redundancy and performance.'
      ]
    },
    {
      title: 'FTP Server Deployment',
      technologies: 'FTP, Network Security',
      duration: 'Aug 2023 - Sep 2023',
      description: [
        'Set up FTP server for secure internal and external file access.',
        'Configured user permissions and firewall rules for access control.'
      ]
    },
    {
      title: 'Enterprise Firewall Implementation',
      technologies: 'OPNsense, Firewall, High Availability, Multi-ISP',
      duration: 'Oct 2023 - Dec 2023',
      description: [
        'Planned and deployed OPNsense firewall with dual ISP interfaces.',
        'Configured load balancing, failover, and high availability with two active firewalls.'
      ]
    },
    {
      title: 'Network Infrastructure Planning and Setup',
      technologies: 'Networking, VLAN, Switch Stacking',
      duration: 'Jan 2024 - Feb 2024',
      description: [
        'Designed and implemented wiring and network setup for server rooms.',
        'Ensured high availability and redundancy with VLAN segmentation and switch stacking.'
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