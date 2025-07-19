# Italian Travel Blog Website

![App Preview](https://imgix.cosmicjs.com/788605f0-643c-11f0-a051-23c10f41277a-photo-1498307833015-e7b400441eb8-1752887132378.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A beautifully designed Italian travel blog website showcasing authentic travel content from expert Italy travel writers. Features immersive storytelling, stunning photography, and practical travel insights for exploring Italy's most beloved destinations.

## ✨ Features

- **Rich Travel Content** - Detailed blog posts with expert insights from certified Italy specialists
- **Beautiful Category System** - Explore content by Tuscany, Coastal Italy, Art & Culture, and Food & Wine
- **Expert Author Profiles** - Learn from Italy travel experts like Marco Romano and Isabella Conti
- **Location-Based Discovery** - Find content specific to Italian cities and regions
- **Travel Tips Integration** - Practical advice embedded within each travel guide
- **Responsive Design** - Optimized for all devices with stunning imagery
- **SEO Optimized** - Full metadata and structured content for search engines

## Clone this Bucket

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=687ac2e11d52a5b67a27f2e1&clone_repository=687b345954968488c3019044)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. set apiEnvironment: staging cosmic config

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic SDK** - Headless CMS integration
- **Inter Font** - Modern typography

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Bun package manager
- A Cosmic account with content

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd italian-travel-blog
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Cosmic SDK Examples

### Fetching Posts with Categories and Authors
```typescript
import { cosmic } from '@/lib/cosmic'

const posts = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Include related objects
```

### Getting a Single Post with All Relations
```typescript
const post = await cosmic.objects
  .findOne({ type: 'posts', slug: 'your-post-slug' })
  .depth(1)
```

### Filtering Posts by Category
```typescript
const categoryPosts = await cosmic.objects
  .find({ 
    type: 'posts',
    'metadata.categories': categoryId 
  })
  .depth(1)
```

## 🎨 Cosmic CMS Integration

This application seamlessly integrates with your Cosmic bucket's content structure:

- **Posts** - Travel articles with rich content, featured images, and metadata
- **Authors** - Expert profiles with bios, avatars, and social links
- **Categories** - Organized content themes with custom colors and descriptions
- **Object Relationships** - Connected data between posts, authors, and categories

The staging environment is configured for development and testing, ensuring your content is always up-to-date during the development process.

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy with automatic builds on push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `out` (if using static export)
4. Add environment variables in Netlify dashboard

### Environment Variables for Production
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

The application is optimized for fast loading and SEO, making it perfect for travel content discovery and reader engagement.
<!-- README_END -->