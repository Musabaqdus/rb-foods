'use client';

import React, { useState, useRef } from 'react';

export default function QualityLabTour() {
  const [currentVideo, setCurrentVideo] = useState({
    src: '/video/lab-tour.mp4',
    title: 'In-House QA & Microbiological Testing Lab'
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTabChange = (src: string, title: string) => {
    setCurrentVideo({ src, title });
    if (videoRef.current) {
      videoRef.current.src = src;
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="section" id="laboratory">
      <div className="container">
        <div className="section-header reveal is-visible">
          <span className="section-kicker">Zero-Defect Quality Mandate</span>
          <h2 className="section-title">Certified In-House QA / QC Testing Lab</h2>
          <p className="section-desc">
            Every drum that leaves Shorkot is backed by our comprehensive analytical and microbiological Certificate of Analysis (COA). We test incoming fruit, in-line process streams, and final packed product.
          </p>
        </div>

        <div className="lab-grid">
          {/* Interactive Video Player for QA Lab */}
          <div className="lab-video-container reveal reveal-left is-visible delay-100">
            <div className="video-player-wrapper">
              <video
                ref={videoRef}
                id="lab-video-player"
                controls
                poster="/images/plant-processing-line.jpeg"
                src={currentVideo.src}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="video-controls-bar">
              <div className="video-label-info">
                <span className="status-dot-pulse" style={{ background: '#E58C05' }}></span>
                <span id="video-current-title">{currentVideo.title}</span>
              </div>
              <div className="video-selector-tabs">
                <button
                  type="button"
                  className={`video-tab-btn ${currentVideo.src.includes('lab-tour') ? 'active' : ''}`}
                  onClick={() => handleTabChange('/video/lab-tour.mp4', 'In-House QA & Microbiological Testing Lab')}
                >
                  Lab Tour
                </button>
                <button
                  type="button"
                  className={`video-tab-btn ${currentVideo.src.includes('facility') ? 'active' : ''}`}
                  onClick={() => handleTabChange('/video/facility-overview.mp4', 'Bertuzzi Continuous Processing Line')}
                >
                  Factory Floor
                </button>
              </div>
            </div>
          </div>

          {/* Testing Parameters */}
          <div className="lab-details-col reveal reveal-right is-visible delay-200">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--color-primary-900)', marginBottom: '1rem' }}>
              Rigorous Multi-Tier Inspection Protocols
            </h3>
            <p style={{ color: 'var(--color-charcoal-700)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Our laboratory is staffed by veteran food technologists with decades of multinational experience. Samples from every production batch undergo 7-day sterile incubation before commercial release.
            </p>

            <div className="lab-parameters-grid">
              <div className="param-card">
                <h5>Refractometric Brix &amp; Ratio</h5>
                <p>Digital temperature-compensated refractometry accurate to &plusmn;0.1&deg; Brix.</p>
              </div>

              <div className="param-card">
                <h5>Bostwick Viscometry</h5>
                <p>Precise measurement of puree pulp flow rate and consistency (cm/30s at 20&deg;C).</p>
              </div>

              <div className="param-card">
                <h5>Microbiological Plating</h5>
                <p>Total Plate Count &lt;10 cfu/g, zero yeast, zero mold, pathogens negative.</p>
              </div>

              <div className="param-card">
                <h5>Spectrophotometric Color</h5>
                <p>Standardized HunterLab colorimetry ensuring uniform brand color matching.</p>
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
