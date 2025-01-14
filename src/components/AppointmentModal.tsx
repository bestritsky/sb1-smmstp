import React, { useEffect, useState } from 'react';
import { X, Phone, Calendar } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonPosition?: { x: number; y: number };
}

const AppointmentModal = ({ isOpen, onClose, buttonPosition }: AppointmentModalProps) => {
  const [modalStyle, setModalStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (isOpen && buttonPosition) {
      const modalWidth = 400; // Approximate width of the modal
      const modalHeight = 400; // Approximate height of the modal
      const padding = 20;

      // Calculate position relative to viewport
      let top = buttonPosition.y + padding;
      let left = buttonPosition.x;

      // Adjust if modal would go off-screen
      if (top + modalHeight > window.innerHeight) {
        top = buttonPosition.y - modalHeight - padding;
      }
      if (left + modalWidth > window.innerWidth) {
        left = window.innerWidth - modalWidth - padding;
      }
      if (left < padding) {
        left = padding;
      }
      if (top < padding) {
        top = padding;
      }

      setModalStyle({
        position: 'fixed',
        top: `${top}px`,
        left: `${left}px`,
        transform: 'none'
      });
    }
  }, [isOpen, buttonPosition]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
      <div 
        className="bg-white rounded-lg max-w-md w-full shadow-xl"
        style={modalStyle}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-2xl font-bold text-gray-800">Schedule an Appointment</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Call us to schedule your appointment. Our staff will be happy to help you find a convenient time.
          </p>
          
          <a
            href="tel:2037408637"
            className="flex items-center justify-center gap-2 w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors mb-4"
          >
            <Phone className="w-5 h-5" />
            (203) 740-8637
          </a>
          
          <div className="text-sm text-gray-600">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4" />
              <span>Office Hours:</span>
            </div>
            <ul className="space-y-1 ml-6">
              <li>Monday: 10am-5pm</li>
              <li>Tuesday: 10am-5pm</li>
              <li>Thursday: 10am-5pm</li>
              <li>Friday: 10am-1pm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;