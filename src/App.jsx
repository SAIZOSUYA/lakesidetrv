import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import WaterRippleHero from './components/WaterRippleHero';
import TrustSafetyBar from './components/TrustSafetyBar';
import WhyPokharaSection from './components/WhyPokharaSection';
import TravelServicesGrid from './components/TravelServicesGrid';
import VehicleFleetSection from './components/VehicleFleetSection';
import CuratedJourneysSection from './components/CuratedJourneysSection';
import MountainMapSection from './components/MountainMapSection';
import VisualJournalGallery from './components/VisualJournalGallery';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Reset scroll restoration to manual so browser doesn't restore scroll position on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Scroll to top immediately on refresh/load
    window.scrollTo(0, 0);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#C5283D] selection:text-white relative">
      {/* Top Navbar Header */}
      <Navbar />

      {/* Main App Content */}
      <main>
        {/* Interactive Water Ripple Hero Header */}
        <WaterRippleHero />

        {/* Industry Trust & Guarantee Bar */}
        <TrustSafetyBar />

        {/* Why Pokhara Features & Experience Highlights */}
        <WhyPokharaSection />

        {/* Full Travel Agency Services Grid */}
        <TravelServicesGrid />

        {/* Official Vehicle Fleet & Car Rental Section (From Poster) */}
        <VehicleFleetSection />

        {/* Curated Journeys & Packages */}
        <CuratedJourneysSection />

        {/* Interactive Mountain & Landmark Elevation Showcase */}
        <MountainMapSection />

        {/* Visual Photo Journal & Lightbox */}
        <VisualJournalGallery />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
