import { ShieldAlert, HelpCircle, Ban, AlertTriangle, Users2, Timer } from "lucide-react";
import { motion } from "motion/react";

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative bg-black py-24 px-4 overflow-hidden border-t border-white/5"
    >
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-[#d85b6a]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-16 max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 text-sm font-bold text-yellow-500 uppercase tracking-wider font-mono">
            Thực Trạng Thị Trường
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05]">
            Rào Cản Lớn Trong <br />
            <span className="text-gradient-accent">Tuyển Dụng Truyền Thống</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl">
            Quy trình tuyển dụng thủ công đang gây lãng phí hàng nghìn giờ làm việc của doanh nghiệp và làm mất đi cơ hội việc làm quý báu của người lao động.
          </p>
        </div>

        {/* Split Grid: Recruiters vs Workers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Box 1: For Recruiters */}
          <div className="p-8 rounded-2xl modern-glass flex flex-col justify-between gap-8 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-[#d85b6a] mb-6">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide mb-4">
                Đối Với Doanh Nghiệp & Nhà Tuyển Dụng
              </h3>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Những nút thắt làm chậm dòng chảy tăng trưởng của doanh nghiệp.
              </p>

              {/* Problems list */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                  <Timer size={18} className="text-[#d85b6a] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-base lg:text-lg mb-1">Tốn thời gian sàng lọc thủ công</h4>
                    <p className="text-white/50 text-sm lg:text-base leading-relaxed">
                      Phải đọc hàng trăm CV không phù hợp hoặc hồ sơ ảo để chọn ra được 1 hồ sơ chất lượng.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                  <Users2 size={18} className="text-[#d85b6a] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-base lg:text-lg mb-1">Tỷ lệ ứng viên ảo và bỏ cọc cao</h4>
                    <p className="text-white/50 text-sm lg:text-base leading-relaxed">
                      Thiếu sự cam kết từ ứng viên tự do, tỷ lệ hẹn phỏng vấn nhưng không đến lên tới 60%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                  <Ban size={18} className="text-[#d85b6a] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-base lg:text-lg mb-1">Chi phí đăng tin đắt đỏ</h4>
                    <p className="text-white/50 text-sm lg:text-base leading-relaxed">
                      Chi phí đăng tin tuyển dụng trên các kênh lớn cao nhưng hiệu quả mang lại không ổn định.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 text-xs font-mono text-white/30">
              [ PHÂN HỆ RECRUITER KHÓ KHĂN ]
            </div>
          </div>

          {/* Box 2: For Workers */}
          <div className="p-8 rounded-2xl modern-glass flex flex-col justify-between gap-8 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <HelpCircle size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide mb-4">
                Đối Với Người Lao Động Phổ Thông
              </h3>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Những khó khăn làm nản lòng người đi tìm việc.
              </p>

              {/* Problems list */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                  <ShieldAlert size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-base lg:text-lg mb-1">Khó tiếp cận công việc chất lượng</h4>
                    <p className="text-white/50 text-sm lg:text-base leading-relaxed">
                      Thiếu thông tin minh bạch, dễ gặp phải các tin đăng tuyển lừa đảo hoặc đa cấp giả danh.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                  <Timer size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-base lg:text-lg mb-1">Quy trình ứng tuyển phức tạp</h4>
                    <p className="text-white/50 text-sm lg:text-base leading-relaxed">
                      Hồ sơ ứng tuyển rườm rà, thủ tục nộp giấy tờ phức tạp đối với lao động tay chân.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                  <Ban size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-base lg:text-lg mb-1">Bị động và thiếu phản hồi</h4>
                    <p className="text-white/50 text-sm lg:text-base leading-relaxed">
                      Không nhận được phản hồi sau khi nộp hồ sơ, không biết trạng thái xét duyệt của mình.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 text-xs font-mono text-white/30">
              [ PHÂN HỆ WORKER KHÓ KHĂN ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
