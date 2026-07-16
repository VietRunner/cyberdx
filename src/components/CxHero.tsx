import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { SplineScene } from "@/components/ui/splite";

const ROBOT_SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

const ROBOT_PHRASES = [
  "INITIALIZING FALCON SYSTEM...",
  "REAL-TIME CAMERA FEED ACTIVE",
  "AI PATTERN RECOGNITION ONLINE",
  "MONITORING FOR ANOMALIES...",
  "OPERATIONAL METRICS PROCESSED",
  "WELCOME TO FALCON INTELLIGENCE"
];

interface CxHeroProps {
  onContact?: () => void;
}

export default function CxHero({ onContact }: CxHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  
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

      
      ctx.strokeStyle = "rgba(249, 115, 22, 0.05)";
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

      
      ctx.fillStyle = "rgba(249, 115, 22, 0.3)";
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
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
      />

      
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(249, 115, 22,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f97316]/10 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: "10s" }} />
      <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#f97316]/5 rounded-full blur-[110px] pointer-events-none z-0" />

      
      <svg
        className="absolute inset-0 w-full h-full opacity-25 z-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradRed" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
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
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 px-5 py-2.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#f97316] animate-ping" />
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#ffb86b] font-mono">
            AI CAMERA SYSTEM & REAL-TIME VIDEO ANALYTICS
          </span>
        </motion.div>

        
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-shimmer text-5xl sm:text-7xl md:text-8xl lg:text-[105px] font-normal uppercase tracking-tight text-white leading-[0.95] max-w-5xl mb-8"
          data-text="WHERE VISION SHAPES VALUE"
        >
          WHERE VISION <br />
          <span className="text-[#f97316]">SHAPES VALUE</span>
        </motion.h1>

        
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-[22px] text-white/75 max-w-4xl font-normal leading-relaxed mb-12"
        >
          CyberDX provides Falcon, an advanced AI Camera System with real-time video analytics.
          Convert passive camera feeds into active analytical insights, optimizing security,
          preventing operational risks, and protecting corporate assets in real-time.
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto mb-20"
        >
          <button
            onClick={onContact}
            style={{ color: "#fff" }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#fb923c] text-white font-medium uppercase tracking-wider text-xs px-10 py-4 transition-colors cursor-pointer shadow-[0_12px_28px_rgba(249,115,22,0.35)]"
          >
            Request a Demo
            <ArrowUpRight size={16} />
          </button>
          <a
            href="#platform"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f97316]/20 hover:bg-[#f97316]/30 text-white font-medium uppercase tracking-wider text-xs px-10 py-4 border border-[#f97316]/25 transition-colors cursor-pointer"
          >
            Explore Platform
          </a>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 45 }}
          className="relative w-full max-w-6xl mx-auto overflow-hidden z-10 aspect-[16/9] max-sm:h-[360px] max-sm:aspect-auto max-sm:overflow-visible"
        >
          
          <div className="absolute top-[6%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 flex items-center gap-2.5 bg-black/70 border border-[#f97316]/30 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-[0_0_30px_rgba(249, 115, 22,0.2)] min-w-[280px] sm:min-w-[340px] justify-center">
            <span className="w-2 h-2 rounded-full bg-[#f97316] animate-ping flex-shrink-0" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] absolute left-[20px] flex-shrink-0" />
            <div className="text-[10px] sm:text-xs font-mono text-[#ffb86b] tracking-wider font-semibold select-none flex items-center">
              <span>{currentText}</span>
              <span className="w-1 h-3.5 bg-[#f97316] ml-1.5 animate-pulse" />
            </div>
          </div>

          <SplineScene
            scene={ROBOT_SCENE_URL}
            className="w-full h-full max-sm:scale-[1.65] max-sm:translate-y-8 max-sm:origin-center"
          />
        </motion.div>
      </div>

      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
