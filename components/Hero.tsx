import Link from 'next/link'
import { Post } from '@/types'

interface HeroProps {
  post: Post
}

export default function Hero({ post }: HeroProps) {
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const excerpt = post.metadata?.excerpt

  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      {/* Background Image */}
      {featuredImage && (
        <div className="absolute inset-0">
          <img
            src={`${featuredImage.imgix_url}?w=1200&h=500&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.metadata?.title || post.title}
            </h1>
            
            {excerpt && (
              <p className="text-xl md:text-2xl mb-6 text-gray-200 leading-relaxed">
                {excerpt}
              </p>
            )}

            <div className="flex items-center space-x-4 mb-6">
              {author && author.metadata?.avatar && (
                <img
                  src={`${author.metadata.avatar.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                  alt={author.metadata?.name || author.title}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              )}
              <div>
                {author && (
                  <p className="font-semibold">
                    by {author.metadata?.name || author.title}
                  </p>
                )}
                {post.metadata?.location && (
                  <p className="text-gray-200 text-sm">
                    📍 {post.metadata.location}
                  </p>
                )}
              </div>
            </div>

            <Link
              href={`/posts/${post.slug}`}
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Read Full Story
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}