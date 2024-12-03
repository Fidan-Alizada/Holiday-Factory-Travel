import { create } from 'zustand';
import { Tour } from '../types';

interface TourFilters {
  categories: string[];
  search: string;
}

interface TourState {
  tours: Tour[];
  filters: TourFilters;
  setFilters: (filters: Partial<TourFilters>) => void;
  resetFilters: () => void;
}

const initialTours: Tour[] = [
  {
    id: '1',
    title: 'Old City Tour',
    description: 'Explore the historic heart of Baku',
    imageUrl: 'https://lifehacker.ru/special/bezvizovye-strany/dist/countries/az.jpg',
    price: 49,
    duration: '4 hours',
    location: 'Baku',
    category: 'Cultural'
  },
  {
    id: '2',
    title: 'Gobustan & Mud Volcanoes',
    description: 'Discover ancient rock art and natural wonders',
    imageUrl: 'https://img.tsn.ua/cached/859/tsn-0aac7b3bbd08e91384419d4ae49bc10f/thumbs/1200x630/c9/69/2a5666614b01dc68023dc9cd184469c9.jpeg',
    price: 79,
    duration: '6 hours',
    location: 'Gobustan',
    category: 'Nature'
  },
  {
    id: '3',
    title: 'Gabala Adventure',
    description: 'Experience the beauty of mountain landscapes',
    imageUrl: 'https://azerbaijan.travel/resize3000/center/pages/343/313d4d92-b68b-4e74-adc9-90bad459c521.jpg',
    price: 129,
    duration: '12 hours',
    location: 'Gabala',
    category: 'Nature'
  },
  {
    id: '4',
    title: 'Baku Night Tour',
    description: 'Experience the city lights and modern architecture',
    imageUrl: 'https://test.suntorini.ru/wp-content/uploads/2020/06/Baku1-1500x1000.jpg',
    price: 59,
    duration: '3 hours',
    location: 'Baku',
    category: 'Sightseeing'
  },
  {
    id: '5',
    title: 'Family Fun in Shahdag',
    description: 'Perfect winter activities for the whole family',
    imageUrl: 'https://appartamenty-krasnaya-polyana.ru/uploads/images/63/d3/63d3c21143e530.66801667.webp',
    price: 149,
    duration: '8 hours',
    location: 'Shahdag',
    category: 'Family'
  }
];

export const useTourStore = create<TourState>((set) => ({
  tours: initialTours,
  filters: {
    categories: [],
    search: '',
  },
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  resetFilters: () =>
    set(() => ({
      filters: {
        categories: [],
        search: '',
      },
    })),
}));