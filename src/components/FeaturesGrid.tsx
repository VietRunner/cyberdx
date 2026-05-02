import { Zap, Palette, BarChart3, Shield } from 'lucide-react';

const CARDS = [
  {
    icon: Zap,
    title: 'Days, Not Months',
    body: 'Concept to launch at a pace that redefines fast. Because waiting isn\'t a strategy.',
  },
  {
    icon: Palette,
    title: 'Obsessively Crafted',
    body: 'Every detail considered. Every element refined. Design so precise, it feels inevitable.',
  },
  {
    icon: BarChart3,
    title: 'Built to Convert',
    body: 'Layouts informed by data. Decisions backed by performance. Results you can measure.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    body: 'Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.',
  },
];

export default function FeaturesGrid() {
  return (
    <section
      id="why"
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
        <div className="liquid-glass section-badge">Why Us</div>
        <h2 className="section-heading">The difference is everything.</h2>
      </div>

      {/* 4-column grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {CARDS.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="liquid-glass"
              style={{
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              {/* Icon circle */}
              <div
                className="liquid-glass-strong"
                style={{
                  borderRadius: '9999px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={18} color="white" />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: 'white',
                  margin: 0,
                }}
              >
                {card.title}
              </h3>

              <p className="section-body" style={{ margin: 0, fontSize: '0.8rem' }}>
                {card.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
