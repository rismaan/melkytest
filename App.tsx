
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import TestimonialSection from './components/TestimonialSection';
import VideoGallerySection from './components/VideoGallerySection';
import CatalogSection from './components/CatalogSection';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import TestDriveModal from './components/TestDriveModal';
import { CAR_DATA } from './constants';


const App: React.FC = () => {
  const [isTestDriveModalOpen, setIsTestDriveModalOpen] = useState(false);

  const carModels = CAR_DATA.map(car => car.model);

  return (
    <div className="bg-slate-900 text-gray-200 font-sans">
      <Header onTestDriveClick={() => setIsTestDriveModalOpen(true)} />
      <main>
        <Hero />
        <ProductSection />
        <TestimonialSection />
        <VideoGallerySection />
        <CatalogSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <TestDriveModal 
        isOpen={isTestDriveModalOpen}
        onClose={() => setIsTestDriveModalOpen(false)}
        carModels={carModels}
      />
    </div>
  );
};

export default App;
