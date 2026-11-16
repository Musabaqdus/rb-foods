'use client';

import React, { useState } from 'react';
import { RB_PRODUCTS, Product } from '../data/products';

interface ProductCatalogProps {
  onOpenSpec: (product: Product) => void;
  onSelectRfq: (productName: string) => void;
}

export default function ProductCatalog({ onOpenSpec, onSelectRfq }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = activeCategory === 'all'
    ? RB_PRODUCTS
    : RB_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section className="section" id="purees">
      <div className="container">
        <div className="section-header text-center reveal is-visible">
          <span className="section-kicker">Industrial Specification Portfolio</span>
          <h2 className="section-title">Aseptic &amp; Frozen Fruit Purees</h2>
          <p className="section-desc">
            Refined from Pakistan&apos;s prime agricultural heartland without artificial coloring, flavorings, or chemical preservatives. Packed in export-ready 215 kg aseptic steel drums and frozen bulk packaging.
          </p>
        </div>

        {/* Filter Tabs with Smooth Animation */}
        <div className="product-tabs-wrapper reveal is-visible">
          <button
            type="button"
            className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Purees
          </button>
          <button
            type="button"
            className={`tab-btn ${activeCategory === 'mango' ? 'active' : ''}`}
            onClick={() => setActiveCategory('mango')}
          >
            Mango Specialties (Chaunsa / Sindhri)
          </button>
          <button
            type="button"
            className={`tab-btn ${activeCategory === 'guava' ? 'active' : ''}`}
            onClick={() => setActiveCategory('guava')}
          >
            Pink &amp; White Guava
          </button>
          <button
            type="button"
            className={`tab-btn ${activeCategory === 'citrus' ? 'active' : ''}`}
            onClick={() => setActiveCategory('citrus')}
          >
            Indus Kinnow &amp; Mandarin
          </button>
          <button
            type="button"
            className={`tab-btn ${activeCategory === 'temperate' ? 'active' : ''}`}
            onClick={() => setActiveCategory('temperate')}
          >
            Apple &amp; Berries
          </button>
          <button
            type="button"
            className={`tab-btn ${activeCategory === 'vegetable' ? 'active' : ''}`}
            onClick={() => setActiveCategory('vegetable')}
          >
            Vegetable Purees
          </button>
        </div>

        {/* Products Grid */}
        <div className="products-grid" id="products-grid-container">
          {filtered.map((product) => (
            <article className="product-card reveal reveal-scale is-visible" key={product.id}>
              <div className="product-card-img-wrap">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="product-card-badge">{product.badge}</span>
              </div>
              <div className="product-card-body">
                <span className="product-card-botanical">{product.botanical}</span>
                <h3 className="product-card-title">{product.name}</h3>
                <p className="product-card-tagline">{product.tagline}</p>

                <div className="spec-quick-bar">
                  <div className="spec-mini-item">
                    <span className="spec-mini-label">BRIX</span>
                    <span className="spec-mini-val">{product.specs.brix.split('|')[0].trim()}</span>
                  </div>
                  <div className="spec-mini-item">
                    <span className="spec-mini-label">PACKAGING</span>
                    <span className="spec-mini-val">215 kg Aseptic</span>
                  </div>
                  <div className="spec-mini-item">
                    <span className="spec-mini-label">pH RANGE</span>
                    <span className="spec-mini-val">{product.specs.ph}</span>
                  </div>
                  <div className="spec-mini-item">
                    <span className="spec-mini-label">SHELF LIFE</span>
                    <span className="spec-mini-val">24 Months</span>
                  </div>
                </div>

                <div className="product-card-footer">
                  <button
                    type="button"
                    className="btn-spec-view"
                    onClick={() => onOpenSpec(product)}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }}
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                    Technical Specs
                  </button>
                  <button
                    type="button"
                    className="btn-sample-req"
                    onClick={() => onSelectRfq(product.name)}
                  >
                    Sample RFQ
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
