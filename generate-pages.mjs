import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const products = ['granite-saw-13-blades', 'polishing-machine-10-heads', 'giraffe-flag-crane', 'yard-crane-100-ton'];
const blogs = ['marble-granite-machines-egypt-fekry-group', 'overhead-cranes-marble-factories', 'marble-machine-prices-egypt-guide', 'ahmed-fekry-industrial-pioneer', 'marble-machines-maintenance-guide', 'shaq-el-thoban-oil-bath-saw-preference'];

const productTemplate = (slug) => `import Image from 'next/image'
import Link from 'next/link'
import { productsData } from '../../../data/products'
import { notFound } from 'next/navigation'

export default function ProductPage() {
  const product = productsData.find((p) => p.slug === '${slug}')
  
  if (!product) {
    notFound()
  }

  return (
    <div className="container section" style={{ maxWidth: '900px' }}>
      <Link href="/#products" style={{ color: 'var(--accent-yellow)', marginBottom: '2rem', display: 'inline-block', fontWeight: 'bold' }}>
        &rarr; العودة إلى المنتجات
      </Link>
      
      <div className="glass-panel" style={{ padding: '2rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div style={{ position: 'relative', height: '400px', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-glow)' }}>
          <Image src={product.image} alt={product.title} fill style={{ objectFit: 'cover' }} priority />
        </div>
        
        <div>
          <h1 style={{ fontSize: '2rem', color: 'var(--accent-orange)' }}>{product.title}</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 600 }}>
            {product.shortDescription}
          </p>
          <p style={{ color: 'var(--text-primary)', marginBottom: '2rem', lineHeight: '1.8' }}>
            {product.fullDescription}
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ color: 'var(--accent-cyan)' }}>المواصفات الفنية:</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {product.specs.map((spec, idx) => (
                <div key={idx} style={{ background: 'rgba(2, 132, 199, 0.1)', color: 'var(--accent-cyan)', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  {spec.name}: {spec.value}
                </div>
              ))}
            </div>

            <a href={\`https://wa.me/201090080915?text=\${encodeURIComponent('مرحباً، أريد طلب ' + product.title)}\`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{ marginLeft: '0.5rem' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              اطلب الآن عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
`;

const blogTemplate = (slug) => `import { blogPosts } from '@/data/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === '${slug}')
  
  if (!post) {
    return { title: 'المقال غير موجود' }
  }

  return {
    title: \`\${post.title} - المهندس احمد فكري\`,
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

export default function BlogPost() {
  const post = blogPosts.find((p) => p.slug === '${slug}')

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
`;

products.forEach(slug => {
  const dir = path.join(__dirname, 'src', 'app', 'products', slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), productTemplate(slug));
  console.log('Created product page:', slug);
});

blogs.forEach(slug => {
  const dir = path.join(__dirname, 'src', 'app', 'blog', slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), blogTemplate(slug));
  console.log('Created blog page:', slug);
});
