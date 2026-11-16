'use client';

import React from 'react';

export default function ChairmanPledge() {
  return (
    <section className="section leadership-section" id="leadership">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal is-visible" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-kicker">Executive Governance &amp; Standards</span>
          <h2 className="section-title">Leadership Commitment &amp; Food Safety Governance</h2>
          <p className="section-desc" style={{ margin: '0 auto', maxWidth: '720px' }}>
            Operating with unwavering integrity, technical rigor, and industrial discipline to supply certified fruit pulps to discerning global brands.
          </p>
        </div>

        {/* Directors & Leadership Card */}
        <div className="leadership-card reveal is-visible" style={{ marginBottom: '3rem' }}>
          <div className="leader-portrait-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', width: '100%' }}>
              <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
                <img
                  src="/images/001.jpg"
                  alt="Director - R&B Foods (Pvt.) Ltd"
                  style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(15,23,19,0.9))', padding: '0.75rem', color: '#fff', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block' }}>Board of Directors</span>
                  <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.8)' }}>R&amp;B Foods</span>
                </div>
              </div>
              <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
                <img
                  src="/images/002.jpg"
                  alt="Director - R&B Foods (Pvt.) Ltd"
                  style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(15,23,19,0.9))', padding: '0.75rem', color: '#fff', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block' }}>Board of Directors</span>
                  <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.8)' }}>R&amp;B Foods</span>
                </div>
              </div>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-500)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Executive Leadership &bull; Shorkot Plant Operations
            </span>
          </div>

          <div className="leader-content">
            <div className="leader-quote-mark">&ldquo;</div>
            <blockquote className="leader-quote-text" style={{ fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--color-primary-950)', marginBottom: '1.5rem' }}>
              To us, excellence means not only being the very best at what we do, but holding ourselves to the highest ethical and quality standards. Our Shorkot facility was built with genuine BERTUZZI Italy processing lines to guarantee zero-defect, single-strength and concentrated purees for every customer, every single shipment.
            </blockquote>

            <div className="leader-credentials">
              <span className="leader-name" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>Syed Basit Sultan Bukhari</span>
              <span className="leader-role" style={{ color: 'var(--color-amber-700)', fontWeight: 600 }}>Chairman &bull; R&amp;B Foods (Pvt.) Ltd</span>
              <p className="leader-contact-line" style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Direct Office:{' '}
                <a href="mailto:chairman@rbfoods.com.pk" style={{ color: 'var(--color-emerald-700)', textDecoration: 'underline' }}>chairman@rbfoods.com.pk</a>
              </p>
            </div>
          </div>
        </div>

        {/* Official Client Food Safety & Halal Policy (Bilingual English & Urdu) */}
        <div style={{
          background: 'linear-gradient(135deg, #07261A 0%, #0F3D2E 100%)',
          borderRadius: '1.25rem',
          padding: 'clamp(2rem, 4vw, 3rem)',
          color: '#FFFFFF',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          boxShadow: '0 20px 40px -15px rgba(7, 38, 26, 0.4)'
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
            {/* English Mandate */}
            <div style={{ borderRight: '1px solid rgba(255,255,255,0.12)', paddingRight: '1.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', color: '#6EE7B7', marginBottom: '0.75rem', fontWeight: 700 }}>
                Corporate Food Safety &amp; Halal Commitment
              </h4>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#E2E8F0', fontStyle: 'italic' }}>
                &ldquo;R&amp;B Foods (Pvt.) Ltd. is committed to maintaining the highest Food Safety &amp; Halal Standards. We ensure that food products are processed hygienically that are safe for human consumption.&rdquo;
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#94A3B8' }}>
                Document Ref: <strong>IMS RBF POL-01</strong> &bull; Managing Director Authorization
              </div>
            </div>

            {/* Urdu Mandate */}
            <div dir="rtl" style={{ textAlign: 'right', paddingLeft: '1.5rem' }}>
              <h4 style={{ fontSize: '1.15rem', color: '#FCD34D', marginBottom: '0.75rem', fontWeight: 700, fontFamily: 'serif' }}>
                فوڈ سیفٹی اور حلال پالیسی
              </h4>
              <p style={{ fontSize: '1.08rem', lineHeight: 1.9, color: '#F1F5F9', fontFamily: 'serif' }}>
                &rdquo;آر اینڈ بی فوڈز پرائیویٹ لمیٹڈ فوڈ سیفٹی اور حلال کے اعلیٰ ترین معیارات کو برقرار رکھنے کے لیے پرعزم ہے۔ ہم اس بات کو یقینی بناتے ہیں کہ ہماری مصنوعات حفظان صحت کے اصولوں کے مطابق پروسیس کی جائیں جو انسانی استعمال کے لیے محفوظ ہوں۔&ldquo;
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#94A3B8', fontFamily: 'sans-serif' }}>
                تصدیق شدہ فوڈ سیفٹی مینجمنٹ سسٹم &bull; شورکوٹ پلانٹ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
