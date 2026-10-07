import { useEffect, useRef, useState } from "react";
import { Menu, Plus } from "lucide-react";

const HERO_VIDEO = "https://d2ol7oe51mr4n9.cloudfront.net/user_3GJaYKPxdnQG0Q9O26lu6DPmcHu/fb4c80b0-ed9d-4719-be32-99a9e18356c5.mp4";
const HERO_POSTER = "https://d2ol7oe51mr4n9.cloudfront.net/user_3GJaYKPxdnQG0Q9O26lu6DPmcHu/6dbdcd75-2556-435f-8180-60ced6f60321.jpg";
const PRODUCT_VIDEO = "https://d2ol7oe51mr4n9.cloudfront.net/user_3GJaYKPxdnQG0Q9O26lu6DPmcHu/ed15df08-46fa-46f8-8aed-70bd06ebc547.mp4";
const PRODUCT_POSTER = "https://d2ol7oe51mr4n9.cloudfront.net/user_3GJaYKPxdnQG0Q9O26lu6DPmcHu/6acf44e4-ef4d-4565-a50c-3caa7c19399a.jpg";

const CALLOUTS = [
  { key: "workflows", value: "-90%", label: "Handoff delay", description: "Multi-step automation from trigger to outcome." },
  { key: "agents", value: "72%", label: "Auto-resolved", description: "AI agents handle repetitive, judgment-light work." },
  { key: "integrations", value: "40+", label: "Connectors", description: "Connect the systems your teams already use." },
  { key: "insights", value: "Real-time", label: "Bottleneck view", description: "Visibility into activation, exceptions, and outcomes." },
] as const;

interface BeaverLandingProps {
  onSwitch?: () => void;
  onContact?: () => void;
}

function clamp(value: number) {
  return Math.max(0, Math.min(1, value));
}

function seek(video: HTMLVideoElement | null, progress: number) {
  if (!video || !Number.isFinite(video.duration) || video.readyState < 1) return;
  const target = Math.min(video.duration - 0.001, Math.max(0.001, progress * video.duration));
  if (!video.seeking && Math.abs(video.currentTime - target) > 0.04) video.currentTime = target;
}

export default function BeaverLanding({ onSwitch: _onSwitch, onContact }: BeaverLandingProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const productRef = useRef<HTMLElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const productVideoRef = useRef<HTMLVideoElement>(null);
  const [compactHeader, setCompactHeader] = useState(false);
  const [showProductVideo, setShowProductVideo] = useState(false);
  const [clock, setClock] = useState({ time: "--:-- --", offset: "UTC+7" });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const time = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(now);
      setClock({ time, offset: "UTC+7" });
    };
    updateClock();
    const id = window.setInterval(updateClock, 30_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    const stage = stageRef.current;
    const about = aboutRef.current;
    const product = productRef.current;
    if (!root || !stage || !about || !product) return;

    let frame = 0;
    let cursorX = 0;
    let cursorY = 0;
    let pointerX = 0;
    let pointerY = 0;

    const update = () => {
      const scrollY = window.scrollY;
      const stageTop = stage.getBoundingClientRect().top + scrollY;
      const aboutTop = about.getBoundingClientRect().top + scrollY;
      const productTop = product.getBoundingClientRect().top + scrollY;
      const productHeight = product.offsetHeight;
      const heroProgress = clamp((scrollY - stageTop) / Math.max(1, aboutTop - stageTop));
      // Match the sticky product window: top enters at the viewport bottom and
      // completes when the bottom reaches the viewport bottom.
      const productProgress = clamp(
        (scrollY - (productTop - window.innerHeight)) / Math.max(1, productHeight - window.innerHeight),
      );
      const isCompact = scrollY > stageTop + window.innerHeight * 0.04;
      const isSecond = productProgress > 0.02;

      setCompactHeader((previous) => previous === isCompact ? previous : isCompact);
      setShowProductVideo((previous) => previous === isSecond ? previous : isSecond);

      if (!reducedMotion) {
        seek(heroVideoRef.current, heroProgress);
        seek(productVideoRef.current, productProgress);
        cursorX += (pointerX - cursorX) * 0.07;
        cursorY += (pointerY - cursorY) * 0.07;
        root.style.setProperty("--beaver-cursor-x", cursorX.toFixed(3));
        root.style.setProperty("--beaver-cursor-y", cursorY.toFixed(3));
      }
      root.style.setProperty("--beaver-product-progress", productProgress.toFixed(3));
      frame = 0;
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const onPointerMove = (event: PointerEvent) => {
      pointerX = Math.max(-1, Math.min(1, (event.clientX - window.innerWidth / 2) / (window.innerWidth / 2)));
      pointerY = Math.max(-1, Math.min(1, (event.clientY - window.innerHeight / 2) / (window.innerHeight / 2)));
      requestUpdate();
    };
    const onPointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
      requestUpdate();
    };

    const videos = [heroVideoRef.current, productVideoRef.current];
    const pinVideo = (event: Event) => {
      const video = event.currentTarget as HTMLVideoElement;
      video.pause();
      if (!reducedMotion) video.currentTime = 0.001;
    };

    videos.forEach((video) => video?.addEventListener("loadedmetadata", pinVideo));
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    requestUpdate();

    return () => {
      videos.forEach((video) => video?.removeEventListener("loadedmetadata", pinVideo));
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div ref={rootRef} className="beaver-root beaver-cinematic">
      <header className={`beaver-cinematic-header ${compactHeader ? "is-compact" : ""}`}>
        <div className="beaver-cinematic-bar">
          <div className="beaver-header-left">
            <button className="beaver-cinematic-logo" onClick={() => scrollTo("beaver-top")} type="button" aria-label="CyberDX AI Beaver home">
              <img src="/cyberdx_logo-removebg-preview.png" alt="CyberDX" />
              <span>AI BEAVER<sup>®</sup></span>
            </button>
            <nav aria-label="AI Beaver navigation" className="beaver-cinematic-nav">
              <button type="button" onClick={() => scrollTo("about")}>About</button>
              <button type="button" onClick={() => scrollTo("product")}>Platform</button>
              <a href="#faq">FAQ</a>
            </nav>
          </div>
          <div className="beaver-header-right">
            <p className="beaver-clock"><time>{clock.time}</time> Ho Chi Minh <i>|</i> {clock.offset}</p>
            <button className="beaver-header-submit" type="button" onClick={onContact} aria-label="Start building with AI Beaver"><span>Start Building</span><Plus size={17} strokeWidth={1.25} /></button>
            <button className="beaver-header-menu" type="button" aria-label="Menu" aria-expanded="false"><Menu size={18} strokeWidth={1.25} /></button>
          </div>
        </div>
      </header>

      <main ref={stageRef} className={`beaver-stage ${showProductVideo ? "is-second" : ""}`}>
        <div className="beaver-stage-scene" aria-hidden="true">
          <div className="beaver-stage-parallax">
            <video ref={heroVideoRef} className="beaver-scene-video" src={HERO_VIDEO} poster={HERO_POSTER} muted playsInline preload="auto" crossOrigin="anonymous" />
            <video ref={productVideoRef} className="beaver-scene-video beaver-scene-video-product" src={PRODUCT_VIDEO} poster={PRODUCT_POSTER} muted playsInline preload="auto" crossOrigin="anonymous" />
          </div>
          <div className="beaver-scene-scrim" />
        </div>

        <section id="beaver-top" className="beaver-cinematic-hero" aria-labelledby="beaver-hero-title">
          <div className="beaver-hero-layout">
            <h1 id="beaver-hero-title">Automate<br />your<br />workflows</h1>
            <div className="beaver-hero-lead">
              Design, deploy, and improve automations across every tool your business runs on.
            </div>
            <p className="beaver-scroll-hint">[ Scroll to explore ]</p>
            <button type="button" className="beaver-solid-cta" onClick={onContact}>Start Building <Plus size={17} strokeWidth={1.25} /></button>
            <p className="beaver-hero-tags">Workflows <i>·</i> Agents <i>·</i> Insights</p>
          </div>
        </section>

        <section id="about" ref={aboutRef} className="beaver-cinematic-about" aria-labelledby="beaver-about-title">
          <div className="beaver-statement-pin">
            <h2 id="beaver-about-title">AI Beaver turns repetitive work into connected workflows, giving every team the context, automation, and visibility needed to move faster.</h2>
          </div>
          <div className="beaver-about-topline">
            <div>
              <p>Automation that works across your whole business.</p>
              <p>Connect the tools your teams use. Let AI Beaver handle the handoffs.</p>
            </div>
            <p className="beaver-about-stats">-90% handoff delay <i>·</i> 40+ connectors <i>·</i> Real-time visibility</p>
          </div>
          <div className="beaver-about-frame"><span /></div>
        </section>
        <div className="beaver-chip-row"><span>02</span></div>

        <section id="product" ref={productRef} className="beaver-cinematic-product" aria-labelledby="beaver-product-title">
          <div className="beaver-callout-stage" aria-hidden="true">
            <svg className="beaver-callout-lines" viewBox="0 0 1000 600" preserveAspectRatio="none">
              <path d="M245 192 L408 288" pathLength="1" />
              <path d="M203 420 L432 354" pathLength="1" />
              <path d="M786 218 L615 307" pathLength="1" />
              <path d="M792 423 L620 358" pathLength="1" />
              <circle cx="408" cy="288" r="4" /><circle cx="432" cy="354" r="4" /><circle cx="615" cy="307" r="4" /><circle cx="620" cy="358" r="4" />
            </svg>
            {CALLOUTS.map((callout) => (
              <article key={callout.key} className={`beaver-callout beaver-callout-${callout.key}`}>
                <strong>{callout.value}</strong>
                <span>{callout.label}</span>
                <p>{callout.description}</p>
              </article>
            ))}
          </div>
          <div className="beaver-product-screen">
            <div>
              <p className="beaver-product-kicker">The AI Beaver platform</p>
              <h2 id="beaver-product-title">Four capabilities.<br />One platform.</h2>
            </div>
            <p className="beaver-product-insight">Insights: real-time visibility into activation, bottlenecks, exceptions, and outcomes.</p>
          </div>
          <div className="beaver-chip-row beaver-chip-product"><span>03</span></div>
        </section>
      </main>
    </div>
  );
}
