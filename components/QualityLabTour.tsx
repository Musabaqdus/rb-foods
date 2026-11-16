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
          {/* Facility Processing & Lab Testing Showcase */}
          <div className="lab-video-container reveal reveal-left is-visible delay-100">
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)', boxShadow: '0 15px 35px rgba(0,0,0,0.12)' }}>
              <img
                src="/images/plant-processing-line.jpeg"
                alt="R&B Foods Continuous Aseptic Processing & Quality Control Station"
                style={{ width: '100%', height: 'auto', display: 'block', minHeight: '340px', objectFit: 'cover' }}
              />

              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(7, 25, 17, 0.9)',
                backdropFilter: 'blur(8px)',
                padding: '0.45rem 0.85rem',
                borderRadius: '9999px',
                color: '#FFF',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <span className="status-dot-pulse" style={{ background: '#10B981', width: '8px', height: '8px', borderRadius: '50%' }}></span>
                <span>In-Line QC Active &bull; Zero Defect</span>
              </div>

              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(7, 25, 17, 0.95))',
                padding: '1.5rem',
                color: '#FFFFFF'
              }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-gold-400)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                  Aseptic Cleanroom &bull; Shorkot Industrial Plant
                </span>
                <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: '#FFF' }}>
                  Continuous Sampling &amp; Multi-Tier Analytical Verification Station
                </h4>
              </div>
            </div>

            {/* Industrial Real-Time Quality Monitor Strip */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'var(--color-primary-950)',
              padding: '0.85rem 1.25rem',
              borderRadius: '0 0 var(--radius-md) var(--radius-md)',
              color: '#FFFFFF',
              fontSize: '0.8rem',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="status-dot-pulse" style={{ background: '#10B981', width: '7px', height: '7px', borderRadius: '50%' }}></span>
                <span style={{ color: 'var(--color-cream-200)', fontWeight: 600 }}>COA Audit Compliance: 100% Passed</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-gold-400)', padding: '0.25rem 0.65rem', background: 'rgba(255,255,255,0.08)', borderRadius: '4px' }}>
                  Turbidity &lt; 0.5 NTU
                </span>
                <span style={{ fontSize: '0.75rem', color: '#6EE7B7', padding: '0.25rem 0.65rem', background: 'rgba(255,255,255,0.08)', borderRadius: '4px' }}>
                  TPC &lt; 10 CFU/g
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
