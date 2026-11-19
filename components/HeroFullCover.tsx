'use client';

import React, { useState, useEffect } from 'react';

export const FULL_COVER_SLIDES = [
  {
    id: 'portfolio',
    fruit: 'Full Portfolio',
    name: 'Full 5-Fruit Puree Spectrum',
    image: '/images/banner-fruit-portfolio.jpg',
    kicker: 'BERTUZZI CONTINUOUS LINE • SHORKOT, PUNJAB • 100% NON-GMO',
    title: 'Leading Manufacturers & Exporters of',
    titleHighlight: 'Fruit & Vegetable Pulps.',
    lead: 'R&B Foods (Pvt.) Ltd. operates Pakistan’s premier industrial aseptic processing facility in Shorkot, Punjab. Equipped with genuine BERTUZZI (Milan, Italy) continuous lines, delivering single-strength and concentrated fruit purees in 210kg aseptic steel drums to multinational beverage, dairy, and confectionery brands.',
    specs: '5 Varietals • 210 KG Aseptic Steel Drums • Ambient Sterile Shelf Life 18–24 Months'
  },
  {
    id: 'mango',
    fruit: 'Chaunsa Mango',
    name: 'Pakistani Chaunsa & Desi Mango Pulp',
    image: '/images/banner-mango.jpg',
    kicker: 'FLAGSHIP CROP • 20°–26° BRIX • MULTAN & SHORKOT BELT',
    title: 'Authentic Sweetness & Aroma:',
    titleHighlight: 'Chaunsa Mango Puree.',
    lead: 'Undiluted, unevaporated, preservative-free mango pulp refined on stainless-steel rotary pulpers. Retains delicate natural esters and high pectin viscosity without seed astringency. Preferred by leading juice and dairy formulators across the Middle East, Europe, and Asia.',
    specs: 'Typical Brix 20°–25° • Bostwick 9–15 cm/30s • Ascorbic Acid Min. 200 PPM'
  },
  {
    id: 'guava',
    fruit: 'Guava Pulp',
    name: 'Aseptic Guava Puree & Pulp',
    image: '/images/banner-guava.jpg',
    kicker: 'CREAMY TEXTURE • HIGH VITAMIN C • SEPT – JAN CROP',
    title: 'Pectin-Rich Tropical Body:',
    titleHighlight: 'Guava Pulp Aseptic.',
    lead: 'Manufactured from selected mature ripe guavas under continuous flash pasteurization. Natural creamy color, thick velvety body, and sweet aroma ideal for tropical nectar blends, baby food formulations, and strained fruit applications.',
    specs: 'Typical Brix 07°–12° • Acidity 0.30%–0.70% • Total Plate Count <10 CFU/g'
  },
  {
    id: 'peach',
    fruit: 'Summer Peach',
    name: 'Sun-Ripened Orchard Peach Pulp',
    image: '/images/banner-peach.jpg',
    kicker: 'FINE DOUBLE-REFINED • 10°–14° BRIX • NATURAL CAROTENOIDS',
    title: 'Golden Orchard Sweetness:',
    titleHighlight: 'Fresh Peach Puree.',
    lead: 'Cold-refined from ripe Punjab and KP orchard peaches. Natural golden-orange hue with balanced titratable acidity, zero artificial coloring, and complete micro-retention via aseptic 4-layer barrier bags in steel drums.',
    specs: 'Typical Brix 10°–14° • pH 3.6–4.0 • Zero Additives or Artificial Flavors'
  },
  {
    id: 'strawberry',
    fruit: 'Ruby Strawberry',
    name: 'Fresh Field Strawberry Puree',
    image: '/images/banner-strawberry.jpg',
    kicker: 'VIBRANT RUBY PIGMENT • 7°–10° BRIX • FEB – APRIL CROP',
    title: 'Vibrant Field Freshness:',
    titleHighlight: 'Ruby Strawberry Puree.',
    lead: 'Processed within hours of morning harvesting to protect temperature-sensitive anthocyanins and natural strawberry fragrance. Suitable for premium dairy yogurts, ice creams, confectionery fillings, and fruit beverages.',
    specs: 'Typical Brix 7°–10° • Acidity 0.8%–1.4% • 100% Non-GMO & Halal Certified'
  },
  {
    id: 'falsa',
    fruit: 'Exotic Falsa',
    name: 'Grewia Asiatica (Falsa) Wild Berry Pulp',
    image: '/images/banner-falsa.jpg',
    kicker: 'HIGH ANTIOXIDANT • DEEP ROYAL PURPLE • MAY – JUNE HARVEST',
    title: 'Rare Indigenous Superfruit:',
    titleHighlight: 'Pakistani Falsa Pulp.',
    lead: 'Unique tart-sweet wild berry puree native to South Asia. Naturally rich in polyphenols and anthocyanins, providing deep royal purple color and crisp tart refreshment for innovative functional beverages and artisanal sorbets.',
    specs: 'Typical Brix 8°–12° • Deep Natural Purple • Zero Reconstitution'
  },
  {
    id: 'plant',
    fruit: 'BERTUZZI Plant',
    name: 'Shorkot Continuous Industrial Facility',
    image: '/images/plant-processing-line.jpeg',
    kicker: 'ITALIAN BERTUZZI LINE • 35,000 MT ANNUAL INTAKE • SHORKOT',
    title: 'State-of-the-Art Processing:',
    titleHighlight: 'Engineered by BERTUZZI Milan.',
    lead: 'Three-tier optical washing, cold destoning, vacuum de-aeration, high-temperature short-time (HTST) tubular flash sterilization, and Class 100 laminar cleanroom aseptic filling into 210kg steel export drums.',
    specs: '100% Continuous Flow • SCADA Monitored CCPs • Automated CIP / SIP Cycles'
  }
];

