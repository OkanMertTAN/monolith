"use client";

import Link from "next/link";
import { siteConfig, navigation } from "@/data/site-config";
import { motion } from "framer-motion";
import { HardHat } from "lucide-react";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      // DEĞİŞİKLİK 1: Arka plan koyulaştı (Slate-900), Alt çizgi koyulaştı (Slate-800)
      className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        
        {/* LOGO ALANI */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Logo İkonu */}
          <div className="flex items-center justify-center w-8 h-8 rounded bg-secondary text-white group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.5)]">
             <HardHat size={18} />
          </div>
          {/* DEĞİŞİKLİK 2: Logo yazısı Beyaz oldu */}
          <span className="font-heading text-2xl font-bold tracking-tight text-white group-hover:text-secondary transition-colors">
            {siteConfig.name}
          </span>
        </Link>

        {/* MENÜ (Masaüstü) */}
        <nav className="hidden md:flex gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              // DEĞİŞİKLİK 3: Linkler açık gri (Slate-300), üzerine gelince Beyaz
              className="text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors relative group"
            >
              {item.name}
              {/* Hover Efekti: Alt çizgi Mavi (Secondary) */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* SAĞ TARAF (Buton) */}
        <div className="flex items-center gap-4">
            <Link
            href="/iletisim"
            className="hidden md:inline-flex h-10 items-center justify-center rounded bg-secondary px-6 text-sm font-bold text-white shadow-md shadow-blue-900/50 transition-all hover:bg-blue-600 hover:-translate-y-0.5"
            >
            TEKLİF AL
            </Link>

            {/* DEĞİŞİKLİK 4: Mobil Menü Çizgileri Beyaz oldu */}
            <button className="md:hidden flex flex-col gap-1.5 group">
                <span className="w-6 h-0.5 bg-white group-hover:bg-secondary transition-colors"></span>
                <span className="w-6 h-0.5 bg-white group-hover:bg-secondary transition-colors"></span>
                <span className="w-4 h-0.5 bg-white group-hover:bg-secondary transition-colors ml-auto"></span>
            </button>
        </div>

      </div>
    </motion.header>
  );
}