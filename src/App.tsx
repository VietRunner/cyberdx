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
} from "./components";
import { DETAIL_DATA } from "./utils/detailData";
import { SpotlightHover } from "./components/ui/spotlight-hover";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDetailSlug, setActiveDetailSlug] = useState<string | null>(null);

  
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

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      
      <SpotlightHover
        size={600}
        className="z-50 opacity-60"
      />

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

          
          <FinalCTA onContact={() => setModalOpen(true)} />

          
          <ModernFooter onContact={() => setModalOpen(true)} onGoHome={() => setActiveDetailSlug(null)} />
        </>
      )}

      
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
