import { BrainCircuit, Landmark, ShieldCheck, Activity, ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";

export default function BentoFeatures() {
  const [bar1, setBar1] = useState(60);
  const [bar2, setBar2] = useState(85);
  const [bar3, setBar3] = useState(40);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setBar1(Math.floor(Math.random() * 40) + 50);
      setBar2(Math.floor(Math.random() * 30) + 70);
      setBar3(Math.floor(Math.random() * 50) + 30);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="features"
      className="relative bg-black py-24 px-4 overflow-hidden border-t border-white/5"
    >
      
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-10 w-[250px] h-[250px] bg-[#d85b6a]/5 rounded-full blur-[90px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col items-start gap-4 mb-16 max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 bg-[#d85b6a]/10 border border-[#d85b6a]/20 rounded-full px-4 py-1.5 text-sm font-bold text-[#d85b6a] uppercase tracking-wider font-mono">
            Hệ Tính Năng Đặc Quyền
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05]">
            Trải Nghiệm Đỉnh Cao <br />
            Với <span className="text-gradient-peach">Hệ Sinh Thái Edge AI</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl">
            Sức mạnh của trí tuệ nhân tạo được xử lý cục bộ ngay tại biên, giúp tối ưu hóa băng thông mạng và mang lại tốc độ phản hồi cảnh báo tức thời.
          </p>
        </div>

        
        <div className="bento-grid">
          
          <div className="lg:col-span-8 p-8 rounded-2xl modern-glass flex flex-col md:flex-row justify-between min-h-[360px] relative overflow-hidden group hover:border-[#d85b6a]/30 text-left gap-8">
            <div className="flex flex-col justify-between z-10 md:w-1/2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a] mb-6">
                  <BrainCircuit size={20} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide mb-3">
                  Edge AI Video Engine (Xử Lý Tại Biên)
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                  Thuật toán Computer Vision phân tích trực tiếp các luồng video RTSP/ONVIF ngay tại thiết bị biên cục bộ, giảm độ trễ xử lý xuống dưới 100ms mà không tốn băng thông truyền đám mây.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-auto">
                <span className="bg-white/5 border border-white/10 rounded-full px-3.5 py-1 text-xs font-mono text-white/70 uppercase">
                  Zero Data Leakage
                </span>
                <span className="bg-white/5 border border-white/10 rounded-full px-3.5 py-1 text-xs font-mono text-white/70 uppercase">
                  Local Processing
                </span>
              </div>
            </div>

            
            <div className="md:w-1/2 flex items-center justify-center relative min-h-[200px] z-10">
              <div className="w-48 h-48 rounded-full border border-white/10 relative flex items-center justify-center bg-black/40 shadow-[0_0_30px_rgba(216,91,106,0.05)]">
                
                <div className="absolute w-36 h-36 rounded-full border border-white/5" />
                <div className="absolute w-24 h-24 rounded-full border border-white/5" />
                <div className="absolute w-12 h-12 rounded-full border border-white/10" />
                
                
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  
                  <g className="radar-sweep-line">
                    <line x1="50" y1="50" x2="50" y2="0" stroke="#d85b6a" strokeWidth="1.5" strokeLinecap="round" />
                    <polygon points="50,50 50,0 20,5 50,50" fill="url(#radarGlow)" opacity="0.15" />
                  </g>
                  <defs>
                    <linearGradient id="radarGlow" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#d85b6a" stopOpacity="1" />
                      <stop offset="100%" stopColor="#d85b6a" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  
                  <circle cx="35" cy="30" r="3.5" fill="#ff8a9a" className="animate-ping" />
                  <circle cx="35" cy="30" r="2" fill="#ff8a9a" />
                  
                  <circle cx="65" cy="70" r="3.5" fill="#ff8a9a" className="animate-ping" />
                  <circle cx="65" cy="70" r="2" fill="#ff8a9a" />
                </svg>

                <span className="text-[10px] font-mono text-white/30 absolute bottom-4 uppercase tracking-widest">
                  AI SCANNING STREAM
                </span>
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-4 p-8 rounded-2xl modern-glass flex flex-col justify-between min-h-[360px] group hover:border-[#d85b6a]/30 text-left">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-[#d85b6a] mb-6">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-wide mb-3">
                Intrusion &amp; Threat Detection
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                Công cụ tự động phát hiện xâm nhập ngoài giờ quy định, vượt rào ảo cấm và lập tức gửi cảnh báo sự cố kèm video.
              </p>

              
              <div className="flex flex-col gap-2 mt-2 bg-black/40 border border-white/5 p-4 rounded-xl font-mono text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <Check size={12} className="text-green-400" />
                  <span>HÀNG RÀO ẢO CHU VI: HOẠT ĐỘNG</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={12} className="text-green-400" />
                  <span>NHẬN DIỆN NGƯỜI/PHƯƠNG TIỆN: ĐẠT</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={12} className="text-green-400" />
                  <span>HỆ THỐNG PHÁT LOA CẢNH BÁO: OK</span>
                </div>
              </div>
            </div>

            <span className="text-sm text-[#d85b6a] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer mt-4">
              Báo cáo an ninh hệ thống <ArrowRight size={14} />
            </span>
          </div>

          
          <div className="lg:col-span-4 p-8 rounded-2xl modern-glass flex flex-col justify-between min-h-[360px] group hover:border-[#d85b6a]/30 text-left">
            <div>
              <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-6">
                <Activity size={20} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-wide mb-3">
                Real-Time Telemetry Feed
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                Đồng bộ hóa dữ liệu sự kiện từ thiết bị Edge về máy chủ trung tâm thời gian thực, đảm bảo luồng thông tin không gián đoạn.
              </p>

              
              <div className="h-16 w-full bg-black/40 border border-white/5 rounded-xl flex items-center justify-center p-3 relative overflow-hidden my-4">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                  
                  <path d="M0,10 L30,10 L35,2 L40,18 L45,10 L70,10 L75,2 L80,18 L85,10 L100,10" fill="none" stroke="#22c55e" strokeWidth="1.5" className="pulse-wave-glow" />
                </svg>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/50 font-semibold uppercase tracking-wider font-mono">
                Độ trễ truyền tải &lt; 200ms
              </span>
            </div>
          </div>

          
          <div className="lg:col-span-8 p-8 rounded-2xl modern-glass flex flex-col md:flex-row justify-between min-h-[360px] relative overflow-hidden group hover:border-[#d85b6a]/30 text-left gap-8">
            <div className="absolute left-0 bottom-0 w-2/3 h-full opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300 pointer-events-none">
              <div className="w-full h-full bg-radial-gradient from-white to-transparent blur-[60px]" />
            </div>

            <div className="flex flex-col justify-between z-10 md:w-1/2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                  <Landmark size={20} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide mb-3">
                  Smart Command Center (Báo Cáo Hợp Nhất)
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                  Hiển thị toàn cảnh dữ liệu từ kiểm soát ra vào, phát hiện khói lửa, chỉ số tuân thủ bảo hộ (PPE) và cảnh báo xâm nhập trên một giao diện đồ thị tương tác duy nhất.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-auto">
                <span className="bg-white/5 border border-white/10 rounded-full px-3.5 py-1 text-xs font-mono text-white/70 uppercase">
                  Centralized Command UI
                </span>
                <span className="bg-white/5 border border-white/10 rounded-full px-3.5 py-1 text-xs font-mono text-white/70 uppercase">
                  Combined Analytics
                </span>
              </div>
            </div>

            
            <div className="md:w-1/2 flex items-center justify-center z-10 relative min-h-[200px]">
              <div className="w-48 h-40 bg-black/40 border border-white/10 rounded-xl p-4 flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                <span className="text-xs font-mono text-white/40 block">TẦN SUẤT SỰ KIỆN AI AN NINH</span>
                
                
                <div className="flex items-end justify-between h-20 gap-4 px-2">
                  <div className="flex flex-col items-center gap-1.5 flex-1">
                    <div className="w-full bg-[#d85b6a] rounded-t transition-all duration-1000 ease-in-out" style={{ height: `${bar1}px` }} />
                    <span className="text-[10px] text-white/30 font-mono">T4</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 flex-1">
                    <div className="w-full bg-purple-500 rounded-t transition-all duration-1000 ease-in-out" style={{ height: `${bar2}px` }} />
                    <span className="text-[10px] text-white/30 font-mono">T5</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 flex-1">
                    <div className="w-full bg-green-400 rounded-t transition-all duration-1000 ease-in-out" style={{ height: `${bar3}px` }} />
                    <span className="text-[10px] text-white/30 font-mono">T6</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-white/5 pt-2 text-[10px] font-mono text-white/40">
                  <span>HIỆU SUẤT TRUNG BÌNH CHUNG:</span>
                  <span className="text-white font-bold">99.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
