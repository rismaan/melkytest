import React from 'react';
import { 
    WHATSAPP_NUMBER, 
    WHATSAPP_MESSAGE, 
    PHONE_NUMBER, 
    EMAIL_ADDRESS, 
    INSTAGRAM_USERNAME, 
    INSTAGRAM_URL,
} from '../constants';

const Footer: React.FC = () => {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  const phoneUrl = `tel:+${PHONE_NUMBER}`;
  const emailUrl = `mailto:${EMAIL_ADDRESS}`;

  return (
    <footer className="bg-slate-950 text-gray-400 py-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-center text-center">
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wider">INFORMASI KONTAK</h3>
            <ul className="space-y-4 md:space-y-0 md:flex md:space-x-8 md:items-center">
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.846 6.069l-1.295 4.721 4.793-1.263z" />
                </svg>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">+62 882-2453-0225</a>
              </li>
              <li className="flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                 </svg>
                <a href={phoneUrl} className="hover:text-blue-400 transition-colors">+62 882-2453-0225</a>
              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-red-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 2.006l7.997 3.878A2 2 0 0119 7.681V18a2 2 0 01-2 2H3a2 2 0 01-2-2V7.681a2 2 0 011.003-1.797zM10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" /></svg>
                <a href={emailUrl} className="hover:text-red-400 transition-colors">{EMAIL_ADDRESS}</a>
              </li>
              <li className="flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-pink-400" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.231 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.884a1.161 1.161 0 1 0 0 2.322 1.161 1.161 0 0 0 0-2.322zM8 4.202a3.79 3.79 0 1 0 0 7.58 3.79 3.79 0 0 0 0-7.58zm0 1.443a2.347 2.347 0 1 1 0 4.694 2.347 2.347 0 0 1 0-4.694z"/></svg>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">{INSTAGRAM_USERNAME}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Suzuki Car Promo. All rights reserved.</p>
            <p className="text-sm mt-1">Website Promosi Independen.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;