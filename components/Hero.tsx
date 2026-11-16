'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const heroCardRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({ capacity: 0, drums: 0, micro: 0 });

  // 3D Parallax Tilt
  useEffect(() => {
    const card = heroCardRef.current;
    if (!card || window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotX = -(y / rect.height) * 10;
      const rotY = (x / rect.width) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
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

  // Metric Counter Animation
  useEffect(() => {
    const duration = 1800;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);

      setCounts({
        capacity: Math.floor(easeOut * 35000),
        drums: Math.floor(easeOut * 215),
        micro: Math.floor(easeOut * 100)
      });

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, []);

  return (
    <section className="hero-section">
      {/* Ambient Floating Light Orbs */}
      <div className="ambient-glow-orb ambient-orb-1" aria-hidden="true"></div>
      <div className="ambient-glow-orb ambient-orb-2" aria-hidden="true"></div>

      <div className="container hero-grid">
        <div className="hero-content reveal is-visible">
          <div className="provenance-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            Aseptic &amp; Frozen Puree Line &bull; Shorkot, Punjab
          </div>

          <h1 className="hero-title">
            Nature’s Purest Harvest, Engineered for <em>Global Aseptic Standards.</em>
          </h1>

          <p className="hero-lead">
            R&amp;B Foods (Pvt.) Ltd operates Pakistan’s benchmark industrial processing facility equipped with genuine <strong>BERTUZZI (Italy)</strong> continuous lines. We supply world-class Chaunsa mango, pink guava, and citrus purees to the globe&apos;s premier beverage and dairy conglomerates.
          </p>

          <div className="hero-cta-group">
            <a
              href="#rfq-calculator"
              className="btn btn-gold"
              style={{ padding: '0.95rem 1.85rem', fontSize: '1rem' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              Request B2B Pricing &amp; Sample Drums
            </a>
            <a
              href="#purees"
              className="btn btn-secondary"
              style={{ padding: '0.95rem 1.6rem', fontSize: '1rem' }}
            >
              Explore Puree Specs
            </a>
          </div>

          {/* Live Animated Metric Counters */}
          <div className="hero-metrics-bar">
            <div className="metric-item">
              <span className="metric-val">
                {counts.capacity.toLocaleString()}
                <small>MT</small>
              </span>
              <span className="metric-label">Annual Capacity</span>
            </div>
            <div className="metric-item">
              <span className="metric-val">
                BERTUZZI
                <small style={{ fontSize: '0.75rem', color: 'var(--color-gold-500)', marginLeft: '3px' }}>
                  ITALY
                </small>
              </span>
              <span className="metric-label">Continuous Line</span>
            </div>
            <div className="metric-item">
              <span className="metric-val">
                {counts.drums}
                <small>KG</small>
              </span>
              <span className="metric-label">Aseptic Steel Drums</span>
            </div>
            <div className="metric-item">
              <span className="metric-val">
                {counts.micro}
                <small>%</small>
              </span>
              <span className="metric-label">Zero-Defect Micro QA</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Card with Levitating Badges */}
        <div
          className="hero-visual-card reveal reveal-scale is-visible"
          id="hero-card"
          ref={heroCardRef}
        >
          <div className="hero-image-stack">
            <img
              src="/images/mango-pulp-fresh.jpg"
              alt="Pakistani Chaunsa Mango Processing"
              className="hero-primary-img"
            />

            {/* Floating Badge 1: Top Right (Levitating) */}
            <div className="hero-floating-badge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Peak Brix Chaunsa 28&deg;&ndash;30&deg;</span>
            </div>

            {/* Floating Badge 2: Top Left (Levitating Opposite) */}
            <div className="hero-floating-badge-bottom">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>BERTUZZI Continuous Line</span>
            </div>
          </div>

          <div className="hero-docked-card">
            <div className="drum-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <line x1="3" y1="16" x2="21" y2="16"></line>
              </svg>
            </div>
            <div className="hero-docked-text">
              <h5>Continuous Flash Sterilization</h5>
              <p>Sealed in 4-layer aseptic foil drums under laminar air cleanroom conditions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
