export default function HeroSection() {
  return (
    <section id="top" className="dx-hero">
      <div className="dx-hero-inner">
        {/* Logo centered — absolute */}
        <img src="/logo.png" alt="Logo" className="dx-hero-logo" />

        {/* Grid: 2 cols × 2 rows */}
        <div className="dx-hero-grid">

          {/* Row 1 col 1: DYNAMIX. */}
          <div className="dx-hero-cell dx-cell-dynamix">
            <span className="dx-hero-word">DYNAMIX<span className="dx-dot">.</span></span>
          </div>

          {/* Row 1 col 2: tagline */}
          <div className="dx-hero-cell dx-cell-tagline">
            <p className="dx-hero-tagline">We bring motion to<br />your business ideas.</p>
          </div>

          {/* Row 2 col 1: SPEED. */}
          <div className="dx-hero-cell dx-cell-speed">
            <span className="dx-hero-word">SPEED<span className="dx-dot">.</span></span>
          </div>

          {/* Row 2 col 2: INNOVATIONS. */}
          <div className="dx-hero-cell dx-cell-innovations">
            <span className="dx-hero-word">INNOVATIONS<span className="dx-dot">.</span></span>
          </div>

        </div>
      </div>
    </section>
  );
}
