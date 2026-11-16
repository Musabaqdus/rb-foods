'use client';

import React from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Automated Washing & Optical Grading',
    desc: 'Dual-stage chlorinated bubble baths and high-pressure rotary sprayers remove organic field residues before manual and optical grading conveyors inspect fruit maturity.'
  },
  {
    num: '02',
    title: 'Cold De-stoning & Dual Turbo-Refining',
    desc: 'BERTUZZI de-stoners gently separate the stone pit without shattering seed fibers. 0.8mm and 0.5mm rotary sieves refine the pulp into silkily uniform texture.'
  },
  {
    num: '03',
    title: 'Vacuum Deaeration & Enzyme Deactivation',
    desc: 'Continuous centrifugal vacuum chamber extracts dissolved oxygen in milliseconds to prevent oxidation and browning, preserving fresh raw fruit aroma.'
  },
  {
    num: '04',
    title: 'HTST Flash Sterilization (Italy Line)',
    desc: 'Four-stage concentric tubular heat exchangers heat puree to 105°C–112°C for 45–60 seconds, followed by rapid cooling to < 25°C with zero caramelized off-notes.'
  },
  {
    num: '05',
    title: 'Class 100 Aseptic Bag Filling',
    desc: 'Sterile steam chamber fills puree into multi-barrier irradiated 215 kg bags inside epoxy-coated steel drums under hermetic tamper-proof seals.'
  },
  {
    num: '06',
    title: 'Incubation & Export Release Testing',
    desc: 'Quarantine protocol holds 100% of lots for 7-day incubation, micro plating, and refractometer verification before issuance of Phytosanitary Certificate & COA.'
  }
];

export default function BertuzziTech() {
  return (
    <section className="tech-section" id="processing">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-pill">ITALIAN INDUSTRIAL EXCELLENCE</span>
          <h2 className="section-title">
            Engineered with Genuine BERTUZZI (Milan, Italy) Continuous Lines
          </h2>
          <p className="section-subtitle">
            Zero shortcuts in food engineering. Our automated continuous processing facility in Shorkot, Punjab sets the gold standard for fruit pulp extraction, enzymatic preservation, and aseptic packaging.
          </p>
        </div>

        <div className="tech-showcase-grid">
          {/* Engineering Process Steps */}
          <div className="process-flow-container">
            {STEPS.map((step) => (
              <div className="process-step-card" key={step.num}>
                <span className="process-step-num">{step.num}</span>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Plant Telemetry & Factory Image Feature */}
          <div className="tech-telemetry-column">
            <div className="plant-image-showcase">
              <img
                src="/images/packaging-drums.jpg"
                alt="BERTUZZI Aseptic Processing Line at R&B Foods Shorkot Plant"
                className="plant-img"
                loading="lazy"
              />
              <div className="plant-img-badge">
                <span>BERTUZZI CERTIFIED LINE &bull; SHORKOT PLANT</span>
              </div>
            </div>

            <div className="tech-specs-box">
              <h4 className="tech-specs-title">Line Automation &amp; Sanitary Specs</h4>
              <ul className="tech-specs-list">
                <li>
                  <span className="spec-bullet-icon">&check;</span>
                  <div>
                    <strong>Continuous Line Intake:</strong>
                    <span> 15 Metric Tons / Hour raw fruit capacity</span>
                  </div>
                </li>
                <li>
                  <span className="spec-bullet-icon">&check;</span>
                  <div>
                    <strong>Refining Precision:</strong>
                    <span> Double-stage Italian sieves (0.8mm primary &amp; 0.5mm micro-finish)</span>
                  </div>
                </li>
                <li>
                  <span className="spec-bullet-icon">&check;</span>
                  <div>
                    <strong>Sanitary CIP Automation:</strong>
                    <span> Automated 4-stage Clean-In-Place sterilization cycle every 24 operating hours</span>
                  </div>
                </li>
                <li>
                  <span className="spec-bullet-icon">&check;</span>
                  <div>
                    <strong>SCADA Digital Control:</strong>
                    <span> Micro-second thermal recording for batch-level international traceability</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
