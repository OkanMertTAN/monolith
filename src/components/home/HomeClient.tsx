"use client";

import { useState } from "react"; // 1. useState eklendi
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // 2. AnimatePresence eklendi
import { 
  ArrowRight, 
  Building2, 
  Users, 
  Trophy, 
  HardHat, 
  Ruler, 
  Zap,
  Play,
  Layers,
  ArrowUpRight,
  X // 3. Kapatma ikonu için X eklendi
} from "lucide-react";
import { sozluk } from "@/data/sozluk";
import { projectsData } from "@/data/projects";

// --- MİMARİ ARKA PLAN DESENİ (SVG) ---
const BlueprintPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none text-slate-900 select-none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <path d="M0 800L800 0" stroke="currentColor" strokeWidth="1" />
    <path d="M100 800V750 M200 800V750 M300 800V750" stroke="currentColor" strokeWidth="2" />
    <circle cx="400" cy="400" r="250" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="10,10" />
    <path d="M400 100V700 M100 400H700" stroke="currentColor" strokeWidth="0.5" />
    <rect x="50" y="50" width="100" height="100" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M600 600 L700 700 M600 700 L700 600" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export default function HomeClient({ lang }: { lang: string }) {
  // 4. Video Popup State'i
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const t = sozluk[lang] || sozluk.tr;
  const currentProjects = projectsData[lang] || projectsData.tr;
  const featuredProjects = currentProjects.slice(0, 3); 

  const stats = [
    { ...t.stats[0], icon: Trophy, color: "text-amber-500" },
    { ...t.stats[1], icon: Building2, color: "text-blue-400" },
    { ...t.stats[2], icon: HardHat, color: "text-emerald-400" },
    { ...t.stats[3], icon: Users, color: "text-slate-300" },
  ];

  const services = [
    { ...t.services_section.items[0], icon: Building2, color: "text-blue-900", border: "border-blue-100" },
    { ...t.services_section.items[1], icon: Zap, color: "text-amber-700", border: "border-amber-100" },
    { ...t.services_section.items[2], icon: Ruler, color: "text-emerald-800", border: "border-emerald-100" },
  ];

  return (
    <main className="min-h-screen relative font-sans text-slate-900 selection:bg-blue-900 selection:text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-screen flex flex-col lg:flex-row overflow-hidden">
        
        {/* SOL TARAF */}
        <div className="w-full lg:w-[40%] h-full flex flex-col justify-center px-8 md:px-16 relative z-10 border-r border-slate-200 bg-slate-50 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
          <BlueprintPattern />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="absolute -left-16 top-10 w-1 h-32 bg-linear-to-b from-amber-500 to-transparent hidden lg:block"></div>

            <div className="inline-flex items-center gap-3 mb-8 bg-white/50 backdrop-blur-sm px-3 py-1 rounded border border-slate-200 shadow-sm w-fit">
               <span className="h-px w-8 bg-amber-600"></span>
               <span className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase">{t.hero.badge}</span>
            </div>

            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-6 text-slate-900 drop-shadow-sm">
              {t.hero.title_main}<br/><span className="text-slate-400">{t.hero.title_sub}</span>
            </h1>
            
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-10 max-w-md border-l-4 border-amber-500 pl-6 bg-white/60 py-4 rounded-r-lg backdrop-blur-md shadow-sm">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-5">
              <Link href={`/${lang}/projeler`}>
                <button className="px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest rounded-sm shadow-2xl hover:bg-amber-600 transition-all flex items-center gap-3 group hover:shadow-amber-600/20">
                  {t.hero.btn_explore} <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-amber-500 group-hover:text-white" />
                </button>
              </Link>
              
              {/* 5. Butona onClick eventi eklendi */}
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="px-8 py-4 bg-white/80 border border-slate-300 text-slate-900 font-bold uppercase tracking-widest rounded-sm hover:border-slate-500 hover:bg-white transition-all flex items-center gap-3 shadow-sm hover:shadow-md"
              >
                <Play size={14} className="fill-slate-900" />
                {t.hero.btn_watch}
              </button>
            </div>
          </motion.div>
        </div>

        {/* SAĞ TARAF: VİDEO */}
        <div className="w-full lg:w-[60%] h-full relative bg-slate-900 overflow-hidden shadow-2xl shadow-slate-900/50">
           <video 
             autoPlay 
             muted 
             loop 
             playsInline 
             className="absolute inset-0 w-full h-full object-cover"
           >
             <source src="/videos/Detaylı_Animasyon_Videosu_Hazır.mp4" type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10 pointer-events-none"></div>
           
           <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 to-transparent p-12 flex justify-between items-end">
              <div className="text-white">
                <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-1">{t.hero.video_badge}</div>
                <div className="text-2xl font-heading font-bold tracking-tight">SKY TOWER RESIDENCE</div>
              </div>
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 hover:scale-105 transition-transform cursor-pointer group">
                 <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.6)] group-hover:bg-red-400"></div>
              </div>
           </div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="bg-slate-900/95 text-white py-12 border-t border-slate-800 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-4 group cursor-default">
                 <div className={`flex items-center justify-center gap-2 text-4xl font-heading font-bold mb-2 ${stat.color} drop-shadow-lg`}>
                   <stat.icon size={28} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                   {stat.val}
                 </div>
                 <div className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                   {stat.label}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECTS --- */}
      <section className="py-32 px-6 relative z-10 bg-slate-50/50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-size-[60px_60px] opacity-50 pointer-events-none"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex justify-between items-end mb-16 border-b border-slate-200/60 pb-6">
            <div>
               <span className="text-blue-900 font-bold text-xs tracking-widest uppercase mb-2 block">{t.projects_section.badge}</span>
               <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">
                 {t.projects_section.title_main} <span className="text-slate-500">{t.projects_section.title_sub}</span>
               </h2>
            </div>
            <Link href={`/${lang}/projeler`} className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors uppercase tracking-widest group bg-white/80 px-4 py-2 rounded-sm border border-slate-200 shadow-sm">
               {t.projects_section.btn_see_all} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProjects.map((project: any) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                className="group relative h-125 bg-white/80 backdrop-blur-sm rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 cursor-pointer"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                </div>

                <div className="absolute top-6 left-6">
                  <span className="bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wide shadow-sm border-l-4 border-amber-500">
                    {t.projects_page?.filters?.[project.category] || project.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                   <h3 className="text-2xl font-heading font-bold text-white mb-2">{project.title}</h3>
                   <div className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-6">
                     <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                     {project.location}
                   </div>
                   <div className="w-full h-px bg-white/20 mb-4"></div>
                   <button className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 opacity-80 group-hover:opacity-100 hover:text-amber-400 transition-all">
                     {t.projects_section.btn_detail} <ArrowRight size={14} />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute -right-64 top-0 w-128 h-128 bg-blue-100/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto bg-white/60 backdrop-blur-xl p-8 rounded-2xl border border-white/50 shadow-sm">
             <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
               {t.services_section.title_main} <span className="text-blue-900">{t.services_section.title_sub}</span>
             </h2>
             <p className="text-slate-600">
               {t.services_section.description}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.1)" }}
                className={`bg-white/70 backdrop-blur-md border ${service.border} p-10 rounded-sm group transition-all duration-300 cursor-default relative overflow-hidden hover:bg-white`}
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-linear-to-br from-white to-transparent rounded-full opacity-50 blur-2xl"></div>

                <div className="flex items-center gap-4 mb-8 relative z-10">
                   <div className={`w-14 h-14 rounded-sm bg-white border border-white/50 shadow-md flex items-center justify-center ${service.color} group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300`}>
                     <service.icon size={28} />
                   </div>
                   <div className="h-px flex-1 bg-slate-200/50 group-hover:bg-slate-200 transition-colors"></div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors relative z-10">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 relative z-10">{service.desc}</p>
                
                <span className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-amber-600 transition-colors relative z-10">
                  <Layers size={14} /> {t.services_section.btn_details}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VIDEO POPUP MODAL */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4"
            onClick={() => setIsVideoOpen(false)} // Arka plana basınca kapat
          >
            {/* Kapatma Butonu */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-amber-500 transition-colors z-20"
            >
              <X size={40} />
            </button>

            {/* Video Konteyneri */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl relative border border-slate-800"
              onClick={(e) => e.stopPropagation()} // Video alanına basınca kapanmayı engelle
            >
              <video 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              >
                <source src="/videos/İnşaat_Şirketi_Tanıtım_Videosu_Oluşturuldu.mp4" type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}