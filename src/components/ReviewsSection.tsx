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
    name: "Huỳnh Quang Trung",
    role: "Founder",
    quote:
      '"Since working with CyberDX, we saw the bugs complaints of our main test client almost disappear. The agency is also capable of advising us on technical points. They are not simply executants, they are very involved in our product. Definitely great ethics, transparency, and honest collaboration. As well as great professionalism and competence"',
  },
  {
    number: "02",
    name: "Nguyễn Minh Anh Hào",
    role: "CEO",
    quote:
      '"I\'ve worked with dev teams across the globe. CyberDX has a unique ability to think through the problems and offer alternatives/solutions that others simply don\'t. I trust the MD team to help us solve complex problems both quickly and efficiently"',
    topMarginClass: "mar-top1",
  },
  {
    number: "03",
    name: "Nguyễn Hữu Nhất",
    role: "Backend Tech Lead",
    quote:
      '"CyberDX delivered user stories and features that aligned with the client\'s specifications, ensuring a successful partnership. They led a seamless process by promptly responding to needs and concerns. Their flexibility, clear communication, and ability to work with minimal oversight stood out."',
    topMarginClass: "mar-top3",
  },
  {
    number: "04",
    name: "Lê Trung Kiên",
    role: "Frontend Tech Lead",
    quote: "Driving modern frontend experiences with usability, clarity, and maintainable delivery.",
    topMarginClass: "mar-top4",
  },
  {
    number: "05",
    name: "Phạm Văn Khánh",
    role: "Full-stack Tech Lead",
    quote: "Building robust, scalable full-stack solutions that bridge product vision and technical execution.",
    topMarginClass: "mar-top1",
  },
  {
    number: "06",
    name: "Trần Phi Tường",
    role: "Full-stack Developer",
    quote: "Delivering end-to-end features with clean code, fast iteration, and a focus on real user impact.",
    topMarginClass: "mar-top2",
  }
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
