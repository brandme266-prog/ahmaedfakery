import Link from 'next/link'
import { blogPosts } from '@/data/blog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'المقالات - المهندس احمد فكري',
  description: 'أحدث المقالات والأخبار عن المهندس احمد فكري وفكري جروب لصناعة الماكينات الثقيلة.',
}

export default function BlogList() {
  return (
    <div className="container section">
      <h1 style={{ fontSize: '3rem', color: 'var(--accent-yellow)', textAlign: 'center', marginBottom: '3rem' }}>
        مقالات وأخبار فكري جروب
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {blogPosts.map((post) => (
          <div key={post.slug} className="glass-panel product-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)' }}>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <span>{post.date}</span> | <span>بقلم: {post.author}</span>
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>
              {post.excerpt}
            </p>
            <Link href={`/blog/${post.slug}`} className="btn-primary" style={{ marginTop: 'auto', textAlign: 'center', padding: '0.5rem 1rem' }}>
              اقرأ المزيد
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
