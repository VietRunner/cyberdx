const mobMenuStyle: React.CSSProperties = {
  display: "none",
  WebkitTransform:
    "translate3d(100vw, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
  MozTransform:
    "translate3d(100vw, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
  msTransform:
    "translate3d(100vw, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
  transform:
    "translate3d(100vw, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
};

export default function MobileMenu() {
  return (
    <div style={mobMenuStyle} className="mob-menu">
      <div className="mov-nav-links">
        <a href="#about" className="mob-nav-link w-inline-block">
          <div className="txt18">About</div>
          <div aria-label="Image placeholder" className="image-placeholder mob-arr-ico" />
        </a>
        <a href="#services" className="mob-nav-link w-inline-block">
          <div className="txt18">Services</div>
          <div aria-label="Image placeholder" className="image-placeholder mob-arr-ico" />
        </a>
        <a href="#blog" className="mob-nav-link w-inline-block">
          <div className="txt18">Blog</div>
          <div aria-label="Image placeholder" className="image-placeholder mob-arr-ico" />
        </a>
        <a href="#cases" className="mob-nav-link w-inline-block">
          <div className="txt18">Projects</div>
          <div aria-label="Image placeholder" className="image-placeholder mob-arr-ico" />
        </a>
        <a href="#contacts" className="mob-nav-link w-inline-block">
          <div className="txt18">Contact</div>
          <div aria-label="Image placeholder" className="image-placeholder mob-arr-ico" />
        </a>
      </div>
      <a href="/form" className="btn nav-btn w-inline-block">
        <div className="txt24">LET'S CONNECT</div>
      </a>
    </div>
  );
}
