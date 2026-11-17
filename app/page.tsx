'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TopProcurementBar from '../components/TopProcurementBar';
import Navbar from '../components/Navbar';
import MobileDrawer from '../components/MobileDrawer';
import HeroFullCover from '../components/HeroFullCover';
import ClientMarquee from '../components/ClientMarquee';
import RFQCalculator from '../components/RFQCalculator';
import ChairmanPledge from '../components/ChairmanPledge';
import Footer from '../components/Footer';
import WhatsAppFloating from '../components/WhatsAppFloating';
import ProductModal from '../components/ProductModal';
import { RB_PRODUCTS, Product } from '../data/products';

// 6 Core Flagship Industrial Products for the High-Converting Midway Showcase
const FLAGSHIP_IDS = [
  'chaunsa-mango-pulp',
  'white-guava',
  'peach-puree',
  'peach-concentrate',
  'ruby-strawberry',
  'tomato-paste'
];

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [rfqTargetProduct, setRfqTargetProduct] = useState<string>(
    'Chaunsa Mango Puree (Aseptic & Frozen)'
  );

  const flagshipProducts = RB_PRODUCTS.filter((p) => FLAGSHIP_IDS.includes(p.id));

  const handleOpenSpec = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseSpec = () => {
    setSelectedProduct(null);
  };

  const handleSelectRfq = (productName: string) => {
    setSelectedProduct(null);
    setRfqTargetProduct(productName);
    const rfqElement = document.getElementById('rfq-calculator');
    if (rfqElement) {
      rfqElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Global Live Hotline & Top Procurement Bar */}
      <TopProcurementBar />

      {/* 2. Responsive Industrial Navigation */}
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <main>
        {/* 3. Full-Bleed Panoramic Hero Showcase with Ken Burns Dynamic Motion */}
        <HeroFullCover />

        {/* 4. Multinational Buyer Marquee */}
        <ClientMarquee />

        {/* 5. Core Industrial Product Portfolio (6 Flagship Animated Cards + Spec Modal + Full Catalog Reference) */}
        <section className="section" id="purees" style={{ backgroundColor: '#FFFFFF', padding: '4.5rem 0 3.5rem' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div>
                <span className="section-kicker">Core Export Portfolio</span>
                <h2 className="section-title" style={{ marginBottom: '0.45rem' }}>Flagship Industrial Fruit Purees &amp; Concentrates</h2>
                <p className="section-desc" style={{ marginBottom: 0, maxWidth: '720px' }}>
                  Aseptic single-strength and concentrated fruit purees packed in 210kg steel drums for multinational beverage, dairy, and confectionery manufacturing.
                </p>
              </div>
              <Link
                href="/purees"
                className="btn btn-gold"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.4rem' }}
              >
                <span>View Full 16-Product Catalog</span>
                <span>&rarr;</span>
              </Link>
            </div>

            {/* 6 Flagship Cards using the Exact Same Animated Classes as Main Catalog */}
            <div className="products-grid" style={{ marginBottom: '2.75rem' }}>
              {flagshipProducts.map((product) => (
                <article className="product-card reveal reveal-scale is-visible" key={product.id}>
                  <div className="product-card-img-wrap">
                    <img src={product.image} alt={product.name} loading="lazy" />
                    <span className="product-card-badge">{product.badge}</span>
                  </div>
                  <div className="product-card-body">
                    <span className="product-card-botanical">{product.botanical}</span>
                    <h3 className="product-card-title">{product.name}</h3>
                    <p className="product-card-tagline">{product.overview}</p>

                    <div className="product-card-footer">
                      <button
                        type="button"
                        className="btn-spec-view"
                        onClick={() => handleOpenSpec(product)}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }}
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                        </svg>
                        Technical Specs
                      </button>
                      <button
                        type="button"
                        className="btn-sample-req"
                        onClick={() => handleSelectRfq(product.name)}
                      >
                        Sample RFQ
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* High-Converting Catalog Expansion Reference Banner */}
            <div
              style={{
                background: 'linear-gradient(135deg, var(--color-primary-950) 0%, var(--color-primary-900) 100%)',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem',
                border: '1px solid rgba(229, 140, 5, 0.3)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-gold-400)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  COMPLETE CERTIFIED RANGE (16 INDUSTRIAL PRODUCTS)
                </span>
                <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', margin: '0.25rem 0 0.35rem' }}>
                  Looking for Sindhri, Dusehri, Langra, Ratool, Apple, Banana, or Falsa Puree?
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-cream-200)', margin: 0, maxWidth: '680px', lineHeight: 1.5 }}>
                  We also produce single-strength and concentrated purees across 16 Pakistani fruits and vegetables, complete with dedicated applications for juices, dairy, and confectionery.
                </p>
              </div>
              <Link
                href="/purees"
                className="btn btn-gold"
                style={{ padding: '0.75rem 1.6rem', whiteSpace: 'nowrap' }}
              >
                <span>Explore Full 16-Product Catalog</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Bertuzzi Industrial Engineering & Live Video Tour (Midway High-Impact 2-Column Showcase) */}
        <section className="section tech-section" id="engineering" style={{ padding: '4.5rem 0' }}>
          <div className="container">
            <div className="section-header reveal is-visible" style={{ marginBottom: '2.5rem' }}>
              <span className="section-kicker">Industrial Provenance</span>
              <h2 className="section-title">Engineered by BERTUZZI S.r.l. Milan, Italy</h2>
              <p className="section-desc">
                Quality in aseptic processing is dictated by thermal kinetics and mechanical shear. R&amp;B Foods invested in genuine Bertuzzi continuous lines to preserve the delicate aroma, volatile esters, and natural vitamins of fresh Pakistani fruit.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              {/* Left Column: Live Plant Video Player */}
              <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 16px 36px rgba(0,0,0,0.3)', background: '#000' }}>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/plant-processing-line.jpeg"
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '440px' }}
                >
                  <source src="/video/plant-tour.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div style={{ background: 'rgba(7, 25, 17, 0.92)', padding: '0.85rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(229, 140, 5, 0.25)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }}></span>
                    <span style={{ fontSize: '0.78rem', color: '#FFFFFF', fontWeight: 600 }}>R&amp;B Foods Shorkot Plant Floor Video</span>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=-ns-_nH1ec8"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.75rem', color: 'var(--color-gold-400)', fontWeight: 700 }}
                  >
                    Open on YouTube &rarr;
                  </a>
                </div>
              </div>

              {/* Right Column: 5-Stage Continuous Processing Flow & Plant Provenance */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-md)', padding: '1.5rem', border: '1px solid var(--color-cream-300)', boxShadow: 'var(--shadow-sm)' }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-950)', marginBottom: '0.75rem', fontWeight: 700 }}>
                    5-Stage Continuous Sterile Processing
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--color-gold-500)', color: '#000', fontSize: '0.72rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>1</span>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-700)', lineHeight: 1.45 }}>
                        <strong style={{ color: 'var(--color-primary-900)' }}>Three-Tier Washing &amp; Sorting:</strong> Sanitization &amp; chlorinated spray eliminating defective fruits.
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--color-gold-500)', color: '#000', fontSize: '0.72rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>2</span>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-700)', lineHeight: 1.45 }}>
                        <strong style={{ color: 'var(--color-primary-900)' }}>Cold De-Stoning &amp; Refining:</strong> Gentle stainless rotary pulpers separate skin and stones without grinding seeds.
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--color-gold-500)', color: '#000', fontSize: '0.72rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>3</span>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-700)', lineHeight: 1.45 }}>
                        <strong style={{ color: 'var(--color-primary-900)' }}>Vacuum De-Aeration:</strong> Controlled vacuum extraction prevents browning and oxidative flavor loss.
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--color-gold-500)', color: '#000', fontSize: '0.72rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>4</span>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-700)', lineHeight: 1.45 }}>
                        <strong style={{ color: 'var(--color-primary-900)' }}>HTST Flash Sterilization:</strong> Rapid thermal elimination of spores followed by sterile rapid chilling.
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--color-gold-500)', color: '#000', fontSize: '0.72rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>5</span>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-700)', lineHeight: 1.45 }}>
                        <strong style={{ color: 'var(--color-primary-900)' }}>Cleanroom Aseptic Drum Filling:</strong> Hermetic filling into 210kg 4-layer barrier bags in steel drums.
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link
                    href="/facility"
                    className="btn btn-gold"
                    style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem' }}
                  >
                    <span>Explore Full Facility &amp; Machine Specs</span>
                    <span>&rarr;</span>
                  </Link>
                  <a
                    href="/docs/company-profile.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '0.75rem 1.3rem', fontSize: '0.88rem', background: '#FFFFFF' }}
                  >
                    Download Plant Profile (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Verified Shorkot Quality Assurance Laboratory (Real Photo Photographic Proof Strip) */}
        <section className="section" id="laboratory" style={{ backgroundColor: '#FAF8F5', padding: '4.5rem 0' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div>
                <span className="section-kicker">On-Site Industrial Laboratory &bull; Shorkot Facility</span>
                <h2 className="section-title" style={{ marginBottom: '0.45rem' }}>Verified Analytical &amp; Microbiological Laboratory</h2>
                <p className="section-desc" style={{ marginBottom: 0, maxWidth: '720px' }}>
                  Every production batch undergoes mandatory analytical and microbiological release testing (TPC &lt;10 CFU/g, Bostwick viscosity, Brix, and acidity) before export dispatch.
                </p>
              </div>
              <Link
                href="/quality"
                className="btn btn-secondary"
                style={{ background: '#FFFFFF', padding: '0.75rem 1.4rem', fontSize: '0.85rem' }}
              >
                <span>View All 7 Lab Stations &amp; QA Protocols</span>
                <span>&rarr;</span>
              </Link>
            </div>

            {/* 3 Real Photographic Proof Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.75rem' }}>
              {/* Lab Photo 1: Consistometer & pH */}
              <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-cream-300)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src="/images/lab/consistometer-ph.jpg"
                    alt="Bostwick Consistometer & Digital pH Bench at R&B Foods Laboratory"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(7,25,17,0.85)', color: 'var(--color-gold-400)', fontSize: '0.7rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                    Bostwick &amp; pH Bench
                  </span>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-primary-950)', marginBottom: '0.4rem', fontWeight: 700 }}>
                    Physico-Chemical Analysis
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-700)', lineHeight: 1.5, marginBottom: 0 }}>
                    Bostwick consistometer measuring pulp flow rate (cm/30s at 20&deg;C) alongside digital temperature-compensated pH electrodes for every production batch.
                  </p>
                </div>
              </div>

              {/* Lab Photo 2: Microbiology Cleanroom */}
              <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-cream-300)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src="/images/lab/microlab-entrance.jpg"
                    alt="Microbiology Cleanroom with Sealed Pass-Through Sliding Glass Doors"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(7,25,17,0.85)', color: 'var(--color-gold-400)', fontSize: '0.7rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                    Microbiology Cleanroom
                  </span>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-primary-950)', marginBottom: '0.4rem', fontWeight: 700 }}>
                    Commercial Sterility Testing
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-700)', lineHeight: 1.5, marginBottom: 0 }}>
                    Segregated positive-pressure cleanroom with sliding glass doors dedicated to Total Aerobic Count (&lt;10 CFU/g), yeast, and mold incubation plating.
                  </p>
                </div>
              </div>

              {/* Lab Photo 3: Central QC Analytical Hall */}
              <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-cream-300)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src="/images/lab/central-qc-hall.jpg"
                    alt="R&B Foods Central QC Testing Hall in Shorkot"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(7,25,17,0.85)', color: 'var(--color-gold-400)', fontSize: '0.7rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                    Central Testing Hall
                  </span>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-primary-950)', marginBottom: '0.4rem', fontWeight: 700 }}>
                    Analytical &amp; Titration Benches
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-700)', lineHeight: 1.5, marginBottom: 0 }}>
                    Complete in-house testing facility equipped with quantitative acid-base titrations, digital Chroma Meter colorimetry, and solvent distillation glassware.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Supply Chain Twin-Pillars (Harvest Calendar + Export Packaging Strip) */}
        <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '4.5rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: '2rem' }}>
              {/* Twin Pillar 1: Harvest & Seasonality */}
              <div
                style={{
                  background: 'var(--color-cream-100)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.25rem',
                  border: '1px solid var(--color-cream-300)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#059669', display: 'inline-block' }}></span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      SUPPLY CHAIN ALLOCATION
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-950)', fontWeight: 700, marginBottom: '0.75rem' }}>
                    Pakistani Horticultural Harvest Matrix
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-700)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Plan annual juice, dairy, and beverage blending schedules with precision. Peak harvest campaigns are contracted in advance to guarantee crop allocations and pricing:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.75rem' }}>
                    <div style={{ background: '#FFFFFF', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-cream-300)' }}>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--color-primary-950)', display: 'block' }}>Chaunsa Mango:</strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-gold-700)', fontWeight: 700 }}>June &ndash; August Peak</span>
                    </div>
                    <div style={{ background: '#FFFFFF', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-cream-300)' }}>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--color-primary-950)', display: 'block' }}>White Guava:</strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-gold-700)', fontWeight: 700 }}>September &ndash; January</span>
                    </div>
                    <div style={{ background: '#FFFFFF', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-cream-300)' }}>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--color-primary-950)', display: 'block' }}>Summer Peach:</strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-gold-700)', fontWeight: 700 }}>May &ndash; July Peak</span>
                    </div>
                    <div style={{ background: '#FFFFFF', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-cream-300)' }}>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--color-primary-950)', display: 'block' }}>Ruby Strawberry:</strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-gold-700)', fontWeight: 700 }}>February &ndash; April Peak</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/harvest"
                  style={{ color: 'var(--color-gold-700)', fontWeight: 700, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <span>Explore Complete 12-Month Harvest Calendar</span>
                  <span>&rarr;</span>
                </Link>
              </div>

              {/* Twin Pillar 2: 210 kg Aseptic Steel Drum Logistics */}
              <div
                style={{
                  background: 'var(--color-cream-100)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.25rem',
                  border: '1px solid var(--color-cream-300)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-gold-500)', display: 'inline-block' }}></span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-gold-700)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      EXPORT STANDARDS
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-950)', fontWeight: 700, marginBottom: '0.75rem' }}>
                    210 kg Aseptic Steel Drum Packaging
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-700)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Food-grade 4-layer aseptic barrier bag hermetically sealed inside conical steel drums with nitrogen flush and tamper-evident security seal:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.65rem 0.85rem', background: '#FFFFFF', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', border: '1px solid var(--color-cream-300)' }}>
                      <span style={{ color: 'var(--color-charcoal-700)', fontWeight: 600 }}>Standard Drum Net Weight:</span>
                      <strong style={{ color: 'var(--color-primary-950)' }}>210 kg &plusmn; 0.5 kg</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.65rem 0.85rem', background: '#FFFFFF', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', border: '1px solid var(--color-cream-300)' }}>
                      <span style={{ color: 'var(--color-charcoal-700)', fontWeight: 600 }}>20ft FCL Container Stuffing:</span>
                      <strong style={{ color: 'var(--color-primary-950)' }}>80 Drums (16.80 MT Net)</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.65rem 0.85rem', background: '#FFFFFF', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', border: '1px solid var(--color-cream-300)' }}>
                      <span style={{ color: 'var(--color-charcoal-700)', fontWeight: 600 }}>Ambient Shelf Life:</span>
                      <strong style={{ color: 'var(--color-primary-950)' }}>18 &ndash; 24 Months (4&deg;C &ndash; 8&deg;C recommended)</strong>
                    </div>
                  </div>
                </div>

                <Link
                  href="/packaging"
                  style={{ color: 'var(--color-gold-700)', fontWeight: 700, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <span>View Global Cold-Chain &amp; Shipping Specs</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Interactive B2B Container RFQ & Freight Calculator (Core Conversion Engine) */}
        <section id="rfq-calculator">
          <RFQCalculator initialProduct={rfqTargetProduct} />
        </section>

        {/* 10. Executive Governance, Leadership Messages & PDF Corporate Profile */}
        <ChairmanPledge />
      </main>

      {/* 11. Enterprise Footer with Verified Contact Hotline (+92 334 3734786) */}
      <Footer />

      {/* 12. Persistent Direct WhatsApp Desk Floating Widget with Ripple Radar */}
      <WhatsAppFloating />

      {/* 13. Official Shared-Doc Formatted Technical Specification Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={handleCloseSpec}
        onRequestSample={handleSelectRfq}
      />
    </>
  );
}
