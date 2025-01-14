import React from 'react';
import { X } from 'lucide-react';

interface PrologueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrologueModal = ({ isOpen, onClose }: PrologueModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
      <div className="min-h-screen px-4 text-center">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

        <div className="inline-block w-full max-w-2xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">A Life Well-Designed</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Picture a 72-year-old podiatrist who takes no medications, maintains an active practice, and genuinely loves coming to work each day. Dr. Cynthia Cornelius's journey from art history major to nuclear medicine technician to independent podiatrist isn't just inspiring – it's a blueprint for professional fulfillment.
            </p>

            <blockquote className="border-l-4 border-primary-500 pl-4 my-6 italic text-gray-700">
              "I did not want to be in my 40s and have some, let's say, wet behind the ears junior doctor telling me what to do."
            </blockquote>

            <p className="text-lg text-gray-600 mb-6">
              This prologue sets the stage for an intimate exploration of what's possible when you dare to practice medicine on your own terms. Through Dr. Cornelius's eyes, we see how the decision to embrace independence transformed not just her career, but her entire approach to patient care and personal well-being.
            </p>

            <p className="text-lg text-gray-600">
              Her philosophy of "Life is too short" becomes a rallying cry for practitioners tired of rushing through appointments and bowing to artificial productivity metrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrologueModal;