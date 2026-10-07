import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

type Product = "falcon" | "beaver" | "twin";
type Phase = "logo" | "select";

interface IntroScreenProps {
  onSelect: (product: Product) => void;
  skipBoot?: boolean;
  onClose?: () => void;
}

/* ------------------------------------------------------------------ */
/*  Phase 1 — Boot / Logo reveal (CSS-only, ~1.6s)                     */
/* ------------------------------------------------------------------ */

function LogoReveal({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduced ? 400 : 1500;
    const start = performance.now();
    let raf = 0;
    let done = false;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / total);
      setProgress(Math.round(p * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else if (!done) {
        done = true;
        setTimeout(onDone, 420);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div className="absolute inset-0 bg-black overflow-hidden flex items-center justify-center">
      {/* ambient brand glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 44%, rgba(249,115,22,0.22), transparent 55%), radial-gradient(circle at 50% 100%, rgba(139,92,246,0.12), transparent 55%)",
        }}
      />
      {/* soft grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(circle at center, #000 20%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(circle at center, #000 20%, transparent 72%)",
        }}
      />
      {/* corner HUD tags */}
      <div className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-[0.4em] text-white/35 z-10">
        CyberDX · Vision OS
      </div>
      <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-[0.4em] text-white/35 z-10">
        v4.0 · secure boot
      </div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(14px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center gap-4 sm:gap-5"
        >
          {/* soft halo behind lockup */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 blur-3xl opacity-80"
            style={{
              background:
                "radial-gradient(circle at center, rgba(249,115,22,0.6), transparent 65%)",
            }}
          />
          {/* CyberDX mark */}
          <img
            src="/cyberdx-icon.png"
            alt=""
            aria-hidden="true"
            draggable={false}
            style={{
              height: "clamp(64px, 10vw, 96px)",
              width: "clamp(64px, 10vw, 96px)",
              filter: "drop-shadow(0 0 24px rgba(249,115,22,0.55))",
            }}
          />
          {/* wordmark */}
          <span
            className="text-white font-semibold tracking-tight"
            style={{
              fontSize: "clamp(36px, 6.5vw, 60px)",
              letterSpacing: "-0.03em",
              textShadow: "0 0 36px rgba(249,115,22,0.35)",
            }}
          >
            Cyber<span style={{ color: "#f97316" }}>DX</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="mt-7 text-[10px] font-mono uppercase tracking-[0.45em] text-white/45"
        >
          Platform intelligence suite
        </motion.p>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "min(300px, 70vw)" }}
          transition={{ duration: 0.55, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 h-[2px] bg-white/8 overflow-hidden rounded-full relative"
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, #f97316 0%, #ffb86b 50%, #f97316 100%)",
              boxShadow: "0 0 14px rgba(249,115,22,0.65)",
              transition: "width 120ms linear",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.85 }}
          className="mt-4 flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.4em] text-white/40 tabular-nums"
        >
          <span className="w-1 h-1 rounded-full bg-[#f97316] animate-pulse" />
          Initializing · {progress}%
        </motion.div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Phase 2 — Product picker                                           */
/* ------------------------------------------------------------------ */

interface PanelData {
  key: Product;
  idx: string;
  name: string;
  category: string;
  tagline: string;
  features: string[];
  accent: string;
  accentRgb: string;
  motif: "falcon" | "beaver" | "twin";
}

const PANELS: PanelData[] = [
  {
    key: "falcon",
    idx: "01",
    name: "AI Falcon",
    category: "Vision Intelligence",
    tagline:
      "Real-time AI camera system that turns passive video into actionable insight.",
    features: [
      "Real-time video analytics",
      "AI pattern recognition",
      "Operational anomaly alerts",
    ],
    accent: "#f97316",
    accentRgb: "249,115,22",
    motif: "falcon",
  },
  {
    key: "beaver",
    idx: "02",
    name: "AI Beaver",
    category: "Process Intelligence",
    tagline:
      "Automate workflows and connect every tool your business already runs on.",
    features: [
      "40+ workflow connectors",
      "Autonomous AI agents",
      "Real-time bottleneck view",
    ],
    accent: "#fb923c",
    accentRgb: "251,146,60",
    motif: "beaver",
  },
  {
    key: "twin",
    idx: "03",
    name: "AI Twin",
    category: "Industrial Intelligence",
    tagline:
      "Manufacturing digital twin — autonomous operations with predictive insight.",
    features: [
      "MES + ERPNext integration",
      "Autonomous inspection fleet",
      "Predictive maintenance",
    ],
    accent: "#8b5cf6",
    accentRgb: "139,92,246",
    motif: "twin",
  },
];

const MOTIF_IMAGES = [
  "/intro/falcon-core.webp",
  "/intro/falcon-rings.webp",
  "/intro/beaver.webp",
  "/intro/twin.webp",
];

const motifImg = "absolute inset-0 w-full h-full select-none pointer-events-none";
const noMotion = "motion-reduce:[animation:none]";

function Motif({ type }: { type: PanelData["motif"] }) {
  if (type === "falcon") {
    return (
      <div className="relative w-full h-full" aria-hidden="true">
        <img src="/intro/falcon-core.webp" alt="" width={800} height={800} decoding="async" draggable={false} className={motifImg} />
        <img
          src="/intro/falcon-rings.webp"
          alt=""
          width={800}
          height={800}
          decoding="async"
          draggable={false}
          className={`${motifImg} ${noMotion}`}
          style={{ animation: "introSpin 48s linear infinite" }}
        />
      </div>
    );
  }
  return (
    <img
      src={type === "beaver" ? "/intro/beaver.webp" : "/intro/twin.webp"}
      alt=""
      width={800}
      height={800}
      decoding="async"
      draggable={false}
      aria-hidden="true"
      className={`w-full h-full select-none pointer-events-none ${noMotion}`}
      style={{ animation: `${type === "beaver" ? "introBreathe 4.8s" : "introFloat 5.5s"} ease-in-out infinite` }}
    />
  );
}

function SplitSelector({ onSelect, onClose }: IntroScreenProps) {
  const [hover, setHover] = useState<Product | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 bg-black overflow-hidden select-none"
    >
      {/* ambient wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(249,115,22,0.1), transparent 55%), radial-gradient(circle at 80% 80%, rgba(139,92,246,0.1), transparent 55%)",
        }}
      />
      {/* soft grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, #000 25%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, #000 25%, transparent 75%)",
        }}
      />

      {/* top chrome */}
      <div className="absolute top-5 sm:top-6 inset-x-5 sm:inset-x-8 flex items-center justify-between z-30 font-mono text-[10px] uppercase tracking-[0.35em]">
        <div className="flex items-center gap-2.5 text-white/55">
          <img src="/cyberdx-icon.png" alt="" aria-hidden="true" draggable={false} width={28} height={28} className="h-7 w-7 -mx-1" />
          <span className="text-white font-semibold tracking-[0.32em]">CYBERDX</span>
          <span className="hidden sm:inline text-white/35">· Platform Suite</span>
        </div>
        <div className="flex items-center gap-3 text-white/40">
          <span className="hidden sm:inline">v4.0</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.6)] animate-pulse" />
          <span>Online</span>
        </div>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          aria-label="Close product selector"
          className="absolute top-16 sm:top-6 right-5 sm:right-32 z-40 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-4 py-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/70 hover:text-white hover:border-white/35 hover:bg-white/10 transition cursor-pointer"
        >
          <X size={12} /> Close
        </button>
      )}

      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-24 sm:top-28 inset-x-5 flex flex-col items-center z-10"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-4">
          Select a platform
        </span>
        <h1 className="text-white text-center text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.02] max-w-3xl">
          Three products.
          <br className="sm:hidden" />{" "}
          <span className="bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#8b5cf6] bg-clip-text text-transparent">
            One AI backbone.
          </span>
        </h1>
        <p className="text-white/55 text-xs sm:text-sm mt-4 font-light max-w-md text-center leading-relaxed">
          Pick the surface area you want AI to work on — what you watch, what you automate, or what you model.
        </p>
      </motion.div>

      {/* panels grid */}
      <div className="absolute inset-0 flex items-start sm:items-center justify-center z-20 pt-64 sm:pt-72 pb-20 sm:pb-16 px-4 sm:px-8 overflow-y-auto">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {PANELS.map((panel, i) => {
            const active = hover === panel.key;
            const dimmed = hover !== null && !active;
            return (
              <motion.button
                type="button"
                key={panel.key}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.25 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setHover(panel.key)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(panel.key)}
                onBlur={() => setHover(null)}
                onClick={() => onSelect(panel.key)}
                className="group relative text-left bg-gradient-to-b from-white/[0.035] to-white/[0.01] border border-white/8 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 outline-none focus-visible:ring-2 focus-visible:ring-white/40 cursor-pointer"
                style={{
                  opacity: dimmed ? 0.5 : 1,
                  transform: active ? "translateY(-6px)" : "translateY(0)",
                  borderColor: active ? `rgba(${panel.accentRgb}, 0.5)` : undefined,
                  boxShadow: active
                    ? `0 24px 60px rgba(${panel.accentRgb}, 0.28), inset 0 1px 0 rgba(255,255,255,0.08)`
                    : undefined,
                }}
              >
                {/* hover glow */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 32%, rgba(${panel.accentRgb}, 0.2), transparent 65%)`,
                    opacity: active ? 1 : 0,
                  }}
                />

                {/* top accent line */}
                <div
                  className="absolute top-0 left-6 right-6 h-px transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${panel.accent}, transparent)`,
                    opacity: active ? 0.9 : 0.25,
                  }}
                />

                <div className="relative z-10 p-6 sm:p-7 flex flex-col h-full min-h-[480px] sm:min-h-[540px]">
                  {/* header: idx + status dot */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.3em] font-semibold"
                      style={{ color: panel.accent }}
                    >
                      {panel.idx} / {panel.category}
                    </span>
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: panel.accent,
                        boxShadow: `0 0 10px ${panel.accent}`,
                      }}
                    />
                  </div>

                  {/* motif */}
                  <div className="relative flex items-center justify-center mb-6">
                    <div
                      className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] transition-transform duration-700"
                      style={{ transform: active ? "scale(1.06)" : "scale(1)" }}
                    >
                      <Motif type={panel.motif} />
                    </div>
                  </div>

                  {/* name + tagline */}
                  <div className="mb-5">
                    <h2 className="text-white text-2xl sm:text-[28px] font-semibold tracking-tight leading-[1.05]">
                      {panel.name}
                    </h2>
                    <p className="mt-2 text-white/60 text-sm leading-relaxed">
                      {panel.tagline}
                    </p>
                  </div>

                  {/* features */}
                  <ul className="space-y-2 mb-6">
                    {panel.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-white/55 text-[12.5px]"
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-none"
                          style={{ background: panel.accent }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA bar */}
                  <div className="mt-auto flex items-center justify-between pt-5 border-t border-white/8">
                    <span className="text-white/45 text-[10px] font-mono uppercase tracking-[0.3em]">
                      Enter platform
                    </span>
                    <span
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
                      style={{
                        background: active
                          ? panel.accent
                          : `rgba(${panel.accentRgb}, 0.15)`,
                        color: active ? "#fff" : panel.accent,
                        transform: active ? "scale(1.08)" : "scale(1)",
                        boxShadow: active
                          ? `0 10px 24px rgba(${panel.accentRgb}, 0.5)`
                          : "none",
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* bottom hint */}
      <div className="absolute bottom-4 sm:bottom-5 inset-x-6 flex items-center justify-center text-[9px] font-mono uppercase tracking-[0.4em] text-white/25 z-10 pointer-events-none">
        <span>Tab · Enter to select</span>
      </div>

      <style>{`
        @keyframes introSpin { to { transform: rotate(360deg); } }
        @keyframes introFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes introBreathe { 0%,100% { transform: scale(1); filter: brightness(1); } 50% { transform: scale(1.025); filter: brightness(1.12); } }
      `}</style>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Orchestrator                                                       */
/* ------------------------------------------------------------------ */

export default function IntroScreen({ onSelect, skipBoot, onClose }: IntroScreenProps) {
  const [phase, setPhase] = useState<Phase>(skipBoot ? "select" : "logo");

  useEffect(() => {
    MOTIF_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-black">
      <AnimatePresence mode="wait">
        {phase === "logo" ? (
          <motion.div
            key="logo"
            className="absolute inset-0"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <LogoReveal onDone={() => setPhase("select")} />
          </motion.div>
        ) : (
          <SplitSelector key="select" onSelect={onSelect} onClose={onClose} />
        )}
      </AnimatePresence>
    </div>
  );
}
