"use client";

import { useState, useEffect, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CalendarDays, 
  Clock, 
  ArrowRight, 
  User, 
  BookOpen,
  X,
  Share2,
  Bookmark,
  Printer
} from "lucide-react";
import Image from "next/image";
import { sozluk } from "@/data/sozluk"; // SÖZLÜK EKLENDİ

export default function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  
  // 1. Dili Al (Next.js 15 'use' kullanımı)
  const { lang } = use(params);
  
  // 2. İlgili Sözlüğü Seç
  const t = sozluk[lang].technical_page;
  const posts = t.posts; // Blog yazılarını sözlükten alıyoruz

  const [selectedPost, setSelectedPost] = useState<any | null>(null);

  // Modal açıldığında body scroll'u kilitle
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedPost]);

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-500 selection:text-white pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(#0f172a05_1px,transparent_1px),linear-gradient(90deg,#0f172a05_1px,transparent_1px)] bg-size-[40px_40px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto max-w-7xl relative z-10 text-center">
             <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-100 border border-slate-200 rounded-sm">
                <BookOpen size={16} className="text-amber-600" />
                <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">{t.header.badge}</span>
             </div>
             
             <h1 className="text-5xl md:text-7xl font-heading font-bold text-slate-900 mb-6 tracking-tight">
               {t.header.title_1} <br/> <span className="text-slate-400">{t.header.title_2}</span>
             </h1>
             
             <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
               {t.header.desc}
             </p>
        </div>
      </section>

      {/* --- BLOG GRID --- */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {posts.map((post: any, i: number) => (
              <motion.article
                key={post.id}
                layoutId={`post-${post.id}`}
                onClick={() => setSelectedPost(post)}
                className="group bg-white rounded-sm border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer"
              >
                {/* Görsel Alanı */}
                <div className="relative h-64 overflow-hidden border-b border-slate-100">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900 border-l-2 border-amber-500 shadow-sm">
                    {post.category}
                  </div>
                </div>

                {/* İçerik Alanı */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                    <div className="flex items-center gap-1.5"><CalendarDays size={14} /> {post.date}</div>
                    <div className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime} {t.ui.read_time}</div>
                  </div>

                  <h2 className="text-xl font-heading font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
                           <User size={14} />
                        </div>
                        <div>
                           <div className="text-xs font-bold text-slate-900">{post.author}</div>
                           <div className="text-[10px] text-slate-400 font-bold uppercase">{post.role}</div>
                        </div>
                     </div>
                     <div className="w-10 h-10 bg-white border border-slate-200 rounded-sm flex items-center justify-center text-slate-400 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all">
                         <ArrowRight size={18} />
                     </div>
                  </div>
                </div>
                <div className="h-1 w-0 bg-amber-500 group-hover:w-full transition-all duration-500"></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL (POPUP) --- */}
      <AnimatePresence>
        {selectedPost && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[100]"
            />

            {/* Modal Container */}
            <motion.div
              layoutId={`post-${selectedPost.id}`}
              className="fixed inset-4 md:inset-10 lg:inset-x-40 lg:inset-y-10 bg-white z-[101] rounded-lg shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Kapat Butonu */}
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-100 transition-colors shadow-lg"
              >
                <X size={24} />
              </button>

              {/* Scrollable Area */}
              <div className="overflow-y-auto h-full scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
                
                {/* Modal Header Image */}
                <div className="relative w-full h-64 md:h-96">
                   <Image src={selectedPost.image} alt={selectedPost.title} fill className="object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                   <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                      <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-bold uppercase tracking-widest rounded-sm mb-4">
                        {selectedPost.category}
                      </span>
                      <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
                        {selectedPost.title}
                      </h2>
                      <div className="flex items-center gap-6 text-white/80 text-sm font-medium">
                        <div className="flex items-center gap-2"><CalendarDays size={16} /> {selectedPost.date}</div>
                        <div className="flex items-center gap-2"><User size={16} /> {selectedPost.author}</div>
                      </div>
                   </div>
                </div>

                {/* Modal Content Body */}
                <div className="p-8 md:p-16 max-w-4xl mx-auto">
                   
                   {/* İçerik (HTML Render - Güvenli Çeviri İçin) */}
                   <div 
                     className="prose prose-lg prose-slate max-w-none"
                     dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                   />

                   {/* Etiketler */}
                   <div className="mt-12 pt-8 border-t border-slate-200">
                     <div className="flex flex-wrap gap-2">
                       {selectedPost.tags.map((tag: string) => (
                         <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-sm">
                           #{tag}
                         </span>
                       ))}
                     </div>
                   </div>

                   {/* Aksiyonlar */}
                   <div className="mt-8 flex gap-4">
                     <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-sm text-slate-600 font-bold text-sm uppercase hover:bg-slate-50 transition-colors">
                       <Share2 size={16} /> {t.ui.share}
                     </button>
                     <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-sm text-slate-600 font-bold text-sm uppercase hover:bg-slate-50 transition-colors">
                       <Bookmark size={16} /> {t.ui.save}
                     </button>
                     <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-sm text-slate-600 font-bold text-sm uppercase hover:bg-slate-50 transition-colors">
                       <Printer size={16} /> {t.ui.print}
                     </button>
                   </div>

                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </main>
  );
}