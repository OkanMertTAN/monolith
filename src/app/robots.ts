import { MetadataRoute } from 'next';

const SITE_URL = "https://www.monolith.com.tr"; // Domain adresiniz

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Googlebot ve diğer tüm iyi huylu botlar için kurallar
        userAgent: '*',
        allow: '/', // Tüm siteye izin ver
        disallow: [
          '/api/',      // API rotalarını taramasına gerek yok (Sunucu yükünü azaltır)
          '/_next/',    // Next.js sistem dosyaları
          '/static/',   // Statik dosyalar
          '/private/',  // Özel klasörler (varsa)
          '/*?*',       // Gereksiz parametreli URL'leri (arama sonuçları vb.) engelle (Duplicate Content önler)
        ],
      },
      {
        // Google Görseller Botu için özel izin
        userAgent: 'Googlebot-Image',
        allow: '/*',
        disallow: [],
      }
    ],
    // Site haritasının yerini açıkça belirtiyoruz
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL, // Host direktifi (Bazı eski botlar için faydalıdır)
  };
}