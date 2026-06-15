import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { SplineScene } from "@/components/ui/splite";

const ROBOT_PHRASES = [
  "INITIALIZING APEXDX SYSTEM...",
  "REAL-TIME SURVEILLANCE FEED ACTIVE",
  "AI PATTERN RECOGNITION ONLINE",
  "MONITORING FOR ANOMALIES...",
  "OPERATIONAL METRICS PROCESSED",
  "WELCOME TO APEXDX INTELLIGENCE"
];

interface CxHeroProps {
  onContact?: () => void;
}

export default function CxHero({ onContact }: CxHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Typewriter state for Robot speech bubble
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const activePhrase = ROBOT_PHRASES[phraseIndex];
    const typingSpeed = isDeleting ? 25 : 55;

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(activePhrase.substring(0, currentText.length + 1));
        if (currentText === activePhrase) {
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        setCurrentText(activePhrase.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % ROBOT_PHRASES.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

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

        {/* 3D Spline Scene of the Robot (con robot di chuyen theo chuot) */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 45 }}
          className="relative w-full max-w-6xl mx-auto overflow-hidden z-10 aspect-[16/9]"
        >
          {/* Floating Robot Speech / AI Status Pill */}
          <div className="absolute top-[6%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 flex items-center gap-2.5 bg-black/70 border border-[#d85b6a]/30 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-[0_0_30px_rgba(216,91,106,0.2)] min-w-[280px] sm:min-w-[340px] justify-center">
            <span className="w-2 h-2 rounded-full bg-[#d85b6a] animate-ping flex-shrink-0" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#d85b6a] absolute left-[20px] flex-shrink-0" />
            <div className="text-[10px] sm:text-xs font-mono text-[#ff8a9a] tracking-wider font-semibold select-none flex items-center">
              <span>{currentText}</span>
              <span className="w-1 h-3.5 bg-[#d85b6a] ml-1.5 animate-pulse" />
            </div>
          </div>

          {/* Holographic Chest Logo Overlay */}
          <div className="absolute top-[54%] left-[50.8%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 flex flex-col items-center">
            <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.35em] text-[#d85b6a]/80 mb-0.5 uppercase select-none">SYSTEM ACTIVE</div>
            <div className="font-sans font-black text-2xl sm:text-3xl tracking-[0.2em] pl-[0.2em] text-white drop-shadow-[0_0_15px_rgba(216,91,106,0.7)] select-none">
              <span className="text-[#d85b6a]">A</span>PEXDX
            </div>
          </div>

          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* Subtle bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
