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

  // Parse path on initial load & handle browser back/forward routing
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const handlePathRouting = () => {
      const pathname = window.location.pathname;
      const slug = pathname.replace(/^\/|\/$/g, ""); // strip leading/trailing slashes

      if (DETAIL_DATA[slug]) {
        setActiveDetailSlug(slug);
      } else {
        setActiveDetailSlug(null);
        
        // Handle anchor scrolls on homepage reload (e.g. /#workflow)
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

    // Run once on load
    handlePathRouting();

    // Listen to browser navigation popstate
    window.addEventListener("popstate", handlePathRouting);
    return () => window.removeEventListener("popstate", handlePathRouting);
  }, []);

  // Sync activeDetailSlug state to browser path dynamically
  useEffect(() => {
    const currentSlug = window.location.pathname.replace(/^\/|\/$/g, "");
    if (activeDetailSlug) {
      if (currentSlug !== activeDetailSlug) {
        window.history.pushState(null, "", `/${activeDetailSlug}/`);
      }
    } else {
      // Revert back to root path if we were on a detail subpage
      if (currentSlug !== "" && DETAIL_DATA[currentSlug]) {
        window.history.pushState(null, "", `/${window.location.hash}`);
      }
    }
    
    // Scroll handling:
    if (activeDetailSlug) {
      // Navigating into a subpage: always scroll to top
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      // Navigating back to homepage
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

  // Catch dynamic custom events to open subpage detail page
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

  // Listen to open request/contact modal events
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
      {/* Global interactive spotlight glow following mouse pointer */}
      <SpotlightHover
        size={600}
        className="z-50 opacity-60"
      />

      {activeDetailSlug ? (
        <>
          {/* Subpage View: Fully replaces the landing page content with absolute path URL */}
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
          {/* Home / Landing Page View */}
          <ModernNav onContact={() => setModalOpen(true)} onGoHome={() => setActiveDetailSlug(null)} />

          {/* Recreated CXVIEW Hero Section */}
          <CxHero onContact={() => setModalOpen(true)} />

          {/* Recreated About Section */}
          <AboutSection />

          {/* Recreated features list (9 features grid) */}
          <CxFeatures />

          {/* Recreated Platform Section (with interactive tabs & mock dashboard) */}
          <CxPlatform />

          {/* Recreated Step-by-step section */}
          <WorkflowSection />

          {/* Recreated B2B/B2C Solutions Comparison Section */}
          <SolutionSection onContact={() => setModalOpen(true)} />

          {/* Recreated Industry applications */}
          <CxIndustries />

          {/* Recreated Real statistics */}
          <StatsSection />

          {/* Recreated Blog and News grid */}
          <BlogSection />

          {/* Recreated Final CTA and static contact form */}
          <FinalCTA onContact={() => setModalOpen(true)} />

          {/* Recreated Clean minimal footer */}
          <ModernFooter onContact={() => setModalOpen(true)} onGoHome={() => setActiveDetailSlug(null)} />
        </>
      )}

      {/* Persistent global contact modal for both home page and subpage CTAs */}
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
