import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Zap, ShieldCheck, MapPin, PhoneCall, CheckCircle2, ChevronRight, Compass } from 'lucide-react';
import { CarTransferIcon, HimalayanStarIcon } from './CustomSymbols';
import Tilt3DCard from './Tilt3DCard';

export default function VehicleFleetSection() {
  const [activeVehicle, setActiveVehicle] = useState('ev-car');

  const VEHICLES = [
    {
      id: 'ev-car',
      name: 'EV Car (Chery Omoda E5 SUV)',
      tag: '100% Electric SUV',
      desc: 'Silent, smooth, zero-emission luxury SUV. Perfect for Pokhara city tours, Kathmandu highway transfers & Chitwan trips.',
      seats: '5 Seats',
      fuel: 'Electric EV',
      bestFor: 'City Tours & Highway Travel',
      image: '/images/ev_car_ai.jpg',
      badgeBg: 'bg-[#1E5399] text-white',
      color: 'text-[#1E5399]',
      border: 'border-blue-200'
    },
    {
      id: 'scorpio',
      name: 'Mahindra Scorpio 4x4 Jeep',
      tag: 'Off-Road Mountain 4x4',
      desc: 'High ground clearance & powerful 4WD. Essential for Muktinath, Mustang, Manang & high altitude rough Himalayan terrain.',
      seats: '7 Seats',
      fuel: 'Diesel 4WD',
      bestFor: 'Mustang, Manang & Muktinath',
      image: '/images/scorpio_jeep_ai.jpg',
      badgeBg: 'bg-[#C5283D] text-white',
      color: 'text-[#C5283D]',
      border: 'border-red-200'
    },
    {
      id: 'ev-van',
      name: 'EV Passenger Van (KYC V5D)',
      tag: 'Group & Family Electric Van',
      desc: 'Spacious passenger van for group travel, family vacations, airport transfers, and long distance passenger comfort.',
      seats: '9-12 Seats',
      fuel: 'Electric EV',
      bestFor: 'Family & Group Transfers',
      image: '/images/ev_van_ai.jpg',
      badgeBg: 'bg-[#F59E0B] text-slate-900',
      color: 'text-amber-600',
      border: 'border-amber-200'
    }
  ];

  const OFFICIAL_ROUTES = [
    { name: 'Pokhara - Kathmandu Transfer', tag: 'Daily Highway' },
    { name: 'Muktinath Package', tag: 'Pilgrimage 4x4' },
    { name: 'Mustang Tour', tag: 'High Himalayan' },
    { name: 'Manang Tour', tag: 'Alpine Jeep' },
    { name: 'Chitwan Jungle Safari', tag: 'Wildlife Park' },
    { name: 'Lumbini Heritage Tour', tag: 'Cultural Sightseeing' },
    { name: 'Bandipur Hilltop Tour', tag: 'Historic Village' },
    { name: 'Airport Pickup & Drop', tag: '24/7 Service' }
  ];

  return (
    <section id="vehicle-fleet" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-blue-50/40 via-white to-red-50/30 relative overflow-hidden border-t border-slate-200/80 perspective-1000">
      {/* Background Decorative Blur Orbs Matching Theme Colors (#1E5399 Blue, #C5283D Red, #F59E0B Amber) */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#1E5399]/18 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 -right-24 w-[550px] h-[550px] bg-[#C5283D]/16 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#F59E0B]/14 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#1E5399]/10 via-amber-400/8 to-[#C5283D]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#1E5399]/30 text-xs tracking-widest uppercase text-[#1E5399] font-bold mb-4 shadow-sm">
            <div className="w-5 h-5 rounded-full bg-[#1E5399]/10 border border-[#1E5399]/30 flex items-center justify-center shrink-0">
              <CarTransferIcon className="w-3.5 h-3.5" color="#1E5399" />
            </div>
            <span>Vehicle Fleet & Rental Packages</span>
          </div>

          <h2 className="font-serif-custom text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Find the Perfect Car for Rent
          </h2>
          <p className="mt-4 text-slate-600 font-sans-custom font-normal text-base sm:text-lg">
            Chauffeured luxury EV Cars, 4x4 Scorpio Jeeps & EV Passenger Vans with experienced local mountain drivers.
          </p>

          {/* Quick Pill Filter Bar with Theme Colors */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <span className="px-4 py-1.5 rounded-full bg-[#1E5399] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#1E5399]/20">
              EV CAR
            </span>
            <span className="px-4 py-1.5 rounded-full bg-[#F59E0B] text-slate-900 text-xs font-bold uppercase tracking-wider shadow-md shadow-amber-500/20">
              EV VAN
            </span>
            <span className="px-4 py-1.5 rounded-full bg-[#C5283D] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#C5283D]/20">
              SCORPIO 4X4
            </span>
            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1E5399] to-[#C5283D] text-white text-xs font-bold uppercase tracking-wider shadow-md">
              Packages Available
            </span>
          </div>
        </div>

        {/* Interactive 3D Official Vehicle Fleet Showcase with Theme Gradient Framing */}
        <Tilt3DCard tiltIntensity={6} className="mb-16">
          <div className="rounded-3xl p-[2px] bg-gradient-to-r from-[#1E5399]/40 via-white to-[#C5283D]/40 shadow-3d-lg">
            <div className="rounded-[22px] overflow-hidden glass-panel border border-white/80 p-3 sm:p-5 bg-gradient-to-br from-blue-50/70 via-white to-red-50/50 preserve-3d">
              {/* Showcase Widescreen Image Container - Perfectly Scaled & 100% Visible */}
              <div className="relative w-full aspect-[1024/564] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 group preserve-3d bg-slate-900 ring-1 ring-[#1E5399]/20">
                <img
                  src="/images/lakeside_fleet_official.jpg"
                  alt="Lakeside Travels Official Fleet - Mahindra Scorpio 4x4, Chery Omoda E5 EV SUV, KYC V5D EV Van"
                  className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-[1.01] transition-transform duration-700"
                />
              </div>

              {/* Theme Color Info Bar Below Image */}
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-100/70 via-white to-red-100/70 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md text-slate-900 translate-z-20">
                <div className="flex items-center gap-3.5 text-center md:text-left">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1E5399] to-[#C5283D] flex items-center justify-center shrink-0 text-white shadow-3d-blue">
                    <CarTransferIcon className="w-6 h-6" color="#FFFFFF" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-3.5 py-0.5 rounded-full bg-[#C5283D] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        Official Fleet
                      </span>
                      <span className="text-xs text-[#1E5399] font-bold">
                        Mahindra Scorpio 4x4 • Chery Omoda E5 EV • KYC V5D EV Van
                      </span>
                    </div>
                    <h3 className="font-serif-custom text-xl sm:text-2xl font-bold text-slate-900">
                      Luxury EV Cars, 4x4 Scorpio & EV Vans
                    </h3>
                    <p className="text-xs text-slate-600 font-sans-custom mt-0.5">
                      Inspected, insured & chauffeured by expert Pokhara highway & high-altitude drivers.
                    </p>
                  </div>
                </div>

                <a
                  href="tel:+9779856028626"
                  className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#1E5399] via-[#2563EB] to-[#C5283D] hover:shadow-3d-red text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all translate-z-30"
                >
                  <PhoneCall className="w-4 h-4 text-amber-200" />
                  <span>Call Desk: +977 985-6028626</span>
                </a>
              </div>
            </div>
          </div>
        </Tilt3DCard>

        {/* Cars Boxes Section Header */}
        <div className="mb-8">
          <span className="text-xs font-bold text-[#1E5399] uppercase tracking-wider block mb-1">
            Select Your Vehicle
          </span>
          <h3 className="font-serif-custom text-2xl sm:text-3xl font-bold text-slate-900">
            Vehicle Models & Rental Boxes
          </h3>
        </div>

        {/* Interactive 3D Vehicles Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {VEHICLES.map((veh) => {
            const isSelected = activeVehicle === veh.id;

            return (
              <Tilt3DCard key={veh.id} tiltIntensity={10}>
                <div
                  onClick={() => setActiveVehicle(veh.id)}
                  className={`glass-card glass-card-hover rounded-3xl p-5 sm:p-6 cursor-pointer flex flex-col justify-between border transition-all preserve-3d h-full ${
                    isSelected ? 'border-[#1E5399] ring-2 ring-[#1E5399]/20 shadow-3d-blue bg-white/95' : 'border-slate-200/90'
                  }`}
                >
                  <div>
                    {/* Car Box Photo Container */}
                    <div className="relative h-56 rounded-2xl overflow-hidden mb-5 bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-200/80 p-0 flex items-center justify-center shadow-md group preserve-3d">
                      <img
                        src={veh.image}
                        alt={veh.name}
                        className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Tag Badge */}
                      <span className={`absolute top-3 left-3 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md translate-z-30 ${veh.badgeBg}`}>
                        {veh.tag}
                      </span>
                    </div>

                    <h3 className="font-serif-custom text-xl font-bold text-slate-900 mb-2 translate-z-10">
                      {veh.name}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed font-normal mb-4 font-sans-custom">
                      {veh.desc}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-slate-100 text-xs font-medium text-slate-700">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Capacity:</span>
                        <span className="font-bold text-slate-900">{veh.seats}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Fuel Type:</span>
                        <span className="font-bold text-slate-900">{veh.fuel}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Ideal Routes:</span>
                        <span className="font-bold text-[#1E5399]">{veh.bestFor}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1E5399] uppercase tracking-wider">
                      Chauffeured Rental
                    </span>
                  </div>
                </div>
              </Tilt3DCard>
            );
          })}
        </div>

        {/* Official Services & Tour Routes Grid (From Official Poster) */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-200/80 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#C5283D] text-xs font-bold mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Official Destinations & Routes</span>
              </div>
              <h3 className="font-serif-custom text-2xl sm:text-3xl font-bold text-slate-900">
                Official Car & Jeep Tour Services
              </h3>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-600 font-bold">
              <MapPin className="w-4 h-4 text-[#C5283D]" />
              <span>Base: Lakeside, Pokhara</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {OFFICIAL_ROUTES.map((route, i) => (
              <Tilt3DCard key={i} tiltIntensity={8}>
                <div className="glass-card hover:bg-white p-4 rounded-2xl border border-slate-200/80 hover:border-[#1E5399]/40 transition-all text-left flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5283D] block mb-1">
                      {route.tag}
                    </span>
                    <h4 className="font-serif-custom font-bold text-slate-900 text-sm">
                      {route.name}
                    </h4>
                  </div>
                </div>
              </Tilt3DCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
