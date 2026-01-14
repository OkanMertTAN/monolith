import type { Metadata } from "next";
import { Oswald, Inter, Cairo } from "next/font/google"; 
import "../globals.css"; 
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Preloader from "@/components/layout/Preloader";
import { sozluk } from "@/data/sozluk"; 

// --- FONT AYARLARI ---
// 1. DEĞİŞİKLİK: 'cyrillic' subset'i eklendi (Rusça için)
const oswald = Oswald({ 
  subsets: ["latin", "cyrillic"], 
  variable: "--font-oswald",
  weight: ['200', '400', '700'] 
});

const inter = Inter({ 
  subsets: ["latin", "cyrillic"], 
  variable: "--font-inter",
  weight: ['300', '400', '600'] 
});

// Arapça için özel font (Değişmedi)
const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ['300', '400', '600', '700'],
});

// --- SEO AYARLARI ---
const SITE_URL = "https://www.monolith.com.tr"; 

// Dinamik Metadata Oluşturucu (SEO)
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  // Sözlükten ilgili dilin SEO verisini çekiyoruz
  // Eğer sozluk[lang] yoksa varsayılan olarak 'tr' kullanılır
  const t = sozluk[lang]?.seo || sozluk["tr"].seo; 

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t.site_name,
      template: `%s | ${t.site_name}` 
    },
    description: t.home.desc,
    // 2. DEĞİŞİKLİK: Rusça (ru) hreflang'e eklendi
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'tr': '/tr',
        'en': '/en',
        'ar': '/ar',
        'ru': '/ru',
      },
    },
    openGraph: {
      title: t.site_name,
      description: t.home.desc,
      url: `${SITE_URL}/${lang}`,
      siteName: t.site_name,
      images: [
        {
          url: '/og-image.jpg', 
          width: 1200,
          height: 630,
          alt: t.site_name,
        },
      ],
      locale: lang,
      type: 'website',
    },
  };
}

// --- ANA LAYOUT BİLEŞENİ ---
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  
  // Params ve Yön (Direction) belirleme
  const { lang } = await params;
  const isRtl = lang === "ar"; // Rusça LTR (Soldan Sağa) olduğu için özel bir ayara gerek yok

  return (
    <html lang={lang} dir={isRtl ? "rtl" : "ltr"}>
      <body 
        className={`
          ${oswald.variable} 
          ${inter.variable} 
          ${isRtl ? cairo.variable : ""} 
          antialiased bg-[#050505] text-white selection:bg-amber-500 selection:text-white
          ${isRtl ? "font-arabic" : ""} 
        `}
      >
        {/* 1. SİNEMATİK YÜKLEME EKRANI */}
        <Preloader />

        {/* 2. SCROLL PROGRESS BAR */}
        <ScrollProgress />

        <Navbar />
        
        {children}
        
        <Footer />
        
        <CookieBanner />
        
        <WhatsAppWidget />
      </body>
    </html>
  );
}