import Link from 'next/link'
import { getAllCategories } from '@/lib/cosmic'
import CategoriesDropdown from './CategoriesDropdown'
import MobileMenu from './MobileMenu'

export default async function Header() {
  const categories = await getAllCategories()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">🇮🇹</span>
            <span className="text-xl font-bold text-gray-900">Italian Travel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </Link>
            
            {/* Categories Dropdown - Client Component */}
            <CategoriesDropdown categories={categories} />
            
            <Link 
              href="/authors" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Authors
            </Link>
          </div>

          {/* Mobile Menu - Client Component */}
          <MobileMenu categories={categories} />
        </div>
      </nav>
    </header>
  )
}