import Link from 'next/link'
import { Category } from '@/types'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const heroImage = category.metadata?.hero_image
  const description = category.metadata?.description
  const color = category.metadata?.color

  return (
    <Link href={`/categories/${category.slug}`}>
      <div className="group relative overflow-hidden rounded-lg aspect-square hover:scale-105 transition-transform duration-300">
        {/* Background Image */}
        {heroImage && (
          <div className="absolute inset-0">
            <img
              src={`${heroImage.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
              alt={category.metadata?.name || category.title}
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0 opacity-60"
              style={{ backgroundColor: color || '#000000' }}
            ></div>
          </div>
        )}

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
          <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-200 transition-colors">
            {category.metadata?.name || category.title}
          </h3>
          
          {description && (
            <p className="text-sm text-gray-200 line-clamp-2">
              {description}
            </p>
          )}

          <div className="mt-3 flex items-center">
            <span className="text-sm font-medium">Explore</span>
            <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
    </Link>
  )
}