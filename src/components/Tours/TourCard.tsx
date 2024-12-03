import React from 'react';
import { Clock, MapPin, DollarSign } from 'lucide-react';
import { Tour } from '../../types';

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={tour.imageUrl}
        alt={tour.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{tour.title}</h3>
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            {tour.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{tour.description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{tour.location}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <DollarSign className="w-4 h-4 mr-2" />
            <span>From ${tour.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}