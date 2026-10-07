import { useEffect, useState } from "react";
import {
  ContactModal,
  IntroScreen,
  FalconLanding,
  BeaverLanding,
} from "./components";
import TwinLanding from "./components/TwinLanding";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  // Which product landing is active. Falcon = the CyberDX vision platform,
  // Beaver = the CyberDX "AI Beaver" automation product page.
  type Product = "falcon" | "beaver" | "twin";
  const [activeProduct, setActiveProduct] = useState<Product>(() => {
    if (typeof window === "undefined") return "falcon";
    const q = new URLSearchParams(window.location.search).get("product");
    if (q === "beaver" || q === "falcon" || q === "twin") return q;
    return "falcon";
  });

  // Intro overlay: "boot" plays the full animation then the selector;
  // "select" opens straight into the picker; null = hidden.
  const [introMode, setIntroMode] = useState<"boot" | "select" | null>(() => {
    if (typeof window === "undefined") return null;
    const params = new URLSearchParams(window.location.search);
    const intro = params.get("intro");
    if (intro === "select" || intro === "boot") return intro; // force intro state
    const q = params.get("product");
    if (q === "beaver" || q === "falcon" || q === "twin") return null; // product link → skip intro
    if (sessionStorage.getItem("cyberdx_intro_seen") === "1") return null;
    return "boot";
  });

  const handleSelectProduct = (product: Product) => {
    sessionStorage.setItem("cyberdx_intro_seen", "1");
    // AI Twin is the standalone cinematic page; TwinLanding.tsx is kept for reference.
    if (product === "twin") {
      window.location.assign("/ai-twin/index.html");
      return;
    }
    const url = new URL(window.location.href);
    url.pathname = "/";
    url.search = "";
    url.searchParams.set("product", product);
    window.history.pushState(null, "", url);
    setActiveProduct(product);
    setIntroMode(null);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const openSelector = () => setIntroMode("select");

  useEffect(() => {
    const normalizeProductUrl = () => {
      const url = new URL(window.location.href);
      const product = url.searchParams.get("product");
      if (product === "twin") {
        window.location.replace("/ai-twin/index.html");
        return;
      }
      const selectedProduct: Product =
        product === "beaver" || product === "twin" ? product : "falcon";

      if (url.pathname !== "/") {
        url.pathname = "/";
        url.search = "";
        url.searchParams.set("product", selectedProduct);
        window.history.replaceState(null, "", url);
      }
      setActiveProduct(selectedProduct);
    };

    normalizeProductUrl();
    window.addEventListener("popstate", normalizeProductUrl);
    return () => window.removeEventListener("popstate", normalizeProductUrl);
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
    <div
      className={`relative w-full min-h-screen bg-black ${
        activeProduct === "beaver"
          ? "beaver-app-root"
          : activeProduct === "twin"
          ? ""
          : "overflow-hidden"
      }`}
    >

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
          className={`fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[10px] font-mono uppercase tracking-[0.25em] transition-colors cursor-pointer ${
            activeProduct === "beaver"
              ? "bg-white/10 text-white hover:bg-white/16 backdrop-blur-md"
              : activeProduct === "twin"
              ? "border border-[#8b5cf6]/40 bg-[#8b5cf6] text-white hover:bg-[#a78bfa] shadow-[0_12px_28px_rgba(139,92,246,0.4)]"
              : "border border-[#ffb86b]/35 bg-[#f97316] text-white hover:bg-[#fb923c] shadow-[0_12px_28px_rgba(249,115,22,0.35)]"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Switch AI
        </button>
      )}

      {activeProduct === "twin" ? (
        <TwinLanding onSwitch={openSelector} onContact={() => setModalOpen(true)} />
      ) : activeProduct === "beaver" ? (
        <BeaverLanding onSwitch={openSelector} onContact={() => setModalOpen(true)} />
      ) : (
        <FalconLanding onContact={() => setModalOpen(true)} />
      )}

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
