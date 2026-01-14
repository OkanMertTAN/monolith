"use client";

import { use, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { sozluk } from "@/data/sozluk"; // SÖZLÜK EKLENDİ
import { 
  MapPin, Phone, Mail, Building2, 
  Factory, Hammer, Ruler, Send, HardHat, CheckCircle2,
  Globe
} from "lucide-react";

export default function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  
  // 1. Dili ve Veriyi Al
  const { lang } = use(params);
  const t = sozluk[lang].contact_page;

  // 2. Harita Bileşeni (Yükleme metnini çevirebilmek için component içinde tanımlıyoruz)
  const LeafletMap = dynamic(() => import("@/components/ui/LeafletMap"), {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400 font-mono text-xs border border-slate-200">
        <span className="animate-pulse">{t.loading}</span>
      </div>
    ),
  });

  // 3. Veri Yapıları (Sözlükten beslenenler)
  const officeLocation = [{
    id: 1, title: t.sidebar.title, category: "HQ", location: "Maslak, İstanbul", coordinates: [41.1105, 29.0240], year: "2010"
  }];

  const projectTypes = [
    { id: "konut", label: t.form.project_types.konut, icon: Building2, color: "text-blue-600", border: "group-hover:border-blue-500", bg: "group-hover:bg-blue-50" },
    { id: "endustri", label: t.form.project_types.endustri, icon: Factory, color: "text-orange-600", border: "group-hover:border-orange-500", bg: "group-hover:bg-orange-50" },
    { id: "donusum", label: t.form.project_types.donusum, icon: Hammer, color: "text-emerald-600", border: "group-hover:border-emerald-500", bg: "group-hover:bg-emerald-50" },
  ];

  const budgetRanges = t.form.budget_ranges;

  // İletişim Bilgileri Listesi
  const contactInfo = [
    { title: t.sidebar.items.hq.title, val: t.sidebar.items.hq.val, icon: MapPin, color: "text-blue-600", bg: "bg-blue-50" },
    { title: t.sidebar.items.phone.title, val: t.sidebar.items.phone.val, icon: Phone, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: t.sidebar.items.email.title, val: t.sidebar.items.email.val, icon: Mail, color: "text-purple-600", bg: "bg-purple-50" }
  ];

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", type: "", budget: "", message: "" });
  const handleChange = (e: any) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

  return (
    <main className="min-h-screen relative flex items-center justify-center py-24 px-4 overflow-hidden font-sans text-slate-900">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(#00000008_1px,transparent_1px),linear-gradient(90deg,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
             <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">{t.header.status}</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6">
            <span className="text-slate-800">{t.header.title_1}</span> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-orange-600 to-amber-600 drop-shadow-sm">{t.header.title_2}</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            <span dangerouslySetInnerHTML={{ __html: t.header.desc }} />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl rounded-3xl overflow-hidden border border-slate-200 bg-white">
          
          {/* --- LEFT PANEL: INFO & MAP --- */}
          <div className="lg:col-span-5 bg-slate-50 p-8 md:p-12 relative flex flex-col border-r border-slate-200">
            
            <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#fbbf24,#fbbf24_10px,#f59e0b_10px,#f59e0b_20px)]"></div>

            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white p-3 rounded-xl shadow-md border border-slate-100">
                  <HardHat className="text-secondary" size={28} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 font-heading tracking-wide">{t.sidebar.title}</h2>
                  <span className="text-xs font-bold text-slate-400 tracking-wider">{t.sidebar.subtitle}</span>
                </div>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all cursor-default group"
                  >
                    <div className={`w-10 h-10 ${item.bg} flex items-center justify-center rounded-lg ${item.color}`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${item.color}`}>{item.title}</div>
                      <div className="text-slate-800 text-sm font-bold group-hover:text-slate-900">{item.val}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Container */}
            <div className="mt-auto relative w-full h-64 bg-slate-200 rounded-xl overflow-hidden border-4 border-white shadow-lg group">
               <div className="absolute z-10 top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-slate-600 shadow-sm flex items-center gap-1">
                 <Globe size={10} className="text-secondary" /> {t.sidebar.map_badge}
               </div>
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.5 }}
                 className="w-full h-full"
               >
                 <LeafletMap projects={officeLocation} onSelectProject={() => {}} />
               </motion.div>
               <div className="absolute bottom-0 right-0 w-8 h-8 bg-slate-100 rounded-tl-xl border-t border-l border-slate-300 z-10 flex items-center justify-center">
                 <div className="w-2 h-2 bg-secondary rounded-full animate-ping"></div>
               </div>
            </div>
          </div>

          {/* --- RIGHT PANEL: FORM --- */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 relative">
            
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-3xl font-heading font-bold text-slate-900">
                  {t.form.title_main} <span className="text-secondary">{t.form.title_sub}</span>
                </h2>
                <p className="text-slate-500 text-sm mt-1 font-medium">{t.form.subtitle}</p>
              </div>
              <Ruler className="text-slate-200" size={40} />
            </div>

            <form className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { label: t.form.labels.name, name: "name", placeholder: t.form.placeholders.name },
                    { label: t.form.labels.phone, name: "phone", placeholder: t.form.placeholders.phone }
                 ].map((field, i) => (
                  <div key={i} className="group">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block ml-1 group-hover:text-secondary transition-colors">{field.label}</label>
                    <motion.input 
                      whileFocus={{ scale: 1.01, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
                      type="text" 
                      name={field.name}
                      className="w-full bg-slate-50 border border-slate-200 p-4 text-slate-900 rounded-xl focus:outline-none focus:border-secondary focus:bg-white transition-all font-medium placeholder:text-slate-300"
                      placeholder={field.placeholder}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
              
              <div className="group">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block ml-1 group-hover:text-secondary transition-colors">{t.form.labels.email}</label>
                <motion.input 
                   whileFocus={{ scale: 1.01, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
                   type="email" name="email" 
                   className="w-full bg-slate-50 border border-slate-200 p-4 text-slate-900 rounded-xl focus:outline-none focus:border-secondary focus:bg-white transition-all font-medium placeholder:text-slate-300"
                   placeholder={t.form.placeholders.email}
                   onChange={handleChange}
                />
              </div>

              {/* Project Type Selection */}
              <div className="space-y-4 pt-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block ml-1">{t.form.labels.type}</span>
                <div className="grid grid-cols-3 gap-4">
                  {projectTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      type="button"
                      whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormData({...formData, type: type.id})}
                      className={`flex flex-col items-center justify-center gap-3 p-4 border rounded-xl transition-all duration-300 group relative overflow-hidden ${formData.type === type.id ? 'bg-slate-900 border-slate-900 text-white shadow-lg ring-2 ring-offset-2 ring-slate-900' : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'}`}
                    >
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${type.bg.replace('group-hover:', '')}`}></div>
                      <type.icon size={24} className={`${formData.type === type.id ? 'text-secondary' : type.color} transition-colors`} />
                      <span className={`text-[10px] uppercase font-bold text-center tracking-tight ${formData.type === type.id ? 'text-white' : 'text-slate-600'}`}>{type.label}</span>
                      
                      {formData.type === type.id && (
                        <div className="absolute top-2 right-2 text-secondary">
                          <CheckCircle2 size={12} />
                        </div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Budget Slider */}
              <div className="space-y-4 pt-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block ml-1">{t.form.labels.budget}</span>
                <div className="flex flex-wrap gap-3">
                  {budgetRanges.map((range: string, index: number) => (
                    <motion.button
                      key={index}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormData({...formData, budget: range})}
                      className={`px-5 py-2 text-xs font-bold border rounded-full transition-all shadow-sm ${formData.budget === range ? 'border-secondary bg-secondary text-white shadow-md' : 'border-slate-200 bg-white text-slate-600 hover:border-secondary hover:text-secondary'}`}
                    >
                      {range}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="group pt-2">
                 <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block ml-1 group-hover:text-secondary transition-colors">{t.form.labels.message}</label>
                 <motion.textarea 
                    whileFocus={{ scale: 1.01, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
                    name="message" rows={3} 
                    className="w-full bg-slate-50 border border-slate-200 p-4 text-slate-900 rounded-xl focus:outline-none focus:border-secondary focus:bg-white transition-all font-medium resize-none placeholder:text-slate-300"
                    placeholder={t.form.placeholders.message}
                    onChange={handleChange}
                  ></motion.textarea>
              </div>

              {/* Submit Button */}
              <motion.button 
                type="button"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-slate-900 text-white font-bold py-5 uppercase tracking-widest hover:bg-secondary transition-colors flex items-center justify-center gap-3 rounded-xl shadow-xl mt-4 group relative overflow-hidden"
              >
                <span className="relative z-10">{t.form.submit_btn}</span>
                <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[30deg] group-hover:left-[100%] transition-all duration-700 ease-in-out"></div>
              </motion.button>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
}