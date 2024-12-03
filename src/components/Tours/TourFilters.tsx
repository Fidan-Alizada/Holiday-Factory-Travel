import React from 'react';
import { X } from 'lucide-react';
import { useTourStore } from '../../store/useTourStore';

const categories = [
  { id: 'cultural', label: 'Cultural' },
  { id: 'nature', label: 'Nature' },
  { id: 'sightseeing', label: 'Sightseeing' },
  { id: 'family', label: 'Family' },
];

export function TourFilters() {
  const { filters, setFilters, resetFilters } = useTourStore();

  const handleCategoryChange = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter((id) => id !== categoryId)
      : [...filters.categories, categoryId];
    setFilters({ categories: newCategories });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h3 className="text-lg font-semibold">Filters</h3>
        {(filters.categories.length > 0 || filters.search) && (
          <button
            onClick={resetFilters}
            className="flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4 mr-1" />
            Reset filters
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Search Tours
          </label>
          <input
            type="text"
            id="search"
            value={filters.search}
            onChange={(e) => setFilters({ search: e.target.value })}
            placeholder="Search by tour name or location..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">{category.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}