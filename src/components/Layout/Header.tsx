import React from 'react';
import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';
import { useLanguageStore } from '../../store/useLanguageStore';
import { Language } from '../../types';

const languages: { value: Language; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Русский' },
  { value: 'az', label: 'Azərbaycan' },
];

export function Header() {
  const { currentLanguage, setLanguage } = useLanguageStore();

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          <Link to="/" className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Holiday Factory Travel</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">
              About Us
            </Link>
            <Link to="/tours" className="text-gray-700 hover:text-blue-600 transition">
              Tours
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>

          <select
            value={currentLanguage}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="bg-white border border-gray-300 rounded-md px-3 py-1"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}