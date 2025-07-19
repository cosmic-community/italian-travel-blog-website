import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Italian Travel Blog | Discover Authentic Italy',
  description: 'Explore Italy through the eyes of local experts. From Tuscany\'s rolling hills to Cinque Terre\'s coastal beauty, discover authentic Italian experiences.',
  keywords: 'Italy travel, Tuscany, Cinque Terre, Italian culture, travel blog, authentic Italy',
  authors: [{ name: 'Italian Travel Blog' }],
  openGraph: {
    title: 'Italian Travel Blog | Discover Authentic Italy',
    description: 'Explore Italy through the eyes of local experts. Discover authentic Italian experiences.',
    type: 'website',
    siteName: 'Italian Travel Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Italian Travel Blog | Discover Authentic Italy',
    description: 'Explore Italy through the eyes of local experts.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}