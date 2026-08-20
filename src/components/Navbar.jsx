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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 sm:pt-4">
        <div
          className={`mx-auto rounded-full bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl px-5 sm:px-7 py-2.5 transition-all duration-300 flex items-center justify-between ${
            scrolled ? 'shadow-2xl py-2' : ''
          }`}
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group shrink-0 mr-4 lg:mr-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-slate-200 shadow-md group-hover:border-[#C5283D] group-hover:scale-105 transition-all duration-300 bg-white shrink-0">
              <img
                src="/logo.png"
                alt="Lakeside Travels Logo"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif-custom text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#C5283D] transition-colors duration-300 leading-tight">
                Lakeside Travels
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#1E5399] font-sans-custom font-extrabold">
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
            className="md:hidden p-2 text-slate-800 hover:text-[#C5283D]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto px-4 mt-2">
          <div className="bg-white/98 backdrop-blur-xl rounded-3xl border border-slate-200 px-6 py-6 transition-all shadow-2xl">
            <div className="flex flex-col space-y-4 text-base font-bold text-slate-900">
              <a
                href="#why-pokhara"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C5283D]"
              >
                Why Pokhara
              </a>
              <a
                href="#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C5283D]"
              >
                Curated Journeys
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C5283D]"
              >
                Services
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C5283D]"
              >
                Visual Gallery
              </a>
              <div className="pt-4 border-t border-slate-200">
                <a
                  href="#packages"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1E5399] to-[#C5283D] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md"
                >
                  Explore Journeys
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
