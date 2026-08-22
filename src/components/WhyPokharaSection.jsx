import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Coffee, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { DoongaBoatIcon, MachhapuchhrePeakIcon, ParaglideSoarIcon, HimalayanStarIcon } from './CustomSymbols';

export default function WhyPokharaSection() {
  const [activeTab, setActiveTab] = useState('lake');

  const HIGHLIGHTS = [
    {
      id: 'lake',
      icon: DoongaBoatIcon,
      title: 'Mirror Water & Wooden Doongas',
      tagline: 'Nepal\'s iconic calm reflections',
      desc: 'Unlike bustling high-altitude pass routes, Phewa Lake offers still morning waters that reflect Machhapuchhre (Fishtail) with surreal clarity. Glide on wooden boats with local oarsmen.',
      stats: '6.5 sq km of tranquil waters',
      badge: 'Serene Atmosphere'
    },
    {
      id: 'air',
      icon: ParaglideSoarIcon,
      title: 'World-Class Thermal Flying',
      tagline: 'Sarangkot paragliding haven',
      desc: 'Pokhara is globally ranked among the top 3 paragliding destinations. High thermals allow smooth tandem flights with 360-degree Annapurna snow caps right in front of you.',
      stats: '1,600m Sarangkot altitude',
      badge: 'Top 3 Global Soar Spot'
    },
    {
      id: 'peaks',
      icon: MachhapuchhrePeakIcon,
      title: 'Closest High Himalayas',
      tagline: '8,000m peaks at your doorstep',
      desc: 'No treacherous long climbs needed to see giants. Annapurna I, Dhaulagiri, and Machhapuchhre tower directly above the lake valley, creating breathtaking daily vistas.',
      stats: '3 Major 8,000m summits viewable',
      badge: 'Front-Row Mountain View'
    },
    {
      id: 'culture',
      icon: Coffee,
      title: 'Lakeside Coffee & Slow Living',
      tagline: 'Terracotta gardens & organic fare',
      desc: 'Experience Pokhara\'s vibrant cafe lifestyle. Sip single-origin shade-grown Himalayan coffee, enjoy organic garden breakfasts, and listen to acoustic evening lakeside sessions.',
      stats: '40+ Specialty Lakeside Cafes',
      badge: 'Slow Travel Capital'
    }
  ];

  const currentTab = HIGHLIGHTS.find(h => h.id === activeTab);

  return (
    <section id="why-pokhara" className="relative min-h-screen flex flex-col justify-center py-8 sm:py-12 md:py-16 bg-slate-50/60 overflow-hidden screen-snap-section">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/80 text-[11px] tracking-widest uppercase text-[#1E5399] font-bold mb-1.5 shadow-sm">
            <span>Discover Pokhara</span>
          </div>
          <h2 className="font-section-title text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Why Pokhara Captures the Soul
          </h2>
          <p className="mt-1.5 sm:mt-2 text-slate-600 font-elegant-body font-normal text-xs sm:text-base leading-relaxed">
            Where high alpine majesty gently meets serene waters, creating an unhurried haven unlike anywhere else in the Himalayas.
          </p>
        </div>

        {/* Interactive Feature Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3.5 mb-4 sm:mb-5">
          {HIGHLIGHTS.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-2.5 sm:p-3.5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-white/95 backdrop-blur-xl border-2 border-[#1E5399] shadow-md shadow-blue-500/10 scale-[1.01]'
                    : 'glass-card hover:bg-white/90 border-slate-200 text-slate-700 shadow-sm'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5 sm:mb-2">
                  <span className={`text-[8.5px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${isActive ? 'bg-red-50 text-[#C5283D] border border-red-200' : 'bg-slate-100 text-slate-500'}`}>
                    {item.badge}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif-custom text-xs sm:text-base font-bold text-slate-900 leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-[9.5px] sm:text-xs text-slate-500 font-sans-custom mt-0.5 line-clamp-1">
                    {item.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Display Box */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-panel rounded-3xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center relative overflow-hidden"
        >
          {/* Content Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5 sm:space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/80 text-[10px] sm:text-[11px] font-bold text-[#1E5399] tracking-wide shadow-sm self-start">
              <span>{currentTab.stats}</span>
            </div>

            <h3 className="font-serif-custom text-lg sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-snug">
              {currentTab.title}
            </h3>

            <p className="text-slate-600 font-elegant-body leading-relaxed text-xs sm:text-sm font-normal">
              {currentTab.desc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-5 border-t border-slate-200/80 text-[11px] sm:text-xs text-slate-600 font-medium">
              <div>
                <span>Verified Local Oarsmen & Pilots</span>
              </div>
              <div>
                <span>Eco-Conscious Tourism</span>
              </div>
            </div>

            <div className="pt-1">
              <a
                href="#packages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#1E5399] via-[#2563EB] to-[#C5283D] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
              >
                <span>Explore Related Journeys</span>
              </a>
            </div>
          </div>

          {/* Graphic Right Column Visual */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg group h-40 sm:h-52 lg:h-64 border border-white/60">
            <img
              src={
                activeTab === 'lake'
                  ? '/images/phewa_lake_hero.jpg'
                  : activeTab === 'air'
                  ? '/images/paragliding_pokhara.jpg'
                  : activeTab === 'peaks'
                  ? '/images/world_peace_pagoda.jpg'
                  : '/images/lakeside_cafe.jpg'
              }
              alt={currentTab.title}
              className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-2.5 left-2.5 right-2.5 glass-badge p-2.5 rounded-xl border border-white/40 text-[10px] sm:text-[11px] text-slate-900 font-bold shadow-md truncate">
              <span className="text-[#C5283D]">{currentTab.badge}</span> • Pokhara Valley, Nepal
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
