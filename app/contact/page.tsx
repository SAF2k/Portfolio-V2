// app/contact/page.tsx
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  ArrowRight,
  UserCircle,
  MessageCircle,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { z } from 'zod'

const CONTACT_INFO = [
  {
    title: 'Location',
    description: 'Udupi, Karnataka, India',
    icon: MapPin
  },
  {
    title: 'Email',
    description: 'safwat.s.khan@gmail.com',
    icon: Mail
  },
  {
    title: 'Phone',
    description: '+91 8660977268',
    icon: Phone
  }
]

const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/safwat-s-khan/',
    label: 'LinkedIn'
  },
  {
    icon: Github,
    href: 'https://github.com/saf2k',
    label: 'GitHub'
  },
  {
    icon: Send,
    href: 'https://t.me/safwat_khan',
    label: 'Telegram'
  }
]

// Form Validation Schema
const ContactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),

  email: z.string()
    .email("Invalid email address"),

  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters")
})

type ContactFormData = z.infer<typeof ContactSchema>

// Sanitization function
const sanitizeInput = (input: string) => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}


export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [messageCharCount, setMessageCharCount] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    const sanitizedValue = sanitizeInput(value)
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }))

    if (name === 'message') {
      setMessageCharCount(sanitizedValue.trim().length)
    }

    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrors({})
  
    try {
      const validatedData = ContactSchema.parse(formData)
      
      await fetch(
        process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEB_APP_URL || '', 
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: validatedData.name,
            email: validatedData.email,
            message: validatedData.message,
            timestamp: new Date().toISOString()
          })
        }
      )
  
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      setMessageCharCount(0)
    } catch (error) {
      console.error('Submission error:', error)
  
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactFormData> = {}
        error.errors.forEach(err => {
          if (err.path.length > 0) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message
          }
        })
        setErrors(fieldErrors)
      }
  
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
    hidden: { opacity: 0, y: 50 },
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
      viewport={{ once: true }}
      variants={containerVariants}
      className="min-h-screen bg-secondary/5 pt-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold 
                 bg-gradient-to-r from-primary to-secondary 
                 text-transparent bg-clip-text mb-6 flex items-center gap-4">
            Get In Touch
            <Send className="w-8 md:w-10 h-8 md:h-10 text-primary animate-pulse" />
          </h1>
          <p>
            Passionate about solving complex technical challenges
            and creating innovative solutions. Whether you have a
            project, collaboration opportunity, or just want to
            discuss emerging technologies, I&apos;m eager to connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-card p-8 rounded-xl 
                       border border-border/30 
                       shadow-md hover:shadow-lg 
                       transition-all"
          >
            <h2 className="text-2xl font-semibold mb-6 
                           bg-gradient-to-r from-primary to-secondary 
                           text-transparent bg-clip-text">
              Send Me a Message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name Input */}
              <div className="relative">
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="pl-10"
                  disabled={isSubmitting}
                />
                <UserCircle
                  className="absolute left-3 top-1/2 -translate-y-1/2 
                             text-muted-foreground"
                />
                {errors.name && (
                  <p className="text-destructive text-xs mt-1 flex items-center">
                    <AlertTriangle className="mr-2 w-4 h-4" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div className="relative">
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="pl-10"
                  disabled={isSubmitting}
                />
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 
                             text-muted-foreground"
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1 flex items-center">
                    <AlertTriangle className="mr-2 w-4 h-4" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message (10-500 characters)"
                  className="pl-10 min-h-[120px]"
                  disabled={isSubmitting}
                />
                <MessageCircle
                  className="absolute left-3 top-4 
                             text-muted-foreground"
                />
                {errors.message && (
                  <p className="text-destructive text-xs mt-1 flex items-center">
                    <AlertTriangle className="mr-2 w-4 h-4" /> {errors.message}
                  </p>
                )}
                <div className="flex justify-end items-center mt-2">
                  <p className={`text-xs ${messageCharCount > 500 ? 'text-destructive' : 'text-muted-foreground'}`}>
                    {messageCharCount}/500
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full group"
                disabled={isSubmitting || submitStatus === `success`}
              >
                {isSubmitting ? (
                  <>
                    <Send className="mr-2 animate-pulse" />
                    Sending...
                  </>
                ) : submitStatus === `success` ? (
                  <>
                    <CheckCircle2 className="mr-2 text-green-500" />
                    Message Sent
                  </>
                ) : submitStatus === `error` ? (
                  <>
                    <AlertTriangle className="mr-2 text-destructive" />
                    Try Again
                  </>
                ) : (
                  <>
                    <Send className="mr-2 transition-transform group-hover:translate-x-1" />
                    Send Message
                  </>
                )}
              </Button>

              {/* Status Messages */}
              {submitStatus === `success` && (
                <p className="text-center text-green-600 text-sm mt-4">
                  Thank you! I will get back to you soon.
                </p>
              )}
              {submitStatus === `error` && (
                <p className="text-center text-destructive text-sm mt-4">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Information and Social Links */}
          <motion.div
            variants={itemVariants}
            className="bg-card p-8 rounded-xl 
                       border border-border/30 
                       shadow-md hover:shadow-lg 
                       transition-all flex flex-col"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6 
                             bg-gradient-to-r from-primary to-secondary 
                             text-transparent bg-clip-text">
                Contact Information
              </h2>
              {CONTACT_INFO.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="flex items-center space-x-4 
                             mb-4 pb-4 border-b border-border/20 
                             last:border-b-0"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{title}</p>
                    <p className="font-semibold text-base">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-auto">
              <h3 className="text-xl font-semibold mb-4 
                             bg-gradient-to-r from-primary to-secondary 
                             text-transparent bg-clip-text">
                Connect Online
              </h3>
              <div className="space-y-3">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between 
                               bg-secondary/10 p-3 rounded-lg 
                               hover:bg-secondary/20 
                               transition-all group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{label}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground 
                                           group-hover:translate-x-1 
                                           transition-transform" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}