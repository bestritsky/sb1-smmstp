import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Square } from 'lucide-react';

interface AudioPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  buttonPosition?: { x: number; y: number };
}

const AudioPlayerModal = ({ isOpen, onClose, audioRef, buttonPosition }: AudioPlayerModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalStyle, setModalStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (isOpen && buttonPosition) {
      const modalWidth = 400; // Approximate width of the modal
      const modalHeight = 250; // Approximate height of the modal
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

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    };
  }, [isOpen]);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('ended', () => setIsPlaying(false));
      return () => audio.removeEventListener('ended', () => setIsPlaying(false));
    }
  }, [audioRef]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
      <div 
        className="bg-white rounded-lg max-w-md w-full shadow-xl"
        style={modalStyle}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-2xl font-bold text-gray-800">About Brookfield</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-center space-x-4">
            {!isPlaying ? (
              <button
                onClick={handlePlay}
                className="p-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
              >
                <Play className="w-6 h-6" />
              </button>
            ) : (
              <button
                onClick={handlePause}
                className="p-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
              >
                <Pause className="w-6 h-6" />
              </button>
            )}
            <button
              onClick={handleStop}
              className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
            >
              <Square className="w-6 h-6" />
            </button>
          </div>
          
          <div className="mt-6 text-center text-gray-600">
            <p>Listen to learn more about the town of Brookfield</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerModal;