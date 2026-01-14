"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Varsayılan Leaflet ikonunu temizleyip kendi CSS ikonumuzu tanımlıyoruz
// Bu sayede siyah haritada parlayan turuncu noktalar yapacağız.
const createCustomIcon = () => {
  return L.divIcon({
    className: "custom-marker",
    html: `<div class="relative flex items-center justify-center w-8 h-8">
             <div class="absolute w-full h-full bg-secondary/30 rounded-full animate-ping"></div>
             <div class="relative w-4 h-4 bg-secondary border-2 border-white rounded-full shadow-[0_0_15px_rgba(255,165,0,0.8)]"></div>
           </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16], // Ortala
    popupAnchor: [0, -20],
  });
};

// Haritayı projelere göre ortalayan yardımcı bileşen
const RecenterMap = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 6, { animate: true }); // Zoom seviyesini 6 yaptık (Tüm Türkiye)
  }, [center, map]);
  return null;
};

interface MapProps {
  projects: any[];
  onSelectProject: (project: any) => void;
}

export default function LeafletMap({ projects, onSelectProject }: MapProps) {
  // Türkiye Merkezi
  const centerPosition: [number, number] = [39.0, 35.5]; 

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer 
        center={centerPosition} 
        zoom={6} 
        scrollWheelZoom={false} 
        className="w-full h-full bg-slate-900"
        style={{ background: '#0f172a' }} // Yüklenirken siyah görünsün
      >
        {/* CARTO DB DARK MATTER: İstediğin profesyonel siyah Google Maps görünümü budur */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {projects.map((project) => (
          <Marker 
            key={project.id} 
            position={project.coordinates || [39, 35]} 
            icon={createCustomIcon()}
            eventHandlers={{
              click: () => onSelectProject(project),
            }}
          >
            <Popup className="custom-popup">
              <div className="p-1 min-w-[150px]">
                <h3 className="font-bold text-slate-900 text-sm mb-1">{project.title}</h3>
                <p className="text-xs text-slate-500 mb-2">{project.location}</p>
                <button 
                  onClick={() => onSelectProject(project)}
                  className="text-secondary text-xs font-bold uppercase flex items-center gap-1 hover:underline"
                >
                  İncele <ArrowUpRight size={10} />
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
        
        <RecenterMap center={centerPosition} />
      </MapContainer>

      {/* CSS: Leaflet stillerini burada override ediyoruz */}
      <style jsx global>{`
        .leaflet-popup-content-wrapper {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 8px;
          backdrop-filter: blur(4px);
        }
        .leaflet-popup-tip {
          background: rgba(255, 255, 255, 0.95);
        }
        /* Harita kontrol butonlarını (zoom +/-) siyaha boya */
        .leaflet-control-zoom a {
          background-color: #1e293b !important;
          color: #fff !important;
          border-color: #334155 !important;
        }
      `}</style>
    </div>
  );
}