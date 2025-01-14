import React, { useState } from 'react';
import { BookOpen, Star, Quote, Download } from 'lucide-react';
import DownloadModal from './DownloadModal';

const Book = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const handleDownload = () => {
    window.open('https://binaryadvisers.com/wp-content/uploads/2025/01/Brookfield_Independenet_Steps.pdf', '_blank');
  };

  const handleDownloadClick = () => {
    setIsDownloadModalOpen(true);
  };

  const chapters = [
    {
      title: "Prologue: A Life Well-Designed",
      description: "Introduces Dr. Cornelius's journey, highlighting her decision to break away from corporate medicine and build an independent practice rooted in patient care and personal fulfillment."
    },
    {
      title: "Chapter 1: Breaking Free from the Corporate Cage",
      description: "Discusses the constraints and burnout of corporate medicine, inspiring stories of doctors transitioning to independence, and the motivations behind such decisions."
    },
    {
      title: "Chapter 2: Designing Your Ideal Practice",
      description: "Focuses on creating a human-scale, patient-centered environment with intentional design and personalized care."
    },
    {
      title: "Chapter 3: Building Your Dream Practice",
      description: "Offers practical advice on starting an independent practice, covering financial planning, staffing, and adopting technology without compromising personal connection."
    },
    {
      title: "Chapter 4: The Science of Success",
      description: "Highlights research-backed principles for thriving practices, including leadership, patient-first strategies, and community engagement."
    },
    {
      title: "Chapter 5: The Patient Experience",
      description: "Explores how meaningful patient connections and compassionate care define independent practices, contrasting with impersonal corporate systems."
    },
    {
      title: "Chapter 6: Practice Management Mastery",
      description: "Covers efficient operations, financial strategies, and managing technology integration for small, independent practices."
    },
    {
      title: "Chapter 7: Real-World Patient Challenges",
      description: "Provides case studies illustrating the unique, compassionate care possible in independent practices and solutions for accessibility, financial struggles, and chronic diseases."
    },
    {
      title: "Chapter 8: Wisdom for New Practitioners",
      description: "Shares advice for aspiring independent physicians on designing practices, prioritizing patients, personal development, and staying true to their vision."
    },
    {
      title: "Chapter 9: The Future of Independent Practice",
      description: "Discusses trends and challenges in healthcare, advocating for the adaptability and leadership potential of independent practices in modern medicine."
    },
    {
      title: "Epilogue: A Legacy of Healing",
      description: "Reflects on Dr. Cornelius's journey and the enduring impact of independent practices, offering encouragement to the next generation of physicians."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary-600 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&q=80&w=2000"
            alt="Medical books background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <BookOpen className="w-16 h-16 text-yellow-300" />
            </div>
            
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-300 fill-yellow-300" />
              ))}
            </div>

            <h1 className="text-5xl font-bold mb-6">Independent Steps</h1>
            <p className="text-2xl mb-8">
              A Podiatrist's Journey from Corporate Medicine to Compassionate Practice and Self-Healing
            </p>

            {/* Top Download CTA */}
            <div className="mb-12">
              <button
                onClick={handleDownloadClick}
                className="inline-flex items-center gap-2 bg-yellow-300 text-primary-800 px-8 py-4 rounded-md font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                <Download className="w-6 h-6" />
                Download PDF
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-12">
              <Quote className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <blockquote className="text-xl italic mb-4">
                "I did not want to be in my 40s and have some, let's say, wet behind the ears junior doctor telling me what to do."
              </blockquote>
              <p className="text-lg text-yellow-300">- Dr. Cynthia Cornelius</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-lg leading-relaxed mb-8">
                This groundbreaking book chronicles Dr. Cynthia Cornelius's transformative journey from the constraints of corporate medicine to the liberating world of independent practice. With wisdom drawn from decades of experience, it offers invaluable insights for healthcare professionals seeking autonomy and fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Table of Contents</h2>
          <div className="space-y-6">
            {chapters.map((chapter, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{chapter.title}</h3>
                <p className="text-gray-600 leading-relaxed">{chapter.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom Download CTA */}
          <div className="mt-16 text-center">
            <div className="bg-primary-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h3>
              <p className="text-gray-600 mb-8">
                Download your free copy of "Independent Steps" and discover the path to a more fulfilling medical practice.
              </p>
              <button
                onClick={handleDownloadClick}
                className="inline-flex items-center gap-2 bg-yellow-300 text-primary-800 px-8 py-4 rounded-md font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                <Download className="w-6 h-6" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        onDownload={handleDownload}
      />
    </>
  );
};

export default Book;