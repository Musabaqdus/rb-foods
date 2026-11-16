'use client';

import React, { useState } from 'react';
import { RB_PRODUCTS } from '../data/products';

interface RFQCalculatorProps {
  initialProduct?: string;
}

export default function RFQCalculator({ initialProduct }: RFQCalculatorProps) {
  const [selectedProduct, setSelectedProduct] = useState<string>(
    initialProduct || 'Chaunsa Mango Puree (Aseptic & Frozen)'
  );
  const [drums, setDrums] = useState<number>(80); // default to 1 FCL (80 drums)
  const [incoterms, setIncoterms] = useState<string>('CIF');
  const [companyName, setCompanyName] = useState<string>('');
  const [buyerName, setBuyerName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [destPort, setDestPort] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [requestSample, setRequestSample] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(false);
  const [submittedResult, setSubmittedResult] = useState<{
    success: boolean;
    rfqId: string;
    message: string;
  } | null>(null);

  // Calculations
  const netWeightMT = ((drums * 215) / 1000).toFixed(2);
  const grossWeightMT = ((drums * 235) / 1000).toFixed(2);
  const palletsCount = Math.ceil(drums / 4);
  const fclContainers = (drums / 80).toFixed(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmittedResult(null);

    try {
      const res = await fetch('/api/rfq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          companyName,
          buyerName,
          email,
          phone,
          product: selectedProduct,
          volumeDrums: drums,
          incoterms: `${incoterms} - Port: ${destPort || 'Karachi/Unspecified'}`,
          notes: `${notes} [Sample Kit Requested: ${requestSample ? 'Yes' : 'No'}]`
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmittedResult({
          success: true,
          rfqId: data.rfqId,
          message: data.message
        });
      } else {
        alert(data.message || 'Error registering inquiry. Please try again or email export@rbfoods.com.pk');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again or contact us directly at export@rbfoods.com.pk');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rfq-section" id="rfq-calculator">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-pill">INTERACTIVE B2B PROCUREMENT TOOL</span>
          <h2 className="section-title">
            Container Load Calculator &amp; Instant Formal RFQ
          </h2>
          <p className="section-subtitle">
            Calculate your metric tonnage payload, container footprint, and submit your formal commercial inquiry directly to our Export Trading Desk for rapid proforma quotation.
          </p>
        </div>

        <div className="rfq-calculator-card">
          {/* Left Column: Interactive Volume & Payload Calculator */}
          <div className="calc-tool-column">
            <h3 className="calc-column-title">1. Container Volume &amp; Tonnage Estimator</h3>

            <div className="form-group">
              <label htmlFor="productSelect" className="form-label">
                Select Fruit Puree / Concentrate:
              </label>
              <select
                id="productSelect"
                className="form-select"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
              >
                {RB_PRODUCTS.map((prod) => (
                  <option key={prod.id} value={prod.name}>
                    {prod.name} ({prod.specs.brix.split('|')[0].trim()})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Order Volume in 215kg Aseptic Drums:</span>
                <span className="slider-val-badge"><strong>{drums}</strong> Drums</span>
              </label>
              <input
                type="range"
                min="20"
                max="800"
                step="20"
                value={drums}
                onChange={(e) => setDrums(parseInt(e.target.value, 10))}
                className="calc-range-slider"
              />
              <div className="slider-markers">
                <span onClick={() => setDrums(80)}>1 &times; 20&apos; FCL (80)</span>
                <span onClick={() => setDrums(160)}>2 &times; FCL (160)</span>
                <span onClick={() => setDrums(400)}>5 &times; FCL (400)</span>
                <span onClick={() => setDrums(800)}>10 &times; FCL (800)</span>
              </div>
            </div>

            {/* Real-time Tonnage Readout Cards */}
            <div className="calc-readout-grid">
              <div className="readout-box">
                <span className="readout-label">Net Fruit Puree</span>
                <span className="readout-value">{netWeightMT} <span className="readout-sub">MT</span></span>
                <span className="readout-hint">{drums * 215} Kilograms Net</span>
              </div>

              <div className="readout-box">
                <span className="readout-label">Gross Shipping Weight</span>
                <span className="readout-value">{grossWeightMT} <span className="readout-sub">MT</span></span>
                <span className="readout-hint">Including Drums &amp; Pallets</span>
              </div>

              <div className="readout-box">
                <span className="readout-label">Pallet Configuration</span>
                <span className="readout-value">{palletsCount} <span className="readout-sub">Pallets</span></span>
                <span className="readout-hint">4 Drums / Timber Pallet</span>
              </div>

              <div className="readout-box">
                <span className="readout-label">Container Requirement</span>
                <span className="readout-value">{fclContainers} <span className="readout-sub">&times; 20&apos; FCL</span></span>
                <span className="readout-hint">Dry Ocean Container</span>
              </div>
            </div>

            <div className="calc-specs-note">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>
                Standard export packaging: 215 kg net aseptic bag with food-grade internal liner inside epoxy-lacquered steel drums. Forward contracts include fixed FOB/CIF price locks.
              </span>
            </div>
          </div>

          {/* Right Column: Formal RFQ Form */}
          <div className="calc-form-column">
            <h3 className="calc-column-title">2. Commercial RFQ &amp; Sample Kit Request</h3>

            {submittedResult ? (
              <div className="rfq-success-card">
                <div className="rfq-success-icon">&check;</div>
                <h4 className="rfq-success-title">Inquiry Registered Successfully!</h4>
                <p className="rfq-success-ref">
                  Reference Code: <strong>{submittedResult.rfqId}</strong>
                </p>
                <p className="rfq-success-desc">{submittedResult.message}</p>
                <div className="rfq-success-contacts">
                  <p><strong>Direct Desk:</strong> export@rbfoods.com.pk</p>
                  <p><strong>Hotline:</strong> +92 47 5510000</p>
                </div>
                <button
                  type="button"
                  className="btn btn-outline"
                  style={{ marginTop: '1.25rem' }}
                  onClick={() => setSubmittedResult(null)}
                >
                  Submit Another RFQ
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rfq-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="companyName" className="form-label">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      className="form-input"
                      placeholder="e.g. Del Monte / Döhler / Shezan"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="buyerName" className="form-label">
                      Procurement Officer Name *
                    </label>
                    <input
                      type="text"
                      id="buyerName"
                      className="form-input"
                      placeholder="e.g. Alexander Vance"
                      required
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Corporate Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      placeholder="procurement@company.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone / WhatsApp (with Country Code)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="form-input"
                      placeholder="+971 50 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="incoterms" className="form-label">
                      Preferred Incoterms 2020:
                    </label>
                    <select
                      id="incoterms"
                      className="form-select"
                      value={incoterms}
                      onChange={(e) => setIncoterms(e.target.value)}
                    >
                      <option value="CIF">CIF (Cost, Insurance &amp; Freight)</option>
                      <option value="FOB">FOB Karachi Port (Port of Loading)</option>
                      <option value="CFR">CFR (Cost &amp; Freight)</option>
                      <option value="EXW">EXW (Ex-Works Shorkot Factory)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="destPort" className="form-label">
                      Destination Port / Country:
                    </label>
                    <input
                      type="text"
                      id="destPort"
                      className="form-input"
                      placeholder="e.g. Rotterdam, Jebel Ali, Qingdao"
                      value={destPort}
                      onChange={(e) => setDestPort(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes" className="form-label">
                    Specific Physicochemical / Application Requirements:
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    className="form-textarea"
                    placeholder="Brix target, acidity range, expected shipment delivery schedule, packaging preferences..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                </div>

                <div className="form-checkbox-row">
                  <input
                    type="checkbox"
                    id="requestSample"
                    checked={requestSample}
                    onChange={(e) => setRequestSample(e.target.checked)}
                    className="form-checkbox"
                  />
                  <label htmlFor="requestSample" className="checkbox-label">
                    Dispatch Complimentary 1.0 KG Commercial Lab Testing Kit (DHL / FedEx express courier)
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-submit-rfq"
                  disabled={loading}
                >
                  {loading ? (
                    <span>Registering Inquiry...</span>
                  ) : (
                    <>
                      <span>Transmit Formal RFQ to Export Desk</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
