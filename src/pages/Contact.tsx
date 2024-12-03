import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Check, Clock } from 'lucide-react';

const contactInfo = {
  address: 'Baku, Nizami street 25, office 12',
  phone: '+994 55 123 45 67',
  email: 'info@holidayfactorytravel.az',
  workingHours: 'Mon-Fri: 9:00 - 18:00, Sat: 10:00 - 14:00'
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Leave a request or write to us, and we will help you choose the best tour!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Working Hours</h3>
                  <p className="text-gray-600">{contactInfo.workingHours}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-[300px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              <a 
                href="https://maps.google.com/?q=Baku+Nizami+street+25"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition"
              >
                <MapPin className="w-8 h-8 mb-2" />
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}