import { blogPosts } from '@/data/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  
  if (!post) {
    return { title: 'المقال غير موجود' }
  }

  return {
    title: `${post.title} - المهندس احمد فكري`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container section" style={{ maxWidth: '800px' }}>
      <Link href="/blog" style={{ color: 'var(--accent-yellow)', marginBottom: '2rem', display: 'inline-block' }}>
        &rarr; العودة إلى المقالات
      </Link>
      
      <article className="glass-panel" style={{ padding: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>
          {post.title}
        </h1>
        <div style={{ color: 'var(--text-secondary)', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
          <span>تاريخ النشر: {post.date}</span> | <span>بقلم: {post.author}</span>
        </div>
        
        <div 
          style={{ lineHeight: '1.8', color: 'var(--text-primary)', fontSize: '1.1rem' }}
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>
    </div>
  )
}
