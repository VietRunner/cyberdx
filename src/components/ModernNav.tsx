import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ModernNavProps {
  onContact?: () => void;
}

interface NavLinkItem {
  label: string;
  href?: string;
  dropdownItems?: { label: string; slug: string; href: string }[];
}

const NAV_LINKS: NavLinkItem[] = [
  {
    label: "Ngành Nghề",
    dropdownItems: [
      { label: "Sản xuất & Nhà máy", slug: "san-xuat-nha-may", href: "/san-xuat-nha-may/" },
      { label: "Kho vận & Hàng hóa", slug: "kho-van-hang-hoa", href: "/kho-van-hang-hoa/" },
      { label: "Bán lẻ & Dịch vụ", slug: "ban-le-dich-vu", href: "/ban-le-dich-vu/" },
      { label: "Giáo dục & Đào tạo", slug: "giao-duc-dao-tao-2", href: "/giao-duc-dao-tao-2/" },
      { label: "Khách sạn & Du lịch", slug: "khach-san-du-lich", href: "/khach-san-du-lich/" },
      { label: "Bệnh viện & Y tế", slug: "benh-vien-co-so-y-te", href: "/benh-vien-co-so-y-te/" },
    ],
  },
  {
    label: "Giải Pháp AI",
    dropdownItems: [
      { label: "Nhận diện khuôn mặt", slug: "nhan-dien-khuon-mat", href: "/nhan-dien-khuon-mat/" },
      { label: "Nhận diện biển số xe", slug: "nhan-dien-bien-so-xe-tu-dong", href: "/nhan-dien-bien-so-xe-tu-dong/" },
      { label: "Phát hiện khói & cháy", slug: "phat-hien-khoi-chay", href: "/phat-hien-khoi-chay/" },
      { label: "Phát hiện xâm nhập", slug: "phat-hien-xam-nhap", href: "/phat-hien-xam-nhap/" },
      { label: "Giám sát PPE & Đồng phục", slug: "giam-sat-ppe-dong-phuc", href: "/giam-sat-ppe-dong-phuc/" },
      { label: "Giải pháp đếm người", slug: "giai-phap-dem-nguoi", href: "/giai-phap-dem-nguoi/" },
      { label: "Giám sát đỗ xe cấm", slug: "giam-sat-do-xe-sai-quy-dinh", href: "/giam-sat-do-xe-sai-quy-dinh/" },
      { label: "Nhận diện hành vi", slug: "nhan-dien-phan-tich-hanh-vi", href: "/nhan-dien-phan-tich-hanh-vi/" },
      { label: "Bản đồ nhiệt & Lộ trình", slug: "ban-do-nhiet-lo-trinh", href: "/ban-do-nhiet-lo-trinh/" },
    ],
  },
  {
    label: "Thư Viện",
    dropdownItems: [
      { label: "Câu Hỏi Thường Gặp", slug: "cau-hoi-thuong-gap", href: "/cau-hoi-thuong-gap/" },
      { label: "Dự Án Tiêu Biểu", slug: "case-studies", href: "/case-studies/" },
      { label: "Điều khoản sử dụng", slug: "dieu-khoan-su-dung", href: "/dieu-khoan-su-dung/" },
      { label: "Chính sách bảo mật", slug: "chinh-sach-bao-mat", href: "/chinh-sach-bao-mat/" },
    ],
  },
  { label: "Triết Lý", href: "#philosophy" },
  { label: "Quy Trình", href: "#workflow" },
];

