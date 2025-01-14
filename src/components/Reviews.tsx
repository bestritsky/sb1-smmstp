import React, { useEffect, useState } from 'react';
import { Star, MessageCircle, X } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah J.",
    rating: 5,
    text: "Dr. Cornelius is amazing! She took the time to explain everything and made sure I was comfortable throughout the procedure. My foot pain is completely gone now.",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Michael C.",
    rating: 5,
    text: "The best podiatrist I've ever visited. The office is modern and clean, and the staff is incredibly friendly. Highly recommend!",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Emily R.",
    rating: 5,
    text: "I had been suffering from plantar fasciitis for months. After just two visits with Dr. Cornelius, I noticed a significant improvement. She's truly exceptional!",
    date: "February 2024"
  },
  {
    id: 4,
    name: "David T.",
    rating: 4,
    text: "Very professional practice with state-of-the-art equipment. Dr. Cornelius really knows her stuff and takes time with each patient.",
    date: "January 2024"
  },
  {
    id: 5,
    name: "Lisa M.",
    rating: 5,
    text: "Outstanding care from start to finish. The office staff is wonderful, and Dr. Cornelius provided excellent treatment for my running injury.",
    date: "January 2024"
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState<{ top: number; left: number } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    text: ''
  });
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleReviewClick = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const modalWidth = 500; // Approximate width of the modal
    const modalHeight = 600; // Approximate height of the modal
    const padding = 20;

    let top = rect.bottom + padding;
    let left = rect.left;

    // Adjust if modal would go off-screen
    if (top + modalHeight > window.innerHeight) {
      top = rect.top - modalHeight - padding;
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

    setModalPosition({ top, left });
    setIsModalOpen(true);
  };

  const renderStars = (rating: number, interactive = false) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < (interactive ? hoverRating || formData.rating : rating)
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300'
        } ${interactive ? 'cursor-pointer' : ''}`}
        onMouseEnter={() => interactive && setHoverRating(index + 1)}
        onMouseLeave={() => interactive && setHoverRating(0)}
        onClick={() => interactive && setFormData({ ...formData, rating: index + 1 })}
      />
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your review! It will be posted after moderation.');
    setIsModalOpen(false);
    setFormData({ name: '', rating: 0, text: '' });
    setModalPosition(null);
  };

  return (
    <section id="reviews" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <MessageCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Patient Reviews</h2>
            <p className="text-gray-600">What our patients say about their experience</p>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-2xl">
                    <div className="flex items-center mb-4">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-800">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-primary-600 font-bold">{review.rating}.0</span>
                        <span className="text-gray-400 ml-1">/ 5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentIndex === index ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleReviewClick}
              className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
            >
              Leave a Review
            </button>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
          <div 
            className="bg-white rounded-lg max-w-xl w-full shadow-xl absolute"
            style={{
              top: modalPosition?.top ?? '50%',
              left: modalPosition?.left ?? '50%',
              transform: modalPosition ? 'none' : 'translate(-50%, -50%)'
            }}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-800">Write a Review</h3>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setModalPosition(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Rating</label>
                <div className="flex gap-1">
                  {renderStars(formData.rating, true)}
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Your Review</label>
                <textarea
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setModalPosition(null);
                  }}
                  className="px-6 py-2 border rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                  disabled={!formData.rating || !formData.name || !formData.text}
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;