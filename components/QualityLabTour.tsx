'use client';

import React, { useState } from 'react';

const LAB_STATIONS = [
  {
    id: 'central-hall',
    title: 'Central QC Testing Hall',
    badge: 'Main Analytical Facility',
    image: '/images/lab/central-qc-hall.jpg',
    caption: 'R&B Foods Central Quality Control Laboratory — Shorkot Plant',
    description: 'Central analytical facility equipped with segregated testing stations for organoleptic evaluation, physical viscometry, chemical titrations, and digital colorimetric certification.'
  },
  {
    id: 'consistometer-ph',
    title: 'Consistometer & Digital pH Station',
    badge: 'Physico-Chemical Analysis',
    image: '/images/lab/consistometer-ph.jpg',
    caption: 'Bostwick Consistometer & Digital pH Electrode Bench',
    description: 'Precision measurement of pulp flow rate (cm/30s at 20°C) and digital temperature-compensated pH verification for every production run before drum filling.'
  },
  {
    id: 'titration',
    title: 'Titration & Reagent Station',
    badge: 'Acidity & Vitamin C',
    image: '/images/lab/titration-station.jpg',
    caption: 'Quantitative Acid-Base Titration & Precision Balance Area',
    description: 'Calibrated burettes, analytical balances, and magnetic stirrers used for titratable acidity calculation (% as citric acid) and ascorbic acid (Vitamin C ppm) titration.'
  },
  {
    id: 'microlab',
    title: 'Microbiology Cleanroom (Slide Door)',
    badge: 'Sterility & Incubation',
    image: '/images/lab/microlab-entrance.jpg',
    caption: 'Controlled Access Micro Lab & Aseptic Incubation Room',
    description: 'Segregated positive-pressure cleanroom dedicated to Total Plate Count (TPC), yeast, and mold plating with sealed pass-through sliding glass doors.'
  },
  {
    id: 'laminar-incubator',
    title: 'Laminar Airflow & Incubators',
    badge: 'Aseptic Inoculation',
    image: '/images/lab/cleanroom-laminar.jpg',
    caption: 'Laminar Flow Workstation, Thermostatic Water Bath & Ovens',
    description: 'HEPA-filtered laminar airflow bench for sterile sample inoculation alongside multi-temperature bacteriological incubators and constant-temperature water baths.'
  },
  {
    id: 'chromameter',
    title: 'Chroma Meter & Distillation Unit',
    badge: 'Color & Moisture Analysis',
    image: '/images/lab/chromameter-distillation.jpg',
    caption: 'Digital Chroma Meter & Distillation Glassware Bench',
    description: 'Digital tristimulus Chroma Meter evaluating Hunter L*a*b* color parameters, accompanied by solvent distillation units for accurate moisture and volatile extraction.'
  },
  {
    id: 'lab-entrance',
    title: 'Laboratory Hygiene Airlock & UV Barrier',
    badge: 'Hygiene & Biosafety',
    image: '/images/lab/lab-entrance-uv.jpg',
    caption: 'Sterile Entrance with Electronic Fly Traps & Biosafety Protocol',
    description: 'Strict personnel sanitation barrier, overhead UV electronic insect control, and restricted authorized-only entry maintaining cleanroom integrity.'
  }
];

