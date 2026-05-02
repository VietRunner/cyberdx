import { ArrowUpRight } from 'lucide-react';
import HlsVideo from './HlsVideo';

const HLS_SRC = 'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8';

export default function StartSection() {
  return (
    <section
      id="process"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* HLS Video background */}
      <HlsVideo
        src={HLS_SRC}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* Top fade */}
      <div className="video-fade-top" />
      {/* Bottom fade */}
      <div className="video-fade-bottom" />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          minHeight: '500px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'clamp(80px, 10vw, 160px) clamp(24px, 6vw, 80px)',
          gap: '24px',
        }}
      >
        {/* Badge */}
        <div className="liquid-glass section-badge">How It Works</div>

        {/* Heading */}
        <h2 className="section-heading" style={{ maxWidth: '600px' }}>
          You dream it. We ship it.
        </h2>

        {/* Body */}
        <p
          className="section-body"
          style={{ maxWidth: '500px' }}
        >
          Share your vision. Our AI handles the rest—wireframes, design, code, launch.
          All in days, not quarters.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          id="start-get-started"
          className="liquid-glass-strong rounded-full px-6 py-3 text-white text-sm font-medium flex items-center gap-2 hover:opacity-80 transition-opacity mt-2"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Get Started
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
