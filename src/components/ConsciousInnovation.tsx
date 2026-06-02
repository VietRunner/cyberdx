import { Shield, Users, Target, Heart } from "lucide-react";

export default function ConsciousInnovation() {
  return (
    <section
      id="philosophy"
      className="relative bg-black py-24 px-4 overflow-hidden border-t border-white/5 bg-gradient-dark-glow"
    >
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d85b6a]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="inline-flex items-center gap-2 bg-[#d85b6a]/10 border border-[#d85b6a]/20 rounded-full px-4 py-1.5 text-sm font-bold text-[#d85b6a] uppercase tracking-wider font-mono">
            Triết Lý Phát Triển
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[1.05]">
            Đổi Mới Có Ý Thức <br />
            <span className="text-gradient-peach">&amp; Trải Nghiệm Có Mục Tiêu</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed">
            Tại CyberDX, chúng tôi tin rằng công nghệ AI không sinh ra để thay thế con người, mà để phục vụ và nâng tầm giá trị nhân bản một cách bền vững.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* Pillar 1 */}
          <div className="p-8 rounded-2xl modern-glass flex flex-col gap-6">
            <div className="w-10 h-10 rounded-lg bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a]">
              <Heart size={20} />
            </div>
            <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-wide">
              Nhân Bản Làm Gốc
            </h3>
            <p className="text-white/50 text-sm lg:text-base leading-relaxed">
              Mọi thuật toán so khớp được thiết kế để tôn trọng khả năng thực tế của người lao động phổ thông, không phân biệt bằng cấp hay xuất thân.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-2xl modern-glass flex flex-col gap-6">
            <div className="w-10 h-10 rounded-lg bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a]">
              <Shield size={20} />
            </div>
            <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-wide">
              Bảo Mật Tuyệt Đối
            </h3>
            <p className="text-white/50 text-sm lg:text-base leading-relaxed">
              Áp dụng triết lý Zero-Trust. Toàn bộ thông tin liên lạc và hồ sơ gốc được mã hóa an toàn, chỉ truyền đi các dữ liệu chỉ số khớp việc tối giản.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-2xl modern-glass flex flex-col gap-6">
            <div className="w-10 h-10 rounded-lg bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a]">
              <Target size={20} />
            </div>
            <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-wide">
              Đúng Người Đúng Việc
            </h3>
            <p className="text-white/50 text-sm lg:text-base leading-relaxed">
              Tập trung giải quyết bài toán cốt lõi: giúp người lao động có việc làm ổn định nhanh nhất và doanh nghiệp có nhân sự chất lượng tối ưu nhất.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-8 rounded-2xl modern-glass flex flex-col gap-6">
            <div className="w-10 h-10 rounded-lg bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a]">
              <Users size={20} />
            </div>
            <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-wide">
              Đồng Tạo Dựng
            </h3>
            <p className="text-white/50 text-sm lg:text-base leading-relaxed">
              Hợp tác chặt chẽ cùng các doanh nghiệp Việt Nam để may đo giải pháp phù hợp nhất với thói quen và nhu cầu thực tiễn của thị trường.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
