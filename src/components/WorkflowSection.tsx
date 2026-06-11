import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Camera, BrainCircuit, Database, BellRing } from "lucide-react";

interface WorkflowStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
}

const STEPS: WorkflowStep[] = [
  {
    number: "01",
    icon: <Camera size={26} />,
    title: "Data Capture",
    description: "IP cameras installed at the edge continuously capture high-quality images and video, processed locally via Edge AI devices.",
    badge: "CAMERA RECORDING"
  },
  {
    number: "02",
    icon: <BrainCircuit size={26} />,
    title: "AI Analysis",
    description: "Precision deep learning algorithms analyze the video feeds, recognizing objects (faces, license plates, behaviors, smoke/fire) with ultra-low latency.",
    badge: "ARTIFICIAL INTELLIGENCE"
  },
  {
    number: "03",
    icon: <Database size={26} />,
    title: "Database Matching",
    description: "Cross-reference captured object features against centralized or local databases to verify identity and status in real-time.",
    badge: "REAL-TIME DATABASE"
  },
  {
    number: "04",
    icon: <BellRing size={26} />,
    title: "Response & Action",
    description: "Automatically trigger subsequent events: open barrier gates, log attendance, or send security alerts instantly to mobile devices.",
    badge: "TRIGGER ACTION"
  }
];

export default function WorkflowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the workflow section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      id="workflow"
      ref={containerRef}
      className="relative bg-black py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#d85b6a]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-24">
          <span className="inline-flex items-center gap-2 bg-[#d85b6a]/10 border border-[#d85b6a]/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#ff8a9a] uppercase tracking-widest font-mono">
            Operation Workflow
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            REAL-TIME <span className="text-[#d85b6a]">PROCESSING PIPELINE</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-3xl leading-relaxed">
            A closed-loop processing model from image capture to response activation, fully automated in the blink of an eye.
          </p>
        </div>

        {/* Workflow Timeline Layout */}
        <div className="relative">
          {/* Background timeline line */}
          <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-white/10 -translate-x-1/2 hidden lg:block" />
          
          {/* Animated active timeline progress bar */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#d85b6a] to-purple-600 -translate-x-1/2 hidden lg:block z-10 shadow-[0_0_10px_rgba(216,91,106,0.5)]"
          />

          <div className="flex flex-col gap-16 lg:gap-32 relative">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 relative"
                >
                  {/* Left block */}
                  <div className={`w-full lg:w-1/2 ${isEven ? "lg:pr-20 text-left lg:text-right" : "lg:order-2 lg:pl-20 text-left"}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                      className="bg-white/[0.01] border border-white/5 hover:border-[#d85b6a]/30 transition-all duration-300 p-8 md:p-10 rounded-3xl flex flex-col gap-4 group relative overflow-hidden shadow-lg hover:shadow-[0_12px_40px_rgba(216,91,106,0.08)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#d85b6a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className={`flex items-center gap-3 ${isEven ? "lg:justify-end" : "justify-start"}`}>
                        <span className="text-xs font-bold text-[#d85b6a] bg-[#d85b6a]/10 px-3 py-1 rounded font-mono uppercase tracking-wider">
                          {step.badge}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-white/50 text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Central Node representing the step number */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                      className="w-16 h-16 rounded-full bg-black border-2 border-white/20 flex items-center justify-center text-white/50 font-mono font-black text-xl hover:border-[#d85b6a] hover:text-[#d85b6a] hover:scale-110 transition-all duration-300 shadow-[0_0_24px_rgba(0,0,0,0.9)] cursor-pointer"
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Right block (Icon slot) */}
                  <div className={`w-full lg:w-1/2 ${isEven ? "lg:order-2 lg:pl-20 text-left" : "lg:pr-20 text-left lg:text-right"}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                      className={`flex items-center ${isEven ? "justify-start" : "lg:justify-end justify-start"}`}
                    >
                      <div className="w-20 h-20 rounded-2xl bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a] shadow-[0_8px_32px_rgba(216,91,106,0.15)] hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
