import Image from 'next/image'
import Link from 'next/link'
import { productsData } from '../../../data/products'
import { notFound } from 'next/navigation'


export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productsData.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <div className="container" style={{ padding: '4rem var(--space-6)', minHeight: '80vh' }}>
        
        {/* Breadcrumb */}
        <div style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          <Link href="/" className="nav-link" style={{ padding: 0 }}>الرئيسية</Link> &gt; 
          <span style={{ color: 'var(--accent-yellow)', marginLeft: '0.5rem', marginRight: '0.5rem' }}>{product.title}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          {/* Right/Top: Details */}
          <div className="fade-in">
            <h1 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {product.title}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              {product.fullDescription}
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>المميزات الرئيسية</h2>
            <ul style={{ color: 'var(--text-secondary)', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingRight: '1.5rem' }}>
              {product.features.map((feature, index) => (
                <li key={index}>✔ {feature}</li>
              ))}
            </ul>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>المواصفات الفنية</h2>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--border-radius-md)', padding: '1.5rem', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
              {product.specs.map((spec, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: index !== product.specs.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                  <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{spec.name}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{spec.value}</span>
                </div>
              ))}
            </div>

            <a href={`https://wa.me/201090080915?text=${encodeURIComponent('مرحباً، أريد طلب ' + product.title)}`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{ marginLeft: '0.5rem' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              اطلب الآن عبر واتساب
            </a>
          </div>

          {/* Left: Image */}
          <div className="fade-in" style={{ position: 'relative', width: '100%', minHeight: '400px', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-glow)', border: '1px solid var(--border-color)', animationDelay: '0.2s', background: 'var(--bg-secondary)' }}>
            <Image src={product.image} alt={product.title} fill style={{ objectFit: 'contain' }} priority />
          </div>

        </div>
      </div>
    </>
  )
}
