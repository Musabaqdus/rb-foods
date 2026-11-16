'use client';

import React, { useState } from 'react';
import TopProcurementBar from '../components/TopProcurementBar';
import Navbar from '../components/Navbar';
import MobileDrawer from '../components/MobileDrawer';
import Hero from '../components/Hero';
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
  const [selectedModalProduct, setSelectedModalProduct] = useState<Product | null>(null);
  const [rfqProduct, setRfqProduct] = useState<string>('Chaunsa Mango Puree (Aseptic & Frozen)');

  const scrollToRFQ = () => {
    const el = document.getElementById('rfq-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedModalProduct(product);
  };

  const handleRequestQuoteWithProduct = (productName: string) => {
    setRfqProduct(productName);
    scrollToRFQ();
  };

  return (
    <>
      <TopProcurementBar />
      <Navbar
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenQuote={scrollToRFQ}
      />
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpenQuote={scrollToRFQ}
      />

      <main>
        <Hero onOpenQuote={scrollToRFQ} />
        <ClientMarquee />
        <ProductCatalog
          onSelectProduct={handleSelectProduct}
          onRequestQuoteWithProduct={handleRequestQuoteWithProduct}
        />
        <BertuzziTech />
        <QualityLabTour />
        <SeasonalityMatrix />
        <PackagingLogistics />
        <RFQCalculator initialProduct={rfqProduct} key={rfqProduct} />
        <ChairmanPledge />
      </main>

      <Footer />

      <ProductModal
        product={selectedModalProduct}
        onClose={() => setSelectedModalProduct(null)}
        onRequestSample={handleRequestQuoteWithProduct}
      />

      <WhatsAppFloating />
    </>
  );
}
