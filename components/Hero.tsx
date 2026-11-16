'use client';

import React, { useState, useEffect, useRef } from 'react';

const VISUAL_TABS = [
  {
    id: 'portfolio',
    label: 'Full Portfolio',
    productName: 'Full Fruit Pulp Portfolio',
    image: '/images/banner-fruit-portfolio.jpg',
    badgeTop: '5 Puree Spectrum • 210 KG Aseptic Drums',
    badgeBottom: 'BERTUZZI Continuous Line (Milan, Italy)',
    tagline: 'Leading Manufacturers & Exporters of Fruit & Vegetable Pulps'
  },
  {
    id: 'mango',
    label: 'Mango Special',
    productName: 'Pakistani Chaunsa & Desi Mango Pulp',
    image: '/images/banner-mango.jpg',
    badgeTop: 'Chaunsa 20°–26° • Desi 14°–18° Brix',
    badgeBottom: '100% Non-GMO • Single Strength Puree',
    tagline: 'Pakistani Chaunsa, Desi, Langra, Dusehri & Ratool'
  },
  {
    id: 'guava',
    label: 'White Guava',
    productName: 'Aseptic White Guava Puree & Pulp',
    image: '/images/banner-guava.jpg',
    badgeTop: '7°–13° Brix • Natural Vitamin C',
    badgeBottom: 'Creamy-White Texture • Zero Defect',
    tagline: 'Aseptic Sterilized White Guava Puree'
  },
  {
    id: 'peach',
    label: 'Summer Peach',
    productName: 'Sun-Ripened Orchard Peach Pulp',
    image: '/images/banner-peach.jpg',
    badgeTop: '10°–14° Brix • Natural Carotenoids',
    badgeBottom: 'Fine Double-Refined Texture',
    tagline: 'Sun-Ripened Orchard Peach Pulp'
  },
  {
    id: 'strawberry',
    label: 'Strawberry',
    productName: 'Fresh Field Strawberry Puree',
    image: '/images/banner-strawberry.jpg',
    badgeTop: '7°–10° Brix • Natural Ruby Pigment',
    badgeBottom: 'Preservative-Free • Undiluted',
    tagline: 'Fresh Field Strawberry Puree'
  },
  {
    id: 'falsa',
    label: 'Exotic Falsa',
    productName: 'Pakistani Grewia Asiatica (Falsa) Pulp',
    image: '/images/banner-falsa.jpg',
    badgeTop: '8°–12° Brix • Deep Royal Purple',
    badgeBottom: 'High Antioxidant Wild Berry',
    tagline: 'Pakistani Grewia Asiatica (Falsa) Pulp'
  }
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [counts, setCounts] = useState({ capacity: 0, drums: 0, micro: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Automatic Hero Carousel Transition (Changes every 4.5 seconds; pauses on user hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % VISUAL_TABS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Auto-scroll the active tab into view horizontally on mobile
  useEffect(() => {
    const activeBtn = tabRefs.current[activeTab];
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeTab]);

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
        drums: Math.floor(easeOut * 210),
        micro: Math.floor(easeOut * 100)
      });

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, []);

  const currentVisual = VISUAL_TABS[activeTab];

  return (
    <section className="hero-section">
      {/* Ambient Tropical Atmospheric Glow */}
      <div className="ambient-glow-orb ambient-orb-1" aria-hidden="true"></div>
      <div className="ambient-glow-orb ambient-orb-2" aria-hidden="true"></div>

      <div className="container">
        {/* Main Hero Split Grid */}
        <div className="hero-grid">
          {/* Left Column: Core Value Proposition */}
          <div className="hero-content reveal is-visible">
            <div className="provenance-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>BERTUZZI CONTINUOUS LINE &bull; SHORKOT, PUNJAB &bull; 100% NON-GMO</span>
            </div>

            <h1 className="hero-title">
              Leading Manufacturers &amp; Exporters of{' '}
              <em style={{ color: 'var(--color-gold-500)', fontStyle: 'italic' }}>
                Fruit &amp; Vegetable Pulps.
              </em>
            </h1>

            <p className="hero-lead">
              R&amp;B Foods (Pvt.) Ltd. operates Pakistan’s premier industrial aseptic processing facility in Shorkot, Punjab. Equipped with genuine <strong>BERTUZZI (Milan, Italy)</strong> continuous lines, delivering single-strength and concentrated fruit purees in 210kg aseptic steel drums to multinational beverage, dairy, and confectionery brands.
            </p>

            <div className="hero-cta-group">
              <a
                href="#rfq-calculator"
                className="btn btn-gold hero-btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                Request Commercial RFQ &amp; Samples
              </a>
              <a
                href="#purees"
                className="btn btn-secondary hero-btn-secondary"
              >
                Explore 10+ Fruit Purees
              </a>
            </div>

            {/* Live Animated Metric Counters */}
            <div className="hero-metrics-bar">
              <div className="metric-item">
                <span className="metric-val">
                  {counts.capacity.toLocaleString()}
                  <small>MT</small>
                </span>
                <span className="metric-label">Annual Intake Capacity</span>
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
                <span className="metric-label">Halal &amp; Preservative Free</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Definition Visual Showcase (Automatic Rotation + Interactive Tabs) */}
          <div
            className="hero-visual-card reveal reveal-scale is-visible"
            id="hero-card"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Visual Selector Tabs with Live Active Indicator */}
            <div className="hero-tabs-strip">
              {VISUAL_TABS.map((tab, idx) => (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  type="button"
                  onClick={() => {
                    setActiveTab(idx);
                    setIsPaused(true);
                  }}
                  className={`hero-tab-pill ${activeTab === idx ? 'is-active' : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Prominent Active Product Name Banner */}
            <div className="hero-product-banner">
              <div className="hero-product-banner-header">
                <span className="hero-product-pulse-dot" aria-hidden="true"></span>
                <span className="hero-product-badge">SELECTED PRODUCT</span>
              </div>
              <h4 className="hero-product-title">{currentVisual.productName}</h4>
              <p className="hero-product-subtitle">{currentVisual.tagline}</p>
            </div>

            {/* Active Visual Container */}
            <div
              className="hero-image-stack"
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 12px 36px rgba(0,0,0,0.12)',
                position: 'relative',
                aspectRatio: '4 / 3'
              }}
            >
              <img
                key={currentVisual.image}
                src={currentVisual.image}
                alt={currentVisual.tagline}
                className="hero-primary-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  animation: 'fadeIn 0.4s ease'
                }}
              />

              {/* Floating Top Badge */}
              <div className="hero-floating-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{currentVisual.badgeTop}</span>
              </div>

              {/* Floating Bottom Badge */}
              <div className="hero-floating-badge-bottom">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{currentVisual.badgeBottom}</span>
              </div>
            </div>

            {/* Docked Technical Specification Footnote */}
            <div className="hero-docked-card">
              <div
                className="drum-icon-circle"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--color-primary-900)',
                  color: 'var(--color-gold-400)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                  <line x1="3" y1="16" x2="21" y2="16"></line>
                </svg>
              </div>
              <div className="hero-docked-text" style={{ flex: 1 }}>
                <h5 style={{ margin: 0, fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-primary-950)' }}>
                  Continuous Flash Sterilization &bull; 210 KG Aseptic Drums
                </h5>
                <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--color-charcoal-600)' }}>
                  Class 100 laminar cleanroom sealed. 18-month shelf life at 4&deg;C &ndash; 8&deg;C.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Fruit Quick Spectrum Strip (Below Grid) */}
        <div
          style={{
            marginTop: '3rem',
            padding: '1.25rem 1.75rem',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(254,243,199,0.55) 100%)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(217, 119, 6, 0.22)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.05)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--color-primary-950)', textTransform: 'uppercase' }}>
              &bull; Official R&amp;B Foods Puree Export Spectrum
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-charcoal-600)', fontWeight: 600 }}>
              100% Single-Strength &bull; Zero Artificial Color or Flavor &bull; Non-GMO Certified
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem'
            }}
          >
            <div
              onClick={() => {
                setActiveTab(1);
                setIsPaused(true);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.6rem 0.75rem',
                background: '#FFF',
                borderRadius: 'var(--radius-sm)',
                border: activeTab === 1 ? '2px solid var(--color-gold-500)' : '1px solid #FDE68A',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#F59E0B', flexShrink: 0 }}></span>
              <div>
                <strong style={{ fontSize: '0.85rem', display: 'block', color: 'var(--color-primary-950)' }}>Mango Pulps</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-600)' }}>Chaunsa, Desi, Langra, Dusehri, Ratool</span>
              </div>
            </div>

            <div
              onClick={() => {
                setActiveTab(2);
                setIsPaused(true);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.6rem 0.75rem',
                background: '#FFF',
                borderRadius: 'var(--radius-sm)',
                border: activeTab === 2 ? '2px solid var(--color-gold-500)' : '1px solid #E2E8F0',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#F1F5F9', border: '1px solid #CBD5E1', flexShrink: 0 }}></span>
              <div>
                <strong style={{ fontSize: '0.85rem', display: 'block', color: 'var(--color-primary-950)' }}>White Guava</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-600)' }}>7&deg; &ndash; 13&deg; Brix &bull; Natural Vit C</span>
              </div>
            </div>

            <div
              onClick={() => {
                setActiveTab(3);
                setIsPaused(true);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.6rem 0.75rem',
                background: '#FFF',
                borderRadius: 'var(--radius-sm)',
                border: activeTab === 3 ? '2px solid var(--color-gold-500)' : '1px solid #FED7AA',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#FB923C', flexShrink: 0 }}></span>
              <div>
                <strong style={{ fontSize: '0.85rem', display: 'block', color: 'var(--color-primary-950)' }}>Peach Pulp</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-600)' }}>10&deg; &ndash; 14&deg; Brix &bull; Golden Orange</span>
              </div>
            </div>

            <div
              onClick={() => {
                setActiveTab(4);
                setIsPaused(true);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.6rem 0.75rem',
                background: '#FFF',
                borderRadius: 'var(--radius-sm)',
                border: activeTab === 4 ? '2px solid var(--color-gold-500)' : '1px solid #FECDD3',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#F43F5E', flexShrink: 0 }}></span>
              <div>
                <strong style={{ fontSize: '0.85rem', display: 'block', color: 'var(--color-primary-950)' }}>Strawberry</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-600)' }}>7&deg; &ndash; 10&deg; Brix &bull; Natural Ruby Red</span>
              </div>
            </div>

            <div
              onClick={() => {
                setActiveTab(5);
                setIsPaused(true);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.6rem 0.75rem',
                background: '#FFF',
                borderRadius: 'var(--radius-sm)',
                border: activeTab === 5 ? '2px solid var(--color-gold-500)' : '1px solid #E9D5FF',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#9333EA', flexShrink: 0 }}></span>
              <div>
                <strong style={{ fontSize: '0.85rem', display: 'block', color: 'var(--color-primary-950)' }}>Falsa Pulp</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-600)' }}>8&deg; &ndash; 12&deg; Brix &bull; Royal Purple Berry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
