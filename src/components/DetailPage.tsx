import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles, Cpu, Layers, Activity, TrendingUp, ShieldAlert, Award } from "lucide-react";
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
  const renderVisualMockup = () => {
    switch (slug) {
      case "san-xuat-nha-may":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] group bg-[#08080a]">
            {/* Ambient visual background grid */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,91,106,0.1)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700 pointer-events-none" style={{ backgroundImage: "url('/logo_cyberdx.jpg')" }} />
            
            {/* Top scanning HUD overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1 text-[10px] font-mono text-[#ff8a9a]">
                <Activity size={12} className="animate-pulse" />
                <span>FACTORY RADER: ACTIVE</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 bg-black/60 px-2 py-1 rounded">
                LOC: BD_FACTORY_02
              </span>
            </div>

            {/* Simulated worker profile matching card */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/85 border border-[#d85b6a]/30 backdrop-blur-lg flex items-center justify-between gap-4 z-10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#d85b6a] to-purple-600 flex items-center justify-center text-white font-black text-lg shadow-inner">
                  CN
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">Trần Văn Nam</h4>
                  <p className="text-[11px] text-white/50 font-medium">Bán kính: 2.4 km (KCN Sóng Thần)</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 font-mono">
                <span className="text-xs bg-[#d85b6a]/20 border border-[#d85b6a]/40 text-[#ff8a9a] px-2 py-0.5 rounded-full font-black">
                  96% KHỚP
                </span>
                <span className="text-[9px] text-green-400 font-bold uppercase tracking-wider">ĐÃ DUYỆT TAY NGHỀ</span>
              </div>
            </div>
            
            {/* Glowing scanline */}
            <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#d85b6a] to-transparent top-0 animate-[scan_3s_ease-in-out_infinite] z-0 shadow-[0_0_12px_rgba(216,91,106,0.8)]" />
          </div>
        );

      case "ekyc-verification":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.1)_0%,transparent_70%)] pointer-events-none" />
            
            {/* Biometric Scanning Panel */}
            <div className="w-[180px] h-[240px] rounded-2xl border-2 border-purple-500/30 relative flex flex-col justify-between p-4 overflow-hidden bg-black/60 shadow-[0_0_50px_rgba(168,85,247,0.1)]">
              {/* Camera view simulation */}
              <div className="absolute inset-2 rounded-xl bg-purple-500/[0.02] border border-white/5 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-dashed border-purple-500/40 animate-[spin_20s_linear_infinite]" />
              </div>
              
              <div className="flex justify-between items-center z-10">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-[8px] font-mono text-purple-400 uppercase tracking-widest font-black">eKYC SECURE</span>
              </div>

              {/* Glowing face tracker anchors */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-purple-500/30 rounded-full animate-pulse z-10 flex items-center justify-center">
                <div className="w-20 h-20 border border-purple-500/50 rounded-full" />
              </div>

              <div className="bg-purple-950/80 border border-purple-500/30 p-2 rounded-xl text-center z-10 backdrop-blur-md">
                <span className="text-[9px] font-mono text-purple-300 font-bold block">XÁC THỰC DANH TÍNH</span>
                <span className="text-[8px] font-mono text-green-400 font-black tracking-widest">SUCCESS: 100%</span>
              </div>

              {/* Laser sweep */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent top-0 animate-[scan_2.5s_ease-in-out_infinite] z-20 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
            </div>
          </div>
        );

      case "ai-matcher":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] p-6 flex flex-col justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,91,106,0.15)_0%,transparent_70%)] pointer-events-none" />
            
            {/* Header info */}
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">AI MATCH ENGINE V2.6</span>
              <span className="text-[9px] font-mono text-green-400 font-bold bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded">ONLINE</span>
            </div>

            {/* Neural Net Nodes simulation */}
            <div className="flex-1 flex items-center justify-between px-10 relative">
              {/* Job Requirement Node */}
              <div className="w-16 h-16 rounded-2xl bg-[#d85b6a]/10 border border-[#d85b6a]/30 flex flex-col items-center justify-center gap-1 z-10 shadow-[0_0_30px_rgba(216,91,106,0.2)]">
                <Layers size={18} className="text-[#d85b6a]" />
                <span className="text-[8px] font-mono text-white/60 font-black">YÊU CẦU</span>
              </div>

              {/* Dynamic Connection Pulse Line */}
              <div className="absolute left-24 right-24 h-0.5 bg-gradient-to-r from-[#d85b6a] via-purple-500 to-green-500 z-0">
                <div className="w-4 h-full bg-white rounded-full blur-[2px] animate-[pulse_2s_infinite] absolute" style={{ animation: "slideLeftRight 2s linear infinite" }} />
              </div>

              {/* Match result badge center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black border border-white/15 px-3 py-1.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                <span className="text-xs font-black text-white font-mono">98.5% MATCH</span>
              </div>

              {/* Candidate Profile Node */}
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/30 flex flex-col items-center justify-center gap-1 z-10 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                <Award size={18} className="text-green-400" />
                <span className="text-[8px] font-mono text-white/60 font-black">ỨNG VIÊN</span>
              </div>
            </div>

            <div className="flex justify-between items-center z-10 text-[9px] font-mono text-white/40">
              <span>LATENCY: 42ms</span>
              <span>ACCURACY: 99.4%</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] p-6 flex flex-col justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,91,106,0.1)_0%,transparent_70%)] pointer-events-none" />
            
            {/* Futuristic Tech Panel */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Cpu size={14} className="text-[#d85b6a]" />
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">CyberDX Security Core</span>
              </div>
              <div className="flex items-center gap-1 bg-[#d85b6a]/15 border border-[#d85b6a]/30 px-2 py-0.5 rounded text-[8px] font-black text-[#ff8a9a]">
                <Sparkles size={10} />
                <span>AI OPTIMIZED</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center text-left gap-2 z-10">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Active Module Diagnostics</span>
              <h4 className="text-lg font-bold text-white tracking-wide uppercase">{data.title}</h4>
              <div className="w-16 h-1 bg-[#d85b6a] rounded-full" />
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
              <ShieldAlert size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white tracking-wide">Bạn sẵn sàng tối ưu hóa quy trình tuyển dụng?</h4>
              <p className="text-sm text-white/50 font-medium">Bắt đầu chuẩn hóa đầu vào ứng viên và tăng tỷ lệ lấp đầy vị trí trống ngay hôm nay.</p>
            </div>
          </div>
          <button
            onClick={onContact}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#d85b6a] hover:bg-[#e26c7b] text-white font-black uppercase tracking-wider text-xs px-10 py-5 rounded-full shadow-[0_8px_24px_rgba(216,91,106,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Liên Hệ Dành Cho Doanh Nghiệp
            <ArrowUpRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
