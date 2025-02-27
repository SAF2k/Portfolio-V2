// File: /Users/software/Documents/Project/restaurant-app/components/ui/CertificationBadge.tsx

'use client'

import { motion } from 'framer-motion'
import { Award, Trophy } from 'lucide-react'

export interface CertificationBadgeProps {
  name: string
  year: string
  type?: 'award' | 'trophy'
}

export function CertificationBadge({ 
  name, 
  year, 
  type = 'award' 
}: CertificationBadgeProps) {
  const Icon = type === 'award' ? Award : Trophy

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center 
                 bg-secondary/10 
                 px-3 py-2 
                 rounded-lg 
                 space-x-2
                 hover:shadow-sm
                 transition-all"
    >
      <Icon className="text-primary" size={24} />
      <div>
        <p className="text-sm font-semibold text-foreground">
          {name}
        </p>
        <p className="text-xs text-muted-foreground">
          {year}
        </p>
      </div>
    </motion.div>
  )
}

// Example usage in HeroSection or elsewhere
export const certifications = [
  {
    name: 'AWS DevOps Professional',
    year: '2023',
    type: 'award'
  },
  {
    name: 'Kubernetes Administrator',
    year: '2022',
    type: 'trophy'
  }
]