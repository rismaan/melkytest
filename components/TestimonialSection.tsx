import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg text-center p-6 transform hover:-translate-y-2 transition-transform duration-300">
    <img 
        src={testimonial.photoUrl} 
        alt={testimonial.customerName} 
        className="w-40 h-40 object-cover mx-auto rounded-lg mb-4 border-4 border-blue-500" 
    />
    <h4 className="font-bold text-xl text-white mt-4">{testimonial.customerName}</h4>
    <p className="text-md text-blue-400">{testimonial.carModel}</p>
  </div>
);

const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Apa Kata Pelanggan Kami?</h2>
          <p className="mt-4 text-lg text-gray-400">Kepuasan Anda adalah prioritas utama kami.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;