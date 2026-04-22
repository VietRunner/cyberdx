export default function FooterSection() {
  return (
    <section id="contacts" className="dx-footer">
      {/* Top row */}
      <div className="dx-footer-top">

        {/* Col 1: Logo */}
        <div className="dx-footer-col dx-footer-col-logo">
          <img src="/logo.png" alt="MasterDynamix" className="dx-footer-logo" />
        </div>

        {/* Col 2: CTA */}
        <div className="dx-footer-col dx-footer-col-cta">
          <div className="dx-footer-cta-title">LET'S CONNECT</div>
          <p className="dx-footer-cta-text">
            If you have any software related issues or questions, feel free to
            Get in touch with us. We are always here to help you!
          </p>
          <a href="/form" className="dx-footer-btn">CONTACT US</a>
        </div>

        {/* Col 3: Menu */}
        <div className="dx-footer-col dx-footer-col-menu">
          <div className="dx-footer-col-label">MENU</div>
          <a href="#about" className="dx-footer-link">ABOUT</a>
          <a href="#services" className="dx-footer-link">SERVICES</a>
          <a href="#cases" className="dx-footer-link">PROJECTS</a>
        </div>

        {/* Col 4: Contact */}
        <div className="dx-footer-col dx-footer-col-contact">
          <div className="dx-footer-col-label">CONTACT</div>
          <a href="https://www.cyberdx.tech" target="_blank" className="dx-footer-link dx-footer-link-ul">WEBSITE</a>
          <a href="tel:+84773679908" className="dx-footer-link dx-footer-link-ul">PHONE</a>
        </div>

      </div>

      {/* Bottom row */}
      <div className="dx-footer-bottom">
        <div className="dx-footer-bottom-left">
          <div className="dx-footer-clutch">
            <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js" />
            <div className="clutch-widget" data-url="https://widget.clutch.co"
              data-widget-type="9" data-height="50" data-nofollow="true"
              data-expandifr="true" data-scale="100" data-clutchcompany-id="1183937" />
          </div>
        </div>

        <div className="dx-footer-bottom-mid">
          <div className="dx-footer-email-label">Email us</div>
          <a href="mailto:sale@cyberdx.tech" className="dx-footer-email">SALE@CYBERDX.TECH</a>
        </div>

        <div className="dx-footer-bottom-center">
          <a href="#top" className="dx-footer-backtop">BACK TO TOP</a>
        </div>

        <div className="dx-footer-bottom-right">
          <span className="dx-footer-copy">© CyberDX 2026</span>
          <span className="dx-footer-rights">All rights reserved</span>
          <a href="/policy" className="dx-footer-policy">CYBERDX.TECH</a>
        </div>
      </div>
    </section>
  );
}
