interface ModernFooterProps {
  onContact?: () => void;
}

export default function ModernFooter({ onContact }: ModernFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black py-16 px-4 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5 text-left">
          {/* Brand Col */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <a href="#home" className="inline-block">
              <img
                src="/logo_cyberdx-removebg-preview.png"
                alt="CyberDX"
                className="h-16 w-auto object-contain mix-blend-screen"
                style={{ maxHeight: "64px" }}
              />
            </a>
            <p className="text-white/50 text-sm lg:text-base leading-relaxed max-w-md">
              Nền tảng tuyển dụng thông minh ứng dụng AI, giúp người lao động tìm việc nhanh hơn và giúp doanh nghiệp tuyển đúng người hiệu quả hơn.
            </p>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-black text-sm lg:text-base uppercase tracking-wider font-mono">
              Danh Mục
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#home" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Trang Chủ
              </a>
              <a href="#problem" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Thực Trạng & Vấn Đề
              </a>
              <a href="#solution" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Giải Pháp AI
              </a>
              <a href="#features" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Hệ Tính Năng
              </a>
            </div>
          </div>

          {/* Legal / Contacts Col */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-black text-sm lg:text-base uppercase tracking-wider font-mono">
              Liên Hệ & Hỗ Trợ
            </h4>
            <div className="flex flex-col gap-2.5">
              <span className="text-white/60 text-sm">
                Email: support@cyberdx.tech
              </span>
              <span className="text-white/60 text-sm">
                Văn phòng: TP. Hồ Chí Minh, Việt Nam
              </span>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onContact?.();
                }}
                className="text-[#d85b6a] hover:underline text-sm font-bold"
              >
                Đặt lịch hẹn phỏng vấn demo &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-white/40 text-xs font-semibold uppercase font-mono tracking-widest">
            &copy; {currentYear} CyberDX AI Ecosystem. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-xs font-semibold uppercase font-mono tracking-widest">
              Xây dựng bằng Trí tuệ Nhân tạo
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
