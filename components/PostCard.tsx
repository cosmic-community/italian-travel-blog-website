import Link from 'next/link'
import { Post } from '@/types'

interface PostCardProps {
  post: Post
  className?: string
}

export default function PostCard({ post, className = '' }: PostCardProps) {
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const excerpt = post.metadata?.excerpt
  const categories = post.metadata?.categories || []

  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {/* Featured Image */}
      {featuredImage && (
        <Link href={`/posts/${post.slug}`}>
          <div className="aspect-video overflow-hidden">
            <img
              src={`${featuredImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={post.metadata?.title || post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
      )}

      <div className="p-6">
        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.slice(0, 2).map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white hover:opacity-80 transition-opacity"
                style={{ backgroundColor: category.metadata?.color || '#6B7280' }}
              >
                {category.metadata?.name || category.title}
              </Link>
            ))}
          </div>
        )}

        {/* Title */}
        <Link href={`/posts/${post.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors line-clamp-2">
            {post.metadata?.title || post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {excerpt}
          </p>
        )}

        {/* Author & Location */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {author && author.metadata?.avatar && (
              <img
                src={`${author.metadata.avatar.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                alt={author.metadata?.name || author.title}
                className="w-8 h-8 rounded-full"
              />
            )}
            <div className="text-sm">
              {author && (
                <p className="font-medium text-gray-900">
                  {author.metadata?.name || author.title}
                </p>
              )}
              {post.metadata?.location && (
                <p className="text-gray-500 text-xs">
                  📍 {post.metadata.location}
                </p>
              )}
            </div>
          </div>

          <Link
            href={`/posts/${post.slug}`}
            className="text-primary-600 hover:text-primary-700 font-medium text-sm"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  )
}