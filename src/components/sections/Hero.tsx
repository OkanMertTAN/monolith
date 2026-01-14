"use client";

import Link from "next/link";
import { ArrowRight, Play, Box as BoxIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// --- ARKA PLAN DESENİ (BLUEPRINT SVG) ---
// Bu bileşen, arka planda çok silik duracak teknik çizgileri ve ölçüleri içerir.
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
    {/* Ana Grid */}
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    {/* Teknik İşaretçiler ve Çizgiler */}
    <path d="M0 800L800 0" stroke="currentColor" strokeWidth="1" />
    <path d="M100 800V750 M200 800V750 M300 800V750" stroke="currentColor" strokeWidth="2" />
    <circle cx="400" cy="400" r="250" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="10,10" />
    <path d="M400 100V700 M100 400H700" stroke="currentColor" strokeWidth="0.5" />
    <rect x="50" y="50" width="100" height="100" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M600 600 L700 700 M600 700 L700 600" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// --- 3D TEKNİK KÜP BİLEŞENİ ---
function TechnicalCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2.8, 2.8, 2.8]} />
      {/* Beyaz arka plan olduğu için tel kafes rengini koyulaştırdık (Slate-600) */}
      <meshBasicMaterial color="#475569" wireframe />
    </mesh>
  );
}

// --- ANA HERO BİLEŞENİ ---
export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col lg:flex-row overflow-hidden">
      
      {/* --- SOL TARAF: %40 ALAN (MİMARİ TASLAK TEMASI) --- */}
      <div className="w-full lg:w-[40%] h-full flex flex-col justify-center px-8 md:px-12 lg:px-16 relative z-20 border-r border-slate-200 bg-slate-50 overflow-hidden">
        
        {/* 1. KATMAN: TEKNİK IZGARA (CSS Gradients) */}
        {/* Çok ince, milimetrik kağıt hissi veren kareli zemin */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

        {/* 2. KATMAN: SVG BLUEPRINT DESENİ */}
        <BlueprintPattern />

        {/* 3. KATMAN: VURGU IŞIĞI (Ambient Glow) */}
        {/* Sağ üstten gelen hafif amber ışığı derinlik katar */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        {/* 4. KATMAN: 3D KÜP (Arka Planda) */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
               <TechnicalCube />
            </Float>
          </Canvas>
        </div>

        {/* İÇERİK (Metinler Artık Koyu Renk Olmalı) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* Marka Etiketi */}
          <div className="inline-flex items-center gap-2 mb-8 border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-1 rounded shadow-sm text-slate-600">
             <BoxIcon size={12} className="text-amber-600" />
             <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Engineering Excellence</span>
          </div>

          {/* Başlık */}
          <h1 className="font-heading text-7xl xl:text-8xl font-bold text-slate-900 leading-[0.85] tracking-tighter mb-8">
            <span className="block text-slate-400">MONO</span>
            <span className="block">LITH.</span>
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed max-w-sm mb-10 border-l-4 border-amber-500 pl-6">
            Betonun gücünü, çeliğin esnekliğini ve <span className="text-slate-900 font-bold">aklın sınırlarını</span> birleştiriyoruz.
          </p>

          {/* Buton Grubu */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/projeler"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-amber-600 transition-all shadow-xl hover:shadow-amber-600/20 rounded-sm"
            >
              Projeleri Gör
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="flex items-center justify-center gap-3 px-8 py-4 border border-slate-300 text-slate-700 font-bold uppercase tracking-widest text-sm hover:bg-slate-100 hover:border-slate-400 transition-all group rounded-sm bg-white/50">
              <Play size={16} className="text-amber-600" />
              Filmi İzle
            </button>
          </div>

        </motion.div>

        {/* Koordinatlar */}
        <div className="absolute bottom-10 left-12 text-slate-400 text-xs font-mono uppercase tracking-widest hidden md:block">
          // Lat: 41.0082° N <br/>
          // Lon: 28.9784° E
        </div>
      </div>

      {/* --- SAĞ TARAF: VİDEO (Değişmedi) --- */}
      <div className="w-full lg:w-[60%] h-full relative group bg-slate-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
        >
          {/* Kendi videonuzu buraya koyduğunuzdan emin olun */}
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply transition-opacity group-hover:opacity-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10" />

        <div className="absolute bottom-0 right-0 p-12 w-full md:w-auto bg-gradient-to-t from-black/90 to-transparent">
          <div className="flex items-end justify-between md:justify-end gap-8">
             <div className="text-right">
                <p className="text-amber-500 font-bold text-sm tracking-widest uppercase mb-1">Featured Project</p>
                <p className="text-white font-heading text-4xl font-bold">SKY TOWER</p>
                <p className="text-gray-400 text-sm mt-2">Istanbul, TR</p>
             </div>
             <div className="hidden md:block w-16 h-16 border border-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                <ArrowRight size={20} className="-rotate-45" />
             </div>
          </div>
        </div>
      </div>

    </section>
  );
}