import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Waves, Sparkles, Wind } from 'lucide-react';
import { LakesideCompassIcon, HimalayanStarIcon } from './CustomSymbols';

export default function WaterRippleHero() {
  const canvasRef = useRef(null);

  // Interactive Liquid Water Ripple Effect on HTML5 Canvas overlay
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Ripple objects array
    let ripples = [];

    const addRipple = (x, y) => {
      ripples.push({
        x,
        y,
        radius: 0,
        maxRadius: Math.random() * 80 + 40,
        alpha: 0.6,
        speed: Math.random() * 1.5 + 1.2,
      });
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Add ripple intermittently to avoid clutter
      if (Math.random() > 0.4) {
        addRipple(x, y);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Add gentle automatic ambient ripples over the lake area
    const ambientInterval = setInterval(() => {
      if (ripples.length < 12) {
        const x = Math.random() * width;
        const y = height * 0.45 + Math.random() * (height * 0.4);
        addRipple(x, y);
      }
    }, 1200);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < ripples.length; i++) {
        const r = ripples[i];
        r.radius += r.speed;
        r.alpha -= 0.008;

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          i--;
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(197, 40, 61, ${r.alpha * 0.75})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner soft blue reflection ring
        ctx.beginPath();
        ctx.arc(r.x, r.y, Math.max(0, r.radius - 8), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(30, 83, 153, ${r.alpha * 0.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      clearInterval(ambientInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-36 sm:pt-40 pb-24">
      {/* Background Image with Reflection & Mist Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/phewa_lake_hero.jpg"
          alt="Phewa Lake Sunrise with Machhapuchhre Reflection"
          className="w-full h-full object-cover object-center scale-105 filter brightness-95 contrast-105 transform transition-transform duration-10000 hover:scale-110"
        />
        {/* Dark Gradient Overlay for Crisp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-slate-900/70"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-slate-900/30 to-slate-950/80"></div>
      </div>

      {/* Interactive Water Ripple Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 w-full h-full cursor-crosshair"
      />

      {/* Floating Animated Paraglider Asset Visual */}
      <motion.div
        initial={{ x: -100, y: 80, opacity: 0 }}
        animate={{ x: 250, y: -20, opacity: 0.9 }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-36 left-12 z-20 pointer-events-none hidden lg:flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs text-sky-200 shadow-xl"
      >
        <Wind className="w-4 h-4 text-[#C5283D]" />
        <span>Sarangkot Breeze Drift • Paraglider 1,600m</span>
      </motion.div>

      {/* Hero Content Box */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white">
        {/* Feature Tag Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm tracking-widest uppercase text-amber-200 font-sans-custom mb-6 shadow-2xl font-bold"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Serenity & Adventure • Pokhara, Nepal</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif-custom text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.08] text-balance drop-shadow-2xl text-white"
        >
          Where Still Waters <br />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-[#F59E0B] drop-shadow-md">
            Mirror Endless Peaks
          </span>
        </motion.h1>

        {/* Evocative Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-100 font-sans-custom leading-relaxed font-normal drop-shadow-md"
        >
          Immerse yourself in Pokhara's unhurried rhythm — wooden boat rides across Phewa Lake at dawn, Sarangkot sunrise flights, and misty lakeside coffee culture.
        </motion.p>

        {/* Call to Action Buttons & Quick Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#packages"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#1E5399] via-[#2563EB] to-[#C5283D] text-xs font-bold uppercase tracking-wider text-white shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <LakesideCompassIcon className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" color="#FDE68A" />
            <span>Explore Signature Journeys</span>
            <div className="absolute -inset-1 rounded-full border border-[#C5283D]/50 animate-ripple-pulse pointer-events-none"></div>
          </a>

          <a
            href="#why-pokhara"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/35 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 shadow-lg"
          >
            <Waves className="w-4 h-4 text-teal-200" />
            <span>Explore The Lake Story</span>
          </a>
        </motion.div>

        {/* Vibe Filter Quick Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 hidden sm:flex items-center justify-center gap-3 text-xs text-slate-200 font-sans-custom"
        >
          <span className="text-slate-300 font-semibold">Popular vibes:</span>
          {["Dawn Boat Trip", "Sarangkot Sunrise", "Stupa Walk", "Terracotta Cafes"].map((vibe, idx) => (
            <a
              key={idx}
              href="#packages"
              className="px-3.5 py-1.5 rounded-full bg-white/20 hover:bg-white/35 border border-white/25 transition-colors text-white font-medium shadow-sm"
            >
              {vibe}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Ripple Section Divider Curve */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          className="w-full h-16 sm:h-24 text-slate-50 fill-current preserve-3d"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,70L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
