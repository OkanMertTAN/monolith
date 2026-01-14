"use client";

import { useState, useEffect, useRef, useMemo, use } from "react";
import dynamic from "next/dynamic";
// DEĞİŞİKLİK 1: Artık 'portfolioItems' değil, 'projectsData'yı çekiyoruz
import { projectsData } from "@/data/projects";
import { motion, AnimatePresence, useScroll, useTransform, Variants } from "framer-motion";
import { sozluk } from "@/data/sozluk"; 
import { 
  X, Building2, Calendar, User, CheckCircle2, ChevronLeft, ChevronRight, 
  LayoutGrid, Map as MapIcon, MapPin, PlayCircle, Image as ImageIcon, Video, 
  Ruler
} from "lucide-react";

// --- GALERİ BİLEŞENİ ---
const GallerySection = ({ gallery, title }: { gallery: any[], title: string }) => {
  const [activeMedia, setActiveMedia] = useState(gallery[0]);

  useEffect(() => {
    if (gallery && gallery.length > 0) setActiveMedia(gallery[0]);
  }, [gallery]);

  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="mt-16 border-t border-slate-200 pt-16">
      <h3 className="text-2xl text-slate-900 font-bold mb-8 flex items-center gap-3">
        <Video className="text-secondary" /> {title}
      </h3>

      <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl mb-6 relative group border-4 border-white">
        <AnimatePresence mode="wait">
          {activeMedia.type === "video" && (
            <motion.div key="video" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full">
              <video src={activeMedia.src} controls autoPlay muted loop className="w-full h-full object-cover" />
            </motion.div>
          )}
          {activeMedia.type === "image" && (
            <motion.div key="image" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full">
              <img src={activeMedia.src} alt={activeMedia.title} className="w-full h-full object-cover" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
        {gallery.map((item, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveMedia(item)}
            className={`relative min-w-[160px] h-[100px] rounded-xl overflow-hidden border-2 transition-all shadow-sm ${
              activeMedia === item ? "border-secondary ring-2 ring-secondary/30" : "border-slate-200 opacity-80 hover:opacity-100"
            }`}
          >
            <img src={item.thumb || item.src} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
              {item.type === "video" ? <PlayCircle size={32} className="text-white drop-shadow-md" /> : <ImageIcon size={24} className="text-white drop-shadow-md" />}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

// --- 3D ARKA PLAN ---
const ConstructionBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
      const canvas = canvasRef.current; if (!canvas) return; const ctx = canvas.getContext("2d"); if (!ctx) return;
      let width = canvas.width = canvas.offsetWidth; let height = canvas.height = canvas.offsetHeight;
      class BuildingBlock {
        x: number; y: number; z: number; size: number; rotationX: number; rotationY: number; speedX: number; speedY: number; rotationSpeed: number;
        constructor() { this.x = (Math.random() - 0.5) * width * 1.5; this.y = (Math.random() - 0.5) * height; this.z = Math.random() * width + 500; this.size = Math.random() * 50 + 30; this.rotationX = Math.random() * Math.PI; this.rotationY = Math.random() * Math.PI; this.speedX = (Math.random() - 0.5) * 0.5; this.speedY = (Math.random() - 0.5) * 0.5; this.rotationSpeed = (Math.random() - 0.5) * 0.01; }
        project(x: number, y: number, z: number) { const scale = 1000 / (1000 + z); return { x: width / 2 + x * scale, y: height / 2 + y * scale, scale: scale }; }
        rotate(x: number, y: number, z: number) { let y1 = y * Math.cos(this.rotationX) - z * Math.sin(this.rotationX); let z1 = y * Math.sin(this.rotationX) + z * Math.cos(this.rotationX); let x2 = x * Math.cos(this.rotationY) - z1 * Math.sin(this.rotationY); let z2 = x * Math.sin(this.rotationY) + z1 * Math.cos(this.rotationY); return { x: x2, y: y1, z: z2 }; }
        update() { this.x += this.speedX; this.y += this.speedY; this.rotationX += this.rotationSpeed; this.rotationY += this.rotationSpeed; if (this.z < 200) this.z = width + 500; if (Math.abs(this.x) > width * 1.5) this.x *= -1; if (Math.abs(this.y) > height) this.y *= -1; }
        draw() { 
          const vertices = [{x:-this.size,y:-this.size,z:-this.size},{x:this.size,y:-this.size,z:-this.size},{x:this.size,y:this.size,z:-this.size},{x:-this.size,y:this.size,z:-this.size},{x:-this.size,y:-this.size,z:this.size},{x:this.size,y:-this.size,z:this.size},{x:this.size,y:this.size,z:this.size},{x:-this.size,y:this.size,z:this.size}]; 
          const projected = vertices.map(v => { const r = this.rotate(v.x, v.y, v.z); return this.project(r.x + this.x, r.y + this.y, r.z + this.z + 500); }); 
          ctx!.strokeStyle = "rgba(15, 23, 42, 0.15)"; 
          ctx!.lineWidth = 1; ctx!.beginPath(); 
          const edges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]]; 
          edges.forEach(e => { const p1 = projected[e[0]]; const p2 = projected[e[1]]; ctx!.moveTo(p1.x, p1.y); ctx!.lineTo(p2.x, p2.y); }); 
          ctx!.stroke(); 
          ctx!.fillStyle = "rgba(180, 83, 9, 0.4)"; 
          projected.forEach(p => { ctx!.beginPath(); ctx!.arc(p.x, p.y, 1.5 * p.scale, 0, Math.PI * 2); ctx!.fill(); }); 
        }
      }
      const blocks: any[] = []; for (let i=0; i<30; i++) blocks.push(new BuildingBlock());
      const animate = () => { ctx.clearRect(0,0,width,height); blocks.forEach(b => {b.update(); b.draw()}); requestAnimationFrame(animate); };
      animate();
      const handleResize = () => { width = canvas.width = canvas.offsetWidth; height = canvas.height = canvas.offsetHeight; };
      window.addEventListener("resize", handleResize); return () => window.removeEventListener("resize", handleResize);
    }, []);
    return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />;
};

