"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCcw, HardHat, Phone } from "lucide-react";

// --- ÇEVİRİLER ---
const translations: any = {
  tr: {
    title: "SİSTEM ARIZASI",
    desc: "Sunucularımızda beklenmeyen bir <strong class='text-red-700'>statik yük</strong> oluştu. Mühendislerimiz şu an sahada ve sorunu çözmek için çalışıyorlar.",
    btn_reset: "Sistemi Yeniden Başlat",
    btn_support: "Destek Ekibi",
    footer: "Monolith Engineering Systems"
  },
  en: {
    title: "SYSTEM FAILURE",
    desc: "An unexpected <strong class='text-red-700'>static load</strong> has occurred on our servers. Our engineers are currently on-site working to resolve the issue.",
    btn_reset: "Reboot System",
    btn_support: "Support Team",
    footer: "Monolith Engineering Systems"
  },
  ar: {
    title: "فشل في النظام",
    desc: "حدث <strong class='text-red-700'>حمل ثابت</strong> غير متوقع على خوادمنا. مهندسونا في الموقع حالياً ويعملون على حل المشكلة.",
    btn_reset: "إعادة تشغيل النظام",
    btn_support: "فريق الدعم",
    footer: "أنظمة مونوليث الهندسية"
  },
  ru: {
    title: "СИСТЕМНЫЙ СБОЙ",
    desc: "На наших серверах возникла непредвиденная <strong class='text-red-700'>статическая нагрузка</strong>. Наши инженеры уже на месте и работают над устранением проблемы.",
    btn_reset: "Перезагрузить систему",
    btn_support: "Служба поддержки",
    footer: "Monolith Engineering Systems"
  }
};

// Hata sayfası props alır: error (hata detayı) ve reset (yeniden deneme fonksiyonu)
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();

  // URL'den dili algıla (Örn: /en/hatali-sayfa -> 'en')
  const getLang = () => {
    if (!pathname) return "tr";
    const pathLang = pathname.split("/")[1]; // İlk segmenti al
    return ["tr", "en", "ar", "ru"].includes(pathLang) ? pathLang : "tr";
  };

  const lang = getLang();
  const t = translations[lang];
  const isRtl = lang === "ar"; // Arapça için yön kontrolü

  useEffect(() => {
    // Hatayı loglama servisine gönderebilirsiniz (Sentry vb.)
    console.error(error);
  }, [error]);

  return (
    <main 
      className="min-h-screen bg-slate-50 flex items-center justify-center relative overflow-hidden font-sans text-slate-900 border-t-8 border-red-600"
      dir={isRtl ? "rtl" : "ltr"}
    >
      
      {/* ARKA PLAN - KIRMIZI TEHLİKE ŞERİDİ EFEKTİ */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[repeating-linear-gradient(45deg,#000,#000_10px,transparent_10px,transparent_20px)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-12 rounded-sm shadow-2xl border border-slate-200 max-w-2xl mx-auto"
        >
          {/* İKON */}
          <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-inner">
             <AlertTriangle size={40} />
          </div>

          <h1 className="text-6xl font-heading font-bold text-slate-900 mb-2">500</h1>
          <h2 className="text-2xl font-bold text-red-600 mb-6 uppercase tracking-widest">
            {t.title}
          </h2>

          {/* HTML İçerikli Açıklama (Bold metin için) */}
          <p 
            className="text-slate-600 text-lg mb-8 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.desc }}
          />

          {/* Hata Kodu Kutusu (LTR kalmalı çünkü kod evrenseldir) */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm mb-8 text-xs font-mono text-slate-500 text-left overflow-auto max-h-32" dir="ltr">
            <span className="font-bold text-red-500">Error Code:</span> {error.digest || "UNKNOWN_STRUCTURAL_FAILURE"} <br/>
            <span className="font-bold text-red-500">Message:</span> {error.message}
          </div>

          {/* AKSİYON BUTONLARI */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => reset()}
              whileHover={{ scale: 1.02, backgroundColor: "#b91c1c" }} // Hover: Daha koyu kırmızı
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-widest rounded-sm shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
            >
              <RefreshCcw size={18} /> {t.btn_reset}
            </motion.button>
            
            <button 
              onClick={() => window.location.href = `/${lang}/iletisim`}
              className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold uppercase tracking-widest rounded-sm hover:border-slate-900 hover:text-slate-900 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={18} /> {t.btn_support}
            </button>
          </div>

        </motion.div>
        
        <div className="mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
           <HardHat size={14} /> {t.footer}
        </div>

      </div>
    </main>
  );
}