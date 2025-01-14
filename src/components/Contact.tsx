import React, { useState } from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">We're here to help with all your podiatric needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Office Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <a 
                        href="https://maps.google.com/?q=246+Federal+Road,+Suite+C-21,+Brookfield,+CT+06804"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        246 Federal Road, Suite C-21<br />
                        Brookfield, CT 06804
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Contact Numbers</p>
                      <a 
                        href="tel:2037408637"
                        className="text-gray-600 hover:text-primary-600 transition-colors block"
                      >
                        Phone: (203) 740-8637
                      </a>
                      <p className="text-gray-600">Fax: (203) 740-8750</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <ul className="text-gray-600">
                        <li>Monday: 10am-5pm</li>
                        <li>Tuesday: 10am-5pm</li>
                        <li>Thursday: 10am-5pm</li>
                        <li>Friday: 10am-1pm</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Schedule an Appointment</h3>
              <p className="text-gray-600 mb-6">
                Please call our office to schedule an appointment. Our staff will be happy to help you
                find a convenient time that works with your schedule.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
              >
                Call (203) 740-8637
              </button>
              <p className="mt-4 text-sm text-gray-600">
                If you need to cancel an appointment, please provide at least 24 hours notice.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Contact;