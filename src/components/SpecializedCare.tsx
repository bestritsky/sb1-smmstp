import React from 'react';
import { Activity } from 'lucide-react';

const SpecializedCare = () => {
  return (
    <section id="specialized-care" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Activity className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Specialized Care</h2>
          <p className="text-gray-600">Expert treatment for specific foot conditions</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Diabetic Foot Care</h3>
            <p className="text-gray-600">
              Comprehensive care for diabetic patients, including regular check-ups and preventive treatments.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Pediatric Foot Care</h3>
            <p className="text-gray-600">
              Specialized treatment for children's foot conditions, ensuring proper development and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedCare;