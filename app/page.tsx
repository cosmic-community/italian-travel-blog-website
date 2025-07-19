import { getAllPosts, getAllCategories } from '@/lib/cosmic'
import { Post, Category } from '@/types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PostCard from '@/components/PostCard'
import CategoryCard from '@/components/CategoryCard'
import Hero from '@/components/Hero'

export default async function HomePage() {
  const posts = await getAllPosts()
  const categories = await getAllCategories()
  
  const featuredPost = posts[0]
  const recentPosts = posts.slice(1, 4)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {featuredPost && <Hero post={featuredPost} />}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore Italy by Theme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Latest Travel Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* All Posts Section */}
        {posts.length > 4 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              All Travel Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(4).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  )
}