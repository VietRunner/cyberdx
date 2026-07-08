import { useEffect, useState } from "react";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Layers, 
  Activity, 
  TrendingUp, 
  Video, 
  AlertTriangle, 
  Shield, 
  Eye, 
  UserCheck,
  Users,
  Ban
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DETAIL_DATA } from "../utils/detailData";
import { BLOG_POSTS } from "./BlogSection";


function getFeatureCardDetails(featureText: string) {
  const text = featureText.toLowerCase();
  
  if (text.includes("architect") || text.includes("computer vision")) {
    return {
      slug: "ai-solutions-architect",
      title: "AI Solutions Architect",
      description: "Design, develop and optimize computer vision models and full end-to-end Data-AI pipelines.",
      image: "/cyberdx_logo-removebg-preview.png",
      iconName: "Cpu",
      href: "/ai-solutions-architect/"
    };
  }
  if (text.includes("data science") || text.includes("science engineer")) {
    return {
      slug: "data-science-engineer",
      title: "Data Science Engineer",
      description: "Analyze visual and operational data, optimize metrics and build automated report templates.",
      image: "/cyberdx_logo-removebg-preview.png",
      iconName: "Activity",
      href: "/data-science-engineer/"
    };
  }
  if (text.includes("cloud integration") || text.includes("cloud developer")) {
    return {
      slug: "cloud-integration-developer",
      title: "Cloud Integration Developer",
      description: "Connect Edge AI local systems to central Dashboard servers via WebSocket and REST APIs.",
      image: "/cyberdx_logo-removebg-preview.png",
      iconName: "Cpu",
      href: "/cloud-integration-developer/"
    };
  }
  if (text.includes("unlocking intelligence") || text.includes("unlocking-intelligence")) {
    return {
      slug: "unlocking-intelligence-ai-video-analytics",
      title: "Unlocking Intelligence",
      description: "Learn how AI Video Analytics transforms passive surveillance into real-time business foresight.",
      image: "/cyberdx_logo-removebg-preview.png",
      iconName: "Layers",
      href: "/unlocking-intelligence-ai-video-analytics/"
    };
  }
  if (text.includes("mũ") || text.includes("bảo hộ") || text.includes("ppe") || text.includes("đồng phục") || text.includes("helmet") || text.includes("protective") || text.includes("uniform")) {
    return {
      slug: "giam-sat-ppe-dong-phuc",
      title: "PPE & Uniform Monitoring",
      description: "Automatically detect labor protective equipment violations (hard hats, high-visibility vests) using AI.",
      image: "/ppe-detection.png",
      iconName: "Shield"
    };
  }
  if (text.includes("khuôn mặt") || text.includes("định danh") || text.includes("face id") || text.includes("chấm công") || text.includes("khách vip") || text.includes("xác thực") || text.includes("attendance") || text.includes("face")) {
    return {
      slug: "nhan-dien-khuon-mat",
      title: "Face Recognition",
      description: "Touchless identity verification, automated attendance, and secure access control.",
      image: "/hero-bg.gif",
      iconName: "UserCheck"
    };
  }
  if (text.includes("xâm nhập") || text.includes("hàng rào") || text.includes("xe nâng") || text.includes("máy móc") || text.includes("intrusion") || text.includes("barrier") || text.includes("fence")) {
    return {
      slug: "phat-hien-xam-nhap",
      title: "Intrusion Detection",
      description: "Virtual fence for perimeter protection, alerting on restricted area intrusion in real-time.",
      image: "/intrusion-detection.png",
      iconName: "Eye"
    };
  }
  if (text.includes("biển số") || text.includes("lpr") || text.includes("trạm cân") || text.includes("barie") || text.includes("license plate")) {
    return {
      slug: "nhan-dien-bien-so-xe-tu-dong",
      title: "License Plate Recognition",
      description: "Auto license plate character recognition for motorcycles and cars, automating speed gates.",
      image: "/kho-bai-logistics.webp",
      iconName: "Video"
    };
  }
  if (text.includes("khói") || text.includes("cháy") || text.includes("hỏa hoạn") || text.includes("lửa") || text.includes("smoke") || text.includes("fire")) {
    return {
      slug: "phat-hien-khoi-chay",
      title: "Smoke & Fire Detection",
      description: "Early smoke and flame detection from surveillance cameras before traditional sensors trigger.",
      image: "/smoke-fire-detection.png",
      iconName: "AlertTriangle"
    };
  }
  if (text.includes("đếm người") || text.includes("people counting") || text.includes("lượng khách") || text.includes("đếm sản phẩm") || text.includes("mật độ khách") || text.includes("traffic") || text.includes("count")) {
    return {
      slug: "giai-phap-dem-nguoi",
      title: "People Counting",
      description: "Real-time entry/exit traffic statistics and spatial occupancy tracking.",
      image: "/ban-le-dich-vu.png",
      iconName: "Users"
    };
  }
  if (text.includes("đỗ xe") || text.includes("dừng đỗ") || text.includes("sai quy định") || text.includes("parking")) {
    return {
      slug: "giam-sat-do-xe-sai-quy-dinh",
      title: "Illegal Parking Detection",
      description: "Alert on vehicles blocking traffic flow, emergency exits, or parked in prohibited zones.",
      image: "/kho-bai-logistics.webp",
      iconName: "Ban"
    };
  }
  if (text.includes("hành vi") || text.includes("té ngã") || text.includes("ngã") || text.includes("xô xát") || text.includes("trượt ngã") || text.includes("behavior") || text.includes("fall") || text.includes("fight")) {
    return {
      slug: "nhan-dien-phan-tich-hanh-vi",
      title: "Behavior Recognition",
      description: "Instantly detect fall incidents for patients/customers or other anomalous behaviors.",
      image: "/intrusion-detection.png",
      iconName: "Activity"
    };
  }
  if (text.includes("bản đồ nhiệt") || text.includes("heatmap") || text.includes("lộ trình") || text.includes("dừng chân") || text.includes("chuyển đổi") || text.includes("dwell")) {
    return {
      slug: "ban-do-nhiet-lo-trinh",
      title: "Heatmap & Trajectory",
      description: "Generate dwell-time density maps and shopping pathway analytics to optimize layouts.",
      image: "/ban-le-dich-vu.png",
      iconName: "TrendingUp"
    };
  }
  
  return null;
}


const renderIcon = (name: string) => {
  switch (name) {
    case "Shield": return <Shield size={18} />;
    case "UserCheck": return <UserCheck size={18} />;
    case "Eye": return <Eye size={18} />;
    case "Video": return <Video size={18} />;
    case "AlertTriangle": return <AlertTriangle size={18} />;
    case "Users": return <Users size={18} />;
    case "Ban": return <Ban size={18} />;
    case "Activity": return <Activity size={18} />;
    case "TrendingUp": return <TrendingUp size={18} />;
    case "Cpu": return <Cpu size={18} />;
    case "Layers": return <Layers size={18} />;
    default: return <CheckCircle2 size={18} />;
  }
};

interface DetailPageProps {
  slug: string;
  onBack: () => void;
  onContact: () => void;
}

