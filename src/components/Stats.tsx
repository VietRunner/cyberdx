import HlsVideo from './HlsVideo';

const HLS_SRC = 'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8';

const STATS = [
  { value: '200+', label: 'Sites launched' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '3.2x', label: 'More conversions' },
  { value: '5 days', label: 'Average delivery' },
];

export default function Stats() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#000',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px)',
      }}
    >
      {/* HLS Video background — desaturated */}
      <HlsVideo
        src={HLS_SRC}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          filter: 'saturate(0)',
        }}
      />

      {/* Top/bottom fades */}
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />

      {/* Stats card */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <div
          className="liquid-glass"
          style={{
            borderRadius: '24px',
            padding: 'clamp(48px, 8vw, 80px) clamp(32px, 6vw, 64px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '48px',
            textAlign: 'center',
          }}
        >
          {STATS.map((stat, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                  color: 'white',
                  lineHeight: '1',
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
