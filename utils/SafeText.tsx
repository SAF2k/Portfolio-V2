// utils/SafeText.tsx
import React from 'react'
import { cn } from '@/lib/utils'

export const SafeText: React.FC<React.HTMLAttributes<HTMLSpanElement> & { children: string }> = ({ 
  children, 
  className, 
  ...props 
}) => {
  return (
    <span 
      className={cn(
        "inline-block", // default display
        "text-inherit", // inherit text color
        className // allow custom classes to override
      )} 
      {...props}
    >
      {children.replace(/'/g, '&apos;')}
    </span>
  )
}