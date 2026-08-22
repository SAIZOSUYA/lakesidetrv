import React from 'react';

// Realistic High-Definition Photo Badge: Fishtail Mountain Peak (Machhapuchhre)
export function MachhapuchhrePeakIcon({ className = "w-6 h-6" }) {
  return (
    <div className={`relative rounded-full overflow-hidden border border-white/90 shadow-md shrink-0 ring-1 ring-slate-200/80 ${className}`}>
      <img
        src="/images/phewa_lake_hero.jpg"
        alt="Machhapuchhre Mountain Peak"
        className="w-full h-full object-cover object-top scale-150 transform transition-transform hover:scale-175"
      />
    </div>
  );
}

// Realistic High-Definition Photo Badge: Phewa Lake Wooden Doonga Boat
export function DoongaBoatIcon({ className = "w-6 h-6" }) {
  return (
    <div className={`relative rounded-full overflow-hidden border border-white/90 shadow-md shrink-0 ring-1 ring-slate-200/80 ${className}`}>
      <img
        src="/images/phewa_lake_hero.jpg"
        alt="Phewa Lake Wooden Boat"
        className="w-full h-full object-cover object-bottom scale-125 transform transition-transform hover:scale-150"
      />
    </div>
  );
}

// Realistic High-Definition Photo Badge: Sarangkot Paragliding
export function ParaglideSoarIcon({ className = "w-6 h-6" }) {
  return (
    <div className={`relative rounded-full overflow-hidden border border-white/90 shadow-md shrink-0 ring-1 ring-slate-200/80 ${className}`}>
      <img
        src="/images/paragliding_pokhara.jpg"
        alt="Sarangkot Paragliding Flight"
        className="w-full h-full object-cover object-center transform transition-transform hover:scale-125"
      />
    </div>
  );
}

// Realistic High-Definition Photo Badge: 4x4 Scorpio & EV Fleet Vehicle
export function CarTransferIcon({ className = "w-6 h-6" }) {
  return (
    <div className={`relative rounded-full overflow-hidden border border-white/90 shadow-md shrink-0 ring-1 ring-slate-200/80 bg-slate-900 ${className}`}>
      <img
        src="/images/scorpio_official.png"
        alt="Overland 4x4 Fleet"
        className="w-full h-full object-cover object-center scale-125 transform transition-transform hover:scale-150"
      />
    </div>
  );
}

// Realistic High-Definition Photo Badge: World Peace Pagoda & Stupa
export function LakesideCompassIcon({ className = "w-6 h-6" }) {
  return (
    <div className={`relative rounded-full overflow-hidden border border-white/90 shadow-md shrink-0 ring-1 ring-slate-200/80 ${className}`}>
      <img
        src="/images/world_peace_pagoda.jpg"
        alt="Pokhara Peace Pagoda"
        className="w-full h-full object-cover object-center transform transition-transform hover:scale-125"
      />
    </div>
  );
}

// Realistic High-Definition Photo Badge: Lakeside Cafe & Promenade
export function HimalayanStarIcon({ className = "w-6 h-6" }) {
  return (
    <div className={`relative rounded-full overflow-hidden border border-white/90 shadow-md shrink-0 ring-1 ring-slate-200/80 ${className}`}>
      <img
        src="/images/lakeside_cafe.jpg"
        alt="Lakeside Pokhara Cafe"
        className="w-full h-full object-cover object-center transform transition-transform hover:scale-125"
      />
    </div>
  );
}

// Realistic Live Beacon Location Pin Badge
export function AnimatedLocationPinIcon({ className = "w-6 h-6" }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <span className="relative flex h-3.5 w-3.5 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C5283D] shadow-sm ring-2 ring-white"></span>
      </span>
    </div>
  );
}
