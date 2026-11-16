'use client';

import React from 'react';

const CLIENTS = [
  { name: 'Coca-Cola', logo: '/logos/coca-cola.png' },
  { name: 'PepsiCo', logo: '/logos/pepsi.png' },
  { name: 'Tropicana', logo: '/logos/tropicana.png' },
  { name: 'Döhler Global Ingredients', logo: '/logos/dohler.png' },
  { name: 'Engro Foods', logo: '/logos/engro.png' },
  { name: 'Mitchell’s', logo: '/logos/mitchells.png' },
  { name: 'Shezan International', logo: '/logos/shezan.png' },
  { name: 'Maaza', logo: '/logos/maaza.png' },
  { name: 'Rubicon Drinks UK', logo: '/logos/rubicon.png' },
  { name: 'Dalda Foods', logo: '/logos/dalda.png' },
  { name: 'Tops Food & Beverages', logo: '/logos/tops.png' },
  { name: 'SixB Food Industries', logo: '/logos/sixb.png' }
];

export default function ClientMarquee() {
  return (
    <section className="client-trust-section" aria-label="Client Trust Marquee">
      <div className="container">
        <p className="trust-marquee-label">
          TRUSTED RAW MATERIAL PARTNER TO NATIONAL &amp; MULTINATIONAL INDUSTRIAL BEVERAGE CONGLOMERATES
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* First set of client cards */}
          {CLIENTS.map((client, idx) => (
            <div className="client-brand-card" key={`c1-${idx}`}>
              <img
                src={client.logo}
                alt={client.name}
                className="client-logo-img"
                loading="lazy"
              />
              <span className="client-fallback-text">{client.name}</span>
            </div>
          ))}

          {/* Duplicate set for infinite seamless marquee loop */}
          {CLIENTS.map((client, idx) => (
            <div className="client-brand-card" key={`c2-${idx}`}>
              <img
                src={client.logo}
                alt={client.name}
                className="client-logo-img"
                loading="lazy"
              />
              <span className="client-fallback-text">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
