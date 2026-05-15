interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  hashtags: string;
  postUrl: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "provera",
    title: "CyberDX x AI Provera Announce Strategic Partnership",
    description:
      "CyberDX officially announces its partnership with AI Provera to develop an AI-powered Learning Management System (LMS). The project aims to build a comprehensive digital learning ecosystem where content can be created, distributed, and continuously optimized within a single platform, connecting instructors, learners, and organizations. By combining CyberDX's expertise in technology and scalable systems with AI Provera's strengths in artificial intelligence and product innovation, the platform is designed to be flexible, scalable, and adaptable to evolving training needs in the digital era. This collaboration marks a significant step forward in advancing technology-driven solutions for education and knowledge development.",
    image: "/cyberdx&aip.png",
    hashtags: "#CyberDX #AIProvera #LMS #AI #EdTech #Partnership",
    postUrl: "https://www.facebook.com/share/p/1BFBBNxCsS/",
  },
  {
    id: "announcement",
    title: "CyberDX Announcement",
    description:
      "CyberDX is pleased to announce a partnership with a client in the creative and technology sector to develop and implement an internal operations system. The project focuses on building a platform that standardizes processes, enhances management efficiency, and optimizes operations through a flexible, scalable technology solution. With strong expertise in system development and infrastructure, CyberDX is committed to delivering a stable, secure solution aligned with the client's long-term growth strategy. We appreciate the trust placed in us and look forward to creating sustainable value through this collaboration.",
    image: "/cyberdx&vistaX.png",
    hashtags: "#CyberDX #Technology #Partnership #DigitalTransformation",
    postUrl: "https://www.facebook.com/share/p/1Dyfi8P98g/",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="dx-blog">
      <div className="container">
        <div className="sec-cont">
          <div className="sec-title-card">
            <h2 className="txt24 medium h100">Blog</h2>
          </div>

          <div className="dx-blog-grid">
            {BLOG_POSTS.map((post) => (
              <article key={post.title} className={`dx-blog-card dx-blog-card--${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className={`dx-blog-image dx-blog-image--${post.id}`}
                  loading="lazy"
                />
                <div className="dx-blog-content">
                  <h3 className="dx-blog-title">{post.title}</h3>
                  <p className="dx-blog-description">{post.description}</p>
                  <p className="dx-blog-hashtags">{post.hashtags}</p>
                  <a
                    href={post.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dx-blog-btn"
                  >
                    Read Full Post
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
