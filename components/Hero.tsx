
import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Hero: React.FC = () => {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://mobilsuzukisolo.com/wp-content/uploads/2025/06/Banner-Mobil-Suzuki-Fronx.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 p-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Promo Terbaik Mobil <span className="text-blue-400">Suzuki</span> Impian Anda
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Dapatkan penawaran harga spesial, DP ringan, dan cicilan terjangkau. Konsultasi gratis sekarang juga!
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 text-white font-bold text-lg py-4 px-8 rounded-full hover:bg-green-600 transition-transform duration-300 transform hover:scale-105 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.25 18a.75.75 0 01-.75-.75V2.75a.75.75 0 011.5 0v14.5a.75.75 0 01-.75.75z" />
            <path fillRule="evenodd" d="M3.21 9.47a.75.75 0 01.04-1.06l4-4.25a.75.75 0 111.1 1.02l-3.2 3.43h10.1a.75.75 0 010 1.5H5.15l3.2 3.43a.75.75 0 11-1.1 1.02l-4-4.25a.75.75 0 01-.04-1.16z" clipRule="evenodd" />
          </svg>
          Tanya Promo via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Hero;
