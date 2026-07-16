import { motion } from "motion/react";
import { Package, ShoppingBag, BedDouble, HeartPulse, ArrowUpRight, Factory, GraduationCap } from "lucide-react";

interface IndustryCard {
  num: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  description: string;
  features: string[];
  imagePath: string;
  slug: string;
}

const INDUSTRIES: IndustryCard[] = [
  {
    num: "01",
    icon: <Factory size={24} />,
    title: "Manufacturing & Factories",
    sub: "Manufacturing & Factory",
    description: "Optimize occupational safety using AI Camera System to monitor Personal Protective Equipment (PPE), control virtual boundaries around hazardous machinery, and detect smoke/fire instantly.",
    features: ["PPE monitoring (hats, vests)", "Forklift & machinery hazards", "High-ceiling smoke & fire alarms"],
    imagePath: "/san-xuat-nha-may.webp",
    slug: "san-xuat-nha-may"
  },
  {
    num: "02",
    icon: <Package size={24} />,
    title: "Logistics & Warehousing",
    sub: "Warehouse & Logistics",
    description: "Optimize yard management, monitor trucks entering/exiting weigh stations with automated License Plate Recognition (LPR), and secure perimeters with 24/7 virtual fence intrusion detection.",
    features: ["License Plate Recognition (LPR)", "Traffic flow route mapping", "Restricted zone intrusion tracking"],
    imagePath: "/kho-bai-logistics.webp",
    slug: "kho-van-hang-hoa"
  },
  {
    num: "03",
    icon: <ShoppingBag size={24} />,
    title: "Retail & Services",
    sub: "Retail & Service",
    description: "Analyze store foot traffic, generate customer dwell-time heatmaps, and measure waiting lines at POS checkout counters.",
    features: ["Heatmaps & customer paths", "People Counting", "Queue & behavior analysis"],
    imagePath: "/ban-le-dich-vu.png",
    slug: "ban-le-dich-vu"
  },
  {
    num: "04",
    icon: <GraduationCap size={24} />,
    title: "Education & Campuses",
    sub: "Education & Campus",
    description: "Create safe educational environments with automated face-recognition attendance, perimeter intrusion security, and student behavior alerts.",
    features: ["Face-recognition attendance", "After-hours virtual fences", "Abnormal behavior detection"],
    imagePath: "/giao-duc-dao-tao.webp",
    slug: "giao-duc-dao-tao-2"
  },
  {
    num: "05",
    icon: <BedDouble size={24} />,
    title: "Hospitality & Tourism",
    sub: "Hospitality & Tourism",
    description: "Automated VIP face recognition at lobby reception, fall detection at pools and public pathways, and automatic LPR barrier gates.",
    features: ["VIP reception recognition", "Lobby fall detection", "LPR automatic barrier gates"],
    imagePath: "/nha-hang-khach-san.jpg",
    slug: "khach-san-du-lich"
  },
  {
    num: "06",
    icon: <HeartPulse size={24} />,
    title: "Hospitals & Healthcare",
    sub: "Healthcare & Hospitals",
    description: "Monitor ward corridors, detect patient or elderly fall incidents, and strictly control access to restricted pharmaceutical storage.",
    features: ["Patient fall detection", "Sterile room access control", "Emergency lane parking block detection"],
    imagePath: "/y-te-suc-khoe.jpg",
    slug: "ben-vien-co-so-y-te"
  }
];

export default function CxIndustries() {
  const handleItemClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    document.dispatchEvent(new CustomEvent("dx:open-detail", { detail: slug }));
  };

  return (
    <section
      id="industries"
      className="relative bg-black py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#f97316]/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col items-start gap-4 mb-20 max-w-3xl text-left">
          <span className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#ffb86b] uppercase tracking-widest font-mono">
            Industries Served
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            REAL-WORLD APPLICATIONS <br />
            <span className="text-[#f97316]">ACROSS INDUSTRIES</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
            Specialized AI models designed to meet the exact operational demands of each sector.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind, idx) => (
            <motion.div
              key={ind.num}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={(e) => handleItemClick(e, ind.slug)}
              className="p-8 rounded-2xl bg-[#0a0a0c] border border-white/5 hover:border-[#f97316]/30 transition-all duration-500 flex flex-col justify-between min-h-[420px] group relative overflow-hidden cursor-pointer hover:shadow-[0_8px_32px_rgba(249, 115, 22,0.15)] hover:-translate-y-1.5"
            >
              
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-45 group-hover:opacity-75 group-hover:scale-110 transition-all duration-700 pointer-events-none z-0" 
                style={{ backgroundImage: `url('${ind.imagePath}')` }}
              />

              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/85 to-black/30 z-0 pointer-events-none" />

              
              <div className="absolute inset-0 bg-gradient-to-t from-[#f97316]/10 via-[#f97316]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

              
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_30px] opacity-10 pointer-events-none z-0" />

              <div className="relative z-10 text-left">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center text-[#f97316] group-hover:scale-110 group-hover:bg-[#f97316]/25 transition-all duration-300">
                    {ind.icon}
                  </div>
                  <span className="text-4xl font-black text-white/5 font-mono group-hover:text-[#f97316]/15 transition-colors duration-300">
                    {ind.num}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide group-hover:text-[#f97316] transition-colors duration-300">
                  {ind.title}
                </h3>
                <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest mt-1 mb-4">
                  {ind.sub}
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300">
                  {ind.description}
                </p>
              </div>

              <div className="relative z-10 text-left">
                
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {ind.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-[10px] font-bold text-white/50 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full font-mono uppercase group-hover:text-white/80 group-hover:border-[#f97316]/20 transition-colors"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white/50 group-hover:text-white transition-colors">
                  <span>Learn details</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-[#f97316]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

