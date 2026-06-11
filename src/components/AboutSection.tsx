import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

function Counter({ value, duration = 1.2 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const match = value.match(/^(\d+)(.*)$/);
  const targetNum = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const startNum = targetNum > 1000 ? targetNum - 24 : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let frame = 0;
          const totalFrames = Math.round(duration * 60);

          const animate = () => {
            frame++;
            const progress = frame / totalFrames;
            const easedProgress = 1 - Math.pow(1 - progress, 2); // quadratic ease-out
            const current = Math.round(startNum + (targetNum - startNum) * easedProgress);
            setCount(current);

            if (frame < totalFrames) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetNum);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [targetNum, hasAnimated, startNum, duration]);

  return (
    <span ref={elementRef} className="font-mono">
      {hasAnimated ? count : startNum}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-black py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#d85b6a]/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left column: Badge and Title (staggered scroll reveal) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col gap-4 text-left"
          >
            <span className="inline-flex self-start items-center gap-2 bg-[#d85b6a]/10 border border-[#d85b6a]/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#ff8a9a] uppercase tracking-widest font-mono">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              PIONEERING <br />
              <span className="text-[#d85b6a]">AI TECHNOLOGY</span>
            </h2>
          </motion.div>

          {/* Right column: Large descriptive text */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl lg:text-[28px] font-normal leading-relaxed text-white/90 text-justify"
            >
              Founded with the mission to pioneer in Computer Vision, 
              CyberDX specializes in transforming conventional surveillance camera systems into exceptionally 
              intelligent analytical tools. We proudly empower businesses to optimize operational efficiency, 
              detect risks early, and construct secure, highly productive workspaces.
            </motion.p>

            {/* Micro grid statistics inside About */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10"
            >
              <div className="group">
                <h4 className="text-4xl lg:text-5xl font-black text-white font-mono transition-colors group-hover:text-[#d85b6a] duration-300">
                  <Counter value="2024" />
                </h4>
                <p className="text-sm text-white/50 uppercase tracking-wider mt-2 font-mono">Established Year</p>
              </div>
              <div className="group">
                <h4 className="text-4xl lg:text-5xl font-black text-[#d85b6a] font-mono transition-colors group-hover:text-white duration-300">
                  <Counter value="99%" />+
                </h4>
                <p className="text-sm text-white/50 uppercase tracking-wider mt-2 font-mono">AI Accuracy</p>
              </div>
              <div className="group">
                <h4 className="text-4xl lg:text-5xl font-black text-white font-mono transition-colors group-hover:text-[#d85b6a] duration-300">
                  <Counter value="24" />/7
                </h4>
                <p className="text-sm text-white/50 uppercase tracking-wider mt-2 font-mono">Real-time Monitoring</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
