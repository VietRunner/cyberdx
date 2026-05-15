import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import logoIcon from '../assets/logo-icon.png';

const NAV_LINKS = ['Home', 'Services', 'Work', 'Process', 'Pricing'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16"
      style={{ zIndex: 50 }}
    >
      <div
        className="flex items-center justify-between py-3"
        style={{
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img
            src={logoIcon}
            alt="Studio Logo"
            className="h-12 w-12 object-contain rounded-xl"
            style={{ height: '48px', width: '48px' }}
          />
        </a>

        {/* Center nav pill — desktop only */}
        <div
          className="liquid-glass hidden md:flex items-center gap-1 rounded-full px-1.5 py-1"
        >
          {NAV_LINKS.map((link) =>
            link === 'Get Started' ? null : (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors rounded-full font-body"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {link}
              </a>
            )
          )}
          <a
            href="#contact"
            className="flex items-center gap-1 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium hover:bg-white/90 transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Get Started
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <a
            href="#contact"
            className="flex items-center gap-1 bg-white text-black rounded-full px-4 py-2 text-sm font-medium"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Get Started
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}
