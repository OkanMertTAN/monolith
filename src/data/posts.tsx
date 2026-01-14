import React from "react";

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  role: string;
  category: string;
  image: string;
  tags: string[];
  content: React.ReactNode;
};

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Sismik İzolatör Teknolojileri ve Yapısal Dayanıklılık",
    excerpt: "Modern yüksek yapılarda kullanılan sürtünmeli sarkaç tipi izolatörlerin, deprem enerjisini %80 oranında sönümleme kapasitesi üzerine teknik bir inceleme.",
    date: "12 OCAK 2026",
    readTime: "6 dk okuma",
    author: "Zeynep Kaya",
    role: "Baş Mühendis",
    category: "Sismik Mühendislik",
    image: "/foto/photo-1541888946425-d81bb19240f5_q_80_w_1000_auto_format_fit_crop.jpg",
    tags: ["Deprem", "Betonarme", "Güvenlik"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed">
        <p className="text-lg font-medium text-slate-900">
          Geleneksel yapı tasarımında, binanın deprem enerjisine dayanması ve bu enerjiyi kiriş-kolon birleşim noktalarında "kontrollü hasar" ile tüketmesi beklenir. Ancak sismik izolasyon teknolojisi, bu paradigmayı kökten değiştirmektedir.
        </p>
        
        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Sürtünmeli Sarkaç (Friction Pendulum) Prensibi</h3>
        <p>
          Monolith projelerinde kullandığımız 3. Nesil Sismik İzolatörler, binanın periyodunu uzatarak zemin ivmesini yapıya minimum düzeyde iletir. Bu sistem temel olarak şunları sağlar:
        </p>
        <ul className="list-disc pl-6 space-y-2 marker:text-amber-500">
          <li><strong>Periyot Uzaması:</strong> Yapının doğal titreşim periyodunu 2.5 - 3.0 saniye aralığına çekerek rezonans riskini ortadan kaldırır.</li>
          <li><strong>Enerji Sönümleme:</strong> Deprem enerjisinin %80'inden fazlası izolatör seviyesinde ısı enerjisine dönüştürülerek sönümlenir.</li>
          <li><strong>Merkezleme Özelliği:</strong> Deprem sonrası yapı, içbükey yüzeyin geometrisi sayesinde kendi ağırlığıyla orijinal konumuna geri döner.</li>
        </ul>

        <div className="bg-slate-100 p-6 rounded-sm border-l-4 border-amber-500 my-8">
          <h4 className="font-bold text-slate-900 mb-2">Teknik Not:</h4>
          <p className="text-sm italic">
            C35 beton sınıfı ve B420C sismik çeliği ile kombine edilen bu sistemler, Richter ölçeğine göre 7.5 ve üzeri depremlerde dahi yapının "Hemen Kullanım" performans seviyesinde kalmasını garanti eder.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Uygulama Sahasından Veriler</h3>
        <p>
          Maslak Sky Tower projemizde, temel seviyesine yerleştirilen 48 adet izolatör ile yapılan simülasyonlarda, katlar arası göreli öteleme oranının (Drift Ratio) %0.5'in altında kaldığı gözlemlenmiştir. Bu, sadece binanın yıkılmamasını değil, içindeki hassas ekipmanların ve asma tavan gibi mimari elemanların da hasar görmemesini sağlar.
        </p>
      </div>
    )
  },
  {
    id: 2,
    title: "BIM (Yapı Bilgi Modellemesi) ile Maliyet Optimizasyonu",
    excerpt: "İnşaat öncesi dijital ikiz oluşturmanın, şantiye hatalarını %40 azaltması ve hakediş süreçlerine olan doğrudan etkisi.",
    date: "08 OCAK 2026",
    readTime: "8 dk okuma",
    author: "Ahmet Yılmaz",
    role: "Kurucu Mimar",
    category: "Dijital İnşaat",
    image: "/foto/photo-1503387762-592deb58ef4e_q_80_w_1000_auto_format_fit_crop.jpg",
    tags: ["BIM", "Teknoloji", "Verimlilik"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed">
        <p>
          İnşaat sektöründeki en büyük maliyet kalemi malzeme değil, "plansızlık" ve "sahada çözülen çakışmalar"dır. Monolith olarak biz, <strong>5D BIM (5 Boyutlu Yapı Bilgi Modellemesi)</strong> entegrasyonu ile bu sorunu kaynağında çözüyoruz.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Çakışma Testleri (Clash Detection)</h3>
        <p>
          Mekanik, elektrik ve statik projelerin süperpoze edilmesiyle oluşturulan Dijital İkiz üzerinde, henüz tek bir kazma vurulmadan binlerce potansiyel hata tespit edilir. Örneğin:
        </p>
        <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
          <li>Havalandırma kanalının kirişten geçmesi gereken noktalar.</li>
          <li>Yangın tesisatının elektrik tavalarıyla çakışması.</li>
          <li>Asma tavan kotunun yetersiz kaldığı bölgeler.</li>
        </ul>
        <p>
          Bu hataların dijital ortamda çözülmesi, sahadaki "kır-dök-yeniden yap" maliyetlerini %40 oranında düşürmektedir.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Hakediş ve Metraj Kesinliği</h3>
        <p>
          Modelden alınan metrajlar (Quantity Take-off), %99.5 doğruluk payına sahiptir. Bu sayede taşeron hakedişleri ve malzeme siparişleri, tahminlere değil, kesin verilere dayanır. Lojistik fire oranı minimuma iner.
        </p>
      </div>
    )
  },
  {
    id: 3,
    title: "Yeşil Binalar: LEED Sertifikasyonu ve Sürdürülebilir Beton",
    excerpt: "Karbon ayak izini düşüren yeni nesil 'Yeşil Beton' karışımları ve enerji verimliliği sağlayan cephe sistemleri.",
    date: "24 ARALIK 2025",
    readTime: "5 dk okuma",
    author: "Mehmet Demir",
    role: "Operasyon Direktörü",
    category: "Sürdürülebilirlik",
    image: "/foto/photo-1464938050520-ef2270bb8ce8_q_80_w_1000_auto_format_fit_crop.jpg",
    tags: ["LEED", "Çevre", "Malzeme Bilimi"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed">
        <p>
          Sürdürülebilirlik bir trend değil, mühendislik zorunluluğudur. Monolith projelerinde kullandığımız "Eco-Crete" teknolojisi, çimento üretiminden kaynaklı karbon salınımını %30 oranında azaltmaktadır.
        </p>
        
        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Gri Su Geri Kazanım Sistemleri</h3>
        <p>
          LEED Gold sertifikasına aday projelerimizde, yağmur suları ve lavabo atık suları arıtılarak rezervuarlarda ve peyzaj sulamasında kullanılır. Bu sistem, bina su tüketiminde yıllık %45 tasarruf sağlar.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Yüksek Performanslı Cephe</h3>
        <p>
          Low-E kaplamalı camlar ve ısı köprüsü oluşturmayan alüminyum doğramalar sayesinde, binanın ısıtma ve soğutma yükleri minimize edilir.
        </p>
      </div>
    )
  }
];