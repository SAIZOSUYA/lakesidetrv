import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TOUR_PACKAGES } from '../data/toursData';
import { Star, Clock, CheckCircle2, ChevronRight, X, MapPin, Calendar } from 'lucide-react';
import { MachhapuchhrePeakIcon } from './CustomSymbols';
import Tilt3DCard from './Tilt3DCard';

export default function CuratedJourneysSection({ onSelectPackage, onOpenBooking, searchFilter }) {
  const [selectedVibe, setSelectedVibe] = useState('All');
  const [activePackageModal, setActivePackageModal] = useState(null);

  const VIBE_FILTERS = ['All', 'Serene & Restorative', 'Car & Overland', 'Adventure & Panorama', 'Culture & Discovery', 'Trek & Recharge'];

  // Combine tab selection with searchFilter from Hero
  const effectiveFilter = searchFilter?.activity && searchFilter.activity !== 'All'
    ? searchFilter.activity
    : selectedVibe;

  const filteredPackages = effectiveFilter === 'All'
    ? TOUR_PACKAGES
    : TOUR_PACKAGES.filter(p => p.vibe.toLowerCase().includes(effectiveFilter.toLowerCase()) || effectiveFilter.toLowerCase().includes(p.vibe.toLowerCase()));

  return (
    <section id="packages" className="py-24 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs tracking-widest uppercase text-[#C5283D] font-bold mb-4 shadow-sm">
            <div className="w-5 h-5 rounded-full bg-[#C5283D]/10 border border-[#C5283D]/30 flex items-center justify-center shrink-0">
              <MachhapuchhrePeakIcon className="w-3.5 h-3.5" color="#C5283D" />
            </div>
            <span>Signature Experiences</span>
          </div>
          <h2 className="font-serif-custom text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Curated Pokhara Journeys
          </h2>
          <p className="mt-4 text-slate-600 font-sans-custom font-normal text-base sm:text-lg">
            Thoughtfully crafted itineraries designed for immersive slow travel, sunrise mountain reflection, and alpine adventure.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {VIBE_FILTERS.map((vibe) => (
            <button
              key={vibe}
              onClick={() => setSelectedVibe(vibe)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedVibe === vibe
                  ? 'bg-gradient-to-r from-[#1E5399] to-[#C5283D] text-white shadow-md'
                  : 'bg-white hover:bg-slate-200/80 text-slate-700 border border-slate-200 shadow-sm'
              }`}
            >
              {vibe}
            </button>
          ))}
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPackages.map((pkg) => (
            <Tilt3DCard key={pkg.id} tiltIntensity={8}>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-slate-200/90 shadow-lg group preserve-3d h-full"
              >
              {/* Image & Badge Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.heroImage}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-black/20"></div>

                {/* Badge Top Left */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-[#C5283D] text-white text-[11px] font-bold tracking-wider uppercase shadow-md">
                    {pkg.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1E5399] text-[11px] font-bold border border-slate-200">
                    {pkg.vibe}
                  </span>
                </div>

                {/* Price Tag Top Right */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-1.5 rounded-2xl text-right shadow-md">
                  <span className="text-[10px] text-slate-500 font-sans-custom block uppercase tracking-wider">From</span>
                  <span className="text-lg font-bold text-[#1E5399] font-serif-custom">{pkg.price}</span>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-4 text-xs text-slate-200 mb-1">
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1 text-amber-300 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {pkg.rating} ({pkg.reviewsCount} reviews)
                    </span>
                  </div>
                  <h3 className="font-serif-custom text-2xl font-bold text-white leading-snug drop-shadow-md">
                    {pkg.title}
                  </h3>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 bg-white">
                <p className="text-slate-600 text-sm leading-relaxed font-normal font-sans-custom">
                  {pkg.overview}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <span className="text-xs uppercase tracking-wider text-[#1E5399] font-bold block mb-2">
                    Journey Highlights:
                  </span>
                  {pkg.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#C5283D] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-100">
                  <button
                    onClick={() => setActivePackageModal(pkg)}
                    className="text-xs font-bold text-[#1E5399] hover:text-[#C5283D] flex items-center gap-1 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <span>View Day Itinerary</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:+9779856028626"
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1E5399] to-[#C5283D] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                  >
                    Inquire Journey
                  </a>
                </div>
              </div>
            </motion.div>
          </Tilt3DCard>
          ))}
        </div>

        {/* Itinerary Preview Modal */}
        <AnimatePresence>
          {activePackageModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-slate-900"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActivePackageModal(null)}
                  className="absolute top-5 right-5 p-2 text-slate-500 hover:text-slate-900 rounded-full bg-slate-100 hover:bg-slate-200"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-xs text-[#C5283D] font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4" />
                  {activePackageModal.duration} • {activePackageModal.vibe}
                </div>

                <h3 className="font-serif-custom text-2xl sm:text-3xl font-bold mb-3 text-slate-900">
                  {activePackageModal.title}
                </h3>

                <p className="text-slate-600 text-sm mb-6 font-normal">
                  {activePackageModal.overview}
                </p>

                <div className="space-y-4 mb-6">
                  <h4 className="text-xs uppercase tracking-widest text-[#1E5399] font-bold">
                    Day-by-Day Journey Flow
                  </h4>

                  {activePackageModal.itineraryDays.map((dayItem) => (
                    <div key={dayItem.day} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
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

                <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-200 mb-6">
                  <span className="text-xs font-bold text-[#1E5399] uppercase tracking-wider block mb-2">
                    What's Included:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activePackageModal.included.map((inc, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white text-xs font-medium text-slate-700 border border-slate-200">
                        ✓ {inc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xs text-slate-500 block uppercase tracking-wider">Total Package</span>
                    <span className="text-2xl font-bold text-[#1E5399] font-serif-custom">
                      {activePackageModal.price} / person
                    </span>
                  </div>

                  <a
                    href="tel:+9779856028626"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#1E5399] to-[#C5283D] text-white text-xs font-semibold uppercase tracking-wider shadow-md"
                  >
                    Inquire Journey Details
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
