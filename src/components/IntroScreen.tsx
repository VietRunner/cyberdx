import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";

const LOGO_SRC = "/cyberdx_logo-removebg-preview.png";

/* Drop these files in /public to enable the panel background videos.
   Until they exist, the on-brand gradient fallback is shown. */
const FALCON_VIDEO = "";
const BEAVER_VIDEO = "";

type Product = "falcon" | "beaver";

interface IntroScreenProps {
  /** Called when the user chooses a product → reveal its landing page. */
  onSelect: (product: Product) => void;
  /** Skip the boot animation and open straight into the selector. */
  skipBoot?: boolean;
  /** When re-opened as a picker, allow closing without choosing. */
  onClose?: () => void;
}

type Phase = "logo" | "select";

const CORAL = "249, 115, 22";
const WHITE = "255,222,228";

const BOOT_STEPS = [
  { at: 0, label: "INITIALIZING VISION CORE" },
  { at: 22, label: "CALIBRATING NEURAL LATTICE" },
  { at: 46, label: "SYNCING SENSOR ARRAY" },
  { at: 72, label: "COMPILING ANALYTICS ENGINE" },
  { at: 100, label: "SYSTEM ONLINE" },
];

/* ------------------------------------------------------------------ */
/*  Phase 1 — "Vision OS" boot / logo reveal (canvas)                  */
/* ------------------------------------------------------------------ */

