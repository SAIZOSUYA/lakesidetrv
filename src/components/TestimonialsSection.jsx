import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/toursData';
import { Star, Quote, Compass, Stamp, Heart } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-slate-100/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs tracking-widest uppercase text-[#1E5399] font-bold mb-4">
            <Quote className="w-3.5 h-3.5 text-[#C5283D]" />
            <span>Traveler Memories</span>
          </div>
          <h2 className="font-serif-custom text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Postcards from Lake Travelers
          </h2>
          <p className="mt-4 text-slate-600 font-sans-custom font-normal text-base sm:text-lg">
            Read notes and reflections left behind by guests who found peace, perspective, and quiet joy in Pokhara.
          </p>
        </div>

        {/* Postcard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg flex flex-col justify-between relative group hover:border-[#1E5399]/40 hover:shadow-xl transition-all duration-300"
            >
              {/* Vintage Stamp Top Right */}
              <div className="absolute top-6 right-6 border-2 border-dashed border-[#C5283D]/60 px-3 py-1.5 rounded-lg text-[10px] font-mono text-[#C5283D] rotate-6 bg-red-50/60 uppercase tracking-widest font-bold flex items-center gap-1 shadow-sm">
                <span>{t.stamp}</span>
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-6 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-800 font-serif-custom text-lg italic leading-relaxed mb-6 font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Journey Info */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#1E5399]"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-sans-custom">
                      {t.author}
                    </h4>
                    <span className="text-xs text-slate-500 block font-medium">
                      {t.location} • {t.date}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-[#1E5399] font-mono font-bold block">
                    {t.packageTaken}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Rating Banner */}
        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left max-w-4xl mx-auto shadow-md">
          <div className="flex items-center gap-3 text-slate-700 text-sm font-sans-custom font-medium">
            <Heart className="w-5 h-5 text-[#C5283D]" />
            <span>Over <strong>1,200+</strong> travelers guided across Phewa Lake since 2021.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold font-serif-custom text-[#1E5399]">4.96 / 5.0</span>
            <span className="text-xs text-slate-500 font-medium">Average Traveler Delight Score</span>
          </div>
        </div>
      </div>
    </section>
  );
}
