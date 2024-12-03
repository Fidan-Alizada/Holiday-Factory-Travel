import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export function ContactCTA() {
  return (
    <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold mb-4">
        Didn't find a suitable tour?
      </h3>
      <p className="text-lg mb-6">
        Contact us to get a personal offer tailored to your preferences!
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
      >
        <MessageSquare className="w-5 h-5 mr-2" />
        Contact Us
      </Link>
    </div>
  );
}