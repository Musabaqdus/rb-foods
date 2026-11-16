'use client';

import React from 'react';

export default function BertuzziTech() {
  return (
    <section className="section tech-section" id="engineering">
      <div className="container">
        <div className="section-header reveal is-visible">
          <span className="section-kicker">Industrial Provenance</span>
          <h2 className="section-title">Engineered by BERTUZZI S.r.l. Milan, Italy</h2>
          <p className="section-desc">
            Quality in aseptic processing is dictated by thermal kinetics and mechanical shear. R&amp;B Foods invested in genuine Bertuzzi continuous equipment to preserve the delicate aroma, volatile esters, and natural vitamin complex of fresh Pakistani fruit.
          </p>
        </div>

        {/* 5-Step Continuous Process Flow */}
        <div className="process-flow-container">
          <div className="process-step-card reveal is-visible delay-100">
            <div className="step-num-pill">01</div>
            <h4 className="step-title">Three-Tier Washing &amp; Optical Sorting</h4>
            <p className="step-desc">Immersion sanitization, chlorinated brush spray washing, and continuous manual sorting eliminate substandard fruits before entry.</p>
          </div>

          <div className="process-step-card reveal is-visible delay-200">
            <div className="step-num-pill">02</div>
            <h4 className="step-title">Cold De-Stoning &amp; Turbo Refining</h4>
            <p className="step-desc">Bertuzzi stainless-steel rotary pulpers gently separate skin and stones without grinding seeds, avoiding bitter polyphenols.</p>
          </div>

          <div className="process-step-card reveal is-visible delay-300">
            <div className="step-num-pill">03</div>
            <h4 className="step-title">Vacuum De-Aeration &amp; Homogenization</h4>
            <p className="step-desc">Dissolved atmospheric micro-bubbles are extracted under controlled vacuum to prevent oxidative browning and flavor degradation.</p>
          </div>

          <div className="process-step-card reveal is-visible delay-400">
            <div className="step-num-pill">04</div>
            <h4 className="step-title">HTST Tubular Flash Sterilization</h4>
            <p className="step-desc">High-temperature short-time thermal profile eliminates vegetative cells and spores in seconds, followed by sterile rapid chilling.</p>
          </div>

          <div className="process-step-card reveal is-visible delay-500">
            <div className="step-num-pill">05</div>
            <h4 className="step-title">Cleanroom Aseptic Drum Filling</h4>
            <p className="step-desc">Automatic sterile filling head hermetically clamps 210kg 4-layer barrier bags inside steel drums with zero recontamination.</p>
          </div>
        </div>

        {/* Facility & Plant Visual Grid */}
        <div className="tech-showcase-grid reveal is-visible delay-200">
          <div className="tech-media-wrap">
            <video controls poster="/images/plant-machinery.jpeg">
              <source src="/video/facility-overview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="tech-points-list">
            <div className="tech-point-item">
              <div className="tech-point-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className="tech-point-content">
                <h4>Direct Supply from 5,000+ Orchard Acres</h4>
                <p>R&amp;B Foods operates private estates in Shorkot and maintains direct grower contracts, eliminating speculative middlemen and ensuring harvest-fresh fruit intake.</p>
              </div>
            </div>

            <div className="tech-point-item">
              <div className="tech-point-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="tech-point-content">
                <h4>Automated CIP / SIP Sanitation Cycles</h4>
                <p>Fully programmable Clean-in-Place and Steam-in-Place systems sterilize all product-contact stainless steel surfaces at 121&deg;C before every processing run.</p>
              </div>
            </div>

            <div className="tech-point-item">
              <div className="tech-point-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="tech-point-content">
                <h4>Continuous Digital SCADA Monitoring</h4>
                <p>Critical control points (temperature, flow rate, holding time, vacuum pressure) are digitally recorded in real-time for full batch audit compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
