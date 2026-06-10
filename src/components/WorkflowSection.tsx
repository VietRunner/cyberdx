import { Search, PenTool, Settings, Cpu, ChevronRight } from "lucide-react";

const DEPLOYMENT_STEPS = [
  {
    step: "01",
    title: "Khảo Sát & Đánh Giá",
    desc: "Khảo sát thực tế cơ sở hạ tầng camera, góc quay và nhu cầu nghiệp vụ để xác định vị trí và giải pháp tối ưu.",
    icon: Search,
  },
  {
    step: "02",
    title: "Thiết Kế Giải Pháp",
    desc: "Các kỹ sư phát triển và cấu hình mô hình AI riêng biệt để đáp ứng chuẩn xác các mục tiêu cấm cản, nhận dạng hay cảnh báo.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Tích Hợp Hệ Thống",
    desc: "Tích hợp liền mạch thiết bị xử lý Edge AI Box hoặc AI Server vào luồng camera RTSP sẵn có mà không gián đoạn vận hành.",
    icon: Settings,
  },
  {
    step: "04",
    title: "Vận Hành & Tối Ưu",
    desc: "Bàn giao Dashboard điều khiển, hướng dẫn đội ngũ và liên tục hiệu chuẩn mô hình AI dựa trên dữ liệu thực tế.",
    icon: Cpu,
  },
];

export default function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="relative bg-black py-24 px-4 overflow-hidden border-t border-white/5 bg-gradient-dark-glow"
    >
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#d85b6a]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#d85b6a]/10 border border-[#d85b6a]/20 rounded-full px-4 py-1.5 text-sm font-bold text-[#d85b6a] uppercase tracking-wider font-mono">
            Quy Trình Triển Khai
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05]">
            Tích Hợp Nhanh Chóng Trong <span className="text-gradient-peach">4 Bước</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
            Quy trình lắp đặt hệ thống phân tích video AI được tối ưu hóa để diễn ra nhanh chóng, chuyên nghiệp và hiệu quả nhất.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {DEPLOYMENT_STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-8 rounded-2xl modern-glass flex flex-col justify-between min-h-[320px] text-left relative group hover:border-[#d85b6a]/30"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-base font-black font-mono text-[#d85b6a]">
                    BƯỚC {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-[#d85b6a]/15 group-hover:border-[#d85b6a]/20 transition-all duration-300">
                    <Icon size={22} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-wide mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle line connection for desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute right-[-24px] top-1/2 -translate-y-1/2 z-20 text-white/10">
                    <ChevronRight size={24} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
