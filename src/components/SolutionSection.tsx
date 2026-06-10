import { CheckCircle2, ShieldAlert, BrainCircuit, BarChart4 } from "lucide-react";

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative bg-black py-24 px-4 overflow-hidden border-t border-white/5 bg-gradient-dark-glow"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d85b6a]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Block */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="inline-flex items-center gap-2 bg-[#d85b6a]/10 border border-[#d85b6a]/20 rounded-full px-4 py-1.5 text-sm font-bold text-[#d85b6a] uppercase tracking-wider font-mono">
            Hệ Sinh Thái Giải Pháp AI
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight max-w-5xl leading-[1.05]">
            Tái Thiết Quy Trình Bằng <br />
            <span className="text-gradient-peach">Hệ Thống Phân Tích Thông Minh</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed">
            Chúng tôi cung cấp hệ sinh thái phân tích video AI gồm 3 dòng giải pháp cột trụ, giúp chuyển đổi hệ thống camera thành công cụ kiểm soát an toàn và tối ưu kinh doanh.
          </p>
        </div>

        {/* 3 Core Solutions Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Safety & Security */}
          <div className="p-8 rounded-2xl modern-glass flex flex-col gap-6 text-left group hover:border-[#d85b6a]/40">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-[#d85b6a]">
              <ShieldAlert size={24} />
            </div>
            <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-wide">
              Safety &amp; Security <br />
              (An Ninh &amp; An Toàn)
            </h3>
            <p className="text-white/60 text-base leading-relaxed">
              Tự động hóa phát hiện không tuân thủ bảo hộ lao động (PPE), thiết lập hàng rào ảo chống xâm nhập khu vực cấm và phát hiện khói, cháy từ giai đoạn sớm nhất bằng AI.
            </p>
            <ul className="flex flex-col gap-2.5 mt-auto pt-6 border-t border-white/5 text-sm text-white/70 font-semibold">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#d85b6a]" />
                Nhận diện PPE &amp; Đồng phục
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#d85b6a]" />
                Phát hiện xâm nhập chu vi
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#d85b6a]" />
                Cảnh báo khói cháy sớm bằng AI
              </li>
            </ul>
          </div>

          {/* Card 2: Operational Intelligence */}
          <div className="p-8 rounded-2xl modern-glass flex flex-col gap-6 text-left group hover:border-[#d85b6a]/40">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <BrainCircuit size={24} />
            </div>
            <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-wide">
              Operational Intelligence <br />
              (Trí Tuệ Vận Hành)
            </h3>
            <p className="text-white/60 text-base leading-relaxed">
              Nhận diện biển số xe (LPR) thông minh, tự động hóa trạm cân xe và quản lý ra vào cho nhân sự, khách hàng mà không cần tiếp xúc vật lý.
            </p>
            <ul className="flex flex-col gap-2.5 mt-auto pt-6 border-t border-white/5 text-sm text-white/70 font-semibold">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-purple-400" />
                Nhận diện biển số xe LPR
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-purple-400" />
                Kiểm soát cửa xoay ra vào
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-purple-400" />
                Cân xe tự động thông minh
              </li>
            </ul>
          </div>

          {/* Card 3: Business Analytics */}
          <div className="p-8 rounded-2xl modern-glass flex flex-col gap-6 text-left group hover:border-[#d85b6a]/40">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <BarChart4 size={24} />
            </div>
            <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-wide">
              Business Analytics <br />
              (Phân Tích Kinh Doanh)
            </h3>
            <p className="text-white/60 text-base leading-relaxed">
              Đếm lưu lượng khách (People counting), phân tích thời gian tương tác (Dwell time) và vẽ bản đồ nhiệt hành vi (Heatmap) phục vụ tối ưu hóa doanh số và bố cục trưng bày.
            </p>
            <ul className="flex flex-col gap-2.5 mt-auto pt-6 border-t border-white/5 text-sm text-white/70 font-semibold">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-400" />
                Bản đồ nhiệt hành vi Heatmap
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-400" />
                Đếm người ra vào chính xác
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-400" />
                Đo lường thời gian tương tác
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
