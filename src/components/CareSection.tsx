import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CareSectionProps {
  title: string;
  icon: LucideIcon;
  description: string;
  points: string[];
  alertText: string;
  bgColor: string;
  accentColor: string;
}

export default function CareSection({
  title,
  icon: Icon,
  description,
  points,
  alertText,
  bgColor,
  accentColor,
}: CareSectionProps) {
  return (
    <div className={`${bgColor} rounded-lg p-8`}>
      <div className="flex items-center mb-6">
        <Icon className={`w-8 h-8 ${accentColor} mr-4`} />
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className={`${accentColor} mr-2`}>•</span>
            <span className="text-gray-600">{point}</span>
          </li>
        ))}
      </ul>
      <div className="bg-white rounded-md p-4 shadow-sm">
        <p className="text-gray-800 font-medium">{alertText}</p>
      </div>
    </div>
  );
}