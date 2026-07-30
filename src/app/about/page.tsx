import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'من نحن - المهندس احمد فكري | Ahmed Fekry',
  description: 'تعرف على القصة الكاملة للمهندس احمد فكري (Ahmed Fekry)، رائد صناعة ماكينات الرخام والجرانيت، ومؤسس فكري جروب في الشرق الأوسط.',
}

export default function AboutPage() {
  return (
    <div className="section" style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--accent-yellow)', marginBottom: '1rem' }}>
            المهندس احمد فكري (Ahmed Fekry)
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            أسطورة الصناعة الثقيلة ورائد ابتكار ماكينات الرخام والجرانيت في مصر والشرق الأوسط.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: '24px' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'flex-start' }}>
            
            {/* Image */}
            <div style={{ flex: '1 1 300px', position: 'relative', height: '500px', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-glow)' }}>
              <Image src="/img/500310758_548201025008210_6078741677372742104_n.jpg" alt="المهندس احمد فكري - Ahmed Fekry - خبير ومصنع ماكينات الرخام" fill style={{ objectFit: 'cover', objectPosition: 'top' }} priority />
            </div>

            {/* Content Text */}
            <div style={{ flex: '2 1 500px', color: 'var(--text-primary)', fontSize: '1.15rem', lineHeight: '1.8' }}>
              
              <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>بداية الرحلة والرؤية الثاقبة</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                بدايةً، انطلقت رحلة <strong>المهندس احمد فكري (Ahmed Fekry)</strong> من إيمان عميق بأن العقل المصري قادر على منافسة التكنولوجيا الأوروبية. في وقت كانت تعتمد فيه منطقة "شق الثعبان" وكبرى المناطق الصناعية بالكامل على الاستيراد، قرر المهندس أحمد تغيير هذا الواقع وتأسيس كيان صناعي قوي يعتمد على الهندسة الدقيقة والابتكار.
              </p>

              <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>لماذا يتصدر Ahmed Fekry صناعة الماكينات؟</h2>
              <p style={{ marginBottom: '1rem' }}>
                علاوة على ذلك، لم يأتِ هذا النجاح من فراغ، بل كان نتاجاً لسنين من البحث والتطوير. وفي السياق ذاته، يمكننا تلخيص أسباب هذا التفوق في النقاط التالية:
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><span style={{ color: 'var(--accent-yellow)', marginLeft: '0.5rem' }}>✔</span><strong>الاعتمادية المطلقة:</strong> تصميم ماكينات تتحمل أقسى ظروف العمل المستمر بفضل خامات الصلب عالية الجودة.</li>
                <li><span style={{ color: 'var(--accent-yellow)', marginLeft: '0.5rem' }}>✔</span><strong>تكنولوجيا حمام الزيت:</strong> ابتكار نظام حمام الزيت في المناشير لحماية التروس من غبار الرخام وإطالة عمرها الافتراضي.</li>
                <li><span style={{ color: 'var(--accent-yellow)', marginLeft: '0.5rem' }}>✔</span><strong>السرعة والدقة:</strong> تصنيع جلايات ومناشير تعطي إنتاجية مضاعفة ولمعاناً لا يُضاهى.</li>
                <li><span style={{ color: 'var(--accent-yellow)', marginLeft: '0.5rem' }}>✔</span><strong>دعم محلي فوري:</strong> توفير قطع الغيار محلياً بشكل فوري، مما يمنع توقف المصانع عن العمل.</li>
              </ul>

              <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>خطواتنا نحو المستقبل</h2>
              <p style={{ marginBottom: '1rem' }}>
                بناءً على ذلك، وضع <strong>المهندس احمد فكري</strong> خارطة طريق مستقبلية للارتقاء بـ "فكري جروب" (Fekry Group). وتتضمن هذه الخطة:
              </p>
              <ol style={{ listStyleType: 'decimal', paddingRight: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                <li>التوسع في التصدير لدول الخليج والأسواق الإفريقية، لإثبات كفاءة الماكينة المصرية.</li>
                <li>دمج التكنولوجيا الرقمية وأنظمة التحكم الآلي (CNC) في معدات الجرانيت الحديثة.</li>
                <li>توسيع خطوط إنتاج <Link href="/products" style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}>الأوناش العلوية</Link> وتوريدها لكبرى الشركات.</li>
              </ol>

              <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>تواصل معنا</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                من ناحية أخرى، نؤمن بأهمية التواصل الدائم مع عملائنا ومستثمرينا. يمكنك التعرف على أحدث الأخبار من خلال قراءة <Link href="/blog" style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}>مقالاتنا التقنية</Link>. وفي الختام، ندعوك لمتابعة الحسابات الرسمية (الداعمة) للمهندس احمد فكري لتبقى على اطلاع دائم:
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://www.facebook.com/1ahmedfekry/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: '#1877F2' }}>
                  فيسبوك Ahmed Fekry
                </a>
                <a href="https://www.tiktok.com/@eng.ahmed.fekry" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: '#000000' }}>
                  تيك توك الرسمي
                </a>
                <a href="https://wa.me/201011218141" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: '#25d366' }}>
                  واتساب فكري جروب
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
