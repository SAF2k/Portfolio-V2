// components/sections/ContactSection.tsx
// components/sections/ContactSection.tsx
'use client'

import React, { useState } from 'react'  // Remove useEffect
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Send, 
  UserCircle, 
  Mail, 
  MessageCircle, 
  CheckCircle2, 
  AlertTriangle, 
  MapPin,
  Phone,
  Linkedin,
  Github
} from 'lucide-react'
import { z } from 'zod'


// // Enhanced sanitization function
const sanitizeInput = (input: string) => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// Form validation schema with advanced sanitization
const ContactSchema = z.object({
  name: z.string()
    .transform(val => val.trim())
    .refine(val => val.trim().length >= 2, { message: "Name must be at least 2 characters" }),
  
  email: z.string()
    .transform(val => val.trim())
    .refine(val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), { message: "Invalid email address" }),
  
  message: z.string()
    .transform(val => val.trim())
    .refine(val => val.trim().length >= 10, { message: "Message must be at least 10 characters" })
    .refine(val => val.trim().length <= 500, { message: "Message cannot exceed 500 characters" })
})

type ContactFormData = z.infer<typeof ContactSchema>

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<{
    name?: string,
    email?: string,
    message?: string
  }>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [messageCharCount, setMessageCharCount] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    // Ignore sanitizedValue warning by using it
    const sanitizedValue = sanitizeInput(value)
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }))

    // Update character count for message
    if (name === 'message') {
      setMessageCharCount(value.trim().length)
    }

    // Clear specific field error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('idle')
    setErrors({})
    setIsSubmitting(true)

    try {
      // Validate and sanitize form data
      const validatedData = ContactSchema.parse(formData)
      
      // Submit to Google Sheets using Google Apps Script Web App
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

      // Reset form
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
        const fieldErrors: typeof errors = {}
        error.errors.forEach(err => {
          if (err.path.length > 0) {
            fieldErrors[err.path[0] as keyof typeof errors] = err.message
          }
        })
        setErrors(fieldErrors)
      }
      
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      description: 'Dubai, UAE'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: '+971 547877919'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/safwat-s-khan/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/saf2k',
      label: 'GitHub'
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
      className="py-16 bg-secondary/5 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-12 
                     bg-gradient-to-r from-primary 
                     to-secondary text-transparent 
                     bg-clip-text"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information Column */}
          <motion.div 
            variants={itemVariants}
            className="bg-secondary/10 rounded-xl p-6 
                       border border-border/30 
                       flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                Contact Information
              </h3>
              
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center mb-4 space-x-4"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <info.icon className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{info.title}</h4>
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-start space-x-4 mt-6"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div variants={itemVariants}>
            <form 
              onSubmit={handleSubmit} 
              className="bg-card rounded-xl p-6 
                         border border-border/30 
                         shadow-sm hover:shadow-md 
                         transition-all space-y-6"
            >
              {/* Name Input */}
              <motion.div 
                variants={itemVariants}
                className="relative"
              >
                <Input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className="pl-10"
                  required 
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
              </motion.div>

              {/* Email Input */}
              <motion.div 
                variants={itemVariants}
                className="relative"
              >
                <Input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  className="pl-10"
                  required 
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
              </motion.div>

              {/* Message Textarea */}
              <motion.div 
                variants={itemVariants}
                className="relative"
              >
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message (10-500 characters)" 
                  className="pl-10 min-h-[120px]"
                  required 
                  disabled={isSubmitting}
                />
                <MessageCircle 
                  className="absolute left-3 top-4 
                             text-muted-foreground"
                />
                <div className="flex justify-between items-center mt-2">
                  {errors.message && (
                    <p className="text-destructive text-xs flex items-center">
                      <AlertTriangle className="mr-2 w-4 h-4" /> {errors.message}
                    </p>
                  )}
                  <p className={`text-xs ml-auto ${messageCharCount > 500 ? 'text-destructive' : 'text-muted-foreground'}`}>
                    {messageCharCount}/500
                  </p>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <Button 
                  type="submit" 
                  className="w-full group"
                  disabled={isSubmitting || submitStatus === 'success'}
                >
                  {isSubmitting ? (
                    <>
                      <Send className="mr-2 animate-pulse" /> 
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle2 className="mr-2 text-green-500" />
                      Message Sent
                    </>
                  ) : submitStatus === 'error' ? (
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
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 text-sm"
                >
                  Thank you! I&apos;ll get back to you soon.
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-destructive text-sm"
                >
                  Oops! Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
} 