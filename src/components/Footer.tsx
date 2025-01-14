import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import AudioPlayerModal from './AudioPlayerModal';

const Footer = () => {
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState<{ x: number; y: number } | undefined>();
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAudioClick = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setButtonPosition({ x: rect.left, y: rect.top - 300 }); // Position above the button
    setIsAudioModalOpen(true);
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <audio ref={audioRef} src="https://binaryadvisers.com/wp-content/uploads/2024/11/Brookfield-.mp3" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Brookfield Podiatry</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <a 
                  href="https://maps.google.com/?q=246+Federal+Road,+Suite+C-21,+Brookfield,+CT+06804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  246 Federal Road<br />
                  Suite C-21<br />
                  Brookfield, CT 06804
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a 
                  href="tel:2037408637"
                  className="hover:text-primary-400 transition-colors"
                >
                  (203) 740-8637
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a 
                  href="mailto:contact@brookfieldpodiatry.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  contact@brookfieldpodiatry.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <ul className="space-y-2">
              <li>Monday: 10am-5pm</li>
              <li>Tuesday: 10am-5pm</li>
              <li>Thursday: 10am-5pm</li>
              <li>Friday: 10am-1pm</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleScroll('services')} className="text-white hover:text-primary-400 transition-colors">Services</button></li>
              <li><button onClick={() => handleScroll('about')} className="text-white hover:text-primary-400 transition-colors">About Us</button></li>
              <li><button onClick={() => handleScroll('reviews')} className="text-white hover:text-primary-400 transition-colors">Reviews</button></li>
              <li>
                <button 
                  onClick={handleAudioClick}
                  className="text-white hover:text-primary-400 transition-colors text-left"
                >
                  The Town of Brookfield
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Brookfield Podiatry. All rights reserved.</p>
        </div>
      </div>

      <AudioPlayerModal 
        isOpen={isAudioModalOpen} 
        onClose={() => setIsAudioModalOpen(false)}
        audioRef={audioRef}
        buttonPosition={buttonPosition}
      />
    </footer>
  );
};

export default Footer;