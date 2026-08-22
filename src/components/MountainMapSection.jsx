import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { MachhapuchhrePeakIcon, AnimatedLocationPinIcon } from './CustomSymbols';

export default function MountainMapSection() {
  const [selectedSpot, setSelectedSpot] = useState('machhapuchhre');

  const SPOTS = [
    {
      id: 'machhapuchhre',
      name: 'Machhapuchhre (Fishtail Peak)',
      elevation: '6,993 meters',
      category: 'Sacred Mountain Peak',
      desc: 'The sacred, unclimbed mountain peak that mirrors directly onto Phewa Lake every clear sunrise.',
      distance: '28 km North of Lakeside',
      bestTime: '6:00 AM - 8:30 AM',
      image: '/images/phewa_lake_hero.jpg',
      badgeBg: 'bg-[#1E5399] text-white',
      highlights: ['Sacred Unclimbed Peak', '360° Dawn Reflections', 'Fishtail Ridge Panorama']
    },
    {
      id: 'sarangkot',
      name: 'Sarangkot Viewpoint',
      elevation: '1,600 meters',
      category: 'Paragliding & Dawn Ridge',
      desc: 'World-renowned takeoff point for tandem paragliding with 360-degree views of Dhaulagiri & Annapurna.',
      distance: '25-min jeep ride from Lakeside',
      bestTime: '5:30 AM Dawn Launch',
      image: '/images/paragliding_pokhara.jpg',
      badgeBg: 'bg-[#C5283D] text-white',
      highlights: ['Top 3 Global Soar Spot', 'Annapurna Dawn Launch', '4x4 Scenic Ridge Drive']
    },
    {
      id: 'stupas',
      name: 'World Peace Pagoda',
      elevation: '1,100 meters',
      category: 'Spiritual Stupa Ridge',
      desc: 'Perched on Anadu Hill overlooking the lake valley. Features golden Buddha statues and silent meditation paths.',
      distance: '45-min boat + forest hike',
      bestTime: '4:30 PM Golden Sunset',
      image: '/images/world_peace_pagoda.jpg',
      badgeBg: 'bg-emerald-600 text-white',
      highlights: ['Silent Forest Hike', 'Golden Buddha Statues', 'Sunset Meditation Path']
    },
    {
      id: 'lakeside',
      name: 'Phewa Lakeside Promenade',
      elevation: '742 meters',
      category: 'Cafes & Oar Docks',
      desc: 'Vibrant lakeside street featuring rooftop organic cafes, live acoustic music, and colorful wooden doongas.',
      distance: 'Heart of Pokhara Tourism',
      bestTime: 'All Day & Twilight',
      image: '/images/lakeside_cafe.jpg',
      badgeBg: 'bg-amber-600 text-white',
      highlights: ['Rooftop Organic Cafes', 'Wooden Doonga Docks', 'Live Acoustic Twilight']
    }
  ];

  const activeSpotData = SPOTS.find(s => s.id === selectedSpot);

  return (
    <section className="min-h-screen flex flex-col justify-center py-4 sm:py-8 lg:py-12 bg-slate-50 relative border-t border-slate-200 overflow-hidden screen-snap-section">
      {/* Topographic Elevation Map Background Contour Lines */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#1E5399_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-32 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-2 sm:mb-4">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] tracking-widest uppercase text-[#1E5399] font-bold mb-1 shadow-sm">
            <span>Landmarks & Elevation Guide</span>
          </div>
          <h2 className="font-section-title text-xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Explore Pokhara Valley Landmarks
          </h2>
          <p className="mt-1 sm:mt-1.5 text-slate-600 font-elegant-body font-normal text-xs sm:text-sm">
            From mirror waters at 742m up to sacred snow peaks topping nearly 7,000m.
          </p>
        </div>

        {/* Spot Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-4">
          {SPOTS.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setSelectedSpot(spot.id)}
              className={`p-2.5 sm:p-3.5 rounded-2xl text-left transition-all duration-300 ${
                selectedSpot === spot.id
                  ? 'bg-white/95 backdrop-blur-xl border-2 border-[#1E5399] shadow-md ring-2 ring-[#1E5399]/20 scale-[1.01]'
                  : 'glass-card hover:bg-white/90 border-slate-200 text-slate-700 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[8.5px] sm:text-[9.5px] font-bold px-1.5 py-0.5 rounded ${spot.badgeBg}`}>
                  {spot.elevation}
                </span>
              </div>
              <h3 className="font-serif-custom font-bold text-slate-900 text-xs sm:text-sm leading-tight">
                {spot.name}
              </h3>
              <span className="text-[9.5px] sm:text-[10.5px] text-slate-500 font-medium block mt-0.5 truncate">
                {spot.category}
              </span>
            </button>
          ))}
        </div>

        {/* Active Spot Feature Box - Expanded Space Utilization */}
        <motion.div
          key={selectedSpot}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-panel rounded-3xl p-4 sm:p-6 lg:p-7 border border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center"
        >
          <div className="lg:col-span-6 space-y-2.5 sm:space-y-3.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1E5399] text-[11px] font-bold border border-blue-100 self-start">
              <span>{activeSpotData.distance}</span>
            </div>

            <h3 className="font-serif-custom text-lg sm:text-2xl font-bold text-slate-900">
              {activeSpotData.name}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal font-elegant-body">
              {activeSpotData.desc}
            </p>

            {/* Experience Highlights Pill Strip */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {activeSpotData.highlights.map((hl, idx) => (
                <span key={idx} className="text-[9.5px] sm:text-[10.5px] px-2.5 py-0.5 rounded-md bg-blue-50/80 text-[#1E5399] font-medium border border-blue-100/80">
                  {hl}
                </span>
              ))}
            </div>

            <div className="pt-2 sm:pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
              <div className="grid grid-cols-2 gap-3 flex-1 text-xs">
                <div>
                  <span className="text-slate-400 font-normal uppercase block text-[9px] sm:text-[9.5px] tracking-wider">Altitude</span>
                  <span className="text-slate-900 font-bold text-xs sm:text-sm">{activeSpotData.elevation}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-normal uppercase block text-[9px] sm:text-[9.5px] tracking-wider">Best Viewing Time</span>
                  <span className="text-slate-900 font-bold text-xs sm:text-sm">{activeSpotData.bestTime}</span>
                </div>
              </div>

              <a
                href="#packages"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#1E5399] to-[#C5283D] text-white text-[10.5px] font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all shrink-0"
              >
                View Journeys
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 h-44 sm:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-md border border-slate-200">
            <img
              src={activeSpotData.image}
              alt={activeSpotData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
