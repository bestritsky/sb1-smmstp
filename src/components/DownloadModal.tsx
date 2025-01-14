import React, { useState, useEffect } from 'react';
import { X, Download, Heart } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

const DownloadModal = ({ isOpen, onClose, onDownload }: DownloadModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isFormValid = formData.name.trim() !== '' && formData.email.trim() !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid && !isSubmitting) {
      setIsSubmitting(true);
      setError(null);
      
      try {
        // First trigger the download
        onDownload();
        
        // Then submit the form data to Make.com webhook
        await fetch('https://hook.us1.make.com/a97adhafx7fki6gw8gjwuxmmn45n8twu', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            timestamp: new Date().toISOString(),
            source: window.location.href
          })
        });

        // Close modal and reset form
        onClose();
        setFormData({ name: '', email: '' });
      } catch (error) {
        console.error('Error:', error);
        setError('There was an error processing your request. The download should have started. If not, please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Close modal with escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
      <div className="min-h-screen px-4 text-center">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

        <div className="inline-block w-full max-w-xl p-8 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
              <img
                src="https://binaryadvisers.com/wp-content/uploads/2024/11/synthia_cornelius2-1.jpg"
                alt="Dr. Cynthia Cornelius"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You For Downloading My Book</h3>
            <div className="flex items-center justify-center gap-2 text-red-500 mb-4">
              <Heart className="w-5 h-5 fill-current" />
              <p className="text-lg text-gray-600">Please Feel Free In Contacting Me If You Feel The Same</p>
              <Heart className="w-5 h-5 fill-current" />
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-white transition-all ${
                isFormValid && !isSubmitting
                  ? 'bg-primary-600 hover:bg-primary-700 transform hover:scale-105' 
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={!isFormValid || isSubmitting}
            >
              <Download className="w-5 h-5" />
              {isSubmitting ? 'Processing...' : 'Download PDF'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            By downloading, you'll receive occasional updates about my journey and insights
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;