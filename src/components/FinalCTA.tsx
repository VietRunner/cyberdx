import { ArrowUpRight, Sparkles } from "lucide-react";

interface FinalCTAProps {
  onContact?: () => void;
}

export default function FinalCTA({ onContact }: FinalCTAProps) {
  return (
    <section
      id="contact"
      className="relative bg-black py-24 px-4 overflow-hidden border-t border-white/5 bg-gradient-dark-glow"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d85b6a]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-8 md:p-16 rounded-3xl modern-glass text-center border border-white/10 relative overflow-hidden shadow-[0_24px_80px_rgba(216,91,106,0.1)]">
          {/* Subtle background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#d85b6a]/5 via-purple-500/5 to-transparent pointer-events-none z-0" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Sparkle Badge */}
            <div className="inline-flex items-center gap-2 bg-[#d85b6a]/10 border border-[#d85b6a]/20 rounded-full px-5 py-2 mb-8">
              <Sparkles size={14} className="text-[#d85b6a]" />
              <span className="text-sm font-bold uppercase tracking-wider text-[#d85b6a] font-mono">
                Đăng ký tư vấn & demo miễn phí
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05] mb-6">
              Sẵn Sàng Nâng Cấp <br />
              <span className="text-gradient-peach">Hệ Thống Giám Sát AI?</span>
            </h2>

            {/* Desc */}
            <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-10">
              Hãy gia nhập cùng các doanh nghiệp tiên phong tối ưu hóa vận hành, kiểm soát rủi ro an ninh và nâng cao hiệu suất làm việc bằng công nghệ phân tích video AI thời gian thực.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d85b6a] hover:bg-[#e26c7b] text-white font-black uppercase tracking-wider text-sm px-10 py-5 rounded-full shadow-[0_12px_28px_rgba(216,91,106,0.4)] transition-all duration-300 cursor-pointer"
              >
                Yêu Cầu Demo Hệ Thống
                <ArrowUpRight size={18} />
              </button>
              <button
                onClick={onContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-wider text-sm px-10 py-5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                Liên Hệ Tư Vấn Báo Giá
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
