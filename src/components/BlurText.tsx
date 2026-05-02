import { useEffect, useRef } from 'react';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  direction?: 'top' | 'bottom';
  animateBy?: 'words' | 'letters';
}

export default function BlurText({
  text,
  className = '',
  delay = 200,
  direction = 'bottom',
  animateBy = 'words',
}: BlurTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const parts = animateBy === 'words' ? text.split(' ') : text.split('');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spans = container.querySelectorAll<HTMLSpanElement>('.blur-text-part');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            spans.forEach((span, i) => {
              span.style.transitionDelay = `${i * delay}ms`;
              span.classList.add('blur-text-visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <>
      <style>{`
        .blur-text-part {
          display: inline-block;
          opacity: 0;
          filter: blur(10px);
          transform: ${direction === 'bottom' ? 'translateY(50px)' : 'translateY(-50px)'};
          transition:
            opacity 0.35s ease,
            filter 0.35s ease,
            transform 0.35s ease;
          will-change: opacity, filter, transform;
        }
        .blur-text-visible {
          opacity: 1 !important;
          filter: blur(0px) !important;
          transform: translateY(0) !important;
        }
      `}</style>
      <span ref={containerRef} className={className}>
        {parts.map((part, i) => (
          <span key={i} className="blur-text-part">
            {part}
            {animateBy === 'words' && i < parts.length - 1 ? '\u00A0' : ''}
          </span>
        ))}
      </span>
    </>
  );
}
