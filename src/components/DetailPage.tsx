import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles, Cpu, Layers, Activity, TrendingUp, Video, AlertTriangle, Shield } from "lucide-react";
import { DETAIL_DATA } from "../utils/detailData";

interface DetailPageProps {
  slug: string;
  onBack: () => void;
  onContact: () => void;
}

export default function DetailPage({ slug, onBack, onContact }: DetailPageProps) {
  const data = DETAIL_DATA[slug];

  // Dynamic SEO Metadata Injection & Schema Graph compilation
  useEffect(() => {
    if (!data) return;

    const setMetaProperty = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setMetaName = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // --- Dynamic Head Titles, Canonical & Descriptions ---
    const pageTitle = `${data.title} - CyberDX AI`;
    document.title = pageTitle;
    
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement("meta");
      descMeta.setAttribute("name", "description");
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute("content", data.description);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", `https://cyberdx.tech/${slug}/`);

    // --- Open Graph & Twitter Social Tags ---
    setMetaProperty("og:locale", "vi_VN");
    setMetaProperty("og:type", "article");
    setMetaProperty("og:title", pageTitle);
    setMetaProperty("og:description", data.description);
    setMetaProperty("og:url", `https://cyberdx.tech/${slug}/`);
    setMetaProperty("og:site_name", "CyberDX");
    setMetaProperty("og:image", "https://cyberdx.tech/logo_cyberdx.jpg");
    setMetaProperty("og:image:secure_url", "https://cyberdx.tech/logo_cyberdx.jpg");
    setMetaProperty("og:image:width", "1200");
    setMetaProperty("og:image:height", "630");

    setMetaName("twitter:card", "summary_large_image");
    setMetaName("twitter:title", pageTitle);
    setMetaName("twitter:description", data.description);
    setMetaName("twitter:image", "https://cyberdx.tech/logo_cyberdx.jpg");

    // --- Dynamic Rank Math JSON-LD Schema ---
    const existingSchema = document.querySelector("script.rank-math-schema");
    if (existingSchema) {
      existingSchema.remove();
    }

    const schemaScript = document.createElement("script");
    schemaScript.setAttribute("type", "application/ld+json");
    schemaScript.setAttribute("class", "rank-math-schema");

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["Person", "Organization"],
          "@id": "https://cyberdx.tech/#person",
          "name": "CyberDX",
          "logo": {
            "@type": "ImageObject",
            "@id": "https://cyberdx.tech/#logo",
            "url": "https://cyberdx.tech/logo_cyberdx-removebg-preview.png",
            "contentUrl": "https://cyberdx.tech/logo_cyberdx-removebg-preview.png",
            "caption": "CyberDX",
            "inLanguage": "vi-VN",
            "width": "180",
            "height": "80"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://cyberdx.tech/#website",
          "url": "https://cyberdx.tech",
          "name": "CyberDX",
          "publisher": {
            "@id": "https://cyberdx.tech/#person"
          },
          "inLanguage": "vi-VN"
        },
        {
          "@type": "WebPage",
          "@id": `https://cyberdx.tech/#/${slug}/#webpage`,
          "url": `https://cyberdx.tech/#/${slug}`,
          "name": pageTitle,
          "isPartOf": {
            "@id": "https://cyberdx.tech/#website"
          },
          "inLanguage": "vi-VN"
        },
        {
          "@type": "BlogPosting",
          "headline": pageTitle,
          "datePublished": "2026-05-20T08:00:00+07:00",
          "dateModified": "2026-06-02T08:00:00+07:00",
          "author": {
            "@type": "Person",
            "name": "CyberDX Admin"
          },
          "publisher": {
            "@id": "https://cyberdx.tech/#person"
          },
          "description": data.description,
          "name": pageTitle,
          "@id": `https://cyberdx.tech/#/${slug}/#richSnippet`,
          "isPartOf": {
            "@id": `https://cyberdx.tech/#/${slug}/#webpage`
          }
        }
      ]
    };

    schemaScript.textContent = JSON.stringify(schemaData);
    document.head.appendChild(schemaScript);

    // Scroll to top of subpage
    window.scrollTo({ top: 0, behavior: "instant" });

    return () => {
      // Revert dynamic SEO head elements when leaving DetailPage
      document.title = "CyberDX | AI-Powered Software & Recruitment in Vietnam";
      const defaultDesc = "CyberDX builds AI-powered software, scalable architecture, and real-time platforms to accelerate product delivery and business growth.";
      if (descMeta) descMeta.setAttribute("content", defaultDesc);
      
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute("href", "https://cyberdx.tech/");

      setMetaProperty("og:title", "CyberDX | AI-Powered Software & Recruitment in Vietnam");
      setMetaProperty("og:description", defaultDesc);
      setMetaProperty("og:url", "https://cyberdx.tech/");
      setMetaName("twitter:title", "CyberDX | AI-Powered Software & Recruitment in Vietnam");
      setMetaName("twitter:description", defaultDesc);

      const dynamicSchema = document.querySelector("script.rank-math-schema");
      if (dynamicSchema) dynamicSchema.remove();
    };
  }, [slug, data]);

  if (!data) return null;

  // Custom interactive layout illustration blocks based on slug
  const getMockupBgImage = () => {
    switch (slug) {
      case "san-xuat-nha-may":
        return "/san-xuat-nha-may.webp";
      case "kho-van-hang-hoa":
      case "nhan-dien-bien-so-xe-tu-dong":
      case "giam-sat-do-xe-sai-quy-dinh":
        return "/kho-bai-logistics.webp";
      case "ban-le-dich-vu":
      case "giai-phap-dem-nguoi":
      case "ban-do-nhiet-lo-trinh":
        return "/ban-le-dich-vu.png";
      case "giao-duc-dao-tao-2":
        return "/giao-duc-dao-tao.webp";
      case "khach-san-du-lich":
        return "/nha-hang-khach-san.jpg";
      case "benh-vien-co-so-y-te":
        return "/y-te-suc-khoe.jpg";
      case "giam-sat-ppe-dong-phuc":
        return "/ppe-detection.png";
      case "phat-hien-khoi-chay":
        return "/smoke-fire-detection.png";
      case "phat-hien-xam-nhap":
      case "nhan-dien-phan-tich-hanh-vi":
        return "/intrusion-detection.png";
      default:
        return "/logo_cyberdx.jpg";
    }
  };

  const renderVisualMockup = () => {
    switch (slug) {
      case "san-xuat-nha-may":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] group">
            {/* Real Background Image backdrop */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${getMockupBgImage()}')` }} 
            />
            {/* Ambient visual background grid */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,91,106,0.1)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            
            {/* Top scanning HUD overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1 text-[10px] font-mono text-[#ff8a9a]">
                <Activity size={12} className="animate-pulse text-[#d85b6a]" />
                <span>FACTORY DETECTOR: ACTIVE</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 bg-black/60 px-2 py-1 rounded">
                LOC: CAM-04 (XƯỞNG 2)
              </span>
            </div>

            {/* AI Bounding Box Simulation */}
            <div className="absolute top-1/4 left-1/3 w-32 h-32 border-2 border-red-500 rounded-lg animate-pulse z-10 flex flex-col justify-between p-1 bg-red-500/10">
              <span className="text-[8px] font-mono text-red-400 font-bold bg-black/80 px-1 rounded self-start font-black">WARNING: NO HELMET</span>
              <div className="w-4 h-4 border-b-2 border-r-2 border-red-500 self-end" />
            </div>

            {/* Alert card */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/85 border border-[#d85b6a]/30 backdrop-blur-lg flex items-center justify-between gap-4 z-10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-950 border border-red-500/30 flex items-center justify-center text-red-500 font-black text-lg">
                  <AlertTriangle size={20} />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">CẢNH BÁO VI PHẠM PPE</h4>
                  <p className="text-[11px] text-white/50 font-medium">Nhân sự không đội mũ bảo hộ tại khu vực nguy hiểm</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 font-mono">
                <span className="text-xs bg-[#d85b6a]/20 border border-[#d85b6a]/40 text-[#ff8a9a] px-2 py-0.5 rounded-full font-black">
                  CRITICAL
                </span>
                <span className="text-[9px] text-[#ff8a9a] font-bold uppercase tracking-wider">THỜI GIAN THỰC</span>
              </div>
            </div>
            
            {/* Glowing scanline */}
            <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#d85b6a] to-transparent top-0 animate-[scan_3s_ease-in-out_infinite] z-0 shadow-[0_0_12px_rgba(216,91,106,0.8)]" />
          </div>
        );

      case "kho-van-hang-hoa":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] group">
            {/* Real Background Image backdrop */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${getMockupBgImage()}')` }} 
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />
            
            {/* HUD */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1 text-[10px] font-mono text-blue-400">
                <Cpu size={12} className="animate-pulse" />
                <span>LOGISTICS RADAR: ACTIVE</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 bg-black/60 px-2 py-1 rounded">
                LOC: CAM-09 (CỔNG CHÍNH)
              </span>
            </div>

            {/* License Plate Detector UI */}
            <div className="absolute top-1/3 left-1/4 w-[200px] h-[70px] border-2 border-green-500 rounded bg-green-500/5 flex flex-col justify-between p-1 z-10 font-mono">
              <span className="text-[8px] text-green-400 bg-black/80 px-1 rounded self-start">PLATE DETECTED: 51A-987.65</span>
              <span className="text-[8px] text-green-400 self-end">CONFIDENCE: 99.4%</span>
            </div>

            {/* Info Card */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/85 border border-blue-500/30 backdrop-blur-lg flex items-center justify-between gap-4 z-10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Cpu size={20} />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">XE VÀO CỔNG TỰ ĐỘNG</h4>
                  <p className="text-[11px] text-white/50 font-medium">Xe tải hàng số hiệu 51A-987.65 | Tải trọng: 12.5 tấn</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 font-mono">
                <span className="text-xs bg-green-500/20 border border-green-500/40 text-green-400 px-2 py-0.5 rounded-full font-black">
                  CỔNG MỞ
                </span>
                <span className="text-[8px] text-white/40 font-bold">XÁC THỰC LPR</span>
              </div>
            </div>

            {/* Scanning line */}
            <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent top-0 animate-[scan_2.5s_ease-in-out_infinite] z-0" />
          </div>
        );

      case "ban-le-dich-vu":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] group">
            {/* Real Background Image backdrop */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${getMockupBgImage()}')` }} 
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.1)_0%,transparent_70%)] pointer-events-none" />
            
            {/* Heatmap effect overlay */}
            <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-red-500/20 via-yellow-500/20 to-blue-500/10 blur-xl pointer-events-none" />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1 text-[10px] font-mono text-green-400">
                <Activity size={12} className="animate-pulse" />
                <span>HEATMAP ANALYTICS: ONLINE</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 bg-black/60 px-2 py-1 rounded">
                LOC: ZONE_A_RETAIL
              </span>
            </div>

            {/* People grid nodes */}
            <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full border border-yellow-500/40 bg-yellow-500/5 flex items-center justify-center animate-ping pointer-events-none" />
            <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full border border-red-500/40 bg-red-500/5 flex items-center justify-center animate-pulse pointer-events-none" />

            {/* Metric Panel Card */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/85 border border-green-500/30 backdrop-blur-lg flex items-center justify-between gap-4 z-10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-950 border border-green-500/30 flex items-center justify-center text-green-400">
                  <TrendingUp size={20} />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">PHÂN TÍCH HÀNG CHỜ</h4>
                  <p className="text-[11px] text-white/50 font-medium">Mật độ: 48 người | Hàng chờ thanh toán: 2 người (Tốt)</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 font-mono">
                <span className="text-xs bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 px-2 py-0.5 rounded-full font-black font-mono">
                  TB: 1m12s
                </span>
                <span className="text-[8px] text-white/40 font-bold">THỜI GIAN CHỜ</span>
              </div>
            </div>
          </div>
        );

      case "nhan-dien-khuon-mat":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] flex items-center justify-center group">
            {/* Real Background Image backdrop */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${getMockupBgImage()}')` }} 
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.1)_0%,transparent_70%)] pointer-events-none" />
            
            {/* Scanner Area */}
            <div className="w-[180px] h-[220px] rounded-2xl border-2 border-purple-500/30 relative flex flex-col justify-between p-4 overflow-hidden bg-black/60 shadow-[0_0_50px_rgba(168,85,247,0.1)] z-10">
              <div className="absolute inset-2 rounded-xl bg-purple-500/[0.02] border border-white/5 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-dashed border-purple-500/30 animate-[spin_15s_linear_infinite]" />
              </div>
              
              <div className="flex justify-between items-center z-10">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-[8px] font-mono text-purple-400 uppercase tracking-widest font-black">FACE_ID SYSTEM</span>
              </div>

              {/* Scanning Target */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-purple-500/40 rounded-full animate-pulse z-10 flex items-center justify-center">
                <div className="w-16 h-16 border border-dashed border-purple-500/50 rounded-full" />
              </div>

              <div className="bg-purple-950/80 border border-purple-500/30 p-2 rounded-xl text-center z-10 backdrop-blur-md">
                <span className="text-[8px] font-mono text-purple-300 font-bold block">XÁC THỰC THÀNH CÔNG</span>
                <span className="text-[8px] font-mono text-green-400 font-black tracking-widest">ACCURACY: 99.8%</span>
              </div>

              {/* Sweep Line */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent top-0 animate-[scan_2s_ease-in-out_infinite] z-20" />
            </div>
          </div>
        );

      case "nhan-dien-bien-so-xe-tu-dong":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] p-6 flex flex-col justify-between group">
            {/* Real Background Image backdrop */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${getMockupBgImage()}')` }} 
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,91,106,0.1)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">LPR AUTOMATION SYSTEM</span>
              <span className="text-[9px] font-mono text-green-400 font-bold bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded">ONLINE</span>
            </div>

            <div className="flex-1 flex items-center justify-center px-10 relative">
              <div className="border border-green-500/40 p-4 rounded-xl bg-black/60 relative z-10 text-center flex flex-col gap-2 min-w-[200px] shadow-lg">
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-green-500" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-green-500" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-green-500" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-green-500" />
                
                <span className="text-xs text-white/40 font-mono">BIỂN SỐ XE NHẬN DIỆN</span>
                <span className="text-2xl font-black text-white font-mono tracking-wider">29A-888.88</span>
                <span className="text-[10px] text-green-400 font-mono font-bold uppercase tracking-widest">DANH SÁCH VIP (CHO PHÉP)</span>
              </div>
            </div>

            <div className="flex justify-between items-center z-10 text-[9px] font-mono text-white/40">
              <span>LATENCY: 120ms</span>
              <span>LƯỢT XE/GIỜ: 85 lượt</span>
            </div>
          </div>
        );

      case "phat-hien-khoi-chay":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] p-6 flex flex-col justify-between group">
            {/* Real Background Image backdrop */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${getMockupBgImage()}')` }} 
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.15)_0%,transparent_70%)] pointer-events-none animate-pulse" />
            
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono text-red-500 font-bold uppercase tracking-widest animate-pulse">FIRE MONITORING: ALERT LEVEL 1</span>
              <span className="text-[9px] font-mono text-red-400 font-bold bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded animate-bounce">WARNING</span>
            </div>

            <div className="flex-1 flex items-center justify-center relative">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-red-500/60 flex items-center justify-center animate-ping absolute pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-red-950 border border-red-500 flex items-center justify-center text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.5)] z-10">
                <AlertTriangle size={24} />
              </div>
            </div>

            {/* Alarm details */}
            <div className="p-3 bg-red-950/60 border border-red-500/30 rounded-xl text-left z-10 backdrop-blur-md">
              <span className="text-xs text-white font-bold block uppercase">PHÁT HIỆN KHÓI & LỬA KHỞI CHÁY</span>
              <span className="text-[10px] text-white/60 font-mono">Camera: CAM-12 | Khu vực: Kho Nguyên Liệu | Thời gian: Tức thì</span>
            </div>
          </div>
        );

      case "phat-hien-xam-nhap":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] p-6 flex flex-col justify-between group">
            {/* Real Background Image backdrop */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${getMockupBgImage()}')` }} 
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,91,106,0.1)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest font-black">INTRUSION RADAR</span>
              <span className="text-[8px] font-mono text-white/40 bg-black/60 px-2 py-1 rounded">ZONE_B_BOUNDARY</span>
            </div>

            {/* Virtual Fence Line */}
            <div className="absolute inset-x-0 top-1/2 h-0.5 bg-red-500/60 shadow-[0_0_8px_rgba(239,68,68,0.8)] z-10 flex justify-center items-center">
              <span className="text-[8px] bg-red-600 text-white font-mono px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse -translate-y-2.5">HÀNG RÀO ẢO VIRTUAL FENCE</span>
            </div>

            {/* Target intruder grid */}
            <div className="absolute top-1/4 left-1/3 w-16 h-24 border-2 border-red-500 rounded bg-red-500/10 z-10 flex flex-col justify-between p-1">
              <span className="text-[8px] font-mono text-red-400 font-bold bg-black/80 px-1 rounded">STRANGER DETECTED</span>
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full self-center animate-ping" />
            </div>

            <div className="flex justify-between items-center text-[9px] font-mono text-white/40 z-10 pt-4 border-t border-white/5">
              <span>TRẠNG THÁI: CẢNH BÁO XÂM NHẬP</span>
              <span>IP CAM: 192.168.1.101</span>
            </div>
          </div>
        );

      case "giam-sat-ppe-dong-phuc":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] p-6 flex flex-col justify-between group">
            {/* Real Background Image backdrop */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${getMockupBgImage()}')` }} 
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">PPE COMPLIANCE SCANNER</span>
              <span className="text-[9px] font-mono text-red-400 font-bold bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded">FAILED</span>
            </div>

            {/* Compliance checklist mockup */}
            <div className="flex-1 flex flex-col justify-center gap-2 max-w-[180px] mx-auto z-10 font-mono text-xs">
              <div className="flex justify-between items-center bg-green-500/10 border border-green-500/20 p-2 rounded-lg text-green-400">
                <span>1. Mũ bảo hộ</span>
                <span className="font-bold">ĐẠT (OK)</span>
              </div>
              <div className="flex justify-between items-center bg-green-500/10 border border-green-500/20 p-2 rounded-lg text-green-400">
                <span>2. Áo phản quang</span>
                <span className="font-bold">ĐẠT (OK)</span>
              </div>
              <div className="flex justify-between items-center bg-red-500/10 border border-red-500/20 p-2 rounded-lg text-red-400 animate-pulse">
                <span>3. Kính bảo hộ</span>
                <span className="font-bold">THIẾU (FAIL)</span>
              </div>
            </div>

            <div className="text-[9px] font-mono text-white/40 z-10 text-center">
              * Hệ thống phát hiện thiếu kính bảo hộ tự động.
            </div>
          </div>
        );

      case "giai-phap-dem-nguoi":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] p-6 flex flex-col justify-between group">
            {/* Real Background Image backdrop */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${getMockupBgImage()}')` }} 
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,91,106,0.1)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">PEOPLE COUNTER CORE</span>
              <span className="text-[9px] font-mono text-green-400 font-bold bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded">COUNTING</span>
            </div>

            {/* Entry/Exit counts dashboard */}
            <div className="flex items-center justify-around gap-4 z-10">
              <div className="text-center bg-black/60 border border-white/10 px-6 py-4 rounded-2xl flex-1 max-w-[140px]">
                <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">LƯỢT VÀO</span>
                <span className="text-3xl font-black text-green-400 font-mono">1,420</span>
              </div>
              <div className="text-center bg-black/60 border border-white/10 px-6 py-4 rounded-2xl flex-1 max-w-[140px]">
                <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">LƯỢT RA</span>
                <span className="text-3xl font-black text-white/80 font-mono">1,385</span>
              </div>
            </div>

            <div className="p-2.5 bg-green-950/40 border border-green-500/20 rounded-xl text-center z-10">
              <span className="text-[10px] font-mono text-green-400 font-bold">LƯỢT KHÁCH HIỆN TẠI TRONG KHU VỰC: 35 người</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] p-6 flex flex-col justify-between group">
            {/* Real Background Image backdrop */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${getMockupBgImage()}')` }} 
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,91,106,0.1)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            
            {/* Viewfinder Target */}
            <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 border border-dashed border-white/20 rounded-xl flex items-center justify-center">
              <div className="w-12 h-12 border border-white/30 rounded-full animate-ping pointer-events-none" />
            </div>

            {/* Tech Panel HUD */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Video size={14} className="text-[#d85b6a] animate-pulse" />
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">CAM_STREAM_ANALYZER</span>
              </div>
              <div className="flex items-center gap-1 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded text-[8px] font-mono text-green-400 font-black">
                <span>ACTIVE feed</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center text-left gap-1.5 z-10">
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Active Bounding Box Model</span>
              <h4 className="text-lg font-bold text-white tracking-wide uppercase">{data.title}</h4>
              <div className="w-12 h-0.5 bg-[#d85b6a] rounded-full" />
            </div>

            <div className="flex items-center justify-between text-[9px] font-mono text-white/40 z-10 border-t border-white/5 pt-4">
              <span>ZERO-TRUST SECURE CLIENT</span>
              <span>VER: 4.12.0</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white pt-28 pb-16 relative overflow-hidden flex flex-col">
      {/* Dynamic light glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#d85b6a]/5 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 flex-1 flex flex-col gap-16">
        
        {/* Back Button Navigation */}
        <div className="text-left">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            <ArrowLeft size={16} />
            Quay lại Trang Chủ
          </button>
        </div>

        {/* 1. Hero Subpage Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-1.5 self-start bg-[#d85b6a]/15 border border-[#d85b6a]/30 rounded-full px-4 py-1.5 text-[11px] font-black text-[#ff8a9a] uppercase font-mono tracking-widest shadow-inner">
              <Sparkles size={12} className="text-[#d85b6a]" />
              {data.category}
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none text-white">
              {data.title}
            </h1>
            
            <p className="text-xl sm:text-2xl font-extrabold text-gradient-peach leading-snug">
              {data.subtitle}
            </p>

            <div className="h-[2px] w-24 bg-gradient-to-r from-[#d85b6a] to-purple-500 my-1" />
            
            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-semibold">
              {data.description}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onContact}
                className="inline-flex items-center justify-center gap-2 bg-[#d85b6a] hover:bg-[#e26c7b] text-white font-black uppercase tracking-widest text-xs px-8 py-4.5 rounded-full shadow-[0_8px_24px_rgba(216,91,106,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                {data.category === "Thư Viện" ? "Nhận Tài Liệu Chi Tiết" : "Đăng Ký Tư Vấn Giải Pháp"}
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            {renderVisualMockup()}
          </div>
        </div>

        {/* 2. Metrics / Key Value Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {data.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col gap-3 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d85b6a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight group-hover:text-[#d85b6a] transition-colors duration-300">
                {metric.value}
              </span>
              <span className="text-xs font-bold text-white/50 uppercase tracking-widest font-mono">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* 3. Detailed Features / Highlights Block */}
        <div className="flex flex-col gap-6 text-left">
          <div className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-widest font-mono border-b border-white/5 pb-3">
            <Layers size={18} className="text-[#d85b6a]" />
            Điểm nhấn giải pháp nổi bật
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/[0.01] border border-white/5 p-6 rounded-2xl hover:border-[#d85b6a]/30 transition-all hover:bg-white/[0.02]"
              >
                <div className="p-2 bg-[#d85b6a]/10 rounded-xl border border-[#d85b6a]/20 text-[#ff8a9a] flex-shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-white/80 text-base font-bold leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Timeline Workflow Section */}
        <div className="flex flex-col gap-8 text-left">
          <div className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-widest font-mono border-b border-white/5 pb-3">
            <Cpu size={18} className="text-purple-400" />
            Quy trình vận hành thông minh
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.workflow.map((step, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 bg-white/[0.01] border border-white/5 p-6 rounded-2xl relative overflow-hidden hover:border-purple-500/30 transition-all hover:bg-white/[0.02]"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-mono font-black text-base">
                  {i + 1}
                </div>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed font-semibold">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. SVG Live Diagnostics Chart Vector */}
        <div className="p-8 rounded-3xl bg-black/40 border border-white/5 relative overflow-hidden flex flex-col gap-6 text-left">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-green-400 animate-pulse" />
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest">
                CyberDX Live Performance Analytics Simulator
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-green-400">
              <TrendingUp size={14} />
              <span>+24.8% HIỆU SUẤT TỐI ƯU</span>
            </div>
          </div>

          <div className="h-32 w-full flex items-end justify-between gap-1.5 mt-4">
            {[45, 60, 50, 75, 65, 85, 90, 80, 95, 70, 85, 100].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-gradient-to-t from-purple-500 to-[#d85b6a] rounded-t transition-all duration-1000"
                  style={{ height: `${val}%`, minHeight: "10%" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 6. Conclusion Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#d85b6a]/10 to-purple-500/5 border border-[#d85b6a]/20 text-left relative overflow-hidden shadow-[0_8px_32px_rgba(216,91,106,0.05)]">
          <div className="absolute top-2 left-4 text-6xl text-white/10 font-serif leading-none pointer-events-none">&ldquo;</div>
          <p className="text-white/95 text-base sm:text-lg font-extrabold italic leading-relaxed pl-6 relative z-10">
            {data.conclusion}
          </p>
        </div>

        {/* Bottom Contact Trigger Footer CTA */}
        <div className="border-t border-white/5 pt-12 pb-6 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-500/10 border border-red-500/20 text-[#ff8a9a] rounded-xl flex-shrink-0">
              <Shield size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white tracking-wide">Bạn sẵn sàng nâng cấp hệ thống an ninh giám sát?</h4>
              <p className="text-sm text-white/50 font-medium">Bắt đầu tích hợp các tính năng AI Video tiên tiến vào hệ thống camera sẵn có của doanh nghiệp ngay hôm nay.</p>
            </div>
          </div>
          <button
            onClick={onContact}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#d85b6a] hover:bg-[#e26c7b] text-white font-black uppercase tracking-wider text-xs px-10 py-5 rounded-full shadow-[0_8px_24px_rgba(216,91,106,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Liên Hệ Nhận Tư Vấn & Báo Giá
            <ArrowUpRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
