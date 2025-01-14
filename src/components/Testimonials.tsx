import React from 'react';
import { MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "The care I received was exceptional. My foot pain is completely gone!",
      author: "Sarah M."
    },
    {
      text: "Professional, knowledgeable, and caring staff. Highly recommended!",
      author: "John D."
    },
    {
      text: "They helped me get back to running after my injury. Thank you!",
      author: "Mike R."
    }
  ];

  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <MessageCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Patient Testimonials</h2>
          <p className="text-gray-600">What our patients say about us</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-bold text-emerald-600">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;