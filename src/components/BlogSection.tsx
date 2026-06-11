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
      "CyberDX officially announces its partnership with AI Provera to develop an AI-powered Learning Management System (LMS). The project aims to build a comprehensive digital learning ecosystem where content can be created, distributed, and continuously optimized within a single platform, connecting instructors, learners, and organizations.",
    image: "/cyberdx&aip.png",
    hashtags: "#CyberDX #AIProvera #LMS #AI #EdTech #Partnership",
    postUrl: "https://www.facebook.com/share/p/1BFBBNxCsS/",
  },
  {
    id: "announcement",
    title: "CyberDX Announcement",
    description:
      "CyberDX is pleased to announce a partnership with a client in the creative and technology sector to develop and implement an internal operations system. The project focuses on building a platform that standardizes processes, enhances management efficiency, and optimizes operations.",
    image: "/cyberdx&vistaX.png",
    hashtags: "#CyberDX #Technology #Partnership #DigitalTransformation",
    postUrl: "https://www.facebook.com/share/p/1Dyfi8P98g/",
  },
  {
    id: "ai-camera-deployment-fruit-drying-export-manufacturing",
    title: "AI Camera Deployment for a Fruit Drying & Export Manufacturing Plant",
    description: "Library | Case Study | Solutions | Industrial Manufacturing ...",
    image: "https://cxview.ai/wp-content/uploads/2026/03/ChatGPT-Image-Mar-26-2026-01_43_43-PM.png",
    hashtags: "#CXVIEW #AI #Manufacturing #SmartFactory",
    postUrl: "/ai-camera-deployment-fruit-drying-export-manufacturing/"
  },
  {
    id: "our-first-christmas-together",
    title: "Our First Christmas Together, Building More Than Just Work",
    description: "At CXVIEW, culture is built in moments like these. ...",
    image: "https://cxview.ai/wp-content/uploads/2025/12/CXVIEW-1st-Christmas.jpg",
    hashtags: "#CXVIEW #TeamCulture #Family",
    postUrl: "/our-first-christmas-together/"
  },
  {
    id: "unlocking-intelligence-ai-video-analytics",
    title: "Unlocking Intelligence with AI Video Analytics",
    description: "Library | Blog | Solutions | AI Video Analytics ...",
    image: "https://cxview.ai/wp-content/uploads/2025/09/Intrustion-Detection-Solution.jpg",
    hashtags: "#CXVIEW #AI #VideoAnalytics",
    postUrl: "/unlocking-intelligence-ai-video-analytics/"
  },
  {
    id: "how-ai-video-analytics-customer-experience",
    title: "How AI Video Analytics Improve Customer Experience",
    description: "Library | Blog | Solutions | Retails ...",
    image: "https://cxview.ai/wp-content/uploads/2025/09/1756709212105.png",
    hashtags: "#CXVIEW #AI #VideoAnalytics",
    postUrl: "/how-ai-video-analytics-customer-experience/"
  },
  {
    id: "the-biggest-challenge-modern-manufacturing",
    title: "The Biggest Challenge in Modern Manufacturing: Intelligent Security and Visibility",
    description: "Library | Blog | Solutions | Industrial Manufacturing ...",
    image: "https://cxview.ai/wp-content/uploads/2025/09/case-study-7x-roi-capital.webp",
    hashtags: "#CXVIEW #AI #Manufacturing #SmartFactory",
    postUrl: "/the-biggest-challenge-modern-manufacturing/"
  },
  {
    id: "ai-video-analytics-smart-surveillence-operational-efficiency",
    title: "AI Video Analytics in Smart Surveillance & Operational Efficiency",
    description: "Library | Blog | Solutions | Industrial Manufacturing ...",
    image: "https://cxview.ai/wp-content/uploads/2025/09/smart-factory-digital-manufacturing.webp",
    hashtags: "#CXVIEW #AI #VideoAnalytics",
    postUrl: "/ai-video-analytics-smart-surveillence-operational-efficiency/"
  },
  {
    id: "cxview-new-headquarters-hcmc",
    title: "CXVIEW Rebrands and Opens New Headquarters in HCMC",
    description: "NEW SPACE. NEW ENERGY. NEW RESPONSIBILITIES. The new office in HCMC serves as CXVIEW’s sole headquarters, marking a major milestone in the company’s journey toward innovation and g...",
    image: "https://cxview.ai/wp-content/uploads/2025/09/z7111644702053_e6c48d7a6ea7d2a401cf4d4b7fd01ba2.jpg",
    hashtags: "#CXVIEW #AI #VideoAnalytics",
    postUrl: "/cxview-new-headquarters-hcmc/"
  },
  {
    id: "top-trends-in-retail-ai-automation",
    title: "Top Trends in Retail Technology 2025: AI, Automation, and Customer Insights",
    description: "Library | Blog | Solutions | Retails ...",
    image: "https://cxview.ai/wp-content/uploads/2025/09/360_F_1568827215_TmyClZpoK3aY8AnPjRnMenKZInakONW6.jpg",
    hashtags: "#CXVIEW #AI #Retail #ComputerVision",
    postUrl: "/top-trends-in-retail-ai-automation/"
  },
  {
    id: "retail-chain-ai-video-analytics",
    title: "Decoding Retail Chain Success with AI Video Analytics",
    description: "Library | Blog | Solutions | Retails ...",
    image: "https://cxview.ai/wp-content/uploads/2025/09/Cannibalization-.png",
    hashtags: "#CXVIEW #AI #Retail #ComputerVision",
    postUrl: "/retail-chain-ai-video-analytics/"
  },
  {
    id: "ai-video-analytics-safer-factories",
    title: "AI Video Analytics for Safer Factories",
    description: "Library | Blog | Solutions | Industrial Manufacturing ...",
    image: "https://cxview.ai/wp-content/uploads/2025/09/warehouse-interior-1-scaled.webp",
    hashtags: "#CXVIEW #AI #VideoAnalytics",
    postUrl: "/ai-video-analytics-safer-factories/"
  },
  {
    id: "message-from-the-board-of-directors",
    title: "Message from CXVIEW Board of Directors",
    description: "Library | News &#038; Events ...",
    image: "https://cxview.ai/wp-content/uploads/2025/09/Avatar-FB-scaled.png",
    hashtags: "#CXVIEW #AI #VideoAnalytics",
    postUrl: "/message-from-the-board-of-directors/"
  },
  {
    id: "important-use-cases-computer-vision-retail",
    title: "10 Important Use Cases of Computer Vision in Retail in 2025",
    description: "Library | Blog | Solutions | Retails ...",
    image: "https://cxview.ai/wp-content/uploads/2025/09/Gemini_Generated_Image_te2fwrte2fwrte2f.png",
    hashtags: "#CXVIEW #AI #Retail #ComputerVision",
    postUrl: "/important-use-cases-computer-vision-retail/"
  },
  {
    id: "how-visionai-defines-workplace-safety",
    title: "How Vision AI Defines Workplace Safety and Danger Zone Detection",
    description: "Library | Blog | Solutions | Industrial Manufacturing ...",
    image: "https://cxview.ai/wp-content/uploads/2025/09/1-1.webp",
    hashtags: "#CXVIEW #AI #VideoAnalytics",
    postUrl: "/how-visionai-defines-workplace-safety/"
  },
  {
    id: "modern-logistics-ai-video-analytics",
    title: "Modern Logistics: How AI Video Analytics Improves Efficiency and Lowers Risk",
    description: "Library | Case Study | Solutions | Warehouse &#038; Logistics ...",
    image: "https://cxview.ai/wp-content/uploads/2025/09/warehouse-interior-1-scaled.webp",
    hashtags: "#CXVIEW #AI #VideoAnalytics",
    postUrl: "/modern-logistics-ai-video-analytics/"
  },
  {
    id: "ai-vision-in-animal-feed-manufacturing",
    title: "From High-Risk to High-Yield: AI Vision in Animal Feed Manufacturing",
    description: "Library | Case Study | Solutions | Industrial Manufacturing ...",
    image: "https://cxview.ai/wp-content/uploads/2025/09/smart-factory-digital-manufacturing.webp",
    hashtags: "#CXVIEW #AI #Manufacturing #SmartFactory",
    postUrl: "/ai-vision-in-animal-feed-manufacturing/"
  },
  {
    id: "retail-foot-traffic-analytics-data-driven",
    title: "Retail Foot Traffic Analytics: The Foundation for Data-Driven",
    description: "Library | Case Study | Solutions | Retail ...",
    image: "https://cxview.ai/wp-content/uploads/2025/09/Retail-Foot-Traffic-Analytics-the-foundation-of-data-driven-case-study.jpg",
    hashtags: "#CXVIEW #AI #Retail #ComputerVision",
    postUrl: "/retail-foot-traffic-analytics-data-driven/"
  },
  {
    id: "ai-video-analytics-retail-chain",
    title: "AI Video Analytics for Retail: The Gifts from Nature Retail Chain",
    description: "Library | Case Study | Solutions | Retail ...",
    image: "https://cxview.ai/wp-content/uploads/2025/09/The-Gifts-from-Nature-Retail-Chain-case-study.jpg",
    hashtags: "#CXVIEW #AI #Retail #ComputerVision",
    postUrl: "/ai-video-analytics-retail-chain/"
  },
];


export default function BlogSection() {
  return (
    <section id="blog" className="dx-blog">
      <div className="container">
        <div className="sec-cont">
          <div className="sec-title-card">
            <h2 className="txt24 medium h100">Blog &amp; News</h2>
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
                  {post.postUrl.startsWith("/") ? (
                    <button
                      onClick={() => {
                        const slug = post.postUrl.replace(/^\/|\/$/g, "");
                        document.dispatchEvent(new CustomEvent("dx:open-detail", { detail: slug }));
                      }}
                      className="dx-blog-btn cursor-pointer bg-transparent border-0 p-0 text-left"
                    >
                      Read Full Article
                    </button>
                  ) : (
                    <a
                      href={post.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dx-blog-btn"
                    >
                      Read Full Post
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
