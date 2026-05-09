interface Review {
  name: string;
  role: string;
  quote: string;
  topMarginClass?: string;
}

const REVIEWS: Review[] = [
  {
    name: "Huynh Quang Trung",
    role: "Founder",
    quote:
      "Defines product vision, strategic direction, and long-term roadmap. Ensures the platform evolves in line with the mission of building a strong running community.",
  },
  {
    name: "Nguyen Minh Anh Hao",
    role: "CEO",
    quote:
      "Leads business operations, execution strategy, and ecosystem growth. Aligns product, community, and partnerships to drive sustainable development.",
    topMarginClass: "mar-top1",
  },
  {
    name: "Nguyen Huu Nhat",
    role: "Backend Tech Lead",
    quote:
      "Designs and maintains backend systems, APIs, and data architecture. Ensures scalability, performance, and reliability across the platform.",
    topMarginClass: "mar-top3",
  },
  {
    name: "Le Trung Kien",
    role: "Frontend Tech Lead",
    quote:
      "Leads frontend development with a focus on usability, responsiveness, and seamless user experience for all platform users.",
    topMarginClass: "mar-top4",
  },
  {
    name: "Pham Van Khanh",
    role: "Full-stack Tech Lead",
    quote:
      "Oversees end-to-end feature development and system integration. Ensures code quality, consistency, and effective delivery across the platform.",
    topMarginClass: "mar-top1",
  },
  {
    name: "Tran Phi Tuong",
    role: "Full-stack Developer",
    quote:
      "Implements features across frontend and backend. Supports integration, debugging, and continuous improvement to maintain stable product delivery.",
    topMarginClass: "mar-top2",
  },
];

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const displayNumber = String(index + 1).padStart(2, "0");

  return (
    <article className={`dx-review-card${review.topMarginClass ? ` dx-review-${review.topMarginClass}` : ""}`}>
      <div className="dx-review-card-top">
        <div className="dx-review-card-name">
          <div className="txt36 op50">{displayNumber}</div>
          <div className="txt24">{review.name}</div>
          <div className="txt18 op50 sz14-mob">{review.role}</div>
        </div>
      </div>
      <div className="txt24 light sz14-mob">{review.quote}</div>
    </article>
  );
}

export default function ReviewsSection() {
  return (
    <section className="reviews">
      <div className="container">
        <div className="dx-reviews-shell">
          <div className="dx-reviews-track">
            {[0, 1].map((i) => (
              <div key={i} className="dx-reviews-group" aria-hidden={i === 1}>
                {REVIEWS.map((review, reviewIndex) => (
                  <ReviewCard key={`${i}-${review.name}`} review={review} index={reviewIndex} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
