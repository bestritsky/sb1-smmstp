import React from 'react';
import { X, Activity, Heart, Shield, Footprints, Bone, Scissors } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServicesModal = ({ isOpen, onClose }: ServiceModalProps) => {
  if (!isOpen) return null;

  const allServices = [
    {
      icon: Activity,
      title: 'Running Injuries',
      description: 'Expert treatment for common running injuries including shin splints, plantar fasciitis, and stress fractures.'
    },
    {
      icon: Heart,
      title: 'Diabetic Foot Care',
      description: 'Specialized care for diabetic patients to prevent and treat foot-related complications.'
    },
    {
      icon: Shield,
      title: 'Pediatric Care',
      description: 'Gentle, specialized foot care for infants and children to ensure healthy development.'
    },
    {
      icon: Footprints,
      title: 'Custom Orthotics',
      description: 'Personalized orthotic devices designed to improve foot function and reduce pain.'
    },
    {
      icon: Bone,
      title: 'Sports Medicine',
      description: 'Treatment and prevention of sports-related foot and ankle injuries.'
    },
    {
      icon: Scissors,
      title: 'Nail Care',
      description: 'Professional treatment for ingrown toenails and other nail-related conditions.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Our Services</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="bg-primary-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Insurance & Payment</h3>
            <p className="text-gray-600 mb-4">
              We accept most major insurance plans and will work with you to maximize your benefits.
              Our office staff will help verify your coverage and explain any out-of-pocket expenses.
            </p>
            <button
              onClick={() => window.location.href = '#contact'}
              className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
            >
              Contact Us for Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesModal;