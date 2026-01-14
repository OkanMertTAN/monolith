"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, ShieldCheck, X } from "lucide-react";
import Link from "next/link";

// --- ÇEVİRİLER ---
const cookieTranslations: any = {
  tr: {
    title: "Gizlilik Tercihleri",
    text_pre: "Size daha iyi bir deneyim sunmak ve trafiği analiz etmek için çerezleri kullanıyoruz. Verileriniz,",
    link_text: "KVKK Aydınlatma Metni",
    text_post: "kapsamında işlenmektedir.",
    btn_accept: "Kabul Et",
    btn_decline: "Reddet",
    link_url: "/tr/kvkk"
  },
  en: {
    title: "Privacy Preferences",
    text_pre: "We use cookies to offer you a better experience and analyze traffic. Your data is processed within the scope of the",
    link_text: "Privacy Policy",
    text_post: ".",
    btn_accept: "Accept",
    btn_decline: "Decline",
    link_url: "/en/privacy"
  },
  ar: {
    title: "تفضيلات الخصوصية",
    text_pre: "نستخدم ملفات تعريف الارتباط لتقديم تجربة أفضل لك وتحليل الزيارات. تتم معالجة بياناتك في نطاق",
    link_text: "سياسة الخصوصية",
    text_post: ".",
    btn_accept: "قبول",
    btn_decline: "رفض",
    link_url: "/ar/privacy"
  },
  ru: {
    title: "Настройки конфиденциальности",
    text_pre: "Мы используем файлы cookie для улучшения вашего опыта и анализа трафика. Ваши данные обрабатываются в рамках",
    link_text: "Политики конфиденциальности",
    text_post: ".",
    btn_accept: "Принять",
    btn_decline: "Отклонить",
    link_url: "/ru/privacy"
  }
};

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Dili URL'den algıla
  const getLang = () => {
    if (!pathname) return "tr";
    const pathLang = pathname.split("/")[1];
    return ["tr", "en", "ar", "ru"].includes(pathLang) ? pathLang : "tr";
  };

  const lang = getLang();
  const t = cookieTranslations[lang];
  const isRtl = lang === "ar"; // Arapça kontrolü

  useEffect(() => {
    // Daha önce kabul edilip edilmediğini kontrol et
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Hafif bir gecikme ile göster (Animasyon estetiği için)
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`fixed bottom-6 z-[60] max-w-md w-[calc(100%-3rem)] md:w-auto ${isRtl ? "right-6" : "left-6"}`}
          // Arapça için yönlendirme
          dir={isRtl ? "rtl" : "ltr"}
          style={{ fontFamily: isRtl ? 'var(--font-cairo)' : 'inherit' }}
        >
          <div className="bg-white/90 backdrop-blur-md border border-slate-200 p-6 rounded-sm shadow-2xl relative overflow-hidden">
            
            {/* Dekoratif Arka Plan */}
            <div className={`absolute top-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl -translate-y-1/2 ${isRtl ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"}`}></div>

            <div className="relative z-10">
              <div className="flex items-start gap-4">
                {/* İkon */}
                <div className="w-12 h-12 bg-slate-900 text-amber-500 rounded-sm flex items-center justify-center shrink-0 shadow-lg">
                  <Cookie size={24} />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                    {t.title}
                    <ShieldCheck size={14} className="text-emerald-500" />
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {t.text_pre}{" "}
                    <Link href={t.link_url} className="text-slate-900 font-bold underline decoration-amber-500 underline-offset-2 hover:text-amber-600">
                      {t.link_text}
                    </Link>
                    {t.text_post}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleAccept}
                      className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-amber-500 transition-colors shadow-md active:scale-95 transform duration-150"
                    >
                      {t.btn_accept}
                    </button>
                    <button
                      onClick={handleDecline}
                      className="px-6 py-2.5 bg-white border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-widest rounded-sm hover:border-slate-900 hover:text-slate-900 transition-colors active:scale-95 transform duration-150"
                    >
                      {t.btn_decline}
                    </button>
                  </div>
                </div>

                {/* Kapat Butonu */}
                <button 
                  onClick={handleDecline} 
                  className={`absolute top-0 p-2 text-slate-400 hover:text-slate-900 transition-colors ${isRtl ? "left-0" : "right-0"}`}
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}