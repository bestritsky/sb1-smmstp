import React from 'react';
import { Award, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our Practice</h2>
            <p className="text-gray-600">A beautiful practice for all your podiatric needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Care</h3>
              <p className="text-gray-600">
                Providing the highest quality foot care with state-of-the-art facilities
              </p>
            </div>

            <div className="text-center">
              <Users className="w-12 h-12 text-primary-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Patient-Focused</h3>
              <p className="text-gray-600">
                Dedicated to your comfort and well-being with personalized treatment plans
              </p>
            </div>

            <div className="text-center">
              <Clock className="w-12 h-12 text-primary-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Convenient Hours</h3>
              <p className="text-gray-600">
                Flexible scheduling to accommodate your busy lifestyle
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Insurance & Payment</h3>
            <p className="text-gray-600 mb-4">
              We work with your insurance carrier and help you recover the most from your benefits. 
              Our office accepts cash, checks, and most major credit cards.
            </p>
            <p className="text-gray-600">
              If you need to cancel an appointment, please provide at least 24 hours notice. 
              This allows us to offer the appointment to another patient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;