import { useEffect, useState } from "react";
import {
  ContactModal,
  ModernNav,
  CxHero,
  AboutSection,
  CxFeatures,
  CxPlatform,
  WorkflowSection,
  SolutionSection,
  CxIndustries,
  StatsSection,
  BlogSection,
  FinalCTA,
  ModernFooter,
  DetailPage,
  IntroScreen,
  BeaverLanding,
} from "./components";
import { DETAIL_DATA } from "./utils/detailData";
import { SpotlightHover } from "./components/ui/spotlight-hover";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDetailSlug, setActiveDetailSlug] = useState<string | null>(null);

  // Which product landing is active. Falcon = the CyberDX vision platform,
  // Beaver = the CyberDX "AI Beaver" automation product page.
  type Product = "falcon" | "beaver";
  const [activeProduct, setActiveProduct] = useState<Product>(() => {
    if (typeof window === "undefined") return "falcon";
    const q = new URLSearchParams(window.location.search).get("product");
    if (q === "beaver" || q === "falcon") return q;
    const stored = sessionStorage.getItem("cyberdx_product");
    return stored === "beaver" ? "beaver" : "falcon";
  });

  // Intro overlay: "boot" plays the full animation then the selector;
  // "select" opens straight into the picker; null = hidden.
  const [introMode, setIntroMode] = useState<"boot" | "select" | null>(() => {
    if (typeof window === "undefined") return null;
    const params = new URLSearchParams(window.location.search);
    const intro = params.get("intro");
    if (intro === "select" || intro === "boot") return intro; // force intro state
    const q = params.get("product");
    if (q === "beaver" || q === "falcon") return null; // deep link → skip intro
    if (sessionStorage.getItem("cyberdx_intro_seen") === "1") return null;
    const slug = window.location.pathname.replace(/^\/|\/$/g, "");
    if (DETAIL_DATA[slug]) return null; // deep link → skip intro
    return "boot";
  });

  const handleSelectProduct = (product: Product) => {
    sessionStorage.setItem("cyberdx_intro_seen", "1");
    sessionStorage.setItem("cyberdx_product", product);
    setActiveProduct(product);
    if (product !== "falcon") setActiveDetailSlug(null);
    setIntroMode(null);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const openSelector = () => setIntroMode("select");

  
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const handlePathRouting = () => {
      const pathname = window.location.pathname;
      const slug = pathname.replace(/^\/|\/$/g, ""); 

      if (DETAIL_DATA[slug]) {
        setActiveDetailSlug(slug);
      } else {
        setActiveDetailSlug(null);
        
        
        const hash = window.location.hash;
        if (hash) {
          setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }, 300);
        } else {
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      }
    };

    
    handlePathRouting();

    
    window.addEventListener("popstate", handlePathRouting);
    return () => window.removeEventListener("popstate", handlePathRouting);
  }, []);

  
  useEffect(() => {
    const currentSlug = window.location.pathname.replace(/^\/|\/$/g, "");
    if (activeDetailSlug) {
      if (currentSlug !== activeDetailSlug) {
        window.history.pushState(null, "", `/${activeDetailSlug}/`);
      }
    } else {
      
      if (currentSlug !== "" && DETAIL_DATA[currentSlug]) {
        window.history.pushState(null, "", `/${window.location.hash}`);
      }
    }
    
    
    if (activeDetailSlug) {
      
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 350);
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }
  }, [activeDetailSlug]);

  
  useEffect(() => {
    const handleOpenDetail = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail && DETAIL_DATA[customEvent.detail]) {
        setActiveDetailSlug(customEvent.detail);
      }
    };

    document.addEventListener("dx:open-detail", handleOpenDetail);
    return () => document.removeEventListener("dx:open-detail", handleOpenDetail);
  }, []);

  
  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      e.preventDefault();
      setModalOpen(true);
    };
    document.addEventListener("dx:open-contact", handleOpenModal);
    return () => document.removeEventListener("dx:open-contact", handleOpenModal);
  }, []);

  // Lock page scroll while the intro/selector overlay is visible.
  useEffect(() => {
    if (introMode) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [introMode]);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">

      {introMode && (
        <IntroScreen
          skipBoot={introMode === "select"}
          onSelect={handleSelectProduct}
          onClose={introMode === "select" ? () => setIntroMode(null) : undefined}
        />
      )}

      {/* Persistent launcher to switch between AI products */}
      {!introMode && (
        <button
          onClick={openSelector}
          aria-label="Switch AI product"
          className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 rounded-full border border-[#ffb86b]/35 bg-[#f97316] px-5 py-3 text-[10px] font-mono uppercase tracking-[0.25em] text-white hover:bg-[#fb923c] transition-colors shadow-[0_12px_28px_rgba(249,115,22,0.35)] cursor-pointer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Switch AI
        </button>
      )}

      {activeProduct === "beaver" ? (
        <BeaverLanding onSwitch={openSelector} onContact={() => setModalOpen(true)} />
      ) : (
        <div className="falcon-root">
          <SpotlightHover size={600} className="z-50 opacity-60" />
          {activeDetailSlug ? (
        <>
          
          <ModernNav onContact={() => setModalOpen(true)} onGoHome={() => setActiveDetailSlug(null)} />
          
          <DetailPage
            slug={activeDetailSlug}
            onBack={() => {
              setActiveDetailSlug(null);
            }}
            onContact={() => setModalOpen(true)}
          />

          <ModernFooter onContact={() => setModalOpen(true)} onGoHome={() => setActiveDetailSlug(null)} />
        </>
      ) : (
        <>
          
          <ModernNav onContact={() => setModalOpen(true)} onGoHome={() => setActiveDetailSlug(null)} />

          
          <CxHero onContact={() => setModalOpen(true)} />

          
          <AboutSection />

          
          <CxFeatures />

          
          <CxPlatform />

          
          <WorkflowSection />

          
          <SolutionSection onContact={() => setModalOpen(true)} />

          
          <CxIndustries />

          
          <StatsSection />

          
          <BlogSection />

          
          <FinalCTA />

          
          <ModernFooter onContact={() => setModalOpen(true)} onGoHome={() => setActiveDetailSlug(null)} />
        </>
          )}
        </div>
      )}

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
