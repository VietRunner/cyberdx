import HlsVideo from './HlsVideo';

const HLS_SRC = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8';

export default function CtaFooter() {
  return (
    <section
      id="contact"
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

      {/* Top/bottom fades */}
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />

      {/* CTA Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'clamp(100px, 14vw, 200px) clamp(24px, 6vw, 80px) 0',
          gap: '24px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            color: 'white',
            letterSpacing: '-0.025em',
            lineHeight: '0.85',
            maxWidth: '700px',
            margin: 0,
          }}
        >
          Your next website starts here.
        </h2>

        <p
          className="section-body"
          style={{ maxWidth: '480px', margin: 0 }}
        >
          Book a free strategy call. See what AI-powered design can do.
          No commitment, no pressure. Just possibilities.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
          <a
            href="#"
            id="cta-book-call"
            className="liquid-glass-strong rounded-full px-6 py-3 text-white text-sm font-medium inline-flex items-center hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Book a Call
          </a>
          <a
            href="#pricing"
            id="cta-pricing"
            style={{
              fontFamily: 'var(--font-body)',
              background: 'white',
              color: 'black',
              borderRadius: '9999px',
              padding: '12px 24px',
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            View Pricing
          </a>
        </div>
      </div>

      {/* Footer bar */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          marginTop: '128px',
          padding: '32px clamp(24px, 6vw, 80px)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          © 2026 Studio. All rights reserved.
        </span>

        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy', 'Terms', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
