import { useEffect } from "react";
import AboutSection from "./AboutSection";
import BlogSection from "./BlogSection";
import CxFeatures from "./CxFeatures";
import CxHero from "./CxHero";
import CxIndustries from "./CxIndustries";
import CxPlatform from "./CxPlatform";
import FinalCTA from "./FinalCTA";
import ModernFooter from "./ModernFooter";
import ModernNav from "./ModernNav";
import SolutionSection from "./SolutionSection";
import StatsSection from "./StatsSection";
import WorkflowSection from "./WorkflowSection";
import { SpotlightHover } from "./ui/spotlight-hover";
import { DETAIL_DATA } from "../utils/detailData";

interface FalconLandingProps {
  onContact: () => void;
}

export default function FalconLanding({ onContact }: FalconLandingProps) {
  useEffect(() => {
    const handleOpenDetail = (event: Event) => {
      const slug = (event as CustomEvent<string>).detail;
      const detail = slug ? DETAIL_DATA[slug] : null;
      if (!detail) return;

      const target = {
        Industries: "#industries",
        "AI Solutions": "#features",
        Library: "#blog",
      }[detail.category];
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    document.addEventListener("dx:open-detail", handleOpenDetail);
    window.addEventListener("popstate", scrollToHash);
    scrollToHash();
    return () => {
      document.removeEventListener("dx:open-detail", handleOpenDetail);
      window.removeEventListener("popstate", scrollToHash);
    };
  }, []);

  const goHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="falcon-root">
      <SpotlightHover size={600} className="z-50 opacity-60" />
      <ModernNav onContact={onContact} onGoHome={goHome} />
      <CxHero onContact={onContact} />
      <AboutSection />
      <CxFeatures />
      <CxPlatform />
      <WorkflowSection />
      <SolutionSection onContact={onContact} />
      <CxIndustries />
      <StatsSection />
      <BlogSection />
      <FinalCTA />
      <ModernFooter onContact={onContact} onGoHome={goHome} />
    </div>
  );
}
