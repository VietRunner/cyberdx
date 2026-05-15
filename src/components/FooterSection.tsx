import { useEffect, useRef, useState } from "react";

export default function FooterSection({ onContact }: { onContact?: () => void }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contacts" className={`dx-footer${isVisible ? " dx-footer--in" : ""}`} ref={sectionRef}>
      {/* Top row */}
      <div className="dx-footer-top">
        {/* Col 1: CTA */}
        <div className="dx-footer-col dx-footer-col-cta">
          <img src="/logo_cyberdx-removebg-preview.png" alt="CyberDX" className="dx-footer-logo" />
          <div className="dx-footer-cta-title">LET'S CONNECT</div>
          <p className="dx-footer-cta-text">
            If you have any software related issues or questions, feel free to
            Get in touch with us. We are always here to help you!
          </p>
          <a href="#" className="dx-footer-btn" onClick={(e) => { e.preventDefault(); onContact?.(); }}>CONTACT US</a>
        </div>

        {/* Col 2: Menu */}
        <div className="dx-footer-col dx-footer-col-menu">
          <div className="dx-footer-col-label">MENU</div>
          <a href="#about" className="dx-footer-link">ABOUT</a>
          <a href="#services" className="dx-footer-link">SERVICES</a>
          <a href="#cases" className="dx-footer-link">PROJECTS</a>
        </div>

        {/* Col 3: Contact */}
        <div className="dx-footer-col dx-footer-col-contact">
          <div className="dx-footer-col-label">CONTACT</div>
          <a href="tel:+84773679908" className="dx-footer-link dx-footer-link-ul">PHONE</a>
        </div>

      </div>

      {/* Bottom row */}
      <div className="dx-footer-bottom">
        <div className="dx-footer-bottom-left">
        </div>

        <div className="dx-footer-bottom-mid">
          <div className="dx-footer-email-label">Email us</div>
          <a href="mailto:sale@cyberdx.tech" className="dx-footer-email">SALE@CYBERDX.TECH</a>
        </div>

        <div className="dx-footer-bottom-center">
          <a href="#top" className="dx-footer-backtop">BACK TO TOP</a>
        </div>

        <div className="dx-footer-bottom-right">
          <span className="dx-footer-copy">© CyberDX 2026</span>
          <span className="dx-footer-rights">All rights reserved</span>
        </div>
      </div>
    </section>
  );
}
