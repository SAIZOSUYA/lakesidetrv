import React from 'react';
import { ShieldCheck, Zap, Award, Star, Clock, CheckCircle } from 'lucide-react';

export default function TrustSafetyBar() {
  const TRUST_ITEMS = [
    {
      icon: ShieldCheck,
      title: "Verified Local Operators",
      desc: "Licensed Pokhara boatmen & flight masters",
      color: "text-[#1E5399]",
      bg: "bg-blue-50"
    },
    {
      icon: Zap,
      title: "Instant E-Voucher",
      desc: "Immediate mobile booking confirmation",
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      icon: Award,
      title: "Best Price Match",
      desc: "Direct local prices with zero booking fees",
      color: "text-[#C5283D]",
      bg: "bg-red-50"
    },
    {
      icon: Star,
      title: "4.96 / 5.0 Star Rated",
      desc: "From 1,200+ global travelers since 2021",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-6 relative z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {TRUST_ITEMS.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3.5 group">
              <div className={`w-11 h-11 rounded-2xl ${item.bg} flex items-center justify-center shrink-0 border border-slate-200/60 group-hover:scale-110 transition-transform`}>
                <IconComp className={`w-5 h-5 ${item.color}`} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900 group-hover:text-[#1E5399] transition-colors">
                  {item.title}
                </span>
                <span className="text-[11px] text-slate-500 font-medium line-clamp-1">
                  {item.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
