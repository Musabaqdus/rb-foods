'use client';

import React from 'react';

export default function QualityLabTour() {
  return (
    <section className="section" id="laboratory">
      <div className="container">
        <div className="section-header reveal is-visible">
          <span className="section-kicker">Quality Assurance &amp; Standards</span>
          <h2 className="section-title">Certified In-Line Quality Assurance &amp; Analytical Testing</h2>
          <p className="section-desc">
            Every batch of fruit pulp produced at our Shorkot plant is tested against rigorous physical, chemical, and microbiological standards. Consignments are cleared for export only after comprehensive Certificate of Analysis (COA) verification.
          </p>
        </div>

        <div className="lab-grid">
          {/* Facility Processing Video Showcase */}
          <div className="lab-video-container reveal reveal-left is-visible delay-100">
            <div className="video-player-wrapper">
              <video
                id="lab-video-player"
                controls
                playsInline
                poster="/images/plant-processing-line.jpeg"
                src="/video/facility-overview.mp4"
              >
                Your browser does not support HTML5 video streaming.
              </video>
            </div>

            <div className="video-controls-bar">
              <div className="video-label-info">
                <span className="status-dot-pulse" style={{ background: '#10B981' }}></span>
                <span id="video-current-title">R&amp;B Foods Continuous Aseptic Facility &bull; Shorkot Plant</span>
              </div>
              <div className="video-selector-tabs">
                <span style={{ fontSize: '0.78rem', color: 'var(--color-cream-300)', padding: '0.35rem 0.75rem', background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-full)' }}>
                  Verified Factory Floor
                </span>
              </div>
            </div>
          </div>

          {/* Testing Parameters & Protocols */}
          <div className="lab-details-col reveal reveal-right is-visible delay-200">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--color-primary-900)', marginBottom: '1rem' }}>
              Rigorous Multi-Tier Inspection Protocols
            </h3>
            <p style={{ color: 'var(--color-charcoal-700)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Continuous monitoring at critical control points (CCPs) ensures microbial sterility, uniform pulp viscosity, and preserved natural sensory characteristics from intake to aseptic filling.
            </p>

            <div className="lab-parameters-grid">
              <div className="param-card">
                <h5>Refractometric Brix &amp; Acidity</h5>
                <p>Digital temperature-compensated refractometry calibrated to &plusmn;0.1&deg; Brix and titratable acidity.</p>
              </div>

              <div className="param-card">
                <h5>Bostwick Viscometry</h5>
                <p>Precise measurement of fruit pulp flow rate and consistency index (cm/30s at 20&deg;C).</p>
              </div>

              <div className="param-card">
                <h5>Microbiological Sterility Clearance</h5>
                <p>Total Plate Count (TPC) &lt; 10 cfu/g, zero yeast, zero mould, and negative for pathogenic bacteria.</p>
              </div>

              <div className="param-card">
                <h5>HunterLab Color &amp; Organoleptic</h5>
                <p>Standardized color index, natural aroma, and flavor evaluation ensuring authentic varietal integrity.</p>
              </div>
            </div>

            <div className="cert-badges-row">
              <div className="cert-badge-item">
                <img src="/logos/haccp.jpg" alt="HACCP Certified" />
                <span>HACCP Certified</span>
              </div>
              <div className="cert-badge-item">
                <img src="/logos/cert.png" alt="Food Safety Certification" />
                <span>ISO 22000 Aligned</span>
              </div>
              <div className="cert-badge-item">
                <span style={{ color: '#059669', fontSize: '1.1rem', fontWeight: 800 }}>حلال</span>
                <span>100% Halal Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
