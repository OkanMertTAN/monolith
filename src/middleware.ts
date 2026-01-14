import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 1. DEĞİŞİKLİK BURADA: 'ru' eklendi
const locales = ['tr', 'en', 'ar', 'ru']; 
const defaultLocale = 'tr';

export function middleware(request: NextRequest) {
  // Gidilen yolu al (Örn: /projeler)
  const pathname = request.nextUrl.pathname;

  // 1. Eğer dosya isteği ise (resim, css, favicon) karışma, devam etsin.
  if (
    pathname.startsWith('/_next') || // Next.js sistem dosyaları
    pathname.includes('.') ||        // Uzantılı dosyalar (image.png vb.)
    pathname.startsWith('/api')      // API rotaları
  ) {
    return;
  }

  // 2. Yolun başında dil kodu var mı? (Örn: /tr/..., /en/..., /ar/..., /ru/...)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // 3. Dil kodu yoksa, varsayılan dile (tr) yönlendir.
  if (!pathnameHasLocale) {
    const locale = defaultLocale;
    // URL'yi yeniden oluştur: http://site.com/projeler -> http://site.com/tr/projeler
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
}

export const config = {
  // Hangi yollarda çalışacağını belirle
  matcher: ['/((?!_next).*)'],
};