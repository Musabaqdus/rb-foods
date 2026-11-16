'use client';

import React from 'react';

export default function ChairmanPledge() {
  return (
    <section className="section leadership-section" id="leadership">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal is-visible" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-kicker">Executive Governance &amp; Standards</span>
          <h2 className="section-title">Leadership Commitment &amp; Corporate Governance</h2>
          <p className="section-desc" style={{ margin: '0 auto', maxWidth: '720px' }}>
            R&amp;B Foods (Pvt.) Ltd. operates under the direct stewardship of Chairman Syed Basit Sultan Bukhari and CEO Muhammad Rafique, upholding industrial rigor, Italian engineering standards, and authentic grower integrity.
          </p>
        </div>

        {/* Chairman & CEO Dual Leadership Showcase */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {/* 1. Chairman Card */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-cream-300)',
            padding: '2rem',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <img
                  src="/images/002.jpg"
                  alt="Syed Basit Sultan Bukhari - Chairman, R&B Foods (Pvt.) Ltd"
                  style={{ width: '90px', height: '110px', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '2px solid var(--color-gold-500)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-gold-700)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>
                    EXECUTIVE LEADERSHIP
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: 'var(--color-primary-900)', margin: '0.2rem 0' }}>
                    Syed Basit Sultan Bukhari
                  </h3>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-charcoal-600)' }}>
                    Chairman &bull; R&amp;B Foods (Pvt.) Ltd.
                  </div>
                </div>
              </div>

              <div className="leader-quote-mark" style={{ fontSize: '2rem', lineHeight: 1, color: 'var(--color-gold-500)', marginBottom: '0.5rem' }}>&ldquo;</div>
              <blockquote style={{ fontStyle: 'italic', color: 'var(--color-charcoal-700)', fontSize: '0.92rem', lineHeight: 1.65, margin: '0 0 1.25rem' }}>
                I am proud to introduce R&amp;B Foods (Pvt.) Ltd., registered in Shorkot, Punjab, as a leading fruit pulp processor and exporter. Backed by our own fruit supply facility and genuine imported continuous machinery from <strong>BERTUZZI Italy</strong>, our plant produces world-class Chaunsa, Ratool, Langra, Dusehri, and Desi mango purees alongside Guava, Peach, Strawberry, and Apple. I personally guarantee the quality of our purees and our commitment to transparent, reliable service.
              </blockquote>
            </div>

            <div style={{ borderTop: '1px solid var(--color-cream-300)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--color-charcoal-600)' }}>
              <span>Executive Authorization</span>
              <a href="mailto:chairman@rbfoods.com.pk" style={{ color: 'var(--color-gold-700)', fontWeight: 600, textDecoration: 'underline' }}>
                chairman@rbfoods.com.pk
              </a>
            </div>
          </div>

          {/* 2. CEO Card */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-cream-300)',
            padding: '2rem',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <img
                  src="/images/001.jpg"
                  alt="Muhammad Rafique - Chief Executive Officer, R&B Foods (Pvt.) Ltd"
                  style={{ width: '90px', height: '110px', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '2px solid var(--color-gold-500)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-gold-700)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>
                    OPERATIONAL MANDATE
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: 'var(--color-primary-900)', margin: '0.2rem 0' }}>
                    Muhammad Rafique
                  </h3>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-charcoal-600)' }}>
                    Chief Executive Officer (CEO) &bull; R&amp;B Foods (Pvt.) Ltd.
                  </div>
                </div>
              </div>

              <div className="leader-quote-mark" style={{ fontSize: '2rem', lineHeight: 1, color: 'var(--color-gold-500)', marginBottom: '0.5rem' }}>&ldquo;</div>
              <blockquote style={{ fontStyle: 'italic', color: 'var(--color-charcoal-700)', fontSize: '0.92rem', lineHeight: 1.65, margin: '0 0 1.25rem' }}>
                To us, &lsquo;Excellence&rsquo; means not only being the very best at what we do but also holding ourselves to the highest ethical standards in how we do things. We earn the trust of our customers, employees, local communities and global partners by continuously demonstrating that we are worthy of their confidence. Every decision we make must answer one simple standard: <em>&lsquo;Are we doing the right thing in the right way?&rsquo;</em>
              </blockquote>
            </div>

            <div style={{ borderTop: '1px solid var(--color-cream-300)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--color-charcoal-600)' }}>
              <span>Operational Directorate</span>
              <a href="mailto:ceo@rbfoods.com.pk" style={{ color: 'var(--color-gold-700)', fontWeight: 600, textDecoration: 'underline' }}>
                ceo@rbfoods.com.pk
              </a>
            </div>
          </div>
        </div>

        {/* Official Client Food Safety & Halal Policy */}
        <div style={{
          background: 'linear-gradient(135deg, #07261A 0%, #0F3D2E 100%)',
          borderRadius: '1.25rem',
          padding: 'clamp(2rem, 4vw, 3rem)',
          color: '#FFFFFF',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          boxShadow: '0 20px 40px -15px rgba(7, 38, 26, 0.4)',
          marginBottom: '2.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(16, 185, 129, 0.2)',
              border: '1px solid #10B981',
              color: '#34D399',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.04em'
            }}>
              OFFICIAL MANDATE
            </span>
            <span style={{ color: '#FCD34D', fontSize: '1.1rem', fontWeight: 800 }}>حلال &bull; Halal Certified &amp; Food Safety Policy</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--color-cream-100)', marginBottom: '1.25rem' }}>
                R&amp;B Foods (Pvt.) Ltd. is dedicated to manufacturing safe, authentic, and Halal-certified fruit purees. Through continuous temperature kinetics, in-line CCP validation, and strict HACCP compliance, we ensure absolute commercial sterility and international food safety integrity.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="/docs/company-profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ padding: '0.75rem 1.4rem' }}
                >
                  Download Corporate Profile (PDF)
                </a>
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-md)', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h5 style={{ color: 'var(--color-gold-400)', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Integrated Management Standards
              </h5>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--color-cream-200)', lineHeight: 1.65 }}>
                <li>100% Non-GMO Fresh Fruits sourced directly from verified orchards</li>
                <li>Zero artificial colors, artificial preservatives, or synthetic additives</li>
                <li>HACCP &amp; ISO 22000 aligned microbiological testing protocols</li>
                <li>Continuous batch audit traceability from harvest intake to export drum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
