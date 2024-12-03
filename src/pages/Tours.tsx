import React from 'react';
import { useTourStore } from '../store/useTourStore';
import { TourFilters } from '../components/Tours/TourFilters';
import { TourCard } from '../components/Tours/TourCard';
import { ContactCTA } from '../components/Tours/ContactCTA';

export function Tours() {
  const { tours, filters } = useTourStore();

  const filteredTours = tours.filter((tour) => {
    const matchesSearch = tour.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      tour.location.toLowerCase().includes(filters.search.toLowerCase());
    
    const matchesCategories = filters.categories.length === 0 ||
      filters.categories.includes(tour.category.toLowerCase());

    return matchesSearch && matchesCategories;
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://avatars.mds.yandex.net/get-mpic/5209712/img_id6480961663198555846.jpeg/orig"
            alt="Azerbaijan Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Tours</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Discover the best travel experiences in Azerbaijan with our guide!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <TourFilters />
            <div className="hidden lg:block">
              <ContactCTA />
            </div>
          </div>

          {/* Tour List */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>

            {filteredTours.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No tours found matching your criteria.
                </p>
              </div>
            )}

            <div className="mt-8 lg:hidden">
              <ContactCTA />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}