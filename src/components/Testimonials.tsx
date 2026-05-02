const TESTIMONIALS = [
  {
    quote:
      'A complete rebuild in five days. The result outperformed everything we\'d spent months building before.',
    name: 'Sarah Chen',
    role: 'CEO, Luminary',
  },
  {
    quote:
      'Conversions up 4x. That\'s not a typo. The design just works differently when it\'s built on real data.',
    name: 'Marcus Webb',
    role: 'Head of Growth, Arcline',
  },
  {
    quote:
      'They didn\'t just design our site. They defined our brand. World-class doesn\'t begin to cover it.',
    name: 'Elena Voss',
    role: 'Brand Director, Helix',
  },
];

export default function Testimonials() {
  return (
    <section
      id="work"
      style={{
        background: '#000',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px)',
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '64px',
          gap: '16px',
        }}
      >
        <div className="liquid-glass section-badge">What They Say</div>
        <h2 className="section-heading">Don't take our word for it.</h2>
      </div>

      {/* 3-column grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {TESTIMONIALS.map((t, idx) => (
          <div
            key={idx}
            className="liquid-glass"
            style={{
              borderRadius: '16px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            {/* Quote mark */}
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontSize: '3rem',
                color: 'rgba(255,255,255,0.15)',
                lineHeight: '1',
                userSelect: 'none',
              }}
            >
              "
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.8)',
                fontStyle: 'italic',
                lineHeight: '1.7',
                margin: 0,
              }}
            >
              {t.quote}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: 'auto' }}>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  color: 'white',
                }}
              >
                {t.name}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {t.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
