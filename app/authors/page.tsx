import { getAllAuthors } from '@/lib/cosmic'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AuthorCard from '@/components/AuthorCard'

export const metadata: Metadata = {
  title: 'Our Authors | Italian Travel Blog',
  description: 'Meet our expert Italy travel writers and certified Italy specialists sharing authentic travel insights.',
}

export default async function AuthorsPage() {
  const authors = await getAllAuthors()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Authors</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the certified Italy specialists and passionate writers who bring you authentic travel insights 
            from across the beautiful Italian peninsula.
          </p>
        </div>

        {authors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {authors.map((author) => (
              <AuthorCard key={author.id} author={author} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No Authors Found
            </h2>
            <p className="text-gray-600">
              We're working on adding author profiles. Check back soon!
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}