export default function HeroFullCover() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counts, setCounts] = useState({ capacity: 0, drums: 0, micro: 0 });

  // Auto-cycle through slides every 5.5 seconds smoothly without pause on hover
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FULL_COVER_SLIDES.length);
    }, 5500);
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

    const animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, []);

  const slide = FULL_COVER_SLIDES[currentSlide];

  return (
    <section
      className="hero-fullcover-section"
      aria-label="R&B Foods Hero Showcase"
    >
      {/* Background Image Slides with Smooth Cross-Fade */}
      {FULL_COVER_SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={`hero-fullcover-bg ${idx === currentSlide ? 'is-active' : ''}`}
          style={{ backgroundImage: `url('${s.image}')` }}
          aria-hidden="true"
        />
      ))}

      {/* Multi-Stop Cinematic Dark Luxury Overlay */}
      <div className="hero-fullcover-overlay" aria-hidden="true" />

      {/* Main Container */}
      <div className="container hero-fullcover-container">
        {/* Foreground Content Card (Left Aligned for Optimal English Reading & Contrast) */}
        <div className="hero-fullcover-content">
          {/* Pinned Provenance Pill */}
          <div className="hero-fullcover-kicker-pill">
            <span className="hero-fullcover-dot" aria-hidden="true"></span>
            <span>{slide.kicker}</span>
          </div>

          {/* Headline */}
          <h1 className="hero-fullcover-title">
            {slide.title}{' '}
            <em className="hero-fullcover-highlight">{slide.titleHighlight}</em>
          </h1>

          {/* Lead Value Proposition */}
          <p className="hero-fullcover-lead">{slide.lead}</p>

          {/* Live Varietal Specs Quick Bar */}
          <div className="hero-fullcover-spec-strip">
            <span className="hero-fullcover-spec-badge">CURRENT VARIETAL</span>
            <strong className="hero-fullcover-spec-name">{slide.name}</strong>
            <span className="hero-fullcover-spec-detail">&bull; {slide.specs}</span>
          </div>

          {/* Primary CTA Buttons */}
          <div className="hero-fullcover-ctas">
            <a href="#rfq-calculator" className="btn btn-gold hero-fullcover-btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 16V8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <span>Request Commercial RFQ &amp; Samples</span>
            </a>
            <a href="#purees" className="btn btn-secondary hero-fullcover-btn-secondary">
              <span>Explore 16 Industrial Products</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Varietal Quick-Switch Navigation Tabs (Docked Below Content) */}
        <div className="hero-fullcover-tabs-wrapper">
          <div className="hero-fullcover-tabs-header">
            <span className="hero-fullcover-tabs-title">EXPLORE CROP PORTFOLIO</span>
            <span className="hero-fullcover-tabs-timer">
              ⏱ Auto-transitions every 5s
            </span>
          </div>
          <div className="hero-fullcover-tabs-strip">
            {FULL_COVER_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`hero-fullcover-tab-btn ${idx === currentSlide ? 'is-active' : ''}`}
              >
                <span className="tab-indicator-bullet"></span>
                <span>{s.fruit}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Industrial Metrics Docked Bar */}
        <div className="hero-fullcover-metrics-bar">
          <div className="hero-fullcover-metric-item">
            <div className="hero-fullcover-metric-val">
              {counts.capacity.toLocaleString()}<small>MT</small>
            </div>
            <div className="hero-fullcover-metric-label">Annual Intake Capacity</div>
          </div>

          <div className="hero-fullcover-metric-item">
            <div className="hero-fullcover-metric-val">
              BERTUZZI<small style={{ color: 'var(--color-gold-400)', marginLeft: '4px', fontSize: '0.8rem' }}>MILAN</small>
            </div>
            <div className="hero-fullcover-metric-label">Continuous Flash Line</div>
          </div>

          <div className="hero-fullcover-metric-item">
            <div className="hero-fullcover-metric-val">
              {counts.drums}<small>KG</small>
            </div>
            <div className="hero-fullcover-metric-label">Aseptic Steel Drums</div>
          </div>

          <div className="hero-fullcover-metric-item">
            <div className="hero-fullcover-metric-val">
              {counts.micro}<small>%</small>
            </div>
            <div className="hero-fullcover-metric-label">Commercial Sterility &amp; Halal</div>
          </div>
        </div>
      </div>
    </section>
  );
}
