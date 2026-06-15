import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface CxHeroProps {
  onContact?: () => void;
}

export default function CxHero({ onContact }: CxHeroProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 3D parallax on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 35; // max rotation degrees
    const y = (clientY - top - height / 2) / 35;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  // Canvas tech-flow grid particles animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }

    const particles: Particle[] = [];
    const count = 40;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      ctx.strokeStyle = "rgba(216, 91, 106, 0.05)";
      ctx.lineWidth = 1;
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update & Draw particles
      ctx.fillStyle = "rgba(216, 91, 106, 0.3)";
      for (let i = 0; i < count; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-black flex flex-col justify-center items-center px-4 pt-36 pb-32 overflow-hidden"
    >
      {/* Background canvas for tech particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
      />

      {/* Background radial glow mapping the red theme */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(216,91,106,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Radiant Glowing Orbs (Soft coral ambient lights) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d85b6a]/10 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: "10s" }} />
      <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#d85b6a]/5 rounded-full blur-[110px] pointer-events-none z-0" />

      {/* SVG Grid lines to add modern visual depth */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25 z-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradRed" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d85b6a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#d85b6a" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g stroke="url(#lineGradRed)" strokeWidth="1">
          <line x1="10%" y1="0%" x2="10%" y2="100%" />
          <line x1="30%" y1="0%" x2="30%" y2="100%" />
          <line x1="50%" y1="0%" x2="50%" y2="100%" />
          <line x1="70%" y1="0%" x2="70%" y2="100%" />
          <line x1="90%" y1="0%" x2="90%" y2="100%" />
          <line x1="0%" y1="20%" x2="100%" y2="20%" />
          <line x1="0%" y1="50%" x2="100%" y2="50%" />
          <line x1="0%" y1="80%" x2="100%" y2="80%" />
        </g>
      </svg>

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10 text-center px-4">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#d85b6a]/10 border border-[#d85b6a]/20 rounded-full px-5 py-2.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#d85b6a] animate-ping" />
          <span className="text-xs font-black uppercase tracking-widest text-[#ff8a9a] font-mono">
            AI CAMERA SYSTEM & REAL-TIME VIDEO ANALYTICS
          </span>
        </motion.div>

        {/* Centered Headline - Bold, massive uppercase typography matching CXVIEW */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[105px] font-black uppercase tracking-tight text-white leading-[0.92] max-w-5xl mb-8 font-sans"
        >
          WHERE VISION <br />
          <span className="text-[#d85b6a]">SHAPES VALUE</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-[22px] text-white/75 max-w-4xl font-normal leading-relaxed mb-12"
        >
          We provide advanced AI Camera & Real-Time Video Analytics for Intelligent Surveillance.
          Convert passive camera feeds into active analytical insights, optimizing security,
          preventing operational risks, and protecting corporate assets in real-time.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto mb-20"
        >
          <button
            onClick={onContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d85b6a] hover:bg-[#e26c7b] text-white font-black uppercase tracking-wider text-xs px-12 py-5 rounded-full shadow-[0_12px_28px_rgba(216,91,106,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 cursor-pointer"
          >
            Request a Demo
            <ArrowUpRight size={16} />
          </button>
          <a
            href="#platform"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-wider text-xs px-12 py-5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 cursor-pointer"
          >
            Explore Platform
          </a>
        </motion.div>

        {/* Premium Dashboard Visual Mockup with 3D perspective and hover animations (from cxview.ai) */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 45 }}
          className="relative w-full max-w-5xl mx-auto overflow-visible z-10"
        >
          <div
            className="w-full rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(216,91,106,0.15)] bg-[#0c0c0e] p-2 transition-all duration-300 ease-out group"
            style={{
              perspective: "1000px",
              transform: `rotateX(${-coords.y}deg) rotateY(${coords.x}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Main Dashboard Screen Image */}
            <div className="rounded-xl overflow-hidden border border-white/5 bg-black/60 relative aspect-[16/9]">
              <img
                src="/all-in-one-dashboard.png"
                alt="ApexDX AI Dashboard"
                className="w-full h-full object-cover opacity-85 group-hover:scale-[1.01] transition-transform duration-700 pointer-events-none"
              />
              {/* Ambient scanner light overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d85b6a]/5 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating AI Card 1: Alert Alert (top-left) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 md:-left-12 bg-[#0c0c0f]/90 border border-red-500/30 p-4 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md text-left max-w-xs z-20"
            >
              <div className="w-8 h-8 rounded-lg bg-red-950/80 border border-red-500 flex items-center justify-center text-red-500 font-bold text-xs animate-pulse">
                !
              </div>
              <div>
                <span className="text-[9px] font-mono text-white/40 uppercase block">Intrusion Alert</span>
                <span className="text-xs font-bold text-white block">Perimeter Intrusion Detected</span>
              </div>
            </motion.div>

            {/* Floating AI Card 2: LPR Detection (bottom-right) */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -right-6 md:-right-12 bg-[#0c0c0f]/90 border border-[#d85b6a]/30 p-4 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md text-left z-20"
            >
              <div className="w-8 h-8 rounded-lg bg-[#d85b6a]/15 border border-[#d85b6a] flex items-center justify-center text-[#ff8a9a] font-bold text-xs">
                AI
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#ff8a9a] uppercase block">LPR Identification</span>
                <span className="text-xs font-mono font-bold text-white">29A-999.99</span>
              </div>
            </motion.div>

            {/* Floating AI Card 3: Camera active status (top-right) */}
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-1/4 -right-8 md:-right-16 bg-[#0c0c0f]/90 border border-green-500/20 p-3 rounded-lg shadow-2xl flex items-center gap-2.5 backdrop-blur-md z-20"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
              <span className="text-[10px] font-mono font-bold text-white/80">CAM_04: ONLINE</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
