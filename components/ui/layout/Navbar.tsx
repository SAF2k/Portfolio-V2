'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { 
  Home, 
  User, 
  Briefcase, 
  Send, 
  Menu, 
  X, 
  FileText 
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    // { href: '/projects', label: 'Projects', icon: Code },
    { href: '/experience', label: 'Experience', icon: Briefcase },
    { href: '/resume', label: 'Resume', icon: FileText },
    { href: '/contact', label: 'Contact', icon: Send }
  ]

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) && 
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const renderNavLink = (item: { href: string, label: string, icon: React.ElementType }, isMobile = false) => (
    <Link 
      key={item.href}
      href={item.href}
      onClick={() => isMobile && setIsMobileMenuOpen(false)}
      className={`flex items-center space-x-2 
                 transition-all duration-300 
                 ${pathname === item.href 
                   ? 'text-primary font-semibold' 
                   : 'text-muted-foreground hover:text-primary hover:translate-x-1'}`}
    >
      <item.icon className={`w-5 h-5 ${pathname === item.href ? 'text-primary' : ''}`} />
      <span>{item.label}</span>
    </Link>
  )

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md shadow-sm py-4"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
          aria-label="Home"
        >
          S K
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            {navItems.map((item) => renderNavLink(item))}
          </div>

          {/* Theme Toggle */}
          <ModeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ModeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 right-0 left-0 bg-background/95 backdrop-blur-md shadow-lg md:hidden z-50 p-6"
            aria-label="Mobile Navigation Menu"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => renderNavLink(item, true))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}