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
    <section className="min-h-screen flex flex-col justify-center py-6 sm:py-10 lg:py-12 bg-white relative border-t border-slate-200 screen-snap-section">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-4 sm:px-8"
      >
        {/* Section Header */}
        <div className="text-center mb-2.5 sm:mb-4">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] tracking-widest uppercase text-[#1E5399] font-bold mb-1.5 shadow-sm">
            <span>Got Questions?</span>
          </div>
          <h2 className="font-section-title text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-1 sm:mt-1.5 text-slate-600 font-elegant-body font-normal text-xs sm:text-sm">
            Everything you need to know about booking, flight safety, weather policies, and lake transfers.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-2 sm:space-y-2.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:border-[#1E5399]/40"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-3 sm:p-4 text-left flex items-center justify-between gap-3 font-bold text-slate-900 text-xs sm:text-base focus:outline-none"
                >
                  <span className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-50 text-[#1E5399] text-[10px] sm:text-[11px] flex items-center justify-center font-mono shrink-0 mt-0.5 sm:mt-0">
                      0{idx + 1}
                    </span>
                    <span className="leading-snug">{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#1E5399] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#C5283D]' : ''}`} />
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
                      <div className="px-3.5 sm:px-5 pb-4 pt-1.5 text-slate-600 text-xs leading-relaxed font-normal font-elegant-body border-t border-slate-100 bg-slate-50/50">
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
        <div className="mt-4 sm:mt-5 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-red-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3 text-slate-800 text-xs sm:text-sm font-semibold">
            <span>Have a specific question or custom group inquiry?</span>
          </div>
          <a
            href="tel:+9779856028626"
            className="w-full sm:w-auto text-center px-4 py-2 rounded-full bg-[#1E5399] hover:bg-[#1b4985] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm transition-all shrink-0"
          >
            Call Lakeside Desk: +977 985-6028626
          </a>
        </div>
      </motion.div>
    </section>
  );
}
