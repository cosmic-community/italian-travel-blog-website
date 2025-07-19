import Link from 'next/link'
import { Post } from '@/types'

interface PostContentProps {
  post: Post
}

export default function PostContent({ post }: PostContentProps) {
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const categories = post.metadata?.categories || []
  const content = post.metadata?.content || post.content || ''
  const title = post.metadata?.title || post.title

  return (
    <article>
      {/* Header */}
      <header className="mb-8">
        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white hover:opacity-80 transition-opacity"
                style={{ backgroundColor: category.metadata?.color || '#6B7280' }}
              >
                {category.metadata?.name || category.title}
              </Link>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {title}
        </h1>

        {/* Author and Meta Info */}
        <div className="flex items-center space-x-4 mb-6">
          {author && author.metadata?.avatar && (
            <img
              src={`${author.metadata.avatar.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
              alt={author.metadata?.name || author.title}
              className="w-12 h-12 rounded-full"
            />
          )}
          <div>
            {author && (
              <p className="font-semibold text-gray-900">
                by {author.metadata?.name || author.title}
              </p>
            )}
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              {post.metadata?.location && (
                <span>📍 {post.metadata.location}</span>
              )}
              {author?.metadata?.italy_expert && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                  ✓ Italy Expert
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {featuredImage && (
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img
              src={`${featuredImage.imgix_url}?w=1000&h=600&fit=crop&auto=format,compress`}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </header>

      {/* Content */}
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}