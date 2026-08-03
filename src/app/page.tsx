import Image from 'next/image'
import Link from 'next/link'
import { productsData } from '../data/products'
import { blogPosts } from '../data/blog'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            
            {/* Right Text Content */}
            <div className="fade-in" style={{ flex: '1 1 300px', textAlign: 'center' }}>
              <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(217, 119, 6, 0.1)', color: 'var(--accent-yellow)', borderRadius: 'var(--border-radius-lg)', fontWeight: '600', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                🏆 أكثر من 20 عاماً من الثقة والخبرة
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: '1.5rem', color: 'var(--text-primary)', lineHeight: '1.3' }}>
                المهندس احمد فكري (Ahmed Fekry) <br />
                <span style={{ color: 'var(--accent-yellow)' }}>أسطورة الماكينات الثقيلة</span>
              </h1>
              <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                تحت قيادة المهندس أحمد فكري (Eng. Ahmed Fekry)، نعيد تعريف معايير القوة والصلابة في صناعة ماكينات الرخام والجرانيت. نفخر بتقديم معدات مصرية تتحدى الزمن وتضاهي أعتى التكنولوجيا الأوروبية.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link href="#products" className="btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
                  تصفح منتجاتنا
                </Link>
                <Link href="/about" className="btn-primary" style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '0.8rem 2rem', boxShadow: 'none', fontSize: '1.1rem' }}>
                  تعرف علينا
                </Link>
              </div>
            </div>

            {/* Left Image Graphic */}
            <div className="fade-in" style={{ flex: '1 1 300px', position: 'relative', animationDelay: '0.2s', width: '100%', minHeight: 'clamp(300px, 40vw, 500px)', background: 'var(--bg-secondary)', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-glow)', display: 'flex', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <Image src="/img/WhatsApp-Image-2025-10-20-at-10.58.32-AM.jpeg" alt="صناعة ماكينات الرخام والجرانيت الثقيلة في مصر بإشراف المهندس احمد فكري" fill style={{ objectFit: 'cover' }} priority />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top right, rgba(0,0,0,0.1), transparent)' }} />
            </div>

          </div>
        </div>
        
        {/* Background Graphic */}
        <div style={{
          position: 'absolute',
          top: '-10%', right: '-10%', width: '60vw', height: '60vw',
          background: 'radial-gradient(circle, rgba(217, 119, 6, 0.04) 0%, transparent 60%)',
          zIndex: 1,
          borderRadius: '50%'
        }} />
      </section>

      {/* About Section */}
      <section id="about" className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="glass-panel" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ position: 'relative', width: 'clamp(150px, 30vw, 250px)', height: 'clamp(150px, 30vw, 250px)', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--accent-yellow)', marginBottom: '1rem' }}>
              <Image src="/img/500310758_548201025008210_6078741677372742104_n.jpg" alt="المهندس احمد فكري - Ahmed Fekry - خبير ومصنع ماكينات الرخام والجرانيت في الشرق الأوسط" fill style={{ objectFit: 'cover' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--accent-cyan)' }}>عن المهندس احمد فكري (Ahmed Fekry)</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px', lineHeight: '1.8' }}>
              تُعدّ "فكري جروب" (Fekry Group) بقيادة <strong>المهندس احمد فكري (Eng. Ahmed Fekry)</strong> قلعة صناعية شامخة في مجال المعدات الثقيلة، وخاصة في ابتكار وتصنيع ماكينات نشر وتلميع الرخام والجرانيت. بفضل خبرة هندسية تمتد لعقدين من الزمان، نجحنا في ترك بصمة لا تُمحى في كبرى مصانع الحجر الطبيعي في مصر والوطن العربي.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px', lineHeight: '1.8' }}>
              نحن لا نصنع مجرد ماكينات، بل نبني شراكات نجاح تدوم طويلاً. تحت إشراف المهندس أحمد فكري، كل معدة تخرج من مصانعنا تحمل ختم الجودة والأمان المطلق، مما يقلل من تكلفة الاستيراد ويدعم الاقتصاد الوطني بأعلى كفاءة.
            </p>
            <ul style={{ color: 'var(--text-primary)', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingRight: '1.5rem', textAlign: 'right' }}>
              <li>✔ دقة عالية في التقطيع بفضل نظام الحركة الميكانيكي المحكم.</li>
              <li>✔ تصميم صناعي يتحمل التشغيل المتواصل الشاق.</li>
              <li>✔ نظام حمام الزيت لإطالة عمر الماكينة وتقليل الأعطال.</li>
              <li>✔ خدمة ما بعد البيع وصيانة معتمدة وتوفير قطع الغيار.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services/Products Section */}
      <section id="products" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '3rem' }}>منتجاتنا المتميزة</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            {productsData.map((product) => (
              <div key={product.slug} className="glass-panel product-card" style={{ padding: '1.5rem', transition: 'transform 0.3s ease', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Link href={`/products/${product.slug}`} style={{ display: 'block', flexGrow: 1 }}>
                  <div style={{ position: 'relative', height: '250px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', overflow: 'hidden' }}>
                  <Image src={product.image || (product.images ? product.images[0] : '')} alt={`${product.title} - تصنيع المهندس احمد فكري (Ahmed Fekry)`} fill style={{ objectFit: 'cover' }} />
                </div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-yellow)', marginBottom: '0.5rem' }}>{product.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{product.shortDescription}</p>
                </Link>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                  <Link href={`/products/${product.slug}`} className="btn-primary" style={{ flex: 1, background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)', boxShadow: 'none', padding: '0.5rem', fontSize: '1rem' }}>
                    التفاصيل
                  </Link>
                  <a href={`https://wa.me/201011218141?text=${encodeURIComponent('مرحباً، أريد طلب ' + product.title)}`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, padding: '0.5rem', fontSize: '1rem' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    اطلب الآن
                  </a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section id="latest-posts" className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', margin: 0 }}>أحدث المقالات (لتصدر البحث)</h2>
            <Link href="/blog" className="btn-primary" style={{ background: 'transparent', color: 'var(--accent-yellow)', border: '1px solid var(--accent-yellow)', boxShadow: 'none' }}>
              عرض كل المقالات
            </Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.slug} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s ease' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: '1.4' }}>
                  {post.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', flexGrow: 1 }}>
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="btn-primary" style={{ width: '100%', padding: '0.6rem', fontSize: '1rem' }}>
                  اقرأ المقال كامل
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="glass-panel" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>تواصل مع فكري جروب</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>نحن شركاء في نجاح مصنعك. اتصل بنا الآن للحصول على استشارة أو عرض سعر.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'right' }}>
              <div>
                <h3 style={{ color: 'var(--accent-yellow)', marginBottom: '1rem' }}>أرقام التواصل</h3>
                <p>+2 01011218141</p>
                <p>+2 01001163633</p>
              </div>
              <div>
                <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>البريد الإلكتروني</h3>
                <p>ic.marblemachines@hotmail.com</p>
              </div>
              <div>
                <h3 style={{ color: 'var(--accent-orange)', marginBottom: '1rem' }}>فروعنا ومصانعنا</h3>
                <p>المصنع الأول: عرب أبو ساعد</p>
                <p>المصنع الثاني: المنصورة</p>
                <p>الإدارة: شق التعبان – أبراج الأمل برج ٩٩</p>
                <a 
                  href="https://share.google/QF31eqhLF6YvOiXWJ" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ display: 'inline-block', marginTop: '0.8rem', color: 'var(--accent-yellow)', textDecoration: 'underline' }}
                >
                  📍 موقعنا على خريطة جوجل
                </a>
              </div>
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:ic.marblemachines@hotmail.com" className="btn-primary">راسلنا عبر البريد</a>
              <a href="https://share.google/QF31eqhLF6YvOiXWJ" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'transparent', color: 'var(--accent-yellow)', border: '1px solid var(--accent-yellow)' }}>
                📍 الاتجاهات على الخريطة
              </a>
            </div>

            {/* Embedded Google Map */}
            <div style={{ marginTop: '3rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)', height: '350px' }}>
              <iframe 
                src="https://maps.google.com/maps?q=298R%2BX3P&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--bg-secondary)', padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <a href="https://www.facebook.com/1ahmedfekry/" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            فيسبوك
          </a>
          <a href="https://www.instagram.com/p/DLNjbixITRX/" target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            إنستجرام
          </a>
          <a href="https://www.tiktok.com/@eng.ahmed.fekry" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.13-3.72-5.46-.27-2.31.5-4.66 2.08-6.31 1.39-1.49 3.42-2.39 5.46-2.35v4.06c-1.12-.04-2.22.46-2.93 1.34-.84 1.05-.98 2.53-.41 3.73.57 1.18 1.84 1.96 3.14 1.95 1.51-.01 2.8-.97 3.22-2.42.13-.44.18-.9.18-1.35.01-6.19.01-12.38.02-18.57z"/></svg>
            تيك توك
          </a>
        </div>
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/ahmed-fekry" style={{ color: 'var(--accent-yellow)', fontWeight: '700', textDecoration: 'underline' }}>احمد فكري</Link>
          <Link href="/about" style={{ color: 'var(--text-secondary)' }}>من نحن</Link>
          <Link href="/blog" style={{ color: 'var(--text-secondary)' }}>المقالات</Link>
          <Link href="/products" style={{ color: 'var(--text-secondary)' }}>المنتجات</Link>
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>© 2026 فكري جروب لصناعة ماكينات الرخام والجرانيت (Fekry Group - Ahmed Fekry). جميع الحقوق محفوظة.</p>
      </footer>
    </>
  )
}
