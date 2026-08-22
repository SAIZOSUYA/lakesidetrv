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
    <section id="vehicle-fleet" className="min-h-screen flex flex-col justify-center py-6 sm:py-10 bg-slate-50 relative border-t border-slate-200 overflow-hidden w-full max-w-full screen-snap-section">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-[#1E5399]/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/4 -right-24 w-[450px] h-[450px] bg-[#C5283D]/14 rounded-full blur-[110px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] tracking-widest uppercase text-[#1E5399] font-bold mb-1.5 shadow-sm">
            <span>Vehicle Fleet & Rental Packages</span>
          </div>

          <h2 className="font-section-title text-xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Find the Perfect Car for Rent
          </h2>
          <p className="mt-1 sm:mt-2 text-slate-600 font-elegant-body font-normal text-xs sm:text-sm">
            Chauffeured luxury EV Cars, 4x4 Scorpio Jeeps & EV Passenger Vans with local mountain drivers.
          </p>
        </div>

        {/* Fleet Showcase Widescreen Container - Compact Viewport Fitted */}
        <div className="mb-3 sm:mb-4">
          <div className="rounded-2xl p-[1.5px] bg-gradient-to-r from-[#1E5399]/30 via-white to-[#C5283D]/30 shadow-md">
            <div className="rounded-[15px] overflow-hidden glass-panel border border-white/80 p-2 sm:p-3 bg-gradient-to-br from-blue-50/60 via-white to-red-50/40">
              {/* Image Banner */}
              <div className="relative w-full h-28 sm:h-40 lg:h-44 rounded-xl overflow-hidden shadow-md border border-slate-200/80 bg-slate-900">
                <img
                  src="/images/lakeside_fleet_official.jpg"
                  alt="Lakeside Travels Official Fleet - Mahindra Scorpio 4x4, Chery Omoda E5 EV SUV, KYC V5D EV Van"
                  className="w-full h-full object-cover object-center rounded-xl"
                />
              </div>

              {/* Compact Info Bar Below Image */}
              <div className="mt-2 p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-blue-100/70 via-white to-red-100/70 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-900">
                <div className="flex items-center gap-2 text-center sm:text-left">
                  <div>
                    <span className="text-[10.5px] sm:text-xs text-[#1E5399] font-bold block leading-tight">
                      Official Fleet: Mahindra Scorpio 4x4 • Chery Omoda E5 EV • KYC V5D EV Van
                    </span>
                    <span className="text-[9.5px] sm:text-[10px] text-slate-600 font-elegant-body">
                      Inspected, insured & chauffeured by expert Pokhara highway & high-altitude drivers.
                    </span>
                  </div>
                </div>

                <a
                  href="tel:+9779856028626"
                  className="w-full sm:w-auto text-center shrink-0 inline-flex items-center justify-center gap-1 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#1E5399] via-[#2563EB] to-[#C5283D] text-white text-[10.5px] font-bold uppercase tracking-wider shadow-sm transition-all"
                >
                  <span>Call Desk: +977 985-6028626</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicles Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {VEHICLES.map((veh) => {
            const isSelected = activeVehicle === veh.id;

            return (
              <div
                key={veh.id}
                onClick={() => setActiveVehicle(veh.id)}
                className={`glass-card rounded-2xl p-2.5 sm:p-3 cursor-pointer flex flex-col justify-between border transition-all ${
                  isSelected ? 'border-[#1E5399] ring-2 ring-[#1E5399]/20 shadow-md bg-white' : 'border-slate-200/90'
                }`}
              >
                <div>
                  <div className="relative h-24 sm:h-32 rounded-xl overflow-hidden mb-2 bg-slate-900 border border-slate-200/80">
                    <img
                      src={veh.image}
                      alt={veh.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <span className={`absolute top-1.5 left-1.5 text-[8.5px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm ${veh.badgeBg}`}>
                      {veh.tag}
                    </span>
                  </div>

                  <h3 className="font-serif-custom text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                    {veh.name}
                  </h3>

                  <p className="text-slate-600 text-[10px] leading-tight font-normal mb-1.5 line-clamp-2">
                    {veh.desc}
                  </p>

                  <div className="flex items-center justify-between text-[9.5px] sm:text-[10px] font-medium text-slate-700 pt-1.5 border-t border-slate-100">
                    <span><strong className="text-slate-900">{veh.seats}</strong> • {veh.fuel}</span>
                    <span className="font-bold text-[#1E5399] truncate max-w-[130px]">{veh.bestFor}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Destinations Strip */}
        <div className="glass-panel rounded-2xl p-2.5 sm:p-3 border border-slate-200/90 shadow-md">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1 text-[11px] text-[#C5283D] font-bold">
              <span>Verified Direct Transport Routes (No Middleman Agent Fees)</span>
              <span>Official Tour Routes & Destinations:</span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium hidden sm:inline">Lakeside Hub Base</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {OFFICIAL_ROUTES.slice(0, 4).map((route, i) => (
              <div key={i} className="glass-card p-2 sm:p-2.5 rounded-xl border border-slate-200/80 text-left">
                <span className="text-[8.5px] font-bold uppercase text-[#C5283D] block">
                  {route.tag}
                </span>
                <h4 className="font-newari font-bold text-slate-900 text-[11px] sm:text-xs truncate">
                  {route.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
