'use client';

import React, { useState } from 'react';
import { RB_PRODUCTS, Product } from '../data/products';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onRequestQuoteWithProduct: (productName: string) => void;
}

export default function ProductCatalog({ onSelectProduct, onRequestQuoteWithProduct }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = activeCategory === 'all'
    ? RB_PRODUCTS
    : RB_PRODUCTS.filter((p) => {
        if (activeCategory === 'mango') return p.category === 'mango';
        if (activeCategory === 'guava') return p.category === 'guava';
        if (activeCategory === 'citrus') return p.category === 'citrus';
        if (activeCategory === 'others') return p.category === 'temperate' || p.category === 'vegetable';
        return true;
      });

  return (
    <section className="catalog-section" id="products">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-pill">PREMIUM AGRO-INDUSTRIAL CATALOG</span>
          <h2 className="section-title">
            Export-Grade Fruit Purees &amp; Concentrates
          </h2>
          <p className="section-subtitle">
            Processed from tree-ripened Pakistani fruits under strict continuous aseptic flash-sterilization. Tailored for commercial beverage, dairy, ice cream, baby food, and confectionery compounding.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="catalog-filter-bar">
          <button
            type="button"
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Products (7)
          </button>
          <button
            type="button"
            className={`filter-btn ${activeCategory === 'mango' ? 'active' : ''}`}
            onClick={() => setActiveCategory('mango')}
          >
            Mango Purees (2)
          </button>
          <button
            type="button"
            className={`filter-btn ${activeCategory === 'guava' ? 'active' : ''}`}
            onClick={() => setActiveCategory('guava')}
          >
            Pink &amp; White Guava (1)
          </button>
          <button
            type="button"
            className={`filter-btn ${activeCategory === 'citrus' ? 'active' : ''}`}
            onClick={() => setActiveCategory('citrus')}
          >
            Kinnow Mandarin Citrus (1)
          </button>
          <button
            type="button"
            className={`filter-btn ${activeCategory === 'others' ? 'active' : ''}`}
            onClick={() => setActiveCategory('others')}
          >
            Temperate &amp; Vegetables (3)
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="catalog-grid">
          {filteredProducts.map((prod) => (
            <article className="product-card" key={prod.id}>
              <div className="product-media-wrap">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="product-card-img"
                  loading="lazy"
                />
                <span className="product-badge">{prod.badge}</span>
                <span className="product-harvest-badge">{prod.specs.season.split('(')[0].trim()}</span>
              </div>

              <div className="product-card-body">
                <span className="product-botanical-tag">{prod.botanical}</span>
                <h3 className="product-title">{prod.name}</h3>
                <p className="product-tagline">{prod.tagline}</p>

                {/* Analytical Specs Quick Pill Summary */}
                <div className="product-spec-pills">
                  <div className="spec-pill">
                    <span className="spec-pill-name">Brix:</span>
                    <span className="spec-pill-val">{prod.specs.brix.split('|')[0].trim()}</span>
                  </div>
                  <div className="spec-pill">
                    <span className="spec-pill-name">Acidity:</span>
                    <span className="spec-pill-val">{prod.specs.acidity.split('(')[0].trim()}</span>
                  </div>
                  <div className="spec-pill">
                    <span className="spec-pill-name">pH:</span>
                    <span className="spec-pill-val">{prod.specs.ph}</span>
                  </div>
                  <div className="spec-pill">
                    <span className="spec-pill-name">Pack:</span>
                    <span className="spec-pill-val">215kg Drum</span>
                  </div>
                </div>

                <div className="product-card-actions">
                  <button
                    type="button"
                    className="btn btn-outline btn-card"
                    onClick={() => onSelectProduct(prod)}
                  >
                    View Lab Specs
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-card"
                    onClick={() => onRequestQuoteWithProduct(prod.name)}
                  >
                    Request Quote
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
