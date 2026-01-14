"use client";

import { useRef, useEffect, use } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { sozluk } from "@/data/sozluk"; // SÖZLÜK IMPORT EDİLDİ
import { 
  HardHat, 
  Factory, 
  ShieldCheck, 
  Briefcase, 
  Check, 
  Scan,
  Database,
  Activity,
  Cpu,
  Server,
  Globe,
  FileCheck,
  Layers,
  Ruler
} from "lucide-react";

// --- SABİT UI VERİLERİ (METİNLER ÇIKARILDI, SADECE TASARIM KALDI) ---
const servicesBase = [
  {
    id: "01",
    icon: HardHat,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    gradient: "from-amber-600 to-orange-600"
  },
  {
    id: "02",
    icon: Factory,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    id: "03",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    gradient: "from-emerald-600 to-green-600"
  },
  {
    id: "04",
    icon: Briefcase,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    gradient: "from-purple-600 to-violet-600"
  }
];

const techStackBase = [
  { name: "REVIT BIM", icon: Database, color: "text-blue-600" },
  { name: "PRIMAVERA P6", icon: Activity, color: "text-emerald-600" },
  { name: "SAP2000", icon: Server, color: "text-amber-600" },
  { name: "NAVISWORKS", icon: Scan, color: "text-purple-600" },
  { name: "PROCORE", icon: Globe, color: "text-orange-600" },
  { name: "AUTOCAD", icon: Cpu, color: "text-red-600" },
];

const certificatesBase = [
  { code: "ISO 9001:2015", color: "text-blue-900" },
  { code: "ISO 14001:2015", color: "text-green-900" },
  { code: "OHSAS 18001", color: "text-orange-900" },
  { code: "LEED GOLD", color: "text-emerald-900" },
];

const statsBase = [
  { value: "450K+", color: "text-blue-600" },
  { value: "1.2M", color: "text-emerald-600" },
  { value: "14", color: "text-amber-600" },
  { value: "%98", color: "text-purple-600" }
];

// --- ANIMASYONLAR ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 15 }
  }
};

// --- ANA BİLEŞEN ---
export default function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  
  // 1. Dili ve Veriyi Al
  const { lang } = use(params);
  const t = sozluk[lang].services_page; // Sadece hizmetler sayfası verisi

  // 2. Verileri Birleştir (Tasarım + Metin)
  
  // Hizmetleri Birleştir
  const services = servicesBase.map((base, i) => ({
    ...base,
    ...t.items[i] // Metinleri sözlükten al (label, title, desc, specs)
  }));

  // Teknolojileri Birleştir
  const techStack = techStackBase.map((base, i) => ({
    ...base,
    desc: t.tech_section.items_desc[i]
  }));

  // Sertifikaları Birleştir
  const certificates = certificatesBase.map((base, i) => ({
    ...base,
    ...t.cert_section.items[i] // label, status
  }));

  // İstatistikleri Birleştir
  const stats = statsBase.map((base, i) => ({
    ...base,
    ...t.stats_section.items[i] // label, sub
  }));


  // --- ALT BİLEŞENLER (Burada tanımlıyoruz ki 't' değişkenine erişebilsinler) ---
  
  const TechAndCompliance = () => (
    <section className="py-24 px-6 relative z-10 border-t border-slate-200 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* SOL: DİJİTAL ALTYAPI */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-100">
              <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                 <Cpu className="text-indigo-600" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 tracking-widest">{t.tech_section.title}</h3>
                <p className="text-xs text-slate-500 font-mono mt-1 font-bold">{t.tech_section.subtitle}</p>
              </div>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techStack.map((tech, i) => (
                <motion.div 
                  key={i} variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="relative group overflow-hidden bg-white border border-slate-200 p-5 rounded-xl transition-all duration-300 shadow-sm"
                >
                  <div className="relative flex items-center gap-4 z-10">
                    <div className={`p-2.5 rounded-lg bg-slate-50 ${tech.color} transition-colors group-hover:scale-110 duration-300`}>
                      <tech.icon size={24} />
                    </div>
                    <div>
                      <div className="text-base font-bold text-slate-800 font-mono group-hover:text-indigo-600 transition-colors">{tech.name}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{tech.desc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
  
          {/* SAĞ: SERTİFİKASYON */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-100">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                 <ShieldCheck className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 tracking-widest">{t.cert_section.title}</h3>
                <p className="text-xs text-slate-500 font-mono mt-1 font-bold">{t.cert_section.subtitle}</p>
              </div>
            </div>
  
            <div className="space-y-3">
              {certificates.map((cert, i) => (
                <motion.div 
                  key={i} variants={itemVariants}
                  whileHover={{ x: 5, backgroundColor: "#f8fafc" }}
                  className="flex items-center justify-between bg-white border border-slate-200 p-5 rounded-lg shadow-sm transition-all group relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 group-hover:w-1.5 transition-all" />
  
                  <div className="flex items-center gap-5 pl-3">
                    <FileCheck size={20} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
                    <div>
                      <div className={`text-lg font-bold font-heading tracking-wide ${cert.color}`}>{cert.code}</div>
                      <div className="text-[11px] text-slate-500 font-mono tracking-widest font-semibold">{cert.label}</div>
                    </div>
                  </div>
  
                  <div className="flex items-center gap-2 pr-2">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-[0.2em]">{cert.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
  
        </div>
      </div>
    </section>
  );

  const StatsSection = () => (
    <section className="py-24 px-6 relative z-10 border-t border-slate-200 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="relative bg-white border border-slate-200 p-8 group transition-all duration-300 rounded-xl shadow-sm overflow-hidden"
            >
              <div className={`text-5xl md:text-6xl font-heading font-bold ${stat.color} mb-3 transition-colors tabular-nums tracking-tighter`}>
                {stat.value}
              </div>
              <div className="h-1 w-12 bg-slate-100 mb-3 group-hover:w-full group-hover:bg-current transition-all duration-500 rounded-full"></div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-slate-500 font-mono font-medium">
                Process: {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
  
        <div className="mt-12 flex justify-between items-center text-[10px] text-slate-500 font-mono border-t border-slate-200 pt-6">
           <span className="font-semibold">{t.stats_section.last_update}: 2024-10-24 08:00:00 UTC</span>
           <span className="flex items-center gap-2 font-bold text-emerald-600">
             <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> {t.stats_section.server_status}
           </span>
        </div>
      </div>
    </section>
  );

  return (
    <main className="min-h-screen text-slate-900 selection:bg-secondary selection:text-white relative overflow-hidden font-sans">
      
      {/* ARKA PLAN */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-white/95 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(#00000008_1px,transparent_1px),linear-gradient(90deg,#00000008_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      </div>

      {/* HEADER */}
      <motion.section className="relative pt-48 pb-20 px-6 z-10">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="border-l-4 border-secondary pl-8"
          >
            <div className="flex items-center gap-2 mb-2">
               <div className="p-2 bg-secondary/10 rounded-full">
                 <Ruler className="text-secondary animate-pulse" size={20} />
               </div>
               <span className="text-xs font-mono text-secondary tracking-widest font-bold">{t.header.badge}</span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter mb-4">
              <span className="text-slate-900">{t.header.title_main}</span> <br/> 
              <span className="text-transparent bg-clip-text bg-linear-to-rrom-secondary via-orange-500 to-amber-500">{t.header.title_sub}</span>
            </h1>
            
            <p className="text-slate-600 max-w-xl text-lg font-medium border-t border-slate-200 pt-6 leading-relaxed">
              {/* HTML string'i güvenli şekilde işlemek için dangerouslySetInnerHTML kullanılabilir veya basit string ise direkt */}
              <span dangerouslySetInnerHTML={{ __html: t.header.description }} />
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* SERVICES LIST */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Connecting Line */}
                {index !== services.length - 1 && (
                  <div className="absolute left-10 top-24 -bottom-16 w-px bg-slate-300 hidden md:block" />
                )}

                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                  className="relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-start bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-lg transition-all duration-300 z-10"
                >
                  
                  {/* Sol: İkon ve ID */}
                  <div className="shrink-0 relative">
                    <div className="text-[8rem] absolute -top-10 -left-6 font-bold text-slate-100 font-heading z-0 pointer-events-none select-none">
                      {service.id}
                    </div>
                    <div className={`relative z-10 w-24 h-24 ${service.bg} border-2 ${service.border} flex items-center justify-center rounded-2xl shadow-inner group-hover:scale-105 transition-transform duration-500`}>
                      <service.icon size={40} className={service.color} />
                    </div>
                  </div>

                  {/* Orta: İçerik */}
                  <div className="grow z-10">
                    <div className="flex items-center gap-3 mb-3">
                       <span className={`text-[11px] font-bold border px-3 py-1 rounded-full ${service.bg} ${service.color} ${service.border} tracking-wider`}>
                         {service.label}
                       </span>
                    </div>
                    
                    <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-5 text-transparent bg-clip-text bg-linear-to-r ${service.gradient}`}>
                      {service.title}
                    </h2>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-8 border-b border-slate-100 pb-8 font-medium">
                      {service.description}
                    </p>
                    
                    {/* Teknik Özellikler */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 mb-4 font-mono uppercase tracking-widest flex items-center gap-2">
                        <Layers size={12} /> {t.misc.specs_title}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
                         {service.specs.map((spec: string, i: number) => (
                           <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-semibold group-hover:text-slate-900 transition-colors">
                             <Check size={16} className={`shrink-0 ${service.color}`} />
                             <span>{spec}</span>
                           </div>
                         ))}
                      </div>
                    </div>
                  </div>

                  {/* Sağ: Dekoratif Buton */}
                  <div className="hidden lg:flex flex-col items-center justify-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity self-center">
                     <div className={`w-1 h-16 bg-slate-100 group-hover:${service.bg.replace('bg-', 'bg-')} transition-colors`}></div>
                  </div>

                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ALT BİLEŞENLER */}
      <TechAndCompliance />
      <StatsSection />

    </main>
  );
}