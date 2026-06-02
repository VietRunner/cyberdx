import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface ModernHeroProps {
  onContact?: () => void;
}

export default function ModernHero({ onContact }: ModernHeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex flex-col justify-center items-center px-4 pt-32 pb-20 overflow-hidden"
    >
      {/* FUTURISTIC 3D PERSPECTIVE GRID TECH TUNNEL BACKGROUND (CẢM HỨNG CXVIEW.AI) */}
      <div className="absolute inset-0 z-0 bg-radial-gradient from-teal-950/20 via-black to-black pointer-events-none" />

      {/* Radiant Glowing Orbs (Teal and Neon Blue ambient lights) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0 pulse-wave-glow" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* SVG 3D Perspective Grid Tunnel */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35 z-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gridGrad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0d9488" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Perspective lines radiating from center */}
        <g stroke="url(#lineGrad)" strokeWidth="1.5">
          <line x1="50%" y1="50%" x2="0%" y2="0%" />
          <line x1="50%" y1="50%" x2="25%" y2="0%" />
          <line x1="50%" y1="50%" x2="50%" y2="0%" />
          <line x1="50%" y1="50%" x2="75%" y2="0%" />
          <line x1="50%" y1="50%" x2="100%" y2="0%" />
          
          <line x1="50%" y1="50%" x2="0%" y2="100%" />
          <line x1="50%" y1="50%" x2="25%" y2="100%" />
          <line x1="50%" y1="50%" x2="50%" y2="100%" />
          <line x1="50%" y1="50%" x2="75%" y2="100%" />
          <line x1="50%" y1="50%" x2="100%" y2="100%" />
          
          <line x1="50%" y1="50%" x2="0%" y2="50%" />
          <line x1="50%" y1="50%" x2="100%" y2="50%" />
        </g>

        {/* Concentric perspective squares/ovals getting closer as they go deep */}
        <g stroke="#0d9488" strokeWidth="1" fill="none" opacity="0.5">
          <rect x="10%" y="10%" width="80%" height="80%" rx="8" />
          <rect x="20%" y="20%" width="60%" height="60%" rx="6" />
          <rect x="30%" y="30%" width="40%" height="40%" rx="4" />
          <rect x="38%" y="38%" width="24%" height="24%" rx="3" />
          <rect x="44%" y="44%" width="12%" height="12%" rx="2" />
          <rect x="48%" y="48%" width="4%" height="4%" rx="1" />
        </g>

        {/* Pulsing data node packets travel along grid lines */}
        <circle cx="50%" cy="50%" r="4" fill="#22d3ee" className="pulse-node-1">
          <animate attributeName="cx" values="50%;10%" dur="4s" repeatCount="indefinite" />
          <animate attributeName="cy" values="50%;10%" dur="4s" repeatCount="indefinite" />
          <animate attributeName="r" values="2;6" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="50%" cy="50%" r="4" fill="#0d9488" className="pulse-node-2">
          <animate attributeName="cx" values="50%;90%" dur="5s" repeatCount="indefinite" />
          <animate attributeName="cy" values="50%;10%" dur="5s" repeatCount="indefinite" />
          <animate attributeName="r" values="2;6" dur="5s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Floating grid pattern on floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 opacity-[0.06] pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(to right, #0d9488 1px, transparent 1px), linear-gradient(to bottom, #0d9488 1px, transparent 1px)",
          backgroundSize: "60px 40px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom center",
        }}
      />

      {/* Content wrapper - strictly centered and styled like cxview.ai */}
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10 text-center px-4">
        {/* Intro Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#d85b6a]/15 border border-[#d85b6a]/30 rounded-full px-6 py-2.5 mb-8 shadow-[0_0_20px_rgba(216,91,106,0.15)]"
        >
          <Sparkles size={14} className="text-[#d85b6a] animate-pulse" />
          <span className="text-xs font-black uppercase tracking-widest text-[#ff8a9a] font-mono">
            Nền Tảng Tuyển Dụng AI Thế Hệ Mới
          </span>
        </motion.div>

        {/* Centered H1 - bold, all-caps, massive size, similar to cxview.ai */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.95] max-w-5xl mb-8"
          style={{ letterSpacing: "-0.03em" }}
        >
          NỀN TẢNG TUYỂN DỤNG <br />
          <span className="text-gradient-peach">KỶ NGUYÊN AI</span>
        </motion.h1>

        {/* Centered value proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-medium leading-relaxed mb-12"
        >
          Kết nối người lao động với công việc phù hợp nhanh hơn, đồng thời giúp doanh nghiệp tuyển đúng người, giảm thời gian sàng lọc và tối ưu vận hành tuyển dụng.
        </motion.p>

        {/* Centered pill CTA button - exact cxview.ai visual style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto"
        >
          <button
            onClick={onContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d85b6a] hover:bg-[#e26c7b] text-white font-black uppercase tracking-wider text-sm px-12 py-5 rounded-full shadow-[0_12px_28px_rgba(216,91,106,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            Trải Nghiệm Ngay
            <ArrowUpRight size={18} />
          </button>
          <button
            onClick={onContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-wider text-sm px-10 py-5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            Xem Bản Demo
            <ArrowUpRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
