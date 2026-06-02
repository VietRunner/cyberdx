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
            Chúng tôi định vị 3 dòng sản phẩm cột trụ tương tự tiêu chuẩn tối tân của `cxview.ai`, nhằm chuẩn hóa toàn diện thị trường nhân sự Việt Nam.
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
              (An Toàn Tuyển Dụng)
            </h3>
            <p className="text-white/60 text-base leading-relaxed">
              Xác thực danh tính số bằng AI, rà soát lịch sử vi phạm, lọc sạch tin đăng tuyển ảo, bảo vệ quyền lợi pháp lý cho người lao động và uy tín doanh nghiệp.
            </p>
            <ul className="flex flex-col gap-2.5 mt-auto pt-6 border-t border-white/5 text-sm text-white/70 font-semibold">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#d85b6a]" />
                Định danh ứng viên eKYC
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#d85b6a]" />
                Kiểm duyệt tin lừa đảo tự động
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#d85b6a]" />
                Mã hóa thông tin cá nhân
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
              So khớp kỹ năng và kinh nghiệm thực tế của ứng viên với JD. Đo lường khoảng cách, tự động tối ưu hóa chi phí di chuyển và phân bổ nguồn lực.
            </p>
            <ul className="flex flex-col gap-2.5 mt-auto pt-6 border-t border-white/5 text-sm text-white/70 font-semibold">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-purple-400" />
                Khớp việc bán kính tối ưu
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-purple-400" />
                Dòng chảy hồ sơ thời gian thực
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-purple-400" />
                Trò chuyện trực tuyến không trung gian
              </li>
            </ul>
          </div>

          {/* Card 3: Quality & Management */}
          <div className="p-8 rounded-2xl modern-glass flex flex-col gap-6 text-left group hover:border-[#d85b6a]/40">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <BarChart4 size={24} />
            </div>
            <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-wide">
              Quality &amp; Management <br />
              (Quản Trị Chất Lượng)
            </h3>
            <p className="text-white/60 text-base leading-relaxed">
              Thiết lập bài đánh giá tay nghề tự động. Bảng dữ liệu Analytics cung cấp thông số trực quan về hiệu quả sàng lọc, tỷ lệ nhận việc, và ngân sách chiêu mộ.
            </p>
            <ul className="flex flex-col gap-2.5 mt-auto pt-6 border-t border-white/5 text-sm text-white/70 font-semibold">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-400" />
                Smart Dashboard đo lường chuyển đổi
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-400" />
                Bài kiểm tra tay nghề tự động
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-400" />
                Xuất báo cáo tài chính &amp; nhân sự gọn nhẹ
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
