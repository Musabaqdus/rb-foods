'use client';

import React from 'react';

export default function PackagingLogistics() {
  return (
    <section className="section section-alt" id="packaging">
      <div className="container">
        <div className="section-header text-center reveal is-visible">
          <span className="section-kicker">Global Shipping Specifications</span>
          <h2 className="section-title">Engineered for Cold-Chain &amp; Global Transit</h2>
          <p className="section-desc">
            R&amp;B Foods handles containerized shipments from Karachi Port (KICT / QICT / SAPT) to major global ports across the Middle East, Europe, North America, and the Asia-Pacific.
          </p>
        </div>

        <div className="packaging-grid">
          {/* Packaging Card 1: 210 kg Aseptic Steel Drum */}
          <div className="packaging-card reveal is-visible delay-100">
            <div className="pack-header">
              <div className="pack-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
              <span className="pack-tag">Single-Strength Purees</span>
            </div>
            <h3 className="pack-title">210 kg Aseptic Steel Drum</h3>
            <p className="pack-desc">
              Food-grade 4-layer aseptic barrier bag hermetically sealed inside conical / PPL steel drums. Nitrogen flushed with tamper-evident security seal. For Chaunsa, Sindhri, Anwar Ratol, Peach, Apple, Apricot, Plum &amp; Banana purees.
            </p>
            <div className="pack-specs-list">
              <div className="pack-spec-row"><span className="pack-spec-label">Net Weight:</span><span className="pack-spec-val">210 kg &plusmn; 0.5 kg</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">Gross Weight:</span><span className="pack-spec-val">~228 kg per drum</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">20&apos; FCL Stuffing:</span><span className="pack-spec-val">80 Drums (16.80 MT Net)</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">Storage Temperature:</span><span className="pack-spec-val">4&deg;C – 8&deg;C (18–24 Mos)</span></div>
            </div>
          </div>

          {/* Packaging Card 2: 200 kg Aseptic Steel Drum */}
          <div className="packaging-card reveal is-visible delay-200">
            <div className="pack-header">
              <div className="pack-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
              <span className="pack-tag">Guava &amp; Strawberry</span>
            </div>
            <h3 className="pack-title">200 kg Aseptic Steel Drum</h3>
            <p className="pack-desc">
              Standardized filling volume specifically calibrated for high-density Guava Pulp Aseptic and fresh Strawberry Puree in food-grade aseptic bags inside conical steel drums.
            </p>
            <div className="pack-specs-list">
              <div className="pack-spec-row"><span className="pack-spec-label">Net Weight:</span><span className="pack-spec-val">200 kg &plusmn; 0.5 kg</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">Gross Weight:</span><span className="pack-spec-val">~218 kg per drum</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">20&apos; FCL Stuffing:</span><span className="pack-spec-val">80 Drums (16.00 MT Net)</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">Storage Temperature:</span><span className="pack-spec-val">4&deg;C – 8&deg;C (18 Mos)</span></div>
            </div>
          </div>

          {/* Packaging Card 3: 220 kg Aseptic Steel Drum */}
          <div className="packaging-card reveal is-visible delay-300">
            <div className="pack-header">
              <div className="pack-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
              <span className="pack-tag">Concentrates &amp; Paste</span>
            </div>
            <h3 className="pack-title">220 kg Aseptic Steel Drum</h3>
            <p className="pack-desc">
              High-viscosity barrier packaging for de-aerated vacuum concentrates: Chaunsa Mango Concentrate (28–30&deg; Brix), Peach Concentrate (30–32&deg; Brix), and Tomato Paste (28–30&deg; Brix).
            </p>
            <div className="pack-specs-list">
              <div className="pack-spec-row"><span className="pack-spec-label">Net Weight:</span><span className="pack-spec-val">220 kg &plusmn; 0.5 kg</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">Gross Weight:</span><span className="pack-spec-val">~238 kg per drum</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">20&apos; FCL Stuffing:</span><span className="pack-spec-val">80 Drums (17.60 MT Net)</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">Storage Temperature:</span><span className="pack-spec-val">4&deg;C – 8&deg;C / Ambient (24 Mos)</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
