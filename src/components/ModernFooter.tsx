interface ModernFooterProps {
  onContact?: () => void;
  onGoHome?: () => void;
}

export default function ModernFooter({ onContact, onGoHome }: ModernFooterProps) {
  const currentYear = new Date().getFullYear();

  const handleHashClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
    onGoHome?.();
  };

  return (
    <footer className="relative bg-black py-16 px-4 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5 text-left">

          <div className="md:col-span-6 flex flex-col gap-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onGoHome?.();
              }}
              className="inline-block"
            >
              <img
                src="/cyberdx_logo-removebg-preview.png"
                alt="CyberDX"
                className="h-16 w-auto object-contain mix-blend-screen"
                style={{ maxHeight: "64px" }}
              />
            </a>
            <p className="text-white/50 text-sm lg:text-base leading-relaxed max-w-md">
              CyberDX delivers Falcon, an AI Camera System with real-time video analytics, optimizing security, mitigating operational risks, and safeguarding enterprise assets.
            </p>
          </div>


          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-black text-sm lg:text-base uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onGoHome?.();
                }}
                className="text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleHashClick(e, "#about")}
                className="text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="#features"
                onClick={(e) => handleHashClick(e, "#features")}
                className="text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                AI Features
              </a>
              <a
                href="#platform"
                onClick={(e) => handleHashClick(e, "#platform")}
                className="text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                OS Platform
              </a>
            </div>
          </div>


          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-black text-sm lg:text-base uppercase tracking-wider font-mono">
              Contact & Support
            </h4>
            <div className="flex flex-col gap-2.5">
              <span className="text-white/60 text-sm">
                HOTLINE: 0773679908
              </span>
              <span className="text-white/60 text-sm">
                Email: sale@cyberdx.com
              </span>
              <span className="text-white/60 text-sm leading-relaxed">
                Office:Quoc lo 13, Phuong Hiep Binh, Thanh Pho Ho Chi Minh, Viet Nam
              </span>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onContact?.();
                }}
                className="text-[#f97316] hover:underline text-sm font-bold mt-1"
              >
                Book a Demo &rarr;
              </a>
            </div>
          </div>
        </div>


        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-white/40 text-xs font-semibold uppercase font-mono tracking-widest">
            &copy; {currentYear} CyberDX. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-xs font-semibold uppercase font-mono tracking-widest">
              Powered by Artificial Intelligence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
