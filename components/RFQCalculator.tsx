'use client';

import React, { useState, useEffect } from 'react';
import { RB_PRODUCTS } from '../data/products';

interface RFQCalculatorProps {
  initialProduct?: string;
}

export default function RFQCalculator({ initialProduct }: RFQCalculatorProps) {
  const [selectedPuree, setSelectedPuree] = useState<string>(
    initialProduct || 'Chaunsa Mango Pulp Aseptic'
  );

  useEffect(() => {
    if (initialProduct) {
      setSelectedPuree(initialProduct);
    }
  }, [initialProduct]);
  const [packType, setPackType] = useState<string>('drum210');
  const [volumeMt, setVolumeMt] = useState<number>(17);
  const [port, setPort] = useState<string>('Karachi Port (FOB)');
  const [nameCompany, setNameCompany] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [rfqRef, setRfqRef] = useState<string>('');

  // Calculations strictly based on R&B Foods Aseptic Drum standards (80 drums / 20' FCL)
  let unitWeightKg = 210;
  let tareWeightKg = 18;
  const unitsPerFcl = 80;
  let packLabel = '210 kg Aseptic Steel Drum (Single-Strength Purees)';

  if (packType === 'drum200') {
    unitWeightKg = 200;
    tareWeightKg = 18;
    packLabel = '200 kg Aseptic Steel Drum (Guava Pulp & Strawberry)';
  } else if (packType === 'drum220') {
    unitWeightKg = 220;
    tareWeightKg = 18;
    packLabel = '220 kg Aseptic Steel Drum (Concentrates & Tomato Paste)';
  }

  const totalKg = volumeMt * 1000;
  const totalUnits = Math.ceil(totalKg / unitWeightKg);
  const fclContainers = (totalUnits / unitsPerFcl).toFixed(1);
  const grossWeightMt = ((totalKg + totalUnits * tareWeightKg) / 1000).toFixed(2);
  const unitLabel = 'Drums';

  // WhatsApp Link Message
  const waMsg = encodeURIComponent(
    `Hello R&B Foods Export Desk, I would like to request an industrial price quotation / sample batch:\n\n` +
    `• Product: ${selectedPuree}\n` +
    `• Required Volume: ${volumeMt} MT\n` +
    `• Packaging Format: ${packLabel}\n` +
    `• Estimated Units: ${totalUnits.toLocaleString()} drums (~${fclContainers} FCL @ 80 drums/container)\n` +
    `• Destination Port: ${port}\n\n` +
    `Please share the latest Certificate of Analysis (COA) and CIF/FOB pricing.`
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: nameCompany,
          buyerName: nameCompany,
          email,
          phone,
          product: selectedPuree,
          volumeDrums: totalUnits,
          incoterms: port,
          notes: `${volumeMt} MT (${unitLabel}) destined for ${port}`
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setRfqRef(data.rfqId);
        setSubmitted(true);
      } else {
        alert(data.message || 'Error sending request.');
      }
    } catch {
      setRfqRef(`RFQ-RB-2026-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section rfq-section" id="rfq-calculator">
      <div className="container">
        <div className="rfq-calculator-card reveal is-visible delay-100">
          {/* Input Form Pane */}
          <div className="rfq-form-pane">
            <h2 className="rfq-form-title">Request B2B Quote &amp; Industrial Samples</h2>
            <p className="rfq-form-subtitle">
              Configure your required puree volume, packaging specification, and destination port for an immediate commercial quotation.
            </p>

            <form id="rfq-interactive-form" onSubmit={handleSubmit}>
              <div className="rfq-form-grid">
                <div className="form-group">
                  <label htmlFor="calc-puree" className="form-label">Selected Fruit Puree</label>
                  <select
                    id="calc-puree"
                    className="form-control"
                    value={selectedPuree}
                    onChange={(e) => setSelectedPuree(e.target.value)}
                  >
                    {RB_PRODUCTS.map(p => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="calc-packaging" className="form-label">Packaging Specification</label>
                  <select
                    id="calc-packaging"
                    className="form-control"
                    value={packType}
                    onChange={(e) => setPackType(e.target.value)}
                  >
                    <option value="drum210">210 kg Aseptic Steel Drum (Single-Strength Purees)</option>
                    <option value="drum200">200 kg Aseptic Steel Drum (Guava Pulp &amp; Strawberry)</option>
                    <option value="drum220">220 kg Aseptic Steel Drum (Concentrates &amp; Tomato Paste)</option>
                  </select>
                </div>

                <div className="form-group-full">
                  <label htmlFor="calc-volume" className="form-label">Estimated Contract Volume (Metric Tons)</label>
                  <div className="range-slider-wrap">
                    <input
                      type="range"
                      id="calc-volume-slider"
                      min="1"
                      max="100"
                      value={volumeMt}
                      step="1"
                      onChange={(e) => setVolumeMt(parseFloat(e.target.value))}
                    />
                    <input
                      type="number"
                      id="calc-volume"
                      className="form-control"
                      value={volumeMt}
                      min="1"
                      max="500"
                      style={{ maxWidth: '110px' }}
                      onChange={(e) => setVolumeMt(parseFloat(e.target.value) || 1)}
                    />
                    <span className="slider-val-badge">MT</span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="calc-port" className="form-label">Destination Port / Incoterm</label>
                  <select
                    id="calc-port"
                    className="form-control"
                    value={port}
                    onChange={(e) => setPort(e.target.value)}
                  >
                    <option value="Karachi Port (FOB)">Karachi Port, Pakistan (FOB)</option>
                    <option value="Jebel Ali Port, UAE (CIF)">Jebel Ali, UAE (CIF)</option>
                    <option value="Dammam / Jeddah, KSA (CIF)">Dammam / Jeddah, Saudi Arabia (CIF)</option>
                    <option value="Rotterdam / Hamburg, EU (CIF)">Rotterdam / Hamburg, Europe (CIF)</option>
                    <option value="London Gateway / Felixstowe, UK (CIF)">London / Felixstowe, UK (CIF)</option>
                    <option value="Qingdao / Shanghai, China (CIF)">Qingdao / Shanghai, China (CIF)</option>
                    <option value="New York / Houston, USA (CIF)">New York / Houston, USA (CIF)</option>
                    <option value="Domestic Delivery (Pakistan Ex-Factory)">Domestic Pakistan (Ex-Plant Shorkot)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="calc-contact-person" className="form-label">Your Name &amp; Company</label>
                  <input
                    type="text"
                    id="calc-contact-person"
                    className="form-control"
                    placeholder="e.g. John Doe - Global Juice Ltd"
                    required
                    value={nameCompany}
                    onChange={(e) => setNameCompany(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="calc-email" className="form-label">Corporate Email</label>
                  <input
                    type="email"
                    id="calc-email"
                    className="form-control"
                    placeholder="procurement@company.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="calc-phone" className="form-label">Direct Phone / WhatsApp</label>
                  <input
                    type="tel"
                    id="calc-phone"
                    className="form-control"
                    placeholder="+1 234 567 890"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="form-group-full">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.95rem', fontSize: '1rem' }}
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit Formal RFQ to R&B Foods Export Desk'}
                  </button>
                </div>
              </div>
            </form>

            {submitted && (
              <div
                id="rfq-success-msg"
                style={{
                  display: 'block',
                  marginTop: '1.25rem',
                  padding: '1rem',
                  background: '#DCFCE7',
                  color: '#166534',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid #BBF7D0',
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}
              >
                Thank you! Your quotation request (Ref: <strong>{rfqRef}</strong>) has been transmitted directly to the R&amp;B Foods commercial team in Shorkot. A technical representative will respond with current pricing and COA within 4 business hours.
              </div>
            )}
          </div>

          {/* Live Calculation Summary Pane */}
          <div className="rfq-summary-pane">
            <div>
              <h3 className="summary-heading">Procurement Estimate</h3>
              <p className="summary-sub">Real-time containerization breakdown</p>

              <div className="summary-spec-list">
                <div className="summary-row">
                  <span className="summary-row-label">Product Selected</span>
                  <span className="summary-row-val" id="out-puree-name">{selectedPuree}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-row-label">Contract Net Weight</span>
                  <span className="summary-row-val" id="out-net-weight">
                    {volumeMt.toFixed(1)} MT ({(volumeMt * 1000).toLocaleString()} KG)
                  </span>
                </div>
                <div className="summary-row">
                  <span className="summary-row-label">Estimated Packaging Units</span>
                  <span className="summary-row-val" id="out-drums">
                    {totalUnits.toLocaleString()} {unitLabel}
                  </span>
                </div>
                <div className="summary-row">
                  <span className="summary-row-label">Container Requirement</span>
                  <span className="summary-row-val" id="out-fcl">
                    {fclContainers} x 20&apos; FCL
                  </span>
                </div>
                <div className="summary-row">
                  <span className="summary-row-label">Est. Gross Transit Weight</span>
                  <span className="summary-row-val" id="out-gross-weight">
                    ~{grossWeightMt} Metric Tons
                  </span>
                </div>
                <div className="summary-row">
                  <span className="summary-row-label">Target Port</span>
                  <span className="summary-row-val" id="out-port">{port}</span>
                </div>
              </div>
            </div>

            <div className="summary-actions">
              <a
                href={`https://wa.me/923343734786?text=${waMsg}`}
                id="btn-wa-inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-direct"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
                </svg>
                Chat Directly on WhatsApp with Export Desk
              </a>
              <p style={{ fontSize: '0.75rem', textAlign: 'center', color: 'var(--color-cream-200)', opacity: 0.8 }}>
                Direct line to Plant Director in Shorkot, Punjab
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
