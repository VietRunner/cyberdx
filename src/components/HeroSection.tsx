export default function HeroSection() {
  return (
    <section id="top" className="dx-hero dx-hero--video">

      {/* ── Cinematic video background ── */}
      <video
        className="dx-hero-video"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
        poster="/hero-bg.jpg"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />


      {/* ── Dark overlay ── */}
      <div className="dx-hero-overlay" />

      {/* ── Content ── */}
      <div className="dx-hero-inner">
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
