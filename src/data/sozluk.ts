// src/data/sozluk.ts

export const sozluk: any = {
  tr: {
    seo: {
      site_name: "MONOLITH Engineering",
      home: {
        title: "Geleceğin Yapılarını İnşa Ediyoruz | İnşaat & Mühendislik",
        desc: "Monolith olarak İstanbul merkezli, global standartlarda lüks konut, endüstriyel tesis ve ticari yapı projeleri üretiyoruz."
      },
      corporate: {
        title: "Hakkımızda & Kurumsal | MONOLITH",
        desc: "30 yıllık tecrübe ve 250+ uzman personel ile inşaat sektöründe güven ve kalite inşa ediyoruz."
      },
      projects: {
        title: "Projelerimiz & Portfolyo | MONOLITH",
        desc: "Tamamlanan ve devam eden seçkin konut, fabrika ve plaza projelerimizi inceleyin."
      },
    },
    hero: {
      badge: "Est. 2010 • İstanbul",
      title_main: "MONO",
      title_sub: "LITH.",
      description: "Betonun gücünü ve mühendislik aklını birleştirerek, geleceğin yaşam alanlarını bugünden inşa ediyoruz.",
      btn_explore: "Projeleri Keşfet",
      btn_watch: "Tanıtım Filmi",
      video_badge: "Öne Çıkan Proje"
    },
    stats: [
      { val: "30+", label: "YILLIK TECRÜBE" },
      { val: "1.2M", label: "M² İNŞAAT" },
      { val: "45", label: "AKTİF ŞANTİYE" },
      { val: "250+", label: "PERSONEL" },
    ],
    projects_section: {
      badge: "Global Referanslar",
      title_main: "SEÇKİN",
      title_sub: "PROJELER",
      btn_see_all: "Tümünü Gör",
      btn_detail: "Detayları İncele",
      categories: {
        housing: "KONUT",
        industrial: "ENDÜSTRİYEL",
        commercial: "TİCARİ"
      }
    },
    services_section: {
      title_main: "MÜHENDİSLİK",
      title_sub: "ÇÖZÜMLERİ",
      description: "Karmaşık yapısal zorlukları, yenilikçi teknolojiler ve sürdürülebilir yöntemlerle aşıyoruz.",
      btn_details: "Detaylar",
      items: [
        { 
          title: "Anahtar Teslim İnşaat", 
          desc: "Projelendirmeden iskana kadar tüm süreçlerin titizlikle yönetimi." 
        },
        { 
          title: "Endüstriyel Tesisler", 
          desc: "Fabrika, depo ve üretim hatları için ağır sanayi standartlarında yapılar." 
        },
        { 
          title: "Mimari & Mühendislik", 
          desc: "Fonksiyonelliği estetikle birleştiren, sürdürülebilir tasarım projeleri." 
        }
      ]
    },
    services_page: {
      header: {
        badge: "UZMANLIK ALANLARI",
        title_main: "TEKNİK",
        title_sub: "USTALIK.",
        description: "Karmaşık mühendislik problemlerini, sahada kanıtlanmış metodolojiler ve <span class='text-secondary font-bold'>ileri teknoloji</span> entegrasyonuyla çözüyoruz."
      },
      // Hizmet Kartları (Sırası önemli, page.tsx'teki ID sırasına göre)
      items: [
        {
          label: "İNŞAAT TAAHHÜT",
          title: "Anahtar Teslim İnşaat",
          description: "Arsa seçiminden iskan ruhsatı alımına kadar uçtan uca proje yönetimi. Statik hesaplamalar, kaba yapı imalatı, A+ sınıfı ince işçilik ve sürdürülebilir peyzaj mimarisi.",
          specs: ["Metraj ve Keşif Analizi", "Şantiye Sevk ve İdaresi", "İSG Protokolleri (HSE)", "Kalite Güvence (QA/QC)", "BIM Entegrasyonu", "Geoteknik Zemin İyileştirme"]
        },
        {
          label: "ENDÜSTRİYEL",
          title: "Endüstriyel Çözümler",
          description: "Yüksek statik ve dinamik yüklere maruz kalan tesisler için optimize edilmiş mühendislik çözümleri. Akıllı fabrika (Smart Factory) altyapılarına uygun sistemler.",
          specs: ["Fiber Donatılı Zemin", "Geniş Açıklıklı Çelik", "HVAC ve Proses Tesisatı", "Endüstri 4.0 Altyapısı", "Prefabrik Montaj", "Lojistik Optimizasyonu"]
        },
        {
          label: "DÖNÜŞÜM & GÜÇLENDİRME",
          title: "Kentsel Dönüşüm & Güçlendirme",
          description: "Mevcut yapı stokunun TBDY 2018 standartlarına yükseltilmesi. Can güvenliğini maksimize ederken mülk değerini artıran stratejik müdahaleler.",
          specs: ["Performans Analizi (RBTE)", "Karbon Fiber (FRP)", "Sismik İzolasyon", "Betonarme Mantolama", "6306 Sayılı Kanun", "Değer Artırıcı Revizyon"]
        },
        {
          label: "MÜŞAVİRLİK",
          title: "Proje Yönetimi & Danışmanlık",
          description: "Yatırımcı adına sahadaki teknik göz olma misyonu. Maliyet, zaman ve kalite üçgeninde optimum dengeyi sağlayan profesyonel müşavirlik.",
          specs: ["Nakit Akış Yönetimi", "Hakediş ve Kesin Hesap", "Teknik Şartname", "Yatırım Fizibilite", "FIDIC Sözleşme", "Primavera Planlama"]
        }
      ],
      // Teknoloji Bölümü
      tech_section: {
        title: "DİJİTAL ALTYAPI",
        subtitle: "SYSTEM_CORE_MODULES // V.2.4",
        items_desc: [ // Tech stack sırasına göre açıklamalar
          "3D Yapı Bilgi Modellemesi",
          "İleri Düzey Planlama",
          "Statik & Dinamik Analiz",
          "Çakışma Testi (Clash Detect)",
          "Bulut Tabanlı Saha Yönetimi",
          "2D Teknik Detaylandırma"
        ]
      },
      // Sertifikalar
      cert_section: {
        title: "KALİTE & UYUMLULUK",
        subtitle: "VERIFIED_PROTOCOLS // SECURE",
        items: [ // Sertifika sırasına göre
          { label: "KALİTE YÖNETİM SİSTEMİ", status: "ONAYLANDI" },
          { label: "ÇEVRE YÖNETİM SİSTEMİ", status: "ONAYLANDI" },
          { label: "İŞ SAĞLIĞI VE GÜVENLİĞİ", status: "ONAYLANDI" },
          { label: "SÜRDÜRÜLEBİLİR YAPI", status: "SERTİFİKALI" }
        ]
      },
      // İstatistikler
      stats_section: {
        items: [
          { label: "TOPLAM İNŞAAT (m²)", sub: "Teslim Edilen Alan" },
          { label: "KAZASIZ İŞ SAATİ", sub: "İSG Standartları" },
          { label: "AKTİF ŞANTİYE", sub: "Eş Zamanlı Operasyon" },
          { label: "ZAMANINDA TESLİM", sub: "Primavera Yönetimi" }
        ],
        last_update: "SON_GÜNCELLEME",
        server_status: "SERVER_STATUS: ONLINE"
      },
      misc: {
        specs_title: "Teknik Yeterlilikler"
      }
    },
    contact_page: {
      loading: "UYDU_BAĞLANTISI...",
      header: {
        status: "Proje Ofisi Aktif",
        title_1: "PROJENİZİ",
        title_2: "İNŞA EDELİM.",
        desc: "Mühendislik disiplini ve mimari vizyonla, hayalinizdeki yapıyı gerçeğe dönüştürmek için <span class='text-secondary underline decoration-2 underline-offset-4'>ilk adımı atın.</span>"
      },
      sidebar: {
        title: "İLETİŞİM ÜSSÜ",
        subtitle: "EST. 2010 • MASLAK HQ",
        items: {
          hq: { title: "GENEL MERKEZ", val: "Maslak Mah. Büyükdere Cad. No:12, Sarıyer/İstanbul" },
          phone: { title: "TELEFON HATTI", val: "+90 (212) 345 67 89" },
          email: { title: "E-POSTA", val: "proje@monolith.com.tr" }
        },
        map_badge: "CANLI UYDU AKIŞI"
      },
      form: {
        title_main: "TEKLİF",
        title_sub: "FORMU",
        subtitle: "Teknik ekibimiz 24 saat içinde dönüş yapacaktır.",
        labels: {
          name: "Ad Soyad / Firma",
          phone: "İletişim Numarası",
          email: "E-Posta Adresi",
          type: "Proje Tipolojisi",
          budget: "Yatırım Bütçesi",
          message: "Proje Notları"
        },
        placeholders: {
          name: "Örn: Ahmet Yılmaz",
          phone: "+90 (5XX) ...",
          email: "ornek@sirket.com",
          message: "Arsa durumu, özel istekler, teslim tarihi vb..."
        },
        project_types: {
          konut: "Lüks Konut",
          endustri: "Endüstriyel",
          donusum: "Güçlendirme"
        },
        // Bütçe aralıkları (Dizi sırası önemli)
        budget_ranges: ["5-20 Milyon ₺", "20-50 Milyon ₺", "50M ₺ Üzeri", "Danışmanlık"],
        submit_btn: "Başvuruyu İlet"
      }
    },
    career_page: {
      header: {
        badge: "Monolith Kariyer",
        title_1: "POTANSİYELİNİZİ",
        title_2: "ZİRVEYE",
        title_3: "TAŞIYIN.",
        desc: "Monolith, sadece bina değil, geleceğin liderlerini de inşa ediyor. Global projelerde iz bırakmak için başvurunuzu hemen iletin.",
        tags: ["Tam Zamanlı", "Staj Programı", "Hibrit Çalışma"]
      },
      form: {
        title: "GENEL BAŞVURU",
        subtitle: "CV'niz yetenek havuzumuza eklenecektir.",
        labels: {
          name: "Ad Soyad",
          phone: "Telefon",
          email: "E-Posta",
          position: "Başvurulan Pozisyon / Ünvan",
          cv: "CV Yükle (PDF)"
        },
        placeholders: {
          name: "Adınız Soyadınız",
          phone: "+90 (5XX)...",
          email: "ornek@mail.com",
          position: "Örn: İnşaat Mühendisi, Mimar..."
        },
        upload_text: "Dosya seçmek için tıklayın",
        submit_btn: "Başvuruyu Gönder"
      },
      benefits: {
        title: "NEDEN MONOLITH?",
        items: [
          { title: "İnovasyon Odaklı", desc: "En son inşaat teknolojileri (BIM, IoT) ile çalışma fırsatı." },
          { title: "Sürekli Gelişim", desc: "Sertifikasyon destekleri ve akademi eğitimleri." },
          { title: "Global Kültür", desc: "Uluslararası projelerde yer alma ve seyahat imkanı." },
          { title: "Performans Primi", desc: "Proje başarısına endeksli rekabetçi prim sistemi." }
        ]
      },
      process: {
        title: "İŞE ALIM SÜRECİ",
        subtitle: "Şeffaf ve yetenek odaklı değerlendirme sistemimiz.",
        steps: [
          { step: "01", title: "Başvuru", desc: "Form üzerinden CV gönderimi." },
          { step: "02", title: "Ön Değerlendirme", desc: "İK ekibimiz tarafından yetkinlik taraması." },
          { step: "03", title: "Teknik Mülakat", desc: "Departman yöneticileri ile proje bazlı görüşme." },
          { step: "04", title: "Teklif", desc: "Karşılıklı mutabakat ve Monolith ailesine hoş geldin." }
        ]
      }
    },
    corporate_page: {
      header: {
        badge: "Kurumsal Kimlik",
        title_1: "İNŞAATIN",
        title_2: "OMURGASI.",
        quote: "Biz sadece bina yapmıyoruz; <span class='text-secondary font-bold underline decoration-secondary/30 underline-offset-4 decoration-2'>güven</span> ve <span class='text-blue-700 font-bold'>gelecek</span> inşa ediyoruz."
      },
      story: {
        year_label: "BAŞLANGIÇ",
        title_1: "STANDARTLARI",
        title_2: "YÜKSELTMEK",
        title_3: "İÇİN YOLA ÇIKTIK.",
        desc: "Sıradan beton bloklar yerine, <span class='font-bold text-blue-900'>mühendislik dehasının</span> estetikle buluştuğu yapılar hayal ettik. Monolith, küçük bir mühendislik ofisinden, bugün ülkenin en prestijli projelerine imza atan dev bir yapıya dönüştü.",
        quote_small: "Doğaya meydan okuma, onunla uyumlan.",
        sign_role: "YÖNETİM KURULU BŞK."
      },
      stats: [
        { val: "14", label: "YILLIK TECRÜBE" },
        { val: "50+", label: "BİTEN PROJE" },
        { val: "81", label: "İLDE FAALİYET" },
        { val: "200+", label: "UZMAN PERSONEL" }
      ],
      timeline: {
        badge: "Başarı Yolculuğumuz",
        title: "KİLOMETRE TAŞLARI",
        items: [
          { year: "2010", title: "Temeller Atıldı", desc: "İstanbul Maslak'ta küçük bir mühendislik ofisi olarak kurulduk." },
          { year: "2013", title: "İlk Büyük Proje", desc: "100 konutluk 'Vadi Yaşam' projesini başarıyla tamamladık." },
          { year: "2016", title: "Endüstriyel Atılım", desc: "Gebze Organize Sanayi Bölgesi'nde ilk fabrika inşaatımızı teslim ettik." },
          { year: "2019", title: "ISO Sertifikasyonu", desc: "Kalite yönetim sistemlerimizi uluslararası standartlara (ISO 9001) taşıdık." },
          { year: "2022", title: "Global Ortaklıklar", desc: "Avrupa merkezli mimarlık ofisleriyle stratejik çözüm ortaklıkları kurduk." },
          { year: "2024", title: "Teknoloji Entegrasyonu", desc: "Tüm projelerimizde %100 BIM (Yapı Bilgi Modellemesi) sistemine geçiş yaptık." }
        ]
      },
      values: [
        { title: "Sıfır Hata", desc: "Statik hesaplamalarda ve iş güvenliğinde toleransımız yoktur." },
        { title: "Sürdürülebilirlik", desc: "Gelecek nesiller için LEED sertifikalı, yeşil yapılar." },
        { title: "Güven", desc: "Şeffaf süreç yönetimi ve taahhüt edilen tarihte teslim." },
        { title: "Sağlamlık", desc: "C35+ Beton sınıfı ve nervürlü çelik standardı." }
      ],
      partners: {
        badge: "Güçlü İş Birlikleri",
        title_1: "SEKTÖRÜN",
        title_2: "DEVLERİ",
        testimonial: {
          quote: "Monolith ile çalışmak, bir inşaat projesinden çok bir <span class='font-bold text-blue-900 bg-blue-50 px-2 rounded'>mühendislik ortaklığıydı</span>. Kriz anlarındaki çözüm odaklı yaklaşımları onları sektörde benzersiz kılıyor.",
          role: "CEO, Bosphorus GYO"
        }
      },
      team: {
        badge: "Liderlik",
        title_1: "YÖNETİM",
        title_2: "KADROSU",
        members: [
          { role: "KURUCU MİMAR", bio: "30 yıllık tecrübe. Otoriter tasarım dili ve sürdürülebilir mimari savunucusu." },
          { role: "BAŞ MÜHENDİS", bio: "Statik projelerin güvenliğinden sorumlu, deprem mühendisliği ve zemin mekaniği uzmanı." },
          { role: "OPERASYON DİREKTÖRÜ", bio: "Saha operasyonlarının, bütçe yönetiminin ve zamanında teslimatın arkasındaki stratejik güç." }
        ]
      },
      safety: {
        badge: "GÜVENLİK PROTOKOLÜ ONAYLANDI",
        title_1: "DEPREM YÖNETMELİĞİNE",
        title_2: "%100 UYUM",
        desc: "İnşa ettiğimiz her yapı, olası en şiddetli senaryolara göre modellenir. <span class='font-bold text-blue-900 bg-blue-50 px-2 mx-1 rounded'>C35+ Beton</span>, <span class='font-bold text-blue-900 bg-blue-50 px-2 mx-1 rounded'>Sismik İzolatörler</span> ve <span class='font-bold text-blue-900 bg-blue-50 px-2 mx-1 rounded'>Nervürlü Çelik</span> standartlarımızdır.",
        tags: ["Zemin Etüdü", "Statik Analiz", "Sismik Sönümleyici"]
      }
    },
    projects_page: {
      header: {
        badge: "PORTFOLYO",
        title_1: "SEÇKİN",
        title_2: "PROJELER."
      },
      filters: {
        // Not: Sol taraftaki anahtarlar veritabanındaki kategori isimleriyle aynı kalmalı
        "Tümü": "Tümü",
        "Konut": "Konut",
        "Endüstriyel": "Endüstriyel",
        "Ticari": "Ticari",
        "Turizm": "Turizm",
        "Eğitim": "Eğitim",
        "Sağlık": "Sağlık"
      },
      view_modes: {
        list: "LİSTE",
        map: "HARİTA"
      },
      gallery_title: "Medya Galeri",
      loading_map: "HARİTA VERİSİ YÜKLENİYOR...",
      modal: {
        details_title: "Proje Künyesi",
        client: "İşveren",
        area: "Toplam Alan",
        year_status: "Yıl / Durum",
        btn_offer: "Teklif İste",
        vision_title: "Proje Vizyonu",
        challenge: "Zorluk (Challenge)",
        solution: "Çözüm (Solution)",
        tech_specs: "Teknik Özellikler"
      }
    },
    faq_page: {
      header: {
        badge: "Destek Merkezi",
        title_1: "NASIL YARDIMCI",
        title_2: "OLABİLİRİZ?",
        subtitle: "Projelerimiz, süreçlerimiz ve teknik detaylar hakkında en çok merak edilenleri sizin için derledik.",
        search_placeholder: "Örn: Deprem yönetmeliği, ödeme planı..."
      },
      // Kategori sırası page.tsx'teki ikon sırasıyla aynı olmalı
      categories: [
        {
          title: "KURUMSAL",
          items: [
            { q: "Monolith sadece İstanbul içinde mi hizmet veriyor?", a: "Merkezimiz İstanbul Maslak'ta olmakla birlikte, tüm Türkiye genelinde ve seçili yurt dışı projelerinde (Türki Cumhuriyetler, Balkanlar) hizmet vermekteyiz. Lojistik ağımız ve mobil şantiye ekiplerimizle her lokasyonda aynı kalite standartlarını sağlıyoruz." },
            { q: "Hangi tür projeleri üstleniyorsunuz?", a: "Uzmanlık alanlarımız üç ana başlıkta toplanır: \n1. **Yüksek Yapılar ve Konut Kompleksleri** \n2. **Endüstriyel Tesisler (Fabrika, Depo, Lojistik Merkezleri)** \n3. **Ticari Yapılar (AVM, Ofis Plazaları, Oteller)**. \nAyrıca, mevcut yapıların güçlendirilmesi ve renovasyonu konusunda da özel bir departmanımız bulunmaktadır." },
            { q: "Referans projelerinizi gezebilir miyiz?", a: "Kesinlikle. Şeffaflık ilkemiz gereği, tamamlanmış projelerimizi veya (güvenlik protokolleri çerçevesinde) devam eden şantiyelerimizi randevu ile ziyaret edebilirsiniz. Müşteri temsilcimiz size eşlik edecektir." }
          ]
        },
        {
          title: "İNŞAAT & MÜHENDİSLİK",
          items: [
            { q: "Deprem güvenliği konusunda hangi standartları uyguluyorsunuz?", a: "Projelerimiz, 2018 Türkiye Bina Deprem Yönetmeliği'nin **üzerinde** performans hedefleriyle tasarlanır. Standart olarak **C35/C40 sınıfı beton** ve **B420C nervürlü sismik çelik** kullanıyoruz. Zemin etüdü raporlarına göre, gerekli görülen alanlarda **Jet Grout** veya **Fore Kazık** ile zemin iyileştirmesi yapmadan temele başlamıyoruz." },
            { q: "Kaba inşaat süreci ne kadar sürer?", a: "Süre; projenin metrekaresine, kat adedine ve zemin koşullarına göre değişir. Ancak ortalama olarak:\n* **Villa/Müstakil:** 4-6 Ay\n* **Orta Ölçekli Apartman:** 8-12 Ay\n* **Endüstriyel Tesis:** 6-9 Ay\nMonolith olarak, taahhüt ettiğimiz tarihte teslim garantisi veriyor ve gecikmelerde cezai şartları sözleşmeye ekliyoruz." },
            { q: "Hangi yapı denetim firmalarıyla çalışıyorsunuz?", a: "Çevre ve Şehircilik Bakanlığı tarafından atanan bağımsız yapı denetim firmalarıyla çalışıyoruz. Ayrıca, kendi iç bünyemizde kurduğumuz 'Kalite Kontrol (QC)' ekibimiz, yapı denetimden bağımsız olarak her beton dökümünü ve demir donatıyı ekstra kontrolden geçirir." }
          ]
        },
        {
          title: "İÇ MİMARİ & TASARIM",
          items: [
            { q: "Anahtar teslim dekorasyon hizmetiniz var mı?", a: "Evet. 'Design & Build' modelimizle, kaba inşaattan ince işçiliğe, mobilya seçiminden aydınlatma tasarımına kadar tüm süreci tek elden yönetiyoruz. Bu sayede mimar ve usta arasındaki iletişim kopukluklarını ve bütçe sapmalarını engelliyoruz." },
            { q: "Tasarım sürecinde revizyon hakkımız var mı?", a: "Elbette. Konsept tasarım aşamasında **sınırsız**, uygulama projesi aşamasında ise **3 adet kapsamlı revizyon** hakkınız bulunmaktadır. Amacımız, hayalinizdeki mekanı %100 memnuniyetle teslim etmektir." },
            { q: "Malzeme seçimlerini nasıl yapıyoruz?", a: "Ofisimizde bulunan geniş malzeme kütüphanemizde (parke, seramik, boya, kumaş numuneleri) mimarlarımızla birlikte seçim yapabilirsiniz. Ayrıca, çözüm ortağımız olan markaların (Vitra, Çanakkale Seramik, Jotun vb.) showroomlarına birlikte ziyaretler düzenliyoruz." }
          ]
        },
        {
          title: "SÜREÇ & YASAL",
          items: [
            { q: "Ruhsat ve iskan işlemlerini kim takip ediyor?", a: "Tüm resmi süreçler (Belediye ruhsatı, İSKİ, AYEDAŞ/BEDAŞ abonelikleri, İtfaiye raporu ve İskan alımı) şirketimizin **Resmi İşler Departmanı** tarafından sizin adınıza vekaleten yürütülür. Size sadece anahtarınızı teslim almak kalır." },
            { q: "Ödeme koşullarınız nelerdir?", a: "Genel ödeme planımız şu şekildedir: \n* **%30 Peşinat** (Sözleşme Anı)\n* **%40 Hakediş Usulü** (İnşaat ilerledikçe aylık ödemeler)\n* **%30 Teslimat** (Anahtar tesliminde)\nAncak projenin ölçeğine göre vadeli ödeme veya takas seçeneklerini de değerlendirebiliyoruz." }
          ]
        }
      ],
      no_results: {
        title: "Sonuç Bulunamadı",
        desc: "ile ilgili bir soru bulamadık. Farklı bir kelime deneyebilir veya doğrudan bizimle iletişime geçebilirsiniz."
      },
      cta: {
        title: "SORUNUZU LİSTEDE BULAMADINIZ MI?",
        desc: "Uzman ekibimiz, projenize özel sorularınızı yanıtlamak için hazır. Bize yazın, en geç 2 saat içinde dönüş yapalım.",
        btn_write: "Bize Yazın",
        btn_call: "Bizi Arayın"
      }
    },
    technical_page: {
      header: {
        badge: "Bilgi Merkezi",
        title_1: "TEKNİK DETAYLAR",
        title_2: "& ANALİZLER",
        desc: "İnşaat teknolojileri, mühendislik yaklaşımları ve sektörel gelişmeleri uzman kadromuzun kaleminden takip edin."
      },
      ui: {
        read_time: "dk okuma",
        share: "Paylaş",
        save: "Kaydet",
        print: "Yazdır",
        author_title: "Yazar"
      },
      posts: [
        {
          id: 1,
          title: "Sismik İzolatör Teknolojileri ve Yapısal Dayanıklılık",
          excerpt: "Modern yüksek yapılarda kullanılan sürtünmeli sarkaç tipi izolatörlerin, deprem enerjisini %80 oranında sönümleme kapasitesi üzerine teknik bir inceleme.",
          date: "12 OCAK 2026",
          readTime: "6",
          author: "Zeynep Kaya",
          role: "Baş Mühendis",
          category: "Sismik Mühendislik",
          image: "/foto/photo-1541888946425-d81bb19240f5_q_80_w_1000_auto_format_fit_crop.jpg",
          tags: ["Deprem", "Betonarme", "Güvenlik"],
          content: `
            <p class="text-lg font-medium text-slate-900 mb-6">Geleneksel yapı tasarımında, binanın deprem enerjisine dayanması beklenir. Ancak sismik izolasyon teknolojisi, bu paradigmayı kökten değiştirmektedir.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Sürtünmeli Sarkaç (Friction Pendulum) Prensibi</h3>
            <p class="mb-4">Monolith projelerinde kullandığımız 3. Nesil Sismik İzolatörler, binanın periyodunu uzatarak zemin ivmesini yapıya minimum düzeyde iletir. Bu sistem temel olarak şunları sağlar:</p>
            <ul class="list-disc pl-6 space-y-2 marker:text-amber-500 mb-8">
              <li><strong>Periyot Uzaması:</strong> Yapının doğal titreşim periyodunu 2.5 - 3.0 saniye aralığına çeker.</li>
              <li><strong>Enerji Sönümleme:</strong> Deprem enerjisinin %80'inden fazlası izolatör seviyesinde sönümlenir.</li>
            </ul>
            <div class="bg-slate-100 p-6 rounded-sm border-l-4 border-amber-500 my-8">
              <h4 class="font-bold text-slate-900 mb-2">Teknik Not:</h4>
              <p class="text-sm italic">Richter ölçeğine göre 7.5 ve üzeri depremlerde dahi yapının "Hemen Kullanım" performans seviyesinde kalmasını garanti eder.</p>
            </div>
          `
        },
        {
          id: 2,
          title: "BIM (Yapı Bilgi Modellemesi) ile Maliyet Optimizasyonu",
          excerpt: "İnşaat öncesi dijital ikiz oluşturmanın, şantiye hatalarını %40 azaltması ve hakediş süreçlerine olan doğrudan etkisi.",
          date: "08 OCAK 2026",
          readTime: "8",
          author: "Ahmet Yılmaz",
          role: "Kurucu Mimar",
          category: "Dijital İnşaat",
          image: "/foto/photo-1503387762-592deb58ef4e_q_80_w_1000_auto_format_fit_crop.jpg", 
          tags: ["BIM", "Teknoloji", "Verimlilik"],
          content: `
            <p class="mb-6">İnşaat sektöründeki en büyük maliyet kalemi malzeme değil, "plansızlık"tır. Monolith olarak biz, <strong>5D BIM</strong> entegrasyonu ile bu sorunu kaynağında çözüyoruz.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Çakışma Testleri (Clash Detection)</h3>
            <p class="mb-4">Dijital İkiz üzerinde, henüz tek bir kazma vurulmadan binlerce potansiyel hata tespit edilir:</p>
            <ul class="list-disc pl-6 space-y-2 marker:text-blue-500 mb-8">
              <li>Mekanik ve Statik çakışmaları.</li>
              <li>Yangın tesisatı optimizasyonu.</li>
            </ul>
            <p>Bu hataların dijital ortamda çözülmesi, sahadaki maliyetleri %40 oranında düşürmektedir.</p>
          `
        },
        {
          id: 3,
          title: "Yeşil Binalar: LEED Sertifikasyonu ve Sürdürülebilir Beton",
          excerpt: "Karbon ayak izini düşüren yeni nesil 'Yeşil Beton' karışımları ve enerji verimliliği sağlayan cephe sistemleri.",
          date: "24 ARALIK 2025",
          readTime: "5",
          author: "Mehmet Demir",
          role: "Operasyon Direktörü",
          category: "Sürdürülebilirlik",
          image: "/foto/photo-1464938050520-ef2270bb8ce8_q_80_w_1000_auto_format_fit_crop.jpg",
          tags: ["LEED", "Çevre", "Malzeme"],
          content: `
            <p class="mb-6">Sürdürülebilirlik bir trend değil, mühendislik zorunluluğudur. "Eco-Crete" teknolojisi, karbon salınımını %30 azaltmaktadır.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Gri Su Geri Kazanım</h3>
            <p class="mb-4">LEED Gold sertifikasına aday projelerimizde, yağmur suları arıtılarak rezervuarlarda kullanılır. Bu sistem yıllık %45 su tasarrufu sağlar.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Cephe Sistemleri</h3>
            <p>Low-E kaplamalı camlar sayesinde ısıtma ve soğutma yükleri minimize edilir.</p>
          `
        }
      ]
    }
    
  },
  
  en: {
    
    seo: {
      site_name: "MONOLITH Engineering",
      home: {
        title: "Building the Structures of the Future | Construction & Engineering",
        desc: "As Monolith, we produce luxury housing, industrial facility and commercial building projects at global standards based in Istanbul."
      },
      corporate: {
        title: "About Us & Corporate | MONOLITH",
        desc: "We build trust and quality in the construction sector with 30 years of experience and 250+ expert staff."
      },
      projects: {
        title: "Our Projects & Portfolio | MONOLITH",
        desc: "Explore our completed and ongoing exclusive housing, factory, and plaza projects."
      },
    },
    hero: {
      badge: "Est. 2010 • Istanbul",
      title_main: "MONO",
      title_sub: "LITH.",
      description: "Combining the strength of concrete with engineering intelligence, we build the living spaces of the future today.",
      btn_explore: "Explore Projects",
      btn_watch: "Watch Video",
      video_badge: "Featured Project"
    },
    stats: [
      { val: "30+", label: "YEARS EXPERIENCE" },
      { val: "1.2M", label: "M² CONSTRUCTION" },
      { val: "45", label: "ACTIVE SITES" },
      { val: "250+", label: "EMPLOYEES" },
    ],
    projects_section: {
      badge: "Global References",
      title_main: "EXCLUSIVE",
      title_sub: "PROJECTS",
      btn_see_all: "See All",
      btn_detail: "View Details",
      categories: {
        housing: "HOUSING",
        industrial: "INDUSTRIAL",
        commercial: "COMMERCIAL"
      }
    },
    services_section: {
      title_main: "ENGINEERING",
      title_sub: "SOLUTIONS",
      description: "We overcome complex structural challenges with innovative technologies and sustainable methods.",
      btn_details: "Details",
      items: [
        { 
          title: "Turnkey Construction", 
          desc: "Meticulous management of all processes from project design to occupancy." 
        },
        { 
          title: "Industrial Facilities", 
          desc: "Structures with heavy industry standards for factories, warehouses, and production lines." 
        },
        { 
          title: "Architecture & Engineering", 
          desc: "Sustainable design projects combining functionality with aesthetics." 
        }
      ]
    },
    services_page: {
      header: {
        badge: "AREAS OF EXPERTISE",
        title_main: "TECHNICAL",
        title_sub: "MASTERY.",
        description: "We solve complex engineering problems with field-proven methodologies and <span class='text-secondary font-bold'>advanced technology</span> integration."
      },
      items: [
        {
          label: "CONSTRUCTION CONTRACTING",
          title: "Turnkey Construction",
          description: "End-to-end project management from land selection to occupancy permit. Structural calculations, rough construction, A+ class finishing, and sustainable landscape architecture.",
          specs: ["Quantity Survey & Analysis", "Site Management", "HSE Protocols", "Quality Assurance (QA/QC)", "BIM Integration", "Geotechnical Soil Improvement"]
        },
        {
          label: "INDUSTRIAL",
          title: "Industrial Solutions",
          description: "Engineering solutions optimized for facilities exposed to high static and dynamic loads. Systems suitable for Smart Factory infrastructures.",
          specs: ["Fiber Reinforced Flooring", "Wide Span Steel", "HVAC & Process Piping", "Industry 4.0 Infrastructure", "Prefabricated Assembly", "Logistics Optimization"]
        },
        {
          label: "TRANSFORMATION & RETROFIT",
          title: "Urban Transformation & Retrofitting",
          description: "Upgrading existing building stock to TBDY 2018 standards. Strategic interventions that maximize life safety while increasing property value.",
          specs: ["Performance Analysis (RBTE)", "Carbon Fiber (FRP)", "Seismic Isolation", "Concrete Jacketing", "Law No. 6306 Compliance", "Value-Adding Revision"]
        },
        {
          label: "CONSULTANCY",
          title: "Project Management & Consultancy",
          description: "The mission of being the technical eye in the field on behalf of the investor. Professional consultancy ensuring optimum balance in the cost, time, and quality triangle.",
          specs: ["Cash Flow Management", "Progress Payment & Final Account", "Technical Specifications", "Investment Feasibility", "FIDIC Contracts", "Primavera Planning"]
        }
      ],
      tech_section: {
        title: "DIGITAL INFRASTRUCTURE",
        subtitle: "SYSTEM_CORE_MODULES // V.2.4",
        items_desc: [
          "3D Building Information Modeling",
          "Advanced Level Planning",
          "Static & Dynamic Analysis",
          "Clash Detection",
          "Cloud-Based Field Management",
          "2D Technical Detailing"
        ]
      },
      cert_section: {
        title: "QUALITY & COMPLIANCE",
        subtitle: "VERIFIED_PROTOCOLS // SECURE",
        items: [
          { label: "QUALITY MANAGEMENT SYSTEM", status: "APPROVED" },
          { label: "ENVIRONMENTAL MANAGEMENT SYSTEM", status: "APPROVED" },
          { label: "OCCUPATIONAL HEALTH & SAFETY", status: "APPROVED" },
          { label: "SUSTAINABLE BUILDING", status: "CERTIFIED" }
        ]
      },
      stats_section: {
        items: [
          { label: "TOTAL CONSTRUCTION (m²)", sub: "Delivered Area" },
          { label: "ACCIDENT-FREE HOURS", sub: "HSE Standards" },
          { label: "ACTIVE SITES", sub: "Simultaneous Operations" },
          { label: "ON-TIME DELIVERY", sub: "Primavera Management" }
        ],
        last_update: "LAST_UPDATE",
        server_status: "SERVER_STATUS: ONLINE"
      },
      misc: {
        specs_title: "Technical Capabilities"
      }
    },
    contact_page: {
      loading: "SATELLITE_LINK...",
      header: {
        status: "Project Office Active",
        title_1: "LET'S BUILD",
        title_2: "YOUR PROJECT.",
        desc: "Take the <span class='text-secondary underline decoration-2 underline-offset-4'>first step</span> to turn your dream structure into reality with engineering discipline and architectural vision."
      },
      sidebar: {
        title: "COMMUNICATION BASE",
        subtitle: "EST. 2010 • MASLAK HQ",
        items: {
          hq: { title: "HEADQUARTERS", val: "Maslak Dist. Büyükdere Ave. No:12, Sariyer/Istanbul" },
          phone: { title: "PHONE LINE", val: "+90 (212) 345 67 89" },
          email: { title: "E-MAIL", val: "project@monolith.com.tr" }
        },
        map_badge: "LIVE SAT FEED"
      },
      form: {
        title_main: "PROPOSAL",
        title_sub: "FORM",
        subtitle: "Our technical team will get back to you within 24 hours.",
        labels: {
          name: "Name / Company",
          phone: "Contact Number",
          email: "E-Mail Address",
          type: "Project Typology",
          budget: "Investment Budget",
          message: "Project Notes"
        },
        placeholders: {
          name: "Ex: John Doe",
          phone: "+90 (5XX) ...",
          email: "example@company.com",
          message: "Land status, special requests, delivery date etc..."
        },
        project_types: {
          konut: "Luxury Housing",
          endustri: "Industrial",
          donusum: "Retrofitting"
        },
        budget_ranges: ["$250K - $1M", "$1M - $2.5M", "$2.5M+", "Consultancy"],
        submit_btn: "Submit Proposal"
      }
    },
    career_page: {
      header: {
        badge: "Monolith Careers",
        title_1: "TAKE YOUR",
        title_2: "POTENTIAL TO THE",
        title_3: "TOP.",
        desc: "Monolith builds not just buildings, but future leaders. Submit your application now to leave a mark on global projects.",
        tags: ["Full Time", "Internship Program", "Hybrid Work"]
      },
      form: {
        title: "GENERAL APPLICATION",
        subtitle: "Your CV will be added to our talent pool.",
        labels: {
          name: "Full Name",
          phone: "Phone",
          email: "E-Mail",
          position: "Applied Position / Title",
          cv: "Upload CV (PDF)"
        },
        placeholders: {
          name: "Your Full Name",
          phone: "+90 (5XX)...",
          email: "example@mail.com",
          position: "Ex: Civil Engineer, Architect..."
        },
        upload_text: "Click to select file",
        submit_btn: "Submit Application"
      },
      benefits: {
        title: "WHY MONOLITH?",
        items: [
          { title: "Innovation Oriented", desc: "Opportunity to work with the latest construction technologies (BIM, IoT)." },
          { title: "Continuous Development", desc: "Certification support and academy trainings." },
          { title: "Global Culture", desc: "Opportunity to take part in international projects and travel." },
          { title: "Performance Bonus", desc: "Competitive bonus system indexed to project success." }
        ]
      },
      process: {
        title: "RECRUITMENT PROCESS",
        subtitle: "Our transparent and talent-oriented assessment system.",
        steps: [
          { step: "01", title: "Application", desc: "CV submission via form." },
          { step: "02", title: "Pre-Evaluation", desc: "Competency screening by our HR team." },
          { step: "03", title: "Technical Interview", desc: "Project-based interview with department managers." },
          { step: "04", title: "Offer", desc: "Mutual agreement and welcome to the Monolith family." }
        ]
      }
    },
    corporate_page: {
      header: {
        badge: "Corporate Identity",
        title_1: "BACKBONE OF",
        title_2: "CONSTRUCTION.",
        quote: "We don't just build buildings; we build <span class='text-secondary font-bold underline decoration-secondary/30 underline-offset-4 decoration-2'>trust</span> and <span class='text-blue-700 font-bold'>future</span>."
      },
      story: {
        year_label: "BEGINNING",
        title_1: "SET OUT TO",
        title_2: "RAISE",
        title_3: "THE STANDARDS.",
        desc: "Instead of ordinary concrete blocks, we dreamed of structures where <span class='font-bold text-blue-900'>engineering genius</span> meets aesthetics. Monolith has transformed from a small engineering office into a giant structure signing the country's most prestigious projects.",
        quote_small: "Don't challenge nature, align with it.",
        sign_role: "CHAIRMAN OF THE BOARD"
      },
      stats: [
        { val: "14", label: "YEARS EXPERIENCE" },
        { val: "50+", label: "COMPLETED PROJECTS" },
        { val: "81", label: "CITIES ACTIVE" },
        { val: "200+", label: "EXPERT STAFF" }
      ],
      timeline: {
        badge: "Our Journey",
        title: "MILESTONES",
        items: [
          { year: "2010", title: "Foundations Laid", desc: "Established as a small engineering office in Maslak, Istanbul." },
          { year: "2013", title: "First Major Project", desc: "Successfully completed the 'Vadi Yaşam' project with 100 units." },
          { year: "2016", title: "Industrial Breakthrough", desc: "Delivered our first factory construction in Gebze Organized Industrial Zone." },
          { year: "2019", title: "ISO Certification", desc: "Upgraded our quality management systems to international standards (ISO 9001)." },
          { year: "2022", title: "Global Partnerships", desc: "Established strategic partnerships with Europe-based architectural offices." },
          { year: "2024", title: "Tech Integration", desc: "Switched to 100% BIM (Building Information Modeling) system in all our projects." }
        ]
      },
      values: [
        { title: "Zero Error", desc: "We have no tolerance in static calculations and occupational safety." },
        { title: "Sustainability", desc: "LEED certified, green buildings for future generations." },
        { title: "Trust", desc: "Transparent process management and delivery on the committed date." },
        { title: "Durability", desc: "C35+ Concrete class and ribbed steel standard." }
      ],
      partners: {
        badge: "Strong Collaborations",
        title_1: "GIANTS OF",
        title_2: "THE SECTOR",
        testimonial: {
          quote: "Working with Monolith was more of an <span class='font-bold text-blue-900 bg-blue-50 px-2 rounded'>engineering partnership</span> than a construction project. Their solution-oriented approach in times of crisis makes them unique in the sector.",
          role: "CEO, Bosphorus REIT"
        }
      },
      team: {
        badge: "Leadership",
        title_1: "MANAGEMENT",
        title_2: "TEAM",
        members: [
          { role: "FOUNDING ARCHITECT", bio: "30 years of experience. Advocate of authoritarian design language and sustainable architecture." },
          { role: "CHIEF ENGINEER", bio: "Responsible for the safety of static projects, expert in earthquake engineering and soil mechanics." },
          { role: "OPERATIONS DIRECTOR", bio: "The strategic power behind field operations, budget management, and on-time delivery." }
        ]
      },
      safety: {
        badge: "SAFETY PROTOCOL APPROVED",
        title_1: "100% COMPLIANCE",
        title_2: "WITH EARTHQUAKE CODE",
        desc: "Every structure we build is modeled according to the most severe possible scenarios. <span class='font-bold text-blue-900 bg-blue-50 px-2 mx-1 rounded'>C35+ Concrete</span>, <span class='font-bold text-blue-900 bg-blue-50 px-2 mx-1 rounded'>Seismic Isolators</span> and <span class='font-bold text-blue-900 bg-blue-50 px-2 mx-1 rounded'>Ribbed Steel</span> are our standards.",
        tags: ["Soil Survey", "Static Analysis", "Seismic Damper"]
      }
    },
    projects_page: {
      header: {
        badge: "PORTFOLIO",
        title_1: "EXCLUSIVE",
        title_2: "PROJECTS."
      },
      filters: {
        "Tümü": "All",
        "Konut": "Housing",
        "Endüstriyel": "Industrial",
        "Ticari": "Commercial",
        "Turizm": "Tourism",
        "Eğitim": "Education",
        "Sağlık": "Health"
      },
      view_modes: {
        list: "LIST",
        map: "MAP"
      },
      gallery_title: "Media Gallery",
      loading_map: "LOADING MAP DATA...",
      modal: {
        details_title: "Project Facts",
        client: "Client",
        area: "Total Area",
        year_status: "Year / Status",
        btn_offer: "Request Offer",
        vision_title: "Project Vision",
        challenge: "Challenge",
        solution: "Solution",
        tech_specs: "Technical Specs"
      }
    },
    faq_page: {
      header: {
        badge: "Support Center",
        title_1: "HOW CAN WE",
        title_2: "HELP YOU?",
        subtitle: "We have compiled the most frequently asked questions about our projects, processes, and technical details for you.",
        search_placeholder: "Ex: Earthquake regulations, payment plan..."
      },
      categories: [
        {
          title: "CORPORATE",
          items: [
            { q: "Does Monolith only serve in Istanbul?", a: "Although our headquarters is in Maslak, Istanbul, we provide services throughout Turkey and in selected international projects (Turkic Republics, Balkans). We ensure the same quality standards in every location with our logistics network and mobile site teams." },
            { q: "What types of projects do you undertake?", a: "Our areas of expertise are gathered under three main headings: \n1. **High-Rise Buildings and Residential Complexes** \n2. **Industrial Facilities (Factories, Warehouses, Logistics Centers)** \n3. **Commercial Buildings (Malls, Office Plazas, Hotels)**. \nWe also have a special department for the retrofitting and renovation of existing structures." },
            { q: "Can we visit your reference projects?", a: "Absolutely. In accordance with our transparency principle, you can visit our completed projects or (within security protocols) ongoing construction sites by appointment. Our customer representative will accompany you." }
          ]
        },
        {
          title: "CONSTRUCTION & ENGINEERING",
          items: [
            { q: "What standards do you apply for earthquake safety?", a: "Our projects are designed with performance targets **above** the 2018 Turkey Building Earthquake Code. As a standard, we use **C35/C40 class concrete** and **B420C ribbed seismic steel**. According to soil survey reports, we do not start the foundation without soil improvement with **Jet Grout** or **Bored Piles** in areas deemed necessary." },
            { q: "How long does the rough construction process take?", a: "The duration varies according to the square meters of the project, the number of floors, and ground conditions. However, on average:\n* **Villa/Detached:** 4-6 Months\n* **Mid-Scale Apartment:** 8-12 Months\n* **Industrial Facility:** 6-9 Months\nAs Monolith, we guarantee delivery on the committed date and add penalty clauses to the contract for delays." },
            { q: "Which building inspection firms do you work with?", a: "We work with independent building inspection firms appointed by the Ministry of Environment and Urbanization. Additionally, our internal 'Quality Control (QC)' team checks every concrete pour and iron reinforcement independently of the building inspection." }
          ]
        },
        {
          title: "INTERIOR ARCHITECTURE & DESIGN",
          items: [
            { q: "Do you have turnkey decoration services?", a: "Yes. With our 'Design & Build' model, we manage the entire process from rough construction to fine workmanship, from furniture selection to lighting design, from a single hand. This prevents communication disconnects between the architect and the master and budget deviations." },
            { q: "Do we have the right to revision in the design process?", a: "Of course. You have **unlimited** revisions during the concept design phase and **3 comprehensive revisions** during the implementation project phase. Our goal is to deliver the space of your dreams with 100% satisfaction." },
            { q: "How do we make material selections?", a: "You can make selections with our architects in our extensive material library (parquet, ceramic, paint, fabric samples) located in our office. We also organize joint visits to the showrooms of our solution partners (Vitra, Çanakkale Seramik, Jotun, etc.)." }
          ]
        },
        {
          title: "PROCESS & LEGAL",
          items: [
            { q: "Who follows up on license and occupancy procedures?", a: "All official processes (Municipality license, ISKI, Electricity subscriptions, Fire brigade report, and Occupancy permit) are carried out by our company's **Official Affairs Department** on your behalf by proxy. You just have to receive your key." },
            { q: "What are your payment terms?", a: "Our general payment plan is as follows: \n* **30% Down Payment** (At Contract Signing)\n* **40% Progress Payment** (Monthly payments as construction progresses)\n* **30% Delivery** (At turnkey delivery)\nHowever, we can also evaluate term payment or barter options depending on the scale of the project." }
          ]
        }
      ],
      no_results: {
        title: "No Results Found",
        desc: "We couldn't find a question related to. You can try a different word or contact us directly."
      },
      cta: {
        title: "DIDN'T FIND YOUR ANSWER?",
        desc: "Our expert team is ready to answer your project-specific questions. Write to us, we will get back to you within 2 hours.",
        btn_write: "Write to Us",
        btn_call: "Call Us"
      }
    },
    technical_page: {
      header: {
        badge: "Knowledge Center",
        title_1: "TECHNICAL DETAILS",
        title_2: "& ANALYSIS",
        desc: "Follow construction technologies, engineering approaches, and sectoral developments from the pen of our expert staff."
      },
      ui: {
        read_time: "min read",
        share: "Share",
        save: "Save",
        print: "Print",
        author_title: "Author"
      },
      posts: [
        {
          id: 1,
          title: "Seismic Isolator Technologies and Structural Durability",
          excerpt: "A technical review on the capacity of friction pendulum isolators used in modern high-rise buildings to dampen earthquake energy by 80%.",
          date: "JANUARY 12, 2026",
          readTime: "6",
          author: "Zeynep Kaya",
          role: "Chief Engineer",
          category: "Seismic Engineering",
          image: "/foto/photo-1541888946425-d81bb19240f5_q_80_w_1000_auto_format_fit_crop.jpg",
          tags: ["Earthquake", "Concrete", "Safety"],
          content: `
            <p class="text-lg font-medium text-slate-900 mb-6">In traditional building design, the building is expected to withstand earthquake energy. However, seismic isolation technology radically changes this paradigm.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Friction Pendulum Principle</h3>
            <p class="mb-4">The 3rd Generation Seismic Isolators we use in Monolith projects extend the period of the building, transmitting minimum ground acceleration to the structure. This system basically provides:</p>
            <ul class="list-disc pl-6 space-y-2 marker:text-amber-500 mb-8">
              <li><strong>Period Extension:</strong> Pulls the natural vibration period of the structure to the 2.5 - 3.0 second range.</li>
              <li><strong>Energy Damping:</strong> More than 80% of earthquake energy is dampened at the isolator level.</li>
            </ul>
            <div class="bg-slate-100 p-6 rounded-sm border-l-4 border-amber-500 my-8">
              <h4 class="font-bold text-slate-900 mb-2">Technical Note:</h4>
              <p class="text-sm italic">It guarantees that the structure remains at the "Immediate Occupancy" performance level even in earthquakes of 7.5 and above on the Richter scale.</p>
            </div>
          `
        },
        {
          id: 2,
          title: "Cost Optimization with BIM (Building Information Modeling)",
          excerpt: "Creating a digital twin before construction reduces site errors by 40% and has a direct impact on progress payment processes.",
          date: "JANUARY 08, 2026",
          readTime: "8",
          author: "Ahmet Yılmaz",
          role: "Founding Architect",
          category: "Digital Construction",
          image: "/foto/photo-1503387762-592deb58ef4e_q_80_w_1000_auto_format_fit_crop.jpg",
          tags: ["BIM", "Technology", "Efficiency"],
          content: `
            <p class="mb-6">The biggest cost item in the construction sector is not material, but "lack of planning". As Monolith, we solve this problem at its source with <strong>5D BIM</strong> integration.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Clash Detection</h3>
            <p class="mb-4">Thousands of potential errors are detected on the Digital Twin before a single pickaxe is hit:</p>
            <ul class="list-disc pl-6 space-y-2 marker:text-blue-500 mb-8">
              <li>Mechanical and Static clashes.</li>
              <li>Fire installation optimization.</li>
            </ul>
            <p>Solving these errors digitally reduces costs on the site by 40%.</p>
          `
        },
        {
          id: 3,
          title: "Green Buildings: LEED Certification and Sustainable Concrete",
          excerpt: "Next-generation 'Green Concrete' mixes that reduce carbon footprint and facade systems that provide energy efficiency.",
          date: "DECEMBER 24, 2025",
          readTime: "5",
          author: "Mehmet Demir",
          role: "Operations Director",
          category: "Sustainability",
          image: "/foto/photo-1464938050520-ef2270bb8ce8_q_80_w_1000_auto_format_fit_crop.jpg",
          tags: ["LEED", "Environment", "Material"],
          content: `
            <p class="mb-6">Sustainability is not a trend, it is an engineering necessity. "Eco-Crete" technology reduces carbon emissions by 30%.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Grey Water Recovery</h3>
            <p class="mb-4">In our LEED Gold candidate projects, rainwater is treated and used in reservoirs. This system provides 45% annual water savings.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Facade Systems</h3>
            <p>Heating and cooling loads are minimized thanks to Low-E coated glasses.</p>
          `
        }
      ]
    }
  },
  ar: {
    seo: {
      site_name: "مونوليث للهندسة",
      home: {
        title: "نبني هياكل المستقبل | البناء والهندسة",
        desc: "بصفتنا مونوليث، ننتج مشاريع إسكان فاخرة ومنشآت صناعية ومبانٍ تجارية بمعايير عالمية مقرها إسطنبول."
      },
      corporate: {
        title: "معلومات عنا والمؤسسة | مونوليث",
        desc: "نحن نبني الثقة والجودة في قطاع البناء بخبرة 30 عامًا وأكثر من 250 موظفًا خبيرًا."
      },
      projects: {
        title: "مشاريعنا ومحفظة أعمالنا | مونوليث",
        desc: "اكتشف مشاريعنا السكنية والمصانع والساحات التجارية المكتملة والمستمرة."
      },
    },
    hero: {
      badge: "تأسست 2010 • إسطنبول",
      title_main: "MONO",
      title_sub: "LITH.",
      description: "نجمع بين قوة الخرسانة وذكاء الهندسة لنبني مساحات معيشة المستقبل اليوم.",
      btn_explore: "اكتشف المشاريع",
      btn_watch: "فيلم تعريفي",
      video_badge: "مشروع مميز"
    },
    stats: [
      { val: "+30", label: "سنة من الخبرة" },
      { val: "1.2M", label: "م² بناء" },
      { val: "45", label: "موقع نشط" },
      { val: "+250", label: "موظف" },
    ],
    projects_section: {
      badge: "مراجع عالمية",
      title_main: "مشاريع",
      title_sub: "نخبة",
      btn_see_all: "عرض الكل",
      btn_detail: "التفاصيل",
      categories: {
        housing: "سكنية",
        industrial: "صناعية",
        commercial: "تجارية"
      }
    },
    services_section: {
      title_main: "حلول",
      title_sub: "هندسية",
      description: "نتغلب على التحديات الهيكلية المعقدة بتقنيات مبتكرة وأساليب مستدامة.",
      btn_details: "التفاصيل",
      items: [
        { 
          title: "بناء تسليم مفتاح", 
          desc: "إدارة دقيقة لجميع العمليات من تصميم المشروع حتى الإشغال." 
        },
        { 
          title: "المنشآت الصناعية", 
          desc: "هياكل بمعايير الصناعة الثقيلة للمصانع والمستودعات وخطوط الإنتاج." 
        },
        { 
          title: "العمارة والهندسة", 
          desc: "مشاريع تصميم مستدامة تجمع بين الوظيفة والجماليات." 
        }
      ]
    },
    services_page: {
      header: {
        badge: "مجالات التخصص",
        title_main: "إتقان",
        title_sub: "تقني.",
        description: "نحل المشاكل الهندسية المعقدة بمنهجيات مثبتة ميدانيًا وتكامل <span class='text-secondary font-bold'>التكنولوجيا المتقدمة</span>."
      },
      items: [
        {
          label: "المقاولات الإنشائية",
          title: "بناء تسليم مفتاح",
          description: "إدارة المشروع من البداية للنهاية، من اختيار الأرض حتى رخصة الإسكان. الحسابات الإنشائية، أعمال العظم، تشطيبات فئة A+ وهندسة المناظر الطبيعية المستدامة.",
          specs: ["تحليل الكميات والمسح", "إدارة الموقع", "بروتوكولات الصحة والسلامة (HSE)", "ضمان الجودة (QA/QC)", "تكامل BIM", "تحسين التربة الجيوتقنية"]
        },
        {
          label: "صناعي",
          title: "الحلول الصناعية",
          description: "حلول هندسية محسنة للمرافق المعرضة لأحمال ثابتة وديناميكية عالية. أنظمة مناسبة للبنية التحتية للمصانع الذكية.",
          specs: ["أرضيات مدعمة بالألياف", "فولاذ واسع الامتداد", "أنابيب العمليات و HVAC", "بنية تحتية للصناعة 4.0", "تركيب مسبق الصنع", "تحسين اللوجستيات"]
        },
        {
          label: "التحول والتقوية",
          title: "التحول الحضري والتقوية",
          description: "تحديث مخزون المباني الحالي لمعايير TBDY 2018. تدخلات استراتيجية تزيد من سلامة الحياة وقيمة العقار.",
          specs: ["تحليل الأداء (RBTE)", "ألياف الكربون (FRP)", "العزل الزلزالي", "تغليف الخرسانة", "قانون رقم 6306", "مراجعة لزيادة القيمة"]
        },
        {
          label: "الاستشارات",
          title: "إدارة المشاريع والاستشارات",
          description: "مهمة أن نكون العين الفنية في الميدان نيابة عن المستثمر. استشارات احترافية تضمن التوازن الأمثل في مثلث التكلفة والوقت والجودة.",
          specs: ["إدارة التدفق النقدي", "الدفعات المرحلية والحساب النهائي", "المواصفات الفنية", "جدوى الاستثمار", "عقود فيديك (FIDIC)", "تخطيط بريمافيرا"]
        }
      ],
      tech_section: {
        title: "البنية التحتية الرقمية",
        subtitle: "SYSTEM_CORE_MODULES // V.2.4",
        items_desc: [
          "نمذجة معلومات البناء 3D",
          "تخطيط مستوى متقدم",
          "تحليل استاتيكي وديناميكي",
          "كشف التعارضات (Clash Detection)",
          "إدارة ميدانية سحابية",
          "تفصيل فني 2D"
        ]
      },
      cert_section: {
        title: "الجودة والامتثال",
        subtitle: "VERIFIED_PROTOCOLS // SECURE",
        items: [
          { label: "نظام إدارة الجودة", status: "معتمد" },
          { label: "نظام إدارة البيئة", status: "معتمد" },
          { label: "الصحة والسلامة المهنية", status: "معتمد" },
          { label: "البناء المستدام", status: "موثق" }
        ]
      },
      stats_section: {
        items: [
          { label: "إجمالي البناء (م²)", sub: "المنطقة المسلمة" },
          { label: "ساعات عمل بدون حوادث", sub: "معايير السلامة" },
          { label: "مواقع نشطة", sub: "عمليات متزامنة" },
          { label: "تسليم في الوقت المحدد", sub: "إدارة بريمافيرا" }
        ],
        last_update: "آخر تحديث",
        server_status: "حالة الخادم: متصل"
      },
      misc: {
        specs_title: "الكفاءات الفنية"
      }
    },
    contact_page: {
      loading: "جاري الاتصال بالأقمار الصناعية...",
      header: {
        status: "مكتب المشروع نشط",
        title_1: "لنبني",
        title_2: "مشروعك.",
        desc: "اتخذ <span class='text-secondary underline decoration-2 underline-offset-4'>الخطوة الأولى</span> لتحويل هيكل أحلامك إلى حقيقة مع الانضباط الهندسي والرؤية المعمارية."
      },
      sidebar: {
        title: "قاعدة الاتصال",
        subtitle: "تأسست 2010 • المقر الرئيسي مسلك",
        items: {
          hq: { title: "المقر الرئيسي", val: "حي مسلك، شارع بويوك ديري رقم: 12، ساريير/إسطنبول" },
          phone: { title: "خط الهاتف", val: "+90 (212) 345 67 89" },
          email: { title: "البريد الإلكتروني", val: "project@monolith.com.tr" }
        },
        map_badge: "بث مباشر عبر الأقمار الصناعية"
      },
      form: {
        title_main: "نموذج",
        title_sub: "العرض",
        subtitle: "سيقوم فريقنا الفني بالرد عليك خلال 24 ساعة.",
        labels: {
          name: "الاسم واللقب / الشركة",
          phone: "رقم الاتصال",
          email: "عنوان البريد الإلكتروني",
          type: "نوع المشروع",
          budget: "ميزانية الاستثمار",
          message: "ملاحظات المشروع"
        },
        placeholders: {
          name: "مثال: أحمد يلماز",
          phone: "+90 (5XX) ...",
          email: "example@company.com",
          message: "حالة الأرض، طلبات خاصة، تاريخ التسليم، إلخ..."
        },
        project_types: {
          konut: "سكن فاخر",
          endustri: "صناعي",
          donusum: "تقوية وتحديث"
        },
        budget_ranges: ["5-20 مليون ₺", "20-50 مليون ₺", "+50 مليون ₺", "استشارات"],
        submit_btn: "إرسال الطلب"
      }
    },
    career_page: {
      header: {
        badge: "وظائف مونوليث",
        title_1: "ارتقِ",
        title_2: "بإمكانياتك",
        title_3: "إلى القمة.",
        desc: "مونوليث لا تبني المباني فحسب، بل تبني قادة المستقبل أيضاً. أرسل طلبك الآن لتترك بصمة في المشاريع العالمية.",
        tags: ["دوام كامل", "برنامج تدريب", "عمل هجين"]
      },
      form: {
        title: "تقديم عام",
        subtitle: "ستتم إضافة سيرتك الذاتية إلى قاعدة بيانات المواهب لدينا.",
        labels: {
          name: "الاسم واللقب",
          phone: "الهاتف",
          email: "البريد الإلكتروني",
          position: "المنصب / المسمى الوظيفي",
          cv: "تحميل السيرة الذاتية (PDF)"
        },
        placeholders: {
          name: "اسمك الكامل",
          phone: "+90 (5XX)...",
          email: "example@mail.com",
          position: "مثال: مهندس مدني، معماري..."
        },
        upload_text: "انقر لاختيار ملف",
        submit_btn: "إرسال الطلب"
      },
      benefits: {
        title: "لماذا مونوليث؟",
        items: [
          { title: "موجهة نحو الابتكار", desc: "فرصة للعمل بأحدث تقنيات البناء (BIM, IoT)." },
          { title: "تطوير مستمر", desc: "دعم الشهادات وتدريبات الأكاديمية." },
          { title: "ثقافة عالمية", desc: "فرصة للمشاركة في مشاريع دولية والسفر." },
          { title: "مكافأة الأداء", desc: "نظام مكافآت تنافسي مرتبط بنجاح المشروع." }
        ]
      },
      process: {
        title: "عملية التوظيف",
        subtitle: "نظام تقييم شفاف وموجه نحو المواهب.",
        steps: [
          { step: "01", title: "التقديم", desc: "إرسال السيرة الذاتية عبر النموذج." },
          { step: "02", title: "التقييم الأولي", desc: "فحص الكفاءة من قبل فريق الموارد البشرية." },
          { step: "03", title: "المقابلة الفنية", desc: "مقابلة قائمة على المشروع مع مديري الأقسام." },
          { step: "04", title: "العرض", desc: "الاتفاق المتبادل والترحيب بك في عائلة مونوليث." }
        ]
      }
    },
    corporate_page: {
      header: {
        badge: "الهوية المؤسسية",
        title_1: "العمود الفقري",
        title_2: "للبناء.",
        quote: "نحن لا نبني مبانٍ فحسب؛ بل نبني <span class='text-secondary font-bold underline decoration-secondary/30 underline-offset-4 decoration-2'>الثقة</span> و <span class='text-blue-700 font-bold'>المستقبل</span>."
      },
      story: {
        year_label: "البداية",
        title_1: "انطلقنا",
        title_2: "لرفع",
        title_3: "المعايير.",
        desc: "بدلاً من الكتل الخرسانية العادية، حلمنا بهياكل يلتقي فيها <span class='font-bold text-blue-900'>العبقرية الهندسية</span> بالجماليات. تحولت مونوليث من مكتب هندسي صغير إلى هيكل عملاق يوقع على أرقى مشاريع البلاد اليوم.",
        quote_small: "لا تتحدى الطبيعة، بل انسجم معها.",
        sign_role: "رئيس مجلس الإدارة"
      },
      stats: [
        { val: "14", label: "سنة خبرة" },
        { val: "+50", label: "مشروع مكتمل" },
        { val: "81", label: "مدينة نشطة" },
        { val: "+200", label: "موظف خبير" }
      ],
      timeline: {
        badge: "رحلة نجاحنا",
        title: "المحطات الرئيسية",
        items: [
          { year: "2010", title: "وضع الأساسات", desc: "تأسست كمكتب هندسي صغير في مسلك، إسطنبول." },
          { year: "2013", title: "أول مشروع كبير", desc: "أتممنا بنجاح مشروع 'وادي الحياة' المكون من 100 وحدة سكنية." },
          { year: "2016", title: "الانطلاقة الصناعية", desc: "سلمنا أول بناء مصنع لنا في منطقة جبزي الصناعية المنظمة." },
          { year: "2019", title: "شهادة ISO", desc: "ارتقينا بأنظمة إدارة الجودة لدينا إلى المعايير الدولية (ISO 9001)." },
          { year: "2022", title: "شراكات عالمية", desc: "أقمنا شراكات حلول استراتيجية مع مكاتب معمارية مقرها أوروبا." },
          { year: "2024", title: "تكامل التكنولوجيا", desc: "تحولنا إلى نظام BIM (نمذجة معلومات البناء) بنسبة 100% في جميع مشاريعنا." }
        ]
      },
      values: [
        { title: "صفر أخطاء", desc: "ليس لدينا تسامح في الحسابات الإنشائية وسلامة العمل." },
        { title: "الاستدامة", desc: "مبانٍ خضراء حاصلة على شهادة LEED للأجيال القادمة." },
        { title: "الثقة", desc: "إدارة عمليات شفافة وتسليم في التاريخ المتعهد به." },
        { title: "المتانة", desc: "فئة خرسانة C35+ ومعيار حديد مضلع." }
      ],
      partners: {
        badge: "تعاون قوي",
        title_1: "عمالقة",
        title_2: "القطاع",
        testimonial: {
          quote: "العمل مع مونوليث كان بمثابة <span class='font-bold text-blue-900 bg-blue-50 px-2 rounded'>شراكة هندسية</span> أكثر من كونه مشروع بناء. نهجهم الموجه نحو الحلول في أوقات الأزمات يجعلهم فريدين في القطاع.",
          role: "الرئيس التنفيذي، البوسفور للاستثمار العقاري"
        }
      },
      team: {
        badge: "القيادة",
        title_1: "الكادر",
        title_2: "الإداري",
        members: [
          { role: "المعمار المؤسس", bio: "30 عاماً من الخبرة. مدافع عن لغة التصميم السلطوية والعمارة المستدامة." },
          { role: "كبير المهندسين", bio: "المسؤول عن سلامة المشاريع الإنشائية، خبير في هندسة الزلازل وميكانيكا التربة." },
          { role: "مدير العمليات", bio: "القوة الاستراتيجية وراء العمليات الميدانية، إدارة الميزانية، والتسليم في الوقت المحدد." }
        ]
      },
      safety: {
        badge: "تمت الموافقة على بروتوكول السلامة",
        title_1: "الامتثال 100%",
        title_2: "لمعايير الزلازل",
        desc: "يتم نمذجة كل هيكل نبنيه وفقاً لأشد السيناريوهات المحتملة. <span class='font-bold text-blue-900 bg-blue-50 px-2 mx-1 rounded'>خرسانة C35+</span>، <span class='font-bold text-blue-900 bg-blue-50 px-2 mx-1 rounded'>عوازل زلزالية</span> و <span class='font-bold text-blue-900 bg-blue-50 px-2 mx-1 rounded'>حديد مضلع</span> هي معاييرنا.",
        tags: ["مسح التربة", "تحليل إنشائي", "مخمدات زلزالية"]
      }
    },
    projects_page: {
      header: {
        badge: "المحفظة",
        title_1: "مشاريع",
        title_2: "مختارة."
      },
      filters: {
        "Tümü": "الكل",
        "Konut": "سكنية",
        "Endüstriyel": "صناعية",
        "Ticari": "تجارية",
        "Turizm": "سياحة",
        "Eğitim": "تعليم",
        "Sağlık": "صحة"
      },
      view_modes: {
        list: "قائمة",
        map: "خريطة"
      },
      gallery_title: "معرض الوسائط",
      loading_map: "جاري تحميل بيانات الخريطة...",
      modal: {
        details_title: "حقائق المشروع",
        client: "العميل",
        area: "المساحة الإجمالية",
        year_status: "السنة / الحالة",
        btn_offer: "اطلب عرضاً",
        vision_title: "رؤية المشروع",
        challenge: "التحدي",
        solution: "الحل",
        tech_specs: "المواصفات الفنية"
      }
    },
    faq_page: {
      header: {
        badge: "مركز الدعم",
        title_1: "كيف يمكننا",
        title_2: "مساعدتك؟",
        subtitle: "لقد قمنا بتجميع الأسئلة الأكثر شيوعاً حول مشاريعنا، عملياتنا، والتفاصيل الفنية من أجلك.",
        search_placeholder: "مثال: لوائح الزلازل، خطة الدفع..."
      },
      categories: [
        {
          title: "مؤسسي",
          items: [
            { q: "هل تقدم مونوليث خدماتها في إسطنبول فقط؟", a: "على الرغم من أن مقرنا الرئيسي في مسلك، إسطنبول، إلا أننا نقدم خدماتنا في جميع أنحاء تركيا وفي مشاريع دولية مختارة (الجمهوريات التركية، البلقان). نضمن نفس معايير الجودة في كل موقع بفضل شبكتنا اللوجستية وفرقنا الميدانية المتنقلة." },
            { q: "ما هي أنواع المشاريع التي تتولونها؟", a: "تتجمع مجالات خبرتنا تحت ثلاثة عناوين رئيسية: \n1. **المباني الشاهقة والمجمعات السكنية** \n2. **المنشآت الصناعية (المصانع، المستودعات، المراكز اللوجستية)** \n3. **المباني التجارية (المولات، ساحات المكاتب، الفنادق)**. \nلدينا أيضاً قسم خاص لتقوية وتجديد الهياكل القائمة." },
            { q: "هل يمكننا زيارة مشاريعكم المرجعية؟", a: "بالتأكيد. وفقاً لمبدأ الشفافية لدينا، يمكنك زيارة مشاريعنا المكتملة أو (ضمن بروتوكولات الأمن) مواقع البناء الجارية عن طريق تحديد موعد. سيرافقك ممثل العملاء لدينا." }
          ]
        },
        {
          title: "البناء والهندسة",
          items: [
            { q: "ما هي المعايير التي تطبقونها لسلامة الزلازل؟", a: "يتم تصميم مشاريعنا بأهداف أداء **أعلى** من كود البناء التركي للزلازل 2018. كمعيار، نستخدم **خرسانة فئة C35/C40** و **حديد زلزالي مضلع B420C**. وفقاً لتقارير مسح التربة، لا نبدأ الأساس دون تحسين التربة باستخدام **Jet Grout** أو **الخوازيق المحفورة** في المناطق التي نرى ذلك ضرورياً فيها." },
            { q: "كم تستغرق عملية البناء العظم؟", a: "تختلف المدة حسب مساحة المشروع، عدد الطوابق، وظروف الأرض. ومع ذلك، في المتوسط:\n* **فيلا/مستقل:** 4-6 أشهر\n* **شقة متوسطة الحجم:** 8-12 شهراً\n* **منشأة صناعية:** 6-9 أشهر\nبصفتنا مونوليث، نضمن التسليم في التاريخ المتعهد به ونضيف شروطاً جزائية للعقد في حال التأخير." },
            { q: "مع أي شركات تفتيش بناء تعملون؟", a: "نعمل مع شركات تفتيش بناء مستقلة معينة من قبل وزارة البيئة والتحضر. بالإضافة إلى ذلك، يقوم فريق 'مراقبة الجودة (QC)' الداخلي لدينا بفحص كل صب خرسانة وتسليح حديد بشكل مستقل عن تفتيش البناء." }
          ]
        },
        {
          title: "التصميم الداخلي والديكور",
          items: [
            { q: "هل لديكم خدمات ديكور تسليم مفتاح؟", a: "نعم. من خلال نموذج 'التصميم والبناء' الخاص بنا، ندير العملية بأكملها من البناء العظم إلى التشطيبات الدقيقة، ومن اختيار الأثاث إلى تصميم الإضاءة، من يد واحدة. هذا يمنع انقطاع التواصل بين المعماري والحرفي وانحرافات الميزانية." },
            { q: "هل لدينا الحق في التعديل أثناء عملية التصميم؟", a: "بالطبع. لديك حق تعديل **غير محدود** خلال مرحلة التصميم المفاهيمي و **3 تعديلات شاملة** خلال مرحلة مشروع التنفيذ. هدفنا هو تسليم مساحة أحلامك برضا 100%." },
            { q: "كيف نختار المواد؟", a: "يمكنكم الاختيار مع مهندسينا المعماريين في مكتبة المواد الواسعة لدينا (باركيه، سيراميك، دهان، عينات أقمشة) الموجودة في مكتبنا. ننظم أيضاً زيارات مشتركة لمعارض شركاء الحلول لدينا." }
          ]
        },
        {
          title: "العمليات والقانونية",
          items: [
            { q: "من يتابع إجراءات الرخص والإسكان؟", a: "يتم تنفيذ جميع العمليات الرسمية (رخصة البلدية، اشتراكات المياه والكهرباء، تقرير الإطفاء، وتصريح الإسكان) من قبل **قسم الشؤون الرسمية** في شركتنا نيابة عنكم بموجب وكالة. ما عليك سوى استلام مفتاحك." },
            { q: "ما هي شروط الدفع لديكم؟", a: "خطة الدفع العامة لدينا هي كما يلي: \n* **30% دفعة أولى** (عند توقيع العقد)\n* **40% دفعات مرحلية** (دفعات شهرية مع تقدم البناء)\n* **30% عند التسليم** (عند تسليم المفتاح)\nومع ذلك، يمكننا أيضاً تقييم خيارات الدفع الآجل أو المقايضة حسب حجم المشروع." }
          ]
        }
      ],
      no_results: {
        title: "لم يتم العثور على نتائج",
        desc: "لم نتمكن من العثور على سؤال متعلق بـ. يمكنك تجربة كلمة مختلفة أو الاتصال بنا مباشرة."
      },
      cta: {
        title: "لم تجد إجابتك؟",
        desc: "فريقنا الخبير مستعد للإجابة على أسئلتك الخاصة بالمشروع. اكتب لنا، وسنرد عليك في غضون ساعتين كحد أقصى.",
        btn_write: "اكتب لنا",
        btn_call: "اتصل بنا"
      }
    },
    technical_page: {
      header: {
        badge: "مركز المعرفة",
        title_1: "تفاصيل تقنية",
        title_2: "وتحليلات",
        desc: "تابع تقنيات البناء، المناهج الهندسية، والتطورات القطاعية بقلم كادرنا الخبير."
      },
      ui: {
        read_time: "دقيقة قراءة",
        share: "مشاركة",
        save: "حفظ",
        print: "طباعة",
        author_title: "الكاتب"
      },
      posts: [
        {
          id: 1,
          title: "تقنيات العزل الزلزالي والمتانة الهيكلية",
          excerpt: "مراجعة تقنية حول قدرة العوازل من نوع البندول الاحتكاكي المستخدمة في المباني الشاهقة الحديثة على تخميد طاقة الزلزال بنسبة 80%.",
          date: "12 يناير 2026",
          readTime: "6",
          author: "زينب كايا",
          role: "كبير المهندسين",
          category: "هندسة الزلازل",
          image: "/foto/photo-1541888946425-d81bb19240f5_q_80_w_1000_auto_format_fit_crop.jpg",
          tags: ["زلزال", "خرسانة مسلحة", "أمان"],
          content: `
            <p class="text-lg font-medium text-slate-900 mb-6">في تصميم المباني التقليدي، يُتوقع من المبنى أن يقاوم طاقة الزلزال. ومع ذلك، فإن تقنية العزل الزلزالي تغير هذا النموذج بشكل جذري.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">مبدأ البندول الاحتكاكي (Friction Pendulum)</h3>
            <p class="mb-4">العوازل الزلزالية من الجيل الثالث التي نستخدمها في مشاريع مونوليث تطيل فترة اهتزاز المبنى، مما ينقل الحد الأدنى من تسارع الأرض إلى الهيكل. يوفر هذا النظام بشكل أساسي:</p>
            <ul class="list-disc pl-6 space-y-2 marker:text-amber-500 mb-8">
              <li><strong>إطالة الفترة:</strong> تسحب فترة الاهتزاز الطبيعي للهيكل إلى نطاق 2.5 - 3.0 ثانية.</li>
              <li><strong>تخميد الطاقة:</strong> يتم تخميد أكثر من 80% من طاقة الزلزال عند مستوى العازل.</li>
            </ul>
            <div class="bg-slate-100 p-6 rounded-sm border-l-4 border-amber-500 my-8">
              <h4 class="font-bold text-slate-900 mb-2">ملاحظة فنية:</h4>
              <p class="text-sm italic">يضمن بقاء الهيكل عند مستوى أداء "الإشغال الفوري" حتى في الزلازل بقوة 7.5 وما فوق على مقياس ريختر.</p>
            </div>
          `
        },
        {
          id: 2,
          title: "تحسين التكلفة باستخدام نمذجة معلومات البناء (BIM)",
          excerpt: "إنشاء توأم رقمي قبل البناء يقلل من أخطاء الموقع بنسبة 40% وله تأثير مباشر على عمليات الدفعات المرحلية.",
          date: "08 يناير 2026",
          readTime: "8",
          author: "أحمد يلماز",
          role: "المعمار المؤسس",
          category: "البناء الرقمي",
          image: "/foto/photo-1503387762-592deb58ef4e_q_80_w_1000_auto_format_fit_crop.jpg",
          tags: ["BIM", "تكنولوجيا", "كفاءة"],
          content: `
            <p class="mb-6">أكبر بند تكلفة في قطاع البناء ليس المواد، بل "نقص التخطيط". بصفتنا مونوليث، نحل هذه المشكلة من مصدرها من خلال تكامل <strong>5D BIM</strong>.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">كشف التعارضات (Clash Detection)</h3>
            <p class="mb-4">يتم اكتشاف آلاف الأخطاء المحتملة على التوأم الرقمي قبل ضرب معول واحد:</p>
            <ul class="list-disc pl-6 space-y-2 marker:text-blue-500 mb-8">
              <li>التعارضات الميكانيكية والإنشائية.</li>
              <li>تحسين تمديدات الحريق.</li>
            </ul>
            <p>حل هذه الأخطاء رقميًا يقلل من التكاليف في الموقع بنسبة 40%.</p>
          `
        },
        {
          id: 3,
          title: "المباني الخضراء: شهادة LEED والخرسانة المستدامة",
          excerpt: "خلطات 'الخرسانة الخضراء' من الجيل الجديد التي تقلل من البصمة الكربونية وأنظمة الواجهات التي توفر كفاءة الطاقة.",
          date: "24 ديسمبر 2025",
          readTime: "5",
          author: "محمد دمير",
          role: "مدير العمليات",
          category: "الاستدامة",
          image: "/foto/photo-1464938050520-ef2270bb8ce8_q_80_w_1000_auto_format_fit_crop.jpg",
          tags: ["LEED", "بيئة", "مواد"],
          content: `
            <p class="mb-6">الاستدامة ليست اتجاهاً، بل هي ضرورة هندسية. تقنية "Eco-Crete" تقلل من انبعاثات الكربون بنسبة 30%.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">استعادة المياه الرمادية</h3>
            <p class="mb-4">في مشاريعنا المرشحة لشهادة LEED الذهبية، يتم معالجة مياه الأمطار واستخدامها في الخزانات. يوفر هذا النظام 45% من المياه سنوياً.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">أنظمة الواجهات</h3>
            <p>يتم تقليل أحمال التدفئة والتبريد بفضل الزجاج المطلي بطبقة Low-E.</p>
          `
        }
      ]
    }
  },
  ru: {
    seo: {
      site_name: "MONOLITH Engineering",
      home: {
        title: "Мы строим здания будущего | Строительство и Инжиниринг",
        desc: "Компания Monolith, базирующаяся в Стамбуле, реализует проекты элитного жилья, промышленных объектов и коммерческих зданий по мировым стандартам."
      },
      corporate: {
        title: "О нас и Корпоративная информация | MONOLITH",
        desc: "Мы строим доверие и качество в строительном секторе благодаря 30-летнему опыту и более чем 250 экспертам."
      },
      projects: {
        title: "Наши проекты и Портфолио | MONOLITH",
        desc: "Ознакомьтесь с нашими завершенными и текущими проектами элитного жилья, фабрик и бизнес-центров."
      },
    },
    hero: {
      badge: "Осн. 2010 • Стамбул",
      title_main: "MONO",
      title_sub: "LITH.",
      description: "Объединяя силу бетона и инженерный ум, мы строим жилые пространства будущего уже сегодня.",
      btn_explore: "Наши проекты",
      btn_watch: "Промо-видео",
      video_badge: "Избранный проект"
    },
    stats: [
      { val: "30+", label: "ЛЕТ ОПЫТА" },
      { val: "1.2M", label: "М² СТРОИТЕЛЬСТВА" },
      { val: "45", label: "АКТИВНЫХ ОБЪЕКТОВ" },
      { val: "250+", label: "СОТРУДНИКОВ" },
    ],
    projects_section: {
      badge: "Глобальные референсы",
      title_main: "ЭЛИТНЫЕ",
      title_sub: "ПРОЕКТЫ",
      btn_see_all: "Смотреть все",
      btn_detail: "Детали",
      categories: {
        housing: "ЖИЛЫЕ",
        industrial: "ПРОМЫШЛЕННЫЕ",
        commercial: "КОММЕРЧЕСКИЕ"
      }
    },
    services_section: {
      title_main: "ИНЖЕНЕРНЫЕ",
      title_sub: "РЕШЕНИЯ",
      description: "Мы преодолеваем сложные структурные задачи с помощью инновационных технологий и устойчивых методов.",
      btn_details: "Подробнее",
      items: [
        { 
          title: "Строительство под ключ", 
          desc: "Тщательное управление всеми процессами от проектирования до сдачи в эксплуатацию." 
        },
        { 
          title: "Промышленные объекты", 
          desc: "Сооружения по стандартам тяжелой промышленности для фабрик, складов и производственных линий." 
        },
        { 
          title: "Архитектура и Инжиниринг", 
          desc: "Проекты устойчивого дизайна, объединяющие функциональность и эстетику." 
        }
      ]
    },
    services_page: {
      header: {
        badge: "ОБЛАСТИ ЭКСПЕРТИЗЫ",
        title_main: "ТЕХНИЧЕСКОЕ",
        title_sub: "МАСТЕРСТВО.",
        description: "Мы решаем сложные инженерные задачи с помощью проверенных на практике методологий и интеграции <span class='text-secondary font-bold'>передовых технологий</span>."
      },
      items: [
        {
          label: "СТРОИТЕЛЬНЫЙ ПОДРЯД",
          title: "Строительство под ключ",
          description: "Управление проектом от выбора земельного участка до получения разрешения на эксплуатацию. Статические расчеты, черновое строительство, отделка класса А+ и устойчивая ландшафтная архитектура.",
          specs: ["Анализ объемов и сметы", "Управление строительной площадкой", "Протоколы ОТ и ТБ (HSE)", "Обеспечение качества (QA/QC)", "Интеграция BIM", "Геотехническое улучшение грунта"]
        },
        {
          label: "ПРОМЫШЛЕННОСТЬ",
          title: "Промышленные решения",
          description: "Оптимизированные инженерные решения для объектов, подверженных высоким статическим и динамическим нагрузкам. Системы, подходящие для инфраструктуры умных фабрик (Smart Factory).",
          specs: ["Полы, армированные фиброй", "Широкопролетные стальные конструкции", "HVAC и технологические трубопроводы", "Инфраструктура Индустрии 4.0", "Сборный монтаж", "Оптимизация логистики"]
        },
        {
          label: "РЕНОВАЦИЯ И УСИЛЕНИЕ",
          title: "Городская реновация и усиление",
          description: "Модернизация существующего жилого фонда до стандартов TBDY 2018. Стратегические вмешательства, максимизирующие безопасность жизни и повышающие стоимость недвижимости.",
          specs: ["Анализ производительности (RBTE)", "Углеродное волокно (FRP)", "Сейсмическая изоляция", "Усиление железобетона", "Закон № 6306", "Ревизия для повышения стоимости"]
        },
        {
          label: "КОНСАЛТИНГ",
          title: "Управление проектами и консалтинг",
          description: "Миссия быть техническим глазом инвестора на объекте. Профессиональный консалтинг, обеспечивающий оптимальный баланс в треугольнике стоимость, время и качество.",
          specs: ["Управление денежными потоками", "Промежуточные платежи и окончательный расчет", "Техническое задание", "Инвестиционное ТЭО", "Контракты FIDIC", "Планирование в Primavera"]
        }
      ],
      tech_section: {
        title: "ЦИФРОВАЯ ИНФРАСТРУКТУРА",
        subtitle: "SYSTEM_CORE_MODULES // V.2.4",
        items_desc: [
          "3D Информационное моделирование зданий",
          "Продвинутое планирование",
          "Статический и динамический анализ",
          "Проверка на коллизии (Clash Detect)",
          "Облачное управление площадкой",
          "2D Техническая детализация"
        ]
      },
      cert_section: {
        title: "КАЧЕСТВО И СООТВЕТСТВИЕ",
        subtitle: "VERIFIED_PROTOCOLS // SECURE",
        items: [
          { label: "СИСТЕМА МЕНЕДЖМЕНТА КАЧЕСТВА", status: "УТВЕРЖДЕНО" },
          { label: "СИСТЕМА ЭКОЛОГИЧЕСКОГО МЕНЕДЖМЕНТА", status: "УТВЕРЖДЕНО" },
          { label: "ОХРАНА ТРУДА И ТЕХНИКА БЕЗОПАСНОСТИ", status: "УТВЕРЖДЕНО" },
          { label: "УСТОЙЧИВОЕ СТРОИТЕЛЬСТВО", status: "СЕРТИФИЦИРОВАНО" }
        ]
      },
      stats_section: {
        items: [
          { label: "ОБЩЕЕ СТРОИТЕЛЬСТВО (м²)", sub: "Сданная площадь" },
          { label: "РАБОЧИЕ ЧАСЫ БЕЗ АВАРИЙ", sub: "Стандарты ОТ и ТБ" },
          { label: "АКТИВНЫЕ ОБЪЕКТЫ", sub: "Одновременные операции" },
          { label: "СДАЧА В СРОК", sub: "Управление Primavera" }
        ],
        last_update: "ПОСЛЕДНЕЕ_ОБНОВЛЕНИЕ",
        server_status: "СТАТУС_СЕРВЕРА: ОНЛАЙН"
      },
      misc: {
        specs_title: "Технические компетенции"
      }
    },
    contact_page: {
      loading: "СПУТНИКОВАЯ_СВЯЗЬ...",
      header: {
        status: "Проектный офис активен",
        title_1: "ДАВАЙТЕ ПОСТРОИМ",
        title_2: "ВАШ ПРОЕКТ.",
        desc: "Сделайте <span class='text-secondary underline decoration-2 underline-offset-4'>первый шаг</span>, чтобы превратить структуру вашей мечты в реальность с инженерной дисциплиной и архитектурным видением."
      },
      sidebar: {
        title: "БАЗА СВЯЗИ",
        subtitle: "ОСН. 2010 • ШТАБ-КВАРТИРА МАСЛАК",
        items: {
          hq: { title: "ГЛАВНЫЙ ОФИС", val: "Maslak Mah. Büyükdere Cad. No:12, Sarıyer/İstanbul" },
          phone: { title: "ТЕЛЕФОННАЯ ЛИНИЯ", val: "+90 (212) 345 67 89" },
          email: { title: "E-MAIL", val: "proje@monolith.com.tr" }
        },
        map_badge: "ПРЯМАЯ СПУТНИКОВАЯ ТРАНСЛЯЦИЯ"
      },
      form: {
        title_main: "ФОРМА",
        title_sub: "ПРЕДЛОЖЕНИЯ",
        subtitle: "Наша техническая команда ответит вам в течение 24 часов.",
        labels: {
          name: "Имя Фамилия / Компания",
          phone: "Контактный номер",
          email: "Электронная почта",
          type: "Типология проекта",
          budget: "Инвестиционный бюджет",
          message: "Примечания к проекту"
        },
        placeholders: {
          name: "Например: Иван Петров",
          phone: "+90 (5XX) ...",
          email: "example@company.com",
          message: "Состояние участка, особые пожелания, дата сдачи и т.д..."
        },
        project_types: {
          konut: "Элитное жилье",
          endustri: "Промышленный",
          donusum: "Усиление"
        },
        budget_ranges: ["5-20 Млн ₺", "20-50 Млн ₺", "Более 50 Млн ₺", "Консалтинг"],
        submit_btn: "Отправить заявку"
      }
    },
    career_page: {
      header: {
        badge: "Карьера в Monolith",
        title_1: "РАСКРОЙТЕ СВОЙ",
        title_2: "ПОТЕНЦИАЛ",
        title_3: "ДО ВЕРШИН.",
        desc: "Monolith строит не только здания, но и будущих лидеров. Отправьте заявку прямо сейчас, чтобы оставить след в глобальных проектах.",
        tags: ["Полная занятость", "Программа стажировки", "Гибридная работа"]
      },
      form: {
        title: "ОБЩАЯ ЗАЯВКА",
        subtitle: "Ваше резюме будет добавлено в наш кадровый резерв.",
        labels: {
          name: "Имя Фамилия",
          phone: "Телефон",
          email: "E-Mail",
          position: "Должность / Титул",
          cv: "Загрузить CV (PDF)"
        },
        placeholders: {
          name: "Ваше Имя и Фамилия",
          phone: "+90 (5XX)...",
          email: "example@mail.com",
          position: "Напр.: Инженер-строитель, Архитектор..."
        },
        upload_text: "Нажмите, чтобы выбрать файл",
        submit_btn: "Отправить заявку"
      },
      benefits: {
        title: "ПОЧЕМУ MONOLITH?",
        items: [
          { title: "Ориентация на инновации", desc: "Возможность работать с новейшими строительными технологиями (BIM, IoT)." },
          { title: "Постоянное развитие", desc: "Поддержка сертификации и обучение в академии." },
          { title: "Глобальная культура", desc: "Возможность участия в международных проектах и командировок." },
          { title: "Премия за результат", desc: "Конкурентная система премий, привязанная к успеху проекта." }
        ]
      },
      process: {
        title: "ПРОЦЕСС НАЙМА",
        subtitle: "Наша прозрачная и ориентированная на таланты система оценки.",
        steps: [
          { step: "01", title: "Заявка", desc: "Отправка резюме через форму." },
          { step: "02", title: "Предварительная оценка", desc: "Скрининг компетенций нашей HR-командой." },
          { step: "03", title: "Техническое интервью", desc: "Собеседование с руководителями отделов на основе проектов." },
          { step: "04", title: "Предложение", desc: "Взаимное согласие и добро пожаловать в семью Monolith." }
        ]
      }
    },
    corporate_page: {
      header: {
        badge: "Корпоративная идентичность",
        title_1: "ПОЗВОНОЧНИК",
        title_2: "СТРОИТЕЛЬСТВА.",
        quote: "Мы не просто строим здания; мы строим <span class='text-secondary font-bold underline decoration-secondary/30 underline-offset-4 decoration-2'>доверие</span> и <span class='text-blue-700 font-bold'>будущее</span>."
      },
      story: {
        year_label: "НАЧАЛО",
        title_1: "МЫ ОТПРАВИЛИСЬ В ПУТЬ,",
        title_2: "ЧТОБЫ ПОВЫСИТЬ",
        title_3: "СТАНДАРТЫ.",
        desc: "Вместо обычных бетонных блоков мы мечтали о сооружениях, где <span class='font-bold text-blue-900'>инженерный гений</span> встречается с эстетикой. Monolith превратился из небольшого инженерного бюро в гигантскую структуру, подписывающую самые престижные проекты страны.",
        quote_small: "Не бросай вызов природе, гармонируй с ней.",
        sign_role: "ПРЕДСЕДАТЕЛЬ СОВЕТА ДИРЕКТОРОВ"
      },
      stats: [
        { val: "14", label: "ЛЕТ ОПЫТА" },
        { val: "50+", label: "ЗАВЕРШЕННЫХ ПРОЕКТОВ" },
        { val: "81", label: "ГОРОД ДЕЯТЕЛЬНОСТИ" },
        { val: "200+", label: "ЭКСПЕРТОВ" }
      ],
      timeline: {
        badge: "Наш путь успеха",
        title: "ВЕХИ РАЗВИТИЯ",
        items: [
          { year: "2010", title: "Заложен фундамент", desc: "Мы были основаны как небольшое инженерное бюро в Маслаке, Стамбул." },
          { year: "2013", title: "Первый крупный проект", desc: "Мы успешно завершили проект 'Vadi Yaşam' на 100 квартир." },
          { year: "2016", title: "Промышленный прорыв", desc: "Мы сдали строительство нашей первой фабрики в Организованной промышленной зоне Гебзе." },
          { year: "2019", title: "Сертификация ISO", desc: "Мы перевели наши системы управления качеством на международные стандарты (ISO 9001)." },
          { year: "2022", title: "Глобальные партнерства", desc: "Мы создали стратегические партнерства с архитектурными бюро, базирующимися в Европе." },
          { year: "2024", title: "Технологическая интеграция", desc: "Мы перешли на 100% использование системы BIM (Информационное моделирование зданий) во всех наших проектах." }
        ]
      },
      values: [
        { title: "Ноль ошибок", desc: "У нас нет толерантности к ошибкам в статических расчетах и безопасности труда." },
        { title: "Устойчивость", desc: "Зеленые здания с сертификатом LEED для будущих поколений." },
        { title: "Доверие", desc: "Прозрачное управление процессами и сдача в обещанный срок." },
        { title: "Прочность", desc: "Класс бетона C35+ и стандарт ребристой стали." }
      ],
      partners: {
        badge: "Сильное сотрудничество",
        title_1: "ГИГАНТЫ",
        title_2: "СЕКТОРА",
        testimonial: {
          quote: "Работа с Monolith была скорее <span class='font-bold text-blue-900 bg-blue-50 px-2 rounded'>инженерным партнерством</span>, чем строительным проектом. Их подход, ориентированный на решение проблем в кризисные моменты, делает их уникальными в секторе.",
          role: "CEO, Bosphorus GYO"
        }
      },
      team: {
        badge: "Руководство",
        title_1: "УПРАВЛЕНЧЕСКИЙ",
        title_2: "СОСТАВ",
        members: [
          { role: "АРХИТЕКТОР-ОСНОВАТЕЛЬ", bio: "30 лет опыта. Сторонник авторитарного языка дизайна и устойчивой архитектуры." },
          { role: "ГЛАВНЫЙ ИНЖЕНЕР", bio: "Ответственный за безопасность статических проектов, эксперт по сейсмостойкому строительству и механике грунтов." },
          { role: "ОПЕРАЦИОННЫЙ ДИРЕКТОР", bio: "Стратегическая сила, стоящая за полевыми операциями, управлением бюджетом и своевременной сдачей." }
        ]
      },
      safety: {
        badge: "ПРОТОКОЛ БЕЗОПАСНОСТИ УТВЕРЖДЕН",
        title_1: "100% СООТВЕТСТВИЕ",
        title_2: "СЕЙСМИЧЕСКИМ НОРМАМ",
        desc: "Каждое сооружение, которое мы строим, моделируется с учетом самых суровых возможных сценариев. <span class='font-bold text-blue-900 bg-blue-50 px-2 mx-1 rounded'>Бетон C35+</span>, <span class='font-bold text-blue-900 bg-blue-50 px-2 mx-1 rounded'>Сейсмические изоляторы</span> и <span class='font-bold text-blue-900 bg-blue-50 px-2 mx-1 rounded'>Ребристая сталь</span> — наши стандарты.",
        tags: ["Исследование грунта", "Статический анализ", "Сейсмические демпферы"]
      }
    },
    projects_page: {
      header: {
        badge: "ПОРТФОЛИО",
        title_1: "ИЗБРАННЫЕ",
        title_2: "ПРОЕКТЫ."
      },
      filters: {
        "Tümü": "Все",
        "Konut": "Жилые",
        "Endüstriyel": "Промышленные",
        "Ticari": "Коммерческие",
        "Turizm": "Туризм",
        "Eğitim": "Образование",
        "Sağlık": "Здравоохранение"
      },
      view_modes: {
        list: "СПИСОК",
        map: "КАРТА"
      },
      gallery_title: "Медиа Галерея",
      loading_map: "ЗАГРУЗКА ДАННЫХ КАРТЫ...",
      modal: {
        details_title: "Паспорт проекта",
        client: "Заказчик",
        area: "Общая площадь",
        year_status: "Год / Статус",
        btn_offer: "Запросить КП",
        vision_title: "Видение проекта",
        challenge: "Задача (Challenge)",
        solution: "Решение (Solution)",
        tech_specs: "Технические характеристики"
      }
    },
    faq_page: {
      header: {
        badge: "Центр поддержки",
        title_1: "КАК МЫ МОЖЕМ",
        title_2: "ВАМ ПОМОЧЬ?",
        subtitle: "Мы собрали для вас ответы на самые часто задаваемые вопросы о наших проектах, процессах и технических деталях.",
        search_placeholder: "Напр.: Сейсмические нормы, план оплаты..."
      },
      categories: [
        {
          title: "КОРПОРАТИВНОЕ",
          items: [
            { q: "Предоставляет ли Monolith услуги только в Стамбуле?", a: "Хотя наш центр находится в Маслаке, Стамбул, мы предоставляем услуги по всей Турции и в избранных зарубежных проектах (Тюркские республики, Балканы). Благодаря нашей логистической сети и мобильным строительным бригадам мы обеспечиваем одинаковые стандарты качества в любой локации." },
            { q: "Какие типы проектов вы берете на себя?", a: "Наши области экспертизы собраны под тремя основными заголовками: \n1. **Высотные здания и жилые комплексы** \n2. **Промышленные объекты (Фабрики, Склады, Логистические центры)** \n3. **Коммерческие здания (ТЦ, Офисные плазы, Отели)**. \nКроме того, у нас есть специальный отдел по усилению и реновации существующих зданий." },
            { q: "Можем ли мы посетить ваши референсные проекты?", a: "Конечно. В соответствии с нашим принципом прозрачности, вы можете посетить наши завершенные проекты или (в рамках протоколов безопасности) текущие строительные площадки по предварительной записи. Наш представитель будет сопровождать вас." }
          ]
        },
        {
          title: "СТРОИТЕЛЬСТВО И ИНЖИНИРИНГ",
          items: [
            { q: "Какие стандарты вы применяете в отношении сейсмобезопасности?", a: "Наши проекты разрабатываются с целями производительности, **превышающими** Турецкий строительный кодекс по сейсмостойкости 2018 года. В качестве стандарта мы используем **бетон класса C35/C40** и **сейсмическую ребристую сталь B420C**. Согласно отчетам об исследовании грунта, мы не начинаем фундамент без улучшения грунта с помощью **Jet Grout** или **Буронабивных свай** в зонах, где это необходимо." },
            { q: "Сколько длится процесс чернового строительства?", a: "Срок зависит от площади проекта, количества этажей и условий грунта. Однако в среднем:\n* **Вилла/Частный дом:** 4-6 Месяцев\n* **Среднемасштабный апартамент:** 8-12 Месяцев\n* **Промышленный объект:** 6-9 Месяцев\nКак Monolith, мы даем гарантию сдачи в обещанную дату и включаем штрафные санкции за задержки в контракт." },
            { q: "С какими фирмами по строительному контролю вы работаете?", a: "Мы работаем с независимыми фирмами по строительному контролю, назначенными Министерством окружающей среды и градостроительства. Кроме того, наша внутренняя команда 'Контроля качества (QC)' проверяет каждую заливку бетона и арматуру независимо от строительного контроля." }
          ]
        },
        {
          title: "ИНТЕРЬЕР И ДИЗАЙН",
          items: [
            { q: "Есть ли у вас услуга отделки под ключ?", a: "Да. С нашей моделью 'Design & Build' мы управляем всем процессом из одних рук: от чернового строительства до тонкой отделки, от выбора мебели до дизайна освещения. Это предотвращает разрывы в коммуникации между архитектором и мастером и отклонения от бюджета." },
            { q: "Имеем ли мы право на ревизию в процессе проектирования?", a: "Разумеется. На этапе концептуального дизайна у вас есть **неограниченное**, а на этапе рабочего проекта — **3 комплексных права на ревизию**. Наша цель — сдать пространство вашей мечты со 100% удовлетворением." },
            { q: "Как мы выбираем материалы?", a: "Вы можете сделать выбор вместе с нашими архитекторами в нашей обширной библиотеке материалов (паркет, керамика, краска, образцы тканей), находящейся в нашем офисе. Также мы организуем совместные визиты в шоурумы наших партнеров." }
          ]
        },
        {
          title: "ПРОЦЕСС И ЮРИДИЧЕСКИЕ ВОПРОСЫ",
          items: [
            { q: "Кто занимается получением разрешений и акта ввода в эксплуатацию?", a: "Все официальные процессы (Лицензия муниципалитета, подписки на воду/электричество, отчет пожарной службы и акт ввода в эксплуатацию) ведутся **Отделом официальных дел** нашей компании от вашего имени по доверенности. Вам остается только получить свой ключ." },
            { q: "Каковы ваши условия оплаты?", a: "Наш общий план оплаты выглядит следующим образом: \n* **30% Первоначальный взнос** (При подписании контракта)\n* **40% Поэтапные платежи** (Ежемесячные платежи по мере продвижения строительства)\n* **30% При сдаче** (При передаче ключей)\nОднако, в зависимости от масштаба проекта, мы также можем рассмотреть варианты рассрочки или бартера." }
          ]
        }
      ],
      no_results: {
        title: "Результатов не найдено",
        desc: "Мы не нашли вопроса, связанного с. Вы можете попробовать другое слово или связаться с нами напрямую."
      },
      cta: {
        title: "НЕ НАШЛИ СВОЙ ВОПРОС В СПИСКЕ?",
        desc: "Наша команда экспертов готова ответить на ваши вопросы, специфичные для вашего проекта. Напишите нам, и мы ответим максимум в течение 2 часов.",
        btn_write: "Написать нам",
        btn_call: "Позвонить нам"
      }
    },
    technical_page: {
      header: {
        badge: "Центр знаний",
        title_1: "ТЕХНИЧЕСКИЕ ДЕТАЛИ",
        title_2: "& АНАЛИЗЫ",
        desc: "Следите за строительными технологиями, инженерными подходами и отраслевыми разработками из-под пера нашего экспертного штата."
      },
      ui: {
        read_time: "мин. чтение",
        share: "Поделиться",
        save: "Сохранить",
        print: "Печать",
        author_title: "Автор"
      },
      posts: [
        {
          id: 1,
          title: "Технологии сейсмических изоляторов и структурная долговечность",
          excerpt: "Технический обзор способности изоляторов типа фрикционного маятника, используемых в современных высотных зданиях, гасить энергию землетрясения на 80%.",
          date: "12 ЯНВАРЯ 2026",
          readTime: "6",
          author: "Зейнеп Кая",
          role: "Главный инженер",
          category: "Сейсмический инжиниринг",
          image: "/foto/photo-1541888946425-d81bb19240f5_q_80_w_1000_auto_format_fit_crop.jpg",
          tags: ["Землетрясение", "Железобетон", "Безопасность"],
          content: `
            <p class="text-lg font-medium text-slate-900 mb-6">В традиционном проектировании зданий ожидается, что здание выдержит энергию землетрясения. Однако технология сейсмической изоляции радикально меняет эту парадигму.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Принцип фрикционного маятника (Friction Pendulum)</h3>
            <p class="mb-4">Сейсмические изоляторы 3-го поколения, которые мы используем в проектах Monolith, удлиняют период колебаний здания, передавая конструкции минимальное ускорение грунта. Эта система в основном обеспечивает:</p>
            <ul class="list-disc pl-6 space-y-2 marker:text-amber-500 mb-8">
              <li><strong>Удлинение периода:</strong> Сдвигает период собственных колебаний конструкции в диапазон 2.5 - 3.0 секунды.</li>
              <li><strong>Гашение энергии:</strong> Более 80% энергии землетрясения гасится на уровне изолятора.</li>
            </ul>
            <div class="bg-slate-100 p-6 rounded-sm border-l-4 border-amber-500 my-8">
              <h4 class="font-bold text-slate-900 mb-2">Техническое примечание:</h4>
              <p class="text-sm italic">Гарантирует, что конструкция останется на уровне производительности «Немедленное заселение» даже при землетрясениях магнитудой 7.5 и выше по шкале Рихтера.</p>
            </div>
          `
        },
        {
          id: 2,
          title: "Оптимизация затрат с помощью BIM (Информационное моделирование зданий)",
          excerpt: "Создание цифрового двойника перед строительством снижает ошибки на площадке на 40% и оказывает прямое влияние на процессы промежуточных платежей.",
          date: "08 ЯНВАРЯ 2026",
          readTime: "8",
          author: "Ахмет Йылмаз",
          role: "Архитектор-основатель",
          category: "Цифровое строительство",
          image: "/foto/photo-1503387762-592deb58ef4e_q_80_w_1000_auto_format_fit_crop.jpg",
          tags: ["BIM", "Технологии", "Эффективность"],
          content: `
            <p class="mb-6">Самая большая статья расходов в строительном секторе — это не материалы, а «отсутствие планирования». Как Monolith, мы решаем эту проблему в корне с помощью интеграции <strong>5D BIM</strong>.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Проверка на коллизии (Clash Detection)</h3>
            <p class="mb-4">На цифровом двойнике обнаруживаются тысячи потенциальных ошибок еще до того, как будет сделан первый удар киркой:</p>
            <ul class="list-disc pl-6 space-y-2 marker:text-blue-500 mb-8">
              <li>Механические и статические коллизии.</li>
              <li>Оптимизация пожарной проводки.</li>
            </ul>
            <p>Решение этих ошибок в цифровой среде снижает затраты на площадке на 40%.</p>
          `
        },
        {
          id: 3,
          title: "Зеленые здания: Сертификация LEED и Устойчивый бетон",
          excerpt: "Смеси «Зеленого бетона» нового поколения, снижающие углеродный след, и фасадные системы, обеспечивающие энергоэффективность.",
          date: "24 ДЕКАБРЯ 2025",
          readTime: "5",
          author: "Мехмет Демир",
          role: "Операционный директор",
          category: "Устойчивость",
          image: "/foto/photo-1464938050520-ef2270bb8ce8_q_80_w_1000_auto_format_fit_crop.jpg",
          tags: ["LEED", "Окружающая среда", "Материалы"],
          content: `
            <p class="mb-6">Устойчивое развитие — это не тренд, а инженерная необходимость. Технология «Eco-Crete» снижает выбросы углерода на 30%.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Рекуперация серой воды</h3>
            <p class="mb-4">В наших проектах-кандидатах на сертификат LEED Gold дождевая вода очищается и используется в резервуарах. Эта система обеспечивает 45% годовой экономии воды.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Фасадные системы</h3>
            <p>Благодаря стеклам с покрытием Low-E минимизируются нагрузки на отопление и охлаждение.</p>
          `
        }
      ]
    }
  }
};