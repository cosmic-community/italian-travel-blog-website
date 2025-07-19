'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Category } from '@/types'

interface MobileMenuProps {
  categories: Category[]
}

export default function MobileMenu({ categories }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button 
        className="text-gray-700 hover:text-primary-600"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile menu"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t z-50">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="/"
              className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <div>
              <p className="text-gray-900 font-medium mb-2">Categories</p>
              <div className="pl-4 space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/categories/${category.slug}`}
                    className="block text-gray-700 hover:text-primary-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.metadata?.name || category.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              href="/authors"
              className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Authors
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}