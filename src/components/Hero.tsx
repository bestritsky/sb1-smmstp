import React, { useState } from 'react';
import { Phone, MapPin, Calendar, Building, BookOpen, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState<{ x: number; y: number } | undefined>();
  const navigate = useNavigate();

  const handleAppointmentClick = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setModalPosition({ x: rect.left, y: rect.bottom });
    setIsModalOpen(true);
  };

  return (
    <section className="relative bg-primary-600 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000"
          alt="Medical office"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Dr. Cynthia Cornelius.</h1>
          <p className="text-2xl mb-6">A Beautiful Practice For All Your Podiatry Needs.</p>
          
          {/* Enhanced Book Section */}
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-yellow-300 rounded-lg blur opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 backdrop-blur-md rounded-lg p-8 border-2 border-yellow-300">
              <div className="flex items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <BookOpen className="w-8 h-8 text-yellow-300 mr-3" />
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                      ))}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-yellow-300">New Book Release!</h2>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-yellow-300/30 blur-sm rounded-lg"></div>
                    <h3 className="relative text-3xl font-bold mb-3 text-white">Independent Steps</h3>
                    <p className="relative text-xl font-semibold mb-4 text-yellow-100 leading-snug">
                      A Podiatrist's Journey from Corporate Medicine to Compassionate Practice and Self-Healing
                    </p>
                  </div>
                  <p className="text-white/90 leading-relaxed mb-6">
                    This manuscript is a heartfelt chronicle of Dr. Cynthia Cornelius's transformative journey from the confines of corporate medicine to the liberating world of independent practice. With wisdom drawn from decades of experience, it delves into the challenges and compromises that often plague modern healthcare, juxtaposing them with the profound fulfillment of patient-centered care.
                  </p>
                  
                  {/* Video Section */}
                  <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
                    <video 
                      controls 
                      className="w-full"
                      poster="https://binaryadvisers.com/wp-content/uploads/2024/11/synthia_cornelius2-1.jpg"
                    >
                      <source 
                        src="https://binaryadvisers.com/wp-content/uploads/2025/01/Breaking-Free_-Independent-Podiatry-Practice-1.mp4" 
                        type="video/mp4" 
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => navigate('/book')}
                      className="bg-yellow-300 text-primary-800 px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
                    >
                      Learn More
                    </button>
                    <button 
                      onClick={() => navigate('/book')}
                      className="bg-yellow-300 text-primary-800 px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
                    >
                      Free Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 space-y-6">
            <div className="flex items-start">
              <Building className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm">
                We are proud to provide a state-of-the-art facility for the highest quality foot care available. 
                Protecting the well-being of our valued patients is our top priority.
              </p>
            </div>

            <div className="flex items-start">
              <Calendar className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm">
                Our answering service is available 24/7 and will contact the doctor if necessary. 
                We'll accommodate your schedule to the best of our ability.
              </p>
            </div>
            
            <div className="flex items-start">
              <MapPin className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <a 
                href="https://maps.google.com/?q=246+Federal+Road,+Suite+C-21,+Brookfield,+CT+06804"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-200 transition-colors"
              >
                246 Federal Road<br />
                Suite C-21<br />
                Brookfield, CT 06804
              </a>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <a 
                  href="tel:2037408637"
                  className="hover:text-primary-200 transition-colors"
                >
                  Phone: (203) 740-8637
                </a>
                <p className="text-sm">Fax: (203) 740-8750</p>
              </div>
            </div>
            
            <div className="mt-6">
              <button 
                onClick={handleAppointmentClick}
                className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors w-full md:w-auto"
              >
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setModalPosition(undefined);
        }}
        buttonPosition={modalPosition}
      />
    </section>
  );
};

export default Hero;