export default function ModernNav({ onContact }: ModernNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileActiveDropdown(null);
  };

  const handleMouseEnter = (label: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
    setHoverTimeout(timeout);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === label ? null : label);
  };

  const handleItemClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    setActiveDropdown(null);
    closeMobile();
    // Dispatch custom event to let App.tsx catch and render details
    document.dispatchEvent(new CustomEvent("dx:open-detail", { detail: slug }));
  };

  return (
    <>
      <nav
        className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300"
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between py-3 px-6 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#080808]/70 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] backdrop-blur-xl"
              : "bg-transparent border-transparent"
          } border`}
          style={{
            backdropFilter: scrolled ? "blur(20px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          }}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 flex-shrink-0" onClick={closeMobile}>
            <img
              src="/logo_cyberdx-removebg-preview.png"
              alt="CyberDX"
              className="h-20 w-auto object-contain mix-blend-screen drop-shadow-[0_4px_12px_rgba(216,91,106,0.3)] transition-all duration-300 hover:scale-105"
              style={{ maxHeight: "80px" }}
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-3">
            {NAV_LINKS.map((link) => {
              const hasDropdown = !!link.dropdownItems;
              const isActive = activeDropdown === link.label;

              return (
                <div
                  key={link.label}
                  className="relative py-2"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(link.label)}
                  onMouseLeave={() => hasDropdown && handleMouseLeave()}
                >
                  <a
                    href={link.href || "#"}
                    onClick={(e) => {
                      if (hasDropdown) {
                        e.preventDefault();
                      }
                    }}
                    className={`px-4 py-2.5 text-[15px] font-black uppercase tracking-widest transition-all duration-300 rounded-full flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#d85b6a] text-white shadow-[0_4px_14px_rgba(216,91,106,0.4)] scale-105"
                        : "text-white/85 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    {hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>

                  {/* Dropdown Card */}
                  <AnimatePresence>
                    {hasDropdown && isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-2 w-80 bg-[#0a0a0c]/95 border border-white/10 backdrop-blur-2xl rounded-3xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.8)] z-50 flex flex-col gap-2.5"
                      >
                        {link.dropdownItems?.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => handleItemClick(e, item.slug)}
                            className="px-4 py-2.5 text-[14px] font-extrabold text-white/70 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-200 text-left block cursor-pointer"
                          >
                            {item.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onContact?.();
                closeMobile();
              }}
              className="hidden sm:flex items-center gap-2 bg-[#d85b6a] text-white rounded-full px-8 py-3.5 text-sm font-black uppercase tracking-widest hover:bg-[#e26c7b] shadow-[0_6px_20px_rgba(216,91,106,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Liên Hệ Ngay
              <ArrowUpRight size={15} />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white/90 hover:text-white p-2 rounded-full bg-white/5 border border-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Accordion style) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#020202]/95 backdrop-blur-2xl flex flex-col justify-between p-6 transition-all duration-300 lg:hidden">
          {/* Top Header */}
          <div className="flex items-center justify-between pt-16">
            <img
              src="/logo_cyberdx-removebg-preview.png"
              alt="CyberDX"
              className="h-16 w-auto object-contain mix-blend-screen"
            />
            <button
              onClick={closeMobile}
              className="text-white/80 hover:text-white p-2 rounded-full bg-white/5 border border-white/10"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 my-auto overflow-y-auto max-h-[60vh] pr-2">
            {NAV_LINKS.map((link) => {
              const hasDropdown = !!link.dropdownItems;
              const isMobileActive = mobileActiveDropdown === link.label;

              return (
                <div key={link.label} className="flex flex-col w-full">
                  <a
                    href={link.href || "#"}
                    onClick={(e) => {
                      if (hasDropdown) {
                        e.preventDefault();
                        toggleMobileDropdown(link.label);
                      } else {
                        closeMobile();
                      }
                    }}
                    className="text-2xl font-black uppercase tracking-wide text-white/90 hover:text-[#d85b6a] border-b border-white/5 pb-3 transition-colors duration-200 flex items-center justify-between"
                  >
                    {link.label}
                    {hasDropdown ? (
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 text-[#d85b6a] ${
                          isMobileActive ? "rotate-180" : ""
                        }`}
                      />
                    ) : (
                      <ArrowUpRight size={20} className="opacity-55 text-[#d85b6a]" />
                    )}
                  </a>

                  {/* Mobile Dropdown items accordion */}
                  {hasDropdown && isMobileActive && (
                    <div className="flex flex-col gap-3 pl-4 pt-3 pb-2 border-l border-white/10 mt-1">
                      {link.dropdownItems?.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={(e) => handleItemClick(e, item.slug)}
                          className="text-[15px] font-bold text-white/70 hover:text-[#d85b6a] transition-colors py-1.5 block text-left cursor-pointer"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <button
            onClick={() => {
              closeMobile();
              onContact?.();
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#d85b6a] text-white rounded-full py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#e26c7b] shadow-[0_6px_20px_rgba(216,91,106,0.3)] transition-all duration-300 cursor-pointer"
          >
            Bắt Đầu Trải Nghiệm
            <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </>
  );
}
