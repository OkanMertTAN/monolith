"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { sozluk } from "@/data/sozluk"; // SÖZLÜK EKLENDİ
import { 
  Briefcase, 
  Users, 
  Zap, 
  Award, 
  GraduationCap, 
  CheckCircle2,
  UploadCloud,
  User,
  Mail,
  Phone,
  Building,
  ArrowRight
} from "lucide-react";
import Image from "next/image";

// --- SABİT VERİLER (Sadece ikonları tutar) ---
const benefitsIcons = [Zap, GraduationCap, Users, Award];

export default function CareerPage({ params }: { params: Promise<{ lang: string }> }) {
  
  // 1. Dili ve Veriyi Al
  const { lang } = use(params);
  const t = sozluk[lang].career_page;

  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: any) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  // 2. Verileri Birleştir (Çeviri + İkon)
  const benefits = t.benefits.items.map((item: any, i: number) => ({
    ...item,
    icon: benefitsIcons[i]
  }));

  const processSteps = t.process.steps;

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-500 selection:text-white pb-20">
      
      {/* --- HERO SECTION WITH FORM --- */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 bg-slate-900 overflow-hidden">
        
        {/* ARKA PLAN */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2000&auto=format&fit=crop" 
            alt="Office Culture" 
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* SOL TARAFA: METİN */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 backdrop-blur border border-white/10 rounded-sm">
                  <Users size={16} className="text-amber-500" />
                  <span className="text-xs font-bold tracking-widest text-white uppercase">{t.header.badge}</span>
               </div>
               
               <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                 {t.header.title_1} <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">{t.header.title_2}</span> {t.header.title_3}
               </h1>
               
               <p className="text-xl text-slate-400 max-w-lg font-light leading-relaxed mb-8 border-l-4 border-amber-500 pl-6">
                 {t.header.desc}
               </p>

               <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-500">
                 {t.header.tags.map((tag: string, i: number) => (
                   <div key={i} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-sm border border-white/5">
                     <CheckCircle2 size={16} className="text-emerald-500" /> {tag}
                   </div>
                 ))}
               </div>
            </motion.div>

            {/* SAĞ TARAFA: BAŞVURU FORMU */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-sm p-8 md:p-10 shadow-2xl relative"
            >
              {/* Form Başlığı */}
              <div className="mb-8 border-b border-slate-100 pb-4">
                <h3 className="text-2xl font-heading font-bold text-slate-900">{t.form.title}</h3>
                <p className="text-slate-500 text-sm mt-1">{t.form.subtitle}</p>
              </div>

              <form className="space-y-5">
                
                {/* Ad Soyad */}
                <div className="group">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">{t.form.labels.name}</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 pl-12 pr-4 py-3 text-slate-900 rounded-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium" placeholder={t.form.placeholders.name} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Telefon */}
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">{t.form.labels.phone}</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input type="tel" className="w-full bg-slate-50 border border-slate-200 pl-12 pr-4 py-3 text-slate-900 rounded-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium" placeholder={t.form.placeholders.phone} />
                    </div>
                  </div>
                  {/* E-Posta */}
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">{t.form.labels.email}</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input type="email" className="w-full bg-slate-50 border border-slate-200 pl-12 pr-4 py-3 text-slate-900 rounded-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium" placeholder={t.form.placeholders.email} />
                    </div>
                  </div>
                </div>

                {/* Ünvan / Pozisyon */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">{t.form.labels.position}</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 pl-12 pr-4 py-3 text-slate-900 rounded-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium" placeholder={t.form.placeholders.position} />
                  </div>
                </div>

                {/* CV Yükleme */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">{t.form.labels.cv}</label>
                  <div className="relative group cursor-pointer">
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx" 
                      onChange={handleFileChange} 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                    />
                    <div className={`w-full border-2 border-dashed rounded-sm p-4 flex flex-col items-center justify-center transition-all ${fileName ? "border-emerald-500 bg-emerald-50" : "border-slate-300 bg-slate-50 group-hover:border-amber-500"}`}>
                      {fileName ? (
                        <div className="flex items-center gap-2 text-emerald-700 font-bold">
                          <CheckCircle2 size={20} />
                          <span className="truncate max-w-[200px]">{fileName}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3 text-slate-400 group-hover:text-amber-600">
                          <UploadCloud size={24} />
                          <span className="font-medium text-sm">{t.form.upload_text}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Butonu */}
                <button 
                  type="button"
                  className="w-full bg-slate-900 text-white font-bold py-4 uppercase tracking-widest rounded-sm hover:bg-amber-500 hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
                >
                  {t.form.submit_btn} <ArrowRight size={18} />
                </button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- VALUES / CULTURE --- */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900">{t.benefits.title}</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-slate-50 p-8 rounded-sm border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all group cursor-default"
              >
                <div className="w-14 h-14 bg-white border border-slate-200 rounded-sm flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors shadow-sm">
                  <item.icon size={28} className="text-slate-700 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HR PROCESS --- */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <div>
               <h2 className="text-3xl font-heading font-bold text-slate-900 mb-2">{t.process.title}</h2>
               <p className="text-slate-500">{t.process.subtitle}</p>
             </div>
             <div className="hidden md:block">
               <Briefcase size={40} className="text-slate-200" />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step: any, i: number) => (
              <div key={i} className="relative group">
                {/* Connecting Line (Desktop) */}
                {i !== processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 -z-10"></div>
                )}
                
                <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm text-center h-full hover:shadow-md transition-all hover:-translate-y-2">
                  <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold font-mono mx-auto mb-6 border-4 border-slate-100 group-hover:border-amber-100 group-hover:bg-amber-500 transition-colors">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}