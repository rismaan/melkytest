
import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../constants';

interface HeaderProps {
    onTestDriveClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onTestDriveClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-xl' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white flex items-center">
            <img src={LOGO_URL} alt="Suzuki Logo" className="h-8 w-auto mr-3" />
            <span className="text-gray-200 text-xl">SUZUKI Promo</span>
        </a>
        <button 
            onClick={onTestDriveClick}
            className="inline-block bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors"
        >
            Test Drive
        </button>
      </div>
    </header>
  );
};

export default Header;