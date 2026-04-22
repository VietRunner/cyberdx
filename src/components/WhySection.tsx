interface CoreValue {
  number: string;
  title: string;
  description: string;
}

const CORE_VALUES: CoreValue[] = [
  {
    number: "01",
    title: "Purposeful AI",
    description:
      "We apply AI with clear intent, focusing on real business problems where automation and intelligence can create measurable impact.",
  },
  {
    number: "02",
    title: "Real Business Value",
    description:
      "We focus on outcomes that matter to the business: faster operations, better decisions, stronger user experience, and sustainable growth.",
  },
  {
    number: "03",
    title: "Built for Long-Term Growth",
    description:
      "Our products are designed for stability, scalability, integration, and long-term maintainability as the business grows.",
  },
];

export default function WhySection() {
  return (
    <section
      data-w-id="1e746c7a-3c8a-400b-009f-3e6fa7504ba3"
      className="why"
    >
      <div className="container">
        <div className="sec-cont">
          <div className="sec-title-card">
            <h2 className="txt24 medium h100 sz14-mob">Core Values</h2>
          </div>
          <div className="why-cards">
            <div className="txt180 upper why-abs">Purpose.</div>
            {CORE_VALUES.map((value) => (
              <div key={value.number} className="why-card">
                <div className="why-card-top">
                  <div className="txt24 semi upper">{value.title}</div>
                  <div className="txt24 op50">{value.number}</div>
                </div>
                <div className="txt18 why-wd">{value.description}</div>
                <div className="why-card-dec-square" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
