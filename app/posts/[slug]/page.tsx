// app/posts/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PostContent from '@/components/PostContent'
import AuthorCard from '@/components/AuthorCard'
import TravelTips from '@/components/TravelTips'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const title = post.metadata?.title || post.title
  const excerpt = post.metadata?.excerpt || ''
  const featuredImage = post.metadata?.featured_image

  return {
    title: `${title} | Italian Travel Blog`,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      type: 'article',
      ...(featuredImage && {
        images: [
          {
            url: `${featuredImage.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: excerpt,
      ...(featuredImage && {
        images: [`${featuredImage.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`],
      }),
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const author = post.metadata?.author
  const travelTips = post.metadata?.travel_tips

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PostContent post={post} />
        
        {travelTips && travelTips.length > 0 && (
          <div className="mt-12">
            <TravelTips tips={travelTips} />
          </div>
        )}
        
        {author && (
          <div className="mt-12">
            <AuthorCard author={author} />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}