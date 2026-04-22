import { useState } from "react";

const NAV_LINKS = [
  { label: "ABOUT US",    href: "#about" },
  { label: "SERVICES",   href: "#services" },
  { label: "OUR PROJECTS", href: "#cases" },
  { label: "CONTACTS",   href: "#contacts" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <header className="dx-header">
        <div className="dx-header-inner">
          <a href="#top" className="dx-logo-link" onClick={close}>
            <span className="dx-logo-text">CyberDX</span>
          </a>

          {/* Desktop nav */}
          <nav className="dx-nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="dx-nav-link">{l.label}</a>
            ))}
          </nav>

          <a href="/form" className="dx-cta-btn">GET IN TOUCH</a>

          {/* Hamburger */}
          <button
            className={`dx-hamburger${open ? " dx-hamburger--open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="dx-mob-overlay">
          <div className="dx-mob-inner">
            {/* Top bar */}
            <div className="dx-mob-top">
              <a href="#top" className="dx-logo-link" onClick={close}>
                <span className="dx-logo-text">CyberDX</span>
              </a>
              <button className="dx-mob-close" onClick={close}>CLOSE</button>
            </div>

            {/* Links */}
            <nav className="dx-mob-nav">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="dx-mob-link" onClick={close}>
                  <span>{l.label}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 16L16 4M16 4H7M16 4V13" stroke="#2a8f8f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </nav>

            {/* CTA */}
            <a href="/form" className="dx-mob-cta" onClick={close}>
              LET'S DISCUSS
            </a>
          </div>
        </div>
      )}
    </>
  );
}
