import React from 'react';
import { MapPin } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://tovia.ru/upload/iblock/427/v6gvhkj5wz91u04tsta28gyh47vg00wd.jpg"
          alt="Baku Flame Towers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Azerbaijan's Beauty
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Experience the perfect blend of ancient history and modern culture with our expertly curated tours
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
            Explore Tours
          </button>
          <button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}