'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Category } from '@/types'

interface CategoriesDropdownProps {
  categories: Category[]
}

export default function CategoriesDropdown({ categories }: CategoriesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center">
        Categories
        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg transition-all duration-200 z-50 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="py-1">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {category.metadata?.name || category.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}