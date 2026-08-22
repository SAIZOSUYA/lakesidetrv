import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ITINERARY_ACTIVITIES } from '../data/toursData';
import { Plus, Check, Waves, Compass, Clock, DollarSign, HeartHandshake, ShieldCheck, MapPin } from 'lucide-react';
import { DoongaBoatIcon, LakesideCompassIcon } from './CustomSymbols';

export default function DoongaVoyageBuilder({ onOpenBookingWithCustom }) {
  const [selectedActivities, setSelectedActivities] = useState(['act-1', 'act-4']);

  const toggleActivity = (id) => {
    if (selectedActivities.includes(id)) {
      if (selectedActivities.length === 1) return; // keep at least 1
      setSelectedActivities(selectedActivities.filter(a => a !== id));
    } else {
      setSelectedActivities([...selectedActivities, id]);
    }
  };

  const activeItems = ITINERARY_ACTIVITIES.filter(act => selectedActivities.includes(act.id));

  // Calculate dynamic experience pace score
  const avgVibe = activeItems.length > 0
    ? Math.round(activeItems.reduce((acc, curr) => acc + curr.vibeScore, 0) / activeItems.length)
    : 85;

  const estimatedCost = activeItems.length * 45 + 50;

  return (
    <section id="itinerary-builder" className="py-14 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs tracking-widest uppercase text-[#1E5399] font-bold mb-3 sm:mb-4 shadow-sm">
            <DoongaBoatIcon className="w-5 h-5" />
            <span>Custom Trip Planner</span>
          </div>
          <h2 className="font-serif-custom text-2xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Build Your Custom Pokhara Day
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-600 font-sans-custom font-normal text-xs sm:text-lg">
            Pick your favorite lake activities, mountain sunrise spots, and lakeside stopovers to design your ideal itinerary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Activity Selection List */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#1E5399] font-bold mb-4 flex items-center justify-between">
              <span>Select Activities to Include</span>
              <span className="text-slate-500 font-normal">({selectedActivities.length} selected)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {ITINERARY_ACTIVITIES.map((act) => {
                const isSelected = selectedActivities.includes(act.id);
                return (
                  <div
                    key={act.id}
                    onClick={() => toggleActivity(act.id)}
                    className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white border-[#1E5399] shadow-md ring-2 ring-[#1E5399]/20 scale-[1.01]'
                        : 'bg-white/80 hover:bg-white border-slate-200 text-slate-700 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1E5399] border border-blue-100">
                        {act.category} • {act.duration}
                      </span>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                        isSelected
                          ? 'bg-[#C5283D] border-[#C5283D] text-white shadow-sm'
                          : 'border-slate-300 text-transparent'
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h4 className="font-serif-custom text-base font-bold text-slate-900 mb-1">
                      {act.name}
                    </h4>

                    <p className="text-xs text-slate-600 font-sans-custom leading-relaxed font-normal mb-3">
                      {act.desc}
                    </p>

                    <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100">
                      <span className="text-[#1E5399] font-semibold">Activity Rating: {act.vibeScore}%</span>
                      <span className="text-slate-500">Included Oar Transfer</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Itinerary Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-serif-custom text-xl font-bold text-slate-900">Your Tailored Itinerary</h3>
                  <p className="text-xs text-slate-500 font-medium">Personalized Pokhara Tour Flow</p>
                </div>
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1E5399]">
                  <Waves className="w-5 h-5" />
                </div>
              </div>

              {/* Dynamic Experience Pace Gauge */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between text-xs text-slate-700 mb-2">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Compass className="w-4 h-4 text-[#1E5399]" />
                    Custom Experience Pace
                  </span>
                  <span className="font-bold text-[#1E5399] font-serif-custom text-sm">{avgVibe}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-[#1E5399] via-blue-500 to-[#C5283D] h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${avgVibe}%` }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-2 italic font-medium">
                  {avgVibe > 92 ? '🌿 Relaxed & Unhurried Day Flow' : '🌄 Balanced Sightseeing & Activity'}
                </p>
              </div>

              {/* Selected List Preview */}
              <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                <span className="text-[11px] uppercase tracking-wider text-[#1E5399] font-bold block">
                  Chosen Flow Sequence:
                </span>
                {activeItems.map((item, idx) => (
                  <div key={item.id} className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#1E5399] text-white flex items-center justify-center text-[10px] font-bold">
                        {idx + 1}
                      </span>
                      <span className="font-semibold text-slate-900">{item.name}</span>
                    </div>
                    <span className="text-slate-500 font-mono text-[10px]">{item.duration}</span>
                  </div>
                ))}
              </div>

              {/* Price & Summary */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider block">Custom Voyage Rates</span>
                  <span className="text-xl font-bold text-[#1E5399] font-serif-custom">
                    Inquire for Quote
                  </span>
                </div>

                <a
                  href="tel:+9779856028626"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#1E5399] to-[#C5283D] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  Inquire Custom Itinerary
                </a>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Free rescheduling up to 24h before sunrise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
