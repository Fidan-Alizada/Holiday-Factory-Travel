import React from 'react';
import { Shield, Users, Star, Award, Heart, Globe } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Reliability',
    description: 'We ensure every tour meets our high standards of quality and safety'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our love for Azerbaijan drives us to create exceptional experiences'
  },
  {
    icon: Globe,
    title: 'Cultural Respect',
    description: 'We promote understanding and appreciation of local traditions'
  }
];

const milestones = [
  { year: 2010, text: 'Company founded in Baku' },
  { year: 2015, text: 'Expanded to cover all regions of Azerbaijan' },
  { year: 2018, text: 'Received National Tourism Excellence Award' },
  { year: 2023, text: 'Served over 10,000 happy tourists' }
];

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://static.tildacdn.biz/tild3037-3066-4566-a566-383965363365/1670273145_17-kartin.jpg"
            alt="Baku at Night"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            We are your trusted travel company providing unforgettable travel experiences in Azerbaijan
          </p>
        </div>
      </div>

      {/* Company Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Holiday Factory Travel was founded in 2010 with a simple mission: to share the beauty and 
                rich culture of Azerbaijan with the world. What started as a small team of passionate 
                travel enthusiasts has grown into one of the country's leading tour operators.
              </p>
              <p className="text-gray-600">
                Our commitment to excellence, attention to detail, and deep love for our country's 
                heritage has helped us create unique experiences that showcase the best of Azerbaijan 
                to thousands of visitors from around the globe.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://yt3.googleusercontent.com/ytc/AOPolaS-VuEfNOLrF0CYjeTwzMyk9GHjB1ibl8p1sx8kpw=s900-c-k-c0x00ffffff-no-rj"
                alt="Team at work"
                className="rounded-lg"
              />
              <img
                src="https://teg.az/uploads/posts/2020-03/1583269314_transfer-po-bakinski.jpg"
                alt="Office environment"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-center gap-8">
                <div className="text-2xl font-bold text-blue-600 w-24 text-right">
                  {milestone.year}
                </div>
                <div className="relative flex-1">
                  <div className="absolute left-0 top-1/2 -translate-x-4 w-2 h-2 rounded-full bg-blue-600" />
                  <div className="pl-8 border-l border-blue-200">
                    <p className="text-gray-600">{milestone.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}