import { ShieldAlert, HelpCircle, Ban, AlertTriangle, Users2, Timer } from "lucide-react";

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative bg-black py-24 px-4 overflow-hidden border-t border-white/5"
    >
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-[#d85b6a]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col items-start gap-4 mb-16 max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 text-sm font-bold text-yellow-500 uppercase tracking-wider font-mono">
            Thách Thức Vận Hành
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05]">
            Giới Hạn Của Hệ Thống <br />
            <span className="text-gradient-accent">Giám Sát Thụ Động</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl">
            Hệ thống camera an ninh truyền thống chỉ ghi hình thụ động và lưu trữ dữ liệu, khiến doanh nghiệp bỏ lỡ cơ hội phòng ngừa rủi ro thời gian thực.
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-2xl modern-glass flex flex-col justify-between gap-8 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-[#d85b6a] mb-6">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide mb-4">
                Rủi ro An ninh & An toàn Lao động
              </h3>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Những lỗ hổng đe dọa sự an toàn của con người và tài sản doanh nghiệp.
              </p>

              
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                  <Timer size={18} className="text-[#d85b6a] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-base lg:text-lg mb-1">Ứng phó sự cố hỏa hoạn chậm trễ</h4>
                    <p className="text-white/50 text-sm lg:text-base leading-relaxed">
                      Cảm biến nhiệt trần nhà chỉ kích hoạt khi đám cháy đã bùng phát lớn, không thể phát hiện sớm cột khói nhỏ.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                  <Users2 size={18} className="text-[#d85b6a] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-base lg:text-lg mb-1">Không tuân thủ an toàn (PPE)</h4>
                    <p className="text-white/50 text-sm lg:text-base leading-relaxed">
                      Việc giám sát thủ công bảo hộ lao động (mũ, áo phản quang) luôn có kẽ hở, dẫn đến rủi ro tai nạn lao động cao.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                  <Ban size={18} className="text-[#d85b6a] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-base lg:text-lg mb-1">Xâm nhập trái phép khu vực cấm</h4>
                    <p className="text-white/50 text-sm lg:text-base leading-relaxed">
                      Kẻ xấu lợi dụng sơ hở của đội tuần tra để tiếp cận kho bãi hoặc khu vực kỹ thuật nhạy cảm mà không bị phát hiện.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 text-xs font-mono text-white/30">
              [ AN NINH & AN TOÀN ]
            </div>
          </div>

          
          <div className="p-8 rounded-2xl modern-glass flex flex-col justify-between gap-8 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <HelpCircle size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide mb-4">
                Hiệu Suất Vận Hành & Thất Thoát Tài Sản
              </h3>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Những nút thắt làm lãng phí tài nguyên và chi phí cơ hội của doanh nghiệp.
              </p>

              
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                  <ShieldAlert size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-base lg:text-lg mb-1">Thiếu dữ liệu phân tích khách hàng</h4>
                    <p className="text-white/50 text-sm lg:text-base leading-relaxed">
                      Chuỗi bán lẻ chỉ biết doanh số cuối ngày mà không hiểu luồng di chuyển hay sản phẩm thu hút sự chú ý.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                  <Timer size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-base lg:text-lg mb-1">Ùn tắc và quản lý xe ra vào kém</h4>
                    <p className="text-white/50 text-sm lg:text-base leading-relaxed">
                      Ghi chép biển số thủ công gây tắc nghẽn trạm cân, cổng nhà kho hoặc sảnh bãi đỗ xe trong giờ cao điểm.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                  <Ban size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-base lg:text-lg mb-1">Dữ liệu rời rạc, không thể dự báo</h4>
                    <p className="text-white/50 text-sm lg:text-base leading-relaxed">
                      Hình ảnh lưu trữ phân mảnh trên các đầu ghi, gây khó khăn cho việc tra cứu sự cố hoặc tổng hợp thống kê.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 text-xs font-mono text-white/30">
              [ HIỆU SUẤT VẬN HÀNH ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
