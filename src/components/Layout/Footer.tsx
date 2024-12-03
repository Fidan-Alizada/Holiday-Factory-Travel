import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +994 50 123 45 67
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@holidayfactory.az
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Baku, Azerbaijan
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/privacy" className="block hover:text-blue-400 transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block hover:text-blue-400 transition">
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Holiday Factory Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}