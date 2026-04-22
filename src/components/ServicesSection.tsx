interface Service {
  number: string;
  title: string;
  description: string;
  extraClass?: string;
}

const SERVICES: Service[] = [
  {
    number: "01",
    title: "AI Application Systems",
    description:
      "We design and build AI-powered application systems to automate workflows, analyze data, and create measurable business value.",
  },
  {
    number: "03",
    title: "Scalable Architecture",
    description:
      "We build flexible and scalable system architecture that supports rapid growth, modern integration needs, and long-term platform evolution.",
  },
  {
    number: "05",
    title: "Enterprise Integration",
    description:
      "Our team has extensive experience integrating a wide range of products and Services with AI providers. If you need assistance with such projects, we are here to help!",
  },
  {
    number: "02",
    title: "Real-Time Data",
    description:
      "We deliver real-time data processing and analytics to support faster decisions, operational visibility, and more responsive systems.",
    extraClass: "mar-l",
  },
  {
    number: "04",
    title: "Rapid Product Delivery",
    description:
      "We move products from idea to production quickly, turning business insight into working software with efficient delivery and integration.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="sec-cont">
          <div className="sec-title-card">
            <h2 className="txt24 medium h100">Services</h2>
          </div>
          <div
            data-w-id="780f9223-c19f-9fc2-ebe9-d8168ee60384"
            className="services-hor-scroll-cont"
          >
            <div className="services-hor-scroll-wrp">
              <div className="services-hor-scroll">
                {SERVICES.map((service) => (
                  <div
                    key={service.number}
                    className={`service-card${service.extraClass ? ` ${service.extraClass}` : ""}`}
                  >
                    <div className="service-top">
                      <div className="txt64">{service.title}</div>
                      <div className="txt40 op50">{service.number}</div>
                    </div>
                    <div className="service-bot">
                      <div className={`txt18 sz14-mob${service.number === "02" ? " serv-wd" : ""}`}>
                        {service.description}
                      </div>
                      <a
                        href="/form"
                        className="btn btn-white mob-hide w-inline-block"
                      >
                        <div className="txt24">LET'S CONNECT</div>
                      </a>
                    </div>
                  </div>
                ))}
                <div className="txt130 upper services-abs">
                  {" "}Connected<span className="green">.</span>
                </div>
                <a href="/form" className="btn btn-white mob w-inline-block">
                  <div className="txt24">LET'S CONNECT</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
