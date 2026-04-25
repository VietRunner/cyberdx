interface WorkCard {
  ariaLabel: string;
  title: string;
  href: string;
  img: string;
  description: string;
  descriptionClass?: string;
}

const WORK_CARDS: WorkCard[] = [
  {
    ariaLabel: "KIOSIFY",
    title: "KIOSIFY",
    href: "https://kiosify.com",
    img: "/project-kiosify.jpg",
    description: "KIOSIFY is a modern self-service kiosk solution for retail and F&B. It streamlines ordering, payment, and operations while improving customer experience across branches.",
  },
  {
    ariaLabel: "VietRunner",
    title: "VietRunner",
    href: "https://vietrunner.com",
    img: "/project-vietrunner.jpg",
    description: "VietRunner is a community-driven platform designed to connect and grow the running ecosystem in Vietnam. It brings together runners, coaches, and local communities into one unified space, enabling smarter training, stronger connections, and sustainable motivation across multiple channels.",
    descriptionClass: "l",
  },
  {
    ariaLabel: "HT LAND",
    title: "HT LAND",
    href: "https://htland.vn",
    img: "/project-htland.jpg",
    description: "HT LAND is a real estate platform that combines investment consulting with digital transformation. It uses market data, analytical content, and digital sales tools to support smarter decisions.",
  },
  {
    ariaLabel: "REVER",
    title: "REVER",
    href: "https://rever.vn",
    img: "/project-rever.jpg",
    description: "REVER is one of Vietnam's leading PropTech platforms, using technology and data to standardize property buying, selling, and rental transactions through an end-to-end digital experience.",
    descriptionClass: "l wd",
  },
];

export default function WorksSection() {
  return (
    <section id="cases" className="works">
      <div className="container">
        <div className="sec-cont">
          <div className="sec-head-wrp">
            <div className="sec-title-card">
              <h2 className="txt24 medium h100">Products &amp; Cases</h2>
            </div>
            <div className="txt18 works-wd sz14-mob">
              A selection of digital products and platforms that reflect CyberDX
              capabilities across retail, community, and PropTech.
            </div>
          </div>

          <div className="works-cont-wrp">
            <div className="works-items">
              {WORK_CARDS.map((card) => (
                <div key={card.ariaLabel} className="work-card">

                  {/* Image — desktop: absolute 60% center, mobile: in flow */}
                  <div className="work-img-wrap">
                    <img src={card.img} alt={card.title} className="work-img-real" loading="lazy" />
                  </div>

                  {/* Webflow hover div — desktop: hover center, mobile: top bar với tên + btn */}
                  <div className="work-hover-div">
                    <div className="txt18 pc-hide">{card.title}</div>
                    <a href={card.href} target="_blank" rel="noopener noreferrer"
                      className="btn btn-hover-white mob-sm w-inline-block">
                      <div className="txt24 sz14-mob">Go to Website</div>
                    </a>
                  </div>

                  {/* Desktop description — top-right */}
                  <div className={`txt18 work-abs${card.descriptionClass ? ` ${card.descriptionClass}` : ""}`}>
                    {card.description}
                  </div>

                  {/* Mobile description — below hover-div, above image */}
                  <div className="dx-mob-card-info">
                    <p className="dx-mob-card-desc">{card.description}</p>
                  </div>

                </div>
              ))}
            </div>

            <div className="sticky-text-cont">
              <div
                data-w-id="ebf328c0-0909-df48-a0e0-3b540e459fb2"
                style={{ opacity: 0 }}
                className="sticky-text-wrp"
              >
                <div className="txt180 upper">
                  <span className="op50">growth</span>
                  <span className="green">.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}