// Kategori Renkleri
const categoryColors: Record<string, string> = {
  "Tümü": "bg-slate-800 border-slate-800 text-white",
  "Konut": "bg-amber-600 border-amber-600 text-white",
  "Endüstriyel": "bg-blue-600 border-blue-600 text-white",
  "Ticari": "bg-emerald-600 border-emerald-600 text-white",
  "Turizm": "bg-cyan-600 border-cyan-600 text-white",
  "Eğitim": "bg-indigo-600 border-indigo-600 text-white",
  "Sağlık": "bg-teal-600 border-teal-600 text-white"
};

const cardVariants: Variants = { hidden: { opacity: 0, y: 20, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } }, exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } } };
const modalVariants: Variants = { hidden: { opacity: 0, scale: 0.95, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 20 } }, exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } } };

// --- ANA BİLEŞEN ---
export default function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  
  // 1. Dili Al
  const { lang } = use(params);
  
  // 2. Sözlük Verisi
  const t = sozluk[lang].projects_page;

  // DEĞİŞİKLİK 2: Proje Verisini Dile Göre Seç
  const portfolioItems = projectsData[lang] || projectsData.tr;

  // 3. Harita Bileşeni (Texti çevirebilmek için burada memoize ediyoruz)
  const LeafletMap = useMemo(() => dynamic(() => import("@/components/ui/LeafletMap"), {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 font-bold tracking-widest text-xs border border-slate-200">
        <span className="animate-pulse">{t.loading_map}</span>
      </div>
    ),
  }), [t.loading_map]);

  const [activeCategory, setActiveCategory] = useState("Tümü");
  // Tip güvenliği için portfolioItems[0]'ı referans alıyoruz
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  // Kategori listesi (Data'daki orijinal isimler - bunlar çevrilmez, ID görevi görür)
  const categories = ["Tümü", "Konut", "Endüstriyel", "Ticari", "Turizm", "Eğitim", "Sağlık"];
  
  const filteredProjects = activeCategory === "Tümü" ? portfolioItems : portfolioItems.filter((p) => p.category === activeCategory);

  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  useEffect(() => { document.body.style.overflow = selectedProject ? "hidden" : "auto"; }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "Escape") setSelectedProject(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  return (
    <main className="min-h-screen bg-slate-50 relative font-sans text-slate-900">
      
      <div className="fixed inset-0 z-0 opacity-100 pointer-events-none">
        <ConstructionBackground />
      </div>
      
      {/* HEADER */}
      <motion.section style={{ y: headerY, opacity: headerOpacity }} className="relative pt-40 pb-16 px-6 overflow-hidden z-10">
        <div className="container mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200">
               <Building2 size={16} className="text-secondary" />
               <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500">{t.header.badge}</span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter mb-4">
              <span className="text-slate-900">{t.header.title_1}</span> <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-orange-500 to-amber-500 drop-shadow-sm">{t.header.title_2}</span>
            </h1>
          </motion.div>
        </div>
      </motion.section>

      {/* FILTER BAR */}
      <div className="sticky top-0 z-40 py-4">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm" />
        <div className="container mx-auto px-6 relative flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, index) => (
              <motion.button 
                key={index} 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)} 
                className={`px-5 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full border shadow-sm transition-all ${
                  activeCategory === cat 
                  ? categoryColors[cat] || "bg-slate-900 text-white" 
                  : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-700"
                }`}
              >
                {/* Sözlükten etiketi al, yoksa orijinali göster */}
                {t.filters[cat] || cat}
              </motion.button>
            ))}
          </div>
          
          <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
             <button onClick={() => setViewMode("grid")} className={`p-2 rounded-lg flex items-center gap-2 text-xs font-bold uppercase transition-all ${viewMode === "grid" ? "bg-slate-100 text-slate-900 shadow-inner" : "text-slate-400 hover:text-slate-600"}`}>
               <LayoutGrid size={18} /> <span className="hidden md:inline">{t.view_modes.list}</span>
             </button>
             <button onClick={() => setViewMode("map")} className={`p-2 rounded-lg flex items-center gap-2 text-xs font-bold uppercase transition-all ${viewMode === "map" ? "bg-slate-100 text-slate-900 shadow-inner" : "text-slate-400 hover:text-slate-600"}`}>
               <MapIcon size={18} /> <span className="hidden md:inline">{t.view_modes.map}</span>
             </button>
          </div>

        </div>
      </div>

      {/* CONTENT AREA */}
      <section className="py-12 px-6 relative z-10 min-h-screen">
        <div className="container mx-auto">
          
          {viewMode === "grid" && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div 
                    layout 
                    key={project.id} 
                    variants={cardVariants} 
                    initial="hidden" 
                    animate="visible" 
                    exit="exit" 
                    className="group cursor-pointer" 
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative h-[450px] overflow-hidden rounded-[2rem] bg-white border border-slate-200 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                      
                      {/* Kategori Etiketi */}
                      <div className="absolute top-6 left-6 z-20">
                        <span className={`text-white text-[10px] font-bold uppercase px-4 py-2 rounded-full border border-white/20 shadow-lg backdrop-blur-md ${categoryColors[project.category]?.split(' ')[0] || "bg-slate-900"}`}>
                          {t.filters[project.category] || project.category}
                        </span>
                      </div>
                      
                      <motion.img 
                        layoutId={`img-${project.id}`} 
                        src={project.image} 
                        alt={project.title} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"/>
                      
                      <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                           <Calendar size={12} /> {project.year}
                        </div>
                        <h3 className="text-3xl font-heading font-bold text-white mb-2 leading-tight">{project.title}</h3>
                        <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium bg-white/10 w-fit px-2 py-1 rounded backdrop-blur-sm">
                          <MapPin size={12} /> {project.location}
                        </div>
                      </div>
                      
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {viewMode === "map" && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="relative w-full h-[700px] bg-slate-100 rounded-[2rem] border-4 border-white shadow-2xl overflow-hidden z-20">
              <LeafletMap projects={filteredProjects} onSelectProject={setSelectedProject} />
            </motion.div>
          )}
        </div>
      </section>

      {/* FULL SCREEN MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-0 md:p-4" onClick={() => setSelectedProject(null)}>
            
            <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-[60] w-16 h-16 bg-white hover:bg-secondary rounded-full flex items-center justify-center text-slate-900 hover:text-white transition-all shadow-2xl group border border-slate-200"><ChevronLeft size={32} /></button>
            <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[60] w-16 h-16 bg-white hover:bg-secondary rounded-full flex items-center justify-center text-slate-900 hover:text-white transition-all shadow-2xl group border border-slate-200"><ChevronRight size={32} /></button>

            <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className="bg-white w-full max-w-[98vw] h-full md:h-[95vh] rounded-none md:rounded-[2rem] overflow-hidden shadow-2xl relative flex flex-col" onClick={(e) => e.stopPropagation()}>
              
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-30 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 hover:bg-red-500 hover:text-white transition-all shadow-lg border border-slate-200"><X size={24} /></button>

              <div className="overflow-y-auto custom-scrollbar flex-1 relative">
                
                {/* Hero Görsel */}
                <div className="relative h-[50vh] md:h-[65vh] w-full">
                  <motion.img key={selectedProject.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} src={selectedProject.image} className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
                    <span className={`inline-block px-3 py-1 rounded text-[10px] font-bold tracking-[0.2em] uppercase mb-4 ${categoryColors[selectedProject.category]?.split(' ')[0] || "bg-slate-700"}`}>
                        {t.filters[selectedProject.category] || selectedProject.category}
                    </span>
                    <motion.h2 key={`title-${selectedProject.id}`} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl md:text-7xl font-heading font-bold mb-2">{selectedProject.title}</motion.h2>
                    <div className="flex items-center gap-2 text-xl text-gray-300 font-medium"><MapPin size={20} className="text-secondary" /> {selectedProject.location}</div>
                  </div>
                </div>

                {/* Detaylar */}
                <div className="grid md:grid-cols-12 gap-16 p-8 md:p-16 bg-slate-50">
                  
                  {/* Sol Panel: Künye */}
                  <div className="md:col-span-4">
                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl sticky top-8">
                      <h3 className="text-slate-900 font-bold uppercase tracking-widest text-lg mb-8 border-b border-slate-100 pb-4 flex items-center gap-2"><Ruler size={20} /> {t.modal.details_title}</h3>
                      <ul className="space-y-6">
                        <li className="flex items-start gap-4"><div className="p-2 bg-blue-50 rounded-lg text-blue-600"><User size={20} /></div><div><span className="block text-xs text-slate-400 uppercase font-bold mb-1">{t.modal.client}</span><span className="text-slate-900 text-lg font-bold">{selectedProject.details?.client}</span></div></li>
                        <li className="flex items-start gap-4"><div className="p-2 bg-emerald-50 rounded-lg text-emerald-600"><Building2 size={20} /></div><div><span className="block text-xs text-slate-400 uppercase font-bold mb-1">{t.modal.area}</span><span className="text-slate-900 text-lg font-bold">{selectedProject.details?.area}</span></div></li>
                        <li className="flex items-start gap-4"><div className="p-2 bg-amber-50 rounded-lg text-amber-600"><Calendar size={20} /></div><div><span className="block text-xs text-slate-400 uppercase font-bold mb-1">{t.modal.year_status}</span><span className="text-slate-900 text-lg font-bold">{selectedProject.year} • {selectedProject.details?.status}</span></div></li>
                      </ul>
                      <div className="mt-10 pt-8 border-t border-slate-100">
                        <button className="w-full py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-secondary transition-all shadow-lg hover:shadow-secondary/30 flex items-center justify-center gap-2 group">
                          {t.modal.btn_offer} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Sağ Panel: İçerik */}
                  <div className="md:col-span-8 space-y-12">
                    
                    {/* Vizyon */}
                    <div>
                      <h3 className="text-3xl md:text-4xl text-slate-900 font-heading font-bold mb-6">{t.modal.vision_title}</h3>
                      <motion.p key={`desc-${selectedProject.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-slate-600 leading-loose text-xl font-light">
                        {selectedProject.description}
                      </motion.p>
                    </div>

                    {/* Challenge / Solution Cards */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-red-500 font-bold uppercase text-sm tracking-widest mb-4 flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full"></div> {t.modal.challenge}</h4>
                        <p className="text-slate-600 text-base leading-relaxed">{selectedProject.details?.challenge}</p>
                      </div>
                      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-emerald-500 font-bold uppercase text-sm tracking-widest mb-4 flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> {t.modal.solution}</h4>
                        <p className="text-slate-600 text-base leading-relaxed">{selectedProject.details?.solution}</p>
                      </div>
                    </div>

                    {/* Teknik Özellikler */}
                    <div>
                      <h3 className="text-2xl text-slate-900 font-bold mb-6">{t.modal.tech_specs}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.details?.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-secondary transition-colors group">
                            <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-slate-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* GALERİ */}
                    {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                      <GallerySection gallery={selectedProject.gallery} title={t.gallery_title} />
                    )}

                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}