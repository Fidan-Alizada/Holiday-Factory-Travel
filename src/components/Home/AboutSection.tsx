import React from 'react';
import { Shield, Users, Star } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'We are fully licensed and insured for your peace of mind'
  },
  {
    icon: Users,
    title: 'Expert Guides',
    description: 'Our professional guides ensure an enriching experience'
  },
  {
    icon: Star,
    title: 'Personalized Service',
    description: 'Customized tours tailored to your preferences'
  }
];

export function AboutSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Holiday Factory Travel is your trusted partner in exploring Azerbaijan. 
            We combine local expertise with world-class service to create unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}