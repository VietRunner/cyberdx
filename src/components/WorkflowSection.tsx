import { UserPlus, Cpu, Briefcase, FileText, CheckCircle2, ChevronRight } from "lucide-react";
import { useState } from "react";

const WORKER_STEPS = [
  {
    step: "01",
    title: "Đăng Ký & Nhập Hồ Sơ",
    desc: "Đăng ký nhanh bằng số điện thoại và tải lên CV hoặc nhập thông tin kỹ năng cơ bản chỉ trong 1 phút.",
    icon: UserPlus,
  },
  {
    step: "02",
    title: "AI So Khớp Công Việc",
    desc: "Thuật toán AI tự động đối sánh, chấm điểm độ phù hợp và đề xuất các tin tuyển dụng sát thực tế nhất trong khu vực.",
    icon: Cpu,
  },
  {
    step: "03",
    title: "Nhận Việc & Đi Làm Ngay",
    desc: "Nhận lời mời phỏng vấn trực tiếp từ nhà tuyển dụng, xác nhận thông tin minh bạch và bắt đầu công việc mới.",
    icon: Briefcase,
  },
];

const RECRUITER_STEPS = [
  {
    step: "01",
    title: "Đăng Tin Tuyển Dụng",
    desc: "Nhập mô tả vị trí ứng tuyển. AI của CyberDX hỗ trợ tối ưu tiêu chuẩn hóa tin đăng để tiếp cận đúng nhóm lao động.",
    icon: FileText,
  },
  {
    step: "02",
    title: "AI Sàng Lọc CV Tự Động",
    desc: "Nhận ngay danh sách hồ sơ ứng viên chất lượng cao được AI chấm điểm độ phù hợp (%) và xác thực tay nghề.",
    icon: Cpu,
  },
  {
    step: "03",
    title: "Kết Nối & Tuyển Dụng",
    desc: "Tương tác trực tiếp qua cổng chat bảo mật, hẹn lịch phỏng vấn nhanh chóng và chốt nhân sự đi làm.",
    icon: CheckCircle2,
  },
];

export default function WorkflowSection() {
  const [activeTab, setActiveTab] = useState<"worker" | "recruiter">("worker");

  const steps = activeTab === "worker" ? WORKER_STEPS : RECRUITER_STEPS;

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
            Quy Trình Vận Hành
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05]">
            Vận Hành Trơn Tru Trong <span className="text-gradient-peach">3 Bước</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
            Quy trình kết nối cung - cầu lao động thông minh được tinh giản tối đa nhờ sự hỗ trợ của trí tuệ nhân tạo.
          </p>

          {/* Tab buttons switcher */}
          <div className="flex bg-white/5 border border-white/10 rounded-full p-1.5 mt-6">
            <button
              onClick={() => setActiveTab("worker")}
              className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "worker"
                  ? "bg-[#d85b6a] text-white shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Người tìm việc (Worker)
            </button>
            <button
              onClick={() => setActiveTab("recruiter")}
              className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "recruiter"
                  ? "bg-[#d85b6a] text-white shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Nhà tuyển dụng (Recruiter)
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
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
                  <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle line connection for desktop */}
                {index < 2 && (
                  <div className="hidden md:block absolute right-[-24px] top-1/2 -translate-y-1/2 z-20 text-white/10">
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
