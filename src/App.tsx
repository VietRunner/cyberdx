import { useEffect, useState } from "react";
import {
  Nav,
  ContactModal,
  MobileMenu,
  HeroSection,
  AboutSection,
  WhySection,
  ServicesSection,
  WorksSection,
  ReviewsSection,
  FooterSection,
} from "./components";

const EXTERNAL_SCRIPTS: string[] = [
  "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
  "https://widget.clutch.co/static/js/widget.js",
  "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66b10772b40886469837016a",
  "https://cdn.prod.website-files.com/66b10772b40886469837016a/js/webflow.schunk.36b8fb49256177c8.js",
  "https://cdn.prod.website-files.com/66b10772b40886469837016a/js/webflow.schunk.70329ed9bc18497c.js",
  "https://cdn.prod.website-files.com/66b10772b40886469837016a/js/webflow.0e6cdd0e.45cc50d342a9fba2.js",
];

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(
      `script[data-dx-src="${src}"]`
    ) as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.loaded === "true") return resolve();
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error(`Failed to load ${src}`)),
        { once: true }
      );
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.dxSrc = src;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  // Scroll to hash on reload
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "instant" });
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      e.preventDefault();
      setModalOpen(true);
    };
    document.addEventListener("dx:open-contact", handleOpenModal);
    return () => document.removeEventListener("dx:open-contact", handleOpenModal);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-wf-domain", "www.masterdynamix.com");
    document.documentElement.setAttribute("data-wf-page", "66b10772b408864698370170");
    document.documentElement.setAttribute("data-wf-site", "66b10772b40886469837016a");
    document.body.className = "body";

    if ((window as any).WebFont?.load) {
      (window as any).WebFont.load({
        google: {
          families: [
            "Manrope:200,300,regular,500,600,700,800:cyrillic,cyrillic-ext,latin,latin-ext",
          ],
        },
      });
    }

    let cancelled = false;

    const initScripts = async () => {
      try {
        for (const src of EXTERNAL_SCRIPTS) {
          if (cancelled) return;
          await loadScript(src);
        }
      } catch (error) {
        console.error("Failed to initialize external scripts:", error);
      }
    };

    initScripts();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Nav onContact={() => setModalOpen(true)} />
      <MobileMenu />
      <HeroSection />
      <AboutSection />
      <WhySection />
      <ServicesSection onContact={() => setModalOpen(true)} />
      <WorksSection />
      <ReviewsSection />
      <FooterSection onContact={() => setModalOpen(true)} />
    </>
  );
}