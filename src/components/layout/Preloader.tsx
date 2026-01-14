"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

// --- ÇEVİRİLER ---
const loadingTexts: any = {
  tr: "SİSTEMLER YÜKLENİYOR",
  en: "SYSTEMS LOADING",
  ar: "جاري تحميل الأنظمة",
  ru: "ЗАГРУЗКА СИСТЕМ"
};

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(true);
  
  const pathname = usePathname();

  // Dili URL'den algıla (Varsayılan: TR)
  const getLang = () => {
    if (!pathname) return "tr";
    const pathLang = pathname.split("/")[1]; 
    return ["tr", "en", "ar", "ru"].includes(pathLang) ? pathLang : "tr";
  };

  const lang = getLang();
  const loadingText = loadingTexts[lang];

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);

  useEffect(() => {
    // HIZLANDIRILMIŞ SAYAÇ
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 200);
          return 100;
        }
        return prev + (Math.random() * 15); 
      });
    }, 30); 

    return () => clearInterval(timer);
  }, []);

  const displayProgress = Math.min(Math.round(progress), 100);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 L0 0`;

  const curveContainerVariants = {
    exit: {
      top: "-100vh",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const, delay: 0.1 }
    }
  };

  const curveVariants = {
    initial: { d: initialPath },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const }
    }
  };
  
  const contentFade = {
    exit: { opacity: 0, y: -50, transition: { duration: 0.2 } }
  };

  const blueprintDraw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { duration: 1.0, ease: [0.42, 0, 0.58, 1] as const }, 
        opacity: { duration: 0.3 }
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div 
          key="preloader-container"
          variants={curveContainerVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-50 overflow-hidden cursor-wait"
          // Arapça için font ayarı
          style={{ fontFamily: lang === 'ar' ? 'var(--font-cairo)' : 'inherit' }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

          {dimension.width > 0 && (
            <motion.div variants={contentFade} exit="exit" className="relative z-20 flex flex-col items-center">
              
              <div className="w-64 h-64 mb-4 relative">
                <svg viewBox="0 0 200 200" className="w-full h-full stroke-slate-900" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <motion.path
                    variants={blueprintDraw}
                    initial="hidden"
                    animate="visible"
                    d="M40 180 H160 M50 180 V80 L100 40 L150 80 V180 M70 180 V120 H130 V180 M90 120 V180"
                  />
                  <motion.path
                    variants={blueprintDraw}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2, duration: 0.8 }}
                    d="M65 95 H85 V105 H65 V95 M115 95 H135 V105 H135 V95 M65 65 H85 V75 H65 V65 M115 65 H135 V75 H135 V65"
                    strokeWidth="1"
                  />
                    <motion.path
                    variants={blueprintDraw}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4, duration: 0.5 }}
                    d="M150 80 L180 50 M180 50 V70 M180 50 L160 50"
                    strokeWidth="1"
                    className="stroke-amber-500"
                  />
                </svg>
                <div className="absolute inset-0 bg-blue-500/5 blur-2xl -z-10 rounded-full"></div>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold font-mono text-slate-900 mb-2 tracking-tighter">
                  {displayProgress}%
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">
                  {/* Dinamik Yükleniyor Yazısı */}
                  {loadingText}
                </div>
                
                <div className="w-64 h-1 bg-slate-200 rounded-full overflow-hidden relative">
                   <motion.div 
                     className="absolute top-0 left-0 h-full bg-amber-500"
                     initial={{ width: "0%" }}
                     animate={{ width: `${displayProgress}%` }}
                     transition={{ ease: "linear", duration: 0.1 }}
                   />
                </div>
              </div>

            </motion.div>
          )}

          <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-slate-50 z-10">
            <motion.path 
              variants={curveVariants} 
              initial="initial" 
              exit="exit" 
            ></motion.path>
          </svg>

        </motion.div>
      )}
    </AnimatePresence>
  );
}