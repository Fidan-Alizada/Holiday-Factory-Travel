import React from 'react';
import { Hero } from '../components/Home/Hero';
import { PopularTours } from '../components/Home/PopularTours';
import { AboutSection } from '../components/Home/AboutSection';
import { ReviewSection } from '../components/Home/ReviewSection';

export function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <PopularTours />
      <ReviewSection />
    </div>
  );
}