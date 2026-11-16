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
    <div className="spec-modal active" id="specModal" role="dialog" aria-modal="true">
      <div className="modal-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="modal-content">
        <div className="modal-header">
          <div>
            <span className="modal-badge">{product.badge}</span>
            <h3 className="modal-title">{product.name}</h3>
            <p className="modal-botanical">{product.botanical}</p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close specification sheet"
          >
            &times;
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-overview-text">{product.overview}</p>

          <h4 className="modal-section-title">1. Physico-Chemical Parameters</h4>
          <table className="spec-sheet-table">
            <tbody>
              <tr>
                <th>Brix Level (&deg;Bx)</th>
                <td><strong>{product.specs.brix}</strong></td>
              </tr>
              <tr>
                <th>Acidity (% as Citric/Malic)</th>
                <td>{product.specs.acidity}</td>
              </tr>
              <tr>
                <th>pH Value (at 20&deg;C)</th>
                <td>{product.specs.ph}</td>
              </tr>
              {product.specs.ratio && (
                <tr>
                  <th>Brix / Acid Ratio</th>
                  <td>{product.specs.ratio}</td>
                </tr>
              )}
              <tr>
                <th>Bostwick Viscosity</th>
                <td>{product.specs.bostwick}</td>
              </tr>
              <tr>
                <th>Color Index</th>
                <td>{product.specs.color}</td>
              </tr>
              <tr>
                <th>Organoleptic Profile</th>
                <td>{product.specs.flavor}</td>
              </tr>
            </tbody>
          </table>

          <h4 className="modal-section-title">2. Microbiological Specifications (Aseptic Standard)</h4>
          <table className="spec-sheet-table">
            <tbody>
              <tr>
                <th>Total Plate Count (TPC)</th>
                <td>{product.microbiological.tpc}</td>
              </tr>
              <tr>
                <th>Yeast &amp; Mould</th>
                <td>{product.microbiological.yeastMould}</td>
              </tr>
              <tr>
                <th>Coliforms</th>
                <td>{product.microbiological.coliforms}</td>
              </tr>
              <tr>
                <th>Pathogenic Bacteria</th>
                <td><strong>{product.microbiological.pathogens}</strong></td>
              </tr>
            </tbody>
          </table>

          <h4 className="modal-section-title">3. Packaging &amp; Commercial Shelf Life</h4>
          <table className="spec-sheet-table">
            <tbody>
              <tr>
                <th>Standard Export Packaging</th>
                <td>{product.specs.packaging}</td>
              </tr>
              <tr>
                <th>Recommended Storage &amp; Shelf Life</th>
                <td>{product.specs.shelfLife}</td>
              </tr>
              <tr>
                <th>Harvest Window</th>
                <td>{product.specs.season}</td>
              </tr>
              <tr>
                <th>Commercial Applications</th>
                <td>{product.specs.applications}</td>
              </tr>
            </tbody>
          </table>

          <div className="modal-action-row" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onClose();
                onRequestSample(product.name);
              }}
            >
              Request Commercial Sample Kit
            </button>
            <a
              href="/docs/company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Download Full Lab Certificate (COA)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
