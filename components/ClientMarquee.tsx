'use client';

import React from 'react';

const PARTNERS = [
  { src: '/logos/coca-cola.png', alt: 'The Coca-Cola Company' },
  { src: '/logos/pepsi.png', alt: 'PepsiCo' },
  { src: '/logos/tropicana.png', alt: 'Tropicana' },
  { src: '/logos/dohler.jpg', alt: 'Döhler Egypt' },
  { src: '/logos/engro.png', alt: 'Engro Foods' },
  { src: '/logos/shezan.jpg', alt: 'Shezan International' },
  { src: '/logos/mitchells.png', alt: "Mitchell's Fruit Farms" },
  { src: '/logos/maaza.png', alt: 'Maaza Mango' },
  { src: '/logos/rubicon.png', alt: 'Rubicon Exotic' },
  { src: '/logos/dalda.jpg', alt: 'Dalda Foods' },
  { src: '/logos/tops.jpg', alt: 'Tops Food' },
  { src: '/logos/sixb.png', alt: 'SixB Foods' }
];

export default function ClientMarquee() {
  return (
    <section className="client-marquee-section" aria-label="Corporate clients and ingredient partners">
      <div className="container marquee-header reveal is-visible">
        <span className="marquee-subtitle">Trusted by Global &amp; Regional Food &amp; Beverage Leaders</span>
      </div>

      <div className="marquee-track-wrapper">
        <div className="marquee-track">
          {/* First loop of logos */}
          {PARTNERS.map((p, idx) => (
            <div className="partner-logo-item" key={`p1-${idx}`}>
              <img src={p.src} alt={p.alt} />
            </div>
          ))}

          {/* Loop for continuous flow */}
          {PARTNERS.map((p, idx) => (
            <div className="partner-logo-item" key={`p2-${idx}`}>
              <img src={p.src} alt={p.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
