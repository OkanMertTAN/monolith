"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Paperclip, Smile } from "lucide-react";

// WhatsApp Marka İkonu (SVG)
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// --- ÇEVİRİLER ---
const widgetTranslations: any = {
  tr: {
    support_name: "Monolith Destek",
    status_online: "Çevrimiçi",
    status_typing: "yazıyor...",
    today: "Bugün",
    welcome_msg: "Merhaba! 👋 \nProjelerimiz hakkında size nasıl yardımcı olabilirim?",
    placeholder: "Bir mesaj yazın...",
    default_send: "Merhaba, projeleriniz hakkında detaylı bilgi almak istiyorum."
  },
  en: {
    support_name: "Monolith Support",
    status_online: "Online",
    status_typing: "typing...",
    today: "Today",
    welcome_msg: "Hello! 👋 \nHow can I help you regarding our projects?",
    placeholder: "Type a message...",
    default_send: "Hello, I would like to get detailed information about your projects."
  },
  ar: {
    support_name: "دعم مونوليث",
    status_online: "متصل",
    status_typing: "يكتب...",
    today: "اليوم",
    welcome_msg: "مرحباً! 👋 \nكيف يمكنني مساعدتك بخصوص مشاريعنا؟",
    placeholder: "اكتب رسالة...",
    default_send: "مرحباً، أرغب في الحصول على معلومات مفصلة حول مشاريعكم."
  },
  ru: {
    support_name: "Поддержка Monolith",
    status_online: "В сети",
    status_typing: "печатает...",
    today: "Сегодня",
    welcome_msg: "Здравствуйте! 👋 \nЧем я могу помочь вам по поводу наших проектов?",
    placeholder: "Введите сообщение...",
    default_send: "Здравствуйте, я хотел бы получить подробную информацию о ваших проектах."
  }
};

// Bildirim Sesi
const NOTIFICATION_SOUND = "https://assets.mixkit.co/active_storage/sfx/2346/2346-preview.mp3";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPlayedSound, setHasPlayedSound] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [userMessage, setUserMessage] = useState(""); 

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();

  // Dili Algıla
  const getLang = () => {
    if (!pathname) return "tr";
    const pathLang = pathname.split("/")[1]; 
    return ["tr", "en", "ar", "ru"].includes(pathLang) ? pathLang : "tr";
  };

  const lang = getLang();
  const t = widgetTranslations[lang];
  const isRtl = lang === "ar"; // Arapça için yön kontrolü

  // Telefon Numaranız (Başında + olmadan)
  const phoneNumber = "905000000000"; 

  // Sayfa açıldıktan sonra ses çal
  useEffect(() => {
    if (typeof window !== "undefined") {
        audioRef.current = new Audio(NOTIFICATION_SOUND);
    }

    const timer = setTimeout(() => {
      if (!hasPlayedSound && audioRef.current) {
        audioRef.current.play().catch((e) => console.log("Otomatik oynatma engellendi:", e));
        setHasPlayedSound(true);
      }
      setIsTyping(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasPlayedSound]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Enter tuşuna basınca gönderme işlemi
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const finalMessage = userMessage.trim() || t.default_send;
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`, '_blank');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end font-sans">
      
      {/* --- SOHBET PENCERESİ --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[350px] bg-slate-100 rounded-lg shadow-2xl overflow-hidden border border-slate-200"
            // Arapça için font ayarı ve yön
            style={{ fontFamily: isRtl ? 'var(--font-cairo)' : 'inherit' }}
          >
            {/* Header */}
            <div className="bg-[#075E54] p-4 flex items-center justify-between text-white" dir={isRtl ? "rtl" : "ltr"}>
              <div className="flex items-center gap-3">
                <div className="relative">
                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#075E54] font-bold text-lg">
                     M
                   </div>
                   <div className={`absolute bottom-0 w-3 h-3 bg-green-400 border-2 border-[#075E54] rounded-full ${isRtl ? "left-0" : "right-0"}`}></div>
                </div>
                <div>
                  <h3 className="font-bold text-sm">{t.support_name}</h3>
                  <p className="text-[10px] opacity-90">
                    {isTyping ? t.status_typing : t.status_online}
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="h-[300px] bg-[#e5ddd5] p-4 overflow-y-auto relative">
              <div className="absolute inset-0 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] opacity-10 pointer-events-none"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="text-center">
                  <span className="bg-white/50 text-slate-600 text-[10px] px-2 py-1 rounded-md shadow-sm">
                    {t.today}
                  </span>
                </div>

                <motion.div 
                  initial={{ opacity: 0, x: isRtl ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`flex ${isRtl ? "justify-end" : "justify-start"}`}
                >
                  <div className={`bg-white p-3 shadow-sm max-w-[85%] relative ${isRtl ? "rounded-tl-lg rounded-br-lg rounded-bl-lg" : "rounded-tr-lg rounded-bl-lg rounded-br-lg"}`}>
                    <p className="text-sm text-slate-800 leading-relaxed whitespace-pre-line text-start" dir={isRtl ? "rtl" : "ltr"}>
                      {t.welcome_msg}
                    </p>
                    <span className={`text-[9px] text-slate-400 block mt-1 ${isRtl ? "text-left" : "text-right"}`}>
                      10:42
                    </span>
                    {/* Konuşma Balonu Oku */}
                    <div className={`absolute top-0 w-0 h-0 border-t-[10px] border-t-white ${isRtl ? "-right-2 border-r-[10px] border-r-transparent" : "-left-2 border-l-[10px] border-l-transparent"}`}></div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Footer (GERÇEK GİRİŞ ALANI) */}
            <div className="bg-[#f0f0f0] p-3 flex items-center gap-2" dir={isRtl ? "rtl" : "ltr"}>
               <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center justify-between shadow-sm border border-transparent focus-within:border-green-500 transition-colors">
                 
                 <input 
                    type="text" 
                    placeholder={t.placeholder}
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full bg-transparent border-none focus:outline-none text-sm text-slate-700 placeholder:text-slate-400"
                 />

                 <div className="flex gap-2 text-slate-400 shrink-0">
                    <Paperclip size={16} className="cursor-pointer hover:text-slate-600" />
                    <Smile size={16} className="cursor-pointer hover:text-slate-600" />
                 </div>
               </div>
               
               {/* Gönder Butonu */}
               <Link 
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(userMessage || t.default_send)}`}
                  target="_blank"
                  className="w-10 h-10 bg-[#075E54] rounded-full flex items-center justify-center text-white shadow-md hover:bg-[#128C7E] transition-colors shrink-0"
               >
                 <Send size={18} className={isRtl ? "mr-0.5 rotate-180" : "ml-0.5"} />
               </Link>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ANA BUTON --- */}
      <button 
        onClick={toggleChat}
        className="group relative flex items-center justify-center"
      >
        {!isOpen && (
           <motion.div 
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white z-20 border-2 border-white"
           >
             1
           </motion.div>
        )}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>
        <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 active:scale-95 z-10">
          {isOpen ? <X size={32} className="text-white" /> : <WhatsAppIcon />}
        </div>
      </button>

    </div>
  );
}