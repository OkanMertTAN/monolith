"use client";

import { motion } from "framer-motion";

const items = [
  "SÜRDÜRÜLEBİLİR MİMARİ", "•",
  "İLERİ MÜHENDİSLİK", "•",
  "GLOBAL VİZYON", "•",
  "AKILLI ŞEHİRLER", "•",
  "ESTETİK & GÜÇ", "•",
  "YENİLİKÇİ TASARIM", "•",
];

export default function Marquee() {
  return (
    <div className="relative flex overflow-hidden bg-secondary py-6 text-white">
      {/* Sonsuz döngü için içeriği 2 kere kopyalıyoruz */}
      <div className="flex w-full overflow-hidden whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="flex min-w-full items-center gap-12 px-6"
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {items.map((item, index) => (
              <span key={index} className="text-xl font-bold uppercase tracking-widest md:text-3xl">
                {item}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}