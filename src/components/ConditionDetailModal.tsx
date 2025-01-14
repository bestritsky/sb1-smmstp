import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ConditionDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  condition: {
    name: string;
    description: string;
    image: string;
  };
  buttonPosition?: { x: number; y: number };
}

const ConditionDetailModal = ({ isOpen, onClose, condition, buttonPosition }: ConditionDetailModalProps) => {
  const [modalStyle, setModalStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (isOpen && buttonPosition) {
      const modalWidth = 400;
      const modalHeight = 500;
      const padding = 20;

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
          <h3 className="text-2xl font-bold text-gray-800">{condition.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <img
            src={condition.image}
            alt={condition.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600">{condition.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ConditionDetailModal;