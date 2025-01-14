import React from 'react';
import { Running } from 'lucide-react';

const RunningInjuries = () => {
  const injuries = [
    {
      title: 'Pulled Hamstring',
      description: 'An injury to the hamstring muscle causing mild to severe pain.'
    },
    {
      title: 'Hip Stress Fractures',
      description: 'Common in long distance runners due to repetitive motion.'
    },
    {
      title: 'Shin Splints',
      description: 'Pain in the bone between the knee and ankle.'
    },
    {
      title: 'Achilles Tendonitis',
      description: 'Painful condition of the tendon in the back of the ankle.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Running className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Running Injuries</h2>
          <p className="text-gray-600">Expert treatment for common running-related injuries</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {injuries.map((injury, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{injury.title}</h3>
              <p className="text-gray-600">{injury.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RunningInjuries;