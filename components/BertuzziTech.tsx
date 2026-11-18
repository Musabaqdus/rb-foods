'use client';

import React, { useState } from 'react';

export default function BertuzziTech() {
  const [activeMedia, setActiveMedia] = useState<'video' | 'schematic'>('video');

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
            <p className="step-desc">Clean water immersion, high-pressure spray washing, and continuous manual sorting eliminate substandard fruits before entry.</p>
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
          <div className="tech-media-col" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {/* View Mode Toggle Switch */}
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <button
                type="button"
                onClick={() => setActiveMedia('video')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.8rem',
                  fontWeight: activeMedia === 'video' ? 700 : 500,
                  borderRadius: 'var(--radius-sm)',
                  border: activeMedia === 'video' ? '1px solid var(--color-gold-500)' : '1px solid rgba(255,255,255,0.2)',
                  background: activeMedia === 'video' ? 'var(--color-gold-500)' : 'rgba(255,255,255,0.08)',
                  color: activeMedia === 'video' ? '#000' : '#FFF',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <span>Live Plant Video Tour</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMedia('schematic')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.8rem',
                  fontWeight: activeMedia === 'schematic' ? 700 : 500,
                  borderRadius: 'var(--radius-sm)',
                  border: activeMedia === 'schematic' ? '1px solid var(--color-gold-500)' : '1px solid rgba(255,255,255,0.2)',
                  background: activeMedia === 'schematic' ? 'var(--color-gold-500)' : 'rgba(255,255,255,0.08)',
                  color: activeMedia === 'schematic' ? '#000' : '#FFF',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                <span>BERTUZZI Equipment Schematic</span>
              </button>
            </div>

            {/* Media Presentation Frame */}
            <div className="tech-media-wrap" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.25)', background: '#000' }}>
              {activeMedia === 'video' ? (
                <div style={{ position: 'relative', width: '100%', background: '#000' }}>
                  <video
                    controls
                    playsInline
                    preload="none"
                    poster="/images/video-poster-monogram.jpg"
                    style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '520px' }}
                  >
                    <source src="/video/plant-tour.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div style={{ position: 'relative' }}>
                  <img
                    src="/images/bertuzzi-mango-processing.jpg"
                    alt="BERTUZZI Italy Continuous Processing Equipment at R&B Foods Plant"
                    style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', minHeight: '340px' }}
                  ></img>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(7, 25, 17, 0.95))',
                    padding: '1.25rem 1.5rem',
                    color: '#FFFFFF'
                  }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-gold-400)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                      Factory Floor &bull; Shorkot Facility
                    </span>
                    <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: '#FFF' }}>
                      BERTUZZI (Milan, Italy) Continuous Aseptic Extraction &amp; Flash Sterilization Line
                    </h4>
                  </div>
                </div>
              )}
            </div>

            {/* Video Provenance Bar */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.65rem 0.85rem',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-cream-200)',
              fontSize: '0.8rem',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="status-dot-pulse" style={{ background: '#10B981', width: '8px', height: '8px', borderRadius: '50%' }}></span>
                <span><strong>R&amp;B Foods (Pvt.) Ltd.</strong> &bull; Authentic Shorkot Plant Floor Video</span>
              </div>
              <span style={{ color: 'var(--color-gold-400)', fontSize: '0.75rem', fontWeight: 600 }}>
                Direct Continuous Line &bull; 1080p HD
              </span>
            </div>
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
