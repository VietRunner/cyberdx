export default function HeroSection() {
  return (
    <section id="top" className="dx-hero dx-hero--video">

      {/* ── GIF background ── */}
      <img
        className="dx-hero-video"
        src="/hero-bg.gif"
        alt=""
        aria-hidden="true"
      />

      {/* ── Dark overlay ── */}
      <div className="dx-hero-overlay" />

      {/* ── Content ── */}
      <div className="dx-hero-inner">
        <img src="/logo.png" alt="Logo" className="dx-hero-logo" />

        <div className="dx-hero-grid">
          <div className="dx-hero-cell dx-cell-dynamix">
            <span className="dx-hero-word">DYNAMIX<span className="dx-dot">.</span></span>
          </div>
          <div className="dx-hero-cell dx-cell-tagline">
            <p className="dx-hero-tagline">We bring motion to<br />your business ideas.</p>
          </div>
          <div className="dx-hero-cell dx-cell-speed">
            <span className="dx-hero-word">SPEED<span className="dx-dot">.</span></span>
          </div>
          <div className="dx-hero-cell dx-cell-innovations">
            <span className="dx-hero-word">INNOVATIONS<span className="dx-dot">.</span></span>
          </div>
        </div>
      </div>

    </section>
  );
}
