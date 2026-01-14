"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Search, Ruler, ArrowLeft } from "lucide-react";

// --- ÇEVİRİLER ---
const translations: any = {
  tr: {
    title: "BU YAPI HENÜZ İNŞA EDİLMEDİ.",
    desc: "Aradığınız sayfa proje planlarımızda bulunamadı veya konumu değiştirildi. Lütfen rotanızı yeniden hesaplayın.",
    btn_home: "Ana Şantiyeye Dön",
    btn_back: "Geri Git"
  },
  en: {
    title: "THIS STRUCTURE IS NOT BUILT YET.",
    desc: "The page you are looking for was not found in our project plans or has been relocated. Please recalculate your route.",
    btn_home: "Return to Base",
    btn_back: "Go Back"
  },
  ar: {
    title: "لم يتم بناء هذا الهيكل بعد.",
    desc: "الصفحة التي تبحث عنها غير موجودة في خطط المشروع أو تم تغيير موقعها. يرجى إعادة حساب المسار.",
    btn_home: "العودة إلى الموقع",
    btn_back: "رجوع"
  },
  ru: {
    title: "ЭТО ЗДАНИЕ ЕЩЕ НЕ ПОСТРОЕНО.",
    desc: "Страница, которую вы ищете, не найдена в наших планах или ее местоположение изменилось. Пожалуйста, пересчитайте маршрут.",
    btn_home: "На Главную",
    btn_back: "Назад"
  }
};

export default function NotFound() {
  const pathname = usePathname();

  // URL'den dili algıla (Örn: /en/hatali-sayfa -> 'en')
  // Eğer dil bulunamazsa varsayılan olarak 'tr' yap
  const getLang = () => {
    if (!pathname) return "tr";
    const pathLang = pathname.split("/")[1]; // İlk segmenti al
    return ["tr", "en", "ar", "ru"].includes(pathLang) ? pathLang : "tr";
  };

  const lang = getLang();
  const t = translations[lang];
  const isRtl = lang === "ar"; // Arapça için yön kontrolü

  return (
    <main 
      className="min-h-screen bg-slate-50 flex items-center justify-center relative overflow-hidden font-sans text-slate-900"
      dir={isRtl ? "rtl" : "ltr"} // Arapça ise sayfayı ters çevir
    >
      
      {/* ARKA PLAN DOKULARI */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Teknik Izgara */}
         <div className="absolute inset-0 bg-[linear-gradient(#0f172a05_1px,transparent_1px),linear-gradient(90deg,#0f172a05_1px,transparent_1px)] bg-size-[40px_40px]"></div>
         {/* Silik Blueprint İkonu */}
         <div className={`absolute -bottom-20 opacity-[0.03] ${isRtl ? "-left-20" : "-right-20"}`}>
           <Ruler size={400} />
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* İKON & BAŞLIK */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white border border-slate-200 rounded-sm shadow-xl mb-8 relative">
             <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full animate-ping"></div>
             <Search size={40} className="text-slate-700" />
          </div>

          <h1 className="text-8xl md:text-9xl font-heading font-bold text-slate-900 mb-4 tracking-tighter">
            4<span className="text-amber-500">0</span>4
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 uppercase">
            {t.title}
          </h2>

          {/* Açıklama Kutusu */}
          <p className={`text-slate-500 text-lg max-w-lg mx-auto mb-10 leading-relaxed bg-white/50 py-2 rounded-r-sm ${isRtl ? "border-r-4 border-amber-500 pr-4" : "border-l-4 border-amber-500 pl-4"}`}>
            {t.desc}
          </p>

          {/* BUTONLAR (Fiziksel His) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${lang}`}>
              <motion.button 
                whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest rounded-sm shadow-lg flex items-center gap-2 group"
              >
                <Home size={18} /> {t.btn_home}
              </motion.button>
            </Link>

            <button 
              onClick={() => window.history.back()}
              className="px-8 py-4 bg-white border border-slate-300 text-slate-600 font-bold uppercase tracking-widest rounded-sm hover:border-slate-900 hover:text-slate-900 transition-colors flex items-center gap-2"
            >
              {/* İkon yönünü Arapça'da çevirmek için mantık */}
              <ArrowLeft size={18} className={isRtl ? "rotate-180" : ""} /> {t.btn_back}
            </button>
          </div>

        </motion.div>

      </div>
    </main>
  );
}