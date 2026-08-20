import React, { useState } from 'react';
import { Waves, MapPin, Mail, Phone, Heart, Sun, Send, Share2, Globe, Compass } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/30 shadow-2xl bg-white shrink-0">
              <img
                src="/logo.png"
                alt="Lakeside Travels Logo"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-custom text-2xl sm:text-3xl font-bold tracking-wide text-white">
                Lakeside Travels
              </span>
              <span className="text-[11px] tracking-[0.25em] uppercase text-sky-400 font-sans-custom font-bold">
                Pokhara • Nepal
              </span>
            </div>
          </div>

          <p className="text-sm font-normal text-slate-400 max-w-sm leading-relaxed font-sans-custom">
            Crafting unhurried journeys across Phewa Lake, Sarangkot mountain ridgelines, and serene lakeside sanctuaries.
          </p>

          <div className="flex items-center space-x-3 text-slate-400">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5283D] hover:text-white flex items-center justify-center transition-colors">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5283D] hover:text-white flex items-center justify-center transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5283D] hover:text-white flex items-center justify-center transition-colors">
              <Compass className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div>
          <h4 className="font-serif-custom text-lg font-bold text-white mb-4">Explore Pokhara</h4>
          <ul className="space-y-2.5 text-sm font-normal text-slate-400">
            <li><a href="#why-pokhara" className="hover:text-sky-400 transition-colors">Why Pokhara</a></li>
            <li><a href="#services" className="hover:text-sky-400 transition-colors">Travel Services</a></li>
            <li><a href="#packages" className="hover:text-sky-400 transition-colors">Curated Journeys</a></li>
            <li><a href="#gallery" className="hover:text-sky-400 transition-colors">Visual Journal</a></li>
          </ul>
        </div>

        {/* Location & Contact Details */}
        <div>
          <h4 className="font-serif-custom text-lg font-bold text-white mb-4">Lakeside Host</h4>
          <ul className="space-y-3 text-sm font-normal text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C5283D] shrink-0 mt-0.5" />
              <span>Lakeside Street 6, Pokhara 33700, Nepal</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-sky-400 shrink-0" />
              <a href="tel:+9779856028626" className="hover:text-white transition-colors">+977 985-6028626</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="mailto:lakesidetravels0@gmail.com" className="hover:text-white transition-colors">lakesidetravels0@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="font-serif-custom text-lg font-bold text-white mb-4">Morning Mist Notes</h4>
          <p className="text-xs text-slate-400 font-normal mb-3">
            Receive seasonal Annapurna flight updates, lake weather guides, and quiet travel stories.
          </p>

          {subscribed ? (
            <div className="bg-emerald-500/20 border border-emerald-500/40 p-3 rounded-xl text-xs text-emerald-300 font-mono font-bold">
              ✓ Subscribed! Check your inbox for your Pokhara Guide.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-gradient-to-r from-[#1E5399] to-[#C5283D] text-white rounded-lg flex items-center justify-center text-xs shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-normal">
        <span>© {new Date().getFullYear()} Lakeside Travels. Handcrafted for slow living & adventure in Pokhara.</span>
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms of Voyage</a>
          <a href="#" className="hover:text-slate-300">Sustainable Travel Charter</a>
        </div>
      </div>
    </footer>
  );
}
