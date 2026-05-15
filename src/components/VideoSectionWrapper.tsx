import { useEffect, useRef } from 'react';

interface VideoSectionWrapperProps {
  hlsSrc: string;
  children: React.ReactNode;
  desaturate?: boolean;
  className?: string;
  staticFrame?: boolean;
}

export default function VideoSectionWrapper({
  hlsSrc,
  children,
  desaturate = false,
  className = '',
  staticFrame = false,
}: VideoSectionWrapperProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<any>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    const initHls = async () => {
      try {
        const { default: Hls } = await import('hls.js');

        if (cancelled) return;

        if (Hls.isSupported()) {
          const hls = new Hls({ autoStartLoad: true, startLevel: -1 });
          hlsRef.current = hls;
          hls.loadSource(hlsSrc);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            if (cancelled || staticFrame) return;
            video.play().catch(() => {});
          });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = hlsSrc;
          if (!staticFrame) {
            video.play().catch(() => {});
          }
        }
      } catch {
        // hls.js not available — fallback
        video.src = hlsSrc;
        if (!staticFrame) {
          video.play().catch(() => {});
        }
      }
    };

    let holdFirstFrame: (() => void) | null = null;
    if (staticFrame) {
      holdFirstFrame = () => {
        video.currentTime = 0;
        video.pause();
      };
      video.addEventListener('loadeddata', holdFirstFrame);
    }

    initHls();

    return () => {
      cancelled = true;
      if (holdFirstFrame) {
        video.removeEventListener('loadeddata', holdFirstFrame);
      }
      hlsRef.current?.destroy();
      hlsRef.current = null;
    };
  }, [hlsSrc, staticFrame]);

  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* HLS video background */}
      <video
        ref={videoRef}
        autoPlay={!staticFrame}
        loop={!staticFrame}
        muted
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none',
          filter: desaturate ? 'saturate(0)' : undefined,
        }}
      />

      {/* Top gradient fade — black to transparent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to bottom, #000, transparent)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Bottom gradient fade — transparent to black */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to top, #000, transparent)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Content sits on top */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
}
