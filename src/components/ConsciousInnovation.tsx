import { Shield, Users, Target, Heart } from "lucide-react";

export default function ConsciousInnovation() {
  return (
    <section
      id="philosophy"
      className="relative bg-black py-24 px-4 overflow-hidden border-t border-white/5 bg-gradient-dark-glow"
    >
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d85b6a]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="inline-flex items-center gap-2 bg-[#d85b6a]/10 border border-[#d85b6a]/20 rounded-full px-4 py-1.5 text-sm font-bold text-[#d85b6a] uppercase tracking-wider font-mono">
            Triết Lý Phát Triển
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[1.05]">
            Đổi Mới Có Ý Thức <br />
            <span className="text-gradient-peach">&amp; Trải Nghiệm Có Mục Tiêu</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed">
            Tại hệ thống của chúng tôi, phát triển công nghệ AI đi đôi với trách nhiệm bảo vệ quyền riêng tư và đạo đức dữ liệu hình ảnh một cách bền vững.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          
          <div className="p-8 rounded-2xl modern-glass flex flex-col gap-6">
            <div className="w-10 h-10 rounded-lg bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a]">
              <Heart size={20} />
            </div>
            <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-wide">
              Bảo Vệ Quyền Riêng Tư
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Quyền riêng tư được ưu tiên hàng đầu bằng cách chỉ trích xuất dữ liệu chỉ số phân tích, cam kết không lưu trữ hình ảnh nhạy cảm trái phép.
            </p>
          </div>

          
          <div className="p-8 rounded-2xl modern-glass flex flex-col gap-6">
            <div className="w-10 h-10 rounded-lg bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a]">
              <Shield size={20} />
            </div>
            <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-wide">
              Bảo Mật Zero-Trust
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Ứng dụng điện toán biên để xử lý video trực tiếp tại nguồn, hạn chế tối đa việc truyền tải dữ liệu thô ra môi trường mạng bên ngoài.
            </p>
          </div>

          
          <div className="p-8 rounded-2xl modern-glass flex flex-col gap-6">
            <div className="w-10 h-10 rounded-lg bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a]">
              <Target size={20} />
            </div>
            <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-wide">
              Phòng Ngừa Chủ Động
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Thay vì giám sát vi mô gây áp lực lên con người, AI tập trung cảnh báo sớm các sự cố khẩn cấp nguy hại như ngã té, xâm nhập và cháy nổ.
            </p>
          </div>

          
          <div className="p-8 rounded-2xl modern-glass flex flex-col gap-6">
            <div className="w-10 h-10 rounded-lg bg-[#d85b6a]/10 border border-[#d85b6a]/20 flex items-center justify-center text-[#d85b6a]">
              <Users size={20} />
            </div>
            <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-wide">
              Giải Pháp May Đo
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Các mô hình AI được tinh chỉnh liên tục để tương thích tối đa với điều kiện ánh sáng, góc nhìn và đặc trưng riêng của doanh nghiệp Việt Nam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
