import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS } from '../data/toursData';
import { MapPin, Maximize2, X, Camera, Sparkles } from 'lucide-react';

export default function VisualJournalGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeImageModal, setActiveImageModal] = useState(null);

  const CATEGORIES = ['All', 'Lake', 'Car & Jeep', 'Adventure', 'Culture', 'Cafe'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="gallery" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs tracking-widest uppercase text-[#1E5399] font-bold mb-4">
            <Camera className="w-3.5 h-3.5 text-[#C5283D]" />
            <span>Postcards from Pokhara</span>
          </div>
          <h2 className="font-serif-custom text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Visual Journal & Reflections
          </h2>
          <p className="mt-4 text-slate-600 font-sans-custom font-normal text-base sm:text-lg">
            Real captured moments across Phewa Lake, Sarangkot ridgelines, sacred stupas, and lakeside tea spots.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#1E5399] text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveImageModal(item)}
              className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity"></div>

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-[#1E5399] font-bold border border-slate-200 shadow-sm">
                {item.category}
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-slate-800 shadow-md">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-[11px] text-amber-300 font-semibold mb-1">
                  <MapPin className="w-3 h-3 text-[#C5283D]" />
                  <span>{item.location}</span>
                </div>
                <h4 className="font-serif-custom text-lg font-bold leading-tight drop-shadow-md">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-200 font-sans-custom font-normal line-clamp-1 mt-1">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeImageModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
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

                <div className="relative h-[60vh] sm:h-[70vh]">
                  <img
                    src={activeImageModal.image}
                    alt={activeImageModal.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                </div>

                <div className="p-6 sm:p-8 bg-white border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-[#C5283D] font-bold uppercase tracking-wider mb-1">
                    <MapPin className="w-4 h-4" />
                    {activeImageModal.location}
                  </div>
                  <h3 className="font-serif-custom text-2xl font-bold mb-2 text-slate-900">
                    {activeImageModal.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-normal leading-relaxed">
                    {activeImageModal.caption}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