export default function QualityLabTour() {
  const [activeStationIndex, setActiveStationIndex] = useState(0);
  const current = LAB_STATIONS[activeStationIndex];

  return (
    <section className="section" id="laboratory" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="container">
        <div className="section-header reveal is-visible">
          <span className="section-kicker">On-Site Industrial Laboratory &bull; Shorkot Facility</span>
          <h2 className="section-title">Verified In-House Testing Laboratory &amp; Quality Stations</h2>
          <p className="section-desc">
            Direct photographic tour of the R&amp;B Foods (Pvt.) Ltd. analytical laboratory in Shorkot, Punjab. Operating dedicated microbiological cleanrooms, Bostwick viscometers, and digital colorimeters to certify every export consignment.
          </p>
        </div>

        {/* Featured Interactive Station Showcase */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-cream-300)',
          boxShadow: 'var(--shadow-md)',
          overflow: 'hidden',
          marginBottom: '2.5rem'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))' }}>
            {/* Left: Main Active Photo */}
            <div style={{ position: 'relative', background: '#071911', minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={current.image}
                alt={current.caption}
                style={{ width: '100%', height: '100%', maxHeight: '480px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: 'rgba(7, 25, 17, 0.85)',
                backdropFilter: 'blur(6px)',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                color: 'var(--color-gold-400)',
                fontSize: '0.75rem',
                fontWeight: 700,
                border: '1px solid rgba(255,255,255,0.15)'
              }}>
                {current.badge}
              </div>

              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(7, 25, 17, 0.95))',
                padding: '1.25rem 1.5rem',
                color: '#FFFFFF'
              }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-cream-300)', display: 'block', marginBottom: '0.2rem' }}>
                  Authentic Facility Photo &bull; Shorkot Plant
                </span>
                <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#FFFFFF', fontWeight: 700 }}>
                  {current.caption}
                </h4>
              </div>
            </div>

            {/* Right: Station Details & Protocol */}
            <div style={{ padding: '2.25rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="section-kicker" style={{ marginBottom: '0.35rem' }}>QC Station #{activeStationIndex + 1} of {LAB_STATIONS.length}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--color-primary-900)', marginBottom: '0.75rem' }}>
                  {current.title}
                </h3>
                <p style={{ color: 'var(--color-charcoal-700)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {current.description}
                </p>

                <div style={{ background: 'var(--color-cream-100)', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid var(--color-cream-300)', marginBottom: '1.5rem' }}>
                  <h5 style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-primary-900)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.65rem' }}>
                    Standard Operating Testing Parameters:
                  </h5>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--color-charcoal-700)', lineHeight: 1.6 }}>
                    <li><strong>Refractometric Brix:</strong> Temperature compensated (&plusmn;0.1&deg; Brix accuracy)</li>
                    <li><strong>Titratable Acidity:</strong> Acid-base endpoint titration (% as citric acid)</li>
                    <li><strong>Consistency / Bostwick:</strong> Flow velocity in cm/30s at controlled 20&deg;C</li>
                    <li><strong>Sterility Verification:</strong> TPC &lt; 10 CFU/g, Negative yeast &amp; mold incubation</li>
                  </ul>
                </div>
              </div>

              {/* Station Selector Pills */}
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>
                  Switch Laboratory Station:
                </span>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {LAB_STATIONS.map((station, i) => (
                    <button
                      key={station.id}
                      type="button"
                      onClick={() => setActiveStationIndex(i)}
                      style={{
                        padding: '0.45rem 0.85rem',
                        borderRadius: '9999px',
                        border: i === activeStationIndex ? '2px solid var(--color-gold-500)' : '1px solid var(--color-cream-300)',
                        background: i === activeStationIndex ? 'var(--color-primary-900)' : '#FFFFFF',
                        color: i === activeStationIndex ? '#FFFFFF' : 'var(--color-charcoal-700)',
                        fontSize: '0.78rem',
                        fontWeight: i === activeStationIndex ? 700 : 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {station.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Photo Gallery Grid */}
        <div style={{ marginBottom: '3rem' }}>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--color-primary-900)', marginBottom: '1.25rem' }}>
            All Laboratory Sections &amp; Instruments
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: '1.25rem'
          }}>
            {LAB_STATIONS.map((station, i) => (
              <div
                key={station.id}
                onClick={() => setActiveStationIndex(i)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: i === activeStationIndex ? '2px solid var(--color-gold-500)' : '1px solid var(--color-cream-300)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div style={{ position: 'relative', height: '170px' }}>
                  <img
                    src={station.image}
                    alt={station.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    background: 'rgba(7, 25, 17, 0.85)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    color: 'var(--color-gold-400)',
                    fontSize: '0.68rem',
                    fontWeight: 700
                  }}>
                    {station.badge}
                  </div>
                </div>
                <div style={{ padding: '0.9rem' }}>
                  <h5 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-primary-900)', margin: '0 0 0.35rem' }}>
                    {station.title}
                  </h5>
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-charcoal-600)', margin: 0, lineHeight: 1.45 }}>
                    {station.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Certifications & Compliance Footer */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-cream-300)',
          padding: '1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <h5 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary-900)', margin: '0 0 0.25rem' }}>
              Food Safety &amp; Quality Management Compliance
            </h5>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-600)', margin: 0 }}>
              Authorized testing protocols in compliance with HACCP, ISO 22000 hygiene standards, and 100% Halal certification.
            </p>
          </div>
          <div className="cert-badges-row" style={{ marginTop: 0 }}>
            <div className="cert-badge-item">
              <img src="/logos/haccp.jpg" alt="HACCP Certified" />
              <span>HACCP Certified</span>
            </div>
            <div className="cert-badge-item">
              <img src="/logos/cert.png" alt="Food Safety Certification" />
              <span>ISO 22000 Aligned</span>
            </div>
            <div className="cert-badge-item">
              <span style={{ color: '#059669', fontSize: '1.1rem', fontWeight: 800 }}>حلال</span>
              <span>100% Halal Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
