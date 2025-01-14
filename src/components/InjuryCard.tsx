import React from 'react';
import { AlertCircle } from 'lucide-react';

interface InjuryCardProps {
  title: string;
  description: string;
}

export default function InjuryCard({ title, description }: InjuryCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start mb-4">
        <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}