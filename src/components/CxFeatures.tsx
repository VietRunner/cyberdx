import { motion } from "motion/react";
import {
  Map,
  Ban,
  Activity,
  Flame,
  Users,
  ScanFace,
  CreditCard,
  CheckSquare,
  ShieldAlert
} from "lucide-react";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  slug: string;
}

const FEATURES: FeatureCard[] = [
  {
    icon: <ScanFace size={24} />,
    title: "Face Recognition",
    description: "99.8% accurate face recognition, touchless access control, automated attendance, and instant VIP/blacklist detection.",
    slug: "nhan-dien-khuon-mat"
  },
  {
    icon: <CreditCard size={24} />,
    title: "License Plate Recognition (LPR)",
    description: "Automatic license plate identification for cars and motorcycles, even at night. Manage weigh stations, parking, and smart toll booths.",
    slug: "nhan-dien-bien-so-xe-tu-dong"
  },
  {
    icon: <Flame size={24} />,
    title: "Smoke & Fire Detection",
    description: "Early warning of fire incidents based on smoke or flame visual patterns from cameras in the first 5-10 seconds, before ceiling heat sensors activate.",
    slug: "phat-hien-khoi-chay"
  },
  {
    icon: <ShieldAlert size={24} />,
    title: "Intrusion Detection",
    description: "Virtual boundary lines trigger 24/7 alerts for restricted area intrusions. Eliminate false alarms caused by animals or weather using advanced human behavior analytics.",
    slug: "phat-hien-xam-nhap"
  },
  {
    icon: <CheckSquare size={24} />,
    title: "PPE & Uniform Monitoring",
    description: "Detect workers missing hard hats, high-visibility vests, or safety goggles on construction sites and factory floors to ensure HSE compliance.",
    slug: "giam-sat-ppe-dong-phuc"
  },
  {
    icon: <Users size={24} />,
    title: "People Counting Solution",
    description: "Count and report customer foot traffic in and out of retail stores and shopping malls in real-time to measure conversion rates.",
    slug: "giai-phap-dem-nguoi"
  },
  {
    icon: <Ban size={24} />,
    title: "Illegal Parking Detection",
    description: "Automatically detect and capture images of vehicles parking illegally in restricted areas or blocking emergency exits for prompt action.",
    slug: "giam-sat-do-xe-sai-quy-dinh"
  },
  {
    icon: <Activity size={24} />,
    title: "Behavior Recognition",
    description: "Detect abnormal behaviors such as sudden falls, physical violence, or staff leaving their duty posts to trigger rapid emergency response.",
    slug: "nhan-dien-phan-tich-hanh-vi"
  },
  {
    icon: <Map size={24} />,
    title: "Heatmap & Trajectory",
    description: "Visualize customer movement flow and shopping patterns at shelves, optimizing retail store floor layouts.",
    slug: "ban-do-nhiet-lo-trinh"
  }
];

export default function CxFeatures() {
  const handleFeatureClick = (slug: string) => {
    // Open subpage details by dispatching custom event
    document.dispatchEvent(new CustomEvent("dx:open-detail", { detail: slug }));
  };

  return (
    <section
      id="features"
      className="relative bg-black py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#d85b6a]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#d85b6a]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-16 max-w-3xl text-left">
          <span className="inline-flex items-center gap-2 bg-[#d85b6a]/10 border border-[#d85b6a]/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#ff8a9a] uppercase tracking-widest font-mono">
            Featured Solutions
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            ARTIFICIAL INTELLIGENCE <br />
            <span className="text-[#d85b6a]">VIDEO ANALYTICS SYSTEM</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
            Equipped with a comprehensive suite of advanced AI camera features for end-to-end risk management, minimizing patrol security costs.
          </p>
        </div>

        {/* Dynamic Grid: 9 Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => handleFeatureClick(feature.slug)}
              className="p-8 rounded-2xl bg-[#0a0a0c] border border-white/5 hover:border-[#d85b6a]/30 transition-all duration-300 flex flex-col justify-between min-h-[260px] cursor-pointer group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-wide mb-3 group-hover:text-[#d85b6a] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/30 font-mono font-bold group-hover:text-white/80 transition-colors">
                <span>[ SOLUTION DETAILS ]</span>
                <span className="text-[#d85b6a] opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
