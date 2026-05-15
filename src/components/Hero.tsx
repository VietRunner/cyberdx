import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';
import BlurText from './BlurText';

const PARTNERS = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma'];

const HERO_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        height: '1000px',
        overflow: 'visible',
        background: '#000',
      }}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          left: 0,
          top: '20%',
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.05)',
          zIndex: 0,
        }}
      />

      {/* Bottom gradient fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '300px',
          background: 'linear-gradient(to bottom, transparent, black)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '150px',
          paddingLeft: '24px',
          paddingRight: '24px',
          minHeight: '1000px',
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8"
        >
          <span
            className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            New
          </span>
          <span
            className="text-white/80 text-xs pr-3"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Introducing AI-powered web design.
          </span>
        </motion.div>

        {/* Heading */}
        <h1
          className="text-center mb-6"
          style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            color: 'white',
            lineHeight: '0.8',
            maxWidth: '720px',
            letterSpacing: '-4px',
            margin: '0 0 24px',
          }}
        >
          <BlurText
            text="The Website Your Brand Deserves"
            delay={100}
            direction="bottom"
            animateBy="words"
          />
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-white max-w-md mb-10"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
            lineHeight: '1.5',
            margin: '0 0 40px',
          }}
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-4 mb-auto"
          style={{ marginBottom: 'auto' }}
        >
          <a
            href="#contact"
            id="hero-get-started"
            className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-white text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Get Started
            <ArrowUpRight size={16} />
          </a>
          <button
            className="flex items-center gap-2 text-white text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'var(--font-body)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <Play size={16} fill="white" />
            Watch the Film
          </button>
        </motion.div>

        {/* Partners bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          style={{
            marginTop: 'auto',
            paddingTop: '64px',
            paddingBottom: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            position: 'absolute',
            bottom: '40px',
            left: 0,
            right: 0,
          }}
        >
          <div className="liquid-glass rounded-full px-4 py-1.5">
            <span
              className="text-white/50 text-xs"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Trusted by the teams behind
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {PARTNERS.map((name) => (
              <span
                key={name}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
                  color: 'white',
                  opacity: 0.7,
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
