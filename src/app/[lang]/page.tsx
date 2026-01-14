// src/app/[lang]/page.tsx

import { Metadata } from "next";
import { sozluk } from "@/data/sozluk";
import HomeClient from "@/components/home/HomeClient"; // Az önce oluşturduğumuz bileşen

// --- SEO AYARLARI (METADATA) ---
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  // Sözlükten SEO bilgilerini çek (Yoksa TR kullan)
  const t = sozluk[lang]?.seo?.home || sozluk.tr.seo.home;

  return {
    title: t.title,
    description: t.desc,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'tr': '/tr',
        'en': '/en',
        'ar': '/ar',
      },
    },
  };
}

// --- ANA SAYFA (SERVER COMPONENT) ---
export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  
  // URL'den dili alıyoruz (Next.js 15 için await şart)
  const { lang } = await params;

  // Client Component'i çağırıyoruz ve dili ona iletiyoruz
  return <HomeClient lang={lang} />;
}