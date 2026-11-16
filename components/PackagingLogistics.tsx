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
          {/* Packaging Card 1 */}
          <div className="packaging-card reveal is-visible delay-100">
            <div className="pack-header">
              <div className="pack-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
              <span className="pack-tag">Industry Benchmark</span>
            </div>
            <h3 className="pack-title">210 kg Aseptic Steel Drum</h3>
            <p className="pack-desc">
              Food-grade 4-layer aseptic barrier bag hermetically sealed inside conical / PPL steel drums. Nitrogen flushed with tamper-evident security seal.
            </p>
            <div className="pack-specs-list">
              <div className="pack-spec-row"><span className="pack-spec-label">Net Weight:</span><span className="pack-spec-val">210 kg &plusmn; 0.5 kg</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">Gross Weight:</span><span className="pack-spec-val">~228 kg per drum</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">20&apos; FCL Stuffing:</span><span className="pack-spec-val">80 Drums (16.80 MT Net)</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">Storage &amp; Shelf Life:</span><span className="pack-spec-val">18 Months (4&deg;C – 8&deg;C)</span></div>
            </div>
          </div>

          {/* Packaging Card 2 */}
          <div className="packaging-card reveal is-visible delay-200">
            <div className="pack-header">
              <div className="pack-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
              </div>
              <span className="pack-tag">Artisan &amp; Foodservice</span>
            </div>
            <h3 className="pack-title">20 kg Bag-in-Box (BIB)</h3>
            <p className="pack-desc">
              Aseptic barrier bag inside high-burst corrugated carton. Ideal for craft dairies, artisan ice cream producers, and culinary foodservice.
            </p>
            <div className="pack-specs-list">
              <div className="pack-spec-row"><span className="pack-spec-label">Net Weight:</span><span className="pack-spec-val">20 kg</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">20&apos; FCL Stuffing:</span><span className="pack-spec-val">1,000 Cartons (20.0 MT Net)</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">Palletization:</span><span className="pack-spec-val">50 Boxes per Pallet</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">Handling:</span><span className="pack-spec-val">Easy Pour / Dispenser Valve</span></div>
            </div>
          </div>

          {/* Packaging Card 3 */}
          <div className="packaging-card reveal is-visible delay-300">
            <div className="pack-header">
              <div className="pack-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 14 14"></polyline>
                </svg>
              </div>
              <span className="pack-tag">Cold Storage Puree</span>
            </div>
            <h3 className="pack-title">Frozen Puree (-18&deg;C Pails)</h3>
            <p className="pack-desc">
              Unpasteurized or gently pasteurized blast-frozen fruit puree retaining the exact raw aroma of freshly picked orchard fruit.
            </p>
            <div className="pack-specs-list">
              <div className="pack-spec-row"><span className="pack-spec-label">Net Weight:</span><span className="pack-spec-val">18 kg Food-Grade Pail</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">Temperature:</span><span className="pack-spec-val">-18&deg;C Constant Reefer</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">20&apos; Reefer Stuffing:</span><span className="pack-spec-val">~16.0 to 18.0 Metric Tons</span></div>
              <div className="pack-spec-row"><span className="pack-spec-label">Best Suited:</span><span className="pack-spec-val">Gelato, Sorbets &amp; Breweries</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
