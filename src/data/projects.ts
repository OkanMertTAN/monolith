// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  category: string; // Kategori key'leri (Konut, Endüstriyel vb.) sabit kalmalı
  slug: string;
  location: string;
  coordinates: [number, number];
  year: string;
  image: string;
  description: string;
  details: {
    client: string;
    area: string;
    status: string;
    challenge: string;
    solution: string;
    features: string[];
  };
  gallery: {
    type: "image" | "video";
    src: string;
    thumb: string;
    title: string;
  }[];
}

// ÇOKLU DİL VERİ YAPISI
export const projectsData: { [key: string]: Project[] } = {
  
  // --- TÜRKÇE VERİLER ---
  tr: [
    {
      id: 1,
      title: "Sky Tower",
      category: "Konut",
      slug: "sky-tower",
      location: "İstanbul, Maslak",
      coordinates: [41.1105, 29.0240],
      year: "2024",
      image: "/foto/photo-1486406146926-c627a92ad1ab_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "İstanbul'un en prestijli finans hattı üzerinde yükselen Sky Tower, sadece bir konut projesi değil, şehrin silüetine bırakılmış modern bir imzadır. 45 katlı bu dikey yaşam merkezi, rüzgar tüneli testleriyle optimize edilmiş aerodinamik formu sayesinde hem statik dayanıklılığı maksimuma çıkarır hem de eşsiz bir estetik sunar.",
      details: {
        client: "Bosphorus GYO",
        area: "45.000 m²",
        status: "Tamamlandı",
        challenge: "İstanbul'un en yoğun bölgesinde, derin kazı gerektiren ve rüzgar yükünün kritik olduğu bir parselde inşaat.",
        solution: "Top-down inşaat tekniği ve aerodinamik cephe tasarımı.",
        features: ["LEED Gold Sertifikası", "Akıllı Ev Otomasyonu", "Deprem İzolatörü", "Panoramik Cam Cephe"]
      },
      gallery: [
        { type: "video", src: "/foto/ForBiggerBlazes.mp4", thumb: "/foto/photo-1486406146926-c627a92ad1ab_q_80_w_1200_auto_format_fit_crop.jpg", title: "Tanıtım Filmi" },
        { type: "image", src: "/foto/photo-1600607687939-ce8a6c25118c_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1600607687939-ce8a6c25118c_q_80_w_1200_auto_format_fit_crop.jpg", title: "Lounge Alanı" },
        { type: "image", src: "/foto/photo-1545324418-cc1a3fa10c00_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1545324418-cc1a3fa10c00_q_80_w_1200_auto_format_fit_crop.jpg", title: "Penthouse Manzara" },
      ]
    },
    {
      id: 2,
      title: "Atlas Lojistik Üssü",
      category: "Endüstriyel",
      slug: "atlas-lojistik",
      location: "Kocaeli, Gebze",
      coordinates: [40.8025, 29.4397],
      year: "2023",
      image: "/foto/photo-1586528116311-ad8dd3c8310d_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Endüstri 4.0 standartlarına uygun olarak tasarlanan Atlas Lojistik Üssü, tedarik zinciri yönetiminde hız ve verimliliği yeniden tanımlıyor. 50.000 metrekarelik devasa kapalı alana sahip bu tesis, insansız forkliftler ve otonom robotların (AGV) kusursuz çalışabileceği 'Süper Düz' (Super Flat) zemin teknolojisiyle inşa edilmiştir.",
      details: {
        client: "Atlas Global Log.",
        area: "50.000 m²",
        status: "Tamamlandı",
        challenge: "Zemin sıvılaşma riski olan bölgede ultra düz zemin elde etmek.",
        solution: "Jet grout kolonları ve lazer şap teknolojisi.",
        features: ["ASRS Otomasyonu", "Güneş Enerjisi", "Sıfır Atık", "Yüksek Mukavemetli Zemin"]
      },
      gallery: [
        { type: "video", src: "/foto/ElephantsDream.mp4", thumb: "/foto/photo-1586528116311-ad8dd3c8310d_q_80_w_1200_auto_format_fit_crop.jpg", title: "Tesis Turu" },
        { type: "image", src: "/foto/photo-1553413077-190dd305871c_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1553413077-190dd305871c_q_80_w_1200_auto_format_fit_crop.jpg", title: "Otomasyon Hattı" },
        { type: "image", src: "/foto/photo-1486406146926-c627a92ad1ab_w_200.jpg", thumb: "/foto/photo-1564013799919-ab600027ffc6_w_200.jpg", title: "Sevkiyat Bölümü" },
      ]
    },
    {
      id: 3,
      title: "Onyx Plaza",
      category: "Ticari",
      slug: "onyx-plaza",
      location: "Ankara, Çankaya",
      coordinates: [39.9080, 32.8550],
      year: "2023",
      image: "/foto/photo-1497366216548-37526070297c_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Sürdürülebilir yeşil bina sertifikalı A+ iş merkezi. İş dünyasının kalbinde, verimliliği artıran mimari.",
      details: {
        client: "Başkent Yatırım",
        area: "22.000 m²",
        status: "Tamamlandı",
        challenge: "Enerji verimliliği yüksek ikonik yapı tasarımı.",
        solution: "Çift cidarlı cephe ve yağmur suyu hasadı.",
        features: ["BREEAM Excellent", "Doğal Havalandırma", "Sky Garden"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1497366811353-6870744d04b2_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1497366811353-6870744d04b2_q_80_w_1200_auto_format_fit_crop.jpg", title: "Toplantı Odaları" },
        { type: "image", src: "/foto/photo-1497215728101-856f4ea42174_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1497215728101-856f4ea42174_q_80_w_1200_auto_format_fit_crop.jpg", title: "Ofis Katları" },
        { type: "image", src: "/foto/photo-1577412647305-991150c7d163_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1577412647305-991150c7d163_q_80_w_1200_auto_format_fit_crop.jpg", title: "Lobi Girişi" },
      ]
    },
    {
      id: 4,
      title: "Marina Bay Resort",
      category: "Turizm",
      slug: "marina-bay",
      location: "Muğla, Bodrum",
      coordinates: [37.0344, 27.4299],
      year: "2022",
      image: "/foto/photo-1582719508461-905c673771fd_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Ege'nin mavisiyle bütünleşen 7 yıldız konforunda otel projesi. Doğaya saygılı lüks mimari.",
      details: {
        client: "Aegean Hospitality",
        area: "35.000 m²",
        status: "Tamamlandı",
        challenge: "Doğal bitki örtüsünü koruyarak eğimli arazide inşaat.",
        solution: "Kademeli teras mimarisi ve yerel taş kullanımı.",
        features: ["Özel İskele", "Sonsuzluk Havuzu", "Ekolojik Mimari"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1571003123894-1f0594d2b5d9_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1571003123894-1f0594d2b5d9_q_80_w_1200_auto_format_fit_crop.jpg", title: "Sonsuzluk Havuzu" },
        { type: "image", src: "/foto/photo-1540541338287-41700207dee6_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1540541338287-41700207dee6_q_80_w_1200_auto_format_fit_crop.jpg", title: "Özel Plaj" },
        { type: "image", src: "/foto/photo-1566073771259-6a8506099945_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1566073771259-6a8506099945_q_80_w_1200_auto_format_fit_crop.jpg", title: "Gece Görünümü" },
      ]
    },
    {
      id: 5,
      title: "Green Valley Kampüsü",
      category: "Eğitim",
      slug: "green-valley",
      location: "İzmir, Urla",
      coordinates: [38.3229, 26.7630],
      year: "2024",
      image: "/foto/photo-1562774053-701939374585_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Doğa ile iç içe, sürdürülebilir modern üniversite kampüsü. Geleceğin eğitim yuvası.",
      details: {
        client: "Vakıf Üniversitesi",
        area: "80.000 m²",
        status: "Devam Ediyor",
        challenge: "Teknolojinin doğayla buluştuğu hibrit eğitim alanı.",
        solution: "Açık hava derslikleri ve biyofilik tasarım.",
        features: ["Akıllı Kampüs", "Biyofilik Tasarım", "Amfi Tiyatro"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1459478309853-2c33a60058e7_w_200.jpg", thumb: "/foto/photo-1540541338287-41700207dee6_w_200.jpg", title: "Kütüphane" },
        { type: "image", src: "/foto/photo-1503387762-592deb58ef4e_w_200.jpg", thumb: "/foto/photo-1577412647305-991150c7d163_w_200.jpg", title: "Laboratuvarlar" },
        { type: "image", src: "/foto/photo-1564981797816-1043664bf78d_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1564981797816-1043664bf78d_q_80_w_1200_auto_format_fit_crop.jpg", title: "Kampüs Meydanı" },
      ]
    },
    {
      id: 6,
      title: "City Hospital",
      category: "Sağlık",
      slug: "city-hospital",
      location: "Bursa, Nilüfer",
      coordinates: [40.2220, 28.8578],
      year: "2021",
      image: "/foto/photo-1519494026892-80bbd2d6fd0d_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Deprem izolatörlü, 1000 yataklı şehir hastanesi. Sağlıkta son teknoloji.",
      details: {
        client: "Sağlık Bakanlığı",
        area: "150.000 m²",
        status: "Tamamlandı",
        challenge: "Kesintisiz hizmet ve deprem güvenliği.",
        solution: "850 adet sismik izolatör.",
        features: ["Sismik İzolasyon", "Tri-jenerasyon", "Helipad"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1540541338287-41700207dee6_w_200.jpg", thumb: "/foto/photo-1497215728101-856f4ea42174_w_200.jpg", title: "Acil Servis" },
        { type: "image", src: "/foto/photo-1504813184591-01572f98c85f_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1504813184591-01572f98c85f_q_80_w_1200_auto_format_fit_crop.jpg", title: "Ameliyathane" },
        { type: "image", src: "/foto/photo-1538108149393-fbbd81895907_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1538108149393-fbbd81895907_q_80_w_1200_auto_format_fit_crop.jpg", title: "Hasta Odaları" },
      ]
    },
    {
      id: 7,
      title: "North Wind Enerji",
      category: "Endüstriyel",
      slug: "north-wind",
      location: "Çanakkale",
      coordinates: [40.1553, 26.4142],
      year: "2022",
      image: "/foto/photo-1466611653911-95081537e5b7_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Rüzgar türbini santral altyapısı. Temiz enerji için devasa mühendislik.",
      details: {
        client: "Nordic Energy",
        area: "200 Dönüm",
        status: "Tamamlandı",
        challenge: "Zorlu rüzgar koşullarında ağır mühendislik.",
        solution: "Tırmanır kalıp sistemleri ve kütle beton dökümü.",
        features: ["Yenilenebilir Enerji", "Ağır Mühendislik", "Yüksek Gerilim"]
      },
      gallery: [
        { type: "video", src: "/foto/BigBuckBunny.mp4", thumb: "/foto/photo-1509391366360-2e959784a276_w_200.jpg", title: "Saha Operasyonu" },
        { type: "image", src: "/foto/photo-1532601224476-15c79f2f7a51_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1532601224476-15c79f2f7a51_q_80_w_1200_auto_format_fit_crop.jpg", title: "Türbin Montajı" },
        { type: "image", src: "/foto/photo-1459478309853-2c33a60058e7_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1459478309853-2c33a60058e7_q_80_w_1200_auto_format_fit_crop.jpg", title: "Santral Genel" },
      ]
    },
    {
      id: 8,
      title: "Vadi Konakları",
      category: "Konut",
      slug: "vadi-konaklari",
      location: "İstanbul, Zekeriyaköy",
      coordinates: [41.2017, 29.0303],
      year: "2025",
      image: "/foto/photo-1486406146926-c627a92ad1ab_w_200.jpg",
      description: "Orman manzaralı müstakil villa projesi. Lüks ve doğanın uyumu.",
      details: {
        client: "Özel Yatırımcılar",
        area: "12.000 m²",
        status: "Planlama",
        challenge: "Gizlilik ve manzara optimizasyonu.",
        solution: "Kademeli yerleşim ve doğal malzeme kullanımı.",
        features: ["Özel Havuzlar", "Akıllı Güvenlik", "Lüks Peyzaj"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1600607687939-ce8a6c25118c_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1600607687939-ce8a6c25118c_q_80_w_1200_auto_format_fit_crop.jpg", title: "Örnek Villa" },
        { type: "image", src: "/foto/photo-1600566753086-00f18fb6b3ea_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1600566753086-00f18fb6b3ea_q_80_w_1200_auto_format_fit_crop.jpg", title: "Salon Detayı" },
        { type: "image", src: "/foto/photo-1564013799919-ab600027ffc6_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1564013799919-ab600027ffc6_q_80_w_1200_auto_format_fit_crop.jpg", title: "Peyzaj Alanı" },
      ]
    },
  ],

  // --- İNGİLİZCE VERİLER ---
  en: [
    {
      id: 1,
      title: "Sky Tower",
      category: "Konut", // Kategori ID'si aynı kalıyor, görünümü sozluk.ts değiştirecek
      slug: "sky-tower",
      location: "Istanbul, Maslak",
      coordinates: [41.1105, 29.0240],
      year: "2024",
      image: "/foto/photo-1486406146926-c627a92ad1ab_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Rising on Istanbul's most prestigious finance line, Sky Tower is not just a residential project but a modern signature left on the city skyline. This 45-story vertical living center maximizes static durability and offers unique aesthetics thanks to its aerodynamic form optimized by wind tunnel tests.",
      details: {
        client: "Bosphorus REIT",
        area: "45,000 m²",
        status: "Completed",
        challenge: "Construction in Istanbul's busiest area, on a plot requiring deep excavation and where wind load is critical.",
        solution: "Top-down construction technique and aerodynamic facade design.",
        features: ["LEED Gold Certificate", "Smart Home Automation", "Seismic Isolator", "Panoramic Glass Facade"]
      },
      gallery: [
        { type: "video", src: "/foto/ForBiggerBlazes.mp4", thumb: "/foto/photo-1486406146926-c627a92ad1ab_q_80_w_1200_auto_format_fit_crop.jpg", title: "Intro Movie" },
        { type: "image", src: "/foto/photo-1600607687939-ce8a6c25118c_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1600607687939-ce8a6c25118c_q_80_w_1200_auto_format_fit_crop.jpg", title: "Lounge Area" },
        { type: "image", src: "/foto/photo-1545324418-cc1a3fa10c00_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1545324418-cc1a3fa10c00_q_80_w_1200_auto_format_fit_crop.jpg", title: "Penthouse View" },
      ]
    },
    {
      id: 2,
      title: "Atlas Logistics Base",
      category: "Endüstriyel",
      slug: "atlas-logistics",
      location: "Kocaeli, Gebze",
      coordinates: [40.8025, 29.4397],
      year: "2023",
      image: "/foto/photo-1586528116311-ad8dd3c8310d_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Designed in accordance with Industry 4.0 standards, Atlas Logistics Base redefines speed and efficiency in supply chain management. This facility with a massive 50,000 sqm indoor area is built with 'Super Flat' floor technology where unmanned forklifts and autonomous robots (AGV) can work flawlessly.",
      details: {
        client: "Atlas Global Log.",
        area: "50,000 m²",
        status: "Completed",
        challenge: "Obtaining ultra-flat floors in a region with soil liquefaction risk.",
        solution: "Jet grout columns and laser screed technology.",
        features: ["ASRS Automation", "Solar Energy", "Zero Waste", "High Strength Floor"]
      },
      gallery: [
        { type: "video", src: "/foto/ElephantsDream.mp4", thumb: "/foto/photo-1586528116311-ad8dd3c8310d_q_80_w_1200_auto_format_fit_crop.jpg", title: "Facility Tour" },
        { type: "image", src: "/foto/photo-1553413077-190dd305871c_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1553413077-190dd305871c_q_80_w_1200_auto_format_fit_crop.jpg", title: "Automation Line" },
        { type: "image", src: "/foto/photo-1497366811353-6870744d04b2_w_200.jpg", thumb: "/foto/photo-1586528116311-ad8dd3c8310d_w_200.jpg", title: "Shipping Section" },
      ]
    },
    {
      id: 3,
      title: "Onyx Plaza",
      category: "Ticari",
      slug: "onyx-plaza",
      location: "Ankara, Cankaya",
      coordinates: [39.9080, 32.8550],
      year: "2023",
      image: "/foto/photo-1497366216548-37526070297c_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Sustainable green building certified A+ business center. Architecture that increases efficiency in the heart of the business world.",
      details: {
        client: "Baskent Investment",
        area: "22,000 m²",
        status: "Completed",
        challenge: "Iconic building design with high energy efficiency.",
        solution: "Double skin facade and rainwater harvesting.",
        features: ["BREEAM Excellent", "Natural Ventilation", "Sky Garden"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1497366811353-6870744d04b2_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1497366811353-6870744d04b2_q_80_w_1200_auto_format_fit_crop.jpg", title: "Meeting Rooms" },
        { type: "image", src: "/foto/photo-1497215728101-856f4ea42174_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1497215728101-856f4ea42174_q_80_w_1200_auto_format_fit_crop.jpg", title: "Office Floors" },
        { type: "image", src: "/foto/photo-1577412647305-991150c7d163_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1577412647305-991150c7d163_q_80_w_1200_auto_format_fit_crop.jpg", title: "Lobby Entrance" },
      ]
    },
    {
      id: 4,
      title: "Marina Bay Resort",
      category: "Turizm",
      slug: "marina-bay",
      location: "Mugla, Bodrum",
      coordinates: [37.0344, 27.4299],
      year: "2022",
      image: "/foto/photo-1582719508461-905c673771fd_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "7-star comfort hotel project integrating with the blue of the Aegean. Nature-respecting luxury architecture.",
      details: {
        client: "Aegean Hospitality",
        area: "35,000 m²",
        status: "Completed",
        challenge: "Construction on sloping terrain while preserving natural vegetation.",
        solution: "Terraced architecture and use of local stone.",
        features: ["Private Pier", "Infinity Pool", "Ecological Architecture"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1571003123894-1f0594d2b5d9_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1571003123894-1f0594d2b5d9_q_80_w_1200_auto_format_fit_crop.jpg", title: "Infinity Pool" },
        { type: "image", src: "/foto/photo-1540541338287-41700207dee6_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1540541338287-41700207dee6_q_80_w_1200_auto_format_fit_crop.jpg", title: "Private Beach" },
        { type: "image", src: "/foto/photo-1566073771259-6a8506099945_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1566073771259-6a8506099945_q_80_w_1200_auto_format_fit_crop.jpg", title: "Night View" },
      ]
    },
    {
      id: 5,
      title: "Green Valley Campus",
      category: "Eğitim",
      slug: "green-valley",
      location: "Izmir, Urla",
      coordinates: [38.3229, 26.7630],
      year: "2024",
      image: "/foto/photo-1562774053-701939374585_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Sustainable modern university campus intertwined with nature. The educational home of the future.",
      details: {
        client: "Vakif University",
        area: "80,000 m²",
        status: "Ongoing",
        challenge: "Hybrid education space where technology meets nature.",
        solution: "Open-air classrooms and biophilic design.",
        features: ["Smart Campus", "Biophilic Design", "Amphitheater"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1538108149393-fbbd81895907_w_200.jpg", thumb: "/foto/photo-1564981797816-1043664bf78d_w_200.jpg", title: "Library" },
        { type: "image", src: "/foto/photo-1566073771259-6a8506099945_w_200.jpg", thumb: "/foto/photo-1600566753086-00f18fb6b3ea_w_200.jpg", title: "Laboratories" },
        { type: "image", src: "/foto/photo-1564981797816-1043664bf78d_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1564981797816-1043664bf78d_q_80_w_1200_auto_format_fit_crop.jpg", title: "Campus Square" },
      ]
    },
    {
      id: 6,
      title: "City Hospital",
      category: "Sağlık",
      slug: "city-hospital",
      location: "Bursa, Nilufer",
      coordinates: [40.2220, 28.8578],
      year: "2021",
      image: "/foto/photo-1519494026892-80bbd2d6fd0d_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "1000-bed city hospital with seismic isolators. Latest technology in healthcare.",
      details: {
        client: "Ministry of Health",
        area: "150,000 m²",
        status: "Completed",
        challenge: "Uninterrupted service and earthquake safety.",
        solution: "850 seismic isolators.",
        features: ["Seismic Isolation", "Tri-generation", "Helipad"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1486406146926-c627a92ad1ab_w_200.jpg", thumb: "/foto/photo-1577412647305-991150c7d163_w_200.jpg", title: "Emergency Service" },
        { type: "image", src: "/foto/photo-1504813184591-01572f98c85f_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1504813184591-01572f98c85f_q_80_w_1200_auto_format_fit_crop.jpg", title: "Operating Room" },
        { type: "image", src: "/foto/photo-1538108149393-fbbd81895907_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1538108149393-fbbd81895907_q_80_w_1200_auto_format_fit_crop.jpg", title: "Patient Rooms" },
      ]
    },
    {
      id: 7,
      title: "North Wind Energy",
      category: "Endüstriyel",
      slug: "north-wind",
      location: "Canakkale",
      coordinates: [40.1553, 26.4142],
      year: "2022",
      image: "/foto/photo-1466611653911-95081537e5b7_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Wind turbine power plant infrastructure. Massive engineering for clean energy.",
      details: {
        client: "Nordic Energy",
        area: "200 Acres",
        status: "Completed",
        challenge: "Heavy engineering in harsh wind conditions.",
        solution: "Climbing formwork systems and mass concrete pouring.",
        features: ["Renewable Energy", "Heavy Engineering", "High Voltage"]
      },
      gallery: [
        { type: "video", src: "/foto/BigBuckBunny.mp4", thumb: "/foto/photo-1509391366360-2e959784a276_w_200.jpg", title: "Field Operation" },
        { type: "image", src: "/foto/photo-1532601224476-15c79f2f7a51_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1532601224476-15c79f2f7a51_q_80_w_1200_auto_format_fit_crop.jpg", title: "Turbine Assembly" },
        { type: "image", src: "/foto/photo-1459478309853-2c33a60058e7_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1459478309853-2c33a60058e7_q_80_w_1200_auto_format_fit_crop.jpg", title: "Power Plant General" },
      ]
    },
    {
      id: 8,
      title: "Vadi Mansions",
      category: "Konut",
      slug: "vadi-mansions",
      location: "Istanbul, Zekeriyakoy",
      coordinates: [41.2017, 29.0303],
      year: "2025",
      image: "/foto/photo-1540541338287-41700207dee6_w_200.jpg",
      description: "Detached villa project with forest view. Harmony of luxury and nature.",
      details: {
        client: "Private Investors",
        area: "12,000 m²",
        status: "Planning",
        challenge: "Privacy and view optimization.",
        solution: "Gradual settlement and use of natural materials.",
        features: ["Private Pools", "Smart Security", "Luxury Landscape"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1600607687939-ce8a6c25118c_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1600607687939-ce8a6c25118c_q_80_w_1200_auto_format_fit_crop.jpg", title: "Sample Villa" },
        { type: "image", src: "/foto/photo-1600566753086-00f18fb6b3ea_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1600566753086-00f18fb6b3ea_q_80_w_1200_auto_format_fit_crop.jpg", title: "Living Room Detail" },
        { type: "image", src: "/foto/photo-1564013799919-ab600027ffc6_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1564013799919-ab600027ffc6_q_80_w_1200_auto_format_fit_crop.jpg", title: "Landscape Area" },
      ]
    },
  ],
  ar: [
    {
      id: 1,
      title: "سكاي تاور (Sky Tower)",
      category: "Konut",
      slug: "sky-tower",
      location: "إسطنبول، مسلك",
      coordinates: [41.1105, 29.0240],
      year: "2024",
      image: "/foto/photo-1486406146926-c627a92ad1ab_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "برج سكاي، الذي يرتفع على خط التمويل الأكثر شهرة في إسطنبول، ليس مجرد مشروع سكني بل توقيع حديث يُترك في أفق المدينة. هذا المركز المعيشي العمودي المكون من 45 طابقًا يزيد من المتانة الإنشائية إلى الحد الأقصى بفضل شكله الديناميكي الهوائي المحسن باختبارات نفق الرياح، ويقدم جمالية فريدة.",
      details: {
        client: "البوسفور للاستثمار العقاري",
        area: "45.000 م²",
        status: "مكتمل",
        challenge: "البناء في أكثر مناطق إسطنبول ازدحامًا، في قطعة أرض تتطلب حفرًا عميقًا وحيث يكون حمل الرياح حرجًا.",
        solution: "تقنية البناء من أعلى إلى أسفل وتصميم واجهة ديناميكية هوائية.",
        features: ["شهادة LEED الذهبية", "أتمتة المنزل الذكي", "عازل زلزالي", "واجهة زجاجية بانورامية"]
      },
      gallery: [
        { type: "video", src: "/foto/ForBiggerBlazes.mp4", thumb: "/foto/photo-1486406146926-c627a92ad1ab_q_80_w_1200_auto_format_fit_crop.jpg", title: "فيلم تعريفي" },
        { type: "image", src: "/foto/photo-1600607687939-ce8a6c25118c_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1600607687939-ce8a6c25118c_q_80_w_1200_auto_format_fit_crop.jpg", title: "منطقة الاستراحة" },
        { type: "image", src: "/foto/photo-1545324418-cc1a3fa10c00_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1545324418-cc1a3fa10c00_q_80_w_1200_auto_format_fit_crop.jpg", title: "إطلالة البنتهاوس" },
      ]
    },
    {
      id: 2,
      title: "قاعدة أطلس اللوجستية",
      category: "Endüstriyel",
      slug: "atlas-lojistik",
      location: "كوجالي، جبزي",
      coordinates: [40.8025, 29.4397],
      year: "2023",
      image: "/foto/photo-1586528116311-ad8dd3c8310d_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "صُممت قاعدة أطلس اللوجستية وفقًا لمعايير الصناعة 4.0، وهي تعيد تعريف السرعة والكفاءة في إدارة سلسلة التوريد. تم بناء هذه المنشأة بمساحة مغلقة ضخمة تبلغ 50,000 متر مربع بتقنية الأرضيات 'فائقة الاستواء' (Super Flat) حيث يمكن للرافعات الشوكية غير المأهولة والروبوتات المستقلة (AGV) العمل بسلاسة.",
      details: {
        client: "أطلس جلوبال لوجتستيك",
        area: "50.000 م²",
        status: "مكتمل",
        challenge: "الحصول على أرضيات فائقة الاستواء في منطقة معرضة لخطر تميع التربة.",
        solution: "أعمدة الحقن النفاث (Jet Grout) وتقنية ذراع التسوية بالليزر.",
        features: ["أتمتة ASRS", "الطاقة الشمسية", "صفر نفايات", "أرضية عالية المقاومة"]
      },
      gallery: [
        { type: "video", src: "/foto/ElephantsDream.mp4", thumb: "/foto/photo-1586528116311-ad8dd3c8310d_q_80_w_1200_auto_format_fit_crop.jpg", title: "جولة في المنشأة" },
        { type: "image", src: "/foto/photo-1553413077-190dd305871c_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1553413077-190dd305871c_q_80_w_1200_auto_format_fit_crop.jpg", title: "خط الأتمتة" },
        { type: "image", src: "/foto/photo-1553413077-190dd305871c_w_200.jpg", thumb: "/foto/photo-1532601224476-15c79f2f7a51_w_200.jpg", title: "قسم الشحن" },
      ]
    },
    {
      id: 3,
      title: "أونيكس بلازا",
      category: "Ticari",
      slug: "onyx-plaza",
      location: "أنقرة، تشانكايا",
      coordinates: [39.9080, 32.8550],
      year: "2023",
      image: "/foto/photo-1497366216548-37526070297c_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "مركز أعمال فئة A+ حاصل على شهادة المباني الخضراء المستدامة. عمارة تزيد من الكفاءة في قلب عالم الأعمال.",
      details: {
        client: "باشكنت للاستثمار",
        area: "22.000 م²",
        status: "مكتمل",
        challenge: "تصميم مبنى أيقوني ذو كفاءة عالية في استخدام الطاقة.",
        solution: "واجهة مزدوجة الجلد وحصاد مياه الأمطار.",
        features: ["BREEAM ممتاز", "تهوية طبيعية", "حديقة معلقة"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1497366811353-6870744d04b2_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1497366811353-6870744d04b2_q_80_w_1200_auto_format_fit_crop.jpg", title: "غرف الاجتماعات" },
        { type: "image", src: "/foto/photo-1497215728101-856f4ea42174_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1497215728101-856f4ea42174_q_80_w_1200_auto_format_fit_crop.jpg", title: "طوابق المكاتب" },
        { type: "image", src: "/foto/photo-1577412647305-991150c7d163_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1577412647305-991150c7d163_q_80_w_1200_auto_format_fit_crop.jpg", title: "مدخل اللوبي" },
      ]
    },
    {
      id: 4,
      title: "منتجع مارينا باي",
      category: "Turizm",
      slug: "marina-bay",
      location: "موغلا، بودروم",
      coordinates: [37.0344, 27.4299],
      year: "2022",
      image: "/foto/photo-1582719508461-905c673771fd_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "مشروع فندقي بـ 7 نجوم يتكامل مع زرقة بحر إيجة. عمارة فاخرة تحترم الطبيعة.",
      details: {
        client: "إيجة للضيافة",
        area: "35.000 م²",
        status: "مكتمل",
        challenge: "البناء على أرض مائلة مع الحفاظ على الغطاء النباتي الطبيعي.",
        solution: "هندسة المدرجات واستخدام الحجر المحلي.",
        features: ["رصيف خاص", "مسبح لا متناهي", "عمارة بيئية"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1571003123894-1f0594d2b5d9_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1571003123894-1f0594d2b5d9_q_80_w_1200_auto_format_fit_crop.jpg", title: "مسبح لا متناهي" },
        { type: "image", src: "/foto/photo-1540541338287-41700207dee6_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1540541338287-41700207dee6_q_80_w_1200_auto_format_fit_crop.jpg", title: "شاطئ خاص" },
        { type: "image", src: "/foto/photo-1566073771259-6a8506099945_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1566073771259-6a8506099945_q_80_w_1200_auto_format_fit_crop.jpg", title: "منظر ليلي" },
      ]
    },
    {
      id: 5,
      title: "حرم الوادي الأخضر الجامعي",
      category: "Eğitim",
      slug: "green-valley",
      location: "إزمير، أورلا",
      coordinates: [38.3229, 26.7630],
      year: "2024",
      image: "/foto/photo-1562774053-701939374585_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "حرم جامعي حديث ومستدام يتناغم مع الطبيعة. موطن التعليم المستقبلي.",
      details: {
        client: "جامعة الوقف",
        area: "80.000 م²",
        status: "مستمر",
        challenge: "مساحة تعليمية هجينة تلتقي فيها التكنولوجيا بالطبيعة.",
        solution: "فصول دراسية في الهواء الطلق وتصميم بيوفيلي.",
        features: ["حرم ذكي", "تصميم بيوفيلي", "مدرج"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1497215728101-856f4ea42174_w_200.jpg", thumb: "/foto/photo-1503387762-592deb58ef4e_w_200.jpg", title: "المكتبة" },
        { type: "image", src: "/foto/photo-1532601224476-15c79f2f7a51_w_200.jpg", thumb: "/foto/photo-1545324418-cc1a3fa10c00_w_200.jpg", title: "المختبرات" },
        { type: "image", src: "/foto/photo-1564981797816-1043664bf78d_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1564981797816-1043664bf78d_q_80_w_1200_auto_format_fit_crop.jpg", title: "ساحة الحرم الجامعي" },
      ]
    },
    {
      id: 6,
      title: "مستشفى المدينة",
      category: "Sağlık",
      slug: "city-hospital",
      location: "بورصة، نيلوفر",
      coordinates: [40.2220, 28.8578],
      year: "2021",
      image: "/foto/photo-1519494026892-80bbd2d6fd0d_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "مستشفى المدينة بسعة 1000 سرير مع عوازل زلزالية. أحدث التكنولوجيا في مجال الصحة.",
      details: {
        client: "وزارة الصحة",
        area: "150.000 م²",
        status: "مكتمل",
        challenge: "خدمة متواصلة وسلامة زلزالية.",
        solution: "850 عازل زلزالي.",
        features: ["عزل زلزالي", "توليد ثلاثي", "مهبط طائرات"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1571003123894-1f0594d2b5d9_w_200.jpg", thumb: "/foto/photo-1600566753086-00f18fb6b3ea_w_200.jpg", title: "خدمة الطوارئ" },
        { type: "image", src: "/foto/photo-1504813184591-01572f98c85f_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1504813184591-01572f98c85f_q_80_w_1200_auto_format_fit_crop.jpg", title: "غرفة العمليات" },
        { type: "image", src: "/foto/photo-1538108149393-fbbd81895907_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1538108149393-fbbd81895907_q_80_w_1200_auto_format_fit_crop.jpg", title: "غرف المرضى" },
      ]
    },
    {
      id: 7,
      title: "نورث ويند للطاقة",
      category: "Endüstriyel",
      slug: "north-wind",
      location: "تشاناكالي",
      coordinates: [40.1553, 26.4142],
      year: "2022",
      image: "/foto/photo-1466611653911-95081537e5b7_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "بنية تحتية لمحطة طاقة الرياح. هندسة ضخمة للطاقة النظيفة.",
      details: {
        client: "نورديك للطاقة",
        area: "200 فدان",
        status: "مكتمل",
        challenge: "هندسة ثقيلة في ظروف رياح قاسية.",
        solution: "أنظمة صب متسلقة وصب خرسانة ضخمة.",
        features: ["طاقة متجددة", "هندسة ثقيلة", "جهد عالي"]
      },
      gallery: [
        { type: "video", src: "/foto/BigBuckBunny.mp4", thumb: "/foto/photo-1509391366360-2e959784a276_w_200.jpg", title: "عملية ميدانية" },
        { type: "image", src: "/foto/photo-1532601224476-15c79f2f7a51_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1532601224476-15c79f2f7a51_q_80_w_1200_auto_format_fit_crop.jpg", title: "تجميع التوربينات" },
        { type: "image", src: "/foto/photo-1459478309853-2c33a60058e7_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1459478309853-2c33a60058e7_q_80_w_1200_auto_format_fit_crop.jpg", title: "نظرة عامة على المحطة" },
      ]
    },
    {
      id: 8,
      title: "قصور الوادي",
      category: "Konut",
      slug: "vadi-konaklari",
      location: "إسطنبول، زكريا كوي",
      coordinates: [41.2017, 29.0303],
      year: "2025",
      image: "/foto/photo-1545324418-cc1a3fa10c00_w_200.jpg",
      description: "مشروع فلل مستقلة بإطلالة على الغابة. تناغم الفخامة والطبيعة.",
      details: {
        client: "مستثمرون من القطاع الخاص",
        area: "12.000 م²",
        status: "تخطيط",
        challenge: "تحسين الخصوصية والمناظر.",
        solution: "توطين تدريجي واستخدام مواد طبيعية.",
        features: ["مسابح خاصة", "أمن ذكي", "مناظر طبيعية فاخرة"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1600607687939-ce8a6c25118c_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1600607687939-ce8a6c25118c_q_80_w_1200_auto_format_fit_crop.jpg", title: "فيلا نموذجية" },
        { type: "image", src: "/foto/photo-1600566753086-00f18fb6b3ea_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1600566753086-00f18fb6b3ea_q_80_w_1200_auto_format_fit_crop.jpg", title: "تفاصيل الصالة" },
        { type: "image", src: "/foto/photo-1564013799919-ab600027ffc6_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1564013799919-ab600027ffc6_q_80_w_1200_auto_format_fit_crop.jpg", title: "منطقة المناظر الطبيعية" },
      ]
    },
  ],
  ru: [
    {
      id: 1,
      title: "Sky Tower",
      category: "Konut",
      slug: "sky-tower",
      location: "Стамбул, Маслак",
      coordinates: [41.1105, 29.0240],
      year: "2024",
      image: "/foto/photo-1486406146926-c627a92ad1ab_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Возвышающаяся на самой престижной финансовой линии Стамбула, Sky Tower — это не просто жилой проект, а современный автограф на силуэте города. Этот 45-этажный вертикальный жилой центр максимизирует статическую прочность и предлагает уникальную эстетику благодаря своей аэродинамической форме, оптимизированной испытаниями в аэродинамической трубе.",
      details: {
        client: "Bosphorus GYO",
        area: "45.000 м²",
        status: "Завершен",
        challenge: "Строительство в самом оживленном районе Стамбула, на участке, требующем глубокого котлована, и где ветровая нагрузка является критической.",
        solution: "Метод строительства «сверху-вниз» (Top-down) и аэродинамический дизайн фасада.",
        features: ["Сертификат LEED Gold", "Умный дом", "Сейсмический изолятор", "Панорамный стеклянный фасад"]
      },
      gallery: [
        { type: "video", src: "/foto/ForBiggerBlazes.mp4", thumb: "/foto/photo-1486406146926-c627a92ad1ab_q_80_w_1200_auto_format_fit_crop.jpg", title: "Промо-фильм" },
        { type: "image", src: "/foto/photo-1600607687939-ce8a6c25118c_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1600607687939-ce8a6c25118c_q_80_w_1200_auto_format_fit_crop.jpg", title: "Лаунж-зона" },
        { type: "image", src: "/foto/photo-1545324418-cc1a3fa10c00_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1545324418-cc1a3fa10c00_q_80_w_1200_auto_format_fit_crop.jpg", title: "Вид из пентхауса" },
      ]
    },
    {
      id: 2,
      title: "Логистическая база Atlas",
      category: "Endüstriyel",
      slug: "atlas-lojistik",
      location: "Коджаэли, Гебзе",
      coordinates: [40.8025, 29.4397],
      year: "2023",
      image: "/foto/photo-1586528116311-ad8dd3c8310d_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Спроектированная в соответствии со стандартами Индустрии 4.0, логистическая база Atlas переопределяет скорость и эффективность в управлении цепочками поставок. Этот объект с огромной крытой площадью 50 000 квадратных метров построен с использованием технологии «Сверхровный пол» (Super Flat), где могут безупречно работать беспилотные вилочные погрузчики и автономные роботы (AGV).",
      details: {
        client: "Atlas Global Log.",
        area: "50.000 м²",
        status: "Завершен",
        challenge: "Получение сверхровных полов в регионе с риском разжижения грунта.",
        solution: "Колонны Jet Grout и технология лазерной стяжки.",
        features: ["Автоматизация ASRS", "Солнечная энергия", "Ноль отходов", "Высокопрочный пол"]
      },
      gallery: [
        { type: "video", src: "/foto/ElephantsDream.mp4", thumb: "/foto/photo-1586528116311-ad8dd3c8310d_q_80_w_1200_auto_format_fit_crop.jpg", title: "Тур по объекту" },
        { type: "image", src: "/foto/photo-1553413077-190dd305871c_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1553413077-190dd305871c_q_80_w_1200_auto_format_fit_crop.jpg", title: "Линия автоматизации" },
        { type: "image", src: "/foto/photo-1577412647305-991150c7d163_w_200.jpg", thumb: "/foto/photo-1497366811353-6870744d04b2_w_200.jpg", title: "Отдел отгрузки" },
      ]
    },
    {
      id: 3,
      title: "Onyx Plaza",
      category: "Ticari",
      slug: "onyx-plaza",
      location: "Анкара, Чанкая",
      coordinates: [39.9080, 32.8550],
      year: "2023",
      image: "/foto/photo-1497366216548-37526070297c_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Бизнес-центр класса А+, сертифицированный как устойчивое зеленое здание. Архитектура, повышающая эффективность, в самом сердце делового мира.",
      details: {
        client: "Başkent Yatırım",
        area: "22.000 м²",
        status: "Завершен",
        challenge: "Проектирование знакового здания с высокой энергоэффективностью.",
        solution: "Двойной фасад и сбор дождевой воды.",
        features: ["BREEAM Excellent", "Естественная вентиляция", "Небесный сад"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1497366811353-6870744d04b2_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1497366811353-6870744d04b2_q_80_w_1200_auto_format_fit_crop.jpg", title: "Переговорные комнаты" },
        { type: "image", src: "/foto/photo-1497215728101-856f4ea42174_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1497215728101-856f4ea42174_q_80_w_1200_auto_format_fit_crop.jpg", title: "Офисные этажи" },
        { type: "image", src: "/foto/photo-1577412647305-991150c7d163_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1577412647305-991150c7d163_q_80_w_1200_auto_format_fit_crop.jpg", title: "Вход в лобби" },
      ]
    },
    {
      id: 4,
      title: "Курорт Marina Bay",
      category: "Turizm",
      slug: "marina-bay",
      location: "Мугла, Бодрум",
      coordinates: [37.0344, 27.4299],
      year: "2022",
      image: "/foto/photo-1582719508461-905c673771fd_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Отельный проект с комфортом 7 звезд, сливающийся с синевой Эгейского моря. Роскошная архитектура, уважающая природу.",
      details: {
        client: "Aegean Hospitality",
        area: "35.000 м²",
        status: "Завершен",
        challenge: "Строительство на наклонном рельефе с сохранением естественной растительности.",
        solution: "Террасная архитектура и использование местного камня.",
        features: ["Частный пирс", "Инфинити-бассейн", "Экологическая архитектура"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1571003123894-1f0594d2b5d9_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1571003123894-1f0594d2b5d9_q_80_w_1200_auto_format_fit_crop.jpg", title: "Инфинити-бассейн" },
        { type: "image", src: "/foto/photo-1540541338287-41700207dee6_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1540541338287-41700207dee6_q_80_w_1200_auto_format_fit_crop.jpg", title: "Частный пляж" },
        { type: "image", src: "/foto/photo-1566073771259-6a8506099945_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1566073771259-6a8506099945_q_80_w_1200_auto_format_fit_crop.jpg", title: "Ночной вид" },
      ]
    },
    {
      id: 5,
      title: "Кампус Green Valley",
      category: "Eğitim",
      slug: "green-valley",
      location: "Измир, Урла",
      coordinates: [38.3229, 26.7630],
      year: "2024",
      image: "/foto/photo-1562774053-701939374585_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Устойчивый современный университетский кампус, переплетенный с природой. Образовательный дом будущего.",
      details: {
        client: "Vakıf Üniversitesi",
        area: "80.000 м²",
        status: "Продолжается",
        challenge: "Гибридное образовательное пространство, где технологии встречаются с природой.",
        solution: "Учебные классы на открытом воздухе и биофильный дизайн.",
        features: ["Умный кампус", "Биофильный дизайн", "Амфитеатр"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1545324418-cc1a3fa10c00_w_200.jpg", thumb: "/foto/photo-1504813184591-01572f98c85f_w_200.jpg", title: "Библиотека" },
        { type: "image", src: "/foto/photo-1503387762-592deb58ef4e_w_200.jpg", thumb: "/foto/photo-1503387762-592deb58ef4e_w_200.jpg", title: "Лаборатории" },
        { type: "image", src: "/foto/photo-1564981797816-1043664bf78d_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1564981797816-1043664bf78d_q_80_w_1200_auto_format_fit_crop.jpg", title: "Площадь кампуса" },
      ]
    },
    {
      id: 6,
      title: "City Hospital",
      category: "Sağlık",
      slug: "city-hospital",
      location: "Бурса, Нилюфер",
      coordinates: [40.2220, 28.8578],
      year: "2021",
      image: "/foto/photo-1519494026892-80bbd2d6fd0d_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Городская больница на 1000 коек с сейсмическими изоляторами. Последнее слово техники в здравоохранении.",
      details: {
        client: "Министерство здравоохранения",
        area: "150.000 м²",
        status: "Завершен",
        challenge: "Бесперебойное обслуживание и сейсмическая безопасность.",
        solution: "850 сейсмических изоляторов.",
        features: ["Сейсмическая изоляция", "Тригенерация", "Вертолетная площадка"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1503387762-592deb58ef4e_w_200.jpg", thumb: "/foto/photo-1577412647305-991150c7d163_w_200.jpg", title: "Служба экстренной помощи" },
        { type: "image", src: "/foto/photo-1504813184591-01572f98c85f_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1504813184591-01572f98c85f_q_80_w_1200_auto_format_fit_crop.jpg", title: "Операционная" },
        { type: "image", src: "/foto/photo-1538108149393-fbbd81895907_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1538108149393-fbbd81895907_q_80_w_1200_auto_format_fit_crop.jpg", title: "Палаты пациентов" },
      ]
    },
    {
      id: 7,
      title: "Энергия North Wind",
      category: "Endüstriyel",
      slug: "north-wind",
      location: "Чанаккале",
      coordinates: [40.1553, 26.4142],
      year: "2022",
      image: "/foto/photo-1466611653911-95081537e5b7_q_80_w_1200_auto_format_fit_crop.jpg",
      description: "Инфраструктура электростанции ветряных турбин. Масштабная инженерия для чистой энергии.",
      details: {
        client: "Nordic Energy",
        area: "200 Акров",
        status: "Завершен",
        challenge: "Тяжелая инженерия в суровых ветровых условиях.",
        solution: "Системы подъемной опалубки и заливка массивного бетона.",
        features: ["Возобновляемая энергия", "Тяжелая инженерия", "Высокое напряжение"]
      },
      gallery: [
        { type: "video", src: "/foto/BigBuckBunny.mp4", thumb: "/foto/photo-1509391366360-2e959784a276_w_200.jpg", title: "Полевая операция" },
        { type: "image", src: "/foto/photo-1532601224476-15c79f2f7a51_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1532601224476-15c79f2f7a51_q_80_w_1200_auto_format_fit_crop.jpg", title: "Сборка турбины" },
        { type: "image", src: "/foto/photo-1459478309853-2c33a60058e7_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1459478309853-2c33a60058e7_q_80_w_1200_auto_format_fit_crop.jpg", title: "Общий вид станции" },
      ]
    },
    {
      id: 8,
      title: "Особняки Vadi",
      category: "Konut",
      slug: "vadi-konaklari",
      location: "Стамбул, Зекериякёй",
      coordinates: [41.2017, 29.0303],
      year: "2025",
      image: "/foto/photo-1459478309853-2c33a60058e7_w_200.jpg",
      description: "Проект отдельных вилл с видом на лес. Гармония роскоши и природы.",
      details: {
        client: "Частные инвесторы",
        area: "12.000 м²",
        status: "Планирование",
        challenge: "Оптимизация конфиденциальности и вида.",
        solution: "Ступенчатое размещение и использование натуральных материалов.",
        features: ["Частные бассейны", "Умная безопасность", "Роскошный ландшафт"]
      },
      gallery: [
        { type: "image", src: "/foto/photo-1600607687939-ce8a6c25118c_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1600607687939-ce8a6c25118c_q_80_w_1200_auto_format_fit_crop.jpg", title: "Образец виллы" },
        { type: "image", src: "/foto/photo-1600566753086-00f18fb6b3ea_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1600566753086-00f18fb6b3ea_q_80_w_1200_auto_format_fit_crop.jpg", title: "Детали гостиной" },
        { type: "image", src: "/foto/photo-1564013799919-ab600027ffc6_q_80_w_1200_auto_format_fit_crop.jpg", thumb: "/foto/photo-1564013799919-ab600027ffc6_q_80_w_1200_auto_format_fit_crop.jpg", title: "Ландшафтная зона" },
      ]
    },
  ]
};