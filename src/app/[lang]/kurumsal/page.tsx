"use client";

import { use, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { sozluk } from "@/data/sozluk"; // SÖZLÜK EKLENDİ
import { 
  Quote, 
  Activity, 
  ShieldCheck, 
  History,
  Ruler,
  Anchor,
  Leaf,
  HardHat,
  BrickWall,
  Star,
  Building,
  CheckCircle2,
  TrendingUp
} from "lucide-react";
import Image from "next/image";

// --- İMZA BİLEŞENİ ---
const Signature = () => {
  return (
    <div className="w-48 h-20 relative">
      <svg viewBox="0 0 300 100" fill="none" className="w-full h-full">
        <motion.path
          d="M10 80 C 60 10, 100 100, 150 50 S 250 10, 290 80"
          stroke="#0f172a" 
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M40 70 L 260 70"
          stroke="#ea580c"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
};

// --- STATİK MEDYA VERİLERİ (İsimler, Resimler, İkonlar) ---
const teamStatic = [
  {
    name: "AHMET YILMAZ",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "ZEYNEP KAYA",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "MEHMET DEMİR",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  }
];

const valuesIcons = [
  { icon: ShieldCheck, color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
  { icon: Leaf, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { icon: Anchor, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
  { icon: BrickWall, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" }
];

const statsConfig = [
  { color: "text-blue-600", border: "hover:border-blue-500", shadow: "hover:shadow-blue-500/20" },
  { color: "text-emerald-600", border: "hover:border-emerald-500", shadow: "hover:shadow-emerald-500/20" },
  { color: "text-amber-600", border: "hover:border-amber-500", shadow: "hover:shadow-amber-500/20" },
  { color: "text-purple-600", border: "hover:border-purple-500", shadow: "hover:shadow-purple-500/20" }
];

const partners = ["MEGA YAPI", "TEKNO ÇELİK", "GLOBAL BETON", "ARCH VISION", "ZEMİN GROUP", "YAPI KREDİ"];

export default function CorporatePage({ params }: { params: Promise<{ lang: string }> }) {
  
  // 1. Dili ve Veriyi Al
  const { lang } = use(params);
  const t = sozluk[lang].corporate_page;

  // 2. Veri Birleştirme (Data Merging)
  const teamMembers = teamStatic.map((member, i) => ({
    ...member,
    ...t.team.members[i] // Role ve Bio sözlükten gelir
  }));

  const values = t.values.map((val: any, i: number) => ({
    ...val,
    ...valuesIcons[i]
  }));

  const stats = t.stats.map((stat: any, i: number) => ({
    ...stat,
    ...statsConfig[i]
  }));

  const timelineData = t.timeline.items;

  // Scroll Animasyonları
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const timelineRef = useRef(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end center"]
  });
  const lineHeight = useTransform(timelineProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="min-h-screen text-slate-900 selection:bg-secondary selection:text-white relative overflow-hidden font-sans">
      
      {/* --- ARKA PLAN FOTOĞRAFI --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed"></div>
         <div className="absolute inset-0 bg-white/95 backdrop-blur-[2px]"></div>
         <div className="absolute inset-0 bg-[linear-gradient(#00000008_1px,transparent_1px),linear-gradient(90deg,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-48 pb-32 px-6 border-b border-slate-200/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div style={{ opacity: headerOpacity, y: headerY }} className="relative z-10">
            
            <div className="flex items-center gap-4 mb-8">
               <div className="p-3 bg-gradient-to-br from-secondary to-amber-700 text-white rounded shadow-xl shadow-secondary/20">
                  <HardHat size={28} />
               </div>
               <span className="text-sm font-bold tracking-[0.4em] text-slate-500 uppercase bg-white/50 px-3 py-1 rounded-full border border-slate-200">
                 {t.header.badge}
               </span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
              <span className="text-slate-900">{t.header.title_1}</span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-amber-600 to-slate-900 drop-shadow-sm">{t.header.title_2}</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-start gap-8 bg-white/80 p-8 shadow-xl border-l-8 border-secondary rounded-r-2xl max-w-4xl backdrop-blur-md">
              <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed">
                 <span dangerouslySetInnerHTML={{ __html: t.header.quote }} />
              </p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- HİKAYE & İSTATİSTİK --- */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            
            {/* Sol: Metin */}
            <div className="space-y-10">
              <div className="flex items-end gap-4">
                <span className="text-7xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-blue-600">2010</span>
                <span className="text-sm font-mono text-blue-900/50 mb-4 tracking-widest font-bold border-b-2 border-blue-900/20 pb-1">{t.story.year_label}</span>
              </div>
              
              <h2 className="text-4xl font-bold text-slate-800 leading-tight">
                {t.story.title_1} <span className="text-white bg-secondary px-2">{t.story.title_2}</span> {t.story.title_3}
              </h2>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed pl-6 border-l-4 border-slate-200">
                <p dangerouslySetInnerHTML={{ __html: t.story.desc }} />
                <div className="bg-slate-100 p-4 rounded-r-xl border-l-4 border-slate-800 italic text-slate-700 font-medium">
                  "{t.story.quote_small}"
                </div>
              </div>

              {/* Kurucu İmzası */}
              <div className="pt-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t.story.sign_role}</div>
                <Signature />
                <div className="text-sm font-bold text-slate-900 mt-2">AHMET YILMAZ</div>
              </div>
            </div>

            {/* Sağ: İstatistik Grid */}
            <div className="grid grid-cols-2 gap-6">
               {stats.map((stat: any, i: number) => (
                 <motion.div 
                    key={i} 
                    whileHover={{ y: -10 }}
                    className={`bg-white/80 backdrop-blur border border-white p-8 flex flex-col justify-between aspect-square rounded-2xl shadow-lg transition-all duration-300 ${stat.border} ${stat.shadow}`}
                 >
                    <div className={`w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-auto border border-slate-100 shadow-inner`}>
                       <Ruler className={stat.color} size={24} />
                    </div>
                    <div>
                      <div className={`text-4xl md:text-5xl font-heading font-bold ${stat.color} mb-2`}>{stat.val}</div>
                      <div className="text-xs font-bold text-slate-400 tracking-widest uppercase">{stat.label}</div>
                    </div>
                 </motion.div>
               ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- TIMELINE (INTERACTIVE) --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden" ref={timelineRef}>
        <div className="container mx-auto max-w-5xl px-6 relative z-10">
          
          <div className="text-center mb-20">
             <div className="inline-flex items-center gap-2 mb-4 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                <History size={16} className="text-secondary" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t.timeline.badge}</span>
             </div>
             <h2 className="text-4xl font-heading font-bold text-slate-900">{t.timeline.title}</h2>
          </div>

          <div className="relative">
            {/* MERKEZ ÇİZGİ */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full"></div>
            
            {/* DOLAN ÇİZGİ */}
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute left-4 md:left-1/2 top-0 w-1 bg-gradient-to-b from-secondary to-amber-600 -translate-x-1/2 rounded-full origin-top"
            ></motion.div>

            <div className="space-y-12">
              {timelineData.map((item: any, index: number) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 relative ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Boşluk */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Nokta */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-slate-200 rounded-full z-10 flex items-center justify-center shadow-md">
                     <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  </div>

                  {/* İçerik */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <motion.div 
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all relative group"
                    >
                      <div className="absolute -top-4 right-4 bg-slate-900 text-white text-sm font-bold px-3 py-1 rounded shadow-lg group-hover:bg-secondary transition-colors">
                        {item.year}
                      </div>
                      
                      <div className="flex items-center gap-3 mb-3">
                         <div className="p-2 bg-slate-50 rounded-lg text-secondary">
                           {index === 0 ? <Building size={18} /> : index === 5 ? <Activity size={18} /> : <TrendingUp size={18} />}
                         </div>
                         <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- DEĞERLER --- */}
      <section className="py-24 relative">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {values.map((val: any, i: number) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className={`group relative p-8 bg-white border ${val.border} rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                <div className={`absolute top-0 left-0 w-full h-2 ${val.color.replace('text', 'bg')}`}></div>
                <div className={`mb-6 w-14 h-14 ${val.bg} rounded-xl flex items-center justify-center ${val.color} transition-colors duration-300`}>
                   <val.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REFERANSLAR --- */}
      <section className="py-24 bg-slate-900/5 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center mb-16">
            <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-2 bg-secondary/10 px-3 py-1 rounded-full">{t.partners.badge}</span>
            <h2 className="text-3xl font-heading font-bold text-slate-900 text-center">
              {t.partners.title_1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400">{t.partners.title_2}</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
            {partners.map((partner, i) => (
              <div key={i} className="h-24 bg-white/80 backdrop-blur border border-white flex items-center justify-center rounded-xl hover:scale-105 hover:shadow-lg transition-all group cursor-pointer shadow-sm">
                <span className="font-heading font-bold text-slate-400 text-lg group-hover:text-secondary transition-colors">{partner}</span>
              </div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-2xl relative border border-slate-100"
          >
            <Quote size={80} className="text-blue-50 absolute top-6 left-6 -z-10" />
            <div className="flex flex-col md:flex-row gap-8 items-center">
               <div className="shrink-0 relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" width={200} height={200} alt="CEO" />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full border-2 border-white">
                    <CheckCircle2 size={14} />
                  </div>
               </div>
               <div>
                  <div className="flex text-amber-400 mb-4 gap-1">
                    {[...Array(5)].map((_,i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-xl md:text-2xl text-slate-700 font-light italic leading-relaxed mb-6">
                    <span dangerouslySetInnerHTML={{ __html: t.partners.testimonial.quote }} />
                  </p>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">CANER ERKİN</div>
                    <div className="text-xs text-secondary font-bold tracking-wider uppercase">{t.partners.testimonial.role}</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- YÖNETİM KADROSU --- */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-slate-300 pb-8">
            <div>
              <span className="text-secondary font-bold text-xs tracking-widest uppercase block mb-2">{t.team.badge}</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">{t.team.title_1} <span className="text-slate-400">{t.team.title_2}</span></h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-[450px] w-full overflow-hidden">
                  <Image src={member.img} alt={member.name} fill className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white font-heading">{member.name}</h3>
                      <p className="text-secondary text-xs font-bold tracking-widest uppercase">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DEPREM GÜVENLİĞİ --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white p-8 md:p-16 relative shadow-2xl rounded-3xl overflow-hidden border border-slate-100">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
              <div className="shrink-0 relative">
                <div className="w-40 h-40 border-8 border-emerald-50 rounded-full flex items-center justify-center relative bg-white shadow-xl">
                   <Activity size={64} className="text-emerald-500 animate-pulse" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="text-emerald-600" />
                  <span className="text-emerald-700 font-bold text-xs tracking-widest bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">{t.safety.badge}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                  {t.safety.title_1} <br/> <span className="text-emerald-500">{t.safety.title_2}</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mb-8">
                  <span dangerouslySetInnerHTML={{ __html: t.safety.desc }} />
                </p>
                <div className="flex flex-wrap gap-4">
                  {t.safety.tags.map((tag: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 px-5 py-3 bg-slate-50 border border-slate-200 text-sm font-bold text-slate-700 rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-colors cursor-default shadow-sm">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}