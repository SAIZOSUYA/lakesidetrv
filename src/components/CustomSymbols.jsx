import React from 'react';

// Handcrafted Nepali Wooden Boat (Doonga) Icon
export function DoongaBoatIcon({ className = "w-4 h-4", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Hull of the Nepali Wooden Doonga Boat */}
      <path d="M2 13.5C4 16.5 7.5 18 12 18C16.5 18 20 16.5 22 13.5L19.5 10H4.5L2 13.5Z" fill="rgba(30, 83, 153, 0.1)" />
      {/* Oar / Paddle */}
      <line x1="6" y1="5" x2="16" y2="15" />
      <ellipse cx="17.5" cy="16.5" rx="1.5" ry="2" transform="rotate(-45 17.5 16.5)" fill={color} />
      {/* Water Wave Ripples Below */}
      <path d="M3 21C5 20 7 20 9 21C11 22 13 22 15 21C17 20 19 20 21 21" strokeOpacity="0.6" />
    </svg>
  );
}

// Handcrafted Fishtail Mountain Peak (Machhapuchhre) Icon
export function MachhapuchhrePeakIcon({ className = "w-4 h-4", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Double-peaked Fishtail Mountain Silhouette */}
      <path d="M3 20L9 9L12 14L15 8L21 20H3Z" fill="rgba(197, 40, 61, 0.08)" />
      <path d="M12 14L15 8L18 13.5" />
      {/* Snow Line Highlights */}
      <path d="M7 13.5L9 9L10.5 11.5" />
      <path d="M13.5 11L15 8L16.5 10.5" />
      {/* Sun/Dawn Circle */}
      <circle cx="12" cy="5" r="1.5" fill={color} />
    </svg>
  );
}

// Handcrafted Artisan Lakeside Compass Rose
export function LakesideCompassIcon({ className = "w-4 h-4", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Outer Ring */}
      <circle cx="12" cy="12" r="9" strokeOpacity="0.9" />
      {/* Diamond Compass Needle */}
      <polygon points="12,5 14.5,12 12,19 9.5,12" fill={color} fillOpacity="0.2" />
      <polygon points="12,5 14.5,12 12,12" fill={color} />
      {/* Cardinal Points */}
      <circle cx="12" cy="3" r="0.75" fill={color} />
      <circle cx="21" cy="12" r="0.75" fill={color} />
      <circle cx="12" cy="21" r="0.75" fill={color} />
      <circle cx="3" cy="12" r="0.75" fill={color} />
    </svg>
  );
}

// Handcrafted Paraglider Soar Icon
export function ParaglideSoarIcon({ className = "w-4 h-4", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Wing Arc */}
      <path d="M3 9C6 4.5 18 4.5 21 9C17 7.5 7 7.5 3 9Z" fill="rgba(37, 99, 235, 0.15)" />
      {/* Lines to Pilot */}
      <line x1="3" y1="9" x2="12" y2="17" />
      <line x1="8" y1="8" x2="12" y2="17" />
      <line x1="16" y1="8" x2="12" y2="17" />
      <line x1="21" y1="9" x2="12" y2="17" />
      {/* Harness / Pilot Dot */}
      <circle cx="12" cy="18.5" r="1.2" fill={color} />
    </svg>
  );
}

// Handcrafted Himalayan Star / Sparkle Icon
export function HimalayanStarIcon({ className = "w-4 h-4", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill={color} fillOpacity="0.25" />
    </svg>
  );
}

// Handcrafted 4x4 Overland Car & SUV Transfer Icon
export function CarTransferIcon({ className = "w-4 h-4", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Car Roof & Windows */}
      <path d="M5 12L7 6H17L19 12" fill="rgba(30, 83, 153, 0.1)" />
      {/* Car Body */}
      <path d="M3 12H21V17H3V12Z" />
      {/* Wheels */}
      <circle cx="6.5" cy="17.5" r="2" fill={color} />
      <circle cx="17.5" cy="17.5" r="2" fill={color} />
      {/* Headlight */}
      <line x1="19" y1="14" x2="21" y2="14" strokeWidth="2" stroke={color} />
    </svg>
  );
}
