"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone, Globe } from "lucide-react";

// --- MENÜ ÇEVİRİLERİ ---
const menuTranslations: any = {
  tr: {
    home: "Ana Sayfa",
    corporate: "Kurumsal",
    projects: "Projeler",
    tech: "Teknik & Blog",
    services: "Hizmetler",
    faq: "SSS",
    career: "Kariyer",
    contact: "İletişim",
    offer: "Teklif Al"
  },
  en: {
    home: "Home",
    corporate: "Corporate",
    projects: "Projects",
    tech: "Tech & Blog",
    services: "Services",
    faq: "FAQ",
    career: "Careers",
    contact: "Contact",
    offer: "Get Offer"
  },
  ar: {
    home: "الرئيسية",
    corporate: "مؤسسي",
    projects: "مشاريع",
    tech: "تقنية & مدونة",
    services: "خدمات",
    faq: "أسئلة شائعة",
    career: "وظائف",
    contact: "اتصل بنا",
    offer: "اطلب عرضاً"
  },
  ru: {
    home: "Главная",
    corporate: "О Компании",
    projects: "Проекты",
    tech: "Технологии",
    services: "Услуги",
    faq: "FAQ",
    career: "Карьера",
    contact: "Контакты",
    offer: "Запросить КП"
  }
};

