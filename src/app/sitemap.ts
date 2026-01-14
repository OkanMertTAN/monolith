import { MetadataRoute } from 'next';
import { projectsData } from '@/data/projects'; // Proje verilerini çekiyoruz

// LÜTFEN KENDİ DOMAIN ADRESİNİZİ BURAYA YAZIN (Sonunda slash olmasın)
const SITE_URL = "https://www.monolith.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. DEĞİŞİKLİK: 'ru' eklendi
  const languages = ['tr', 'en', 'ar', 'ru'];
  
  // Sabit Sayfalar
  const routes = [
    '', // Ana Sayfa
    '/kurumsal',
    '/projeler',
    '/hizmetler',
    '/teknik',
    '/sss',
    '/kariyer',
    '/iletisim',
  ];

  let sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. DÖNGÜ: Tüm Diller İçin Sabit Sayfaları Oluştur
  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${SITE_URL}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly', // Ana sayfa günlük, diğerleri haftalık taranır
        priority: route === '' ? 1 : 0.8, // Ana sayfa önceliği 1, diğerleri 0.8
      });
    });
  });

  // 2. DÖNGÜ: Dinamik Proje Sayfalarını Oluştur (/projeler/[slug])
  // Bu kısım Google'ın her bir projeyi ayrı ayrı indekslemesini sağlar.
  languages.forEach((lang) => {
    // O dile ait projeleri al (Eğer o dilde veri yoksa boş dizi döner)
    const projects = projectsData[lang] || [];

    projects.forEach((project: any) => {
      sitemapEntries.push({
        url: `${SITE_URL}/${lang}/projeler/${project.slug}`,
        lastModified: new Date(), // İdealde projenin güncellenme tarihi olmalı
        changeFrequency: 'monthly',
        priority: 0.9, // Projeler önemlidir, yüksek öncelik veriyoruz
        // Google Görseller SEO'su için resim ekliyoruz
        images: [project.image], 
      });
    });
  });

  return sitemapEntries;
}