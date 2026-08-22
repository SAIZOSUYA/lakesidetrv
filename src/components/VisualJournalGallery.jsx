import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS } from '../data/toursData';
import { MapPin, Maximize2, X, Camera } from 'lucide-react';
import { AnimatedLocationPinIcon } from './CustomSymbols';

export default function VisualJournalGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeImageModal, setActiveImageModal] = useState(null);
  const galleryRef = useRef(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const CATEGORIES = ['All', 'Lake', 'Car & Jeep', 'Adventure', 'Culture', 'Cafe'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category.toLowerCase() === activeCategory.toLowerCase());

  // Handle manual scroll on mobile to update dot indicators
  const handleScroll = () => {
    if (galleryRef.current && filteredItems.length > 0) {
      const container = galleryRef.current;
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.scrollWidth / filteredItems.length;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex !== mobileIndex && newIndex < filteredItems.length) {
        setMobileIndex(newIndex);
      }
    }
  };

  const scrollToSlide = (index) => {
    setMobileIndex(index);
    if (galleryRef.current) {
      const container = galleryRef.current;
      const cardWidth = container.scrollWidth / filteredItems.length;
      container.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="min-h-screen flex flex-col justify-center py-4 sm:py-8 lg:py-12 bg-slate-50 relative screen-snap-section overflow-hidden w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 w-full overflow-hidden"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-2 sm:mb-4 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[10px] sm:text-[11px] tracking-widest uppercase text-[#1E5399] font-bold mb-1">
            <span>Postcards from Pokhara</span>
          </div>
          <h2 className="font-section-title text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Visual Journal & Reflections
          </h2>
          <p className="mt-1 sm:mt-1.5 text-slate-600 font-elegant-body font-normal text-[11px] xs:text-xs sm:text-sm">
            Real captured moments across Phewa Lake, Sarangkot ridgelines, sacred stupas, and lakeside tea spots.
          </p>
        </div>

        {/* Category Filters - Scrollable on Mobile with Zero Margin Break */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1.5 sm:pb-0 sm:flex-wrap sm:justify-center w-full mb-2.5 sm:mb-4 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setMobileIndex(0);
              }}
              className={`shrink-0 whitespace-nowrap px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[9.5px] xs:text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#1E5399] text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Container: Mobile Horizontal Swipe Carousel & Desktop Grid */}
        <div ref={galleryRef} onScroll={handleScroll} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3 md:grid md:grid-cols-4 md:gap-4 lg:gap-5 md:overflow-visible w-full py-1">
          {filteredItems.map((item) => (
            <div key={item.id} className="w-[84vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink md:snap-align-none">
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveImageModal(item)}
                className="relative h-48 xs:h-56 md:h-52 lg:h-56 rounded-2xl overflow-hidden cursor-pointer group bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity"></div>

                {/* Top Category Badge */}
                <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] sm:text-[9.5px] text-[#1E5399] font-bold border border-slate-200 shadow-sm">
                  {item.category}
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-2.5 right-2.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-slate-800 shadow-md">
                  <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>

                {/* Bottom Caption Info */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-white">
                  <div className="flex items-center gap-1 text-[9.5px] sm:text-[10px] text-amber-300 font-semibold mb-0.5">
                    <span>{item.location}</span>
                  </div>
                  <h4 className="font-serif-custom text-xs sm:text-base font-bold leading-tight drop-shadow-md">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-200 font-elegant-body font-normal line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Mobile Auto-Slide Indicators */}
        {filteredItems.length > 1 && (
          <div className="flex md:hidden items-center justify-center gap-1.5 mt-2.5">
            {filteredItems.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  mobileIndex === i ? 'w-5 bg-[#1E5399]' : 'w-1.5 bg-slate-300'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeImageModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 bg-slate-900/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl text-slate-900"
              >
                <button
                  onClick={() => setActiveImageModal(null)}
                  className="absolute top-4 right-4 z-20 p-2 text-slate-700 bg-white/90 hover:bg-white rounded-full shadow-md"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative h-[50vh] sm:h-[65vh]">
                  <img
                    src={activeImageModal.image}
                    alt={activeImageModal.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                </div>

                <div className="p-5 sm:p-8 bg-white border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-[#C5283D] font-bold uppercase tracking-wider mb-1">
                    <AnimatedLocationPinIcon className="w-4 h-4" color="#C5283D" />
                    {activeImageModal.location}
                  </div>
                  <h3 className="font-serif-custom text-xl sm:text-2xl font-bold mb-1.5 sm:mb-2 text-slate-900">
                    {activeImageModal.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    {activeImageModal.caption}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
