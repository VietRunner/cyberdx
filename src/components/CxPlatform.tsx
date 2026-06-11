import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Cpu, Zap, Maximize, AlertCircle, BarChart3, PieChart, Video } from "lucide-react";

type PlatformMode = "B2B" | "B2C";
type MockTab = "live" | "analytics" | "stats";

export default function CxPlatform() {
  const [mode, setMode] = useState<PlatformMode>("B2C");
  const [mockTab, setMockTab] = useState<MockTab>("live");

  // State to simulate real-time alerts in dashboard mockup
  const [alerts, setAlerts] = useState<string[]>([
    "09:10:12 - Illegal parking alert at Gate A",
    "09:05:43 - PPE warning: Missing safety helmet at Workshop 2",
    "08:58:19 - VIP recognized: Customer Nguyen Van A",
  ]);

  // Bounding box simulation state for live camera mockups
  const [simulatedBoxes, setSimulatedBoxes] = useState<Array<{
    top: string;
    left: string;
    width: string;
    height: string;
    label: string;
    camId: number;
    color: string;
  }>>([
    { top: "35%", left: "25%", width: "80px", height: "120px", label: "HUMAN [96%]", camId: 1, color: "border-[#d85b6a] bg-[#d85b6a]/15 text-[#ff8a9a]" },
    { top: "40%", left: "30%", width: "70px", height: "110px", label: "CUSTOMER [92%]", camId: 2, color: "border-green-500 bg-green-500/10 text-green-400" },
    { top: "25%", left: "55%", width: "95px", height: "95px", label: "SMOKE ALERT", camId: 3, color: "border-red-500 bg-red-500/15 text-red-400" },
    { top: "45%", left: "20%", width: "75px", height: "100px", label: "PPE OK [99%]", camId: 4, color: "border-green-500 bg-green-500/10 text-green-400" },
  ]);

  useEffect(() => {
    const boxInterval = setInterval(() => {
      setSimulatedBoxes([
        {
          top: `${30 + Math.random() * 10}%`,
          left: `${20 + Math.random() * 10}%`,
          width: "80px",
          height: "120px",
          label: `HUMAN [${Math.floor(Math.random() * 5) + 94}%]`,
          camId: 1,
          color: "border-[#d85b6a] bg-[#d85b6a]/15 text-[#ff8a9a]"
        },
        {
          top: `${35 + Math.random() * 10}%`,
          left: `${25 + Math.random() * 10}%`,
          width: "70px",
          height: "110px",
          label: `CUSTOMER [${Math.floor(Math.random() * 5) + 90}%]`,
          camId: 2,
          color: "border-green-500 bg-green-500/10 text-green-400"
        },
        {
          top: `${20 + Math.random() * 10}%`,
          left: `${45 + Math.random() * 12}%`,
          width: "95px",
          height: "95px",
          label: Math.random() > 0.4 ? "SMOKE ALERT" : "NORMAL",
          camId: 3,
          color: Math.random() > 0.4 ? "border-red-500 bg-red-500/15 text-red-400" : "border-green-500 bg-green-500/10 text-green-400"
        },
        {
          top: `${40 + Math.random() * 10}%`,
          left: `${15 + Math.random() * 10}%`,
          width: "75px",
          height: "100px",
          label: `PPE: ${Math.random() > 0.25 ? "OK" : "NO HELMET"}`,
          camId: 4,
          color: Math.random() > 0.25 ? "border-green-500 bg-green-500/10 text-green-400" : "border-red-500 bg-red-500/15 text-red-400"
        }
      ]);
    }, 2000);
    return () => clearInterval(boxInterval);
  }, []);


  // Periodically add/update alerts to make it feel alive
  useEffect(() => {
    const interval = setInterval(() => {
      const times = new Date().toTimeString().split(" ")[0];
      const alertTemplates = [
        `Light smoke detected at Drying Area B`,
        `Unauthorized intrusion at West Corridor fence`,
        `LPR detected: Cargo truck 29C-998.12 entry/exit`,
        `Main lobby traffic exceeded 50 people/min`,
        `Overtime parking warning at passenger drop-off lane`,
      ];
      const randomAlert = `${times} - [AI Alert] ${
        alertTemplates[Math.floor(Math.random() * alertTemplates.length)]
      }`;
      setAlerts((prev) => [randomAlert, prev[0], prev[1]].slice(0, 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="platform"
      className="relative bg-black py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="inline-flex items-center gap-2 bg-[#d85b6a]/10 border border-[#d85b6a]/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#ff8a9a] uppercase tracking-widest font-mono">
            Platform & Technology
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            COMPREHENSIVE <span className="text-[#d85b6a]">AI SURVEILLANCE PLATFORM</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-3xl leading-relaxed">
            Edge-to-Cloud computing infrastructure helps manage and leverage 
            AI camera power for enterprises and organizations of all sizes.
          </p>

          {/* B2B / B2C Toggle Switcher */}
          <div className="flex bg-white/5 p-1 rounded-full border border-white/10 mt-8 relative z-20">
            <button
              onClick={() => setMode("B2C")}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                mode === "B2C"
                  ? "bg-[#d85b6a] text-white shadow-[0_4px_12px_rgba(216,91,106,0.3)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Dashboard & Demo Experience (B2C)
            </button>
            <button
              onClick={() => setMode("B2B")}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                mode === "B2B"
                  ? "bg-[#d85b6a] text-white shadow-[0_4px_12px_rgba(216,91,106,0.3)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Edge AI Benefits (B2B)
            </button>
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {mode === "B2B" ? (
              <motion.div
                key="b2b"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {/* Benefit Card 1 */}
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#d85b6a]/30 transition-all duration-300 flex flex-col justify-between gap-6 group hover:-translate-y-1">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a] mb-6">
                      <Zap size={24} />
                    </div>
                    <h3 className="text-lg font-black text-white uppercase tracking-wide mb-3">
                      Ultra Low Latency
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Analyze and trigger warnings directly on Edge devices within milliseconds, without internet dependency.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#d85b6a]/60 font-bold">EDGE COMPUTING</span>
                </div>

                {/* Benefit Card 2 */}
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#d85b6a]/30 transition-all duration-300 flex flex-col justify-between gap-6 group hover:-translate-y-1">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a] mb-6">
                      <Cpu size={24} />
                    </div>
                    <h3 className="text-lg font-black text-white uppercase tracking-wide mb-3">
                      Bandwidth Optimization
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Instead of uploading Terabytes of raw video, devices only transmit lightweight metadata and critical alert clips to the cloud.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#d85b6a]/60 font-bold">BANDWIDTH SAVE</span>
                </div>

                {/* Benefit Card 3 */}
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#d85b6a]/30 transition-all duration-300 flex flex-col justify-between gap-6 group hover:-translate-y-1">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a] mb-6">
                      <Shield size={24} />
                    </div>
                    <h3 className="text-lg font-black text-white uppercase tracking-wide mb-3">
                      High Security & Privacy
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Sensitive personal data is processed and encrypted instantly on-site, minimizing the risk of video leaks or cyber attacks.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#d85b6a]/60 font-bold">DATA PRIVACY</span>
                </div>

                {/* Benefit Card 4 */}
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#d85b6a]/30 transition-all duration-300 flex flex-col justify-between gap-6 group hover:-translate-y-1">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a] mb-6">
                      <Maximize size={24} />
                    </div>
                    <h3 className="text-lg font-black text-white uppercase tracking-wide mb-3">
                      Seamless Scalability
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Decentralized architecture allows seamless connection of hundreds of new cameras without bottlenecking center infrastructure.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#d85b6a]/60 font-bold">SCALABILITY</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="b2c"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-5xl mx-auto bg-[#0a0a0c] border border-white/10 rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.8)]"
              >
                {/* Mockup Toolbar Header */}
                <div className="bg-[#121215] border-b border-white/5 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-white/40 font-mono ml-4">DX-AI-OS v1.4.2</span>
                  </div>

                  {/* Internal Mockup Navigation */}
                  <div className="flex bg-black/40 p-1 rounded-lg border border-white/5">
                    <button
                      onClick={() => setMockTab("live")}
                      className={`px-4 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        mockTab === "live"
                          ? "bg-white/10 text-white"
                          : "text-white/50 hover:text-white"
                      }`}
                    >
                      <Video size={13} />
                      Live Camera
                    </button>
                    <button
                      onClick={() => setMockTab("analytics")}
                      className={`px-4 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        mockTab === "analytics"
                          ? "bg-white/10 text-white"
                          : "text-white/50 hover:text-white"
                      }`}
                    >
                      <BarChart3 size={13} />
                      Visitor Traffic
                    </button>
                    <button
                      onClick={() => setMockTab("stats")}
                      className={`px-4 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        mockTab === "stats"
                          ? "bg-white/10 text-white"
                          : "text-white/50 hover:text-white"
                      }`}
                    >
                      <PieChart size={13} />
                      AI Box Status
                    </button>
                  </div>
                </div>

                {/* Dashboard Tabs Content */}
                <div className="p-6 min-h-[360px] flex items-center justify-center bg-black/40">
                  <AnimatePresence mode="wait">
                    {mockTab === "live" && (
                      <motion.div
                        key="live-tab"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
                      >
                        {/* Cam 1 - Intrusion */}
                        <div className="relative aspect-video rounded-xl bg-white/[0.01] border border-white/10 overflow-hidden group">
                          <div 
                            className="absolute inset-0 bg-cover bg-center opacity-65 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
                            style={{ backgroundImage: "url('/intrusion-detection.png')" }} 
                          />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.8)_100%)] z-10" />
                          
                          {/* Live raster scanning effect using Framer Motion */}
                          <motion.div
                            animate={{ y: ["0%", "530%", "0%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-0.5 bg-[#d85b6a] opacity-50 z-15 shadow-[0_0_8px_rgba(216,91,106,0.8)] pointer-events-none"
                          />

                          <div className="absolute top-3 left-3 bg-[#d85b6a] text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 z-20">
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                            REC CAM 01
                          </div>
                          <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white/50 z-20">
                            West Corridor - Warehouse Door
                          </div>

                          {/* Simulated AI Tracker Boxes */}
                          {simulatedBoxes.filter(b => b.camId === 1).map((b, i) => (
                            <motion.div
                              key={i}
                              animate={{ top: b.top, left: b.left }}
                              transition={{ duration: 0.6, type: "spring", stiffness: 45 }}
                              className={`absolute border rounded-md z-20 shadow-[0_4px_16px_rgba(0,0,0,0.5)] ${b.color}`}
                              style={{ width: b.width, height: b.height }}
                            >
                              <span className="absolute top-0 left-0 bg-black/85 text-[7px] px-1 rounded -translate-y-full whitespace-nowrap border-t border-x border-inherit font-mono font-black uppercase">
                                {b.label}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Cam 2 - Retail / People Count */}
                        <div className="relative aspect-video rounded-xl bg-white/[0.01] border border-white/10 overflow-hidden group">
                          <div 
                            className="absolute inset-0 bg-cover bg-center opacity-65 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
                            style={{ backgroundImage: "url('/ban-le-dich-vu.png')" }} 
                          />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.8)_100%)] z-10" />
                          
                          {/* Live raster scanning effect using Framer Motion */}
                          <motion.div
                            animate={{ y: ["0%", "530%", "0%"] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                            className="absolute left-0 right-0 h-0.5 bg-[#d85b6a] opacity-50 z-15 shadow-[0_0_8px_rgba(216,91,106,0.8)] pointer-events-none"
                          />

                          <div className="absolute top-3 left-3 bg-[#d85b6a] text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 z-20">
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                            REC CAM 02
                          </div>
                          <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white/50 z-20">
                            Main Entrance - Main Lobby
                          </div>

                          {/* Simulated AI Tracker Boxes */}
                          {simulatedBoxes.filter(b => b.camId === 2).map((b, i) => (
                            <motion.div
                              key={i}
                              animate={{ top: b.top, left: b.left }}
                              transition={{ duration: 0.6, type: "spring", stiffness: 45 }}
                              className={`absolute border rounded-md z-20 shadow-[0_4px_16px_rgba(0,0,0,0.5)] ${b.color}`}
                              style={{ width: b.width, height: b.height }}
                            >
                              <span className="absolute top-0 left-0 bg-black/85 text-[7px] px-1 rounded -translate-y-full whitespace-nowrap border-t border-x border-inherit font-mono font-black uppercase">
                                {b.label}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Cam 3 - Smoke & Fire */}
                        <div className="relative aspect-video rounded-xl bg-white/[0.01] border border-white/10 overflow-hidden group">
                          <div 
                            className="absolute inset-0 bg-cover bg-center opacity-65 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
                            style={{ backgroundImage: "url('/smoke-fire-detection.png')" }} 
                          />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.8)_100%)] z-10" />
                          
                          {/* Live raster scanning effect using Framer Motion */}
                          <motion.div
                            animate={{ y: ["0%", "530%", "0%"] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 0.2 }}
                            className="absolute left-0 right-0 h-0.5 bg-red-500 opacity-50 z-15 shadow-[0_0_8px_rgba(239,68,68,0.8)] pointer-events-none"
                          />

                          <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 z-20 animate-pulse">
                            LIVE CAM 03
                          </div>
                          <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white/50 z-20">
                            Outdoor Parking Area
                          </div>

                          {/* Simulated AI Tracker Boxes */}
                          {simulatedBoxes.filter(b => b.camId === 3).map((b, i) => (
                            <motion.div
                              key={i}
                              animate={{ top: b.top, left: b.left }}
                              transition={{ duration: 0.6, type: "spring", stiffness: 45 }}
                              className={`absolute border rounded-md z-20 shadow-[0_4px_16px_rgba(0,0,0,0.5)] ${b.color}`}
                              style={{ width: b.width, height: b.height }}
                            >
                              <span className="absolute top-0 left-0 bg-black/85 text-[7px] px-1 rounded -translate-y-full whitespace-nowrap border-t border-x border-inherit font-mono font-black uppercase">
                                {b.label}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Cam 4 - PPE */}
                        <div className="relative aspect-video rounded-xl bg-white/[0.01] border border-white/10 overflow-hidden group">
                          <div 
                            className="absolute inset-0 bg-cover bg-center opacity-65 pointer-events-none group-hover:scale-105 transition-transform duration-700" 
                            style={{ backgroundImage: "url('/ppe-detection.png')" }} 
                          />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.8)_100%)] z-10" />
                          
                          {/* Live raster scanning effect using Framer Motion */}
                          <motion.div
                            animate={{ y: ["0%", "530%", "0%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 0.8 }}
                            className="absolute left-0 right-0 h-0.5 bg-green-500 opacity-50 z-15 shadow-[0_0_8px_rgba(34,197,94,0.8)] pointer-events-none"
                          />

                          <div className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 z-20">
                            LIVE CAM 04
                          </div>
                          <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white/50 z-20">
                            Production Area - Workshop B
                          </div>

                          {/* Simulated AI Tracker Boxes */}
                          {simulatedBoxes.filter(b => b.camId === 4).map((b, i) => (
                            <motion.div
                              key={i}
                              animate={{ top: b.top, left: b.left }}
                              transition={{ duration: 0.6, type: "spring", stiffness: 45 }}
                              className={`absolute border rounded-md z-20 shadow-[0_4px_16px_rgba(0,0,0,0.5)] ${b.color}`}
                              style={{ width: b.width, height: b.height }}
                            >
                              <span className="absolute top-0 left-0 bg-black/85 text-[7px] px-1 rounded -translate-y-full whitespace-nowrap border-t border-x border-inherit font-mono font-black uppercase">
                                {b.label}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {mockTab === "analytics" && (
                      <motion.div
                        key="analytics-tab"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="w-full flex flex-col md:flex-row gap-6 items-stretch"
                      >
                        {/* Traffic Graph Visual */}
                        <div className="flex-1 bg-white/[0.02] border border-white/5 p-6 rounded-xl w-full flex flex-col justify-between">
                          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6 flex items-center gap-2 text-left">
                            <BarChart3 size={15} className="text-[#d85b6a]" />
                            Hourly Foot Traffic (Today)
                          </h4>
                          
                          {/* Bars Chart representation */}
                          <div className="flex items-end justify-between h-44 pt-4 relative">
                            {/* Grid line guidelines */}
                            <div className="absolute inset-x-0 top-[25%] border-b border-white/5" />
                            <div className="absolute inset-x-0 top-[50%] border-b border-white/5" />
                            <div className="absolute inset-x-0 top-[75%] border-b border-white/5" />

                            <div className="w-[12%] bg-white/10 h-[30%] rounded-t-sm flex flex-col justify-end text-center"><span className="text-[9px] text-white/40 mb-1 font-mono">08h</span></div>
                            <div className="w-[12%] bg-white/10 h-[55%] rounded-t-sm flex flex-col justify-end text-center"><span className="text-[9px] text-white/40 mb-1 font-mono">10h</span></div>
                            <div className="w-[12%] bg-[#d85b6a] h-[85%] rounded-t-sm flex flex-col justify-end text-center"><span className="text-[9px] text-white/80 mb-1 font-bold font-mono">12h</span></div>
                            <div className="w-[12%] bg-white/10 h-[45%] rounded-t-sm flex flex-col justify-end text-center"><span className="text-[9px] text-white/40 mb-1 font-mono">14h</span></div>
                            <div className="w-[12%] bg-white/10 h-[70%] rounded-t-sm flex flex-col justify-end text-center"><span className="text-[9px] text-white/40 mb-1 font-mono">16h</span></div>
                            <div className="w-[12%] bg-[#d85b6a]/70 h-[92%] rounded-t-sm flex flex-col justify-end text-center"><span className="text-[9px] text-white/80 mb-1 font-mono">18h</span></div>
                            <div className="w-[12%] bg-white/10 h-[25%] rounded-t-sm flex flex-col justify-end text-center"><span className="text-[9px] text-white/40 mb-1 font-mono">20h</span></div>
                          </div>
                        </div>

                        {/* Retail Analytics Visual Thumbnail (from cxview.ai) */}
                        <div className="w-full md:w-80 bg-white/[0.02] border border-white/5 p-6 rounded-xl flex flex-col justify-between group text-left">
                          <div>
                            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
                              Retail & Service Analytics
                            </h4>
                            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-black/40 mb-4">
                              <img
                                src="/all-in-one-dashboard.png"
                                alt="Traffic Analysis Dashboard"
                                className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <p className="text-[11px] text-white/50 leading-relaxed font-mono">
                              System automatically synchronizes demographic charts (age, gender) and customer traffic to the Cloud Dashboard in real-time.
                            </p>
                          </div>
                          
                          <div className="border-t border-white/5 pt-3 flex items-center justify-between text-[11px] text-white/40">
                            <span>Male: 52%</span>
                            <span>Female: 48%</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {mockTab === "stats" && (
                      <motion.div
                        key="stats-tab"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="w-full flex flex-col md:flex-row gap-6 text-left"
                      >
                        {/* Status Grid & Alert Center */}
                        <div className="flex-1 flex flex-col gap-6">
                          {/* Status Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                              <span className="text-[10px] uppercase tracking-wider text-white/40 font-mono block">CPU Edge Core</span>
                              <span className="text-2xl font-black text-white font-mono block mt-1">42%</span>
                              <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
                                <div className="bg-green-500 h-full" style={{ width: "42%" }} />
                              </div>
                            </div>
                            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                              <span className="text-[10px] uppercase tracking-wider text-white/40 font-mono block">Active Cameras</span>
                              <span className="text-2xl font-black text-white font-mono block mt-1">16 / 16</span>
                              <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
                                <div className="bg-[#d85b6a] h-full" style={{ width: "100%" }} />
                              </div>
                            </div>
                            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                              <span className="text-[10px] uppercase tracking-wider text-white/40 font-mono block">AI Box Temp</span>
                              <span className="text-2xl font-black text-white font-mono block mt-1">54 °C</span>
                              <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
                                <div className="bg-yellow-500 h-full" style={{ width: "54%" }} />
                              </div>
                            </div>
                          </div>

                          {/* Simulated Alert Center Panel */}
                          <div className="bg-[#18181b]/40 border border-white/5 p-4 rounded-xl flex-1">
                            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                              <AlertCircle size={14} className="text-[#d85b6a]" />
                              Real-Time AI Alert Logs
                            </h5>
                            <div className="flex flex-col gap-2">
                              {alerts.map((alert, idx) => (
                                <div
                                  key={idx}
                                  className="px-3 py-2 bg-black/50 border-l-2 border-[#d85b6a] rounded-r-lg text-xs font-mono text-white/80 text-left flex justify-between items-center"
                                >
                                  <span>{alert}</span>
                                  <span className="text-[10px] bg-[#d85b6a]/15 text-[#ff8a9a] px-1.5 py-0.5 rounded font-sans uppercase font-bold animate-pulse">
                                    active
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Edge AI Device Hardware Visual */}
                        <div className="w-full md:w-80 bg-white/[0.02] border border-white/5 p-6 rounded-xl flex flex-col items-center justify-between group">
                          <div className="w-full">
                            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-4">Edge AI Hardware</span>
                            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/40 border border-white/10 p-3 flex items-center justify-center">
                              <img
                                src="/aip.png"
                                alt="Edge AI Box"
                                className="max-h-full max-w-full object-contain opacity-90 group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                          <div className="mt-4">
                            <span className="text-xs font-mono font-bold text-[#d85b6a] block uppercase">CyberDX Edge Box v2</span>
                            <span className="text-[10px] text-white/40 mt-1 block font-mono">Process 16 IP camera streams simultaneously at the edge with high-performance NPU processing.</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
