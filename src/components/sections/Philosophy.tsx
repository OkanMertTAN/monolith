"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Philosophy() {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          
          {/* SOL TARA: Metin (Manifesto) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <span className="mb-6 block text-sm font-bold uppercase tracking-widest text-primary">
              Felsefemiz
            </span>
            <h2 className="mb-8 font-heading text-4xl font-bold uppercase leading-tight text-white md:text-5xl lg:text-6xl">
              Betonun <br />
              <span className="text-gray-600">Sanata Dönüştüğü</span> <br />
              Yer.
            </h2>
            <div className="space-y-6 text-lg text-gray-400">
              <p>
                MONOLITH olarak biz sadece bina inşa etmiyoruz; zamanın ruhuna meydan okuyan, mühendislik harikası yaşam alanları kurguluyoruz.
              </p>
              <p>
                Her projemizde endüstriyel gücü, lüksün zarafetiyle birleştiriyoruz. Detaylara olan takıntımız, bizi sıradan bir inşaat firmasından ayırıp bir "yapı laboratuvarına" dönüştürüyor.
              </p>
            </div>
            
            <div className="mt-10">
               <img 
                 src="/signature.png" 
                 alt="CEO Signature" 
                 className="h-12 opacity-50 invert filter" // İmza yoksa boş görünebilir, sorun değil
               />
            </div>
          </motion.div>

          {/* SAĞ TARAF: Görsel (Soyut Mimari) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex-1"
          >
            <div className="relative aspect-square overflow-hidden bg-zinc-900 md:aspect-[4/3]">
              {/* Soyut Mimari Resmi */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Philosophy"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
              />
              {/* Çerçeve Efekti */}
              <div className="absolute inset-0 border border-white/10" />
              <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full border border-primary/20 bg-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}