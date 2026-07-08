interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  hashtags: string;
  postUrl: string;
}

export const BLOG_POSTS: BlogPost[] = [];


export default function BlogSection() {
  const displayedPosts = BLOG_POSTS;
  return (
    <section id="blog" className="dx-blog">
      <div className="container">
        <div className="sec-cont">
          <div className="sec-title-card">
            <h2 className="txt24 medium h100">Blog &amp; News</h2>
          </div>

          {displayedPosts.length === 0 ? (
            <p className="dx-blog-empty">Updates will be published here soon.</p>
          ) : (
            <div className="dx-blog-grid">
              {displayedPosts.map((post) => (
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
          )}

          {displayedPosts.length > 0 && <div className="mt-12 flex justify-center">
            <button
              onClick={() => {
                document.dispatchEvent(new CustomEvent("dx:open-detail", { detail: "blog" }));
              }}
              className="inline-flex items-center gap-2 bg-[#d85b6a] text-white rounded-full px-8 py-3.5 text-xs font-black uppercase tracking-widest hover:bg-[#e26c7b] shadow-[0_6px_20px_rgba(216,91,106,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-white/10"
            >
              View All Articles
            </button>
          </div>}
        </div>
      </div>
    </section>
  );
}
