import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Sparkles } from 'lucide-react';
import { MachhapuchhrePeakIcon } from './CustomSymbols';

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
      badgeBg: 'bg-[#1E5399] text-white'
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
      badgeBg: 'bg-[#C5283D] text-white'
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
      badgeBg: 'bg-emerald-600 text-white'
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
      badgeBg: 'bg-amber-600 text-white'
    }
  ];

  const activeSpotData = SPOTS.find(s => s.id === selectedSpot);

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs tracking-widest uppercase text-[#1E5399] font-bold mb-4 shadow-sm">
            <div className="w-5 h-5 rounded-full bg-[#1E5399]/10 border border-[#1E5399]/30 flex items-center justify-center shrink-0">
              <MachhapuchhrePeakIcon className="w-3.5 h-3.5" color="#1E5399" />
            </div>
            <span>Landmarks & Elevation Guide</span>
          </div>
          <h2 className="font-serif-custom text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Explore Pokhara Valley Landmarks
          </h2>
          <p className="mt-4 text-slate-600 font-sans-custom font-normal text-base sm:text-lg">
            From mirror waters at 742m up to sacred snow peaks topping nearly 7,000m, discover Pokhara's geographic wonder.
          </p>
        </div>

        {/* Spot Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {SPOTS.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setSelectedSpot(spot.id)}
              className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 ${
                selectedSpot === spot.id
                  ? 'bg-white/95 backdrop-blur-xl border-2 border-[#1E5399] shadow-xl ring-2 ring-[#1E5399]/20 scale-[1.02]'
                  : 'glass-card hover:bg-white/90 border-slate-200 text-slate-700 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${spot.badgeBg}`}>
                  {spot.elevation}
                </span>
                <MapPin className={`w-4 h-4 ${selectedSpot === spot.id ? 'text-[#C5283D]' : 'text-slate-400'}`} />
              </div>
              <h3 className="font-serif-custom font-bold text-slate-900 text-base">
                {spot.name}
              </h3>
              <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                {spot.category}
              </span>
            </button>
          ))}
        </div>

        {/* Active Spot Feature Box */}
        <motion.div
          key={selectedSpot}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1E5399] text-xs font-bold border border-blue-100">
              <Navigation className="w-3.5 h-3.5 text-[#C5283D]" />
              <span>{activeSpotData.distance}</span>
            </div>

            <h3 className="font-serif-custom text-3xl font-bold text-slate-900">
              {activeSpotData.name}
            </h3>

            <p className="text-slate-600 text-base leading-relaxed font-normal">
              {activeSpotData.desc}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
              <div>
                <span className="text-slate-400 font-normal uppercase block text-[10px] tracking-wider">Altitude</span>
                <span className="text-slate-900 font-bold text-sm">{activeSpotData.elevation}</span>
              </div>
              <div>
                <span className="text-slate-400 font-normal uppercase block text-[10px] tracking-wider">Best Viewing Time</span>
                <span className="text-slate-900 font-bold text-sm">{activeSpotData.bestTime}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <img
              src={activeSpotData.image}
              alt={activeSpotData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
