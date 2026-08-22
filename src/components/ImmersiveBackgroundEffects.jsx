import React, { useEffect, useState } from 'react';

export default function ImmersiveBackgroundEffects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only attach mousemove listener on desktop/devices with a fine pointer (mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    let ticking = false;
    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePos({
            x: (e.clientX / window.innerWidth - 0.5) * 60,
            y: (e.clientY / window.innerHeight - 0.5) * 60,
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden hidden md:block">
      {/* 1. Dynamic Interactive Glassmorphic Spotlight Follower */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#1E5399]/18 via-[#2563EB]/12 to-[#C5283D]/14 blur-[130px] transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`,
        }}
      />

      {/* 2. Glassmorphic Light Beam Ribbons - Top Right to Bottom Left */}
      <div className="absolute -top-40 right-10 w-[700px] h-[350px] bg-gradient-to-r from-white/25 via-[#1E5399]/15 to-transparent rounded-full blur-[110px] transform -rotate-12 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-1/2 -left-40 w-[600px] h-[300px] bg-gradient-to-r from-[#C5283D]/15 via-amber-400/12 to-transparent rounded-full blur-[120px] transform rotate-45 animate-pulse" style={{ animationDuration: '10s' }}></div>

      {/* 3. Glass Prism Light Accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-sky-400/10 rounded-full blur-[100px] border border-white/20"></div>
      <div className="absolute top-2/5 -right-20 w-[500px] h-[500px] bg-[#C5283D]/12 rounded-full blur-[140px]"></div>
      <div className="absolute -bottom-20 left-1/3 w-[550px] h-[550px] bg-amber-400/10 rounded-full blur-[130px]"></div>

      {/* 4. Subtle Frosted Glass Linear Light Refraction Bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
    </div>
  );
}
