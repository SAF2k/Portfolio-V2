// File Path: /components/ui/layout/AnimatedBackground.tsx

'use client'

import { motion } from 'framer-motion'
import { useState, useCallback } from 'react'

interface AnimatedBackgroundProps {
  children: React.ReactNode
}

export function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [lineState, setLineState] = useState(
    // Increase number of lines to 20 and reduce spacing
    Array(20).fill(0).map(() => ({
      opacity: 0.01,
      scale: 1
    }))
  )

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const x = e.clientX
    const y = e.clientY

    // Update mouse position
    setMousePosition({ x, y })

    // Create interactive line effect with more granular response
    setLineState(prevState => 
      prevState.map((line, index) => {
        const verticalDistance = Math.abs(x / window.innerWidth - index / 20)
        const horizontalDistance = Math.abs(y / window.innerHeight - index / 20)
        
        return {
          opacity: verticalDistance < 0.05 || horizontalDistance < 0.05 
            ? Math.max(0.05, 0.2 - verticalDistance - horizontalDistance) 
            : 0.01,
          scale: verticalDistance < 0.05 || horizontalDistance < 0.05 ? 1.05 : 1
        }
      })
    )
  }, [])

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Soft Gradient Background */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-primary/5"
        animate={{
          backgroundPosition: [
            '0% 0%', 
            '100% 100%', 
            '0% 100%', 
            '100% 0%', 
            '0% 0%'
          ],
          transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: "linear"
          }
        }}
        style={{
          backgroundSize: '400% 400%',
        }}
      />

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Vertical Lines */}
        {lineState.map((state, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px bg-primary/20 transition-all duration-300"
            style={{
              height: '100%',
              left: `${i * 5}%`, // Reduced spacing from 10% to 5%
              transform: `translateX(-50%)`,
              opacity: state.opacity,
              scaleY: state.scale
            }}
          />
        ))}

        {/* Horizontal Lines */}
        {lineState.map((state, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute h-px bg-primary/20 transition-all duration-300"
            style={{
              width: '100%',
              top: `${i * 5}%`, // Reduced spacing from 10% to 5%
              transform: `translateY(-50%)`,
              opacity: state.opacity,
              scaleX: state.scale
            }}
          />
        ))}

        {/* Subtle Mouse Interaction Highlight */}
        <div 
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: '80px',
            height: '80px',
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(
              circle at center, 
              rgba(var(--primary-rgb), 0.02) 0%, 
              transparent 50%
            )`,
            borderRadius: '50%'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  )
}