import React from 'react';
import { X } from 'lucide-react';

interface ChapterModalProps {
  isOpen: boolean;
  onClose: () => void;
  chapter: {
    number: number;
    title: string;
    content: {
      paragraphs: string[];
    };
  };
}

const ChapterModal = ({ isOpen, onClose, chapter }: ChapterModalProps) => {
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
            <h3 className="text-2xl font-bold text-gray-800">Chapter {chapter.number}: {chapter.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="prose max-w-none">
            {chapter.content.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-600 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterModal;