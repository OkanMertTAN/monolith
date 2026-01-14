"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Phone, Mail, MapPin } from "lucide-react";

// --- FOOTER ÇEVİRİLERİ ---
const footerTranslations: any = {
  tr: {
    desc: "Geleceğin yapılarını, mühendislik hassasiyeti ve mimari estetikle bugünden inşa ediyoruz.",
    titles: {
      menu: "Menü",
      expert: "Uzmanlıklar",
      hq: "Merkez Ofis"
    },
    menu: {
      about: "Hakkımızda",
      projects: "Projeler",
      services: "Hizmetler",
      contact: "İletişim"
    },
    expert_items: [
      "Endüstriyel Yapılar",
      "Lüks Konut Projeleri",
      "Kentsel Dönüşüm",
      "Mühendislik Danışmanlığı"
    ],
    address: "Maslak 1453, B Blok K:14, Sarıyer / İstanbul",
    copyright: "© 2026 MONOLITH CONSTRUCTION. TÜM HAKLARI SAKLIDIR.",
    back_to_top: "YUKARI ÇIK"
  },
  en: {
    desc: "We build the structures of the future today with engineering precision and architectural aesthetics.",
    titles: {
      menu: "Menu",
      expert: "Expertise",
      hq: "Headquarters"
    },
    menu: {
      about: "About Us",
      projects: "Projects",
      services: "Services",
      contact: "Contact"
    },
    expert_items: [
      "Industrial Buildings",
      "Luxury Residential",
      "Urban Transformation",
      "Engineering Consultancy"
    ],
    address: "Maslak 1453, Block B Fl:14, Sariyer / Istanbul",
    copyright: "© 2026 MONOLITH CONSTRUCTION. ALL RIGHTS RESERVED.",
    back_to_top: "BACK TO TOP"
  },
  ar: {
    desc: "نبني هياكل المستقبل اليوم بدقة هندسية وجماليات معمارية.",
    titles: {
      menu: "القائمة",
      expert: "الخبرات",
      hq: "المقر الرئيسي"
    },
    menu: {
      about: "من نحن",
      projects: "المشاريع",
      services: "الخدمات",
      contact: "اتصل بنا"
    },
    expert_items: [
      "المباني الصناعية",
      "مشاريع الإسكان الفاخر",
      "التحول الحضري",
      "الاستشارات الهندسية"
    ],
    address: "مسلك 1453، بلوك B ط:14، ساريير / إسطنبول",
    copyright: "© 2026 MONOLITH CONSTRUCTION. جميع الحقوق محفوظة.",
    back_to_top: "العودة للأعلى"
  },
  ru: {
    desc: "Мы строим сооружения будущего уже сегодня с инженерной точностью и архитектурной эстетикой.",
    titles: {
      menu: "Меню",
      expert: "Экспертиза",
      hq: "Центральный Офис"
    },
    menu: {
      about: "О Нас",
      projects: "Проекты",
      services: "Услуги",
      contact: "Контакты"
    },
    expert_items: [
      "Промышленные Объекты",
      "Элитные Жилые Комплексы",
      "Городская Реновация",
      "Инженерный Консалтинг"
    ],
    address: "Маслак 1453, Блок B Эт:14, Сарыер / Стамбул",
    copyright: "© 2026 MONOLITH CONSTRUCTION. ВСЕ ПРАВА ЗАЩИЩЕНЫ.",
    back_to_top: "НАВЕРХ"
  }
};

export default function Footer() {
  const params = useParams();
  const lang = (params.lang as string) || "tr";
  const t = footerTranslations[lang] || footerTranslations.tr;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Helper for dynamic links
  const getLink = (path: string) => `/${lang}${path}`;

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 relative overflow-hidden text-white">
      
      {/* Arka Plan Deseni */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Kolon: Marka */}
          <div className="space-y-6">
            <Link href={`/${lang}`} className="flex flex-col">
              <span className="font-heading text-3xl font-bold tracking-tighter">MONOLITH</span>
              <span className="text-[10px] text-gray-500 tracking-[0.4em] uppercase font-bold">Construction Inc.</span>
            </Link>
            {/* RTL Desteği: ltr:border-l-2 rtl:border-r-2 */}
            <p className="text-gray-400 text-sm leading-relaxed ltr:border-l-2 rtl:border-r-2 border-secondary ltr:pl-4 rtl:pr-4">
              {t.desc}
            </p>
          </div>

          {/* 2. Kolon: Hızlı Linkler */}
          <div>
            <h4 className="font-bold mb-6 tracking-widest text-xs uppercase text-white border-b border-white/10 pb-2 inline-block">
              {t.titles.menu}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href={getLink("/kurumsal")} className="hover:text-secondary transition-colors flex items-center gap-2"><span className="rtl:rotate-180">›</span> {t.menu.about}</Link></li>
              <li><Link href={getLink("/projeler")} className="hover:text-secondary transition-colors flex items-center gap-2"><span className="rtl:rotate-180">›</span> {t.menu.projects}</Link></li>
              <li><Link href={getLink("/hizmetler")} className="hover:text-secondary transition-colors flex items-center gap-2"><span className="rtl:rotate-180">›</span> {t.menu.services}</Link></li>
              <li><Link href={getLink("/iletisim")} className="hover:text-secondary transition-colors flex items-center gap-2"><span className="rtl:rotate-180">›</span> {t.menu.contact}</Link></li>
            </ul>
          </div>

          {/* 3. Kolon: Hizmetler */}
          <div>
            <h4 className="font-bold mb-6 tracking-widest text-xs uppercase text-white border-b border-white/10 pb-2 inline-block">
              {t.titles.expert}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {t.expert_items.map((item: string, i: number) => (
                 <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 4. Kolon: İletişim */}
          <div>
            <h4 className="font-bold mb-6 tracking-widest text-xs uppercase text-white border-b border-white/10 pb-2 inline-block">
              {t.titles.hq}
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary shrink-0" size={18} />
                <span>{t.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <span dir="ltr">+90 (212) 000 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary shrink-0" size={18} />
                <span>info@monolith.com.tr</span>
              </li>
            </ul>
            
            {/* Sosyal Medya */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-secondary transition-all rounded-sm">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Alt Çizgi */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 font-mono uppercase tracking-wide text-center md:text-left">
            {t.copyright}
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-white hover:text-secondary transition-colors uppercase tracking-widest border border-white/10 px-4 py-2 rounded-sm hover:border-secondary"
          >
            {t.back_to_top} <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}