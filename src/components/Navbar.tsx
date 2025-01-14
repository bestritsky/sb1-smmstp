import React, { useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState<{ x: number; y: number } | undefined>();
  const navRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleScroll = (elementId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          const navbarHeight = navRef.current?.offsetHeight || 64;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        const navbarHeight = navRef.current?.offsetHeight || 64;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-[9999] w-full shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-xl font-bold text-primary-600 animate-slide-lr"
            >
              Brookfield Podiatry
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavigation('/book')} className="text-red-600 font-bold hover:text-red-700">Book</button>
            <button onClick={() => handleScroll('services')} className="text-black hover:text-primary-600">Services</button>
            <button onClick={() => handleScroll('conditions')} className="text-black hover:text-primary-600">Conditions</button>
            <button onClick={() => handleScroll('about')} className="text-black hover:text-primary-600">About</button>
            <button onClick={() => handleScroll('reviews')} className="text-black hover:text-primary-600">Reviews</button>
            <button onClick={() => handleScroll('patient-forms')} className="text-black hover:text-primary-600">New Patient Forms</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-primary-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-[9999]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => handleNavigation('/book')}
                className="block w-full text-left px-3 py-2 text-red-600 font-bold hover:text-red-700"
              >
                Book
              </button>
              <button
                onClick={() => handleScroll('services')}
                className="block w-full text-left px-3 py-2 text-black hover:text-primary-600"
              >
                Services
              </button>
              <button
                onClick={() => handleScroll('conditions')}
                className="block w-full text-left px-3 py-2 text-black hover:text-primary-600"
              >
                Conditions
              </button>
              <button
                onClick={() => handleScroll('about')}
                className="block w-full text-left px-3 py-2 text-black hover:text-primary-600"
              >
                About
              </button>
              <button
                onClick={() => handleScroll('reviews')}
                className="block w-full text-left px-3 py-2 text-black hover:text-primary-600"
              >
                Reviews
              </button>
              <button
                onClick={() => handleScroll('patient-forms')}
                className="block w-full text-left px-3 py-2 text-black hover:text-primary-600"
              >
                New Patient Forms
              </button>
            </div>
          </div>
        )}
      </div>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;