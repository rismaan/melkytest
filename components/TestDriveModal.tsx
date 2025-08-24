
import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../constants';

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
  carModels: string[];
}

const TestDriveModal: React.FC<TestDriveModalProps> = ({ isOpen, onClose, carModels }) => {
  const [formData, setFormData] = useState({
    name: '',
    car: carModels[0] || '',
    address: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo, saya ingin mengajukan test drive.\n\nNama: ${formData.name}\nMobil: ${formData.car}\nAlamat: ${formData.address}\nNo. Telp: ${formData.phone}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-lg shadow-xl w-full max-w-md relative transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fade-in-scale 0.3s forwards' }}
      >
        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-white">Formulir Test Drive</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nama Lengkap</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="car" className="block text-sm font-medium text-gray-300 mb-1">Pilih Mobil</label>
            <select id="car" name="car" value={formData.car} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-blue-500 focus:border-blue-500">
              {carModels.map(model => <option key={model} value={model}>{model}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">Alamat Lengkap</label>
            <textarea id="address" name="address" value={formData.address} onChange={handleChange} rows={3} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-blue-500 focus:border-blue-500" required></textarea>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Nomor Telepon (WhatsApp)</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-colors">
            Kirim via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestDriveModal;
