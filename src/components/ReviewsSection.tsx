interface Review {
  number: string;
  name: string;
  role: string;
  quote: string;
  topMarginClass?: string;
}

const REVIEWS: Review[] = [
  {
    number: "01",
    name: "Huynh Quang Trung",
    role: "Founder",
    quote:
      "Defines product vision, strategic direction, and long-term roadmap. Ensures the platform evolves in line with the mission of building a strong running community.",
  },
  {
    number: "02",
    name: "Nguyen Minh Anh Hao",
    role: "CEO",
    quote:
      "Leads business operations, execution strategy, and ecosystem growth. Aligns product, community, and partnerships to drive sustainable development.",
    topMarginClass: "mar-top1",
  },
  {
    number: "03",
    name: "Nguyen Huu Nhat",
    role: "Backend Tech Lead",
    quote:
      "Designs and maintains backend systems, APIs, and data architecture. Ensures scalability, performance, and reliability across the platform.",
    topMarginClass: "mar-top3",
  },
  {
    number: "04",
    name: "Le Trung Kien",
    role: "Frontend Tech Lead",
    quote:
      "Leads frontend development with a focus on usability, responsiveness, and seamless user experience for all platform users.",
    topMarginClass: "mar-top4",
  },
  {
    number: "05",
    name: "Pham Van Khanh",
    role: "Full-stack Tech Lead",
    quote:
      "Oversees end-to-end feature development and system integration. Ensures code quality, consistency, and effective delivery across the platform.",
    topMarginClass: "mar-top1",
  },
  {
    number: "06",
    name: "Tran Phi Tuong",
    role: "Full-stack Developer",
    quote:
      "Implements features across frontend and backend. Supports integration, debugging, and continuous improvement to maintain stable product delivery.",
    topMarginClass: "mar-top2",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className={`rev-card${review.topMarginClass ? ` ${review.topMarginClass}` : ""}`}>
      <div className="rev-card-top">
        <div className="rev-card-name">
          <div className="txt24">{review.name}</div>
          <div className="txt18 op50 sz14-mob">{review.role}</div>
        </div>
        <div className="txt36 op50">{review.number}</div>
      </div>
      <div className="txt24 light sz14-mob">{review.quote}</div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="reviews">
      <div className="container">
        <div
          data-w-id="8027d079-3995-5b83-0293-3a4c5dd18706"
          style={{ opacity: 0 }}
          className="revs-card"
        >
          <div
            data-w-id="06cc442c-6133-1f46-23be-5abcbd18d982"
            className="revs-cards-cont"
          >
            {[0, 1].map((i) => (
              <div key={i} className="revs-cards">
                {REVIEWS.map((review) => (
                  <ReviewCard key={`${i}-${review.number}`} review={review} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
