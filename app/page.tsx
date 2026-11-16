'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TopProcurementBar from '../components/TopProcurementBar';
import Navbar from '../components/Navbar';
import MobileDrawer from '../components/MobileDrawer';
import HeroFullCover from '../components/HeroFullCover';
import ClientMarquee from '../components/ClientMarquee';
import Footer from '../components/Footer';
import WhatsAppFloating from '../components/WhatsAppFloating';
import { RB_PRODUCTS } from '../data/products';

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // 4 Flagship purees for the compact homepage showcase
  const flagshipProducts = RB_PRODUCTS.slice(0, 4);

  return (
    <>
      <TopProcurementBar />
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <main>
        {/* 1. Full-Bleed Panoramic Hero */}
        <HeroFullCover />

        {/* 2. Multinational Client Marquee */}
        <ClientMarquee />

        {/* 3. Compact Flagship Products Showcase */}
        <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '4.5rem 0 4rem' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div>
                <span className="section-kicker">Core Export Portfolio</span>
                <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Flagship Industrial Fruit Purees</h2>
                <p className="section-desc" style={{ marginBottom: 0 }}>
                  Aseptic single-strength and concentrated fruit purees packed in 210kg steel drums for beverage, dairy, and confectionery manufacturing.
                </p>
              </div>
              <Link
                href="/purees"
                className="btn btn-gold"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.4rem' }}
              >
                <span>View Full 10+ Product Catalog &amp; Specs</span>
                <span>&rarr;</span>
              </Link>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '1.75rem'
              }}
            >
              {flagshipProducts.map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-cream-300)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'rgba(7, 25, 17, 0.85)',
                        color: 'var(--color-gold-400)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        backdropFilter: 'blur(6px)'
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>

                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-gold-700)', fontStyle: 'italic', marginBottom: '0.25rem' }}>
                      {p.botanical}
                    </span>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-900)', fontWeight: 700, marginBottom: '0.5rem' }}>
                      {p.name}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-700)', lineHeight: 1.5, flex: 1, marginBottom: '1.25rem' }}>
                      {p.tagline}
                    </p>

                    <Link
                      href={`/purees#${p.id}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.65rem 0.95rem',
                        background: 'var(--color-cream-100)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--color-primary-900)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        transition: 'var(--transition)'
                      }}
                    >
                      <span>Technical Specs &amp; RFQ</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Four Core Industrial Pillars (Quick Portal to Sub-Pages) */}
        <section className="section section-alt" style={{ padding: '4.5rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
              <span className="section-kicker">Industrial Infrastructure</span>
              <h2 className="section-title">Built for Global Beverage &amp; Dairy Procurement</h2>
              <p className="section-desc">
                From orchard intake to aseptic steel drum filling, explore R&amp;B Foods' Italian engineering, accredited quality control, and export logistics.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '1.5rem'
              }}
            >
              {/* Pillar 1: Facility */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem 1.75rem',
                  border: '1px solid var(--color-cream-300)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(12, 40, 28, 0.08)', color: 'var(--color-primary-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-900)', fontWeight: 700, marginBottom: '0.65rem' }}>
                  BERTUZZI Italian Plant
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-700)', lineHeight: 1.55, flex: 1, marginBottom: '1.5rem' }}>
                  Complete automated continuous line engineered by Bertuzzi Milan with HTST flash pasteurization, turbo-destoning, and vacuum deaeration.
                </p>
                <Link
                  href="/facility"
                  style={{ color: 'var(--color-gold-700)', fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>Explore Facility &amp; Video Tour</span>
                  <span>&rarr;</span>
                </Link>
              </div>

              {/* Pillar 2: QA Lab */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem 1.75rem',
                  border: '1px solid var(--color-cream-300)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(217, 119, 6, 0.1)', color: 'var(--color-gold-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-900)', fontWeight: 700, marginBottom: '0.65rem' }}>
                  Quality Assurance &amp; Lab
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-700)', lineHeight: 1.55, flex: 1, marginBottom: '1.5rem' }}>
                  In-house analytical testing for Brix, Bostwick viscosity, acidity, and commercial sterility (TPC &lt;10 CFU/g) with COA audit compliance.
                </p>
                <Link
                  href="/quality"
                  style={{ color: 'var(--color-gold-700)', fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>View Lab Testing Protocols</span>
                  <span>&rarr;</span>
                </Link>
              </div>

              {/* Pillar 3: Harvest Seasonality */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem 1.75rem',
                  border: '1px solid var(--color-cream-300)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-900)', fontWeight: 700, marginBottom: '0.65rem' }}>
                  Harvest &amp; Seasonality
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-700)', lineHeight: 1.55, flex: 1, marginBottom: '1.5rem' }}>
                  12-month crop calendar covering Chaunsa mango, white guava, summer peach, field strawberry, and wild falsa harvest campaigns.
                </p>
                <Link
                  href="/harvest"
                  style={{ color: 'var(--color-gold-700)', fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>View Harvest Matrix</span>
                  <span>&rarr;</span>
                </Link>
              </div>

              {/* Pillar 4: Packaging & Logistics */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem 1.75rem',
                  border: '1px solid var(--color-cream-300)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(7, 25, 17, 0.08)', color: 'var(--color-primary-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <path d="M7 7h10"></path>
                    <path d="M7 12h10"></path>
                    <path d="M7 17h10"></path>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-900)', fontWeight: 700, marginBottom: '0.65rem' }}>
                  Export Packaging (210 KG)
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-700)', lineHeight: 1.55, flex: 1, marginBottom: '1.5rem' }}>
                  Aseptic 4-layer barrier bags in conical steel drums. Standard stuffing of 80 drums per 20ft FCL container with FOB Karachi export clearance.
                </p>
                <Link
                  href="/packaging"
                  style={{ color: 'var(--color-gold-700)', fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>View Packaging Details</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Executive Leadership & Governance Summary */}
        <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '4.5rem 0' }}>
          <div className="container">
            <div
              style={{
                background: 'linear-gradient(135deg, var(--color-primary-950) 0%, var(--color-primary-900) 100%)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                color: '#FFFFFF',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--color-gold-400)', textTransform: 'uppercase' }}>
                  EXECUTIVE GOVERNANCE &bull; SHORKOT, PUNJAB
                </span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', color: '#FFFFFF', margin: '0.65rem 0 1rem', lineHeight: 1.2 }}>
                  &ldquo;Excellence Means Doing Things Right.&rdquo;
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-cream-200)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                  Operating from the agricultural heart of Pakistan, R&amp;B Foods combines direct orchard farming with Italian industrial sterilization. Overseen by CEO Muhammad Rafique and Chairman Syed Basit Sultan Bukhari.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link
                    href="/about"
                    className="btn btn-gold"
                    style={{ padding: '0.75rem 1.4rem' }}
                  >
                    <span>Read CEO Message &amp; Governance</span>
                    <span>&rarr;</span>
                  </Link>
                  <a
                    href="/docs/company-profile.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)', padding: '0.75rem 1.4rem' }}
                  >
                    Download Profile (PDF)
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <img
                    src="/images/001.jpg"
                    alt="Muhammad Rafique - CEO"
                    style={{ width: '130px', height: '160px', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '2px solid var(--color-gold-500)', margin: '0 auto 0.5rem' }}
                  />
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>Muhammad Rafique</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-gold-400)' }}>Chief Executive Officer</div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <img
                    src="/images/002.jpg"
                    alt="Syed Basit Sultan Bukhari - Chairman"
                    style={{ width: '130px', height: '160px', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '2px solid var(--color-gold-500)', margin: '0 auto 0.5rem' }}
                  />
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>Syed Basit Sultan Bukhari</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-gold-400)' }}>Chairman</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Quick Commercial RFQ & Inquiries Banner */}
        <section className="section" style={{ background: 'var(--color-cream-100)', padding: '3.5rem 0', borderTop: '1px solid var(--color-cream-300)' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
            <span className="section-kicker">Global B2B Procurement</span>
            <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>Ready to Request Commercial Allocation &amp; Pricing?</h2>
            <p className="section-desc" style={{ marginBottom: '1.75rem' }}>
              Calculate container freight and request batch testing samples directly with our Shorkot export desk.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                href="/rfq"
                className="btn btn-gold"
                style={{ padding: '0.85rem 1.85rem', fontSize: '1rem' }}
              >
                <span>Open Instant B2B RFQ Calculator</span>
                <span>&rarr;</span>
              </Link>
              <a
                href="https://wa.me/923343734786?text=Hello%20R%26B%20Foods%20Export%20Desk%2C%20I%20would%20like%20to%20inquire%20about%20your%20fruit%20purees"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.6rem', fontSize: '1rem', background: '#FFFFFF' }}
              >
                <span>Direct WhatsApp: +92 334 3734786</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloating />
    </>
  );
}