function LogoReveal({ onDone }: { onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [logoIn, setLogoIn] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setLogoIn(true);
      setProgress(100);
      const t = setTimeout(onDone, 700);
      return () => clearTimeout(t);
    }

    let W = 0;
    let H = 0;
    let DPR = 1;
    const resize = () => {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const CX = () => W / 2;
    const CY = () => H * 0.46;
    const baseR = () => Math.min(W, H) * 0.15;

    // ---- timeline (ms) ----
    const T_GRID = 650;
    const T_CONVERGE = 1550;
    const T_BURST = 480;
    const T_HOLD = 1050;
    const T_FADE = 560;
    const t0 = T_GRID; // grid + reticle established
    const t1 = t0 + T_CONVERGE; // burst / logo forms
    const t2 = t1 + T_BURST; // logo fully clear
    const t3 = t2 + T_HOLD; // begin fade
    const TOTAL = t3 + T_FADE;

    const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    // ---- converging light nodes ----
    interface Node {
      ang: number;
      d0: number;
      d1: number;
      startAt: number;
      dur: number;
      size: number;
      hue: string;
      ecc: number;
    }
    const nodes: Node[] = [];
    const NODE_COUNT = 96;
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        ang: Math.random() * Math.PI * 2,
        d0: Math.max(W, H) * (0.55 + Math.random() * 0.5),
        d1: Math.random() * 16,
        startAt: t0 * 0.3 + Math.random() * (T_CONVERGE * 0.55),
        dur: T_CONVERGE * 0.5 + Math.random() * T_CONVERGE * 0.42,
        size: 0.7 + Math.random() * 1.9,
        hue: Math.random() < 0.62 ? CORAL : WHITE,
        ecc: 0.7,
      });
    }

    // ---- ambient dust ----
    const dust = Array.from({ length: 70 }, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 1200,
      z: Math.random(),
      ph: Math.random() * Math.PI * 2,
    }));

    const hasConic = typeof (ctx as CanvasRenderingContext2D & {
      createConicGradient?: unknown;
    }).createConicGradient === "function";

    const start = performance.now();
    let raf = 0;
    let firedLogoIn = false;
    let lastPct = -1;
    let done = false;

    const frame = (now: number) => {
      const elapsed = now - start;
      const cx = CX();
      const cy = CY();
      const R = baseR();

      // clear
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, W, H);

      const gridAlpha =
        elapsed < t0
          ? easeOut(clamp01(elapsed / t0)) * 0.6
          : elapsed < t3
          ? 0.6
          : 0.6 * (1 - clamp01((elapsed - t3) / T_FADE));

      // ---- backdrop grid ----
      if (gridAlpha > 0.01) {
        const step = 46;
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(${CORAL},${gridAlpha * 0.06})`;
        ctx.beginPath();
        for (let x = (cx % step); x < W; x += step) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, H);
        }
        for (let y = (cy % step); y < H; y += step) {
          ctx.moveTo(0, y);
          ctx.lineTo(W, y);
        }
        ctx.stroke();
      }

      // ---- ambient dust ----
      for (const d of dust) {
        d.y -= (3 + d.z * 9) * 0.016;
        if (d.y < -10) {
          d.y = H + 10;
          d.x = Math.random() * W;
        }
        const tw = 0.4 + 0.4 * Math.sin(d.ph + elapsed * 0.002);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${WHITE},${(0.05 + d.z * 0.12) * tw * gridAlpha})`;
        ctx.arc(d.x % W, d.y, 0.5 + d.z * 1.3, 0, Math.PI * 2);
        ctx.fill();
      }

      // ---- radar sweep (fades in during converge, out after burst) ----
      const sweepAlpha =
        elapsed < t0
          ? 0
          : elapsed < t1
          ? easeOut(clamp01((elapsed - t0) / 400))
          : clamp01(1 - (elapsed - t1) / 500);
      if (hasConic && sweepAlpha > 0.01) {
        const ang = (elapsed * 0.0032) % (Math.PI * 2);
        const g = (ctx as CanvasRenderingContext2D & {
          createConicGradient: (a: number, x: number, y: number) => CanvasGradient;
        }).createConicGradient(ang, cx, cy);
        g.addColorStop(0, `rgba(${CORAL},${0.16 * sweepAlpha})`);
        g.addColorStop(0.08, `rgba(${CORAL},0)`);
        g.addColorStop(0.92, `rgba(${CORAL},0)`);
        g.addColorStop(1, `rgba(${CORAL},${0.16 * sweepAlpha})`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, R * 3.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // ---- additive glow layer: core + nodes + shockwaves ----
      ctx.globalCompositeOperation = "lighter";

      // core glow
      let coreP = 0;
      if (elapsed < t0) coreP = 0;
      else if (elapsed < t1) coreP = easeInOut(clamp01((elapsed - t0) / (t1 - t0))) * 0.8;
      else if (elapsed < t2) {
        const b = clamp01((elapsed - t1) / (t2 - t1));
        coreP = lerp(0.8, 1.35, Math.sin(b * Math.PI)); // flash
      } else coreP = 0.8;
      if (coreP > 0.01) {
        const cr = R * (1.4 + coreP * 1.5);
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
        grad.addColorStop(0, `rgba(${WHITE},${0.5 * coreP})`);
        grad.addColorStop(0.3, `rgba(${CORAL},${0.34 * coreP})`);
        grad.addColorStop(1, `rgba(${CORAL},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, cr, 0, Math.PI * 2);
        ctx.fill();
      }

      // nodes streaming inward with trails
      for (const n of nodes) {
        const local = elapsed - n.startAt;
        if (local < 0) continue;
        const p = local / n.dur;
        if (p > 1) continue;
        const pe = easeOut(clamp01(p));
        const r = lerp(n.d0, n.d1, pe);
        const rt = r + lerp(70, 6, pe);
        const hx = cx + Math.cos(n.ang) * r;
        const hy = cy + Math.sin(n.ang) * r * n.ecc;
        const tx = cx + Math.cos(n.ang) * rt;
        const ty = cy + Math.sin(n.ang) * rt * n.ecc;
        const alpha = Math.min(clamp01(p / 0.1), clamp01((1 - p) / 0.18));
        if (alpha <= 0.01) continue;
        const g = ctx.createLinearGradient(tx, ty, hx, hy);
        g.addColorStop(0, `rgba(${n.hue},0)`);
        g.addColorStop(1, `rgba(${n.hue},${0.9 * alpha})`);
        ctx.strokeStyle = g;
        ctx.lineWidth = n.size * 0.9;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = `rgba(${n.hue},${alpha})`;
        ctx.arc(hx, hy, n.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // shockwave rings on burst
      if (elapsed >= t1) {
        for (let k = 0; k < 3; k++) {
          const s = t1 + k * 120;
          const lp = (elapsed - s) / 640;
          if (lp < 0 || lp > 1) continue;
          const rr = easeOut(lp) * Math.min(W, H) * 0.85;
          const a = (1 - lp) * 0.5;
          ctx.strokeStyle = `rgba(${CORAL},${a})`;
          ctx.lineWidth = lerp(3, 0.4, lp);
          ctx.beginPath();
          ctx.arc(cx, cy, rr, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      ctx.globalCompositeOperation = "source-over";

      // ---- HUD reticle around the logo ----
      const reticleP =
        elapsed < t0
          ? 0
          : elapsed < t1
          ? easeOut(clamp01((elapsed - t0) / (T_CONVERGE * 0.7)))
          : elapsed < t3
          ? 1
          : 1 - clamp01((elapsed - t3) / T_FADE);
      if (reticleP > 0.01) {
        const rot = elapsed * 0.0006;
        ctx.save();
        ctx.translate(cx, cy);

        // inner solid ring
        ctx.strokeStyle = `rgba(${CORAL},${0.5 * reticleP})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(0, 0, R * 1.18, 0, Math.PI * 2 * reticleP);
        ctx.stroke();

        // tick marks
        ctx.strokeStyle = `rgba(${CORAL},${0.35 * reticleP})`;
        ctx.lineWidth = 1;
        const ticks = 60;
        for (let i = 0; i < ticks; i++) {
          if (i / ticks > reticleP) break;
          const a = (i / ticks) * Math.PI * 2;
          const long = i % 5 === 0;
          const r1 = R * 1.22;
          const r2 = R * (long ? 1.32 : 1.27);
          ctx.beginPath();
          ctx.moveTo(Math.cos(a) * r1, Math.sin(a) * r1);
          ctx.lineTo(Math.cos(a) * r2, Math.sin(a) * r2);
          ctx.stroke();
        }

        // dashed rotating ring
        ctx.save();
        ctx.rotate(rot);
        ctx.setLineDash([6, 10]);
        ctx.strokeStyle = `rgba(${CORAL},${0.45 * reticleP})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(0, 0, R * 1.5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();

        // outer arc segments (counter-rotating)
        ctx.save();
        ctx.rotate(-rot * 1.4);
        ctx.strokeStyle = `rgba(${WHITE},${0.4 * reticleP})`;
        ctx.lineWidth = 2;
        for (let s = 0; s < 3; s++) {
          const a0 = (s / 3) * Math.PI * 2 + 0.25;
          ctx.beginPath();
          ctx.arc(0, 0, R * 1.85, a0, a0 + 0.9);
          ctx.stroke();
        }
        ctx.restore();
        ctx.restore();
      }

      // ---- HUD corner brackets ----
      if (gridAlpha > 0.01) {
        const inset = Math.min(W, H) * 0.06;
        const len = Math.min(W, H) * 0.045;
        ctx.strokeStyle = `rgba(${CORAL},${gridAlpha * 0.7})`;
        ctx.lineWidth = 1.5;
        const corners: [number, number, number, number][] = [
          [inset, inset, 1, 1],
          [W - inset, inset, -1, 1],
          [inset, H - inset, 1, -1],
          [W - inset, H - inset, -1, -1],
        ];
        for (const [x, y, sx, sy] of corners) {
          ctx.beginPath();
          ctx.moveTo(x + sx * len, y);
          ctx.lineTo(x, y);
          ctx.lineTo(x, y + sy * len);
          ctx.stroke();
        }
      }

      // ---- burst white flash ----
      if (elapsed >= t1 && elapsed < t2) {
        const b = clamp01((elapsed - t1) / (t2 - t1));
        ctx.fillStyle = `rgba(255,255,255,${Math.sin(b * Math.PI) * 0.12})`;
        ctx.fillRect(0, 0, W, H);
      }

      // ---- scanlines overlay ----
      ctx.fillStyle = `rgba(0,0,0,${0.16 * gridAlpha})`;
      for (let y = 0; y < H; y += 3) ctx.fillRect(0, y, W, 1);

      // ---- vignette ----
      const vg = ctx.createRadialGradient(cx, cy, Math.min(W, H) * 0.2, cx, cy, Math.max(W, H) * 0.75);
      vg.addColorStop(0, "rgba(0,0,0,0)");
      vg.addColorStop(1, "rgba(0,0,0,0.7)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, W, H);

      // ---- fade to black at the end ----
      if (elapsed >= t3) {
        ctx.fillStyle = `rgba(0,0,0,${clamp01((elapsed - t3) / T_FADE)})`;
        ctx.fillRect(0, 0, W, H);
      }

      // ---- react state: logo reveal + boot progress ----
      if (!firedLogoIn && elapsed >= t1 - 120) {
        firedLogoIn = true;
        setLogoIn(true);
      }
      const pct = Math.min(100, Math.floor(clamp01(elapsed / t2) * 100));
      if (pct !== lastPct) {
        lastPct = pct;
        setProgress(pct);
      }

      if (elapsed >= TOTAL) {
        if (!done) {
          done = true;
          onDone();
        }
        return;
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [onDone]);

  const status =
    [...BOOT_STEPS].reverse().find((s) => progress >= s.at)?.label ?? BOOT_STEPS[0].label;

  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* logo, aligned to the canvas core (CY = 46%) */}
      <motion.img
        src={LOGO_SRC}
        alt="CyberDX"
        initial={{ opacity: 0, scale: 0.7, filter: "blur(16px)" }}
        animate={
          logoIn
            ? { opacity: 1, scale: [0.7, 1.06, 1], filter: "blur(0px)" }
            : {}
        }
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 z-10 w-[180px] sm:w-[240px] md:w-[300px] object-contain drop-shadow-[0_0_50px_rgba(249, 115, 22,0.5)]"
      />

      {/* top HUD tags */}
      <div className="absolute top-6 left-6 font-mono text-[10px] tracking-[0.32em] uppercase text-[#ffb86b]/70 z-10">
        CyberDX // Vision OS
      </div>
      <div className="absolute top-6 right-6 font-mono text-[10px] tracking-[0.32em] uppercase text-white/40 z-10">
        v4.0 · secure boot
      </div>

      {/* bottom boot readout */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[min(440px,82vw)] z-10">
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.25em] uppercase mb-2">
          <span className="text-[#ffb86b]/80 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
            {status}
          </span>
          <span className="text-white/50 tabular-nums">{progress}%</span>
        </div>
        <div className="h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#f97316] to-[#ffb86b] transition-[width] duration-150 ease-out shadow-[0_0_12px_rgba(249, 115, 22,0.7)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Phase 2 — Docky-style split selector                              */
/* ------------------------------------------------------------------ */

interface PanelData {
  key: "falcon" | "beaver";
  name: string;
  eyebrow: string;
  tagline: string;
  video?: string;
  accent: string;      // hex
  accentRgb: string;   // "r,g,b"
  available: boolean;
}

const PANELS: PanelData[] = [
  {
    key: "falcon",
    name: "AI Falcon",
    eyebrow: "01 / Vision Intelligence",
    tagline: "AI Camera System & Real-Time Video Analytics",
    video: FALCON_VIDEO,
    accent: "#f97316",
    accentRgb: "249, 115, 22",
    available: true,
  },
  {
    key: "beaver",
    name: "AI Beaver",
    eyebrow: "02 / Process Intelligence",
    tagline: "AI Automation Process",
    video: BEAVER_VIDEO,
    accent: "#f97316",
    accentRgb: "249,115,22",
    available: true,
  },
];

function SplitSelector({ onSelect, onClose }: IntroScreenProps) {
  const [hover, setHover] = useState<"falcon" | "beaver" | null>(null);
  const [notice, setNotice] = useState(false);

  // divider position (% of viewport width occupied by the Falcon panel)
  const leftPct = hover === "falcon" ? 62 : hover === "beaver" ? 38 : 50;

  const handleSelect = (panel: PanelData) => {
    if (panel.available) {
      onSelect(panel.key);
    } else {
      setNotice(true);
      window.setTimeout(() => setNotice(false), 2600);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 bg-black flex overflow-hidden select-none"
    >
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Close product selector"
          className="fixed top-6 left-1/2 -translate-x-1/2 z-40 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2.5 text-[10px] font-mono uppercase tracking-[0.3em] text-white/80 hover:text-white hover:border-white/40 transition-colors"
        >
          <X size={13} /> Close
        </button>
      )}
      {PANELS.map((panel) => {
        const active = hover === panel.key;
        const dimmed = hover !== null && !active;
        return (
          <motion.div
            key={panel.key}
            role="button"
            tabIndex={0}
            initial={{ opacity: 0, y: 28, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: active ? 1.018 : 1 }}
            transition={{ duration: active ? 0.45 : 0.85, delay: active ? 0 : panel.key === "falcon" ? 0.08 : 0.2, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHover(panel.key)}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover(panel.key)}
            onBlur={() => setHover(null)}
            onClick={() => handleSelect(panel)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSelect(panel);
              }
            }}
            style={{
              flexBasis: `${panel.key === "falcon" ? leftPct : 100 - leftPct}%`,
              transition: "flex-basis 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
            className="relative h-full overflow-hidden cursor-pointer group outline-none"
          >
            {/* background video with gradient fallback */}
            <motion.div
              className="absolute inset-0"
              animate={{ scale: active ? 1.08 : 1, opacity: dimmed ? 0.6 : 1 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: `radial-gradient(circle at 50% 30%, rgba(${panel.accentRgb},0.22), transparent 60%), linear-gradient(180deg,#0a0a0a 0%, #000 100%)`,
              }}
            />
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                opacity: active ? 1 : 0,
                scale: active ? 1 : 0.92,
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: `radial-gradient(circle at 50% 48%, rgba(${panel.accentRgb},0.22), transparent 48%)`,
              }}
            />
            {panel.video ? (
              <>
                <video
                  className="absolute inset-0 w-full h-full object-cover scale-105 blur-2xl transition-all duration-700"
                  style={{
                    opacity: active ? 0.28 : dimmed ? 0.08 : 0.16,
                    filter: "blur(24px) saturate(1.05)",
                  }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                  onError={(e) => {
                    (e.currentTarget as HTMLVideoElement).style.display = "none";
                  }}
                >
                  <source src={panel.video} type="video/mp4" />
                </video>
                <video
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                  style={{
                    opacity: active ? 0.85 : dimmed ? 0.25 : 0.55,
                    filter: active ? "saturate(1.1)" : "grayscale(0.4)",
                  }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  onError={(e) => {
                    (e.currentTarget as HTMLVideoElement).style.display = "none";
                  }}
                >
                  <source src={panel.video} type="video/mp4" />
                </video>
              </>
            ) : null}

            {/* darkening overlay for legibility */}
            <div
              className="absolute inset-0 transition-opacity duration-700"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.85) 100%)",
                opacity: dimmed ? 0.9 : 0.7,
              }}
            />

            {/* accent edge line on the divider side */}
            <div
              className="absolute top-0 bottom-0 w-px"
              style={{
                [panel.key === "falcon" ? "right" : "left"]: 0,
                background: `linear-gradient(180deg, transparent, ${panel.accent}, transparent)`,
                opacity: 0.5,
              }}
            />

            {/* content — eyebrow pinned to the top, identity block to the
                bottom, leaving the center band clear for the wordmark */}
            <div className="relative z-30 h-full flex flex-col items-center justify-between text-center px-6 pt-16 pb-12 sm:pt-20 sm:pb-16">
              {/* top eyebrow */}
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: dimmed ? 0.5 : 1, y: 0 }}
                transition={{ duration: 0.55, delay: panel.key === "falcon" ? 0.35 : 0.45 }}
                className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.35em] transition-opacity duration-500"
                style={{ color: panel.accent }}
              >
                {panel.eyebrow}
              </motion.span>

              {/* bottom identity block */}
              <motion.div
                initial={{ opacity: 0, y: 34, scale: 0.96 }}
                animate={{ y: active ? -16 : 0, opacity: dimmed ? 0.6 : 1, scale: active ? 1.06 : 1 }}
                transition={{ duration: 0.65, delay: panel.key === "falcon" ? 0.42 : 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]">
                  {panel.name}
                </h2>
                <p className="mt-3 max-w-xs text-xs sm:text-sm text-white/75 font-normal leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                  {panel.tagline}
                </p>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: active ? 1 : 0.75, y: active ? -2 : 4, scale: active ? 1.08 : 1 }}
                  transition={{ duration: 0.45, delay: panel.key === "falcon" ? 0.62 : 0.74, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6"
                >
                  {panel.available ? (
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                      style={{ background: panel.accent, boxShadow: `0 12px 28px rgba(${panel.accentRgb},0.4)` }}
                    >
                      Enter Platform
                      <ArrowUpRight size={15} />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-xs font-black uppercase tracking-wider text-white/80 border border-white/20 bg-white/5">
                      Coming Soon
                      <ArrowRight size={15} />
                    </span>
                  )}
                </motion.div>

                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: dimmed ? 0.5 : 1, y: 0 }}
                  transition={{ duration: 0.45, delay: panel.key === "falcon" ? 0.72 : 0.84 }}
                  className="mt-8 text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] transition-colors duration-500"
                  style={{ color: active ? panel.accent : "rgba(255,255,255,0.35)" }}
                >
                  {panel.key === "falcon"
                    ? "Real-Time Video Intelligence"
                    : "Workflow Automation"}
                </motion.span>
              </motion.div>
            </div>
            <motion.div
              className="absolute inset-x-10 top-10 h-px pointer-events-none"
              animate={{ opacity: active ? 0.75 : 0, scaleX: active ? 1 : 0.35 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: `linear-gradient(90deg, transparent, ${panel.accent}, transparent)` }}
            />
            <motion.div
              className="absolute inset-x-10 bottom-10 h-px pointer-events-none"
              animate={{ opacity: active ? 0.75 : 0, scaleX: active ? 1 : 0.35 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: `linear-gradient(90deg, transparent, ${panel.accent}, transparent)` }}
            />
          </motion.div>
        );
      })}

      {/* Orange glow that slides toward the hovered product, behind the wordmark. */}
      <div className="pointer-events-none fixed inset-0 z-[15] flex items-center justify-center pb-[26vh] overflow-hidden">
        <motion.div
          aria-hidden
          initial={false}
          animate={{
            x: hover === "falcon" ? "-30vw" : hover === "beaver" ? "30vw" : "0vw",
            opacity: hover ? 0.95 : 0.55,
            scale: hover ? 1.12 : 1,
          }}
          transition={{ type: "spring", stiffness: 55, damping: 18, mass: 0.9 }}
          style={{
            width: "64vw",
            height: "62vh",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(249,115,22,0.5) 0%, rgba(249,115,22,0.18) 34%, rgba(249,115,22,0) 68%)",
            filter: "blur(48px)",
          }}
        />
      </div>

      {/* Split two-tone wordmark, anchored to viewport center, clipped at the
          divider. Sits in the upper-center band (pb offset) and below the
          panel content (z-20 < z-30) so labels stay readable. */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-20 flex items-center justify-center pb-[26vh]"
        initial={{ opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.span
            className="block font-black tracking-tight leading-none whitespace-nowrap select-none"
            style={{
              fontSize: "clamp(3.5rem, 16vw, 19rem)",
              textShadow: "0 8px 60px rgba(0,0,0,0.55), 0 0 60px rgba(249,115,22,0.35)",
            }}
            initial={{ color: "#f97316" }}
            animate={{
              scale: hover ? 1.03 : 1,
              color: hover ? "#ffb877" : "#f97316",
              opacity: hover ? 1 : 0.96,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            CyberDX
          </motion.span>
        </motion.div>
      </motion.div>

      {/* "coming soon" notice for Beaver */}
      <AnimatePresence>
        {notice && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-30 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-6 py-3 text-sm text-white font-mono"
          >
            AI Beaver is in development — coming soon.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Orchestrator                                                       */
/* ------------------------------------------------------------------ */

export default function IntroScreen({ onSelect, skipBoot, onClose }: IntroScreenProps) {
  const [phase, setPhase] = useState<Phase>(skipBoot ? "select" : "logo");

  return (
    <div className="fixed inset-0 z-[200] bg-black">
      <AnimatePresence mode="wait">
        {phase === "logo" ? (
          <motion.div
            key="logo"
            className="absolute inset-0"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
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
