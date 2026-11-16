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
      <div className="modal-card">
        <div className="modal-header">
          <h3 id="modal-spec-title">Technical Laboratory Data Sheet</h3>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        <div className="modal-body" id="spec-modal-body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--color-primary-900)' }}>
                {product.name}
              </h4>
              <p style={{ fontStyle: 'italic', color: 'var(--color-charcoal-600)' }}>
                {product.botanical}
              </p>
            </div>
            <span className="crop-status-tag" style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem' }}>
              {product.specs.season}
            </span>
          </div>

          <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-charcoal-700)', marginBottom: '1.5rem' }}>
            {product.overview}
          </p>

          <h5 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary-800)', borderBottom: '2px solid var(--color-cream-300)', paddingBottom: '0.4rem', marginTop: '1.5rem' }}>
            1. Physico-Chemical &amp; Organoleptic Parameters
          </h5>
          <table className="spec-sheet-table">
            <tbody>
              <tr><th>Refractometric Brix (&deg;Bx)</th><td>{product.specs.brix}</td></tr>
              <tr><th>Total Titratable Acidity</th><td>{product.specs.acidity}</td></tr>
              <tr><th>pH Level</th><td>{product.specs.ph}</td></tr>
              <tr><th>Bostwick Consistency</th><td>{product.specs.bostwick}</td></tr>
              <tr><th>Natural Color &amp; Appearance</th><td>{product.specs.color}</td></tr>
              <tr><th>Aroma &amp; Flavor Profile</th><td>{product.specs.flavor}</td></tr>
              <tr><th>Primary Industrial Applications</th><td>{product.specs.applications}</td></tr>
            </tbody>
          </table>

          <h5 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary-800)', borderBottom: '2px solid var(--color-cream-300)', paddingBottom: '0.4rem', marginTop: '2rem' }}>
            2. In-House QC &amp; Microbiological Standard (Zero Defect)
          </h5>
          <table className="spec-sheet-table">
            <tbody>
              <tr><th>Total Plate Count (TPC)</th><td>{product.microbiological.tpc}</td></tr>
              <tr><th>Yeast &amp; Mould Count</th><td>{product.microbiological.yeastMould}</td></tr>
              <tr><th>Coliforms</th><td>{product.microbiological.coliforms}</td></tr>
              <tr><th>Pathogens (Salmonella/E. Coli)</th><td>{product.microbiological.pathogens}</td></tr>
            </tbody>
          </table>

          <h5 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary-800)', borderBottom: '2px solid var(--color-cream-300)', paddingBottom: '0.4rem', marginTop: '2rem' }}>
            3. Packaging, Export &amp; Shelf Life
          </h5>
          <table className="spec-sheet-table">
            <tbody>
              <tr><th>Export Packaging</th><td>{product.specs.packaging}</td></tr>
              <tr><th>Container Stuffing</th><td>80 Drums per 20ft FCL (17.20 Metric Tons Net)</td></tr>
              <tr><th>Shelf Life &amp; Preservation</th><td>{product.specs.shelfLife}</td></tr>
              <tr><th>Manufacturing Origin</th><td>R&amp;B Foods Plant, Shorkot, Punjab, Pakistan (BERTUZZI Italy Line)</td></tr>
            </tbody>
          </table>

          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => window.print()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', verticalAlign: '-2px', marginRight: '6px' }}>
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              Print Spec Sheet
            </button>
            <button
              type="button"
              className="btn btn-gold"
              onClick={() => {
                onClose();
                onRequestSample(product.name);
              }}
            >
              Request Official Sample Batch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
