'use client';

import React, { useEffect, useRef } from 'react';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const tiltCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = tiltCardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Value Proposition & Procurement CTAs */}
          <div className="hero-content">
            <div className="hero-badge-pill">
              <span className="hero-badge-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </span>
              <span>ASEPTIC &amp; FROZEN PUREE LINE &bull; SHORKOT, PUNJAB</span>
            </div>

            <h1 className="hero-headline">
              Nature’s Purest Harvest, Engineered for{' '}
              <span className="text-gradient-gold">Global Aseptic Standards.</span>
            </h1>

            <p className="hero-subtext">
              <strong>R&amp;B Foods (Pvt.) Ltd</strong> operates Pakistan’s benchmark industrial processing facility equipped with genuine <strong>BERTUZZI (Italy)</strong> continuous lines. We supply world-class Chaunsa mango, pink guava, and citrus purees to the globe’s premier beverage and dairy conglomerates.
            </p>

            <div className="hero-cta-group">
              <a href="#products" className="btn btn-primary btn-large">
                <span>Explore Puree Catalog</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <button
                type="button"
                className="btn btn-outline btn-large"
                onClick={onOpenQuote}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                <span>Request Commercial Sample Kit</span>
              </button>
            </div>

            <div className="hero-trust-row">
              <div className="trust-item">
                <span className="trust-check">&check;</span>
                <span>FSSC 22000 &amp; ISO 9001 Certified</span>
              </div>
              <div className="trust-item">
                <span className="trust-check">&check;</span>
                <span>100% Halal &amp; Kosher Compliant</span>
              </div>
              <div className="trust-item">
                <span className="trust-check">&check;</span>
                <span>Zero Artificial Preservatives</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Machinery & Puree Showcase with Parallax Tilt */}
          <div className="hero-visual-wrapper">
            <div className="hero-image-card" ref={tiltCardRef}>
              <div className="hero-img-container">
                <img
                  src="/images/cutted-mango.jpg"
                  alt="Fresh Chaunsa Mango ready for processing"
                  className="hero-main-img"
                  width="700"
                  height="520"
                />
                <div className="hero-img-overlay"></div>
              </div>

              {/* Floating Analytical Spec Tag */}
              <div className="hero-floating-tag tag-top">
                <div className="floating-tag-pulse"></div>
                <div className="floating-tag-text">
                  <span className="tag-label">Peak Brix Chaunsa</span>
                  <span className="tag-val">28&deg; &ndash; 30&deg; Concentrated</span>
                </div>
              </div>

              {/* Bertuzzi Docked Technical Badge */}
              <div className="hero-docked-card">
                <div className="docked-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <div className="docked-content">
                  <span className="docked-title">BERTUZZI (Milan, Italy)</span>
                  <span className="docked-sub">Continuous Aseptic Cold Line &bull; 100% In-line Quality Control</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rapid Technical Metrics Counter Banner */}
        <div className="hero-metrics-bar">
          <div className="metric-cell">
            <span className="metric-number">35,000</span>
            <span className="metric-unit">MT / Season</span>
            <span className="metric-label">Total Processing Capacity</span>
          </div>
          <div className="metric-cell">
            <span className="metric-number">215</span>
            <span className="metric-unit">KG Net</span>
            <span className="metric-label">Aseptic Drums / Cold Chain</span>
          </div>
          <div className="metric-cell">
            <span className="metric-number">100%</span>
            <span className="metric-unit">Italian Line</span>
            <span className="metric-label">Bertuzzi Continuous Machinery</span>
          </div>
          <div className="metric-cell">
            <span className="metric-number">14+</span>
            <span className="metric-unit">Global Ports</span>
            <span className="metric-label">FOB Karachi &amp; Direct CIF Deliveries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
