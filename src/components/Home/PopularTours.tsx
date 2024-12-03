import React from 'react';
import { Clock, MapPin, DollarSign } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const popularTours = [
  {
    id: '1',
    title: 'Old City Tour',
    description: 'Explore the historic heart of Baku',
    imageUrl: 'https://lifehacker.ru/special/bezvizovye-strany/dist/countries/az.jpg',
    price: 49,
    duration: '4 hours',
    location: 'Baku'
  },
  {
    id: '2',
    title: 'Gobustan & Mud Volcanoes',
    description: 'Discover ancient rock art and natural wonders',
    imageUrl: 'https://img.tsn.ua/cached/859/tsn-0aac7b3bbd08e91384419d4ae49bc10f/thumbs/1200x630/c9/69/2a5666614b01dc68023dc9cd184469c9.jpeg',
    price: 79,
    duration: '6 hours',
    location: 'Gobustan'
  },
  {
    id: '3',
    title: 'Gabala Adventure',
    description: 'Experience the beauty of mountain landscapes',
    imageUrl: 'https://azerbaijan.travel/resize3000/center/pages/343/313d4d92-b68b-4e74-adc9-90bad459c521.jpg',
    price: 129,
    duration: '12 hours',
    location: 'Gabala'
  }
];

export function PopularTours() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Tours</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {popularTours.map((tour) => (
            <SwiperSlide key={tour.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={tour.imageUrl}
                  alt={tour.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}