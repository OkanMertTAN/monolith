"use client";

import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sozluk } from "@/data/sozluk"; // SÖZLÜK EKLENDİ
import { 
  Plus, 
  Minus, 
  Search, 
  HelpCircle, 
  Building2, 
  FileText, 
  MessageCircle,
  HardHat,
  PaintBucket
} from "lucide-react";
import Link from "next/link";

// --- SABİT İKONLAR (Sırası sözlükteki kategori sırasıyla aynı olmalı) ---
const categoryIcons = [Building2, HardHat, PaintBucket, FileText];

export default function FAQPage({ params }: { params: Promise<{ lang: string }> }) {
  
  // 1. Dili ve Veriyi Al
  const { lang } = use(params);
  const t = sozluk[lang].faq_page;

  // 2. Verileri Birleştir (Metin + İkon)
  const faqData = t.categories.map((cat: any, i: number) => ({
    category: cat.title,
    items: cat.items, // q ve a
    icon: categoryIcons[i] || HelpCircle // İkon eşleşmezse varsayılan
  }));

  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<string | null>(null); // "categoryIndex-itemIndex" formatında ID tutar

  // Arama Fonksiyonu
  const filteredData = faqData.map((cat: any) => ({
    ...cat,
    items: cat.items.filter((item: any) => 
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter((cat: any) => cat.items.length > 0);

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-500 selection:text-white pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 bg-slate-900 text-white border-b border-slate-800 overflow-hidden">
        {/* Arka Plan Deseni */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
             >
               <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 border border-white/10 rounded-full backdrop-blur-sm">
                  <HelpCircle size={16} className="text-amber-500" />
                  <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">{t.header.badge}</span>
               </div>
               
               <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">
                 {t.header.title_1} <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">{t.header.title_2}</span>
               </h1>
               
               <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                 {t.header.subtitle}
               </p>

               {/* Arama Barı */}
               <div className="relative max-w-xl mx-auto">
                 <input 
                   type="text" 
                   placeholder={t.header.search_placeholder}
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                   className="w-full bg-white/10 backdrop-blur-md border border-white/20 pl-14 pr-6 py-5 rounded-sm focus:outline-none focus:bg-white focus:text-slate-900 focus:border-white transition-all font-medium text-white placeholder:text-slate-400 shadow-2xl"
                 />
                 <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={22} />
               </div>
             </motion.div>
        </div>
      </section>

      {/* --- FAQ CONTENT --- */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          
          {filteredData.length > 0 ? (
            <div className="space-y-16">
              {filteredData.map((cat: any, catIndex: number) => (
                <div key={catIndex}>
                  {/* Kategori Başlığı */}
                  <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-200">
                    <div className="w-12 h-12 bg-white border border-slate-200 rounded-sm flex items-center justify-center text-slate-700 shadow-sm">
                      <cat.icon size={24} />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-slate-900">{cat.category}</h2>
                  </div>

                  {/* Sorular */}
                  <div className="space-y-4">
                    {cat.items.map((item: any, itemIndex: number) => {
                      const id = `${catIndex}-${itemIndex}`;
                      const isOpen = openIndex === id;

                      return (
                        <motion.div 
                          key={itemIndex}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className={`bg-white border rounded-sm overflow-hidden transition-all duration-300 ${isOpen ? "border-amber-500 shadow-lg ring-1 ring-amber-500/20" : "border-slate-200 hover:border-slate-300"}`}
                        >
                          <button 
                            onClick={() => toggleAccordion(id)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                          >
                            <span className={`font-bold text-lg pr-8 ${isOpen ? "text-slate-900" : "text-slate-700"}`}>
                              {item.q}
                            </span>
                            <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-500"}`}>
                              {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                            </div>
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="px-6 pb-6 pt-0">
                                  <div className="h-px w-full bg-slate-100 mb-4"></div>
                                  <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                                    {/* Markdown benzeri bold yapısını basitçe işlemek için replace kullanabilir veya tehlikeli HTML olarak basabilirsiniz. Şimdilik basit tutuyoruz. */}
                                    <span dangerouslySetInnerHTML={{ __html: item.a.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br/>') }} />
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.no_results.title}</h3>
              <p className="text-slate-500">
                "{searchTerm}" {t.no_results.desc}
              </p>
            </div>
          )}

        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto max-w-4xl text-center">
           <div className="bg-white p-12 rounded-sm shadow-xl border border-slate-200 relative overflow-hidden">
             
             <div className="relative z-10">
               <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MessageCircle size={32} />
               </div>
               
               <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">{t.cta.title}</h2>
               <p className="text-slate-500 mb-8 max-w-xl mx-auto text-lg">
                 {t.cta.desc}
               </p>

               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <Link href={`/${lang}/iletisim`}>
                   <button className="px-10 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest rounded-sm hover:bg-amber-500 transition-colors shadow-lg w-full sm:w-auto">
                     {t.cta.btn_write}
                   </button>
                 </Link>
                 <a href="tel:+902123456789">
                   <button className="px-10 py-4 bg-white border-2 border-slate-200 text-slate-900 font-bold uppercase tracking-widest rounded-sm hover:border-slate-900 transition-colors w-full sm:w-auto">
                     {t.cta.btn_call}
                   </button>
                 </a>
               </div>
             </div>
           </div>
        </div>
      </section>

    </main>
  );
}