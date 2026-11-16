'use client';

import React, { useState, useEffect } from 'react';

const HERO_SLIDES = [
  {
    tag: 'FLAGSHIP EXPORT',
    title: 'Leading Manufacturers & Exporters of Fruit & Vegetable Pulp',
    lead: 'R&B Foods (Pvt.) Ltd. operates Pakistan’s premier industrial aseptic processing facility in Shorkot, Punjab. Equipped with genuine BERTUZZI (Milan, Italy) continuous lines, supplying single-strength and concentrated fruit pulps to global beverage and dairy leaders.',
    bannerImg: '/images/fruit-pulp-portfolio-banner.jpg',
    accentColor: '#F59E0B'
  },
  {
    tag: 'MANGO SPECIALTIES',
    title: 'Authentic Pakistani Chaunsa, Desi, Langra, Dusehri & Ratool',
    lead: 'Processed from mature, clean Pakistani mangoes. Undiluted, unevaporated, not from concentrate, and certified NON-GMO. Preserves intense natural aroma and velvety consistency.',
    bannerImg: '/images/R&B Foods_Main_Banner 2000x600 Mango.jpg',
    accentColor: '#EAB308'
  },
  {
    tag: 'WHITE GUAVA PULP',
    title: 'Creamy-White Aseptic Guava with Natural Vitamin C',
    lead: 'Sterilised and packed in 210kg aseptic bags. Renowned for its delicate tropical sweetness, natural pectin viscosity, and zero astringency for premium juice and nectar blending.',
    bannerImg: '/images/R&B Foods_Main_Banner 2000x600 Guava.jpg',
    accentColor: '#10B981'
  },
  {
    tag: 'SUMMER PEACH & BERRIES',
    title: 'Juicy Summer Peach, Fresh Strawberry & Exotic Falsa Pulp',
    lead: 'Capturing the unadulterated freshness of orchard-picked fruits. Packed with vibrant natural pigments, volatile fruit esters, and bioavailable vitamins without artificial additives.',
    bannerImg: '/images/R&B Foods_Main_Banner 2000x600 Strawberry.jpg',
    accentColor: '#EF4444'
  }
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [counts, setCounts] = useState({ capacity: 0, drums: 0, micro: 0 });

  // Auto-advance banner slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
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
        drums: Math.floor(easeOut * 210),
        micro: Math.floor(easeOut * 100)
      });

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, []);

  const slide = HERO_SLIDES[activeSlide];

  return (
    <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Dynamic Ambient Tropical Light Orbs */}
      <div className="ambient-glow-orb ambient-orb-1" aria-hidden="true"></div>
      <div className="ambient-glow-orb ambient-orb-2" aria-hidden="true"></div>

      <div className="container">
        {/* Main Hero Split Grid */}
        <div className="hero-grid" style={{ alignItems: 'center' }}>
          {/* Left Column: Core Value Proposition */}
          <div className="hero-content reveal is-visible">
            <div className="provenance-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>{slide.tag} &bull; SHORKOT, PUNJAB &bull; NON-GMO</span>
            </div>

            <h1 className="hero-title" style={{ marginTop: '0.85rem', lineHeight: 1.15 }}>
              Leading Manufacturers &amp; Exporters of{' '}
              <em style={{ color: 'var(--color-gold-500)', fontStyle: 'italic' }}>
                Fruit &amp; Vegetable Pulp.
              </em>
            </h1>

            <p className="hero-lead" style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
              {slide.lead}
            </p>

            <div className="hero-cta-group" style={{ marginTop: '1.75rem' }}>
              <a
                href="#rfq-calculator"
                className="btn btn-gold"
                style={{ padding: '0.95rem 1.85rem', fontSize: '1rem', boxShadow: '0 8px 24px rgba(217, 119, 6, 0.35)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                Request Commercial RFQ &amp; Samples
              </a>
              <a
                href="#purees"
                className="btn btn-secondary"
                style={{ padding: '0.95rem 1.6rem', fontSize: '1rem' }}
              >
                View 10+ Fruit Purees
              </a>
            </div>

            {/* Quick Slide Switcher Indicators */}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', alignItems: 'center' }}>
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  style={{
                    width: activeSlide === idx ? '32px' : '10px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: activeSlide === idx ? 'var(--color-gold-500)' : 'rgba(0,0,0,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Live Animated Metric Counters */}
            <div className="hero-metrics-bar" style={{ marginTop: '2rem' }}>
              <div className="metric-item">
                <span className="metric-val">
                  {counts.capacity.toLocaleString()}
                  <small>MT</small>
                </span>
                <span className="metric-label">Annual Processing Capacity</span>
              </div>
              <div className="metric-item">
                <span className="metric-val">
                  BERTUZZI
                  <small style={{ fontSize: '0.75rem', color: 'var(--color-gold-500)', marginLeft: '3px' }}>
                    MILAN
                  </small>
                </span>
                <span className="metric-label">Continuous Aseptic Line</span>
              </div>
              <div className="metric-item">
                <span className="metric-val">
                  {counts.drums}
                  <small>KG</small>
                </span>
                <span className="metric-label">Aseptic Conical Drums</span>
              </div>
              <div className="metric-item">
                <span className="metric-val">
                  {counts.micro}
                  <small>%</small>
                </span>
                <span className="metric-label">Non-GMO &amp; Halal Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Showcase */}
          <div className="hero-visual-card reveal reveal-scale is-visible" id="hero-card">
            <div
              className="hero-image-stack"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.18)',
                position: 'relative'
              }}
            >
              <img
                src={slide.bannerImg}
                alt={slide.title}
                className="hero-primary-img"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'opacity 0.5s ease',
                  objectFit: 'cover'
                }}
              />

              {/* Top Floating Badge */}
              <div className="hero-floating-badge" style={{ top: '16px', right: '16px' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Chaunsa 20&deg;&ndash;26&deg; &bull; Desi 14&deg;&ndash;18&deg; Brix</span>
              </div>

              {/* Bottom Floating Badge */}
              <div className="hero-floating-badge-bottom" style={{ bottom: '16px', left: '16px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>BERTUZZI Flash Sterilization Line</span>
              </div>
            </div>

            {/* Docked Technical Specification Pill */}
            <div className="hero-docked-card" style={{ marginTop: '1rem' }}>
              <div className="drum-icon-circle" style={{ background: 'var(--color-primary-900)', color: 'var(--color-gold-400)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                  <line x1="3" y1="16" x2="21" y2="16"></line>
                </svg>
              </div>
              <div className="hero-docked-text">
                <h5 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary-950)' }}>
                  Continuous Flash Sterilization &bull; 210 KG Aseptic Drums
                </h5>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-charcoal-600)' }}>
                  Sealed in 4-layer barrier bags under Class 100 laminar cleanroom conditions. 18-month shelf life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Fruit Puree Quick Showcase Strip (Mango, Guava, Peach, Strawberry, Falsa) */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '1.25rem 1.5rem',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(254,243,199,0.5) 100%)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(217, 119, 6, 0.2)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--color-primary-950)', textTransform: 'uppercase' }}>
              &bull; Official R&amp;B Foods Puree Export Spectrum
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-charcoal-600)', fontWeight: 600 }}>
              100% Edible Fruit Pulp &bull; Zero Artificial Color or Flavor &bull; Non-GMO
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', background: '#FFF', borderRadius: 'var(--radius-sm)', border: '1px solid #FDE68A' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#F59E0B', flexShrink: 0 }}></span>
              <div>
                <strong style={{ fontSize: '0.85rem', display: 'block', color: 'var(--color-primary-950)' }}>Mango Pulps</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-600)' }}>Chaunsa, Desi, Langra, Dusehri, Ratool</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', background: '#FFF', borderRadius: 'var(--radius-sm)', border: '1px solid #E2E8F0' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#F1F5F9', border: '1px solid #CBD5E1', flexShrink: 0 }}></span>
              <div>
                <strong style={{ fontSize: '0.85rem', display: 'block', color: 'var(--color-primary-950)' }}>White Guava</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-600)' }}>7&deg; &ndash; 13&deg; Brix &bull; Natural Vit C</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', background: '#FFF', borderRadius: 'var(--radius-sm)', border: '1px solid #FED7AA' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#FB923C', flexShrink: 0 }}></span>
              <div>
                <strong style={{ fontSize: '0.85rem', display: 'block', color: 'var(--color-primary-950)' }}>Peach Pulp</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-600)' }}>10&deg; &ndash; 14&deg; Brix &bull; Golden Orange</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', background: '#FFF', borderRadius: 'var(--radius-sm)', border: '1px solid #FECDD3' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#F43F5E', flexShrink: 0 }}></span>
              <div>
                <strong style={{ fontSize: '0.85rem', display: 'block', color: 'var(--color-primary-950)' }}>Strawberry</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-600)' }}>7&deg; &ndash; 10&deg; Brix &bull; Natural Ruby Red</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', background: '#FFF', borderRadius: 'var(--radius-sm)', border: '1px solid #E9D5FF' }}>
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
