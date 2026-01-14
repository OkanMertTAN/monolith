"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Titan Loft",
    location: "Bodrum",
    category: "Konut",
    size: "col-span-1 md:col-span-2 row-span-2", // BÜYÜK KARE
    image: "https://images.unsplash.com/photo-1600596542815-22b4899975d2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Onyx Plaza",
    location: "İstanbul",
    category: "Ticari",
    size: "col-span-1 row-span-1", // KÜÇÜK KARE
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Atlas Lojistik",
    location: "Kocaeli",
    category: "Endüstriyel",
    size: "col-span-1 row-span-1", // KÜÇÜK KARE
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Vadi Evleri",
    location: "İzmir",
    category: "Kentsel Dönüşüm",
    size: "col-span-1 md:col-span-2 row-span-1", // YATAY UZUN
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
  },
];

export default function BentoProjects() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-heading text-4xl font-bold text-slate-900 md:text-5xl">SEÇKİN PROJELER</h2>
            <p className="mt-4 text-slate-500">Mimari vizyonumuzun hayata geçmiş en özel örnekleri.</p>
          </div>
          <Link href="/projeler" className="hidden text-sm font-bold uppercase tracking-widest text-secondary hover:underline md:block">
            Tümünü İncele
          </Link>
        </div>

        {/* BENTO GRID YAPISI */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-3 h-[800px] md:h-[600px]">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden rounded-2xl ${project.size}`}
            >
              {/* Resim */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Karartma */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

              {/* İçerik */}
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="mb-2 inline-block rounded bg-secondary/80 px-2 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                  {project.category}
                </span>
                <h3 className="font-heading text-2xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.location}</p>
              </div>

              {/* İkon */}
              <div className="absolute right-6 top-6 flex h-10 w-10 translate-y-4 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight size={20} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}