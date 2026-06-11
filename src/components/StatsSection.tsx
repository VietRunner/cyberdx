import { Users, Zap, Compass, CheckCircle2 } from "lucide-react";

const STATS = [
  {
    value: "< 2s",
    label: "Alert Response Time",
    desc: "Time to trigger smoke/fire or security intrusion alerts from incident onset.",
    icon: Zap,
    color: "text-[#d85b6a] bg-[#d85b6a]/10 border-[#d85b6a]/20",
  },
  {
    value: "99.2%",
    label: "AI Accuracy Rate",
    desc: "Accuracy in license plate identification and face recognition in real-world environments.",
    icon: Compass,
    color: "text-[#d85b6a] bg-[#d85b6a]/10 border-[#d85b6a]/20",
  },
  {
    value: "10,000+",
    label: "Connected Cameras",
    desc: "Total IP camera channels integrated and running stably on our Edge AI platform.",
    icon: Users,
    color: "text-[#d85b6a] bg-[#d85b6a]/10 border-[#d85b6a]/20",
  },
  {
    value: "45%",
    label: "Loss Reduction",
    desc: "Reduction rate in cargo shrinkage and safety incidents at manufacturing facilities.",
    icon: CheckCircle2,
    color: "text-[#d85b6a] bg-[#d85b6a]/10 border-[#d85b6a]/20",
  },
];

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="relative bg-black py-24 px-4 overflow-hidden border-t border-white/5"
    >
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#d85b6a]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="flex flex-col items-start gap-4 mb-16 max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 bg-[#d85b6a]/10 border border-[#d85b6a]/20 rounded-full px-4 py-1.5 text-sm font-bold text-[#d85b6a] uppercase tracking-wider font-mono">
            Proven Performance
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05]">
            OUTSTANDING BENEFITS <br />
            MEASURED BY <span className="text-gradient-peach">NUMBERS</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl">
            Our platform delivers breakthrough results by transforming passive surveillance systems into proactive data networks protecting businesses.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-8 rounded-2xl modern-glass flex flex-col justify-between min-h-[300px] text-left relative group hover:border-[#d85b6a]/30"
              >
                {/* Icon top */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${stat.color} mb-8`}>
                  <Icon size={20} />
                </div>

                {/* Big Number */}
                <div className="mb-4">
                  <span className="text-5xl lg:text-6xl font-black text-white font-mono tracking-tight group-hover:text-[#d85b6a] transition-colors duration-300">
                    {stat.value}
                  </span>
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-lg font-extrabold text-white uppercase tracking-wider mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-white/60 text-sm lg:text-base leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