export default function DetailPage({ slug, onBack, onContact }: DetailPageProps) {
  const data = DETAIL_DATA[slug];

  
  const [peopleCount, setPeopleCount] = useState(38);
  const [attendanceRate, setAttendanceRate] = useState(98.4);
  const [restrictedAlert, setRestrictedAlert] = useState(false);
  const [boxCoords, setBoxCoords] = useState({ top: "35%", left: "25%" });

  useEffect(() => {
    const timer = setInterval(() => {
      
      setPeopleCount(prev => Math.max(10, Math.min(80, prev + (Math.random() > 0.5 ? 1 : -1))));
      
      setAttendanceRate(prev => Math.min(100, Math.max(90, +(prev + (Math.random() > 0.5 ? 0.1 : -0.1)).toFixed(1))));
      
      if (Math.random() > 0.75) {
        setRestrictedAlert(prev => !prev);
      }
      
      setBoxCoords({
        top: `${28 + Math.random() * 12}%`,
        left: `${20 + Math.random() * 12}%`
      });
    }, 2500);
    return () => clearInterval(timer);
  }, [slug]);

  
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

    
    setMetaProperty("og:locale", "vi_VN");
    setMetaProperty("og:type", "article");
    setMetaProperty("og:title", pageTitle);
    setMetaProperty("og:description", data.description);
    setMetaProperty("og:url", `https://cyberdx.tech/${slug}/`);
    setMetaProperty("og:site_name", "CyberDX");
    setMetaProperty("og:image", "https://cyberdx.tech/cyberdx_logo-removebg-preview.png");
    setMetaProperty("og:image:secure_url", "https://cyberdx.tech/cyberdx_logo-removebg-preview.png");
    setMetaProperty("og:image:width", "1200");
    setMetaProperty("og:image:height", "630");

    setMetaName("twitter:card", "summary_large_image");
    setMetaName("twitter:title", pageTitle);
    setMetaName("twitter:description", data.description);
    setMetaName("twitter:image", "https://cyberdx.tech/cyberdx_logo-removebg-preview.png");

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
            "url": "https://cyberdx.tech/cyberdx_logo-removebg-preview.png",
            "contentUrl": "https://cyberdx.tech/cyberdx_logo-removebg-preview.png",
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

    
    window.scrollTo({ top: 0, behavior: "instant" });

    return () => {
      
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

  const isBlogPost = data && data.category === "Library" && ![
    "blog",
    "cau-hoi-thuong-gap",
    "case-studies",
    "dieu-khoan-su-dung",
    "chinh-sach-bao-mat",
    "career",
    "ai-solutions-architect",
    "data-science-engineer",
    "cloud-integration-developer"
  ].includes(slug);

  useEffect(() => {
    if (!data || !isBlogPost) return;
    
    const timer = setTimeout(() => {
      const contentEl = document.querySelector('.blog-content-html');
      if (!contentEl) return;
      
      const handleLinkClick = (e: Event) => {
        const target = e.target as HTMLElement;
        const a = target.closest('a');
        if (a) {
          const href = a.getAttribute('href') || '';
          if (href.startsWith('/') || href.includes('cyberdx.tech') || href.startsWith(window.location.origin)) {
            e.preventDefault();
            let linkPath = href;
            if (href.includes('cyberdx.tech')) {
              const parts = href.split('cyberdx.tech');
              linkPath = parts[parts.length - 1];
            }
            const cleanSlug = linkPath.replace(/^\/|\/$/g, "");
            if (cleanSlug) {
              document.dispatchEvent(new CustomEvent("dx:open-detail", { detail: cleanSlug }));
            }
          }
        }
      };

      contentEl.addEventListener('click', handleLinkClick as EventListener);
      return () => contentEl.removeEventListener('click', handleLinkClick as EventListener);
    }, 100);

    return () => clearTimeout(timer);
  }, [slug, data, isBlogPost]);

  if (!data) return null;
  if (slug === "case-studies") {
    return (
      <div className="min-h-screen bg-[#030303] text-white pt-28 pb-16 relative overflow-hidden flex flex-col">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#d85b6a]/5 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="max-w-4xl mx-auto px-4 md:px-8 w-full relative z-10 flex-1 flex flex-col gap-8 text-left">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.5)] transform hover:scale-105 active:scale-95"
            >
              <ArrowLeft size={16} />
              Back to Homepage
            </button>
          </motion.div>

          <div className="flex flex-col gap-6 pt-8">
            <div className="inline-flex items-center gap-1.5 self-start bg-[#d85b6a]/15 border border-[#d85b6a]/30 rounded-full px-4 py-1.5 text-[11px] font-black text-[#ff8a9a] uppercase font-mono tracking-widest shadow-inner">
              <Sparkles size={12} className="text-[#d85b6a]" />
              Case Studies
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight text-white font-sans">
              Case Studies
            </h1>
            <p className="text-white/60 text-lg font-semibold leading-relaxed max-w-2xl">
              New CyberDX case studies will be published here soon.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
            <p className="text-white/50 text-sm font-bold uppercase tracking-widest font-mono">
              No case studies available yet.
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (slug === "blog") {
    return (
      <div className="min-h-screen bg-[#030303] text-white pt-28 pb-16 relative overflow-hidden flex flex-col">
        
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#d85b6a]/5 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 flex-1 flex flex-col gap-10 text-left">
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.5)] transform hover:scale-105 active:scale-95"
            >
              <ArrowLeft size={16} />
              Back to Homepage
            </button>
          </motion.div>

          
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-1.5 self-start bg-[#d85b6a]/15 border border-[#d85b6a]/30 rounded-full px-4 py-1.5 text-[11px] font-black text-[#ff8a9a] uppercase font-mono tracking-widest shadow-inner">
              <Sparkles size={12} className="text-[#d85b6a]" />
              Library &amp; Insights
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none text-white font-sans">
              CyberDX Blog &amp; News
            </h1>

            <p className="text-base sm:text-lg font-bold text-white/40 uppercase font-mono tracking-wider">
              Insights, articles, and updates on AI, computer vision, and technology
            </p>

            <div className="h-[2px] w-24 bg-gradient-to-r from-[#d85b6a] to-purple-500" />
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className={`bg-white/[0.01] border border-white/5 rounded-3xl overflow-hidden hover:border-[#d85b6a]/30 hover:bg-white/[0.02] transition-all flex flex-col group shadow-lg`}>
                <div className="relative aspect-video w-full overflow-hidden bg-[#08080a]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-lg font-black text-white group-hover:text-[#ff8a9a] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-sm font-semibold line-clamp-3 leading-relaxed flex-1">
                    {post.description}
                  </p>
                  <p className="text-white/30 text-xs font-bold font-mono tracking-wider mt-1">
                    {post.hashtags}
                  </p>
                  <div className="pt-2 border-t border-white/5 mt-2">
                    {post.postUrl.startsWith("/") ? (
                      <button
                        onClick={() => {
                          const slug = post.postUrl.replace(/^\/|\/$/g, "");
                          document.dispatchEvent(new CustomEvent("dx:open-detail", { detail: slug }));
                        }}
                        className="inline-flex items-center gap-1 text-xs font-black text-[#ff8a9a] uppercase tracking-wider hover:translate-x-1 transition-all cursor-pointer bg-transparent border-0 p-0"
                      >
                        Read Article
                        <ArrowUpRight size={12} />
                      </button>
                    ) : (
                      <a
                        href={post.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-black text-[#ff8a9a] uppercase tracking-wider hover:translate-x-1 transition-all"
                      >
                        Read Full Post
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }


  if (isBlogPost) {
    return (
      <div className="min-h-screen bg-[#030303] text-white pt-28 pb-16 relative overflow-hidden flex flex-col">
        
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#d85b6a]/5 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto px-4 md:px-8 w-full relative z-10 flex-1 flex flex-col gap-8 text-left">
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.5)] transform hover:scale-105 active:scale-95"
            >
              <ArrowLeft size={16} />
              Back to News
            </button>
          </motion.div>

          
          <div className="flex flex-col gap-6 pt-4">
            <div className="inline-flex items-center gap-1.5 self-start bg-[#d85b6a]/15 border border-[#d85b6a]/30 rounded-full px-4 py-1.5 text-[11px] font-black text-[#ff8a9a] uppercase font-mono tracking-widest shadow-inner">
              <Sparkles size={12} className="text-[#d85b6a]" />
              Blog &amp; News
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight text-white font-sans">
              {data.title}
            </h1>

            <p className="text-sm font-bold text-white/40 uppercase font-mono tracking-wider">
              {data.subtitle}
            </p>

            <div className="h-[2px] w-24 bg-gradient-to-r from-[#d85b6a] to-purple-500" />
          </div>

          
          {data.image && (
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] bg-[#08080a]">
              <img 
                src={data.image} 
                alt={data.title}
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          )}

          
          <div className="blog-content-container py-4">
            <article 
              className="blog-content-html prose prose-invert max-w-none text-white/80 leading-relaxed text-base sm:text-lg font-semibold space-y-6"
              dangerouslySetInnerHTML={{ __html: data.contentHtml || data.description }}
            />
          </div>

          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-r from-[#d85b6a]/10 to-purple-500/5 border border-[#d85b6a]/20 text-left relative overflow-hidden shadow-[0_8px_32px_rgba(216,91,106,0.05)] mt-12"
          >
            <h4 className="text-white font-black text-lg uppercase tracking-tight mb-2">Want to know more about our technology?</h4>
            <p className="text-white/60 text-sm font-semibold mb-6">Explore how our AI Solutions can help automate operations and secure your business.</p>
            <button
              onClick={onBack}
              className="inline-flex items-center justify-center gap-2 bg-[#d85b6a] hover:bg-[#e26c7b] text-white font-black uppercase tracking-wider text-xs px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(216,91,106,0.35)] transition-all cursor-pointer"
            >
              Explore Solutions
              <ArrowUpRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  const getMockupBgImage = () => {
    switch (slug) {
      case "san-xuat-nha-may":
        return "/san-xuat-nha-may.webp";
      case "nhan-dien-khuon-mat":
        return "/hero-bg.gif"; 
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
        return "/cyberdx_logo-removebg-preview.png";
    }
  };

  const renderVisualMockup = () => {
    const bgImage = getMockupBgImage();

    switch (slug) {
      case "san-xuat-nha-may":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${bgImage}')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,91,106,0.15)_0%,transparent_70%)] pointer-events-none" />

            
            <motion.div
              animate={{ y: ["0%", "520%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-0.5 bg-[#d85b6a] opacity-50 z-15 shadow-[0_0_8px_rgba(216,91,106,0.8)] pointer-events-none"
            />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1 text-[10px] font-mono text-[#ff8a9a]">
                <Activity size={12} className="animate-pulse text-[#d85b6a]" />
                <span>FACTORY SAFETY: ACTIVE</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 bg-black/60 px-2 py-1 rounded">
                CAM_04 - CONVEYOR BELT ZONE
              </span>
            </div>

            
            <motion.div 
              animate={{ top: boxCoords.top, left: boxCoords.left }}
              transition={{ duration: 0.6, type: "spring" }}
              className="absolute w-28 h-28 border-2 border-red-500 rounded-lg z-10 flex flex-col justify-between p-1 bg-red-500/10"
            >
              <span className="text-[7px] font-mono text-red-400 font-bold bg-black/80 px-1 rounded self-start font-black">WARNING: NO HELMET</span>
              <div className="w-3 h-3 border-b-2 border-r-2 border-red-500 self-end" />
            </motion.div>

            <div className="absolute top-1/3 left-2/3 w-24 h-32 border-2 border-green-500 rounded-lg z-10 flex flex-col justify-between p-1 bg-green-500/5">
              <span className="text-[7px] font-mono text-green-400 font-bold bg-black/80 px-1 rounded self-start font-black">PPE: OK</span>
              <div className="w-3 h-3 border-b-2 border-r-2 border-green-500 self-end" />
            </div>

            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/85 border border-[#d85b6a]/30 backdrop-blur-lg flex items-center justify-between gap-4 z-10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-950 border border-red-500/30 flex items-center justify-center text-red-500">
                  <AlertTriangle size={18} />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide">SAFETY VIOLATION ALERT</h4>
                  <p className="text-[10px] text-white/50">Detected worker not wearing a protective hard hat</p>
                </div>
              </div>
              <span className="text-[9px] bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded font-mono font-bold animate-pulse">
                KPI WARNING
              </span>
            </div>
          </div>
        );

      case "kho-van-hang-hoa":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${bgImage}')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />

            
            <motion.div
              animate={{ y: ["0%", "520%", "0%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-0.5 bg-blue-500 opacity-50 z-15 shadow-[0_0_8px_rgba(59,130,246,0.8)] pointer-events-none"
            />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1 text-[10px] font-mono text-blue-400">
                <Cpu size={12} className="animate-pulse" />
                <span>WAREHOUSE RADAR: RUNNING</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 bg-black/60 px-2 py-1 rounded">
                CAM_09 - WAREHOUSE DOOR AREA
              </span>
            </div>

            
            <motion.div 
              animate={{ top: boxCoords.top, left: boxCoords.left }}
              transition={{ duration: 0.8, type: "spring" }}
              className="absolute w-36 h-24 border-2 border-blue-500 rounded bg-blue-500/10 z-10 flex flex-col justify-between p-1"
            >
              <span className="text-[7px] font-mono text-blue-400 bg-black/85 px-1 rounded self-start font-black">FORKLIFT DETECTED [94%]</span>
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-ping self-center" />
            </motion.div>

            
            <div className="absolute inset-x-0 top-1/2 h-0.5 bg-red-500/50 flex items-center justify-center z-10">
              <span className="text-[8px] bg-red-600 border border-red-500 text-white font-mono px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse -translate-y-2.5">
                VIRTUAL LINE - RESTRICTED ENTRY
              </span>
            </div>
          </div>
        );

      case "ban-le-dich-vu":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${bgImage}')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none" />
            
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-tr from-red-500/25 via-yellow-500/20 to-blue-500/15 blur-2xl pointer-events-none z-10" 
            />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1 text-[10px] font-mono text-green-400">
                <Activity size={12} className="animate-pulse" />
                <span>HEATMAP OVERLAY: LIVE</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 bg-black/60 px-2 py-1 rounded">
                ZONE_A_RET - PERFUME DISPLAY
              </span>
            </div>

            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/85 border border-green-500/30 backdrop-blur-lg flex items-center justify-between z-10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-950 border border-green-500/30 flex items-center justify-center text-green-400">
                  <TrendingUp size={18} />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide">TRAFFIC ANALYSIS</h4>
                  <p className="text-[10px] text-white/50">Real-time density: {peopleCount} people in area</p>
                </div>
              </div>
              <div className="font-mono text-right">
                <span className="text-xs text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                  +18.2% HOURLY AVG
                </span>
              </div>
            </div>
          </div>
        );

      case "giao-duc-dao-tao-2":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] p-6 flex flex-col justify-between group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-75 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${bgImage}')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] pointer-events-none animate-pulse" />

            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-black">AI CLASSROOM ATTENDANCE</span>
              <span className="text-[9px] font-mono text-green-400 font-bold bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded">
                MONITORING
              </span>
            </div>

            
            <div className="my-auto flex flex-col items-center gap-2 z-10">
              <div className="bg-black/75 border border-white/10 p-4 rounded-2xl text-center min-w-[200px] shadow-lg">
                <span className="text-[9px] text-white/40 font-mono uppercase block mb-1">Class Attendance Rate</span>
                <span className="text-3xl font-black text-white font-mono tracking-tight">
                  {attendanceRate}%
                </span>
                <span className="text-[10px] text-green-400 font-mono block mt-1 uppercase font-bold tracking-widest">
                  Attendance: 40/40 Present
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center text-[9px] font-mono text-white/40 z-10">
              <span>STUDENT IDENTIFICATION: ACTIVE</span>
              <span>CLASS 12A1</span>
            </div>
          </div>
        );

      case "khach-san-du-lich":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] p-6 flex flex-col justify-between group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${bgImage}')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,91,106,0.1)_0%,transparent_70%)] pointer-events-none animate-pulse" />

            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">RECEPTION VIP SCANNER</span>
              <span className="text-[9px] font-mono text-[#ff8a9a] font-bold bg-[#d85b6a]/10 border border-[#d85b6a]/20 px-2 py-0.5 rounded animate-pulse">
                VIP IN
              </span>
            </div>

            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mx-auto bg-black/85 border border-[#d85b6a]/30 p-3.5 rounded-xl flex items-center gap-3 backdrop-blur-md max-w-xs z-10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
            >
              <div className="w-10 h-10 rounded-full border-2 border-[#d85b6a] bg-[#d85b6a]/10 flex items-center justify-center text-[#ff8a9a] font-bold font-mono">
                VIP
              </div>
              <div className="text-left font-mono">
                <span className="text-[8px] text-[#ff8a9a] uppercase block tracking-wider">LOYAL GUEST / VIP</span>
                <span className="text-xs font-black text-white block">MINH TUAN PHAM</span>
                <span className="text-[8px] text-white/40 block">ACCURACY: 99.8% | CHECK-IN</span>
              </div>
            </motion.div>

            <div className="text-[9px] font-mono text-white/40 text-center z-10">
              * Automatically notifies reception desk upon guest arrival.
            </div>
          </div>
        );

      case "benh-vien-co-so-y-te":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] p-6 flex flex-col justify-between group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${bgImage}')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.15)_0%,transparent_70%)] pointer-events-none animate-pulse" />

            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest font-black animate-pulse">RESTRICTED ZONE SECURITY</span>
              <span className="text-[9px] font-mono text-white/40 bg-black/60 px-2 py-1 rounded">CAM_11 - PHARMACY DEPOT DOOR</span>
            </div>

            
            <div className="flex-1 flex items-center justify-center z-10">
              <AnimatePresence mode="wait">
                {restrictedAlert ? (
                  <motion.div
                    key="alarm"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="border border-red-500 p-4 rounded-xl bg-red-950/80 text-center flex flex-col gap-1 min-w-[220px] shadow-[0_0_24px_rgba(239,68,68,0.5)] animate-pulse"
                  >
                    <AlertTriangle size={20} className="mx-auto text-red-500" />
                    <span className="text-[9px] text-red-400 font-mono font-bold uppercase block">INTRUSION WARNING</span>
                    <span className="text-sm font-black text-white font-mono uppercase tracking-wide">RESTRICTED ZONE</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="normal"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="border border-green-500 p-4 rounded-xl bg-black/80 text-center flex flex-col gap-1 min-w-[220px]"
                  >
                    <Shield size={20} className="mx-auto text-green-500" />
                    <span className="text-[9px] text-green-400 font-mono font-bold uppercase block">SECURITY STATUS</span>
                    <span className="text-sm font-black text-white font-mono uppercase tracking-wide">NORMAL</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="text-[9px] font-mono text-white/40 text-center z-10 pt-2">
              * Automated employee ID scanner. Instantly alerts on unauthorized access.
            </div>
          </div>
        );

      case "nhan-dien-khuon-mat":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] flex items-center justify-center group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${bgImage}')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="w-[190px] h-[230px] rounded-2xl border-2 border-purple-500/30 relative flex flex-col justify-between p-4 overflow-hidden bg-black/75 shadow-[0_0_50px_rgba(168,85,247,0.25)] z-10">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                
                <svg width="120" height="140" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-400">
                  <path d="M50 15C32.8782 15 19 28.8782 19 46C19 63.8562 28.5 82 50 105C71.5 82 81 63.8562 81 46C81 28.8782 67.1218 15 50 15Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                  <ellipse cx="37" cy="45" rx="5" ry="3" stroke="currentColor" strokeWidth="1.5" />
                  <ellipse cx="63" cy="45" rx="5" ry="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M47 55H53V68H47V55Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M35 80C42 86 58 86 65 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  
                  <circle cx="50" cy="28" r="2.5" fill="#a855f7" className="animate-ping" />
                  <circle cx="37" cy="45" r="2" fill="#22c55e" />
                  <circle cx="63" cy="45" r="2" fill="#22c55e" />
                  <circle cx="50" cy="62" r="2" fill="#22c55e" />
                  <circle cx="50" cy="83" r="2" fill="#a855f7" />
                  <circle cx="28" cy="60" r="2" fill="#a855f7" />
                  <circle cx="72" cy="60" r="2" fill="#a855f7" />
                </svg>
              </div>
              
              <div className="flex justify-between items-center z-10">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-[8px] font-mono text-purple-400 uppercase tracking-widest font-black">FACE_ID ACTIVE</span>
              </div>

              <div className="bg-purple-950/80 border border-purple-500/30 p-2.5 rounded-xl text-center z-10 backdrop-blur-md">
                <span className="text-[9px] font-mono text-purple-300 font-bold block">VERIFICATION SUCCESSFUL</span>
                <span className="text-[9px] font-mono text-green-400 font-black tracking-widest">ACCURACY: 99.8%</span>
              </div>

              <motion.div 
                animate={{ y: ["0%", "220px", "0%"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-0.5 bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.9)] z-20 pointer-events-none" 
              />
            </div>
          </div>
        );
      
      case "giam-sat-ppe-dong-phuc":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${bgImage}')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-10 pointer-events-none" />
            
            
            <motion.div
              animate={{ y: ["0%", "520%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-0.5 bg-green-500 opacity-60 z-15 shadow-[0_0_8px_rgba(34,197,94,0.8)] pointer-events-none"
            />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1 text-[10px] font-mono text-green-400">
                <Shield size={12} className="animate-pulse" />
                <span>PPE COMPLIANCE: MONITORING</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 bg-black/60 px-2 py-1 rounded">
                CAM_12 - WORKSHOP DOOR
              </span>
            </div>

            
            <motion.div 
              animate={{ top: boxCoords.top, left: boxCoords.left }}
              transition={{ duration: 0.8, type: "spring" }}
              className="absolute w-24 h-40 border-2 border-red-500 rounded-lg z-10 flex flex-col justify-between p-1 bg-red-500/10"
            >
              <span className="text-[7px] font-mono text-red-400 font-bold bg-black/85 px-1 rounded self-start font-black">ALERT: NO HELMET</span>
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping self-center" />
            </motion.div>

            <div className="absolute top-1/4 left-[55%] w-28 h-48 border-2 border-green-500 rounded-lg z-10 flex flex-col justify-between p-1 bg-green-500/5">
              <div className="flex flex-col gap-0.5 items-start">
                <span className="text-[7px] font-mono text-green-400 font-bold bg-black/85 px-1 rounded font-black">HELMET: OK</span>
                <span className="text-[7px] font-mono text-green-400 font-bold bg-black/85 px-1 rounded font-black">VEST: OK</span>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full self-center" />
            </div>

            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/90 border border-red-500/30 backdrop-blur-lg flex items-center justify-between gap-4 z-10 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-950 border border-red-500 flex items-center justify-center text-red-500">
                  <AlertTriangle size={18} />
                </div>
                <div className="text-left font-mono">
                  <h4 className="text-xs font-black text-white uppercase tracking-wide">HSE VIOLATION DETECTED</h4>
                  <p className="text-[9px] text-white/50">Detected 01 personnel without a hard hat</p>
                </div>
              </div>
              <span className="text-[9px] bg-red-500/20 text-red-400 border border-red-500/30 px-2.5 py-1 rounded font-mono font-black animate-pulse">
                SPEAKER ALARM OUT
              </span>
            </div>
          </div>
        );

      case "giai-phap-dem-nguoi":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${bgImage}')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-10 pointer-events-none" />
            
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1 text-[10px] font-mono text-[#ff8a9a]">
                <Activity size={12} className="animate-pulse text-[#d85b6a]" />
                <span>PEOPLE COUNTER: ACTIVE</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 bg-black/60 px-2 py-1 rounded">
                CAM_02 - MAIN ENTRANCE
              </span>
            </div>

            
            <div className="absolute inset-x-0 top-1/2 h-0.5 bg-yellow-500/50 z-10 flex items-center justify-between px-6 pointer-events-none">
              <span className="text-[8px] bg-yellow-500 text-black font-mono px-2 py-0.5 rounded font-black tracking-wider uppercase -translate-y-2.5">
                VIRTUAL LINE IN/OUT
              </span>
              <div className="h-4 w-0.5 bg-yellow-500 animate-pulse" />
            </div>

            
            <div className="absolute top-1/3 left-1/4 -translate-x-1/2 bg-black/85 border border-[#d85b6a]/30 p-4 rounded-2xl text-center z-10 shadow-xl min-w-[120px] backdrop-blur-md">
              <span className="text-[9px] text-white/40 font-mono uppercase block mb-1">&rarr; ENTRIES (IN)</span>
              <span className="text-3xl font-black text-white font-mono">{peopleCount + 12}</span>
              <span className="text-[8px] text-[#ff8a9a] font-mono block mt-1">+2.4% HOURLY AVG</span>
            </div>

            <div className="absolute top-1/3 right-1/4 translate-x-1/2 bg-black/85 border border-white/10 p-4 rounded-2xl text-center z-10 shadow-xl min-w-[120px] backdrop-blur-md">
              <span className="text-[9px] text-white/40 font-mono uppercase block mb-1">&larr; EXITS (OUT)</span>
              <span className="text-3xl font-black text-white/70 font-mono">{peopleCount - 4}</span>
              <span className="text-[8px] text-white/30 font-mono block mt-1">MINOR VARIATION</span>
            </div>

            
            <div className="absolute bottom-6 left-6 right-6 p-3.5 rounded-xl bg-black/90 border border-green-500/30 flex items-center justify-between z-10 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-green-950 border border-green-500/30 flex items-center justify-center text-green-400">
                  <UserCheck size={16} />
                </div>
                <div className="text-left font-mono">
                  <h4 className="text-xs font-black text-white uppercase tracking-wide">REAL-TIME OCCUPANCY</h4>
                  <p className="text-[9px] text-white/50">Current count in space: {peopleCount} people</p>
                </div>
              </div>
              <span className="text-[9px] bg-green-500/20 text-green-400 border border-green-500/20 px-2 py-0.5 rounded font-mono font-black uppercase">
                SAFE ZONE
              </span>
            </div>
          </div>
        );

      case "giam-sat-do-xe-sai-quy-dinh":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${bgImage}')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-10 pointer-events-none" />
            
            
            <div className="absolute inset-0 border-[6px] border-red-500/20 pointer-events-none z-10" />
            
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1 text-[10px] font-mono text-red-500">
                <AlertTriangle size={12} className="animate-pulse" />
                <span>NO PARKING MONITOR: VIOLATION DETECTED</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 bg-black/60 px-2 py-1 rounded">
                CAM_07 - EMERGENCY AMBULANCE LOBBY
              </span>
            </div>

            
            <div className="absolute top-1/3 left-1/3 w-[220px] h-[100px] border-2 border-red-500 bg-red-500/10 rounded-xl z-10 flex flex-col justify-between p-2 shadow-[0_0_20px_rgba(239,68,68,0.3)] animate-pulse">
              <div className="flex justify-between items-start">
                <span className="text-[8px] font-mono text-white bg-red-600 px-1.5 py-0.5 rounded font-black">CAR_DETECTION [97%]</span>
                <span className="text-[7px] font-mono text-red-400 font-bold bg-black/80 px-1 rounded">STOP TIME: 45s</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-[9px] font-mono text-white font-black">LPR: 30A-555.55</span>
                <span className="text-[7px] text-red-400 font-mono font-bold animate-ping">&bull; WARNING</span>
              </div>
            </div>

            
            <div className="absolute bottom-6 left-6 right-6 p-3.5 rounded-xl bg-black/90 border border-red-500/40 backdrop-blur-lg flex items-center justify-between gap-4 z-10 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-950 border border-red-500/30 flex items-center justify-center text-red-500 animate-pulse">
                  <AlertTriangle size={18} />
                </div>
                <div className="text-left font-mono">
                  <h4 className="text-xs font-black text-white uppercase tracking-wide">EMERGENCY LANE VIOLATION</h4>
                  <p className="text-[9px] text-white/50">Detected vehicle blocking fire exit / ambulance route</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[8px] bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded font-mono font-black animate-pulse uppercase">
                  TICKET_CREATED
                </span>
              </div>
            </div>
          </div>
        );

      case "nhan-dien-phan-tich-hanh-vi":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${bgImage}')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-10 pointer-events-none" />
            
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1 text-[10px] font-mono text-red-400">
                <Activity size={12} className="animate-pulse" />
                <span>BEHAVIOR ANALYZER: ALERT</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 bg-black/60 px-2 py-1 rounded">
                CAM_03 - PUBLIC APARTMENT CORRIDOR
              </span>
            </div>

            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <svg width="150" height="150" viewBox="0 0 100 100" className="text-red-500 opacity-80">
                
                
                <circle cx="35" cy="70" r="5" stroke="currentColor" strokeWidth="1.5" fill="rgba(239,68,68,0.2)" />
                
                <line x1="35" y1="75" x2="55" y2="78" stroke="currentColor" strokeWidth="1.5" />
                
                <line x1="55" y1="78" x2="75" y2="75" stroke="currentColor" strokeWidth="1.5" />
                <line x1="75" y1="75" x2="85" y2="60" stroke="currentColor" strokeWidth="1.5" />
                <line x1="55" y1="78" x2="68" y2="90" stroke="currentColor" strokeWidth="1.5" />
                
                <circle cx="55" cy="78" r="2" fill="#ef4444" />
                <circle cx="75" cy="75" r="2" fill="#ef4444" />
                <circle cx="85" cy="60" r="2" fill="#ef4444" />
                <circle cx="68" cy="90" r="2" fill="#ef4444" />
                
                <rect x="20" y="50" width="72" height="46" rx="4" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                <text x="25" y="44" fill="#ef4444" fontSize="5" fontFamily="monospace" fontWeight="bold">BEHAVIOR: FALL DETECTED [96.8%]</text>
              </svg>
            </div>

            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/90 border border-red-500/50 backdrop-blur-lg flex items-center justify-between gap-4 z-10 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-950 border border-red-500 flex items-center justify-center text-red-500 animate-bounce">
                  <AlertTriangle size={18} />
                </div>
                <div className="text-left font-mono">
                  <h4 className="text-xs font-black text-white uppercase tracking-wide">PATIENT / ELDERLY FALL ALERT</h4>
                  <p className="text-[9px] text-white/50">Abnormal fall pose detected in corridor level 3</p>
                </div>
              </div>
              <span className="text-[9px] bg-red-500 text-white px-2.5 py-1 rounded font-mono font-black animate-pulse">
                CALL SECURITY
              </span>
            </div>
          </div>
        );

      case "ban-do-nhiet-lo-trinh":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${bgImage}')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-10 pointer-events-none" />
            
            
            <motion.div 
              animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-[160px] h-[160px] bg-radial from-red-500/40 via-yellow-500/20 to-transparent blur-xl pointer-events-none z-10" 
            />
            <motion.div 
              animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.4, 0.55, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-1/3 right-1/3 w-[180px] h-[180px] bg-radial from-red-600/45 via-yellow-400/15 to-transparent blur-xl pointer-events-none z-10" 
            />
            <div className="absolute top-1/3 right-1/4 w-[100px] h-[100px] bg-radial from-blue-500/30 via-transparent to-transparent blur-md pointer-events-none z-10" />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1 text-[10px] font-mono text-green-400">
                <Activity size={12} className="animate-pulse" />
                <span>ZONE HEATMAP ANALYSIS: LIVE FEED</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 bg-black/60 px-2 py-1 rounded">
                ZONE_B - RETAIL AISLE 4
              </span>
            </div>

            
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-60">
              <motion.path
                d="M 20,40 Q 50,20 80,50 T 150,90 T 250,40"
                fill="none"
                stroke="#d85b6a"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -20 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 100,100 C 150,120 220,60 300,100"
                fill="none"
                stroke="#ffb703"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: 20 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-black/85 border border-[#d85b6a]/30 px-3 py-1.5 rounded-lg text-left z-10 shadow-lg font-mono text-[9px]">
              <span className="text-[#ff8a9a] font-black uppercase block">DISPLAY SHELF A</span>
              <span className="text-white block mt-0.5">Density: 87% (HOTSPOT)</span>
              <span className="text-white/50 block">Dwell time: 4.8 mins</span>
            </div>

            
            <div className="absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-black/90 border border-white/5 flex items-center justify-between z-10 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#d85b6a]/15 border border-[#d85b6a]/30 flex items-center justify-center text-[#ff8a9a]">
                  <TrendingUp size={16} />
                </div>
                <div className="text-left font-mono">
                  <h4 className="text-xs font-black text-white uppercase tracking-wide">SHOPPING ROUTE ANALYTICS</h4>
                  <p className="text-[9px] text-white/50">Optimize layout design based on product interaction time</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[8px] font-mono text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>HOT</span>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 ml-1.5" />
                <span>WARM</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 ml-1.5" />
                <span>COLD</span>
              </div>
            </div>
          </div>
        );

      case "nhan-dien-bien-so-xe-tu-dong":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] p-6 flex flex-col justify-between group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${bgImage}')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none" />
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
                
                <span className="text-xs text-white/40 font-mono">RECOGNIZED LICENSE PLATE</span>
                <span className="text-2xl font-black text-white font-mono tracking-wider">29A-888.88</span>
                <span className="text-[10px] text-green-400 font-mono font-bold uppercase tracking-widest">VIP WHITELIST (AUTHORIZED)</span>
              </div>
            </div>

            <div className="flex justify-between items-center z-10 text-[9px] font-mono text-white/40">
              <span>LATENCY: 120ms</span>
              <span>VEHICLES/HR: 85 vehicles</span>
            </div>
          </div>
        );

      case "phat-hien-khoi-chay":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] p-6 flex flex-col justify-between group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${bgImage}')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.2)_0%,transparent_70%)] pointer-events-none animate-pulse" />
            
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

            <div className="p-3 bg-red-950/60 border border-red-500/30 rounded-xl text-left z-10 backdrop-blur-md">
              <span className="text-xs text-white font-bold block uppercase">SMOKE & FIRE DETECTED</span>
              <span className="text-[10px] text-white/60 font-mono">Camera: CAM-12 | Area: Raw Materials Store | Latency: Instant</span>
            </div>
          </div>
        );

      case "phat-hien-xam-nhap":
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] p-6 flex flex-col justify-between group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${bgImage}')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,91,106,0.1)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest font-black">INTRUSION RADAR</span>
              <span className="text-[8px] font-mono text-white/40 bg-black/60 px-2 py-1 rounded">ZONE_B_BOUNDARY</span>
            </div>

            <div className="absolute inset-x-0 top-1/2 h-0.5 bg-red-500/60 shadow-[0_0_8px_rgba(239,68,68,0.8)] z-10 flex justify-center items-center">
              <span className="text-[8px] bg-red-600 text-white font-mono px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse -translate-y-2.5">VIRTUAL FENCE BOUNDARY</span>
            </div>

            <motion.div 
              animate={{ top: boxCoords.top, left: boxCoords.left }}
              transition={{ duration: 0.7, type: "spring" }}
              className="absolute w-16 h-24 border-2 border-red-500 rounded bg-red-500/10 z-10 flex flex-col justify-between p-1"
            >
              <span className="text-[8px] font-mono text-red-400 font-bold bg-black/80 px-1 rounded">STRANGER DETECTED</span>
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full self-center animate-ping" />
            </motion.div>

            <div className="flex justify-between items-center text-[9px] font-mono text-white/40 z-10 pt-4 border-t border-white/5">
              <span>STATUS: INTRUSION WARNING</span>
              <span>IP CAM: 192.168.1.101</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(216,91,106,0.15)] bg-[#08080a] p-6 flex flex-col justify-between group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${bgImage}')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,91,106,0.1)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 border border-dashed border-white/20 rounded-xl flex items-center justify-center">
              <div className="w-12 h-12 border border-white/30 rounded-full animate-ping pointer-events-none" />
            </div>

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
      
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#d85b6a]/5 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
      
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 flex-1 flex flex-col gap-16">
        
        
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-left"
        >
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.5)] transform hover:scale-105 active:scale-95"
          >
            <ArrowLeft size={16} />
            Back to Homepage
          </button>
        </motion.div>

        
        <div className="py-12 md:py-16 flex flex-col gap-6 text-left max-w-4xl">
          <div className="inline-flex items-center gap-1.5 self-start bg-[#d85b6a]/15 border border-[#d85b6a]/30 rounded-full px-4 py-1.5 text-[11px] font-black text-[#ff8a9a] uppercase font-mono tracking-widest shadow-inner">
            <Sparkles size={12} className="text-[#d85b6a]" />
            {data.category}
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none text-white font-sans">
            {data.title}
          </h1>
          
          <p className="text-xl sm:text-2xl font-extrabold text-gradient-peach leading-snug">
            {data.subtitle}
          </p>

          <div className="h-[2px] w-24 bg-gradient-to-r from-[#d85b6a] to-purple-500 my-2" />
          
          <p className="text-white/70 text-base sm:text-lg leading-relaxed font-semibold max-w-3xl">
            {data.description}
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <button
              onClick={onContact}
              className="inline-flex items-center justify-center gap-2 bg-[#d85b6a] hover:bg-[#e26c7b] text-white font-black uppercase tracking-widest text-xs px-8 py-4.5 rounded-full shadow-[0_8px_24px_rgba(216,91,106,0.35)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 cursor-pointer"
            >
              Request a Demo
              <ArrowUpRight size={16} />
            </button>
            <button
              onClick={onContact}
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-black uppercase tracking-widest text-xs px-8 py-4.5 rounded-full hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 cursor-pointer"
            >
              Download Brochure
            </button>
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left py-8">
          <div className="lg:col-span-5 relative w-full flex justify-center py-6">
            
            <div className="relative w-full aspect-[4/5] max-w-[340px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#08080a] group">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
                style={{ backgroundImage: `url('${getMockupBgImage()}')` }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent z-10 pointer-events-none" />
              
              
              <div className="absolute top-[25%] left-[20%] w-[55%] h-[50%] border-2 border-red-500 rounded bg-red-500/10 z-10 flex flex-col justify-between p-2 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <span className="text-[8px] font-mono text-white bg-red-600 px-1.5 py-0.5 rounded font-black self-start uppercase">
                  {data.title}
                </span>
                <span className="text-[6px] text-red-400 font-mono font-bold self-end tracking-wider animate-pulse">
                  AI SCANNING...
                </span>
              </div>
            </div>

            
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                Solution Overview: {data.title}
              </h2>
              <div className="h-0.5 w-16 bg-[#d85b6a]" />
              <p className="text-white/70 text-base leading-relaxed font-semibold">
                CyberDX provides advanced automatic AI video analytics systems, monitoring real-time video streams to deliver the most accurate insights and alerts. The solution enhances security, optimizes operational productivity, and cuts down manual monitoring costs.
              </p>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {data.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 shadow-md flex flex-col gap-2 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d85b6a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="text-3xl font-black text-white font-mono tracking-tight group-hover:text-[#d85b6a] transition-colors duration-300">
                    {metric.value}
                  </span>
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest font-mono">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        {data.challenges && data.challenges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-6 text-left py-8"
          >
            <div className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-widest font-mono border-b border-white/5 pb-3">
              <AlertTriangle size={18} className="text-[#d85b6a]" />
              Industry Challenges & Pain Points
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.challenges.map((challenge, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-[#d85b6a]/30 transition-all hover:bg-white/[0.02] flex flex-col gap-4 relative group overflow-hidden"
                >
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#d85b6a]/0 via-[#d85b6a]/30 to-[#d85b6a]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="text-4xl font-black text-[#d85b6a]/20 font-mono tracking-tight group-hover:text-[#d85b6a]/40 transition-colors duration-300">
                    {challenge.number}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-white text-lg font-black leading-snug tracking-tight">
                      {challenge.title}
                    </h4>
                    <p className="text-white/60 text-sm font-semibold leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        
        <div className="flex flex-col gap-8 text-left py-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              Operation Workflow
            </h2>
            <p className="text-white/50 text-sm font-semibold max-w-2xl">
              The AI system continuously monitors existing RTSP camera video feeds, analyzes behavior at the edge, and instantly notifies the responsible department.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(() => {
              const titles = ["Monitor", "Identify", "Notify", "Respond"];
              return data.workflow.map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-6 bg-white/[0.02] border border-white/10 p-8 rounded-3xl relative overflow-hidden hover:border-[#d85b6a]/30 transition-all hover:bg-white/[0.04] group h-full shadow-lg"
                >
                  
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d85b6a]/20 to-[#d85b6a]/5 border border-[#d85b6a]/30 flex items-center justify-center text-[#ff8a9a] font-mono font-black text-lg group-hover:scale-110 transition-transform shadow-inner">
                    {i + 1}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-white font-black text-lg tracking-tight uppercase">
                      {titles[i] || `Step 0${i + 1}`}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed font-semibold">
                      {step}
                    </p>
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>

        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-6 text-left py-8"
        >
          <div className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-widest font-mono border-b border-white/5 pb-3">
            <Layers size={18} className="text-[#d85b6a]" />
            Key Solution Highlights
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.features.map((feature, i) => {
              const cardDetails = getFeatureCardDetails(feature);
              const isCardWithImage = data.category === "Industries" || slug === "career";

              if (cardDetails && isCardWithImage) {
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={() => {
                      document.dispatchEvent(new CustomEvent("dx:open-detail", { detail: cardDetails.slug }));
                    }}
                    className="relative aspect-[16/9] sm:aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer shadow-[0_12px_32px_rgba(0,0,0,0.5)] flex flex-col justify-end p-8 text-left"
                  >
                    
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 pointer-events-none" 
                      style={{ backgroundImage: `url('${cardDetails.image}')` }} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent pointer-events-none z-10" />
                    
                    
                    <div className="absolute inset-0 border border-transparent group-hover:border-[#d85b6a]/40 transition-colors duration-300 rounded-3xl z-20 pointer-events-none" />

                    
                    <div className="relative z-20 flex flex-col gap-2">
                      <div className="flex items-center gap-2 self-start bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-[10px] font-black text-[#ff8a9a] uppercase font-mono tracking-wider">
                        {renderIcon(cardDetails.iconName)}
                        <span>{cardDetails.title}</span>
                      </div>
                      
                      <h4 className="text-white text-base sm:text-lg font-black leading-snug tracking-tight group-hover:text-[#ff8a9a] transition-colors duration-300">
                        {feature}
                      </h4>
                      
                      <p className="text-white/60 text-[11px] font-semibold leading-relaxed line-clamp-2 mt-0.5">
                        {cardDetails.description}
                      </p>

                      <div className="flex items-center gap-1.5 text-[10px] font-black text-[#ff8a9a] uppercase tracking-wider font-mono mt-2 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        {slug === "career" ? "View Position Details" : "View AI Solution Details"}
                        <ArrowUpRight size={12} />
                      </div>
                    </div>
                  </motion.div>
                );
              }

              
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col justify-between p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#d85b6a]/30 transition-all hover:bg-white/[0.04] group text-left relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d85b6a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#d85b6a]/10 rounded-2xl border border-[#d85b6a]/20 text-[#ff8a9a] flex-shrink-0 group-hover:scale-110 transition-transform">
                      {renderIcon(cardDetails?.iconName || "CheckCircle2")}
                    </div>
                    <div className="flex flex-col gap-2">
                      {cardDetails && (
                        <span className="text-[10px] font-black font-mono text-[#ff8a9a] uppercase tracking-widest block">
                          {cardDetails.title}
                        </span>
                      )}
                      <p className="text-white/80 text-base sm:text-lg font-bold leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left py-8">
          <div className="lg:col-span-6 w-full">
            {renderVisualMockup()}
          </div>
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-1.5 self-start bg-green-500/10 border border-green-500/20 rounded-full px-3.5 py-1 text-[10px] font-black text-green-400 uppercase font-mono tracking-wider">
              <Activity size={12} className="animate-pulse" />
              Intelligence Dashboard
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              AI Central Admin Dashboard
            </h2>
            
            <p className="text-white/70 text-base leading-relaxed font-semibold">
              CyberDX centralizes all analytical data and events from your IP cameras into a secure, real-time online Dashboard. This allows security teams to easily monitor status, receive instant push notifications, and inspect events with video evidence.
            </p>
            
            <p className="text-white/60 text-sm leading-relaxed font-semibold">
              Optimized Edge AI technology enables the system to process data entirely on customer premises, ensuring an ultra-fast response time under 100ms and absolute privacy for all visual information.
            </p>
          </div>
        </div>

        
        {data.dashboardBenefits && data.dashboardBenefits.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left py-8 items-start">
            <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-32">
              <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none">
                Core <span className="text-[#ff8a9a]">Benefits</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed font-semibold">
                Enhance security quality, automate corporate HSE workflows, minimize safety risks, and elevate brand value.
              </p>
              <button
                onClick={onContact}
                className="self-start inline-flex items-center justify-center gap-2 bg-[#d85b6a] hover:bg-[#e26c7b] text-white font-black uppercase tracking-widest text-xs px-8 py-4.5 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 cursor-pointer"
              >
                Contact Us Now
                <ArrowUpRight size={16} />
              </button>
            </div>
            
            <div className="lg:col-span-7 flex flex-col">
              {data.dashboardBenefits.map((benefit, i) => (
                <div
                  key={i}
                  className="py-8 flex flex-col sm:flex-row gap-6 items-start border-t border-white/10 last:border-b last:border-white/10"
                >
                  <span className="text-4xl sm:text-5xl font-black text-[#d85b6a]/20 font-mono leading-none sm:w-16">
                    0{i + 1}
                  </span>
                  <div className="flex flex-col gap-2 font-semibold">
                    <h4 className="text-white text-lg font-black tracking-tight uppercase transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.category === "Industries" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-8 text-left"
          >
            <div className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-widest font-mono border-b border-white/5 pb-3">
              <Layers size={18} className="text-[#d85b6a]" />
              Explore Other Industries
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {(() => {
                const ALL_INDUSTRIES = [
                  { slug: "san-xuat-nha-may", title: "Manufacturing & Factories", image: "/san-xuat-nha-may.webp" },
                  { slug: "kho-van-hang-hoa", title: "Logistics & Warehousing", image: "/kho-bai-logistics.webp" },
                  { slug: "ban-le-dich-vu", title: "Retail & Services", image: "/ban-le-dich-vu.png" },
                  { slug: "giao-duc-dao-tao-2", title: "Education & Schools", image: "/giao-duc-dao-tao.webp" },
                  { slug: "khach-san-du-lich", title: "Hospitality & Tourism", image: "/nha-hang-khach-san.jpg" },
                  { slug: "benh-vien-co-so-y-te", title: "Hospitals & Healthcare", image: "/y-te-suc-khoe.jpg" }
                ];
                const otherIndustries = ALL_INDUSTRIES.filter(item => item.slug !== slug);
                return otherIndustries.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={() => {
                      document.dispatchEvent(new CustomEvent("dx:open-detail", { detail: item.slug }));
                    }}
                    className="relative aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-lg flex flex-col justify-end p-4 text-left animate-none"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-10" />
                    
                    
                    <div className="absolute inset-0 border border-transparent group-hover:border-[#d85b6a]/30 transition-colors duration-300 rounded-2xl z-20 pointer-events-none" />

                    <div className="relative z-20">
                      <span className="text-white font-black text-xs sm:text-sm tracking-tight leading-snug group-hover:text-[#ff8a9a] transition-colors">
                        {item.title}
                      </span>
                    </div>
                  </motion.div>
                ));
              })()}
            </div>
          </motion.div>
        )}

        {data.category === "AI Solutions" && (
          <div className="flex flex-col gap-12 text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-widest font-mono border-b border-white/5 pb-3">
                <Layers size={18} className="text-purple-400" />
                Applied Industries
              </div>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {(() => {
                  const ALL_INDUSTRIES = [
                    { slug: "san-xuat-nha-may", title: "Manufacturing & Factories", image: "/san-xuat-nha-may.webp" },
                    { slug: "kho-van-hang-hoa", title: "Logistics & Warehousing", image: "/kho-bai-logistics.webp" },
                    { slug: "ban-le-dich-vu", title: "Retail & Services", image: "/ban-le-dich-vu.png" },
                    { slug: "giao-duc-dao-tao-2", title: "Education & Schools", image: "/giao-duc-dao-tao.webp" },
                    { slug: "khach-san-du-lich", title: "Hospitality & Tourism", image: "/nha-hang-khach-san.jpg" },
                    { slug: "benh-vien-co-so-y-te", title: "Hospitals & Healthcare", image: "/y-te-suc-khoe.jpg" }
                  ];
                  return ALL_INDUSTRIES.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -6, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      onClick={() => {
                        document.dispatchEvent(new CustomEvent("dx:open-detail", { detail: item.slug }));
                      }}
                      className="relative aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-lg flex flex-col justify-end p-4 text-left"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />
                      <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-colors duration-300 rounded-2xl z-20 pointer-events-none" />
                      <div className="relative z-20">
                        <span className="text-white font-black text-xs sm:text-sm tracking-tight leading-snug group-hover:text-purple-300 transition-colors">
                          {item.title}
                        </span>
                      </div>
                    </motion.div>
                  ));
                })()}
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-widest font-mono border-b border-white/5 pb-3">
                <Cpu size={18} className="text-[#d85b6a]" />
                Other AI Solutions
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {(() => {
                  const ALL_SOLUTIONS = [
                    { slug: "nhan-dien-khuon-mat", title: "Face Recognition", image: "/hero-bg.gif", iconName: "UserCheck" },
                    { slug: "nhan-dien-bien-so-xe-tu-dong", title: "License Plate Recognition", image: "/kho-bai-logistics.webp", iconName: "Video" },
                    { slug: "phat-hien-khoi-chay", title: "Smoke & Fire Detection", image: "/smoke-fire-detection.png", iconName: "AlertTriangle" },
                    { slug: "phat-hien-xam-nhap", title: "Intrusion Detection", image: "/intrusion-detection.png", iconName: "Eye" },
                    { slug: "giam-sat-ppe-dong-phuc", title: "PPE & Uniform Monitoring", image: "/ppe-detection.png", iconName: "Shield" },
                    { slug: "giai-phap-dem-nguoi", title: "People Counting", image: "/ban-le-dich-vu.png", iconName: "Users" },
                    { slug: "giam-sat-do-xe-sai-quy-dinh", title: "Illegal Parking Detection", image: "/kho-bai-logistics.webp", iconName: "Ban" },
                    { slug: "nhan-dien-phan-tich-hanh-vi", title: "Behavior Recognition", image: "/intrusion-detection.png", iconName: "Activity" },
                    { slug: "ban-do-nhiet-lo-trinh", title: "Heatmap & Trajectory", image: "/ban-le-dich-vu.png", iconName: "TrendingUp" }
                  ];
                  const otherSolutions = ALL_SOLUTIONS.filter(item => item.slug !== slug);
                  return otherSolutions.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -6, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      onClick={() => {
                        document.dispatchEvent(new CustomEvent("dx:open-detail", { detail: item.slug }));
                      }}
                      className="relative aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-lg flex flex-col justify-end p-4 text-left"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />
                      <div className="absolute inset-0 border border-transparent group-hover:border-[#d85b6a]/30 transition-colors duration-300 rounded-2xl z-20 pointer-events-none" />
                      <div className="relative z-20 flex flex-col gap-1.5">
                        <div className="p-1 bg-[#d85b6a]/20 border border-[#d85b6a]/30 rounded-lg text-[#ff8a9a] self-start w-fit">
                          {renderIcon(item.iconName)}
                        </div>
                        <span className="text-white font-black text-xs sm:text-sm tracking-tight leading-snug group-hover:text-[#ff8a9a] transition-colors">
                          {item.title}
                        </span>
                      </div>
                    </motion.div>
                  ));
                })()}
              </div>
            </motion.div>
          </div>
        )}

        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="p-8 rounded-3xl bg-gradient-to-r from-[#d85b6a]/10 to-purple-500/5 border border-[#d85b6a]/20 text-left relative overflow-hidden shadow-[0_8px_32px_rgba(216,91,106,0.05)]"
        >
          <div className="absolute top-2 left-4 text-6xl text-white/10 font-serif leading-none pointer-events-none">&ldquo;</div>
          <p className="text-white/95 text-base sm:text-lg font-extrabold italic leading-relaxed pl-6 relative z-10">
            {data.conclusion}
          </p>
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="border-t border-white/5 pt-12 pb-6 flex flex-col md:flex-row items-center justify-between gap-8 text-left"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-500/10 border border-red-500/20 text-[#ff8a9a] rounded-xl flex-shrink-0">
              <Shield size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white tracking-wide">Are you ready to upgrade your surveillance system?</h4>
              <p className="text-sm text-white/50 font-medium">Start integrating advanced AI Video features into your business's existing camera infrastructure today.</p>
            </div>
          </div>
          <button
            onClick={onContact}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#d85b6a] hover:bg-[#e26c7b] text-white font-black uppercase tracking-wider text-xs px-10 py-5 rounded-full shadow-[0_8px_24px_rgba(216,91,106,0.35)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 cursor-pointer"
          >
            Get Consultation & Quote
            <ArrowUpRight size={16} />
          </button>
        </motion.div>

      </div>
    </div>
  );
}
