"use client";

import { services } from "@/data/services";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

// Temsili Resimler (Servis sırasına göre)
const serviceImages = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop", // Endüstriyel
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop", // Konut
  "https://images.unsplash.com/photo-1581094794329-cd119277ac5b?q=80&w=800&auto=format&fit=crop", // Mühendislik
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop", // Şantiye
  "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=800&auto=format&fit=crop", // Mimari
];

function ServiceCard({ service, index }: { service: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Resim seçimi (döngüsel)
  const bgImage = serviceImages[index % serviceImages.length];

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative h-[500px] w-full cursor-pointer rounded-2xl bg-black group perspective-1000"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl border border-white/10">
        
        {/* ARKA PLAN RESMİ */}
        <div className="absolute inset-0">
          <img 
            src={bgImage} 
            alt={service.title} 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
          />
          {/* Karartma Perdesi (Yazı okunsun diye) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />
        </div>

        {/* İÇERİK KATMANI */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end" style={{ transform: "translateZ(30px)" }}>
          
          {/* İkon */}
          <div className="mb-6 h-14 w-14 rounded-full bg-secondary/20 backdrop-blur-md flex items-center justify-center text-secondary border border-secondary/30 group-hover:bg-secondary group-hover:text-white transition-all">
             <service.icon size={28} />
          </div>

          <span className="text-4xl font-heading font-bold text-white/10 absolute top-6 right-6 group-hover:text-white/30 transition-colors">
             0{index + 1}
          </span>

          <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
            {service.title}
          </h3>
          
          <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-white">
            {service.description}
          </p>

          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-all">
             Detaylı Bilgi <ArrowUpRight size={16} />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="bg-slate-950 py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">Uzmanlıklarımız</span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-white">
            YENİLİKÇİ ÇÖZÜMLER
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}