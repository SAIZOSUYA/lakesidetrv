import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, Calendar, Users, CheckCircle, Waves, Sparkles, Send, Compass } from 'lucide-react';
import { TOUR_PACKAGES } from '../data/toursData';

export default function BookingModal({ isOpen, onClose, preselectedPackage, customData }) {
  const [step, setStep] = useState(1);
  const [selectedPkgId, setSelectedPkgId] = useState(preselectedPackage ? preselectedPackage.id : 'lakeside-wellness');
  const [travelers, setTravelers] = useState(2);
  const [travelDate, setTravelDate] = useState('2026-09-15');
  const [addons, setAddons] = useState({
    sunriseBoat: true,
    paraglidePhoto: false,
    spaUpgrade: false,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const currentPkg = TOUR_PACKAGES.find(p => p.id === selectedPkgId) || TOUR_PACKAGES[0];

  const handleCheckbox = (key) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);

      // Confetti animation celebration!
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#1E5399', '#C5283D', '#2563EB', '#F59E0B']
      });
    }, 1000);
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-slate-900 max-h-[92vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5283D] font-bold mb-2">
            <Sparkles className="w-4 h-4 text-[#1E5399]" />
            <span>Reservations & Inquiry</span>
          </div>

          <h3 className="font-serif-custom text-2xl sm:text-3xl font-bold mb-6 text-slate-900">
            {customData ? 'Reserve Your Custom Voyage' : 'Plan Your Pokhara Journey'}
          </h3>

          {/* Step 1: Trip Selection & Dates */}
          {step === 1 && (
            <div className="space-y-6">
              {/* Package Chooser if not custom */}
              {!customData ? (
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1E5399] font-bold mb-2">
                    Select Curated Journey:
                  </label>
                  <select
                    value={selectedPkgId}
                    onChange={(e) => setSelectedPkgId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#1E5399] font-medium"
                  >
                    {TOUR_PACKAGES.map(pkg => (
                      <option key={pkg.id} value={pkg.id} className="bg-white text-slate-900">
                        {pkg.title} ({pkg.duration}) — {pkg.price}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-xs text-slate-700">
                  <span className="font-bold text-[#1E5399] block text-sm mb-1">
                    Custom Voyage Selected
                  </span>
                  <span>{customData.items.map(i => i.name).join(' • ')}</span>
                  <span className="block mt-2 font-mono text-[#C5283D] font-bold">
                    Est. Total: ${customData.cost} / guest
                  </span>
                </div>
              )}

              {/* Date & Travelers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1E5399] font-bold mb-2">
                    Preferred Start Date:
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#1E5399] font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1E5399] font-bold mb-2">
                    Number of Guests:
                  </label>
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5">
                    <Users className="w-4 h-4 text-slate-500" />
                    <button
                      type="button"
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                      className="w-7 h-7 rounded-lg bg-slate-200 text-slate-900 font-bold hover:bg-slate-300 transition-colors"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-sm text-slate-900">{travelers} Guests</span>
                    <button
                      type="button"
                      onClick={() => setTravelers(travelers + 1)}
                      className="w-7 h-7 rounded-lg bg-slate-200 text-slate-900 font-bold hover:bg-slate-300 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Special Enhancements Addons */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1E5399] font-bold mb-3">
                  Tailored Enhancements (Optional):
                </label>
                <div className="space-y-2.5">
                  <label className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200 cursor-pointer text-xs font-medium text-slate-800">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={addons.sunriseBoat}
                        onChange={() => handleCheckbox('sunriseBoat')}
                        className="rounded accent-[#1E5399]"
                      />
                      <span>Private 5:30 AM Sunrise Wooden Boat</span>
                    </div>
                    <span className="text-[#C5283D] font-bold font-mono">+$25</span>
                  </label>

                  <label className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200 cursor-pointer text-xs font-medium text-slate-800">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={addons.paraglidePhoto}
                        onChange={() => handleCheckbox('paraglidePhoto')}
                        className="rounded accent-[#1E5399]"
                      />
                      <span>Paragliding HD GoPro Flight Video Pack</span>
                    </div>
                    <span className="text-[#C5283D] font-bold font-mono">+$35</span>
                  </label>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-4 rounded-full bg-[#1E5399] hover:bg-[#1b4985] text-white text-xs font-semibold uppercase tracking-wider shadow-md transition-all"
              >
                Continue to Guest Details →
              </button>
            </div>
          )}

          {/* Step 2: Guest Details Form */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1E5399] font-bold mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="e.g. Elena Rostova"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E5399] font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1E5399] font-bold mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="elena@example.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E5399] font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1E5399] font-bold mb-1.5">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="+1 (555) 019-2834"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E5399] font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1E5399] font-bold mb-1.5">
                  Special Notes or Dietary Preferences
                </label>
                <textarea
                  rows="3"
                  name="notes"
                  value={formData.notes}
                  onChange={handleFormChange}
                  placeholder="Tell us any dietary requirements, hotel pickup details, or quiet preferences..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E5399] font-medium"
                ></textarea>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-[#1E5399] to-[#C5283D] text-white text-xs font-semibold uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Confirming Reservation...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm Pokhara Journey</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Success Confirmation Screen */}
          {step === 3 && (
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle className="w-10 h-10 animate-bounce" />
              </div>

              <div>
                <h4 className="font-serif-custom text-3xl font-bold text-slate-900 mb-2">
                  Namaste, {formData.name || 'Traveler'}!
                </h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto font-normal leading-relaxed">
                  Your voyage request for <strong>{travelDate}</strong> has been received. Our lakeside hosts will send your personalized itinerary confirmation to <strong>{formData.email || 'your email'}</strong> within 2 hours.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 max-w-md mx-auto font-mono text-left space-y-1">
                <div className="flex justify-between">
                  <span>Reference Voucher:</span>
                  <span className="text-[#1E5399] font-bold">#PKR-2026-889</span>
                </div>
                <div className="flex justify-between">
                  <span>Guests:</span>
                  <span>{travelers} Travelers</span>
                </div>
                <div className="flex justify-between">
                  <span>Journey:</span>
                  <span>{customData ? 'Custom Voyage' : currentPkg.title}</span>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="px-8 py-3.5 rounded-full bg-[#1E5399] text-white text-xs font-semibold uppercase tracking-wider shadow-md"
              >
                Return to Lakeside Travels
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
