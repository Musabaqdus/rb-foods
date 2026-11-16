'use client';

import React, { useState } from 'react';

export default function QualityLabTour() {
  const [activeVideo, setActiveVideo] = useState<'lab' | 'facility'>('lab');

  return (
    <section className="lab-section" id="quality-lab">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-pill">QA/QC ANALYTICAL ASSURANCE</span>
          <h2 className="section-title">
            In-House Analytical Laboratory &amp; Production Facility Tour
          </h2>
          <p className="section-subtitle">
            Every batch undergoes stringent analytical and microbiological testing in our climate-controlled laboratory before export release. Watch our laboratory and production facility in action.
          </p>
        </div>

        <div className="lab-grid">
          {/* Left Column: Interactive Video Player with Switcher */}
          <div className="lab-video-wrapper">
            <div className="video-switcher-tabs">
              <button
                type="button"
                className={`video-tab-btn ${activeVideo === 'lab' ? 'active' : ''}`}
                onClick={() => setActiveVideo('lab')}
              >
                Analytical QA Lab Tour
              </button>
              <button
                type="button"
                className={`video-tab-btn ${activeVideo === 'facility' ? 'active' : ''}`}
                onClick={() => setActiveVideo('facility')}
              >
                Bertuzzi Production Hall
              </button>
            </div>

            <div className="video-player-container">
              {activeVideo === 'lab' ? (
                <video
                  key="video-lab"
                  className="facility-video-element"
                  controls
                  playsInline
                  poster="/images/lab-testing.jpg"
                >
                  <source src="/video/lab-tour.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video streaming.
                </video>
              ) : (
                <video
                  key="video-facility"
                  className="facility-video-element"
                  controls
                  playsInline
                  poster="/images/packaging-drums.jpg"
                >
                  <source src="/video/facility-overview.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video streaming.
                </video>
              )}
            </div>
            <p className="video-caption-note">
              &bull; Official R&amp;B Foods Plant Footage &bull; Shorkot Industrial Estate &bull; Pakistan
            </p>
          </div>

          {/* Right Column: Testing Protocols & Standards */}
          <div className="lab-specs-column">
            <h3 className="lab-headline">Comprehensive Batch Clearance Protocol</h3>
            <p className="lab-subtext">
              Zero tolerance for deviation. We provide full Certificate of Analysis (COA) with each export container conforming to AIJN (European Fruit Juice Association) Code of Practice and FDA standards.
            </p>

            <div className="lab-protocol-list">
              <div className="protocol-card">
                <div className="protocol-badge">01</div>
                <div>
                  <h4 className="protocol-name">Refractometric &amp; Physical Analysis</h4>
                  <p className="protocol-desc">
                    Digital temperature-compensated refractometers calibrate Brix (&deg;Bx), Bostwick consistometer measures millimetric flow rate at 20&deg;C, and spectrophotometers log Color Index.
                  </p>
                </div>
              </div>

              <div className="protocol-card">
                <div className="protocol-badge">02</div>
                <div>
                  <h4 className="protocol-name">Microbiological Sterility Plating</h4>
                  <p className="protocol-desc">
                    Laminar airflow hood plating screens for TPC, Yeast, Mould, Coliforms, and pathogenic bacteria (Salmonella, E. coli, Listeria) with mandatory 7-day incubation holds.
                  </p>
                </div>
              </div>

              <div className="protocol-card">
                <div className="protocol-badge">03</div>
                <div>
                  <h4 className="protocol-name">Residue &amp; Heavy Metals Screening</h4>
                  <p className="protocol-desc">
                    Gas chromatography (GC-MS) and liquid chromatography (LC-MS) screening verify compliance with strict EU MRLs (Maximum Residue Limits) and US FDA agrochemical thresholds.
                  </p>
                </div>
              </div>
            </div>

            <div className="cert-badges-grid">
              <div className="cert-pill">FSSC 22000 v5.1</div>
              <div className="cert-pill">ISO 9001:2015</div>
              <div className="cert-pill">HACCP Codex</div>
              <div className="cert-pill">Halal Certified</div>
              <div className="cert-pill">Kosher Certified</div>
              <div className="cert-pill">FDA Registered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
