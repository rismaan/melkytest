import React, { useState } from 'react';
import { CAR_DATA, WHATSAPP_NUMBER } from '../constants';
import { CarModel, CarVariant } from '../types';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

const PriceModal: React.FC<{ car: CarModel | null; onClose: () => void }> = ({ car, onClose }) => {
    if (!car) return null;

    const message = `Halo, saya tertarik dengan promo Suzuki ${car.model} dan ingin bertanya lebih lanjut.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    return (
        <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={onClose}
        >
            <div 
                className="bg-slate-800 rounded-lg shadow-xl w-full max-w-lg relative max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
                onClick={(e) => e.stopPropagation()}
                style={{animation: 'fade-in-scale 0.3s forwards'}}
            >
                <div className="sticky top-0 bg-slate-800 p-6 border-b border-slate-700 flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-white">{car.model}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-6">
                    <div className="space-y-3">
                        {car.variants.map((variant: CarVariant) => (
                          <div key={variant.name} className="flex justify-between items-center text-gray-300 border-b border-slate-700 pb-3">
                            <span className="text-base">{variant.name}</span>
                            <span className="font-semibold text-lg text-blue-400">{formatCurrency(variant.price)}</span>
                          </div>
                        ))}
                    </div>
                     <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 w-full inline-flex items-center justify-center bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                       </svg>
                      Tanya Promo Ini
                    </a>
                </div>
            </div>
        </div>
    );
}

const ProductCard: React.FC<{ car: CarModel; onViewPrices: (car: CarModel) => void }> = ({ car, onViewPrices }) => (
  <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
    <img src={car.image} alt={car.model} className="w-full h-56 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-white mb-4 flex-grow">{car.model}</h3>
      <button
        onClick={() => onViewPrices(car)}
        className="mt-4 w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Lihat Detail Harga
      </button>
    </div>
  </div>
);

const ProductSection: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<CarModel | null>(null);

  const handleViewPrices = (car: CarModel) => {
    setSelectedCar(car);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  return (
    <section id="products" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Daftar Harga Mobil Suzuki</h2>
          <p className="mt-4 text-lg text-gray-400">Pilih mobil Suzuki impian Anda dengan harga terbaik.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAR_DATA.map((car) => (
            <ProductCard key={car.model} car={car} onViewPrices={handleViewPrices} />
          ))}
        </div>
      </div>
      <PriceModal car={selectedCar} onClose={handleCloseModal} />
       <style>{`
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProductSection;