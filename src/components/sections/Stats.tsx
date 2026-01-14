"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "30", label: "Yıllık Tecrübe", suffix: "+" },
  { value: "150", label: "Bin m² İnşaat", suffix: "K" },
  { value: "45", label: "Devam Eden Proje", suffix: "" },
  { value: "200", label: "Uzman Personel", suffix: "+" },
];

export default function Stats() {
  return (
    <section className="bg-slate-50 py-24 border-b border-slate-200">
      <div className="container mx-auto px-6">
        
        {/* Grid Yapısı */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col pl-6 border-l-4 border-secondary/30 hover:border-secondary transition-colors duration-300 group"
            >
              {/* Rakam */}
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-6xl font-bold text-slate-900 group-hover:text-secondary transition-colors">
                  {stat.value}
                </span>
                <span className="text-3xl font-bold text-secondary">
                  {stat.suffix}
                </span>
              </div>
              
              {/* Etiket */}
              <p className="mt-2 text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}