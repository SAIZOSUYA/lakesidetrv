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
      badge: '99.8% Serenity Index'
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
    <section id="why-pokhara" className="relative py-20 sm:py-28 bg-slate-50/60 overflow-hidden">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/80 text-xs tracking-widest uppercase text-[#1E5399] font-bold mb-4 shadow-sm">
            <div className="w-5 h-5 rounded-full bg-[#1E5399]/10 border border-[#1E5399]/30 flex items-center justify-center shrink-0">
              <HimalayanStarIcon className="w-3.5 h-3.5" color="#1E5399" />
            </div>
            <span>The Pokhara Magic</span>
          </div>
          <h2 className="font-serif-custom text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Why Pokhara Captures the Soul
          </h2>
          <p className="mt-4 text-slate-600 font-sans-custom font-normal text-base sm:text-lg leading-relaxed">
            Where high alpine majesty gently meets serene waters, creating an unhurried haven unlike anywhere else in the Himalayas.
          </p>
        </div>

        {/* Interactive Glassmorphic Feature Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {HIGHLIGHTS.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-white/95 backdrop-blur-xl border-2 border-[#1E5399] shadow-xl shadow-blue-500/10 scale-[1.02]'
                    : 'glass-card hover:bg-white/90 border-slate-200 text-slate-700 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-gradient-to-r from-[#1E5399] to-[#C5283D] text-white shadow-md' : 'bg-blue-50 text-[#1E5399]'}`}>
                    <IconComponent className="w-5 h-5" color={isActive ? "#FFFFFF" : "#1E5399"} />
                  </div>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${isActive ? 'bg-red-50 text-[#C5283D] border border-red-200' : 'bg-slate-100 text-slate-500'}`}>
                    {item.badge}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif-custom text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans-custom mt-1">
                    {item.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Glassmorphic Display Box */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-panel rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden"
        >
          {/* Content Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50/90 border border-blue-200 text-[#1E5399] text-xs font-semibold">
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>{currentTab.stats}</span>
            </div>

            <h3 className="font-serif-custom text-2xl sm:text-4xl font-bold text-slate-900 leading-snug">
              {currentTab.title}
            </h3>

            <p className="text-slate-600 font-sans-custom leading-relaxed text-base sm:text-lg font-normal">
              {currentTab.desc}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-slate-200/80 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Local Oarsmen & Pilots</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#C5283D]" />
                <span>Eco-Conscious Tourism</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#packages"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1E5399] via-[#2563EB] to-[#C5283D] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <span>Explore Related Journeys</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Graphic Right Column Visual */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl group min-h-[260px] sm:min-h-[320px] border border-white/60">
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
            <div className="absolute bottom-4 left-4 right-4 glass-badge p-3.5 rounded-xl border border-white/40 text-xs text-slate-900 font-bold shadow-lg">
              <span className="text-[#C5283D]">{currentTab.badge}</span> • Pokhara Valley, Nepal
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
