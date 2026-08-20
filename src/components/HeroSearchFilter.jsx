import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, Sparkles, Filter } from 'lucide-react';

export default function HeroSearchFilter({ onSearch }) {
  const [activity, setActivity] = useState('All');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2 Guests');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ activity, date, guests });
    }
    const packagesEl = document.getElementById('packages');
    if (packagesEl) {
      packagesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <form
        onSubmit={handleSearchSubmit}
        className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-3 sm:p-4 shadow-2xl shadow-slate-950/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center text-slate-800"
      >
        {/* Field 1: Destination / Activity */}
        <div className="lg:col-span-4 flex items-center gap-3 px-3 py-2 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200/80 transition-colors">
          <MapPin className="w-5 h-5 text-[#1E5399] shrink-0" />
          <div className="flex flex-col text-left flex-1 min-w-0">
            <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Experience Type</label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer truncate"
            >
              <option value="All">All Experiences & Rides</option>
              <option value="Serene">Lake Wooden Boat Ride</option>
              <option value="Car">Private Car & 4x4 Jeep Safari</option>
              <option value="Adventure">Sarangkot Paragliding</option>
              <option value="Culture">World Peace Pagoda Tour</option>
              <option value="Trek">Mardi Himal Ridge Trek</option>
            </select>
          </div>
        </div>

        {/* Field 2: Date Picker */}
        <div className="lg:col-span-3 flex items-center gap-3 px-3 py-2 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200/80 transition-colors">
          <Calendar className="w-5 h-5 text-[#C5283D] shrink-0" />
          <div className="flex flex-col text-left flex-1 min-w-0">
            <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Travel Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Field 3: Guest Select */}
        <div className="lg:col-span-3 flex items-center gap-3 px-3 py-2 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200/80 transition-colors">
          <Users className="w-5 h-5 text-emerald-600 shrink-0" />
          <div className="flex flex-col text-left flex-1 min-w-0">
            <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Travelers</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
            >
              <option value="1 Guest">1 Solo Traveler</option>
              <option value="2 Guests">2 Travelers (Couple/Friends)</option>
              <option value="3-5 Guests">3-5 Group Guests</option>
              <option value="6+ Guests">6+ Family / Expedition</option>
            </select>
          </div>
        </div>

        {/* Search Submit Button */}
        <div className="lg:col-span-2">
          <button
            type="submit"
            className="w-full h-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#1E5399] via-[#2563EB] to-[#C5283D] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
}