// --- DİL VE BAYRAK AYARLARI ---
const languages = [
  { code: "tr", flag: "/lang/turkey.png", alt: "Türkçe" },
  { code: "en", flag: "/lang/english.png", alt: "English" },
  { code: "ar", flag: "/lang/arabia.png", alt: "العربية" },
  { code: "ru", flag: "/lang/russia.png", alt: "Русский" }, // Rusça Eklendi
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  
  // URL'den dili al, yoksa varsayılan 'tr' kullan
  const lang = (params.lang as string) || "tr";
  const t = menuTranslations[lang] || menuTranslations.tr;

  const navLinks = [
    { name: t.home, href: "/" },
    { name: t.corporate, href: "/kurumsal" },
    { name: t.projects, href: "/projeler" },
    { name: t.tech, href: "/teknik" },
    { name: t.services, href: "/hizmetler" },
    { name: t.faq, href: "/sss" },
    { name: t.career, href: "/kariyer", isSpecial: true },
    { name: t.contact, href: "/iletisim" },
  ];

  // Scroll Takibi
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sayfa değişince menüyü kapat
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Yardımcı Fonksiyon: Linki dile göre ayarla
  const getLocalizedHref = (path: string) => {
    if (path === "/") return `/${lang}`;
    return `/${lang}${path}`;
  };

  // --- DİL DEĞİŞTİRME FONKSİYONU ---
  const switchLanguage = (newLang: string) => {
    if (newLang === lang) return;
    const segments = pathname.split("/");
    
    // URL yapısı: /tr/kurumsal (segments[0]="", segments[1]="tr", ...)
    if (segments.length > 1) {
        segments[1] = newLang;
    } else {
        // Eğer kök dizindeysek
        segments.splice(1, 0, newLang);
    }
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md border-slate-200 py-3 shadow-md" 
            : "bg-white/90 backdrop-blur-md border-white/20 py-5 shadow-sm"
        }`}
      >
        <div className={`absolute top-0 left-0 h-1 bg-amber-500 transition-all duration-500 ${isScrolled ? "w-full" : "w-0"}`}></div>

        <div className="container mx-auto px-6 flex items-center justify-between relative">
          
          {/* LOGO */}
          <Link href={`/${lang}`} className="group flex items-center gap-3">
            <div className={`w-10 h-10 flex items-center justify-center rounded-sm font-bold text-xl shadow-sm border-2 transition-colors ${
                isScrolled ? "bg-slate-900 text-white border-slate-900" : "bg-amber-500 text-white border-amber-500"
            }`}>
              M
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-xl font-heading font-bold tracking-tighter ${isScrolled ? "text-slate-900" : "text-slate-900"}`}>
                MONO<span className="text-slate-500">LITH.</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-slate-500 uppercase hidden md:block">
                Engineering
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const localizedHref = getLocalizedHref(link.href);
              const isActive = pathname === localizedHref || (link.href !== "/" && pathname.startsWith(localizedHref));

              // Kariyer butonu özel stili
              if (link.isSpecial) {
                return (
                    <Link 
                    key={link.name} 
                    href={localizedHref} 
                    className="ml-2 px-5 py-2 bg-amber-500 text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-md hover:bg-amber-600 transition-all hover:-translate-y-0.5"
                  >
                    {link.name}
                  </Link>
                )
              }

              return (
                <Link 
                  key={link.name} 
                  href={localizedHref} 
                  className={`relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all group overflow-hidden ${
                    isActive ? "text-amber-600" : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className={`absolute inset-0 bg-slate-100 transform origin-left transition-transform duration-300 -z-0 ${
                     isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
                </Link>
              );
            })}
          </div>

          {/* SAĞ TARAF: BAYRAKLAR + BUTON */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* DİL DEĞİŞTİRİCİ (DESKTOP - BAYRAKLI) */}
            <div className="flex items-center gap-3">
               {languages.map((lng) => (
                 <button
                   key={lng.code}
                   onClick={() => switchLanguage(lng.code)}
                   className={`relative w-6 h-6 rounded-full overflow-hidden transition-all duration-300 ${
                     lang === lng.code 
                       ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-white scale-110 grayscale-0" 
                       : "grayscale hover:grayscale-0 hover:scale-110 opacity-70 hover:opacity-100"
                   }`}
                   title={lng.alt}
                 >
                   <Image 
                     src={lng.flag} 
                     alt={lng.alt} 
                     fill 
                     className="object-cover"
                   />
                 </button>
               ))}
            </div>

            <Link href={`/${lang}/iletisim`}>
              <button className="px-6 py-3 bg-slate-900 text-white font-bold uppercase text-xs tracking-widest rounded-sm shadow-md hover:bg-slate-800 hover:shadow-lg transition-all flex items-center gap-2 border-b-2 border-slate-950 active:border-b-0 active:translate-y-0.5">
                {t.offer} <ArrowUpRight size={16} />
              </button>
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-900 border border-slate-200 rounded-sm hover:bg-slate-50 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-white lg:hidden pt-24 px-6 overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => {
                 const localizedHref = getLocalizedHref(link.href);
                 const isActive = pathname === localizedHref;

                 return (
                  <Link key={link.name} href={localizedHref}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                      className={`text-2xl font-heading font-bold py-4 border-b border-slate-100 flex items-center justify-between ${
                        isActive ? "text-amber-600 pl-4 border-l-4 border-l-amber-600" : "text-slate-900"
                      } ${link.isSpecial ? "text-amber-600" : ""}`}
                    >
                      {link.name}
                      <ArrowUpRight size={20} className="opacity-20" />
                    </motion.div>
                  </Link>
                );
              })}
            </div>
            
            {/* MOBİL İÇİN DİL SEÇİMİ VE İLETİŞİM */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto mb-10 space-y-4"
            >
               {/* DİL DEĞİŞTİRİCİ (MOBİL - BAYRAKLI) */}
               <div className="bg-slate-50 p-4 rounded-sm border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                    <Globe size={18} /> Language / Dil
                  </div>
                  <div className="flex items-center gap-4">
                    {languages.map((lng) => (
                      <button
                        key={lng.code}
                        onClick={() => switchLanguage(lng.code)}
                        className={`relative w-8 h-8 rounded-full overflow-hidden transition-all ${
                          lang === lng.code 
                            ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-slate-50 scale-110" 
                            : "opacity-60 grayscale"
                        }`}
                      >
                        <Image 
                          src={lng.flag} 
                          alt={lng.alt} 
                          fill 
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
               </div>

               <div className="bg-slate-50 p-6 rounded-sm border border-slate-100">
                  <div className="flex items-center gap-3 text-slate-900 font-bold mb-2">
                      <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-sm flex items-center justify-center">
                        <Phone size={16} />
                      </div>
                      <span>+90 (212) 345 67 89</span>
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest pl-11">7/24 Destek</div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}