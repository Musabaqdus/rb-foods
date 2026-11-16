'use client';

import React, { useState } from 'react';
import TopProcurementBar from '../../components/TopProcurementBar';
import Navbar from '../../components/Navbar';
import MobileDrawer from '../../components/MobileDrawer';
import ProductCatalog from '../../components/ProductCatalog';
import ProductModal from '../../components/ProductModal';
import Footer from '../../components/Footer';
import WhatsAppFloating from '../../components/WhatsAppFloating';
import { Product } from '../../data/products';
import Link from 'next/link';

export default function PureesPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenSpec = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseSpec = () => {
    setSelectedProduct(null);
  };

  const handleSelectRfq = (productName: string) => {
    window.location.href = `/rfq?product=${encodeURIComponent(productName)}`;
  };

  return (
    <>
      <TopProcurementBar />
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <main style={{ paddingTop: '1rem' }}>
        {/* Page Breadcrumb Header */}
        <div className="container" style={{ paddingTop: '1.5rem', paddingBottom: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-charcoal-600)' }}>
            <Link href="/" style={{ color: 'var(--color-gold-700)', fontWeight: 600 }}>Home</Link>
            <span>&bull;</span>
            <span style={{ color: 'var(--color-primary-900)', fontWeight: 700 }}>Industrial Fruit Purees &amp; Concentrates</span>
          </div>
        </div>

        <ProductCatalog
          onOpenSpec={handleOpenSpec}
          onSelectRfq={handleSelectRfq}
        />

        <ProductModal
          product={selectedProduct}
          onClose={handleCloseSpec}
          onRequestSample={handleSelectRfq}
        />
      </main>

      <Footer />
      <WhatsAppFloating />
    </>
  );
}
