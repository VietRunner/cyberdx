import { Users, Zap, Compass, CheckCircle2 } from "lucide-react";

const STATS = [
  {
    value: "< 2s",
    label: "Tốc Độ Cảnh Báo",
    desc: "Thời gian phát tín hiệu cảnh báo hỏa hoạn hoặc xâm nhập từ lúc phát hiện sự cố.",
    icon: Zap,
    color: "text-[#d85b6a] bg-[#d85b6a]/10 border-[#d85b6a]/20",
  },
  {
    value: "99.2%",
    label: "Độ Chính Xác AI",
    desc: "Độ chính xác nhận diện biển số xe và nhận diện khuôn mặt trong các thử nghiệm thực tế.",
    icon: Compass,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    value: "10,000+",
    label: "Camera Đã Kết Nối",
    desc: "Số lượng camera IP đã được tích hợp và vận hành ổn định trên nền tảng Edge AI.",
    icon: Users,
    color: "text-green-400 bg-green-500/10 border-green-500/20",
  },
  {
    value: "45%",
    label: "Giảm Thiểu Thất Thoát",
    desc: "Tỷ lệ giảm thiểu hao hụt hàng hóa và sự cố an toàn tại các cơ sở sản xuất.",
    icon: CheckCircle2,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
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
            Hiệu Quả Thực Tế
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05]">
            Lợi Ích Vượt Trội <br />
            Đo Lường Bằng <span className="text-gradient-peach">Những Con Số</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl">
            Nền tảng của chúng tôi chứng minh hiệu quả đột phá bằng cách chuyển đổi hệ thống giám sát thụ động thành mạng lưới dữ liệu chủ động bảo vệ doanh nghiệp.
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
