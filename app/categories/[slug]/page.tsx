// app/categories/[slug]/page.tsx
import { getCategoryBySlug, getPostsByCategory, getAllCategories } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PostCard from '@/components/PostCard'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const categories = await getAllCategories()
  
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }

  const title = category.metadata?.name || category.title
  const description = category.metadata?.description || `Explore ${title} travel content`

  return {
    title: `${title} | Italian Travel Blog`,
    description,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)
  const heroImage = category.metadata?.hero_image
  const color = category.metadata?.color
  const title = category.metadata?.name || category.title
  const description = category.metadata?.description

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Category Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0">
            <img
              src={`${heroImage.imgix_url}?w=1200&h=400&fit=crop&auto=format,compress`}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0 opacity-60"
              style={{ backgroundColor: color || '#000000' }}
            ></div>
          </div>
        )}
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            {description && (
              <p className="text-xl text-gray-200 max-w-2xl">{description}</p>
            )}
          </div>
        </div>
      </section>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {posts.length} {posts.length === 1 ? 'Article' : 'Articles'} in {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No Articles Yet
            </h2>
            <p className="text-gray-600 mb-8">
              We're working on adding more content to this category. Check back soon!
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}