import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ModernNavProps {
  onContact?: () => void;
  onGoHome?: () => void;
}

interface NavLinkItem {
  label: string;
  href?: string;
  dropdownItems?: { label: string; slug: string; href: string }[];
}

const NAV_LINKS: NavLinkItem[] = [
  {
    label: "Industries",
    dropdownItems: [
      { label: "Manufacturing & Factories", slug: "san-xuat-nha-may", href: "/san-xuat-nha-may/" },
      { label: "Logistics & Warehousing", slug: "kho-van-hang-hoa", href: "/kho-van-hang-hoa/" },
      { label: "Retail & Services", slug: "ban-le-dich-vu", href: "/ban-le-dich-vu/" },
      { label: "Education & Training", slug: "giao-duc-dao-tao-2", href: "/giao-duc-dao-tao-2/" },
      { label: "Hospitality & Tourism", slug: "khach-san-du-lich", href: "/khach-san-du-lich/" },
      { label: "Hospitals & Healthcare", slug: "ben-vien-co-so-y-te", href: "/ben-vien-co-so-y-te/" },
    ],
  },
  {
    label: "AI Solutions",
    dropdownItems: [
      { label: "Face Recognition", slug: "nhan-dien-khuon-mat", href: "/nhan-dien-khuon-mat/" },
      { label: "License Plate Recognition", slug: "nhan-dien-bien-so-xe-tu-dong", href: "/nhan-dien-bien-so-xe-tu-dong/" },
      { label: "Smoke & Fire Detection", slug: "phat-hien-khoi-chay", href: "/phat-hien-khoi-chay/" },
      { label: "Intrusion Detection", slug: "phat-hien-xam-nhap", href: "/phat-hien-xam-nhap/" },
      { label: "PPE & Uniform Monitoring", slug: "giam-sat-ppe-dong-phuc", href: "/giam-sat-ppe-dong-phuc/" },
      { label: "People Counting", slug: "giai-phap-dem-nguoi", href: "/giai-phap-dem-nguoi/" },
      { label: "Illegal Parking Detection", slug: "giam-sat-do-xe-sai-quy-dinh", href: "/giam-sat-do-xe-sai-quy-dinh/" },
      { label: "Behavior Recognition", slug: "nhan-dien-phan-tich-hanh-vi", href: "/nhan-dien-phan-tich-hanh-vi/" },
      { label: "Heatmap & Trajectory", slug: "ban-do-nhiet-lo-trinh", href: "/ban-do-nhiet-lo-trinh/" },
    ],
  },
  {
    label: "Library",
    dropdownItems: [
      { label: "Case Studies", slug: "case-studies", href: "/case-studies/" },
      { label: "Careers", slug: "career", href: "/career/" },
      { label: "News & Articles", slug: "blog", href: "/blog/" },
      { label: "Terms of Service", slug: "dieu-khoan-su-dung", href: "/dieu-khoan-su-dung/" },
      { label: "Privacy Policy", slug: "chinh-sach-bao-mat", href: "/chinh-sach-bao-mat/" },
    ],
  },
  { label: "About", href: "#about" },
  { label: "Platform", href: "#platform" },
  { label: "Workflow", href: "#workflow" },
];

export default function ModernNav({ onContact, onGoHome }: ModernNavProps) {
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
    
    document.dispatchEvent(new CustomEvent("dx:open-detail", { detail: slug }));
  };

  return (
    <>
      <nav
        className="absolute top-0 left-0 right-0 z-50 pl-0 pr-4 md:pr-8 transition-all duration-300 pointer-events-none"
      >
        <div className="max-w-none mx-0 flex items-start justify-between w-full">
          
          <div className="pointer-events-auto flex items-center">
            <a
              href="/"
              className="flex items-center flex-shrink-0"
              onClick={(e) => {
                e.preventDefault();
                closeMobile();
                onGoHome?.();
              }}
            >
              <img
                src="/cyberdx_logo-removebg-preview.png"
                alt="CyberDX"
                className="h-24 md:h-32 lg:h-36 w-auto object-contain mix-blend-screen transition-all duration-300 hover:scale-105"
                style={{ maxHeight: "144px" }}
              />
            </a>
          </div>

          
          <div
            className={`hidden lg:flex items-center gap-2.5 py-1.5 px-5 mt-2 rounded-full transition-all duration-300 bg-[#08080a]/65 border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur-md pointer-events-auto border ${
              scrolled
                ? "bg-[#050507]/90 border-[#d85b6a]/20 shadow-[0_12px_36px_rgba(0,0,0,0.7)] backdrop-blur-xl scale-[0.98]"
                : ""
            }`}
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {NAV_LINKS.map((link) => {
              const hasDropdown = !!link.dropdownItems;
              const isActive = activeDropdown === link.label;

              return (
                <div
                  key={link.label}
                  className="relative py-1.5"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(link.label)}
                  onMouseLeave={() => hasDropdown && handleMouseLeave()}
                >
                  <a
                    href={link.href || "#"}
                    onClick={(e) => {
                      if (hasDropdown) {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === link.label ? null : link.label);
                      } else if (link.href && link.href.startsWith("#")) {
                        e.preventDefault();
                        window.location.hash = link.href;
                        onGoHome?.();
                      }
                    }}
                    className={`px-4 py-2 text-[14px] font-black uppercase tracking-widest transition-all duration-300 rounded-full flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#d85b6a] text-white shadow-[0_4px_14px_rgba(216,91,106,0.4)] scale-105"
                        : "text-white/85 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    {hasDropdown && (
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-300 ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>

                  
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

          
          <div className="pointer-events-auto flex items-center gap-3 mt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onContact?.();
                closeMobile();
              }}
              className="hidden sm:flex items-center gap-2 bg-[#d85b6a] text-white rounded-full px-7 py-3 text-xs font-black uppercase tracking-widest hover:bg-[#e26c7b] shadow-[0_6px_20px_rgba(216,91,106,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10"
            >
              Contact Us
              <ArrowUpRight size={14} />
            </a>

            
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white/90 hover:text-white p-3 rounded-full bg-[#08080a]/65 border border-white/10 shadow-md backdrop-blur-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#020202]/95 backdrop-blur-2xl flex flex-col justify-between p-6 transition-all duration-300 lg:hidden">
          
          <div className="flex items-center justify-between pt-16">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                closeMobile();
                onGoHome?.();
              }}
            >
              <img
                src="/cyberdx_logo-removebg-preview.png"
                alt="CyberDX"
                className="h-20 w-auto object-contain mix-blend-screen"
                style={{ maxHeight: "80px" }}
              />
            </a>
            <button
              onClick={closeMobile}
              className="text-white/80 hover:text-white p-2 rounded-full bg-white/5 border border-white/10"
            >
              <X size={20} />
            </button>
          </div>

          
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
                        if (link.href && link.href.startsWith("#")) {
                          e.preventDefault();
                          window.location.hash = link.href;
                          onGoHome?.();
                        }
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

          
          <button
            onClick={() => {
              closeMobile();
              onContact?.();
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#d85b6a] text-white rounded-full py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#e26c7b] shadow-[0_6px_20px_rgba(216,91,106,0.3)] transition-all duration-300 cursor-pointer"
          >
            Get Started
            <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </>
  );
}
