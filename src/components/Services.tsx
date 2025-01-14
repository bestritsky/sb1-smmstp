import React from 'react';
import { Activity, Heart, Shield, Footprints, Bone, Scissors } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Running Injuries',
      description: 'Expert treatment for common running injuries including shin splints, plantar fasciitis, and stress fractures.',
      icon: Activity
    },
    {
      title: 'Diabetic Foot Care',
      description: 'Specialized care for diabetic patients to prevent and treat foot-related complications.',
      icon: Heart
    },
    {
      title: 'Pediatric Care',
      description: 'Gentle, specialized foot care for infants and children to ensure healthy development.',
      icon: Shield
    },
    {
      title: 'Custom Orthotics',
      description: 'Personalized orthotic devices designed to improve foot function and reduce pain.',
      icon: Footprints
    },
    {
      title: 'Sports Medicine',
      description: 'Treatment and prevention of sports-related foot and ankle injuries.',
      icon: Bone
    },
    {
      title: 'Nail Care',
      description: 'Professional treatment for ingrown toenails and other nail-related conditions.',
      icon: Scissors
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600">Comprehensive foot care for all ages and conditions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-primary-50 rounded-lg p-8 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <service.icon className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;