import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'احمد فكري - المهندس أحمد فكري | Ahmd Fekry | Ahmed Fekry',
  description: 'احمد فكري - مهندس وصناعي مصري، رائد تصنيع ماكينات الرخام والجرانيت والأوناش العلوية في مصر والشرق الأوسط. مؤسس فكري جروب. Ahmed Fekry.',
  keywords: 'احمد فكري, أحمد فكري, Ahmed Fekry, Ahmd Fekry, فكري جروب, ماكينات رخام, Fekry Group, مهندس احمد فكري, المهندس احمد فكري',
  openGraph: {
    title: 'احمد فكري | Ahmed Fekry - رائد صناعة ماكينات الرخام في مصر',
    description: 'احمد فكري - مهندس وصناعي مصري، رائد تصنيع ماكينات الرخام والجرانيت. مؤسس فكري جروب. Ahmed Fekry.',
    type: 'profile',
  },
}

export default function AhmedFekryPage() {
  return (
    <div className="section" style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

      {/* Structured Data - Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "احمد فكري",
            "alternateName": ["Ahmed Fekry", "أحمد فكري", "Ahmd Fekry", "المهندس احمد فكري", "Eng. Ahmed Fekry"],
            "jobTitle": "مهندس ورائد صناعة ماكينات الرخام والجرانيت",
            "description": "احمد فكري مهندس مصري ورائد صناعة ماكينات الرخام والجرانيت والأوناش العلوية في مصر والشرق الأوسط. مؤسس شركة فكري جروب.",
            "url": "https://ahfekry.com",
            "image": "https://ahfekry.com/img/500310758_548201025008210_6078741677372742104_n.jpg",
            "nationality": "مصري",
            "knowsAbout": ["ماكينات الرخام", "الجرانيت", "الأوناش العلوية", "الصناعة الثقيلة", "Marble Machines", "Granite Machines", "Industrial Cranes"],
            "sameAs": [
              "https://www.facebook.com/1ahmedfekry/",
              "https://www.tiktok.com/@eng.ahmed.fekry",
              "https://ahfekry.com/about"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "فكري جروب",
              "alternateName": "Fekry Group",
              "url": "https://ahfekry.com"
            }
          })
        }}
      />

      <div className="container">

        {/* Hero */}
        <div style={{ textAlign: 'center', paddingTop: '4rem', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--accent-yellow)', marginBottom: '1rem', lineHeight: '1.3' }}>
            احمد فكري
          </h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
            Ahmed Fekry | المهندس أحمد فكري
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '1rem auto 0' }}>
            مهندس وصناعي مصري بارز، رائد تصنيع ماكينات الرخام والجرانيت والأوناش العلوية في مصر والشرق الأوسط
          </p>
        </div>

        {/* Profile Card */}
        <div className="glass-panel" style={{ padding: '3rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>

            <div style={{ flex: '0 0 auto', width: 'clamp(200px, 25vw, 300px)', height: 'clamp(200px, 25vw, 300px)', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--accent-yellow)', boxShadow: 'var(--shadow-glow)', position: 'relative' }}>
              <Image
                src="/img/500310758_548201025008210_6078741677372742104_n.jpg"
                alt="احمد فكري - Ahmed Fekry - مهندس ماكينات الرخام والجرانيت"
                fill style={{ objectFit: 'cover', objectPosition: 'top' }}
                priority
              />
            </div>

            <div style={{ flex: '1 1 300px' }}>
              <h2 style={{ color: 'var(--accent-cyan)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                من هو احمد فكري؟
              </h2>
              <p style={{ color: 'var(--text-primary)', lineHeight: '1.9', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                <strong>احمد فكري</strong> (بالإنجليزية: <strong>Ahmed Fekry</strong>) مهندس مصري ورجل صناعة من الطراز الأول. اشتهر بتأسيسه لمؤسسة <strong>فكري جروب (Fekry Group)</strong>، التي أصبحت المرجع الأول في تصنيع ماكينات الرخام والجرانيت والأوناش العلوية داخل مصر.
              </p>
              <p style={{ color: 'var(--text-primary)', lineHeight: '1.9', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                يُعرف <strong>احمد فكري</strong> بابتكاره لتقنية <strong>منشار حمام الزيت</strong> التي غيّرت قواعد اللعبة في مصانع شق الثعبان، وتصدير معداته إلى دول عربية وأفريقية متعددة.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <span style={{ background: 'rgba(217,119,6,0.1)', color: 'var(--accent-yellow)', padding: '0.4rem 1rem', borderRadius: '20px', fontWeight: '600' }}>🏭 مصنّع ماكينات ثقيلة</span>
                <span style={{ background: 'rgba(6,182,212,0.1)', color: 'var(--accent-cyan)', padding: '0.4rem 1rem', borderRadius: '20px', fontWeight: '600' }}>🔧 مهندس مصري</span>
                <span style={{ background: 'rgba(217,119,6,0.1)', color: 'var(--accent-yellow)', padding: '0.4rem 1rem', borderRadius: '20px', fontWeight: '600' }}>🌍 تصدير للشرق الأوسط</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Facts */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {[
            { label: 'الاسم الكامل', value: 'المهندس احمد فكري', en: 'Ahmed Fekry' },
            { label: 'المهنة', value: 'مهندس صناعي ورجل أعمال', en: 'Industrial Engineer & Businessman' },
            { label: 'الشركة', value: 'فكري جروب', en: 'Fekry Group' },
            { label: 'التخصص', value: 'ماكينات الرخام والجرانيت والأوناش', en: 'Marble Machines & Cranes' },
            { label: 'الجنسية', value: 'مصري', en: 'Egyptian' },
            { label: 'النشاط', value: 'تصنيع وتصدير معدات ثقيلة', en: 'Manufacturing & Export' },
          ].map((fact, i) => (
            <div key={i} className="glass-panel" style={{ padding: '1.5rem' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{fact.label}</p>
              <p style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1rem' }}>{fact.value}</p>
              <p style={{ color: 'var(--accent-yellow)', fontSize: '0.85rem' }}>{fact.en}</p>
            </div>
          ))}
        </div>

        {/* Disambiguation Section - تمييز احمد فكري */}
        <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3rem', borderRight: '4px solid var(--accent-cyan)' }}>
          <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontSize: '1.6rem' }}>
            توضيح: أي احمد فكري تبحث عنه؟
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            يوجد عدة أشخاص بالاسم "احمد فكري". هذه الصفحة مخصصة للمهندس <strong>احمد فكري</strong> صاحب <strong>فكري جروب</strong> ورائد صناعة ماكينات الرخام والجرانيت في مصر.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li style={{ color: 'var(--accent-yellow)', fontWeight: '700', fontSize: '1.1rem' }}>
              ✅ <strong>المهندس احمد فكري</strong> (هذه الصفحة) - رائد صناعة ماكينات الرخام، مؤسس فكري جروب
            </li>
            <li style={{ color: 'var(--text-secondary)' }}>
              ○ أحمد فكري الصغير - لاعب كرة قدم مصري سابق
            </li>
            <li style={{ color: 'var(--text-secondary)' }}>
              ○ أحمد فكري - مسؤول في شركة NERIC للسكك الحديدية
            </li>
          </ul>
        </div>

        {/* Products Section */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--accent-yellow)', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            أبرز ابتكارات وأعمال احمد فكري
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '⚙️', title: 'منشار حمام الزيت 6 متر', desc: 'ابتكار اشتهر به احمد فكري - يعزل التروس بالزيت لمضاعفة العمر الافتراضي وحماية المصانع من الغبار.' },
              { icon: '✨', title: 'جلاية الرخام 20 رأس', desc: 'ماكينة تلميع فائقة الجودة من إنتاج فكري جروب تعطي لمعاناً لا يُضاهى لألواح الرخام والجرانيت.' },
              { icon: '🏗️', title: 'ونش الزرافة والساحة', desc: 'أوناش علوية بحمولة تصل لـ 100 طن، تُصنعها شركة احمد فكري لخدمة أكبر مصانع الرخام في مصر.' },
              { icon: '🔩', title: 'ماكينة نشر الجرانيت 13 اسطوانة', desc: 'معدة ثقيلة من أحدث خطوط إنتاج فكري جروب لتقطيع الجرانيت بدقة متناهية وبأقل نسبة هدر.' },
            ].map((item, i) => (
              <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '0.8rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social & Contact */}
        <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--accent-yellow)', marginBottom: '1rem' }}>
            تواصل مع احمد فكري
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            تابع المهندس احمد فكري (Ahmed Fekry) على منصات التواصل الاجتماعي وتواصل معنا مباشرة
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <a href="https://www.facebook.com/1ahmedfekry/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: '#1877F2' }}>
              فيسبوك احمد فكري
            </a>
            <a href="https://www.tiktok.com/@eng.ahmed.fekry" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: '#000' }}>
              تيك توك احمد فكري
            </a>
            <a href="https://wa.me/201011218141" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: '#25d366' }}>
              واتساب فكري جروب
            </a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
          <Link href="/about" className="glass-panel" style={{ padding: '1.5rem', textDecoration: 'none', textAlign: 'center', transition: 'all 0.3s' }}>
            <p style={{ color: 'var(--accent-yellow)', fontWeight: '700' }}>من نحن</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>قصة احمد فكري الكاملة</p>
          </Link>
          <Link href="/products" className="glass-panel" style={{ padding: '1.5rem', textDecoration: 'none', textAlign: 'center' }}>
            <p style={{ color: 'var(--accent-yellow)', fontWeight: '700' }}>المنتجات</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>معدات فكري جروب</p>
          </Link>
          <Link href="/blog/قصة-نجاح-المهندس-احمد-فكري" className="glass-panel" style={{ padding: '1.5rem', textDecoration: 'none', textAlign: 'center' }}>
            <p style={{ color: 'var(--accent-yellow)', fontWeight: '700' }}>قصة النجاح</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>رحلة المهندس احمد فكري</p>
          </Link>
          <Link href="/blog" className="glass-panel" style={{ padding: '1.5rem', textDecoration: 'none', textAlign: 'center' }}>
            <p style={{ color: 'var(--accent-yellow)', fontWeight: '700' }}>المقالات</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>مقالات تقنية من احمد فكري</p>
          </Link>
        </div>

      </div>
    </div>
  )
}
