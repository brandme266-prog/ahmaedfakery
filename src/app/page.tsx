import Image from 'next/image'
import Link from 'next/link'
import { productsData } from '../data/products'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            
            {/* Right Text Content */}
            <div className="fade-in" style={{ flex: '1 1 400px' }}>
              <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(217, 119, 6, 0.1)', color: 'var(--accent-yellow)', borderRadius: 'var(--border-radius-lg)', fontWeight: '600', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                🏆 أكثر من 20 عاماً من الثقة والخبرة
              </span>
              <h1 style={{ fontSize: '3.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', lineHeight: '1.3' }}>
                المهندس احمد فكري <br />
                <span style={{ color: 'var(--accent-yellow)' }}>أسطورة الماكينات الثقيلة</span>
              </h1>
              <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '600px' }}>
                تحت قيادة المهندس أحمد فكري، نعيد تعريف معايير القوة والصلابة في صناعة ماكينات الرخام والجرانيت. نفخر بتقديم معدات مصرية تتحدى الزمن وتضاهي أعتى التكنولوجيا الأوروبية.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="#products" className="btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
                  تصفح منتجاتنا
                </Link>
                <Link href="#about" className="btn-primary" style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '0.8rem 2rem', boxShadow: 'none', fontSize: '1.1rem' }}>
                  تعرف علينا
                </Link>
              </div>
            </div>

            {/* Left Image Graphic */}
            <div className="fade-in" style={{ flex: '1 1 400px', position: 'relative', animationDelay: '0.2s', width: '100%', minHeight: '500px', background: 'var(--bg-secondary)', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-glow)', display: 'flex', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <Image src="/img/WhatsApp-Image-2025-10-20-at-10.58.32-AM.jpeg" alt="ماكينات الرخام والجرانيت" fill style={{ objectFit: 'cover' }} priority />
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
            <div style={{ position: 'relative', width: '250px', height: '250px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--accent-yellow)', marginBottom: '1rem' }}>
              <Image src="/img/500310758_548201025008210_6078741677372742104_n.jpg" alt="المهندس احمد فكري" fill style={{ objectFit: 'cover' }} />
            </div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-cyan)' }}>عن المهندس احمد فكري</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px', lineHeight: '1.8' }}>
              تُعدّ "فكري جروب" بقيادة <strong>المهندس احمد فكري</strong> قلعة صناعية شامخة في مجال المعدات الثقيلة، وخاصة في ابتكار وتصنيع ماكينات نشر وتلميع الرخام والجرانيت. بفضل خبرة هندسية تمتد لعقدين من الزمان، نجحنا في ترك بصمة لا تُمحى في كبرى مصانع الحجر الطبيعي في مصر والوطن العربي.
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
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>منتجاتنا المتميزة</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {productsData.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.slug} style={{ display: 'block' }}>
                <div className="glass-panel product-card" style={{ padding: '1.5rem', transition: 'transform 0.3s ease', cursor: 'pointer', height: '100%' }}>
                  <div style={{ position: 'relative', height: '250px', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem', background: '#e2e8f0' }}>
                    <Image src={product.image} alt={product.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-yellow)', marginBottom: '0.5rem' }}>{product.title}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{product.shortDescription}</p>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>تواصل مع فكري جروب</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>نحن شركاء في نجاح مصنعك. اتصل بنا الآن للحصول على استشارة أو عرض سعر.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'right' }}>
              <div>
                <h3 style={{ color: 'var(--accent-yellow)', marginBottom: '1rem' }}>أرقام التواصل</h3>
                <p>+2 01011218141</p>
                <p>+2 01001163633</p>
                <p>+2 01090080915</p>
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
              </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <a href="mailto:ic.marblemachines@hotmail.com" className="btn-primary">راسلنا عبر البريد</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--bg-secondary)', padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <p style={{ color: 'var(--text-secondary)' }}>© 2026 فكري جروب لصناعة ماكينات الرخام والجرانيت. جميع الحقوق محفوظة.</p>
      </footer>
    </>
  )
}
