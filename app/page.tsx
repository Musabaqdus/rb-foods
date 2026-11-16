'use client';

import React, { useState } from 'react';
import TopProcurementBar from '../components/TopProcurementBar';
import Navbar from '../components/Navbar';
import MobileDrawer from '../components/MobileDrawer';
import Hero from '../components/Hero';
import HeroFullCover from '../components/HeroFullCover';
import ClientMarquee from '../components/ClientMarquee';
import ProductCatalog from '../components/ProductCatalog';
import ProductModal from '../components/ProductModal';
import BertuzziTech from '../components/BertuzziTech';
import QualityLabTour from '../components/QualityLabTour';
import SeasonalityMatrix from '../components/SeasonalityMatrix';
import PackagingLogistics from '../components/PackagingLogistics';
import RFQCalculator from '../components/RFQCalculator';
import ChairmanPledge from '../components/ChairmanPledge';
import Footer from '../components/Footer';
import WhatsAppFloating from '../components/WhatsAppFloating';
import { Product } from '../data/products';

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [rfqInitialProduct, setRfqInitialProduct] = useState<string>('Chaunsa Mango Puree (Aseptic & Frozen)');
  const [heroLayout, setHeroLayout] = useState<'cover' | 'split'>('cover');

  const handleOpenSpec = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseSpec = () => {
    setSelectedProduct(null);
  };

  const handleSelectRfq = (productName: string) => {
    setRfqInitialProduct(productName);
    const rfqEl = document.getElementById('rfq-calculator');
    if (rfqEl) {
      rfqEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <TopProcurementBar />
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <main>
        {heroLayout === 'cover' ? (
          <HeroFullCover onSwitchLayout={() => setHeroLayout('split')} />
        ) : (
          <Hero onSwitchLayout={() => setHeroLayout('cover')} />
        )}
        <ClientMarquee />
        <ProductCatalog
          onOpenSpec={handleOpenSpec}
          onSelectRfq={handleSelectRfq}
        />
        <BertuzziTech />
        <SeasonalityMatrix />
        <QualityLabTour />
        <PackagingLogistics />
        <RFQCalculator initialProduct={rfqInitialProduct} key={rfqInitialProduct} />
        <ChairmanPledge />
      </main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={handleCloseSpec}
        onRequestSample={handleSelectRfq}
      />

      <WhatsAppFloating />
    </>
  );
}
