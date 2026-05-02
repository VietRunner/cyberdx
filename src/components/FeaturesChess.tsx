import feature1 from '../assets/feature-1.gif';
import feature2 from '../assets/feature-2.gif';

const ROWS = [
  {
    title: 'Designed to convert. Built to perform.',
    body: 'Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.',
    cta: 'Learn more',
    gif: feature1,
    reverse: false,
  },
  {
    title: 'It gets smarter. Automatically.',
    body: 'Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.',
    cta: 'See how it works',
    gif: feature2,
    reverse: true,
  },
];

export default function FeaturesChess() {
  return (
    <section
      id="services"
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
          marginBottom: '80px',
          gap: '16px',
        }}
      >
        <div className="liquid-glass section-badge">Capabilities</div>
        <h2 className="section-heading">Pro features. Zero complexity.</h2>
      </div>

      {/* Chess rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', maxWidth: '1100px', margin: '0 auto' }}>
        {ROWS.map((row, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              flexDirection: row.reverse ? 'row-reverse' : 'row',
              alignItems: 'center',
              gap: 'clamp(32px, 5vw, 80px)',
              flexWrap: 'wrap',
            }}
          >
            {/* Text content */}
            <div
              style={{
                flex: '1 1 300px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  color: 'white',
                  letterSpacing: '-0.02em',
                  lineHeight: '1',
                  margin: 0,
                }}
              >
                {row.title}
              </h3>
              <p
                className="section-body"
                style={{ margin: 0 }}
              >
                {row.body}
              </p>
              <div>
                <a
                  href="#contact"
                  className="liquid-glass-strong rounded-full px-5 py-2.5 text-white text-sm font-medium inline-flex items-center hover:opacity-80 transition-opacity"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {row.cta}
                </a>
              </div>
            </div>

            {/* GIF */}
            <div
              className="liquid-glass"
              style={{
                flex: '1 1 300px',
                borderRadius: '16px',
                overflow: 'hidden',
                maxWidth: '500px',
              }}
            >
              <img
                src={row.gif}
                alt={row.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '16px',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
