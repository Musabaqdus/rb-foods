'use client';

import React, { useEffect } from 'react';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestSample: (productName: string) => void;
}

export default function ProductModal({ product, onClose, onRequestSample }: ProductModalProps) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  if (!product) return null;

  const sheet = product.specSheet || {
    docTitle: `Specifications Sheet (${product.name})`,
    description: product.overview,
    ingredients: product.specs.nonGmo,
    additives: "The pulp does not contain any preservatives, colors or flavors. Citric acid and Ascorbic acid are added in a minimal allowable quantity in order to adjust pH of the pulp.",
    table: [
      { param: "Brix", standard: product.specs.typicalBrix, remarks: "" },
      { param: "pH", standard: product.specs.ph, remarks: "" },
      { param: "Acidity", standard: product.specs.acidity, remarks: "As per citric acid" },
      { param: "Flavor & Taste", standard: product.specs.flavor, remarks: "" },
      { param: "Color", standard: product.specs.color, remarks: "" },
      { param: "Consistency", standard: product.specs.consistency || product.specs.bostwick || "-", remarks: "" },
      { param: "Total Aerobic Count/g", standard: product.microbiological.tpc, remarks: "" },
      { param: "Yeast & mold Count/g", standard: product.microbiological.yeastMould, remarks: "" },
      { param: "Ascorbic Acid", standard: product.specs.ascorbicAcid, remarks: "" }
    ],
    packaging: product.specs.packaging,
    storage: `${product.specs.shelfLife}. ${product.specs.storageTemp}.`,
    intendedUse: product.specs.applications
  };

  return (
    <div
      className={`modal-overlay ${product ? 'active' : ''}`}
      id="spec-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-card" style={{ maxWidth: '920px', padding: '0', background: '#FDFBF7' }}>
        {/* Top Control Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 1.75rem',
          background: '#071911',
          color: '#FFFFFF',
          borderTopLeftRadius: 'var(--radius-lg)',
          borderTopRightRadius: 'var(--radius-lg)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold-400)' }}></span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-gold-300)' }}>
              Official Technical Specification Sheet
            </span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
            style={{ color: '#FFFFFF', fontSize: '1.75rem', lineHeight: 1 }}
          >
            &times;
          </button>
        </div>

        {/* Modal Body / Official Document Page */}
        <div className="modal-body" id="spec-modal-body" style={{ padding: '2rem' }}>
          
          {/* Printable Official Document Wrapper */}
          <div style={{
            background: '#FFFFFF',
            border: '1.5px solid #133826',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            padding: '1.75rem'
          }}>
            
            {/* 1. Official Header Box (Table Format matching Shared Docs) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(160px, 1.2fr) minmax(220px, 2fr) minmax(140px, 1.1fr)',
              border: '1.5px solid #133826',
              marginBottom: '1.5rem',
              background: '#FAF8F5'
            }}>
              {/* Box 1: Brand & Logo */}
              <div style={{
                padding: '0.85rem 1rem',
                borderRight: '1.5px solid #133826',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <img
                  src="/images/Final Logo.jpg"
                  alt="R&B Foods"
                  style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                  onError={(e) => {
                    // Fallback to text monogram if file not loaded
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#071911', letterSpacing: '0.02em', lineHeight: 1.2 }}>
                    R&amp;B FOODS
                  </div>
                  <div style={{ fontSize: '0.62rem', color: '#133826', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '2px' }}>
                    REAL FRUIT &bull; NATURAL TASTE
                  </div>
                </div>
              </div>

              {/* Box 2: Document Title */}
              <div style={{
                padding: '0.85rem 1rem',
                borderRight: '1.5px solid #133826',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#555', fontWeight: 600 }}>
                  Doc. Title:
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#071911', lineHeight: 1.3, marginTop: '2px' }}>
                  {sheet.docTitle}
                </div>
              </div>

              {/* Box 3: Quality Review Sign-off */}
              <div style={{
                padding: '0.6rem 0.85rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                fontSize: '0.72rem',
                color: '#333'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E0D8CB', paddingBottom: '3px' }}>
                  <span style={{ color: '#666' }}>Prepared By:</span>
                  <strong>MA</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E0D8CB', paddingBottom: '3px', paddingTop: '3px' }}>
                  <span style={{ color: '#666' }}>Reviewed By:</span>
                  <strong>FSTL</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '3px' }}>
                  <span style={{ color: '#666' }}>Approved by:</span>
                  <strong>CEO</strong>
                </div>
              </div>
            </div>

            {/* 2. Product Description */}
            <div style={{ marginBottom: '1.15rem' }}>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#071911', marginBottom: '0.35rem' }}>
                Product Description:
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6, color: '#2B3E34' }}>
                {sheet.description}
              </p>
            </div>

            {/* 3. Ingredients */}
            <div style={{ marginBottom: '1.15rem' }}>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#071911', marginBottom: '0.35rem' }}>
                Ingredients:
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6, color: '#2B3E34' }}>
                {sheet.ingredients}
              </p>
            </div>

            {/* 4. Additives */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#071911', marginBottom: '0.35rem' }}>
                Additives:
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6, color: '#2B3E34' }}>
                {sheet.additives}
              </p>
            </div>

            {/* 5. SPECIFICATION TABLE (3 Columns matching Shared Docs) */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                textAlign: 'center',
                fontWeight: 800,
                fontSize: '0.98rem',
                color: '#071911',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '0.75rem',
                paddingBottom: '0.35rem',
                borderBottom: '2px solid #133826'
              }}>
                SPECIFICATION OF {product.name.toUpperCase()}
              </div>

              <div className="spec-table-responsive-wrapper" style={{ overflowX: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  border: '1.5px solid #133826',
                  fontSize: '0.88rem'
                }}>
                  <thead>
                    <tr style={{ background: '#133826', color: '#FFFFFF' }}>
                      <th style={{ padding: '0.75rem 1rem', textAlign: 'left', border: '1px solid #133826', width: '32%', fontWeight: 700 }}>
                        Parameters
                      </th>
                      <th style={{ padding: '0.75rem 1rem', textAlign: 'left', border: '1px solid #133826', width: '33%', fontWeight: 700 }}>
                        Standard
                      </th>
                      <th style={{ padding: '0.75rem 1rem', textAlign: 'left', border: '1px solid #133826', width: '35%', fontWeight: 700 }}>
                        Remarks
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sheet.table.map((row, idx) => (
                      <tr key={idx} style={{ background: idx % 2 === 0 ? '#FFFFFF' : '#FAF8F5' }}>
                        <td style={{ padding: '0.65rem 1rem', border: '1px solid #D5CBBB', fontWeight: 700, color: '#071911' }}>
                          {row.param}
                        </td>
                        <td style={{ padding: '0.65rem 1rem', border: '1px solid #D5CBBB', color: '#133826', fontWeight: 600 }}>
                          {row.standard}
                        </td>
                        <td style={{ padding: '0.65rem 1rem', border: '1px solid #D5CBBB', color: '#444' }}>
                          {row.remarks || '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6. Packaging */}
            <div style={{ marginBottom: '1.15rem' }}>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#071911', marginBottom: '0.35rem' }}>
                Packaging:
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6, color: '#2B3E34' }}>
                {sheet.packaging}
              </p>
            </div>

            {/* 7. Storage / Shelf Life */}
            <div style={{ marginBottom: '1.15rem' }}>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#071911', marginBottom: '0.35rem' }}>
                Storage / Shelf Life:
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6, color: '#2B3E34' }}>
                {sheet.storage}
              </p>
            </div>

            {/* 8. Intended Use */}
            <div style={{ marginBottom: '0.5rem' }}>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#071911', marginBottom: '0.35rem' }}>
                Intended use:
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6, color: '#2B3E34' }}>
                {sheet.intendedUse}
              </p>
            </div>

          </div>

          {/* Action Buttons */}
          <div style={{
            marginTop: '1.5rem',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => window.print()}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              Print / Save Spec Sheet
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onClose();
                onRequestSample(product.name);
              }}
            >
              Request Commercial RFQ &bull; {product.name}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              style={{ background: '#ECE6DC', color: '#071911' }}
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
