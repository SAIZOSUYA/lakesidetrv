import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Car, Ticket, ShieldAlert, Compass, Anchor, Hotel, ShieldCheck, ArrowRight } from 'lucide-react';
import Tilt3DCard from './Tilt3DCard';
import { DoongaBoatIcon, CarTransferIcon, MachhapuchhrePeakIcon, ParaglideSoarIcon, LakesideCompassIcon } from './CustomSymbols';

export default function TravelServicesGrid({ onOpenBooking }) {
  const SERVICES = [
    {
      id: 'car-fleet',
      icon: CarTransferIcon,
      title: 'Car & 4x4 Fleet Rentals',
      desc: 'Chauffeured luxury AC Sedans, 4x4 Land Rover Jeeps, Hiace Vans & Tourist Coasters with licensed local drivers.',
      badge: 'Vehicle Fleet',
      tag: 'City & Overland',
      color: 'text-[#1E5399]',
      bg: 'bg-blue-50/80 border-blue-200'
    },
    {
      id: 'flight-tickets',
      icon: Plane,
      title: 'Domestic & Scenic Flights',
      desc: 'Instant flight bookings for Pokhara–Kathmandu routes and morning Himalayan Everest sightseeing flights.',
      badge: 'Air Ticketing',
      tag: 'E-Ticket Guaranteed',
      color: 'text-[#C5283D]',
      bg: 'bg-red-50/80 border-red-200'
    },
    {
      id: 'adventure-sports',
      icon: ParaglideSoarIcon,
      title: 'Adventure Sports Booking',
      desc: 'Authorized booking for Sarangkot Paragliding, Ultralight flights, Trishuli Rafting, and Zip-Flyer expeditions.',
      badge: 'Thrill & Sky',
      tag: 'APPI Flight Masters',
      color: 'text-amber-600',
      bg: 'bg-amber-50/80 border-amber-200'
    },
    {
      id: 'trekking-permits',
      icon: MachhapuchhrePeakIcon,
      title: 'Trek Permits & Guides',
      desc: 'Official ACAP & TIMS permit processing, licensed mountain guides, and experienced high-altitude porters.',
      badge: 'Himalayan Treks',
      tag: 'Govt Registered',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50/80 border-emerald-200'
    },
    {
      id: 'lake-charters',
      icon: DoongaBoatIcon,
      title: 'Phewa Lake Boat Charters',
      desc: 'Private wooden doonga boats, sunrise paddleboards, and VIP boat transfers to Tal Barahi Island Temple.',
      badge: 'Doonga Fleet',
      tag: 'Safety Vests Included',
      color: 'text-sky-600',
      bg: 'bg-sky-50/80 border-sky-200'
    },
    {
      id: 'hotel-resorts',
      icon: Hotel,
      title: 'Hotel & Resort Reservations',
      desc: 'Exclusive negotiated rates at handpicked Pokhara lakeside eco-lodges, boutique resorts, and 5-star hotels.',
      badge: 'Accommodation',
      tag: 'Best Price Match',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50/80 border-indigo-200'
    }
  ];

  return (
    <section id="services" className="min-h-screen flex flex-col justify-center py-8 sm:py-12 md:py-16 bg-white relative border-t border-slate-200 overflow-hidden w-full max-w-full screen-snap-section">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-5">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] tracking-widest uppercase text-[#1E5399] font-bold mb-1.5 shadow-sm">
            <span>Complete Travel Desk</span>
          </div>
          <h2 className="font-section-title text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Full Range of Travel Services
          </h2>
          <p className="mt-1 sm:mt-1.5 text-slate-600 font-elegant-body font-normal text-xs sm:text-sm">
            From luxury 4x4 car rentals and domestic flight tickets to licensed trek guides and private lake charters — we manage every detail of your Nepal journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {SERVICES.map((srv) => {
            const IconComp = srv.icon;
            return (
              <Tilt3DCard key={srv.id} tiltIntensity={10}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="glass-card glass-card-hover rounded-3xl p-3.5 sm:p-4.5 flex flex-col justify-between group preserve-3d h-full"
                >
                  <div>
                    {/* Top Tag */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9.5px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm translate-z-20">
                        {srv.tag}
                      </span>
                    </div>

                    <h3 className="font-serif-custom text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-[#1E5399] transition-colors translate-z-10">
                      {srv.title}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed font-normal font-elegant-body">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 mt-2.5 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-[10.5px] font-bold text-[#1E5399] uppercase tracking-wider">
                      {srv.badge}
                    </span>
                  </div>
                </motion.div>
              </Tilt3DCard>
            );
          })}
        </div>

        {/* Agency Registration & Certification Banner */}
        <div className="mt-4 sm:mt-5 p-3.5 sm:p-4 rounded-3xl bg-gradient-to-r from-blue-50/90 via-white to-red-50/90 border border-slate-200/90 shadow-lg flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-3 text-center sm:text-left">
            <div>
              <h4 className="font-serif-custom font-bold text-xs sm:text-sm text-slate-900">
                Official Licensed Travel Agency • Government Registered
              </h4>
              <p className="text-[10px] sm:text-[11px] text-slate-600 font-sans-custom font-medium mt-0.5">
                Nepal Tourism Board (NTB) Reg No. 148920/078 • TAAN & NATTA Member • 100% Guaranteed Liability Insurance
              </p>
            </div>
          </div>

          <a
            href="tel:+9779856028626"
            className="w-full md:w-auto shrink-0 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1E5399] via-[#2563EB] to-[#C5283D] hover:shadow-xl text-[11px] font-bold uppercase tracking-wider text-white shadow-md transition-all text-center"
          >
            Contact Travel Desk
          </a>
        </div>
      </motion.div>
    </section>
  );
}
