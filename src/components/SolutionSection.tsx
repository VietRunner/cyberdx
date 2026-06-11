import { motion } from "motion/react";
import { Server, Store, Check, ArrowRight } from "lucide-react";

interface SolutionCardProps {
  onContact?: () => void;
}

export default function SolutionSection({ onContact }: SolutionCardProps) {
  return (
    <section
      id="solution"
      className="relative bg-black py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Visual background elements */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#d85b6a]/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <span className="inline-flex items-center gap-2 bg-[#d85b6a]/10 border border-[#d85b6a]/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#ff8a9a] uppercase tracking-widest font-mono">
            Solution Segments
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            TAILORED SOLUTIONS <span className="text-[#d85b6a]">FOR EVERY SCALE</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-3xl leading-relaxed">
            We design specialized AI Camera solutions optimized for large enterprise operations (B2B) 
            and retail/service chain environments (B2C).
          </p>
        </div>

        {/* 2-Column Split: B2B vs B2C */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Box 1: B2B Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl bg-[#0a0a0c] border border-white/5 hover:border-[#d85b6a]/20 transition-all duration-300 flex flex-col justify-between gap-12 group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a] mb-8 group-hover:scale-105 transition-transform">
                <Server size={28} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide mb-2">
                Enterprise & Industrial (B2B)
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
                Large-scale AI Camera systems deeply integrated into the existing infrastructure of factories, warehouses, office buildings, and smart cities.
              </p>

              {/* Core Offerings */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#d85b6a]/10 flex items-center justify-center text-[#d85b6a]">
                    <Check size={12} />
                  </div>
                  <span className="text-white/80 text-sm md:text-base">Distributed Edge AI model optimizes hardware overhead</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#d85b6a]/10 flex items-center justify-center text-[#d85b6a]">
                    <Check size={12} />
                  </div>
                  <span className="text-white/80 text-sm md:text-base">24/7 automated fire detection and perimeter intrusion protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#d85b6a]/10 flex items-center justify-center text-[#d85b6a]">
                    <Check size={12} />
                  </div>
                  <span className="text-white/80 text-sm md:text-base">Real-time HSE compliance and personal protective equipment (PPE) monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#d85b6a]/10 flex items-center justify-center text-[#d85b6a]">
                    <Check size={12} />
                  </div>
                  <span className="text-white/80 text-sm md:text-base">Robust APIs connecting seamlessly with ERP, CRM, and HRM systems</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onContact}
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-[#d85b6a] text-white font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-full border border-white/10 hover:border-transparent transition-all duration-300 cursor-pointer"
              >
                Enterprise Consulting
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* Box 2: B2C Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 md:p-12 rounded-3xl bg-[#0a0a0c] border border-white/5 hover:border-[#d85b6a]/20 transition-all duration-300 flex flex-col justify-between gap-12 group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a] mb-8 group-hover:scale-105 transition-transform">
                <Store size={28} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide mb-2">
                Retail & Chain Stores (B2C)
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
                Optimize store performance and customer shopping experiences via traffic analysis, behavior analytics, and multi-point asset protection.
              </p>

              {/* Core Offerings */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#d85b6a]/10 flex items-center justify-center text-[#d85b6a]">
                    <Check size={12} />
                  </div>
                  <span className="text-white/80 text-sm md:text-base">Identify VIP customers and analyze visit frequency</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#d85b6a]/10 flex items-center justify-center text-[#d85b6a]">
                    <Check size={12} />
                  </div>
                  <span className="text-white/80 text-sm md:text-base">Heatmap analysis of customer movement flow and product shelf density</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#d85b6a]/10 flex items-center justify-center text-[#d85b6a]">
                    <Check size={12} />
                  </div>
                  <span className="text-white/80 text-sm md:text-base">Demographics analytics (aggregated age & gender prediction)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#d85b6a]/10 flex items-center justify-center text-[#d85b6a]">
                    <Check size={12} />
                  </div>
                  <span className="text-white/80 text-sm md:text-base">Real-time anti-theft alarms and multi-zone physical asset protection</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onContact}
                className="inline-flex items-center gap-2 bg-[#d85b6a] hover:bg-[#e26c7b] text-white font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-full shadow-[0_6px_20px_rgba(216,91,106,0.3)] transition-all duration-300 cursor-pointer"
              >
                Explore Retail
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
