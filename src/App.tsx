import { useEffect, useState } from "react";
import {
  ContactModal,
  ModernNav,
  ModernHero,
  ProblemSection,
  SolutionSection,
  BentoFeatures,
  WorkflowSection,
  StatsSection,
  ConsciousInnovation,
  FinalCTA,
  ModernFooter,
  DetailPage,
} from "./components";
import { DETAIL_DATA } from "./utils/detailData";

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
        window.history.pushState(null, "", "/");
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
    <>
      {activeDetailSlug ? (
        <>
          {/* Subpage View: Fully replaces the landing page content with absolute path URL */}
          <ModernNav onContact={() => setModalOpen(true)} />
          
          <DetailPage
            slug={activeDetailSlug}
            onBack={() => {
              setActiveDetailSlug(null);
            }}
            onContact={() => setModalOpen(true)}
          />

          <ModernFooter onContact={() => setModalOpen(true)} />
        </>
      ) : (
        <>
          {/* Home / Landing Page View */}
          {/* Modern floating capsule navigation */}
          <ModernNav onContact={() => setModalOpen(true)} />

          {/* Hero section with AI Recruitment dashboard mockup */}
          <ModernHero onContact={() => setModalOpen(true)} />

          {/* Pain points of traditional recruitment */}
          <ProblemSection />

          {/* CyberDX AI advanced recruitment solutions */}
          <SolutionSection />

          {/* Premium Bento Grid features (AI CV Matcher, Assessments, Hubs) */}
          <BentoFeatures />

          {/* Easy 3-step operational workflow for candidates & recruiters */}
          <WorkflowSection />

          {/* Real statistics showing platform efficiency and scale */}
          <StatsSection />

          {/* Philosophy pillar similar to cxview's conscious innovation */}
          <ConsciousInnovation />

          {/* Final Call to Action */}
          <FinalCTA onContact={() => setModalOpen(true)} />

          {/* Clean minimal footer */}
          <ModernFooter onContact={() => setModalOpen(true)} />
        </>
      )}

      {/* Persistent global contact modal for both home page and subpage CTAs */}
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
