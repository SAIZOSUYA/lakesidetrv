import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TOUR_PACKAGES } from '../data/toursData';
import { Star, Clock, CheckCircle2, ChevronRight, X, MapPin, Calendar } from 'lucide-react';
import { MachhapuchhrePeakIcon } from './CustomSymbols';
import Tilt3DCard from './Tilt3DCard';

export default function CuratedJourneysSection({ onSelectPackage, onOpenBooking, searchFilter }) {
  const [selectedVibe, setSelectedVibe] = useState('All');
  const [activePackageModal, setActivePackageModal] = useState(null);
  const carouselRef = useRef(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const VIBE_FILTERS = ['All', 'Serene & Restorative', 'Car & Overland', 'Adventure & Panorama', 'Culture & Discovery', 'Trek & Recharge'];

  // Combine tab selection with searchFilter from Hero
  const effectiveFilter = searchFilter?.activity && searchFilter.activity !== 'All'
    ? searchFilter.activity
    : selectedVibe;

  const filteredPackages = effectiveFilter === 'All'
    ? TOUR_PACKAGES
    : TOUR_PACKAGES.filter(p => p.vibe.toLowerCase().includes(effectiveFilter.toLowerCase()) || effectiveFilter.toLowerCase().includes(p.vibe.toLowerCase()));

  // Handle manual scroll on mobile to update dot indicators
  const handleScroll = () => {
    if (carouselRef.current && filteredPackages.length > 0) {
      const container = carouselRef.current;
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.scrollWidth / filteredPackages.length;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex !== mobileIndex && newIndex < filteredPackages.length) {
        setMobileIndex(newIndex);
      }
    }
  };

  const scrollToSlide = (index) => {
    setMobileIndex(index);
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = container.scrollWidth / filteredPackages.length;
      container.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="min-h-screen flex flex-col justify-center py-4 sm:py-8 lg:py-12 bg-slate-100/70 relative screen-snap-section overflow-hidden w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 w-full overflow-hidden"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-2 sm:mb-4 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[10px] sm:text-[11px] tracking-widest uppercase text-[#C5283D] font-bold mb-1 shadow-sm">
            <span>Signature Experiences</span>
          </div>
          <h2 className="font-section-title text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Curated Pokhara Journeys
          </h2>
          <p className="mt-1 sm:mt-1.5 text-slate-600 font-elegant-body font-normal text-[11px] xs:text-xs sm:text-sm">
            Thoughtfully crafted itineraries designed for slow travel, sunrise reflections, and alpine adventure.
          </p>
        </div>

        {/* Filter Tabs - Horizontally Scrollable on Mobile with Zero Margin Break */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1.5 sm:pb-0 sm:flex-wrap sm:justify-center w-full mb-2.5 sm:mb-4 scrollbar-none">
          {VIBE_FILTERS.map((vibe) => (
            <button
              key={vibe}
              onClick={() => {
                setSelectedVibe(vibe);
                setMobileIndex(0);
              }}
              className={`shrink-0 whitespace-nowrap px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[9.5px] xs:text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedVibe === vibe
                  ? 'bg-gradient-to-r from-[#1E5399] to-[#C5283D] text-white shadow-md'
                  : 'bg-white hover:bg-slate-200/80 text-slate-700 border border-slate-200 shadow-sm'
              }`}
            >
              {vibe}
            </button>
          ))}
        </div>

        {/* Package Container: Mobile Horizontal Swipe Carousel & Desktop Grid */}
        <div ref={carouselRef} onScroll={handleScroll} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3 md:grid md:grid-cols-2 md:gap-4 lg:gap-5 md:overflow-visible w-full py-1">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="w-[86vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink md:snap-align-none h-full">
              <Tilt3DCard tiltIntensity={8}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="glass-card glass-card-hover rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between border border-slate-200/90 shadow-lg group preserve-3d h-full"
                >
                {/* Image & Badge Header */}
                <div className="relative h-28 xs:h-32 sm:h-36 overflow-hidden">
                  <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-black/20"></div>

                  {/* Badge Top Left */}
                  <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 flex items-center gap-1 sm:gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-[#C5283D] text-white text-[8.5px] xs:text-[9px] sm:text-[9.5px] font-bold tracking-wider uppercase shadow-md">
                      {pkg.badge}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#1E5399] text-[8.5px] xs:text-[9px] sm:text-[9.5px] font-bold border border-slate-200">
                      {pkg.vibe}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-2.5 sm:left-2.5 sm:right-2.5 text-white">
                    <div className="flex items-center gap-2 text-[9px] xs:text-[9.5px] sm:text-[10px] text-slate-200 mb-0.5">
                      <span className="font-medium">
                        {pkg.duration}
                      </span>
                      <span className="text-amber-300 font-bold">
                        {pkg.rating} ({pkg.reviewsCount} reviews)
                      </span>
                    </div>
                    <h3 className="font-serif-custom text-sm xs:text-base sm:text-lg font-bold text-white leading-snug drop-shadow-md">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-2.5 xs:p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-1.5 xs:space-y-2 sm:space-y-2.5 bg-white">
                  <p className="text-slate-600 text-[10px] xs:text-[10.5px] sm:text-[11.5px] leading-snug font-normal font-elegant-body line-clamp-2">
                    {pkg.overview}
                  </p>

                  {/* Highlights List - Horizontal Compact Pill Strip */}
                  <div className="pt-1 sm:pt-1.5 border-t border-slate-100 flex flex-wrap gap-1">
                    {pkg.highlights.map((hl, i) => (
                      <span key={i} className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                        {hl}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-1.5 sm:pt-2 flex flex-row items-center justify-between gap-1.5 border-t border-slate-100">
                    <button
                      onClick={() => setActivePackageModal(pkg)}
                      className="text-[9.5px] xs:text-[10.5px] font-bold text-[#1E5399] hover:text-[#C5283D] flex items-center gap-1 py-1 px-1.5 xs:px-2 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
                    >
                      <span>View Day Itinerary</span>
                    </button>

                    <a
                      href="tel:+9779856028626"
                      className="px-2.5 xs:px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#1E5399] to-[#C5283D] text-white text-[9.5px] xs:text-[10px] font-semibold uppercase tracking-wider shadow-sm hover:shadow-md transition-all text-center whitespace-nowrap shrink-0"
                    >
                      Inquire Journey
                    </a>
                  </div>
                </div>
              </motion.div>
            </Tilt3DCard>
          </div>
          ))}
        </div>

        {/* Mobile Auto-Slide Indicators */}
        {filteredPackages.length > 1 && (
          <div className="flex md:hidden items-center justify-center gap-1.5 mt-2.5">
            {filteredPackages.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  mobileIndex === i ? 'w-5 bg-[#C5283D]' : 'w-1.5 bg-slate-300'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Itinerary Preview Modal */}
        <AnimatePresence>
          {activePackageModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 bg-slate-900/70 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto p-5 sm:p-8 shadow-2xl relative text-slate-900"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActivePackageModal(null)}
                  className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 rounded-full bg-slate-100 hover:bg-slate-200"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-xs text-[#C5283D] font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4" />
                  {activePackageModal.duration} • {activePackageModal.vibe}
                </div>

                <h3 className="font-serif-custom text-xl sm:text-3xl font-bold mb-3 text-slate-900 pr-8">
                  {activePackageModal.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm mb-5 font-normal">
                  {activePackageModal.overview}
                </p>

                <div className="space-y-3 sm:space-y-4 mb-6">
                  <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-[#1E5399] font-bold">
                    Day-by-Day Journey Flow
                  </h4>

                  {activePackageModal.itineraryDays.map((dayItem) => (
                    <div key={dayItem.day} className="bg-slate-50 p-3.5 sm:p-4 rounded-2xl border border-slate-200/70">
                      <div className="flex items-center gap-2 text-[#1E5399] text-xs font-bold mb-1">
                        <Calendar className="w-3.5 h-3.5 text-[#C5283D]" />
                        <span>Day {dayItem.day}: {dayItem.title}</span>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed font-normal">
                        {dayItem.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50/70 p-3.5 sm:p-4 rounded-2xl border border-blue-200 mb-6">
                  <span className="text-[11px] sm:text-xs font-bold text-[#1E5399] uppercase tracking-wider block mb-2">
                    What's Included:
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {activePackageModal.included.map((inc, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-full bg-white text-[11px] sm:text-xs font-medium text-slate-700 border border-slate-200">
                        ✓ {inc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-[11px] sm:text-xs text-slate-500 block uppercase tracking-wider">Package Rates</span>
                    <span className="text-lg sm:text-xl font-bold text-[#1E5399] font-serif-custom">
                      Custom Quote / On Request
                    </span>
                  </div>

                  <a
                    href="tel:+9779856028626"
                    className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-gradient-to-r from-[#1E5399] to-[#C5283D] text-white text-xs font-semibold uppercase tracking-wider shadow-md"
                  >
                    Inquire Journey Details
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
