'use client'

import { useEffect, useRef } from 'react'

interface PostContentRendererProps {
  content: string
}

export default function PostContentRenderer({ content }: PostContentRendererProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Clean up any potential inline event handlers after content is rendered
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll('*')
      elements.forEach(element => {
        // Remove common inline event handlers that cause issues
        const eventHandlers = [
          'onmouseover', 'onmouseout', 'onclick', 'onload', 
          'onmouseenter', 'onmouseleave', 'onfocus', 'onblur'
        ]
        
        eventHandlers.forEach(handler => {
          if (element.hasAttribute(handler)) {
            element.removeAttribute(handler)
          }
        })

        // Also remove any style attributes that might contain problematic content
        const style = element.getAttribute('style')
        if (style && (style.includes('javascript:') || style.includes('expression('))) {
          element.removeAttribute('style')
        }
      })
    }
  }, [content])

  return (
    <div 
      ref={contentRef}
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}