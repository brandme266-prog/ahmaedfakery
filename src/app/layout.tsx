import type { Metadata, Viewport } from 'next'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'المهندس احمد فكري - رائد صناعات مكن الرخام في مصر و الشرق الأوسط',
  description: 'تبحث عن أفضل ماكينات الرخام والجرانيت؟ موقع المهندس احمد فكري (Fekry Group) يوفر لك أحدث المناشير (منشار 6 متر حمام زيت)، جلايات الرخام، والأوناش العلوية بأفضل الأسعار.',
  keywords: 'المهندس احمد فكري, احمد فكري, فكري جروب, Ahmed Fekry, Ahmed Fekri, Fekry Group, Marble Machines Egypt, ماكينات رخام, اسعار ماكينات الرخام في مصر, أوناش صناعية, ونش زرافة',
  openGraph: {
    title: 'المهندس احمد فكري - رائد صناعات مكن الرخام في مصر و الشرق الأوسط',
    description: 'تعرف على إنجازات المهندس احمد فكري وفكري جروب الرائدة في صناعة ماكينات الرخام والجرانيت والأوناش الثقيلة.',
    locale: 'ar_EG',
    type: 'website',
  },
  icons: {
    icon: '/img/logo.png',
    shortcut: '/img/logo.png',
    apple: '/img/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <nav className="navbar">
          <div className="container navbar-inner">
            {/* Logo & Navigation Links (Right side) */}
            <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
              <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/img/logo.png" alt="فكري جروب" width={180} height={60} className="nav-logo" style={{ objectFit: 'contain' }} priority />
              </Link>
              
              <div className="nav-links-container" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <Link href="/#about" className="nav-link">من نحن</Link>
                <Link href="/#products" className="nav-link">المنتجات</Link>
                <Link href="/blog" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  المقالات
                </Link>
              </div>
            </div>

            {/* WhatsApp Button (Left side) */}
            <div className="nav-wa-btn">
              <a href="https://wa.me/201011218141" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.5rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                واتساب
              </a>
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>

        {/* Floating WhatsApp Widget */}
        <a href="https://wa.me/201011218141" target="_blank" rel="noopener noreferrer" className="floating-whatsapp" title="تواصل معنا عبر واتساب">
          <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        </a>
      </body>
    </html>
  )
}
