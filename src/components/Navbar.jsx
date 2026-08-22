import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { LakesideCompassIcon } from './CustomSymbols';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled shadow toggle
      if (currentScrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide on scroll down, reveal on scroll up
      if (currentScrollY <= 15) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling Down -> Hide Header
        setIsVisible(false);
        setMobileMenuOpen(false); // close mobile menu on scroll down
      } else if (currentScrollY < lastScrollY) {
        // Scrolling Up -> Reveal Header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      {/* Main Navbar: Floating Luxury Glass Capsule */}
      <div className="w-full max-w-[1536px] mx-auto px-3 sm:px-8 lg:px-12 pt-2 sm:pt-4">
        <div
          className={`w-full mx-auto rounded-full bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl px-4 sm:px-7 py-2 sm:py-2.5 transition-all duration-300 flex items-center justify-between ${
            scrolled ? 'shadow-2xl py-1.5 sm:py-2' : ''
          }`}
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-2 sm:space-x-3 group shrink-0 mr-1 sm:mr-4 lg:mr-8 min-w-0">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-slate-200 shadow-md group-hover:border-[#C5283D] group-hover:scale-105 transition-all duration-300 bg-white shrink-0">
              <img
                src="/logo.png"
                alt="Lakeside Travels Logo"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col text-left truncate">
              <span className="font-serif-custom text-sm sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#C5283D] transition-colors duration-300 leading-tight truncate">
                Lakeside Travels
              </span>
              <span className="text-[7.5px] sm:text-[9px] tracking-[0.18em] uppercase text-[#1E5399] font-sans-custom font-extrabold truncate">
                Pokhara • Nepal
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 text-xs lg:text-sm font-bold text-slate-800">
            <a href="#why-pokhara" className="hover:text-[#C5283D] transition-colors py-1">
              Why Pokhara
            </a>
            <a href="#services" className="hover:text-[#C5283D] transition-colors py-1">
              Services
            </a>
            <a href="#vehicle-fleet" className="hover:text-[#C5283D] transition-colors py-1">
              Car Fleet
            </a>
            <a href="#packages" className="hover:text-[#C5283D] transition-colors py-1">
              Journeys
            </a>
            <a href="#gallery" className="hover:text-[#C5283D] transition-colors py-1">
              Gallery
            </a>
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center space-x-3 shrink-0 ml-4">
            <a
              href="#packages"
              className="relative group overflow-hidden rounded-full bg-gradient-to-r from-[#1E5399] via-[#2563EB] to-[#C5283D] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <LakesideCompassIcon className="w-3.5 h-3.5" color="#FDE68A" />
              <span>Explore Journeys</span>
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-800 hover:text-[#C5283D] rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto px-3 sm:px-4 mt-2">
          <div className="bg-white/98 backdrop-blur-2xl rounded-3xl border border-slate-200/90 px-5 py-5 transition-all shadow-2xl space-y-4">
            <div className="flex flex-col space-y-3.5 text-sm font-bold text-slate-900">
              <a
                href="#why-pokhara"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C5283D] border-b border-slate-100 flex items-center justify-between"
              >
                <span>Why Pokhara</span>
                <span className="text-[10px] text-[#1E5399] uppercase font-mono">Highlights</span>
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C5283D] border-b border-slate-100 flex items-center justify-between"
              >
                <span>Travel Desk & Services</span>
                <span className="text-[10px] text-[#1E5399] uppercase font-mono">Full Desk</span>
              </a>
              <a
                href="#vehicle-fleet"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C5283D] border-b border-slate-100 flex items-center justify-between"
              >
                <span>Official Car Fleet</span>
                <span className="text-[10px] text-[#C5283D] uppercase font-mono">EV & 4x4</span>
              </a>
              <a
                href="#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C5283D] border-b border-slate-100 flex items-center justify-between"
              >
                <span>Curated Journeys</span>
                <span className="text-[10px] text-[#1E5399] uppercase font-mono">Packages</span>
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C5283D] border-b border-slate-100 flex items-center justify-between"
              >
                <span>Visual Photo Journal</span>
                <span className="text-[10px] text-amber-600 uppercase font-mono">Gallery</span>
              </a>
              <div className="pt-2">
                <a
                  href="#packages"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1E5399] via-[#2563EB] to-[#C5283D] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md active:scale-95 transition-transform"
                >
                  <LakesideCompassIcon className="w-4 h-4" color="#FDE68A" />
                  <span>Explore Signature Journeys</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
