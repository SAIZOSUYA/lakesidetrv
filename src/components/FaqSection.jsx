import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck, PhoneCall } from 'lucide-react';
import { LakesideCompassIcon } from './CustomSymbols';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const FAQS = [
    {
      q: "What is included in the Phewa Lake Wooden Boat (Doonga) rides?",
      a: "All our wooden boat packages include a certified local oarsman, clean safety life jackets, boat transfer to Tal Barahi Island Temple, and optional sunrise drop-offs at quiet northern lake shorelines."
    },
    {
      q: "Is paragliding in Sarangkot safe for first-time flyers?",
      a: "Yes! All paragliding flights are tandem, meaning you fly securely with an APPI/CIVL certified flight master with over 1,000+ hours of airtime. No prior flight experience is required."
    },
    {
      q: "Can I pay in cash or card upon arrival at your Pokhara office?",
      a: "Absolutely! You can reserve your date online with $0 deposit and pay via credit card, cash (NPR, USD, EUR, AUD), or local QR pay upon arriving at our Lakeside office."
    },
    {
      q: "What happens if weather conditions prevent the morning paragliding flight?",
      a: "Safety is our absolute priority. If morning thermals or rain prevent takeoff, we automatically reschedule your flight to the afternoon or next day, or provide a 100% full refund."
    },
    {
      q: "Do you provide hotel pickup and drop-off in Pokhara?",
      a: "Yes, complimentary private hotel pickup and drop-off is included for all our tour packages within the Pokhara Lakeside & Dam Side area."
    }
  ];

  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs tracking-widest uppercase text-[#1E5399] font-bold mb-4 shadow-sm">
            <div className="w-5 h-5 rounded-full bg-[#1E5399]/10 border border-[#1E5399]/30 flex items-center justify-center shrink-0">
              <LakesideCompassIcon className="w-3.5 h-3.5" color="#1E5399" />
            </div>
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif-custom text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600 font-sans-custom font-normal text-base sm:text-lg">
            Everything you need to know about booking, flight safety, weather policies, and lake transfers.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:border-[#1E5399]/40"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-50 text-[#1E5399] text-xs flex items-center justify-center font-mono shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#1E5399] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#C5283D]' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed font-normal border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Live Help Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-red-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3 text-slate-800 text-sm font-semibold">
            <PhoneCall className="w-5 h-5 text-[#C5283D]" />
            <span>Have a specific question or custom group inquiry?</span>
          </div>
          <a
            href="tel:+9779856028626"
            className="px-5 py-2.5 rounded-full bg-[#1E5399] hover:bg-[#1b4985] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all"
          >
            Call Lakeside Desk: +977 985-6028626
          </a>
        </div>
      </div>
    </section>
  );
}
