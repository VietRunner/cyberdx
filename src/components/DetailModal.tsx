import { useEffect } from "react";
import { X, ArrowUpRight, CheckCircle2, Sparkles, Cpu, Layers, Activity, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DETAIL_DATA } from "../utils/detailData";


interface DetailModalProps {
  slug: string | null;
  onClose: () => void;
}

export default function DetailModal({ slug, onClose }: DetailModalProps) {
  const data = slug ? DETAIL_DATA[slug] : null;

  // Synchronize URL hash and dynamically update document <head> SEO metadata
  useEffect(() => {
    // Helper functions for dynamic head metas
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

    if (!slug || !data) {
      // Restore default SEO tags when modal is closed
      document.title = "CyberDX | AI-Powered Software & Recruitment in Vietnam";
      
      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) {
        descMeta.setAttribute("content", "CyberDX builds AI-powered software, scalable architecture, and real-time platforms to accelerate product delivery and business growth.");
      }
      
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute("href", "https://cyberdx.tech/");
      }
      
      // Clear OG & Twitter tags
      setMetaProperty("og:title", "CyberDX | AI-Powered Software & Recruitment in Vietnam");
      setMetaProperty("og:description", "CyberDX builds AI-powered software, scalable architecture, and real-time platforms to accelerate product delivery and business growth.");
      setMetaProperty("og:url", "https://cyberdx.tech/");
      setMetaName("twitter:title", "CyberDX | AI-Powered Software & Recruitment in Vietnam");
      setMetaName("twitter:description", "CyberDX builds AI-powered software, scalable architecture, and real-time platforms to accelerate product delivery and business growth.");
      
      // Remove dynamically added Rank Math class schema
      const existingSchema = document.querySelector("script.rank-math-schema");
      if (existingSchema) {
        existingSchema.remove();
      }

      // Revert hash if it matches a subpage
      const currentHash = window.location.hash;
      const cleanHash = currentHash.replace(/^#\//, "");
      if (DETAIL_DATA[cleanHash]) {
        window.history.pushState(null, "", window.location.pathname + window.location.search);
      }
      return;
    }

    // --- Update URL Hash for route persistence ---
    window.history.pushState(null, "", `#/${slug}`);

    // --- Dynamic Title, Description & Canonical ---
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
    canonicalLink.setAttribute("href", `https://cyberdx.tech/#/${slug}`);

    // --- Open Graph & Twitter Social Tags ---
    setMetaProperty("og:locale", "vi_VN");
    setMetaProperty("og:type", "article");
    setMetaProperty("og:title", pageTitle);
    setMetaProperty("og:description", data.description);
    setMetaProperty("og:url", `https://cyberdx.tech/#/${slug}`);
    setMetaProperty("og:site_name", "CyberDX");
    setMetaProperty("og:image", "https://cyberdx.tech/logo_cyberdx.jpg");
    setMetaProperty("og:image:secure_url", "https://cyberdx.tech/logo_cyberdx.jpg");
    setMetaProperty("og:image:width", "1200");
    setMetaProperty("og:image:height", "630");

    setMetaName("twitter:card", "summary_large_image");
    setMetaName("twitter:title", pageTitle);
    setMetaName("twitter:description", data.description);
    setMetaName("twitter:image", "https://cyberdx.tech/logo_cyberdx.jpg");

    // --- Rich JSON-LD Rank Math-style Schema ---
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
          },
          "image": {
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
            "name": "CyberDX Admin",
            "url": "https://cyberdx.tech"
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

  }, [slug, data]);

  const handleContactAction = () => {
    onClose();
    // Dispatch custom event to open the contact modal
    setTimeout(() => {
      document.dispatchEvent(new CustomEvent("dx:open-contact"));
    }, 200);
  };

  return (
    <AnimatePresence>
      {data && (
        <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
          {/* Glass backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Immersive Slide-over Panel */}
          <motion.div
            initial={{ x: "100%", opacity: 0.95 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.95 }}
            transition={{ type: "spring", damping: 30, stiffness: 220 }}
            className="relative w-full max-w-3xl h-full bg-[#030303] border-l border-white/10 shadow-[0_0_80px_rgba(216,91,106,0.15)] flex flex-col justify-between overflow-hidden z-10"
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-[#d85b6a]/5 rounded-full blur-[100px] pointer-events-none z-0" />
            <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-purple-500/5 rounded-full blur-[90px] pointer-events-none z-0" />

            {/* Sticky Header */}
            <div className="relative z-10 flex items-center justify-between p-6 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-1.5 bg-[#d85b6a]/15 border border-[#d85b6a]/30 rounded-full px-3 py-1 text-xs font-black text-[#ff8a9a] uppercase font-mono tracking-wider">
                  <Sparkles size={12} className="animate-pulse text-[#d85b6a]" />
                  {data.category}
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-all cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                aria-label="Close panel"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 relative z-10 flex flex-col gap-10">
              {/* Headings */}
              <div className="text-left flex flex-col gap-4">
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                  {data.title}
                </h2>
                <p className="text-xl md:text-2xl font-bold text-gradient-peach leading-snug">
                  {data.subtitle}
                </p>
                <div className="h-[2px] w-20 bg-gradient-to-r from-[#d85b6a] to-purple-500 mt-2" />
              </div>

              {/* Main Description */}
              <div className="text-left">
                <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium">
                  {data.description}
                </p>
              </div>

              {/* Metrics / Key Indicators Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                {data.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col gap-2 relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d85b6a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <span className="text-4xl md:text-5xl font-black text-white font-mono tracking-tight group-hover:text-[#d85b6a] transition-colors duration-300">
                      {metric.value}
                    </span>
                    <span className="text-xs font-bold text-white/50 uppercase tracking-wider font-mono">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Features / Highlights */}
              <div className="text-left flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-widest font-mono">
                  <Layers size={16} className="text-[#d85b6a]" />
                  Key Highlights & Features
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl hover:border-[#d85b6a]/30 transition-all"
                    >
                      <CheckCircle2 size={18} className="text-[#d85b6a] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm md:text-base font-semibold leading-normal">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow Steps */}
              <div className="text-left flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-widest font-mono">
                  <Cpu size={16} className="text-purple-400" />
                  Smart Operating Workflow
                </div>
                <div className="flex flex-col gap-4">
                  {data.workflow.map((step, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-white/[0.01] border border-white/5 p-5 rounded-2xl relative overflow-hidden hover:border-purple-500/30 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-mono font-black text-sm flex-shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-white/70 text-sm md:text-base leading-relaxed font-semibold">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SVG Dynamic Live Chart Vector */}
              <div className="p-6 rounded-3xl bg-black/40 border border-white/5 relative overflow-hidden flex flex-col gap-4 text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity size={14} className="text-green-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                      Live AI Analytics Simulator
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-green-400">
                    <TrendingUp size={12} />
                    <span>+24.8% PERFORMANCE</span>
                  </div>
                </div>

                <div className="h-20 w-full flex items-end justify-between gap-1 mt-2">
                  {[45, 60, 50, 75, 65, 85, 90, 80, 95].map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-gradient-to-t from-purple-500 to-[#d85b6a] rounded-t transition-all duration-1000"
                        style={{ height: `${val}%`, minHeight: "10%" }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#d85b6a]/10 to-purple-500/5 border border-[#d85b6a]/20 text-left">
                <p className="text-white/80 text-sm md:text-base font-bold italic leading-relaxed">
                  &ldquo; {data.conclusion} &rdquo;
                </p>
              </div>
            </div>

            {/* Sticky Footer CTA */}
            <div className="relative z-10 p-6 border-t border-white/5 bg-[#030303]/90 backdrop-blur-md flex flex-col sm:flex-row items-center gap-4 justify-between">
              <div className="text-left hidden md:block">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest block">
                  CyberDX AI Ecosystem
                </span>
                <span className="text-xs font-bold text-white/60">
                  Zero-Trust Recruitment Solutions
                </span>
              </div>
              <button
                onClick={handleContactAction}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d85b6a] hover:bg-[#e26c7b] text-white font-black uppercase tracking-wider text-xs px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(216,91,106,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                {data.category === "Library" ? "Download Documentation" : "Request Consultation"}
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
